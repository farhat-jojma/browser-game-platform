! function(t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (t.document) return e(t);
        throw new Error("jQuery requires a window with a document")
    } : e(t)
}("undefined" != typeof window ? window : this, function(x, I) {
    "use strict";
    var t = [],
        k = x.document,
        M = Object.getPrototypeOf,
        a = t.slice,
        q = t.concat,
        H = t.push,
        i = t.indexOf,
        n = {},
        V = n.toString,
        F = n.hasOwnProperty,
        _ = F.toString,
        z = _.call(Object),
        m = {};

    function U(t, e) {
        var n = (e = e || k).createElement("script");
        n.text = t, e.head.appendChild(n).parentNode.removeChild(n)
    }

    function G(t, e) {
        return e.toUpperCase()
    }
    var e = "3.1.1",
        T = function(t, e) {
            return new T.fn.init(t, e)
        },
        $ = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        K = /^-ms-/,
        W = /-([a-z])/g;

    function Y(t) {
        var e = !!t && "length" in t && t.length,
            n = T.type(t);
        return "function" !== n && !T.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
    }
    T.fn = T.prototype = {
        jquery: e,
        constructor: T,
        length: 0,
        toArray: function() {
            return a.call(this)
        },
        get: function(t) {
            return null == t ? a.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        pushStack: function(t) {
            t = T.merge(this.constructor(), t);
            return t.prevObject = this, t
        },
        each: function(t) {
            return T.each(this, t)
        },
        map: function(n) {
            return this.pushStack(T.map(this, function(t, e) {
                return n.call(t, e, t)
            }))
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                t = +t + (t < 0 ? e : 0);
            return this.pushStack(0 <= t && t < e ? [this[t]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: H,
        sort: t.sort,
        splice: t.splice
    }, T.extend = T.fn.extend = function() {
        var t, e, n, r, i, o = arguments[0] || {},
            s = 1,
            a = arguments.length,
            l = !1;
        for ("boolean" == typeof o && (l = o, o = arguments[s] || {}, s++), "object" == typeof o || T.isFunction(o) || (o = {}), s === a && (o = this, s--); s < a; s++)
            if (null != (t = arguments[s]))
                for (e in t) i = o[e], n = t[e], o !== n && (l && n && (T.isPlainObject(n) || (r = T.isArray(n))) ? (i = r ? (r = !1, i && T.isArray(i) ? i : []) : i && T.isPlainObject(i) ? i : {}, o[e] = T.extend(l, i, n)) : void 0 !== n && (o[e] = n));
        return o
    }, T.extend({
        expando: "jQuery" + (e + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === T.type(t)
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            var e = T.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        },
        isPlainObject: function(t) {
            return !(!t || "[object Object]" !== V.call(t) || (t = M(t)) && ("function" != typeof(t = F.call(t, "constructor") && t.constructor) || _.call(t) !== z))
        },
        isEmptyObject: function(t) {
            for (var e in t) return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? n[V.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            U(t)
        },
        camelCase: function(t) {
            return t.replace(K, "ms-").replace(W, G)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e) {
            var n, r = 0;
            if (Y(t))
                for (n = t.length; r < n && !1 !== e.call(t[r], r, t[r]); r++);
            else
                for (r in t)
                    if (!1 === e.call(t[r], r, t[r])) break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace($, "")
        },
        makeArray: function(t, e) {
            e = e || [];
            return null != t && (Y(Object(t)) ? T.merge(e, "string" == typeof t ? [t] : t) : H.call(e, t)), e
        },
        inArray: function(t, e, n) {
            return null == e ? -1 : i.call(e, t, n)
        },
        merge: function(t, e) {
            for (var n = +e.length, r = 0, i = t.length; r < n; r++) t[i++] = e[r];
            return t.length = i, t
        },
        grep: function(t, e, n) {
            for (var r = [], i = 0, o = t.length, s = !n; i < o; i++) !e(t[i], i) != s && r.push(t[i]);
            return r
        },
        map: function(t, e, n) {
            var r, i, o = 0,
                s = [];
            if (Y(t))
                for (r = t.length; o < r; o++) null != (i = e(t[o], o, n)) && s.push(i);
            else
                for (o in t) i = e(t[o], o, n), null != i && s.push(i);
            return q.apply([], s)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, r;
            if ("string" == typeof e && (r = t[e], e = t, t = r), T.isFunction(t)) return n = a.call(arguments, 2), (r = function() {
                return t.apply(e || this, n.concat(a.call(arguments)))
            }).guid = t.guid = t.guid || T.guid++, r
        },
        now: Date.now,
        support: m
    }), "function" == typeof Symbol && (T.fn[Symbol.iterator] = t[Symbol.iterator]), T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        n["[object " + e + "]"] = e.toLowerCase()
    });

    function r(t, e, n) {
        for (var r = [], i = void 0 !== n;
            (t = t[e]) && 9 !== t.nodeType;)
            if (1 === t.nodeType) {
                if (i && T(t).is(n)) break;
                r.push(t)
            }
        return r
    }

    function Z(t, e) {
        for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
        return n
    }
    var e = function(I) {
            function f(t, e, n) {
                var r = "0x" + e - 65536;
                return r != r || n ? e : r < 0 ? String.fromCharCode(65536 + r) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            }

            function M(t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            }

            function q() {
                k()
            }
            var t, p, v, o, H, d, V, F, x, l, u, k, T, n, S, m, r, i, g, E = "sizzle" + +new Date,
                w = I.document,
                A = 0,
                _ = 0,
                z = ft(),
                U = ft(),
                y = ft(),
                G = function(t, e) {
                    return t === e && (u = !0), 0
                },
                $ = {}.hasOwnProperty,
                e = [],
                K = e.pop,
                W = e.push,
                D = e.push,
                Y = e.slice,
                b = function(t, e) {
                    for (var n = 0, r = t.length; n < r; n++)
                        if (t[n] === e) return n;
                    return -1
                },
                Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                s = "[\\x20\\t\\r\\n\\f]",
                a = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                X = "\\[" + s + "*(" + a + ")(?:" + s + "*([*^$|!~]?=)" + s + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + a + "))|)" + s + "*\\]",
                J = ":(" + a + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + X + ")*)|.*)\\)|)",
                Q = new RegExp(s + "+", "g"),
                C = new RegExp("^" + s + "+|((?:^|[^\\\\])(?:\\\\.)*)" + s + "+$", "g"),
                tt = new RegExp("^" + s + "*," + s + "*"),
                et = new RegExp("^" + s + "*([>+~]|" + s + ")" + s + "*"),
                nt = new RegExp("=" + s + "*([^\\]'\"]*?)" + s + "*\\]", "g"),
                rt = new RegExp(J),
                it = new RegExp("^" + a + "$"),
                h = {
                    ID: new RegExp("^#(" + a + ")"),
                    CLASS: new RegExp("^\\.(" + a + ")"),
                    TAG: new RegExp("^(" + a + "|[*])"),
                    ATTR: new RegExp("^" + X),
                    PSEUDO: new RegExp("^" + J),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + s + "*(even|odd|(([+-]|)(\\d*)n|)" + s + "*(?:([+-]|)" + s + "*(\\d+)|))" + s + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + Z + ")$", "i"),
                    needsContext: new RegExp("^" + s + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + s + "*((?:-\\d)?\\d*)" + s + "*\\)|)(?=[^-]|$)", "i")
                },
                ot = /^(?:input|select|textarea|button)$/i,
                st = /^h\d$/i,
                c = /^[^{]+\{\s*\[native \w/,
                at = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                lt = /[+~]/,
                N = new RegExp("\\\\([\\da-f]{1,6}" + s + "?|(" + s + ")|.)", "ig"),
                ut = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                ct = R(function(t) {
                    return !0 === t.disabled && ("form" in t || "label" in t)
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                D.apply(e = Y.call(w.childNodes), w.childNodes), e[w.childNodes.length].nodeType
            } catch (t) {
                D = {
                    apply: e.length ? function(t, e) {
                        W.apply(t, Y.call(e))
                    } : function(t, e) {
                        for (var n = t.length, r = 0; t[n++] = e[r++];);
                        t.length = n - 1
                    }
                }
            }

            function B(t, e, n, r) {
                var i, o, s, a, l, u, c, f = e && e.ownerDocument,
                    h = e ? e.nodeType : 9;
                if (n = n || [], "string" != typeof t || !t || 1 !== h && 9 !== h && 11 !== h) return n;
                if (!r && ((e ? e.ownerDocument || e : w) !== T && k(e), e = e || T, S)) {
                    if (11 !== h && (l = at.exec(t)))
                        if (i = l[1]) {
                            if (9 === h) {
                                if (!(s = e.getElementById(i))) return n;
                                if (s.id === i) return n.push(s), n
                            } else if (f && (s = f.getElementById(i)) && g(e, s) && s.id === i) return n.push(s), n
                        } else {
                            if (l[2]) return D.apply(n, e.getElementsByTagName(t)), n;
                            if ((i = l[3]) && p.getElementsByClassName && e.getElementsByClassName) return D.apply(n, e.getElementsByClassName(i)), n
                        }
                    if (p.qsa && !y[t + " "] && (!m || !m.test(t))) {
                        if (1 !== h) f = e, c = t;
                        else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((a = e.getAttribute("id")) ? a = a.replace(ut, M) : e.setAttribute("id", a = E), o = (u = d(t)).length; o--;) u[o] = "#" + a + " " + L(u[o]);
                            c = u.join(","), f = lt.test(t) && mt(e.parentNode) || e
                        }
                        if (c) try {
                            return D.apply(n, f.querySelectorAll(c)), n
                        } catch (t) {} finally {
                            a === E && e.removeAttribute("id")
                        }
                    }
                }
                return F(t.replace(C, "$1"), e, n, r)
            }

            function ft() {
                var n = [];

                function r(t, e) {
                    return n.push(t + " ") > v.cacheLength && delete r[n.shift()], r[t + " "] = e
                }
                return r
            }

            function O(t) {
                return t[E] = !0, t
            }

            function P(t) {
                var e = T.createElement("fieldset");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e)
                }
            }

            function ht(t, e) {
                for (var n = t.split("|"), r = n.length; r--;) v.attrHandle[n[r]] = e
            }

            function pt(t, e) {
                var n = e && t,
                    r = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                if (r) return r;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === e) return -1;
                return t ? 1 : -1
            }

            function dt(e) {
                return function(t) {
                    return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ct(t) === e : t.disabled === e : "label" in t && t.disabled === e
                }
            }

            function j(s) {
                return O(function(o) {
                    return o = +o, O(function(t, e) {
                        for (var n, r = s([], t.length, o), i = r.length; i--;) t[n = r[i]] && (t[n] = !(e[n] = t[n]))
                    })
                })
            }

            function mt(t) {
                return t && void 0 !== t.getElementsByTagName && t
            }
            for (t in p = B.support = {}, H = B.isXML = function(t) {
                    t = t && (t.ownerDocument || t).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }, k = B.setDocument = function(t) {
                    var t = t ? t.ownerDocument || t : w;
                    return t !== T && 9 === t.nodeType && t.documentElement && (n = (T = t).documentElement, S = !H(T), w !== T && (t = T.defaultView) && t.top !== t && (t.addEventListener ? t.addEventListener("unload", q, !1) : t.attachEvent && t.attachEvent("onunload", q)), p.attributes = P(function(t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), p.getElementsByTagName = P(function(t) {
                        return t.appendChild(T.createComment("")), !t.getElementsByTagName("*").length
                    }), p.getElementsByClassName = c.test(T.getElementsByClassName), p.getById = P(function(t) {
                        return n.appendChild(t).id = E, !T.getElementsByName || !T.getElementsByName(E).length
                    }), p.getById ? (v.filter.ID = function(t) {
                        var e = t.replace(N, f);
                        return function(t) {
                            return t.getAttribute("id") === e
                        }
                    }, v.find.ID = function(t, e) {
                        if (void 0 !== e.getElementById && S) return (e = e.getElementById(t)) ? [e] : []
                    }) : (v.filter.ID = function(t) {
                        var e = t.replace(N, f);
                        return function(t) {
                            t = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                            return t && t.value === e
                        }
                    }, v.find.ID = function(t, e) {
                        if (void 0 !== e.getElementById && S) {
                            var n, r, i, o = e.getElementById(t);
                            if (o) {
                                if ((n = o.getAttributeNode("id")) && n.value === t) return [o];
                                for (i = e.getElementsByName(t), r = 0; o = i[r++];)
                                    if ((n = o.getAttributeNode("id")) && n.value === t) return [o]
                            }
                            return []
                        }
                    }), v.find.TAG = p.getElementsByTagName ? function(t, e) {
                        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : p.qsa ? e.querySelectorAll(t) : void 0
                    } : function(t, e) {
                        var n, r = [],
                            i = 0,
                            o = e.getElementsByTagName(t);
                        if ("*" !== t) return o;
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }, v.find.CLASS = p.getElementsByClassName && function(t, e) {
                        if (void 0 !== e.getElementsByClassName && S) return e.getElementsByClassName(t)
                    }, r = [], m = [], (p.qsa = c.test(T.querySelectorAll)) && (P(function(t) {
                        n.appendChild(t).innerHTML = "<a id='" + E + "'></a><select id='" + E + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + s + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || m.push("\\[" + s + "*(?:value|" + Z + ")"), t.querySelectorAll("[id~=" + E + "-]").length || m.push("~="), t.querySelectorAll(":checked").length || m.push(":checked"), t.querySelectorAll("a#" + E + "+*").length || m.push(".#.+[+~]")
                    }), P(function(t) {
                        t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var e = T.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && m.push("name" + s + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), n.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), m.push(",.*:")
                    })), (p.matchesSelector = c.test(i = n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.oMatchesSelector || n.msMatchesSelector)) && P(function(t) {
                        p.disconnectedMatch = i.call(t, "*"), i.call(t, "[s!='']:x"), r.push("!=", J)
                    }), m = m.length && new RegExp(m.join("|")), r = r.length && new RegExp(r.join("|")), t = c.test(n.compareDocumentPosition), g = t || c.test(n.contains) ? function(t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t,
                            e = e && e.parentNode;
                        return t === e || !(!e || 1 !== e.nodeType || !(n.contains ? n.contains(e) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(e)))
                    } : function(t, e) {
                        if (e)
                            for (; e = e.parentNode;)
                                if (e === t) return !0;
                        return !1
                    }, G = t ? function(t, e) {
                        var n;
                        return t === e ? (u = !0, 0) : (n = !t.compareDocumentPosition - !e.compareDocumentPosition) || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !p.sortDetached && e.compareDocumentPosition(t) === n ? t === T || t.ownerDocument === w && g(w, t) ? -1 : e === T || e.ownerDocument === w && g(w, e) ? 1 : l ? b(l, t) - b(l, e) : 0 : 4 & n ? -1 : 1)
                    } : function(t, e) {
                        if (t === e) return u = !0, 0;
                        var n, r = 0,
                            i = t.parentNode,
                            o = e.parentNode,
                            s = [t],
                            a = [e];
                        if (!i || !o) return t === T ? -1 : e === T ? 1 : i ? -1 : o ? 1 : l ? b(l, t) - b(l, e) : 0;
                        if (i === o) return pt(t, e);
                        for (n = t; n = n.parentNode;) s.unshift(n);
                        for (n = e; n = n.parentNode;) a.unshift(n);
                        for (; s[r] === a[r];) r++;
                        return r ? pt(s[r], a[r]) : s[r] === w ? -1 : a[r] === w ? 1 : 0
                    }), T
                }, B.matches = function(t, e) {
                    return B(t, null, null, e)
                }, B.matchesSelector = function(t, e) {
                    if ((t.ownerDocument || t) !== T && k(t), e = e.replace(nt, "='$1']"), p.matchesSelector && S && !y[e + " "] && (!r || !r.test(e)) && (!m || !m.test(e))) try {
                        var n = i.call(t, e);
                        if (n || p.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                    } catch (t) {}
                    return 0 < B(e, T, null, [t]).length
                }, B.contains = function(t, e) {
                    return (t.ownerDocument || t) !== T && k(t), g(t, e)
                }, B.attr = function(t, e) {
                    (t.ownerDocument || t) !== T && k(t);
                    var n = v.attrHandle[e.toLowerCase()],
                        n = n && $.call(v.attrHandle, e.toLowerCase()) ? n(t, e, !S) : void 0;
                    return void 0 !== n ? n : p.attributes || !S ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
                }, B.escape = function(t) {
                    return (t + "").replace(ut, M)
                }, B.error = function(t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, B.uniqueSort = function(t) {
                    var e, n = [],
                        r = 0,
                        i = 0;
                    if (u = !p.detectDuplicates, l = !p.sortStable && t.slice(0), t.sort(G), u) {
                        for (; e = t[i++];) e === t[i] && (r = n.push(i));
                        for (; r--;) t.splice(n[r], 1)
                    }
                    return l = null, t
                }, o = B.getText = function(t) {
                    var e, n = "",
                        r = 0,
                        i = t.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) n += o(t)
                        } else if (3 === i || 4 === i) return t.nodeValue
                    } else
                        for (; e = t[r++];) n += o(e);
                    return n
                }, (v = B.selectors = {
                    cacheLength: 50,
                    createPseudo: O,
                    match: h,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(t) {
                            return t[1] = t[1].replace(N, f), t[3] = (t[3] || t[4] || t[5] || "").replace(N, f), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        },
                        CHILD: function(t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || B.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && B.error(t[0]), t
                        },
                        PSEUDO: function(t) {
                            var e, n = !t[6] && t[2];
                            return h.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && rt.test(n) && (e = (e = d(n, !0)) && n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(t) {
                            var e = t.replace(N, f).toLowerCase();
                            return "*" === t ? function() {
                                return !0
                            } : function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        },
                        CLASS: function(t) {
                            var e = z[t + " "];
                            return e || (e = new RegExp("(^|" + s + ")" + t + "(" + s + "|$)")) && z(t, function(t) {
                                return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(e, n, r) {
                            return function(t) {
                                t = B.attr(t, e);
                                return null == t ? "!=" === n : !n || (t += "", "=" === n ? t === r : "!=" === n ? t !== r : "^=" === n ? r && 0 === t.indexOf(r) : "*=" === n ? r && -1 < t.indexOf(r) : "$=" === n ? r && t.slice(-r.length) === r : "~=" === n ? -1 < (" " + t.replace(Q, " ") + " ").indexOf(r) : "|=" === n && (t === r || t.slice(0, r.length + 1) === r + "-"))
                            }
                        },
                        CHILD: function(d, t, e, m, g) {
                            var w = "nth" !== d.slice(0, 3),
                                y = "last" !== d.slice(-4),
                                b = "of-type" === t;
                            return 1 === m && 0 === g ? function(t) {
                                return !!t.parentNode
                            } : function(t, e, n) {
                                var r, i, o, s, a, l, u = w != y ? "nextSibling" : "previousSibling",
                                    c = t.parentNode,
                                    f = b && t.nodeName.toLowerCase(),
                                    h = !n && !b,
                                    p = !1;
                                if (c) {
                                    if (w) {
                                        for (; u;) {
                                            for (s = t; s = s[u];)
                                                if (b ? s.nodeName.toLowerCase() === f : 1 === s.nodeType) return !1;
                                            l = u = "only" === d && !l && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (l = [y ? c.firstChild : c.lastChild], y && h) {
                                        for (p = (a = (r = (i = (o = (s = c)[E] || (s[E] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[d] || [])[0] === A && r[1]) && r[2], s = a && c.childNodes[a]; s = ++a && s && s[u] || (p = a = 0, l.pop());)
                                            if (1 === s.nodeType && ++p && s === t) {
                                                i[d] = [A, a, p];
                                                break
                                            }
                                    } else if (!1 === (p = h ? a = (r = (i = (o = (s = t)[E] || (s[E] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[d] || [])[0] === A && r[1] : p))
                                        for (;
                                            (s = ++a && s && s[u] || (p = a = 0, l.pop())) && ((b ? s.nodeName.toLowerCase() !== f : 1 !== s.nodeType) || !++p || (h && ((i = (o = s[E] || (s[E] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[d] = [A, p]), s !== t)););
                                    return (p -= g) === m || p % m == 0 && 0 <= p / m
                                }
                            }
                        },
                        PSEUDO: function(t, o) {
                            var e, s = v.pseudos[t] || v.setFilters[t.toLowerCase()] || B.error("unsupported pseudo: " + t);
                            return s[E] ? s(o) : 1 < s.length ? (e = [t, t, "", o], v.setFilters.hasOwnProperty(t.toLowerCase()) ? O(function(t, e) {
                                for (var n, r = s(t, o), i = r.length; i--;) t[n = b(t, r[i])] = !(e[n] = r[i])
                            }) : function(t) {
                                return s(t, 0, e)
                            }) : s
                        }
                    },
                    pseudos: {
                        not: O(function(t) {
                            var r = [],
                                i = [],
                                a = V(t.replace(C, "$1"));
                            return a[E] ? O(function(t, e, n, r) {
                                for (var i, o = a(t, null, r, []), s = t.length; s--;)(i = o[s]) && (t[s] = !(e[s] = i))
                            }) : function(t, e, n) {
                                return r[0] = t, a(r, null, n, i), r[0] = null, !i.pop()
                            }
                        }),
                        has: O(function(e) {
                            return function(t) {
                                return 0 < B(e, t).length
                            }
                        }),
                        contains: O(function(e) {
                            return e = e.replace(N, f),
                                function(t) {
                                    return -1 < (t.textContent || t.innerText || o(t)).indexOf(e)
                                }
                        }),
                        lang: O(function(n) {
                            return it.test(n || "") || B.error("unsupported lang: " + n), n = n.replace(N, f).toLowerCase(),
                                function(t) {
                                    var e;
                                    do {
                                        if (e = S ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (e = e.toLowerCase()) === n || 0 === e.indexOf(n + "-")
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function(t) {
                            var e = I.location && I.location.hash;
                            return e && e.slice(1) === t.id
                        },
                        root: function(t) {
                            return t === n
                        },
                        focus: function(t) {
                            return t === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        },
                        enabled: dt(!1),
                        disabled: dt(!0),
                        checked: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        },
                        selected: function(t) {
                            return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                        },
                        empty: function(t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(t) {
                            return !v.pseudos.empty(t)
                        },
                        header: function(t) {
                            return st.test(t.nodeName)
                        },
                        input: function(t) {
                            return ot.test(t.nodeName)
                        },
                        button: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        },
                        text: function(t) {
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (t = t.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: j(function() {
                            return [0]
                        }),
                        last: j(function(t, e) {
                            return [e - 1]
                        }),
                        eq: j(function(t, e, n) {
                            return [n < 0 ? n + e : n]
                        }),
                        even: j(function(t, e) {
                            for (var n = 0; n < e; n += 2) t.push(n);
                            return t
                        }),
                        odd: j(function(t, e) {
                            for (var n = 1; n < e; n += 2) t.push(n);
                            return t
                        }),
                        lt: j(function(t, e, n) {
                            for (var r = n < 0 ? n + e : n; 0 <= --r;) t.push(r);
                            return t
                        }),
                        gt: j(function(t, e, n) {
                            for (var r = n < 0 ? n + e : n; ++r < e;) t.push(r);
                            return t
                        })
                    }
                }).pseudos.nth = v.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) v.pseudos[t] = function(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }(t);
            for (t in {
                    submit: !0,
                    reset: !0
                }) v.pseudos[t] = function(n) {
                return function(t) {
                    var e = t.nodeName.toLowerCase();
                    return ("input" === e || "button" === e) && t.type === n
                }
            }(t);

            function gt() {}

            function L(t) {
                for (var e = 0, n = t.length, r = ""; e < n; e++) r += t[e].value;
                return r
            }

            function R(s, t, e) {
                var a = t.dir,
                    l = t.next,
                    u = l || a,
                    c = e && "parentNode" === u,
                    f = _++;
                return t.first ? function(t, e, n) {
                    for (; t = t[a];)
                        if (1 === t.nodeType || c) return s(t, e, n);
                    return !1
                } : function(t, e, n) {
                    var r, i, o = [A, f];
                    if (n) {
                        for (; t = t[a];)
                            if ((1 === t.nodeType || c) && s(t, e, n)) return !0
                    } else
                        for (; t = t[a];)
                            if (1 === t.nodeType || c)
                                if (i = (i = t[E] || (t[E] = {}))[t.uniqueID] || (i[t.uniqueID] = {}), l && l === t.nodeName.toLowerCase()) t = t[a] || t;
                                else {
                                    if ((r = i[u]) && r[0] === A && r[1] === f) return o[2] = r[2];
                                    if ((i[u] = o)[2] = s(t, e, n)) return !0
                                } return !1
                }
            }

            function wt(i) {
                return 1 < i.length ? function(t, e, n) {
                    for (var r = i.length; r--;)
                        if (!i[r](t, e, n)) return !1;
                    return !0
                } : i[0]
            }

            function yt(t, e, n, r, i) {
                for (var o, s = [], a = 0, l = t.length, u = null != e; a < l; a++) !(o = t[a]) || n && !n(o, r, i) || (s.push(o), u && e.push(a));
                return s
            }

            function bt(p, d, m, g, w, t) {
                return g && !g[E] && (g = bt(g)), w && !w[E] && (w = bt(w, t)), O(function(t, e, n, r) {
                    var i, o, s, a = [],
                        l = [],
                        u = e.length,
                        c = t || function(t, e, n) {
                            for (var r = 0, i = e.length; r < i; r++) B(t, e[r], n);
                            return n
                        }(d || "*", n.nodeType ? [n] : n, []),
                        f = !p || !t && d ? c : yt(c, a, p, n, r),
                        h = m ? w || (t ? p : u || g) ? [] : e : f;
                    if (m && m(f, h, n, r), g)
                        for (i = yt(h, l), g(i, [], n, r), o = i.length; o--;)(s = i[o]) && (h[l[o]] = !(f[l[o]] = s));
                    if (t) {
                        if (w || p) {
                            if (w) {
                                for (i = [], o = h.length; o--;)(s = h[o]) && i.push(f[o] = s);
                                w(null, h = [], i, r)
                            }
                            for (o = h.length; o--;)(s = h[o]) && -1 < (i = w ? b(t, s) : a[o]) && (t[i] = !(e[i] = s))
                        }
                    } else h = yt(h === e ? h.splice(u, h.length) : h), w ? w(null, e, h, r) : D.apply(e, h)
                })
            }

            function vt(g, w) {
                function t(t, e, n, r, i) {
                    var o, s, a, l = 0,
                        u = "0",
                        c = t && [],
                        f = [],
                        h = x,
                        p = t || b && v.find.TAG("*", i),
                        d = A += null == h ? 1 : Math.random() || .1,
                        m = p.length;
                    for (i && (x = e === T || e || i); u !== m && null != (o = p[u]); u++) {
                        if (b && o) {
                            for (s = 0, e || o.ownerDocument === T || (k(o), n = !S); a = g[s++];)
                                if (a(o, e || T, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (A = d)
                        }
                        y && ((o = !a && o) && l--, t) && c.push(o)
                    }
                    if (l += u, y && u !== l) {
                        for (s = 0; a = w[s++];) a(c, f, e, n);
                        if (t) {
                            if (0 < l)
                                for (; u--;) c[u] || f[u] || (f[u] = K.call(r));
                            f = yt(f)
                        }
                        D.apply(r, f), i && !t && 0 < f.length && 1 < l + w.length && B.uniqueSort(r)
                    }
                    return i && (A = d, x = h), c
                }
                var y = 0 < w.length,
                    b = 0 < g.length;
                return y ? O(t) : t
            }
            return gt.prototype = v.filters = v.pseudos, v.setFilters = new gt, d = B.tokenize = function(t, e) {
                var n, r, i, o, s, a, l, u = U[t + " "];
                if (u) return e ? 0 : u.slice(0);
                for (s = t, a = [], l = v.preFilter; s;) {
                    for (o in n && !(r = tt.exec(s)) || (r && (s = s.slice(r[0].length) || s), a.push(i = [])), n = !1, (r = et.exec(s)) && (n = r.shift(), i.push({
                            value: n,
                            type: r[0].replace(C, " ")
                        }), s = s.slice(n.length)), v.filter) !(r = h[o].exec(s)) || l[o] && !(r = l[o](r)) || (n = r.shift(), i.push({
                        value: n,
                        type: o,
                        matches: r
                    }), s = s.slice(n.length));
                    if (!n) break
                }
                return e ? s.length : s ? B.error(t) : U(t, a).slice(0)
            }, V = B.compile = function(t, e) {
                var n, r = [],
                    i = [],
                    o = y[t + " "];
                if (!o) {
                    for (n = (e = e || d(t)).length; n--;)((o = function t(e) {
                        for (var r, n, i, o = e.length, s = v.relative[e[0].type], a = s || v.relative[" "], l = s ? 1 : 0, u = R(function(t) {
                                return t === r
                            }, a, !0), c = R(function(t) {
                                return -1 < b(r, t)
                            }, a, !0), f = [function(t, e, n) {
                                return t = !s && (n || e !== x) || ((r = e).nodeType ? u : c)(t, e, n), r = null, t
                            }]; l < o; l++)
                            if (n = v.relative[e[l].type]) f = [R(wt(f), n)];
                            else {
                                if ((n = v.filter[e[l].type].apply(null, e[l].matches))[E]) {
                                    for (i = ++l; i < o && !v.relative[e[i].type]; i++);
                                    return bt(1 < l && wt(f), 1 < l && L(e.slice(0, l - 1).concat({
                                        value: " " === e[l - 2].type ? "*" : ""
                                    })).replace(C, "$1"), n, l < i && t(e.slice(l, i)), i < o && t(e = e.slice(i)), i < o && L(e))
                                }
                                f.push(n)
                            }
                        return wt(f)
                    }(e[n]))[E] ? r : i).push(o);
                    (o = y(t, vt(i, r))).selector = t
                }
                return o
            }, F = B.select = function(t, e, n, r) {
                var i, o, s, a, l, u = "function" == typeof t && t,
                    c = !r && d(t = u.selector || t);
                if (n = n || [], 1 === c.length) {
                    if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (s = o[0]).type && 9 === e.nodeType && S && v.relative[o[1].type]) {
                        if (!(e = (v.find.ID(s.matches[0].replace(N, f), e) || [])[0])) return n;
                        u && (e = e.parentNode), t = t.slice(o.shift().value.length)
                    }
                    for (i = h.needsContext.test(t) ? 0 : o.length; i-- && (s = o[i], !v.relative[a = s.type]);)
                        if ((l = v.find[a]) && (r = l(s.matches[0].replace(N, f), lt.test(o[0].type) && mt(e.parentNode) || e))) {
                            if (o.splice(i, 1), t = r.length && L(o)) break;
                            return D.apply(n, r), n
                        }
                }
                return (u || V(t, c))(r, e, !S, n, !e || lt.test(t) && mt(e.parentNode) || e), n
            }, p.sortStable = E.split("").sort(G).join("") === E, p.detectDuplicates = !!u, k(), p.sortDetached = P(function(t) {
                return 1 & t.compareDocumentPosition(T.createElement("fieldset"))
            }), P(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || ht("type|href|height|width", function(t, e, n) {
                if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), p.attributes && P(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || ht("value", function(t, e, n) {
                if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
            }), P(function(t) {
                return null == t.getAttribute("disabled")
            }) || ht(Z, function(t, e, n) {
                if (!n) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }), B
        }(x),
        X = (T.find = e, T.expr = e.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = e.uniqueSort, T.text = e.getText, T.isXMLDoc = e.isXML, T.contains = e.contains, T.escapeSelector = e.escape, T.expr.match.needsContext),
        J = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Q = /^.[^:#\[\.,]*$/;

    function tt(t, n, r) {
        return T.isFunction(n) ? T.grep(t, function(t, e) {
            return !!n.call(t, e, t) !== r
        }) : n.nodeType ? T.grep(t, function(t) {
            return t === n !== r
        }) : "string" != typeof n ? T.grep(t, function(t) {
            return -1 < i.call(n, t) !== r
        }) : Q.test(n) ? T.filter(n, t, r) : (n = T.filter(n, t), T.grep(t, function(t) {
            return -1 < i.call(n, t) !== r && 1 === t.nodeType
        }))
    }
    T.filter = function(t, e, n) {
        var r = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === r.nodeType ? T.find.matchesSelector(r, t) ? [r] : [] : T.find.matches(t, T.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, T.fn.extend({
        find: function(t) {
            var e, n, r = this.length,
                i = this;
            if ("string" != typeof t) return this.pushStack(T(t).filter(function() {
                for (e = 0; e < r; e++)
                    if (T.contains(i[e], this)) return !0
            }));
            for (n = this.pushStack([]), e = 0; e < r; e++) T.find(t, i[e], n);
            return 1 < r ? T.uniqueSort(n) : n
        },
        filter: function(t) {
            return this.pushStack(tt(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(tt(this, t || [], !0))
        },
        is: function(t) {
            return !!tt(this, "string" == typeof t && X.test(t) ? T(t) : t || [], !1).length
        }
    });
    var et, nt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        rt = ((T.fn.init = function(t, e, n) {
            if (t) {
                if (n = n || et, "string" != typeof t) return t.nodeType ? (this[0] = t, this.length = 1, this) : T.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(T) : T.makeArray(t, this);
                if (!(r = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : nt.exec(t)) || !r[1] && e) return (!e || e.jquery ? e || n : this.constructor(e)).find(t);
                if (r[1]) {
                    if (e = e instanceof T ? e[0] : e, T.merge(this, T.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : k, !0)), J.test(r[1]) && T.isPlainObject(e))
                        for (var r in e) T.isFunction(this[r]) ? this[r](e[r]) : this.attr(r, e[r])
                } else(n = k.getElementById(r[2])) && (this[0] = n, this.length = 1)
            }
            return this
        }).prototype = T.fn, et = T(k), /^(?:parents|prev(?:Until|All))/),
        it = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function ot(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }
    T.fn.extend({
        has: function(t) {
            var e = T(t, this),
                n = e.length;
            return this.filter(function() {
                for (var t = 0; t < n; t++)
                    if (T.contains(this, e[t])) return !0
            })
        },
        closest: function(t, e) {
            var n, r = 0,
                i = this.length,
                o = [],
                s = "string" != typeof t && T(t);
            if (!X.test(t))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && T.find.matchesSelector(n, t))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? T.uniqueSort(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? i.call(T(t), this[0]) : i.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(T.uniqueSort(T.merge(this.get(), T(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), T.each({
        parent: function(t) {
            t = t.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(t) {
            return r(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return r(t, "parentNode", n)
        },
        next: function(t) {
            return ot(t, "nextSibling")
        },
        prev: function(t) {
            return ot(t, "previousSibling")
        },
        nextAll: function(t) {
            return r(t, "nextSibling")
        },
        prevAll: function(t) {
            return r(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return r(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return r(t, "previousSibling", n)
        },
        siblings: function(t) {
            return Z((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return Z(t.firstChild)
        },
        contents: function(t) {
            return t.contentDocument || T.merge([], t.childNodes)
        }
    }, function(r, i) {
        T.fn[r] = function(t, e) {
            var n = T.map(this, i, t);
            return (e = "Until" !== r.slice(-5) ? t : e) && "string" == typeof e && (n = T.filter(e, n)), 1 < this.length && (it[r] || T.uniqueSort(n), rt.test(r)) && n.reverse(), this.pushStack(n)
        }
    });
    var S = /[^\x20\t\r\n\f]+/g;

    function c(t) {
        return t
    }

    function st(t) {
        throw t
    }

    function at(t, e, n) {
        var r;
        try {
            t && T.isFunction(r = t.promise) ? r.call(t).done(e).fail(n) : t && T.isFunction(r = t.then) ? r.call(t, e, n) : e.call(void 0, t)
        } catch (t) {
            n.call(void 0, t)
        }
    }
    T.Callbacks = function(r) {
        var t, n;
        r = "string" == typeof r ? (t = r, n = {}, T.each(t.match(S) || [], function(t, e) {
            n[e] = !0
        }), n) : T.extend({}, r);

        function i() {
            for (a = r.once, s = o = !0; u.length; c = -1)
                for (e = u.shift(); ++c < l.length;) !1 === l[c].apply(e[0], e[1]) && r.stopOnFalse && (c = l.length, e = !1);
            r.memory || (e = !1), o = !1, a && (l = e ? [] : "")
        }
        var o, e, s, a, l = [],
            u = [],
            c = -1,
            f = {
                add: function() {
                    return l && (e && !o && (c = l.length - 1, u.push(e)), function n(t) {
                        T.each(t, function(t, e) {
                            T.isFunction(e) ? r.unique && f.has(e) || l.push(e) : e && e.length && "string" !== T.type(e) && n(e)
                        })
                    }(arguments), e) && !o && i(), this
                },
                remove: function() {
                    return T.each(arguments, function(t, e) {
                        for (var n; - 1 < (n = T.inArray(e, l, n));) l.splice(n, 1), n <= c && c--
                    }), this
                },
                has: function(t) {
                    return t ? -1 < T.inArray(t, l) : 0 < l.length
                },
                empty: function() {
                    return l = l && [], this
                },
                disable: function() {
                    return a = u = [], l = e = "", this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return a = u = [], e || o || (l = e = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(t, e) {
                    return a || (e = [t, (e = e || []).slice ? e.slice() : e], u.push(e), o) || i(), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!s
                }
            };
        return f
    }, T.extend({
        Deferred: function(t) {
            var o = [
                    ["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2],
                    ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                s = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    catch: function(t) {
                        return s.then(null, t)
                    },
                    pipe: function() {
                        var i = arguments;
                        return T.Deferred(function(r) {
                            T.each(o, function(t, e) {
                                var n = T.isFunction(i[e[4]]) && i[e[4]];
                                a[e[1]](function() {
                                    var t = n && n.apply(this, arguments);
                                    t && T.isFunction(t.promise) ? t.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[e[0] + "With"](this, n ? [t] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(e, n, r) {
                        var l = 0;

                        function u(i, o, s, a) {
                            return function() {
                                function t() {
                                    var t, e;
                                    if (!(i < l)) {
                                        if ((t = s.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                        e = t && ("object" == typeof t || "function" == typeof t) && t.then, T.isFunction(e) ? a ? e.call(t, u(l, o, c, a), u(l, o, st, a)) : (l++, e.call(t, u(l, o, c, a), u(l, o, st, a), u(l, o, c, o.notifyWith))) : (s !== c && (n = void 0, r = [t]), (a || o.resolveWith)(n, r))
                                    }
                                }
                                var n = this,
                                    r = arguments,
                                    e = a ? t : function() {
                                        try {
                                            t()
                                        } catch (t) {
                                            T.Deferred.exceptionHook && T.Deferred.exceptionHook(t, e.stackTrace), l <= i + 1 && (s !== st && (n = void 0, r = [t]), o.rejectWith(n, r))
                                        }
                                    };
                                i ? e() : (T.Deferred.getStackHook && (e.stackTrace = T.Deferred.getStackHook()), x.setTimeout(e))
                            }
                        }
                        return T.Deferred(function(t) {
                            o[0][3].add(u(0, t, T.isFunction(r) ? r : c, t.notifyWith)), o[1][3].add(u(0, t, T.isFunction(e) ? e : c)), o[2][3].add(u(0, t, T.isFunction(n) ? n : st))
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? T.extend(t, s) : s
                    }
                },
                a = {};
            return T.each(o, function(t, e) {
                var n = e[2],
                    r = e[5];
                s[e[1]] = n.add, r && n.add(function() {
                    i = r
                }, o[3 - t][2].disable, o[0][2].lock), n.add(e[3].fire), a[e[0]] = function() {
                    return a[e[0] + "With"](this === a ? void 0 : this, arguments), this
                }, a[e[0] + "With"] = n.fireWith
            }), s.promise(a), t && t.call(a, a), a
        },
        when: function(t) {
            function e(e) {
                return function(t) {
                    i[e] = this, o[e] = 1 < arguments.length ? a.call(arguments) : t, --n || s.resolveWith(i, o)
                }
            }
            var n = arguments.length,
                r = n,
                i = Array(r),
                o = a.call(arguments),
                s = T.Deferred();
            if (n <= 1 && (at(t, s.done(e(r)).resolve, s.reject), "pending" === s.state() || T.isFunction(o[r] && o[r].then))) return s.then();
            for (; r--;) at(o[r], e(r), s.reject);
            return s.promise()
        }
    });
    var lt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/,
        ut = (T.Deferred.exceptionHook = function(t, e) {
            x.console && x.console.warn && t && lt.test(t.name) && x.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
        }, T.readyException = function(t) {
            x.setTimeout(function() {
                throw t
            })
        }, T.Deferred());

    function ct() {
        k.removeEventListener("DOMContentLoaded", ct), x.removeEventListener("load", ct), T.ready()
    }
    T.fn.ready = function(t) {
        return ut.then(t).catch(function(t) {
            T.readyException(t)
        }), this
    }, T.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? T.readyWait++ : T.ready(!0)
        },
        ready: function(t) {
            (!0 === t ? --T.readyWait : T.isReady) || (T.isReady = !0) !== t && 0 < --T.readyWait || ut.resolveWith(k, [T])
        }
    }), T.ready.then = ut.then, "complete" === k.readyState || "loading" !== k.readyState && !k.documentElement.doScroll ? x.setTimeout(T.ready) : (k.addEventListener("DOMContentLoaded", ct), x.addEventListener("load", ct));

    function f(t, e, n, r, i, o, s) {
        var a = 0,
            l = t.length,
            u = null == n;
        if ("object" === T.type(n))
            for (a in i = !0, n) f(t, e, a, n[a], !0, o, s);
        else if (void 0 !== r && (i = !0, T.isFunction(r) || (s = !0), e = u ? s ? (e.call(t, r), null) : (u = e, function(t, e, n) {
                return u.call(T(t), n)
            }) : e))
            for (; a < l; a++) e(t[a], n, s ? r : r.call(t[a], a, e(t[a], n)));
        return i ? t : u ? e.call(t) : l ? e(t[0], n) : o
    }

    function ft(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    }

    function o() {
        this.expando = T.expando + o.uid++
    }
    o.uid = 1, o.prototype = {
        cache: function(t) {
            var e = t[this.expando];
            return e || (e = {}, ft(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        },
        set: function(t, e, n) {
            var r, i = this.cache(t);
            if ("string" == typeof e) i[T.camelCase(e)] = n;
            else
                for (r in e) i[T.camelCase(r)] = e[r];
            return i
        },
        get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][T.camelCase(e)]
        },
        access: function(t, e, n) {
            return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
        },
        remove: function(t, e) {
            var n, r = t[this.expando];
            if (void 0 !== r) {
                if (void 0 !== e) {
                    n = (e = T.isArray(e) ? e.map(T.camelCase) : (e = T.camelCase(e)) in r ? [e] : e.match(S) || []).length;
                    for (; n--;) delete r[e[n]]
                }
                void 0 !== e && !T.isEmptyObject(r) || (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function(t) {
            t = t[this.expando];
            return void 0 !== t && !T.isEmptyObject(t)
        }
    };
    var w = new o,
        l = new o,
        ht = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        pt = /[A-Z]/g;

    function dt(t, e, n) {
        var r, i;
        if (void 0 === n && 1 === t.nodeType)
            if (r = "data-" + e.replace(pt, "-$&").toLowerCase(), "string" == typeof(n = t.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : ht.test(i) ? JSON.parse(i) : i)
                } catch (t) {}
                l.set(t, e, n)
            } else n = void 0;
        return n
    }
    T.extend({
        hasData: function(t) {
            return l.hasData(t) || w.hasData(t)
        },
        data: function(t, e, n) {
            return l.access(t, e, n)
        },
        removeData: function(t, e) {
            l.remove(t, e)
        },
        _data: function(t, e, n) {
            return w.access(t, e, n)
        },
        _removeData: function(t, e) {
            w.remove(t, e)
        }
    }), T.fn.extend({
        data: function(n, t) {
            var e, r, i, o = this[0],
                s = o && o.attributes;
            if (void 0 !== n) return "object" == typeof n ? this.each(function() {
                l.set(this, n)
            }) : f(this, function(t) {
                var e;
                if (o && void 0 === t) return void 0 !== (e = l.get(o, n)) || void 0 !== (e = dt(o, n)) ? e : void 0;
                this.each(function() {
                    l.set(this, n, t)
                })
            }, null, t, 1 < arguments.length, null, !0);
            if (this.length && (i = l.get(o), 1 === o.nodeType) && !w.get(o, "hasDataAttrs")) {
                for (e = s.length; e--;) s[e] && 0 === (r = s[e].name).indexOf("data-") && (r = T.camelCase(r.slice(5)), dt(o, r, i[r]));
                w.set(o, "hasDataAttrs", !0)
            }
            return i
        },
        removeData: function(t) {
            return this.each(function() {
                l.remove(this, t)
            })
        }
    }), T.extend({
        queue: function(t, e, n) {
            var r;
            if (t) return r = w.get(t, e = (e || "fx") + "queue"), n && (!r || T.isArray(n) ? r = w.access(t, e, T.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = T.queue(t, e),
                r = n.length,
                i = n.shift(),
                o = T._queueHooks(t, e);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === e && n.unshift("inprogress"), delete o.stop, i.call(t, function() {
                T.dequeue(t, e)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return w.get(t, n) || w.access(t, n, {
                empty: T.Callbacks("once memory").add(function() {
                    w.remove(t, [e + "queue", n])
                })
            })
        }
    }), T.fn.extend({
        queue: function(e, n) {
            var t = 2;
            return "string" != typeof e && (n = e, e = "fx", t--), arguments.length < t ? T.queue(this[0], e) : void 0 === n ? this : this.each(function() {
                var t = T.queue(this, e, n);
                T._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && T.dequeue(this, e)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                T.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            function n() {
                --i || o.resolveWith(s, [s])
            }
            var r, i = 1,
                o = T.Deferred(),
                s = this,
                a = this.length;
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)(r = w.get(s[a], t + "queueHooks")) && r.empty && (i++, r.empty.add(n));
            return n(), o.promise(e)
        }
    });

    function mt(t, e) {
        return "none" === (t = e || t).style.display || "" === t.style.display && T.contains(t.ownerDocument, t) && "none" === T.css(t, "display")
    }

    function gt(t, e, n, r) {
        var i, o = {};
        for (i in e) o[i] = t.style[i], t.style[i] = e[i];
        for (i in n = n.apply(t, r || []), e) t.style[i] = o[i];
        return n
    }
    var t = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        h = new RegExp("^(?:([+-])=|)(" + t + ")([a-z%]*)$", "i"),
        u = ["Top", "Right", "Bottom", "Left"];

    function wt(t, e, n, r) {
        var i, o = 1,
            s = 20,
            a = r ? function() {
                return r.cur()
            } : function() {
                return T.css(t, e, "")
            },
            l = a(),
            u = n && n[3] || (T.cssNumber[e] ? "" : "px"),
            c = (T.cssNumber[e] || "px" !== u && +l) && h.exec(T.css(t, e));
        if (c && c[3] !== u)
            for (u = u || c[3], n = n || [], c = +l || 1; T.style(t, e, (c /= o = o || ".5") + u), o !== (o = a() / l) && 1 !== o && --s;);
        return n && (c = +c || +l || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r) && (r.unit = u, r.start = c, r.end = i), i
    }
    var yt = {};

    function g(t, e) {
        for (var n, r, i, o, s, a = [], l = 0, u = t.length; l < u; l++)(r = t[l]).style && (n = r.style.display, e ? ("none" === n && (a[l] = w.get(r, "display") || null, a[l] || (r.style.display = "")), "" === r.style.display && mt(r) && (a[l] = (s = o = void 0, o = (i = r).ownerDocument, i = i.nodeName, (s = yt[i]) || (o = o.body.appendChild(o.createElement(i)), s = T.css(o, "display"), o.parentNode.removeChild(o), yt[i] = s = "none" === s ? "block" : s)))) : "none" !== n && (a[l] = "none", w.set(r, "display", n)));
        for (l = 0; l < u; l++) null != a[l] && (t[l].style.display = a[l]);
        return t
    }
    T.fn.extend({
        show: function() {
            return g(this, !0)
        },
        hide: function() {
            return g(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                mt(this) ? T(this).show() : T(this).hide()
            })
        }
    });
    var bt = /^(?:checkbox|radio)$/i,
        vt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        xt = /^$|\/(?:java|ecma)script/i,
        d = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function y(t, e) {
        var n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && T.nodeName(t, e) ? T.merge([t], n) : n
    }

    function kt(t, e) {
        for (var n = 0, r = t.length; n < r; n++) w.set(t[n], "globalEval", !e || w.get(e[n], "globalEval"))
    }
    d.optgroup = d.option, d.tbody = d.tfoot = d.colgroup = d.caption = d.thead, d.th = d.td;
    var Tt = /<|&#?\w+;/;

    function St(t, e, n, r, i) {
        for (var o, s, a, l, u, c = e.createDocumentFragment(), f = [], h = 0, p = t.length; h < p; h++)
            if ((o = t[h]) || 0 === o)
                if ("object" === T.type(o)) T.merge(f, o.nodeType ? [o] : o);
                else if (Tt.test(o)) {
            for (s = s || c.appendChild(e.createElement("div")), a = (vt.exec(o) || ["", ""])[1].toLowerCase(), a = d[a] || d._default, s.innerHTML = a[1] + T.htmlPrefilter(o) + a[2], u = a[0]; u--;) s = s.lastChild;
            T.merge(f, s.childNodes), (s = c.firstChild).textContent = ""
        } else f.push(e.createTextNode(o));
        for (c.textContent = "", h = 0; o = f[h++];)
            if (r && -1 < T.inArray(o, r)) i && i.push(o);
            else if (l = T.contains(o.ownerDocument, o), s = y(c.appendChild(o), "script"), l && kt(s), n)
            for (u = 0; o = s[u++];) xt.test(o.type || "") && n.push(o);
        return c
    }
    e = k.createDocumentFragment().appendChild(k.createElement("div")), (N = k.createElement("input")).setAttribute("type", "radio"), N.setAttribute("checked", "checked"), N.setAttribute("name", "t"), e.appendChild(N), m.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
    var Et = k.documentElement,
        At = /^key/,
        Dt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ct = /^([^.]*)(?:\.(.+)|)/;

    function Nt() {
        return !0
    }

    function p() {
        return !1
    }

    function Bt() {
        try {
            return k.activeElement
        } catch (t) {}
    }

    function Ot(t, e, n, r, i, o) {
        var s, a;
        if ("object" == typeof e) {
            for (a in "string" != typeof n && (r = r || n, n = void 0), e) Ot(t, a, n, r, e[a], o);
            return t
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = p;
        else if (!i) return t;
        return 1 === o && (s = i, (i = function(t) {
            return T().off(t), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = T.guid++)), t.each(function() {
            T.event.add(this, e, i, r, n)
        })
    }
    T.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, s, a, l, u, c, f, h, p, d = w.get(e);
            if (d)
                for (n.handler && (n = (o = n).handler, i = o.selector), i && T.find.matchesSelector(Et, i), n.guid || (n.guid = T.guid++), a = (a = d.events) || (d.events = {}), s = (s = d.handle) || (d.handle = function(t) {
                        return void 0 !== T && T.event.triggered !== t.type ? T.event.dispatch.apply(e, arguments) : void 0
                    }), l = (t = (t || "").match(S) || [""]).length; l--;) f = p = (h = Ct.exec(t[l]) || [])[1], h = (h[2] || "").split(".").sort(), f && (u = T.event.special[f] || {}, f = (i ? u.delegateType : u.bindType) || f, u = T.event.special[f] || {}, p = T.extend({
                    type: f,
                    origType: p,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && T.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (c = a[f]) || ((c = a[f] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, r, h, s)) || e.addEventListener && e.addEventListener(f, s), u.add && (u.add.call(e, p), p.handler.guid || (p.handler.guid = n.guid)), i ? c.splice(c.delegateCount++, 0, p) : c.push(p), T.event.global[f] = !0)
        },
        remove: function(t, e, n, r, i) {
            var o, s, a, l, u, c, f, h, p, d, m, g = w.hasData(t) && w.get(t);
            if (g && (l = g.events)) {
                for (u = (e = (e || "").match(S) || [""]).length; u--;)
                    if (p = m = (a = Ct.exec(e[u]) || [])[1], d = (a[2] || "").split(".").sort(), p) {
                        for (f = T.event.special[p] || {}, h = l[p = (r ? f.delegateType : f.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = h.length; o--;) c = h[o], !i && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (h.splice(o, 1), c.selector && h.delegateCount--, f.remove && f.remove.call(t, c));
                        s && !h.length && (f.teardown && !1 !== f.teardown.call(t, d, g.handle) || T.removeEvent(t, p, g.handle), delete l[p])
                    } else
                        for (p in l) T.event.remove(t, p + e[u], n, r, !0);
                T.isEmptyObject(l) && w.remove(t, "handle events")
            }
        },
        dispatch: function(t) {
            var e, n, r, i, o, s = T.event.fix(t),
                a = new Array(arguments.length),
                t = (w.get(this, "events") || {})[s.type] || [],
                l = T.event.special[s.type] || {};
            for (a[0] = s, e = 1; e < arguments.length; e++) a[e] = arguments[e];
            if (s.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, s)) {
                for (o = T.event.handlers.call(this, s, t), e = 0;
                    (r = o[e++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = r.elem, n = 0;
                        (i = r.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(i.namespace) || (s.handleObj = i, s.data = i.data, void 0 !== (i = ((T.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, a)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, s), s.result
            }
        },
        handlers: function(t, e) {
            var n, r, i, o, s, a = [],
                l = e.delegateCount,
                u = t.target;
            if (l && u.nodeType && !("click" === t.type && 1 <= t.button))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== t.type || !0 !== u.disabled)) {
                        for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[i = (r = e[n]).selector + " "] && (s[i] = r.needsContext ? -1 < T(i, this).index(u) : T.find(i, this, null, [u]).length), s[i] && o.push(r);
                        o.length && a.push({
                            elem: u,
                            handlers: o
                        })
                    }
            return u = this, l < e.length && a.push({
                elem: u,
                handlers: e.slice(l)
            }), a
        },
        addProp: function(e, t) {
            Object.defineProperty(T.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: T.isFunction(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(t) {
            return t[T.expando] ? t : new T.Event(t)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== Bt() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Bt() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && T.nodeName(this, "input")) return this.click(), !1
                },
                _default: function(t) {
                    return T.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, T.removeEvent = function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }, T.Event = function(t, e) {
        return this instanceof T.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Nt : p, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && T.extend(this, e), this.timeStamp = t && t.timeStamp || T.now(), void(this[T.expando] = !0)) : new T.Event(t, e)
    }, T.Event.prototype = {
        constructor: T.Event,
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        isSimulated: !1,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = Nt, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = Nt, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = Nt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, T.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(t) {
            var e = t.button;
            return null == t.which && At.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Dt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, T.event.addProp), T.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, i) {
        T.event.special[t] = {
            delegateType: i,
            bindType: i,
            handle: function(t) {
                var e, n = t.relatedTarget,
                    r = t.handleObj;
                return n && (n === this || T.contains(this, n)) || (t.type = r.origType, e = r.handler.apply(this, arguments), t.type = i), e
            }
        }
    }), T.fn.extend({
        on: function(t, e, n, r) {
            return Ot(this, t, e, n, r)
        },
        one: function(t, e, n, r) {
            return Ot(this, t, e, n, r, 1)
        },
        off: function(t, e, n) {
            var r, i;
            if (t && t.preventDefault && t.handleObj) r = t.handleObj, T(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler);
            else {
                if ("object" != typeof t) return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = p), this.each(function() {
                    T.event.remove(this, t, n, e)
                });
                for (i in t) this.off(i, e, t[i])
            }
            return this
        }
    });
    var Pt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        jt = /<script|<style|<link/i,
        Lt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Rt = /^true\/(.*)/,
        It = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Mt(t, e) {
        return T.nodeName(t, "table") && T.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") && t.getElementsByTagName("tbody")[0] || t
    }

    function qt(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function Ht(t) {
        var e = Rt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function Vt(t, e) {
        var n, r, i, o, s, a;
        if (1 === e.nodeType) {
            if (w.hasData(t) && (o = w.access(t), s = w.set(e, o), a = o.events))
                for (i in delete s.handle, s.events = {}, a)
                    for (n = 0, r = a[i].length; n < r; n++) T.event.add(e, i, a[i][n]);
            l.hasData(t) && (o = l.access(t), s = T.extend({}, o), l.set(e, s))
        }
    }

    function b(n, r, i, o) {
        r = q.apply([], r);
        var t, e, s, a, l, u, c = 0,
            f = n.length,
            h = f - 1,
            p = r[0],
            d = T.isFunction(p);
        if (d || 1 < f && "string" == typeof p && !m.checkClone && Lt.test(p)) return n.each(function(t) {
            var e = n.eq(t);
            d && (r[0] = p.call(this, t, e.html())), b(e, r, i, o)
        });
        if (f && (e = (t = St(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === t.childNodes.length && (t = e), e || o)) {
            for (a = (s = T.map(y(t, "script"), qt)).length; c < f; c++) l = t, c !== h && (l = T.clone(l, !0, !0), a) && T.merge(s, y(l, "script")), i.call(n[c], l, c);
            if (a)
                for (u = s[s.length - 1].ownerDocument, T.map(s, Ht), c = 0; c < a; c++) l = s[c], xt.test(l.type || "") && !w.access(l, "globalEval") && T.contains(u, l) && (l.src ? T._evalUrl && T._evalUrl(l.src) : U(l.textContent.replace(It, ""), u))
        }
        return n
    }

    function Ft(t, e, n) {
        for (var r, i = e ? T.filter(e, t) : t, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || T.cleanData(y(r)), r.parentNode && (n && T.contains(r.ownerDocument, r) && kt(y(r, "script")), r.parentNode.removeChild(r));
        return t
    }
    T.extend({
        htmlPrefilter: function(t) {
            return t.replace(Pt, "<$1></$2>")
        },
        clone: function(t, e, n) {
            var r, i, o, s, a, l, u, c = t.cloneNode(!0),
                f = T.contains(t.ownerDocument, t);
            if (!(m.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || T.isXMLDoc(t)))
                for (s = y(c), r = 0, i = (o = y(t)).length; r < i; r++) a = o[r], l = s[r], u = void 0, "input" === (u = l.nodeName.toLowerCase()) && bt.test(a.type) ? l.checked = a.checked : "input" !== u && "textarea" !== u || (l.defaultValue = a.defaultValue);
            if (e)
                if (n)
                    for (o = o || y(t), s = s || y(c), r = 0, i = o.length; r < i; r++) Vt(o[r], s[r]);
                else Vt(t, c);
            return 0 < (s = y(c, "script")).length && kt(s, !f && y(t, "script")), c
        },
        cleanData: function(t) {
            for (var e, n, r, i = T.event.special, o = 0; void 0 !== (n = t[o]); o++)
                if (ft(n)) {
                    if (e = n[w.expando]) {
                        if (e.events)
                            for (r in e.events) i[r] ? T.event.remove(n, r) : T.removeEvent(n, r, e.handle);
                        n[w.expando] = void 0
                    }
                    n[l.expando] && (n[l.expando] = void 0)
                }
        }
    }), T.fn.extend({
        detach: function(t) {
            return Ft(this, t, !0)
        },
        remove: function(t) {
            return Ft(this, t)
        },
        text: function(t) {
            return f(this, function(t) {
                return void 0 === t ? T.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return b(this, arguments, function(t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Mt(this, t).appendChild(t)
            })
        },
        prepend: function() {
            return b(this, arguments, function(t) {
                var e;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (e = Mt(this, t)).insertBefore(t, e.firstChild)
            })
        },
        before: function() {
            return b(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return b(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (T.cleanData(y(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return T.clone(this, t, e)
            })
        },
        html: function(t) {
            return f(this, function(t) {
                var e = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !jt.test(t) && !d[(vt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = T.htmlPrefilter(t);
                    try {
                        for (; n < r; n++) 1 === (e = this[n] || {}).nodeType && (T.cleanData(y(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return b(this, arguments, function(t) {
                var e = this.parentNode;
                T.inArray(this, n) < 0 && (T.cleanData(y(this)), e) && e.replaceChild(t, this)
            }, n)
        }
    }), T.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, s) {
        T.fn[t] = function(t) {
            for (var e, n = [], r = T(t), i = r.length - 1, o = 0; o <= i; o++) e = o === i ? this : this.clone(!0), T(r[o])[s](e), H.apply(n, e.get());
            return this.pushStack(n)
        }
    });

    function _t(t) {
        var e = t.ownerDocument.defaultView;
        return (e = e && e.opener ? e : x).getComputedStyle(t)
    }
    var zt, Ut, Gt, $t, s, v, Kt = /^margin/,
        Wt = new RegExp("^(" + t + ")(?!px)[a-z%]+$", "i");

    function Yt() {
        var t;
        v && (v.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", v.innerHTML = "", Et.appendChild(s), t = x.getComputedStyle(v), zt = "1%" !== t.top, $t = "2px" === t.marginLeft, Ut = "4px" === t.width, v.style.marginRight = "50%", Gt = "4px" === t.marginRight, Et.removeChild(s), v = null)
    }

    function E(t, e, n) {
        var r, i, o = t.style;
        return (n = n || _t(t)) && ("" !== (i = n.getPropertyValue(e) || n[e]) || T.contains(t.ownerDocument, t) || (i = T.style(t, e)), !m.pixelMarginRight()) && Wt.test(i) && Kt.test(e) && (t = o.width, e = o.minWidth, r = o.maxWidth, o.minWidth = o.maxWidth = o.width = i, i = n.width, o.width = t, o.minWidth = e, o.maxWidth = r), void 0 !== i ? i + "" : i
    }

    function Zt(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }
    s = k.createElement("div"), (v = k.createElement("div")).style && (v.style.backgroundClip = "content-box", v.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === v.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(v), T.extend(m, {
        pixelPosition: function() {
            return Yt(), zt
        },
        boxSizingReliable: function() {
            return Yt(), Ut
        },
        pixelMarginRight: function() {
            return Yt(), Gt
        },
        reliableMarginLeft: function() {
            return Yt(), $t
        }
    }));
    var Xt = /^(none|table(?!-c[ea]).+)/,
        Jt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Qt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        te = ["Webkit", "Moz", "ms"],
        ee = k.createElement("div").style;

    function ne(t) {
        if (t in ee) return t;
        for (var e = t[0].toUpperCase() + t.slice(1), n = te.length; n--;)
            if ((t = te[n] + e) in ee) return t
    }

    function re(t, e, n) {
        var r = h.exec(e);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : e
    }

    function ie(t, e, n, r, i) {
        for (var o = 0, s = n === (r ? "border" : "content") ? 4 : "width" === e ? 1 : 0; s < 4; s += 2) "margin" === n && (o += T.css(t, n + u[s], !0, i)), r ? ("content" === n && (o -= T.css(t, "padding" + u[s], !0, i)), "margin" !== n && (o -= T.css(t, "border" + u[s] + "Width", !0, i))) : (o += T.css(t, "padding" + u[s], !0, i), "padding" !== n && (o += T.css(t, "border" + u[s] + "Width", !0, i)));
        return o
    }

    function oe(t, e, n) {
        var r, i = !0,
            o = _t(t),
            s = "border-box" === T.css(t, "boxSizing", !1, o);
        if ((r = t.getClientRects().length ? t.getBoundingClientRect()[e] : r) <= 0 || null == r) {
            if (((r = E(t, e, o)) < 0 || null == r) && (r = t.style[e]), Wt.test(r)) return r;
            i = s && (m.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
        }
        return r + ie(t, e, n || (s ? "border" : "content"), i, o) + "px"
    }

    function A(t, e, n, r, i) {
        return new A.prototype.init(t, e, n, r, i)
    }
    T.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) return "" === (e = E(t, "opacity")) ? "1" : e
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(t, e, n, r) {
            var i, o, s, a, l;
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) return a = T.camelCase(e), l = t.style, e = T.cssProps[a] || (T.cssProps[a] = ne(a) || a), s = T.cssHooks[e] || T.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (i = s.get(t, !1, r)) ? i : l[e] : ("string" === (o = typeof n) && (i = h.exec(n)) && i[1] && (n = wt(t, e, i), o = "number"), void(null != n && n == n && ("number" === o && (n += i && i[3] || (T.cssNumber[a] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, r)) || (l[e] = n))))
        },
        css: function(t, e, n, r) {
            var i, o = T.camelCase(e);
            return e = T.cssProps[o] || (T.cssProps[o] = ne(o) || o), "normal" === (i = void 0 === (i = (o = T.cssHooks[e] || T.cssHooks[o]) && "get" in o ? o.get(t, !0, n) : i) ? E(t, e, r) : i) && e in Qt && (i = Qt[e]), ("" === n || n) && (o = parseFloat(i), !0 === n || isFinite(o)) ? o || 0 : i
        }
    }), T.each(["height", "width"], function(t, i) {
        T.cssHooks[i] = {
            get: function(t, e, n) {
                if (e) return !Xt.test(T.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? oe(t, i, n) : gt(t, Jt, function() {
                    return oe(t, i, n)
                })
            },
            set: function(t, e, n) {
                var r = n && _t(t),
                    n = n && ie(t, i, n, "border-box" === T.css(t, "boxSizing", !1, r), r);
                return n && (r = h.exec(e)) && "px" !== (r[3] || "px") && (t.style[i] = e, e = T.css(t, i)), re(0, e, n)
            }
        }
    }), T.cssHooks.marginLeft = Zt(m.reliableMarginLeft, function(t, e) {
        if (e) return (parseFloat(E(t, "marginLeft")) || t.getBoundingClientRect().left - gt(t, {
            marginLeft: 0
        }, function() {
            return t.getBoundingClientRect().left
        })) + "px"
    }), T.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        T.cssHooks[i + o] = {
            expand: function(t) {
                for (var e = 0, n = {}, r = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) n[i + u[e] + o] = r[e] || r[e - 2] || r[0];
                return n
            }
        }, Kt.test(i) || (T.cssHooks[i + o].set = re)
    }), T.fn.extend({
        css: function(t, e) {
            return f(this, function(t, e, n) {
                var r, i, o = {},
                    s = 0;
                if (T.isArray(e)) {
                    for (r = _t(t), i = e.length; s < i; s++) o[e[s]] = T.css(t, e[s], !1, r);
                    return o
                }
                return void 0 !== n ? T.style(t, e, n) : T.css(t, e)
            }, t, e, 1 < arguments.length)
        }
    }), ((T.Tween = A).prototype = {
        constructor: A,
        init: function(t, e, n, r, i, o) {
            this.elem = t, this.prop = n, this.easing = i || T.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = r, this.unit = o || (T.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = A.propHooks[this.prop];
            return (t && t.get ? t : A.propHooks._default).get(this)
        },
        run: function(t) {
            var e, n = A.propHooks[this.prop];
            return this.options.duration ? this.pos = e = T.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), (n && n.set ? n : A.propHooks._default).set(this), this
        }
    }).init.prototype = A.prototype, (A.propHooks = {
        _default: {
            get: function(t) {
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (t = T.css(t.elem, t.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(t) {
                T.fx.step[t.prop] ? T.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[T.cssProps[t.prop]] && !T.cssHooks[t.prop] ? t.elem[t.prop] = t.now : T.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }).scrollTop = A.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, T.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, T.fx = A.prototype.init, T.fx.step = {};
    var D, C, N, se = /^(?:toggle|show|hide)$/,
        ae = /queueHooks$/;

    function le() {
        C && (x.requestAnimationFrame(le), T.fx.tick())
    }

    function ue() {
        return x.setTimeout(function() {
            D = void 0
        }), D = T.now()
    }

    function ce(t, e) {
        var n, r = 0,
            i = {
                height: t
            };
        for (e = e ? 1 : 0; r < 4; r += 2 - e) i["margin" + (n = u[r])] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t), i
    }

    function fe(t, e, n) {
        for (var r, i = (B.tweeners[e] || []).concat(B.tweeners["*"]), o = 0, s = i.length; o < s; o++)
            if (r = i[o].call(n, e, t)) return r
    }

    function B(i, t, e) {
        var n, o, r, s, a, l, u, c = 0,
            f = B.prefilters.length,
            h = T.Deferred().always(function() {
                delete p.elem
            }),
            p = function() {
                if (o) return !1;
                for (var t = D || ue(), t = Math.max(0, d.startTime + d.duration - t), e = 1 - (t / d.duration || 0), n = 0, r = d.tweens.length; n < r; n++) d.tweens[n].run(e);
                return h.notifyWith(i, [d, e, t]), e < 1 && r ? t : (h.resolveWith(i, [d]), !1)
            },
            d = h.promise({
                elem: i,
                props: T.extend({}, t),
                opts: T.extend(!0, {
                    specialEasing: {},
                    easing: T.easing._default
                }, e),
                originalProperties: t,
                originalOptions: e,
                startTime: D || ue(),
                duration: e.duration,
                tweens: [],
                createTween: function(t, e) {
                    e = T.Tween(i, d.opts, t, e, d.opts.specialEasing[t] || d.opts.easing);
                    return d.tweens.push(e), e
                },
                stop: function(t) {
                    var e = 0,
                        n = t ? d.tweens.length : 0;
                    if (!o) {
                        for (o = !0; e < n; e++) d.tweens[e].run(1);
                        t ? (h.notifyWith(i, [d, 1, 0]), h.resolveWith(i, [d, t])) : h.rejectWith(i, [d, t])
                    }
                    return this
                }
            }),
            m = d.props,
            g = m,
            w = d.opts.specialEasing;
        for (r in g)
            if (s = T.camelCase(r), a = w[s], l = g[r], T.isArray(l) && (a = l[1], l = g[r] = l[0]), r !== s && (g[s] = l, delete g[r]), u = T.cssHooks[s], u && "expand" in u)
                for (r in l = u.expand(l), delete g[s], l) r in g || (g[r] = l[r], w[r] = a);
            else w[s] = a;
        for (; c < f; c++)
            if (n = B.prefilters[c].call(d, i, m, d.opts)) return T.isFunction(n.stop) && (T._queueHooks(d.elem, d.opts.queue).stop = T.proxy(n.stop, n)), n;
        return T.map(m, fe, d), T.isFunction(d.opts.start) && d.opts.start.call(i, d), T.fx.timer(T.extend(p, {
            elem: i,
            anim: d,
            queue: d.opts.queue
        })), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always)
    }
    T.Animation = T.extend(B, {
        tweeners: {
            "*": [function(t, e) {
                var n = this.createTween(t, e);
                return wt(n.elem, t, h.exec(e), n), n
            }]
        },
        tweener: function(t, e) {
            for (var n, r = 0, i = (t = T.isFunction(t) ? (e = t, ["*"]) : t.match(S)).length; r < i; r++) n = t[r], B.tweeners[n] = B.tweeners[n] || [], B.tweeners[n].unshift(e)
        },
        prefilters: [function(t, e, n) {
            var r, i, o, s, a, l, u, c = "width" in e || "height" in e,
                f = this,
                h = {},
                p = t.style,
                d = t.nodeType && mt(t),
                m = w.get(t, "fxshow");
            for (r in n.queue || (null == (s = T._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                    s.unqueued || a()
                }), s.unqueued++, f.always(function() {
                    f.always(function() {
                        s.unqueued--, T.queue(t, "fx").length || s.empty.fire()
                    })
                })), e)
                if (i = e[r], se.test(i)) {
                    if (delete e[r], o = o || "toggle" === i, i === (d ? "hide" : "show")) {
                        if ("show" !== i || !m || void 0 === m[r]) continue;
                        d = !0
                    }
                    h[r] = m && m[r] || T.style(t, r)
                }
            if ((l = !T.isEmptyObject(e)) || !T.isEmptyObject(h))
                for (r in c && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = m && m.display) && (u = w.get(t, "display")), "none" === (c = T.css(t, "display")) && (u ? c = u : (g([t], !0), u = t.style.display || u, c = T.css(t, "display"), g([t]))), "inline" === c || "inline-block" === c && null != u) && "none" === T.css(t, "float") && (l || (f.done(function() {
                        p.display = u
                    }), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block"), n.overflow && (p.overflow = "hidden", f.always(function() {
                        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                    })), l = !1, h) l || (m ? "hidden" in m && (d = m.hidden) : m = w.access(t, "fxshow", {
                    display: u
                }), o && (m.hidden = !d), d && g([t], !0), f.done(function() {
                    for (r in d || g([t]), w.remove(t, "fxshow"), h) T.style(t, r, h[r])
                })), l = fe(d ? m[r] : 0, r, f), r in m || (m[r] = l.start, d && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(t, e) {
            e ? B.prefilters.unshift(t) : B.prefilters.push(t)
        }
    }), T.speed = function(t, e, n) {
        var r = t && "object" == typeof t ? T.extend({}, t) : {
            complete: n || !n && e || T.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !T.isFunction(e) && e
        };
        return T.fx.off || k.hidden ? r.duration = 0 : "number" != typeof r.duration && (r.duration in T.fx.speeds ? r.duration = T.fx.speeds[r.duration] : r.duration = T.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            T.isFunction(r.old) && r.old.call(this), r.queue && T.dequeue(this, r.queue)
        }, r
    }, T.fn.extend({
        fadeTo: function(t, e, n, r) {
            return this.filter(mt).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, r)
        },
        animate: function(e, t, n, r) {
            function i() {
                var t = B(this, T.extend({}, e), s);
                (o || w.get(this, "finish")) && t.stop(!0)
            }
            var o = T.isEmptyObject(e),
                s = T.speed(t, n, r);
            return i.finish = i, o || !1 === s.queue ? this.each(i) : this.queue(s.queue, i)
        },
        stop: function(i, t, o) {
            function s(t) {
                var e = t.stop;
                delete t.stop, e(o)
            }
            return "string" != typeof i && (o = t, t = i, i = void 0), t && !1 !== i && this.queue(i || "fx", []), this.each(function() {
                var t = !0,
                    e = null != i && i + "queueHooks",
                    n = T.timers,
                    r = w.get(this);
                if (e) r[e] && r[e].stop && s(r[e]);
                else
                    for (e in r) r[e] && r[e].stop && ae.test(e) && s(r[e]);
                for (e = n.length; e--;) n[e].elem !== this || null != i && n[e].queue !== i || (n[e].anim.stop(o), t = !1, n.splice(e, 1));
                !t && o || T.dequeue(this, i)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"), this.each(function() {
                var t, e = w.get(this),
                    n = e[s + "queue"],
                    r = e[s + "queueHooks"],
                    i = T.timers,
                    o = n ? n.length : 0;
                for (e.finish = !0, T.queue(this, s, []), r && r.stop && r.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === s && (i[t].anim.stop(!0), i.splice(t, 1));
                for (t = 0; t < o; t++) n[t] && n[t].finish && n[t].finish.call(this);
                delete e.finish
            })
        }
    }), T.each(["toggle", "show", "hide"], function(t, r) {
        var i = T.fn[r];
        T.fn[r] = function(t, e, n) {
            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(ce(r, !0), t, e, n)
        }
    }), T.each({
        slideDown: ce("show"),
        slideUp: ce("hide"),
        slideToggle: ce("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, r) {
        T.fn[t] = function(t, e, n) {
            return this.animate(r, t, e, n)
        }
    }), T.timers = [], T.fx.tick = function() {
        var t, e = 0,
            n = T.timers;
        for (D = T.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
        n.length || T.fx.stop(), D = void 0
    }, T.fx.timer = function(t) {
        T.timers.push(t), t() ? T.fx.start() : T.timers.pop()
    }, T.fx.interval = 13, T.fx.start = function() {
        C = C || (x.requestAnimationFrame ? x.requestAnimationFrame(le) : x.setInterval(T.fx.tick, T.fx.interval))
    }, T.fx.stop = function() {
        x.cancelAnimationFrame ? x.cancelAnimationFrame(C) : x.clearInterval(C), C = null
    }, T.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, T.fn.delay = function(r, t) {
        return r = T.fx && T.fx.speeds[r] || r, this.queue(t = t || "fx", function(t, e) {
            var n = x.setTimeout(t, r);
            e.stop = function() {
                x.clearTimeout(n)
            }
        })
    }, N = k.createElement("input"), e = k.createElement("select").appendChild(k.createElement("option")), N.type = "checkbox", m.checkOn = "" !== N.value, m.optSelected = e.selected, (N = k.createElement("input")).value = "t", N.type = "radio", m.radioValue = "t" === N.value;
    var he, O = T.expr.attrHandle,
        pe = (T.fn.extend({
            attr: function(t, e) {
                return f(this, T.attr, t, e, 1 < arguments.length)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    T.removeAttr(this, t)
                })
            }
        }), T.extend({
            attr: function(t, e, n) {
                var r, i, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? T.prop(t, e, n) : (1 === o && T.isXMLDoc(t) || (i = T.attrHooks[e.toLowerCase()] || (T.expr.match.bool.test(e) ? he : void 0)), void 0 !== n ? null === n ? void T.removeAttr(t, e) : i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : !(i && "get" in i && null !== (r = i.get(t, e))) && null == (r = T.find.attr(t, e)) ? void 0 : r)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        var n;
                        if (!m.radioValue && "radio" === e && T.nodeName(t, "input")) return n = t.value, t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            },
            removeAttr: function(t, e) {
                var n, r = 0,
                    i = e && e.match(S);
                if (i && 1 === t.nodeType)
                    for (; n = i[r++];) t.removeAttribute(n)
            }
        }), he = {
            set: function(t, e, n) {
                return !1 === e ? T.removeAttr(t, n) : t.setAttribute(n, n), n
            }
        }, T.each(T.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var s = O[e] || T.find.attr;
            O[e] = function(t, e, n) {
                var r, i, o = e.toLowerCase();
                return n || (i = O[o], O[o] = r, r = null != s(t, e, n) ? o : null, O[o] = i), r
            }
        }), /^(?:input|select|textarea|button)$/i),
        de = /^(?:a|area)$/i;

    function P(t) {
        return (t.match(S) || []).join(" ")
    }

    function j(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }
    T.fn.extend({
        prop: function(t, e) {
            return f(this, T.prop, t, e, 1 < arguments.length)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[T.propFix[t] || t]
            })
        }
    }), T.extend({
        prop: function(t, e, n) {
            var r, i, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && T.isXMLDoc(t) || (e = T.propFix[e] || e, i = T.propHooks[e]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : t[e] = n : i && "get" in i && null !== (r = i.get(t, e)) ? r : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = T.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : pe.test(t.nodeName) || de.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), m.optSelected || (T.propHooks.selected = {
        get: function(t) {
            t = t.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(t) {
            t = t.parentNode;
            t && (t.selectedIndex, t.parentNode) && t.parentNode.selectedIndex
        }
    }), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        T.propFix[this.toLowerCase()] = this
    }), T.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, s, a = 0;
            if (T.isFunction(e)) return this.each(function(t) {
                T(this).addClass(e.call(this, t, j(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(S) || []; n = this[a++];)
                    if (s = j(n), r = 1 === n.nodeType && " " + P(s) + " ") {
                        for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        s !== (s = P(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, s, a = 0;
            if (T.isFunction(e)) return this.each(function(t) {
                T(this).removeClass(e.call(this, t, j(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(S) || []; n = this[a++];)
                    if (s = j(n), r = 1 === n.nodeType && " " + P(s) + " ") {
                        for (o = 0; i = t[o++];)
                            for (; - 1 < r.indexOf(" " + i + " ");) r = r.replace(" " + i + " ", " ");
                        s !== (s = P(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, e) {
            var o = typeof i;
            return "boolean" == typeof e && "string" == o ? e ? this.addClass(i) : this.removeClass(i) : T.isFunction(i) ? this.each(function(t) {
                T(this).toggleClass(i.call(this, t, j(this), e), e)
            }) : this.each(function() {
                var t, e, n, r;
                if ("string" == o)
                    for (e = 0, n = T(this), r = i.match(S) || []; t = r[e++];) n.hasClass(t) ? n.removeClass(t) : n.addClass(t);
                else void 0 !== i && "boolean" != o || ((t = j(this)) && w.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", !t && !1 !== i && w.get(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            for (var e, n = 0, r = " " + t + " "; e = this[n++];)
                if (1 === e.nodeType && -1 < (" " + P(j(e)) + " ").indexOf(r)) return !0;
            return !1
        }
    });
    var me = /\r/g,
        ge = (T.fn.extend({
            val: function(e) {
                var n, t, r, i = this[0];
                return arguments.length ? (r = T.isFunction(e), this.each(function(t) {
                    1 === this.nodeType && (null == (t = r ? e.call(this, t, T(this).val()) : e) ? t = "" : "number" == typeof t ? t += "" : T.isArray(t) && (t = T.map(t, function(t) {
                        return null == t ? "" : t + ""
                    })), (n = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, t, "value") || (this.value = t))
                })) : i ? (n = T.valHooks[i.type] || T.valHooks[i.nodeName.toLowerCase()]) && "get" in n && void 0 !== (t = n.get(i, "value")) ? t : "string" == typeof(t = i.value) ? t.replace(me, "") : null == t ? "" : t : void 0
            }
        }), T.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = T.find.attr(t, "value");
                        return null != e ? e : P(T.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, n = t.options, r = t.selectedIndex, i = "select-one" === t.type, o = i ? null : [], s = i ? r + 1 : n.length, a = r < 0 ? s : i ? r : 0; a < s; a++)
                            if (((e = n[a]).selected || a === r) && !e.disabled && (!e.parentNode.disabled || !T.nodeName(e.parentNode, "optgroup"))) {
                                if (e = T(e).val(), i) return e;
                                o.push(e)
                            }
                        return o
                    },
                    set: function(t, e) {
                        for (var n, r, i = t.options, o = T.makeArray(e), s = i.length; s--;)((r = i[s]).selected = -1 < T.inArray(T.valHooks.option.get(r), o)) && (n = !0);
                        return n || (t.selectedIndex = -1), o
                    }
                }
            }
        }), T.each(["radio", "checkbox"], function() {
            T.valHooks[this] = {
                set: function(t, e) {
                    if (T.isArray(e)) return t.checked = -1 < T.inArray(T(t).val(), e)
                }
            }, m.checkOn || (T.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        }), /^(?:focusinfocus|focusoutblur)$/),
        L = (T.extend(T.event, {
            trigger: function(t, e, n, r) {
                var i, o, s, a, l, u, c = [n || k],
                    f = F.call(t, "type") ? t.type : t,
                    h = F.call(t, "namespace") ? t.namespace.split(".") : [],
                    p = o = n = n || k;
                if (3 !== n.nodeType && 8 !== n.nodeType && !ge.test(f + T.event.triggered) && (-1 < f.indexOf(".") && (f = (h = f.split(".")).shift(), h.sort()), a = f.indexOf(":") < 0 && "on" + f, (t = t[T.expando] ? t : new T.Event(f, "object" == typeof t && t)).isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), e = null == e ? [t] : T.makeArray(e, [t]), u = T.event.special[f] || {}, r || !u.trigger || !1 !== u.trigger.apply(n, e))) {
                    if (!r && !u.noBubble && !T.isWindow(n)) {
                        for (s = u.delegateType || f, ge.test(s + f) || (p = p.parentNode); p; p = p.parentNode) c.push(p), o = p;
                        o === (n.ownerDocument || k) && c.push(o.defaultView || o.parentWindow || x)
                    }
                    for (i = 0;
                        (p = c[i++]) && !t.isPropagationStopped();) t.type = 1 < i ? s : u.bindType || f, (l = (w.get(p, "events") || {})[t.type] && w.get(p, "handle")) && l.apply(p, e), (l = a && p[a]) && l.apply && ft(p) && (t.result = l.apply(p, e), !1 === t.result) && t.preventDefault();
                    return t.type = f, r || t.isDefaultPrevented() || u._default && !1 !== u._default.apply(c.pop(), e) || !ft(n) || a && T.isFunction(n[f]) && !T.isWindow(n) && ((o = n[a]) && (n[a] = null), n[T.event.triggered = f](), T.event.triggered = void 0, o) && (n[a] = o), t.result
                }
            },
            simulate: function(t, e, n) {
                n = T.extend(new T.Event, n, {
                    type: t,
                    isSimulated: !0
                });
                T.event.trigger(n, null, e)
            }
        }), T.fn.extend({
            trigger: function(t, e) {
                return this.each(function() {
                    T.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var n = this[0];
                if (n) return T.event.trigger(t, e, n, !0)
            }
        }), T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, n) {
            T.fn[n] = function(t, e) {
                return 0 < arguments.length ? this.on(n, null, t, e) : this.trigger(n)
            }
        }), T.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), m.focusin = "onfocusin" in x, m.focusin || T.each({
            focus: "focusin",
            blur: "focusout"
        }, function(n, r) {
            function i(t) {
                T.event.simulate(r, t.target, T.event.fix(t))
            }
            T.event.special[r] = {
                setup: function() {
                    var t = this.ownerDocument || this,
                        e = w.access(t, r);
                    e || t.addEventListener(n, i, !0), w.access(t, r, (e || 0) + 1)
                },
                teardown: function() {
                    var t = this.ownerDocument || this,
                        e = w.access(t, r) - 1;
                    e ? w.access(t, r, e) : (t.removeEventListener(n, i, !0), w.remove(t, r))
                }
            }
        }), x.location),
        we = T.now(),
        ye = /\?/,
        be = (T.parseXML = function(t) {
            var e;
            if (!t || "string" != typeof t) return null;
            try {
                e = (new x.DOMParser).parseFromString(t, "text/xml")
            } catch (t) {
                e = void 0
            }
            return e && !e.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + t), e
        }, /\[\]$/),
        ve = /\r?\n/g,
        xe = /^(?:submit|button|image|reset|file)$/i,
        ke = /^(?:input|select|textarea|keygen)/i;
    T.param = function(t, e) {
        function n(t, e) {
            e = T.isFunction(e) ? e() : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == e ? "" : e)
        }
        var r, i = [];
        if (T.isArray(t) || t.jquery && !T.isPlainObject(t)) T.each(t, function() {
            n(this.name, this.value)
        });
        else
            for (r in t) ! function n(r, t, i, o) {
                if (T.isArray(t)) T.each(t, function(t, e) {
                    i || be.test(r) ? o(r, e) : n(r + "[" + ("object" == typeof e && null != e ? t : "") + "]", e, i, o)
                });
                else if (i || "object" !== T.type(t)) o(r, t);
                else
                    for (var e in t) n(r + "[" + e + "]", t[e], i, o)
            }(r, t[r], e, n);
        return i.join("&")
    }, T.fn.extend({
        serialize: function() {
            return T.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = T.prop(this, "elements");
                return t ? T.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !T(this).is(":disabled") && ke.test(this.nodeName) && !xe.test(t) && (this.checked || !bt.test(t))
            }).map(function(t, e) {
                var n = T(this).val();
                return null == n ? null : T.isArray(n) ? T.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(ve, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(ve, "\r\n")
                }
            }).get()
        }
    });
    var Te = /%20/g,
        Se = /#.*$/,
        Ee = /([?&])_=[^&]*/,
        Ae = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        De = /^(?:GET|HEAD)$/,
        Ce = /^\/\//,
        Ne = {},
        Be = {},
        Oe = "*/".concat("*"),
        Pe = k.createElement("a");

    function je(o) {
        return function(t, e) {
            "string" != typeof t && (e = t, t = "*");
            var n, r = 0,
                i = t.toLowerCase().match(S) || [];
            if (T.isFunction(e))
                for (; n = i[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(e)) : (o[n] = o[n] || []).push(e)
        }
    }

    function Le(e, r, i, o) {
        var s = {},
            a = e === Be;

        function l(t) {
            var n;
            return s[t] = !0, T.each(e[t] || [], function(t, e) {
                e = e(r, i, o);
                return "string" != typeof e || a || s[e] ? a ? !(n = e) : void 0 : (r.dataTypes.unshift(e), l(e), !1)
            }), n
        }
        return l(r.dataTypes[0]) || !s["*"] && l("*")
    }

    function Re(t, e) {
        var n, r, i = T.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((i[n] ? t : r = r || {})[n] = e[n]);
        return r && T.extend(!0, t, r), t
    }
    Pe.href = L.href, T.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: L.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(L.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Oe,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": T.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? Re(Re(t, T.ajaxSettings), e) : Re(T.ajaxSettings, t)
        },
        ajaxPrefilter: je(Ne),
        ajaxTransport: je(Be),
        ajax: function(t, e) {
            "object" == typeof t && (e = t, t = void 0);
            var l, u, c, n, f, h, p, r, d = T.ajaxSetup({}, e = e || {}),
                m = d.context || d,
                g = d.context && (m.nodeType || m.jquery) ? T(m) : T.event,
                w = T.Deferred(),
                y = T.Callbacks("once memory"),
                b = d.statusCode || {},
                i = {},
                o = {},
                s = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (h) {
                            if (!n)
                                for (n = {}; e = Ae.exec(c);) n[e[1].toLowerCase()] = e[2];
                            e = n[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return h ? c : null
                    },
                    setRequestHeader: function(t, e) {
                        return null == h && (t = o[t.toLowerCase()] = o[t.toLowerCase()] || t, i[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return null == h && (d.mimeType = t), this
                    },
                    statusCode: function(t) {
                        if (t)
                            if (h) v.always(t[v.status]);
                            else
                                for (var e in t) b[e] = [b[e], t[e]];
                        return this
                    },
                    abort: function(t) {
                        t = t || s;
                        return l && l.abort(t), a(0, t), this
                    }
                };
            if (w.promise(v), d.url = ((t || d.url || L.href) + "").replace(Ce, L.protocol + "//"), d.type = e.method || e.type || d.method || d.type, d.dataTypes = (d.dataType || "*").toLowerCase().match(S) || [""], null == d.crossDomain) {
                t = k.createElement("a");
                try {
                    t.href = d.url, t.href = t.href, d.crossDomain = Pe.protocol + "//" + Pe.host != t.protocol + "//" + t.host
                } catch (t) {
                    d.crossDomain = !0
                }
            }
            if (d.data && d.processData && "string" != typeof d.data && (d.data = T.param(d.data, d.traditional)), Le(Ne, d, e, v), !h) {
                for (r in (p = T.event && d.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !De.test(d.type), u = d.url.replace(Se, ""), d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(Te, "+")) : (t = d.url.slice(u.length), d.data && (u += (ye.test(u) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (u = u.replace(Ee, "$1"), t = (ye.test(u) ? "&" : "?") + "_=" + we++ + t), d.url = u + t), d.ifModified && (T.lastModified[u] && v.setRequestHeader("If-Modified-Since", T.lastModified[u]), T.etag[u]) && v.setRequestHeader("If-None-Match", T.etag[u]), (d.data && d.hasContent && !1 !== d.contentType || e.contentType) && v.setRequestHeader("Content-Type", d.contentType), v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Oe + "; q=0.01" : "") : d.accepts["*"]), d.headers) v.setRequestHeader(r, d.headers[r]);
                if (d.beforeSend && (!1 === d.beforeSend.call(m, v, d) || h)) return v.abort();
                if (s = "abort", y.add(d.complete), v.done(d.success), v.fail(d.error), l = Le(Be, d, e, v)) {
                    if (v.readyState = 1, p && g.trigger("ajaxSend", [v, d]), h) return v;
                    d.async && 0 < d.timeout && (f = x.setTimeout(function() {
                        v.abort("timeout")
                    }, d.timeout));
                    try {
                        h = !1, l.send(i, a)
                    } catch (t) {
                        if (h) throw t;
                        a(-1, t)
                    }
                } else a(-1, "No Transport")
            }
            return v;

            function a(t, e, n, r) {
                var i, o, s, a = e;
                h || (h = !0, f && x.clearTimeout(f), l = void 0, c = r || "", v.readyState = 0 < t ? 4 : 0, r = 200 <= t && t < 300 || 304 === t, n && (s = function(t, e, n) {
                    for (var r, i, o, s, a = t.contents, l = t.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in a)
                            if (a[i] && a[i].test(r)) {
                                l.unshift(i);
                                break
                            }
                    if (l[0] in n) o = l[0];
                    else {
                        for (i in n) {
                            if (!l[0] || t.converters[i + " " + l[0]]) {
                                o = i;
                                break
                            }
                            s = s || i
                        }
                        o = o || s
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o]
                }(d, v, n)), s = function(t, e, n, r) {
                    var i, o, s, a, l, u = {},
                        c = t.dataTypes.slice();
                    if (c[1])
                        for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
                    for (o = c.shift(); o;)
                        if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                        if (!(s = u[l + " " + o] || u["* " + o]))
                            for (i in u)
                                if (a = i.split(" "), a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                    !0 === s ? s = u[i] : !0 !== u[i] && (o = a[0], c.unshift(a[1]));
                                    break
                                }
                        if (!0 !== s)
                            if (s && t.throws) e = s(e);
                            else try {
                                e = s(e)
                            } catch (t) {
                                return {
                                    state: "parsererror",
                                    error: s ? t : "No conversion from " + l + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: e
                    }
                }(d, s, v, r), r ? (d.ifModified && ((n = v.getResponseHeader("Last-Modified")) && (T.lastModified[u] = n), n = v.getResponseHeader("etag")) && (T.etag[u] = n), 204 === t || "HEAD" === d.type ? a = "nocontent" : 304 === t ? a = "notmodified" : (a = s.state, i = s.data, r = !(o = s.error))) : (o = a, !t && a || (a = "error", t < 0 && (t = 0))), v.status = t, v.statusText = (e || a) + "", r ? w.resolveWith(m, [i, a, v]) : w.rejectWith(m, [v, a, o]), v.statusCode(b), b = void 0, p && g.trigger(r ? "ajaxSuccess" : "ajaxError", [v, d, r ? i : o]), y.fireWith(m, [v, a]), p && (g.trigger("ajaxComplete", [v, d]), --T.active || T.event.trigger("ajaxStop")))
            }
        },
        getJSON: function(t, e, n) {
            return T.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return T.get(t, void 0, e, "script")
        }
    }), T.each(["get", "post"], function(t, i) {
        T[i] = function(t, e, n, r) {
            return T.isFunction(e) && (r = r || n, n = e, e = void 0), T.ajax(T.extend({
                url: t,
                type: i,
                dataType: r,
                data: e,
                success: n
            }, T.isPlainObject(t) && t))
        }
    }), T._evalUrl = function(t) {
        return T.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, T.fn.extend({
        wrapAll: function(t) {
            return this[0] && (T.isFunction(t) && (t = t.call(this[0])), t = T(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this
        },
        wrapInner: function(n) {
            return T.isFunction(n) ? this.each(function(t) {
                T(this).wrapInner(n.call(this, t))
            }) : this.each(function() {
                var t = T(this),
                    e = t.contents();
                e.length ? e.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(e) {
            var n = T.isFunction(e);
            return this.each(function(t) {
                T(this).wrapAll(n ? e.call(this, t) : e)
            })
        },
        unwrap: function(t) {
            return this.parent(t).not("body").each(function() {
                T(this).replaceWith(this.childNodes)
            }), this
        }
    }), T.expr.pseudos.hidden = function(t) {
        return !T.expr.pseudos.visible(t)
    }, T.expr.pseudos.visible = function(t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, T.ajaxSettings.xhr = function() {
        try {
            return new x.XMLHttpRequest
        } catch (t) {}
    };
    var Ie = {
            0: 200,
            1223: 204
        },
        R = T.ajaxSettings.xhr(),
        Me = (m.cors = !!R && "withCredentials" in R, m.ajax = R = !!R, T.ajaxTransport(function(i) {
            var o, s;
            if (m.cors || R && !i.crossDomain) return {
                send: function(t, e) {
                    var n, r = i.xhr();
                    if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                        for (n in i.xhrFields) r[n] = i.xhrFields[n];
                    for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t) r.setRequestHeader(n, t[n]);
                    o = function(t) {
                        return function() {
                            o && (o = s = r.onload = r.onerror = r.onabort = r.onreadystatechange = null, "abort" === t ? r.abort() : "error" === t ? "number" != typeof r.status ? e(0, "error") : e(r.status, r.statusText) : e(Ie[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }, r.onload = o(), s = r.onerror = o("error"), void 0 !== r.onabort ? r.onabort = s : r.onreadystatechange = function() {
                        4 === r.readyState && x.setTimeout(function() {
                            o && s()
                        })
                    }, o = o("abort");
                    try {
                        r.send(i.hasContent && i.data || null)
                    } catch (t) {
                        if (o) throw t
                    }
                },
                abort: function() {
                    o && o()
                }
            }
        }), T.ajaxPrefilter(function(t) {
            t.crossDomain && (t.contents.script = !1)
        }), T.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return T.globalEval(t), t
                }
            }
        }), T.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), T.ajaxTransport("script", function(n) {
            var r, i;
            if (n.crossDomain) return {
                send: function(t, e) {
                    r = T("<script>").prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", i = function(t) {
                        r.remove(), i = null, t && e("error" === t.type ? 404 : 200, t.type)
                    }), k.head.appendChild(r[0])
                },
                abort: function() {
                    i && i()
                }
            }
        }), []),
        qe = /(=)\?(?=&|$)|\?\?/;

    function He(t) {
        return T.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    T.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Me.pop() || T.expando + "_" + we++;
            return this[t] = !0, t
        }
    }), T.ajaxPrefilter("json jsonp", function(t, e, n) {
        var r, i, o, s = !1 !== t.jsonp && (qe.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && qe.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = T.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(qe, "$1" + r) : !1 !== t.jsonp && (t.url += (ye.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
            return o || T.error(r + " was not called"), o[0]
        }, t.dataTypes[0] = "json", i = x[r], x[r] = function() {
            o = arguments
        }, n.always(function() {
            void 0 === i ? T(x).removeProp(r) : x[r] = i, t[r] && (t.jsonpCallback = e.jsonpCallback, Me.push(r)), o && T.isFunction(i) && i(o[0]), o = i = void 0
        }), "script"
    }), m.createHTMLDocument = ((t = k.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === t.childNodes.length), T.parseHTML = function(t, e, n) {
        var r;
        return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (m.createHTMLDocument ? ((r = (e = k.implementation.createHTMLDocument("")).createElement("base")).href = k.location.href, e.head.appendChild(r)) : e = k), r = !n && [], (n = J.exec(t)) ? [e.createElement(n[1])] : (n = St([t], e, r), r && r.length && T(r).remove(), T.merge([], n.childNodes)))
    }, T.fn.load = function(t, e, n) {
        var r, i, o, s = this,
            a = t.indexOf(" ");
        return -1 < a && (r = P(t.slice(a)), t = t.slice(0, a)), T.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (i = "POST"), 0 < s.length && T.ajax({
            url: t,
            type: i || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments, s.html(r ? T("<div>").append(T.parseHTML(t)).find(r) : t)
        }).always(n && function(t, e) {
            s.each(function() {
                n.apply(this, o || [t.responseText, e, t])
            })
        }), this
    }, T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        T.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), T.expr.pseudos.animated = function(e) {
        return T.grep(T.timers, function(t) {
            return e === t.elem
        }).length
    }, T.offset = {
        setOffset: function(t, e, n) {
            var r, i, o, s, a = T.css(t, "position"),
                l = T(t),
                u = {};
            "static" === a && (t.style.position = "relative"), o = l.offset(), r = T.css(t, "top"), s = T.css(t, "left"), a = ("absolute" === a || "fixed" === a) && -1 < (r + s).indexOf("auto") ? (i = (a = l.position()).top, a.left) : (i = parseFloat(r) || 0, parseFloat(s) || 0), null != (e = T.isFunction(e) ? e.call(t, n, T.extend({}, o)) : e).top && (u.top = e.top - o.top + i), null != e.left && (u.left = e.left - o.left + a), "using" in e ? e.using.call(t, u) : l.css(u)
        }
    }, T.fn.extend({
        offset: function(e) {
            var t, n, r;
            return arguments.length ? void 0 === e ? this : this.each(function(t) {
                T.offset.setOffset(this, e, t)
            }) : (r = this[0]) ? r.getClientRects().length ? (n = r.getBoundingClientRect()).width || n.height ? (t = He(r = r.ownerDocument), r = r.documentElement, {
                top: n.top + t.pageYOffset - r.clientTop,
                left: n.left + t.pageXOffset - r.clientLeft
            }) : n : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            var t, e, n, r;
            if (this[0]) return n = this[0], r = {
                top: 0,
                left: 0
            }, "fixed" === T.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), r = {
                top: (r = T.nodeName(t[0], "html") ? r : t.offset()).top + T.css(t[0], "borderTopWidth", !0),
                left: r.left + T.css(t[0], "borderLeftWidth", !0)
            }), {
                top: e.top - r.top - T.css(n, "marginTop", !0),
                left: e.left - r.left - T.css(n, "marginLeft", !0)
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && "static" === T.css(t, "position");) t = t.offsetParent;
                return t || Et
            })
        }
    }), T.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, i) {
        var o = "pageYOffset" === i;
        T.fn[e] = function(t) {
            return f(this, function(t, e, n) {
                var r = He(t);
                return void 0 === n ? r ? r[i] : t[e] : void(r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : t[e] = n)
            }, e, t, arguments.length)
        }
    }), T.each(["top", "left"], function(t, n) {
        T.cssHooks[n] = Zt(m.pixelPosition, function(t, e) {
            if (e) return e = E(t, n), Wt.test(e) ? T(t).position()[n] + "px" : e
        })
    }), T.each({
        Height: "height",
        Width: "width"
    }, function(s, a) {
        T.each({
            padding: "inner" + s,
            content: a,
            "": "outer" + s
        }, function(r, o) {
            T.fn[o] = function(t, e) {
                var n = arguments.length && (r || "boolean" != typeof t),
                    i = r || (!0 === t || !0 === e ? "margin" : "border");
                return f(this, function(t, e, n) {
                    var r;
                    return T.isWindow(t) ? 0 === o.indexOf("outer") ? t["inner" + s] : t.document.documentElement["client" + s] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + s], r["scroll" + s], t.body["offset" + s], r["offset" + s], r["client" + s])) : void 0 === n ? T.css(t, e, i) : T.style(t, e, n, i)
                }, a, n ? t : void 0, n)
            }
        })
    }), T.fn.extend({
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, r) {
            return this.on(e, t, n, r)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    }), T.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
        return T
    });
    var Ve = x.jQuery,
        Fe = x.$;
    return T.noConflict = function(t) {
        return x.$ === T && (x.$ = Fe), t && x.jQuery === T && (x.jQuery = Ve), T
    }, I || (x.jQuery = x.$ = T), T
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Sweetalert2 = e()
}(this, function() {
    "use strict";

    function L(t) {
        return (L = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function k(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function T(t, e, n) {
        e && k(t.prototype, e), n && k(t, n)
    }

    function u() {
        return (u = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n, r = arguments[e];
                for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }).apply(this, arguments)
    }

    function S(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && i(t, e)
    }

    function r(t) {
        return (r = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function i(t, e) {
        return (i = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function E(t, e, n) {
        return (E = function() {
            if ("undefined" != typeof Reflect && Reflect.construct && !Reflect.construct.sham) {
                if ("function" == typeof Proxy) return 1;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 1
                } catch (t) {}
            }
        }() ? Reflect.construct : function(t, e, n) {
            var r = [null];
            r.push.apply(r, e);
            e = new(Function.bind.apply(t, r));
            return n && i(e, n.prototype), e
        }).apply(null, arguments)
    }

    function A(t, e) {
        if (!e || "object" != typeof e && "function" != typeof e) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        return e
    }

    function D(t, e, n) {
        return (D = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
            var t = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = r(t)););
                return t
            }(t, e);
            if (t) return (t = Object.getOwnPropertyDescriptor(t, e)).get ? t.get.call(n) : t.value
        })(t, e, n || t)
    }

    function W(t) {
        return "function" == typeof t ? t() : t
    }

    function Y(t) {
        return t && Promise.resolve(t) === t
    }

    function C(t) {
        var e, n = {};
        for (e in t) n[t[e]] = "swal2-" + t[e];
        return n
    }

    function Z(t) {
        var e;
        t.focus(), "file" !== t.type && (e = t.value, t.value = "", t.value = e)
    }

    function R(t, e) {
        for (var n = 0; n < t.childNodes.length; n++)
            if (H(t.childNodes[n], e)) return t.childNodes[n]
    }

    function I(t) {
        return t && (t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }

    function N() {
        var t = G();
        return s(t.querySelectorAll("." + q.icon))
    }

    function B() {
        return e(q.title)
    }

    function h() {
        return e(q.content)
    }

    function O() {
        return e(q.image)
    }

    function X() {
        return e(q["validation-message"])
    }

    function c() {
        return e(q.confirm)
    }

    function f() {
        return e(q.cancel)
    }

    function p() {
        return e(q.actions)
    }

    function J() {
        var t = s(G().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(t, e) {
                return t = parseInt(t.getAttribute("tabindex")), (e = parseInt(e.getAttribute("tabindex"))) < t ? 1 : t < e ? -1 : 0
            }),
            e = s(G().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]')).filter(function(t) {
                return "-1" !== t.getAttribute("tabindex")
            });
        return function(t) {
            for (var e = [], n = 0; n < t.length; n++) - 1 === e.indexOf(t[n]) && e.push(t[n]);
            return e
        }(t.concat(e)).filter(I)
    }

    function P() {
        return "undefined" == typeof window || "undefined" == typeof document
    }

    function t(t, e) {
        var n, r = U(),
            i = G();
        i && (null !== t && "function" == typeof t && t(i), F(i, q.show), V(i, q.hide), n = function() {
            var t;
            st() ? j(e) : (new Promise(function(t) {
                var e = window.scrollX,
                    n = window.scrollY;
                K.restoreFocusTimeout = setTimeout(function() {
                    K.previousActiveElement && K.previousActiveElement.focus ? (K.previousActiveElement.focus(), K.previousActiveElement = null) : document.body && document.body.focus(), t()
                }, kt), void 0 !== e && void 0 !== n && window.scrollTo(e, n)
            }).then(function() {
                return j(e)
            }), K.keydownTarget.removeEventListener("keydown", K.keydownHandler, {
                capture: K.keydownListenerCapture
            }), K.keydownHandlerAdded = !1), r.parentNode && r.parentNode.removeChild(r), F([document.documentElement, document.body], [q.shown, q["height-auto"], q["no-backdrop"], q["toast-shown"], q["toast-column"]]), ot() && (null !== l.previousBodyPadding && (document.body.style.paddingRight = l.previousBodyPadding, l.previousBodyPadding = null), H(document.body, q.iosfix) && (t = parseInt(document.body.style.top, 10), F(document.body, q.iosfix), document.body.style.top = "", document.body.scrollTop = -1 * t), "undefined" != typeof window && yt() && window.removeEventListener("resize", bt), s(document.body.children).forEach(function(t) {
                t.hasAttribute("data-previous-aria-hidden") ? (t.setAttribute("aria-hidden", t.getAttribute("data-previous-aria-hidden")), t.removeAttribute("data-previous-aria-hidden")) : t.removeAttribute("aria-hidden")
            }))
        }, $ && !H(i, q.noanimation) ? i.addEventListener($, function t() {
            i.removeEventListener($, t), H(i, q.hide) && n()
        }) : n())
    }

    function j(t) {
        null !== t && "function" == typeof t && setTimeout(function() {
            t()
        })
    }
    var s = function(t) {
            return Array.prototype.slice.call(t)
        },
        M = function(t) {},
        Q = [],
        n = function(t) {
            -1 === Q.indexOf(t) && (Q.push(t), M(t))
        },
        tt = Object.freeze({
            cancel: "cancel",
            backdrop: "overlay",
            close: "close",
            esc: "esc",
            timer: "timer"
        }),
        q = C(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "toast", "toast-shown", "toast-column", "fade", "show", "hide", "noanimation", "close", "title", "header", "content", "actions", "confirm", "cancel", "footer", "icon", "icon-text", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "validation-message", "progresssteps", "activeprogressstep", "progresscircle", "progressline", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl"]),
        a = C(["success", "warning", "info", "question", "error"]),
        l = {
            previousBodyPadding: null
        },
        H = function(t, e) {
            return t.classList.contains(e)
        },
        et = function(t, e, n) {
            t && e && (e = "string" == typeof e ? e.split(/\s+/).filter(Boolean) : e).forEach(function(e) {
                t.forEach ? t.forEach(function(t) {
                    n ? t.classList.add(e) : t.classList.remove(e)
                }) : n ? t.classList.add(e) : t.classList.remove(e)
            })
        },
        V = function(t, e) {
            et(t, e, !0)
        },
        F = function(t, e) {
            et(t, e, !1)
        },
        _ = function(t) {
            t.style.opacity = "", t.style.display = t.id === q.content ? "block" : "flex"
        },
        z = function(t) {
            t.style.opacity = "", t.style.display = "none"
        },
        U = function() {
            return document.body.querySelector("." + q.container)
        },
        e = function(t) {
            var e = U();
            return e ? e.querySelector("." + t) : null
        },
        G = function() {
            return e(q.popup)
        },
        nt = function() {
            return e(q.progresssteps)
        },
        rt = function() {
            return e(q.footer)
        },
        it = function() {
            return e(q.close)
        },
        ot = function() {
            return !st() && !document.body.classList.contains(q["no-backdrop"])
        },
        st = function() {
            return document.body.classList.contains(q["toast-shown"])
        },
        at = '\n <div aria-labelledby="'.concat(q.title, '" aria-describedby="').concat(q.content, '" class="').concat(q.popup, '" tabindex="-1">\n   <div class="').concat(q.header, '">\n     <ul class="').concat(q.progresssteps, '"></ul>\n     <div class="').concat(q.icon, " ").concat(a.error, '">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n     </div>\n     <div class="').concat(q.icon, " ").concat(a.question, '">\n       <span class="').concat(q["icon-text"], '">?</span>\n      </div>\n     <div class="').concat(q.icon, " ").concat(a.warning, '">\n       <span class="').concat(q["icon-text"], '">!</span>\n      </div>\n     <div class="').concat(q.icon, " ").concat(a.info, '">\n       <span class="').concat(q["icon-text"], '">i</span>\n      </div>\n     <div class="').concat(q.icon, " ").concat(a.success, '">\n       <div class="swal2-success-circular-line-left"></div>\n       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n       <div class="swal2-success-circular-line-right"></div>\n     </div>\n     <img class="').concat(q.image, '" />\n     <h2 class="').concat(q.title, '" id="').concat(q.title, '"></h2>\n     <button type="button" class="').concat(q.close, '">×</button>\n   </div>\n   <div class="').concat(q.content, '">\n     <div id="').concat(q.content, '"></div>\n     <input class="').concat(q.input, '" />\n     <input type="file" class="').concat(q.file, '" />\n     <div class="').concat(q.range, '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat(q.select, '"></select>\n     <div class="').concat(q.radio, '"></div>\n     <label for="').concat(q.checkbox, '" class="').concat(q.checkbox, '">\n       <input type="checkbox" />\n       <span class="').concat(q.label, '"></span>\n     </label>\n     <textarea class="').concat(q.textarea, '"></textarea>\n     <div class="').concat(q["validation-message"], '" id="').concat(q["validation-message"], '"></div>\n   </div>\n   <div class="').concat(q.actions, '">\n     <button type="button" class="').concat(q.confirm, '">OK</button>\n     <button type="button" class="').concat(q.cancel, '">Cancel</button>\n   </div>\n   <div class="').concat(q.footer, '">\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, ""),
        lt = function(t) {
            var e, n, r, i, o, s, a, l, u, c, f = U();
            if (f && (f.parentNode.removeChild(f), F([document.documentElement, document.body], [q["no-backdrop"], q["toast-shown"], q["has-column"]])), !P()) return (f = document.createElement("div")).className = q.container, f.innerHTML = at, (e = "string" == typeof t.target ? document.querySelector(t.target) : t.target).appendChild(f), f = G(), l = h(), n = R(l, q.input), r = R(l, q.file), i = l.querySelector(".".concat(q.range, " input")), o = l.querySelector(".".concat(q.range, " output")), s = R(l, q.select), a = l.querySelector(".".concat(q.checkbox, " input")), l = R(l, q.textarea), f.setAttribute("role", t.toast ? "alert" : "dialog"), f.setAttribute("aria-live", t.toast ? "polite" : "assertive"), t.toast || f.setAttribute("aria-modal", "true"), "rtl" === window.getComputedStyle(e).direction && V(U(), q.rtl), n.oninput = c = function(t) {
                x.isVisible() && u !== t.target.value && x.resetValidationMessage(), u = t.target.value
            }, r.onchange = c, s.onchange = c, a.onchange = c, l.oninput = c, i.oninput = function(t) {
                c(t), o.value = i.value
            }, i.onchange = function(t) {
                c(t), i.nextSibling.value = i.value
            }, f
        },
        ut = function(t, e) {
            if (!t) return z(e);
            if (t instanceof HTMLElement) e.appendChild(t);
            else if ("object" === L(t))
                if (e.innerHTML = "", 0 in t)
                    for (var n = 0; n in t; n++) e.appendChild(t[n].cloneNode(!0));
                else e.appendChild(t.cloneNode(!0));
            else t && (e.innerHTML = t);
            _(e)
        },
        $ = function() {
            if (!P()) {
                var t, e = document.createElement("div"),
                    n = {
                        WebkitAnimation: "webkitAnimationEnd",
                        OAnimation: "oAnimationEnd oanimationend",
                        animation: "animationend"
                    };
                for (t in n)
                    if (n.hasOwnProperty(t) && void 0 !== e.style[t]) return n[t]
            }
            return !1
        }(),
        ct = function(t) {
            var e = p(),
                n = c(),
                r = f();
            (t.showConfirmButton || t.showCancelButton ? _ : z)(e), t.showCancelButton ? r.style.display = "inline-block" : z(r), t.showConfirmButton ? n.style.removeProperty("display") : z(n), n.innerHTML = t.confirmButtonText, r.innerHTML = t.cancelButtonText, n.setAttribute("aria-label", t.confirmButtonAriaLabel), r.setAttribute("aria-label", t.cancelButtonAriaLabel), n.className = q.confirm, V(n, t.confirmButtonClass), r.className = q.cancel, V(r, t.cancelButtonClass), t.buttonsStyling ? (V([n, r], q.styled), t.confirmButtonColor && (n.style.backgroundColor = t.confirmButtonColor), t.cancelButtonColor && (r.style.backgroundColor = t.cancelButtonColor), e = window.getComputedStyle(n).getPropertyValue("background-color"), n.style.borderLeftColor = e, n.style.borderRightColor = e) : (F([n, r], q.styled), n.style.backgroundColor = n.style.borderLeftColor = n.style.borderRightColor = "", r.style.backgroundColor = r.style.borderLeftColor = r.style.borderRightColor = "")
        },
        ft = function(t) {
            var e = h().querySelector("#" + q.content);
            t.html ? ut(t.html, e) : (t.text ? (e.textContent = t.text, _) : z)(e)
        },
        ht = function(t) {
            for (var e, n = N(), r = 0; r < n.length; r++) z(n[r]);
            t.type && (-1 !== Object.keys(a).indexOf(t.type) ? (e = x.getPopup().querySelector(".".concat(q.icon, ".").concat(a[t.type])), _(e), t.animation && V(e, "swal2-animate-".concat(t.type, "-icon"))) : 'Unknown type! Expected "success", "error", "warning", "info" or "question", got "'.concat(t.type, '"'))
        },
        pt = function(t) {
            var e = O();
            t.imageUrl ? (e.setAttribute("src", t.imageUrl), e.setAttribute("alt", t.imageAlt), _(e), t.imageWidth ? e.setAttribute("width", t.imageWidth) : e.removeAttribute("width"), t.imageHeight ? e.setAttribute("height", t.imageHeight) : e.removeAttribute("height"), e.className = q.image, t.imageClass && V(e, t.imageClass)) : z(e)
        },
        dt = function(r) {
            var i = nt(),
                o = parseInt(null === r.currentProgressStep ? x.getQueueStep() : r.currentProgressStep, 10);
            r.progressSteps && r.progressSteps.length ? (_(i), i.innerHTML = "", o >= r.progressSteps.length && M("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), r.progressSteps.forEach(function(t, e) {
                var n = document.createElement("li");
                V(n, q.progresscircle), n.innerHTML = t, e === o && V(n, q.activeprogressstep), i.appendChild(n), e !== r.progressSteps.length - 1 && (t = document.createElement("li"), V(t, q.progressline), r.progressStepsDistance && (t.style.width = r.progressStepsDistance), i.appendChild(t))
            })) : z(i)
        },
        mt = function(t) {
            var e = B();
            t.titleText ? e.innerText = t.titleText : t.title && ("string" == typeof t.title && (t.title = t.title.split("\n").join("<br />")), ut(t.title, e))
        },
        gt = function() {
            var t, e;
            null === l.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (l.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = l.previousBodyPadding + ("ontouchstart" in window || navigator.msMaxTouchPoints ? 0 : ((t = document.createElement("div")).style.width = "50px", t.style.height = "50px", t.style.overflow = "scroll", document.body.appendChild(t), e = t.offsetWidth - t.clientWidth, document.body.removeChild(t), e)) + "px")
        },
        wt = function() {
            var t;
            !/iPad|iPhone|iPod/.test(navigator.userAgent) || window.MSStream || H(document.body, q.iosfix) || (t = document.body.scrollTop, document.body.style.top = -1 * t + "px", V(document.body, q.iosfix))
        },
        yt = function() {
            return !!window.MSInputMethodContext && !!document.documentMode
        },
        bt = function() {
            var t = U(),
                e = G();
            t.style.removeProperty("align-items"), e.offsetTop < 0 && (t.style.alignItems = "flex-start")
        },
        vt = function() {
            "undefined" != typeof window && yt() && (bt(), window.addEventListener("resize", bt))
        },
        xt = function() {
            s(document.body.children).forEach(function(t) {
                t === U() || function(t, e) {
                    if ("function" == typeof t.contains) return t.contains(e)
                }(t, U()) || (t.hasAttribute("aria-hidden") && t.setAttribute("data-previous-aria-hidden", t.getAttribute("aria-hidden")), t.setAttribute("aria-hidden", "true"))
            })
        },
        kt = 100,
        K = {};

    function Tt(t) {
        function r() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            if (!(this instanceof r)) return E(r, e);
            Object.getPrototypeOf(r).apply(this, e)
        }
        return r.prototype = u(Object.create(t.prototype), {
            constructor: r
        }), "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf(r, t) : r.__proto__ = t, r
    }

    function St(t) {
        for (var e in t) Ct(e) || M('Unknown parameter "'.concat(e, '"')), t.toast && -1 !== Dt.indexOf(e) && M('The parameter "'.concat(e, '" is incompatible with toasts')), Nt(e) && n('The parameter "'.concat(e, '" is deprecated and will be removed in the next major release.'))
    }
    var Et = {
            title: "",
            titleText: "",
            text: "",
            html: "",
            footer: "",
            type: null,
            toast: !1,
            customClass: "",
            customContainerClass: "",
            target: "body",
            backdrop: !0,
            animation: !0,
            heightAuto: !0,
            allowOutsideClick: !0,
            allowEscapeKey: !0,
            allowEnterKey: !0,
            stopKeydownPropagation: !0,
            keydownListenerCapture: !1,
            showConfirmButton: !0,
            showCancelButton: !1,
            preConfirm: null,
            confirmButtonText: "OK",
            confirmButtonAriaLabel: "",
            confirmButtonColor: null,
            confirmButtonClass: null,
            cancelButtonText: "Cancel",
            cancelButtonAriaLabel: "",
            cancelButtonColor: null,
            cancelButtonClass: null,
            buttonsStyling: !0,
            reverseButtons: !1,
            focusConfirm: !0,
            focusCancel: !1,
            showCloseButton: !1,
            closeButtonAriaLabel: "Close this dialog",
            showLoaderOnConfirm: !1,
            imageUrl: null,
            imageWidth: null,
            imageHeight: null,
            imageAlt: "",
            imageClass: null,
            timer: null,
            width: null,
            padding: null,
            background: null,
            input: null,
            inputPlaceholder: "",
            inputValue: "",
            inputOptions: {},
            inputAutoTrim: !0,
            inputClass: null,
            inputAttributes: {},
            inputValidator: null,
            validationMessage: null,
            grow: !1,
            position: "center",
            progressSteps: [],
            currentProgressStep: null,
            progressStepsDistance: null,
            onBeforeOpen: null,
            onAfterClose: null,
            onOpen: null,
            onClose: null,
            useRejections: !1,
            expectRejections: !1
        },
        At = ["useRejections", "expectRejections", "extraParams"],
        Dt = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusCancel", "heightAuto", "keydownListenerCapture"],
        Ct = function(t) {
            return Et.hasOwnProperty(t) || "extraParams" === t
        },
        Nt = function(t) {
            return -1 !== At.indexOf(t)
        },
        Bt = '"setDefaults" & "resetDefaults" methods are deprecated in favor of "mixin" method and will be removed in the next major release. For new projects, use "mixin". For past projects already using "setDefaults", support will be provided through an additional package.',
        Ot = {};

    function Pt() {
        var t = G(),
            e = (t || x(""), t = G(), p()),
            n = c(),
            r = f();
        _(e), _(n), V([t, e], q.loading), n.disabled = !0, r.disabled = !0, t.setAttribute("data-loading", !0), t.setAttribute("aria-busy", !0), t.focus()
    }
    var jt, d = [],
        m = Object.freeze({
            isValidParameter: Ct,
            isDeprecatedParameter: Nt,
            argsToParams: function(n) {
                var r = {};
                return "object" === L(n[0]) ? u(r, n[0]) : ["title", "html", "type"].forEach(function(t, e) {
                    switch (L(n[e])) {
                        case "string":
                            r[t] = n[e];
                            break;
                        case "undefined":
                            break;
                        default:
                            "Unexpected type of ".concat(t, '! Expected "string", got ').concat(L(n[e]))
                    }
                }), r
            },
            adaptInputValidator: function(n) {
                return function(t, e) {
                    return n.call(this, t, e).then(function() {}, function(t) {
                        return t
                    })
                }
            },
            close: t,
            closePopup: t,
            closeModal: t,
            closeToast: t,
            isVisible: function() {
                return !!G()
            },
            clickConfirm: function() {
                return c().click()
            },
            clickCancel: function() {
                return f().click()
            },
            getContainer: U,
            getPopup: G,
            getTitle: B,
            getContent: h,
            getImage: O,
            getIcons: N,
            getCloseButton: it,
            getButtonsWrapper: function() {
                return n("swal.getButtonsWrapper() is deprecated and will be removed in the next major release, use swal.getActions() instead"), e(q.actions)
            },
            getActions: p,
            getConfirmButton: c,
            getCancelButton: f,
            getFooter: rt,
            getFocusableElements: J,
            getValidationMessage: X,
            isLoading: function() {
                return G().hasAttribute("data-loading")
            },
            fire: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return E(this, e)
            },
            mixin: function(n) {
                return Tt(function(t) {
                    function e() {
                        return o(this, e), A(this, r(e).apply(this, arguments))
                    }
                    return S(e, t), T(e, [{
                        key: "_main",
                        value: function(t) {
                            return D(r(e.prototype), "_main", this).call(this, u({}, n, t))
                        }
                    }]), e
                }(this))
            },
            queue: function(t) {
                function o() {
                    d = [], document.body.removeAttribute("data-swal2-queue-step")
                }
                var s = this,
                    a = (d = t, []);
                return new Promise(function(i) {
                    ! function e(n, r) {
                        n < d.length ? (document.body.setAttribute("data-swal2-queue-step", n), s(d[n]).then(function(t) {
                            void 0 !== t.value ? (a.push(t.value), e(n + 1, r)) : (o(), i({
                                dismiss: t.dismiss
                            }))
                        })) : (o(), i({
                            value: a
                        }))
                    }(0)
                })
            },
            getQueueStep: function() {
                return document.body.getAttribute("data-swal2-queue-step")
            },
            insertQueueStep: function(t, e) {
                return e && e < d.length ? d.splice(e, 0, t) : d.push(t)
            },
            deleteQueueStep: function(t) {
                void 0 !== d[t] && d.splice(t, 1)
            },
            showLoading: Pt,
            enableLoading: Pt,
            getTimerLeft: function() {
                return K.timeout && K.timeout.getTimerLeft()
            },
            stopTimer: function() {
                return K.timeout && K.timeout.stop()
            },
            resumeTimer: function() {
                return K.timeout && K.timeout.start()
            },
            toggleTimer: function() {
                var t = K.timeout;
                return t && (t.running ? t.stop() : t.start())
            },
            increaseTimer: function(t) {
                return K.timeout && K.timeout.increase(t)
            },
            isTimerRunning: function() {
                return K.timeout && K.timeout.isRunning()
            }
        }),
        Lt = "function" == typeof Symbol ? Symbol : (jt = 0, Rt.iterator = Rt("Symbol.iterator"), Rt);

    function Rt(t) {
        return "__" + t + "_" + Math.floor(1e9 * Math.random()) + "_" + ++jt + "__"
    }
    var g, It, Mt, w = "function" == typeof WeakMap ? WeakMap : (g = Lt("WeakMap"), It = Object.defineProperty, Mt = {}.hasOwnProperty, qt.prototype = {
        delete: function(t) {
            delete t[this[g]]
        },
        get: function(t) {
            return t[this[g]]
        },
        has: function(t) {
            return Mt.call(t, this[g])
        },
        set: function(t, e) {
            It(t, this[g], {
                configurable: !0,
                value: e
            })
        }
    }, qt);

    function qt() {
        It(this, g, {
            value: Lt("WeakMap")
        })
    }
    var y = {
        promise: new w,
        innerParams: new w,
        domCache: new w
    };

    function Ht() {
        var t = y.innerParams.get(this),
            e = y.domCache.get(this);
        t.showConfirmButton || (z(e.confirmButton), t.showCancelButton) || z(e.actions), F([e.popup, e.actions], q.loading), e.popup.removeAttribute("aria-busy"), e.popup.removeAttribute("data-loading"), e.confirmButton.disabled = !1, e.cancelButton.disabled = !1
    }

    function Vt(t) {
        var e = y.domCache.get(this),
            t = (e.validationMessage.innerHTML = t, window.getComputedStyle(e.popup)),
            t = (e.validationMessage.style.marginLeft = "-".concat(t.getPropertyValue("padding-left")), e.validationMessage.style.marginRight = "-".concat(t.getPropertyValue("padding-right")), _(e.validationMessage), this.getInput());
        t && (t.setAttribute("aria-invalid", !0), t.setAttribute("aria-describedBy", q["validation-message"]), Z(t), V(t, q.inputerror))
    }

    function Ft() {
        var t = y.domCache.get(this),
            t = (t.validationMessage && z(t.validationMessage), this.getInput());
        t && (t.removeAttribute("aria-invalid"), t.removeAttribute("aria-describedBy"), F(t, q.inputerror))
    }

    function _t(t, e) {
        o(this, _t);
        var n, r, i = e;
        this.running = !1, this.start = function() {
            return this.running || (this.running = !0, r = new Date, n = setTimeout(t, i)), i
        }, this.stop = function() {
            return this.running && (this.running = !1, clearTimeout(n), i -= new Date - r), i
        }, this.increase = function(t) {
            var e = this.running;
            return e && this.stop(), i += t, e && this.start(), i
        }, this.getTimerLeft = function() {
            return this.running && (this.stop(), this.start()), i
        }, this.isRunning = function() {
            return this.running
        }, this.start()
    }
    var zt = {
        email: function(t, e) {
            return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t) ? Promise.resolve() : Promise.reject(e && e.validationMessage ? e.validationMessage : "Invalid email address")
        },
        url: function(t, e) {
            return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(t) ? Promise.resolve() : Promise.reject(e && e.validationMessage ? e.validationMessage : "Invalid URL")
        }
    };
    var b, w = Object.freeze({
        hideLoading: Ht,
        disableLoading: Ht,
        getInput: function(t) {
            var e = y.innerParams.get(this),
                n = y.domCache.get(this);
            if (!(t = t || e.input)) return null;
            switch (t) {
                case "select":
                case "textarea":
                case "file":
                    return R(n.content, q[t]);
                case "checkbox":
                    return n.popup.querySelector(".".concat(q.checkbox, " input"));
                case "radio":
                    return n.popup.querySelector(".".concat(q.radio, " input:checked")) || n.popup.querySelector(".".concat(q.radio, " input:first-child"));
                case "range":
                    return n.popup.querySelector(".".concat(q.range, " input"));
                default:
                    return R(n.content, q.input)
            }
        },
        enableButtons: function() {
            var t = y.domCache.get(this);
            t.confirmButton.disabled = !1, t.cancelButton.disabled = !1
        },
        disableButtons: function() {
            var t = y.domCache.get(this);
            t.confirmButton.disabled = !0, t.cancelButton.disabled = !0
        },
        enableConfirmButton: function() {
            y.domCache.get(this).confirmButton.disabled = !1
        },
        disableConfirmButton: function() {
            y.domCache.get(this).confirmButton.disabled = !0
        },
        enableInput: function() {
            var t = this.getInput();
            if (!t) return !1;
            if ("radio" === t.type)
                for (var e = t.parentNode.parentNode.querySelectorAll("input"), n = 0; n < e.length; n++) e[n].disabled = !1;
            else t.disabled = !1
        },
        disableInput: function() {
            var t = this.getInput();
            if (!t) return !1;
            if (t && "radio" === t.type)
                for (var e = t.parentNode.parentNode.querySelectorAll("input"), n = 0; n < e.length; n++) e[n].disabled = !0;
            else t.disabled = !0
        },
        showValidationMessage: Vt,
        resetValidationMessage: Ft,
        resetValidationError: function() {
            n("Swal.resetValidationError() is deprecated and will be removed in the next major release, use Swal.resetValidationMessage() instead"), Ft.bind(this)()
        },
        showValidationError: function(t) {
            n("Swal.showValidationError() is deprecated and will be removed in the next major release, use Swal.showValidationMessage() instead"), Vt.bind(this)(t)
        },
        getProgressSteps: function() {
            return y.innerParams.get(this).progressSteps
        },
        setProgressSteps: function(t) {
            t = u({}, y.innerParams.get(this), {
                progressSteps: t
            }), y.innerParams.set(this, t), dt(t)
        },
        showProgressSteps: function() {
            var t = y.domCache.get(this);
            _(t.progressSteps)
        },
        hideProgressSteps: function() {
            var t = y.domCache.get(this);
            z(t.progressSteps)
        },
        _main: function(t) {
            var B = this,
                O = (St(t), u({}, Et, t)),
                e = O,
                t = (e.inputValidator || Object.keys(zt).forEach(function(t) {
                    e.input === t && (e.inputValidator = e.expectRejections ? zt[t] : x.adaptInputValidator(zt[t]))
                }), e.validationMessage && ("object" !== L(e.extraParams) && (e.extraParams = {}), e.extraParams.validationMessage = e.validationMessage), e.target && ("string" != typeof e.target || document.querySelector(e.target)) && ("string" == typeof e.target || e.target.appendChild) || (M('Target parameter is not valid, defaulting to "body"'), e.target = "body"), "function" == typeof e.animation && (e.animation = e.animation.call()), G()),
                n = "string" == typeof e.target ? document.querySelector(e.target) : e.target,
                n = (!t || !n || t.parentNode === n.parentNode) && t || lt(e);
            e.width && (n.style.width = "number" == typeof e.width ? e.width + "px" : e.width), e.padding && (n.style.padding = "number" == typeof e.padding ? e.padding + "px" : e.padding), e.background && (n.style.background = e.background);
            for (var r = window.getComputedStyle(n).getPropertyValue("background-color"), i = n.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"), o = 0; o < i.length; o++) i[o].style.backgroundColor = r;
            var s, t = U(),
                a = it(),
                l = rt(),
                P = (mt(e), ft(e), "string" == typeof e.backdrop ? U().style.background = e.backdrop : e.backdrop || V([document.documentElement, document.body], q["no-backdrop"]), !e.backdrop && e.allowOutsideClick && M('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'), e.position in q ? V(t, q[e.position]) : (M('The "position" parameter is not valid, defaulting to "center"'), V(t, q.center)), e.grow && "string" == typeof e.grow && (s = "grow-" + e.grow) in q && V(t, q[s]), (e.showCloseButton ? (a.setAttribute("aria-label", e.closeButtonAriaLabel), _) : z)(a), n.className = q.popup, e.toast ? (V([document.documentElement, document.body], q["toast-shown"]), V(n, q.toast)) : V(n, q.modal), e.customClass && V(n, e.customClass), e.customContainerClass && V(t, e.customContainerClass), dt(e), ht(e), pt(e), ct(e), ut(e.footer, l), (!0 === e.animation ? F : V)(n, q.noanimation), e.showLoaderOnConfirm && !e.preConfirm && M("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"), Object.freeze(O), y.innerParams.set(this, O), K.timeout && (K.timeout.stop(), delete K.timeout), clearTimeout(K.restoreFocusTimeout), {
                    popup: G(),
                    container: U(),
                    content: h(),
                    actions: p(),
                    confirmButton: c(),
                    cancelButton: f(),
                    closeButton: it(),
                    validationMessage: X(),
                    progressSteps: nt()
                }),
                j = (y.domCache.set(this, P), this.constructor);
            return new Promise(function(e, n) {
                for (var r, i = function(t) {
                        j.closePopup(O.onClose, O.onAfterClose), O.useRejections ? e(t) : e({
                            value: t
                        })
                    }, s = function(t) {
                        j.closePopup(O.onClose, O.onAfterClose), O.useRejections ? n(t) : e({
                            dismiss: t
                        })
                    }, o = function(t) {
                        j.closePopup(O.onClose, O.onAfterClose), n(t)
                    }, a = (O.timer && (K.timeout = new _t(function() {
                        s("timer"), delete K.timeout
                    }, O.timer)), function() {
                        var t = B.getInput();
                        if (!t) return null;
                        switch (O.input) {
                            case "checkbox":
                                return t.checked ? 1 : 0;
                            case "radio":
                                return t.checked ? t.value : null;
                            case "file":
                                return t.files.length ? t.files[0] : null;
                            default:
                                return O.inputAutoTrim ? t.value.trim() : t.value
                        }
                    }), l = (O.input && setTimeout(function() {
                        var t = B.getInput();
                        t && Z(t)
                    }, 0), function(e) {
                        var t;
                        O.showLoaderOnConfirm && j.showLoading(), O.preConfirm ? (B.resetValidationMessage(), t = Promise.resolve().then(function() {
                            return O.preConfirm(e, O.extraParams)
                        }), O.expectRejections ? t.then(function(t) {
                            return i(t || e)
                        }, function(t) {
                            B.hideLoading(), t && B.showValidationMessage(t)
                        }) : t.then(function(t) {
                            I(P.validationMessage) || !1 === t ? B.hideLoading() : i(t || e)
                        }, function(t) {
                            return o(t)
                        })) : i(e)
                    }), t = function(t) {
                        var e, n = t.target,
                            r = P.confirmButton,
                            i = P.cancelButton,
                            r = r && (r === n || r.contains(n)),
                            i = i && (i === n || i.contains(n));
                        "click" === t.type && (r && j.isVisible() ? (B.disableButtons(), O.input ? (e = a(), O.inputValidator ? (B.disableInput(), n = Promise.resolve().then(function() {
                            return O.inputValidator(e, O.extraParams)
                        }), O.expectRejections ? n.then(function() {
                            B.enableButtons(), B.enableInput(), l(e)
                        }, function(t) {
                            B.enableButtons(), B.enableInput(), t && B.showValidationMessage(t)
                        }) : n.then(function(t) {
                            B.enableButtons(), B.enableInput(), t ? B.showValidationMessage(t) : l(e)
                        }, function(t) {
                            return o(t)
                        })) : B.getInput().checkValidity() ? l(e) : (B.enableButtons(), B.showValidationMessage(O.validationMessage))) : l(!0)) : i && j.isVisible() && (B.disableButtons(), s(j.DismissReason.cancel)))
                    }, u = P.popup.querySelectorAll("button"), c = 0; c < u.length; c++) u[c].onclick = t, u[c].onmouseover = t, u[c].onmouseout = t, u[c].onmousedown = t;
                P.closeButton.onclick = function() {
                    s(j.DismissReason.close)
                }, O.toast ? P.popup.onclick = function() {
                    O.showConfirmButton || O.showCancelButton || O.showCloseButton || O.input || s(j.DismissReason.close)
                } : (r = !1, P.popup.onmousedown = function() {
                    P.container.onmouseup = function(t) {
                        P.container.onmouseup = void 0, t.target === P.container && (r = !0)
                    }
                }, P.container.onmousedown = function() {
                    P.popup.onmouseup = function(t) {
                        P.popup.onmouseup = void 0, t.target !== P.popup && !P.popup.contains(t.target) || (r = !0)
                    }
                }, P.container.onclick = function(t) {
                    r ? r = !1 : t.target === P.container && W(O.allowOutsideClick) && s(j.DismissReason.backdrop)
                }), O.reverseButtons ? P.confirmButton.parentNode.insertBefore(P.cancelButton, P.confirmButton) : P.confirmButton.parentNode.insertBefore(P.confirmButton, P.cancelButton);
                for (var f, h, p, d, m, g = function(t, e) {
                        var n = J(O.focusCancel),
                            r = 0;
                        if (r < n.length) return (t += e) === n.length ? t = 0 : -1 === t && (t = n.length - 1), n[t].focus();
                        P.popup.focus()
                    }, w = (K.keydownHandlerAdded && (K.keydownTarget.removeEventListener("keydown", K.keydownHandler, {
                        capture: K.keydownListenerCapture
                    }), K.keydownHandlerAdded = !1), O.toast || (K.keydownHandler = function(t) {
                        var e = O;
                        if (e.stopKeydownPropagation && t.stopPropagation(), "Enter" !== t.key || t.isComposing)
                            if ("Tab" === t.key) {
                                for (var n = t.target, r = J(e.focusCancel), i = -1, o = 0; o < r.length; o++)
                                    if (n === r[o]) {
                                        i = o;
                                        break
                                    }
                                t.shiftKey ? g(i, -1) : g(i, 1), t.stopPropagation(), t.preventDefault()
                            } else -1 !== ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Left", "Right", "Up", "Down"].indexOf(t.key) ? document.activeElement === P.confirmButton && I(P.cancelButton) ? P.cancelButton.focus() : document.activeElement === P.cancelButton && I(P.confirmButton) && P.confirmButton.focus() : "Escape" !== t.key && "Esc" !== t.key || !0 !== W(e.allowEscapeKey) || (t.preventDefault(), s(j.DismissReason.esc));
                        else t.target && B.getInput() && t.target.outerHTML === B.getInput().outerHTML && -1 === ["textarea", "file"].indexOf(e.input) && (j.clickConfirm(), t.preventDefault())
                    }, K.keydownTarget = O.keydownListenerCapture ? window : P.popup, K.keydownListenerCapture = O.keydownListenerCapture, K.keydownTarget.addEventListener("keydown", K.keydownHandler, {
                        capture: K.keydownListenerCapture
                    }), K.keydownHandlerAdded = !0), B.enableButtons(), B.hideLoading(), B.resetValidationMessage(), (O.toast && (O.input || O.footer || O.showCloseButton) ? V : F)(document.body, q["toast-column"]), ["input", "file", "range", "select", "radio", "checkbox", "textarea"]), y = function(t) {
                        t.placeholder && !O.inputPlaceholder || (t.placeholder = O.inputPlaceholder)
                    }, b = 0; b < w.length; b++) {
                    var v, x = q[w[b]],
                        k = R(P.content, x);
                    if (v = B.getInput(w[b])) {
                        for (var T in v.attributes) v.attributes.hasOwnProperty(T) && "type" !== (T = v.attributes[T].name) && "value" !== T && v.removeAttribute(T);
                        for (var S in O.inputAttributes) "range" === w[b] && "placeholder" === S || v.setAttribute(S, O.inputAttributes[S])
                    }
                    k.className = x, O.inputClass && V(k, O.inputClass), z(k)
                }
                switch (O.input) {
                    case "text":
                    case "email":
                    case "password":
                    case "number":
                    case "tel":
                    case "url":
                        v = R(P.content, q.input), "string" == typeof O.inputValue || "number" == typeof O.inputValue ? v.value = O.inputValue : Y(O.inputValue) || M('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(L(O.inputValue), '"')), y(v), v.type = O.input, _(v);
                        break;
                    case "file":
                        y(v = R(P.content, q.file)), v.type = O.input, _(v);
                        break;
                    case "range":
                        var E = R(P.content, q.range),
                            A = E.querySelector("input"),
                            D = E.querySelector("output");
                        A.value = O.inputValue, A.type = O.input, D.value = O.inputValue, _(E);
                        break;
                    case "select":
                        var C = R(P.content, q.select);
                        C.innerHTML = "", O.inputPlaceholder && ((A = document.createElement("option")).innerHTML = O.inputPlaceholder, A.value = "", A.disabled = !0, A.selected = !0, C.appendChild(A)), f = function(t) {
                            t.forEach(function(t) {
                                var e = t[0],
                                    t = t[1],
                                    n = document.createElement("option");
                                n.value = e, n.innerHTML = t, O.inputValue.toString() === e.toString() && (n.selected = !0), C.appendChild(n)
                            }), _(C), C.focus()
                        };
                        break;
                    case "radio":
                        var N = R(P.content, q.radio);
                        N.innerHTML = "", f = function(t) {
                            t.forEach(function(t) {
                                var e = t[0],
                                    t = t[1],
                                    n = document.createElement("input"),
                                    r = document.createElement("label"),
                                    e = (n.type = "radio", n.name = q.radio, n.value = e, O.inputValue.toString() === e.toString() && (n.checked = !0), document.createElement("span"));
                                e.innerHTML = t, e.className = q.label, r.appendChild(n), r.appendChild(e), N.appendChild(r)
                            }), _(N);
                            t = N.querySelectorAll("input");
                            t.length && t[0].focus()
                        };
                        break;
                    case "checkbox":
                        D = R(P.content, q.checkbox), E = B.getInput("checkbox");
                        E.type = "checkbox", E.value = 1, E.id = q.checkbox, E.checked = Boolean(O.inputValue), D.querySelector("span").innerHTML = O.inputPlaceholder, _(D);
                        break;
                    case "textarea":
                        A = R(P.content, q.textarea);
                        A.value = O.inputValue, y(A), _(A);
                        break;
                    case null:
                        break;
                    default:
                        'Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(O.input, '"')
                }
                "select" === O.input || "radio" === O.input ? (h = function(t) {
                    return f((e = t, n = [], "undefined" != typeof Map && e instanceof Map ? e.forEach(function(t, e) {
                        n.push([e, t])
                    }) : Object.keys(e).forEach(function(t) {
                        n.push([t, e[t]])
                    }), n));
                    var e, n
                }, Y(O.inputOptions) ? (j.showLoading(), O.inputOptions.then(function(t) {
                    B.hideLoading(), h(t)
                })) : "object" === L(O.inputOptions) ? h(O.inputOptions) : "Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(L(O.inputOptions))) : -1 !== ["text", "email", "number", "tel", "textarea"].indexOf(O.input) && Y(O.inputValue) && (j.showLoading(), z(v), O.inputValue.then(function(t) {
                    v.value = "number" === O.input ? parseFloat(t) || 0 : t + "", _(v), v.focus(), B.hideLoading()
                }).catch(function(t) {
                    v.value = "", _(v), v.focus(), B.hideLoading()
                })), p = O, d = U(), m = G(), null !== p.onBeforeOpen && "function" == typeof p.onBeforeOpen && p.onBeforeOpen(m), p.animation ? (V(m, q.show), V(d, q.fade), F(m, q.hide)) : F(m, q.fade), _(m), d.style.overflowY = "hidden", $ && !H(m, q.noanimation) ? m.addEventListener($, function t() {
                    m.removeEventListener($, t), d.style.overflowY = "auto"
                }) : d.style.overflowY = "auto", V([document.documentElement, document.body, d], q.shown), p.heightAuto && p.backdrop && !p.toast && V([document.documentElement, document.body], q["height-auto"]), ot() && (gt(), wt(), vt(), xt(), setTimeout(function() {
                    d.scrollTop = 0
                })), st() || K.previousActiveElement || (K.previousActiveElement = document.activeElement), null !== p.onOpen && "function" == typeof p.onOpen && setTimeout(function() {
                    p.onOpen(m)
                }), O.toast || (W(O.allowEnterKey) ? O.focusCancel && I(P.cancelButton) ? P.cancelButton.focus() : O.focusConfirm && I(P.confirmButton) ? P.confirmButton.focus() : g(-1, 1) : document.activeElement && "function" == typeof document.activeElement.blur && document.activeElement.blur()), P.container.scrollTop = 0
            })
        }
    });

    function v() {
        if ("undefined" != typeof window) {
            b = this;
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            var r = Object.freeze(this.constructor.argsToParams(e)),
                r = (Object.defineProperties(this, {
                    params: {
                        value: r,
                        writable: !1,
                        enumerable: !0
                    }
                }), this._main(this.params));
            y.promise.set(this, r)
        }
    }
    v.prototype.then = function(t, e) {
        return y.promise.get(this).then(t, e)
    }, v.prototype.catch = function(t) {
        return y.promise.get(this).catch(t)
    }, v.prototype.finally = function(t) {
        return y.promise.get(this).finally(t)
    }, u(v.prototype, w), u(v, m), Object.keys(w).forEach(function(t) {
        v[t] = function() {
            if (b) return b[t].apply(b, arguments)
        }
    }), v.DismissReason = tt, v.noop = function() {};
    var Ut, x = Tt((Ut = v, m = function() {
        function e() {
            return o(this, e), A(this, r(e).apply(this, arguments))
        }
        return S(e, Ut), T(e, [{
            key: "_main",
            value: function(t) {
                return D(r(e.prototype), "_main", this).call(this, u({}, Ot, t))
            }
        }], [{
            key: "setDefaults",
            value: function(e) {
                if (n(Bt), !e || "object" !== L(e)) throw new TypeError("SweetAlert2: The argument for setDefaults() is required and has to be a object");
                St(e), Object.keys(e).forEach(function(t) {
                    Ut.isValidParameter(t) && (Ot[t] = e[t])
                })
            }
        }, {
            key: "resetDefaults",
            value: function() {
                n(Bt), Ot = {}
            }
        }]), e
    }(), "undefined" != typeof window && "object" === L(window._swalDefaults) && m.setDefaults(window._swalDefaults), m));
    return x.default = x
}), "undefined" != typeof window && window.Sweetalert2 && (window.Sweetalert2.version = "7.33.1", window.swal = window.sweetAlert = window.Swal = window.SweetAlert = window.Sweetalert2), "undefined" != typeof document && function(t, e) {
        var n = t.createElement("style");
        if (t.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = e);
        else try {
            n.innerHTML = e
        } catch (t) {
            n.innerText = e
        }
    }(document, "@-webkit-keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-shown{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;box-shadow:0 0 .625em #d9d9d9;overflow-y:hidden}.swal2-popup.swal2-toast .swal2-header{flex-direction:row}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:initial;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon-text{font-size:2em;font-weight:700;line-height:1em}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 .0625em #fff,0 0 0 .125em rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:2em;height:2.8125em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.25em;left:-.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:2em 2em;transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;-webkit-transform-origin:0 2em;transform-origin:0 2em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:showSweetToast .5s;animation:showSweetToast .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:hideSweetToast .2s forwards;animation:hideSweetToast .2s forwards}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:animate-toast-success-tip .75s;animation:animate-toast-success-tip .75s}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:animate-toast-success-long .75s;animation:animate-toast-success-long .75s}@-webkit-keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@-webkit-keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-shown{top:auto;right:auto;bottom:auto;left:auto;background-color:transparent}body.swal2-no-backdrop .swal2-shown>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-shown.swal2-top{top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-top-left,body.swal2-no-backdrop .swal2-shown.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-top-end,body.swal2-no-backdrop .swal2-shown.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-shown.swal2-center{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-left,body.swal2-no-backdrop .swal2-shown.swal2-center-start{top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-end,body.swal2-no-backdrop .swal2-shown.swal2-center-right{top:50%;right:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom{bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom-left,body.swal2-no-backdrop .swal2-shown.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-bottom-end,body.swal2-no-backdrop .swal2-shown.swal2-bottom-right{right:0;bottom:0}.swal2-container{display:flex;position:fixed;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:10px;background-color:transparent;z-index:1060;overflow-x:hidden;-webkit-overflow-scrolling:touch}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-container.swal2-fade{transition:background-color .1s}.swal2-container.swal2-shown{background-color:rgba(0,0,0,.4)}.swal2-popup{display:none;position:relative;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem;box-sizing:border-box}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-popup .swal2-header{display:flex;flex-direction:column;align-items:center}.swal2-popup .swal2-title{display:block;position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-popup .swal2-actions{flex-wrap:wrap;align-items:center;justify-content:center;margin:1.25em auto 0;z-index:1}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-confirm{width:2.5em;height:2.5em;margin:.46875em;padding:0;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;box-sizing:border-box;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-popup .swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{display:inline-block;width:15px;height:15px;margin-left:5px;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff;content:'';-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal}.swal2-popup .swal2-styled{margin:.3125em;padding:.625em 2em;font-weight:500;box-shadow:none}.swal2-popup .swal2-styled:not([disabled]){cursor:pointer}.swal2-popup .swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-popup .swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-popup .swal2-styled:focus{outline:0;box-shadow:0 0 0 2px #fff,0 0 0 4px rgba(50,100,150,.4)}.swal2-popup .swal2-styled::-moz-focus-inner{border:0}.swal2-popup .swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-popup .swal2-image{max-width:100%;margin:1.25em auto}.swal2-popup .swal2-close{position:absolute;top:0;right:0;justify-content:center;width:1.2em;height:1.2em;padding:0;transition:color .1s ease-out;border:none;border-radius:0;outline:initial;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer;overflow:hidden}.swal2-popup .swal2-close:hover{-webkit-transform:none;transform:none;color:#f27474}.swal2-popup>.swal2-checkbox,.swal2-popup>.swal2-file,.swal2-popup>.swal2-input,.swal2-popup>.swal2-radio,.swal2-popup>.swal2-select,.swal2-popup>.swal2-textarea{display:none}.swal2-popup .swal2-content{justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:300;line-height:normal;z-index:1;word-wrap:break-word}.swal2-popup #swal2-content{text-align:center}.swal2-popup .swal2-checkbox,.swal2-popup .swal2-file,.swal2-popup .swal2-input,.swal2-popup .swal2-radio,.swal2-popup .swal2-select,.swal2-popup .swal2-textarea{margin:1em auto}.swal2-popup .swal2-file,.swal2-popup .swal2-input,.swal2-popup .swal2-textarea{width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;font-size:1.125em;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);box-sizing:border-box}.swal2-popup .swal2-file.swal2-inputerror,.swal2-popup .swal2-input.swal2-inputerror,.swal2-popup .swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-popup .swal2-file:focus,.swal2-popup .swal2-input:focus,.swal2-popup .swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-popup .swal2-file::-webkit-input-placeholder,.swal2-popup .swal2-input::-webkit-input-placeholder,.swal2-popup .swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-popup .swal2-file:-ms-input-placeholder,.swal2-popup .swal2-input:-ms-input-placeholder,.swal2-popup .swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-popup .swal2-file::-ms-input-placeholder,.swal2-popup .swal2-input::-ms-input-placeholder,.swal2-popup .swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-popup .swal2-file::placeholder,.swal2-popup .swal2-input::placeholder,.swal2-popup .swal2-textarea::placeholder{color:#ccc}.swal2-popup .swal2-range input{width:80%}.swal2-popup .swal2-range output{width:20%;font-weight:600;text-align:center}.swal2-popup .swal2-range input,.swal2-popup .swal2-range output{height:2.625em;margin:1em auto;padding:0;font-size:1.125em;line-height:2.625em}.swal2-popup .swal2-input{height:2.625em;padding:0 .75em}.swal2-popup .swal2-input[type=number]{max-width:10em}.swal2-popup .swal2-file{font-size:1.125em}.swal2-popup .swal2-textarea{height:6.75em;padding:.75em}.swal2-popup .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;color:#545454;font-size:1.125em}.swal2-popup .swal2-checkbox,.swal2-popup .swal2-radio{align-items:center;justify-content:center}.swal2-popup .swal2-checkbox label,.swal2-popup .swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-popup .swal2-checkbox input,.swal2-popup .swal2-radio input{margin:0 .4em}.swal2-popup .swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;background:#f0f0f0;color:#666;font-size:1em;font-weight:300;overflow:hidden}.swal2-popup .swal2-validation-message::before{display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center;content:'!';zoom:normal}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}.swal2-icon{position:relative;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;line-height:5em;cursor:default;box-sizing:content-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;zoom:normal}.swal2-icon-text{font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:3.75em 3.75em;transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 3.75em;transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;top:-.25em;left:-.25em;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%;z-index:2;box-sizing:content-box}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;top:.5em;left:1.625em;width:.4375em;height:5.625em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);z-index:1}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;height:.3125em;border-radius:.125em;background-color:#a5dc86;z-index:2}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.875em;width:1.5625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-progresssteps{align-items:center;margin:0 0 1.25em;padding:0;font-weight:600}.swal2-progresssteps li{display:inline-block;position:relative}.swal2-progresssteps .swal2-progresscircle{width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center;z-index:20}.swal2-progresssteps .swal2-progresscircle:first-child{margin-left:0}.swal2-progresssteps .swal2-progresscircle:last-child{margin-right:0}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep{background:#3085d6}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progresscircle{background:#add8e6}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progressline{background:#add8e6}.swal2-progresssteps .swal2-progressline{width:2.5em;height:.4em;margin:0 -1px;background:#3085d6;z-index:10}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-show.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-hide.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-animate-success-icon .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-animate-error-icon{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-animate-error-icon .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}@-webkit-keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:initial!important}}"),
    function() {
        "use strict";

        function J(t) {
            throw t
        }
        var Q = void 0,
            tt = !0,
            D = this;

        function s(t, e) {
            var n, r = t.split("."),
                i = D;
            r[0] in i || !i.execScript || i.execScript("var " + r[0]);
            for (; r.length && (n = r.shift());) r.length || e === Q ? i = i[n] || (i[n] = {}) : i[n] = e
        }
        var et = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array && "undefined" != typeof DataView;

        function nt(t, e) {
            this.index = "number" == typeof e ? e : 0, this.i = 0, this.buffer = t instanceof(et ? Uint8Array : Array) ? t : new(et ? Uint8Array : Array)(32768), 2 * this.buffer.length <= this.index && J(Error("invalid index")), this.buffer.length <= this.index && this.f()
        }
        nt.prototype.f = function() {
            var t, e = this.buffer,
                n = e.length,
                r = new(et ? Uint8Array : Array)(n << 1);
            if (et) r.set(e);
            else
                for (t = 0; t < n; ++t) r[t] = e[t];
            return this.buffer = r
        }, nt.prototype.d = function(t, e, n) {
            var r, i = this.buffer,
                o = this.index,
                s = this.i,
                a = i[o];
            if (n && 1 < e && (t = 8 < e ? (l[255 & t] << 24 | l[t >>> 8 & 255] << 16 | l[t >>> 16 & 255] << 8 | l[t >>> 24 & 255]) >> 32 - e : l[t] >> 8 - e), e + s < 8) a = a << e | t, s += e;
            else
                for (r = 0; r < e; ++r) a = a << 1 | t >> e - r - 1 & 1, 8 == ++s && (s = 0, i[o++] = l[a], a = 0, o === i.length) && (i = this.f());
            i[o] = a, this.buffer = i, this.i = s, this.index = o
        }, nt.prototype.finish = function() {
            var t = this.buffer,
                e = this.index;
            return 0 < this.i && (t[e] <<= 8 - this.i, t[e] = l[t[e]], e++), et ? t.subarray(0, e) : (t.length = e, t)
        };
        for (var t = new(et ? Uint8Array : Array)(256), e = 0; e < 256; ++e) {
            for (var n = r = e, C = 7, r = r >>> 1; r; r >>>= 1) n = n << 1 | 1 & r, --C;
            t[e] = (n << C & 255) >>> 0
        }
        var l = t;

        function c(t) {
            this.buffer = new(et ? Uint16Array : Array)(2 * t), this.length = 0
        }

        function v(t) {
            for (var e, n, r, i, o, s, a, l, u, c = t.length, f = 0, h = Number.POSITIVE_INFINITY, p = 0; p < c; ++p) t[p] > f && (f = t[p]), t[p] < h && (h = t[p]);
            for (e = 1 << f, n = new(et ? Uint32Array : Array)(e), r = 1, i = 0, o = 2; r <= f;) {
                for (p = 0; p < c; ++p)
                    if (t[p] === r) {
                        for (a = i, l = s = 0; l < r; ++l) s = s << 1 | 1 & a, a >>= 1;
                        for (u = r << 16 | p, l = s; l < e; l += o) n[l] = u;
                        ++i
                    }++r, i <<= 1, o <<= 1
            }
            return [n, f, h]
        }

        function N(t, e) {
            this.h = rt, this.w = 0, this.input = et && t instanceof Array ? new Uint8Array(t) : t, this.b = 0, e && (e.lazy && (this.w = e.lazy), "number" == typeof e.compressionType && (this.h = e.compressionType), e.outputBuffer && (this.a = et && e.outputBuffer instanceof Array ? new Uint8Array(e.outputBuffer) : e.outputBuffer), "number" == typeof e.outputIndex) && (this.b = e.outputIndex), this.a || (this.a = new(et ? Uint8Array : Array)(32768))
        }
        c.prototype.getParent = function(t) {
            return 2 * ((t - 2) / 4 | 0)
        }, c.prototype.push = function(t, e) {
            var n, r, i = this.buffer,
                o = this.length;
            for (i[this.length++] = e, i[this.length++] = t; 0 < o && (n = this.getParent(o), i[o] > i[n]);) r = i[o], i[o] = i[n], i[n] = r, r = i[o + 1], i[o + 1] = i[n + 1], i[n + 1] = r, o = n;
            return this.length
        }, c.prototype.pop = function() {
            var t, e, n, r = this.buffer,
                i = r[0],
                o = r[1];
            for (this.length -= 2, r[0] = r[this.length], r[1] = r[this.length + 1], n = 0; !((e = 2 * n + 2) >= this.length) && (e + 2 < this.length && r[e + 2] > r[e] && (e += 2), r[e] > r[n]);) t = r[n], r[n] = r[e], r[e] = t, t = r[n + 1], r[n + 1] = r[e + 1], r[e + 1] = t, n = e;
            return {
                index: o,
                value: i,
                length: this.length
            }
        };
        for (var rt = 2, B = {
                NONE: 0,
                r: 1,
                k: rt,
                N: 3
            }, it = [], i = 0; i < 288; i++) switch (tt) {
            case i <= 143:
                it.push([i + 48, 8]);
                break;
            case i <= 255:
                it.push([i - 144 + 400, 9]);
                break;
            case i <= 279:
                it.push([i - 256, 7]);
                break;
            case i <= 287:
                it.push([i - 280 + 192, 8]);
                break;
            default:
                J("invalid literal: " + i)
        }

        function O(t, e) {
            this.length = t, this.G = e
        }
        N.prototype.j = function() {
            var t, e, I, n = this.input;
            switch (this.h) {
                case 0:
                    for (e = 0, I = n.length; e < I;) {
                        var M, q, r = i = et ? n.subarray(e, e + 65535) : n.slice(e, e + 65535),
                            i = (e += i.length) === I,
                            o = Q,
                            s = this.a,
                            a = this.b;
                        if (et) {
                            for (s = new Uint8Array(this.a.buffer); s.length <= a + r.length + 5;) s = new Uint8Array(s.length << 1);
                            s.set(this.a)
                        }
                        if (s[a++] = 0 | (i ? 1 : 0), M = 65536 + ~(i = r.length) & 65535, s[a++] = 255 & i, s[a++] = i >>> 8 & 255, s[a++] = 255 & M, s[a++] = M >>> 8 & 255, et) s.set(r, a), a += r.length, s = s.subarray(0, a);
                        else {
                            for (o = 0, q = r.length; o < q; ++o) s[a++] = r[o];
                            s.length = a
                        }
                        this.b = a, this.a = s
                    }
                    break;
                case 1:
                    for (var l, u = new nt(et ? new Uint8Array(this.a.buffer) : this.a, this.b), c = (u.d(1, 1, tt), u.d(1, 2, tt), at(this, n)), f = 0, H = c.length; f < H; f++)
                        if (l = c[f], nt.prototype.d.apply(u, it[l]), 256 < l) u.d(c[++f], c[++f], tt), u.d(c[++f], 5), u.d(c[++f], c[++f], tt);
                        else if (256 === l) break;
                    this.a = u.finish(), this.b = this.a.length;
                    break;
                case rt:
                    var h, p, d, m, g, w, y, V, b, v, x, F, k = new nt(et ? new Uint8Array(this.a.buffer) : this.a, this.b),
                        _ = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                        z = Array(19),
                        T = rt;
                    for (k.d(1, 1, tt), k.d(T, 2, tt), h = at(this, n), T = st(g = ot(this.L, 15)), L = st(w = ot(this.K, 7)), p = 286; 257 < p && 0 === g[p - 1]; p--);
                    for (d = 30; 1 < d && 0 === w[d - 1]; d--);
                    for (var S, E, A, D, C, U = p, G = d, N = new(et ? Uint32Array : Array)(U + G), B = new(et ? Uint32Array : Array)(316), O = new(et ? Uint8Array : Array)(19), P = S = 0; P < U; P++) N[S++] = g[P];
                    for (P = 0; P < G; P++) N[S++] = w[P];
                    if (!et)
                        for (P = 0, A = O.length; P < A; ++P) O[P] = 0;
                    for (P = D = 0, A = N.length; P < A; P += S) {
                        for (S = 1; P + S < A && N[P + S] === N[P]; ++S);
                        if (E = S, 0 === N[P])
                            if (E < 3)
                                for (; 0 < E--;) O[B[D++] = 0]++;
                            else
                                for (; 0 < E;)(C = E - 3 < (C = E < 138 ? E : 138) && C < E ? E - 3 : C) <= 10 ? (B[D++] = 17, B[D++] = C - 3, O[17]++) : (B[D++] = 18, B[D++] = C - 11, O[18]++), E -= C;
                        else if (B[D++] = N[P], O[N[P]]++, --E < 3)
                            for (; 0 < E--;) B[D++] = N[P], O[N[P]]++;
                        else
                            for (; 0 < E;) E - 3 < (C = E < 6 ? E : 6) && C < E && (C = E - 3), B[D++] = 16, B[D++] = C - 3, O[16]++, E -= C
                    }
                    for (t = et ? B.subarray(0, D) : B.slice(0, D), y = ot(O, 7), x = 0; x < 19; x++) z[x] = y[_[x]];
                    for (m = 19; 4 < m && 0 === z[m - 1]; m--);
                    for (V = st(y), k.d(p - 257, 5, tt), k.d(d - 1, 5, tt), k.d(m - 4, 4, tt), x = 0; x < m; x++) k.d(z[x], 3, tt);
                    for (x = 0, F = t.length; x < F; x++)
                        if (b = t[x], k.d(V[b], y[b], tt), 16 <= b) {
                            switch (x++, b) {
                                case 16:
                                    v = 2;
                                    break;
                                case 17:
                                    v = 3;
                                    break;
                                case 18:
                                    v = 7;
                                    break;
                                default:
                                    J("invalid code: " + b)
                            }
                            k.d(t[x], v, tt)
                        }
                    for (var j, $, T = [T, g], L = [L, w], K = T[0], W = T[1], Y = L[0], Z = L[1], R = 0, X = h.length; R < X; ++R)
                        if (j = h[R], k.d(K[j], W[j], tt), 256 < j) k.d(h[++R], h[++R], tt), $ = h[++R], k.d(Y[$], Z[$], tt), k.d(h[++R], h[++R], tt);
                        else if (256 === j) break;
                    this.a = k.finish(), this.b = this.a.length;
                    break;
                default:
                    J("invalid compression type")
            }
            return this.a
        };
        var o = function() {
                for (var t, e = [], n = 3; n <= 258; n++) t = function(t) {
                    switch (tt) {
                        case 3 === t:
                            return [257, t - 3, 0];
                        case 4 === t:
                            return [258, t - 4, 0];
                        case 5 === t:
                            return [259, t - 5, 0];
                        case 6 === t:
                            return [260, t - 6, 0];
                        case 7 === t:
                            return [261, t - 7, 0];
                        case 8 === t:
                            return [262, t - 8, 0];
                        case 9 === t:
                            return [263, t - 9, 0];
                        case 10 === t:
                            return [264, t - 10, 0];
                        case t <= 12:
                            return [265, t - 11, 1];
                        case t <= 14:
                            return [266, t - 13, 1];
                        case t <= 16:
                            return [267, t - 15, 1];
                        case t <= 18:
                            return [268, t - 17, 1];
                        case t <= 22:
                            return [269, t - 19, 2];
                        case t <= 26:
                            return [270, t - 23, 2];
                        case t <= 30:
                            return [271, t - 27, 2];
                        case t <= 34:
                            return [272, t - 31, 2];
                        case t <= 42:
                            return [273, t - 35, 3];
                        case t <= 50:
                            return [274, t - 43, 3];
                        case t <= 58:
                            return [275, t - 51, 3];
                        case t <= 66:
                            return [276, t - 59, 3];
                        case t <= 82:
                            return [277, t - 67, 4];
                        case t <= 98:
                            return [278, t - 83, 4];
                        case t <= 114:
                            return [279, t - 99, 4];
                        case t <= 130:
                            return [280, t - 115, 4];
                        case t <= 162:
                            return [281, t - 131, 5];
                        case t <= 194:
                            return [282, t - 163, 5];
                        case t <= 226:
                            return [283, t - 195, 5];
                        case t <= 257:
                            return [284, t - 227, 5];
                        case 258 === t:
                            return [285, t - 258, 0];
                        default:
                            J("invalid length: " + t)
                    }
                }(n), e[n] = t[2] << 24 | t[1] << 16 | t[0];
                return e
            }(),
            P = et ? new Uint32Array(o) : o;

        function at(t, e) {
            function n(t, e) {
                var n, r, i, o = t.G,
                    s = [],
                    a = 0,
                    l = P[t.length];
                switch (s[a++] = 65535 & l, s[a++] = l >> 16 & 255, s[a++] = l >> 24, tt) {
                    case 1 === o:
                        n = [0, o - 1, 0];
                        break;
                    case 2 === o:
                        n = [1, o - 2, 0];
                        break;
                    case 3 === o:
                        n = [2, o - 3, 0];
                        break;
                    case 4 === o:
                        n = [3, o - 4, 0];
                        break;
                    case o <= 6:
                        n = [4, o - 5, 1];
                        break;
                    case o <= 8:
                        n = [5, o - 7, 1];
                        break;
                    case o <= 12:
                        n = [6, o - 9, 2];
                        break;
                    case o <= 16:
                        n = [7, o - 13, 2];
                        break;
                    case o <= 24:
                        n = [8, o - 17, 3];
                        break;
                    case o <= 32:
                        n = [9, o - 25, 3];
                        break;
                    case o <= 48:
                        n = [10, o - 33, 4];
                        break;
                    case o <= 64:
                        n = [11, o - 49, 4];
                        break;
                    case o <= 96:
                        n = [12, o - 65, 5];
                        break;
                    case o <= 128:
                        n = [13, o - 97, 5];
                        break;
                    case o <= 192:
                        n = [14, o - 129, 6];
                        break;
                    case o <= 256:
                        n = [15, o - 193, 6];
                        break;
                    case o <= 384:
                        n = [16, o - 257, 7];
                        break;
                    case o <= 512:
                        n = [17, o - 385, 7];
                        break;
                    case o <= 768:
                        n = [18, o - 513, 8];
                        break;
                    case o <= 1024:
                        n = [19, o - 769, 8];
                        break;
                    case o <= 1536:
                        n = [20, o - 1025, 9];
                        break;
                    case o <= 2048:
                        n = [21, o - 1537, 9];
                        break;
                    case o <= 3072:
                        n = [22, o - 2049, 10];
                        break;
                    case o <= 4096:
                        n = [23, o - 3073, 10];
                        break;
                    case o <= 6144:
                        n = [24, o - 4097, 11];
                        break;
                    case o <= 8192:
                        n = [25, o - 6145, 11];
                        break;
                    case o <= 12288:
                        n = [26, o - 8193, 12];
                        break;
                    case o <= 16384:
                        n = [27, o - 12289, 12];
                        break;
                    case o <= 24576:
                        n = [28, o - 16385, 13];
                        break;
                    case o <= 32768:
                        n = [29, o - 24577, 13];
                        break;
                    default:
                        J("invalid distance")
                }
                for (l = n, s[a++] = l[0], s[+a] = l[1], s[5] = l[2], r = 0, i = s.length; r < i; ++r) p[d++] = s[r];
                g[s[0]]++, w[s[3]]++, m = t.length + e - 1, c = null
            }
            var r, i, o, s, a, l, u, c, f, h = {},
                p = et ? new Uint16Array(2 * e.length) : [],
                d = 0,
                m = 0,
                g = new(et ? Uint32Array : Array)(286),
                w = new(et ? Uint32Array : Array)(30),
                y = t.w;
            if (!et) {
                for (o = 0; o <= 285;) g[o++] = 0;
                for (o = 0; o <= 29;) w[o++] = 0
            }
            for (g[256] = 1, r = 0, i = e.length; r < i; ++r) {
                for (o = a = 0, s = 3; o < s && r + o !== i; ++o) a = a << 8 | e[r + o];
                if (h[a] === Q && (h[a] = []), l = h[a], !(0 < m--)) {
                    for (; 0 < l.length && 32768 < r - l[0];) l.shift();
                    if (i <= r + 3) {
                        for (c && n(c, -1), o = 0, s = i - r; o < s; ++o) f = e[r + o], p[d++] = f, ++g[f];
                        break
                    }
                    0 < l.length ? (u = function(t, e, n) {
                        var r, i, o, s, a, l, u = 0,
                            c = t.length;
                        s = 0, l = n.length;
                        t: for (; s < l; s++) {
                            if (r = n[l - s - 1], (o = 3) < u) {
                                for (a = u; 3 < a; a--)
                                    if (t[r + a - 1] !== t[e + a - 1]) continue t;
                                o = u
                            }
                            for (; o < 258 && e + o < c && t[r + o] === t[e + o];) ++o;
                            if (u < o && (i = r, u = o), 258 === o) break
                        }
                        return new O(u, e - i)
                    }(e, r, l), c ? c.length < u.length ? (f = e[r - 1], p[d++] = f, ++g[f], n(u, 0)) : n(c, -1) : u.length < y ? c = u : n(u, 0)) : c ? n(c, -1) : (f = e[r], p[d++] = f, ++g[f])
                }
                l.push(r)
            }
            return p[d++] = 256, g[256]++, t.L = g, t.K = w, et ? p.subarray(0, d) : p
        }

        function ot(t, e) {
            var n, r, i, o, s, a = t.length,
                l = new c(572),
                u = new(et ? Uint8Array : Array)(a);
            if (!et)
                for (o = 0; o < a; o++) u[o] = 0;
            for (o = 0; o < a; ++o) 0 < t[o] && l.push(o, t[o]);
            if (n = Array(l.length / 2), r = new(et ? Uint32Array : Array)(l.length / 2), 1 === n.length) u[l.pop().index] = 1;
            else {
                for (o = 0, s = l.length / 2; o < s; ++o) n[o] = l.pop(), r[o] = n[o].value;
                for (i = function(t, r, e) {
                        var n, i, o, s, a, l = new(et ? Uint16Array : Array)(e),
                            u = new(et ? Uint8Array : Array)(e),
                            c = new(et ? Uint8Array : Array)(r),
                            f = Array(e),
                            h = Array(e),
                            p = Array(e),
                            d = (1 << e) - r,
                            m = 1 << e - 1;
                        for (l[e - 1] = r, i = 0; i < e; ++i) d < m ? u[i] = 0 : (u[i] = 1, d -= m), d <<= 1, l[e - 2 - i] = (l[e - 1 - i] / 2 | 0) + r;
                        for (l[0] = u[0], f[0] = Array(l[0]), h[0] = Array(l[0]), i = 1; i < e; ++i) l[i] > 2 * l[i - 1] + u[i] && (l[i] = 2 * l[i - 1] + u[i]), f[i] = Array(l[i]), h[i] = Array(l[i]);
                        for (n = 0; n < r; ++n) c[n] = e;
                        for (o = 0; o < l[e - 1]; ++o) f[e - 1][o] = t[o], h[e - 1][o] = o;
                        for (n = 0; n < e; ++n) p[n] = 0;
                        for (1 === u[e - 1] && (--c[0], ++p[e - 1]), i = e - 2; 0 <= i; --i) {
                            for (s = n = 0, a = p[i + 1], o = 0; o < l[i]; o++)(s = f[i + 1][a] + f[i + 1][a + 1]) > t[n] ? (f[i][o] = s, h[i][o] = r, a += 2) : (f[i][o] = t[n], h[i][o] = n, ++n);
                            p[i] = 0, 1 === u[i] && function t(e) {
                                var n = h[e][p[e]];
                                n === r ? (t(e + 1), t(e + 1)) : --c[n], ++p[e]
                            }(i)
                        }
                        return c
                    }(r, r.length, e), o = 0, s = n.length; o < s; ++o) u[n[o].index] = i[o]
            }
            return u
        }

        function st(t) {
            for (var e, n, r = new(et ? Uint16Array : Array)(t.length), i = [], o = [], s = 0, a = 0, l = t.length; a < l; a++) i[t[a]] = 1 + (0 | i[t[a]]);
            for (a = 1, l = 16; a <= l; a++) s = (o[a] = s) + (0 | i[a]) << 1;
            for (a = 0, l = t.length; a < l; a++)
                for (s = o[t[a]], o[t[a]] += 1, e = r[a] = 0, n = t[a]; e < n; e++) r[a] = r[a] << 1 | 1 & s, s >>>= 1;
            return r
        }

        function a(t, e) {
            switch (this.l = [], this.m = 32768, this.e = this.g = this.c = this.q = 0, this.input = et ? new Uint8Array(t) : t, this.s = !1, this.n = k, this.B = !1, (e ? (e.index && (this.c = e.index), e.bufferSize && (this.m = e.bufferSize), e.bufferType && (this.n = e.bufferType), e.resize) : (e = {}, 0)) && (this.B = e.resize), this.n) {
                case x:
                    this.b = 32768, this.a = new(et ? Uint8Array : Array)(32768 + this.m + 258);
                    break;
                case k:
                    this.b = 0, this.a = new(et ? Uint8Array : Array)(this.m), this.f = this.J, this.t = this.H, this.o = this.I;
                    break;
                default:
                    J(Error("invalid inflate mode"))
            }
        }
        for (var x = 0, k = 1, o = x, j = k, u = (a.prototype.p = function() {
                for (; !this.s;) {
                    var t = S(this, 3);
                    switch (1 & t && (this.s = tt), t >>>= 1) {
                        case 0:
                            var e = this.input,
                                n = this.c,
                                r = this.a,
                                i = this.b,
                                o = e.length,
                                s = Q,
                                a = r.length,
                                l = Q;
                            switch (this.e = this.g = 0, o <= n + 1 && J(Error("invalid uncompressed block header: LEN")), s = e[n++] | e[n++] << 8, o <= n + 1 && J(Error("invalid uncompressed block header: NLEN")), s === ~(e[n++] | e[n++] << 8) && J(Error("invalid uncompressed block header: length verify")), n + s > e.length && J(Error("input buffer is broken")), this.n) {
                                case x:
                                    for (; i + s > r.length;) {
                                        if (s -= l = a - i, et) r.set(e.subarray(n, n + l), i), i += l, n += l;
                                        else
                                            for (; l--;) r[i++] = e[n++];
                                        this.b = i, r = this.f(), i = this.b
                                    }
                                    break;
                                case k:
                                    for (; i + s > r.length;) r = this.f({
                                        v: 2
                                    });
                                    break;
                                default:
                                    J(Error("invalid inflate mode"))
                            }
                            if (et) r.set(e.subarray(n, n + s), i), i += s, n += s;
                            else
                                for (; s--;) r[i++] = e[n++];
                            this.c = n, this.b = i, this.a = r;
                            break;
                        case 1:
                            this.o(M, H);
                            break;
                        case 2:
                            for (var u, c, f, h, o = S(this, 5) + 257, p = S(this, 5) + 1, d = S(this, 4) + 4, m = new(et ? Uint8Array : Array)(T.length), g = Q, w = Q, y = Q, b = Q, b = 0; b < d; ++b) m[T[b]] = S(this, 3);
                            if (!et)
                                for (b = d, d = m.length; b < d; ++b) m[T[b]] = 0;
                            for (u = v(m), g = new(et ? Uint8Array : Array)(o + p), b = 0, h = o + p; b < h;) switch (f = E(this, u), f) {
                                case 16:
                                    for (y = 3 + S(this, 2); y--;) g[b++] = w;
                                    break;
                                case 17:
                                    for (y = 3 + S(this, 3); y--;) g[b++] = 0;
                                    w = 0;
                                    break;
                                case 18:
                                    for (y = 11 + S(this, 7); y--;) g[b++] = 0;
                                    w = 0;
                                    break;
                                default:
                                    w = g[b++] = f
                            }
                            p = v(et ? g.subarray(0, o) : g.slice(0, o)), c = v(et ? g.subarray(o) : g.slice(o)), this.o(p, c);
                            break;
                        default:
                            J(Error("unknown BTYPE: " + t))
                    }
                }
                return this.t()
            }, [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), T = et ? new Uint16Array(u) : u, u = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258], L = et ? new Uint16Array(u) : u, u = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0], f = et ? new Uint8Array(u) : u, u = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577], R = et ? new Uint16Array(u) : u, u = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], h = et ? new Uint8Array(u) : u, p = new(et ? Uint8Array : Array)(288), d = 0, I = p.length; d < I; ++d) p[d] = d <= 143 ? 8 : d <= 255 ? 9 : d <= 279 ? 7 : 8;
        for (var M = v(p), m = new(et ? Uint8Array : Array)(30), g = 0, q = m.length; g < q; ++g) m[g] = 5;
        var H = v(m);

        function S(t, e) {
            for (var n, r = t.g, i = t.e, o = t.input, s = t.c, a = o.length; i < e;) a <= s && J(Error("input buffer is broken")), r |= o[s++] << i, i += 8;
            return n = r & (1 << e) - 1, t.g = r >>> e, t.e = i - e, t.c = s, n
        }

        function E(t, e) {
            for (var n = t.g, r = t.e, i = t.input, o = t.c, s = i.length, a = e[0], l = e[1]; r < l && !(s <= o);) n |= i[o++] << r, r += 8;
            return r < (a = (e = a[n & (1 << l) - 1]) >>> 16) && J(Error("invalid code length: " + a)), t.g = n >> a, t.e = r - a, t.c = o, 65535 & e
        }

        function V(t) {
            if ("string" == typeof t) {
                for (var e = t.split(""), n = 0, r = e.length; n < r; n++) e[n] = (255 & e[n].charCodeAt(0)) >>> 0;
                t = e
            }
            for (var i, o = 1, s = 0, a = t.length, l = 0; 0 < a;) {
                for (a -= i = 1024 < a ? 1024 : a; s += o += t[l++], --i;);
                o %= 65521, s %= 65521
            }
            return (s << 16 | o) >>> 0
        }

        function w(t, e) {
            var n, r;
            this.input = t, this.c = 0, (e ? (e.index && (this.c = e.index), e.verify) : (e = {}, 0)) && (this.M = e.verify), n = t[this.c++], r = t[this.c++], (15 & n) === y ? this.method = y : J(Error("unsupported compression method")), 0 != ((n << 8) + r) % 31 && J(Error("invalid fcheck flag:" + ((n << 8) + r) % 31)), 32 & r && J(Error("fdict flag is not supported")), this.A = new a(t, {
                index: this.c,
                bufferSize: e.bufferSize,
                bufferType: e.bufferType,
                resize: e.resize
            })
        }
        a.prototype.o = function(t, e) {
            var n = this.a,
                r = this.b;
            this.u = t;
            for (var i, o, s, a, l = n.length - 258; 256 !== (i = E(this, t));)
                if (i < 256) l <= r && (this.b = r, n = this.f(), r = this.b), n[r++] = i;
                else
                    for (a = L[o = i - 257], 0 < f[o] && (a += S(this, f[o])), i = E(this, e), s = R[i], 0 < h[i] && (s += S(this, h[i])), l <= r && (this.b = r, n = this.f(), r = this.b); a--;) n[r] = n[r++ - s];
            for (; 8 <= this.e;) this.e -= 8, this.c--;
            this.b = r
        }, a.prototype.I = function(t, e) {
            var n = this.a,
                r = this.b;
            this.u = t;
            for (var i, o, s, a, l = n.length; 256 !== (i = E(this, t));)
                if (i < 256) l <= r && (l = (n = this.f()).length), n[r++] = i;
                else
                    for (a = L[o = i - 257], 0 < f[o] && (a += S(this, f[o])), i = E(this, e), s = R[i], 0 < h[i] && (s += S(this, h[i])), l < r + a && (l = (n = this.f()).length); a--;) n[r] = n[r++ - s];
            for (; 8 <= this.e;) this.e -= 8, this.c--;
            this.b = r
        }, a.prototype.f = function() {
            var t, e, n = new(et ? Uint8Array : Array)(this.b - 32768),
                r = this.b - 32768,
                i = this.a;
            if (et) n.set(i.subarray(32768, n.length));
            else
                for (t = 0, e = n.length; t < e; ++t) n[t] = i[t + 32768];
            if (this.l.push(n), this.q += n.length, et) i.set(i.subarray(r, 32768 + r));
            else
                for (t = 0; t < 32768; ++t) i[t] = i[r + t];
            return this.b = 32768, i
        }, a.prototype.J = function(t) {
            var e, n = this.input.length / this.c + 1 | 0,
                r = this.input,
                i = this.a;
            return t && ("number" == typeof t.v && (n = t.v), "number" == typeof t.F) && (n += t.F), r = n < 2 ? (t = (r.length - this.c) / this.u[2] / 2 * 258 | 0) < i.length ? i.length + t : i.length << 1 : i.length * n, et ? (e = new Uint8Array(r)).set(i) : e = i, this.a = e
        }, a.prototype.t = function() {
            var t, e, n, r, i, o = 0,
                s = this.a,
                a = this.l,
                l = new(et ? Uint8Array : Array)(this.q + (this.b - 32768));
            if (0 === a.length) return et ? this.a.subarray(32768, this.b) : this.a.slice(32768, this.b);
            for (e = 0, n = a.length; e < n; ++e)
                for (r = 0, i = (t = a[e]).length; r < i; ++r) l[o++] = t[r];
            for (e = 32768, n = this.b; e < n; ++e) l[o++] = s[e];
            return this.l = [], this.buffer = l
        }, a.prototype.H = function() {
            var t, e = this.b;
            return et ? this.B ? (t = new Uint8Array(e)).set(this.a.subarray(0, e)) : t = this.a.subarray(0, e) : (this.a.length > e && (this.a.length = e), t = this.a), this.buffer = t
        }, w.prototype.p = function() {
            var t = this.input,
                e = this.A.p();
            return this.c = this.A.c, this.M && (t[this.c++] << 24 | t[this.c++] << 16 | t[this.c++] << 8 | t[this.c++]) >>> 0 !== V(e) && J(Error("invalid adler-32 checksum")), e
        };
        var y = 8;

        function b(t, e) {
            this.input = t, this.a = new(et ? Uint8Array : Array)(32768), this.h = A.k;
            var n, r = {};
            for (n in (e ? "number" == typeof e.compressionType : (e = {}, 0)) && (this.h = e.compressionType), e) r[n] = e[n];
            r.outputBuffer = this.a, this.z = new N(this.input, r)
        }
        var A = B;

        function F(t, e) {
            var n, r, i, o;
            if (Object.keys) n = Object.keys(e);
            else
                for (r in n = [], i = 0, e) n[i++] = r;
            for (i = 0, o = n.length; i < o; ++i) s(t + "." + (r = n[i]), e[r])
        }
        b.prototype.j = function() {
            var t, e, n = 0,
                r = this.a,
                i = y;
            if (i === y ? e = Math.LOG2E * Math.log(32768) - 8 : J(Error("invalid compression method")), r[n++] = e = e << 4 | i, i === y) switch (this.h) {
                case A.NONE:
                    t = 0;
                    break;
                case A.r:
                    t = 1;
                    break;
                case A.k:
                    t = 2;
                    break;
                default:
                    J(Error("unsupported compression type"))
            } else J(Error("invalid compression method"));
            return r[+n] = (i = t << 6 | 0) | 31 - (256 * e + i) % 31, e = V(this.input), this.z.b = 2, n = (r = this.z.j()).length, et && ((r = new Uint8Array(r.buffer)).length <= n + 4 && (this.a = new Uint8Array(r.length + 4), this.a.set(r), r = this.a), r = r.subarray(0, n + 4)), r[n++] = e >> 24 & 255, r[n++] = e >> 16 & 255, r[n++] = e >> 8 & 255, r[+n] = 255 & e, r
        }, s("Zlib.Inflate", w), s("Zlib.Inflate.prototype.decompress", w.prototype.p), F("Zlib.Inflate.BufferType", {
            ADAPTIVE: j,
            BLOCK: o
        }), s("Zlib.Deflate", b), s("Zlib.Deflate.compress", function(t, e) {
            return new b(t, e).j()
        }), s("Zlib.Deflate.prototype.compress", b.prototype.j), F("Zlib.Deflate.CompressionType", {
            NONE: A.NONE,
            FIXED: A.r,
            DYNAMIC: A.k
        })
    }.call(this),
    function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.JSEncrypt = {})
    }(this, function(I) {
        "use strict";

        function l(t) {
            return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(t)
        }

        function M(t, e) {
            return t & e
        }

        function a(t, e) {
            return t | e
        }

        function q(t, e) {
            return t ^ e
        }

        function H(t, e) {
            return t & ~e
        }
        var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

        function r(t) {
            for (var e, n = "", r = 0; r + 3 <= t.length; r += 3) e = parseInt(t.substring(r, r + 3), 16), n += s.charAt(e >> 6) + s.charAt(63 & e);
            for (r + 1 == t.length ? (e = parseInt(t.substring(r, r + 1), 16), n += s.charAt(e << 2)) : r + 2 == t.length && (e = parseInt(t.substring(r, r + 2), 16), n += s.charAt(e >> 2) + s.charAt((3 & e) << 4)); 0 < (3 & n.length);) n += "=";
            return n
        }

        function V(t) {
            for (var e = "", n = 0, r = 0, i = 0; i < t.length && "=" != t.charAt(i); ++i) {
                var o = s.indexOf(t.charAt(i));
                o < 0 || (n = 0 == n ? (e += l(o >> 2), r = 3 & o, 1) : 1 == n ? (e += l(r << 2 | o >> 4), r = 15 & o, 2) : 2 == n ? (e = (e += l(r)) + l(o >> 2), r = 3 & o, 3) : (e = (e += l(r << 2 | o >> 4)) + l(15 & o), 0))
            }
            return 1 == n && (e += l(r << 2)), e
        }
        var h, u, F = function(t, e) {
                return (F = Object.setPrototypeOf || ({
                        __proto__: []
                    }
                    instanceof Array ? function(t, e) {
                        t.__proto__ = e
                    } : function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    }))(t, e)
            },
            _ = {
                decode: function(t) {
                    if (void 0 === u) {
                        var e = "= \f\n\r\t \u2028\u2029";
                        for (u = Object.create(null), o = 0; o < 64; ++o) u["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(o)] = o;
                        for (o = 0; o < e.length; ++o) u[e.charAt(o)] = -1
                    }
                    for (var n = [], r = 0, i = 0, o = 0; o < t.length; ++o) {
                        var s = t.charAt(o);
                        if ("=" == s) break;
                        if (-1 != (s = u[s])) {
                            if (void 0 === s) throw new Error("Illegal character at offset " + o);
                            r |= s, 4 <= ++i ? (n[n.length] = r >> 16, n[n.length] = r >> 8 & 255, n[n.length] = 255 & r, i = r = 0) : r <<= 6
                        }
                    }
                    switch (i) {
                        case 1:
                            throw new Error("Base64 encoding incomplete: at least 2 bits missing");
                        case 2:
                            n[n.length] = r >> 10;
                            break;
                        case 3:
                            n[n.length] = r >> 16, n[n.length] = r >> 8 & 255
                    }
                    return n
                },
                re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
                unarmor: function(t) {
                    var e = _.re.exec(t);
                    if (e)
                        if (e[1]) t = e[1];
                        else {
                            if (!e[2]) throw new Error("RegExp out of sync");
                            t = e[2]
                        }
                    return _.decode(t)
                }
            },
            c = 1e13,
            f = (t.prototype.mulAdd = function(t, e) {
                for (var n, r = this.buf, i = r.length, o = 0; o < i; ++o)(n = r[o] * t + e) < c ? e = 0 : n -= (e = 0 | n / c) * c, r[o] = n;
                0 < e && (r[o] = e)
            }, t.prototype.sub = function(t) {
                for (var e, n = this.buf, r = n.length, i = 0; i < r; ++i) t = (e = n[i] - t) < 0 ? (e += c, 1) : 0, n[i] = e;
                for (; 0 === n[n.length - 1];) n.pop()
            }, t.prototype.toString = function(t) {
                if (10 != (t || 10)) throw new Error("only base 10 is supported");
                for (var e = this.buf, n = e[e.length - 1].toString(), r = e.length - 2; 0 <= r; --r) n += (c + e[r]).toString().substring(1);
                return n
            }, t.prototype.valueOf = function() {
                for (var t = this.buf, e = 0, n = t.length - 1; 0 <= n; --n) e = e * c + t[n];
                return e
            }, t.prototype.simplify = function() {
                var t = this.buf;
                return 1 == t.length ? t[0] : this
            }, t),
            z = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,
            U = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;

        function t(t) {
            this.buf = [+t || 0]
        }

        function p(t, e) {
            return t = t.length > e ? t.substring(0, e) + "…" : t
        }
        y.prototype.get = function(t) {
            if ((t = void 0 === t ? this.pos++ : t) >= this.enc.length) throw new Error("Requesting byte offset " + t + " on a stream of length " + this.enc.length);
            return "string" == typeof this.enc ? this.enc.charCodeAt(t) : this.enc[t]
        }, y.prototype.hexByte = function(t) {
            return this.hexDigits.charAt(t >> 4 & 15) + this.hexDigits.charAt(15 & t)
        }, y.prototype.hexDump = function(t, e, n) {
            for (var r = "", i = t; i < e; ++i)
                if (r += this.hexByte(this.get(i)), !0 !== n) switch (15 & i) {
                    case 7:
                        r += "  ";
                        break;
                    case 15:
                        r += "\n";
                        break;
                    default:
                        r += " "
                }
            return r
        }, y.prototype.isASCII = function(t, e) {
            for (var n = t; n < e; ++n) {
                var r = this.get(n);
                if (r < 32 || 176 < r) return !1
            }
            return !0
        }, y.prototype.parseStringISO = function(t, e) {
            for (var n = "", r = t; r < e; ++r) n += String.fromCharCode(this.get(r));
            return n
        }, y.prototype.parseStringUTF = function(t, e) {
            for (var n = "", r = t; r < e;) {
                var i = this.get(r++);
                n += i < 128 ? String.fromCharCode(i) : 191 < i && i < 224 ? String.fromCharCode((31 & i) << 6 | 63 & this.get(r++)) : String.fromCharCode((15 & i) << 12 | (63 & this.get(r++)) << 6 | 63 & this.get(r++))
            }
            return n
        }, y.prototype.parseStringBMP = function(t, e) {
            for (var n, r, i = "", o = t; o < e;) n = this.get(o++), r = this.get(o++), i += String.fromCharCode(n << 8 | r);
            return i
        }, y.prototype.parseTime = function(t, e, n) {
            t = this.parseStringISO(t, e), e = (n ? z : U).exec(t);
            return e ? (n && (e[1] = +e[1], e[1] += +e[1] < 70 ? 2e3 : 1900), t = e[1] + "-" + e[2] + "-" + e[3] + " " + e[4], e[5] && (t += ":" + e[5], e[6]) && (t += ":" + e[6], e[7]) && (t += "." + e[7]), e[8] && (t += " UTC", "Z" != e[8]) && (t += e[8], e[9]) && (t += ":" + e[9]), t) : "Unrecognized time: " + t
        }, y.prototype.parseInteger = function(t, e) {
            for (var n, r = this.get(t), i = 127 < r, o = i ? 255 : 0, s = ""; r == o && ++t < e;) r = this.get(t);
            if (0 == (n = e - t)) return i ? -1 : 0;
            if (4 < n) {
                for (s = r, n <<= 3; 0 == (128 & (+s ^ o));) s = +s << 1, --n;
                s = "(" + n + " bit)\n"
            }
            i && (r -= 256);
            for (var a = new f(r), l = t + 1; l < e; ++l) a.mulAdd(256, this.get(l));
            return s + a.toString()
        }, y.prototype.parseBitString = function(t, e, n) {
            for (var r = this.get(t), i = "(" + ((e - t - 1 << 3) - r) + " bit)\n", o = "", s = t + 1; s < e; ++s) {
                for (var a = this.get(s), l = s == e - 1 ? r : 0, u = 7; l <= u; --u) o += a >> u & 1 ? "1" : "0";
                if (o.length > n) return i + p(o, n)
            }
            return i + o
        }, y.prototype.parseOctetString = function(t, e, n) {
            if (this.isASCII(t, e)) return p(this.parseStringISO(t, e), n);
            var r = e - t,
                i = "(" + r + " byte)\n";
            (n /= 2) < r && (e = t + n);
            for (var o = t; o < e; ++o) i += this.hexByte(this.get(o));
            return n < r && (i += "…"), i
        }, y.prototype.parseOID = function(t, e, n) {
            for (var r = "", i = new f, o = 0, s = t; s < e; ++s) {
                var a = this.get(s);
                if (i.mulAdd(128, 127 & a), o += 7, !(128 & a)) {
                    if ("" === r ? r = (i = i.simplify()) instanceof f ? (i.sub(80), "2." + i.toString()) : (a = i < 80 ? i < 40 ? 0 : 1 : 2) + "." + (i - 40 * a) : r += "." + i.toString(), r.length > n) return p(r, n);
                    i = new f, o = 0
                }
            }
            return 0 < o && (r += ".incomplete"), r
        };
        var G = y,
            $ = (g.prototype.typeName = function() {
                switch (this.tag.tagClass) {
                    case 0:
                        switch (this.tag.tagNumber) {
                            case 0:
                                return "EOC";
                            case 1:
                                return "BOOLEAN";
                            case 2:
                                return "INTEGER";
                            case 3:
                                return "BIT_STRING";
                            case 4:
                                return "OCTET_STRING";
                            case 5:
                                return "NULL";
                            case 6:
                                return "OBJECT_IDENTIFIER";
                            case 7:
                                return "ObjectDescriptor";
                            case 8:
                                return "EXTERNAL";
                            case 9:
                                return "REAL";
                            case 10:
                                return "ENUMERATED";
                            case 11:
                                return "EMBEDDED_PDV";
                            case 12:
                                return "UTF8String";
                            case 16:
                                return "SEQUENCE";
                            case 17:
                                return "SET";
                            case 18:
                                return "NumericString";
                            case 19:
                                return "PrintableString";
                            case 20:
                                return "TeletexString";
                            case 21:
                                return "VideotexString";
                            case 22:
                                return "IA5String";
                            case 23:
                                return "UTCTime";
                            case 24:
                                return "GeneralizedTime";
                            case 25:
                                return "GraphicString";
                            case 26:
                                return "VisibleString";
                            case 27:
                                return "GeneralString";
                            case 28:
                                return "UniversalString";
                            case 30:
                                return "BMPString"
                        }
                        return "Universal_" + this.tag.tagNumber.toString();
                    case 1:
                        return "Application_" + this.tag.tagNumber.toString();
                    case 2:
                        return "[" + this.tag.tagNumber.toString() + "]";
                    case 3:
                        return "Private_" + this.tag.tagNumber.toString()
                }
            }, g.prototype.content = function(t) {
                if (void 0 !== this.tag) {
                    void 0 === t && (t = 1 / 0);
                    var e = this.posContent(),
                        n = Math.abs(this.length);
                    if (!this.tag.isUniversal()) return null !== this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(e, e + n, t);
                    switch (this.tag.tagNumber) {
                        case 1:
                            return 0 === this.stream.get(e) ? "false" : "true";
                        case 2:
                            return this.stream.parseInteger(e, e + n);
                        case 3:
                            return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(e, e + n, t);
                        case 4:
                            return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(e, e + n, t);
                        case 6:
                            return this.stream.parseOID(e, e + n, t);
                        case 16:
                        case 17:
                            return null !== this.sub ? "(" + this.sub.length + " elem)" : "(no elem)";
                        case 12:
                            return p(this.stream.parseStringUTF(e, e + n), t);
                        case 18:
                        case 19:
                        case 20:
                        case 21:
                        case 22:
                        case 26:
                            return p(this.stream.parseStringISO(e, e + n), t);
                        case 30:
                            return p(this.stream.parseStringBMP(e, e + n), t);
                        case 23:
                        case 24:
                            return this.stream.parseTime(e, e + n, 23 == this.tag.tagNumber)
                    }
                }
                return null
            }, g.prototype.toString = function() {
                return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]"
            }, g.prototype.toPrettyString = function(t) {
                var e = (t = void 0 === t ? "" : t) + this.typeName() + " @" + this.stream.pos;
                if (0 <= this.length && (e += "+"), e += this.length, this.tag.tagConstructed ? e += " (constructed)" : !this.tag.isUniversal() || 3 != this.tag.tagNumber && 4 != this.tag.tagNumber || null === this.sub || (e += " (encapsulates)"), e += "\n", null !== this.sub) {
                    t += "  ";
                    for (var n = 0, r = this.sub.length; n < r; ++n) e += this.sub[n].toPrettyString(t)
                }
                return e
            }, g.prototype.posStart = function() {
                return this.stream.pos
            }, g.prototype.posContent = function() {
                return this.stream.pos + this.header
            }, g.prototype.posEnd = function() {
                return this.stream.pos + this.header + Math.abs(this.length)
            }, g.prototype.toHexString = function() {
                return this.stream.hexDump(this.posStart(), this.posEnd(), !0)
            }, g.decodeLength = function(t) {
                var e = t.get(),
                    n = 127 & e;
                if (n == e) return n;
                if (6 < n) throw new Error("Length over 48 bits not supported at position " + (t.pos - 1));
                if (0 == n) return null;
                for (var r = e = 0; r < n; ++r) e = 256 * e + t.get();
                return e
            }, g.prototype.getHexStringValue = function() {
                var t = this.toHexString(),
                    e = 2 * this.header,
                    n = 2 * this.length;
                return t.substr(e, n)
            }, g.decode = function(t) {
                function e() {
                    var t = [];
                    if (null !== o) {
                        for (var e = s + o; r.pos < e;) t[t.length] = g.decode(r);
                        if (r.pos != e) throw new Error("Content size is not correct for container starting at offset " + s)
                    } else try {
                        for (;;) {
                            var n = g.decode(r);
                            if (n.tag.isEOC()) break;
                            t[t.length] = n
                        }
                        o = s - r.pos
                    } catch (t) {
                        throw new Error("Exception while decoding undefined length content: " + t)
                    }
                    return t
                }
                var r = t instanceof G ? t : new G(t, 0),
                    n = new G(r),
                    i = new K(r),
                    o = g.decodeLength(r),
                    s = r.pos,
                    a = s - n.pos,
                    l = null;
                if (i.tagConstructed) l = e();
                else if (i.isUniversal() && (3 == i.tagNumber || 4 == i.tagNumber)) try {
                    if (3 == i.tagNumber && 0 != r.get()) throw new Error("BIT STRINGs with unused bits cannot encapsulate.");
                    for (var l = e(), u = 0; u < l.length; ++u)
                        if (l[u].tag.isEOC()) throw new Error("EOC is not supposed to be actual content.")
                } catch (t) {
                    l = null
                }
                if (null === l) {
                    if (null === o) throw new Error("We can't skip over an invalid tag with undefined length at offset " + s);
                    r.pos = s + Math.abs(o)
                }
                return new g(n, a, o, i, l)
            }, g),
            K = (Q.prototype.isUniversal = function() {
                return 0 === this.tagClass
            }, Q.prototype.isEOC = function() {
                return 0 === this.tagClass && 0 === this.tagNumber
            }, Q),
            d = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
            W = (1 << 26) / d[d.length - 1],
            m = (w.prototype.toString = function(t) {
                if (this.s < 0) return "-" + this.negate().toString(t);
                var e;
                if (16 == t) e = 4;
                else if (8 == t) e = 3;
                else if (2 == t) e = 1;
                else if (32 == t) e = 5;
                else {
                    if (4 != t) return this.toRadix(t);
                    e = 2
                }
                var n, r = (1 << e) - 1,
                    i = !1,
                    o = "",
                    s = this.t,
                    a = this.DB - s * this.DB % e;
                if (0 < s--)
                    for (a < this.DB && 0 < (n = this[s] >> a) && (i = !0, o = l(n)); 0 <= s;) a < e ? (n = (this[s] & (1 << a) - 1) << e - a, n |= this[--s] >> (a += this.DB - e)) : (n = this[s] >> (a -= e) & r, a <= 0 && (a += this.DB, --s)), (i = 0 < n ? !0 : i) && (o += l(n));
                return i ? o : "0"
            }, w.prototype.negate = function() {
                var t = b();
                return w.ZERO.subTo(this, t), t
            }, w.prototype.abs = function() {
                return this.s < 0 ? this.negate() : this
            }, w.prototype.compareTo = function(t) {
                var e = this.s - t.s;
                if (0 != e) return e;
                var n = this.t;
                if (0 != (e = n - t.t)) return this.s < 0 ? -e : e;
                for (; 0 <= --n;)
                    if (0 != (e = this[n] - t[n])) return e;
                return 0
            }, w.prototype.bitLength = function() {
                return this.t <= 0 ? 0 : this.DB * (this.t - 1) + E(this[this.t - 1] ^ this.s & this.DM)
            }, w.prototype.mod = function(t) {
                var e = b();
                return this.abs().divRemTo(t, null, e), this.s < 0 && 0 < e.compareTo(w.ZERO) && t.subTo(e, e), e
            }, w.prototype.modPowInt = function(t, e) {
                e = new(t < 256 || e.isEven() ? Z : X)(e);
                return this.exp(t, e)
            }, w.prototype.clone = function() {
                var t = b();
                return this.copyTo(t), t
            }, w.prototype.intValue = function() {
                if (this.s < 0) {
                    if (1 == this.t) return this[0] - this.DV;
                    if (0 == this.t) return -1
                } else {
                    if (1 == this.t) return this[0];
                    if (0 == this.t) return 0
                }
                return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
            }, w.prototype.byteValue = function() {
                return 0 == this.t ? this.s : this[0] << 24 >> 24
            }, w.prototype.shortValue = function() {
                return 0 == this.t ? this.s : this[0] << 16 >> 16
            }, w.prototype.signum = function() {
                return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
            }, w.prototype.toByteArray = function() {
                var t = this.t,
                    e = [];
                e[0] = this.s;
                var n, r = this.DB - t * this.DB % 8,
                    i = 0;
                if (0 < t--)
                    for (r < this.DB && (n = this[t] >> r) != (this.s & this.DM) >> r && (e[i++] = n | this.s << this.DB - r); 0 <= t;) r < 8 ? (n = (this[t] & (1 << r) - 1) << 8 - r, n |= this[--t] >> (r += this.DB - 8)) : (n = this[t] >> (r -= 8) & 255, r <= 0 && (r += this.DB, --t)), 0 != (128 & n) && (n |= -256), 0 == i && (128 & this.s) != (128 & n) && ++i, (0 < i || n != this.s) && (e[i++] = n);
                return e
            }, w.prototype.equals = function(t) {
                return 0 == this.compareTo(t)
            }, w.prototype.min = function(t) {
                return this.compareTo(t) < 0 ? this : t
            }, w.prototype.max = function(t) {
                return 0 < this.compareTo(t) ? this : t
            }, w.prototype.and = function(t) {
                var e = b();
                return this.bitwiseTo(t, M, e), e
            }, w.prototype.or = function(t) {
                var e = b();
                return this.bitwiseTo(t, a, e), e
            }, w.prototype.xor = function(t) {
                var e = b();
                return this.bitwiseTo(t, q, e), e
            }, w.prototype.andNot = function(t) {
                var e = b();
                return this.bitwiseTo(t, H, e), e
            }, w.prototype.not = function() {
                for (var t = b(), e = 0; e < this.t; ++e) t[e] = this.DM & ~this[e];
                return t.t = this.t, t.s = ~this.s, t
            }, w.prototype.shiftLeft = function(t) {
                var e = b();
                return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e), e
            }, w.prototype.shiftRight = function(t) {
                var e = b();
                return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e), e
            }, w.prototype.getLowestSetBit = function() {
                for (var t, e, n = 0; n < this.t; ++n)
                    if (0 != this[n]) return n * this.DB + (t = this[n], e = void 0, 0 == t ? -1 : ((e = 0) == (65535 & t) && (t >>= 16, e += 16), 0 == (255 & t) && (t >>= 8, e += 8), 0 == (15 & t) && (t >>= 4, e += 4), 0 == (3 & t) && (t >>= 2, e += 2), 0 == (1 & t) && ++e, e));
                return this.s < 0 ? this.t * this.DB : -1
            }, w.prototype.bitCount = function() {
                for (var t = 0, e = this.s & this.DM, n = 0; n < this.t; ++n) t += function(t) {
                    for (var e = 0; 0 != t;) t &= t - 1, ++e;
                    return e
                }(this[n] ^ e);
                return t
            }, w.prototype.testBit = function(t) {
                var e = Math.floor(t / this.DB);
                return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB)
            }, w.prototype.setBit = function(t) {
                return this.changeBit(t, a)
            }, w.prototype.clearBit = function(t) {
                return this.changeBit(t, H)
            }, w.prototype.flipBit = function(t) {
                return this.changeBit(t, q)
            }, w.prototype.add = function(t) {
                var e = b();
                return this.addTo(t, e), e
            }, w.prototype.subtract = function(t) {
                var e = b();
                return this.subTo(t, e), e
            }, w.prototype.multiply = function(t) {
                var e = b();
                return this.multiplyTo(t, e), e
            }, w.prototype.divide = function(t) {
                var e = b();
                return this.divRemTo(t, e, null), e
            }, w.prototype.remainder = function(t) {
                var e = b();
                return this.divRemTo(t, null, e), e
            }, w.prototype.divideAndRemainder = function(t) {
                var e = b(),
                    n = b();
                return this.divRemTo(t, e, n), [e, n]
            }, w.prototype.modPow = function(t, e) {
                var n = t.bitLength(),
                    r = S(1);
                if (n <= 0) return r;
                var i = n < 18 ? 1 : n < 48 ? 3 : n < 144 ? 4 : n < 768 ? 5 : 6,
                    o = new(n < 8 ? Z : e.isEven() ? J : X)(e),
                    s = [],
                    a = 3,
                    l = i - 1,
                    u = (1 << i) - 1;
                if (s[1] = o.convert(this), 1 < i) {
                    var c = b();
                    for (o.sqrTo(s[1], c); a <= u;) s[a] = b(), o.mulTo(c, s[a - 2], s[a]), a += 2
                }
                for (var f, h, p = t.t - 1, d = !0, m = b(), n = E(t[p]) - 1; 0 <= p;) {
                    for (l <= n ? f = t[p] >> n - l & u : (f = (t[p] & (1 << n + 1) - 1) << l - n, 0 < p && (f |= t[p - 1] >> this.DB + n - l)), a = i; 0 == (1 & f);) f >>= 1, --a;
                    if ((n -= a) < 0 && (n += this.DB, --p), d) s[f].copyTo(r), d = !1;
                    else {
                        for (; 1 < a;) o.sqrTo(r, m), o.sqrTo(m, r), a -= 2;
                        0 < a ? o.sqrTo(r, m) : (h = r, r = m, m = h), o.mulTo(m, s[f], r)
                    }
                    for (; 0 <= p && 0 == (t[p] & 1 << n);) o.sqrTo(r, m), h = r, r = m, m = h, --n < 0 && (n = this.DB - 1, --p)
                }
                return o.revert(r)
            }, w.prototype.modInverse = function(t) {
                var e = t.isEven();
                if (this.isEven() && e || 0 == t.signum()) return w.ZERO;
                for (var n = t.clone(), r = this.clone(), i = S(1), o = S(0), s = S(0), a = S(1); 0 != n.signum();) {
                    for (; n.isEven();) n.rShiftTo(1, n), e ? (i.isEven() && o.isEven() || (i.addTo(this, i), o.subTo(t, o)), i.rShiftTo(1, i)) : o.isEven() || o.subTo(t, o), o.rShiftTo(1, o);
                    for (; r.isEven();) r.rShiftTo(1, r), e ? (s.isEven() && a.isEven() || (s.addTo(this, s), a.subTo(t, a)), s.rShiftTo(1, s)) : a.isEven() || a.subTo(t, a), a.rShiftTo(1, a);
                    0 <= n.compareTo(r) ? (n.subTo(r, n), e && i.subTo(s, i), o.subTo(a, o)) : (r.subTo(n, r), e && s.subTo(i, s), a.subTo(o, a))
                }
                return 0 != r.compareTo(w.ONE) ? w.ZERO : 0 <= a.compareTo(t) ? a.subtract(t) : a.signum() < 0 && (a.addTo(t, a), a.signum() < 0) ? a.add(t) : a
            }, w.prototype.pow = function(t) {
                return this.exp(t, new Y)
            }, w.prototype.gcd = function(t) {
                var e = this.s < 0 ? this.negate() : this.clone(),
                    n = t.s < 0 ? t.negate() : t.clone(),
                    r = (e.compareTo(n) < 0 && (t = e, e = n, n = t), e.getLowestSetBit()),
                    t = n.getLowestSetBit();
                if (t < 0) return e;
                for (0 < (t = r < t ? r : t) && (e.rShiftTo(t, e), n.rShiftTo(t, n)); 0 < e.signum();) 0 < (r = e.getLowestSetBit()) && e.rShiftTo(r, e), 0 < (r = n.getLowestSetBit()) && n.rShiftTo(r, n), 0 <= e.compareTo(n) ? (e.subTo(n, e), e.rShiftTo(1, e)) : (n.subTo(e, n), n.rShiftTo(1, n));
                return 0 < t && n.lShiftTo(t, n), n
            }, w.prototype.isProbablePrime = function(t) {
                var e, n = this.abs();
                if (1 == n.t && n[0] <= d[d.length - 1]) {
                    for (e = 0; e < d.length; ++e)
                        if (n[0] == d[e]) return !0;
                    return !1
                }
                if (n.isEven()) return !1;
                for (e = 1; e < d.length;) {
                    for (var r = d[e], i = e + 1; i < d.length && r < W;) r *= d[i++];
                    for (r = n.modInt(r); e < i;)
                        if (r % d[e++] == 0) return !1
                }
                return n.millerRabin(t)
            }, w.prototype.copyTo = function(t) {
                for (var e = this.t - 1; 0 <= e; --e) t[e] = this[e];
                t.t = this.t, t.s = this.s
            }, w.prototype.fromInt = function(t) {
                this.t = 1, this.s = t < 0 ? -1 : 0, 0 < t ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0
            }, w.prototype.fromString = function(t, e) {
                var n;
                if (16 == e) n = 4;
                else if (8 == e) n = 3;
                else if (256 == e) n = 8;
                else if (2 == e) n = 1;
                else if (32 == e) n = 5;
                else {
                    if (4 != e) return void this.fromRadix(t, e);
                    n = 2
                }
                this.t = 0, this.s = 0;
                for (var r = t.length, i = !1, o = 0; 0 <= --r;) {
                    var s = 8 == n ? 255 & +t[r] : tt(t, r);
                    s < 0 ? "-" == t.charAt(r) && (i = !0) : (i = !1, 0 == o ? this[this.t++] = s : o + n > this.DB ? (this[this.t - 1] |= (s & (1 << this.DB - o) - 1) << o, this[this.t++] = s >> this.DB - o) : this[this.t - 1] |= s << o, (o += n) >= this.DB && (o -= this.DB))
                }
                8 == n && 0 != (128 & +t[0]) && (this.s = -1, 0 < o) && (this[this.t - 1] |= (1 << this.DB - o) - 1 << o), this.clamp(), i && w.ZERO.subTo(this, this)
            }, w.prototype.clamp = function() {
                for (var t = this.s & this.DM; 0 < this.t && this[this.t - 1] == t;) --this.t
            }, w.prototype.dlShiftTo = function(t, e) {
                for (var n = this.t - 1; 0 <= n; --n) e[n + t] = this[n];
                for (n = t - 1; 0 <= n; --n) e[n] = 0;
                e.t = this.t + t, e.s = this.s
            }, w.prototype.drShiftTo = function(t, e) {
                for (var n = t; n < this.t; ++n) e[n - t] = this[n];
                e.t = Math.max(this.t - t, 0), e.s = this.s
            }, w.prototype.lShiftTo = function(t, e) {
                for (var n = t % this.DB, r = this.DB - n, i = (1 << r) - 1, o = Math.floor(t / this.DB), s = this.s << n & this.DM, a = this.t - 1; 0 <= a; --a) e[a + o + 1] = this[a] >> r | s, s = (this[a] & i) << n;
                for (a = o - 1; 0 <= a; --a) e[a] = 0;
                e[o] = s, e.t = this.t + o + 1, e.s = this.s, e.clamp()
            }, w.prototype.rShiftTo = function(t, e) {
                e.s = this.s;
                var n = Math.floor(t / this.DB);
                if (n >= this.t) e.t = 0;
                else {
                    var r = t % this.DB,
                        i = this.DB - r,
                        o = (1 << r) - 1;
                    e[0] = this[n] >> r;
                    for (var s = n + 1; s < this.t; ++s) e[s - n - 1] |= (this[s] & o) << i, e[s - n] = this[s] >> r;
                    0 < r && (e[this.t - n - 1] |= (this.s & o) << i), e.t = this.t - n, e.clamp()
                }
            }, w.prototype.subTo = function(t, e) {
                for (var n = 0, r = 0, i = Math.min(t.t, this.t); n < i;) r += this[n] - t[n], e[n++] = r & this.DM, r >>= this.DB;
                if (t.t < this.t) {
                    for (r -= t.s; n < this.t;) r += this[n], e[n++] = r & this.DM, r >>= this.DB;
                    r += this.s
                } else {
                    for (r += this.s; n < t.t;) r -= t[n], e[n++] = r & this.DM, r >>= this.DB;
                    r -= t.s
                }
                e.s = r < 0 ? -1 : 0, r < -1 ? e[n++] = this.DV + r : 0 < r && (e[n++] = r), e.t = n, e.clamp()
            }, w.prototype.multiplyTo = function(t, e) {
                var n = this.abs(),
                    r = t.abs(),
                    i = n.t;
                for (e.t = i + r.t; 0 <= --i;) e[i] = 0;
                for (i = 0; i < r.t; ++i) e[i + n.t] = n.am(0, r[i], e, i, 0, n.t);
                e.s = 0, e.clamp(), this.s != t.s && w.ZERO.subTo(e, e)
            }, w.prototype.squareTo = function(t) {
                for (var e = this.abs(), n = t.t = 2 * e.t; 0 <= --n;) t[n] = 0;
                for (n = 0; n < e.t - 1; ++n) {
                    var r = e.am(n, e[n], t, 2 * n, 0, 1);
                    (t[n + e.t] += e.am(n + 1, 2 * e[n], t, 2 * n + 1, r, e.t - n - 1)) >= e.DV && (t[n + e.t] -= e.DV, t[n + e.t + 1] = 1)
                }
                0 < t.t && (t[t.t - 1] += e.am(n, e[n], t, 2 * n, 0, 1)), t.s = 0, t.clamp()
            }, w.prototype.divRemTo = function(t, e, n) {
                var r = t.abs();
                if (!(r.t <= 0)) {
                    var i = this.abs();
                    if (i.t < r.t) null != e && e.fromInt(0), null != n && this.copyTo(n);
                    else {
                        null == n && (n = b());
                        var o = b(),
                            s = this.s,
                            t = t.s,
                            a = this.DB - E(r[r.t - 1]),
                            l = (0 < a ? (r.lShiftTo(a, o), i.lShiftTo(a, n)) : (r.copyTo(o), i.copyTo(n)), o.t),
                            u = o[l - 1];
                        if (0 != u) {
                            var r = u * (1 << this.F1) + (1 < l ? o[l - 2] >> this.F2 : 0),
                                c = this.FV / r,
                                f = (1 << this.F1) / r,
                                h = 1 << this.F2,
                                p = n.t,
                                d = p - l,
                                m = null == e ? b() : e;
                            for (o.dlShiftTo(d, m), 0 <= n.compareTo(m) && (n[n.t++] = 1, n.subTo(m, n)), w.ONE.dlShiftTo(l, m), m.subTo(o, o); o.t < l;) o[o.t++] = 0;
                            for (; 0 <= --d;) {
                                var g = n[--p] == u ? this.DM : Math.floor(n[p] * c + (n[p - 1] + h) * f);
                                if ((n[p] += o.am(0, g, n, d, 0, l)) < g)
                                    for (o.dlShiftTo(d, m), n.subTo(m, n); n[p] < --g;) n.subTo(m, n)
                            }
                            null != e && (n.drShiftTo(l, e), s != t) && w.ZERO.subTo(e, e), n.t = l, n.clamp(), 0 < a && n.rShiftTo(a, n), s < 0 && w.ZERO.subTo(n, n)
                        }
                    }
                }
            }, w.prototype.invDigit = function() {
                var t, e;
                return this.t < 1 || 0 == (1 & (t = this[0])) ? 0 : 0 < (e = (e = (e = (e = (e = 3 & t) * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) ? this.DV - e : -e
            }, w.prototype.isEven = function() {
                return 0 == (0 < this.t ? 1 & this[0] : this.s)
            }, w.prototype.exp = function(t, e) {
                if (4294967295 < t || t < 1) return w.ONE;
                var n, r = b(),
                    i = b(),
                    o = e.convert(this),
                    s = E(t) - 1;
                for (o.copyTo(r); 0 <= --s;) e.sqrTo(r, i), 0 < (t & 1 << s) ? e.mulTo(i, o, r) : (n = r, r = i, i = n);
                return e.revert(r)
            }, w.prototype.chunkSize = function(t) {
                return Math.floor(Math.LN2 * this.DB / Math.log(t))
            }, w.prototype.toRadix = function(t) {
                if (null == t && (t = 10), 0 == this.signum() || t < 2 || 36 < t) return "0";
                var e = this.chunkSize(t),
                    n = Math.pow(t, e),
                    r = S(n),
                    i = b(),
                    o = b(),
                    s = "";
                for (this.divRemTo(r, i, o); 0 < i.signum();) s = (n + o.intValue()).toString(t).substr(1) + s, i.divRemTo(r, i, o);
                return o.intValue().toString(t) + s
            }, w.prototype.fromRadix = function(t, e) {
                this.fromInt(0);
                for (var n = this.chunkSize(e = null == e ? 10 : e), r = Math.pow(e, n), i = !1, o = 0, s = 0, a = 0; a < t.length; ++a) {
                    var l = tt(t, a);
                    l < 0 ? "-" == t.charAt(a) && 0 == this.signum() && (i = !0) : (s = e * s + l, ++o >= n && (this.dMultiply(r), this.dAddOffset(s, 0), s = o = 0))
                }
                0 < o && (this.dMultiply(Math.pow(e, o)), this.dAddOffset(s, 0)), i && w.ZERO.subTo(this, this)
            }, w.prototype.fromNumber = function(t, e, n) {
                if ("number" == typeof e)
                    if (t < 2) this.fromInt(1);
                    else
                        for (this.fromNumber(t, n), this.testBit(t - 1) || this.bitwiseTo(w.ONE.shiftLeft(t - 1), a, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(e);) this.dAddOffset(2, 0), this.bitLength() > t && this.subTo(w.ONE.shiftLeft(t - 1), this);
                else {
                    var n = [],
                        r = 7 & t;
                    n.length = 1 + (t >> 3), e.nextBytes(n), 0 < r ? n[0] &= (1 << r) - 1 : n[0] = 0, this.fromString(n, 256)
                }
            }, w.prototype.bitwiseTo = function(t, e, n) {
                for (var r, i = Math.min(t.t, this.t), o = 0; o < i; ++o) n[o] = e(this[o], t[o]);
                if (t.t < this.t) {
                    for (r = t.s & this.DM, o = i; o < this.t; ++o) n[o] = e(this[o], r);
                    n.t = this.t
                } else {
                    for (r = this.s & this.DM, o = i; o < t.t; ++o) n[o] = e(r, t[o]);
                    n.t = t.t
                }
                n.s = e(this.s, t.s), n.clamp()
            }, w.prototype.changeBit = function(t, e) {
                t = w.ONE.shiftLeft(t);
                return this.bitwiseTo(t, e, t), t
            }, w.prototype.addTo = function(t, e) {
                for (var n = 0, r = 0, i = Math.min(t.t, this.t); n < i;) r += this[n] + t[n], e[n++] = r & this.DM, r >>= this.DB;
                if (t.t < this.t) {
                    for (r += t.s; n < this.t;) r += this[n], e[n++] = r & this.DM, r >>= this.DB;
                    r += this.s
                } else {
                    for (r += this.s; n < t.t;) r += t[n], e[n++] = r & this.DM, r >>= this.DB;
                    r += t.s
                }
                e.s = r < 0 ? -1 : 0, 0 < r ? e[n++] = r : r < -1 && (e[n++] = this.DV + r), e.t = n, e.clamp()
            }, w.prototype.dMultiply = function(t) {
                this[this.t] = this.am(0, t - 1, this, 0, 0, this.t), ++this.t, this.clamp()
            }, w.prototype.dAddOffset = function(t, e) {
                if (0 != t) {
                    for (; this.t <= e;) this[this.t++] = 0;
                    for (this[e] += t; this[e] >= this.DV;) this[e] -= this.DV, ++e >= this.t && (this[this.t++] = 0), ++this[e]
                }
            }, w.prototype.multiplyLowerTo = function(t, e, n) {
                var r = Math.min(this.t + t.t, e);
                for (n.s = 0, n.t = r; 0 < r;) n[--r] = 0;
                for (var i = n.t - this.t; r < i; ++r) n[r + this.t] = this.am(0, t[r], n, r, 0, this.t);
                for (i = Math.min(t.t, e); r < i; ++r) this.am(0, t[r], n, r, 0, e - r);
                n.clamp()
            }, w.prototype.multiplyUpperTo = function(t, e, n) {
                var r = n.t = this.t + t.t - --e;
                for (n.s = 0; 0 <= --r;) n[r] = 0;
                for (r = Math.max(e - this.t, 0); r < t.t; ++r) n[this.t + r - e] = this.am(e - r, t[r], n, 0, 0, this.t + r - e);
                n.clamp(), n.drShiftTo(1, n)
            }, w.prototype.modInt = function(t) {
                if (t <= 0) return 0;
                var e = this.DV % t,
                    n = this.s < 0 ? t - 1 : 0;
                if (0 < this.t)
                    if (0 == e) n = this[0] % t;
                    else
                        for (var r = this.t - 1; 0 <= r; --r) n = (e * n + this[r]) % t;
                return n
            }, w.prototype.millerRabin = function(t) {
                var e = this.subtract(w.ONE),
                    n = e.getLowestSetBit();
                if (n <= 0) return !1;
                var r = e.shiftRight(n);
                d.length < (t = t + 1 >> 1) && (t = d.length);
                for (var i = b(), o = 0; o < t; ++o) {
                    i.fromInt(d[Math.floor(Math.random() * d.length)]);
                    var s = i.modPow(r, this);
                    if (0 != s.compareTo(w.ONE) && 0 != s.compareTo(e)) {
                        for (var a = 1; a++ < n && 0 != s.compareTo(e);)
                            if (0 == (s = s.modPowInt(2, this)).compareTo(w.ONE)) return !1;
                        if (0 != s.compareTo(e)) return !1
                    }
                }
                return !0
            }, w.prototype.square = function() {
                var t = b();
                return this.squareTo(t), t
            }, w.prototype.gcda = function(t, e) {
                var n, r = this.s < 0 ? this.negate() : this.clone(),
                    i = t.s < 0 ? t.negate() : t.clone(),
                    o = (r.compareTo(i) < 0 && (t = r, r = i, i = t), r.getLowestSetBit()),
                    s = i.getLowestSetBit();
                s < 0 ? e(r) : (0 < (s = o < s ? o : s) && (r.rShiftTo(s, r), i.rShiftTo(s, i)), n = function() {
                    0 < (o = r.getLowestSetBit()) && r.rShiftTo(o, r), 0 < (o = i.getLowestSetBit()) && i.rShiftTo(o, i), 0 <= r.compareTo(i) ? (r.subTo(i, r), r.rShiftTo(1, r)) : (i.subTo(r, i), i.rShiftTo(1, i)), 0 < r.signum() ? setTimeout(n, 0) : (0 < s && i.lShiftTo(s, i), setTimeout(function() {
                        e(i)
                    }, 0))
                }, setTimeout(n, 10))
            }, w.prototype.fromNumberAsync = function(t, e, n, r) {
                var i, o, s;
                "number" == typeof e ? t < 2 ? this.fromInt(1) : (this.fromNumber(t, n), this.testBit(t - 1) || this.bitwiseTo(w.ONE.shiftLeft(t - 1), a, this), this.isEven() && this.dAddOffset(1, 0), i = this, o = function() {
                    i.dAddOffset(2, 0), i.bitLength() > t && i.subTo(w.ONE.shiftLeft(t - 1), i), i.isProbablePrime(e) ? setTimeout(function() {
                        r()
                    }, 0) : setTimeout(o, 0)
                }, setTimeout(o, 0)) : (n = 7 & t, (s = []).length = 1 + (t >> 3), e.nextBytes(s), 0 < n ? s[0] &= (1 << n) - 1 : s[0] = 0, this.fromString(s, 256))
            }, w),
            Y = (o.prototype.convert = function(t) {
                return t
            }, o.prototype.revert = function(t) {
                return t
            }, o.prototype.mulTo = function(t, e, n) {
                t.multiplyTo(e, n)
            }, o.prototype.sqrTo = function(t, e) {
                t.squareTo(e)
            }, o),
            Z = (i.prototype.convert = function(t) {
                return t.s < 0 || 0 <= t.compareTo(this.m) ? t.mod(this.m) : t
            }, i.prototype.revert = function(t) {
                return t
            }, i.prototype.reduce = function(t) {
                t.divRemTo(this.m, null, t)
            }, i.prototype.mulTo = function(t, e, n) {
                t.multiplyTo(e, n), this.reduce(n)
            }, i.prototype.sqrTo = function(t, e) {
                t.squareTo(e), this.reduce(e)
            }, i),
            X = (n.prototype.convert = function(t) {
                var e = b();
                return t.abs().dlShiftTo(this.m.t, e), e.divRemTo(this.m, null, e), t.s < 0 && 0 < e.compareTo(m.ZERO) && this.m.subTo(e, e), e
            }, n.prototype.revert = function(t) {
                var e = b();
                return t.copyTo(e), this.reduce(e), e
            }, n.prototype.reduce = function(t) {
                for (; t.t <= this.mt2;) t[t.t++] = 0;
                for (var e = 0; e < this.m.t; ++e) {
                    var n = 32767 & t[e],
                        r = n * this.mpl + ((n * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                    for (t[n = e + this.m.t] += this.m.am(0, r, t, e, 0, this.m.t); t[n] >= t.DV;) t[n] -= t.DV, t[++n]++
                }
                t.clamp(), t.drShiftTo(this.m.t, t), 0 <= t.compareTo(this.m) && t.subTo(this.m, t)
            }, n.prototype.mulTo = function(t, e, n) {
                t.multiplyTo(e, n), this.reduce(n)
            }, n.prototype.sqrTo = function(t, e) {
                t.squareTo(e), this.reduce(e)
            }, n),
            J = (e.prototype.convert = function(t) {
                var e;
                return t.s < 0 || t.t > 2 * this.m.t ? t.mod(this.m) : t.compareTo(this.m) < 0 ? t : (e = b(), t.copyTo(e), this.reduce(e), e)
            }, e.prototype.revert = function(t) {
                return t
            }, e.prototype.reduce = function(t) {
                for (t.drShiftTo(this.m.t - 1, this.r2), t.t > this.m.t + 1 && (t.t = this.m.t + 1, t.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0;) t.dAddOffset(1, this.m.t + 1);
                for (t.subTo(this.r2, t); 0 <= t.compareTo(this.m);) t.subTo(this.m, t)
            }, e.prototype.mulTo = function(t, e, n) {
                t.multiplyTo(e, n), this.reduce(n)
            }, e.prototype.sqrTo = function(t, e) {
                t.squareTo(e), this.reduce(e)
            }, e);

        function e(t) {
            this.m = t, this.r2 = b(), this.q3 = b(), m.ONE.dlShiftTo(2 * t.t, this.r2), this.mu = this.r2.divide(t)
        }

        function n(t) {
            this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t
        }

        function i(t) {
            this.m = t
        }

        function o() {}

        function w(t, e, n) {
            null != t && ("number" == typeof t ? this.fromNumber(t, e, n) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e))
        }

        function Q(t) {
            var e = t.get();
            if (this.tagClass = e >> 6, this.tagConstructed = 0 != (32 & e), this.tagNumber = 31 & e, 31 == this.tagNumber) {
                for (var n = new f; e = t.get(), n.mulAdd(128, 127 & e), 128 & e;);
                this.tagNumber = n.simplify()
            }
        }

        function g(t, e, n, r, i) {
            if (!(r instanceof K)) throw new Error("Invalid tag value.");
            this.stream = t, this.header = e, this.length = n, this.tag = r, this.sub = i
        }

        function y(t, e) {
            this.hexDigits = "0123456789ABCDEF", t instanceof y ? (this.enc = t.enc, this.pos = t.pos) : (this.enc = t, this.pos = e)
        }

        function b() {
            return new m(null)
        }

        function v(t, e) {
            return new m(t, e)
        }
        B = "Microsoft Internet Explorer" == navigator.appName ? (m.prototype.am = function(t, e, n, r, i, o) {
            for (var s = 32767 & e, a = e >> 15; 0 <= --o;) {
                var l = 32767 & this[t],
                    u = this[t++] >> 15,
                    c = a * l + u * s;
                i = ((l = s * l + ((32767 & c) << 15) + n[r] + (1073741823 & i)) >>> 30) + (c >>> 15) + a * u + (i >>> 30), n[r++] = 1073741823 & l
            }
            return i
        }, 30) : "Netscape" != navigator.appName ? (m.prototype.am = function(t, e, n, r, i, o) {
            for (; 0 <= --o;) {
                var s = e * this[t++] + n[r] + i;
                i = Math.floor(s / 67108864), n[r++] = 67108863 & s
            }
            return i
        }, 26) : (m.prototype.am = function(t, e, n, r, i, o) {
            for (var s = 16383 & e, a = e >> 14; 0 <= --o;) {
                var l = 16383 & this[t],
                    u = this[t++] >> 14,
                    c = a * l + u * s;
                i = ((l = s * l + ((16383 & c) << 14) + n[r] + i) >> 28) + (c >> 14) + a * u, n[r++] = 268435455 & l
            }
            return i
        }, 28), m.prototype.DB = B, m.prototype.DM = (1 << B) - 1, m.prototype.DV = 1 << B, m.prototype.FV = Math.pow(2, 52), m.prototype.F1 = 52 - B, m.prototype.F2 = 2 * B - 52;
        for (var x = [], k = "0".charCodeAt(0), T = 0; T <= 9; ++T) x[k++] = T;
        for (k = "a".charCodeAt(0), T = 10; T < 36; ++T) x[k++] = T;
        for (k = "A".charCodeAt(0), T = 10; T < 36; ++T) x[k++] = T;

        function tt(t, e) {
            t = x[t.charCodeAt(e)];
            return null == t ? -1 : t
        }

        function S(t) {
            var e = b();
            return e.fromInt(t), e
        }

        function E(t) {
            var e, n = 1;
            return 0 != (e = t >>> 16) && (t = e, n += 16), 0 != (e = t >> 8) && (t = e, n += 8), 0 != (e = t >> 4) && (t = e, n += 4), 0 != (e = t >> 2) && (t = e, n += 2), 0 != (e = t >> 1) && (t = e, n += 1), n
        }
        m.ZERO = S(0), m.ONE = S(1);
        nt.prototype.init = function(t) {
            for (var e, n, r = 0; r < 256; ++r) this.S[r] = r;
            for (r = e = 0; r < 256; ++r) e = e + this.S[r] + t[r % t.length] & 255, n = this.S[r], this.S[r] = this.S[e], this.S[e] = n;
            this.i = 0, this.j = 0
        }, nt.prototype.next = function() {
            var t;
            return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, t = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = t, this.S[t + this.S[this.i] & 255]
        };
        var et = nt;

        function nt() {
            this.i = 0, this.j = 0, this.S = []
        }
        var A, D;
        if (null == (C = null)) {
            var C = [],
                N = void(D = 0);
            if (window.crypto && window.crypto.getRandomValues) {
                var rt = new Uint32Array(256);
                for (window.crypto.getRandomValues(rt), N = 0; N < rt.length; ++N) C[D++] = 255 & rt[N]
            }
            var it = function(t) {
                if (this.count = this.count || 0, 256 <= this.count || 256 <= D) window.removeEventListener ? window.removeEventListener("mousemove", it, !1) : window.detachEvent && window.detachEvent("onmousemove", it);
                else try {
                    var e = t.x + t.y;
                    C[D++] = 255 & e, this.count += 1
                } catch (t) {}
            };
            window.addEventListener ? window.addEventListener("mousemove", it, !1) : window.attachEvent && window.attachEvent("onmousemove", it)
        }
        st.prototype.nextBytes = function(t) {
            for (var e = 0; e < t.length; ++e) t[e] = function() {
                if (null == A) {
                    for (A = new et; D < 256;) {
                        var t = Math.floor(65536 * Math.random());
                        C[D++] = 255 & t
                    }
                    for (A.init(C), D = 0; D < C.length; ++D) C[D] = 0;
                    D = 0
                }
                return A.next()
            }()
        };
        var ot = st;

        function st() {}
        O.prototype.doPublic = function(t) {
            return t.modPowInt(this.e, this.n)
        }, O.prototype.doPrivate = function(t) {
            if (null == this.p || null == this.q) return t.modPow(this.d, this.n);
            for (var e = t.mod(this.p).modPow(this.dmp1, this.p), n = t.mod(this.q).modPow(this.dmq1, this.q); e.compareTo(n) < 0;) e = e.add(this.p);
            return e.subtract(n).multiply(this.coeff).mod(this.p).multiply(this.q).add(n)
        }, O.prototype.setPublic = function(t, e) {
            null != t && null != e && 0 < t.length && 0 < e.length && (this.n = v(t, 16), this.e = parseInt(e, 16))
        }, O.prototype.encrypt = function(t) {
            var t = function(t, e) {
                if (e < t.length + 11) return null;
                for (var n = [], r = t.length - 1; 0 <= r && 0 < e;) {
                    var i = t.charCodeAt(r--);
                    i < 128 ? n[--e] = i : 127 < i && i < 2048 ? (n[--e] = 63 & i | 128, n[--e] = i >> 6 | 192) : (n[--e] = 63 & i | 128, n[--e] = i >> 6 & 63 | 128, n[--e] = i >> 12 | 224)
                }
                n[--e] = 0;
                for (var o = new ot, s = []; 2 < e;) {
                    for (s[0] = 0; 0 == s[0];) o.nextBytes(s);
                    n[--e] = s[0]
                }
                return n[--e] = 2, n[--e] = 0, new m(n)
            }(t, this.n.bitLength() + 7 >> 3);
            return null == t || null == (t = this.doPublic(t)) ? null : 0 == (1 & (t = t.toString(16)).length) ? t : "0" + t
        }, O.prototype.setPrivate = function(t, e, n) {
            null != t && null != e && 0 < t.length && 0 < e.length && (this.n = v(t, 16), this.e = parseInt(e, 16), this.d = v(n, 16))
        }, O.prototype.setPrivateEx = function(t, e, n, r, i, o, s, a) {
            null != t && null != e && 0 < t.length && 0 < e.length && (this.n = v(t, 16), this.e = parseInt(e, 16), this.d = v(n, 16), this.p = v(r, 16), this.q = v(i, 16), this.dmp1 = v(o, 16), this.dmq1 = v(s, 16), this.coeff = v(a, 16))
        }, O.prototype.generate = function(t, e) {
            var n = new ot,
                r = t >> 1;
            this.e = parseInt(e, 16);
            for (var i = new m(e, 16);;) {
                for (; this.p = new m(t - r, 1, n), 0 != this.p.subtract(m.ONE).gcd(i).compareTo(m.ONE) || !this.p.isProbablePrime(10););
                for (; this.q = new m(r, 1, n), 0 != this.q.subtract(m.ONE).gcd(i).compareTo(m.ONE) || !this.q.isProbablePrime(10););
                this.p.compareTo(this.q) <= 0 && (o = this.p, this.p = this.q, this.q = o);
                var o = this.p.subtract(m.ONE),
                    s = this.q.subtract(m.ONE),
                    a = o.multiply(s);
                if (0 == a.gcd(i).compareTo(m.ONE)) {
                    this.n = this.p.multiply(this.q), this.d = i.modInverse(a), this.dmp1 = this.d.mod(o), this.dmq1 = this.d.mod(s), this.coeff = this.q.modInverse(this.p);
                    break
                }
            }
        }, O.prototype.decrypt = function(t) {
            t = v(t, 16), t = this.doPrivate(t);
            if (null == t) return null;
            for (var e = this.n.bitLength() + 7 >> 3, n = t.toByteArray(), r = 0; r < n.length && 0 == n[r];) ++r;
            if (n.length - r != e - 1 || 2 != n[r]) return null;
            for (++r; 0 != n[r];)
                if (++r >= n.length) return null;
            for (var i = ""; ++r < n.length;) {
                var o = 255 & n[r];
                o < 128 ? i += String.fromCharCode(o) : 191 < o && o < 224 ? (i += String.fromCharCode((31 & o) << 6 | 63 & n[r + 1]), ++r) : (i += String.fromCharCode((15 & o) << 12 | (63 & n[r + 1]) << 6 | 63 & n[r + 2]), r += 2)
            }
            return i
        }, O.prototype.generateAsync = function(t, e, i) {
            var o = new ot,
                s = t >> 1,
                a = (this.e = parseInt(e, 16), new m(e, 16)),
                l = this,
                u = function() {
                    function e() {
                        l.p = b(), l.p.fromNumberAsync(t - s, 1, o, function() {
                            l.p.subtract(m.ONE).gcda(a, function(t) {
                                0 == t.compareTo(m.ONE) && l.p.isProbablePrime(10) ? setTimeout(r, 0) : setTimeout(e, 0)
                            })
                        })
                    }
                    var n = function() {
                            l.p.compareTo(l.q) <= 0 && (t = l.p, l.p = l.q, l.q = t);
                            var t = l.p.subtract(m.ONE),
                                e = l.q.subtract(m.ONE),
                                n = t.multiply(e);
                            0 == n.gcd(a).compareTo(m.ONE) ? (l.n = l.p.multiply(l.q), l.d = a.modInverse(n), l.dmp1 = l.d.mod(t), l.dmq1 = l.d.mod(e), l.coeff = l.q.modInverse(l.p), setTimeout(function() {
                                i()
                            }, 0)) : setTimeout(u, 0)
                        },
                        r = function() {
                            l.q = b(), l.q.fromNumberAsync(s, 1, o, function() {
                                l.q.subtract(m.ONE).gcda(a, function(t) {
                                    0 == t.compareTo(m.ONE) && l.q.isProbablePrime(10) ? setTimeout(n, 0) : setTimeout(r, 0)
                                })
                            })
                        };
                    setTimeout(e, 0)
                };
            setTimeout(u, 0)
        }, O.prototype.sign = function(t, e, n) {
            n = function(t, e) {
                if (e < t.length + 22) return null;
                for (var n = e - t.length - 6, r = "", i = 0; i < n; i += 2) r += "ff";
                return v("0001" + r + "00" + t, 16)
            }((ut[n] || "") + e(t).toString(), this.n.bitLength() / 4);
            return null == n || null == (e = this.doPrivate(n)) ? null : 0 == (1 & (t = e.toString(16)).length) ? t : "0" + t
        }, O.prototype.verify = function(t, e, n) {
            e = v(e, 16), e = this.doPublic(e);
            return null == e ? null : function(t) {
                for (var e in ut)
                    if (ut.hasOwnProperty(e)) {
                        var e = ut[e],
                            n = e.length;
                        if (t.substr(0, n) == e) return t.substr(n)
                    }
                return t
            }(e.toString(16).replace(/^1f+00/, "")) == n(t).toString()
        };
        var B = O;

        function O() {
            this.n = null, this.e = 0, this.d = null, this.p = null, this.q = null, this.dmp1 = null, this.dmq1 = null, this.coeff = null
        }
        var at, lt, ut = {
                md2: "3020300c06082a864886f70d020205000410",
                md5: "3020300c06082a864886f70d020505000410",
                sha1: "3021300906052b0e03021a05000414",
                sha224: "302d300d06096086480165030402040500041c",
                sha256: "3031300d060960864801650304020105000420",
                sha384: "3041300d060960864801650304020205000430",
                sha512: "3051300d060960864801650304020305000440",
                ripemd160: "3021300906052b2403020105000414"
            },
            P = {
                lang: {
                    extend: function(t, e, n) {
                        if (!e || !t) throw new Error("YAHOO.lang.extend failed, please check that all dependencies are included.");

                        function r() {}
                        if (r.prototype = e.prototype, t.prototype = new r, (t.prototype.constructor = t).superclass = e.prototype, e.prototype.constructor == Object.prototype.constructor && (e.prototype.constructor = e), n) {
                            for (var i in n) t.prototype[i] = n[i];
                            var e = function() {},
                                o = ["toString", "valueOf"];
                            try {
                                /MSIE/.test(navigator.userAgent) && (e = function(t, e) {
                                    for (i = 0; i < o.length; i += 1) {
                                        var n = o[i],
                                            r = e[n];
                                        "function" == typeof r && r != Object.prototype[n] && (t[n] = r)
                                    }
                                })
                            } catch (t) {}
                            e(t.prototype, n)
                        }
                    }
                }
            },
            j = {},
            ct = (void 0 !== j.asn1 && j.asn1 || (j.asn1 = {}), j.asn1.ASN1Util = new function() {
                this.integerToByteHex = function(t) {
                    t = t.toString(16);
                    return t = t.length % 2 == 1 ? "0" + t : t
                }, this.bigIntToMinTwosComplementsHex = function(t) {
                    var e = t.toString(16);
                    if ("-" != e.substr(0, 1)) e.length % 2 == 1 ? e = "0" + e : e.match(/^[0-7]/) || (e = "00" + e);
                    else {
                        var n = e.substr(1).length;
                        n % 2 == 1 ? n += 1 : e.match(/^[0-7]/) || (n += 2);
                        for (var r = "", i = 0; i < n; i++) r += "f";
                        e = new m(r, 16).xor(t).add(m.ONE).toString(16).replace(/^-/, "")
                    }
                    return e
                }, this.getPEMStringFromHex = function(t, e) {
                    return hextopem(t, e)
                }, this.newObject = function(t) {
                    var e = j.asn1,
                        n = e.DERBoolean,
                        r = e.DERInteger,
                        i = e.DERBitString,
                        o = e.DEROctetString,
                        s = e.DERNull,
                        a = e.DERObjectIdentifier,
                        l = e.DEREnumerated,
                        u = e.DERUTF8String,
                        c = e.DERNumericString,
                        f = e.DERPrintableString,
                        h = e.DERTeletexString,
                        p = e.DERIA5String,
                        d = e.DERUTCTime,
                        m = e.DERGeneralizedTime,
                        g = e.DERSequence,
                        w = e.DERSet,
                        y = e.DERTaggedObject,
                        b = e.ASN1Util.newObject,
                        e = Object.keys(t);
                    if (1 != e.length) throw "key of param shall be only one.";
                    e = e[0];
                    if (-1 == ":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + e + ":")) throw "undefined key: " + e;
                    if ("bool" == e) return new n(t[e]);
                    if ("int" == e) return new r(t[e]);
                    if ("bitstr" == e) return new i(t[e]);
                    if ("octstr" == e) return new o(t[e]);
                    if ("null" == e) return new s(t[e]);
                    if ("oid" == e) return new a(t[e]);
                    if ("enum" == e) return new l(t[e]);
                    if ("utf8str" == e) return new u(t[e]);
                    if ("numstr" == e) return new c(t[e]);
                    if ("prnstr" == e) return new f(t[e]);
                    if ("telstr" == e) return new h(t[e]);
                    if ("ia5str" == e) return new p(t[e]);
                    if ("utctime" == e) return new d(t[e]);
                    if ("gentime" == e) return new m(t[e]);
                    if ("seq" == e) {
                        for (var v = t[e], x = [], k = 0; k < v.length; k++) {
                            var T = b(v[k]);
                            x.push(T)
                        }
                        return new g({
                            array: x
                        })
                    }
                    if ("set" == e) {
                        for (v = t[e], x = [], k = 0; k < v.length; k++) T = b(v[k]), x.push(T);
                        return new w({
                            array: x
                        })
                    }
                    if ("tag" == e) {
                        n = t[e];
                        if ("[object Array]" === Object.prototype.toString.call(n) && 3 == n.length) return r = b(n[2]), new y({
                            tag: n[0],
                            explicit: n[1],
                            obj: r
                        });
                        i = {};
                        if (void 0 !== n.explicit && (i.explicit = n.explicit), void 0 !== n.tag && (i.tag = n.tag), void 0 === n.obj) throw "obj shall be specified for 'tag'.";
                        return i.obj = b(n.obj), new y(i)
                    }
                }, this.jsonToASN1HEX = function(t) {
                    return this.newObject(t).getEncodedHex()
                }
            }, j.asn1.ASN1Util.oidHexToInt = function(t) {
                for (var e = "", n = parseInt(t.substr(0, 2), 16), r = (e = Math.floor(n / 40) + "." + n % 40, ""), i = 2; i < t.length; i += 2) {
                    var o = ("00000000" + parseInt(t.substr(i, 2), 16).toString(2)).slice(-8);
                    r += o.substr(1, 7), "0" == o.substr(0, 1) && (e = e + "." + new m(r, 2).toString(10), r = "")
                }
                return e
            }, j.asn1.ASN1Util.oidIntToHex = function(t) {
                function a(t) {
                    return t = 1 == (t = t.toString(16)).length ? "0" + t : t
                }
                if (!t.match(/^[0-9.]+$/)) throw "malformed oid string: " + t;
                var e = "",
                    n = t.split("."),
                    t = 40 * parseInt(n[0]) + parseInt(n[1]);
                e += a(t), n.splice(0, 2);
                for (var r = 0; r < n.length; r++) e += function(t) {
                    var e = "",
                        n = new m(t, 10).toString(2),
                        r = 7 - n.length % 7;
                    7 == r && (r = 0);
                    for (var i = "", o = 0; o < r; o++) i += "0";
                    for (n = i + n, o = 0; o < n.length - 1; o += 7) {
                        var s = n.substr(o, 7);
                        o != n.length - 7 && (s = "1" + s), e += a(parseInt(s, 2))
                    }
                    return e
                }(n[r]);
                return e
            }, j.asn1.ASN1Object = function() {
                this.getLengthHexFromValue = function() {
                    if (void 0 === this.hV || null == this.hV) throw "this.hV is null or undefined.";
                    if (this.hV.length % 2 == 1) throw "value hex must be even length: n=" + "".length + ",v=" + this.hV;
                    var t = this.hV.length / 2,
                        e = t.toString(16);
                    if (e.length % 2 == 1 && (e = "0" + e), t < 128) return e;
                    var n = e.length / 2;
                    if (15 < n) throw "ASN.1 length too long to represent by 8x: n = " + t.toString(16);
                    return (128 + n).toString(16) + e
                }, this.getEncodedHex = function() {
                    return null != this.hTLV && !this.isModified || (this.hV = this.getFreshValueHex(), this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, this.isModified = !1), this.hTLV
                }, this.getValueHex = function() {
                    return this.getEncodedHex(), this.hV
                }, this.getFreshValueHex = function() {
                    return ""
                }
            }, j.asn1.DERAbstractString = function(t) {
                j.asn1.DERAbstractString.superclass.constructor.call(this), this.getString = function() {
                    return this.s
                }, this.setString = function(t) {
                    this.hTLV = null, this.isModified = !0, this.s = t, this.hV = stohex(this.s)
                }, this.setStringHex = function(t) {
                    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t
                }, this.getFreshValueHex = function() {
                    return this.hV
                }, void 0 !== t && ("string" == typeof t ? this.setString(t) : void 0 !== t.str ? this.setString(t.str) : void 0 !== t.hex && this.setStringHex(t.hex))
            }, P.lang.extend(j.asn1.DERAbstractString, j.asn1.ASN1Object), j.asn1.DERAbstractTime = function(t) {
                j.asn1.DERAbstractTime.superclass.constructor.call(this), this.localDateToUTC = function(t) {
                    return utc = t.getTime() + 6e4 * t.getTimezoneOffset(), new Date(utc)
                }, this.formatDate = function(t, e, n) {
                    var r = this.zeroPadding,
                        t = this.localDateToUTC(t),
                        i = String(t.getFullYear()),
                        e = (i = "utc" == e ? i.substr(2, 2) : i) + r(String(t.getMonth() + 1), 2) + r(String(t.getDate()), 2) + r(String(t.getHours()), 2) + r(String(t.getMinutes()), 2) + r(String(t.getSeconds()), 2);
                    return (e = !0 === n && 0 != (i = t.getMilliseconds()) ? e + "." + r(String(i), 3).replace(/[0]+$/, "") : e) + "Z"
                }, this.zeroPadding = function(t, e) {
                    return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t
                }, this.getString = function() {
                    return this.s
                }, this.setString = function(t) {
                    this.hTLV = null, this.isModified = !0, this.s = t, this.hV = stohex(t)
                }, this.setByDateValue = function(t, e, n, r, i, o) {
                    t = new Date(Date.UTC(t, e - 1, n, r, i, o, 0));
                    this.setByDate(t)
                }, this.getFreshValueHex = function() {
                    return this.hV
                }
            }, P.lang.extend(j.asn1.DERAbstractTime, j.asn1.ASN1Object), j.asn1.DERAbstractStructured = function(t) {
                j.asn1.DERAbstractString.superclass.constructor.call(this), this.setByASN1ObjectArray = function(t) {
                    this.hTLV = null, this.isModified = !0, this.asn1Array = t
                }, this.appendASN1Object = function(t) {
                    this.hTLV = null, this.isModified = !0, this.asn1Array.push(t)
                }, this.asn1Array = new Array, void 0 !== t && void 0 !== t.array && (this.asn1Array = t.array)
            }, P.lang.extend(j.asn1.DERAbstractStructured, j.asn1.ASN1Object), j.asn1.DERBoolean = function() {
                j.asn1.DERBoolean.superclass.constructor.call(this), this.hT = "01", this.hTLV = "0101ff"
            }, P.lang.extend(j.asn1.DERBoolean, j.asn1.ASN1Object), j.asn1.DERInteger = function(t) {
                j.asn1.DERInteger.superclass.constructor.call(this), this.hT = "02", this.setByBigInteger = function(t) {
                    this.hTLV = null, this.isModified = !0, this.hV = j.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
                }, this.setByInteger = function(t) {
                    t = new m(String(t), 10);
                    this.setByBigInteger(t)
                }, this.setValueHex = function(t) {
                    this.hV = t
                }, this.getFreshValueHex = function() {
                    return this.hV
                }, void 0 !== t && (void 0 !== t.bigint ? this.setByBigInteger(t.bigint) : void 0 !== t.int ? this.setByInteger(t.int) : "number" == typeof t ? this.setByInteger(t) : void 0 !== t.hex && this.setValueHex(t.hex))
            }, P.lang.extend(j.asn1.DERInteger, j.asn1.ASN1Object), j.asn1.DERBitString = function(t) {
                var e;
                void 0 !== t && void 0 !== t.obj && (e = j.asn1.ASN1Util.newObject(t.obj), t.hex = "00" + e.getEncodedHex()), j.asn1.DERBitString.superclass.constructor.call(this), this.hT = "03", this.setHexValueIncludingUnusedBits = function(t) {
                    this.hTLV = null, this.isModified = !0, this.hV = t
                }, this.setUnusedBitsAndHexValue = function(t, e) {
                    if (t < 0 || 7 < t) throw "unused bits shall be from 0 to 7: u = " + t;
                    t = "0" + t;
                    this.hTLV = null, this.isModified = !0, this.hV = t + e
                }, this.setByBinaryString = function(t) {
                    var e = 8 - (t = t.replace(/0+$/, "")).length % 8;
                    8 == e && (e = 0);
                    for (var n = 0; n <= e; n++) t += "0";
                    for (var r = "", n = 0; n < t.length - 1; n += 8) {
                        var i = t.substr(n, 8),
                            i = parseInt(i, 2).toString(16);
                        r += i = 1 == i.length ? "0" + i : i
                    }
                    this.hTLV = null, this.isModified = !0, this.hV = "0" + e + r
                }, this.setByBooleanArray = function(t) {
                    for (var e = "", n = 0; n < t.length; n++) 1 == t[n] ? e += "1" : e += "0";
                    this.setByBinaryString(e)
                }, this.newFalseArray = function(t) {
                    for (var e = new Array(t), n = 0; n < t; n++) e[n] = !1;
                    return e
                }, this.getFreshValueHex = function() {
                    return this.hV
                }, void 0 !== t && ("string" == typeof t && t.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(t) : void 0 !== t.hex ? this.setHexValueIncludingUnusedBits(t.hex) : void 0 !== t.bin ? this.setByBinaryString(t.bin) : void 0 !== t.array && this.setByBooleanArray(t.array))
            }, P.lang.extend(j.asn1.DERBitString, j.asn1.ASN1Object), j.asn1.DEROctetString = function(t) {
                var e;
                void 0 !== t && void 0 !== t.obj && (e = j.asn1.ASN1Util.newObject(t.obj), t.hex = e.getEncodedHex()), j.asn1.DEROctetString.superclass.constructor.call(this, t), this.hT = "04"
            }, P.lang.extend(j.asn1.DEROctetString, j.asn1.DERAbstractString), j.asn1.DERNull = function() {
                j.asn1.DERNull.superclass.constructor.call(this), this.hT = "05", this.hTLV = "0500"
            }, P.lang.extend(j.asn1.DERNull, j.asn1.ASN1Object), j.asn1.DERObjectIdentifier = function(t) {
                var a = function(t) {
                    t = t.toString(16);
                    return t = 1 == t.length ? "0" + t : t
                };
                j.asn1.DERObjectIdentifier.superclass.constructor.call(this), this.hT = "06", this.setValueHex = function(t) {
                    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t
                }, this.setValueOidString = function(t) {
                    if (!t.match(/^[0-9.]+$/)) throw "malformed oid string: " + t;
                    var e = "",
                        n = t.split("."),
                        t = 40 * parseInt(n[0]) + parseInt(n[1]);
                    e += a(t), n.splice(0, 2);
                    for (var r = 0; r < n.length; r++) e += function(t) {
                        var e = "",
                            n = new m(t, 10).toString(2),
                            r = 7 - n.length % 7;
                        7 == r && (r = 0);
                        for (var i = "", o = 0; o < r; o++) i += "0";
                        for (n = i + n, o = 0; o < n.length - 1; o += 7) {
                            var s = n.substr(o, 7);
                            o != n.length - 7 && (s = "1" + s), e += a(parseInt(s, 2))
                        }
                        return e
                    }(n[r]);
                    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = e
                }, this.setValueName = function(t) {
                    var e = j.asn1.x509.OID.name2oid(t);
                    if ("" === e) throw "DERObjectIdentifier oidName undefined: " + t;
                    this.setValueOidString(e)
                }, this.getFreshValueHex = function() {
                    return this.hV
                }, void 0 !== t && ("string" == typeof t ? t.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(t) : this.setValueName(t) : void 0 !== t.oid ? this.setValueOidString(t.oid) : void 0 !== t.hex ? this.setValueHex(t.hex) : void 0 !== t.name && this.setValueName(t.name))
            }, P.lang.extend(j.asn1.DERObjectIdentifier, j.asn1.ASN1Object), j.asn1.DEREnumerated = function(t) {
                j.asn1.DEREnumerated.superclass.constructor.call(this), this.hT = "0a", this.setByBigInteger = function(t) {
                    this.hTLV = null, this.isModified = !0, this.hV = j.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
                }, this.setByInteger = function(t) {
                    t = new m(String(t), 10);
                    this.setByBigInteger(t)
                }, this.setValueHex = function(t) {
                    this.hV = t
                }, this.getFreshValueHex = function() {
                    return this.hV
                }, void 0 !== t && (void 0 !== t.int ? this.setByInteger(t.int) : "number" == typeof t ? this.setByInteger(t) : void 0 !== t.hex && this.setValueHex(t.hex))
            }, P.lang.extend(j.asn1.DEREnumerated, j.asn1.ASN1Object), j.asn1.DERUTF8String = function(t) {
                j.asn1.DERUTF8String.superclass.constructor.call(this, t), this.hT = "0c"
            }, P.lang.extend(j.asn1.DERUTF8String, j.asn1.DERAbstractString), j.asn1.DERNumericString = function(t) {
                j.asn1.DERNumericString.superclass.constructor.call(this, t), this.hT = "12"
            }, P.lang.extend(j.asn1.DERNumericString, j.asn1.DERAbstractString), j.asn1.DERPrintableString = function(t) {
                j.asn1.DERPrintableString.superclass.constructor.call(this, t), this.hT = "13"
            }, P.lang.extend(j.asn1.DERPrintableString, j.asn1.DERAbstractString), j.asn1.DERTeletexString = function(t) {
                j.asn1.DERTeletexString.superclass.constructor.call(this, t), this.hT = "14"
            }, P.lang.extend(j.asn1.DERTeletexString, j.asn1.DERAbstractString), j.asn1.DERIA5String = function(t) {
                j.asn1.DERIA5String.superclass.constructor.call(this, t), this.hT = "16"
            }, P.lang.extend(j.asn1.DERIA5String, j.asn1.DERAbstractString), j.asn1.DERUTCTime = function(t) {
                j.asn1.DERUTCTime.superclass.constructor.call(this, t), this.hT = "17", this.setByDate = function(t) {
                    this.hTLV = null, this.isModified = !0, this.date = t, this.s = this.formatDate(this.date, "utc"), this.hV = stohex(this.s)
                }, this.getFreshValueHex = function() {
                    return void 0 === this.date && void 0 === this.s && (this.date = new Date, this.s = this.formatDate(this.date, "utc"), this.hV = stohex(this.s)), this.hV
                }, void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{12}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date))
            }, P.lang.extend(j.asn1.DERUTCTime, j.asn1.DERAbstractTime), j.asn1.DERGeneralizedTime = function(t) {
                j.asn1.DERGeneralizedTime.superclass.constructor.call(this, t), this.hT = "18", this.withMillis = !1, this.setByDate = function(t) {
                    this.hTLV = null, this.isModified = !0, this.date = t, this.s = this.formatDate(this.date, "gen", this.withMillis), this.hV = stohex(this.s)
                }, this.getFreshValueHex = function() {
                    return void 0 === this.date && void 0 === this.s && (this.date = new Date, this.s = this.formatDate(this.date, "gen", this.withMillis), this.hV = stohex(this.s)), this.hV
                }, void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{14}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date), !0 === t.millis) && (this.withMillis = !0)
            }, P.lang.extend(j.asn1.DERGeneralizedTime, j.asn1.DERAbstractTime), j.asn1.DERSequence = function(t) {
                j.asn1.DERSequence.superclass.constructor.call(this, t), this.hT = "30", this.getFreshValueHex = function() {
                    for (var t = "", e = 0; e < this.asn1Array.length; e++) t += this.asn1Array[e].getEncodedHex();
                    return this.hV = t, this.hV
                }
            }, P.lang.extend(j.asn1.DERSequence, j.asn1.DERAbstractStructured), j.asn1.DERSet = function(t) {
                j.asn1.DERSet.superclass.constructor.call(this, t), this.hT = "31", this.sortFlag = !0, this.getFreshValueHex = function() {
                    for (var t = new Array, e = 0; e < this.asn1Array.length; e++) {
                        var n = this.asn1Array[e];
                        t.push(n.getEncodedHex())
                    }
                    return 1 == this.sortFlag && t.sort(), this.hV = t.join(""), this.hV
                }, void 0 !== t && void 0 !== t.sortflag && 0 == t.sortflag && (this.sortFlag = !1)
            }, P.lang.extend(j.asn1.DERSet, j.asn1.DERAbstractStructured), j.asn1.DERTaggedObject = function(t) {
                j.asn1.DERTaggedObject.superclass.constructor.call(this), this.hT = "a0", this.hV = "", this.isExplicit = !0, this.asn1Object = null, this.setASN1Object = function(t, e, n) {
                    this.hT = e, this.isExplicit = t, this.asn1Object = n, this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(), this.hTLV = null, this.isModified = !0) : (this.hV = null, this.hTLV = n.getEncodedHex(), this.hTLV = this.hTLV.replace(/^../, e), this.isModified = !1)
                }, this.getFreshValueHex = function() {
                    return this.hV
                }, void 0 !== t && (void 0 !== t.tag && (this.hT = t.tag), void 0 !== t.explicit && (this.isExplicit = t.explicit), void 0 !== t.obj) && (this.asn1Object = t.obj, this.setASN1Object(this.isExplicit, this.hT, this.asn1Object))
            }, P.lang.extend(j.asn1.DERTaggedObject, j.asn1.ASN1Object), F(lt = R, P = at = B), lt.prototype = null === P ? Object.create(P) : (ft.prototype = P.prototype, new ft), R.prototype.parseKey = function(t) {
                try {
                    var e = 0,
                        n = 0,
                        r = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(t) ? function(t) {
                            if (void 0 === h) {
                                var e = "0123456789ABCDEF",
                                    n = " \f\n\r\t \u2028\u2029";
                                for (h = {}, s = 0; s < 16; ++s) h[e.charAt(s)] = s;
                                for (e = e.toLowerCase(), s = 10; s < 16; ++s) h[e.charAt(s)] = s;
                                for (s = 0; s < n.length; ++s) h[n.charAt(s)] = -1
                            }
                            for (var r = [], i = 0, o = 0, s = 0; s < t.length; ++s) {
                                var a = t.charAt(s);
                                if ("=" == a) break;
                                if (-1 != (a = h[a])) {
                                    if (void 0 === a) throw new Error("Illegal character at offset " + s);
                                    i |= a, 2 <= ++o ? (r[r.length] = i, o = i = 0) : i <<= 4
                                }
                            }
                            if (o) throw new Error("Hex encoding incomplete: 4 bits missing");
                            return r
                        }(t) : _.unarmor(t),
                        i = $.decode(r);
                    if (9 === (i = 3 === i.sub.length ? i.sub[2].sub[0] : i).sub.length) {
                        e = i.sub[1].getHexStringValue(), this.n = v(e, 16), n = i.sub[2].getHexStringValue(), this.e = parseInt(n, 16);
                        var o = i.sub[3].getHexStringValue(),
                            s = (this.d = v(o, 16), i.sub[4].getHexStringValue()),
                            a = (this.p = v(s, 16), i.sub[5].getHexStringValue()),
                            l = (this.q = v(a, 16), i.sub[6].getHexStringValue()),
                            u = (this.dmp1 = v(l, 16), i.sub[7].getHexStringValue()),
                            c = (this.dmq1 = v(u, 16), i.sub[8].getHexStringValue());
                        this.coeff = v(c, 16)
                    } else {
                        if (2 !== i.sub.length) return !1;
                        var f = i.sub[1].sub[0],
                            e = f.sub[0].getHexStringValue();
                        this.n = v(e, 16), n = f.sub[1].getHexStringValue(), this.e = parseInt(n, 16)
                    }
                    return !0
                } catch (t) {
                    return !1
                }
            }, R.prototype.getPrivateBaseKey = function() {
                var t = {
                    array: [new j.asn1.DERInteger({
                        int: 0
                    }), new j.asn1.DERInteger({
                        bigint: this.n
                    }), new j.asn1.DERInteger({
                        int: this.e
                    }), new j.asn1.DERInteger({
                        bigint: this.d
                    }), new j.asn1.DERInteger({
                        bigint: this.p
                    }), new j.asn1.DERInteger({
                        bigint: this.q
                    }), new j.asn1.DERInteger({
                        bigint: this.dmp1
                    }), new j.asn1.DERInteger({
                        bigint: this.dmq1
                    }), new j.asn1.DERInteger({
                        bigint: this.coeff
                    })]
                };
                return new j.asn1.DERSequence(t).getEncodedHex()
            }, R.prototype.getPrivateBaseKeyB64 = function() {
                return r(this.getPrivateBaseKey())
            }, R.prototype.getPublicBaseKey = function() {
                var t = new j.asn1.DERSequence({
                        array: [new j.asn1.DERObjectIdentifier({
                            oid: "1.2.840.113549.1.1.1"
                        }), new j.asn1.DERNull]
                    }),
                    e = new j.asn1.DERSequence({
                        array: [new j.asn1.DERInteger({
                            bigint: this.n
                        }), new j.asn1.DERInteger({
                            int: this.e
                        })]
                    }),
                    e = new j.asn1.DERBitString({
                        hex: "00" + e.getEncodedHex()
                    });
                return new j.asn1.DERSequence({
                    array: [t, e]
                }).getEncodedHex()
            }, R.prototype.getPublicBaseKeyB64 = function() {
                return r(this.getPublicBaseKey())
            }, R.wordwrap = function(t, e) {
                return t && (e = "(.{1," + (e = e || 64) + "})( +|$\n?)|(.{1," + e + "})", t.match(RegExp(e, "g")).join("\n"))
            }, R.prototype.getPrivateKey = function() {
                var t = "-----BEGIN RSA PRIVATE KEY-----\n";
                return (t += R.wordwrap(this.getPrivateBaseKeyB64()) + "\n") + "-----END RSA PRIVATE KEY-----"
            }, R.prototype.getPublicKey = function() {
                var t = "-----BEGIN PUBLIC KEY-----\n";
                return (t += R.wordwrap(this.getPublicBaseKeyB64()) + "\n") + "-----END PUBLIC KEY-----"
            }, R.hasPublicKeyProperty = function(t) {
                return (t = t || {}).hasOwnProperty("n") && t.hasOwnProperty("e")
            }, R.hasPrivateKeyProperty = function(t) {
                return (t = t || {}).hasOwnProperty("n") && t.hasOwnProperty("e") && t.hasOwnProperty("d") && t.hasOwnProperty("p") && t.hasOwnProperty("q") && t.hasOwnProperty("dmp1") && t.hasOwnProperty("dmq1") && t.hasOwnProperty("coeff")
            }, R.prototype.parsePropertiesFrom = function(t) {
                this.n = t.n, this.e = t.e, t.hasOwnProperty("d") && (this.d = t.d, this.p = t.p, this.q = t.q, this.dmp1 = t.dmp1, this.dmq1 = t.dmq1, this.coeff = t.coeff)
            }, R),
            B = (L.prototype.setKey = function(t) {
                this.log && this.key, this.key = new ct(t)
            }, L.prototype.setPrivateKey = function(t) {
                this.setKey(t)
            }, L.prototype.setPublicKey = function(t) {
                this.setKey(t)
            }, L.prototype.decrypt = function(t) {
                try {
                    return this.getKey().decrypt(V(t))
                } catch (t) {
                    return !1
                }
            }, L.prototype.encrypt = function(t) {
                try {
                    return r(this.getKey().encrypt(t))
                } catch (t) {
                    return !1
                }
            }, L.prototype.sign = function(t, e, n) {
                try {
                    return r(this.getKey().sign(t, e, n))
                } catch (t) {
                    return !1
                }
            }, L.prototype.verify = function(t, e, n) {
                try {
                    return this.getKey().verify(t, V(e), n)
                } catch (t) {
                    return !1
                }
            }, L.prototype.getKey = function(t) {
                if (!this.key) {
                    if (this.key = new ct, t && "[object Function]" === {}.toString.call(t)) return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, t);
                    this.key.generate(this.default_key_size, this.default_public_exponent)
                }
                return this.key
            }, L.prototype.getPrivateKey = function() {
                return this.getKey().getPrivateKey()
            }, L.prototype.getPrivateKeyB64 = function() {
                return this.getKey().getPrivateBaseKeyB64()
            }, L.prototype.getPublicKey = function() {
                return this.getKey().getPublicKey()
            }, L.prototype.getPublicKeyB64 = function() {
                return this.getKey().getPublicBaseKeyB64()
            }, L.version = "3.0.0-rc.1", L);

        function L(t) {
            t = t || {}, this.default_key_size = parseInt(t.default_key_size, 10) || 1024, this.default_public_exponent = t.default_public_exponent || "010001", this.log = t.log || !1, this.key = null
        }

        function R(t) {
            var e = at.call(this) || this;
            return t && ("string" == typeof t ? e.parseKey(t) : (R.hasPrivateKeyProperty(t) || R.hasPublicKeyProperty(t)) && e.parsePropertiesFrom(t)), e
        }

        function ft() {
            this.constructor = lt
        }
        window.JSEncrypt = B, I.JSEncrypt = B, I.default = B, Object.defineProperty(I, "__esModule", {
            value: !0
        })
    });
var ads_SuccessCallBack = null,
    ads_FailCallBack = null,
    ads_Action = null,
    ads_Position = null,
    ads_IsInit = !1,
    gdsdk = null;

function adsInit(t, e) {
    var n, r, i;
    ads_IsInit || (window.GD_OPTIONS = {
        gameId: Define.azerionID,
        onEvent: function(t) {
            switch (t.name) {
                case "SDK_GAME_START":
                    __GameContinue();
                    break;
                case "SDK_GAME_PAUSE":
                    __GamePause()
            }
        }
    }, n = document, r = "gamedistribution-jssdk", i = n.getElementsByTagName("script")[0], n.getElementById(r) || ((n = n.createElement("script")).id = r, n.src = "", i.parentNode.insertBefore(n, i)), ads_IsInit = !0)
}
var __isPaused = !1;

function __GamePause() {
    "undefined" != typeof Phaser && null == Define.PHASER_3 && MG && MG.game && null != MG.game.paused && (__isPaused = MG.game.paused, MG.game.paused = !0)
}

function __GameContinue() {
    "undefined" != typeof Phaser && null == Define.PHASER_3 && MG && MG.game && null != MG.game.paused && !1 === __isPaused && (MG.game.paused = !1)
}

function ShowAD(t, e, n, r, i) {
    if (null == gdsdk) r && r();
    else switch (ads_Position = e, null == i && (i = !0), ads_Action = t) {
        case "basic":
            gdsdk.showAd().then(t => {
                n()
            }).catch(t => {
                r()
            });
            break;
        case "reward":
            gdsdk.showAd("rewarded").then(t => {
                n()
            }).catch(t => {
                r()
            })
    }
}

function ads_FailCallBackAlert(t) {
    MG && MG.alert ? MG.alert("", Define.LANG == Define.tbLang[0] ? "광고가 소진되었거나,\n광고 불러오기에 실패하였습니다.\n잠시 후 다시 시도해주세요." : "No more available ads to watch,\nor they failed to load.\nPlease try again later.", function() {
        t && t(), __GameContinue()
    }) : (t && t(), __GameContinue())
}
var hidden2, visibilityChange2, PopconGame = PopconGame || {};

function handleVisibilityChange2() {
    null != MSSDK && (document[hidden2] ? MSSDK.status = "BACKGROUND" : (MSSDK.status = "FOREGROUND", MSSDK.setFocus()))
}

function MoviSoftSDK() {
    this.status = "FOREGROUND", this.tSetTimeout = void 0, this.LANG = "ko", this.isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i)
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i)
        }
    }, this.interval = setInterval(function() {
        "undefined" != typeof MG && (clearInterval(this.interval), Define.bLocalHost, MG.iMSH, Define.DEVICE, Define.tbLang)
    }.bind(this), 1e3), this.isMobile.iOS() && setInterval(function() {
        try {
            "undefined" != typeof Phaser ? "running" !== MG.game.sound.context.state && null == this.tSetTimeout && (this.tSetTimeout = setTimeout(function() {
                this.tSetTimeout = void 0, "suspended" === MG.game.sound.context.state && MG.game.sound.context.resume()
            }.bind(this), 1e3)) : "undefined" != typeof PIXI && null == this.tSetTimeout ? Howler && "running" !== Howler.ctx.state && (this.tSetTimeout = setTimeout(function() {
                this.tSetTimeout = void 0, "suspended" === Howler.ctx.state && Howler.ctx.resume()
            }, 1e3)) : "undefined" != typeof pc && void 0 !== pc.app && null == this.tSetTimeout && "running" !== pc.app.systems.sound.context.state && (this.tSetTimeout = setTimeout(function() {
                this.tSetTimeout = void 0, "suspended" === pc.app.systems.sound.context.state && pc.app.systems.sound.context.resume()
            }, 1e3))
        } catch (t) {}
    }, 1e3)
}
PopconGame.Ads = {
    beforeReward: !1,
    TE_Update: void 0,
    iSideWaitCnt: 0,
    TE_UpdateBottom: void 0,
    iWaitCnt: 0,
    info: void 0,
    cbBaseResize: void 0
}, PopconGame.Ads.Init = function() {
    this.info && this.info.isBanner
}, void 0 !== document.hidden ? (hidden2 = "hidden", visibilityChange2 = "visibilitychange") : void 0 !== document.msHidden ? (hidden2 = "msHidden", visibilityChange2 = "msvisibilitychange") : void 0 !== document.webkitHidden && (hidden2 = "webkitHidden", visibilityChange2 = "webkitvisibilitychange"), document.addEventListener(visibilityChange2, handleVisibilityChange2, !1), (PopconGame = PopconGame || {}).Sdk = {}, PopconGame.Sdk.exitGame = function() {}, PopconGame.Sdk.log = function() {}, MoviSoftSDK.prototype = {
    initializeAsync: function(t, e) {
        this.cb = e, MSSDK.LANG = "en", this.setBackKey(), e(), MG.NM.Init()
    },
    getParameterByName: function(t) {
        if ("lang" === t) return "en";
        t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        t = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(location.search);
        return null === t ? "" : decodeURIComponent(t[1].replace(/%20/gi, "+").replace(/%2F/gi, "/"))
    },
    setFocus: function() {},
    setBackKey: function() {},
    getBackBotton: function() {
        return this.getBackButton()
    },
    getBackButton: function() {
        return !1
    },
    gameExit: function(t) {
        t && history.back();
        t = "ko" == MSSDK.LANG ? "게임을 종료하시겠습니까?" : "Do you want to exit?";
        MG.confirm("", t, "YES", "NO", function() {
            MSSDK.exitGame()
        }, function() {
            history.pushState(null, document.title, location.href)
        })
    },
    exitGame: function() {
        switch (Define.PID) {
            case "100003":
                var t = JSON.stringify({
                    action: "closeGame",
                    item_type: "FINISH"
                });
                /Android/i.test(navigator.userAgent) ? ichamp.closeGame(t) : /iPhone|iPad|iPod/i.test(navigator.userAgent) && window.webkit.messageHandlers.ichamp.postMessage(t);
                break;
            case "100010":
                window.location.href = "cashwalk://back";
                break;
            case "100026":
                "1" != getParameterName("cw_zone") && "1" == getParameterName("movi_zone") ? history.back() : window.location.href = "cashwalk://back";
                break;
            case "100067":
                window.location.href = "cwusapp://back";
                break;
            case "100048":
                window.location.href = "fineminigame://endGame";
                break;
            case "100064":
            case "100065":
            case "100066":
                /Android/i.test(navigator.userAgent) ? navigator.app.exitApp() : window.parent.postMessage({
                    from: "app_exit",
                    type: "exit"
                }, "*");
                break;
            case "100052":
                t = {};
                /Android/i.test(navigator.userAgent) ? MoviSoftJSHandler.closeGame(JSON.stringify(t)) : /iPhone|iPad|iPod/i.test(navigator.userAgent) && window.webkit.messageHandlers.closeGame.postMessage(t);
                break;
            default:
                Define.DEVICE == Enum.DEVICE_STATE.PC ? 0 == history.back.length ? window.close() : history.back() : (history.back(), history.back())
        }
    },
    ShowLoading: function() {
        var t, e;
        null == this.loading && (e = '#link {color: #E45635;display:block;font: 12px "Helvetica Neue", Helvetica, Arial, sans-serif;text-align:center; text-decoration: none;}\n#link:hover {color: #ffffff}\n\n#link, #link:hover {-webkit-transition: color 0.5s ease-out;-moz-transition: color 0.5s ease-out;-ms-transition: color 0.5s ease-out;-o-transition: color 0.5s ease-out;transition: color 0.5s ease-out;}\n\n/** BEGIN CSS **/\nbody {background: #333333;}\n@keyframes rotate-loading {\n  0%  {transform: rotate(0deg);-ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); -o-transform: rotate(0deg); -moz-transform: rotate(0deg);}\n  100% {transform: rotate(360deg);-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); -o-transform: rotate(360deg); -moz-transform: rotate(360deg);}\n}\n\n@-moz-keyframes rotate-loading {\n  0%  {transform: rotate(0deg);-ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); -o-transform: rotate(0deg); -moz-transform: rotate(0deg);}\n  100% {transform: rotate(360deg);-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); -o-transform: rotate(360deg); -moz-transform: rotate(360deg);}\n}\n\n@-webkit-keyframes rotate-loading {\n  0%  {transform: rotate(0deg);-ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); -o-transform: rotate(0deg); -moz-transform: rotate(0deg);}\n  100% {transform: rotate(360deg);-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); -o-transform: rotate(360deg); -moz-transform: rotate(360deg);}\n}\n\n@-o-keyframes rotate-loading {\n  0%  {transform: rotate(0deg);-ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); -o-transform: rotate(0deg); -moz-transform: rotate(0deg);}\n  100% {transform: rotate(360deg);-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); -o-transform: rotate(360deg); -moz-transform: rotate(360deg);}\n}\n\n@keyframes rotate-loading {\n  0%  {transform: rotate(0deg);-ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); -o-transform: rotate(0deg); -moz-transform: rotate(0deg);}\n  100% {transform: rotate(360deg);-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); -o-transform: rotate(360deg); -moz-transform: rotate(360deg);}\n}\n\n@-moz-keyframes rotate-loading {\n  0%  {transform: rotate(0deg);-ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); -o-transform: rotate(0deg); -moz-transform: rotate(0deg);}\n  100% {transform: rotate(360deg);-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); -o-transform: rotate(360deg); -moz-transform: rotate(360deg);}\n}\n\n@-webkit-keyframes rotate-loading {\n  0%  {transform: rotate(0deg);-ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); -o-transform: rotate(0deg); -moz-transform: rotate(0deg);}\n  100% {transform: rotate(360deg);-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); -o-transform: rotate(360deg); -moz-transform: rotate(360deg);}\n}\n\n@-o-keyframes rotate-loading {\n  0%  {transform: rotate(0deg);-ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); -o-transform: rotate(0deg); -moz-transform: rotate(0deg);}\n  100% {transform: rotate(360deg);-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); -o-transform: rotate(360deg); -moz-transform: rotate(360deg);}\n}\n\n.loading-container,\n.loading {\n  height: 100px;\n  position: relative;\n  width: 100px;\n  border-radius: 100%;\n}\n\n.loading-container { margin: 40px auto }\n\n.loading {\n  border: 4px solid transparent;\n  border-color: transparent #fff transparent #FFF;\n  -moz-animation: rotate-loading 1.5s linear 0s infinite normal;\n  -moz-transform-origin: 50% 50%;\n  -o-animation: rotate-loading 1.5s linear 0s infinite normal;\n  -o-transform-origin: 50% 50%;\n  -webkit-animation: rotate-loading 1.5s linear 0s infinite normal;\n  -webkit-transform-origin: 50% 50%;\n  animation: rotate-loading 1.5s linear 0s infinite normal;\n  transform-origin: 50% 50%;\n}\n\n.loading-container:hover .loading {\n  border-color: transparent #E45635 transparent #E45635;\n}\n.loading-container:hover .loading,\n.loading-container .loading {\n  -webkit-transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -ms-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n}\n\n#loading-text {\n  color: #ffffff;\n  font-family: "Helvetica Neue, "Helvetica", ""arial";\n  font-size: 10px;\n  font-weight: bold;\n  margin-top: 45px;\n  opacity: 1;\n  position: absolute;\n  text-align: center;\n  text-transform: uppercase;\n  top: 0;\n  width: 108px;\n}', (t = document.createElement("style")).setAttribute("type", "text/css"), t.styleSheet ? t.styleSheet.cssText = e : (e = document.createTextNode(e), t.appendChild(e)), document.getElementsByTagName("head")[0].appendChild(t), e = '<div id="loading" class="loading-container" style="position:absolute;z-index:11;left:50%;top:50%;transform:translateX(-50%) translateY(-50%);">', this.loading = e = (e += '<div class="loading"></div>') + '<div id="loading-text">loading</div>' + "</div>", $("body").append('<div id="mask" style="position:absolute;z-index:10;background-color:#ffffff;display:none;left:0;top:0;width:100%;height:100%;opacity:0;"></div>').append(e), $("#mask").show(), $("#loading").hide()), this.timeID && (clearTimeout(this.timeID), this.timeID = void 0), this.timeID = setTimeout(function() {
            this.timeID = void 0, $("#loading").show()
        }.bind(this), 500)
    },
    HideLoading: function() {
        $("#mask").hide(), $("#loading").hide(), this.timeID && clearTimeout(this.timeID)
    }
};
var MSSDK = new MoviSoftSDK;

function NetworkManager() {
    Define.GameName, Define.SAVE_KEY, this.SERVER_URL, this.user_id = "LOCAL_TEST", this.user_nick = "", this.user_token = "", this.feed_id = "", this.bGameStart = !1, this.week_info = void 0, this.fSaveTime = 0, this.fPlayTime = 0, this.interval = setInterval(function() {
        "FOREGROUND" == MSSDK.status && (this.fPlayTime += 2)
    }.bind(this), 2e3)
}
NetworkManager.prototype = {
    Init: function(t) {
        this.SERVER_URL = t
    },
    start: function(t, e) {
        e && e()
    },
    end: function(t, e) {
        e && e()
    },
    LocalSave: function(t) {
        null != this.bSaveLoad && (kData.saveTime = new Date, localStorage.setItem(Define.SAVE_KEY, JSON.stringify(kData)), t && t(), "function" == typeof t) && t()
    },
    LocalLoad: function(t) {
        var e = localStorage.getItem(Define.SAVE_KEY);
        this.bSaveLoad = !0, e ? kData = JSON.parse(e) : this.LocalSave(), t && t()
    }
};