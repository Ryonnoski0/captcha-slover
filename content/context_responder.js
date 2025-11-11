(() => {
  var e = {
      2493: (e, t, n) => {
        "use strict";
        t.getClickTime = t.waitforbackgroundWithTimeout = t.waitforbackground = t.waitFor = t.notneedcontinue = t.div2base64 = t.delay = t.message = void 0;
        var r = a(n(46593)),
          o = a(n(94942)),
          i = a(n(36803));
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        (t.post = u),
          (t.getconfig = f),
          (t.getParentUrl = function () {
            var e = null;
            if (parent !== window)
              try {
                e = window.top.location.href;
              } catch (t) {
                e = document.referrer;
              }
            return e;
          });
        var s,
          c = window.chrome;
        (t.message = function (e) {
          var t = e.text,
            n = void 0 === t ? "" : t,
            r = e.color,
            o = void 0 === r ? "red" : r,
            i = document.getElementById("mymessage");
          i
            ? (i.innerText = n)
            : ((i = document.createElement("div")),
              (i.id = "mymessage"),
              (i.style.position = "fixed"),
              (i.style.top = "0px"),
              (i.style.left = "0px"),
              (i.style.zIndex = "99999999"),
              (i.innerText = n),
              document.body.appendChild(i)),
            (i.className = "green" === o ? "fankui" : "fankui2"),
            (i.style.display = "block");
        }),
          (s = (0, i.default)(
            o.default.mark(function e() {
              var t, n, r, i, a;
              return o.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), f();
                      case 2:
                        return (t = e.sent), (n = t.times), (e.next = 6), l(10 * n);
                      case 6:
                        (r = null),
                          (i = [
                            {
                              title: "imageclassification",
                              url_keyword: "recaptcha",
                              div: "#recaptcha-anchor-label",
                              imagediv: "#recaptcha-token",
                            },
                            {
                              title: "hcaptcha",
                              url_keyword: "hcaptcha.com",
                              div: "#anchor-state",
                              imagediv: ".challenge-container",
                            },
                            {
                              title: "hcaptcha",
                              url_keyword: "hcaptcha-assets.ecosec.on.epicgames.com",
                              div: "#anchor-state",
                              imagediv: ".challenge-container",
                            },
                            {
                              title: "rainbow",
                              url_keyword: "queue-it.net",
                              div: "#enqueue-error > a:nth-child(3) > div > strong",
                            },
                            {
                              title: "imagetotext",
                              url_keyword: "queue",
                              div: "#lbHeaderP",
                            },
                          ]),
                          (a = 0);
                      case 9:
                        if (!(a < i.length)) {
                          e.next = 16;
                          break;
                        }
                        if (
                          !(window.location.href.indexOf(i[a].url_keyword) > -1 && (document.querySelector(i[a].div) || (i[a].imagediv && document.querySelector(i[a].imagediv))))
                        ) {
                          e.next = 13;
                          break;
                        }
                        return (r = i[a]), e.abrupt("break", 16);
                      case 13:
                        a++, (e.next = 9);
                        break;
                      case 16:
                        return e.abrupt("return", r);
                      case 17:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                void 0,
              );
            }),
          ));
        function u(e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
          return new r.default(function (r, i) {
            c.runtime.sendMessage(
              {
                action: "post",
                url: e,
                data: t,
                delay: n,
                tries: o,
              },
              function (e) {
                "fail" === e && i("fail"), r(e);
              },
            );
          });
        }
        var l = (t.delay = function (e) {
          return new r.default(function (t) {
            setTimeout(t, e);
          });
        });
        function f() {
          return new r.default(function (e, t) {
            c.runtime.sendMessage({ action: "getconfig" }, function (t) {
              (t.times = t.times || 100), e(t);
            });
          });
        }
        t.div2base64 = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 128,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
          return new r.default(function (r, o) {
            e || r(null);
            var i = new Image();
            i.setAttribute("crossOrigin", "Anonymous"), (i.src = e), (i.width = t), (i.height = n);
            var a = document.createElement("canvas"),
              s = a.getContext("2d");
            (a.width = i.width),
              (a.height = i.height),
              (i.onload = function () {
                s.drawImage(i, 0, 0, t, n);
                var e = a.toDataURL().replace("data:image/png;base64,", "");
                r(e);
              });
          });
        };
        (t.notneedcontinue = function (e) {
          return (
            e &&
            "ERROR_REQUIRED_FIELDS\n  ERROR_KEY_DOES_NOT_EXIST\n  ERROR_ZERO_BALANCE\n  ERROR_ZERO_CAPTCHA_FILESIZE\n  ERROR_DOMAIN_NOT_ALLOWED\n  ERROR_TOO_BIG_CAPTCHA_FILESIZE\n  ERROR_ILLEGAL_IMAGE\n  ERROR_IP_BANNED\n  ERROR_IP_BLOCKED_5MIN\n  ERROR_CLIENTKEY_UNAUTHORIZED".includes(
              e,
            )
          );
        }),
          (t.waitFor = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
            return new r.default(function (n, r) {
              var o = setInterval(function () {
                document.querySelector(e) && (clearInterval(o), n(!0));
              }, 100);
              setTimeout(function () {
                clearInterval(o), n(!0);
              }, 1e3 * t);
            });
          }),
          (t.waitforbackground = function (e) {
            return new r.default(function (t, n) {
              var r = setInterval(function () {
                e.style && e.style.background && (clearInterval(r), t(!0));
              }, 100);
            });
          }),
          (t.waitforbackgroundWithTimeout = function (e) {
            return new r.default(function (t, n) {
              var r = setInterval(function () {
                  e.style.background && (clearInterval(r), t(!0));
                }, 100),
                o = setTimeout(function () {
                  clearInterval(r), clearTimeout(o), t(!1);
                }, 3e3);
            });
          });
        var d;
        (t.getClickTime = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0.1,
            n = e * t,
            r = 2 * Math.random() * n - n;
          return Math.ceil(r) + e;
        }),
          (d = (0, i.default)(
            o.default.mark(function e(t) {
              var n, i, a, s, u;
              return o.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = function (e, t) {
                            return (
                              e.findIndex(function (e) {
                                return t.indexOf(e) > -1;
                              }) > -1
                            );
                          }),
                          (i = function (e, t) {
                            try {
                              var r = e.blackListConfig.isOpen;
                              return e.whiteListConfig.isOpen
                                ? n(e.whiteListConfig.urlList || [], t)
                                  ? "inWhiteList"
                                  : "notInWhiteList"
                                : r
                                ? n(e.blackListConfig.urlList || [], t)
                                  ? "inBlackList"
                                  : "notInBlackList"
                                : "normal";
                            } catch (e) {
                              return "normal";
                            }
                          }),
                          (a = function () {
                            return new r.default(function (e) {
                              c.runtime.sendMessage({ action: "queryCurrentUrl" }, function (t) {
                                e(t);
                              });
                            });
                          }),
                          (e.next = 5),
                          a()
                        );
                      case 5:
                        (s = e.sent),
                          (u = i(t, s)),
                          (e.t0 = u),
                          (e.next =
                            "inWhiteList" === e.t0
                              ? 10
                              : "notInWhiteList" === e.t0
                              ? 11
                              : "inBlackList" === e.t0
                              ? 12
                              : "notInBlackList" === e.t0
                              ? 13
                              : "normal" === e.t0
                              ? 14
                              : 15);
                        break;
                      case 10:
                      case 13:
                      case 14:
                        return e.abrupt("return", !0);
                      case 11:
                      case 12:
                        return e.abrupt("return", !1);
                      case 15:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                void 0,
              );
            }),
          ));
      },
      46593: (e, t, n) => {
        e.exports = {
          default: n(80112),
          __esModule: !0,
        };
      },
      36803: (e, t, n) => {
        "use strict";
        t.__esModule = !0;
        var r,
          o = n(46593),
          i = (r = o) && r.__esModule ? r : { default: r };
        t.default = function (e) {
          return function () {
            var t = e.apply(this, arguments);
            return new i.default(function (e, n) {
              return (function r(o, a) {
                try {
                  var s = t[o](a),
                    c = s.value;
                } catch (e) {
                  return void n(e);
                }
                if (!s.done)
                  return i.default.resolve(c).then(
                    function (e) {
                      r("next", e);
                    },
                    function (e) {
                      r("throw", e);
                    },
                  );
                e(c);
              })("next");
            });
          };
        };
      },
      94942: (e, t, n) => {
        e.exports = n(20205);
      },
      80112: (e, t, n) => {
        n(94058), n(91867), n(73871), n(32878), n(95971), n(22526), (e.exports = n(34579).Promise);
      },
      85663: (e) => {
        e.exports = function (e) {
          if ("function" != typeof e) throw TypeError(e + " is not a function!");
          return e;
        };
      },
      79003: (e) => {
        e.exports = function () {};
      },
      29142: (e) => {
        e.exports = function (e, t, n, r) {
          if (!(e instanceof t) || (void 0 !== r && r in e)) throw TypeError(n + ": incorrect invocation!");
          return e;
        };
      },
      12159: (e, t, n) => {
        var r = n(36727);
        e.exports = function (e) {
          if (!r(e)) throw TypeError(e + " is not an object!");
          return e;
        };
      },
      57428: (e, t, n) => {
        var r = n(7932),
          o = n(78728),
          i = n(16531);
        e.exports = function (e) {
          return function (t, n, a) {
            var s,
              c = r(t),
              u = o(c.length),
              l = i(a, u);
            if (e && n != n) {
              for (; u > l; ) if ((s = c[l++]) != s) return !0;
            } else for (; u > l; l++) if ((e || l in c) && c[l] === n) return e || l || 0;
            return !e && -1;
          };
        };
      },
      14677: (e, t, n) => {
        var r = n(32894),
          o = n(22939)("toStringTag"),
          i =
            "Arguments" ==
            r(
              (function () {
                return arguments;
              })(),
            );
        e.exports = function (e) {
          var t, n, a;
          return void 0 === e
            ? "Undefined"
            : null === e
            ? "Null"
            : "string" ==
              typeof (n = (function (e, t) {
                try {
                  return e[t];
                } catch (e) {}
              })((t = Object(e)), o))
            ? n
            : i
            ? r(t)
            : "Object" == (a = r(t)) && "function" == typeof t.callee
            ? "Arguments"
            : a;
        };
      },
      32894: (e) => {
        var t = {}.toString;
        e.exports = function (e) {
          return t.call(e).slice(8, -1);
        };
      },
      34579: (e) => {
        var t = (e.exports = { version: "2.6.12" });
        "number" == typeof __e && (__e = t);
      },
      19216: (e, t, n) => {
        var r = n(85663);
        e.exports = function (e, t, n) {
          if ((r(e), void 0 === t)) return e;
          switch (n) {
            case 1:
              return function (n) {
                return e.call(t, n);
              };
            case 2:
              return function (n, r) {
                return e.call(t, n, r);
              };
            case 3:
              return function (n, r, o) {
                return e.call(t, n, r, o);
              };
          }
          return function () {
            return e.apply(t, arguments);
          };
        };
      },
      8333: (e) => {
        e.exports = function (e) {
          if (null == e) throw TypeError("Can't call method on  " + e);
          return e;
        };
      },
      89666: (e, t, n) => {
        e.exports = !n(7929)(function () {
          return (
            7 !=
            Object.defineProperty({}, "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        });
      },
      97467: (e, t, n) => {
        var r = n(36727),
          o = n(33938).document,
          i = r(o) && r(o.createElement);
        e.exports = function (e) {
          return i ? o.createElement(e) : {};
        };
      },
      73338: (e) => {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
      },
      83856: (e, t, n) => {
        var r = n(33938),
          o = n(34579),
          i = n(19216),
          a = n(41818),
          s = n(27069),
          c = function (e, t, n) {
            var u,
              l,
              f,
              d = e & c.F,
              h = e & c.G,
              v = e & c.S,
              p = e & c.P,
              g = e & c.B,
              y = e & c.W,
              m = h ? o : o[t] || (o[t] = {}),
              b = m.prototype,
              w = h ? r : v ? r[t] : (r[t] || {}).prototype;
            for (u in (h && (n = t), n))
              ((l = !d && w && void 0 !== w[u]) && s(m, u)) ||
                ((f = l ? w[u] : n[u]),
                (m[u] =
                  h && "function" != typeof w[u]
                    ? n[u]
                    : g && l
                    ? i(f, r)
                    : y && w[u] == f
                    ? (function (e) {
                        var t = function (t, n, r) {
                          if (this instanceof e) {
                            switch (arguments.length) {
                              case 0:
                                return new e();
                              case 1:
                                return new e(t);
                              case 2:
                                return new e(t, n);
                            }
                            return new e(t, n, r);
                          }
                          return e.apply(this, arguments);
                        };
                        return (t.prototype = e.prototype), t;
                      })(f)
                    : p && "function" == typeof f
                    ? i(Function.call, f)
                    : f),
                p && (((m.virtual || (m.virtual = {}))[u] = f), e & c.R && b && !b[u] && a(b, u, f)));
          };
        (c.F = 1), (c.G = 2), (c.S = 4), (c.P = 8), (c.B = 16), (c.W = 32), (c.U = 64), (c.R = 128), (e.exports = c);
      },
      7929: (e) => {
        e.exports = function (e) {
          try {
            return !!e();
          } catch (e) {
            return !0;
          }
        };
      },
      45576: (e, t, n) => {
        var r = n(19216),
          o = n(95602),
          i = n(45991),
          a = n(12159),
          s = n(78728),
          c = n(83728),
          u = {},
          l = {},
          f = (e.exports = function (e, t, n, f, d) {
            var h,
              v,
              p,
              g,
              y = d
                ? function () {
                    return e;
                  }
                : c(e),
              m = r(n, f, t ? 2 : 1),
              b = 0;
            if ("function" != typeof y) throw TypeError(e + " is not iterable!");
            if (i(y)) {
              for (h = s(e.length); h > b; b++) if ((g = t ? m(a((v = e[b]))[0], v[1]) : m(e[b])) === u || g === l) return g;
            } else for (p = y.call(e); !(v = p.next()).done; ) if ((g = o(p, m, v.value, t)) === u || g === l) return g;
          });
        (f.BREAK = u), (f.RETURN = l);
      },
      33938: (e) => {
        var t = (e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")());
        "number" == typeof __g && (__g = t);
      },
      27069: (e) => {
        var t = {}.hasOwnProperty;
        e.exports = function (e, n) {
          return t.call(e, n);
        };
      },
      41818: (e, t, n) => {
        var r = n(4743),
          o = n(83101);
        e.exports = n(89666)
          ? function (e, t, n) {
              return r.f(e, t, o(1, n));
            }
          : function (e, t, n) {
              return (e[t] = n), e;
            };
      },
      54881: (e, t, n) => {
        var r = n(33938).document;
        e.exports = r && r.documentElement;
      },
      33758: (e, t, n) => {
        e.exports =
          !n(89666) &&
          !n(7929)(function () {
            return (
              7 !=
              Object.defineProperty(n(97467)("div"), "a", {
                get: function () {
                  return 7;
                },
              }).a
            );
          });
      },
      46778: (e) => {
        e.exports = function (e, t, n) {
          var r = void 0 === n;
          switch (t.length) {
            case 0:
              return r ? e() : e.call(n);
            case 1:
              return r ? e(t[0]) : e.call(n, t[0]);
            case 2:
              return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
            case 3:
              return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
            case 4:
              return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3]);
          }
          return e.apply(n, t);
        };
      },
      50799: (e, t, n) => {
        var r = n(32894);
        e.exports = Object("z").propertyIsEnumerable(0)
          ? Object
          : function (e) {
              return "String" == r(e) ? e.split("") : Object(e);
            };
      },
      45991: (e, t, n) => {
        var r = n(15449),
          o = n(22939)("iterator"),
          i = Array.prototype;
        e.exports = function (e) {
          return void 0 !== e && (r.Array === e || i[o] === e);
        };
      },
      36727: (e) => {
        e.exports = function (e) {
          return "object" == typeof e ? null !== e : "function" == typeof e;
        };
      },
      95602: (e, t, n) => {
        var r = n(12159);
        e.exports = function (e, t, n, o) {
          try {
            return o ? t(r(n)[0], n[1]) : t(n);
          } catch (t) {
            var i = e.return;
            throw (void 0 !== i && r(i.call(e)), t);
          }
        };
      },
      33945: (e, t, n) => {
        "use strict";
        var r = n(98989),
          o = n(83101),
          i = n(25378),
          a = {};
        n(41818)(a, n(22939)("iterator"), function () {
          return this;
        }),
          (e.exports = function (e, t, n) {
            (e.prototype = r(a, { next: o(1, n) })), i(e, t + " Iterator");
          });
      },
      45700: (e, t, n) => {
        "use strict";
        var r = n(16227),
          o = n(83856),
          i = n(57470),
          a = n(41818),
          s = n(15449),
          c = n(33945),
          u = n(25378),
          l = n(95089),
          f = n(22939)("iterator"),
          d = !([].keys && "next" in [].keys()),
          h = "keys",
          v = "values",
          p = function () {
            return this;
          };
        e.exports = function (e, t, n, g, y, m, b) {
          c(n, t, g);
          var w,
            x,
            S,
            k = function (e) {
              if (!d && e in _) return _[e];
              switch (e) {
                case h:
                case v:
                  return function () {
                    return new n(this, e);
                  };
              }
              return function () {
                return new n(this, e);
              };
            },
            T = t + " Iterator",
            R = y == v,
            C = !1,
            _ = e.prototype,
            E = _[f] || _["@@iterator"] || (y && _[y]),
            O = E || k(y),
            I = y ? (R ? k("entries") : O) : void 0,
            L = ("Array" == t && _.entries) || E;
          if (
            (L && (S = l(L.call(new e()))) !== Object.prototype && S.next && (u(S, T, !0), r || "function" == typeof S[f] || a(S, f, p)),
            R &&
              E &&
              E.name !== v &&
              ((C = !0),
              (O = function () {
                return E.call(this);
              })),
            (r && !b) || (!d && !C && _[f]) || a(_, f, O),
            (s[t] = O),
            (s[T] = p),
            y)
          )
            if (
              ((w = {
                values: R ? O : k(v),
                keys: m ? O : k(h),
                entries: I,
              }),
              b)
            )
              for (x in w) x in _ || i(_, x, w[x]);
            else o(o.P + o.F * (d || C), t, w);
          return w;
        };
      },
      96630: (e, t, n) => {
        var r = n(22939)("iterator"),
          o = !1;
        try {
          var i = [7][r]();
          (i.return = function () {
            o = !0;
          }),
            Array.from(i, function () {
              throw 2;
            });
        } catch (e) {}
        e.exports = function (e, t) {
          if (!t && !o) return !1;
          var n = !1;
          try {
            var i = [7],
              a = i[r]();
            (a.next = function () {
              return { done: (n = !0) };
            }),
              (i[r] = function () {
                return a;
              }),
              e(i);
          } catch (e) {}
          return n;
        };
      },
      85084: (e) => {
        e.exports = function (e, t) {
          return {
            value: t,
            done: !!e,
          };
        };
      },
      15449: (e) => {
        e.exports = {};
      },
      16227: (e) => {
        e.exports = !0;
      },
      81601: (e, t, n) => {
        var r = n(33938),
          o = n(62569).set,
          i = r.MutationObserver || r.WebKitMutationObserver,
          a = r.process,
          s = r.Promise,
          c = "process" == n(32894)(a);
        e.exports = function () {
          var e,
            t,
            n,
            u = function () {
              var r, o;
              for (c && (r = a.domain) && r.exit(); e; ) {
                (o = e.fn), (e = e.next);
                try {
                  o();
                } catch (r) {
                  throw (e ? n() : (t = void 0), r);
                }
              }
              (t = void 0), r && r.enter();
            };
          if (c)
            n = function () {
              a.nextTick(u);
            };
          else if (!i || (r.navigator && r.navigator.standalone))
            if (s && s.resolve) {
              var l = s.resolve(void 0);
              n = function () {
                l.then(u);
              };
            } else
              n = function () {
                o.call(r, u);
              };
          else {
            var f = !0,
              d = document.createTextNode("");
            new i(u).observe(d, { characterData: !0 }),
              (n = function () {
                d.data = f = !f;
              });
          }
          return function (r) {
            var o = {
              fn: r,
              next: void 0,
            };
            t && (t.next = o), e || ((e = o), n()), (t = o);
          };
        };
      },
      59304: (e, t, n) => {
        "use strict";
        var r = n(85663);
        function o(e) {
          var t, n;
          (this.promise = new e(function (e, r) {
            if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
            (t = e), (n = r);
          })),
            (this.resolve = r(t)),
            (this.reject = r(n));
        }
        e.exports.f = function (e) {
          return new o(e);
        };
      },
      98989: (e, t, n) => {
        var r = n(12159),
          o = n(57856),
          i = n(73338),
          a = n(58989)("IE_PROTO"),
          s = function () {},
          c = function () {
            var e,
              t = n(97467)("iframe"),
              r = i.length;
            for (
              t.style.display = "none",
                n(54881).appendChild(t),
                t.src = "javascript:",
                (e = t.contentWindow.document).open(),
                e.write("<script>document.F=Object</script>"),
                e.close(),
                c = e.F;
              r--;

            )
              delete c.prototype[i[r]];
            return c();
          };
        e.exports =
          Object.create ||
          function (e, t) {
            var n;
            return null !== e ? ((s.prototype = r(e)), (n = new s()), (s.prototype = null), (n[a] = e)) : (n = c()), void 0 === t ? n : o(n, t);
          };
      },
      4743: (e, t, n) => {
        var r = n(12159),
          o = n(33758),
          i = n(33206),
          a = Object.defineProperty;
        t.f = n(89666)
          ? Object.defineProperty
          : function (e, t, n) {
              if ((r(e), (t = i(t, !0)), r(n), o))
                try {
                  return a(e, t, n);
                } catch (e) {}
              if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
              return "value" in n && (e[t] = n.value), e;
            };
      },
      57856: (e, t, n) => {
        var r = n(4743),
          o = n(12159),
          i = n(46162);
        e.exports = n(89666)
          ? Object.defineProperties
          : function (e, t) {
              o(e);
              for (var n, a = i(t), s = a.length, c = 0; s > c; ) r.f(e, (n = a[c++]), t[n]);
              return e;
            };
      },
      95089: (e, t, n) => {
        var r = n(27069),
          o = n(66530),
          i = n(58989)("IE_PROTO"),
          a = Object.prototype;
        e.exports =
          Object.getPrototypeOf ||
          function (e) {
            return (e = o(e)), r(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null;
          };
      },
      12963: (e, t, n) => {
        var r = n(27069),
          o = n(7932),
          i = n(57428)(!1),
          a = n(58989)("IE_PROTO");
        e.exports = function (e, t) {
          var n,
            s = o(e),
            c = 0,
            u = [];
          for (n in s) n != a && r(s, n) && u.push(n);
          for (; t.length > c; ) r(s, (n = t[c++])) && (~i(u, n) || u.push(n));
          return u;
        };
      },
      46162: (e, t, n) => {
        var r = n(12963),
          o = n(73338);
        e.exports =
          Object.keys ||
          function (e) {
            return r(e, o);
          };
      },
      10931: (e) => {
        e.exports = function (e) {
          try {
            return {
              e: !1,
              v: e(),
            };
          } catch (e) {
            return {
              e: !0,
              v: e,
            };
          }
        };
      },
      87790: (e, t, n) => {
        var r = n(12159),
          o = n(36727),
          i = n(59304);
        e.exports = function (e, t) {
          if ((r(e), o(t) && t.constructor === e)) return t;
          var n = i.f(e);
          return (0, n.resolve)(t), n.promise;
        };
      },
      83101: (e) => {
        e.exports = function (e, t) {
          return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t,
          };
        };
      },
      48144: (e, t, n) => {
        var r = n(41818);
        e.exports = function (e, t, n) {
          for (var o in t) n && e[o] ? (e[o] = t[o]) : r(e, o, t[o]);
          return e;
        };
      },
      57470: (e, t, n) => {
        e.exports = n(41818);
      },
      39967: (e, t, n) => {
        "use strict";
        var r = n(33938),
          o = n(34579),
          i = n(4743),
          a = n(89666),
          s = n(22939)("species");
        e.exports = function (e) {
          var t = "function" == typeof o[e] ? o[e] : r[e];
          a &&
            t &&
            !t[s] &&
            i.f(t, s, {
              configurable: !0,
              get: function () {
                return this;
              },
            });
        };
      },
      25378: (e, t, n) => {
        var r = n(4743).f,
          o = n(27069),
          i = n(22939)("toStringTag");
        e.exports = function (e, t, n) {
          e &&
            !o((e = n ? e : e.prototype), i) &&
            r(e, i, {
              configurable: !0,
              value: t,
            });
        };
      },
      58989: (e, t, n) => {
        var r = n(20250)("keys"),
          o = n(65730);
        e.exports = function (e) {
          return r[e] || (r[e] = o(e));
        };
      },
      20250: (e, t, n) => {
        var r = n(34579),
          o = n(33938),
          i = "__core-js_shared__",
          a = o[i] || (o[i] = {});
        (e.exports = function (e, t) {
          return a[e] || (a[e] = void 0 !== t ? t : {});
        })("versions", []).push({
          version: r.version,
          mode: n(16227) ? "pure" : "global",
          copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
        });
      },
      32707: (e, t, n) => {
        var r = n(12159),
          o = n(85663),
          i = n(22939)("species");
        e.exports = function (e, t) {
          var n,
            a = r(e).constructor;
          return void 0 === a || null == (n = r(a)[i]) ? t : o(n);
        };
      },
      90510: (e, t, n) => {
        var r = n(11052),
          o = n(8333);
        e.exports = function (e) {
          return function (t, n) {
            var i,
              a,
              s = String(o(t)),
              c = r(n),
              u = s.length;
            return c < 0 || c >= u
              ? e
                ? ""
                : void 0
              : (i = s.charCodeAt(c)) < 55296 || i > 56319 || c + 1 === u || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343
              ? e
                ? s.charAt(c)
                : i
              : e
              ? s.slice(c, c + 2)
              : a - 56320 + ((i - 55296) << 10) + 65536;
          };
        };
      },
      62569: (e, t, n) => {
        var r,
          o,
          i,
          a = n(19216),
          s = n(46778),
          c = n(54881),
          u = n(97467),
          l = n(33938),
          f = l.process,
          d = l.setImmediate,
          h = l.clearImmediate,
          v = l.MessageChannel,
          p = l.Dispatch,
          g = 0,
          y = {},
          m = "onreadystatechange",
          b = function () {
            var e = +this;
            if (y.hasOwnProperty(e)) {
              var t = y[e];
              delete y[e], t();
            }
          },
          w = function (e) {
            b.call(e.data);
          };
        (d && h) ||
          ((d = function (e) {
            for (var t = [], n = 1; arguments.length > n; ) t.push(arguments[n++]);
            return (
              (y[++g] = function () {
                s("function" == typeof e ? e : Function(e), t);
              }),
              r(g),
              g
            );
          }),
          (h = function (e) {
            delete y[e];
          }),
          "process" == n(32894)(f)
            ? (r = function (e) {
                f.nextTick(a(b, e, 1));
              })
            : p && p.now
            ? (r = function (e) {
                p.now(a(b, e, 1));
              })
            : v
            ? ((i = (o = new v()).port2), (o.port1.onmessage = w), (r = a(i.postMessage, i, 1)))
            : l.addEventListener && "function" == typeof postMessage && !l.importScripts
            ? ((r = function (e) {
                l.postMessage(e + "", "*");
              }),
              l.addEventListener("message", w, !1))
            : (r =
                m in u("script")
                  ? function (e) {
                      c.appendChild(u("script")).onreadystatechange = function () {
                        c.removeChild(this), b.call(e);
                      };
                    }
                  : function (e) {
                      setTimeout(a(b, e, 1), 0);
                    })),
          (e.exports = {
            set: d,
            clear: h,
          });
      },
      16531: (e, t, n) => {
        var r = n(11052),
          o = Math.max,
          i = Math.min;
        e.exports = function (e, t) {
          return (e = r(e)) < 0 ? o(e + t, 0) : i(e, t);
        };
      },
      11052: (e) => {
        var t = Math.ceil,
          n = Math.floor;
        e.exports = function (e) {
          return isNaN((e = +e)) ? 0 : (e > 0 ? n : t)(e);
        };
      },
      7932: (e, t, n) => {
        var r = n(50799),
          o = n(8333);
        e.exports = function (e) {
          return r(o(e));
        };
      },
      78728: (e, t, n) => {
        var r = n(11052),
          o = Math.min;
        e.exports = function (e) {
          return e > 0 ? o(r(e), 9007199254740991) : 0;
        };
      },
      66530: (e, t, n) => {
        var r = n(8333);
        e.exports = function (e) {
          return Object(r(e));
        };
      },
      33206: (e, t, n) => {
        var r = n(36727);
        e.exports = function (e, t) {
          if (!r(e)) return e;
          var n, o;
          if (t && "function" == typeof (n = e.toString) && !r((o = n.call(e)))) return o;
          if ("function" == typeof (n = e.valueOf) && !r((o = n.call(e)))) return o;
          if (!t && "function" == typeof (n = e.toString) && !r((o = n.call(e)))) return o;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      65730: (e) => {
        var t = 0,
          n = Math.random();
        e.exports = function (e) {
          return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++t + n).toString(36));
        };
      },
      26640: (e, t, n) => {
        var r = n(33938).navigator;
        e.exports = (r && r.userAgent) || "";
      },
      22939: (e, t, n) => {
        var r = n(20250)("wks"),
          o = n(65730),
          i = n(33938).Symbol,
          a = "function" == typeof i;
        (e.exports = function (e) {
          return r[e] || (r[e] = (a && i[e]) || (a ? i : o)("Symbol." + e));
        }).store = r;
      },
      83728: (e, t, n) => {
        var r = n(14677),
          o = n(22939)("iterator"),
          i = n(15449);
        e.exports = n(34579).getIteratorMethod = function (e) {
          if (null != e) return e[o] || e["@@iterator"] || i[r(e)];
        };
      },
      3882: (e, t, n) => {
        "use strict";
        var r = n(79003),
          o = n(85084),
          i = n(15449),
          a = n(7932);
        (e.exports = n(45700)(
          Array,
          "Array",
          function (e, t) {
            (this._t = a(e)), (this._i = 0), (this._k = t);
          },
          function () {
            var e = this._t,
              t = this._k,
              n = this._i++;
            return !e || n >= e.length ? ((this._t = void 0), o(1)) : o(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]]);
          },
          "values",
        )),
          (i.Arguments = i.Array),
          r("keys"),
          r("values"),
          r("entries");
      },
      94058: () => {},
      32878: (e, t, n) => {
        "use strict";
        var r,
          o,
          i,
          a,
          s = n(16227),
          c = n(33938),
          u = n(19216),
          l = n(14677),
          f = n(83856),
          d = n(36727),
          h = n(85663),
          v = n(29142),
          p = n(45576),
          g = n(32707),
          y = n(62569).set,
          m = n(81601)(),
          b = n(59304),
          w = n(10931),
          x = n(26640),
          S = n(87790),
          k = "Promise",
          T = c.TypeError,
          R = c.process,
          C = R && R.versions,
          _ = (C && C.v8) || "",
          E = c.Promise,
          O = "process" == l(R),
          I = function () {},
          L = (o = b.f),
          N = !!(function () {
            try {
              var e = E.resolve(1),
                t = ((e.constructor = {})[n(22939)("species")] = function (e) {
                  e(I, I);
                });
              return (O || "function" == typeof PromiseRejectionEvent) && e.then(I) instanceof t && 0 !== _.indexOf("6.6") && -1 === x.indexOf("Chrome/66");
            } catch (e) {}
          })(),
          j = function (e) {
            var t;
            return !(!d(e) || "function" != typeof (t = e.then)) && t;
          },
          A = function (e, t) {
            if (!e._n) {
              e._n = !0;
              var n = e._c;
              m(function () {
                for (
                  var r = e._v,
                    o = 1 == e._s,
                    i = 0,
                    a = function (t) {
                      var n,
                        i,
                        a,
                        s = o ? t.ok : t.fail,
                        c = t.resolve,
                        u = t.reject,
                        l = t.domain;
                      try {
                        s
                          ? (o || (2 == e._h && P(e), (e._h = 1)),
                            !0 === s ? (n = r) : (l && l.enter(), (n = s(r)), l && (l.exit(), (a = !0))),
                            n === t.promise ? u(T("Promise-chain cycle")) : (i = j(n)) ? i.call(n, c, u) : c(n))
                          : u(r);
                      } catch (e) {
                        l && !a && l.exit(), u(e);
                      }
                    };
                  n.length > i;

                )
                  a(n[i++]);
                (e._c = []), (e._n = !1), t && !e._h && M(e);
              });
            }
          },
          M = function (e) {
            y.call(c, function () {
              var t,
                n,
                r,
                o = e._v,
                i = F(e);
              if (
                (i &&
                  ((t = w(function () {
                    O
                      ? R.emit("unhandledRejection", o, e)
                      : (n = c.onunhandledrejection)
                      ? n({
                          promise: e,
                          reason: o,
                        })
                      : (r = c.console) && r.error && r.error("Unhandled promise rejection", o);
                  })),
                  (e._h = O || F(e) ? 2 : 1)),
                (e._a = void 0),
                i && t.e)
              )
                throw t.v;
            });
          },
          F = function (e) {
            return 1 !== e._h && 0 === (e._a || e._c).length;
          },
          P = function (e) {
            y.call(c, function () {
              var t;
              O
                ? R.emit("rejectionHandled", e)
                : (t = c.onrejectionhandled) &&
                  t({
                    promise: e,
                    reason: e._v,
                  });
            });
          },
          q = function (e) {
            var t = this;
            t._d || ((t._d = !0), ((t = t._w || t)._v = e), (t._s = 2), t._a || (t._a = t._c.slice()), A(t, !0));
          },
          D = function (e) {
            var t,
              n = this;
            if (!n._d) {
              (n._d = !0), (n = n._w || n);
              try {
                if (n === e) throw T("Promise can't be resolved itself");
                (t = j(e))
                  ? m(function () {
                      var r = {
                        _w: n,
                        _d: !1,
                      };
                      try {
                        t.call(e, u(D, r, 1), u(q, r, 1));
                      } catch (e) {
                        q.call(r, e);
                      }
                    })
                  : ((n._v = e), (n._s = 1), A(n, !1));
              } catch (e) {
                q.call(
                  {
                    _w: n,
                    _d: !1,
                  },
                  e,
                );
              }
            }
          };
        N ||
          ((E = function (e) {
            v(this, E, k, "_h"), h(e), r.call(this);
            try {
              e(u(D, this, 1), u(q, this, 1));
            } catch (e) {
              q.call(this, e);
            }
          }),
          ((r = function (e) {
            (this._c = []), (this._a = void 0), (this._s = 0), (this._d = !1), (this._v = void 0), (this._h = 0), (this._n = !1);
          }).prototype = n(48144)(E.prototype, {
            then: function (e, t) {
              var n = L(g(this, E));
              return (
                (n.ok = "function" != typeof e || e),
                (n.fail = "function" == typeof t && t),
                (n.domain = O ? R.domain : void 0),
                this._c.push(n),
                this._a && this._a.push(n),
                this._s && A(this, !1),
                n.promise
              );
            },
            catch: function (e) {
              return this.then(void 0, e);
            },
          })),
          (i = function () {
            var e = new r();
            (this.promise = e), (this.resolve = u(D, e, 1)), (this.reject = u(q, e, 1));
          }),
          (b.f = L =
            function (e) {
              return e === E || e === a ? new i(e) : o(e);
            })),
          f(f.G + f.W + f.F * !N, { Promise: E }),
          n(25378)(E, k),
          n(39967)(k),
          (a = n(34579).Promise),
          f(f.S + f.F * !N, k, {
            reject: function (e) {
              var t = L(this);
              return (0, t.reject)(e), t.promise;
            },
          }),
          f(f.S + f.F * (s || !N), k, {
            resolve: function (e) {
              return S(s && this === a ? E : this, e);
            },
          }),
          f(
            f.S +
              f.F *
                !(
                  N &&
                  n(96630)(function (e) {
                    E.all(e).catch(I);
                  })
                ),
            k,
            {
              all: function (e) {
                var t = this,
                  n = L(t),
                  r = n.resolve,
                  o = n.reject,
                  i = w(function () {
                    var n = [],
                      i = 0,
                      a = 1;
                    p(e, !1, function (e) {
                      var s = i++,
                        c = !1;
                      n.push(void 0),
                        a++,
                        t.resolve(e).then(function (e) {
                          c || ((c = !0), (n[s] = e), --a || r(n));
                        }, o);
                    }),
                      --a || r(n);
                  });
                return i.e && o(i.v), n.promise;
              },
              race: function (e) {
                var t = this,
                  n = L(t),
                  r = n.reject,
                  o = w(function () {
                    p(e, !1, function (e) {
                      t.resolve(e).then(n.resolve, r);
                    });
                  });
                return o.e && r(o.v), n.promise;
              },
            },
          );
      },
      91867: (e, t, n) => {
        "use strict";
        var r = n(90510)(!0);
        n(45700)(
          String,
          "String",
          function (e) {
            (this._t = String(e)), (this._i = 0);
          },
          function () {
            var e,
              t = this._t,
              n = this._i;
            return n >= t.length
              ? {
                  value: void 0,
                  done: !0,
                }
              : ((e = r(t, n)),
                (this._i += e.length),
                {
                  value: e,
                  done: !1,
                });
          },
        );
      },
      95971: (e, t, n) => {
        "use strict";
        var r = n(83856),
          o = n(34579),
          i = n(33938),
          a = n(32707),
          s = n(87790);
        r(r.P + r.R, "Promise", {
          finally: function (e) {
            var t = a(this, o.Promise || i.Promise),
              n = "function" == typeof e;
            return this.then(
              n
                ? function (n) {
                    return s(t, e()).then(function () {
                      return n;
                    });
                  }
                : e,
              n
                ? function (n) {
                    return s(t, e()).then(function () {
                      throw n;
                    });
                  }
                : e,
            );
          },
        });
      },
      22526: (e, t, n) => {
        "use strict";
        var r = n(83856),
          o = n(59304),
          i = n(10931);
        r(r.S, "Promise", {
          try: function (e) {
            var t = o.f(this),
              n = i(e);
            return (n.e ? t.reject : t.resolve)(n.v), t.promise;
          },
        });
      },
      73871: (e, t, n) => {
        n(3882);
        for (
          var r = n(33938),
            o = n(41818),
            i = n(15449),
            a = n(22939)("toStringTag"),
            s =
              "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(
                ",",
              ),
            c = 0;
          c < s.length;
          c++
        ) {
          var u = s[c],
            l = r[u],
            f = l && l.prototype;
          f && !f[a] && o(f, a, u), (i[u] = i.Array);
        }
      },
      20205: (e, t, n) => {
        var r =
            (function () {
              return this;
            })() || Function("return this")(),
          o = r.regeneratorRuntime && Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0,
          i = o && r.regeneratorRuntime;
        if (((r.regeneratorRuntime = void 0), (e.exports = n(35666)), o)) r.regeneratorRuntime = i;
        else
          try {
            delete r.regeneratorRuntime;
          } catch (e) {
            r.regeneratorRuntime = void 0;
          }
      },
      35666: (e) => {
        !(function (t) {
          "use strict";
          var n,
            r = Object.prototype,
            o = r.hasOwnProperty,
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            s = i.asyncIterator || "@@asyncIterator",
            c = i.toStringTag || "@@toStringTag",
            u = t.regeneratorRuntime;
          if (u) e.exports = u;
          else {
            (u = t.regeneratorRuntime = e.exports).wrap = b;
            var l = "suspendedStart",
              f = "suspendedYield",
              d = "executing",
              h = "completed",
              v = {},
              p = {};
            p[a] = function () {
              return this;
            };
            var g = Object.getPrototypeOf,
              y = g && g(g(I([])));
            y && y !== r && o.call(y, a) && (p = y);
            var m = (k.prototype = x.prototype = Object.create(p));
            (S.prototype = m.constructor = k),
              (k.constructor = S),
              (k[c] = S.displayName = "GeneratorFunction"),
              (u.isGeneratorFunction = function (e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === S || "GeneratorFunction" === (t.displayName || t.name));
              }),
              (u.mark = function (e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, k) : ((e.__proto__ = k), c in e || (e[c] = "GeneratorFunction")), (e.prototype = Object.create(m)), e;
              }),
              (u.awrap = function (e) {
                return { __await: e };
              }),
              T(R.prototype),
              (R.prototype[s] = function () {
                return this;
              }),
              (u.AsyncIterator = R),
              (u.async = function (e, t, n, r) {
                var o = new R(b(e, t, n, r));
                return u.isGeneratorFunction(t)
                  ? o
                  : o.next().then(function (e) {
                      return e.done ? e.value : o.next();
                    });
              }),
              T(m),
              (m[c] = "Generator"),
              (m[a] = function () {
                return this;
              }),
              (m.toString = function () {
                return "[object Generator]";
              }),
              (u.keys = function (e) {
                var t = [];
                for (var n in e) t.push(n);
                return (
                  t.reverse(),
                  function n() {
                    for (; t.length; ) {
                      var r = t.pop();
                      if (r in e) return (n.value = r), (n.done = !1), n;
                    }
                    return (n.done = !0), n;
                  }
                );
              }),
              (u.values = I),
              (O.prototype = {
                constructor: O,
                reset: function (e) {
                  if (
                    ((this.prev = 0),
                    (this.next = 0),
                    (this.sent = this._sent = n),
                    (this.done = !1),
                    (this.delegate = null),
                    (this.method = "next"),
                    (this.arg = n),
                    this.tryEntries.forEach(E),
                    !e)
                  )
                    for (var t in this) "t" === t.charAt(0) && o.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = n);
                },
                stop: function () {
                  this.done = !0;
                  var e = this.tryEntries[0].completion;
                  if ("throw" === e.type) throw e.arg;
                  return this.rval;
                },
                dispatchException: function (e) {
                  if (this.done) throw e;
                  var t = this;
                  function r(r, o) {
                    return (s.type = "throw"), (s.arg = e), (t.next = r), o && ((t.method = "next"), (t.arg = n)), !!o;
                  }
                  for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var a = this.tryEntries[i],
                      s = a.completion;
                    if ("root" === a.tryLoc) return r("end");
                    if (a.tryLoc <= this.prev) {
                      var c = o.call(a, "catchLoc"),
                        u = o.call(a, "finallyLoc");
                      if (c && u) {
                        if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                        if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                      } else if (c) {
                        if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                      } else {
                        if (!u) throw new Error("try statement without catch or finally");
                        if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                      }
                    }
                  }
                },
                abrupt: function (e, t) {
                  for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var r = this.tryEntries[n];
                    if (r.tryLoc <= this.prev && o.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                      var i = r;
                      break;
                    }
                  }
                  i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                  var a = i ? i.completion : {};
                  return (a.type = e), (a.arg = t), i ? ((this.method = "next"), (this.next = i.finallyLoc), v) : this.complete(a);
                },
                complete: function (e, t) {
                  if ("throw" === e.type) throw e.arg;
                  return (
                    "break" === e.type || "continue" === e.type
                      ? (this.next = e.arg)
                      : "return" === e.type
                      ? ((this.rval = this.arg = e.arg), (this.method = "return"), (this.next = "end"))
                      : "normal" === e.type && t && (this.next = t),
                    v
                  );
                },
                finish: function (e) {
                  for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), E(n), v;
                  }
                },
                catch: function (e) {
                  for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.tryLoc === e) {
                      var r = n.completion;
                      if ("throw" === r.type) {
                        var o = r.arg;
                        E(n);
                      }
                      return o;
                    }
                  }
                  throw new Error("illegal catch attempt");
                },
                delegateYield: function (e, t, r) {
                  return (
                    (this.delegate = {
                      iterator: I(e),
                      resultName: t,
                      nextLoc: r,
                    }),
                    "next" === this.method && (this.arg = n),
                    v
                  );
                },
              });
          }
          function b(e, t, n, r) {
            var o = t && t.prototype instanceof x ? t : x,
              i = Object.create(o.prototype),
              a = new O(r || []);
            return (
              (i._invoke = (function (e, t, n) {
                var r = l;
                return function (o, i) {
                  if (r === d) throw new Error("Generator is already running");
                  if (r === h) {
                    if ("throw" === o) throw i;
                    return L();
                  }
                  for (n.method = o, n.arg = i; ; ) {
                    var a = n.delegate;
                    if (a) {
                      var s = C(a, n);
                      if (s) {
                        if (s === v) continue;
                        return s;
                      }
                    }
                    if ("next" === n.method) n.sent = n._sent = n.arg;
                    else if ("throw" === n.method) {
                      if (r === l) throw ((r = h), n.arg);
                      n.dispatchException(n.arg);
                    } else "return" === n.method && n.abrupt("return", n.arg);
                    r = d;
                    var c = w(e, t, n);
                    if ("normal" === c.type) {
                      if (((r = n.done ? h : f), c.arg === v)) continue;
                      return {
                        value: c.arg,
                        done: n.done,
                      };
                    }
                    "throw" === c.type && ((r = h), (n.method = "throw"), (n.arg = c.arg));
                  }
                };
              })(e, n, a)),
              i
            );
          }
          function w(e, t, n) {
            try {
              return {
                type: "normal",
                arg: e.call(t, n),
              };
            } catch (e) {
              return {
                type: "throw",
                arg: e,
              };
            }
          }
          function x() {}
          function S() {}
          function k() {}
          function T(e) {
            ["next", "throw", "return"].forEach(function (t) {
              e[t] = function (e) {
                return this._invoke(t, e);
              };
            });
          }
          function R(e) {
            function t(n, r, i, a) {
              var s = w(e[n], e, r);
              if ("throw" !== s.type) {
                var c = s.arg,
                  u = c.value;
                return u && "object" == typeof u && o.call(u, "__await")
                  ? Promise.resolve(u.__await).then(
                      function (e) {
                        t("next", e, i, a);
                      },
                      function (e) {
                        t("throw", e, i, a);
                      },
                    )
                  : Promise.resolve(u).then(function (e) {
                      (c.value = e), i(c);
                    }, a);
              }
              a(s.arg);
            }
            var n;
            this._invoke = function (e, r) {
              function o() {
                return new Promise(function (n, o) {
                  t(e, r, n, o);
                });
              }
              return (n = n ? n.then(o, o) : o());
            };
          }
          function C(e, t) {
            var r = e.iterator[t.method];
            if (r === n) {
              if (((t.delegate = null), "throw" === t.method)) {
                if (e.iterator.return && ((t.method = "return"), (t.arg = n), C(e, t), "throw" === t.method)) return v;
                (t.method = "throw"), (t.arg = new TypeError("The iterator does not provide a 'throw' method"));
              }
              return v;
            }
            var o = w(r, e.iterator, t.arg);
            if ("throw" === o.type) return (t.method = "throw"), (t.arg = o.arg), (t.delegate = null), v;
            var i = o.arg;
            return i
              ? i.done
                ? ((t[e.resultName] = i.value), (t.next = e.nextLoc), "return" !== t.method && ((t.method = "next"), (t.arg = n)), (t.delegate = null), v)
                : i
              : ((t.method = "throw"), (t.arg = new TypeError("iterator result is not an object")), (t.delegate = null), v);
          }
          function _(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t);
          }
          function E(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function O(e) {
            (this.tryEntries = [{ tryLoc: "root" }]), e.forEach(_, this), this.reset(!0);
          }
          function I(e) {
            if (e) {
              var t = e[a];
              if (t) return t.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var r = -1,
                  i = function t() {
                    for (; ++r < e.length; ) if (o.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                    return (t.value = n), (t.done = !0), t;
                  };
                return (i.next = i);
              }
            }
            return { next: L };
          }
          function L() {
            return {
              value: n,
              done: !0,
            };
          }
        })(
          (function () {
            return this;
          })() || Function("return this")(),
        );
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { exports: {} });
    return e[r](i, i.exports, n), i.exports;
  }
  (() => {
    "use strict";
    var e = n(2493),
      t = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              c(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, s);
          }
          c((r = r.apply(e, t || [])).next());
        });
      },
      r = function (e, t) {
        var n,
          r,
          o,
          i,
          a = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (i = {
            next: s(0),
            throw: s(1),
            return: s(2),
          }),
          "function" == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function s(i) {
          return function (s) {
            return (function (i) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (((n = 1), r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done)) return o;
                  switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                    case 0:
                    case 1:
                      o = i;
                      break;
                    case 4:
                      return (
                        a.label++,
                        {
                          value: i[1],
                          done: !1,
                        }
                      );
                    case 5:
                      a.label++, (r = i[1]), (i = [0]);
                      continue;
                    case 7:
                      (i = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (!((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                        a = 0;
                        continue;
                      }
                      if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                        a.label = i[1];
                        break;
                      }
                      if (6 === i[0] && a.label < o[1]) {
                        (a.label = o[1]), (o = i);
                        break;
                      }
                      if (o && a.label < o[2]) {
                        (a.label = o[2]), a.ops.push(i);
                        break;
                      }
                      o[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  i = t.call(e, a);
                } catch (e) {
                  (i = [6, e]), (r = 0);
                } finally {
                  n = o = 0;
                }
              if (5 & i[0]) throw i[1];
              return {
                value: i[0] ? i[1] : void 0,
                done: !0,
              };
            })([i, s]);
          };
        }
      },
      o = (function () {
        function n(e) {
          var t = this;
          (this.resolvedTaskIdList = []),
            (this.config = e),
            chrome.runtime.onMessage.addListener(function (e) {
              var n = null == e ? void 0 : e.type;
              "queryIsRecaptchaSuccessForReport" === n &&
                (console.log("recaptchaForReport", e.result), t.resolvedTaskIdList.length && (t.sendTasksResult(!!(null == e ? void 0 : e.result)), t.resetResolvedTaskIdList())),
                "queryInsertRecaptchaResolvedTaskId" === n &&
                  (null == e ? void 0 : e.taskId) &&
                  (t.insertTaskId(null == e ? void 0 : e.taskId), console.log("InsertRecaptchaResolvedTaskId", t.resolvedTaskIdList));
            });
        }
        return (
          (n.prototype.resetResolvedTaskIdList = function () {
            this.resolvedTaskIdList = [];
          }),
          (n.prototype.sendTasksResult = function (n) {
            return t(this, void 0, void 0, function () {
              var t, o;
              return r(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      console.log("sendTasksResult", this.resolvedTaskIdList, "isSuccess: ".concat(n)),
                      (t = {
                        id: this.resolvedTaskIdList,
                        isSuccess: n,
                      }),
                      [4, (0, e.post)(new URL("report", this.config.host).href, t)]
                    );
                  case 1:
                    return (o = r.sent()), console.log("sendTasksResult", o), [2, o];
                }
              });
            });
          }),
          (n.prototype.insertTaskId = function (e) {
            e &&
              (this.resolvedTaskIdList.find(function (t) {
                return t === e;
              }) ||
                this.resolvedTaskIdList.push(e));
          }),
          n
        );
      })(),
      i = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              c(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, s);
          }
          c((r = r.apply(e, t || [])).next());
        });
      },
      a = function (e, t) {
        var n,
          r,
          o,
          i,
          a = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (i = {
            next: s(0),
            throw: s(1),
            return: s(2),
          }),
          "function" == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function s(i) {
          return function (s) {
            return (function (i) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (((n = 1), r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done)) return o;
                  switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                    case 0:
                    case 1:
                      o = i;
                      break;
                    case 4:
                      return (
                        a.label++,
                        {
                          value: i[1],
                          done: !1,
                        }
                      );
                    case 5:
                      a.label++, (r = i[1]), (i = [0]);
                      continue;
                    case 7:
                      (i = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (!((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                        a = 0;
                        continue;
                      }
                      if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                        a.label = i[1];
                        break;
                      }
                      if (6 === i[0] && a.label < o[1]) {
                        (a.label = o[1]), (o = i);
                        break;
                      }
                      if (o && a.label < o[2]) {
                        (a.label = o[2]), a.ops.push(i);
                        break;
                      }
                      o[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  i = t.call(e, a);
                } catch (e) {
                  (i = [6, e]), (r = 0);
                } finally {
                  n = o = 0;
                }
              if (5 & i[0]) throw i[1];
              return {
                value: i[0] ? i[1] : void 0,
                done: !0,
              };
            })([i, s]);
          };
        }
      },
      s = (function () {
        function t(e) {
          var t = this;
          (this.resolvedTaskIdList = []),
            (this.config = e),
            chrome.runtime.onMessage.addListener(function (e) {
              var n = null == e ? void 0 : e.type;
              "queryIsHcaptchaSuccessForReport" === n &&
                (console.log("hcaptchaForReport", e.result), t.resolvedTaskIdList.length && (t.sendTasksResult(!!(null == e ? void 0 : e.result)), t.resetResolvedTaskIdList())),
                "queryInsertHcaptchaResolvedTaskId" === n &&
                  (null == e ? void 0 : e.taskId) &&
                  (t.insertTaskId(null == e ? void 0 : e.taskId), console.log("insertResolvedTaskId", t.resolvedTaskIdList));
            });
        }
        return (
          (t.prototype.resetResolvedTaskIdList = function () {
            this.resolvedTaskIdList = [];
          }),
          (t.prototype.insertTaskId = function (e) {
            e &&
              (this.resolvedTaskIdList.find(function (t) {
                return t === e;
              }) ||
                this.resolvedTaskIdList.push(e));
          }),
          (t.prototype.sendTasksResult = function (t) {
            return i(this, void 0, void 0, function () {
              var n, r;
              return a(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      console.log("sendTasksResult", this.resolvedTaskIdList, "isSuccess: ".concat(t)),
                      (n = {
                        id: this.resolvedTaskIdList,
                        isSuccess: t,
                      }),
                      [4, (0, e.post)(new URL("report", this.config.host).href, n)]
                    );
                  case 1:
                    return (r = o.sent()), console.log("sendTasksResult", r), [2, r];
                }
              });
            });
          }),
          t
        );
      })(),
      c = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              c(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, s);
          }
          c((r = r.apply(e, t || [])).next());
        });
      },
      u = function (e, t) {
        var n,
          r,
          o,
          i,
          a = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (i = {
            next: s(0),
            throw: s(1),
            return: s(2),
          }),
          "function" == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function s(i) {
          return function (s) {
            return (function (i) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (((n = 1), r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done)) return o;
                  switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                    case 0:
                    case 1:
                      o = i;
                      break;
                    case 4:
                      return (
                        a.label++,
                        {
                          value: i[1],
                          done: !1,
                        }
                      );
                    case 5:
                      a.label++, (r = i[1]), (i = [0]);
                      continue;
                    case 7:
                      (i = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (!((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                        a = 0;
                        continue;
                      }
                      if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                        a.label = i[1];
                        break;
                      }
                      if (6 === i[0] && a.label < o[1]) {
                        (a.label = o[1]), (o = i);
                        break;
                      }
                      if (o && a.label < o[2]) {
                        (a.label = o[2]), a.ops.push(i);
                        break;
                      }
                      o[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  i = t.call(e, a);
                } catch (e) {
                  (i = [6, e]), (r = 0);
                } finally {
                  n = o = 0;
                }
              if (5 & i[0]) throw i[1];
              return {
                value: i[0] ? i[1] : void 0,
                done: !0,
              };
            })([i, s]);
          };
        }
      },
      l = function (t, n) {
        return function (r, o) {
          return (
            void 0 === o && (o = 3),
            c(void 0, void 0, void 0, function () {
              var i, a;
              return u(this, function (s) {
                switch (s.label) {
                  case 0:
                    (i = 0), (s.label = 1);
                  case 1:
                    return i < o ? [4, t(r)] : [3, 5];
                  case 2:
                    return (null == (a = s.sent()) ? void 0 : a.length) > n
                      ? [2, a]
                      : (console.log("imageLengthThresholdLimit:".concat(1e4, ">").concat(null == a ? void 0 : a.length)), [4, (0, e.delay)(1500)]);
                  case 3:
                    s.sent(), (s.label = 4);
                  case 4:
                    return i++, [3, 1];
                  case 5:
                    return [2];
                }
              });
            })
          );
        };
      },
      f = l(function (e) {
        return c(void 0, void 0, void 0, function () {
          return u(this, function (t) {
            return [
              2,
              new Promise(function (t) {
                var n = setTimeout(function () {
                  clearTimeout(n), t(null == e ? void 0 : e.toDataURL("image/jpeg", 0.3));
                }, 1e3);
              }),
            ];
          });
        });
      }, 1e4),
      d = l(function (t) {
        return c(void 0, void 0, void 0, function () {
          var n, r, o, i;
          return u(this, function (a) {
            switch (a.label) {
              case 0:
                return [4, (0, e.waitforbackground)(t)];
              case 1:
                return (
                  a.sent(),
                  (n =
                    null === (i = null === (o = null === (r = null == t ? void 0 : t.style) || void 0 === r ? void 0 : r.background) || void 0 === o ? void 0 : o.split('"')) ||
                    void 0 === i
                      ? void 0
                      : i[1]),
                  [4, (0, e.div2base64)(n, null == t ? void 0 : t.offsetWidth, null == t ? void 0 : t.offsetHeight)]
                );
              case 2:
                return [2, a.sent()];
            }
          });
        });
      }, 5e3),
      h = l(function (t) {
        return c(void 0, void 0, void 0, function () {
          var n, r, o, i;
          return u(this, function (a) {
            switch (a.label) {
              case 0:
                return [4, (0, e.waitforbackgroundWithTimeout)(t)];
              case 1:
                return (
                  a.sent(),
                  (n =
                    null === (i = null === (o = null === (r = null == t ? void 0 : t.style) || void 0 === r ? void 0 : r.background) || void 0 === o ? void 0 : o.split('"')) ||
                    void 0 === i
                      ? void 0
                      : i[1])
                    ? [2, (0, e.div2base64)(n, null == t ? void 0 : t.offsetWidth, null == t ? void 0 : t.offsetHeight)]
                    : [2]
                );
            }
          });
        });
      }, 3e3),
      v = function (e, t, n) {
        return (
          void 0 === n &&
            (n = {
              titleColor: "#00cc00",
              contentColor: "#1475B2",
            }),
          console.log(
            "%c".concat(e, "%c").concat(t),
            "background: ".concat(n.titleColor, "; color: #fff; border-radius: 3px 0 0 3px;padding:2px 5px"),
            "background: ".concat(n.contentColor, "; color: #fff; border-radius: 0 3px 3px 0;padding:2px 5px"),
          )
        );
      },
      p = function (t, n, r) {
        return c(void 0, void 0, void 0, function () {
          var o, i, a, s;
          return u(this, function (c) {
            switch (c.label) {
              case 0:
                return (
                  console.log(t, "t value"),
                  v("drag_to", "".concat(JSON.stringify(n), ", ").concat(JSON.stringify(r)), {
                    titleColor: "red",
                    contentColor: "green",
                  }),
                  t.dispatchEvent(
                    new MouseEvent("mousedown", {
                      clientX: n.x,
                      clientY: n.y,
                    }),
                  ),
                  [4, (0, e.delay)(1500)]
                );
              case 1:
                c.sent(),
                  (o = {
                    x: n.x,
                    y: n.y,
                  }),
                  (i = 50),
                  (a = {
                    x: (r.x - n.x) / i,
                    y: (r.y - n.y) / i,
                  }),
                  (s = 0),
                  (c.label = 2);
              case 2:
                return s < i
                  ? ((o.x = o.x + a.x),
                    (o.y = o.y + a.y),
                    t.dispatchEvent(
                      new MouseEvent("mousemove", {
                        clientX: o.x,
                        clientY: o.y,
                      }),
                    ),
                    [4, (0, e.delay)(10)])
                  : [3, 5];
              case 3:
                c.sent(), (c.label = 4);
              case 4:
                return s++, [3, 2];
              case 5:
                return (
                  t.dispatchEvent(
                    new MouseEvent("mouseup", {
                      clientX: o.x,
                      clientY: o.y,
                    }),
                  ),
                  [2]
                );
            }
          });
        });
      },
      g = function (e, t, n) {
        var r = e.getBoundingClientRect(),
          o = t.DOMRect;
        return new Promise(function (e, i) {
          chrome.runtime.sendMessage({ action: "screenshot" }, function (i) {
            return c(void 0, void 0, void 0, function () {
              var a, s;
              return u(this, function (c) {
                switch (c.label) {
                  case 0:
                    return [
                      4,
                      ((u = i),
                      new Promise(function (e) {
                        var t = new Image();
                        (t.onload = function () {
                          return e({
                            width: t.width,
                            height: t.height,
                          });
                        }),
                          (t.src = u);
                      })),
                    ];
                  case 1:
                    return (
                      (a = c.sent()),
                      ((s = new Image()).onload = function () {
                        var i,
                          c,
                          u = document.createElement("canvas"),
                          l = u.getContext("2d"),
                          f = a.width / t.topClientWidth;
                        (u.width = r.width * f),
                          (u.height = r.height * f),
                          null == l ||
                            l.drawImage(
                              s,
                              (r.x + (null !== (i = null == o ? void 0 : o.x) && void 0 !== i ? i : 0)) * f,
                              (r.y + (null !== (c = null == o ? void 0 : o.y) && void 0 !== c ? c : 0)) * f,
                              r.width * f,
                              r.height * f,
                              0,
                              0,
                              r.width * f,
                              r.height * f,
                            ),
                          e(n ? u.toDataURL(n.type, n.rate) : u.toDataURL());
                      }),
                      (s.src = i),
                      [2]
                    );
                }
                var u;
              });
            });
          });
          var a = setTimeout(function () {
            e("timeout"), clearTimeout(a);
          }, 5e3);
        });
      };
    var y = function () {
        return (
          (y =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }),
          y.apply(this, arguments)
        );
      },
      m = function (e) {
        return "funcaptcha" === e ? "top" : "awsCaptcha" === e ? "self" : "parent";
      },
      b = function (e, t, n) {
        void 0 === n && (n = ""),
          e.allowJsInject &&
            x({
              config: e,
              target: m(n),
              type: "workStatusChange",
              data: { result: t },
            });
      },
      w = function (e) {
        var t = e.type,
          n = e.data,
          r = y(
            {
              action: "contentMsg",
              type: t,
            },
            n,
          );
        chrome.runtime.sendMessage(r);
      },
      x = function (e) {
        var t,
          n,
          r,
          o = e.config,
          i = e.target,
          a = e.type,
          s = e.data,
          c = e.targetFrames,
          u = o.postMassageKeyObj,
          l = [
            "workStatusChange",
            "initWorkStatus",
            "queryJsControlFlagAnswer",
            "queryJsControlFlag",
            "jsControl",
            "isHcaptchaSuccessForJsControl",
            "isRecaptchaSuccessForJsControl",
          ];
        if (o.allowJsInject || !l.includes(a)) {
          var f = l.includes(a) ? "crx" : u.crx,
            d = l.includes(a) ? "type" : u.type,
            h = y((((t = {})[f] = "yesCaptcha"), (t[d] = a), t), s);
          console.log("Posting message:", h);
          if (null == c ? void 0 : c.length) for (var v = 0; v < c.length; v++) c[v].contentWindow.postMessage(h, "*");
          else {
            if ("child" === i) {
              var p = document.getElementsByTagName("IFRAME");
              for (v = 0; v < p.length; v++) p[v].contentWindow.postMessage(h, "*");
            }
            "parent" === i && (null === (n = null === window || void 0 === window ? void 0 : window.parent) || void 0 === n || n.postMessage(h, "*")),
              "top" === i && (null === (r = null === window || void 0 === window ? void 0 : window.top) || void 0 === r || r.postMessage(h, "*")),
              "self" === i && window.postMessage(h);
          }
        }
      };
    var S = function (e) {
        return !!e && "HTML" !== e.tagName && ("0" == e.style.opacity || S(null == e ? void 0 : e.parentElement));
      },
      k = function (e) {
        return !!e && !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
      },
      T = function (e) {
        return chrome.i18n.getMessage(e);
      };
    /hcaptcha\S*\.com(.*?)frame=(checkbox|checkbox-invisible)/.test(location.href), /hcaptcha\S*\.com(.*?)frame=checkbox-invisible/.test(location.href);
    function R(e) {
      return null != e && "object" == typeof e && !0 === e["@@functional/placeholder"];
    }
    function C(e) {
      return function t(n) {
        return 0 === arguments.length || R(n) ? t : e.apply(this, arguments);
      };
    }
    function _(e) {
      return function t(n, r) {
        switch (arguments.length) {
          case 0:
            return t;
          case 1:
            return R(n)
              ? t
              : C(function (t) {
                  return e(n, t);
                });
          default:
            return R(n) && R(r)
              ? t
              : R(n)
              ? C(function (t) {
                  return e(t, r);
                })
              : R(r)
              ? C(function (t) {
                  return e(n, t);
                })
              : e(n, r);
        }
      };
    }
    const E =
      Array.isArray ||
      function (e) {
        return null != e && e.length >= 0 && "[object Array]" === Object.prototype.toString.call(e);
      };
    function O(e) {
      return null != e && "function" == typeof e["@@transducer/step"];
    }
    function I(e, t, n) {
      return function () {
        if (0 === arguments.length) return n();
        var r = arguments[arguments.length - 1];
        if (!E(r)) {
          for (var o = 0; o < e.length; ) {
            if ("function" == typeof r[e[o]]) return r[e[o]].apply(r, Array.prototype.slice.call(arguments, 0, -1));
            o += 1;
          }
          if (O(r)) {
            var i = t.apply(null, Array.prototype.slice.call(arguments, 0, -1));
            return i(r);
          }
        }
        return n.apply(this, arguments);
      };
    }
    const L = {
      init: function () {
        return this.xf["@@transducer/init"]();
      },
      result: function (e) {
        return this.xf["@@transducer/result"](e);
      },
    };
    function N(e, t) {
      for (var n = 0, r = t.length, o = Array(r); n < r; ) (o[n] = e(t[n])), (n += 1);
      return o;
    }
    function j(e) {
      return "[object String]" === Object.prototype.toString.call(e);
    }
    const A = C(function (e) {
      return !!E(e) || (!!e && "object" == typeof e && !j(e) && (0 === e.length || (e.length > 0 && e.hasOwnProperty(0) && e.hasOwnProperty(e.length - 1))));
    });
    var M = (function () {
      function e(e) {
        this.f = e;
      }
      return (
        (e.prototype["@@transducer/init"] = function () {
          throw new Error("init not implemented on XWrap");
        }),
        (e.prototype["@@transducer/result"] = function (e) {
          return e;
        }),
        (e.prototype["@@transducer/step"] = function (e, t) {
          return this.f(e, t);
        }),
        e
      );
    })();
    function F(e, t) {
      switch (e) {
        case 0:
          return function () {
            return t.apply(this, arguments);
          };
        case 1:
          return function (e) {
            return t.apply(this, arguments);
          };
        case 2:
          return function (e, n) {
            return t.apply(this, arguments);
          };
        case 3:
          return function (e, n, r) {
            return t.apply(this, arguments);
          };
        case 4:
          return function (e, n, r, o) {
            return t.apply(this, arguments);
          };
        case 5:
          return function (e, n, r, o, i) {
            return t.apply(this, arguments);
          };
        case 6:
          return function (e, n, r, o, i, a) {
            return t.apply(this, arguments);
          };
        case 7:
          return function (e, n, r, o, i, a, s) {
            return t.apply(this, arguments);
          };
        case 8:
          return function (e, n, r, o, i, a, s, c) {
            return t.apply(this, arguments);
          };
        case 9:
          return function (e, n, r, o, i, a, s, c, u) {
            return t.apply(this, arguments);
          };
        case 10:
          return function (e, n, r, o, i, a, s, c, u, l) {
            return t.apply(this, arguments);
          };
        default:
          throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
      }
    }
    const P = _(function (e, t) {
      return F(e.length, function () {
        return e.apply(t, arguments);
      });
    });
    function q(e, t, n) {
      for (var r = n.next(); !r.done; ) {
        if ((t = e["@@transducer/step"](t, r.value)) && t["@@transducer/reduced"]) {
          t = t["@@transducer/value"];
          break;
        }
        r = n.next();
      }
      return e["@@transducer/result"](t);
    }
    function D(e, t, n, r) {
      return e["@@transducer/result"](n[r](P(e["@@transducer/step"], e), t));
    }
    var B = "undefined" != typeof Symbol ? Symbol.iterator : "@@iterator";
    function H(e, t, n) {
      if (
        ("function" == typeof e &&
          (e = (function (e) {
            return new M(e);
          })(e)),
        A(n))
      )
        return (function (e, t, n) {
          for (var r = 0, o = n.length; r < o; ) {
            if ((t = e["@@transducer/step"](t, n[r])) && t["@@transducer/reduced"]) {
              t = t["@@transducer/value"];
              break;
            }
            r += 1;
          }
          return e["@@transducer/result"](t);
        })(e, t, n);
      if ("function" == typeof n["fantasy-land/reduce"]) return D(e, t, n, "fantasy-land/reduce");
      if (null != n[B]) return q(e, t, n[B]());
      if ("function" == typeof n.next) return q(e, t, n);
      if ("function" == typeof n.reduce) return D(e, t, n, "reduce");
      throw new TypeError("reduce: list must be array or iterable");
    }
    function U(e, t) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }
    var G = Object.prototype.toString;
    const W = (function () {
      return "[object Arguments]" === G.call(arguments)
        ? function (e) {
            return "[object Arguments]" === G.call(e);
          }
        : function (e) {
            return U("callee", e);
          };
    })();
    var V = !{ toString: null }.propertyIsEnumerable("toString"),
      Y = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
      J = (function () {
        return arguments.propertyIsEnumerable("length");
      })(),
      K = function (e, t) {
        for (var n = 0; n < e.length; ) {
          if (e[n] === t) return !0;
          n += 1;
        }
        return !1;
      };
    const X =
      "function" != typeof Object.keys || J
        ? C(function (e) {
            if (Object(e) !== e) return [];
            var t,
              n,
              r = [],
              o = J && W(e);
            for (t in e) !U(t, e) || (o && "length" === t) || (r[r.length] = t);
            if (V) for (n = Y.length - 1; n >= 0; ) U((t = Y[n]), e) && !K(r, t) && (r[r.length] = t), (n -= 1);
            return r;
          })
        : C(function (e) {
            return Object(e) !== e ? [] : Object.keys(e);
          });
    Number.isInteger;
    function z(e) {
      return function t(n, r, o) {
        switch (arguments.length) {
          case 0:
            return t;
          case 1:
            return R(n)
              ? t
              : _(function (t, r) {
                  return e(n, t, r);
                });
          case 2:
            return R(n) && R(r)
              ? t
              : R(n)
              ? _(function (t, n) {
                  return e(t, r, n);
                })
              : R(r)
              ? _(function (t, r) {
                  return e(n, t, r);
                })
              : C(function (t) {
                  return e(n, r, t);
                });
          default:
            return R(n) && R(r) && R(o)
              ? t
              : R(n) && R(r)
              ? _(function (t, n) {
                  return e(t, n, o);
                })
              : R(n) && R(o)
              ? _(function (t, n) {
                  return e(t, r, n);
                })
              : R(r) && R(o)
              ? _(function (t, r) {
                  return e(n, t, r);
                })
              : R(n)
              ? C(function (t) {
                  return e(t, r, o);
                })
              : R(r)
              ? C(function (t) {
                  return e(n, t, o);
                })
              : R(o)
              ? C(function (t) {
                  return e(n, r, t);
                })
              : e(n, r, o);
        }
      };
    }
    const Z = z(H);
    function Q(e, t) {
      return function () {
        return t.call(this, e.apply(this, arguments));
      };
    }
    function $(e, t) {
      return function () {
        var n = arguments.length;
        if (0 === n) return t();
        var r = arguments[n - 1];
        return E(r) || "function" != typeof r[e] ? t.apply(this, arguments) : r[e].apply(r, Array.prototype.slice.call(arguments, 0, n - 1));
      };
    }
    const ee = z(
      $("slice", function (e, t, n) {
        return Array.prototype.slice.call(n, e, t);
      }),
    );
    const te = C($("tail", ee(1, 1 / 0)));
    function ne() {
      if (0 === arguments.length) throw new Error("pipe requires at least one argument");
      return F(arguments[0].length, Z(Q, arguments[0], te(arguments)));
    }
    function re(e) {
      for (var t, n = []; !(t = e.next()).done; ) n.push(t.value);
      return n;
    }
    function oe(e, t, n) {
      for (var r = 0, o = n.length; r < o; ) {
        if (e(t, n[r])) return !0;
        r += 1;
      }
      return !1;
    }
    const ie =
      "function" == typeof Object.is
        ? Object.is
        : function (e, t) {
            return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
          };
    const ae = C(function (e) {
      return null === e ? "Null" : void 0 === e ? "Undefined" : Object.prototype.toString.call(e).slice(8, -1);
    });
    function se(e, t, n, r) {
      var o = re(e);
      function i(e, t) {
        return ce(e, t, n.slice(), r.slice());
      }
      return !oe(
        function (e, t) {
          return !oe(i, t, e);
        },
        re(t),
        o,
      );
    }
    function ce(e, t, n, r) {
      if (ie(e, t)) return !0;
      var o,
        i,
        a = ae(e);
      if (a !== ae(t)) return !1;
      if ("function" == typeof e["fantasy-land/equals"] || "function" == typeof t["fantasy-land/equals"])
        return "function" == typeof e["fantasy-land/equals"] && e["fantasy-land/equals"](t) && "function" == typeof t["fantasy-land/equals"] && t["fantasy-land/equals"](e);
      if ("function" == typeof e.equals || "function" == typeof t.equals) return "function" == typeof e.equals && e.equals(t) && "function" == typeof t.equals && t.equals(e);
      switch (a) {
        case "Arguments":
        case "Array":
        case "Object":
          if ("function" == typeof e.constructor && "Promise" === ((o = e.constructor), null == (i = String(o).match(/^function (\w*)/)) ? "" : i[1])) return e === t;
          break;
        case "Boolean":
        case "Number":
        case "String":
          if (typeof e != typeof t || !ie(e.valueOf(), t.valueOf())) return !1;
          break;
        case "Date":
          if (!ie(e.valueOf(), t.valueOf())) return !1;
          break;
        case "Error":
          return e.name === t.name && e.message === t.message;
        case "RegExp":
          if (e.source !== t.source || e.global !== t.global || e.ignoreCase !== t.ignoreCase || e.multiline !== t.multiline || e.sticky !== t.sticky || e.unicode !== t.unicode)
            return !1;
      }
      for (var s = n.length - 1; s >= 0; ) {
        if (n[s] === e) return r[s] === t;
        s -= 1;
      }
      switch (a) {
        case "Map":
          return e.size === t.size && se(e.entries(), t.entries(), n.concat([e]), r.concat([t]));
        case "Set":
          return e.size === t.size && se(e.values(), t.values(), n.concat([e]), r.concat([t]));
        case "Arguments":
        case "Array":
        case "Object":
        case "Boolean":
        case "Number":
        case "String":
        case "Date":
        case "Error":
        case "RegExp":
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "ArrayBuffer":
          break;
        default:
          return !1;
      }
      var c = X(e);
      if (c.length !== X(t).length) return !1;
      var u = n.concat([e]),
        l = r.concat([t]);
      for (s = c.length - 1; s >= 0; ) {
        var f = c[s];
        if (!U(f, t) || !ce(t[f], e[f], u, l)) return !1;
        s -= 1;
      }
      return !0;
    }
    const ue = _(function (e, t) {
      return ce(e, t, [], []);
    });
    function le(e, t) {
      return (
        (function (e, t, n) {
          var r, o;
          if ("function" == typeof e.indexOf)
            switch (typeof t) {
              case "number":
                if (0 === t) {
                  for (r = 1 / t; n < e.length; ) {
                    if (0 === (o = e[n]) && 1 / o === r) return n;
                    n += 1;
                  }
                  return -1;
                }
                if (t != t) {
                  for (; n < e.length; ) {
                    if ("number" == typeof (o = e[n]) && o != o) return n;
                    n += 1;
                  }
                  return -1;
                }
                return e.indexOf(t, n);
              case "string":
              case "boolean":
              case "function":
              case "undefined":
                return e.indexOf(t, n);
              case "object":
                if (null === t) return e.indexOf(t, n);
            }
          for (; n < e.length; ) {
            if (ue(e[n], t)) return n;
            n += 1;
          }
          return -1;
        })(t, e, 0) >= 0
      );
    }
    function fe(e) {
      return (
        '"' +
        e
          .replace(/\\/g, "\\\\")
          .replace(/[\b]/g, "\\b")
          .replace(/\f/g, "\\f")
          .replace(/\n/g, "\\n")
          .replace(/\r/g, "\\r")
          .replace(/\t/g, "\\t")
          .replace(/\v/g, "\\v")
          .replace(/\0/g, "\\0")
          .replace(/"/g, '\\"') +
        '"'
      );
    }
    var de = function (e) {
      return (e < 10 ? "0" : "") + e;
    };
    const he =
      "function" == typeof Date.prototype.toISOString
        ? function (e) {
            return e.toISOString();
          }
        : function (e) {
            return (
              e.getUTCFullYear() +
              "-" +
              de(e.getUTCMonth() + 1) +
              "-" +
              de(e.getUTCDate()) +
              "T" +
              de(e.getUTCHours()) +
              ":" +
              de(e.getUTCMinutes()) +
              ":" +
              de(e.getUTCSeconds()) +
              "." +
              (e.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) +
              "Z"
            );
          };
    var ve = (function () {
      function e(e, t) {
        (this.xf = t), (this.f = e);
      }
      return (
        (e.prototype["@@transducer/init"] = L.init),
        (e.prototype["@@transducer/result"] = L.result),
        (e.prototype["@@transducer/step"] = function (e, t) {
          return this.f(t) ? this.xf["@@transducer/step"](e, t) : e;
        }),
        e
      );
    })();
    const pe = _(
      I(
        ["fantasy-land/filter", "filter"],
        _(function (e, t) {
          return new ve(e, t);
        }),
        function (e, t) {
          return (
            (n = t),
            "[object Object]" === Object.prototype.toString.call(n)
              ? H(
                  function (n, r) {
                    return e(t[r]) && (n[r] = t[r]), n;
                  },
                  {},
                  X(t),
                )
              : (function (e, t) {
                  for (var n = 0, r = t.length, o = []; n < r; ) e(t[n]) && (o[o.length] = t[n]), (n += 1);
                  return o;
                })(e, t)
          );
          var n;
        },
      ),
    );
    const ge = _(function (e, t) {
      return pe(
        ((n = e),
        function () {
          return !n.apply(this, arguments);
        }),
        t,
      );
      var n;
    });
    function ye(e, t) {
      var n = function (n) {
          var r = t.concat([e]);
          return le(n, r) ? "<Circular>" : ye(n, r);
        },
        r = function (e, t) {
          return N(function (t) {
            return fe(t) + ": " + n(e[t]);
          }, t.slice().sort());
        };
      switch (Object.prototype.toString.call(e)) {
        case "[object Arguments]":
          return "(function() { return arguments; }(" + N(n, e).join(", ") + "))";
        case "[object Array]":
          return (
            "[" +
            N(n, e)
              .concat(
                r(
                  e,
                  ge(function (e) {
                    return /^\d+$/.test(e);
                  }, X(e)),
                ),
              )
              .join(", ") +
            "]"
          );
        case "[object Boolean]":
          return "object" == typeof e ? "new Boolean(" + n(e.valueOf()) + ")" : e.toString();
        case "[object Date]":
          return "new Date(" + (isNaN(e.valueOf()) ? n(NaN) : fe(he(e))) + ")";
        case "[object Null]":
          return "null";
        case "[object Number]":
          return "object" == typeof e ? "new Number(" + n(e.valueOf()) + ")" : 1 / e == -1 / 0 ? "-0" : e.toString(10);
        case "[object String]":
          return "object" == typeof e ? "new String(" + n(e.valueOf()) + ")" : fe(e);
        case "[object Undefined]":
          return "undefined";
        default:
          if ("function" == typeof e.toString) {
            var o = e.toString();
            if ("[object Object]" !== o) return o;
          }
          return "{" + r(e, X(e)).join(", ") + "}";
      }
    }
    "function" == typeof Object.assign && Object.assign;
    function me(e, t) {
      if (
        null == t ||
        !(function (e) {
          var t = Object.prototype.toString.call(e);
          return "[object Function]" === t || "[object AsyncFunction]" === t || "[object GeneratorFunction]" === t || "[object AsyncGeneratorFunction]" === t;
        })(t.then)
      )
        throw new TypeError("`" + e + "` expected a Promise, received " + ye(t, []));
    }
    const be = _(function (e, t) {
      return me("andThen", t), t.then(e);
    });
    var we = "	\n\v\f\r \xA0              　\u2028\u2029﻿";
    String.prototype.trim;
    var xe = function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              c(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, s);
          }
          c((r = r.apply(e, t || [])).next());
        });
      },
      Se = function (e, t) {
        var n,
          r,
          o,
          i,
          a = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (i = {
            next: s(0),
            throw: s(1),
            return: s(2),
          }),
          "function" == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function s(i) {
          return function (s) {
            return (function (i) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (((n = 1), r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done)) return o;
                  switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                    case 0:
                    case 1:
                      o = i;
                      break;
                    case 4:
                      return (
                        a.label++,
                        {
                          value: i[1],
                          done: !1,
                        }
                      );
                    case 5:
                      a.label++, (r = i[1]), (i = [0]);
                      continue;
                    case 7:
                      (i = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (!((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                        a = 0;
                        continue;
                      }
                      if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                        a.label = i[1];
                        break;
                      }
                      if (6 === i[0] && a.label < o[1]) {
                        (a.label = o[1]), (o = i);
                        break;
                      }
                      if (o && a.label < o[2]) {
                        (a.label = o[2]), a.ops.push(i);
                        break;
                      }
                      o[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  i = t.call(e, a);
                } catch (e) {
                  (i = [6, e]), (r = 0);
                } finally {
                  n = o = 0;
                }
              if (5 & i[0]) throw i[1];
              return {
                value: i[0] ? i[1] : void 0,
                done: !0,
              };
            })([i, s]);
          };
        }
      },
      ke = function (e, t, n) {
        if (n || 2 === arguments.length) for (var r, o = 0, i = t.length; o < i; o++) (!r && o in t) || (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
        return e.concat(r || Array.prototype.slice.call(t));
      },
      Te =
        ((function () {
          function t(t) {
            var n,
              r,
              o,
              i = this;
            ((this.isSendFailedRecResult = !1),
            (this.isResolving = !1),
            (this.verifyTimes = 0),
            (this.stopSudokuObserver = function () {
              var e;
              return null === (e = i.sudokuObserver) || void 0 === e ? void 0 : e.disconnect();
            }),
            (this.stopSudokuProcessing = function () {
              return (i.isResolving = !1);
            }),
            (this.startSudokuObserver = function () {
              var e,
                t = document.body;
              i.sudokuObserver || i.getSudokuObserver(),
                null === (e = i.sudokuObserver) ||
                  void 0 === e ||
                  e.observe(t, {
                    childList: !0,
                    subtree: !0,
                    attributes: !0,
                  });
            }),
            (this.getSudokuObserver = function () {
              i.sudokuObserver = new MutationObserver(function (e) {
                console.log("检测到节点变化，开始处理", e);
                var t = (function (e) {
                  var t,
                    n,
                    r = e.filter(function (e) {
                      return "childList" === e.type;
                    }),
                    o = (function (e) {
                      var t,
                        n,
                        r,
                        o,
                        i,
                        a,
                        s,
                        c,
                        u,
                        l,
                        f,
                        d,
                        h = e.filter(function (e) {
                          return "challenge-view" === e.target.className;
                        }),
                        v = h.find(function (e) {
                          var t, n;
                          return (
                            "task-grid" === (null === (n = null === (t = null == e ? void 0 : e.addedNodes) || void 0 === t ? void 0 : t[0]) || void 0 === n ? void 0 : n.className)
                          );
                        });
                      if (v) return "sudokuChange";
                      var p = e.filter(function (e) {
                          return "task-answers" === e.target.className;
                        }),
                        g = p.length;
                      return "challenge-answer" ===
                        (null === (r = null === (n = null === (t = null == p ? void 0 : p[g - 1]) || void 0 === t ? void 0 : t.addedNodes) || void 0 === n ? void 0 : n[0]) ||
                        void 0 === r
                          ? void 0
                          : r.className)
                        ? "oneForThreeChange"
                        : "challenge-answer" ===
                          (null === (a = null === (i = null === (o = null == p ? void 0 : p[g - 1]) || void 0 === o ? void 0 : o.removedNodes) || void 0 === i ? void 0 : i[0]) ||
                          void 0 === a
                            ? void 0
                            : a.className)
                        ? "oneForThreeClose"
                        : "task-grid" ===
                            (null === (u = null === (c = null === (s = null == h ? void 0 : h[0]) || void 0 === s ? void 0 : s.removedNodes) || void 0 === c ? void 0 : c[0]) ||
                            void 0 === u
                              ? void 0
                              : u.className) ||
                          "task-grid" ===
                            (null === (d = null === (f = null === (l = null == h ? void 0 : h[1]) || void 0 === l ? void 0 : l.removedNodes) || void 0 === f ? void 0 : f[0]) ||
                            void 0 === d
                              ? void 0
                              : d.className)
                        ? "sudokuClose"
                        : void 0;
                    })(r);
                  if (o) return o;
                  var i = e.filter(function (e) {
                    var t;
                    return "CANVAS" === (null === (t = e.target) || void 0 === t ? void 0 : t.tagName);
                  });
                  if (2 === i.length) {
                    var a = i[0],
                      s = i[1];
                    if (
                      "CANVAS" === (null === (t = a.target) || void 0 === t ? void 0 : t.tagName) &&
                      "width" === (null == a ? void 0 : a.attributeName) &&
                      "CANVAS" === (null === (n = s.target) || void 0 === n ? void 0 : n.tagName) &&
                      "height" === (null == s ? void 0 : s.attributeName)
                    )
                      return "canvasChange";
                  }
                  var c = r.filter(function (e) {
                    var t, n, r;
                    return (
                      "challenge-container" === (null === (t = null == e ? void 0 : e.target) || void 0 === t ? void 0 : t.className) &&
                      "challenge" === (null === (r = null === (n = e.removedNodes) || void 0 === n ? void 0 : n[0]) || void 0 === r ? void 0 : r.className)
                    );
                  });
                  return c.length ? "challengeClose" : "unknown";
                })(e);
                switch (("unknown" !== t && (v("节点变化", t), (i.isResolving = !1), (i.resolvingType = "")), t)) {
                  case "sudokuChange":
                    setTimeout(i.doChallenge, 20);
                    break;
                  case "oneForThreeChange":
                  case "canvasChange":
                    setTimeout(i.debounceDoChallenge, 20);
                    break;
                  case "oneForThreeClose":
                  case "sudokuClose":
                  case "challengeClose":
                    w({ type: "queryIsHcaptchaSuccess" });
                }
              });
            }),
            (this.stoppable = function (e, t) {
              return (
                void 0 === t && (t = !1),
                function (n) {
                  return new Promise(function (r) {
                    return xe(i, void 0, void 0, function () {
                      var o,
                        i,
                        a = this;
                      return Se(this, function (s) {
                        switch (s.label) {
                          case 0:
                            return (
                              (o = setInterval(function () {
                                a.isResolving ||
                                  (clearInterval(o),
                                  v("Abort!!!!!!", "", {
                                    titleColor: "black",
                                    contentColor: "black",
                                  }),
                                  r({
                                    isSuccess: !1,
                                    isNeedRefresh: t,
                                  }));
                              }, 10)),
                              [4, e(n)]
                            );
                          case 1:
                            return (i = s.sent()), clearInterval(o), r(i), [2];
                        }
                      });
                    });
                  });
                }
              );
            }),
            (this.doChallenge = function () {
              return xe(i, void 0, void 0, function () {
                var t,
                  n,
                  r,
                  o,
                  i,
                  a,
                  s,
                  c,
                  u,
                  l = this;
                return Se(this, function (f) {
                  switch (f.label) {
                    case 0:
                      return (
                        f.trys.push([0, 11, , 12]),
                        [
                          4,
                          ((d = new Promise(function (e) {
                            var t = function (r) {
                              "responseIsHcaptchaChallengeFrameInContent" === (null == r ? void 0 : r.type) &&
                                (e(r.result), clearTimeout(n), chrome.runtime.onMessage.removeListener(t));
                            };
                            chrome.runtime.onMessage.addListener(t);
                            var n = setTimeout(function () {
                              e(!0), clearTimeout(n), chrome.runtime.onMessage.removeListener(t);
                            }, 2e3);
                          })),
                          w({ type: "queryIsHcaptchaChallengeFrameInContent" }),
                          d),
                        ]
                      );
                    case 1:
                      return f.sent()
                        ? this.isResolving
                          ? [3, 9]
                          : (b(this.config, "working"),
                            (0, e.message)({
                              text: T("content_message_2"),
                              color: "green",
                            }),
                            (t = this.config.isOpenEndTimes),
                            (n = Number(null !== (a = null === (i = this.config) || void 0 === i ? void 0 : i.endTimes) && void 0 !== a ? a : 99)),
                            t && this.verifyTimes >= n
                              ? ((0, e.message)({
                                  text:
                                    null === (s = T("content_message_11")) || void 0 === s
                                      ? void 0
                                      : s.replace("xxx", null === (c = this.config) || void 0 === c ? void 0 : c.endTimes),
                                  color: "red",
                                }),
                                [2])
                              : ((r = setTimeout(function () {
                                  (l.isResolving = !1), l.refreshSudoku();
                                }, 3e4)),
                                (this.isResolving = !0),
                                (o = void 0),
                                this.isDragToChallenge()
                                  ? (null === (u = this.config.hcaptchaConfig) || void 0 === u ? void 0 : u.isPassDragChallenge)
                                    ? [4, (0, e.delay)(2e3)]
                                    : [3, 3]
                                  : [3, 6]))
                        : [2];
                    case 2:
                      return f.sent(), [2, this.refreshSudoku()];
                    case 3:
                      return (this.resolvingType = "dragTo"), [4, this.stoppable(this.resolveDragCanvas)({ isSuccess: !0 })];
                    case 4:
                      (o = f.sent()), (this.resolvingType = ""), (f.label = 5);
                    case 5:
                      return [3, 8];
                    case 6:
                      return [4, this.resolveSudoku_Canvas_OneForThree()];
                    case 7:
                      (o = f.sent()), (f.label = 8);
                    case 8:
                      return (
                        (this.isResolving = !1),
                        this.verifyTimes++,
                        console.log("processResult", o),
                        clearTimeout(r),
                        (null == o ? void 0 : o.isNeedRefresh) &&
                          (v("refresh", "refresh", {
                            titleColor: "black",
                            contentColor: "black",
                          }),
                          this.refreshSudoku()),
                        b(this.config, "done"),
                        [3, 10]
                      );
                    case 9:
                      v("存在重复操作", "存在重复操作", {
                        titleColor: "red",
                        contentColor: "red",
                      }),
                        (f.label = 10);
                    case 10:
                      return [3, 12];
                    case 11:
                      return f.sent(), (this.isResolving = !1), this.refreshSudoku(), [3, 12];
                    case 12:
                      return [2];
                  }
                  var d;
                });
              });
            }),
            (this.resolveSudoku_Canvas_OneForThree = function () {
              return xe(i, void 0, void 0, function () {
                var t,
                  n,
                  r,
                  o,
                  i = this;
                return Se(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        (t = function (t) {
                          var n = t.isSuccess,
                            r = t.isOneForThree,
                            o = t.isTouchNose,
                            a = t.isNeedRefresh;
                          return xe(i, void 0, void 0, function () {
                            var t, i, s, c, u, l, p, g, y, m, b;
                            return Se(this, function (w) {
                              switch (w.label) {
                                case 0:
                                  return (
                                    v("process", "getQueryData", {
                                      titleColor: "red",
                                      contentColor: "green",
                                    }),
                                    n
                                      ? [4, (0, e.delay)(20)]
                                      : [
                                          2,
                                          {
                                            isSuccess: !1,
                                            isNeedRefresh: a,
                                          },
                                        ]
                                  );
                                case 1:
                                  return (
                                    w.sent(),
                                    r
                                      ? ((t = Array.from(document.querySelectorAll(".answer-example .image-wrapper .image"))),
                                        (s = Array.from(document.querySelectorAll(".task-image .image-wrapper .image"))),
                                        (t = ke(ke([], s, !0), t, !0)),
                                        [3, 5])
                                      : [3, 2]
                                  );
                                case 2:
                                  return o ? [4, (0, e.delay)(1e3)] : [3, 4];
                                case 3:
                                  return (
                                    w.sent(),
                                    (t = [document.getElementsByTagName("canvas")[0]]),
                                    (i = Array.from(document.querySelectorAll(".bounding-box-example .example-wrapper .example-image .image"))),
                                    [3, 5]
                                  );
                                case 4:
                                  (t = Array.from(document.querySelectorAll(".task-image .wrapper .image"))),
                                    (i = Array.from(document.querySelectorAll("div.challenge-header > div.challenge-prompt div.examples div.image > div.image"))),
                                    (w.label = 5);
                                case 5:
                                  return (
                                    (c = t.map(function (e) {
                                      return "CANVAS" === e.tagName ? f(e, 5) : d(e, 3);
                                    })),
                                    [4, Promise.all(c)]
                                  );
                                case 6:
                                  return (u = w.sent()).length && (null == u ? void 0 : u[0])
                                    ? (o && console.log("touch canvas base64 length:".concat(null === (g = null == u ? void 0 : u[0]) || void 0 === g ? void 0 : g.length)),
                                      (l =
                                        null !==
                                          (y =
                                            null == i
                                              ? void 0
                                              : i.map(function (e) {
                                                  return h(e, 1);
                                                })) && void 0 !== y
                                          ? y
                                          : []),
                                      [4, Promise.all(l)])
                                    : ((0, e.message)({
                                        text: "get canvas image failed",
                                        color: "red",
                                      }),
                                      [
                                        2,
                                        {
                                          isSuccess: !1,
                                          isNeedRefresh: !0,
                                        },
                                      ]);
                                case 7:
                                  return (
                                    (p = w.sent().filter(function (e) {
                                      return !!e;
                                    })),
                                    (null !== (m = null == p ? void 0 : p.length) && void 0 !== m ? m : 0) !==
                                    (null !== (b = null == i ? void 0 : i.length) && void 0 !== b ? b : 0)
                                      ? [
                                          2,
                                          {
                                            isSuccess: !1,
                                            isNeedRefresh: !0,
                                          },
                                        ]
                                      : [
                                          2,
                                          {
                                            isSuccess: !0,
                                            base64List: u,
                                            imageList: t,
                                            isOneForThree: r,
                                            isTouchNose: o,
                                            anchors: p,
                                          },
                                        ]
                                  );
                              }
                            });
                          });
                        }),
                        (n = function (t) {
                          var n = t.isSuccess,
                            r = t.base64List,
                            o = t.imageList,
                            a = t.isOneForThree,
                            s = t.isTouchNose,
                            c = t.anchors,
                            u = t.isNeedRefresh;
                          return xe(i, void 0, void 0, function () {
                            var t, i, l, f, d, h, p, g, y, m, b, w, x, S, k, R, C;
                            return Se(this, function (_) {
                              switch (_.label) {
                                case 0:
                                  if (
                                    (v("process", "getResponse", {
                                      titleColor: "red",
                                      contentColor: "green",
                                    }),
                                    !n)
                                  )
                                    return [
                                      2,
                                      {
                                        isSuccess: !1,
                                        isNeedRefresh: u,
                                      },
                                    ];
                                  (0, e.message)({
                                    text: T("content_message_5"),
                                    color: "green",
                                  }),
                                    (t = document.querySelector(".prompt-text")
                                      ? null === (y = document.querySelector(".prompt-text")) || void 0 === y
                                        ? void 0
                                        : y.innerText
                                      : ""),
                                    (i = {
                                      clientKey: null === (m = this.config) || void 0 === m ? void 0 : m.clientKey,
                                      task: {
                                        type: "HCaptchaClassification",
                                        queries: r,
                                        question: t,
                                        anchors: c,
                                      },
                                      callurl: (0, e.getParentUrl)(),
                                    }),
                                    (_.label = 1);
                                case 1:
                                  return (
                                    _.trys.push([1, 3, , 4]),
                                    (l = null === (b = this.config) || void 0 === b ? void 0 : b.network),
                                    (f = l.hcaptchaVerifyFailDelay),
                                    (d = void 0 === f ? 1e3 : f),
                                    (h = l.hcaptchaVerifyTry),
                                    (p = void 0 === h ? 1 : h),
                                    s && (d = 1e4),
                                    [4, this.createTask(i, d, p)]
                                  );
                                case 2:
                                  return 0 === (g = _.sent()).errorId
                                    ? (a &&
                                        (g.solution.objects =
                                          null === (x = null === (w = null == g ? void 0 : g.solution) || void 0 === w ? void 0 : w.labels) || void 0 === x
                                            ? void 0
                                            : x.map(function (e, t, n) {
                                                var r;
                                                if (0 === t) return !1;
                                                n[0];
                                                return (null == e ? void 0 : e[0]) === (null === (r = null == n ? void 0 : n[0]) || void 0 === r ? void 0 : r[0]);
                                              })),
                                      [
                                        2,
                                        {
                                          isSuccess: !0,
                                          verifyResponse: g,
                                          imageList: o,
                                          isOneForThree: a,
                                          isTouchNose: s,
                                        },
                                      ])
                                    : ((0, e.message)({
                                        text: null == g ? void 0 : g.errorDescription,
                                        color: "green",
                                      }),
                                      (0, e.notneedcontinue)(g.errorCode)
                                        ? ((null == g ? void 0 : g.errorDescription) &&
                                            (0, e.message)({
                                              text: null == g ? void 0 : g.errorDescription,
                                              color: "red",
                                            }),
                                          [
                                            2,
                                            {
                                              isSuccess: !1,
                                              isNeedRefresh: !1,
                                            },
                                          ])
                                        : [
                                            2,
                                            {
                                              isSuccess: !1,
                                              isNeedRefresh:
                                                (null === (k = null === (S = this.config) || void 0 === S ? void 0 : S.hcaptchaConfig) || void 0 === k
                                                  ? void 0
                                                  : k.isAutoRefresh) && !0,
                                            },
                                          ]);
                                case 3:
                                  return (
                                    _.sent(),
                                    (0, e.message)({
                                      text: T("content_message_9"),
                                      color: "red",
                                    }),
                                    [
                                      2,
                                      {
                                        isSuccess: !1,
                                        isNeedRefresh:
                                          (null === (C = null === (R = this.config) || void 0 === R ? void 0 : R.hcaptchaConfig) || void 0 === C ? void 0 : C.isAutoRefresh) && !0,
                                      },
                                    ]
                                  );
                                case 4:
                                  return [2];
                              }
                            });
                          });
                        }),
                        (r = function (t) {
                          var n = t.isSuccess,
                            r = t.verifyResponse,
                            o = t.imageList,
                            a = t.isOneForThree,
                            s = t.isNeedRefresh,
                            c = t.isTouchNose;
                          return xe(i, void 0, void 0, function () {
                            var t,
                              i,
                              u,
                              l,
                              f,
                              d,
                              h,
                              p,
                              g,
                              y,
                              m,
                              b,
                              w,
                              x,
                              S,
                              k,
                              R,
                              C,
                              _,
                              E,
                              O,
                              I,
                              L,
                              N = this;
                            return Se(this, function (j) {
                              switch (j.label) {
                                case 0:
                                  if (
                                    (v("process", "selectImage", {
                                      titleColor: "red",
                                      contentColor: "green",
                                    }),
                                    !n)
                                  )
                                    return [
                                      2,
                                      {
                                        isSuccess: !1,
                                        isNeedRefresh: s,
                                      },
                                    ];
                                  if (!o)
                                    return [
                                      2,
                                      {
                                        isSuccess: !1,
                                        isNeedRefresh: s,
                                      },
                                    ];
                                  if (
                                    ((0, e.message)({
                                      text: T("content_message_6"),
                                      color: "green",
                                    }),
                                    !c)
                                  )
                                    return [3, 6];
                                  if (
                                    ((t = function (t, n, r) {
                                      return xe(N, void 0, void 0, function () {
                                        var o, i, a, s, c, u;
                                        return Se(this, function (l) {
                                          switch (l.label) {
                                            case 0:
                                              return (
                                                (o = Number(r.width)),
                                                (i = Number(r.height)),
                                                (a = Number(r.style.width.replace("px", ""))),
                                                (s = Number(r.style.height.replace("px", ""))),
                                                (c = Number(t) * (a / o) + 10),
                                                (u = Number(n) * (s / i) + 10),
                                                c &&
                                                  u &&
                                                  r.dispatchEvent(
                                                    new MouseEvent("mousedown", {
                                                      clientX: c,
                                                      clientY: u,
                                                    }),
                                                  ),
                                                r.dispatchEvent(
                                                  new TouchEvent("touchstart", {
                                                    bubbles: !0,
                                                    touches: [
                                                      new Touch({
                                                        target: r,
                                                        identifier: Date.now(),
                                                        pageX: c,
                                                        pageY: u,
                                                      }),
                                                    ],
                                                  }),
                                                ),
                                                [4, (0, e.delay)(100)]
                                              );
                                            case 1:
                                              return (
                                                l.sent(),
                                                c &&
                                                  u &&
                                                  r.dispatchEvent(
                                                    new MouseEvent("mouseup", {
                                                      clientX: c,
                                                      clientY: u,
                                                    }),
                                                  ),
                                                r.dispatchEvent(
                                                  new TouchEvent("touchend", {
                                                    bubbles: !0,
                                                    touches: [
                                                      new Touch({
                                                        target: r,
                                                        identifier: Date.now(),
                                                        pageX: c,
                                                        pageY: u,
                                                      }),
                                                    ],
                                                  }),
                                                ),
                                                [2]
                                              );
                                          }
                                        });
                                      });
                                    }),
                                    (i = null !== (y = null === (g = null == r ? void 0 : r.solution) || void 0 === g ? void 0 : g.box) && void 0 !== y ? y : []),
                                    (u = o[0]),
                                    !(null == i ? void 0 : i[0]) || !(null == i ? void 0 : i[1]))
                                  )
                                    return [
                                      2,
                                      {
                                        isSuccess: !1,
                                        isNeedRefresh:
                                          (null === (b = null === (m = this.config) || void 0 === m ? void 0 : m.hcaptchaConfig) || void 0 === b ? void 0 : b.isAutoRefresh) && !0,
                                      },
                                    ];
                                  (d = 0), (j.label = 1);
                                case 1:
                                  return d < i.length ? [4, t(i[d], i[d + 1], u)] : [3, 5];
                                case 2:
                                  return (
                                    j.sent(), [4, (0, e.delay)(Number(null !== (x = null === (w = this.config) || void 0 === w ? void 0 : w.times) && void 0 !== x ? x : 0) + 500)]
                                  );
                                case 3:
                                  j.sent(), (j.label = 4);
                                case 4:
                                  return (d += 2), [3, 1];
                                case 5:
                                  return [
                                    2,
                                    {
                                      isSuccess: !0,
                                      isOneForThree: a,
                                      isNeedRefresh: s,
                                    },
                                  ];
                                case 6:
                                  (l = null !== (k = null === (S = this.config) || void 0 === S ? void 0 : S.times) && void 0 !== k ? k : 100),
                                    (f = null !== (C = null === (R = null == r ? void 0 : r.solution) || void 0 === R ? void 0 : R.objects) && void 0 !== C ? C : []),
                                    console.log(f),
                                    null === (_ = document.querySelector(".display-error")) || void 0 === _ || _.dispatchEvent(new MouseEvent("mousedown", { bubbles: !0 })),
                                    (d = 0),
                                    (j.label = 7);
                                case 7:
                                  return d < f.length
                                    ? ((h = f[d]),
                                      this.isResolving
                                        ? !h || a
                                          ? [3, 9]
                                          : (null === (E = null == o ? void 0 : o[d]) || void 0 === E || E.click(), [4, (0, e.delay)((0, e.getClickTime)(Number(l)))])
                                        : [
                                            2,
                                            {
                                              isSuccess: !1,
                                              isNeedRefresh: s,
                                            },
                                          ])
                                    : [3, 11];
                                case 8:
                                  j.sent(), (j.label = 9);
                                case 9:
                                  a &&
                                    h &&
                                    (p =
                                      null ===
                                        (L =
                                          null === (I = null === (O = null == o ? void 0 : o[d]) || void 0 === O ? void 0 : O.parentElement) || void 0 === I
                                            ? void 0
                                            : I.parentElement) || void 0 === L
                                        ? void 0
                                        : L.parentElement) &&
                                    p.dispatchEvent(new MouseEvent("mouseup")),
                                    (j.label = 10);
                                case 10:
                                  return d++, [3, 7];
                                case 11:
                                  return [
                                    2,
                                    {
                                      isSuccess: !0,
                                      isOneForThree: a,
                                      isNeedRefresh: s,
                                    },
                                  ];
                              }
                            });
                          });
                        }),
                        (o = function (t) {
                          var n = t.isSuccess,
                            r = t.isOneForThree,
                            o = t.isNeedRefresh;
                          return xe(i, void 0, void 0, function () {
                            var t, i, a, s, c;
                            return Se(this, function (u) {
                              switch (u.label) {
                                case 0:
                                  return (
                                    v("process", "submit", {
                                      titleColor: "red",
                                      contentColor: "green",
                                    }),
                                    n
                                      ? this.config
                                        ? (null === (s = this.config) || void 0 === s ? void 0 : s.isAutoSubmit)
                                          ? ((t = Number((null === (c = this.config) || void 0 === c ? void 0 : c.times) || 100)),
                                            (i = 10 * t >= 500 ? 10 * t : 500),
                                            [4, (0, e.waitFor)(".button-submit")])
                                          : [
                                              2,
                                              {
                                                isSuccess: !0,
                                                isNeedRefresh: o,
                                              },
                                            ]
                                        : [
                                            2,
                                            {
                                              isSuccess: !1,
                                              isNeedRefresh: o,
                                            },
                                          ]
                                      : [
                                          2,
                                          {
                                            isSuccess: !1,
                                            isNeedRefresh: o,
                                          },
                                        ]
                                  );
                                case 1:
                                  return u.sent(), [4, (0, e.delay)(i)];
                                case 2:
                                  return (
                                    u.sent(),
                                    (0, e.message)({
                                      text: T("content_message_7"),
                                      color: "green",
                                    }),
                                    null == (a = document.querySelector(".button-submit")) || a.click(),
                                    [
                                      2,
                                      {
                                        isSuccess: !0,
                                        isOneForThree: r,
                                        isNeedRefresh: o,
                                      },
                                    ]
                                  );
                              }
                            });
                          });
                        }),
                        [
                          4,
                          ne(
                            function () {
                              if (
                                (v("process", "neededParamValidation", {
                                  titleColor: "red",
                                  contentColor: "green",
                                }),
                                !document.querySelector(".prompt-text"))
                              )
                                return { isSuccess: !1 };
                              if (!document.querySelector(".button-submit")) return { isSuccess: !1 };
                              var e = null === document || void 0 === document ? void 0 : document.querySelector(".display-error");
                              null == e || e.dispatchEvent(new MouseEvent("mousedown", { bubbles: !0 }));
                              var t = i.isOneForThreeChallenge(),
                                n = i.isTouchNoseChallenge();
                              return n && t
                                ? { isSuccess: !1 }
                                : {
                                    isSuccess: !0,
                                    isOneForThree: t,
                                    isTouchNose: n,
                                  };
                            },
                            this.stoppable(t),
                            be(this.stoppable(n)),
                            be(this.stoppable(r)),
                            be(this.stoppable(o)),
                          )(),
                        ]
                      );
                    case 1:
                      return [2, a.sent()];
                  }
                });
              });
            }),
            (this.resolveDragCanvas = function () {
              return xe(i, void 0, void 0, function () {
                var t, n, r, o, i, a, s, l, f, d, h, y, m, b, x, S, k, R, C, _, E, O, I, L, N, j, A, M, F, P, q, D, B;
                return Se(this, function (H) {
                  switch (H.label) {
                    case 0:
                      (t = 1e3), (H.label = 1);
                    case 1:
                      return (
                        H.trys.push([1, 16, , 17]),
                        (0, e.message)({
                          text: T("content_message_2"),
                          color: "green",
                        }),
                        null === (E = document.querySelector(".display-error")) || void 0 === E || E.dispatchEvent(new MouseEvent("mousedown", { bubbles: !0 })),
                        [4, (0, e.delay)(Number(null !== (I = null === (O = this.config) || void 0 === O ? void 0 : O.times) && void 0 !== I ? I : 0) + 2e3)]
                      );
                    case 2:
                      return (
                        H.sent(),
                        (n = document.getElementsByTagName("canvas")[0]),
                        (
                          null == (r = document.querySelector(".prompt-text") ? (null === (L = document.querySelector(".prompt-text")) || void 0 === L ? void 0 : L.innerText) : "")
                            ? void 0
                            : r.length
                        )
                          ? [
                              4,
                              c(void 0, void 0, void 0, function () {
                                var e;
                                return u(this, function (t) {
                                  return (
                                    (e = new Promise(function (e) {
                                      var t = function (r) {
                                        if ("responseHcaptchaChallengeIframeRect" === (null == r ? void 0 : r.type)) {
                                          var o = r.resultList.find(function (e) {
                                            return (null == e ? void 0 : e.src) === location.href;
                                          });
                                          o && e(o.result), clearTimeout(n), chrome.runtime.onMessage.removeListener(t);
                                        }
                                      };
                                      chrome.runtime.onMessage.addListener(t);
                                      var n = setTimeout(function () {
                                        e(!1), clearTimeout(n), chrome.runtime.onMessage.removeListener(t);
                                      }, 1e3);
                                    })),
                                    w({ type: "queryHcaptchaChallengeIframeRect" }),
                                    [2, e]
                                  );
                                });
                              }),
                            ]
                          : (console.log("no title"),
                            [
                              2,
                              {
                                isSuccess: !1,
                                isNeedRefresh: !1,
                              },
                            ])
                      );
                    case 3:
                      return (o = H.sent())
                        ? [3, 5]
                        : [
                            4,
                            c(void 0, void 0, void 0, function () {
                              var e;
                              return u(this, function (t) {
                                return (
                                  (e = new Promise(function (e) {
                                    var t = function (n) {
                                      "responseHcaptchaChallengeIframeRect2" === (null == n ? void 0 : n.type) &&
                                        (null == n ? void 0 : n.receiverHref) === location.href &&
                                        (e(n.result), window.removeEventListener("message", t));
                                    };
                                    chrome.runtime.onMessage.addListener(t);
                                    var n = setTimeout(function () {
                                      e(!1), clearTimeout(n);
                                    }, 1e3);
                                  })),
                                  w({
                                    type: "queryHcaptchaChallengeIframeRect2",
                                    data: { href: location.href },
                                  }),
                                  [2, e]
                                );
                              });
                            }),
                          ];
                    case 4:
                      (o = H.sent()), (H.label = 5);
                    case 5:
                      return o
                        ? [
                            4,
                            g(n, o, {
                              type: "image/jpeg",
                              rate: 0.3,
                            }),
                          ]
                        : ((0, e.message)({
                            text: "get image failed please check your browser",
                            color: "red",
                          }),
                          [
                            2,
                            {
                              isSuccess: !1,
                              isNeedRefresh: !1,
                            },
                          ]);
                    case 6:
                      return (
                        (i = H.sent()),
                        v("get imageBase64", "length: ".concat(null == i ? void 0 : i.length), {
                          titleColor: "red",
                          contentColor: "green",
                        }),
                        (null == i ? void 0 : i.length) && "timeout" !== i
                          ? (null == i ? void 0 : i.length) < t
                            ? (console.log("imageBase64", i),
                              (0, e.message)({
                                text: "get image failed please check your browser",
                                color: "red",
                              }),
                              [
                                2,
                                {
                                  isSuccess: !1,
                                  isNeedRefresh: !1,
                                },
                              ])
                            : ((a = {
                                clientKey: null === (N = this.config) || void 0 === N ? void 0 : N.clientKey,
                                task: {
                                  type: "HCaptchaClassification",
                                  queries: i,
                                  question: r,
                                },
                                callurl: (0, e.getParentUrl)(),
                              }),
                              (s = null === (j = this.config) || void 0 === j ? void 0 : j.network),
                              (l = s.hcaptchaVerifyFailDelay),
                              void 0 === l ? 1e3 : l,
                              (f = s.hcaptchaVerifyTry),
                              (d = void 0 === f ? 1 : f),
                              this.isResolving && "dragTo" === this.resolvingType
                                ? ((0, e.message)({
                                    text: T("content_message_5"),
                                    color: "green",
                                  }),
                                  [4, this.createTask(a, 1e4, d)])
                                : (v("Abort!!!!!!", "", {
                                    titleColor: "black",
                                    contentColor: "black",
                                  }),
                                  [
                                    2,
                                    {
                                      isSuccess: !1,
                                      isNeedRefresh: !1,
                                    },
                                  ]))
                          : [
                              2,
                              {
                                isSuccess: !1,
                                isNeedRefresh: !0,
                              },
                            ]
                      );
                    case 7:
                      return (
                        (h = H.sent()),
                        v("get response", "errorCode: ".concat(null == h ? void 0 : h.errorCode), {
                          titleColor: "red",
                          contentColor: "green",
                        }),
                        h.errorCode
                          ? (0, e.notneedcontinue)(h.errorCode)
                            ? ((null == h ? void 0 : h.errorDescription) &&
                                (0, e.message)({
                                  text: null == h ? void 0 : h.errorDescription,
                                  color: "red",
                                }),
                              [
                                2,
                                {
                                  isSuccess: !1,
                                  isNeedRefresh: !1,
                                },
                              ])
                            : [
                                2,
                                {
                                  isSuccess: !1,
                                  isNeedRefresh: !0,
                                },
                              ]
                          : ((y = Number(n.style.width.replace("px", ""))),
                            (m = null !== (M = null === (A = null == h ? void 0 : h.solution) || void 0 === A ? void 0 : A.box) && void 0 !== M ? M : []),
                            [
                              4,
                              ((U = i),
                              new Promise(function (e, t) {
                                var n = new Image();
                                (n.onload = function () {
                                  e({
                                    width: n.naturalWidth,
                                    height: n.naturalHeight,
                                  });
                                }),
                                  (n.onerror = t),
                                  (n.src = U);
                              })),
                            ])
                      );
                    case 8:
                      (b = H.sent()),
                        console.log(m, b),
                        (x = y / (null == b ? void 0 : b.width)),
                        (0, e.message)({
                          text: T("content_message_6"),
                          color: "green",
                        }),
                        (S = 0),
                        (H.label = 9);
                    case 9:
                      return S < m.length
                        ? ((k = m[S]),
                          (R = {
                            x: k.start[0] * x,
                            y: k.start[1] * x,
                          }),
                          (C = {
                            x: k.end[0] * x,
                            y: k.end[1] * x,
                          }),
                          [4, (0, e.delay)(600)])
                        : [3, 14];
                    case 10:
                      return H.sent(), [4, p(n, R, C)];
                    case 11:
                      return H.sent(), [4, (0, e.delay)(Number(null !== (P = null === (F = this.config) || void 0 === F ? void 0 : F.times) && void 0 !== P ? P : 0) + 500)];
                    case 12:
                      H.sent(), (H.label = 13);
                    case 13:
                      return S++, [3, 9];
                    case 14:
                      return [4, (0, e.delay)(1e3)];
                    case 15:
                      return (
                        H.sent(),
                        (_ = document.querySelector(".button-submit")),
                        "rgb(85, 85, 85)" === (null === (q = null == _ ? void 0 : _.style) || void 0 === q ? void 0 : q.backgroundColor) &&
                          w({
                            type: "queryIsHcaptchaSuccessForReport",
                            data: { result: !1 },
                          }),
                        null === (D = document.querySelector(".display-error")) || void 0 === D || D.dispatchEvent(new MouseEvent("mousedown", { bubbles: !0 })),
                        (null === (B = this.config) || void 0 === B ? void 0 : B.isAutoSubmit) && (null == _ || _.click()),
                        [2, { isSuccess: !0 }]
                      );
                    case 16:
                      return (
                        H.sent(),
                        [
                          2,
                          {
                            isSuccess: !1,
                            isNeedRefresh: !0,
                          },
                        ]
                      );
                    case 17:
                      return [2];
                  }
                  var U;
                });
              });
            }),
            (this.debounceDoChallenge =
              ((n = this.doChallenge),
              void 0 === (r = 200) && (r = 300),
              function () {
                for (var e = this, t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
                clearTimeout(o),
                  (o = setTimeout(function () {
                    return n.apply(e, t);
                  }, r));
              })),
            (this.refreshSudoku = function () {
              var e,
                t = document.querySelector(".button-submit");
              if (t) null == t || t.click();
              else {
                var n = null === (e = document.getElementsByClassName("refresh button")) || void 0 === e ? void 0 : e[0];
                n && (null == n || n.click());
              }
            }),
            (this.config = t),
            Te(location.href)) &&
              (t.hcaptcha && this.startSudokuObserver(),
              setInterval(function () {
                var e,
                  t,
                  n = null === document || void 0 === document ? void 0 : document.querySelector(".display-error");
                "1" !== (null === (e = null == n ? void 0 : n.style) || void 0 === e ? void 0 : e.opacity) || i.isSendFailedRecResult
                  ? "0" === (null === (t = null == n ? void 0 : n.style) || void 0 === t ? void 0 : t.opacity) && (i.isSendFailedRecResult = !1)
                  : (w({
                      type: "queryIsHcaptchaSuccessForReport",
                      data: { result: !1 },
                    }),
                    (i.isSendFailedRecResult = !0));
              }, 200));
          }
          (t.prototype.isOneForThreeChallenge = function () {
            var e = document.querySelector(".challenge-view .challenge-prompt .prompt-text"),
              t = document.querySelector(".challenge-view .task-wrapper .task-image"),
              n = document.querySelector(".challenge-view .task-wrapper .task-answers");
            return !!(e && n && t);
          }),
            (t.prototype.isTouchNoseChallenge = function () {
              var e,
                t = document.querySelector(".challenge-view .challenge-prompt .prompt-text"),
                n = document.querySelector(".bounding-box-example .example-wrapper"),
                r = null === (e = document.getElementsByTagName("canvas")) || void 0 === e ? void 0 : e[0];
              return !!(t && n && r);
            }),
            (t.prototype.isDragToChallenge = function () {
              var e,
                t = document.querySelector(".challenge-view .challenge-prompt .prompt-text"),
                n = document.querySelector(".bounding-box-example .example-wrapper"),
                r = null === (e = document.getElementsByTagName("canvas")) || void 0 === e ? void 0 : e[0];
              return !(!t || n || !r);
            }),
            (t.prototype.createTask = function (t, n, r) {
              return xe(this, void 0, void 0, function () {
                var o, i, a;
                return Se(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (!this.config) return [2];
                      (i = 0), (s.label = 1);
                    case 1:
                      return i < 3 ? [4, (0, e.post)(new URL("createTask", this.config.host).href, t, n, r)] : [3, 5];
                    case 2:
                      return (
                        (o = s.sent()),
                        (a = null == o ? void 0 : o.taskId) &&
                          w({
                            type: "queryInsertHcaptchaResolvedTaskId",
                            data: { taskId: a },
                          }),
                        ["ERROR_SERVICE_UNAVALIABLE"].includes(null == o ? void 0 : o.errorCode) ? [4, (0, e.delay)(n)] : [2, o]
                      );
                    case 3:
                      s.sent(), (s.label = 4);
                    case 4:
                      return i++, [3, 1];
                    case 5:
                      return [2, o];
                  }
                });
              });
            });
        })(),
        function (e) {
          return /hcaptcha\S*\.com(.*?)frame=challenge/.test(e) || /paycomonline\.net(.*?)hcaptcha(.*?)frame=challenge/.test(e) || /hcaptcha\S*frame=challenge/.test(e);
        }),
      Re =
        (/hcaptcha\S*\.com(.*?)frame=checkbox/.test(location.href),
        function (e, t) {
          var n,
            r,
            o,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = {
              next: s(0),
              throw: s(1),
              return: s(2),
            }),
            "function" == typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function s(i) {
            return function (s) {
              return (function (i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (((n = 1), r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done)) return o;
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return (
                          a.label++,
                          {
                            value: i[1],
                            done: !1,
                          }
                        );
                      case 5:
                        a.label++, (r = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (!((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                          a = 0;
                          continue;
                        }
                        if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                          a.label = i[1];
                          break;
                        }
                        if (6 === i[0] && a.label < o[1]) {
                          (a.label = o[1]), (o = i);
                          break;
                        }
                        if (o && a.label < o[2]) {
                          (a.label = o[2]), a.ops.push(i);
                          break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = t.call(e, a);
                  } catch (e) {
                    (i = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return {
                  value: i[0] ? i[1] : void 0,
                  done: !0,
                };
              })([i, s]);
            };
          }
        }),
      Ce = function () {
        var e = document.getElementsByTagName("iframe");
        return !!Array.from(e)
          .filter(function (e) {
            return Te(e.src);
          })
          .filter(function (e) {
            var t,
              n = null === (t = null == e ? void 0 : e.parentElement) || void 0 === t ? void 0 : t.parentElement;
            return "0" !== (null == n ? void 0 : n.style.opacity) || "hidden" !== (null == n ? void 0 : n.style.visibility);
          }).length;
      };
    (function (e, t, n, r) {
      new (n || (n = Promise))(function (o, i) {
        function a(e) {
          try {
            c(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function s(e) {
          try {
            c(r.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function c(e) {
          var t;
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(a, s);
        }
        c((r = r.apply(e, t || [])).next());
      });
    })(void 0, void 0, void 0, function () {
      var t, n;
      return Re(this, function (r) {
        switch (r.label) {
          case 0:
            return [4, (0, e.getconfig)()];
          case 1:
            return (
              (t = r.sent()),
              (null === (n = t.recaptchaConfig) || void 0 === n ? void 0 : n.isOpen) && new o(t),
              t.hcaptcha && new s(t),
              window.addEventListener("message", function (e) {
                var n,
                  r,
                  o = e.data,
                  i = null !== (r = null === (n = null == o ? void 0 : o.data) || void 0 === n ? void 0 : n.captchaType) && void 0 !== r ? r : "";
                ["hcaptcha", "recaptcha", "funcaptcha"].includes(i) &&
                  "jsControl" === o.type &&
                  x({
                    config: t,
                    target: "child",
                    type: o.type,
                    data: o,
                  }),
                  "queryJsControlFlag" === o.type &&
                    "yesCaptcha" === o.crx &&
                    chrome.storage.local.get(["config"], function (e) {
                      var n,
                        r,
                        o = null !== (r = null === (n = null == e ? void 0 : e.config) || void 0 === n ? void 0 : n.jsControlObjectName) && void 0 !== r ? r : "yesCaptcha";
                      x({
                        config: t,
                        target: "self",
                        data: { result: o },
                        type: "queryJsControlFlagAnswer",
                      });
                    });
              }),
              chrome.runtime.onMessage.addListener(function (e) {
                var n,
                  r,
                  o = null == e ? void 0 : e.type,
                  i = 0;
                if ("queryHcaptchaChallengeIframeRect" === o) {
                  var a = Array.from(document.getElementsByTagName("Iframe"))
                    .filter(function (e) {
                      return Te(e.src);
                    })
                    .map(function (e) {
                      return {
                        src: e.src,
                        result: {
                          DOMRect: null == e ? void 0 : e.getBoundingClientRect(),
                          topClientWidth: window.document.documentElement.clientWidth,
                        },
                      };
                    });
                  a.length &&
                    Ce() &&
                    w({
                      type: "responseHcaptchaChallengeIframeRect",
                      data: { resultList: a },
                    });
                }
                if (
                  ("queryIsHcaptchaChallengeFrameInContent" === o &&
                    (r = Ce()) &&
                    w({
                      type: "responseIsHcaptchaChallengeFrameInContent",
                      data: { result: r },
                    }),
                  "queryIsMoreThenEndTime" === o &&
                    (r = t.isOpenEndTimes && i >= Number(t.endTimes)) &&
                    w({
                      type: "responseIsMoreThenEndTime",
                      data: { result: r },
                    }),
                  "queryEndTimePlus" === o && i++,
                  "queryIsHcaptchaInvisibleSuccess" === o)
                ) {
                  var s = Array.from(document.getElementsByTagName("Iframe")).find(function (e) {
                    return /hcaptcha\S*\.com(.*?)frame=checkbox-invisible/.test(e.src);
                  });
                  if (s) {
                    var c = !!s.getAttribute("data-hcaptcha-response");
                    c &&
                      w({
                        type: "responseIsHcaptchaInvisibleSuccess",
                        data: { result: c },
                      });
                  }
                }
                if ("queryIsRecaptchaGameFrameVisible" === o) {
                  var u = document.getElementsByTagName("IFRAME"),
                    l = Array.from(u)
                      .filter(function (e) {
                        return /\/recaptcha\/(.*?)\/bframe\?/.test(null == e ? void 0 : e.src);
                      })
                      .map(function (e) {
                        return {
                          src: e.src,
                          result: !S(e),
                        };
                      });
                  l.length &&
                    w({
                      type: "responseIsRecaptchaGameFrameVisible",
                      data: { result: l },
                    });
                }
                if ("queryIsRecaptchaInNexonPage" === o) {
                  var f = /nexon\.com/.test(location.href) || /nintendo\.com/.test(location.href) || /www\.carousell\.com/.test(location.href);
                  w({
                    data: { result: f },
                    type: "responseIsRecaptchaInNexonPage",
                  });
                }
                if ("queryIsRecaptchaCheckboxVisible" === o) {
                  var d = null === (n = null == t ? void 0 : t.recaptchaConfig) || void 0 === n ? void 0 : n.isAdaptInvisible;
                  if (
                    -1 ===
                      [/virginmedia\.ie/, /myextranet\.bwg\.ie/, /vodafone\.ie/].findIndex(function (e) {
                        return e.test(location.href);
                      }) &&
                    !d
                  )
                    return w({
                      type: "responseIsRecaptchaCheckboxVisible",
                      data: { result: !0 },
                    });
                  (u = document.getElementsByTagName("IFRAME")),
                    (null ==
                    (a = Array.from(u)
                      .filter(function (e) {
                        return /\/recaptcha\/(.*?)\/anchor\?/.test(null == e ? void 0 : e.src);
                      })
                      .map(function (e) {
                        var t = k(e);
                        return {
                          src: e.src,
                          result: t,
                        };
                      }))
                      ? void 0
                      : a.length) &&
                      w({
                        type: "responseIsRecaptchaCheckboxVisible",
                        data: { result: a },
                      });
                }
                "queryTextCaptchaChallengeIframeRect" === o &&
                  (a = Array.from(document.getElementsByTagName("Iframe")).map(function (e) {
                    return {
                      src: e.src,
                      result: {
                        DOMRect: null == e ? void 0 : e.getBoundingClientRect(),
                        topClientWidth: window.document.documentElement.clientWidth,
                      },
                    };
                  })).length &&
                  w({
                    type: "responseTextCaptchaChallengeIframeRect",
                    data: { result: a },
                  });
              }),
              [2]
            );
        }
      });
    });
  })();
})();
