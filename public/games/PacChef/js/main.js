/*
 Platform.js <https://mths.be/platform>
 Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
 Copyright 2011-2013 John-David Dalton
 Available under MIT license <https://mths.be/mit>
*/
(function() {
    var e = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
        l = "undefined" !== typeof module && module.exports,
        f = function() {
            for (var p, m = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "), "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "),
                    "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")
                ], a = 0, b = m.length, c = {}; a < b; a++)
                if ((p = m[a]) && p[1] in e) {
                    for (a = 0; a < p.length; a++) c[m[0][a]] = p[a];
                    return c
                }
            return !1
        }(),
        n = {
            change: f.fullscreenchange,
            error: f.fullscreenerror
        },
        k = {
            request: function(p) {
                return new Promise(function(m, a) {
                    var b = function() {
                        this.off("change",
                            b);
                        m()
                    }.bind(this);
                    this.on("change", b);
                    p = p || e.documentElement;
                    Promise.resolve(p[f.requestFullscreen]())["catch"](a)
                }.bind(this))
            },
            exit: function() {
                return new Promise(function(p, m) {
                    if (this.isFullscreen) {
                        var a = function() {
                            this.off("change", a);
                            p()
                        }.bind(this);
                        this.on("change", a);
                        Promise.resolve(e[f.exitFullscreen]())["catch"](m)
                    } else p()
                }.bind(this))
            },
            toggle: function(p) {
                return this.isFullscreen ? this.exit() : this.request(p)
            },
            onchange: function(p) {
                this.on("change", p)
            },
            onerror: function(p) {
                this.on("error", p)
            },
            on: function(p, m) {
                var a = n[p];
                a && e.addEventListener(a, m, !1)
            },
            off: function(p, m) {
                var a = n[p];
                a && e.removeEventListener(a, m, !1)
            },
            raw: f
        };
    f ? (Object.defineProperties(k, {
        isFullscreen: {
            get: function() {
                return !!e[f.fullscreenElement]
            }
        },
        element: {
            enumerable: !0,
            get: function() {
                return e[f.fullscreenElement]
            }
        },
        isEnabled: {
            enumerable: !0,
            get: function() {
                return !!e[f.fullscreenEnabled]
            }
        }
    }), l ? module.exports = k : window.screenfull = k) : l ? module.exports = {
        isEnabled: !1
    } : window.screenfull = {
        isEnabled: !1
    }
})();

function buildIOSMeta() {
    for (var e = [{
            name: "viewport",
            content: "width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
        }, {
            name: "apple-mobile-web-app-capable",
            content: "yes"
        }, {
            name: "apple-mobile-web-app-status-bar-style",
            content: "black"
        }], l = 0; l < e.length; l++) {
        var f = document.createElement("meta");
        f.name = e[l].name;
        f.content = e[l].content;
        var n = window.document.head.querySelector('meta[name="' + f.name + '"]');
        n && n.parentNode.removeChild(n);
        window.document.head.appendChild(f)
    }
}

function hideIOSFullscreenPanel() {
    document.querySelector(".xxx-ios-fullscreen-message").style.display = "none";
    document.querySelector(".xxx-ios-fullscreen-scroll").style.display = "none";
    document.querySelector(".xxx-game-iframe-full").classList.remove("xxx-game-iframe-iphone-se")
}

function buildIOSFullscreenPanel() {
    document.body.insertAdjacentHTML("beforeend", '<div class="xxx-ios-fullscreen-message"><div class="xxx-ios-fullscreen-swipe"></div></div><div class="xxx-ios-fullscreen-scroll"></div>')
}

function showIOSFullscreenPanel() {
    document.querySelector(".xxx-ios-fullscreen-message").style.display = "none";
    document.querySelector(".xxx-ios-fullscreen-scroll").style.display = "none"
}

function __iosResize() {
    window.scrollTo(0, 0);
    console.log(window.devicePixelRatio);
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    if ("iPhone" === platform.product) switch (window.devicePixelRatio) {
        case 2:
            switch (window.innerWidth) {
                case 568:
                    320 !== window.innerHeight && document.querySelector(".xxx-game-iframe-full").classList.add("xxx-game-iframe-iphone-se");
                    break;
                case 667:
                    375 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                case 808:
                    414 === window.innerHeight ? hideIOSFullscreenPanel() :
                        showIOSFullscreenPanel();
                    break;
                default:
                    hideIOSFullscreenPanel()
            }
            break;
        case 3:
            switch (window.innerWidth) {
                case 736:
                    414 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                case 724:
                    375 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                case 808:
                    414 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                default:
                    hideIOSFullscreenPanel()
            }
            break;
        default:
            hideIOSFullscreenPanel()
    }
}

function iosResize() {
    __iosResize();
    setTimeout(function() {
        __iosResize()
    }, 500)
}

function iosInIframe() {
    try {
        return window.self !== window.top
    } catch (e) {
        return !0
    }
}

function isIOSLessThen13() {
    var e = platform.os,
        l = e.family.toLowerCase();
    e = parseFloat(e.version);
    return "ios" === l && 13 > e ? !0 : !1
}
document.addEventListener("DOMContentLoaded", function() {
    platform && "iPhone" === platform.product && "safari" === platform.name.toLowerCase() && isIOSLessThen13() && !iosInIframe() && (buildIOSFullscreenPanel(), buildIOSMeta())
});
window.addEventListener("resize", function(e) {
    platform && "iPhone" === platform.product && "safari" === platform.name.toLowerCase() && isIOSLessThen13() && !iosInIframe() && iosResize()
});
(function() {
    function e(r) {
        r = String(r);
        return r.charAt(0).toUpperCase() + r.slice(1)
    }

    function l(r, w) {
        var E = -1,
            u = r ? r.length : 0;
        if ("number" == typeof u && -1 < u && u <= v)
            for (; ++E < u;) w(r[E], E, r);
        else n(r, w)
    }

    function f(r) {
        r = String(r).replace(/^ +| +$/g, "");
        return /^(?:webOS|i(?:OS|P))/.test(r) ? r : e(r)
    }

    function n(r, w) {
        for (var E in r) q.call(r, E) && w(r[E], E, r)
    }

    function k(r) {
        return null == r ? e(r) : t.call(r).slice(8, -1)
    }

    function p(r, w) {
        var E = null != r ? typeof r[w] : "number";
        return !/^(?:boolean|number|string|undefined)$/.test(E) &&
            ("object" == E ? !!r[w] : !0)
    }

    function m(r) {
        return String(r).replace(/([ -])(?!$)/g, "$1?")
    }

    function a(r, w) {
        var E = null;
        l(r, function(u, C) {
            E = w(E, u, C, r)
        });
        return E
    }

    function b(r) {
        function w(K) {
            return a(K, function(L, M) {
                var S = M.pattern || m(M);
                !L && (L = RegExp("\\b" + S + " *\\d+[.\\w_]*", "i").exec(r) || RegExp("\\b" + S + " *\\w+-[\\w]*", "i").exec(r) || RegExp("\\b" + S + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(r)) && ((L = String(M.label && !RegExp(S, "i").test(M.label) ? M.label : L).split("/"))[1] && !/[\d.]+/.test(L[0]) && (L[0] +=
                    " " + L[1]), M = M.label || M, L = f(L[0].replace(RegExp(S, "i"), M).replace(RegExp("; *(?:" + M + "[_-])?", "i"), " ").replace(RegExp("(" + M + ")[-_.]?(\\w)", "i"), "$1 $2")));
                return L
            })
        }

        function E(K) {
            return a(K, function(L, M) {
                return L || (RegExp(M + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(r) || 0)[1] || null
            })
        }
        var u = d,
            C = r && "object" == typeof r && "String" != k(r);
        C && (u = r, r = null);
        var D = u.navigator || {},
            x = D.userAgent || "";
        r || (r = x);
        var G = C ? !!D.likeChrome : /\bChrome\b/.test(r) && !/internal|\n/i.test(t.toString()),
            H = C ? "Object" : "ScriptBridgingProxyObject",
            N = C ? "Object" : "Environment",
            P = C && u.java ? "JavaPackage" : k(u.java),
            T = C ? "Object" : "RuntimeObject";
        N = (P = /\bJava/.test(P) && u.java) && k(u.environment) == N;
        var R = P ? "a" : "\u03b1",
            Z = P ? "b" : "\u03b2",
            aa = u.document || {},
            U = u.operamini || u.opera,
            X = y.test(X = C && U ? U["[[Class]]"] : k(U)) ? X : U = null,
            A, ba = r;
        C = [];
        var Y = null,
            W = r == x;
        x = W && U && "function" == typeof U.version && U.version();
        var O = function(K) {
                return a(K, function(L, M) {
                    return L || RegExp("\\b" + (M.pattern || m(M)) + "\\b", "i").exec(r) && (M.label ||
                        M)
                })
            }([{
                label: "EdgeHTML",
                pattern: "Edge"
            }, "Trident", {
                label: "WebKit",
                pattern: "AppleWebKit"
            }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
            I = function(K) {
                return a(K, function(L, M) {
                    return L || RegExp("\\b" + (M.pattern || m(M)) + "\\b", "i").exec(r) && (M.label || M)
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
            Q = w([{
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
            z = function(K) {
                return a(K, function(L, M, S) {
                    return L || (M[Q] || M[/^[a-z]+(?: +[a-z]+\b)*/i.exec(Q)] || RegExp("\\b" + m(S) + "(?:\\b|\\w*\\d)", "i").exec(r)) && S
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
            B = function(K) {
                return a(K, function(L, M) {
                    var S = M.pattern || m(M);
                    if (!L && (L = RegExp("\\b" + S + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(r))) {
                        var V = L,
                            ca = M.label || M,
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
                        S && ca && /^Win/i.test(V) && !/^Windows Phone /i.test(V) && (da = da[/[\d.]+$/.exec(V)]) && (V = "Windows " + da);
                        V = String(V);
                        S && ca && (V = V.replace(RegExp(S, "i"), ca));
                        L = V = f(V.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/,
                            "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
                    }
                    return L
                })
            }(["Windows Phone", "Android", "CentOS", {
                    label: "Chrome OS",
                    pattern: "CrOS"
                }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X",
                "Macintosh", "Mac", "Windows 98;", "Windows "
            ]);
        O && (O = [O]);
        z && !Q && (Q = w([z]));
        if (A = /\bGoogle TV\b/.exec(Q)) Q = A[0];
        /\bSimulator\b/i.test(r) && (Q = (Q ? Q + " " : "") + "Simulator");
        "Opera Mini" == I && /\bOPiOS\b/.test(r) && C.push("running in Turbo/Uncompressed mode");
        "IE" == I && /\blike iPhone OS\b/.test(r) ? (A = b(r.replace(/like iPhone OS/, "")), z = A.manufacturer, Q = A.product) : /^iP/.test(Q) ? (I || (I = "Safari"), B = "iOS" + ((A = / OS ([\d_]+)/i.exec(r)) ? " " + A[1].replace(/_/g, ".") : "")) : "Konqueror" != I || /buntu/i.test(B) ? z && "Google" != z &&
            (/Chrome/.test(I) && !/\bMobile Safari\b/i.test(r) || /\bVita\b/.test(Q)) || /\bAndroid\b/.test(B) && /^Chrome/.test(I) && /\bVersion\//i.test(r) ? (I = "Android Browser", B = /\bAndroid\b/.test(B) ? B : "Android") : "Silk" == I ? (/\bMobi/i.test(r) || (B = "Android", C.unshift("desktop mode")), /Accelerated *= *true/i.test(r) && C.unshift("accelerated")) : "PaleMoon" == I && (A = /\bFirefox\/([\d.]+)\b/.exec(r)) ? C.push("identifying as Firefox " + A[1]) : "Firefox" == I && (A = /\b(Mobile|Tablet|TV)\b/i.exec(r)) ? (B || (B = "Firefox OS"), Q || (Q = A[1])) : !I ||
            (A = !/\bMinefield\b/i.test(r) && /\b(?:Firefox|Safari)\b/.exec(I)) ? (I && !Q && /[\/,]|^[^(]+?\)/.test(r.slice(r.indexOf(A + "/") + 8)) && (I = null), (A = Q || z || B) && (Q || z || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(B)) && (I = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(B) ? B : A) + " Browser")) : "Electron" == I && (A = (/\bChrome\/([\d.]+)\b/.exec(r) || 0)[1]) && C.push("Chromium " + A) : B = "Kubuntu";
        x || (x = E(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", m(I),
            "(?:Firefox|Minefield|NetFront)"
        ]));
        if (A = "iCab" == O && 3 < parseFloat(x) && "WebKit" || /\bOpera\b/.test(I) && (/\bOPR\b/.test(r) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(r) && !/^(?:Trident|EdgeHTML)$/.test(O) && "WebKit" || !O && /\bMSIE\b/i.test(r) && ("Mac OS" == B ? "Tasman" : "Trident") || "WebKit" == O && /\bPlayStation\b(?! Vita\b)/i.test(I) && "NetFront") O = [A];
        "IE" == I && (A = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(r) || 0)[1]) ? (I += " Mobile", B = "Windows Phone " + (/\+$/.test(A) ? A : A + ".x"), C.unshift("desktop mode")) : /\bWPDesktop\b/i.test(r) ?
            (I = "IE Mobile", B = "Windows Phone 8.x", C.unshift("desktop mode"), x || (x = (/\brv:([\d.]+)/.exec(r) || 0)[1])) : "IE" != I && "Trident" == O && (A = /\brv:([\d.]+)/.exec(r)) && (I && C.push("identifying as " + I + (x ? " " + x : "")), I = "IE", x = A[1]);
        if (W) {
            if (p(u, "global"))
                if (P && (A = P.lang.System, ba = A.getProperty("os.arch"), B = B || A.getProperty("os.name") + " " + A.getProperty("os.version")), N) {
                    try {
                        x = u.require("ringo/engine").version.join("."), I = "RingoJS"
                    } catch (K) {
                        (A = u.system) && A.global.system == u.system && (I = "Narwhal", B || (B = A[0].os || null))
                    }
                    I ||
                        (I = "Rhino")
                } else "object" == typeof u.process && !u.process.browser && (A = u.process) && ("object" == typeof A.versions && ("string" == typeof A.versions.electron ? (C.push("Node " + A.versions.node), I = "Electron", x = A.versions.electron) : "string" == typeof A.versions.nw && (C.push("Chromium " + x, "Node " + A.versions.node), I = "NW.js", x = A.versions.nw)), I || (I = "Node.js", ba = A.arch, B = A.platform, x = (x = /[\d.]+/.exec(A.version)) ? x[0] : null));
            else k(A = u.runtime) == H ? (I = "Adobe AIR", B = A.flash.system.Capabilities.os) : k(A = u.phantom) == T ? (I = "PhantomJS",
                x = (A = A.version || null) && A.major + "." + A.minor + "." + A.patch) : "number" == typeof aa.documentMode && (A = /\bTrident\/(\d+)/i.exec(r)) ? (x = [x, aa.documentMode], (A = +A[1] + 4) != x[1] && (C.push("IE " + x[1] + " mode"), O && (O[1] = ""), x[1] = A), x = "IE" == I ? String(x[1].toFixed(1)) : x[0]) : "number" == typeof aa.documentMode && /^(?:Chrome|Firefox)\b/.test(I) && (C.push("masking as " + I + " " + x), I = "IE", x = "11.0", O = ["Trident"], B = "Windows");
            B = B && f(B)
        }
        x && (A = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(x) || /(?:alpha|beta)(?: ?\d)?/i.exec(r + ";" + (W &&
            D.appMinorVersion)) || /\bMinefield\b/i.test(r) && "a") && (Y = /b/i.test(A) ? "beta" : "alpha", x = x.replace(RegExp(A + "\\+?$"), "") + ("beta" == Y ? Z : R) + (/\d+\+?/.exec(A) || ""));
        if ("Fennec" == I || "Firefox" == I && /\b(?:Android|Firefox OS)\b/.test(B)) I = "Firefox Mobile";
        else if ("Maxthon" == I && x) x = x.replace(/\.[\d.]+/, ".x");
        else if (/\bXbox\b/i.test(Q)) "Xbox 360" == Q && (B = null), "Xbox 360" == Q && /\bIEMobile\b/.test(r) && C.unshift("mobile mode");
        else if (!/^(?:Chrome|IE|Opera)$/.test(I) && (!I || Q || /Browser|Mobi/.test(I)) || "Windows CE" !=
            B && !/Mobi/i.test(r))
            if ("IE" == I && W) try {
                null === u.external && C.unshift("platform preview")
            } catch (K) {
                C.unshift("embedded")
            } else(/\bBlackBerry\b/.test(Q) || /\bBB10\b/.test(r)) && (A = (RegExp(Q.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(r) || 0)[1] || x) ? (A = [A, /BB10/.test(r)], B = (A[1] ? (Q = null, z = "BlackBerry") : "Device Software") + " " + A[0], x = null) : this != n && "Wii" != Q && (W && U || /Opera/.test(I) && /\b(?:MSIE|Firefox)\b/i.test(r) || "Firefox" == I && /\bOS X (?:\d+\.){2,}/.test(B) || "IE" == I && (B && !/^Win/.test(B) && 5.5 < x || /\bWindows XP\b/.test(B) &&
                8 < x || 8 == x && !/\bTrident\b/.test(r))) && !y.test(A = b.call(n, r.replace(y, "") + ";")) && A.name && (A = "ing as " + A.name + ((A = A.version) ? " " + A : ""), y.test(I) ? (/\bIE\b/.test(A) && "Mac OS" == B && (B = null), A = "identify" + A) : (A = "mask" + A, I = X ? f(X.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(A) && (B = null), W || (x = null)), O = ["Presto"], C.push(A));
            else I += " Mobile";
        if (A = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(r) || 0)[1]) {
            A = [parseFloat(A.replace(/\.(\d)$/, ".0$1")), A];
            if ("Safari" == I && "+" == A[1].slice(-1)) I = "WebKit Nightly", Y = "alpha",
                x = A[1].slice(0, -1);
            else if (x == A[1] || x == (A[2] = (/\bSafari\/([\d.]+\+?)/i.exec(r) || 0)[1])) x = null;
            A[1] = (/\bChrome\/([\d.]+)/i.exec(r) || 0)[1];
            537.36 == A[0] && 537.36 == A[2] && 28 <= parseFloat(A[1]) && "WebKit" == O && (O = ["Blink"]);
            W && (G || A[1]) ? (O && (O[1] = "like Chrome"), A = A[1] || (A = A[0], 530 > A ? 1 : 532 > A ? 2 : 532.05 > A ? 3 : 533 > A ? 4 : 534.03 > A ? 5 : 534.07 > A ? 6 : 534.1 > A ? 7 : 534.13 > A ? 8 : 534.16 > A ? 9 : 534.24 > A ? 10 : 534.3 > A ? 11 : 535.01 > A ? 12 : 535.02 > A ? "13+" : 535.07 > A ? 15 : 535.11 > A ? 16 : 535.19 > A ? 17 : 536.05 > A ? 18 : 536.1 > A ? 19 : 537.01 > A ? 20 : 537.11 > A ? "21+" : 537.13 > A ?
                23 : 537.18 > A ? 24 : 537.24 > A ? 25 : 537.36 > A ? 26 : "Blink" != O ? "27" : "28")) : (O && (O[1] = "like Safari"), A = (A = A[0], 400 > A ? 1 : 500 > A ? 2 : 526 > A ? 3 : 533 > A ? 4 : 534 > A ? "4+" : 535 > A ? 5 : 537 > A ? 6 : 538 > A ? 7 : 601 > A ? 8 : "8"));
            O && (O[1] += " " + (A += "number" == typeof A ? ".x" : /[.+]/.test(A) ? "" : "+"));
            "Safari" == I && (!x || 45 < parseInt(x)) && (x = A)
        }
        "Opera" == I && (A = /\bzbov|zvav$/.exec(B)) ? (I += " ", C.unshift("desktop mode"), "zvav" == A ? (I += "Mini", x = null) : I += "Mobile", B = B.replace(RegExp(" *" + A + "$"), "")) : "Safari" == I && /\bChrome\b/.exec(O && O[1]) && (C.unshift("desktop mode"),
            I = "Chrome Mobile", x = null, /\bOS X\b/.test(B) ? (z = "Apple", B = "iOS 4.3+") : B = null);
        x && 0 == x.indexOf(A = /[\d.]+$/.exec(B)) && -1 < r.indexOf("/" + A + "-") && (B = String(B.replace(A, "")).replace(/^ +| +$/g, ""));
        O && !/\b(?:Avant|Nook)\b/.test(I) && (/Browser|Lunascape|Maxthon/.test(I) || "Safari" != I && /^iOS/.test(B) && /\bSafari\b/.test(O[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(I) && O[1]) && (A = O[O.length - 1]) && C.push(A);
        C.length && (C = ["(" + C.join("; ") + ")"]);
        z && Q && 0 > Q.indexOf(z) &&
            C.push("on " + z);
        Q && C.push((/^on /.test(C[C.length - 1]) ? "" : "on ") + Q);
        if (B) {
            var J = (A = / ([\d.+]+)$/.exec(B)) && "/" == B.charAt(B.length - A[0].length - 1);
            B = {
                architecture: 32,
                family: A && !J ? B.replace(A[0], "") : B,
                version: A ? A[1] : null,
                toString: function() {
                    var K = this.version;
                    return this.family + (K && !J ? " " + K : "") + (64 == this.architecture ? " 64-bit" : "")
                }
            }
        }(A = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(ba)) && !/\bi686\b/i.test(ba) ? (B && (B.architecture = 64, B.family = B.family.replace(RegExp(" *" + A), "")), I && (/\bWOW64\b/i.test(r) || W && /\w(?:86|32)$/.test(D.cpuClass ||
            D.platform) && !/\bWin64; x64\b/i.test(r)) && C.unshift("32-bit")) : B && /^OS X/.test(B.family) && "Chrome" == I && 39 <= parseFloat(x) && (B.architecture = 64);
        r || (r = null);
        u = {};
        u.description = r;
        u.layout = O && O[0];
        u.manufacturer = z;
        u.name = I;
        u.prerelease = Y;
        u.product = Q;
        u.ua = r;
        u.version = I && x;
        u.os = B || {
            architecture: null,
            family: null,
            version: null,
            toString: function() {
                return "null"
            }
        };
        u.parse = b;
        u.toString = function() {
            return this.description || ""
        };
        u.version && C.unshift(x);
        u.name && C.unshift(I);
        B && I && (B != String(B).split(" ")[0] || B != I.split(" ")[0] &&
            !Q) && C.push(Q ? "(" + B + ")" : "on " + B);
        C.length && (u.description = C.join(" "));
        return u
    }
    var c = {
            "function": !0,
            object: !0
        },
        d = c[typeof window] && window || this,
        g = c[typeof exports] && exports;
    c = c[typeof module] && module && !module.nodeType && module;
    var h = g && c && "object" == typeof global && global;
    !h || h.global !== h && h.window !== h && h.self !== h || (d = h);
    var v = Math.pow(2, 53) - 1,
        y = /\bOpera/;
    h = Object.prototype;
    var q = h.hasOwnProperty,
        t = h.toString,
        F = b();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (d.platform = F, define(function() {
            return F
        })) :
        g && c ? n(F, function(r, w) {
            g[w] = r
        }) : d.platform = F
}).call(this);
! function(e) {
    if ("object" == typeof exports) module.exports = e();
    else if ("function" == typeof define && define.amd) define(e);
    else {
        var l;
        "undefined" != typeof window ? l = window : "undefined" != typeof global ? l = global : "undefined" != typeof self && (l = self);
        l.PF = e()
    }
}(function() {
    return function k(l, f, n) {
        function p(b, c) {
            if (!f[b]) {
                if (!l[b]) {
                    var d = "function" == typeof require && require;
                    if (!c && d) return d(b, !0);
                    if (m) return m(b, !0);
                    throw Error("Cannot find module '" + b + "'");
                }
                d = f[b] = {
                    exports: {}
                };
                l[b][0].call(d.exports, function(g) {
                    var h =
                        l[b][1][g];
                    return p(h ? h : g)
                }, d, d.exports, k, l, f, n)
            }
            return f[b].exports
        }
        for (var m = "function" == typeof require && require, a = 0; a < n.length; a++) p(n[a]);
        return p
    }({
        1: [function(l, f, n) {
            f.exports = l("./lib/heap")
        }, {
            "./lib/heap": 2
        }],
        2: [function(l, f, n) {
            (function() {
                var k = Math.floor;
                var p = Math.min;
                var m = function(w, E) {
                    return w < E ? -1 : w > E ? 1 : 0
                };
                var a = function(w, E, u, C, D) {
                    null == u && (u = 0);
                    null == D && (D = m);
                    if (0 > u) throw Error("lo must be non-negative");
                    null == C && (C = w.length);
                    for (; u < C;) {
                        var x = k((u + C) / 2);
                        0 > D(E, w[x]) ? C = x : u = x + 1
                    }
                    return [].splice.apply(w, [u, u - u].concat(E)), E
                };
                var b = function(w, E, u) {
                    null == u && (u = m);
                    w.push(E);
                    return t(w, 0, w.length - 1, u)
                };
                var c = function(w, E) {
                    null == E && (E = m);
                    var u = w.pop();
                    if (w.length) {
                        var C = w[0];
                        w[0] = u;
                        F(w, 0, E)
                    } else C = u;
                    return C
                };
                var d = function(w, E, u) {
                    null == u && (u = m);
                    var C = w[0];
                    w[0] = E;
                    F(w, 0, u);
                    return C
                };
                var g = function(w, E, u) {
                    null == u && (u = m);
                    if (w.length && 0 > u(w[0], E)) {
                        var C = [w[0], E];
                        E = C[0];
                        w[0] = C[1];
                        F(w, 0, u)
                    }
                    return E
                };
                var h = function(w, E) {
                    var u, C;
                    null == E && (E = m);
                    var D = function() {
                        C = [];
                        for (var N = 0, P = k(w.length / 2); 0 <= P ? N < P : N > P; 0 <=
                            P ? N++ : N--) C.push(N);
                        return C
                    }.apply(this).reverse();
                    var x = [];
                    var G = 0;
                    for (u = D.length; G < u; G++) {
                        var H = D[G];
                        x.push(F(w, H, E))
                    }
                    return x
                };
                var v = function(w, E, u) {
                    null == u && (u = m);
                    E = w.indexOf(E);
                    if (-1 !== E) return t(w, 0, E, u), F(w, E, u)
                };
                var y = function(w, E, u) {
                    var C;
                    null == u && (u = m);
                    var D = w.slice(0, E);
                    if (!D.length) return D;
                    h(D, u);
                    var x = w.slice(E);
                    E = 0;
                    for (C = x.length; E < C; E++) w = x[E], g(D, w, u);
                    return D.sort(u).reverse()
                };
                var q = function(w, E, u) {
                    var C;
                    null == u && (u = m);
                    if (10 * E <= w.length) {
                        var D = w.slice(0, E).sort(u);
                        if (!D.length) return D;
                        var x = D[D.length - 1];
                        var G = w.slice(E);
                        E = 0;
                        for (C = G.length; E < C; E++) w = G[E], 0 > u(w, x) && (a(D, w, 0, null, u), D.pop(), x = D[D.length - 1]);
                        return D
                    }
                    h(w, u);
                    D = [];
                    x = 0;
                    for (E = p(E, w.length); 0 <= E ? x < E : x > E; 0 <= E ? ++x : --x) D.push(c(w, u));
                    return D
                };
                var t = function(w, E, u, C) {
                    var D;
                    null == C && (C = m);
                    for (D = w[u]; u > E;) {
                        var x = u - 1 >> 1;
                        var G = w[x];
                        if (0 > C(D, G)) w[u] = G, u = x;
                        else break
                    }
                    return w[u] = D
                };
                var F = function(w, E, u) {
                    var C;
                    null == u && (u = m);
                    var D = w.length;
                    var x = E;
                    var G = w[E];
                    for (C = 2 * E + 1; C < D;) {
                        var H = C + 1;
                        H < D && !(0 > u(w[C], w[H])) && (C = H);
                        w[E] = w[C];
                        E =
                            C;
                        C = 2 * E + 1
                    }
                    w[E] = G;
                    return t(w, x, E, u)
                };
                var r = function() {
                    function w(E) {
                        this.cmp = null != E ? E : m;
                        this.nodes = []
                    }
                    w.push = b;
                    w.pop = c;
                    w.replace = d;
                    w.pushpop = g;
                    w.heapify = h;
                    w.updateItem = v;
                    w.nlargest = y;
                    w.nsmallest = q;
                    w.prototype.push = function(E) {
                        return b(this.nodes, E, this.cmp)
                    };
                    w.prototype.pop = function() {
                        return c(this.nodes, this.cmp)
                    };
                    w.prototype.peek = function() {
                        return this.nodes[0]
                    };
                    w.prototype.contains = function(E) {
                        return -1 !== this.nodes.indexOf(E)
                    };
                    w.prototype.replace = function(E) {
                        return d(this.nodes, E, this.cmp)
                    };
                    w.prototype.pushpop =
                        function(E) {
                            return g(this.nodes, E, this.cmp)
                        };
                    w.prototype.heapify = function() {
                        return h(this.nodes, this.cmp)
                    };
                    w.prototype.updateItem = function(E) {
                        return v(this.nodes, E, this.cmp)
                    };
                    w.prototype.clear = function() {
                        return this.nodes = []
                    };
                    w.prototype.empty = function() {
                        return 0 === this.nodes.length
                    };
                    w.prototype.size = function() {
                        return this.nodes.length
                    };
                    w.prototype.clone = function() {
                        var E = new w;
                        E.nodes = this.nodes.slice(0);
                        return E
                    };
                    w.prototype.toArray = function() {
                        return this.nodes.slice(0)
                    };
                    w.prototype.insert = w.prototype.push;
                    w.prototype.top = w.prototype.peek;
                    w.prototype.front = w.prototype.peek;
                    w.prototype.has = w.prototype.contains;
                    w.prototype.copy = w.prototype.clone;
                    return w
                }();
                "undefined" !== typeof f && null !== f && f.exports ? f.exports = r : window.Heap = r
            }).call(this)
        }, {}],
        3: [function(l, f, n) {
            f.exports = {
                Always: 1,
                Never: 2,
                IfAtMostOneObstacle: 3,
                OnlyWhenNoObstacles: 4
            }
        }, {}],
        4: [function(l, f, n) {
            function k(a, b, c) {
                if ("object" !== typeof a) var d = a;
                else b = a.length, d = a[0].length, c = a;
                this.width = d;
                this.height = b;
                this.nodes = this._buildNodes(d, b, c)
            }
            var p = l("./Node"),
                m = l("./DiagonalMovement");
            k.prototype._buildNodes = function(a, b, c) {
                var d, g, h = Array(b);
                for (d = 0; d < b; ++d)
                    for (h[d] = Array(a), g = 0; g < a; ++g) h[d][g] = new p(g, d);
                if (void 0 === c) return h;
                if (c.length !== b || c[0].length !== a) throw Error("Matrix size does not fit");
                for (d = 0; d < b; ++d)
                    for (g = 0; g < a; ++g) c[d][g] && (h[d][g].walkable = !1);
                return h
            };
            k.prototype.getNodeAt = function(a, b) {
                return this.nodes[b][a]
            };
            k.prototype.isWalkableAt = function(a, b) {
                return this.isInside(a, b) && this.nodes[b][a].walkable
            };
            k.prototype.isInside =
                function(a, b) {
                    return 0 <= a && a < this.width && 0 <= b && b < this.height
                };
            k.prototype.setWalkableAt = function(a, b, c) {
                this.nodes[b][a].walkable = c
            };
            k.prototype.getNeighbors = function(a, b) {
                var c = a.x,
                    d = a.y,
                    g = [],
                    h = !1,
                    v = !1,
                    y = !1,
                    q = !1,
                    t = this.nodes;
                this.isWalkableAt(c, d - 1) && (g.push(t[d - 1][c]), h = !0);
                this.isWalkableAt(c + 1, d) && (g.push(t[d][c + 1]), v = !0);
                this.isWalkableAt(c, d + 1) && (g.push(t[d + 1][c]), y = !0);
                this.isWalkableAt(c - 1, d) && (g.push(t[d][c - 1]), q = !0);
                if (b === m.Never) return g;
                if (b === m.OnlyWhenNoObstacles) {
                    var F = q && h;
                    h = h && v;
                    v = v && y;
                    y = y && q
                } else if (b === m.IfAtMostOneObstacle) F = q || h, h = h || v, v = v || y, y = y || q;
                else if (b === m.Always) y = v = h = F = !0;
                else throw Error("Incorrect value of diagonalMovement");
                F && this.isWalkableAt(c - 1, d - 1) && g.push(t[d - 1][c - 1]);
                h && this.isWalkableAt(c + 1, d - 1) && g.push(t[d - 1][c + 1]);
                v && this.isWalkableAt(c + 1, d + 1) && g.push(t[d + 1][c + 1]);
                y && this.isWalkableAt(c - 1, d + 1) && g.push(t[d + 1][c - 1]);
                return g
            };
            k.prototype.clone = function() {
                var a, b, c = this.width,
                    d = this.height,
                    g = this.nodes,
                    h = new k(c, d),
                    v = Array(d);
                for (a = 0; a < d; ++a)
                    for (v[a] =
                        Array(c), b = 0; b < c; ++b) v[a][b] = new p(b, a, g[a][b].walkable);
                h.nodes = v;
                return h
            };
            f.exports = k
        }, {
            "./DiagonalMovement": 3,
            "./Node": 6
        }],
        5: [function(l, f, n) {
            f.exports = {
                manhattan: function(k, p) {
                    return k + p
                },
                euclidean: function(k, p) {
                    return Math.sqrt(k * k + p * p)
                },
                octile: function(k, p) {
                    var m = Math.SQRT2 - 1;
                    return k < p ? m * k + p : m * p + k
                },
                chebyshev: function(k, p) {
                    return Math.max(k, p)
                }
            }
        }, {}],
        6: [function(l, f, n) {
            f.exports = function(k, p, m) {
                this.x = k;
                this.y = p;
                this.walkable = void 0 === m ? !0 : m
            }
        }, {}],
        7: [function(l, f, n) {
            function k(m) {
                for (var a = [
                        [m.x, m.y]
                    ]; m.parent;) m = m.parent, a.push([m.x, m.y]);
                return a.reverse()
            }

            function p(m, a, b, c) {
                var d = Math.abs,
                    g = [],
                    h;
                var v = d(b - m);
                var y = d(c - a);
                d = m < b ? 1 : -1;
                var q = a < c ? 1 : -1;
                for (h = v - y;;) {
                    g.push([m, a]);
                    if (m === b && a === c) break;
                    var t = 2 * h;
                    t > -y && (h -= y, m += d);
                    t < v && (h += v, a += q)
                }
                return g
            }
            n.backtrace = k;
            n.biBacktrace = function(m, a) {
                var b = k(m),
                    c = k(a);
                return b.concat(c.reverse())
            };
            n.pathLength = function(m) {
                var a, b = 0;
                for (a = 1; a < m.length; ++a) {
                    var c = m[a - 1];
                    var d = m[a];
                    var g = c[0] - d[0];
                    c = c[1] - d[1];
                    b += Math.sqrt(g * g + c * c)
                }
                return b
            };
            n.interpolate =
                p;
            n.expandPath = function(m) {
                var a = [],
                    b = m.length,
                    c, d;
                if (2 > b) return a;
                for (c = 0; c < b - 1; ++c) {
                    var g = m[c];
                    var h = m[c + 1];
                    g = p(g[0], g[1], h[0], h[1]);
                    h = g.length;
                    for (d = 0; d < h - 1; ++d) a.push(g[d])
                }
                a.push(m[b - 1]);
                return a
            };
            n.smoothenPath = function(m, a) {
                var b = a.length,
                    c = a[0][1],
                    d = a[b - 1][0],
                    g = a[b - 1][1],
                    h;
                var v = a[0][0];
                var y = [
                    [v, c]
                ];
                for (h = 2; h < b; ++h) {
                    var q = a[h];
                    var t = q[0];
                    q = q[1];
                    q = p(v, c, t, q);
                    var F = !1;
                    for (t = 1; t < q.length; ++t) {
                        var r = q[t];
                        if (!m.isWalkableAt(r[0], r[1])) {
                            F = !0;
                            break
                        }
                    }
                    F && (lastValidCoord = a[h - 1], y.push(lastValidCoord),
                        v = lastValidCoord[0], c = lastValidCoord[1])
                }
                y.push([d, g]);
                return y
            };
            n.compressPath = function(m) {
                if (3 > m.length) return m;
                var a = [],
                    b = m[0][0],
                    c = m[0][1],
                    d = m[1][0],
                    g = m[1][1],
                    h = d - b,
                    v = g - c,
                    y;
                var q = Math.sqrt(h * h + v * v);
                h /= q;
                v /= q;
                a.push([b, c]);
                for (y = 2; y < m.length; y++) {
                    b = d;
                    c = g;
                    var t = h;
                    var F = v;
                    d = m[y][0];
                    g = m[y][1];
                    h = d - b;
                    v = g - c;
                    q = Math.sqrt(h * h + v * v);
                    h /= q;
                    v /= q;
                    h === t && v === F || a.push([b, c])
                }
                a.push([d, g]);
                return a
            }
        }, {}],
        8: [function(l, f, n) {
            f.exports = {
                Heap: l("heap"),
                Node: l("./core/Node"),
                Grid: l("./core/Grid"),
                Util: l("./core/Util"),
                DiagonalMovement: l("./core/DiagonalMovement"),
                Heuristic: l("./core/Heuristic"),
                AStarFinder: l("./finders/AStarFinder"),
                BestFirstFinder: l("./finders/BestFirstFinder"),
                BreadthFirstFinder: l("./finders/BreadthFirstFinder"),
                DijkstraFinder: l("./finders/DijkstraFinder"),
                BiAStarFinder: l("./finders/BiAStarFinder"),
                BiBestFirstFinder: l("./finders/BiBestFirstFinder"),
                BiBreadthFirstFinder: l("./finders/BiBreadthFirstFinder"),
                BiDijkstraFinder: l("./finders/BiDijkstraFinder"),
                IDAStarFinder: l("./finders/IDAStarFinder"),
                JumpPointFinder: l("./finders/JumpPointFinder")
            }
        }, {
            "./core/DiagonalMovement": 3,
            "./core/Grid": 4,
            "./core/Heuristic": 5,
            "./core/Node": 6,
            "./core/Util": 7,
            "./finders/AStarFinder": 9,
            "./finders/BestFirstFinder": 10,
            "./finders/BiAStarFinder": 11,
            "./finders/BiBestFirstFinder": 12,
            "./finders/BiBreadthFirstFinder": 13,
            "./finders/BiDijkstraFinder": 14,
            "./finders/BreadthFirstFinder": 15,
            "./finders/DijkstraFinder": 16,
            "./finders/IDAStarFinder": 17,
            "./finders/JumpPointFinder": 22,
            heap: 1
        }],
        9: [function(l, f, n) {
            function k(c) {
                c =
                    c || {};
                this.allowDiagonal = c.allowDiagonal;
                this.dontCrossCorners = c.dontCrossCorners;
                this.heuristic = c.heuristic || a.manhattan;
                this.weight = c.weight || 1;
                this.diagonalMovement = c.diagonalMovement;
                this.diagonalMovement || (this.diagonalMovement = this.allowDiagonal ? this.dontCrossCorners ? b.OnlyWhenNoObstacles : b.IfAtMostOneObstacle : b.Never);
                this.heuristic = this.diagonalMovement === b.Never ? c.heuristic || a.manhattan : c.heuristic || a.octile
            }
            var p = l("heap"),
                m = l("../core/Util"),
                a = l("../core/Heuristic"),
                b = l("../core/DiagonalMovement");
            k.prototype.findPath = function(c, d, g, h, v) {
                var y = new p(function(N, P) {
                        return N.f - P.f
                    }),
                    q = v.getNodeAt(c, d);
                c = v.getNodeAt(g, h);
                d = this.heuristic;
                var t = this.diagonalMovement,
                    F = this.weight,
                    r = Math.abs,
                    w = Math.SQRT2,
                    E;
                q.g = 0;
                q.f = 0;
                y.push(q);
                for (q.opened = !0; !y.empty();) {
                    q = y.pop();
                    q.closed = !0;
                    if (q === c) return m.backtrace(c);
                    var u = v.getNeighbors(q, t);
                    var C = 0;
                    for (E = u.length; C < E; ++C) {
                        var D = u[C];
                        if (!D.closed) {
                            var x = D.x;
                            var G = D.y;
                            var H = q.g + (0 === x - q.x || 0 === G - q.y ? 1 : w);
                            if (!D.opened || H < D.g) D.g = H, D.h = D.h || F * d(r(x - g), r(G -
                                h)), D.f = D.g + D.h, D.parent = q, D.opened ? y.updateItem(D) : (y.push(D), D.opened = !0)
                        }
                    }
                }
                return []
            };
            f.exports = k
        }, {
            "../core/DiagonalMovement": 3,
            "../core/Heuristic": 5,
            "../core/Util": 7,
            heap: 1
        }],
        10: [function(l, f, n) {
            function k(m) {
                p.call(this, m);
                var a = this.heuristic;
                this.heuristic = function(b, c) {
                    return 1E6 * a(b, c)
                }
            }
            var p = l("./AStarFinder");
            k.prototype = new p;
            k.prototype.constructor = k;
            f.exports = k
        }, {
            "./AStarFinder": 9
        }],
        11: [function(l, f, n) {
            function k(c) {
                c = c || {};
                this.allowDiagonal = c.allowDiagonal;
                this.dontCrossCorners = c.dontCrossCorners;
                this.diagonalMovement = c.diagonalMovement;
                this.heuristic = c.heuristic || a.manhattan;
                this.weight = c.weight || 1;
                this.diagonalMovement || (this.diagonalMovement = this.allowDiagonal ? this.dontCrossCorners ? b.OnlyWhenNoObstacles : b.IfAtMostOneObstacle : b.Never);
                this.heuristic = this.diagonalMovement === b.Never ? c.heuristic || a.manhattan : c.heuristic || a.octile
            }
            var p = l("heap"),
                m = l("../core/Util"),
                a = l("../core/Heuristic"),
                b = l("../core/DiagonalMovement");
            k.prototype.findPath = function(c, d, g, h, v) {
                var y = function(T, R) {
                        return T.f -
                            R.f
                    },
                    q = new p(y);
                y = new p(y);
                var t = v.getNodeAt(c, d),
                    F = v.getNodeAt(g, h),
                    r = this.heuristic,
                    w = this.diagonalMovement,
                    E = this.weight,
                    u = Math.abs,
                    C = Math.SQRT2,
                    D;
                t.g = 0;
                t.f = 0;
                q.push(t);
                t.opened = 1;
                F.g = 0;
                F.f = 0;
                y.push(F);
                for (F.opened = 2; !q.empty() && !y.empty();) {
                    t = q.pop();
                    t.closed = !0;
                    F = v.getNeighbors(t, w);
                    var x = 0;
                    for (D = F.length; x < D; ++x) {
                        var G = F[x];
                        if (!G.closed) {
                            if (2 === G.opened) return m.biBacktrace(t, G);
                            var H = G.x;
                            var N = G.y;
                            var P = t.g + (0 === H - t.x || 0 === N - t.y ? 1 : C);
                            if (!G.opened || P < G.g) G.g = P, G.h = G.h || E * r(u(H - g), u(N - h)), G.f =
                                G.g + G.h, G.parent = t, G.opened ? q.updateItem(G) : (q.push(G), G.opened = 1)
                        }
                    }
                    t = y.pop();
                    t.closed = !0;
                    F = v.getNeighbors(t, w);
                    x = 0;
                    for (D = F.length; x < D; ++x)
                        if (G = F[x], !G.closed) {
                            if (1 === G.opened) return m.biBacktrace(G, t);
                            H = G.x;
                            N = G.y;
                            P = t.g + (0 === H - t.x || 0 === N - t.y ? 1 : C);
                            if (!G.opened || P < G.g) G.g = P, G.h = G.h || E * r(u(H - c), u(N - d)), G.f = G.g + G.h, G.parent = t, G.opened ? y.updateItem(G) : (y.push(G), G.opened = 2)
                        }
                }
                return []
            };
            f.exports = k
        }, {
            "../core/DiagonalMovement": 3,
            "../core/Heuristic": 5,
            "../core/Util": 7,
            heap: 1
        }],
        12: [function(l, f, n) {
            function k(m) {
                p.call(this,
                    m);
                var a = this.heuristic;
                this.heuristic = function(b, c) {
                    return 1E6 * a(b, c)
                }
            }
            var p = l("./BiAStarFinder");
            k.prototype = new p;
            k.prototype.constructor = k;
            f.exports = k
        }, {
            "./BiAStarFinder": 11
        }],
        13: [function(l, f, n) {
            function k(a) {
                a = a || {};
                this.allowDiagonal = a.allowDiagonal;
                this.dontCrossCorners = a.dontCrossCorners;
                this.diagonalMovement = a.diagonalMovement;
                this.diagonalMovement || (this.diagonalMovement = this.allowDiagonal ? this.dontCrossCorners ? m.OnlyWhenNoObstacles : m.IfAtMostOneObstacle : m.Never)
            }
            var p = l("../core/Util"),
                m = l("../core/DiagonalMovement");
            k.prototype.findPath = function(a, b, c, d, g) {
                b = g.getNodeAt(a, b);
                var h = g.getNodeAt(c, d);
                c = [];
                d = [];
                a = this.diagonalMovement;
                var v;
                c.push(b);
                b.opened = !0;
                b.by = 0;
                d.push(h);
                h.opened = !0;
                for (h.by = 1; c.length && d.length;) {
                    var y = c.shift();
                    y.closed = !0;
                    b = g.getNeighbors(y, a);
                    var q = 0;
                    for (v = b.length; q < v; ++q)
                        if (h = b[q], !h.closed)
                            if (h.opened) {
                                if (1 === h.by) return p.biBacktrace(y, h)
                            } else c.push(h), h.parent = y, h.opened = !0, h.by = 0;
                    y = d.shift();
                    y.closed = !0;
                    b = g.getNeighbors(y, a);
                    q = 0;
                    for (v = b.length; q <
                        v; ++q)
                        if (h = b[q], !h.closed)
                            if (h.opened) {
                                if (0 === h.by) return p.biBacktrace(h, y)
                            } else d.push(h), h.parent = y, h.opened = !0, h.by = 1
                }
                return []
            };
            f.exports = k
        }, {
            "../core/DiagonalMovement": 3,
            "../core/Util": 7
        }],
        14: [function(l, f, n) {
            function k(m) {
                p.call(this, m);
                this.heuristic = function(a, b) {
                    return 0
                }
            }
            var p = l("./BiAStarFinder");
            k.prototype = new p;
            k.prototype.constructor = k;
            f.exports = k
        }, {
            "./BiAStarFinder": 11
        }],
        15: [function(l, f, n) {
            function k(a) {
                a = a || {};
                this.allowDiagonal = a.allowDiagonal;
                this.dontCrossCorners = a.dontCrossCorners;
                this.diagonalMovement = a.diagonalMovement;
                this.diagonalMovement || (this.diagonalMovement = this.allowDiagonal ? this.dontCrossCorners ? m.OnlyWhenNoObstacles : m.IfAtMostOneObstacle : m.Never)
            }
            var p = l("../core/Util"),
                m = l("../core/DiagonalMovement");
            k.prototype.findPath = function(a, b, c, d, g) {
                var h = [],
                    v = this.diagonalMovement;
                a = g.getNodeAt(a, b);
                c = g.getNodeAt(c, d);
                var y;
                h.push(a);
                for (a.opened = !0; h.length;) {
                    b = h.shift();
                    b.closed = !0;
                    if (b === c) return p.backtrace(c);
                    d = g.getNeighbors(b, v);
                    var q = 0;
                    for (y = d.length; q < y; ++q) a =
                        d[q], a.closed || a.opened || (h.push(a), a.opened = !0, a.parent = b)
                }
                return []
            };
            f.exports = k
        }, {
            "../core/DiagonalMovement": 3,
            "../core/Util": 7
        }],
        16: [function(l, f, n) {
            function k(m) {
                p.call(this, m);
                this.heuristic = function(a, b) {
                    return 0
                }
            }
            var p = l("./AStarFinder");
            k.prototype = new p;
            k.prototype.constructor = k;
            f.exports = k
        }, {
            "./AStarFinder": 9
        }],
        17: [function(l, f, n) {
            function k(b) {
                b = b || {};
                this.allowDiagonal = b.allowDiagonal;
                this.dontCrossCorners = b.dontCrossCorners;
                this.diagonalMovement = b.diagonalMovement;
                this.heuristic = b.heuristic ||
                    p.manhattan;
                this.weight = b.weight || 1;
                this.trackRecursion = b.trackRecursion || !1;
                this.timeLimit = b.timeLimit || Infinity;
                this.diagonalMovement || (this.diagonalMovement = this.allowDiagonal ? this.dontCrossCorners ? a.OnlyWhenNoObstacles : a.IfAtMostOneObstacle : a.Never);
                this.heuristic = this.diagonalMovement === a.Never ? b.heuristic || p.manhattan : b.heuristic || p.octile
            }
            l("../core/Util");
            var p = l("../core/Heuristic"),
                m = l("../core/Node"),
                a = l("../core/DiagonalMovement");
            k.prototype.findPath = function(b, c, d, g, h) {
                var v = 0,
                    y = (new Date).getTime(),
                    q = function(r, w) {
                        return this.heuristic(Math.abs(w.x - r.x), Math.abs(w.y - r.y))
                    }.bind(this),
                    t = function(r, w, E, u, C) {
                        v++;
                        if (0 < this.timeLimit && (new Date).getTime() - y > 1E3 * this.timeLimit) return Infinity;
                        var D = w + q(r, F) * this.weight;
                        if (D > E) return D;
                        if (r == F) return u[C] = [r.x, r.y], r;
                        var x, G = h.getNeighbors(r, this.diagonalMovement);
                        var H = 0;
                        for (D = Infinity; x = G[H]; ++H) {
                            this.trackRecursion && (x.retainCount = x.retainCount + 1 || 1, !0 !== x.tested && (x.tested = !0));
                            var N = t(x, w + (r.x === x.x || r.y === x.y ? 1 : Math.SQRT2), E, u, C + 1);
                            if (N instanceof m) return u[C] = [r.x, r.y], N;
                            this.trackRecursion && 0 === --x.retainCount && (x.tested = !1);
                            N < D && (D = N)
                        }
                        return D
                    }.bind(this);
                b = h.getNodeAt(b, c);
                var F = h.getNodeAt(d, g);
                c = q(b, F);
                for (d = 0;; ++d) {
                    g = [];
                    c = t(b, 0, c, g, 0);
                    if (Infinity === c) break;
                    if (c instanceof m) return g
                }
                return []
            };
            f.exports = k
        }, {
            "../core/DiagonalMovement": 3,
            "../core/Heuristic": 5,
            "../core/Node": 6,
            "../core/Util": 7
        }],
        18: [function(l, f, n) {
            function k(a) {
                p.call(this, a)
            }
            var p = l("./JumpPointFinderBase"),
                m = l("../core/DiagonalMovement");
            k.prototype = new p;
            k.prototype.constructor =
                k;
            k.prototype._jump = function(a, b, c, d) {
                var g = this.grid;
                c = a - c;
                d = b - d;
                if (!g.isWalkableAt(a, b)) return null;
                !0 === this.trackJumpRecursion && (g.getNodeAt(a, b).tested = !0);
                if (g.getNodeAt(a, b) === this.endNode) return [a, b];
                if (0 !== c && 0 !== d) {
                    if (g.isWalkableAt(a - c, b + d) && !g.isWalkableAt(a - c, b) || g.isWalkableAt(a + c, b - d) && !g.isWalkableAt(a, b - d) || this._jump(a + c, b, a, b) || this._jump(a, b + d, a, b)) return [a, b]
                } else if (0 !== c) {
                    if (g.isWalkableAt(a + c, b + 1) && !g.isWalkableAt(a, b + 1) || g.isWalkableAt(a + c, b - 1) && !g.isWalkableAt(a, b - 1)) return [a,
                        b
                    ]
                } else if (g.isWalkableAt(a + 1, b + d) && !g.isWalkableAt(a + 1, b) || g.isWalkableAt(a - 1, b + d) && !g.isWalkableAt(a - 1, b)) return [a, b];
                return this._jump(a + c, b + d, a, b)
            };
            k.prototype._findNeighbors = function(a) {
                var b = a.parent,
                    c = a.x,
                    d = a.y,
                    g = this.grid,
                    h = [];
                if (b) a = b.x, b = b.y, a = (c - a) / Math.max(Math.abs(c - a), 1), b = (d - b) / Math.max(Math.abs(d - b), 1), 0 !== a && 0 !== b ? (g.isWalkableAt(c, d + b) && h.push([c, d + b]), g.isWalkableAt(c + a, d) && h.push([c + a, d]), g.isWalkableAt(c + a, d + b) && h.push([c + a, d + b]), g.isWalkableAt(c - a, d) || h.push([c - a, d + b]), g.isWalkableAt(c,
                    d - b) || h.push([c + a, d - b])) : 0 === a ? (g.isWalkableAt(c, d + b) && h.push([c, d + b]), g.isWalkableAt(c + 1, d) || h.push([c + 1, d + b]), g.isWalkableAt(c - 1, d) || h.push([c - 1, d + b])) : (g.isWalkableAt(c + a, d) && h.push([c + a, d]), g.isWalkableAt(c, d + 1) || h.push([c + a, d + 1]), g.isWalkableAt(c, d - 1) || h.push([c + a, d - 1]));
                else
                    for (c = g.getNeighbors(a, m.Always), g = 0, b = c.length; g < b; ++g) d = c[g], h.push([d.x, d.y]);
                return h
            };
            f.exports = k
        }, {
            "../core/DiagonalMovement": 3,
            "./JumpPointFinderBase": 23
        }],
        19: [function(l, f, n) {
            function k(a) {
                p.call(this, a)
            }
            var p = l("./JumpPointFinderBase"),
                m = l("../core/DiagonalMovement");
            k.prototype = new p;
            k.prototype.constructor = k;
            k.prototype._jump = function(a, b, c, d) {
                var g = this.grid;
                c = a - c;
                d = b - d;
                if (!g.isWalkableAt(a, b)) return null;
                !0 === this.trackJumpRecursion && (g.getNodeAt(a, b).tested = !0);
                if (g.getNodeAt(a, b) === this.endNode) return [a, b];
                if (0 !== c && 0 !== d) {
                    if (g.isWalkableAt(a - c, b + d) && !g.isWalkableAt(a - c, b) || g.isWalkableAt(a + c, b - d) && !g.isWalkableAt(a, b - d) || this._jump(a + c, b, a, b) || this._jump(a, b + d, a, b)) return [a, b]
                } else if (0 !== c) {
                    if (g.isWalkableAt(a + c, b + 1) && !g.isWalkableAt(a,
                            b + 1) || g.isWalkableAt(a + c, b - 1) && !g.isWalkableAt(a, b - 1)) return [a, b]
                } else if (g.isWalkableAt(a + 1, b + d) && !g.isWalkableAt(a + 1, b) || g.isWalkableAt(a - 1, b + d) && !g.isWalkableAt(a - 1, b)) return [a, b];
                return g.isWalkableAt(a + c, b) || g.isWalkableAt(a, b + d) ? this._jump(a + c, b + d, a, b) : null
            };
            k.prototype._findNeighbors = function(a) {
                var b = a.parent,
                    c = a.x,
                    d = a.y,
                    g = this.grid,
                    h = [];
                if (b) a = b.x, b = b.y, a = (c - a) / Math.max(Math.abs(c - a), 1), b = (d - b) / Math.max(Math.abs(d - b), 1), 0 !== a && 0 !== b ? (g.isWalkableAt(c, d + b) && h.push([c, d + b]), g.isWalkableAt(c +
                    a, d) && h.push([c + a, d]), (g.isWalkableAt(c, d + b) || g.isWalkableAt(c + a, d)) && h.push([c + a, d + b]), !g.isWalkableAt(c - a, d) && g.isWalkableAt(c, d + b) && h.push([c - a, d + b]), !g.isWalkableAt(c, d - b) && g.isWalkableAt(c + a, d) && h.push([c + a, d - b])) : 0 === a ? g.isWalkableAt(c, d + b) && (h.push([c, d + b]), g.isWalkableAt(c + 1, d) || h.push([c + 1, d + b]), g.isWalkableAt(c - 1, d) || h.push([c - 1, d + b])) : g.isWalkableAt(c + a, d) && (h.push([c + a, d]), g.isWalkableAt(c, d + 1) || h.push([c + a, d + 1]), g.isWalkableAt(c, d - 1) || h.push([c + a, d - 1]));
                else
                    for (c = g.getNeighbors(a, m.IfAtMostOneObstacle),
                        g = 0, b = c.length; g < b; ++g) d = c[g], h.push([d.x, d.y]);
                return h
            };
            f.exports = k
        }, {
            "../core/DiagonalMovement": 3,
            "./JumpPointFinderBase": 23
        }],
        20: [function(l, f, n) {
            function k(a) {
                p.call(this, a)
            }
            var p = l("./JumpPointFinderBase"),
                m = l("../core/DiagonalMovement");
            k.prototype = new p;
            k.prototype.constructor = k;
            k.prototype._jump = function(a, b, c, d) {
                var g = this.grid;
                c = a - c;
                d = b - d;
                if (!g.isWalkableAt(a, b)) return null;
                !0 === this.trackJumpRecursion && (g.getNodeAt(a, b).tested = !0);
                if (g.getNodeAt(a, b) === this.endNode) return [a, b];
                if (0 !==
                    c && 0 !== d) {
                    if (this._jump(a + c, b, a, b) || this._jump(a, b + d, a, b)) return [a, b]
                } else if (0 !== c) {
                    if (g.isWalkableAt(a, b - 1) && !g.isWalkableAt(a - c, b - 1) || g.isWalkableAt(a, b + 1) && !g.isWalkableAt(a - c, b + 1)) return [a, b]
                } else if (0 !== d && (g.isWalkableAt(a - 1, b) && !g.isWalkableAt(a - 1, b - d) || g.isWalkableAt(a + 1, b) && !g.isWalkableAt(a + 1, b - d))) return [a, b];
                return g.isWalkableAt(a + c, b) && g.isWalkableAt(a, b + d) ? this._jump(a + c, b + d, a, b) : null
            };
            k.prototype._findNeighbors = function(a) {
                var b = a.parent,
                    c = a.x,
                    d = a.y,
                    g = this.grid,
                    h = [];
                if (b) {
                    a = b.x;
                    b =
                        b.y;
                    a = (c - a) / Math.max(Math.abs(c - a), 1);
                    var v = (d - b) / Math.max(Math.abs(d - b), 1);
                    0 !== a && 0 !== v ? (g.isWalkableAt(c, d + v) && h.push([c, d + v]), g.isWalkableAt(c + a, d) && h.push([c + a, d]), g.isWalkableAt(c, d + v) && g.isWalkableAt(c + a, d) && h.push([c + a, d + v])) : 0 !== a ? (b = g.isWalkableAt(c + a, d), v = g.isWalkableAt(c, d + 1), g = g.isWalkableAt(c, d - 1), b && (h.push([c + a, d]), v && h.push([c + a, d + 1]), g && h.push([c + a, d - 1])), v && h.push([c, d + 1]), g && h.push([c, d - 1])) : 0 !== v && (b = g.isWalkableAt(c, d + v), a = g.isWalkableAt(c + 1, d), g = g.isWalkableAt(c - 1, d), b && (h.push([c,
                        d + v
                    ]), a && h.push([c + 1, d + v]), g && h.push([c - 1, d + v])), a && h.push([c + 1, d]), g && h.push([c - 1, d]))
                } else
                    for (c = g.getNeighbors(a, m.OnlyWhenNoObstacles), g = 0, b = c.length; g < b; ++g) d = c[g], h.push([d.x, d.y]);
                return h
            };
            f.exports = k
        }, {
            "../core/DiagonalMovement": 3,
            "./JumpPointFinderBase": 23
        }],
        21: [function(l, f, n) {
            function k(a) {
                p.call(this, a)
            }
            var p = l("./JumpPointFinderBase"),
                m = l("../core/DiagonalMovement");
            k.prototype = new p;
            k.prototype.constructor = k;
            k.prototype._jump = function(a, b, c, d) {
                var g = this.grid;
                c = a - c;
                d = b - d;
                if (!g.isWalkableAt(a,
                        b)) return null;
                !0 === this.trackJumpRecursion && (g.getNodeAt(a, b).tested = !0);
                if (g.getNodeAt(a, b) === this.endNode) return [a, b];
                if (0 !== c) {
                    if (g.isWalkableAt(a, b - 1) && !g.isWalkableAt(a - c, b - 1) || g.isWalkableAt(a, b + 1) && !g.isWalkableAt(a - c, b + 1)) return [a, b]
                } else if (0 !== d) {
                    if (g.isWalkableAt(a - 1, b) && !g.isWalkableAt(a - 1, b - d) || g.isWalkableAt(a + 1, b) && !g.isWalkableAt(a + 1, b - d) || this._jump(a + 1, b, a, b) || this._jump(a - 1, b, a, b)) return [a, b]
                } else throw Error("Only horizontal and vertical movements are allowed");
                return this._jump(a +
                    c, b + d, a, b)
            };
            k.prototype._findNeighbors = function(a) {
                var b = a.parent,
                    c = a.x,
                    d = a.y,
                    g = this.grid,
                    h = [];
                if (b) a = b.x, b = b.y, a = (c - a) / Math.max(Math.abs(c - a), 1), b = (d - b) / Math.max(Math.abs(d - b), 1), 0 !== a ? (g.isWalkableAt(c, d - 1) && h.push([c, d - 1]), g.isWalkableAt(c, d + 1) && h.push([c, d + 1]), g.isWalkableAt(c + a, d) && h.push([c + a, d])) : 0 !== b && (g.isWalkableAt(c - 1, d) && h.push([c - 1, d]), g.isWalkableAt(c + 1, d) && h.push([c + 1, d]), g.isWalkableAt(c, d + b) && h.push([c, d + b]));
                else
                    for (c = g.getNeighbors(a, m.Never), g = 0, b = c.length; g < b; ++g) d = c[g], h.push([d.x,
                        d.y
                    ]);
                return h
            };
            f.exports = k
        }, {
            "../core/DiagonalMovement": 3,
            "./JumpPointFinderBase": 23
        }],
        22: [function(l, f, n) {
            var k = l("../core/DiagonalMovement"),
                p = l("./JPFNeverMoveDiagonally"),
                m = l("./JPFAlwaysMoveDiagonally"),
                a = l("./JPFMoveDiagonallyIfNoObstacles"),
                b = l("./JPFMoveDiagonallyIfAtMostOneObstacle");
            f.exports = function(c) {
                c = c || {};
                return c.diagonalMovement === k.Never ? new p(c) : c.diagonalMovement === k.Always ? new m(c) : c.diagonalMovement === k.OnlyWhenNoObstacles ? new a(c) : new b(c)
            }
        }, {
            "../core/DiagonalMovement": 3,
            "./JPFAlwaysMoveDiagonally": 18,
            "./JPFMoveDiagonallyIfAtMostOneObstacle": 19,
            "./JPFMoveDiagonallyIfNoObstacles": 20,
            "./JPFNeverMoveDiagonally": 21
        }],
        23: [function(l, f, n) {
            function k(b) {
                b = b || {};
                this.heuristic = b.heuristic || a.manhattan;
                this.trackJumpRecursion = b.trackJumpRecursion || !1
            }
            var p = l("heap"),
                m = l("../core/Util"),
                a = l("../core/Heuristic");
            l("../core/DiagonalMovement");
            k.prototype.findPath = function(b, c, d, g, h) {
                var v = this.openList = new p(function(y, q) {
                    return y.f - q.f
                });
                b = this.startNode = h.getNodeAt(b, c);
                d =
                    this.endNode = h.getNodeAt(d, g);
                this.grid = h;
                b.g = 0;
                b.f = 0;
                v.push(b);
                for (b.opened = !0; !v.empty();) {
                    h = v.pop();
                    h.closed = !0;
                    if (h === d) return m.expandPath(m.backtrace(d));
                    this._identifySuccessors(h)
                }
                return []
            };
            k.prototype._identifySuccessors = function(b) {
                var c = this.grid,
                    d = this.heuristic,
                    g = this.openList,
                    h = this.endNode.x,
                    v = this.endNode.y,
                    y, q, t = b.x,
                    F = b.y,
                    r = Math.abs;
                var w = this._findNeighbors(b);
                var E = 0;
                for (q = w.length; E < q; ++E) {
                    var u = w[E];
                    if (y = this._jump(u[0], u[1], t, F)) {
                        u = y[0];
                        y = y[1];
                        var C = c.getNodeAt(u, y);
                        if (!C.closed) {
                            var D =
                                a.octile(r(u - t), r(y - F));
                            D = b.g + D;
                            if (!C.opened || D < C.g) C.g = D, C.h = C.h || d(r(u - h), r(y - v)), C.f = C.g + C.h, C.parent = b, C.opened ? g.updateItem(C) : (g.push(C), C.opened = !0)
                        }
                    }
                }
            };
            f.exports = k
        }, {
            "../core/DiagonalMovement": 3,
            "../core/Heuristic": 5,
            "../core/Util": 7,
            heap: 1
        }]
    }, {}, [8])(8)
});
var PREFIX_GAME = "pacchef_";

function setLocalStorageLevel(e) {
    s_iLastLevel < e && (s_iLastLevel = e, saveItem(PREFIX_GAME + "level", s_iLastLevel))
}

function setLocalStorageScore(e, l) {
    saveItem(PREFIX_GAME + "score_level_" + l, e)
}

function setLocalStorageLives(e, l) {
    saveItem(PREFIX_GAME + "lives_level_" + l, e)
}

function clearLocalStorage() {
    s_iLastLevel = 1;
    s_bStorageAvailable && localStorage.clear()
}

function getScoreTillLevel(e) {
    if (!s_bStorageAvailable) return 0;
    for (var l = 0, f = 0; f < e - 1; f++) l += parseInt(getItem(PREFIX_GAME + "score_level_" + (f + 1)));
    return l
}

function getLives(e) {
    if (!s_bStorageAvailable) return NUM_LIVES;
    e = getItem(PREFIX_GAME + "lives_level_" + e);
    return null !== e ? parseInt(e) : NUM_LIVES
}
var s_bLandscape = !0,
    s_iScaleFactor = 1,
    s_bIsIphone = !1,
    s_iOffsetX, s_iOffsetY, browserName = function(e) {
        switch (!0) {
            case -1 < e.indexOf("edge"):
                return "MS Edge";
            case -1 < e.indexOf("edg/"):
                return "Edge ( chromium based)";
            case -1 < e.indexOf("opr") && !!window.opr:
                return "Opera";
            case -1 < e.indexOf("chrome") && !!window.chrome:
                return "Chrome";
            case -1 < e.indexOf("trident"):
                return "MS IE";
            case -1 < e.indexOf("firefox"):
                return "Mozilla Firefox";
            case -1 < e.indexOf("safari"):
                return "Safari";
            default:
                return "other"
        }
    }(window.navigator.userAgent.toLowerCase());
window.addEventListener("resize", function(e) {
    sizeHandler()
}, !0);

function trace(e) {
    console.log(e)
}

function isChrome() {
    return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
}

function isIpad() {
    var e = -1 !== navigator.userAgent.toLowerCase().indexOf("ipad");
    return !e && navigator.userAgent.match(/Mac/) && navigator.maxTouchPoints && 2 < navigator.maxTouchPoints ? !0 : e
}

function isMobile() {
    return isIpad() ? !0 : navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ? !0 : !1
}

function isIOS() {
    for (var e = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";"); e.length;)
        if (navigator.platform === e.pop()) return s_bIsIphone = !0;
    return s_bIsIphone = !1
}

function getSize(e) {
    var l = e.toLowerCase(),
        f = window.document,
        n = f.documentElement;
    if (void 0 === window["inner" + e]) e = n["client" + e];
    else if (window["inner" + e] != n["client" + e]) {
        var k = f.createElement("body");
        k.id = "vpw-test-b";
        k.style.cssText = "overflow:scroll";
        var p = f.createElement("div");
        p.id = "vpw-test-d";
        p.style.cssText = "position:absolute;top:-1000px";
        p.innerHTML = "<style>@media(" + l + ":" + n["client" + e] + "px){body#vpw-test-b div#vpw-test-d{" + l + ":7px!important}}</style>";
        k.appendChild(p);
        n.insertBefore(k, f.head);
        e = 7 == p["offset" + e] ? n["client" + e] : window["inner" + e];
        n.removeChild(k)
    } else e = window["inner" + e];
    return e
}
window.addEventListener("orientationchange", onOrientationChange);

function onOrientationChange() {
    window.matchMedia("(orientation: portrait)").matches && sizeHandler();
    window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}

function getIOSWindowHeight() {
    return document.documentElement.clientWidth / window.innerWidth * window.innerHeight
}

function getHeightOfIOSToolbars() {
    var e = (0 === window.orientation ? screen.height : screen.width) - getIOSWindowHeight();
    return 1 < e ? e : 0
}

function sizeHandler() {
    window.scrollTo(0, 1);
    if (document.querySelector("#canvas")) {
        var e = null !== platform.name && "safari" === platform.name.toLowerCase() ? getIOSWindowHeight() : getSize("Height");
        var l = getSize("Width"),
            f = Math.min(e / CANVAS_HEIGHT, l / CANVAS_WIDTH);
        l > e ? (EDGEBOARD_X = 0, EDGEBOARD_Y = 570, s_bLandscape = !0) : (EDGEBOARD_X = 470, EDGEBOARD_Y = 0, s_bLandscape = !1);
        var n = Math.round(CANVAS_WIDTH * f);
        f = Math.round(CANVAS_HEIGHT * f);
        if (f < e) {
            var k = e - f;
            f += k;
            n += CANVAS_WIDTH / CANVAS_HEIGHT * k
        } else n < l && (k = l - n, n += k, f += CANVAS_HEIGHT /
            CANVAS_WIDTH * k);
        k = e / 2 - f / 2;
        var p = l / 2 - n / 2,
            m = CANVAS_WIDTH / n;
        if (p * m < -EDGEBOARD_X || k * m < -EDGEBOARD_Y) f = Math.min(e / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y), l / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), n = Math.round(CANVAS_WIDTH * f), f = Math.round(CANVAS_HEIGHT * f), k = (e - f) / 2, p = (l - n) / 2, m = CANVAS_WIDTH / n;
        s_iOffsetX = -1 * p * m;
        s_iOffsetY = -1 * k * m;
        0 <= k && (s_iOffsetY = 0);
        0 <= p && (s_iOffsetX = 0);
        null !== s_oGame && s_oGame.refreshButtonPos();
        null !== s_oMenu && s_oMenu.refreshButtonPos();
        null !== s_oLevelMenu && s_oLevelMenu.refreshButtonPos();
        s_iScaleFactor = Math.min(n /
            CANVAS_WIDTH, f / CANVAS_HEIGHT);
        s_bIsIphone && s_oStage ? (canvas = document.getElementById("canvas"), s_oStage.canvas.width = 2 * n, s_oStage.canvas.height = 2 * f, canvas.style.width = n + "px", canvas.style.height = f + "px", s_iScaleFactor = 2 * Math.min(n / CANVAS_WIDTH, f / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor) : s_bMobile || isChrome() ? (document.querySelector("#canvas").style.width = n + "px", document.querySelector("#canvas").style.height = f + "px") : s_oStage && (s_oStage.canvas.width = n, s_oStage.canvas.height = f, s_oStage.scaleX =
            s_oStage.scaleY = s_iScaleFactor);
        0 <= k && (k = (e - f) / 2);
        document.querySelector("#canvas").style.top = k + "px";
        document.querySelector("#canvas").style.left = p + "px";
        fullscreenHandler()
    }
}

function createBitmap(e, l, f) {
    var n = new createjs.Bitmap(e),
        k = new createjs.Shape;
    l && f ? k.graphics.beginFill("#fff").drawRect(0, 0, l, f) : k.graphics.beginFill("#ff0").drawRect(0, 0, e.width, e.height);
    n.hitArea = k;
    return n
}

function createSprite(e, l, f, n, k, p) {
    e = null !== l ? new createjs.Sprite(e, l) : new createjs.Sprite(e);
    l = new createjs.Shape;
    l.graphics.beginFill("#000000").drawRect(-f, -n, k, p);
    e.hitArea = l;
    return e
}

function randomFloatBetween(e, l, f) {
    "undefined" === typeof f && (f = 2);
    return parseFloat(Math.min(e + Math.random() * (l - e), l).toFixed(f))
}

function rotateVector2D(e, l) {
    var f = l.getX() * Math.cos(e) + l.getY() * Math.sin(e),
        n = l.getX() * -Math.sin(e) + l.getY() * Math.cos(e);
    l.set(f, n)
}

function tweenVectorsOnX(e, l, f) {
    return e + f * (l - e)
}
this.tweenVectors = function(e, l, f) {
    var n = new CVector2;
    n.set(e.getX() + f * (l.getX() - e.getX()), e.getY() + f * (l.getY() - e.getY()));
    return n
};

function distance(e, l) {
    return Math.sqrt((l.x - e.x) * (l.x - e.x) + (l.y - e.y) * (l.y - e.y))
}

function shuffle(e) {
    for (var l = e.length, f, n; 0 !== l;) n = Math.floor(Math.random() * l), --l, f = e[l], e[l] = e[n], e[n] = f;
    return e
}

function bubbleSort(e) {
    do {
        var l = !1;
        for (var f = 0; f < e.length - 1; f++) e[f] > e[f + 1] && (l = e[f], e[f] = e[f + 1], e[f + 1] = l, l = !0)
    } while (l)
}

function compare(e, l) {
    return e.index > l.index ? -1 : e.index < l.index ? 1 : 0
}

function easeLinear(e, l, f, n) {
    return f * e / n + l
}

function easeInQuad(e, l, f, n) {
    return f * (e /= n) * e + l
}

function easeInSine(e, l, f, n) {
    return -f * Math.cos(e / n * (Math.PI / 2)) + f + l
}

function easeInCubic(e, l, f, n) {
    return f * (e /= n) * e * e + l
}

function getTrajectoryPoint(e, l) {
    var f = new createjs.Point,
        n = (1 - e) * (1 - e),
        k = e * e;
    f.x = n * l.start.x + 2 * (1 - e) * e * l.traj.x + k * l.end.x;
    f.y = n * l.start.y + 2 * (1 - e) * e * l.traj.y + k * l.end.y;
    return f
}

function formatTime(e) {
    e /= 1E3;
    var l = Math.floor(e / 60);
    e = Math.floor(e - 60 * l);
    var f = "";
    f = 10 > l ? f + ("0" + l + ":") : f + (l + ":");
    return 10 > e ? f + ("0" + e) : f + e
}

function degreesToRadians(e) {
    return e * Math.PI / 180
}

function checkRectCollision(e, l) {
    var f = getBounds(e, .9);
    var n = getBounds(l, .98);
    return calculateIntersection(f, n)
}

function collisionWithCircle(e, l, f) {
    var n = e.getX() - l.getX();
    e = e.getY() - l.getY();
    return Math.sqrt(n * n + e * e) < PLAYER_RADIUS * f + CELL_SIZE * f ? !0 : !1
}

function calculateIntersection(e, l) {
    var f, n, k, p;
    var m = e.x + (f = e.width / 2);
    var a = e.y + (n = e.height / 2);
    var b = l.x + (k = l.width / 2);
    var c = l.y + (p = l.height / 2);
    m = Math.abs(m - b) - (f + k);
    a = Math.abs(a - c) - (n + p);
    return 0 > m && 0 > a ? (m = Math.min(Math.min(e.width, l.width), -m), a = Math.min(Math.min(e.height, l.height), -a), {
        x: Math.max(e.x, l.x),
        y: Math.max(e.y, l.y),
        width: m,
        height: a,
        rect1: e,
        rect2: l
    }) : null
}

function getBounds(e, l) {
    var f = {
        x: Infinity,
        y: Infinity,
        width: 0,
        height: 0
    };
    if (e instanceof createjs.Container) {
        f.x2 = -Infinity;
        f.y2 = -Infinity;
        var n = e.children,
            k = n.length,
            p;
        for (p = 0; p < k; p++) {
            var m = getBounds(n[p], 1);
            m.x < f.x && (f.x = m.x);
            m.y < f.y && (f.y = m.y);
            m.x + m.width > f.x2 && (f.x2 = m.x + m.width);
            m.y + m.height > f.y2 && (f.y2 = m.y + m.height)
        }
        Infinity == f.x && (f.x = 0);
        Infinity == f.y && (f.y = 0);
        Infinity == f.x2 && (f.x2 = 0);
        Infinity == f.y2 && (f.y2 = 0);
        f.width = f.x2 - f.x;
        f.height = f.y2 - f.y;
        delete f.x2;
        delete f.y2
    } else {
        if (e instanceof createjs.Bitmap) {
            k =
                e.sourceRect || e.image;
            p = k.width * l;
            var a = k.height * l
        } else if (e instanceof createjs.Sprite)
            if (e.spriteSheet._frames && e.spriteSheet._frames[e.currentFrame] && e.spriteSheet._frames[e.currentFrame].image) {
                k = e.spriteSheet.getFrame(e.currentFrame);
                p = k.rect.width;
                a = k.rect.height;
                n = k.regX;
                var b = k.regY
            } else f.x = e.x || 0, f.y = e.y || 0;
        else f.x = e.x || 0, f.y = e.y || 0;
        n = n || 0;
        p = p || 0;
        b = b || 0;
        a = a || 0;
        f.regX = n;
        f.regY = b;
        k = e.localToGlobal(0 - n, 0 - b);
        m = e.localToGlobal(p - n, a - b);
        p = e.localToGlobal(p - n, 0 - b);
        n = e.localToGlobal(0 - n, a - b);
        f.x =
            Math.min(Math.min(Math.min(k.x, m.x), p.x), n.x);
        f.y = Math.min(Math.min(Math.min(k.y, m.y), p.y), n.y);
        f.width = Math.max(Math.max(Math.max(k.x, m.x), p.x), n.x) - f.x;
        f.height = Math.max(Math.max(Math.max(k.y, m.y), p.y), n.y) - f.y
    }
    return f
}

function NoClickDelay(e) {
    this.element = e;
    window.Touch && this.element.addEventListener("touchstart", this, !1)
}

function shuffle(e) {
    for (var l = e.length, f, n; 0 < l;) n = Math.floor(Math.random() * l), l--, f = e[l], e[l] = e[n], e[n] = f;
    return e
}
NoClickDelay.prototype = {
    handleEvent: function(e) {
        switch (e.type) {
            case "touchstart":
                this.onTouchStart(e);
                break;
            case "touchmove":
                this.onTouchMove(e);
                break;
            case "touchend":
                this.onTouchEnd(e)
        }
    },
    onTouchStart: function(e) {
        e.preventDefault();
        this.moved = !1;
        this.element.addEventListener("touchmove", this, !1);
        this.element.addEventListener("touchend", this, !1)
    },
    onTouchMove: function(e) {
        this.moved = !0
    },
    onTouchEnd: function(e) {
        this.element.removeEventListener("touchmove", this, !1);
        this.element.removeEventListener("touchend",
            this, !1);
        if (!this.moved) {
            e = document.elementFromPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
            3 == e.nodeType && (e = e.parentNode);
            var l = document.createEvent("MouseEvents");
            l.initEvent("click", !0, !0);
            e.dispatchEvent(l)
        }
    }
};
(function() {
    function e(f) {
        var n = {
            focus: "visible",
            focusin: "visible",
            pageshow: "visible",
            blur: "hidden",
            focusout: "hidden",
            pagehide: "hidden"
        };
        f = f || window.event;
        f.type in n ? document.body.className = n[f.type] : (document.body.className = this[l] ? "hidden" : "visible", "hidden" === document.body.className ? s_oMain.stopUpdate() : s_oMain.startUpdate())
    }
    var l = "hidden";
    l in document ? document.addEventListener("visibilitychange", e) : (l = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", e) : (l = "webkitHidden") in
        document ? document.addEventListener("webkitvisibilitychange", e) : (l = "msHidden") in document ? document.addEventListener("msvisibilitychange", e) : "onfocusin" in document ? document.onfocusin = document.onfocusout = e : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = e
})();

function ctlArcadeResume() {
    null !== s_oMain && s_oMain.startUpdate()
}

function ctlArcadePause() {
    null !== s_oMain && s_oMain.stopUpdate()
}

function getParamValue(e) {
    for (var l = window.location.search.substring(1).split("&"), f = 0; f < l.length; f++) {
        var n = l[f].split("=");
        if (n[0] == e) return n[1]
    }
}

function playSound(e, l, f) {
    return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (s_aSounds[e].play(), s_aSounds[e].volume(l), s_aSounds[e].loop(f), s_aSounds[e]) : null
}

function stopSound(e) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[e].stop()
}

function setVolume(e, l) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[e].volume(l)
}

function setMute(e, l) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[e].mute(l)
}

function saveItem(e, l) {
    s_bStorageAvailable && localStorage.setItem(e, l)
}

function getItem(e) {
    return s_bStorageAvailable ? localStorage.getItem(e) : null
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

function CSpriteLibrary() {
    var e = {},
        l, f, n, k, p, m;
    this.init = function(a, b, c) {
        l = {};
        n = f = 0;
        k = a;
        p = b;
        m = c
    };
    this.addSprite = function(a, b) {
        if (!e.hasOwnProperty(a)) {
            var c = new Image;
            e[a] = l[a] = {
                szPath: b,
                oSprite: c,
                bLoaded: !1
            };
            f++
        }
    };
    this.getSprite = function(a) {
        return e.hasOwnProperty(a) ? e[a].oSprite : null
    };
    this._onSpritesLoaded = function() {
        f = 0;
        p.call(m)
    };
    this._onSpriteLoaded = function() {
        k.call(m);
        ++n === f && this._onSpritesLoaded()
    };
    this.loadSprites = function() {
        for (var a in l) l[a].oSprite.oSpriteLibrary = this, l[a].oSprite.szKey =
            a, l[a].oSprite.onload = function() {
                this.oSpriteLibrary.setLoaded(this.szKey);
                this.oSpriteLibrary._onSpriteLoaded(this.szKey)
            }, l[a].oSprite.onerror = function(b) {
                var c = b.currentTarget;
                setTimeout(function() {
                    l[c.szKey].oSprite.src = l[c.szKey].szPath
                }, 500)
            }, l[a].oSprite.src = l[a].szPath
    };
    this.setLoaded = function(a) {
        e[a].bLoaded = !0
    };
    this.isLoaded = function(a) {
        return e[a].bLoaded
    };
    this.getNumSprites = function() {
        return f
    }
}
var CANVAS_WIDTH = 1920,
    CANVAS_HEIGHT = 1920,
    EDGEBOARD_X = 0,
    EDGEBOARD_Y = 0,
    FONT = "press_start_2pregular",
    FONT_OUTLINE = 3,
    SOUNDTRACK_VOLUME_IN_GAME = .4,
    FPS = 30,
    DISABLE_SOUND_MOBILE = !1,
    STATE_LOADING = 0,
    STATE_MENU = 1,
    STATE_LEVEL = 2,
    STATE_GAME = 3,
    ON_MOUSE_DOWN = 0,
    ON_MOUSE_UP = 1,
    ON_MOUSE_OVER = 2,
    ON_MOUSE_OUT = 3,
    ON_BUT_YES_DOWN = 4,
    ON_BACK_MENU = 5,
    ON_RESTART = 6,
    ON_NEXT = 7,
    DIR_TOP = 0,
    DIR_RIGHT = 1,
    DIR_BOTTOM = 2,
    DIR_LEFT = 3,
    ANIM_IDLE = "idle",
    ANIM_WALK = "walk",
    ANIM_ATTACK = "attack",
    ANIM_ESCAPE = "escape",
    ANIM_DIE = "die",
    SCORE_X = 200,
    SCORE_Y =
    200,
    GRID_ROWS = 20,
    GRID_COLS = 19,
    CELL_SIZE = 54,
    GRID_X = CANVAS_WIDTH / 2,
    GRID_Y = CANVAS_HEIGHT / 2,
    GRID_WIDTH = CELL_SIZE * GRID_COLS,
    GRID_HEIGHT = CELL_SIZE * GRID_ROWS,
    CUR_GRID_SCALE = 1,
    NUM_LIVES, HERO_WIDTH = 55,
    HERO_HEIGHT = 76,
    ENEMY_WIDTH = 54,
    ENEMY_HEIGHT = 75,
    ENABLE_FULLSCREEN, LEFT_DIR = 37,
    TOP_DIR = 38,
    RIGHT_DIR = 39,
    BOTTOM_DIR = 40,
    KEY_ESC = 27,
    KEY_SPACEBAR = 32,
    KEY_ENTER = 13,
    CELL_EMPTY = 0,
    CELL_WALL = 1,
    CELL_CHEESE = 2,
    CELL_INGREDIENT = 3,
    STATE_ENEMY_IDLE = 0,
    STATE_ENEMY_FOLLOW = 1,
    STATE_ENEMY_ESCAPE = 2,
    PLAYER_SPEED = 6,
    ENEMY_SPEED = 300,
    ENEMY_SPEED_SLOW =
    500,
    PLAYER_RADIUS = 52,
    POINT_PER_ITEM, POINT_PER_POWERUP, POINT_KILL_ENEMY, ENEMY_TYPES = 3,
    ENEMY_ENTRY_TYPE = 22,
    COLLISION_DIST = .8 * CELL_SIZE,
    FOLLOW_DIST = 4 * CELL_SIZE,
    TIME_POWERUP, NUM_COLS_PAGE_LEVEL = 3,
    NUM_ROWS_PAGE_LEVEL = 2,
    NUM_LEVELS = 6,
    FPS_CHARACTERS = 4,
    SYMBOL_COIN = 23;

function CMain(e) {
    var l, f = 0,
        n = 0,
        k = STATE_LOADING,
        p, m, a, oPreloader;
    this.initContainer = function() {
        s_oCanvas = document.getElementById("canvas");
        s_oStage = new createjs.Stage(s_oCanvas);
        s_oStage.preventSelection = !1;
        s_bMobile = isMobile();
        !1 === s_bMobile ? s_oStage.enableMouseOver(20) : createjs.Touch.enable(s_oStage, !0);
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.framerate = FPS;
        navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
        s_oSpriteLibrary =
            new CSpriteLibrary;
        oPreloader = new CPreloader();
        p = oPreloader;
    };
    this.preloaderReady = function() {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || this._initSounds();
        this._loadImages();
        l = !0
    };
    this.soundLoaded = function() {
        f++;
        p.refreshLoader(Math.floor(f / n * 100))
    };
    this._initSounds = function() {
        Howler.mute(!s_bAudioActive);
        s_aSoundsInfo = [];
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "game_over",
            loop: !1,
            volume: 1,
            ingamename: "game_over"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "click",
            loop: !1,
            volume: 1,
            ingamename: "click"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "enemy_0_death",
            loop: !1,
            volume: 1,
            ingamename: "enemy_0_death"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "enemy_1_death",
            loop: !1,
            volume: 1,
            ingamename: "enemy_1_death"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "enemy_2_death",
            loop: !1,
            volume: 1,
            ingamename: "enemy_2_death"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "hero_death",
            loop: !1,
            volume: 1,
            ingamename: "hero_death"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "hero_eating",
            loop: !1,
            volume: 1,
            ingamename: "hero_eating"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "hero_powerup",
            loop: !1,
            volume: 1,
            ingamename: "hero_powerup"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "hero_powerup_off",
            loop: !1,
            volume: 1,
            ingamename: "hero_powerup_off"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "ready_go",
            loop: !1,
            volume: 1,
            ingamename: "ready_go"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "win_level",
            loop: !1,
            volume: 1,
            ingamename: "win_level"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "soundtrack",
            loop: !0,
            volume: 1,
            ingamename: "soundtrack"
        });
        n += s_aSoundsInfo.length;
        s_aSounds = [];
        for (var b = 0; b < s_aSoundsInfo.length; b++) this.tryToLoadSound(s_aSoundsInfo[b], !1)
    };
    this.tryToLoadSound = function(b, c) {
        setTimeout(function() {
            s_aSounds[b.ingamename] = new Howl({
                src: [b.path + b.filename + ".mp3"],
                autoplay: !1,
                preload: !0,
                loop: b.loop,
                volume: b.volume,
                onload: s_oMain.soundLoaded,
                onloaderror: function(d, g) {
                    for (var h = 0; h < s_aSoundsInfo.length; h++)
                        if (d === s_aSounds[s_aSoundsInfo[h].ingamename]._sounds[0]._id) {
                            s_oMain.tryToLoadSound(s_aSoundsInfo[h], !0);
                            break
                        }
                },
                onplayerror: function(d) {
                    for (var g = 0; g < s_aSoundsInfo.length; g++)
                        if (d === s_aSounds[s_aSoundsInfo[g].ingamename]._sounds[0]._id) {
                            s_aSounds[s_aSoundsInfo[g].ingamename].once("unlock", function() {
                                s_aSounds[s_aSoundsInfo[g].ingamename].play();
                                "soundtrack" === s_aSoundsInfo[g].ingamename && null !== s_oGame && setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME)
                            });
                            break
                        }
                }
            })
        }, c ? 200 : 0)
    };
    this._loadImages = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("but_play",
            "./sprites/but_play.png");
        s_oSpriteLibrary.addSprite("but_home", "./sprites/but_home.png");
        s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png");
        s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg");
        s_oSpriteLibrary.addSprite("bg_help", "./sprites/bg_help.png");
        s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("life",
            "./sprites/life.png");
        s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
        s_oSpriteLibrary.addSprite("ctl_logo", "./sprites/476x126.png");
        s_oSpriteLibrary.addSprite("score_bg", "./sprites/score_bg.png");
        s_oSpriteLibrary.addSprite("but_yes", "./sprites/but_yes.png");
        s_oSpriteLibrary.addSprite("bg_level_selection", "./sprites/bg_level_selection.png");
        s_oSpriteLibrary.addSprite("but_level", "./sprites/but_level.png");
        s_oSpriteLibrary.addSprite("but_next", "./sprites/but_next.png");
        s_oSpriteLibrary.addSprite("but_delete", "./sprites/but_delete.png");
        s_oSpriteLibrary.addSprite("exit_door_left", "./sprites/exit_door_left.png");
        s_oSpriteLibrary.addSprite("exit_door_right", "./sprites/exit_door_right.png");
        s_oSpriteLibrary.addSprite("hand_swipe", "./sprites/hand_swipe.png");
        s_oSpriteLibrary.addSprite("keyboard", "./sprites/keyboard.png");
        s_oSpriteLibrary.addSprite("swipe_trail",
            "./sprites/swipe_trail.png");
        s_oSpriteLibrary.addSprite("coin_help", "./sprites/coin_help.png");
        s_oSpriteLibrary.addSprite("enemy_bottom_0", "./sprites/enemy_bottom_0.png");
        s_oSpriteLibrary.addSprite("enemy_bottom_1", "./sprites/enemy_bottom_1.png");
        s_oSpriteLibrary.addSprite("enemy_bottom_2", "./sprites/enemy_bottom_2.png");
        s_oSpriteLibrary.addSprite("enemy_left_0", "./sprites/enemy_left_0.png");
        s_oSpriteLibrary.addSprite("enemy_left_1", "./sprites/enemy_left_1.png");
        s_oSpriteLibrary.addSprite("enemy_left_2",
            "./sprites/enemy_left_2.png");
        s_oSpriteLibrary.addSprite("enemy_right_0", "./sprites/enemy_right_0.png");
        s_oSpriteLibrary.addSprite("enemy_right_1", "./sprites/enemy_right_1.png");
        s_oSpriteLibrary.addSprite("enemy_right_2", "./sprites/enemy_right_2.png");
        s_oSpriteLibrary.addSprite("enemy_top_0", "./sprites/enemy_top_0.png");
        s_oSpriteLibrary.addSprite("enemy_top_1", "./sprites/enemy_top_1.png");
        s_oSpriteLibrary.addSprite("enemy_top_2", "./sprites/enemy_top_2.png");
        s_oSpriteLibrary.addSprite("hero_bottom",
            "./sprites/hero_bottom.png");
        s_oSpriteLibrary.addSprite("hero_left", "./sprites/hero_left.png");
        s_oSpriteLibrary.addSprite("hero_right", "./sprites/hero_right.png");
        s_oSpriteLibrary.addSprite("hero_top", "./sprites/hero_top.png");
        s_oSpriteLibrary.addSprite("walls", "./sprites/walls.png");
        s_oSpriteLibrary.addSprite("item_disappear", "./sprites/item_disappear.png");
        for (var b = 0; b < NUM_LEVELS; b++) s_oSpriteLibrary.addSprite("recipe_" + b, "./sprites/recipe_" + b + ".png");
        for (b = 24; 43 > b; b++) s_oSpriteLibrary.addSprite("ingredients_" +
            b, "./sprites/ingredients/ingredients_" + b + ".png");
        n += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    };
    this._onImagesLoaded = function() {
        f++;
        p.refreshLoader(Math.floor(f / n * 100))
    };
    this._onRemovePreloader = function() {
        try {
            saveItem("ls_available", "ok")
        } catch (b) {
            s_bStorageAvailable = !1
        }
        p.unload();
        s_oSoundTrack = playSound("soundtrack", 1, !0);
        this.gotoMenu()
    };
    this._onAllImagesLoaded = function() {};
    this.onAllPreloaderImagesLoaded = function() {
        this._loadImages()
    };
    this.levelSelected = function(b) {
        b >= s_iLastLevel &&
            (s_iLastLevel = b);
        var c = getScoreTillLevel(b),
            d = getLives(b);
        this.gotoGame(b, c, d)
    };
    this.gotoMenu = function() {
        m = new CMenu;
        k = STATE_MENU
    };
    this.gotoLevelPanel = function() {
        new CLevelMenu;
        k = STATE_LEVEL
    };
    this.gotoGame = function(b, c, d) {
        a = new CGame(b, c, d);
        k = STATE_GAME
    };
    this.stopUpdateNoBlock = function() {
        l = !1;
        createjs.Ticker.paused = !0
    };
    this.startUpdateNoBlock = function() {
        s_iPrevTime = (new Date).getTime();
        l = !0;
        createjs.Ticker.paused = !1
    };
    this.stopUpdate = function() {
        l = !1;
        createjs.Ticker.paused = !0;
        document.querySelector("#block_game").style.display =
            "block";
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || Howler.mute(!0)
    };
    this.startUpdate = function() {
        s_iPrevTime = (new Date).getTime();
        l = !0;
        createjs.Ticker.paused = !1;
        document.querySelector("#block_game").style.display = "none";
        (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) && s_bAudioActive && Howler.mute(!1)
    };
    this._update = function(b) {
        if (!1 !== l) {
            var c = (new Date).getTime();
            s_iTimeElaps = c - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = c;
            1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps =
                0);
            k === STATE_MENU && m.update();
            k === STATE_GAME && a.update();
            s_oStage.update(b)
        }
    };
    s_oMain = this;
    NUM_LIVES = e.lives;
    POINT_PER_ITEM = e.point_item;
    POINT_PER_POWERUP = e.point_powerup;
    POINT_KILL_ENEMY = e.point_kill_enemy;
    TIME_POWERUP = e.time_powerup;
    ENABLE_FULLSCREEN = e.fullscreen;
    s_bAudioActive = e.audio_enable_on_startup;
    this.initContainer()
}
var s_bMobile, s_bAudioActive = !1,
    s_iCntTime = 0,
    s_iTimeElaps = 0,
    s_iPrevTime = 0,
    s_iCntFps = 0,
    s_iCurFps = 0,
    s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary, s_oSoundTrack = null,
    s_oCanvas, s_bFullscreen = !1,
    s_aSounds, s_aSoundsInfo, s_bStorageAvailable = !0,
    s_iBestScore = 0,
    s_bFirstPlay = !0,
    s_iLastLevel = 1;

function CPreloader() {
    var e, l, f, n, k, p, m, a, b;
    this._init = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
        s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
        s_oSpriteLibrary.loadSprites();
        b = new createjs.Container;
        s_oStage.addChild(b)
    };
    this.unload = function() {
        b.removeAllChildren()
    };
    this._onImagesLoaded = function() {};
    this._onAllImagesLoaded = function() {
        this.attachSprites();
        s_oMain.preloaderReady()
    };
    this.attachSprites = function() {
        var c = new createjs.Shape;
        c.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        b.addChild(c);
        c = s_oSpriteLibrary.getSprite("200x200");
        m = createBitmap(c);
        m.regX = .5 * c.width;
        m.regY = .5 * c.height;
        m.x = CANVAS_WIDTH / 2;
        m.y = CANVAS_HEIGHT / 2 - 180;
        b.addChild(m);
        a = new createjs.Shape;
        a.graphics.beginFill("rgba(0,0,0,0.01)").drawRoundRect(m.x - 100, m.y - 100, 200, 200, 10);
        b.addChild(a);
        m.mask = a;
        c = s_oSpriteLibrary.getSprite("progress_bar");
        n = createBitmap(c);
        n.x = CANVAS_WIDTH / 2 -
            c.width / 2;
        n.y = CANVAS_HEIGHT / 2 + 50;
        b.addChild(n);
        e = c.width;
        l = c.height;
        k = new createjs.Shape;
        k.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(n.x, n.y, 1, l);
        b.addChild(k);
        n.mask = k;
        f = new createjs.Text("", "30px " + FONT, "#fff");
        f.x = CANVAS_WIDTH / 2;
        f.y = CANVAS_HEIGHT / 2 + 100;
        f.textBaseline = "alphabetic";
        f.textAlign = "center";
        b.addChild(f);
        p = new createjs.Shape;
        p.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        b.addChild(p);
        createjs.Tween.get(p).to({
            alpha: 0
        }, 500).call(function() {
            createjs.Tween.removeTweens(p);
            b.removeChild(p)
        })
    };
    this.refreshLoader = function(c) {
        f.text = c + "%";
        100 === c && (f.visible = !1, n.visible = !1, s_oMain._onRemovePreloader());
        k.graphics.clear();
        c = Math.floor(c * e / 100);
        k.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(n.x, n.y, c, l)
    };
    this._init()
}

function CToggle(e, l, f, n, k) {
    var p, m, a, b = [],
        c, d, g;
    this._init = function(h, v, y, q) {
        m = [];
        a = [];
        var t = new createjs.SpriteSheet({
            images: [y],
            frames: {
                width: y.width / 2,
                height: y.height,
                regX: y.width / 2 / 2,
                regY: y.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        });
        p = q;
        g = createSprite(t, "state_" + p, y.width / 2 / 2, y.height / 2, y.width / 2, y.height);
        g.mouseEnabled = !0;
        g.x = h;
        g.y = v;
        g.stop();
        g.cursor = "pointer";
        k.addChild(g);
        this._initListener()
    };
    this.unload = function() {
        g.off("mousedown", c);
        g.off("pressup", d);
        g.mouseEnabled = !1;
        k.removeChild(g)
    };
    this._initListener = function() {
        c = g.on("mousedown", this.buttonDown);
        d = g.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(h, v, y) {
        m[h] = v;
        a[h] = y
    };
    this.addEventListenerWithParams = function(h, v, y, q) {
        m[h] = v;
        a[h] = y;
        b = q
    };
    this.setActive = function(h) {
        p = h;
        g.gotoAndStop("state_" + p)
    };
    this.buttonRelease = function() {
        g.scaleX = 1;
        g.scaleY = 1;
        playSound("click", 1, !1);
        p = !p;
        g.gotoAndStop("state_" + p);
        m[ON_MOUSE_UP] && m[ON_MOUSE_UP].call(a[ON_MOUSE_UP], b)
    };
    this.buttonDown = function() {
        g.scaleX = .9;
        g.scaleY = .9;
        m[ON_MOUSE_DOWN] && m[ON_MOUSE_DOWN].call(a[ON_MOUSE_DOWN], b)
    };
    this.setPosition = function(h, v) {
        g.x = h;
        g.y = v
    };
    this.setVisible = function(h) {
        g.visible = h
    };
    this._init(e, l, f, n)
}

function CGfxButton(e, l, f, n) {
    var k, p, m, a, b, c = [],
        d;
    this._init = function(h, v, y) {
        k = 1;
        a = [];
        b = [];
        d = createBitmap(y);
        d.x = h;
        d.y = v;
        d.cursor = "pointer";
        d.regX = y.width / 2;
        d.regY = y.height / 2;
        g.addChild(d);
        this._initListener()
    };
    this.unload = function() {
        createjs.Tween.removeTweens(d);
        d.off("mousedown", p);
        d.off("pressup", m);
        g.removeChild(d)
    };
    this.setVisible = function(h) {
        d.visible = h
    };
    this.setScale = function(h) {
        k = h;
        d.scaleX = d.scaleY = k
    };
    this._initListener = function() {
        p = d.on("mousedown", this.buttonDown);
        m = d.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(h, v, y) {
        a[h] = v;
        b[h] = y
    };
    this.addEventListenerWithParams = function(h, v, y, q) {
        a[h] = v;
        b[h] = y;
        c = q
    };
    this.buttonRelease = function() {
        d.scaleX = k;
        d.scaleY = k;
        a[ON_MOUSE_UP] && a[ON_MOUSE_UP].call(b[ON_MOUSE_UP], c)
    };
    this.buttonDown = function() {
        d.scaleX = .9 * k;
        d.scaleY = .9 * k;
        playSound("click", 1, !1);
        a[ON_MOUSE_DOWN] && a[ON_MOUSE_DOWN].call(b[ON_MOUSE_DOWN], c)
    };
    this.setScale = function(h) {
        k = h;
        d.scaleX = h;
        d.scaleY = h
    };
    this.setPosition = function(h, v) {
        d.x = h;
        d.y = v
    };
    this.pulseAnimation = function() {
        createjs.Tween.get(d, {
            loop: -1
        }).to({
            scaleX: 1.1 * k,
            scaleY: 1.1 * k
        }, 850, createjs.Ease.quadOut).to({
            scaleX: k,
            scaleY: k
        }, 650, createjs.Ease.quadIn)
    };
    this.setX = function(h) {
        d.x = h
    };
    this.setY = function(h) {
        d.y = h
    };
    this.getButtonImage = function() {
        return d
    };
    this.getX = function() {
        return d.x
    };
    this.getY = function() {
        return d.y
    };
    var g = n;
    this._init(e, l, f);
    return this
}

function CMenu() {
    var e, l, f, n, k, p, m, a, b, c, d = !1,
        g, h, v, y, q, t = null,
        F = null,
        r, w, E, u, C, D;
    this._init = function() {
        g = d = !1;
        r = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(r);
        var x = s_oSpriteLibrary.getSprite("but_play");
        y = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 210, x, s_oStage);
        y.addEventListener(ON_MOUSE_UP, this._onStart, this);
        y.pulseAnimation();
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) x = s_oSpriteLibrary.getSprite("audio_icon"), m = CANVAS_WIDTH - x.height / 2 - 10, a = x.height / 2 + 10, w = new CToggle(m,
            a, x, s_bAudioActive, s_oStage), w.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        x = s_oSpriteLibrary.getSprite("but_credits");
        k = x.width / 2 + 10;
        p = x.height / 2 + 10;
        q = new CGfxButton(k, p, x, s_oStage);
        q.addEventListener(ON_MOUSE_UP, this._onCreditsBut, this);
        x = window.document;
        var G = x.documentElement;
        t = G.requestFullscreen || G.mozRequestFullScreen || G.webkitRequestFullScreen || G.msRequestFullscreen;
        F = x.exitFullscreen || x.mozCancelFullScreen || x.webkitExitFullscreen || x.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (t = !1);
        t && screenfull.isEnabled && (x = s_oSpriteLibrary.getSprite("but_fullscreen"), f = k + x.width / 2 + 10, n = x.height / 2 + 10, E = new CToggle(f, n, x, s_bFullscreen, s_oStage), E.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        x = s_oSpriteLibrary.getSprite("but_delete");
        e = x.width / 2 + 10;
        l = CANVAS_HEIGHT - x.height / 2 - 10;
        u = new CGfxButton(e, l, x, s_oStage);
        u.addEventListener(ON_MOUSE_UP, this._onDelete, this);
        x = createBitmap(s_oSpriteLibrary.getSprite("exit_door_left"));
        x.x = 470;
        x.y = 916;
        s_oStage.addChild(x);
        x = createBitmap(s_oSpriteLibrary.getSprite("exit_door_right"));
        x.x = 1390;
        x.y = 916;
        s_oStage.addChild(x);
        D = new createjs.Shape;
        D.graphics.beginFill("rgba(255,255,0,0.01)").drawRect(470, 850, 980, 150);
        s_oStage.addChild(D);
        b = 1430;
        c = CANVAS_HEIGHT / 2 - 25;
        v = new CHero(b, c, 0, 0, s_oStage);
        h = [];
        x = b + 80;
        for (G = 0; 3 > G; G++) h[G] = new CEnemy(G, x, c, 0, 0, s_oStage), h[G].setMask(D), x += 80;
        v.setMask(D);
        this.refreshButtonPos();
        this._resetCharacters();
        C = new CAreYouSurePanel(s_oStage);
        C.addEventListener(ON_BUT_YES_DOWN, this.onConfirmDelete, this);
        s_bStorageAvailable ? (x = getItem(PREFIX_GAME + "level"),
            null !== x && void 0 !== x ? s_iLastLevel = parseInt(getItem(PREFIX_GAME + "level")) : saveItem(PREFIX_GAME + "level", 1)) : new CMsgBox;
        var H = new createjs.Shape;
        H.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(H);
        createjs.Tween.get(H).to({
            alpha: 0
        }, 1E3).call(function() {
            H.visible = !1
        });
        d = !0;
        s_bMobile || (document.onkeydown = this._onKeyDown)
    };
    this.unload = function() {
        d = !1;
        y.unload();
        q.unload();
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) w.unload(), w = null;
        t && screenfull.isEnabled && E.unload();
        s_bMobile || (document.onkeydown = null);
        s_oMenu = null;
        s_oStage.removeAllChildren()
    };
    this.refreshButtonPos = function() {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || w.setPosition(m - s_iOffsetX, s_iOffsetY + a);
        t && screenfull.isEnabled && E.setPosition(f + s_iOffsetX, n + s_iOffsetY);
        q.setPosition(k + s_iOffsetX, s_iOffsetY + p);
        u.setPosition(e + s_iOffsetX, l - s_iOffsetY)
    };
    this._onKeyDown = function(x) {
        x || (x = window.event);
        if (x.keyCode === KEY_SPACEBAR || x.keyCode === KEY_ENTER) return s_oMenu._onStart(), x.preventDefault(), !1
    };
    this._resetCharacters =
        function() {
            if (g) {
                for (var x = b, G = 0; 3 > G; G++) h[G].setX(x), h[G].setUpdate(!0), h[G].playAnim(DIR_LEFT, ANIM_ESCAPE), x += 80;
                v.setX(x);
                v.playAnim(DIR_LEFT, ANIM_ATTACK)
            } else {
                v.setX(b);
                x = b + 80;
                for (G = 0; G < h.length; G++) h[G].setX(x), h[G].setUpdate(!0), h[G].playAnim(DIR_LEFT, ANIM_WALK), x += 80;
                v.playAnim(DIR_LEFT, ANIM_WALK)
            }
            g = !g
        };
    this._onStart = function() {
        document.dispatchEvent(new CustomEvent("start_session"));
        s_oMenu.unload();
        s_oMain.gotoLevelPanel()
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onCreditsBut = function() {
        new CCreditsPanel
    };
    this.resetFullscreenBut = function() {
        t && screenfull.isEnabled && E.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? F.call(window.document) : t.call(window.document.documentElement);
        sizeHandler()
    };
    this._onDelete = function() {
        C.show(TEXT_CONFIRM_DELETE, 40)
    };
    this.onConfirmDelete = function() {
        clearLocalStorage()
    };
    this.update = function() {
        if (!1 !== d) {
            v.increaseX(-8);
            for (var x = 0; 3 > x; x++) h[x].increaseX(-8);
            0 > v.getX() && this._resetCharacters()
        }
    };
    s_oMenu = this;
    this._init()
}
var s_oMenu = null;

function CGame(e, l, f) {
    var n, k, p, m, a, b, c, d, g, h, v, y, q, t, F, r, w, E, u, C, D, x, G, H, N, P, T, R, Z, aa, U, X, A, ba, Y, W, O = null,
        I, Q;
    this._init = function(z, B, J) {
        setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME);
        m = B;
        a = z;
        h = v = J;
        this.reset();
        z = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        s_oStage.addChild(z);
        this._initGrid();
        this._calculateItemToCatch();
        this._initCharacters();
        ba = new CInterface;
        Y = new CHelpPanel;
        W = new CAreYouSurePanel(s_oStage);
        W.addEventListener(ON_BUT_YES_DOWN, this.onConfirmExit, this);
        I = new CEndPanel;
        I.addEventListener(ON_BACK_MENU, this.onConfirmExit, this);
        I.addEventListener(ON_RESTART, this._restartLevel, this);
        O = new CNextLevelPanel;
        O.addEventListener(ON_BACK_MENU, this.onConfirmExit, this);
        O.addEventListener(ON_RESTART, this._restartLevel, this);
        O.addEventListener(ON_NEXT, this._nextLevel, this);
        Q = new CWinPanel;
        Q.addEventListener(ON_BACK_MENU, this.onConfirmExit, this);
        Q.addEventListener(ON_RESTART, this._restartLevel, this);
        s_bMobile ? (C = new Hammer(s_oCanvas), C.get("swipe").set({
                direction: Hammer.DIRECTION_ALL
            }),
            C.get("swipe").set({
                velocity: .005
            }), C.get("swipe").set({
                threshold: .1
            }), C.on("swipeleft", function() {
                k = "left"
            }), C.on("swiperight", function() {
                k = "right"
            }), C.on("swipeup", function() {
                k = "up"
            }), C.on("swipedown", function() {
                k = "down"
            })) : document.onkeydown = this._onKeyDown;
        this.refreshButtonPos();
        this._initPathfindingGrid();
        s_bFirstPlay ? (s_bFirstPlay = !1, Y.show()) : this.prepareStartLevel(!0)
    };
    this.unload = function() {
        ba.unload();
        O.unload();
        I.unload();
        Q.unload();
        Y.unload();
        s_bMobile || (document.onkeydown = null);
        s_oGame =
            null;
        createjs.Tween.removeAllTweens();
        s_oStage.removeAllChildren()
    };
    this.refreshButtonPos = function() {
        this.refreshGridScale();
        ba.refreshButtonPos()
    };
    this.reset = function() {
        p = n = !1;
        y = k = "";
        b = c = 0
    };
    this._restartAfterDeath = function() {
        c = 0;
        y = "";
        D.reset();
        for (var z = 0; z < r.length; z++) r[z].reset();
        P.reset()
    };
    this._nextLevel = function() {
        a++;
        v = h;
        this._prepareLevel()
    };
    this._restartLevel = function() {
        document.dispatchEvent(new CustomEvent("restart_level", {
            detail: {
                level: a
            }
        }));
        this.refreshScore(-b);
        h = v;
        for (var z = 0; z < h; z++) F[z].visible = !0;
        this._prepareLevel()
    };
    this._prepareLevel = function() {
        document.dispatchEvent(new CustomEvent("start_level", {
            detail: {
                level: a
            }
        }));
        Z.removeAllChildren();
        aa.removeAllChildren();
        U.removeAllChildren();
        A.removeAllChildren();
        this._prepareCells();
        this._calculateItemToCatch();
        this._initPathfindingGrid();
        var z = PLAYER_START[a - 1].row,
            B = PLAYER_START[a - 1].col;
        D.setStart(q[z][B].getX(), q[z][B].getY(), z, B);
        for (var J = 0; J < r.length; J++) r[J].unload();
        J = ENEMY_START[a - 1];
        r = [];
        for (var K = 0; K < J.length; K++) {
            var L = Math.floor(Math.random() *
                ENEMY_TYPES);
            z = J[K].row;
            B = J[K].col;
            z = new CEnemy(L, q[z][B].getX(), q[z][B].getY(), z, B, X);
            r.push(z)
        }
        Z.updateCache();
        this.reset();
        this.refreshIngredients();
        this._restartAfterDeath();
        N.refreshText(sprintf(TEXT_LEVEL, a));
        this.prepareStartLevel(!0)
    };
    this.prepareStartLevel = function(z) {
        z ? new CMsgBoxIngredients(a - 1) : this.startLevel()
    };
    this.startLevel = function() {
        var z = new createjs.Text(TEXT_READY, "40px " + FONT, "#fff");
        z.x = R.getBounds().width / 2 - 20;
        z.y = 635;
        z.textAlign = "center";
        z.textBaseline = "alphabetic";
        R.addChild(z);
        playSound("ready_go", 1, !1);
        createjs.Tween.get(z).wait(1500).to({
            alpha: 0
        }, 400).call(function() {
            P.openDoor();
            n = !0
        })
    };
    this._onKeyDown = function(z) {
        if (!1 === n) return (z.keyCode === KEY_SPACEBAR || z.keyCode === KEY_ENTER) && Y.isShown() && Y._onStart(), z.preventDefault(), !1;
        z || (z = window.event);
        switch (z.keyCode) {
            case LEFT_DIR:
                return k = "left", z.preventDefault(), !1;
            case TOP_DIR:
                return k = "up", z.preventDefault(), !1;
            case RIGHT_DIR:
                return k = "right", z.preventDefault(), !1;
            case BOTTOM_DIR:
                return k = "down", z.preventDefault(), !1;
            case KEY_ESC:
                return s_oGame.onExit(), z.preventDefault(), !1
        }
    };
    this.refreshGridScale = function() {
        if (s_bLandscape) {
            s_iScaleFactor = 1;
            var z = CANVAS_HEIGHT - 2 * s_iOffsetY - 160;
            CUR_GRID_SCALE = z / (CELL_SIZE * GRID_ROWS)
        } else z = CANVAS_HEIGHT - 2 * s_iOffsetY - 300, CUR_GRID_SCALE = Math.min(z, CANVAS_WIDTH - 2 * s_iOffsetX) / (CELL_SIZE * GRID_COLS);
        CUR_GRID_SCALE = parseFloat(CUR_GRID_SCALE.toFixed(2));
        R.scaleX = R.scaleY = CUR_GRID_SCALE;
        Z.updateCache()
    };
    this._initGrid = function() {
        R = new createjs.Container;
        R.x = GRID_X + CELL_SIZE / 2;
        R.y =
            GRID_Y + CELL_SIZE / 2;
        s_oStage.addChild(R);
        aa = new createjs.Container;
        R.addChild(aa);
        Z = new createjs.Container;
        R.addChild(Z);
        U = new createjs.Container;
        R.addChild(U);
        X = new createjs.Container;
        R.addChild(X);
        A = new createjs.Container;
        R.addChild(A);
        this._prepareCells();
        x = new createjs.Container;
        R.addChild(x);
        var z = s_oSpriteLibrary.getSprite("score_bg"),
            B = createBitmap(z);
        x.addChild(B);
        B = z.width - 40;
        var J = 30,
            K = z.height / 2 - 12;
        H = new CTLText(x, 20, K - J / 2, B, J, 30, "left", "#fff", FONT, 1, 2, 2, sprintf(TEXT_SCORE, m), !0, !0, !1, !1);
        B = z.width - 40;
        J = 30;
        K = z.height / 2 + 20;
        N = new CTLText(x, 20, K - J / 2, B, J, 30, "left", "#deecf8", FONT, 1, 2, 2, sprintf(TEXT_LEVEL, a), !0, !0, !1, !1);
        x.x = 0;
        x.y = -z.height - 30;
        T = new createjs.Container;
        R.addChild(T);
        F = [];
        B = 0;
        J = s_oSpriteLibrary.getSprite("life");
        for (K = 0; K < h; K++) F[K] = createBitmap(J), F[K].x = B, T.addChild(F[K]), B += J.width + 10;
        T.x = x.x + z.width + 50;
        T.y = -J.height - 30;
        G = new createjs.Container;
        G.x = 1E3;
        G.y = -CELL_SIZE - 10;
        R.addChild(G);
        this.refreshIngredients();
        R.regX = GRID_WIDTH / 2;
        R.regY = (GRID_HEIGHT - z.height) / 2;
        Z.cache(-CELL_SIZE /
            2, -CELL_SIZE / 2, GRID_WIDTH, GRID_HEIGHT)
    };
    this.refreshIngredients = function() {
        G.removeAllChildren();
        t = [];
        for (var z = 0, B = 0; B < RECIPE_INGREDIENTS[a - 1].length; B++) {
            var J = new CIngredient(z, 0, RECIPE_INGREDIENTS[a - 1][B], G);
            J.setState(!1);
            z += CELL_SIZE + 10;
            t.push(J)
        }
        G.regX = G.getBounds().width
    };
    this._prepareCells = function() {
        var z = LEVEL_INFOS[a - 1].split("#");
        q = [];
        for (var B = 0, J = 0, K = 0, L = 0; L < GRID_ROWS; L++) {
            q[L] = [];
            for (var M = 0; M < GRID_COLS; M++) {
                var S = Number(z[K]);
                var V = S === ENEMY_ENTRY_TYPE ? new CCell(B, J, L, M, S, aa) : S < SYMBOL_COIN ?
                    new CCell(B, J, L, M, S, Z) : S >= SYMBOL_COIN ? new CCell(B, J, L, M, S, U) : new CCell(B, J, L, M, S, A);
                q[L][M] = V;
                S === ENEMY_ENTRY_TYPE && (P = V);
                B += CELL_SIZE;
                K++
            }
            B = 0;
            J += CELL_SIZE
        }
    };
    this._calculateItemToCatch = function() {
        for (var z = g = 0; z < GRID_ROWS; z++)
            for (var B = 0; B < GRID_COLS; B++) q[z][B].getTag() !== CELL_CHEESE && q[z][B].getTag() !== CELL_INGREDIENT || g++
    };
    this._initCharacters = function() {
        var z = PLAYER_START[a - 1].row,
            B = PLAYER_START[a - 1].col;
        D = new CHero(q[z][B].getX(), q[z][B].getY(), z, B, X);
        var J = ENEMY_START[a - 1];
        r = [];
        for (var K = 0; K <
            J.length; K++) {
            var L = Math.floor(Math.random() * ENEMY_TYPES);
            z = J[K].row;
            B = J[K].col;
            z = new CEnemy(L, q[z][B].getX(), q[z][B].getY(), z, B, X);
            r.push(z)
        }
    };
    this._initPathfindingGrid = function() {
        E = new PF.Grid(GRID_ROWS, GRID_COLS);
        w = [];
        for (var z = 0; z < GRID_ROWS; z++)
            for (var B = 0; B < GRID_COLS; B++) {
                var J = q[z][B].isWalkable();
                E.setWalkableAt(z, B, J);
                J && w.push({
                    row: z,
                    col: B
                })
            }
        u = new PF.AStarFinder
    };
    this.startEnemies = function() {
        for (var z = 0; z < r.length; z++) this.getNewEnemyPath(r[z], STATE_ENEMY_IDLE)
    };
    this._convertPathIntoCoordinates =
        function(z) {
            for (var B = [], J = 0; J < z.length; J++) {
                var K = z[J];
                B.push({
                    x: q[K[0]][K[1]].getX(),
                    y: q[K[0]][K[1]].getY()
                })
            }
            return B
        };
    this.getNewEnemyPath = function(z, B) {
        var J = 0;
        do {
            var K = E.clone();
            switch (B) {
                case STATE_ENEMY_IDLE:
                    var L = Math.floor(Math.random() * w.length);
                    L = u.findPath(z.getRow(), z.getCol(), w[L].row, w[L].col, K);
                    break;
                case STATE_ENEMY_FOLLOW:
                    L = u.findPath(z.getRow(), z.getCol(), D.getRow(), D.getCol(), K);
                    break;
                case STATE_ENEMY_ESCAPE:
                    L = this._findCellFarFromHero(), L = u.findPath(z.getRow(), z.getCol(), w[L].row,
                        w[L].col, K)
            }
            J++
        } while (3 > L.length && 100 > J && B !== STATE_ENEMY_FOLLOW);
        100 <= J && (L = Math.floor(Math.random() * w.length), K = E.clone(), L = u.findPath(z.getRow(), z.getCol(), w[L].row, w[L].col, K), B = STATE_ENEMY_IDLE);
        J = this._convertPathIntoCoordinates(L);
        z.setPath(L, J, B)
    };
    this.getEnemyPathToStartPos = function(z) {
        var B = E.clone();
        B = u.findPath(z.getRow(), z.getCol(), z.getStartingRow(), z.getStartingCol(), B);
        var J = this._convertPathIntoCoordinates(B);
        z.setPath(B, J, STATE_ENEMY_IDLE)
    };
    this._findCellFarFromHero = function() {
        do var z =
            Math.floor(Math.random() * w.length),
            B = w[z].row,
            J = w[z].col; while (4 > Math.abs(B - D.getRow()) || 4 > Math.abs(J - D.getCol()));
        return z
    };
    this.characterCell = function() {
        for (var z = !1, B = -1; 2 > B; B++) {
            var J = D.getRow() + B;
            if (0 < J && J < GRID_ROWS)
                for (var K = 0; K < GRID_COLS; K++)
                    if (!0 === collisionWithCircle(D, q[J][K], .05)) {
                        z = !0;
                        D.setCol(q[J][K].getCol());
                        D.setRow(q[J][K].getRow());
                        q[J][K].getTag() === CELL_CHEESE ? this._collectItem(J, K) : q[J][K].getTag() === CELL_INGREDIENT && this._collectPowerUp(J, K, q[J][K].getIndex());
                        break
                    }
        }
        z && this.prevDirection()
    };
    this.prevDirection = function() {
        var z = D.getCol() - 1,
            B = D.getCol() + 1,
            J = D.getRow() - 1,
            K = D.getRow() + 1;
        0 > z ? "left" === y && (D.setCol(GRID_COLS - 1), D.setPos(q[D.getRow()][GRID_COLS - 1].getX(), q[D.getRow()][GRID_COLS - 1].getY())) : B === GRID_COLS ? "right" === y && (D.setCol(0), D.setPos(q[D.getRow()][0].getX(), q[D.getRow()][0].getY())) : (q[D.getRow()][z].getTag() !== CELL_WALL ? this.prevAction("left") : this.prevCollision("left"), q[D.getRow()][B].getTag() !== CELL_WALL ? this.prevAction("right") : this.prevCollision("right"), q[J][D.getCol()].getTag() !==
            CELL_WALL ? this.prevAction("up") : this.prevCollision("up"), q[K][D.getCol()].getTag() !== CELL_WALL ? this.prevAction("down") : this.prevCollision("down"))
    };
    this.prevCollision = function(z) {
        y === z && n && (c = 0, D.playAnim(D.getCurSpriteIndex(), p ? ANIM_ATTACK : ANIM_IDLE), y = "")
    };
    this.prevAction = function(z) {
        k === z && (this._control(k), k = "")
    };
    this._control = function(z) {
        if (y !== z) switch (z) {
            case "right":
                !1 === p ? this.setCharacterState(DIR_RIGHT, ANIM_WALK, "right", 1) : this.setCharacterState(DIR_RIGHT, ANIM_ATTACK, "right", 1);
                break;
            case "left":
                !1 ===
                    p ? this.setCharacterState(DIR_LEFT, ANIM_WALK, "left", -1) : this.setCharacterState(DIR_LEFT, ANIM_ATTACK, "left", -1);
                break;
            case "up":
                !1 === p ? this.setCharacterState(DIR_TOP, ANIM_WALK, "up", -1) : this.setCharacterState(DIR_TOP, ANIM_ATTACK, "up", -1);
                break;
            case "down":
                !1 === p ? this.setCharacterState(DIR_BOTTOM, ANIM_WALK, "down", 1) : this.setCharacterState(DIR_BOTTOM, ANIM_ATTACK, "down", 1)
        }
    };
    this.pauseCharacterAnims = function() {
        n = !1;
        D.pauseAnim(!0);
        for (var z = 0; z < r.length; z++) r[z].pauseAnim(!0)
    };
    this.unpauseCharacterAnims =
        function() {
            n = !0;
            D.pauseAnim(!1);
            for (var z = 0; z < r.length; z++) r[z].pauseAnim(!1)
        };
    this.setCharacterState = function(z, B, J, K) {
        y = J;
        c = K;
        D.playAnim(z, B)
    };
    this._collectItem = function(z, B) {
        q[z][B].setEmpty();
        this.refreshScore(POINT_PER_ITEM);
        playSound("hero_eating", 1, !1);
        g--;
        0 === g && this._endLevel()
    };
    this._collectPowerUp = function(z, B, J) {
        q[z][B].setEmpty();
        this.refreshScore(POINT_PER_POWERUP);
        playSound("hero_powerup", 1, !1);
        for (var K = 0; K < t.length; K++)
            if (J === RECIPE_INGREDIENTS[a - 1][K]) {
                var L = q[z][B].getX();
                z = q[z][B].getY();
                B = G.x + (CELL_SIZE + 10) * K - G.regX;
                var M = G.y,
                    S = new CIngredient(L, z, J, R);
                createjs.Tween.get(S.getSprite()).to({
                    x: B,
                    y: M,
                    scale: 1
                }, 2E3, createjs.Ease.cubicOut).call(function() {
                    t[K].setState(!0);
                    S.unload();
                    createjs.Tween.get(t[K].getSprite()).to({
                        scale: 1.3
                    }, 300, createjs.Ease.cubicOut).to({
                        scale: 1
                    }, 300, createjs.Ease.cubicIn)
                });
                break
            }
        g--;
        if (0 === g) this._endLevel();
        else if (p) d = 0, D.clearIntervalAnim();
        else
            for (this.pauseCharacterAnims(), D.catchPowerUp(!0), J = 0; J < r.length; J++) r[J].playAnim(r[J].getCurSpriteIndex(),
                ANIM_ESCAPE)
    };
    this._endPowerupEffect = function() {
        D.catchPowerUp(!1);
        for (var z = 0; z < r.length; z++) !1 === r[z].isDeath() && r[z].playAnim(r[z].getCurSpriteIndex(), ANIM_WALK);
        playSound("hero_powerup_off", 1, !1)
    };
    this.resumeFromPowerUpAnim = function() {
        this.unpauseCharacterAnims();
        d = 0;
        (p = !p) ? D.playAnim(D.getCurSpriteIndex(), ANIM_ATTACK): D.playAnim(D.getCurSpriteIndex(), ANIM_WALK);
        n = !0
    };
    this.refreshScore = function(z) {
        m += z;
        b += z;
        H.refreshText(sprintf(TEXT_SCORE, m))
    };
    this._endLevel = function() {
        document.dispatchEvent(new CustomEvent("end_level", {
            detail: {
                level: a
            }
        }));
        document.dispatchEvent(new CustomEvent("save_score", {
            detail: {
                score: m
            }
        }));
        n = !1;
        setLocalStorageScore(b, a);
        a === NUM_LEVELS ? O.show(a, m, b, !0) : (setLocalStorageLevel(a + 1), setLocalStorageLives(h, a + 1), O.show(a, m, b, !1))
    };
    this.onExit = function() {
        W.show(TEXT_ARE_YOU_SURE, 90)
    };
    this.onConfirmExit = function() {
        this.unload();
        document.dispatchEvent(new CustomEvent("show_interlevel_ad"));
        document.dispatchEvent(new CustomEvent("end_session"));
        s_oMain.gotoMenu()
    };
    this.gameOver = function() {
        I.show(m, b)
    };
    this._checkCollision = function(z) {
        distance(z.getPos(), D.getPos()) < COLLISION_DIST && (p ? (z.death(), this.refreshScore(POINT_KILL_ENEMY)) : (n = !1, D.playAnim(D.getCurSpriteIndex(), ANIM_DIE), playSound("hero_death", 1, !1)))
    };
    this.checkDistFromPlayer = function(z) {
        var B = distance(z.getPos(), D.getPos());
        return z.getState() === STATE_ENEMY_IDLE && B < FOLLOW_DIST ? (!1 === p ? this.getNewEnemyPath(z, STATE_ENEMY_FOLLOW) : this.getNewEnemyPath(z, STATE_ENEMY_ESCAPE), !0) : !1
    };
    this.loseLife = function() {
        h--;
        F[h].visible = !1;
        0 === h ? (document.dispatchEvent(new CustomEvent("end_level", {
            detail: {
                level: a
            }
        })), this.gameOver()) : (this._restartAfterDeath(), this.prepareStartLevel(!1))
    };
    this._manageCharactersDepth = function() {
        X.sortChildren(function(z, B, J) {
            return z.y > B.y ? 1 : z.y < B.y ? -1 : 0
        })
    };
    this.isPowerUpActive = function() {
        return p
    };
    this.update = function() {
        if (n) {
            this._manageCharactersDepth();
            this.characterCell();
            D.update(c, y);
            for (var z = 0; z < r.length; z++) r[z].update() && this._checkCollision(r[z]);
            p && (d += s_iTimeElaps, d > TIME_POWERUP && (d = 0, this._endPowerupEffect()))
        }
    };
    s_oGame = this;
    this._init(e, l, f)
}
var s_oGame = null;

function CInterface() {
    var e, l, f, n, k, p, m = null,
        a = null,
        b, c, d;
    this._init = function() {
        var g = s_oSpriteLibrary.getSprite("but_exit");
        k = CANVAS_WIDTH - g.height / 2 - 10;
        p = g.height / 2 + 10;
        d = new CGfxButton(k, p, g, s_oStage);
        d.addEventListener(ON_MOUSE_UP, this._onExit, this);
        !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (g = s_oSpriteLibrary.getSprite("audio_icon"), f = d.getX() - g.width / 2 - 10, n = g.height / 2 + 10, b = new CToggle(f, n, g, s_bAudioActive, s_oStage), b.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this), g = s_oSpriteLibrary.getSprite("but_fullscreen"), e =
            f - g.width / 2 - 10) : (g = s_oSpriteLibrary.getSprite("but_fullscreen"), e = d.getX() - g.width / 2 - 10);
        l = g.height / 2 + 10;
        var h = window.document,
            v = h.documentElement;
        m = v.requestFullscreen || v.mozRequestFullScreen || v.webkitRequestFullScreen || v.msRequestFullscreen;
        a = h.exitFullscreen || h.mozCancelFullScreen || h.webkitExitFullscreen || h.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (m = !1);
        m && screenfull.isEnabled && (c = new CToggle(e, l, g, s_bFullscreen, s_oStage), c.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this))
    };
    this.unload =
        function() {
            if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) b.unload(), b = null;
            m && screenfull.isEnabled && c.unload();
            d.unload();
            s_oInterface = null
        };
    this.refreshButtonPos = function() {
        d.setPosition(k - s_iOffsetX, s_iOffsetY + p);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || b.setPosition(f - s_iOffsetX, s_iOffsetY + n);
        m && screenfull.isEnabled && c.setPosition(e - s_iOffsetX, l + s_iOffsetY)
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onExit = function() {
        s_oGame.onExit()
    };
    this.resetFullscreenBut =
        function() {
            m && screenfull.isEnabled && c.setActive(s_bFullscreen)
        };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? a.call(window.document) : m.call(window.document.documentElement);
        sizeHandler()
    };
    s_oInterface = this;
    this._init();
    return this
}
var s_oInterface = null;

function CEndPanel() {
    var e, l, f, n, k, p, m, a, b, c, d, g, h, v, y = this;
    this._init = function() {
        f = [];
        n = [];
        h = new createjs.Container;
        h.visible = !1;
        s_oStage.addChild(h);
        m = new createjs.Shape;
        m.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        m.alpha = .5;
        k = m.on("click", function() {});
        h.addChild(m);
        p = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        h.addChild(p);
        v = new createjs.Container;
        v.x = CANVAS_WIDTH / 2;
        h.addChild(v);
        var q = s_oSpriteLibrary.getSprite("bg_level_selection"),
            t = createBitmap(q);
        v.addChild(t);
        t = q.width - 100;
        var F = 80,
            r = -10 + q.width / 2,
            w = q.height / 2 - 200;
        b = new CTLText(v, r - t / 2, w - F / 2, t, F, 70, "center", "#fff", FONT, 1, 2, 2, " ", !0, !0, !1, !1);
        t = q.width - 100;
        F = 60;
        w = q.height / 2;
        a = new CTLText(v, r - t / 2, w - F / 2, t, F, 50, "center", "#fff", FONT, 1, 2, 2, " ", !0, !0, !1, !1);
        w = q.height / 2 + 100;
        c = new CTLText(v, r - t / 2, w - F / 2, t, F, 50, "center", "#fff", FONT, 1, 2, 2, " ", !0, !0, !1, !1);
        d = new CGfxButton(q.width / 2 - 250, q.height / 2 + 270, s_oSpriteLibrary.getSprite("but_home"), v);
        d.addEventListener(ON_MOUSE_UP, this._onHome, this);
        g = new CGfxButton(q.width /
            2 + 250, q.height / 2 + 270, s_oSpriteLibrary.getSprite("but_restart"), v);
        g.addEventListener(ON_MOUSE_UP, this._onRestart, this);
        e = -q.height / 2;
        v.regX = q.width / 2;
        v.regY = q.height / 2
    };
    this.unload = function() {
        d.unload();
        g.unload();
        m.off("click", k)
    };
    this.addEventListener = function(q, t, F) {
        f[q] = t;
        n[q] = F
    };
    this.show = function(q, t) {
        setVolume("soundtrack", 0);
        var F = playSound("game_over", 1, !1);
        if (null !== F) F.on("end", function() {
            setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME)
        });
        b.refreshText(TEXT_GAME_OVER);
        a.refreshText(sprintf(TEXT_LEVEL_SCORE,
            t));
        c.refreshText(sprintf(TEXT_TOT_SCORE, q));
        p.alpha = 0;
        m.alpha = 0;
        v.y = e;
        h.visible = !0;
        createjs.Tween.get(p).to({
            alpha: 1
        }, 500);
        createjs.Tween.get(m).to({
            alpha: 1
        }, 500);
        createjs.Tween.get(v).wait(400).to({
            y: CANVAS_HEIGHT / 2
        }, 1E3, createjs.Ease.bounceOut)
    };
    this.hide = function() {
        createjs.Tween.get(v).to({
            y: e
        }, 1E3, createjs.Ease.backIn).call(function() {
            createjs.Tween.get(p).to({
                alpha: 0
            }, 400, createjs.Ease.cubicOut).call(function() {
                h.visible = !1;
                f[l] && f[l].call(n[l])
            })
        })
    };
    this._onHome = function() {
        l = ON_BACK_MENU;
        y.hide()
    };
    this._onRestart = function() {
        document.dispatchEvent(new CustomEvent("show_interlevel_ad"));
        l = ON_RESTART;
        y.hide()
    };
    this._init()
}

function CCreditsPanel() {
    var e, l, f, n, k, p, a;
    this._init = function() {
        n = new createjs.Shape;
        n.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        n.alpha = 0;
        f = n.on("click", function() {});
        s_oStage.addChild(n);
        createjs.Tween.get(n).to({
            alpha: 0.7
        }, 500);

        k = new createjs.Container;
        s_oStage.addChild(k);

        var b = s_oSpriteLibrary.getSprite("msg_box");
        a = createBitmap(b);
        a.regX = b.width / 2;
        a.regY = b.height / 2;
        k.addChild(a);
        l = a.on("click", this._onLogoButRelease);

        k.x = CANVAS_WIDTH / 2;
        k.y = -b.height / 2;
        e = k.y;
        createjs.Tween.get(k).to({
            y: CANVAS_HEIGHT / 2
        }, 1000, createjs.Ease.bounceOut);

        // Bigger font and centered text
        new CTLText(
            k,
            -b.width / 2 + 30,       // X position with padding
            -50,                     // Y position (move up a bit)
            b.width - 60,            // Width with padding
            120,                     // Height to fit large text
            36,                      // FONT SIZE increased
            "center",
            "#ffffff",
            FONT,
            1,
            2,
            2,
            "DEVELOPED BY\n\n\nWWW.RETROSGAME.COM",
            true,
            true,
            false,
            false
        );

        b = s_oSpriteLibrary.getSprite("but_exit");
        p = new CGfxButton(280, -270, b, k);
        p.addEventListener(ON_MOUSE_UP, this.unload, this);
    };

    this.unload = function() {
        createjs.Tween.get(n).to({
            alpha: 0
        }, 500);
        createjs.Tween.get(k).to({
            y: e
        }, 400, createjs.Ease.backIn).call(function() {
            s_oStage.removeChild(n);
            s_oStage.removeChild(k);
            p.unload();
        });
        n.off("click", f);
        a.off("click", l);
    };

    this._onLogoButRelease = function() {
        window.open("https://www.retrosgame.com/", "_blank");
    };

    this._init();
}




function CAreYouSurePanel(e) {
    var l, f, n, k, p, m, a, b, c, d, g, h = this;
    this._init = function() {
        f = [];
        n = [];
        c = new createjs.Container;
        c.visible = !1;
        v.addChild(c);
        d = new createjs.Shape;
        d.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        d.alpha = .5;
        k = d.on("click", function() {});
        c.addChild(d);
        g = new createjs.Container;
        c.addChild(g);
        var y = s_oSpriteLibrary.getSprite("msg_box");
        p = createBitmap(y);
        p.regX = .5 * y.width;
        p.regY = .5 * y.height;
        g.addChild(p);
        g.x = CANVAS_WIDTH / 2;
        g.y = l = -y.height / 2;
        y = y.width - 100;
        m = new CTLText(g,
            10 - y / 2, -170, y, 200, 40, "center", "#fff", FONT, 1.2, 2, 2, " ", !0, !0, !0, !1);
        a = new CGfxButton(190, 180, s_oSpriteLibrary.getSprite("but_yes"), g);
        a.addEventListener(ON_MOUSE_UP, this._onButYes, this);
        b = new CGfxButton(-170, 180, s_oSpriteLibrary.getSprite("but_exit"), g);
        b.addEventListener(ON_MOUSE_UP, this._onButNo, this)
    };
    this.addEventListener = function(y, q, t) {
        f[y] = q;
        n[y] = t
    };
    this.show = function(y, q) {
        m.refreshText(y);
        m.setFontSize(q);
        g.y = l;
        c.visible = !0;
        createjs.Tween.get(g).to({
            y: CANVAS_HEIGHT / 2
        }, 1E3, createjs.Ease.bounceOut).call(function() {
            s_oMain.stopUpdateNoBlock()
        })
    };
    this.hide = function() {
        s_oMain.startUpdateNoBlock();
        c.visible = !1
    };
    this.unload = function() {
        b.unload();
        a.unload();
        d.off("click", k)
    };
    this._onButYes = function() {
        h.hide();
        f[ON_BUT_YES_DOWN] && f[ON_BUT_YES_DOWN].call(n[ON_BUT_YES_DOWN])
    };
    this._onButNo = function() {
        h.hide()
    };
    var v = e;
    this._init()
}

function CMsgBox() {
    var e, l, f, n, k;
    this._init = function() {
        k = new createjs.Container;
        s_oStage.addChild(k);
        f = new createjs.Shape;
        f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        f.alpha = .5;
        e = f.on("click", function() {});
        k.addChild(f);
        n = new createjs.Container;
        k.addChild(n);
        var p = s_oSpriteLibrary.getSprite("msg_box"),
            m = createBitmap(p);
        m.regX = .5 * p.width;
        m.regY = .5 * p.height;
        n.addChild(m);
        n.x = CANVAS_WIDTH / 2;
        n.y = -p.height / 2;
        p = p.width - 100;
        new CTLText(n, 10 - p / 2, -180, p, 260, 24, "center", "#fff", FONT,
            1.2, 2, 2, TEXT_ERR_LS, !0, !0, !0, !1);
        l = new CGfxButton(0, 160, s_oSpriteLibrary.getSprite("but_yes"), n);
        l.addEventListener(ON_MOUSE_UP, this._onButYes, this);
        createjs.Tween.get(n).to({
            y: CANVAS_HEIGHT / 2
        }, 1E3, createjs.Ease.bounceOut)
    };
    this._onButYes = function() {
        l.unload();
        f.off("click", e);
        s_oStage.removeChild(k)
    };
    this._init()
}

function CHero(e, l, f, n, k) {
    var p, m, a, b, c, d, g, h, v, y, q;
    this._init = function(t, F, r, w) {
        p = a = r;
        m = b = w;
        c = t;
        d = F;
        y = [];
        q = new createjs.Container;
        q.x = t;
        q.y = F;
        q.regX = HERO_WIDTH / 2;
        q.regY = HERO_HEIGHT / 2 + 15;
        k.addChild(q);
        t = {
            images: [s_oSpriteLibrary.getSprite("hero_top")],
            framerate: FPS_CHARACTERS,
            frames: {
                width: HERO_WIDTH,
                height: HERO_HEIGHT
            },
            animations: {
                start: 0,
                idle: 0,
                walk: [0, 3, "walk"],
                attack: [4, 7, "attack"],
                die: [8, 11, "stop_die"],
                stop_die: 11
            }
        };
        t = new createjs.SpriteSheet(t);
        t = createSprite(t, "start", 0, 0, HERO_WIDTH, HERO_HEIGHT);
        t.on("animationend", this._onAnimationEnd, this);
        t.visible = !1;
        q.addChild(t);
        y[DIR_TOP] = t;
        t = {
            images: [s_oSpriteLibrary.getSprite("hero_right")],
            framerate: FPS_CHARACTERS,
            frames: {
                width: HERO_WIDTH,
                height: HERO_HEIGHT
            },
            animations: {
                start: 0,
                idle: 0,
                walk: [0, 3, "walk"],
                attack: [4, 7, "attack"],
                die: [8, 11, "stop_die"],
                stop_die: 11
            }
        };
        t = new createjs.SpriteSheet(t);
        t = createSprite(t, "start", 0, 0, HERO_WIDTH, HERO_HEIGHT);
        t.on("animationend", this._onAnimationEnd, this);
        t.visible = !1;
        q.addChild(t);
        y[DIR_RIGHT] = t;
        t = {
            images: [s_oSpriteLibrary.getSprite("hero_bottom")],
            framerate: FPS_CHARACTERS,
            frames: {
                width: HERO_WIDTH,
                height: HERO_HEIGHT
            },
            animations: {
                start: 0,
                idle: 0,
                walk: [0, 3, "walk"],
                attack: [4, 7, "attack"],
                die: [8, 11, "stop_die"],
                stop_die: 11
            }
        };
        t = new createjs.SpriteSheet(t);
        t = createSprite(t, "start", 0, 0, HERO_WIDTH, HERO_HEIGHT);
        t.on("animationend", this._onAnimationEnd, this);
        q.addChild(t);
        y[DIR_BOTTOM] = t;
        t = {
            images: [s_oSpriteLibrary.getSprite("hero_left")],
            framerate: FPS_CHARACTERS,
            frames: {
                width: HERO_WIDTH,
                height: HERO_HEIGHT
            },
            animations: {
                start: 0,
                idle: 0,
                walk: [0, 3, "walk"],
                attack: [4,
                    7, "attack"
                ],
                die: [8, 11, "stop_die"],
                stop_die: 11
            }
        };
        t = new createjs.SpriteSheet(t);
        t = createSprite(t, "start", 0, 0, HERO_WIDTH, HERO_HEIGHT);
        t.on("animationend", this._onAnimationEnd, this);
        t.visible = !1;
        q.addChild(t);
        y[DIR_LEFT] = t;
        g = DIR_BOTTOM
    };
    this.reset = function() {
        p = a;
        m = b;
        q.x = c;
        q.y = d;
        g = DIR_BOTTOM;
        this.playAnim(g, ANIM_IDLE)
    };
    this.setStart = function(t, F, r, w) {
        p = a = r;
        m = b = w;
        c = t;
        d = F
    };
    this._hideAllAnims = function() {
        for (var t = 0; t < y.length; t++) y[t].visible = !1
    };
    this.playAnim = function(t, F) {
        this._hideAllAnims();
        y[t].visible = !0;
        y[t].gotoAndPlay(F);
        g = t
    };
    this.pauseAnim = function(t) {
        y[g].paused = t
    };
    this.catchPowerUp = function(t) {
        var F = this;
        v = 0;
        var r = t ? 1 : -1;
        h = setInterval(function() {
            F._playPowerUpAnim(0 === v % 2 ? y[g].currentFrame + 16 * r : y[g].currentFrame - 16 * r)
        }, 150)
    };
    this._playPowerUpAnim = function(t) {
        y[g].gotoAndStop(t);
        v++;
        7 === v && (clearInterval(h), s_oGame.resumeFromPowerUpAnim())
    };
    this.clearIntervalAnim = function() {
        clearInterval(h)
    };
    this.setMask = function(t) {
        q.mask = t
    };
    this.increaseX = function(t) {
        q.x += t
    };
    this.setRow = function(t) {
        p = t
    };
    this.setCol = function(t) {
        m = t
    };
    this._onAnimationEnd = function(t) {
        t.currentTarget.currentAnimation === ANIM_DIE && setTimeout(function() {
            s_oGame.loseLife()
        }, 1500)
    };
    this.getRow = function() {
        return p
    };
    this.getCol = function() {
        return m
    };
    this.setX = function(t) {
        q.x = t
    };
    this.setPos = function(t, F) {
        q.x = t;
        q.y = F
    };
    this.getCurSpriteIndex = function() {
        return g
    };
    this.getX = function() {
        return q.x
    };
    this.getY = function() {
        return q.y
    };
    this.getPos = function() {
        return {
            x: q.x,
            y: q.y
        }
    };
    this.update = function(t, F) {
        "right" === F || "left" === F ? q.x += PLAYER_SPEED *
            t : q.y += PLAYER_SPEED * t
    };
    this._init(e, l, f, n)
}

function CEnemy(e, l, f, n, k, p) {
    var m, a, b, c, d, g, h, v, y, q, t, F, r, w, E, u = 0,
        C, D, x, G;
    this._init = function(H, N, P, T, R) {
        b = m = !1;
        c = H;
        d = y = T;
        g = q = R;
        h = N;
        v = P;
        C = [];
        G = new createjs.Container;
        G.x = N;
        G.y = P;
        G.regX = ENEMY_WIDTH / 2;
        G.regY = ENEMY_HEIGHT / 2 + 15;
        p.addChild(G);
        H = {
            images: [s_oSpriteLibrary.getSprite("enemy_top_" + c)],
            framerate: FPS_CHARACTERS,
            frames: {
                width: ENEMY_WIDTH,
                height: ENEMY_HEIGHT
            },
            animations: {
                start: 0,
                walk_0: [0, 3, "walk_0"],
                walk_1: [1, 3, "walk_0"],
                walk_2: [2, 3, "walk_0"],
                escape: [4, 7, "escape"],
                die: [8, 11, "stop_die"],
                stop_die: 11,
                ghost: 4
            }
        };
        H = new createjs.SpriteSheet(H);
        H = createSprite(H, "start", 0, 0, ENEMY_WIDTH, ENEMY_HEIGHT);
        H.visible = !1;
        G.addChild(H);
        C[DIR_TOP] = H;
        H = {
            images: [s_oSpriteLibrary.getSprite("enemy_right_" + c)],
            framerate: FPS_CHARACTERS,
            frames: {
                width: ENEMY_WIDTH,
                height: ENEMY_HEIGHT
            },
            animations: {
                start: 0,
                walk_0: [0, 3, "walk_0"],
                walk_1: [1, 3, "walk_0"],
                walk_2: [2, 3, "walk_0"],
                escape: [4, 7, "escape"],
                die: [8, 11, "stop_die"],
                stop_die: 11,
                ghost: 4
            }
        };
        H = new createjs.SpriteSheet(H);
        H = createSprite(H, "start", 0, 0, ENEMY_WIDTH, ENEMY_HEIGHT);
        H.visible = !1;
        G.addChild(H);
        C[DIR_RIGHT] = H;
        H = {
            images: [s_oSpriteLibrary.getSprite("enemy_bottom_" + c)],
            framerate: FPS_CHARACTERS,
            frames: {
                width: ENEMY_WIDTH,
                height: ENEMY_HEIGHT
            },
            animations: {
                start: 0,
                walk_0: [0, 3, "walk_0"],
                walk_1: [1, 3, "walk_0"],
                walk_2: [2, 3, "walk_0"],
                escape: [4, 7, "escape"],
                die: [8, 11, "stop_die"],
                stop_die: 11,
                ghost: 4
            }
        };
        H = new createjs.SpriteSheet(H);
        H = createSprite(H, "walk_1", 0, 0, ENEMY_WIDTH, ENEMY_HEIGHT);
        G.addChild(H);
        C[DIR_BOTTOM] = H;
        H = {
            images: [s_oSpriteLibrary.getSprite("enemy_left_" + c)],
            framerate: FPS_CHARACTERS,
            frames: {
                width: ENEMY_WIDTH,
                height: ENEMY_HEIGHT
            },
            animations: {
                start: 0,
                walk_0: [0, 3, "walk_0"],
                walk_1: [1, 3, "walk_0"],
                walk_2: [2, 3, "walk_0"],
                escape: [4, 7, "escape"],
                die: [8, 11, "stop_die"],
                stop_die: 11,
                ghost: 4
            }
        };
        H = new createjs.SpriteSheet(H);
        H = createSprite(H, "start", 0, 0, ENEMY_WIDTH, ENEMY_HEIGHT);
        H.visible = !1;
        G.addChild(H);
        C[DIR_LEFT] = H;
        F = ENEMY_SPEED;
        t = DIR_BOTTOM
    };
    this.unload = function() {
        p.removeChild(G)
    };
    this.reset = function() {
        b = m = !1;
        d = y;
        g = q;
        G.x = h;
        G.y = v;
        G.alpha = 1;
        t = DIR_BOTTOM;
        this.playAnim(t, ANIM_WALK)
    };
    this._hideAllAnims =
        function() {
            for (var H = 0; H < C.length; H++) C[H].visible = !1
        };
    this.playAnim = function(H, N) {
        if (t !== H || C[H].currentAnimation !== N) this._hideAllAnims(), N === ANIM_WALK ? C[H].gotoAndPlay("walk_" + Math.floor(3 * Math.random())) : C[H].gotoAndPlay(N), C[H].visible = !0, t = H, F = N === ANIM_ESCAPE ? ENEMY_SPEED_SLOW : ENEMY_SPEED
    };
    this.setMask = function(H) {
        G.mask = H
    };
    this.increaseX = function(H) {
        G.x += H
    };
    this.setPath = function(H, N, P) {
        a = P;
        D = N;
        x = H;
        r = 0;
        this._setNextPoint();
        m = !0
    };
    this.setUpdate = function(H) {
        m = H
    };
    this._setNextPoint = function() {
        d =
            x[r][0];
        g = x[r][1];
        if (a === STATE_ENEMY_FOLLOW || b || !s_oGame.checkDistFromPlayer(this)) r + 1 >= D.length ? (m = b = !1, G.alpha = 1, s_oGame.getNewEnemyPath(this, a)) : (u = 0, w = new CVector2(D[r].x, D[r].y), E = new CVector2(D[r + 1].x, D[r + 1].y), this._changeDir())
    };
    this.pauseAnim = function(H) {
        C[t].paused = H
    };
    this._changeDir = function() {
        var H = x[r + 1][0] - x[r][0],
            N = x[r + 1][1] - x[r][1];
        if (!1 === b) {
            var P = ANIM_WALK;
            s_oGame.isPowerUpActive() && (P = ANIM_ESCAPE);
            0 > H ? this.playAnim(DIR_TOP, P) : 0 < H ? this.playAnim(DIR_BOTTOM, P) : 0 > N ? this.playAnim(DIR_LEFT,
                P) : 0 < N && this.playAnim(DIR_RIGHT, P)
        }
    };
    this.death = function() {
        m = !1;
        b = !0;
        C[t].gotoAndPlay(ANIM_DIE);
        playSound("enemy_" + c + "_death", 1, !1);
        var H = this;
        createjs.Tween.get(G).wait(2E3).to({
            alpha: 0
        }, 1E3).call(function() {
            H._playDeathAnim()
        })
    };
    this._playDeathAnim = function() {
        this._hideAllAnims();
        t = DIR_BOTTOM;
        C[t].visible = !0;
        G.alpha = .5;
        C[t].gotoAndStop("ghost");
        s_oGame.getEnemyPathToStartPos(this)
    };
    this.setX = function(H) {
        G.x = H
    };
    this.getRow = function() {
        return d
    };
    this.getCol = function() {
        return g
    };
    this.getX = function() {
        return G.x
    };
    this.getStartingRow = function() {
        return y
    };
    this.getStartingCol = function() {
        return q
    };
    this.getY = function() {
        return G.y
    };
    this.getPos = function() {
        return {
            x: G.x,
            y: G.y
        }
    };
    this.getCurSpriteIndex = function() {
        return t
    };
    this._moveEnemy = function() {
        u += s_iTimeElaps;
        if (u > F) r++, this._setNextPoint();
        else {
            var H = easeLinear(u, 0, 1, F);
            H = tweenVectors(w, E, H);
            G.x = H.getX();
            G.y = H.getY()
        }
    };
    this.getState = function() {
        return a
    };
    this.isDeath = function() {
        return b
    };
    this.update = function() {
        return m && (this._moveEnemy(), !b) ? !0 : !1
    };
    this._init(e,
        l, f, n, k)
}
var LEVEL_INFOS = "7#0#0#0#0#0#0#0#0#10#0#0#0#0#0#0#0#0#6#1#23#23#23#23#23#23#23#23#1#23#23#23#23#23#23#23#23#1#1#23#15#16#17#23#15#17#23#1#23#15#16#17#23#15#17#23#1#1#24#18#19#20#23#18#20#23#4#23#18#19#20#23#18#20#25#1#1#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#1#1#23#3#2#23#5#23#3#0#10#0#2#23#5#23#3#2#23#1#1#23#23#23#23#1#23#23#23#1#23#23#23#1#23#23#23#23#1#9#0#0#6#23#11#0#2#-1#4#-1#3#0#12#23#7#0#0#8#21#0#0#8#23#4#-1#-1#-1#-1#-1#-1#-1#4#23#9#0#0#0#43#-1#-1#-1#23#-1#-1#7#0#22#0#6#-1#-1#23#-1#-1#-1#44#21#0#0#6#23#5#-1#1#-1#-1#-1#1#-1#5#23#7#0#0#0#7#0#0#8#23#4#-1#9#0#0#0#8#-1#4#23#9#0#0#6#1#23#23#23#23#-1#-1#-1#-1#-1#-1#-1#-1#-1#23#23#23#23#1#1#23#3#6#23#3#0#0#0#0#0#0#0#2#23#7#2#23#1#1#23#23#1#23#23#23#23#23#-1#23#23#23#23#23#1#23#23#1#11#2#26#4#23#5#23#3#0#10#0#2#23#5#23#4#27#3#12#1#23#23#23#23#1#23#23#23#1#23#23#23#1#23#23#23#23#1#1#23#3#0#0#13#0#2#23#4#23#3#0#13#0#0#2#23#1#1#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#1#9#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#8 7#0#0#0#0#0#0#0#0#10#0#0#0#0#0#0#0#0#6#1#23#23#23#23#23#23#23#23#1#23#23#23#23#23#23#23#23#1#1#23#15#17#23#15#16#17#23#1#23#15#16#17#23#15#17#23#1#1#28#18#20#23#18#19#20#23#4#23#18#19#20#23#18#20#29#1#1#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#1#11#0#2#23#3#6#23#3#0#0#0#2#23#7#2#23#3#0#12#1#23#23#23#23#1#23#23#23#23#23#23#23#1#23#23#23#23#1#9#0#0#6#23#4#-1#3#0#0#0#2#-1#4#23#7#0#0#8#21#0#0#8#23#-1#-1#-1#-1#-1#-1#-1#-1#-1#23#9#0#0#0#43#-1#-1#-1#23#5#-1#7#0#22#0#6#-1#5#23#-1#-1#-1#44#21#0#0#6#23#1#-1#1#-1#-1#-1#1#-1#1#23#7#0#0#0#7#0#0#8#23#4#-1#9#0#0#0#8#-1#4#23#9#0#0#6#1#23#23#23#23#-1#-1#-1#-1#-1#-1#-1#-1#-1#23#23#23#23#1#1#23#15#17#23#5#-1#15#16#16#16#17#-1#5#23#15#17#23#1#1#30#18#20#23#4#23#18#19#19#19#20#23#4#23#18#20#27#1#11#23#23#23#23#23#23#23#23#-1#23#23#23#23#23#23#23#23#1#1#23#15#17#23#15#16#17#23#5#23#15#16#17#23#15#17#23#1#1#23#18#20#23#18#19#20#23#1#23#18#19#20#23#18#20#23#1#1#23#23#23#23#23#23#23#23#1#23#23#23#23#23#23#23#23#1#9#0#0#0#0#0#0#0#0#13#0#0#0#0#0#0#0#0#8 7#0#0#0#6#-1#-1#-1#-1#-1#-1#-1#-1#-1#7#0#0#0#6#1#23#23#23#9#0#0#0#0#0#0#0#0#0#8#23#23#23#1#1#23#5#23#23#23#23#23#23#23#23#23#23#23#23#23#5#23#1#1#31#9#0#0#2#23#3#0#0#0#2#23#3#0#0#8#32#1#1#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#1#11#23#3#2#23#5#23#3#0#0#0#2#23#5#23#3#2#23#1#1#23#23#23#23#1#23#23#23#23#23#23#23#1#23#23#23#23#1#9#0#0#6#23#4#-1#3#0#0#0#2#-1#4#23#7#0#0#8#21#0#0#8#23#-1#-1#-1#-1#-1#-1#-1#-1#-1#23#9#0#0#0#43#-1#-1#-1#23#5#-1#7#0#22#0#6#-1#5#23#-1#-1#-1#44#21#0#0#6#23#1#-1#1#-1#-1#-1#1#-1#1#23#7#0#0#0#7#0#0#8#23#4#-1#9#0#0#0#8#-1#4#23#9#0#0#6#1#23#23#23#23#-1#-1#-1#-1#-1#-1#-1#-1#-1#23#23#23#23#1#1#23#15#17#23#5#-1#15#16#16#16#17#-1#5#23#15#17#23#1#1#23#18#20#23#4#-1#18#19#19#19#20#-1#4#23#18#20#23#1#11#23#23#23#23#23#23#23#23#-1#23#23#23#23#23#23#23#23#1#1#23#7#0#0#2#23#3#0#0#0#2#23#3#0#0#6#23#1#1#33#4#23#23#23#23#23#23#23#23#23#23#23#23#23#4#34#1#1#23#23#23#7#0#0#0#0#0#0#0#0#0#6#23#23#23#1#9#0#0#0#8#-1#-1#-1#-1#-1#-1#-1#-1#-1#9#0#0#0#8 7#0#0#0#0#0#0#10#0#0#0#10#0#0#0#0#0#0#6#1#23#23#23#23#23#23#1#23#23#23#1#23#23#23#23#23#23#1#1#23#15#17#23#5#23#1#23#5#23#1#23#5#23#15#17#23#1#1#28#18#20#23#1#23#4#23#1#23#4#23#1#23#18#20#35#1#1#23#23#23#23#1#23#23#23#1#23#23#23#1#23#23#23#23#1#1#23#7#2#23#9#0#2#23#1#23#3#0#8#23#3#6#23#1#1#23#1#23#23#23#23#23#23#1#23#23#23#23#23#23#1#23#1#8#23#4#23#3#2#-1#3#0#13#0#2#-1#3#2#23#4#23#9#43#23#23#23#23#-1#-1#-1#-1#-1#-1#-1#-1#-1#23#23#23#23#44#6#-1#3#2#23#5#-1#7#0#22#0#6#-1#5#23#3#2#-1#7#1#-1#-1#-1#23#1#-1#1#-1#-1#-1#1#-1#1#23#-1#-1#-1#1#1#-1#3#2#23#4#-1#9#0#0#0#8#-1#4#23#3#2#-1#1#8#23#23#23#23#-1#-1#-1#-1#-1#-1#-1#-1#-1#23#23#23#23#9#43#23#3#6#23#3#0#0#0#0#0#0#0#2#23#7#2#23#44#6#23#23#1#23#23#23#23#23#-1#23#23#23#23#23#1#23#23#1#11#2#23#1#23#5#23#3#0#10#0#2#23#5#23#1#23#3#12#1#23#23#1#23#1#23#23#23#1#23#23#23#1#23#1#23#23#1#1#36#3#8#23#9#0#2#23#4#23#3#0#8#23#9#2#37#1#1#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#1#9#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#8 7#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#6#1#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#1#1#38#3#2#23#3#0#6#23#5#23#7#0#2#23#3#2#35#1#1#23#23#23#23#23#23#1#23#1#23#1#23#23#23#23#23#23#1#9#2#23#3#0#6#23#1#23#1#23#1#23#7#0#2#23#3#8#43#-1#23#-1#-1#1#23#4#23#4#23#4#23#1#-1#-1#23#-1#44#21#6#23#5#-1#1#23#23#23#23#23#23#23#1#-1#5#23#7#0#7#8#23#1#-1#4#-1#3#0#0#0#2#-1#4#-1#1#23#9#6#1#23#23#1#-1#-1#-1#-1#-1#-1#-1#-1#-1#-1#-1#1#23#23#1#1#23#3#13#0#2#-1#7#0#22#0#6#-1#3#0#13#2#23#1#1#23#23#23#-1#-1#-1#1#-1#-1#-1#1#-1#-1#-1#23#23#23#1#1#23#5#23#3#6#-1#9#0#0#0#8#-1#7#2#23#5#23#1#1#23#1#23#23#1#23#23#23#23#23#23#23#1#23#23#1#23#1#1#23#11#2#23#4#23#5#23#5#23#5#23#4#23#3#12#23#1#1#23#1#23#23#23#23#1#23#1#23#1#23#23#23#23#1#23#1#1#23#4#23#3#0#0#8#23#4#23#9#0#0#2#23#4#23#1#1#23#23#23#23#23#23#23#23#-1#23#23#23#23#23#23#23#23#1#1#28#3#2#23#3#0#0#2#23#3#0#0#2#23#3#2#39#1#1#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#1#9#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#8 7#0#0#0#0#0#0#0#0#10#0#0#0#0#0#0#0#0#6#1#23#23#23#23#23#23#23#23#1#23#23#23#23#23#23#23#23#1#1#24#3#6#23#3#0#6#23#1#23#7#0#2#23#7#2#40#1#1#23#23#1#23#23#23#4#23#4#23#4#23#23#23#1#23#23#1#9#6#23#1#23#5#23#23#23#23#23#23#23#5#23#1#23#7#8#-1#1#23#4#23#1#23#3#0#10#0#2#23#1#23#4#23#1#-1#-1#1#23#23#23#1#23#23#23#1#23#23#23#1#23#23#23#1#-1#21#8#-1#5#23#11#0#2#-1#4#-1#3#0#12#23#5#-1#9#0#43#-1#-1#1#23#4#-1#-1#-1#-1#-1#-1#-1#4#23#1#-1#-1#44#21#0#0#12#23#-1#-1#7#0#22#0#6#-1#-1#23#11#0#0#0#43#-1#-1#1#23#5#-1#1#-1#-1#-1#1#-1#5#23#1#-1#-1#44#21#6#-1#4#23#4#-1#9#0#0#0#8#-1#4#23#4#-1#7#0#-1#1#23#23#23#-1#-1#-1#-1#-1#-1#-1#-1#-1#23#23#23#1#-1#-1#1#23#5#23#3#0#0#0#0#0#0#0#2#23#5#23#1#-1#7#8#23#1#23#23#23#23#23#-1#23#23#23#23#23#1#23#9#6#1#23#23#1#23#5#23#3#0#0#0#2#23#5#23#1#23#23#1#1#41#3#12#23#1#23#23#23#23#23#23#23#1#23#11#2#42#1#1#23#23#4#23#4#23#3#0#0#0#2#23#4#23#4#23#23#1#9#6#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#7#8#-1#9#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#8#-1".split(" "),
    PLAYER_START = [{
        row: 14,
        col: 9
    }, {
        row: 15,
        col: 9
    }, {
        row: 15,
        col: 9
    }, {
        row: 14,
        col: 9
    }, {
        row: 16,
        col: 9
    }, {
        row: 14,
        col: 9
    }],
    ENEMY_START = [
        [{
            row: 10,
            col: 8
        }, {
            row: 10,
            col: 9
        }, {
            row: 10,
            col: 10
        }],
        [{
            row: 10,
            col: 8
        }, {
            row: 10,
            col: 9
        }, {
            row: 10,
            col: 10
        }],
        [{
            row: 10,
            col: 8
        }, {
            row: 10,
            col: 9
        }, {
            row: 10,
            col: 10
        }],
        [{
            row: 10,
            col: 8
        }, {
            row: 10,
            col: 9
        }, {
            row: 10,
            col: 10
        }],
        [{
            row: 10,
            col: 8
        }, {
            row: 10,
            col: 9
        }, {
            row: 10,
            col: 10
        }],
        [{
            row: 10,
            col: 8
        }, {
            row: 10,
            col: 9
        }, {
            row: 10,
            col: 10
        }]
    ],
    RECIPE_INGREDIENTS = [
        [24, 25, 26, 27],
        [28, 29, 30, 27],
        [31, 32, 33, 34],
        [35, 36, 37, 24],
        [38, 39, 28, 35],
        [40, 41, 42, 24]
    ];

function CCell(e, l, f, n, k, p) {
    var m, a, b, c, d, g, h;
    this._init = function(v, y, q) {
        b = v;
        c = y;
        if (43 <= q) q = 43 === q ? s_oSpriteLibrary.getSprite("exit_door_left") : s_oSpriteLibrary.getSprite("exit_door_right"), h = createBitmap(q), h.regX = q.width / 2, h.regY = q.height / 2, h.x = v, h.y = y, p.addChild(h), d = CELL_EMPTY;
        else {
            var t = {
                images: [s_oSpriteLibrary.getSprite("walls")],
                frames: {
                    width: CELL_SIZE,
                    height: CELL_SIZE,
                    regX: CELL_SIZE / 2,
                    regY: CELL_SIZE / 2
                },
                animations: {
                    piece_0: 0,
                    piece_1: 1,
                    piece_2: 2,
                    piece_3: 3,
                    piece_4: 4,
                    piece_5: 5,
                    piece_6: 6,
                    piece_7: 7,
                    piece_8: 8,
                    piece_9: 9,
                    piece_10: 10,
                    piece_11: 11,
                    piece_12: 12,
                    piece_13: 13,
                    piece_14: 14,
                    piece_15: 15,
                    piece_16: 16,
                    piece_17: 17,
                    piece_18: 18,
                    piece_19: 19,
                    piece_20: 20,
                    piece_21: 21,
                    piece_22: 22,
                    piece_23: 23,
                    piece_24: 24,
                    piece_25: 25,
                    piece_26: 26,
                    piece_27: 27,
                    piece_28: 28,
                    piece_29: 29,
                    piece_30: 30,
                    piece_31: 31,
                    piece_32: 32,
                    piece_33: 33,
                    piece_34: 34,
                    piece_35: 35,
                    piece_36: 36,
                    piece_37: 37,
                    piece_38: 38,
                    piece_39: 39,
                    piece_40: 40,
                    piece_41: 41,
                    piece_42: 42,
                    empty: 43
                }
            };
            t = new createjs.SpriteSheet(t);
            var F = "piece_" + q;
            0 > q ? (F = "empty", d = CELL_EMPTY) :
                d = 22 > q ? CELL_WALL : 22 === q ? CELL_EMPTY : q === SYMBOL_COIN ? CELL_CHEESE : CELL_INGREDIENT;
            h = createSprite(t, F, CELL_SIZE / 2, CELL_SIZE / 2, CELL_SIZE, CELL_SIZE);
            h.x = v;
            h.y = y;
            h.stop();
            p.addChild(h)
        }
        m = h.x;
        a = h.y;
        g = Array({
            row: f,
            col: n
        });
        0 < f - 1 && g.push({
            row: f - 1,
            col: n
        });
        n + 1 < GRID_COLS && g.push({
            row: f,
            col: n + 1
        });
        f + 1 < GRID_ROWS && g.push({
            row: f + 1,
            col: n
        });
        0 < n - 1 && g.push({
            row: f,
            col: n - 1
        })
    };
    this.reset = function() {
        h.x = b;
        h.y = c
    };
    this.setEmpty = function() {
        d = CELL_EMPTY;
        h.gotoAndStop("empty")
    };
    this.setIndex = function() {};
    this.openDoor = function() {
        createjs.Tween.get(h).to({
            x: h.x -
                CELL_SIZE
        }, 1500).call(function() {
            s_oGame.startEnemies()
        })
    };
    this.getX = function() {
        return m
    };
    this.getY = function() {
        return a
    };
    this.getRow = function() {
        return f
    };
    this.getCol = function() {
        return n
    };
    this.getTag = function() {
        return d
    };
    this.getIndex = function() {
        return k
    };
    this.isWalkable = function() {
        return d === CELL_WALL ? !1 : !0
    };
    this.getAdjacents = function() {
        return g
    };
    this._init(e, l, k)
}

function CHelpPanel() {
    var e = !1,
        l, f, n, k, p, m, a, b = this;
    this._init = function() {
        m = new createjs.Container;
        m.visible = !1;
        s_oStage.addChild(m);
        k = new createjs.Shape;
        k.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        k.alpha = .5;
        n = k.on("click", function() {});
        m.addChild(k);
        a = new createjs.Container;
        a.x = CANVAS_WIDTH / 2;
        m.addChild(a);
        var c = s_oSpriteLibrary.getSprite("bg_level_selection"),
            d = createBitmap(c);
        a.addChild(d);
        d = c.width - 100;
        d = new CTLText(a, -10 + c.width / 2 - d / 2, c.height / 2 - 200 - 75, d, 150, 70, "center",
            "#fff", FONT, 1.2, 2, 2, " ", !0, !0, !0, !1);
        if (s_bMobile) {
            d.refreshText(TEXT_HELP_MOBILE);
            d = s_oSpriteLibrary.getSprite("swipe_trail");
            d = createBitmap(d);
            d.regX = .5 * d.width;
            d.regY = .5 * d.height;
            d.x = 300;
            d.y = 420;
            a.addChild(d);
            var g = s_oSpriteLibrary.getSprite("hand_swipe"),
                h = createBitmap(g);
            h.regX = .5 * g.width;
            h.regY = .5 * g.height;
            h.x = d.x + 120;
            h.y = d.y + 120;
            a.addChild(h);
            f = h.x;
            this.handMovement(h, d)
        } else d.refreshText(TEXT_HELP_DESKTOP), d = s_oSpriteLibrary.getSprite("keyboard"), g = createBitmap(d), g.regX = d.width / 2, g.x = c.width /
            2, g.y = c.height / 2 - 80, a.addChild(g);
        p = new CGfxButton(c.width / 2, c.height / 2 + 300, s_oSpriteLibrary.getSprite("but_yes"), a);
        p.addEventListener(ON_MOUSE_UP, this._onStart, this);
        l = -c.height / 2;
        a.regX = c.width / 2;
        a.regY = c.height / 2
    };
    this.unload = function() {
        k.off("click", n);
        p.unload()
    };
    this.handMovement = function(c, d) {
        d.x = f - 120;
        d.scaleX = 1;
        d.alpha = 1;
        createjs.Tween.get(d).to({
            alpha: 0
        }, 500);
        createjs.Tween.get(c).to({
            x: f + 240
        }, 1E3, createjs.Ease.cubicOut).call(function() {
            d.x = f + 300;
            d.scaleX = -1;
            d.alpha = 1;
            createjs.Tween.get(d).to({
                    alpha: 0
                },
                500);
            createjs.Tween.get(c).to({
                x: f
            }, 1E3, createjs.Ease.cubicOut).call(function() {
                b.handMovement(c, d)
            })
        })
    };
    this.show = function() {
        e = !0;
        k.alpha = 0;
        a.y = l;
        m.visible = !0;
        createjs.Tween.get(k).to({
            alpha: .7
        }, 500);
        createjs.Tween.get(a).wait(400).to({
            y: CANVAS_HEIGHT / 2
        }, 1E3, createjs.Ease.bounceOut)
    };
    this.hide = function() {
        e = !1;
        createjs.Tween.get(a).to({
            y: l
        }, 1E3, createjs.Ease.backIn).call(function() {
            s_oGame.prepareStartLevel(!0)
        });
        createjs.Tween.get(k).to({
            alpha: 0
        }, 1E3)
    };
    this._onStart = function() {
        b.hide()
    };
    this.isShown =
        function() {
            return e
        };
    this._init()
}

function CVector2(e, l) {
    var f, n;
    this._init = function(k, p) {
        f = k;
        n = p
    };
    this.add = function(k, p) {
        f += k;
        n += p
    };
    this.addV = function(k) {
        f += k.getX();
        n += k.getY()
    };
    this.scalarDivision = function(k) {
        f /= k;
        n /= k
    };
    this.subV = function(k) {
        f -= k.getX();
        n -= k.getY()
    };
    this.scalarProduct = function(k) {
        f *= k;
        n *= k
    };
    this.invert = function() {
        f *= -1;
        n *= -1
    };
    this.dotProduct = function(k) {
        return f * k.getX() + n * k.getY()
    };
    this.set = function(k, p) {
        f = k;
        n = p
    };
    this.setV = function(k) {
        f = k.getX();
        n = k.getY()
    };
    this.length = function() {
        return Math.sqrt(f * f + n * n)
    };
    this.length2 =
        function() {
            return f * f + n * n
        };
    this.normalize = function() {
        var k = this.length();
        0 < k && (f /= k, n /= k)
    };
    this.getNormalize = function(k) {
        this.length();
        k.set(f, n);
        k.normalize()
    };
    this.rot90CCW = function() {
        var k = f;
        f = -n;
        n = k
    };
    this.rot90CW = function() {
        var k = f;
        f = n;
        n = -k
    };
    this.getRotCCW = function(k) {
        k.set(f, n);
        k.rot90CCW()
    };
    this.getRotCW = function(k) {
        k.set(f, n);
        k.rot90CW()
    };
    this.ceil = function() {
        f = Math.ceil(f);
        n = Math.ceil(n)
    };
    this.round = function() {
        f = Math.round(f);
        n = Math.round(n)
    };
    this.toString = function() {
        return "Vector2: " + f + ", " +
            n
    };
    this.print = function() {
        trace("Vector2: " + f + ", " + n)
    };
    this.getX = function() {
        return f
    };
    this.getY = function() {
        return n
    };
    this._init(e, l)
}

function CLevelMenu() {
    var e, l, f, n, k, p, m, a, b, c, d, g, h, v, y, q, t, F, r, w = null,
        E = null;
    this._init = function() {
        m = 0;
        F = new createjs.Container;
        s_oStage.addChild(F);
        var u = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        F.addChild(u);
        u = createBitmap(s_oSpriteLibrary.getSprite("exit_door_left"));
        u.x = 470;
        u.y = 916;
        F.addChild(u);
        u = createBitmap(s_oSpriteLibrary.getSprite("exit_door_right"));
        u.x = 1390;
        u.y = 916;
        F.addChild(u);
        v = new createjs.Shape;
        v.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        v.alpha =
            .5;
        F.addChild(v);
        y = new createjs.Container;
        y.x = CANVAS_WIDTH / 2;
        F.addChild(y);
        h = s_oSpriteLibrary.getSprite("bg_level_selection");
        u = createBitmap(h);
        y.addChild(u);
        u = h.width - 150;
        new CTLText(y, -10 + h.width / 2 - u / 2, 135, u, 70, 70, "center", "#fff", FONT, 1, 2, 2, TEXT_SELECT_LEVEL, !0, !0, !1, !1);
        u = s_oSpriteLibrary.getSprite("but_exit");
        k = CANVAS_WIDTH - u.width / 2 - 10;
        p = u.height / 2 + 10;
        q = new CGfxButton(k, p, u, s_oStage);
        q.addEventListener(ON_MOUSE_UP, this._onExit, this);
        y.regX = h.width / 2;
        y.regY = h.height / 2;
        a = -h.height / 2;
        b = u.height;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) u = s_oSpriteLibrary.getSprite("audio_icon"), f = k - u.width / 2 - 10, n = p, t = new CToggle(f, n, u, s_bAudioActive, s_oStage), t.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        u = window.document;
        var C = u.documentElement;
        w = C.requestFullscreen || C.mozRequestFullScreen || C.webkitRequestFullScreen || C.msRequestFullscreen;
        E = u.exitFullscreen || u.mozCancelFullScreen || u.webkitExitFullscreen || u.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (w = !1);
        w && screenfull.isEnabled && (u = s_oSpriteLibrary.getSprite("but_fullscreen"),
            e = u.width / 4 + 10, l = u.height / 2 + 10, r = new CToggle(e, l, u, s_bFullscreen, s_oStage), r.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        this._checkBoundLimits();
        d = [];
        u = h.width - 100;
        u = Math.floor(u / NUM_COLS_PAGE_LEVEL) / 2;
        for (var D = C = 0; D < NUM_COLS_PAGE_LEVEL; D++) d.push(C), C += 2 * u;
        g = [];
        this._createNewLevelPage(0, NUM_LEVELS);
        this.refreshButtonPos();
        v.alpha = 0;
        y.y = a;
        F.visible = !0;
        createjs.Tween.get(v).to({
            alpha: .7
        }, 500);
        createjs.Tween.get(y).to({
            y: CANVAS_HEIGHT / 2
        }, 1E3, createjs.Ease.bounceOut);
        s_bMobile ||
            (document.onkeydown = this._onKeyDown)
    };
    this.unload = function() {
        for (var u = 0; u < c.length; u++) c[u].unload();
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || t.unload();
        w && screenfull.isEnabled && r.unload();
        s_bMobile || (document.onkeydown = null);
        q.unload();
        s_oStage.removeAllChildren();
        s_oLevelMenu = null
    };
    this.refreshButtonPos = function() {
        q.setPosition(k - s_iOffsetX, p + s_iOffsetY);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || t.setPosition(f - s_iOffsetX, s_iOffsetY + n);
        w && screenfull.isEnabled && r.setPosition(e + s_iOffsetX, l + s_iOffsetY)
    };
    this._onKeyDown = function(u) {
        u || (u = window.event);
        if (u.keyCode === KEY_ESC) return s_oLevelMenu._onExit(), u.preventDefault(), !1
    };
    this._checkBoundLimits = function() {
        for (var u = s_oSpriteLibrary.getSprite("but_level"), C = 0, D = CANVAS_HEIGHT - 2 * EDGEBOARD_Y - 2 * b, x = 0; C < D;) C += u.height + 20, x++;
        NUM_ROWS_PAGE_LEVEL > x && (NUM_ROWS_PAGE_LEVEL = x);
        D = C = 0;
        x = CANVAS_WIDTH - 2 * EDGEBOARD_X;
        for (u = s_oSpriteLibrary.getSprite("but_level"); D < x;) D += u.width / 2 + 5, C++;
        NUM_COLS_PAGE_LEVEL > C && (NUM_COLS_PAGE_LEVEL = C)
    };
    this._createNewLevelPage = function(u,
        C) {
        var D = new createjs.Container;
        y.addChild(D);
        g.push(D);
        c = [];
        for (var x = 0, G = 0, H = 1, N = !1, P = s_oSpriteLibrary.getSprite("but_level"), T = u; T < C; T++) {
            var R = new CLevelBut(d[x] + P.width / 4, G + P.height / 2, T + 1, P, T + 1 > s_iLastLevel ? !1 : !0, D);
            R.addEventListenerWithParams(ON_MOUSE_UP, this._onButLevelRelease, this, T);
            c.push(R);
            x++;
            if (x === d.length && (x = 0, G += P.height + 70, H++, H > NUM_ROWS_PAGE_LEVEL && T !== C - 1)) {
                N = !0;
                break
            }
        }
        D.x = h.width / 2;
        D.y = h.height / 2 + 100;
        D.regX = D.getBounds().width / 2;
        D.regY = D.getBounds().height / 2;
        N && this._createNewLevelPage(T +
            1, C)
    };
    this._onRight = function() {
        g[m].visible = !1;
        m++;
        m >= g.length && (m = 0);
        g[m].visible = !0
    };
    this._onLeft = function() {
        g[m].visible = !1;
        m--;
        0 > m && (m = g.length - 1);
        g[m].visible = !0
    };
    this._onButLevelRelease = function(u) {
        s_oLevelMenu.unload();
        s_oMain.levelSelected(u + 1)
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this.resetFullscreenBut = function() {
        w && screenfull.isEnabled && r.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? E.call(window.document) :
            w.call(window.document.documentElement);
        sizeHandler()
    };
    this._onExit = function() {
        s_oLevelMenu.unload();
        s_oMain.gotoMenu()
    };
    s_oLevelMenu = this;
    this._init()
}
var s_oLevelMenu = null;

function CLevelBut(e, l, f, n, k, p) {
    var m, a, b, c = [],
        d = [],
        g, h, v;
    this._init = function(q, t, F, r, w) {
        a = [];
        b = [];
        v = new createjs.Container;
        y.addChild(v);
        var E = new createjs.SpriteSheet({
            images: [r],
            frames: {
                width: r.width / 2,
                height: r.height,
                regX: r.width / 2 / 2,
                regY: r.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        });
        m = w;
        h = createSprite(E, "state_" + m, r.width / 2 / 2, r.height / 2, r.width / 2, r.height);
        h.mouseEnabled = w;
        h.x = q;
        h.y = t;
        h.stop();
        s_bMobile || (v.cursor = w ? "pointer" : "default");
        v.addChild(h);
        c.push(h);
        r = r.width / 2 - 20;
        g = new CTLText(v,
            q - r / 2, t - 6 - 35, r, 70, 60, "center", "#fff", FONT, 1, 2, 2, F, !0, !0, !1, !1);
        w || g.setColor("#b4b4b4");
        this._initListener()
    };
    this.unload = function() {
        v.off("mousedown", this.buttonDown);
        v.off("pressup", this.buttonRelease);
        v.removeChild(h)
    };
    this._initListener = function() {
        v.on("mousedown", this.buttonDown);
        v.on("pressup", this.buttonRelease)
    };
    this.viewBut = function(q) {
        v.addChild(q)
    };
    this.addEventListener = function(q, t, F) {
        a[q] = t;
        b[q] = F
    };
    this.addEventListenerWithParams = function(q, t, F, r) {
        a[q] = t;
        b[q] = F;
        d = r
    };
    this.ifClickable =
        function() {
            return !0 === v.mouseEnabled ? 1 : 0
        };
    this.setActive = function(q, t) {
        m = t;
        c[q].gotoAndStop("state_" + m);
        c[q].mouseEnabled = !0;
        m ? (g.setColor("#804f01"), s_bMobile || (v.cursor = "pointer")) : (g.setColor("#b4b4b4"), s_bMobile || (v.cursor = "default"))
    };
    this.buttonRelease = function() {
        m && (playSound("click", 1, !1), a[ON_MOUSE_UP] && a[ON_MOUSE_UP].call(b[ON_MOUSE_UP], d))
    };
    this.buttonDown = function() {
        a[ON_MOUSE_DOWN] && a[ON_MOUSE_DOWN].call(b[ON_MOUSE_DOWN], d)
    };
    this.setPosition = function(q, t) {
        v.x = q;
        v.y = t
    };
    this.setVisible =
        function(q) {
            v.visible = q
        };
    var y = p;
    this._init(e, l, f, n, k, p)
}

function CNextLevelPanel() {
    var e, l, f, n, k, p, m, a, b, c, d, g, h, v, y, q, t = this;
    this._init = function() {
        f = [];
        n = [];
        y = new createjs.Container;
        y.visible = !1;
        s_oStage.addChild(y);
        a = new createjs.Shape;
        a.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        a.alpha = .5;
        k = a.on("click", function() {});
        y.addChild(a);
        p = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        y.addChild(p);
        q = new createjs.Container;
        q.x = CANVAS_WIDTH / 2;
        y.addChild(q);
        var F = s_oSpriteLibrary.getSprite("bg_level_selection"),
            r = createBitmap(F);
        q.addChild(r);
        var w = F.width - 100,
            E = 140;
        r = -10 + F.width / 2;
        var u = F.height / 2 - 300;
        c = new CTLText(q, r - w / 2, u - E / 2, w, E, 70, "center", "#fff", FONT, 1, 2, 2, " ", !0, !0, !0, !1);
        w = s_oSpriteLibrary.getSprite("recipe_2");
        m = createBitmap(w);
        m.regX = w.width / 2;
        m.x = F.width / 2;
        m.y = u + 80;
        q.addChild(m);
        w = F.width - 100;
        E = 60;
        u = F.height / 2;
        b = new CTLText(q, r - w / 2, u - E / 2, w, E, 50, "center", "#fff", FONT, 1, 2, 2, " ", !0, !0, !1, !1);
        u = F.height / 2 + 100;
        d = new CTLText(q, r - w / 2, u - E / 2, w, E, 50, "center", "#fff", FONT, 1, 2, 2, " ", !0, !0, !1, !1);
        g = new CGfxButton(F.width / 2 -
            300, F.height / 2 + 270, s_oSpriteLibrary.getSprite("but_home"), q);
        g.addEventListener(ON_MOUSE_UP, this._onHome, this);
        h = new CGfxButton(F.width / 2, F.height / 2 + 270, s_oSpriteLibrary.getSprite("but_restart"), q);
        h.addEventListener(ON_MOUSE_UP, this._onRestart, this);
        v = new CGfxButton(F.width / 2 + 300, F.height / 2 + 270, s_oSpriteLibrary.getSprite("but_next"), q);
        v.addEventListener(ON_MOUSE_UP, this._onContinue, this);
        e = -F.height / 2;
        q.regX = F.width / 2;
        q.regY = F.height / 2
    };
    this.unload = function() {
        v.unload();
        g.unload();
        h.unload();
        a.off("click",
            k)
    };
    this.addEventListener = function(F, r, w) {
        f[F] = r;
        n[F] = w
    };
    this.show = function(F, r, w, E) {
        setVolume("soundtrack", 0);
        var u = playSound("win_level", 1, !1);
        if (null !== u) u.on("end", function() {
            setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME)
        });
        u = s_oSpriteLibrary.getSprite("recipe_" + (F - 1));
        m.image = u;
        m.regX = u.width / 2;
        c.refreshText(sprintf(TEXT_CLEARED, TEXT_RECIPE[F - 1]));
        b.refreshText(sprintf(TEXT_LEVEL_SCORE, w));
        d.refreshText(sprintf(TEXT_TOT_SCORE, r));
        p.alpha = 0;
        a.alpha = 0;
        q.y = e;
        y.visible = !0;
        E && (v.setVisible(!1),
            h.setX(q.regX + 250));
        createjs.Tween.get(p).to({
            alpha: 1
        }, 500);
        createjs.Tween.get(a).to({
            alpha: 1
        }, 500);
        createjs.Tween.get(q).wait(400).to({
            y: CANVAS_HEIGHT / 2
        }, 1E3, createjs.Ease.bounceOut)
    };
    this.hide = function() {
        createjs.Tween.get(q).to({
            y: e
        }, 1E3, createjs.Ease.backIn).call(function() {
            createjs.Tween.get(p).to({
                alpha: 0
            }, 400, createjs.Ease.cubicOut).call(function() {
                y.visible = !1;
                f[l] && f[l].call(n[l])
            })
        })
    };
    this._onHome = function() {
        l = ON_BACK_MENU;
        t.hide()
    };
    this._onRestart = function() {
        document.dispatchEvent(new CustomEvent("show_interlevel_ad"));
        l = ON_RESTART;
        t.hide()
    };
    this._onContinue = function() {
        document.dispatchEvent(new CustomEvent("show_interlevel_ad"));
        l = ON_NEXT;
        t.hide()
    };
    this._init()
}

function CWinPanel() {
    var e, l, f, n, k, p, m, a, b, c, d, g, h = this;
    this._init = function() {
        f = [];
        n = [];
        d = new createjs.Container;
        d.visible = !1;
        s_oStage.addChild(d);
        m = new createjs.Shape;
        m.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        m.alpha = .5;
        k = m.on("click", function() {});
        d.addChild(m);
        p = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        d.addChild(p);
        g = new createjs.Container;
        g.x = CANVAS_WIDTH / 2;
        d.addChild(g);
        var v = s_oSpriteLibrary.getSprite("bg_level_selection"),
            y = createBitmap(v);
        g.addChild(y);
        y = v.width - 100;
        var q = -10 + v.width / 2,
            t = v.height / 2 - 200;
        new CTLText(g, q - y / 2, t - 40, y, 80, 70, "center", "#fff", FONT, 1, 2, 2, TEXT_CONGRATS, !0, !0, !1, !1);
        t = v.height / 2;
        a = new CTLText(g, q - y / 2, t - 40, y, 80, 50, "center", "#fff", FONT, 1, 2, 2, " ", !0, !0, !1, !1);
        b = new CGfxButton(v.width / 2 - 250, v.height / 2 + 270, s_oSpriteLibrary.getSprite("but_home"), g);
        b.addEventListener(ON_MOUSE_UP, this._onHome, this);
        c = new CGfxButton(v.width / 2 + 250, v.height / 2 + 270, s_oSpriteLibrary.getSprite("but_restart"), g);
        c.addEventListener(ON_MOUSE_UP, this._onRestart,
            this);
        e = -v.height / 2;
        g.regX = v.width / 2;
        g.regY = v.height / 2
    };
    this.unload = function() {
        b.unload();
        c.unload();
        m.off("click", k)
    };
    this.addEventListener = function(v, y, q) {
        f[v] = y;
        n[v] = q
    };
    this.show = function(v) {
        document.dispatchEvent(new CustomEvent("share_event", {
            detail: {
                score: v
            }
        }));
        playSound("win_level", 1, !1);
        a.refreshText(sprintf(TEXT_TOT_SCORE, v));
        p.alpha = 0;
        m.alpha = 0;
        g.y = e;
        d.visible = !0;
        createjs.Tween.get(p).to({
            alpha: 1
        }, 500);
        createjs.Tween.get(m).to({
            alpha: 1
        }, 500);
        createjs.Tween.get(g).wait(400).to({
            y: CANVAS_HEIGHT /
                2
        }, 1E3, createjs.Ease.bounceOut)
    };
    this.hide = function() {
        createjs.Tween.get(g).to({
            y: e
        }, 1E3, createjs.Ease.backIn).call(function() {
            createjs.Tween.get(p).to({
                alpha: 0
            }, 400, createjs.Ease.cubicOut).call(function() {
                d.visible = !1;
                f[l] && f[l].call(n[l])
            })
        })
    };
    this._onHome = function() {
        l = ON_BACK_MENU;
        h.hide()
    };
    this._onRestart = function() {
        document.dispatchEvent(new CustomEvent("show_interlevel_ad"));
        l = ON_RESTART;
        h.hide()
    };
    this._init()
}
CTLText.prototype = {
    constructor: CTLText,
    __autofit: function() {
        if (this._bFitText) {
            for (var e = this._iFontSize;
                (this._oText.getBounds().height > this._iHeight - 2 * this._iPaddingV || this._oText.getBounds().width > this._iWidth - 2 * this._iPaddingH) && !(e--, this._oText.font = e + "px " + this._szFont, this._oText.lineHeight = Math.round(e * this._fLineHeightFactor), this.__updateY(), this.__verticalAlign(), 8 > e););
            this._iFontSize = e
        }
    },
    __verticalAlign: function() {
        if (this._bVerticalAlign) {
            var e = this._oText.getBounds().height;
            this._oText.y -=
                (e - this._iHeight) / 2 + this._iPaddingV
        }
    },
    __updateY: function() {
        this._oText.y = this._y + this._iPaddingV;
        switch (this._oText.textBaseline) {
            case "middle":
                this._oText.y += this._oText.lineHeight / 2 + (this._iFontSize * this._fLineHeightFactor - this._iFontSize)
        }
    },
    __createText: function(e) {
        this._bDebug && (this._oDebugShape = new createjs.Shape, this._oDebugShape.graphics.beginFill("rgba(255,0,0,0.5)").drawRect(this._x, this._y, this._iWidth, this._iHeight), this._oContainer.addChild(this._oDebugShape));
        this._oText = new createjs.Text(e,
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
        this.refreshText(e)
    },
    setVerticalAlign: function(e) {
        this._bVerticalAlign = e
    },
    setOutline: function(e) {
        null !== this._oText && (this._oText.outline = e)
    },
    setShadow: function(e, l, f, n) {
        null !== this._oText && (this._oText.shadow = new createjs.Shadow(e, l, f, n))
    },
    setColor: function(e) {
        this._oText.color = e
    },
    setAlpha: function(e) {
        this._oText.alpha = e
    },
    setY: function(e) {
        this._y = this._oText.y = e
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
    setFontSize: function(e) {
        this._iFontSize = e;
        this.refreshText(this._szMsg)
    },
    refreshText: function(e) {
        "" === e && (e = " ");
        null === this._oText && this.__createText(e);
        this._szMsg = this._oText.text = e;
        this._oText.font = this._iFontSize + "px " + this._szFont;
        this._oText.lineHeight = Math.round(this._iFontSize * this._fLineHeightFactor);
        this.__autofit();
        this.__updateY();
        this.__verticalAlign()
    }
};

function CTLText(e, l, f, n, k, p, m, a, b, c, d, g, h, v, y, q, t) {
    this._oContainer = e;
    this._szMsg = h;
    this._x = l;
    this._y = f;
    this._iWidth = n;
    this._iHeight = k;
    this._bMultiline = q;
    this._iFontSize = p;
    this._szAlign = m;
    this._szColor = a;
    this._szFont = b;
    this._iPaddingH = d;
    this._iPaddingV = g;
    this._bVerticalAlign = y;
    this._bFitText = v;
    this._bDebug = t;
    this._oDebugShape = null;
    this._fLineHeightFactor = c;
    this._oText = null;
    h && this.__createText(h)
}! function() {
    function e(k) {
        var p = k;
        if (n[p]) p = n[p];
        else {
            for (var m = p, a, b = [], c = 0; m;) {
                if (null !== (a = f.text.exec(m))) b.push(a[0]);
                else if (null !== (a = f.modulo.exec(m))) b.push("%");
                else if (null !== (a = f.placeholder.exec(m))) {
                    if (a[2]) {
                        c |= 1;
                        var d = [],
                            g = a[2],
                            h;
                        if (null !== (h = f.key.exec(g)))
                            for (d.push(h[1]);
                                "" !== (g = g.substring(h[0].length));)
                                if (null !== (h = f.key_access.exec(g))) d.push(h[1]);
                                else if (null !== (h = f.index_access.exec(g))) d.push(h[1]);
                        else throw new SyntaxError("[sprintf] failed to parse named argument key");
                        else throw new SyntaxError("[sprintf] failed to parse named argument key");
                        a[2] = d
                    } else c |= 2;
                    if (3 === c) throw Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
                    b.push({
                        placeholder: a[0],
                        param_no: a[1],
                        keys: a[2],
                        sign: a[3],
                        pad_char: a[4],
                        align: a[5],
                        width: a[6],
                        precision: a[7],
                        type: a[8]
                    })
                } else throw new SyntaxError("[sprintf] unexpected placeholder");
                m = m.substring(a[0].length)
            }
            p = n[p] = b
        }
        m = arguments;
        a = 1;
        b = p.length;
        d = "";
        var v, y;
        for (g = 0; g < b; g++)
            if ("string" === typeof p[g]) d += p[g];
            else if ("object" === typeof p[g]) {
            h = p[g];
            if (h.keys)
                for (c = m[a], v = 0; v < h.keys.length; v++) {
                    if (void 0 == c) throw Error(e('[sprintf] Cannot access property "%s" of undefined value "%s"', h.keys[v], h.keys[v - 1]));
                    c = c[h.keys[v]]
                } else c = h.param_no ? m[h.param_no] : m[a++];
            f.not_type.test(h.type) && f.not_primitive.test(h.type) && c instanceof Function && (c = c());
            if (f.numeric_arg.test(h.type) && "number" !== typeof c && isNaN(c)) throw new TypeError(e("[sprintf] expecting number but found %T", c));
            f.number.test(h.type) && (y = 0 <= c);
            switch (h.type) {
                case "b":
                    c = parseInt(c, 10).toString(2);
                    break;
                case "c":
                    c = String.fromCharCode(parseInt(c, 10));
                    break;
                case "d":
                case "i":
                    c = parseInt(c, 10);
                    break;
                case "j":
                    c = JSON.stringify(c, null, h.width ? parseInt(h.width) : 0);
                    break;
                case "e":
                    c = h.precision ? parseFloat(c).toExponential(h.precision) : parseFloat(c).toExponential();
                    break;
                case "f":
                    c = h.precision ? parseFloat(c).toFixed(h.precision) : parseFloat(c);
                    break;
                case "g":
                    c = h.precision ? String(Number(c.toPrecision(h.precision))) : parseFloat(c);
                    break;
                case "o":
                    c = (parseInt(c,
                        10) >>> 0).toString(8);
                    break;
                case "s":
                    c = String(c);
                    c = h.precision ? c.substring(0, h.precision) : c;
                    break;
                case "t":
                    c = String(!!c);
                    c = h.precision ? c.substring(0, h.precision) : c;
                    break;
                case "T":
                    c = Object.prototype.toString.call(c).slice(8, -1).toLowerCase();
                    c = h.precision ? c.substring(0, h.precision) : c;
                    break;
                case "u":
                    c = parseInt(c, 10) >>> 0;
                    break;
                case "v":
                    c = c.valueOf();
                    c = h.precision ? c.substring(0, h.precision) : c;
                    break;
                case "x":
                    c = (parseInt(c, 10) >>> 0).toString(16);
                    break;
                case "X":
                    c = (parseInt(c, 10) >>> 0).toString(16).toUpperCase()
            }
            if (f.json.test(h.type)) d +=
                c;
            else {
                if (!f.number.test(h.type) || y && !h.sign) var q = "";
                else q = y ? "+" : "-", c = c.toString().replace(f.sign, "");
                v = h.pad_char ? "0" === h.pad_char ? "0" : h.pad_char.charAt(1) : " ";
                var t = h.width - (q + c).length;
                t = h.width ? 0 < t ? v.repeat(t) : "" : "";
                d += h.align ? q + c + t : "0" === v ? q + t + c : t + q + c
            }
        }
        return d
    }

    function l(k, p) {
        return e.apply(null, [k].concat(p || []))
    }
    var f = {
            not_string: /[^s]/,
            not_bool: /[^t]/,
            not_type: /[^T]/,
            not_primitive: /[^v]/,
            number: /[diefg]/,
            numeric_arg: /[bcdiefguxX]/,
            json: /[j]/,
            not_json: /[^j]/,
            text: /^[^\x25]+/,
            modulo: /^\x25{2}/,
            placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
            key: /^([a-z_][a-z_\d]*)/i,
            key_access: /^\.([a-z_][a-z_\d]*)/i,
            index_access: /^\[(\d+)\]/,
            sign: /^[+-]/
        },
        n = Object.create(null);
    "undefined" !== typeof exports && (exports.sprintf = e, exports.vsprintf = l);
    "undefined" !== typeof window && (window.sprintf = e, window.vsprintf = l, "function" === typeof define && define.amd && define(function() {
        return {
            sprintf: e,
            vsprintf: l
        }
    }))
}();

function CMsgBoxIngredients(e) {
    var l, f, n, k, p;
    this._init = function(m) {
        p = new createjs.Container;
        s_oStage.addChild(p);
        n = new createjs.Shape;
        n.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        n.alpha = .5;
        l = n.on("click", function() {});
        p.addChild(n);
        k = new createjs.Container;
        p.addChild(k);
        var a = s_oSpriteLibrary.getSprite("msg_box"),
            b = createBitmap(a);
        b.regX = .5 * a.width;
        b.regY = .5 * a.height;
        k.addChild(b);
        k.x = CANVAS_WIDTH / 2;
        k.y = -a.height / 2;
        a = TEXT_INGREDIENTS;
        m === NUM_LEVELS - 2 ? a = TEXT_INGREDIENTS_PENULTIMATE :
            m === NUM_LEVELS - 1 && (a = TEXT_INGREDIENTS_LAST);
        new CTLText(k, -250, -250, 500, 200, 40, "center", "#fff", FONT, 1, 2, 2, sprintf(a, TEXT_RECIPE[m]), !0, !0, !0, !1);
        a = new createjs.Container;
        a.x = CELL_SIZE / 2;
        a.y = 10;
        k.addChild(a);
        for (var c = b = 0; c < RECIPE_INGREDIENTS[m].length; c++) {
            var d = new CIngredient(b, 0, RECIPE_INGREDIENTS[m][c], a);
            b += CELL_SIZE + 20
        }
        m = s_oSpriteLibrary.getSprite("coin_help");
        d = createBitmap(m);
        d.x = b;
        d.regX = m.width / 2;
        d.regY = m.height / 2;
        a.addChild(d);
        a.regX = a.getBounds().width / 2;
        f = new CGfxButton(0, 160, s_oSpriteLibrary.getSprite("but_yes"),
            k);
        f.addEventListener(ON_MOUSE_UP, this._onButYes, this);
        createjs.Tween.get(k).to({
            y: CANVAS_HEIGHT / 2
        }, 1E3, createjs.Ease.bounceOut)
    };
    this._onButYes = function() {
        f.unload();
        n.off("click", l);
        s_oStage.removeChild(p);
        s_oGame.startLevel()
    };
    this._init(e)
}

function CIngredient(e, l, f, n) {
    var k;
    this._init = function(p, m, a) {
        a = s_oSpriteLibrary.getSprite("ingredients_" + a);
        var b = new createjs.SpriteSheet({
            images: [a],
            frames: {
                width: a.width / 2,
                height: a.height,
                regX: a.width / 2 / 2,
                regY: a.height / 2
            },
            animations: {
                state_off: 0,
                state_on: 1
            }
        });
        k = createSprite(b, "state_on", a.width / 2 / 2, a.height / 2, a.width / 2, a.height);
        k.x = p;
        k.y = m;
        n.addChild(k)
    };
    this.unload = function() {
        n.removeChild(k)
    };
    this.setState = function(p) {
        k.gotoAndStop(p ? "state_on" : "state_off")
    };
    this.getSprite = function() {
        return k
    };
    this._init(e, l, f)
}

function extractHostname(e) {
    e = -1 < e.indexOf("://") ? e.split("/")[2] : e.split("/")[0];
    e = e.split(":")[0];
    return e = e.split("?")[0]
}

function extractRootDomain(e) {
    e = extractHostname(e);
    var l = e.split("."),
        f = l.length;
    2 < f && (e = l[f - 2] + "." + l[f - 1]);
    return e
}
var getClosestTop = function() {
        var e = window,
            l = !1;
        try {
            for (; e.parent.document !== e.document;)
                if (e.parent.document) e = e.parent;
                else {
                    l = !0;
                    break
                }
        } catch (f) {
            l = !0
        }
        return {
            topFrame: e,
            err: l
        }
    },
    getBestPageUrl = function(e) {
        var l = e.topFrame,
            f = "";
        if (e.err) try {
            try {
                f = window.top.location.href
            } catch (k) {
                var n = window.location.ancestorOrigins;
                f = n[n.length - 1]
            }
        } catch (k) {
            f = l.document.referrer
        } else f = l.location.href;
        return f
    },
    TOPFRAMEOBJ = getClosestTop(),
    PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);

function seekAndDestroy() {
    for (var e = extractRootDomain(PAGE_URL), l = [String.fromCharCode(99, 111, 100, 101, 116, 104, 105, 115, 108, 97, 98, 46, 99, 111, 109), String.fromCharCode(101, 110, 118, 97, 116, 111, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116)], f = 0; f < l.length; f++)
        if (l[f] === e) return !0;
    return !1
};