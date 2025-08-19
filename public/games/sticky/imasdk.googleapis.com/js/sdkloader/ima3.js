// Copyright 2011 Google Inc. All Rights Reserved. 
(function() {
    var m, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ba = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        da = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c
            }
            throw Error("Cannot find global object");
        },
        fa = da(this),
        ia = function(a, b) {
            if (b) a: {
                var c = fa;a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c)) break a;
                    c = c[e]
                }
                a = a[a.length - 1];d = c[a];b = b(d);b != d && b != null && ba(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
        };
    ia("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.g = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.g
        };
        var c = "jscomp_symbol_" + (Math.random() * 1E9 >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    });
    ia("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = fa[b[c]];
            typeof d === "function" && typeof d.prototype[a] != "function" && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ka(aa(this))
                }
            })
        }
        return a
    });
    var ka = function(a) {
            a = {
                next: a
            };
            a[Symbol.iterator] = function() {
                return this
            };
            return a
        },
        la = typeof Object.create == "function" ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ma = function() {
            function a() {
                function c() {}
                new c;
                Reflect.construct(c, [], function() {});
                return new c instanceof c
            }
            if (typeof Reflect != "undefined" && Reflect.construct) {
                if (a()) return Reflect.construct;
                var b = Reflect.construct;
                return function(c, d, e) {
                    c = b(c, d);
                    e && Reflect.setPrototypeOf(c, e.prototype);
                    return c
                }
            }
            return function(c,
                d, e) {
                e === void 0 && (e = c);
                e = la(e.prototype || Object.prototype);
                return Function.prototype.apply.call(c, e, d) || e
            }
        }(),
        na;
    if (typeof Object.setPrototypeOf == "function") na = Object.setPrototypeOf;
    else {
        var oa;
        a: {
            var pa = {
                    a: !0
                },
                qa = {};
            try {
                qa.__proto__ = pa;
                oa = qa.a;
                break a
            } catch (a) {}
            oa = !1
        }
        na = oa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ra = na,
        r = function(a, b) {
            a.prototype = la(b.prototype);
            a.prototype.constructor = a;
            if (ra) ra(a, b);
            else
                for (var c in b)
                    if (c != "prototype")
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Za = b.prototype
        },
        v = function(a) {
            var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
            if (b) return b.call(a);
            if (typeof a.length == "number") return {
                next: aa(a)
            };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        },
        sa = function(a) {
            for (var b,
                    c = []; !(b = a.next()).done;) c.push(b.value);
            return c
        },
        ta = function(a) {
            return a instanceof Array ? a : sa(v(a))
        },
        va = function(a) {
            return ua(a, a)
        },
        ua = function(a, b) {
            a.raw = b;
            Object.freeze && (Object.freeze(a), Object.freeze(b));
            return a
        },
        wa = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        xa = typeof Object.assign == "function" ? Object.assign : function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d) wa(d, e) && (a[e] = d[e])
            }
            return a
        };
    ia("Object.assign", function(a) {
        return a || xa
    });
    var Aa = function() {
            this.A = !1;
            this.o = null;
            this.j = void 0;
            this.g = 1;
            this.I = this.l = 0;
            this.B = null
        },
        Ca = function(a) {
            if (a.A) throw new TypeError("Generator is already running");
            a.A = !0
        };
    Aa.prototype.C = function(a) {
        this.j = a
    };
    var Da = function(a, b) {
        a.B = {
            lf: b,
            yh: !0
        };
        a.g = a.l || a.I
    };
    Aa.prototype.return = function(a) {
        this.B = {
            return: a
        };
        this.g = this.I
    };
    var Ea = function(a, b, c) {
            a.g = c;
            return {
                value: b
            }
        },
        Ha = function(a, b) {
            a.g = b;
            a.l = 0
        },
        Ia = function(a) {
            a.l = 0;
            var b = a.B.lf;
            a.B = null;
            return b
        },
        Ja = function(a) {
            this.g = new Aa;
            this.j = a
        },
        Ma = function(a, b) {
            Ca(a.g);
            var c = a.g.o;
            if (c) return Ka(a, "return" in c ? c["return"] : function(d) {
                return {
                    value: d,
                    done: !0
                }
            }, b, a.g.return);
            a.g.return(b);
            return La(a)
        },
        Ka = function(a, b, c, d) {
            try {
                var e = b.call(a.g.o, c);
                if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
                if (!e.done) return a.g.A = !1, e;
                var f = e.value
            } catch (g) {
                return a.g.o =
                    null, Da(a.g, g), La(a)
            }
            a.g.o = null;
            d.call(a.g, f);
            return La(a)
        },
        La = function(a) {
            for (; a.g.g;) try {
                var b = a.j(a.g);
                if (b) return a.g.A = !1, {
                    value: b.value,
                    done: !1
                }
            } catch (c) {
                a.g.j = void 0, Da(a.g, c)
            }
            a.g.A = !1;
            if (a.g.B) {
                b = a.g.B;
                a.g.B = null;
                if (b.yh) throw b.lf;
                return {
                    value: b.return,
                    done: !0
                }
            }
            return {
                value: void 0,
                done: !0
            }
        },
        Oa = function(a) {
            this.next = function(b) {
                Ca(a.g);
                a.g.o ? b = Ka(a, a.g.o.next, b, a.g.C) : (a.g.C(b), b = La(a));
                return b
            };
            this.throw = function(b) {
                Ca(a.g);
                a.g.o ? b = Ka(a, a.g.o["throw"], b, a.g.C) : (Da(a.g, b), b = La(a));
                return b
            };
            this.return = function(b) {
                return Ma(a, b)
            };
            this[Symbol.iterator] = function() {
                return this
            }
        },
        Pa = function(a) {
            function b(d) {
                return a.next(d)
            }

            function c(d) {
                return a.throw(d)
            }
            return new Promise(function(d, e) {
                function f(g) {
                    g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
                }
                f(a.next())
            })
        },
        Qa = function(a) {
            return Pa(new Oa(new Ja(a)))
        },
        Ra = function() {
            for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
            return b
        };
    ia("globalThis", function(a) {
        return a || fa
    });
    ia("Reflect", function(a) {
        return a ? a : {}
    });
    ia("Reflect.construct", function() {
        return ma
    });
    ia("Reflect.setPrototypeOf", function(a) {
        return a ? a : ra ? function(b, c) {
            try {
                return ra(b, c), !0
            } catch (d) {
                return !1
            }
        } : null
    });
    ia("Promise", function(a) {
        function b() {
            this.g = null
        }

        function c(g) {
            return g instanceof e ? g : new e(function(h) {
                h(g)
            })
        }
        if (a) return a;
        b.prototype.j = function(g) {
            if (this.g == null) {
                this.g = [];
                var h = this;
                this.l(function() {
                    h.B()
                })
            }
            this.g.push(g)
        };
        var d = fa.setTimeout;
        b.prototype.l = function(g) {
            d(g, 0)
        };
        b.prototype.B = function() {
            for (; this.g && this.g.length;) {
                var g = this.g;
                this.g = [];
                for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.o(l)
                    }
                }
            }
            this.g = null
        };
        b.prototype.o = function(g) {
            this.l(function() {
                throw g;
            })
        };
        var e = function(g) {
            this.g = 0;
            this.l = void 0;
            this.j = [];
            this.C = !1;
            var h = this.o();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        };
        e.prototype.o = function() {
            function g(l) {
                return function(n) {
                    k || (k = !0, l.call(h, n))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.H),
                reject: g(this.B)
            }
        };
        e.prototype.H = function(g) {
            if (g === this) this.B(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof e) this.M(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = g != null;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ?
                this.G(g) : this.A(g)
            }
        };
        e.prototype.G = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.B(k);
                return
            }
            typeof h == "function" ? this.P(h, g) : this.A(g)
        };
        e.prototype.B = function(g) {
            this.I(2, g)
        };
        e.prototype.A = function(g) {
            this.I(1, g)
        };
        e.prototype.I = function(g, h) {
            if (this.g != 0) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.g);
            this.g = g;
            this.l = h;
            this.g === 2 && this.K();
            this.L()
        };
        e.prototype.K = function() {
            var g = this;
            d(function() {
                    if (g.F()) {
                        var h = fa.console;
                        typeof h !== "undefined" && h.error(g.l)
                    }
                },
                1)
        };
        e.prototype.F = function() {
            if (this.C) return !1;
            var g = fa.CustomEvent,
                h = fa.Event,
                k = fa.dispatchEvent;
            if (typeof k === "undefined") return !0;
            typeof g === "function" ? g = new g("unhandledrejection", {
                cancelable: !0
            }) : typeof h === "function" ? g = new h("unhandledrejection", {
                cancelable: !0
            }) : (g = fa.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.l;
            return k(g)
        };
        e.prototype.L = function() {
            if (this.j != null) {
                for (var g = 0; g < this.j.length; ++g) f.j(this.j[g]);
                this.j =
                    null
            }
        };
        var f = new b;
        e.prototype.M = function(g) {
            var h = this.o();
            g.Uc(h.resolve, h.reject)
        };
        e.prototype.P = function(g, h) {
            var k = this.o();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        e.prototype.then = function(g, h) {
            function k(q, u) {
                return typeof q == "function" ? function(w) {
                    try {
                        l(q(w))
                    } catch (t) {
                        n(t)
                    }
                } : u
            }
            var l, n, p = new e(function(q, u) {
                l = q;
                n = u
            });
            this.Uc(k(g, l), k(h, n));
            return p
        };
        e.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        e.prototype.Uc = function(g, h) {
            function k() {
                switch (l.g) {
                    case 1:
                        g(l.l);
                        break;
                    case 2:
                        h(l.l);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.g);
                }
            }
            var l = this;
            this.j == null ? f.j(k) : this.j.push(k);
            this.C = !0
        };
        e.resolve = c;
        e.reject = function(g) {
            return new e(function(h, k) {
                k(g)
            })
        };
        e.race = function(g) {
            return new e(function(h, k) {
                for (var l = v(g), n = l.next(); !n.done; n = l.next()) c(n.value).Uc(h, k)
            })
        };
        e.all = function(g) {
            var h = v(g),
                k = h.next();
            return k.done ? c([]) : new e(function(l, n) {
                function p(w) {
                    return function(t) {
                        q[w] = t;
                        u--;
                        u == 0 && l(q)
                    }
                }
                var q = [],
                    u = 0;
                do q.push(void 0), u++, c(k.value).Uc(p(q.length -
                    1), n), k = h.next(); while (!k.done)
            })
        };
        return e
    });
    ia("Object.setPrototypeOf", function(a) {
        return a || ra
    });
    ia("Symbol.dispose", function(a) {
        return a ? a : Symbol("Symbol.dispose")
    });
    ia("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    });
    ia("WeakMap", function(a) {
        function b() {}

        function c(k) {
            var l = typeof k;
            return l === "object" && k !== null || l === "function"
        }

        function d(k) {
            if (!wa(k, f)) {
                var l = new b;
                ba(k, f, {
                    value: l
                })
            }
        }

        function e(k) {
            var l = Object[k];
            l && (Object[k] = function(n) {
                if (n instanceof b) return n;
                Object.isExtensible(n) && d(n);
                return l(n)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var k = Object.seal({}),
                        l = Object.seal({}),
                        n = new a([
                            [k, 2],
                            [l, 3]
                        ]);
                    if (n.get(k) != 2 || n.get(l) != 3) return !1;
                    n.delete(k);
                    n.set(l, 4);
                    return !n.has(k) && n.get(l) == 4
                } catch (p) {
                    return !1
                }
            }()) return a;
        var f = "$jscomp_hidden_" + Math.random();
        e("freeze");
        e("preventExtensions");
        e("seal");
        var g = 0,
            h = function(k) {
                this.g = (g += Math.random() + 1).toString();
                if (k) {
                    k = v(k);
                    for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
                }
            };
        h.prototype.set = function(k, l) {
            if (!c(k)) throw Error("Invalid WeakMap key");
            d(k);
            if (!wa(k, f)) throw Error("WeakMap key fail: " + k);
            k[f][this.g] = l;
            return this
        };
        h.prototype.get = function(k) {
            return c(k) && wa(k, f) ? k[f][this.g] : void 0
        };
        h.prototype.has = function(k) {
            return c(k) && wa(k, f) && wa(k[f],
                this.g)
        };
        h.prototype.delete = function(k) {
            return c(k) && wa(k, f) && wa(k[f], this.g) ? delete k[f][this.g] : !1
        };
        return h
    });
    ia("Map", function(a) {
        if (function() {
                if (!a || typeof a != "function" || !a.prototype.entries || typeof Object.seal != "function") return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(v([
                            [h, "s"]
                        ]));
                    if (k.get(h) != "s" || k.size != 1 || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || k.size != 2) return !1;
                    var l = k.entries(),
                        n = l.next();
                    if (n.done || n.value[0] != h || n.value[1] != "s") return !1;
                    n = l.next();
                    return n.done || n.value[0].x != 4 || n.value[1] != "t" || !l.next().done ? !1 : !0
                } catch (p) {
                    return !1
                }
            }()) return a;
        var b = new WeakMap,
            c = function(h) {
                this[0] = {};
                this[1] =
                    f();
                this.size = 0;
                if (h) {
                    h = v(h);
                    for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
                }
            };
        c.prototype.set = function(h, k) {
            h = h === 0 ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this[0][l.id] = []);
            l.entry ? l.entry.value = k : (l.entry = {
                next: this[1],
                nb: this[1].nb,
                head: this[1],
                key: h,
                value: k
            }, l.list.push(l.entry), this[1].nb.next = l.entry, this[1].nb = l.entry, this.size++);
            return this
        };
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.entry && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this[0][h.id], h.entry.nb.next =
                h.entry.next, h.entry.next.nb = h.entry.nb, h.entry.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this[0] = {};
            this[1] = this[1].nb = f();
            this.size = 0
        };
        c.prototype.has = function(h) {
            return !!d(this, h).entry
        };
        c.prototype.get = function(h) {
            return (h = d(this, h).entry) && h.value
        };
        c.prototype.entries = function() {
            return e(this, function(h) {
                return [h.key, h.value]
            })
        };
        c.prototype.keys = function() {
            return e(this, function(h) {
                return h.key
            })
        };
        c.prototype.values = function() {
            return e(this, function(h) {
                return h.value
            })
        };
        c.prototype.forEach =
            function(h, k) {
                for (var l = this.entries(), n; !(n = l.next()).done;) n = n.value, h.call(k, n[1], n[0], this)
            };
        c.prototype[Symbol.iterator] = c.prototype.entries;
        var d = function(h, k) {
                var l = k && typeof k;
                l == "object" || l == "function" ? b.has(k) ? l = b.get(k) : (l = "" + ++g, b.set(k, l)) : l = "p_" + k;
                var n = h[0][l];
                if (n && wa(h[0], l))
                    for (h = 0; h < n.length; h++) {
                        var p = n[h];
                        if (k !== k && p.key !== p.key || k === p.key) return {
                            id: l,
                            list: n,
                            index: h,
                            entry: p
                        }
                    }
                return {
                    id: l,
                    list: n,
                    index: -1,
                    entry: void 0
                }
            },
            e = function(h, k) {
                var l = h[1];
                return ka(function() {
                    if (l) {
                        for (; l.head !=
                            h[1];) l = l.nb;
                        for (; l.next != l.head;) return l = l.next, {
                            done: !1,
                            value: k(l)
                        };
                        l = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            f = function() {
                var h = {};
                return h.nb = h.next = h.head = h
            },
            g = 0;
        return c
    });
    ia("Set", function(a) {
        if (function() {
                if (!a || typeof a != "function" || !a.prototype.entries || typeof Object.seal != "function") return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(v([c]));
                    if (!d.has(c) || d.size != 1 || d.add(c) != d || d.size != 1 || d.add({
                            x: 4
                        }) != d || d.size != 2) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || f.value[0].x != 4 || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        var b = function(c) {
            this.g = new Map;
            if (c) {
                c =
                    v(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.g.size
        };
        b.prototype.add = function(c) {
            c = c === 0 ? 0 : c;
            this.g.set(c, c);
            this.size = this.g.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.g.delete(c);
            this.size = this.g.size;
            return c
        };
        b.prototype.clear = function() {
            this.g.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.g.has(c)
        };
        b.prototype.entries = function() {
            return this.g.entries()
        };
        b.prototype.values = function() {
            return this.g.values()
        };
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.g.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    });
    ia("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) wa(b, d) && c.push(b[d]);
            return c
        }
    });
    ia("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? b !== 0 || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    ia("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (c < 0 && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    });
    var Sa = function(a, b, c) {
        if (a == null) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    ia("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return Sa(this, b, "includes").indexOf(b, c || 0) !== -1
        }
    });
    ia("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = c != null ? c : function(h) {
                return h
            };
            var e = [],
                f = typeof Symbol != "undefined" && Symbol.iterator && b[Symbol.iterator];
            if (typeof f == "function") {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    });
    ia("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) wa(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    ia("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return typeof b !== "number" ? !1 : !isNaN(b) && b !== Infinity && b !== -Infinity
        }
    });
    ia("Number.MAX_SAFE_INTEGER", function() {
        return 9007199254740991
    });
    ia("Number.MIN_SAFE_INTEGER", function() {
        return -9007199254740991
    });
    ia("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return Number.isFinite(b) ? b === Math.floor(b) : !1
        }
    });
    ia("Number.isSafeInteger", function(a) {
        return a ? a : function(b) {
            return Number.isInteger(b) && Math.abs(b) <= Number.MAX_SAFE_INTEGER
        }
    });
    ia("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Sa(this, b, "startsWith");
            b += "";
            var e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    });
    var Ta = function(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[Symbol.iterator] = function() {
            return e
        };
        return e
    };
    ia("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return Ta(this, function(b, c) {
                return [b, c]
            })
        }
    });
    ia("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || b === Infinity || b === -Infinity || b === 0) return b;
            var c = Math.floor(Math.abs(b));
            return b < 0 ? -c : c
        }
    });
    ia("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return typeof b === "number" && isNaN(b)
        }
    });
    ia("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Ta(this, function(b) {
                return b
            })
        }
    });
    ia("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Ta(this, function(b, c) {
                return c
            })
        }
    });
    ia("Object.fromEntries", function(a) {
        return a ? a : function(b) {
            var c = {};
            if (!(Symbol.iterator in b)) throw new TypeError("" + b + " is not iterable");
            b = b[Symbol.iterator].call(b);
            for (var d = b.next(); !d.done; d = b.next()) {
                d = d.value;
                if (Object(d) !== d) throw new TypeError("iterable for fromEntries should yield objects");
                c[d[0]] = d[1]
            }
            return c
        }
    });
    ia("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = Sa(this, null, "repeat");
            if (b < 0 || b > 1342177279) throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    });
    var Ua = function(a, b) {
        a = a !== void 0 ? String(a) : " ";
        return b > 0 && a ? a.repeat(Math.ceil(b / a.length)).substring(0, b) : ""
    };
    ia("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = Sa(this, null, "padStart");
            return Ua(c, b - d.length) + d
        }
    });
    ia("String.prototype.padEnd", function(a) {
        return a ? a : function(b, c) {
            var d = Sa(this, null, "padStart");
            return d + Ua(c, b - d.length)
        }
    });
    ia("Promise.allSettled", function(a) {
        function b(d) {
            return {
                status: "fulfilled",
                value: d
            }
        }

        function c(d) {
            return {
                status: "rejected",
                reason: d
            }
        }
        return a ? a : function(d) {
            var e = this;
            d = Array.from(d, function(f) {
                return e.resolve(f).then(b, c)
            });
            return e.all(d)
        }
    });
    ia("Math.imul", function(a) {
        return a ? a : function(b, c) {
            b = Number(b);
            c = Number(c);
            var d = b & 65535,
                e = c & 65535;
            return d * e + ((b >>> 16 & 65535) * e + d * (c >>> 16 & 65535) << 16 >>> 0) | 0
        }
    });
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var Va = Va || {},
        y = this || self,
        z = function(a, b, c) {
            a = a.split(".");
            c = c || y;
            for (var d; a.length && (d = a.shift());) a.length || b === void 0 ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
        },
        Xa = function(a) {
            var b = Wa("CLOSURE_FLAGS");
            a = b && b[a];
            return a != null ? a : !1
        },
        Wa = function(a, b) {
            a = a.split(".");
            b = b || y;
            for (var c = 0; c < a.length; c++)
                if (b = b[a[c]], b == null) return null;
            return b
        },
        Ya = function(a) {
            var b = typeof a;
            return b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null"
        },
        Za = function(a) {
            var b = Ya(a);
            return b == "array" || b == "object" &&
                typeof a.length == "number"
        },
        bb = function(a) {
            var b = typeof a;
            return b == "object" && a != null || b == "function"
        },
        eb = function(a) {
            return Object.prototype.hasOwnProperty.call(a, cb) && a[cb] || (a[cb] = ++db)
        },
        gb = function(a) {
            a !== null && "removeAttribute" in a && a.removeAttribute(cb);
            try {
                delete a[cb]
            } catch (b) {}
        },
        cb = "closure_uid_" + (Math.random() * 1E9 >>> 0),
        db = 0,
        ib = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        jb = function(a, b, c) {
            if (!a) throw Error();
            if (arguments.length > 2) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var e =
                        Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d);
                    return a.apply(b, e)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        kb = function(a, b, c) {
            kb = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? ib : jb;
            return kb.apply(null, arguments)
        },
        lb = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var d = c.slice();
                d.push.apply(d, arguments);
                return a.apply(this, d)
            }
        },
        nb = function() {
            return Date.now()
        },
        ob = function(a) {
            return a
        },
        pb = function(a,
            b) {
            function c() {}
            c.prototype = b.prototype;
            a.Za = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.lk = function(d, e, f) {
                for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
                return b.prototype[e].apply(d, g)
            }
        };

    function sb(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, sb);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        b !== void 0 && (this.cause = b)
    }
    pb(sb, Error);
    sb.prototype.name = "CustomError";
    var tb;
    var ub, wb = typeof String.prototype.isWellFormed === "function",
        xb = typeof TextEncoder !== "undefined";

    function yb(a) {
        var b = !1;
        b = b === void 0 ? !1 : b;
        if (xb) {
            if (b && (wb ? !a.isWellFormed() : /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(a))) throw Error("Found an unpaired surrogate");
            a = (ub || (ub = new TextEncoder)).encode(a)
        } else {
            for (var c = 0, d = new Uint8Array(3 * a.length), e = 0; e < a.length; e++) {
                var f = a.charCodeAt(e);
                if (f < 128) d[c++] = f;
                else {
                    if (f < 2048) d[c++] = f >> 6 | 192;
                    else {
                        if (f >= 55296 && f <= 57343) {
                            if (f <= 56319 && e < a.length) {
                                var g = a.charCodeAt(++e);
                                if (g >= 56320 && g <= 57343) {
                                    f = (f - 55296) * 1024 + g - 56320 +
                                        65536;
                                    d[c++] = f >> 18 | 240;
                                    d[c++] = f >> 12 & 63 | 128;
                                    d[c++] = f >> 6 & 63 | 128;
                                    d[c++] = f & 63 | 128;
                                    continue
                                } else e--
                            }
                            if (b) throw Error("Found an unpaired surrogate");
                            f = 65533
                        }
                        d[c++] = f >> 12 | 224;
                        d[c++] = f >> 6 & 63 | 128
                    }
                    d[c++] = f & 63 | 128
                }
            }
            a = c === d.length ? d : d.subarray(0, c)
        }
        return a
    };

    function zb(a) {
        y.setTimeout(function() {
            throw a;
        }, 0)
    };

    function Ab(a, b) {
        var c = a.length - b.length;
        return c >= 0 && a.indexOf(b, c) == c
    }

    function Bb(a) {
        return /^[\s\xa0]*$/.test(a)
    }
    var Cb = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        Db = /&/g,
        Eb = /</g,
        Fb = />/g,
        Gb = /"/g,
        Hb = /'/g,
        Ib = /\x00/g,
        Jb = /[\x00&<>"']/;

    function Kb(a, b) {
        return a.indexOf(b) != -1
    }

    function Lb(a, b) {
        return Kb(a.toLowerCase(), b.toLowerCase())
    }

    function Mb(a, b) {
        var c = 0;
        a = Cb(String(a)).split(".");
        b = Cb(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; c == 0 && e < d; e++) {
            var f = a[e] || "",
                g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (f[0].length == 0 && g[0].length == 0) break;
                c = Nb(f[1].length == 0 ? 0 : parseInt(f[1], 10), g[1].length == 0 ? 0 : parseInt(g[1], 10)) || Nb(f[2].length == 0, g[2].length == 0) || Nb(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (c == 0)
        }
        return c
    }

    function Nb(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var Ob = Xa(610401301),
        Pb = Xa(748402147);

    function Qb() {
        var a = y.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var Sb, Tb = y.navigator;
    Sb = Tb ? Tb.userAgentData || null : null;

    function Ub(a) {
        if (!Ob || !Sb) return !1;
        for (var b = 0; b < Sb.brands.length; b++) {
            var c = Sb.brands[b].brand;
            if (c && Kb(c, a)) return !0
        }
        return !1
    }

    function A(a) {
        return Kb(Qb(), a)
    };

    function Vb() {
        return Ob ? !!Sb && Sb.brands.length > 0 : !1
    }

    function Wb() {
        return Vb() ? !1 : A("Opera")
    }

    function Xb() {
        return Vb() ? !1 : A("Trident") || A("MSIE")
    }

    function Yb() {
        return A("Firefox") || A("FxiOS")
    }

    function Zb() {
        return Vb() ? Ub("Chromium") : (A("Chrome") || A("CriOS")) && !(Vb() ? 0 : A("Edge")) || A("Silk")
    };

    function $b() {
        return Ob && Sb && Sb.platform ? Sb.platform === "Android" : A("Android")
    }

    function ac() {
        return A("iPhone") && !A("iPod") && !A("iPad")
    };
    var bc = function(a, b) {
            if (typeof a === "string") return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        cc = function(a, b) {
            for (var c = a.length, d = typeof a === "string" ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
        };

    function dc(a, b) {
        for (var c = typeof a === "string" ? a.split("") : a, d = a.length - 1; d >= 0; --d) d in c && b.call(void 0, c[d], d, a)
    }
    var ec = function(a, b) {
            for (var c = a.length, d = [], e = 0, f = typeof a === "string" ? a.split("") : a, g = 0; g < c; g++)
                if (g in f) {
                    var h = f[g];
                    b.call(void 0, h, g, a) && (d[e++] = h)
                }
            return d
        },
        fc = function(a, b) {
            for (var c = a.length, d = Array(c), e = typeof a === "string" ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
            return d
        },
        hc = function(a, b, c) {
            var d = c;
            cc(a, function(e, f) {
                d = b.call(void 0, d, e, f, a)
            });
            return d
        },
        ic = function(a, b) {
            for (var c = a.length, d = typeof a === "string" ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e],
                        e, a)) return !0;
            return !1
        };

    function jc(a, b) {
        b = kc(a, b);
        return b < 0 ? null : typeof a === "string" ? a.charAt(b) : a[b]
    }

    function kc(a, b) {
        for (var c = a.length, d = typeof a === "string" ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return e;
        return -1
    }

    function mc(a, b) {
        b = nc(a, b);
        return b < 0 ? null : typeof a === "string" ? a.charAt(b) : a[b]
    }

    function nc(a, b) {
        for (var c = typeof a === "string" ? a.split("") : a, d = a.length - 1; d >= 0; d--)
            if (d in c && b.call(void 0, c[d], d, a)) return d;
        return -1
    }

    function oc(a, b) {
        return bc(a, b) >= 0
    }

    function pc(a, b) {
        b = bc(a, b);
        var c;
        (c = b >= 0) && qc(a, b);
        return c
    }

    function qc(a, b) {
        return Array.prototype.splice.call(a, b, 1).length == 1
    }

    function rc(a, b) {
        var c = 0;
        dc(a, function(d, e) {
            b.call(void 0, d, e, a) && qc(a, e) && c++
        })
    }

    function sc(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function tc(a) {
        var b = a.length;
        if (b > 0) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function uc(a) {
        for (var b = 0, c = 0, d = {}; c < a.length;) {
            var e = a[c++],
                f = bb(e) ? "o" + eb(e) : (typeof e).charAt(0) + e;
            Object.prototype.hasOwnProperty.call(d, f) || (d[f] = !0, a[b++] = e)
        }
        a.length = b
    }

    function vc(a, b) {
        a.sort(b || wc)
    }

    function wc(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function xc(a) {
        for (var b = [], c = 0; c < a; c++) b[c] = "";
        return b
    };
    var yc = function(a) {
        yc[" "](a);
        return a
    };
    yc[" "] = function() {};
    var zc = function(a, b) {
            try {
                return yc(a[b]), !0
            } catch (c) {}
            return !1
        },
        Bc = function(a) {
            var b = Ac;
            return Object.prototype.hasOwnProperty.call(b, 8) ? b[8] : b[8] = a(8)
        };
    var Cc = Wb(),
        Dc = Xb(),
        Ec = A("Edge"),
        Fc = A("Gecko") && !(Lb(Qb(), "WebKit") && !A("Edge")) && !(A("Trident") || A("MSIE")) && !A("Edge"),
        Gc = Lb(Qb(), "WebKit") && !A("Edge"),
        Hc = Ob && Sb && Sb.platform ? Sb.platform === "macOS" : A("Macintosh"),
        Ic = $b(),
        Kc = ac(),
        Lc = A("iPad"),
        Mc = A("iPod"),
        Nc = ac() || A("iPad") || A("iPod"),
        Oc;
    a: {
        var Pc = "",
            Qc = function() {
                var a = Qb();
                if (Fc) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Ec) return /Edge\/([\d\.]+)/.exec(a);
                if (Dc) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Gc) return /WebKit\/(\S+)/.exec(a);
                if (Cc) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Qc && (Pc = Qc ? Qc[1] : "");
        if (Dc) {
            var Rc, Sc = y.document;
            Rc = Sc ? Sc.documentMode : void 0;
            if (Rc != null && Rc > parseFloat(Pc)) {
                Oc = String(Rc);
                break a
            }
        }
        Oc = Pc
    }
    var Tc = Oc,
        Ac = {},
        Uc = function() {
            return Bc(function() {
                return Mb(Tc, 8) >= 0
            })
        };
    var Vc = Yb(),
        Wc = A("Android") && !(Zb() || Yb() || Wb() || A("Silk")),
        Xc = Zb();
    var Yc = {},
        Zc = null,
        ad = function(a, b) {
            b === void 0 && (b = 0);
            $c();
            b = Yc[b];
            for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
                var g = a[e],
                    h = a[e + 1],
                    k = a[e + 2],
                    l = b[g >> 2];
                g = b[(g & 3) << 4 | h >> 4];
                h = b[(h & 15) << 2 | k >> 6];
                k = b[k & 63];
                c[f++] = "" + l + g + h + k
            }
            l = 0;
            k = d;
            switch (a.length - e) {
                case 2:
                    l = a[e + 1], k = b[(l & 15) << 2] || d;
                case 1:
                    a = a[e], c[f] = "" + b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
            }
            return c.join("")
        },
        cd = function(a) {
            var b = [];
            bd(a, function(c) {
                b.push(c)
            });
            return b
        },
        bd = function(a, b) {
            function c(k) {
                for (; d < a.length;) {
                    var l = a.charAt(d++),
                        n = Zc[l];
                    if (n != null) return n;
                    if (!Bb(l)) throw Error("Unknown base64 encoding at char: " + l);
                }
                return k
            }
            $c();
            for (var d = 0;;) {
                var e = c(-1),
                    f = c(0),
                    g = c(64),
                    h = c(64);
                if (h === 64 && e === -1) break;
                b(e << 2 | f >> 4);
                g != 64 && (b(f << 4 & 240 | g >> 2), h != 64 && b(g << 6 & 192 | h))
            }
        },
        $c = function() {
            if (!Zc) {
                Zc = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; c < 5; c++) {
                    var d = a.concat(b[c].split(""));
                    Yc[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        Zc[f] === void 0 && (Zc[f] = e)
                    }
                }
            }
        };

    function dd(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };
    var ed = void 0;

    function fd(a) {
        a = Error(a);
        dd(a, "warning");
        return a
    }

    function gd(a, b) {
        if (a != null) {
            var c;
            var d = (c = ed) != null ? c : ed = {};
            c = d[a] || 0;
            c >= b || (d[a] = c + 1, a = Error(), dd(a, "incident"), zb(a))
        }
    };
    var hd = typeof Symbol === "function" && typeof Symbol() === "symbol";

    function id(a, b, c) {
        return typeof Symbol === "function" && typeof Symbol() === "symbol" ? (c === void 0 ? 0 : c) && Symbol.for && a ? Symbol.for(a) : a != null ? Symbol(a) : Symbol() : b
    }
    var kd = id("jas", void 0, !0),
        ld = id(void 0, "0di"),
        md = id(void 0, "1oa"),
        nd = id(void 0, "0ubsb"),
        od = id(void 0, "0actk"),
        pd = id("m_m", "Dk", !0),
        qd = id(void 0, "vps");
    var rd = {
            uh: {
                value: 0,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        },
        sd = Object.defineProperties,
        B = hd ? kd : "uh",
        td, ud = [];
    vd(ud, 7);
    td = Object.freeze(ud);

    function wd(a, b) {
        hd || B in a || sd(a, rd);
        a[B] |= b
    }

    function vd(a, b) {
        hd || B in a || sd(a, rd);
        a[B] = b
    }

    function xd(a) {
        if (4 & a) return 512 & a ? 512 : 1024 & a ? 1024 : 0
    }

    function yd(a) {
        wd(a, 34);
        return a
    }

    function zd(a) {
        wd(a, 32);
        return a
    };

    function Ad() {
        return typeof BigInt === "function"
    };
    var Bd = {};

    function Cd(a, b) {
        return b === void 0 ? a.g !== Dd && !!(2 & (a.D[B] | 0)) : !!(2 & b) && a.g !== Dd
    }
    var Dd = {},
        Ed = function(a, b, c) {
            this.g = a;
            this.j = b;
            this.l = c
        };
    Ed.prototype.next = function() {
        var a = this.g.next();
        a.done || (a.value = this.j.call(this.l, a.value));
        return a
    };
    Ed.prototype[Symbol.iterator] = function() {
        return this
    };
    var Fd = Object.freeze({}),
        Gd = Object.freeze({});

    function Hd(a, b, c) {
        var d = b & 128 ? 0 : -1,
            e = a.length,
            f;
        if (f = !!e) f = a[e - 1], f = f != null && typeof f === "object" && f.constructor === Object;
        var g = e + (f ? -1 : 0);
        for (b = b & 128 ? 1 : 0; b < g; b++) c(b - d, a[b]);
        if (f) {
            a = a[e - 1];
            for (var h in a) !isNaN(h) && c(+h, a[h])
        }
    };

    function Id(a) {
        a.Bk = !0;
        return a
    };
    var Jd = Id(function(a) {
            return typeof a === "number"
        }),
        Kd = Id(function(a) {
            return typeof a === "string"
        }),
        Ld = Id(function(a) {
            return typeof a === "boolean"
        }),
        Md = Id(function(a) {
            return !!a && (typeof a === "object" || typeof a === "function")
        });

    function Nd() {
        return Od(Id(function(a, b) {
            return a === void 0 ? !0 : Kd(a, b)
        }))
    }

    function Od(a) {
        a.Ah = !0;
        return a
    };
    var Pd = typeof y.BigInt === "function" && typeof y.BigInt(0) === "bigint";

    function Qd(a) {
        var b = a;
        if (Kd(b)) {
            if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b)) throw Error(String(b));
        } else if (Jd(b) && !Number.isSafeInteger(b)) throw Error(String(b));
        return Pd ? BigInt(a) : a = Ld(a) ? a ? "1" : "0" : Kd(a) ? a.trim() || "0" : String(a)
    }
    var Xd = Id(function(a) {
            return Pd ? a >= Rd && a <= Sd : a[0] === "-" ? Ud(a, Vd) : Ud(a, Wd)
        }),
        Vd = Number.MIN_SAFE_INTEGER.toString(),
        Rd = Pd ? BigInt(Number.MIN_SAFE_INTEGER) : void 0,
        Wd = Number.MAX_SAFE_INTEGER.toString(),
        Sd = Pd ? BigInt(Number.MAX_SAFE_INTEGER) : void 0;

    function Ud(a, b) {
        if (a.length > b.length) return !1;
        if (a.length < b.length || a === b) return !0;
        for (var c = 0; c < a.length; c++) {
            var d = a[c],
                e = b[c];
            if (d > e) return !1;
            if (d < e) return !0
        }
    };
    var Yd = 0,
        Zd = 0,
        $d;

    function ae(a) {
        var b = a >>> 0;
        Yd = b;
        Zd = (a - b) / 4294967296 >>> 0
    }

    function be(a) {
        if (a < 0) {
            ae(0 - a);
            var b = v(ce(Yd, Zd));
            a = b.next().value;
            b = b.next().value;
            Yd = a >>> 0;
            Zd = b >>> 0
        } else ae(a)
    }

    function de(a, b) {
        var c = b * 4294967296 + (a >>> 0);
        return Number.isSafeInteger(c) ? c : ee(a, b)
    }

    function ee(a, b) {
        b >>>= 0;
        a >>>= 0;
        if (b <= 2097151) var c = "" + (4294967296 * b + a);
        else Ad() ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215, b = b >> 16 & 65535, a = (a & 16777215) + c * 6777216 + b * 6710656, c += b * 8147497, b *= 2, a >= 1E7 && (c += a / 1E7 >>> 0, a %= 1E7), c >= 1E7 && (b += c / 1E7 >>> 0, c %= 1E7), c = b + fe(c) + fe(a));
        return c
    }

    function fe(a) {
        a = String(a);
        return "0000000".slice(a.length) + a
    }

    function ge() {
        var a = Yd,
            b = Zd;
        b & 2147483648 ? Ad() ? a = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : (b = v(ce(a, b)), a = b.next().value, b = b.next().value, a = "-" + ee(a, b)) : a = ee(a, b);
        return a
    }

    function he(a) {
        if (a.length < 16) be(Number(a));
        else if (Ad()) a = BigInt(a), Yd = Number(a & BigInt(4294967295)) >>> 0, Zd = Number(a >> BigInt(32) & BigInt(4294967295));
        else {
            var b = +(a[0] === "-");
            Zd = Yd = 0;
            for (var c = a.length, d = 0 + b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) d = Number(a.slice(d, e)), Zd *= 1E6, Yd = Yd * 1E6 + d, Yd >= 4294967296 && (Zd += Math.trunc(Yd / 4294967296), Zd >>>= 0, Yd >>>= 0);
            b && (b = v(ce(Yd, Zd)), a = b.next().value, b = b.next().value, Yd = a, Zd = b)
        }
    }

    function ce(a, b) {
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    };

    function ie(a) {
        return Array.prototype.slice.call(a)
    };
    var je = typeof BigInt === "function" ? BigInt.asIntN : void 0,
        ke = typeof BigInt === "function" ? BigInt.asUintN : void 0,
        le = Number.isSafeInteger,
        me = Number.isFinite,
        ne = Math.trunc;

    function oe(a) {
        if (a == null || typeof a === "number") return a;
        if (a === "NaN" || a === "Infinity" || a === "-Infinity") return Number(a)
    }

    function pe(a) {
        if (typeof a !== "boolean") throw Error("Expected boolean but got " + Ya(a) + ": " + a);
        return a
    }

    function qe(a) {
        if (a == null || typeof a === "boolean") return a;
        if (typeof a === "number") return !!a
    }
    var re = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

    function se(a) {
        switch (typeof a) {
            case "bigint":
                return !0;
            case "number":
                return me(a);
            case "string":
                return re.test(a);
            default:
                return !1
        }
    }

    function te(a) {
        if (!me(a)) throw fd("enum");
        return a | 0
    }

    function ue(a) {
        return a == null ? a : me(a) ? a | 0 : void 0
    }

    function ve(a) {
        if (typeof a !== "number") throw fd("int32");
        if (!me(a)) throw fd("int32");
        return a | 0
    }

    function we(a) {
        if (a == null) return a;
        if (typeof a === "string" && a) a = +a;
        else if (typeof a !== "number") return;
        return me(a) ? a | 0 : void 0
    }

    function Ae(a) {
        if (a == null) return a;
        if (typeof a === "string" && a) a = +a;
        else if (typeof a !== "number") return;
        return me(a) ? a >>> 0 : void 0
    }

    function Be(a) {
        var b = 0;
        b = b === void 0 ? 0 : b;
        if (!se(a)) throw fd("int64");
        var c = typeof a;
        switch (b) {
            case 512:
                switch (c) {
                    case "string":
                        return Ce(a);
                    case "bigint":
                        return String(je(64, a));
                    default:
                        return De(a)
                }
            case 1024:
                switch (c) {
                    case "string":
                        return Ee(a);
                    case "bigint":
                        return Qd(je(64, a));
                    default:
                        return Fe(a)
                }
            case 0:
                switch (c) {
                    case "string":
                        return Ce(a);
                    case "bigint":
                        return Qd(je(64, a));
                    default:
                        return Ge(a)
                }
            default:
                throw Error("Unknown format requested type for int64");
        }
    }

    function He(a) {
        return a == null ? a : Be(a)
    }

    function Ie(a) {
        if (a[0] === "-") return !1;
        var b = a.length;
        return b < 20 ? !0 : b === 20 && Number(a.substring(0, 6)) < 184467
    }

    function Je(a) {
        var b = a.length;
        return a[0] === "-" ? b < 20 ? !0 : b === 20 && Number(a.substring(0, 7)) > -922337 : b < 19 ? !0 : b === 19 && Number(a.substring(0, 6)) < 922337
    }

    function Ke(a) {
        if (a < 0) {
            be(a);
            var b = ee(Yd, Zd);
            a = Number(b);
            return le(a) ? a : b
        }
        b = String(a);
        if (Ie(b)) return b;
        be(a);
        return de(Yd, Zd)
    }

    function Le(a) {
        if (Je(a)) return a;
        he(a);
        return ge()
    }

    function Ge(a) {
        a = ne(a);
        if (!le(a)) {
            be(a);
            var b = Yd,
                c = Zd;
            if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, b == 0 && (c = c + 1 >>> 0);
            b = de(b, c);
            a = typeof b === "number" ? a ? -b : b : a ? "-" + b : b
        }
        return a
    }

    function De(a) {
        a = ne(a);
        if (le(a)) a = String(a);
        else {
            var b = String(a);
            Je(b) ? a = b : (be(a), a = ge())
        }
        return a
    }

    function Ce(a) {
        var b = ne(Number(a));
        if (le(b)) return String(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        return Le(a)
    }

    function Ee(a) {
        var b = ne(Number(a));
        if (le(b)) return Qd(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        return Ad() ? Qd(je(64, BigInt(a))) : Qd(Le(a))
    }

    function Fe(a) {
        return le(a) ? Qd(Ge(a)) : Qd(De(a))
    }

    function Me(a) {
        if (a == null) return a;
        var b = typeof a;
        if (b === "bigint") return String(je(64, a));
        if (se(a)) {
            if (b === "string") return Ce(a);
            if (b === "number") return Ge(a)
        }
    }

    function Ne(a) {
        if (a == null) return a;
        var b = typeof a;
        if (b === "bigint") return String(ke(64, a));
        if (se(a)) {
            if (b === "string") return b = ne(Number(a)), le(b) && b >= 0 ? a = String(b) : (b = a.indexOf("."), b !== -1 && (a = a.substring(0, b)), Ie(a) || (he(a), a = ee(Yd, Zd))), a;
            if (b === "number") return a = ne(a), a >= 0 && le(a) ? a : Ke(a)
        }
    }

    function Oe(a) {
        if (typeof a !== "string") throw Error();
        return a
    }

    function Pe(a) {
        if (a != null && typeof a !== "string") throw Error();
        return a
    }

    function Qe(a) {
        return a == null || typeof a === "string" ? a : void 0
    }

    function Re(a, b, c, d) {
        if (a != null && a[pd] === Bd) return a;
        if (!Array.isArray(a)) return c ? d & 2 ? ((a = b[ld]) || (a = new b, yd(a.D), a = b[ld] = a), b = a) : b = new b : b = void 0, b;
        c = a[B] | 0;
        d = c | d & 32 | d & 2;
        d !== c && vd(a, d);
        return new b(a)
    }

    function Se(a, b, c) {
        if (b) return pe(a);
        var d;
        return (d = qe(a)) != null ? d : c ? !1 : void 0
    }

    function Te(a, b, c) {
        if (b) return Oe(a);
        var d;
        return (d = Qe(a)) != null ? d : c ? "" : void 0
    };
    var Ue = {};

    function Ve(a) {
        return a
    };
    var We = {},
        Xe = function() {
            try {
                var a = function() {
                    return ma(Map, [], this.constructor)
                };
                r(a, Map);
                yc(new a);
                return !1
            } catch (b) {
                return !0
            }
        }(),
        Ye = function() {
            this.g = new Map
        };
    m = Ye.prototype;
    m.get = function(a) {
        return this.g.get(a)
    };
    m.set = function(a, b) {
        this.g.set(a, b);
        this.size = this.g.size;
        return this
    };
    m.delete = function(a) {
        a = this.g.delete(a);
        this.size = this.g.size;
        return a
    };
    m.clear = function() {
        this.g.clear();
        this.size = this.g.size
    };
    m.has = function(a) {
        return this.g.has(a)
    };
    m.entries = function() {
        return this.g.entries()
    };
    m.keys = function() {
        return this.g.keys()
    };
    m.values = function() {
        return this.g.values()
    };
    m.forEach = function(a, b) {
        return this.g.forEach(a, b)
    };
    Ye.prototype[Symbol.iterator] = function() {
        return this.entries()
    };
    var Ze = function() {
        if (Xe) return Object.setPrototypeOf(Ye.prototype, Map.prototype), Object.defineProperties(Ye.prototype, {
            size: {
                value: 0,
                configurable: !0,
                enumerable: !0,
                writable: !0
            }
        }), Ye;
        var a = function() {
            return ma(Map, [], this.constructor)
        };
        r(a, Map);
        return a
    }();

    function $e(a) {
        return a
    }
    var bf = function(a, b, c, d) {
        c = c === void 0 ? $e : c;
        d = d === void 0 ? $e : d;
        var e = Ze.call(this) || this;
        e.Yb = a[B] | 0;
        e.Ub = b;
        e.fd = c;
        e.Yf = e.Ub ? af : d;
        for (var f = 0; f < a.length; f++) {
            var g = a[f],
                h = c(g[0], !1, !0),
                k = g[1];
            b ? k === void 0 && (k = null) : k = d(g[1], !1, !0, void 0, void 0, e.Yb);
            Ze.prototype.set.call(e, h, k)
        }
        return e
    };
    r(bf, Ze);
    var cf = function(a) {
        if (a.Yb & 2) throw Error("Cannot mutate an immutable Map");
    };
    m = bf.prototype;
    m.clear = function() {
        cf(this);
        Ze.prototype.clear.call(this)
    };
    m.delete = function(a) {
        cf(this);
        return Ze.prototype.delete.call(this, this.fd(a, !0, !1))
    };
    m.entries = function() {
        if (this.Ub) {
            var a = Ze.prototype.keys.call(this);
            a = new Ed(a, df, this)
        } else a = Ze.prototype.entries.call(this);
        return a
    };
    m.values = function() {
        if (this.Ub) {
            var a = Ze.prototype.keys.call(this);
            a = new Ed(a, bf.prototype.get, this)
        } else a = Ze.prototype.values.call(this);
        return a
    };
    m.forEach = function(a, b) {
        this.Ub ? Ze.prototype.forEach.call(this, function(c, d, e) {
            a.call(b, e.get(d), d, e)
        }) : Ze.prototype.forEach.call(this, a, b)
    };
    m.set = function(a, b) {
        cf(this);
        a = this.fd(a, !0, !1);
        return a == null ? this : b == null ? (Ze.prototype.delete.call(this, a), this) : Ze.prototype.set.call(this, a, this.Yf(b, !0, !0, this.Ub, !1, this.Yb))
    };
    m.has = function(a) {
        return Ze.prototype.has.call(this, this.fd(a, !1, !1))
    };
    m.get = function(a) {
        a = this.fd(a, !1, !1);
        var b = Ze.prototype.get.call(this, a);
        if (b !== void 0) {
            var c = this.Ub;
            return c ? (c = this.Yf(b, !1, !0, c, this.Mg, this.Yb), c !== b && Ze.prototype.set.call(this, a, c), c) : b
        }
    };
    bf.prototype[Symbol.iterator] = function() {
        return this.entries()
    };
    bf.prototype.toJSON = void 0;

    function af(a, b, c, d, e, f) {
        a = Re(a, d, c, f);
        e && (a = ef(a));
        return a
    }

    function df(a) {
        return [a, this.get(a)]
    }
    var ff;

    function gf() {
        return ff || (ff = new bf(yd([]), void 0, void 0, void 0, We))
    };

    function hf(a, b, c, d) {
        var e = d !== void 0;
        d = !!d;
        var f = [],
            g = a.length,
            h = 4294967295,
            k = !1,
            l = !!(b & 64),
            n = l ? b & 128 ? 0 : -1 : void 0;
        if (!(b & 1)) {
            var p = g && a[g - 1];
            p != null && typeof p === "object" && p.constructor === Object ? (g--, h = g) : p = void 0;
            if (l && !(b & 128) && !e) {
                k = !0;
                var q;
                h = ((q = jf) != null ? q : Ve)(h - n, n, a, p, void 0) + n
            }
        }
        b = void 0;
        for (e = 0; e < g; e++)
            if (q = a[e], q != null && (q = c(q, d)) != null)
                if (l && e >= h) {
                    var u = e - n,
                        w = void 0;
                    ((w = b) != null ? w : b = {})[u] = q
                } else f[e] = q;
        if (p)
            for (var t in p) a = p[t], a != null && (a = c(a, d)) != null && (g = +t, e = void 0, l && !Number.isNaN(g) &&
                (e = g + n) < h ? f[e] = a : (g = void 0, ((g = b) != null ? g : b = {})[t] = a));
        b && (k ? f.push(b) : f[h] = b);
        return f
    }

    function kf(a) {
        a[0] = lf(a[0]);
        a[1] = lf(a[1]);
        return a
    }

    function lf(a) {
        switch (typeof a) {
            case "number":
                return Number.isFinite(a) ? a : "" + a;
            case "bigint":
                return Xd(a) ? Number(a) : "" + a;
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (Array.isArray(a)) {
                    var b = a[B] | 0;
                    return a.length === 0 && b & 1 ? void 0 : hf(a, b, lf)
                }
                if (a != null && a[pd] === Bd) return mf(a);
                if (a instanceof bf) return a = a.size !== 0 ? Array.from(Ze.prototype.entries.call(a), kf) : void 0, a;
                return
        }
        return a
    }
    var jf;

    function nf(a, b) {
        if (b) {
            jf = b == null || b === Ve || b[qd] !== Ue ? Ve : b;
            try {
                return mf(a)
            } finally {
                jf = void 0
            }
        }
        return mf(a)
    }

    function mf(a) {
        a = a.D;
        return hf(a, a[B] | 0, lf)
    };
    var of , pf;

    function qf(a) {
        switch (typeof a) {
            case "boolean":
                return of || ( of = [0, void 0, !0]);
            case "number":
                return a > 0 ? void 0 : a === 0 ? pf || (pf = [0, void 0]) : [-a, void 0];
            case "string":
                return [0, a];
            case "object":
                return a
        }
    }

    function C(a, b, c, d) {
        d = d === void 0 ? 0 : d;
        if (a == null) {
            var e = 32;
            c ? (a = [c], e |= 128) : a = [];
            b && (e = e & -8380417 | (b & 1023) << 13)
        } else {
            if (!Array.isArray(a)) throw Error("narr");
            e = a[B] | 0;
            if (Pb && 1 & e) throw Error("rfarr");
            2048 & e && !(2 & e) && rf();
            if (e & 256) throw Error("farr");
            if (e & 64) return d !== 0 || e & 2048 || vd(a, e | 2048), a;
            if (c && (e |= 128, c !== a[0])) throw Error("mid");
            a: {
                c = a;e |= 64;
                var f = c.length;
                if (f) {
                    var g = f - 1,
                        h = c[g];
                    if (h != null && typeof h === "object" && h.constructor === Object) {
                        b = e & 128 ? 0 : -1;
                        g -= b;
                        if (g >= 1024) throw Error("pvtlmt");
                        for (var k in h) f = +k, f < g && (c[f + b] = h[k], delete h[k]);
                        e = e & -8380417 | (g & 1023) << 13;
                        break a
                    }
                }
                if (b) {
                    k = Math.max(b, f - (e & 128 ? 0 : -1));
                    if (k > 1024) throw Error("spvt");
                    e = e & -8380417 | (k & 1023) << 13
                }
            }
        }
        e |= 64;
        d === 0 && (e |= 2048);
        vd(a, e);
        return a
    }

    function rf() {
        if (Pb) throw Error("carr");
        gd(od, 5)
    };

    function sf(a, b) {
        if (typeof a !== "object") return a;
        if (Array.isArray(a)) {
            var c = a[B] | 0;
            return a.length === 0 && c & 1 ? void 0 : tf(a, c, b)
        }
        if (a != null && a[pd] === Bd) return wf(a);
        if (a instanceof bf) {
            b = a.Yb;
            if (b & 2) return a;
            if (a.size) {
                c = yd(Array.from(Ze.prototype.entries.call(a)));
                if (a.Ub)
                    for (a = 0; a < c.length; a++) {
                        var d = c[a],
                            e = d[1];
                        e == null || typeof e !== "object" ? e = void 0 : e != null && e[pd] === Bd ? e = wf(e) : Array.isArray(e) ? e = tf(e, e[B] | 0, !!(b & 32)) : e = void 0;
                        d[1] = e
                    }
                return c
            }
        }
    }

    function tf(a, b, c) {
        if (b & 2) return a;
        !c || 4096 & b || 16 & b ? a = xf(a, b, !1, c && !(b & 16)) : (wd(a, 34), b & 4 && Object.freeze(a));
        return a
    }

    function yf(a, b, c) {
        a = new a.constructor(b);
        c && (a.g = Dd);
        a.l = Dd;
        return a
    }

    function wf(a) {
        var b = a.D,
            c = b[B] | 0;
        return Cd(a, c) ? a : zf(a, b, c) ? yf(a, b) : xf(b, c)
    }

    function xf(a, b, c, d) {
        d != null || (d = !!(34 & b));
        a = hf(a, b, sf, d);
        d = 32;
        c && (d |= 2);
        b = b & 8380609 | d;
        vd(a, b);
        return a
    }

    function ef(a) {
        var b = a.D,
            c = b[B] | 0;
        return Cd(a, c) ? zf(a, b, c) ? yf(a, b, !0) : new a.constructor(xf(b, c, !1)) : a
    }

    function Af(a) {
        if (a.g !== Dd) return !1;
        var b = a.D;
        b = xf(b, b[B] | 0);
        wd(b, 2048);
        a.D = b;
        a.g = void 0;
        a.l = void 0;
        return !0
    }

    function Bf(a) {
        if (!Af(a) && Cd(a, a.D[B] | 0)) throw Error();
    }

    function Cf(a, b) {
        b === void 0 && (b = a[B] | 0);
        b & 32 && !(b & 4096) && vd(a, b | 4096)
    }

    function zf(a, b, c) {
        return c & 2 ? !0 : c & 32 && !(c & 4096) ? (vd(b, c | 2), a.g = Dd, !0) : !1
    };
    var Df = Qd(0),
        Ef = {},
        Gf = function(a, b, c, d, e) {
            b = Ff(a.D, b, c, e);
            if (b !== null || d && a.l !== Dd) return b
        },
        Ff = function(a, b, c, d) {
            if (b === -1) return null;
            var e = b + (c ? 0 : -1),
                f = a.length - 1;
            if (!(f < 1 + (c ? 0 : -1))) {
                if (e >= f) {
                    var g = a[f];
                    if (g != null && typeof g === "object" && g.constructor === Object) {
                        c = g[b];
                        var h = !0
                    } else if (e === f) c = g;
                    else return
                } else c = a[e];
                if (d && c != null) {
                    d = d(c);
                    if (d == null) return d;
                    if (!Object.is(d, c)) return h ? g[b] = d : a[e] = d, d
                }
                return c
            }
        },
        If = function(a, b, c) {
            Bf(a);
            var d = a.D;
            Hf(d, d[B] | 0, b, c);
            return a
        };

    function Hf(a, b, c, d, e) {
        var f = c + (e ? 0 : -1),
            g = a.length - 1;
        if (g >= 1 + (e ? 0 : -1) && f >= g) {
            var h = a[g];
            if (h != null && typeof h === "object" && h.constructor === Object) return h[c] = d, b
        }
        if (f <= g) return a[f] = d, b;
        if (d !== void 0) {
            var k;
            g = ((k = b) != null ? k : b = a[B] | 0) >> 13 & 1023 || 536870912;
            c >= g ? d != null && (f = {}, a[g + (e ? 0 : -1)] = (f[c] = d, f)) : a[f] = d
        }
        return b
    }
    var Kf = function(a, b) {
            a = a.D;
            return Jf(a, a[B] | 0, b, 5) !== void 0
        },
        Lf = function(a) {
            return a === Fd ? 2 : 4
        };

    function Mf(a, b, c, d, e) {
        var f = a.D,
            g = f[B] | 0;
        d = Cd(a, g) ? 1 : d;
        e = !!e || d === 3;
        d === 2 && Af(a) && (f = a.D, g = f[B] | 0);
        a = Nf(f, b);
        var h = a === td ? 7 : a[B] | 0,
            k = Of(h, g);
        var l = 4 & k ? !1 : !0;
        if (l) {
            4 & k && (a = ie(a), h = 0, k = Pf(k, g), g = Hf(f, g, b, a));
            for (var n = 0, p = 0; n < a.length; n++) {
                var q = c(a[n]);
                q != null && (a[p++] = q)
            }
            p < n && (a.length = p);
            c = (k | 4) & -513;
            k = c &= -1025;
            k &= -4097
        }
        k !== h && (vd(a, k), 2 & k && Object.freeze(a));
        return a = Qf(a, k, f, g, b, d, l, e)
    }

    function Qf(a, b, c, d, e, f, g, h) {
        var k = b;
        f === 1 || (f !== 4 ? 0 : 2 & b || !(16 & b) && 32 & d) ? Rf(b) || (b |= !a.length || g && !(4096 & b) || 32 & d && !(4096 & b || 16 & b) ? 2 : 256, b !== k && vd(a, b), Object.freeze(a)) : (f === 2 && Rf(b) && (a = ie(a), k = 0, b = Pf(b, d), d = Hf(c, d, e, a)), Rf(b) || (h || (b |= 16), b !== k && vd(a, b)));
        2 & b || !(4096 & b || 16 & b) || Cf(c, d);
        return a
    }

    function Nf(a, b) {
        a = Ff(a, b, void 0);
        return Array.isArray(a) ? a : td
    }

    function Of(a, b) {
        2 & b && (a |= 2);
        return a | 1
    }

    function Rf(a) {
        return !!(2 & a) && !!(4 & a) || !!(256 & a)
    }

    function Sf(a, b, c, d) {
        var e = a.D,
            f = e[B] | 0;
        var g = Cd(a, f);
        a: {!g && Af(a) && (e = a.D, f = e[B] | 0);
            var h = Ff(e, b);a = !1;
            if (h == null) {
                if (g) {
                    b = gf();
                    break a
                }
                h = []
            } else if (h.constructor === bf)
                if (h.Yb & 2 && !g) h = Array.from(Ze.prototype.entries.call(h));
                else {
                    b = h;
                    break a
                }
            else Array.isArray(h) ? a = !!((h[B] | 0) & 2) : h = [];
            if (g) {
                if (!h.length) {
                    b = gf();
                    break a
                }
                a || (a = !0, yd(h))
            } else if (a) {
                a = !1;
                h = ie(h);
                for (var k = 0; k < h.length; k++) {
                    var l = h[k] = ie(h[k]);
                    Array.isArray(l[1]) && (l[1] = yd(l[1]))
                }
            }!a && f & 32 && zd(h);d = new bf(h, c, Te, d);f = Hf(e, f, b, d);a || Cf(e,
                f);b = d
        }!g && c && (b.Mg = !0);
        return b
    }

    function Tf(a, b, c, d) {
        Bf(a);
        var e = a.D,
            f = e[B] | 0;
        if (c == null) return Hf(e, f, b), a;
        var g = c === td ? 7 : c[B] | 0,
            h = g,
            k = Rf(g),
            l = k || Object.isFrozen(c);
        k || (g = 0);
        l || (c = ie(c), h = 0, g = Pf(g, f), l = !1);
        g |= 5;
        var n;
        k = (n = xd(g)) != null ? n : 0;
        for (n = 0; n < c.length; n++) {
            var p = c[n],
                q = d(p, k);
            Object.is(p, q) || (l && (c = ie(c), h = 0, g = Pf(g, f), l = !1), c[n] = q)
        }
        g !== h && (l && (c = ie(c), g = Pf(g, f)), vd(c, g));
        Hf(e, f, b, c);
        return a
    }

    function Uf(a, b, c, d) {
        Bf(a);
        var e = a.D;
        Hf(e, e[B] | 0, b, (d === "0" ? Number(c) === 0 : c === d) ? void 0 : c);
        return a
    }
    var Xf = function(a, b, c, d) {
            Bf(a);
            var e = a.D,
                f = e[B] | 0;
            if (d == null) {
                var g = Vf(e);
                if (Wf(g, e, f, c) === b) g.set(c, 0);
                else return a
            } else {
                g = Vf(e);
                var h = Wf(g, e, f, c);
                h !== b && (h && (f = Hf(e, f, h)), g.set(c, b))
            }
            Hf(e, f, b, d);
            return a
        },
        Zf = function(a, b, c) {
            return Yf(a, b) === c ? c : -1
        },
        Yf = function(a, b) {
            a = a.D;
            return Wf(Vf(a), a, void 0, b)
        };

    function Vf(a) {
        if (hd) {
            var b;
            return (b = a[md]) != null ? b : a[md] = new Map
        }
        if (md in a) return a[md];
        b = new Map;
        Object.defineProperty(a, md, {
            value: b
        });
        return b
    }

    function Wf(a, b, c, d) {
        var e = a.get(d);
        if (e != null) return e;
        for (var f = e = 0; f < d.length; f++) {
            var g = d[f];
            Ff(b, g, void 0) != null && (e !== 0 && (c = Hf(b, c, e, void 0, void 0)), e = g)
        }
        a.set(d, e);
        return e
    }

    function Jf(a, b, c, d) {
        var e = !1;
        d = Ff(a, d, void 0, function(f) {
            var g = Re(f, c, !1, b);
            e = g !== f && g != null;
            return g
        });
        if (d != null) return e && !Cd(d) && Cf(a, b), d
    }
    var $f = function(a, b, c) {
            a = a.D;
            (c = Jf(a, a[B] | 0, b, c)) || (c = b[ld]) || (c = new b, yd(c.D), c = b[ld] = c);
            return c
        },
        E = function(a, b, c) {
            var d = a.D,
                e = d[B] | 0;
            b = Jf(d, e, b, c);
            if (b == null) return b;
            e = d[B] | 0;
            if (!Cd(a, e)) {
                var f = ef(b);
                f !== b && (Af(a) && (d = a.D, e = d[B] | 0), b = f, e = Hf(d, e, c, b), Cf(d, e))
            }
            return b
        };

    function ag(a, b, c, d, e, f, g, h) {
        var k = Cd(a, c);
        f = k ? 1 : f;
        g = !!g || f === 3;
        k = h && !k;
        (f === 2 || k) && Af(a) && (b = a.D, c = b[B] | 0);
        a = Nf(b, e);
        var l = a === td ? 7 : a[B] | 0,
            n = Of(l, c);
        if (h = !(4 & n)) {
            var p = a,
                q = c,
                u = !!(2 & n);
            u && (q |= 2);
            for (var w = !u, t = !0, x = 0, G = 0; x < p.length; x++) {
                var X = Re(p[x], d, !1, q);
                if (X instanceof d) {
                    if (!u) {
                        var D = Cd(X);
                        w && (w = !D);
                        t && (t = D)
                    }
                    p[G++] = X
                }
            }
            G < x && (p.length = G);
            n |= 4;
            n = t ? n & -4097 : n | 4096;
            n = w ? n | 8 : n & -9
        }
        n !== l && (vd(a, n), 2 & n && Object.freeze(a));
        if (k && !(8 & n || !a.length && (f === 1 || (f !== 4 ? 0 : 2 & n || !(16 & n) && 32 & c)))) {
            Rf(n) && (a = ie(a), n =
                Pf(n, c), c = Hf(b, c, e, a));
            d = a;
            k = n;
            for (l = 0; l < d.length; l++) p = d[l], n = ef(p), p !== n && (d[l] = n);
            k |= 8;
            n = k = d.length ? k | 4096 : k & -4097;
            vd(a, n)
        }
        return a = Qf(a, n, b, c, e, f, h, g)
    }
    var bg = function(a, b, c, d) {
        var e = a.D;
        return ag(a, e, e[B] | 0, b, c, d, !1, !0)
    };

    function cg(a) {
        a == null && (a = void 0);
        return a
    }
    var dg = function(a, b, c) {
            c = cg(c);
            If(a, b, c);
            c && !Cd(c) && Cf(a.D);
            return a
        },
        eg = function(a, b, c, d) {
            d = cg(d);
            Xf(a, b, c, d);
            d && !Cd(d) && Cf(a.D);
            return a
        },
        fg = function(a, b, c) {
            Bf(a);
            var d = a.D,
                e = d[B] | 0;
            if (c == null) return Hf(d, e, b), a;
            for (var f = c === td ? 7 : c[B] | 0, g = f, h = Rf(f), k = h || Object.isFrozen(c), l = !0, n = !0, p = 0; p < c.length; p++) {
                var q = c[p];
                h || (q = Cd(q), l && (l = !q), n && (n = q))
            }
            h || (f = l ? 13 : 5, f = n ? f & -4097 : f | 4096);
            k && f === g || (c = ie(c), g = 0, f = Pf(f, e));
            f !== g && vd(c, f);
            e = Hf(d, e, b, c);
            2 & f || !(4096 & f || 16 & f) || Cf(d, e);
            return a
        };

    function Pf(a, b) {
        return a = (2 & b ? a | 2 : a & -3) & -273
    }

    function gg(a, b, c, d, e) {
        Bf(a);
        a = Mf(a, b, e, 2, !0);
        var f;
        b = (f = xd(a === td ? 7 : a[B] | 0)) != null ? f : 0;
        if (Array.isArray(d))
            for (f = d.length, e = 0; e < f; e++) a.push(c(d[e], b));
        else
            for (d = v(d), f = d.next(); !f.done; f = d.next()) a.push(c(f.value, b))
    }

    function hg(a, b, c, d) {
        Bf(a);
        var e = a.D;
        a = ag(a, e, e[B] | 0, c, b, 2, !0);
        d = d != null ? d : new c;
        a.push(d);
        b = c = a === td ? 7 : a[B] | 0;
        var f = Cd(d);
        f ? (c &= -9, a.length === 1 && (c &= -4097)) : c |= 4096;
        c !== b && vd(a, c);
        f || Cf(e);
        return d
    }
    var ig = function(a, b, c, d) {
            hg(a, b, c, d);
            return a
        },
        jg = function(a, b) {
            a = Gf(a, b);
            b = typeof a;
            a = a == null ? a : b === "bigint" ? Qd(je(64, a)) : se(a) ? b === "string" ? Ee(a) : Fe(a) : void 0;
            return a
        },
        kg = function(a, b) {
            var c = c === void 0 ? !1 : c;
            a = qe(Gf(a, b));
            return a != null ? a : c
        },
        lg = function(a, b) {
            var c = c === void 0 ? 0 : c;
            var d;
            return (d = we(Gf(a, b))) != null ? d : c
        },
        mg = function(a, b) {
            var c = c === void 0 ? 0 : c;
            var d;
            return (d = Ae(Gf(a, b))) != null ? d : c
        },
        ng = function(a, b) {
            var c = c === void 0 ? Df : c;
            var d;
            return (d = jg(a, b)) != null ? d : c
        },
        og = function(a, b) {
            var c = c === void 0 ?
                0 : c;
            a = Gf(a, b, void 0, void 0, oe);
            return a != null ? a : c
        },
        pg = function(a, b) {
            var c = c === void 0 ? "" : c;
            var d;
            return (d = Qe(Gf(a, b))) != null ? d : c
        },
        F = function(a, b) {
            var c = c === void 0 ? 0 : c;
            var d;
            return (d = ue(Gf(a, b))) != null ? d : c
        },
        qg = function(a, b) {
            var c = c === void 0 ? "0" : c;
            a = Gf(a, b);
            b = !0;
            b = b === void 0 ? !1 : b;
            var d = typeof a;
            a = a == null ? a : d === "bigint" ? String(je(64, a)) : se(a) ? d === "string" ? Ce(a) : b ? De(a) : Ge(a) : void 0;
            return a != null ? a : c
        },
        rg = function(a, b) {
            return Mf(a, b, we, Lf())
        },
        sg = function(a, b, c) {
            return F(a, Zf(a, c, b))
        },
        tg = function(a, b) {
            return Qe(Gf(a,
                b, void 0, Ef))
        },
        ug = function(a, b, c) {
            return If(a, b, c == null ? c : pe(c))
        },
        vg = function(a, b, c) {
            return Uf(a, b, c == null ? c : pe(c), !1)
        },
        wg = function(a, b, c) {
            return If(a, b, c == null ? c : ve(c))
        },
        xg = function(a, b, c) {
            return Uf(a, b, c == null ? c : ve(c), 0)
        },
        yg = function(a, b, c) {
            return Uf(a, b, He(c), "0")
        },
        zg = function(a, b, c) {
            return If(a, b, Pe(c))
        },
        Ag = function(a, b, c) {
            return If(a, b, c == null ? c : te(c))
        },
        H = function(a, b, c) {
            return Uf(a, b, c == null ? c : te(c), 0)
        },
        Bg = function(a, b, c, d) {
            return Xf(a, b, c, d == null ? d : te(d))
        };
    var Cg = function(a, b) {
            this.j = a >>> 0;
            this.g = b >>> 0
        },
        Eg = function(a) {
            if (!a) return Dg || (Dg = new Cg(0, 0));
            if (!/^\d+$/.test(a)) return null;
            he(a);
            return new Cg(Yd, Zd)
        },
        Dg, Fg = function(a, b) {
            this.j = a >>> 0;
            this.g = b >>> 0
        },
        Hg = function(a) {
            if (!a) return Gg || (Gg = new Fg(0, 0));
            if (!/^-?\d+$/.test(a)) return null;
            he(a);
            return new Fg(Yd, Zd)
        },
        Gg;
    var Ig = function() {
        this.g = []
    };
    Ig.prototype.length = function() {
        return this.g.length
    };
    Ig.prototype.end = function() {
        var a = this.g;
        this.g = [];
        return a
    };
    var Jg = function(a, b, c) {
            for (; c > 0 || b > 127;) a.g.push(b & 127 | 128), b = (b >>> 7 | c << 25) >>> 0, c >>>= 7;
            a.g.push(b)
        },
        Ng = function(a, b) {
            for (; b > 127;) a.g.push(b & 127 | 128), b >>>= 7;
            a.g.push(b)
        },
        Og = function(a, b) {
            if (b >= 0) Ng(a, b);
            else {
                for (var c = 0; c < 9; c++) a.g.push(b & 127 | 128), b >>= 7;
                a.g.push(1)
            }
        },
        Pg = function(a, b) {
            a.g.push(b >>> 0 & 255);
            a.g.push(b >>> 8 & 255);
            a.g.push(b >>> 16 & 255);
            a.g.push(b >>> 24 & 255)
        };
    var Qg = function() {
            this.l = [];
            this.j = 0;
            this.g = new Ig
        },
        Rg = function(a, b) {
            b.length !== 0 && (a.l.push(b), a.j += b.length)
        },
        Tg = function(a, b) {
            Sg(a, b, 2);
            b = a.g.end();
            Rg(a, b);
            b.push(a.j);
            return b
        },
        Ug = function(a, b) {
            var c = b.pop();
            for (c = a.j + a.g.length() - c; c > 127;) b.push(c & 127 | 128), c >>>= 7, a.j++;
            b.push(c);
            a.j++
        },
        Sg = function(a, b, c) {
            Ng(a.g, b * 8 + c)
        },
        Vg = function(a, b, c) {
            Sg(a, b, 2);
            Ng(a.g, c.length);
            Rg(a, a.g.end());
            Rg(a, c)
        };

    function Wg() {
        var a = function() {
            throw Error();
        };
        Object.setPrototypeOf(a, a.prototype);
        return a
    }
    var Xg = Wg(),
        Yg = Wg(),
        Zg = Wg(),
        $g = Wg(),
        ah = Wg(),
        bh = Wg(),
        ch = Wg(),
        dh = Wg(),
        eh = Wg(),
        fh = Wg();
    var I = function(a, b, c) {
        this.D = C(a, b, c)
    };
    I.prototype.toJSON = function() {
        return nf(this)
    };
    I.prototype.fa = function(a) {
        return JSON.stringify(nf(this, a))
    };
    I.prototype[pd] = Bd;
    I.prototype.toString = function() {
        return this.D.toString()
    };
    var gh = function(a, b) {
        this.g = a;
        a = ob(Xg);
        this.j = !!a && b === a || !1
    };

    function hh() {
        var a = ih;
        var b = b === void 0 ? Xg : b;
        return new gh(a, b)
    }

    function ih(a, b, c, d, e) {
        b = jh(b, d);
        b != null && (c = Tg(a, c), e(b, a), Ug(a, c))
    }
    var kh = hh(),
        lh = hh(),
        mh = Symbol(),
        nh = Symbol(),
        oh, ph;

    function qh(a) {
        var b = rh,
            c = sh,
            d = a[mh];
        if (d) return d;
        d = {};
        d.mk = a;
        d.yf = qf(a[0]);
        var e = a[1],
            f = 1;
        e && e.constructor === Object && (d.Zg = e, e = a[++f], typeof e === "function" && (d.zh = !0, oh != null || (oh = e), ph != null || (ph = a[f + 1]), e = a[f += 2]));
        for (var g = {}; e && Array.isArray(e) && e.length && typeof e[0] === "number" && e[0] > 0;) {
            for (var h = 0; h < e.length; h++) g[e[h]] = e;
            e = a[++f]
        }
        for (h = 1; e !== void 0;) {
            typeof e === "number" && (h += e, e = a[++f]);
            var k = void 0;
            if (e instanceof gh) var l = e;
            else l = kh, f--;
            e = void 0;
            if ((e = l) == null ? 0 : e.j) {
                e = a[++f];
                k = a;
                var n =
                    f;
                typeof e === "function" && (e = e(), k[n] = e);
                k = e
            }
            e = a[++f];
            n = h + 1;
            typeof e === "number" && e < 0 && (n -= e, e = a[++f]);
            for (; h < n; h++) {
                var p = g[h];
                k ? c(d, h, l, k, p) : b(d, h, l, p)
            }
        }
        return a[mh] = d
    }

    function jh(a, b) {
        if (a instanceof I) return a.D;
        if (Array.isArray(a)) return C(a, b[0], b[1], 2)
    };

    function rh(a, b, c) {
        a[b] = c.g
    }

    function sh(a, b, c, d) {
        var e, f, g = c.g;
        a[b] = function(h, k, l) {
            return g(h, k, l, f || (f = qh(d).yf), e || (e = th(d)))
        }
    }

    function th(a) {
        var b = a[nh];
        if (!b) {
            var c = qh(a);
            b = function(d, e) {
                return uh(d, e, c)
            };
            a[nh] = b
        }
        return b
    }

    function uh(a, b, c) {
        Hd(a, a[B] | 0, function(d, e) {
            if (e != null) {
                var f = vh(c, d);
                f ? f(b, e, d) : d < 500 || gd(nd, 3)
            }
        })
    }

    function vh(a, b) {
        var c = a[b];
        if (c) return c;
        if (c = a.Zg)
            if (c = c[b]) {
                c = Array.isArray(c) ? c[0] instanceof gh ? c : [lh, c] : [c, void 0];
                var d = c[0].g;
                if (c = c[1]) {
                    var e = th(c),
                        f = qh(c).yf;
                    c = a.zh ? ph(f, e) : function(g, h, k) {
                        return d(g, h, k, f, e)
                    }
                } else c = d;
                return a[b] = c
            }
    };

    function wh(a, b) {
        if (Array.isArray(b)) {
            var c = b[B] | 0;
            if (c & 4) return b;
            for (var d = 0, e = 0; d < b.length; d++) {
                var f = a(b[d]);
                f != null && (b[e++] = f)
            }
            e < d && (b.length = e);
            vd(b, (c | 5) & -1537);
            c & 2 && Object.freeze(b);
            return b
        }
    }
    var xh = function(a, b) {
        var c = new Qg;
        uh(a.D, c, qh(b));
        Rg(c, c.g.end());
        a = new Uint8Array(c.j);
        b = c.l;
        for (var d = b.length, e = 0, f = 0; f < d; f++) {
            var g = b[f];
            a.set(g, e);
            e += g.length
        }
        c.l = [a];
        return a
    };

    function yh(a, b) {
        return new gh(a, b)
    }

    function zh(a, b, c) {
        b = Me(b);
        if (b != null) {
            switch (typeof b) {
                case "string":
                    Hg(b)
            }
            if (b != null) switch (Sg(a, c, 0), typeof b) {
                case "number":
                    a = a.g;
                    be(b);
                    Jg(a, Yd, Zd);
                    break;
                case "bigint":
                    c = BigInt.asUintN(64, b);
                    c = new Fg(Number(c & BigInt(4294967295)), Number(c >> BigInt(32)));
                    Jg(a.g, c.j, c.g);
                    break;
                default:
                    c = Hg(b), Jg(a.g, c.j, c.g)
            }
        }
    }

    function Ah(a, b, c) {
        b = we(b);
        b != null && b != null && (Sg(a, c, 0), Og(a.g, b))
    }
    var Bh = yh(function(a, b, c) {
            b = oe(b);
            b != null && (Sg(a, c, 1), a = a.g, c = $d || ($d = new DataView(new ArrayBuffer(8))), c.setFloat64(0, +b, !0), Yd = c.getUint32(0, !0), Zd = c.getUint32(4, !0), Pg(a, Yd), Pg(a, Zd))
        }, eh),
        Ch = yh(function(a, b, c) {
            b = oe(b);
            b != null && (Sg(a, c, 5), a = a.g, c = $d || ($d = new DataView(new ArrayBuffer(8))), c.setFloat32(0, +b, !0), Zd = 0, Yd = c.getUint32(0, !0), Pg(a, Yd))
        }, dh),
        Dh = yh(zh, bh),
        Eh = yh(zh, bh),
        Fh = yh(zh, bh),
        Gh = yh(function(a, b, c) {
            b = Ne(b);
            if (b != null) {
                switch (typeof b) {
                    case "string":
                        Eg(b)
                }
                if (b != null) switch (Sg(a, c, 0),
                    typeof b) {
                    case "number":
                        a = a.g;
                        be(b);
                        Jg(a, Yd, Zd);
                        break;
                    case "bigint":
                        c = BigInt.asUintN(64, b);
                        c = new Cg(Number(c & BigInt(4294967295)), Number(c >> BigInt(32)));
                        Jg(a.g, c.j, c.g);
                        break;
                    default:
                        c = Eg(b), Jg(a.g, c.j, c.g)
                }
            }
        }, ch),
        Hh = yh(Ah, $g),
        Ih = yh(Ah, $g),
        Jh = yh(function(a, b, c) {
            b = qe(b);
            b != null && (Sg(a, c, 0), a.g.g.push(b ? 1 : 0))
        }, Yg),
        Kh = yh(function(a, b, c) {
            b = Qe(b);
            b != null && Vg(a, c, yb(b))
        }, Zg),
        Lh;
    Lh = new gh(function(a, b, c) {
        b = wh(Qe, b);
        if (b != null)
            for (var d = 0; d < b.length; d++) {
                var e = a,
                    f = c,
                    g = b[d];
                g != null && Vg(e, f, yb(g))
            }
    }, Zg);
    var Mh, Nh = void 0;
    Nh = Nh === void 0 ? Xg : Nh;
    Mh = new gh(function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) {
                var g = a,
                    h = c,
                    k = e,
                    l = jh(b[f], d);
                l != null && (h = Tg(g, h), k(l, g), Ug(g, h))
            }
    }, Nh);
    var Oh = yh(function(a, b, c) {
            b = Ae(b);
            b != null && b != null && (Sg(a, c, 0), Ng(a.g, b))
        }, ah),
        Ph = yh(function(a, b, c) {
            b = we(b);
            b != null && (b = parseInt(b, 10), Sg(a, c, 0), Og(a.g, b))
        }, fh),
        Qh;
    Qh = new gh(function(a, b, c) {
        b = wh(we, b);
        if (b != null && b.length) {
            c = Tg(a, c);
            for (var d = 0; d < b.length; d++) Og(a.g, b[d]);
            Ug(a, c)
        }
    }, fh);

    function Rh(a) {
        return function(b) {
            return xh(b, a)
        }
    }

    function Sh(a) {
        return function() {
            return xh(this, a)
        }
    }

    function Th(a) {
        return function(b) {
            b = JSON.parse(b);
            if (!Array.isArray(b)) throw Error("Expected jspb data to be an array, got " + Ya(b) + ": " + b);
            yd(b);
            return new a(b)
        }
    }

    function Uh(a) {
        return function(b) {
            if (b == null || b == "") b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error("dnarr");
                b = new a(zd(b))
            }
            return b
        }
    };
    var Vh = function(a) {
        this.D = C(a)
    };
    r(Vh, I);
    var Wh = function(a) {
        this.D = C(a)
    };
    r(Wh, I);
    var Xh = function(a) {
        this.D = C(a)
    };
    r(Xh, I);
    var Yh = function(a) {
        this.D = C(a)
    };
    r(Yh, I);
    var Zh = function(a) {
        this.D = C(a)
    };
    r(Zh, I);
    var $h = function(a) {
        this.D = C(a)
    };
    r($h, I);
    var ai = function(a) {
        this.D = C(a)
    };
    r(ai, I);
    var bi = function(a) {
        this.D = C(a)
    };
    r(bi, I);
    bi.prototype.getEscapedQemQueryId = function() {
        return pg(this, 1)
    };
    var ci = function(a) {
        this.D = C(a)
    };
    r(ci, I);
    var di = function(a) {
        this.D = C(a)
    };
    r(di, I);
    var ei = [0, Kh, [0, Dh],
        [0, Ph, Eh]
    ];
    var fi = function(a) {
        this.D = C(a)
    };
    r(fi, I);
    var gi = function(a, b, c) {
            c = c === void 0 ? {} : c;
            this.error = a;
            this.meta = c;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror"
        },
        hi = function(a) {
            return !!(a.error && a.meta && a.id)
        };

    function ii(a) {
        var b = a.toString();
        a.name && b.indexOf(a.name) == -1 && (b += ": " + a.name);
        a.message && b.indexOf(a.message) == -1 && (b += ": " + a.message);
        if (a.stack) a: {
            a = a.stack;
            var c = b;
            try {
                a.indexOf(c) == -1 && (a = c + "\n" + a);
                for (var d; a != d;) d = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                b = a.replace(RegExp("\n *", "g"), "\n");
                break a
            } catch (e) {
                b = c;
                break a
            }
            b = void 0
        }
        return b
    };
    var ji, ki = 64;

    function li() {
        try {
            return ji != null || (ji = new Uint32Array(64)), ki >= 64 && (crypto.getRandomValues(ji), ki = 0), ji[ki++]
        } catch (a) {
            return Math.floor(Math.random() * 4294967296)
        }
    };

    function mi(a) {
        var b = window;
        if (!Jd(b.goog_pvsid)) try {
            var c = li() + (li() & 2097151) * 4294967296;
            Object.defineProperty(b, "goog_pvsid", {
                value: c,
                configurable: !1
            })
        } catch (d) {
            a.Xa({
                methodName: 784,
                Ib: d
            })
        }
        b = Number(b.goog_pvsid);
        (!b || b <= 0) && a.Xa({
            methodName: 784,
            Ib: Error("Invalid correlator, " + b)
        });
        return b || -1
    };
    var ni = function() {},
        oi = function(a) {
            var b = !1,
                c;
            return function() {
                b || (c = a(), b = !0);
                return c
            }
        },
        pi = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        },
        qi = function(a) {
            var b = 0,
                c = !1,
                d = [],
                e = function() {
                    b = 0;
                    c && (c = !1, f())
                },
                f = function() {
                    b = y.setTimeout(e, 1E3);
                    var g = d;
                    d = [];
                    a.apply(void 0, g)
                };
            return function(g) {
                d = arguments;
                b ? c = !0 : f()
            }
        };
    var si = function() {
            return Ob && Sb ? Sb.mobile : !ri() && (A("iPod") || A("iPhone") || A("Android") || A("IEMobile"))
        },
        ri = function() {
            return Ob && Sb ? !Sb.mobile && (A("iPad") || A("Android") || A("Silk")) : A("iPad") || A("Android") && !A("Mobile") || A("Silk")
        };

    function ti(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    }

    function ui(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function vi(a) {
        var b = wi,
            c;
        for (c in b)
            if (!a.call(void 0, b[c], c, b)) return !1;
        return !0
    }

    function xi(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    }

    function yi(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = d;
        return b
    }

    function zi(a, b) {
        var c = Za(b),
            d = c ? b : arguments;
        for (c = c ? 0 : 1; c < d.length; c++) {
            if (a == null) return;
            a = a[d[c]]
        }
        return a
    }

    function Ai(a, b) {
        return a !== null && b in a
    }

    function Bi(a, b) {
        for (var c in a)
            if (a[c] == b) return !0;
        return !1
    }

    function Ci(a) {
        var b = Di,
            c;
        for (c in b)
            if (a.call(void 0, b[c], c, b)) return c
    }

    function Ei(a) {
        for (var b in a) return !1;
        return !0
    }

    function Fi(a) {
        for (var b in a) delete a[b]
    }

    function Gi(a, b, c) {
        return a !== null && b in a ? a[b] : c
    }
    var Hi = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Ii(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Hi.length; f++) c = Hi[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    /* 
     
     Copyright Google LLC 
     SPDX-License-Identifier: Apache-2.0 
    */
    var Qi = globalThis.trustedTypes,
        Ri;

    function Si() {
        var a = null;
        if (!Qi) return a;
        try {
            var b = function(c) {
                return c
            };
            a = Qi.createPolicy("goog#html", {
                createHTML: b,
                createScript: b,
                createScriptURL: b
            })
        } catch (c) {}
        return a
    }

    function Ti() {
        Ri === void 0 && (Ri = Si());
        return Ri
    };
    var Ui = function(a) {
        this.g = a
    };
    Ui.prototype.toString = function() {
        return this.g + ""
    };

    function Vi(a) {
        var b = Ti();
        a = b ? b.createScriptURL(a) : a;
        return new Ui(a)
    };
    var Wi = function(a) {
        this.g = a
    };
    Wi.prototype.toString = function() {
        return this.g
    };

    function Xi(a) {
        return new Wi(a)
    }
    var Yi = Xi("about:invalid#zClosurez");
    var Zi = function(a) {
        this.Ch = a
    };

    function $i(a) {
        return new Zi(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    }
    var aj = [$i("data"), $i("http"), $i("https"), $i("mailto"), $i("ftp"), new Zi(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    })];

    function bj(a) {
        var b = window;
        if (typeof MediaSource !== "undefined" && a instanceof MediaSource || typeof b.ManagedMediaSource !== "undefined" && a instanceof b.ManagedMediaSource) return Xi(URL.createObjectURL(a));
        b = a.type;
        b.toLowerCase() === "application/octet-stream" ? b = !0 : (b = b.match(/^([^;]+)(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i), b = (b == null ? void 0 : b.length) === 2 && (/^image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon|heic|heif|avif|x-ms-bmp)$/i.test(b[1]) || /^video\/(?:3gpp|avi|mpeg|mpg|mp4|ogg|webm|x-flv|x-matroska|quicktime|x-ms-wmv)$/i.test(b[1]) ||
            /^audio\/(?:3gpp2|3gpp|aac|amr|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)$/i.test(b[1]) || /^font\/[\w-]+$/i.test(b[1])));
        if (!b) throw Error("");
        return Xi(URL.createObjectURL(a))
    }
    var cj = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
    var dj = function(a) {
        this.g = a
    };
    dj.prototype.toString = function() {
        return this.g + ""
    };

    function ej(a) {
        if (a instanceof dj) return a.g;
        throw Error("");
    };

    function fj(a, b) {
        if (b instanceof Ui) b = b.g;
        else throw Error("");
        a.src = b;
        var c;
        b = a.ownerDocument;
        b = b === void 0 ? document : b;
        var d;
        b = (d = (c = b).querySelector) == null ? void 0 : d.call(c, "script[nonce]");
        (c = b == null ? "" : b.nonce || b.getAttribute("nonce") || "") && a.setAttribute("nonce", c)
    };

    function gj(a, b) {
        if (a.nodeType === 1 && /^(script|style)$/i.test(a.tagName)) throw Error("");
        a.innerHTML = ej(b)
    };
    var hj = function(a) {
        var b = [],
            c = [],
            d = {},
            e = function(f, g) {
                var h = g + "  ";
                try {
                    if (f === void 0) b.push("undefined");
                    else if (f === null) b.push("NULL");
                    else if (typeof f === "string") b.push('"' + f.replace(/\n/g, "\n" + g) + '"');
                    else if (typeof f === "function") b.push(String(f).replace(/\n/g, "\n" + g));
                    else if (bb(f)) {
                        f[cb] || c.push(f);
                        var k = eb(f);
                        if (d[k]) b.push("*** reference loop detected (id=" + k + ") ***");
                        else {
                            d[k] = !0;
                            b.push("{");
                            for (var l in f) typeof f[l] !== "function" && (b.push("\n"), b.push(h), b.push(l + " = "), e(f[l], h));
                            b.push("\n" +
                                g + "}");
                            delete d[k]
                        }
                    } else b.push(f)
                } catch (n) {
                    b.push("*** " + n + " ***")
                }
            };
        e(a, "");
        for (a = 0; a < c.length; a++) gb(c[a]);
        return b.join("")
    };

    function ij(a, b) {
        a.write(ej(b))
    };
    var jj = function(a) {
            return decodeURIComponent(a.replace(/\+/g, " "))
        },
        kj = function(a) {
            Jb.test(a) && (a.indexOf("&") != -1 && (a = a.replace(Db, "&amp;")), a.indexOf("<") != -1 && (a = a.replace(Eb, "&lt;")), a.indexOf(">") != -1 && (a = a.replace(Fb, "&gt;")), a.indexOf('"') != -1 && (a = a.replace(Gb, "&quot;")), a.indexOf("'") != -1 && (a = a.replace(Hb, "&#39;")), a.indexOf("\x00") != -1 && (a = a.replace(Ib, "&#0;")));
            return a
        },
        lj = function(a, b) {
            a.length > b && (a = a.substring(0, b - 3) + "...");
            return a
        },
        mj = String.prototype.repeat ? function(a, b) {
            return a.repeat(b)
        } :
        function(a, b) {
            return Array(b + 1).join(a)
        },
        nj = function(a) {
            return a == null ? "" : String(a)
        },
        oj = Math.random() * 2147483648 | 0,
        pj = function(a) {
            return String(a).replace(/\-([a-z])/g, function(b, c) {
                return c.toUpperCase()
            })
        },
        qj = function() {
            return "googleAvInapp".replace(/([A-Z])/g, "-$1").toLowerCase()
        },
        rj = function(a) {
            return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
                return c + d.toUpperCase()
            })
        },
        sj = function(a) {
            isFinite(a) && (a = String(a));
            return typeof a === "string" ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a,
                10) : NaN
        };

    function tj(a) {
        var b = Ra.apply(1, arguments);
        if (b.length === 0) return Vi(a[0]);
        for (var c = a[0], d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return Vi(c)
    };
    var uj = function(a) {
            try {
                return !!a && a.location.href != null && zc(a, "foo")
            } catch (b) {
                return !1
            }
        },
        vj = function() {
            if (!globalThis.crypto) return Math.random();
            try {
                var a = new Uint32Array(1);
                globalThis.crypto.getRandomValues(a);
                return a[0] / 65536 / 65536
            } catch (b) {
                return Math.random()
            }
        },
        wj = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        };

    function xj(a) {
        var b, c;
        return (c = (b = /https?:\/\/[^\/]+/.exec(a)) == null ? void 0 : b[0]) != null ? c : ""
    }
    var yj = function() {
            var a = y;
            try {
                for (var b = null; b != a; b = a, a = a.parent) switch (a.location.protocol) {
                    case "https:":
                        return !0;
                    case "file:":
                        return !0;
                    case "http:":
                        return !1
                }
            } catch (c) {}
            return !0
        },
        zj = function(a, b) {
            try {
                return !(!a.frames || !a.frames[b])
            } catch (c) {
                return !1
            }
        },
        Aj = function(a, b) {
            for (var c = 0; c < 50; ++c) {
                if (zj(a, b)) return a;
                a: {
                    try {
                        var d = a.parent;
                        if (d && d != a) {
                            var e = d;
                            break a
                        }
                    } catch (f) {}
                    e = null
                }
                if (!(a = e)) break
            }
            return null
        },
        Bj = oi(function() {
            return si() ? 2 : ri() ? 1 : 0
        }),
        Cj = function() {
            return mi({
                Xa: function() {}
            })
        },
        Dj = function(a,
            b) {
            b = b === void 0 ? document : b;
            return b.createElement(String(a).toLowerCase())
        },
        Ej = function(a) {
            for (var b = a; a && a != a.parent;) a = a.parent, uj(a) && (b = a);
            return b
        };

    function Fj(a) {
        a = a && a.toString && a.toString();
        return typeof a === "string" && Kb(a, "[native code]")
    };
    var Gj = function() {
        if (!y.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
        try {
            var c = function() {};
            y.addEventListener("test", c, b);
            y.removeEventListener("test", c, b)
        } catch (d) {}
        return a
    }();
    var Hj = function(a, b) {
        this.x = a !== void 0 ? a : 0;
        this.y = b !== void 0 ? b : 0
    };
    m = Hj.prototype;
    m.equals = function(a) {
        return a instanceof Hj && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
    };
    m.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    m.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    m.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    m.scale = function(a, b) {
        this.x *= a;
        this.y *= typeof b === "number" ? b : a;
        return this
    };
    var Ij = function(a, b) {
        this.width = a;
        this.height = b
    };
    m = Ij.prototype;
    m.aspectRatio = function() {
        return this.width / this.height
    };
    m.isEmpty = function() {
        return !(this.width * this.height)
    };
    m.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    m.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    m.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    m.scale = function(a, b) {
        this.width *= a;
        this.height *= typeof b === "number" ? b : a;
        return this
    };
    var Lj = function(a) {
            return a ? new Jj(Kj(a)) : tb || (tb = new Jj)
        },
        Mj = function(a) {
            var b = document;
            return typeof a === "string" ? b.getElementById(a) : a
        },
        Oj = function(a, b) {
            ti(b, function(c, d) {
                d == "style" ? a.style.cssText = c : d == "class" ? a.className = c : d == "for" ? a.htmlFor = c : Nj.hasOwnProperty(d) ? a.setAttribute(Nj[d], c) : d.lastIndexOf("aria-", 0) == 0 || d.lastIndexOf("data-", 0) == 0 ? a.setAttribute(d, c) : a[d] = c
            })
        },
        Nj = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            nonce: "nonce",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        },
        Pj = function(a) {
            a = a.document;
            a = a.compatMode == "CSS1Compat" ? a.documentElement : a.body;
            return new Ij(a.clientWidth, a.clientHeight)
        },
        Qj = function(a) {
            return a ? a.defaultView : window
        },
        Tj = function(a, b, c) {
            var d = arguments,
                e = document,
                f = d[1],
                g = Rj(e, String(d[0]));
            f && (typeof f === "string" ? g.className = f : Array.isArray(f) ? g.className = f.join(" ") : Oj(g, f));
            d.length > 2 && Sj(e, g, d, 2);
            return g
        },
        Sj = function(a, b, c, d) {
            function e(h) {
                h &&
                    b.appendChild(typeof h === "string" ? a.createTextNode(h) : h)
            }
            for (; d < c.length; d++) {
                var f = c[d];
                if (!Za(f) || bb(f) && f.nodeType > 0) e(f);
                else {
                    a: {
                        if (f && typeof f.length == "number") {
                            if (bb(f)) {
                                var g = typeof f.item == "function" || typeof f.item == "string";
                                break a
                            }
                            if (typeof f === "function") {
                                g = typeof f.item == "function";
                                break a
                            }
                        }
                        g = !1
                    }
                    cc(g ? tc(f) : f, e)
                }
            }
        },
        Rj = function(a, b) {
            b = String(b);
            a.contentType === "application/xhtml+xml" && (b = b.toLowerCase());
            return a.createElement(b)
        },
        Uj = function(a) {
            a && a.parentNode && a.parentNode.removeChild(a)
        },
        Vj = function(a, b) {
            if (!a || !b) return !1;
            if (a.contains && b.nodeType == 1) return a == b || a.contains(b);
            if (typeof a.compareDocumentPosition != "undefined") return a == b || !!(a.compareDocumentPosition(b) & 16);
            for (; b && a != b;) b = b.parentNode;
            return b == a
        },
        Kj = function(a) {
            return a.nodeType == 9 ? a : a.ownerDocument || a.document
        },
        Wj = function(a) {
            try {
                return a.contentWindow || (a.contentDocument ? Qj(a.contentDocument) : null)
            } catch (b) {}
            return null
        },
        Xj = function(a, b) {
            a && (a = a.parentNode);
            for (var c = 0; a;) {
                if (b(a)) return a;
                a = a.parentNode;
                c++
            }
            return null
        },
        Jj = function(a) {
            this.g = a || y.document || document
        };
    Jj.prototype.getElementsByTagName = function(a, b) {
        return (b || this.g).getElementsByTagName(String(a))
    };
    var Yj = function(a) {
        var b = a.g;
        a = b.scrollingElement ? b.scrollingElement : Gc || b.compatMode != "CSS1Compat" ? b.body || b.documentElement : b.documentElement;
        b = b.defaultView;
        return new Hj(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    };
    Jj.prototype.appendChild = function(a, b) {
        a.appendChild(b)
    };
    Jj.prototype.append = function(a, b) {
        Sj(Kj(a), a, arguments, 1)
    };
    Jj.prototype.canHaveChildren = function(a) {
        if (a.nodeType != 1) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    Jj.prototype.contains = Vj;

    function J(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    J.prototype.getWidth = function() {
        return this.right - this.left
    };
    J.prototype.getHeight = function() {
        return this.bottom - this.top
    };
    var Zj = function(a) {
        return new J(a.top, a.right, a.bottom, a.left)
    };
    J.prototype.contains = function(a) {
        return this && a ? a instanceof J ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    J.prototype.expand = function(a, b, c, d) {
        bb(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(b), this.bottom += Number(c), this.left -= Number(d));
        return this
    };
    var ak = function(a, b) {
        return a == b ? !0 : a && b ? a.top == b.top && a.right == b.right && a.bottom == b.bottom && a.left == b.left : !1
    };
    J.prototype.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    J.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    J.prototype.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    var bk = function(a, b, c) {
        b instanceof Hj ? (a.left += b.x, a.right += b.x, a.top += b.y, a.bottom += b.y) : (a.left += b, a.right += b, typeof c === "number" && (a.top += c, a.bottom += c));
        return a
    };
    J.prototype.scale = function(a, b) {
        b = typeof b === "number" ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    };
    var ck = function(a, b, c, d) {
            this.left = a;
            this.top = b;
            this.width = c;
            this.height = d
        },
        dk = function(a) {
            return new J(a.top, a.left + a.width, a.top + a.height, a.left)
        };
    m = ck.prototype;
    m.contains = function(a) {
        return a instanceof Hj ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    m.getSize = function() {
        return new Ij(this.width, this.height)
    };
    m.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    m.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    m.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    m.scale = function(a, b) {
        b = typeof b === "number" ? b : a;
        this.left *= a;
        this.width *= a;
        this.top *= b;
        this.height *= b;
        return this
    };
    var fk = function(a, b) {
            if (typeof b === "string")(b = ek(a, b)) && (a.style[b] = void 0);
            else
                for (var c in b) {
                    var d = a,
                        e = b[c],
                        f = ek(d, c);
                    f && (d.style[f] = e)
                }
        },
        gk = {},
        ek = function(a, b) {
            var c = gk[b];
            if (!c) {
                var d = pj(b);
                c = d;
                a.style[d] === void 0 && (d = (Gc ? "Webkit" : Fc ? "Moz" : null) + rj(d), a.style[d] !== void 0 && (c = d));
                gk[b] = c
            }
            return c
        },
        hk = function(a, b) {
            var c = a.style[pj(b)];
            return typeof c !== "undefined" ? c : a.style[ek(a, b)] || ""
        },
        ik = function(a, b) {
            var c = Kj(a);
            return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a,
                null)) ? a[b] || a.getPropertyValue(b) || "" : ""
        },
        jk = function(a) {
            try {
                return a.getBoundingClientRect()
            } catch (b) {
                return {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                }
            }
        },
        kk = function(a) {
            var b = Kj(a),
                c = new Hj(0, 0);
            if (a == (b ? Kj(b) : document).documentElement) return c;
            a = jk(a);
            b = Yj(Lj(b));
            c.x = a.left + b.x;
            c.y = a.top + b.y;
            return c
        },
        lk = function(a, b) {
            var c = new Hj(0, 0),
                d = Qj(Kj(a));
            if (!zc(d, "parent")) return c;
            do {
                if (d == b) var e = kk(a);
                else e = jk(a), e = new Hj(e.left, e.top);
                c.x += e.x;
                c.y += e.y
            } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
            return c
        },
        mk = function() {
            var a = "100%";
            typeof a == "number" && (a = Math.round(a) + "px");
            return a
        },
        ok = function(a) {
            var b = nk,
                c;
            (c = ik(a, "display")) || (c = a.currentStyle ? a.currentStyle.display : null);
            if ((c || a.style && a.style.display) != "none") return b(a);
            c = a.style;
            var d = c.display,
                e = c.visibility,
                f = c.position;
            c.visibility = "hidden";
            c.position = "absolute";
            c.display = "inline";
            a = b(a);
            c.display = d;
            c.position = f;
            c.visibility = e;
            return a
        },
        nk = function(a) {
            var b = a.offsetWidth,
                c = a.offsetHeight,
                d = Gc && !b && !c;
            return (b === void 0 || d) && a.getBoundingClientRect ?
                (a = jk(a), new Ij(a.right - a.left, a.bottom - a.top)) : new Ij(b, c)
        },
        pk = function(a) {
            var b = new Ij(a.offsetWidth, a.offsetHeight);
            var c = ik(a, "paddingLeft");
            var d = ik(a, "paddingRight"),
                e = ik(a, "paddingTop"),
                f = ik(a, "paddingBottom");
            c = new J(parseFloat(e), parseFloat(d), parseFloat(f), parseFloat(c));
            d = ik(a, "borderLeftWidth");
            e = ik(a, "borderRightWidth");
            f = ik(a, "borderTopWidth");
            a = ik(a, "borderBottomWidth");
            a = new J(parseFloat(f), parseFloat(e), parseFloat(a), parseFloat(d));
            return new Ij(b.width - a.left - c.left - c.right - a.right,
                b.height - a.top - c.top - c.bottom - a.bottom)
        };
    var qk = oi(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            y.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });

    function rk(a) {
        return a ? a.passive && qk() ? a : a.capture || !1 : !1
    }

    function sk(a, b, c, d) {
        return typeof a.addEventListener === "function" ? (a.addEventListener(b, c, rk(d)), !0) : !1
    }

    function tk(a, b, c) {
        typeof a.removeEventListener === "function" && a.removeEventListener(b, c, rk())
    };

    function uk(a, b, c, d, e) {
        vk(a, b, c === void 0 ? null : c, d === void 0 ? !1 : d, e === void 0 ? !1 : e)
    }

    function vk(a, b, c, d, e) {
        e = e === void 0 ? !1 : e;
        a.google_image_requests || (a.google_image_requests = []);
        var f = Dj("IMG", a.document);
        if (c || d) {
            var g = function(h) {
                c && c(h);
                d && pc(a.google_image_requests, f);
                tk(f, "load", g);
                tk(f, "error", g)
            };
            sk(f, "load", g);
            sk(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }

    function wk(a, b) {
        var c = c === void 0 ? !1 : c;
        var d = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
        wj(a, function(e, f) {
            if (e || e === 0) d += "&" + f + "=" + encodeURIComponent(String(e))
        });
        xk(d, c)
    }

    function xk(a, b) {
        var c = window;
        b = b === void 0 ? !1 : b;
        var d = d === void 0 ? !1 : d;
        c.fetch ? (b = {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        }, d && (b.mode = "cors", "setAttributionReporting" in XMLHttpRequest.prototype ? b.attributionReporting = {
            eventSourceEligible: "true",
            triggerEligible: "false"
        } : b.headers = {
            "Attribution-Reporting-Eligible": "event-source"
        }), c.fetch(a, b)) : uk(c, a, void 0, b, d)
    };

    function yk(a, b) {
        try {
            var c = function(d) {
                var e = {};
                return [(e[d.Vf] = d.xf, e)]
            };
            return JSON.stringify([a.filter(function(d) {
                return d.ke
            }).map(c), nf(b), a.filter(function(d) {
                return !d.ke
            }).map(c)])
        } catch (d) {
            return zk(d, b), ""
        }
    }

    function zk(a, b) {
        try {
            wk({
                m: ii(a instanceof Error ? a : Error(String(a))),
                b: F(b, 1) || null,
                v: pg(b, 2) || null
            }, "rcs_internal")
        } catch (c) {}
    }
    var Ak = function(a, b) {
        var c = new fi;
        a = H(c, 1, a);
        b = Uf(a, 2, Pe(b), "");
        a = b.D;
        c = a[B] | 0;
        this.l = Cd(b, c) ? b : zf(b, a, c) ? yf(b, a) : new b.constructor(xf(a, c, !0))
    };
    var Bk = function(a) {
        this.D = C(a)
    };
    r(Bk, I);
    var Ck = [1, 2, 3];
    var Dk = function(a) {
        this.D = C(a)
    };
    r(Dk, I);
    var Ek = [2, 4];
    var Fk = function(a) {
        this.D = C(a)
    };
    r(Fk, I);
    var Gk = function(a) {
        this.D = C(a)
    };
    r(Gk, I);
    var Hk = function(a) {
        this.D = C(a)
    };
    r(Hk, I);
    var Ik = function(a, b) {
            return H(a, 1, b)
        },
        Jk = function(a, b) {
            return H(a, 2, b)
        };
    var Kk = function(a) {
        this.D = C(a)
    };
    r(Kk, I);
    var Lk = [1, 2];
    var Mk = function(a) {
        this.D = C(a)
    };
    r(Mk, I);
    var Nk = function(a, b) {
            return dg(a, 1, b)
        },
        Ok = function(a, b) {
            return fg(a, 2, b)
        },
        Pk = function(a, b) {
            return Tf(a, 4, b, ve)
        },
        Qk = function(a, b) {
            return fg(a, 5, b)
        },
        Rk = function(a, b) {
            return H(a, 6, b)
        };
    var Sk = function(a) {
        this.D = C(a)
    };
    r(Sk, I);
    var Tk = [1, 2, 3, 4, 6];
    var Uk = function(a) {
        this.D = C(a)
    };
    r(Uk, I);
    var Vk = function(a) {
        this.D = C(a)
    };
    r(Vk, I);
    var Wk = [2, 3, 4];
    var Xk = function(a) {
        this.D = C(a)
    };
    r(Xk, I);
    var Yk = [3, 4, 5],
        Zk = [6, 7];
    var $k = function(a) {
        this.D = C(a)
    };
    r($k, I);
    var al = [4, 5];
    var bl = function(a) {
        this.D = C(a)
    };
    r(bl, I);
    bl.prototype.getTagSessionCorrelator = function() {
        return ng(this, 2)
    };
    var dl = function(a) {
            var b = new bl;
            return eg(b, 4, cl, a)
        },
        cl = [4, 5, 7, 8, 9];
    var el = function(a) {
        this.D = C(a)
    };
    r(el, I);
    var fl = function(a) {
        this.D = C(a)
    };
    r(fl, I);
    var gl = function(a) {
        this.D = C(a)
    };
    r(gl, I);
    var hl = function(a) {
        this.D = C(a)
    };
    r(hl, I);
    hl.prototype.Ab = function() {
        return E(this, fl, 1)
    };
    hl.prototype.getSize = function() {
        return E(this, gl, 2)
    };
    hl.prototype.getDuration = function() {
        return E(this, el, 3)
    };
    var il = function(a) {
        this.D = C(a)
    };
    r(il, I);
    var jl = function(a) {
        this.D = C(a)
    };
    r(jl, I);
    var kl = function(a) {
        this.D = C(a)
    };
    r(kl, I);
    var ll = function(a) {
        this.D = C(a)
    };
    r(ll, I);
    var ml = function(a) {
        this.D = C(a)
    };
    r(ml, I);
    ml.prototype.getEscapedQemQueryId = function() {
        return pg(this, 4)
    };
    var nl = function(a) {
        this.D = C(a)
    };
    r(nl, I);
    var ol = function(a) {
        this.D = C(a)
    };
    r(ol, I);
    ol.prototype.getEscapedQemQueryId = function() {
        return pg(this, 2)
    };
    var pl = function(a) {
        return $f(a, nl, 5)
    };
    var rl = function(a) {
            this.g = a;
            this.ki = new ql(this.g)
        },
        ql = function(a) {
            this.g = a;
            this.ri = new sl(this.g)
        },
        sl = function(a) {
            this.g = a;
            this.runAdAuction = new tl;
            this.Kg = new ul(this.g)
        },
        ul = function(a) {
            this.g = a
        },
        vl = function(a, b) {
            a = a.g;
            var c = a.H;
            var d = new Fk;
            d = Uf(d, 1, Pe("SOomke"), "");
            var e = new Bk;
            e = Xf(e, 1, Ck, Pe(b.Sd));
            d = ig(d, 4, Bk, e);
            e = new Bk;
            e = Xf(e, 1, Ck, Pe(b.status));
            d = ig(d, 4, Bk, e);
            e = new Dk;
            b = Xf(e, 2, Ek, He(Math.round(b.Me)));
            b = dg(d, 3, b);
            c.call(a, b)
        },
        tl = function() {
            this.duration = new wl
        },
        wl = function() {},
        xl = function() {
            Ak.apply(this,
                arguments);
            this.Fh = new rl(this)
        };
    r(xl, Ak);
    var yl = function() {
        xl.apply(this, arguments)
    };
    r(yl, xl);
    yl.prototype.Hd = function() {
        this.A.apply(this, ta(Ra.apply(0, arguments).map(function(a) {
            return {
                ke: !0,
                Vf: 4,
                xf: nf(a)
            }
        })))
    };
    yl.prototype.H = function() {
        this.A.apply(this, ta(Ra.apply(0, arguments).map(function(a) {
            return {
                ke: !1,
                Vf: 1,
                xf: nf(a)
            }
        })))
    };

    function zl(a, b) {
        if (globalThis.fetch) globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: b.length < 65536,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(function() {});
        else {
            var c = new XMLHttpRequest;
            c.open("POST", a, !0);
            c.send(b)
        }
    };
    var Al = function(a, b, c, d, e, f, g, h) {
        yl.call(this, a, b);
        this.F = c;
        this.L = d;
        this.G = e;
        this.C = f;
        this.I = g;
        this.o = h;
        this.g = [];
        this.j = null;
        this.B = !1
    };
    r(Al, yl);
    var Bl = function(a) {
        a.j !== null && (clearTimeout(a.j), a.j = null);
        if (a.g.length) {
            var b = yk(a.g, a.l);
            a.L(a.F + "?e=1", b);
            a.g = []
        }
    };
    Al.prototype.A = function() {
        var a = Ra.apply(0, arguments),
            b = this;
        try {
            this.I && yk(this.g.concat(a), this.l).length >= 65536 && Bl(this), this.o && !this.B && (this.B = !0, this.o.g(function() {
                Bl(b)
            })), this.g.push.apply(this.g, ta(a)), this.g.length >= this.C && Bl(this), this.g.length && this.j === null && (this.j = setTimeout(function() {
                Bl(b)
            }, this.G))
        } catch (c) {
            zk(c, this.l)
        }
    };
    var Cl = function(a, b, c, d, e, f) {
        Al.call(this, a, b, "https://pagead2.googlesyndication.com/pagead/ping", zl, c === void 0 ? 1E3 : c, d === void 0 ? 100 : d, (e === void 0 ? !1 : e) && !!globalThis.fetch, f)
    };
    r(Cl, Al);

    function Dl(a) {
        a = a === void 0 ? y : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (e) {}
        var c, d;
        return ((c = b) == null ? 0 : c.pageViewId) && ((d = b) == null ? 0 : d.canonicalUrl) ? b : null
    };
    var El = function() {
            this.S = {}
        },
        Fl = function() {
            var a = Dl(window);
            if (a) {
                if (a) {
                    var b = a.pageViewId;
                    a = a.clientId;
                    typeof a === "string" && (b += a.replace(/\D/g, "").substring(0, 6))
                } else b = null;
                return +b
            }
            b = Ej(window);
            a = b.google_global_correlator;
            a || (b.google_global_correlator = a = 1 + Math.floor(Math.random() * 8796093022208));
            return a
        },
        Hl = function(a, b) {
            var c = Gl[7] || "google_ps_7";
            a = a.S;
            var d = a[c];
            return d === void 0 ? (a[c] = b(), a[c]) : d
        },
        Il = function(a) {
            var b = Fl();
            return Hl(a, function() {
                return b
            })
        },
        pm = function() {
            if (om) var a = om;
            else {
                a = ((a = a === void 0 ? Dl() : a) ? uj(a.master) ? a.master : null : null) || window;
                var b = a.google_persistent_state_async;
                a = b != null && typeof b == "object" && b.S != null && typeof b.S == "object" ? om = b : a.google_persistent_state_async = om = new El
            }
            return Il(a)
        },
        om = null,
        qm = {},
        Gl = (qm[8] = "google_prev_ad_formats_by_region", qm[9] = "google_prev_ad_slotnames_by_region", qm);

    function rm(a) {
        if (a != null) return sm(a)
    }

    function tm(a) {
        return a == null ? null : sm(a)
    }

    function sm(a) {
        return Xd(a) ? Number(a) : String(a)
    };
    var um = va(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]),
        vm = function() {
            var a = a === void 0 ? "jserror" : a;
            var b = b === void 0 ? .01 : b;
            var c = c === void 0 ? tj(um) : c;
            this.j = a;
            this.l = b;
            this.o = c;
            this.g = !1
        };
    vm.prototype.Le = function(a) {
        this.g = a
    };
    vm.prototype.kb = function(a, b, c, d) {
        c = c === void 0 ? this.l : c;
        d = d === void 0 ? this.j : d;
        if (Math.random() > c) return this.g;
        hi(b) || (b = new gi(b, {
            context: a,
            id: d
        }));
        y.google_js_errors = y.google_js_errors || [];
        y.google_js_errors.push(b);
        y.error_rep_loaded || (b = y.document, a = Dj("SCRIPT", b), fj(a, this.o), (b = b.getElementsByTagName("script")[0]) && b.parentNode && b.parentNode.insertBefore(a, b), y.error_rep_loaded = !0);
        return this.g
    };
    vm.prototype.Sb = function(a, b) {
        try {
            return b()
        } catch (c) {
            if (!this.kb(a, c, this.l, this.j)) throw c;
        }
    };
    vm.prototype.Ae = function(a, b, c) {
        var d = this;
        return function() {
            var e = Ra.apply(0, arguments);
            return d.Sb(a, function() {
                return b.apply(c, e)
            })
        }
    };

    function wm(a) {
        if (a.prerendering) return 3;
        var b;
        return (b = {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5,
            "": 0
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""]) != null ? b : 0
    }

    function xm(a) {
        var b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    };
    var ym = null,
        zm = function() {
            var a = a === void 0 ? window : a;
            if (ym === null) {
                ym = "";
                try {
                    var b = "";
                    try {
                        b = a.top.location.hash
                    } catch (d) {
                        b = a.location.hash
                    }
                    if (b) {
                        var c = b.match(/\bdeid=([\d,]+)/);
                        ym = c ? c[1] : ""
                    }
                } catch (d) {}
            }
            return ym
        };

    function Am() {
        var a = a === void 0 ? y : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : nb()
    }

    function Bm() {
        var a = a === void 0 ? y : a;
        return (a = a.performance) && a.now ? a.now() : null
    }

    function Cm(a, b) {
        b = b === void 0 ? y : b;
        var c, d;
        return ((c = b.performance) == null ? void 0 : (d = c.timing) == null ? void 0 : d[a]) || 0
    }

    function Dm() {
        var a = a === void 0 ? y : a;
        var b = Math.min(Cm("domLoading", a) || Infinity, Cm("domInteractive", a) || Infinity);
        return b === Infinity ? Math.max(Cm("responseEnd", a), Cm("navigationStart", a)) : b
    };
    var Em = function(a, b, c, d) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = d === void 0 ? 0 : d;
        this.taskId = this.slotId = void 0;
        this.uniqueId = Math.random()
    };
    var Fm = y.performance,
        Gm = !!(Fm && Fm.mark && Fm.measure && Fm.clearMarks),
        Hm = oi(function() {
            var a;
            if (a = Gm) a = zm(), a = !!a.indexOf && a.indexOf("1337") >= 0;
            return a
        }),
        Im = function(a, b) {
            this.events = [];
            this.g = b || y;
            var c = null;
            b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.events = b.google_js_reporting_queue, c = b.google_measure_js_timing);
            this.l = Hm() || (c != null ? c : Math.random() < a)
        };
    Im.prototype.A = function() {
        this.l = !1;
        this.events !== this.g.google_js_reporting_queue && (Hm() && cc(this.events, Jm), this.events.length = 0)
    };
    Im.prototype.I = function(a) {
        !this.l || this.events.length > 2048 || this.events.push(a)
    };
    var Jm = function(a) {
        a && Fm && Hm() && (Fm.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), Fm.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    };
    Im.prototype.start = function(a, b) {
        if (!this.l) return null;
        a = new Em(a, b, Bm() || Am());
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        Fm && Hm() && Fm.mark(b);
        return a
    };
    Im.prototype.end = function(a) {
        if (this.l && typeof a.value === "number") {
            a.duration = (Bm() || Am()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            Fm && Hm() && Fm.mark(b);
            this.I(a)
        }
    };

    function Km(a) {
        a = a._google_rum_ns_ = a._google_rum_ns_ || {};
        return a.pq = a.pq || []
    };

    function Lm(a, b, c) {
        wj(b, function(d, e) {
            var f = c && c[e];
            !d && d !== 0 || f || (a += "&" + encodeURIComponent(e) + "=" + encodeURIComponent(String(d)), c && (c[e] = !0))
        });
        return a
    }
    var Qm = function(a, b, c, d, e, f, g, h) {
        f = f === void 0 ? Infinity : f;
        g = g === void 0 ? !1 : g;
        Im.call(this, a, h);
        var k = this;
        this.aa = b;
        this.domain = c;
        this.path = d;
        this.ca = e;
        this.L = 0;
        this.C = {};
        this.H = {};
        this.ba = [];
        this.report = {};
        this.j = 0;
        this.G = [];
        this.M = f;
        a = this.g.navigator;
        this.V = !(this.domain !== "csi.gstatic.com" || !a || !a.sendBeacon);
        this.g.performance && this.g.performance.now || Mm(this, "dat", 1);
        a && a.deviceMemory && Mm(this, "dmc", a.deviceMemory);
        this.g === this.g.top && Mm(this, "top", 1);
        this.K = !g;
        this.P = function() {
            k.g.setTimeout(function() {
                    k.o()
                },
                1100)
        };
        this.U = function() {
            for (var n = v(k.ba), p = n.next(); !p.done; p = n.next()) {
                p = p.value;
                try {
                    p()
                } catch (u) {}
            }
            n = k.g;
            var q = q === void 0 ? {} : q;
            typeof window.CustomEvent === "function" ? p = new CustomEvent("rum_blp", q) : (p = document.createEvent("CustomEvent"), p.initCustomEvent("rum_blp", !!q.bubbles, !!q.cancelable, q.detail));
            n.dispatchEvent(p);
            k.o()
        };
        this.da = qi(function() {
            k.o()
        });
        this.ia = function() {
            var n = k.g.document;
            (n.hidden != null ? n.hidden : n.mozHidden != null ? n.mozHidden : n.webkitHidden != null && n.webkitHidden) && k.da()
        };
        this.F = this.g.setTimeout(function() {
            k.o()
        }, 5E3);
        this.B = b.length + c.length + d.length + e.length + 3;
        cc(this.events, function(n) {
            Nm(k, n)
        });
        b = Km(this.g);
        var l = function() {
            var n = Ra.apply(0, arguments)[0],
                p = n[0];
            n = n[1];
            var q = p.length + n.length + 2;
            k.B + k.j + q > 8E3 && k.o();
            k.G.push([p, n]);
            k.j += q;
            Om(k);
            return 0
        };
        cc(b, function(n) {
            return l(n)
        });
        b.length = 0;
        b.push = l;
        Mm(this, "puid", (this.L + 1).toString(36) + "~" + nb().toString(36));
        Pm(this)
    };
    r(Qm, Im);
    var Pm = function(a) {
            a.g.document.readyState === "complete" ? a.g.setTimeout(function() {
                a.o()
            }, 0) : sk(a.g, "load", a.P);
            var b = xm(a.g.document);
            typeof b !== "undefined" && sk(a.g, b, a.ia);
            sk(a.g, "pagehide", a.U)
        },
        Mm = function(a, b, c) {
            c = String(c);
            a.B = a.C[b] != null ? a.B + (c.length - a.C[b].length) : a.B + (b.length + c.length + 2);
            a.C[b] = c
        },
        Tm = function(a, b, c, d, e) {
            e = e === void 0 ? "" : e;
            var f = Rm(a, b, c, d, e);
            a.B + a.j + f > 8E3 && (a.o(), f = b.length + c.length + 2);
            Sm(a, b, c, d, e);
            a.j += f;
            Om(a)
        },
        Rm = function(a, b, c, d, e) {
            return a.report[b] == null ? b.length +
                c.length + 2 : d ? c.length + (e === void 0 ? "" : e).length : c.length - a.report[b].length
        },
        Sm = function(a, b, c, d, e) {
            a.report[b] = d && a.report[b] != null ? a.report[b] + ("" + (e === void 0 ? "" : e) + c) : c
        },
        Om = function(a) {
            a.B + a.j >= 6E3 && a.o()
        };
    Qm.prototype.o = function() {
        if (this.l && this.K) {
            try {
                this.j && (this.sendBeacon(this.report), this.L === this.M && this.A())
            } catch (a) {
                (new vm).kb(358, a)
            }
            this.report = {};
            this.j = 0;
            this.events.length = 0;
            this.g.clearTimeout(this.F);
            this.F = 0
        }
    };
    var Um = function(a, b) {
        var c = a.aa + "//" + a.domain + a.path + a.ca,
            d = {};
        c = Lm(c, a.C, d);
        c = Lm(c, b, d);
        b = a.g;
        b.google_timing_params && (c = Lm(c, b.google_timing_params, d), b.google_timing_params = void 0);
        cc(a.G, function(e) {
            var f = v(e);
            e = f.next().value;
            f = f.next().value;
            var g = {};
            c = Lm(c, (g[e] = f, g))
        });
        a.G.length = 0;
        return c
    };
    Qm.prototype.sendBeacon = function(a) {
        this.L++;
        a = Um(this, a);
        var b = !1;
        try {
            b = !!(this.V && this.g.navigator && this.g.navigator.sendBeacon(a, null))
        } catch (c) {
            this.V = !1
        }
        b || uk(this.g, a);
        Mm(this, "puid", (this.L + 1).toString(36) + "~" + nb().toString(36))
    };
    var Nm = function(a, b) {
        var c = "met." + b.type,
            d = typeof b.value === "number" ? Math.round(b.value).toString(36) : b.value,
            e = Math.round(b.duration);
        b = "" + b.label + (b.slotId != null ? "_" + b.slotId : "") + ("." + d) + (e > 0 ? "_" + e.toString(36) : "") + (b.taskId != null ? "__" + Math.round(b.taskId).toString(36) : "");
        Tm(a, c, b, !0, "~")
    };
    Qm.prototype.I = function(a) {
        this.l && this.L < this.M && (Im.prototype.I.call(this, a), Nm(this, a))
    };
    Qm.prototype.A = function() {
        Im.prototype.A.call(this);
        this.g.clearTimeout(this.F);
        this.j = this.F = 0;
        this.report = {};
        Fi(this.H);
        Fi(this.C);
        tk(this.g, "load", this.P);
        tk(this.g, "pagehide", this.U)
    };
    var K = function(a) {
        var b = "Pb";
        if (a.Pb && a.hasOwnProperty(b)) return a.Pb;
        b = new a;
        return a.Pb = b
    };
    var L = function() {
        this.g = new Qm(1, "https:", "csi.gstatic.com", "/csi?v=2&s=", "ima", void 0, !0);
        var a = pm();
        a != null && Mm(this.g, "c", a);
        a = Math.floor(Number(this.g.C.c) / 2);
        a != null && Mm(this.g, "slotId", a)
    };
    L.prototype.o = function() {
        var a = this.g;
        a.K = !0;
        a.o()
    };
    var M = function(a, b, c) {
            if (c != null) {
                a = a.g;
                var d = b + "=" + c;
                a.H[d] || (Tm(a, b, c, !1), d.length < 1E3 && (a.H[d] = !0))
            }
        },
        Vm = function(a, b) {
            for (var c in b) b[c] = typeof b[c] === "object" ? encodeURIComponent(JSON.stringify(b[c])) : encodeURIComponent(String(b[c]));
            a = a.g;
            var d = !1;
            c = 0;
            for (var e = v(Object.keys(b)), f = e.next(); !f.done; f = e.next()) f = f.value, a.report[f] != null && (d = !0), c += Rm(a, f, b[f], !1);
            (a.B + a.j + c > 8E3 || d) && a.o();
            d = v(Object.keys(b));
            for (e = d.next(); !e.done; e = d.next()) e = e.value, Sm(a, e, b[e], !1);
            a.j += c;
            Om(a)
        },
        Wm = function(a) {
            var b =
                L.getInstance().g;
            b.l && b.I(new Em(a, 4, Am() - 0, 0))
        };
    L.prototype.recordClick = function(a, b, c, d) {
        for (var e = !1, f = "notag"; d != null && d !== document.documentElement;) {
            var g = void 0,
                h = void 0;
            if (((g = d) == null ? 0 : g.getAttribute("data-ck-navigates")) || ((h = d) == null ? 0 : h.getAttribute("data-ck-tag"))) {
                g = f = void 0;
                e = (g = (f = d) == null ? void 0 : f.getAttribute("data-ck-navigates")) != null ? g : !1;
                h = g = void 0;
                f = (h = (g = d) == null ? void 0 : g.getAttribute("data-ck-tag")) != null ? h : "notag";
                break
            }
            g = void 0;
            d = (g = d.parentElement) != null ? g : void 0
        }
        d = this.g;
        d.l && d.I(new Em(a + "_" + b + "x" + c + "|" + e + "|" + f, 4, Am(),
            0))
    };
    L.getInstance = function() {
        return K(L)
    };
    var Xm = function(a) {
            return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
        },
        Ym = function(a) {
            try {
                return y.JSON.parse(a)
            } catch (b) {}
            a = String(a);
            if (Xm(a)) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        $m = function() {
            this.g = Zm
        };
    $m.prototype.fa = function(a) {
        var b = [];
        an(this, a, b);
        return b.join("")
    };
    var an = function(a, b, c) {
            if (b == null) c.push("null");
            else {
                if (typeof b == "object") {
                    if (Array.isArray(b)) {
                        var d = b;
                        b = d.length;
                        c.push("[");
                        for (var e = "", f = 0; f < b; f++) c.push(e), e = d[f], an(a, a.g ? a.g.call(d, String(f), e) : e, c), e = ",";
                        c.push("]");
                        return
                    }
                    if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                    else {
                        c.push("{");
                        f = "";
                        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (e = b[d], typeof e != "function" && (c.push(f), bn(d, c), c.push(":"), an(a, a.g ? a.g.call(b, d, e) : e, c), f = ","));
                        c.push("}");
                        return
                    }
                }
                switch (typeof b) {
                    case "string":
                        bn(b, c);
                        break;
                    case "number":
                        c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                        break;
                    case "boolean":
                        c.push(String(b));
                        break;
                    case "function":
                        c.push("null");
                        break;
                    default:
                        throw Error("Unknown type: " + typeof b);
                }
            }
        },
        cn = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\v": "\\u000b"
        },
        dn = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g,
        bn = function(a, b) {
            b.push('"', a.replace(dn, function(c) {
                var d = cn[c];
                d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).slice(1), cn[c] = d);
                return d
            }), '"')
        };
    var en = function() {
            this.l = null;
            this.g = "missing-id";
            this.j = !1
        },
        gn = function(a) {
            var b = null;
            try {
                b = document.getElementsByClassName("lima-exp-data")
            } catch (c) {
                return fn("missing-element", a.g), null
            }
            if (b.length > 1) return fn("multiple-elements", a.g), null;
            b = b[0];
            return b ? b.innerHTML : (fn("missing-element", a.g), null)
        },
        jn = function() {
            var a = hn,
                b = gn(a);
            if (b !== null)
                if (Xm(b)) {
                    var c = JSON.parse(b);
                    b = c.experimentIds;
                    var d = c.binaryIdentifier;
                    c = c.adEventId;
                    var e = typeof d === "string";
                    if (typeof c == "string") {
                        var f = L.getInstance();
                        c != null && Mm(f.g, "qqid", c)
                    }
                    e && (a.g = d);
                    typeof b !== "string" ? fn("missing-flags", a.g) : (e || fn("missing-binary-id", a.g), a.l = b)
                } else fn("invalid-json", a.g)
        };
    en.prototype.reset = function() {
        this.l = null;
        this.g = "missing-id"
    };

    function kn(a, b) {
        var c = bg(a, Xk, 2, Lf());
        if (!c.length) return ln(a, b);
        a = F(a, 1);
        if (a === 1) {
            var d = kn(c[0], b);
            return d.success ? {
                success: !0,
                value: !d.value
            } : d
        }
        c = fc(c, function(h) {
            return kn(h, b)
        });
        switch (a) {
            case 2:
                var e;
                return (e = (d = c.find(function(h) {
                    return h.success && !h.value
                })) != null ? d : c.find(function(h) {
                    return !h.success
                })) != null ? e : {
                    success: !0,
                    value: !0
                };
            case 3:
                var f, g;
                return (g = (f = c.find(function(h) {
                    return h.success && h.value
                })) != null ? f : c.find(function(h) {
                    return !h.success
                })) != null ? g : {
                    success: !0,
                    value: !1
                };
            default:
                return {
                    success: !1,
                    Ma: 3
                }
        }
    }

    function ln(a, b) {
        var c = Yf(a, Yk);
        a: {
            switch (c) {
                case 3:
                    var d = sg(a, 3, Yk);
                    break a;
                case 4:
                    d = sg(a, 4, Yk);
                    break a;
                case 5:
                    d = sg(a, 5, Yk);
                    break a
            }
            d = void 0
        }
        if (!d) return {
            success: !1,
            Ma: 2
        };
        b = (b = b[c]) && b[d];
        if (!b) return {
            success: !1,
            jc: d,
            Jc: c,
            Ma: 1
        };
        try {
            var e = b.apply;
            var f = Mf(a, 8, Qe, Lf());
            var g = e.call(b, null, ta(f))
        } catch (h) {
            return {
                success: !1,
                jc: d,
                Jc: c,
                Ma: 2
            }
        }
        e = F(a, 1);
        if (e === 4) return {
            success: !0,
            value: !!g
        };
        if (e === 5) return {
            success: !0,
            value: g != null
        };
        if (e === 12) a = pg(a, Zf(a, Zk, 7));
        else a: {
            switch (c) {
                case 4:
                    a = og(a, Zf(a, Zk, 6));
                    break a;
                case 5:
                    a = pg(a, Zf(a, Zk, 7));
                    break a
            }
            a = void 0
        }
        if (a == null) return {
            success: !1,
            jc: d,
            Jc: c,
            Ma: 3
        };
        if (e === 6) return {
            success: !0,
            value: g === a
        };
        if (e === 9) return {
            success: !0,
            value: g != null && Mb(String(g), a) === 0
        };
        if (g == null) return {
            success: !1,
            jc: d,
            Jc: c,
            Ma: 4
        };
        switch (e) {
            case 7:
                c = g < a;
                break;
            case 8:
                c = g > a;
                break;
            case 12:
                c = Kd(a) && Kd(g) && (new RegExp(a)).test(g);
                break;
            case 10:
                c = g != null && Mb(String(g), a) === -1;
                break;
            case 11:
                c = g != null && Mb(String(g), a) === 1;
                break;
            default:
                return {
                    success: !1,
                    Ma: 3
                }
        }
        return {
            success: !0,
            value: c
        }
    }

    function mn(a, b) {
        return a ? b ? kn(a, b) : {
            success: !1,
            Ma: 1
        } : {
            success: !0,
            value: !0
        }
    };
    var nn = function(a) {
        this.D = C(a)
    };
    r(nn, I);
    var on = function(a) {
        return Mf(a, 4, Qe, Lf())
    };
    var pn = function(a) {
        this.D = C(a)
    };
    r(pn, I);
    pn.prototype.getValue = function() {
        return E(this, nn, 2)
    };
    var qn = function(a) {
        this.D = C(a)
    };
    r(qn, I);
    var rn = function(a) {
            Bf(a);
            a = a.D;
            var b = a[B] | 0,
                c = Ff(a, 4),
                d = void 0 === Gd,
                e = Re(c, nn, !d, b);
            !d || e ? (e = ef(e), c !== e && (b = Hf(a, b, 4, e), Cf(a, b)), a = e) : a = void 0;
            return a
        },
        sn = Uh(qn),
        tn = [1, 2, 3, 6, 7, 8];
    var un = function(a, b, c) {
            var d = d === void 0 ? new Cl(6, "unknown", b) : d;
            this.B = a;
            this.o = c;
            this.j = d;
            this.g = [];
            this.l = a > 0 && vj() < 1 / a
        },
        wn = function(a, b, c, d, e, f) {
            if (a.l) {
                var g = Jk(Ik(new Hk, b), c);
                b = Rk(Ok(Nk(Qk(Pk(new Mk, d), e), g), a.g.slice()), f);
                b = dl(b);
                a.j.Hd(vn(a, b));
                if (f === 1 || f === 3 || f === 4 && !a.g.some(function(h) {
                        return F(h, 1) === F(g, 1) && F(h, 2) === c
                    })) a.g.push(g), a.g.length > 100 && a.g.shift()
            }
        },
        xn = function(a, b, c, d) {
            if (a.l) {
                var e = new Gk;
                b = wg(e, 1, b);
                c = wg(b, 2, c);
                d = Ag(c, 3, d);
                c = new bl;
                d = eg(c, 8, cl, d);
                a.j.Hd(vn(a, d))
            }
        },
        yn =
        function(a, b, c, d, e) {
            if (a.l) {
                var f = new $k;
                b = dg(f, 1, b);
                c = Ag(b, 2, c);
                d = wg(c, 3, d);
                if (e.Jc === void 0) Bg(d, 4, al, e.Ma);
                else switch (e.Jc) {
                    case 3:
                        c = new Vk;
                        c = Bg(c, 2, Wk, e.jc);
                        e = Ag(c, 1, e.Ma);
                        eg(d, 5, al, e);
                        break;
                    case 4:
                        c = new Vk;
                        c = Bg(c, 3, Wk, e.jc);
                        e = Ag(c, 1, e.Ma);
                        eg(d, 5, al, e);
                        break;
                    case 5:
                        c = new Vk, c = Bg(c, 4, Wk, e.jc), e = Ag(c, 1, e.Ma), eg(d, 5, al, e)
                }
                e = new bl;
                e = eg(e, 9, cl, d);
                a.j.Hd(vn(a, e))
            }
        },
        vn = function(a, b) {
            var c = Date.now();
            c = Number.isFinite(c) ? Math.round(c) : 0;
            b = yg(b, 1, c);
            c = Cj();
            b = yg(b, 2, c);
            return yg(b, 6, a.B)
        };
    var zn = function() {
        var a = {};
        this.Qa = (a[3] = {}, a[4] = {}, a[5] = {}, a)
    };
    var An = /^true$/.test("false");

    function Bn(a, b) {
        switch (b) {
            case 1:
                return sg(a, 1, tn);
            case 2:
                return sg(a, 2, tn);
            case 3:
                return sg(a, 3, tn);
            case 6:
                return sg(a, 6, tn);
            case 8:
                return sg(a, 8, tn);
            default:
                return null
        }
    }

    function Cn(a, b) {
        if (!a) return null;
        switch (b) {
            case 1:
                return kg(a, 1);
            case 7:
                return pg(a, 3);
            case 2:
                return og(a, 2);
            case 3:
                return pg(a, 3);
            case 6:
                return on(a);
            case 8:
                return on(a);
            default:
                return null
        }
    }
    var Dn = oi(function() {
        if (!An) return {};
        try {
            var a = a === void 0 ? window : a;
            try {
                var b = a.sessionStorage.getItem("GGDFSSK")
            } catch (c) {
                b = null
            }
            if (b) return JSON.parse(b)
        } catch (c) {}
        return {}
    });

    function En(a, b, c, d) {
        var e = d = d === void 0 ? 0 : d,
            f, g;
        K(Fn).l[e] = (g = (f = K(Fn).l[e]) == null ? void 0 : f.add(b)) != null ? g : (new Set).add(b);
        e = Dn();
        if (e[b] != null) return e[b];
        b = Gn(d)[b];
        if (!b) return c;
        b = sn(JSON.stringify(b));
        b = Hn(b);
        a = Cn(b, a);
        return a != null ? a : c
    }

    function Hn(a) {
        var b = K(zn).Qa;
        if (b && Yf(a, tn) !== 8) {
            var c = mc(bg(a, pn, 5, Lf()), function(f) {
                f = mn(E(f, Xk, 1), b);
                return f.success && f.value
            });
            if (c) {
                var d;
                return (d = c.getValue()) != null ? d : null
            }
        }
        var e;
        return (e = E(a, nn, 4)) != null ? e : null
    }
    var Fn = function() {
        this.j = {};
        this.o = [];
        this.l = {};
        this.g = new Map
    };

    function In(a, b, c) {
        return !!En(1, a, b === void 0 ? !1 : b, c)
    }

    function Jn(a, b, c) {
        b = b === void 0 ? 0 : b;
        a = Number(En(2, a, b, c));
        return isNaN(a) ? b : a
    }

    function Kn(a, b, c) {
        b = b === void 0 ? "" : b;
        a = En(3, a, b, c);
        return typeof a === "string" ? a : b
    }

    function Ln(a, b, c) {
        b = b === void 0 ? [] : b;
        a = En(6, a, b, c);
        return Array.isArray(a) ? a : b
    }

    function Mn(a, b, c) {
        b = b === void 0 ? [] : b;
        a = En(8, a, b, c);
        return Array.isArray(a) ? a : b
    }

    function Gn(a) {
        return K(Fn).j[a] || (K(Fn).j[a] = {})
    }

    function Nn(a, b) {
        var c = Gn(b);
        wj(a, function(d, e) {
            if (c[e]) {
                d = sn(JSON.stringify(d));
                var f = Zf(d, tn, 8);
                if (ue(Gf(d, f)) != null) {
                    var g = sn(JSON.stringify(c[e]));
                    f = rn(d);
                    g = on($f(g, nn, 4));
                    gg(f, 4, Oe, g, Qe)
                }
                c[e] = nf(d)
            } else c[e] = d
        })
    }

    function On(a, b, c, d, e) {
        e = e === void 0 ? !1 : e;
        var f = [],
            g = [];
        b = v(b);
        for (var h = b.next(); !h.done; h = b.next()) {
            h = h.value;
            for (var k = Gn(h), l = v(a), n = l.next(); !n.done; n = l.next()) {
                n = n.value;
                var p = Yf(n, tn),
                    q = Bn(n, p);
                if (q) {
                    var u = void 0,
                        w = void 0,
                        t = void 0;
                    var x = (u = (t = K(Fn).g.get(h)) == null ? void 0 : (w = t.get(q)) == null ? void 0 : w.slice(0)) != null ? u : [];
                    a: {
                        u = q;w = p;t = new Sk;
                        switch (w) {
                            case 1:
                                Bg(t, 1, Tk, u);
                                break;
                            case 2:
                                Bg(t, 2, Tk, u);
                                break;
                            case 3:
                                Bg(t, 3, Tk, u);
                                break;
                            case 6:
                                Bg(t, 4, Tk, u);
                                break;
                            case 8:
                                Bg(t, 6, Tk, u);
                                break;
                            default:
                                x = void 0;
                                break a
                        }
                        Tf(t, 5, x, ve);x = t
                    }
                    if (u = x) w = void 0, u = !((w = K(Fn).l[h]) == null || !w.has(q));
                    u && f.push(x);
                    if (p === 8 && k[q]) x = sn(JSON.stringify(k[q])), p = rn(n), x = on($f(x, nn, 4)), gg(p, 4, Oe, x, Qe);
                    else {
                        if (p = x) u = void 0, p = !((u = K(Fn).g.get(h)) == null || !u.has(q));
                        p && g.push(x)
                    }
                    e || (p = q, x = h, u = d, w = K(Fn), w.g.has(x) || w.g.set(x, new Map), w.g.get(x).has(p) || w.g.get(x).set(p, []), u && w.g.get(x).get(p).push(u));
                    k[q] = nf(n)
                }
            }
        }
        if (f.length || g.length) a = d != null ? d : void 0, c.l && c.o && (d = new Uk, f = fg(d, 2, f), g = fg(f, 3, g), a && xg(g, 1, a), f = new bl, g = eg(f,
            7, cl, g), c.j.Hd(vn(c, g)))
    }

    function Pn(a, b) {
        b = Gn(b);
        a = v(a);
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            var d = sn(JSON.stringify(c)),
                e = Yf(d, tn);
            (d = Bn(d, e)) && (b[d] || (b[d] = c))
        }
    }

    function Qn() {
        return Object.keys(K(Fn).j).map(function(a) {
            return Number(a)
        })
    }

    function Rn(a) {
        K(Fn).o.includes(a) || Nn(Gn(4), a)
    };

    function Sn(a, b, c) {
        c.hasOwnProperty(a) || Object.defineProperty(c, String(a), {
            value: b
        })
    }

    function Tn(a, b, c) {
        return b[a] || c
    }

    function Un(a) {
        Sn(5, In, a);
        Sn(6, Jn, a);
        Sn(7, Kn, a);
        Sn(8, Ln, a);
        Sn(17, Mn, a);
        Sn(13, Pn, a);
        Sn(15, Rn, a)
    }

    function Vn(a) {
        Sn(4, function(b) {
            K(zn).Qa = b
        }, a);
        Sn(9, function(b, c) {
            var d = K(zn);
            d.Qa[3][b] == null && (d.Qa[3][b] = c)
        }, a);
        Sn(10, function(b, c) {
            var d = K(zn);
            d.Qa[4][b] == null && (d.Qa[4][b] = c)
        }, a);
        Sn(11, function(b, c) {
            var d = K(zn);
            d.Qa[5][b] == null && (d.Qa[5][b] = c)
        }, a);
        Sn(14, function(b) {
            for (var c = K(zn), d = v([3, 4, 5]), e = d.next(); !e.done; e = d.next()) e = e.value, Object.assign(c.Qa[e], b[e])
        }, a)
    }

    function Wn(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    };
    var Xn = function() {};
    Xn.prototype.j = function() {};
    Xn.prototype.l = function() {};
    Xn.prototype.g = function() {
        return []
    };
    var Yn = function(a, b, c) {
        a.l = function(d, e) {
            Tn(2, b, function() {
                return []
            })(d, c, e)
        };
        a.g = function() {
            return Tn(3, b, function() {
                return []
            })(c)
        };
        a.j = function(d) {
            Tn(16, b, function() {})(d, c)
        }
    };
    var Zn = function(a, b, c) {
            this.id = a;
            this.J = b;
            this.j = c;
            this.g = !1
        },
        $n = function(a) {
            return a.g || a.j
        },
        ao = function() {
            this.g = []
        },
        bo = function() {
            this.g = new Map;
            this.j = !1;
            this.o = new ao;
            this.B = new Zn(0, 0, !1);
            this.l = [this.o]
        },
        N = function(a) {
            var b = co;
            if (b.j || b.g.has(a.id) || a.J == null && a.control == null || a.sk == 0) return b.B;
            var c = b.o;
            if (a.control != null)
                for (var d = v(b.l), e = d.next(); !e.done; e = d.next()) {
                    if (e = e.value, e.g.includes(a.control)) {
                        c = e;
                        break
                    }
                } else a.ka != null && (c = a.ka);
            d = 0;
            a.control != null ? d = a.control.J : a.J != null &&
                (d = a.J);
            a = new Zn(a.id, d, !!a.vk);
            c.g.push(a);
            b.l.includes(c) || b.l.push(c);
            b.g.set(a.id, a);
            return a
        },
        eo = function() {
            var a = co;
            a = [].concat(ta(a.g.keys())).filter(function(c) {
                return $n(this.g.get(c))
            }, a);
            var b = K(Xn).g();
            return [].concat(ta(a), ta(b))
        },
        fo = function(a) {
            var b = co;
            b.j || (a.g(b.l, b.g), b.j = !0)
        };
    bo.prototype.reset = function() {
        for (var a = v(this.g), b = a.next(); !b.done; b = a.next()) b = v(b.value), b.next(), b.next().value.g = !1;
        this.j = !1
    };
    var co = new bo,
        ho = function() {
            return go.g.filter(function(a) {
                return $n(a)
            }).map(function(a) {
                return a.id
            })
        };
    var io = function() {};
    io.prototype.g = function(a) {
        a = v(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            var c = 0,
                d = Math.floor(Math.random() * 1E3);
            b = v(b.value.g);
            for (var e = b.next(); !e.done; e = b.next())
                if (e = e.value, c += e.J, d < c) {
                    e.g = !0;
                    break
                }
        }
    };
    var jo = function(a) {
        this.j = a
    };
    jo.prototype.g = function(a, b) {
        a = v(this.j);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = b.get(c.value)) c.g = !0
    };
    var ko = function(a, b) {
        this.j = a;
        this.l = b
    };
    r(ko, jo);
    ko.prototype.g = function(a, b) {
        jo.prototype.g.call(this, a, b);
        var c = [];
        a = [];
        for (var d = v(this.j), e = d.next(); !e.done; e = d.next()) e = e.value, b.get(e) ? c.push(e) : a.push(e);
        b = c.map(String).join(",") || "0";
        a = a.map(String).join(",") || "0";
        M(L.getInstance(), "sei", b);
        M(L.getInstance(), "nsei", a);
        M(L.getInstance(), "bi", this.l)
    };
    var lo = function() {
        en.apply(this, arguments)
    };
    r(lo, en);
    var fn = function(a, b) {
        var c = L.getInstance();
        M(c, "eee", a);
        M(c, "bi", b)
    };
    lo.getInstance = function() {
        return K(lo)
    };

    function mo() {
        return no.split(",").map(function(a) {
            return parseInt(a, 10)
        }).filter(function(a) {
            return !isNaN(a)
        })
    };
    var go = new ao,
        oo = new ao,
        po = new ao,
        qo = new ao,
        ro = new ao,
        so = new ao,
        to = new ao;
    N({
        id: 95342637,
        J: 0
    });
    N({
        id: 318475490,
        J: 0
    });
    N({
        id: 324123032,
        J: 0
    });
    N({
        id: 420706097,
        J: 10
    });
    N({
        id: 420706098,
        J: 10
    });
    N({
        id: 95342168,
        J: 10
    });
    N({
        id: 95342169,
        J: 10
    });
    N({
        id: 21062100,
        J: 0
    });
    N({
        id: 420706142,
        J: 0
    });
    N({
        id: 44745813,
        J: 0
    });
    N({
        id: 95355265,
        J: 0
    });
    N({
        id: 44746068,
        J: 0
    });
    N({
        id: 21064565,
        J: 0
    });
    N({
        id: 21064567,
        J: 0
    });
    N({
        id: 418572006,
        J: 10
    });
    N({
        id: 95338773,
        J: 10,
        ka: qo
    });
    N({
        id: 95338774,
        J: 10,
        ka: qo
    });
    N({
        id: 95334214,
        J: 10
    });
    N({
        id: 95334215,
        J: 10
    });
    N({
        id: 44749839,
        J: 0
    });
    N({
        id: 44714743,
        J: 0
    });
    N({
        id: 44715336,
        J: 10
    });
    N({
        id: 44724516,
        J: 0
    });
    N({
        id: 44726389,
        J: 10
    });
    N({
        id: 44752711,
        J: 50
    });
    N({
        id: 44752052,
        J: 50
    });
    N({
        id: 44752657,
        J: 50
    });
    N({
        id: 44733246,
        J: 10
    });
    N({
        id: 95343833,
        J: 10,
        ka: oo
    });
    N({
        id: 95343834,
        J: 10,
        ka: oo
    });
    N({
        id: 95343835,
        J: 10,
        ka: oo
    });
    N({
        id: 95343836,
        J: 10,
        ka: oo
    });
    N({
        id: 95343837,
        J: 10,
        ka: oo
    });
    N({
        id: 95343832,
        J: 10,
        ka: oo
    });
    N({
        id: 44751889,
        J: 10
    });
    N({
        id: 44751890,
        J: 10
    });
    N({
        id: 44752995,
        J: 10
    });
    N({
        id: 44752996,
        J: 10
    });
    N({
        id: 44762627,
        J: 0
    });
    N({
        id: 44762628,
        J: 0
    });
    N({
        id: 44801479,
        J: 10,
        ka: po
    });
    N({
        id: 44801480,
        J: 10,
        ka: po
    });
    N({
        id: 44752538,
        J: 0
    });
    N({
        id: 44754608,
        J: 10
    });
    N({
        id: 44754609,
        J: 10
    });
    N({
        id: 44776384,
        J: 0
    });
    N({
        id: 44789282,
        J: 0
    });
    N({
        id: 95344889,
        J: 0
    });
    N({
        id: 95355192,
        J: 0
    });
    N({
        id: 95334260,
        J: 0
    });
    N({
        id: 95345698,
        J: 0
    });
    N({
        id: 95356737,
        J: 0
    });
    var uo = N({
            id: 75259416,
            J: 0
        }),
        vo = N({
            id: 75259420,
            J: 0
        }),
        wo = N({
            id: 75259421,
            J: 0
        });
    N({
        id: 45401791,
        J: 0
    });
    N({
        id: 95326337,
        J: 0,
        ka: ro
    });
    N({
        id: 44809192,
        J: 10,
        ka: to
    });
    N({
        id: 44809193,
        J: 10,
        ka: to
    });
    N({
        id: 95320804,
        J: 10,
        ka: to
    });
    N({
        id: 95320805,
        J: 10,
        ka: to
    });
    N({
        id: 95322027,
        J: 1E3,
        ka: so
    });
    var xo = N({
        id: 46130031,
        J: 0
    });
    N({
        id: 95328713,
        J: 10
    });
    N({
        id: 95328714,
        J: 10
    });
    var yo = N({
        id: 95327848,
        J: 0
    });
    N({
        id: 31065644,
        J: 1
    });
    var zo = N({
            id: 31065645,
            J: 1
        }),
        Ao = new ao;
    N({
        id: 95331588,
        J: 0,
        ka: Ao
    });
    N({
        id: 95331589,
        J: 1E3,
        ka: Ao
    });
    var Bo = N({
        id: 95332182,
        J: 0
    });
    N({
        id: 95347814,
        J: 10
    });
    N({
        id: 95347815,
        J: 10
    });
    N({
        id: 95362047,
        J: 0
    });
    N({
        id: 95363795,
        J: 0
    });
    if (typeof window !== "undefined" && typeof window.initializeVirtualDom === "undefined") {
        var hn = lo.getInstance();
        hn.j || (jn(), hn.j = !0);
        var no = hn.l,
            Co;
        hn.j || (jn(), hn.j = !0);
        Co = hn.g;
        if (no != null) {
            var Do = new ko(mo(), Co);
            fo(Do)
        }
    };
    var Eo = function(a) {
        this.D = C(a)
    };
    r(Eo, I);
    var Fo = function(a) {
        this.D = C(a)
    };
    r(Fo, I);
    Fo.prototype.getId = function() {
        return lg(this, 1)
    };
    var Go = function(a) {
        this.D = C(a)
    };
    r(Go, I);
    var Ho = function(a) {
        return bg(a, Fo, 2, Lf())
    };
    var Io = function(a) {
        this.D = C(a)
    };
    r(Io, I);
    var Jo = function(a) {
        this.D = C(a)
    };
    r(Jo, I);
    var Ko = function(a) {
        this.D = C(a)
    };
    r(Ko, I);
    var Lo = function(a) {
        this.D = C(a)
    };
    r(Lo, I);
    var Mo = function(a) {
        this.D = C(a)
    };
    r(Mo, I);
    var No = Th(Mo);
    var Oo = null;

    function Po() {
        var a;
        return (a = Oo) != null ? a : Oo = No("[[[[45676505,null,null,[1]],[45713128,null,null,[]],[45669828,null,null,[1]],[45669829,null,null,[1]],[45681221,null,null,[]],[45706221,null,null,[1]],[745691018,null,null,[1]],[45706017,null,null,[]],[45677285,null,null,[1]],[45668885,null,null,[]],[45685340,null,null,[]],[45663239,null,null,[]],[45642592,null,null,[1]],[45715032,null,null,[1]],[45661356,null,null,[]],[45676441,null,null,[]],[45675307,null,null,[]],[45675308,null,null,[]],[null,45645574,null,[]],[45702384,null,null,[]],[45692337,null,null,[]],[45688859,null,null,[]],[45656766,null,null,[]],[45710689,null,null,[]],[45710688,null,null,[]],[45685601,null,null,[]],[null,45685602,null,[null,500]],[775241416,null,null,[]],[781107959,null,null,[]],[781107958,null,null,[]],[781107957,null,null,[]],[45697157,null,null,[]],[45658982,null,null,[]]],[[16,[[1,[[31089630],[31089631,[[45668885,null,null,[1]]]]]],[50,[[31092099],[31092100,[[null,749060184,null,[null,100]]]]]],[1000,[[95332046]]],[null,[[95332047]]],[10,[[95333808],[95333809,[[635466687,null,null,[1]]]]]],[10,[[95338769,[[null,45645574,null,[null,1]]]],[95338770,[[null,45645574,null,[null,2]]]]]],[10,[[95345206],[95345207,[[45661356,null,null,[1]]]]]],[10,[[95346932],[95346933,[[45663239,null,null,[1]]]]]],[100,[[95351091],[95351092,[[45675307,null,null,[1]]]]]],[10,[[95351093],[95351094,[[45675308,null,null,[1]]]]]],[null,[[95351425],[95351426,[[45676441,null,null,[1]]]]]],[null,[[95355703],[95355704,[[45681221,null,null,[1]]]]]],[10,[[95356068],[95356069,[[45685601,null,null,[]],[null,45685602,null,[]]]],[95356070,[[45685601,null,null,[1]],[null,45685602,null,[]]]],[95356071,[[45685601,null,null,[1]],[null,45685602,null,[null,100]]]]]],[50,[[95358738],[95358739,[[45692337,null,null,[1]]]]]],[10,[[95360407],[95360408,[[45697157,null,null,[1]]]]]],[100,[[95362313],[95362314,[[45702384,null,null,[1]]]]]],[10,[[95364127],[95364128,[[45706017,null,null,[1]]]]]],[100,[[95365753,[[45710689,null,null,[1]]]],[95365754,[[45710688,null,null,[1]]]]]],[null,[[95366606],[95366607,[[45713128,null,null,[1]]]]]]]]],null,null,[null,1000,1,1000]],null,[\"gamedistribution.com\",[null,[[[\"1015413\"],[\"19136023\"],[\"22110840991\"],[\"59392726\"],[\"7103\"],[\"8095840\"],[\"134206022\"],[\"22029514685\"],[\"22980118435\"],[\"2392211\"],[\"40643032\"],[\"418149392\"],[\"421469808\"],[\"58293502\"],[\"23079078184\"],[\"23103107911\"]]],[[[\"1015413\",1],[\"134206022\",1],[\"19136023\",1],[\"22029514685\",1],[\"22110840991\",1],[\"22980118435\",1],[\"23079078184\",1],[\"23103107911\",1],[\"2392211\",1],[\"40643032\",1],[\"418149392\",1],[\"421469808\",1],[\"58293502\",1],[\"59392726\",1],[\"7103\",0],[\"8095840\",1]]],[[[\"1015413\",1],[\"134206022\",1],[\"19136023\",1],[\"22029514685\",1],[\"22110840991\",1],[\"22980118435\",1],[\"23079078184\",1],[\"23103107911\",1],[\"2392211\",1],[\"40643032\",1],[\"418149392\",1],[\"421469808\",1],[\"58293502\",1],[\"59392726\",1],[\"7103\",1],[\"8095840\",1]]],[]]],[0,0,0]]")
    };
    var Qo = ["A9AxgGSwmnfgzzkyJHILUr3H8nJ/3D+57oAsL4DBt4USlng4jZ0weq+fZtHC/Qwwn6gd4QSa5DzT3OBif+kXVA0AAAB4eyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9", "AlK2UR5SkAlj8jjdEc9p3F3xuFYlF6LYjAML3EOqw1g26eCwWPjdmecULvBH5MVPoqKYrOfPhYVL71xAXI1IBQoAAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ=="];

    function Ro(a, b) {
        b = b === void 0 ? document : b;
        var c;
        return !((c = b.featurePolicy) == null || !c.features().includes(a))
    }

    function So(a, b) {
        b = b === void 0 ? document : b;
        var c;
        return !((c = b.featurePolicy) == null || !c.allowedFeatures().includes(a))
    }

    function To() {
        var a = window.navigator,
            b = window.document;
        return !!(window.isSecureContext && "runAdAuction" in a && a.runAdAuction instanceof Function && So("run-ad-auction", b))
    };

    function Uo(a, b) {
        try {
            var c = a.split(".");
            a = y;
            for (var d = 0, e; a != null && d < c.length; d++) e = a, a = a[c[d]], typeof a === "function" && (a = e[c[d]]());
            var f = a;
            if (typeof f === b) return f
        } catch (g) {}
    }
    var Vo = {},
        Wo = {},
        Xo = {},
        Yo = {},
        Zo = (Yo[3] = (Vo[8] = function(a) {
            try {
                return Wa(a) != null
            } catch (b) {}
        }, Vo[9] = function(a) {
            try {
                var b = Wa(a)
            } catch (c) {
                return
            }
            return typeof b === "function" && Fj(b)
        }, Vo[10] = function() {
            return window === window.top
        }, Vo[6] = function(a) {
            return oc(K(Xn).g(), Number(a))
        }, Vo[27] = function(a) {
            a = Uo(a, "boolean");
            return a !== void 0 ? a : void 0
        }, Vo[60] = function(a) {
            try {
                return !!y.document.querySelector(a)
            } catch (b) {}
        }, Vo[80] = function(a) {
            try {
                return !!y.matchMedia(a).matches
            } catch (b) {}
        }, Vo[69] = function(a) {
            return Ro(a,
                y.document)
        }, Vo[70] = function(a) {
            return So(a, y.document)
        }, Vo[79] = function(a) {
            var b = y.navigator;
            b = b === void 0 ? navigator : b;
            try {
                var c, d;
                var e = !!((c = b.protectedAudience) == null ? 0 : (d = c.queryFeatureSupport) == null ? 0 : d.call(c, a))
            } catch (f) {
                e = !1
            }
            return e
        }, Vo), Yo[4] = (Wo[3] = function() {
            return Bj()
        }, Wo[6] = function(a) {
            a = Uo(a, "number");
            return a !== void 0 ? a : void 0
        }, Wo), Yo[5] = (Xo[2] = function() {
            return window.location.href
        }, Xo[3] = function() {
            try {
                return window.top.location.hash
            } catch (a) {
                return ""
            }
        }, Xo[4] = function(a) {
            a = Uo(a,
                "string");
            return a !== void 0 ? a : void 0
        }, Xo[12] = function(a) {
            try {
                var b = Uo(a, "string");
                if (b !== void 0) return atob(b)
            } catch (c) {}
        }, Xo), Yo);

    function $o() {
        var a = a === void 0 ? y : a;
        return a.ggeac || (a.ggeac = {})
    };

    function ap(a) {
        var b = {};
        return bp((b[0] = new Map, b[1] = new Map, b[2] = new Map, b), a)
    }

    function bp(a, b) {
        for (var c = new Map, d = v(a[1].entries()), e = d.next(); !e.done; e = d.next()) {
            var f = v(e.value);
            e = f.next().value;
            f = f.next().value;
            f = f[f.length - 1];
            c.set(e, f.Sf + f.zf * f.Af)
        }
        b = v(b);
        for (d = b.next(); !d.done; d = b.next())
            for (d = d.value, e = bg(d, Go, 2, Lf()), e = v(e), f = e.next(); !f.done; f = e.next())
                if (f = f.value, Ho(f).length !== 0) {
                    var g = mg(f, 8);
                    if (F(f, 4) && !F(f, 13) && !F(f, 14)) {
                        var h = void 0;
                        g = (h = c.get(F(f, 4))) != null ? h : 0;
                        h = mg(f, 1) * Ho(f).length;
                        c.set(F(f, 4), g + h)
                    }
                    h = [];
                    for (var k = 0; k < Ho(f).length; k++) {
                        var l = {
                            Sf: g,
                            zf: mg(f,
                                1),
                            Af: Ho(f).length,
                            Gh: k,
                            Xc: F(d, 1),
                            Ld: f,
                            Va: Ho(f)[k]
                        };
                        h.push(l)
                    }
                    cp(a[2], F(f, 10), h) || cp(a[1], F(f, 4), h) || cp(a[0], Ho(f)[0].getId(), h)
                }
        return a
    }

    function cp(a, b, c) {
        if (!b) return !1;
        a.has(b) || a.set(b, []);
        var d;
        (d = a.get(b)).push.apply(d, ta(c));
        return !0
    };
    var dp = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        ep = function(a) {
            var b = a.match(dp);
            a = b[1];
            var c = b[3];
            b = b[4];
            var d = "";
            a && (d += a + ":");
            c && (d = d + "//" + c, b && (d += ":" + b));
            return d
        },
        fp = function(a, b) {
            if (a) {
                a = a.split("&");
                for (var c = 0; c < a.length; c++) {
                    var d = a[c].indexOf("="),
                        e = null;
                    if (d >= 0) {
                        var f = a[c].substring(0, d);
                        e = a[c].substring(d + 1)
                    } else f = a[c];
                    b(f, e ? jj(e) : "")
                }
            }
        },
        gp = /#|$/,
        hp = function(a, b) {
            var c = a.search(gp);
            a: {
                var d =
                    0;
                for (var e = b.length;
                    (d = a.indexOf(b, d)) >= 0 && d < c;) {
                    var f = a.charCodeAt(d - 1);
                    if (f == 38 || f == 63)
                        if (f = a.charCodeAt(d + e), !f || f == 61 || f == 38 || f == 35) break a;
                    d += e + 1
                }
                d = -1
            }
            if (d < 0) return null;
            e = a.indexOf("&", d);
            if (e < 0 || e > c) e = c;
            d += b.length + 1;
            return jj(a.slice(d, e !== -1 ? e : 0))
        };

    function ip(a) {
        var b = a.length;
        if (b === 0) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return c > 0 ? c : 4294967296 + c
    };
    var jp = [12, 13, 20],
        kp = function(a, b, c, d) {
            d = d === void 0 ? {} : d;
            var e = d.ce === void 0 ? !1 : d.ce;
            d = d.bi === void 0 ? [] : d.bi;
            this.Dc = a;
            this.Eb = c;
            this.o = {};
            this.ce = e;
            a = {};
            this.g = (a[b] = [], a[4] = [], a);
            this.j = {};
            this.l = {};
            if (b = zm())
                for (b = v(b.split(",") || []), a = b.next(); !a.done; a = b.next())(a = Number(a.value)) && (this.j[a] = !0);
            d = v(d);
            for (b = d.next(); !b.done; b = d.next()) this.j[b.value] = !0
        },
        np = function(a, b, c, d) {
            var e = [],
                f;
            if (f = b !== 9) a.o[b] ? f = !0 : (a.o[b] = !0, f = !1);
            if (f) return wn(a.Eb, b, c, e, [], 4), e;
            f = jp.includes(b);
            for (var g = [], h = [], k = v([0, 1, 2]), l = k.next(); !l.done; l = k.next()) {
                l = l.value;
                for (var n = v(a.Dc[l].entries()), p = n.next(); !p.done; p = n.next()) {
                    var q = v(p.value);
                    p = q.next().value;
                    q = q.next().value;
                    var u = p,
                        w = q;
                    p = new Kk;
                    q = w.filter(function(D) {
                        return D.Xc === b && a.j[D.Va.getId()] && lp(a, D)
                    });
                    if (q.length)
                        for (p = v(q), q = p.next(); !q.done; q = p.next()) h.push(q.value.Va);
                    else if (!a.ce) {
                        q = void 0;
                        l === 2 ? (q = d[1], Bg(p, 2, Lk, u)) : q = d[0];
                        var t = void 0,
                            x = void 0;
                        q = (x = (t = q) == null ? void 0 : t(String(u))) != null ? x : l === 2 && F(w[0].Ld, 11) === 1 ? void 0 : d[0](String(u));
                        if (q !== void 0) {
                            u = v(w);
                            for (w = u.next(); !w.done; w = u.next())
                                if (w = w.value, w.Xc === b) {
                                    t = q - w.Sf;
                                    var G = w;
                                    x = G.zf;
                                    var X = G.Af;
                                    G = G.Gh;
                                    t < 0 || t >= x * X || t % X !== G || !lp(a, w) || (t = F(w.Ld, 13), t !== 0 && t !== void 0 && (x = a.l[String(t)], x !== void 0 && x !== w.Va.getId() ? xn(a.Eb, a.l[String(t)], w.Va.getId(), t) : a.l[String(t)] = w.Va.getId()), h.push(w.Va))
                                }
                            Yf(p, Lk) !== 0 && (xg(p, 3, q), g.push(p))
                        }
                    }
                }
            }
            d = v(h);
            for (h = d.next(); !h.done; h = d.next()) h = h.value, k = h.getId(), e.push(k), mp(a, k, f ? 4 : c), On(bg(h, qn, 2, Lf()), f ? Qn() : [c], a.Eb, k);
            wn(a.Eb, b, c, e, g, 1);
            return e
        },
        mp = function(a, b, c) {
            a.g[c] || (a.g[c] = []);
            a = a.g[c];
            a.includes(b) || a.push(b)
        },
        lp = function(a, b) {
            var c = K(zn).Qa,
                d = mn(E(b.Ld, Xk, 3), c);
            if (!d.success) return yn(a.Eb, E(b.Ld, Xk, 3), b.Xc, b.Va.getId(), d), !1;
            if (!d.value) return !1;
            c = mn(E(b.Va, Xk, 3), c);
            return c.success ? c.value ? !0 : !1 : (yn(a.Eb, E(b.Va, Xk, 3), b.Xc, b.Va.getId(), c), !1)
        },
        op = function(a, b) {
            b = b.map(function(c) {
                return new Io(c)
            }).filter(function(c) {
                return !jp.includes(F(c, 1))
            });
            a.Dc = bp(a.Dc, b)
        },
        pp = function(a, b) {
            Sn(1, function(c) {
                a.j[c] = !0
            }, b);
            Sn(2, function(c, d,
                e) {
                return np(a, c, d, e)
            }, b);
            Sn(3, function(c) {
                return (a.g[c] || []).concat(a.g[4])
            }, b);
            Sn(12, function(c) {
                return void op(a, c)
            }, b);
            Sn(16, function(c, d) {
                return void mp(a, c, d)
            }, b)
        };
    var qp = function() {
        var a = {};
        this.g = function(b, c) {
            return a[b] != null ? a[b] : c
        };
        this.j = function(b, c) {
            return a[b] != null ? a[b] : c
        };
        this.B = function(b, c) {
            return a[b] != null ? a[b] : c
        };
        this.A = function(b, c) {
            return a[b] != null ? a[b] : c
        };
        this.o = function(b, c) {
            return a[b] != null ? c.concat(a[b]) : c
        };
        this.l = function() {}
    };

    function rp(a) {
        return K(qp).g(a.g, a.defaultValue)
    }

    function sp(a) {
        return K(qp).j(a.g, a.defaultValue)
    };
    var tp = function() {
            this.g = function() {}
        },
        up = function(a, b) {
            a.g = Tn(14, b, function() {})
        };

    function vp(a) {
        K(tp).g(a)
    };
    var wp, xp, yp, zp, Ap, Bp;

    function Cp(a, b) {
        var c = b = b === void 0 ? $o() : b;
        Yn(K(Xn), c, a);
        Dp(b, a);
        a = b;
        up(K(tp), a);
        K(qp).l()
    }

    function Dp(a, b) {
        var c = K(qp);
        c.g = function(d, e) {
            return Tn(5, a, function() {
                return !1
            })(d, e, b)
        };
        c.j = function(d, e) {
            return Tn(6, a, function() {
                return 0
            })(d, e, b)
        };
        c.B = function(d, e) {
            return Tn(7, a, function() {
                return ""
            })(d, e, b)
        };
        c.A = function(d, e) {
            return Tn(8, a, function() {
                return []
            })(d, e, b)
        };
        c.o = function(d, e) {
            return Tn(17, a, function() {
                return []
            })(d, e, b)
        };
        c.l = function() {
            Tn(15, a, function() {})(b)
        }
    };
    co.reset();
    fo(new io);
    var Ep = Po(),
        Fp, Gp;
    (function(a) {
        var b = a.Yg;
        var c = a.Qa;
        var d = a.config;
        var e = a.Hg === void 0 ? $o() : a.Hg;
        var f = a.cf === void 0 ? 0 : a.cf;
        var g = a.Eb === void 0 ? new un((zp = rm((wp = E(b, Jo, 5)) == null ? void 0 : ng(wp, 2))) != null ? zp : 0, (Ap = rm((xp = E(b, Jo, 5)) == null ? void 0 : ng(xp, 4))) != null ? Ap : 0, (Bp = (yp = E(b, Jo, 5)) == null ? void 0 : kg(yp, 3)) != null ? Bp : !1) : a.Eb;
        a = a.Dc === void 0 ? ap(bg(b, Io, 2, Lf(Fd))) : a.Dc;
        e.hasOwnProperty("init-done") ? (Tn(12, e, function() {})(bg(b, Io, 2, Lf()).map(function(h) {
            return nf(h)
        })), Tn(13, e, function() {})(bg(b, qn, 1, Lf()).map(function(h) {
                return nf(h)
            }),
            f), c && Tn(14, e, function() {})(c), Cp(f, e)) : (pp(new kp(a, f, g, d), e), Un(e), Vn(e), Wn(e), Cp(f, e), On(bg(b, qn, 1, Lf(Fd)), [f], g, void 0, !0), An = An || !(!d || !d.yk), vp(Zo), c && vp(c))
    })({
        Yg: (Gp = (Fp = E(Ep, Ko, 1)) == null ? void 0 : ef(Fp)) != null ? Gp : new Ko,
        cf: 7
    });
    var Hp = Cj(),
        Ip = {},
        Jp = (Ip[0] = function(a) {
            a = a === void 0 ? vj() : a;
            return function(b) {
                return ip(b + " + " + a) % 1E3
            }
        }(Hp), Ip);
    K(Xn).l(16, Jp);
    for (var Kp = v(rg(Ep, 2)), Lp = Kp.next(); !Lp.done; Lp = Kp.next()) {
        var Mp = Lp.value;
        K(Xn).j(Mp)
    }
    var Np = lg(Ep, 5);
    Np && K(Xn).j(Np);
    var Op = function(a) {
        var b = {};
        cc(a, function(c) {
            var d = c.event,
                e = b[d];
            b.hasOwnProperty(d) ? e !== null && (c.equals(e) || (b[d] = null)) : b[d] = c
        });
        rc(a, function(c) {
            return b[c.event] === null
        })
    };
    var Pp = {
            NONE: 0,
            Si: 1
        },
        Qp = {
            Pi: 0,
            Pj: 1,
            Oj: 2,
            Qj: 3
        },
        Rp = {
            bg: "a",
            Ri: "d",
            VIDEO: "v"
        };
    var Sp = function() {
        this.Z = 0;
        this.g = !1;
        this.j = -1;
        this.Qb = !1;
        this.wa = 0
    };
    Sp.prototype.isVisible = function() {
        return this.Qb ? this.Z >= .3 : this.Z >= .5
    };
    var Tp = {
            Oi: 0,
            Vi: 1
        },
        Up = {
            668123728: 0,
            668123729: 1
        },
        Vp = {
            44731964: 0,
            44731965: 1
        },
        Wp = {
            NONE: 0,
            Aj: 1,
            aj: 2
        },
        Xp = {
            480596784: 0,
            480596785: 1,
            21063355: 2
        };
    var Yp = function() {
            this.g = null;
            this.o = !1;
            this.l = null
        },
        Zp = function(a) {
            a.o = !0;
            return a
        },
        $p = function(a, b) {
            a.l && cc(b, function(c) {
                c = a.l[c];
                c !== void 0 && a.j(c)
            })
        };
    Yp.prototype.getValue = function() {
        return this.g
    };
    var aq = function(a) {
        Yp.call(this);
        this.B = a
    };
    r(aq, Yp);
    aq.prototype.j = function(a) {
        this.g === null && Bi(this.B, a) && (this.g = a)
    };
    var bq = function() {
        Yp.call(this)
    };
    r(bq, Yp);
    bq.prototype.j = function(a) {
        this.g === null && typeof a === "number" && (this.g = a)
    };
    var cq = function() {
        Yp.call(this)
    };
    r(cq, Yp);
    cq.prototype.j = function(a) {
        this.g === null && typeof a === "string" && (this.g = a)
    };
    var dq = function() {
        this.g = {};
        this.l = !0;
        this.j = {}
    };
    dq.prototype.reset = function() {
        this.g = {};
        this.l = !0;
        this.j = {}
    };
    var eq = function(a, b, c) {
            a.g[b] || (a.g[b] = new aq(c));
            return a.g[b]
        },
        fq = function(a) {
            a.g.queryid || (a.g.queryid = new cq)
        },
        gq = function(a, b, c) {
            (a = a.g[b]) && a.j(c)
        },
        hq = function(a, b) {
            if (Ai(a.j, b)) return a.j[b];
            if (a = a.g[b]) return a.getValue()
        },
        iq = function(a) {
            var b = {},
                c = ui(a.g, function(d) {
                    return d.o
                });
            ti(c, function(d, e) {
                d = a.j[e] !== void 0 ? String(a.j[e]) : d.o && d.g !== null ? String(d.g) : "";
                d.length > 0 && (b[e] = d)
            }, a);
            return b
        },
        jq = function(a) {
            a = iq(a);
            var b = [];
            ti(a, function(c, d) {
                d in Object.prototype || typeof c != "undefined" &&
                    b.push([d, ":", c].join(""))
            });
            return b
        },
        lq = function() {
            var a = kq().R,
                b = ho();
            a.l && cc(xi(a.g), function(c) {
                return $p(c, b)
            })
        };
    var mq = function(a) {
        eq(a, "od", Pp);
        Zp(eq(a, "opac", Tp));
        Zp(eq(a, "sbeos", Tp));
        Zp(eq(a, "prf", Tp));
        Zp(eq(a, "mwt", Tp));
        eq(a, "iogeo", Tp)
    };
    var nq = document,
        P = window;
    var oq = !Dc && !(A("Safari") && !(Zb() || (Vb() ? 0 : A("Coast")) || Wb() || (Vb() ? 0 : A("Edge")) || (Vb() ? Ub("Microsoft Edge") : A("Edg/")) || (Vb() ? Ub("Opera") : A("OPR")) || Yb() || A("Silk") || A("Android")));
    var pq = function() {
        this.g = this.Db = null
    };
    var qq = function() {};
    qq.prototype.now = function() {
        return 0
    };
    qq.prototype.j = function() {
        return 0
    };
    qq.prototype.l = function() {
        return 0
    };
    qq.prototype.g = function() {
        return 0
    };
    var sq = function() {
        if (!rq()) throw Error();
    };
    r(sq, qq);
    var rq = function() {
        return !(!P || !P.performance)
    };
    sq.prototype.now = function() {
        return rq() && P.performance.now ? P.performance.now() : qq.prototype.now.call(this)
    };
    sq.prototype.j = function() {
        return rq() && P.performance.memory ? P.performance.memory.totalJSHeapSize || 0 : qq.prototype.j.call(this)
    };
    sq.prototype.l = function() {
        return rq() && P.performance.memory ? P.performance.memory.usedJSHeapSize || 0 : qq.prototype.l.call(this)
    };
    sq.prototype.g = function() {
        return rq() && P.performance.memory ? P.performance.memory.jsHeapSizeLimit || 0 : qq.prototype.g.call(this)
    };
    var tq = function() {};
    tq.prototype.isVisible = function() {
        return wm(nq) === 1
    };
    var uq = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)"),
        yq = function(a) {
            a = a || vq();
            for (var b = new wq(y.location.href, !1), c = null, d = a.length - 1, e = d; e >= 0; --e) {
                var f = a[e];
                !c && uq.test(f.url) && (c = f);
                if (f.url && !f.g) {
                    b = f;
                    break
                }
            }
            e = null;
            f = a.length && a[d].url;
            b.depth !== 0 && f && (e = a[d]);
            return new xq(b, e, c)
        },
        vq = function() {
            var a = y,
                b = [],
                c = null;
            do {
                var d = a;
                if (uj(d)) {
                    var e = d.location.href;
                    c = d.document && d.document.referrer || null
                } else e = c, c = null;
                b.push(new wq(e || ""));
                try {
                    a = d.parent
                } catch (f) {
                    a = null
                }
            } while (a &&
                d !== a);
            d = 0;
            for (a = b.length - 1; d <= a; ++d) b[d].depth = a - d;
            d = y;
            if (d.location && d.location.ancestorOrigins && d.location.ancestorOrigins.length === b.length - 1)
                for (a = 1; a < b.length; ++a) e = b[a], e.url || (e.url = d.location.ancestorOrigins[a - 1] || "", e.g = !0);
            return b
        },
        xq = function(a, b, c) {
            this.g = a;
            this.j = b;
            this.l = c
        },
        wq = function(a, b) {
            this.url = a;
            this.g = !!b;
            this.depth = null
        };
    var zq = function() {
            this.l = "&";
            this.j = {};
            this.o = 0;
            this.g = []
        },
        Aq = function(a, b) {
            var c = {};
            c[a] = b;
            return [c]
        },
        Cq = function(a, b, c, d, e) {
            var f = [];
            wj(a, function(g, h) {
                (g = Bq(g, b, c, d, e)) && f.push(h + "=" + g)
            });
            return f.join(b)
        },
        Bq = function(a, b, c, d, e) {
            if (a == null) return "";
            b = b || "&";
            c = c || ",$";
            typeof c === "string" && (c = c.split(""));
            if (a instanceof Array) {
                if (d || (d = 0), d < c.length) {
                    for (var f = [], g = 0; g < a.length; g++) f.push(Bq(a[g], b, c, d + 1, e));
                    return f.join(c[d])
                }
            } else if (typeof a === "object") return e || (e = 0), e < 2 ? encodeURIComponent(Cq(a,
                b, c, d, e + 1)) : "...";
            return encodeURIComponent(String(a))
        },
        Dq = function(a, b, c) {
            a.g.push(b);
            a.j[b] = c
        },
        Eq = function(a, b, c, d) {
            a.g.push(b);
            a.j[b] = Aq(c, d)
        },
        Gq = function(a, b, c, d) {
            b = b + "//" + c + d;
            var e = Fq(a) - d.length;
            if (e < 0) return "";
            a.g.sort(function(n, p) {
                return n - p
            });
            d = null;
            c = "";
            for (var f = 0; f < a.g.length; f++)
                for (var g = a.g[f], h = a.j[g], k = 0; k < h.length; k++) {
                    if (!e) {
                        d = d == null ? g : d;
                        break
                    }
                    var l = Cq(h[k], a.l, ",$");
                    if (l) {
                        l = c + l;
                        if (e >= l.length) {
                            e -= l.length;
                            b += l;
                            c = a.l;
                            break
                        }
                        d = d == null ? g : d
                    }
                }
            a = "";
            d != null && (a = "" + c + "trn=" + d);
            return b +
                a
        },
        Fq = function(a) {
            var b = 1,
                c;
            for (c in a.j) c.length > b && (b = c.length);
            return 3997 - b - a.l.length - 1
        };
    var Hq = function(a, b) {
            this.g = a;
            this.depth = b
        },
        Jq = function() {
            var a = vq(),
                b = Math.max(a.length - 1, 0),
                c = yq(a);
            a = c.g;
            var d = c.j,
                e = c.l,
                f = [];
            c = function(h, k) {
                return h == null ? k : h
            };
            e && f.push(new Hq([e.url, e.g ? 2 : 0], c(e.depth, 1)));
            d && d != e && f.push(new Hq([d.url, 2], 0));
            a.url && a != e && f.push(new Hq([a.url, 0], c(a.depth, b)));
            var g = fc(f, function(h, k) {
                return f.slice(0, f.length - k)
            });
            !a.url || (e || d) && a != e || (d = xj(a.url)) && g.push([new Hq([d, 1], c(a.depth, b))]);
            g.push([]);
            return fc(g, function(h) {
                return Iq(b, h)
            })
        };

    function Iq(a, b) {
        var c = hc(b, function(e, f) {
                return Math.max(e, f.depth)
            }, -1),
            d = xc(c + 2);
        d[0] = a;
        cc(b, function(e) {
            return d[e.depth + 1] = e.g
        });
        return d
    }

    function dr() {
        var a = a === void 0 ? Jq() : a;
        return a.map(function(b) {
            return Bq(b)
        })
    };
    var er = function() {
            this.j = new tq;
            this.g = rq() ? new sq : new qq
        },
        gr = function() {
            fr();
            var a = P.document;
            return !!(a && a.body && a.body.getBoundingClientRect && typeof P.setInterval === "function" && typeof P.clearInterval === "function" && typeof P.setTimeout === "function" && typeof P.clearTimeout === "function")
        };
    er.prototype.setInterval = function(a, b) {
        return P.setInterval(a, b)
    };
    er.prototype.clearInterval = function(a) {
        P.clearInterval(a)
    };
    er.prototype.setTimeout = function(a, b) {
        return P.setTimeout(a, b)
    };
    er.prototype.clearTimeout = function(a) {
        P.clearTimeout(a)
    };
    var hr = function() {
        fr();
        return dr()
    };
    var ir = function() {},
        fr = function() {
            var a = K(ir);
            if (!a.g) {
                if (!P) throw Error("Context has not been set and window is undefined.");
                a.g = K(er)
            }
            return a.g
        };
    var jr = function(a) {
        this.D = C(a)
    };
    r(jr, I);
    jr.prototype.j = Sh([0, Bh, Fh, -2, Ih]);
    var kr = function(a) {
            this.l = a;
            this.g = -1;
            this.j = this.o = 0
        },
        lr = function(a, b) {
            return function() {
                var c = Ra.apply(0, arguments);
                if (a.g > -1) return b.apply(null, ta(c));
                try {
                    return a.g = a.l.g.now(), b.apply(null, ta(c))
                } finally {
                    a.o += a.l.g.now() - a.g, a.g = -1, a.j += 1
                }
            }
        };
    var mr = function(a, b) {
        this.j = a;
        this.l = b;
        this.g = new kr(a)
    };
    var nr = function() {
            this.g = {}
        },
        pr = function() {
            var a = kq().flags,
                b = or;
            a = a.g[b.key];
            if (b.valueType === "proto") {
                try {
                    var c = JSON.parse(a);
                    if (Array.isArray(c)) return c
                } catch (d) {}
                return b.defaultValue
            }
            return typeof a === typeof b.defaultValue ? a : b.defaultValue
        };
    var qr = {
        Lj: 1,
        fk: 2,
        Gj: 3,
        1: "POSITION",
        2: "VISIBILITY",
        3: "MONITOR_VISIBILITY"
    };
    var rr = function() {
        this.l = void 0;
        this.j = this.A = 0;
        this.B = -1;
        this.R = new dq;
        Zp(eq(this.R, "mv", Wp)).l = Xp === void 0 ? null : Xp;
        eq(this.R, "omid", Tp);
        Zp(eq(this.R, "epoh", Tp));
        Zp(eq(this.R, "epph", Tp));
        Zp(eq(this.R, "umt", Tp)).l = Up === void 0 ? null : Up;
        Zp(eq(this.R, "phel", Tp));
        Zp(eq(this.R, "phell", Tp));
        Zp(eq(this.R, "oseid", qr));
        var a = this.R;
        a.g.sloi || (a.g.sloi = new bq);
        Zp(a.g.sloi);
        eq(this.R, "mm", Rp);
        Zp(eq(this.R, "ovms", Qp));
        Zp(eq(this.R, "xdi", Tp));
        Zp(eq(this.R, "amp", Tp));
        Zp(eq(this.R, "prf", Tp));
        Zp(eq(this.R, "gtx", Tp));
        Zp(eq(this.R, "mvp_lv", Tp));
        Zp(eq(this.R, "ssmol", Tp)).l = Vp === void 0 ? null : Vp;
        Zp(eq(this.R, "fmd", Tp));
        eq(this.R, "gen204simple", Tp);
        this.g = new mr(fr(), this.R);
        this.o = !1;
        this.flags = new nr
    };
    rr.prototype.ze = function(a) {
        if (typeof a === "string" && a.length != 0) {
            var b = this.R;
            if (b.l) {
                a = a.split("&");
                for (var c = a.length - 1; c >= 0; c--) {
                    var d = a[c].split("="),
                        e = decodeURIComponent(d[0]);
                    d.length > 1 ? (d = decodeURIComponent(d[1]), d = /^[0-9]+$/g.exec(d) ? parseInt(d, 10) : d) : d = 1;
                    (e = b.g[e]) && e.j(d)
                }
            }
        }
    };
    var kq = function() {
        return K(rr)
    };
    var sr = function(a, b, c, d, e) {
        if ((d ? a.l : Math.random()) < (e || a.g)) try {
            if (c instanceof zq) var f = c;
            else f = new zq, wj(c, function(h, k) {
                var l = f,
                    n = l.o++;
                Dq(l, n, Aq(k, h))
            });
            var g = Gq(f, a.j, "pagead2.googlesyndication.com", "/pagead/gen_204?id=" + b + "&");
            g && (fr(), uk(P, g))
        } catch (h) {}
    };
    var vr = function() {
        var a = tr;
        this.A = ur;
        this.B = "jserror";
        this.l = !0;
        this.j = null;
        this.C = this.kb;
        this.g = a === void 0 ? null : a;
        this.o = !1
    };
    m = vr.prototype;
    m.Ke = function(a) {
        this.j = a
    };
    m.Nf = function(a) {
        this.B = a
    };
    m.Le = function(a) {
        this.l = a
    };
    m.Of = function(a) {
        this.o = a
    };
    m.Sb = function(a, b, c) {
        var d = this;
        return lr(kq().g.g, function() {
            try {
                if (d.g && d.g.l) {
                    var e = d.g.start(a.toString(), 3);
                    var f = b();
                    d.g.end(e)
                } else f = b()
            } catch (h) {
                var g = d.l;
                try {
                    Jm(e), g = d.C(a, new wr(xr(h)), void 0, c)
                } catch (k) {
                    d.kb(217, k)
                }
                if (!g) throw h;
            }
            return f
        })()
    };
    m.Ae = function(a, b, c, d) {
        var e = this;
        return lr(kq().g.g, function() {
            var f = Ra.apply(0, arguments);
            return e.Sb(a, function() {
                return b.apply(c, f)
            }, d)
        })
    };
    m.kb = function(a, b, c, d, e) {
        e = e || this.B;
        try {
            var f = new zq;
            Eq(f, 1, "context", a);
            hi(b) || (b = new wr(xr(b)));
            b.msg && Eq(f, 2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            if (this.j) try {
                this.j(g)
            } catch (k) {}
            if (d) try {
                d(g)
            } catch (k) {}
            Dq(f, 3, [g]);
            var h = yq();
            h.j && Eq(f, 4, "top", h.j.url || "");
            Dq(f, 5, [{
                url: h.g.url || ""
            }, {
                url: h.g.url ? ep(h.g.url) : ""
            }]);
            sr(this.A, e, f, this.o, c)
        } catch (k) {
            try {
                sr(this.A, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: xr(k),
                    url: h && h.g.url
                }, this.o, c)
            } catch (l) {}
        }
        return this.l
    };
    var xr = function(a) {
            var b = a.toString();
            a.name && b.indexOf(a.name) == -1 && (b += ": " + a.name);
            a.message && b.indexOf(a.message) == -1 && (b += ": " + a.message);
            if (a.stack) a: {
                a = a.stack;
                var c = b;
                try {
                    a.indexOf(c) == -1 && (a = c + "\n" + a);
                    for (var d; a != d;) d = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                    b = a.replace(/\n */g, "\n");
                    break a
                } catch (e) {
                    b = c;
                    break a
                }
                b = void 0
            }
            return b
        },
        wr = function(a) {
            gi.call(this, Error(a), {
                message: a
            })
        };
    r(wr, gi);
    var ur, yr, tr = new Im(1, window),
        zr = function() {
            P && typeof P.google_measure_js_timing != "undefined" && (P.google_measure_js_timing || tr.A())
        };
    ur = new function() {
        var a = "https:";
        P && P.location && P.location.protocol === "http:" && (a = "http:");
        this.j = a;
        this.g = .01;
        this.l = Math.random()
    };
    yr = new vr;
    P && P.document && (P.document.readyState == "complete" ? zr() : tr.l && sk(P, "load", function() {
        zr()
    }));
    var Ar = function(a) {
            yr.Ke(function(b) {
                cc(a, function(c) {
                    c(b)
                })
            })
        },
        Br = function(a, b) {
            return yr.Sb(a, b)
        },
        Cr = function(a, b, c, d) {
            return yr.Ae(a, b, c, d)
        },
        Dr = function(a, b, c, d) {
            yr.kb(a, b, c, d)
        };
    var Er = Date.now(),
        Fr = -1,
        Gr = -1,
        Hr, Ir = -1,
        Jr = !1,
        Kr = function() {
            return Date.now() - Er
        },
        Lr = function() {
            var a = kq().l,
                b = Gr >= 0 ? Kr() - Gr : -1,
                c = Jr ? Kr() - Fr : -1,
                d = Ir >= 0 ? Kr() - Ir : -1;
            if (a == 947190542) return 100;
            if (a == 79463069) return 200;
            a = [2E3, 4E3];
            var e = [250, 500, 1E3];
            Dr(637, Error(), .001);
            var f = b;
            c != -1 && c < b && (f = c);
            for (b = 0; b < a.length; ++b)
                if (f < a[b]) {
                    var g = e[b];
                    break
                }
            g === void 0 && (g = e[a.length]);
            return d != -1 && d > 1500 && d < 4E3 ? 500 : g
        };
    var Mr = function(a, b, c) {
        var d = new J(0, 0, 0, 0);
        this.time = a;
        this.volume = null;
        this.l = b;
        this.g = d;
        this.j = c
    };
    Mr.prototype.equals = function(a, b) {
        return !!a && (!(b === void 0 ? 0 : b) || this.volume == a.volume) && this.l == a.l && ak(this.g, a.g) && !0
    };
    var Nr = function(a, b, c, d, e, f, g, h) {
        this.l = a;
        this.I = b;
        this.j = c;
        this.B = d;
        this.g = e;
        this.o = f;
        this.C = g;
        this.A = h
    };
    Nr.prototype.getTimestamp = function() {
        return this.C
    };
    Nr.prototype.equals = function(a, b) {
        return this.l.equals(a.l, b === void 0 ? !1 : b) && this.I == a.I && ak(this.j, a.j) && ak(this.B, a.B) && this.g == a.g && this.o == a.o && this.C == a.C && this.A == a.A
    };
    var Or = {
            currentTime: 1,
            duration: 2,
            isVpaid: 4,
            volume: 8,
            isYouTube: 16,
            isPlaying: 32
        },
        Di = {
            Xe: "start",
            FIRST_QUARTILE: "firstquartile",
            MIDPOINT: "midpoint",
            THIRD_QUARTILE: "thirdquartile",
            COMPLETE: "complete",
            ERROR: "error",
            pg: "metric",
            PAUSE: "pause",
            yg: "resume",
            SKIPPED: "skip",
            VIEWABLE_IMPRESSION: "viewable_impression",
            qg: "mute",
            Cg: "unmute",
            FULLSCREEN: "fullscreen",
            lg: "exitfullscreen",
            gg: "bufferstart",
            fg: "bufferfinish",
            Se: "fully_viewable_audible_half_duration_impression",
            We: "measurable_impression",
            ag: "abandon",
            Re: "engagedview",
            IMPRESSION: "impression",
            ig: "creativeview",
            LOADED: "loaded",
            PROGRESS: "progress",
            Ii: "close",
            Ji: "collapse",
            rg: "overlay_resize",
            sg: "overlay_unmeasurable_impression",
            tg: "overlay_unviewable_impression",
            vg: "overlay_viewable_immediate_impression",
            ug: "overlay_viewable_end_of_session_impression",
            jg: "custom_metric_viewable",
            cg: "audio_audible",
            eg: "audio_measurable",
            dg: "audio_impression"
        },
        Pr = "start firstquartile midpoint thirdquartile resume loaded".split(" "),
        Qr = ["start", "firstquartile", "midpoint", "thirdquartile"],
        Rr = ["abandon"],
        Sr = {
            UNKNOWN: -1,
            Xe: 0,
            FIRST_QUARTILE: 1,
            MIDPOINT: 2,
            THIRD_QUARTILE: 3,
            COMPLETE: 4,
            pg: 5,
            PAUSE: 6,
            yg: 7,
            SKIPPED: 8,
            VIEWABLE_IMPRESSION: 9,
            qg: 10,
            Cg: 11,
            FULLSCREEN: 12,
            lg: 13,
            Se: 14,
            We: 15,
            ag: 16,
            Re: 17,
            IMPRESSION: 18,
            ig: 19,
            LOADED: 20,
            jg: 21,
            gg: 22,
            fg: 23,
            dg: 27,
            eg: 28,
            cg: 29
        };
    var wi = {
            Ei: "addEventListener",
            bj: "getMaxSize",
            cj: "getScreenSize",
            dj: "getState",
            ej: "getVersion",
            Nj: "removeEventListener",
            Bj: "isViewable"
        },
        Tr = function(a) {
            var b = a !== a.top,
                c = a.top === Ej(a),
                d = -1,
                e = 0;
            if (b && c && a.top.mraid) {
                d = 3;
                var f = a.top.mraid
            } else d = (f = a.mraid) ? b ? c ? 2 : 1 : 0 : -1;
            f && (f.IS_GMA_SDK || (e = 2), vi(function(g) {
                return typeof f[g] === "function"
            }) || (e = 1));
            return {
                Na: f,
                Wc: e,
                gi: d
            }
        };
    var Ur = function() {
        var a = window.document;
        return a && typeof a.elementFromPoint === "function"
    };

    function Vr(a, b, c) {
        try {
            if (a) {
                if (!b.top) return new J(-12245933, -12245933, -12245933, -12245933);
                b = b.top
            }
            a: {
                var d = b;
                if (a && d !== null && d != d.top) {
                    if (!d.top) {
                        var e = new Ij(-12245933, -12245933);
                        break a
                    }
                    d = d.top
                }
                try {
                    e = (c === void 0 ? 0 : c) ? (new Ij(d.innerWidth, d.innerHeight)).round() : Pj(d || window).round()
                } catch (n) {
                    e = new Ij(-12245933, -12245933)
                }
            }
            a = e;
            var f = a.height,
                g = a.width;
            if (g === -12245933) return new J(g, g, g, g);
            var h = Yj(Lj(b.document)),
                k = h.x,
                l = h.y;
            return new J(l, k + g, l + f, k)
        } catch (n) {
            return new J(-12245933, -12245933, -12245933, -12245933)
        }
    };
    var Wr = function(a, b) {
        b = Math.pow(10, b);
        return Math.floor(a * b) / b
    };

    function Xr(a, b, c, d) {
        if (!a) return {
            value: d,
            done: !1
        };
        d = b(d, a);
        var e = c(d, a);
        return !e && zc(a, "parentElement") ? Xr(a.parentElement || null, b, c, d) : {
            done: e,
            value: d
        }
    }
    var Yr = function(a, b, c, d) {
        if (!a) return d;
        d = Xr(a, b, c, d);
        if (!d.done) try {
            var e = Kj(a),
                f = e && Qj(e);
            return Yr(f && f.frameElement, b, c, d.value)
        } catch (g) {}
        return d.value
    };

    function Zr(a) {
        var b = !Dc || Uc();
        return Yr(a, function(c, d) {
            c = zc(d, "style") && d.style && hk(d, "visibility");
            return {
                hidden: c === "hidden",
                visible: b && c === "visible"
            }
        }, function(c) {
            return c.hidden || c.visible
        }, {
            hidden: !1,
            visible: !1
        }).hidden
    }
    var $r = function(a) {
            return Yr(a, function(b, c) {
                return !(!zc(c, "style") || !c.style || hk(c, "display") !== "none")
            }, function(b) {
                return b
            }, !1) ? !0 : Zr(a)
        },
        as = function(a) {
            return new J(a.top, a.right, a.bottom, a.left)
        },
        bs = function(a) {
            var b = a.top || 0,
                c = a.left || 0;
            return new J(b, c + (a.width || 0), b + (a.height || 0), c)
        },
        cs = function(a) {
            return a != null && a >= 0 && a <= 1
        };

    function ds() {
        var a = Qb();
        return a ? ic("AmazonWebAppPlatform;Android TV;Apple TV;AppleTV;BRAVIA;BeyondTV;Freebox;GoogleTV;HbbTV;LongTV;MiBOX;MiTV;NetCast.TV;Netcast;Opera TV;PANASONIC;POV_TV;SMART-TV;SMART_TV;SWTV;Smart TV;SmartTV;TV Store;UnionTV;WebOS".split(";"), function(b) {
            return Lb(a, b)
        }) || Lb(a, "OMI/") && !Lb(a, "XiaoMi/") ? !0 : Lb(a, "Presto") && Lb(a, "Linux") && !Lb(a, "X11") && !Lb(a, "Android") && !Lb(a, "Mobi") : !1
    }

    function es() {
        var a = Qb();
        return Lb(a, "AppleTV") || Lb(a, "Apple TV") || Lb(a, "CFNetwork") || Lb(a, "tvOS")
    }

    function fs(a) {
        return (a = a.userAgentData) ? a.brands.some(function(b) {
            return b.brand.includes("kepler_webview")
        }) : Lb(Qb(), "Kepler")
    }

    function gs() {
        var a;
        (a = Lb(Qb(), "CrKey") && !(Lb(Qb(), "CrKey") && Lb(Qb(), "SmartSpeaker")) || Lb(Qb(), "PlayStation") || Lb(Qb(), "Roku") || ds() || Lb(Qb(), "Xbox") || es()) || (a = Qb(), a = Lb(a, "sdk_google_atv_x86") || Lb(a, "Android TV"));
        return a
    };
    var is = function() {
            this.l = !uj(P.top);
            this.C = ri() || si();
            var a = vq();
            a = a.length > 0 && a[a.length - 1] != null && a[a.length - 1].url != null ? ((a = a[a.length - 1].url.match(dp)[3] || null) ? decodeURI(a) : a) || "" : "";
            this.domain = a;
            this.g = new J(0, 0, 0, 0);
            this.B = new Ij(0, 0);
            this.o = new Ij(0, 0);
            this.I = new J(0, 0, 0, 0);
            this.frameOffset = new Hj(0, 0);
            this.A = 0;
            this.L = !1;
            this.j = !(!P || !Tr(P).Na);
            hs(this)
        },
        js = function(a, b) {
            b && b.screen && (a.B = new Ij(b.screen.width, b.screen.height))
        },
        ks = function(a, b) {
            a: {
                var c = a.g ? new Ij(a.g.getWidth(), a.g.getHeight()) : new Ij(0, 0);b = b === void 0 ? P : b;b !== null && b != b.top && (b = b.top);
                var d = 0,
                    e = 0;
                try {
                    var f = b.document,
                        g = f.body,
                        h = f.documentElement;
                    if (f.compatMode == "CSS1Compat" && h.scrollHeight) d = h.scrollHeight != c.height ? h.scrollHeight : h.offsetHeight, e = h.scrollWidth != c.width ? h.scrollWidth : h.offsetWidth;
                    else {
                        var k = h.scrollHeight,
                            l = h.scrollWidth,
                            n = h.offsetHeight,
                            p = h.offsetWidth;
                        h.clientHeight != n && (k = g.scrollHeight, l = g.scrollWidth, n = g.offsetHeight, p = g.offsetWidth);
                        k > c.height ? k > n ? (d = k, e = l) : (d = n, e = p) : k < n ? (d = k, e = l) : (d = n, e = p)
                    }
                    var q =
                        new Ij(e, d);
                    break a
                } catch (u) {
                    q = new Ij(-12245933, -12245933);
                    break a
                }
                q = void 0
            }
            a.o = q
        },
        hs = function(a) {
            P && P.document && (a.I = Vr(!1, P, a.C), a.g = Vr(!0, P, a.C), ks(a, P), js(a, P))
        },
        ms = function() {
            var a = ls();
            if (a.A > 0 || a.L) return !0;
            a = fr().j.isVisible();
            var b = wm(nq) === 0;
            return a || b
        },
        ls = function() {
            return K(is)
        };
    var ns = function(a) {
        this.l = a;
        this.j = 0;
        this.g = null
    };
    ns.prototype.cancel = function() {
        fr().clearTimeout(this.g);
        this.g = null
    };
    var os = function(a) {
        var b = fr(),
            c = kq().g.g;
        a.g = b.setTimeout(lr(c, Cr(143, function() {
            a.j++;
            a.l.sample()
        })), Lr())
    };
    var ps = function(a, b, c) {
        this.l = a;
        this.ma = c === void 0 ? "na" : c;
        this.B = [];
        this.Ca = !1;
        this.o = new Mr(-1, !0, this);
        this.g = this;
        this.L = b;
        this.H = this.F = !1;
        this.aa = "uk";
        this.P = !1;
        this.C = !0
    };
    ps.prototype.G = function() {
        return !1
    };
    ps.prototype.initialize = function() {
        return this.Ca = !0
    };
    ps.prototype.ac = function() {
        return this.g.aa
    };
    ps.prototype.Bc = function() {
        return this.g.H
    };
    var rs = function(a, b, c) {
        if (!a.H || (c === void 0 ? 0 : c)) a.H = !0, a.aa = b, a.L = 0, a.g != a || qs(a)
    };
    ps.prototype.getName = function() {
        return this.g.ma
    };
    ps.prototype.zb = function() {
        return this.g.ba()
    };
    ps.prototype.ba = function() {
        return {}
    };
    ps.prototype.bb = function() {
        return this.g.L
    };
    var ts = function(a, b) {
        oc(a.B, b) || (a.B.push(b), b.dc(a.g), b.Bb(a.o), b.Ya() && (a.F = !0))
    };
    ps.prototype.U = function() {
        var a = ls();
        a.g = Vr(!0, this.l, a.C)
    };
    ps.prototype.V = function() {
        js(ls(), this.l)
    };
    ps.prototype.ca = function() {
        return this.o.g
    };
    var us = function(a) {
        a = a.g;
        a.V();
        a.U();
        var b = ls();
        b.I = Vr(!1, a.l, b.C);
        ks(ls(), a.l);
        a.o.g = a.ca()
    };
    ps.prototype.sample = function() {};
    ps.prototype.isActive = function() {
        return this.g.C
    };
    var vs = function(a) {
            a.F = a.B.length ? ic(a.B, function(b) {
                return b.Ya()
            }) : !1
        },
        ws = function(a) {
            var b = tc(a.B);
            cc(b, function(c) {
                c.Bb(a.o)
            })
        },
        qs = function(a) {
            var b = tc(a.B);
            cc(b, function(c) {
                c.dc(a.g)
            });
            a.g != a || ws(a)
        };
    m = ps.prototype;
    m.dc = function(a) {
        var b = this.g;
        this.g = a.bb() >= this.L ? a : this;
        b !== this.g ? (this.C = this.g.C, qs(this)) : this.C !== this.g.C && (this.C = this.g.C, qs(this))
    };
    m.Bb = function(a) {
        if (a.j === this.g) {
            var b = !this.o.equals(a, this.F);
            this.o = a;
            b && ws(this)
        }
    };
    m.Ya = function() {
        return this.F
    };
    m.dispose = function() {
        this.P = !0
    };
    m.Ja = function() {
        return this.P
    };
    var xs = function(a, b, c, d) {
        this.j = a;
        this.g = new J(0, 0, 0, 0);
        this.o = null;
        this.C = new J(0, 0, 0, 0);
        this.l = b;
        this.R = c;
        this.P = d;
        this.M = !1;
        this.timestamp = -1;
        this.G = new Nr(b.o, this.j, this.g, new J(0, 0, 0, 0), 0, 0, Kr(), 0);
        this.A = void 0
    };
    xs.prototype.Pd = function() {
        return !0
    };
    xs.prototype.F = function() {};
    xs.prototype.dispose = function() {
        if (!this.Ja()) {
            var a = this.l;
            pc(a.B, this);
            a.F && this.Ya() && vs(a);
            this.F();
            this.M = !0
        }
    };
    xs.prototype.Ja = function() {
        return this.M
    };
    var ys = function(a, b) {
        return a.A ? new J(Math.max(b.top + a.A.top, b.top), Math.min(b.left + a.A.right, b.right), Math.min(b.top + a.A.bottom, b.bottom), Math.max(b.left + a.A.left, b.left)) : Zj(b)
    };
    m = xs.prototype;
    m.zb = function() {
        return this.l.zb()
    };
    m.bb = function() {
        return this.l.bb()
    };
    m.ac = function() {
        return this.l.ac()
    };
    m.Bc = function() {
        return this.l.Bc()
    };
    m.dc = function() {};
    m.Bb = function() {
        this.ub()
    };
    m.Ya = function() {
        return this.P
    };
    var zs = function(a) {
        this.B = !1;
        this.g = a;
        this.o = function() {}
    };
    m = zs.prototype;
    m.bb = function() {
        return this.g.bb()
    };
    m.ac = function() {
        return this.g.ac()
    };
    m.Bc = function() {
        return this.g.Bc()
    };
    m.create = function(a, b, c) {
        var d = null;
        this.g && (d = this.Nc(a, b, c), ts(this.g, d));
        return d
    };
    m.Te = function() {
        return this.qc()
    };
    m.qc = function() {
        return !1
    };
    m.init = function(a) {
        return this.g.initialize() ? (ts(this.g, this), this.o = a, !0) : !1
    };
    m.dc = function(a) {
        a.bb() == 0 && this.o(a.ac(), this)
    };
    m.Bb = function() {};
    m.Ya = function() {
        return !1
    };
    m.dispose = function() {
        this.B = !0
    };
    m.Ja = function() {
        return this.B
    };
    m.zb = function() {
        return {}
    };
    var As = function(a, b, c) {
            this.l = c === void 0 ? 0 : c;
            this.j = a;
            this.g = b == null ? "" : b
        },
        Bs = function(a) {
            switch (Math.trunc(a.l)) {
                case -16:
                    return -16;
                case -8:
                    return -8;
                case 0:
                    return 0;
                case 8:
                    return 8;
                case 16:
                    return 16;
                default:
                    return 16
            }
        },
        Cs = function(a, b) {
            return a.l < b.l ? !0 : a.l > b.l ? !1 : a.j < b.j ? !0 : a.j > b.j ? !1 : typeof a.g < typeof b.g ? !0 : typeof a.g > typeof b.g ? !1 : a.g < b.g
        };
    var Ds = function() {
        this.l = 0;
        this.g = [];
        this.j = !1
    };
    Ds.prototype.add = function(a, b, c) {
        ++this.l;
        a = new As(a, b, c);
        this.g.push(new As(a.j, a.g, a.l + this.l / 4096));
        this.j = !0;
        return this
    };
    var Es = function(a, b) {
            cc(b.g, function(c) {
                a.add(c.j, c.g, Bs(c))
            })
        },
        Fs = function(a, b) {
            var c = c === void 0 ? 0 : c;
            var d = d === void 0 ? !0 : d;
            wj(b, function(e, f) {
                d && e === void 0 || a.add(f, e, c)
            });
            return a
        },
        Hs = function(a) {
            var b = Gs;
            a.j && (vc(a.g, function(c, d) {
                return Cs(d, c) ? 1 : Cs(c, d) ? -1 : 0
            }), a.j = !1);
            return hc(a.g, function(c, d) {
                d = b(d);
                return "" + c + (c != "" && d != "" ? "&" : "") + d
            }, "")
        };
    var Gs = function(a) {
        var b = a.j;
        a = a.g;
        return a === "" ? b : typeof a === "boolean" ? a ? b : "" : Array.isArray(a) ? a.length === 0 ? b : b + "=" + a.join() : b + "=" + (oc(["mtos", "tos", "p"], b) ? a : encodeURIComponent(a))
    };
    var Is = function(a) {
        var b = b === void 0 ? !0 : b;
        this.g = new Ds;
        a !== void 0 && Es(this.g, a);
        b && this.g.add("v", "unreleased", -16)
    };
    Is.prototype.toString = function() {
        var a = "//pagead2.googlesyndication.com//pagead/gen_204",
            b = Hs(this.g);
        b.length > 0 && (a += "?" + b);
        return a
    };
    var Js = function(a) {
            var b = [],
                c = [];
            ti(a, function(d, e) {
                if (!(e in Object.prototype) && typeof d != "undefined") switch (Array.isArray(d) && (d = d.join(",")), d = [e, "=", d].join(""), e) {
                    case "adk":
                    case "r":
                    case "tt":
                    case "error":
                    case "mtos":
                    case "tos":
                    case "p":
                    case "bs":
                        b.unshift(d);
                        break;
                    case "req":
                    case "url":
                    case "referrer":
                    case "iframe_loc":
                        c.push(d);
                        break;
                    default:
                        b.push(d)
                }
            });
            return b.concat(c)
        },
        Ks = function(a) {
            a = a.toString();
            fr();
            uk(P, a)
        };
    var Ls = function() {
        this.g = 0
    };

    function Ms(a) {
        a && typeof a.dispose == "function" && a.dispose()
    };
    var Q = function() {
        this.L = this.L;
        this.I = this.I
    };
    Q.prototype.L = !1;
    Q.prototype.Ja = function() {
        return this.L
    };
    Q.prototype.dispose = function() {
        this.L || (this.L = !0, this.O())
    };
    Q.prototype[Symbol.dispose] = function() {
        this.dispose()
    };
    var Os = function(a, b) {
            Ns(a, lb(Ms, b))
        },
        Ns = function(a, b) {
            a.L ? b() : (a.I || (a.I = []), a.I.push(b))
        };
    Q.prototype.O = function() {
        if (this.I)
            for (; this.I.length;) this.I.shift()()
    };
    var Ps = function(a, b, c) {
        cc(a.l, function(d) {
            var e = a.g;
            if (!d.g && (d.l(b, c), d.o())) {
                d.g = !0;
                var f = d.j(),
                    g = new Ds;
                g.add("id", "av-js");
                g.add("type", "verif");
                g.add("vtype", d.B);
                d = K(Ls);
                g.add("i", d.g++);
                g.add("adk", e);
                Fs(g, f);
                e = new Is(g);
                Ks(e)
            }
        })
    };
    var Qs = function() {
            this.j = this.l = this.o = this.g = 0
        },
        Rs = function(a, b, c, d) {
            b && (a.g += c, a.j += c, a.o += c, a.l = Math.max(a.l, a.o));
            if (d === void 0 ? !b : d) a.o = 0
        };
    var Ss = [1, .75, .5, .3, 0],
        Ts = function(a) {
            this.j = a = a === void 0 ? Ss : a;
            this.g = fc(this.j, function() {
                return new Qs
            })
        },
        Vs = function(a, b) {
            return Us(a, function(c) {
                return c.g
            }, b === void 0 ? !0 : b)
        },
        Xs = function(a, b) {
            return Ws(a, b, function(c) {
                return c.g
            })
        },
        Ys = function(a, b) {
            return Us(a, function(c) {
                return c.l
            }, b === void 0 ? !0 : b)
        },
        Zs = function(a, b) {
            return Ws(a, b, function(c) {
                return c.l
            })
        },
        $s = function(a, b) {
            return Ws(a, b, function(c) {
                return c.j
            })
        },
        at = function(a) {
            cc(a.g, function(b) {
                b.j = 0
            })
        },
        bt = function(a, b, c, d, e, f, g) {
            g = g === void 0 ?
                !0 : g;
            c = f ? Math.min(b, c) : c;
            for (f = 0; f < a.j.length; f++) {
                var h = a.j[f],
                    k = c > 0 && c >= h;
                h = !(b > 0 && b >= h) || d;
                Rs(a.g[f], g && k, e, !g || h)
            }
        },
        Us = function(a, b, c) {
            a = fc(a.g, function(d) {
                return b(d)
            });
            return c ? a : ct(a)
        },
        Ws = function(a, b, c) {
            var d = nc(a.j, function(e) {
                return b <= e
            });
            return d == -1 ? 0 : c(a.g[d])
        },
        ct = function(a) {
            return fc(a, function(b, c, d) {
                return c > 0 ? d[c] - d[c - 1] : d[c]
            })
        };
    var dt = function() {
            this.j = new Ts;
            this.aa = this.V = 0;
            this.ca = new Qs;
            this.H = this.C = -1;
            this.ma = 1E3;
            this.za = new Ts([1, .9, .8, .7, .6, .5, .4, .3, .2, .1, 0]);
            this.P = this.K = -1
        },
        et = function(a, b) {
            return Ys(a.j, b === void 0 ? !0 : b)
        };
    dt.prototype.L = function(a, b, c, d) {
        this.C = this.C != -1 ? Math.min(this.C, b.Z) : b.Z;
        this.H = Math.max(this.H, b.Z);
        this.K = this.K != -1 ? Math.min(this.K, b.wa) : b.wa;
        this.P = Math.max(this.P, b.wa);
        bt(this.za, b.wa, c.wa, b.g, a, d);
        this.V += a;
        b.Z === 0 && (this.aa += a);
        bt(this.j, b.Z, c.Z, b.g, a, d);
        c = d || c.Qb != b.Qb ? c.isVisible() && b.isVisible() : c.isVisible();
        b = !b.isVisible() || b.g;
        Rs(this.ca, c, a, b)
    };
    dt.prototype.jb = function() {
        return this.ca.l >= this.ma
    };
    if (nq && nq.URL) {
        var ft = nq.URL,
            gt;
        if (gt = !!ft) {
            var ht;
            a: {
                if (ft) {
                    var it = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
                    try {
                        var jt = it.exec(decodeURIComponent(ft));
                        if (jt) {
                            ht = jt[1] && jt[1].length > 1 ? jt[1].substring(1) : "true";
                            break a
                        }
                    } catch (a) {}
                }
                ht = ""
            }
            gt = ht.length > 0
        }
        yr.Le(!gt)
    }
    var kt = function(a, b, c, d) {
        var e = e === void 0 ? !1 : e;
        c = Cr(d, c);
        sk(a, b, c, {
            capture: e
        })
    };
    var lt = new J(0, 0, 0, 0);

    function mt(a, b) {
        b = nt(b);
        return b === 0 ? 0 : nt(a) / b
    }

    function nt(a) {
        return Math.max(a.bottom - a.top, 0) * Math.max(a.right - a.left, 0)
    }

    function ot(a, b) {
        if (!a || !b) return !1;
        for (var c = 0; a !== null && c++ < 100;) {
            if (a === b) return !0;
            try {
                if (a = a.parentElement || a) {
                    var d = Kj(a),
                        e = d && Qj(d),
                        f = e && e.frameElement;
                    f && (a = f)
                }
            } catch (g) {
                break
            }
        }
        return !1
    }

    function pt(a, b, c) {
        if (!a || !b) return !1;
        b = bk(Zj(a), -b.left, -b.top);
        a = (b.left + b.right) / 2;
        b = (b.top + b.bottom) / 2;
        uj(window.top) && window.top && window.top.document && (window = window.top);
        if (!Ur()) return !1;
        a = window.document.elementFromPoint(a, b);
        if (!a) return !1;
        b = (b = (b = Kj(c)) && b.defaultView && b.defaultView.frameElement) && ot(b, a);
        var d = a === c;
        a = !d && a && Xj(a, function(e) {
            return e === c
        });
        return !(b || d || a)
    }

    function qt(a, b, c, d) {
        return ls().l ? !1 : a.getWidth() <= 0 || a.getHeight() <= 0 ? !0 : c && d ? Br(208, function() {
            return pt(a, b, c)
        }) : !1
    };
    var rt = new J(0, 0, 0, 0),
        ut = function(a, b, c) {
            Q.call(this);
            this.position = Zj(rt);
            this.rd = this.cd();
            this.je = -2;
            this.mi = Date.now();
            this.Uf = -1;
            this.hd = b;
            this.gd = null;
            this.xc = !1;
            this.zd = null;
            this.opacity = -1;
            this.Xh = c;
            this.pi = !1;
            this.ne = function() {};
            this.Wf = function() {};
            this.Ba = new pq;
            this.Ba.Db = a;
            this.Ba.g = a;
            this.fb = !1;
            this.Lb = {
                pe: null,
                oe: null
            };
            this.Pf = !0;
            this.Mc = null;
            this.ec = this.Bh = !1;
            kq().A++;
            this.va = this.ee();
            this.Tf = -1;
            this.X = null;
            this.tf = this.xh = !1;
            this.R = new dq;
            mq(this.R);
            tt(this);
            this.Xh == 1 ? gq(this.R,
                "od", 1) : gq(this.R, "od", 0)
        };
    r(ut, Q);
    ut.prototype.O = function() {
        this.Ba.g && (this.Lb.pe && (tk(this.Ba.g, "mouseover", this.Lb.pe), this.Lb.pe = null), this.Lb.oe && (tk(this.Ba.g, "mouseout", this.Lb.oe), this.Lb.oe = null));
        this.Mc && this.Mc.dispose();
        this.X && this.X.dispose();
        delete this.rd;
        delete this.ne;
        delete this.Wf;
        delete this.Ba.Db;
        delete this.Ba.g;
        delete this.Lb;
        delete this.Mc;
        delete this.X;
        delete this.R;
        Q.prototype.O.call(this)
    };
    ut.prototype.Ab = function() {
        return this.X ? this.X.g : this.position
    };
    ut.prototype.ze = function(a) {
        kq().ze(a)
    };
    var tt = function(a) {
        a = a.Ba.Db;
        var b;
        if (b = a && a.getAttribute) b = /-[a-z]/.test("googleAvInapp") ? !1 : oq && a.dataset ? "googleAvInapp" in a.dataset : a.hasAttribute ? a.hasAttribute("data-" + qj()) : !!a.getAttribute("data-" + qj());
        b && (ls().j = !0)
    };
    ut.prototype.Ya = function() {
        return !1
    };
    ut.prototype.cd = function() {
        return new dt
    };
    ut.prototype.ua = function() {
        return this.rd
    };
    var vt = function(a, b) {
            b != a.ec && (a.ec = b, a = ls(), b ? a.A++ : a.A > 0 && a.A--)
        },
        wt = function(a, b) {
            if (a.X) {
                if (b.getName() === a.X.getName()) return;
                a.X.dispose();
                a.X = null
            }
            b = b.create(a.Ba.g, a.R, a.Ya());
            if (b = b != null && b.Pd() ? b : null) a.X = b
        },
        xt = function(a, b, c) {
            if (!a.gd || a.hd == -1 || b.getTimestamp() === -1 || a.gd.getTimestamp() === -1) return 0;
            a = b.getTimestamp() - a.gd.getTimestamp();
            return a > c ? 0 : a
        };
    ut.prototype.nf = function(a) {
        return xt(this, a, 1E4)
    };
    var yt = function(a, b, c) {
            if (a.X) {
                a.X.ub();
                var d = a.X.G,
                    e = d.l,
                    f = e.g;
                if (d.B != null) {
                    var g = d.j;
                    a.zd = new Hj(g.left - f.left, g.top - f.top)
                }
                f = a.Jd() ? Math.max(d.g, d.o) : d.g;
                g = {};
                e.volume !== null && (g.volume = e.volume);
                e = a.nf(d);
                a.gd = d;
                a.Oe(f, b, c, !1, g, e, d.A)
            }
        },
        zt = function(a) {
            if (a.xc && a.Mc) {
                var b = hq(a.R, "od") == 1,
                    c = ls().g,
                    d = a.Mc,
                    e = a.X ? a.X.getName() : "ns",
                    f = a.zd,
                    g = new Ij(c.getWidth(), c.getHeight());
                c = a.Jd();
                a = {
                    ji: e,
                    zd: f,
                    Di: g,
                    Jd: c,
                    Z: a.va.Z,
                    yi: b
                };
                if (b = d.j) {
                    b.ub();
                    e = b.G;
                    f = e.l.g;
                    var h = g = null;
                    e.B != null && f && (g = e.j, g = new Hj(g.left -
                        f.left, g.top - f.top), h = new Ij(f.right - f.left, f.bottom - f.top));
                    e = c ? Math.max(e.g, e.o) : e.g;
                    c = {
                        ji: b.getName(),
                        zd: g,
                        Di: h,
                        Jd: c,
                        yi: !1,
                        Z: e
                    }
                } else c = null;
                c && Ps(d, a, c)
            }
        };
    m = ut.prototype;
    m.Oe = function(a, b, c, d, e, f, g) {
        this.fb || (this.xc && (a = this.Rd(a, c, e, g), d = d && this.va.Z >= (this.Qb() ? .3 : .5), this.Pe(f, a, d), this.hd = b, a.Z > 0 && -1 === this.Tf && (this.Tf = b), this.Uf == -1 && this.jb() && (this.Uf = b), this.je == -2 && (this.je = nt(this.Ab()) ? a.Z : -1), this.va = a), this.ne(this))
    };
    m.Pe = function(a, b, c) {
        this.ua().L(a, b, this.va, c)
    };
    m.ee = function() {
        return new Sp
    };
    m.Rd = function(a, b, c, d) {
        c = this.ee();
        c.g = b;
        b = fr().j;
        b = wm(nq) === 0 ? -1 : b.isVisible() ? 0 : 1;
        c.j = b;
        c.Z = this.Wd(a);
        c.Qb = this.Qb();
        c.wa = d;
        return c
    };
    m.Wd = function(a) {
        return this.opacity === 0 && hq(this.R, "opac") === 1 ? 0 : a
    };
    m.Qb = function() {
        return !1
    };
    m.Jd = function() {
        return this.xh || this.Bh
    };
    m.Ha = function() {
        return 0
    };
    m.jb = function() {
        return this.rd.jb()
    };
    m.rf = function() {
        var a = this.xc;
        a = (this.tf || this.Ja()) && !a;
        var b = kq().j !== 2 || this.pi;
        return this.fb || b && a ? 2 : this.jb() ? 4 : 3
    };
    m.Zc = function() {
        return 0
    };
    var At = function(a, b, c) {
        b && (a.ne = b);
        c && (a.Wf = c)
    };
    var Bt = function() {};
    Bt.prototype.next = function() {
        return Ct
    };
    var Ct = {
        done: !0,
        value: void 0
    };
    Bt.prototype.Xb = function() {
        return this
    };
    var Dt = function() {
            this.o = this.g = this.l = this.j = this.B = 0
        },
        Et = function(a) {
            var b = {};
            b = (b.ptlt = nb() - a.B, b);
            var c = a.j;
            c && (b.pnk = c);
            (c = a.l) && (b.pnc = c);
            (c = a.o) && (b.pnmm = c);
            (a = a.g) && (b.pns = a);
            return b
        };
    var Ft = function() {
        Sp.call(this);
        this.fullscreen = !1;
        this.volume = void 0;
        this.l = !1;
        this.mediaTime = -1
    };
    r(Ft, Sp);
    var Gt = function(a) {
        return cs(a.volume) && a.volume > 0
    };
    var It = function(a, b, c, d) {
            c = c === void 0 ? !0 : c;
            d = d === void 0 ? function() {
                return !0
            } : d;
            return function(e) {
                var f = e[a];
                if (Array.isArray(f) && d(e)) return Ht(f, b, c)
            }
        },
        Jt = function(a, b) {
            return function(c) {
                return b(c) ? c[a] : void 0
            }
        },
        Kt = function(a) {
            return function(b) {
                for (var c = 0; c < a.length; c++)
                    if (a[c] === b.e || a[c] === void 0 && !b.hasOwnProperty("e")) return !0;
                return !1
            }
        },
        Ht = function(a, b, c) {
            return c === void 0 || c ? ec(a, function(d, e) {
                return oc(b, e)
            }) : fc(b, function(d, e, f) {
                return a.slice(e > 0 ? f[e - 1] + 1 : 0, d + 1).reduce(function(g, h) {
                    return g +
                        h
                }, 0)
            })
        };
    var Lt = Kt([void 0, 1, 2, 3, 4, 8, 16]),
        Mt = Kt([void 0, 4, 8, 16]),
        Nt = {
            sv: "sv",
            v: "v",
            cb: "cb",
            e: "e",
            nas: "nas",
            msg: "msg",
            "if": "if",
            sdk: "sdk",
            p: "p",
            p0: Jt("p0", Mt),
            p1: Jt("p1", Mt),
            p2: Jt("p2", Mt),
            p3: Jt("p3", Mt),
            cp: "cp",
            tos: "tos",
            mtos: "mtos",
            amtos: "amtos",
            mtos1: It("mtos1", [0, 2, 4], !1, Mt),
            mtos2: It("mtos2", [0, 2, 4], !1, Mt),
            mtos3: It("mtos3", [0, 2, 4], !1, Mt),
            mcvt: "mcvt",
            ps: "ps",
            scs: "scs",
            bs: "bs",
            vht: "vht",
            mut: "mut",
            a: "a",
            a0: Jt("a0", Mt),
            a1: Jt("a1", Mt),
            a2: Jt("a2", Mt),
            a3: Jt("a3", Mt),
            ft: "ft",
            dft: "dft",
            at: "at",
            dat: "dat",
            as: "as",
            vpt: "vpt",
            gmm: "gmm",
            std: "std",
            efpf: "efpf",
            swf: "swf",
            nio: "nio",
            px: "px",
            nnut: "nnut",
            vmer: "vmer",
            vmmk: "vmmk",
            vmiec: "vmiec",
            nmt: "nmt",
            tcm: "tcm",
            bt: "bt",
            pst: "pst",
            vpaid: "vpaid",
            dur: "dur",
            vmtime: "vmtime",
            dtos: "dtos",
            dtoss: "dtoss",
            dvs: "dvs",
            dfvs: "dfvs",
            dvpt: "dvpt",
            fmf: "fmf",
            vds: "vds",
            is: "is",
            i0: "i0",
            i1: "i1",
            i2: "i2",
            i3: "i3",
            ic: "ic",
            cs: "cs",
            c: "c",
            c0: Jt("c0", Mt),
            c1: Jt("c1", Mt),
            c2: Jt("c2", Mt),
            c3: Jt("c3", Mt),
            mc: "mc",
            nc: "nc",
            mv: "mv",
            nv: "nv",
            qmt: Jt("qmtos", Lt),
            qnc: Jt("qnc", Lt),
            qmv: Jt("qmv", Lt),
            qnv: Jt("qnv", Lt),
            raf: "raf",
            rafc: "rafc",
            lte: "lte",
            ces: "ces",
            tth: "tth",
            femt: "femt",
            femvt: "femvt",
            emc: "emc",
            emuc: "emuc",
            emb: "emb",
            avms: "avms",
            nvat: "nvat",
            qi: "qi",
            psm: "psm",
            psv: "psv",
            psfv: "psfv",
            psa: "psa",
            pnk: "pnk",
            pnc: "pnc",
            pnmm: "pnmm",
            pns: "pns",
            ptlt: "ptlt",
            pngs: "pings",
            veid: "veid",
            ssb: "ssb",
            ss0: Jt("ss0", Mt),
            ss1: Jt("ss1", Mt),
            ss2: Jt("ss2", Mt),
            ss3: Jt("ss3", Mt),
            dc_rfl: "urlsigs",
            obd: "obd",
            omidp: "omidp",
            omidr: "omidr",
            omidv: "omidv",
            omida: "omida",
            omids: "omids",
            omidpv: "omidpv",
            omidam: "omidam",
            omidct: "omidct",
            omidia: "omidia",
            omiddc: "omiddc",
            omidlat: "omidlat",
            omiddit: "omiddit",
            nopd: "nopd",
            co: "co",
            tm: "tm",
            tu: "tu"
        },
        Ot = Object.assign({}, Nt, {
            avid: function(a) {
                return function() {
                    return a
                }
            }("audio"),
            avas: "avas",
            vs: "vs"
        }),
        Pt = {
            atos: "atos",
            avt: It("atos", [2]),
            davs: "davs",
            dafvs: "dafvs",
            dav: "dav",
            ss: function(a, b) {
                return function(c) {
                    return c[a] === void 0 && b !== void 0 ? b : c[a]
                }
            }("ss", 0),
            t: "t"
        };
    var Qt = function() {
        this.j = this.g = ""
    };
    var Rt = function() {},
        St = function(a, b) {
            var c = {};
            if (a !== void 0)
                if (b != null)
                    for (var d in b) {
                        var e = b[d];
                        d in Object.prototype || e != null && (c[d] = typeof e === "function" ? e(a) : a[e])
                    } else Ii(c, a);
            return Hs(Fs(new Ds, c))
        };
    var Tt = function() {
        var a = {};
        this.j = (a.vs = [1, 0], a.vw = [0, 1], a.am = [2, 2], a.a = [4, 4], a.f = [8, 8], a.bm = [16, 16], a.b = [32, 32], a.avw = [0, 64], a.avs = [64, 0], a.pv = [256, 256], a.gdr = [0, 512], a.p = [0, 1024], a.r = [0, 2048], a.m = [0, 4096], a.um = [0, 8192], a.ef = [0, 16384], a.s = [0, 32768], a.pmx = [0, 16777216], a.mut = [33554432, 33554432], a.umutb = [67108864, 67108864], a.tvoff = [134217728, 134217728], a);
        this.g = {};
        for (var b in this.j) this.j[b][1] > 0 && (this.g[b] = 0);
        this.l = 0
    };
    Tt.prototype.reportEvent = function(a) {
        var b = this.j[a],
            c = b[1];
        this.l += b[0];
        c > 0 && this.g[a] == 0 && (this.g[a] = 1)
    };
    var Ut = function(a) {
            var b = yi(a.j),
                c = 0,
                d;
            for (d in a.g) oc(b, d) && a.g[d] == 1 && (c += a.j[d][1], a.g[d] = 2);
            return c
        },
        Vt = function(a) {
            var b = 0,
                c;
            for (c in a.g) {
                var d = a.g[c];
                if (d == 1 || d == 2) b += a.j[c][1]
            }
            return b
        };
    var Wt = function() {
        this.g = this.j = 0
    };
    Wt.prototype.getValue = function() {
        return this.j
    };
    var Xt = function(a, b, c) {
        b >= 32 || (a.g & 1 << b && !c ? a.j &= ~(1 << b) : a.g & 1 << b || !c || (a.j |= 1 << b), a.g |= 1 << b)
    };
    var Yt = function() {
        dt.call(this);
        this.l = new Qs;
        this.ba = this.F = this.M = 0;
        this.I = -1;
        this.Aa = new Qs;
        this.B = new Qs;
        this.g = new Ts;
        this.A = this.o = -1;
        this.G = new Qs;
        this.ma = 2E3;
        this.U = new Wt;
        this.ia = new Wt;
        this.da = new Wt
    };
    r(Yt, dt);
    var Zt = function(a, b, c) {
        var d = a.ba;
        Jr || c || a.I == -1 || (d += b - a.I);
        return d
    };
    Yt.prototype.L = function(a, b, c, d) {
        if (!b.l) {
            dt.prototype.L.call(this, a, b, c, d);
            var e = Gt(b) && Gt(c),
                f = (d ? Math.min(b.Z, c.Z) : c.Z) >= .5;
            cs(b.volume) && (this.o = this.o != -1 ? Math.min(this.o, b.volume) : b.volume, this.A = Math.max(this.A, b.volume));
            f && (this.M += a, this.F += e ? a : 0);
            bt(this.g, b.Z, c.Z, b.g, a, d, e);
            Rs(this.l, !0, a);
            Rs(this.B, e, a);
            Rs(this.G, c.fullscreen, a);
            Rs(this.Aa, e && !f, a);
            a = Math.floor(b.mediaTime / 1E3);
            Xt(this.U, a, b.isVisible());
            Xt(this.ia, a, b.Z >= 1);
            Xt(this.da, a, Gt(b))
        }
    };
    var $t = function() {
        this.l = !1
    };
    $t.prototype.j = function(a) {
        this.l || (this.g(a) ? (a = this.L.report(this.o, a), this.B |= a, a = a == 0) : a = !1, this.l = a)
    };
    var au = function(a, b) {
        this.l = !1;
        this.o = a;
        this.L = b;
        this.B = 0
    };
    r(au, $t);
    au.prototype.g = function() {
        return !0
    };
    au.prototype.A = function() {
        return !1
    };
    au.prototype.getId = function() {
        var a = this,
            b = Ci(function(c) {
                return c == a.o
            });
        return Sr[b].toString()
    };
    au.prototype.toString = function() {
        var a = "";
        this.A() && (a += "c");
        this.l && (a += "s");
        this.B > 0 && (a += ":" + this.B);
        return this.getId() + a
    };
    var bu = function(a, b) {
        au.call(this, a, b);
        this.C = []
    };
    r(bu, au);
    bu.prototype.j = function(a, b) {
        b = b === void 0 ? null : b;
        b != null && this.C.push(b);
        au.prototype.j.call(this, a)
    };
    var cu = function() {};
    var du = function() {};
    r(du, cu);
    du.prototype.j = function() {
        return null
    };
    du.prototype.l = function() {
        return []
    };
    var eu = function(a, b, c, d) {
        xs.call(this, a, b, c, d)
    };
    r(eu, xs);
    m = eu.prototype;
    m.Td = function() {
        if (this.j) {
            var a = this.j,
                b = this.l.g.l;
            try {
                try {
                    var c = as(a.getBoundingClientRect())
                } catch (l) {
                    c = new J(0, 0, 0, 0)
                }
                var d = c.right - c.left,
                    e = c.bottom - c.top,
                    f = lk(a, b),
                    g = f.x,
                    h = f.y;
                var k = new J(Math.round(h), Math.round(g + d), Math.round(h + e), Math.round(g))
            } catch (l) {
                k = Zj(lt)
            }
            this.o = k;
            this.g = ys(this, this.o)
        }
    };
    m.df = function() {
        this.C = this.l.o.g
    };
    m.uf = function(a) {
        var b = hq(this.R, "od") == 1;
        return qt(a, this.C, this.j, b)
    };
    m.ff = function() {
        this.timestamp = Kr()
    };
    m.ub = function() {
        this.ff();
        this.Td();
        if (this.j && typeof this.j.videoWidth === "number" && typeof this.j.videoHeight === "number") {
            var a = this.j;
            var b = new Ij(a.videoWidth, a.videoHeight);
            a = this.g;
            var c = a.getWidth(),
                d = a.getHeight(),
                e = b.width;
            b = b.height;
            e <= 0 || b <= 0 || c <= 0 || d <= 0 || (e /= b, a = Zj(a), e > c / d ? (c /= e, d = (d - c) / 2, d > 0 && (d = a.top + d, a.top = Math.round(d), a.bottom = Math.round(d + c))) : (d *= e, c = Math.round((c - d) / 2), c > 0 && (c = a.left + c, a.left = Math.round(c), a.right = Math.round(c + d))));
            this.g = a
        }
        this.df();
        a = this.g;
        c = this.C;
        a = a.left <=
            c.right && c.left <= a.right && a.top <= c.bottom && c.top <= a.bottom ? new J(Math.max(a.top, c.top), Math.min(a.right, c.right), Math.min(a.bottom, c.bottom), Math.max(a.left, c.left)) : new J(0, 0, 0, 0);
        c = a.top >= a.bottom || a.left >= a.right ? new J(0, 0, 0, 0) : a;
        a = this.l.o;
        b = e = d = 0;
        if ((this.g.bottom - this.g.top) * (this.g.right - this.g.left) > 0)
            if (this.uf(c)) c = new J(0, 0, 0, 0);
            else {
                d = ls().B;
                b = new J(0, d.height, d.width, 0);
                var f;
                d = mt(c, (f = this.A) != null ? f : this.g);
                e = mt(c, ls().g);
                b = mt(c, b)
            }
        f = c.top >= c.bottom || c.left >= c.right ? new J(0, 0, 0, 0) :
            bk(c, -this.g.left, -this.g.top);
        ms() || (e = d = 0);
        this.G = new Nr(a, this.j, this.g, f, d, e, this.timestamp, b)
    };
    m.getName = function() {
        return this.l.getName()
    };
    var fu = new J(0, 0, 0, 0),
        gu = function(a, b, c) {
            xs.call(this, null, a, b, c);
            this.L = a.isActive();
            this.I = 0
        };
    r(gu, eu);
    m = gu.prototype;
    m.Pd = function() {
        this.B();
        return !0
    };
    m.Bb = function() {
        eu.prototype.ub.call(this)
    };
    m.ff = function() {};
    m.Td = function() {};
    m.ub = function() {
        this.B();
        eu.prototype.ub.call(this)
    };
    m.dc = function(a) {
        a = a.isActive();
        a !== this.L && (a ? this.B() : (ls().g = new J(0, 0, 0, 0), this.g = new J(0, 0, 0, 0), this.C = new J(0, 0, 0, 0), this.timestamp = -1));
        this.L = a
    };

    function hu(a) {
        return [a.top, a.left, a.bottom, a.right]
    }
    var iu = {},
        ju = (iu.firstquartile = 0, iu.midpoint = 1, iu.thirdquartile = 2, iu.complete = 3, iu),
        ku = function(a, b, c, d, e, f) {
            f = f === void 0 ? new du : f;
            ut.call(this, b, c, d);
            this.ye = e;
            this.Zd = 0;
            this.na = {};
            this.ha = new Tt;
            this.Zf = {};
            this.pa = "";
            this.Fb = null;
            this.Hb = !1;
            this.g = [];
            this.lb = f.j();
            this.A = f.l();
            this.B = null;
            this.l = -1;
            this.ba = this.G = void 0;
            this.K = this.H = 0;
            this.U = -1;
            this.ma = this.ia = !1;
            this.P = this.F = this.j = this.lc = this.Ra = 0;
            new Ts;
            this.V = this.ca = 0;
            this.da = -1;
            this.oa = 0;
            this.C = ni;
            this.M = [this.cd()];
            this.Zb = 2;
            this.Vb = {};
            this.Vb.pause = "p";
            this.Vb.resume = "r";
            this.Vb.skip = "s";
            this.Vb.mute = "m";
            this.Vb.unmute = "um";
            this.Vb.exitfullscreen = "ef";
            this.o = null;
            this.za = this.Aa = !1;
            this.tb = Math.floor(Date.now() / 1E3 - 1704067200);
            this.aa = 0
        };
    r(ku, ut);
    ku.prototype.Ya = function() {
        return !0
    };
    var lu = function(a) {
            a.tf = !0;
            a.oa != 0 && (a.oa = 3)
        },
        mu = function(a) {
            return a === void 0 ? a : Number(a) ? Wr(a, 3) : 0
        };
    m = ku.prototype;
    m.nf = function(a) {
        return xt(this, a, Math.max(1E4, this.l / 3))
    };
    m.Oe = function(a, b, c, d, e, f, g) {
        var h = this,
            k = this.C(this) || {};
        Ii(k, e);
        this.l = k.duration || this.l;
        this.G = k.isVpaid || this.G;
        this.ba = k.isYouTube || this.ba;
        fr();
        this.za = !1;
        e = nu(this, b);
        ou(this) === 1 && (f = e);
        ut.prototype.Oe.call(this, a, b, c, d, k, f, g);
        this.lb && this.lb.l && cc(this.A, function(l) {
            l.j(h)
        })
    };
    m.Pe = function(a, b, c) {
        ut.prototype.Pe.call(this, a, b, c);
        pu(this).L(a, b, this.va, c);
        this.ma = Gt(this.va) && Gt(b);
        this.U == -1 && this.ia && (this.U = this.ua().l.g);
        this.ha.l = 0;
        a = this.jb();
        b.isVisible() && this.ha.reportEvent("vs");
        a && this.ha.reportEvent("vw");
        cs(b.volume) && this.ha.reportEvent("am");
        Gt(b) ? this.ha.reportEvent("a") : this.ha.reportEvent("mut");
        this.ec && this.ha.reportEvent("f");
        b.j != -1 && (this.ha.reportEvent("bm"), b.j == 1 && (this.ha.reportEvent("b"), Gt(b) && this.ha.reportEvent("umutb")));
        Gt(b) && b.isVisible() &&
            this.ha.reportEvent("avs");
        this.ma && a && this.ha.reportEvent("avw");
        b.Z > 0 && this.ha.reportEvent("pv");
        qu(this, this.ua().l.g, !0) && this.ha.reportEvent("gdr");
        Zs(this.ua().j, 1) >= 2E3 && this.ha.reportEvent("pmx");
        this.za && this.ha.reportEvent("tvoff")
    };
    m.cd = function() {
        return new Yt
    };
    m.ua = function() {
        return this.rd
    };
    var pu = function(a, b) {
        return a.M[b != null && b < a.M.length ? b : a.M.length - 1]
    };
    ku.prototype.ee = function() {
        return new Ft
    };
    ku.prototype.Rd = function(a, b, c, d) {
        a = ut.prototype.Rd.call(this, a, b, c, d === void 0 ? -1 : d);
        a.fullscreen = this.ec;
        a.l = this.oa == 2;
        a.volume = c.volume;
        cs(a.volume) || (this.Ra++, b = this.va, cs(b.volume) && (a.volume = b.volume));
        c = c.currentTime;
        a.mediaTime = c !== void 0 && c >= 0 ? c : -1;
        return a
    };
    var ou = function(a) {
            var b = !!hq(kq().R, "umt");
            return a.G || !b && !a.ba ? 0 : 1
        },
        nu = function(a, b) {
            a.oa == 2 ? b = 0 : a.hd == -1 ? b = 0 : (b -= a.hd, b = b > Math.max(1E4, a.l / 3) ? 0 : b);
            var c = a.C(a) || {};
            c = c.currentTime !== void 0 ? c.currentTime : a.H;
            var d = c - a.H,
                e = 0;
            d >= 0 ? (a.K += b, a.V += Math.max(b - d, 0), e = Math.min(d, a.K)) : a.ca += Math.abs(d);
            d != 0 && (a.K = 0);
            a.da == -1 && d > 0 && (a.da = Ir >= 0 ? Kr() - Ir : -1);
            a.H = c;
            return e
        };
    ku.prototype.Wd = function(a) {
        return ls(), this.ec ? 1 : ut.prototype.Wd.call(this, a)
    };
    ku.prototype.Ha = function() {
        return 1
    };
    ku.prototype.getDuration = function() {
        return this.l
    };
    var ru = function(a, b) {
            ic(a.A, function(c) {
                return c.o == b.o
            }) || a.A.push(b)
        },
        tu = function(a) {
            var b = Xs(a.ua().g, 1);
            return qu(a, b)
        },
        qu = function(a, b, c) {
            return b >= 15E3 ? !0 : a.ia ? (c === void 0 ? 0 : c) ? !0 : a.l > 0 ? b >= a.l / 2 : a.U > 0 ? b >= a.U : !1 : !1
        },
        uu = function(a) {
            var b = {},
                c = ls();
            b.insideIframe = c.l;
            b.unmeasurable = a.fb;
            var d = a.Ab(),
                e = a.X ? a.X.o : null;
            b.position = d;
            e && !ak(d, e) && (b.containerPosition = e);
            b.exposure = a.va.Z;
            b.documentSize = c.o;
            b.viewportSize = new Ij(c.g.getWidth(), c.g.getHeight());
            a.o != null && (b.presenceData = a.o);
            b.screenShare =
                a.va.wa;
            return b
        },
        vu = function(a) {
            var b = Wr(a.va.Z, 2),
                c = a.ha.l,
                d = a.va,
                e = pu(a),
                f = mu(e.o),
                g = mu(e.A),
                h = mu(d.volume),
                k = Wr(e.C, 2),
                l = Wr(e.H, 2),
                n = Wr(d.Z, 2),
                p = Wr(e.K, 2),
                q = Wr(e.P, 2);
            d = Wr(d.wa, 2);
            var u = Zj(a.Ab()).round();
            a = a.X && a.X.o ? Zj(a.X ? a.X.o : null).round() : null;
            e = et(e, !1);
            return {
                Ci: b,
                Cc: c,
                td: f,
                od: g,
                tc: h,
                ud: k,
                pd: l,
                Z: n,
                wd: p,
                qd: q,
                wa: d,
                position: u,
                uc: a,
                xd: e
            }
        },
        xu = function(a, b) {
            wu(a.g, b, function() {
                return {
                    Ci: 0,
                    Cc: void 0,
                    td: -1,
                    od: -1,
                    tc: -1,
                    ud: -1,
                    pd: -1,
                    Z: -1,
                    wd: -1,
                    qd: -1,
                    wa: -1,
                    position: void 0,
                    uc: void 0,
                    xd: []
                }
            });
            a.g[b] =
                vu(a)
        },
        wu = function(a, b, c) {
            for (var d = a.length; d < b + 1;) a.push(c()), d++
        },
        Au = function(a, b, c) {
            var d = a.Zf[b];
            if (d != null) return d;
            d = yu(a, b);
            var e = Ci(function(f) {
                return f == b
            });
            a = zu(a, d, d, c, ju[Di[e]]);
            b == "fully_viewable_audible_half_duration_impression" && (a.std = "csm");
            return a
        },
        Bu = function(a, b, c) {
            var d = [b];
            if (a != b || c != b) d.unshift(a), d.push(c);
            return d
        },
        zu = function(a, b, c, d, e) {
            if (a.fb) return {
                "if": 0,
                vs: 0
            };
            var f = Zj(a.Ab()).round(),
                g = a.X ? a.X.o : null,
                h = ls(),
                k = kq(),
                l = a.ua(),
                n = a.X ? a.X.getName() : "ns",
                p = {};
            p["if"] = h.l ?
                1 : void 0;
            p.sdk = a.B ? a.B : void 0;
            p.t = a.mi;
            p.p = [f.top, f.left, f.bottom, f.right];
            f && g && !ak(g, f) && (f = g.round(), p.cp = [f.top, f.left, f.bottom, f.right]);
            p.tos = Vs(l.j, !1);
            p.mtos = et(l);
            p.mcvt = l.ca.l;
            p.ps = void 0;
            p.vht = Zt(l, Kr(), a.oa == 2);
            p.mut = l.Aa.l;
            p.a = mu(a.va.volume);
            p.mv = mu(l.A);
            p.fs = a.ec ? 1 : 0;
            p.ft = l.G.g;
            p.at = l.B.g;
            p.as = l.o > 0 ? 1 : 0;
            p.atos = Vs(l.g);
            p.ssb = Vs(l.za, !1);
            p.amtos = Ys(l.g, !1);
            p.uac = a.Ra;
            p.vpt = l.l.g;
            n == "nio" && (p.nio = 1, p.avms = "nio");
            p.gmm = "4";
            p.gdr = qu(a, l.l.g, !0) ? 1 : 0;
            p.efpf = a.Zb;
            if (n == "gsv" || n == "nis") n = a.X,
                n.I > 0 && (p.nnut = n.I);
            p.tcm = ou(a);
            p.nmt = a.ca;
            p.bt = a.V;
            p.pst = a.da;
            p.vpaid = a.G;
            p.dur = a.l;
            p.vmtime = a.H;
            p.is = a.ha.l;
            a.g.length >= 1 && (p.i0 = a.g[0].Cc, p.a0 = [a.g[0].tc], p.c0 = [a.g[0].Z], p.ss0 = [a.g[0].wa], n = a.g[0].position, f = a.g[0].uc, p.p0 = n ? hu(n) : void 0, n && f && !ak(f, n) && (p.cp0 = hu(f)));
            a.g.length >= 2 && (p.i1 = a.g[1].Cc, p.a1 = Bu(a.g[1].td, a.g[1].tc, a.g[1].od), p.c1 = Bu(a.g[1].ud, a.g[1].Z, a.g[1].pd), p.ss1 = Bu(a.g[1].wd, a.g[1].wa, a.g[1].qd), n = a.g[1].position, f = a.g[1].uc, p.p1 = n ? hu(n) : void 0, n && f && !ak(f, n) && (p.cp1 = hu(f)),
                p.mtos1 = a.g[1].xd);
            a.g.length >= 3 && (p.i2 = a.g[2].Cc, p.a2 = Bu(a.g[2].td, a.g[2].tc, a.g[2].od), p.c2 = Bu(a.g[2].ud, a.g[2].Z, a.g[2].pd), p.ss2 = Bu(a.g[2].wd, a.g[2].wa, a.g[2].qd), n = a.g[2].position, f = a.g[2].uc, p.p2 = n ? hu(n) : void 0, n && f && !ak(f, n) && (p.cp2 = hu(f)), p.mtos2 = a.g[2].xd);
            a.g.length >= 4 && (p.i3 = a.g[3].Cc, p.a3 = Bu(a.g[3].td, a.g[3].tc, a.g[3].od), p.c3 = Bu(a.g[3].ud, a.g[3].Z, a.g[3].pd), p.ss3 = Bu(a.g[3].wd, a.g[3].wa, a.g[3].qd), n = a.g[3].position, f = a.g[3].uc, p.p3 = n ? hu(n) : void 0, n && f && !ak(f, n) && (p.cp3 = hu(f)), p.mtos3 =
                a.g[3].xd);
            p.cs = Vt(a.ha);
            b && (p.ic = Ut(a.ha), p.dvpt = l.l.j, p.dvs = $s(l.j, .5), p.dfvs = $s(l.j, 1), p.davs = $s(l.g, .5), p.dafvs = $s(l.g, 1), c && (l.l.j = 0, at(l.j), at(l.g)), a.jb() && (p.dtos = l.M, p.dav = l.F, p.dtoss = a.Zd + 1, c && (l.M = 0, l.F = 0, a.Zd++)), p.dat = l.B.j, p.dft = l.G.j, c && (l.B.j = 0, l.G.j = 0));
            p.ps = [h.o.width, h.o.height];
            p.bs = [h.g.getWidth(), h.g.getHeight()];
            p.scs = [h.B.width, h.B.height];
            p.dom = h.domain;
            a.lc && (p.vds = a.lc);
            if (a.A.length > 0 || a.lb) b = tc(a.A), a.lb && b.push(a.lb), p.pings = fc(b, function(q) {
                return q.toString()
            });
            b = fc(ec(a.A,
                function(q) {
                    return q.A()
                }), function(q) {
                return q.getId()
            });
            uc(b);
            p.ces = b;
            a.j && (p.vmer = a.j);
            a.F && (p.vmmk = a.F);
            a.P && (p.vmiec = a.P);
            p.avms = a.X ? a.X.getName() : "ns";
            a.X && Ii(p, a.X.zb());
            d ? (p.c = Wr(a.va.Z, 2), p.ss = Wr(a.va.wa, 2)) : p.tth = Kr() - Hr;
            p.mc = Wr(l.H, 2);
            p.nc = Wr(l.C, 2);
            p.mv = mu(l.A);
            p.nv = mu(l.o);
            p.lte = Wr(a.je, 2);
            d = pu(a, e);
            et(l);
            p.qmtos = et(d);
            p.qnc = Wr(d.C, 2);
            p.qmv = mu(d.A);
            p.qnv = mu(d.o);
            p.qas = d.o > 0 ? 1 : 0;
            p.qi = a.pa;
            p.avms || (p.avms = "geo");
            p.psm = l.U.g;
            p.psv = l.U.getValue();
            p.psfv = l.ia.getValue();
            p.psa = l.da.getValue();
            k = jq(k.R);
            k.length && (p.veid = k);
            a.o && Ii(p, Et(a.o));
            p.avas = a.Zc();
            p.vs = a.rf();
            p.co = Cu(a);
            p.tm = l.V;
            p.tu = l.aa;
            return p
        },
        yu = function(a, b) {
            if (oc(Rr, b)) return !0;
            var c = a.na[b];
            return c !== void 0 ? (a.na[b] = !0, !c) : !1
        };
    ku.prototype.rf = function() {
        return this.fb ? 2 : tu(this) ? 5 : this.jb() ? 4 : 3
    };
    ku.prototype.Zc = function() {
        return this.Aa ? this.ua().B.l >= 2E3 ? 4 : 3 : 2
    };
    var Cu = function(a) {
        var b = a.aa.toString(10).padStart(2, "0");
        b = "" + a.tb + b;
        a.aa < 99 && a.aa++;
        return b
    };
    var Du = nb(),
        Gu = function() {
            this.g = {};
            var a = Qj();
            Eu(this, a, document);
            var b = Fu();
            try {
                if ("1" == b) {
                    for (var c = a.parent; c != a.top; c = c.parent) Eu(this, c, c.document);
                    Eu(this, a.top, a.top.document)
                }
            } catch (d) {}
        },
        Fu = function() {
            var a = document.documentElement;
            try {
                if (!uj(Qj().top)) return "2";
                var b = [],
                    c = Qj(a.ownerDocument);
                for (a = c; a != c.top; a = a.parent)
                    if (a.frameElement) b.push(a.frameElement);
                    else break;
                return b && b.length != 0 ? "1" : "0"
            } catch (d) {
                return "2"
            }
        },
        Eu = function(a, b, c) {
            kt(c, "mousedown", function() {
                return Hu(a)
            }, 301);
            kt(b, "scroll", function() {
                return Iu(a)
            }, 302);
            kt(c, "touchmove", function() {
                return Ju(a)
            }, 303);
            kt(c, "mousemove", function() {
                return Ku(a)
            }, 304);
            kt(c, "keydown", function() {
                return Lu(a)
            }, 305)
        },
        Hu = function(a) {
            ti(a.g, function(b) {
                b.l > 1E5 || ++b.l
            })
        },
        Iu = function(a) {
            ti(a.g, function(b) {
                b.g > 1E5 || ++b.g
            })
        },
        Ju = function(a) {
            ti(a.g, function(b) {
                b.g > 1E5 || ++b.g
            })
        },
        Lu = function(a) {
            ti(a.g, function(b) {
                b.j > 1E5 || ++b.j
            })
        },
        Ku = function(a) {
            ti(a.g, function(b) {
                b.o > 1E5 || ++b.o
            })
        };
    var Mu = function() {
            this.g = [];
            this.j = []
        },
        Nu = function(a, b) {
            return jc(a.g, function(c) {
                return c.pa == b
            })
        },
        Ou = function(a, b) {
            return b ? jc(a.g, function(c) {
                return c.Ba.Db == b
            }) : null
        },
        Pu = function(a, b) {
            return jc(a.j, function(c) {
                return c.Ha() == 2 && c.pa == b
            })
        },
        Ru = function() {
            var a = Qu;
            return a.g.length == 0 ? a.j : a.j.length == 0 ? a.g : sc(a.j, a.g)
        };
    Mu.prototype.reset = function() {
        this.g = [];
        this.j = []
    };
    var Su = function(a, b) {
            a = b.Ha() == 1 ? a.g : a.j;
            var c = kc(a, function(d) {
                return d == b
            });
            return c != -1 ? (a.splice(c, 1), b.X && b.X.F(), b.dispose(), !0) : !1
        },
        Tu = function(a) {
            var b = Qu;
            if (Su(b, a)) {
                switch (a.Ha()) {
                    case 0:
                        var c = function() {
                            return null
                        };
                    case 2:
                        c = function() {
                            return Pu(b, a.pa)
                        };
                        break;
                    case 1:
                        c = function() {
                            return Nu(b, a.pa)
                        }
                }
                for (var d = c(); d; d = c()) Su(b, d)
            }
        },
        Uu = function(a) {
            var b = Qu;
            a = ec(a, function(c) {
                return !Ou(b, c.Ba.Db)
            });
            b.g.push.apply(b.g, ta(a))
        },
        Vu = function(a) {
            var b = [];
            cc(a, function(c) {
                ic(Qu.g, function(d) {
                    return d.Ba.Db ===
                        c.Ba.Db && d.pa === c.pa
                }) || (Qu.g.push(c), b.push(c))
            })
        },
        Qu = K(Mu);
    var Wu = function() {
            this.g = this.j = null
        },
        Xu = function(a, b) {
            if (a.j == null) return !1;
            var c = function(d, e) {
                b(d, e)
            };
            a.g = jc(a.j, function(d) {
                return d != null && d.Te()
            });
            a.g && (a.g.init(c) ? us(a.g.g) : b(a.g.g.ac(), a.g));
            return a.g != null
        };
    var Zu = function(a) {
        a = Yu(a);
        zs.call(this, a.length ? a[a.length - 1] : new ps(P, 0));
        this.l = a;
        this.j = null
    };
    r(Zu, zs);
    m = Zu.prototype;
    m.getName = function() {
        return (this.j ? this.j : this.g).getName()
    };
    m.zb = function() {
        return (this.j ? this.j : this.g).zb()
    };
    m.bb = function() {
        return (this.j ? this.j : this.g).bb()
    };
    m.init = function(a) {
        var b = !1;
        cc(this.l, function(c) {
            c.initialize() && (b = !0)
        });
        b && (this.o = a, ts(this.g, this));
        return b
    };
    m.dispose = function() {
        cc(this.l, function(a) {
            a.dispose()
        });
        zs.prototype.dispose.call(this)
    };
    m.Te = function() {
        return ic(this.l, function(a) {
            return a.G()
        })
    };
    m.qc = function() {
        return ic(this.l, function(a) {
            return a.G()
        })
    };
    m.Nc = function(a, b, c) {
        return new eu(a, this.g, b, c)
    };
    m.Bb = function(a) {
        this.j = a.j
    };
    var Yu = function(a) {
        if (!a.length) return [];
        a = ec(a, function(c) {
            return c != null && c.G()
        });
        for (var b = 1; b < a.length; b++) ts(a[b - 1], a[b]);
        return a
    };
    var $u = {
            threshold: [0, .3, .5, .75, 1]
        },
        av = function(a, b, c, d) {
            xs.call(this, a, b, c, d);
            this.K = this.H = this.I = this.L = this.B = null
        };
    r(av, eu);
    av.prototype.Pd = function() {
        var a = this;
        this.K || (this.K = Kr());
        if (Br(298, function() {
                return bv(a)
            })) return !0;
        rs(this.l, "msf");
        return !1
    };
    av.prototype.F = function() {
        if (this.B && this.j) try {
            this.B.unobserve(this.j), this.L ? (this.L.unobserve(this.j), this.L = null) : this.I && (this.I.disconnect(), this.I = null)
        } catch (a) {}
    };
    var cv = function(a) {
            return a.B && a.B.takeRecords ? a.B.takeRecords() : []
        },
        bv = function(a) {
            if (!a.j) return !1;
            var b = a.j,
                c = a.l.g.l,
                d = kq().g.g;
            a.B = new c.IntersectionObserver(lr(d, function(e) {
                return dv(a, e)
            }), $u);
            d = lr(d, function() {
                a.B.unobserve(b);
                a.B.observe(b);
                dv(a, cv(a))
            });
            c.ResizeObserver ? (a.L = new c.ResizeObserver(d), a.L.observe(b)) : c.MutationObserver && (a.I = new y.MutationObserver(d), a.I.observe(b, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            }));
            a.B.observe(b);
            dv(a, cv(a));
            return !0
        },
        dv = function(a,
            b) {
            try {
                if (b.length) {
                    a.H || (a.H = Kr());
                    var c = ev(b),
                        d = lk(a.j, a.l.g.l),
                        e = d.x,
                        f = d.y;
                    a.o = new J(Math.round(f), Math.round(e) + c.boundingClientRect.width, Math.round(f) + c.boundingClientRect.height, Math.round(e));
                    a.g = ys(a, a.o);
                    var g = as(c.intersectionRect);
                    a.C = bk(g, a.o.left - g.left, a.o.top - g.top)
                }
            } catch (h) {
                a.F(), Dr(299, h)
            }
        },
        ev = function(a) {
            return hc(a, function(b, c) {
                return b.time > c.time ? b : c
            }, a[0])
        };
    m = av.prototype;
    m.ub = function() {
        var a = cv(this);
        a.length > 0 && dv(this, a);
        eu.prototype.ub.call(this)
    };
    m.Td = function() {};
    m.uf = function() {
        return !1
    };
    m.df = function() {};
    m.zb = function() {
        var a = {};
        return Object.assign(this.l.zb(), (a.niot_obs = this.K, a.niot_cbk = this.H, a))
    };
    m.getName = function() {
        return "nio"
    };
    var fv = function(a) {
        a = a === void 0 ? P : a;
        zs.call(this, new ps(a, 2))
    };
    r(fv, zs);
    fv.prototype.getName = function() {
        return "nio"
    };
    fv.prototype.qc = function() {
        return !ls().j && this.g.g.l.IntersectionObserver != null
    };
    fv.prototype.Nc = function(a, b, c) {
        return new av(a, this.g, b, c)
    };
    var hv = function() {
        var a = gv();
        ps.call(this, P.top, a, "geo")
    };
    r(hv, ps);
    hv.prototype.ca = function() {
        return ls().g
    };
    hv.prototype.G = function() {
        var a = gv();
        this.L !== a && (this.g != this && a > this.g.L && (this.g = this, qs(this)), this.L = a);
        return a == 2
    };
    var gv = function() {
        kq();
        var a = ls();
        return a.l || a.j ? 0 : 2
    };
    var iv = function() {};
    var jv = function() {
            this.done = !1;
            this.g = {
                Eg: 0,
                Ye: 0,
                Ik: 0,
                jf: 0,
                ge: -1,
                Rg: 0,
                Qg: 0,
                Sg: 0,
                hi: 0
            };
            this.B = null;
            this.A = !1;
            this.l = null;
            this.C = 0;
            this.j = new ns(this)
        },
        mv = function() {
            var a = kv;
            a.A || (a.A = !0, lv(a, function() {
                return a.o.apply(a, ta(Ra.apply(0, arguments)))
            }), a.o())
        };
    jv.prototype.sample = function() {
        nv(this, Ru(), !1)
    };
    var ov = function() {
            K(iv);
            var a = K(Wu);
            a.g != null && a.g.g ? us(a.g.g) : hs(ls())
        },
        nv = function(a, b, c) {
            if (!a.done && (a.j.cancel(), b.length != 0)) {
                a.l = null;
                try {
                    ov();
                    var d = Kr();
                    kq().B = d;
                    if (K(Wu).g != null)
                        for (var e = 0; e < b.length; e++) yt(b[e], d, c);
                    for (d = 0; d < b.length; d++) zt(b[d]);
                    ++a.g.jf
                } finally {
                    c ? cc(b, function(f) {
                        f.va.Z = 0
                    }) : os(a.j)
                }
            }
        },
        lv = function(a, b) {
            if (!a.B) {
                b = Cr(142, b);
                fr();
                var c = xm(nq);
                c && sk(nq, c, b, {
                    capture: !1
                }) && (a.B = b)
            }
        };
    jv.prototype.o = function() {
        var a = ms(),
            b = Kr();
        a ? (Jr || (Fr = b, cc(Qu.g, function(c) {
            var d = c.ua();
            d.ba = Zt(d, b, c.oa != 1)
        })), Jr = !0) : (this.C = pv(this, b), Jr = !1, Hr = b, cc(Qu.g, function(c) {
            c.xc && (c.ua().I = b)
        }));
        nv(this, Ru(), !a)
    };
    var qv = function() {
            var a = K(Wu);
            if (a.g != null) {
                var b = a.g;
                cc(Ru(), function(c) {
                    return wt(c, b)
                })
            }
        },
        pv = function(a, b) {
            a = a.C;
            Jr && (a += b - Fr);
            return a
        },
        rv = function(a) {
            a = a === void 0 ? function() {
                return {}
            } : a;
            yr.Nf("av-js");
            ur.g = .01;
            Ar([function(b) {
                var c = kq(),
                    d = {};
                d = (d.bin = c.j, d.type = "error", d);
                c = iq(c.R);
                if (!kv.l) {
                    var e = kv,
                        f = P.document,
                        g = Gr >= 0 ? Kr() - Gr : -1,
                        h = Kr();
                    e.g.ge == -1 && (g = h);
                    var k = ls(),
                        l = kq(),
                        n = iq(l.R),
                        p = Ru();
                    try {
                        if (p.length > 0) {
                            var q = k.g;
                            q && (n.bs = [q.getWidth(), q.getHeight()]);
                            var u = k.o;
                            u && (n.ps = [u.width, u.height]);
                            P.screen && (n.scs = [P.screen.width, P.screen.height])
                        } else n.url = encodeURIComponent(P.location.href.substring(0, 512)), f.referrer && (n.referrer = encodeURIComponent(f.referrer.substring(0, 512)));
                        n.tt = g;
                        n.pt = Gr;
                        n.bin = l.j;
                        P.google_osd_load_pub_page_exp !== void 0 && (n.olpp = P.google_osd_load_pub_page_exp);
                        n.deb = [1, e.g.Eg, e.g.Ye, e.g.jf, e.g.ge, 0, e.j.j, e.g.Rg, e.g.Qg, e.g.Sg, e.g.hi, -1].join(";");
                        n.tvt = pv(e, h);
                        k.j && (n.inapp = 1);
                        if (P !== null && P != P.top) {
                            p.length > 0 && (n.iframe_loc = encodeURIComponent(P.location.href.substring(0,
                                512)));
                            var w = k.I;
                            n.is = [w.getWidth(), w.getHeight()]
                        }
                    } catch (x) {
                        n.error = 1
                    }
                    kv.l = n
                }
                u = kv.l;
                q = {};
                for (var t in u) q[t] = u[t];
                t = kq().g;
                if (hq(t.l, "prf") == 1) {
                    u = new jr;
                    w = t.g;
                    e = 0;
                    w.g > -1 && (e = w.l.g.now() - w.g);
                    w = w.o + e;
                    if (w != null && typeof w !== "number") throw Error("Value of float/double field must be a number, found " + typeof w + ": " + w);
                    u = Uf(u, 1, w, 0);
                    w = t.g;
                    u = xg(u, 5, w.g > -1 ? w.j + 1 : w.j);
                    u = yg(u, 2, t.j.g.l());
                    u = yg(u, 3, t.j.g.j());
                    t = yg(u, 4, t.j.g.g());
                    u = {};
                    t = (u.pf = ad(t.j()), u)
                } else t = {};
                Ii(q, t);
                Ii(b, d, c, q, a())
            }])
        },
        kv = K(jv);
    var tv = null,
        uv = "",
        vv = !1,
        wv = function() {
            var a = tv || P;
            if (!a) return "";
            var b = [];
            if (!a.location || !a.location.href) return "";
            b.push("url=" + encodeURIComponent(a.location.href.substring(0, 512)));
            a.document && a.document.referrer && b.push("referrer=" + encodeURIComponent(a.document.referrer.substring(0, 512)));
            return b.join("&")
        };

    function xv() {
        var a = "av.default_js_unreleased_RCxx".match(/_(\d{8})_RC\d+$/) || "av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+_\d+$/) || "av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+\.\d+$/) || "av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+_RC\d+$/),
            b;
        if (((b = a) == null ? void 0 : b.length) == 2) return a[1];
        a = "av.default_js_unreleased_RCxx".match(/.*_(\d{2})\.(\d{4})\.\d+_RC\d+$/);
        var c;
        return ((c = a) == null ? void 0 : c.length) == 3 ? "20" + a[1] + a[2] : null
    }
    var yv = function() {
            return "ima_html5_sdk".includes("ima_html5_sdk") ? {
                Ta: "ima",
                Ua: null
            } : "ima_html5_sdk".includes("ima_native_sdk") ? {
                Ta: "nima",
                Ua: null
            } : "ima_html5_sdk".includes("admob-native-video-javascript") ? {
                Ta: "an",
                Ua: null
            } : "av.default_js_unreleased_RCxx".includes("cast_js_sdk") ? {
                Ta: "cast",
                Ua: xv()
            } : "av.default_js_unreleased_RCxx".includes("youtube.player.web") ? {
                Ta: "yw",
                Ua: xv()
            } : "av.default_js_unreleased_RCxx".includes("outstream_web_client") ? {
                Ta: "out",
                Ua: xv()
            } : "av.default_js_unreleased_RCxx".includes("drx_rewarded_web") ? {
                Ta: "r",
                Ua: xv()
            } : "av.default_js_unreleased_RCxx".includes("gam_native_web_video") ? {
                Ta: "n",
                Ua: xv()
            } : "av.default_js_unreleased_RCxx".includes("admob_interstitial_video") ? {
                Ta: "int",
                Ua: xv()
            } : {
                Ta: "j",
                Ua: null
            }
        },
        zv = yv().Ta,
        Av = yv().Ua;
    var Cv = function(a, b) {
            var c = {
                sv: "967"
            };
            Av !== null && (c.v = Av);
            c.cb = zv;
            c.nas = Qu.g.length;
            c.msg = a;
            b !== void 0 && (a = Bv(b)) && (c.e = Sr[a]);
            return c
        },
        Dv = function(a) {
            return a.lastIndexOf("custom_metric_viewable", 0) == 0
        },
        Bv = function(a) {
            var b = Dv(a) ? "custom_metric_viewable" : a.toLowerCase();
            return Ci(function(c) {
                return c == b
            })
        };
    var Ev = {
            Wi: "visible",
            Gi: "audible",
            Vj: "time",
            Xj: "timetype"
        },
        Fv = {
            visible: function(a) {
                return /^(100|[0-9]{1,2})$/.test(a)
            },
            audible: function(a) {
                return a == "0" || a == "1"
            },
            timetype: function(a) {
                return a == "mtos" || a == "tos"
            },
            time: function(a) {
                return /^(100|[0-9]{1,2})%$/.test(a) || /^([0-9])+ms$/.test(a)
            }
        },
        Gv = function() {
            this.g = void 0;
            this.j = !1;
            this.l = 0;
            this.o = -1;
            this.B = "tos"
        },
        Hv = function(a) {
            try {
                var b = a.split(",");
                return b.length > yi(Ev).length ? null : hc(b, function(c, d) {
                    d = d.toLowerCase().split("=");
                    if (d.length != 2 || Fv[d[0]] ===
                        void 0 || !Fv[d[0]](d[1])) throw Error("Entry (" + d[0] + ", " + d[1] + ") is invalid.");
                    c[d[0]] = d[1];
                    return c
                }, {})
            } catch (c) {
                return null
            }
        },
        Iv = function(a, b) {
            if (a.g == void 0) return 0;
            switch (a.B) {
                case "mtos":
                    return a.j ? Zs(b.g, a.g) : Zs(b.j, a.g);
                case "tos":
                    return a.j ? Xs(b.g, a.g) : Xs(b.j, a.g)
            }
            return 0
        };
    var Jv = function(a, b, c, d) {
        au.call(this, b, d);
        this.C = a;
        this.I = c
    };
    r(Jv, au);
    Jv.prototype.getId = function() {
        return this.C
    };
    Jv.prototype.A = function() {
        return !0
    };
    Jv.prototype.g = function(a) {
        var b = a.ua(),
            c = a.getDuration();
        return ic(this.I, function(d) {
            if (d.g != void 0) var e = Iv(d, b);
            else b: {
                switch (d.B) {
                    case "mtos":
                        e = d.j ? b.B.l : b.l.g;
                        break b;
                    case "tos":
                        e = d.j ? b.B.g : b.l.g;
                        break b
                }
                e = 0
            }
            e == 0 ? d = !1 : (d = d.l != -1 ? d.l : c !== void 0 && c > 0 ? d.o * c : -1, d = d != -1 && e >= d);
            return d
        })
    };
    var Kv = function() {};
    r(Kv, Rt);
    Kv.prototype.g = function(a) {
        var b = new Qt;
        b.g = St(a, Nt);
        b.j = St(a, Pt);
        return b
    };
    var Lv = function(a) {
        au.call(this, "fully_viewable_audible_half_duration_impression", a)
    };
    r(Lv, au);
    Lv.prototype.g = function(a) {
        return tu(a)
    };
    var Mv = function(a) {
        this.g = a
    };
    r(Mv, cu);
    var Nv = function(a, b) {
        au.call(this, a, b)
    };
    r(Nv, au);
    Nv.prototype.g = function(a) {
        return a.ua().jb()
    };
    var Ov = function(a) {
        bu.call(this, "measurable_impression", a)
    };
    r(Ov, bu);
    Ov.prototype.g = function(a) {
        var b = oc(this.C, hq(kq().R, "ovms"));
        return !a.fb && (a.oa != 0 || b)
    };
    var Pv = function() {
        Mv.apply(this, arguments)
    };
    r(Pv, Mv);
    Pv.prototype.j = function() {
        return new Ov(this.g)
    };
    Pv.prototype.l = function() {
        return [new Nv("viewable_impression", this.g), new Lv(this.g)]
    };
    var Qv = function(a, b, c) {
        gu.call(this, a, b, c)
    };
    r(Qv, gu);
    Qv.prototype.B = function() {
        var a = Wa("ima.admob.getViewability"),
            b = hq(this.R, "queryid");
        typeof a === "function" && b && a(b)
    };
    Qv.prototype.getName = function() {
        return "gsv"
    };
    var Rv = function(a) {
        a = a === void 0 ? P : a;
        zs.call(this, new ps(a, 2))
    };
    r(Rv, zs);
    Rv.prototype.getName = function() {
        return "gsv"
    };
    Rv.prototype.qc = function() {
        var a = ls();
        kq();
        return a.j && !1
    };
    Rv.prototype.Nc = function(a, b, c) {
        return new Qv(this.g, b, c)
    };
    var Sv = function(a, b, c) {
        gu.call(this, a, b, c)
    };
    r(Sv, gu);
    Sv.prototype.B = function() {
        var a = this,
            b = Wa("ima.bridge.getNativeViewability"),
            c = hq(this.R, "queryid");
        typeof b === "function" && c && b(c, function(d) {
            Ei(d) && a.I++;
            var e = d.opt_nativeViewVisibleBounds || {},
                f = d.opt_nativeViewHidden;
            a.g = bs(d.opt_nativeViewBounds || {});
            var g = a.l.o;
            g.g = f ? Zj(fu) : bs(e);
            a.timestamp = d.opt_nativeTime || -1;
            ls().g = g.g;
            d = d.opt_nativeVolume;
            d !== void 0 && (g.volume = d)
        })
    };
    Sv.prototype.getName = function() {
        return "nis"
    };
    var Tv = function(a) {
        a = a === void 0 ? P : a;
        zs.call(this, new ps(a, 2))
    };
    r(Tv, zs);
    Tv.prototype.getName = function() {
        return "nis"
    };
    Tv.prototype.qc = function() {
        var a = ls();
        kq();
        return a.j && !1
    };
    Tv.prototype.Nc = function(a, b, c) {
        return new Sv(this.g, b, c)
    };
    var Uv = function() {
        ps.call(this, P, 2, "mraid");
        this.da = 0;
        this.K = this.M = !1;
        this.I = null;
        this.j = Tr(this.l);
        this.o.g = new J(0, 0, 0, 0);
        this.ia = !1
    };
    r(Uv, ps);
    Uv.prototype.G = function() {
        return this.j.Na != null
    };
    Uv.prototype.ba = function() {
        var a = {};
        this.da && (a.mraid = this.da);
        this.M && (a.mlc = 1);
        a.mtop = this.j.gi;
        this.I && (a.mse = this.I);
        this.ia && (a.msc = 1);
        a.mcp = this.j.Wc;
        return a
    };
    Uv.prototype.A = function(a) {
        var b = Ra.apply(1, arguments);
        try {
            return this.j.Na[a].apply(this.j.Na, b)
        } catch (c) {
            Dr(538, c, .01, function(d) {
                d.method = a
            })
        }
    };
    var Vv = function(a, b, c) {
        a.A("addEventListener", b, c)
    };
    Uv.prototype.initialize = function() {
        var a = this;
        if (this.Ca) return !this.Bc();
        this.Ca = !0;
        if (this.j.Wc === 2) return this.I = "ng", rs(this, "w"), !1;
        if (this.j.Wc === 1) return this.I = "mm", rs(this, "w"), !1;
        ls().L = !0;
        this.l.document.readyState && this.l.document.readyState == "complete" ? Wv(this) : kt(this.l, "load", function() {
            fr().setTimeout(Cr(292, function() {
                return Wv(a)
            }), 100)
        }, 292);
        return !0
    };
    var Wv = function(a) {
            kq().o = !!a.A("isViewable");
            Vv(a, "viewableChange", Xv);
            a.A("getState") === "loading" ? Vv(a, "ready", Yv) : Zv(a)
        },
        Zv = function(a) {
            typeof a.j.Na.AFMA_LIDAR === "string" ? (a.M = !0, $v(a)) : (a.j.Wc = 3, a.I = "nc", rs(a, "w"))
        },
        $v = function(a) {
            a.K = !1;
            var b = hq(kq().R, "rmmt") == 1,
                c = !!a.A("isViewable");
            (b ? !c : 1) && fr().setTimeout(Cr(524, function() {
                a.K || (aw(a), Dr(540, Error()), a.I = "mt", rs(a, "w"))
            }), 500);
            bw(a);
            Vv(a, a.j.Na.AFMA_LIDAR, cw)
        },
        bw = function(a) {
            var b = hq(kq().R, "sneio") == 1,
                c = a.j.Na.AFMA_LIDAR_EXP_1 !== void 0,
                d = a.j.Na.AFMA_LIDAR_EXP_2 !== void 0;
            (b = b && d) && (a.j.Na.AFMA_LIDAR_EXP_2 = !0);
            c && (a.j.Na.AFMA_LIDAR_EXP_1 = !b)
        },
        aw = function(a) {
            a.A("removeEventListener", a.j.Na.AFMA_LIDAR, cw);
            a.M = !1
        };
    Uv.prototype.U = function() {
        var a = ls(),
            b = dw(this, "getMaxSize");
        a.g = new J(0, b.width, b.height, 0)
    };
    Uv.prototype.V = function() {
        ls().B = dw(this, "getScreenSize")
    };
    var dw = function(a, b) {
        if (a.A("getState") === "loading") return new Ij(-1, -1);
        b = a.A(b);
        if (!b) return new Ij(-1, -1);
        a = parseInt(b.width, 10);
        b = parseInt(b.height, 10);
        return isNaN(a) || isNaN(b) ? new Ij(-1, -1) : new Ij(a, b)
    };
    Uv.prototype.dispose = function() {
        aw(this);
        ps.prototype.dispose.call(this)
    };
    var Yv = function() {
            try {
                var a = K(Uv);
                a.A("removeEventListener", "ready", Yv);
                Zv(a)
            } catch (b) {
                Dr(541, b)
            }
        },
        cw = function(a, b) {
            try {
                var c = K(Uv);
                c.K = !0;
                var d = a ? new J(a.y, a.x + a.width, a.y + a.height, a.x) : new J(0, 0, 0, 0);
                var e = Kr(),
                    f = ms();
                var g = new Mr(e, f, c);
                g.g = d;
                g.volume = b;
                c.Bb(g)
            } catch (h) {
                Dr(542, h)
            }
        },
        Xv = function(a) {
            var b = kq(),
                c = K(Uv);
            a && !b.o && (b.o = !0, c.ia = !0, c.I && rs(c, "w", !0))
        };
    var or = new function(a, b) {
        this.key = a;
        this.defaultValue = b === void 0 ? !1 : b;
        this.valueType = "boolean"
    }("45378663");
    var fw = function() {
        this.l = this.Ca = !1;
        this.g = this.j = null;
        var a = {};
        this.P = (a.start = this.rh, a.firstquartile = this.mh, a.midpoint = this.oh, a.thirdquartile = this.sh, a.complete = this.ih, a.error = this.jh, a.pause = this.xe, a.resume = this.Lf, a.skip = this.qh, a.viewable_impression = this.Wa, a.mute = this.kc, a.unmute = this.kc, a.fullscreen = this.nh, a.exitfullscreen = this.kh, a.fully_viewable_audible_half_duration_impression = this.Wa, a.measurable_impression = this.Wa, a.abandon = this.xe, a.engagedview = this.Wa, a.impression = this.Wa, a.creativeview =
            this.Wa, a.progress = this.kc, a.custom_metric_viewable = this.Wa, a.bufferstart = this.xe, a.bufferfinish = this.Lf, a.audio_measurable = this.Wa, a.audio_audible = this.Wa, a);
        a = {};
        this.V = (a.overlay_resize = this.ph, a.abandon = this.fe, a.close = this.fe, a.collapse = this.fe, a.overlay_unmeasurable_impression = function(b) {
            return Au(b, "overlay_unmeasurable_impression", ms())
        }, a.overlay_viewable_immediate_impression = function(b) {
            return Au(b, "overlay_viewable_immediate_impression", ms())
        }, a.overlay_unviewable_impression = function(b) {
            return Au(b,
                "overlay_unviewable_impression", ms())
        }, a.overlay_viewable_end_of_session_impression = function(b) {
            return Au(b, "overlay_viewable_end_of_session_impression", ms())
        }, a);
        kq().j = 3;
        ew(this);
        this.I = null
    };
    fw.prototype.B = function(a) {
        vt(a, !1);
        Tu(a)
    };
    fw.prototype.L = function() {};
    var gw = function(a, b, c, d) {
        a = a.A(null, d, !0, b);
        a.B = c;
        Uu([a]);
        return a
    };
    fw.prototype.A = function(a, b, c, d) {
        var e = this;
        a = new ku(P, a, c ? b : -1, 7, this.Xd(), this.hf());
        a.pa = d;
        fq(a.R);
        gq(a.R, "queryid", a.pa);
        a.ze("");
        At(a, function() {
            return e.M.apply(e, ta(Ra.apply(0, arguments)))
        }, function() {
            return e.U.apply(e, ta(Ra.apply(0, arguments)))
        });
        (d = K(Wu).g) && wt(a, d);
        this.I && (a.X && (a.X.A = this.I), this.I = null);
        a.Ba.Db && K(iv);
        return a
    };
    var hw = function(a, b, c) {
            Op(b);
            var d = a.g;
            cc(b, function(e) {
                var f = fc(e.g, function(g) {
                    var h = Hv(g);
                    if (h == null) g = null;
                    else if (g = new Gv, h.visible != null && (g.g = h.visible / 100), h.audible != null && (g.j = h.audible == 1), h.time != null) {
                        var k = h.timetype == "mtos" ? "mtos" : "tos",
                            l = Ab(h.time, "%") ? "%" : "ms";
                        h = parseInt(h.time, 10);
                        l == "%" && (h /= 100);
                        l == "ms" ? (g.l = h, g.o = -1) : (g.l = -1, g.o = h);
                        g.B = k === void 0 ? "tos" : k
                    }
                    return g
                });
                ic(f, function(g) {
                    return g == null
                }) || ru(c, new Jv(e.id, e.event, f, d))
            })
        },
        iw = function() {
            var a = [],
                b = kq();
            a.push(K(hv));
            hq(b.R, "mvp_lv") && a.push(K(Uv));
            b = [new Rv, new Tv];
            b.push(new Zu(a));
            b.push(new fv(P));
            return b
        },
        kw = function(a) {
            if (!a.Ca) {
                a.Ca = !0;
                try {
                    var b = Kr(),
                        c = kq(),
                        d = ls();
                    Gr = b;
                    c.l = 79463069;
                    a.j !== "o" && (tv = Ej(P));
                    if (gr()) {
                        kv.g.Ye = 0;
                        kv.g.ge = Kr() - b;
                        var e = iw(),
                            f = K(Wu);
                        f.j = e;
                        Xu(f, function() {
                            jw()
                        }) ? kv.done || (qv(), ts(f.g.g, a), mv()) : d.l ? jw() : mv()
                    } else vv = !0
                } catch (g) {
                    throw Qu.reset(), g;
                }
            }
        },
        lw = function(a) {
            kv.j.cancel();
            uv = a;
            kv.done = !0
        },
        mw = function(a) {
            if (a.j) return a.j;
            var b = K(Wu).g;
            if (b) switch (b.getName()) {
                case "nis":
                    a.j =
                        "n";
                    break;
                case "gsv":
                    a.j = "m"
            }
            a.j || (a.j = "h");
            return a.j
        },
        nw = function(a, b, c) {
            if (a.g == null) return b.lc |= 4, !1;
            a = a.g.report(c, b);
            b.lc |= a;
            return a == 0
        };
    fw.prototype.dc = function(a) {
        switch (a.bb()) {
            case 0:
                if (a = K(Wu).g) a = a.g, pc(a.B, this), a.F && this.Ya() && vs(a);
                jw();
                break;
            case 2:
                mv()
        }
    };
    fw.prototype.Bb = function() {};
    fw.prototype.Ya = function() {
        return !1
    };
    var jw = function() {
        var a = [new fv(P)],
            b = K(Wu);
        b.j = a;
        Xu(b, function() {
            lw("i")
        }) ? kv.done || (qv(), mv()) : lw("i")
    };
    fw.prototype.U = function(a, b) {
        a.fb = !0;
        switch (a.Ha()) {
            case 1:
                ow(a, b);
                break;
            case 2:
                this.Fe(a)
        }
        this.Je(a)
    };
    var ow = function(a, b) {
        if (!a.Hb) {
            var c = Au(a, "start", ms());
            c = a.ye.g(c).g;
            var d = {
                id: "lidarv"
            };
            d.r = b;
            d.sv = "967";
            Av !== null && (d.v = Av);
            fp(c, function(e, f) {
                return d[e] = e == "mtos" || e == "tos" ? f : encodeURIComponent(f)
            });
            b = wv();
            fp(b, function(e, f) {
                return d[e] = encodeURIComponent(f)
            });
            b = "//pagead2.googlesyndication.com/pagead/gen_204?" + Hs(Fs(new Ds, d));
            Ks(b);
            a.Hb = !0
        }
    };
    m = fw.prototype;
    m.rh = function(a) {
        var b = a.C(a);
        b && (b = b.volume, a.Aa = cs(b) && b > 0);
        xu(a, 0);
        return Au(a, "start", ms())
    };
    m.kc = function(a, b, c) {
        nv(kv, [a], !ms());
        return this.Wa(a, b, c)
    };
    m.Wa = function(a, b, c) {
        return Au(a, c, ms())
    };
    m.mh = function(a) {
        return pw(a, "firstquartile", 1)
    };
    m.oh = function(a) {
        a.ia = !0;
        return pw(a, "midpoint", 2)
    };
    m.sh = function(a) {
        return pw(a, "thirdquartile", 3)
    };
    m.ih = function(a) {
        var b = pw(a, "complete", 4);
        lu(a);
        return b
    };
    m.jh = function(a) {
        a.oa = 3;
        return Au(a, "error", ms())
    };
    var pw = function(a, b, c) {
        nv(kv, [a], !ms());
        xu(a, c);
        c != 4 && wu(a.M, c, a.cd);
        return Au(a, b, ms())
    };
    m = fw.prototype;
    m.Lf = function(a, b, c) {
        b = ms();
        a.oa != 2 || b || (a.ua().I = Kr());
        nv(kv, [a], !b);
        a.oa == 2 && (a.oa = 1);
        return Au(a, c, b)
    };
    m.qh = function(a, b) {
        b = this.kc(a, b || {}, "skip");
        lu(a);
        return b
    };
    m.nh = function(a, b) {
        vt(a, !0);
        return this.kc(a, b || {}, "fullscreen")
    };
    m.kh = function(a, b) {
        vt(a, !1);
        return this.kc(a, b || {}, "exitfullscreen")
    };
    m.xe = function(a, b, c) {
        b = a.ua();
        b.ba = Zt(b, Kr(), a.oa != 1);
        nv(kv, [a], !ms());
        a.oa == 1 && (a.oa = 2);
        return Au(a, c, ms())
    };
    m.ph = function(a) {
        nv(kv, [a], !ms());
        return a.j()
    };
    m.fe = function(a) {
        nv(kv, [a], !ms());
        this.If(a);
        lu(a);
        return a.j()
    };
    var ew = function(a) {
            rv(function() {
                var b = qw();
                a.j != null && (b.sdk = a.j);
                var c = K(Wu);
                c.g != null && (b.avms = c.g.getName());
                return b
            })
        },
        rw = function(a, b, c, d) {
            var e = Ou(Qu, c);
            e !== null && e.pa !== b && (a.B(e), e = null);
            e || (b = a.A(c, Kr(), !1, b), Qu.j.length == 0 && (kq().l = 79463069), Vu([b]), e = b, e.B = mw(a), d && (e.Fb = d));
            return e
        };
    fw.prototype.M = function() {};
    var uw = function(a, b) {
        b.F = 0;
        for (var c in Or) a[c] == null && (b.F |= Or[c]);
        tw(a, "currentTime");
        tw(a, "duration")
    };
    m = fw.prototype;
    m.Fe = function() {};
    m.If = function() {};
    m.Ue = function() {};
    m.Je = function() {};
    m.Yd = function() {};
    m.hf = function() {
        this.g || (this.g = this.Yd());
        return this.g == null || this.l ? new du : new Pv(this.g)
    };
    m.Xd = function() {
        return new Kv
    };
    var tw = function(a, b) {
            var c = a[b];
            c !== void 0 && c > 0 && (a[b] = Math.floor(c * 1E3))
        },
        qw = function() {
            var a = ls(),
                b = {},
                c = {},
                d = {};
            return Object.assign({}, (b.sv = "967", b), Av !== null && (c.v = Av, c), (d["if"] = a.l ? "1" : "0", d.nas = String(Qu.g.length), d))
        };
    var vw = function(a) {
        au.call(this, "audio_audible", a)
    };
    r(vw, au);
    vw.prototype.g = function(a) {
        return a.Zc() == 4
    };
    var ww = function(a) {
        bu.call(this, "audio_measurable", a)
    };
    r(ww, bu);
    ww.prototype.g = function(a) {
        a = a.Zc();
        return a == 3 || a == 4
    };
    var xw = function() {
        Mv.apply(this, arguments)
    };
    r(xw, Mv);
    xw.prototype.j = function() {
        return new ww(this.g)
    };
    xw.prototype.l = function() {
        return [new vw(this.g)]
    };
    var yw = function() {};
    r(yw, Rt);
    yw.prototype.g = function(a) {
        a && (a.e === 28 && (a = Object.assign({}, a, {
            avas: 3
        })), a.vs === 4 || a.vs === 5) && (a = Object.assign({}, a, {
            vs: 3
        }));
        var b = new Qt;
        b.g = St(a, Ot);
        b.j = St(a, Pt);
        return b
    };
    var zw = function(a) {
        this.j = a
    };
    zw.prototype.report = function(a, b) {
        var c = this.g(b);
        if (typeof c === "function") {
            var d = {};
            var e = {};
            d = Object.assign({}, Av !== null && (d.v = Av, d), (e.sv = "967", e.cb = zv, e.e = Aw(a), e));
            e = Au(b, a, ms());
            Ii(d, e);
            b.Zf[a] = e;
            d = b.Ha() == 2 ? Js(d).join("&") : b.ye.g(d).g;
            try {
                return c(b.pa, d, a), 0
            } catch (f) {
                return 2
            }
        } else return 1
    };
    var Aw = function(a) {
        var b = Dv(a) ? "custom_metric_viewable" : a;
        a = Ci(function(c) {
            return c == b
        });
        return Sr[a]
    };
    zw.prototype.g = function() {
        return Wa(this.j)
    };
    var Bw = function(a, b) {
        this.j = a;
        this.l = b
    };
    r(Bw, zw);
    Bw.prototype.g = function(a) {
        if (!a.Fb) return zw.prototype.g.call(this, a);
        if (this.l[a.Fb]) return function() {};
        Dr(393, Error());
        return null
    };
    var Cw = function() {
        fw.call(this);
        this.G = void 0;
        this.H = null;
        this.F = !1;
        this.o = {};
        this.K = 0;
        this.C = "ACTIVE_VIEW_TRAFFIC_TYPE_UNSPECIFIED"
    };
    r(Cw, fw);
    Cw.prototype.L = function(a, b) {
        var c = this,
            d = K(Wu);
        if (d.g != null) switch (d.g.getName()) {
            case "nis":
                var e = Dw(this, a, b);
                break;
            case "gsv":
                e = Ew(this, a, b);
                break;
            case "exc":
                e = Fw(this, a)
        }
        e || (b.opt_overlayAdElement ? e = void 0 : b.opt_adElement && (e = rw(this, a, b.opt_adElement, b.opt_osdId)));
        e && e.Ha() == 1 && (e.C == ni && (e.C = function(f) {
            return c.Ue(f)
        }), Gw(this, e, b));
        return e
    };
    var Gw = function(a, b, c) {
        c = c.opt_configurable_tracking_events;
        a.g != null && Array.isArray(c) && hw(a, c, b)
    };
    Cw.prototype.Ue = function(a) {
        a.j = 0;
        a.P = 0;
        if (a.B == "h" || a.B == "n") {
            var b;
            kq();
            if (a.Fb && Hw(this)) {
                var c = this.o[a.Fb];
                c ? b = function(e) {
                    return Iw(c, e)
                } : c !== null && Dr(379, Error())
            } else b = Wa("ima.common.getVideoMetadata");
            if (typeof b === "function") try {
                var d = b(a.pa)
            } catch (e) {
                a.j |= 4
            } else a.j |= 2
        } else if (a.B == "b")
            if (b = Wa("ytads.bulleit.getVideoMetadata"), typeof b === "function") try {
                d = b(a.pa)
            } catch (e) {
                a.j |= 4
            } else a.j |= 2;
            else if (a.B == "ml")
            if (b = Wa("ima.common.getVideoMetadata"), typeof b === "function") try {
                d = b(a.pa)
            } catch (e) {
                a.j |=
                    4
            } else a.j |= 2;
            else a.j |= 1;
        a.j || (d === void 0 ? a.j |= 8 : d === null ? a.j |= 16 : Ei(d) ? a.j |= 32 : d.errorCode != null && (a.P = d.errorCode, a.j |= 64));
        d == null && (d = {});
        uw(d, a);
        cs(d.volume) && cs(this.G) && (d.volume *= this.G);
        return d
    };
    var Ew = function(a, b, c) {
            var d = Nu(Qu, b);
            d || (d = c.opt_nativeTime || -1, d = gw(a, b, mw(a), d), c.opt_osdId && (d.Fb = c.opt_osdId));
            return d
        },
        Dw = function(a, b, c) {
            var d = Nu(Qu, b);
            d || (d = gw(a, b, "n", c.opt_nativeTime || -1));
            return d
        },
        Fw = function(a, b) {
            var c = Nu(Qu, b);
            c || (c = gw(a, b, "h", -1));
            return c
        };
    Cw.prototype.Yd = function() {
        if (Hw(this)) return new Bw("ima.common.triggerExternalActivityEvent", this.o);
        var a = Jw(this);
        return a != null ? new zw(a) : null
    };
    var Jw = function(a) {
        kq();
        switch (mw(a)) {
            case "b":
                return "ytads.bulleit.triggerExternalActivityEvent";
            case "n":
                return "ima.bridge.triggerExternalActivityEvent";
            case "h":
            case "m":
            case "ml":
                return "ima.common.triggerExternalActivityEvent"
        }
        return null
    };
    Cw.prototype.Fe = function(a) {
        !a.g && a.fb && nw(this, a, "overlay_unmeasurable_impression") && (a.g = !0)
    };
    Cw.prototype.If = function(a) {
        a.Pf && (a.jb() ? nw(this, a, "overlay_viewable_end_of_session_impression") : nw(this, a, "overlay_unviewable_impression"), a.Pf = !1)
    };
    var Kw = function(a, b, c, d) {
        c = c === void 0 ? {} : c;
        var e = {};
        Ii(e, {
            opt_adElement: void 0,
            opt_fullscreen: void 0
        }, c);
        var f = a.L(b, c);
        c = f ? f.ye : a.Xd();
        if (e.opt_bounds) return c.g(Cv("ol", d));
        if (d !== void 0)
            if (Bv(d) !== void 0)
                if (vv) a = Cv("ue", d);
                else if (kw(a), uv == "i") a = Cv("i", d), a["if"] = 0;
        else if (b = a.L(b, e)) {
            b: {
                uv == "i" && (b.fb = !0, a.Je(b));f = e.opt_fullscreen;f !== void 0 && vt(b, !!f);
                var g;
                if (f = !ls().j && !gs()) fr(),
                f = wm(nq) === 0;
                if (g = f) {
                    switch (b.Ha()) {
                        case 1:
                            ow(b, "pv");
                            break;
                        case 2:
                            a.Fe(b)
                    }
                    lw("pv")
                }
                f = d.toLowerCase();
                if (g = !g) c: {
                    if (hq(kq().R,
                            "ssmol") && (g = a.l, f === "loaded")) break c;g = oc(Pr, f)
                }
                if (g && b.oa == 0) {
                    uv != "i" && (kv.done = !1);
                    g = e !== void 0 ? e.opt_nativeTime : void 0;
                    Ir = g = typeof g === "number" ? g : Kr();
                    b.xc = !0;
                    var h = ms();
                    b.oa = 1;
                    b.na = {};
                    b.na.start = !1;
                    b.na.firstquartile = !1;
                    b.na.midpoint = !1;
                    b.na.thirdquartile = !1;
                    b.na.complete = !1;
                    b.na.resume = !1;
                    b.na.pause = !1;
                    b.na.skip = !1;
                    b.na.mute = !1;
                    b.na.unmute = !1;
                    b.na.viewable_impression = !1;
                    b.na.measurable_impression = !1;
                    b.na.fully_viewable_audible_half_duration_impression = !1;
                    b.na.fullscreen = !1;
                    b.na.exitfullscreen = !1;
                    b.Zd = 0;
                    h || (b.ua().I = g);
                    nv(kv, [b], !h)
                }(g = b.Vb[f]) && b.ha.reportEvent(g);hq(kq().R, "fmd") || oc(Qr, f) && b.lb && b.lb.j(b, null);
                switch (b.Ha()) {
                    case 1:
                        var k = Dv(f) ? a.P.custom_metric_viewable : a.P[f];
                        break;
                    case 2:
                        k = a.V[f]
                }
                if (k && (d = k.call(a, b, e, d), hq(kq().R, "fmd") && oc(Qr, f) && b.lb && b.lb.j(b, null), d !== void 0)) {
                    e = Cv(void 0, f);
                    Ii(e, d);
                    d = e;
                    break b
                }
                d = void 0
            }
            b.oa == 3 && a.B(b);a = d
        }
        else a = Cv("nf", d);
        else a = void 0;
        else vv ? a = Cv("ue") : f ? (a = Cv(), Ii(a, zu(f, !0, !1, !1))) : a = Cv("nf");
        return typeof a === "string" ? c.g() : c.g(a)
    };
    Cw.prototype.M = function(a) {
        this.l && a.Ha() == 1 && Lw(this, a)
    };
    Cw.prototype.Je = function(a) {
        this.l && a.Ha() == 1 && Lw(this, a)
    };
    var Lw = function(a, b) {
            var c;
            if (b.Fb && Hw(a)) {
                var d = a.o[b.Fb];
                d ? c = function(f, g) {
                    Mw(d, f, g)
                } : d !== null && Dr(379, Error())
            } else c = Wa("ima.common.triggerViewabilityMeasurementUpdate");
            if (typeof c === "function") {
                var e = uu(b);
                e.nativeVolume = a.G;
                c(b.pa, e)
            }
        },
        Hw = function(a) {
            return (kq(), mw(a) != "h" && mw(a) != "m") ? !1 : a.K != 0
        };
    Cw.prototype.A = function(a, b, c, d) {
        if (pr()) {
            var e = hq(kq().R, "mm"),
                f = {};
            (e = (f[Rp.bg] = "ACTIVE_VIEW_TRAFFIC_TYPE_AUDIO", f[Rp.VIDEO] = "ACTIVE_VIEW_TRAFFIC_TYPE_VIDEO", f)[e]) && e && (this.C = e);
            this.C === "ACTIVE_VIEW_TRAFFIC_TYPE_UNSPECIFIED" && Dr(1044, Error())
        }
        a = fw.prototype.A.call(this, a, b, c, d);
        this.F && (b = this.H, a.o == null && (a.o = new Dt), b.g[a.pa] = a.o, a.o.B = Du);
        return a
    };
    Cw.prototype.B = function(a) {
        a && a.Ha() == 1 && this.F && delete this.H.g[a.pa];
        return fw.prototype.B.call(this, a)
    };
    Cw.prototype.hf = function() {
        this.g || (this.g = this.Yd());
        return this.g == null || this.l ? new du : this.C === "ACTIVE_VIEW_TRAFFIC_TYPE_AUDIO" ? new xw(this.g) : new Pv(this.g)
    };
    Cw.prototype.Xd = function() {
        return this.C === "ACTIVE_VIEW_TRAFFIC_TYPE_AUDIO" ? new yw : new Kv
    };
    var Nw = function(a) {
            var b = {};
            return b.viewability = a.g, b.googleViewability = a.j, b
        },
        Ow = function(a, b, c) {
            c = c === void 0 ? {} : c;
            a = Kw(K(Cw), b, c, a);
            return Nw(a)
        },
        Pw = Cr(193, Ow, void 0, qw);
    z("Goog_AdSense_Lidar_sendVastEvent", Pw);
    var Qw = Cr(194, function(a, b) {
        b = b === void 0 ? {} : b;
        a = Kw(K(Cw), a, b);
        return Nw(a)
    });
    z("Goog_AdSense_Lidar_getViewability", Qw);
    var Rw = Cr(195, function() {
        return hr()
    });
    z("Goog_AdSense_Lidar_getUrlSignalsArray", Rw);
    var Sw = Cr(196, function() {
        return JSON.stringify(hr())
    });
    z("Goog_AdSense_Lidar_getUrlSignalsList", Sw);
    var Tw = va(["//ep2.adtrafficquality.google/sodar/", ""]),
        Uw = va(["//tpc.googlesyndication.com/sodar/", ""]);
    y.console && typeof y.console.log === "function" && kb(y.console.log, y.console);
    var Vw = function(a) {
        for (var b = [], c = a = Qj(a.ownerDocument); c != a.top; c = c.parent)
            if (c.frameElement) b.push(c.frameElement);
            else break;
        return b
    };
    var Ww = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = !1
    };
    Ww.prototype.preventDefault = function() {
        this.defaultPrevented = !0
    };
    var Xw = function(a, b) {
        Ww.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.rc = null;
        a && this.init(a, b)
    };
    pb(Xw, Ww);
    Xw.prototype.init = function(a, b) {
        var c = this.type = a.type,
            d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        b = a.relatedTarget;
        b || (c == "mouseover" ? b = a.fromElement : c == "mouseout" && (b = a.toElement));
        this.relatedTarget = b;
        d ? (this.clientX = d.clientX !== void 0 ? d.clientX : d.pageX, this.clientY = d.clientY !== void 0 ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = a.clientX !== void 0 ? a.clientX : a.pageX, this.clientY =
            a.clientY !== void 0 ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = a.pointerType;
        this.state = a.state;
        this.rc = a;
        a.defaultPrevented && Xw.Za.preventDefault.call(this)
    };
    Xw.prototype.preventDefault = function() {
        Xw.Za.preventDefault.call(this);
        var a = this.rc;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    };
    var Yw = "closure_listenable_" + (Math.random() * 1E6 | 0),
        Zw = function(a) {
            return !(!a || !a[Yw])
        };
    var $w = 0;
    var ax = function(a, b, c, d, e) {
            this.listener = a;
            this.proxy = null;
            this.src = b;
            this.type = c;
            this.capture = !!d;
            this.handler = e;
            this.key = ++$w;
            this.Lc = this.Tc = !1
        },
        bx = function(a) {
            a.Lc = !0;
            a.listener = null;
            a.proxy = null;
            a.src = null;
            a.handler = null
        };

    function cx(a) {
        this.src = a;
        this.g = {};
        this.j = 0
    }
    cx.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.g[f];
        a || (a = this.g[f] = [], this.j++);
        var g = dx(a, b, d, e);
        g > -1 ? (b = a[g], c || (b.Tc = !1)) : (b = new ax(b, this.src, f, !!d, e), b.Tc = c, a.push(b));
        return b
    };
    cx.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.g)) return !1;
        var e = this.g[a];
        b = dx(e, b, c, d);
        return b > -1 ? (bx(e[b]), qc(e, b), e.length == 0 && (delete this.g[a], this.j--), !0) : !1
    };
    var ex = function(a, b) {
        var c = b.type;
        c in a.g && pc(a.g[c], b) && (bx(b), a.g[c].length == 0 && (delete a.g[c], a.j--))
    };
    cx.prototype.zc = function(a, b, c, d) {
        a = this.g[a.toString()];
        var e = -1;
        a && (e = dx(a, b, c, d));
        return e > -1 ? a[e] : null
    };
    var dx = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.Lc && f.listener == b && f.capture == !!c && f.handler == d) return e
        }
        return -1
    };
    var fx = "closure_lm_" + (Math.random() * 1E6 | 0),
        gx = {},
        hx = 0,
        jx = function(a, b, c, d, e) {
            if (d && d.once) return ix(a, b, c, d, e);
            if (Array.isArray(b)) {
                for (var f = 0; f < b.length; f++) jx(a, b[f], c, d, e);
                return null
            }
            c = kx(c);
            return Zw(a) ? a.listen(b, c, bb(d) ? !!d.capture : !!d, e) : lx(a, b, c, !1, d, e)
        },
        lx = function(a, b, c, d, e, f) {
            if (!b) throw Error("Invalid event type");
            var g = bb(e) ? !!e.capture : !!e,
                h = mx(a);
            h || (a[fx] = h = new cx(a));
            c = h.add(b, c, d, g, f);
            if (c.proxy) return c;
            d = nx();
            c.proxy = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) Gj || (e = g), e ===
                void 0 && (e = !1), a.addEventListener(b.toString(), d, e);
            else if (a.attachEvent) a.attachEvent(ox(b.toString()), d);
            else if (a.addListener && a.removeListener) a.addListener(d);
            else throw Error("addEventListener and attachEvent are unavailable.");
            hx++;
            return c
        },
        nx = function() {
            var a = px,
                b = function(c) {
                    return a.call(b.src, b.listener, c)
                };
            return b
        },
        ix = function(a, b, c, d, e) {
            if (Array.isArray(b)) {
                for (var f = 0; f < b.length; f++) ix(a, b[f], c, d, e);
                return null
            }
            c = kx(c);
            return Zw(a) ? a.Ec(b, c, bb(d) ? !!d.capture : !!d, e) : lx(a, b, c, !0, d,
                e)
        },
        qx = function(a, b, c, d, e) {
            if (Array.isArray(b))
                for (var f = 0; f < b.length; f++) qx(a, b[f], c, d, e);
            else d = bb(d) ? !!d.capture : !!d, c = kx(c), Zw(a) ? a.ab(b, c, d, e) : a && (a = mx(a)) && (b = a.zc(b, c, d, e)) && rx(b)
        },
        rx = function(a) {
            if (typeof a !== "number" && a && !a.Lc) {
                var b = a.src;
                if (Zw(b)) ex(b.B, a);
                else {
                    var c = a.type,
                        d = a.proxy;
                    b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(ox(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                    hx--;
                    (c = mx(b)) ? (ex(c, a), c.j == 0 && (c.src = null, b[fx] = null)) :
                    bx(a)
                }
            }
        },
        ox = function(a) {
            return a in gx ? gx[a] : gx[a] = "on" + a
        },
        px = function(a, b) {
            if (a.Lc) a = !0;
            else {
                b = new Xw(b, this);
                var c = a.listener,
                    d = a.handler || a.src;
                a.Tc && rx(a);
                a = c.call(d, b)
            }
            return a
        },
        mx = function(a) {
            a = a[fx];
            return a instanceof cx ? a : null
        },
        sx = "__closure_events_fn_" + (Math.random() * 1E9 >>> 0),
        kx = function(a) {
            if (typeof a === "function") return a;
            a[sx] || (a[sx] = function(b) {
                return a.handleEvent(b)
            });
            return a[sx]
        };
    var R = function() {
        Q.call(this);
        this.B = new cx(this);
        this.Hb = this;
        this.ia = null
    };
    pb(R, Q);
    R.prototype[Yw] = !0;
    m = R.prototype;
    m.addEventListener = function(a, b, c, d) {
        jx(this, a, b, c, d)
    };
    m.removeEventListener = function(a, b, c, d) {
        qx(this, a, b, c, d)
    };
    m.dispatchEvent = function(a) {
        var b, c = this.ia;
        if (c)
            for (b = []; c; c = c.ia) b.push(c);
        c = this.Hb;
        var d = a.type || a;
        if (typeof a === "string") a = new Ww(a, c);
        else if (a instanceof Ww) a.target = a.target || c;
        else {
            var e = a;
            a = new Ww(d, c);
            Ii(a, e)
        }
        e = !0;
        var f;
        if (b)
            for (f = b.length - 1; f >= 0; f--) {
                var g = a.currentTarget = b[f];
                e = tx(g, d, !0, a) && e
            }
        g = a.currentTarget = c;
        e = tx(g, d, !0, a) && e;
        e = tx(g, d, !1, a) && e;
        if (b)
            for (f = 0; f < b.length; f++) g = a.currentTarget = b[f], e = tx(g, d, !1, a) && e;
        return e
    };
    m.O = function() {
        R.Za.O.call(this);
        this.Ee();
        this.ia = null
    };
    m.listen = function(a, b, c, d) {
        return this.B.add(String(a), b, !1, c, d)
    };
    m.Ec = function(a, b, c, d) {
        return this.B.add(String(a), b, !0, c, d)
    };
    m.ab = function(a, b, c, d) {
        this.B.remove(String(a), b, c, d)
    };
    m.Ee = function() {
        if (this.B) {
            var a = this.B,
                b = 0,
                c;
            for (c in a.g) {
                for (var d = a.g[c], e = 0; e < d.length; e++) ++b, bx(d[e]);
                delete a.g[c];
                a.j--
            }
        }
    };
    var tx = function(a, b, c, d) {
        b = a.B.g[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.Lc && g.capture == c) {
                var h = g.listener,
                    k = g.handler || g.src;
                g.Tc && ex(a.B, g);
                e = h.call(k, d) !== !1 && e
            }
        }
        return e && !d.defaultPrevented
    };
    R.prototype.zc = function(a, b, c, d) {
        return this.B.zc(String(a), b, c, d)
    };
    var ux = typeof AsyncContext !== "undefined" && typeof AsyncContext.Snapshot === "function" ? function(a) {
        return a && AsyncContext.Snapshot.wrap(a)
    } : function(a) {
        return a
    };
    var vx = function(a, b) {
        this.l = a;
        this.o = b;
        this.j = 0;
        this.g = null
    };
    vx.prototype.get = function() {
        if (this.j > 0) {
            this.j--;
            var a = this.g;
            this.g = a.next;
            a.next = null
        } else a = this.l();
        return a
    };
    var wx = function(a, b) {
        a.o(b);
        a.j < 100 && (a.j++, b.next = a.g, a.g = b)
    };
    var xx = function() {
        this.j = this.g = null
    };
    xx.prototype.add = function(a, b) {
        var c = yx.get();
        c.set(a, b);
        this.j ? this.j.next = c : this.g = c;
        this.j = c
    };
    xx.prototype.remove = function() {
        var a = null;
        this.g && (a = this.g, this.g = this.g.next, this.g || (this.j = null), a.next = null);
        return a
    };
    var yx = new vx(function() {
            return new zx
        }, function(a) {
            return a.reset()
        }),
        zx = function() {
            this.next = this.g = this.j = null
        };
    zx.prototype.set = function(a, b) {
        this.j = a;
        this.g = b;
        this.next = null
    };
    zx.prototype.reset = function() {
        this.next = this.g = this.j = null
    };
    var Ax, Bx = !1,
        Cx = new xx,
        Ex = function(a, b) {
            Ax || Dx();
            Bx || (Ax(), Bx = !0);
            Cx.add(a, b)
        },
        Dx = function() {
            var a = Promise.resolve(void 0);
            Ax = function() {
                a.then(Fx)
            }
        };

    function Fx() {
        for (var a; a = Cx.remove();) {
            try {
                a.j.call(a.g)
            } catch (b) {
                zb(b)
            }
            wx(yx, a)
        }
        Bx = !1
    };
    var Gx = function(a) {
        if (!a) return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };
    var Ix = function(a) {
            this.g = 0;
            this.C = void 0;
            this.o = this.j = this.l = null;
            this.B = this.A = !1;
            if (a != ni) try {
                var b = this;
                a.call(void 0, function(c) {
                    Hx(b, 2, c)
                }, function(c) {
                    Hx(b, 3, c)
                })
            } catch (c) {
                Hx(this, 3, c)
            }
        },
        Jx = function() {
            this.next = this.context = this.j = this.l = this.g = null;
            this.o = !1
        };
    Jx.prototype.reset = function() {
        this.context = this.j = this.l = this.g = null;
        this.o = !1
    };
    var Kx = new vx(function() {
            return new Jx
        }, function(a) {
            a.reset()
        }),
        Lx = function(a, b, c) {
            var d = Kx.get();
            d.l = a;
            d.j = b;
            d.context = c;
            return d
        };
    Ix.prototype.then = function(a, b, c) {
        return Mx(this, ux(typeof a === "function" ? a : null), ux(typeof b === "function" ? b : null), c)
    };
    Ix.prototype.$goog_Thenable = !0;
    Ix.prototype.I = function(a, b) {
        return Mx(this, null, ux(a), b)
    };
    Ix.prototype.catch = Ix.prototype.I;
    Ix.prototype.cancel = function(a) {
        if (this.g == 0) {
            var b = new Nx(a);
            Ex(function() {
                Ox(this, b)
            }, this)
        }
    };
    var Ox = function(a, b) {
            if (a.g == 0)
                if (a.l) {
                    var c = a.l;
                    if (c.j) {
                        for (var d = 0, e = null, f = null, g = c.j; g && (g.o || (d++, g.g == a && (e = g), !(e && d > 1))); g = g.next) e || (f = g);
                        e && (c.g == 0 && d == 1 ? Ox(c, b) : (f ? (d = f, d.next == c.o && (c.o = d), d.next = d.next.next) : Px(c), Qx(c, e, 3, b)))
                    }
                    a.l = null
                } else Hx(a, 3, b)
        },
        Sx = function(a, b) {
            a.j || a.g != 2 && a.g != 3 || Rx(a);
            a.o ? a.o.next = b : a.j = b;
            a.o = b
        },
        Mx = function(a, b, c, d) {
            var e = Lx(null, null, null);
            e.g = new Ix(function(f, g) {
                e.l = b ? function(h) {
                    try {
                        var k = b.call(d, h);
                        f(k)
                    } catch (l) {
                        g(l)
                    }
                } : f;
                e.j = c ? function(h) {
                    try {
                        var k = c.call(d,
                            h);
                        k === void 0 && h instanceof Nx ? g(h) : f(k)
                    } catch (l) {
                        g(l)
                    }
                } : g
            });
            e.g.l = a;
            Sx(a, e);
            return e.g
        };
    Ix.prototype.F = function(a) {
        this.g = 0;
        Hx(this, 2, a)
    };
    Ix.prototype.G = function(a) {
        this.g = 0;
        Hx(this, 3, a)
    };
    var Hx = function(a, b, c) {
            if (a.g == 0) {
                a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
                a.g = 1;
                a: {
                    var d = c,
                        e = a.F,
                        f = a.G;
                    if (d instanceof Ix) {
                        Sx(d, Lx(e || ni, f || null, a));
                        var g = !0
                    } else if (Gx(d)) d.then(e, f, a),
                    g = !0;
                    else {
                        if (bb(d)) try {
                            var h = d.then;
                            if (typeof h === "function") {
                                Tx(d, h, e, f, a);
                                g = !0;
                                break a
                            }
                        } catch (k) {
                            f.call(a, k);
                            g = !0;
                            break a
                        }
                        g = !1
                    }
                }
                g || (a.C = c, a.g = b, a.l = null, Rx(a), b != 3 || c instanceof Nx || Ux(a, c))
            }
        },
        Tx = function(a, b, c, d, e) {
            var f = !1,
                g = function(k) {
                    f || (f = !0, c.call(e, k))
                },
                h = function(k) {
                    f || (f = !0, d.call(e,
                        k))
                };
            try {
                b.call(a, g, h)
            } catch (k) {
                h(k)
            }
        },
        Rx = function(a) {
            a.A || (a.A = !0, Ex(a.L, a))
        },
        Px = function(a) {
            var b = null;
            a.j && (b = a.j, a.j = b.next, b.next = null);
            a.j || (a.o = null);
            return b
        };
    Ix.prototype.L = function() {
        for (var a; a = Px(this);) Qx(this, a, this.g, this.C);
        this.A = !1
    };
    var Qx = function(a, b, c, d) {
            if (c == 3 && b.j && !b.o)
                for (; a && a.B; a = a.l) a.B = !1;
            if (b.g) b.g.l = null, Vx(b, c, d);
            else try {
                b.o ? b.l.call(b.context) : Vx(b, c, d)
            } catch (e) {
                Wx.call(null, e)
            }
            wx(Kx, b)
        },
        Vx = function(a, b, c) {
            b == 2 ? a.l.call(a.context, c) : a.j && a.j.call(a.context, c)
        },
        Ux = function(a, b) {
            a.B = !0;
            Ex(function() {
                a.B && Wx.call(null, b)
            })
        },
        Wx = zb,
        Nx = function(a) {
            sb.call(this, a)
        };
    pb(Nx, sb);
    Nx.prototype.name = "cancel";
    var Xx = function(a, b) {
        R.call(this);
        this.j = a || 1;
        this.g = b || y;
        this.l = kb(this.li, this);
        this.o = nb()
    };
    pb(Xx, R);
    m = Xx.prototype;
    m.enabled = !1;
    m.Ka = null;
    m.setInterval = function(a) {
        this.j = a;
        this.Ka && this.enabled ? (this.stop(), this.start()) : this.Ka && this.stop()
    };
    m.li = function() {
        if (this.enabled) {
            var a = nb() - this.o;
            a > 0 && a < this.j * .8 ? this.Ka = this.g.setTimeout(this.l, this.j - a) : (this.Ka && (this.g.clearTimeout(this.Ka), this.Ka = null), this.dispatchEvent("tick"), this.enabled && (this.stop(), this.start()))
        }
    };
    m.start = function() {
        this.enabled = !0;
        this.Ka || (this.Ka = this.g.setTimeout(this.l, this.j), this.o = nb())
    };
    m.stop = function() {
        this.enabled = !1;
        this.Ka && (this.g.clearTimeout(this.Ka), this.Ka = null)
    };
    m.O = function() {
        Xx.Za.O.call(this);
        this.stop();
        delete this.g
    };
    var Yx = function(a, b) {
            if (typeof a !== "function")
                if (a && typeof a.handleEvent == "function") a = kb(a.handleEvent, a);
                else throw Error("Invalid listener argument");
            return Number(b) > 2147483647 ? -1 : y.setTimeout(a, b || 0)
        },
        Zx = function(a, b) {
            var c = null;
            return (new Ix(function(d, e) {
                c = Yx(function() {
                    d(b)
                }, a);
                c == -1 && e(Error("Failed to schedule timer."))
            })).I(function(d) {
                y.clearTimeout(c);
                throw d;
            })
        };
    var $x = function() {
        return Math.round(Date.now() / 1E3)
    };
    var ay = function() {
        this.g = {};
        return this
    };
    ay.prototype.remove = function(a) {
        var b = this.g;
        a in b && delete b[a]
    };
    ay.prototype.set = function(a, b) {
        this.g[a] = b
    };
    var by = function(a, b) {
        a.g.eb = Gi(a.g, "eb", 0) | b
    };
    ay.prototype.get = function(a) {
        return Gi(this.g, a, null)
    };
    ay.prototype.fa = function() {
        var a = [],
            b;
        for (b in this.g) a.push(b + this.g[b]);
        return a.join("_")
    };
    var cy = null,
        dy = function() {
            this.g = {};
            this.j = 0
        },
        ey = function() {
            cy || (cy = new dy);
            return cy
        },
        fy = function(a, b) {
            a.g[b.getName()] = b
        };
    dy.prototype.fa = function(a) {
        var b = [];
        a || (a = 0);
        for (var c in this.g) {
            var d = this.g[c];
            d instanceof gy ? d.getValue() && (a |= d.B) : (d = this.g[c].fa()) && b.push(c + d)
        }
        b.push("eb" + String(a));
        return b.join("_")
    };
    var hy = function(a, b) {
        this.o = a;
        this.l = !0;
        this.g = b
    };
    hy.prototype.getName = function() {
        return this.o
    };
    hy.prototype.getValue = function() {
        return this.g
    };
    hy.prototype.fa = function() {
        return this.l ? this.j() : ""
    };
    hy.prototype.j = function() {
        return String(this.g)
    };
    var gy = function(a, b) {
        hy.call(this, String(a), b);
        this.B = a;
        this.g = !!b
    };
    r(gy, hy);
    gy.prototype.j = function() {
        return this.g ? "1" : "0"
    };
    var iy = function(a, b) {
        hy.call(this, a, b)
    };
    r(iy, hy);
    iy.prototype.j = function() {
        return this.g ? Math.round(this.g.top) + "." + Math.round(this.g.left) + "." + (Math.round(this.g.top) + Math.round(this.g.height)) + "." + (Math.round(this.g.left) + Math.round(this.g.width)) : ""
    };
    var jy = function(a) {
        if (a.match(/^-?[0-9]+\.-?[0-9]+\.-?[0-9]+\.-?[0-9]+$/)) {
            a = a.split(".");
            var b = Number(a[0]),
                c = Number(a[1]);
            return new iy("", new ck(c, b, Number(a[3]) - c, Number(a[2]) - b))
        }
        return new iy("", new ck(0, 0, 0, 0))
    };
    var ky = function(a) {
            var b = new ck(-Number.MAX_VALUE / 2, -Number.MAX_VALUE / 2, Number.MAX_VALUE, Number.MAX_VALUE),
                c = new ck(0, 0, 0, 0);
            if (!a || 0 == a.length) return c;
            for (var d = 0; d < a.length; d++) {
                a: {
                    var e = b;
                    var f = a[d],
                        g = Math.max(e.left, f.left),
                        h = Math.min(e.left + e.width, f.left + f.width);
                    if (g <= h) {
                        var k = Math.max(e.top, f.top);
                        f = Math.min(e.top + e.height, f.top + f.height);
                        if (k <= f) {
                            e.left = g;
                            e.top = k;
                            e.width = h - g;
                            e.height = f - k;
                            e = !0;
                            break a
                        }
                    }
                    e = !1
                }
                if (!e) return c
            }
            return b
        },
        ly = function(a, b) {
            var c = a.getBoundingClientRect();
            a = lk(a,
                b);
            return new ck(Math.round(a.x), Math.round(a.y), Math.round(c.right - c.left), Math.round(c.bottom - c.top))
        },
        my = function(a, b, c) {
            if (b && c) {
                a: {
                    var d = Math.max(b.left, c.left);
                    var e = Math.min(b.left + b.width, c.left + c.width);
                    if (d <= e) {
                        var f = Math.max(b.top, c.top),
                            g = Math.min(b.top + b.height, c.top + c.height);
                        if (f <= g) {
                            d = new ck(d, f, e - d, g - f);
                            break a
                        }
                    }
                    d = null
                }
                e = d ? d.height * d.width : 0;f = d ? b.height * b.width : 0;d = d && f ? Math.round(e / f * 100) : 0;fy(a, new hy("vp", d));d && d > 0 ? (e = dk(b), f = dk(c), e = e.top >= f.top && e.top < f.bottom) : e = !1;fy(a, new gy(512,
                    e));d && d > 0 ? (e = dk(b), f = dk(c), e = e.bottom <= f.bottom && e.bottom > f.top) : e = !1;fy(a, new gy(1024, e));d && d > 0 ? (e = dk(b), f = dk(c), e = e.left >= f.left && e.left < f.right) : e = !1;fy(a, new gy(2048, e));d && d > 0 ? (b = dk(b), c = dk(c), c = b.right <= c.right && b.right > c.left) : c = !1;fy(a, new gy(4096, c))
            }
        };
    var ny = function(a, b) {
        var c = 0;
        zi(Qj(), "ima", "video", "client", "tagged") && (c = 1);
        var d = null;
        a && (d = a());
        if (d) {
            a = ey();
            a.g = {};
            var e = new gy(32, !0);
            e.l = !1;
            fy(a, e);
            e = Qj().document;
            e = e.visibilityState || e.webkitVisibilityState || e.mozVisibilityState || e.msVisibilityState || "";
            fy(a, new gy(64, e.toLowerCase().substring(e.length - 6) != "hidden" ? !0 : !1));
            a: {
                try {
                    var f = Qj().top;
                    try {
                        var g = !!f.location.href || f.location.href === ""
                    } catch (n) {
                        g = !1
                    }
                    if (g) {
                        var h = Vw(d);
                        var k = h && h.length != 0 ? "1" : "0";
                        break a
                    }
                    k = "2";
                    break a
                } catch (n) {
                    k = "2";
                    break a
                }
                k = void 0
            }
            fy(a, new gy(256, k == "2"));
            fy(a, new gy(128, k == "1"));
            h = g = Qj().top;
            k == "2" && (h = Qj());
            f = ly(d, h);
            fy(a, new iy("er", f));
            try {
                var l = h.document && !h.document.body ? null : Pj(h || window)
            } catch (n) {
                l = null
            }
            l ? (h = Yj(Lj(h.document)), fy(a, new gy(16384, !!h)), l = h ? new ck(h.x, h.y, l.width, l.height) : null) : l = null;
            fy(a, new iy("vi", l));
            if (l && "1" == k) {
                k = Vw(d);
                d = [];
                for (h = 0; h < k.length; h++)(e = ly(k[h], g)) && d.push(e);
                d.push(l);
                l = ky(d)
            }
            my(a, f, l);
            a.j && fy(a, new hy("ts", $x() - a.j));
            a.j = $x()
        } else a = ey(), a.g = {}, a.j = $x(), fy(a, new gy(32, !1));
        this.l = a;
        this.g = new ay;
        this.g.set("ve", 4);
        c && by(this.g, 1);
        zi(Qj(), "ima", "video", "client", "crossdomainTag") && by(this.g, 4);
        zi(Qj(), "ima", "video", "client", "sdkTag") && by(this.g, 8);
        zi(Qj(), "ima", "video", "client", "jsTag") && by(this.g, 2);
        b && Gi(b, "fullscreen", !1) && by(this.g, 16);
        this.j = b = null;
        if (c && (c = zi(Qj(), "ima", "video", "client"), c.getEData)) {
            this.j = c.getEData();
            if (c = zi(Qj(), "ima", "video", "client", "getLastSnapshotFromTop"))
                if (a = c()) this.j.extendWithDataFromTopIframe(a.tagstamp, a.playstamp, a.lactstamp),
                    c = this.l, b = a.er, a = a.vi, b && a && (b = jy(b).getValue(), a = jy(a).getValue(), k = null, Gi(c.g, "er", null) && (k = Gi(c.g, "er", null).getValue(), k.top += b.top, k.left += b.left, fy(c, new iy("er", k))), Gi(c.g, "vi", null) && (l = Gi(c.g, "vi", null).getValue(), l.top += b.top, l.left += b.left, d = [], d.push(l), d.push(b), d.push(a), b = ky(d), my(c, k, b), fy(c, new iy("vi", a))));
            a: {
                if (this.j) {
                    if (this.j.getTagLoadTimestamp) {
                        b = this.j.getTagLoadTimestamp();
                        break a
                    }
                    if (this.j.getTimeSinceTagLoadSeconds) {
                        b = this.j.getTimeSinceTagLoadSeconds();
                        break a
                    }
                }
                b =
                null
            }
        }
        c = this.g;
        a = window.performance && window.performance.timing && window.performance.timing.domLoading && window.performance.timing.domLoading > 0 ? Math.round(window.performance.timing.domLoading / 1E3) : null;
        c.set.call(c, "td", $x() - (a != null ? a : b != null ? b : $x()))
    };
    ny.prototype.fa = function() {
        var a = [],
            b = Number(this.g.get("eb"));
        this.g.remove("eb");
        var c = this.g.fa();
        c && a.push(c);
        this.j && (c = this.j.serialize()) && a.push(c);
        (c = this.l.fa(b)) && a.push(c);
        this.g.set("eb", b);
        return a.join("_")
    };
    new Xx(200);
    var oy = function(a, b) {
        try {
            return (new ny(a, b)).fa()
        } catch (c) {
            return "tle;" + lj(c.name, 12) + ";" + lj(c.message, 40)
        }
    };
    var py = function(a) {
        this.D = C(a)
    };
    r(py, I);
    py.prototype.getId = function() {
        return pg(this, 1)
    };
    var qy = [0, Kh];
    var ry = function(a) {
        this.D = C(a)
    };
    r(ry, I);
    var sy = [0, Kh, -3];
    var ty = function(a) {
        this.D = C(a)
    };
    r(ty, I);
    ty.prototype.getWidth = function() {
        return lg(this, 1)
    };
    ty.prototype.getHeight = function() {
        return lg(this, 2)
    };
    var uy = [0, Hh, -1];
    var vy = function(a) {
        this.D = C(a)
    };
    r(vy, I);
    var wy = [0, Eh, Jh, Kh, -1];
    var yy = function(a) {
        this.D = C(a)
    };
    r(yy, I);
    yy.prototype.getAdId = function() {
        return pg(this, 1)
    };
    yy.prototype.getSize = function() {
        return E(this, ty, 7)
    };
    yy.prototype.Ac = function() {
        return E(this, vy, 9)
    };
    var zy = [0, Kh, Eh, Kh, Lh, Ph, qy, uy, Eh, wy, Kh, sy];
    var Ay = function(a) {
        this.D = C(a)
    };
    r(Ay, I);
    var By = function(a, b) {
            return Ag(a, 1, b)
        },
        Cy = function(a, b) {
            return ug(a, 4, b)
        },
        Dy = function(a, b) {
            return wg(a, 2, b)
        };
    var Ey = function(a) {
        this.D = C(a)
    };
    r(Ey, I);
    var Fy = function(a, b) {
            return zg(a, 1, b)
        },
        Gy = function(a, b) {
            return ig(a, 3, yy, b)
        },
        Hy = function(a, b) {
            return Ag(a, 4, b)
        },
        Iy = function(a, b) {
            return ug(a, 6, b)
        };
    var Jy = [0, Ph, Hh, Kh, Jh];
    var Ky = [0, Kh, Eh, Mh, zy, Ph, Jy, Jh, Ph, 2, Lh];
    var Ly = function(a) {
        this.D = C(a)
    };
    r(Ly, I);
    var My = function(a) {
        this.D = C(a)
    };
    r(My, I);
    var Ny = function(a, b) {
            return hg(a, 2, Ey, b)
        },
        Oy = function(a, b) {
            dg(a, 5, b)
        },
        Py = function(a, b) {
            zg(a, 10, b)
        },
        Qy = function(a, b) {
            zg(a, 11, b)
        };
    var Ry = [0, Ph, Mh, Ky, Ph, Kh, Jy, Kh, Jh, Hh, [0, Ph, Jh, Eh], Kh, -1];
    var Sy = function(a) {
        this.D = C(a)
    };
    r(Sy, I);
    var Ty = function(a) {
        var b = new My;
        b = Ag(b, 1, 1);
        return hg(a, 1, My, b)
    };
    var Uy = Rh([0, Mh, Ry]);
    var Vy = Th(di);
    var Wy = function(a) {
        this.D = C(a)
    };
    r(Wy, I);
    var Xy = function(a) {
        var b = new Wy;
        return Ag(b, 1, a)
    };
    var Yy = [0, Ph];
    var Zy = function(a) {
        this.D = C(a)
    };
    r(Zy, I);
    var $y = function(a) {
            var b = new Zy;
            return zg(b, 1, a)
        },
        az = function(a) {
            var b = window.Date.now();
            b = Number.isFinite(b) ? Math.round(b) : 0;
            return If(a, 3, He(b))
        };
    Zy.prototype.getError = function() {
        return E(this, Wy, 10)
    };
    Zy.prototype.xa = function(a) {
        return dg(this, 10, a)
    };
    var bz = Uh(Zy);
    var cz = [0, Kh, -1, Eh, Hh, -2, Eh, Ch, Jh, Yy, Jh];
    var dz = [0, 1, [0, Gh, -2], -1, Kh, -1, Jh, [0, 3, Ph, Kh], Eh, Qh, Oh];
    var ez = function(a) {
        this.D = C(a)
    };
    r(ez, I);
    ez.prototype.j = Sh([0, Mh, dz, Mh, cz]);
    var hz = function() {
        var a = fz;
        this.B = gz;
        this.A = "jserror";
        this.j = !0;
        this.g = a === void 0 ? null : a;
        this.l = null;
        this.o = !1;
        this.ta = this.kb
    };
    m = hz.prototype;
    m.Ke = function(a) {
        this.l = a
    };
    m.Nf = function(a) {
        this.A = a
    };
    m.Le = function(a) {
        this.j = a
    };
    m.Of = function(a) {
        this.o = a
    };
    m.Sb = function(a, b, c) {
        try {
            if (this.g && this.g.l) {
                var d = this.g.start(a.toString(), 3);
                var e = b();
                this.g.end(d)
            } else e = b()
        } catch (h) {
            b = this.j;
            try {
                Jm(d), b = this.ta(a, new gi(h, {
                    message: ii(h)
                }), void 0, c)
            } catch (k) {
                this.kb(217, k)
            }
            if (b) {
                var f, g;
                (f = window.console) == null || (g = f.error) == null || g.call(f, h)
            } else throw h;
        }
        return e
    };
    m.Ae = function(a, b, c, d) {
        var e = this;
        return function() {
            var f = Ra.apply(0, arguments);
            return e.Sb(a, function() {
                return b.apply(c, f)
            }, d)
        }
    };
    m.kb = function(a, b, c, d, e) {
        e = e || this.A;
        var f = void 0;
        try {
            var g = new zq;
            Eq(g, 1, "context", a);
            hi(b) || (b = new gi(b, {
                message: ii(b)
            }));
            b.msg && Eq(g, 2, "msg", b.msg.substring(0, 512));
            var h = b.meta || {};
            if (this.l) try {
                this.l(h)
            } catch (n) {}
            if (d) try {
                d(h)
            } catch (n) {}
            Dq(g, 3, [h]);
            f = yq();
            f.j && Eq(g, 4, "top", f.j.url || "");
            Dq(g, 5, [{
                url: f.g.url || ""
            }, {
                url: f.g.url ? ep(f.g.url) : ""
            }]);
            iz(this.B, e, g, this.o, c)
        } catch (n) {
            try {
                var k, l;
                iz(this.B, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: ii(n),
                    url: (l = (k = f) == null ? void 0 : k.g.url) != null ? l : ""
                }, this.o, c)
            } catch (p) {}
        }
        return this.j
    };
    var jz = function() {
            this.domain = "pagead2.googlesyndication.com";
            this.path = "/pagead/gen_204?id=";
            this.g = Math.random()
        },
        kz = function() {
            var a = gz,
                b = window.google_srt;
            b >= 0 && b <= 1 && (a.g = b)
        },
        iz = function(a, b, c, d, e) {
            if (((d === void 0 ? 0 : d) ? a.g : Math.random()) < (e || .01)) try {
                if (c instanceof zq) var f = c;
                else f = new zq, wj(c, function(h, k) {
                    var l = f,
                        n = l.o++;
                    Dq(l, n, Aq(k, h))
                });
                var g = Gq(f, "https:", a.domain, a.path + b + "&");
                g && uk(y, g)
            } catch (h) {}
        };
    var gz, lz, fz = new Im(1, window);
    (function(a) {
        gz = a != null ? a : new jz;
        typeof window.google_srt !== "number" && (window.google_srt = Math.random());
        kz();
        lz = new hz;
        lz.Ke(function() {});
        lz.Of(!0);
        window.document.readyState === "complete" ? window.google_measure_js_timing || fz.A() : fz.l && sk(window, "load", function() {
            window.google_measure_js_timing || fz.A()
        })
    })();
    var mz = function(a) {
        this.D = C(a)
    };
    r(mz, I);
    var nz = function(a) {
        this.D = C(a)
    };
    r(nz, I);
    var oz = {
        "-": 0,
        Y: 2,
        N: 1
    };
    var pz = function(a) {
        this.D = C(a)
    };
    r(pz, I);
    pz.prototype.getType = function() {
        return lg(this, 1)
    };
    pz.prototype.getVersion = function() {
        return lg(this, 2)
    };

    function qz(a) {
        return cd(a.length % 4 !== 0 ? a + "A" : a).map(function(b) {
            return b.toString(2).padStart(8, "0")
        }).join("")
    }

    function rz(a) {
        if (!/^[0-1]+$/.test(a)) throw Error("Invalid input [" + a + "] not a bit string.");
        return parseInt(a, 2)
    }

    function sz(a) {
        if (!/^[0-1]+$/.test(a)) throw Error("Invalid input [" + a + "] not a bit string.");
        for (var b = [1, 2, 3, 5], c = 0, d = 0; d < a.length - 1; d++) b.length <= d && b.push(b[d - 1] + b[d - 2]), c += parseInt(a[d], 2) * b[d];
        return c
    }

    function tz(a, b) {
        a = qz(a);
        return a.length < b ? a.padEnd(b, "0") : a
    };

    function uz(a, b) {
        var c = a.indexOf("11");
        if (c === -1) throw Error("Expected section bitstring but not found in [" + a + "] part of [" + b + "]");
        return a.slice(0, c + 2)
    };
    var vz = function(a) {
        this.D = C(a)
    };
    r(vz, I);
    var wz = function(a) {
        this.D = C(a)
    };
    r(wz, I);
    var xz = function(a) {
        this.D = C(a)
    };
    r(xz, I);
    xz.prototype.getVersion = function() {
        return lg(this, 1)
    };
    var yz = function(a) {
        this.D = C(a)
    };
    r(yz, I);
    var zz = function(a) {
        this.D = C(a)
    };
    r(zz, I);
    var Az = function(a) {
        var b = new zz;
        return dg(b, 1, a)
    };
    var Bz = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        Cz = 6 + Bz.reduce(function(a, b) {
            return a + b
        });
    var qC = function(a) {
        this.D = C(a)
    };
    r(qC, I);
    var rC = function(a) {
        this.D = C(a)
    };
    r(rC, I);
    rC.prototype.getVersion = function() {
        return lg(this, 1)
    };
    var sC = function(a) {
        this.D = C(a)
    };
    r(sC, I);
    var tC = function(a) {
        this.D = C(a)
    };
    r(tC, I);
    var uC = function(a) {
        var b = new tC;
        return dg(b, 1, a)
    };
    var vC = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        wC = 6 + vC.reduce(function(a, b) {
            return a + b
        });
    var xC = function(a) {
        this.D = C(a)
    };
    r(xC, I);
    var yC = function(a) {
        this.D = C(a)
    };
    r(yC, I);
    var zC = function(a) {
        this.D = C(a)
    };
    r(zC, I);
    zC.prototype.getVersion = function() {
        return lg(this, 1)
    };
    var AC = function(a) {
        this.D = C(a)
    };
    r(AC, I);
    var BC = function(a) {
        this.D = C(a)
    };
    r(BC, I);
    var CC = function(a) {
        var b = new BC;
        return dg(b, 1, a)
    };
    var DC = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        EC = 6 + DC.reduce(function(a, b) {
            return a + b
        });
    var FC = function(a) {
        this.D = C(a)
    };
    r(FC, I);
    var GC = function(a) {
        this.D = C(a)
    };
    r(GC, I);
    var HC = function(a) {
        this.D = C(a)
    };
    r(HC, I);
    HC.prototype.getVersion = function() {
        return lg(this, 1)
    };
    var IC = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        JC = 6 + IC.reduce(function(a, b) {
            return a + b
        });
    var KC = function(a) {
        this.D = C(a)
    };
    r(KC, I);
    var LC = function(a) {
        this.D = C(a)
    };
    r(LC, I);
    var MC = function(a) {
        this.D = C(a)
    };
    r(MC, I);
    MC.prototype.getVersion = function() {
        return lg(this, 1)
    };
    var NC = function(a) {
        var b = new MC;
        return xg(b, 1, a)
    };
    var OC = function(a) {
        this.D = C(a)
    };
    r(OC, I);
    var PC = function(a) {
        this.D = C(a)
    };
    r(PC, I);
    var QC = function(a) {
        var b = new PC;
        return dg(b, 1, a)
    };
    var RC = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        SC = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        TC = 6 + SC.reduce(function(a, b) {
            return a + b
        });
    var UC = function(a) {
        this.D = C(a)
    };
    r(UC, I);
    var VC = function(a) {
        this.D = C(a)
    };
    r(VC, I);
    VC.prototype.getVersion = function() {
        return lg(this, 1)
    };
    var WC = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        XC = 6 + WC.reduce(function(a, b) {
            return a + b
        });
    var YC = function(a) {
        this.D = C(a)
    };
    r(YC, I);
    var ZC = function(a) {
        this.D = C(a)
    };
    r(ZC, I);
    var $C = function(a, b) {
            return Tf(a, 1, b, te)
        },
        aD = function(a, b) {
            return Tf(a, 2, b, te)
        },
        bD = function(a, b) {
            return Tf(a, 3, b, ve)
        },
        cD = function(a, b) {
            Tf(a, 4, b, ve)
        };
    var dD = function(a) {
        this.D = C(a)
    };
    r(dD, I);
    dD.prototype.getVersion = function() {
        return lg(this, 1)
    };
    var eD = function(a, b) {
            return xg(a, 1, b)
        },
        fD = function(a, b) {
            return dg(a, 2, b)
        },
        gD = function(a, b) {
            return dg(a, 3, b)
        },
        hD = function(a, b) {
            return xg(a, 4, b)
        },
        iD = function(a, b) {
            return xg(a, 5, b)
        },
        jD = function(a, b) {
            return xg(a, 6, b)
        },
        kD = function(a, b) {
            return Uf(a, 7, Pe(b), "")
        },
        lD = function(a, b) {
            return xg(a, 8, b)
        },
        mD = function(a, b) {
            return xg(a, 9, b)
        },
        nD = function(a, b) {
            return vg(a, 10, b)
        },
        oD = function(a, b) {
            return vg(a, 11, b)
        },
        pD = function(a, b) {
            return Tf(a, 12, b, te)
        },
        qD = function(a, b) {
            return Tf(a, 13, b, te)
        },
        rD = function(a, b) {
            return Tf(a,
                14, b, te)
        },
        sD = function(a, b) {
            return vg(a, 15, b)
        },
        tD = function(a, b) {
            return Uf(a, 16, Pe(b), "")
        },
        uD = function(a, b) {
            return Tf(a, 17, b, ve)
        },
        vD = function(a, b) {
            return Tf(a, 18, b, ve)
        },
        wD = function(a, b) {
            return fg(a, 19, b)
        };
    var xD = function(a) {
        this.D = C(a)
    };
    r(xD, I);
    var yD = "a".charCodeAt(),
        zD = xi({
            tj: 0,
            sj: 1,
            pj: 2,
            kj: 3,
            qj: 4,
            lj: 5,
            rj: 6,
            nj: 7,
            oj: 8,
            jj: 9,
            mj: 10,
            uj: 11
        }),
        AD = xi({
            wj: 0,
            xj: 1,
            vj: 2
        });
    var BD = function(a) {
            if (/[^01]/.test(a)) throw Error("Input bitstring " + a + " is malformed!");
            this.j = a;
            this.g = 0
        },
        DD = function(a) {
            a = CD(a, 36);
            var b = new mz;
            b = yg(b, 1, Math.floor(a / 10));
            return xg(b, 2, a % 10 * 1E8)
        },
        ED = function(a) {
            return String.fromCharCode(yD + CD(a, 6)) + String.fromCharCode(yD + CD(a, 6))
        },
        HD = function(a) {
            var b = CD(a, 16);
            return !!CD(a, 1) === !0 ? (a = FD(a), a.forEach(function(c) {
                if (c > b) throw Error("ID " + c + " is past MaxVendorId " + b + "!");
            }), a) : GD(a, b)
        },
        ID = function(a) {
            for (var b = [], c = CD(a, 12); c--;) {
                var d = CD(a, 6),
                    e =
                    CD(a, 2),
                    f = FD(a),
                    g = b,
                    h = g.push,
                    k = new YC;
                d = H(k, 1, d);
                e = H(d, 2, e);
                f = Tf(e, 3, f, ve);
                h.call(g, f)
            }
            return b
        },
        FD = function(a) {
            for (var b = CD(a, 12), c = []; b--;) {
                var d = !!CD(a, 1) === !0,
                    e = CD(a, 16);
                if (d)
                    for (d = CD(a, 16); e <= d; e++) c.push(e);
                else c.push(e)
            }
            c.sort(function(f, g) {
                return f - g
            });
            return c
        },
        GD = function(a, b, c) {
            for (var d = [], e = 0; e < b; e++)
                if (CD(a, 1)) {
                    var f = e + 1;
                    if (c && c.indexOf(f) === -1) throw Error("ID: " + f + " is outside of allowed values!");
                    d.push(f)
                }
            return d
        },
        CD = function(a, b) {
            if (a.g + b > a.j.length) throw Error("Requested length " +
                b + " is past end of string.");
            var c = a.j.substring(a.g, a.g + b);
            a.g += b;
            return parseInt(c, 2)
        };
    BD.prototype.skip = function(a) {
        this.g += a
    };
    var JD = function(a) {
        try {
            var b = cd(a).map(function(f) {
                    return f.toString(2).padStart(8, "0")
                }).join(""),
                c = new BD(b);
            if (CD(c, 3) !== 3) return null;
            var d = aD($C(new ZC, GD(c, 24, zD)), GD(c, 24, zD)),
                e = CD(c, 6);
            e !== 0 && cD(bD(d, GD(c, e)), GD(c, e));
            return d
        } catch (f) {
            return null
        }
    };
    var KD = function(a) {
        try {
            var b = cd(a).map(function(d) {
                    return d.toString(2).padStart(8, "0")
                }).join(""),
                c = new BD(b);
            return wD(vD(uD(tD(sD(rD(qD(pD(oD(nD(mD(lD(kD(jD(iD(hD(gD(fD(eD(new dD, CD(c, 6)), DD(c)), DD(c)), CD(c, 12)), CD(c, 12)), CD(c, 6)), ED(c)), CD(c, 12)), CD(c, 6)), !!CD(c, 1)), !!CD(c, 1)), GD(c, 12, AD)), GD(c, 24, zD)), GD(c, 24, zD)), !!CD(c, 1)), ED(c)), HD(c)), HD(c)), ID(c))
        } catch (d) {
            return null
        }
    };
    var MD = function(a) {
            if (!a) return null;
            var b = a.split(".");
            if (b.length > 4) return null;
            a = KD(b[0]);
            if (!a) return null;
            var c = new xD;
            a = dg(c, 1, a);
            b.shift();
            b = v(b);
            for (c = b.next(); !c.done; c = b.next()) switch (c = c.value, LD(c)) {
                case 1:
                case 2:
                    break;
                case 3:
                    c = JD(c);
                    if (!c) return null;
                    dg(a, 2, c);
                    break;
                default:
                    return null
            }
            return a
        },
        LD = function(a) {
            try {
                var b = cd(a).map(function(c) {
                    return c.toString(2).padStart(8, "0")
                }).join("");
                return CD(new BD(b), 3)
            } catch (c) {
                return -1
            }
        };
    var OD = function(a, b) {
            var c = MD(a);
            if (!c || !a) return null;
            var d = E(c, dD, 1),
                e = E(c, ZC, 2) || new ZC;
            c = lg(d, 9);
            var f = lg(d, 4),
                g = lg(d, 5),
                h = kg(d, 10),
                k = kg(d, 11),
                l = pg(d, 16),
                n = kg(d, 15);
            var p = Mf(d, 13, ue, Lf());
            p = ND(p, zD);
            var q = Mf(d, 14, ue, Lf());
            p = {
                consents: p,
                legitimateInterests: ND(q, zD)
            };
            q = rg(d, 17);
            q = ND(q);
            var u = rg(d, 18);
            q = {
                consents: q,
                legitimateInterests: ND(u)
            };
            u = Mf(d, 12, ue, Lf());
            u = ND(u, AD);
            var w = bg(d, YC, 19, Lf());
            d = {};
            w = v(w);
            for (var t = w.next(); !t.done; t = w.next()) {
                t = t.value;
                var x = F(t, 1);
                d[x] = d[x] || {};
                for (var G = v(rg(t,
                        3)), X = G.next(); !X.done; X = G.next()) d[x][X.value] = F(t, 2)
            }
            w = Mf(e, 1, ue, Lf());
            w = ND(w, zD);
            t = Mf(e, 2, ue, Lf());
            t = ND(t, zD);
            x = rg(e, 3);
            x = ND(x);
            e = rg(e, 4);
            return {
                tcString: a,
                tcfPolicyVersion: c,
                gdprApplies: b,
                cmpId: f,
                cmpVersion: g,
                isServiceSpecific: h,
                useNonStandardStacks: k,
                publisherCC: l,
                purposeOneTreatment: n,
                purpose: p,
                vendor: q,
                specialFeatureOptins: u,
                publisher: {
                    restrictions: d,
                    consents: w,
                    legitimateInterests: t,
                    customPurposes: {
                        consents: x,
                        legitimateInterests: ND(e)
                    }
                }
            }
        },
        ND = function(a, b) {
            var c = {};
            if (Array.isArray(b) && b.length !==
                0) {
                b = v(b);
                for (var d = b.next(); !d.done; d = b.next()) d = d.value, c[d] = a.indexOf(d) !== -1
            } else
                for (a = v(a), b = a.next(); !b.done; b = a.next()) c[b.value] = !0;
            delete c[0];
            return c
        };
    var PD = function(a, b) {
            this.g = a;
            this.defaultValue = b === void 0 ? !1 : b
        },
        QD = function(a, b) {
            this.g = a;
            this.defaultValue = b === void 0 ? 0 : b
        };
    var RD = new QD(745150931),
        SD = new PD(45681221),
        TD = new QD(749060184),
        UD = new PD(745691018, !0),
        VD = new PD(45668885),
        WD = new PD(635466687),
        XD = new QD(45645574),
        YD = new PD(45685601),
        ZD = new QD(45685602, 500),
        $D = new PD(775241416),
        aE = new PD(781107958),
        bE = new PD(781107957);
    var cE = function(a) {
        this.D = C(a)
    };
    r(cE, I);
    var dE = function(a) {
        var b = new cE;
        gg(b, 1, te, a, ue)
    };
    var eE = /^((market|itms|intent|itms-appss):\/\/)/i;

    function fE(a, b, c, d) {
        var e = Dj("IFRAME");
        e.id = b;
        e.name = b;
        e.width = String(c);
        e.height = String(d);
        e.allowTransparency = "true";
        e.scrolling = "no";
        e.marginWidth = "0";
        e.marginHeight = "0";
        e.frameBorder = "0";
        e.style.border = "0";
        e.style.verticalAlign = "bottom";
        e.src = "about:blank";
        e.setAttribute("aria-label", "Advertisement");
        e.title = "3rd party ad content";
        e.tabIndex = 0;
        a.appendChild(e);
        return e
    };
    var gE = "ad_type vpos mridx pos vad_type videoad_start_delay".split(" ");
    var hE = function(a) {
        var b = a.Gb;
        var c = a.sb;
        var d = a.height;
        var e = a.width;
        a = a.Oa === void 0 ? !1 : a.Oa;
        this.Gb = b;
        this.sb = c;
        this.height = d;
        this.width = e;
        this.Oa = a
    };
    hE.prototype.getHeight = function() {
        return this.height
    };
    hE.prototype.getWidth = function() {
        return this.width
    };
    var iE = function(a) {
        var b = a.Bi;
        var c = a.Jg;
        var d = a.Gb;
        var e = a.sb;
        var f = a.Ai;
        var g = a.Ig;
        hE.call(this, {
            Gb: d,
            sb: e,
            height: a.height,
            width: a.width,
            Oa: a.Oa === void 0 ? !1 : a.Oa
        });
        this.o = b;
        this.j = c;
        this.l = f;
        this.g = g
    };
    r(iE, hE);
    var jE = function(a) {
        var b = a.Eh;
        hE.call(this, {
            Gb: a.Gb,
            sb: a.sb,
            height: a.height,
            width: a.width,
            Oa: a.Oa === void 0 ? !1 : a.Oa
        });
        this.g = b
    };
    r(jE, hE);
    jE.prototype.getMediaUrl = function() {
        return this.g
    };

    function kE(a) {
        return new(Function.prototype.bind.apply(a, [null].concat(ta(Ra.apply(1, arguments)))))
    };
    var lE = function(a, b, c, d) {
        Q.call(this);
        this.G = b;
        this.F = c;
        this.C = d;
        this.B = new Map;
        this.H = 0;
        this.o = new Map;
        this.A = new Map;
        this.l = void 0;
        this.j = a
    };
    r(lE, Q);
    lE.prototype.O = function() {
        delete this.g;
        this.B.clear();
        this.o.clear();
        this.A.clear();
        this.l && (tk(this.j, "message", this.l), delete this.l);
        delete this.j;
        delete this.C;
        Q.prototype.O.call(this)
    };
    var mE = function(a) {
            if (a.g) return a.g;
            a.F && a.F(a.j) ? a.g = a.j : a.g = Aj(a.j, a.G);
            var b;
            return (b = a.g) != null ? b : null
        },
        oE = function(a, b, c) {
            if (mE(a))
                if (a.g === a.j)(b = a.B.get(b)) && b(a.g, c);
                else {
                    var d = a.o.get(b);
                    if (d && d.md) {
                        nE(a);
                        var e = ++a.H;
                        a.A.set(e, {
                            Fc: d.Fc,
                            Tg: d.me(c),
                            Wh: b === "addEventListener"
                        });
                        a.g.postMessage(d.md(c, e), "*")
                    }
                }
        },
        nE = function(a) {
            a.l || (a.l = function(b) {
                    try {
                        var c = a.C ? a.C(b) : void 0;
                        if (c) {
                            var d = c.Df,
                                e = a.A.get(d);
                            if (e) {
                                e.Wh || a.A.delete(d);
                                var f;
                                (f = e.Fc) == null || f.call(e, e.Tg, c.payload)
                            }
                        }
                    } catch (g) {}
                },
                sk(a.j, "message", a.l))
        };

    function pE(a) {
        a.addtlConsent !== void 0 && typeof a.addtlConsent !== "string" && (a.addtlConsent = void 0);
        a.gdprApplies !== void 0 && typeof a.gdprApplies !== "boolean" && (a.gdprApplies = void 0);
        return a.tcString !== void 0 && typeof a.tcString !== "string" || a.listenerId !== void 0 && typeof a.listenerId !== "number" ? 2 : a.cmpStatus && a.cmpStatus !== "error" ? 0 : 3
    }
    var qE = function(a, b) {
        b = b === void 0 ? {} : b;
        Q.call(this);
        this.g = null;
        this.A = {};
        this.C = 0;
        this.l = null;
        this.j = a;
        var c;
        this.o = (c = b.timeoutMs) != null ? c : 500;
        var d;
        this.B = (d = b.nk) != null ? d : !1
    };
    r(qE, Q);
    qE.prototype.O = function() {
        this.A = {};
        this.l && (tk(this.j, "message", this.l), delete this.l);
        delete this.A;
        delete this.j;
        delete this.g;
        Q.prototype.O.call(this)
    };
    var sE = function(a) {
            return typeof a.j.__tcfapi === "function" || rE(a) != null
        },
        vE = function(a, b) {
            var c = {
                    internalErrorState: 0,
                    internalBlockOnErrors: a.B
                },
                d = pi(function() {
                    return b(c)
                }),
                e = 0;
            a.o !== -1 && (e = setTimeout(function() {
                e = 0;
                c.tcString = "tcunavailable";
                c.internalErrorState = 1;
                d()
            }, a.o));
            tE(a, "addEventListener", function(f) {
                f && (c = f, c.internalErrorState = pE(c), c.internalBlockOnErrors = a.B, uE(c) ? (c.internalErrorState !== 0 && (c.tcString = "tcunavailable"), tE(a, "removeEventListener", null, c.listenerId), (f = e) && clearTimeout(f),
                    d()) : (c.cmpStatus === "error" || c.internalErrorState !== 0) && (f = e) && clearTimeout(f))
            })
        };
    qE.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.B
            },
            d = pi(function() {
                return a(c)
            }),
            e = 0;
        this.o !== -1 && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.o));
        var f = function(g, h) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = pE(c), c.internalBlockOnErrors = b.B, h && c.internalErrorState === 0 || (c.tcString = "tcunavailable", h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            tE(this, "addEventListener", f)
        } catch (g) {
            c.tcString =
                "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    qE.prototype.removeEventListener = function(a) {
        a && a.listenerId && tE(this, "removeEventListener", null, a.listenerId)
    };
    var xE = function(a) {
            var b = b === void 0 ? {} : b;
            return uE(a) ? a.gdprApplies === !1 ? !0 : a.tcString === "tcunavailable" ? !b.idpcApplies : (b.idpcApplies || a.gdprApplies !== void 0 || b.wk) && (b.idpcApplies || typeof a.tcString === "string" && a.tcString.length) ? wE(a, "1", 0) : !0 : !1
        },
        wE = function(a, b, c) {
            var d = d === void 0 ? "755" : d;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var e = a.publisher.restrictions[b];
                    if (e !== void 0) {
                        e = e[d === void 0 ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            if (e === 0) return !1;
            var f = c;
            c === 2 ? (f = 0, e === 2 && (f = 1)) : c === 3 && (f = 1, e === 1 &&
                (f = 0));
            a = f === 0 ? a.purpose && a.vendor ? (c = yE(a.vendor.consents, d === void 0 ? "755" : d)) && b === "1" && a.purposeOneTreatment && a.publisherCC === "CH" ? !0 : c && yE(a.purpose.consents, b) : !0 : f === 1 ? a.purpose && a.vendor ? yE(a.purpose.legitimateInterests, b) && yE(a.vendor.legitimateInterests, d === void 0 ? "755" : d) : !0 : !0;
            return a
        },
        yE = function(a, b) {
            return !(!a || !a[b])
        },
        tE = function(a, b, c, d) {
            c || (c = function() {});
            var e = a.j;
            typeof e.__tcfapi === "function" ? (a = e.__tcfapi, a(b, 2, c, d)) : rE(a) ? (zE(a), e = ++a.C, a.A[e] = c, a.g && (c = {}, a.g.postMessage((c.__tcfapiCall = {
                command: b,
                version: 2,
                callId: e,
                parameter: d
            }, c), "*"))) : c({}, !1)
        },
        rE = function(a) {
            if (a.g) return a.g;
            a.g = Aj(a.j, "__tcfapiLocator");
            return a.g
        },
        zE = function(a) {
            if (!a.l) {
                var b = function(c) {
                    try {
                        var d = (typeof c.data === "string" ? JSON.parse(c.data) : c.data).__tcfapiReturn;
                        a.A[d.callId](d.returnValue, d.success)
                    } catch (e) {}
                };
                a.l = b;
                sk(a.j, "message", b)
            }
        },
        uE = function(a) {
            if (a.gdprApplies === !1) return !0;
            a.internalErrorState === void 0 && (a.internalErrorState = pE(a));
            return a.cmpStatus === "error" || a.internalErrorState !== 0 ? a.internalBlockOnErrors ?
                (wk({
                    e: String(a.internalErrorState)
                }, "tcfe"), !1) : !0 : a.cmpStatus !== "loaded" || a.eventStatus !== "tcloaded" && a.eventStatus !== "useractioncomplete" ? !1 : !0
        },
        AE = function(a, b, c) {
            return a.gdprApplies === !1 ? !0 : b.every(function(d) {
                return wE(a, d, c)
            })
        };
    var BE = function(a, b) {
            b = b.listener;
            (a = (0, a.__gpp)("addEventListener", b)) && b(a, !0)
        },
        CE = function(a, b) {
            (0, a.__gpp)("removeEventListener", b.listener, b.listenerId)
        },
        DE = {
            me: function(a) {
                return a.listener
            },
            md: function(a, b) {
                a = {};
                return a.__gppCall = {
                    callId: b,
                    command: "addEventListener",
                    version: "1.1"
                }, a
            },
            Fc: function(a, b) {
                b = b.__gppReturn;
                a(b.returnValue, b.success)
            }
        },
        EE = {
            me: function(a) {
                return a.listener
            },
            md: function(a, b) {
                var c = {};
                return c.__gppCall = {
                        callId: b,
                        command: "removeEventListener",
                        version: "1.1",
                        parameter: a.listenerId
                    },
                    c
            },
            Fc: function(a, b) {
                b = b.__gppReturn;
                var c = b.returnValue.data;
                a == null || a(c, b.success)
            }
        };

    function FE(a) {
        var b = {};
        typeof a.data === "string" ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            Df: b.__gppReturn.callId
        }
    }
    var GE = function(a, b) {
        b = (b === void 0 ? {} : b).timeoutMs;
        Q.call(this);
        this.caller = new lE(a, "__gppLocator", function(c) {
            return typeof c.__gpp === "function"
        }, FE);
        this.caller.B.set("addEventListener", BE);
        this.caller.o.set("addEventListener", DE);
        this.caller.B.set("removeEventListener", CE);
        this.caller.o.set("removeEventListener", EE);
        this.timeoutMs = b != null ? b : 500
    };
    r(GE, Q);
    GE.prototype.O = function() {
        this.caller.dispose();
        Q.prototype.O.call(this)
    };
    GE.prototype.addEventListener = function(a) {
        var b = this,
            c = pi(function() {
                a(HE, !0)
            }),
            d = this.timeoutMs === -1 ? void 0 : setTimeout(function() {
                c()
            }, this.timeoutMs);
        oE(this.caller, "addEventListener", {
            listener: function(e, f) {
                clearTimeout(d);
                try {
                    var g;
                    if (((g = e.pingData) == null ? void 0 : g.gppVersion) === void 0 || e.pingData.gppVersion === "1" || e.pingData.gppVersion === "1.0") {
                        b.removeEventListener(e.listenerId);
                        var h = {
                            eventName: "signalStatus",
                            data: "ready",
                            pingData: {
                                internalErrorState: 1,
                                gppString: "GPP_ERROR_STRING_IS_DEPRECATED_SPEC",
                                applicableSections: [-1]
                            }
                        }
                    } else Array.isArray(e.pingData.applicableSections) ? h = e : (b.removeEventListener(e.listenerId), h = {
                        eventName: "signalStatus",
                        data: "ready",
                        pingData: {
                            internalErrorState: 2,
                            gppString: "GPP_ERROR_STRING_EXPECTED_APPLICATION_SECTION_ARRAY",
                            applicableSections: [-1]
                        }
                    });
                    a(h, f)
                } catch (k) {
                    if (e == null ? 0 : e.listenerId) try {
                        b.removeEventListener(e.listenerId)
                    } catch (l) {
                        a(IE, !0);
                        return
                    }
                    a(JE, !0)
                }
            }
        })
    };
    GE.prototype.removeEventListener = function(a) {
        oE(this.caller, "removeEventListener", {
            listener: function() {},
            listenerId: a
        })
    };
    var KE = function(a, b) {
            var c = !(b.includes(2), 0),
                d = !1,
                e = !1,
                f = !1;
            if (a && !a.startsWith("GPP_ERROR_STRING_")) {
                var g = qz(a.split("~")[0]),
                    h = rz(g.slice(0, 6)),
                    k = rz(g.slice(6, 12)),
                    l = new pz;
                var n = xg(l, 1, h);
                var p = xg(n, 2, k);
                for (var q = g.slice(12), u = rz(q.slice(0, 12)), w = [], t = q.slice(12).replace(/0+$/, ""), x = 0; x < u; x++) {
                    if (t.length === 0) throw Error("Found " + x + " of " + u + " sections [" + w + "] but reached end of input [" + q + "]");
                    var G = rz(t[0]) === 0;
                    t = t.slice(1);
                    var X = uz(t, q),
                        D = w.length === 0 ? 0 : w[w.length - 1],
                        ea = sz(X) + D;
                    t = t.slice(X.length);
                    if (G) w.push(ea);
                    else {
                        for (var ya = uz(t, q), ca = sz(ya), Fa = 0; Fa <= ca; Fa++) w.push(ea + Fa);
                        t = t.slice(ya.length)
                    }
                }
                if (t.length > 0) throw Error("Found " + u + " sections [" + w + "] but has remaining input [" + t + "], entire input [" + q + "]");
                var Ga = Tf(p, 3, w, ve);
                var T = a.includes("~") ? a.split("~").slice(1) : [];
                var ha = rg(Ga, 3);
                for (var Na = 0; Na < ha.length; ++Na) {
                    var qb = ha[Na];
                    if (b.includes(qb)) {
                        var S = T[Na];
                        switch (qb) {
                            case 2:
                                var za = void 0;
                                if ((za = void 0) == null ? 0 : za.supportTcfeu) {
                                    var Rb = OD(S, !0);
                                    if (!Rb) throw Error("Cannot decode TCF V2 section string.");
                                    c = xE(Rb);
                                    !AE(Rb, ["3", "4"], 0) && (d = !0);
                                    !AE(Rb, ["2", "7", "9", "10"], 3) && (e = !0)
                                }
                                break;
                            case 7:
                                var lc = void 0,
                                    Ba = S,
                                    Jc = ((lc = void 0) == null ? 0 : lc.supportUsnatV2) ? [1, 2] : [1];
                                Jc = Jc === void 0 ? [1] : Jc;
                                if (Ba.length === 0) throw Error("Cannot decode empty USNat section string.");
                                var jd = Ba.split(".");
                                if (jd.length > 2) throw Error("Expected at most 2 segments but got " + jd.length + " when decoding " + Ba + ".");
                                var xe = void 0,
                                    ye = void 0,
                                    Td = void 0,
                                    Kg = void 0,
                                    Ji = void 0,
                                    Jl = void 0,
                                    Kl = void 0,
                                    Ll = void 0,
                                    Ml = void 0,
                                    Nl = void 0,
                                    Lg = void 0,
                                    Ol = void 0,
                                    Pl = void 0,
                                    Ql = void 0,
                                    Rl = void 0,
                                    Sl = void 0,
                                    Tl = void 0,
                                    Ul = void 0,
                                    Vl = void 0,
                                    Wl = void 0,
                                    Xl = void 0,
                                    Ki = void 0,
                                    Yl = void 0,
                                    Li = void 0,
                                    Mi = void 0,
                                    uf = void 0,
                                    Dz = void 0,
                                    Ez = void 0,
                                    Fz = void 0,
                                    Gz = void 0,
                                    Hz = void 0,
                                    Iz = void 0,
                                    Jz = void 0,
                                    Kz = void 0,
                                    Lz = void 0,
                                    Mz = void 0,
                                    Nz = void 0,
                                    Oz = void 0,
                                    Pz = void 0,
                                    Qz = void 0,
                                    Rz = void 0,
                                    Sz = void 0,
                                    Tz = void 0,
                                    Uz = void 0,
                                    Vz = void 0,
                                    Wz = void 0,
                                    Xz = void 0,
                                    Yz = void 0,
                                    Zz = void 0,
                                    $z = void 0,
                                    aA = void 0,
                                    bA = void 0,
                                    cA = void 0,
                                    dA = void 0,
                                    eA = void 0,
                                    fA = void 0,
                                    gA = void 0,
                                    hA = void 0,
                                    iA = void 0,
                                    jA = void 0,
                                    kA = void 0,
                                    Kq = void 0,
                                    lA =
                                    jd[0],
                                    vf = Jc;
                                vf = vf === void 0 ? [1] : vf;
                                if (lA.length === 0) throw Error("Cannot decode empty core segment string.");
                                var Zl = tz(lA, TC),
                                    Mg = rz(Zl.slice(0, 6));
                                Zl = Zl.slice(6);
                                if (!vf.includes(Mg)) throw Error("Unable to decode unsupported USNat Section specification version " + (Mg + " - only version") + ((vf.length > 1 ? "s" : "") + " ") + (vf.join(", ") + " ") + ((vf.length > 1 ? "are" : "is") + " supported."));
                                for (var Lq = 0, O = [], mA = Mg === 1 ? RC : SC, Mq = 0; Mq < mA.length; Mq++) {
                                    var nA = mA[Mq];
                                    O.push(rz(Zl.slice(Lq, Lq + nA)));
                                    Lq += nA
                                }
                                if (Mg === 1) {
                                    var oN = NC(Mg),
                                        pN = O.shift();
                                    kA = H(oN, 2, pN);
                                    var qN = O.shift();
                                    jA = H(kA, 3, qN);
                                    var rN = O.shift();
                                    iA = H(jA, 4, rN);
                                    var sN = O.shift();
                                    hA = H(iA, 5, sN);
                                    var tN = O.shift();
                                    gA = H(hA, 6, tN);
                                    var uN = O.shift();
                                    fA = H(gA, 7, uN);
                                    var vN = O.shift();
                                    eA = H(fA, 8, vN);
                                    var wN = O.shift();
                                    dA = H(eA, 9, wN);
                                    var xN = O.shift();
                                    cA = H(dA, 10, xN);
                                    var yN = new LC,
                                        zN = O.shift();
                                    bA = H(yN, 1, zN);
                                    var AN = O.shift();
                                    aA = H(bA, 2, AN);
                                    var BN = O.shift();
                                    $z = H(aA, 3, BN);
                                    var CN = O.shift();
                                    Zz = H($z, 4, CN);
                                    var DN = O.shift();
                                    Yz = H(Zz, 5, DN);
                                    var EN = O.shift();
                                    Xz = H(Yz, 6, EN);
                                    var FN = O.shift();
                                    Wz = H(Xz, 7, FN);
                                    var GN = O.shift();
                                    Vz = H(Wz, 8, GN);
                                    var HN = O.shift();
                                    Uz = H(Vz, 9, HN);
                                    var IN = O.shift();
                                    Tz = H(Uz, 10, IN);
                                    var JN = O.shift();
                                    Sz = H(Tz, 11, JN);
                                    var KN = O.shift();
                                    Rz = H(Sz, 12, KN);
                                    Qz = dg(cA, 11, Rz);
                                    var LN = new KC,
                                        MN = O.shift();
                                    Pz = H(LN, 1, MN);
                                    var NN = O.shift();
                                    Oz = H(Pz, 2, NN);
                                    Nz = dg(Qz, 12, Oz);
                                    var ON = O.shift();
                                    Mz = H(Nz, 13, ON);
                                    var PN = O.shift();
                                    Lz = H(Mz, 14, PN);
                                    var QN = O.shift();
                                    Kz = H(Lz, 15, QN);
                                    var RN = O.shift();
                                    Kq = H(Kz, 16, RN)
                                } else {
                                    var SN = NC(Mg),
                                        TN = O.shift();
                                    Jz = H(SN, 2, TN);
                                    var UN = O.shift();
                                    Iz = H(Jz, 3, UN);
                                    var VN = O.shift();
                                    Hz = H(Iz, 4, VN);
                                    var WN =
                                        O.shift();
                                    Gz = H(Hz, 5, WN);
                                    var XN = O.shift();
                                    Fz = H(Gz, 6, XN);
                                    var YN = O.shift();
                                    Ez = H(Fz, 7, YN);
                                    var ZN = O.shift();
                                    Dz = H(Ez, 8, ZN);
                                    var $N = O.shift();
                                    uf = H(Dz, 9, $N);
                                    var aO = O.shift();
                                    Mi = H(uf, 10, aO);
                                    var bO = new LC,
                                        cO = O.shift();
                                    Li = H(bO, 1, cO);
                                    var dO = O.shift();
                                    Yl = H(Li, 2, dO);
                                    var eO = O.shift();
                                    Ki = H(Yl, 3, eO);
                                    var fO = O.shift();
                                    Xl = H(Ki, 4, fO);
                                    var gO = O.shift();
                                    Wl = H(Xl, 5, gO);
                                    var hO = O.shift();
                                    Vl = H(Wl, 6, hO);
                                    var iO = O.shift();
                                    Ul = H(Vl, 7, iO);
                                    var jO = O.shift();
                                    Tl = H(Ul, 8, jO);
                                    var kO = O.shift();
                                    Sl = H(Tl, 9, kO);
                                    var lO = O.shift();
                                    Rl = H(Sl, 10, lO);
                                    var mO = O.shift();
                                    Ql = H(Rl, 11, mO);
                                    var nO = O.shift();
                                    Pl = H(Ql, 12, nO);
                                    var oO = O.shift();
                                    Ol = H(Pl, 13, oO);
                                    var pO = O.shift();
                                    Lg = H(Ol, 14, pO);
                                    var qO = O.shift();
                                    Nl = H(Lg, 15, qO);
                                    var rO = O.shift();
                                    Ml = H(Nl, 16, rO);
                                    Ll = dg(Mi, 11, Ml);
                                    var sO = new KC,
                                        tO = O.shift();
                                    Kl = H(sO, 1, tO);
                                    var uO = O.shift();
                                    Jl = H(Kl, 2, uO);
                                    var vO = O.shift();
                                    Ji = H(Jl, 3, vO);
                                    Kg = dg(Ll, 12, Ji);
                                    var wO = O.shift();
                                    Td = H(Kg, 13, wO);
                                    var xO = O.shift();
                                    ye = H(Td, 14, xO);
                                    var yO = O.shift();
                                    xe = H(ye, 15, yO);
                                    var zO = O.shift();
                                    Kq = H(xe, 16, zO)
                                }
                                var oA = Kq;
                                if (jd.length === 1) var pA = QC(oA);
                                else {
                                    var AO =
                                        QC(oA),
                                        qA = void 0,
                                        rA = void 0,
                                        sA = void 0,
                                        tA = jd[1];
                                    if (tA.length === 0) throw Error("Cannot decode empty GPC segment string.");
                                    var uA = tz(tA, 3),
                                        $l = rz(uA.slice(0, 2));
                                    if ($l < 0 || $l > 1) throw Error("Attempting to decode unknown GPC segment subsection type " + $l + ".");
                                    sA = $l + 1;
                                    var BO = rz(uA.slice(2, 3)),
                                        CO = new OC;
                                    rA = H(CO, 2, sA);
                                    qA = vg(rA, 1, !!BO);
                                    pA = dg(AO, 2, qA)
                                }
                                var vA = pA,
                                    am = E(vA, MC, 1),
                                    bm = E(am, KC, 12);
                                F(am, 8) !== 1 && F(am, 9) !== 1 && F(am, 10) !== 1 && (bm == null ? void 0 : F(bm, 1)) !== 1 && (bm == null ? void 0 : F(bm, 3)) !== 1 || (d = !0);
                                var wA = void 0,
                                    DO =
                                    E(vA, MC, 1),
                                    xA = (wA = E(DO, KC, 12)) == null ? void 0 : F(wA, 2);
                                xA !== 1 && xA !== 2 || (f = !0);
                                break;
                            case 8:
                                if (S.length === 0) throw Error("Cannot decode empty USCA section string.");
                                var Ni = S.split(".");
                                if (Ni.length > 2) throw Error("Expected at most 1 sub-section but got " + (Ni.length - 1) + " when decoding " + S + ".");
                                var EO = void 0,
                                    yA = void 0,
                                    zA = void 0,
                                    AA = void 0,
                                    BA = void 0,
                                    CA = void 0,
                                    DA = void 0,
                                    EA = void 0,
                                    FA = void 0,
                                    GA = void 0,
                                    HA = void 0,
                                    IA = void 0,
                                    JA = void 0,
                                    KA = void 0,
                                    LA = void 0,
                                    MA = void 0,
                                    NA = void 0,
                                    OA = void 0,
                                    PA = void 0,
                                    QA = void 0,
                                    RA = void 0,
                                    SA = void 0,
                                    TA = void 0,
                                    UA = Ni[0];
                                if (UA.length === 0) throw Error("Cannot decode empty core segment string.");
                                var cm = tz(UA, Cz),
                                    Nq = rz(cm.slice(0, 6));
                                cm = cm.slice(6);
                                if (Nq !== 1) throw Error("Unable to decode unsupported USCA Section specification version " + Nq + " - only version 1 is supported.");
                                for (var Oq = 0, $a = [], Pq = 0; Pq < Bz.length; Pq++) {
                                    var VA = Bz[Pq];
                                    $a.push(rz(cm.slice(Oq, Oq + VA)));
                                    Oq += VA
                                }
                                var FO = new xz;
                                TA = xg(FO, 1, Nq);
                                var GO = $a.shift();
                                SA = H(TA, 2, GO);
                                var HO = $a.shift();
                                RA = H(SA, 3, HO);
                                var IO = $a.shift();
                                QA = H(RA, 4, IO);
                                var JO = $a.shift();
                                PA = H(QA, 5, JO);
                                var KO = $a.shift();
                                OA = H(PA, 6, KO);
                                var LO = new wz,
                                    MO = $a.shift();
                                NA = H(LO, 1, MO);
                                var NO = $a.shift();
                                MA = H(NA, 2, NO);
                                var OO = $a.shift();
                                LA = H(MA, 3, OO);
                                var PO = $a.shift();
                                KA = H(LA, 4, PO);
                                var QO = $a.shift();
                                JA = H(KA, 5, QO);
                                var RO = $a.shift();
                                IA = H(JA, 6, RO);
                                var SO = $a.shift();
                                HA = H(IA, 7, SO);
                                var TO = $a.shift();
                                GA = H(HA, 8, TO);
                                var UO = $a.shift();
                                FA = H(GA, 9, UO);
                                EA = dg(OA, 7, FA);
                                var VO = new vz,
                                    WO = $a.shift();
                                DA = H(VO, 1, WO);
                                var XO = $a.shift();
                                CA = H(DA, 2, XO);
                                BA = dg(EA, 8, CA);
                                var YO = $a.shift();
                                AA = H(BA, 9, YO);
                                var ZO =
                                    $a.shift();
                                zA = H(AA, 10, ZO);
                                var $O = $a.shift();
                                yA = H(zA, 11, $O);
                                var aP = $a.shift();
                                var WA = EO = H(yA, 12, aP);
                                if (Ni.length === 1) var XA = Az(WA);
                                else {
                                    var bP = Az(WA),
                                        YA = void 0,
                                        ZA = void 0,
                                        $A = void 0,
                                        aB = Ni[1];
                                    if (aB.length === 0) throw Error("Cannot decode empty GPC segment string.");
                                    var bB = tz(aB, 3),
                                        dm = rz(bB.slice(0, 2));
                                    if (dm < 0 || dm > 1) throw Error("Attempting to decode unknown GPC segment subsection type " + dm + ".");
                                    $A = dm + 1;
                                    var cP = rz(bB.slice(2, 3)),
                                        dP = new yz;
                                    ZA = H(dP, 2, $A);
                                    YA = vg(ZA, 1, !!cP);
                                    XA = dg(bP, 2, YA)
                                }
                                var cB = XA,
                                    dB = E(cB, xz,
                                        1);
                                F(dB, 5) !== 1 && F(dB, 6) !== 1 || (d = !0);
                                var eP = E(cB, xz, 1);
                                var ze = E(eP, vz, 8);
                                (ze == null ? void 0 : F(ze, 1)) !== 1 && (ze == null ? void 0 : F(ze, 1)) !== 2 && (ze == null ? void 0 : F(ze, 2)) !== 1 && (ze == null ? void 0 : F(ze, 2)) !== 2 || (f = !0);
                                break;
                            case 9:
                                if (S.length === 0) throw Error("Cannot decode empty USVA section string.");
                                var em = tz(S, XC),
                                    Qq = rz(em.slice(0, 6));
                                em = em.slice(6);
                                if (Qq !== 1) throw Error("Unable to decode unsupported USVA Section specification version " + Qq + " - only version 1 is supported.");
                                for (var Rq = 0, rb = [], Sq = 0; Sq < WC.length; Sq++) {
                                    var eB =
                                        WC[Sq];
                                    rb.push(rz(em.slice(Rq, Rq + eB)));
                                    Rq += eB
                                }
                                var fP = Qq,
                                    gP = new VC,
                                    hP = xg(gP, 1, fP),
                                    iP = rb.shift(),
                                    jP = H(hP, 2, iP),
                                    kP = rb.shift(),
                                    lP = H(jP, 3, kP),
                                    mP = rb.shift(),
                                    nP = H(lP, 4, mP),
                                    oP = rb.shift(),
                                    pP = H(nP, 5, oP),
                                    qP = rb.shift();
                                var rP = H(pP, 6, qP);
                                var sP = new UC,
                                    tP = rb.shift(),
                                    uP = H(sP, 1, tP),
                                    vP = rb.shift(),
                                    wP = H(uP, 2, vP),
                                    xP = rb.shift(),
                                    yP = H(wP, 3, xP),
                                    zP = rb.shift(),
                                    AP = H(yP, 4, zP),
                                    BP = rb.shift(),
                                    CP = H(AP, 5, BP),
                                    DP = rb.shift(),
                                    EP = H(CP, 6, DP),
                                    FP = rb.shift(),
                                    GP = H(EP, 7, FP),
                                    HP = rb.shift();
                                var IP = H(GP, 8, HP);
                                var JP = dg(rP, 7, IP),
                                    KP = rb.shift(),
                                    LP =
                                    H(JP, 8, KP),
                                    MP = rb.shift(),
                                    NP = H(LP, 9, MP),
                                    OP = rb.shift(),
                                    PP = H(NP, 10, OP),
                                    QP = rb.shift(),
                                    Tq = H(PP, 11, QP);
                                F(Tq, 5) !== 1 && F(Tq, 6) !== 1 || (d = !0);
                                var fB = F(Tq, 8);
                                fB !== 1 && fB !== 2 || (f = !0);
                                break;
                            case 10:
                                if (S.length === 0) throw Error("Cannot decode empty USCO section string.");
                                var Oi = S.split(".");
                                if (Oi.length > 2) throw Error("Expected at most 2 segments but got " + Oi.length + " when decoding " + S + ".");
                                var RP = void 0,
                                    gB = void 0,
                                    hB = void 0,
                                    iB = void 0,
                                    jB = void 0,
                                    kB = void 0,
                                    lB = void 0,
                                    mB = void 0,
                                    nB = void 0,
                                    oB = void 0,
                                    pB = void 0,
                                    qB = void 0,
                                    rB =
                                    void 0,
                                    sB = void 0,
                                    tB = void 0,
                                    uB = void 0,
                                    vB = void 0,
                                    wB = void 0,
                                    xB = Oi[0];
                                if (xB.length === 0) throw Error("Cannot decode empty core segment string.");
                                var fm = tz(xB, wC),
                                    Uq = rz(fm.slice(0, 6));
                                fm = fm.slice(6);
                                if (Uq !== 1) throw Error("Unable to decode unsupported USCO Section specification version " + Uq + " - only version 1 is supported.");
                                for (var Vq = 0, vb = [], Wq = 0; Wq < vC.length; Wq++) {
                                    var yB = vC[Wq];
                                    vb.push(rz(fm.slice(Vq, Vq + yB)));
                                    Vq += yB
                                }
                                var SP = new rC;
                                wB = xg(SP, 1, Uq);
                                var TP = vb.shift();
                                vB = H(wB, 2, TP);
                                var UP = vb.shift();
                                uB = H(vB,
                                    3, UP);
                                var VP = vb.shift();
                                tB = H(uB, 4, VP);
                                var WP = vb.shift();
                                sB = H(tB, 5, WP);
                                var XP = vb.shift();
                                rB = H(sB, 6, XP);
                                var YP = new qC,
                                    ZP = vb.shift();
                                qB = H(YP, 1, ZP);
                                var $P = vb.shift();
                                pB = H(qB, 2, $P);
                                var aQ = vb.shift();
                                oB = H(pB, 3, aQ);
                                var bQ = vb.shift();
                                nB = H(oB, 4, bQ);
                                var cQ = vb.shift();
                                mB = H(nB, 5, cQ);
                                var dQ = vb.shift();
                                lB = H(mB, 6, dQ);
                                var eQ = vb.shift();
                                kB = H(lB, 7, eQ);
                                jB = dg(rB, 7, kB);
                                var fQ = vb.shift();
                                iB = H(jB, 8, fQ);
                                var gQ = vb.shift();
                                hB = H(iB, 9, gQ);
                                var hQ = vb.shift();
                                gB = H(hB, 10, hQ);
                                var iQ = vb.shift();
                                var zB = RP = H(gB, 11, iQ);
                                if (Oi.length ===
                                    1) var AB = uC(zB);
                                else {
                                    var jQ = uC(zB),
                                        BB = void 0,
                                        CB = void 0,
                                        DB = void 0,
                                        EB = Oi[1];
                                    if (EB.length === 0) throw Error("Cannot decode empty GPC segment string.");
                                    var FB = tz(EB, 3),
                                        gm = rz(FB.slice(0, 2));
                                    if (gm < 0 || gm > 1) throw Error("Attempting to decode unknown GPC segment subsection type " + gm + ".");
                                    DB = gm + 1;
                                    var kQ = rz(FB.slice(2, 3)),
                                        lQ = new sC;
                                    CB = H(lQ, 2, DB);
                                    BB = vg(CB, 1, !!kQ);
                                    AB = dg(jQ, 2, BB)
                                }
                                var GB = AB,
                                    HB = E(GB, rC, 1);
                                F(HB, 5) !== 1 && F(HB, 6) !== 1 || (d = !0);
                                var mQ = E(GB, rC, 1);
                                var IB = F(mQ, 8);
                                IB !== 1 && IB !== 2 || (f = !0);
                                break;
                            case 12:
                                if (S.length ===
                                    0) throw Error("Cannot decode empty usct section string.");
                                var Pi = S.split(".");
                                if (Pi.length > 2) throw Error("Expected at most 2 segments but got " + Pi.length + " when decoding " + S + ".");
                                var nQ = void 0,
                                    JB = void 0,
                                    KB = void 0,
                                    LB = void 0,
                                    MB = void 0,
                                    NB = void 0,
                                    OB = void 0,
                                    PB = void 0,
                                    QB = void 0,
                                    RB = void 0,
                                    SB = void 0,
                                    TB = void 0,
                                    UB = void 0,
                                    VB = void 0,
                                    WB = void 0,
                                    XB = void 0,
                                    YB = void 0,
                                    ZB = void 0,
                                    $B = void 0,
                                    aC = void 0,
                                    bC = void 0,
                                    cC = void 0,
                                    dC = Pi[0];
                                if (dC.length === 0) throw Error("Cannot decode empty core segment string.");
                                var hm = tz(dC, EC),
                                    Xq = rz(hm.slice(0, 6));
                                hm = hm.slice(6);
                                if (Xq !== 1) throw Error("Unable to decode unsupported USCT Section specification version " + Xq + " - only version 1 is supported.");
                                for (var Yq = 0, fb = [], Zq = 0; Zq < DC.length; Zq++) {
                                    var eC = DC[Zq];
                                    fb.push(rz(hm.slice(Yq, Yq + eC)));
                                    Yq += eC
                                }
                                var oQ = new zC;
                                cC = xg(oQ, 1, Xq);
                                var pQ = fb.shift();
                                bC = H(cC, 2, pQ);
                                var qQ = fb.shift();
                                aC = H(bC, 3, qQ);
                                var rQ = fb.shift();
                                $B = H(aC, 4, rQ);
                                var sQ = fb.shift();
                                ZB = H($B, 5, sQ);
                                var tQ = fb.shift();
                                YB = H(ZB, 6, tQ);
                                var uQ = new yC,
                                    vQ = fb.shift();
                                XB = H(uQ, 1, vQ);
                                var wQ = fb.shift();
                                WB = H(XB, 2, wQ);
                                var xQ = fb.shift();
                                VB = H(WB, 3, xQ);
                                var yQ = fb.shift();
                                UB = H(VB, 4, yQ);
                                var zQ = fb.shift();
                                TB = H(UB, 5, zQ);
                                var AQ = fb.shift();
                                SB = H(TB, 6, AQ);
                                var BQ = fb.shift();
                                RB = H(SB, 7, BQ);
                                var CQ = fb.shift();
                                QB = H(RB, 8, CQ);
                                PB = dg(YB, 7, QB);
                                var DQ = new xC,
                                    EQ = fb.shift();
                                OB = H(DQ, 1, EQ);
                                var FQ = fb.shift();
                                NB = H(OB, 2, FQ);
                                var GQ = fb.shift();
                                MB = H(NB, 3, GQ);
                                LB = dg(PB, 8, MB);
                                var HQ = fb.shift();
                                KB = H(LB, 9, HQ);
                                var IQ = fb.shift();
                                JB = H(KB, 10, IQ);
                                var JQ = fb.shift();
                                var fC = nQ = H(JB, 11, JQ);
                                if (Pi.length === 1) var gC = CC(fC);
                                else {
                                    var KQ = CC(fC),
                                        hC = void 0,
                                        iC = void 0,
                                        jC = void 0,
                                        kC = Pi[1];
                                    if (kC.length === 0) throw Error("Cannot decode empty GPC segment string.");
                                    var lC = tz(kC, 3),
                                        im = rz(lC.slice(0, 2));
                                    if (im < 0 || im > 1) throw Error("Attempting to decode unknown GPC segment subsection type " + im + ".");
                                    jC = im + 1;
                                    var LQ = rz(lC.slice(2, 3)),
                                        MQ = new AC;
                                    iC = H(MQ, 2, jC);
                                    hC = vg(iC, 1, !!LQ);
                                    gC = dg(KQ, 2, hC)
                                }
                                var mC = gC,
                                    $q = E(mC, zC, 1),
                                    jm = E($q, xC, 8);
                                F($q, 5) !== 1 && F($q, 6) !== 1 && (jm == null ? void 0 : F(jm, 2)) !== 1 && (jm == null ? void 0 : F(jm, 3)) !== 1 || (d = !0);
                                var NQ = E(mC, zC, 1);
                                var km = E(NQ, xC, 8);
                                (km == null ? void 0 :
                                    F(km, 1)) !== 1 && (km == null ? void 0 : F(km, 1)) !== 2 || (f = !0);
                                break;
                            case 13:
                                if (S.length === 0) throw Error("Cannot decode empty USFL section string.");
                                var lm = tz(S, JC),
                                    ar = rz(lm.slice(0, 6));
                                lm = lm.slice(6);
                                if (ar !== 1) throw Error("Unable to decode unsupported USFL Section specification version " + ar + " - only version 1 is supported.");
                                for (var br = 0, ab = [], cr = 0; cr < IC.length; cr++) {
                                    var nC = IC[cr];
                                    ab.push(rz(lm.slice(br, br + nC)));
                                    br += nC
                                }
                                var OQ = ar,
                                    PQ = new HC,
                                    QQ = xg(PQ, 1, OQ),
                                    RQ = ab.shift(),
                                    SQ = H(QQ, 2, RQ),
                                    TQ = ab.shift(),
                                    UQ = H(SQ, 3, TQ),
                                    VQ = ab.shift(),
                                    WQ = H(UQ, 4, VQ),
                                    XQ = ab.shift(),
                                    YQ = H(WQ, 5, XQ),
                                    ZQ = ab.shift();
                                var $Q = H(YQ, 6, ZQ);
                                var aR = new GC,
                                    bR = ab.shift(),
                                    cR = H(aR, 1, bR),
                                    dR = ab.shift(),
                                    eR = H(cR, 2, dR),
                                    fR = ab.shift(),
                                    gR = H(eR, 3, fR),
                                    hR = ab.shift(),
                                    iR = H(gR, 4, hR),
                                    jR = ab.shift(),
                                    kR = H(iR, 5, jR),
                                    lR = ab.shift(),
                                    mR = H(kR, 6, lR),
                                    nR = ab.shift(),
                                    oR = H(mR, 7, nR),
                                    pR = ab.shift();
                                var qR = H(oR, 8, pR);
                                var rR = dg($Q, 7, qR);
                                var sR = new FC,
                                    tR = ab.shift(),
                                    uR = H(sR, 1, tR),
                                    vR = ab.shift(),
                                    wR = H(uR, 2, vR),
                                    xR = ab.shift();
                                var yR = H(wR, 3, xR);
                                var zR = dg(rR, 8, yR),
                                    AR = ab.shift(),
                                    BR = H(zR, 9, AR),
                                    CR =
                                    ab.shift(),
                                    DR = H(BR, 10, CR),
                                    ER = ab.shift(),
                                    FR = H(DR, 11, ER),
                                    GR = ab.shift(),
                                    mm = H(FR, 12, GR),
                                    nm = E(mm, FC, 8);
                                F(mm, 5) !== 1 && F(mm, 6) !== 1 && (nm == null ? void 0 : F(nm, 2)) !== 1 && (nm == null ? void 0 : F(nm, 3)) !== 1 || (d = !0);
                                var oC = void 0,
                                    pC = (oC = E(mm, FC, 8)) == null ? void 0 : F(oC, 1);
                                pC !== 1 && pC !== 2 || (f = !0)
                        }
                    }
                }
            }
            return {
                Kk: c,
                Ih: d,
                Lk: e,
                qk: f
            }
        },
        JE = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                internalErrorState: 2,
                gppString: "GPP_ERROR_STRING_UNAVAILABLE",
                applicableSections: [-1]
            },
            listenerId: -1
        },
        HE = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_ERROR_STRING_LISTENER_REGISTRATION_TIMEOUT",
                internalErrorState: 2,
                applicableSections: [-1]
            },
            listenerId: -1
        },
        IE = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_ERROR_STRING_REMOVE_EVENT_LISTENER_ERROR",
                internalErrorState: 2,
                applicableSections: [-1]
            },
            listenerId: -1
        };
    dE([1, 8, 9, 10, 11, 12, 2, 3, 4, 5, 15, 16, 19, 20, 21, 23]);
    dE([1, 6, 7, 9, 10, 11, 12, 2, 3, 4, 5, 13, 14, 18, 19, 20, 21, 23]);
    dE([1, 6, 7, 9, 10, 11, 12, 22, 2, 3, 4, 5, 13, 14, 17, 18, 19, 20, 21, 23]);
    new cE;
    var LE = function(a, b) {
        this.g = this.A = this.o = "";
        this.I = null;
        this.L = this.j = "";
        this.B = !1;
        var c;
        a instanceof LE ? (this.B = b !== void 0 ? b : a.B, ME(this, a.o), this.A = a.A, this.g = a.g, NE(this, a.I), this.j = a.j, OE(this, PE(a.l)), this.L = a.F()) : a && (c = String(a).match(dp)) ? (this.B = !!b, ME(this, c[1] || "", !0), this.A = QE(c[2] || ""), this.g = QE(c[3] || "", !0), NE(this, c[4]), this.j = QE(c[5] || "", !0), OE(this, c[6] || "", !0), this.L = QE(c[7] || "")) : (this.B = !!b, this.l = new RE(null, this.B))
    };
    LE.prototype.toString = function() {
        var a = [],
            b = this.o;
        b && a.push(SE(b, TE, !0), ":");
        var c = this.g;
        if (c || b == "file") a.push("//"), (b = this.A) && a.push(SE(b, TE, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.I, c != null && a.push(":", String(c));
        if (c = this.j) this.g && c.charAt(0) != "/" && a.push("/"), a.push(SE(c, c.charAt(0) == "/" ? UE : VE, !0));
        (c = this.l.toString()) && a.push("?", c);
        (c = this.F()) && a.push("#", SE(c, WE));
        return a.join("")
    };
    LE.prototype.resolve = function(a) {
        var b = this.G(),
            c = !!a.o;
        c ? ME(b, a.o) : c = !!a.A;
        c ? b.A = a.A : c = !!a.g;
        c ? b.g = a.g : c = a.I != null;
        var d = a.j;
        if (c) NE(b, a.I);
        else if (c = !!a.j) {
            if (d.charAt(0) != "/")
                if (this.g && !this.j) d = "/" + d;
                else {
                    var e = b.j.lastIndexOf("/");
                    e != -1 && (d = b.j.slice(0, e + 1) + d)
                }
            e = d;
            if (e == ".." || e == ".") d = "";
            else if (Kb(e, "./") || Kb(e, "/.")) {
                d = e.lastIndexOf("/", 0) == 0;
                e = e.split("/");
                for (var f = [], g = 0; g < e.length;) {
                    var h = e[g++];
                    h == "." ? d && g == e.length && f.push("") : h == ".." ? ((f.length > 1 || f.length == 1 && f[0] != "") && f.pop(), d &&
                        g == e.length && f.push("")) : (f.push(h), d = !0)
                }
                d = f.join("/")
            } else d = e
        }
        c ? b.j = d : c = a.l.toString() !== "";
        c ? OE(b, PE(a.l)) : c = !!a.L;
        c && (b.L = a.F());
        return b
    };
    LE.prototype.G = function() {
        return new LE(this)
    };
    var ME = function(a, b, c) {
            a.o = c ? QE(b, !0) : b;
            a.o && (a.o = a.o.replace(/:$/, ""))
        },
        NE = function(a, b) {
            if (b) {
                b = Number(b);
                if (isNaN(b) || b < 0) throw Error("Bad port number " + b);
                a.I = b
            } else a.I = null
        },
        OE = function(a, b, c) {
            b instanceof RE ? (a.l = b, XE(a.l, a.B)) : (c || (b = SE(b, YE)), a.l = new RE(b, a.B))
        },
        ZE = function(a, b, c) {
            a.l.set(b, c);
            return a
        },
        $E = function(a, b) {
            return a.l.get(b)
        };
    LE.prototype.F = function() {
        return this.L
    };
    var aF = function(a) {
            return a instanceof LE ? a.G() : new LE(a, void 0)
        },
        QE = function(a, b) {
            return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
        },
        SE = function(a, b, c) {
            return typeof a === "string" ? (a = encodeURI(a).replace(b, bF), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
        },
        bF = function(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        },
        TE = /[#\/\?@]/g,
        VE = /[#\?:]/g,
        UE = /[#\?]/g,
        YE = /[#\?@]/g,
        WE = /#/g,
        RE = function(a, b) {
            this.j = this.g = null;
            this.l = a || null;
            this.o = !!b
        },
        cF =
        function(a) {
            a.g || (a.g = new Map, a.j = 0, a.l && fp(a.l, function(b, c) {
                a.add(jj(b), c)
            }))
        };
    RE.prototype.add = function(a, b) {
        cF(this);
        this.l = null;
        a = dF(this, a);
        var c = this.g.get(a);
        c || this.g.set(a, c = []);
        c.push(b);
        this.j += 1;
        return this
    };
    RE.prototype.remove = function(a) {
        cF(this);
        a = dF(this, a);
        return this.g.has(a) ? (this.l = null, this.j -= this.g.get(a).length, this.g.delete(a)) : !1
    };
    RE.prototype.clear = function() {
        this.g = this.l = null;
        this.j = 0
    };
    RE.prototype.isEmpty = function() {
        cF(this);
        return this.j == 0
    };
    var eF = function(a, b) {
        cF(a);
        b = dF(a, b);
        return a.g.has(b)
    };
    m = RE.prototype;
    m.forEach = function(a, b) {
        cF(this);
        this.g.forEach(function(c, d) {
            c.forEach(function(e) {
                a.call(b, e, d, this)
            }, this)
        }, this)
    };
    m.bd = function() {
        cF(this);
        for (var a = Array.from(this.g.values()), b = Array.from(this.g.keys()), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    m.bc = function(a) {
        cF(this);
        var b = [];
        if (typeof a === "string") eF(this, a) && (b = b.concat(this.g.get(dF(this, a))));
        else {
            a = Array.from(this.g.values());
            for (var c = 0; c < a.length; c++) b = b.concat(a[c])
        }
        return b
    };
    m.set = function(a, b) {
        cF(this);
        this.l = null;
        a = dF(this, a);
        eF(this, a) && (this.j -= this.g.get(a).length);
        this.g.set(a, [b]);
        this.j += 1;
        return this
    };
    m.get = function(a, b) {
        if (!a) return b;
        a = this.bc(a);
        return a.length > 0 ? String(a[0]) : b
    };
    m.toString = function() {
        if (this.l) return this.l;
        if (!this.g) return "";
        for (var a = [], b = Array.from(this.g.keys()), c = 0; c < b.length; c++) {
            var d = b[c],
                e = encodeURIComponent(String(d));
            d = this.bc(d);
            for (var f = 0; f < d.length; f++) {
                var g = e;
                d[f] !== "" && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g)
            }
        }
        return this.l = a.join("&")
    };
    var PE = function(a) {
            var b = new RE;
            b.l = a.l;
            a.g && (b.g = new Map(a.g), b.j = a.j);
            return b
        },
        dF = function(a, b) {
            b = String(b);
            a.o && (b = b.toLowerCase());
            return b
        },
        XE = function(a, b) {
            b && !a.o && (cF(a), a.l = null, a.g.forEach(function(c, d) {
                var e = d.toLowerCase();
                d != e && (this.remove(d), this.remove(e), c.length > 0 && (this.l = null, this.g.set(dF(this, e), tc(c)), this.j += c.length))
            }, a));
            a.o = b
        };
    var fF, gF, hF, iF = function() {
            return y.navigator ? y.navigator.userAgent : ""
        },
        jF = Kb(iF(), "(iPad") || Kb(iF(), "(Macintosh") || Kb(iF(), "(iPod") || Kb(iF(), "(iPhone");
    var kF = "ad.doubleclick.net bid.g.doubleclick.net ggpht.com google.co.uk google.com googleads.g.doubleclick.net googleads4.g.doubleclick.net googleadservices.com googlesyndication.com googleusercontent.com gstatic.com gvt1.com prod.google.com pubads.g.doubleclick.net s0.2mdn.net static.doubleclick.net surveys.g.doubleclick.net youtube.com ytimg.com".split(" "),
        lF = ["c.googlesyndication.com"];

    function mF(a, b) {
        b = b === void 0 ? window.location.protocol : b;
        var c = !1;
        a == null || !a.startsWith("http") || (a == null ? 0 : a.startsWith("https")) ? c = !1 : nF(a, lF) ? c = !1 : b.includes("https") && nF(a, kF) && (c = !0);
        return c ? (a = new LE(a), M(L.getInstance(), "htp", "1"), ME(a, "https"), a.toString()) : a
    }

    function oF(a) {
        if (!a) return !1;
        try {
            return (typeof a === "string" ? new LE(a) : a).o === "gcache"
        } catch (b) {
            return !1
        }
    }

    function pF(a) {
        return oF(a) && !!$E(new LE(a), "url")
    }

    function qF(a) {
        try {
            var b = typeof a === "string" ? new LE(a) : a;
            if (oF(b)) {
                var c, d;
                return (d = (c = $E(b, "url")) != null ? c : $E(b, "tag.check_url")) != null ? d : null
            }
        } catch (e) {}
        return null
    }

    function nF(a, b) {
        return (new RegExp("^https?://([a-z0-9-]{1,63}\\.)*(" + b.join("|").replace(/\./g, "\\.") + ")(:[0-9]+)?([/?#]|$)", "i")).test(a)
    };
    var rF = -1;

    function sF(a, b) {
        b = b != null ? b : "";
        Dc && (b = "");
        if (!Bb(nj(a))) {
            var c = a instanceof Wi || !eE.test(a) ? a : Xi(a);
            if (c instanceof Wi) var d = c;
            else {
                d = d === void 0 ? aj : d;
                a: if (d = d === void 0 ? aj : d, !(a instanceof Wi)) {
                    for (c = 0; c < d.length; ++c) {
                        var e = d[c];
                        if (e instanceof Zi && e.Ch(a)) {
                            a = Xi(a);
                            break a
                        }
                    }
                    a = void 0
                }
                d = a || Yi
            }
            a = window;
            if (d instanceof Wi)
                if (d instanceof Wi) d = d.g;
                else throw Error("");
            else d = cj.test(d) ? d : void 0;
            d !== void 0 && a.open(d, "_blank", b)
        }
    };

    function tF(a, b) {
        for (var c; !(c = a.next()).done;) b(c.value)
    }
    var uF = function(a, b) {
        this.g = a[y.Symbol.iterator]();
        this.j = b
    };
    uF.prototype[Symbol.iterator] = function() {
        return this
    };
    uF.prototype.next = function() {
        var a = this.g.next();
        return {
            value: a.done ? void 0 : this.j.call(void 0, a.value),
            done: a.done
        }
    };
    var vF = function(a, b) {
        return new uF(a, b)
    };
    var wF = function(a, b) {
        var c = new Set(a);
        tF(b[Symbol.iterator](), function(d) {
            return c.add(d)
        });
        return c
    };
    var xF = {
            attributes: !0,
            attributeFilter: ["style", "class"]
        },
        yF = new Map;

    function zF(a, b, c, d) {
        return typeof DOMRect !== "undefined" ? new DOMRect(a, b, c, d) : {
            x: a,
            y: b,
            width: c,
            height: d,
            top: b,
            bottom: b + d,
            left: a,
            right: a + c,
            toJSON: function() {
                return this
            }
        }
    }

    function AF(a, b) {
        return ["top", "left", "width", "height"].every(function(c) {
            return Math.abs(Number(a[c]) - Number(b[c])) <= 1
        })
    }
    var BF = function() {
        this.l = this.g = this.j = null
    };

    function CF(a, b, c, d) {
        var e = a.getBoundingClientRect();
        AF(b, e) ? (e = setTimeout(function() {
            return CF(a, b, c, d)
        }, 200), d.l = e) : (DF(d), c(e))
    }

    function EF(a) {
        var b = new BF,
            c = new Promise(function(f) {
                var g = a.getBoundingClientRect();
                if ("ResizeObserver" in window) {
                    var h = new ResizeObserver(function(k) {
                        window.requestAnimationFrame(function() {
                            for (var l = v(k), n = l.next(); !n.done; n = l.next()) {
                                var p = n.value;
                                if (p.contentBoxSize) {
                                    var q = Array.isArray(p.contentBoxSize) ? p.contentBoxSize[0] : p.contentBoxSize;
                                    n = Math.round(q.inlineSize);
                                    q = Math.round(q.blockSize)
                                } else n = Math.round(p.contentRect.width), q = Math.round(p.contentRect.height);
                                var u = void 0,
                                    w = void 0,
                                    t = ((u =
                                        p) == null ? void 0 : (w = u.contentRect) == null ? void 0 : w.left) || g.left;
                                w = u = void 0;
                                p = ((u = p) == null ? void 0 : (w = u.contentRect) == null ? void 0 : w.top) || g.top;
                                n = zF(t, p, n, q);
                                if (!AF(g, n)) return DF(b), f(n)
                            }
                        })
                    });
                    b.j = h;
                    h.observe(a);
                    h = new MutationObserver(function() {
                        window.requestAnimationFrame(function() {
                            var k = a.getBoundingClientRect();
                            if (!AF(g, k)) return DF(b), f(k)
                        })
                    });
                    b.g = h;
                    h.observe(a, xF)
                } else CF(a, g, f, b)
            }),
            d, e = (d = yF.get(c)) != null ? d : new Set;
        e.add(b);
        yF.set(c, e);
        return c
    }

    function FF(a, b) {
        b = b === void 0 ? zF(0, 0, 1, 1) : b;
        var c = function(g) {
                var h = EF(a),
                    k, l = (k = yF.get(g)) != null ? k : new Set,
                    n;
                k = (n = yF.get(h)) != null ? n : new Set;
                yF.set(g, wF(l, k));
                return h
            },
            d = function(g, h) {
                c(g).then(function(k) {
                    return b.width <= k.width && b.height <= k.height ? (GF(g), h(k)) : d(g, h)
                })
            },
            e, f = new Promise(function(g) {
                e = g
            });
        d(f, e);
        return f
    }

    function GF(a) {
        a = yF.get(a);
        a = v(a);
        for (var b = a.next(); !b.done; b = a.next()) DF(b.value)
    }

    function DF(a) {
        a.l && window.clearTimeout(a.l);
        a.j && (a.j.disconnect(), a.j = null);
        a.g && (a.g.disconnect(), a.g = null)
    };

    function HF(a, b) {
        return a && (a[b] || (a[b] = {}))
    }

    function IF(a, b) {
        var c;
        if (c = c === void 0 ? typeof omidExports === "undefined" ? null : omidExports : c) a = a.split("."), a.slice(0, a.length - 1).reduce(HF, c)[a[a.length - 1]] = b
    };
    var JF = new Map([
        [2, [/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.moatads\.com\/.*$/]],
        [3, [/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.doubleverify\.com\/.*$/, /^(https?:\/\/|\/\/)?c\.[\w\-]+\.com\/vfw\/dv\/.*$/, /^(https?:\/\/|\/\/)?(www\.)?[\w]+\.tv\/r\/s\/d\/.*$/, /^(https?:\/\/|\/\/)?(\w\.?)+\.dv\.tech\/.*$/]],
        [4, [/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.adsafeprotected\.com\/.*$/]],
        [5, [/^https?:\/\/(q|cdn)\.adrta\.com\/s\/.*\/(aa|aanf)\.js.*$/, /^https:\/\/cdn\.rta247\.com\/s\/.*\/(aa|aanf)\.js.*$/]],
        [6, []],
        [7, [/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.voicefive\.com\/.*$/,
            /^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.measuread\.com\/.*$/, /^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.scorecardresearch\.com\/.*$/
        ]],
        [8, [/^(https?:\/\/|\/\/)?s418\.mxcdn\.net\/bb-serve\/omid-meetrics.*\.js$/]],
        [9, [/^(https?:\/\/|\/\/)?pagead2\.googlesyndication\.com\/.*$/, /^(https?:\/\/|\/\/)?www\.googletagservices\.com\/.*$/]]
    ]);
    IF("OmidSessionClient.verificationVendorIdForScriptUrl", function(a) {
        for (var b = v(JF.keys()), c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            for (var d = v(JF.get(c)), e = d.next(); !e.done; e = d.next())
                if (e.value.test(a)) return c
        }
        return 1
    });
    IF("OmidSessionClient.VerificationVendorId", {
        OTHER: 1,
        MOAT: 2,
        DOUBLEVERIFY: 3,
        INTEGRAL_AD_SCIENCE: 4,
        PIXELATE: 5,
        NIELSEN: 6,
        COMSCORE: 7,
        MEETRICS: 8,
        GOOGLE: 9
    });
    var KF = /OS (\S+) like/,
        LF = /Android ([\d\.]+)/;

    function MF(a, b) {
        a = (a = a.exec(Qb())) ? a[1] : "";
        a = a.replace(/_/g, ".");
        return Mb(a, b) >= 0
    }
    var NF = function() {
            return Lc || Hc && "ontouchstart" in document.documentElement
        },
        OF = function(a) {
            return (a = a === void 0 ? null : a) && typeof a.getAttribute === "function" ? a.getAttribute("playsinline") ? !0 : !1 : !1
        };
    var PF = function(a) {
        R.call(this);
        this.g = a;
        this.o = this.A = !1;
        this.C = this.F = 0;
        this.j = new Xx(1E3);
        Os(this, this.j);
        jx(this.j, "tick", this.G, !1, this);
        jx(this.g, "pause", this.l, !1, this);
        jx(this.g, "playing", this.l, !1, this);
        jx(this.g, "ended", this.l, !1, this);
        jx(this.g, "timeupdate", this.l, !1, this)
    };
    r(PF, R);
    var QF = function(a) {
        var b = "currentTime";
        if (a.g[b]) return a.g[b];
        b = "getCurrentTime";
        return a.g[b] ? a.g[b]() : 0
    };
    PF.prototype.l = function(a) {
        switch (a.type) {
            case "playing":
                RF(this);
                break;
            case "pause":
            case "ended":
                this.j.enabled && this.j.stop();
                break;
            case "timeupdate":
                !this.A && QF(this) > 0 && (this.A = !0, RF(this))
        }
    };
    var RF = function(a) {
        !a.j.enabled && a.A && (a.F = QF(a) * 1E3, a.C = Date.now(), a.o = !1, a.j.start())
    };
    PF.prototype.G = function() {
        var a = Date.now(),
            b = a - this.C,
            c = QF(this) * 1E3;
        c - this.F < b * .5 ? this.o || (this.o = !0, this.dispatchEvent("playbackStalled")) : this.o = !1;
        this.F = c;
        this.C = a
    };
    var SF = "://secure-...imrworldwide.com/ ://cdn.imrworldwide.com/ ://aksecure.imrworldwide.com/ ://[^.]*.moatads.com ://youtube[0-9]+.moatpixel.com ://pm.adsafeprotected.com/youtube ://pm.test-adsafeprotected.com/youtube ://e[0-9]+.yt.srs.doubleverify.com www.google.com/pagead/xsul www.youtube.com/pagead/slav".split(" "),
        TF = /\bocr\b/;

    function UF(a) {
        if (Bb(nj(a)) || Dc && a.length > 2048) return !1;
        try {
            if ((new LE(a)).F().match(TF)) return !0
        } catch (b) {}
        return SF.find(function(b) {
            return a.match(b) != null
        }) != null
    };

    function VF(a, b) {
        return Bb(b) ? !1 : (new RegExp(a)).test(b)
    }

    function WF(a) {
        var b = {};
        a.split(",").forEach(function(c) {
            var d = c.split("=");
            d.length == 2 && (c = Cb(d[0]), d = Cb(d[1]), c.length > 0 && (b[c] = d))
        });
        return b
    }

    function XF(a) {
        var b = "af am ar_eg ar_sa ar_xb ar be bg bn ca cs da de_at de_cn de el en_au en_ca en_gb en_ie en_in en_sg en_xa en_xc en_za en es_419 es_ar es_bo es_cl es_co es_cr es_do es_ec es_gt es_hn es_mx es_ni es_pa es_pe es_pr es_py es_sv es_us es_uy es_ve es et eu fa fi fil fr_ca fr_ch fr gl gsw gu he hi hr hu id in is it iw ja kn ko ln lo lt lv ml mo mr ms nb ne nl no pl pt_br pt_pt pt ro ru sk sl sr_latn sr sv sw ta te th tl tr uk ur vi zh_cn zh_hk zh_tw zh zu".split(" ");
        if (!a) return null;
        a = a.toLowerCase().replace("-", "_");
        if (b.includes(a)) return a;
        a = (a = a.match(/^\w{2,3}([-_]|$)/)) ? a[0].replace(/[_-]/g, "") : "";
        return b.includes(a) ? a : null
    };
    var YF = function() {
        this.g = Date.now()
    };
    YF.prototype.reset = function() {
        this.g = Date.now()
    };
    var ZF = function(a) {
        a = a.g + 5E3 - Date.now();
        return a > 0 ? a : 0
    };
    var $F = function(a, b) {
        this.url = a;
        this.g = b === void 0 ? null : b
    };
    var aG = function(a) {
        switch (a) {
            case 0:
                return "No Error";
            case 1:
                return "Access denied to content document";
            case 2:
                return "File not found";
            case 3:
                return "Firefox silently errored";
            case 4:
                return "Application custom error";
            case 5:
                return "An exception occurred";
            case 6:
                return "Http response at 400 or 500 level";
            case 7:
                return "Request was aborted";
            case 8:
                return "Request timed out";
            case 9:
                return "The resource is not available offline";
            default:
                return "Unrecognized error code"
        }
    };
    var bG = function(a) {
        var b = Error.call(this, a);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.errorCode = a
    };
    r(bG, Error);

    function cG(a) {
        a = a === null ? "null" : a === void 0 ? "undefined" : a;
        var b = Ti();
        a = b ? b.createHTML(a) : a;
        return new dj(a)
    };
    var dG = function(a) {
        Q.call(this);
        this.o = a;
        this.j = {}
    };
    pb(dG, Q);
    var eG = [];
    dG.prototype.listen = function(a, b, c, d) {
        return fG(this, a, b, c, d)
    };
    var fG = function(a, b, c, d, e, f) {
        Array.isArray(c) || (c && (eG[0] = c.toString()), c = eG);
        for (var g = 0; g < c.length; g++) {
            var h = jx(b, c[g], d || a.handleEvent, e || !1, f || a.o || a);
            if (!h) break;
            a.j[h.key] = h
        }
        return a
    };
    dG.prototype.Ec = function(a, b, c, d) {
        return gG(this, a, b, c, d)
    };
    var gG = function(a, b, c, d, e, f) {
        if (Array.isArray(c))
            for (var g = 0; g < c.length; g++) gG(a, b, c[g], d, e, f);
        else {
            b = ix(b, c, d || a.handleEvent, e, f || a.o || a);
            if (!b) return a;
            a.j[b.key] = b
        }
        return a
    };
    dG.prototype.ab = function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) this.ab(a, b[f], c, d, e);
        else c = c || this.handleEvent, d = bb(d) ? !!d.capture : !!d, e = e || this.o || this, c = kx(c), d = !!d, b = Zw(a) ? a.zc(b, c, d, e) : a ? (a = mx(a)) ? a.zc(b, c, d, e) : null : null, b && (rx(b), delete this.j[b.key])
    };
    var hG = function(a) {
        ti(a.j, function(b, c) {
            this.j.hasOwnProperty(c) && rx(b)
        }, a);
        a.j = {}
    };
    dG.prototype.O = function() {
        dG.Za.O.call(this);
        hG(this)
    };
    dG.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };
    var iG = function() {
        R.call(this);
        this.headers = new Map;
        this.j = !1;
        this.g = null;
        this.H = "";
        this.o = 0;
        this.l = this.G = this.A = this.F = !1;
        this.K = 0;
        this.C = null;
        this.U = "";
        this.M = !1
    };
    pb(iG, R);
    var jG = /^https?$/i,
        kG = ["POST", "PUT"],
        nG = function(a, b, c, d) {
            if (a.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + a.H + "; newUri=" + b);
            c = c ? c.toUpperCase() : "GET";
            a.H = b;
            a.o = 0;
            a.F = !1;
            a.j = !0;
            a.g = new XMLHttpRequest;
            a.g.onreadystatechange = ux(kb(a.P, a));
            try {
                a.G = !0, a.g.open(c, String(b), !0), a.G = !1
            } catch (g) {
                lG(a);
                return
            }
            b = d || "";
            d = new Map(a.headers);
            var e = Array.from(d.keys()).find(function(g) {
                    return "content-type" == g.toLowerCase()
                }),
                f = y.FormData && b instanceof y.FormData;
            !oc(kG, c) || e || f || d.set("Content-Type",
                "application/x-www-form-urlencoded;charset=utf-8");
            c = v(d);
            for (d = c.next(); !d.done; d = c.next()) e = v(d.value), d = e.next().value, e = e.next().value, a.g.setRequestHeader(d, e);
            a.U && (a.g.responseType = a.U);
            "withCredentials" in a.g && a.g.withCredentials !== a.M && (a.g.withCredentials = a.M);
            try {
                mG(a), a.K > 0 && (a.C = setTimeout(a.aa.bind(a), a.K)), a.A = !0, a.g.send(b), a.A = !1
            } catch (g) {
                lG(a)
            }
        };
    iG.prototype.aa = function() {
        typeof Va != "undefined" && this.g && (this.o = 8, this.dispatchEvent("timeout"), this.abort(8))
    };
    var lG = function(a) {
            a.j = !1;
            a.g && (a.l = !0, a.g.abort(), a.l = !1);
            a.o = 5;
            oG(a);
            pG(a)
        },
        oG = function(a) {
            a.F || (a.F = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
        };
    iG.prototype.abort = function(a) {
        this.g && this.j && (this.j = !1, this.l = !0, this.g.abort(), this.l = !1, this.o = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), pG(this))
    };
    iG.prototype.O = function() {
        this.g && (this.j && (this.j = !1, this.l = !0, this.g.abort(), this.l = !1), pG(this, !0));
        iG.Za.O.call(this)
    };
    iG.prototype.P = function() {
        this.Ja() || (this.G || this.A || this.l ? qG(this) : this.V())
    };
    iG.prototype.V = function() {
        qG(this)
    };
    var qG = function(a) {
            if (a.j && typeof Va != "undefined")
                if (a.A && (a.g ? a.g.readyState : 0) == 4) setTimeout(a.P.bind(a), 0);
                else if (a.dispatchEvent("readystatechange"), (a.g ? a.g.readyState : 0) == 4) {
                a.j = !1;
                try {
                    var b = rG(a);
                    a: switch (b) {
                        case 200:
                        case 201:
                        case 202:
                        case 204:
                        case 206:
                        case 304:
                        case 1223:
                            var c = !0;
                            break a;
                        default:
                            c = !1
                    }
                    var d;
                    if (!(d = c)) {
                        var e;
                        if (e = b === 0) {
                            var f = String(a.H).match(dp)[1] || null;
                            !f && y.self && y.self.location && (f = y.self.location.protocol.slice(0, -1));
                            e = !jG.test(f ? f.toLowerCase() : "")
                        }
                        d = e
                    }
                    d ? (a.dispatchEvent("complete"),
                        a.dispatchEvent("success")) : (a.o = 6, oG(a))
                } finally {
                    pG(a)
                }
            }
        },
        pG = function(a, b) {
            if (a.g) {
                mG(a);
                var c = a.g;
                a.g = null;
                b || a.dispatchEvent("ready");
                try {
                    c.onreadystatechange = null
                } catch (d) {}
            }
        },
        mG = function(a) {
            a.C && (clearTimeout(a.C), a.C = null)
        };
    iG.prototype.isActive = function() {
        return !!this.g
    };
    var rG = function(a) {
            try {
                return (a.g ? a.g.readyState : 0) > 2 ? a.g.status : -1
            } catch (b) {
                return -1
            }
        },
        sG = function(a) {
            if (a.g) {
                a: {
                    a = a.g.responseText;
                    if (y.JSON) try {
                        var b = y.JSON.parse(a);
                        break a
                    } catch (c) {}
                    b = Ym(a)
                }
                return b
            }
        };
    var tG = function() {};
    tG.prototype.get = function(a) {
        return uG({
            url: a.url,
            timeout: a.timeout,
            withCredentials: a.withCredentials === void 0 ? !0 : a.withCredentials,
            method: "GET",
            headers: a.headers === void 0 ? {} : a.headers
        })
    };
    var uG = function(a) {
            var b = a.url;
            var c = a.timeout;
            var d = a.withCredentials;
            var e = a.method;
            var f = a.content === void 0 ? void 0 : a.content;
            var g = a.headers === void 0 ? {} : a.headers;
            return vG({
                url: b,
                timeout: c,
                withCredentials: d,
                method: e,
                content: f,
                headers: g
            }).then(function(h) {
                return Promise.resolve(h)
            }, function(h) {
                return h instanceof Error && h.message == 6 && d ? vG({
                    url: b,
                    timeout: c,
                    withCredentials: !d,
                    method: e,
                    content: f,
                    headers: g
                }) : Promise.reject(h)
            })
        },
        vG = function(a) {
            var b = a.url;
            var c = a.timeout;
            var d = a.withCredentials;
            var e =
                a.method;
            var f = a.content === void 0 ? void 0 : a.content;
            a = a.headers === void 0 ? {} : a.headers;
            var g = new iG;
            g.M = d;
            g.K = Math.max(0, ZF(c));
            for (var h in a) g.headers.set(h, a[h]);
            var k = new dG;
            return new Promise(function(l, n) {
                k.Ec(g, "success", function() {
                    a: {
                        if (es()) try {
                            sG(g);
                            var p = "application/json";
                            break a
                        } catch (w) {
                            p = "application/xml";
                            break a
                        }
                        g.g && (g.g ? g.g.readyState : 0) == 4 ? (p = g.g.getResponseHeader("Content-Type"), p = p === null ? void 0 : p) : p = void 0;p = p || ""
                    }
                    if (p.indexOf("application/json") != -1) try {
                        l(sG(g) || {})
                    } catch (w) {
                        n(new bG(5,
                            rG(g)))
                    } else {
                        try {
                            var q = g.g ? g.g.responseXML : null
                        } catch (w) {
                            q = null
                        }
                        if (q == null) {
                            try {
                                var u = g.g ? g.g.responseText : ""
                            } catch (w) {
                                u = ""
                            }
                            if (typeof DOMParser != "undefined") q = new DOMParser, u = cG(u), q = q.parseFromString(ej(u), "application/xml");
                            else throw Error("Your browser does not support loading xml documents");
                        }
                        l(q)
                    }
                    k.dispose();g.dispose()
                });
                k.Ec(g, ["error", "timeout"], function() {
                    n(new bG(g.o, rG(g)));
                    k.dispose();
                    g.dispose()
                });
                nG(g, mF(b), e, f)
            })
        };
    z("google.javascript.ads.imalib.common.UrlLoader", tG);
    var wG = function() {
        var a = this;
        this.promise = new Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };
    var xG = RegExp("^(https?:)?\\/\\/ad\\.doubleclick\\.net/ddm/track(imp|clk)"),
        AG = function(a, b, c, d, e) {
            c = c === void 0 ? !1 : c;
            d = d === void 0 ? !1 : d;
            e = e === void 0 ? null : e;
            var f, g;
            Qa(function(h) {
                if (h.g == 1) {
                    h.l = 2;
                    b = d ? mF(b, "https") : mF(b);
                    if (f = xG.test(b)) b = b.replace("?", ";tpsrc=ima?"), e = e || "";
                    c = c || UF(b);
                    g = e != null && window.fetch != null;
                    return a.j || g ? Ea(h, yG(a, b, c, e), 5) : Ea(h, zG(a, b, c, e), 5)
                }
                if (h.g != 2) return Ha(h, 0);
                Ia(h);
                h.g = 0
            })
        },
        zG = function(a, b, c, d) {
            d = Ro("attribution-reporting") ? d : null;
            return es() ? BG(b) : CG(a, b, c, d)
        },
        DG =
        function(a, b) {
            var c = {
                keepalive: !0,
                method: "get",
                redirect: "follow",
                credentials: "include"
            };
            a && (c.referrerPolicy = "no-referrer");
            b ? "setAttributionReporting" in XMLHttpRequest.prototype ? (c.attributionReporting = {
                eventSourceEligible: !0,
                triggerEligible: !1
            }, c.mode = "no-cors") : c.headers = {
                "Attribution-Reporting-Eligible": "event-source"
            } : c.mode = "no-cors";
            return c
        },
        yG = function(a, b, c, d) {
            d = d === void 0 ? null : d;
            var e, f, g, h, k, l, n, p, q;
            return Qa(function(u) {
                if (u.g == 1) return M(L.getInstance(), "faa", "1"), M(L.getInstance(),
                    "alp", d === null ? "0" : "1"), e = Ro("attribution-reporting"), M(L.getInstance(), "arpa", e ? "1" : "0"), f = d === "" && e, g = DG(c, f), h = fetch(b, g).then(function() {
                    M(L.getInstance(), "fas", "1")
                }, function() {
                    M(L.getInstance(), "faf", "1");
                    a.j = !1;
                    return zG(a, b, c, d)
                }), k = e && d ? fetch(d, DG(c, !0)) : Promise.resolve(), l = v, Ea(u, Promise.allSettled([h, k]), 2);
                n = l(u.j);
                q = p = n.next().value;
                if (q.status === "rejected") throw q.reason;
                u.g = 0
            })
        },
        CG = function(a, b, c, d) {
            var e = new wG,
                f = Dj("IMG", window.document),
                g = (a.l++).toString();
            a.g.set(g, f);
            f.addEventListener("load",
                function() {
                    a.g.delete(g);
                    e.resolve()
                });
            f.addEventListener("error", function(h) {
                a.g.delete(g);
                e.reject(h)
            });
            c && (f.referrerPolicy = "no-referrer");
            d != null && (f.attributionSrc = d);
            f.src = b;
            return e.promise
        },
        BG = function(a) {
            var b;
            return Qa(function(c) {
                b = new tG;
                return Ea(c, b.get({
                    url: a,
                    timeout: new YF
                }), 0)
            })
        };
    var EG = {
        AUTOPLAY_DISALLOWED: "autoplayDisallowed",
        Hi: "beginFullscreen",
        CAN_PLAY: "canPlay",
        CAN_PLAY_THROUGH: "canPlayThrough",
        CLICK: "click",
        DURATION_CHANGE: "durationChange",
        Ti: "end",
        Ui: "endFullscreen",
        ERROR: "error",
        Yi: "focusSkipButton",
        LOAD_START: "loadStart",
        LOADED: "loaded",
        Dj: "mediaLoadTimeout",
        Ej: "mediaPlaybackTimeout",
        PAUSE: "pause",
        PLAY: "play",
        PLAYING: "playing",
        SEEKED: "seeked",
        SEEKING: "seeking",
        Sj: "skip",
        zg: "skipShown",
        STALLED: "stalled",
        Xe: "start",
        TIME_UPDATE: "timeUpdate",
        Wj: "timedMetadata",
        gk: "volumeChange",
        WAITING: "waiting",
        hk: "windowFocusChanged",
        Zi: "fullyLoaded"
    };
    var FG = function(a, b, c, d) {
        b = b === void 0 ? !1 : b;
        c = c === void 0 ? !1 : c;
        d = d === void 0 ? !1 : d;
        R.call(this);
        this.g = a;
        this.ba = d;
        this.loaded = this.l = !1;
        this.P = null;
        this.A = 0;
        this.j = new dG(this);
        Os(this, this.j);
        this.ah = b && Ic && !Wc || c;
        this.za = []
    };
    r(FG, R);
    m = FG.prototype;
    m.dispatchEvent = function(a) {
        return this.ba ? (this.za.push(a), !0) : R.prototype.dispatchEvent.call(this, a)
    };
    m.releaseEvents = function() {
        var a = this;
        this.ba && (this.ba = !1, this.za.forEach(function(b) {
            a.dispatchEvent(b)
        }))
    };
    m.Ve = function() {
        this.sc();
        this.j.listen(this.g, "ended", this.re);
        this.j.listen(this.g, "pause", this.te);
        this.j.listen(this.g, "playing", this.Cd);
        this.j.listen(this.g, "timeupdate", this.ve);
        this.j.listen(this.g, "volumechange", this.Cf);
        this.j.listen(this.g, "error", this.Wb);
        this.j.listen(this.g, "canplay", this.Jh);
        this.j.listen(this.g, "canplaythrough", this.Kh);
        this.j.listen(this.g, "loadstart", this.Nh);
        this.j.listen(this.g, "durationchange", this.Lh);
        this.j.listen(this.g, "waiting", this.Vh);
        this.j.listen(this.g,
            "seeked", this.Rh);
        this.j.listen(this.g, "seeking", this.Sh);
        this.j.listen(this.g, "stalled", this.Th);
        this.j.listen(this.g, "progress", this.Qh);
        this.j.listen(this.g, "loadeddata", this.se)
    };
    m.sc = function() {
        hG(this.j)
    };
    m.getCurrentTime = function() {
        return this.g.currentTime
    };
    m.getDuration = function() {
        return isNaN(this.g.duration) ? -1 : this.g.duration
    };
    m.getVolume = function() {
        return this.g.muted ? 0 : this.g.volume
    };
    m.vf = function() {
        return this.g.paused
    };
    m.ie = function() {
        return !1
    };
    m.re = function() {
        this.dispatchEvent("end");
        GG(this)
    };
    m.te = function() {
        this.g.ended || this.dispatchEvent("pause");
        GG(this)
    };
    m.Cd = function() {
        this.dispatchEvent("play");
        this.ah && this.Gc()
    };
    m.Gc = function() {
        this.l || (this.l = !0, GG(this), this.dispatchEvent("start"))
    };
    m.ve = function() {
        var a = this.getCurrentTime();
        if (!this.l) {
            if (a <= 0) return;
            if (Wc && this.g.ended && this.getDuration() === 1) {
                this.Wb();
                return
            }
            this.Gc()
        }
        this.A = Math.max(this.A, a);
        this.dispatchEvent("timeUpdate")
    };
    m.Vh = function() {
        this.dispatchEvent("waiting")
    };
    m.Cf = function() {
        this.dispatchEvent("volumeChange")
    };
    m.Lh = function() {
        this.dispatchEvent("durationChange")
    };
    m.Wb = function() {
        GG(this);
        this.dispatchEvent("error")
    };
    m.Jh = function() {
        this.dispatchEvent("canPlay");
        this.se()
    };
    m.Kh = function() {
        this.dispatchEvent("canPlayThrough")
    };
    m.Nh = function() {
        this.dispatchEvent("loadStart")
    };
    m.Rh = function() {
        this.dispatchEvent("seeked")
    };
    m.Sh = function() {
        this.dispatchEvent("seeking")
    };
    m.Th = function() {
        this.dispatchEvent("stalled")
    };
    m.Qh = function() {
        this.g.buffered && this.g.buffered.length && this.g.buffered.end(this.g.buffered.length - 1) === this.getDuration() && (Wm("vfl"), this.dispatchEvent("fullyLoaded"))
    };
    m.se = function() {
        this.loaded || (Wm("vil"), this.loaded = !0, this.dispatchEvent("loaded"))
    };
    m.unload = function() {
        this.g.removeAttribute("src");
        this.g.load()
    };
    m.play = function() {
        this.l || HG(this);
        return this.g.play()
    };
    m.pause = function() {
        this.g.pause()
    };
    var HG = function(a) {
            a.P || (a.P = Yx(function() {
                a.l || a.dispatchEvent("mediaPlaybackTimeout")
            }, 8E3))
        },
        GG = function(a) {
            a.P && (y.clearTimeout(a.P), a.P = null)
        };
    FG.prototype.setVolume = function(a) {
        this.g.volume = a
    };
    FG.prototype.canPlayType = function(a) {
        if (typeof this.g.canPlayType !== "function") return M(L.getInstance(), "vmcpy", "1"), !0;
        a = this.g.canPlayType(a);
        return a !== "" && a != null
    };
    FG.prototype.getSize = function() {
        return ok(this.g)
    };
    var IG = {},
        JG = (IG[18] = -1, IG[22] = -1, IG[43] = 350, IG[44] = 350, IG[45] = 350, IG[59] = -1, IG[133] = 350, IG[134] = 350, IG[135] = 350, IG[136] = 350, IG[139] = 50, IG[140] = 50, IG[141] = 50, IG[160] = 350, IG[242] = 150, IG[243] = 150, IG[244] = 150, IG[245] = 150, IG[247] = 150, IG[249] = 50, IG[250] = 50, IG[251] = 50, IG[278] = 150, IG[342] = -1, IG[343] = -1, IG[344] = -1, IG[345] = -1, IG[346] = -1, IG[347] = -1, IG),
        KG = {},
        LG = (KG[18] = !1, KG[22] = !1, KG[43] = !0, KG[44] = !0, KG[45] = !0, KG[59] = !1, KG[133] = !0, KG[134] = !0, KG[135] = !0, KG[136] = !0, KG[139] = !0, KG[140] = !0, KG[141] = !0, KG[160] = !0,
            KG[242] = !0, KG[243] = !0, KG[244] = !0, KG[245] = !0, KG[247] = !0, KG[249] = !0, KG[250] = !0, KG[251] = !0, KG[278] = !0, KG[342] = !1, KG[343] = !1, KG[344] = !1, KG[345] = !1, KG[346] = !1, KG[347] = !1, KG),
        MG = {},
        NG = (MG[18] = "video/mp4", MG[22] = "video/mp4", MG[43] = "video/webm", MG[44] = "video/webm", MG[45] = "video/webm", MG[59] = "video/mp4", MG[133] = "video/mp4", MG[134] = "video/mp4", MG[135] = "video/mp4", MG[136] = "video/mp4", MG[139] = "audio/mp4", MG[140] = "audio/mp4", MG[141] = "audio/mp4", MG[160] = "video/mp4", MG[242] = "video/webm", MG[243] = "video/webm", MG[244] =
            "video/webm", MG[245] = "video/webm", MG[247] = "video/webm", MG[249] = "audio/webm", MG[250] = "audio/webm", MG[251] = "audio/webm", MG[278] = "video/webm", MG[342] = "video/mp4", MG[343] = "video/mp4", MG[344] = "video/mp4", MG[345] = "video/mp4", MG[346] = "video/mp4", MG[347] = "video/mp4", MG),
        OG = {},
        PG = (OG[18] = "avc1.42001E, mp4a.40.2", OG[22] = "avc1.64001F, mp4a.40.2", OG[43] = "vp8, vorbis", OG[44] = "vp8, vorbis", OG[45] = "vp8, vorbis", OG[59] = "avc1.4D001F, mp4a.40.2", OG[133] = "avc1.4D401E", OG[134] = "avc1.4D401E", OG[135] = "avc1.4D401E", OG[136] =
            "avc1.4D401E", OG[139] = "mp4a.40.2", OG[140] = "mp4a.40.2", OG[141] = "mp4a.40.2", OG[160] = "avc1.4D401E", OG[242] = "vp9", OG[243] = "vp9", OG[244] = "vp9", OG[245] = "vp9", OG[247] = "vp9", OG[249] = "opus", OG[250] = "opus", OG[251] = "opus", OG[278] = "vp9", OG[342] = "avc1.42E01E, mp4a.40.2", OG[343] = "avc1.42E01E, mp4a.40.2", OG[344] = "avc1.42E01E, mp4a.40.2", OG[345] = "avc1.42E01E, mp4a.40.2", OG[346] = "avc1.42E01E, mp4a.40.2", OG[347] = "avc1.4D001F, mp4a.40.2", OG);
    var QG = {
        Gk: 2E5,
        Ek: 7E4,
        Sa: 3E5,
        Ck: 5E3,
        Ok: 5E3,
        Fk: 6E3
    };
    var RG = RegExp("/itag/(\\d+)/");

    function SG(a) {
        var b = Number(hp(a, "itag"));
        return b ? b : (a = a.match(RG)) && a.length === 2 ? Number(a[1]) : null
    }

    function TG(a) {
        var b = NG[a];
        a = PG[a];
        b ? (b = nj(b).toLowerCase(), b = a ? b + '; codecs="' + nj(a) + '"' : b) : b = "";
        return b
    }

    function UG(a, b) {
        if (typeof CustomEvent === "function") return new CustomEvent(a, {
            detail: b
        });
        var c = document.createEvent("CustomEvent");
        c.initCustomEvent(a, !1, !0, b);
        return c
    };

    function VG() {
        return window.ManagedMediaSource || window.MediaSource
    }

    function WG(a) {
        return a !== null && !!window.ManagedMediaSource && a instanceof window.ManagedMediaSource
    }

    function XG(a) {
        return VG() !== void 0 && VG().isTypeSupported(a)
    }

    function YG(a) {
        return [43, 44, 45].includes(a) && Vc ? !1 : LG[a] ? (a = TG(a), !!a && XG(a)) : !1
    };
    var ZG = function() {
        R.apply(this, arguments)
    };
    r(ZG, R);
    ZG.prototype.C = function() {
        return !1
    };
    ZG.prototype.F = function() {
        return -1
    };
    ZG.prototype.G = function() {};
    var $G = function(a, b) {
        ZG.call(this);
        var c = this;
        this.j = b;
        this.A = this.l = this.g = 0;
        this.o = null;
        this.uri = new LE(a);
        this.state = 0;
        var d;
        this.H = (d = this.j) == null ? void 0 : d.initialize();
        Ns(this, function() {
            Ms(c.j)
        })
    };
    r($G, ZG);
    $G.prototype.F = function() {
        return this.g
    };
    $G.prototype.C = function() {
        return this.state === 3
    };
    $G.prototype.G = function(a) {
        this.state === 1 ? (this.g += a, this.state = 2) : this.state === 0 && (this.g += a, this.state = 1, aH(this))
    };
    var aH = function(a) {
            Qa(function(b) {
                if (b.g == 1) return a.state === 2 && (a.state = 1), Ea(b, bH(a), 4);
                var c = a.A > 3;
                if (c) {
                    a.o === null && (a.o = 400);
                    var d = UG("media_source_error", {
                        code: a.l > 0 ? MediaError.MEDIA_ERR_NETWORK : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
                        message: 'Response code "' + a.o + '" with ' + a.g + " bytes requested and " + a.l + " bytes loaded"
                    });
                    a.dispatchEvent(d)
                }
                a.l < a.g && a.state !== 3 && !c ? b.g = 1 : (a.state !== 3 && (a.state = 0), b.g = 0)
            })
        },
        bH = function(a) {
            var b;
            return Qa(function(c) {
                switch (c.g) {
                    case 1:
                        b = a.l + "-" + (a.g - 1);
                        ZE(a.uri,
                            "range", b);
                        if (!a.j) {
                            c.g = 2;
                            break
                        }
                        return Ea(c, a.H, 3);
                    case 3:
                        return c.return(cH(a));
                    case 2:
                        return c.l = 4, Ea(c, dH(a), 6);
                    case 6:
                        Ha(c, 0);
                        break;
                    case 4:
                        Ia(c), a.A++, c.g = 0
                }
            })
        },
        cH = function(a) {
            var b;
            return Qa(function(c) {
                switch (c.g) {
                    case 1:
                        return a.j ? Ea(c, a.j.Ac(a.uri), 2) : c.return(Promise.reject());
                    case 2:
                        if (b = c.j) return b.Ea && (a.state = 3), eH(a, b.video), c.return();
                        c.l = 3;
                        return Ea(c, dH(a), 5);
                    case 5:
                        Ha(c, 0);
                        break;
                    case 3:
                        Ia(c), a.A++, c.g = 0
                }
            })
        },
        dH = function(a) {
            var b, c, d, e, f, g, h;
            return Qa(function(k) {
                if (k.g == 1) return b =
                    0, c = a.g - a.l, Ea(k, fetch(a.uri.toString()), 2);
                d = k.j;
                if (d.status >= 400) return M(L.getInstance(), "lvlfes", d.status.toString()), a.o = d.status, k.return(Promise.reject());
                f = (e = d.body) == null ? void 0 : e.getReader();
                if (!f) return Wm("lvlmr"), a.o = d.status, k.return(Promise.reject());
                g = [];
                h = function() {
                    var l, n, p, q, u, w;
                    return Qa(function(t) {
                        if (t.g == 1) return Ea(t, f.read(), 2);
                        l = t.j;
                        n = l.done;
                        p = l.value;
                        if (n) return q = b < c, fH(a, g, q), t.return();
                        g.push(p);
                        b += (u = p) == null ? void 0 : u.length;
                        eH(a, (w = p) == null ? void 0 : w.buffer);
                        return Ea(t,
                            h(), 0)
                    })
                };
                return Ea(k, h(), 0)
            })
        },
        fH = function(a, b, c) {
            c && (a.state = 3, eH(a, new ArrayBuffer(0)));
            var d = new Uint8Array(b.reduce(function(g, h) {
                    return g + h.length
                }, 0)),
                e = 0;
            b = v(b);
            for (var f = b.next(); !f.done; f = b.next()) f = f.value, d.set(f, e), e += f.length;
            a.j && d.buffer.byteLength > 0 && a.j.Qc(d.buffer, a.uri, 0, c)
        },
        eH = function(a, b) {
            b !== null && (b = b.slice(0), a.l += b.byteLength, a.dispatchEvent({
                type: "progress",
                Vd: b
            }))
        };
    $G.prototype.O = function() {
        var a;
        ((a = this.j) == null ? 0 : a.gb()) && this.j.close();
        ZG.prototype.O.call(this)
    };
    var hH = function(a) {
            this.uri = a;
            this.g = gH(a)
        },
        gH = function(a) {
            return new Map(a.j.split("/").reduce(function(b, c, d, e) {
                d % 2 && b.set(e[d - 1], c);
                return b
            }, new Map))
        },
        iH = function(a) {
            var b, c;
            return (b = a.uri) == null ? void 0 : (c = b.j) == null ? void 0 : c.startsWith("/videoplayback")
        };
    hH.prototype.getId = function() {
        return jH(this, "id")
    };
    var kH = function(a) {
            a = $E(a.uri, "range");
            if (!a) return null;
            a = a.split("-")[0];
            return !a || isNaN(Number(a)) ? null : Number(a)
        },
        jH = function(a, b) {
            var c = $E(a.uri, b);
            return c ? c : (a = a.g.get(b)) ? a : null
        };
    var lH = ["doubleclick.net"];

    function mH() {
        if (ac() || A("iPad") || A("iPod")) var a = !1;
        else if ($b()) {
            if (hF === void 0) {
                a: {
                    if (fF === void 0) {
                        if (jF) {
                            a = Kb(iF(), "Safari");
                            var b = (new LE(window.location.href)).l.bc("js");
                            b: {
                                if ((b = b.length ? b[0] : "") && b.lastIndexOf("afma-", 0) == 0) {
                                    var c = b.lastIndexOf("v");
                                    if (c > -1 && (b = b.substr(c + 1).match(/^(\d+\.\d+\.\d+|^\d+\.\d+|^\d+)(-.*)?$/))) {
                                        b = b[1];
                                        break b
                                    }
                                }
                                b = "0.0.0"
                            }
                            if (!a || b !== "0.0.0") {
                                a = fF = !0;
                                break a
                            }
                        }
                        fF = !1
                    }
                    a = fF
                }
                a || (gF === void 0 && (gF = Kb(iF(), "afma-sdk-a") ? !0 : !1), a = gF);hF = a
            }
            a = hF ? !0 : ri() ? !1 : nH()
        } else a = !1;
        return a
    }

    function nH() {
        var a = !1,
            b = (new LE(window.location.href)).g;
        lH.forEach(function(c) {
            b.includes(c) && (a = !0)
        });
        return a
    };
    var oH, rH = function(a, b, c) {
        if (typeof a === "number") var d = {
            name: pH(a)
        };
        else d = a, a = qH(a.name);
        this.code = a;
        this.g = d;
        b = "Error " + b + ": " + this.getName();
        c && (b += ", " + c);
        sb.call(this, b)
    };
    pb(rH, sb);
    rH.prototype.getName = function() {
        return this.g.name || ""
    };
    var sH = {
            Bg: 1,
            Ij: 2,
            NOT_FOUND_ERR: 3,
            hg: 4,
            kg: 5,
            Jj: 6,
            Ag: 7,
            ABORT_ERR: 8,
            xg: 9,
            Zj: 10,
            TIMEOUT_ERR: 11,
            wg: 12,
            INVALID_ACCESS_ERR: 13,
            INVALID_STATE_ERR: 14
        },
        tH = (y.g || y.j || sH).Bg,
        uH = (y.g || y.j || sH).NOT_FOUND_ERR,
        vH = (y.g || y.j || sH).hg,
        wH = (y.g || y.j || sH).kg,
        xH = (y.g || y.j || sH).Ag,
        yH = (y.g || y.j || sH).ABORT_ERR,
        zH = (y.g || y.j || sH).xg,
        AH = (y.g || y.j || sH).TIMEOUT_ERR,
        BH = (y.g || y.j || sH).wg,
        CH = (y.DOMException || sH).INVALID_ACCESS_ERR,
        DH = (y.DOMException || sH).INVALID_STATE_ERR,
        qH = function(a) {
            switch (a) {
                case "UnknownError":
                    return tH;
                case "NotFoundError":
                    return uH;
                case "ConstraintError":
                    return vH;
                case "DataError":
                    return wH;
                case "TransactionInactiveError":
                    return xH;
                case "AbortError":
                    return yH;
                case "ReadOnlyError":
                    return zH;
                case "TimeoutError":
                    return AH;
                case "QuotaExceededError":
                    return BH;
                case "InvalidAccessError":
                    return CH;
                case "InvalidStateError":
                    return DH;
                default:
                    return tH
            }
        },
        pH = function(a) {
            switch (a) {
                case tH:
                    return "UnknownError";
                case uH:
                    return "NotFoundError";
                case vH:
                    return "ConstraintError";
                case wH:
                    return "DataError";
                case xH:
                    return "TransactionInactiveError";
                case yH:
                    return "AbortError";
                case zH:
                    return "ReadOnlyError";
                case AH:
                    return "TimeoutError";
                case BH:
                    return "QuotaExceededError";
                case CH:
                    return "InvalidAccessError";
                case DH:
                    return "InvalidStateError";
                default:
                    return "UnknownError"
            }
        },
        EH = function(a, b) {
            return "error" in a ? new rH(a.error, b) : new rH({
                name: "UnknownError"
            }, b)
        },
        FH = function(a, b) {
            return "name" in a ? new rH(a, b + ": " + a.message) : new rH({
                name: "UnknownError"
            }, b)
        };

    function GH(a) {
        this.g = a
    }
    var HH = y.IDBKeyRange || y.webkitIDBKeyRange;
    /* 
     
     Copyright 2005, 2007 Bob Ippolito. All Rights Reserved. 
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: MIT 
    */
    var IH = function() {
        this.B = [];
        this.o = this.l = !1;
        this.j = void 0;
        this.L = this.G = this.C = !1;
        this.A = 0;
        this.g = null;
        this.I = 0
    };
    IH.prototype.cancel = function(a) {
        if (this.l) this.j instanceof IH && this.j.cancel();
        else {
            if (this.g) {
                var b = this.g;
                delete this.g;
                a ? b.cancel(a) : (b.I--, b.I <= 0 && b.cancel())
            }
            this.L = !0;
            this.l || JH(this, new KH(this))
        }
    };
    IH.prototype.F = function(a, b) {
        this.C = !1;
        LH(this, a, b)
    };
    var LH = function(a, b, c) {
            a.l = !0;
            a.j = c;
            a.o = !b;
            MH(a)
        },
        OH = function(a) {
            if (a.l) {
                if (!a.L) throw new NH(a);
                a.L = !1
            }
        };
    IH.prototype.La = function(a) {
        OH(this);
        LH(this, !0, a)
    };
    var JH = function(a, b) {
            OH(a);
            LH(a, !1, b)
        },
        QH = function(a, b) {
            return PH(a, b, null)
        },
        PH = function(a, b, c, d) {
            var e = a.l;
            e || (b === c ? b = c = ux(b) : (b = ux(b), c = ux(c)));
            a.B.push([b, c, d]);
            e && MH(a);
            return a
        };
    IH.prototype.then = function(a, b, c) {
        var d, e, f = new Ix(function(g, h) {
            e = g;
            d = h
        });
        PH(this, e, function(g) {
            g instanceof KH ? f.cancel() : d(g);
            return RH
        }, this);
        return f.then(a, b, c)
    };
    IH.prototype.$goog_Thenable = !0;
    var SH = function(a) {
            return ic(a.B, function(b) {
                return typeof b[1] === "function"
            })
        },
        RH = {},
        MH = function(a) {
            if (a.A && a.l && SH(a)) {
                var b = a.A,
                    c = TH[b];
                c && (y.clearTimeout(c.g), delete TH[b]);
                a.A = 0
            }
            a.g && (a.g.I--, delete a.g);
            b = a.j;
            for (var d = c = !1; a.B.length && !a.C;) {
                var e = a.B.shift(),
                    f = e[0],
                    g = e[1];
                e = e[2];
                if (f = a.o ? g : f) try {
                    var h = f.call(e || null, b);
                    h === RH && (h = void 0);
                    h !== void 0 && (a.o = a.o && (h == b || h instanceof Error), a.j = b = h);
                    if (Gx(b) || typeof y.Promise === "function" && b instanceof y.Promise) d = !0, a.C = !0
                } catch (k) {
                    b = k, a.o = !0,
                        SH(a) || (c = !0)
                }
            }
            a.j = b;
            d && (h = kb(a.F, a, !0), d = kb(a.F, a, !1), b instanceof IH ? (PH(b, h, d), b.G = !0) : b.then(h, d));
            c && (b = new UH(b), TH[b.g] = b, a.A = b.g)
        },
        NH = function() {
            sb.call(this)
        };
    pb(NH, sb);
    NH.prototype.message = "Deferred has already fired";
    NH.prototype.name = "AlreadyCalledError";
    var KH = function() {
        sb.call(this)
    };
    pb(KH, sb);
    KH.prototype.message = "Deferred was canceled";
    KH.prototype.name = "CanceledError";
    var UH = function(a) {
        this.g = y.setTimeout(kb(this.l, this), 0);
        this.j = a
    };
    UH.prototype.l = function() {
        delete TH[this.g];
        throw this.j;
    };
    var TH = {};
    var VH = function() {
        R.call(this)
    };
    pb(VH, R);
    VH.prototype.g = null;
    VH.prototype.next = function(a) {
        if (a) this.g["continue"](a);
        else this.g["continue"]()
    };
    VH.prototype.remove = function() {
        var a = new IH;
        try {
            var b = this.g["delete"]()
        } catch (c) {
            return JH(a, FH(c, "deleting via cursor")), a
        }
        b.onsuccess = function() {
            a.La()
        };
        b.onerror = function(c) {
            JH(a, EH(c.target, "deleting via cursor"))
        };
        return a
    };
    VH.prototype.getValue = function() {
        return this.g.value
    };
    var WH = function(a, b) {
        var c = new VH;
        try {
            var d = a.openCursor(b ? b.g : null)
        } catch (e) {
            throw c.dispose(), FH(e, a.name);
        }
        d.onsuccess = function(e) {
            c.g = e.target.result || null;
            c.g ? c.dispatchEvent("n") : c.dispatchEvent("c")
        };
        d.onerror = function() {
            c.dispatchEvent("e")
        };
        return c
    };

    function XH(a) {
        this.g = a
    }
    XH.prototype.getName = function() {
        return this.g.name
    };
    var YH = function(a, b, c) {
        var d = new IH;
        try {
            var e = a.g.get(c)
        } catch (f) {
            return b += " with key " + hj(c), JH(d, FH(f, b)), d
        }
        e.onsuccess = function(f) {
            d.La(f.target.result)
        };
        e.onerror = function(f) {
            b += " with key " + hj(c);
            JH(d, EH(f.target, b))
        };
        return d
    };
    XH.prototype.get = function(a) {
        return YH(this, "getting from index " + this.getName(), a)
    };
    var ZH = function(a, b) {
        return WH(a.g, b)
    };

    function $H(a) {
        this.g = a
    }
    $H.prototype.getName = function() {
        return this.g.name
    };
    var aI = function(a, b, c, d, e) {
            var f = new IH;
            try {
                var g = e ? a.g[b](d, e) : a.g[b](d)
            } catch (h) {
                return c += hj(d), e && (c += ", with key " + hj(e)), JH(f, FH(h, c)), f
            }
            g.onsuccess = function(h) {
                f.La(h.target.result)
            };
            g.onerror = function(h) {
                c += hj(d);
                e && (c += ", with key " + hj(e));
                JH(f, EH(h.target, c))
            };
            return f
        },
        bI = function(a, b) {
            return aI(a, "put", "putting into " + a.getName() + " with value", b)
        };
    $H.prototype.add = function(a, b) {
        return aI(this, "add", "adding into " + this.getName() + " with value ", a, b)
    };
    $H.prototype.remove = function(a) {
        var b = new IH;
        try {
            var c = this.g["delete"](a instanceof GH ? a.g : a)
        } catch (e) {
            return c = "removing from " + this.getName() + " with key " + hj(a), JH(b, FH(e, c)), b
        }
        c.onsuccess = function() {
            b.La()
        };
        var d = this;
        c.onerror = function(e) {
            var f = "removing from " + d.getName() + " with key " + hj(a);
            JH(b, EH(e.target, f))
        };
        return b
    };
    $H.prototype.get = function(a) {
        var b = new IH;
        try {
            var c = this.g.get(a)
        } catch (e) {
            return c = "getting from " + this.getName() + " with key " + hj(a), JH(b, FH(e, c)), b
        }
        c.onsuccess = function(e) {
            b.La(e.target.result)
        };
        var d = this;
        c.onerror = function(e) {
            var f = "getting from " + d.getName() + " with key " + hj(a);
            JH(b, EH(e.target, f))
        };
        return b
    };
    $H.prototype.clear = function() {
        var a = "clearing store " + this.getName(),
            b = new IH;
        try {
            var c = this.g.clear()
        } catch (d) {
            return JH(b, FH(d, a)), b
        }
        c.onsuccess = function() {
            b.La()
        };
        c.onerror = function(d) {
            JH(b, EH(d.target, a))
        };
        return b
    };
    var cI = function(a) {
        try {
            return new XH(a.g.index("timestamp"))
        } catch (b) {
            throw FH(b, "getting index timestamp");
        }
    };
    var dI = function(a, b) {
        R.call(this);
        this.g = a;
        this.l = b;
        this.j = new dG(this);
        this.j.listen(this.g, "complete", kb(this.dispatchEvent, this, "complete"));
        this.j.listen(this.g, "abort", kb(this.dispatchEvent, this, "abort"));
        this.j.listen(this.g, "error", this.mg)
    };
    pb(dI, R);
    m = dI.prototype;
    m.mg = function(a) {
        a.target instanceof rH ? this.dispatchEvent({
            type: "error",
            target: a.target
        }) : this.dispatchEvent({
            type: "error",
            target: EH(a.target, "in transaction")
        })
    };
    m.objectStore = function(a) {
        try {
            return new $H(this.g.objectStore(a))
        } catch (b) {
            throw FH(b, "getting object store " + a);
        }
    };
    m.commit = function(a) {
        if (this.g.commit || !a) try {
            this.g.commit()
        } catch (b) {
            throw FH(b, "cannot commit the transaction");
        }
    };
    m.wait = function() {
        var a = new IH;
        ix(this, "complete", kb(a.La, a));
        var b = ix(this, "abort", function() {
            rx(c);
            JH(a, new rH(yH, "waiting for transaction to complete"))
        });
        var c = ix(this, "error", function(e) {
            rx(b);
            JH(a, e.target)
        });
        var d = this.l;
        return QH(a, function() {
            return d
        })
    };
    m.abort = function() {
        this.g.abort()
    };
    m.O = function() {
        dI.Za.O.call(this);
        this.j.dispose()
    };

    function eI(a) {
        R.call(this);
        this.g = a;
        this.j = new dG(this);
        this.j.listen(this.g, "abort", kb(this.dispatchEvent, this, "abort"));
        this.j.listen(this.g, "error", this.ng);
        this.j.listen(this.g, "versionchange", this.Vg);
        this.j.listen(this.g, "close", kb(this.dispatchEvent, this, "close"))
    }
    pb(eI, R);
    m = eI.prototype;
    m.we = !0;
    m.ng = function(a) {
        a = (a = a.target) && a.error;
        this.dispatchEvent({
            type: "error",
            errorCode: a && a.severity
        })
    };
    m.Vg = function(a) {
        this.dispatchEvent(new fI(a.oldVersion, a.newVersion))
    };
    m.close = function() {
        this.we && (this.g.close(), this.we = !1)
    };
    m.gb = function() {
        return this.we
    };
    m.getName = function() {
        return this.g.name
    };
    m.getVersion = function() {
        return Number(this.g.version)
    };
    var gI = function(a) {
        var b = ["MediaSourceVideoChunk"];
        try {
            var c = a.g.transaction(b, "readwrite");
            return new dI(c, a)
        } catch (d) {
            throw FH(d, "creating transaction");
        }
    };
    eI.prototype.O = function() {
        eI.Za.O.call(this);
        this.j.dispose()
    };
    var fI = function(a, b) {
        Ww.call(this, "versionchange");
        this.oldVersion = a;
        this.newVersion = b
    };
    pb(fI, Ww);
    var hI = function(a) {
        var b = new IH;
        oH == void 0 && (oH = y.indexedDB || y.mozIndexedDB || y.webkitIndexedDB || y.moz_indexedDB);
        var c = oH.open("IndexedDbVideoChunkPersistentStorage", 6);
        c.onsuccess = function(d) {
            d = new eI(d.target.result);
            b.La(d)
        };
        c.onerror = function(d) {
            JH(b, EH(d.target, "opening database IndexedDbVideoChunkPersistentStorage"))
        };
        c.onupgradeneeded = function(d) {
            if (a) {
                var e = new eI(d.target.result);
                a(new fI(d.oldVersion, d.newVersion), e, new dI(d.target.transaction, e))
            }
        };
        c.onblocked = function() {};
        return b
    };
    var iI = function() {
        R.apply(this, arguments);
        this.g = null
    };
    r(iI, R);
    iI.prototype.initialize = function() {
        var a = this;
        return Promise.resolve(hI(this.j)).then(function(b) {
            a.g = b
        }, function(b) {
            M(L.getInstance(), "codf", b.message)
        })
    };
    iI.prototype.gb = function() {
        return this.g !== null && this.g.gb()
    };
    iI.prototype.close = function() {
        var a = this;
        return (new Promise(function(b) {
            jI(a, b)
        })).then(function() {
            return kI()
        }).then(function() {
            a.g.close()
        })
    };
    var kI = function() {
        var a;
        return ((a = navigator.storage) == null ? 0 : a.estimate) ? navigator.storage.estimate().then(function(b) {
            M(L.getInstance(), "csue", String(b.usage))
        }) : Promise.resolve(void 0)
    };
    iI.prototype.Ac = function(a) {
        return (a = lI(a, 0)) ? mI(this, nI(a), a.jd) : Promise.resolve(null)
    };
    iI.prototype.Qc = function(a, b, c, d) {
        (b = lI(b, c)) ? (c = b.startIndex, oI(this, {
            pk: nI(b),
            startIndex: c,
            Yc: c + a.byteLength - 1,
            jd: b.jd,
            timestamp: new Date(Date.now()),
            Ea: d,
            Rb: b.Rb,
            video: a
        })) : Promise.resolve(void 0)
    };
    iI.prototype.j = function(a, b) {
        if (b.g.objectStoreNames.contains("MediaSourceVideoChunk")) try {
            b.g.deleteObjectStore("MediaSourceVideoChunk")
        } catch (d) {
            throw FH(d, "deleting object store MediaSourceVideoChunk");
        }
        a = {
            keyPath: "cacheId"
        };
        try {
            var c = new $H(b.g.createObjectStore("MediaSourceVideoChunk", a))
        } catch (d) {
            throw FH(d, "creating object store MediaSourceVideoChunk");
        }
        b = {
            unique: !1
        };
        try {
            c.g.createIndex("timestamp", "timestamp", b)
        } catch (d) {
            throw FH(d, "creating new index timestamp with key path timestamp");
        }
    };
    var jI = function(a, b) {
            var c = new Date(Date.now());
            c.setDate(c.getDate() - 30);
            c = new GH(HH.upperBound(c, void 0));
            var d = ZH(cI(gI(a.g).objectStore("MediaSourceVideoChunk")), c),
                e = d.listen("n", function() {
                    d.remove();
                    d.next()
                });
            ix(d, "c", function() {
                rx(e);
                b()
            })
        },
        lI = function(a, b) {
            var c = new hH(a);
            a = c.getId();
            var d = jH(c, "itag"),
                e = jH(c, "source"),
                f = jH(c, "lmt");
            c = kH(c);
            var g = [];
            a ? d ? e ? f ? c === null && g.push("startIndex") : g.push("lmt") : g.push("source") : g.push("itag") : g.push("videoId");
            return g.length > 0 ? (M(L.getInstance(),
                "civp", g.join("-")), null) : {
                zi: a,
                Rb: d,
                source: e,
                jd: f,
                startIndex: c + b
            }
        },
        nI = function(a) {
            for (var b = [a.zi, a.source, a.startIndex].join(), c = 0, d = 0; d < b.length; d++) c = Math.imul(31, c) + b.charCodeAt(d) | 0;
            return c.toString() + "," + a.Rb
        },
        mI = function(a, b, c) {
            var d = gI(a.g).objectStore("MediaSourceVideoChunk");
            return Promise.resolve(d.get(b)).then(function(e) {
                if (!e) return M(L.getInstance(), "cenf", "1"), null;
                if (e.jd !== c) return M(L.getInstance(), "cdl", "1"), d.remove(b).then(null, function(f) {
                        M(L.getInstance(), "crdlvf", f.message)
                    }),
                    null;
                M(L.getInstance(), "cefml", "1");
                return {
                    Rb: e.Rb,
                    Yc: e.Yc,
                    Ea: e.Ea,
                    video: e.video
                }
            }, function(e) {
                M(L.getInstance(), "cgvf", e.message);
                return null
            })
        },
        oI = function(a, b) {
            a = gI(a.g).objectStore("MediaSourceVideoChunk");
            Promise.resolve(bI(a, b)).then(function() {
                M(L.getInstance(), "cavs", "1")
            }, function(c) {
                M(L.getInstance(), "cavf", c.message)
            })
        };
    var pI = function(a) {
        ZG.call(this);
        var b = this;
        this.H = this.j = this.g = 0;
        this.o = this.K = null;
        this.uri = new LE(a);
        this.state = 0;
        this.l = (this.A = mH() && !pF(this.uri)) ? kE(iI) : null;
        Ns(this, function() {
            Ms(b.l)
        });
        this.K = this.A ? this.l.initialize() : null
    };
    r(pI, ZG);
    pI.prototype.F = function() {
        return this.g
    };
    pI.prototype.C = function() {
        return this.state === 3
    };
    pI.prototype.G = function(a) {
        this.state === 1 ? (this.g += a, this.state = 2) : this.state === 0 && (this.g += a, this.state = 1, qI(this))
    };
    var qI = function(a) {
            Qa(function(b) {
                if (b.g == 1) return a.state === 2 && (a.state = 1), Ea(b, rI(a), 4);
                var c = a.H > 3;
                if (c && a.o !== null) {
                    var d = UG("media_source_error", {
                        code: a.j > 0 ? MediaError.MEDIA_ERR_NETWORK : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
                        message: 'Response code "' + a.o + '" with ' + a.g + " bytes requested and " + a.j + " bytes loaded"
                    });
                    a.dispatchEvent(d)
                }
                a.j < a.g && a.state !== 3 && !c ? b.g = 1 : (a.state !== 3 && (a.state = 0), b.g = 0)
            })
        },
        rI = function(a) {
            var b;
            return Qa(function(c) {
                switch (c.g) {
                    case 1:
                        b = a.j + "-" + (a.g - 1);
                        ZE(a.uri, "range",
                            b);
                        if (!a.A) {
                            c.g = 2;
                            break
                        }
                        return Ea(c, a.K, 3);
                    case 3:
                        return c.return(sI(a));
                    case 2:
                        return c.l = 4, Ea(c, tI(a), 6);
                    case 6:
                        Ha(c, 0);
                        break;
                    case 4:
                        Ia(c), uI(a), c.g = 0
                }
            })
        },
        sI = function(a) {
            var b;
            return Qa(function(c) {
                switch (c.g) {
                    case 1:
                        return Ea(c, a.l.Ac(a.uri), 2);
                    case 2:
                        if (b = c.j) {
                            b.Ea && (a.state = 3);
                            vI(a, b.video, 0);
                            c.g = 0;
                            break
                        }
                        c.l = 4;
                        return Ea(c, tI(a), 6);
                    case 6:
                        Ha(c, 0);
                        break;
                    case 4:
                        Ia(c), uI(a), c.g = 0
                }
            })
        },
        uI = function(a) {
            var b = new hH(a.uri);
            if ($n(xo) && iH(b)) {
                a: if (iH(b)) {
                    var c = jH(b, "mn");
                    var d = c ? c.split(",") : null;
                    var e =
                        jH(b, "fvip");
                    c = b.uri.G();
                    if (d && e) {
                        var f = (Number(jH(b, "fallback_count")) || 0) + 1;
                        if (d = d[f]) {
                            c.g = "r" + e + "---" + d + ".googlevideo.com";
                            ZE(c, "fallback_count", f);
                            b = c;
                            break a
                        }
                    }
                    var g, h;
                    e = Number(((h = (g = $E(c, "cmo")) == null ? void 0 : g.split("=")) != null ? h : [])[1]) || 0;
                    b.uri.g.match(/^r{1,2}(\d+)---(.+)\.googlevideo.com$/) && (c.g = "redirector.googlevideo.com");
                    ZE(c, "cmo", "pf=" + (e + 1));
                    b = c
                } else b = b.uri;a.uri = b;a.dispatchEvent(UG("bandaid_fallback_count"))
            }
            else $n(Bo) && pF(a.uri) && (a.uri = new LE(qF(a.uri)));
            a.H++
        },
        tI = function(a) {
            return new Promise(function(b,
                c) {
                var d = new XMLHttpRequest,
                    e = 0,
                    f = a.g - a.j;
                d.addEventListener("load", function() {
                    Wm("lvlcl");
                    if (d.status >= 400) M(L.getInstance(), "lvlxes", d.status.toString()), a.o = d.status, c();
                    else {
                        var g = d.response;
                        g.byteLength < f && (a.state = 3);
                        var h = vI(a, g, e);
                        e += h;
                        a.A && g.byteLength > 0 && a.l.Qc(g, a.uri, 0, g.byteLength < f);
                        b()
                    }
                });
                d.addEventListener("timeout", function() {
                    Wm("lvlct");
                    a.o = d.status;
                    c()
                });
                d.addEventListener("error", function() {
                    Wm("lvlce");
                    a.o = d.status;
                    c()
                });
                d.addEventListener("progress", function() {
                    if (d.status >= 400) a.o =
                        d.status;
                    else {
                        var g = vI(a, d.response, e);
                        e += g
                    }
                });
                d.responseType = "arraybuffer";
                d.open("get", a.uri.toString());
                d.send(null)
            })
        },
        vI = function(a, b, c) {
            if (b === null) return 0;
            b = b.slice(c);
            a.j += b.byteLength;
            a.dispatchEvent({
                type: "progress",
                Vd: b
            });
            return b.byteLength
        };
    pI.prototype.O = function() {
        this.A && this.l.gb() && this.l.close();
        ZG.prototype.O.call(this)
    };
    var wI = function() {};
    wI.prototype.Hh = function(a, b, c) {
        return c === 0 ? 1E6 : b - a < 5E3 ? 3E5 : 0
    };
    var yI = function(a, b) {
            var c = this;
            this.g = a;
            this.index = b;
            this.j = [];
            this.g || Wm("msms_sbf" + this.index);
            this.g.addEventListener("updateend", function() {
                xI(c)
            });
            this.g.addEventListener("error", function() {
                Wm("msms_sbe" + c.index)
            })
        },
        xI = function(a) {
            if (a.j.length > 0 && !a.g.updating) {
                var b = a.j.shift();
                a.g.appendBuffer(b)
            }
        };
    var zI = function() {
        this.g = this.cache = null
    };
    m = zI.prototype;
    m.initialize = function() {
        var a = this;
        return window.caches.open("CACHE_VIDEO_CHUNK_PERSISTENT_STORAGE").then(function(b) {
            a.cache = b
        }, function(b) {
            M(L.getInstance(), "codf", b.message)
        })
    };
    m.gb = function() {
        return this.cache !== null
    };
    m.close = function() {
        return Promise.resolve()
    };
    m.Ac = function(a) {
        var b = this;
        a = AI(this, a);
        return this.gb() && a ? this.cache.match(a).then(function(c) {
            if (!c) return M(L.getInstance(), "cenf", "1"), Promise.resolve(null);
            M(L.getInstance(), "cef", "1");
            return c.arrayBuffer().then(function(d) {
                var e = kH(b.g),
                    f;
                (f = $E(b.g.uri, "range")) ? (f = f.split("-")[1], f = !f || isNaN(Number(f)) ? null : Number(f)) : f = null;
                e = e + d.byteLength - 1;
                f = f > e;
                return {
                    Rb: jH(b.g, "itag"),
                    Yc: e,
                    Ea: f,
                    video: d
                }
            })
        }, function(c) {
            M(L.getInstance(), "cgvf", c.message);
            return Promise.resolve(null)
        }) : (M(L.getInstance(),
            "cgvf", "1"), Promise.resolve(null))
    };
    m.Qc = function(a, b) {
        b = AI(this, b);
        a = new Response(a);
        this.gb() && b ? this.cache.put(b, a).then(function() {
            M(L.getInstance(), "cavs", "1")
        }, function(c) {
            M(L.getInstance(), "cavf", c.message)
        }) : (M(L.getInstance(), "cavf", "1"), Promise.resolve())
    };
    var AI = function(a, b) {
        a.g = new hH(b);
        b = a.g.getId();
        var c = jH(a.g, "itag"),
            d = jH(a.g, "source"),
            e = jH(a.g, "lmt");
        a = jH(a.g, "range");
        if (b && c && d && a) return new Request("http://url/videoplayback?id=" + b + "&itag=" + c + "&source=" + d + "&lmt=" + e + "&range=" + a);
        M(L.getInstance(), "civp", "1");
        return null
    };
    var BI = function(a, b) {
            this.currentTimeSeconds = a;
            this.removedRanges = b
        },
        EI = function(a) {
            R.call(this);
            var b = this;
            this.l = a;
            this.j = [];
            this.A = null;
            this.F = 0;
            this.M = !1;
            this.C = 0;
            this.G = [];
            if ($n(uo)) {
                var c = null;
                mH() && ($n(wo) ? c = kE(zI) : c = kE(iI));
                this.o = this.l.map(function(d) {
                    return kE($G, d.url, pF(d.url) ? null : c)
                })
            } else this.o = this.l.map(function(d) {
                return kE(pI, d.url)
            });
            this.g = kE(VG());
            this.H = function() {
                CI(b)
            };
            this.g.addEventListener("sourceopen", this.H);
            this.K = DI(this)
        };
    r(EI, R);
    var DI = function(a) {
            for (var b = [], c = 0; c < a.l.length; ++c) b.push(new wI);
            return b
        },
        CI = function(a) {
            Wm("msms_oso");
            for (var b = {
                    Ia: 0
                }; b.Ia < a.l.length; b = {
                    De: void 0,
                    kd: void 0,
                    rb: void 0,
                    Ia: b.Ia,
                    ld: void 0
                }, ++b.Ia) {
                var c = a.l[b.Ia];
                M(L.getInstance(), "msms_mime" + b.Ia, c.mimeType);
                M(L.getInstance(), "msms_cs" + b.Ia, c.Sa.toString());
                $n(vo) ? (b.De = new yI(a.g.addSourceBuffer(c.mimeType), b.Ia), b.kd = a.o[b.Ia], b.kd.listen("progress", function(d) {
                    return function(e) {
                        var f = d.De,
                            g = d.kd;
                        e = e.Vd;
                        e.byteLength !== 0 && (f.j.push(e), xI(f));
                        g.C() && (a.F++, a.F === a.j.length && FI(a))
                    }
                }(b)), b.kd.listen("media_source_error", function(d) {
                    a.dispatchEvent(d)
                }), a.j.push(b.De.g)) : (b.rb = a.g.addSourceBuffer(c.mimeType), b.rb ? (WG(a.g) && (b.rb.onbufferedchange = function() {
                        return function(d) {
                            d.removedRanges.length > 0 && a.dispatchEvent(new CustomEvent("bufferremoved", {
                                detail: new BI(a.C / 1E3, d.removedRanges)
                            }))
                        }
                    }(b)), b.ld = a.o[b.Ia], $n(uo) && b.rb.addEventListener("updateend", function(d) {
                        return function() {
                            if (a.G.length > 0 && !d.rb.updating) {
                                var e = a.G.shift();
                                d.rb.appendBuffer(e)
                            }
                        }
                    }(b)),
                    b.rb.addEventListener("error", function(d) {
                        return function() {
                            Wm("msms_sbe" + d.Ia)
                        }
                    }(b)), b.ld.listen("progress", function(d) {
                        return function(e) {
                            var f = d.rb,
                                g = d.ld;
                            e = e.Vd;
                            e.byteLength !== 0 && ($n(uo) ? f.updating ? a.G.push(e) : f.appendBuffer(e) : f.appendBuffer(e));
                            g.C() && (a.F++, a.F === a.j.length && FI(a))
                        }
                    }(b)), b.ld.listen("media_source_error", function(d) {
                        a.dispatchEvent(d)
                    }), a.j.push(b.rb)) : Wm("msms_sbf" + b.Ia))
            }
            M(L.getInstance(), "msms_ns", a.j.length.toString());
            a.M = !0;
            GI(a)
        },
        FI = function(a) {
            Promise.all(a.j.map(function(b) {
                return new Promise(function(c) {
                    b.updating ?
                        b.addEventListener("updateend", function() {
                            c()
                        }) : c()
                })
            })).then(function() {
                a.g.endOfStream()
            })
        },
        GI = function(a) {
            if (a.M)
                for (var b = 0; b < a.l.length; ++b) {
                    var c = a.o[b],
                        d = a.j[b];
                    d = d.buffered.length === 0 ? 0 : d.buffered.end(0) * 1E3;
                    d = a.K[b].Hh(a.C, d, c.F());
                    d !== 0 && c.G(d)
                }
        },
        HI = function(a) {
            a.A = bj(a.g).toString();
            return a.A
        };
    EI.prototype.O = function() {
        this.A && window.URL.revokeObjectURL(this.A);
        for (var a = v(this.o), b = a.next(); !b.done; b = a.next()) b.value.dispose();
        this.g.removeEventListener("sourceopen", this.H);
        R.prototype.O.call(this)
    };
    EI.prototype.Id = function(a) {
        this.K.filter(function() {
            return !1
        }).map(function(b) {
            return b
        }).forEach(function(b) {
            b.g = Object.assign({}, QG, b.g, a)
        })
    };
    var II = RegExp("/pagead/conversion|/pagead/adview|/pagead/gen_204|/activeview?|csi.gstatic.com/csi|google.com/pagead/xsul|google.com/ads/measurement/l|googleads.g.doubleclick.net/pagead/ide_cookie|googleads.g.doubleclick.net/xbbe/pixel"),
        JI = RegExp("outstream.min.js"),
        KI = RegExp("outstream.min.css"),
        LI = RegExp("fonts.gstatic.com"),
        MI = RegExp("googlevideo.com/videoplayback|c.2mdn.net/videoplayback|gcdn.2mdn.net/videoplayback"),
        NI = RegExp("custom.elements.min.js");

    function OI(a, b) {
        var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            k = 0,
            l = !1,
            n = !1;
        if (typeof Wa("performance.getEntriesByType", y) === "function" && "transferSize" in y.PerformanceResourceTiming.prototype) {
            var p = y.performance.getEntriesByType("resource");
            p = v(p);
            for (var q = p.next(); !q.done; q = p.next()) q = q.value, II.test(q.name) || (f += 1, q.transferSize ? (c += q.transferSize, q.encodedBodySize && q.transferSize < q.encodedBodySize && (h += 1, e += q.encodedBodySize, JI.test(q.name) && (l = !0), KI.test(q.name) && (n = !0)), MI.test(q.name) && (d += q.transferSize)) :
                q.transferSize === 0 && q.encodedBodySize === 0 ? NI.test(q.name) ? c += 6686 : LI.test(q.name) || (k += 1, Vm(L.getInstance(), {
                    event_name: "unmeasurable_asset",
                    resource_name: q.name,
                    encoded_body_size: q.encodedBodySize,
                    transfer_size: q.transferSize
                })) : (g += 1, e += q.encodedBodySize, JI.test(q.name) && (l = !0), KI.test(q.name) && (n = !0)));
            p = 0;
            if (a.duration) {
                for (q = 0; q < a.buffered.length; q++) p += a.buffered.end(q) - a.buffered.start(q);
                p = Math.min(p, a.duration)
            }
            Vm(L.getInstance(), {
                event_name: b,
                asset_bytes: c,
                video_bytes: d,
                cached_data_bytes: e,
                js_cached: l,
                css_cached: n,
                num_assets: f,
                num_assets_cached: g,
                num_assets_cache_validated: h,
                num_assets_unmeasurable: k,
                video_played_seconds: a.currentTime.toFixed(2),
                video_muted: a.muted,
                video_seconds_loaded: p.toFixed(2)
            })
        } else M(L.getInstance(), "error", "reporting_timing_not_supported")
    };
    var PI = function(a, b, c, d) {
        this.url = a;
        this.mimeType = b;
        this.Sa = c;
        this.g = d === void 0 ? null : d
    };

    function QI(a) {
        var b = L.getInstance(),
            c = a.getVideoPlaybackQuality && a.getVideoPlaybackQuality();
        c ? (a = a.currentTime, M(b, "vqdf", String(c.droppedVideoFrames)), M(b, "vqtf", String(c.totalVideoFrames)), M(b, "vqfr", String(Math.round(c.totalVideoFrames / a)))) : M(b, "vqu", "1")
    };

    function RI(a) {
        this.g = a
    }
    RI.prototype.toString = function() {
        return this.g
    };
    var SI = new RI("video_mute"),
        TI = new RI("video_caption_visibility");

    function UI(a) {
        Q.call(this);
        this.A = 1;
        this.l = [];
        this.o = 0;
        this.g = [];
        this.j = {};
        this.F = !!a
    }
    pb(UI, Q);
    var VI = function(a, b, c) {
            var d = TI.toString(),
                e = a.j[d];
            e || (e = a.j[d] = []);
            var f = a.A;
            a.g[f] = d;
            a.g[f + 1] = b;
            a.g[f + 2] = c;
            a.A = f + 3;
            e.push(f)
        },
        WI = function(a, b, c) {
            var d = a.j[TI.toString()];
            if (d) {
                var e = a.g;
                (d = d.find(function(f) {
                    return e[f + 1] == b && e[f + 2] == c
                })) && a.B(d)
            }
        };
    UI.prototype.B = function(a) {
        var b = this.g[a];
        if (b) {
            var c = this.j[b];
            this.o != 0 ? (this.l.push(a), this.g[a + 1] = function() {}) : (c && pc(c, a), delete this.g[a], delete this.g[a + 1], delete this.g[a + 2])
        }
        return !!b
    };
    UI.prototype.C = function(a, b) {
        var c = this.j[a];
        if (c) {
            var d = Array(arguments.length - 1),
                e = arguments.length,
                f;
            for (f = 1; f < e; f++) d[f - 1] = arguments[f];
            if (this.F)
                for (f = 0; f < c.length; f++) e = c[f], XI(this.g[e + 1], this.g[e + 2], d);
            else {
                this.o++;
                try {
                    for (f = 0, e = c.length; f < e && !this.Ja(); f++) {
                        var g = c[f];
                        this.g[g + 1].apply(this.g[g + 2], d)
                    }
                } finally {
                    if (this.o--, this.l.length > 0 && this.o == 0)
                        for (; c = this.l.pop();) this.B(c)
                }
            }
        }
    };
    var XI = function(a, b, c) {
        Ex(function() {
            a.apply(b, c)
        })
    };
    UI.prototype.clear = function(a) {
        if (a) {
            var b = this.j[a];
            b && (b.forEach(this.B, this), delete this.j[a])
        } else this.g.length = 0, this.j = {}
    };
    UI.prototype.O = function() {
        UI.Za.O.call(this);
        this.clear();
        this.l.length = 0
    };

    function YI(a) {
        Q.call(this);
        this.g = new UI(a);
        Os(this, this.g)
    }
    pb(YI, Q);
    YI.prototype.clear = function(a) {
        this.g.clear(a !== void 0 ? a.toString() : void 0)
    };
    var ZI = function(a) {
        a = a === void 0 ? null : a;
        Q.call(this);
        this.g = new dG(this);
        Os(this, this.g);
        this.Tb = a
    };
    r(ZI, Q);
    var $I = function(a, b, c) {
        a.Tb && (VI(a.Tb.g, b, c), Ns(a, function() {
            WI(a.Tb.g, b, c)
        }))
    };
    var aJ = function(a, b) {
        ZI.call(this, b);
        $I(this, function(c) {
            c ? a.g.mode = "showing" : a.Cb()
        }, this)
    };
    r(aJ, ZI);
    var bJ = function() {
        R.call(this);
        this.j = new dG(this);
        Os(this, this.j)
    };
    r(bJ, R);
    var dJ = function(a, b, c) {
        c = c === void 0 ? !0 : c;
        bJ.call(this);
        a.setAttribute("crossorigin", "anonymous");
        var d = Tj("TRACK");
        d.setAttribute("kind", "captions");
        d.setAttribute("src", b);
        d.setAttribute("default", "");
        a.appendChild(d);
        this.g = a.textTracks[0];
        cJ(this);
        c ? this.g.mode = "showing" : this.Cb()
    };
    r(dJ, bJ);
    var cJ = function(a) {
        var b = a.g;
        b.addEventListener("cuechange", function() {
            for (var c = b.cues, d = 0; d < c.length; d++) {
                var e = c[d];
                e.align = "center";
                e.position = "auto"
            }
        }, {
            once: !0
        })
    };
    dJ.prototype.Cb = function() {
        this.g.mode = "hidden"
    };

    function eJ(a, b) {
        if (typeof ReportingObserver !== "undefined") {
            var c = function(e) {
                    e = v(e);
                    for (var f = e.next(); !f.done; f = e.next()) f = f.value, a(f) && b(f)
                },
                d = new ReportingObserver(c, {
                    buffered: !0
                });
            y.addEventListener("pagehide", function() {
                c(d.takeRecords(), d);
                d.disconnect()
            });
            d.observe()
        }
    }

    function fJ(a) {
        a = a === void 0 ? null : a;
        eJ(function(b) {
            return b.body && b.body.id === "HeavyAdIntervention"
        }, function(b) {
            var c = b.body.message,
                d = L.getInstance();
            M(d, "ham", c);
            c.includes("CPU") ? M(d, "hacpu", "true") : c.includes("network") && M(d, "habytes", "true");
            a && a(b)
        })
    };
    var gJ = "autoplay controls crossorigin demuxedaudiosrc demuxedvideosrc loop muted playsinline poster preload src webkit-playsinline x-webkit-airplay".split(" "),
        hJ = "autoplay buffered controls crossOrigin currentSrc currentTime defaultMuted defaultPlaybackRate disablePictureInPicture disableRemotePlayback duration ended loop muted networkState onerror onwaitingforkey paused played playsinline poster preload preservesPitch mozPreservesPitch webkitPreservesPitch readyState seekable videoWidth videoHeight volume textTracks canPlayType captureStream getVideoPlaybackQuality load pause play requestPictureInPicture setSinkId oncanplay oncanplaythrough onload onplay onpause onended onfullscreenchange onfullscreenerror addEventListener dispatchEvent removeEventListener requestFullscreen".split(" "),
        iJ = {
            childList: !0
        },
        jJ = !RegExp("^\\s*class\\s*\\{\\s*\\}\\s*$").test(function() {}.toString()),
        kJ = HTMLElement;
    jJ && (kJ = function() {
        var a = Object.getPrototypeOf(this).constructor;
        return y.Reflect.construct(HTMLElement, [], a)
    }, Object.setPrototypeOf(kJ, HTMLElement), Object.setPrototypeOf(kJ.prototype, HTMLElement.prototype));
    var lJ = function(a) {
            if (a !== null) {
                a = v(a);
                for (var b = a.next(); !b.done; b = a.next())
                    if (b = b.value, b.nodeName === "TRACK".toString()) return b
            }
            return null
        },
        mJ = function(a, b) {
            this.code = a;
            this.message = b === void 0 ? "" : b
        },
        nJ = function(a) {
            mJ.call(this, MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED, a === void 0 ? "" : a)
        };
    r(nJ, mJ);
    var rJ = function(a, b) {
        b = b === void 0 ? !1 : b;
        var c = kJ.call(this) || this;
        M(L.getInstance(), "ulv", "1");
        c.ti = b;
        c.la = null;
        c.Ff = null;
        c.Ze = null;
        c.T = Tj("VIDEO");
        oJ(c);
        c.Tb = a || new YI;
        pJ(c);
        c.Vc = null;
        qJ(c);
        c.attachShadow({
            mode: "open"
        });
        c.shadowRoot.appendChild(c.T);
        fJ(function() {
            M(L.getInstance(), "has", c.src || c.xb);
            M(L.getInstance(), "hat", String(c.T.currentTime))
        });
        c.Ed = !1;
        c.Jf = !1;
        c.Hc = null;
        c.Bd = null;
        c.Od = null;
        c.wi = !1;
        c.Qf = !1;
        c.uk = null;
        c.wc = null;
        return c
    };
    r(rJ, kJ);
    var sJ = function(a) {
        a.T.load();
        $n(yo) && a.T.dispatchEvent(new Event("canplaythrough"))
    };
    rJ.prototype.attributeChangedCallback = function(a, b, c) {
        switch (a) {
            case "src":
                tJ(this, c);
                break;
            case "demuxedaudiosrc":
            case "demuxedvideosrc":
                uJ(this);
                break;
            case "muted":
                this.T[a] = c === "" ? !0 : !!c;
                vJ(this, a, c);
                break;
            default:
                vJ(this, a, c)
        }
    };
    rJ.prototype.Id = function(a) {
        this.wc = a;
        var b;
        (b = this.la) == null || b.Id(a)
    };
    var wJ = function() {
            navigator.audioSession && (navigator.audioSession.type = "ambient")
        },
        vJ = function(a, b, c) {
            c !== a.T.getAttribute(b) && (c === null ? a.T.removeAttribute(b) : a.T.setAttribute(b, c))
        },
        xJ = function(a) {
            a.la && (a.T.removeEventListener("timeupdate", a.Hc), a.la.dispose(), a.la = null)
        },
        yJ = function(a, b) {
            a.Ze = b;
            a.T.dispatchEvent(new Event("error"))
        },
        oJ = function(a) {
            zJ(a);
            AJ(a);
            a.T.addEventListener("loadedmetadata", function() {
                a.Od = FF(a);
                a.Od.then(function(b) {
                    var c = a.T;
                    var d = new Ij(b.width, b.height);
                    b = a.T.videoWidth;
                    var e = a.T.videoHeight,
                        f = d.width,
                        g = d.height;
                    b > 0 && e > 0 && f > 0 && g > 0 ? (d = d.width / d.height, b /= e, b = Math.min(b, d) / Math.max(b, d) >= .97 ? "cover" : "contain") : b = null;
                    b !== null && fk(c, {
                        "object-fit": b
                    })
                })
            });
            a.T.addEventListener("play", function() {
                a.Jf || (OI(a.T, "first_play"), a.Jf = !0)
            });
            a.T.addEventListener("pause", function() {
                a.Ed || (OI(a.T, "first_pause"), QI(a.T), a.Ed = !0)
            });
            jx(y, "pagehide", function() {
                a.Ed || (OI(a.T, "first_pause"), QI(a.T), a.Ed = !0)
            });
            a.T.addEventListener("stalled", function() {
                M(L.getInstance(), "ves", "1")
            });
            (new PF(a.T)).listen("playbackStalled",
                function() {
                    return M(L.getInstance(), "pbs", "1")
                });
            a.T.addEventListener("media_source_error", function(b) {
                xJ(a);
                b = b.detail;
                yJ(a, new mJ(b.code, b.message))
            });
            BJ(a)
        },
        qJ = function(a) {
            var b = lJ(a.childNodes);
            b && CJ(a, b);
            a.Vc === null && DJ(a)
        },
        DJ = function(a) {
            if (y.MutationObserver) {
                var b = new MutationObserver(function(c) {
                    c = v(c);
                    for (var d = c.next(); !d.done; d = c.next())
                        if (d = d.value, d.type === "childList" && (d = lJ(d.addedNodes))) {
                            CJ(a, d);
                            b.disconnect();
                            break
                        }
                });
                b.observe(a, iJ)
            }
        },
        pJ = function(a) {
            a.T.addEventListener("volumechange",
                function() {
                    a.Tb.g.C(SI.toString(), a.T.muted);
                    a.ti || a.Tb.g.C(TI.toString(), a.T.muted)
                })
        },
        CJ = function(a, b) {
            if (a.Vc === null && b.hasAttribute("src")) {
                var c = b.getAttribute("src");
                a.Vc = new dJ(a.T, c, b.hasAttribute("default"));
                new aJ(a.Vc, a.Tb);
                c.includes("kind=asr") && M(L.getInstance(), "act", "1")
            }
        },
        tJ = function(a, b) {
            if (b !== a.Ff) {
                a.Ff = b;
                a.wi && b && oF(b) && (b = qF(b));
                var c = b ? SG(b) : null,
                    d = !!c && YG(c);
                M(L.getInstance(), "umsem", d ? "1" : "0");
                d ? (b = kE(PI, b, TG(c), JG[c] * 1E3, null), a.la = kE(EI, [b]), a.wc && a.la.Id(a.wc), a.la.listen("media_source_error",
                    function(e) {
                        e = UG("media_source_error", e.detail);
                        a.T.dispatchEvent(e)
                    }), a.Hc = function() {
                    var e = a.la;
                    e.C = a.T.currentTime * 1E3;
                    GI(e)
                }, a.T.addEventListener("timeupdate", a.Hc), WG(a.la.g) && (vJ(a, "disableRemotePlayback", "true"), wJ(), a.Bd = function(e) {
                    e = e.detail;
                    e.currentTimeSeconds = a.T.currentTime;
                    a.dispatchEvent(new CustomEvent("bufferremoved", {
                        detail: e
                    }))
                }, a.la.listen("bufferremoved", a.Bd)), vJ(a, "src", HI(a.la))) : (xJ(a), vJ(a, "src", b));
                a.Qf || sJ(a)
            }
        },
        uJ = function(a) {
            a.src && yJ(a, new mJ(MediaError.MEDIA_ERR_ABORTED,
                "Setting demuxed src after src is already set."));
            if (!a.Nb && !a.xb && a.la) xJ(a), vJ(a, "src", null), sJ(a);
            else if (a.Nb && a.xb) {
                var b = SG(oF(a.xb) ? qF(a.xb) : a.xb),
                    c = SG(oF(a.Nb) ? qF(a.Nb) : a.Nb);
                if (b && YG(b))
                    if (c && YG(c)) {
                        var d = !!b && YG(b) && !!c && YG(c);
                        M(L.getInstance(), "umsed", d ? "1" : "0");
                        b = kE(PI, a.xb, TG(b), -1, null);
                        c = kE(PI, a.Nb, TG(c), -1, null);
                        a.la = kE(EI, [b, c]);
                        a.wc && a.la.Id(a.wc);
                        a.la.listen("media_source_error", function(e) {
                            e = UG("media_source_error", e.detail);
                            a.T.dispatchEvent(e)
                        });
                        a.Hc = function() {
                            var e = a.la;
                            e.C =
                                a.T.currentTime * 1E3;
                            GI(e)
                        };
                        a.T.addEventListener("timeupdate", a.Hc);
                        WG(a.la.g) && (vJ(a, "disableRemotePlayback", "true"), wJ(), a.Bd = function(e) {
                            e = e.detail;
                            e.currentTimeSeconds = a.T.currentTime;
                            a.dispatchEvent(new CustomEvent("bufferremoved", {
                                detail: e
                            }))
                        }, a.la.listen("bufferremoved", a.Bd));
                        vJ(a, "src", HI(a.la));
                        a.Qf || sJ(a)
                    } else yJ(a, new nJ('Audio itag "' + c + '" not supported.'));
                else yJ(a, new nJ('Video itag "' + b + '" not supported.'))
            }
        },
        zJ = function(a) {
            for (var b = v(hJ), c = b.next(), d = {}; !c.done; d = {
                    ob: void 0,
                    getValue: void 0
                },
                c = b.next()) d.ob = c.value, d.ob in a.T && (typeof a.T[d.ob] === "function" ? (d.getValue = a.T[d.ob].bind(a.T), Object.defineProperty(a, d.ob, {
                set: function(e) {
                    return function(f) {
                        a.T[e.ob] = f
                    }
                }(d),
                get: function(e) {
                    return function() {
                        return e.getValue
                    }
                }(d)
            })) : Object.defineProperty(a, d.ob, {
                set: function(e) {
                    return function(f) {
                        a.T[e.ob] = f
                    }
                }(d),
                get: function(e) {
                    return function() {
                        return a.T[e.ob]
                    }
                }(d)
            }))
        },
        AJ = function(a) {
            Object.defineProperty(a, "error", {
                set: function() {},
                get: function() {
                    return a.T.error ? a.T.error : a.Ze
                }
            })
        },
        BJ =
        function(a) {
            a.T.style.width = mk();
            a.T.style.height = mk()
        };
    rJ.prototype.disconnectedCallback = function() {
        this.Od && GF(this.Od);
        kJ.prototype.disconnectedCallback && kJ.prototype.disconnectedCallback.call(this)
    };
    fa.Object.defineProperties(rJ.prototype, {
        Nb: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.setAttribute("demuxedaudiosrc", a)
            },
            get: function() {
                return this.getAttribute("demuxedaudiosrc")
            }
        },
        xb: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.setAttribute("demuxedvideosrc", a)
            },
            get: function() {
                return this.getAttribute("demuxedvideosrc")
            }
        },
        src: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.setAttribute("src", a)
            },
            get: function() {
                return this.getAttribute("src")
            }
        }
    });
    fa.Object.defineProperties(rJ, {
        observedAttributes: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return gJ
            }
        }
    });
    y.customElements && (y.customElements.get("lima-video") || y.customElements.define("lima-video", rJ));
    var EJ = function() {
        FG.apply(this, arguments)
    };
    r(EJ, FG);
    EJ.prototype.unload = function() {
        this.g.removeAttribute("demuxedVideoSrc");
        this.g.removeAttribute("demuxedAudioSrc");
        FG.prototype.unload.call(this)
    };
    var FJ = function(a) {
            this.g = a;
            this.o = "";
            this.l = -1;
            this.j = null;
            this.B = !1
        },
        HJ = function(a, b) {
            if (a.l >= 0) {
                var c = b == null ? function() {} : b,
                    d = function() {
                        GJ(a, c);
                        a.g.removeEventListener("loadedmetadata", d, !1)
                    };
                a.g.addEventListener("loadedmetadata", d, !1);
                a.g.src = a.o;
                a.j !== null && a.g.setAttribute("crossOrigin", a.j);
                a.g.load()
            } else b != null && b()
        },
        GJ = function(a, b) {
            var c = a.g.seekable.length > 0;
            a.B ? c ? (a.g.currentTime = a.l, IJ(a), b()) : setTimeout(function() {
                return void GJ(a, b)
            }, 100) : (IJ(a), b())
        },
        IJ = function(a) {
            a.l = -1;
            a.o =
                "";
            a.B = !1;
            a.j = null
        };
    var JJ = function(a, b, c, d) {
        EJ.call(this, a, b === void 0 ? !1 : b, c === void 0 ? !1 : c, d === void 0 ? !1 : d);
        this.Aa = new FJ(a)
    };
    r(JJ, EJ);
    JJ.prototype.ma = function() {
        var a = this.Aa;
        a.o = a.g.currentSrc;
        a.B = a.g.seekable.length > 0;
        a.j = a.g.getAttribute("crossOrigin");
        a.l = a.g.ended ? -1 : a.g.currentTime
    };
    JJ.prototype.U = function(a) {
        HJ(this.Aa, a)
    };
    var KJ = function() {};

    function LJ() {
        var a = kE(iI);
        a.initialize().then(function() {
            var b = UG("initialized");
            a.dispatchEvent(b)
        });
        return a
    }
    var NJ = function(a, b, c, d, e) {
        Q.call(this);
        this.G = a;
        this.j = c;
        this.o = e;
        this.ba = this.U = this.tb = this.F = this.l = this.Hb = 0;
        this.C = [];
        this.M = !1;
        this.ca = this.ia = this.da = null;
        this.za = !1;
        this.Zb = this.K = this.B = this.Aa = this.Ra = null;
        this.Ea = !1;
        this.H = new LE(b.url);
        this.Sa = b.Sa;
        this.ma = d;
        (this.P = b.g) || this.H.l.remove("alr");
        M(L.getInstance(), "sl_dv" + this.o, (this.P !== null).toString());
        this.V = !this.P;
        this.g = new XMLHttpRequest;
        this.aa = .1;
        if (this.A = mH() && !pF(this.H)) this.B = LJ(), Os(this, this.B);
        MJ(this)
    };
    r(NJ, Q);
    var OJ = function(a, b) {
            b = UG("media_source_error", b);
            a.G.dispatchEvent(b)
        },
        PJ = function(a, b) {
            OJ(a, {
                code: a.l > 1 ? MediaError.MEDIA_ERR_NETWORK : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
                message: b
            })
        },
        MJ = function(a) {
            a.da = function() {
                QJ(a);
                if (a.V) {
                    var b = a.g.responseText;
                    a.M = !b || b.length < a.Sa;
                    a.U = 0;
                    Wm("sl_cc" + a.o + "_" + a.l);
                    a.F++;
                    RJ(a)
                }
            };
            a.ia = function() {
                QJ(a)
            };
            a.ca = function() {
                Wm("sl_ec" + a.o + "_" + a.l);
                PJ(a, "Failed to load chunk " + a.l + " for stream " + a.o)
            };
            a.g.addEventListener("load", a.da);
            a.g.addEventListener("progress",
                a.ia);
            a.g.addEventListener("error", a.ca);
            a.j.addEventListener("updateend", function() {
                a.j.buffered.length && (a.tb = a.j.buffered.end(0), a.A ? a.Ea && !a.j.updating && a.l === a.F && (Wm("sl_lc" + a.o), a.ma()) : a.M && !a.j.updating && a.l === a.F && (Wm("sl_lc" + a.o), a.ma()));
                !a.za && a.G.buffered.length > 1 && (M(L.getInstance(), "dbr", "1"), a.za = !0)
            });
            a.j.addEventListener("update", function() {
                a.C.length && !a.j.updating && a.j.appendBuffer(a.C.shift())
            });
            a.j.addEventListener("error", function() {
                Wm("msb_err" + a.o);
                OJ(a, {
                    code: MediaError.MEDIA_ERR_DECODE,
                    message: "Error on SourceBuffer " + a.o
                })
            });
            a.A ? (a.B.gb() ? SJ(a) : a.Ra = jx(a.B, "initialized", function() {
                SJ(a)
            }), a.Aa = jx(a.B, "get_video_succeeded", function() {
                RJ(a)
            })) : SJ(a)
        },
        UJ = function(a) {
            Wm("sl_rc" + a.o + "_" + a.l);
            var b = TJ(a);
            a.g.open("get", b);
            a.g.overrideMimeType("text/plain; charset=x-user-defined");
            a.g.send(null);
            a.A && (a.K = null, a.Zb = b)
        },
        QJ = function(a) {
            if (a.g.status >= 400) PJ(a, 'Response code "' + a.g.status + '" on loading chunk ' + a.l + " for stream " + a.o);
            else {
                if (!a.V) {
                    var b = a.g.getResponseHeader("content-type");
                    if (b && b.indexOf("text/plain") >= 0) {
                        a.g.readyState === XMLHttpRequest.DONE && (a.H = new LE(a.g.response), a.l = 0, a.F = 0, a.Hb++, SJ(a));
                        return
                    }
                    a.V = !0;
                    Wm("sl_redc" + a.o);
                    M(L.getInstance(), "sl_tr" + a.o, a.Hb.toString())
                }
                a.H.l.remove("alr");
                if (a.g.readyState === XMLHttpRequest.LOADING || a.g.readyState === XMLHttpRequest.DONE) b = VJ(a, a.U), a.U = a.g.response.length, a.ba += b.byteLength, WJ(a, b);
                if (a.A && a.g.readyState === XMLHttpRequest.DONE && (b = VJ(a, 0), b.byteLength > 0)) {
                    var c = a.g.responseText;
                    a.Ea = !c || c.length < a.Sa;
                    a.B.Qc(b, new LE(a.Zb),
                        0, a.Ea)
                }
            }
        },
        WJ = function(a, b) {
            b.byteLength > 0 && (a.j.updating || a.C.length ? a.C.push(b) : a.j.appendBuffer(b))
        },
        VJ = function(a, b) {
            a = a.g.response;
            for (var c = new Uint8Array(a.length - b), d = 0; d < c.length; d++) c[d] = a.charCodeAt(d + b) & 255;
            return c.buffer
        },
        RJ = function(a) {
            var b = rF;
            b !== -1 && b < a.ba + a.Sa ? (a.G.pause(), rF = -1, b = !1) : (b = a.F === a.l && !a.j.updating && !a.C.length, b = a.A ? !a.Ea && b && a.G.currentTime >= a.aa : !a.M && b && a.G.currentTime >= a.aa);
            b && (a.aa = a.tb + .1, SJ(a))
        },
        TJ = function(a) {
            var b = a.A && a.K ? a.K + 1 : a.l * a.Sa;
            return ZE(a.H, "range",
                b + "-" + (b + a.Sa - 1)).toString()
        },
        SJ = function(a) {
            if (a.A) {
                var b = new LE(TJ(a));
                a.B.Ac(b).then(function(c) {
                    c ? (a.K = Number(c.Yc), a.Ea = c.Ea, WJ(a, c.video), c = UG("get_video_succeeded"), a.B.dispatchEvent(c), a.F++) : UJ(a);
                    a.l++
                })
            } else UJ(a), a.l++
        };
    NJ.prototype.O = function() {
        this.A && this.B.gb() && this.B.close();
        this.g.removeEventListener("load", this.da);
        this.g.removeEventListener("progress", this.ia);
        this.g.removeEventListener("error", this.ca);
        rx(this.Ra);
        rx(this.Aa);
        Q.prototype.O.call(this)
    };
    var YJ = function(a, b) {
        Q.call(this);
        var c = this;
        this.B = a;
        this.G = b;
        this.g = new MediaSource;
        this.F = [];
        this.l = [];
        this.j = this.o = null;
        this.A = !1;
        this.C = function() {
            XJ(c)
        };
        this.g.addEventListener("sourceopen", this.C)
    };
    r(YJ, Q);
    var ZJ = function(a) {
            a.o && a.B.removeEventListener("timeupdate", a.o)
        },
        XJ = function(a) {
            Wm("msmsw_oso");
            a.o = function() {
                if (!a.A)
                    for (var e = v(a.l), f = e.next(); !f.done; f = e.next()) RJ(f.value)
            };
            a.B.addEventListener("timeupdate", a.o);
            for (var b = 0; b < a.G.length; b++) {
                var c = a.G[b];
                M(L.getInstance(), "msmsw_mime" + b, c.mimeType);
                M(L.getInstance(), "msmsw_cs" + b, c.Sa.toString());
                var d = a.g.addSourceBuffer(c.mimeType);
                d ? (a.F.push(d), c = kE(NJ, a.B, c, d, function() {
                    a: if (!a.A) {
                        for (var e = v(a.l), f = e.next(); !f.done; f = e.next())
                            if (f = f.value,
                                f.A ? !f.Ea || f.j.updating || f.C.length : !f.M || f.j.updating || f.C.length) break a;
                        a.g.endOfStream();
                        a.A = !0;
                        ZJ(a)
                    }
                }, b), a.l.push(c)) : Wm("msmsw_sbf" + b)
            }
            M(L.getInstance(), "msmsw_ns", a.F.length.toString())
        };
    YJ.prototype.O = function() {
        this.j && window.URL.revokeObjectURL(this.j);
        for (var a = v(this.l), b = a.next(); !b.done; b = a.next()) b.value.dispose();
        ZJ(this);
        this.g.removeEventListener("sourceopen", this.C);
        Q.prototype.O.call(this)
    };
    RegExp.prototype.hasOwnProperty("sticky");
    /* 
     
    Math.uuid.js (v1.4) 
    http://www.broofa.com 
    mailto:robert@broofa.com 
    Copyright (c) 2010 Robert Kieffer 
    Dual licensed under the MIT and GPL licenses. 
    */
    var $J = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
        aK = function() {
            for (var a = Array(36), b = 0, c, d = 0; d < 36; d++) d == 8 || d == 13 || d == 18 || d == 23 ? a[d] = "-" : d == 14 ? a[d] = "4" : (b <= 2 && (b = 33554432 + Math.random() * 16777216 | 0), c = b & 15, b >>= 4, a[d] = $J[d == 19 ? c & 3 | 8 : c]);
            return a.join("")
        };
    var cK = function(a) {
        LE.call(this, a);
        this.C = new Map;
        a = this.j;
        var b = a.indexOf(";"),
            c = null;
        b >= 0 ? (this.j = a.substring(0, b), c = a.substring(b + 1)) : this.j = a;
        bK(this, c)
    };
    r(cK, LE);
    cK.prototype.toString = function() {
        return dK(this, LE.prototype.toString.call(this))
    };
    cK.prototype.F = function() {
        return ""
    };
    var bK = function(a, b) {
            Bb(nj(b)) || b.split(";").forEach(function(c) {
                var d = c.indexOf("=");
                if (!(d <= 0)) {
                    var e = jj(c.substring(0, d));
                    c = jj(c.substring(d + 1));
                    d = a.C.get(e);
                    d != null ? d.includes(c) || d.push(c) : d = [nj(c)];
                    a.C.set(e, d)
                }
            }, a)
        },
        eK = function(a) {
            if (Bb(nj("ord"))) return null;
            a = a.C.get("ord");
            return a != null ? a : null
        },
        fK = function(a, b) {
            Bb(nj("ord")) || (b = b.map(nj), a.C.set("ord", b))
        },
        dK = function(a, b) {
            b = [nj(b)];
            b.push.apply(b, ta(gK(a)));
            return b.join(";")
        },
        gK = function(a) {
            var b = eK(a);
            b == null ? b = [nj(Date.now())] : Bb(nj("ord")) ||
                a.C.delete("ord");
            var c = [];
            a.C.forEach(function(d, e) {
                d.forEach(function(f) {
                    c.push(e + "=" + f)
                })
            });
            c.push("ord=" + b[0]);
            fK(a, b);
            return c
        };
    cK.prototype.G = function() {
        return new cK(this.toString())
    };
    var hK = {
        zj: "IABUSPrivacy_String",
        ij: "IABTCF_gdprApplies",
        yj: "IABTCF_TCString",
        hj: "IABTCF_AddtlConsent",
        gj: "IABGPP_HDR_GppString",
        fj: "IABGPP_GppSID"
    };
    var iK = {
        DEPRECATED_ERROR_CODE: -1,
        VAST_MALFORMED_RESPONSE: 100,
        VAST_SCHEMA_VALIDATION_ERROR: 101,
        VAST_UNSUPPORTED_VERSION: 102,
        VAST_TRAFFICKING_ERROR: 200,
        VAST_UNEXPECTED_LINEARITY: 201,
        VAST_UNEXPECTED_DURATION_ERROR: 202,
        VAST_WRAPPER_ERROR: 300,
        VAST_LOAD_TIMEOUT: 301,
        VAST_TOO_MANY_REDIRECTS: 302,
        VAST_NO_ADS_AFTER_WRAPPER: 303,
        VIDEO_PLAY_ERROR: 400,
        VAST_MEDIA_LOAD_TIMEOUT: 402,
        VAST_LINEAR_ASSET_MISMATCH: 403,
        VAST_PROBLEM_DISPLAYING_MEDIA_FILE: 405,
        OVERLAY_AD_PLAYING_FAILED: 500,
        NONLINEAR_DIMENSIONS_ERROR: 501,
        OVERLAY_AD_LOADING_FAILED: 502,
        VAST_NONLINEAR_ASSET_MISMATCH: 503,
        COMPANION_REQUIRED_ERROR: 602,
        COMPANION_AD_LOADING_FAILED: 603,
        UNKNOWN_ERROR: 900,
        VPAID_ERROR: 901,
        FAILED_TO_REQUEST_ADS: 1005,
        VAST_ASSET_NOT_FOUND: 1007,
        VAST_EMPTY_RESPONSE: 1009,
        UNKNOWN_AD_RESPONSE: 1010,
        UNSUPPORTED_LOCALE: 1011,
        ADS_REQUEST_NETWORK_ERROR: 1012,
        INVALID_AD_TAG: 1013,
        PROTECTED_AUDIENCE_API_ERROR: 1014,
        STREAM_INITIALIZATION_FAILED: 1020,
        ASSET_FALLBACK_FAILED: 1021,
        UNSUPPORTED_URL: 1022,
        INVALID_ARGUMENTS: 1101,
        NATIVE_MESSAGE_ERROR: 1204,
        AUTOPLAY_DISALLOWED: 1205,
        CONSENT_MANAGEMENT_PROVIDER_NOT_READY: 1300,
        Uj: 2002
    };
    iK[-1] = "DEPRECATED_ERROR_CODE";
    iK[100] = "VAST_MALFORMED_RESPONSE";
    iK[101] = "VAST_SCHEMA_VALIDATION_ERROR";
    iK[102] = "VAST_UNSUPPORTED_VERSION";
    iK[200] = "VAST_TRAFFICKING_ERROR";
    iK[201] = "VAST_UNEXPECTED_LINEARITY";
    iK[202] = "VAST_UNEXPECTED_DURATION_ERROR";
    iK[300] = "VAST_WRAPPER_ERROR";
    iK[301] = "VAST_LOAD_TIMEOUT";
    iK[302] = "VAST_TOO_MANY_REDIRECTS";
    iK[303] = "VAST_NO_ADS_AFTER_WRAPPER";
    iK[400] = "VIDEO_PLAY_ERROR";
    iK[402] = "VAST_MEDIA_LOAD_TIMEOUT";
    iK[403] = "VAST_LINEAR_ASSET_MISMATCH";
    iK[405] = "VAST_PROBLEM_DISPLAYING_MEDIA_FILE";
    iK[500] = "OVERLAY_AD_PLAYING_FAILED";
    iK[501] = "NONLINEAR_DIMENSIONS_ERROR";
    iK[502] = "OVERLAY_AD_LOADING_FAILED";
    iK[503] = "VAST_NONLINEAR_ASSET_MISMATCH";
    iK[602] = "COMPANION_REQUIRED_ERROR";
    iK[603] = "COMPANION_AD_LOADING_FAILED";
    iK[900] = "UNKNOWN_ERROR";
    iK[901] = "VPAID_ERROR";
    iK[1005] = "FAILED_TO_REQUEST_ADS";
    iK[1007] = "VAST_ASSET_NOT_FOUND";
    iK[1009] = "VAST_EMPTY_RESPONSE";
    iK[1010] = "UNKNOWN_AD_RESPONSE";
    iK[1011] = "UNSUPPORTED_LOCALE";
    iK[1012] = "ADS_REQUEST_NETWORK_ERROR";
    iK[1013] = "INVALID_AD_TAG";
    iK[1014] = "PROTECTED_AUDIENCE_API_ERROR";
    iK[1020] = "STREAM_INITIALIZATION_FAILED";
    iK[1021] = "ASSET_FALLBACK_FAILED";
    iK[1022] = "UNSUPPORTED_URL";
    iK[1101] = "INVALID_ARGUMENTS";
    iK[1204] = "NATIVE_MESSAGE_ERROR";
    iK[1205] = "AUTOPLAY_DISALLOWED";
    iK[1300] = "CONSENT_MANAGEMENT_PROVIDER_NOT_READY";
    iK[2002] = "SUPPORTED_ADS_NOT_FOUND";
    var jK = function(a, b, c) {
        var d = Error.call(this);
        this.message = d.message;
        "stack" in d && (this.stack = d.stack);
        this.type = a;
        this.errorMessage = b;
        this.errorCode = c;
        this.ad = this.g = null
    };
    r(jK, Error);
    m = jK.prototype;
    m.getAd = function() {
        return this.ad
    };
    m.getInnerError = function() {
        return this.g
    };
    m.getMessage = function() {
        return this.errorMessage
    };
    m.getErrorCode = function() {
        return this.errorCode
    };
    m.getVastErrorCode = function() {
        return this.errorCode < 1E3 ? this.errorCode : 900
    };
    m.getType = function() {
        return this.type
    };
    m.toString = function() {
        return "AdError " + this.getErrorCode() + ": " + this.getMessage() + (this.getInnerError() != null ? " Caused by: " + this.getInnerError() : "")
    };
    m.fa = function() {
        for (var a = {}, b = a = (a.type = this.getType(), a.errorCode = this.getErrorCode(), a.errorMessage = this.getMessage(), a), c = this.getInnerError(), d = 0; d < 3; ++d)
            if (c instanceof jK) {
                var e = {};
                e = (e.type = c.getType(), e.errorCode = c.getErrorCode(), e.errorMessage = c.getMessage(), e);
                b = b.innerError = e;
                c = c.getInnerError()
            } else {
                c != null && (b.innerError = String(c));
                break
            }
        return a
    };
    var kK = va(["https://imasdk.googleapis.com/js/sdkloader/car.js"]);
    tj(kK);

    function lK(a) {
        return a ? (a = /\/(\d+)(?:,\d+){0,2}\//.exec(a)) && a.length === 2 ? a[1] : null : null
    }

    function mK(a) {
        if (a === "") return null;
        a = new LE(a);
        var b = $E(a, "slotname") || $E(a, "iu");
        if (!(b = b ? lK(b) : null)) {
            var c;
            b = (a = (c = $E(a, "client")) != null ? c : "") ? a : null
        }
        return b
    }

    function nK(a, b) {
        try {
            var c = new URL(a);
            return c.searchParams.get("slotname") || c.searchParams.get("iu") || ""
        } catch (d) {
            b == null || b(d)
        }
        return ""
    }

    function oK(a) {
        try {
            var b = (new URL(a)).searchParams.get("cust_params");
            return b == null ? {} : Object.fromEntries(b.split("&").map(function(c) {
                return c.split("=")
            }).map(function(c) {
                var d;
                return [c[0], decodeURIComponent((d = c[1]) != null ? d : "").split(",")]
            }).filter(function(c) {
                return c[0].length > 0
            }))
        } catch (c) {}
        return {}
    };
    var pK = function(a) {
        var b = a;
        b: {
            if (b && typeof b === "object") {
                a = v(Object.values(hK));
                for (var c = a.next(); !c.done; c = a.next())
                    if (b.hasOwnProperty(c.value)) {
                        a = !0;
                        break b
                    }
            }
            a = !1
        }
        if (a) {
            var d, e, f, g, h, k;
            c = {};
            a = (c.uspString = (d = b.IABUSPrivacy_String) != null ? d : null, c.gdprApplies = (e = b.IABTCF_gdprApplies) != null ? e : null, c.tcString = (f = b.IABTCF_TCString) != null ? f : null, c.addtlConsent = (g = b.IABTCF_AddtlConsent) != null ? g : null, c.gppString = (h = b.IABGPP_HDR_GppString) != null ? h : null, c.gppSid = (k = b.IABGPP_GppSID) != null ? k : null, c)
        } else a =
            b;
        b = a.uspString;
        this.uspString = typeof b === "string" ? b : "";
        b = a.gdprApplies;
        this.j = typeof b === "boolean" ? b ? "1" : "0" : typeof b !== "number" || b !== 1 && b !== 0 ? typeof b !== "string" || b !== "1" && b !== "0" ? "" : b === "1" ? "1" : "0" : b === 1 ? "1" : "0";
        b = a.tcString;
        this.g = typeof b === "string" ? b : "";
        /^[\.\w_-]*$/.test(this.g) || (this.g = encodeURIComponent(this.g));
        b = a.gppString;
        this.gppString = typeof b === "string" ? b : "";
        a = a.gppSid;
        this.l = typeof a === "string" ? a : ""
    };
    var qK = function(a) {
            this.g = a
        },
        sK = function(a) {
            return rK(a)
        },
        tK = function(a, b) {
            return Ai(a.g, b) && (a = a.g[b], typeof a === "boolean") ? a : !1
        },
        uK = function(a) {
            return Ai(a.g, "videoElementFakeDuration") && (a = a.g.videoElementFakeDuration, typeof a === "number") ? a : NaN
        },
        rK = function(a) {
            if (Ai(a.g, "forceExperimentIds")) {
                a = a.g.forceExperimentIds;
                var b = [],
                    c = 0;
                Array.isArray(a) && a.forEach(function(d) {
                    typeof d === "number" && (b[c++] = d)
                });
                return b
            }
            return null
        };
    var U = function() {
            this.F = "always";
            this.M = 4;
            this.I = null;
            this.B = 1;
            this.g = 0;
            this.o = !0;
            this.locale = "en";
            this.l = null;
            this.j = !1;
            this.V = this.U = "";
            this.C = null;
            this.aa = this.P = -1;
            this.A = "";
            this.H = !1;
            this.ba = null;
            this.G = !0;
            this.L = aK();
            this.K = {};
            try {
                this.ba = Jq()[0]
            } catch (a) {}
        },
        vK = function(a) {
            a = nj(a);
            Bb(a) || (a = a.substring(0, 20));
            return a
        };
    m = U.prototype;
    m.setCompanionBackfill = function(a) {
        this.F = a
    };
    m.getCompanionBackfill = function() {
        return this.F
    };
    m.setNumRedirects = function(a) {
        this.M = a
    };
    m.getNumRedirects = function() {
        return this.M
    };
    m.setPpid = function(a) {
        this.I = a
    };
    m.getPpid = function() {
        return this.I
    };
    m.setVpaidAllowed = function(a) {
        typeof a === "boolean" && (this.B = a ? 1 : 0)
    };
    m.setVpaidMode = function(a) {
        this.B = a
    };
    m.hh = function() {
        return this.B
    };
    m.setAutoPlayAdBreaks = function(a) {
        this.o = a
    };
    m.wh = function() {
        return this.o
    };
    m.di = function(a) {
        this.j = a
    };
    m.gh = function() {
        return this.j
    };
    m.setLocale = function(a) {
        if (a = XF(a)) this.locale = a
    };
    m.getLocale = function() {
        return this.locale
    };
    m.setPlayerType = function(a) {
        this.U = vK(a)
    };
    m.getPlayerType = function() {
        return this.U
    };
    m.setPlayerVersion = function(a) {
        this.V = vK(a)
    };
    m.getPlayerVersion = function() {
        return this.V
    };
    var wK = function(a) {
        if (a.C == null) {
            var b = {};
            var c = (new LE(Qj().location.href)).l;
            if (eF(c, "tcnfp")) try {
                b = JSON.parse(c.get("tcnfp"))
            } catch (d) {}
            a.C = new qK(b)
        }
        return a.C
    };
    m = U.prototype;
    m.ei = function(a) {
        this.P = a
    };
    m.fi = function(a) {
        this.aa = a
    };
    m.setDisableCustomPlaybackForIOS10Plus = function(a) {
        this.H = a
    };
    m.getDisableCustomPlaybackForIOS10Plus = function() {
        return this.H
    };
    m.isCookiesEnabled = function() {
        return this.G
    };
    m.setCookiesEnabled = function(a) {
        a != null && (this.G = a)
    };
    m.setSessionId = function(a) {
        this.L = a
    };
    m.ci = function() {};
    m.fh = function() {
        return !0
    };
    m.setFeatureFlags = function(a) {
        this.K = a
    };
    m.getFeatureFlags = function() {
        return this.K
    };
    m.fa = function(a) {
        a = a === void 0 ? null : a;
        var b = {};
        a != null && (b.activeViewPushUpdates = a);
        b.activityMonitorMode = this.g;
        b.adsToken = this.A;
        b.autoPlayAdBreaks = this.o;
        b.companionBackfill = this.getCompanionBackfill();
        b.cookiesEnabled = this.isCookiesEnabled();
        b.disableCustomPlaybackForIOS10Plus = this.getDisableCustomPlaybackForIOS10Plus();
        b.engagementDetection = !0;
        b.isFunctionalTest = !1;
        b.isVpaidAdapter = this.j;
        b["1pJar"] = "";
        b.numRedirects = this.getNumRedirects();
        b.pageCorrelator = this.P;
        b.persistentStateCorrelator = pm();
        b.playerType = this.getPlayerType();
        b.playerVersion = this.getPlayerVersion();
        b.ppid = this.getPpid();
        b.privacyControls = "";
        b.reportMediaRequests = !1;
        b.sessionId = this.L;
        b.streamCorrelator = this.aa;
        b.testingConfig = wK(this).g;
        b.urlSignals = this.ba;
        b.vpaidMode = this.B;
        b.featureFlags = this.getFeatureFlags();
        return b
    };
    U.prototype.getFeatureFlags = U.prototype.getFeatureFlags;
    U.prototype.setFeatureFlags = U.prototype.setFeatureFlags;
    U.prototype.getDisableFlashAds = U.prototype.fh;
    U.prototype.setDisableFlashAds = U.prototype.ci;
    U.prototype.setSessionId = U.prototype.setSessionId;
    U.prototype.setCookiesEnabled = U.prototype.setCookiesEnabled;
    U.prototype.isCookiesEnabled = U.prototype.isCookiesEnabled;
    U.prototype.getDisableCustomPlaybackForIOS10Plus = U.prototype.getDisableCustomPlaybackForIOS10Plus;
    U.prototype.setDisableCustomPlaybackForIOS10Plus = U.prototype.setDisableCustomPlaybackForIOS10Plus;
    U.prototype.setStreamCorrelator = U.prototype.fi;
    U.prototype.setPageCorrelator = U.prototype.ei;
    U.prototype.getPlayerVersion = U.prototype.getPlayerVersion;
    U.prototype.setPlayerVersion = U.prototype.setPlayerVersion;
    U.prototype.getPlayerType = U.prototype.getPlayerType;
    U.prototype.setPlayerType = U.prototype.setPlayerType;
    U.prototype.getLocale = U.prototype.getLocale;
    U.prototype.setLocale = U.prototype.setLocale;
    U.prototype.getIsVpaidAdapter = U.prototype.gh;
    U.prototype.setIsVpaidAdapter = U.prototype.di;
    U.prototype.isAutoPlayAdBreaks = U.prototype.wh;
    U.prototype.setAutoPlayAdBreaks = U.prototype.setAutoPlayAdBreaks;
    U.prototype.getVpaidMode = U.prototype.hh;
    U.prototype.setVpaidMode = U.prototype.setVpaidMode;
    U.prototype.setVpaidAllowed = U.prototype.setVpaidAllowed;
    U.prototype.getPpid = U.prototype.getPpid;
    U.prototype.setPpid = U.prototype.setPpid;
    U.prototype.getNumRedirects = U.prototype.getNumRedirects;
    U.prototype.setNumRedirects = U.prototype.setNumRedirects;
    U.prototype.getCompanionBackfill = U.prototype.getCompanionBackfill;
    U.prototype.setCompanionBackfill = U.prototype.setCompanionBackfill;
    var xK = new U;
    var yK = function(a, b) {
            (0, a.__uspapi)("getUSPData", 1, function(c, d) {
                b.La({
                    gf: c != null ? c : void 0,
                    kf: d ? void 0 : 2
                })
            })
        },
        zK = {
            me: function(a) {
                return a.La
            },
            md: function(a, b) {
                a = {};
                return a.__uspapiCall = {
                    callId: b,
                    command: "getUSPData",
                    version: 1
                }, a
            },
            Fc: function(a, b) {
                b = b.__uspapiReturn;
                var c;
                a({
                    gf: (c = b.returnValue) != null ? c : void 0,
                    kf: b.success ? void 0 : 2
                })
            }
        };

    function AK(a) {
        var b = {};
        typeof a.data === "string" ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            Df: b.__uspapiReturn.callId
        }
    }
    var BK = function(a, b) {
        b = b === void 0 ? {} : b;
        Q.call(this);
        var c;
        this.timeoutMs = (c = b.timeoutMs) != null ? c : 500;
        this.caller = new lE(a, "__uspapiLocator", function(d) {
            return typeof d.__uspapi === "function"
        }, AK);
        this.caller.B.set("getDataWithCallback", yK);
        this.caller.o.set("getDataWithCallback", zK)
    };
    r(BK, Q);
    BK.prototype.O = function() {
        this.caller.dispose();
        Q.prototype.O.call(this)
    };
    var CK = function(a, b) {
        var c = {};
        if (mE(a.caller)) {
            var d = pi(function() {
                b(c)
            });
            oE(a.caller, "getDataWithCallback", {
                La: function(e) {
                    e.kf || (c = e.gf);
                    d()
                }
            });
            setTimeout(d, a.timeoutMs)
        } else b(c)
    };
    var DK = function(a) {
        this.D = C(a)
    };
    r(DK, I);
    var EK = function(a) {
        return kg(a, 5)
    };

    function FK(a) {
        var b = {};
        (new LE(a)).l.forEach(function(c, d) {
            b[d] = c
        });
        return b
    }

    function GK(a) {
        return a === "1" || a === "true"
    }
    var HK = function(a, b, c, d, e) {
            b = b === void 0 ? {} : b;
            c = c === void 0 ? {} : c;
            this.j = a === void 0 ? !1 : a;
            this.o = d === void 0 ? !1 : d;
            this.B = e === void 0 ? !1 : e;
            a = {};
            b = v(Object.entries(b));
            for (d = b.next(); !d.done; d = b.next()) e = v(d.value), d = e.next().value, e = e.next().value, e != null && (a[d] = String(e));
            this.l = a;
            this.g = new pK(c)
        },
        KK = function(a) {
            var b = a.g.g;
            var c = IK(a, "gdpr_consent");
            b = b && b !== "tcunavailable" ? b : b === "tcunavailable" ? c || b : c || "";
            if (b === "tcunavailable") return null;
            var d;
            return (d = OD(b, JK(a))) != null ? d : null
        },
        IK = function(a, b) {
            if (a.l.hasOwnProperty(b)) return a.l[b]
        },
        MK = function(a) {
            var b;
            (b = LK(a)) || (JK(a) ? (a = KK(a), a = !!a && xE(a)) : a = !0, b = !a);
            return b
        },
        LK = function(a) {
            a = IK(a, "ltd");
            return GK(a)
        },
        JK = function(a) {
            var b = IK(a, "gdpr"),
                c = a.g.j;
            b = (c === "1" || c === "0" ? c : b !== void 0 ? b : "").toLowerCase();
            return b === "true" || b === "1" || a.o
        },
        NK = function(a) {
            var b = new DK;
            if (JK(a)) {
                var c = KK(a);
                c = !!c && !AE(c, ["2", "7", "9", "10"], 3)
            } else c = !1;
            ug(b, 8, c);
            a = !MK(a);
            ug(b, 5, a);
            return b
        },
        OK = function(a) {
            try {
                var b = a.g.gppString,
                    c = a.g.l.split("_").map(function(d) {
                        return Number(d)
                    });
                return KE(b, c).Ih
            } catch (d) {
                return !1
            }
        };
    var PK = function(a) {
        this.D = C(a)
    };
    r(PK, I);
    PK.prototype.getVersion = function() {
        return pg(this, 2)
    };
    var QK = function(a) {
        this.D = C(a)
    };
    r(QK, I);
    var RK = function(a, b) {
            return zg(a, 2, b)
        },
        SK = function(a, b) {
            return zg(a, 3, b)
        },
        TK = function(a, b) {
            return zg(a, 4, b)
        },
        UK = function(a, b) {
            return zg(a, 5, b)
        },
        VK = function(a, b) {
            return zg(a, 9, b)
        },
        WK = function(a, b) {
            return fg(a, 10, b)
        },
        XK = function(a, b) {
            return ug(a, 11, b)
        },
        YK = function(a, b) {
            return zg(a, 1, b)
        },
        ZK = function(a, b) {
            return ug(a, 7, b)
        };
    var $K = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function aL(a) {
        var b;
        return (b = a.google_tag_data) != null ? b : a.google_tag_data = {}
    }

    function bL(a) {
        var b, c;
        return typeof((b = a.navigator) == null ? void 0 : (c = b.userAgentData) == null ? void 0 : c.getHighEntropyValues) === "function"
    }

    function cL() {
        var a = window;
        if (!bL(a)) return null;
        var b = aL(a);
        if (b.uach_promise) return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues($K).then(function(c) {
            b.uach != null || (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }

    function dL(a) {
        var b;
        return XK(WK(UK(RK(YK(TK(ZK(VK(SK(new QK, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), ((b = a.fullVersionList) == null ? void 0 : b.map(function(c) {
            var d = new PK;
            d = zg(d, 1, c.brand);
            return zg(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }

    function eL() {
        var a, b;
        return (b = (a = cL()) == null ? void 0 : a.then(function(c) {
            return dL(c)
        })) != null ? b : null
    };
    var gL = function() {
            this.appName = null;
            this.sa = new HK;
            this.secureSignals = null;
            aK();
            this.deviceId = "";
            this.G = null;
            this.dd = this.he = !1;
            this.Ud = 0;
            this.ed = !1;
            this.yd = null;
            this.preferredLinearOrientation = 0;
            this.g = this.H = this.referrer = null;
            this.Xf = this.Nd = this.ya = !1;
            new kl;
            new il;
            fL(this)
        },
        hL = function() {
            var a = gL.getInstance(),
                b = "h.3.709.0";
            xK.j && (b += "/vpaid_adapter");
            a.dd && (b += "/ima_cast");
            a.ed && (b += "/ima_tv_web");
            return b
        },
        fL = function(a) {
            var b = eL();
            b && b.then(function(c) {
                if (c == null) c = null;
                else {
                    c = c.fa();
                    for (var d = [], e = 0, f = 0; f < c.length; f++) {
                        var g = c.charCodeAt(f);
                        g > 255 && (d[e++] = g & 255, g >>= 8);
                        d[e++] = g
                    }
                    c = ad(d, 3)
                }
                a.g = c
            })
        };
    gL.getInstance = function() {
        return K(gL)
    };
    var jL = function(a) {
            var b = {
                Ud: 0,
                he: !1,
                dd: !1,
                ed: !1,
                yd: null
            };
            a = a === void 0 ? !1 : a;
            var c = wK(xK);
            if (c && tK(c, "forceCustomPlayback") || xK.j) return !0;
            if (NF() && a) return !1;
            a = a && (NF() || Nc && MF(KF, 10)) && xK.getDisableCustomPlaybackForIOS10Plus();
            return (Kc || Mc) && !a || Ic && (!Ic || !MF(LF, 4)) || iL(b) ? !0 : !1
        },
        kL = function(a) {
            var b = {
                Ud: 0,
                he: !1,
                dd: !1,
                ed: !1,
                yd: null
            };
            return a === null ? !1 : xK.j ? !0 : Nc || NF() ? OF(a) ? NF() || Nc && MF(KF, 10) && xK.getDisableCustomPlaybackForIOS10Plus() ? !1 : !0 : !0 : Ic && (!Ic || !MF(LF, 4)) || iL(b) ? !0 : !1
        },
        lL = function() {
            var a =
                wK(xK);
            return a && tK(a, "disableOnScreenDetection") ? !1 : !(navigator && fs(navigator)) && !es()
        },
        iL = function(a) {
            return mL(a) === 1 || mL(a) === 2
        },
        mL = function(a) {
            var b = a.Ud;
            var c = a.he;
            var d = a.dd;
            var e = a.ed;
            a = a.yd;
            switch (b) {
                case 1:
                    return 3;
                case 2:
                    return 1
            }
            b = y.navigator || null;
            return c || d || e || b && fs(b) || a === "tvos" || a === "kepler" ? 1 : gs() ? 2 : 0
        };
    var nL = function(a, b) {
        return a.indexOf(b) == 0 ? a.substr(b.length) : null
    };

    function oL() {
        if (es()) return window.location.href;
        var a = yq(),
            b = a.j,
            c = a.g;
        a = a.l;
        var d = null;
        if (a) try {
            var e = aF(a.url),
                f = e.j,
                g = nL(f, "/v/");
            g || (g = nL(f, "/a/"));
            if (!g) throw Error("Can not extract standalone amp url.");
            var h = nL("/" + g, "/s/"),
                k = PE(e.l);
            k.remove("amp_js_v");
            k.remove("amp_lite");
            var l = h ? aF("https://" + h) : aF("http://" + g);
            OE(l, k);
            d = l.toString()
        } catch (n) {
            d = null
        }
        return d ? d : b && b.url ? b.url : c && c.url ? c.url : ""
    }

    function pL() {
        var a = vq();
        a = v(a);
        for (var b = a.next(); !b.done; b = a.next())
            if (b = b.value, b.url && b.url.includes("amp=1")) return !0;
        return window.context != null ? (a = Number(window.context.ampcontextVersion), isNaN(a) ? !1 : Math.floor(a) > 0) : yq().l != null
    }

    function qL() {
        var a = Qj().location.ancestorOrigins;
        return a ? a.length > 0 ? [].concat(ta(a)).join(",") : "" : ""
    };

    function rL(a, b) {
        ZE(a, "url", "");
        try {
            var c = 2083 - a.toString().length - 1;
            if (c <= 0) return a.toString();
            for (var d = b.slice(0, c), e = encodeURIComponent(d), f = c; f > 0 && e.length > c;) d = b.slice(0, f--), e = encodeURIComponent(d);
            ZE(a, "url", d)
        } catch (g) {}
        return a.toString()
    };
    var V = {},
        sL = (V.creativeView = "creativeview", V.start = "start", V.midpoint = "midpoint", V.firstQuartile = "firstquartile", V.thirdQuartile = "thirdquartile", V.complete = "complete", V.mute = "mute", V.unmute = "unmute", V.pause = "pause", V.rewind = "rewind", V.resume = "resume", V.fullscreen = "fullscreen", V.exitFullscreen = "exitfullscreen", V.expand = "expand", V.collapse = "collapse", V.close = "close", V.acceptInvitation = "acceptinvitation", V.adCanPlay = "adCanPlay", V.adStarted = "adStarted", V.abandon = "abandon", V.acceptInvitationLinear = "acceptinvitationlinear",
            V.engagedView = "engagedview", V.instreamAdComplete = "instreamAdComplete", V.skipShown = "skipshown", V.skippableStateChanged = "skippableStateChanged", V.skip = "skip", V.progress = "progress", V.publisher_invoked_skip = "PUBLISHER_INVOKED_SKIP", V.annotation_start = "annotation_start", V.annotation_click = "annotation_click", V.annotation_close = "annotation_close", V.cta_annotation_shown = "cta_annotation_shown", V.cta_annotation_clicked = "cta_annotation_clicked", V.cta_annotation_closed = "cta_annotation_closed", V.replay = "replay",
            V.stop = "stop", V.autoplayDisallowed = "autoplayDisallowed", V.error = "error", V.mediaLoadTimeout = "mediaLoadTimeout", V.linearChanged = "linearChanged", V.click = "click", V.contentPauseRequested = "contentPauseRequested", V.contentResumeRequested = "contentResumeRequested", V.discardAdBreak = "discardAdBreak", V.updateAdsRenderingSettings = "updateAdsRenderingSettings", V.durationChange = "durationChange", V.expandedChanged = "expandedChanged", V.autoClose = "autoClose", V.userClose = "userClose", V.userRecall = "userRecall", V.prefetched =
            "prefetched", V.loaded = "loaded", V.init = "init", V.allAdsCompleted = "allAdsCompleted", V.adMetadata = "adMetadata", V.adBreakReady = "adBreakReady", V.adBreakFetchError = "adBreakFetchError", V.log = "log", V.volumeChange = "volumeChange", V.companionBackfill = "companionBackfill", V.companionInitialized = "companionInitialized", V.companionImpression = "companionImpression", V.companionClick = "companionClick", V.impression = "impression", V.interaction = "interaction", V.adProgress = "adProgress", V.adBuffering = "adBuffering", V.trackingUrlPinged =
            "trackingUrlPinged", V.measurable_impression = "measurable_impression", V.custom_metric_viewable = "custom_metric_viewable", V.viewable_impression = "viewable_impression", V.fully_viewable_audible_half_duration_impression = "fully_viewable_audible_half_duration_impression", V.audio_audible = "audio_audible", V.audio_measurable = "audio_measurable", V.overlay_resize = "overlay_resize", V.overlay_unmeasurable_impression = "overlay_unmeasurable_impression", V.overlay_unviewable_impression = "overlay_unviewable_impression", V.overlay_viewable_immediate_impression =
            "overlay_viewable_immediate_impression", V.overlay_viewable_end_of_session_impression = "overlay_viewable_end_of_session_impression", V.externalActivityEvent = "externalActivityEvent", V.adEvent = "adEvent", V.configure = "configure", V.remainingTime = "remainingTime", V.destroy = "destroy", V.resize = "resize", V.volume = "volume", V.authorIconClicked = "videoAuthorIconClicked", V.authorNameClicked = "videoAuthorClicked", V.videoClicked = "videoClicked", V.videoIconClicked = "videoIconClicked", V.learnMoreClicked = "videoLearnMoreClicked",
            V.muteClicked = "videoMuteClicked", V.titleClicked = "videoTitleClicked", V.videoSkipClicked = "SKIPPED", V.unmuteClicked = "videoUnmuteClicked", V.vpaidEvent = "vpaidEvent", V.show_ad = "show_ad", V.video_card_endcap_collapse = "video_card_endcap_collapse", V.video_card_endcap_dismiss = "video_card_endcap_dismiss", V.video_card_endcap_impression = "video_card_endcap_impression", V.mediaUrlPinged = "mediaUrlPinged", V.breakStart = "breakstart", V.breakEnd = "breakend", V.omidReady = "omidReady", V.omidUnavailable = "omidUnavailable", V.omidAdSessionCompleted =
            "omidAdSessionCompleted", V.omidAdSessionAbandoned = "omidAdSessionAbandoned", V.verificationNotExecuted = "verificationNotExecuted", V.loadStart = "loadStart", V.seeked = "seeked", V.seeking = "seeking", V);
    var tL = new function() {
        this.l = 0;
        this.g = new Map;
        this.j = typeof window !== "undefined" && window.fetch != null
    };

    function uL(a) {
        var b = b === void 0 ? tL : b;
        var c = c === void 0 ? null : c;
        a = new $F(a, c ? c : c);
        var d = d === void 0 ? !1 : d;
        var e = e === void 0 ? !1 : e;
        a.g != null || e ? AG(b, a.url, d, e, a.g) : AG(b, a.url, d)
    };
    var W = function() {
        this.l = Math.random() < .01;
        this.j = Math.floor(Math.random() * 4503599627370496);
        this.g = null
    };
    W.prototype.report = function(a, b, c) {
        b = b === void 0 ? {} : b;
        if (y.G_testRunner == null && (this.l || (c === void 0 ? 0 : c))) {
            b.lid = a;
            hL() && (b.sdkv = hL());
            this.g && (b.palv = this.g);
            a = eo().sort().join(",");
            Bb(nj(a)) || (b.e = a);
            b = vL(this, b);
            var d = new LE("https://pagead2.googlesyndication.com/pagead/gen_204");
            ti(b, function(e, f) {
                e != null && ZE(d, f, e == null ? "" : typeof e === "boolean" ? e ? "t" : "f" : "" + e)
            }, this);
            b = d.toString();
            a = $E(d, "url");
            a != null && Xb() && b.length > 2083 && (b = rL(d, a));
            uL(b)
        }
    };
    var vL = function(a, b) {
        b.id = "ima_html5";
        var c = Qj();
        var d = document;
        c = new LE(c.parent === c ? c.location.href : d.referrer);
        b.c = a.j;
        b.domain = c.g;
        return b
    };
    W.getInstance = function() {
        return K(W)
    };

    function wL(a) {
        var b = Date.now(),
            c = {};
        a = (c["x-afma-token-requester-type"] = a, c);
        c = "https://pubads.g.doubleclick.net/adsid/integrator.json?aos=" + encodeURIComponent(qL());
        return (new tG).get({
            url: c,
            withCredentials: !0,
            timeout: new YF,
            headers: a
        }).then(function(d) {
            var e = Date.now();
            d = d.newToken || "";
            var f = {};
            W.getInstance().report(182, (f.t = e - b, f.aos = qL(), f));
            return new xL(d)
        }).catch(function(d) {
            var e = "not instanceof Error";
            d instanceof Error && (e = aG(Number(d.message)));
            d = Date.now();
            var f = {};
            W.getInstance().report(182,
                (f.except = e, f.t = d - b, f));
            return Promise.resolve(yL)
        })
    }
    var zL = function() {
        R.call(this);
        this.g = null;
        this.o = new dG(this);
        Os(this, this.o);
        this.j = new Xx(72E5);
        this.l = Promise.resolve(yL)
    };
    r(zL, R);
    var AL = function(a) {
        var b = "requester_type_8";
        b = b === void 0 ? "requester_type_9" : b;
        var c = function(d) {
            a.g = d;
            return a.g
        };
        a.l = wL(b).then(c);
        a.j = new Xx(72E5);
        a.o.listen(a.j, "tick", function() {
            a.l = wL(b).then(c)
        });
        a.j.start();
        Ns(a, function() {
            a.j.stop()
        })
    };
    zL.prototype.getId = function() {
        var a = this;
        return Qa(function(b) {
            if (b.g == 1) return a.g != null && a.g !== yL ? (b.g = 2, b = void 0) : b = Ea(b, a.l, 3), b;
            b.g != 2 && (a.g = b.j);
            return b.return(a.g)
        })
    };
    var xL = function(a) {
            this.id = a
        },
        yL = new xL("");
    var BL = function(a, b, c, d, e) {
            this.name = a;
            this.type = b;
            this.data = c;
            this.id = d;
            this.g = e
        },
        CL = function(a) {
            R.call(this);
            this.o = [];
            this.j = !1;
            this.l = a || "goog_" + oj++
        };
    r(CL, R);
    CL.prototype.connect = function() {
        for (this.j = !0; this.o.length !== 0;) {
            var a = this.o.shift();
            a && this.sendMessage(a)
        }
    };
    var DL = function(a, b, c, d, e, f) {
        a.j ? a.sendMessage(new BL(b, c, d, e, f)) : a.o.push(new BL(b, c, d, e, f))
    };
    CL.prototype.sendMessage = function() {};
    var EL = function(a, b, c, d, e, f) {
        e = e === void 0 ? "" : e;
        f = f === void 0 ? "" : f;
        Ww.call(this, a);
        this.messageType = b;
        this.ra = c;
        this.Oc = d;
        this.origin = e;
        this.id = f
    };
    r(EL, Ww);
    EL.prototype.getId = function() {
        return this.id
    };
    EL.prototype.toString = function() {
        return ""
    };
    var FL = {
            IMAGE: "Image",
            FLASH: "Flash",
            ALL: "All"
        },
        GL = {
            HTML: "Html",
            IFRAME: "IFrame",
            STATIC: "Static",
            ALL: "All"
        },
        HL = {
            IGNORE: "IgnoreSize",
            SELECT_EXACT_MATCH: "SelectExactMatch",
            SELECT_NEAR_MATCH: "SelectNearMatch",
            SELECT_FLUID: "SelectFluid"
        },
        IL = {
            Qi: "DisallowResize",
            Rj: "ResizeSmaller"
        },
        JL = function() {
            this.allowCustom = !0;
            this.creativeType = this.resourceType = "All";
            this.sizeCriteria = "SelectExactMatch";
            this.nearMatchPercent = 90;
            this.adSlotIds = [];
            this.Fd = "DisallowResize"
        };
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$companion_ad_selection_settings.CompanionAdSelectionSettings.CreativeType", FL);
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$companion_ad_selection_settings.CompanionAdSelectionSettings.ResourceType", GL);
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$companion_ad_selection_settings.CompanionAdSelectionSettings.SizeCriteria", HL);
    var LL = function(a, b) {
            b = b === void 0 ? new JL : b;
            this.g = a;
            this.settings = b ? b : new JL;
            this.resourceType = KL(GL, this.settings.resourceType) ? this.settings.resourceType : "All";
            this.creativeType = KL(FL, this.settings.creativeType) ? this.settings.creativeType : "All";
            this.sizeCriteria = KL(HL, this.settings.sizeCriteria) ? this.settings.sizeCriteria : "SelectExactMatch";
            this.Fd = KL(IL, this.settings.Fd) ? this.settings.Fd : "DisallowResize";
            this.adSlotIds = this.settings.adSlotIds != null ? this.settings.adSlotIds : [];
            this.nearMatchPercent =
                typeof this.settings.nearMatchPercent === "number" && this.settings.nearMatchPercent > 0 && this.settings.nearMatchPercent <= 100 ? this.settings.nearMatchPercent : 90
        },
        OL = function(a, b) {
            var c = [];
            b.forEach(function(d) {
                a.settings.allowCustom && (!Bb(d.getContent()) && (isNaN(d.data.sequenceNumber) || isNaN(d.data.mainAdSequenceNumber) || d.data.mainAdSequenceNumber === d.data.sequenceNumber) && ML(a, d) ? c.push(d) : (d = NL(a, d), d != null && !Bb(d.getContent()) && c.push(d)))
            });
            return c
        };
    LL.prototype.qf = function() {
        return this.resourceType
    };
    var ML = function(a, b) {
            var c;
            if (c = b.getContentType() !== "Flash") {
                if (c = a.resourceType === "All" || a.resourceType === b.qf()) c = b.getContentType(), c = c == null ? !0 : a.creativeType === "All" || a.creativeType === c;
                c && (c = b.getAdSlotId(), c = a.adSlotIds.length === 0 ? !0 : c != null ? a.adSlotIds.includes(c) : !1)
            }
            if (c)
                if (c = b.getSize(), (b = !!b.data.fluidSize) || a.g.mf) a = b && a.g.mf;
                else if ((b = a.sizeCriteria === "IgnoreSize") || (b = a.g.size, b = b == c ? !0 : b && c ? b.width == c.width && b.height == c.height : !1), b) a = !0;
            else {
                if (b = a.sizeCriteria === "SelectNearMatch") a.Fd ===
                    "ResizeSmaller" ? (c.width <= a.g.size.width && c.height <= a.g.size.height || (b = a.g.size, b = Math.min(b.width / c.width, b.height / c.height), c = new Ij(b * c.width, b * c.height)), b = c.width, c = c.height) : (b = c.width, c = c.height), b = b > a.g.size.width || c > a.g.size.height || b < a.nearMatchPercent / 100 * a.g.size.width || c < a.nearMatchPercent / 100 * a.g.size.height ? !1 : !0;
                a = b
            } else a = !1;
            return a
        },
        NL = function(a, b) {
            b = PL(b);
            return b == null ? null : b.find(function(c) {
                return ML(a, c)
            }) || null
        },
        KL = function(a, b) {
            return b != null && Bi(a, b)
        };

    function QL(a, b) {
        if (a.length === 0) return null;
        var c = b.ga.g,
            d, e, f = (e = (d = b.Fa) == null ? void 0 : d.g) != null ? e : null;
        a = a.filter(function(g) {
            return g.tagName === "VIDEO" && !g.isEqualNode(c) && !g.isEqualNode(f)
        });
        return a.length > 0 ? a[0] : null
    };
    var RL = function(a, b) {
        this.message = a;
        this.errorCode = b
    };
    RL.prototype.getErrorCode = function() {
        return this.errorCode
    };
    RL.prototype.getMessage = function() {
        return this.message
    };
    var SL = new RL("Failed to initialize ad playback element before starting ad playback.", 400),
        TL = new RL("The provided {0} information: {1} is invalid.", 1101);

    function UL(a, b) {
        var c = b === void 0 ? null : b;
        var d = Ra.apply(2, arguments);
        if (!(c instanceof jK)) {
            var e = a.getErrorCode(),
                f = a.getMessage();
            if (d.length > 0)
                for (var g = 0; g < d.length; g++) f = f.replace(new RegExp("\\{" + g + "\\}", "ig"), d[g]);
            d = new jK("adPlayError", f, e);
            d.g = c;
            c = d
        }
        return c
    };

    function VL(a, b, c) {
        b = b === void 0 ? window : b;
        c = c === void 0 ? function() {} : c;
        try {
            return b.localStorage.getItem(a)
        } catch (d) {
            return c(d), null
        }
    }

    function WL(a, b, c) {
        var d = window;
        d = d === void 0 ? window : d;
        c = c === void 0 ? function() {} : c;
        return EK(b) ? VL(a, d, c) : null
    }

    function XL(a, b, c, d) {
        c = c === void 0 ? window : c;
        d = d === void 0 ? function() {} : d;
        try {
            return c.localStorage.setItem(a, b), !0
        } catch (e) {
            d(e)
        }
        return !1
    }

    function YL(a, b, c, d) {
        var e = window;
        e = e === void 0 ? window : e;
        d = d === void 0 ? function() {} : d;
        return EK(c) ? XL(a, b, e, d) : !1
    }

    function ZL(a, b, c) {
        b = b === void 0 ? window : b;
        c = c === void 0 ? function() {} : c;
        try {
            b.localStorage.removeItem(a)
        } catch (d) {
            c(d)
        }
    }

    function $L(a, b, c, d) {
        c = c === void 0 ? window : c;
        d = d === void 0 ? function() {} : d;
        EK(b) && ZL(a, c, d)
    }

    function aM(a, b) {
        a = a === void 0 ? window : a;
        try {
            return a.localStorage.length
        } catch (c) {
            (b === void 0 ? function() {} : b)(c)
        }
        return null
    }

    function bM(a) {
        var b = b === void 0 ? window : b;
        var c = c === void 0 ? function() {} : c;
        return EK(a) ? aM(b, c) : null
    }

    function cM(a, b, c) {
        b = b === void 0 ? window : b;
        c = c === void 0 ? function() {} : c;
        try {
            return b.localStorage.key(a)
        } catch (d) {
            c(d)
        }
        return null
    }

    function dM(a, b) {
        var c = c === void 0 ? window : c;
        var d = d === void 0 ? function() {} : d;
        return EK(b) ? cM(a, c, d) : null
    }

    function eM(a, b) {
        a = a === void 0 ? window : a;
        b = b === void 0 ? function() {} : b;
        try {
            return Object.keys(a.localStorage)
        } catch (c) {
            b(c)
        }
        return null
    }

    function fM(a) {
        var b = b === void 0 ? window : b;
        var c = c === void 0 ? function() {} : c;
        return EK(a) ? eM(b, c) : null
    };

    function gM(a) {
        return ad(a, 3)
    };
    var hM = {
        Ng: [],
        Lg: 0,
        Ug: [],
        Jk: !1,
        xi: !1
    };
    var iM = function() {};
    iM.getInstance = function() {
        throw Error("Must be overridden");
    };
    var jM = function() {
        this.g = 0
    };
    r(jM, iM);
    jM.Pb = void 0;
    jM.getInstance = function() {
        return jM.Pb ? jM.Pb : jM.Pb = new jM
    };

    function kM(a, b, c, d) {
        c = c === void 0 ? null : c;
        d = d === void 0 ? {} : d;
        var e = jM.getInstance();
        e.g === 0 && (e.g = Math.random() < .001 ? 2 : 1);
        e.g === 2 && (e = {}, wk(Object.assign({}, (e.c = String(a), e.pc = String(Cj()), e.em = c, e.lid = b, e.eids = K(Xn).g().join(), e), d), "esp"))
    };

    function lM() {
        var a = window;
        var b = b === void 0 ? function() {} : b;
        return new Promise(function(c) {
            var d = function() {
                c(b());
                tk(a, "load", d)
            };
            sk(a, "load", d)
        })
    };
    var mM = function() {
            this.cache = {}
        },
        oM = function() {
            nM || (nM = new mM);
            return nM
        },
        pM = function(a) {
            var b = tm(jg(a, 3));
            if (!b) return 3;
            if (tg(a, 2) === void 0) return 4;
            a = Date.now();
            return a > b + 2592E5 ? 2 : a > b + 432E5 ? 1 : 0
        };
    mM.prototype.get = function(a, b, c) {
        function d(k) {
            kM(6, a, k == null ? void 0 : k.message);
            e = !0
        }
        if (this.cache[a]) return {
            W: this.cache[a],
            success: !0
        };
        var e = !1,
            f = "_GESPSK-" + a;
        b = c ? VL(f, window, d) : WL(f, b, d);
        if (e) return {
            W: null,
            success: !1
        };
        if (!b) return {
            W: null,
            success: !0
        };
        try {
            var g = bz(b);
            this.cache[a] = g;
            return {
                W: g,
                success: !0
            }
        } catch (k) {
            var h;
            kM(5, a, (h = k) == null ? void 0 : h.message);
            return {
                W: null,
                success: !1
            }
        }
    };
    mM.prototype.set = function(a, b, c) {
        function d(g) {
            kM(7, e, g == null ? void 0 : g.message)
        }
        var e = tg(a, 1),
            f = "_GESPSK-" + e;
        az(a);
        if (c ? !XL(f, a.fa(), window, d) : !YL(f, a.fa(), b, d)) return !1;
        this.cache[e] = a;
        return !0
    };
    mM.prototype.remove = function(a, b, c) {
        function d(e) {
            kM(8, a, e == null ? void 0 : e.message)
        }
        c ? ZL("_GESPSK-" + a, window, d) : $L("_GESPSK-" + a, b, window, d);
        delete this.cache[a]
    };
    var nM = null;
    var qM = function(a) {
            var b = new Map;
            a = v(a);
            for (var c = a.next(); !c.done; c = a.next()) {
                var d = c.value;
                c = d.o();
                var e = void 0,
                    f = (e = b.get(c)) != null ? e : new Map;
                d = v(d.j());
                for (e = d.next(); !e.done; e = d.next()) {
                    e = e.value;
                    var g = e.o();
                    f.has(g) || f.set(g, []);
                    f.get(g).push(e)
                }
                b.set(c, f)
            }
            this.g = b
        },
        rM = function(a, b, c) {
            var d, e, f;
            return !!((d = a.g) == null ? 0 : (e = d.get(c)) == null ? 0 : (f = e.get(b)) == null ? 0 : f.some(function(g) {
                return g.j()
            }))
        },
        sM = function(a, b) {
            a = v(a.g.values());
            for (var c = a.next(); !c.done; c = a.next()) {
                var d = void 0;
                if ((d = c.value.get(b)) ==
                    null ? 0 : d.some(function(e) {
                        return e.j()
                    })) return !0
            }
            return !1
        },
        uM = function(a, b) {
            return tM(a, b, function(c) {
                return c.j()
            })
        },
        tM = function(a, b, c) {
            var d = new Set;
            a = a.g.get(b);
            if (!a) return d;
            a = v(a.entries());
            for (b = a.next(); !b.done; b = a.next()) {
                var e = v(b.value);
                b = e.next().value;
                e = e.next().value;
                e.some(function(f) {
                    return c(f)
                }) && d.add(b)
            }
            return d
        };

    function vM(a) {
        var b = new Map;
        kM(56, "", null);
        for (var c = new qM([]), d = Array, e = d.from, f = Set, g = [], h = RegExp("^_GESPSK-(.+)$"), k = bM(a), l, n = 0; n < ((l = k) != null ? l : 0); n++) {
            var p = dM(n, a);
            p !== null && (p = (h.exec(p) || [])[1]) && g.push(p)
        }
        f = new f(g);
        g = v([]);
        for (h = g.next(); !h.done; h = g.next())
            for (h = v(uM(c, h.value)), k = h.next(); !k.done; k = h.next()) f.add(k.value);
        d = e.call(d, f);
        d = v(d);
        f = d.next();
        for (e = {}; !f.done; e = {
                Jb: void 0
            }, f = d.next())
            if (e.Jb = f.value, f = void 0, (f = b.get(e.Jb)) == null || Qe(Gf(f, 2)) == null)
                if (h = g = void 0, f = oM().get(e.Jb,
                        a, wM(e.Jb, (h = (g = void 0) == null ? void 0 : g.split(",")) != null ? h : [], c)).W) g = pM(f), g !== 2 && g !== 3 && (ug(f, 9, !1), (g = tg(f, 2)) && g.length > 1024 && (h = {}, kM(55, e.Jb, null, (h.sl = String(g.length), h)), g = f.xa(Xy(108)), If(g, 2)), b.set(e.Jb, f), f = tg(f, 2), h = g = void 0, k = {}, kM(19, e.Jb, null, (k.hs = f ? "1" : "0", k.sl = String((h = (g = f) == null ? void 0 : g.length) != null ? h : -1), k)));
        a = new ez;
        b = v(b);
        for (c = b.next(); !c.done; c = b.next()) c = v(c.value), c.next(), c = c.next().value, ig(a, 2, Zy, c);
        if (!bg(a, Zy, 2, Lf()).length) return null;
        b = {};
        kM(50, "", null, (b.ns =
            String(bg(a, Zy, 2, Lf()).length), b));
        return gM(a.j())
    }

    function wM(a, b, c) {
        return b.some(function(d) {
            return rM(c, a, d)
        })
    };
    var xM = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        Object.setPrototypeOf(this, xM.prototype);
        this.name = "InputError"
    };
    r(xM, Error);
    var yM = function(a) {
            this.reason = a
        },
        zM = function() {
            this.ib = !1
        },
        AM = function() {
            zM.apply(this, arguments);
            this.Ic = new wG
        };
    r(AM, zM);
    var BM = function(a, b) {
        a.ib || (a.ib = !0, a.Dd = b, a.Ic.resolve(b))
    };
    fa.Object.defineProperties(AM.prototype, {
        promise: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Ic.promise
            }
        },
        Kf: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.ib
            }
        },
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.hc
            }
        }
    });
    var CM = function() {
        AM.apply(this, arguments)
    };
    r(CM, AM);
    var DM = function(a, b) {
        b.then(function(c) {
            BM(a, c)
        }).catch(function(c) {
            a.xa(c)
        })
    };
    CM.prototype.xa = function(a, b) {
        this.ib || (this.ib = !0, this.Dd = null, this.hc = a, b && b(this.hc), this.Ic.reject(a))
    };
    var EM = function(a) {
        this.ib = !1;
        this.g = a
    };
    r(EM, zM);
    EM.prototype.Kf = function() {
        return this.g.ib
    };
    fa.Object.defineProperties(EM.prototype, {
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.g.hc
            }
        }
    });
    var FM = function(a) {
        EM.call(this, a);
        this.g = a
    };
    r(FM, EM);
    fa.Object.defineProperties(FM.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.g.Dd
            }
        }
    });
    var GM = function(a) {
        EM.call(this, a);
        this.g = a
    };
    r(GM, EM);
    fa.Object.defineProperties(GM.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a;
                return (a = this.g.Dd) != null ? a : null
            }
        }
    });
    var HM = function() {
        AM.apply(this, arguments)
    };
    r(HM, AM);
    HM.prototype.notify = function() {
        BM(this, null)
    };
    var IM = function(a, b, c) {
        b.then(function() {
            a.notify()
        }).catch(function(d) {
            a.ib = !0;
            a.hc = d;
            c && c(a.hc);
            a.Ic.reject(d)
        })
    };
    var JM = function() {
        Q.apply(this, arguments);
        this.j = [];
        this.g = [];
        this.l = []
    };
    r(JM, Q);
    var KM = function(a, b) {
        a.g.push({
            Rc: !1,
            ae: b
        })
    };
    JM.prototype.Rc = function(a) {
        var b = this.g.find(function(c) {
            return c.ae === a
        });
        b && (b.Rc = !0)
    };
    JM.prototype.O = function() {
        this.j.length = 0;
        this.l.length = 0;
        this.g.length = 0;
        Q.prototype.O.call(this)
    };

    function LM(a, b) {
        var c, d;
        return Qa(function(e) {
            if (e.g == 1) return c = b ? a.filter(function(f) {
                return !f.Rc
            }) : a, Ea(e, Promise.all(c.map(function(f) {
                return f.ae.promise
            })), 2);
            if (a.length === c.length) return e.return();
            d = a.filter(function(f) {
                return f.Rc
            });
            return Ea(e, Promise.race([Promise.all(d.map(function(f) {
                return f.ae.promise
            })), new Promise(function(f) {
                return void setTimeout(f, b)
            })]), 0)
        })
    }
    var MM = function(a, b, c) {
        Q.call(this);
        this.id = a;
        this.l = b;
        this.timeoutMs = c;
        this.o = !1;
        this.g = new JM;
        Os(this, this.g)
    };
    r(MM, Q);
    MM.prototype.start = function() {
        var a = this,
            b, c;
        return Qa(function(d) {
            if (d.g == 1) {
                if (a.o) return d.return();
                a.o = !0;
                d.l = 2;
                return Ea(d, LM(a.g.g, (b = a.P) != null ? b : a.timeoutMs), 4)
            }
            if (d.g != 2) {
                if (!a.Ja()) {
                    for (var e = 0, f = v(a.g.l), g = f.next(); !g.done; g = f.next()) {
                        if (g.value.g.Dd == null) throw Error("missing input: " + a.id + "/" + e);
                        ++e
                    }
                    a.C()
                }
                return Ha(d, 0)
            }
            c = Ia(d);
            if (a.Ja()) return d.return();
            c instanceof xM ? a.A(c) : c instanceof Error && (a.l.Xa({
                methodName: a.id,
                Ib: c
            }), a.j(c));
            d.g = 0
        })
    };
    var NM = function(a, b) {
            b = b === void 0 ? new CM : b;
            a.g.j.push(b);
            return b
        },
        OM = function(a, b) {
            KM(a.g, b);
            b = new FM(b);
            a.g.l.push(b);
            return b
        };
    MM.prototype.A = function() {};
    MM.prototype.j = function(a) {
        if (this.g.j.length)
            for (var b = new xM(a.message), c = v(this.g.j), d = c.next(); !d.done; d = c.next())
                if (d = d.value, !d.Kf) {
                    var e = b;
                    d.ib = !0;
                    d.hc = e;
                    d.Ic.reject(e)
                }
        if (!(a instanceof xM)) {
            var f;
            (f = console) == null || f.error(a)
        }
    };
    var PM = function(a, b, c, d, e) {
        MM.call(this, a, c);
        this.f = b;
        this.G = e;
        a = {};
        d = v(Object.entries(d));
        for (b = d.next(); !b.done; b = d.next())
            if (c = v(b.value), b = c.next().value, c = c.next().value) KM(this.g, c), a[b] = new GM(c);
        this.F = a
    };
    r(PM, MM);
    PM.prototype.C = function() {
        for (var a = this.f, b = a.apply, c = {}, d = v(Object.entries(this.F)), e = d.next(); !e.done; e = d.next()) {
            var f = v(e.value);
            e = f.next().value;
            f = f.next().value;
            c[e] = f.value
        }
        a = b.call(a, this, [c].concat(ta(this.G)));
        this.B(a)
    };
    PM.prototype.A = function(a) {
        this.j(a)
    };
    PM.prototype.reportError = function() {};
    var QM = function(a, b) {
        if (a.o) throw Error("Invalid operation: producer has already started");
        KM(a.g, b);
        return a
    };
    var RM = function(a, b, c, d, e, f) {
        PM.call(this, a, b, c, d, f);
        this.ta = e;
        this.output = NM(this, new CM);
        this.complete = new HM
    };
    r(RM, PM);
    RM.prototype.B = function(a) {
        var b = this;
        a.then(function(c) {
            c instanceof yM || (BM(b.output, c), b.complete.notify())
        }, function(c) {
            b.ta ? BM(b.output, b.ta(c)) : b.output.xa(new xM("output error: " + c.message), function() {
                b.l.Xa({
                    methodName: b.id,
                    Ib: c
                })
            });
            b.complete.notify()
        })
    };
    RM.prototype.j = function(a) {
        this.ta ? (BM(this.output, this.ta(a)), this.complete.notify()) : PM.prototype.j.call(this, a)
    };

    function SM(a, b) {
        a.id = b.id;
        a.ta = b.ta;
        return a
    }

    function TM(a, b, c) {
        return new RM(a.id, a, b, c, a.ta, Ra.apply(3, arguments))
    };
    var UM = function(a, b, c, d, e, f, g) {
        PM.call(this, a, b, c, d, g);
        this.ta = f;
        this.finished = new HM;
        a = Object.keys(e);
        a = v(a);
        for (b = a.next(); !b.done; b = a.next()) this[b.value] = NM(this)
    };
    r(UM, PM);
    UM.prototype.B = function(a) {
        a = v(Object.entries(a));
        for (var b = a.next(); !b.done; b = a.next()) {
            var c = v(b.value);
            b = c.next().value;
            c = c.next().value;
            c instanceof Error && this[b].xa(c);
            c instanceof yM || BM(this[b], c)
        }
        this.finished.notify()
    };
    UM.prototype.j = function(a) {
        this.ta ? this.B(this.ta(a)) : PM.prototype.j.call(this, a)
    };

    function VM(a, b) {
        a.id = b.id;
        a.Pa = b.Pa;
        a.ta = b.ta;
        return a
    }

    function WM(a, b, c) {
        return new UM(a.id, a, b, c, a.Pa, a.ta, Ra.apply(3, arguments))
    };
    var XM = function(a) {
        Q.call(this);
        this.G = a;
        this.F = [];
        this.H = [];
        this.C = {};
        this.l = [];
        this.j = new wG;
        this.B = {}
    };
    r(XM, Q);
    var YM = function(a, b) {
        Os(a, b);
        a.F.push(b);
        return b
    };
    XM.prototype.g = function(a, b) {
        return YM(this, WM.apply(null, [a, this.G, b].concat(ta(Ra.apply(2, arguments)))))
    };
    XM.prototype.o = function(a, b) {
        return YM(this, TM.apply(null, [a, this.G, b].concat(ta(Ra.apply(2, arguments)))))
    };
    var $M = function(a) {
            var b, c, d, e, f, g, h, k, l, n, p, q, u;
            Qa(function(w) {
                switch (w.g) {
                    case 1:
                        if (!a.l.length) {
                            w.g = 2;
                            break
                        }
                        return Ea(w, Promise.all(a.l.map(function(t) {
                            return t.j.promise
                        })), 2);
                    case 2:
                        return Ea(w, ZM(), 4);
                    case 4:
                        b = w.j;
                        if (!b) return a.j.resolve(a.C), w.return(a.j.promise);
                        c = v(a.F);
                        for (d = c.next(); !d.done; d = c.next()) e = d.value, e.start();
                        f = v(a.H);
                        for (g = f.next(); !g.done; g = f.next()) h = g.value, $M(h);
                        if (!a.B) {
                            w.g = 5;
                            break
                        }
                        k = Object.keys(a.B);
                        if (!k.length) {
                            w.g = 5;
                            break
                        }
                        return Ea(w, Promise.all(Object.values(a.B).map(function(t) {
                                return t.promise
                            })),
                            7);
                    case 7:
                        for (l = w.j, n = 0, p = v(k), q = p.next(); !q.done; q = p.next()) u = q.value, a.C[u] = l[n++];
                    case 5:
                        return a.j.resolve(a.C), w.return(a.j.promise)
                }
            })
        },
        ZM = function() {
            return Qa(function(a) {
                return a.return(!0)
            })
        };
    XM.prototype.O = function() {
        Q.prototype.O.call(this);
        this.F.length = 0;
        this.H.length = 0;
        this.l.length = 0
    };
    var bN = VM(aN, {
        id: 1041,
        Pa: {}
    });

    function aN(a, b) {
        if (!a.W) return {};
        oM().set(a.W, a.sa, b) && Qe(Gf(a.W, 2)) != null && kM(27, tg(a.W, 1));
        return {}
    };
    var cN = VM(function(a) {
        var b = a.sa;
        if (a = a.Zh) {
            a = v(a);
            for (var c = a.next(); !c.done; c = a.next()) {
                c = v(c.value.j());
                for (var d = c.next(); !d.done; d = c.next()) d = d.value, d.j() && oM().remove(d.o(), b, !0)
            }
        }
        if (EK(b)) {
            if (b) {
                var e;
                a = (e = fM(b)) != null ? e : [];
                e = v(a);
                for (a = e.next(); !a.done; a = e.next()) a = a.value, a.startsWith("_GESPSK") && $L(a, b)
            }
            nM = new mM
        }
        return {}
    }, {
        id: 1094,
        Pa: {}
    });
    var dN = VM(function(a) {
        var b = a.W;
        a = function(c) {
            var d = {};
            kM(c, tg(b, 1), null, (d.tic = String(Math.round((Date.now() - tm(jg(b, 3))) / 6E4)), d))
        };
        switch (pM(b)) {
            case 0:
                return a(24), {
                    wb: new yM("FRESH_ENTRY"),
                    Kb: new yM("FRESH_ENTRY")
                };
            case 1:
                return a(25), {
                    wb: new yM("STALE_ENTRY"),
                    Kb: b
                };
            case 2:
                return a(26), {
                    wb: b,
                    Kb: new yM("EXPIRED_ENTRY")
                };
            case 3:
                return kM(9, tg(b, 1)), {
                    wb: b,
                    Kb: new yM("ERROR_ENTRY")
                };
            case 4:
                return a(23), {
                    wb: b,
                    Kb: new yM("NEW_ENTRY")
                };
            default:
                return {
                    wb: new yM("DEFAULT_ENTRY"),
                    Kb: new yM("DEFAULT_ENTRY")
                }
        }
    }, {
        id: 1048,
        Pa: {
            wb: void 0,
            Kb: void 0
        }
    });
    var eN = VM(function(a, b, c, d) {
        if (a = oM().get(b, d, c).W) return {
            Da: a,
            qa: new yM("CACHED_ENTRY")
        };
        a = az($y(b));
        return {
            Da: a,
            qa: a.xa(Xy(100))
        }
    }, {
        id: 1027,
        Pa: {
            Da: void 0,
            qa: void 0
        }
    });
    var gN = VM(fN, {
        id: 1046,
        Pa: {
            Ga: void 0
        }
    });

    function fN(a) {
        return {
            Ga: a.Da
        }
    };
    var hN = VM(function(a) {
        var b = a.af;
        a = a.W;
        return b.qa ? {
            Ne: a.xa(b.qa),
            Da: new yM,
            signal: new yM
        } : {
            Da: b.Da,
            Ne: new yM,
            signal: b.signal
        }
    }, {
        id: 1479,
        Pa: {
            Da: void 0,
            Ne: void 0,
            signal: void 0
        }
    });

    function iN(a) {
        return typeof a === "string" ? a : a instanceof Error ? a.message : null
    }
    var jN = SM(function(a, b) {
        var c, d;
        return Qa(function(e) {
            c = Am();
            d = Qe(Gf(a.W, 1));
            kM(18, d);
            try {
                return e.return(b().then(function(f) {
                    kM(29, d, null, {
                        delta: String(Am() - c)
                    });
                    return {
                        Da: zg(a.W, 2, f),
                        qa: null,
                        signal: f
                    }
                }).catch(function(f) {
                    kM(28, d, iN(f));
                    return {
                        Da: null,
                        qa: Xy(106),
                        signal: null
                    }
                }))
            } catch (f) {
                return kM(1, d, iN(f)), e.return({
                    Da: null,
                    qa: Xy(107),
                    signal: null
                })
            }
        })
    }, {
        id: 1478
    });
    var lN = VM(kN, {
        id: 1028,
        Pa: {
            Ga: void 0
        }
    });

    function kN(a) {
        var b = tg(a.W, 1);
        var c = Gf(a.W, 3);
        c != null && (typeof c === "bigint" ? Xd(c) ? c = Number(c) : (c = je(64, c), c = Xd(c) ? Number(c) : String(c)) : c = se(c) ? typeof c === "number" ? Ge(c) : Ce(c) : void 0);
        c != null || kM(35, b);
        return {
            Ga: a.W
        }
    };
    var nN = VM(mN, {
        id: 1050,
        Pa: {
            Ga: void 0
        }
    });

    function mN(a, b) {
        var c = tg(a.W, 1);
        if (a.signal == null) return kM(41, c), a.W.xa(Xy(111)), {
            Ga: a.W
        };
        if (typeof a.signal !== "string") return kM(21, c), {
            Ga: a.W.xa(Xy(113))
        };
        if (a.signal.length > b) return b = {}, kM(12, c, null, (b.sl = String(a.signal.length), b)), c = a.W.xa(Xy(108)), If(c, 2), {
            Ga: a.W
        };
        a.signal.length || kM(20, c);
        If(a.W, 10);
        return {
            Ga: a.W
        }
    };
    var HR = function(a, b, c) {
        this.output = new HM;
        IM(this.output, a, function(d) {
            return void c.Xa({
                methodName: b,
                Ib: d
            })
        })
    };
    var IR = function(a, b) {
        HR.call(this, a, 1046, b)
    };
    r(IR, HR);
    var JR = function(a, b, c, d, e) {
        XM.call(this, e, 2);
        this.A = new CM;
        var f = this.g(eN, {}, a, b, d, e),
            g = new CM;
        BM(g, d);
        this.g(bN, {
            W: f.qa,
            sa: g
        }, b);
        d = this.g(lN, {
            W: f.Da
        });
        d = this.g(dN, {
            W: d.Ga
        }, e);
        f = this.o(jN, {
            W: d.wb
        }, c);
        f = this.g(hN, {
            af: f.output,
            W: d.wb
        });
        var h = f.signal,
            k = f.Da;
        this.g(bN, {
            W: f.Ne,
            sa: g
        }, b);
        f = this.g(nN, {
            W: k,
            signal: h
        }, 1024);
        this.g(bN, {
            W: f.Ga,
            sa: g
        }, b);
        e = new IR(lM(), e);
        e = QM(this.g(gN, {
            Da: d.Kb
        }), e.output);
        c = this.o(jN, {
            W: e.Ga
        }, c);
        c = this.g(hN, {
            af: c.output,
            W: e.Ga
        }).Da;
        this.g(bN, {
            W: c,
            sa: g
        }, b);
        b = f.Ga.promise.then(function(l) {
            var n;
            return {
                id: a,
                collectorGeneratedData: (n = l == null ? void 0 : Qe(Gf(l, 2))) != null ? n : null
            }
        }).catch(function() {
            return {
                id: a,
                collectorGeneratedData: null
            }
        });
        DM(this.A, b)
    };
    r(JR, XM);
    var KR = SM(function(a, b, c, d) {
        d = d === void 0 ? hM : d;
        var e, f, g, h, k, l, n, p, q, u, w;
        return Qa(function(t) {
            f = new qM((e = a.ai) != null ? e : []);
            g = a.pb;
            h = g.id;
            k = g.networkCode;
            l = g.collectorFunction;
            p = (n = k) != null ? n : h;
            q = !!h && !!sM(f, h);
            if (!EK(a.sa) && !q) return t.return(new yM("Storage consent not granted."));
            u = {};
            kM(42, p, null, (u.ea = String(Number(b)), u));
            w = new JR(p, q, l, a.sa, c, d);
            $M(w);
            return t.return(w.A.promise)
        })
    }, {
        id: 1059
    });
    var LR = function(a, b, c, d, e, f) {
        f = f === void 0 ? hM : f;
        MM.call(this, 1059, e);
        this.H = b;
        this.G = f;
        this.F = NM(this);
        this.K = OM(this, a);
        this.B = OM(this, c);
        this.M = d ? OM(this, d) : void 0
    };
    r(LR, MM);
    LR.prototype.C = function() {
        var a, b, c = new qM((b = (a = this.M) == null ? void 0 : a.value) != null ? b : []);
        b = this.K.value;
        var d = b.id;
        a = b.collectorFunction;
        var e;
        b = (e = b.networkCode) != null ? e : d;
        c = !!d && !!sM(c, d);
        if (EK(this.B.value) || c) e = {}, kM(42, b, null, (e.ea = String(Number(this.H)), e)), c = new JR(b, c, a, this.B.value, this.l, this.G), $M(c), DM(this.F, c.A.promise)
    };
    var MR = VM(function(a, b, c, d) {
        d = d === void 0 ? hM : d;
        if (!b) return kM(39, "UNKNOWN_COLLECTOR_ID"), {
            qa: $y("UNKNOWN_COLLECTOR_ID").xa(Xy(110)),
            pb: new yM
        };
        if (typeof b !== "object") return kM(46, "UNKNOWN_COLLECTOR_ID"), {
            qa: $y("UNKNOWN_COLLECTOR_ID").xa(Xy(112)),
            pb: new yM
        };
        a = b.id;
        c = b.networkCode;
        a && c && (delete b.id, kM(47, a + ";" + c));
        a = c != null ? c : a;
        return typeof a !== "string" ? (b = {}, kM(37, "INVALID_COLLECTOR_ID", null, (b.ii = JSON.stringify(a), b)), {
                qa: $y("INVALID_COLLECTOR_ID").xa(Xy(102)),
                pb: new yM
            }) : typeof b.collectorFunction !==
            "function" ? (kM(14, a), {
                qa: $y(a).xa(Xy(105)),
                pb: new yM
            }) : d.Ug.includes(a) ? (kM(22, a), {
                qa: $y(a).xa(Xy(104)),
                pb: new yM
            }) : {
                qa: null,
                pb: b
            }
    }, {
        id: 1057,
        Pa: {
            qa: void 0,
            pb: void 0
        }
    });
    var OR = function(a, b, c, d, e, f) {
        var g = document;
        g = g === void 0 ? document : g;
        f = f === void 0 ? hM : f;
        this.l = b;
        this.o = c;
        this.A = g;
        this.F = d;
        this.C = e;
        this.j = f;
        this.L = [];
        this.I = [];
        this.g = new NR;
        this.B = 0;
        a = v(a);
        for (b = a.next(); !b.done; b = a.next()) this.push(b.value)
    };
    OR.prototype.push = function(a) {
        this.o || this.F();
        var b = new XM(this.g, 3);
        a = b.g(MR, {}, a, this.g, this.j);
        var c = a.pb;
        b.g(bN, {
            W: a.qa,
            sa: this.l
        }, void 0);
        a = this.j.xi ? b.o(KR, {
            pb: c,
            sa: this.l,
            ai: void 0
        }, this.o, this.g, this.j).output.promise : YM(b, new LR(c, this.o, this.l, void 0, this.g, this.j)).F.promise;
        $M(b);
        this.L.push(a);
        b = v(this.I);
        for (c = b.next(); !c.done; c = b.next()) a.then(c.value)
    };
    OR.prototype.addOnSignalResolveCallback = function(a) {
        this.I.push(a);
        for (var b = v(this.L), c = b.next(); !c.done; c = b.next()) c.value.then(a)
    };
    var PR = function(a, b) {
        a.g.g.push(b)
    };
    OR.prototype.clearAllCache = function() {
        var a = this,
            b = this.A.currentScript instanceof HTMLScriptElement ? this.A.currentScript.src : "";
        if (this.B === 1) {
            var c = {};
            kM(49, "", null, (c.url = b, c))
        } else if (this.j.Ng.includes(String(ip(b != null ? b : "")))) c = {}, kM(48, "", null, (c.url = b, c));
        else {
            this.C && this.C();
            var d = new XM(this.g, 4);
            c = d.g(cN, {
                sa: this.l,
                Zh: void 0
            }, this.g);
            $M(d);
            this.B = 1;
            setTimeout(function() {
                a.B = 0
            }, this.j.Lg * 1E3);
            d = {};
            kM(43, "", null, (d.url = b, d));
            return c.finished.promise
        }
    };
    var NR = function() {
        this.g = []
    };
    NR.prototype.Xa = function(a) {
        this.g.forEach(function(b) {
            return void b.Xa(a)
        })
    };
    var QR = function(a) {
        this.push = function(b) {
            a.push(b)
        };
        this.addOnSignalResolveCallback = function(b) {
            a.addOnSignalResolveCallback(b)
        };
        this.addErrorHandler = function(b) {
            PR(a, {
                Xa: function(c) {
                    return void b(c.methodName, c.Ib)
                }
            })
        };
        this.clearAllCache = function() {
            a.clearAllCache()
        }
    };

    function RR(a, b, c, d, e, f, g) {
        g = g === void 0 ? hM : g;
        if (!SR(a, "encryptedSignalProviders", c, f) || !SR(a, "secureSignalProviders", c, f)) {
            kM(38, "");
            var h = {
                Xa: function(k) {
                    return void c(k.methodName, k.Ib)
                }
            };
            TR(a, "encryptedSignalProviders", b, g, h, d, e, f);
            TR(a, "secureSignalProviders", b, g, h, function() {}, e, f)
        }
    }

    function SR(a, b, c, d) {
        if (a[b] === void 0 || a[b] instanceof Array) return !1;
        a = a[b];
        d && a.addOnSignalResolveCallback(d);
        a.addErrorHandler(c);
        return !0
    }

    function TR(a, b, c, d, e, f, g, h) {
        var k, l = new OR((k = a[b]) != null ? k : [], c, b === "secureSignalProviders", f, g, d);
        a[b] = new QR(l);
        h && l.addOnSignalResolveCallback(h);
        PR(l, e)
    }

    function UR(a, b, c, d, e, f) {
        var g = g === void 0 ? hM : g;
        var h = new CM;
        BM(h, b);
        RR(a, h, c, d, e, f, g)
    }

    function VR(a, b, c, d) {
        var e = WR,
            f = YR,
            g = new Map;
        b = b.map(function(h) {
            var k = h.Pg;
            return new Promise(function(l) {
                g.set(k, l)
            })
        });
        UR(a, c, d, e, f, function(h) {
            var k = h.collectorGeneratedData;
            h = h.id;
            var l;
            return void((l = g.get(h)) == null ? void 0 : l({
                collectorGeneratedData: k,
                id: h
            }))
        });
        return b
    };

    function ZR() {
        var a;
        return (a = y.googletag) != null ? a : y.googletag = {
            cmd: []
        }
    };

    function $R(a, b) {
        a = NK(a);
        EK(a) && UR(ZR(), a, function() {}, WR, YR, b)
    }

    function aS(a, b) {
        b = NK(b);
        return EK(b) && a.length !== 0 ? VR(ZR(), a, b, function() {}) : null
    }

    function YR() {}

    function WR() {};

    function bS(a, b, c, d) {
        var e = new wG,
            f = "",
            g = function(k) {
                try {
                    var l = typeof k.data === "object" ? k.data : JSON.parse(k.data);
                    f === l.paw_id && (tk(a, "message", g), l.error ? e.reject(Error(l.error)) : e.resolve(d(l)))
                } catch (n) {}
            },
            h = cS(a);
        return h ? (sk(a, "message", g), f = c(h), e.promise) : (c = dS(a)) ? (f = String(Math.floor(vj() * 2147483647)), sk(a, "message", g), b(c, f), e.promise) : null
    }

    function eS(a) {
        return bS(a, function(b, c) {
            var d, e;
            return void((d = (e = b.getGmaQueryInfo) != null ? e : b.getGmaSig) == null ? void 0 : d.postMessage(c))
        }, function(b) {
            return b.getQueryInfo()
        }, function(b) {
            return b.signal
        })
    }

    function fS() {
        var a = window;
        return !!cS(a) || !!dS(a)
    }

    function cS(a) {
        var b;
        if (typeof((b = a.gmaSdk) == null ? void 0 : b.getQueryInfo) === "function") return a.gmaSdk
    }

    function dS(a) {
        var b, c, d, e, f, g;
        if (typeof((b = a.webkit) == null ? void 0 : (c = b.messageHandlers) == null ? void 0 : (d = c.getGmaQueryInfo) == null ? void 0 : d.postMessage) === "function" || typeof((e = a.webkit) == null ? void 0 : (f = e.messageHandlers) == null ? void 0 : (g = f.getGmaSig) == null ? void 0 : g.postMessage) === "function") return a.webkit.messageHandlers
    }
    (function(a) {
        return Id(function(b) {
            if (!Md(b)) return !1;
            for (var c = v(Object.entries(a)), d = c.next(); !d.done; d = c.next()) {
                var e = v(d.value);
                d = e.next().value;
                e = e.next().value;
                if (!(d in b)) {
                    if (e.Ah === !0) continue;
                    return !1
                }
                if (!e(b[d])) return !1
            }
            return !0
        })
    })({
        vc: Kd,
        pn: Kd,
        eid: Nd(),
        vnm: Nd(),
        js: Kd
    }, "RawGmaSdkStaticSignalObject");
    var hS = function() {
            this.timeoutMs = gS;
            this.j = eS;
            this.signal = null;
            this.g = 0
        },
        iS = function(a) {
            if (!fS() || !Nc && !NF() && !rp(YD)) return Promise.resolve(null);
            var b;
            return ((b = a.j(window)) != null ? b : Promise.resolve(null)).catch(function() {
                return "0"
            })
        },
        kS = function(a) {
            var b;
            return Qa(function(c) {
                if (c.g == 1) return b = Date.now() - a.g, !a.signal || b > 3E5 ? c = Ea(c, jS(a), 3) : (c.g = 2, c = void 0), c;
                c.g != 2 && (a.signal = c.j, a.g = Date.now());
                return c.return(a.signal)
            })
        },
        jS = function(a) {
            return Promise.race([iS(a).then(function(b) {
                if (b == null) return null;
                a.signal = b.length > 1E4 ? "0" : b;
                a.g = Date.now();
                return a.signal
            }), Zx(a.timeoutMs, "0")])
        };

    function Zm(a, b) {
        return b instanceof RegExp ? "__REGEXP" + b.toString() : b
    }

    function lS(a, b) {
        return b && b.toString().indexOf("__REGEXP") === 0 ? (a = b.split("__REGEXP")[1].match(/\/(.*)\/(.*)?/), new RegExp(a[1], a[2] || "")) : b
    }
    var oS = function(a, b, c) {
        CL.call(this, b);
        var d = this;
        this.A = a;
        this.g = null;
        this.C = new dG(this);
        this.C.listen(Qj(), "message", function(e) {
            try {
                a: {
                    var f = e.rc,
                        g = mS(f.data);
                    if (nS(d, g)) {
                        if (d.g === null) d.g = f.source, d.j || d.connect();
                        else if (d.g !== f.source) break a;
                        nS(d, g) && d.dispatchEvent(new EL(g.name, g.type, g.data || {}, g.sid, f.origin, g.id, g.replyToMessageId))
                    }
                }
            }
            catch (h) {
                throw c == null || c.Xa({
                    Ib: h
                }), h;
            }
        })
    };
    r(oS, CL);
    var mS = function(a) {
        if (a == null || typeof a !== "string" || !a.startsWith("ima://")) return null;
        a = a.substr(6);
        try {
            return JSON.parse(a, lS)
        } catch (b) {
            return null
        }
    };
    oS.prototype.sendMessage = function(a) {
        if (this.g != null && this.g.postMessage != null) {
            var b = this.g,
                c = b.postMessage,
                d = {};
            d.name = a.name;
            d.type = a.type;
            a.data != null && (d.data = a.data);
            a.id && (d.id = a.id);
            a.g && (d.replyToMessageId = a.g);
            d.sid = this.l;
            d.channel = this.A;
            a = "ima://" + (new $m).fa(d);
            c.call(b, a, "*")
        }
        this.g != null && this.g.postMessage == null && W.getInstance().report(11)
    };
    oS.prototype.O = function() {
        Ms(this.C);
        this.g = null;
        CL.prototype.O.call(this)
    };
    var nS = function(a, b) {
        if (b == null) return !1;
        var c = b.channel;
        if (c == null || c !== a.A) return !1;
        b = b.sid;
        return b == null || a.l !== "*" && b !== a.l ? !1 : !0
    };
    var pS = function() {
        R.call(this);
        this.G = !1;
        this.g = null;
        this.A = this.F = this.M = !1;
        this.j = 0;
        this.o = [];
        this.C = !1;
        this.U = this.P = Infinity;
        this.l = 0;
        this.H = {};
        this.K = new dG(this);
        Os(this, this.K)
    };
    r(pS, R);
    var rS = function(a, b) {
            b == null || a.G || (a.g = b, qS(a), a.G = !0)
        },
        tS = function(a) {
            a.g != null && a.G && (sS(a), a.G = !1, a.F = !1, a.A = !1, a.j = 0, a.o = [], a.C = !1)
        },
        qS = function(a) {
            sS(a);
            !(a.g instanceof R) && "ontouchstart" in document.documentElement && Nc ? (a.H = {
                touchstart: function(b) {
                    a.F = !0;
                    a.j = b.touches.length;
                    a.l && (window.clearTimeout(a.l), a.l = 0, a.M = !0);
                    a.C = uS(a, b.touches) || b.touches.length !== 1;
                    a.C ? (a.P = Infinity, a.U = Infinity) : (a.P = b.touches[0].clientX, a.U = b.touches[0].clientY);
                    b = b.touches;
                    a.o = [];
                    for (var c = 0; c < b.length; c++) a.o.push(b[c].identifier)
                },
                touchmove: function(b) {
                    a.j = b.touches.length;
                    if (!Nc || !MF(KF, 8) || Math.pow(b.changedTouches[0].clientX - a.P, 2) + Math.pow(b.changedTouches[0].clientY - a.U, 2) > 25) a.A = !0
                },
                touchend: function(b) {
                    return void vS(a, b)
                }
            }, ti(a.H, function(b, c) {
                a.g.addEventListener(c, b, !1)
            })) : a.K.listen(a.g, "click", a.V)
        },
        sS = function(a) {
            a.K.ab(a.g, "click", a.V);
            ti(a.H, function(b, c) {
                this.g.removeEventListener(c, b, !1)
            }, a);
            a.H = {}
        },
        vS = function(a, b) {
            !a.F || a.j !== 1 || a.A || a.M || a.C || !uS(a, b.changedTouches) || (a.l = window.setTimeout(function() {
                    return void wS(a)
                },
                300));
            a.j = b.touches.length;
            a.j === 0 && (a.F = !1, a.A = !1, a.o = []);
            a.M = !1
        };
    pS.prototype.V = function() {
        wS(this)
    };
    var uS = function(a, b) {
            for (var c = 0; c < b.length; c++)
                if (a.o.includes(b[c].identifier)) return !0;
            return !1
        },
        wS = function(a) {
            a.l = 0;
            a.dispatchEvent(new Ww("click"))
        };
    pS.prototype.O = function() {
        tS(this);
        R.prototype.O.call(this)
    };
    var xS = function(a) {
            return Qa(function(b) {
                return b.g == 1 ? Ea(b, a.g.promise, 2) : b.return({
                    serializedConfig: a.serializedConfig,
                    errorMessage: a.j,
                    latencyMs: a.l
                })
            })
        },
        BS = function() {
            var a = yS,
                b = zS,
                c = Date.now(),
                d = a.o();
            d.timeout = 6E4;
            d.open("GET", b, !0);
            d.onload = function() {
                a.l = Date.now() - c;
                d.status < 200 || d.status >= 300 ? AS(a, Error("status: " + d.status)) : (a.j = null, a.serializedConfig = d.responseText, a.g.resolve())
            };
            d.onerror = function() {
                a.l = Date.now() - c;
                AS(a, Error("status: " + d.status))
            };
            d.send()
        },
        AS = function(a, b) {
            a.serializedConfig =
                null;
            a.j = b.message;
            a.g.resolve()
        },
        CS = new function() {
            this.o = function() {
                return new XMLHttpRequest
            };
            this.g = new wG;
            this.j = this.serializedConfig = null;
            this.l = 0
        };

    function DS() {
        var a = ES;
        var b = a.appName;
        var c = a.yd;
        a = a.pageUrl;
        var d = new URL("https://securepubads.g.doubleclick.net/pagead/ima_ppub_config");
        if (b && c) {
            switch (c) {
                case "android":
                    d.searchParams.set("msid", b);
                    break;
                case "ios":
                case "tvos":
                case "kepler":
                    d.searchParams.set("an", b)
            }
            return d.toString()
        }
        return a ? (d.searchParams.set("ippd", a), d.toString()) : null
    };
    var FS = [0, Mh, ei];
    var GS = function(a) {
        this.D = C(a)
    };
    r(GS, I);
    var HS = Rh([0, Mh, ei, Mh, FS]);

    function IS(a, b, c) {
        var d, e, f;
        a = ((f = (d = E(a, Zh, 2)) == null ? void 0 : (e = bg(d, Yh, 1, Lf())) == null ? void 0 : e.map(function(g) {
            return pg(g, 1)
        })) != null ? f : []).some(function(g) {
            return g === b
        });
        W.getInstance().report(190, {
            fm: a,
            fl: c
        })
    }

    function JS(a, b) {
        if (!a || !b) return !1;
        a = E(a, Xh, 3);
        var c;
        a = !!b && (a == null ? void 0 : (c = Sf(a, 1, void 0, Se)) == null ? void 0 : c.get(b));
        W.getInstance().report(196, {
            status: a,
            network: b
        });
        return a != null ? a : !1
    }

    function KS(a, b) {
        if (!a || !b) return !1;
        var c;
        return !((c = E(a, Wh, 5)) == null || !bg(c, Vh, 1, Lf()).find(function(d) {
            return (d == null ? void 0 : pg(d, 1)) === b && (d == null ? void 0 : kg(d, 2))
        }))
    }

    function LS(a) {
        if (!a) return null;
        var b = new GS;
        a = bg(a, ci, 6, Lf());
        a = v(a);
        for (var c = a.next(); !c.done; c = a.next()) {
            var d = void 0;
            if (c = (d = E(c.value, bi, 4)) == null ? void 0 : E(d, ai, 2)) {
                d = new bi;
                var e = new ai;
                c = ng(c, 1);
                c = If(e, 1, He(c));
                d = dg(d, 2, c);
                ig(b, 1, bi, d)
            }
        }
        return bg(b, bi, 1, Lf()).length === 0 ? null : b
    };

    function MS(a, b, c) {
        var d = NK(a);
        if (kg(d, 8)) return !1;
        a = LK(a) || !EK(d);
        b = JS(b, c);
        return a && !b ? !1 : !0
    };
    var NS = function(a, b) {
        Q.call(this);
        var c = this;
        this.g = a;
        this.j = new Map;
        this.l = function(d) {
            var e = c.j.get(d.messageType);
            if (e) {
                var f = "goog_" + oj++,
                    g = d.getId();
                e(d.ra).then(function(h) {
                    DL(c.g, d.type, d.messageType, h, f, g)
                })
            }
        };
        this.g.listen(b, this.l);
        Ns(this, function() {
            c.j.clear();
            c.g.ab(b, c.l)
        })
    };
    r(NS, Q);
    var OS = {
            Dh: function(a, b) {
                var c = a.injector_basename,
                    d = a.sodar_query_id,
                    e = a.bg_hash_basename,
                    f = a.bg_binary;
                a = window;
                var g = g === void 0 ? !1 : g;
                var h = (g === void 0 ? 0 : g) ? "//ep1.adtrafficquality.google/bg/" + kj(e) + ".js" : "//pagead2.googlesyndication.com/bg/" + kj(e) + ".js";
                e = g;
                e = e === void 0 ? !1 : e;
                g = a.document;
                var k = {};
                k._bgu_ = h;
                k._bgp_ = f;
                b && (k._li_ = b);
                d && (k._sid_ = d);
                (b = a.GoogleTyFxhY) && typeof b.push == "function" || (b = a.GoogleTyFxhY = []);
                b.push(k);
                b = Lj(g);
                b = Rj(b.g, "SCRIPT");
                b.type = "text/javascript";
                b.async = !0;
                c = (e === void 0 ?
                    0 : e) ? tj(Tw, kj(c) + ".js") : tj(Uw, kj(c) + ".js");
                fj(b, c);
                (c = (a.GoogleTyFxhYEET || {})[b.src]) ? c(): g.getElementsByTagName("head")[0].appendChild(b)
            }
        },
        PS = function() {
            this.g = !1
        },
        QS = function(a) {
            var b;
            return Qa(function(c) {
                switch (c.g) {
                    case 1:
                        return c.l = 2, Ea(c, (new tG).get({
                            url: "//pagead2.googlesyndication.com/getconfig/sodar?tid=pal&tv=imaq_h.3.709.0",
                            withCredentials: !1,
                            timeout: new YF
                        }), 4);
                    case 4:
                        b = c.j;
                        Ha(c, 3);
                        break;
                    case 2:
                        return Ia(c), c.return(null);
                    case 3:
                        if (!(typeof b === "object" && b !== null && "injector_basename" in
                                b && "sodar_query_id" in b && "bg_hash_basename" in b && "bg_binary" in b)) return c.return(null);
                        try {
                            OS.Dh(b, "imaq_h.3.709.0")
                        } catch (d) {
                            return c.return(null)
                        }
                        a.g = !0;
                        return c.return(b.sodar_query_id)
                }
            })
        };
    var RS = "abort canplay canplaythrough durationchange emptied loadstart loadeddata loadedmetadata progress ratechange seeked seeking stalled suspend waiting".split(" ");
    var SS = function(a, b) {
        Q.call(this);
        this.g = a;
        this.timeoutMs = b;
        Os(this, this.g)
    };
    r(SS, Q);
    var US = function(a) {
            if (!mE(a.g.caller)) return Promise.resolve(null);
            var b = new wG,
                c = null;
            a.g.addEventListener(function(e) {
                if (e.pingData.internalErrorState === 1) b.resolve(null);
                else if (e.eventName === "listenerRegistered") c = e.listenerId, e.pingData.applicableSections.length === 1 && e.pingData.applicableSections[0] === -1 && b.resolve(new TS("", "-1"));
                else if (e.eventName === "signalStatus" && e.data === "ready") {
                    e = e.pingData;
                    var f, g = ((f = e.applicableSections) != null ? f : []).join("_");
                    b.resolve(new TS(e.gppString, g))
                }
            });
            var d =
                new Promise(function(e) {
                    setTimeout(function() {
                        e(null)
                    }, a.timeoutMs)
                });
            d = Promise.race([b.promise, d]);
            d.then(function() {
                c !== null && a.g.removeEventListener(c)
            });
            return d
        },
        TS = function(a, b) {
            this.gppString = a;
            this.sid = b
        };
    var VS = va(["https://pagead2.googlesyndication.com/omsdk/releases/live/omweb-v1.js"]),
        WS = va(["https://pagead2.googlesyndication.com/omsdk/releases/control/omweb-v1.js"]),
        XS = va(["https://pagead2.googlesyndication.com/omsdk/releases/canary/omweb-v1.js"]),
        YS = va(["https://pagead2.googlesyndication.com/omsdk/releases/experimental/omweb-v1.js"]),
        ZS = tj(VS),
        $S = tj(WS),
        aT = tj(XS),
        bT = tj(YS);

    function cT(a) {
        var b;
        return (b = a.omidSessionInterface) != null ? b : null
    }

    function dT(a) {
        var b, c, d, e, f, g;
        return Qa(function(h) {
            if (h.g == 1) return b = Tj("IFRAME", {
                style: "visibility: hidden; width: 0; height: 0; position: absolute; left: 0; top: 0;",
                title: "Advertisement"
            }), c = new Promise(function(k) {
                b.addEventListener("load", function() {
                    k()
                })
            }), a.appendChild(b), Ea(h, c, 2);
            d = Tj("SCRIPT");
            e = eT();
            fj(d, e);
            f = new Promise(function(k, l) {
                d.addEventListener("load", function() {
                    var n = Wj(b);
                    n && cT(n) ? k(b) : l()
                })
            });
            g = b.contentDocument || b.contentWindow.document;
            g.head.appendChild(d);
            return h.return(f)
        })
    }

    function eT() {
        switch (sp(XD)) {
            case 0:
                return ZS;
            case 1:
                return $S;
            case 2:
                return aT;
            case 3:
                return bT;
            default:
                return ZS
        }
    };
    var fT = function(a, b) {
        R.call(this);
        this.j = b;
        this.g = cT(a)
    };
    r(fT, R);
    var hT = function(a) {
            try {
                a.g && a.g.registerSessionObserver(function(b) {
                    b.type === "sessionStart" ? gT(a, a.j) : b.type === "sessionFinish" && hT(a)
                })
            } catch (b) {
                a.dispatchEvent(new Event("error"))
            }
        },
        gT = function(a, b) {
            b instanceof rJ && (b = b.T);
            var c;
            if (((c = b.tagName) == null ? void 0 : c.toUpperCase()) !== "AUDIO") try {
                a.g && a.g.setVideoElement(b)
            } catch (d) {
                a.dispatchEvent(new Event("error"))
            }
        };
    fT.prototype.O = function() {
        try {
            this.g && this.g.finishAdSession()
        } catch (a) {}
        R.prototype.O.call(this)
    };
    var iT = function(a) {
        this.data = a
    };
    m = iT.prototype;
    m.getTotalAds = function() {
        return this.data.totalAds
    };
    m.getMaxDuration = function() {
        return this.data.maxDuration
    };
    m.getAdPosition = function() {
        return this.data.adPosition
    };
    m.getPodIndex = function() {
        return this.data.podIndex
    };
    m.getTimeOffset = function() {
        return this.data.timeOffset
    };
    m.getIsBumper = function() {
        return this.data.isBumper
    };
    iT.prototype.getIsBumper = iT.prototype.getIsBumper;
    iT.prototype.getTimeOffset = iT.prototype.getTimeOffset;
    iT.prototype.getPodIndex = iT.prototype.getPodIndex;
    iT.prototype.getAdPosition = iT.prototype.getAdPosition;
    iT.prototype.getMaxDuration = iT.prototype.getMaxDuration;
    iT.prototype.getTotalAds = iT.prototype.getTotalAds;
    var jT = function(a) {
        this.data = a
    };
    m = jT.prototype;
    m.getContent = function() {
        return this.data.content
    };
    m.getContentType = function() {
        return this.data.contentType
    };
    m.getWidth = function() {
        return this.getSize().width
    };
    m.getHeight = function() {
        return this.getSize().height
    };
    m.getAdSlotId = function() {
        return this.data.adSlotId
    };
    m.getSize = function() {
        var a = this.data.size;
        return new Ij(a.width, a.height)
    };
    m.qf = function() {
        return this.data.resourceType
    };
    var PL = function(a) {
        return (a = a.data.backupCompanions) ? a.map(function(b) {
            return new jT(b)
        }) : []
    };
    jT.prototype.getAdSlotId = jT.prototype.getAdSlotId;
    jT.prototype.getHeight = jT.prototype.getHeight;
    jT.prototype.getWidth = jT.prototype.getWidth;
    jT.prototype.getContentType = jT.prototype.getContentType;
    jT.prototype.getContent = jT.prototype.getContent;
    var kT = function(a, b) {
        this.j = a;
        this.g = b
    };
    kT.prototype.getAdIdValue = function() {
        return this.j
    };
    kT.prototype.getAdIdRegistry = function() {
        return this.g
    };
    kT.prototype.getAdIdRegistry = kT.prototype.getAdIdRegistry;
    kT.prototype.getAdIdValue = kT.prototype.getAdIdValue;
    var Y = function(a) {
        this.data = a
    };
    Y.prototype.getAdId = function() {
        return this.data.adId
    };
    Y.prototype.getCreativeAdId = function() {
        return this.data.creativeAdId
    };
    Y.prototype.getCreativeId = function() {
        return this.data.creativeId
    };
    var lT = function(a) {
        return a.data.adQueryId
    };
    Y.prototype.getAdSystem = function() {
        return this.data.adSystem
    };
    Y.prototype.getAdvertiserName = function() {
        return this.data.advertiserName
    };
    Y.prototype.getApiFramework = function() {
        return this.data.apiFramework
    };
    var mT = function(a) {
            var b;
            return (b = a.data.clickThroughUrl) != null ? b : null
        },
        nT = function(a) {
            var b;
            return (b = a.data.attributionParams) != null ? b : null
        };
    m = Y.prototype;
    m.getWrapperAdIds = function() {
        return this.data.adWrapperIds
    };
    m.getWrapperCreativeIds = function() {
        return this.data.adWrapperCreativeIds
    };
    m.getWrapperAdSystems = function() {
        return this.data.adWrapperSystems
    };
    m.isLinear = function() {
        return this.data.linear
    };
    m.isSkippable = function() {
        return this.data.skippable
    };
    m.getContentType = function() {
        return this.data.contentType
    };
    m.getDescription = function() {
        return this.data.description
    };
    m.getTitle = function() {
        return this.data.title
    };
    m.getDuration = function() {
        return this.data.duration
    };
    m.getVastMediaWidth = function() {
        return this.data.vastMediaWidth
    };
    m.getVastMediaHeight = function() {
        return this.data.vastMediaHeight
    };
    m.getWidth = function() {
        return this.data.width
    };
    m.getHeight = function() {
        return this.data.height
    };
    m.getUiElements = function() {
        return this.data.uiElements
    };
    m.getMinSuggestedDuration = function() {
        return this.data.minSuggestedDuration
    };
    m.getAdPodInfo = function() {
        return new iT(this.data.adPodInfo)
    };
    m.getCompanionAds = function(a, b, c) {
        var d = this.data.companions;
        if (!d) return [];
        d = d.map(function(e) {
            return new jT(e)
        });
        return OL(new LL({
            size: new Ij(a, b),
            mf: c ? c.sizeCriteria === "SelectFluid" : !1
        }, c), d)
    };
    m.getTraffickingParameters = function() {
        return WF(nj(this.data.traffickingParameters))
    };
    m.getTraffickingParametersString = function() {
        return this.data.traffickingParameters
    };
    m.getVastMediaBitrate = function() {
        return this.data.vastMediaBitrate
    };
    m.getMediaUrl = function() {
        return this.data.mediaUrl
    };
    m.getSurveyUrl = function() {
        return this.data.surveyUrl
    };
    m.getDealId = function() {
        return this.data.dealId
    };
    m.getUniversalAdIds = function() {
        return (this.data.universalAdIds || []).map(function(a) {
            return new kT(a.adIdValue, a.adIdRegistry)
        })
    };
    m.getUniversalAdIdValue = function() {
        return this.data.universalAdIdValue
    };
    m.getUniversalAdIdRegistry = function() {
        return this.data.universalAdIdRegistry
    };
    m.getSkipTimeOffset = function() {
        return this.data.skipTimeOffset
    };
    m.wf = function() {
        return this.data.disableUi
    };
    Y.prototype.isUiDisabled = Y.prototype.wf;
    Y.prototype.getSkipTimeOffset = Y.prototype.getSkipTimeOffset;
    Y.prototype.getUniversalAdIdRegistry = Y.prototype.getUniversalAdIdRegistry;
    Y.prototype.getUniversalAdIdValue = Y.prototype.getUniversalAdIdValue;
    Y.prototype.getUniversalAdIds = Y.prototype.getUniversalAdIds;
    Y.prototype.getDealId = Y.prototype.getDealId;
    Y.prototype.getSurveyUrl = Y.prototype.getSurveyUrl;
    Y.prototype.getMediaUrl = Y.prototype.getMediaUrl;
    Y.prototype.getVastMediaBitrate = Y.prototype.getVastMediaBitrate;
    Y.prototype.getTraffickingParametersString = Y.prototype.getTraffickingParametersString;
    Y.prototype.getTraffickingParameters = Y.prototype.getTraffickingParameters;
    Y.prototype.getCompanionAds = Y.prototype.getCompanionAds;
    Y.prototype.getAdPodInfo = Y.prototype.getAdPodInfo;
    Y.prototype.getMinSuggestedDuration = Y.prototype.getMinSuggestedDuration;
    Y.prototype.getUiElements = Y.prototype.getUiElements;
    Y.prototype.getHeight = Y.prototype.getHeight;
    Y.prototype.getWidth = Y.prototype.getWidth;
    Y.prototype.getVastMediaHeight = Y.prototype.getVastMediaHeight;
    Y.prototype.getVastMediaWidth = Y.prototype.getVastMediaWidth;
    Y.prototype.getDuration = Y.prototype.getDuration;
    Y.prototype.getTitle = Y.prototype.getTitle;
    Y.prototype.getDescription = Y.prototype.getDescription;
    Y.prototype.getContentType = Y.prototype.getContentType;
    Y.prototype.isSkippable = Y.prototype.isSkippable;
    Y.prototype.isLinear = Y.prototype.isLinear;
    Y.prototype.getWrapperAdSystems = Y.prototype.getWrapperAdSystems;
    Y.prototype.getWrapperCreativeIds = Y.prototype.getWrapperCreativeIds;
    Y.prototype.getWrapperAdIds = Y.prototype.getWrapperAdIds;
    Y.prototype.getApiFramework = Y.prototype.getApiFramework;
    Y.prototype.getAdvertiserName = Y.prototype.getAdvertiserName;
    Y.prototype.getAdSystem = Y.prototype.getAdSystem;
    Y.prototype.getCreativeId = Y.prototype.getCreativeId;
    Y.prototype.getCreativeAdId = Y.prototype.getCreativeAdId;
    Y.prototype.getAdId = Y.prototype.getAdId;
    var oT = function(a) {
        this.g = a
    };
    oT.prototype.getCuePoints = function() {
        return this.g
    };
    oT.prototype.getCuePoints = oT.prototype.getCuePoints;
    var pT = function() {
        this.useLearnMoreButton = this.disableUi = this.disableClickThrough = !1;
        this.autoAlign = this.useVideoAdUi = !0;
        this.bitrate = -1;
        this.enablePreloading = !1;
        this.loadVideoTimeout = 8E3;
        this.mimeTypes = null;
        this.playAdsAfterTime = -1;
        this.restoreCustomPlaybackStateOnAdBreakComplete = !1;
        this.uiElements = null;
        this.useStyledNonLinearAds = this.useStyledLinearAds = !1
    };
    pT.prototype.fa = function(a) {
        var b = {};
        Object.assign(b, this);
        a && (b.disableClickThrough = !0);
        return b
    };
    pT.prototype.append = function(a) {
        if (a) {
            var b = a.autoAlign;
            b != null && (this.autoAlign = b);
            b = sj(a.bitrate);
            typeof b === "number" && !isNaN(b) && b > 0 && (this.bitrate = b);
            this.disableClickThrough = a.disableClickThrough || this.disableClickThrough;
            this.disableUi = a.disableUi || this.disableUi;
            this.enablePreloading = a.enablePreloading || this.enablePreloading;
            (b = a.mimeTypes) && b.length !== 0 && (this.mimeTypes = b);
            b = sj(a.playAdsAfterTime);
            typeof b === "number" && !isNaN(b) && b > 0 && (this.playAdsAfterTime = b);
            this.restoreCustomPlaybackStateOnAdBreakComplete =
                a.restoreCustomPlaybackStateOnAdBreakComplete || this.restoreCustomPlaybackStateOnAdBreakComplete;
            b = sj(a.loadVideoTimeout);
            typeof b === "number" && !isNaN(b) && b > 0 && (this.loadVideoTimeout = b);
            this.uiElements = a.uiElements || this.uiElements;
            this.useLearnMoreButton = a.useLearnMoreButton || this.useLearnMoreButton;
            this.useStyledLinearAds = a.useStyledLinearAds || this.useStyledLinearAds;
            this.useStyledNonLinearAds = a.useStyledNonLinearAds || this.useStyledNonLinearAds;
            this.useVideoAdUi = a.useVideoAdUi === !1 ? !1 : this.useVideoAdUi
        }
    };
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ads_rendering_settings.AdsRenderingSettings.AUTO_SCALE", -1);
    var qT = function(a) {
        this.D = C(a)
    };
    r(qT, I);
    var rT = function(a) {
        this.D = C(a)
    };
    r(rT, I);
    var sT = function(a) {
        this.D = C(a)
    };
    r(sT, I);
    var tT = function(a) {
        this.D = C(a)
    };
    r(tT, I);
    var uT = function(a) {
        this.D = C(a)
    };
    r(uT, I);
    var vT = function(a) {
        return $f(a, ol, 5)
    };
    uT.prototype.getWidth = function() {
        return lg(this, 9)
    };
    uT.prototype.getHeight = function() {
        return lg(this, 10)
    };
    var wT = Uh(uT);

    function xT(a) {
        var b;
        return (b = (new Map([
                ["https://googleads.g.doubleclick.net", BigInt(200)],
                ["https://td.doubleclick.net", BigInt(300)],
                ["https://f.creativecdn.com", BigInt(400)],
                ["https://fledge.us.criteo.com", BigInt(500)],
                ["https://fledge.eu.criteo.com", BigInt(600)],
                ["https://fledge.as.criteo.com", BigInt(700)],
                ["https://fledge-buyer-testing-1.uc.r.appspot.com", BigInt(800)],
                ["https://at-us-east.amazon-adsystem.com", BigInt(900)],
                ["https://x.adroll.com", BigInt(1E3)],
                ["https://fledge.dynalyst.jp", BigInt(1100)]
            ])).get(a)) !=
            null ? b : BigInt(100)
    };

    function yT(a) {
        var b = a.si,
            c = a.rk,
            d = a.Hk,
            e = a.auctionNonce,
            f = a.ik,
            g = a.multiBidLimit;
        a = !kg(b, 14);
        for (var h = {}, k = v(bg(b, rT, 7, Lf())), l = k.next(); !l.done; l = k.next()) {
            l = l.value;
            var n = {},
                p = void 0,
                q = (p = d) == null ? void 0 : p.Fh.ki.ri.Kg;
            p = pg(l, 1);
            if (pg(l, 2).length) try {
                if (n = JSON.parse(pg(l, 2)), vj() * 100 < 1) {
                    var u = void 0;
                    (u = q) == null || vl(u, {
                        Sd: p,
                        status: "SUCCESS",
                        Me: 100
                    })
                }
            } catch (ea) {
                u = void 0, (u = q) == null || vl(u, {
                    Sd: p,
                    status: "ERROR",
                    Me: 1
                })
            } else u = void 0, (u = q) == null || vl(u, {
                Sd: p,
                status: "EMPTY",
                Me: 1
            });
            h[pg(l, 1)] = n
        }
        if (d = E(b,
                ml, 6)) h["https://googleads.g.doubleclick.net"] = nf(d), h["https://td.doubleclick.net"] = nf(d);
        d = {};
        k = bg(b, tT, 11, Lf());
        k = v(k);
        for (l = k.next(); !l.done; l = k.next()) l = l.value, d[pg(l, 1)] = lg(l, 2);
        k = {};
        lg(b, 21) !== 0 && (k["*"] = lg(b, 21));
        if (bg(b, sT, 32, Lf()).length > 0) {
            var w = {};
            l = v(bg(b, sT, 32, Lf()));
            for (n = l.next(); !n.done; n = l.next()) n = n.value, w[pg(n, 1)] = lg(n, 2)
        }
        l = {};
        Ae(Gf(b, 18)) != null && (l["https://googleads.g.doubleclick.net"] = mg(b, 18), l["https://td.doubleclick.net"] = mg(b, 18));
        n = v(Sf(b, 24, qT));
        for (q = n.next(); !q.done; q =
            n.next()) p = v(q.value), q = p.next().value, p = p.next().value, mg(p, 4) && (l[q] = mg(p, 4));
        n = {};
        q = v(Sf(b, 24, qT));
        for (p = q.next(); !p.done; p = q.next()) u = v(p.value), p = u.next().value, u = u.next().value, u = pg(u, 5), u.length && (n[p] = {
            type: u
        });
        var t, x;
        if ((t = E(b, ml, 6)) == null ? 0 : (x = $f(t, ll, 3)) == null ? 0 : kg(x, 71)) n["https://td.doubleclick.net"] = {
            type: "default-local-reporting"
        };
        t = {};
        g && g > 1 && (t["*"] = g);
        g = pg(b, 1).split("/td/")[0];
        (x = E(b, ol, 5)) == null ? x = void 0 : (q = x.D, p = q[B] | 0, x = zf(x, q, p) ? yf(x, q, !0) : new x.constructor(xf(q, p, !1)));
        var G;
        x != null && (G = E(x, nl, 5)) != null && If(G, 2);
        G = Object;
        q = G.assign;
        p = pg(b, 1);
        u = pg(b, 2);
        var X = Mf(b, 3, Qe, Lf(Fd));
        w = q.call(G, {}, {
                seller: g,
                decisionLogicURL: p,
                trustedScoringSignalsURL: u,
                interestGroupBuyers: X,
                sellerExperimentGroupId: mg(b, 17),
                auctionSignals: JSON.parse(pg(b, 4) || "{}"),
                sellerSignals: (x == null ? void 0 : nf(x)) || [],
                sellerTimeout: lg(b, 15) || 50,
                perBuyerExperimentGroupIds: l,
                perBuyerSignals: h,
                perBuyerTimeouts: d,
                perBuyerCumulativeTimeouts: k,
                perBuyerRealTimeReportingConfig: n,
                perBuyerMultiBidLimits: t,
                reportingTimeout: 5E3
            },
            w ? {
                perBuyerGroupLimits: w
            } : {}, a ? {
                resolveToConfig: a
            } : {});
        b == null ? h = 0 : (h = vT(b), h = kg(h, 25));
        h && (w.sellerCurrency = "USD", w.perBuyerCurrencies = Object.fromEntries(Sf(b, 22, void 0, Te)));
        pg(b, 28) && (w.directFromSellerSignalsHeaderAdSlot = pg(b, 28));
        if (zT(w.interestGroupBuyers, f)) {
            w.auctionReportBuyerKeys = w.interestGroupBuyers.map(xT);
            f = {
                interestGroupCount: {
                    bucket: BigInt(0),
                    scale: 1
                },
                bidCount: {
                    bucket: BigInt(1),
                    scale: 1
                }
            };
            f.totalGenerateBidLatency = {
                bucket: BigInt(2),
                scale: 1
            };
            f.totalSignalsFetchLatency = {
                bucket: BigInt(3),
                scale: 1
            };
            w.auctionReportBuyers = f;
            var D = D === void 0 ? BigInt(0) : D;
            w.auctionReportBuyerDebugModeConfig = {
                enabled: !0,
                debugKey: D
            }
        }
        e && (w.auctionNonce = e, w.additionalBids = Promise.resolve());
        Sf(b, 33, void 0, Te).size && (w.deprecatedRenderURLReplacements = Object.fromEntries(Sf(b, 33, void 0, Te).entries()), (e = w.deprecatedRenderURLReplacements["${RENDER_DATA_td.doubleclick.net_GDA}"]) && (w.deprecatedRenderURLReplacements["${RENDER_DATA}"] = e));
        e = Object;
        D = e.assign;
        f = pg(b, 1);
        h = mg(b, 17);
        G = new ol;
        t = vT(b);
        Kf(t, nl) && (t = new nl,
            x = pl(vT(b)), x = qg(x, 2), t = Uf(t, 2, He(x), "0"), x = pl(vT(b)), x = qg(x, 4), t = Uf(t, 4, He(x), "0"), dg(G, 5, t));
        vT(b).getEscapedQemQueryId() && (t = vT(b).getEscapedQemQueryId(), Uf(G, 2, Pe(t), ""));
        t = vT(b);
        pg(t, 6) && (t = vT(b), t = pg(t, 6), Uf(G, 6, Pe(t), ""));
        t = vT(b);
        kg(t, 21) && vg(G, 21, !0);
        t = vT(b);
        kg(t, 4) && vg(G, 4, !0);
        t = vT(b);
        pg(t, 11) && (t = vT(b), t = pg(t, 11), Uf(G, 11, Pe(t), ""));
        t = vT(b);
        kg(t, 32) && vg(G, 32, !0);
        G = nf(G);
        t = lg(b, 15) || 50;
        if (kg(b, 30)) {
            if (c == null || !c.length) throw Error("top_td_without_component_auction");
        } else c = [w].concat(ta(c !=
            null ? c : []));
        c = D.call(e, {}, {
            seller: g,
            decisionLogicURL: f,
            sellerExperimentGroupId: h,
            sellerSignals: G,
            sellerTimeout: t,
            interestGroupBuyers: [],
            auctionSignals: {},
            perBuyerExperimentGroupIds: {},
            perBuyerSignals: {},
            perBuyerTimeouts: {},
            perBuyerCumulativeTimeouts: {},
            componentAuctions: c
        }, a ? {
            resolveToConfig: a
        } : {});
        pg(b, 28) && (c.directFromSellerSignalsHeaderAdSlot = pg(b, 28));
        return c
    }

    function zT(a, b) {
        return a.some(function(c) {
            return xT(c) !== BigInt(100)
        }) && (b != null ? b : !1)
    };
    var BT = function(a, b) {
        Q.call(this);
        var c = this;
        this.navigator = b;
        this.j = function(d) {
            var e = Date.now();
            try {
                var f = AT(c, d.tdconfig)
            } catch (g) {
                f = Promise.resolve({
                    fc: !1,
                    result: null
                })
            }
            return f.then(function(g) {
                var h = new jl;
                h = yg(h, 1, e);
                h = yg(h, 2, Date.now());
                var k = g.fc,
                    l;
                g = (l = g.result) != null ? l : "";
                l = {};
                return l.ffconfig = g, l.timeout = 2E3, l.auctioninterval = h.fa(), l.isauctiontimeout = k, l
            })
        };
        this.g = new NS(a, "fledge");
        Os(this, this.g)
    };
    r(BT, Q);
    var AT = function(a, b) {
        b = wT(b);
        var c = yT({
            si: b
        });
        b = Zx(2E3, null).then(function() {
            return {
                fc: !0,
                result: null
            }
        });
        a = a.navigator.runAdAuction(c).then(function(d) {
            d !== null && typeof d !== "string" ? d = null : d == null && (d = null);
            return {
                fc: !1,
                result: d
            }
        });
        return Promise.race([b, a])
    };
    var DT = function(a, b, c) {
        Q.call(this);
        this.C = a;
        this.B = b;
        this.A = c;
        this.g = this.j = this.o = null;
        this.l = 0;
        a = new dG(this);
        Os(this, a);
        CT(this);
        a.listen(this.B, "adsManager", this.F)
    };
    r(DT, Q);
    var CT = function(a) {
        dT(a.C).then(function(b) {
            a.j = b;
            ET(a, Wj(b))
        }).catch(function() {
            return void FT(a)
        })
    };
    DT.prototype.F = function(a) {
        if (["complete", "skip", "error"].includes(a.messageType)) {
            this.l++;
            if (this.l === 10) {
                this.l = 0;
                var b;
                (b = this.g) == null || b.dispose();
                CT(this)
            }
            a = Wj(this.j);
            var c;
            a && ((c = a.frames) == null ? 0 : c.omid_v1_present) || W.getInstance().report(188, {})
        }
    };
    var GT = function(a) {
            if (a.g && a.o) {
                var b = a.g;
                try {
                    b.g && b.g.setSessionClientWindow(a.o)
                } catch (c) {
                    b.dispatchEvent(new Event("error"))
                }
            }
        },
        ET = function(a, b) {
            a.g = new fT(b, a.A);
            a.g.listen("error", function() {
                return void FT(a)
            });
            hT(a.g);
            GT(a)
        },
        FT = function(a) {
            DL(a.B, "omid", "iframeFailed");
            a.dispose()
        };
    DT.prototype.O = function() {
        this.j && (Uj(this.j), this.j = null);
        var a;
        (a = this.g) == null || a.dispose();
        Q.prototype.O.call(this)
    };
    var HT = function(a, b, c, d) {
        Q.call(this);
        this.o = a;
        this.l = b;
        this.g = c;
        this.C = d;
        this.j = new dG(this);
        Os(this, this.j);
        this.j.listen(this.o, d, this.A)
    };
    r(HT, Q);
    var IT = function(a, b) {
        var c = b.ra;
        switch (b.messageType) {
            case "showVideo":
                a.l.Kd();
                break;
            case "hide":
                a.l.Cb();
                break;
            case "resizeAndPositionVideo":
                b = c.resizeAndPositionVideo;
                a.l.Ge(new ck(b.x, b.y, b.width, b.height));
                break;
            case "restoreSizeAndPositionVideo":
                a.l.He()
        }
    };
    HT.prototype.A = function(a) {
        var b = a.ra;
        switch (a.messageType) {
            case "activate":
                this.l.Pc(this.g);
                break;
            case "startTracking":
                a = this.g;
                var c = this.B;
                this.j.listen(a, xi(EG), c);
                this.j.listen(a, RS, c);
                this.g.Ve();
                break;
            case "stopTracking":
                a = this.g;
                c = this.B;
                this.j.ab(a, xi(EG), c);
                this.j.ab(a, RS, c);
                this.g.sc();
                break;
            case "exitFullscreen":
                a = this.g.g;
                (Kc || Mc) && a.webkitDisplayingFullscreen && a.webkitExitFullscreen();
                break;
            case "play":
                this.g.play();
                break;
            case "pause":
                this.g.pause();
                break;
            case "load":
                a = this.g;
                c = b.videoUrl;
                var d = b.muxedMediaUrl,
                    e = b.muxedMimeType,
                    f = b.muxedAudioCodec,
                    g = b.muxedVideoCodec,
                    h = b.demuxedAudioUrl,
                    k = b.demuxedVideoUrl,
                    l = b.demuxedAudioMimeType,
                    n = b.demuxedVideoMimeType,
                    p = b.demuxedAudioCodec,
                    q = b.demuxedVideoCodec;
                b = b.mseCompatible;
                var u = null;
                k && h && b && n && l && q && p && (u = new iE({
                    Bi: k,
                    Jg: h,
                    Nk: null,
                    kk: null,
                    Ai: n,
                    Ig: l,
                    Gb: q,
                    sb: p,
                    height: null,
                    width: null,
                    Oa: b,
                    Mk: null,
                    jk: null
                }));
                h = null;
                d && e && g && f && (h = new jE({
                    Eh: d,
                    Rb: null,
                    mimeType: e,
                    Gb: g,
                    sb: f,
                    height: null,
                    width: null,
                    Oa: b,
                    tk: null
                }));
                u ? JT(a, c, u) : h ? JT(a, c, h) : JT(a, c,
                    null);
                break;
            case "unload":
                this.g.unload();
                break;
            case "setCurrentTime":
                this.g.g.currentTime = b.currentTime;
                break;
            case "setVolume":
                this.g.setVolume(b.volume)
        }
    };
    HT.prototype.B = function(a) {
        var b = {};
        switch (a.type) {
            case "autoplayDisallowed":
                a = "autoplayDisallowed";
                break;
            case "beginFullscreen":
                a = "fullscreen";
                break;
            case "endFullscreen":
                a = "exitFullscreen";
                break;
            case "click":
                a = "click";
                break;
            case "end":
                a = "end";
                break;
            case "error":
                a = "error";
                break;
            case "loaded":
                a = "loaded";
                break;
            case "mediaLoadTimeout":
                a = "mediaLoadTimeout";
                break;
            case "pause":
                a = "pause";
                b.ended = this.g.g.ended;
                break;
            case "play":
                a = "play";
                break;
            case "skip":
                a = "skip";
                break;
            case "start":
                a = "start";
                b.volume = this.g.getVolume();
                break;
            case "timeUpdate":
                a = "timeupdate";
                b.currentTime = this.g.getCurrentTime();
                b.duration = this.g.getDuration();
                break;
            case "volumeChange":
                a = "volumeChange";
                b.volume = this.g.getVolume();
                break;
            case "loadedmetadata":
                a = a.type;
                b.duration = this.g.getDuration();
                break;
            case "abort":
            case "canplay":
            case "canplaythrough":
            case "durationchange":
            case "emptied":
            case "loadstart":
            case "loadeddata":
            case "progress":
            case "ratechange":
            case "seeked":
            case "seeking":
            case "stalled":
            case "suspend":
            case "waiting":
                a = a.type;
                break;
            default:
                return
        }
        DL(this.o,
            this.C, a, b)
    };
    var KT = function(a, b) {
        Q.call(this);
        this.j = b;
        this.g = null;
        this.l = new HT(a, b, this.j.ga, "videoDisplay1");
        Os(this, this.l);
        var c = this.j.Fa;
        c != null && (this.g = new HT(a, b, c, "videoDisplay2"), Os(this, this.g))
    };
    r(KT, Q);

    function LT() {
        var a, b, c, d = Qj();
        d = d === void 0 ? window : d;
        d = ((c = d === void 0 ? null : d) != null ? c : window).googletag;
        c = (d == null ? 0 : d.apiReady) ? d : void 0;
        return (b = c == null ? void 0 : (a = c.companionAds) == null ? void 0 : a.call(c)) != null ? b : null
    }

    function MT(a) {
        var b = {};
        b.slotId = a.getSlotId().getId();
        var c = [];
        a = v(a.getSizes() || []);
        for (var d = a.next(); !d.done; d = a.next())
            if (d = d.value, typeof d !== "string") {
                var e = {};
                c.push((e.adWidth = d.getWidth(), e.adHeight = d.getHeight(), e))
            } else d === "fluid" && (d = {}, c.push((d.fluidSize = !0, d)));
        return b.adSizes = c, b
    }

    function NT(a) {
        var b = LT();
        if (b && a && Array.isArray(a)) {
            var c = new Map(b.getSlots().map(function(q) {
                return [q.getSlotId().getId(), q]
            }));
            a = v(a);
            for (var d = a.next(); !d.done; d = a.next()) {
                var e = d.value,
                    f = c.get(e.slotId);
                if (f && !b.isSlotAPersistentRoadblock(f)) {
                    var g = e.adContent;
                    if (g && (d = Mj(f.getSlotId().getDomId()))) {
                        d.style.display = "";
                        var h = e.adWidth,
                            k = e.adHeight;
                        e.fluidSize && (k = pk(d), h = k.width, k = k.height);
                        d.textContent = "";
                        if (e.friendlyIframeRendering) try {
                            var l = "google_companion_" + f.getSlotId().getId(),
                                n = fE(d,
                                    l, h, k),
                                p = n.contentWindow ? n.contentWindow.document : n.contentDocument;
                            Fc && p.open("text/html", "replace");
                            ij(p, cG(g));
                            p.close()
                        } catch (q) {} else gj(d, cG(g)), d.style.width = h + "px", d.style.height = k + "px";
                        b.slotRenderEnded(f, h, k);
                        (e = e.onAdContentSet) && e(d)
                    }
                }
            }
        }
    };
    var OT = function(a, b, c, d, e, f) {
        EL.call(this, a, b, c, d, e);
        this.g = f
    };
    r(OT, EL);
    var PT = function(a, b) {
        R.call(this);
        this.A = a;
        this.o = b;
        this.g = {};
        this.j = new dG(this);
        Os(this, this.j);
        this.j.listen(Qj(), "message", this.l)
    };
    r(PT, R);
    var QT = function(a, b) {
            var c = b.g;
            a.g.hasOwnProperty(c) && DL(a.g[c], b.type, b.messageType, b.ra)
        },
        RT = function(a, b, c, d) {
            a.g.hasOwnProperty(b) || (c = new oS(b, c), a.j.listen(c, a.A, function(e) {
                this.dispatchEvent(new OT(e.type, e.messageType, e.ra, e.Oc, e.origin, b))
            }), c.g = d, c.connect(), a.g[b] = c)
        };
    PT.prototype.O = function() {
        for (var a = v(Object.values(this.g)), b = a.next(); !b.done; b = a.next()) Ms(b.value);
        R.prototype.O.call(this)
    };
    PT.prototype.l = function(a) {
        a = a.rc;
        var b = mS(a.data);
        if (b != null) {
            var c = b.channel;
            if (this.o && !this.g.hasOwnProperty(c)) {
                var d = b.sid;
                RT(this, c, d, a.source);
                this.dispatchEvent(new OT(b.name, b.type, b.data || {}, d, a.origin, c))
            }
        }
    };

    function ST() {
        return !!Wa("googletag.cmd", Qj())
    }

    function TT() {
        var a = Wa("googletag.console", Qj());
        return a != null ? a : null
    }
    var UT = function() {
        dG.call(this);
        this.g = null;
        this.l = new PT("gpt", !0);
        Os(this, this.l);
        this.listen(this.l, "gpt", this.A);
        ST() || Qj().top === Qj() || (this.g = new PT("gpt", !1), Os(this, this.g), this.listen(this.g, "gpt", this.B))
    };
    r(UT, dG);
    UT.prototype.A = function(a) {
        var b = a.origin,
            c = "//imasdk.googleapis.com".match(dp);
        b = b.match(dp);
        if (c[3] == b[3] && c[4] == b[4])
            if (this.g != null) RT(this.g, a.g, a.Oc, Qj().parent), this.g != null && QT(this.g, a);
            else if (c = a.ra, c != null && c.scope !== void 0) {
            b = c.scope;
            c = c.args;
            var d;
            if (b === "proxy") {
                var e = a.messageType;
                e === "isGptPresent" ? d = ST() : e === "isConsolePresent" && (d = TT() != null)
            } else if (ST())
                if (b === "pubads" || b === "companionAds") {
                    d = a.messageType;
                    var f = Qj().googletag;
                    if (f != null && f[b] != null && (b = f[b](), b != null && (d = b[d],
                            d != null))) try {
                        e = d.apply(b, c)
                    } catch (g) {}
                    d = e
                } else if (b === "console") {
                if (e = TT(), e != null && (b = e[a.messageType], b != null)) try {
                    b.apply(e, c)
                } catch (g) {}
            } else b === null && (e = a.messageType, e === "googleGetCompanionAdSlots" ? (e = LT()) ? (e = e.getSlots().map(MT), d = e.length ? e : null) : d = null : (e === "googleSetCompanionAdContents" && NT(c == null ? void 0 : c[0]), d = null));
            d !== void 0 && (a.ra.returnValue = d, QT(this.l, a))
        }
    };
    UT.prototype.B = function(a) {
        QT(this.l, a)
    };
    var VT = function(a, b) {
        if (a.g) {
            var c = a.g;
            Ms(c.g[b]);
            delete c.g[b]
        }
        a.l && (a = a.l, Ms(a.g[b]), delete a.g[b])
    };
    var XT = function(a, b) {
            var c = Array.prototype.slice.call(arguments),
                d = c.shift();
            if (typeof d == "undefined") throw Error("[goog.string.format] Template required");
            return d.replace(/%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(e, f, g, h, k, l, n, p) {
                if (l == "%") return "%";
                var q = c.shift();
                if (typeof q == "undefined") throw Error("[goog.string.format] Not enough arguments");
                arguments[0] = q;
                return WT[l].apply(null, arguments)
            })
        },
        WT = {
            s: function(a, b, c) {
                return isNaN(c) || c == "" || a.length >= Number(c) ? a : a = b.indexOf("-", 0) > -1 ?
                    a + mj(" ", Number(c) - a.length) : mj(" ", Number(c) - a.length) + a
            },
            f: function(a, b, c, d, e) {
                d = a.toString();
                isNaN(e) || e == "" || (d = parseFloat(a).toFixed(e));
                var f = Number(a) < 0 ? "-" : b.indexOf("+") >= 0 ? "+" : b.indexOf(" ") >= 0 ? " " : "";
                Number(a) >= 0 && (d = f + d);
                if (isNaN(c) || d.length >= Number(c)) return d;
                d = isNaN(e) ? Math.abs(Number(a)).toString() : Math.abs(Number(a)).toFixed(e);
                a = Number(c) - d.length - f.length;
                return d = b.indexOf("-", 0) >= 0 ? f + d + mj(" ", a) : f + mj(b.indexOf("0", 0) >= 0 ? "0" : " ", a) + d
            },
            d: function(a, b, c, d, e, f, g, h) {
                return WT.f(parseInt(a,
                    10), b, c, d, 0, f, g, h)
            }
        };
    WT.i = WT.d;
    WT.u = WT.d;

    function YT() {
        return ["autoplay", "attribution-reporting"].filter(function(a) {
            var b = document.featurePolicy;
            return b !== void 0 && typeof b.allowedFeatures == "function" && typeof b.allowedFeatures() == "object" && b.allowedFeatures().includes(a)
        }).join(";")
    }
    var aU = function(a, b, c) {
        c = c === void 0 ? !1 : c;
        R.call(this);
        this.C = b;
        this.V = c;
        this.H = this.G = null;
        this.K = !1;
        this.F = "goog_" + oj++;
        this.o = new Map;
        this.g = null;
        c = Qj();
        var d = Wa("google.ima.gptProxyInstance", c);
        d != null ? c = d : (d = new UT, z("google.ima.gptProxyInstance", d, c), c = d);
        this.aa = c;
        this.A = null;
        this.l = new dG(this);
        Os(this, this.l);
        c = this.F;
        d = ZT(this, c);
        var e = window.document;
        if (Qo.length && e.head)
            for (var f = v(Qo), g = f.next(); !g.done; g = f.next())
                if ((g = g.value) && e.head) {
                    var h = Dj("META");
                    e.head.appendChild(h);
                    h.httpEquiv =
                        "origin-trial";
                    h.content = g
                }
        e = YT();
        c = Tj("IFRAME", {
            src: d,
            allowFullscreen: !0,
            allow: e,
            id: c,
            style: "border:0; opacity:0; margin:0; padding:0; position:relative; color-scheme: light;",
            title: "Advertisement"
        });
        this.l.Ec(c, "load", this.da);
        a.appendChild(c);
        this.frameElement = c;
        this.j = $T(this);
        this.M = new BT(this.j, navigator);
        Os(this, this.M);
        c = this.M;
        c.g.j.set("auction", c.j);
        this.P = new KT(this.j, this.C);
        Os(this, this.P);
        this.C.ga && this.l.listen(this.j, "displayContainer", this.U);
        this.l.listen(this.j, "mouse", this.ba);
        this.l.listen(this.j, "touch", this.ca);
        c = b.Nd();
        gs() || Lb(Qb(), "CrKey") && Lb(Qb(), "SmartSpeaker") || Lb(Qb(), "Edge/18.") || c || (this.A = new DT(a, this.j, b.ga.g), Os(this, this.A))
    };
    r(aU, R);
    var $T = function(a, b) {
        b = b === void 0 ? "*" : b;
        var c = a.o.get(b);
        c == null && (c = new oS(a.F, b), a.K && (c.g = Wj(a.frameElement), c.connect()), a.o.set(b, c));
        return c
    };
    aU.prototype.Pc = function(a) {
        var b;
        (b = this.A) != null && (a = a.g, b.A = a, b.g && (b = b.g, b.j = a, gT(b, a)))
    };
    aU.prototype.O = function() {
        this.g !== null && (this.g.dispose(), this.g = null);
        this.o.forEach(function(a) {
            Ms(a)
        });
        this.o.clear();
        VT(this.aa, this.F);
        Uj(this.frameElement);
        R.prototype.O.call(this)
    };
    var bU = function(a) {
            var b = window;
            try {
                do {
                    try {
                        if (b.location.href.indexOf(a) === 0 || b.document.referrer.indexOf(a) === 0) return !0
                    } catch (c) {}
                    b = b.parent
                } while (b !== b.top)
            } catch (c) {}
            return !1
        },
        ZT = function(a, b) {
            var c = (yj() ? "https:" : "http:") + XT("//imasdk.googleapis.com/js/core/bridge3.709.0_%s.html", xK.getLocale()),
                d = new URL(c, window.location.href);
            a.V && d.searchParams.append("gdpr", "1");
            bU(c) && d.searchParams.append("f", b);
            a = new Map;
            a.set("fid", b);
            (b = zm()) && a.set("deid", b);
            d.hash = Array.from(a.entries(), function(e) {
                var f =
                    v(e);
                e = f.next().value;
                f = f.next().value;
                return e + "=" + f
            }).join("&");
            return d.toString()
        };
    aU.prototype.ba = function(a) {
        var b = a.ra,
            c = kk(this.frameElement),
            d = document.createEvent("MouseEvent");
        d.initMouseEvent(a.messageType, !0, !0, window, b.detail, b.screenX, b.screenY, b.clientX + c.x, b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.button, null);
        this.frameElement.dispatchEvent(d)
    };
    var cU = function(a, b) {
        var c = kk(a.frameElement),
            d = !!("TouchEvent" in window && TouchEvent.length > 0);
        b = b.map(function(f) {
            return d ? new Touch({
                identifier: f.identifier,
                target: a.frameElement,
                clientX: f.clientX,
                clientY: f.clientY,
                screenX: f.screenX,
                screenY: f.screenY,
                pageX: f.pageX + c.x,
                pageY: f.pageY + c.y
            }) : document.createTouch(window, a.frameElement, f.identifier, f.pageX + c.x, f.pageY + c.y, f.screenX, f.screenY)
        });
        if (d) return b;
        var e;
        return (e = document.createTouchList) == null ? void 0 : e.apply(document, b)
    };
    aU.prototype.ca = function(a) {
        var b = a.ra,
            c = kk(this.frameElement);
        if ("TouchEvent" in window && TouchEvent.length > 0) b = {
            bubbles: !0,
            cancelable: !0,
            view: window,
            detail: b.detail,
            ctrlKey: b.ctrlKey,
            altKey: b.altKey,
            shiftKey: b.shiftKey,
            metaKey: b.metaKey,
            touches: cU(this, b.touches),
            targetTouches: cU(this, b.targetTouches),
            changedTouches: cU(this, b.changedTouches)
        }, a = new TouchEvent(a.messageType, b), this.frameElement.dispatchEvent(a);
        else {
            var d = document.createEvent("TouchEvent");
            d.initTouchEvent(a.messageType, !0, !0, window,
                b.detail, b.screenX, b.screenY, b.clientX + c.x, b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, cU(this, b.touches), cU(this, b.targetTouches), cU(this, b.changedTouches), b.scale, b.rotation);
            this.frameElement.dispatchEvent(d)
        }
    };
    aU.prototype.U = function(a) {
        switch (a.messageType) {
            case "showVideo":
                this.g == null ? (this.g = new pS, this.l.listen(this.g, "click", this.ma)) : tS(this.g);
                rS(this.g, this.C.yc());
                break;
            case "hide":
                this.g !== null && (this.g.dispose(), this.g = null)
        }
        var b = this.P;
        IT(b.l, a);
        b.g && IT(b.g, a)
    };
    aU.prototype.ma = function() {
        DL(this.j, "displayContainer", "videoClick")
    };
    aU.prototype.da = function() {
        var a = this,
            b, c, d;
        return Qa(function(e) {
            a.G = Dm();
            a.H = Am();
            b = Wj(a.frameElement);
            a.o.forEach(function(f) {
                f.g = b;
                f.connect()
            });
            (c = a.A) != null && (c.o = b, GT(c));
            a.K = !0;
            rp(bE) ? (d = {}, DL(a.j, "bridgeInitialize", "connect", d)) : rp($D) && DL(a.j, "bridgeInitialize", "connect");
            e.g = 0
        })
    };
    var dU = va(["https://s0.2mdn.net/instream/video/client.js"]),
        eU = null,
        fU = function() {
            R.call(this);
            this.g = null;
            this.j = new Map;
            this.l = new Map;
            this.Ca = this.C = !1;
            this.o = null;
            this.A = new dG(this);
            Os(this, this.A)
        };
    r(fU, R);
    var gU = function() {
            eU == null && (eU = new fU);
            return eU
        },
        Mw = function(a, b, c) {
            var d = {};
            d.queryId = b;
            d.viewabilityData = c;
            a.g && DL(a.g, "activityMonitor", "viewabilityMeasurement", d)
        };
    fU.prototype.destroy = function() {
        this.A.ab(this.g, "activityMonitor", this.F);
        this.Ca = !1;
        this.j.clear()
    };
    fU.prototype.O = function() {
        this.destroy();
        R.prototype.O.call(this)
    };
    fU.prototype.init = function(a) {
        if (!this.Ca) {
            if (this.g = a || null) this.A.listen(this.g, "activityMonitor", this.F), hU(this);
            if (!(y.ima && y.ima.video && y.ima.video.client && y.ima.video.client.tagged)) {
                z("ima.video.client.sdkTag", !0);
                var b = y.document;
                a = Rj(document, "SCRIPT");
                var c = tj(dU);
                fj(a, c);
                a.async = !0;
                a.type = "text/javascript";
                b = b.getElementsByTagName("script")[0];
                b.parentNode.insertBefore(a, b)
            }
            lq();
            K(Cw).K = xK.g;
            this.C = !0;
            K(Cw).l = !0;
            this.o = null;
            a = K(Cw);
            b = mw(a) == "h" || mw(a) == "b";
            c = !(kq(), !1);
            b && c && (a.F = !0, a.H =
                new Gu);
            this.Ca = !0
        }
    };
    var jU = function(a) {
            if (a == null) return !1;
            if ((Kc || Mc) && a.webkitDisplayingFullscreen !== null) return a.webkitDisplayingFullscreen;
            a = iU(a);
            var b = window.screen.availHeight || window.screen.height;
            return (window.screen.availWidth || window.screen.width) - a.width <= 0 && b - a.height <= 42
        },
        iU = function(a) {
            var b = {
                left: a.offsetLeft,
                top: a.offsetTop,
                width: a.offsetWidth,
                height: a.offsetHeight
            };
            try {
                typeof a.getBoundingClientRect === "function" && Vj(Kj(a), a) && (b = a.getBoundingClientRect())
            } catch (c) {}
            return b
        },
        kU = function(a, b, c, d, e) {
            e =
                e === void 0 ? {} : e;
            if (a.Ca) {
                d && e.opt_osdId == null && (e.opt_osdId = d);
                if (a.o) return a.o(b, c, e);
                if (a = d ? a.l.get(d) : xK.l) e.opt_fullscreen == null && (e.opt_fullscreen = jU(a)), e.opt_adElement == null && (e.opt_adElement = a);
                return lz.Sb(469, lb(Ow, b, c, e)) || {}
            }
            return {}
        },
        lU = function(a) {
            var b;
            xK.g !== 0 ? b = K(Cw).l : b = a.C;
            return b
        },
        mU = function(a, b) {
            var c = String(Math.floor(Math.random() * 1E9));
            a.l.set(c, b);
            xK.g !== 0 && (K(Cw).o[c] = a);
            return c
        },
        nU = function(a, b, c) {
            if (c) a.j.get(c) === b && a.j.delete(c);
            else {
                var d = [];
                a.j.forEach(function(e,
                    f) {
                    e === b && d.push(f)
                });
                d.forEach(a.j.delete, a.j)
            }
        },
        Iw = function(a, b) {
            a = a.j.get(b);
            return typeof a === "function" ? a() : {}
        },
        hU = function(a) {
            if (typeof window.Goog_AdSense_Lidar_getUrlSignalsArray === "function") {
                var b = {};
                b.pageSignals = window.Goog_AdSense_Lidar_getUrlSignalsArray();
                var c;
                (c = a.g) == null || DL(c, "activityMonitor", "pageSignals", b)
            }
        };
    fU.prototype.F = function(a) {
        var b = a.ra,
            c = b.queryId,
            d = {},
            e = null;
        d.eventId = b.eventId;
        switch (a.messageType) {
            case "getPageSignals":
                hU(this);
                break;
            case "reportVastEvent":
                e = b.vastEvent;
                a = b.osdId;
                var f = {};
                f.opt_fullscreen = b.isFullscreen;
                b.isOverlay && (f.opt_bounds = b.overlayBounds);
                d.viewabilityData = kU(this, e, c, a, f);
                var g;
                (g = this.g) == null || DL(g, "activityMonitor", "viewability", d);
                break;
            case "fetchAdTagUrl":
                c = {}, c.eventId = b.eventId, a = b.osdId, Ai(b, "isFullscreen") && (e = b.isFullscreen), Ai(b, "loggingId") && (b = b.loggingId,
                    c.loggingId = b, W.getInstance().report(43, {
                        step: "beforeLookup",
                        logid: b,
                        time: Date.now()
                    })), c.engagementString = oU(this, a, e), this.g && DL(this.g, "activityMonitor", "engagement", c)
        }
    };
    var oU = function(a, b, c) {
        var d, e = b ? (d = a.l.get(b)) != null ? d : null : xK.l;
        a = {};
        c != null && (a.fullscreen = c);
        c = "";
        try {
            c = oy(function() {
                return e
            }, a)
        } catch (f) {
            c = f, c = "sdktle;" + lj(c.name, 12) + ";" + lj(c.message, 40)
        }
        return c
    };
    z("ima.common.getVideoMetadata", function(a) {
        return Iw(gU(), a)
    });
    z("ima.common.triggerViewabilityMeasurementUpdate", function(a, b) {
        Mw(gU(), a, b)
    });
    var pU = zF(0, 0, 5, 5);

    function qU(a, b) {
        try {
            if ("removeAttribute" in a) return a.removeAttribute(b), !0
        } catch (c) {}
        return !1
    }
    var rU = function(a) {
        JJ.call(this, a);
        this.C = this.da = null;
        this.K = this.V = this.H = !1;
        this.aa = this.G = this.M = this.o = null;
        this.ca = !1;
        this.F = null;
        this.size = this.getSize();
        this.fullscreen = this.ie()
    };
    r(rU, JJ);
    var JT = function(a, b, c) {
            var d = L.getInstance().g;
            d.K = !0;
            d.o();
            Wm("hvd_lc");
            sU(a);
            (Nc || NF()) && qU(a.g, "crossOrigin");
            a.V = !1;
            if (c)
                if (Wm("hvd_ad"), c instanceof jE) {
                    if (Wm("hvd_mad"), d = c.getMediaUrl()) {
                        Wm("hvd_admu");
                        tU(a, d);
                        return
                    }
                } else if (c instanceof iE) {
                Wm("hvd_dad");
                d = c.o;
                var e = c.j,
                    f = c.l,
                    g = c.g,
                    h = c.Gb,
                    k = c.sb;
                if (d && e && f && g && h && k && (Wm("hvd_addu"), c.Oa)) {
                    Wm("hvd_admse");
                    c = f + '; codecs="' + h + '"';
                    g = g + '; codecs="' + k + '"';
                    if (window.MediaSource && XG(c) && XG(g)) {
                        Wm("hvd_ymse");
                        Wm("hvd_mse");
                        k = !1;
                        try {
                            window.location.search.indexOf("goog_limavideo=true") !==
                                -1 && (k = !0)
                        } catch (l) {}
                        b = a.g;
                        y.customElements ? k ? k = !0 : (rp(WD) && W.getInstance().report(153, {
                            limvid: "vd"
                        }), k = rp(WD) ? !0 : !1) : k = !1;
                        k && b instanceof rJ ? (b.xb = d, b.Nb = e) : (a.da = new YJ(b, [new PI(d, c, 35E4, new KJ), new PI(e, g, 82E3, new KJ)]), Os(a, a.da), a = a.da, a.j || (a.j = bj(a.g).toString()), a = a.j, b.src = a);
                        b.load();
                        return
                    }
                    Wm("hvd_nmse")
                }
            } else Wm("hvd_uad");
            b ? tU(a, b) : (Wm("hvd_vn"), a.g.load())
        },
        tU = function(a, b) {
            Wm("hvd_src");
            a = a.g;
            a.src = b;
            a.load()
        };
    m = rU.prototype;
    m.unload = function() {
        sU(this);
        this.V = !1;
        var a = this.g;
        qU(this.g, "src") || (a.src = "");
        a.load()
    };
    m.setVolume = function(a) {
        var b = this.g;
        b.volume = Math.max(a, 0);
        b.muted = a === 0 ? !0 : !1
    };
    m.Ge = function(a) {
        var b = this.g;
        b.style.left = String(a.left) + "px";
        b.style.top = String(a.top) + "px";
        b.style.width = String(a.width) + "px";
        b.style.height = String(a.height) + "px"
    };
    m.He = function() {
        var a = this.g;
        a.style.width = "100%";
        a.style.height = "100%";
        a.style.left = "0";
        a.style.right = "0"
    };
    m.play = function() {
        var a = this;
        this.ca = !1;
        if (!this.V && !Xb()) return this.K = !0, Promise.resolve();
        this.K = !1;
        this.o = this.g.play();
        return this.o != null ? (this.M = null, this.o.then(function() {
            a.o = null;
            a.Cd(a.M);
            a.M = null
        }).catch(function(b) {
            a.o = null;
            var c = "";
            b != null && b.name != null && (c = b.name);
            c === "AbortError" || c === "NotAllowedError" ? a.dispatchEvent("autoplayDisallowed") : a.Wb()
        })) : Promise.resolve()
    };
    m.pause = function() {
        this.o == null && (this.ca = !0, this.g.pause())
    };
    m.vf = function() {
        var a = this.g;
        return a.paused ? Nc || Xc ? a.currentTime < a.duration : !0 : !1
    };
    m.ie = function() {
        return jU(this.g)
    };
    m.getSize = function() {
        return new Ij(this.g.offsetWidth, this.g.offsetHeight)
    };
    m.O = function() {
        this.aa && GF(this.aa);
        this.sc();
        JJ.prototype.O.call(this)
    };
    m.Ve = function() {
        this.sc();
        var a = this.g;
        this.j.listen(a, RS, this.Ph);
        this.j.listen(a, "ended", this.re);
        this.j.listen(a, "webkitbeginfullscreen", this.Zb);
        this.j.listen(a, "webkitendfullscreen", this.Bf);
        this.j.listen(a, "loadedmetadata", this.Mh);
        this.j.listen(a, "pause", this.te);
        this.j.listen(a, "playing", this.Cd);
        this.j.listen(a, "timeupdate", this.ve);
        this.j.listen(a, "volumechange", this.Cf);
        this.j.listen(a, "error", this.Wb);
        this.j.listen(a, Wc || Nc && (!Nc || !MF(KF, 8)) ? "loadeddata" : "canplay", this.se);
        this.C = new pS;
        this.j.listen(this.C, "click", this.og);
        rS(this.C, a);
        this.G = new Xx(1E3);
        this.j.listen(this.G, "tick", this.tb);
        this.G.start()
    };
    m.sc = function() {
        this.C != null && (tS(this.C), this.C = null);
        this.G != null && this.G.dispose();
        hG(this.j);
        sU(this)
    };
    var sU = function(a) {
        a.loaded = !1;
        a.l = !1;
        a.H = !1;
        a.K = !1;
        a.A = 0;
        a.o = null;
        a.M = null;
        Ms(a.F)
    };
    m = rU.prototype;
    m.Ph = function(a) {
        this.dispatchEvent(a.type)
    };
    m.Gc = function() {
        if (!this.l) {
            this.l = !0;
            this.dispatchEvent("start");
            try {
                if (rp(WD) && y.customElements) {
                    var a = y.customElements.get("lima-video");
                    this.g instanceof a ? W.getInstance().report(153, {
                        limvid: "limastart"
                    }) : W.getInstance().report(153, {
                        limvid: "videostart"
                    })
                }
            } catch (b) {
                W.getInstance().report(153, {
                    limvid: "startfail"
                })
            }
        }
    };
    m.Mh = function() {
        this.V = !0;
        this.K && this.play();
        this.K = !1;
        uU(this)
    };
    m.Cd = function(a) {
        this.o != null ? this.M = a : (this.dispatchEvent("play"), Nc || NF() || Wc || this.Gc())
    };
    m.ve = function(a) {
        if (!this.l && (Nc || NF() || Wc)) {
            if (this.getCurrentTime() <= 0) return;
            if (Wc && this.g.ended && this.getDuration() === 1) {
                this.Wb(a);
                return
            }
            this.Gc()
        }
        if (Nc || Lb(Qb(), "Nintendo WiiU")) {
            if (this.getCurrentTime() - this.A > 1.5) {
                this.H = !0;
                this.g.currentTime = this.A;
                return
            }
            this.H = !1;
            this.getCurrentTime() > this.A && (this.A = this.getCurrentTime())
        }
        this.dispatchEvent("timeUpdate")
    };
    m.te = function() {
        if (this.l && Nc && !this.ca && (vU(this) < 2 || this.H)) {
            this.F = new Xx(250);
            this.j.listen(this.F, "tick", this.Ra);
            this.F.start();
            var a = !0
        } else a = !1;
        a || this.o || this.dispatchEvent("pause")
    };
    m.re = function() {
        var a = !0;
        if (Nc || Lb(Qb(), "Nintendo WiiU")) a = this.A >= this.g.duration - 1.5;
        !this.H && a && this.dispatchEvent("end")
    };
    m.Bf = function() {
        this.dispatchEvent("endFullscreen")
    };
    m.Wb = function() {
        this.dispatchEvent("error")
    };
    m.og = function() {
        this.dispatchEvent("click")
    };
    var uU = function(a) {
        var b = a.g;
        b instanceof HTMLElement && (a.aa = FF(b, pU), a.aa.then(function(c) {
            a.Ja() || M(L.getInstance(), "ps", c.width + "x" + c.height)
        }))
    };
    rU.prototype.tb = function() {
        var a = this.getSize(),
            b = this.ie();
        if (a.width !== this.size.width || a.height !== this.size.height) !this.fullscreen && b ? this.dispatchEvent("beginFullscreen") : this.fullscreen && !b && this.Bf(), this.size = a, this.fullscreen = b
    };
    rU.prototype.Ra = function() {
        if (this.g.ended || !this.vf()) Ms(this.F);
        else {
            var a = this.g;
            a = a.duration - a.currentTime;
            var b = vU(this);
            b > 0 && (b >= 2 || a < 2) && (Ms(this.F), this.play())
        }
    };
    var vU = function(a) {
        var b;
        a: {
            for (b = a.g.buffered.length - 1; b >= 0; b--)
                if (a.g.buffered.start(b) <= a.g.currentTime) {
                    b = a.g.buffered.end(b);
                    break a
                }
            b = 0
        }
        return b - a.g.currentTime
    };
    rU.prototype.Zb = function() {
        W.getInstance().report(139);
        this.dispatchEvent("beginFullscreen")
    };
    var zU = function(a) {
            if (a instanceof wU || a instanceof xU || a instanceof yU) return a;
            if (typeof a.next == "function") return new wU(function() {
                return a
            });
            if (typeof a[Symbol.iterator] == "function") return new wU(function() {
                return a[Symbol.iterator]()
            });
            if (typeof a.Xb == "function") return new wU(function() {
                return a.Xb()
            });
            throw Error("Not an iterator or iterable.");
        },
        wU = function(a) {
            this.g = a
        };
    wU.prototype.Xb = function() {
        return new xU(this.g())
    };
    wU.prototype[Symbol.iterator] = function() {
        return new yU(this.g())
    };
    wU.prototype.j = function() {
        return new yU(this.g())
    };
    var xU = function(a) {
        this.g = a
    };
    r(xU, Bt);
    xU.prototype.next = function() {
        return this.g.next()
    };
    xU.prototype[Symbol.iterator] = function() {
        return new yU(this.g)
    };
    xU.prototype.j = function() {
        return new yU(this.g)
    };
    var yU = function(a) {
        wU.call(this, function() {
            return a
        });
        this.l = a
    };
    r(yU, wU);
    yU.prototype.next = function() {
        return this.l.next()
    };
    var AU = function(a, b) {
        this.j = {};
        this.g = [];
        this.l = this.size = 0;
        var c = arguments.length;
        if (c > 1) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof AU)
                for (c = a.bd(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d])
    };
    AU.prototype.bc = function() {
        BU(this);
        for (var a = [], b = 0; b < this.g.length; b++) a.push(this.j[this.g[b]]);
        return a
    };
    AU.prototype.bd = function() {
        BU(this);
        return this.g.concat()
    };
    AU.prototype.has = function(a) {
        return CU(this.j, a)
    };
    AU.prototype.equals = function(a, b) {
        if (this === a) return !0;
        if (this.size != a.size) return !1;
        b = b || DU;
        BU(this);
        for (var c, d = 0; c = this.g[d]; d++)
            if (!b(this.get(c), a.get(c))) return !1;
        return !0
    };
    var DU = function(a, b) {
        return a === b
    };
    AU.prototype.isEmpty = function() {
        return this.size == 0
    };
    AU.prototype.clear = function() {
        this.j = {};
        this.l = this.size = this.g.length = 0
    };
    AU.prototype.remove = function(a) {
        return this.delete(a)
    };
    AU.prototype.delete = function(a) {
        return CU(this.j, a) ? (delete this.j[a], --this.size, this.l++, this.g.length > 2 * this.size && BU(this), !0) : !1
    };
    var BU = function(a) {
        if (a.size != a.g.length) {
            for (var b = 0, c = 0; b < a.g.length;) {
                var d = a.g[b];
                CU(a.j, d) && (a.g[c++] = d);
                b++
            }
            a.g.length = c
        }
        if (a.size != a.g.length) {
            b = {};
            for (d = c = 0; c < a.g.length;) {
                var e = a.g[c];
                CU(b, e) || (a.g[d++] = e, b[e] = 1);
                c++
            }
            a.g.length = d
        }
    };
    m = AU.prototype;
    m.get = function(a, b) {
        return CU(this.j, a) ? this.j[a] : b
    };
    m.set = function(a, b) {
        CU(this.j, a) || (this.size += 1, this.g.push(a), this.l++);
        this.j[a] = b
    };
    m.forEach = function(a, b) {
        for (var c = this.bd(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    m.keys = function() {
        return zU(this.Xb(!0)).j()
    };
    m.values = function() {
        return zU(this.Xb(!1)).j()
    };
    m.entries = function() {
        var a = this;
        return vF(this.keys(), function(b) {
            return [b, a.get(b)]
        })
    };
    m.Xb = function(a) {
        BU(this);
        var b = 0,
            c = this.l,
            d = this,
            e = new Bt;
        e.next = function() {
            if (c != d.l) throw Error("The map has changed since the iterator was created");
            if (b >= d.g.length) return Ct;
            var f = d.g[b++];
            return {
                value: a ? f : d.j[f],
                done: !1
            }
        };
        return e
    };
    var CU = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var FU = function() {
        R.call(this);
        this.currentTime = this.o = 0;
        this.duration = NaN;
        this.j = !0;
        this.F = !1;
        this.volume = 1;
        this.muted = !1;
        this.K = 1;
        this.playbackRate = 0;
        this.g = null;
        this.A = 0;
        this.P = 4;
        this.C = this.l = null;
        this.buffered = new EU;
        this.M = new EU;
        this.H = "";
        this.tagName = "VIDEO";
        this.height = this.width = 0;
        this.canPlayType = function() {
            return ""
        };
        this.G = new dG(this);
        Os(this, this.G);
        var a = wK(xK);
        a && (this.duration = uK(a))
    };
    r(FU, R);
    var GU = function() {
        var a = ["video/mp4"],
            b = ["video/ogg"],
            c = new FU;
        c.canPlayType = function(d) {
            return a.includes(d) ? "probably" : b.includes(d) ? "maybe" : ""
        };
        return c
    };
    FU.prototype.play = function() {
        HU(this);
        return null
    };
    var HU = function(a) {
        a.F && (a.currentTime = 0, a.dispatchEvent("timeupdate"));
        a.j && (a.j = !1, a.dispatchEvent("play"), a.o = a.P, a.o <= 2 ? a.dispatchEvent("waiting") : a.dispatchEvent("playing"));
        if (a.g === null || a.g.Ja()) a.g = new Xx(10), Os(a, a.g), a.g.listen("tick", function() {
            var b = nb() - a.A,
                c = a.currentTime + b / 1E3;
            a.A += b;
            a.o > 2 && (a.currentTime = Math.min(c, a.duration));
            a.dispatchEvent("timeupdate");
            if (a.currentTime === a.duration) {
                a.j = !0;
                a.F = !0;
                var d;
                (d = a.g) == null || d.stop();
                a.dispatchEvent("ended")
            }
        });
        a.A = nb();
        a.g.start()
    };
    m = FU.prototype;
    m.pause = function() {
        if (!this.j) {
            var a;
            (a = this.g) == null || a.stop();
            this.j = !0;
            this.dispatchEvent("timeupdate");
            this.dispatchEvent("pause")
        }
    };
    m.load = function() {
        this.o = 0;
        this.j = !0;
        this.dispatchEvent("loadstart");
        var a;
        isNaN(this.duration) ? a = 10 + Math.random() * 20 : a = this.duration;
        this.duration = Number(a);
        this.dispatchEvent("durationchange");
        a = this.M;
        a.g.push(new IU(this.duration));
        a.length = a.g.length;
        a = this.buffered;
        a.g.push(new IU(this.duration));
        a.length = a.g.length;
        this.dispatchEvent("loadedmetadata");
        this.currentTime > 0 && this.dispatchEvent("timeupdate");
        this.dispatchEvent("loadeddata");
        this.dispatchEvent("canplay");
        this.dispatchEvent("canplaythrough");
        this.dispatchEvent("progress");
        this.playbackRate = this.K
    };
    m.setVolume = function(a) {
        this.volume = a;
        this.dispatchEvent("volumechange")
    };
    m.setAttribute = function(a, b) {
        a != null && JU.set(a, b)
    };
    m.getAttribute = function(a) {
        return JU.get(a)
    };
    m.Uh = function(a) {
        var b = null,
            c = null;
        switch (a.type) {
            case "loadeddata":
                b = "Loaded";
                break;
            case "playing":
                b = "Playing";
                c = "#00f";
                break;
            case "pause":
                b = "Paused";
                break;
            case "ended":
                b = "Ended", c = "#000"
        }
        b && this.C && (this.C.innerText = b);
        c && this.l && (this.l.style.backgroundColor = c)
    };
    fa.Object.defineProperties(FU.prototype, {
        src: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.H
            },
            set: function(a) {
                this.H = a
            }
        }
    });
    var JU = new AU,
        IU = function(a) {
            this.startTime = 0;
            this.endTime = a
        },
        EU = function() {
            this.length = 0;
            this.g = []
        };
    EU.prototype.start = function(a) {
        return this.g[a].startTime
    };
    EU.prototype.end = function(a) {
        return this.g[a].endTime
    };
    var LU = function(a) {
        Q.call(this);
        this.o = a;
        this.g = this.j = null;
        this.l = KU(this);
        this.j = document.createElement("div");
        this.j.style.display = "none";
        this.o.appendChild(this.j);
        this.j.appendChild(this.l);
        this.g = document.createElement("div");
        this.g.style.position = "absolute";
        this.g.style.width = "100%";
        this.g.style.height = "100%";
        this.g.style.left = "0px";
        this.g.style.top = "0px";
        this.j.appendChild(this.g);
        fJ(function() {
            M(L.getInstance(), "haob", "1")
        })
    };
    r(LU, Q);
    LU.prototype.initialize = function() {
        this.l && this.l.load()
    };
    LU.prototype.O = function() {
        Uj(this.j);
        Q.prototype.O.call(this)
    };
    var KU = function(a) {
            var b = wK(xK);
            if (tK(b, "useVideoElementFake")) a = GU(), b = Tj("DIV", {
                style: "position:absolute;width:100%;height:100%;top:0px;left:0px;"
            }), Object.assign(b, a), a.l = Tj("DIV", {
                style: "position:absolute;width:100%;height:100%;top:0px;left:0px;background-color:#000"
            }), a.C = Tj("P", {
                style: "position:absolute;top:25%;margin-left:10px;font-size:24px;color:#fff;"
            }), a.l.appendChild(a.C), b.appendChild(a.l), a.G.listen(a, ["loadeddata", "playing", "pause", "ended"], a.Uh), a = b;
            else {
                b = !1;
                try {
                    window.location.search.indexOf("goog_limavideo=true") !==
                        -1 && (b = !0)
                } catch (c) {}
                if (MU(a, b)) {
                    b && console.log("force lima video in wrapper");
                    a = null;
                    try {
                        a = new rJ
                    } catch (c) {
                        a = document.createElement("lima-video"), rp(WD) && W.getInstance().report(153, {
                            limvid: "firefail"
                        })
                    }
                    a.style.backgroundColor = "#000";
                    a.style.height = "100%";
                    a.style.width = "100%";
                    a.style.position = "absolute";
                    a.style.left = "0";
                    a.style.top = "0"
                } else a = document.createElement("video"), a.style.backgroundColor = "#000", a.style.height = "100%", a.style.width = "100%", a.style.position = "absolute", a.style.left = "0", a.style.top =
                    "0", a.title = "Advertisement".toString()
            }
            a.setAttribute("webkit-playsinline", "true");
            a.setAttribute("playsinline", "true");
            return a
        },
        MU = function(a, b) {
            if (!y.customElements) return !1;
            if (b) return !0;
            if (Yb() && Kj(a.o) !== document) return !1;
            rp(WD) && W.getInstance().report(153, {
                limvid: "vw"
            });
            return rp(WD) ? !0 : !1
        };
    LU.prototype.yc = function() {
        return this.g
    };
    LU.prototype.Cb = function() {
        var a = this.j;
        a != null && (a.style.display = "none")
    };
    var OU = function(a, b, c) {
        var d = a && a.getRootNode ? a.getRootNode({
            composed: !0
        }) : a;
        if (a == null || !Vj(Kj(d), d)) throw UL(TL, null, "containerElement", "element");
        this.j = b;
        this.K = kL(this.j || null);
        this.H = OF(this.j || null);
        this.G = String(Math.floor(Math.random() * 1E9));
        this.I = !1;
        this.Kc = a;
        this.F = b != null;
        xK.g = 2;
        this.C = NU(b ? b : null);
        d = Tj("DIV", {
            style: "position:absolute"
        });
        a.insertBefore(d, a.firstChild);
        this.o = d;
        this.g = null;
        this.ya() && b ? a = new rU(b) : (this.g = new LU(this.o), a = new rU(this.g.l));
        this.ga = a;
        this.Fa = this.l = null;
        if (a = this.g && xK.o) a = !(this.ya() || Kc || Mc || gs() || Ic && (!Ic || !MF(LF, 4)));
        a && (this.l = new LU(this.o), this.Fa = new rU(this.l.l));
        this.Mb = c || null;
        this.L = this.Mb != null;
        this.ya() && b ? typeof b.getBoundingClientRect !== "function" ? (c = this.o, xK.l = c) : c = b : c = this.o;
        this.A = c;
        this.B = new aU(this.o, this, !1);
        this.size = new Ij(0, 0);
        this.Qd = "";
        b && (b = aF(b.src || b.currentSrc), b.toString().length < 200 ? this.Qd = b.toString() : b.g.length < 200 && (this.Qd = b.g));
        this.Qe = new Map;
        this.Qe.set("videoDisplay1", this.ga);
        this.Fa && this.Qe.set("videoDisplay2",
            this.Fa);
        this.Nd() && !xK.j && console.warn("Custom media element must be a <video> or <audio> element. Viewability/audibility measurement will fail.")
    };
    m = OU.prototype;
    m.initialize = function() {
        this.I = !0;
        this.g != null && this.g.initialize();
        this.l != null && this.l.initialize()
    };
    m.Ca = function() {
        return this.I
    };
    m.destroy = function() {
        var a = this;
        this.j = null;
        Ms(this.g);
        Ms(this.l);
        Ms(this.B);
        this.ga.U(function() {
            return Ms(a.ga)
        });
        this.Fa != null && this.Fa.U(function() {
            return Ms(a.Fa)
        });
        Uj(this.o)
    };
    m.Kd = function() {
        if (this.g != null) {
            var a = this.g.j;
            a != null && (a.style.display = "block")
        }
    };
    m.Pc = function(a) {
        this.ga !== a && this.g && this.l && this.Fa && (a.setVolume(this.ga.getVolume()), a = this.ga, this.ga = this.Fa, this.Fa = a, a = this.g, this.g = this.l, this.l = a, this.l.Cb(), this.B.Pc(this.ga))
    };
    m.Cb = function() {
        this.g != null && this.g.Cb()
    };
    m.yc = function() {
        return this.L && this.Mb ? this.Mb : this.g != null ? this.g.yc() : null
    };
    m.ya = function() {
        return jL(this.C) && this.F
    };
    m.Xf = function() {
        return this.C
    };
    m.Nd = function() {
        var a = ["VIDEO", "AUDIO"],
            b;
        return this.ya() && !!this.j && !a.includes((b = this.j.tagName) == null ? void 0 : b.toUpperCase())
    };
    m.getSize = function() {
        return this.size
    };
    var NU = function(a) {
        return a != null && typeof a.getAttribute === "function" && a.getAttribute("playsinline") != null ? !0 : !1
    };
    OU.prototype.Ge = function(a) {
        this.ga.Ge(a)
    };
    OU.prototype.He = function() {
        this.ga.He()
    };
    OU.prototype.destroy = OU.prototype.destroy;
    OU.prototype.initialize = OU.prototype.initialize;
    var PU = {
            AD_LOAD: "adLoadError",
            AD_PLAY: "adPlayError"
        },
        QU = function(a) {
            var b = Error.call(this);
            this.message = b.message;
            "stack" in b && (this.stack = b.stack);
            this.data = a
        };
    r(QU, Error);
    m = QU.prototype;
    m.getInnerError = function() {
        var a = this.data.innerError;
        return a instanceof Object ? new QU(a) : a != null ? Error(a) : null
    };
    m.getMessage = function() {
        return this.data.errorMessage
    };
    m.getErrorCode = function() {
        return this.data.errorCode
    };
    m.getVastErrorCode = function() {
        var a = this.getErrorCode();
        return a < 1E3 ? a : 900
    };
    m.getType = function() {
        return this.data.type
    };
    m.toString = function() {
        return "AdError " + this.getErrorCode() + ": " + this.getMessage() + (this.getInnerError() != null ? " Caused by: " + this.getInnerError() : "")
    };
    QU.prototype.getType = QU.prototype.getType;
    QU.prototype.getVastErrorCode = QU.prototype.getVastErrorCode;
    QU.prototype.getErrorCode = QU.prototype.getErrorCode;
    QU.prototype.getMessage = QU.prototype.getMessage;
    QU.prototype.getInnerError = QU.prototype.getInnerError;
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ad_error.AdError.Type", PU);
    var RU = {
            AD_ERROR: "adError"
        },
        SU = function(a, b) {
            b = b === void 0 ? null : b;
            Ww.call(this, "adError");
            this.error = a;
            this.g = b
        };
    r(SU, Ww);
    SU.prototype.getError = function() {
        return this.error
    };
    SU.prototype.getUserRequestContext = function() {
        return this.g
    };
    SU.prototype.getUserRequestContext = SU.prototype.getUserRequestContext;
    SU.prototype.getError = SU.prototype.getError;
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ad_error_event.AdErrorEvent.Type", RU);
    var TU = {
            AD_CAN_PLAY: "adCanPlay",
            Fi: "adStarted",
            CONTENT_PAUSE_REQUESTED: "contentPauseRequested",
            CONTENT_RESUME_REQUESTED: "contentResumeRequested",
            CLICK: "click",
            VIDEO_CLICKED: "videoClicked",
            VIDEO_ICON_CLICKED: "videoIconClicked",
            Re: "engagedView",
            EXPANDED_CHANGED: "expandedChanged",
            STARTED: "start",
            AD_PROGRESS: "adProgress",
            AD_BUFFERING: "adBuffering",
            IMPRESSION: "impression",
            We: "measurable_impression",
            VIEWABLE_IMPRESSION: "viewable_impression",
            Se: "fully_viewable_audible_half_duration_impression",
            rg: "overlay_resize",
            sg: "overlay_unmeasurable_impression",
            tg: "overlay_unviewable_impression",
            vg: "overlay_viewable_immediate_impression",
            ug: "overlay_viewable_end_of_session_impression",
            Xi: "externalActivityEvent",
            PAUSED: "pause",
            RESUMED: "resume",
            FIRST_QUARTILE: "firstQuartile",
            MIDPOINT: "midpoint",
            THIRD_QUARTILE: "thirdQuartile",
            COMPLETE: "complete",
            DURATION_CHANGE: "durationChange",
            USER_CLOSE: "userClose",
            bk: "userRecall",
            Mj: "prefetched",
            LOADED: "loaded",
            ALL_ADS_COMPLETED: "allAdsCompleted",
            SKIPPED: "skip",
            zg: "skipShown",
            LINEAR_CHANGED: "linearChanged",
            SKIPPABLE_STATE_CHANGED: "skippableStateChanged",
            AD_METADATA: "adMetadata",
            AD_BREAK_FETCH_ERROR: "adBreakFetchError",
            AD_BREAK_READY: "adBreakReady",
            LOG: "log",
            VOLUME_CHANGED: "volumeChange",
            VOLUME_MUTED: "mute",
            INTERACTION: "interaction",
            Ki: "companionBackfill",
            Yj: "trackingUrlPinged",
            ck: "video_card_endcap_collapse",
            dk: "video_card_endcap_dismiss",
            ek: "video_card_endcap_impression",
            Ni: "companionInitialized",
            Mi: "companionImpression",
            Li: "companionClick",
            Fj: "mediaUrlPinged",
            LOAD_START: "loadStart",
            Hj: "navigationRequested"
        },
        UU = function(a, b, c) {
            b = b === void 0 ? null : b;
            c = c === void 0 ? null : c;
            Ww.call(this, a);
            this.ad = b;
            this.j = c
        };
    r(UU, Ww);
    UU.prototype.getAd = function() {
        return this.ad
    };
    UU.prototype.getAdData = function() {
        return this.j
    };
    UU.prototype.getAdData = UU.prototype.getAdData;
    UU.prototype.getAd = UU.prototype.getAd;
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ad_event.AdEvent.Type", TU);
    var VU = function(a, b) {
        b = b === void 0 ? null : b;
        UU.call(this, "adMetadata", a);
        this.g = b
    };
    r(VU, UU);
    VU.prototype.bh = function() {
        return this.g
    };
    VU.prototype.getAdCuePoints = VU.prototype.bh;
    var WU = function(a) {
        this.adBreakDuration = a.adBreakDuration;
        this.adPosition = a.adPosition;
        this.currentTime = a.currentTime;
        this.duration = a.duration;
        this.totalAds = a.totalAds
    };
    var XU = function(a) {
        this.g = a || {
            cookie: ""
        }
    };
    m = XU.prototype;
    m.set = function(a, b, c) {
        var d = !1;
        if (typeof c === "object") {
            var e = c.Mf;
            d = c.Gd || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.nd
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        h === void 0 && (h = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (h < 0 ? "" : h == 0 ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + h * 1E3)).toUTCString()) + (d ? ";secure" : "") + (e != null ? ";samesite=" + e : "")
    };
    m.get = function(a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Cb(d[e]);
            if (f.lastIndexOf(c, 0) == 0) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    m.remove = function(a, b, c) {
        var d = this.get(a) !== void 0;
        this.set(a, "", {
            nd: 0,
            path: b,
            domain: c
        });
        return d
    };
    m.bd = function() {
        return YU(this).keys
    };
    m.bc = function() {
        return YU(this).values
    };
    m.isEmpty = function() {
        return !this.g.cookie
    };
    m.clear = function() {
        for (var a = YU(this).keys, b = a.length - 1; b >= 0; b--) this.remove(a[b])
    };
    var YU = function(a) {
        a = (a.g.cookie || "").split(";");
        for (var b = [], c = [], d, e, f = 0; f < a.length; f++) e = Cb(a[f]), d = e.indexOf("="), d == -1 ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        return {
            keys: b,
            values: c
        }
    };

    function ZU(a, b, c) {
        return EK(b) ? $U(a, c) : null
    }
    var aV;

    function bV(a) {
        return aV ? aV : a.origin === "null" ? aV = !1 : aV = cV(a)
    }

    function cV(a) {
        if (!a.navigator.cookieEnabled) return !1;
        var b = new XU(a.document);
        if (!b.isEmpty()) return !0;
        b.set("TESTCOOKIESENABLED", "1", {
            nd: 60,
            Mf: a.isSecureContext ? "none" : void 0,
            Gd: a.isSecureContext || void 0
        });
        if (b.get("TESTCOOKIESENABLED") !== "1") return !1;
        b.remove("TESTCOOKIESENABLED");
        return !0
    }

    function $U(a, b) {
        b = b.origin !== "null" ? b.document.cookie : null;
        return b === null ? null : (new XU({
            cookie: b
        })).get(a) || ""
    }

    function dV(a, b, c, d) {
        d.origin !== "null" && (d.isSecureContext && (c = Object.assign({}, c, {
            Mf: "none",
            Gd: !0
        })), (new XU(d.document)).set(a, b, c))
    };
    var eV = function() {
            this.g = window
        },
        fV = function(a, b, c) {
            var d = c.Be;
            c = c.Ce;
            return kg(b, 8) || (d || !EK(b)) && c || !bV(a.g) ? !1 : !0
        },
        gV = function(a, b, c) {
            if (fV(a, b, {
                    Be: c.Be,
                    Ce: c.Ce
                })) {
                var d;
                return (d = $U("__eoi", a.g)) != null ? d : void 0
            }
        };
    var hV = function() {
            this.g = window
        },
        iV = function(a, b) {
            return EK(b) ? !!bV(a.g) : !1
        },
        jV = function(a, b, c, d) {
            if (d) {
                var e = sm(ng(c, 2)) - Date.now() / 1E3;
                e = {
                    nd: Math.max(e, 0),
                    path: pg(c, 3),
                    domain: pg(c, 4),
                    Gd: !1
                };
                c = c.getValue();
                a = a.g;
                EK(d) && dV(b, c, e, a)
            }
        },
        kV = function(a, b, c) {
            if (c && ZU(b, c, a.g)) {
                var d = a.g.location.hostname;
                if (d === "localhost") d = ["localhost"];
                else if (d = d.split("."), d.length < 2) d = [];
                else {
                    for (var e = [], f = 0; f < d.length - 1; ++f) e.push(d.slice(f).join("."));
                    d = e
                }
                d = v(d);
                for (var g = d.next(); !g.done; g = d.next()) e = b, f = a.g,
                    g = g.value, EK(c) && f.origin !== "null" && (new XU(f.document)).remove(e, "/", g)
            }
        };

    function lV() {
        var a = window,
            b, c;
        return (c = ((b = a._pbjsGlobals) != null ? b : []).concat(["pbjs"]).map(function(d) {
            return a[d]
        }).find(function(d) {
            return Array.isArray(d == null ? void 0 : d.que)
        })) != null ? c : null
    };

    function mV(a, b) {
        var c, d, e;
        b == null ? e = void 0 : e = b.get.call(b, a);
        return (d = (c = e) != null ? c : b == null ? void 0 : b.get(ip(a))) != null ? d : 0
    };
    var nV = /^v?\d{1,3}(\.\d{1,3}){0,2}(-pre)?$/,
        oV = new Map,
        pV = new Map;

    function qV(a, b) {
        b = b === void 0 ? 1 : b;
        var c = function(d) {
            var e, f = (e = d.responseTimestamp) != null ? e : 0,
                g, h;
            e = (h = d.ttl) != null ? h : 0 - ((g = d.ttlBuffer) != null ? g : b);
            return f + e * 1E3 > (new Date).getTime()
        };
        return function(d) {
            var e;
            return ((e = d.getStatusCode) == null ? void 0 : e.call(d)) === 1
        }(a) && c(a) && "rendered" !== a.status
    }

    function rV(a, b) {
        var c = a.reduce(function(e, f) {
                var g = f.bidder;
                e[g] || (e[g] = []);
                e[g].push(f);
                return e
            }, {}),
            d = [];
        Object.keys(c).forEach(function(e) {
            d.push(c[e].sort(function(f, g) {
                var h, k;
                return ((h = f.timeToRespond) != null ? h : 0) - ((k = g.timeToRespond) != null ? k : 0)
            }).reduce(function(f, g) {
                var h, k;
                return ((h = f.cpm) != null ? h : 0) >= ((k = g.cpm) != null ? k : 0) ? f : g
            }))
        });
        d.sort(function(e, f) {
            var g, h;
            return ((g = f.cpm) != null ? g : 0) - ((h = e.cpm) != null ? h : 0)
        });
        return b ? d.slice(0, b) : d
    }

    function sV(a) {
        switch (a) {
            case null:
            case void 0:
            case "client":
                return 1;
            case "s2s":
                return 2;
            default:
                return 0
        }
    }

    function tV(a, b, c) {
        var d = b.getBidResponsesForAdUnitCode;
        if (!d || !a.code) return [];
        var e;
        d = (e = d(a.code)) == null ? void 0 : e.bids;
        return d != null && d.length ? d.filter(function(f) {
            var g;
            if (!qV(f, (g = b.getConfig) == null ? void 0 : g.call(b).ttlBuffer)) return !1;
            var h;
            g = (h = b.getConfig) == null ? void 0 : h.call(b).useBidCache;
            var k;
            h = (k = b.getConfig) == null ? void 0 : k.call(b).bidCacheFilterFunction;
            k = f.auctionId === c;
            h = g && !k && typeof h === "function" ? !!h(f) : !0;
            return (f.adUnitCode !== a.code || g || k) && h
        }) : []
    }

    function uV(a, b, c) {
        var d = function(h) {
                return !!h && (h === b.Ob || h === b.adUnitCode)
            },
            e;
        if (a = (e = a.adUnits) == null ? void 0 : e.find(function(h) {
                return d(h == null ? void 0 : h.code)
            })) return a;
        var f;
        if (a = c == null ? void 0 : (f = c.adUnits) == null ? void 0 : f.find(function(h) {
                return d(h == null ? void 0 : h.code)
            })) return a;
        var g;
        if (c = c == null ? void 0 : (g = c.adUnitCodes) == null ? void 0 : g.find(d)) return {
            code: c
        }
    }

    function vV(a, b, c, d, e) {
        if (pV.has(c)) return pV.get(c);
        var f, g = (f = a.adUnits) == null ? void 0 : f.find(function(p) {
            p = p == null ? void 0 : p.code;
            return !!p && (p === b.Ob || p === b.adUnitCode)
        });
        if (!g && d && e != null) {
            var h = e.find(function(p) {
                    return p.args.adId === d
                }),
                k;
            if (h == null ? 0 : (k = h.args) == null ? 0 : k.adUnitCode) {
                var l, n;
                g = (n = (l = a.adUnits) == null ? void 0 : l.find(function(p) {
                    return p.code === h.args.adUnitCode
                })) != null ? n : {
                    code: h.args.adUnitCode
                }
            }
        }
        if (g) return pV.set(c, g), g
    }

    function wV(a, b, c) {
        for (var d = []; b && !d.includes(b);) {
            d.unshift(b);
            var e = void 0,
                f = void 0;
            b = (e = a) == null ? void 0 : (f = e.aliasRegistry) == null ? void 0 : f[b]
        }
        Tf(c, 10, d, Oe)
    }

    function xV(a, b, c, d) {
        var e = a.cpm,
            f = a.originalCpm,
            g = a.currency,
            h = a.originalCurrency,
            k = a.dealId,
            l = a.adserverTargeting,
            n = a.bidder,
            p = a.adId,
            q = a.mediaType,
            u = a.height,
            w = a.width,
            t = a.meta,
            x = new yy;
        typeof e === "number" && (If(x, 2, He(Math.round(e * 1E6))), h && h !== g || (e = Math.round(Number(f) * 1E6), isNaN(e) || e === sm(ng(x, 2)) || If(x, 8, He(e))));
        typeof g === "string" && zg(x, 3, g);
        ["string", "number"].includes(typeof k) && (g = new py, k = zg(g, 1, String(k)), dg(x, 6, k));
        if (typeof l === "object")
            for (k = v(["", "_" + n]), g = k.next(); !g.done; g = k.next()) {
                e =
                    g.value;
                g = [];
                f = v(Object.entries(l));
                for (h = f.next(); !h.done; h = f.next()) {
                    h = v(h.value);
                    var G = h.next().value;
                    h = h.next().value;
                    G = ("" + G + e).slice(0, 20);
                    var X = void 0,
                        D = void 0;
                    if ((X = c) == null ? 0 : (D = X[G]) == null ? 0 : D.length)
                        if (c[G][0] === String(h)) g.push(G);
                        else {
                            g = [];
                            break
                        }
                }
                e = Mf(x, 4, Qe, Lf());
                Tf(x, 4, e.concat(g), Oe)
            }
        switch (q || "banner") {
            case "banner":
                Ag(x, 5, 1);
                break;
            case "native":
                Ag(x, 5, 2);
                break;
            case "video":
                Ag(x, 5, 3);
                c = new vy;
                var ea;
                if ((b == null ? void 0 : (ea = b.video) == null ? void 0 : ea.context) === "adpod") {
                    var ya, ca = b ==
                        null ? void 0 : (ya = b.video) == null ? void 0 : ya.adPodDurationSec;
                    If(c, 1, He(ca))
                } else ya = b == null ? void 0 : (ca = b.video) == null ? void 0 : ca.maxduration, If(c, 1, He(ya));
                var Fa;
                if (typeof(b == null ? void 0 : (Fa = b.video) == null ? void 0 : Fa.skip) === "number") {
                    var Ga;
                    b = !!(b == null ? 0 : (Ga = b.video) == null ? 0 : Ga.skip);
                    ug(c, 2, b)
                }
                var T;
                Ga = (T = a.meta) == null ? void 0 : T.adServerCatId;
                T = zg(c, 3, Ga);
                if (typeof l !== "object") l = null;
                else {
                    var ha, Na;
                    Ga = String((Na = (ha = l["hb_pb_cat_dur_" + n]) != null ? ha : l.hb_pb_cat_dur) != null ? Na : "");
                    var qb, S, za, Rb;
                    ha = String((Rb =
                        (za = (S = (qb = l["hb_cache_id_" + n]) != null ? qb : l["hb_uuid_" + n]) != null ? S : l.hb_cache_id) != null ? za : l.hb_uuid) != null ? Rb : "");
                    l = Ga && ha ? Ga + "_" + ha : ha ? ha : null
                }
                zg(T, 4, l);
                dg(x, 9, c)
        }
        Number.isFinite(u) && Number.isFinite(w) && (l = new ty, w = wg(l, 1, Math.round(w)), u = wg(w, 2, Math.round(u)), dg(x, 7, u));
        typeof p === "string" && zg(x, 1, p);
        var lc;
        (d == null ? 0 : d.Dg) && Array.isArray(t == null ? void 0 : t.advertiserDomains) && (t == null ? 0 : (lc = t.advertiserDomains[0]) == null ? 0 : lc.length) && zg(x, 10, t.advertiserDomains[0].substring(0, d == null ? void 0 : d.Dg));
        if (a.meta && d) {
            var Ba, Jc;
            d.Fg && typeof a.meta.agencyId === "string" && ((Jc = a.meta.agencyId) == null ? 0 : Jc.length) && (Ba != null || (Ba = new ry), zg(Ba, 1, a.meta.agencyId.substring(0, d.Fg)));
            var jd;
            d.Gg && typeof a.meta.agencyName === "string" && ((jd = a.meta.agencyName) == null ? 0 : jd.length) && (Ba != null || (Ba = new ry), zg(Ba, 2, a.meta.agencyName.substring(0, d.Gg)));
            var xe;
            d.Wg && typeof a.meta.networkId === "string" && ((xe = a.meta.networkId) == null ? 0 : xe.length) && (Ba != null || (Ba = new ry), zg(Ba, 3, a.meta.networkId.substring(0, d.Wg)));
            var ye;
            d.Xg && typeof a.meta.networkName === "string" && ((ye = a.meta.networkName) == null ? 0 : ye.length) && (Ba != null || (Ba = new ry), zg(Ba, 4, a.meta.networkName.substring(0, d.Xg)));
            Ba && dg(x, 11, Ba)
        }
        return x
    }

    function yV(a, b, c, d, e, f, g) {
        var h = tV(c, a, d);
        if (h.length) {
            var k, l = (k = a.getConfig) == null ? void 0 : k.call(a).enableSendAllBids,
                n, p;
            k = (n = a.getConfig) == null ? void 0 : (p = n.call(a).sendBidsControl) == null ? void 0 : p.bidLimit;
            h = rV(h, l && k || 0);
            if (h.length)
                for (h = v(h), l = h.next(); !l.done; l = h.next()) {
                    l = l.value;
                    p = l.adUnitCode !== c.code;
                    n = !p && l.auctionId !== d;
                    if (!q && !n && !p && l.transactionId) {
                        var q = l.transactionId;
                        Qe(Gf(b, 4)) != null || zg(b, 4, q)
                    }
                    try {
                        p = void 0, (p = e) == null || p(l, l.transactionId)
                    } catch (w) {}
                    var u = n;
                    n = a;
                    p = b;
                    k = xV(l, c.mediaTypes,
                        f, g);
                    u = Iy(Hy(Fy(new Ey, l.bidder), 1), u);
                    u = Ag(u, 7, sV(l.source));
                    k = Gy(u, k);
                    wV(n, l.bidder, k);
                    n = Ny(p, k);
                    typeof l.timeToRespond === "number" && If(n, 2, He(Math.round(l.timeToRespond)))
                }
        }
    }
    var zV = function(a, b, c) {
            this.pbjs = a;
            this.slot = b;
            var d;
            this.qb = (d = c == null ? void 0 : c.qb) != null ? d : {};
            this.be = !(c == null || !c.be);
            var e;
            this.de = (e = c == null ? void 0 : c.de) != null ? e : new Map;
            var f;
            this.Ef = (f = c == null ? void 0 : c.Ef) != null ? f : new Map;
            var g;
            this.bf = (g = c == null ? void 0 : c.bf) != null ? g : new Ly;
            this.qe = c == null ? void 0 : c.qe;
            this.j = c;
            var h;
            this.yb = (h = c == null ? void 0 : c.yb) != null ? h : !1;
            var k, l;
            this.g = ((k = this.slot.Ob) != null ? k : "") + ((l = this.slot.adUnitCode) != null ? l : "");
            this.Md = !(c == null || !c.Md);
            this.Hf = c == null ? void 0 :
                c.Hf;
            this.ue = c == null ? void 0 : c.ue
        },
        AV = function(a, b, c) {
            var d = a.pbjs.getBidResponsesForAdUnitCode;
            if (d) {
                var e, f, g, h, k, l, n, p, q, u = (q = (n = (e = d((k = a.slot.Ob) != null ? k : "")) == null ? void 0 : e.bids) != null ? n : (f = d((l = a.slot.adUnitCode) != null ? l : "")) == null ? void 0 : f.bids) != null ? q : (h = d((p = (g = pV.get(a.g)) == null ? void 0 : g.code) != null ? p : "")) == null ? void 0 : h.bids;
                if (u != null && u.length && (e = u.filter(function(x) {
                        var G = x.auctionId;
                        var X = x.adId;
                        return G !== c && Object.values(a.qb).some(function(D) {
                            return D.includes(X)
                        })
                    }), e.length)) {
                    var w,
                        t;
                    d = (w = a.pbjs.adUnits) == null ? void 0 : (t = w.find(function(x) {
                        x = x.code;
                        return x === a.slot.Ob || x === a.slot.adUnitCode || x === pV.get(a.g)
                    })) == null ? void 0 : t.mediaTypes;
                    w = v(e);
                    for (t = w.next(); !t.done; t = w.next()) t = t.value, e = xV(t, d, a.qb, a.j), e = Ny(b, Gy(Iy(Hy(Fy(new Ey, t.bidder), 1), !0), e)), wV(a.pbjs, t.bidder, e), typeof t.timeToRespond === "number" && If(e, 2, He(Math.round(t.timeToRespond)))
                }
            }
        },
        BV = function(a, b, c, d, e) {
            e = a.Ef.get(e != null ? e : function() {
                return null
            });
            (e == null ? void 0 : F(e, 1)) !== 1 && dg(c, 5, e);
            Kf(b, Ay) || (e ? F(e, 1) ===
                1 ? Oy(b, e) : Oy(b, Dy(By(Cy(new Ay, a.be), 1), mV(d, a.de))) : Oy(b, By(Cy(new Ay, a.be), mV(d, a.de) ? 2 : 3)))
        },
        CV = function(a, b) {
            var c = new Map,
                d = function(k) {
                    var l = c.get(k);
                    l || (l = {}, c.set(k, l));
                    return l
                },
                e = [];
            a = v(a);
            for (var f = a.next(); !f.done; f = a.next()) {
                f = f.value;
                var g = f.args,
                    h = f.eventType;
                f = f.elapsedTime;
                h === "bidTimeout" && e.push.apply(e, ta(g));
                switch (h) {
                    case "bidRequested":
                        if (g.auctionId !== b) continue;
                        if (!Array.isArray(g.bids)) continue;
                        g = v(g.bids);
                        for (h = g.next(); !h.done; h = g.next())
                            if (h = h.value.bidId) d(h).requestTime =
                                f;
                        break;
                    case "noBid":
                        g.auctionId === b && g.bidId && (d(g.bidId).Yh = f)
                }
            }
            d = new Map;
            a = v(c.entries());
            for (f = a.next(); !f.done; f = a.next()) g = v(f.value), f = g.next().value, h = g.next().value, g = h.requestTime, h = h.Yh, g && h && d.set(f, {
                latency: h - g,
                fc: !1
            });
            e = v(e);
            for (a = e.next(); !a.done; a = e.next())
                if (f = a.value, a = f.bidId, f = f.auctionId, a && f === b && (a = d.get(a))) a.fc = !0;
            return d
        };
    zV.prototype.fetch = function() {
        var a = this,
            b, c, d = ((c = (b = this.pbjs) == null ? void 0 : b.getEvents) != null ? c : function() {
                return []
            })(),
            e = d.filter(function(T) {
                var ha = T.eventType;
                T = T.args;
                return ha === "auctionEnd" && T.auctionId
            }),
            f = void 0;
        if (this.yb) {
            b = d.filter(function(T) {
                return T.eventType === "bidResponse"
            });
            var g;
            f = vV(this.pbjs, this.slot, this.g, (g = this.qb.hb_adid) == null ? void 0 : g[0], b);
            var h;
            if (f == null && ((h = this.qb.hb_adid) == null ? void 0 : h[0]) != null) {
                var k;
                (k = this.ue) == null || k.call(this, this.yb);
                return null
            }
        }
        var l =
            function(T) {
                var ha;
                return a.yb ? T === ((ha = f) == null ? void 0 : ha.code) : T === a.slot.Ob || T === a.slot.adUnitCode
            },
            n;
        g = (n = this.Hf) != null ? n : function() {
            var T, ha = (T = oV.get(a.g)) != null ? T : 0,
                Na;
            T = (Na = e.filter(function(S) {
                var za, Rb, lc;
                return Number((za = S.args) == null ? void 0 : za.timestamp) > ha && ((Rb = S.args) == null ? void 0 : (lc = Rb.adUnitCodes) == null ? void 0 : lc.find(l))
            })) != null ? Na : [];
            if (!T.length) return null;
            var qb;
            return (qb = T.reduce(function(S, za) {
                    return Number(za.args.timestamp) > Number(S.args.timestamp) ? za : S
                })) == null ? void 0 :
                qb.args
        }();
        if (!g) {
            var p;
            if (!this.yb && ((p = this.qb.hb_adid) == null ? void 0 : p[0]) != null) {
                var q;
                (q = this.ue) == null || q.call(this, this.yb)
            }
            return g
        }
        h = g.bidderRequests === void 0 ? [] : g.bidderRequests;
        n = g.bidsReceived === void 0 ? [] : g.bidsReceived;
        var u = g.auctionId;
        p = g.timestamp;
        if (u && p != null && h.length) {
            oV.set(this.g, p);
            p = new Sy;
            q = Ty(p);
            this.pbjs.version && nV.test(this.pbjs.version) && zg(q, 6, this.pbjs.version);
            var w, t, x, G;
            if ((t = (w = this.pbjs).getConfig) == null ? 0 : (x = t.call(w).cache) == null ? 0 : (G = x.url) == null ? 0 : G.length) {
                var X,
                    D, ea;
                Py(q, (D = (X = this.pbjs).getConfig) == null ? void 0 : (ea = D.call(X).cache) == null ? void 0 : ea.url)
            }
            dg(q, 9, this.bf);
            w = oi(function() {
                return CV(d, u)
            });
            var ya;
            t = v(h);
            G = t.next();
            for (x = {}; !G.done; x = {
                    bidderCode: void 0,
                    Rf: void 0
                }, G = t.next())
                for (X = G.value, x.bidderCode = X.bidderCode, D = X.bids, G = X.timeout, x.Rf = X.src, X = v(D), D = X.next(), h = {}; !D.done; h = {
                        Sc: void 0
                    }, D = X.next())
                    if (c = D.value, h.Sc = c.bidId, D = c.transactionId, k = c.adUnitCode, b = c.getFloor, ea = c.mediaTypes, c = c.ortb2Imp, h.Sc && (l(k) || k === pV.get(this.g))) {
                        ue(Gf(q, 3)) !=
                            null || (k === this.slot.adUnitCode ? Ag(q, 3, 1) : k === this.slot.Ob && Ag(q, 3, 2));
                        var ca = void 0;
                        ((ca = this.j) == null ? 0 : ca.sf) && Qe(Gf(q, 11)) == null && (ca = void 0, c = DV(c, (ca = this.j) == null ? void 0 : ca.xk)) && (ca = void 0, Qy(q, c.substring(0, (ca = this.j) == null ? void 0 : ca.sf)));
                        D && (ya != null || (ya = D), Qe(Gf(q, 4)) != null || zg(q, 4, D));
                        we(Gf(q, 8)) == null && Number.isFinite(G) && wg(q, 8, G);
                        ca = n.find(function(T) {
                            return function(ha) {
                                return ha.requestId === T.Sc
                            }
                        }(h));
                        if (!ca || !this.Md)
                            if (c = Ny(q, function(T) {
                                    return function() {
                                        var ha = Fy(new Ey, T.bidderCode);
                                        wV(a.pbjs, T.bidderCode, ha);
                                        Ag(ha, 7, sV(T.Rf));
                                        return ha
                                    }
                                }(x)()), BV(this, q, c, k, b), ca) {
                                Hy(c, 1);
                                typeof ca.timeToRespond === "number" && Number.isFinite(ca.timeToRespond) && If(c, 2, He(Math.round(ca.timeToRespond)));
                                try {
                                    k = h = void 0, (k = (h = this).qe) == null || k.call(h, ca, D)
                                } catch (T) {}
                                D = xV(ca, ea, this.qb, this.j);
                                Gy(c, D)
                            } else(D = w().get(h.Sc)) && !D.fc ? (Hy(c, 2), Number.isFinite(D.latency) && If(c, 2, He(Math.round(D.latency)))) : (D = Hy(c, 3), Number.isFinite(G) && If(D, 2, He(Math.round(G))))
                    }
            if (this.Md) {
                var Fa = this.yb ? f : uV(this.pbjs,
                    this.slot, g);
                Fa && yV(this.pbjs, q, Fa, u, this.qe, this.qb, this.j)
            } else {
                var Ga;
                ((Ga = (Fa = this.pbjs).getConfig) == null ? 0 : Ga.call(Fa).useBidCache) && AV(this, q, u)
            }
            return {
                th: p,
                transactionId: ya,
                arg: g
            }
        }
    };

    function DV(a, b) {
        var c, d, e;
        return (a == null ? void 0 : (c = a.ext) == null ? void 0 : c.gpid) || ((b === void 0 ? 0 : b) ? a == null ? void 0 : (d = a.ext) == null ? void 0 : (e = d.data) == null ? void 0 : e.pbadslot : void 0)
    }

    function EV(a, b, c) {
        return (new zV(a, b, c)).fetch()
    };

    function FV(a, b) {
        return a && (a === b.Ob || a === b.adUnitCode)
    }

    function GV(a, b) {
        var c = c === void 0 ? !1 : c;
        if (!b.length) return [];
        var d, e, f = (e = (d = a.getEvents) == null ? void 0 : d.call(a).filter(function(g) {
            return g.eventType === "auctionEnd"
        })) != null ? e : [];
        return b.map(function(g) {
            for (var h = v(f), k = h.next(); !k.done; k = h.next()) {
                var l = void 0,
                    n = void 0;
                k = (n = (l = k.value.args) == null ? void 0 : l.adUnits) != null ? n : [];
                l = v(k);
                for (n = l.next(); !n.done; n = l.next()) {
                    n = n.value;
                    k = DV(n.ortb2Imp, c);
                    var p;
                    if ((p = k) && !(p = FV(n.code, g))) {
                        var q = void 0,
                            u = void 0,
                            w = void 0,
                            t = void 0,
                            x = void 0,
                            G = void 0,
                            X = void 0;
                        p = FV((X = n.ortb2Imp) == null ? void 0 : (G = X.ext) == null ? void 0 : (x = G.data) == null ? void 0 : x.pbadslot, g) || FV((t = n.ortb2Imp) == null ? void 0 : (w = t.ext) == null ? void 0 : (u = w.data) == null ? void 0 : (q = u.adserver) == null ? void 0 : q.adslot, g)
                    }
                    if (p) return k
                }
            }
        })
    };
    var HV = function(a, b, c) {
        var d;
        this.g = d = d === void 0 ? new eV : d;
        this.l = NK(a);
        this.j = {
            Be: LK(a),
            Ce: !JS(c, b)
        }
    };

    function IV(a, b, c) {
        if (Zb() && Fj(window.fetch) && Fj(window.AbortController)) try {
            var d = window.isSecureContext && !["localhost", "127.0.0.1"].includes(window.location.hostname),
                e = window.document;
            var f = !!(d && "browsingTopics" in e && e.browsingTopics instanceof Function && So("browsing-topics", e));
            if (a.j) {
                var g = IK(a, "rdp");
                var h = GK(g) ? "1" : ""
            } else h = "";
            d = h === "1";
            var k, l = IK(a, "us_privacy"),
                n = a.g.uspString || l || "";
            n = n.toUpperCase();
            l = n;
            if (l.length == 4 && (l.indexOf("-") == -1 || l.substring(1) === "---") && l[0] >= "1" && l[0] <= "9" &&
                oz.hasOwnProperty(l[1]) && oz.hasOwnProperty(l[2]) && oz.hasOwnProperty(l[3])) {
                var p = new nz;
                var q = xg(p, 1, parseInt(n[0], 10));
                var u = H(q, 2, oz[n[1]]);
                var w = H(u, 3, oz[n[2]]);
                var t = H(w, 4, oz[n[3]])
            } else t = null;
            var x = t;
            var G;
            if (!(G = (x == null ? void 0 : F(x, 3)) === 2 || OK(a)))
                if (JK(a)) {
                    var X = KK(a);
                    G = X ? !AE(X, ["3", "4"], 0) : !0
                } else G = !1;
            if (!(k = G)) {
                var D = IK(a, "npa"),
                    ea = GK(D);
                k = (a.j && ea ? "1" : "") === "1"
            }
            var ya;
            if (!(ya = k || d || MK(a))) {
                if (a.j) {
                    var ca = IK(a, "tfcd");
                    var Fa = ca === "0" || ca === "false" ? (0).toString() : GK(ca) ? (1).toString() : ""
                } else Fa =
                    "";
                var Ga;
                if (!(Ga = Fa === (1).toString())) {
                    if (a.j) {
                        var T = IK(a, "tfua");
                        var ha = T === "0" || T === "false" ? (0).toString() : GK(T) ? (1).toString() : ""
                    } else ha = "";
                    Ga = ha === (1).toString()
                }
                ya = Ga
            }
            k = !ya;
            if (c && b) {
                var Na, qb, S;
                var za = (S = (Na = E(c, $h, 4)) == null ? void 0 : (qb = Sf(Na, 1, void 0, Se)) == null ? void 0 : qb.get(b)) != null ? S : !0
            } else za = !0;
            b = f && k && za;
            if (rp(UD)) {
                var Rb = !!navigator.globalPrivacyControl,
                    lc = a.B && Rb;
                return b && !lc
            }
            return b
        } catch (Jc) {
            var Ba;
            W.getInstance().report(209, {
                message: (Ba = Jc) == null ? void 0 : Ba.message
            })
        }
        return !1
    }

    function JV(a) {
        if (!a) return [];
        if (rp(aE)) return ["15018773"];
        var b;
        return (b = E(a, Zh, 2)) == null ? void 0 : bg(b, Yh, 1, Lf()).map(function(c) {
            return pg(c, 1).toString()
        })
    }

    function KV(a, b, c, d, e, f, g, h, k, l, n) {
        var p = a.adTagUrl ? mK(a.adTagUrl) : null,
            q = new HV(c, p, e),
            u = {};
        u = (u.limaExperimentIds = eo().sort().join(","), u);
        var w = Cj(),
            t = Po(),
            x = E(t, Ko, 1),
            G = {};
        x = (G.experimentStateProto = x == null ? void 0 : x.fa(), G);
        G = rg(t, 2);
        t = lg(t, 5);
        var X = To(),
            D = {};
        b = (D.consentSettings = b, D.imalibExperiments = u, D.genotypeExperimentData = x, D.eventfeExperimentIds = G, D.managedJsExperimentId = t, D.settings = h, D.videoEnvironment = k, D.isFledgeEligible = X, D.preferredLinearOrientation = a.preferredLinearOrientation, D.pvsid =
            w, D.networkCodes = JV(e), D.sqid = f, D.supportsLinearDisplay = !0, D);
        Object.assign(b, a.fa());
        xK.isCookiesEnabled() && (f = NK(c), b.isBrowserCookieEnabled = iV(l, f), h = f ? ZU("__gads", f, l.g) : null, h !== null && (b.gfpCookieValue = h), h = f ? ZU("__gpi", f, l.g) : null, h !== null && (b.gfpCookieV2Id = h), l = f ? ZU("__gpi_opt_out", f, l.g) : null, l !== null && (b.gfpCookieV2OptOut = l));
        b.eoidCookieEnabled = fV(q.g, q.l, q.j);
        (q = gV(q.g, q.l, q.j)) && (b.eoidCookieValue = q);
        b.ivtDetectionOnlyStorageAllowed = MS(c, e, p);
        g && (b.espSignals = g);
        d && (b.gmaSignals = d);
        b.isEapLoader = !1;
        d = function(za) {
            W.getInstance().report(195, {
                message: za == null ? void 0 : za.message
            })
        };
        try {
            var ea = lV();
            if (ea) {
                var ya = nK(a.adTagUrl, d),
                    ca = ya ? $n(zo) ? 1 : KS(e, lK(ya)) ? 2 : 0 : 0,
                    Fa = sp(TD);
                switch (ca) {
                    case 1:
                    case 2:
                        var Ga = {
                                qb: oK(a.adTagUrl),
                                sf: Fa || ca !== 1 ? 0 : 100,
                                yb: rp(SD),
                                Md: sp(RD) === 1
                            },
                            T, ha = (T = EV(ea, {
                                adUnitCode: ya
                            }, Ga)) == null ? void 0 : T.th;
                        b.clientBidsProto = ha ? gM(Uy(ha)) : void 0
                }
                if (Fa) {
                    var Na;
                    b.globalPlacementId = (Na = GV(ea, [{
                        adUnitCode: ya
                    }])[0]) == null ? void 0 : Na.substring(0, Fa)
                }
            }
        } catch (za) {
            d(za)
        }
        try {
            var qb = LS(e);
            qb &&
                (b.publisherInitiatedExperimentDataProto = gM(HS(qb)))
        } catch (za) {
            var S;
            W.getInstance().report(214, {
                message: (S = za) == null ? void 0 : S.message
            })
        }
        b.topicsEnabled = IV(c, p, e);
        n && (b.quicksilverSignals = n);
        return b
    };
    var LV = function(a, b) {
        R.call(this);
        this.l = a;
        this.A = b;
        this.j = this.l.currentTime;
        this.g = new Xx(250);
        Os(this, this.g);
        this.o = new dG(this);
        Os(this, this.o);
        fG(this.o, this.g, "tick", this.C, !1, this)
    };
    r(LV, R);
    LV.prototype.Ab = function() {
        return this.j
    };
    LV.prototype.start = function() {
        MV(this);
        this.g.start()
    };
    LV.prototype.stop = function() {
        this.g.stop()
    };
    LV.prototype.C = function() {
        var a = this.l.currentTime;
        a !== this.Ab() && (this.j = a, MV(this))
    };
    var MV = function(a) {
        var b = {};
        b.currentTime = a.Ab();
        DL(a.A, "contentTimeUpdate", "contentTimeUpdate", b)
    };
    var NV = Gc && "srcdoc" in Rj(document, "IFRAME");

    function OV(a, b) {
        a.open("text/html", "replace");
        ij(a, cG(String(b)));
        a.close()
    };
    var PV = {
            rgb: !0,
            rgba: !0,
            alpha: !0,
            rect: !0,
            image: !0,
            "linear-gradient": !0,
            "radial-gradient": !0,
            "repeating-linear-gradient": !0,
            "repeating-radial-gradient": !0,
            "cubic-bezier": !0,
            matrix: !0,
            perspective: !0,
            rotate: !0,
            rotate3d: !0,
            rotatex: !0,
            rotatey: !0,
            steps: !0,
            rotatez: !0,
            scale: !0,
            scale3d: !0,
            scalex: !0,
            scaley: !0,
            scalez: !0,
            skew: !0,
            skewx: !0,
            skewy: !0,
            translate: !0,
            translate3d: !0,
            translatex: !0,
            translatey: !0,
            translatez: !0,
            "var": !0
        },
        QV = function(a) {
            a = Cb(a);
            if (a == "") return null;
            var b = String(a.slice(0, 4)).toLowerCase();
            if (("url(" < b ? -1 : "url(" == b ? 0 : 1) == 0) return null;
            if (a.indexOf("(") > 0) {
                if (/"|'/.test(a)) return null;
                b = /([\-\w]+)\(/g;
                for (var c; c = b.exec(a);)
                    if (!(c[1].toLowerCase() in PV)) return null
            }
            return a
        };

    function RV(a, b) {
        a = y[a];
        return a && a.prototype ? (b = Object.getOwnPropertyDescriptor(a.prototype, b)) && b.get || null : null
    }

    function SV(a) {
        var b = y.CSSStyleDeclaration;
        return b && b.prototype && b.prototype[a] || null
    }
    RV("Element", "attributes") || RV("Node", "attributes");
    RV("Element", "innerHTML") || RV("HTMLElement", "innerHTML");
    RV("Node", "nodeName");
    RV("Node", "nodeType");
    RV("Node", "parentNode");
    RV("Node", "childNodes");
    RV("HTMLElement", "style") || RV("Element", "style");
    RV("HTMLStyleElement", "sheet");
    var TV = SV("getPropertyValue"),
        UV = SV("setProperty");
    RV("Element", "namespaceURI") || RV("Node", "namespaceURI");

    function VV(a, b, c, d) {
        if (a) return a.apply(b, d);
        if (Dc && document.documentMode < 10) {
            if (!b[c].call) throw Error("IE Clobbering detected");
        } else if (typeof b[c] != "function") throw Error("Clobbering detected");
        return b[c].apply(b, d)
    };
    var WV = {
        "-webkit-border-horizontal-spacing": !0,
        "-webkit-border-vertical-spacing": !0
    };

    function XV(a) {
        if (!a) return "";
        var b = document.createElement("div").style;
        YV(a).forEach(function(c) {
            var d = Gc && c in WV ? c : c.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i, "");
            d.lastIndexOf("--", 0) != 0 && d.lastIndexOf("var", 0) != 0 && (c = VV(TV, a, a.getPropertyValue ? "getPropertyValue" : "getAttribute", [c]) || "", c = QV(c), c != null && VV(UV, b, b.setProperty ? "setProperty" : "setAttribute", [d, c]))
        });
        return b.cssText || ""
    }

    function YV(a) {
        Za(a) ? a = tc(a) : (a = yi(a), pc(a, "cssText"));
        return a
    };
    var ZV = function(a, b, c) {
        R.call(this);
        this.j = a;
        this.l = b;
        this.C = c;
        this.g = null;
        this.G = this.F = "";
        this.H = 0;
        this.o = this.slot = this.frameElement = null;
        this.A = ""
    };
    r(ZV, R);
    ZV.prototype.init = function(a) {
        this.A = a;
        a = "about:blank";
        Dc && (a = "");
        this.frameElement = Tj("IFRAME", {
            src: a,
            allowtransparency: !0,
            background: "transparent",
            title: "Advertisement"
        });
        fk(this.frameElement, {
            display: "none",
            width: "0",
            height: "0"
        });
        a = this.j.Kc;
        a.appendChild(this.frameElement);
        a = a.ownerDocument;
        a = a.defaultView || a.parentWindow;
        this.o == null && (this.o = new dG(this));
        this.o.listen(a, "message", this.K);
        a = '<body><script src="//imasdk.googleapis.com/js/sdkloader/loader.js">\x3c/script><script>loader = new VPAIDLoader(false, "' +
            (this.A + '");\x3c/script></body>');
        if (Xc || Vc || Ec) {
            var b = this.frameElement.contentWindow;
            b && OV(b.document, a)
        } else b = this.frameElement, NV ? (a = cG(a), b.srcdoc = ej(a)) : (b = b.contentWindow) && OV(b.document, a)
    };
    ZV.prototype.K = function(a) {
        try {
            var b = a.rc.data;
            try {
                var c = JSON.parse(b)
            } catch (u) {
                return
            }
            var d = c.session;
            if (d != null && this.A === d) switch (c.type) {
                case "friendlyReady":
                    var e = $V(this);
                    if (e != null) {
                        this.g = e;
                        this.F = e.currentSrc;
                        var f = e.style.cssText,
                            g = document.implementation.createHTMLDocument("").createElement("DIV");
                        g.style.cssText = f;
                        this.G = XV(g.style);
                        this.H = e.currentTime
                    } else {
                        var h = this.j.Kc,
                            k = "border: 0; margin: 0; padding: 0; position: absolute; ",
                            l = this.j.getSize();
                        k += "width:" + l.width + "px;";
                        k += "height:" +
                            l.height + "px;";
                        this.g = Tj("VIDEO", {
                            style: k,
                            autoplay: !0
                        });
                        h.appendChild(this.g)
                    }
                    var n = this.j.Kc;
                    h = "border: 0; margin: 0; padding: 0;position: absolute; ";
                    var p = ok(this.g);
                    h += "width:" + p.width + "px;";
                    h += "height:" + p.height + "px;";
                    this.slot = Tj("DIV", {
                        style: h
                    });
                    n.appendChild(this.slot);
                    try {
                        this.frameElement.contentWindow.loader.initFriendly(this.g, this.slot)
                    } catch (u) {
                        aW(this)
                    }
                    DL(this.l, "vpaid", "", b);
                    break;
                case "becameLinear":
                    this.g && !si() && !ri() && fk(this.g, {
                        visibility: "visible"
                    });
                    DL(this.l, "vpaid", "", b);
                    break;
                case "becameNonlinear":
                    bW(this);
                    DL(this.l, "vpaid", "", b);
                    break;
                case "startAd":
                    n = {};
                    if (this.g) {
                        k = this.g.paused;
                        var q = this.g.currentTime > 0;
                        n.apl = q && !k ? "1" : "0";
                        n.ip = k ? "1" : "0";
                        n.iavp = q ? "1" : "0"
                    } else n.apl = "n";
                    W.getInstance().report(99, n);
                    DL(this.l, "vpaid", "", b);
                    this.Kd();
                    break;
                default:
                    DL(this.l, "vpaid", "", b)
            }
        } catch (u) {
            aW(this)
        }
    };
    var aW = function(a) {
        var b = {
            type: "error"
        };
        b.session = a.A;
        b = JSON.stringify(b);
        a.postMessage(b)
    };
    ZV.prototype.postMessage = function(a) {
        window.postMessage(a, "*")
    };
    var $V = function(a) {
        return (a.C === "videoDisplayUnknown" ? a.j.ga : a.j.Qe.get(a.C)).g
    };
    ZV.prototype.Kd = function() {
        $V(this) != null && this.j.Kd()
    };
    var bW = function(a) {
        a.g && !si() && !ri() && fk(a.g, {
            visibility: "hidden"
        })
    };
    ZV.prototype.O = function() {
        Ms(this.o);
        this.o = null;
        Uj(this.slot);
        this.slot = null;
        Uj(this.frameElement);
        this.frameElement = null;
        var a = $V(this);
        a != null ? (a.style.cssText = this.G, si() || ri() ? (a.src = this.F, a.currentTime = this.H) : (a.removeAttribute("src"), this.j.Cb())) : (Uj(this.g), this.g = null);
        R.prototype.O.call(this)
    };
    var cW = function(a, b) {
        Q.call(this);
        this.j = a;
        this.l = b;
        this.g = new Map
    };
    r(cW, Q);
    var dW = function(a, b) {
        try {
            var c = b.session;
            switch (b.vpaidEventType) {
                case "createFriendlyIframe":
                    c = "videoDisplayUnknown";
                    b.videoDisplayName && (c = b.videoDisplayName);
                    var d = b.session,
                        e = new ZV(a.j, a.l, c);
                    a.g.set(d, e);
                    e.init(d);
                    break;
                case "vpaidNonLinear":
                    var f = a.g.get(c);
                    f && bW(f);
                    break;
                case "destroyFriendlyIframe":
                    var g = a.g.get(c);
                    g && (g.dispose(), a.g.delete(c))
            }
        } catch (h) {
            W.getInstance().report(125, {
                msg: h.message
            })
        }
    };
    cW.prototype.O = function() {
        this.g.forEach(function(a) {
            a.dispose()
        })
    };
    var eW = function(a) {
        this.D = C(a)
    };
    r(eW, I);
    eW.prototype.getValue = function() {
        return pg(this, 1)
    };
    eW.prototype.getVersion = function() {
        return F(this, 5)
    };
    var fW = Uh(eW);

    function gW() {
        this.g = [];
        this.j = []
    }
    m = gW.prototype;
    m.isEmpty = function() {
        return this.g.length === 0 && this.j.length === 0
    };
    m.clear = function() {
        this.g = [];
        this.j = []
    };
    m.contains = function(a) {
        return oc(this.g, a) || oc(this.j, a)
    };
    m.remove = function(a) {
        var b = this.g;
        b: {
            var c = b.length - 1;c < 0 && (c = Math.max(0, b.length + c));
            if (typeof b === "string") c = typeof a !== "string" || a.length != 1 ? -1 : b.lastIndexOf(a, c);
            else {
                for (; c >= 0; c--)
                    if (c in b && b[c] === a) break b;
                c = -1
            }
        }
        c >= 0 ? (qc(b, c), b = !0) : b = !1;
        return b || pc(this.j, a)
    };
    m.bc = function() {
        for (var a = [], b = this.g.length - 1; b >= 0; --b) a.push(this.g[b]);
        b = this.j.length;
        for (var c = 0; c < b; ++c) a.push(this.j[c]);
        return a
    };
    var Z = function(a, b, c, d, e, f, g, h) {
        R.call(this);
        var k = this;
        this.K = a;
        this.g = b;
        this.adTagUrl = c;
        this.da = d;
        this.ma = e;
        this.F = g;
        this.sa = h;
        this.H = null;
        this.o = new pT;
        this.U = !1;
        this.volume = 1;
        this.da = d;
        this.ca = -1;
        this.C = this.l = this.j = null;
        this.A = new LV({
            currentTime: 0
        }, this.F);
        this.G = new gW;
        this.ba = this.Aa = this.za = this.aa = !1;
        this.Ra = new cW(b, g);
        Os(this, this.Ra);
        this.P = f && this.g.Mb != null;
        this.V = function() {
            var l = k.g.ga,
                n = l.getCurrentTime();
            l = l.getDuration();
            return {
                currentTime: n,
                duration: l,
                isPlaying: !0,
                volume: k.volume
            }
        };
        this.M = new dG(this);
        Os(this, this.M);
        this.M.listen(this.F, "adsManager", this.tb)
    };
    r(Z, R);
    Z.prototype.tb = function(a) {
        var b = this,
            c = {
                type: a.messageType,
                data: a.ra
            };
        switch (c.type) {
            case "error":
                hW(this);
                iW(this, c.data);
                break;
            case "contentPauseRequested":
                W.getInstance().report(130);
                jW(this);
                this.A.stop();
                kW(this, c);
                break;
            case "contentResumeRequested":
                lW(this, function() {
                    kW(b, c)
                });
                break;
            case "remainingTime":
                this.ca = c.data.remainingTime;
                break;
            case "companionBackfill":
                a = Wa("window.google_show_companion_ad");
                a != null && a();
                break;
            case "skipShown":
                this.U = !0;
                kW(this, c);
                break;
            case "vpaidEvent":
                dW(this.Ra,
                    c.data);
                break;
            case "skippableStateChanged":
                a = c.data.adData;
                (a == null ? void 0 : a.skippable) != null && (this.U = a.skippable);
                kW(this, c);
                break;
            case "volumeChange":
                a = c.data.adData;
                a != null && typeof a.volume === "number" && (this.volume = a.volume);
                kW(this, c);
                break;
            case "firstQuartile":
                kW(this, {
                    type: sL.firstQuartile,
                    data: c.data
                });
                kW(this, c);
                break;
            case "thirdQuartile":
                kW(this, {
                    type: sL.thirdQuartile,
                    data: c.data
                });
                kW(this, c);
                break;
            case "updateGfpCookie":
                mW(this, c.data);
                break;
            default:
                kW(this, c)
        }
    };
    var kW = function(a, b) {
            var c = b.data.adData,
                d = null;
            c && (c.companions == null && a.H != null && (c.companions = a.H), d = new Y(c), a.j = d);
            switch (b.type) {
                case "adBreakReady":
                case "mediaUrlPinged":
                    b = new UU(b.type, null, b.data);
                    break;
                case "adMetadata":
                    c = null;
                    b.data.adCuePoints != null && (c = new oT(b.data.adCuePoints));
                    b = new VU(d, c);
                    break;
                case "allAdsCompleted":
                    a.j = null;
                    a.Aa = !0;
                    b = new UU(b.type, d);
                    break;
                case "contentPauseRequested":
                    a.ba = !1;
                    b = new UU(b.type, d);
                    break;
                case "contentResumeRequested":
                    a.j = null;
                    a.ba = !0;
                    b = new UU(b.type,
                        d);
                    break;
                case "loaded":
                    a.ca = d.getDuration();
                    a.U = !1;
                    if (a.ma && lL()) {
                        var e = a.K,
                            f = d,
                            g = a.ma;
                        e.j.set(lT(f), a.V);
                        lU(e) && kU(e, "loaded", lT(f), g)
                    }
                    b = new UU(b.type, d, c);
                    break;
                case "skip":
                    a.H = null;
                    b = new UU(b.type, d);
                    break;
                case "start":
                    c && (c = c.companions) && (a.H = c);
                    a.g.yc() != null && (a.l == null ? (a.l = new pS, a.M.listen(a.l, "click", a.Oh)) : tS(a.l), rS(a.l, a.g.yc()));
                    b = new UU(b.type, d);
                    break;
                case "complete":
                    a.l != null && tS(a.l);
                    lL() && nU(a.K, a.V, lT(d));
                    a.j = null;
                    a.H = null;
                    b = new UU(b.type, d);
                    break;
                case "log":
                    c = null;
                    e = b.data.logData;
                    e != null && e.type != null ? (f = e.type, f = f === "adLoadError" || f === "adPlayError") : f = !1;
                    f && (c = {
                        adError: new QU(e)
                    });
                    b = new UU(b.type, d, c);
                    break;
                case "interaction":
                    b = new UU(b.type, d, b.data.interactionData);
                    break;
                case "adProgress":
                    b = new UU(b.type, d, new WU(b.data));
                    break;
                default:
                    b = new UU(b.type, d)
            }
            R.prototype.dispatchEvent.call(a, b);
            a.Aa && a.ba && a.destroy()
        },
        iW = function(a, b) {
            var c = new SU(new QU(b));
            a.aa ? (R.prototype.dispatchEvent.call(a, c), lL() && a.j && nU(a.K, a.V, lT(a.j)), a.j = null) : a.G.j.push(c);
            a = {
                error: b.errorCode,
                vis: wm(document)
            };
            W.getInstance().report(7, a)
        },
        nW = function(a, b) {
            DL(a.F, "adsManager", b.type, b.data)
        },
        lW = function(a, b) {
            W.getInstance().report(131);
            hW(a, b);
            a.Ja() || a.A.start()
        },
        jW = function(a) {
            var b = a.g.ga;
            a.g.ya() && a.o.restoreCustomPlaybackStateOnAdBreakComplete && b.ma != null && b.ma()
        },
        hW = function(a, b) {
            var c = a.g.ga;
            a.g.ya() && a.o.restoreCustomPlaybackStateOnAdBreakComplete && c.U != null ? c.U(b) : b && b()
        };
    m = Z.prototype;
    m.addEventListener = function(a, b, c, d) {
        d && (console.warn("Handler scope is deprecated. Use arrow function or bind."), W.getInstance().report(217, {
            method: "AdsManager.addEventListener w/ handler scope"
        }));
        if (Array.isArray(a)) {
            console.warn("Array not supported. Listen for a single event type.");
            W.getInstance().report(217, {
                method: "AdsManager.addEventListener w/ array"
            });
            a = v(a);
            for (var e = a.next(); !e.done; e = a.next()) this.addEventListener(e.value, b, c, d)
        } else R.prototype.listen.call(this, a, b, c, d)
    };
    m.removeEventListener = function(a, b, c, d) {
        d && (console.warn("Handler scope is deprecated. Use arrow function or bind."), W.getInstance().report(217, {
            method: "AdsManager.removeEventListener w/ handler scope"
        }));
        if (Array.isArray(a)) {
            console.warn("Array not supported. Listen for a single event type.");
            W.getInstance().report(217, {
                method: "AdsManager.removeEventListener w/ array"
            });
            a = v(a);
            for (var e = a.next(); !e.done; e = a.next()) this.removeEventListener(e.value, b, c, d)
        } else R.prototype.ab.call(this, a, b, c, d)
    };
    m.Gf = function() {
        R.prototype.Ee.call(this)
    };
    m.listen = function() {
        throw Error("Not supported; use addEventListener instead.");
    };
    m.dispatchEvent = function() {
        console.error("Dispatching events is not supported.");
        W.getInstance().report(217, {
            method: "AdsManager.dispatchEvent"
        });
        return !1
    };
    m.configureAdsManager = function(a, b) {
        this.C = a;
        a.currentTime != null && (this.A = new LV(a, this.F), this.A.start());
        b != null && (this.o = oW(b))
    };
    m.init = function(a, b, c, d) {
        if (this.G.isEmpty()) {
            c = this.g;
            var e = null;
            c.j && d == null && (e = {
                vd: "setnull"
            });
            c.j && c.j === d && (e = {
                vd: "match"
            });
            if (c.j && c.j !== d) {
                e = kL(d || null);
                var f = OF(d || null);
                e = {
                    vd: "diff",
                    oc: c.K,
                    nc: e,
                    oi: c.H,
                    ni: f
                }
            }!c.j && d && (e = {
                vd: "new"
            });
            e && (e.custVid = c.G, W.getInstance().report(93, e));
            d != null && (c.C = NU(d), jL(c.C) && (c.F = !0, Ms(c.g), Ms(c.l), Ms(c.Fa), c.g = null, c.l = null, c.Fa = null, Ms(c.ga), c.ga = new rU(d), typeof d.getBoundingClientRect !== "function" ? (c.A = c.o, xK.l = c.A) : c.A = d, c.B.Pc(c.ga)));
            this.aa = !0;
            this.resize(a,
                b);
            d = this.o.fa(this.P);
            c = {};
            a = (c.adsRenderingSettings = d, c.width = a, c.height = b, c);
            nW(this, {
                type: "init",
                data: a
            })
        } else {
            for (; !this.G.isEmpty();) b = a = this.G, b.g.length === 0 && (b.g = b.j, b.g.reverse(), b.j = []), a = a.g.pop(), R.prototype.dispatchEvent.call(this, a);
            this.dispose()
        }
    };
    m.isCustomPlaybackUsed = function() {
        return this.g.ya()
    };
    m.isCustomClickTrackingUsed = function() {
        return this.P
    };
    m.getRemainingTime = function() {
        return this.ca
    };
    m.getAdSkippableState = function() {
        return this.U
    };
    m.discardAdBreak = function() {
        nW(this, {
            type: "discardAdBreak"
        })
    };
    m.updateAdsRenderingSettings = function(a) {
        if (a != null) {
            a = oW(a);
            var b = this.o.bitrate,
                c = a.bitrate;
            W.getInstance().report(96, {
                init: this.aa ? "1" : "0",
                start: this.za ? "1" : "0",
                old: b,
                "new": c,
                changed: b !== c ? "1" : "0"
            });
            this.o = a;
            a = this.o.fa(this.P);
            b = {};
            a = (b.adsRenderingSettings = a, b);
            nW(this, {
                type: "updateAdsRenderingSettings",
                data: a
            })
        }
    };
    m.skip = function() {
        nW(this, {
            type: "skip"
        })
    };
    m.start = function() {
        if (this.adTagUrl) {
            (Kc || Mc) && W.getInstance().report(50, {
                customPlayback: this.g.ya()
            });
            this.g.Ca() || W.getInstance().report(26, {
                adtagurl: this.adTagUrl,
                customPlayback: this.g.ya()
            });
            $r(this.g.o) && W.getInstance().report(30, {
                adtagurl: this.adTagUrl,
                customPlayback: this.g.ya()
            });
            var a = this.g.Mb,
                b = this.g.o,
                c;
            if (c = a && b && !$r(a)) a = iU(a), b = iU(b), c = a.width > 0 && a.height > 0 && b.width > 0 && b.height > 0 && a.left <= b.left + b.width && b.left <= a.left + a.width && a.top <= b.top + b.height && b.top <= a.top + a.height;
            b = c;
            W.getInstance().report(31, {
                adtagurl: this.adTagUrl,
                customPlayback: this.g.ya(),
                covers: b
            })
        }
        if (!this.g.Ca() && !this.g.ya()) throw UL(SL);
        b = this.g;
        b.L = this.P && b.Mb != null;
        this.g.B.frameElement.style.opacity = "1";
        if (this.C != null && this.getVolume() === 1) {
            var d, e;
            if (typeof((d = this.C) == null ? void 0 : d.muted) === "boolean" && ((e = this.C) == null ? 0 : e.muted)) this.setVolume(0);
            else {
                var f;
                if (typeof((f = this.C) == null ? void 0 : f.volume) === "number") {
                    var g;
                    d = (g = this.C) == null ? void 0 : g.volume;
                    if (d >= 0 && d <= 1) {
                        var h;
                        this.setVolume((h = this.C) == null ? void 0 : h.volume)
                    }
                }
            }
        }
        this.za = !0;
        nW(this, {
            type: "start"
        })
    };
    m.Oh = function() {
        if (!this.o.disableClickThrough && this.j != null) {
            var a = mT(this.j);
            a != null && sF(a, nT(this.j))
        }
    };
    m.resize = function(a, b) {
        var c = this.g,
            d = c.o;
        d != null && (a === -1 ? (d.style.right = "0", d.style.left = "0") : d.style.width = a + "px", b === -1 ? (d.style.bottom = "0", d.style.top = "0") : d.style.height = b + "px");
        d = c.B;
        d.frameElement.width = a === -1 ? "100%" : String(a);
        d.frameElement.height = b === -1 ? "100%" : String(b);
        try {
            d.frameElement.offsetTop = d.frameElement.offsetTop
        } catch (e) {}
        c.size = new Ij(a, b);
        c = {};
        a = (c.width = a, c.height = b, c);
        nW(this, {
            type: "resize",
            data: a
        })
    };
    m.stop = function() {
        nW(this, {
            type: "stop"
        })
    };
    m.expand = function() {
        nW(this, {
            type: "expand"
        })
    };
    m.collapse = function() {
        nW(this, {
            type: "collapse"
        })
    };
    m.getVolume = function() {
        return this.volume
    };
    m.setVolume = function(a) {
        this.volume = a;
        this.g.ga.setVolume(a);
        var b = {};
        a = (b.volume = a, b);
        nW(this, {
            type: "volume",
            data: a
        })
    };
    m.pause = function() {
        nW(this, {
            type: "pause"
        })
    };
    m.resume = function() {
        nW(this, {
            type: "resume"
        })
    };
    m.destroy = function() {
        this.dispose()
    };
    m.getCuePoints = function() {
        return this.da
    };
    m.eh = function() {
        return this.j
    };
    m.O = function() {
        nW(this, {
            type: "destroy"
        });
        this.l != null && this.l.dispose();
        this.M.dispose();
        this.G.clear();
        this.A && (this.A.stop(), this.A.dispose());
        lL() && nU(this.K, this.V);
        R.prototype.O.call(this)
    };
    m.Og = function() {
        W.getInstance().report(124, {
            api: "clicked"
        });
        var a = this.j && mT(this.j),
            b;
        if (a && ((b = this.j) == null ? 0 : b.wf())) {
            var c;
            sF(a, (c = this.j) == null ? void 0 : nT(c))
        }
        nW(this, {
            type: "click"
        })
    };
    m.focus = function() {
        DL(this.F, "userInteraction", "focusUiElement")
    };
    var mW = function(a, b) {
        var c = b.gfpCookieUserEnabled;
        b = b.gfpCookieClearData;
        var d = new eW;
        d = zg(d, 1, c ? "0" : "1");
        d = If(d, 2, He(2147483647));
        d = zg(d, 3, "/");
        d = zg(d, 4, window.location.hostname);
        var e = new hV,
            f, g;
        a = (g = (f = a.sa) == null ? void 0 : NK(f)) != null ? g : null;
        jV(e, "__gpi_opt_out", d, a);
        if (!c || b) kV(e, "__gads", a), kV(e, "__gpi", a)
    };
    Z.prototype.clicked = Z.prototype.Og;
    Z.prototype.getCurrentAd = Z.prototype.eh;
    Z.prototype.getCuePoints = Z.prototype.getCuePoints;
    Z.prototype.destroy = Z.prototype.destroy;
    Z.prototype.resume = Z.prototype.resume;
    Z.prototype.pause = Z.prototype.pause;
    Z.prototype.setVolume = Z.prototype.setVolume;
    Z.prototype.getVolume = Z.prototype.getVolume;
    Z.prototype.collapse = Z.prototype.collapse;
    Z.prototype.expand = Z.prototype.expand;
    Z.prototype.stop = Z.prototype.stop;
    Z.prototype.resize = Z.prototype.resize;
    Z.prototype.start = Z.prototype.start;
    Z.prototype.skip = Z.prototype.skip;
    Z.prototype.updateAdsRenderingSettings = Z.prototype.updateAdsRenderingSettings;
    Z.prototype.discardAdBreak = Z.prototype.discardAdBreak;
    Z.prototype.getAdSkippableState = Z.prototype.getAdSkippableState;
    Z.prototype.getRemainingTime = Z.prototype.getRemainingTime;
    Z.prototype.isCustomClickTrackingUsed = Z.prototype.isCustomClickTrackingUsed;
    Z.prototype.isCustomPlaybackUsed = Z.prototype.isCustomPlaybackUsed;
    Z.prototype.init = Z.prototype.init;
    Z.prototype.dispatchEvent = Z.prototype.dispatchEvent;
    Z.prototype.listen = Z.prototype.listen;
    Z.prototype.removeAllEventListeners = Z.prototype.Gf;

    function oW(a) {
        if (a instanceof pT) return W.getInstance().report(174, {
            valid: !0
        }), a;
        W.getInstance().report(174, {
            valid: !1
        });
        var b = new pT;
        b.append(a);
        return b
    };
    var pW = {
            ADS_MANAGER_LOADED: "adsManagerLoaded"
        },
        qW = function(a, b) {
            Ww.call(this, "adsManagerLoaded");
            this.g = a;
            this.j = b
        };
    r(qW, Ww);
    qW.prototype.getAdsManager = function(a, b) {
        a = a || {
            currentTime: null
        };
        this.g.configureAdsManager(a, b);
        return this.g
    };
    qW.prototype.getUserRequestContext = function() {
        return this.j
    };
    qW.prototype.getUserRequestContext = qW.prototype.getUserRequestContext;
    qW.prototype.getAdsManager = qW.prototype.getAdsManager;
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ads_manager_loaded_event.AdsManagerLoadedEvent.Type", pW);
    var sW = function(a) {
            var b = rW;
            if (b.j) return Promise.resolve(b.j);
            b = xS(b.g).then(function(c) {
                var d = c.serializedConfig;
                var e = c.errorMessage;
                if (d) d = Vy(d);
                else throw Error(e != null ? e : "Unknown PPC error");
                IS(d, a, c.latencyMs);
                return d
            }).catch(function(c) {
                W.getInstance().report(189, {
                    message: c.message
                });
                return null
            });
            return Promise.race([b, Zx(500, null)])
        },
        rW = new function() {
            var a;
            this.g = a = a === void 0 ? CS : a
        };

    function tW() {
        var a = a === void 0 ? y : a;
        return zj(a.top, "googlefcLoaded")
    };
    var uW = function(a) {
        Q.call(this);
        this.j = new qE(a, {
            timeoutMs: 500
        });
        this.l = new BK(a, {
            timeoutMs: 500
        });
        a = new GE(a, {
            timeoutMs: 500
        });
        this.g = new SS(a, 500);
        Os(this, this.g)
    };
    r(uW, Q);
    var vW = function(a) {
        var b, c, d, e, f, g, h, k, l, n, p, q, u, w, t, x, G, X, D, ea, ya, ca, Fa, Ga, T;
        return Qa(function(ha) {
            if (ha.g == 1) return b = Promise.resolve(null), sE(a.j) && (b = new Promise(function(Na) {
                vE(a.j, Na)
            })), c = Promise.resolve(null), mE(a.l.caller) && (c = new Promise(function(Na) {
                CK(a.l, Na)
            })), d = Promise.resolve(null), d = US(a.g), e = v, Ea(ha, Promise.all([c, b, d]), 2);
            f = e(ha.j);
            g = f.next().value;
            h = f.next().value;
            k = f.next().value;
            l = g;
            n = h;
            p = k;
            q = tW();
            T = {};
            return ha.return((T.gfcLoaded = q, T.addtlConsent = (D = (u = n) == null ? void 0 : u.addtlConsent) !=
                null ? D : null, T.gdprApplies = (ea = (w = n) == null ? void 0 : w.gdprApplies) != null ? ea : null, T.tcString = (ya = (t = n) == null ? void 0 : t.tcString) != null ? ya : null, T.uspString = (ca = (x = l) == null ? void 0 : x.uspString) != null ? ca : null, T.gppString = (Fa = (G = p) == null ? void 0 : G.gppString) != null ? Fa : null, T.gppSid = (Ga = (X = p) == null ? void 0 : X.sid) != null ? Ga : null, T))
        })
    };
    var wW = function(a, b) {
        this.g = a;
        this.j = b
    };
    var gS = sp(ZD),
        xW = function(a) {
            R.call(this);
            var b = this;
            this.P = new PS;
            this.A = null;
            var c = sK(wK(this.getSettings()));
            c && c.length > 0 && (co.reset(), fo(new jo(c)));
            this.C = new hV;
            this.l = null;
            this.o = a;
            this.F = new Map;
            this.j = this.o.B;
            this.H = new dG(this);
            Os(this, this.H);
            this.K = new uW(window);
            Os(this, this.K);
            this.M = new hS;
            kS(this.M);
            this.G = {};
            xK.g !== 0 ? (this.g = new fU, Os(this, this.g)) : this.g = gU();
            rp(VD) ? this.U = QS(this.P) : this.U = Promise.resolve(null);
            if (lL()) {
                this.g.init($T(this.j));
                var d = mU(this.g, this.o.A);
                Ns(this,
                    function() {
                        b.g.l.delete(d);
                        xK.g !== 0 && (K(Cw).o[d] = null)
                    });
                this.A = d
            }
            this.V = new wW(this.o, this.A)
        };
    r(xW, R);
    m = xW.prototype;
    m.addEventListener = function(a, b, c, d) {
        d && (console.warn("Handler scope is deprecated. Use arrow function or bind."), W.getInstance().report(217, {
            method: "AdsLoader.addEventListener w/ handler scope"
        }));
        if (Array.isArray(a)) throw Error("Array not supported. Listen for a single event type.");
        R.prototype.listen.call(this, a, b, c, d)
    };
    m.removeEventListener = function(a, b, c, d) {
        d && (console.warn("Handler scope is deprecated. Use arrow function or bind."), W.getInstance().report(217, {
            method: "AdsLoader.removeEventListener w/ handler scope"
        }));
        if (Array.isArray(a)) throw Error("Array not supported. Listen for a single event type.");
        R.prototype.ab.call(this, a, b, c, d)
    };
    m.Gf = function() {
        R.prototype.Ee.call(this)
    };
    m.listen = function() {
        throw Error("Not supported; use addEventListener instead.");
    };
    m.dispatchEvent = function() {
        throw Error("Dispatching events is not supported.");
    };
    m.destroy = function() {
        this.dispose()
    };
    m.getVersion = function() {
        return "h.3.709.0"
    };
    m.requestAds = function(a, b) {
        var c = this,
            d, e, f, g, h;
        return Qa(function(k) {
            if (k.g == 1) {
                if (!a.adTagUrl && !a.adsResponse) return d = {}, yW(c, (d.errorCode = 1013, d.errorMessage = "The ad request must either have an ad tag URL or an ads response.", d.type = "adLoadError", d), ""), k.return();
                e = "goog_" + oj++;
                c.F.set(e, b || null);
                return Ea(k, zW(c, a), 2)
            }
            f = k.j;
            g = f.data;
            h = f.sa;
            AW(c, e, h, g);
            k.g = 0
        })
    };
    var zW = function(a, b) {
        var c = b.adTagUrl || "",
            d = c.includes("GOOGLE_INSTREAM_VIDEO_NONCE"),
            e = vW(a.K),
            f = e.then(function(l) {
                if (rp(UD)) {
                    var n = Po();
                    n = E(n, Lo, 4);
                    n = n == null ? void 0 : kg(n, 2)
                } else n = !1;
                l = l || {};
                var p = !1;
                p = p === void 0 ? !1 : p;
                n = n === void 0 ? !1 : n;
                var q = new LE(c);
                var u = q.j;
                (q = Ab(q.g, "googleads.g.doubleclick.net") && VF("/pagead/(live/)?ads", u)) || (u = new cK(c), q = u.g, u = dK(u, u.j), q = !Ab(q, ".g.doubleclick.net") && (Ab(q, "doubleclick.net") || Ab(q, "pagead2.googlesyndication.com")) && VF("/(ad|pfad)[x|i|j]?/", u));
                q || (q = new LE(c),
                    u = q.j, q = Ab(q.g, "doubleclick.net") && VF("/gampad/(live/)?ads", u));
                (q = q || (new LE(c)).g == "bid.g.doubleclick.net") || (q = new LE(c), u = q.j, q = q.g === "ad.doubleclick.net" && VF("/dv3/adv", u));
                q || (q = new LE(c), u = q.j, q = q.g === "pubads.g.doubleclick.net" && (VF("/ssai/", u) || VF("/ondemand/", u)));
                return new HK(q, FK(c), l, p, n)
            });
        f.then(function(l) {
            $R(l, function() {
                BW(a, l)
            })
        });
        var g = CW(a, d, f),
            h = kS(a.M),
            k = c ? mK(c) : null;
        k = sW(k);
        return Promise.all([e, f, h, k, a.U, g]).then(function(l) {
            var n = v(l);
            l = n.next().value;
            var p = n.next().value;
            var q = n.next().value;
            var u = n.next().value;
            var w = n.next().value;
            sa(n);
            n = MK(p);
            var t = {},
                x = W.getInstance();
            x.report.call(x, 182, (t.aid = !!xK.A, t.aidf = !!a.l, t.hsc = !n && d, t));
            n = {};
            W.getInstance().report(155, (n.ws = fS(), n.blob = q != null ? q : "undef", n));
            if (w && a.P.g) try {
                var G = Wj(nq.querySelector("iframe[src^='//tpc.googlesyndication.com/sodar']"));
                n = {};
                var X = (n["0"] = "3", n["10"] = "", n["11"] = 2, n["12"] = 1, n);
                var D = (location.protocol.indexOf("https:") == 0 ? "https:" : "http:") + "//tpc.googlesyndication.com";
                G && G.postMessage(X,
                    D)
            } catch (uf) {}(G = vM(NK(p))) && (a.G.espSignals = G);
            X = a.getSettings().fa(lU(a.g));
            n = a.V;
            t = a.j.G;
            x = a.j.H;
            D = {};
            D.contentMediaUrl = n.g.Qd;
            D.customClickTrackingProvided = n.g.Mb != null;
            D.isAmp = pL();
            a: {
                try {
                    var ea = window.top.location.href
                } catch (uf) {
                    ea = 2;
                    break a
                }
                ea = ea == null ? 2 : ea == window.document.location.href ? 0 : 1
            }
            D.iframeState = ea;
            D.imaHostingDomain = window.document.domain;
            D.imaHostingPageUrl = window.document.URL;
            D.topAccessiblePageUrl = oL();
            D.referrer = window.document.referrer;
            D.domLoadTime = t;
            D.sdkImplLoadTime = x;
            D.supportsResizing = !n.g.ya();
            ea = Qj().location.ancestorOrigins;
            D.topOrigin = ea ? ea.length > 0 && ea[ea.length - 1].length < 200 ? ea[ea.length - 1] : "" : null;
            D.osdId = n.j;
            D.usesCustomVideoPlayback = n.g.ya();
            D.usesProxyMediaElement = n.g.Nd();
            D.usesInlinePlayback = n.g.Xf();
            n = n.g.Kc;
            ea = [];
            x = t = "";
            if (n != null) {
                t = n;
                x = !0;
                x = x === void 0 ? !1 : x;
                for (var ya = [], ca = 0; t && ca < 25; ++ca) {
                    var Fa = "";
                    x !== void 0 && x || (Fa = (Fa = t.nodeType !== 9 && t.id) ? "/" + Fa : "");
                    a: {
                        if (t && t.nodeName && t.parentElement) {
                            var Ga = t.nodeName.toString().toLowerCase();
                            for (var T = t.parentElement.childNodes,
                                    ha = 0, Na = 0; Na < T.length; ++Na) {
                                var qb = T[Na];
                                if (qb.nodeName && qb.nodeName.toString().toLowerCase() === Ga) {
                                    if (t === qb) {
                                        Ga = "." + ha;
                                        break a
                                    }++ha
                                }
                            }
                        }
                        Ga = ""
                    }
                    ya.push((t.nodeName && t.nodeName.toString().toLowerCase()) + Fa + Ga);
                    t = t.parentElement
                }
                t = ya.join();
                if (n) {
                    n = (n = n.ownerDocument) && (n.defaultView || n.parentWindow) || null;
                    x = [];
                    if (n) try {
                        var S = n.parent;
                        for (ya = 0; S && S !== n && ya < 25; ++ya) {
                            var za = S.frames;
                            for (ca = 0; ca < za.length; ++ca)
                                if (n === za[ca]) {
                                    x.push(ca);
                                    break
                                }
                            n = S;
                            S = n.parent
                        }
                    } catch (uf) {}
                    x = x.join()
                } else x = ""
            }
            ea.push(t, x);
            if (c !=
                null) {
                for (S = 0; S < gE.length - 1; ++S) ea.push(hp(c, gE[S]) || "");
                S = hp(c, "videoad_start_delay");
                za = "";
                S && (S = parseInt(S, 10), za = S < 0 ? "postroll" : S == 0 ? "preroll" : "midroll");
                ea.push(za)
            } else
                for (S = 0; S < gE.length; ++S) ea.push("");
            S = (D.videoAdKey = ip(ea.join(":")).toString(), D);
            za = a.C;
            a: {
                try {
                    var Rb = a.o,
                        lc = new il;
                    var Ba = Rb.Kc,
                        Jc = Ba.clientWidth,
                        jd = Ba.clientHeight;
                    if (typeof Ba.getBoundingClientRect === "function" && Vj(Kj(Ba), Ba)) {
                        var xe = Ba.getBoundingClientRect();
                        var ye = document.elementsFromPoint(xe.x + .5 * Jc, xe.y + .5 * jd)
                    } else ye = [];
                    var Td = QL(ye, Rb);
                    if (Td) {
                        var Kg = new hl,
                            Ji = Td.getBoundingClientRect(),
                            Jl = Ji.y,
                            Kl = Ji.x,
                            Ll = new fl;
                        var Ml = xg(Ll, 1, Jl);
                        var Nl = xg(Ml, 2, Kl);
                        var Lg = Td.duration,
                            Ol = Td.clientWidth,
                            Pl = Td.clientHeight,
                            Ql = new gl;
                        var Rl = xg(Ql, 1, Ol);
                        var Sl = xg(Rl, 2, Pl);
                        if (Lg !== Number.POSITIVE_INFINITY && !isNaN(Lg)) {
                            var Tl = new el;
                            var Ul = wg(Tl, 1, Lg);
                            dg(Kg, 3, Ul)
                        }
                        var Vl = Number(window.getComputedStyle(Td).opacity),
                            Wl = dg(Kg, 1, Nl);
                        var Xl = dg(Wl, 2, Sl);
                        wg(Xl, 4, Vl);
                        var Ki = dg(lc, 2, Kg)
                    } else {
                        var Yl = new hl;
                        Ki = dg(lc, 2, Yl)
                    }
                    var Li = Ki.fa();
                    break a
                } catch (uf) {
                    var Mi;
                    W.getInstance().report(212, {
                        message: (Mi = uf) == null ? void 0 : Mi.message
                    }, !0)
                }
                Li = null
            }
            return {
                data: KV(b, l, p, q, u, w, G, X, S, za, Li),
                sa: p
            }
        })
    };
    xW.prototype.getSettings = function() {
        return xK
    };
    xW.prototype.contentComplete = function() {
        DL($T(this.j), "adsLoader", "contentComplete")
    };
    var DW = function(a, b, c) {
            b.length !== 0 && (b = aS(b.map(function(d) {
                return {
                    Pg: d,
                    Ak: !1,
                    zk: !1
                }
            }), c)) && b.forEach(function(d) {
                d.then(function(e) {
                    e && BW(a, c)
                })
            })
        },
        BW = function(a, b) {
            if (b = vM(NK(b))) a.G.espSignals = b, DL($T(a.j), "adsLoader", "signalsRefresh", a.G)
        },
        EW = function(a, b) {
            var c = a.F.get(b);
            a.F.delete(b);
            return c != null ? c : null
        },
        yW = function(a, b, c) {
            c = new SU(new QU(b), EW(a, c));
            R.prototype.dispatchEvent.call(a, c);
            a = {
                error: b.errorCode,
                vis: wm(document)
            };
            W.getInstance().report(7, a)
        },
        AW = function(a, b, c, d) {
            b = $T(a.j, b);
            a.H.listen(b,
                "adsLoader",
                function(e) {
                    var f = e.messageType;
                    switch (f) {
                        case "adsLoaded":
                            f = e.ra;
                            e = e.Oc;
                            f = new Z(a.g, a.o, f.adTagUrl || "", f.adCuePoints, a.A, f.isCustomClickTrackingAllowed, $T(a.j, e), c);
                            e = new qW(f, EW(a, e));
                            R.prototype.dispatchEvent.call(a, e);
                            break;
                        case "error":
                            yW(a, e.ra, e.Oc);
                            break;
                        case "cookieUpdate":
                            e = e.ra;
                            if (e == null) break;
                            if (xK.isCookiesEnabled()) {
                                f = new DK;
                                f = ug(f, 5, !0);
                                var g = e.gfpCookie;
                                g && jV(a.C, "__gads", fW(g), f);
                                (g = e.gfpCookieV2) && jV(a.C, "__gpi", fW(g), f)
                            }
                            if (g = e.eoidCookie) {
                                f = new eV;
                                g = fW(g);
                                var h = sm(ng(g,
                                    2)) - Date.now() / 1E3;
                                h = {
                                    nd: Math.max(h, 0),
                                    path: pg(g, 3),
                                    domain: pg(g, 4),
                                    Gd: !1
                                };
                                dV("__eoi", g.getValue(), h, f.g)
                            }
                            DW(a, e.encryptedSignalBidderIds || [], c);
                            break;
                        case "trackingUrlPinged":
                            R.prototype.dispatchEvent.call(a, new UU(f, null, e.ra))
                    }
                });
            DL(b, "adsLoader", "requestAds", d)
        },
        CW = function(a, b, c) {
            var d, e;
            return Qa(function(f) {
                if (f.g == 1) return Ea(f, c, 2);
                if (f.g != 3) {
                    d = f.j;
                    if (MK(d)) return a.l = null, f.return();
                    if (!b) return f.return();
                    a.l || (a.l = new zL, AL(a.l));
                    return Ea(f, a.l.getId(), 3)
                }
                e = f.j;
                xK.A = e.id || "";
                f.g = 0
            })
        };
    xW.prototype.contentComplete = xW.prototype.contentComplete;
    xW.prototype.getSettings = xW.prototype.getSettings;
    xW.prototype.requestAds = xW.prototype.requestAds;
    xW.prototype.getVersion = xW.prototype.getVersion;
    xW.prototype.destroy = xW.prototype.destroy;
    xW.prototype.dispatchEvent = xW.prototype.dispatchEvent;
    xW.prototype.listen = xW.prototype.listen;
    var FW = function() {
        this.l = this.j = "unknown";
        this.g = "0";
        this.preferredLinearOrientation = 0;
        this.adsResponse = null;
        this.adTagUrl = "";
        this.contentTitle = this.contentKeywords = this.contentDuration = null;
        this.forceNonLinearFullSlot = !1;
        this.nonLinearAdSlotWidth = this.nonLinearAdSlotHeight = this.liveStreamPrefetchSeconds = this.linearAdSlotWidth = this.linearAdSlotHeight = 0;
        this.omidAccessModeRules = {};
        this.pageUrl = null;
        this.preferredLinearOrientation = 0;
        this.vastLoadTimeout = 5E3
    };
    FW.prototype.fa = function() {
        var a = {};
        a.adsResponse = this.adsResponse;
        a.videoPlayActivation = this.j;
        a.videoPlayMuted = this.l;
        a.videoContinuousPlay = this.g;
        a.adTagUrl = this.adTagUrl;
        a.contentDuration = this.contentDuration;
        a.contentKeywords = this.contentKeywords;
        a.contentTitle = this.contentTitle;
        a.linearAdSlotWidth = this.linearAdSlotWidth;
        a.linearAdSlotHeight = this.linearAdSlotHeight;
        a.nonLinearAdSlotWidth = this.nonLinearAdSlotWidth;
        a.nonLinearAdSlotHeight = this.nonLinearAdSlotHeight;
        a.forceNonLinearFullSlot = this.forceNonLinearFullSlot;
        a.liveStreamPrefetchSeconds = this.liveStreamPrefetchSeconds;
        a.vastLoadTimeout = this.vastLoadTimeout;
        a.omidAccessModeRules = this.omidAccessModeRules;
        a.pageUrl = this.pageUrl;
        return a
    };
    FW.prototype.setAdWillAutoPlay = function(a) {
        this.j = a ? "auto" : "click"
    };
    FW.prototype.setAdWillPlayMuted = function(a) {
        this.l = a ? "muted" : "unmuted"
    };
    FW.prototype.setContinuousPlayback = function(a) {
        this.g = a ? "2" : "1"
    };
    FW.prototype.setContinuousPlayback = FW.prototype.setContinuousPlayback;
    FW.prototype.setAdWillPlayMuted = FW.prototype.setAdWillPlayMuted;
    FW.prototype.setAdWillAutoPlay = FW.prototype.setAdWillAutoPlay;
    z("google.ima.AdCuePoints.POSTROLL", -1, window);
    z("google.ima.AdCuePoints.PREROLL", 0, window);
    z("google.ima.AdDisplayContainer", OU, window);
    z("google.ima.AdError.ErrorCode", iK, window);
    z("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_USED", -1, window);
    z("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_REQUIRED", -1, window);
    z("google.ima.AdError.ErrorCode.VAST_MEDIA_ERROR", -1, window);
    z("google.ima.AdError.ErrorCode.ADSLOT_NOT_VISIBLE", -1, window);
    z("google.ima.AdError.ErrorCode.OVERLAY_AD_LOADING_FAILED", -1, window);
    z("google.ima.AdError.ErrorCode.VAST_MALFORMED_RESPONSE", -1, window);
    z("google.ima.AdError.ErrorCode.COMPANION_AD_LOADING_FAILED", -1, window);
    z("google.ima.AdError.Type", PU, window);
    z("google.ima.AdErrorEvent.Type", RU, window);
    z("google.ima.AdEvent.Type", TU, window);
    z("google.ima.AdsLoader", xW, window);
    z("google.ima.AdsManagerLoadedEvent.Type", pW, window);
    z("google.ima.CompanionAdSelectionSettings", JL, window);
    z("google.ima.CompanionAdSelectionSettings.CreativeType", FL);
    z("google.ima.CompanionAdSelectionSettings.ResourceType", GL);
    z("google.ima.CompanionAdSelectionSettings.SizeCriteria", HL);
    z("google.ima.CustomContentLoadedEvent.Type.CUSTOM_CONTENT_LOADED", "deprecated-event", window);
    z("ima.ImaSdkSettings", U, window);
    z("google.ima.settings", xK, window);
    z("google.ima.ImaSdkSettings.CompanionBackfillMode", {
        ALWAYS: "always",
        ON_MASTER_AD: "on_master_ad"
    });
    z("google.ima.ImaSdkSettings.VpaidMode", {
        DISABLED: 0,
        ENABLED: 1,
        INSECURE: 2,
        0: "DISABLED",
        1: "ENABLED",
        2: "INSECURE"
    });
    z("google.ima.AdsRenderingSettings", pT, window);
    z("google.ima.AdsRenderingSettings.AUTO_SCALE", -1, window);
    z("google.ima.AdsRequest", FW, window);
    z("google.ima.VideoOrientation", {
        ak: 0,
        Cj: 1,
        Kj: 2,
        Tj: 3,
        0: "UNSET",
        1: "LANDSCAPE",
        2: "PORTRAIT",
        3: "SQUARE"
    }, window);
    z("google.ima.VERSION", "3.709.0");
    z("google.ima.OmidAccessMode", {
        LIMITED: "limited",
        DOMAIN: "limited",
        FULL: "full"
    });
    z("google.ima.OmidVerificationVendor", {
        COMSCORE: 7,
        DOUBLEVERIFY: 3,
        GOOGLE: 9,
        INTEGRAL_AD_SCIENCE: 4,
        MEETRICS: 8,
        MOAT: 2,
        NIELSEN: 6,
        PIXELATE: 5,
        OTHER: 1,
        7: "COMSCORE",
        3: "DOUBLEVERIFY",
        9: "GOOGLE",
        4: "INTEGRAL_AD_SCIENCE",
        8: "MEETRICS",
        2: "MOAT",
        6: "NIELSEN",
        5: "PIXELATE",
        1: "OTHER"
    });
    z("google.ima.UiElements", {
        AD_ATTRIBUTION: "adAttribution",
        COUNTDOWN: "countdown"
    });
    z("google.ima.ViewMode", {
        NORMAL: "normal",
        FULLSCREEN: "fullscreen"
    });
    z("google.ima.secureSignals", {
        clearAllCache: function() {
            var a = window.localStorage;
            if (a !== void 0)
                for (var b = v(Object.keys(a)), c = b.next(); !c.done; c = b.next())
                    if (c = c.value, c.startsWith("_GESPSK")) try {
                        a.removeItem(c)
                    } catch (d) {}
            nM = new mM
        }
    });
    var GW = function(a, b, c) {
            this.j = c;
            b.length === 0 && (b = [
                []
            ]);
            this.g = b.map(function(d) {
                d = a.concat(d);
                for (var e = [], f = 0, g = 0; f < d.length;) {
                    var h = d[f++];
                    if (h < 128) e[g++] = String.fromCharCode(h);
                    else if (h > 191 && h < 224) {
                        var k = d[f++];
                        e[g++] = String.fromCharCode((h & 31) << 6 | k & 63)
                    } else if (h > 239 && h < 365) {
                        k = d[f++];
                        var l = d[f++],
                            n = d[f++];
                        h = ((h & 7) << 18 | (k & 63) << 12 | (l & 63) << 6 | n & 63) - 65536;
                        e[g++] = String.fromCharCode(55296 + (h >> 10));
                        e[g++] = String.fromCharCode(56320 + (h & 1023))
                    } else k = d[f++], l = d[f++], e[g++] = String.fromCharCode((h & 15) << 12 |
                        (k & 63) << 6 | l & 63)
                }
                return new RegExp(e.join(""))
            })
        },
        HW = function(a, b) {
            return b ? a.g.some(function(c) {
                c = b.match(c);
                return c == null ? !1 : !a.j || c.length >= 1 && c[1] === "3.709.0" || c.length >= 2 && c[2] === "3.709.0" ? !0 : !1
            }) : !1
        },
        IW = [94, 40, 63, 58, 104, 116, 116, 112, 115, 63, 58, 41, 63, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 106, 115, 47, 40, 115, 100, 107, 108, 111, 97, 100, 101, 114, 124, 99, 111, 114, 101, 41, 47],
        JW = [94, 40, 63, 58, 104, 116, 116, 112, 115, 63, 58, 41, 63, 47, 47, 115, 48, 92, 46, 50, 109, 100,
            110, 92, 46, 110, 101, 116, 47, 105, 110, 115, 116, 114, 101, 97, 109, 47, 104, 116, 109, 108, 53, 47
        ],
        KW = [94, 40, 63, 58, 104, 116, 116, 112, 115, 63, 58, 41, 63, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 112, 97, 108, 47, 115, 100, 107, 108, 111, 97, 100, 101, 114, 47],
        LW = [
            [105, 109, 97, 51, 92, 46, 106, 115],
            [105, 109, 97, 51, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115],
            [105, 109, 97, 51, 95, 101, 97, 112, 46, 106, 115]
        ],
        MW = [
            [98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 40, 95, 40, 91, 97,
                45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108
            ],
            [98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 95, 100, 101, 98, 117, 103, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108],
            [98, 114, 105, 100, 103, 101, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108]
        ],
        NW = new GW(IW, LW, !1);
    new GW(IW, MW, !0);
    var OW = new GW(JW, LW, !1);
    new GW(JW, MW, !0);
    var PW = new GW([94, 40, 63, 58, 104, 116, 116, 112, 115, 63, 58, 41, 63, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 112, 114, 101, 114, 101, 108, 101, 97, 115, 101, 47, 106, 115, 47, 91, 48, 45, 57, 93, 43, 46, 91, 48, 45, 57, 46, 93, 43, 47], LW, !1),
        QW = new GW([94, 40, 63, 58, 104, 116, 116, 112, 115, 63, 58, 41, 63, 47, 47, 40, 112, 97, 103, 101, 97, 100, 50, 124, 116, 112, 99, 41, 92, 46, 103, 111, 111, 103, 108, 101, 115, 121, 110, 100, 105, 99, 97, 116, 105, 111, 110, 92, 46, 99, 111, 109, 47, 112, 97, 103, 101, 97, 100, 47, 40, 103, 97, 100, 103,
            101, 116, 115, 124, 106, 115, 41, 47
        ], [], !1);
    new GW(IW, [
        [100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108],
        [100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 95, 100, 101, 98, 117, 103, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108],
        [100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125,
            41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108
        ],
        [100, 97, 105, 95, 99, 116, 118, 95, 105, 102, 114, 97, 109, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108],
        [100, 97, 105, 95, 99, 116, 118, 95, 105, 102, 114, 97, 109, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 95, 100, 101, 98, 117, 103, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108],
        [100, 97, 105, 95, 99, 116, 118, 95, 105,
            102, 114, 97, 109, 101, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108
        ]
    ], !0);
    new GW(KW, [
        [112, 97, 108, 46, 106, 115]
    ], !1);
    new GW(KW, [
        [99, 97, 115, 116, 95, 112, 97, 108, 46, 106, 115]
    ], !1);
    new GW(KW, [
        [99, 116, 118, 95, 112, 97, 108, 46, 106, 115]
    ], !1);

    function RW(a, b) {
        for (var c = {}, d = 0; d < b.length; c = {
                Ie: void 0
            }, d++)
            if (c.Ie = b[d], a.some(function(e) {
                    return function(f) {
                        return HW(f, e.Ie.src)
                    }
                }(c))) return c.Ie;
        return null
    };
    if (! function(a) {
            if (a.some(function(c) {
                    return HW(c, Qj().location.href)
                })) return !0;
            var b = RW(a, document.querySelectorAll("SCRIPT"));
            b == null && document.querySelectorAll && (b = RW(a, document.querySelectorAll("script")));
            return b != null
        }([NW, PW, OW, QW])) throw Error("IMA SDK is either not loaded from a google domain or is not a supported version.");
    var SW, TW = Po();
    SW = E(TW, Eo, 3);
    var UW = rW,
        VW = SW != null ? SW : null,
        WW = oL(),
        XW;
    if (VW) {
        var YW = pg(VW, 1);
        if (YW && (new URL(WW)).hostname.includes(YW)) {
            var ZW = E(VW, di, 2);
            XW = ZW ? ZW : null
        } else XW = null
    } else XW = null;
    var $W = XW;
    if ($W) UW.j = $W;
    else {
        var yS = UW.g,
            ES = {
                pageUrl: WW
            };
        try {
            var zS = DS();
            if (!zS) throw Error("Could not generate config URL");
            BS()
        } catch (a) {
            AS(yS, a)
        }
    };
})();