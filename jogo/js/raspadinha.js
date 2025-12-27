// ============================
// TRACKING: CAPTURA + PERSISTE
// ============================
function getAllQueryParams() {
  const url = new URL(window.location.href);
  const obj = {};
  url.searchParams.forEach((value, key) => { obj[key] = value; });
  return obj;
}

function isTrackingParam(key) {
  const k = String(key || '').toLowerCase();
  return (
    k.startsWith('utm_') ||
    k === 'src' || k === 'source' || k === 'sck' ||
    k === 'fbclid' || k === 'gclid' || k === 'wbraid' || k === 'gbraid' ||
    k === 'ttclid' || k === 'msclkid' || k === 'yclid' ||
    k === 'ref' || k === 'referrer' || k === 'campaign' ||
    k === 'ad_id' || k === 'adset_id' || k === 'campaign_id'
  );
}

function getStoredTracking() {
  try { return JSON.parse(localStorage.getItem('tracking_params') || '{}') || {}; }
  catch (e) { return {}; }
}

function persistTrackingParams() {
  const current = getAllQueryParams();
  const stored = getStoredTracking();
  const merged = { ...stored };

  Object.keys(current).forEach((key) => {
    if (isTrackingParam(key) && current[key] !== '' && current[key] != null) {
      merged[key] = current[key];
    }
  });

  localStorage.setItem('tracking_params', JSON.stringify(merged));

  // Compatibilidade com código antigo (utm_params apenas utm_*)
  const utmOnly = {};
  Object.keys(merged).forEach((k) => {
    if (String(k).toLowerCase().startsWith('utm_')) utmOnly[k] = merged[k];
  });
  localStorage.setItem('utm_params', JSON.stringify(utmOnly));

  return merged;
}

// ============================
// Configuração do jogo
// ============================
const CONFIG = {
  totalTentativas: 3,
  premiosPorTentativa: {
    1: { valor: 20, imagem: '/jogo/img/R$20,00.webp' },
    2: { valor: 180, imagem: '/jogo/img/R$100,00.webp' },
    3: { valor: 4800, imagem: '/jogo/img/R5.webp' }
  },
  matrizPremios: [
    ['../img/R$100,00.webp', '/jogo/img/R$500,00.webp', '/jogo/img/R$200,00.webp'],
    ['../img/R$500,00.webp', '/jogo/img/R1.webp', '/jogo/img/R5.webp'],
    ['../img/R10.webp', '/jogo/img/R$50,00.webp', '/jogo/img/R15.webp']
  ],
  valoresDasImagens: {
    '/jogo/img/R$1,00.webp': 'R$1,00',
    '/jogo/img/R$2,00.webp': 'R$2,00',
    '/jogo/img/R$5,00.webp': 'R$5,00',
    '/jogo/img/R$10,00.webp': 'R$10,00',
    '/jogo/img/R$20,00.webp': 'R$20,00',
    '/jogo/img/R$50,00.webp': 'R$50,00',
    '/jogo/img/R$100,00.webp': 'R$100,00',
    '/jogo/img/R$200,00.webp': 'R$200,00',
    '/jogo/img/R$500,00.webp': 'R$500,00',
    '/jogo/img/R1.webp': 'R$1.000,00',
    '/jogo/img/R5.webp': 'R$5.000,00',
    '/jogo/img/R10.webp': 'R$10.000,00',
    '/jogo/img/R15.webp': 'R$15.000,00'
  }
};

// Estado do jogo
let estadoJogo = {
  tentativaAtual: 1,
  saldo: 0,
  jogando: false,
  jogoConcluido: false,
  usuario: { nome: '' },
  premiosGanhos: []
};

// Elementos DOM
let elementos = {};
let contextoCanvas = null;
let raspagemAtiva = false;
let ultimoX = 0;
let ultimoY = 0;
let verificacaoInterval = null;

// Elemento de áudio
let audioGanho = null;

// Inicializar
document.addEventListener('DOMContentLoaded', function () {
  // ✅ captura e salva UTM/src/fbclid/gclid etc assim que abrir
  persistTrackingParams();

  console.log('Página carregada, iniciando...');

  // Elementos
  elementos = {
    saldoCarteira: document.getElementById('saldoCarteira'),
    nomeUsuario: document.getElementById('nomeUsuario'),
    contadorTentativas: document.getElementById('contadorTentativas'),
    btnJogar: document.getElementById('btnJogar'),
    raspadinhaContainer: document.getElementById('raspadinhaContainer'),
    scratchCanvas: document.getElementById('scratchCanvas'),
    premiosGrid: document.getElementById('premiosGrid'),
    raspadinhaOverlay: document.getElementById('raspadinhaOverlay'),
    modalResultado: document.getElementById('modalResultado'),
    modalFinal: document.getElementById('modalFinal'),
    modalTitulo: document.getElementById('modalTitulo'),
    imagemPremio: document.getElementById('imagemPremio'),
    resultadoTexto: document.getElementById('resultadoTexto'),
    valorGanho: document.getElementById('valorGanho'),
    saldoAtualizado: document.getElementById('saldoAtualizado'),
    tentativasRestantes: document.getElementById('tentativasRestantes'),
    btnContinuar: document.getElementById('btnContinuar'),
    fecharModal: document.getElementById('fecharModal'),
    premioTotal: document.getElementById('premioTotal'),
    btnResgatar: document.getElementById('btnResgatar')
  };

  console.log('Elementos carregados:', Object.keys(elementos).length);

  inicializarAudio();
  carregarDadosUsuario();
  inicializarJogo();
  configurarEventos();
  gerarMatrizPremios();

  setTimeout(() => {
    inicializarCanvas();
  }, 500);

  console.log('Inicialização completa');
});

// Função para inicializar o áudio
function inicializarAudio() {
  try {
    audioGanho = new Audio('../img/som.mp3');
    audioGanho.preload = 'auto';
    audioGanho.volume = 0.7;
    audioGanho.loop = false;

    console.log('Áudio inicializado');
    audioGanho.load();

    audioGanho.addEventListener('canplaythrough', function () {
      console.log('Áudio carregado e pronto para tocar');
    });

    audioGanho.addEventListener('error', function (e) {
      console.error('Erro ao carregar áudio:', e);
      console.log('Caminho do áudio:', audioGanho.src);
    });
  } catch (error) {
    console.error('Erro ao inicializar áudio:', error);
  }
}

// Função para tocar som de ganho
function tocarSomGanho() {
  if (!audioGanho) {
    console.log('Áudio não inicializado, tentando inicializar novamente...');
    inicializarAudio();
  }

  try {
    audioGanho.currentTime = 0;

    const playPromise = audioGanho.play();

    if (playPromise !== undefined) {
      playPromise.then(() => {
        console.log('Som de ganho tocando');
      }).catch(error => {
        console.log('Erro ao tocar áudio (pode ser bloqueado pelo navegador):', error);

        document.addEventListener('click', function tentarTocarNovamente() {
          audioGanho.play().then(() => {
            console.log('Som tocado após interação do usuário');
          }).catch(() => {
            console.log('Ainda não foi possível tocar o áudio');
          });
          document.removeEventListener('click', tentarTocarNovamente);
        });
      });
    }
  } catch (error) {
    console.error('Erro ao tentar tocar som:', error);
  }
}

function carregarDadosUsuario() {
  try {
    const dados = localStorage.getItem('usuario_dados');
    if (dados) {
      estadoJogo.usuario = JSON.parse(dados);
      if (estadoJogo.usuario.nome && elementos.nomeUsuario) {
        const primeiroNome = estadoJogo.usuario.nome.split(' ')[0];
        elementos.nomeUsuario.textContent = primeiroNome;
      }
    }
  } catch (e) {
    console.log('Erro usuário:', e);
  }
}

function inicializarJogo() {
  const salvo = localStorage.getItem('estado_jogo');
  if (salvo) {
    try {
      const data = JSON.parse(salvo);
      if (data.usuarioCpf === estadoJogo.usuario.cpf) {
        estadoJogo.tentativaAtual = data.tentativaAtual || 1;
        estadoJogo.saldo = data.saldo || 0;
        estadoJogo.jogoConcluido = data.jogoConcluido || false;
        estadoJogo.premiosGanhos = data.premiosGanhos || [];

        if (estadoJogo.tentativaAtual > CONFIG.totalTentativas) {
          estadoJogo.tentativaAtual = CONFIG.totalTentativas + 1;
        }

        if (estadoJogo.jogoConcluido) {
          setTimeout(() => mostrarResultadoFinal(), 1000);
        }
      }
    } catch (e) {
      console.log('Erro estado:', e);
    }
  }
  atualizarInterface();
}

function configurarEventos() {
  if (elementos.btnJogar) {
    elementos.btnJogar.addEventListener('click', iniciarTentativa);
  }
  if (elementos.fecharModal) {
    elementos.fecharModal.addEventListener('click', fecharModalResultado);
  }
  if (elementos.btnContinuar) {
    elementos.btnContinuar.addEventListener('click', continuarJogo);
  }
  if (elementos.btnResgatar) {
    elementos.btnResgatar.addEventListener('click', resgatarPremio);
  }
}

function gerarMatrizPremios() {
  if (!elementos.premiosGrid) return;

  elementos.premiosGrid.innerHTML = '';

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const cell = document.createElement('div');
      cell.className = 'premio-cell';

      const container = document.createElement('div');
      container.className = 'premio-cell-container';
      container.style.cssText = `
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        padding: 5px;
      `;

      const imgSrc = CONFIG.matrizPremios[i][j];
      const img = document.createElement('img');
      img.src = imgSrc;
      img.alt = 'Prêmio';
      img.style.cssText = `
        width: 60%;
        height: 60%;
        object-fit: contain;
        margin-bottom: 5px;
      `;

      const valorSpan = document.createElement('span');
      valorSpan.className = 'premio-cell-valor';
      valorSpan.textContent = CONFIG.valoresDasImagens[imgSrc] || 'Prêmio';
      valorSpan.style.cssText = `
        color: white;
        font-size: 12px;
        font-weight: bold;
        text-align: center;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
      `;

      container.appendChild(img);
      container.appendChild(valorSpan);

      cell.appendChild(container);
      elementos.premiosGrid.appendChild(cell);
    }
  }
}

function inicializarCanvas() {
  if (!elementos.scratchCanvas || !elementos.raspadinhaContainer) return;

  const canvas = elementos.scratchCanvas;
  const container = elementos.raspadinhaContainer;
  const rect = container.getBoundingClientRect();

  canvas.width = rect.width;
  canvas.height = rect.height;

  contextoCanvas = canvas.getContext('2d');

  contextoCanvas.globalCompositeOperation = 'source-over';
  contextoCanvas.clearRect(0, 0, canvas.width, canvas.height);

  if (elementos.raspadinhaOverlay) {
    elementos.raspadinhaOverlay.style.display = 'block';
  }
}

function iniciarTentativa() {
  if (estadoJogo.jogando || estadoJogo.jogoConcluido || estadoJogo.tentativaAtual > CONFIG.totalTentativas) {
    console.log('Não pode jogar:', estadoJogo);
    return;
  }

  console.log('Iniciando tentativa', estadoJogo.tentativaAtual);

  if (elementos.raspadinhaOverlay) {
    elementos.raspadinhaOverlay.style.display = 'none';
  }

  estadoJogo.jogando = true;
  elementos.btnJogar.disabled = true;
  elementos.btnJogar.innerHTML = '<i class="fas fa-sync-alt fa-spin"></i> Raspando...';

  prepararCanvasParaRaspagem();
}

function prepararCanvasParaRaspagem() {
  const canvas = elementos.scratchCanvas;
  if (!canvas || !contextoCanvas) return;

  contextoCanvas.globalCompositeOperation = 'source-over';
  contextoCanvas.clearRect(0, 0, canvas.width, canvas.height);

  const img = new Image();
  img.src = '../img/raspa.png';

  img.onload = function () {
    contextoCanvas.drawImage(img, 0, 0, canvas.width, canvas.height);

    contextoCanvas.globalCompositeOperation = 'destination-out';
    contextoCanvas.lineWidth = 35;
    contextoCanvas.lineCap = 'round';
    contextoCanvas.lineJoin = 'round';
    contextoCanvas.strokeStyle = 'rgba(0,0,0,1)';

    console.log('Imagem carregada no canvas, iniciando raspagem...');
    iniciarRaspagem();
  };

  img.onerror = function () {
    console.log('Erro ao carregar imagem, usando fallback');

    contextoCanvas.fillStyle = '#8B4513';
    contextoCanvas.fillRect(0, 0, canvas.width, canvas.height);
    contextoCanvas.globalCompositeOperation = 'destination-out';
    contextoCanvas.lineWidth = 35;
    contextoCanvas.lineCap = 'round';
    contextoCanvas.lineJoin = 'round';
    contextoCanvas.strokeStyle = 'rgba(0,0,0,1)';

    iniciarRaspagem();
  };
}

function iniciarRaspagem() {
  const canvas = elementos.scratchCanvas;
  if (!canvas || !contextoCanvas) return;

  console.log('Iniciando raspagem');

  raspagemAtiva = false;
  const pixelsTotais = canvas.width * canvas.height;
  const porcentagemRequerida = 0.7;

  if (verificacaoInterval) {
    clearInterval(verificacaoInterval);
  }

  function verificarPorcentagemRaspada() {
    const imageData = contextoCanvas.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    let transparentPixels = 0;

    for (let i = 3; i < data.length; i += 4) {
      if (data[i] === 0) transparentPixels++;
    }

    const porcentagem = transparentPixels / pixelsTotais;
    console.log(`Porcentagem raspada: ${(porcentagem * 100).toFixed(1)}%`);

    if (porcentagem >= porcentagemRequerida) {
      console.log(`70% alcançado! ${(porcentagem * 100).toFixed(1)}% raspado`);
      finalizarRaspagem();
      return true;
    }

    return false;
  }

  verificacaoInterval = setInterval(verificarPorcentagemRaspada, 500);

  function getMousePos(e) {
    const rect = canvas.getBoundingClientRect();
    let clientX, clientY;

    if (e.type.includes('touch')) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    return { x: clientX - rect.left, y: clientY - rect.top };
  }

  function startDraw(e) {
    e.preventDefault();
    raspagemAtiva = true;

    const pos = getMousePos(e);
    ultimoX = pos.x;
    ultimoY = pos.y;

    contextoCanvas.beginPath();
    contextoCanvas.moveTo(ultimoX, ultimoY);

    console.log('Raspagem iniciada');
  }

  function draw(e) {
    if (!raspagemAtiva) return;
    e.preventDefault();

    const pos = getMousePos(e);
    const currentX = pos.x;
    const currentY = pos.y;

    contextoCanvas.lineTo(currentX, currentY);
    contextoCanvas.stroke();

    ultimoX = currentX;
    ultimoY = currentY;
  }

  function stopDraw() {
    if (!raspagemAtiva) return;
    raspagemAtiva = false;
    contextoCanvas.closePath();

    setTimeout(() => { verificarPorcentagemRaspada(); }, 100);
  }

  function finalizarRaspagem() {
    console.log('Raspagem finalizada - 70% alcançado');

    if (verificacaoInterval) {
      clearInterval(verificacaoInterval);
      verificacaoInterval = null;
    }

    canvas.removeEventListener('mousedown', startDraw);
    canvas.removeEventListener('mousemove', draw);
    canvas.removeEventListener('mouseup', stopDraw);
    canvas.removeEventListener('mouseleave', stopDraw);

    canvas.removeEventListener('touchstart', startDraw);
    canvas.removeEventListener('touchmove', draw);
    canvas.removeEventListener('touchend', stopDraw);
    canvas.removeEventListener('touchcancel', stopDraw);

    setTimeout(() => { processarResultadoTentativa(); }, 300);
  }

  canvas.addEventListener('mousedown', startDraw);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDraw);
  canvas.addEventListener('mouseleave', stopDraw);

  canvas.addEventListener('touchstart', startDraw, { passive: false });
  canvas.addEventListener('touchmove', draw, { passive: false });
  canvas.addEventListener('touchend', stopDraw, { passive: false });
  canvas.addEventListener('touchcancel', stopDraw, { passive: false });

  console.log('Eventos de raspagem configurados - 70% requerido');
}

function processarResultadoTentativa() {
  console.log('Processando resultado da tentativa', estadoJogo.tentativaAtual);

  const tentativa = estadoJogo.tentativaAtual;
  const premio = CONFIG.premiosPorTentativa[tentativa];

  if (!premio) {
    console.log('Prêmio não encontrado para tentativa', tentativa);
    return;
  }

  estadoJogo.saldo += premio.valor;
  estadoJogo.premiosGanhos.push({
    tentativa: tentativa,
    valor: premio.valor,
    imagem: premio.imagem
  });

  estadoJogo.tentativaAtual++;

  salvarEstadoJogo();
  mostrarResultadoTentativa(premio);
}

function mostrarResultadoTentativa(premio) {
  if (!elementos.modalResultado) return;

  console.log('Mostrando resultado:', premio.valor);

  tocarSomGanho();

  elementos.modalTitulo.textContent = ' Parabéns! 🎉';
  elementos.resultadoTexto.textContent = 'Você ganhou!';
  elementos.valorGanho.textContent = `R$ ${premio.valor.toLocaleString()},00`;
  elementos.saldoAtualizado.textContent = `R$ ${estadoJogo.saldo.toLocaleString()},00`;

  const tentativasUsadas = Math.min(estadoJogo.tentativaAtual - 1, CONFIG.totalTentativas);
  elementos.tentativasRestantes.textContent = `${tentativasUsadas}/${CONFIG.totalTentativas}`;

  elementos.imagemPremio.src = premio.imagem;
  elementos.imagemPremio.alt = `Prêmio R$ ${premio.valor}`;

  elementos.btnContinuar.textContent =
    (estadoJogo.tentativaAtual > CONFIG.totalTentativas) ? 'Ver Resultado Final' : 'Próxima Tentativa';

  elementos.modalResultado.classList.add('active');
}

function fecharModalResultado() {
  if (elementos.modalResultado) elementos.modalResultado.classList.remove('active');
  finalizarTentativa();
}

function continuarJogo() {
  if (elementos.modalResultado) elementos.modalResultado.classList.remove('active');

  if (estadoJogo.tentativaAtual > CONFIG.totalTentativas) {
    setTimeout(() => mostrarResultadoFinal(), 300);
  } else {
    finalizarTentativa();
  }
}

function finalizarTentativa() {
  estadoJogo.jogando = false;

  if (elementos.raspadinhaOverlay) elementos.raspadinhaOverlay.style.display = 'block';

  if (elementos.scratchCanvas && contextoCanvas) {
    contextoCanvas.globalCompositeOperation = 'source-over';
    contextoCanvas.clearRect(0, 0, elementos.scratchCanvas.width, elementos.scratchCanvas.height);
  }

  if (verificacaoInterval) {
    clearInterval(verificacaoInterval);
    verificacaoInterval = null;
  }

  atualizarInterface();
}

function atualizarInterface() {
  console.log('Atualizando interface');

  if (elementos.saldoCarteira) {
    elementos.saldoCarteira.textContent = `R$ ${estadoJogo.saldo.toLocaleString()},00`;
  }

  if (elementos.contadorTentativas) {
    if (estadoJogo.jogoConcluido) {
      elementos.contadorTentativas.textContent = '0/3';
    } else {
      const tentativasMostrar = Math.min(estadoJogo.tentativaAtual, CONFIG.totalTentativas);
      elementos.contadorTentativas.textContent = `${tentativasMostrar}/${CONFIG.totalTentativas}`;
    }
  }

  if (elementos.btnJogar) {
    if (estadoJogo.jogoConcluido) {
      elementos.btnJogar.disabled = true;
      elementos.btnJogar.innerHTML = '<i class="fas fa-check"></i> Jogo Concluído';
      elementos.btnJogar.style.background = '#2ccb74';
    } else if (estadoJogo.tentativaAtual > CONFIG.totalTentativas) {
      elementos.btnJogar.disabled = true;
      elementos.btnJogar.innerHTML = '<i class="fas fa-trophy"></i> Todas tentativas finalizadas';
    } else {
      elementos.btnJogar.disabled = estadoJogo.jogando;
      elementos.btnJogar.innerHTML = estadoJogo.jogando
        ? '<i class="fas fa-sync-alt fa-spin"></i> Raspando...'
        : '<i class="fas fa-play"></i> Jogar agora';
      elementos.btnJogar.style.background = '';
    }
  }
}

function mostrarResultadoFinal() {
  if (!elementos.modalFinal) return;

  const total = estadoJogo.premiosGanhos.reduce((sum, premio) => sum + premio.valor, 0);
  elementos.premioTotal.textContent = `R$ ${total.toLocaleString()},00`;

  estadoJogo.jogoConcluido = true;
  salvarEstadoJogo();

  tocarSomGanho();

  setTimeout(() => {
    elementos.modalFinal.classList.add('active');
  }, 500);
}

// ✅ RESGATAR: envia TODOS os params (utm/src/fbclid/gclid etc) + cpf/nome/premio
function resgatarPremio() {
  const stored = getStoredTracking();
  const current = getAllQueryParams();

  const finalParams = new URLSearchParams();

  Object.keys(current).forEach((k) => {
    if (current[k] !== '' && current[k] != null) finalParams.set(k, current[k]);
  });

  Object.keys(stored).forEach((k) => {
    if (!finalParams.has(k) && stored[k] !== '' && stored[k] != null) {
      finalParams.set(k, stored[k]);
    }
  });

  if (estadoJogo.usuario?.cpf) finalParams.set('cpf', estadoJogo.usuario.cpf);
  if (estadoJogo.usuario?.nome) finalParams.set('nome', estadoJogo.usuario.nome);

  finalParams.set('premio', String(estadoJogo.saldo));

  console.log('REDIRECT PIX PARAMS:', finalParams.toString());

  window.location.href = `../resgate/?${finalParams.toString()}`;
}

function salvarEstadoJogo() {
  const data = {
    tentativaAtual: estadoJogo.tentativaAtual,
    saldo: estadoJogo.saldo,
    jogoConcluido: estadoJogo.jogoConcluido,
    usuarioCpf: estadoJogo.usuario.cpf || '',
    premiosGanhos: estadoJogo.premiosGanhos,
    dataSalvamento: new Date().toISOString()
  };

  localStorage.setItem('estado_jogo', JSON.stringify(data));
  atualizarInterface();
}

// Resetar jogo (para desenvolvimento)
function resetarJogo() {
  estadoJogo = {
    tentativaAtual: 1,
    saldo: 0,
    jogando: false,
    jogoConcluido: false,
    usuario: estadoJogo.usuario,
    premiosGanhos: []
  };

  localStorage.removeItem('estado_jogo');

  if (elementos.raspadinhaOverlay) elementos.raspadinhaOverlay.style.display = 'block';

  if (elementos.scratchCanvas && contextoCanvas) {
    contextoCanvas.globalCompositeOperation = 'source-over';
    contextoCanvas.clearRect(0, 0, elementos.scratchCanvas.width, elementos.scratchCanvas.height);
  }

  if (verificacaoInterval) {
    clearInterval(verificacaoInterval);
    verificacaoInterval = null;
  }

  gerarMatrizPremios();
  atualizarInterface();
  alert('Jogo resetado!');
}

// Testar raspadinha
function testarRaspadinha() {
  console.log('Testando raspadinha...');
  iniciarTentativa();
}

// Expor funções para console
window.resetarJogo = resetarJogo;
window.testarRaspadinha = testarRaspadinha;
window.estadoJogo = estadoJogo;
window.tocarSomGanho = tocarSomGanho;

