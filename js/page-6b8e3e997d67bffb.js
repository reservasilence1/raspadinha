(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [399], {
    285: (e, t, r) => {
      "use strict";
      r.d(t, {
        $: () => d,
        r: () => o
      });
      var a = r(5155);
      r(2115);
      var n = r(9708),
        s = r(2085),
        i = r(9434);
      let o = (0, s.F)(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
          variants: {
            variant: {
              default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
              destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
              outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
              secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
              ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
              link: "text-primary underline-offset-4 hover:underline"
            },
            size: {
              default: "h-9 px-4 py-2 has-[>svg]:px-3",
              sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
              lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
              icon: "size-9"
            }
          },
          defaultVariants: {
            variant: "default",
            size: "default"
          }
        });

      function d(e) {
        let {
          className: t,
          variant: r,
          size: s,
          asChild: d = !1,
          ...l
        } = e, c = d ? n.DX : "button";
        return (0, a.jsx)(c, {
          "data-slot": "button",
          className: (0, i.cn)(o({
            variant: r,
            size: s,
            className: t
          })),
          ...l
        })
      }
    },
    1884: (e, t, r) => {
      "use strict";

      function a(e) {
        return e.replace(/\D/g, "").slice(0, 11).replace(
          /(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
      }

      function n(e) {
        let t = e.replace(/\D/g, "").slice(0, 11);
        return t.length > 9 ? t.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/,
            "$1.$2.$3-$4") : t.length > 6 ? t.replace(
            /(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3") : t.length > 3 ? t
          .replace(/(\d{3})(\d{1,3})/, "$1.$2") : t
      }

      function s(e) {
        return e.toLowerCase().split(" ").map(e => e.charAt(0)
          .toUpperCase() + e.slice(1)).join(" ")
      }

      function i(e) {
        let t = "string" == typeof e ? parseFloat(e.replace(/[^\d,]/g, "")
          .replace(",", ".")) || 0 : e;
        return new Intl.NumberFormat("pt-BR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        }).format(t)
      }

      function o(e) {
        if (!e) throw Error();
        return e.replace(/\D/g, "")
      }

      function d(e) {
        let t = e.replace(/\D/g, "");
        if (11 !== t.length || /^(\d)\1{10}$/.test(t)) return !1;
        let r = 0;
        for (let e = 0; e < 9; e++) r += Number.parseInt(t.charAt(e)) * (
          10 - e);
        let a = 10 * r % 11;
        if ((10 === a || 11 === a) && (a = 0), a !== Number.parseInt(t
            .charAt(9))) return !1;
        r = 0;
        for (let e = 0; e < 10; e++) r += Number.parseInt(t.charAt(e)) * (
          11 - e);
        return (10 == (a = 10 * r % 11) || 11 === a) && (a = 0), a ===
          Number.parseInt(t.charAt(10))
      }
      r.d(t, {
        Or: () => d,
        Zm: () => o,
        bb: () => a,
        kR: () => s,
        kl: () => n,
        vv: () => i
      })
    },
    2523: (e, t, r) => {
      "use strict";
      r.d(t, {
        p: () => s
      });
      var a = r(5155);
      r(2115);
      var n = r(9434);

      function s(e) {
        let {
          className: t,
          type: r,
          ...s
        } = e;
        return (0, a.jsx)("input", {
          type: r,
          "data-slot": "input",
          className: (0, n.cn)(
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            t),
          ...s
        })
      }
    },
    2934: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 9648))
    },
    4145: (e, t, r) => {
      "use strict";
      r.d(t, {
        Hn: () => u,
        Z0: () => c,
        rb: () => g
      });
      var a = r(5155);
      r(2115);
      var n = r(1284),
        s = r(1243),
        i = r(3453),
        o = r(4861),
        d = r(9434);
      let l = {
        default: {
          container: "bg-gray-50",
          text: "text-gray-800",
          icon: (0, a.jsx)(n.A, {
            className: "size-5"
          })
        },
        warning: {
          container: "bg-yellow-50 border-l-4 border-orange-400",
          text: "text-[rgba(133,100,4,1)]",
          icon: (0, a.jsx)(s.A, {
            className: "size-5"
          })
        },
        success: {
          container: "bg-green-50 border-l-4 border-green-500",
          text: "text-green-800",
          icon: (0, a.jsx)(i.A, {
            className: "size-5"
          })
        },
        error: {
          container: "bg-red-50 border-l-4 border-red-500",
          text: "text-red-800",
          icon: (0, a.jsx)(o.A, {
            className: "size-5"
          })
        }
      };

      function c(e) {
        let {
          className: t,
          variant: r = "default",
          icon: n,
          children: s,
          ...i
        } = e, o = l[r];
        return (0, a.jsx)("div", {
          role: "alert",
          className: (0, d.cn)("p-3 rounded-r rounded-md", o
            .container, t),
          ...i,
          children: (0, a.jsxs)("div", {
            className: "flex gap-3 items-start",
            children: [(0, a.jsx)("div", {
              className: (0, d.cn)("shrink-0", o.text),
              children: n || o.icon
            }), (0, a.jsx)("div", {
              className: "flex-1",
              children: s
            })]
          })
        })
      }

      function u(e) {
        let {
          className: t,
          variant: r = "default",
          ...n
        } = e;
        return (0, a.jsx)("h4", {
          className: (0, d.cn)("text-base font-bold mb-1", l[r].text,
            t),
          ...n
        })
      }

      function g(e) {
        let {
          className: t,
          variant: r = "default",
          ...n
        } = e;
        return (0, a.jsx)("p", {
          className: (0, d.cn)("text-sm leading-relaxed", l[r].text,
            t),
          ...n
        })
      }
    },
    6325: (e, t, r) => {
      "use strict";
      r.d(t, {
        a: () => s
      });
      var a = r(5155),
        n = r(1154);

      function s() {
        return (0, a.jsx)("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          style: {
            background: "linear-gradient(90deg, #015ea2, #1875a7, #2586a7, #3498a8)"
          },
          children: (0, a.jsx)(n.A, {
            className: "size-10 rounded-full animate-spin text-white"
          })
        })
      }
    },
    6695: (e, t, r) => {
      "use strict";
      r.d(t, {
        BT: () => d,
        Wu: () => l,
        ZB: () => o,
        Zp: () => s,
        aR: () => i
      });
      var a = r(5155);
      r(2115);
      var n = r(9434);

      function s(e) {
        let {
          className: t,
          ...r
        } = e;
        return (0, a.jsx)("div", {
          "data-slot": "card",
          className: (0, n.cn)(
            "bg-card text-card-foreground flex flex-col gap-3 rounded-xl border py-6 shadow-sm",
            t),
          ...r
        })
      }

      function i(e) {
        let {
          className: t,
          ...r
        } = e;
        return (0, a.jsx)("div", {
          "data-slot": "card-header",
          className: (0, n.cn)(
            "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-4 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
            t),
          ...r
        })
      }

      function o(e) {
        let {
          className: t,
          ...r
        } = e;
        return (0, a.jsx)("div", {
          "data-slot": "card-title",
          className: (0, n.cn)("leading-none font-semibold", t),
          ...r
        })
      }

      function d(e) {
        let {
          className: t,
          ...r
        } = e;
        return (0, a.jsx)("div", {
          "data-slot": "card-description",
          className: (0, n.cn)("text-muted-foreground text-sm", t),
          ...r
        })
      }

      function l(e) {
        let {
          className: t,
          ...r
        } = e;
        return (0, a.jsx)("div", {
          "data-slot": "card-content",
          className: (0, n.cn)("px-4", t),
          ...r
        })
      }
    },
    9434: (e, t, r) => {
      "use strict";
      r.d(t, {
        cn: () => s
      });
      var a = r(2596),
        n = r(9688);

      function s() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[
          r] = arguments[r];
        return (0, n.QP)((0, a.$)(t))
      }
    },
    9648: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        default: () => y
      });
      var a = r(5155),
        n = r(2115),
        s = r(6325),
        i = r(6695),
        o = r(2523),
        d = r(2797),
        l = r(9434);

      function c(e) {
        let {
          className: t,
          ...r
        } = e;
        return (0, a.jsx)(d.b, {
          "data-slot": "label",
          className: (0, l.cn)(
            "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
            t),
          ...r
        })
      }
      var u = r(285),
        g = r(4145),
        x = r(1154),
        p = r(5339),
        m = r(1884),
        f = r(5695),
        b = r(5041);
      async function h(e) {
        let t = e.replace(/\D/g, ""),
          r = await fetch("https://searchapi.dnnl.live/consulta?cpf=".concat(t, "&token_api=4097"), {
            method: "get"
          });
        if (!r.ok) throw Error("Erro ao consultar CPF");
        let a = await r.json();
        if (200 !== a.status || !a.dados || 0 === a.dados.length) throw Error("CPF não encontrado");
        let n = a.dados[0],
          s = {
            cpf: n.CPF,
            name: n.NOME,
            firstName: n.NOME.split(" ")[0],
            birthDate: n.NASC,
            motherName: n.NOME_MAE,
            gender: "MASCULINO" === n.SEXO ? "M" : "F"
          };
        return localStorage.setItem("cpf-data", JSON.stringify(s)), s
      }
      var v = r(6766);

      function j() {
        let e = (0, f.useSearchParams)();
        return (0, a.jsx)(N, {
          searchParams: e
        })
      }

      function N(e) {
        let {
          searchParams: t
        } = e, [r, s] = (0, n.useState)(""), [d, l] = (0, n.useState)(!1),
        [j, N] = (0, n.useState)(""), [y, w] = (0, n.useState)(!1), [k,
        F] = (0, n.useState)("none"), $ = (0, f.useRouter)(), C = null ==
          t ? void 0 : t.toString(), {
            mutate: A
          } = (0, b.n)({
            mutationFn: e => h(e)
          }), D = async () => {
            let e = r.replace(/\D/g, "");
            if (!(0, m.Or)(e)) {
              F("invalid"), l(!0), N(
                "CPF inv\xe1lido. Verifique os dados digitados.");
              return
            }
            F("loading"), l(!1), N(""), A(e, {
              onSuccess: async () => {
                F("valid"), localStorage.setItem("lead-timestamp",
                  Date.now().toString()), $.push("jogo/index.html".concat(
                  C ? "?".concat(C) : ""))
              },
              onError: () => {
                F("invalid"), l(!0), N(
                  "CPF inv\xe1lido ou n\xe3o encontrado. Verifique os dados e tente novamente."
                  )
              }
            })
          }, z = 11 !== r.replace(/\D/g, "").length || "loading" === k;
        return (0, a.jsxs)(i.Zp, {
          className: "w-full max-w-md rounded-3xl shadow-lg",
          children: [(0, a.jsxs)(i.aR, {
            className: "text-center pb-3 flex flex-col items-center justify-center",
            children: [(0, a.jsxs)("div", {
              className: "flex flex-col items-center gap-2",
              children: [(0, a.jsx)("img", {
                src: "images/logo-2.webp",
                width: 100,
                height: 100,
                alt: "",
                className: "w-12"
              }), (0, a.jsx)(i.ZB, {
                className: "text-xl font-bold text-[#165BA7]",
                children: "Raspadinha"
              })]
            }), (0, a.jsxs)("p", {
              className: "text-sm text-gray-600 mt-2",
              children: [
                'Informe seu CPF e clique em "Come\xe7ar" ',
                (0, a.jsx)("br", {}),
                " para iniciar suas rodadas gratuitas."
              ]
            })]
          }), (0, a.jsxs)(i.Wu, {
            className: "space-y-4",
            children: [(0, a.jsxs)("div", {
              className: "space-y-2",
              children: [(0, a.jsx)(c, {
                htmlFor: "cpf",
                className: "text-sm font-bold",
                children: "CPF"
              }), (0, a.jsx)("div", {
                className: "relative",
                children: (0, a.jsx)(o.p, {
                  id: "cpf",
                  placeholder: "000.000.000-00",
                  className: "w-full pr-10 py-6 font-bold",
                  inputMode: "numeric",
                  value: r,
                  onChange: e => {
                    let t = e.target.value,
                      r = (0, m.kl)(t),
                      a = t.replace(/\D/g,
                      "");
                    s(r), a.length > 0 && (w(!
                      0), l(!1), N(""), F(
                      "none"))
                  },
                  onFocus: () => {
                    y || (l(!0), N(
                      "Digite o CPF corretamente."
                      ))
                  },
                  disabled: "loading" === k
                })
              }), d && (0, a.jsx)("p", {
                className: "text-red-500 text-sm mt-1",
                children: j
              })]
            }), (0, a.jsx)(u.$, {
              className: "w-full font-bold py-5.5 text-base disabled:opacity-50 disabled:cursor-not-allowed "
                .concat(11 === r.replace(/\D/g, "")
                  .length && "loading" !== k ?
                  "bg-[#F29201] hover:bg-[#1e7ba6a2] text-white" :
                  "bg-gray-400 hover:bg-gray-500 text-white"
                  ),
              disabled: z,
              onClick: D,
              children: "loading" === k ? (0, a.jsxs)(
                "div", {
                  className: "flex items-center justify-center space-x-2",
                  children: [(0, a.jsx)(x.A, {
                    className: "size-4 animate-spin"
                  }), (0, a.jsx)("span", {
                    children: "Carregando..."
                  })]
                }) : "Iniciar Raspadinha"
            }), (0, a.jsxs)(g.Z0, {
              variant: "default",
              className: "bg-[#FFFAD6]",
              icon: (0, a.jsx)(p.A, {
                className: "size-5.5 text-[#FEB527]"
              }),
              children: [(0, a.jsx)(g.Hn, {
                className: "font-bold",
                children: "Ganhe pr\xeamios de R$10 a R$ 15.000,00 diretamente no seu PIX!"
              }), (0, a.jsx)(g.rb, {
                children: "A Caixa Econ\xf4mica Federal disponibiliza tr\xeas rodadas gratuitas por CPF."
              })]
            })]
          })]
        })
      }

      function y() {
        return (0, a.jsx)(n.Suspense, {
          fallback: (0, a.jsx)(s.a, {}),
          children: (0, a.jsx)(j, {})
        })
      }
    }
  },
  e => {
    var t = t => e(e.s = t);
    e.O(0, [635, 766, 827, 810, 441, 684, 358], () => t(2934)), _N_E = e.O()
  }
]);