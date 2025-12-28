(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [177], {
    347: () => {},
    1884: (e, t, s) => {
      "use strict";

      function a(e) {
        return e.replace(/\D/g, "").slice(0, 11).replace(
          /(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
      }

      function r(e) {
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

      function c(e) {
        let t = e.replace(/\D/g, "");
        if (11 !== t.length || /^(\d)\1{10}$/.test(t)) return !1;
        let s = 0;
        for (let e = 0; e < 9; e++) s += Number.parseInt(t.charAt(e)) * (
          10 - e);
        let a = 10 * s % 11;
        if ((10 === a || 11 === a) && (a = 0), a !== Number.parseInt(t
            .charAt(9))) return !1;
        s = 0;
        for (let e = 0; e < 10; e++) s += Number.parseInt(t.charAt(e)) * (
          11 - e);
        return (10 == (a = 10 * s % 11) || 11 === a) && (a = 0), a ===
          Number.parseInt(t.charAt(10))
      }
      s.d(t, {
        Or: () => c,
        Zm: () => i,
        bb: () => a,
        kR: () => l,
        kl: () => r,
        vv: () => n
      })
    },
    4201: (e, t, s) => {
      "use strict";
      s.d(t, {
        FT: () => c,
        bO: () => i,
        gB: () => r,
        hA: () => l,
        nj: () => n,
        qu: () => a
      });
      let a = "691d074149412e64e11b1fe4",
        r = "5cfcba13-3f23-4529-a161-cdcea8d91c99",
        l = "691d07dba07076544c59a7a8",
        n = "5cfcba13-3f23-4529-a161-cdcea8d91c99",
        i = 189e3,
        c = 95e3
    },
    4590: (e, t, s) => {
      Promise.resolve().then(s.t.bind(s, 9243, 23)), Promise.resolve()
        .then(s.t.bind(s, 4147, 23)), Promise.resolve().then(s.t.bind(s,
          8489, 23)), Promise.resolve().then(s.t.bind(s, 347, 23)),
        Promise.resolve().then(s.bind(s, 8858)), Promise.resolve().then(s
          .bind(s, 7911))
    },
    6929: (e, t, s) => {
      "use strict";
      s.d(t, {
        B: () => l
      });
      var a = s(2115),
        r = s(1884);

      function l() {
        let [e, t] = (0, a.useState)(null), [s, l] = (0, a.useState)(!0);
        (0, a.useEffect)(() => {
          let e = localStorage.getItem("cpf-data");
          if (e) try {
            let s = JSON.parse(e);
            t(s)
          } catch (e) {
            localStorage.removeItem("cpf-data"), t(null)
          }
          l(!1)
        }, []);
        let n = (0, a.useMemo)(() => (null == e ? void 0 : e.name) ? (0, r
            .kR)(e.name) : null, [null == e ? void 0 : e.name]),
          i = (0, a.useMemo)(() => (null == e ? void 0 : e.firstName) ? (
            0, r.kR)(e.firstName) : null, [null == e ? void 0 : e
            .firstName
          ]),
          c = (0, a.useMemo)(() => (null == e ? void 0 : e.motherName) ? (
            0, r.kR)(e.motherName) : null, [null == e ? void 0 : e
            .motherName
          ]),
          d = (null == e ? void 0 : e.cpf) || null,
          o = (null == e ? void 0 : e.birthDate) || null;
        return {
          isLoading: s,
          isEmpty: !e,
          isInvalid: !n || !d || !o || !c,
          name: n,
          firstName: i,
          cpf: d,
          birthDate: o,
          motherName: c,
          gender: (null == e ? void 0 : e.gender) || null,
          full: e
        }
      }
    },
    7911: (e, t, s) => {
      "use strict";
      s.d(t, {
        default: () => g
      });
      var a = s(5155),
        r = s(2115),
        l = s(6422),
        n = s(6766),
        i = s(5695),
        c = s(8856),
        d = s(1884),
        o = s(6929),
        u = s(832),
        m = s.n(u),
        h = s(8963),
        f = s.n(h),
        x = s(4201);

      function p(e) {
        let {
          searchParams: t
        } = e, {
          firstName: s,
          isLoading: u
        } = (0, o.B)(), h = (0, i.usePathname)(), f = (0, r.useMemo)(() =>
          "../validar-video/index.html" === h, [h]), [p, v] = (0, r.useState)(!1), [
          g, b
        ] = (0, r.useState)(900);
        (0, r.useEffect)(() => {
          if (!f) return;
          let e = setTimeout(() => {
              v(!0)
            }, x.FT),
            t = setInterval(() => {
              b(e => e <= 1 ? 0 : e - 1)
            }, 1e3);
          return () => {
            clearTimeout(e), clearInterval(t)
          }
        }, [f]);
        let N = (0, r.useMemo)(() => {
            if (!f) return "";
            let e = m().duration(g, "seconds"),
              t = Math.floor(e.asMinutes()),
              s = e.seconds();
            return "".concat(String(t).padStart(2, "0"), ":").concat(
              String(s).padStart(2, "0"))
          }, [g, f]),
          j = (0, r.useMemo)(() => {
            let e = null == t ? void 0 : t.get("balance");
            return e ? parseFloat(e) : 0
          }, [t]),
          w = (0, r.useMemo)(() => (0, d.vv)(j), [j]),
          A = (0, r.useMemo)(() => !!h && !["/", "/inicio"].includes(h), [
            h
          ]);
        return (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)("header", {
            className: "fixed top-0 left-0 right-0 z-[110] bg-[#045CA8] shadow-sm min-h-[64px]",
            children: (0, a.jsxs)("div", {
              className: "flex justify-between items-center px-2 py-4 h-full min-h-[64px]",
              children: [(0, a.jsxs)("div", {
                className: "flex items-center gap-1.5",
                children: [(0, a.jsx)(n.default, {
                  src: "images/image.png",
                  alt: "Logo X",
                  width: 42,
                  height: 42,
                  className: "h-5 w-auto",
                  priority: !0,
                  unoptimized: !0
                }), (0, a.jsx)("div", {
                  className: "w-0.5 h-5 rounded-full bg-[#F7A600]"
                }), (0, a.jsx)("span", {
                  className: "text-white font-semibold text-base",
                  children: "Raspadinha"
                })]
              }), A ? (0, a.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [(0, a.jsx)("div", {
                  className: "flex items-center justify-center px-2 py-1.5 rounded-md bg-[#29A745] text-white min-h-[32px]",
                  children: (0, a.jsxs)(
                  "span", {
                    className: "text-sm font-bold",
                    children: ["R$ ", '5.000,00']
                  })
                }), (0, a.jsxs)("div", {
                  className: "flex items-center gap-1.5 px-2 py-1.5 rounded-md bg-white min-h-[32px]",
                  children: [(0, a.jsx)(l.A, {
                    className: "size-4 text-[#045CA8]"
                  }), u ? (0, a.jsx)(c.E, {
                    className: "h-3 w-12 bg-gray-200"
                  }) : s ? (0, a.jsx)(
                    "span", {
                      className: "text-[#045CA8] font-semibold text-sm",
                      children: s
                    }) : (0, a.jsx)(
                  "span", {
                    className: "text-[#045CA8] font-semibold text-sm",
                    children: "Erro"
                  })]
                })]
              }) : (0, a.jsx)("div", {
                className: "w-0",
                "aria-hidden": "true"
              })]
            })
          }), f && (0, a.jsx)("div", {
            className: "fixed top-[64px] left-0 right-0 z-[100] bg-red-600",
            children: (0, a.jsx)("div", {
              className: "max-w-md mx-auto px-3 py-2",
              children: (0, a.jsx)("p", {
                className: "text-white font-bold text-sm sm:text-base text-center",
                children: p ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      "Tempo limite para resgate: ",
                      (0, a.jsx)("span", {
                        children: N
                      })
                    ]
                  }) :
                  "ATEN\xc7\xc3O: Assista o v\xeddeo para liberar seu saque"
              })
            })
          })]
        })
      }
      m().extend(f());
      let v = (0, r.memo)(function() {
          let e = (0, i.useSearchParams)();
          return (0, a.jsx)(p, {
            searchParams: e
          })
        }),
        g = (0, r.memo)(function() {
          return (0, a.jsx)(r.Suspense, {
            fallback: (0, a.jsx)("header", {
              className: "fixed top-0 left-0 right-0 z-[110] bg-[#045CA8] shadow-sm min-h-[64px]",
              children: (0, a.jsxs)("div", {
                className: "flex justify-between items-center px-2 py-4 h-full",
                children: [(0, a.jsxs)("div", {
                  className: "flex items-center gap-1.5",
                  children: [(0, a.jsx)(n.default, {
                  src: "images/image.png",
                  alt: "Logo X",
                    width: 42,
                    height: 42,
                    className: "h-5 w-auto",
                    unoptimized: !0
                  }), (0, a.jsx)("div", {
                    className: "w-0.5 h-5 rounded-full bg-[#F7A600]"
                  }), (0, a.jsx)("span", {
                    className: "text-white font-semibold text-base",
                    children: "Raspadinha"
                  })]
                }), (0, a.jsx)("div", {
                  className: "w-0",
                  "aria-hidden": "true"
                })]
              })
            }),
            children: (0, a.jsx)(v, {})
          })
        })
    },
    8856: (e, t, s) => {
      "use strict";
      s.d(t, {
        E: () => l
      });
      var a = s(5155),
        r = s(9434);

      function l(e) {
        let {
          className: t,
          ...s
        } = e;
        return (0, a.jsx)("div", {
          "data-slot": "skeleton",
          className: (0, r.cn)("bg-accent animate-pulse rounded-md",
            t),
          ...s
        })
      }
    },
    8858: (e, t, s) => {
      "use strict";
      s.d(t, {
        Providers: () => n
      });
      var a = s(5155),
        r = s(6715);
      let l = new(s(1716)).E;

      function n(e) {
        let {
          children: t
        } = e;
        return (0, a.jsx)(r.Ht, {
          client: l,
          children: t
        })
      }
    },
    9434: (e, t, s) => {
      "use strict";
      s.d(t, {
        cn: () => l
      });
      var a = s(2596),
        r = s(9688);

      function l() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[
          s] = arguments[s];
        return (0, r.QP)((0, a.$)(t))
      }
    }
  },
  e => {
    var t = t => e(e.s = t);
    e.O(0, [896, 635, 766, 827, 58, 441, 684, 358], () => t(4590)), _N_E = e
      .O()
  }
]);