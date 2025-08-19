/*
 Platform.js <https://mths.be/platform>
 Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
 Copyright 2011-2013 John-David Dalton
 Available under MIT license <https://mths.be/mit>
*/
(function() {
    var a = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
        c = "undefined" !== typeof module && module.exports,
        b = function() {
            for (var f, g = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "), "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "),
                    "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")
                ], k = 0, w = g.length, h = {}; k < w; k++)
                if ((f = g[k]) && f[1] in a) {
                    for (k = 0; k < f.length; k++) h[g[0][k]] = f[k];
                    return h
                }
            return !1
        }(),
        e = {
            change: b.fullscreenchange,
            error: b.fullscreenerror
        },
        d = {
            request: function(f) {
                return new Promise(function(g, k) {
                    var w = function() {
                        this.off("change",
                            w);
                        g()
                    }.bind(this);
                    this.on("change", w);
                    f = f || a.documentElement;
                    Promise.resolve(f[b.requestFullscreen]())["catch"](k)
                }.bind(this))
            },
            exit: function() {
                return new Promise(function(f, g) {
                    if (this.isFullscreen) {
                        var k = function() {
                            this.off("change", k);
                            f()
                        }.bind(this);
                        this.on("change", k);
                        Promise.resolve(a[b.exitFullscreen]())["catch"](g)
                    } else f()
                }.bind(this))
            },
            toggle: function(f) {
                return this.isFullscreen ? this.exit() : this.request(f)
            },
            onchange: function(f) {
                this.on("change", f)
            },
            onerror: function(f) {
                this.on("error", f)
            },
            on: function(f, g) {
                var k = e[f];
                k && a.addEventListener(k, g, !1)
            },
            off: function(f, g) {
                var k = e[f];
                k && a.removeEventListener(k, g, !1)
            },
            raw: b
        };
    b ? (Object.defineProperties(d, {
        isFullscreen: {
            get: function() {
                return !!a[b.fullscreenElement]
            }
        },
        element: {
            enumerable: !0,
            get: function() {
                return a[b.fullscreenElement]
            }
        },
        isEnabled: {
            enumerable: !0,
            get: function() {
                return !!a[b.fullscreenEnabled]
            }
        }
    }), c ? module.exports = d : window.screenfull = d) : c ? module.exports = {
        isEnabled: !1
    } : window.screenfull = {
        isEnabled: !1
    }
})();
(function() {
    function a(n) {
        n = String(n);
        return n.charAt(0).toUpperCase() + n.slice(1)
    }

    function c(n, z) {
        var E = -1,
            x = n ? n.length : 0;
        if ("number" == typeof x && -1 < x && x <= p)
            for (; ++E < x;) z(n[E], E, n);
        else e(n, z)
    }

    function b(n) {
        n = String(n).replace(/^ +| +$/g, "");
        return /^(?:webOS|i(?:OS|P))/.test(n) ? n : a(n)
    }

    function e(n, z) {
        for (var E in n) B.call(n, E) && z(n[E], E, n)
    }

    function d(n) {
        return null == n ? a(n) : C.call(n).slice(8, -1)
    }

    function f(n, z) {
        var E = null != n ? typeof n[z] : "number";
        return !/^(?:boolean|number|string|undefined)$/.test(E) &&
            ("object" == E ? !!n[z] : !0)
    }

    function g(n) {
        return String(n).replace(/([ -])(?!$)/g, "$1?")
    }

    function k(n, z) {
        var E = null;
        c(n, function(x, m) {
            E = z(E, x, m, n)
        });
        return E
    }

    function w(n) {
        function z(V) {
            return k(V, function(S, P) {
                var W = P.pattern || g(P);
                !S && (S = RegExp("\\b" + W + " *\\d+[.\\w_]*", "i").exec(n) || RegExp("\\b" + W + " *\\w+-[\\w]*", "i").exec(n) || RegExp("\\b" + W + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(n)) && ((S = String(P.label && !RegExp(W, "i").test(P.label) ? P.label : S).split("/"))[1] && !/[\d.]+/.test(S[0]) && (S[0] +=
                    " " + S[1]), P = P.label || P, S = b(S[0].replace(RegExp(W, "i"), P).replace(RegExp("; *(?:" + P + "[_-])?", "i"), " ").replace(RegExp("(" + P + ")[-_.]?(\\w)", "i"), "$1 $2")));
                return S
            })
        }

        function E(V) {
            return k(V, function(S, P) {
                return S || (RegExp(P + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(n) || 0)[1] || null
            })
        }
        var x = l,
            m = n && "object" == typeof n && "String" != d(n);
        m && (x = n, n = null);
        var A = x.navigator || {},
            y = A.userAgent || "";
        n || (n = y);
        var M = m ? !!A.likeChrome : /\bChrome\b/.test(n) && !/internal|\n/i.test(C.toString()),
            K = m ? "Object" : "ScriptBridgingProxyObject",
            R = m ? "Object" : "Environment",
            H = m && x.java ? "JavaPackage" : d(x.java),
            I = m ? "Object" : "RuntimeObject";
        R = (H = /\bJava/.test(H) && x.java) && d(x.environment) == R;
        var Q = H ? "a" : "\u03b1",
            Y = H ? "b" : "\u03b2",
            aa = x.document || {},
            U = x.operamini || x.opera,
            ba = u.test(ba = m && U ? U["[[Class]]"] : d(U)) ? ba : U = null,
            r, v = n;
        m = [];
        var G = null,
            O = n == y;
        y = O && U && "function" == typeof U.version && U.version();
        var L = function(V) {
                return k(V, function(S, P) {
                    return S || RegExp("\\b" + (P.pattern || g(P)) + "\\b", "i").exec(n) && (P.label ||
                        P)
                })
            }([{
                label: "EdgeHTML",
                pattern: "Edge"
            }, "Trident", {
                label: "WebKit",
                pattern: "AppleWebKit"
            }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
            D = function(V) {
                return k(V, function(S, P) {
                    return S || RegExp("\\b" + (P.pattern || g(P)) + "\\b", "i").exec(n) && (P.label || P)
                })
            }(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
                    label: "Microsoft Edge",
                    pattern: "Edge"
                }, "Midori", "Nook Browser",
                "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
                    label: "Samsung Internet",
                    pattern: "SamsungBrowser"
                }, "SeaMonkey", {
                    label: "Silk",
                    pattern: "(?:Cloud9|Silk-Accelerated)"
                }, "Sleipnir", "SlimBrowser", {
                    label: "SRWare Iron",
                    pattern: "Iron"
                }, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", {
                    label: "Opera Mini",
                    pattern: "OPiOS"
                }, "Opera", {
                    label: "Opera",
                    pattern: "OPR"
                }, "Chrome", {
                    label: "Chrome Mobile",
                    pattern: "(?:CriOS|CrMo)"
                }, {
                    label: "Firefox",
                    pattern: "(?:Firefox|Minefield)"
                }, {
                    label: "Firefox for iOS",
                    pattern: "FxiOS"
                },
                {
                    label: "IE",
                    pattern: "IEMobile"
                }, {
                    label: "IE",
                    pattern: "MSIE"
                }, "Safari"
            ]),
            N = z([{
                    label: "BlackBerry",
                    pattern: "BB10"
                }, "BlackBerry", {
                    label: "Galaxy S",
                    pattern: "GT-I9000"
                }, {
                    label: "Galaxy S2",
                    pattern: "GT-I9100"
                }, {
                    label: "Galaxy S3",
                    pattern: "GT-I9300"
                }, {
                    label: "Galaxy S4",
                    pattern: "GT-I9500"
                }, {
                    label: "Galaxy S5",
                    pattern: "SM-G900"
                }, {
                    label: "Galaxy S6",
                    pattern: "SM-G920"
                }, {
                    label: "Galaxy S6 Edge",
                    pattern: "SM-G925"
                }, {
                    label: "Galaxy S7",
                    pattern: "SM-G930"
                }, {
                    label: "Galaxy S7 Edge",
                    pattern: "SM-G935"
                }, "Google TV", "Lumia", "iPad",
                "iPod", "iPhone", "Kindle", {
                    label: "Kindle Fire",
                    pattern: "(?:Cloud9|Silk-Accelerated)"
                }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
                    label: "Wii U",
                    pattern: "WiiU"
                }, "Wii", "Xbox One", {
                    label: "Xbox 360",
                    pattern: "Xbox"
                }, "Xoom"
            ]),
            T = function(V) {
                return k(V, function(S, P, W) {
                    return S || (P[N] || P[/^[a-z]+(?: +[a-z]+\b)*/i.exec(N)] || RegExp("\\b" + g(W) + "(?:\\b|\\w*\\d)", "i").exec(n)) && W
                })
            }({
                Apple: {
                    iPad: 1,
                    iPhone: 1,
                    iPod: 1
                },
                Archos: {},
                Amazon: {
                    Kindle: 1,
                    "Kindle Fire": 1
                },
                Asus: {
                    Transformer: 1
                },
                "Barnes & Noble": {
                    Nook: 1
                },
                BlackBerry: {
                    PlayBook: 1
                },
                Google: {
                    "Google TV": 1,
                    Nexus: 1
                },
                HP: {
                    TouchPad: 1
                },
                HTC: {},
                LG: {},
                Microsoft: {
                    Xbox: 1,
                    "Xbox One": 1
                },
                Motorola: {
                    Xoom: 1
                },
                Nintendo: {
                    "Wii U": 1,
                    Wii: 1
                },
                Nokia: {
                    Lumia: 1
                },
                Samsung: {
                    "Galaxy S": 1,
                    "Galaxy S2": 1,
                    "Galaxy S3": 1,
                    "Galaxy S4": 1
                },
                Sony: {
                    PlayStation: 1,
                    "PlayStation Vita": 1
                }
            }),
            F = function(V) {
                return k(V, function(S, P) {
                    var W = P.pattern || g(P);
                    if (!S && (S = RegExp("\\b" + W + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(n))) {
                        var Z = S,
                            ca = P.label || P,
                            da = {
                                "10.0": "10",
                                "6.4": "10 Technical Preview",
                                "6.3": "8.1",
                                "6.2": "8",
                                "6.1": "Server 2008 R2 / 7",
                                "6.0": "Server 2008 / Vista",
                                "5.2": "Server 2003 / XP 64-bit",
                                "5.1": "XP",
                                "5.01": "2000 SP1",
                                "5.0": "2000",
                                "4.0": "NT",
                                "4.90": "ME"
                            };
                        W && ca && /^Win/i.test(Z) && !/^Windows Phone /i.test(Z) && (da = da[/[\d.]+$/.exec(Z)]) && (Z = "Windows " + da);
                        Z = String(Z);
                        W && ca && (Z = Z.replace(RegExp(W, "i"), ca));
                        S = Z = b(Z.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/,
                            "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
                    }
                    return S
                })
            }(["Windows Phone", "Android", "CentOS", {
                    label: "Chrome OS",
                    pattern: "CrOS"
                }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X",
                "Macintosh", "Mac", "Windows 98;", "Windows "
            ]);
        L && (L = [L]);
        T && !N && (N = z([T]));
        if (r = /\bGoogle TV\b/.exec(N)) N = r[0];
        /\bSimulator\b/i.test(n) && (N = (N ? N + " " : "") + "Simulator");
        "Opera Mini" == D && /\bOPiOS\b/.test(n) && m.push("running in Turbo/Uncompressed mode");
        "IE" == D && /\blike iPhone OS\b/.test(n) ? (r = w(n.replace(/like iPhone OS/, "")), T = r.manufacturer, N = r.product) : /^iP/.test(N) ? (D || (D = "Safari"), F = "iOS" + ((r = / OS ([\d_]+)/i.exec(n)) ? " " + r[1].replace(/_/g, ".") : "")) : "Konqueror" != D || /buntu/i.test(F) ? T && "Google" != T &&
            (/Chrome/.test(D) && !/\bMobile Safari\b/i.test(n) || /\bVita\b/.test(N)) || /\bAndroid\b/.test(F) && /^Chrome/.test(D) && /\bVersion\//i.test(n) ? (D = "Android Browser", F = /\bAndroid\b/.test(F) ? F : "Android") : "Silk" == D ? (/\bMobi/i.test(n) || (F = "Android", m.unshift("desktop mode")), /Accelerated *= *true/i.test(n) && m.unshift("accelerated")) : "PaleMoon" == D && (r = /\bFirefox\/([\d.]+)\b/.exec(n)) ? m.push("identifying as Firefox " + r[1]) : "Firefox" == D && (r = /\b(Mobile|Tablet|TV)\b/i.exec(n)) ? (F || (F = "Firefox OS"), N || (N = r[1])) : !D ||
            (r = !/\bMinefield\b/i.test(n) && /\b(?:Firefox|Safari)\b/.exec(D)) ? (D && !N && /[\/,]|^[^(]+?\)/.test(n.slice(n.indexOf(r + "/") + 8)) && (D = null), (r = N || T || F) && (N || T || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(F)) && (D = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(F) ? F : r) + " Browser")) : "Electron" == D && (r = (/\bChrome\/([\d.]+)\b/.exec(n) || 0)[1]) && m.push("Chromium " + r) : F = "Kubuntu";
        y || (y = E(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", g(D),
            "(?:Firefox|Minefield|NetFront)"
        ]));
        if (r = "iCab" == L && 3 < parseFloat(y) && "WebKit" || /\bOpera\b/.test(D) && (/\bOPR\b/.test(n) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(n) && !/^(?:Trident|EdgeHTML)$/.test(L) && "WebKit" || !L && /\bMSIE\b/i.test(n) && ("Mac OS" == F ? "Tasman" : "Trident") || "WebKit" == L && /\bPlayStation\b(?! Vita\b)/i.test(D) && "NetFront") L = [r];
        "IE" == D && (r = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(n) || 0)[1]) ? (D += " Mobile", F = "Windows Phone " + (/\+$/.test(r) ? r : r + ".x"), m.unshift("desktop mode")) : /\bWPDesktop\b/i.test(n) ?
            (D = "IE Mobile", F = "Windows Phone 8.x", m.unshift("desktop mode"), y || (y = (/\brv:([\d.]+)/.exec(n) || 0)[1])) : "IE" != D && "Trident" == L && (r = /\brv:([\d.]+)/.exec(n)) && (D && m.push("identifying as " + D + (y ? " " + y : "")), D = "IE", y = r[1]);
        if (O) {
            if (f(x, "global"))
                if (H && (r = H.lang.System, v = r.getProperty("os.arch"), F = F || r.getProperty("os.name") + " " + r.getProperty("os.version")), R) {
                    try {
                        y = x.require("ringo/engine").version.join("."), D = "RingoJS"
                    } catch (V) {
                        (r = x.system) && r.global.system == x.system && (D = "Narwhal", F || (F = r[0].os || null))
                    }
                    D ||
                        (D = "Rhino")
                } else "object" == typeof x.process && !x.process.browser && (r = x.process) && ("object" == typeof r.versions && ("string" == typeof r.versions.electron ? (m.push("Node " + r.versions.node), D = "Electron", y = r.versions.electron) : "string" == typeof r.versions.nw && (m.push("Chromium " + y, "Node " + r.versions.node), D = "NW.js", y = r.versions.nw)), D || (D = "Node.js", v = r.arch, F = r.platform, y = (y = /[\d.]+/.exec(r.version)) ? y[0] : null));
            else d(r = x.runtime) == K ? (D = "Adobe AIR", F = r.flash.system.Capabilities.os) : d(r = x.phantom) == I ? (D = "PhantomJS",
                y = (r = r.version || null) && r.major + "." + r.minor + "." + r.patch) : "number" == typeof aa.documentMode && (r = /\bTrident\/(\d+)/i.exec(n)) ? (y = [y, aa.documentMode], (r = +r[1] + 4) != y[1] && (m.push("IE " + y[1] + " mode"), L && (L[1] = ""), y[1] = r), y = "IE" == D ? String(y[1].toFixed(1)) : y[0]) : "number" == typeof aa.documentMode && /^(?:Chrome|Firefox)\b/.test(D) && (m.push("masking as " + D + " " + y), D = "IE", y = "11.0", L = ["Trident"], F = "Windows");
            F = F && b(F)
        }
        y && (r = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(y) || /(?:alpha|beta)(?: ?\d)?/i.exec(n + ";" + (O &&
            A.appMinorVersion)) || /\bMinefield\b/i.test(n) && "a") && (G = /b/i.test(r) ? "beta" : "alpha", y = y.replace(RegExp(r + "\\+?$"), "") + ("beta" == G ? Y : Q) + (/\d+\+?/.exec(r) || ""));
        if ("Fennec" == D || "Firefox" == D && /\b(?:Android|Firefox OS)\b/.test(F)) D = "Firefox Mobile";
        else if ("Maxthon" == D && y) y = y.replace(/\.[\d.]+/, ".x");
        else if (/\bXbox\b/i.test(N)) "Xbox 360" == N && (F = null), "Xbox 360" == N && /\bIEMobile\b/.test(n) && m.unshift("mobile mode");
        else if (!/^(?:Chrome|IE|Opera)$/.test(D) && (!D || N || /Browser|Mobi/.test(D)) || "Windows CE" !=
            F && !/Mobi/i.test(n))
            if ("IE" == D && O) try {
                null === x.external && m.unshift("platform preview")
            } catch (V) {
                m.unshift("embedded")
            } else(/\bBlackBerry\b/.test(N) || /\bBB10\b/.test(n)) && (r = (RegExp(N.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(n) || 0)[1] || y) ? (r = [r, /BB10/.test(n)], F = (r[1] ? (N = null, T = "BlackBerry") : "Device Software") + " " + r[0], y = null) : this != e && "Wii" != N && (O && U || /Opera/.test(D) && /\b(?:MSIE|Firefox)\b/i.test(n) || "Firefox" == D && /\bOS X (?:\d+\.){2,}/.test(F) || "IE" == D && (F && !/^Win/.test(F) && 5.5 < y || /\bWindows XP\b/.test(F) &&
                8 < y || 8 == y && !/\bTrident\b/.test(n))) && !u.test(r = w.call(e, n.replace(u, "") + ";")) && r.name && (r = "ing as " + r.name + ((r = r.version) ? " " + r : ""), u.test(D) ? (/\bIE\b/.test(r) && "Mac OS" == F && (F = null), r = "identify" + r) : (r = "mask" + r, D = ba ? b(ba.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(r) && (F = null), O || (y = null)), L = ["Presto"], m.push(r));
            else D += " Mobile";
        if (r = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(n) || 0)[1]) {
            r = [parseFloat(r.replace(/\.(\d)$/, ".0$1")), r];
            if ("Safari" == D && "+" == r[1].slice(-1)) D = "WebKit Nightly", G =
                "alpha", y = r[1].slice(0, -1);
            else if (y == r[1] || y == (r[2] = (/\bSafari\/([\d.]+\+?)/i.exec(n) || 0)[1])) y = null;
            r[1] = (/\bChrome\/([\d.]+)/i.exec(n) || 0)[1];
            537.36 == r[0] && 537.36 == r[2] && 28 <= parseFloat(r[1]) && "WebKit" == L && (L = ["Blink"]);
            O && (M || r[1]) ? (L && (L[1] = "like Chrome"), r = r[1] || (r = r[0], 530 > r ? 1 : 532 > r ? 2 : 532.05 > r ? 3 : 533 > r ? 4 : 534.03 > r ? 5 : 534.07 > r ? 6 : 534.1 > r ? 7 : 534.13 > r ? 8 : 534.16 > r ? 9 : 534.24 > r ? 10 : 534.3 > r ? 11 : 535.01 > r ? 12 : 535.02 > r ? "13+" : 535.07 > r ? 15 : 535.11 > r ? 16 : 535.19 > r ? 17 : 536.05 > r ? 18 : 536.1 > r ? 19 : 537.01 > r ? 20 : 537.11 > r ? "21+" :
                537.13 > r ? 23 : 537.18 > r ? 24 : 537.24 > r ? 25 : 537.36 > r ? 26 : "Blink" != L ? "27" : "28")) : (L && (L[1] = "like Safari"), r = (r = r[0], 400 > r ? 1 : 500 > r ? 2 : 526 > r ? 3 : 533 > r ? 4 : 534 > r ? "4+" : 535 > r ? 5 : 537 > r ? 6 : 538 > r ? 7 : 601 > r ? 8 : "8"));
            L && (L[1] += " " + (r += "number" == typeof r ? ".x" : /[.+]/.test(r) ? "" : "+"));
            "Safari" == D && (!y || 45 < parseInt(y)) && (y = r)
        }
        "Opera" == D && (r = /\bzbov|zvav$/.exec(F)) ? (D += " ", m.unshift("desktop mode"), "zvav" == r ? (D += "Mini", y = null) : D += "Mobile", F = F.replace(RegExp(" *" + r + "$"), "")) : "Safari" == D && /\bChrome\b/.exec(L && L[1]) && (m.unshift("desktop mode"),
            D = "Chrome Mobile", y = null, /\bOS X\b/.test(F) ? (T = "Apple", F = "iOS 4.3+") : F = null);
        y && 0 == y.indexOf(r = /[\d.]+$/.exec(F)) && -1 < n.indexOf("/" + r + "-") && (F = String(F.replace(r, "")).replace(/^ +| +$/g, ""));
        L && !/\b(?:Avant|Nook)\b/.test(D) && (/Browser|Lunascape|Maxthon/.test(D) || "Safari" != D && /^iOS/.test(F) && /\bSafari\b/.test(L[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(D) && L[1]) && (r = L[L.length - 1]) && m.push(r);
        m.length && (m = ["(" + m.join("; ") + ")"]);
        T && N && 0 > N.indexOf(T) &&
            m.push("on " + T);
        N && m.push((/^on /.test(m[m.length - 1]) ? "" : "on ") + N);
        if (F) {
            var X = (r = / ([\d.+]+)$/.exec(F)) && "/" == F.charAt(F.length - r[0].length - 1);
            F = {
                architecture: 32,
                family: r && !X ? F.replace(r[0], "") : F,
                version: r ? r[1] : null,
                toString: function() {
                    var V = this.version;
                    return this.family + (V && !X ? " " + V : "") + (64 == this.architecture ? " 64-bit" : "")
                }
            }
        }(r = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(v)) && !/\bi686\b/i.test(v) ? (F && (F.architecture = 64, F.family = F.family.replace(RegExp(" *" + r), "")), D && (/\bWOW64\b/i.test(n) || O && /\w(?:86|32)$/.test(A.cpuClass ||
            A.platform) && !/\bWin64; x64\b/i.test(n)) && m.unshift("32-bit")) : F && /^OS X/.test(F.family) && "Chrome" == D && 39 <= parseFloat(y) && (F.architecture = 64);
        n || (n = null);
        x = {};
        x.description = n;
        x.layout = L && L[0];
        x.manufacturer = T;
        x.name = D;
        x.prerelease = G;
        x.product = N;
        x.ua = n;
        x.version = D && y;
        x.os = F || {
            architecture: null,
            family: null,
            version: null,
            toString: function() {
                return "null"
            }
        };
        x.parse = w;
        x.toString = function() {
            return this.description || ""
        };
        x.version && m.unshift(y);
        x.name && m.unshift(D);
        F && D && (F != String(F).split(" ")[0] || F != D.split(" ")[0] &&
            !N) && m.push(N ? "(" + F + ")" : "on " + F);
        m.length && (x.description = m.join(" "));
        return x
    }
    var h = {
            "function": !0,
            object: !0
        },
        l = h[typeof window] && window || this,
        q = h[typeof exports] && exports;
    h = h[typeof module] && module && !module.nodeType && module;
    var t = q && h && "object" == typeof global && global;
    !t || t.global !== t && t.window !== t && t.self !== t || (l = t);
    var p = Math.pow(2, 53) - 1,
        u = /\bOpera/;
    t = Object.prototype;
    var B = t.hasOwnProperty,
        C = t.toString,
        J = w();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (l.platform = J, define(function() {
            return J
        })) :
        q && h ? e(J, function(n, z) {
            q[z] = n
        }) : l.platform = J
}).call(this);
var s_iScaleFactor = 1,
    s_iOffsetX, s_iOffsetY, s_bIsIphone = !1,
    s_bFocus = !0,
    browserName = function(a) {
        switch (!0) {
            case -1 < a.indexOf("edge"):
                return "MS Edge";
            case -1 < a.indexOf("edg/"):
                return "Edge ( chromium based)";
            case -1 < a.indexOf("opr") && !!window.opr:
                return "Opera";
            case -1 < a.indexOf("chrome") && !!window.chrome:
                return "Chrome";
            case -1 < a.indexOf("trident"):
                return "MS IE";
            case -1 < a.indexOf("firefox"):
                return "Mozilla Firefox";
            case -1 < a.indexOf("safari"):
                return "Safari";
            default:
                return "other"
        }
    }(window.navigator.userAgent.toLowerCase());
window.addEventListener("resize", function(a) {
    sizeHandler()
}, !0);

function trace(a) {
    console.log(a)
}

function getSize(a) {
    var c = a.toLowerCase(),
        b = window.document,
        e = b.documentElement;
    if (void 0 === window["inner" + a]) a = e["client" + a];
    else if (window["inner" + a] != e["client" + a]) {
        var d = b.createElement("body");
        d.id = "vpw-test-b";
        d.style.cssText = "overflow:scroll";
        var f = b.createElement("div");
        f.id = "vpw-test-d";
        f.style.cssText = "position:absolute;top:-1000px";
        f.innerHTML = "<style>@media(" + c + ":" + e["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + c + ":7px!important}}</style>";
        d.appendChild(f);
        e.insertBefore(d, b.head);
        a = 7 == f["offset" + a] ? e["client" + a] : window["inner" + a];
        e.removeChild(d)
    } else a = window["inner" + a];
    return a
}
window.addEventListener("orientationchange", onOrientationChange);

function onOrientationChange() {
    window.matchMedia("(orientation: portrait)").matches && sizeHandler();
    window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}

function getNearestNumber(a, c) {
    if (2 > (b = a.length)) return b - 1;
    for (var b, e = Math.abs(a[--b] - c); b-- && !(e < (e = Math.abs(a[b] - c))););
    return b + 1
}

function isChrome() {
    return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
}

function isIOS() {
    if (isIpad()) return !0;
    for (var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";"); a.length;)
        if (navigator.platform === a.pop()) return s_bIsIphone = !0;
    return s_bIsIphone = !1
}

function isIpad() {
    var a = -1 !== navigator.userAgent.toLowerCase().indexOf("ipad");
    return !a && navigator.userAgent.match(/Mac/) && navigator.maxTouchPoints && 2 < navigator.maxTouchPoints ? !0 : a
}

function htmlMarkupToNode(a) {
    var c = document.createElement("template");
    c.innerHTML = a;
    return c.content.cloneNode(!0)
}

function isMobile() {
    return isIpad() ? !0 : navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ? !0 : !1
}

function getIOSWindowHeight() {
    return document.documentElement.clientWidth / window.innerWidth * window.innerHeight
}

function getHeightOfIOSToolbars() {
    var a = (0 === window.orientation ? screen.height : screen.width) - getIOSWindowHeight();
    return 1 < a ? a : 0
}

function inIframe() {
    try {
        return window.self !== window.top
    } catch (a) {
        return !0
    }
}

function sizeHandler() {
    window.scrollTo(0, 1);
    if (document.querySelector("#canvas")) {
        navigator.userAgent.match(/(iPad|iPhone|iPod)/g);
        var a = null !== platform.name && "safari" === platform.name.toLowerCase() ? getIOSWindowHeight() : getSize("Height");
        var c = getSize("Width");
        s_bFocus && _checkOrientation(c, a);
        var b = Math.min(a / CANVAS_HEIGHT, c / CANVAS_WIDTH),
            e = Math.round(CANVAS_WIDTH * b);
        b = Math.round(CANVAS_HEIGHT * b);
        if (b < a) {
            var d = a - b;
            b += d;
            e += CANVAS_WIDTH / CANVAS_HEIGHT * d
        } else e < c && (d = c - e, e += d, b += CANVAS_HEIGHT / CANVAS_WIDTH *
            d);
        d = a / 2 - b / 2;
        var f = c / 2 - e / 2,
            g = CANVAS_WIDTH / e;
        if (f * g < -EDGEBOARD_X || d * g < -EDGEBOARD_Y) b = Math.min(a / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y), c / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), e = Math.round(CANVAS_WIDTH * b), b = Math.round(CANVAS_HEIGHT * b), d = (a - b) / 2, f = (c - e) / 2, g = CANVAS_WIDTH / e;
        s_iOffsetX = -1 * f * g;
        s_iOffsetY = -1 * d * g;
        0 <= d && (s_iOffsetY = 0);
        0 <= f && (s_iOffsetX = 0);
        null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oSelectPlayers && s_oSelectPlayers.refreshButtonPos(s_iOffsetX,
            s_iOffsetY);
        null !== s_oLevelMenu && s_oLevelMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        s_bIsIphone && s_oStage ? (canvas = document.getElementById("canvas"), s_oStage.canvas.width = 2 * e, s_oStage.canvas.height = 2 * b, canvas.style.width = e + "px", canvas.style.height = b + "px", c = Math.min(e / CANVAS_WIDTH, b / CANVAS_HEIGHT), s_iScaleFactor = 2 * c, s_oStage.scaleX = s_oStage.scaleY = 2 * c) : s_bMobile || isChrome() ? (document.querySelector("#canvas").style.width = e + "px", document.querySelector("#canvas").style.height = b + "px") : s_oStage && (s_oStage.canvas.width =
            e, s_oStage.canvas.height = b, s_iScaleFactor = Math.min(e / CANVAS_WIDTH, b / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
        0 <= d && (d = (a - b) / 2);
        document.querySelector("#canvas").style.top = d + "px";
        document.querySelector("#canvas").style.left = f + "px";
        fullscreenHandler()
    }
}

function _checkOrientation(a, c) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (a > c ? "landscape" === document.querySelector(".orientation-msg-container").getAttribute("data-orientation") ? (document.querySelector(".orientation-msg-container").style.display = "none", s_oMain.startUpdate()) : (document.querySelector(".orientation-msg-container").style.display = "block", s_oMain.stopUpdate()) : "portrait" === document.querySelector(".orientation-msg-container").getAttribute("data-orientation") ? (document.querySelector(".orientation-msg-container").style.display =
        "none", s_oMain.startUpdate()) : (document.querySelector(".orientation-msg-container").style.display = "block", s_oMain.stopUpdate()))
}

function playSound(a, c, b) {
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) s_aSounds[a].play(), s_aSounds[a].volume(c), s_aSounds[a].loop(b);
    return null
}

function stopSound(a) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].stop()
}

function setVolume(a, c) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].volume(c)
}

function setMute(a, c) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].mute(c)
}

function createBitmap(a, c, b) {
    var e = new createjs.Bitmap(a),
        d = new createjs.Shape;
    c && b ? d.graphics.beginFill("#fff").drawRect(0, 0, c, b) : d.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
    e.hitArea = d;
    return e
}

function createSprite(a, c, b, e, d, f) {
    a = null !== c ? new createjs.Sprite(a, c) : new createjs.Sprite(a);
    c = new createjs.Shape;
    c.graphics.beginFill("#000000").drawRect(-b, -e, d, f);
    a.hitArea = c;
    return a
}

function pad(a, c, b) {
    a += "";
    return a.length >= c ? a : Array(c - a.length + 1).join(b || "0") + a
}

function randomSign() {
    return .5 >= Math.random() ? 1 : -1
}

function randomFloatBetween(a, c, b) {
    "undefined" === typeof b && (b = 2);
    return parseFloat(Math.min(a + Math.random() * (c - a), c).toFixed(b))
}

function rotateVector2D(a, c) {
    var b = c.getX() * Math.cos(a) + c.getY() * Math.sin(a),
        e = c.getX() * -Math.sin(a) + c.getY() * Math.cos(a);
    c.set(b, e)
}

function tweenVectorsOnX(a, c, b) {
    return a + b * (c - a)
}

function shuffle(a) {
    for (var c = a.length, b, e; 0 !== c;) e = Math.floor(Math.random() * c), --c, b = a[c], a[c] = a[e], a[e] = b;
    return a
}

function centerBetweenPointsV2(a, c) {
    var b = new CVector2;
    b.set(.5 * (a.getX() + c.getX()), .5 * (a.getY() + c.getY()));
    return b
}

function bubbleSort(a) {
    do {
        var c = !1;
        for (var b = 0; b < a.length - 1; b++) a[b] > a[b + 1] && (c = a[b], a[b] = a[b + 1], a[b + 1] = c, c = !0)
    } while (c)
}

function compare(a, c) {
    return a.index > c.index ? -1 : a.index < c.index ? 1 : 0
}

function easeLinear(a, c, b, e) {
    return b * a / e + c
}

function easeInQuad(a, c, b, e) {
    return b * (a /= e) * a + c
}

function easeInSine(a, c, b, e) {
    return -b * Math.cos(a / e * (Math.PI / 2)) + b + c
}

function easeInCubic(a, c, b, e) {
    return b * (a /= e) * a * a + c
}

function getTrajectoryPoint(a, c) {
    var b = new createjs.Point,
        e = (1 - a) * (1 - a),
        d = a * a;
    b.x = e * c.start.x + 2 * (1 - a) * a * c.traj.x + d * c.end.x;
    b.y = e * c.start.y + 2 * (1 - a) * a * c.traj.y + d * c.end.y;
    return b
}

function formatTime(a) {
    a /= 1E3;
    var c = Math.floor(a / 60);
    a = parseFloat(a - 60 * c).toFixed(1);
    var b = "";
    b = 10 > c ? b + ("0" + c + ":") : b + (c + ":");
    return 10 > a ? b + ("0" + a) : b + a
}

function degreesToRadians(a) {
    return a * Math.PI / 180
}

function checkRectCollision(a, c) {
    var b = getBounds(a, .9);
    var e = getBounds(c, .98);
    return calculateIntersection(b, e)
}

function calculateIntersection(a, c) {
    var b, e, d, f;
    var g = a.x + (b = a.width / 2);
    var k = a.y + (e = a.height / 2);
    var w = c.x + (d = c.width / 2);
    var h = c.y + (f = c.height / 2);
    g = Math.abs(g - w) - (b + d);
    k = Math.abs(k - h) - (e + f);
    return 0 > g && 0 > k ? (g = Math.min(Math.min(a.width, c.width), -g), k = Math.min(Math.min(a.height, c.height), -k), {
        x: Math.max(a.x, c.x),
        y: Math.max(a.y, c.y),
        width: g,
        height: k,
        rect1: a,
        rect2: c
    }) : null
}

function getBounds(a, c) {
    var b = {
        x: Infinity,
        y: Infinity,
        width: 0,
        height: 0
    };
    if (a instanceof createjs.Container) {
        b.x2 = -Infinity;
        b.y2 = -Infinity;
        var e = a.children,
            d = e.length,
            f;
        for (f = 0; f < d; f++) {
            var g = getBounds(e[f], 1);
            g.x < b.x && (b.x = g.x);
            g.y < b.y && (b.y = g.y);
            g.x + g.width > b.x2 && (b.x2 = g.x + g.width);
            g.y + g.height > b.y2 && (b.y2 = g.y + g.height)
        }
        Infinity == b.x && (b.x = 0);
        Infinity == b.y && (b.y = 0);
        Infinity == b.x2 && (b.x2 = 0);
        Infinity == b.y2 && (b.y2 = 0);
        b.width = b.x2 - b.x;
        b.height = b.y2 - b.y;
        delete b.x2;
        delete b.y2
    } else {
        if (a instanceof createjs.Bitmap) {
            d =
                a.sourceRect || a.image;
            f = d.width * c;
            var k = d.height * c
        } else if (a instanceof createjs.Sprite)
            if (a.spriteSheet._frames && a.spriteSheet._frames[a.currentFrame] && a.spriteSheet._frames[a.currentFrame].image) {
                d = a.spriteSheet.getFrame(a.currentFrame);
                f = d.rect.width;
                k = d.rect.height;
                e = d.regX;
                var w = d.regY
            } else b.x = a.x || 0, b.y = a.y || 0;
        else b.x = a.x || 0, b.y = a.y || 0;
        e = e || 0;
        f = f || 0;
        w = w || 0;
        k = k || 0;
        b.regX = e;
        b.regY = w;
        d = a.localToGlobal(0 - e, 0 - w);
        g = a.localToGlobal(f - e, k - w);
        f = a.localToGlobal(f - e, 0 - w);
        e = a.localToGlobal(0 - e, k - w);
        b.x =
            Math.min(Math.min(Math.min(d.x, g.x), f.x), e.x);
        b.y = Math.min(Math.min(Math.min(d.y, g.y), f.y), e.y);
        b.width = Math.max(Math.max(Math.max(d.x, g.x), f.x), e.x) - b.x;
        b.height = Math.max(Math.max(Math.max(d.y, g.y), f.y), e.y) - b.y
    }
    return b
}

function NoClickDelay(a) {
    this.element = a;
    window.Touch && this.element.addEventListener("touchstart", this, !1)
}

function shuffle(a) {
    for (var c = a.length, b, e; 0 < c;) e = Math.floor(Math.random() * c), c--, b = a[c], a[c] = a[e], a[e] = b;
    return a
}
NoClickDelay.prototype = {
    handleEvent: function(a) {
        switch (a.type) {
            case "touchstart":
                this.onTouchStart(a);
                break;
            case "touchmove":
                this.onTouchMove(a);
                break;
            case "touchend":
                this.onTouchEnd(a)
        }
    },
    onTouchStart: function(a) {
        a.preventDefault();
        this.moved = !1;
        this.element.addEventListener("touchmove", this, !1);
        this.element.addEventListener("touchend", this, !1)
    },
    onTouchMove: function(a) {
        this.moved = !0
    },
    onTouchEnd: function(a) {
        this.element.removeEventListener("touchmove", this, !1);
        this.element.removeEventListener("touchend",
            this, !1);
        if (!this.moved) {
            a = document.elementFromPoint(a.changedTouches[0].clientX, a.changedTouches[0].clientY);
            3 == a.nodeType && (a = a.parentNode);
            var c = document.createEvent("MouseEvents");
            c.initEvent("click", !0, !0);
            a.dispatchEvent(c)
        }
    }
};
(function() {
    function a(b) {
        var e = {
            focus: "visible",
            focusin: "visible",
            pageshow: "visible",
            blur: "hidden",
            focusout: "hidden",
            pagehide: "hidden"
        };
        b = b || window.event;
        b.type in e ? document.body.className = e[b.type] : (document.body.className = this[c] ? "hidden" : "visible", "hidden" === document.body.className ? (s_oMain.stopUpdate(), s_bFocus = !1) : (s_oMain.startUpdate(), s_bFocus = !0))
    }
    var c = "hidden";
    c in document ? document.addEventListener("visibilitychange", a) : (c = "mozHidden") in document ? document.addEventListener("mozvisibilitychange",
        a) : (c = "webkitHidden") in document ? document.addEventListener("webkitvisibilitychange", a) : (c = "msHidden") in document ? document.addEventListener("msvisibilitychange", a) : "onfocusin" in document ? document.onfocusin = document.onfocusout = a : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a
})();

function ctlArcadeResume() {
    null !== s_oMain && s_oMain.startUpdate()
}

function ctlArcadePause() {
    null !== s_oMain && s_oMain.stopUpdate()
}

function getParamValue(a) {
    for (var c = window.location.search.substring(1).split("&"), b = 0; b < c.length; b++) {
        var e = c[b].split("=");
        if (e[0] == a) return e[1]
    }
}
String.prototype.format = function() {
    for (var a = this, c = arguments.length; c--;) a = a.replace(new RegExp("\\{" + c + "\\}", "gm"), arguments[c]);
    return a
};

function radiansToDegree(a) {
    return 180 / Math.PI * a
}

function distance(a, c) {
    var b = a.getX() - c.getX(),
        e = a.getY() - c.getY();
    return Math.sqrt(b * b + e * e)
}

function fixEnemyTremble(a, c) {
    var b = !1; - 5 < a.getX() - c.m_pCenter().getX() && 5 > a.getX() - c.m_pCenter().getX() && (b = !0);
    return b
}

function distanceBetween2Points(a, c, b, e) {
    return Math.sqrt(Math.pow(b - a, 2) + Math.pow(e - c, 2))
}

function distanceBetween2PointsV2(a, c, b, e) {
    return Math.pow(b - a, 2) + Math.pow(e - c, 2)
}

function collideEdgeWithCircle(a, c, b) {
    a = closestPointOnLine(a.getPointA(), a.getPointB(), c);
    c = distanceV2(c, a);
    return b < c ? null : {
        distance: c,
        closest_point: a
    }
}

function closestPointOnLine(a, c, b) {
    var e = new CVector2,
        d = new CVector2;
    e.setV(a);
    d.setV(c);
    var f = new CVector2;
    f.setV(b);
    f.subtract(a);
    b = new CVector2;
    b.setV(c);
    b.subtract(a);
    b.normalize();
    f = dotProductV2(b, f);
    if (0 >= f) return e;
    if (f >= distanceV2(a, c)) return d;
    b.scalarProduct(f);
    b.addV(a);
    return b
}

function dotProductV2(a, c) {
    return a.getX() * c.getX() + a.getY() * c.getY()
}

function distanceV2(a, c) {
    return Math.sqrt((c.getX() - a.getX()) * (c.getX() - a.getX()) + (c.getY() - a.getY()) * (c.getY() - a.getY()))
}

function reflectVectorV2(a, c) {
    var b = dotProductV2(a, c);
    a.set(a.getX() - 2 * b * c.getX(), a.getY() - 2 * b * c.getY());
    return a
}

function angleBetweenVectors(a, c) {
    var b = Math.acos(dotProductV2(a, c) / (a.length() * c.length()));
    return 1 == isNaN(b) ? 0 : b
}

function distanceV2WithoutSQRT(a, c) {
    return (c.getX() - a.getX()) * (c.getX() - a.getX()) + (c.getY() - a.getY()) * (c.getY() - a.getY())
}

function classifySphere(a, c, b, e) {
    a = c.getX() * a.getX() + c.getY() * a.getY() + planeDistance(c, b);
    return Math.abs(a) < e ? 0 <= a ? "INTERSECT FRONT" : "INTERSECT BEHIND" : a >= e ? "FRONT" : "BEHIND"
}

function planeDistance(a, c) {
    return -(a.getX() * c.getX() + a.getY() * c.getY())
}

function saveItem(a, c) {
    s_bStorageAvailable && localStorage.setItem(a, c)
}

function getItem(a) {
    return s_bStorageAvailable ? localStorage.getItem(a) : null
}

function fullscreenHandler() {
    ENABLE_FULLSCREEN && screenfull.isEnabled && (s_bFullscreen = screenfull.isFullscreen, null !== s_oInterface && s_oInterface.resetFullscreenBut(), null !== s_oMenu && s_oMenu.resetFullscreenBut(), null !== s_oLevelMenu && s_oLevelMenu.resetFullscreenBut())
}
if (screenfull.isEnabled) screenfull.on("change", function() {
    s_bFullscreen = screenfull.isFullscreen;
    null !== s_oInterface && s_oInterface.resetFullscreenBut();
    null !== s_oMenu && s_oMenu.resetFullscreenBut();
    null !== s_oLevelMenu && s_oLevelMenu.resetFullscreenBut()
});
CTLText.prototype = {
    constructor: CTLText,
    __autofit: function() {
        if (this._bFitText) {
            for (var a = this._iFontSize;
                (this._oText.getBounds().height > this._iHeight - 2 * this._iPaddingV || this._oText.getBounds().width > this._iWidth - 2 * this._iPaddingH) && !(a--, this._oText.font = a + "px " + this._szFont, this._oText.lineHeight = Math.round(a * this._fLineHeightFactor), this.__updateY(), this.__verticalAlign(), 8 > a););
            this._iFontSize = a
        }
    },
    __verticalAlign: function() {
        if (this._bVerticalAlign) {
            var a = this._oText.getBounds().height;
            this._oText.y -=
                (a - this._iHeight) / 2 + this._iPaddingV
        }
    },
    __updateY: function() {
        this._oText.y = this._y + this._iPaddingV;
        switch (this._oText.textBaseline) {
            case "middle":
                this._oText.y += this._oText.lineHeight / 2 + (this._iFontSize * this._fLineHeightFactor - this._iFontSize)
        }
    },
    __createText: function(a) {
        this._bDebug && (this._oDebugShape = new createjs.Shape, this._oDebugShape.graphics.beginFill("rgba(255,0,0,0.5)").drawRect(this._x, this._y, this._iWidth, this._iHeight), this._oContainer.addChild(this._oDebugShape));
        this._oText = new createjs.Text(a,
            this._iFontSize + "px " + this._szFont, this._szColor);
        this._oText.textBaseline = "middle";
        this._oText.lineHeight = Math.round(this._iFontSize * this._fLineHeightFactor);
        this._oText.textAlign = this._szAlign;
        this._oText.lineWidth = this._bMultiline ? this._iWidth - 2 * this._iPaddingH : null;
        switch (this._szAlign) {
            case "center":
                this._oText.x = this._x + this._iWidth / 2;
                break;
            case "left":
                this._oText.x = this._x + this._iPaddingH;
                break;
            case "right":
                this._oText.x = this._x + this._iWidth - this._iPaddingH
        }
        this._oContainer.addChild(this._oText);
        this.refreshText(a)
    },
    setVerticalAlign: function(a) {
        this._bVerticalAlign = a
    },
    setVisible: function(a) {
        this._oText.visible = a
    },
    setOutline: function(a) {
        null !== this._oText && (this._oText.outline = a)
    },
    setShadow: function(a, c, b, e) {
        null !== this._oText && (this._oText.shadow = new createjs.Shadow(a, c, b, e))
    },
    setColor: function(a) {
        this._oText.color = a
    },
    setAlpha: function(a) {
        this._oText.alpha = a
    },
    setY: function(a) {
        this._y = this._oText.y = a;
        this.updateDebug()
    },
    setX: function(a) {
        this._x = this._oText.x = a;
        this.updateDebug()
    },
    updateDebug: function() {
        this._bDebug &&
            (this._oDebugShape.graphics.command.x = this._x, this._oDebugShape.graphics.command.y = this._y)
    },
    removeTweens: function() {
        createjs.Tween.removeTweens(this._oText)
    },
    getText: function() {
        return this._oText
    },
    getX: function() {
        return this._x
    },
    getY: function() {
        return this._y
    },
    getFontSize: function() {
        return this._iFontSize
    },
    getBounds: function() {
        return this._oText.getBounds()
    },
    refreshText: function(a) {
        "" === a && (a = " ");
        null === this._oText && this.__createText(a);
        this._oText.text = a;
        this._oText.font = this._iFontSize + "px " +
            this._szFont;
        this._oText.lineHeight = Math.round(this._iFontSize * this._fLineHeightFactor);
        this.__autofit();
        this.__updateY();
        this.__verticalAlign()
    }
};

function CTLText(a, c, b, e, d, f, g, k, w, h, l, q, t, p, u, B, C) {
    this._oContainer = a;
    this._x = c;
    this._y = b;
    this._iWidth = e;
    this._iHeight = d;
    this._bMultiline = B;
    this._iFontSize = f;
    this._szAlign = g;
    this._szColor = k;
    this._szFont = w;
    this._iPaddingH = l;
    this._iPaddingV = q;
    this._bVerticalAlign = u;
    this._bFitText = p;
    this._bDebug = C;
    this._oDebugShape = null;
    this._fLineHeightFactor = h;
    this._oText = null;
    t && this.__createText(t)
}

function CBonusMalus(a, c, b, e) {
    var d, f, g, k, w, h, l, q, t, p, u, B;
    this.init = function(C, J, n, z) {
        d = z;
        f = new createjs.Container;
        d.addChild(f);
        g = C;
        k = J;
        w = n;
        B = 0;
        switch (w) {
            case LARGE_BONUS:
                C = s_oSpriteLibrary.getSprite("large_bonus");
                var E = {
                    images: [C],
                    frames: {
                        width: 115,
                        height: 95,
                        regX: 57.5,
                        regY: 47.5
                    },
                    animations: {
                        idle: [0, 9, "idle", .7]
                    }
                };
                p = C.width / 5 / 2;
                break;
            case SHORT_MALUS:
                C = s_oSpriteLibrary.getSprite("short_malus");
                E = {
                    images: [C],
                    frames: {
                        width: 130,
                        height: 95,
                        regX: 65,
                        regY: 47.5
                    },
                    animations: {
                        idle: [0, 9, "idle", .7]
                    }
                };
                p = C.width /
                    5 / 2;
                break;
            case SUPER_SHOT:
                C = s_oSpriteLibrary.getSprite("super_shot");
                E = {
                    images: [C],
                    frames: {
                        width: 95,
                        height: 95,
                        regX: 47.5,
                        regY: 47.5
                    },
                    animations: {
                        idle: [0, 8, "idle", .7]
                    }
                };
                p = C.width / 3 / 2;
                break;
            case DOUBLE_BALLS:
                C = s_oSpriteLibrary.getSprite("double_balls");
                E = {
                    images: [C],
                    frames: {
                        width: 95,
                        height: 95,
                        regX: 47.5,
                        regY: 47.5
                    },
                    animations: {
                        idle: [0, 8, "idle", .7]
                    }
                };
                p = C.width / 3 / 2;
                break;
            case CRAZY_BALL:
                C = s_oSpriteLibrary.getSprite("crazy_ball"), E = {
                    images: [C],
                    frames: {
                        width: 95,
                        height: 95,
                        regX: 47.5,
                        regY: 47.5
                    },
                    animations: {
                        idle: [0,
                            9, "idle", .7
                        ]
                    }
                }, p = C.width / 5 / 2
        }
        C = new createjs.SpriteSheet(E);
        h = createSprite(C, "idle", E.frames.regX, E.frames.regY, E.frames.width, E.frames.height);
        f.addChild(h);
        f.x = g;
        f.y = k;
        l = new CVector2;
        l.set(f.x, f.y);
        t = new CVector2;
        t.set(0, 0);
        u = .5 * p;
        q = new CVector2(0, 0)
    };
    this.unload = function() {
        d.removeChild(f)
    };
    this.getRadius = function() {
        return p
    };
    this.setPos = function(C) {
        l.setV(C)
    };
    this.getHalfRadius = function() {
        return u
    };
    this.getX = function() {
        return f.x
    };
    this.getY = function() {
        return f.y
    };
    this.getType = function() {
        return w
    };
    this.vCurForce = function() {
        return q
    };
    this.vPos = function() {
        return l
    };
    this.updateSpritePosition = function() {
        f.x = l.getX();
        f.y = l.getY()
    };
    this.checkUnload = function() {
        B += s_iTimeElaps;
        if (7E3 <= B) {
            B = 0;
            var C = this;
            (new createjs.Tween.get(h)).to({
                alpha: 0
            }, 500).call(function() {
                C.unload();
                s_oGame.onUnloadPowerUP()
            })
        }
    };
    this.init(a, c, b, e)
}

function CBallTrajectory(a) {
    var c = MS_SPAWN_TIME_BALL_TRAJECTORY,
        b, e;
    this._init = function() {
        b = new createjs.Container;
        a.addChild(b);
        e = [];
        for (var d = 0; d < BALL_TRAJ_INSTANCE; d++) e.push(this.createBallTrajectory({
            x: 0,
            y: 0
        }))
    };
    this.createBallTrajectory = function(d) {
        var f = s_oSpriteLibrary.getSprite("ball_trajectory"),
            g = createBitmap(f);
        g.x = d.x;
        g.y = d.y;
        g.regX = .5 * f.width;
        g.regY = .5 * f.height;
        g.visible = !1;
        b.addChild(g);
        return g
    };
    this.chooseATraj = function(d) {
        for (var f = 0; f < e.length; f++)
            if (!e[f].visible) {
                this.setTrajectory(f,
                    d);
                return
            }
        this.setTrajectory(0, d)
    };
    this.setTrajectory = function(d, f) {
        var g = .5 + .5 * Math.random();
        e[d].x = f.getX();
        e[d].y = f.getY();
        e[d].visible = !0;
        e[d].alpha = 1;
        e[d].scaleX = g;
        e[d].scaleY = g;
        createjs.Tween.get(e[d], {
            override: !0
        }).to({
            alpha: 0
        }, MS_TIME_FADE_BALL_TRAJ).set({
            visible: !1
        });
        createjs.Tween.get(e[d], {
            override: !1
        }).to({
            scaleX: .3,
            scaleY: .3
        }, MS_TIME_FADE_BALL_TRAJ)
    };
    this.unload = function() {
        a.removeChild(b);
        return null
    };
    this.update = function(d) {
        0 > c ? (this.chooseATraj(d), c = MS_SPAWN_TIME_BALL_TRAJECTORY) :
            c -= s_iTimeElaps
    };
    this._init();
    return this
}

function CSpriteLibrary() {
    var a = {},
        c, b, e, d, f, g;
    this.init = function(k, w, h) {
        c = {};
        e = b = 0;
        d = k;
        f = w;
        g = h
    };
    this.addSprite = function(k, w) {
        if (!a.hasOwnProperty(k)) {
            var h = new Image;
            a[k] = c[k] = {
                szPath: w,
                oSprite: h,
                bLoaded: !1
            };
            b++
        }
    };
    this.getSprite = function(k) {
        return a.hasOwnProperty(k) ? a[k].oSprite : null
    };
    this._onSpritesLoaded = function() {
        b = 0;
        f.call(g)
    };
    this._onSpriteLoaded = function() {
        d.call(g);
        ++e === b && this._onSpritesLoaded()
    };
    this.loadSprites = function() {
        for (var k in c) c[k].oSprite.oSpriteLibrary = this, c[k].oSprite.szKey =
            k, c[k].oSprite.onload = function() {
                this.oSpriteLibrary.setLoaded(this.szKey);
                this.oSpriteLibrary._onSpriteLoaded(this.szKey)
            }, c[k].oSprite.onerror = function(w) {
                var h = w.currentTarget;
                setTimeout(function() {
                    c[h.szKey].oSprite.src = c[h.szKey].szPath
                }, 500)
            }, c[k].oSprite.src = c[k].szPath
    };
    this.setLoaded = function(k) {
        a[k].bLoaded = !0
    };
    this.isLoaded = function(k) {
        return a[k].bLoaded
    };
    this.getNumSprites = function() {
        return b
    }
}

function CTextButton(a, c, b, e, d, f, g, k, w) {
    var h, l, q, t, p, u, B, C, J = [],
        n, z;
    this._init = function(x, m, A, y, M, K, R) {
        h = !1;
        t = [];
        p = [];
        C = createBitmap(A);
        l = A.width;
        q = A.height;
        u = new createjs.Container;
        u.x = x;
        u.y = m;
        u.regX = A.width / 2;
        u.regY = A.height / 2;
        u.cursor = "pointer";
        u.addChild(C);
        x = A.width - 10;
        m = A.height - 10;
        B = new CTLText(u, A.width / 2 - x / 2, -(m / 2), x, m, R, "center", K, M, 1, 2, 2, y, !0, !0, !1, !1);
        y = B.getBounds();
        w && "bottom" === w ? B.setY(3 * ((A.height - y.height) / 2 - 5) + 50) : B.setY((A.height - y.height) / 2 - 5 - 40);
        E.addChild(u);
        this._initListener()
    };
    this.unload = function() {
        u.off("mousedown", n);
        u.off("pressup", z);
        E.removeChild(u)
    };
    this.setVisible = function(x) {
        u.visible = x
    };
    this.enable = function() {
        h = !1;
        C.filters = [];
        C.cache(0, 0, l, q)
    };
    this.disable = function() {
        h = !0;
        var x = (new createjs.ColorMatrix).adjustSaturation(-100).adjustBrightness(40);
        C.filters = [new createjs.ColorMatrixFilter(x)];
        C.cache(0, 0, l, q)
    };
    this._initListener = function() {
        oParent = this;
        n = u.on("mousedown", this.buttonDown);
        z = u.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(x,
        m, A) {
        t[x] = m;
        p[x] = A
    };
    this.addEventListenerWithParams = function(x, m, A, y) {
        t[x] = m;
        p[x] = A;
        J = y
    };
    this.buttonRelease = function() {
        h || (playSound("press_button", 1, !1), u.scaleX = 1, u.scaleY = 1, t[ON_MOUSE_UP] && t[ON_MOUSE_UP].call(p[ON_MOUSE_UP], J))
    };
    this.buttonDown = function() {
        h || (u.scaleX = .9, u.scaleY = .9, t[ON_MOUSE_DOWN] && t[ON_MOUSE_DOWN].call(p[ON_MOUSE_DOWN], J))
    };
    this.setPosition = function(x, m) {
        u.x = x;
        u.y = m
    };
    this.changeText = function(x) {
        B.refreshText(x)
    };
    this.setX = function(x) {
        u.x = x
    };
    this.setY = function(x) {
        u.y = x
    };
    this.getButtonImage =
        function() {
            return u
        };
    this.getX = function() {
        return u.x
    };
    this.getY = function() {
        return u.y
    };
    this.setTextY = function(x) {
        B.setY(x)
    };
    var E = k;
    this._init(a, c, b, e, d, f, g);
    return this
}

function CPreloader() {
    var a, c, b, e, d, f, g, k, w, h;
    this._init = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
        s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
        s_oSpriteLibrary.addSprite("but_start", "./sprites/but_start.png");
        s_oSpriteLibrary.loadSprites();
        h = new createjs.Container;
        s_oStage.addChild(h)
    };
    this.unload = function() {
        h.removeAllChildren();
        w.unload()
    };
    this._onImagesLoaded = function() {};
    this._onAllImagesLoaded = function() {
        this.attachSprites();
        s_oMain.preloaderReady()
    };
    this.attachSprites = function() {
        var l = new createjs.Shape;
        l.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        h.addChild(l);
        l = s_oSpriteLibrary.getSprite("200x200");
        g = createBitmap(l);
        g.regX = .5 * l.width;
        g.regY = .5 * l.height;
        g.x = CANVAS_WIDTH / 2;
        g.y = CANVAS_HEIGHT / 2 - 180;
        h.addChild(g);
        k = new createjs.Shape;
        k.graphics.beginFill("rgba(0,0,0,0.01)").drawRoundRect(g.x - 100, g.y - 100, 200, 200, 10);
        h.addChild(k);
        g.mask = k;
        l = s_oSpriteLibrary.getSprite("progress_bar");
        e = createBitmap(l);
        e.x = CANVAS_WIDTH / 2 - l.width / 2;
        e.y = CANVAS_HEIGHT / 2 + 50;
        h.addChild(e);
        a = l.width;
        c = l.height;
        d = new createjs.Shape;
        d.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(e.x, e.y, 1, c);
        h.addChild(d);
        e.mask = d;
        b = new createjs.Text("", "30px " + PRIMARY_FONT, "#FFF");
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT / 2 + 100;
        b.textBaseline = "alphabetic";
        b.textAlign = "center";
        h.addChild(b);
        l = s_oSpriteLibrary.getSprite("but_start");
        w = new CTextButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT /
            2, l, TEXT_PRELOADER_CONTINUE, PRIMARY_FONT, "#4ce700", 50, h);
        w.addEventListener(ON_MOUSE_UP, this._onButStartRelease, this);
        w.setVisible(!1);
        w.setTextY(24);
        f = new createjs.Shape;
        f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        h.addChild(f);
        createjs.Tween.get(f).to({
            alpha: 0
        }, 500).call(function() {
            createjs.Tween.removeTweens(f);
            h.removeChild(f)
        })
    };
    this._onButStartRelease = function() {};
    this.refreshLoader = function(l) {
        b.text = l + "%";
        100 === l && (s_oMain._onRemovePreloader(), b.visible = !1, e.visible = !1);
        d.graphics.clear();
        l = Math.floor(l * a / 100);
        d.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(e.x, e.y, l, c)
    };
    this._init()
}

function CMain(a) {
    var c, b = 0,
        e = 0,
        d = STATE_LOADING,
        f, g = null,
        k;
    this.initContainer = function() {
        s_oCanvas = document.getElementById("canvas");
        s_oStage = new createjs.Stage(s_oCanvas);
        s_oStage.preventSelection = !1;
        s_bMobile = isMobile();
        !1 === s_bMobile ? s_oStage.enableMouseOver(FPS) : createjs.Touch.enable(s_oStage);
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.framerate = FPS;
        navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
        s_oSpriteLibrary =
            new CSpriteLibrary;
f = new CPreloader;
    };
    this.preloaderReady = function() {
        s_oMain._loadImages();
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_oMain._initSounds();
        c = !0
    };
    this.soundLoaded = function() {
        b++;
        f.refreshLoader(Math.floor(b / e * 100))
    };
    this._initSounds = function() {
        Howler.mute(!s_bAudioActive);
        s_aSoundsInfo = [];
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "soundtrack",
            loop: !0,
            volume: 1,
            ingamename: "soundtrack"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "press_button",
            loop: !0,
            volume: 1,
            ingamename: "press_button"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "power_up_bonus",
            loop: !0,
            volume: 1,
            ingamename: "power_up_bonus"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "power_up_malus",
            loop: !0,
            volume: 1,
            ingamename: "power_up_malus"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "ball_wall",
            loop: !0,
            volume: 1,
            ingamename: "ball_wall"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "ball_kick",
            loop: !0,
            volume: 1,
            ingamename: "ball_kick"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "goal_player",
            loop: !0,
            volume: 1,
            ingamename: "goal_player"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "goal_pc",
            loop: !0,
            volume: 1,
            ingamename: "goal_pc"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "game_over",
            loop: !0,
            volume: 1,
            ingamename: "game_over"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "win_panel",
            loop: !0,
            volume: 1,
            ingamename: "win_panel"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "explosion",
            loop: !0,
            volume: 1,
            ingamename: "explosion"
        });
        e += s_aSoundsInfo.length;
        s_aSounds = [];
        for (var h =
                0; h < s_aSoundsInfo.length; h++) this.tryToLoadSound(s_aSoundsInfo[h], !1)
    };
    this.tryToLoadSound = function(h, l) {
        setTimeout(function() {
            s_aSounds[h.ingamename] = new Howl({
                src: [h.path + h.filename + ".mp3"],
                autoplay: !1,
                preload: !0,
                loop: h.loop,
                volume: h.volume,
                onload: s_oMain.soundLoaded,
                onloaderror: function(q, t) {
                    for (var p = 0; p < s_aSoundsInfo.length; p++)
                        if (q === s_aSounds[s_aSoundsInfo[p].ingamename]._sounds[0]._id) {
                            s_oMain.tryToLoadSound(s_aSoundsInfo[p], !0);
                            break
                        }
                },
                onplayerror: function(q) {
                    for (var t = 0; t < s_aSoundsInfo.length; t++)
                        if (q ===
                            s_aSounds[s_aSoundsInfo[t].ingamename]._sounds[0]._id) {
                            s_aSounds[s_aSoundsInfo[t].ingamename].once("unlock", function() {
                                s_aSounds[s_aSoundsInfo[t].ingamename].play();
                                "soundtrack" === s_aSoundsInfo[t].ingamename && null !== s_oGame && setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME)
                            });
                            break
                        }
                }
            })
        }, l ? 200 : 0)
    };
    this._loadImages = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("ctl_logo", "./sprites/ctl_logo.png");
        s_oSpriteLibrary.addSprite("but_info", "./sprites/but_info.png");
        s_oSpriteLibrary.addSprite("but_yes_big", "./sprites/but_yes_big.png");
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg");
        s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
        s_oSpriteLibrary.addSprite("ball", "./sprites/ball.png");
        s_oSpriteLibrary.addSprite("but_p1", "./sprites/but_p1.png");
        s_oSpriteLibrary.addSprite("but_p2", "./sprites/but_p2.png");
        s_oSpriteLibrary.addSprite("but_mode", "./sprites/but_mode.png");
        s_oSpriteLibrary.addSprite("player_red", "./sprites/player_red.png");
        s_oSpriteLibrary.addSprite("player_blue", "./sprites/player_blue.png");
        s_oSpriteLibrary.addSprite("player_blue_boosted", "./sprites/player_blue_boosted.png");
        s_oSpriteLibrary.addSprite("player_red_boosted", "./sprites/player_red_boosted.png");
        s_oSpriteLibrary.addSprite("but_restart",
            "./sprites/but_restart.png");
        s_oSpriteLibrary.addSprite("but_home", "./sprites/but_home.png");
        s_oSpriteLibrary.addSprite("but_easy", "./sprites/but_easy.png");
        s_oSpriteLibrary.addSprite("but_medium", "./sprites/but_medium.png");
        s_oSpriteLibrary.addSprite("but_hard", "./sprites/but_hard.png");
        s_oSpriteLibrary.addSprite("but_next", "./sprites/but_next.png");
        s_oSpriteLibrary.addSprite("but_kickoff", "./sprites/but_kickoff.png");
        s_oSpriteLibrary.addSprite("key_w", "./sprites/key_w.png");
        s_oSpriteLibrary.addSprite("key_s",
            "./sprites/key_s.png");
        s_oSpriteLibrary.addSprite("key_up", "./sprites/key_up.png");
        s_oSpriteLibrary.addSprite("key_down", "./sprites/key_down.png");
        s_oSpriteLibrary.addSprite("skip_arrow", "./sprites/skip_arrow.png");
        s_oSpriteLibrary.addSprite("skip_arrow_left", "./sprites/skip_arrow_left.png");
        s_oSpriteLibrary.addSprite("but_help", "./sprites/but_help.png");
        s_oSpriteLibrary.addSprite("but_settings", "./sprites/but_settings.png");
        s_oSpriteLibrary.addSprite("large_bonus", "./sprites/large_bonus.png");
        s_oSpriteLibrary.addSprite("short_malus",
            "./sprites/short_malus.png");
        s_oSpriteLibrary.addSprite("super_shot", "./sprites/super_shot.png");
        s_oSpriteLibrary.addSprite("double_balls", "./sprites/double_balls.png");
        s_oSpriteLibrary.addSprite("crazy_ball", "./sprites/crazy_ball.png");
        s_oSpriteLibrary.addSprite("ball_trajectory", "./sprites/ball_trajectory.png");
        s_oSpriteLibrary.addSprite("point_1", "./sprites/point_1.png");
        s_oSpriteLibrary.addSprite("point_2", "./sprites/point_2.png");
        for (var h = 0; h < LOGO_MENU_FRAMES_NUM; h++) s_oSpriteLibrary.addSprite("logo_menu_" +
            h, "./sprites/logo_menu/logo_menu_" + h + ".png");
        for (h = 0; h < GOAL_TEXT_FRAMES_NUM; h++) s_oSpriteLibrary.addSprite("goal_text_" + h, "./sprites/goal_text/goal_text_" + h + ".png");
        for (h = 0; h < ENLARGE_TEXT_FRAMES_NUM; h++) s_oSpriteLibrary.addSprite("enlarge_text_" + h, "./sprites/enlarge_text/enlarge_text_" + h + ".png");
        for (h = 0; h < BECOME_SHORT_TEXT_FRAMES_NUM; h++) s_oSpriteLibrary.addSprite("become_short_text_" + h, "./sprites/become_short_text/become_short_text_" + h + ".png");
        for (h = 0; h < SUPER_SHOT_TEXT_FRAMES_NUM; h++) s_oSpriteLibrary.addSprite("super_shot_text_" +
            h, "./sprites/super_shot_text/super_shot_text_" + h + ".png");
        for (h = 0; h < DOUBLE_BALL_TEXT_FRAMES_NUM; h++) s_oSpriteLibrary.addSprite("double_ball_text_" + h, "./sprites/double_ball_text/double_ball_text_" + h + ".png");
        for (h = 0; h < CRAZY_BALL_TEXT_FRAMES_NUM; h++) s_oSpriteLibrary.addSprite("crazy_ball_text_" + h, "./sprites/crazy_ball_text/crazy_ball_text_" + h + ".png");
        e += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    };
    this._onImagesLoaded = function() {
        b++;
        f.refreshLoader(Math.floor(b / e * 100))
    };
    this._onAllImagesLoaded =
        function() {};
    this._onRemovePreloader = function() {
        f.unload();
        null === g && (s_oSoundtrack = playSound("soundtrack", 1, !0), ARRAY_IMG_LEVEL[0] = s_oSpriteLibrary.getSprite("but_easy"), ARRAY_IMG_LEVEL[1] = s_oSpriteLibrary.getSprite("but_medium"), ARRAY_IMG_LEVEL[2] = s_oSpriteLibrary.getSprite("but_hard"), this.gotoMenu())
    };
    this.onAllPreloaderImagesLoaded = function() {
        this._loadImages()
    };
    this.gotoMenu = function() {
        g = new CMenu;
        d = STATE_MENU
    };
    this.gotoGame = function() {
        k = new CGame(w);
        d = STATE_GAME
    };
    this.gotoSelectPlayers = function() {
        new CSelectPlayers
    };
    this.gotoLevelMenu = function() {
        new CLevelMenu;
        d = STATE_LEVEL_SELECTION
    };
    this.gotoSelectMode = function() {
        new CSelectMode
    };
    this.gotoHelp = function() {
        new CHelp;
        d = STATE_HELP
    };
    this.stopUpdate = function() {
        c = !1;
        createjs.Ticker.paused = !0;
        document.querySelector("#block_game").style.display = "block";
        Howler.mute(!0)
    };
    this.startUpdate = function() {
        s_iPrevTime = (new Date).getTime();
        c = !0;
        createjs.Ticker.paused = !1;
        document.querySelector("#block_game").style.display = "none";
        s_bAudioActive && Howler.mute(!1)
    };
    this._update = function(h) {
        if (!1 !==
            c) {
            var l = (new Date).getTime();
            s_iTimeElaps = l - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = l;
            1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
            d === STATE_GAME && k.update();
            d === STATE_MENU && g.update();
            s_oStage.update(h)
        }
    };
    s_oMain = this;
    ENABLE_CHECK_ORIENTATION = a.check_orientation;
    ENABLE_FULLSCREEN = a.fullscreen;
    POINTS_TO_WIN = 20 < a.points_to_win ? 20 : a.points_to_win;
    OCCURRENCES_LARGE_BONUS = a.large_bonus_occurrences;
    OCCURRENCES_SHORT_MALUS = a.short_malus_occurrences;
    OCCURRENCES_SUPER_SHOTS =
        a.super_shots_occurrences;
    OCCURRENCES_DOUBLE_BALLS = a.double_balls_occurrences;
    OCCURRENCES_CRAZY_BALL = a.crazy_ball_occurrences;
    var w = a;
    s_bAudioActive = a.audio_enable_on_startup;
    this.initContainer()
}
var s_bMobile, s_bAudioActive = !0,
    s_iCntTime = 0,
    s_iTimeElaps = 0,
    s_iPrevTime = 0,
    s_iCntFps = 0,
    s_iCurFps = 0,
    s_iLastLevel = 1,
    s_bFullscreen = !1,
    s_bStorageAvailable = !0,
    s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary, s_oSoundtrack = null,
    s_oCanvas, s_aSounds, s_aSoundsInfo;

function CStick(a, c, b, e, d, f, g, k) {
    var w, h, l, q, t, p, u, B, C, J, n, z, E, x, m, A;
    this.init = function(y, M, K, R, H, I, Q, Y) {
        w = new createjs.Container;
        s_oStage.addChild(w);
        t = [];
        p = [];
        B = K;
        C = 0;
        A = !1;
        u = Y;
        x = !1;
        h = R;
        l = H;
        q = I;
        J = m = 0;
        B === BLUE_STICK || s_b2Players ? (y = s_oSpriteLibrary.getSprite("player_blue"), K = s_oSpriteLibrary.getSprite("player_blue_boosted"), E = 1) : (y = s_oSpriteLibrary.getSprite("player_red"), K = s_oSpriteLibrary.getSprite("player_red_boosted"), E = -1);
        1 === B && s_b2Players && s_bMobile && (J = 180);
        n = [];
        n.push("idle_0");
        n.push("idle_1");
        n.push("idle_2");
        n.push("idle_3");
        n.push("idle_4");
        n.push("idle_5");
        z = 1;
        y = new createjs.SpriteSheet({
            images: [y, K],
            frames: {
                width: 200,
                height: 70,
                regX: 100,
                regY: 35
            },
            animations: {
                idle_0: [0, 0, "idle_0"],
                idle_1: [1, 1, "idle_1"],
                idle_2: [2, 2, "idle_2"],
                idle_3: [3, 3, "idle_3"],
                idle_4: [4, 4, "idle_4"],
                idle_5: [5, 5, "idle_5"]
            }
        });
        for (K = 0; K < I.length; K++) t.push(new CEdge(q[K].x1, M, q[K].x2, M, 1, !1)), p.push(new createSprite(y, "idle_1", 100, 35, 200, 70)), p[K].x = t[K].getModel().m_pCenter().getX(), p[K].y = 0 === B ? t[K].getModel().m_pCenter().getY() +
            10 : t[K].getModel().m_pCenter().getY() - 10, p[K].rotation = J, w.addChild(p[K])
    };
    this.onBonus = function() {
        if (2 > z || 2 < z && 5 > z) z++, p[0].gotoAndPlay(n[z]), B === BLUE_STICK ? t[0].changeSize(20 * E) : t[0].changeSize(-20 * E)
    };
    this.onMalus = function() {
        if (0 < z && 3 > z || 3 < z) z--, p[0].gotoAndPlay(n[z]), B === BLUE_STICK ? t[0].changeSize(-20 * E) : t[0].changeSize(20 * E)
    };
    this.resetSize = function() {
        1 !== z && (z = 1, p[0].gotoAndPlay(n[z]), t[0].resetSize(E))
    };
    this.setStrongShotPowerUP = function(y) {
        x = y;
        m = 0;
        !0 === y ? z += 3 : !1 === y && 2 < z && (z -= 3);
        p[0].gotoAndPlay("idle_" +
            z)
    };
    this.getStrongShotPowerUP = function() {
        return x
    };
    this.getX = function() {
        return p[0].x
    };
    this.getColorStick = function() {
        return B
    };
    this.getDistanceFromStickToEdge = function(y) {
        return Math.sqrt(Math.pow(y.x - p[0].x, 2) + Math.pow(y.y - p[0].y, 2))
    };
    this.onKeyLeft = function() {
        p[0].x !== h && (A = !0, C -= STICK_ACCELLERATION, this.__updateStickPositions())
    };
    this.onKeyRight = function() {
        p[0].x !== l && (A = !0, C += STICK_ACCELLERATION, this.__updateStickPositions())
    };
    this.__updateStickPositions = function() {
        Math.abs(C) > u && (C = 0 > C ? -u : u);
        var y = C;
        p[0].x + C < h ? (y = h - p[0].x, C = 0) : p[0].x + C > l && (C = 0, y = l - p[0].x);
        for (var M = 0; M < t.length; M++) t[M].moveX(y), p[M].x += y
    };
    this.getEdges = function() {
        return t
    };
    this.update = function() {
        !1 === A && (C *= STICK_FRICTION);
        A = !1;
        this.__updateStickPositions();
        x && (m += s_iTimeElaps, m >= MS_STRONG_SHOT_POWER_UP && this.setStrongShotPowerUP(!1))
    };
    this.init(a, c, b, e, d, f, g, k)
}

function CToggle(a, c, b, e, d) {
    var f, g, k, w, h, l, q;
    this._init = function(t, p, u, B, C) {
        h = [];
        l = [];
        var J = new createjs.SpriteSheet({
            images: [u],
            frames: {
                width: u.width / 2,
                height: u.height,
                regX: u.width / 2 / 2,
                regY: u.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        });
        f = B;
        q = createSprite(J, "state_" + f, u.width / 2 / 2, u.height / 2, u.width / 2, u.height);
        q.x = t;
        q.y = p;
        q.stop();
        C.addChild(q);
        this._initListener()
    };
    this.unload = function() {
        s_bMobile ? q.off("mousedown", g) : (q.off("mousedown", g), q.off("mouseover", w));
        q.off("pressup", k);
        d.removeChild(q)
    };
    this._initListener = function() {
        s_bMobile ? g = q.on("mousedown", this.buttonDown) : (g = q.on("mousedown", this.buttonDown), w = q.on("mouseover", this.buttonOver));
        k = q.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(t, p, u) {
        h[t] = p;
        l[t] = u
    };
    this.setActive = function(t) {
        f = t;
        q.gotoAndStop("state_" + f)
    };
    this.buttonRelease = function() {
        q.scaleX = 1;
        q.scaleY = 1;
        playSound("press_button", 1, !1);
        f = !f;
        q.gotoAndStop("state_" + f);
        h[ON_MOUSE_UP] && h[ON_MOUSE_UP].call(l[ON_MOUSE_UP], f)
    };
    this.buttonDown = function() {
        q.scaleX =
            .9;
        q.scaleY = .9;
        h[ON_MOUSE_DOWN] && h[ON_MOUSE_DOWN].call(l[ON_MOUSE_DOWN])
    };
    this.buttonOver = function(t) {
        s_bMobile || (t.target.cursor = "pointer")
    };
    this.setX = function(t) {
        q.x = t
    };
    this.setY = function(t) {
        q.y = t
    };
    this.setPosition = function(t, p) {
        q.x = t;
        q.y = p
    };
    this.setVisible = function(t) {
        q.visible = t
    };
    this.getButtonImage = function() {
        return q
    };
    this._init(a, c, b, e, d)
}

function CGfxButton(a, c, b, e) {
    var d, f, g, k, w, h, l, q, t;
    this._init = function(u, B, C, J) {
        t = d = !1;
        f = 1;
        h = [];
        l = [];
        q = createBitmap(C);
        q.x = u;
        q.y = B;
        q.scaleX = q.scaleY = f;
        q.regX = C.width / 2;
        q.regY = C.height / 2;
        J.addChild(q);
        this._initListener()
    };
    this.unload = function() {
        createjs.Tween.removeTweens(q);
        s_bMobile ? q.off("mousedown", g) : (q.off("mousedown", g), q.off("mouseover", w));
        q.off("pressup", k);
        e.removeChild(q)
    };
    this.setVisible = function(u) {
        q.visible = u
    };
    this.setClickable = function(u) {
        d = !u
    };
    this._initListener = function() {
        s_bMobile ?
            g = q.on("mousedown", this.buttonDown) : (g = q.on("mousedown", this.buttonDown), w = q.on("mouseover", this.buttonOver));
        k = q.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(u, B, C) {
        h[u] = B;
        l[u] = C
    };
    this.buttonRelease = function() {
        d || (q.scaleX = f, q.scaleY = f, h[ON_MOUSE_UP] && h[ON_MOUSE_UP].call(l[ON_MOUSE_UP]))
    };
    this.buttonDown = function() {
        d || (q.scaleX = .9 * f, q.scaleY = .9 * f, t || playSound("press_button", 1, !1), h[ON_MOUSE_DOWN] && h[ON_MOUSE_DOWN].call(l[ON_MOUSE_DOWN]))
    };
    this.buttonOver = function(u) {
        s_bMobile ||
            d || (u.target.cursor = "pointer")
    };
    this.pulseAnimation = function() {
        createjs.Tween.get(q, {
            loop: -1
        }).to({
            scaleX: .9 * f,
            scaleY: .9 * f
        }, 850, createjs.Ease.quadOut).to({
            scaleX: f,
            scaleY: f
        }, 650, createjs.Ease.quadIn)
    };
    this.trembleAnimation = function() {
        createjs.Tween.get(q).to({
            rotation: 5
        }, 75, createjs.Ease.quadOut).to({
            rotation: -5
        }, 140, createjs.Ease.quadIn).to({
            rotation: 0
        }, 75, createjs.Ease.quadIn).wait(750).call(function() {
            p.trebleAnimation()
        })
    };
    this.setPosition = function(u, B) {
        q.x = u;
        q.y = B
    };
    this.setX = function(u) {
        q.x =
            u
    };
    this.setY = function(u) {
        q.y = u
    };
    this.getButtonImage = function() {
        return q
    };
    this.getX = function() {
        return q.x
    };
    this.getY = function() {
        return q.y
    };
    this.setMuted = function(u) {
        t = u
    };
    var p = this;
    this._init(a, c, b, e);
    return this
}

function CMenu() {
    var a, c, b, e, d, f, g, k, w, h, l, q, t, p, u, B, C = null,
        J = null,
        n, z, E, x;
    this._init = function() {
        s_b2Players = !1;
        setVolume("soundtrack", 1);
        l = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(l);
        x = [];
        E = [];
        E[0] = (new CEdge(0, CANVAS_HEIGHT, 0, 5, !1)).getModel();
        E[1] = (new CEdge(CANVAS_WIDTH, 0, CANVAS_WIDTH, CANVAS_HEIGHT, 5, !1)).getModel();
        E[2] = (new CEdge(0, 0, CANVAS_WIDTH, 0, 5, !1)).getModel();
        E[3] = (new CEdge(CANVAS_WIDTH, CANVAS_HEIGHT, 0, CANVAS_HEIGHT, 5, !1)).getModel();
        for (var m = 0; 1 > m; m++) x.push(new CBall(CANVAS_WIDTH /
            2, CANVAS_HEIGHT / 2, s_oSpriteLibrary.getSprite("ball"), "ball_0", s_oStage));
        for (m = 0; m < x.length; m++) {
            var A = new CVector2(randomFloatBetween(1, 2.5) * randomSign(), randomFloatBetween(1, 2.5) * randomSign());
            A.normalize();
            A.scalarProduct(3);
            x[m].vCurForce().setV(A)
        }
        m = s_oSpriteLibrary.getSprite("but_mode");
        b = CANVAS_WIDTH / 2 - 225;
        e = CANVAS_HEIGHT - 200;
        q = new CTextButton(b, e, m, TEXT_CLASSIC_MODE, PRIMARY_FONT, "#4ce700", 40, s_oStage);
        q.addEventListener(ON_MOUSE_DOWN, this._onButFriendlyRelease, this);
        a = CANVAS_WIDTH / 2 + 225;
        c =
            CANVAS_HEIGHT - 200;
        n = new CTextButton(a, c, m, TEXT_ADVANCED_MODE, PRIMARY_FONT, "#4ce700", 40, s_oStage);
        n.addEventListener(ON_MOUSE_DOWN, this._onButTournamentRelease, this);
        m = s_oSpriteLibrary.getSprite("but_info");
        w = m.height / 2 + 10;
        h = m.height / 2 + 10;
        u = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 240, m, s_oStage);
        u.addEventListener(ON_MOUSE_UP, this._onCreditsBut, this);
        A = [];
        for (m = 0; 33 > m; m++) A.push(s_oSpriteLibrary.getSprite("logo_menu_" + m));
        m = {
            images: A,
            frames: {
                width: 726,
                height: 142,
                regX: 363,
                regY: 71
            },
            animations: {
                idle: [0,
                    32, "idle", .7
                ]
            }
        };
        A = new createjs.SpriteSheet(m);
        z = createSprite(A, "idle", m.frames.regX, m.frames.regY, m.frames.width, m.frames.height);
        z.x = CANVAS_WIDTH / 2;
        z.y = CANVAS_HEIGHT / 2 - 100;
        s_oStage.addChild(z);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) m = s_oSpriteLibrary.getSprite("audio_icon"), g = CANVAS_WIDTH - (m.height / 2 + 10), k = m.height / 2 + 10, p = new CToggle(g, k, m, s_bAudioActive, s_oStage), p.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        m = window.document;
        A = m.documentElement;
        C = A.requestFullscreen || A.mozRequestFullScreen ||
            A.webkitRequestFullScreen || A.msRequestFullscreen;
        J = m.exitFullscreen || m.mozCancelFullScreen || m.webkitExitFullscreen || m.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (C = !1);
        C && screenfull.isEnabled && (m = s_oSpriteLibrary.getSprite("but_fullscreen"), d = w + m.width / 2 + 10, f = m.height / 2 + 10, B = new CToggle(d, f, m, !1, s_oStage), B.addEventListener(ON_MOUSE_UP, this._onFullscreen, this));
        t = new createjs.Shape;
        t.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(t);
        createjs.Tween.get(t).to({
                alpha: 0
            },
            1E3).call(function() {
            t.visible = !1;
            t.removeAllEventListeners()
        });
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.update = function() {
        for (var m = 0; 10 > m; m++)
            for (var A = 0; A < x.length; A++) x[A].vPos().addV(x[A].vCurForce()), x[A].updateTrajectory(), this.collideCircleWithEdges(x[A], E);
        for (m = 0; m < x.length; m++) x[m].updateSpritePosition()
    };
    this.collideCircleWithEdges = function(m, A) {
        for (var y = 0; y < A.length; y++) {
            var M = collideEdgeWithCircle(A[y], m.vPos(), m.getRadius());
            if (M) {
                var K = new CVector2;
                K.setV(A[y].getNormal());
                K.scalarProduct(1.05 * m.getRadius());
                M.closest_point.addV(K);
                m.setPos(M.closest_point);
                reflectVectorV2(m.vCurForce(), A[y].getNormal());
                break
            }
        }
    };
    this.unload = function() {
        q.unload();
        n.unload();
        q = null;
        t.visible = !1;
        u.unload();
        for (var m = x.length - 1; 0 <= m; m--) x[m].unload(), x.pop();
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) p.unload(), p = null;
        C && screenfull.isEnabled && B.unload();
        s_oStage.removeAllChildren();
        s_oMenu = l = null
    };
    this.refreshButtonPos = function(m, A) {
        q.setPosition(b, e - A);
        n.setPosition(a, c - A);
        u.setPosition(w +
            m, A + h);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || p.setPosition(g - m, A + k);
        C && screenfull.isEnabled && B.setPosition(d + m, f + A)
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onCreditsBut = function() {
        new CCreditsPanel
    };
    this.resetFullscreenBut = function() {
        C && screenfull.isEnabled && B.setActive(s_bFullscreen)
    };
    this._onFullscreen = function() {
        s_bFullscreen ? J.call(window.document) : C.call(window.document.documentElement);
        sizeHandler()
    };
    this._onButFriendlyRelease = function() {
        this.unload();
        document.dispatchEvent(new CustomEvent("start_session"));
        s_bFriendly = !1;
        s_oMain.gotoSelectPlayers();
        ADVANCED_MODE = !1
    };
    this._onButTournamentRelease = function() {
        this.unload();
        document.dispatchEvent(new CustomEvent("start_session"));
        s_bFriendly = !1;
        s_oMain.gotoSelectPlayers();
        ADVANCED_MODE = !0
    };
    s_oMenu = this;
    this._init()
}
var s_oMenu = null;

function CGame(a) {
    var c, b, e, d, f = null,
        g, k, w, h, l, q, t, p, u, B, C, J, n, z, E, x, m, A, y, M, K, R, H, I, Q, Y, aa, U, ba;
    this._init = function() {
        setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME);
        C = b = c = !0;
        J = !1;
        A = u = p = e = 0;
        Y = 1;
        new CVector2;
        w = [];
        n = B = !0;
        z = ADVANCED_MODE;
        var v = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        s_oStage.addChild(v);
        ba = new createjs.Container;
        s_oStage.addChild(ba);
        l = h = !1;
        s_b2Players && (t = q = !1);
        d = new CInterface;
        d.refreshScore(e);
        k = [];
        y = 0;
        M = !0;
        K = !1;
        R = 0;
        k[VERTICAL_LINE_LEFT] = (new CEdge(EDGEBOARD_X + 2, CANVAS_HEIGHT -
            30, EDGEBOARD_X + 2, 30, 5, !1)).getModel();
        k[VERTICAL_LINE_RIGHT] = (new CEdge(CANVAS_WIDTH - (EDGEBOARD_X + 2), 30, CANVAS_WIDTH - (EDGEBOARD_X + 2), CANVAS_HEIGHT - 30, 5, !1)).getModel();
        if (z) {
            m = [];
            m.push((new CEdge(EDGEBOARD_X + 2, 30, CANVAS_WIDTH - (EDGEBOARD_X + 2), 30, 5, !1)).getModel());
            m.push((new CEdge(CANVAS_WIDTH - (EDGEBOARD_X + 2), CANVAS_HEIGHT - 30, EDGEBOARD_X + 2, CANVAS_HEIGHT - 30, 5, !1)).getModel());
            m.push(k[VERTICAL_LINE_LEFT]);
            m.push(k[VERTICAL_LINE_RIGHT]);
            Q = [];
            for (v = 0; v < OCCURRENCES_LARGE_BONUS; v++) Q.push(LARGE_BONUS);
            for (v = 0; v < OCCURRENCES_SHORT_MALUS; v++) Q.push(SHORT_MALUS);
            for (v = 0; v < OCCURRENCES_SUPER_SHOTS; v++) Q.push(SUPER_SHOT);
            for (v = 0; v < OCCURRENCES_DOUBLE_BALLS; v++) Q.push(DOUBLE_BALLS);
            for (v = 0; v < OCCURRENCES_CRAZY_BALL; v++) Q.push(CRAZY_BALL);
            U = [];
            U[LARGE_BONUS] = this.assembleSpriteSheetText("enlarge_text_");
            U[SHORT_MALUS] = this.assembleSpriteSheetText("become_short_text_");
            U[SUPER_SHOT] = this.assembleSpriteSheetText("super_shot_text_");
            U[DOUBLE_BALLS] = this.assembleSpriteSheetText("double_ball_text_");
            U[CRAZY_BALL] =
                this.assembleSpriteSheetText("crazy_ball_text_");
            for (v = 0; v < U.length; v++) s_oStage.addChild(U[v])
        }
        aa = this.assembleSpriteSheetText("goal_text_");
        s_oStage.addChild(aa);
        g = [];
        H = 0;
        I = START_PROGRESSIVE_BALL_VELOCITY;
        w[PLAYER_1] = new CStick(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 130, BLUE_STICK, EDGEBOARD_X + 2 + 100, CANVAS_WIDTH - (EDGEBOARD_X + 2 + 100), [{
            x1: CANVAS_WIDTH / 2 + 70,
            x2: CANVAS_WIDTH / 2 - 70
        }], GOALKEEPER, PLAYER_SPEED_STICKS);
        w[PLAYER_2] = new CStick(CANVAS_WIDTH / 2, 130, RED_STICK, EDGEBOARD_X + 2 + 100, CANVAS_WIDTH - (EDGEBOARD_X + 2 +
            100), [{
            x2: CANVAS_WIDTH / 2 + 70,
            x1: CANVAS_WIDTH / 2 - 70
        }], GOALKEEPER, CPU_SPEED_STICKS);
        d.setOnTop();
        if (s_bMobile) d.initMobileButtons();
        else {
            if (!s_b2Players) s_oStage.on("stagemousemove", this.onMouseOver);
            document.onkeydown = this.keyDownKeyBoard;
            document.onkeyup = this.keyUpKeyBoard
        }
        d.setOnTop();
        !0 !== s_b2Players || s_bMobile || !0 !== s_bFirstMultiPlayer || (s_bFirstPlay = s_bFirstMultiPlayer = !1, new CPanelTutorial(!0));
        !0 === s_bFirstPlay && (s_bFirstPlay = !1, new CPanelTutorial(!0))
    };
    this.assembleSpriteSheetText = function(v) {
        for (var G = [], O = 0; 15 > O; O++) G.push(s_oSpriteLibrary.getSprite(v + O));
        v = {
            images: G,
            frames: {
                width: 1120,
                height: 300,
                regX: 560,
                regY: 150
            },
            animations: {
                idle: [0, 14, "idle", .8]
            }
        };
        G = new createjs.SpriteSheet(v);
        v = createSprite(G, "idle", v.frames.regX, v.frames.regY, v.frames.width, v.frames.height);
        v.stop();
        v.x = CANVAS_WIDTH / 2;
        v.y = Y_OFFBOARD_MESSAGES_UP;
        return v
    };
    this.onMouseOver = function(v) {
        E = parseInt(v.localX)
    };
    this.onTouchDownMobileP1 = function(v) {
        v.localX > CANVAS_WIDTH / 2 ? (h = !1, l = !0) : (l = !1, h = !0)
    };
    this.onTouchDownMobileP2 = function(v) {
        v.localX >
            CANVAS_WIDTH / 2 ? (q = !1, t = !0) : (t = !1, q = !0)
    };
    this.onTouchUpMobileP1 = function(v) {
        l = h = !1
    };
    this.onTouchUpMobileP2 = function(v) {
        t = q = !1
    };
    this.keyUpKeyBoard = function(v) {
        v || (v = window.event);
        v.preventDefault();
        switch (v.keyCode) {
            case 65:
                h = !1;
                break;
            case 68:
                l = !1;
                break;
            case 37:
                q = !1;
                break;
            case 39:
                t = !1
        }
    };
    this.keyDownKeyBoard = function(v) {
        v || (v = window.event);
        v.preventDefault();
        switch (v.keyCode) {
            case 65:
                h = !0;
                E = null;
                break;
            case 68:
                l = !0;
                E = null;
                break;
            case 37:
                q = !0;
                break;
            case 39:
                t = !0;
                break;
            case 32:
                if (32 === event.keyCode && n && !J &&
                    c) r.onMouseDown()
        }
        v.preventDefault()
    };
    this.AICpu = function(v, G) {
        if (!1 === fixEnemyTremble(v, G.getEdges()[0].getModel()))
            if (v.getX() > G.getEdges()[0].getModel().m_pCenter().getX()) G.onKeyRight();
            else G.onKeyLeft()
    };
    this.setStartGame = function(v) {
        c = v
    };
    this.sortObjectsByY = function(v) {
        v.sort(function(G, O) {
            return parseFloat(G.getY()) - parseFloat(O.getY())
        })
    };
    this.fixMouseTremmle = function() {
        return w[PLAYER_1].getX() - 15 < E && w[PLAYER_1].getX() + 15 > E ? !1 : !0
    };
    this.setBooleanUp1 = function(v) {
        h = v
    };
    this.setBooleanDown1 =
        function(v) {
            l = v
        };
    this.setBooleanUp2 = function(v) {
        q = v
    };
    this.setBooleanDown2 = function(v) {
        t = v
    };
    this.onMouseDown = function() {
        d.setVisibleButKickOff(!1);
        n = !1;
        playSound("power_up_bonus", 1, !1);
        I = START_PROGRESSIVE_BALL_VELOCITY;
        g.push(new CBall(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, s_oSpriteLibrary.getSprite("ball"), "ball_0", s_oStage));
        g[0].setVisible(!1);
        var v = new CVector2(randomFloatBetween(.05, .1) * randomSign(), randomFloatBetween(.05, .1) * randomSign());
        v.normalize();
        v.scalarProduct(BALL_START_VELOCITY);
        g[0].vCurForce().setV(v);
        g[0].setVisible(!0);
        B = !1;
        J = !0
    };
    this.collideCircleWithEdges = function(v, G) {
        for (var O = 0; O < G.length; O++) {
            var L = collideEdgeWithCircle(G[O], v.vPos(), v.getRadius());
            if (L) {
                playSound("ball_wall", 1, !1);
                var D = new CVector2;
                D.setV(G[O].getNormal());
                D.scalarProduct(1.05 * v.getRadius());
                L.closest_point.addV(D);
                v.setPos(L.closest_point);
                reflectVectorV2(v.vCurForce(), G[O].getNormal());
                break
            }
        }
    };
    this.unload = function() {
        c = !1;
        d.unload();
        null !== f && f.unload();
        createjs.Tween.removeAllTweens();
        s_oStage.removeAllChildren()
    };
    this.onExit = function() {
        document.dispatchEvent(new CustomEvent("end_session"));
        s_oGame.unload();
        s_oMain.gotoMenu();
        setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME)
    };
    this._onExitHelp = function() {
        c = !0
    };
    this.gameOver = function(v) {
        f = new CEndPanel(s_oSpriteLibrary.getSprite("msg_box"), v);
        0 === v && (e = 100 * p, e -= 50 * u);
        f.show(e, v)
    };
    this.collideBallWithPlayer = function(v, G) {
        for (var O = 0; O < G.length; O++)
            for (var L = G[O].getEdges(), D = 0; D < L.length; D++) {
                var N = L[D].getModel(),
                    T = collideEdgeWithCircle(N, v.vPos(), v.getRadius());
                if (T) {
                    v.setUserData({
                        color: G[O].getColorStick()
                    });
                    var F = new CVector2;
                    F.setV(N.getNormal());
                    var X = distance(T.closest_point, N.m_pCenter()),
                        V = .5 * N.getLength(),
                        S = MAX_ANGLE_ROOT_COLLISION_BALL_EDGE,
                        P = new CVector2;
                    X = X / V * S;
                    X = degreesToRadians(X);
                    T.closest_point.getX() > N.m_pCenter().getX() ? G[O].getColorStick() === BLUE_STICK ? F.rotate(-X) : F.rotate(+X) : G[O].getColorStick() === BLUE_STICK ? F.rotate(+X) : F.rotate(-X);
                    P.setV(F);
                    P.normalize();
                    G[O].getStrongShotPowerUP() && (Y = I, I = SUPER_SHOT_POWER);
                    P.scalarProduct(I);
                    I <
                        LIMIT_SPEED && (I += PROGRESSIVE_STEP_BALL_VELOCITY);
                    v.vCurForce().setV(P);
                    G[O].getStrongShotPowerUP() && (I = Y);
                    playSound("ball_kick", 1, !1)
                }
            }
    };
    this.goalCheck = function() {
        for (var v = g.length - 1; 0 <= v; v--) g[v] && g[v].checkGoalTop() && (g[v].unload(), g.splice(v, 1), playSound("goal_player", 1, !1), p++, d.goalP1(p), this.showSpecialText(PLAYER_1, aa), p === POINTS_TO_WIN ? this.gameOver(0) : 0 === g.length && (J = C = !1, setTimeout(r.afterGoal, MS_AFTER_GOAL))), g[v] && g[v].checkGoalBottom() && (g[v].unload(), g.splice(v, 1), s_b2Players ? playSound("goal_player",
            1, !1) : playSound("goal_pc", 1, !1), u++, d.goalP2(u), this.showSpecialText(PLAYER_2, aa), u === POINTS_TO_WIN ? this.gameOver(1) : 0 === g.length && (J = C = !1, setTimeout(r.afterGoal, MS_AFTER_GOAL)))
    };
    this.showSpecialText = function(v, G) {
        G.stop();
        G.rotation = 0;
        if (v === PLAYER_1) {
            G.y = Y_OFFBOARD_MESSAGES_DOWN;
            var O = Y_MESSAGES_ON_BOARD_DOWN
        } else v === PLAYER_2 ? (G.y = Y_OFFBOARD_MESSAGES_UP, O = Y_MESSAGES_ON_BOARD_UP, s_b2Players && s_bMobile && (G.rotation = 180)) : 2 === v && (G.y = Y_OFFBOARD_MESSAGES_UP, O = CANVAS_HEIGHT / 2);
        setTimeout(function() {
            playSound("explosion",
                1, !1)
        }, 1100);
        (new createjs.Tween.get(G)).to({
            y: O
        }, 1E3, createjs.Ease.cubicOut).call(function() {
            G.gotoAndPlay("idle");
            G.on("animationend", function() {
                G.y = Y_OFFBOARD_MESSAGES_UP;
                G.gotoAndStop("idle")
            })
        })
    };
    this.afterGoal = function() {
        d.setVisibleButKickOff(!0);
        B = !0;
        K = !1;
        R = y = 0;
        w[PLAYER_1].setStrongShotPowerUP(!1);
        w[PLAYER_2].setStrongShotPowerUP(!1);
        w[PLAYER_1].resetSize();
        w[PLAYER_2].resetSize();
        C = n = !0;
        J = !1;
        x && (x.unload(), x = null)
    };
    this.update = function() {
        if (z)
            if (M && y >= -ANGLE_CRAZY_BALL) {
                y++;
                var v = STEP_UPDATE_CRAZY_BALL;
                y === ANGLE_CRAZY_BALL && (M = !1)
            } else !M && y <= ANGLE_CRAZY_BALL && (y--, v = -STEP_UPDATE_CRAZY_BALL, y === -ANGLE_CRAZY_BALL && (M = !0));
        if (!B) {
            if (b) {
                if (K)
                    for (var G = 0; G < g.length; G++) g[G].vCurForce().rotate(degreesToRadians(v));
                for (G = 0; G < PHYSICS_ITERATIONS; G++)
                    for (v = 0; v < g.length; v++) g[v].vPos().addV(g[v].vCurForce()), g[v].updateTrajectory(), this.collideBallWithPlayer(g[v], w), this.collideCircleWithEdges(g[v], k), z && x && (x.vPos().addV(x.vCurForce()), this.collideCircleWithEdges(x, m), this.collideBallWithBall(g[v], x));
                for (G =
                    0; G < g.length; G++) g[G].updateSpritePosition();
                z && (A += s_iTimeElaps, A >= randomFloatBetween(MIN_MS_SPAWN_POWER_UP, MAX_MS_SPAWN_POWER_UP) && (A = 0, G = Q[parseInt(randomFloatBetween(1, Q.length - 1))], x = new CBonusMalus(parseInt(randomFloatBetween(CANVAS_WIDTH / 2 - 200, CANVAS_WIDTH / 2 + 200)), parseInt(randomFloatBetween(300, CANVAS_HEIGHT - 300)), G, ba), G === DOUBLE_BALLS && (v = new CVector2(5 * randomSign(), 0), x.vPos().set(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2), v.normalize(), v.scalarProduct(BALL_START_VELOCITY), x.vCurForce().setV(v)),
                    G === SHORT_MALUS || G === CRAZY_BALL) && (v = new CVector2(randomFloatBetween(1.5, 2), -1 * randomSign()), v.normalize(), v.scalarProduct(BALL_START_VELOCITY), x.vCurForce().setV(v)), x && (x.updateSpritePosition(), x.checkUnload()), !0 === K && (R += s_iTimeElaps, R >= MS_CRAZY_BALL && (R = 0, K = !1)));
                for (G = 0; G < w.length; G++) w[G].update()
            }
            if (J) {
                if (E) {
                    if (this.fixMouseTremmle()) {
                        if (E > w[PLAYER_1].getX()) w[PLAYER_1].onKeyRight();
                        if (E < w[PLAYER_1].getX()) w[PLAYER_1].onKeyLeft()
                    }
                } else {
                    if (h) w[PLAYER_1].onKeyLeft();
                    if (l) w[PLAYER_1].onKeyRight()
                }
                if (s_b2Players) {
                    if (t) w[PLAYER_2].onKeyRight();
                    if (q) w[PLAYER_2].onKeyLeft()
                }
                if (!s_b2Players) {
                    for (G = 0; G < g.length; G++) g[H] ? g[G].getY() < g[H].getY() && (H = G) : H = G;
                    this.AICpu(g[H], w[PLAYER_2])
                }
            }
            C && this.goalCheck()
        }
    };
    this.onUnloadPowerUP = function() {
        x = null
    };
    this.collideBallWithBall = function(v, G) {
        var O = v.getX(),
            L = v.getY(),
            D = G.getX(),
            N = G.getY(),
            T = v.getRadius(),
            F = G.getRadius();
        T = (T + F) * (T + F);
        if (distanceBetween2PointsV2(O, L, D, N) < T) {
            switch (G.getType()) {
                case LARGE_BONUS:
                    playSound("power_up_bonus", 1, !1);
                    if (v.getUserData()) w[v.getUserData().color].onBonus();
                    break;
                case SHORT_MALUS:
                    playSound("power_up_malus", 1, !1);
                    if (v.getUserData()) w[v.getUserData().color].onMalus();
                    break;
                case SUPER_SHOT:
                    playSound("power_up_bonus", 1, !1);
                    v.getUserData() && w[v.getUserData().color].setStrongShotPowerUP(!0);
                    break;
                case DOUBLE_BALLS:
                    playSound("power_up_bonus", 1, !1);
                    O = new CBall(v.getX(), v.getY(), s_oSpriteLibrary.getSprite("ball"), "ball_" + g.length, s_oStage);
                    O.vCurForce().setV(v.vCurForce());
                    O.vCurForce().invert();
                    g.push(O);
                    break;
                case CRAZY_BALL:
                    playSound("power_up_malus", 1, !1), M = !0,
                        y = 0, K = !0
            }
            x.unload();
            x = null;
            v.getUserData() ? r.showSpecialText(v.getUserData().color, U[G.getType()]) : r.showSpecialText(2, U[G.getType()])
        }
    };
    this.setPause = function(v) {
        B = v
    };
    this.setInput = function(v) {
        J = v
    };
    this.onEndCrazyBall = function() {
        K = !1
    };
    s_oGame = this;
    POINTS_TO_LOSE = a.points_to_lose;
    START_SCORE = a.starting_points;
    AD_SHOW_COUNTER = a.ad_show_counter;
    var r = this;
    this._init()
}
var s_oGame;

function CInterface() {
    var a, c, b, e, d, f, g, k, w, h, l, q, t, p, u = null,
        B = null,
        C = null,
        J, n, z, E, x, m, A, y, M, K, R;
    this._init = function() {
        t = new createjs.Container;
        A = new createjs.Shape;
        A.graphics.beginFill("#000000").drawRect(0, CANVAS_HEIGHT / 2, CANVAS_WIDTH, CANVAS_HEIGHT / 2);
        A.alpha = .01;
        t.addChild(A);
        y = new createjs.Shape;
        y.graphics.beginFill("#000000").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT / 2);
        y.alpha = .01;
        t.addChild(y);
        m = new createjs.Container;
        s_oStage.addChild(t);
        K = [];
        R = [];
        var H = s_oSpriteLibrary.getSprite("but_kickoff");
        J = new CGfxButton(.5 * CANVAS_WIDTH, .5 * CANVAS_HEIGHT, H, t);
        J.pulseAnimation();
        J.addEventListener(ON_MOUSE_DOWN, s_oGame.onMouseDown, this);
        H = s_oSpriteLibrary.getSprite("point_1");
        for (var I = 0; I < POINTS_TO_WIN; I++) K.push(createBitmap(H, H.width, H.height)), R.push(createBitmap(H, H.width, H.height)), K[I].regX = H.width / 2, K[I].regY = H.height / 2, K[I].x = CANVAS_WIDTH / 2 + 360, K[I].y = CANVAS_HEIGHT / 2 + 30 + 45 * I, R[I].regX = H.width / 2, R[I].regY = H.height / 2, R[I].x = CANVAS_WIDTH / 2 + 360, R[I].y = CANVAS_HEIGHT / 2 - 30 - 45 * I, 9 < I && (K[I].x = CANVAS_WIDTH /
            2 + 322, K[I].y = CANVAS_HEIGHT / 2 + 30 + 45 * (I - 10), R[I].x = CANVAS_WIDTH / 2 + 322, R[I].y = CANVAS_HEIGHT / 2 - 30 - 45 * (I - 10)), t.addChild(K[I], R[I]);
        t.addChild(m);
        H = s_oSpriteLibrary.getSprite("but_settings");
        a = CANVAS_WIDTH - H.width / 2 - 10;
        c = H.height / 2 + 10;
        H = s_oSpriteLibrary.getSprite("but_exit");
        w = a;
        h = c + H.height + 10;
        q = new CGfxButton(w, h, H, t);
        q.addEventListener(ON_MOUSE_UP, this._onExit, this);
        q.setVisible(!1);
        H = s_oSpriteLibrary.getSprite("but_help");
        b = a;
        e = h + H.height + 10;
        n = new CGfxButton(b, e, H, t);
        n.addEventListener(ON_MOUSE_UP,
            function() {
                new CPanelTutorial
            }, this);
        n.setVisible(!1);
        g = b;
        k = e + H.height + 10;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) H = s_oSpriteLibrary.getSprite("audio_icon"), l = new CToggle(g, k, H, s_bAudioActive, t), l.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this), l.setVisible(!1);
        H = window.document;
        I = H.documentElement;
        B = I.requestFullscreen || I.mozRequestFullScreen || I.webkitRequestFullScreen || I.msRequestFullscreen;
        C = H.exitFullscreen || H.mozCancelFullScreen || H.webkitExitFullscreen || H.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN &&
            (B = !1);
        B && screenfull.isEnabled && (H = s_oSpriteLibrary.getSprite("but_fullscreen"), l ? (d = g, f = k + H.height + 10) : (d = g, f = k), p = new CToggle(d, f, H, s_bFullscreen, t), p.addEventListener(ON_MOUSE_UP, this._onFullscreen, this), p.setVisible(!1));
        H = s_oSpriteLibrary.getSprite("but_settings");
        z = new CGfxButton(a, c, H, t);
        z.addEventListener(ON_MOUSE_UP, this.onSettings);
        E = !1;
        M = this;
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.onSettings = function() {
        M.setOnTop();
        E ? (s_oGame.setStartGame(!0), x.onExit(), E = !1, (new createjs.Tween.get(q.getButtonImage())).to({
            x: z.getX(),
            y: z.getY()
        }, 300, createjs.Ease.cubicIn).call(function() {
            q.setVisible(!1);
            n.setVisible(!1);
            l && l.setVisible(!1);
            p && p.setVisible(!1)
        }), (new createjs.Tween.get(n.getButtonImage())).to({
            x: z.getX(),
            y: z.getY()
        }, 300, createjs.Ease.cubicIn), l && (new createjs.Tween.get(l.getButtonImage())).to({
            x: z.getX(),
            y: z.getY()
        }, 300, createjs.Ease.cubicIn), p && (new createjs.Tween.get(p.getButtonImage())).to({
            x: z.getX(),
            y: z.getY()
        }, 300, createjs.Ease.cubicIn)) : (s_oGame.setStartGame(!1), x = new CPause(m), E = !0, q.setX(z.getX()), q.setY(z.getY()),
            q.setVisible(!0), n.setX(z.getX()), n.setY(z.getY()), n.setVisible(!0), l && (l.setX(z.getX()), l.setY(z.getY()), l.setVisible(!0)), p && (p.setX(z.getX()), p.setY(z.getY()), p.setVisible(!0)), (new createjs.Tween.get(q.getButtonImage())).to({
                x: w - s_iOffsetX,
                y: h + s_iOffsetY
            }, 300, createjs.Ease.cubicOut), (new createjs.Tween.get(n.getButtonImage())).to({
                x: b - s_iOffsetX,
                y: e + s_iOffsetY
            }, 300, createjs.Ease.cubicOut), l && (new createjs.Tween.get(l.getButtonImage())).to({
                x: g - s_iOffsetX,
                y: k + s_iOffsetY
            }, 300, createjs.Ease.cubicOut),
            p && (new createjs.Tween.get(p.getButtonImage())).to({
                x: d - s_iOffsetX,
                y: f + s_iOffsetY
            }, 300, createjs.Ease.cubicOut))
    };
    this.unload = function() {
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) l.unload(), l = null;
        q.unload();
        s_oStage.removeChild(t);
        B && screenfull.isEnabled && p.unload();
        s_oInterface = null
    };
    this.goalP1 = function(H) {
        var I = s_oSpriteLibrary.getSprite("point_2"),
            Q = createBitmap(I, I.width, I.height);
        Q.alpha = 0;
        Q.regX = I.width / 2;
        Q.regY = I.width / 2;
        Q.x = K[H - 1].x;
        Q.y = K[H - 1].y;
        t.addChild(Q);
        (new createjs.Tween.get(Q)).to({
                alpha: 1
            },
            1E3)
    };
    this.goalP2 = function(H) {
        var I = s_oSpriteLibrary.getSprite("point_2"),
            Q = createBitmap(I, I.width, I.height);
        Q.alpha = 0;
        Q.regX = I.width / 2;
        Q.regY = I.width / 2;
        Q.x = R[H - 1].x;
        Q.y = R[H - 1].y;
        t.addChild(Q);
        (new createjs.Tween.get(Q)).to({
            alpha: 1
        }, 1E3)
    };
    this.setVisibleButKickOff = function(H) {
        J.setVisible(H)
    };
    this.initMobileButtons = function() {
        A.on("mousedown", s_oGame.onTouchDownMobileP1);
        A.on("pressup", s_oGame.onTouchUpMobileP1);
        s_b2Players && (y.on("mousedown", s_oGame.onTouchDownMobileP2), y.on("pressup", s_oGame.onTouchUpMobileP2))
    };
    this.refreshButtonPos = function(H, I) {
        z.setPosition(a - H, c + I);
        q.setPosition(w - H, h + I);
        n.setPosition(b - H, e + I);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || l.setPosition(g - H, k + I);
        B && screenfull.isEnabled && p.setPosition(d - H, f + I)
    };
    this.setOnTop = function() {
        s_oStage.addChildAt(t, s_oStage.numChildren)
    };
    this.refreshScore = function(H) {};
    this._onButHelpRelease = function() {
        u = new CHelpPanel
    };
    this._onButRestartRelease = function() {
        s_oGame.restartGame()
    };
    this.onExitFromHelp = function() {
        u.unload()
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onExit = function() {
        new CAreYouSurePanel(s_oGame.onExit)
    };
    this.resetFullscreenBut = function() {
        B && screenfull.isEnabled && p.setActive(s_bFullscreen)
    };
    this._onFullscreen = function() {
        s_bFullscreen ? C.call(window.document) : B.call(window.document.documentElement);
        sizeHandler()
    };
    s_oInterface = this;
    this._init();
    return this
}
var s_oInterface = null;

function CCreditsPanel() {
    var a, c, b, e;
    this._init = function () {
        // Black background
        c = new createjs.Shape();
        c.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        c.alpha = 0;
        c.on("mousedown", function () {});
        s_oStage.addChild(c);
        new createjs.Tween.get(c).to({ alpha: 0.7 }, 500);

        // Message box container
        b = new createjs.Container();
        s_oStage.addChild(b);

        var f = s_oSpriteLibrary.getSprite("msg_box");
        var g = createBitmap(f);
        g.regX = f.width / 2;
        g.regY = f.height / 2;
        b.addChild(g);

        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT + f.height / 2;
        a = b.y;

        new createjs.Tween.get(b).to({
            y: CANVAS_HEIGHT / 2 - 40
        }, 500, createjs.Ease.quartIn);

        // "DEVELOPED BY" text
        g = f.width - 100;
        var k = 120;
        new CTLText(b, -(g / 2), -f.height / 2 + 90 - k / 2, g, k, 40, "center", "#4ce700", PRIMARY_FONT, 1, 2, 2, "DEVELOPED BY", true, true, false, false);

        // Clickable "RETROS GAME" text instead of image logo
        var retroText = new createjs.Text("RETROS GAME", "40px " + PRIMARY_FONT, "#4ce700");
        retroText.textAlign = "center";
        retroText.textBaseline = "middle";
        retroText.x = 0;   // Center of the container
        retroText.y = 105;
        retroText.cursor = "pointer";

        // Hover effects (optional)
        retroText.addEventListener("mouseover", () => {
            retroText.color = "#ffffff";
        });
        retroText.addEventListener("mouseout", () => {
            retroText.color = "#4ce700";
        });

        // Click handler
        retroText.addEventListener("click", this._onLogoButRelease);
        b.addChild(retroText);

        // Exit button
        f = s_oSpriteLibrary.getSprite("but_exit");
        e = new CGfxButton(285, -190, f, b);
        e.addEventListener(ON_MOUSE_UP, this.unload, this);
    };

    this.changePointer = function (f) {
        if (!s_bMobile) {
            f.target.cursor = "pointer";
        }
    };

    this.unload = function () {
        e.setClickable(false);
        new createjs.Tween.get(c).to({ alpha: 0 }, 500);
        new createjs.Tween.get(b).to({ y: a }, 400, createjs.Ease.backIn).call(() => {
            s_oStage.removeChild(c);
            s_oStage.removeChild(b);
            e.unload();
        });
        c.removeAllEventListeners();
    };

    this._onLogoButRelease = function () {
        window.open("https://retrosgame.com/", "_blank");
    };

    this._init();
}


function CAreYouSurePanel(a) {
    var c, b, e, d, f;
    this._init = function(k) {
        d = new createjs.Shape;
        d.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        d.alpha = 0;
        d.on("mousedown", function() {});
        s_oStage.addChild(d);
        (new createjs.Tween.get(d)).to({
            alpha: .7
        }, 500);
        f = new createjs.Container;
        s_oStage.addChild(f);
        k = s_oSpriteLibrary.getSprite("msg_box");
        var w = createBitmap(k);
        w.regX = k.width / 2;
        w.regY = k.height / 2;
        f.addChild(w);
        f.x = CANVAS_WIDTH / 2;
        f.y = CANVAS_HEIGHT + k.height / 2;
        c = f.y;
        (new createjs.Tween.get(f)).to({
            y: CANVAS_HEIGHT /
                2
        }, 500, createjs.Ease.quartIn);
        w = k.width - 50;
        new CTLText(f, -(w / 2), -k.height / 2 + 120 - 60, w, 120, 54, "center", "#4ce700", PRIMARY_FONT, 1, 2, 2, TEXT_ARE_SURE, !0, !0, !0, !1);
        b = new CGfxButton(110, 120, s_oSpriteLibrary.getSprite("but_yes_big"), f);
        b.addEventListener(ON_MOUSE_UP, this._onButYes, this);
        e = new CGfxButton(-110, 120, s_oSpriteLibrary.getSprite("but_exit"), f);
        e.addEventListener(ON_MOUSE_UP, this._onButNo, this);
        e.pulseAnimation()
    };
    this._onButYes = function() {
        e.setClickable(!1);
        b.setClickable(!1);
        (new createjs.Tween.get(d)).to({
                alpha: 0
            },
            500);
        (new createjs.Tween.get(f)).to({
            y: c
        }, 400, createjs.Ease.backIn).call(function() {
            g.unload();
            a()
        })
    };
    this._onButNo = function() {
        e.setClickable(!1);
        b.setClickable(!1);
        (new createjs.Tween.get(d)).to({
            alpha: 0
        }, 500);
        (new createjs.Tween.get(f)).to({
            y: c
        }, 400, createjs.Ease.backIn).call(function() {
            g.unload()
        })
    };
    this.unload = function() {
        e.unload();
        b.unload();
        s_oStage.removeChild(d);
        s_oStage.removeChild(f);
        d.removeAllEventListeners()
    };
    var g = this;
    this._init(a)
}

function CEndPanel(a, c) {
    var b, e, d, f, g, k, w, h, l;
    this._init = function(q, t) {
        s_oGame.setPause(!0);
        e = new createjs.Container;
        e.alpha = 0;
        e.visible = !1;
        s_oStage.addChild(e);
        l = new createjs.Shape;
        l.graphics.beginFill("#000").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        l.alpha = .5;
        l.on("mousedown", this.onMouseDown, this);
        b = createBitmap(q);
        var p = b.getBounds();
        b.regX = p.width / 2;
        b.regY = p.height / 2;
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT / 2;
        e.addChild(l, b);
        p = 550;
        var u = 120,
            B = CANVAS_WIDTH / 2,
            C = s_b2Players ? CANVAS_HEIGHT / 2 - 20 : CANVAS_HEIGHT /
            2 - 68;
        d = new CTLText(e, B - p / 2, C - u / 2, p, u, 47, "center", "#4ce700", PRIMARY_FONT, 1, 2, 2, "", !0, !0, !0, !1);
        p = 550;
        u = 120;
        B = CANVAS_WIDTH / 2;
        C = CANVAS_HEIGHT / 2 + 68;
        f = new CTLText(e, B - p / 2, C - u / 2, p, u, 32, "center", "#4ce700", PRIMARY_FONT, 1, 2, 2, "0", !0, !0, !1, !1);
        p = s_oSpriteLibrary.getSprite("but_restart");
        k = new CGfxButton(CANVAS_WIDTH / 2 + 100, CANVAS_HEIGHT / 2 + 195, p, e);
        p = s_oSpriteLibrary.getSprite("but_home");
        w = new CGfxButton(CANVAS_WIDTH / 2 - 100, CANVAS_HEIGHT / 2 + 195, p, e)
    };
    this.unload = function() {
        l.removeAllEventListeners()
    };
    this.onMouseDown =
        function() {};
    this._initListener = function() {
        w.addEventListener(ON_MOUSE_DOWN, this._onExit, this);
        k.addEventListener(ON_MOUSE_DOWN, this._onRestart, this)
    };
    this.show = function(q, t) {
        h = 0 === t || s_b2Players ? "win_panel" : "game_over";
        playSound(h, 1, !1);
        g = q;
        var p = t + 1;
        0 === t ? d.refreshText(TEXT_GAMEOVER) : (g = q = 0, d.refreshText(TEXT_LOSE + p + TEXT_LOSE2));
        !0 === s_b2Players ? d.refreshText(TEXT_WIN_2PLAYERS + p + TEXT_WIN_2PLAYERS_2) : f.refreshText(TEXT_SCORE + ": " + q);
        e.visible = !0;
        var u = this;
        createjs.Tween.get(e).to({
            alpha: 1
        }, 500).call(function() {
            u._initListener()
        });
        s_bFriendly || (document.dispatchEvent(new CustomEvent("save_score", {
            detail: {
                score: g
            }
        })), document.dispatchEvent(new CustomEvent("show_interlevel_ad")), document.dispatchEvent(new CustomEvent("end_session")))
    };
    this._onExit = function() {
        stopSound(h);
        s_bFriendly || document.dispatchEvent(new CustomEvent("share_event", {
            detail: {
                score: g
            }
        }));
        s_oStage.removeChild(e);
        s_oGame.unload();
        s_oMain.gotoMenu()
    };
    this._onRestart = function() {
        stopSound(h);
        s_oGame.unload();
        s_oMain.gotoGame();
        s_oStage.removeChild(e);
        s_b2Players ||
            document.dispatchEvent(new CustomEvent("share_event", {
                detail: {
                    score: g
                }
            }))
    };
    this._init(a, c);
    return this
}

function CEdgeModel(a, c, b, e) {
    var d = null,
        f = null,
        g = null,
        k = null,
        w = null;
    this._init = function(h, l, q, t) {
        this.set(h, l, q, t)
    };
    this.destroy = function() {
        w = k = g = f = d = null
    };
    this.render = function(h) {
        h.moveTo(d.x, d.y);
        h.lineTo(f.x, f.y)
    };
    this.toString = function(h) {
        trace(h + " " + d.x + " " + d.y + " " + f.x + " " + f.y)
    };
    this.add = function(h) {
        d.addV(h);
        f.addV(h)
    };
    this.editSize = function(h) {
        d.subtract(h);
        f.addV(h);
        this.calculateNormal();
        this.calculateCenter()
    };
    this.set = function(h, l, q, t) {
        d = new CVector2;
        f = new CVector2;
        d.set(h, l);
        f.set(q, t);
        this.calculateNormal();
        this.calculateCenter()
    };
    this.moveY = function(h) {
        d.add(0, h);
        f.add(0, h);
        this.calculateNormal();
        this.calculateCenter()
    };
    this.moveX = function(h) {
        d.add(h, 0);
        f.add(h, 0);
        this.calculateNormal();
        this.calculateCenter()
    };
    this.scale = function(h) {
        d.scalarProduct(h);
        f.scalarProduct(h);
        this.calculateNormal();
        this.calculateCenter()
    };
    this.calculateNormal = function() {
        w = null;
        w = new CVector2;
        w.setV(f);
        w.subtract(d);
        w.rot90CCW();
        w.normalize()
    };
    this.calculateCenter = function() {
        g = null;
        g = centerBetweenPointsV2(d,
            f);
        k = new CVector2;
        k.setV(w);
        k.scalarProduct(5);
        k.addV(g)
    };
    this.getPointA = function() {
        return d
    };
    this.m_pCenter = function() {
        return g
    };
    this.getPointB = function() {
        return f
    };
    this.getNormal = function() {
        return w
    };
    this.renderNormal = function(h) {
        h.moveTo(g.x, g.y);
        h.lineTo(k.x, k.y)
    };
    this.getLength = function() {
        return Math.sqrt(Math.pow(b - a, 2) + Math.pow(e - c, 2))
    };
    this._init(a, c, b, e);
    return this
}

function CEdgeViewer(a, c, b, e, d, f) {
    var g;
    this.init = function(k, w, h, l, q, t) {
        k = k > h || w > l ? w === l ? (new createjs.Graphics).beginFill("#FFF").drawRect(h, l, q, t) : (new createjs.Graphics).beginFill("#FFF").drawRect(h, l, t, q) : w === l ? (new createjs.Graphics).beginFill("#FFF").drawRect(k, w, q, t) : (new createjs.Graphics).beginFill("#FFF").drawRect(k, w, t, q);
        g = new createjs.Shape(k);
        g.y = -t / 2;
        s_oStage.addChild(g)
    };
    this.moveY = function(k) {
        g.y += k
    };
    this.moveX = function(k) {
        g.x += k
    };
    this.unload = function() {
        s_oStage.removeChild(g)
    };
    this.init(a,
        c, b, e, d, f)
}

function CEdge(a, c, b, e, d, f) {
    var g, k, w, h, l, q, t;
    this.init = function(p, u, B, C, J) {
        t = 0;
        l = new CEdgeModel(p, u, B, C);
        var n = l.getLength();
        f && (q = new CEdgeViewer(p, u, B, C, n, J))
    };
    this.getModel = function() {
        return l
    };
    this.moveY = function(p) {
        f && q.moveY(p);
        l.moveY(p)
    };
    this.moveX = function(p) {
        f && q.moveX(p);
        l.moveX(p)
    };
    this.changeSize = function(p) {
        t += p;
        w = l.getPointA().getX();
        h = l.getPointA().getY();
        g = l.getPointB().getX();
        k = l.getPointB().getY();
        l.destroy();
        l = new CEdgeModel(w + p, h, g - p, k);
        f && (q.unload(), q = new CEdgeViewer(l.getPointA().getX(), l.getPointA().getY(),
            l.getPointB().getX(), l.getPointB().getY(), l.getLength(), d))
    };
    this.resetSize = function(p) {
        w = l.getPointA().getX();
        h = l.getPointA().getY();
        g = l.getPointB().getX();
        k = l.getPointB().getY();
        l.destroy();
        var u = 0 < t * p ? 0 < p ? -1 : 1 : 0 > p ? -1 : 1;
        l = 0 > t * p ? new CEdgeModel(w - u * p * t, h, g + u * p * t, k) : new CEdgeModel(w + u * p * t, h, g - u * p * t, k);
        t = 0;
        f && (q.unload(), q = new CEdgeViewer(l.getPointA().getX(), l.getPointA().getY(), l.getPointB().getX(), l.getPointB().getY(), l.getLength(), d))
    };
    this.init(a, c, b, e, d)
}

function CVector2(a, c) {
    var b, e;
    this._init = function(d, f) {
        b = d;
        e = f
    };
    this.add = function(d, f) {
        b += d;
        e += f
    };
    this.addV = function(d) {
        b += d.getX();
        e += d.getY()
    };
    this.scalarDivision = function(d) {
        b /= d;
        e /= d
    };
    this.subtract = function(d) {
        b -= d.getX();
        e -= d.getY()
    };
    this.scalarProduct = function(d) {
        b *= d;
        e *= d
    };
    this.invert = function() {
        b *= -1;
        e *= -1
    };
    this.dotProduct = function(d) {
        return b * d.getX() + e * d.getY()
    };
    this.set = function(d, f) {
        b = d;
        e = f
    };
    this.setV = function(d) {
        b = d.getX();
        e = d.getY()
    };
    this.length = function() {
        return Math.sqrt(b * b + e * e)
    };
    this.length2 = function() {
        return b * b + e * e
    };
    this.normalize = function() {
        var d = this.length();
        0 < d && (b /= d, e /= d)
    };
    this.angleBetweenVectors = function(d) {
        d = Math.acos(this.dotProduct(d) / (this.length() * d.length()));
        return !0 === isNaN(d) ? 0 : d
    };
    this.getNormalize = function(d) {
        this.length();
        d.set(b, e);
        d.normalize()
    };
    this.rot90CCW = function() {
        var d = b;
        b = -e;
        e = d
    };
    this.rot90CW = function() {
        var d = b;
        b = e;
        e = -d
    };
    this.getRotCCW = function(d) {
        d.set(b, e);
        d.rot90CCW()
    };
    this.getRotCW = function(d) {
        d.set(b, e);
        d.rot90CW()
    };
    this.ceil = function() {
        b =
            Math.ceil(b);
        e = Math.ceil(e)
    };
    this.round = function() {
        b = Math.round(b);
        e = Math.round(e)
    };
    this.toString = function() {
        return "Vector2: " + b + ", " + e
    };
    this.print = function() {
        trace("Vector2: " + b + ", " + e)
    };
    this.getX = function() {
        return b
    };
    this.getY = function() {
        return e
    };
    this.rotate = function(d) {
        var f = b,
            g = e;
        b = f * Math.cos(d) + g * Math.sin(d);
        e = f * -Math.sin(d) + g * Math.cos(d)
    };
    this._init(a, c)
}

function CBall(a, c, b, e, d) {
    var f, g, k, w, h, l, q, t, p, u, B, C, J;
    this._init = function(z, E, x, m) {
        k = new createjs.Container;
        k.x = z;
        k.y = E;
        J = new CBallTrajectory(n);
        w = createBitmap(x, x.width, x.height);
        w.regX = x.width / 2;
        w.regY = x.height / 2;
        k.addChild(w);
        h = new CVector2;
        h.set(k.x, k.y);
        l = new CVector2;
        l.set(0, 0);
        t = m;
        f = z;
        g = E;
        p = .5 * x.width;
        u = .5 * p;
        B = p * p;
        q = new CVector2(0, 0);
        n.addChild(k)
    };
    this.unload = function() {
        n.removeChild(k)
    };
    this.setVisible = function(z) {
        k.visible = z
    };
    this.setPosition = function(z, E) {
        k.x = z;
        k.y = E
    };
    this.resetPos = function() {
        k.x =
            f;
        k.y = g;
        h.set(k.x, k.y);
        q.set(0, 0)
    };
    this.setAngle = function(z) {
        w.rotation = z
    };
    this.getHalfRadius = function() {
        return u
    };
    this.getX = function() {
        return k.x
    };
    this.setUserData = function(z) {
        C = z
    };
    this.getUserData = function() {
        return C
    };
    this.getY = function() {
        return k.y
    };
    this.checkGoalTop = function() {
        return 0 >= k.y ? !0 : !1
    };
    this.checkGoalBottom = function() {
        return k.y >= CANVAS_HEIGHT ? !0 : !1
    };
    this.scale = function(z) {
        k.scaleX = z;
        k.scaleY = z
    };
    this.getScale = function() {
        return k.scaleX
    };
    this.type = function() {
        return BALL
    };
    this.vCurForce =
        function() {
            return q
        };
    this.vPos = function() {
        return h
    };
    this.setPos = function(z) {
        h.setV(z)
    };
    this.vPrevPos = function() {
        return l
    };
    this.getRadius = function() {
        return p
    };
    this.getRadiusQuadro = function() {
        return B
    };
    this.updateSpritePosition = function() {
        k.x = h.getX();
        k.y = h.getY()
    };
    this.isGoalKeeper = function() {
        return !1
    };
    this.getID = function() {
        return t
    };
    this.getChildIndex = function() {
        n.getChildIndex(k)
    };
    this.setChildIndex = function(z) {
        n.setChildIndex(k, z)
    };
    this.getObject = function() {
        return k
    };
    this.updateTrajectory = function() {
        J.update(h)
    };
    var n = d;
    this._init(a, c, b, e);
    return this
}

function CSelectPlayers() {
    var a, c, b, e, d, f, g, k, w, h, l, q, t = null,
        p = null;
    this.init = function() {
        s_oSelectPlayers = this;
        g = new createjs.Container;
        s_oStage.addChild(g);
        var u = s_oSpriteLibrary.getSprite("bg_menu"),
            B = new createjs.Shape;
        B.graphics.beginFill("#000000").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        B.alpha = 0;
        u = new createBitmap(u, u.width, u.height);
        g.addChild(u);
        g.addChild(B);
        u = s_oSpriteLibrary.getSprite("but_p1");
        k = new CGfxButton(CANVAS_WIDTH / 2 - 225, CANVAS_HEIGHT / 2, u, g);
        k.addEventListener(ON_MOUSE_DOWN,
            function() {
                this.onSelectPlayer(!1)
            }, this);
        u = s_oSpriteLibrary.getSprite("but_p2");
        w = new CGfxButton(CANVAS_WIDTH / 2 + 225, CANVAS_HEIGHT / 2, u, g);
        w.addEventListener(ON_MOUSE_DOWN, function() {
            this.onSelectPlayer(!0)
        }, this);
        B = CANVAS_WIDTH - 2 * EDGEBOARD_X - 10;
        new CTLText(g, CANVAS_WIDTH / 2 - B / 2, CANVAS_HEIGHT / 2 - 300 - 60, B, 120, 72, "center", "#4ce700", PRIMARY_FONT, 1, 2, 2, TEXT_SELECT_PLAYERS_MENU, !0, !0, !1, !1);
        u = s_oSpriteLibrary.getSprite("but_exit");
        d = CANVAS_WIDTH - u.width / 2 - 10;
        f = u.height / 2 + 10;
        h = new CGfxButton(d, f, u, g);
        h.addEventListener(ON_MOUSE_UP,
            this._onExit, this);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) b = h.getX() - u.width - 10, e = u.height / 2 + 10, l = new CToggle(b, e, s_oSpriteLibrary.getSprite("audio_icon"), s_bAudioActive, g), l.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        B = window.document;
        u = B.documentElement;
        t = u.requestFullscreen || u.mozRequestFullScreen || u.webkitRequestFullScreen || u.msRequestFullscreen;
        p = B.exitFullscreen || B.mozCancelFullScreen || B.webkitExitFullscreen || B.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (t = !1);
        t && screenfull.isEnabled &&
            (u = s_oSpriteLibrary.getSprite("but_fullscreen"), a = u.width / 4 + 10, c = u.height / 2 + 10, q = new CToggle(a, c, u, s_bFullscreen, g), q.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.refreshButtonPos = function(u, B) {
        h.setPosition(d - u, f + B);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || l.setPosition(b - u, B + e);
        t && screenfull.isEnabled && q.setPosition(a + u, c + B)
    };
    this.onSelectPlayer = function(u) {
        s_b2Players = u;
        this.unload();
        s_b2Players ? (START_PROGRESSIVE_BALL_VELOCITY =
            ARRAY_BALL_SPEED[1].start_speed, PROGRESSIVE_STEP_BALL_VELOCITY = ARRAY_BALL_SPEED[1].step, LIMIT_SPEED = ARRAY_BALL_SPEED[1].limit, INDEX_DIFFICULT = 1, s_oMain.gotoGame()) : s_oMain.gotoLevelMenu()
    };
    this.unload = function() {
        s_oStage.removeChild(g);
        s_oSelectPlayers
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this.resetFullscreenBut = function() {
        t && screenfull.isEnabled && q.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? p.call(window.document) :
            t.call(window.document.documentElement);
        sizeHandler()
    };
    this._onExit = function() {
        this.unload();
        s_oMain.gotoMenu()
    };
    this.init()
}
var s_oSelectPlayers = null;

function CLevelBut(a, c, b, e, d, f) {
    var g, k, w, h = [],
        l = [],
        q, t, p, u, B;
    this._init = function(J, n, z, E, x) {
        k = [];
        w = [];
        p = new createjs.Container;
        C.addChild(p);
        var m = new createjs.SpriteSheet({
            images: [E],
            frames: {
                width: E.width / 2,
                height: E.height,
                regX: E.width / 2 / 2,
                regY: E.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        });
        g = x;
        t = createSprite(m, "state_" + g, E.width / 2 / 2, E.height / 2, E.width / 2, E.height);
        t.mouseEnabled = x;
        t.x = J;
        t.y = n;
        t.stop();
        !s_bMobile && g && (p.cursor = "pointer");
        p.addChild(t);
        h.push(t);
        E = E.width / 2 - 10;
        q = new CTLText(p,
            J - 7 - E / 2, n + 30 - 60, E, 120, 80, "center", x ? "#fff" : "#404040", PRIMARY_FONT, 1, 2, 2, z, !0, !0, !1, !1);
        this._initListener()
    };
    this.unload = function() {
        p.off("mousedown", u);
        p.off("pressup", B);
        p.removeChild(t)
    };
    this._initListener = function() {
        u = p.on("mousedown", this.buttonDown);
        B = p.on("pressup", this.buttonRelease)
    };
    this.viewBut = function(J) {
        p.addChild(J)
    };
    this.addEventListener = function(J, n, z) {
        k[J] = n;
        w[J] = z
    };
    this.addEventListenerWithParams = function(J, n, z, E) {
        k[J] = n;
        w[J] = z;
        l = E
    };
    this.ifClickable = function() {
        return !0 === p.mouseEnabled ?
            1 : 0
    };
    this.setActive = function(J, n) {
        g = n;
        h[J].gotoAndStop("state_" + g);
        h[J].mouseEnabled = !0;
        q.color = g ? "#69b8d5" : "#b4b4b4"
    };
    this.buttonRelease = function() {
        g && (playSound("click", 1, 0), k[ON_MOUSE_UP] && k[ON_MOUSE_UP].call(w[ON_MOUSE_UP], l))
    };
    this.buttonDown = function() {
        k[ON_MOUSE_DOWN] && k[ON_MOUSE_DOWN].call(w[ON_MOUSE_DOWN], l)
    };
    this.setPosition = function(J, n) {
        p.x = J;
        p.y = n
    };
    this.setVisible = function(J) {
        p.visible = J
    };
    var C = f;
    this._init(a, c, b, e, d, f)
}

function CLevelMenu() {
    var a, c, b, e, d, f, g, k, w, h, l, q, t, p, u = null,
        B = null,
        C, J, n, z = null,
        E = null,
        x;
    this._init = function() {
        var m = new createjs.Shape;
        m.graphics.beginFill("#000000").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        k = m.alpha = 0;
        J = new createjs.Container;
        s_oStage.addChild(J);
        var A = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        J.addChild(A);
        J.addChild(m);
        x = [];
        x[0] = TEXT_EASY;
        x[1] = TEXT_MEDIUM;
        x[2] = TEXT_HARD;
        g = CANVAS_WIDTH / 2;
        m = 500;
        C = new CTLText(s_oStage, g - m / 2, -42, m, 120, 70, "center", "#4ce700", PRIMARY_FONT,
            1, 2, 2, TEXT_SELECT_LEVEL, !0, !0, !1, !1);
        m = s_oSpriteLibrary.getSprite("but_exit");
        d = CANVAS_WIDTH - m.width / 2 - 10;
        f = m.height / 2 + 10;
        t = new CGfxButton(d, f, m, s_oStage);
        t.addEventListener(ON_MOUSE_UP, this._onExit, this);
        w = m.height;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) b = t.getX() - m.width - 10, e = m.height / 2 + 10, p = new CToggle(b, e, s_oSpriteLibrary.getSprite("audio_icon"), s_bAudioActive, s_oStage), p.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        m = window.document;
        A = m.documentElement;
        z = A.requestFullscreen ||
            A.mozRequestFullScreen || A.webkitRequestFullScreen || A.msRequestFullscreen;
        E = m.exitFullscreen || m.mozCancelFullScreen || m.webkitExitFullscreen || m.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (z = !1);
        z && screenfull.isEnabled && (m = s_oSpriteLibrary.getSprite("but_fullscreen"), a = m.width / 4 + 10, c = m.height / 2 + 10, n = new CToggle(a, c, m, s_bFullscreen, s_oStage), n.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        this._checkBoundLimits();
        l = [];
        m = CANVAS_WIDTH - 2 * EDGEBOARD_X;
        A = Math.floor(m / NUM_COLS_PAGE_LEVEL) / 2;
        for (var y =
                0, M = 0; M < NUM_COLS_PAGE_LEVEL; M++) l.push(y), y += 2 * A;
        q = [];
        this._createNewLevelPage(0, NUM_LEVELS);
        if (1 < q.length) {
            for (A = 1; A < q.length; A++) q[A].visible = !1;
            u = new CGfxButton(CANVAS_WIDTH / 2 + 300, CANVAS_HEIGHT / 2 + 350, s_oSpriteLibrary.getSprite("arrow"), s_oStage);
            u.getButtonImage().rotation = 90;
            u.addEventListener(ON_MOUSE_UP, this._onRight, this);
            B = new CGfxButton(CANVAS_WIDTH / 2 - 300, CANVAS_HEIGHT / 2 + 350, s_oSpriteLibrary.getSprite("arrow"), s_oStage);
            B.getButtonImage().rotation = -90;
            B.addEventListener(ON_MOUSE_UP, this._onLeft,
                this)
        }
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        C.setY(q[0].y - (175 + Math.floor(m / NUM_COLS_PAGE_LEVEL) / 2))
    };
    this.unload = function() {
        for (var m = 0; m < h.length; m++) h[m].unload();
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || p.unload();
        z && screenfull.isEnabled && n.unload();
        t.unload();
        null !== B && (B.unload(), u.unload());
        s_oLevelMenu = null
    };
    this.refreshButtonPos = function(m, A) {
        t.setPosition(d - m, f + A);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || p.setPosition(b - m, A + e);
        z && screenfull.isEnabled && n.setPosition(a + m, c + A)
    };
    this._checkBoundLimits = function() {
        for (var m = s_oSpriteLibrary.getSprite("but_easy"), A = 0, y = CANVAS_HEIGHT - 2 * EDGEBOARD_Y - 2 * w, M = 0; A < y;) A += m.height + 20, M++;
        NUM_ROWS_PAGE_LEVEL > M && (NUM_ROWS_PAGE_LEVEL = M);
        y = A = 0;
        for (M = CANVAS_WIDTH - 2 * EDGEBOARD_X; y < M;) y += m.width + 5, A++;
        NUM_COLS_PAGE_LEVEL > A && (NUM_COLS_PAGE_LEVEL = A)
    };
    this._createNewLevelPage = function(m, A) {
        var y = new createjs.Container;
        J.addChild(y);
        q.push(y);
        h = [];
        for (var M = 0, K = 0, R = 1, H = !1, I, Q = m; Q < A; Q++) {
            I = ARRAY_IMG_LEVEL[Q];
            var Y = new CTextButton(l[M] + I.width / 4, K +
                I.height / 2, I, x[Q], PRIMARY_FONT, "#4ce700", 40, y, "bottom");
            Y.addEventListenerWithParams(ON_MOUSE_UP, this._onButLevelRelease, this, Q);
            h.push(Y);
            M++;
            if (M === l.length && Q < A - 1 && (M = 0, K += I.height + 20, R++, R > NUM_ROWS_PAGE_LEVEL)) {
                H = !0;
                break
            }
        }
        y.regX = y.getBounds().width / 2;
        y.regY = y.getBounds().height / 2;
        y.x = CANVAS_WIDTH / 2 + 56;
        y.y = CANVAS_HEIGHT / 2;
        H && this._createNewLevelPage(Q + 1, A)
    };
    this._onRight = function() {
        q[k].visible = !1;
        k++;
        k >= q.length && (k = 0);
        q[k].visible = !0
    };
    this._onLeft = function() {
        q[k].visible = !1;
        k--;
        0 > k && (k = q.length -
            1);
        q[k].visible = !0
    };
    this._onButLevelRelease = function(m) {
        START_PROGRESSIVE_BALL_VELOCITY = ARRAY_BALL_SPEED[m].start_speed;
        PROGRESSIVE_STEP_BALL_VELOCITY = ARRAY_BALL_SPEED[m].step;
        LIMIT_SPEED = ARRAY_BALL_SPEED[m].limit;
        CPU_SPEED_STICKS = ARRAY_BALL_SPEED[m].cpu_speed;
        INDEX_DIFFICULT = m;
        s_oMain.gotoGame();
        this.unload()
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this.resetFullscreenBut = function() {
        z && screenfull.isEnabled && n.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease =
        function() {
            s_bFullscreen ? E.call(window.document) : z.call(window.document.documentElement);
            sizeHandler()
        };
    this._onExit = function() {
        this.unload();
        s_oMain.gotoMenu()
    };
    s_oLevelMenu = this;
    this._init()
}
var s_oLevelMenu = null;

function CPanelTutorial(a) {
    var c, b, e, d, f, g, k, w;
    this.init = function() {
        a && s_oGame.setStartGame(!1);
        w = ADVANCED_MODE ? 3 : 2;
        var h = new createjs.Shape;
        h.graphics.beginFill("#000000").drawRect(-(CANVAS_WIDTH / 2), -(CANVAS_HEIGHT / 2), CANVAS_WIDTH, CANVAS_HEIGHT);
        h.alpha = .7;
        h.on("mousedown", this.onOver, this);
        k = new createjs.Container;
        g = 0;
        c = new createjs.Container;
        c.x = CANVAS_WIDTH / 2;
        c.y = CANVAS_HEIGHT / 2;
        c.addChild(h);
        c.alpha = 0;
        h = s_oSpriteLibrary.getSprite("msg_box");
        b = new createBitmap(h);
        b.regX = h.width / 2;
        b.regY = h.height /
            2;
        b.alpha = .8;
        c.addChild(b);
        s_oStage.addChild(c);
        h = s_oSpriteLibrary.getSprite("skip_arrow");
        e = new CGfxButton(350, 0, h, c);
        e.addEventListener(ON_MOUSE_DOWN, this.onButNext, this);
        h = s_oSpriteLibrary.getSprite("skip_arrow_left");
        d = new CGfxButton(-350, 0, h, c);
        d.addEventListener(ON_MOUSE_DOWN, this.onButBack, this);
        f = new CGfxButton(0, c.getBounds().height / 2, s_oSpriteLibrary.getSprite("but_next"), c);
        f.addEventListener(ON_MOUSE_DOWN, this.onButSkip, this);
        this.loadPage(g);
        (new createjs.Tween.get(c)).to({
            alpha: 1
        }, 500)
    };
    this.loadPage = function(h) {
        var l = new CTLText(k, -250, -60, 500, 120, 31, "center", "#4ce700", PRIMARY_FONT, 1, 2, 2, "", !0, !0, !0, !1);
        var q = new CTLText(k, -250, -60, 500, 120, 40, "center", "#4ce700", PRIMARY_FONT, 1, 2, 2, "", !0, !0, !1, !1);
        var t = new CTLText(k, -250, -60, 500, 120, 40, "center", "#4ce700", PRIMARY_FONT, 1, 2, 2, "", !0, !0, !1, !1);
        switch (h) {
            case 0:
                l.refreshText(TEXT_TUTORIAL_1);
                l.setY(-150);
                if (s_bMobile) l.refreshText(TEXT_TUTORIAL_1_3), l.setY(-50);
                else if (s_b2Players) {
                    l.refreshText(TEXT_TUTORIAL_1_2);
                    l = s_oSpriteLibrary.getSprite("key_w");
                    var p = new createBitmap(l, l.width, l.height);
                    p.x = -240;
                    p.y = 40;
                    l = s_oSpriteLibrary.getSprite("key_s");
                    var u = new createBitmap(l, l.width, l.height);
                    u.x = -140;
                    u.y = 40;
                    l = s_oSpriteLibrary.getSprite("key_up");
                    h = new createBitmap(l, l.width, l.height);
                    h.x = 159;
                    h.y = 40;
                    l = s_oSpriteLibrary.getSprite("key_down");
                    l = new createBitmap(l, l.width, l.height);
                    l.x = 61;
                    l.y = 40;
                    q.refreshText(TEXT_TUTORIAL_PLAYER + " 1");
                    q.setX(-147);
                    q.setY(-20);
                    t.refreshText(TEXT_TUTORIAL_PLAYER + " 2");
                    t.setX(152);
                    t.setY(-20);
                    k.addChild(h, l)
                } else l = s_oSpriteLibrary.getSprite("key_w"),
                    p = new createBitmap(l, l.width, l.height), p.x = -170, p.y = 0, l = s_oSpriteLibrary.getSprite("key_s"), u = new createBitmap(l, l.width, l.height), u.x = 90, u.y = 0;
                k.addChild(p, u);
                c.addChild(k);
                break;
            case 1:
                s_bMobile ? l.refreshText(TEXT_TUTORIAL_4) : l.refreshText(TEXT_TUTORIAL_3);
                l.setY(-140);
                l = s_oSpriteLibrary.getSprite("but_kickoff");
                p = new createBitmap(l, l.width, l.height);
                p.x = -l.width / 2;
                p.y = 0;
                k.addChild(p);
                break;
            case 2:
                ADVANCED_MODE ? l.refreshText(TEXT_TUTORIAL_5) : l.refreshText(TEXT_TUTORIAL_2);
                l.setY(-65);
                break;
            case 3:
                l.refreshText(TEXT_TUTORIAL_2),
                    l.setY(-65)
        }
    };
    this.onButNext = function() {
        g === w ? g = 0 : g++;
        k.removeAllChildren();
        this.loadPage(g)
    };
    this.onButBack = function() {
        0 === g ? g = w : g--;
        k.removeAllChildren();
        this.loadPage(g)
    };
    this.onButSkip = function() {
        (new createjs.Tween.get(c)).to({
            alpha: 0
        }, 500).call(function() {
            s_oStage.removeChild(c);
            a && s_oGame.setStartGame(!0)
        })
    };
    this.onOver = function() {};
    this.init()
}

function CPause(a) {
    var c, b, e, d, f;
    this.init = function(g) {
        s_oGame.setPause(!0);
        e = new createjs.Container;
        d = g;
        d.addChild(e);
        c = new createjs.Shape;
        c.graphics.beginFill("#000000").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        c.alpha = .6;
        c.on("mousedown", function() {});
        g = s_oSpriteLibrary.getSprite("msg_box");
        f = new createBitmap(g, g.width, g.height);
        f.x = CANVAS_WIDTH / 2;
        f.y = CANVAS_HEIGHT / 2;
        f.regX = g.width / 2;
        f.regY = g.height / 2;
        f.scaleX = .8;
        f.scaleY = .8;
        e.addChild(f);
        b = new createjs.Text(TEXT_PAUSE, "100px " + PRIMARY_FONT, "#4ce700");
        b.textBaseline = "middle";
        b.textAlign = "center";
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT / 2;
        e.addChild(c, f, b);
        b.alpha = 1
    };
    this.onExit = function() {
        e.removeAllChildren();
        s_oStage.removeChild(e);
        s_oGame.setPause(!1)
    };
    this.init(a)
}
var CANVAS_WIDTH = 1120,
    CANVAS_HEIGHT = 1400,
    EDGEBOARD_X = 170,
    EDGEBOARD_Y = 0,
    PRIMARY_FONT = "comfortaabold",
    FPS = 30,
    FPS_TIME = 1E3 / FPS,
    DISABLE_SOUND_MOBILE = !1,
    SOUNDTRACK_VOLUME_IN_GAME = .4,
    LARGE_BONUS = 0,
    SHORT_MALUS = 1,
    SUPER_SHOT = 2,
    DOUBLE_BALLS = 3,
    CRAZY_BALL = 4,
    MIN_MS_SPAWN_POWER_UP = 1E4,
    MAX_MS_SPAWN_POWER_UP = 15E3,
    MS_STRONG_SHOT_POWER_UP = 6E3,
    MS_CRAZY_BALL = 6E3,
    MS_SPAWN_TIME_BALL_TRAJECTORY = 100,
    BALL_TRAJ_INSTANCE = 99,
    MS_TIME_FADE_BALL_TRAJ = 300,
    SUPER_SHOT_POWER = 4,
    MIN_PLAYER_FORCE_VEL = .1,
    BALL_SPRITE_ANIM_MULTIPLIER = .4,
    BALL = 2,
    LEFT_SIDE = 3,
    RIGHT_SIDE = 4,
    MIN_DIST_COLLISION_DETECT = 1E3,
    BUT_LEVEL_WIDTH = 95,
    BUT_LEVEL_HEIGHT = 84,
    NUM_ROWS_PAGE_LEVEL = 1,
    NUM_COLS_PAGE_LEVEL = 3,
    NUM_LEVELS = 3,
    s_b2Players, s_bFriendly, s_bFirstPlay = !0,
    s_bFirstMultiPlayer = !0,
    BLUE_STICK = 0,
    RED_STICK = 1,
    PLAYER_SPEED_STICKS = 10,
    CPU_SPEED_STICKS = PLAYER_SPEED_STICKS,
    POINTS_TO_WIN, TIME_GOAL_ANIMATION = 1E3,
    ARRAY_BALL_SPEED = [{
        start_speed: .6,
        step: .1,
        limit: 2,
        cpu_speed: 4
    }, {
        start_speed: .7,
        step: .1,
        limit: 2.8,
        cpu_speed: 7
    }, {
        start_speed: .8,
        step: .2,
        limit: 3.2,
        cpu_speed: 10
    }],
    ARRAY_IMG_LEVEL = [],
    INDEX_DIFFICULT, ADVANCED_MODE, STATE_LOADING = 0,
    STATE_MENU = 1,
    STATE_HELP = 1,
    STATE_GAME = 3,
    STATE_LEVEL_SELECTION = 4,
    ON_MOUSE_DOWN = 0,
    ON_MOUSE_UP = 1,
    ON_MOUSE_OVER = 2,
    ON_MOUSE_OUT = 3,
    ON_DRAG_START = 4,
    ON_DRAG_END = 5,
    MS_AFTER_GOAL = 1500,
    Y_OFFBOARD_MESSAGES_UP = -300,
    Y_OFFBOARD_MESSAGES_DOWN = CANVAS_HEIGHT + 300,
    Y_MESSAGES_ON_BOARD_UP = 262,
    Y_MESSAGES_ON_BOARD_DOWN = CANVAS_HEIGHT / 2 + 262,
    PLAYER_1 = 0,
    PLAYER_2 = 1,
    OCCURRENCES_LARGE_BONUS, OCCURRENCES_SHORT_MALUS, OCCURRENCES_SUPER_SHOTS, OCCURRENCES_DOUBLE_BALLS, OCCURRENCES_CRAZY_BALL,
    PHYSICS_ITERATIONS = 20,
    ANGLE_CRAZY_BALL = 20,
    STEP_UPDATE_CRAZY_BALL = 2,
    MIN_VEL_COLLISION_BALL_EDGE = 3,
    VARIABLE_VEL_COLLISION_BALL_EDGE = 1,
    START_PROGRESSIVE_BALL_VELOCITY = 1.6,
    PROGRESSIVE_STEP_BALL_VELOCITY = .2,
    LIMIT_SPEED = 4.5,
    MAX_ANGLE_ROOT_COLLISION_BALL_EDGE = 30,
    QUANTITY_ROOT = 0,
    BALL_START_VELOCITY = .5,
    STICK_ACCELLERATION = 1.5,
    STICK_FRICTION = .75,
    VERTICAL_LINE_LEFT = 0,
    VERTICAL_LINE_RIGHT = 1,
    HORIZONTAL_LINE_UP = 0,
    HORIZONTAL_LINE_DOWN = 1,
    GOALKEEPER = 0,
    DEFENDER = 1,
    MIDFIELDER = 2,
    STRIKER = 3,
    LOGO_MENU_FRAMES_NUM = 33,
    GOAL_TEXT_FRAMES_NUM =
    15,
    ENLARGE_TEXT_FRAMES_NUM = 15,
    BECOME_SHORT_TEXT_FRAMES_NUM = 15,
    SUPER_SHOT_TEXT_FRAMES_NUM = 15,
    DOUBLE_BALL_TEXT_FRAMES_NUM = 15,
    CRAZY_BALL_TEXT_FRAMES_NUM = 15,
    ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION, AD_SHOW_COUNTER;

function extractHostname(a) {
    a = -1 < a.indexOf("://") ? a.split("/")[2] : a.split("/")[0];
    a = a.split(":")[0];
    return a = a.split("?")[0]
}

function extractRootDomain(a) {
    a = extractHostname(a);
    var c = a.split("."),
        b = c.length;
    2 < b && (a = c[b - 2] + "." + c[b - 1]);
    return a
}
var getClosestTop = function() {
        var a = window,
            c = !1;
        try {
            for (; a.parent.document !== a.document;)
                if (a.parent.document) a = a.parent;
                else {
                    c = !0;
                    break
                }
        } catch (b) {
            c = !0
        }
        return {
            topFrame: a,
            err: c
        }
    },
    getBestPageUrl = function(a) {
        var c = a.topFrame,
            b = "";
        if (a.err) try {
            try {
                b = window.top.location.href
            } catch (d) {
                var e = window.location.ancestorOrigins;
                b = e[e.length - 1]
            }
        } catch (d) {
            b = c.document.referrer
        } else b = c.location.href;
        return b
    },
    TOPFRAMEOBJ = getClosestTop(),
    PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);

function seekAndDestroy() {
    for (var a = extractRootDomain(PAGE_URL), c = [String.fromCharCode(99, 111, 100, 101, 116, 104, 105, 115, 108, 97, 98, 46, 99, 111, 109), String.fromCharCode(101, 110, 118, 97, 116, 111, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116)], b = 0; b < c.length; b++)
        if (c[b] === a) return !0;
    return !1
};