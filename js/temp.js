;
(function(window, document, undefined) {
    var r, aa = aa || {};

    function ba(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function da(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function x(a, b, c) {
        x = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ba : da;
        return x.apply(null, arguments)
    }
    var ea = aa.xa && Date.now || function() {
        return +new Date
    };
    mti = {
        bind: function(a, b, c) {
            var d = 2 < arguments.length ? Array.prototype.slice.call(arguments, 2) : [];
            return function() {
                d.push.apply(d, arguments);
                return b.apply(a, d)
            }
        }
    };

    function fa(a, b) {
        this.i = b || a;
        this.a = this.i.document;
        this.c = void 0
    }
    r = fa.prototype;
    r.createElement = function(a, b, c) {
        a = this.a.createElement(a);
        if (b)
            for (var d in b) b.hasOwnProperty(d) && ("style" == d ? C(this, a, b[d]) : a.setAttribute(d, b[d]));
        c && a.appendChild(this.a.createTextNode(c));
        return a
    };

    function ga(a, b, c) {
        a = a.a.getElementsByTagName(b)[0];
        a || (a = document.documentElement);
        a && a.lastChild && a.insertBefore(c, a.lastChild)
    }
    r.Z = function(a) {
        function b() {
            c.a.body ? a() : setTimeout(b, 0)
        }
        var c = this;
        b()
    };

    function ha(a) {
        a.parentNode && a.parentNode.removeChild(a)
    }

    function D(a, b) {
        if (!("undefined" !== typeof SVGElement && a instanceof SVGElement)) {
            for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++)
                if (c[d] == b) return;
            c.push(b);
            a.className = c.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
        }
    }

    function G(a, b) {
        if (!("undefined" !== typeof SVGElement && a instanceof SVGElement)) {
            for (var c = a.className.split(/\s+/), d = [], e = 0, f = c.length; e < f; e++) c[e] != b && d.push(c[e]);
            a.className = d.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
        }
    }

    function ia(a, b) {
        if ("undefined" !== typeof SVGElement && a instanceof SVGElement) return !1;
        for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++)
            if (c[d] == b) return !0;
        return !1
    }

    function C(a, b, c) {
        if (void 0 === a.c) {
            var d = a.a.createElement("p");
            d.innerHTML = '<a style="top:1px;">w</a>';
            a.c = /top/.test(d.getElementsByTagName("a")[0].getAttribute("style"))
        }
        a.c ? b.setAttribute("style", c) : b.style.cssText = c
    }
    r.getComputedStyle = function(a) {
        if ("undefined" != typeof a && null != a) {
            if (1 != a.nodeType) return "";
            var b = {};
            if ("undefined" != typeof a.currentStyle && null != a.currentStyle) return b.fontFamily = a.currentStyle.fontFamily, b.fontWeight = a.currentStyle.fontWeight, b.fontStyle = a.currentStyle.fontStyle, b;
            a = this.a.defaultView.getComputedStyle(a, null);
            if ("undefined" != typeof a && null != a) return b.fontFamily = a.getPropertyValue("font-family"), b.fontWeight = a.getPropertyValue("font-weight"), b.fontStyle = a.getPropertyValue("font-style"),
                b
        }
        return ""
    };
    r.P = function(a) {
        if ("undefined" != typeof a && null != a) {
            if ("undefined" != typeof a.currentStyle) return a.currentStyle.fontFamily;
            if (a = this.a.defaultView.getComputedStyle(a, null)) return a.getPropertyValue("font-family")
        }
        return ""
    };
    r.getElementById = function(a) {
        return this.a.getElementById(a)
    };
    r.indexOf = function(a, b) {
        if (a) {
            if (a.indexOf) return a.indexOf(b);
            for (var c = 0; c < a.length; c++)
                if (a[c] == b) return c
        }
        return -1
    };

    function H(a) {
        return a.replace(/^\s|\s$/g, "").replace(/'|"/g, "").replace(/,\s*/g, "|")
    }
    r.P = function(a) {
        if ("undefined" != typeof a && null != a) {
            if ("undefined" != typeof a.currentStyle) return a.currentStyle.fontFamily;
            if (a = this.a.defaultView.getComputedStyle(a, null)) return a.getPropertyValue("font-family")
        }
        return ""
    };

    function K(a, b) {
        this.c = a;
        this.a = b
    };

    function L(a, b, c, d) {
        this.g = null != a ? a : null;
        this.m = null != b ? b : null;
        this.a = null != c ? c : null;
        this.c = null != d ? d : null
    }
    var ja = /^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
    L.prototype.toString = function() {
        return [this.g, this.m || "", this.a || "", this.c || ""].join("")
    };

    function M(a) {
        a = ja.exec(a);
        var b = null,
            c = null,
            d = null,
            e = null;
        a && (null !== a[1] && a[1] && (b = parseInt(a[1], 10)), null !== a[2] && a[2] && (c = parseInt(a[2], 10)), null !== a[3] && a[3] && (d = parseInt(a[3], 10)), null !== a[4] && a[4] && (/^[0-9]+$/.test(a[4]) ? e = parseInt(a[4], 10) : e = a[4]));
        return new L(b, c, d, e)
    };

    function N(a, b, c, d, e, f, g, k) {
        this.B = a;
        this.na = b;
        this.X = e;
        this.a = k
    }
    N.prototype.getName = function() {
        return this.B
    };

    function ka() {
        this.b = navigator.userAgent
    }
    var la = new N("Unknown", new L, 0, 0, "Unknown", 0, 0, new K(!1, !1));

    function ma() {
        var a = new ka;
        if (-1 != a.b.indexOf("MSIE") || -1 != a.b.indexOf("Trident/")) {
            var b = P(a),
                c = M(na(a)),
                d = null,
                e = Q(a.b, /Trident\/([\d\w\.]+)/, 1),
                d = -1 != a.b.indexOf("MSIE") ? M(Q(a.b, /MSIE ([\d\w\.]+)/, 1)) : M(Q(a.b, /rv:([\d\w\.]+)/, 1));
            "" != e && M(e);
            a = new N("MSIE", d, 0, 0, b, 0, 0, new K("Windows" == b && 6 <= d.g || "Windows Phone" == b && 8 <= c.g, !1))
        } else if (-1 != a.b.indexOf("Opera")) a: if (b = M(Q(a.b, /Presto\/([\d\w\.]+)/, 1)), M(na(a)), null !== b.g || M(Q(a.b, /rv:([^\)]+)/, 1)), -1 != a.b.indexOf("Opera Mini/")) b = M(Q(a.b, /Opera Mini\/([\d\.]+)/,
                1)), a = new N("OperaMini", b, 0, 0, P(a), 0, 0, new K(!1, !1));
            else {
                if (-1 != a.b.indexOf("Version/") && (b = M(Q(a.b, /Version\/([\d\.]+)/, 1)), null !== b.g)) {
                    a = new N("Opera", b, 0, 0, P(a), 0, 0, new K(10 <= b.g, !1));
                    break a
                }
                b = M(Q(a.b, /Opera[\/ ]([\d\.]+)/, 1));
                a = null !== b.g ? new N("Opera", b, 0, 0, P(a), 0, 0, new K(10 <= b.g, !1)) : new N("Opera", new L, 0, 0, P(a), 0, 0, new K(!1, !1))
            }
        else /OPR\/[\d.]+/.test(a.b) ? a = pa(a) : /AppleWeb(K|k)it/.test(a.b) ? a = pa(a) : -1 != a.b.indexOf("Gecko") ? (b = "Unknown", c = new L, M(na(a)), d = !1, -1 != a.b.indexOf("Firefox") ? (b =
            "Firefox", c = M(Q(a.b, /Firefox\/([\d\w\.]+)/, 1)), d = 3 <= c.g && 5 <= c.m) : -1 != a.b.indexOf("Mozilla") && (b = "Mozilla"), e = M(Q(a.b, /rv:([^\)]+)/, 1)), d || (d = 1 < e.g || 1 == e.g && 9 < e.m || 1 == e.g && 9 == e.m && 2 <= e.a), a = new N(b, c, 0, 0, P(a), 0, 0, new K(d, !1))) : a = la;
        return a
    }

    function P(a) {
        var b = Q(a.b, /(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/, 1);
        if ("" != b) return /BB\d{2}/.test(b) && (b = "BlackBerry"), b;
        a = Q(a.b, /(Linux|Mac_PowerPC|Macintosh|Windows|CrOS|PlayStation|CrKey)/, 1);
        return "" != a ? ("Mac_PowerPC" == a ? a = "Macintosh" : "PlayStation" == a && (a = "Linux"), a) : "Unknown"
    }

    function na(a) {
        var b = Q(a.b, /Windows Phone( OS)? ([^;)]+)/, 2);
        if (b || (b = Q(a.b, /(OS X|Windows NT|Android) ([^;)]+)/, 2)) || (b = Q(a.b, /(iPhone )?OS ([\d_]+)/, 2))) return b;
        if (b = Q(a.b, /(?:Linux|CrOS|CrKey) ([^;)]+)/, 1))
            for (var b = b.split(/\s/), c = 0; c < b.length; c += 1)
                if (/^[\d\._]+$/.test(b[c])) return b[c];
        return (a = Q(a.b, /(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/, 2)) ? a : "Unknown"
    }

    function pa(a) {
        var b = P(a),
            c = M(na(a)),
            d = M(Q(a.b, /AppleWeb(?:K|k)it\/([\d\.\+]+)/, 1)),
            e = "Unknown",
            f = new L,
            f = "Unknown",
            g = !1;
        /OPR\/[\d.]+/.test(a.b) ? e = "Opera" : -1 != a.b.indexOf("Edge") ? e = "Edge" : -1 != a.b.indexOf("Chrome") || -1 != a.b.indexOf("CrMo") || -1 != a.b.indexOf("CriOS") ? e = "Chrome" : /Silk\/\d/.test(a.b) ? e = "Silk" : "BlackBerry" == b || "Android" == b ? e = "BuiltinBrowser" : -1 != a.b.indexOf("PhantomJS") ? e = "PhantomJS" : -1 != a.b.indexOf("Safari") ? e = "Safari" : -1 != a.b.indexOf("AdobeAIR") ? e = "AdobeAIR" : -1 != a.b.indexOf("PlayStation") ?
            e = "BuiltinBrowser" : -1 != a.b.indexOf("FBAN") && (e = "FBWebUI");
        "BuiltinBrowser" == e ? f = "Unknown" : "Silk" == e ? f = Q(a.b, /Silk\/([\d\._]+)/, 1) : "Chrome" == e ? f = Q(a.b, /(Chrome|CrMo|CriOS)\/([\d\.]+)/, 2) : -1 != a.b.indexOf("Version/") ? f = Q(a.b, /Version\/([\d\.\w]+)/, 1) : "AdobeAIR" == e ? f = Q(a.b, /AdobeAIR\/([\d\.]+)/, 1) : "Opera" == e ? f = Q(a.b, /OPR\/([\d.]+)/, 1) : "PhantomJS" == e ? f = Q(a.b, /PhantomJS\/([\d.]+)/, 1) : "FBWebUI" == e ? f = Q(a.b, /FBSV\/([\d.]+)/, 1) : "Edge" == e && (f = Q(a.b, /Edge\/([\d.]+)/, 1));
        f = M(f);
        g = "AdobeAIR" == e ? 2 < f.g || 2 == f.g &&
            5 <= f.m : "BlackBerry" == b ? 10 <= c.g : "Android" == b ? 2 < c.g || 2 == c.g && 1 < c.m : 526 <= d.g || 525 <= d.g && 13 <= d.m;
        return new N(e, f, 0, 0, b, 0, 0, new K(g, 536 > d.g || 536 == d.g && 11 > d.m))
    }

    function Q(a, b, c) {
        return (a = a.match(b)) && a[c] ? a[c] : ""
    };

    function qa(a) {
        this.c = a || "-"
    }
    qa.prototype.a = function(a) {
        for (var b = [], c = 0; c < arguments.length; c++) b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase());
        return b.join(this.c)
    };

    function ra(a, b, c) {
        this.f = a;
        this.c = b;
        this.i = c;
        this.a = new qa("-")
    }

    function sa(a) {
        D(a.c, a.a.a("mti", "loading"));
        T(a, "loading")
    }

    function ta(a) {
        G(a.c, a.a.a("mti", "loading"));
        ia(a.c, a.a.a("mti", "active")) || D(a.c, a.a.a("mti", "inactive"));
        T(a, "inactive")
    }

    function T(a, b, c) {
        if (a.i[b])
            if (c) a.i[b](c.getName(), U(c));
            else a.i[b]()
    };

    function V(a, b) {
        this.B = a;
        this.C = 4;
        this.A = "n";
        var c = (b || "n4").match(/^([nio])([1-9])$/i);
        c && (this.A = c[1], this.C = parseInt(c[2], 10))
    }
    V.prototype.getName = function() {
        return this.B
    };
    V.prototype.Y = function(a) {
        var b = [];
        a = a.split(/,\s*/);
        for (var c = 0; c < a.length; c++) {
            var d = a[c].replace(/['"]/g, ""); - 1 == d.indexOf(" ") ? b.push(d) : b.push("'" + d + "'")
        }
        return b.join(",")
    };

    function U(a) {
        return a.A + a.C
    };

    function ua(a, b) {
        this.f = a;
        this.c = b;
        this.a = this.f.createElement("span", {
            "aria-hidden": "true"
        }, this.c)
    }

    function va(a) {
        ga(a.f, "body", a.a)
    }

    function wa(a) {
        var b = "position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + a.Y(a.B) + "!important;",
            c = "normal",
            d = a.C + "00";
        "o" === a.A ? c = "oblique" : "i" === a.A && (c = "italic");
        return b + ("font-style:" + c + ";font-weight:" + d + ";")
    };

    function xa(a, b, c, d, e, f, g, k) {
        this.J = a;
        this.ga = b;
        this.f = c;
        this.a = d;
        this.F = k || "BESb\uc5d0swy";
        this.L = e;
        this.l = {};
        this.ia = f || 5E4;
        this.K = g || null;
        this.i = this.c = null;
        a = new ua(this.f, this.F);
        va(a);
        for (var n in W) W.hasOwnProperty(n) && (b = new V(W[n], U(this.a)), C(a.f, a.a, wa(b)), this.l[W[n]] = a.a.offsetWidth);
        ha(a.a)
    }
    var W = {
        wa: "serif",
        va: "sans-serif",
        ra: "monospace"
    };

    function ya(a, b, c) {
        for (var d in W)
            if (W.hasOwnProperty(d) && b === a.l[W[d]] && c === a.l[W[d]]) return !0;
        return !1
    }

    function za(a) {
        var b = a.c.a.offsetWidth,
            c = a.i.a.offsetWidth;
        b === a.l.serif && c === a.l["sans-serif"] || a.L.a && ya(a, b, c) ? ea() - a.ha >= a.ia ? a.L.a && ya(a, b, c) && (null === a.K || a.K.hasOwnProperty(a.a.getName())) ? Ca(a, a.J) : Ca(a, a.ga) : Da(a) : Ca(a, a.J)
    }

    function Da(a) {
        setTimeout(x(function() {
            za(this)
        }, a), 25)
    }

    function Ca(a, b) {
        ha(a.c.a);
        ha(a.i.a);
        b(a.a)
    };

    function Ea(a, b, c, d) {
        this.f = b;
        this.a = c;
        this.c = 0;
        this.l = this.i = !1;
        this.L = d;
        this.K = a.a
    }

    function Fa(a, b, c, d, e) {
        if (0 === b.length && e) ta(a.a);
        else
            for (a.c += b.length, e && (a.i = e), e = 0; e < b.length; e++) {
                var f = b[e],
                    g = c[f.getName()],
                    k = a.a,
                    n = f;
                D(k.c, k.a.a("mti", n.getName(), U(n).toString(), "loading"));
                T(k, "fontloading", n);
                f = new xa(x(a.F, a), x(a.J, a), a.f, f, a.K, a.L, d, g);
                f.c = new ua(f.f, f.F);
                va(f.c);
                f.i = new ua(f.f, f.F);
                va(f.i);
                f.ha = ea();
                g = f.c;
                k = new V(f.a.getName() + ",serif", U(f.a));
                C(g.f, g.a, wa(k));
                g = f.i;
                k = new V(f.a.getName() + ",sans-serif", U(f.a));
                C(g.f, g.a, wa(k));
                za(f)
            }
    }
    Ea.prototype.F = function(a) {
        var b = this.a;
        G(b.c, b.a.a("mti", a.getName(), U(a).toString(), "loading"));
        G(b.c, b.a.a("mti", a.getName(), U(a).toString(), "inactive"));
        D(b.c, b.a.a("mti", a.getName(), U(a).toString(), "active"));
        T(b, "fontactive", a);
        this.l = !0;
        Ga(this)
    };
    Ea.prototype.J = function(a) {
        var b = this.a;
        G(b.c, b.a.a("mti", a.getName(), U(a).toString(), "loading"));
        ia(b.c, b.a.a("mti", a.getName(), U(a).toString(), "active")) || D(b.c, b.a.a("mti", a.getName(), U(a).toString(), "inactive"));
        T(b, "fontinactive", a);
        Ga(this)
    };

    function Ga(a) {
        0 == --a.c && a.i && (a.l ? (a = a.a, G(a.c, a.a.a("mti", "loading")), G(a.c, a.a.a("mti", "inactive")), D(a.c, a.a.a("mti", "active")), T(a, "active")) : ta(a.a))
    };
    mti.oa = function() {
        this.Y = '"'
    };
    mti.j = function() {
        this.M = mti.j.c;
        this.o = mti.j.i
    };
    mti.j.c = ["font-style", "font-weight"];
    mti.j.i = {
        "font-style": [
            ["n", "normal"]
        ],
        "font-weight": [
            ["4", "normal"]
        ]
    };
    mti.j.a = function(a, b, c) {
        this.U = a;
        this.ka = b;
        this.o = c
    };
    mti.j.a.prototype.compact = function(a, b) {
        for (var c = 0; c < this.o.length; c++)
            if (b == this.o[c][1]) {
                a[this.U] = this.o[c][0];
                break
            }
    };
    mti.j.a.prototype.expand = function(a, b) {
        for (var c = 0; c < this.o.length; c++)
            if (b == this.o[c][0]) {
                a[this.U] = this.ka + ":" + this.o[c][1];
                break
            }
    };
    mti.j.prototype.compact = function(a) {
        var b = ["n", "4"];
        a = a.split(";");
        for (var c = 0, d = a.length; c < d; c++) {
            var e = a[c].replace(/\s+/g, "").split(":");
            if (2 == e.length) {
                var f = e[1];
                a: {
                    for (var e = e[0], g = 0; g < this.M.length; g++)
                        if (e == this.M[g]) {
                            e = new mti.j.a(g, e, this.o[e]);
                            break a
                        }
                    e = null
                }
                e && e.compact(b, f)
            }
        }
        return b.join("")
    };
    mti.j.prototype.expand = function(a) {
        if (2 != a.length) return null;
        for (var b = [null, null], c = 0, d = this.M.length; c < d; c++) {
            var e = this.M[c];
            (new mti.j.a(c, e, this.o[e])).expand(b, a.substr(c, 1))
        }
        return b[0] && b[1] ? b.join(";") + ";" : null
    };

    function Ha(a, b, c) {
        this.i = a;
        this.S = b;
        this.b = c;
        this.a = this.c = 0
    }
    Ha.prototype.load = function(a) {
        var b = a.context || this.i;
        this.f = new fa(this.i, b);
        b = new ra(this.f, b.document.documentElement, a);
        if (this.b.a.c) {
            var c = this.S,
                d = this.f,
                e = [],
                f;
            for (f in a)
                if (a.hasOwnProperty(f)) {
                    var g = c.a[f];
                    g && e.push(g(a[f], d))
                }
            a = a.timeout;
            this.a = this.c = e.length;
            a = new Ea(this.b, this.f, b, a);
            f = 0;
            for (c = e.length; f < c; f++) d = e[f], d.ma(this.b, x(this.l, this, d, b, a))
        } else ta(b)
    };
    Ha.prototype.l = function(a, b, c, d) {
        var e = this;
        d ? a.load(function(a, d, k) {
            Ia(e, b, c, a, d, k)
        }) : (a = 0 == --this.c, this.a--, a && (0 == this.a ? ta(b) : sa(b)), Fa(c, [], {}, null, a))
    };

    function Ia(a, b, c, d, e, f) {
        var g = 0 == --a.c;
        g && sa(b);
        setTimeout(function() {
            Fa(c, d, e || {}, f || null, g)
        }, 0)
    };
    var Ja = window,
        Ka = ma(),
        La = Ja.MonoTypeWebFonts = new Ha(window, new function() {
            this.a = {}
        }, Ka);
    window.MonoTypeWebFonts.load = La.load;
    mti.qa = 4E4;
    mti.s = function(a, b, c, d, e) {
        this.v = a;
        this.b = b;
        this.f = c;
        this.h = d;
        this.aa = {};
        this.W = e;
        this.u = [];
        this.$ = !1;
        this.O = {};
        this.H = d.efg;
        this.v.mti_element_cache = [];
        this.version = this.D = void 0;
        this.R = {
            TTF: "truetype",
            WOFF: "woff",
            SVG: "svg",
            MTX: "truetype",
            OTF: "opentype",
            WOFF2: "woff2"
        };
        1 == Y.UseTextIndent ? this.G = "text-align:left;text-indent:-9999px;font-size:0px" : this.G = "visibility:hidden;";
        this.D = this.b.getName().toLowerCase();
        this.version = this.b.na;
        this.N = {
            EOT: 2,
            SVG: 11,
            OTF: 13,
            TTF: 1,
            WOFF: 3,
            WOFF2: 14
        }
    };
    mti.s.a = "monotype";
    mti.s.c = !1;
    mti.s.prototype = {
        ma: function(a, b) {
            var c = this,
                d = c.h.projectId,
                e;
            if (d) {
                c.v.mti_element_cache = [];
                Ma(c);
                this.Z(function() {
                    var a = new Na(document.body, c.f, c.h.pfL, !0);
                    a.ba(document.body);
                    var d = e = a.ca(),
                        f = "TTF",
                        g = c.h.projectId,
                        k = c.h.fcURL,
                        m = Z(c, "dfcURL"),
                        p = c.f.createElement("style", {
                            type: "text/css",
                            id: "mti_fontface_" + c.h.projectId
                        }),
                        q = "";
                    c.O = {};
                    var l = null,
                        h = null;
                    d || (d = []);
                    for (var n = 0; n < c.h.pfL.length; n++) {
                        var f = c.h.pfL[n],
                            t = f.fontfamily,
                            w = f.contentIds,
                            F = f.enableOtf,
                            v = f.enableSubsetting,
                            Aa = f.subsetOption,
                            y = null;
                        c.H && (l = f.fontWeight, h = f.fontStyle, y = h.charAt(0) + l / 100, c.$ = !0);
                        var z = Z(c, "ffArray"),
                            A = c.D,
                            f = c.version.g + c.version.m / 10;
                        "firefox" == c.D && (A = "mozilla");
                        /ipad|ipod|iphone/.test(c.b.X.toLowerCase()) && (A = "msafari");
                        var z = z[A],
                            A = "",
                            B = void 0;
                        for (B in z) parseFloat(f) >= parseFloat(B) && w[z[B].toUpperCase()] && (A = z[B]);
                        "" === A && (A = "ttf");
                        f = A;
                        z = !0;
                        if (0 < d.length || c.fa || !v)
                            for (z = c.fa || !v ? !0 : !1; 0 < d.length;) {
                                d[0].fontfamily == t && (null != l ? d[0].C == l / 100 : 1) && (null != h ? d[0].A == h.charAt(0) : 1) && (v = null == y ? new V(t) : new V(t,
                                    y), c.u.push(v));
                                z = !0;
                                break
                            }
                        if (z) {
                            var v = "",
                                y = c,
                                z = w,
                                A = g,
                                B = k,
                                v = m,
                                Ba = c.h.ck,
                                X = f,
                                Sa = F,
                                F = Aa,
                                ca = z[X.toUpperCase()],
                                S = void 0,
                                B = B.replace("http://", "").replace("https://", "");
                            y.V(F) ? (v = v.replace("http://", "").replace("https://", ""), ca = z.TTF, v = "https://" + v + "?" + Ba + "&fctypeId=" + ("15" == Z(y, "fctypeArray")[Oa(y)] ? "3" : Z(y, "fctypeArray")[Oa(y)]) + "&fcId=" + ca + "&env=" + y.h.env + "&projectId=" + A, void 0 != F && (y = F.unicode, z = F.text, A = F.lang, F = F.ot, void 0 != y && (v += "&ranges=" + y), void 0 != z && (v += "&content=" + z.replace('"', "%22").replace("'",
                                "%27").replace("#", "%23").replace("?", "%3F").replace("&", "%26")), void 0 != A && (v += "&languages=" + A), void 0 != F && (v += "&ot=" + F)), S = v) : (B = "https://" + B + (Sa ? "ot/" : ""), "" !== y.N[X.toUpperCase()] ? B += y.N[X.toUpperCase()] + "/" : B += y.N.WOFF + "/", S = B + ca + "." + X.toLowerCase() + "?" + Ba, S += "&projectId=" + A, null != X && "SVG" == X.toUpperCase() && (S += "#" + ca));
                            if (v = S) void 0 != Aa && (f = Oa(c)), q = Pa(c, t, "", q, l, h, t, v, f, w, !0, "", !1, !0, void 0, "", !1)
                        }
                    }
                    "" != q && ga(c.f, "head", p);
                    p.styleSheet ? p.styleSheet.cssText = q : p.appendChild(document.createTextNode(q));
                    c.v.mti_element_cache = a.I;
                    a = c.v.mti_element_cache;
                    for (d = 0; d < a.length; d++)
                        for (var oa in c.O)
                            if (-1 < c.f.P(a[d]).indexOf(oa)) {
                                void 0 == a[d].getAttribute("id");
                                g = a[d];
                                k = oa;
                                p = c.O[oa];
                                m = [];
                                q = c.f.P(g).split(",");
                                l = void 0;
                                a: if (l = !1, q instanceof Array)
                                    for (h = 0; h < q.length; h++)
                                        if (p instanceof Array)
                                            for (n = 0; n < p.length; n++) {
                                                if (H(q[h]) == H(p[n])) {
                                                    l = !0;
                                                    break a
                                                }
                                            } else {
                                                if (H(q[h]) == H(p)) {
                                                    l = !0;
                                                    break
                                                }
                                            } else if (p instanceof Array)
                                                for (h = 0; h < p.length; h++)
                                                    if (q == p[h]) {
                                                        l = !0;
                                                        break
                                                    }
                                if (!l) {
                                    if (p instanceof Array)
                                        for (l = 0; l < q.length; l++)
                                            if (H(q[l]) !=
                                                k)
                                                if (-1 < H(q[l]).indexOf(k))
                                                    for (h = 0; h < p.length; h++) "" != p[h] && (m.push(p[h]), m.push(k));
                                                else m.push(q[l]);
                                    else if (p instanceof Array)
                                        for (h = 0; h < p.length; h++) "" != p[h] && (m.push(p[h]), m.push(k));
                                    else m.push(p), m.push(k);
                                    else
                                        for (l = 0; l < q.length; l++) H(q[l]) != k ? -1 < H(q[l]).indexOf(k) ? (m.push(p), m.push(k)) : m.push(q[l]) : (m.push(p), m.push(k));
                                    p = {};
                                    q = [];
                                    l = 0;
                                    for (h = m.length; l < h; ++l) p.hasOwnProperty(H(m[l])) || (q.push(H(m[l])), p[H(m[l])] = 1);
                                    m = q;
                                    if (1 < m.length && m[0] != k) {
                                        p = "";
                                        for (l = 0; l < m.length; l++) p += "'" + m[l] + "'", l !=
                                            m.length - 1 && (p += ",");
                                        p += "";
                                        g.setAttribute("data-mtiFont", k);
                                        k = "" + p;
                                        g.style.setProperty ? g.style.setProperty("font-family", "") : g.style.setAttribute("font-family", "");
                                        g.setAttribute("style", g.style.cssText + "font-family:" + k + " !important;")
                                    }
                                }
                            }
                    b(Y.EnableCustomFOUTHandler)
                });
                1 == Y.EnableCustomFOUTHandler && (document.documentElement.style.visibility = "hidden", setTimeout(function() {
                    document.documentElement.style.visibility = ""
                }, 700));
                var f = [];
                e && (f = e);
                var g = null;
                "function" === typeof c.v["__MonotypeConfiguration__" +
                    d] && (g = c.v["__MonotypeConfiguration__" + d]());
                if (void 0 !== g || null !== g) loadAllFonts = g.loadAllFonts;
                if (loadAllFonts)
                    for (f = [], g = 0; g < c.h.pfL.length; g++) {
                        var k = "n4",
                            n = 400,
                            t = "normal";
                        void 0 != c.h.pfL[g].fontWeight && void 0 != c.h.pfL[g].fontStyle && (t = c.h.pfL[g].fontStyle, n = c.h.pfL[g].fontWeight, k = t.charAt(0) + n / 100);
                        var w = c.h.pfL[g].fontfamily,
                            k = new V(w, k);
                        k.fontfamily = w;
                        k.fontWeight = n;
                        k.fontStyle = t;
                        f.push(k)
                    }
                c.v["__mti_fntLst" + d] = function() {
                    for (var a = [], c = [], b = 0; b < f.length; b++) a.push({
                        fontfamily: f[b].B,
                        fontStyle: f[b].A,
                        fontWeight: f[b].C
                    }), c.push(f[b]);
                    return a
                }
            } else b(Y.EnableCustomFOUTHandler)
        }
    };
    MonoTypeWebFonts.S.a[mti.s.a] = function(a) {
        var b = ma(),
            c = new fa(window),
            d = null;
        a.enableOtf && (d = new mti.sa(c, b, a));
        b = new mti.s(window, b, c, a, d);
        if (a.reqSub || Y.EnableDSForAllFonts || a.enableOtf) {
            var e = new mti.ta(b);
            window.MonoTypeWebFonts.renderPartial = function(a, c) {
                e.Ba(a, c)
            }
        }
        return b
    };
    var Qa = {
        ec: "true",
        dfcURL: "http://api2.fonts.com/FontSubsetter.ashx",
        fontdataversion: "v2",
        sO: "true",
        ffArray: {
            safari: {
                "3.1": "ttf",
                "5.1": "woff"
            },
            msafari: {
                1: "svg",
                "4.2": "ttf",
                "5.1": "woff"
            },
            chrome: {
                3: "svg",
                4: "ttf",
                5: "woff",
                36: "woff2"
            },
            opera: {
                10: "ttf",
                "11.10": "woff",
                "26.0": "woff2"
            },
            msie: {
                4: "eot",
                9: "woff"
            },
            mozilla: {
                "3.5": "ttf",
                "3.6": "woff",
                "39.0": "woff2"
            },
            edge: {
                12: "woff"
            }
        },
        bsmcArray: {
            safari: {
                "3.1": "2000",
                "5.0": "15600"
            },
            msafari: {
                1: "15600"
            },
            chrome: {
                3: "15600"
            },
            opera: {
                10: "15600"
            },
            msie: {
                4: "1000",
                9: "3000"
            },
            mozilla: {
                "3.5": "15600"
            },
            edge: {
                12: "15600"
            }
        },
        fctypeArray: {
            ttf: "1",
            eot: "2",
            woff: "3",
            svg: "11",
            otf: "13",
            woff2: "14"
        },
        specialChar: "%u201C %u201D %u2200 %u2202 %u2203 %u2205 %u2207 %u2208 %u2209 %u220B %u220F %u2211 %u2018 %u2019 %B0 %u2026 %u2122 %A9 %AE %u2014 %u2013 %A7 %B1 %B7 %u2032 %u2033 %u20AC %u2248 %u2260 %u2264 %u2265 %u221A %u221D %u2220 %u2225 %u2227 %u2228 %u2229 %u222A %u222B %u222E %u2234 %u2235 %u2236 %u2237 %u223D %u224C %u2261 %u226E %u226F %u2299 %u22A5 %u0391 %u0392 %u0393 %u0394 %u0395 %u0396 %u0397 %u0398 %u0399 %u039A %u039B %u039C %u039D %u039E %u039F %u03A0 %u03A1 %u03A3 %u03A4 %u03A5 %u03A6 %u03A7 %u03A8 %u03A9 %u221E %u2190 %u2191 %u2192 %u2193 %u2640 %u2642 + %22 %5C %23 %26 %3F %B7 %3B %3A".split(" ")
    };

    function Z(a, b) {
        return void 0 != Qa[b] ? Qa[b] : a.h[b]
    };
    mti.s.prototype.load = function(a) {
        a(this.u, this.aa)
    };

    function Ma(a) {
        var b = new qa("-"),
            c = a.f.createElement("style", {
                type: "text/css",
                id: "mti_stylesheet_" + a.h.projectId
            }),
            d = "";
        if (1 == Y.EnableCustomFOUTHandler || 1 == Y.UseHybrid) {
            for (var e = a.h.pfL, d = d + (".mti-loading .mti_font_element{" + a.G + "}\n"), f = 0; f < e.length; f++) {
                var g = e[f].fontfamily,
                    k = "4",
                    n = "n";
                a.H && (k = e[f].fontWeight / 100, n = e[f].fontStyle.charAt(0));
                g && (d += "." + b.a("mti", g, n + k, "loading") + " .mti_font_element{" + a.G + "}\n")
            }
            d += ".mti_hide_element{" + a.G + "}"
        }
        for (f in a.h.selectorFontMap)
            if (b = a.h.selectorFontMap[f],
                g = b.familyName, a.H ? (n = b.fontStyle, k = b.fontWeight) : (n = "normal", k = "400"), d = Pa(a, g, f, d, k, n, "", "", "", "", !1, b, !0), 1 == Y.EnableCustomFOUTHandler)
                for (k in d += "/*fout specific code:*/\n", g = f.split(","), k = void 0, g) d += ".mti-loading " + g[k] + "{" + a.G + "}\n";
            "" != d && ga(a.f, "head", c);
        c.styleSheet ? c.styleSheet.cssText = d : c.appendChild(document.createTextNode(d))
    }

    function Pa(a, b, c, d, e, f, g, k, n, t, w, I, E, u, J, O, m) {
        1 < a.f.indexOf(g, J) ? J = "" : "";
        u ? d += '@font-face{\nfont-family:"' + g + (J ? J : "") + (O ? O : "") + '";' : "";
        u ? "" : d += c + "{font-family:'" + b + "';";
        a.H && !m && (d = d + ("\n font-style:" + f + ";") + ("\n font-weight:" + e + ";"));
        k ? d += '\nsrc:url("' + k + '")' : "";
        w ? (b = d, null != n && "EOT" == n.toUpperCase() || "MTX" == n.toUpperCase() || (c = a.R[n.toUpperCase()], t[n.toUpperCase()] || (c = a.R.TTF), b += " format('" + c + "')"), d = b) : "";
        E ? (n = d, null != a.W && (t = I.otf, I = I.vrnt, t && null != t && "" != t && (n += a.W.ya(t, I))), d = n) : "";
        return d +=
            ";}\n"
    }
    mti.s.prototype.Z = function(a) {
        function b() {
            document.body ? a() : setTimeout(b, 0)
        }
        b()
    };

    function Oa(a) {
        var b = Z(a, "ffArray"),
            c = a.D,
            d = a.version.g + a.version.m / 10;
        "firefox" == a.D && (c = "mozilla");
        /ipad|ipod|iphone/.test(a.b.X.toLowerCase()) && (c = "msafari");
        a = b[c];
        var b = "",
            e;
        for (e in a) parseFloat(d) >= parseFloat(e) && (b = a[e]);
        "" === b && (b = "ttf");
        return b
    }
    mti.s.prototype.V = function(a) {
        var b = !1;
        void 0 != typeof a && null != a && "" != a && (void 0 != typeof a.lang && null != a.lang && "" != a.lang ? b = !0 : void 0 != typeof a.unicode && null != a.unicode && "" != a.unicode ? b = !0 : void 0 != typeof a.text && null != a.text && "" != a.text && (b = !0));
        return b
    };
    var Y = window.MTIConfig || {
        Aa: !1,
        pa: !1,
        ua: !1
    };

    function Na(a, b, c, d) {
        this.la = a;
        this.f = b;
        this.ja = c;
        this.w = {};
        this.I = [];
        this.u = [];
        d ? this.ea = d : !1;
        this.da = "img script noscript iframe object style param embed link meta head title br hr svg path".split(" ")
    }
    Na.prototype = function() {
        function a(a) {
            var b = !1;
            void 0 != typeof a && null != a && "" != a && (void 0 != typeof a.lang && null != a.lang && "" != a.lang ? b = !0 : void 0 != typeof a.unicode && null != a.unicode && "" != a.unicode ? b = !0 : void 0 != typeof a.text && null != a.text && "" != a.text ? b = !0 : void 0 != typeof a.ot && null != a.ot && "" != a.ot && (b = !0));
            return b
        }

        function b(a, d, e) {
            if (void 0 !== a && null !== a && "" !== a && a.tagName && 1 === a.nodeType)
                for (0 > e.f.indexOf(e.da, a.tagName.toLowerCase()) && (d ? e.T(a, d) : e.T(a)), a = a.firstChild; a;) b(a, d, e), a = a.nextSibling
        }
        return {
            T: function(b,
                d) {
                var e = this.ja,
                    f = this.f.getComputedStyle(b),
                    g = f.fontFamily,
                    k = "",
                    n = f.fontStyle,
                    t = 0,
                    w = 0,
                    I = "",
                    g = (g || "").replace(/^\s|\s$/g, "").replace(/'|"/g, "").replace(/,\s*/g, "|");
                if ("" != g)
                    for (var g = g.split("|"), E = "", t = 0; t < g.length; t++)
                        for (w = 0; w < e.length; w++) {
                            var u = e[w],
                                E = u.fontfamily,
                                J, O, m = u.enableSubsetting,
                                p = u.enableOtf,
                                q = u.contentIds,
                                l = u.subsetOption,
                                h = !1,
                                Ra = new RegExp("^(" + g[t] + ")$", "ig");
                            if (void 0 != u.fontWeight && void 0 != u.fontStyle) J = u.fontWeight, O = u.fontStyle, I = O.charAt(0) + J / 100, k = "normal" == f.fontWeight ?
                                400 : "bold" == f.fontWeight ? 700 : f.fontWeight;
                            else {
                                var R = "h1 h2 h3 h4 h5 h6 strong b".split(" ");
                                1 == b.nodeType && (k = 0 <= this.f.indexOf(R, b.tagName.toLowerCase()) ? 400 : "normal" == f.fontWeight ? 400 : "bold" == f.fontWeight ? 700 : 400)
                            }
                            R = E.replace(/^\s|\s$/g, "");
                            if (Ra.test(R) && (void 0 != J || void 0 != O ? k == J && n == O && (h = new V(R, I), h.fontfamily = R, h.fontWeight = J, h.fontStyle = O, h.enableSubsetting = m, h.contentIds = q, h.enableOtf = p, h.subsetOption = l, this.u.push(h), this.I.push(b), h = !0) : (I = "n4", h = new V(R), h.fontfamily = R, h.fontWeight =
                                    k / 100, h.fontStyle = n.charAt(0), h.enableSubsetting = m, h.contentIds = q, h.enableOtf = p, h.subsetOption = l, this.u.push(h), this.I.push(b), h = !0), h && (1 == Y.EnableCustomFOUTHandler && D(b, d ? "mti_font_element" + d : "mti_font_element"), m = b.getAttribute("style"), (m = null != m ? "string" == typeof m ? m : "cssText" in m ? m.cssText : "" : "") && -1 < this.f.indexOf(m, "font-weight") && -1 < this.f.indexOf(m, "font-style") ? E += "_" + n.charAt(0) + k / 100 : E += 1 < I.length ? "_" + I : "", (u.enableSubsetting || Y.EnableDSForAllFonts) && !a(l)))) {
                                u = "";
                                u = this.f;
                                l = b;
                                m = "";
                                if (void 0 !=
                                    typeof l && null != l) {
                                    void 0 != l && null != l && "INPUT" == l.tagName && (m += l.value);
                                    l = l.childNodes || l;
                                    p = "img script noscript iframe object style param embed link meta head title br hr svg path".split(" ");
                                    for (q = 0; q < l.length; q++) 8 != l[q].nodeType && 0 > u.indexOf(p, l[q].tagName ? l[q].tagName.toLowerCase() : "") && (h = (h = l[q].parentNode) ? "undefined" != typeof h.currentStyle ? h.currentStyle.textTransform : (h = u.a.defaultView.getComputedStyle(h, null)) ? h.getPropertyValue("text-transform") : "" : void 0, "none" != h ? (h = 1 != l[q].nodeType ?
                                        l[q].nodeValue.replace(/(?:\r\n|\r|\n)/g, " ") : "", m += h.toLowerCase() + h.toUpperCase()) : m += 1 != l[q].nodeType ? l[q].nodeValue.replace(/(?:\r\n|\r|\n)/g, " ") : "");
                                    u = m
                                } else u = void 0;
                                this.w[E.replace(/^\s|\s$/g, "")] && (u += this.w[E.replace(/^\s|\s$/g, "")]);
                                this.w[E.replace(/^\s|\s$/g, "")] = u
                            }
                        }
            },
            ba: function(a, d) {
                b(this.la, d, this);
                var e = !1,
                    f;
                for (f in this.w)
                    if (e = !0, this.ea) break;
                    else {
                        var g;
                        if ((g = this.w[f]) && "string" == typeof g) {
                            for (var k = "", n = g.length, t = null, w = 0; w < n; w++) t = g.charAt(w), -1 == k.indexOf(t) && (k += t);
                            g = k
                        } else g =
                            "";
                        this.w[f] = g
                    }
                return e ? this.w : null
            },
            ca: function() {
                var a = this.u,
                    b = null == a ? 0 : a.length,
                    e = {},
                    f, g = [];
                for (f = 0; f < b; f += 1) e[a[f].B + "||" + a[f].C + "||" + a[f].A] = a[f];
                for (f in e) g.push(e[f]);
                return this.u = g
            },
            za: function() {
                return this.I
            },
            V: a
        }
    }();
})(this, document);