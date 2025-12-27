(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974], {
    285: (e, t, r) => {
      "use strict";
      r.d(t, {
        $: () => o,
        r: () => s
      });
      var n = r(5155);
      r(2115);
      var a = r(9708),
        i = r(2085),
        l = r(9434);
      let s = (0, i.F)(
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
          variant: r,
          size: i,
          asChild: o = !1,
          ...d
        } = e, c = o ? a.DX : "button";
        return (0, n.jsx)(c, {
          "data-slot": "button",
          className: (0, l.cn)(s({
            variant: r,
            size: i,
            className: t
          })),
          ...d
        })
      }
    },
    2085: (e, t, r) => {
      "use strict";
      r.d(t, {
        F: () => l
      });
      var n = r(2596);
      let a = e => "boolean" == typeof e ? `${e}` : 0 === e ? "0" : e,
        i = n.$,
        l = (e, t) => r => {
          var n;
          if ((null == t ? void 0 : t.variants) == null) return i(e,
            null == r ? void 0 : r.class, null == r ? void 0 : r
            .className);
          let {
            variants: l,
            defaultVariants: s
          } = t, o = Object.keys(l).map(e => {
            let t = null == r ? void 0 : r[e],
              n = null == s ? void 0 : s[e];
            if (null === t) return null;
            let i = a(t) || a(n);
            return l[e][i]
          }), d = r && Object.entries(r).reduce((e, t) => {
            let [r, n] = t;
            return void 0 === n || (e[r] = n), e
          }, {});
          return i(e, o, null == t || null == (n = t.compoundVariants) ?
            void 0 : n.reduce((e, t) => {
              let {
                class: r,
                className: n,
                ...a
              } = t;
              return Object.entries(a).every(e => {
                let [t, r] = e;
                return Array.isArray(r) ? r.includes({
                  ...s,
                  ...d
                } [t]) : ({
                  ...s,
                  ...d
                })[t] === r
              }) ? [...e, r, n] : e
            }, []), null == r ? void 0 : r.class, null == r ? void 0 : r
            .className)
        }
    },
    3139: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 3792))
    },
    3792: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        default: () => c
      });
      var n = r(5155),
        a = r(285),
        i = r(6766),
        l = r(5695),
        s = r(2115);

      function o() {
        let e = (0, l.useSearchParams)();
        return (0, n.jsx)(d, {
          searchParams: e
        })
      }

      function d(e) {
        let {
          searchParams: t
        } = e, r = new URLSearchParams(t.toString()), l = "/inicio/?"
          .concat(r.toString());
        return (0, n.jsx)("div", {
          className: "pt-10",
          children: (0, n.jsxs)("div", {
            className: "relative w-full max-w-sm",
            children: [(0, n.jsx)("div", {
              className: "absolute -top-10 left-1/2 -translate-x-1/2 z-20",
              children: (0, n.jsx)("img", {
                src: "images/2.webp",
                alt: "Presente",
                width: 60,
                height: 60,
                className: "drop-shadow-lg"
              })
            }), (0, n.jsxs)("div", {
              className: "bg-white rounded-3xl shadow-xl pt-20 pb-14 px-5",
              children: [(0, n.jsx)("h1", {
                className: "text-[2.5rem] font-bold text-center text-gray-800 mb-3 leading-tight",
                children: "Parab\xe9ns"
              }), (0, n.jsx)("p", {
                className: "text-center font-bold text-sm mb-5",
                children: "Voc\xea ganhou tr\xeas rodadas gratuitas para raspar e ganhar at\xe9"
              }), (0, n.jsx)("h2", {
                className: "text-center font-bold text-[#045CA8] mb-6 text-4xl",
                children: "R$ 15.000,00"
              }), (0, n.jsx)("p", {
                className: "text-center text-gray-800 font-semibold mb-5 text-sm",
                children: "Raspe agora clicando no bot\xe3o abaixo!"
              }), (0, n.jsx)(a.$, {
                onClick: () => {
                  window.location.href = l
                },
                className: "w-full font-bold py-6 text-base rounded-md transition-colors bg-[#0A5BA7] hover:bg-[#084A8A] text-white",
                children: "Come\xe7ar a Raspar"
              })]
            })]
          })
        })
      }

      function c() {
        return (0, n.jsx)(s.Suspense, {
          fallback: null,
          children: (0, n.jsx)(o, {})
        })
      }
    },
    6101: (e, t, r) => {
      "use strict";
      r.d(t, {
        s: () => l,
        t: () => i
      });
      var n = r(2115);

      function a(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function i(...e) {
        return t => {
          let r = !1,
            n = e.map(e => {
              let n = a(e, t);
              return r || "function" != typeof n || (r = !0), n
            });
          if (r) return () => {
            for (let t = 0; t < n.length; t++) {
              let r = n[t];
              "function" == typeof r ? r() : a(e[t], null)
            }
          }
        }
      }

      function l(...e) {
        return n.useCallback(i(...e), e)
      }
    },
    9434: (e, t, r) => {
      "use strict";
      r.d(t, {
        cn: () => i
      });
      var n = r(2596),
        a = r(9688);

      function i() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[
          r] = arguments[r];
        return (0, a.QP)((0, n.$)(t))
      }
    },
    9708: (e, t, r) => {
      "use strict";
      r.d(t, {
        DX: () => u,
        TL: () => c
      });
      var n, a = r(2115),
        i = r(6101),
        l = r(5155),
        s = Symbol.for("react.lazy"),
        o = (n || (n = r.t(a, 2)))[" use ".trim().toString()];

      function d(e) {
        var t;
        return null != e && "object" == typeof e && "$$typeof" in e && e
          .$$typeof === s && "_payload" in e && "object" == typeof(t = e
            ._payload) && null !== t && "then" in t
      }

      function c(e) {
        let t = function(e) {
            let t = a.forwardRef((e, t) => {
              let {
                children: r,
                ...n
              } = e;
              if (d(r) && "function" == typeof o && (r = o(r
                  ._payload)), a.isValidElement(r)) {
                var l;
                let e, s, o = (l = r, (s = (e = Object
                        .getOwnPropertyDescriptor(l.props, "ref")?.get
                        ) && "isReactWarning" in e && e
                      .isReactWarning) ? l.ref : (s = (e = Object
                        .getOwnPropertyDescriptor(l, "ref")?.get) &&
                      "isReactWarning" in e && e.isReactWarning) ? l
                    .props.ref : l.props.ref || l.ref),
                  d = function(e, t) {
                    let r = {
                      ...t
                    };
                    for (let n in t) {
                      let a = e[n],
                        i = t[n];
                      /^on[A-Z]/.test(n) ? a && i ? r[n] = (...e) => {
                        let t = i(...e);
                        return a(...e), t
                      } : a && (r[n] = a) : "style" === n ? r[n] = {
                        ...a,
                        ...i
                      } : "className" === n && (r[n] = [a, i]
                        .filter(Boolean).join(" "))
                    }
                    return {
                      ...e,
                      ...r
                    }
                  }(n, r.props);
                return r.type !== a.Fragment && (d.ref = t ? (0, i.t)(
                  t, o) : o), a.cloneElement(r, d)
              }
              return a.Children.count(r) > 1 ? a.Children.only(null) :
                null
            });
            return t.displayName = `${e}.SlotClone`, t
          }(e),
          r = a.forwardRef((e, r) => {
            let {
              children: n,
              ...i
            } = e;
            d(n) && "function" == typeof o && (n = o(n._payload));
            let s = a.Children.toArray(n),
              c = s.find(p);
            if (c) {
              let e = c.props.children,
                n = s.map(t => t !== c ? t : a.Children.count(e) > 1 ? a
                  .Children.only(null) : a.isValidElement(e) ? e.props
                  .children : null);
              return (0, l.jsx)(t, {
                ...i,
                ref: r,
                children: a.isValidElement(e) ? a.cloneElement(e,
                  void 0, n) : null
              })
            }
            return (0, l.jsx)(t, {
              ...i,
              ref: r,
              children: n
            })
          });
        return r.displayName = `${e}.Slot`, r
      }
      var u = c("Slot"),
        f = Symbol("radix.slottable");

      function p(e) {
        return a.isValidElement(e) && "function" == typeof e.type &&
          "__radixId" in e.type && e.type.__radixId === f
      }
    }
  },
  e => {
    var t = t => e(e.s = t);
    e.O(0, [635, 766, 441, 684, 358], () => t(3139)), _N_E = e.O()
  }
]);