(function (or) {
  "use strict";
  function Nr(r, e, t) {
    return (t.a = r), (t.f = e), t;
  }
  function s(r) {
    return Nr(2, r, function (e) {
      return function (t) {
        return r(e, t);
      };
    });
  }
  function I(r) {
    return Nr(3, r, function (e) {
      return function (t) {
        return function (a) {
          return r(e, t, a);
        };
      };
    });
  }
  function ar(r) {
    return Nr(4, r, function (e) {
      return function (t) {
        return function (a) {
          return function (i) {
            return r(e, t, a, i);
          };
        };
      };
    });
  }
  function mr(r) {
    return Nr(5, r, function (e) {
      return function (t) {
        return function (a) {
          return function (i) {
            return function ($) {
              return r(e, t, a, i, $);
            };
          };
        };
      };
    });
  }
  function Wr(r) {
    return Nr(6, r, function (e) {
      return function (t) {
        return function (a) {
          return function (i) {
            return function ($) {
              return function (o) {
                return r(e, t, a, i, $, o);
              };
            };
          };
        };
      };
    });
  }
  function ti(r) {
    return Nr(7, r, function (e) {
      return function (t) {
        return function (a) {
          return function (i) {
            return function ($) {
              return function (o) {
                return function (l) {
                  return r(e, t, a, i, $, o, l);
                };
              };
            };
          };
        };
      };
    });
  }
  function ia(r) {
    return Nr(8, r, function (e) {
      return function (t) {
        return function (a) {
          return function (i) {
            return function ($) {
              return function (o) {
                return function (l) {
                  return function (f) {
                    return r(e, t, a, i, $, o, l, f);
                  };
                };
              };
            };
          };
        };
      };
    });
  }
  function Z$(r) {
    return Nr(9, r, function (e) {
      return function (t) {
        return function (a) {
          return function (i) {
            return function ($) {
              return function (o) {
                return function (l) {
                  return function (f) {
                    return function (m) {
                      return r(e, t, a, i, $, o, l, f, m);
                    };
                  };
                };
              };
            };
          };
        };
      };
    });
  }
  function n(r, e, t) {
    return r.a === 2 ? r.f(e, t) : r(e)(t);
  }
  function g(r, e, t, a) {
    return r.a === 3 ? r.f(e, t, a) : r(e)(t)(a);
  }
  function M(r, e, t, a, i) {
    return r.a === 4 ? r.f(e, t, a, i) : r(e)(t)(a)(i);
  }
  function N(r, e, t, a, i, $) {
    return r.a === 5 ? r.f(e, t, a, i, $) : r(e)(t)(a)(i)($);
  }
  function dn(r, e, t, a, i, $, o) {
    return r.a === 6 ? r.f(e, t, a, i, $, o) : r(e)(t)(a)(i)($)(o);
  }
  function Q$(r, e, t, a, i, $, o, l) {
    return r.a === 7 ? r.f(e, t, a, i, $, o, l) : r(e)(t)(a)(i)($)(o)(l);
  }
  function K$(r, e, t, a, i, $, o, l, f) {
    return r.a === 8 ? r.f(e, t, a, i, $, o, l, f) : r(e)(t)(a)(i)($)(o)(l)(f);
  }
  function Jw(r, e, t, a, i, $, o, l, f, m) {
    return r.a === 9
      ? r.f(e, t, a, i, $, o, l, f, m)
      : r(e)(t)(a)(i)($)(o)(l)(f)(m);
  }
  console.warn(
    "Compiled in DEBUG mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets."
  );
  var sv = [];
  function mv(r) {
    return [r];
  }
  function gv(r) {
    return r.length;
  }
  var dv = I(function (r, e, t) {
      for (var a = new Array(r), i = 0; i < r; i++) a[i] = t(e + i);
      return a;
    }),
    pv = s(function (r, e) {
      for (var t = new Array(r), a = 0; a < r && e.b; a++)
        (t[a] = e.a), (e = e.b);
      return (t.length = a), p(t, e);
    }),
    bv = s(function (r, e) {
      return e[r];
    }),
    hv = I(function (r, e, t) {
      for (var a = t.length, i = new Array(a), $ = 0; $ < a; $++) i[$] = t[$];
      return (i[r] = e), i;
    }),
    _v = s(function (r, e) {
      for (var t = e.length, a = new Array(t + 1), i = 0; i < t; i++)
        a[i] = e[i];
      return (a[t] = r), a;
    }),
    wv = I(function (r, e, t) {
      for (var a = t.length, i = 0; i < a; i++) e = n(r, t[i], e);
      return e;
    }),
    Dv = I(function (r, e, t) {
      for (var a = t.length - 1; a >= 0; a--) e = n(r, t[a], e);
      return e;
    }),
    zw = s(function (r, e) {
      for (var t = e.length, a = new Array(t), i = 0; i < t; i++)
        a[i] = r(e[i]);
      return a;
    }),
    Ow = I(function (r, e, t) {
      for (var a = t.length, i = new Array(a), $ = 0; $ < a; $++)
        i[$] = n(r, e + $, t[$]);
      return i;
    }),
    yv = I(function (r, e, t) {
      return t.slice(r, e);
    }),
    Sv = I(function (r, e, t) {
      var a = e.length,
        i = r - a;
      i > t.length && (i = t.length);
      for (var $ = a + i, o = new Array($), l = 0; l < a; l++) o[l] = e[l];
      for (var l = 0; l < i; l++) o[l + a] = t[l];
      return o;
    }),
    Uw = s(function (r, e) {
      return e;
    }),
    Vw = s(function (r, e) {
      return console.log(r + ": " + ro(e)), e;
    });
  function jw(r, e) {
    return function (t) {
      re(8, r, e, t);
    };
  }
  function Nw(r, e, t) {
    return function (a) {
      re(9, r, e, t, a);
    };
  }
  function Ww(r) {
    return "<internals>";
  }
  function ro(r) {
    return Je(!1, r);
  }
  function Je(r, e) {
    if (typeof e == "function") return oa(r, "<function>");
    if (typeof e == "boolean") return vt(r, e ? "True" : "False");
    if (typeof e == "number") return Mv(r, e + "");
    if (e instanceof String) return Ev(r, "'" + eo(e, !0) + "'");
    if (typeof e == "string") return no(r, '"' + eo(e, !1) + '"');
    if (typeof e == "object" && "$" in e) {
      var t = e.$;
      if (typeof t == "number") return oa(r, "<internals>");
      if (t[0] === "#") {
        var i = [];
        for (var a in e) a !== "$" && i.push(Je(r, e[a]));
        return "(" + i.join(",") + ")";
      }
      if (t === "Set_elm_builtin")
        return vt(r, "Set") + $a(r, ".fromList") + " " + Je(r, Si(e));
      if (t === "RBNode_elm_builtin" || t === "RBEmpty_elm_builtin")
        return vt(r, "Dict") + $a(r, ".fromList") + " " + Je(r, hn(e));
      if (t === "Array_elm_builtin")
        return vt(r, "Array") + $a(r, ".fromList") + " " + Je(r, Gs(e));
      if (t === "::" || t === "[]") {
        var i = "[";
        for (e.b && ((i += Je(r, e.a)), (e = e.b)); e.b; e = e.b)
          i += "," + Je(r, e.a);
        return i + "]";
      }
      var i = "";
      for (var $ in e)
        if ($ !== "$") {
          var o = Je(r, e[$]),
            l = o[0],
            f =
              l === "{" ||
              l === "(" ||
              l === "[" ||
              l === "<" ||
              l === '"' ||
              o.indexOf(" ") < 0;
          i += " " + (f ? o : "(" + o + ")");
        }
      return vt(r, t) + i;
    }
    if (typeof DataView == "function" && e instanceof DataView)
      return no(r, "<" + e.byteLength + " bytes>");
    if (typeof File != "undefined" && e instanceof File)
      return oa(r, "<" + e.name + ">");
    if (typeof e == "object") {
      var i = [];
      for (var m in e) {
        var h = m[0] === "_" ? m.slice(1) : m;
        i.push($a(r, h) + " = " + Je(r, e[m]));
      }
      return i.length === 0 ? "{}" : "{ " + i.join(", ") + " }";
    }
    return oa(r, "<internals>");
  }
  function eo(r, e) {
    var t = r
      .replace(/\\/g, "\\\\")
      .replace(/\n/g, "\\n")
      .replace(/\t/g, "\\t")
      .replace(/\r/g, "\\r")
      .replace(/\v/g, "\\v")
      .replace(/\0/g, "\\0");
    return e ? t.replace(/\'/g, "\\'") : t.replace(/\"/g, '\\"');
  }
  function vt(r, e) {
    return r ? "\x1B[96m" + e + "\x1B[0m" : e;
  }
  function Mv(r, e) {
    return r ? "\x1B[95m" + e + "\x1B[0m" : e;
  }
  function no(r, e) {
    return r ? "\x1B[93m" + e + "\x1B[0m" : e;
  }
  function Ev(r, e) {
    return r ? "\x1B[92m" + e + "\x1B[0m" : e;
  }
  function $a(r, e) {
    return r ? "\x1B[37m" + e + "\x1B[0m" : e;
  }
  function oa(r, e) {
    return r ? "\x1B[36m" + e + "\x1B[0m" : e;
  }
  function Yw(r) {
    return String.fromCharCode(r < 10 ? 48 + r : 55 + r);
  }
  function qw(r) {
    throw new Error(
      "https://github.com/elm/core/blob/1.0.0/hints/" + r + ".md"
    );
  }
  function re(r, e, t, a, i) {
    switch (r) {
      case 0:
        throw new Error(`What node should I take over? In JavaScript I need something like:

    Elm.Main.init({
        node: document.getElementById("elm-node")
    })

You need to do this with any Browser.sandbox or Browser.element program.`);
      case 1:
        throw new Error(
          `Browser.application programs cannot handle URLs like this:

    ` +
            document.location.href +
            "\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server."
        );
      case 2:
        var $ = e;
        throw new Error(
          `Problem with the flags given to your Elm program on initialization.

` + $
        );
      case 3:
        var o = e;
        throw new Error(
          "There can only be one port named `" +
            o +
            "`, but your program has multiple."
        );
      case 4:
        var o = e,
          l = t;
        throw new Error(
          "Trying to send an unexpected type of value through port `" +
            o +
            "`:\n" +
            l
        );
      case 5:
        throw new Error(
          'Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.'
        );
      case 6:
        var f = e;
        throw new Error(
          "Your page is loading multiple Elm scripts with a module named " +
            f +
            ". Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!"
        );
      case 8:
        var f = e,
          m = t,
          d = a;
        throw new Error(
          "TODO in module `" +
            f +
            "` " +
            to(m) +
            `

` +
            d
        );
      case 9:
        var f = e,
          m = t,
          h = a,
          d = i;
        throw new Error(
          "TODO in module `" +
            f +
            "` from the `case` expression " +
            to(m) +
            `

It received the following value:

    ` +
            ro(h).replace(
              `
`,
              `
    `
            ) +
            `

But the branch that handles it says:

    ` +
            d.replace(
              `
`,
              `
    `
            )
        );
      case 10:
        throw new Error("Bug in https://github.com/elm/virtual-dom/issues");
      case 11:
        throw new Error("Cannot perform mod 0. Division by zero error.");
    }
  }
  function to(r) {
    return r.start.line === r.end.line
      ? "on line " + r.start.line
      : "on lines " + r.start.line + " through " + r.end.line;
  }
  function tr(r, e) {
    for (
      var t, a = [], i = ai(r, e, 0, a);
      i && (t = a.pop());
      i = ai(t.a, t.b, 0, a)
    );
    return i;
  }
  function ai(r, e, t, a) {
    if (r === e) return !0;
    if (typeof r != "object" || r === null || e === null)
      return typeof r == "function" && re(5), !1;
    if (t > 100) return a.push(p(r, e)), !0;
    r.$ === "Set_elm_builtin" && ((r = Si(r)), (e = Si(e))),
      (r.$ === "RBNode_elm_builtin" || r.$ === "RBEmpty_elm_builtin") &&
        ((r = hn(r)), (e = hn(e)));
    for (var i in r) if (!ai(r[i], e[i], t + 1, a)) return !1;
    return !0;
  }
  var Cv = s(tr),
    Iv = s(function (r, e) {
      return !tr(r, e);
    });
  function ur(r, e, t) {
    if (typeof r != "object") return r === e ? 0 : r < e ? -1 : 1;
    if (r instanceof String) {
      var a = r.valueOf(),
        i = e.valueOf();
      return a === i ? 0 : a < i ? -1 : 1;
    }
    if (r.$[0] === "#")
      return (t = ur(r.a, e.a)) || (t = ur(r.b, e.b)) ? t : ur(r.c, e.c);
    for (; r.b && e.b && !(t = ur(r.a, e.a)); r = r.b, e = e.b);
    return t || (r.b ? 1 : e.b ? -1 : 0);
  }
  var Bv = s(function (r, e) {
      return ur(r, e) < 0;
    }),
    xv = s(function (r, e) {
      return ur(r, e) < 1;
    }),
    Fv = s(function (r, e) {
      return ur(r, e) > 0;
    }),
    Av = s(function (r, e) {
      return ur(r, e) >= 0;
    }),
    Tv = s(function (r, e) {
      var t = ur(r, e);
      return t < 0 ? zo : t ? Zs : Jo;
    }),
    Xw = 0,
    sr = { $: "#0" };
  function Gw(r, e) {
    return { a: r, b: e };
  }
  function p(r, e) {
    return { $: "#2", a: r, b: e };
  }
  function Zw(r, e, t) {
    return { a: r, b: e, c: t };
  }
  function vr(r, e, t) {
    return { $: "#3", a: r, b: e, c: t };
  }
  function Qw(r) {
    return r;
  }
  function ee(r) {
    return new String(r);
  }
  function q(r, e) {
    var t = {};
    for (var a in r) t[a] = r[a];
    for (var a in e) t[a] = e[a];
    return t;
  }
  var Rv = s(G);
  function G(r, e) {
    if (typeof r == "string") return r + e;
    if (!r.b) return e;
    var t = ne(r.a, e);
    r = r.b;
    for (var a = t; r.b; r = r.b) a = a.b = ne(r.a, e);
    return t;
  }
  var Kw = { $: 0 },
    w = { $: "[]" };
  function r0(r, e) {
    return { $: 1, a: r, b: e };
  }
  function ne(r, e) {
    return { $: "::", a: r, b: e };
  }
  var Hv = s(ne);
  function u(r) {
    for (var e = w, t = r.length; t--; ) e = ne(r[t], e);
    return e;
  }
  function ua(r) {
    for (var e = []; r.b; r = r.b) e.push(r.a);
    return e;
  }
  var kv = I(function (r, e, t) {
      for (var a = []; e.b && t.b; e = e.b, t = t.b) a.push(n(r, e.a, t.a));
      return u(a);
    }),
    e0 = ar(function (r, e, t, a) {
      for (var i = []; e.b && t.b && a.b; e = e.b, t = t.b, a = a.b)
        i.push(g(r, e.a, t.a, a.a));
      return u(i);
    }),
    n0 = mr(function (r, e, t, a, i) {
      for (
        var $ = [];
        e.b && t.b && a.b && i.b;
        e = e.b, t = t.b, a = a.b, i = i.b
      )
        $.push(M(r, e.a, t.a, a.a, i.a));
      return u($);
    }),
    t0 = Wr(function (r, e, t, a, i, $) {
      for (
        var o = [];
        e.b && t.b && a.b && i.b && $.b;
        e = e.b, t = t.b, a = a.b, i = i.b, $ = $.b
      )
        o.push(N(r, e.a, t.a, a.a, i.a, $.a));
      return u(o);
    }),
    a0 = s(function (r, e) {
      return u(
        ua(e).sort(function (t, a) {
          return ur(r(t), r(a));
        })
      );
    }),
    i0 = s(function (r, e) {
      return u(
        ua(e).sort(function (t, a) {
          var i = n(r, t, a);
          return i === Jo ? 0 : i === zo ? -1 : 1;
        })
      );
    }),
    Lv = s(function (r, e) {
      return r + e;
    }),
    Pv = s(function (r, e) {
      return r - e;
    }),
    Jv = s(function (r, e) {
      return r * e;
    }),
    zv = s(function (r, e) {
      return r / e;
    }),
    Ov = s(function (r, e) {
      return (r / e) | 0;
    }),
    $0 = s(Math.pow),
    Uv = s(function (r, e) {
      return e % r;
    }),
    o0 = s(function (r, e) {
      var t = e % r;
      return r === 0
        ? re(11)
        : (t > 0 && r < 0) || (t < 0 && r > 0)
        ? t + r
        : t;
    }),
    u0 = Math.PI,
    l0 = Math.E,
    c0 = Math.cos,
    v0 = Math.sin,
    f0 = Math.tan,
    s0 = Math.acos,
    m0 = Math.asin,
    g0 = Math.atan,
    d0 = s(Math.atan2);
  function Vv(r) {
    return r;
  }
  function p0(r) {
    return r | 0;
  }
  function b0(r) {
    return r === 1 / 0 || r === -1 / 0;
  }
  var jv = Math.ceil,
    Nv = Math.floor,
    Wv = Math.round,
    h0 = Math.sqrt,
    ao = Math.log,
    _0 = isNaN;
  function Yv(r) {
    return !r;
  }
  var qv = s(function (r, e) {
      return r && e;
    }),
    Xv = s(function (r, e) {
      return r || e;
    }),
    w0 = s(function (r, e) {
      return r !== e;
    }),
    D0 = s(function (r, e) {
      return r + e;
    });
  function Gv(r) {
    var e = r.charCodeAt(0);
    return isNaN(e)
      ? j
      : R(
          55296 <= e && e <= 56319
            ? p(ee(r[0] + r[1]), r.slice(2))
            : p(ee(r[0]), r.slice(1))
        );
  }
  var y0 = s(function (r, e) {
    return r + e;
  });
  function Zv(r) {
    return r.length;
  }
  var S0 = s(function (r, e) {
      for (var t = e.length, a = new Array(t), i = 0; i < t; ) {
        var $ = e.charCodeAt(i);
        if (55296 <= $ && $ <= 56319) {
          (a[i] = r(ee(e[i] + e[i + 1]))), (i += 2);
          continue;
        }
        (a[i] = r(ee(e[i]))), i++;
      }
      return a.join("");
    }),
    M0 = s(function (r, e) {
      for (var t = [], a = e.length, i = 0; i < a; ) {
        var $ = e[i],
          o = e.charCodeAt(i);
        i++,
          55296 <= o && o <= 56319 && (($ += e[i]), i++),
          r(ee($)) && t.push($);
      }
      return t.join("");
    });
  function E0(r) {
    for (var e = r.length, t = new Array(e), a = 0; a < e; ) {
      var i = r.charCodeAt(a);
      55296 <= i && i <= 56319
        ? ((t[e - a] = r[a + 1]), a++, (t[e - a] = r[a - 1]), a++)
        : ((t[e - a] = r[a]), a++);
    }
    return t.join("");
  }
  var C0 = I(function (r, e, t) {
      for (var a = t.length, i = 0; i < a; ) {
        var $ = t[i],
          o = t.charCodeAt(i);
        i++,
          55296 <= o && o <= 56319 && (($ += t[i]), i++),
          (e = n(r, ee($), e));
      }
      return e;
    }),
    I0 = I(function (r, e, t) {
      for (var a = t.length; a--; ) {
        var i = t[a],
          $ = t.charCodeAt(a);
        56320 <= $ && $ <= 57343 && (a--, (i = t[a] + i)), (e = n(r, ee(i), e));
      }
      return e;
    }),
    Qv = s(function (r, e) {
      return e.split(r);
    }),
    Kv = s(function (r, e) {
      return e.join(r);
    }),
    rf = I(function (r, e, t) {
      return t.slice(r, e);
    });
  function ef(r) {
    return r.trim();
  }
  function B0(r) {
    return r.replace(/^\s+/, "");
  }
  function x0(r) {
    return r.replace(/\s+$/, "");
  }
  function nf(r) {
    return u(r.trim().split(/\s+/g));
  }
  function F0(r) {
    return u(r.split(/\r\n|\r|\n/g));
  }
  function A0(r) {
    return r.toUpperCase();
  }
  function tf(r) {
    return r.toLowerCase();
  }
  var T0 = s(function (r, e) {
      for (var t = e.length; t--; ) {
        var a = e[t],
          i = e.charCodeAt(t);
        if ((56320 <= i && i <= 57343 && (t--, (a = e[t] + a)), r(ee(a))))
          return !0;
      }
      return !1;
    }),
    af = s(function (r, e) {
      for (var t = e.length; t--; ) {
        var a = e[t],
          i = e.charCodeAt(t);
        if ((56320 <= i && i <= 57343 && (t--, (a = e[t] + a)), !r(ee(a))))
          return !1;
      }
      return !0;
    }),
    $f = s(function (r, e) {
      return e.indexOf(r) > -1;
    }),
    of = s(function (r, e) {
      return e.indexOf(r) === 0;
    }),
    R0 = s(function (r, e) {
      return e.length >= r.length && e.lastIndexOf(r) === e.length - r.length;
    }),
    uf = s(function (r, e) {
      var t = r.length;
      if (t < 1) return w;
      for (var a = 0, i = []; (a = e.indexOf(r, a)) > -1; )
        i.push(a), (a = a + t);
      return u(i);
    });
  function io(r) {
    return r + "";
  }
  function lf(r) {
    for (
      var e = 0, t = r.charCodeAt(0), a = t == 43 || t == 45 ? 1 : 0, i = a;
      i < r.length;
      ++i
    ) {
      var $ = r.charCodeAt(i);
      if ($ < 48 || 57 < $) return j;
      e = 10 * e + $ - 48;
    }
    return i == a ? j : R(t == 45 ? -e : e);
  }
  function H0(r) {
    if (r.length === 0 || /[\sxbo]/.test(r)) return j;
    var e = +r;
    return e === e ? R(e) : j;
  }
  function k0(r) {
    return ua(r).join("");
  }
  function cf(r) {
    var e = r.charCodeAt(0);
    return 55296 <= e && e <= 56319
      ? (e - 55296) * 1024 + r.charCodeAt(1) - 56320 + 65536
      : e;
  }
  function L0(r) {
    return ee(
      r < 0 || 1114111 < r
        ? "\uFFFD"
        : r <= 65535
        ? String.fromCharCode(r)
        : ((r -= 65536),
          String.fromCharCode(Math.floor(r / 1024) + 55296, (r % 1024) + 56320))
    );
  }
  function P0(r) {
    return ee(r.toUpperCase());
  }
  function J0(r) {
    return ee(r.toLowerCase());
  }
  function z0(r) {
    return ee(r.toLocaleUpperCase());
  }
  function O0(r) {
    return ee(r.toLocaleLowerCase());
  }
  function vf(r) {
    return Yo(r);
  }
  function ff(r) {
    return { $: 0, a: r };
  }
  function sf(r) {
    return { $: 1, a: r };
  }
  function ft(r) {
    return { $: 2, b: r };
  }
  var mf = ft(function (r) {
      return typeof r != "number"
        ? be("an INT", r)
        : (-2147483647 < r && r < 2147483647 && (r | 0) === r) ||
          (isFinite(r) && !(r % 1))
        ? ae(r)
        : be("an INT", r);
    }),
    U0 = ft(function (r) {
      return typeof r == "boolean" ? ae(r) : be("a BOOL", r);
    }),
    gf = ft(function (r) {
      return typeof r == "number" ? ae(r) : be("a FLOAT", r);
    }),
    df = ft(function (r) {
      return ae(Or(r));
    }),
    pf = ft(function (r) {
      return typeof r == "string"
        ? ae(r)
        : r instanceof String
        ? ae(r + "")
        : be("a STRING", r);
    });
  function bf(r) {
    return { $: 3, b: r };
  }
  function V0(r) {
    return { $: 4, b: r };
  }
  function hf(r) {
    return { $: 5, c: r };
  }
  var _f = s(function (r, e) {
      return { $: 6, d: r, b: e };
    }),
    wf = s(function (r, e) {
      return { $: 7, e: r, b: e };
    });
  function Df(r) {
    return { $: 8, b: r };
  }
  function Xe(r, e) {
    return { $: 9, f: r, g: e };
  }
  var yf = s(function (r, e) {
    return { $: 10, b: e, h: r };
  });
  function Sf(r) {
    return { $: 11, g: r };
  }
  var Mf = s(function (r, e) {
      return Xe(r, [e]);
    }),
    Ef = I(function (r, e, t) {
      return Xe(r, [e, t]);
    }),
    Cf = ar(function (r, e, t, a) {
      return Xe(r, [e, t, a]);
    }),
    j0 = mr(function (r, e, t, a, i) {
      return Xe(r, [e, t, a, i]);
    }),
    If = Wr(function (r, e, t, a, i, $) {
      return Xe(r, [e, t, a, i, $]);
    }),
    N0 = ti(function (r, e, t, a, i, $, o) {
      return Xe(r, [e, t, a, i, $, o]);
    }),
    W0 = ia(function (r, e, t, a, i, $, o, l) {
      return Xe(r, [e, t, a, i, $, o, l]);
    }),
    Y0 = Z$(function (r, e, t, a, i, $, o, l, f) {
      return Xe(r, [e, t, a, i, $, o, l, f]);
    }),
    Bf = s(function (r, e) {
      try {
        var t = JSON.parse(e);
        return pe(r, t);
      } catch (a) {
        return fe(n(Mi, "This is not valid JSON! " + a.message, Or(e)));
      }
    }),
    ii = s(function (r, e) {
      return pe(r, ye(e));
    });
  function pe(r, e) {
    switch (r.$) {
      case 2:
        return r.b(e);
      case 5:
        return e === null ? ae(r.c) : be("null", e);
      case 3:
        return la(e) ? $o(r.b, e, u) : be("a LIST", e);
      case 4:
        return la(e) ? $o(r.b, e, xf) : be("an ARRAY", e);
      case 6:
        var t = r.d;
        if (typeof e != "object" || e === null || !(t in e))
          return be("an OBJECT with a field named `" + t + "`", e);
        var m = pe(r.b, e[t]);
        return Me(m) ? m : fe(n(Oo, t, m.a));
      case 7:
        var a = r.e;
        if (!la(e)) return be("an ARRAY", e);
        if (a >= e.length)
          return be(
            "a LONGER array. Need index " +
              a +
              " but only see " +
              e.length +
              " entries",
            e
          );
        var m = pe(r.b, e[a]);
        return Me(m) ? m : fe(n(Uo, a, m.a));
      case 8:
        if (typeof e != "object" || e === null || la(e))
          return be("an OBJECT", e);
        var i = w;
        for (var $ in e)
          if (e.hasOwnProperty($)) {
            var m = pe(r.b, e[$]);
            if (!Me(m)) return fe(n(Oo, $, m.a));
            i = ne(p($, m.a), i);
          }
        return ae(yr(i));
      case 9:
        for (var o = r.f, l = r.g, f = 0; f < l.length; f++) {
          var m = pe(l[f], e);
          if (!Me(m)) return m;
          o = o(m.a);
        }
        return ae(o);
      case 10:
        var m = pe(r.b, e);
        return Me(m) ? pe(r.h(m.a), e) : m;
      case 11:
        for (var h = w, d = r.g; d.b; d = d.b) {
          var m = pe(d.a, e);
          if (Me(m)) return m;
          h = ne(m.a, h);
        }
        return fe(Qs(yr(h)));
      case 1:
        return fe(n(Mi, r.a, Or(e)));
      case 0:
        return ae(r.a);
    }
  }
  function $o(r, e, t) {
    for (var a = e.length, i = new Array(a), $ = 0; $ < a; $++) {
      var o = pe(r, e[$]);
      if (!Me(o)) return fe(n(Uo, $, o.a));
      i[$] = o.a;
    }
    return ae(t(i));
  }
  function la(r) {
    return (
      Array.isArray(r) ||
      (typeof FileList != "undefined" && r instanceof FileList)
    );
  }
  function xf(r) {
    return n(fm, r.length, function (e) {
      return r[e];
    });
  }
  function be(r, e) {
    return fe(n(Mi, "Expecting " + r, Or(e)));
  }
  function zn(r, e) {
    if (r === e) return !0;
    if (r.$ !== e.$) return !1;
    switch (r.$) {
      case 0:
      case 1:
        return r.a === e.a;
      case 2:
        return r.b === e.b;
      case 5:
        return r.c === e.c;
      case 3:
      case 4:
      case 8:
        return zn(r.b, e.b);
      case 6:
        return r.d === e.d && zn(r.b, e.b);
      case 7:
        return r.e === e.e && zn(r.b, e.b);
      case 9:
        return r.f === e.f && oo(r.g, e.g);
      case 10:
        return r.h === e.h && zn(r.b, e.b);
      case 11:
        return oo(r.g, e.g);
    }
  }
  function oo(r, e) {
    var t = r.length;
    if (t !== e.length) return !1;
    for (var a = 0; a < t; a++) if (!zn(r[a], e[a])) return !1;
    return !0;
  }
  var Ff = s(function (r, e) {
    return JSON.stringify(ye(e), null, r) + "";
  });
  function Or(r) {
    return { $: 0, a: r };
  }
  function ye(r) {
    return r.a;
  }
  function q0(r) {
    return r;
  }
  function X0(r) {
    return r;
  }
  function Af() {
    return [];
  }
  function Tf() {
    return {};
  }
  var Rf = I(function (r, e, t) {
    return (t[r] = ye(e)), t;
  });
  function Hf(r) {
    return s(function (e, t) {
      return t.push(ye(r(e))), t;
    });
  }
  var kf = Or(null);
  function Ur(r) {
    return { $: 0, a: r };
  }
  function Lf(r) {
    return { $: 1, a: r };
  }
  function Ir(r) {
    return { $: 2, b: r, c: null };
  }
  var $i = s(function (r, e) {
      return { $: 3, b: r, d: e };
    }),
    G0 = s(function (r, e) {
      return { $: 4, b: r, d: e };
    });
  function Pf(r) {
    return { $: 5, b: r };
  }
  var Jf = 0;
  function oi(r) {
    var e = { $: 0, e: Jf++, f: r, g: null, h: [] };
    return li(e), e;
  }
  function uo(r) {
    return Ir(function (e) {
      e(Ur(oi(r)));
    });
  }
  function lo(r, e) {
    r.h.push(e), li(r);
  }
  var zf = s(function (r, e) {
    return Ir(function (t) {
      lo(r, e), t(Ur(sr));
    });
  });
  function Z0(r) {
    return Ir(function (e) {
      var t = r.f;
      t.$ === 2 && t.c && t.c(), (r.f = null), e(Ur(sr));
    });
  }
  var ui = !1,
    co = [];
  function li(r) {
    if ((co.push(r), !ui)) {
      for (ui = !0; (r = co.shift()); ) Of(r);
      ui = !1;
    }
  }
  function Of(r) {
    for (; r.f; ) {
      var e = r.f.$;
      if (e === 0 || e === 1) {
        for (; r.g && r.g.$ !== e; ) r.g = r.g.i;
        if (!r.g) return;
        (r.f = r.g.b(r.f.a)), (r.g = r.g.i);
      } else if (e === 2) {
        r.f.c = r.f.b(function (t) {
          (r.f = t), li(r);
        });
        return;
      } else if (e === 5) {
        if (r.h.length === 0) return;
        r.f = r.f.b(r.h.shift());
      } else (r.g = { $: e === 3 ? 0 : 1, b: r.f.b, i: r.g }), (r.f = r.f.d);
    }
  }
  function Uf(r) {
    return Ir(function (e) {
      var t = setTimeout(function () {
        e(Ur(sr));
      }, r);
      return function () {
        clearTimeout(t);
      };
    });
  }
  var Q0 = ar(function (r, e, t, a) {
    return st(e, a, r.init, r.update, r.subscriptions, function () {
      return function () {};
    });
  });
  function st(r, e, t, a, i, $) {
    var o = n(ii, r, Or(e ? e.flags : void 0));
    Me(o) || re(2, vf(o.a));
    var l = {},
      f = t(o.a),
      m = f.a,
      h = $(S, m),
      d = jf(l, S);
    function S(y, E) {
      var B = n(a, y, m);
      h((m = B.a), E), mo(l, B.b, i(m));
    }
    return mo(l, f.b, i(m)), d ? { ports: d } : {};
  }
  var Vf;
  function K0(r) {
    Vf.add(r);
  }
  var te = {};
  function jf(r, e) {
    var t;
    for (var a in te) {
      var i = te[a];
      i.a && ((t = t || {}), (t[a] = i.a(a, e))), (r[a] = Wf(i, e));
    }
    return t;
  }
  function Nf(r, e, t, a, i) {
    return { b: r, c: e, d: t, e: a, f: i };
  }
  function Wf(r, e) {
    var t = { g: e, h: void 0 },
      a = r.c,
      i = r.d,
      $ = r.e,
      o = r.f;
    function l(f) {
      return n(
        $i,
        l,
        Pf(function (m) {
          var h = m.a;
          return m.$ === 0
            ? g(i, t, h, f)
            : $ && o
            ? M(a, t, h.i, h.j, f)
            : g(a, t, $ ? h.i : h.j, f);
        })
      );
    }
    return (t.h = oi(n($i, l, r.b)));
  }
  var Yf = s(function (r, e) {
      return Ir(function (t) {
        r.g(e), t(Ur(sr));
      });
    }),
    rD = s(function (r, e) {
      return n(zf, r.h, { $: 0, a: e });
    });
  function ci(r) {
    return function (e) {
      return { $: 1, k: r, l: e };
    };
  }
  function vo(r) {
    return { $: 2, m: r };
  }
  var fo = s(function (r, e) {
      return { $: 3, n: r, o: e };
    }),
    so = [],
    vi = !1;
  function mo(r, e, t) {
    if ((so.push({ p: r, q: e, r: t }), !vi)) {
      vi = !0;
      for (var a; (a = so.shift()); ) qf(a.p, a.q, a.r);
      vi = !1;
    }
  }
  function qf(r, e, t) {
    var a = {};
    ca(!0, e, a, null), ca(!1, t, a, null);
    for (var i in r) lo(r[i], { $: "fx", a: a[i] || { i: w, j: w } });
  }
  function ca(r, e, t, a) {
    switch (e.$) {
      case 1:
        var i = e.k,
          $ = Xf(r, i, a, e.l);
        t[i] = Gf(r, $, t[i]);
        return;
      case 2:
        for (var o = e.m; o.b; o = o.b) ca(r, o.a, t, a);
        return;
      case 3:
        ca(r, e.o, t, { s: e.n, t: a });
        return;
    }
  }
  function Xf(r, e, t, a) {
    function i(o) {
      for (var l = t; l; l = l.t) o = l.s(o);
      return o;
    }
    var $ = r ? te[e].e : te[e].f;
    return n($, i, a);
  }
  function Gf(r, e, t) {
    return (
      (t = t || { i: w, j: w }), r ? (t.i = ne(e, t.i)) : (t.j = ne(e, t.j)), t
    );
  }
  function go(r) {
    te[r] && re(3, r);
  }
  function po(r, e) {
    return go(r), (te[r] = { e: Zf, u: e, a: Qf }), ci(r);
  }
  var Zf = s(function (r, e) {
    return e;
  });
  function Qf(r) {
    var e = [],
      t = te[r].u,
      a = Uf(0);
    (te[r].b = a),
      (te[r].c = I(function (o, l, f) {
        for (; l.b; l = l.b)
          for (var m = e, h = ye(t(l.a)), d = 0; d < m.length; d++) m[d](h);
        return a;
      }));
    function i(o) {
      e.push(o);
    }
    function $(o) {
      e = e.slice();
      var l = e.indexOf(o);
      l >= 0 && e.splice(l, 1);
    }
    return { subscribe: i, unsubscribe: $ };
  }
  function fi(r, e) {
    return go(r), (te[r] = { f: Kf, u: e, a: rs }), ci(r);
  }
  var Kf = s(function (r, e) {
    return function (t) {
      return r(e(t));
    };
  });
  function rs(r, e) {
    var t = w,
      a = te[r].u,
      i = Ur(null);
    (te[r].b = i),
      (te[r].c = I(function (o, l, f) {
        return (t = l), i;
      }));
    function $(o) {
      var l = n(ii, a, Or(o));
      Me(l) || re(4, r, l.a);
      for (var f = l.a, m = t; m.b; m = m.b) e(m.a(f));
    }
    return { send: $ };
  }
  function eD(r) {
    or.Elm ? bo(or.Elm, r) : (or.Elm = r);
  }
  function bo(r, e) {
    for (var t in e)
      t in r ? (t == "init" ? re(6) : bo(r[t], e[t])) : (r[t] = e[t]);
  }
  function es(r) {
    or.Elm ? ho("Elm", or.Elm, r) : (or.Elm = r);
  }
  function ho(r, e, t) {
    for (var a in t)
      a in e
        ? a == "init"
          ? re(6, r)
          : ho(r + "." + a, e[a], t[a])
        : (e[a] = t[a]);
  }
  var On,
    gr = typeof document != "undefined" ? document : {};
  function si(r, e) {
    r.appendChild(e);
  }
  var nD = ar(function (r, e, t, a) {
    var i = a && a.node ? a.node : re(0);
    return (
      i.parentNode.replaceChild(
        Ze(r, function () {}),
        i
      ),
      {}
    );
  });
  function mi(r) {
    return { $: 0, a: r };
  }
  var _o = s(function (r, e) {
      return s(function (t, a) {
        for (var i = [], $ = 0; a.b; a = a.b) {
          var o = a.a;
          ($ += o.b || 0), i.push(o);
        }
        return ($ += i.length), { $: 1, c: e, d: bi(t), e: i, f: r, b: $ };
      });
    }),
    Yr = _o(void 0),
    ns = s(function (r, e) {
      return s(function (t, a) {
        for (var i = [], $ = 0; a.b; a = a.b) {
          var o = a.a;
          ($ += o.b.b || 0), i.push(o);
        }
        return ($ += i.length), { $: 2, c: e, d: bi(t), e: i, f: r, b: $ };
      });
    }),
    ts = ns(void 0);
  function tD(r, e, t, a) {
    return { $: 3, d: bi(r), g: e, h: t, i: a };
  }
  var gi = s(function (r, e) {
    return { $: 4, j: r, k: e, b: 1 + (e.b || 0) };
  });
  function Ge(r, e) {
    return { $: 5, l: r, m: e, k: void 0 };
  }
  var as = s(function (r, e) {
      return Ge([r, e], function () {
        return r(e);
      });
    }),
    aD = I(function (r, e, t) {
      return Ge([r, e, t], function () {
        return n(r, e, t);
      });
    }),
    is = ar(function (r, e, t, a) {
      return Ge([r, e, t, a], function () {
        return g(r, e, t, a);
      });
    }),
    iD = mr(function (r, e, t, a, i) {
      return Ge([r, e, t, a, i], function () {
        return M(r, e, t, a, i);
      });
    }),
    $D = Wr(function (r, e, t, a, i, $) {
      return Ge([r, e, t, a, i, $], function () {
        return N(r, e, t, a, i, $);
      });
    }),
    oD = ti(function (r, e, t, a, i, $, o) {
      return Ge([r, e, t, a, i, $, o], function () {
        return dn(r, e, t, a, i, $, o);
      });
    }),
    uD = ia(function (r, e, t, a, i, $, o, l) {
      return Ge([r, e, t, a, i, $, o, l], function () {
        return Q$(r, e, t, a, i, $, o, l);
      });
    }),
    lD = Z$(function (r, e, t, a, i, $, o, l, f) {
      return Ge([r, e, t, a, i, $, o, l, f], function () {
        return K$(r, e, t, a, i, $, o, l, f);
      });
    }),
    wo = s(function (r, e) {
      return { $: "a0", n: r, o: e };
    }),
    $s = s(function (r, e) {
      return { $: "a1", n: r, o: e };
    }),
    di = s(function (r, e) {
      return { $: "a2", n: r, o: e };
    }),
    va = s(function (r, e) {
      return { $: "a3", n: r, o: e };
    }),
    cD = I(function (r, e, t) {
      return { $: "a4", n: e, o: { f: r, o: t } };
    }),
    os = /^script$/i,
    us = /^(on|formAction$)/i,
    ls = /^\s*j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:/i,
    Do =
      /^\s*(j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:|d\s*a\s*t\s*a\s*:\s*t\s*e\s*x\s*t\s*\/\s*h\s*t\s*m\s*l\s*(,|;))/i;
  function pi(r) {
    return os.test(r) ? "p" : r;
  }
  function cs(r) {
    return us.test(r) ? "data-" + r : r;
  }
  function vs(r) {
    return r == "innerHTML" || r == "formAction" ? "data-" + r : r;
  }
  function fs(r) {
    return ls.test(r)
      ? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
      : r;
  }
  function ss(r) {
    return Do.test(r)
      ? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
      : r;
  }
  function ms(r) {
    return typeof ye(r) == "string" && Do.test(ye(r))
      ? Or(
          'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
        )
      : r;
  }
  var vD = s(function (r, e) {
    return e.$ === "a0" ? n(wo, e.n, gs(r, e.o)) : e;
  });
  function gs(r, e) {
    var t = Fi(e);
    return {
      $: e.$,
      a: t ? g(wn, t < 3 ? ds : ps, en(r), e.a) : n(Te, r, e.a),
    };
  }
  var ds = s(function (r, e) {
      return p(r(e.a), e.b);
    }),
    ps = s(function (r, e) {
      return {
        message: r(e.message),
        stopPropagation: e.stopPropagation,
        preventDefault: e.preventDefault,
      };
    });
  function bi(r) {
    for (var e = {}; r.b; r = r.b) {
      var t = r.a,
        a = t.$,
        i = t.n,
        $ = t.o;
      if (a === "a2") {
        i === "className" ? yo(e, i, ye($)) : (e[i] = ye($));
        continue;
      }
      var o = e[a] || (e[a] = {});
      a === "a3" && i === "class" ? yo(o, i, $) : (o[i] = $);
    }
    return e;
  }
  function yo(r, e, t) {
    var a = r[e];
    r[e] = a ? a + " " + t : t;
  }
  function Ze(r, e) {
    var t = r.$;
    if (t === 5) return Ze(r.k || (r.k = r.m()), e);
    if (t === 0) return gr.createTextNode(r.a);
    if (t === 4) {
      for (var a = r.k, i = r.j; a.$ === 4; )
        typeof i != "object" ? (i = [i, a.j]) : i.push(a.j), (a = a.k);
      var $ = { j: i, p: e },
        o = Ze(a, $);
      return (o.elm_event_node_ref = $), o;
    }
    if (t === 3) {
      var o = r.h(r.g);
      return hi(o, e, r.d), o;
    }
    var o = r.f ? gr.createElementNS(r.f, r.c) : gr.createElement(r.c);
    On && r.c == "a" && o.addEventListener("click", On(o)), hi(o, e, r.d);
    for (var l = r.e, f = 0; f < l.length; f++)
      si(o, Ze(t === 1 ? l[f] : l[f].b, e));
    return o;
  }
  function hi(r, e, t) {
    for (var a in t) {
      var i = t[a];
      a === "a1"
        ? bs(r, i)
        : a === "a0"
        ? ws(r, e, i)
        : a === "a3"
        ? hs(r, i)
        : a === "a4"
        ? _s(r, i)
        : ((a !== "value" && a !== "checked") || r[a] !== i) && (r[a] = i);
    }
  }
  function bs(r, e) {
    var t = r.style;
    for (var a in e) t[a] = e[a];
  }
  function hs(r, e) {
    for (var t in e) {
      var a = e[t];
      typeof a != "undefined" ? r.setAttribute(t, a) : r.removeAttribute(t);
    }
  }
  function _s(r, e) {
    for (var t in e) {
      var a = e[t],
        i = a.f,
        $ = a.o;
      typeof $ != "undefined"
        ? r.setAttributeNS(i, t, $)
        : r.removeAttributeNS(i, t);
    }
  }
  function ws(r, e, t) {
    var a = r.elmFs || (r.elmFs = {});
    for (var i in t) {
      var $ = t[i],
        o = a[i];
      if (!$) {
        r.removeEventListener(i, o), (a[i] = void 0);
        continue;
      }
      if (o) {
        var l = o.q;
        if (l.$ === $.$) {
          o.q = $;
          continue;
        }
        r.removeEventListener(i, o);
      }
      (o = Ds(e, $)),
        r.addEventListener(i, o, _i && { passive: Fi($) < 2 }),
        (a[i] = o);
    }
  }
  var _i;
  try {
    window.addEventListener(
      "t",
      null,
      Object.defineProperty({}, "passive", {
        get: function () {
          _i = !0;
        },
      })
    );
  } catch (r) {}
  function Ds(r, e) {
    function t(a) {
      var i = t.q,
        $ = pe(i.a, a);
      if (!!Me($)) {
        for (
          var o = Fi(i),
            l = $.a,
            f = o ? (o < 3 ? l.a : l.message) : l,
            m = o == 1 ? l.b : o == 3 && l.stopPropagation,
            h =
              (m && a.stopPropagation(),
              (o == 2 ? l.b : o == 3 && l.preventDefault) && a.preventDefault(),
              r),
            d,
            S;
          (d = h.j);

        ) {
          if (typeof d == "function") f = d(f);
          else for (var S = d.length; S--; ) f = d[S](f);
          h = h.p;
        }
        h(f, m);
      }
    }
    return (t.q = e), t;
  }
  function ys(r, e) {
    return r.$ == e.$ && zn(r.a, e.a);
  }
  function pn(r, e) {
    var t = [];
    return Se(r, e, t, 0), t;
  }
  function qr(r, e, t, a) {
    var i = { $: e, r: t, s: a, t: void 0, u: void 0 };
    return r.push(i), i;
  }
  function Se(r, e, t, a) {
    if (r !== e) {
      var i = r.$,
        $ = e.$;
      if (i !== $)
        if (i === 1 && $ === 2) (e = Fs(e)), ($ = 1);
        else {
          qr(t, 0, a, e);
          return;
        }
      switch ($) {
        case 5:
          for (
            var o = r.l, l = e.l, f = o.length, m = f === l.length;
            m && f--;

          )
            m = o[f] === l[f];
          if (m) {
            e.k = r.k;
            return;
          }
          e.k = e.m();
          var h = [];
          Se(r.k, e.k, h, 0), h.length > 0 && qr(t, 1, a, h);
          return;
        case 4:
          for (var d = r.j, S = e.j, y = !1, E = r.k; E.$ === 4; )
            (y = !0),
              typeof d != "object" ? (d = [d, E.j]) : d.push(E.j),
              (E = E.k);
          for (var B = e.k; B.$ === 4; )
            (y = !0),
              typeof S != "object" ? (S = [S, B.j]) : S.push(B.j),
              (B = B.k);
          if (y && d.length !== S.length) {
            qr(t, 0, a, e);
            return;
          }
          (y ? !Ss(d, S) : d !== S) && qr(t, 2, a, S), Se(E, B, t, a + 1);
          return;
        case 0:
          r.a !== e.a && qr(t, 3, a, e.a);
          return;
        case 1:
          So(r, e, t, a, Ms);
          return;
        case 2:
          So(r, e, t, a, Es);
          return;
        case 3:
          if (r.h !== e.h) {
            qr(t, 0, a, e);
            return;
          }
          var F = wi(r.d, e.d);
          F && qr(t, 4, a, F);
          var A = e.i(r.g, e.g);
          A && qr(t, 5, a, A);
          return;
      }
    }
  }
  function Ss(r, e) {
    for (var t = 0; t < r.length; t++) if (r[t] !== e[t]) return !1;
    return !0;
  }
  function So(r, e, t, a, i) {
    if (r.c !== e.c || r.f !== e.f) {
      qr(t, 0, a, e);
      return;
    }
    var $ = wi(r.d, e.d);
    $ && qr(t, 4, a, $), i(r, e, t, a);
  }
  function wi(r, e, t) {
    var a;
    for (var i in r) {
      if (i === "a1" || i === "a0" || i === "a3" || i === "a4") {
        var $ = wi(r[i], e[i] || {}, i);
        $ && ((a = a || {}), (a[i] = $));
        continue;
      }
      if (!(i in e)) {
        (a = a || {}),
          (a[i] = t
            ? t === "a1"
              ? ""
              : t === "a0" || t === "a3"
              ? void 0
              : { f: r[i].f, o: void 0 }
            : typeof r[i] == "string"
            ? ""
            : null);
        continue;
      }
      var o = r[i],
        l = e[i];
      (o === l && i !== "value" && i !== "checked") ||
        (t === "a0" && ys(o, l)) ||
        ((a = a || {}), (a[i] = l));
    }
    for (var f in e) f in r || ((a = a || {}), (a[f] = e[f]));
    return a;
  }
  function Ms(r, e, t, a) {
    var i = r.e,
      $ = e.e,
      o = i.length,
      l = $.length;
    o > l
      ? qr(t, 6, a, { v: l, i: o - l })
      : o < l && qr(t, 7, a, { v: o, e: $ });
    for (var f = o < l ? o : l, m = 0; m < f; m++) {
      var h = i[m];
      Se(h, $[m], t, ++a), (a += h.b || 0);
    }
  }
  function Es(r, e, t, a) {
    for (
      var i = [],
        $ = {},
        o = [],
        l = r.e,
        f = e.e,
        m = l.length,
        h = f.length,
        d = 0,
        S = 0,
        y = a;
      d < m && S < h;

    ) {
      var E = l[d],
        B = f[S],
        F = E.a,
        A = B.a,
        k = E.b,
        Y = B.b,
        Q = void 0,
        X = void 0;
      if (F === A) {
        y++, Se(k, Y, i, y), (y += k.b || 0), d++, S++;
        continue;
      }
      var lr = l[d + 1],
        Rr = f[S + 1];
      if (lr) {
        var Ye = lr.a,
          ce = lr.b;
        X = A === Ye;
      }
      if (Rr) {
        var Lr = Rr.a,
          Pr = Rr.b;
        Q = F === Lr;
      }
      if (Q && X) {
        y++,
          Se(k, Pr, i, y),
          mt($, i, F, Y, S, o),
          (y += k.b || 0),
          y++,
          gt($, i, F, ce, y),
          (y += ce.b || 0),
          (d += 2),
          (S += 2);
        continue;
      }
      if (Q) {
        y++,
          mt($, i, A, Y, S, o),
          Se(k, Pr, i, y),
          (y += k.b || 0),
          (d += 1),
          (S += 2);
        continue;
      }
      if (X) {
        y++,
          gt($, i, F, k, y),
          (y += k.b || 0),
          y++,
          Se(ce, Y, i, y),
          (y += ce.b || 0),
          (d += 2),
          (S += 1);
        continue;
      }
      if (lr && Ye === Lr) {
        y++,
          gt($, i, F, k, y),
          mt($, i, A, Y, S, o),
          (y += k.b || 0),
          y++,
          Se(ce, Pr, i, y),
          (y += ce.b || 0),
          (d += 2),
          (S += 2);
        continue;
      }
      break;
    }
    for (; d < m; ) {
      y++;
      var E = l[d],
        k = E.b;
      gt($, i, E.a, k, y), (y += k.b || 0), d++;
    }
    for (; S < h; ) {
      var Jr = Jr || [],
        B = f[S];
      mt($, i, B.a, B.b, void 0, Jr), S++;
    }
    (i.length > 0 || o.length > 0 || Jr) && qr(t, 8, a, { w: i, x: o, y: Jr });
  }
  var Mo = "_elmW6BL";
  function mt(r, e, t, a, i, $) {
    var o = r[t];
    if (!o) {
      (o = { c: 0, z: a, r: i, s: void 0 }), $.push({ r: i, A: o }), (r[t] = o);
      return;
    }
    if (o.c === 1) {
      $.push({ r: i, A: o }), (o.c = 2);
      var l = [];
      Se(o.z, a, l, o.r), (o.r = i), (o.s.s = { w: l, A: o });
      return;
    }
    mt(r, e, t + Mo, a, i, $);
  }
  function gt(r, e, t, a, i) {
    var $ = r[t];
    if (!$) {
      var o = qr(e, 9, i, void 0);
      r[t] = { c: 1, z: a, r: i, s: o };
      return;
    }
    if ($.c === 0) {
      $.c = 2;
      var l = [];
      Se(a, $.z, l, i), qr(e, 9, i, { w: l, A: $ });
      return;
    }
    gt(r, e, t + Mo, a, i);
  }
  function Eo(r, e, t, a) {
    dt(r, e, t, 0, 0, e.b, a);
  }
  function dt(r, e, t, a, i, $, o) {
    for (var l = t[a], f = l.r; f === i; ) {
      var m = l.$;
      if (m === 1) Eo(r, e.k, l.s, o);
      else if (m === 8) {
        (l.t = r), (l.u = o);
        var h = l.s.w;
        h.length > 0 && dt(r, e, h, 0, i, $, o);
      } else if (m === 9) {
        (l.t = r), (l.u = o);
        var d = l.s;
        if (d) {
          d.A.s = r;
          var h = d.w;
          h.length > 0 && dt(r, e, h, 0, i, $, o);
        }
      } else (l.t = r), (l.u = o);
      if ((a++, !(l = t[a]) || (f = l.r) > $)) return a;
    }
    var S = e.$;
    if (S === 4) {
      for (var y = e.k; y.$ === 4; ) y = y.k;
      return dt(r, y, t, a, i + 1, $, r.elm_event_node_ref);
    }
    for (var E = e.e, B = r.childNodes, F = 0; F < E.length; F++) {
      i++;
      var A = S === 1 ? E[F] : E[F].b,
        k = i + (A.b || 0);
      if (
        i <= f &&
        f <= k &&
        ((a = dt(B[F], A, t, a, i, k, o)), !(l = t[a]) || (f = l.r) > $)
      )
        return a;
      i = k;
    }
    return a;
  }
  function bn(r, e, t, a) {
    return t.length === 0 ? r : (Eo(r, e, t, a), fa(r, t));
  }
  function fa(r, e) {
    for (var t = 0; t < e.length; t++) {
      var a = e[t],
        i = a.t,
        $ = Cs(i, a);
      i === r && (r = $);
    }
    return r;
  }
  function Cs(r, e) {
    switch (e.$) {
      case 0:
        return Is(r, e.s, e.u);
      case 4:
        return hi(r, e.u, e.s), r;
      case 3:
        return r.replaceData(0, r.length, e.s), r;
      case 1:
        return fa(r, e.s);
      case 2:
        return (
          r.elm_event_node_ref
            ? (r.elm_event_node_ref.j = e.s)
            : (r.elm_event_node_ref = { j: e.s, p: e.u }),
          r
        );
      case 6:
        for (var $ = e.s, a = 0; a < $.i; a++) r.removeChild(r.childNodes[$.v]);
        return r;
      case 7:
        for (
          var $ = e.s, t = $.e, a = $.v, i = r.childNodes[a];
          a < t.length;
          a++
        )
          r.insertBefore(Ze(t[a], e.u), i);
        return r;
      case 9:
        var $ = e.s;
        if (!$) return r.parentNode.removeChild(r), r;
        var o = $.A;
        return (
          typeof o.r != "undefined" && r.parentNode.removeChild(r),
          (o.s = fa(r, $.w)),
          r
        );
      case 8:
        return Bs(r, e);
      case 5:
        return e.s(r);
      default:
        re(10);
    }
  }
  function Is(r, e, t) {
    var a = r.parentNode,
      i = Ze(e, t);
    return (
      i.elm_event_node_ref || (i.elm_event_node_ref = r.elm_event_node_ref),
      a && i !== r && a.replaceChild(i, r),
      i
    );
  }
  function Bs(r, e) {
    var t = e.s,
      a = xs(t.y, e);
    r = fa(r, t.w);
    for (var i = t.x, $ = 0; $ < i.length; $++) {
      var o = i[$],
        l = o.A,
        f = l.c === 2 ? l.s : Ze(l.z, e.u);
      r.insertBefore(f, r.childNodes[o.r]);
    }
    return a && si(r, a), r;
  }
  function xs(r, e) {
    if (!!r) {
      for (var t = gr.createDocumentFragment(), a = 0; a < r.length; a++) {
        var i = r[a],
          $ = i.A;
        si(t, $.c === 2 ? $.s : Ze($.z, e.u));
      }
      return t;
    }
  }
  function Qe(r) {
    if (r.nodeType === 3) return mi(r.textContent);
    if (r.nodeType !== 1) return mi("");
    for (var e = w, t = r.attributes, a = t.length; a--; ) {
      var i = t[a],
        $ = i.name,
        o = i.value;
      e = ne(n(va, $, o), e);
    }
    for (
      var l = r.tagName.toLowerCase(), f = w, m = r.childNodes, a = m.length;
      a--;

    )
      f = ne(Qe(m[a]), f);
    return g(Yr, l, e, f);
  }
  function Fs(r) {
    for (var e = r.e, t = e.length, a = new Array(t), i = 0; i < t; i++)
      a[i] = e[i].b;
    return { $: 1, c: r.c, d: r.d, e: a, f: r.f, b: r.b };
  }
  var As = s(function (r, e) {
      return r & e;
    }),
    Ts = s(function (r, e) {
      return r | e;
    }),
    fD = s(function (r, e) {
      return r ^ e;
    });
  function sD(r) {
    return ~r;
  }
  var Rs = s(function (r, e) {
      return e << r;
    }),
    mD = s(function (r, e) {
      return e >> r;
    }),
    Hs = s(function (r, e) {
      return e >>> r;
    });
  function Co(r) {
    return r;
  }
  var Ro = ar(function (r, e, t, a) {
      return st(
        e,
        a,
        g($l, Or(t), Io(), r.init),
        Il(r.update),
        ol(r.subscriptions),
        function (i, $) {
          var o = r.view,
            l = gr.title,
            f = a && a.node ? a.node : re(0),
            m = Qe(f),
            h = Ia($),
            d,
            S = gr.createElement("div");
          f.parentNode.insertBefore(S, f.nextSibling);
          var y = Qe(S);
          return (
            ($.popout.a = i),
            ma($, function (E) {
              var B = n(gi, qn, o(uu(E))),
                F = pn(m, B);
              (f = bn(f, m, F, i)), (m = B);
              var A = Ia(E);
              xo(h, A), (h = A);
              var k = ou(E),
                Y = pn(y, k);
              if (((S = bn(S, y, Y, i)), (y = k), !E.popout.b)) {
                d = void 0;
                return;
              }
              (gr = E.popout.b), d || (d = Qe(E.popout.b));
              var Q = Wu(E),
                X = pn(d, Q);
              bn(E.popout.b.body, d, X, i), (d = Q), (gr = document);
            })
          );
        }
      );
    }),
    Ho = ar(function (r, e, t, a) {
      return st(
        e,
        a,
        g($l, Or(t), Io(), r.init),
        Il(r.update),
        ol(r.subscriptions),
        function (i, $) {
          var o =
              r.setup &&
              r.setup(function (y) {
                return i(qn(y));
              }),
            l = r.view,
            f = gr.title,
            m = gr.body,
            h = Qe(m),
            d = Ia($),
            S;
          return (
            ($.popout.a = i),
            ma($, function (y) {
              On = o;
              var E = l(uu(y)),
                B = Yr("body")(w)(G(n(rr, gi(qn), E.body), ne(ou(y), w))),
                F = pn(h, B);
              (m = bn(m, h, F, i)),
                (h = B),
                (On = 0),
                f !== E.title && (gr.title = f = E.title);
              var A = Ia(y);
              if ((xo(d, A), (d = A), !y.popout.b)) {
                S = void 0;
                return;
              }
              (gr = y.popout.b), S || (S = Qe(y.popout.b));
              var k = Wu(y),
                Y = pn(S, k);
              bn(y.popout.b.body, S, Y, i), (S = k), (gr = document);
            })
          );
        }
      );
    });
  function Io() {
    return { b: void 0, a: void 0 };
  }
  function ks(r) {
    return !!r.b;
  }
  function Ls(r) {
    return Ir(function (e) {
      Ps(r), e(Ur(sr));
    });
  }
  function Ps(r) {
    var e = Vm,
      t = Um,
      a = screen.width - e,
      i = screen.height - t,
      $ = window.open(
        "",
        "",
        "width=" + e + ",height=" + t + ",left=" + a + ",top=" + i
      ),
      o = $.document;
    (o.title = "Elm Debugger"),
      o.addEventListener("keydown", function (f) {
        f.metaKey && f.which === 82 && window.location.reload(),
          f.key === "ArrowUp" && (r.a(pm), f.preventDefault()),
          f.key === "ArrowDown" && (r.a(mm), f.preventDefault());
      }),
      window.addEventListener("unload", l),
      $.addEventListener("unload", function () {
        (r.b = void 0), r.a(Wn), window.removeEventListener("unload", l);
      });
    function l() {
      (r.b = void 0), r.a(Wn), $.close();
    }
    r.b = o;
  }
  function Js(r) {
    return Ir(function (e) {
      if (r.b) {
        var t = r.b.getElementById("elm-debugger-sidebar");
        t && t.scrollTop !== 0 && (t.scrollTop = 0);
      }
      e(Ur(sr));
    });
  }
  var zs = s(function (r, e) {
    return Ir(function (t) {
      if (e.b) {
        var a = e.b.getElementById(r);
        a && a.scrollIntoView(!1);
      }
      t(Ur(sr));
    });
  });
  function Os(r) {
    return Ir(function (e) {
      var t = r.b || document,
        a = t.createElement("input");
      a.setAttribute("type", "file"),
        a.setAttribute("accept", "text/json"),
        (a.style.display = "none"),
        a.addEventListener("change", function (i) {
          var $ = new FileReader();
          ($.onload = function (o) {
            e(Ur(o.target.result));
          }),
            $.readAsText(i.target.files[0]),
            t.body.removeChild(a);
        }),
        t.body.appendChild(a),
        a.click();
    });
  }
  var Us = s(function (r, e) {
    return Ir(function (t) {
      var a = "history-" + r + ".txt",
        i = JSON.stringify(e),
        $ = "text/plain;charset=utf-8",
        o = Ur(sr);
      if (navigator.msSaveBlob)
        return navigator.msSaveBlob(new Blob([i], { type: $ }), a), t(o);
      var l = document.createElement("a");
      l.setAttribute("href", "data:" + $ + "," + encodeURIComponent(i)),
        l.setAttribute("download", a),
        (l.style.display = "none"),
        document.body.appendChild(l),
        l.click(),
        document.body.removeChild(l),
        t(o);
    });
  });
  function Di(r) {
    if (typeof r == "boolean") return r ? "True" : "False";
    if (typeof r == "number") return r + "";
    if (typeof r == "string") return '"' + sa(r, !1) + '"';
    if (r instanceof String) return "'" + sa(r, !0) + "'";
    if (
      typeof r != "object" ||
      r === null ||
      !("$" in r) ||
      typeof r.$ == "number"
    )
      return "\u2026";
    var e = r.$.charCodeAt(0);
    if (
      e === 35 ||
      (97 <= e && e <= 122) ||
      [
        "Array_elm_builtin",
        "Set_elm_builtin",
        "RBNode_elm_builtin",
        "RBEmpty_elm_builtin",
      ].indexOf(r.$) >= 0
    )
      return "\u2026";
    var t = Object.keys(r);
    switch (t.length) {
      case 1:
        return r.$;
      case 2:
        return r.$ + " " + Di(r.a);
      default:
        return r.$ + " \u2026 " + Di(r[t[t.length - 1]]);
    }
  }
  function Ke(r) {
    if (typeof r == "boolean") return g(Dn, R(r ? "True" : "False"), !0, w);
    if (typeof r == "number") return _a(r + "");
    if (typeof r == "string") return Zo('"' + sa(r, !1) + '"');
    if (r instanceof String) return Zo("'" + sa(r, !0) + "'");
    if (typeof r == "object" && "$" in r) {
      var e = r.$;
      if (e === "::" || e === "[]") return g(nn, gm, !0, n(rr, Ke, r));
      if (e === "Set_elm_builtin") return g(nn, dm, !0, g(zm, Bo, w, r));
      if (e === "RBNode_elm_builtin" || e == "RBEmpty_elm_builtin")
        return n(yn, !0, g(jn, Vs, w, r));
      if (e === "Array_elm_builtin") return g(nn, sm, !0, g(bt, Bo, w, r));
      if (typeof e == "number") return _a("<internals>");
      var t = e.charCodeAt(0);
      if (t === 35 || (65 <= t && t <= 90)) {
        var a = w;
        for (var i in r) i !== "$" && (a = ne(Ke(r[i]), a));
        return g(Dn, t === 35 ? j : R(e), !0, yr(a));
      }
      return _a("<internals>");
    }
    if (typeof r == "object") {
      var $ = Pi;
      for (var i in r) $ = g(Da, i, Ke(r[i]), $);
      return n(Yn, !0, $);
    }
    return _a("<internals>");
  }
  var Bo = s(function (e, t) {
      return ne(Ke(e), t);
    }),
    Vs = I(function (r, e, t) {
      return ne(p(Ke(r), Ke(e)), t);
    });
  function sa(r, e) {
    var t = r
      .replace(/\\/g, "\\\\")
      .replace(/\n/g, "\\n")
      .replace(/\t/g, "\\t")
      .replace(/\r/g, "\\r")
      .replace(/\v/g, "\\v")
      .replace(/\0/g, "\\0");
    return e ? t.replace(/\'/g, "\\'") : t.replace(/\"/g, '\\"');
  }
  function xo(r, e) {
    if (r !== e) {
      for (var t = Ao(r), a = Ao(e), i = 0; i < t.length; i++)
        document.removeEventListener(t[i], Fo, !0);
      for (var i = 0; i < a.length; i++)
        document.addEventListener(a[i], Fo, !0);
    }
  }
  function Fo(r) {
    if (!(r.type === "keydown" && r.metaKey && r.which === 82)) {
      for (
        var e = r.type === "scroll" || r.type === "wheel", t = r.target;
        t;
        t = t.parentNode
      )
        if (
          e ? t.id === "elm-debugger-details" : t.id === "elm-debugger-overlay"
        )
          return;
      r.stopPropagation(), r.preventDefault();
    }
  }
  function Ao(r) {
    return r === Go ? [] : r === ha ? To : js;
  }
  var To = [
      "click",
      "dblclick",
      "mousemove",
      "mouseup",
      "mousedown",
      "mouseenter",
      "mouseleave",
      "touchstart",
      "touchend",
      "touchcancel",
      "touchmove",
      "pointerdown",
      "pointerup",
      "pointerover",
      "pointerout",
      "pointerenter",
      "pointerleave",
      "pointermove",
      "pointercancel",
      "dragstart",
      "drag",
      "dragend",
      "dragenter",
      "dragover",
      "dragleave",
      "drop",
      "keyup",
      "keydown",
      "keypress",
      "input",
      "change",
      "focus",
      "blur",
    ],
    js = To.concat("wheel", "scroll"),
    Ro,
    Ns =
      Ro ||
      ar(function (r, e, t, a) {
        return st(e, a, r.init, r.update, r.subscriptions, function (i, $) {
          var o = r.view,
            l = a && a.node ? a.node : re(0),
            f = Qe(l);
          return ma($, function (m) {
            var h = o(m),
              d = pn(f, h);
            (l = bn(l, f, d, i)), (f = h);
          });
        });
      }),
    Ho,
    Ws =
      Ho ||
      ar(function (r, e, t, a) {
        return st(e, a, r.init, r.update, r.subscriptions, function (i, $) {
          var o = r.setup && r.setup(i),
            l = r.view,
            f = gr.title,
            m = gr.body,
            h = Qe(m);
          return ma($, function (d) {
            On = o;
            var S = l(d),
              y = Yr("body")(w)(S.body),
              E = pn(h, y);
            (m = bn(m, h, E, i)),
              (h = y),
              (On = 0),
              f !== S.title && (gr.title = f = S.title);
          });
        });
      }),
    Ys =
      typeof cancelAnimationFrame != "undefined"
        ? cancelAnimationFrame
        : function (r) {
            clearTimeout(r);
          },
    pt =
      typeof requestAnimationFrame != "undefined"
        ? requestAnimationFrame
        : function (r) {
            return setTimeout(r, 1e3 / 60);
          };
  function ma(r, e) {
    e(r);
    var t = 0;
    function a() {
      t = t === 1 ? 0 : (pt(a), e(r), 1);
    }
    return function (i, $) {
      (r = i), $ ? (e(r), t === 2 && (t = 1)) : (t === 0 && pt(a), (t = 2));
    };
  }
  function gD(r) {
    var e = r.onUrlChange,
      t = r.onUrlRequest,
      a = function () {
        a.a(e(yi()));
      };
    return Ws({
      setup: function (i) {
        return (
          (a.a = i),
          ze.addEventListener("popstate", a),
          ze.navigator.userAgent.indexOf("Trident") < 0 ||
            ze.addEventListener("hashchange", a),
          s(function ($, o) {
            if (
              !o.ctrlKey &&
              !o.metaKey &&
              !o.shiftKey &&
              o.button < 1 &&
              !$.target &&
              !$.hasAttribute("download")
            ) {
              o.preventDefault();
              var l = $.href,
                f = yi(),
                m = s$(l).a;
              i(
                t(
                  m &&
                    f.protocol === m.protocol &&
                    f.host === m.host &&
                    f.port_.a === m.port_.a
                    ? Pp(m)
                    : Lp(l)
                )
              );
            }
          })
        );
      },
      init: function (i) {
        return g(r.init, i, yi(), a);
      },
      view: r.view,
      update: r.update,
      subscriptions: r.subscriptions,
    });
  }
  function yi() {
    return s$(gr.location.href).a || re(1);
  }
  var dD = s(function (r, e) {
      return n(
        He,
        zt,
        Ir(function () {
          e && history.go(e), r();
        })
      );
    }),
    pD = s(function (r, e) {
      return n(
        He,
        zt,
        Ir(function () {
          history.pushState({}, "", e), r();
        })
      );
    }),
    bD = s(function (r, e) {
      return n(
        He,
        zt,
        Ir(function () {
          history.replaceState({}, "", e), r();
        })
      );
    }),
    ko = {
      addEventListener: function () {},
      removeEventListener: function () {},
    },
    Un = typeof document != "undefined" ? document : ko,
    ze = typeof window != "undefined" ? window : ko,
    hD = I(function (r, e, t) {
      return uo(
        Ir(function (a) {
          function i($) {
            oi(t($));
          }
          return (
            r.addEventListener(e, i, _i && { passive: !0 }),
            function () {
              r.removeEventListener(e, i);
            }
          );
        })
      );
    }),
    _D = s(function (r, e) {
      var t = pe(r, e);
      return Me(t) ? R(t.a) : j;
    });
  function wD() {
    return typeof gr.hidden != "undefined"
      ? { hidden: "hidden", change: "visibilitychange" }
      : typeof gr.mozHidden != "undefined"
      ? { hidden: "mozHidden", change: "mozvisibilitychange" }
      : typeof gr.msHidden != "undefined"
      ? { hidden: "msHidden", change: "msvisibilitychange" }
      : typeof gr.webkitHidden != "undefined"
      ? { hidden: "webkitHidden", change: "webkitvisibilitychange" }
      : { hidden: "hidden", change: "visibilitychange" };
  }
  function DD() {
    return Ir(function (r) {
      var e = pt(function () {
        r(Ur(Date.now()));
      });
      return function () {
        Ys(e);
      };
    });
  }
  function yD() {
    return Ir(function (r) {
      r(Ur(Date.now()));
    });
  }
  function ga(r, e) {
    return Ir(function (t) {
      pt(function () {
        var a = document.getElementById(r);
        t(a ? Ur(e(a)) : Lf(Jp(r)));
      });
    });
  }
  function qs(r) {
    return Ir(function (e) {
      pt(function () {
        e(Ur(r()));
      });
    });
  }
  var SD = s(function (r, e) {
    return ga(e, function (t) {
      return t[r](), sr;
    });
  });
  function MD() {
    return {
      scene: Lo(),
      viewport: {
        x: ze.pageXOffset,
        y: ze.pageYOffset,
        width: Un.documentElement.clientWidth,
        height: Un.documentElement.clientHeight,
      },
    };
  }
  function Lo() {
    var r = Un.body,
      e = Un.documentElement;
    return {
      width: Math.max(
        r.scrollWidth,
        r.offsetWidth,
        e.scrollWidth,
        e.offsetWidth,
        e.clientWidth
      ),
      height: Math.max(
        r.scrollHeight,
        r.offsetHeight,
        e.scrollHeight,
        e.offsetHeight,
        e.clientHeight
      ),
    };
  }
  var ED = s(function (r, e) {
    return qs(function () {
      return ze.scroll(r, e), sr;
    });
  });
  function CD(r) {
    return ga(r, function (e) {
      return {
        scene: { width: e.scrollWidth, height: e.scrollHeight },
        viewport: {
          x: e.scrollLeft,
          y: e.scrollTop,
          width: e.clientWidth,
          height: e.clientHeight,
        },
      };
    });
  }
  var ID = I(function (r, e, t) {
    return ga(r, function (a) {
      return (a.scrollLeft = e), (a.scrollTop = t), sr;
    });
  });
  function BD(r) {
    return ga(r, function (e) {
      var t = e.getBoundingClientRect(),
        a = ze.pageXOffset,
        i = ze.pageYOffset;
      return {
        scene: Lo(),
        viewport: {
          x: a,
          y: i,
          width: Un.documentElement.clientWidth,
          height: Un.documentElement.clientHeight,
        },
        element: {
          x: a + t.left,
          y: i + t.top,
          width: t.width,
          height: t.height,
        },
      };
    });
  }
  function xD(r) {
    return n(
      He,
      zt,
      Ir(function (e) {
        gr.location.reload(r);
      })
    );
  }
  function FD(r) {
    return n(
      He,
      zt,
      Ir(function (e) {
        try {
          ze.location = r;
        } catch (t) {
          gr.location.reload(!1);
        }
      })
    );
  }
  function AD(r) {
    return encodeURIComponent(r);
  }
  function Xs(r) {
    try {
      return R(decodeURIComponent(r));
    } catch (e) {
      return j;
    }
  }
  var b = Hv,
    Vn = Dv,
    bt = I(function (r, e, t) {
      var a = t.c,
        i = t.d,
        $ = s(function (o, l) {
          if (o.$ === "SubTree") {
            var f = o.a;
            return g(Vn, $, l, f);
          } else {
            var m = o.a;
            return g(Vn, r, l, m);
          }
        });
      return g(Vn, $, g(Vn, r, e, i), a);
    }),
    Gs = function (r) {
      return g(bt, b, w, r);
    },
    jn = I(function (r, e, t) {
      r: for (;;) {
        if (t.$ === "RBEmpty_elm_builtin") return e;
        var a = t.b,
          i = t.c,
          $ = t.d,
          o = t.e,
          l = r,
          f = g(r, a, i, g(jn, r, e, o)),
          m = $;
        (r = l), (e = f), (t = m);
        continue r;
      }
    }),
    hn = function (r) {
      return g(
        jn,
        I(function (e, t, a) {
          return n(b, p(e, t), a);
        }),
        w,
        r
      );
    },
    Po = function (r) {
      return g(
        jn,
        I(function (e, t, a) {
          return n(b, e, a);
        }),
        w,
        r
      );
    },
    Si = function (r) {
      var e = r.a;
      return Po(e);
    },
    Jo = { $: "EQ" },
    Zs = { $: "GT" },
    zo = { $: "LT" },
    fe = function (r) {
      return { $: "Err", a: r };
    },
    Mi = s(function (r, e) {
      return { $: "Failure", a: r, b: e };
    }),
    Oo = s(function (r, e) {
      return { $: "Field", a: r, b: e };
    }),
    Uo = s(function (r, e) {
      return { $: "Index", a: r, b: e };
    }),
    ae = function (r) {
      return { $: "Ok", a: r };
    },
    Qs = function (r) {
      return { $: "OneOf", a: r };
    },
    TD = { $: "False" },
    RD = Lv,
    R = function (r) {
      return { $: "Just", a: r };
    },
    j = { $: "Nothing" },
    Ks = af,
    HD = qv,
    kD = Rv,
    Vo = Ff,
    C = io,
    K = s(function (r, e) {
      return n(Kv, r, ua(e));
    }),
    Ei = s(function (r, e) {
      return u(n(Qv, r, e));
    }),
    jo = function (r) {
      return n(
        K,
        `
    `,
        n(
          Ei,
          `
`,
          r
        )
      );
    },
    dr = I(function (r, e, t) {
      r: for (;;)
        if (t.b) {
          var a = t.a,
            i = t.b,
            $ = r,
            o = n(r, a, e),
            l = i;
          (r = $), (e = o), (t = l);
          continue r;
        } else return e;
    }),
    Fe = function (r) {
      return g(
        dr,
        s(function (e, t) {
          return t + 1;
        }),
        0,
        r
      );
    },
    rm = kv,
    LD = xv,
    PD = Pv,
    em = I(function (r, e, t) {
      r: for (;;)
        if (ur(r, e) < 1) {
          var a = r,
            i = e - 1,
            $ = n(b, e, t);
          (r = a), (e = i), (t = $);
          continue r;
        } else return t;
    }),
    da = s(function (r, e) {
      return g(em, r, e, w);
    }),
    pa = s(function (r, e) {
      return g(rm, r, n(da, 0, Fe(e) - 1), e);
    }),
    Ci = cf,
    No = function (r) {
      var e = Ci(r);
      return 97 <= e && e <= 122;
    },
    Wo = function (r) {
      var e = Ci(r);
      return e <= 90 && 65 <= e;
    },
    JD = Xv,
    nm = function (r) {
      return No(r) || Wo(r);
    },
    tm = function (r) {
      var e = Ci(r);
      return e <= 57 && 48 <= e;
    },
    am = function (r) {
      return No(r) || Wo(r) || tm(r);
    },
    yr = function (r) {
      return g(dr, b, w, r);
    },
    im = Gv,
    $m = s(function (r, e) {
      return (
        `

(` +
        (C(r + 1) + (") " + jo(Yo(e))))
      );
    }),
    Yo = function (r) {
      return n(om, r, w);
    },
    om = s(function (r, e) {
      r: for (;;)
        switch (r.$) {
          case "Field":
            var t = r.a,
              o = r.b,
              a = (function () {
                var B = im(t);
                if (B.$ === "Nothing") return !1;
                var F = B.a,
                  A = F.a,
                  k = F.b;
                return nm(A) && n(Ks, am, k);
              })(),
              i = a ? "." + t : "['" + (t + "']"),
              f = o,
              m = n(b, i, e);
            (r = f), (e = m);
            continue r;
          case "Index":
            var $ = r.a,
              o = r.b,
              l = "[" + (C($) + "]"),
              f = o,
              m = n(b, l, e);
            (r = f), (e = m);
            continue r;
          case "OneOf":
            var h = r.a;
            if (h.b)
              if (h.b.b) {
                var d = (function () {
                    return e.b
                      ? "The Json.Decode.oneOf at json" + n(K, "", yr(e))
                      : "Json.Decode.oneOf";
                  })(),
                  E = d + (" failed in the following " + (C(Fe(h)) + " ways:"));
                return n(
                  K,
                  `

`,
                  n(b, E, n(pa, $m, h))
                );
              } else {
                var o = h.a,
                  f = o,
                  m = e;
                (r = f), (e = m);
                continue r;
              }
            else
              return (
                "Ran into a Json.Decode.oneOf with no possibilities" +
                (function () {
                  return e.b ? " at json" + n(K, "", yr(e)) : "!";
                })()
              );
          default:
            var S = r.a,
              y = r.b,
              E = (function () {
                return e.b
                  ? "Problem with the value at json" +
                      (n(K, "", yr(e)) +
                        `:

    `)
                  : `Problem with the given value:

`;
              })();
            return (
              E +
              (jo(n(Vo, 4, y)) +
                (`

` +
                  S))
            );
        }
    }),
    Br = 32,
    Oe = ar(function (r, e, t, a) {
      return { $: "Array_elm_builtin", a: r, b: e, c: t, d: a };
    }),
    rn = sv,
    qo = jv,
    zD = zv,
    Ii = s(function (r, e) {
      return ao(e) / ao(r);
    }),
    ba = Vv,
    Xr = qo(n(Ii, 2, Br)),
    ht = M(Oe, 0, Xr, rn, rn),
    Xo = dv,
    _t = function (r) {
      return { $: "Leaf", a: r };
    },
    OD = s(function (r, e) {
      return r(e);
    }),
    UD = s(function (r, e) {
      return e(r);
    }),
    VD = Cv,
    _n = Nv,
    he = gv,
    jD = Fv,
    Ae = s(function (r, e) {
      return ur(r, e) > 0 ? r : e;
    }),
    ND = Jv,
    Nn = function (r) {
      return { $: "SubTree", a: r };
    },
    Bi = pv,
    um = s(function (r, e) {
      r: for (;;) {
        var t = n(Bi, Br, r),
          a = t.a,
          i = t.b,
          $ = n(b, Nn(a), e);
        if (i.b) {
          var o = i,
            l = $;
          (r = o), (e = l);
          continue r;
        } else return yr($);
      }
    }),
    lm = function (r) {
      var e = r.a;
      return e;
    },
    cm = s(function (r, e) {
      r: for (;;) {
        var t = qo(e / Br);
        if (t === 1) return n(Bi, Br, r).a;
        var a = n(um, r, w),
          i = t;
        (r = a), (e = i);
        continue r;
      }
    }),
    xi = s(function (r, e) {
      if (e.nodeListSize) {
        var t = e.nodeListSize * Br,
          a = _n(n(Ii, Br, t - 1)),
          i = r ? yr(e.nodeList) : e.nodeList,
          $ = n(cm, i, e.nodeListSize);
        return M(Oe, he(e.tail) + t, n(Ae, 5, a * Xr), $, e.tail);
      } else return M(Oe, he(e.tail), Xr, rn, e.tail);
    }),
    WD = Ov,
    YD = Bv,
    vm = mr(function (r, e, t, a, i) {
      r: for (;;) {
        if (e < 0)
          return n(xi, !1, {
            nodeList: a,
            nodeListSize: (t / Br) | 0,
            tail: i,
          });
        var $ = _t(g(Xo, Br, e, r)),
          o = r,
          l = e - Br,
          f = t,
          m = n(b, $, a),
          h = i;
        (r = o), (e = l), (t = f), (a = m), (i = h);
        continue r;
      }
    }),
    qD = Uv,
    fm = s(function (r, e) {
      if (r <= 0) return ht;
      var t = r % Br,
        a = g(Xo, t, r - t, e),
        i = r - t - Br;
      return N(vm, e, i, r, w, a);
    }),
    XD = { $: "True" },
    Me = function (r) {
      return r.$ === "Ok";
    },
    wt = yf,
    Te = Mf,
    wn = Ef,
    en = ff,
    Fi = function (r) {
      switch (r.$) {
        case "Normal":
          return 0;
        case "MayStopPropagation":
          return 1;
        case "MayPreventDefault":
          return 2;
        default:
          return 3;
      }
    },
    sm = { $: "ArraySeq" },
    ha = { $: "BlockMost" },
    Go = { $: "BlockNone" },
    Dn = I(function (r, e, t) {
      return { $: "Constructor", a: r, b: e, c: t };
    }),
    yn = s(function (r, e) {
      return { $: "Dictionary", a: r, b: e };
    }),
    mm = { $: "Down" },
    gm = { $: "ListSeq" },
    Wn = { $: "NoOp" },
    _a = function (r) {
      return { $: "Primitive", a: r };
    },
    Yn = s(function (r, e) {
      return { $: "Record", a: r, b: e };
    }),
    Zo = function (r) {
      return { $: "S", a: r };
    },
    nn = I(function (r, e, t) {
      return { $: "Sequence", a: r, b: e, c: t };
    }),
    dm = { $: "SetSeq" },
    pm = { $: "Up" },
    qn = function (r) {
      return { $: "UserMsg", a: r };
    },
    Qo = { $: "Export" },
    Ko = { $: "Import" },
    bm = { $: "Open" },
    hm = function (r) {
      return { $: "OverlayMsg", a: r };
    },
    Ai = { $: "Resume" },
    ru = function (r) {
      return r.$ !== "Running";
    },
    Dt = function (r) {
      return r.numMessages;
    },
    eu = function (r) {
      return { $: "Accept", a: r };
    },
    _m = s(function (r, e) {
      return { $: "Choose", a: r, b: e };
    }),
    Z = Yr("div"),
    se = Or,
    tn = s(function (r, e) {
      return n(di, r, se(e));
    }),
    yt = tn("id"),
    wm = function (r) {
      return { $: "Normal", a: r };
    },
    Ti = wo,
    wa = s(function (r, e) {
      return n(Ti, r, wm(e));
    }),
    _e = function (r) {
      return n(wa, "click", en(r));
    },
    pr = Yr("span"),
    Dm = $s,
    D = Dm,
    Xn = mi,
    H = Xn,
    ym = Yr("a"),
    Sm = `
The good news is that having values like this in your message type is not
so great in the long run. You are better off using simpler data, like
`,
    Mm = `
function can pattern match on that data and call whatever functions, JSON
decoders, etc. you need. This makes the code much more explicit and easy to
follow for other readers (or you in a few months!)
`,
    nu = function (r) {
      return n(tn, "href", fs(r));
    },
    tu = ar(function (r, e, t, a) {
      if (a.b) {
        var i = a.a,
          $ = a.b;
        if ($.b) {
          var o = $.a,
            l = $.b;
          if (l.b) {
            var f = l.a,
              m = l.b;
            if (m.b) {
              var h = m.a,
                d = m.b,
                S = t > 500 ? g(dr, r, e, yr(d)) : M(tu, r, e, t + 1, d);
              return n(r, i, n(r, o, n(r, f, n(r, h, S))));
            } else return n(r, i, n(r, o, n(r, f, e)));
          } else return n(r, i, n(r, o, e));
        } else return n(r, i, e);
      } else return e;
    }),
    xr = I(function (r, e, t) {
      return M(tu, r, e, 0, t);
    }),
    rr = s(function (r, e) {
      return g(
        xr,
        s(function (t, a) {
          return n(b, r(t), a);
        }),
        w,
        e
      );
    }),
    St = Yr("p"),
    Ri = Yr("ul"),
    Em = Yr("code"),
    an = function (r) {
      return n(Em, w, u([H(r)]));
    },
    Cm = function (r) {
      if (r.b)
        if (r.b.b)
          if (r.b.b.b) {
            var $ = r.a,
              o = r.b;
            return n(K, ", ", G(o, u([" and " + $])));
          } else {
            var t = r.a,
              a = r.b,
              i = a.a;
            return t + (" and " + i);
          }
        else {
          var e = r.a;
          return e;
        }
      else return "";
    },
    Mt = Yr("li"),
    Im = function (r) {
      switch (r.$) {
        case "Function":
          return "functions";
        case "Decoder":
          return "JSON decoders";
        case "Task":
          return "tasks";
        case "Process":
          return "processes";
        case "Socket":
          return "web sockets";
        case "Request":
          return "HTTP requests";
        case "Program":
          return "programs";
        default:
          return "virtual DOM values";
      }
    },
    Bm = function (r) {
      var e = r.name,
        t = r.problems;
      return n(
        Mt,
        w,
        u([an(e), H(" can contain " + (Cm(n(rr, Im, t)) + "."))])
      );
    },
    xm = function (r) {
      var e = r.message,
        t = r.problems;
      return u([
        n(
          St,
          w,
          u([
            H("The "),
            an(e),
            H(
              " type of your program cannot be reliably serialized for history files."
            ),
          ])
        ),
        n(
          St,
          w,
          u([
            H(
              "Functions cannot be serialized, nor can values that contain functions. This is a problem in these places:"
            ),
          ])
        ),
        n(Ri, w, n(rr, Bm, t)),
        n(
          St,
          w,
          u([
            H(Sm),
            n(
              ym,
              u([nu("https://guide.elm-lang.org/types/custom_types.html")]),
              u([H("custom types")])
            ),
            H(", in your messages. From there, your "),
            an("update"),
            H(Mm),
          ])
        ),
      ]);
    },
    Fm = gi,
    ie = Fm,
    Am = { $: "Cancel" },
    au = { $: "Proceed" },
    Hi = Yr("button"),
    Tm = function (r) {
      var e = s(function (a, i) {
          return n(Hi, u([n(D, "margin-right", "20px"), _e(a)]), u([H(i)]));
        }),
        t = (function () {
          if (r.$ === "Accept") {
            var a = r.a;
            return u([n(e, au, a)]);
          } else {
            var i = r.a,
              a = r.b;
            return u([n(e, Am, i), n(e, au, a)]);
          }
        })();
      return n(
        Z,
        u([
          n(D, "height", "60px"),
          n(D, "line-height", "60px"),
          n(D, "text-align", "right"),
          n(D, "background-color", "rgb(50, 50, 50)"),
        ]),
        t
      );
    },
    ki = ar(function (r, e, t, a) {
      return n(
        Z,
        u([
          yt("elm-debugger-overlay"),
          n(D, "position", "fixed"),
          n(D, "top", "0"),
          n(D, "left", "0"),
          n(D, "width", "100vw"),
          n(D, "height", "100vh"),
          n(D, "color", "white"),
          n(D, "pointer-events", "none"),
          n(
            D,
            "font-family",
            "'Trebuchet MS', 'Lucida Grande', 'Bitstream Vera Sans', 'Helvetica Neue', sans-serif"
          ),
          n(D, "z-index", "2147483647"),
        ]),
        u([
          n(
            Z,
            u([
              n(D, "position", "absolute"),
              n(D, "width", "600px"),
              n(D, "height", "100vh"),
              n(D, "padding-left", "calc(50% - 300px)"),
              n(D, "padding-right", "calc(50% - 300px)"),
              n(D, "background-color", "rgba(200, 200, 200, 0.7)"),
              n(D, "pointer-events", "auto"),
            ]),
            u([
              n(
                Z,
                u([
                  n(D, "font-size", "36px"),
                  n(D, "height", "80px"),
                  n(D, "background-color", "rgb(50, 50, 50)"),
                  n(D, "padding-left", "22px"),
                  n(D, "vertical-align", "middle"),
                  n(D, "line-height", "80px"),
                ]),
                u([H(e)])
              ),
              n(
                Z,
                u([
                  yt("elm-debugger-details"),
                  n(D, "padding", " 8px 20px"),
                  n(D, "overflow-y", "auto"),
                  n(D, "max-height", "calc(100vh - 156px)"),
                  n(D, "background-color", "rgb(61, 61, 61)"),
                ]),
                t
              ),
              n(ie, r.wrap, Tm(a)),
            ])
          ),
        ])
      );
    }),
    Fr = s(function (r, e) {
      return n(va, cs(r), ss(e));
    }),
    GD = function (r) {
      return -r;
    },
    Et = s(function (r, e) {
      return n(_o, r, pi(e));
    }),
    ir = io,
    Sn = ar(function (r, e, t, a) {
      return M(
        Et,
        "http://www.w3.org/2000/svg",
        "polygon",
        u([
          n(Fr, "points", a),
          n(
            Fr,
            "transform",
            "translate(" +
              (ir(r) + (" " + (ir(e) + (") rotate(" + (ir(-t) + ")")))))
          ),
        ]),
        w
      );
    }),
    Rm = M(
      Et,
      "http://www.w3.org/2000/svg",
      "svg",
      u([
        n(Fr, "viewBox", "-300 -300 600 600"),
        n(Fr, "xmlns", "http://www.w3.org/2000/svg"),
        n(Fr, "fill", "currentColor"),
        n(Fr, "width", "24px"),
        n(Fr, "height", "24px"),
      ]),
      u([
        M(
          Et,
          "http://www.w3.org/2000/svg",
          "g",
          u([n(Fr, "transform", "scale(1 -1)")]),
          u([
            M(Sn, 0, -210, 0, "-280,-90 0,190 280,-90"),
            M(Sn, -210, 0, 90, "-280,-90 0,190 280,-90"),
            M(Sn, 207, 207, 45, "-198,-66 0,132 198,-66"),
            M(Sn, 150, 0, 0, "-130,0 0,-130 130,0 0,130"),
            M(Sn, -89, 239, 0, "-191,61 69,61 191,-61 -69,-61"),
            M(Sn, 0, 106, 180, "-130,-44 0,86  130,-44"),
            M(Sn, 256, -150, 270, "-130,-44 0,86  130,-44"),
          ])
        ),
      ])
    ),
    Ue = Zv,
    iu = s(function (r, e) {
      var t = C(e),
        a = C(2 + Ue(t));
      return n(
        Z,
        u([
          n(D, "position", "fixed"),
          n(D, "bottom", "2em"),
          n(D, "right", "2em"),
          n(D, "width", "calc(42px + " + (a + "ch)")),
          n(D, "height", "36px"),
          n(D, "background-color", "#1293D8"),
          n(D, "color", "white"),
          n(D, "font-family", "monospace"),
          n(D, "pointer-events", "auto"),
          n(D, "z-index", "2147483647"),
          n(D, "display", "flex"),
          n(D, "justify-content", "center"),
          n(D, "align-items", "center"),
          n(D, "cursor", "pointer"),
          _e(r.open),
        ]),
        u([
          Rm,
          n(
            pr,
            u([
              n(D, "padding-left", "calc(1ch + 6px)"),
              n(D, "padding-right", "1ch"),
            ]),
            u([H(t)])
          ),
        ])
      );
    }),
    Hm = `
The messages in this history do not match the messages handled by your
program. I noticed changes in the following types:
`,
    km = `
This history seems old. It will work with this program, but some
messages have been added since the history was created:
`,
    Lm = s(function (r, e) {
      if (e.b) {
        var t = e.a,
          a = e.b,
          i = s(function (o, l) {
            return n(b, r, n(b, o, l));
          }),
          $ = g(xr, i, w, a);
        return n(b, t, $);
      } else return w;
    }),
    Li = s(function (r, e) {
      var t = n(rr, an, yr(r));
      if (t.b)
        if (t.b.b)
          if (t.b.b.b) {
            var l = t.a,
              f = t.b;
            return n(
              Mt,
              w,
              n(b, H(e), G(n(Lm, H(", "), yr(f)), u([H(", and "), l, H(".")])))
            );
          } else {
            var i = t.a,
              $ = t.b,
              o = $.a;
            return n(Mt, w, u([H(e), o, H(" and "), i, H(".")]));
          }
        else {
          var a = t.a;
          return n(Mt, w, u([H(e), a, H(".")]));
        }
      else return H("");
    }),
    Pm = function (r) {
      return n(
        Mt,
        u([n(D, "margin", "8px 0")]),
        (function () {
          if (r.$ === "AliasChange") {
            var e = r.a;
            return u([n(pr, u([n(D, "font-size", "1.5em")]), u([an(e)]))]);
          } else {
            var e = r.a,
              t = r.b.removed,
              a = r.b.changed,
              i = r.b.added,
              $ = r.b.argsMatch;
            return u([
              n(pr, u([n(D, "font-size", "1.5em")]), u([an(e)])),
              n(
                Ri,
                u([
                  n(D, "list-style-type", "disc"),
                  n(D, "padding-left", "2em"),
                ]),
                u([
                  n(Li, t, "Removed "),
                  n(Li, a, "Changed "),
                  n(Li, i, "Added "),
                ])
              ),
              H(
                $
                  ? ""
                  : "This may be due to the fact that the type variable names changed."
              ),
            ]);
          }
        })()
      );
    },
    $u = s(function (r, e) {
      switch (e.$) {
        case "CorruptHistory":
          return u([
            H(
              "Looks like this history file is corrupt. I cannot understand it."
            ),
          ]);
        case "VersionChanged":
          var t = e.a,
            a = e.b;
          return u([
            H(
              "This history was created with Elm " +
                (t + (", but you are using Elm " + (a + " right now.")))
            ),
          ]);
        case "MessageChanged":
          var t = e.a,
            a = e.b;
          return u([
            H(
              "To import some other history, the overall message type must be the same. The old history has "
            ),
            an(t),
            H(" messages, but the new program works with "),
            an(a),
            H(" messages."),
          ]);
        default:
          var i = e.a;
          return u([
            n(St, w, u([H(r ? Hm : km)])),
            n(
              Ri,
              u([
                n(D, "list-style-type", "none"),
                n(D, "padding-left", "20px"),
              ]),
              n(rr, Pm, i)
            ),
          ]);
      }
    }),
    Jm = mr(function (r, e, t, a, i) {
      switch (i.$) {
        case "None":
          return t
            ? H("")
            : e
            ? n(
                Z,
                u([
                  yt("elm-debugger-overlay"),
                  n(D, "position", "fixed"),
                  n(D, "top", "0"),
                  n(D, "left", "0"),
                  n(D, "width", "100vw"),
                  n(D, "height", "100vh"),
                  n(D, "cursor", "pointer"),
                  n(D, "display", "flex"),
                  n(D, "align-items", "center"),
                  n(D, "justify-content", "center"),
                  n(D, "pointer-events", "auto"),
                  n(D, "background-color", "rgba(200, 200, 200, 0.7)"),
                  n(D, "color", "white"),
                  n(
                    D,
                    "font-family",
                    "'Trebuchet MS', 'Lucida Grande', 'Bitstream Vera Sans', 'Helvetica Neue', sans-serif"
                  ),
                  n(D, "z-index", "2147483646"),
                  _e(r.resume),
                ]),
                u([
                  n(
                    pr,
                    u([n(D, "font-size", "80px")]),
                    u([H("Click to Resume")])
                  ),
                  n(iu, r, a),
                ])
              )
            : n(iu, r, a);
        case "BadMetadata":
          var $ = i.a;
          return M(ki, r, "Cannot use Import or Export", xm($), eu("Ok"));
        case "BadImport":
          var o = i.a;
          return M(ki, r, "Cannot Import History", n($u, !0, o), eu("Ok"));
        default:
          var o = i.a;
          return M(
            ki,
            r,
            "Warning",
            n($u, !1, o),
            n(_m, "Cancel", "Import Anyway")
          );
      }
    }),
    ou = function (r) {
      return N(
        Jm,
        {
          exportHistory: Qo,
          importHistory: Ko,
          open: bm,
          resume: Ai,
          wrap: hm,
        },
        ru(r.state),
        ks(r.popout),
        Dt(r.history),
        r.overlay
      );
    },
    Re = { $: "RBEmpty_elm_builtin" },
    Pi = Re,
    zm = I(function (r, e, t) {
      var a = t.a;
      return g(
        jn,
        I(function (i, $, o) {
          return n(r, i, o);
        }),
        e,
        a
      );
    }),
    Om = function (r) {
      if (r.$ === "Running") {
        var e = r.a;
        return e;
      } else {
        var e = r.b;
        return e;
      }
    },
    uu = function (r) {
      return Om(r.state);
    },
    Um = 420,
    Vm = 900,
    $e = { $: "Black" },
    er = mr(function (r, e, t, a, i) {
      return { $: "RBNode_elm_builtin", a: r, b: e, c: t, d: a, e: i };
    }),
    kr = { $: "Red" },
    Gn = mr(function (r, e, t, a, i) {
      if (i.$ === "RBNode_elm_builtin" && i.a.$ === "Red") {
        var $ = i.a,
          o = i.b,
          l = i.c,
          f = i.d,
          m = i.e;
        if (a.$ === "RBNode_elm_builtin" && a.a.$ === "Red") {
          var h = a.a,
            d = a.b,
            S = a.c,
            y = a.d,
            E = a.e;
          return N(er, kr, e, t, N(er, $e, d, S, y, E), N(er, $e, o, l, f, m));
        } else return N(er, r, o, l, N(er, kr, e, t, a, f), m);
      } else if (
        a.$ === "RBNode_elm_builtin" &&
        a.a.$ === "Red" &&
        a.d.$ === "RBNode_elm_builtin" &&
        a.d.a.$ === "Red"
      ) {
        var B = a.a,
          d = a.b,
          S = a.c,
          F = a.d,
          A = F.a,
          k = F.b,
          Y = F.c,
          Q = F.d,
          X = F.e,
          E = a.e;
        return N(er, kr, d, S, N(er, $e, k, Y, Q, X), N(er, $e, e, t, E, i));
      } else return N(er, r, e, t, a, i);
    }),
    lu = Tv,
    Ji = I(function (r, e, t) {
      if (t.$ === "RBEmpty_elm_builtin") return N(er, kr, r, e, Re, Re);
      var a = t.a,
        i = t.b,
        $ = t.c,
        o = t.d,
        l = t.e,
        f = n(lu, r, i);
      switch (f.$) {
        case "LT":
          return N(Gn, a, i, $, g(Ji, r, e, o), l);
        case "EQ":
          return N(er, a, i, e, o, l);
        default:
          return N(Gn, a, i, $, o, g(Ji, r, e, l));
      }
    }),
    Da = I(function (r, e, t) {
      var a = g(Ji, r, e, t);
      if (a.$ === "RBNode_elm_builtin" && a.a.$ === "Red") {
        var i = a.a,
          $ = a.b,
          o = a.c,
          l = a.d,
          f = a.e;
        return N(er, $e, $, o, l, f);
      } else {
        var m = a;
        return m;
      }
    }),
    cu = function (r) {
      var e = r.state;
      if (e.$ === "Running") return r.history;
      var t = e.e;
      return t;
    },
    Ee = function (r) {
      return Yr(pi(r));
    },
    vu = Ee,
    jm = { $: "DragEnd" },
    fu = function (r) {
      if (r.$ === "Horizontal") {
        var e = r.a;
        return e;
      } else {
        var e = r.a;
        return e;
      }
    },
    Nm = function (r) {
      return { $: "Drag", a: r };
    },
    Wm = mr(function (r, e, t, a, i) {
      return { down: t, height: i, width: a, x: r, y: e };
    }),
    _r = _f,
    su = s(function (r, e) {
      return g(xr, _r, e, r);
    }),
    zi = gf,
    mu = function (r) {
      return n(su, u(["currentTarget", "ownerDocument", "defaultView", r]), zi);
    },
    gu = mf,
    Ym = If,
    qm = n(
      wa,
      "mousemove",
      n(
        Te,
        Nm,
        dn(
          Ym,
          Wm,
          n(_r, "pageX", zi),
          n(_r, "pageY", zi),
          n(
            _r,
            "buttons",
            n(
              Te,
              function (r) {
                return r === 1;
              },
              gu
            )
          ),
          mu("innerWidth"),
          mu("innerHeight")
        )
      )
    ),
    Xm = function (r) {
      return n(wa, "mouseup", en(r));
    },
    Gm = function (r) {
      var e = fu(r);
      return e.$ === "Static" ? w : u([qm, Xm(jm)]);
    },
    Zm = function (r) {
      return r.$ === "Horizontal" ? "row" : "column-reverse";
    },
    du = { $: "DragStart" },
    pu = function (r) {
      return n(wa, "mousedown", en(r));
    },
    Zn = function (r) {
      return ir(100 * r) + "%";
    },
    Qm = function (r) {
      if (r.$ === "Horizontal") {
        var e = r.b;
        return n(
          Z,
          u([
            n(D, "position", "absolute"),
            n(D, "top", "0"),
            n(D, "left", Zn(e)),
            n(D, "margin-left", "-5px"),
            n(D, "width", "10px"),
            n(D, "height", "100%"),
            n(D, "cursor", "col-resize"),
            pu(du),
          ]),
          w
        );
      } else {
        var t = r.c;
        return n(
          Z,
          u([
            n(D, "position", "absolute"),
            n(D, "top", Zn(t)),
            n(D, "left", "0"),
            n(D, "margin-top", "-5px"),
            n(D, "width", "100%"),
            n(D, "height", "10px"),
            n(D, "cursor", "row-resize"),
            pu(du),
          ]),
          w
        );
      }
    },
    Km = function (r) {
      return { $: "TweakExpandoModel", a: r };
    },
    rg = function (r) {
      return { $: "TweakExpandoMsg", a: r };
    },
    eg = function (r) {
      if (r.$ === "Horizontal") {
        var e = r.b;
        return p(Zn(1 - e), "100%");
      } else {
        var t = r.c;
        return p("100%", Zn(t));
      }
    },
    bu = function (r) {
      var e = fu(r);
      return e.$ === "Static" ? "auto" : "none";
    },
    ng = s(function (r, e) {
      return { $: "Field", a: r, b: e };
    }),
    Ve = I(function (r, e, t) {
      return { $: "Index", a: r, b: e, c: t };
    }),
    tg = { $: "Key" },
    Ct = { $: "None" },
    ya = { $: "Toggle" },
    Oi = { $: "Value" },
    hu = n(D, "color", "rgb(28, 0, 207)"),
    Qn = I(function (r, e, t) {
      return r(e(t));
    }),
    Mn = function (r) {
      return r.$ === "Nothing" ? w : u([n(D, "padding-left", "4ch")]);
    },
    Ui = function (r) {
      return n(
        pr,
        u([
          n(D, "color", "#777"),
          n(D, "padding-left", "2ch"),
          n(D, "width", "2ch"),
          n(D, "display", "inline-block"),
        ]),
        u([H(r)])
      );
    },
    Vi = n(D, "color", "rgb(136, 19, 145)"),
    Kn = I(function (r, e, t) {
      var a = (function () {
        return e.$ === "Nothing" ? Ui("") : e.a ? Ui("\u25B8") : Ui("\u25BE");
      })();
      if (r.$ === "Nothing") return n(b, a, t);
      var i = r.a;
      return n(b, a, n(b, n(pr, u([Vi]), u([H(i)])), n(b, H(" = "), t)));
    }),
    _u = n(D, "color", "rgb(196, 26, 22)"),
    ag = function (r) {
      var e = r.b;
      return e;
    },
    wu = s(function (r, e) {
      switch (e.$) {
        case "ListSeq":
          return "List(" + (C(r) + ")");
        case "SetSeq":
          return "Set(" + (C(r) + ")");
        default:
          return "Array(" + (C(r) + ")");
      }
    }),
    ji = rf,
    It = s(function (r, e) {
      return r < 1 ? "" : g(ji, 0, r, e);
    }),
    ig = s(function (r, e) {
      return r < 1 ? "" : g(ji, -r, Ue(e), e);
    }),
    $g = function (r) {
      return Ue(r) <= 18 ? r : n(It, 8, r) + ("..." + n(ig, 8, r));
    },
    og = function (r) {
      return r.$ === "RBEmpty_elm_builtin";
    },
    Du = I(function (r, e, t) {
      if (t.b) {
        var a = t.a,
          i = t.b,
          $ = r + Ue(a) + 1;
        if ($ > 18) return p(r + 2, u([H("\u2026}")]));
        var o = g(Du, $, ",", i),
          l = o.a,
          f = o.b;
        return p(l, n(b, H(e), n(b, n(pr, u([Vi]), u([H(a)])), f)));
      } else return p(r + 1, u([H("}")]));
    }),
    Sa = function (r) {
      return p(Ue(r), u([H(r)]));
    },
    Vr = s(function (r, e) {
      if (e.$ === "Just") {
        var t = e.a;
        return t;
      } else return r;
    }),
    yu = function (r) {
      if (r.$ === "Record") {
        var e = r.b;
        return g(Du, 0, "{", Po(e));
      } else return ug(r);
    },
    ug = function (r) {
      switch (r.$) {
        case "S":
          var t = r.a,
            e = $g(t);
          return p(Ue(e), u([n(pr, u([_u]), u([H(e)]))]));
        case "Primitive":
          var t = r.a;
          return p(Ue(t), u([n(pr, u([hu]), u([H(t)]))]));
        case "Sequence":
          var a = r.a,
            i = r.c;
          return Sa(n(wu, Fe(i), a));
        case "Dictionary":
          var $ = r.b;
          return Sa("Dict(" + (C(Fe($)) + ")"));
        case "Record":
          var o = r.b;
          return Su(o);
        default:
          if (r.c.b) {
            var l = r.a,
              i = r.c;
            return Sa(
              (function () {
                if (l.$ === "Nothing") return "Tuple(" + (C(Fe(i)) + ")");
                var h = l.a;
                return h + " \u2026";
              })()
            );
          } else {
            var l = r.a;
            return Sa(n(Vr, "Unit", l));
          }
      }
    },
    Su = function (r) {
      return og(r) ? p(2, u([H("{}")])) : g(Mu, 0, "{ ", hn(r));
    },
    Mu = I(function (r, e, t) {
      if (t.b) {
        var a = t.a,
          i = a.a,
          $ = a.b,
          o = t.b,
          l = Ue(i),
          f = yu($),
          m = f.a,
          h = f.b,
          d = r + l + m + 5;
        if (d > 60) return p(r + 4, u([H(", \u2026 }")]));
        var S = g(Mu, d, ", ", o),
          y = S.a,
          E = S.b;
        return p(
          y,
          n(
            b,
            H(e),
            n(
              b,
              n(pr, u([Vi]), u([H(i)])),
              n(b, H(" = "), n(b, n(pr, w, h), E))
            )
          )
        );
      } else return p(r + 2, u([H(" }")]));
    }),
    $n = s(function (r, e) {
      switch (e.$) {
        case "S":
          var t = e.a;
          return n(Z, Mn(r), g(Kn, r, j, u([n(pr, u([_u]), u([H(t)]))])));
        case "Primitive":
          var t = e.a;
          return n(Z, Mn(r), g(Kn, r, j, u([n(pr, u([hu]), u([H(t)]))])));
        case "Sequence":
          var a = e.a,
            l = e.b,
            f = e.c;
          return M(mg, r, a, l, f);
        case "Dictionary":
          var l = e.a,
            i = e.b;
          return g(cg, r, l, i);
        case "Record":
          var l = e.a,
            $ = e.b;
          return g(fg, r, l, $);
        default:
          var o = e.a,
            l = e.b,
            f = e.c;
          return M(lg, r, o, l, f);
      }
    }),
    lg = ar(function (r, e, t, a) {
      var i = n(rr, n(Qn, ag, yu), a),
        $ = (function () {
          var m = p(e, i);
          if (m.a.$ === "Nothing")
            if (m.b.b) {
              var d = m.a,
                S = m.b,
                y = S.a,
                E = S.b;
              return n(
                b,
                H("( "),
                n(
                  b,
                  n(pr, w, y),
                  g(
                    xr,
                    s(function (A, k) {
                      return n(b, H(", "), n(b, n(pr, w, A), k));
                    }),
                    u([H(" )")]),
                    E
                  )
                )
              );
            } else {
              var h = m.a;
              return u([H("()")]);
            }
          else if (m.b.b) {
            var B = m.a.a,
              F = m.b,
              y = F.a,
              E = F.b;
            return n(
              b,
              H(B + " "),
              n(
                b,
                n(pr, w, y),
                g(
                  xr,
                  s(function (Q, X) {
                    return n(b, H(" "), n(b, n(pr, w, Q), X));
                  }),
                  w,
                  E
                )
              )
            );
          } else {
            var B = m.a.a;
            return u([H(B)]);
          }
        })(),
        o = (function () {
          if (a.b) {
            if (a.b.b) return p(R(t), t ? n(Z, w, w) : Cu(a));
            var m = a.a;
            switch (m.$) {
              case "S":
                return p(j, n(Z, w, w));
              case "Primitive":
                return p(j, n(Z, w, w));
              case "Sequence":
                var S = m.c;
                return p(R(t), t ? n(Z, w, w) : n(ie, n(Ve, Ct, 0), xu(S)));
              case "Dictionary":
                var h = m.b;
                return p(R(t), t ? n(Z, w, w) : n(ie, n(Ve, Ct, 0), Iu(h)));
              case "Record":
                var d = m.b;
                return p(R(t), t ? n(Z, w, w) : n(ie, n(Ve, Ct, 0), Bu(d)));
              default:
                var S = m.c;
                return p(R(t), t ? n(Z, w, w) : n(ie, n(Ve, Ct, 0), Cu(S)));
            }
          } else return p(j, n(Z, w, w));
        })(),
        l = o.a,
        f = o.b;
      return n(Z, Mn(r), u([n(Z, u([_e(ya)]), g(Kn, r, l, $)), f]));
    }),
    Eu = s(function (r, e) {
      return n(ie, n(Ve, Ct, r), n($n, R(C(r)), e));
    }),
    Cu = function (r) {
      return n(Z, w, n(pa, Eu, r));
    },
    cg = I(function (r, e, t) {
      var a = "Dict(" + (C(Fe(t)) + ")");
      return n(
        Z,
        Mn(r),
        u([n(Z, u([_e(ya)]), g(Kn, r, R(e), u([H(a)]))), e ? H("") : Iu(t)])
      );
    }),
    vg = s(function (r, e) {
      var t = e.a,
        a = e.b;
      switch (t.$) {
        case "S":
          var i = t.a;
          return n(ie, n(Ve, Oi, r), n($n, R(i), a));
        case "Primitive":
          var i = t.a;
          return n(ie, n(Ve, Oi, r), n($n, R(i), a));
        default:
          return n(
            Z,
            w,
            u([
              n(ie, n(Ve, tg, r), n($n, R("key"), t)),
              n(ie, n(Ve, Oi, r), n($n, R("value"), a)),
            ])
          );
      }
    }),
    Iu = function (r) {
      return n(Z, w, n(pa, vg, r));
    },
    fg = I(function (r, e, t) {
      var a = e
          ? vr(Su(t).b, H(""), H(""))
          : vr(u([H("{")]), Bu(t), n(Z, Mn(R(sr)), u([H("}")]))),
        i = a.a,
        $ = a.b,
        o = a.c;
      return n(Z, Mn(r), u([n(Z, u([_e(ya)]), g(Kn, r, R(e), i)), $, o]));
    }),
    sg = function (r) {
      var e = r.a,
        t = r.b;
      return n(ie, ng(e), n($n, R(e), t));
    },
    Bu = function (r) {
      return n(Z, w, n(rr, sg, hn(r)));
    },
    mg = ar(function (r, e, t, a) {
      var i = n(wu, Fe(a), e);
      return n(
        Z,
        Mn(r),
        u([n(Z, u([_e(ya)]), g(Kn, r, R(t), u([H(i)]))), t ? H("") : xu(a)])
      );
    }),
    xu = function (r) {
      return n(Z, w, n(pa, Eu, r));
    },
    gg = I(function (r, e, t) {
      var a = bu(t),
        i = eg(t),
        $ = i.a,
        o = i.b;
      return n(
        Z,
        u([
          n(D, "display", "block"),
          n(D, "width", "calc(" + ($ + " - 4em)")),
          n(D, "height", "calc(" + (o + " - 4em)")),
          n(D, "padding", "2em"),
          n(D, "margin", "0"),
          n(D, "overflow", "auto"),
          n(D, "pointer-events", a),
          n(D, "-webkit-user-select", a),
          n(D, "-moz-user-select", a),
          n(D, "-ms-user-select", a),
          n(D, "user-select", a),
        ]),
        u([
          n(
            Z,
            u([n(D, "color", "#ccc"), n(D, "padding", "0 0 1em 0")]),
            u([H("-- MESSAGE")])
          ),
          n(ie, rg, n($n, j, r)),
          n(
            Z,
            u([n(D, "color", "#ccc"), n(D, "padding", "1em 0")]),
            u([H("-- MODEL")])
          ),
          n(ie, Km, n($n, j, e)),
        ])
      );
    }),
    Fu = function (r) {
      return { $: "Jump", a: r };
    },
    dg = as,
    Au = dg,
    pg = function (r) {
      if (r.$ === "Horizontal") {
        var e = r.b;
        return p(Zn(e), "100%");
      } else {
        var t = r.c;
        return p("100%", Zn(1 - t));
      }
    },
    bg = is,
    Ma = bg,
    Ar = tn("className"),
    Tu = function (r) {
      return "msg-" + C(r);
    },
    Ru = tn("title"),
    hg = I(function (r, e, t) {
      var a = Di(t),
        i = tr(r, e)
          ? "elm-debugger-entry elm-debugger-entry-selected"
          : "elm-debugger-entry";
      return n(
        Z,
        u([yt(Tu(e)), Ar(i), _e(e)]),
        u([
          n(pr, u([Ru(a), Ar("elm-debugger-entry-content")]), u([H(a)])),
          n(pr, u([Ar("elm-debugger-entry-index")]), u([H(C(e))])),
        ])
      );
    }),
    Hu = I(function (r, e, t) {
      var a = t.a,
        i = t.b;
      return p(a + 1, n(b, p(C(a), M(Ma, hg, r, a, e)), i));
    }),
    Ni = function (r) {
      var e = r.a;
      return e;
    },
    ZD = Iv,
    ku = function (r) {
      return ts(pi(r));
    },
    Lu = ku,
    En = 31,
    _g = function (r) {
      var e = r - 1 - En * 2,
        t = "View more messages";
      return n(
        Z,
        u([Ar("elm-debugger-entry"), _e(e)]),
        u([
          n(pr, u([Ru(t), Ar("elm-debugger-entry-content")]), u([H(t)])),
          n(pr, u([Ar("elm-debugger-entry-index")]), w),
        ])
      );
    },
    wg = g(
      vu,
      "style",
      w,
      u([
        H(`

.elm-debugger-entry {
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
}

.elm-debugger-entry:hover {
  background-color: rgb(41, 41, 41);
}

.elm-debugger-entry-selected, .elm-debugger-entry-selected:hover {
  background-color: rgb(10, 10, 10);
}

.elm-debugger-entry-content {
  width: calc(100% - 40px);
  padding: 0 5px;
  box-sizing: border-box;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
}

.elm-debugger-entry-index {
  color: #666;
  width: 40px;
  text-align: right;
  display: block;
  float: right;
}

`),
      ])
    ),
    QD = Av,
    Dg = I(function (r, e, t) {
      var a = t.messages;
      return g(Lu, "div", w, g(bt, Hu(r), p(e, w), a).b);
    }),
    yg = I(function (r, e, t) {
      var a = t.a,
        i = t.b,
        $ = a + Ni(e.messages),
        o = ur($, r) > 0 && ur(r, a) > -1 ? r : -1;
      return p($, n(b, M(Ma, Dg, o, a, e), i));
    }),
    Ea = wv,
    Pu = I(function (r, e, t) {
      var a = t.c,
        i = t.d,
        $ = s(function (o, l) {
          if (o.$ === "SubTree") {
            var f = o.a;
            return g(Ea, $, l, f);
          } else {
            var m = o.a;
            return g(Ea, r, l, m);
          }
        });
      return g(Ea, r, g(Ea, $, e, a), i);
    }),
    Ju = I(function (r, e, t) {
      return n(Z, w, g(Pu, yg(r), p(e, w), t).b);
    }),
    Sg = I(function (r, e, t) {
      r: for (;;) {
        var a = n(Bi, Br, r),
          i = a.a,
          $ = a.b;
        if (ur(he(i), Br) < 0)
          return n(xi, !0, { nodeList: e, nodeListSize: t, tail: i });
        var o = $,
          l = n(b, _t(i), e),
          f = t + 1;
        (r = o), (e = l), (t = f);
        continue r;
      }
    }),
    zu = function (r) {
      return r.b ? g(Sg, r, w, 0) : ht;
    },
    KD = As,
    ry = Hs,
    on = 4294967295 >>> (32 - Xr),
    Cn = bv,
    Mg = I(function (r, e, t) {
      r: for (;;) {
        var a = on & (e >>> r),
          i = n(Cn, a, t);
        if (i.$ === "SubTree") {
          var $ = i.a,
            o = r - Xr,
            l = e,
            f = $;
          (r = o), (e = l), (t = f);
          continue r;
        } else {
          var m = i.a;
          return n(Cn, on & e, m);
        }
      }
    }),
    ey = Rs,
    Bt = function (r) {
      return (r >>> 5) << 5;
    },
    Ca = s(function (r, e) {
      var t = e.a,
        a = e.b,
        i = e.c,
        $ = e.d;
      return r < 0 || ur(r, t) > -1
        ? j
        : ur(r, Bt(t)) > -1
        ? R(n(Cn, on & r, $))
        : R(g(Mg, a, r, i));
    }),
    Eg = Sv,
    un = yv,
    Cg = s(function (r, e) {
      var t = he(r),
        a = Br - he(e.tail) - t,
        i = g(Eg, Br, e.tail, r);
      return a < 0
        ? {
            nodeList: n(b, _t(i), e.nodeList),
            nodeListSize: e.nodeListSize + 1,
            tail: g(un, a, t, r),
          }
        : a
        ? { nodeList: e.nodeList, nodeListSize: e.nodeListSize, tail: i }
        : {
            nodeList: n(b, _t(i), e.nodeList),
            nodeListSize: e.nodeListSize + 1,
            tail: rn,
          };
    }),
    Ig = s(function (r, e) {
      r: for (;;) {
        if (r <= 0) return e;
        if (e.b) {
          var t = e.a,
            a = e.b,
            i = r - 1,
            $ = a;
          (r = i), (e = $);
          continue r;
        } else return e;
      }
    }),
    Bg = s(function (r, e) {
      var t = e.a,
        a = e.c,
        i = e.d;
      if (r) {
        if (ur(r, Bt(t)) > -1)
          return M(Oe, t - r, Xr, rn, g(un, r - Bt(t), he(i), i));
        var $ = (r / Br) | 0,
          o = s(function (y, E) {
            if (y.$ === "SubTree") {
              var B = y.a;
              return g(Vn, o, E, B);
            } else {
              var F = y.a;
              return n(b, F, E);
            }
          }),
          l = g(Vn, o, u([i]), a),
          f = n(Ig, $, l);
        if (f.b) {
          var m = f.a,
            h = f.b,
            d = r - $ * Br,
            S = { nodeList: w, nodeListSize: 0, tail: g(un, d, he(m), m) };
          return n(xi, !0, g(dr, Cg, S, h));
        } else return ht;
      } else return e;
    }),
    xg = ar(function (r, e, t, a) {
      r: for (;;) {
        var i = on & (t >>> r),
          $ = n(Cn, i, a);
        if ($.$ === "SubTree") {
          var o = $.a,
            l = r - Xr,
            f = e,
            m = t,
            h = o;
          (r = l), (e = f), (t = m), (a = h);
          continue r;
        } else {
          var d = $.a;
          return g(un, 0, on & e, d);
        }
      }
    }),
    Fg = I(function (r, e, t) {
      r: for (;;) {
        if (ur(r, e) < 1 || !he(t)) return t;
        var a = n(Cn, 0, t);
        if (a.$ === "SubTree") {
          var i = a.a,
            $ = r - Xr,
            o = e,
            l = i;
          (r = $), (e = o), (t = l);
          continue r;
        } else return t;
      }
    }),
    Wi = hv,
    Ou = I(function (r, e, t) {
      var a = on & (e >>> r),
        i = n(Cn, a, t);
      if (i.$ === "SubTree") {
        var $ = i.a,
          o = g(Ou, r - Xr, e, $);
        return he(o) ? g(Wi, a, Nn(o), g(un, 0, a + 1, t)) : g(un, 0, a, t);
      } else return g(un, 0, a, t);
    }),
    Ag = s(function (r, e) {
      var t = e.a,
        a = e.b,
        i = e.c,
        $ = e.d;
      if (tr(r, t)) return e;
      if (ur(r, Bt(t)) > -1) return M(Oe, r, a, i, g(un, 0, on & r, $));
      var o = Bt(r),
        l = _n(n(Ii, Br, n(Ae, 1, o - 1))),
        f = n(Ae, 5, l * Xr);
      return M(Oe, r, f, g(Fg, a, f, g(Ou, a, o, i)), M(xg, a, r, o, i));
    }),
    Uu = s(function (r, e) {
      var t = e.a,
        a = r < 0 ? t + r : r;
      return a < 0 ? 0 : ur(a, t) > 0 ? t : a;
    }),
    Tg = I(function (r, e, t) {
      var a = n(Uu, e, t),
        i = n(Uu, r, t);
      return ur(i, a) > 0 ? ht : n(Bg, i, n(Ag, a, t));
    }),
    Rg = I(function (r, e, t) {
      var a = En - e,
        i = Ni(t),
        $ = (function () {
          var l = p(n(Ca, i - 2, t), n(Ca, i - 1, t));
          if (l.a.$ === "Just" && l.b.$ === "Just") {
            var f = l.a.a,
              m = l.b.a;
            return zu(
              u([{ messages: g(Tg, 0, a, f.messages), model: f.model }, m])
            );
          } else return t;
        })(),
        o = i * En - En - a;
      return g(Ju, r, o, $);
    }),
    Hg = s(function (r, e) {
      var t = e.snapshots,
        a = e.recent,
        i = e.numMessages,
        $ = i - a.numMessages,
        o = n(Vr, -1, r),
        l = g(Lu, "div", w, g(xr, Hu(o), p($, w), a.messages).b),
        f = !tr(o, -1) || Ni(t) < 2,
        m = f ? M(Ma, Ju, o, 0, t) : M(Ma, Rg, o, a.numMessages, t);
      return n(
        Z,
        u([
          yt("elm-debugger-sidebar"),
          n(D, "width", "100%"),
          n(D, "overflow-y", "auto"),
          n(D, "height", "calc(100% - 72px)"),
        ]),
        n(b, wg, n(b, l, n(b, m, f ? w : u([_g(i)]))))
      );
    }),
    kg = { $: "SwapLayout" },
    Lg = function (r) {
      return r.$ === "Horizontal"
        ? "M13 1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3z M13 3h-10a1 1 0 0 0-1 1v5h12v-5a1 1 0 0 0-1-1z M14 10h-12v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1z"
        : "M0 4a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3z M2 4v8a1 1 0 0 0 1 1h2v-10h-2a1 1 0 0 0-1 1z M6 3v10h7a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1z";
    },
    Yi = function (r) {
      return M(
        Et,
        "http://www.w3.org/2000/svg",
        "svg",
        u([
          n(Fr, "viewBox", "0 0 16 16"),
          n(Fr, "xmlns", "http://www.w3.org/2000/svg"),
          n(Fr, "fill", "currentColor"),
          n(Fr, "width", "16px"),
          n(Fr, "height", "16px"),
        ]),
        u([M(Et, "http://www.w3.org/2000/svg", "path", u([n(Fr, "d", r)]), w)])
      );
    },
    qi = I(function (r, e, t) {
      return n(
        Hi,
        u([
          n(D, "display", "flex"),
          n(D, "flex-direction", "row"),
          n(D, "align-items", "center"),
          n(D, "background", "none"),
          n(D, "border", "none"),
          n(D, "color", "inherit"),
          n(D, "cursor", "pointer"),
          _e(e),
        ]),
        u([Yi(t), n(pr, u([n(D, "padding-left", "6px")]), u([H(r)]))])
      );
    }),
    Pg = function (r) {
      return n(
        Z,
        u([
          n(D, "width", "100%"),
          n(D, "height", "36px"),
          n(D, "display", "flex"),
          n(D, "flex-direction", "row"),
          n(D, "align-items", "center"),
          n(D, "justify-content", "space-between"),
          n(D, "background-color", "rgb(50, 50, 50)"),
        ]),
        u([
          g(qi, "Swap Layout", kg, Lg(r)),
          n(
            Z,
            u([
              n(D, "display", "flex"),
              n(D, "flex-direction", "row"),
              n(D, "align-items", "center"),
              n(D, "justify-content", "space-between"),
            ]),
            u([
              g(
                qi,
                "Import",
                Ko,
                "M5 1a1 1 0 0 1 0 2h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1a1 1 0 0 1 2 0a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3z M10 2a1 1 0 0 0 -2 0v6a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2h-3.586l4.293-4.293a1 1 0 0 0-1.414-1.414l-4.293 4.293z"
              ),
              g(
                qi,
                "Export",
                Qo,
                "M5 1a1 1 0 0 1 0 2h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1 a1 1 0 0 1 2 0a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3z M9 3a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-3.586l-5.293 5.293 a1 1 0 0 1-1.414-1.414l5.293 -5.293z"
              ),
            ])
          ),
        ])
      );
    },
    Xi = function (r) {
      return { $: "SliderJump", a: r };
    },
    xt = I(function (r, e, t) {
      return e(r(t));
    }),
    Jg = Yr("input"),
    zg = function (r) {
      return r.$ === "Nothing";
    },
    Og = tn("max"),
    Ug = tn("min"),
    Vg = function (r) {
      return p(r, !0);
    },
    jg = function (r) {
      return { $: "MayStopPropagation", a: r };
    },
    Ng = s(function (r, e) {
      return n(Ti, r, jg(e));
    }),
    jr = pf,
    Wg = n(su, u(["target", "value"]), jr),
    Vu = function (r) {
      return n(Ng, "input", n(Te, Vg, n(Te, r, Wg)));
    },
    Gi = lf,
    ju = tn("type"),
    Nu = tn("value"),
    Yg = function (r) {
      return n(
        Hi,
        u([
          n(D, "background", "#1293D8"),
          n(D, "border", "none"),
          n(D, "color", "white"),
          n(D, "cursor", "pointer"),
          n(D, "width", "36px"),
          n(D, "height", "36px"),
          _e(Ai),
        ]),
        u([Yi(r ? "M2 2h4v12h-4v-12z M10 2h4v12h-4v-12z" : "M2 2l12 7l-12 7z")])
      );
    },
    qg = s(function (r, e) {
      var t = Dt(r) - 1,
        a = n(Vr, t, e);
      return n(
        Z,
        u([
          n(D, "display", "flex"),
          n(D, "flex-direction", "row"),
          n(D, "align-items", "center"),
          n(D, "width", "100%"),
          n(D, "height", "36px"),
          n(D, "background-color", "rgb(50, 50, 50)"),
        ]),
        u([
          n(Au, Yg, zg(e)),
          n(
            Jg,
            u([
              ju("range"),
              n(D, "width", "calc(100% - 56px)"),
              n(D, "height", "36px"),
              n(D, "margin", "0 10px"),
              Ug("0"),
              Og(C(t)),
              Nu(C(a)),
              Vu(n(xt, Gi, n(xt, Vr(t), Xi))),
            ]),
            w
          ),
        ])
      );
    }),
    Xg = I(function (r, e, t) {
      var a = bu(t),
        i = pg(t),
        $ = i.a,
        o = i.b;
      return n(
        Z,
        u([
          n(D, "width", $),
          n(D, "height", o),
          n(D, "display", "flex"),
          n(D, "flex-direction", "column"),
          n(D, "color", "#DDDDDD"),
          n(D, "background-color", "rgb(61, 61, 61)"),
          n(D, "pointer-events", a),
          n(D, "user-select", a),
        ]),
        u([n(qg, e, r), n(ie, Fu, n(Hg, r, e)), n(Au, Pg, t)])
      );
    }),
    Wu = function (r) {
      var e = (function () {
          var a = r.state;
          if (a.$ === "Running") return j;
          var i = a.a;
          return R(i);
        })(),
        t = cu(r);
      return g(
        vu,
        "body",
        G(
          Gm(r.layout),
          u([
            n(D, "margin", "0"),
            n(D, "padding", "0"),
            n(D, "width", "100%"),
            n(D, "height", "100%"),
            n(D, "font-family", "monospace"),
            n(D, "display", "flex"),
            n(D, "flex-direction", Zm(r.layout)),
          ])
        ),
        u([
          g(Xg, e, t, r.layout),
          Qm(r.layout),
          g(gg, r.expandoMsg, r.expandoModel, r.layout),
        ])
      );
    },
    Gg = { $: "BlockAll" },
    Zg = s(function (r, e) {
      switch (e.$) {
        case "None":
          return r ? Gg : Go;
        case "BadMetadata":
          return ha;
        case "BadImport":
          return ha;
        default:
          return ha;
      }
    }),
    Ia = function (r) {
      return n(Zg, ru(r.state), r.overlay);
    },
    Ba = I(function (r, e, t) {
      return { $: "Horizontal", a: r, b: e, c: t };
    }),
    xa = function (r) {
      return { $: "Running", a: r };
    },
    Yu = { $: "Static" },
    qu = s(function (r, e) {
      return { message: r, problems: e };
    }),
    Xu = ii,
    Qg = s(function (r, e) {
      return { types: e, versions: r };
    }),
    Kg = I(function (r, e, t) {
      return { aliases: e, message: r, unions: t };
    }),
    rd = s(function (r, e) {
      return { args: r, tipe: e };
    }),
    Ft = bf,
    ed = g(wn, rd, n(_r, "args", Ft(jr)), n(_r, "type", jr)),
    nd = s(function (r, e) {
      return { args: r, tags: e };
    }),
    Gu = function (r) {
      return g(
        dr,
        s(function (e, t) {
          var a = e.a,
            i = e.b;
          return g(Da, a, i, t);
        }),
        Pi,
        r
      );
    },
    Zu = Df,
    Zi = function (r) {
      return n(Te, Gu, Zu(r));
    },
    td = g(wn, nd, n(_r, "args", Ft(jr)), n(_r, "tags", Zi(Ft(jr)))),
    ad = Cf,
    id = M(
      ad,
      Kg,
      n(_r, "message", jr),
      n(_r, "aliases", Zi(ed)),
      n(_r, "unions", Zi(td))
    ),
    $d = function (r) {
      return { elm: r };
    },
    od = n(Te, $d, n(_r, "elm", jr)),
    Qu = g(wn, Qg, n(_r, "versions", od), n(_r, "types", id)),
    Ku = s(function (r, e) {
      return { name: r, problems: e };
    }),
    ud = I(function (r, e, t) {
      var a = r(e);
      if (a.$ === "Just") {
        var i = a.a;
        return n(b, i, t);
      } else return t;
    }),
    ln = s(function (r, e) {
      return g(xr, ud(r), w, e);
    }),
    rl = $f,
    ld = s(function (r, e) {
      var t = e.a,
        a = e.b;
      return n(rl, a, r) ? R(t) : j;
    }),
    cd = { $: "Decoder" },
    vd = { $: "Function" },
    fd = { $: "Process" },
    sd = { $: "Program" },
    md = { $: "Request" },
    gd = { $: "Socket" },
    dd = { $: "Task" },
    el = { $: "VirtualDom" },
    pd = u([
      p(vd, "->"),
      p(cd, "Json.Decode.Decoder"),
      p(dd, "Task.Task"),
      p(fd, "Process.Id"),
      p(gd, "WebSocket.LowLevel.WebSocket"),
      p(md, "Http.Request"),
      p(sd, "Platform.Program"),
      p(el, "VirtualDom.Node"),
      p(el, "VirtualDom.Attribute"),
    ]),
    nl = function (r) {
      return n(ln, ld(r), pd);
    },
    bd = I(function (r, e, t) {
      var a = e.tipe,
        i = nl(a);
      if (i.b) {
        var $ = i;
        return n(b, n(Ku, r, $), t);
      } else return t;
    }),
    hd = s(function (r, e) {
      return e.b ? g(xr, b, e, r) : r;
    }),
    At = function (r) {
      return g(xr, hd, w, r);
    },
    Fa = s(function (r, e) {
      return At(n(rr, r, e));
    }),
    _d = function (r) {
      return g(
        jn,
        I(function (e, t, a) {
          return n(b, t, a);
        }),
        w,
        r
      );
    },
    wd = I(function (r, e, t) {
      var a = e.tags,
        i = n(Fa, nl, At(_d(a)));
      if (i.b) {
        var $ = i;
        return n(b, n(Ku, r, $), t);
      } else return t;
    }),
    Aa = I(function (r, e, t) {
      r: for (;;) {
        if (t.$ === "RBEmpty_elm_builtin") return e;
        var a = t.b,
          i = t.c,
          $ = t.d,
          o = t.e,
          l = r,
          f = g(r, a, i, g(Aa, r, e, $)),
          m = o;
        (r = l), (e = f), (t = m);
        continue r;
      }
    }),
    Dd = function (r) {
      var e = r.types,
        t = g(Aa, bd, w, e.aliases),
        a = g(Aa, wd, t, e.unions);
      if (a.b) {
        var i = a;
        return R(n(qu, e.message, i));
      } else return j;
    },
    yd = function (r) {
      var e = n(Xu, Qu, r);
      if (e.$ === "Err")
        return fe(
          n(
            qu,
            "The compiler is generating bad metadata. This is a compiler bug!",
            w
          )
        );
      var t = e.a,
        a = Dd(t);
      if (a.$ === "Nothing") return ae(t);
      var i = a.a;
      return fe(i);
    },
    Qi = I(function (r, e, t) {
      return { numMessages: t, recent: e, snapshots: r };
    }),
    Ki = I(function (r, e, t) {
      return { messages: e, model: r, numMessages: t };
    }),
    tl = function (r) {
      return g(Qi, ht, g(Ki, r, w, 0), 0);
    },
    Tt = s(function (r, e) {
      if (e.$ === "RBEmpty_elm_builtin") return Re;
      var t = e.a,
        a = e.b,
        i = e.c,
        $ = e.d,
        o = e.e;
      return N(er, t, a, n(r, a, i), n(Tt, r, $), n(Tt, r, o));
    }),
    al = s(function (r, e) {
      r: for (;;) {
        if (e.$ === "RBEmpty_elm_builtin") return r;
        var t = e.d,
          a = e.e,
          i = n(al, r + 1, a),
          $ = t;
        (r = i), (e = $);
        continue r;
      }
    }),
    Sd = function (r) {
      return n(al, 0, r);
    },
    Rt = s(function (r, e) {
      switch (e.$) {
        case "S":
          return e;
        case "Primitive":
          return e;
        case "Sequence":
          var t = e.a,
            l = e.b,
            a = e.c;
          return r
            ? g(nn, t, !1, n(rr, Rt(!1), a))
            : Fe(a) <= 8
            ? g(nn, t, !1, a)
            : e;
        case "Dictionary":
          var l = e.a,
            i = e.b;
          return r
            ? n(
                yn,
                !1,
                n(
                  rr,
                  function (m) {
                    var h = m.a,
                      d = m.b;
                    return p(h, n(Rt, !1, d));
                  },
                  i
                )
              )
            : Fe(i) <= 8
            ? n(yn, !1, i)
            : e;
        case "Record":
          var l = e.a,
            $ = e.b;
          return r
            ? n(
                Yn,
                !1,
                n(
                  Tt,
                  s(function (m, h) {
                    return n(Rt, !1, h);
                  }),
                  $
                )
              )
            : Sd($) <= 4
            ? n(Yn, !1, $)
            : e;
        default:
          var o = e.a,
            l = e.b,
            f = e.c;
          return r
            ? g(Dn, o, !1, n(rr, Rt(!1), f))
            : Fe(f) <= 4
            ? g(Dn, o, !1, f)
            : e;
      }
    }),
    Ta = function (r) {
      return n(Rt, !0, Ke(r));
    },
    il = fo,
    Md = { $: "None" },
    r$ = Md,
    $l = ar(function (r, e, t, a) {
      var i = t(a),
        $ = i.a,
        o = i.b;
      return p(
        {
          expandoModel: Ta($),
          expandoMsg: Ta(sr),
          history: tl($),
          layout: g(Ba, Yu, 0.3, 0.5),
          metadata: yd(r),
          overlay: r$,
          popout: e,
          state: xa($),
        },
        n(il, qn, o)
      );
    }),
    e$ = function (r) {
      if (r.$ === "Running") {
        var e = r.a;
        return e;
      } else {
        var e = r.c;
        return e;
      }
    },
    Ed = fo,
    ol = s(function (r, e) {
      return n(Ed, qn, r(e$(e.state)));
    }),
    Cd = { $: "Moving" },
    ul = mr(function (r, e, t, a, i) {
      return { $: "Paused", a: r, b: e, c: t, d: a, e: i };
    }),
    Id = s(function (r, e) {
      return { messages: e, model: r };
    }),
    Bd = I(function (r, e, t) {
      var a = t.model,
        i = t.messages,
        $ = t.numMessages;
      return tr($, En)
        ? p(R(n(Id, a, zu(i))), g(Ki, e, u([r]), 1))
        : p(j, g(Ki, a, n(b, r, i), $ + 1));
    }),
    n$ = _v,
    ll = mv,
    Ht = ar(function (r, e, t, a) {
      var i = on & (e >>> r);
      if (ur(i, he(a)) > -1) {
        if (r === 5) return n(n$, _t(t), a);
        var $ = Nn(M(Ht, r - Xr, e, t, rn));
        return n(n$, $, a);
      } else {
        var o = n(Cn, i, a);
        if (o.$ === "SubTree") {
          var l = o.a,
            $ = Nn(M(Ht, r - Xr, e, t, l));
          return g(Wi, i, $, a);
        } else {
          var $ = Nn(M(Ht, r - Xr, e, t, ll(o)));
          return g(Wi, i, $, a);
        }
      }
    }),
    xd = s(function (r, e) {
      var t = e.a,
        a = e.b,
        i = e.c,
        $ = e.d,
        o = he($),
        l = he(r),
        f = t + (l - o);
      if (tr(l, Br)) {
        var m = ur(f >>> Xr, 1 << a) > 0;
        if (m) {
          var h = a + Xr,
            d = M(Ht, h, t, r, ll(Nn(i)));
          return M(Oe, f, h, d, rn);
        } else return M(Oe, f, a, M(Ht, a, t, r, i), rn);
      } else return M(Oe, f, a, i, r);
    }),
    Fd = s(function (r, e) {
      var t = e.d;
      return n(xd, n(n$, r, t), e);
    }),
    cl = I(function (r, e, t) {
      var a = t.snapshots,
        i = t.recent,
        $ = t.numMessages,
        o = g(Bd, r, e, i);
      if (o.a.$ === "Just") {
        var l = o.a.a,
          f = o.b;
        return g(Qi, n(Fd, l, a), f, $ + 1);
      } else {
        var m = o.a,
          f = o.b;
        return g(Qi, a, f, $ + 1);
      }
    }),
    Ra = s(function (r, e) {
      return r;
    }),
    vl = function (r) {
      return { $: "BadImport", a: r };
    },
    Ad = s(function (r, e) {
      return { $: "RiskyImport", a: r, b: e };
    }),
    Td = s(function (r, e) {
      return { $: "VersionChanged", a: r, b: e };
    }),
    Rd = s(function (r, e) {
      return { $: "MessageChanged", a: r, b: e };
    }),
    Hd = function (r) {
      return { $: "SomethingChanged", a: r };
    },
    kd = function (r) {
      return { $: "AliasChange", a: r };
    },
    Ld = ar(function (r, e, t, a) {
      return tr(e.tipe, t.tipe) && tr(e.args, t.args) ? a : n(b, kd(r), a);
    }),
    Pd = s(function (r, e) {
      return { $: "UnionChange", a: r, b: e };
    }),
    Jd = I(function (r, e, t) {
      return q(t, { added: n(b, r, t.added) });
    }),
    zd = ar(function (r, e, t, a) {
      return tr(e, t) ? a : q(a, { changed: n(b, r, a.changed) });
    }),
    fl = ar(function (r, e, t, a) {
      return { added: t, argsMatch: a, changed: e, removed: r };
    }),
    Od = function (r) {
      return M(fl, w, w, w, r);
    },
    Ud = function (r) {
      return tr(r, M(fl, w, w, w, !0));
    },
    t$ = Wr(function (r, e, t, a, i, $) {
      var o = I(function (h, d, S) {
          r: for (;;) {
            var y = S.a,
              E = S.b;
            if (y.b) {
              var B = y.a,
                F = B.a,
                A = B.b,
                k = y.b;
              if (ur(F, h) < 0) {
                var Y = h,
                  Q = d,
                  X = p(k, g(r, F, A, E));
                (h = Y), (d = Q), (S = X);
                continue r;
              } else
                return ur(F, h) > 0
                  ? p(y, g(t, h, d, E))
                  : p(k, M(e, F, A, d, E));
            } else return p(y, g(t, h, d, E));
          }
        }),
        l = g(Aa, o, p(hn(a), $), i),
        f = l.a,
        m = l.b;
      return g(
        dr,
        s(function (h, d) {
          var S = h.a,
            y = h.b;
          return g(r, S, y, d);
        }),
        m,
        f
      );
    }),
    Vd = I(function (r, e, t) {
      return q(t, { removed: n(b, r, t.removed) });
    }),
    jd = ar(function (r, e, t, a) {
      var i = dn(t$, Vd, zd, Jd, e.tags, t.tags, Od(tr(e.args, t.args)));
      return Ud(i) ? a : n(b, n(Pd, r, i), a);
    }),
    Ha = I(function (r, e, t) {
      return t;
    }),
    Nd = s(function (r, e) {
      return tr(r.message, e.message)
        ? Hd(
            dn(
              t$,
              Ha,
              jd,
              Ha,
              r.unions,
              e.unions,
              dn(t$, Ha, Ld, Ha, r.aliases, e.aliases, w)
            )
          )
        : n(Rd, r.message, e.message);
    }),
    Wd = s(function (r, e) {
      return tr(r.versions.elm, e.versions.elm)
        ? n(Nd, r.types, e.types)
        : n(Td, r.versions.elm, e.versions.elm);
    }),
    Yd = { $: "CorruptHistory" },
    sl = vl(Yd),
    a$ = Bf,
    ml = { $: "Fine" },
    rt = { $: "Impossible" },
    gl = { $: "Risky" },
    ny = Yv,
    In = function (r) {
      return !r.b;
    },
    i$ = function (r) {
      return !In(r);
    },
    qd = function (r) {
      if (r.$ === "AliasChange") return rt;
      var e = r.b.removed,
        t = r.b.changed,
        a = r.b.added,
        i = r.b.argsMatch;
      return !i || i$(t) || i$(e) ? rt : i$(a) ? gl : ml;
    },
    Xd = s(function (r, e) {
      r: for (;;)
        if (e.b)
          switch (e.a.$) {
            case "Impossible":
              var t = e.a;
              return rt;
            case "Risky":
              var a = e.a,
                $ = e.b,
                o = gl,
                l = $;
              (r = o), (e = l);
              continue r;
            default:
              var i = e.a,
                $ = e.b,
                o = r,
                l = $;
              (r = o), (e = l);
              continue r;
          }
        else return r;
    }),
    Gd = function (r) {
      switch (r.$) {
        case "CorruptHistory":
          return rt;
        case "VersionChanged":
          return rt;
        case "MessageChanged":
          return rt;
        default:
          var e = r.a;
          return n(Xd, ml, n(rr, qd, e));
      }
    },
    dl = df,
    Zd = g(
      wn,
      s(function (r, e) {
        return p(r, e);
      }),
      n(_r, "metadata", Qu),
      n(_r, "history", dl)
    ),
    Qd = s(function (r, e) {
      var t = n(a$, Zd, e);
      if (t.$ === "Err") return fe(sl);
      var a = t.a,
        i = a.a,
        $ = a.b,
        o = n(Wd, i, r),
        l = Gd(o);
      switch (l.$) {
        case "Impossible":
          return fe(vl(o));
        case "Risky":
          return fe(n(Ad, o, $));
        default:
          return ae($);
      }
    }),
    pl = vo,
    Kd = s(function (r, e) {
      switch (e.$) {
        case "None":
          return j;
        case "BadMetadata":
          return j;
        case "BadImport":
          return j;
        default:
          var t = e.b;
          return r.$ === "Cancel" ? j : R(t);
      }
    }),
    rp = n(xt, Or, Co),
    ep = s(function (r, e) {
      return g(Pu, b, e, r.messages);
    }),
    cn = s(function (r, e) {
      return Or(g(dr, Hf(r), Af(sr), e));
    }),
    np = function (r) {
      var e = r.snapshots,
        t = r.recent;
      return n(cn, rp, g(bt, ep, yr(t.messages), e));
    },
    je = function (r) {
      return Or(
        g(
          dr,
          s(function (e, t) {
            var a = e.a,
              i = e.b;
            return g(Rf, a, i, t);
          }),
          Tf(sr),
          r
        )
      );
    },
    tp = function (r) {
      var e = r.args,
        t = r.tipe;
      return je(u([p("args", n(cn, se, e)), p("type", se(t))]));
    },
    $$ = s(function (r, e) {
      return je(
        hn(
          n(
            Tt,
            s(function (t, a) {
              return r(a);
            }),
            e
          )
        )
      );
    }),
    ap = function (r) {
      var e = r.args,
        t = r.tags;
      return je(u([p("args", n(cn, se, e)), p("tags", n($$, cn(se), t))]));
    },
    ip = function (r) {
      var e = r.message,
        t = r.unions,
        a = r.aliases;
      return je(
        u([
          p("message", se(e)),
          p("aliases", n($$, tp, a)),
          p("unions", n($$, ap, t)),
        ])
      );
    },
    $p = function (r) {
      var e = r.elm;
      return je(u([p("elm", se(e))]));
    },
    op = function (r) {
      var e = r.versions,
        t = r.types;
      return je(u([p("versions", $p(e)), p("types", ip(t))]));
    },
    et = function (r) {
      return r;
    },
    bl = function (r) {
      return { $: "Perform", a: r };
    },
    kt = Ur,
    up = kt(sr),
    ka = $i,
    o$ = s(function (r, e) {
      return n(
        ka,
        function (t) {
          return kt(r(t));
        },
        e
      );
    }),
    lp = I(function (r, e, t) {
      return n(
        ka,
        function (a) {
          return n(
            ka,
            function (i) {
              return kt(n(r, a, i));
            },
            t
          );
        },
        e
      );
    }),
    cp = function (r) {
      return g(xr, lp(b), kt(w), r);
    },
    vp = Yf,
    fp = s(function (r, e) {
      var t = e.a;
      return uo(n(ka, vp(r), t));
    }),
    sp = I(function (r, e, t) {
      return n(
        o$,
        function (a) {
          return sr;
        },
        cp(n(rr, fp(r), e))
      );
    }),
    mp = I(function (r, e, t) {
      return kt(sr);
    }),
    gp = s(function (r, e) {
      var t = e.a;
      return bl(n(o$, r, t));
    });
  te.Task = Nf(up, sp, mp, gp);
  var dp = ci("Task"),
    He = s(function (r, e) {
      return dp(bl(n(o$, r, e)));
    }),
    pp = s(function (r, e) {
      var t = Dt(e);
      return n(
        He,
        function (a) {
          return Wn;
        },
        n(Us, t, ye(je(u([p("metadata", op(r)), p("history", np(e))]))))
      );
    }),
    u$ = I(function (r, e, t) {
      return { $: "Vertical", a: r, b: e, c: t };
    }),
    bp = s(function (r, e) {
      if (e.$ === "Horizontal") {
        var t = e.a,
          a = e.c;
        return g(Ba, t, r.x / r.width, a);
      } else {
        var t = e.a,
          i = e.b;
        return g(u$, t, i, r.y / r.height);
      }
    }),
    l$ = s(function (r, e) {
      return { $: "Stepping", a: r, b: e };
    }),
    hp = s(function (r, e) {
      return { $: "Done", a: r, b: e };
    }),
    hl = I(function (r, e, t) {
      if (t.$ === "Done") return t;
      var a = t.a,
        i = t.b;
      return a ? n(l$, a - 1, n(r, e, i).a) : n(hp, e, n(r, e, i).a);
    }),
    _l = function (r) {
      r: for (;;)
        if (r.$ === "Done") {
          var e = r.a,
            t = r.b;
          return p(t, e);
        } else {
          var a = r;
          r = a;
          continue r;
        }
    },
    _p = I(function (r, e, t) {
      r: for (;;) {
        var a = t.recent,
          i = t.numMessages - a.numMessages;
        if (ur(e, i) > -1)
          return _l(g(xr, hl(r), n(l$, e - i, a.model), a.messages));
        var $ = n(Ca, (e / En) | 0, t.snapshots);
        if ($.$ === "Nothing") {
          var o = r,
            l = e,
            f = t;
          (r = o), (e = l), (t = f);
          continue r;
        } else {
          var m = $.a.model,
            h = $.a.messages;
          return _l(g(bt, hl(r), n(l$, e % En, m), h));
        }
      }
    }),
    wl = function (r) {
      r: for (;;) {
        var e = r.recent.messages;
        if (e.b) {
          var a = e.a;
          return a;
        } else {
          var t = r;
          r = t;
          continue r;
        }
      }
    },
    La = s(function (r, e) {
      r: for (;;) {
        if (e.$ === "RBEmpty_elm_builtin") return j;
        var t = e.b,
          a = e.c,
          i = e.d,
          $ = e.e,
          o = n(lu, r, t);
        switch (o.$) {
          case "LT":
            var l = r,
              f = i;
            (r = l), (e = f);
            continue r;
          case "EQ":
            return R(a);
          default:
            var l = r,
              f = $;
            (r = l), (e = f);
            continue r;
        }
      }
    }),
    wp = I(function (r, e, t) {
      var a = n(La, e, r);
      if (a.$ === "Nothing") return t;
      var i = a.a;
      return n(c$, i, t);
    }),
    c$ = s(function (r, e) {
      var t = p(r, e);
      r: for (;;)
        switch (t.b.$) {
          case "S":
            return e;
          case "Primitive":
            return e;
          case "Sequence":
            if (t.a.$ === "Sequence") {
              var a = t.a,
                i = a.b,
                $ = a.c,
                o = t.b,
                l = o.a,
                f = o.c;
              return g(nn, l, i, n(v$, $, f));
            } else break r;
          case "Dictionary":
            if (t.a.$ === "Dictionary") {
              var m = t.a,
                i = m.a,
                h = t.b,
                d = h.b;
              return n(yn, i, d);
            } else break r;
          case "Record":
            if (t.a.$ === "Record") {
              var S = t.a,
                i = S.a,
                y = S.b,
                E = t.b,
                B = E.b;
              return n(Yn, i, n(Tt, wp(y), B));
            } else break r;
          default:
            if (t.a.$ === "Constructor") {
              var F = t.a,
                i = F.b,
                $ = F.c,
                A = t.b,
                k = A.a,
                f = A.c;
              return g(Dn, k, i, n(v$, $, f));
            } else break r;
        }
      return e;
    }),
    v$ = s(function (r, e) {
      var t = p(r, e);
      if (t.a.b)
        if (t.b.b) {
          var a = t.a,
            i = a.a,
            $ = a.b,
            o = t.b,
            l = o.a,
            f = o.b;
          return n(b, n(c$, i, l), n(v$, $, f));
        } else return e;
      else return e;
    }),
    nt = s(function (r, e) {
      return n(c$, e, Ke(r));
    }),
    Dl = I(function (r, e, t) {
      var a = cu(t),
        i = wl(a),
        $ = e$(t.state),
        o = g(_p, r, e, a),
        l = o.a,
        f = o.b;
      return q(t, {
        expandoModel: n(nt, l, t.expandoModel),
        expandoMsg: n(nt, f, t.expandoMsg),
        state: N(ul, e, l, $, i, a),
      });
    }),
    Dp = n(xt, ye, Co),
    yp = s(function (r, e) {
      var t = s(function (i, $) {
          var o = $.a,
            l = $.b,
            f = Dp(i);
          return p(n(e, f, o), g(cl, f, o, l));
        }),
        a = function (i) {
          return g(dr, t, p(r, tl(r)), i);
        };
      return n(Te, a, Ft(dl));
    }),
    Sp = function (r) {
      var e = r.snapshots,
        t = r.recent,
        a = n(Ca, 0, e);
      if (a.$ === "Just") {
        var i = a.a.model;
        return i;
      } else return t.model;
    },
    br = pl(w),
    yl = I(function (r, e, t) {
      var a = s(function (h, d) {
          return n(e, h, d).a;
        }),
        i = Sp(t.history),
        $ = n(yp, i, a),
        o = n(Xu, $, r);
      if (o.$ === "Err") return p(q(t, { overlay: sl }), br);
      var l = o.a,
        f = l.a,
        m = l.b;
      return p(
        q(t, {
          expandoModel: Ta(f),
          expandoMsg: Ta(wl(m)),
          history: m,
          overlay: r$,
          state: xa(f),
        }),
        br
      );
    }),
    Sl = function (r) {
      return n(He, Ra(Wn), Js(r));
    },
    Mp = s(function (r, e) {
      return n(He, Ra(Wn), n(zs, r, e));
    }),
    Ml = s(function (r, e) {
      if (e.$ === "Horizontal") {
        var t = e.b,
          a = e.c;
        return g(Ba, r, t, a);
      } else {
        var t = e.b,
          a = e.c;
        return g(u$, r, t, a);
      }
    }),
    Ep = function (r) {
      if (r.$ === "Horizontal") {
        var e = r.a,
          t = r.b,
          a = r.c;
        return g(u$, e, t, a);
      } else {
        var e = r.a,
          t = r.b,
          a = r.c;
        return g(Ba, e, t, a);
      }
    },
    Cp = function (r) {
      r: for (;;)
        if (r.$ === "RBNode_elm_builtin" && r.d.$ === "RBNode_elm_builtin") {
          var e = r.d,
            t = e;
          r = t;
          continue r;
        } else return r;
    },
    El = function (r) {
      if (
        r.$ === "RBNode_elm_builtin" &&
        r.d.$ === "RBNode_elm_builtin" &&
        r.e.$ === "RBNode_elm_builtin"
      )
        if (r.e.d.$ === "RBNode_elm_builtin" && r.e.d.a.$ === "Red") {
          var e = r.a,
            t = r.b,
            a = r.c,
            i = r.d,
            $ = i.a,
            o = i.b,
            l = i.c,
            f = i.d,
            m = i.e,
            h = r.e,
            d = h.a,
            S = h.b,
            y = h.c,
            E = h.d,
            B = E.a,
            F = E.b,
            A = E.c,
            k = E.d,
            Y = E.e,
            Q = h.e;
          return N(
            er,
            kr,
            F,
            A,
            N(er, $e, t, a, N(er, kr, o, l, f, m), k),
            N(er, $e, S, y, Y, Q)
          );
        } else {
          var e = r.a,
            t = r.b,
            a = r.c,
            X = r.d,
            $ = X.a,
            o = X.b,
            l = X.c,
            f = X.d,
            m = X.e,
            lr = r.e,
            d = lr.a,
            S = lr.b,
            y = lr.c,
            E = lr.d,
            Q = lr.e;
          return (
            e.$ === "Black",
            N(er, $e, t, a, N(er, kr, o, l, f, m), N(er, kr, S, y, E, Q))
          );
        }
      else return r;
    },
    Cl = function (r) {
      if (
        r.$ === "RBNode_elm_builtin" &&
        r.d.$ === "RBNode_elm_builtin" &&
        r.e.$ === "RBNode_elm_builtin"
      )
        if (r.d.d.$ === "RBNode_elm_builtin" && r.d.d.a.$ === "Red") {
          var e = r.a,
            t = r.b,
            a = r.c,
            i = r.d,
            $ = i.a,
            o = i.b,
            l = i.c,
            f = i.d,
            m = f.a,
            h = f.b,
            d = f.c,
            S = f.d,
            y = f.e,
            E = i.e,
            B = r.e,
            F = B.a,
            A = B.b,
            k = B.c,
            Y = B.d,
            Q = B.e;
          return N(
            er,
            kr,
            o,
            l,
            N(er, $e, h, d, S, y),
            N(er, $e, t, a, E, N(er, kr, A, k, Y, Q))
          );
        } else {
          var e = r.a,
            t = r.b,
            a = r.c,
            X = r.d,
            $ = X.a,
            o = X.b,
            l = X.c,
            lr = X.d,
            E = X.e,
            Rr = r.e,
            F = Rr.a,
            A = Rr.b,
            k = Rr.c,
            Y = Rr.d,
            Q = Rr.e;
          return (
            e.$ === "Black",
            N(er, $e, t, a, N(er, kr, o, l, lr, E), N(er, kr, A, k, Y, Q))
          );
        }
      else return r;
    },
    Ip = ti(function (r, e, t, a, i, $, o) {
      if ($.$ === "RBNode_elm_builtin" && $.a.$ === "Red") {
        var l = $.a,
          f = $.b,
          m = $.c,
          h = $.d,
          d = $.e;
        return N(er, t, f, m, h, N(er, kr, a, i, d, o));
      } else {
        r: for (;;)
          if (o.$ === "RBNode_elm_builtin" && o.a.$ === "Black")
            if (o.d.$ === "RBNode_elm_builtin")
              if (o.d.a.$ === "Black") {
                var S = o.a,
                  y = o.d,
                  E = y.a;
                return Cl(e);
              } else break r;
            else {
              var B = o.a,
                F = o.d;
              return Cl(e);
            }
          else break r;
        return e;
      }
    }),
    Pa = function (r) {
      if (r.$ === "RBNode_elm_builtin" && r.d.$ === "RBNode_elm_builtin") {
        var e = r.a,
          t = r.b,
          a = r.c,
          i = r.d,
          $ = i.a,
          o = i.d,
          l = r.e;
        if ($.$ === "Black")
          if (o.$ === "RBNode_elm_builtin" && o.a.$ === "Red") {
            var f = o.a;
            return N(er, e, t, a, Pa(i), l);
          } else {
            var m = El(r);
            if (m.$ === "RBNode_elm_builtin") {
              var h = m.a,
                d = m.b,
                S = m.c,
                y = m.d,
                E = m.e;
              return N(Gn, h, d, S, Pa(y), E);
            } else return Re;
          }
        else return N(er, e, t, a, Pa(i), l);
      } else return Re;
    },
    Lt = s(function (r, e) {
      if (e.$ === "RBEmpty_elm_builtin") return Re;
      var t = e.a,
        a = e.b,
        i = e.c,
        $ = e.d,
        o = e.e;
      if (ur(r, a) < 0)
        if ($.$ === "RBNode_elm_builtin" && $.a.$ === "Black") {
          var l = $.a,
            f = $.d;
          if (f.$ === "RBNode_elm_builtin" && f.a.$ === "Red") {
            var m = f.a;
            return N(er, t, a, i, n(Lt, r, $), o);
          } else {
            var h = El(e);
            if (h.$ === "RBNode_elm_builtin") {
              var d = h.a,
                S = h.b,
                y = h.c,
                E = h.d,
                B = h.e;
              return N(Gn, d, S, y, n(Lt, r, E), B);
            } else return Re;
          }
        } else return N(er, t, a, i, n(Lt, r, $), o);
      else return n(Bp, r, Q$(Ip, r, e, t, a, i, $, o));
    }),
    Bp = s(function (r, e) {
      if (e.$ === "RBNode_elm_builtin") {
        var t = e.a,
          a = e.b,
          i = e.c,
          $ = e.d,
          o = e.e;
        if (tr(r, a)) {
          var l = Cp(o);
          if (l.$ === "RBNode_elm_builtin") {
            var f = l.b,
              m = l.c;
            return N(Gn, t, f, m, $, Pa(o));
          } else return Re;
        } else return N(Gn, t, a, i, $, n(Lt, r, o));
      } else return Re;
    }),
    xp = s(function (r, e) {
      var t = n(Lt, r, e);
      if (t.$ === "RBNode_elm_builtin" && t.a.$ === "Red") {
        var a = t.a,
          i = t.b,
          $ = t.c,
          o = t.d,
          l = t.e;
        return N(er, $e, i, $, o, l);
      } else {
        var f = t;
        return f;
      }
    }),
    Fp = I(function (r, e, t) {
      var a = e(n(La, r, t));
      if (a.$ === "Just") {
        var i = a.a;
        return g(Da, r, i, t);
      } else return n(xp, r, t);
    }),
    Pt = I(function (r, e, t) {
      if (t.b) {
        var a = t.a,
          i = t.b;
        return r <= 0 ? n(b, e(a), i) : n(b, a, g(Pt, r - 1, e, i));
      } else return w;
    }),
    Bn = s(function (r, e) {
      switch (e.$) {
        case "S":
          return e;
        case "Primitive":
          return e;
        case "Sequence":
          var t = e.a,
            d = e.b,
            S = e.c;
          switch (r.$) {
            case "Toggle":
              return g(nn, t, !d, S);
            case "Index":
              if (r.a.$ === "None") {
                var a = r.a,
                  i = r.b,
                  $ = r.c;
                return g(nn, t, d, g(Pt, i, Bn($), S));
              } else return e;
            default:
              return e;
          }
        case "Dictionary":
          var d = e.a,
            o = e.b;
          switch (r.$) {
            case "Toggle":
              return n(yn, !d, o);
            case "Index":
              var l = r.a,
                i = r.b,
                $ = r.c;
              switch (l.$) {
                case "None":
                  return e;
                case "Key":
                  return n(
                    yn,
                    d,
                    g(
                      Pt,
                      i,
                      function (F) {
                        var A = F.a,
                          k = F.b;
                        return p(n(Bn, $, A), k);
                      },
                      o
                    )
                  );
                default:
                  return n(
                    yn,
                    d,
                    g(
                      Pt,
                      i,
                      function (F) {
                        var A = F.a,
                          k = F.b;
                        return p(A, n(Bn, $, k));
                      },
                      o
                    )
                  );
              }
            default:
              return e;
          }
        case "Record":
          var d = e.a,
            f = e.b;
          switch (r.$) {
            case "Toggle":
              return n(Yn, !d, f);
            case "Index":
              return e;
            default:
              var m = r.a,
                $ = r.b;
              return n(Yn, d, g(Fp, m, Ap($), f));
          }
        default:
          var h = e.a,
            d = e.b,
            S = e.c;
          switch (r.$) {
            case "Toggle":
              return g(Dn, h, !d, S);
            case "Index":
              if (r.a.$ === "None") {
                var y = r.a,
                  i = r.b,
                  $ = r.c;
                return g(Dn, h, d, g(Pt, i, Bn($), S));
              } else return e;
            default:
              return e;
          }
      }
    }),
    Ap = s(function (r, e) {
      if (e.$ === "Nothing") return e;
      var t = e.a;
      return R(n(Bn, r, t));
    }),
    Tp = function (r) {
      return { $: "Upload", a: r };
    },
    Rp = function (r) {
      return n(He, Tp, Os(r));
    },
    Hp = function (r) {
      return { $: "BadMetadata", a: r };
    },
    kp = Hp,
    f$ = s(function (r, e) {
      var t = r.metadata;
      if (t.$ === "Ok") {
        var a = t.a;
        return e(a);
      } else {
        var i = t.a;
        return p(q(r, { overlay: kp(i) }), br);
      }
    }),
    Il = I(function (r, e, t) {
      r: for (;;)
        switch (e.$) {
          case "NoOp":
            return p(t, br);
          case "UserMsg":
            var a = e.a,
              i = e$(t.state),
              $ = g(cl, a, i, t.history),
              o = n(r, a, i),
              l = o.a,
              f = o.b,
              m = n(il, qn, f),
              h = t.state;
            if (h.$ === "Running")
              return p(
                q(t, {
                  expandoModel: n(nt, l, t.expandoModel),
                  expandoMsg: n(nt, a, t.expandoMsg),
                  history: $,
                  state: xa(l),
                }),
                pl(u([m, Sl(t.popout)]))
              );
            var B = h.a,
              d = h.b,
              S = h.e;
            return p(q(t, { history: $, state: N(ul, B, d, l, a, S) }), m);
          case "TweakExpandoMsg":
            var y = e.a;
            return p(q(t, { expandoMsg: n(Bn, y, t.expandoMsg) }), br);
          case "TweakExpandoModel":
            var y = e.a;
            return p(q(t, { expandoModel: n(Bn, y, t.expandoModel) }), br);
          case "Resume":
            var E = t.state;
            if (E.$ === "Running") return p(t, br);
            var i = E.c,
              a = E.d;
            return p(
              q(t, {
                expandoModel: n(nt, i, t.expandoModel),
                expandoMsg: n(nt, a, t.expandoMsg),
                state: xa(i),
              }),
              Sl(t.popout)
            );
          case "Jump":
            var B = e.a;
            return p(g(Dl, r, B, t), br);
          case "SliderJump":
            var B = e.a;
            return p(g(Dl, r, B, t), n(Mp, Tu(B), t.popout));
          case "Open":
            return p(t, n(He, Ra(Wn), Ls(t.popout)));
          case "Up":
            var F = t.state;
            if (F.$ === "Running") return p(t, br);
            var A = F.a,
              S = F.e,
              k = A + 1;
            if (ur(k, Dt(S)) < 0) {
              var Y = r,
                Q = Xi(k),
                X = t;
              (r = Y), (e = Q), (t = X);
              continue r;
            } else {
              var Y = r,
                Q = Ai,
                X = t;
              (r = Y), (e = Q), (t = X);
              continue r;
            }
          case "Down":
            var lr = t.state;
            if (lr.$ === "Running") {
              var Y = r,
                Q = Fu(Dt(t.history) - 1),
                X = t;
              (r = Y), (e = Q), (t = X);
              continue r;
            } else {
              var B = lr.a;
              if (B > 0) {
                var Y = r,
                  Q = Xi(B - 1),
                  X = t;
                (r = Y), (e = Q), (t = X);
                continue r;
              } else return p(t, br);
            }
          case "Import":
            return n(f$, t, function (Jr) {
              return p(t, Rp(t.popout));
            });
          case "Export":
            return n(f$, t, function (Jr) {
              return p(t, n(pp, Jr, t.history));
            });
          case "Upload":
            var Rr = e.a;
            return n(f$, t, function (Jr) {
              var De = n(Qd, Jr, Rr);
              if (De.$ === "Err") {
                var Ln = De.a;
                return p(q(t, { overlay: Ln }), br);
              } else {
                var ve = De.a;
                return g(yl, ve, r, t);
              }
            });
          case "OverlayMsg":
            var Ye = e.a,
              ce = n(Kd, Ye, t.overlay);
            if (ce.$ === "Nothing") return p(q(t, { overlay: r$ }), br);
            var Lr = ce.a;
            return g(yl, Lr, r, t);
          case "SwapLayout":
            return p(q(t, { layout: Ep(t.layout) }), br);
          case "DragStart":
            return p(q(t, { layout: n(Ml, Cd, t.layout) }), br);
          case "Drag":
            var Pr = e.a;
            return p(q(t, { layout: n(bp, Pr, t.layout) }), br);
          default:
            return p(q(t, { layout: n(Ml, Yu, t.layout) }), br);
        }
    }),
    Lp = function (r) {
      return { $: "External", a: r };
    },
    Pp = function (r) {
      return { $: "Internal", a: r };
    },
    Jp = function (r) {
      return { $: "NotFound", a: r };
    },
    zp = { $: "Http" },
    Op = { $: "Https" },
    Bl = Wr(function (r, e, t, a, i, $) {
      return { fragment: $, host: e, path: a, port_: t, protocol: r, query: i };
    }),
    tt = s(function (r, e) {
      return r < 1 ? e : g(ji, r, Ue(e), e);
    }),
    Ja = uf,
    Jt = function (r) {
      return r === "";
    },
    xl = mr(function (r, e, t, a, i) {
      if (Jt(i) || n(rl, "@", i)) return j;
      var $ = n(Ja, ":", i);
      if ($.b) {
        if ($.b.b) return j;
        var o = $.a,
          l = Gi(n(tt, o + 1, i));
        if (l.$ === "Nothing") return j;
        var f = l;
        return R(dn(Bl, r, n(It, o, i), f, e, t, a));
      } else return R(dn(Bl, r, i, j, e, t, a));
    }),
    Fl = ar(function (r, e, t, a) {
      if (Jt(a)) return j;
      var i = n(Ja, "/", a);
      if (i.b) {
        var $ = i.a;
        return N(xl, r, n(tt, $, a), e, t, n(It, $, a));
      } else return N(xl, r, "/", e, t, a);
    }),
    Al = I(function (r, e, t) {
      if (Jt(t)) return j;
      var a = n(Ja, "?", t);
      if (a.b) {
        var i = a.a;
        return M(Fl, r, R(n(tt, i + 1, t)), e, n(It, i, t));
      } else return M(Fl, r, j, e, t);
    }),
    Tl = s(function (r, e) {
      if (Jt(e)) return j;
      var t = n(Ja, "#", e);
      if (t.b) {
        var a = t.a;
        return g(Al, r, R(n(tt, a + 1, e)), n(It, a, e));
      } else return g(Al, r, j, e);
    }),
    Rl = of,
    s$ = function (r) {
      return n(Rl, "http://", r)
        ? n(Tl, zp, n(tt, 7, r))
        : n(Rl, "https://", r)
        ? n(Tl, Op, n(tt, 8, r))
        : j;
    },
    zt = function (r) {
      r: for (;;) {
        var e = r.a,
          t = e;
        r = t;
        continue r;
      }
    },
    Up = Ns,
    Hl = "en-US",
    Vp = ef,
    jp = Xs,
    m$ = function (r) {
      return n(Vr, r, jp(r));
    },
    Np = function (r) {
      return n(
        rr,
        function (e) {
          var t = n(Ei, "=", e);
          if (t.b && t.b.b && !t.b.b.b) {
            var a = t.a,
              i = t.b,
              $ = i.a;
            return p(m$(Vp(a)), m$($));
          } else return p("error_no_equal_sign", m$(e));
        },
        n(Ei, ";", r)
      );
    },
    Wp = s(function (r, e) {
      if (e.$ === "Ok") {
        var t = e.a;
        return t;
      } else return r;
    }),
    kl = function (r) {
      return n(Wp, w, n(a$, Zu(jr), r));
    },
    g$ = po("stringFromElmToJs", se),
    Yp = function (r) {
      return { language: r };
    },
    Ot = function (r) {
      return { $: "Codec", a: r };
    },
    za = function (r) {
      var e = r.a;
      return Ot({
        decoder: e.decoder,
        encoder: function (t) {
          return je(yr(e.encoder(t)));
        },
      });
    },
    Ll = function (r) {
      return { $: "ObjectCodec", a: r };
    },
    Ut = function (r) {
      var e = r.a;
      return e.decoder;
    },
    Vt = function (r) {
      var e = r.a;
      return e.encoder;
    },
    Ce = ar(function (r, e, t, a) {
      var i = a.a;
      return Ll({
        decoder: g(
          wn,
          s(function ($, o) {
            return $(o);
          }),
          i.decoder,
          n(_r, r, Ut(t))
        ),
        encoder: function ($) {
          return n(b, p(r, n(Vt, t, e($))), i.encoder($));
        },
      });
    }),
    qp = Sf,
    Xp = function (r) {
      return qp(u([n(Te, R, r), en(j)]));
    },
    Gp = kf,
    d$ = function (r) {
      return Ot({
        decoder: Xp(Ut(r)),
        encoder: function (e) {
          if (e.$ === "Nothing") return Gp;
          var t = e.a;
          return n(Vt, r, t);
        },
      });
    },
    Oa = function (r) {
      return Ll({
        decoder: en(r),
        encoder: function (e) {
          return w;
        },
      });
    },
    Pl = s(function (r, e) {
      return Ot({ decoder: e, encoder: r });
    }),
    we = n(Pl, se, jr),
    Zp = za(
      M(
        Ce,
        "language",
        function (r) {
          return r.language;
        },
        d$(we),
        Oa(Yp)
      )
    ),
    p$ = function (r) {
      return a$(Ut(r));
    },
    Jl = s(function (r, e) {
      return (function (t) {
        if (t.$ === "Ok") {
          var a = t.a;
          return q(e, { language: n(Vr, Hl, a.language) });
        } else return e;
      })(n(p$, Zp, r));
    }),
    Qp = function (r) {
      return { user: r };
    },
    Kp = za(
      M(
        Ce,
        "user",
        function (r) {
          return r.user;
        },
        d$(we),
        Oa(Qp)
      )
    ),
    zl = s(function (r, e) {
      return (function (t) {
        if (t.$ === "Ok") {
          var a = t.a;
          return q(e, { user: a.user });
        } else return e;
      })(n(p$, Kp, r));
    }),
    rb = function (r) {
      return p(
        n(
          Jl,
          r.flagsFromHorizon,
          n(zl, r.flagsFromHorizon, {
            cookies: Np(r.cookies),
            counter: 0,
            fromJsHistory: w,
            language: Hl,
            localStorage: kl(r.localStorage),
            string: "String to Host",
            url: r.url,
            user: j,
          })
        ),
        g$("mounted")
      );
    },
    Ua = s(function (r, e) {
      var t = e.a,
        a = e.b;
      return p(r(t), a);
    }),
    eb = function (r) {
      return n(Ua, R, rb(r));
    },
    Ol = vo,
    nb = Ol(w),
    tb = function (r) {
      return { $: "LocalStorageFromJsToElm", a: r };
    },
    ab = function (r) {
      return { $: "StringFromJsToElm", a: r };
    },
    ib = function (r) {
      return { $: "Unmount", a: r };
    },
    $b = fi("localStorageFromJsToElm", jr),
    ob = fi("stringFromJsToElm", jr),
    ub = hf,
    lb = fi("unmount", ub(sr)),
    cb = function (r) {
      return Ol(u([lb(ib), ob(ab), $b(tb)]));
    },
    vb = function (r) {
      if (r.$ === "Just") {
        var e = r.a;
        return cb(e);
      } else return nb;
    },
    fb = po("setLocalStorageItem", function (r) {
      var e = r.a,
        t = r.b;
      return n(cn, et, u([se(e), se(t)]));
    }),
    Ul = "syncedCounter",
    sb = function (r) {
      return { url: r };
    },
    mb = za(
      M(
        Ce,
        "url",
        function (r) {
          return r.url;
        },
        we,
        Oa(sb)
      )
    ),
    gb = s(function (r, e) {
      return (function (t) {
        if (t.$ === "Ok") {
          var a = t.a;
          return q(e, { url: a.url });
        } else return e;
      })(n(p$, mb, r));
    }),
    db = s(function (r, e) {
      switch (r.$) {
        case "NoOp":
          return p(e, br);
        case "Unmount":
          return p(e, br);
        case "ChangeString":
          var a = r.a;
          return p(q(e, { string: a }), br);
        case "SendString":
          var a = r.a;
          return p(e, g$(a));
        case "ChangeCounter":
          var t = r.a;
          return p(q(e, { counter: t }), br);
        case "ChangeSyncedCounter":
          var t = r.a;
          return p(e, fb(p(Ul, C(t))));
        case "StringFromJsToElm":
          var a = r.a;
          return p(
            n(
              gb,
              a,
              n(
                Jl,
                a,
                n(zl, a, q(e, { fromJsHistory: n(b, a, e.fromJsHistory) }))
              )
            ),
            br
          );
        default:
          var a = r.a;
          return p(q(e, { localStorage: kl(a) }), br);
      }
    }),
    pb = s(function (r, e) {
      if (e.$ === "Just") {
        var t = e.a;
        return r.$ === "Unmount"
          ? p(j, g$("unmounted"))
          : n(Ua, R, n(db, r, t));
      } else return p(e, br);
    }),
    bb = function (r) {
      return { $: "ChangeCounter", a: r };
    },
    hb = function (r) {
      return { $: "ChangeString", a: r };
    },
    _b = function (r) {
      return { $: "ChangeSyncedCounter", a: r };
    },
    wb = { $: "NoOp" },
    Db = function (r) {
      return { $: "SendString", a: r };
    },
    Vl = function (r) {
      return { $: "AlignX", a: r };
    },
    yb = { $: "Right" },
    Sb = Vl(yb),
    Mb = function (r) {
      return { $: "AlignY", a: r };
    },
    Eb = { $: "Top" },
    Cb = Mb(Eb),
    jl = s(function (r, e) {
      if (e.$ === "Just") {
        var t = e.a;
        return r(t);
      } else return j;
    }),
    jt = I(function (r, e, t) {
      return { $: "Colored", a: r, b: e, c: t };
    }),
    Sr = s(function (r, e) {
      return { $: "StyleClass", a: r, b: e };
    }),
    Ib = function (r) {
      return { $: "Flag", a: r };
    },
    Bb = function (r) {
      return { $: "Second", a: r };
    },
    fr = function (r) {
      return r > 31 ? Bb(1 << (r - 32)) : Ib(1 << r);
    },
    Nl = fr(14),
    Va = Wv,
    wr = function (r) {
      return C(Va(r * 255));
    },
    Nt = function (r) {
      var e = r.a,
        t = r.b,
        a = r.c,
        i = r.d;
      return wr(e) + ("-" + (wr(t) + ("-" + (wr(a) + ("-" + wr(i))))));
    },
    b$ = function (r) {
      return n(Sr, Nl, g(jt, "fc-" + Nt(r), "color", r));
    },
    vn = ar(function (r, e, t, a) {
      return { $: "Rgba", a: r, b: e, c: t, d: a };
    }),
    xn = I(function (r, e, t) {
      return M(vn, r, e, t, 1);
    }),
    c = {
      above: "a",
      active: "atv",
      alignBottom: "ab",
      alignCenterX: "cx",
      alignCenterY: "cy",
      alignContainerBottom: "acb",
      alignContainerCenterX: "accx",
      alignContainerCenterY: "accy",
      alignContainerRight: "acr",
      alignLeft: "al",
      alignRight: "ar",
      alignTop: "at",
      alignedHorizontally: "ah",
      alignedVertically: "av",
      any: "s",
      behind: "bh",
      below: "b",
      bold: "w7",
      borderDashed: "bd",
      borderDotted: "bdt",
      borderNone: "bn",
      borderSolid: "bs",
      capturePointerEvents: "cpe",
      clip: "cp",
      clipX: "cpx",
      clipY: "cpy",
      column: "c",
      container: "ctr",
      contentBottom: "cb",
      contentCenterX: "ccx",
      contentCenterY: "ccy",
      contentLeft: "cl",
      contentRight: "cr",
      contentTop: "ct",
      cursorPointer: "cptr",
      cursorText: "ctxt",
      focus: "fcs",
      focusedWithin: "focus-within",
      fullSize: "fs",
      grid: "g",
      hasBehind: "hbh",
      heightContent: "hc",
      heightExact: "he",
      heightFill: "hf",
      heightFillPortion: "hfp",
      hover: "hv",
      imageContainer: "ic",
      inFront: "fr",
      inputLabel: "lbl",
      inputMultiline: "iml",
      inputMultilineFiller: "imlf",
      inputMultilineParent: "imlp",
      inputMultilineWrapper: "implw",
      inputText: "it",
      italic: "i",
      link: "lnk",
      nearby: "nb",
      noTextSelection: "notxt",
      onLeft: "ol",
      onRight: "or",
      opaque: "oq",
      overflowHidden: "oh",
      page: "pg",
      paragraph: "p",
      passPointerEvents: "ppe",
      root: "ui",
      row: "r",
      scrollbars: "sb",
      scrollbarsX: "sbx",
      scrollbarsY: "sby",
      seButton: "sbt",
      single: "e",
      sizeByCapital: "cap",
      spaceEvenly: "sev",
      strike: "sk",
      text: "t",
      textCenter: "tc",
      textExtraBold: "w8",
      textExtraLight: "w2",
      textHeavy: "w9",
      textJustify: "tj",
      textJustifyAll: "tja",
      textLeft: "tl",
      textLight: "w3",
      textMedium: "w5",
      textNormalWeight: "w4",
      textRight: "tr",
      textSemiBold: "w6",
      textThin: "w1",
      textUnitalicized: "tun",
      transition: "ts",
      transparent: "clr",
      underline: "u",
      widthContent: "wc",
      widthExact: "we",
      widthFill: "wf",
      widthFillPortion: "wfp",
      wrapped: "wrp",
    },
    Tr = function (r) {
      return { $: "Attr", a: r };
    },
    Mr = function (r) {
      return Tr(Ar(r));
    },
    xb = Mr(c.underline),
    h$ = u([b$(g(xn, 0, 0, 0.8)), xb]),
    Fb = { $: "Button" },
    ja = function (r) {
      return { $: "Describe", a: r };
    },
    hr = function (r) {
      return { $: "Unkeyed", a: r };
    },
    Ab = { $: "AsEl" },
    Gr = Ab,
    Tb = Or,
    Wl = s(function (r, e) {
      return n(di, r, Tb(e));
    }),
    Rb = Wl("disabled"),
    Hb = { $: "Generic" },
    oe = Hb,
    kb = { $: "NoNearbyChildren" },
    Lb = c.any + (" " + c.column),
    Pb = c.any + (" " + c.grid),
    Jb = c.any + (" " + c.page),
    zb = c.any + (" " + c.paragraph),
    Ob = c.any + (" " + c.row),
    Ub = c.any + (" " + c.single),
    Vb = function (r) {
      switch (r.$) {
        case "AsRow":
          return Ob;
        case "AsColumn":
          return Lb;
        case "AsEl":
          return Ub;
        case "AsGrid":
          return Pb;
        case "AsParagraph":
          return zb;
        default:
          return Jb;
      }
    },
    Yl = function (r) {
      return { $: "Keyed", a: r };
    },
    Fn = { $: "NoStyleSheet" },
    ql = function (r) {
      return { $: "Styled", a: r };
    },
    _$ = function (r) {
      return { $: "Unstyled", a: r };
    },
    Xl = s(function (r, e) {
      switch (e.$) {
        case "NoNearbyChildren":
          return r;
        case "ChildrenBehind":
          var t = e.a;
          return G(t, r);
        case "ChildrenInFront":
          var a = e.a;
          return G(r, a);
        default:
          var t = e.a,
            a = e.b;
          return G(t, G(r, a));
      }
    }),
    Gl = I(function (r, e, t) {
      switch (t.$) {
        case "NoNearbyChildren":
          return e;
        case "ChildrenBehind":
          var a = t.a;
          return G(
            n(
              rr,
              function ($) {
                return p(r, $);
              },
              a
            ),
            e
          );
        case "ChildrenInFront":
          var i = t.a;
          return G(
            e,
            n(
              rr,
              function ($) {
                return p(r, $);
              },
              i
            )
          );
        default:
          var a = t.a,
            i = t.b;
          return G(
            n(
              rr,
              function ($) {
                return p(r, $);
              },
              a
            ),
            G(
              e,
              n(
                rr,
                function ($) {
                  return p(r, $);
                },
                i
              )
            )
          );
      }
    }),
    jb = { $: "AsParagraph" },
    at = jb,
    Zl = fr(41),
    Ql = fr(40),
    Kl = fr(42),
    rc = fr(43),
    ec = function (r) {
      return { $: "Set_elm_builtin", a: r };
    },
    nc = ec(Pi),
    ke = function (r) {
      switch (r.$) {
        case "Px":
          var e = r.a;
          return C(e) + "px";
        case "Content":
          return "auto";
        case "Fill":
          var t = r.a;
          return C(t) + "fr";
        case "Min":
          var a = r.a,
            $ = r.b;
          return "min" + (C(a) + ke($));
        default:
          var i = r.a,
            $ = r.b;
          return "max" + (C(i) + ke($));
      }
    },
    w$ = function (r) {
      switch (r.$) {
        case "Untransformed":
          return j;
        case "Moved":
          var e = r.a,
            t = e.a,
            a = e.b,
            i = e.c;
          return R("mv-" + (wr(t) + ("-" + (wr(a) + ("-" + wr(i))))));
        default:
          var $ = r.a,
            o = $.a,
            l = $.b,
            f = $.c,
            m = r.b,
            h = m.a,
            d = m.b,
            S = m.c,
            y = r.c,
            E = y.a,
            B = y.b,
            F = y.c,
            A = r.d;
          return R(
            "tfrm-" +
              (wr(o) +
                ("-" +
                  (wr(l) +
                    ("-" +
                      (wr(f) +
                        ("-" +
                          (wr(h) +
                            ("-" +
                              (wr(d) +
                                ("-" +
                                  (wr(S) +
                                    ("-" +
                                      (wr(E) +
                                        ("-" +
                                          (wr(B) +
                                            ("-" +
                                              (wr(F) +
                                                ("-" + wr(A)))))))))))))))))))
          );
      }
    },
    Wt = function (r) {
      switch (r.$) {
        case "Shadows":
          var E = r.a;
          return E;
        case "Transparency":
          var E = r.a,
            e = r.b;
          return E;
        case "Style":
          var a = r.a;
          return a;
        case "FontFamily":
          var E = r.a;
          return E;
        case "FontSize":
          var t = r.a;
          return "font-size-" + C(t);
        case "Single":
          var a = r.a;
          return a;
        case "Colored":
          var a = r.a;
          return a;
        case "SpacingStyle":
          var $ = r.a,
            B = r.b,
            i = r.c;
          return $;
        case "PaddingStyle":
          var $ = r.a,
            o = r.b,
            l = r.c,
            f = r.d,
            m = r.e;
          return $;
        case "BorderWidth":
          var $ = r.a,
            o = r.b,
            l = r.c,
            f = r.d,
            m = r.e;
          return $;
        case "GridTemplateStyle":
          var h = r.a;
          return (
            "grid-rows-" +
            (n(K, "-", n(rr, ke, h.rows)) +
              ("-cols-" +
                (n(K, "-", n(rr, ke, h.columns)) +
                  ("-space-x-" +
                    (ke(h.spacing.a) + ("-space-y-" + ke(h.spacing.b)))))))
          );
        case "GridPosition":
          var d = r.a;
          return (
            "gp grid-pos-" +
            (C(d.row) +
              ("-" + (C(d.col) + ("-" + (C(d.width) + ("-" + C(d.height)))))))
          );
        case "PseudoSelector":
          var S = r.a,
            y = r.b,
            E = (function () {
              switch (S.$) {
                case "Focus":
                  return "fs";
                case "Hover":
                  return "hv";
                default:
                  return "act";
              }
            })();
          return n(
            K,
            " ",
            n(
              rr,
              function (F) {
                var A = Wt(F);
                if (A === "") return "";
                var k = A;
                return k + ("-" + E);
              },
              y
            )
          );
        default:
          var B = r.a;
          return n(Vr, "", w$(B));
      }
    },
    Nb = s(function (r, e) {
      var t = e.a;
      return ec(g(Da, r, sr, t));
    }),
    Wb = s(function (r, e) {
      var t = n(La, r, e);
      return t.$ === "Just";
    }),
    Yb = s(function (r, e) {
      var t = e.a;
      return n(Wb, r, t);
    }),
    tc = s(function (r, e) {
      var t = e.a,
        a = e.b,
        i = Wt(r);
      return n(Yb, i, t) ? e : p(n(Nb, i, t), n(b, r, a));
    }),
    nr = s(function (r, e) {
      return { $: "Property", a: r, b: e };
    }),
    ac = s(function (r, e) {
      return { $: "Style", a: r, b: e };
    }),
    _ = function (r) {
      return "." + r;
    },
    it = function (r) {
      var e = r.a,
        t = r.b,
        a = r.c,
        i = r.d;
      return (
        "rgba(" +
        (C(Va(e * 255)) +
          ("," +
            C(Va(t * 255)) +
            ("," + C(Va(a * 255)) + ("," + (ir(i) + ")")))))
      );
    },
    ic = function (r) {
      return n(
        K,
        " ",
        n(
          ln,
          et,
          u([
            r.inset ? R("inset") : j,
            R(ir(r.offset.a) + "px"),
            R(ir(r.offset.b) + "px"),
            R(ir(r.blur) + "px"),
            R(ir(r.size) + "px"),
            R(it(r.color)),
          ])
        )
      );
    },
    fn = s(function (r, e) {
      if (e.$ === "Just") {
        var t = e.a;
        return R(r(t));
      } else return j;
    }),
    $c = s(function (r, e) {
      var t = e.a,
        a = e.b;
      return p(t, r(a));
    }),
    oc = function (r) {
      return u([
        n(
          ac,
          _(c.focusedWithin) + ":focus-within",
          n(
            ln,
            et,
            u([
              n(
                fn,
                function (e) {
                  return n(nr, "border-color", it(e));
                },
                r.borderColor
              ),
              n(
                fn,
                function (e) {
                  return n(nr, "background-color", it(e));
                },
                r.backgroundColor
              ),
              n(
                fn,
                function (e) {
                  return n(
                    nr,
                    "box-shadow",
                    ic({
                      blur: e.blur,
                      color: e.color,
                      inset: !1,
                      offset: n($c, ba, n(Ua, ba, e.offset)),
                      size: e.size,
                    })
                  );
                },
                r.shadow
              ),
              R(n(nr, "outline", "none")),
            ])
          )
        ),
        n(
          ac,
          _(c.any) +
            ":focus .focusable, " +
            (_(c.any) +
              ".focusable:focus, " +
              (".ui-slide-bar:focus + " + (_(c.any) + " .focusable-thumb"))),
          n(
            ln,
            et,
            u([
              n(
                fn,
                function (e) {
                  return n(nr, "border-color", it(e));
                },
                r.borderColor
              ),
              n(
                fn,
                function (e) {
                  return n(nr, "background-color", it(e));
                },
                r.backgroundColor
              ),
              n(
                fn,
                function (e) {
                  return n(
                    nr,
                    "box-shadow",
                    ic({
                      blur: e.blur,
                      color: e.color,
                      inset: !1,
                      offset: n($c, ba, n(Ua, ba, e.offset)),
                      size: e.size,
                    })
                  );
                },
                r.shadow
              ),
              R(n(nr, "outline", "none")),
            ])
          )
        ),
      ]);
    },
    uc = s(function (r, e) {
      return n(di, vs(r), ms(e));
    }),
    D$ = s(function (r, e) {
      return { $: "AllChildren", a: r, b: e };
    }),
    y$ = function (r) {
      return { $: "Batch", a: r };
    },
    W = s(function (r, e) {
      return { $: "Child", a: r, b: e };
    }),
    me = s(function (r, e) {
      return { $: "Class", a: r, b: e };
    }),
    x = s(function (r, e) {
      return { $: "Descriptor", a: r, b: e };
    }),
    lc = { $: "Left" },
    v = s(function (r, e) {
      return { $: "Prop", a: r, b: e };
    }),
    cc = { $: "Right" },
    Na = function (r) {
      return { $: "Self", a: r };
    },
    qb = s(function (r, e) {
      return { $: "Supports", a: r, b: e };
    }),
    Xb = function (r) {
      return { $: "Content", a: r };
    },
    Gb = { $: "Bottom" },
    Zb = { $: "CenterX" },
    Qb = { $: "CenterY" },
    Kb = { $: "Top" },
    vc = u([Kb, Gb, cc, lc, Zb, Qb]),
    rh = function (r) {
      switch (r.a.$) {
        case "Top":
          var e = r.a;
          return _(c.contentTop);
        case "Bottom":
          var t = r.a;
          return _(c.contentBottom);
        case "Right":
          var a = r.a;
          return _(c.contentRight);
        case "Left":
          var i = r.a;
          return _(c.contentLeft);
        case "CenterX":
          var $ = r.a;
          return _(c.contentCenterX);
        default:
          var o = r.a;
          return _(c.contentCenterY);
      }
    },
    Wa = function (r) {
      switch (r.a.$) {
        case "Top":
          var e = r.a;
          return _(c.alignTop);
        case "Bottom":
          var t = r.a;
          return _(c.alignBottom);
        case "Right":
          var a = r.a;
          return _(c.alignRight);
        case "Left":
          var i = r.a;
          return _(c.alignLeft);
        case "CenterX":
          var $ = r.a;
          return _(c.alignCenterX);
        default:
          var o = r.a;
          return _(c.alignCenterY);
      }
    },
    Yt = function (r) {
      var e = function (t) {
        var a = r(t),
          i = a.a,
          $ = a.b;
        return u([n(x, rh(Xb(t)), i), n(W, _(c.any), u([n(x, Wa(Na(t)), $)]))]);
      };
      return y$(n(Fa, e, vc));
    },
    fc = u([
      n(v, "display", "flex"),
      n(v, "flex-direction", "column"),
      n(v, "white-space", "pre"),
      n(
        x,
        _(c.hasBehind),
        u([n(v, "z-index", "0"), n(W, _(c.behind), u([n(v, "z-index", "-1")]))])
      ),
      n(
        x,
        _(c.seButton),
        u([
          n(
            W,
            _(c.text),
            u([
              n(x, _(c.heightFill), u([n(v, "flex-grow", "0")])),
              n(x, _(c.widthFill), u([n(v, "align-self", "auto !important")])),
            ])
          ),
        ])
      ),
      n(W, _(c.heightContent), u([n(v, "height", "auto")])),
      n(W, _(c.heightFill), u([n(v, "flex-grow", "100000")])),
      n(W, _(c.widthFill), u([n(v, "width", "100%")])),
      n(W, _(c.widthFillPortion), u([n(v, "width", "100%")])),
      n(W, _(c.widthContent), u([n(v, "align-self", "flex-start")])),
      Yt(function (r) {
        switch (r.$) {
          case "Top":
            return p(
              u([n(v, "justify-content", "flex-start")]),
              u([
                n(v, "margin-bottom", "auto !important"),
                n(v, "margin-top", "0 !important"),
              ])
            );
          case "Bottom":
            return p(
              u([n(v, "justify-content", "flex-end")]),
              u([
                n(v, "margin-top", "auto !important"),
                n(v, "margin-bottom", "0 !important"),
              ])
            );
          case "Right":
            return p(
              u([n(v, "align-items", "flex-end")]),
              u([n(v, "align-self", "flex-end")])
            );
          case "Left":
            return p(
              u([n(v, "align-items", "flex-start")]),
              u([n(v, "align-self", "flex-start")])
            );
          case "CenterX":
            return p(
              u([n(v, "align-items", "center")]),
              u([n(v, "align-self", "center")])
            );
          default:
            return p(
              u([
                n(
                  W,
                  _(c.any),
                  u([n(v, "margin-top", "auto"), n(v, "margin-bottom", "auto")])
                ),
              ]),
              u([
                n(v, "margin-top", "auto !important"),
                n(v, "margin-bottom", "auto !important"),
              ])
            );
        }
      }),
    ]),
    eh = function (r) {
      var e = function (t) {
        return u([n(W, _(c.any), u([n(x, Wa(Na(t)), r(t))]))]);
      };
      return y$(n(Fa, e, vc));
    },
    sc = { $: "Above" },
    nh = { $: "Behind" },
    th = { $: "Below" },
    ah = { $: "OnLeft" },
    ih = { $: "OnRight" },
    $h = { $: "Within" },
    oh = (function () {
      var r = sc,
        e = (function () {
          switch (r.$) {
            case "Above":
              return sr;
            case "Below":
              return sr;
            case "OnRight":
              return sr;
            case "OnLeft":
              return sr;
            case "Within":
              return sr;
            default:
              return sr;
          }
        })();
      return u([sc, th, ih, ah, $h, nh]);
    })(),
    uh = u([
      n(
        me,
        "html,body",
        u([n(v, "height", "100%"), n(v, "padding", "0"), n(v, "margin", "0")])
      ),
      n(
        me,
        G(_(c.any), G(_(c.single), _(c.imageContainer))),
        u([
          n(v, "display", "block"),
          n(
            x,
            _(c.heightFill),
            u([
              n(
                W,
                "img",
                u([n(v, "max-height", "100%"), n(v, "object-fit", "cover")])
              ),
            ])
          ),
          n(
            x,
            _(c.widthFill),
            u([
              n(
                W,
                "img",
                u([n(v, "max-width", "100%"), n(v, "object-fit", "cover")])
              ),
            ])
          ),
        ])
      ),
      n(me, _(c.any) + ":focus", u([n(v, "outline", "none")])),
      n(
        me,
        _(c.root),
        u([
          n(v, "width", "100%"),
          n(v, "height", "auto"),
          n(v, "min-height", "100%"),
          n(v, "z-index", "0"),
          n(
            x,
            G(_(c.any), _(c.heightFill)),
            u([
              n(v, "height", "100%"),
              n(W, _(c.heightFill), u([n(v, "height", "100%")])),
            ])
          ),
          n(
            W,
            _(c.inFront),
            u([
              n(
                x,
                _(c.nearby),
                u([n(v, "position", "fixed"), n(v, "z-index", "20")])
              ),
            ])
          ),
        ])
      ),
      n(
        me,
        _(c.nearby),
        u([
          n(v, "position", "relative"),
          n(v, "border", "none"),
          n(v, "display", "flex"),
          n(v, "flex-direction", "row"),
          n(v, "flex-basis", "auto"),
          n(x, _(c.single), fc),
          y$(
            (function (r) {
              return n(rr, r, oh);
            })(function (r) {
              switch (r.$) {
                case "Above":
                  return n(
                    x,
                    _(c.above),
                    u([
                      n(v, "position", "absolute"),
                      n(v, "bottom", "100%"),
                      n(v, "left", "0"),
                      n(v, "width", "100%"),
                      n(v, "z-index", "20"),
                      n(v, "margin", "0 !important"),
                      n(W, _(c.heightFill), u([n(v, "height", "auto")])),
                      n(W, _(c.widthFill), u([n(v, "width", "100%")])),
                      n(v, "pointer-events", "none"),
                      n(W, "*", u([n(v, "pointer-events", "auto")])),
                    ])
                  );
                case "Below":
                  return n(
                    x,
                    _(c.below),
                    u([
                      n(v, "position", "absolute"),
                      n(v, "bottom", "0"),
                      n(v, "left", "0"),
                      n(v, "height", "0"),
                      n(v, "width", "100%"),
                      n(v, "z-index", "20"),
                      n(v, "margin", "0 !important"),
                      n(v, "pointer-events", "none"),
                      n(W, "*", u([n(v, "pointer-events", "auto")])),
                      n(W, _(c.heightFill), u([n(v, "height", "auto")])),
                    ])
                  );
                case "OnRight":
                  return n(
                    x,
                    _(c.onRight),
                    u([
                      n(v, "position", "absolute"),
                      n(v, "left", "100%"),
                      n(v, "top", "0"),
                      n(v, "height", "100%"),
                      n(v, "margin", "0 !important"),
                      n(v, "z-index", "20"),
                      n(v, "pointer-events", "none"),
                      n(W, "*", u([n(v, "pointer-events", "auto")])),
                    ])
                  );
                case "OnLeft":
                  return n(
                    x,
                    _(c.onLeft),
                    u([
                      n(v, "position", "absolute"),
                      n(v, "right", "100%"),
                      n(v, "top", "0"),
                      n(v, "height", "100%"),
                      n(v, "margin", "0 !important"),
                      n(v, "z-index", "20"),
                      n(v, "pointer-events", "none"),
                      n(W, "*", u([n(v, "pointer-events", "auto")])),
                    ])
                  );
                case "Within":
                  return n(
                    x,
                    _(c.inFront),
                    u([
                      n(v, "position", "absolute"),
                      n(v, "width", "100%"),
                      n(v, "height", "100%"),
                      n(v, "left", "0"),
                      n(v, "top", "0"),
                      n(v, "margin", "0 !important"),
                      n(v, "pointer-events", "none"),
                      n(W, "*", u([n(v, "pointer-events", "auto")])),
                    ])
                  );
                default:
                  return n(
                    x,
                    _(c.behind),
                    u([
                      n(v, "position", "absolute"),
                      n(v, "width", "100%"),
                      n(v, "height", "100%"),
                      n(v, "left", "0"),
                      n(v, "top", "0"),
                      n(v, "margin", "0 !important"),
                      n(v, "z-index", "0"),
                      n(v, "pointer-events", "none"),
                      n(W, "*", u([n(v, "pointer-events", "auto")])),
                    ])
                  );
              }
            })
          ),
        ])
      ),
      n(
        me,
        _(c.any),
        u([
          n(v, "position", "relative"),
          n(v, "border", "none"),
          n(v, "flex-shrink", "0"),
          n(v, "display", "flex"),
          n(v, "flex-direction", "row"),
          n(v, "flex-basis", "auto"),
          n(v, "resize", "none"),
          n(v, "font-feature-settings", "inherit"),
          n(v, "box-sizing", "border-box"),
          n(v, "margin", "0"),
          n(v, "padding", "0"),
          n(v, "border-width", "0"),
          n(v, "border-style", "solid"),
          n(v, "font-size", "inherit"),
          n(v, "color", "inherit"),
          n(v, "font-family", "inherit"),
          n(v, "line-height", "1"),
          n(v, "font-weight", "inherit"),
          n(v, "text-decoration", "none"),
          n(v, "font-style", "inherit"),
          n(x, _(c.wrapped), u([n(v, "flex-wrap", "wrap")])),
          n(
            x,
            _(c.noTextSelection),
            u([
              n(v, "-moz-user-select", "none"),
              n(v, "-webkit-user-select", "none"),
              n(v, "-ms-user-select", "none"),
              n(v, "user-select", "none"),
            ])
          ),
          n(x, _(c.cursorPointer), u([n(v, "cursor", "pointer")])),
          n(x, _(c.cursorText), u([n(v, "cursor", "text")])),
          n(
            x,
            _(c.passPointerEvents),
            u([n(v, "pointer-events", "none !important")])
          ),
          n(
            x,
            _(c.capturePointerEvents),
            u([n(v, "pointer-events", "auto !important")])
          ),
          n(x, _(c.transparent), u([n(v, "opacity", "0")])),
          n(x, _(c.opaque), u([n(v, "opacity", "1")])),
          n(
            x,
            _(G(c.hover, c.transparent)) + ":hover",
            u([n(v, "opacity", "0")])
          ),
          n(x, _(G(c.hover, c.opaque)) + ":hover", u([n(v, "opacity", "1")])),
          n(
            x,
            _(G(c.focus, c.transparent)) + ":focus",
            u([n(v, "opacity", "0")])
          ),
          n(x, _(G(c.focus, c.opaque)) + ":focus", u([n(v, "opacity", "1")])),
          n(
            x,
            _(G(c.active, c.transparent)) + ":active",
            u([n(v, "opacity", "0")])
          ),
          n(x, _(G(c.active, c.opaque)) + ":active", u([n(v, "opacity", "1")])),
          n(
            x,
            _(c.transition),
            u([
              n(
                v,
                "transition",
                n(
                  K,
                  ", ",
                  n(
                    rr,
                    function (r) {
                      return r + " 160ms";
                    },
                    u([
                      "transform",
                      "opacity",
                      "filter",
                      "background-color",
                      "color",
                      "font-size",
                    ])
                  )
                )
              ),
            ])
          ),
          n(
            x,
            _(c.scrollbars),
            u([n(v, "overflow", "auto"), n(v, "flex-shrink", "1")])
          ),
          n(
            x,
            _(c.scrollbarsX),
            u([
              n(v, "overflow-x", "auto"),
              n(x, _(c.row), u([n(v, "flex-shrink", "1")])),
            ])
          ),
          n(
            x,
            _(c.scrollbarsY),
            u([
              n(v, "overflow-y", "auto"),
              n(x, _(c.column), u([n(v, "flex-shrink", "1")])),
              n(x, _(c.single), u([n(v, "flex-shrink", "1")])),
            ])
          ),
          n(x, _(c.clip), u([n(v, "overflow", "hidden")])),
          n(x, _(c.clipX), u([n(v, "overflow-x", "hidden")])),
          n(x, _(c.clipY), u([n(v, "overflow-y", "hidden")])),
          n(x, _(c.widthContent), u([n(v, "width", "auto")])),
          n(x, _(c.borderNone), u([n(v, "border-width", "0")])),
          n(x, _(c.borderDashed), u([n(v, "border-style", "dashed")])),
          n(x, _(c.borderDotted), u([n(v, "border-style", "dotted")])),
          n(x, _(c.borderSolid), u([n(v, "border-style", "solid")])),
          n(
            x,
            _(c.text),
            u([n(v, "white-space", "pre"), n(v, "display", "inline-block")])
          ),
          n(
            x,
            _(c.inputText),
            u([
              n(v, "line-height", "1.05"),
              n(v, "background", "transparent"),
              n(v, "text-align", "inherit"),
            ])
          ),
          n(x, _(c.single), fc),
          n(
            x,
            _(c.row),
            u([
              n(v, "display", "flex"),
              n(v, "flex-direction", "row"),
              n(
                W,
                _(c.any),
                u([
                  n(v, "flex-basis", "0%"),
                  n(x, _(c.widthExact), u([n(v, "flex-basis", "auto")])),
                  n(x, _(c.link), u([n(v, "flex-basis", "auto")])),
                ])
              ),
              n(
                W,
                _(c.heightFill),
                u([n(v, "align-self", "stretch !important")])
              ),
              n(
                W,
                _(c.heightFillPortion),
                u([n(v, "align-self", "stretch !important")])
              ),
              n(W, _(c.widthFill), u([n(v, "flex-grow", "100000")])),
              n(
                W,
                _(c.container),
                u([
                  n(v, "flex-grow", "0"),
                  n(v, "flex-basis", "auto"),
                  n(v, "align-self", "stretch"),
                ])
              ),
              n(
                W,
                "u:first-of-type." + c.alignContainerRight,
                u([n(v, "flex-grow", "1")])
              ),
              n(
                W,
                "s:first-of-type." + c.alignContainerCenterX,
                u([
                  n(v, "flex-grow", "1"),
                  n(
                    W,
                    _(c.alignCenterX),
                    u([n(v, "margin-left", "auto !important")])
                  ),
                ])
              ),
              n(
                W,
                "s:last-of-type." + c.alignContainerCenterX,
                u([
                  n(v, "flex-grow", "1"),
                  n(
                    W,
                    _(c.alignCenterX),
                    u([n(v, "margin-right", "auto !important")])
                  ),
                ])
              ),
              n(
                W,
                "s:only-of-type." + c.alignContainerCenterX,
                u([
                  n(v, "flex-grow", "1"),
                  n(
                    W,
                    _(c.alignCenterY),
                    u([
                      n(v, "margin-top", "auto !important"),
                      n(v, "margin-bottom", "auto !important"),
                    ])
                  ),
                ])
              ),
              n(
                W,
                "s:last-of-type." + (c.alignContainerCenterX + " ~ u"),
                u([n(v, "flex-grow", "0")])
              ),
              n(
                W,
                "u:first-of-type." +
                  (c.alignContainerRight + (" ~ s." + c.alignContainerCenterX)),
                u([n(v, "flex-grow", "0")])
              ),
              Yt(function (r) {
                switch (r.$) {
                  case "Top":
                    return p(
                      u([n(v, "align-items", "flex-start")]),
                      u([n(v, "align-self", "flex-start")])
                    );
                  case "Bottom":
                    return p(
                      u([n(v, "align-items", "flex-end")]),
                      u([n(v, "align-self", "flex-end")])
                    );
                  case "Right":
                    return p(u([n(v, "justify-content", "flex-end")]), w);
                  case "Left":
                    return p(u([n(v, "justify-content", "flex-start")]), w);
                  case "CenterX":
                    return p(u([n(v, "justify-content", "center")]), w);
                  default:
                    return p(
                      u([n(v, "align-items", "center")]),
                      u([n(v, "align-self", "center")])
                    );
                }
              }),
              n(
                x,
                _(c.spaceEvenly),
                u([n(v, "justify-content", "space-between")])
              ),
              n(x, _(c.inputLabel), u([n(v, "align-items", "baseline")])),
            ])
          ),
          n(
            x,
            _(c.column),
            u([
              n(v, "display", "flex"),
              n(v, "flex-direction", "column"),
              n(
                W,
                _(c.any),
                u([
                  n(v, "flex-basis", "0px"),
                  n(v, "min-height", "min-content"),
                  n(x, _(c.heightExact), u([n(v, "flex-basis", "auto")])),
                ])
              ),
              n(W, _(c.heightFill), u([n(v, "flex-grow", "100000")])),
              n(W, _(c.widthFill), u([n(v, "width", "100%")])),
              n(W, _(c.widthFillPortion), u([n(v, "width", "100%")])),
              n(W, _(c.widthContent), u([n(v, "align-self", "flex-start")])),
              n(
                W,
                "u:first-of-type." + c.alignContainerBottom,
                u([n(v, "flex-grow", "1")])
              ),
              n(
                W,
                "s:first-of-type." + c.alignContainerCenterY,
                u([
                  n(v, "flex-grow", "1"),
                  n(
                    W,
                    _(c.alignCenterY),
                    u([
                      n(v, "margin-top", "auto !important"),
                      n(v, "margin-bottom", "0 !important"),
                    ])
                  ),
                ])
              ),
              n(
                W,
                "s:last-of-type." + c.alignContainerCenterY,
                u([
                  n(v, "flex-grow", "1"),
                  n(
                    W,
                    _(c.alignCenterY),
                    u([
                      n(v, "margin-bottom", "auto !important"),
                      n(v, "margin-top", "0 !important"),
                    ])
                  ),
                ])
              ),
              n(
                W,
                "s:only-of-type." + c.alignContainerCenterY,
                u([
                  n(v, "flex-grow", "1"),
                  n(
                    W,
                    _(c.alignCenterY),
                    u([
                      n(v, "margin-top", "auto !important"),
                      n(v, "margin-bottom", "auto !important"),
                    ])
                  ),
                ])
              ),
              n(
                W,
                "s:last-of-type." + (c.alignContainerCenterY + " ~ u"),
                u([n(v, "flex-grow", "0")])
              ),
              n(
                W,
                "u:first-of-type." +
                  (c.alignContainerBottom +
                    (" ~ s." + c.alignContainerCenterY)),
                u([n(v, "flex-grow", "0")])
              ),
              Yt(function (r) {
                switch (r.$) {
                  case "Top":
                    return p(
                      u([n(v, "justify-content", "flex-start")]),
                      u([n(v, "margin-bottom", "auto")])
                    );
                  case "Bottom":
                    return p(
                      u([n(v, "justify-content", "flex-end")]),
                      u([n(v, "margin-top", "auto")])
                    );
                  case "Right":
                    return p(
                      u([n(v, "align-items", "flex-end")]),
                      u([n(v, "align-self", "flex-end")])
                    );
                  case "Left":
                    return p(
                      u([n(v, "align-items", "flex-start")]),
                      u([n(v, "align-self", "flex-start")])
                    );
                  case "CenterX":
                    return p(
                      u([n(v, "align-items", "center")]),
                      u([n(v, "align-self", "center")])
                    );
                  default:
                    return p(u([n(v, "justify-content", "center")]), w);
                }
              }),
              n(
                W,
                _(c.container),
                u([
                  n(v, "flex-grow", "0"),
                  n(v, "flex-basis", "auto"),
                  n(v, "width", "100%"),
                  n(v, "align-self", "stretch !important"),
                ])
              ),
              n(
                x,
                _(c.spaceEvenly),
                u([n(v, "justify-content", "space-between")])
              ),
            ])
          ),
          n(
            x,
            _(c.grid),
            u([
              n(v, "display", "-ms-grid"),
              n(W, ".gp", u([n(W, _(c.any), u([n(v, "width", "100%")]))])),
              n(qb, p("display", "grid"), u([p("display", "grid")])),
              eh(function (r) {
                switch (r.$) {
                  case "Top":
                    return u([n(v, "justify-content", "flex-start")]);
                  case "Bottom":
                    return u([n(v, "justify-content", "flex-end")]);
                  case "Right":
                    return u([n(v, "align-items", "flex-end")]);
                  case "Left":
                    return u([n(v, "align-items", "flex-start")]);
                  case "CenterX":
                    return u([n(v, "align-items", "center")]);
                  default:
                    return u([n(v, "justify-content", "center")]);
                }
              }),
            ])
          ),
          n(
            x,
            _(c.page),
            u([
              n(v, "display", "block"),
              n(
                W,
                _(c.any + ":first-child"),
                u([n(v, "margin", "0 !important")])
              ),
              n(
                W,
                _(c.any + (Wa(Na(lc)) + (":first-child + ." + c.any))),
                u([n(v, "margin", "0 !important")])
              ),
              n(
                W,
                _(c.any + (Wa(Na(cc)) + (":first-child + ." + c.any))),
                u([n(v, "margin", "0 !important")])
              ),
              Yt(function (r) {
                switch (r.$) {
                  case "Top":
                    return p(w, w);
                  case "Bottom":
                    return p(w, w);
                  case "Right":
                    return p(
                      w,
                      u([
                        n(v, "float", "right"),
                        n(
                          x,
                          "::after",
                          u([
                            n(v, "content", '""'),
                            n(v, "display", "table"),
                            n(v, "clear", "both"),
                          ])
                        ),
                      ])
                    );
                  case "Left":
                    return p(
                      w,
                      u([
                        n(v, "float", "left"),
                        n(
                          x,
                          "::after",
                          u([
                            n(v, "content", '""'),
                            n(v, "display", "table"),
                            n(v, "clear", "both"),
                          ])
                        ),
                      ])
                    );
                  case "CenterX":
                    return p(w, w);
                  default:
                    return p(w, w);
                }
              }),
            ])
          ),
          n(
            x,
            _(c.inputMultiline),
            u([
              n(v, "white-space", "pre-wrap !important"),
              n(v, "height", "100%"),
              n(v, "width", "100%"),
              n(v, "background-color", "transparent"),
            ])
          ),
          n(
            x,
            _(c.inputMultilineWrapper),
            u([n(x, _(c.single), u([n(v, "flex-basis", "auto")]))])
          ),
          n(
            x,
            _(c.inputMultilineParent),
            u([
              n(v, "white-space", "pre-wrap !important"),
              n(v, "cursor", "text"),
              n(
                W,
                _(c.inputMultilineFiller),
                u([
                  n(v, "white-space", "pre-wrap !important"),
                  n(v, "color", "transparent"),
                ])
              ),
            ])
          ),
          n(
            x,
            _(c.paragraph),
            u([
              n(v, "display", "block"),
              n(v, "white-space", "normal"),
              n(v, "overflow-wrap", "break-word"),
              n(
                x,
                _(c.hasBehind),
                u([
                  n(v, "z-index", "0"),
                  n(W, _(c.behind), u([n(v, "z-index", "-1")])),
                ])
              ),
              n(
                D$,
                _(c.text),
                u([n(v, "display", "inline"), n(v, "white-space", "normal")])
              ),
              n(
                D$,
                _(c.paragraph),
                u([
                  n(v, "display", "inline"),
                  n(x, "::after", u([n(v, "content", "none")])),
                  n(x, "::before", u([n(v, "content", "none")])),
                ])
              ),
              n(
                D$,
                _(c.single),
                u([
                  n(v, "display", "inline"),
                  n(v, "white-space", "normal"),
                  n(x, _(c.widthExact), u([n(v, "display", "inline-block")])),
                  n(x, _(c.inFront), u([n(v, "display", "flex")])),
                  n(x, _(c.behind), u([n(v, "display", "flex")])),
                  n(x, _(c.above), u([n(v, "display", "flex")])),
                  n(x, _(c.below), u([n(v, "display", "flex")])),
                  n(x, _(c.onRight), u([n(v, "display", "flex")])),
                  n(x, _(c.onLeft), u([n(v, "display", "flex")])),
                  n(
                    W,
                    _(c.text),
                    u([
                      n(v, "display", "inline"),
                      n(v, "white-space", "normal"),
                    ])
                  ),
                ])
              ),
              n(W, _(c.row), u([n(v, "display", "inline")])),
              n(W, _(c.column), u([n(v, "display", "inline-flex")])),
              n(W, _(c.grid), u([n(v, "display", "inline-grid")])),
              Yt(function (r) {
                switch (r.$) {
                  case "Top":
                    return p(w, w);
                  case "Bottom":
                    return p(w, w);
                  case "Right":
                    return p(w, u([n(v, "float", "right")]));
                  case "Left":
                    return p(w, u([n(v, "float", "left")]));
                  case "CenterX":
                    return p(w, w);
                  default:
                    return p(w, w);
                }
              }),
            ])
          ),
          n(x, ".hidden", u([n(v, "display", "none")])),
          n(x, _(c.textThin), u([n(v, "font-weight", "100")])),
          n(x, _(c.textExtraLight), u([n(v, "font-weight", "200")])),
          n(x, _(c.textLight), u([n(v, "font-weight", "300")])),
          n(x, _(c.textNormalWeight), u([n(v, "font-weight", "400")])),
          n(x, _(c.textMedium), u([n(v, "font-weight", "500")])),
          n(x, _(c.textSemiBold), u([n(v, "font-weight", "600")])),
          n(x, _(c.bold), u([n(v, "font-weight", "700")])),
          n(x, _(c.textExtraBold), u([n(v, "font-weight", "800")])),
          n(x, _(c.textHeavy), u([n(v, "font-weight", "900")])),
          n(x, _(c.italic), u([n(v, "font-style", "italic")])),
          n(x, _(c.strike), u([n(v, "text-decoration", "line-through")])),
          n(
            x,
            _(c.underline),
            u([
              n(v, "text-decoration", "underline"),
              n(v, "text-decoration-skip-ink", "auto"),
              n(v, "text-decoration-skip", "ink"),
            ])
          ),
          n(
            x,
            G(_(c.underline), _(c.strike)),
            u([
              n(v, "text-decoration", "line-through underline"),
              n(v, "text-decoration-skip-ink", "auto"),
              n(v, "text-decoration-skip", "ink"),
            ])
          ),
          n(x, _(c.textUnitalicized), u([n(v, "font-style", "normal")])),
          n(x, _(c.textJustify), u([n(v, "text-align", "justify")])),
          n(x, _(c.textJustifyAll), u([n(v, "text-align", "justify-all")])),
          n(x, _(c.textCenter), u([n(v, "text-align", "center")])),
          n(x, _(c.textRight), u([n(v, "text-align", "right")])),
          n(x, _(c.textLeft), u([n(v, "text-align", "left")])),
          n(
            x,
            ".modal",
            u([
              n(v, "position", "fixed"),
              n(v, "left", "0"),
              n(v, "top", "0"),
              n(v, "width", "100%"),
              n(v, "height", "100%"),
              n(v, "pointer-events", "none"),
            ])
          ),
        ])
      ),
    ]),
    sn = function (r) {
      return u([
        n(me, ".v-" + r, u([n(v, "font-feature-settings", '"' + (r + '"'))])),
        n(
          me,
          ".v-" + (r + "-off"),
          u([n(v, "font-feature-settings", '"' + (r + '" 0'))])
        ),
      ]);
    },
    lh = At(
      u([
        n(
          rr,
          function (r) {
            return n(
              me,
              ".border-" + C(r),
              u([n(v, "border-width", C(r) + "px")])
            );
          },
          n(da, 0, 6)
        ),
        n(
          rr,
          function (r) {
            return n(
              me,
              ".font-size-" + C(r),
              u([n(v, "font-size", C(r) + "px")])
            );
          },
          n(da, 8, 32)
        ),
        n(
          rr,
          function (r) {
            return n(me, ".p-" + C(r), u([n(v, "padding", C(r) + "px")]));
          },
          n(da, 0, 24)
        ),
        u([
          n(me, ".v-smcp", u([n(v, "font-variant", "small-caps")])),
          n(me, ".v-smcp-off", u([n(v, "font-variant", "normal")])),
        ]),
        sn("zero"),
        sn("onum"),
        sn("liga"),
        sn("dlig"),
        sn("ordn"),
        sn("tnum"),
        sn("afrc"),
        sn("frac"),
      ])
    ),
    ch =
      `
.explain {
    border: 6px solid rgb(174, 121, 15) !important;
}
.explain > .` +
      (c.any +
        (` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

.ctr {
    border: none !important;
}
.explain > .ctr > .` +
          (c.any +
            ` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

`))),
    vh = `
input[type="search"],
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance:none;
}
`,
    fh = `
input[type=range] {
  -webkit-appearance: none; 
  background: transparent;
  position:absolute;
  left:0;
  top:0;
  z-index:10;
  width: 100%;
  outline: dashed 1px;
  height: 100%;
  opacity: 0;
}
`,
    sh = `
input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    opacity: 0.5;
    width: 80px;
    height: 80px;
    background-color: black;
    border:none;
    border-radius: 5px;
}
input[type=range]::-moz-range-thumb {
    opacity: 0.5;
    width: 80px;
    height: 80px;
    background-color: black;
    border:none;
    border-radius: 5px;
}
input[type=range]::-ms-thumb {
    opacity: 0.5;
    width: 80px;
    height: 80px;
    background-color: black;
    border:none;
    border-radius: 5px;
}
input[type=range][orient=vertical]{
    writing-mode: bt-lr; /* IE */
    -webkit-appearance: slider-vertical;  /* WebKit */
}
`,
    mh = `
input[type=range]::-moz-range-track {
    background: transparent;
    cursor: pointer;
}
input[type=range]::-ms-track {
    background: transparent;
    cursor: pointer;
}
input[type=range]::-webkit-slider-runnable-track {
    background: transparent;
    cursor: pointer;
}
`,
    gh =
      "@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {" +
      (_(c.any) +
        (_(c.row) +
          (" > " +
            (_(c.any) +
              (" { flex-basis: auto !important; } " +
                (_(c.any) +
                  (_(c.row) +
                    (" > " +
                      (_(c.any) +
                        (_(c.container) +
                          (" { flex-basis: auto !important; }}" +
                            (vh + (fh + (mh + (sh + ch))))))))))))))),
    Ya = function (r) {
      return n(K, "", r);
    },
    S$ = function (r) {
      return { $: "Intermediate", a: r };
    },
    $t = s(function (r, e) {
      return S$({ closing: e, others: w, props: w, selector: r });
    }),
    ot = s(function (r, e) {
      var t = r.a,
        a = s(function (i, $) {
          switch (i.$) {
            case "Prop":
              var o = i.a,
                l = i.b;
              return q($, { props: n(b, p(o, l), $.props) });
            case "Supports":
              var f = i.a,
                m = f.a,
                h = f.b,
                d = i.b;
              return q($, {
                others: n(
                  b,
                  S$({
                    closing: `
}`,
                    others: w,
                    props: d,
                    selector:
                      "@supports (" + (m + (":" + (h + (") {" + t.selector)))),
                  }),
                  $.others
                ),
              });
            case "Adjacent":
              var S = i.a,
                y = i.b;
              return q($, {
                others: n(
                  b,
                  n(ot, n($t, t.selector + (" + " + S), ""), y),
                  $.others
                ),
              });
            case "Child":
              var E = i.a,
                B = i.b;
              return q($, {
                others: n(
                  b,
                  n(ot, n($t, t.selector + (" > " + E), ""), B),
                  $.others
                ),
              });
            case "AllChildren":
              var E = i.a,
                B = i.b;
              return q($, {
                others: n(
                  b,
                  n(ot, n($t, t.selector + (" " + E), ""), B),
                  $.others
                ),
              });
            case "Descriptor":
              var F = i.a,
                A = i.b;
              return q($, {
                others: n(b, n(ot, n($t, G(t.selector, F), ""), A), $.others),
              });
            default:
              var k = i.a;
              return q($, {
                others: n(b, n(ot, n($t, t.selector, ""), k), $.others),
              });
          }
        });
      return S$(g(xr, a, t, e));
    }),
    dh = function (r) {
      var e = function (i) {
          return Ya(
            n(
              rr,
              function ($) {
                var o = $.a,
                  l = $.b;
                return o + (":" + (l + ";"));
              },
              i
            )
          );
        },
        t = function (i) {
          var $ = i.props;
          return $.b
            ? i.selector + ("{" + (e(i.props) + (i.closing + "}")))
            : "";
        },
        a = function (i) {
          var $ = i.a;
          return G(t($), Ya(n(rr, a, $.others)));
        };
      return Ya(
        n(
          rr,
          a,
          g(
            xr,
            s(function (i, $) {
              var o = i.a,
                l = i.b;
              return n(b, n(ot, n($t, o, ""), l), $);
            }),
            w,
            r
          )
        )
      );
    },
    mc = G(gh, dh(G(uh, lh))),
    gc = function (r) {
      var e = r.mode;
      switch (e.$) {
        case "Layout":
          return g(Ee, "div", w, u([g(Ee, "style", w, u([Xn(mc)]))]));
        case "NoStaticStyleSheet":
          return Xn("");
        default:
          return g(Ee, "elm-ui-static-rules", u([n(uc, "rules", se(mc))]), w);
      }
    },
    qt = s(function (r, e) {
      r: for (;;)
        if (e.b) {
          var t = e.a,
            a = e.b;
          if (r(t)) return !0;
          var i = r,
            $ = a;
          (r = i), (e = $);
          continue r;
        } else return !1;
    }),
    ph = function (r) {
      switch (r.$) {
        case "Serif":
          return "serif";
        case "SansSerif":
          return "sans-serif";
        case "Monospace":
          return "monospace";
        case "Typeface":
          var t = r.a;
          return '"' + (t + '"');
        case "ImportFont":
          var t = r.a,
            e = r.b;
          return '"' + (t + '"');
        default:
          var t = r.a.name;
          return '"' + (t + '"');
      }
    },
    bh = function (r) {
      switch (r.$) {
        case "VariantActive":
          var e = r.a;
          return e === "smcp";
        case "VariantOff":
          var e = r.a;
          return !1;
        default:
          var e = r.a,
            t = r.b;
          return e === "smcp" && t === 1;
      }
    },
    hh = function (r) {
      if (r.$ === "FontWith") {
        var e = r.a;
        return n(qt, bh, e.variants);
      } else return !1;
    },
    An = s(function (r, e) {
      return ur(r, e) < 0 ? r : e;
    }),
    Xt = I(function (r, e, t) {
      var a = e.a,
        i = e.b;
      return r
        ? t +
            (`
  ` +
              (a + (": " + (i + " !important;"))))
        : t +
            (`
  ` +
              (a + (": " + (i + ";"))));
    }),
    Dr = ar(function (r, e, t, a) {
      if (e.$ === "Nothing")
        return u([
          t +
            ("{" +
              (g(dr, Xt(!1), "", a) +
                `
}`)),
        ]);
      var i = e.a;
      switch (i.$) {
        case "Hover":
          var $ = r.hover;
          switch ($.$) {
            case "NoHover":
              return w;
            case "ForceHover":
              return u([
                t +
                  ("-hv {" +
                    (g(dr, Xt(!0), "", a) +
                      `
}`)),
              ]);
            default:
              return u([
                t +
                  ("-hv:hover {" +
                    (g(dr, Xt(!1), "", a) +
                      `
}`)),
              ]);
          }
        case "Focus":
          var o = g(dr, Xt(!1), "", a);
          return u([
            t +
              ("-fs:focus {" +
                (o +
                  `
}`)),
            "." +
              (c.any + (":focus " + (t + "-fs  {"))) +
              (o +
                `
}`),
            t +
              "-fs:focus-within {" +
              (o +
                `
}`),
            ".ui-slide-bar:focus + " +
              (_(c.any) + (" .focusable-thumb" + (t + "-fs {"))) +
              (o +
                `
}`),
          ]);
        default:
          return u([
            t +
              ("-act:active {" +
                (g(dr, Xt(!1), "", a) +
                  `
}`)),
          ]);
      }
    }),
    _h = function (r) {
      switch (r.$) {
        case "VariantActive":
          var e = r.a;
          return '"' + (e + '"');
        case "VariantOff":
          var e = r.a;
          return '"' + (e + '" 0');
        default:
          var e = r.a,
            t = r.b;
          return '"' + (e + ('" ' + C(t)));
      }
    },
    wh = function (r) {
      if (r.$ === "FontWith") {
        var e = r.a;
        return R(n(K, ", ", n(rr, _h, e.variants)));
      } else return j;
    },
    Dh = function (r) {
      switch (r.$) {
        case "Untransformed":
          return j;
        case "Moved":
          var e = r.a,
            t = e.a,
            a = e.b,
            i = e.c;
          return R(
            "translate3d(" +
              (ir(t) + ("px, " + (ir(a) + ("px, " + (ir(i) + "px)")))))
          );
        default:
          var $ = r.a,
            o = $.a,
            l = $.b,
            f = $.c,
            m = r.b,
            h = m.a,
            d = m.b,
            S = m.c,
            y = r.c,
            E = y.a,
            B = y.b,
            F = y.c,
            A = r.d,
            k =
              "translate3d(" +
              (ir(o) + ("px, " + (ir(l) + ("px, " + (ir(f) + "px)"))))),
            Y =
              "scale3d(" + (ir(h) + (", " + (ir(d) + (", " + (ir(S) + ")"))))),
            Q =
              "rotate3d(" +
              (ir(E) +
                (", " +
                  (ir(B) + (", " + (ir(F) + (", " + (ir(A) + "rad)")))))));
          return R(k + (" " + (Y + (" " + Q))));
      }
    },
    M$ = I(function (r, e, t) {
      switch (e.$) {
        case "Style":
          var a = e.a,
            i = e.b;
          return M(Dr, r, t, a, i);
        case "Shadows":
          var f = e.a,
            S = e.b;
          return M(Dr, r, t, "." + f, u([n(nr, "box-shadow", S)]));
        case "Transparency":
          var f = e.a,
            $ = e.b,
            o = n(Ae, 0, n(An, 1, 1 - $));
          return M(Dr, r, t, "." + f, u([n(nr, "opacity", ir(o))]));
        case "FontSize":
          var l = e.a;
          return M(
            Dr,
            r,
            t,
            ".font-size-" + C(l),
            u([n(nr, "font-size", C(l) + "px")])
          );
        case "FontFamily":
          var f = e.a,
            m = e.b,
            h = n(K, ", ", n(ln, wh, m)),
            d = u([
              n(nr, "font-family", n(K, ", ", n(rr, ph, m))),
              n(nr, "font-feature-settings", h),
              n(nr, "font-variant", n(qt, hh, m) ? "small-caps" : "normal"),
            ]);
          return M(Dr, r, t, "." + f, d);
        case "Single":
          var cr = e.a,
            S = e.b,
            N$ = e.c;
          return M(Dr, r, t, "." + cr, u([n(nr, S, N$)]));
        case "Colored":
          var cr = e.a,
            S = e.b,
            y = e.c;
          return M(Dr, r, t, "." + cr, u([n(nr, S, it(y))]));
        case "SpacingStyle":
          var Pr = e.a,
            E = e.b,
            B = e.c,
            F = C(B) + "px",
            A = C(E) + "px",
            k = "." + c.single,
            Y = "." + c.row,
            Q = "." + (c.wrapped + Y),
            De = "." + c.alignRight,
            X = "." + c.paragraph,
            lr = "." + c.page,
            ve = "." + c.alignLeft,
            Rr = ir(B / 2) + "px",
            Ye = ir(E / 2) + "px",
            ce = "." + c.column,
            cr = "." + Pr,
            Lr = "." + c.any;
          return At(
            u([
              M(
                Dr,
                r,
                t,
                cr + (Y + (" > " + (Lr + (" + " + Lr)))),
                u([n(nr, "margin-left", A)])
              ),
              M(
                Dr,
                r,
                t,
                cr + (Q + (" > " + Lr)),
                u([n(nr, "margin", Rr + (" " + Ye))])
              ),
              M(
                Dr,
                r,
                t,
                cr + (ce + (" > " + (Lr + (" + " + Lr)))),
                u([n(nr, "margin-top", F)])
              ),
              M(
                Dr,
                r,
                t,
                cr + (lr + (" > " + (Lr + (" + " + Lr)))),
                u([n(nr, "margin-top", F)])
              ),
              M(
                Dr,
                r,
                t,
                cr + (lr + (" > " + ve)),
                u([n(nr, "margin-right", A)])
              ),
              M(
                Dr,
                r,
                t,
                cr + (lr + (" > " + De)),
                u([n(nr, "margin-left", A)])
              ),
              M(
                Dr,
                r,
                t,
                G(cr, X),
                u([n(nr, "line-height", "calc(1em + " + (C(B) + "px)"))])
              ),
              M(
                Dr,
                r,
                t,
                "textarea" + (Lr + cr),
                u([
                  n(nr, "line-height", "calc(1em + " + (C(B) + "px)")),
                  n(nr, "height", "calc(100% + " + (C(B) + "px)")),
                ])
              ),
              M(
                Dr,
                r,
                t,
                cr + (X + (" > " + ve)),
                u([n(nr, "margin-right", A)])
              ),
              M(
                Dr,
                r,
                t,
                cr + (X + (" > " + De)),
                u([n(nr, "margin-left", A)])
              ),
              M(
                Dr,
                r,
                t,
                cr + (X + "::after"),
                u([
                  n(nr, "content", "''"),
                  n(nr, "display", "block"),
                  n(nr, "height", "0"),
                  n(nr, "width", "0"),
                  n(nr, "margin-top", C(-1 * ((B / 2) | 0)) + "px"),
                ])
              ),
              M(
                Dr,
                r,
                t,
                cr + (X + "::before"),
                u([
                  n(nr, "content", "''"),
                  n(nr, "display", "block"),
                  n(nr, "height", "0"),
                  n(nr, "width", "0"),
                  n(nr, "margin-bottom", C(-1 * ((B / 2) | 0)) + "px"),
                ])
              ),
            ])
          );
        case "PaddingStyle":
          var Pr = e.a,
            Jr = e.b,
            De = e.c,
            Ln = e.d,
            ve = e.e,
            cr = "." + Pr;
          return M(
            Dr,
            r,
            t,
            cr,
            u([
              n(
                nr,
                "padding",
                ir(Jr) +
                  ("px " +
                    (ir(De) + ("px " + (ir(Ln) + ("px " + (ir(ve) + "px"))))))
              ),
            ])
          );
        case "BorderWidth":
          var Pr = e.a,
            Jr = e.b,
            De = e.c,
            Ln = e.d,
            ve = e.e,
            cr = "." + Pr;
          return M(
            Dr,
            r,
            t,
            cr,
            u([
              n(
                nr,
                "border-width",
                C(Jr) +
                  ("px " +
                    (C(De) + ("px " + (C(Ln) + ("px " + (C(ve) + "px"))))))
              ),
            ])
          );
        case "GridTemplateStyle":
          var Hr = e.a,
            P = I(function (zr, aa, qe) {
              r: for (;;)
                switch (qe.$) {
                  case "Px":
                    var Pw = qe.a;
                    return C(Pw) + "px";
                  case "Content":
                    var Be = p(zr, aa);
                    if (Be.a.$ === "Nothing")
                      if (Be.b.$ === "Nothing") {
                        var ay = Be.a,
                          iy = Be.b;
                        return "max-content";
                      } else {
                        var $y = Be.a,
                          Pn = Be.b.a;
                        return "minmax(max-content, " + (C(Pn) + "px)");
                      }
                    else if (Be.b.$ === "Nothing") {
                      var Jn = Be.a.a,
                        oy = Be.b;
                      return "minmax(" + (C(Jn) + "px, max-content)");
                    } else {
                      var Jn = Be.a.a,
                        Pn = Be.b.a;
                      return "minmax(" + (C(Jn) + ("px, " + (C(Pn) + "px)")));
                    }
                  case "Fill":
                    var fv = qe.a,
                      xe = p(zr, aa);
                    if (xe.a.$ === "Nothing")
                      if (xe.b.$ === "Nothing") {
                        var uy = xe.a,
                          ly = xe.b;
                        return C(fv) + "fr";
                      } else {
                        var cy = xe.a,
                          Pn = xe.b.a;
                        return "minmax(max-content, " + (C(Pn) + "px)");
                      }
                    else if (xe.b.$ === "Nothing") {
                      var Jn = xe.a.a,
                        vy = xe.b;
                      return "minmax(" + (C(Jn) + ("px, " + (C(fv) + "frfr)")));
                    } else {
                      var Jn = xe.a.a,
                        Pn = xe.b.a;
                      return "minmax(" + (C(Jn) + ("px, " + (C(Pn) + "px)")));
                    }
                  case "Min":
                    var W$ = qe.a,
                      Y$ = qe.b,
                      q$ = R(W$),
                      X$ = aa,
                      G$ = Y$;
                    (zr = q$), (aa = X$), (qe = G$);
                    continue r;
                  default:
                    var W$ = qe.a,
                      Y$ = qe.b,
                      q$ = zr,
                      X$ = R(W$),
                      G$ = Y$;
                    (zr = q$), (aa = X$), (qe = G$);
                    continue r;
                }
            }),
            T = function (zr) {
              return g(P, j, j, zr);
            },
            V = T(Hr.spacing.a),
            L = T(Hr.spacing.b),
            J = (function (zr) {
              return "grid-template-rows: " + (zr + ";");
            })(n(K, " ", n(rr, T, Hr.rows))),
            z = (function (zr) {
              return "-ms-grid-rows: " + (zr + ";");
            })(n(K, L, n(rr, T, Hr.columns))),
            O = (function (zr) {
              return "-ms-grid-columns: " + (zr + ";");
            })(n(K, L, n(rr, T, Hr.columns))),
            U = "grid-row-gap:" + (T(Hr.spacing.b) + ";"),
            ri = "grid-column-gap:" + (T(Hr.spacing.a) + ";"),
            ei = (function (zr) {
              return "grid-template-columns: " + (zr + ";");
            })(n(K, " ", n(rr, T, Hr.columns))),
            cr =
              ".grid-rows-" +
              (n(K, "-", n(rr, ke, Hr.rows)) +
                ("-cols-" +
                  (n(K, "-", n(rr, ke, Hr.columns)) +
                    ("-space-x-" +
                      (ke(Hr.spacing.a) + ("-space-y-" + ke(Hr.spacing.b))))))),
            U$ = cr + ("{" + (ei + (J + (ri + (U + "}"))))),
            V$ = "@supports (display:grid) {" + (U$ + "}"),
            j$ = cr + ("{" + (O + (z + "}")));
          return u([j$, V$]);
        case "GridPosition":
          var Kr = e.a,
            vv = n(
              K,
              " ",
              u([
                "-ms-grid-row: " + (C(Kr.row) + ";"),
                "-ms-grid-row-span: " + (C(Kr.height) + ";"),
                "-ms-grid-column: " + (C(Kr.col) + ";"),
                "-ms-grid-column-span: " + (C(Kr.width) + ";"),
              ])
            ),
            O$ = n(
              K,
              " ",
              u([
                "grid-row: " +
                  (C(Kr.row) + (" / " + (C(Kr.row + Kr.height) + ";"))),
                "grid-column: " +
                  (C(Kr.col) + (" / " + (C(Kr.col + Kr.width) + ";"))),
              ])
            ),
            cr =
              ".grid-pos-" +
              (C(Kr.row) +
                ("-" +
                  (C(Kr.col) + ("-" + (C(Kr.width) + ("-" + C(Kr.height))))))),
            U$ = cr + ("{" + (O$ + "}")),
            V$ = "@supports (display:grid) {" + (U$ + "}"),
            j$ = cr + ("{" + (vv + "}"));
          return u([j$, V$]);
        case "PseudoSelector":
          var cr = e.a,
            Hw = e.b,
            kw = function (zr) {
              return g(M$, r, zr, R(cr));
            };
          return n(Fa, kw, Hw);
        default:
          var Pe = e.a,
            N$ = Dh(Pe),
            cr = w$(Pe),
            ni = p(cr, N$);
          if (ni.a.$ === "Just" && ni.b.$ === "Just") {
            var Pr = ni.a.a,
              Lw = ni.b.a;
            return M(Dr, r, t, "." + Pr, u([n(nr, "transform", Lw)]));
          } else return w;
      }
    }),
    yh = s(function (r, e) {
      return je(
        n(
          rr,
          function (t) {
            var a = g(M$, r, t, j);
            return p(Wt(t), n(cn, se, a));
          },
          e
        )
      );
    }),
    qa = s(function (r, e) {
      var t = function (a) {
        var i = a.a,
          $ = a.b;
        return i + (": " + ($ + ";"));
      };
      return r + (" {" + (n(K, "", n(rr, t, e)) + "}"));
    }),
    dc = I(function (r, e, t) {
      var a = t.a,
        i = t.b;
      return u([
        n(qa, "." + (r + ("." + (e + (", " + ("." + (r + (" ." + e))))))), a),
        n(
          qa,
          "." +
            (r +
              ("." +
                (e +
                  ("> ." +
                    (c.text +
                      (", ." + (r + (" ." + (e + (" > ." + c.text)))))))))),
          i
        ),
      ]);
    }),
    Sh = I(function (r, e, t) {
      var a = e.a,
        i = e.b,
        $ = tr(r, t) ? r : t + (" ." + r);
      return n(
        K,
        " ",
        G(g(dc, $, c.sizeByCapital, i), g(dc, $, c.fullSize, a))
      );
    }),
    Mh = s(function (r, e) {
      var t = tr(r, e) ? r : e + (" ." + r);
      return n(
        K,
        " ",
        u([
          n(
            qa,
            "." +
              (t +
                ("." +
                  (c.sizeByCapital +
                    (", " + ("." + (t + (" ." + c.sizeByCapital))))))),
            u([p("line-height", "1")])
          ),
          n(
            qa,
            "." +
              (t +
                ("." +
                  (c.sizeByCapital +
                    ("> ." +
                      (c.text +
                        (", ." +
                          (t +
                            (" ." +
                              (c.sizeByCapital + (" > ." + c.text)))))))))),
            u([p("vertical-align", "0"), p("line-height", "1")])
          ),
        ])
      );
    }),
    pc = I(function (r, e, t) {
      return { height: e / r, size: r, vertical: t };
    }),
    Eh = s(function (r, e) {
      return g(
        xr,
        s(function (t, a) {
          return r(t) ? n(b, t, a) : a;
        }),
        w,
        e
      );
    }),
    Ch = function (r) {
      if (r.b) {
        var e = r.a,
          t = r.b;
        return R(g(dr, Ae, e, t));
      } else return j;
    },
    bc = function (r) {
      if (r.b) {
        var e = r.a,
          t = r.b;
        return R(g(dr, An, e, t));
      } else return j;
    },
    hc = function (r) {
      var e = u([r.capital, r.baseline, r.descender, r.lowercase]),
        t = 1.5,
        a = (t - 1) / 2,
        i = t / 2,
        $ = n(Vr, r.descender, bc(e)),
        o = n(
          Vr,
          r.baseline,
          bc(
            n(
              Eh,
              function (B) {
                return !tr(B, $);
              },
              e
            )
          )
        ),
        l = t,
        f = n(Vr, r.capital, Ch(e)),
        m = 1 / (f - o),
        h = 1 - f,
        d = 1 / (f - $),
        S = 1 - f,
        y = (f - o) / 2 + o,
        E = (f - $) / 2 + $;
      return { capital: g(pc, m, f - o, h), full: g(pc, d, f - $, S) };
    },
    _c = function (r) {
      return p(
        u([p("display", "block")]),
        u([
          p("display", "inline-block"),
          p("line-height", ir(r.height)),
          p("vertical-align", ir(r.vertical) + "em"),
          p("font-size", ir(r.size) + "em"),
        ])
      );
    },
    Ih = function (r) {
      return g(
        dr,
        s(function (e, t) {
          if (t.$ === "Nothing")
            if (e.$ === "FontWith") {
              var a = e.a,
                i = a.adjustment;
              if (i.$ === "Nothing") return t;
              var $ = i.a;
              return R(
                p(
                  _c(
                    (function (o) {
                      return o.full;
                    })(hc($))
                  ),
                  _c(
                    (function (o) {
                      return o.capital;
                    })(hc($))
                  )
                )
              );
            } else return t;
          else return t;
        }),
        j,
        r
      );
    },
    Bh = function (r) {
      var e = function ($) {
          if ($.$ === "ImportFont") {
            var o = $.b;
            return R("@import url('" + (o + "');"));
          } else return j;
        },
        t = function ($) {
          var o = $.a,
            l = $.b,
            f = n(
              K,
              `
`,
              n(ln, e, l)
            );
          return f;
        },
        a = n(rr, lm, r),
        i = function ($) {
          var o = $.a,
            l = $.b,
            f = Ih(l);
          if (f.$ === "Nothing") return n(K, "", n(rr, Mh(o), a));
          var m = f.a;
          return n(K, "", n(rr, n(Sh, o, m), a));
        };
      return G(
        n(
          K,
          `
`,
          n(rr, t, r)
        ),
        n(
          K,
          `
`,
          n(rr, i, r)
        )
      );
    },
    xh = function (r) {
      if (r.$ === "FontFamily") {
        var e = r.a,
          t = r.b;
        return R(p(e, t));
      } else return j;
    },
    wc = s(function (r, e) {
      var t = s(function (o, l) {
          return {
            rules: G(l.rules, g(M$, r, o, j)),
            topLevel: (function () {
              var f = xh(o);
              if (f.$ === "Nothing") return l.topLevel;
              var m = f.a;
              return n(b, m, l.topLevel);
            })(),
          };
        }),
        a = g(dr, t, { rules: w, topLevel: w }, e),
        i = a.topLevel,
        $ = a.rules;
      return G(Bh(i), Ya($));
    }),
    Dc = s(function (r, e) {
      var t = r.mode;
      switch (t.$) {
        case "Layout":
          return g(Ee, "div", w, u([g(Ee, "style", w, u([Xn(n(wc, r, e))]))]));
        case "NoStaticStyleSheet":
          return g(Ee, "div", w, u([g(Ee, "style", w, u([Xn(n(wc, r, e))]))]));
        default:
          return g(Ee, "elm-ui-rules", u([n(uc, "rules", n(yh, r, e))]), w);
      }
    }),
    yc = ar(function (r, e, t, a) {
      var i = n(Dc, e, g(dr, tc, p(nc, oc(e.focus)), t).b);
      return r
        ? n(
            b,
            p("static-stylesheet", gc(e)),
            n(b, p("dynamic-stylesheet", i), a)
          )
        : n(b, p("dynamic-stylesheet", i), a);
    }),
    Sc = ar(function (r, e, t, a) {
      var i = n(Dc, e, g(dr, tc, p(nc, oc(e.focus)), t).b);
      return r ? n(b, gc(e), n(b, i, a)) : n(b, i, a);
    }),
    E$ = fr(45),
    Gt = fr(37),
    ue = s(function (r, e) {
      var t = e.a,
        a = e.b;
      if (r.$ === "Flag") {
        var i = r.a;
        return tr(i & t, i);
      } else {
        var $ = r.a;
        return tr($ & a, $);
      }
    }),
    Mc = Yr("s"),
    Ec = Yr("u"),
    C$ = fr(44),
    Zt = fr(39),
    Xa = Wr(function (r, e, t, a, i, $) {
      var o = s(function (f, m) {
          if (a.$ === "Keyed") {
            var h = a.a;
            return g(
              ku,
              f,
              m,
              (function () {
                switch (i.$) {
                  case "NoStyleSheet":
                    return h;
                  case "OnlyDynamic":
                    var S = i.a,
                      y = i.b;
                    return M(yc, !1, S, y, h);
                  default:
                    var S = i.a,
                      y = i.b;
                    return M(yc, !0, S, y, h);
                }
              })()
            );
          } else {
            var d = a.a;
            return n(
              (function () {
                switch (f) {
                  case "div":
                    return Z;
                  case "p":
                    return St;
                  default:
                    return Ee(f);
                }
              })(),
              m,
              (function () {
                switch (i.$) {
                  case "NoStyleSheet":
                    return d;
                  case "OnlyDynamic":
                    var S = i.a,
                      y = i.b;
                    return M(Sc, !1, S, y, d);
                  default:
                    var S = i.a,
                      y = i.b;
                    return M(Sc, !0, S, y, d);
                }
              })()
            );
          }
        }),
        l = (function () {
          switch (e.$) {
            case "Generic":
              return n(o, "div", t);
            case "NodeName":
              var f = e.a;
              return n(o, f, t);
            default:
              var f = e.a,
                m = e.b;
              return g(
                Ee,
                f,
                t,
                u([n(o, m, u([Ar(c.any + (" " + c.single))]))])
              );
          }
        })();
      switch ($.$) {
        case "AsRow":
          return n(ue, Zt, r) && !n(ue, C$, r)
            ? l
            : n(ue, Ql, r)
            ? n(
                Ec,
                u([
                  Ar(
                    n(
                      K,
                      " ",
                      u([
                        c.any,
                        c.single,
                        c.container,
                        c.contentCenterY,
                        c.alignContainerRight,
                      ])
                    )
                  ),
                ]),
                u([l])
              )
            : n(ue, Kl, r)
            ? n(
                Mc,
                u([
                  Ar(
                    n(
                      K,
                      " ",
                      u([
                        c.any,
                        c.single,
                        c.container,
                        c.contentCenterY,
                        c.alignContainerCenterX,
                      ])
                    )
                  ),
                ]),
                u([l])
              )
            : l;
        case "AsColumn":
          return n(ue, Gt, r) && !n(ue, E$, r)
            ? l
            : n(ue, rc, r)
            ? n(
                Mc,
                u([
                  Ar(
                    n(
                      K,
                      " ",
                      u([c.any, c.single, c.container, c.alignContainerCenterY])
                    )
                  ),
                ]),
                u([l])
              )
            : n(ue, Zl, r)
            ? n(
                Ec,
                u([
                  Ar(
                    n(
                      K,
                      " ",
                      u([c.any, c.single, c.container, c.alignContainerBottom])
                    )
                  ),
                ]),
                u([l])
              )
            : l;
        default:
          return l;
      }
    }),
    Fh =
      c.any +
      (" " + (c.text + (" " + (c.widthContent + (" " + c.heightContent))))),
    Qt = function (r) {
      return n(Z, u([Ar(Fh)]), u([H(r)]));
    },
    Ah =
      c.any + (" " + (c.text + (" " + (c.widthFill + (" " + c.heightFill))))),
    Cc = function (r) {
      return n(Z, u([Ar(Ah)]), u([H(r)]));
    },
    Th = I(function (r, e, t) {
      var a = s(function (E, B) {
          var F = E.a,
            A = E.b,
            k = B.a,
            Y = B.b;
          switch (A.$) {
            case "Unstyled":
              var Q = A.a;
              return tr(r, at), p(n(b, p(F, Q(r)), k), Y);
            case "Styled":
              var X = A.a;
              return (
                tr(r, at),
                p(
                  n(b, p(F, n(X.html, Fn, r)), k),
                  In(Y) ? X.styles : G(X.styles, Y)
                )
              );
            case "Text":
              var lr = A.a;
              return p(n(b, p(F, tr(r, Gr) ? Cc(lr) : Qt(lr)), k), Y);
            default:
              return p(k, Y);
          }
        }),
        i = s(function (E, B) {
          var F = B.a,
            A = B.b;
          switch (E.$) {
            case "Unstyled":
              var k = E.a;
              return tr(r, at), p(n(b, k(r), F), A);
            case "Styled":
              var Y = E.a;
              return (
                tr(r, at),
                p(n(b, n(Y.html, Fn, r), F), In(A) ? Y.styles : G(Y.styles, A))
              );
            case "Text":
              var Q = E.a;
              return p(n(b, tr(r, Gr) ? Cc(Q) : Qt(Q), F), A);
            default:
              return p(F, A);
          }
        });
      if (e.$ === "Keyed") {
        var $ = e.a,
          o = g(xr, a, p(w, w), $),
          l = o.a,
          f = o.b,
          m = In(f) ? t.styles : G(t.styles, f);
        if (m.b) {
          var h = m;
          return ql({
            html: M(
              Xa,
              t.has,
              t.node,
              t.attributes,
              Yl(g(Gl, "nearby-element-pls", l, t.children))
            ),
            styles: h,
          });
        } else
          return _$(
            N(
              Xa,
              t.has,
              t.node,
              t.attributes,
              Yl(g(Gl, "nearby-element-pls", l, t.children)),
              Fn
            )
          );
      } else {
        var d = e.a,
          S = g(xr, i, p(w, w), d),
          y = S.a,
          f = S.b,
          m = In(f) ? t.styles : G(t.styles, f);
        if (m.b) {
          var h = m;
          return ql({
            html: M(Xa, t.has, t.node, t.attributes, hr(n(Xl, y, t.children))),
            styles: h,
          });
        } else
          return _$(
            N(Xa, t.has, t.node, t.attributes, hr(n(Xl, y, t.children)), Fn)
          );
      }
    }),
    ge = I(function (r, e, t) {
      return { $: "Single", a: r, b: e, c: t };
    }),
    Rh = function (r) {
      return { $: "Transform", a: r };
    },
    Ga = s(function (r, e) {
      return { $: "Field", a: r, b: e };
    }),
    ty = Ts,
    $r = s(function (r, e) {
      var t = e.a,
        a = e.b;
      if (r.$ === "Flag") {
        var i = r.a;
        return n(Ga, i | t, a);
      } else {
        var $ = r.a;
        return n(Ga, t, $ | a);
      }
    }),
    Ic = function (r) {
      return { $: "ChildrenBehind", a: r };
    },
    Za = s(function (r, e) {
      return { $: "ChildrenBehindAndInFront", a: r, b: e };
    }),
    Bc = function (r) {
      return { $: "ChildrenInFront", a: r };
    },
    Hh = s(function (r, e) {
      return n(
        Z,
        u([
          Ar(
            (function () {
              switch (r.$) {
                case "Above":
                  return n(K, " ", u([c.nearby, c.single, c.above]));
                case "Below":
                  return n(K, " ", u([c.nearby, c.single, c.below]));
                case "OnRight":
                  return n(K, " ", u([c.nearby, c.single, c.onRight]));
                case "OnLeft":
                  return n(K, " ", u([c.nearby, c.single, c.onLeft]));
                case "InFront":
                  return n(K, " ", u([c.nearby, c.single, c.inFront]));
                default:
                  return n(K, " ", u([c.nearby, c.single, c.behind]));
              }
            })()
          ),
        ]),
        u([
          (function () {
            switch (e.$) {
              case "Empty":
                return Xn("");
              case "Text":
                var t = e.a;
                return Qt(t);
              case "Unstyled":
                var a = e.a;
                return a(Gr);
              default:
                var i = e.a;
                return n(i.html, Fn, Gr);
            }
          })(),
        ])
      );
    }),
    kh = I(function (r, e, t) {
      var a = n(Hh, r, e);
      switch (t.$) {
        case "NoNearbyChildren":
          return r.$ === "Behind" ? Ic(u([a])) : Bc(u([a]));
        case "ChildrenBehind":
          var i = t.a;
          return r.$ === "Behind" ? Ic(n(b, a, i)) : n(Za, i, u([a]));
        case "ChildrenInFront":
          var $ = t.a;
          return r.$ === "Behind" ? n(Za, u([a]), $) : Bc(n(b, a, $));
        default:
          var i = t.a,
            $ = t.b;
          return r.$ === "Behind" ? n(Za, n(b, a, i), $) : n(Za, i, n(b, a, $));
      }
    }),
    xc = s(function (r, e) {
      return { $: "Embedded", a: r, b: e };
    }),
    Ne = function (r) {
      return { $: "NodeName", a: r };
    },
    Tn = s(function (r, e) {
      switch (e.$) {
        case "Generic":
          return Ne(r);
        case "NodeName":
          var t = e.a;
          return n(xc, t, r);
        default:
          var a = e.a,
            i = e.b;
          return n(xc, a, i);
      }
    }),
    Lh = function (r) {
      switch (r.$) {
        case "Left":
          return c.alignedHorizontally + (" " + c.alignLeft);
        case "Right":
          return c.alignedHorizontally + (" " + c.alignRight);
        default:
          return c.alignedHorizontally + (" " + c.alignCenterX);
      }
    },
    Ph = function (r) {
      switch (r.$) {
        case "Top":
          return c.alignedVertically + (" " + c.alignTop);
        case "Bottom":
          return c.alignedVertically + (" " + c.alignBottom);
        default:
          return c.alignedVertically + (" " + c.alignCenterY);
      }
    },
    Le = ar(function (r, e, t, a) {
      return { $: "FullTransform", a: r, b: e, c: t, d: a };
    }),
    mn = function (r) {
      return { $: "Moved", a: r };
    },
    Jh = s(function (r, e) {
      switch (r.$) {
        case "Untransformed":
          switch (e.$) {
            case "MoveX":
              var f = e.a;
              return mn(vr(f, 0, 0));
            case "MoveY":
              var m = e.a;
              return mn(vr(0, m, 0));
            case "MoveZ":
              var h = e.a;
              return mn(vr(0, 0, h));
            case "MoveXYZ":
              var t = e.a;
              return mn(t);
            case "Rotate":
              var t = e.a,
                y = e.b;
              return M(Le, vr(0, 0, 0), vr(1, 1, 1), t, y);
            default:
              var t = e.a;
              return M(Le, vr(0, 0, 0), t, vr(0, 0, 1), 0);
          }
        case "Moved":
          var l = r.a,
            f = l.a,
            m = l.b,
            h = l.c;
          switch (e.$) {
            case "MoveX":
              var a = e.a;
              return mn(vr(a, m, h));
            case "MoveY":
              var i = e.a;
              return mn(vr(f, i, h));
            case "MoveZ":
              var $ = e.a;
              return mn(vr(f, m, $));
            case "MoveXYZ":
              var t = e.a;
              return mn(t);
            case "Rotate":
              var t = e.a,
                y = e.b;
              return M(Le, l, vr(1, 1, 1), t, y);
            default:
              var o = e.a;
              return M(Le, l, o, vr(0, 0, 1), 0);
          }
        default:
          var l = r.a,
            f = l.a,
            m = l.b,
            h = l.c,
            d = r.b,
            S = r.c,
            y = r.d;
          switch (e.$) {
            case "MoveX":
              var a = e.a;
              return M(Le, vr(a, m, h), d, S, y);
            case "MoveY":
              var i = e.a;
              return M(Le, vr(f, i, h), d, S, y);
            case "MoveZ":
              var $ = e.a;
              return M(Le, vr(f, m, $), d, S, y);
            case "MoveXYZ":
              var E = e.a;
              return M(Le, E, d, S, y);
            case "Rotate":
              var B = e.a,
                F = e.b;
              return M(Le, l, d, B, F);
            default:
              var A = e.a;
              return M(Le, l, A, S, y);
          }
      }
    }),
    ut = fr(7),
    Fc = fr(36),
    Ac = s(function (r, e) {
      var t = r.a,
        a = r.b,
        i = e.a,
        $ = e.b;
      return n(Ga, t | i, a | $);
    }),
    We = n(Ga, 0, 0),
    I$ = function (r) {
      switch (r.$) {
        case "Px":
          var e = r.a,
            t = C(e),
            a = "height-px-" + t;
          return vr(
            We,
            c.heightExact + (" " + a),
            u([g(ge, a, "height", t + "px")])
          );
        case "Content":
          return vr(n($r, Fc, We), c.heightContent, w);
        case "Fill":
          var i = r.a;
          return i === 1
            ? vr(n($r, Gt, We), c.heightFill, w)
            : vr(
                n($r, Gt, We),
                c.heightFillPortion + (" height-fill-" + C(i)),
                u([
                  g(
                    ge,
                    c.any +
                      ("." + (c.column + (" > " + _("height-fill-" + C(i))))),
                    "flex-grow",
                    C(i * 1e5)
                  ),
                ])
              );
        case "Min":
          var $ = r.a,
            f = r.b,
            m = "min-height-" + C($),
            h = g(ge, m, "min-height", C($) + "px !important"),
            o = I$(f),
            S = o.a,
            y = o.b,
            E = o.c;
          return vr(n($r, E$, S), m + (" " + y), n(b, h, E));
        default:
          var l = r.a,
            f = r.b,
            m = "max-height-" + C(l),
            h = g(ge, m, "max-height", C(l) + "px"),
            d = I$(f),
            S = d.a,
            y = d.b,
            E = d.c;
          return vr(n($r, E$, S), m + (" " + y), n(b, h, E));
      }
    },
    Tc = fr(38),
    B$ = function (r) {
      switch (r.$) {
        case "Px":
          var e = r.a;
          return vr(
            We,
            c.widthExact + (" width-px-" + C(e)),
            u([g(ge, "width-px-" + C(e), "width", C(e) + "px")])
          );
        case "Content":
          return vr(n($r, Tc, We), c.widthContent, w);
        case "Fill":
          var t = r.a;
          return t === 1
            ? vr(n($r, Zt, We), c.widthFill, w)
            : vr(
                n($r, Zt, We),
                c.widthFillPortion + (" width-fill-" + C(t)),
                u([
                  g(
                    ge,
                    c.any + ("." + (c.row + (" > " + _("width-fill-" + C(t))))),
                    "flex-grow",
                    C(t * 1e5)
                  ),
                ])
              );
        case "Min":
          var a = r.a,
            o = r.b,
            l = "min-width-" + C(a),
            f = g(ge, l, "min-width", C(a) + "px"),
            i = B$(o),
            h = i.a,
            d = i.b,
            S = i.c;
          return vr(n($r, C$, h), l + (" " + d), n(b, f, S));
        default:
          var $ = r.a,
            o = r.b,
            l = "max-width-" + C($),
            f = g(ge, l, "max-width", C($) + "px"),
            m = B$(o),
            h = m.a,
            d = m.b,
            S = m.c;
          return vr(n($r, C$, h), l + (" " + d), n(b, f, S));
      }
    },
    Rc = fr(27),
    zh = s(function (r, e) {
      if (tr(r, Rc))
        if (e.$ === "Single") {
          var t = e.c;
          switch (t) {
            case "0px":
              return !0;
            case "1px":
              return !0;
            case "2px":
              return !0;
            case "3px":
              return !0;
            case "4px":
              return !0;
            case "5px":
              return !0;
            case "6px":
              return !0;
            default:
              return !1;
          }
        } else return !1;
      else
        switch (e.$) {
          case "FontSize":
            var a = e.a;
            return a >= 8 && a <= 32;
          case "PaddingStyle":
            var i = e.a,
              $ = e.b,
              o = e.c,
              l = e.d,
              f = e.e;
            return tr($, l) && tr($, o) && tr($, f) && $ >= 0 && $ <= 24;
          default:
            return !1;
        }
    }),
    lt = fr(6),
    Hc = fr(30),
    kc = fr(29),
    Oh = ia(function (r, e, t, a, i, $, o, l) {
      r: for (;;)
        if (l.b) {
          var h = l.a,
            d = l.b;
          switch (h.$) {
            case "NoAttribute":
              var P = r,
                T = e,
                V = t,
                L = a,
                J = i,
                z = $,
                O = o,
                U = d;
              (r = P),
                (e = T),
                (t = V),
                (a = L),
                (i = J),
                ($ = z),
                (o = O),
                (l = U);
              continue r;
            case "Class":
              var B = h.a,
                S = h.b;
              if (n(ue, B, t)) {
                var P = r,
                  T = e,
                  V = t,
                  L = a,
                  J = i,
                  z = $,
                  O = o,
                  U = d;
                (r = P),
                  (e = T),
                  (t = V),
                  (a = L),
                  (i = J),
                  ($ = z),
                  (o = O),
                  (l = U);
                continue r;
              } else {
                var P = S + (" " + r),
                  T = e,
                  V = n($r, B, t),
                  L = a,
                  J = i,
                  z = $,
                  O = o,
                  U = d;
                (r = P),
                  (e = T),
                  (t = V),
                  (a = L),
                  (i = J),
                  ($ = z),
                  (o = O),
                  (l = U);
                continue r;
              }
            case "Attr":
              var y = h.a,
                P = r,
                T = e,
                V = t,
                L = a,
                J = i,
                z = n(b, y, $),
                O = o,
                U = d;
              (r = P),
                (e = T),
                (t = V),
                (a = L),
                (i = J),
                ($ = z),
                (o = O),
                (l = U);
              continue r;
            case "StyleClass":
              var B = h.a,
                E = h.b;
              if (n(ue, B, t)) {
                var P = r,
                  T = e,
                  V = t,
                  L = a,
                  J = i,
                  z = $,
                  O = o,
                  U = d;
                (r = P),
                  (e = T),
                  (t = V),
                  (a = L),
                  (i = J),
                  ($ = z),
                  (o = O),
                  (l = U);
                continue r;
              } else if (n(zh, B, E)) {
                var P = Wt(E) + (" " + r),
                  T = e,
                  V = n($r, B, t),
                  L = a,
                  J = i,
                  z = $,
                  O = o,
                  U = d;
                (r = P),
                  (e = T),
                  (t = V),
                  (a = L),
                  (i = J),
                  ($ = z),
                  (o = O),
                  (l = U);
                continue r;
              } else {
                var P = Wt(E) + (" " + r),
                  T = e,
                  V = n($r, B, t),
                  L = a,
                  J = n(b, E, i),
                  z = $,
                  O = o,
                  U = d;
                (r = P),
                  (e = T),
                  (t = V),
                  (a = L),
                  (i = J),
                  ($ = z),
                  (o = O),
                  (l = U);
                continue r;
              }
            case "TransformComponent":
              var B = h.a,
                F = h.b,
                P = r,
                T = e,
                V = n($r, B, t),
                L = n(Jh, a, F),
                J = i,
                z = $,
                O = o,
                U = d;
              (r = P),
                (e = T),
                (t = V),
                (a = L),
                (i = J),
                ($ = z),
                (o = O),
                (l = U);
              continue r;
            case "Width":
              var A = h.a;
              if (n(ue, lt, t)) {
                var P = r,
                  T = e,
                  V = t,
                  L = a,
                  J = i,
                  z = $,
                  O = o,
                  U = d;
                (r = P),
                  (e = T),
                  (t = V),
                  (a = L),
                  (i = J),
                  ($ = z),
                  (o = O),
                  (l = U);
                continue r;
              } else
                switch (A.$) {
                  case "Px":
                    var k = A.a,
                      P = c.widthExact + (" width-px-" + C(k)) + (" " + r),
                      T = e,
                      V = n($r, lt, t),
                      L = a,
                      J = n(
                        b,
                        g(ge, "width-px-" + C(k), "width", C(k) + "px"),
                        i
                      ),
                      z = $,
                      O = o,
                      U = d;
                    (r = P),
                      (e = T),
                      (t = V),
                      (a = L),
                      (i = J),
                      ($ = z),
                      (o = O),
                      (l = U);
                    continue r;
                  case "Content":
                    var P = r + (" " + c.widthContent),
                      T = e,
                      V = n($r, Tc, n($r, lt, t)),
                      L = a,
                      J = i,
                      z = $,
                      O = o,
                      U = d;
                    (r = P),
                      (e = T),
                      (t = V),
                      (a = L),
                      (i = J),
                      ($ = z),
                      (o = O),
                      (l = U);
                    continue r;
                  case "Fill":
                    var Y = A.a;
                    if (Y === 1) {
                      var P = r + (" " + c.widthFill),
                        T = e,
                        V = n($r, Zt, n($r, lt, t)),
                        L = a,
                        J = i,
                        z = $,
                        O = o,
                        U = d;
                      (r = P),
                        (e = T),
                        (t = V),
                        (a = L),
                        (i = J),
                        ($ = z),
                        (o = O),
                        (l = U);
                      continue r;
                    } else {
                      var P =
                          r +
                          (" " +
                            (c.widthFillPortion + (" width-fill-" + C(Y)))),
                        T = e,
                        V = n($r, Zt, n($r, lt, t)),
                        L = a,
                        J = n(
                          b,
                          g(
                            ge,
                            c.any +
                              ("." +
                                (c.row + (" > " + _("width-fill-" + C(Y))))),
                            "flex-grow",
                            C(Y * 1e5)
                          ),
                          i
                        ),
                        z = $,
                        O = o,
                        U = d;
                      (r = P),
                        (e = T),
                        (t = V),
                        (a = L),
                        (i = J),
                        ($ = z),
                        (o = O),
                        (l = U);
                      continue r;
                    }
                  default:
                    var Q = B$(A),
                      X = Q.a,
                      lr = Q.b,
                      Hr = Q.c,
                      P = r + (" " + lr),
                      T = e,
                      V = n(Ac, X, n($r, lt, t)),
                      L = a,
                      J = G(Hr, i),
                      z = $,
                      O = o,
                      U = d;
                    (r = P),
                      (e = T),
                      (t = V),
                      (a = L),
                      (i = J),
                      ($ = z),
                      (o = O),
                      (l = U);
                    continue r;
                }
            case "Height":
              var Rr = h.a;
              if (n(ue, ut, t)) {
                var P = r,
                  T = e,
                  V = t,
                  L = a,
                  J = i,
                  z = $,
                  O = o,
                  U = d;
                (r = P),
                  (e = T),
                  (t = V),
                  (a = L),
                  (i = J),
                  ($ = z),
                  (o = O),
                  (l = U);
                continue r;
              } else
                switch (Rr.$) {
                  case "Px":
                    var k = Rr.a,
                      Ye = C(k) + "px",
                      ce = "height-px-" + Ye,
                      P = c.heightExact + (" " + (ce + (" " + r))),
                      T = e,
                      V = n($r, ut, t),
                      L = a,
                      J = n(b, g(ge, ce, "height ", Ye), i),
                      z = $,
                      O = o,
                      U = d;
                    (r = P),
                      (e = T),
                      (t = V),
                      (a = L),
                      (i = J),
                      ($ = z),
                      (o = O),
                      (l = U);
                    continue r;
                  case "Content":
                    var P = c.heightContent + (" " + r),
                      T = e,
                      V = n($r, Fc, n($r, ut, t)),
                      L = a,
                      J = i,
                      z = $,
                      O = o,
                      U = d;
                    (r = P),
                      (e = T),
                      (t = V),
                      (a = L),
                      (i = J),
                      ($ = z),
                      (o = O),
                      (l = U);
                    continue r;
                  case "Fill":
                    var Y = Rr.a;
                    if (Y === 1) {
                      var P = c.heightFill + (" " + r),
                        T = e,
                        V = n($r, Gt, n($r, ut, t)),
                        L = a,
                        J = i,
                        z = $,
                        O = o,
                        U = d;
                      (r = P),
                        (e = T),
                        (t = V),
                        (a = L),
                        (i = J),
                        ($ = z),
                        (o = O),
                        (l = U);
                      continue r;
                    } else {
                      var P =
                          r +
                          (" " +
                            (c.heightFillPortion + (" height-fill-" + C(Y)))),
                        T = e,
                        V = n($r, Gt, n($r, ut, t)),
                        L = a,
                        J = n(
                          b,
                          g(
                            ge,
                            c.any +
                              ("." +
                                (c.column +
                                  (" > " + _("height-fill-" + C(Y))))),
                            "flex-grow",
                            C(Y * 1e5)
                          ),
                          i
                        ),
                        z = $,
                        O = o,
                        U = d;
                      (r = P),
                        (e = T),
                        (t = V),
                        (a = L),
                        (i = J),
                        ($ = z),
                        (o = O),
                        (l = U);
                      continue r;
                    }
                  default:
                    var Lr = I$(Rr),
                      X = Lr.a,
                      lr = Lr.b,
                      Hr = Lr.c,
                      P = r + (" " + lr),
                      T = e,
                      V = n(Ac, X, n($r, ut, t)),
                      L = a,
                      J = G(Hr, i),
                      z = $,
                      O = o,
                      U = d;
                    (r = P),
                      (e = T),
                      (t = V),
                      (a = L),
                      (i = J),
                      ($ = z),
                      (o = O),
                      (l = U);
                    continue r;
                }
            case "Describe":
              var Pr = h.a;
              switch (Pr.$) {
                case "Main":
                  var P = r,
                    T = n(Tn, "main", e),
                    V = t,
                    L = a,
                    J = i,
                    z = $,
                    O = o,
                    U = d;
                  (r = P),
                    (e = T),
                    (t = V),
                    (a = L),
                    (i = J),
                    ($ = z),
                    (o = O),
                    (l = U);
                  continue r;
                case "Navigation":
                  var P = r,
                    T = n(Tn, "nav", e),
                    V = t,
                    L = a,
                    J = i,
                    z = $,
                    O = o,
                    U = d;
                  (r = P),
                    (e = T),
                    (t = V),
                    (a = L),
                    (i = J),
                    ($ = z),
                    (o = O),
                    (l = U);
                  continue r;
                case "ContentInfo":
                  var P = r,
                    T = n(Tn, "footer", e),
                    V = t,
                    L = a,
                    J = i,
                    z = $,
                    O = o,
                    U = d;
                  (r = P),
                    (e = T),
                    (t = V),
                    (a = L),
                    (i = J),
                    ($ = z),
                    (o = O),
                    (l = U);
                  continue r;
                case "Complementary":
                  var P = r,
                    T = n(Tn, "aside", e),
                    V = t,
                    L = a,
                    J = i,
                    z = $,
                    O = o,
                    U = d;
                  (r = P),
                    (e = T),
                    (t = V),
                    (a = L),
                    (i = J),
                    ($ = z),
                    (o = O),
                    (l = U);
                  continue r;
                case "Heading":
                  var Jr = Pr.a;
                  if (Jr <= 1) {
                    var P = r,
                      T = n(Tn, "h1", e),
                      V = t,
                      L = a,
                      J = i,
                      z = $,
                      O = o,
                      U = d;
                    (r = P),
                      (e = T),
                      (t = V),
                      (a = L),
                      (i = J),
                      ($ = z),
                      (o = O),
                      (l = U);
                    continue r;
                  } else if (Jr < 7) {
                    var P = r,
                      T = n(Tn, "h" + C(Jr), e),
                      V = t,
                      L = a,
                      J = i,
                      z = $,
                      O = o,
                      U = d;
                    (r = P),
                      (e = T),
                      (t = V),
                      (a = L),
                      (i = J),
                      ($ = z),
                      (o = O),
                      (l = U);
                    continue r;
                  } else {
                    var P = r,
                      T = n(Tn, "h6", e),
                      V = t,
                      L = a,
                      J = i,
                      z = $,
                      O = o,
                      U = d;
                    (r = P),
                      (e = T),
                      (t = V),
                      (a = L),
                      (i = J),
                      ($ = z),
                      (o = O),
                      (l = U);
                    continue r;
                  }
                case "Paragraph":
                  var P = r,
                    T = e,
                    V = t,
                    L = a,
                    J = i,
                    z = $,
                    O = o,
                    U = d;
                  (r = P),
                    (e = T),
                    (t = V),
                    (a = L),
                    (i = J),
                    ($ = z),
                    (o = O),
                    (l = U);
                  continue r;
                case "Button":
                  var P = r,
                    T = e,
                    V = t,
                    L = a,
                    J = i,
                    z = n(b, n(Fr, "role", "button"), $),
                    O = o,
                    U = d;
                  (r = P),
                    (e = T),
                    (t = V),
                    (a = L),
                    (i = J),
                    ($ = z),
                    (o = O),
                    (l = U);
                  continue r;
                case "Label":
                  var De = Pr.a,
                    P = r,
                    T = e,
                    V = t,
                    L = a,
                    J = i,
                    z = n(b, n(Fr, "aria-label", De), $),
                    O = o,
                    U = d;
                  (r = P),
                    (e = T),
                    (t = V),
                    (a = L),
                    (i = J),
                    ($ = z),
                    (o = O),
                    (l = U);
                  continue r;
                case "LivePolite":
                  var P = r,
                    T = e,
                    V = t,
                    L = a,
                    J = i,
                    z = n(b, n(Fr, "aria-live", "polite"), $),
                    O = o,
                    U = d;
                  (r = P),
                    (e = T),
                    (t = V),
                    (a = L),
                    (i = J),
                    ($ = z),
                    (o = O),
                    (l = U);
                  continue r;
                default:
                  var P = r,
                    T = e,
                    V = t,
                    L = a,
                    J = i,
                    z = n(b, n(Fr, "aria-live", "assertive"), $),
                    O = o,
                    U = d;
                  (r = P),
                    (e = T),
                    (t = V),
                    (a = L),
                    (i = J),
                    ($ = z),
                    (o = O),
                    (l = U);
                  continue r;
              }
            case "Nearby":
              var Ln = h.a,
                ve = h.b,
                Hr = (function () {
                  switch (ve.$) {
                    case "Empty":
                      return i;
                    case "Text":
                      var Kr = ve.a;
                      return i;
                    case "Unstyled":
                      var vv = ve.a;
                      return i;
                    default:
                      var O$ = ve.a;
                      return G(i, O$.styles);
                  }
                })(),
                P = r,
                T = e,
                V = t,
                L = a,
                J = Hr,
                z = $,
                O = g(kh, Ln, ve, o),
                U = d;
              (r = P),
                (e = T),
                (t = V),
                (a = L),
                (i = J),
                ($ = z),
                (o = O),
                (l = U);
              continue r;
            case "AlignX":
              var ri = h.a;
              if (n(ue, Hc, t)) {
                var P = r,
                  T = e,
                  V = t,
                  L = a,
                  J = i,
                  z = $,
                  O = o,
                  U = d;
                (r = P),
                  (e = T),
                  (t = V),
                  (a = L),
                  (i = J),
                  ($ = z),
                  (o = O),
                  (l = U);
                continue r;
              } else {
                var P = Lh(ri) + (" " + r),
                  T = e,
                  V = (function (Pe) {
                    switch (ri.$) {
                      case "CenterX":
                        return n($r, Kl, Pe);
                      case "Right":
                        return n($r, Ql, Pe);
                      default:
                        return Pe;
                    }
                  })(n($r, Hc, t)),
                  L = a,
                  J = i,
                  z = $,
                  O = o,
                  U = d;
                (r = P),
                  (e = T),
                  (t = V),
                  (a = L),
                  (i = J),
                  ($ = z),
                  (o = O),
                  (l = U);
                continue r;
              }
            default:
              var ei = h.a;
              if (n(ue, kc, t)) {
                var P = r,
                  T = e,
                  V = t,
                  L = a,
                  J = i,
                  z = $,
                  O = o,
                  U = d;
                (r = P),
                  (e = T),
                  (t = V),
                  (a = L),
                  (i = J),
                  ($ = z),
                  (o = O),
                  (l = U);
                continue r;
              } else {
                var P = Ph(ei) + (" " + r),
                  T = e,
                  V = (function (Pe) {
                    switch (ei.$) {
                      case "CenterY":
                        return n($r, rc, Pe);
                      case "Bottom":
                        return n($r, Zl, Pe);
                      default:
                        return Pe;
                    }
                  })(n($r, kc, t)),
                  L = a,
                  J = i,
                  z = $,
                  O = o,
                  U = d;
                (r = P),
                  (e = T),
                  (t = V),
                  (a = L),
                  (i = J),
                  ($ = z),
                  (o = O),
                  (l = U);
                continue r;
              }
          }
        } else {
          var f = w$(a);
          if (f.$ === "Nothing")
            return {
              attributes: n(b, Ar(r), $),
              children: o,
              has: t,
              node: e,
              styles: i,
            };
          var m = f.a;
          return {
            attributes: n(b, Ar(r + (" " + m)), $),
            children: o,
            has: t,
            node: e,
            styles: n(b, Rh(a), i),
          };
        }
    }),
    Uh = { $: "Untransformed" },
    Vh = Uh,
    Er = ar(function (r, e, t, a) {
      return g(Th, r, a, K$(Oh, Vb(r), e, We, Vh, w, w, kb, yr(t)));
    }),
    jh = "Enter",
    gn = { $: "NoAttribute" },
    x$ = function (r) {
      if (
        r.$ === "StyleClass" &&
        r.b.$ === "PseudoSelector" &&
        r.b.a.$ === "Focus"
      ) {
        var e = r.b,
          t = e.a;
        return !0;
      } else return !1;
    },
    Nh = function (r) {
      return n(qt, x$, r) ? gn : Mr("focusable");
    },
    Wh = function (r) {
      return { $: "Height", a: r };
    },
    le = Wh,
    Yh = n(Qn, Tr, _e),
    qh = sf,
    Xh = function (r) {
      return { $: "MayPreventDefault", a: r };
    },
    Gh = s(function (r, e) {
      return n(Ti, r, Xh(e));
    }),
    Zh = function (r) {
      var e = function (a) {
          var i = r(a);
          if (i.$ === "Nothing") return qh("No key matched");
          var $ = i.a;
          return en($);
        },
        t = n(wt, e, n(_r, "key", jr));
      return Tr(
        n(
          Gh,
          "keydown",
          n(
            Te,
            function (a) {
              return p(a, !0);
            },
            t
          )
        )
      );
    },
    Kt = s(function (r, e) {
      return { $: "Class", a: r, b: e };
    }),
    Lc = fr(21),
    Qh = n(Kt, Lc, c.cursorPointer),
    Kh = { $: "Content" },
    Zr = Kh,
    r_ = " ",
    e_ = function (r) {
      return n(va, "tabIndex", C(r));
    },
    n_ = function (r) {
      return { $: "Width", a: r };
    },
    Cr = n_,
    F$ = s(function (r, e) {
      var t = e.onPress,
        a = e.label;
      return M(
        Er,
        Gr,
        oe,
        n(
          b,
          Cr(Zr),
          n(
            b,
            le(Zr),
            n(
              b,
              Mr(
                c.contentCenterX +
                  (" " +
                    (c.contentCenterY +
                      (" " + (c.seButton + (" " + c.noTextSelection)))))
              ),
              n(
                b,
                Qh,
                n(
                  b,
                  Nh(r),
                  n(
                    b,
                    ja(Fb),
                    n(
                      b,
                      Tr(e_(0)),
                      (function () {
                        if (t.$ === "Nothing") return n(b, Tr(Rb(!0)), r);
                        var i = t.a;
                        return n(
                          b,
                          Yh(i),
                          n(
                            b,
                            Zh(function ($) {
                              return tr($, jh) || tr($, r_) ? R(i) : j;
                            }),
                            r
                          )
                        );
                      })()
                    )
                  )
                )
              )
            )
          )
        ),
        hr(u([a]))
      );
    }),
    t_ = ia(function (r, e, t, a, i, $, o, l) {
      return {
        cookies: o,
        counter: r,
        fromJsHistory: i,
        language: t,
        localStorage: $,
        string: l,
        url: a,
        user: e,
      };
    }),
    a_ = Or,
    i_ = n(Pl, a_, gu),
    $_ = I(function (r, e, t) {
      var a = t.a;
      return Ot({ decoder: e(a.decoder), encoder: r(a.encoder) });
    }),
    A$ = n($_, cn, Ft),
    Pc = wf,
    Jc = s(function (r, e) {
      return Ot({
        decoder: g(
          wn,
          s(function (t, a) {
            return p(t, a);
          }),
          n(Pc, 0, Ut(r)),
          n(Pc, 1, Ut(e))
        ),
        encoder: function (t) {
          var a = t.a,
            i = t.b;
          return n(cn, et, u([n(Vt, r, a), n(Vt, e, i)]));
        },
      });
    }),
    o_ = za(
      M(
        Ce,
        "string",
        function (r) {
          return r.string;
        },
        we,
        M(
          Ce,
          "cookies",
          function (r) {
            return r.cookies;
          },
          A$(n(Jc, we, we)),
          M(
            Ce,
            "localStorage",
            function (r) {
              return r.localStorage;
            },
            A$(n(Jc, we, we)),
            M(
              Ce,
              "fromJsHistory",
              function (r) {
                return r.fromJsHistory;
              },
              A$(we),
              M(
                Ce,
                "url",
                function (r) {
                  return r.url;
                },
                we,
                M(
                  Ce,
                  "language",
                  function (r) {
                    return r.language;
                  },
                  we,
                  M(
                    Ce,
                    "user",
                    function (r) {
                      return r.user;
                    },
                    d$(we),
                    M(
                      Ce,
                      "counter",
                      function (r) {
                        return r.counter;
                      },
                      i_,
                      Oa(t_)
                    )
                  )
                )
              )
            )
          )
        )
      )
    ),
    zc = fr(8),
    ra = function (r) {
      return n(Sr, zc, g(jt, "bg-" + Nt(r), "background-color", r));
    },
    u_ = { $: "AsColumn" },
    Qa = u_,
    Ka = s(function (r, e) {
      return M(
        Er,
        Qa,
        oe,
        n(
          b,
          Mr(c.contentTop + (" " + c.contentLeft)),
          n(b, le(Zr), n(b, Cr(Zr), r))
        ),
        hr(e)
      );
    }),
    ea = s(function (r, e) {
      return M(Er, Gr, oe, n(b, Cr(Zr), n(b, le(Zr), r)), hr(u([e])));
    }),
    l_ = s(function (r, e) {
      return n(xt, Vt(e), Vo(r));
    }),
    Oc = s(function (r, e) {
      return { $: "FontFamily", a: r, b: e };
    }),
    Uc = fr(5),
    T$ = tf,
    R$ = nf,
    Vc = s(function (r, e) {
      return G(
        e,
        (function () {
          switch (r.$) {
            case "Serif":
              return "serif";
            case "SansSerif":
              return "sans-serif";
            case "Monospace":
              return "monospace";
            case "Typeface":
              var a = r.a;
              return n(K, "-", R$(T$(a)));
            case "ImportFont":
              var a = r.a,
                t = r.b;
              return n(K, "-", R$(T$(a)));
            default:
              var a = r.a.name;
              return n(K, "-", R$(T$(a)));
          }
        })()
      );
    }),
    c_ = function (r) {
      return n(Sr, Uc, n(Oc, g(dr, Vc, "ff-", r), r));
    },
    v_ = function (r) {
      return { $: "Fill", a: r };
    },
    Qr = v_(1),
    f_ = function (r) {
      return { $: "HiddenLabel", a: r };
    },
    jc = f_,
    s_ = s(function (r, e) {
      return { $: "OnlyDynamic", a: r, b: e };
    }),
    m_ = s(function (r, e) {
      return { $: "StaticRootAndDynamic", a: r, b: e };
    }),
    g_ = { $: "AllowHover" },
    d_ = { $: "Layout" },
    p_ = {
      backgroundColor: j,
      borderColor: j,
      shadow: R({
        blur: 0,
        color: M(vn, 155 / 255, 203 / 255, 1, 1),
        offset: p(0, 0),
        size: 3,
      }),
    },
    b_ = function (r) {
      var e = s(function (a, i) {
          switch (a.$) {
            case "HoverOption":
              var $ = a.a,
                o = i.hover;
              return o.$ === "Nothing" ? q(i, { hover: R($) }) : i;
            case "FocusStyleOption":
              var l = a.a,
                f = i.focus;
              return f.$ === "Nothing" ? q(i, { focus: R(l) }) : i;
            default:
              var m = a.a,
                h = i.mode;
              return h.$ === "Nothing" ? q(i, { mode: R(m) }) : i;
          }
        }),
        t = function (a) {
          return {
            focus: (function () {
              var i = a.focus;
              if (i.$ === "Nothing") return p_;
              var $ = i.a;
              return $;
            })(),
            hover: (function () {
              var i = a.hover;
              if (i.$ === "Nothing") return g_;
              var $ = i.a;
              return $;
            })(),
            mode: (function () {
              var i = a.mode;
              if (i.$ === "Nothing") return d_;
              var $ = i.a;
              return $;
            })(),
          };
        };
      return t(g(xr, e, { focus: j, hover: j, mode: j }, r));
    },
    h_ = s(function (r, e) {
      switch (e.$) {
        case "Unstyled":
          var a = e.a;
          return a(Gr);
        case "Styled":
          var t = e.a.styles,
            a = e.a.html;
          return n(a, r(t), Gr);
        case "Text":
          var i = e.a;
          return Qt(i);
        default:
          return Qt("");
      }
    }),
    __ = I(function (r, e, t) {
      var a = b_(r),
        i = (function () {
          var $ = a.mode;
          return $.$ === "NoStaticStyleSheet" ? s_(a) : m_(a);
        })();
      return n(h_, i, M(Er, Gr, oe, e, hr(u([t]))));
    }),
    Nc = function (r) {
      return { $: "FontSize", a: r };
    },
    w_ = { $: "SansSerif" },
    H$ = function (r) {
      return { $: "Typeface", a: r };
    },
    Wc = fr(4),
    D_ = (function () {
      var r = u([H$("Open Sans"), H$("Helvetica"), H$("Verdana"), w_]);
      return u([
        n(
          Sr,
          zc,
          g(
            jt,
            "bg-" + Nt(M(vn, 1, 1, 1, 0)),
            "background-color",
            M(vn, 1, 1, 1, 0)
          )
        ),
        n(
          Sr,
          Nl,
          g(jt, "fc-" + Nt(M(vn, 0, 0, 0, 1)), "color", M(vn, 0, 0, 0, 1))
        ),
        n(Sr, Wc, Nc(20)),
        n(Sr, Uc, n(Oc, g(dr, Vc, "font-", r), r)),
      ]);
    })(),
    y_ = I(function (r, e, t) {
      var a = r.options;
      return g(
        __,
        a,
        n(b, Mr(n(K, " ", u([c.root, c.any, c.single]))), G(D_, e)),
        t
      );
    }),
    S_ = y_({ options: w }),
    M_ = va("rel"),
    k$ = s(function (r, e) {
      var t = e.url,
        a = e.label;
      return M(
        Er,
        Gr,
        Ne("a"),
        n(
          b,
          Tr(nu(t)),
          n(
            b,
            Tr(M_("noopener noreferrer")),
            n(
              b,
              Cr(Zr),
              n(
                b,
                le(Zr),
                n(
                  b,
                  Mr(
                    c.contentCenterX +
                      (" " + (c.contentCenterY + (" " + c.link)))
                  ),
                  r
                )
              )
            )
          )
        ),
        hr(u([a]))
      );
    }),
    Yc = { $: "TextArea" },
    E_ = { $: "LivePolite" },
    C_ = ja(E_),
    I_ = { $: "AsRow" },
    ct = I_,
    B_ = I(function (r, e, t) {
      if (e.$ === "HiddenLabel") {
        var a = e.a;
        return M(Er, Qa, Ne("label"), r, hr(u([t])));
      } else {
        var i = e.a,
          $ = e.b,
          o = e.c,
          l = M(Er, Gr, oe, $, hr(u([o])));
        switch (i.$) {
          case "Above":
            return M(
              Er,
              Qa,
              Ne("label"),
              n(b, Mr(c.inputLabel), r),
              hr(u([l, t]))
            );
          case "Below":
            return M(
              Er,
              Qa,
              Ne("label"),
              n(b, Mr(c.inputLabel), r),
              hr(u([t, l]))
            );
          case "OnRight":
            return M(
              Er,
              ct,
              Ne("label"),
              n(b, Mr(c.inputLabel), r),
              hr(u([t, l]))
            );
          default:
            return M(
              Er,
              ct,
              Ne("label"),
              n(b, Mr(c.inputLabel), r),
              hr(u([l, t]))
            );
        }
      }
    }),
    x_ = Fr,
    F_ = n(Qn, Tr, x_("autocomplete")),
    A_ = { $: "Behind" },
    T_ = s(function (r, e) {
      return { $: "Nearby", a: r, b: e };
    }),
    qc = s(function (r, e) {
      return e.$ === "Empty" ? gn : n(T_, r, e);
    }),
    R_ = function (r) {
      return n(qc, A_, r);
    },
    H_ = function (r) {
      return { $: "MoveY", a: r };
    },
    k_ = s(function (r, e) {
      return { $: "TransformComponent", a: r, b: e };
    }),
    L_ = fr(26),
    L$ = function (r) {
      return n(k_, L_, H_(-r));
    },
    P_ = function (r) {
      var e = s(function (i, $) {
          if (i.$ === "StyleClass" && i.b.$ === "SpacingStyle") {
            var o = i.b,
              l = o.b,
              f = o.c;
            return $.$ === "Nothing" ? R(f) : $;
          } else return $;
        }),
        t = g(xr, e, j, r);
      if (t.$ === "Nothing") return gn;
      var a = t.a;
      return L$(_n(a / 2));
    },
    Xc = fr(20),
    Gc = n(Kt, Xc, c.clip),
    J_ = fr(28),
    Zc = function (r) {
      return n(Sr, J_, g(jt, "bc-" + Nt(r), "border-color", r));
    },
    z_ = g(xn, 186 / 255, 189 / 255, 182 / 255),
    Rn = mr(function (r, e, t, a, i) {
      return { $: "PaddingStyle", a: r, b: e, c: t, d: a, e: i };
    }),
    Hn = fr(2),
    O_ = s(function (r, e) {
      if (tr(r, e)) {
        var t = r;
        return n(Sr, Hn, N(Rn, "p-" + C(r), t, t, t, t));
      } else {
        var a = e,
          i = r;
        return n(Sr, Hn, N(Rn, "p-" + (C(r) + ("-" + C(e))), a, i, a, i));
      }
    }),
    U_ = n(O_, 12, 12),
    V_ = fr(17),
    na = function (r) {
      return n(Sr, V_, g(ge, "br-" + C(r), "border-radius", C(r) + "px"));
    },
    Qc = I(function (r, e, t) {
      return { $: "SpacingStyle", a: r, b: e, c: t };
    }),
    Kc = fr(3),
    j_ = s(function (r, e) {
      return "spacing-" + (C(r) + ("-" + C(e)));
    }),
    Ie = function (r) {
      return n(Sr, Kc, g(Qc, n(j_, r, r), r, r));
    },
    N_ = g(xn, 1, 1, 1),
    W_ = mr(function (r, e, t, a, i) {
      return { $: "BorderWidth", a: r, b: e, c: t, d: a, e: i };
    }),
    Y_ = function (r) {
      return n(Sr, Rc, N(W_, "b-" + C(r), r, r, r, r));
    },
    q_ = u([U_, na(3), Zc(z_), ra(N_), Y_(1), Ie(5), Cr(Qr), le(Zr)]),
    X_ = function (r) {
      if (r.$ === "Height") {
        var e = r.a;
        return R(e);
      } else return j;
    },
    rv = function (r) {
      if (r.b) {
        var e = r.a,
          t = r.b;
        return R(e);
      } else return j;
    },
    G_ = function (r) {
      return { $: "Label", a: r };
    },
    Z_ = function (r) {
      if (r.$ === "HiddenLabel") {
        var e = r.a;
        return ja(G_(e));
      } else return gn;
    },
    Q_ = { $: "InFront" },
    K_ = function (r) {
      return n(qc, Q_, r);
    },
    rw = function (r) {
      r: for (;;)
        switch (r.$) {
          case "Content":
            return !1;
          case "Px":
            return !0;
          case "Fill":
            return !0;
          case "Min":
            var t = r.b,
              e = t;
            r = e;
            continue r;
          default:
            var t = r.b;
            return !0;
        }
    },
    ew = function (r) {
      return r.$ === "HiddenLabel";
    },
    nw = function (r) {
      if (r.$ === "Label") {
        var e = r.a;
        switch (e.$) {
          case "OnRight":
            return !1;
          case "OnLeft":
            return !1;
          case "Above":
            return !0;
          default:
            return !0;
        }
      } else return !0;
    },
    tw = function (r) {
      return { bottom: -r.bottom, left: -r.left, right: -r.right, top: -r.top };
    },
    aw = ar(function (r, e, t, a) {
      return "pad-" + (C(r) + ("-" + (C(e) + ("-" + (C(t) + ("-" + C(a)))))));
    }),
    ev = function (r) {
      var e = r.top,
        t = r.right,
        a = r.bottom,
        i = r.left;
      if (tr(e, t) && tr(e, a) && tr(e, i)) {
        var $ = e;
        return n(Sr, Hn, N(Rn, "p-" + C(e), $, $, $, $));
      } else return n(Sr, Hn, N(Rn, M(aw, e, t, a, i), e, t, a, i));
    },
    nv = Tr,
    tv = function (r) {
      r: for (;;)
        switch (r.$) {
          case "Fill":
            return !0;
          case "Content":
            return !1;
          case "Px":
            return !1;
          case "Min":
            var e = r.b,
              t = e;
            r = t;
            continue r;
          default:
            var e = r.b,
              t = e;
            r = t;
            continue r;
        }
    },
    iw = function (r) {
      r: for (;;)
        switch (r.$) {
          case "Content":
            return !1;
          case "Px":
            return !0;
          case "Fill":
            return !1;
          case "Min":
            var e = r.b,
              t = e;
            r = t;
            continue r;
          default:
            var e = r.b,
              t = e;
            r = t;
            continue r;
        }
    },
    av = ar(function (r, e, t, a) {
      return (
        "pad-" + (wr(r) + ("-" + (wr(e) + ("-" + (wr(t) + ("-" + wr(a)))))))
      );
    }),
    $w = ar(function (r, e, t, a) {
      switch (t.$) {
        case "Nearby":
          return q(a, { parent: n(b, t, a.parent) });
        case "Width":
          var i = t.a;
          return tv(i)
            ? q(a, {
                fullParent: n(b, t, a.fullParent),
                input: n(b, t, a.input),
                parent: n(b, t, a.parent),
              })
            : e
            ? q(a, { fullParent: n(b, t, a.fullParent) })
            : q(a, { parent: n(b, t, a.parent) });
        case "Height":
          var $ = t.a;
          return e
            ? tv($)
              ? q(a, {
                  fullParent: n(b, t, a.fullParent),
                  parent: n(b, t, a.parent),
                })
              : iw($)
              ? q(a, { parent: n(b, t, a.parent) })
              : q(a, { parent: n(b, t, a.parent) })
            : q(a, {
                fullParent: n(b, t, a.fullParent),
                parent: n(b, t, a.parent),
              });
        case "AlignX":
          return q(a, { fullParent: n(b, t, a.fullParent) });
        case "AlignY":
          return q(a, { fullParent: n(b, t, a.fullParent) });
        case "StyleClass":
          switch (t.b.$) {
            case "SpacingStyle":
              var o = t.b;
              return q(a, {
                fullParent: n(b, t, a.fullParent),
                input: n(b, t, a.input),
                parent: n(b, t, a.parent),
                wrapper: n(b, t, a.wrapper),
              });
            case "PaddingStyle":
              var X = t.a,
                l = t.b,
                f = l.a,
                m = l.b,
                h = l.c,
                d = l.d,
                S = l.e;
              if (r)
                return q(a, {
                  cover: n(b, t, a.cover),
                  parent: n(b, t, a.parent),
                });
              var y = m - n(An, m, d),
                E = nv(
                  n(
                    D,
                    "line-height",
                    "calc(1.0em + " + (ir(2 * n(An, m, d)) + "px)")
                  )
                ),
                B = nv(
                  n(
                    D,
                    "height",
                    "calc(1.0em + " + (ir(2 * n(An, m, d)) + "px)")
                  )
                ),
                F = d - n(An, m, d),
                A = n(Sr, Hn, N(Rn, M(av, y, h, F, S), y, h, F, S));
              return q(a, {
                cover: n(b, t, a.cover),
                input: n(b, B, n(b, E, a.input)),
                parent: n(b, A, a.parent),
              });
            case "BorderWidth":
              var k = t.b;
              return q(a, {
                cover: n(b, t, a.cover),
                parent: n(b, t, a.parent),
              });
            case "Transform":
              return q(a, {
                cover: n(b, t, a.cover),
                parent: n(b, t, a.parent),
              });
            case "FontSize":
              return q(a, { fullParent: n(b, t, a.fullParent) });
            case "FontFamily":
              var Y = t.b;
              return q(a, { fullParent: n(b, t, a.fullParent) });
            default:
              var Q = t.a,
                X = t.b;
              return q(a, { parent: n(b, t, a.parent) });
          }
        case "NoAttribute":
          return a;
        case "Attr":
          var lr = t.a;
          return q(a, { input: n(b, t, a.input) });
        case "Describe":
          return q(a, { input: n(b, t, a.input) });
        case "Class":
          return q(a, { parent: n(b, t, a.parent) });
        default:
          return q(a, { input: n(b, t, a.input) });
      }
    }),
    ow = I(function (r, e, t) {
      return (function (a) {
        return {
          cover: yr(a.cover),
          fullParent: yr(a.fullParent),
          input: yr(a.input),
          parent: yr(a.parent),
          wrapper: yr(a.wrapper),
        };
      })(
        g(
          dr,
          n($w, r, e),
          { cover: w, fullParent: w, input: w, parent: w, wrapper: w },
          t
        )
      );
    }),
    uw = function (r) {
      var e = r.top,
        t = r.right,
        a = r.bottom,
        i = r.left;
      return (
        C(e) + ("px " + (C(t) + ("px " + (C(a) + ("px " + (C(i) + "px"))))))
      );
    },
    lw = s(function (r, e) {
      return { $: "Transparency", a: r, b: e };
    }),
    cw = fr(0),
    vw = function (r) {
      var e = (function (t) {
        return 1 - t;
      })(n(An, 1, n(Ae, 0, r)));
      return n(Sr, cw, n(lw, "transparency-" + wr(e), e));
    },
    fw = g(xn, 136 / 255, 138 / 255, 133 / 255),
    iv = vn,
    $v = I(function (r, e, t) {
      var a = r.a,
        i = r.b;
      return n(
        ea,
        G(
          e,
          G(
            u([
              b$(fw),
              Mr(c.noTextSelection + (" " + c.passPointerEvents)),
              Gc,
              Zc(M(iv, 0, 0, 0, 0)),
              ra(M(iv, 0, 0, 0, 0)),
              le(Qr),
              Cr(Qr),
              vw(t ? 1 : 0),
            ]),
            a
          )
        ),
        i
      );
    }),
    sw = n(Kt, Xc, c.scrollbarsY),
    mw = Wl("spellcheck"),
    gw = n(Qn, Tr, mw),
    dw = function (r) {
      return { $: "Text", a: r };
    },
    de = function (r) {
      return dw(r);
    },
    pw = n(Qn, _$, Ra),
    bw = n(Qn, Tr, Nu),
    ov = I(function (r, e, t) {
      var a = G(q_, e),
        i = g(ow, tr(r.type_, Yc), nw(t.label), a),
        $ = function (d) {
          if (d.$ === "StyleClass" && d.b.$ === "SpacingStyle") {
            var S = d.b;
            return !0;
          } else return !1;
        },
        o = (function () {
          var d = r.type_;
          if (d.$ === "TextInputNode") {
            var S = d.a;
            return !1;
          } else return n(Vr, !1, n(fn, rw, rv(yr(n(ln, X_, a)))));
        })(),
        l = function (d) {
          if (d.$ === "StyleClass" && d.b.$ === "PaddingStyle") {
            var S = d.a,
              y = d.b,
              E = y.a,
              B = y.b,
              F = y.c,
              A = y.d,
              k = y.e;
            return R({
              bottom: n(Ae, 0, _n(A - 3)),
              left: n(Ae, 0, _n(k - 3)),
              right: n(Ae, 0, _n(F - 3)),
              top: n(Ae, 0, _n(B - 3)),
            });
          } else return j;
        },
        f = n(
          Vr,
          { bottom: 0, left: 0, right: 0, top: 0 },
          rv(yr(n(ln, l, a)))
        ),
        m = M(
          Er,
          Gr,
          (function () {
            var d = r.type_;
            if (d.$ === "TextInputNode") {
              var S = d.a;
              return Ne("input");
            } else return Ne("textarea");
          })(),
          G(
            (function () {
              var d = r.type_;
              if (d.$ === "TextInputNode") {
                var S = d.a;
                return u([Tr(ju(S)), Mr(c.inputText)]);
              } else
                return u([
                  Gc,
                  le(Qr),
                  Mr(c.inputMultiline),
                  P_(a),
                  ev(f),
                  Tr(n(D, "margin", uw(tw(f)))),
                  Tr(n(D, "box-sizing", "content-box")),
                ]);
            })(),
            G(
              u([
                bw(t.text),
                Tr(Vu(t.onChange)),
                Z_(t.label),
                gw(r.spellchecked),
                n(Vr, gn, n(fn, F_, r.autofill)),
              ]),
              i.input
            )
          ),
          hr(w)
        ),
        h = (function () {
          var d = r.type_;
          if (d.$ === "TextArea")
            return M(
              Er,
              Gr,
              oe,
              G(
                (o ? b(sw) : et)(
                  u([
                    Cr(Qr),
                    n(qt, x$, a) ? gn : Mr(c.focusedWithin),
                    Mr(c.inputMultilineWrapper),
                  ])
                ),
                i.parent
              ),
              hr(
                u([
                  M(
                    Er,
                    at,
                    oe,
                    n(
                      b,
                      Cr(Qr),
                      n(
                        b,
                        le(Qr),
                        n(b, K_(m), n(b, Mr(c.inputMultilineParent), i.wrapper))
                      )
                    ),
                    hr(
                      (function () {
                        if (t.text === "") {
                          var y = t.placeholder;
                          if (y.$ === "Nothing") return u([de("\xA0")]);
                          var E = y.a;
                          return u([g($v, E, w, t.text === "")]);
                        } else
                          return u([
                            pw(
                              n(
                                pr,
                                u([Ar(c.inputMultilineFiller)]),
                                u([H(t.text + "\xA0")])
                              )
                            ),
                          ]);
                      })()
                    )
                  ),
                ])
              )
            );
          var S = d.a;
          return M(
            Er,
            Gr,
            oe,
            n(
              b,
              Cr(Qr),
              n(
                b,
                n(qt, x$, a) ? gn : Mr(c.focusedWithin),
                At(
                  u([
                    i.parent,
                    (function () {
                      var y = t.placeholder;
                      if (y.$ === "Nothing") return w;
                      var E = y.a;
                      return u([R_(g($v, E, i.cover, t.text === ""))]);
                    })(),
                  ])
                )
              )
            ),
            hr(u([m]))
          );
        })();
      return g(
        B_,
        n(
          b,
          n(Kt, Lc, c.cursorText),
          n(b, ew(t.label) ? gn : Ie(5), n(b, C_, i.fullParent))
        ),
        t.label,
        h
      );
    }),
    hw = s(function (r, e) {
      return g(ov, { autofill: j, spellchecked: e.spellcheck, type_: Yc }, r, {
        label: e.label,
        onChange: e.onChange,
        placeholder: e.placeholder,
        text: e.text,
      });
    }),
    P$ = function (r) {
      var e = r;
      return n(Sr, Hn, N(Rn, "p-" + C(r), e, e, e, e));
    },
    _w = { $: "Paragraph" },
    J$ = s(function (r, e) {
      return M(Er, at, oe, n(b, ja(_w), n(b, Cr(Qr), n(b, Ie(5), r))), hr(e));
    }),
    ww = function (r) {
      return { $: "Px", a: r };
    },
    ta = ww,
    z$ = s(function (r, e) {
      return M(
        Er,
        ct,
        oe,
        n(
          b,
          Mr(c.contentLeft + (" " + c.contentCenterY)),
          n(b, Cr(Zr), n(b, le(Zr), r))
        ),
        hr(e)
      );
    }),
    kn = function (r) {
      return n(Sr, Wc, Nc(r));
    },
    Dw = function (r) {
      return { $: "TextInputNode", a: r };
    },
    yw = ov({ autofill: j, spellchecked: !1, type_: Dw("text") }),
    uv = u([na(5), ra(g(xn, 0.9, 0.9, 0.9)), Cr(ta(40)), le(ta(40))]),
    Sw = fr(12),
    Mw = n(Kt, Sw, c.textCenter),
    Ew = { $: "CenterX" },
    lv = Vl(Ew),
    Cw = I(function (r, e, t) {
      return M(vn, r / 255, e / 255, t / 255, 1);
    }),
    cv = I(function (r, e, t) {
      return n(
        Ka,
        u([Ie(5)]),
        u([
          n(J$, u([kn(13)]), u([de(r)])),
          n(
            z$,
            u([Ie(10), P$(10), ra(g(Cw, 18, 147, 216)), na(10)]),
            u([
              n(F$, uv, {
                label: n(ea, u([kn(30), lv, L$(2)]), de("-")),
                onPress: R(t(e - 1)),
              }),
              n(ea, u([kn(20), b$(g(xn, 1, 1, 1)), Cr(ta(60)), Mw]), de(C(e))),
              n(F$, uv, {
                label: n(ea, u([kn(30), lv, L$(2)]), de("+")),
                onPress: R(t(e + 1)),
              }),
            ])
          ),
        ])
      );
    }),
    Iw = mr(function (r, e, t, a, i) {
      return { $: "Padding", a: r, b: e, c: t, d: a, e: i };
    }),
    Bw = I(function (r, e, t) {
      return { $: "Spaced", a: r, b: e, c: t };
    }),
    xw = function (r) {
      return g(
        xr,
        s(function (e, t) {
          var a = t.a,
            i = t.b;
          return p(
            (function () {
              if (a.$ === "Just") {
                var $ = a.a;
                return a;
              } else if (e.$ === "StyleClass" && e.b.$ === "PaddingStyle") {
                var o = e.b,
                  l = o.a,
                  f = o.b,
                  m = o.c,
                  h = o.d,
                  d = o.e;
                return R(N(Iw, l, f, m, h, d));
              } else return j;
            })(),
            (function () {
              if (i.$ === "Just") {
                var $ = i.a;
                return i;
              } else if (e.$ === "StyleClass" && e.b.$ === "SpacingStyle") {
                var o = e.b,
                  l = o.a,
                  $ = o.b,
                  f = o.c;
                return R(g(Bw, l, $, f));
              } else return j;
            })()
          );
        }),
        p(j, j),
        r
      );
    },
    Fw = s(function (r, e) {
      var t = xw(r),
        a = t.a,
        i = t.b;
      if (i.$ === "Nothing")
        return M(
          Er,
          ct,
          oe,
          n(
            b,
            Mr(c.contentLeft + (" " + (c.contentCenterY + (" " + c.wrapped)))),
            n(b, Cr(Zr), n(b, le(Zr), r))
          ),
          hr(e)
        );
      var $ = i.a,
        o = $.a,
        l = $.b,
        f = $.c,
        m = (function () {
          if (a.$ === "Just") {
            var y = a.a,
              E = y.a,
              B = y.b,
              F = y.c,
              A = y.d,
              k = y.e;
            if (ur(F, l / 2) > -1 && ur(A, f / 2) > -1) {
              var Y = B - f / 2,
                Q = F - l / 2,
                X = k - l / 2,
                lr = A - f / 2;
              return R(n(Sr, Hn, N(Rn, M(av, Y, Q, lr, X), Y, Q, lr, X)));
            } else return j;
          } else return j;
        })();
      if (m.$ === "Just") {
        var h = m.a;
        return M(
          Er,
          ct,
          oe,
          n(
            b,
            Mr(c.contentLeft + (" " + (c.contentCenterY + (" " + c.wrapped)))),
            n(b, Cr(Zr), n(b, le(Zr), G(r, u([h]))))
          ),
          hr(e)
        );
      } else {
        var d = -(f / 2),
          S = -(l / 2);
        return M(
          Er,
          Gr,
          oe,
          r,
          hr(
            u([
              M(
                Er,
                ct,
                oe,
                n(
                  b,
                  Mr(
                    c.contentLeft +
                      (" " + (c.contentCenterY + (" " + c.wrapped)))
                  ),
                  n(
                    b,
                    Tr(n(D, "margin", ir(d) + ("px" + (" " + (ir(S) + "px"))))),
                    n(
                      b,
                      Tr(n(D, "width", "calc(100% + " + (C(l) + "px)"))),
                      n(
                        b,
                        Tr(n(D, "height", "calc(100% + " + (C(f) + "px)"))),
                        n(b, n(Sr, Kc, g(Qc, o, l, f)), w)
                      )
                    )
                  )
                ),
                hr(e)
              ),
            ])
          )
        );
      }
    }),
    Aw = function (r) {
      var e = n(Vr, 0, n(jl, Gi, n(La, Ul, Gu(r.localStorage))));
      return n(
        S_,
        u([P$(20), kn(16), c_(w)]),
        n(
          Ka,
          u([Ie(20), Cr(Qr)]),
          u([
            n(
              J$,
              u([kn(20), ev({ bottom: 20, left: 0, right: 0, top: 0 })]),
              u([
                de("Microfrontend POC - "),
                de(
                  (function (t) {
                    return Jt(t) ? "Home" : t;
                  })(
                    n(
                      Vr,
                      "Home",
                      n(
                        jl,
                        function (t) {
                          return t.fragment;
                        },
                        s$(r.url)
                      )
                    )
                  )
                ),
                n(ea, u([Sb, kn(13)]), de(n(Vr, "", r.user))),
              ])
            ),
            n(
              z$,
              u([Ie(40), Cr(Qr)]),
              u([
                n(
                  Ka,
                  u([Ie(10), Cb]),
                  u([
                    n(k$, h$, { label: de("Home"), url: "#" }),
                    n(k$, h$, { label: de("Page 1"), url: "#page1" }),
                    n(k$, h$, { label: de("Page 2"), url: "#page2" }),
                  ])
                ),
                n(
                  Ka,
                  u([Cr(Qr), Ie(20)]),
                  u([
                    n(
                      Fw,
                      u([Ie(20)]),
                      u([
                        g(cv, "Counter", r.counter, bb),
                        g(cv, "Synced counter", e, _b),
                      ])
                    ),
                    n(
                      z$,
                      u([Ie(10), Cr(Qr)]),
                      u([
                        n(yw, u([Cr(Qr), le(ta(42))]), {
                          label: jc(""),
                          onChange: hb,
                          placeholder: j,
                          text: r.string,
                        }),
                        n(
                          F$,
                          u([
                            ra(g(xn, 0.8, 0.8, 0.8)),
                            le(ta(42)),
                            P$(10),
                            na(5),
                          ]),
                          {
                            label: de("Send to Host"),
                            onPress: R(Db(r.string)),
                          }
                        ),
                      ])
                    ),
                    n(J$, w, u([de("Model")])),
                    n(hw, u([Cr(Qr), na(5)]), {
                      label: jc(""),
                      onChange: function (t) {
                        return wb;
                      },
                      placeholder: j,
                      spellcheck: !1,
                      text: g(l_, 4, o_, r),
                    }),
                  ])
                ),
              ])
            ),
          ])
        )
      );
    },
    Tw = function (r) {
      if (r.$ === "Just") {
        var e = r.a;
        return Aw(e);
      } else return H("");
    },
    Rw = Up({ init: eb, subscriptions: vb, update: pb, view: Tw });
  es({
    Main: {
      init: Rw(
        n(
          wt,
          function (r) {
            return n(
              wt,
              function (e) {
                return n(
                  wt,
                  function (t) {
                    return n(
                      wt,
                      function (a) {
                        return en({
                          cookies: a,
                          flagsFromHorizon: t,
                          localStorage: e,
                          url: r,
                        });
                      },
                      n(_r, "cookies", jr)
                    );
                  },
                  n(_r, "flagsFromHorizon", jr)
                );
              },
              n(_r, "localStorage", jr)
            );
          },
          n(_r, "url", jr)
        )
      )({
        versions: { elm: "0.19.1" },
        types: {
          message: "Main.Msg",
          aliases: {},
          unions: {
            "Main.Msg": {
              args: [],
              tags: {
                NoOp: [],
                Unmount: ["()"],
                ChangeCounter: ["Basics.Int"],
                ChangeSyncedCounter: ["Basics.Int"],
                StringFromJsToElm: ["String.String"],
                LocalStorageFromJsToElm: ["String.String"],
                ChangeString: ["String.String"],
                SendString: ["String.String"],
              },
            },
            "Basics.Int": { args: [], tags: { Int: [] } },
            "String.String": { args: [], tags: { String: [] } },
          },
        },
      }),
    },
  });
})(window),
  (window.ElmWrapped = {
    init: (or) => {
      (or = or || {}),
        (or.window = or.window || window),
        (or.elm = or.elm || or.window.Elm),
        (or.node =
          or.node ||
          or.window.document.body.appendChild(
            or.window.document.createElement("div")
          ));
      const Nr = (Wr) => String(or.window.JSON.stringify(Wr)),
        s = (Wr) => {
          or.window.localStorage.setItem(Wr[0], Wr[1]),
            mr.ports.localStorageFromJsToElm.send(Nr(or.window.localStorage));
        },
        I = (Wr) => {
          Wr.storageArea === or.window.localStorage &&
            mr.ports.localStorageFromJsToElm.send(Nr(or.window.localStorage));
        },
        ar = () => {
          mr.ports.stringFromJsToElm.send(
            Nr({ url: or.window.document.location.href })
          );
        };
      let mr = or.elm.Main.init({
        node: or.node,
        flags: {
          url: or.window.location.href,
          localStorage: Nr(or.window.localStorage),
          cookies: or.window.document.cookie,
          flagsFromHorizon: Nr(or.flags),
        },
      });
      return (
        or.window.addEventListener("storage", I, !1),
        or.window.addEventListener("popstate", ar, !1),
        mr.ports.setLocalStorageItem.subscribe(s),
        {
          send: (Wr) => {
            mr.ports.stringFromJsToElm.send(Nr(Wr));
          },
          receive: mr.ports.stringFromElmToJs,
          unmount: () => {
            or.window.removeEventListener("storage", I, !1),
              or.window.removeEventListener("popstate", ar, !1),
              mr.ports.setLocalStorageItem.unsubscribe(s),
              mr.ports.unmount.send(null),
              (mr = null);
          },
        }
      );
    },
  });
