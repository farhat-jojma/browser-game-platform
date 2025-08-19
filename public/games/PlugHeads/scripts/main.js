'use strict';

function w(f, a, b, d) {
    f.v.lc(f.Ya, a, b, d, void 0)
}

function C(f, a, b, d) {
    f.v.pa ? w(f, a, b, d) : f.v.gf()._OnMessageFromDOM({
        type: "event",
        component: f.Ya,
        handler: a,
        dispatchOpts: d || null,
        data: b,
        responseId: null
    })
}

function E(f, a, b) {
    f.v.B(f.Ya, a, b)
}

function F(f, a) {
    for (const [b, d] of a) E(f, b, d)
}

function G(f) {
    f.Pb || (f.v.Se(f.be), f.Pb = !0)
}
window.Qa = class {
    constructor(f, a) {
        this.v = f;
        this.Ya = a;
        this.Pb = !1;
        this.be = () => this.Da()
    }
    bd() {}
    Da() {}
};

function J(f) {
    -1 !== f.Oa && (self.clearTimeout(f.Oa), f.Oa = -1)
}
window.Je = class {
    constructor(f, a) {
        this.Jc = f;
        this.ug = a;
        this.Oa = -1;
        this.Qb = -Infinity;
        this.ce = () => {
            this.Oa = -1;
            this.Qb = Date.now();
            this.cb = !0;
            this.Jc();
            this.cb = !1
        };
        this.Ld = this.cb = !1
    }
    c() {
        J(this);
        this.ce = this.Jc = null
    }
};
"use strict";

function K(f, a) {
    const b = a.elementId,
        d = f.cc(b, a);
    f.Y.set(b, d);
    a.isVisible || (d.style.display = "none");
    a = f.uc(d);
    a.addEventListener("focus", () => {
        L(f, "elem-focused", b)
    });
    a.addEventListener("blur", () => {
        L(f, "elem-blurred", b)
    });
    f.Kb && document.body.appendChild(d)
}

function M(f, a) {
    E(f, "get-element", b => {
        const d = f.Y.get(b.elementId);
        return a(d, b)
    })
}

function L(f, a, b, d) {
    d || (d = {});
    d.elementId = b;
    w(f, a, d)
}

function N(f, a, b) {
    b || (b = {});
    b.elementId = a;
    C(f, "click", b)
}
window.fd = class extends self.Qa {
    constructor(f, a) {
        super(f, a);
        this.Y = new Map;
        this.Kb = !0;
        F(this, [
            ["create", b => K(this, b)],
            ["destroy", b => {
                {
                    b = b.elementId;
                    const d = this.Y.get(b);
                    this.Kb && d.parentElement.removeChild(d);
                    this.Y.delete(b)
                }
            }],
            ["set-visible", b => {
                this.Kb && (this.Y.get(b.elementId).style.display = b.isVisible ? "" : "none")
            }],
            ["update-position", b => {
                if (this.Kb) {
                    var d = this.Y.get(b.elementId);
                    d.style.left = b.left + "px";
                    d.style.top = b.top + "px";
                    d.style.width = b.width + "px";
                    d.style.height = b.height + "px";
                    b = b.fontSize;
                    null !== b && (d.style.fontSize = b + "em")
                }
            }],
            ["update-state", b => {
                {
                    const d = this.Y.get(b.elementId);
                    this.Ua(d, b)
                }
            }],
            ["focus", b => {
                {
                    const d = this.uc(this.Y.get(b.elementId));
                    b.focus ? d.focus() : d.blur()
                }
            }],
            ["set-css-style", b => {
                this.Y.get(b.elementId).style[b.prop] = b.val
            }],
            ["set-attribute", b => {
                this.Y.get(b.elementId).setAttribute(b.name, b.val)
            }],
            ["remove-attribute", b => {
                this.Y.get(b.elementId).removeAttribute(b.name)
            }]
        ]);
        M(this, b => b)
    }
    cc() {
        throw Error("required override");
    }
    Ua() {
        throw Error("required override");
    }
    uc(f) {
        return f
    }
};
"use strict"; {
    const f = /(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent);

    function a(e, c) {
        const h = document.createElement("script");
        h.async = !1;
        "module" === c && (h.type = "module");
        if (e.Eg) h.textContent = e.Hg, document.head.appendChild(h);
        else return new Promise((k, l) => {
            h.onload = k;
            h.onerror = l;
            h.src = e;
            document.head.appendChild(h)
        })
    }
    let b = !1,
        d = !1;

    function g() {
        if (!b) {
            try {
                new Worker("blob://", {
                    get type() {
                        d = !0
                    }
                })
            } catch (e) {}
            b = !0
        }
        return d
    }
    let m = new Audio;
    const p = {
        "audio/webm; codecs=opus": !!m.canPlayType("audio/webm; codecs=opus"),
        "audio/ogg; codecs=opus": !!m.canPlayType("audio/ogg; codecs=opus"),
        "audio/webm; codecs=vorbis": !!m.canPlayType("audio/webm; codecs=vorbis"),
        "audio/ogg; codecs=vorbis": !!m.canPlayType("audio/ogg; codecs=vorbis"),
        "audio/mp4": !!m.canPlayType("audio/mp4"),
        "audio/mpeg": !!m.canPlayType("audio/mpeg")
    };
    m = null;
    async function v(e) {
        e = await z(e);
        return (new TextDecoder("utf-8")).decode(e)
    }

    function z(e) {
        return new Promise((c, h) => {
            const k = new FileReader;
            k.onload = l => c(l.target.result);
            k.onerror = l => h(l);
            k.readAsArrayBuffer(e)
        })
    }
    const A = [];
    let t = 0;
    window.RealFile = window.File;
    const u = [],
        B = new Map,
        x = new Map;
    let H = 0;
    const D = [];
    self.runOnStartup = function(e) {
        if ("function" !== typeof e) throw Error("runOnStartup called without a function");
        D.push(e)
    };
    const I = new Set(["cordova", "playable-ad", "instant-games"]);
    window.sa = class e {
        constructor(c) {
            this.pa = c.Jg;
            this.na = null;
            this.D = "";
            this.Yb = c.Gg;
            this.da = c.fe;
            this.rb = {};
            this.Ha = this.qb = null;
            this.Nb = [];
            this.fb = this.J = this.Ma = null;
            this.La = -1;
            this.zg = () => this.Gf();
            this.Ka = [];
            this.L = c.de;
            !this.pa || "undefined" !== typeof OffscreenCanvas && navigator.userActivation &&
                ("module" !== this.da || g()) || (this.pa = !1);
            I.has(this.L) && this.pa && (console.warn("[C3 runtime] Worker mode is enabled and supported, but is disabled in WebViews due to crbug.com/923007. Reverting to DOM mode."), this.pa = !1);
            this.Sb = this.ia = null;
            "html5" !== this.L && "playable-ad" !== this.L || "file" !== location.protocol.substr(0, 4) || alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)");
            this.B("runtime", "cordova-fetch-local-file",
                h => this.qf(h));
            this.B("runtime", "create-job-worker", () => this.rf());
            "cordova" === this.L ? document.addEventListener("deviceready", () => this.xd(c)) : this.xd(c)
        }
        c() {
            this.rc();
            this.na && (this.na = this.na.onmessage = null);
            this.qb && (this.qb.terminate(), this.qb = null);
            this.Ha && (this.Ha.c(), this.Ha = null);
            this.J && (this.J.parentElement.removeChild(this.J), this.J = null)
        }
        ld() {
            return f && "cordova" === this.L
        }
        xb() {
            return f && I.has(this.L) || navigator.standalone
        }
        async xd(c) {
            if ("playable-ad" === this.L) {
                this.ia = self.c3_base64files;
                this.Sb = {};
                await this.Xe();
                for (let k = 0, l = c.Pa.length; k < l; ++k) {
                    var h = c.Pa[k].toLowerCase();
                    this.Sb.hasOwnProperty(h) ? c.Pa[k] = {
                        Eg: !0,
                        Hg: this.Sb[h]
                    } : this.ia.hasOwnProperty(h) && (c.Pa[k] = URL.createObjectURL(this.ia[h]))
                }
            }
            c.Ag ? this.D = c.Ag : (h = location.origin, this.D = ("null" === h ? "file:///" : h) + location.pathname, h = this.D.lastIndexOf("/"), -1 !== h && (this.D = this.D.substr(0, h + 1)));
            c.Lg && (this.rb = c.Lg);
            h = new MessageChannel;
            this.na = h.port1;
            this.na.onmessage = k => this._OnMessageFromRuntime(k.data);
            window.c3_addPortMessageHandler &&
                window.c3_addPortMessageHandler(k => this.Cf(k));
            this.fb = new self.Fe(this);
            await O(this.fb);
            this.md();
            "object" === typeof window.StatusBar && window.StatusBar.hide();
            "object" === typeof window.AndroidFullScreen && window.AndroidFullScreen.immersiveMode();
            this.pa ? await this.jf(c, h.port2) : await this.hf(c, h.port2)
        }
        vc(c) {
            c = this.rb.hasOwnProperty(c) ? this.rb[c] : c.endsWith("/workermain.js") && this.rb.hasOwnProperty("workermain.js") ? this.rb["workermain.js"] : "playable-ad" === this.L && this.ia.hasOwnProperty(c.toLowerCase()) ?
                this.ia[c.toLowerCase()] : c;
            c instanceof Blob && (c = URL.createObjectURL(c));
            return c
        }
        async dc(c, h, k) {
            if (c.startsWith("blob:")) return new Worker(c, k);
            if (this.ld() && "file:" === location.protocol) return c = await this.tb(this.Yb + c), new Worker(URL.createObjectURL(new Blob([c], {
                type: "application/javascript"
            })), k);
            c = new URL(c, h);
            if (location.origin !== c.origin) {
                c = await fetch(c);
                if (!c.ok) throw Error("failed to fetch worker script");
                c = await c.blob();
                return new Worker(URL.createObjectURL(c), k)
            }
            return new Worker(c,
                k)
        }
        va() {
            return Math.max(window.innerWidth, 1)
        }
        ua() {
            return Math.max(window.innerHeight, 1)
        }
        md() {
            if (this.xb()) {
                const c = document.documentElement.style,
                    h = document.body.style,
                    k = window.innerWidth < window.innerHeight,
                    l = k ? window.screen.width : window.screen.height;
                h.height = c.height = (k ? window.screen.height : window.screen.width) + "px";
                h.width = c.width = l + "px"
            }
        }
        vd(c) {
            var h = this.fb;
            return {
                baseUrl: this.D,
                windowInnerWidth: this.va(),
                windowInnerHeight: this.ua(),
                devicePixelRatio: window.devicePixelRatio,
                isFullscreen: e.kc(),
                projectData: c.Qg,
                scriptsType: c.fe,
                previewImageBlobs: window.cr_previewImageBlobs || this.ia,
                previewProjectFileBlobs: window.cr_previewProjectFileBlobs,
                previewProjectFileUrls: window.cr_previewProjectFiles,
                swClientId: window.Og || "",
                exportType: c.de,
                isDebug: -1 < self.location.search.indexOf("debug"),
                ife: !!self.Pg,
                jobScheduler: {
                    inputPort: h.Pc,
                    outputPort: h.Wc,
                    maxNumWorkers: h.wg
                },
                supportedAudioFormats: p,
                opusWasmScriptUrl: window.cr_opusWasmScriptUrl || this.Yb + "opus.wasm.js",
                opusWasmBinaryUrl: window.cr_opusWasmBinaryUrl ||
                    this.Yb + "opus.wasm.wasm",
                isiOSCordova: this.ld(),
                isiOSWebView: this.xb(),
                isFBInstantAvailable: "undefined" !== typeof self.FBInstant
            }
        }
        async jf(c, h) {
            var k = this.vc(c.Kg);
            this.qb = await this.dc(k, this.D, {
                type: this.da,
                name: "Runtime"
            });
            this.J = document.createElement("canvas");
            this.J.style.display = "none";
            k = this.J.transferControlToOffscreen();
            document.body.appendChild(this.J);
            window.c3canvas = this.J;
            this.qb.postMessage(Object.assign(this.vd(c), {
                type: "init-runtime",
                isInWorker: !0,
                messagePort: h,
                canvas: k,
                workerDependencyScripts: c.ad || [],
                engineScripts: c.Pa,
                projectScripts: c.sb,
                mainProjectScript: c.ee,
                projectScriptsStatus: self.C3_ProjectScriptsStatus
            }), [h, k, ...P(this.fb)]);
            this.Nb = u.map(l => new l(this));
            this.ud();
            self.c3_callFunction = (l, n) => this.Ma.kf(l, n);
            "preview" === this.L && (self.goToLastErrorScript = () => this.lc("runtime", "go-to-last-error-script"))
        }
        async hf(c, h) {
            this.J = document.createElement("canvas");
            this.J.style.display = "none";
            document.body.appendChild(this.J);
            window.c3canvas = this.J;
            this.Nb = u.map(n => new n(this));
            this.ud();
            var k =
                c.Pa.map(n => "string" === typeof n ? (new URL(n, this.D)).toString() : n);
            Array.isArray(c.ad) && k.unshift(...c.ad);
            k = await Promise.all(k.map(n => this.zc(n, this.da)));
            await Promise.all(k.map(n => a(n, this.da)));
            const l = self.C3_ProjectScriptsStatus;
            if ("module" === this.da) {
                k = c.ee;
                const n = c.sb;
                for (let [r, q] of n)
                    if (q || (q = r), r === k) try {
                        q = await this.zc(q, this.da), await a(q, this.da), "preview" !== this.L || l[r] || this.Fd(r, "main script did not run to completion")
                    } catch (y) {
                        this.Fd(r, y)
                    } else if ("scriptsInEvents.js" === r || r.endsWith("/scriptsInEvents.js")) q =
                        await this.zc(q, this.da), await a(q, this.da)
            } else if (c.sb && 0 < c.sb.length) try {
                if (await Promise.all(c.sb.map(n => a(n[1], this.da))), Object.values(l).some(n => !n)) {
                    self.setTimeout(() => this.Gd(l), 100);
                    return
                }
            } catch (n) {
                console.error("[Preview] Error loading project scripts: ", n);
                self.setTimeout(() => this.Gd(l), 100);
                return
            }
            "preview" === this.L && "object" !== typeof self.Mg.Ng ? (this.Wa(), console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."), alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")) :
                (c = Object.assign(this.vd(c), {
                    isInWorker: !1,
                    messagePort: h,
                    canvas: this.J,
                    runOnStartupFunctions: D
                }), this.zd(), this.Ha = self.C3_CreateRuntime(c), await self.C3_InitRuntime(this.Ha, c))
        }
        Gd(c) {
            this.Wa();
            c = `Failed to load project script '${Object.entries(c).filter(h=>!h[1]).map(h=>h[0])[0]}'. Check all your JavaScript code has valid syntax.`;
            console.error("[Preview] " + c);
            alert(c)
        }
        Fd(c, h) {
            this.Wa();
            console.error(`[Preview] Failed to load project main script (${c}): `, h);
            alert(`Failed to load project main script (${c}). Check all your JavaScript code has valid syntax. Press F12 and check the console for error details.`)
        }
        zd() {
            this.Wa()
        }
        Wa() {
            const c =
                window.Bg;
            c && (c.parentElement.removeChild(c), window.Bg = null)
        }
        async rf() {
            const c = await Q(this.fb);
            return {
                outputPort: c,
                transferables: [c]
            }
        }
        gf() {
            if (this.pa) throw Error("not available in worker mode");
            return this.Ha
        }
        lc(c, h, k, l, n) {
            this.na.postMessage({
                type: "event",
                component: c,
                handler: h,
                dispatchOpts: l || null,
                data: k,
                responseId: null
            }, n)
        }
        nd(c, h, k, l, n) {
            const r = H++,
                q = new Promise((y, T) => {
                    x.set(r, {
                        resolve: y,
                        reject: T
                    })
                });
            this.na.postMessage({
                    type: "event",
                    component: c,
                    handler: h,
                    dispatchOpts: l || null,
                    data: k,
                    responseId: r
                },
                n);
            return q
        }["_OnMessageFromRuntime"](c) {
            const h = c.type;
            if ("event" === h) return this.wf(c);
            if ("result" === h) this.Jf(c);
            else if ("runtime-ready" === h) this.Kf();
            else if ("alert-error" === h) this.Wa(), alert(c.message);
            else if ("creating-runtime" === h) this.zd();
            else throw Error(`unknown message '${h}'`);
        }
        wf(c) {
            const h = c.component,
                k = c.handler,
                l = c.data,
                n = c.responseId;
            if (c = B.get(h))
                if (c = c.get(k)) {
                    var r = null;
                    try {
                        r = c(l)
                    } catch (q) {
                        console.error(`Exception in '${h}' handler '${k}':`, q);
                        null !== n && this.Fb(n, !1, "" + q);
                        return
                    }
                    if (null ===
                        n) return r;
                    r && r.then ? r.then(q => this.Fb(n, !0, q)).catch(q => {
                        console.error(`Rejection from '${h}' handler '${k}':`, q);
                        this.Fb(n, !1, "" + q)
                    }) : this.Fb(n, !0, r)
                } else console.warn(`[DOM] No handler '${k}' for component '${h}'`);
            else console.warn(`[DOM] No event handlers for component '${h}'`)
        }
        Fb(c, h, k) {
            let l;
            k && k.transferables && (l = k.transferables);
            this.na.postMessage({
                type: "result",
                responseId: c,
                isOk: h,
                result: k
            }, l)
        }
        Jf(c) {
            const h = c.responseId,
                k = c.isOk;
            c = c.result;
            const l = x.get(h);
            k ? l.resolve(c) : l.reject(c);
            x.delete(h)
        }
        B(c,
            h, k) {
            let l = B.get(c);
            l || (l = new Map, B.set(c, l));
            if (l.has(h)) throw Error(`[DOM] Component '${c}' already has handler '${h}'`);
            l.set(h, k)
        }
        static Aa(c) {
            if (u.includes(c)) throw Error("DOM handler already added");
            u.push(c)
        }
        ud() {
            for (const c of this.Nb)
                if ("runtime" === c.Ya) {
                    this.Ma = c;
                    return
                }
            throw Error("cannot find runtime DOM handler");
        }
        Cf(c) {
            this.lc("debugger", "message", c)
        }
        Kf() {
            for (const c of this.Nb) c.bd()
        }
        static kc() {
            return !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement)
        }
        Se(c) {
            this.Ka.push(c);
            this.Hc()
        }
        Vf(c) {
            c = this.Ka.indexOf(c);
            if (-1 === c) throw Error("invalid callback");
            this.Ka.splice(c, 1);
            this.Ka.length || this.rc()
        }
        Hc() {
            -1 === this.La && this.Ka.length && (this.La = requestAnimationFrame(this.zg))
        }
        rc() {
            -1 !== this.La && (cancelAnimationFrame(this.La), this.La = -1)
        }
        Gf() {
            this.La = -1;
            for (const c of this.Ka) c();
            this.Hc()
        }
        ta(c) {
            this.Ma.ta(c)
        }
        Ca(c) {
            this.Ma.Ca(c)
        }
        Gc() {
            this.Ma.Gc()
        }
        Ab(c) {
            this.Ma.Ab(c)
        }
        Ee() {
            return !!p["audio/webm; codecs=opus"]
        }
        async sg(c) {
            c = await this.nd("runtime", "opus-decode", {
                    arrayBuffer: c
                },
                null, [c]);
            return new Float32Array(c)
        }
        De(c) {
            return /^(?:[a-z\-]+:)?\/\//.test(c) || "data:" === c.substr(0, 5) || "blob:" === c.substr(0, 5)
        }
        kd(c) {
            return !this.De(c)
        }
        async zc(c, h) {
            return "cordova" === this.L && "module" === h && (c.startsWith("file:") || "file:" === location.protocol && this.kd(c)) ? (c.startsWith(this.D) && (c = c.substr(this.D.length)), c = await this.tb(c), URL.createObjectURL(new Blob([c], {
                type: "application/javascript"
            }))) : c
        }
        async qf(c) {
            const h = c.filename;
            switch (c.as) {
                case "text":
                    return await this.we(h);
                case "buffer":
                    return await this.tb(h);
                default:
                    throw Error("unsupported type");
            }
        }
        ed(c) {
            const h = window.cordova.file.applicationDirectory + "www/" + c.toLowerCase();
            return new Promise((k, l) => {
                window.resolveLocalFileSystemURL(h, n => {
                    n.file(k, l)
                }, l)
            })
        }
        async we(c) {
            c = await this.ed(c);
            return await v(c)
        }
        sc() {
            if (A.length && !(8 <= t)) {
                t++;
                var c = A.shift();
                this.Ye(c.filename, c.Ig, c.Dg)
            }
        }
        tb(c) {
            return new Promise((h, k) => {
                A.push({
                    filename: c,
                    Ig: l => {
                        t--;
                        this.sc();
                        h(l)
                    },
                    Dg: l => {
                        t--;
                        this.sc();
                        k(l)
                    }
                });
                this.sc()
            })
        }
        async Ye(c, h, k) {
            try {
                const l = await this.ed(c),
                    n = await z(l);
                h(n)
            } catch (l) {
                k(l)
            }
        }
        async Xe() {
            const c = [];
            for (const [h, k] of Object.entries(this.ia)) c.push(this.We(h, k));
            await Promise.all(c)
        }
        async We(c, h) {
            if ("object" === typeof h) this.ia[c] = new Blob([h.str], {
                type: h.type
            }), this.Sb[c] = h.str;
            else {
                let k = await this.ef(h);
                k || (k = this.$e(h));
                this.ia[c] = k
            }
        }
        async ef(c) {
            try {
                return await (await fetch(c)).blob()
            } catch (h) {
                return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",
                    h), null
            }
        }
        $e(c) {
            c = this.Pf(c);
            return this.Ve(c.data, c.Fg)
        }
        Pf(c) {
            var h = c.indexOf(",");
            if (0 > h) throw new URIError("expected comma in data: uri");
            var k = c.substring(h + 1);
            h = c.substring(5, h).split(";");
            c = h[0] || "";
            const l = h[2];
            k = "base64" === h[1] || "base64" === l ? atob(k) : decodeURIComponent(k);
            return {
                Fg: c,
                data: k
            }
        }
        Ve(c, h) {
            var k = c.length;
            let l = k >> 2,
                n = new Uint8Array(k),
                r = new Uint32Array(n.buffer, 0, l),
                q, y;
            for (y = q = 0; q < l; ++q) r[q] = c.charCodeAt(y++) | c.charCodeAt(y++) << 8 | c.charCodeAt(y++) << 16 | c.charCodeAt(y++) << 24;
            for (k &=
                3; k--;) n[y] = c.charCodeAt(y), ++y;
            return new Blob([n], {
                type: h
            })
        }
    }
}
"use strict"; {
    const f = self.sa;

    function a(e) {
        return e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || e.originalEvent && e.originalEvent.sourceCapabilities && e.originalEvent.sourceCapabilities.firesTouchEvents
    }
    const b = new Map([
            ["OSLeft", "MetaLeft"],
            ["OSRight", "MetaRight"]
        ]),
        d = {
            dispatchRuntimeEvent: !0,
            dispatchUserScriptEvent: !0
        },
        g = {
            dispatchUserScriptEvent: !0
        },
        m = {
            dispatchRuntimeEvent: !0
        };

    function p(e) {
        return new Promise((c, h) => {
            const k = document.createElement("link");
            k.onload = () => c(k);
            k.onerror = l => h(l);
            k.rel =
                "stylesheet";
            k.href = e;
            document.head.appendChild(k)
        })
    }

    function v(e) {
        return new Promise((c, h) => {
            const k = new Image;
            k.onload = () => c(k);
            k.onerror = l => h(l);
            k.src = e
        })
    }
    async function z(e) {
        e = URL.createObjectURL(e);
        try {
            return await v(e)
        } finally {
            URL.revokeObjectURL(e)
        }
    }

    function A(e) {
        return new Promise((c, h) => {
            let k = new FileReader;
            k.onload = l => c(l.target.result);
            k.onerror = l => h(l);
            k.readAsText(e)
        })
    }
    async function t(e, c, h) {
        if (!/firefox/i.test(navigator.userAgent)) return await z(e);
        var k = await A(e);
        k = (new DOMParser).parseFromString(k,
            "image/svg+xml");
        const l = k.documentElement;
        if (l.hasAttribute("width") && l.hasAttribute("height")) {
            const n = l.getAttribute("width"),
                r = l.getAttribute("height");
            if (!n.includes("%") && !r.includes("%")) return await z(e)
        }
        l.setAttribute("width", c + "px");
        l.setAttribute("height", h + "px");
        k = (new XMLSerializer).serializeToString(k);
        e = new Blob([k], {
            type: "image/svg+xml"
        });
        return await z(e)
    }

    function u(e) {
        do {
            if (e.parentNode && e.hasAttribute("contenteditable")) return !0;
            e = e.parentNode
        } while (e);
        return !1
    }
    const B = new Set(["canvas",
        "body", "html"
    ]);

    function x(e) {
        B.has(e.target.tagName.toLowerCase()) && e.preventDefault()
    }

    function H(e) {
        (e.metaKey || e.ctrlKey) && e.preventDefault()
    }
    self.C3_GetSvgImageSize = async function(e) {
        e = await z(e);
        if (0 < e.width && 0 < e.height) return [e.width, e.height]; {
            e.style.position = "absolute";
            e.style.left = "0px";
            e.style.top = "0px";
            e.style.visibility = "hidden";
            document.body.appendChild(e);
            const c = e.getBoundingClientRect();
            document.body.removeChild(e);
            return [c.width, c.height]
        }
    };
    self.C3_RasterSvgImageBlob = async function(e,
        c, h, k, l) {
        e = await t(e, c, h);
        const n = document.createElement("canvas");
        n.width = k;
        n.height = l;
        n.getContext("2d").drawImage(e, 0, 0, c, h);
        return n
    };
    let D = !1;
    document.addEventListener("pause", () => D = !0);
    document.addEventListener("resume", () => D = !1);

    function I() {
        try {
            return window.parent && window.parent.document.hasFocus()
        } catch (e) {
            return !1
        }
    }
    f.Aa(class extends self.Qa {
        constructor(e) {
            super(e, "runtime");
            this.Qd = !0;
            this.Na = -1;
            this.Yc = "any";
            this.Hd = this.Id = !1;
            this.Sc = this.nb = this.xa = null;
            e.B("canvas", "update-size", k =>
                this.Nf(k));
            e.B("runtime", "invoke-download", k => this.Af(k));
            e.B("runtime", "raster-svg-image", k => this.Hf(k));
            e.B("runtime", "get-svg-image-size", k => this.yf(k));
            e.B("runtime", "set-target-orientation", k => this.Lf(k));
            e.B("runtime", "register-sw", () => this.If());
            e.B("runtime", "post-to-debugger", k => this.Bd(k));
            e.B("runtime", "go-to-script", k => this.Bd(k));
            e.B("runtime", "before-start-ticking", () => this.pf());
            e.B("runtime", "debug-highlight", k => this.sf(k));
            e.B("runtime", "enable-device-orientation", () => this.Ue());
            e.B("runtime", "enable-device-motion", () => this.Te());
            e.B("runtime", "add-stylesheet", k => this.mf(k));
            e.B("runtime", "alert", k => this.nf(k));
            e.B("runtime", "hide-cordova-splash", () => this.zf());
            const c = new Set(["input", "textarea", "datalist"]);
            window.addEventListener("contextmenu", k => {
                const l = k.target;
                c.has(l.tagName.toLowerCase()) || u(l) || k.preventDefault()
            });
            const h = e.J;
            window.addEventListener("selectstart", x);
            window.addEventListener("gesturehold", x);
            h.addEventListener("selectstart", x);
            h.addEventListener("gesturehold",
                x);
            window.addEventListener("touchstart", x, {
                passive: !1
            });
            "undefined" !== typeof PointerEvent ? (window.addEventListener("pointerdown", x, {
                passive: !1
            }), h.addEventListener("pointerdown", x)) : h.addEventListener("touchstart", x);
            this.kb = 0;
            window.addEventListener("mousedown", k => {
                1 === k.button && k.preventDefault()
            });
            window.addEventListener("mousewheel", H, {
                passive: !1
            });
            window.addEventListener("wheel", H, {
                passive: !1
            });
            window.addEventListener("resize", () => this.Of());
            e.xb() && window.addEventListener("focusout", () => {
                {
                    const n =
                        document.activeElement;
                    if (n) {
                        var k = n.tagName.toLowerCase();
                        var l = new Set("email number password search tel text url".split(" "));
                        k = "textarea" === k ? !0 : "input" === k ? l.has(n.type.toLowerCase() || "text") : u(n)
                    } else k = !1
                }
                k || (document.scrollingElement.scrollTop = 0)
            });
            this.Ia = new Set;
            this.Tb = new WeakSet;
            this.ma = !1
        }
        pf() {
            "cordova" === this.v.L ? (document.addEventListener("pause", () => this.Fc(!0)), document.addEventListener("resume", () => this.Fc(!1))) : document.addEventListener("visibilitychange", () => this.Fc(document.hidden));
            return {
                isSuspended: !(!document.hidden && !D)
            }
        }
        bd() {
            window.addEventListener("focus", () => this.Gb("window-focus"));
            window.addEventListener("blur", () => {
                this.Gb("window-blur", {
                    parentHasFocus: I()
                });
                this.kb = 0
            });
            window.addEventListener("fullscreenchange", () => this.Bc());
            window.addEventListener("webkitfullscreenchange", () => this.Bc());
            window.addEventListener("mozfullscreenchange", () => this.Bc());
            window.addEventListener("fullscreenerror", c => this.Cc(c));
            window.addEventListener("webkitfullscreenerror", c => this.Cc(c));
            window.addEventListener("mozfullscreenerror", c => this.Cc(c));
            window.addEventListener("keydown", c => this.Ad("keydown", c));
            window.addEventListener("keyup", c => this.Ad("keyup", c));
            window.addEventListener("dblclick", c => this.Dc("dblclick", c, d));
            window.addEventListener("wheel", c => this.Ef(c));
            "undefined" !== typeof PointerEvent ? (window.addEventListener("pointerdown", c => {
                this.wc(c);
                this.Va("pointerdown", c)
            }), this.v.pa && "undefined" !== typeof window.onpointerrawupdate && self === self.top ? (this.nb = new self.Je(() => this.cf(),
                5), this.nb.Ld = !0, window.addEventListener("pointerrawupdate", c => this.Ff(c))) : window.addEventListener("pointermove", c => this.Va("pointermove", c)), window.addEventListener("pointerup", c => this.Va("pointerup", c)), window.addEventListener("pointercancel", c => this.Va("pointercancel", c))) : (window.addEventListener("mousedown", c => {
                this.wc(c);
                this.Ec("pointerdown", c)
            }), window.addEventListener("mousemove", c => this.Ec("pointermove", c)), window.addEventListener("mouseup", c => this.Ec("pointerup", c)), window.addEventListener("touchstart",
                c => {
                    this.wc(c);
                    this.Eb("pointerdown", c)
                }), window.addEventListener("touchmove", c => this.Eb("pointermove", c)), window.addEventListener("touchend", c => this.Eb("pointerup", c)), window.addEventListener("touchcancel", c => this.Eb("pointercancel", c)));
            const e = () => this.Gc();
            window.addEventListener("pointerup", e, !0);
            window.addEventListener("touchend", e, !0);
            window.addEventListener("click", e, !0);
            window.addEventListener("keydown", e, !0);
            window.addEventListener("gamepadconnected", e, !0)
        }
        Gb(e, c) {
            w(this, e, c || null, m)
        }
        va() {
            return this.v.va()
        }
        ua() {
            return this.v.ua()
        }
        Of() {
            const e =
                this.va(),
                c = this.ua();
            this.Gb("window-resize", {
                innerWidth: e,
                innerHeight: c,
                devicePixelRatio: window.devicePixelRatio
            });
            this.v.xb() && (-1 !== this.Na && clearTimeout(this.Na), this.Cd(e, c, 0))
        }
        Wf(e, c, h) {
            -1 !== this.Na && clearTimeout(this.Na);
            this.Na = setTimeout(() => this.Cd(e, c, h), 48)
        }
        Cd(e, c, h) {
            const k = this.va(),
                l = this.ua();
            this.Na = -1;
            k != e || l != c ? this.Gb("window-resize", {
                innerWidth: k,
                innerHeight: l,
                devicePixelRatio: window.devicePixelRatio
            }) : 10 > h && this.Wf(k, l, h + 1)
        }
        Lf(e) {
            this.Yc = e.targetOrientation
        }
        og() {
            const e = this.Yc;
            if (screen.orientation && screen.orientation.lock) screen.orientation.lock(e).catch(c => console.warn("[Construct 3] Failed to lock orientation: ", c));
            else try {
                let c = !1;
                screen.lockOrientation ? c = screen.lockOrientation(e) : screen.webkitLockOrientation ? c = screen.webkitLockOrientation(e) : screen.mozLockOrientation ? c = screen.mozLockOrientation(e) : screen.msLockOrientation && (c = screen.msLockOrientation(e));
                c || console.warn("[Construct 3] Failed to lock orientation")
            } catch (c) {
                console.warn("[Construct 3] Failed to lock orientation: ",
                    c)
            }
        }
        Bc() {
            const e = f.kc();
            e && "any" !== this.Yc && this.og();
            w(this, "fullscreenchange", {
                isFullscreen: e,
                innerWidth: this.va(),
                innerHeight: this.ua()
            })
        }
        Cc(e) {
            console.warn("[Construct 3] Fullscreen request failed: ", e);
            w(this, "fullscreenerror", {
                isFullscreen: f.kc(),
                innerWidth: this.va(),
                innerHeight: this.ua()
            })
        }
        Fc(e) {
            e ? this.v.rc() : this.v.Hc();
            w(this, "visibilitychange", {
                hidden: e
            })
        }
        Ad(e, c) {
            "Backspace" === c.key && x(c);
            const h = b.get(c.code) || c.code;
            C(this, e, {
                code: h,
                key: c.key,
                which: c.which,
                repeat: c.repeat,
                altKey: c.altKey,
                ctrlKey: c.ctrlKey,
                metaKey: c.metaKey,
                shiftKey: c.shiftKey,
                timeStamp: c.timeStamp
            }, d)
        }
        Ef(e) {
            w(this, "wheel", {
                clientX: e.clientX,
                clientY: e.clientY,
                pageX: e.pageX,
                pageY: e.pageY,
                deltaX: e.deltaX,
                deltaY: e.deltaY,
                deltaZ: e.deltaZ,
                deltaMode: e.deltaMode,
                timeStamp: e.timeStamp
            }, d)
        }
        Dc(e, c, h) {
            a(c) || C(this, e, {
                button: c.button,
                buttons: c.buttons,
                clientX: c.clientX,
                clientY: c.clientY,
                pageX: c.pageX,
                pageY: c.pageY,
                timeStamp: c.timeStamp
            }, h)
        }
        Ec(e, c) {
            if (!a(c)) {
                var h = this.kb;
                "pointerdown" === e && 0 !== h ? e = "pointermove" : "pointerup" ===
                    e && 0 !== c.buttons && (e = "pointermove");
                C(this, e, {
                    pointerId: 1,
                    pointerType: "mouse",
                    button: c.button,
                    buttons: c.buttons,
                    lastButtons: h,
                    clientX: c.clientX,
                    clientY: c.clientY,
                    pageX: c.pageX,
                    pageY: c.pageY,
                    width: 0,
                    height: 0,
                    pressure: 0,
                    tangentialPressure: 0,
                    tiltX: 0,
                    tiltY: 0,
                    twist: 0,
                    timeStamp: c.timeStamp
                }, d);
                this.kb = c.buttons;
                this.Dc(c.type, c, g)
            }
        }
        Va(e, c) {
            if (this.nb && "pointermove" !== e) {
                var h = this.nb;
                h.cb || (J(h), h.Qb = Date.now())
            }
            h = 0;
            "mouse" === c.pointerType && (h = this.kb);
            C(this, e, {
                pointerId: c.pointerId,
                pointerType: c.pointerType,
                button: c.button,
                buttons: c.buttons,
                lastButtons: h,
                clientX: c.clientX,
                clientY: c.clientY,
                pageX: c.pageX,
                pageY: c.pageY,
                width: c.width || 0,
                height: c.height || 0,
                pressure: c.pressure || 0,
                tangentialPressure: c.tangentialPressure || 0,
                tiltX: c.tiltX || 0,
                tiltY: c.tiltY || 0,
                twist: c.twist || 0,
                timeStamp: c.timeStamp
            }, d);
            "mouse" === c.pointerType && (h = "mousemove", "pointerdown" === e ? h = "mousedown" : "pointerup" === e && (h = "mouseup"), this.Dc(h, c, g), this.kb = c.buttons)
        }
        Ff(e) {
            this.Sc = e;
            e = this.nb;
            if (-1 === e.Oa) {
                var c = Date.now(),
                    h = c - e.Qb,
                    k = e.ug;
                h >= k && e.Ld ? (e.Qb = c, e.cb = !0, e.Jc(), e.cb = !1) : e.Oa = self.setTimeout(e.ce, Math.max(k - h, 4))
            }
        }
        cf() {
            this.Va("pointermove", this.Sc);
            this.Sc = null
        }
        Eb(e, c) {
            for (let h = 0, k = c.changedTouches.length; h < k; ++h) {
                const l = c.changedTouches[h];
                C(this, e, {
                    pointerId: l.identifier,
                    pointerType: "touch",
                    button: 0,
                    buttons: 0,
                    lastButtons: 0,
                    clientX: l.clientX,
                    clientY: l.clientY,
                    pageX: l.pageX,
                    pageY: l.pageY,
                    width: 2 * (l.radiusX || l.webkitRadiusX || 0),
                    height: 2 * (l.radiusY || l.webkitRadiusY || 0),
                    pressure: l.force || l.webkitForce || 0,
                    tangentialPressure: 0,
                    tiltX: 0,
                    tiltY: 0,
                    twist: l.rotationAngle || 0,
                    timeStamp: c.timeStamp
                }, d)
            }
        }
        wc(e) {
            window !== window.top && window.focus();
            this.yd(e.target) && document.activeElement && !this.yd(document.activeElement) && document.activeElement.blur()
        }
        yd(e) {
            return !e || e === document || e === window || e === document.body || "canvas" === e.tagName.toLowerCase()
        }
        Ue() {
            this.Id || (this.Id = !0, window.addEventListener("deviceorientation", e => this.uf(e)), window.addEventListener("deviceorientationabsolute", e => this.vf(e)))
        }
        Te() {
            this.Hd || (this.Hd = !0, window.addEventListener("devicemotion",
                e => this.tf(e)))
        }
        uf(e) {
            w(this, "deviceorientation", {
                absolute: !!e.absolute,
                alpha: e.alpha || 0,
                beta: e.beta || 0,
                gamma: e.gamma || 0,
                timeStamp: e.timeStamp,
                webkitCompassHeading: e.webkitCompassHeading,
                webkitCompassAccuracy: e.webkitCompassAccuracy
            }, d)
        }
        vf(e) {
            w(this, "deviceorientationabsolute", {
                absolute: !!e.absolute,
                alpha: e.alpha || 0,
                beta: e.beta || 0,
                gamma: e.gamma || 0,
                timeStamp: e.timeStamp
            }, d)
        }
        tf(e) {
            let c = null;
            var h = e.acceleration;
            h && (c = {
                x: h.x || 0,
                y: h.y || 0,
                z: h.z || 0
            });
            h = null;
            var k = e.accelerationIncludingGravity;
            k && (h = {
                x: k.x ||
                    0,
                y: k.y || 0,
                z: k.z || 0
            });
            k = null;
            const l = e.rotationRate;
            l && (k = {
                alpha: l.alpha || 0,
                beta: l.beta || 0,
                gamma: l.gamma || 0
            });
            w(this, "devicemotion", {
                acceleration: c,
                accelerationIncludingGravity: h,
                rotationRate: k,
                interval: e.interval,
                timeStamp: e.timeStamp
            }, d)
        }
        Nf(e) {
            const c = this.v,
                h = c.J;
            h.style.width = e.styleWidth + "px";
            h.style.height = e.styleHeight + "px";
            h.style.marginLeft = e.marginLeft + "px";
            h.style.marginTop = e.marginTop + "px";
            c.md();
            this.Qd && (h.style.display = "", this.Qd = !1)
        }
        Af(e) {
            const c = e.url;
            e = e.filename;
            const h = document.createElement("a"),
                k = document.body;
            h.textContent = e;
            h.href = c;
            h.download = e;
            k.appendChild(h);
            h.click();
            k.removeChild(h)
        }
        async Hf(e) {
            var c = e.imageBitmapOpts;
            e = await self.C3_RasterSvgImageBlob(e.blob, e.imageWidth, e.imageHeight, e.surfaceWidth, e.surfaceHeight);
            c = c ? await createImageBitmap(e, c) : await createImageBitmap(e);
            return {
                imageBitmap: c,
                transferables: [c]
            }
        }
        async yf(e) {
            return await self.C3_GetSvgImageSize(e.blob)
        }
        async mf(e) {
            await p(e.url)
        }
        Gc() {
            var e = [...this.Ia];
            this.Ia.clear();
            if (!this.ma)
                for (const c of e)(e = c.play()) &&
                    e.catch(() => {
                        this.Tb.has(c) || this.Ia.add(c)
                    })
        }
        ta(e) {
            if ("function" !== typeof e.play) throw Error("missing play function");
            this.Tb.delete(e);
            let c;
            try {
                c = e.play()
            } catch (h) {
                this.Ia.add(e);
                return
            }
            c && c.catch(() => {
                this.Tb.has(e) || this.Ia.add(e)
            })
        }
        Ca(e) {
            this.Ia.delete(e);
            this.Tb.add(e)
        }
        Ab(e) {
            this.ma = !!e
        }
        zf() {
            navigator.splashscreen && navigator.splashscreen.hide && navigator.splashscreen.hide()
        }
        sf(e) {
            if (e.show) {
                this.xa || (this.xa = document.createElement("div"), this.xa.id = "inspectOutline", document.body.appendChild(this.xa));
                var c = this.xa;
                c.style.display = "";
                c.style.left = e.left - 1 + "px";
                c.style.top = e.top - 1 + "px";
                c.style.width = e.width + 2 + "px";
                c.style.height = e.height + 2 + "px";
                c.textContent = e.name
            } else this.xa && (this.xa.style.display = "none")
        }
        If() {
            window.C3_RegisterSW && window.C3_RegisterSW()
        }
        Bd(e) {
            window.c3_postToMessagePort && (e.from = "runtime", window.c3_postToMessagePort(e))
        }
        kf(e, c) {
            return this.v.nd(this.Ya, "js-invoke-function", {
                name: e,
                params: c
            }, void 0, void 0)
        }
        nf(e) {
            alert(e.message)
        }
    })
}
"use strict";
async function O(f) {
    if (f.tg) throw Error("already initialised");
    f.tg = !0;
    var a = f.Xb.vc("dispatchworker.js");
    f.Lc = await f.Xb.dc(a, f.D, {
        name: "DispatchWorker"
    });
    a = new MessageChannel;
    f.Pc = a.port1;
    f.Lc.postMessage({
        type: "_init",
        "in-port": a.port2
    }, [a.port2]);
    f.Wc = await Q(f)
}

function P(f) {
    return [f.Pc, f.Wc]
}
async function Q(f) {
    const a = f.Rd.length;
    var b = f.Xb.vc("jobworker.js");
    b = await f.Xb.dc(b, f.D, {
        name: "JobWorker" + a
    });
    const d = new MessageChannel,
        g = new MessageChannel;
    f.Lc.postMessage({
        type: "_addJobWorker",
        port: d.port1
    }, [d.port1]);
    b.postMessage({
        type: "init",
        number: a,
        "dispatch-port": d.port2,
        "output-port": g.port2
    }, [d.port2, g.port2]);
    f.Rd.push(b);
    return g.port1
}
self.Fe = class {
    constructor(f) {
        this.Xb = f;
        this.D = f.D;
        this.D = "preview" === f.L ? this.D + "c3/workers/" : this.D + f.Yb;
        this.wg = Math.min(navigator.hardwareConcurrency || 2, 16);
        this.Lc = null;
        this.Rd = [];
        this.Wc = this.Pc = null
    }
};
"use strict";
window.C3_IsSupported && (window.c3_runtimeInterface = new self.sa({
    Jg: !0,
    Kg: "workermain.js",
    Pa: ["scripts/c3runtime.js"],
    sb: [],
    ee: "",
    fe: "module",
    Gg: "scripts/",
    ad: ["box2d.wasm.js"],
    de: "html5"
}));
"use strict";
self.sa.Aa(class extends self.Qa {
    constructor(f) {
        super(f, "mouse");
        E(this, "cursor", a => {
            document.documentElement.style.cursor = a
        })
    }
});
"use strict";
async function R(f, a) {
    a = a.type;
    let b = !0;
    0 === a ? b = await S() : 1 === a && (b = await U());
    w(f, "permission-result", {
        type: a,
        result: b
    })
}
async function S() {
    if (!self.DeviceOrientationEvent || !self.DeviceOrientationEvent.requestPermission) return !0;
    try {
        return "granted" === await self.DeviceOrientationEvent.requestPermission()
    } catch (f) {
        return console.warn("[Touch] Failed to request orientation permission: ", f), !1
    }
}
async function U() {
    if (!self.DeviceMotionEvent || !self.DeviceMotionEvent.requestPermission) return !0;
    try {
        return "granted" === await self.DeviceMotionEvent.requestPermission()
    } catch (f) {
        return console.warn("[Touch] Failed to request motion permission: ", f), !1
    }
}
self.sa.Aa(class extends self.Qa {
    constructor(f) {
        super(f, "touch");
        E(this, "request-permission", a => R(this, a))
    }
});
"use strict"; {
    function f(a) {
        a.stopPropagation()
    }
    self.sa.Aa(class extends self.fd {
        constructor(a) {
            super(a, "sliderbar")
        }
        cc(a, b) {
            const d = document.createElement("input");
            d.type = "range";
            d.style.position = "absolute";
            d.style.userSelect = "none";
            d.style.webkitUserSelect = "none";
            d.addEventListener("touchstart", f);
            d.addEventListener("touchmove", f);
            d.addEventListener("touchend", f);
            d.addEventListener("mousedown", f);
            d.addEventListener("mouseup", f);
            d.addEventListener("keydown", f);
            d.addEventListener("keyup", f);
            d.addEventListener("click",
                () => N(this, a));
            d.addEventListener("change", () => L(this, "change", a, {
                value: parseFloat(d.value)
            }));
            d.addEventListener("input", () => L(this, "input", a, {
                value: parseFloat(d.value)
            }));
            b.id && (d.id = b.id);
            this.Ua(d, b);
            return d
        }
        Ua(a, b) {
            a.max = b.max;
            a.min = b.min;
            a.step = b.step;
            a.value = b.value;
            a.disabled = !b.isEnabled;
            a.title = b.title
        }
    })
}
"use strict"; {
    function f(a) {
        a.stopPropagation()
    }
    self.sa.Aa(class extends self.fd {
        constructor(a) {
            super(a, "button")
        }
        cc(a, b) {
            const d = document.createElement("input");
            var g = d;
            b.isCheckbox ? (d.type = "checkbox", g = document.createElement("label"), g.appendChild(d), g.appendChild(document.createTextNode("")), g.style.fontFamily = "sans-serif", g.style.userSelect = "none", g.style.webkitUserSelect = "none", g.style.display = "inline-block", g.style.color = "black") : d.type = "button";
            g.style.position = "absolute";
            g.addEventListener("touchstart",
                f);
            g.addEventListener("touchmove", f);
            g.addEventListener("touchend", f);
            g.addEventListener("mousedown", f);
            g.addEventListener("mouseup", f);
            g.addEventListener("keydown", f);
            g.addEventListener("keyup", f);
            d.addEventListener("click", () => N(this, a, {
                isChecked: d.checked
            }));
            b.id && (d.id = b.id);
            this.Ua(g, b);
            return g
        }
        wd(a) {
            return "input" === a.tagName.toLowerCase() ? a : a.firstChild
        }
        uc(a) {
            return this.wd(a)
        }
        Ua(a, b) {
            const d = this.wd(a);
            d.checked = b.isChecked;
            d.disabled = !b.isEnabled;
            a.title = b.title;
            a === d ? d.value = b.text : a.lastChild.textContent =
                b.text
        }
    })
}
"use strict"; {
    const f = 180 / Math.PI;
    self.ea = class extends self.Qa {
        constructor(a) {
            super(a, "audio");
            this.Mb = this.f = null;
            this.Ob = this.Oc = !1;
            this.oa = () => this.pg();
            this.ba = [];
            this.C = [];
            this.ha = null;
            this.Sd = "";
            this.Td = -1;
            this.mb = new Map;
            this.Tc = 1;
            this.ma = !1;
            this.Zc = 0;
            this.$b = 1;
            this.Mc = 0;
            this.Vd = "HRTF";
            this.Md = "inverse";
            this.Wd = 600;
            this.Ud = 1E4;
            this.Yd = 1;
            this.Od = this.Xc = !1;
            this.ae = this.v.Ee();
            this.ca = new Map;
            this.Fa = new Set;
            this.Qc = !1;
            this.Uc = "";
            this.ya = null;
            self.C3Audio_OnMicrophoneStream = (b, d) => this.Df(b, d);
            this.Lb = null;
            self.C3Audio_GetOutputStream = () => this.xf();
            self.C3Audio_DOMInterface = this;
            F(this, [
                ["create-audio-context", b => this.Ze(b)],
                ["play", b => this.Qf(b)],
                ["stop", b => this.mg(b)],
                ["stop-all", () => this.ng()],
                ["set-paused", b => this.fg(b)],
                ["set-volume", b => this.kg(b)],
                ["fade-volume", b => this.df(b)],
                ["set-master-volume", b => this.dg(b)],
                ["set-muted", b => this.eg(b)],
                ["set-silent", b => this.hg(b)],
                ["set-looping", b => this.cg(b)],
                ["set-playback-rate", b => this.gg(b)],
                ["seek", b => this.Xf(b)],
                ["preload", b => this.Rf(b)],
                ["unload", b =>
                    this.qg(b)
                ],
                ["unload-all", () => this.rg()],
                ["set-suspended", b => this.ig(b)],
                ["add-effect", b => this.sd(b)],
                ["set-effect-param", b => this.$f(b)],
                ["remove-effects", b => this.Tf(b)],
                ["tick", b => this.Mf(b)],
                ["load-state", b => this.Bf(b)]
            ])
        }
        async Ze(a) {
            a.isiOSCordova && (this.Xc = !0);
            this.Zc = a.timeScaleMode;
            this.Vd = ["equalpower", "HRTF", "soundfield"][a.panningModel];
            this.Md = ["linear", "inverse", "exponential"][a.distanceModel];
            this.Wd = a.refDistance;
            this.Ud = a.maxDistance;
            this.Yd = a.rolloffFactor;
            var b = {
                latencyHint: a.latencyHint
            };
            this.ae || (b.sampleRate = 48E3);
            if ("undefined" !== typeof AudioContext) this.f = new AudioContext(b);
            else if ("undefined" !== typeof webkitAudioContext) this.f = new webkitAudioContext(b);
            else throw Error("Web Audio API not supported");
            this.td();
            this.f.onstatechange = () => {
                "running" !== this.f.state && this.td()
            };
            this.Mb = this.f.createGain();
            this.Mb.connect(this.f.destination);
            b = a.listenerPos;
            this.f.listener.setPosition(b[0], b[1], b[2]);
            this.f.listener.setOrientation(0, 0, 1, 0, -1, 0);
            self.C3_GetAudioContextCurrentTime = () =>
                this.ec();
            try {
                await Promise.all(a.preloadList.map(d => this.Cb(d.originalUrl, d.url, d.type, !1)))
            } catch (d) {
                console.error("[Construct 3] Preloading sounds failed: ", d)
            }
            return {
                sampleRate: this.f.sampleRate
            }
        }
        td() {
            this.Ob || (this.Oc = !1, window.addEventListener("pointerup", this.oa, !0), window.addEventListener("touchend", this.oa, !0), window.addEventListener("click", this.oa, !0), window.addEventListener("keydown", this.oa, !0), this.Ob = !0)
        }
        af() {
            this.Ob && (this.Oc = !0, window.removeEventListener("pointerup", this.oa, !0), window.removeEventListener("touchend",
                this.oa, !0), window.removeEventListener("click", this.oa, !0), window.removeEventListener("keydown", this.oa, !0), this.Ob = !1)
        }
        pg() {
            if (!this.Oc) {
                var a = this.f;
                "suspended" === a.state && a.resume && a.resume();
                var b = a.createBuffer(1, 220, 22050),
                    d = a.createBufferSource();
                d.buffer = b;
                d.connect(a.destination);
                d.start(0);
                "running" === a.state && this.af()
            }
        }
        W() {
            return this.f
        }
        ec() {
            return this.f.currentTime
        }
        qa() {
            return this.Mb
        }
        hd(a) {
            return (a = this.ca.get(a.toLowerCase())) ? a[0].P() : this.qa()
        }
        ge(a, b) {
            a = a.toLowerCase();
            let d = this.ca.get(a);
            d || (d = [], this.ca.set(a, d));
            b.bg(d.length);
            b.jg(a);
            d.push(b);
            this.Ed(a)
        }
        Ed(a) {
            let b = this.qa();
            const d = this.ca.get(a);
            if (d && d.length) {
                b = d[0].P();
                for (let g = 0, m = d.length; g < m; ++g) {
                    const p = d[g];
                    g + 1 === m ? p.S(this.qa()) : p.S(d[g + 1].P())
                }
            }
            for (const g of this.ka(a)) g.Ke(b);
            this.ya && this.Uc === a && (this.ya.disconnect(), this.ya.connect(b))
        }
        vb() {
            return this.Tc
        }
        wb() {
            return this.ma
        }
        ag() {
            this.Od = !0
        }
        ye(a, b) {
            return b ? this.v.sg(a).then(d => {
                    const g = this.f.createBuffer(1, d.length, 48E3);
                    g.getChannelData(0).set(d);
                    return g
                }) :
                new Promise((d, g) => {
                    this.f.decodeAudioData(a, d, g)
                })
        }
        ta(a) {
            this.v.ta(a)
        }
        Ca(a) {
            this.v.Ca(a)
        }
        od(a) {
            let b = 0;
            for (let d = 0, g = this.C.length; d < g; ++d) {
                const m = this.C[d];
                this.C[b] = m;
                m.K === a ? m.c() : ++b
            }
            this.C.length = b
        }
        Le() {
            let a = 0;
            for (let b = 0, d = this.ba.length; b < d; ++b) {
                const g = this.ba[b];
                this.ba[a] = g;
                g.ra() ? g.c() : ++a
            }
            this.ba.length = a
        }* ka(a) {
            if (a)
                for (const b of this.C) self.ea.ze(b.$, a) && (yield b);
            else this.ha && !this.ha.T() && (yield this.ha)
        }
        async Cb(a, b, d, g, m) {
            for (const p of this.ba)
                if (p.Sa() === b) return await V(p),
                    p;
            if (m) return null;
            g && (this.Xc || this.Od) && this.Le();
            m = "audio/webm; codecs=opus" === d && !this.ae;
            g && m && this.ag();
            a = !g || this.Xc || m ? new self.ue(this, a, b, d, g, m) : new self.se(this, a, b, d, g);
            this.ba.push(a);
            await V(a);
            return a
        }
        async tc(a, b, d, g, m) {
            for (const p of this.C)
                if (p.Sa() === b && (p.bc() || m)) return p.Ne(g), p;
            a = await this.Cb(a, b, d, m);
            g = "html5" === a.Ic ? new self.te(a.i, a, g) : new self.ve(a.i, a, g);
            this.C.push(g);
            return g
        }
        Re(a) {
            let b = this.mb.get(a);
            if (!b) {
                let d = null;
                b = {
                    $c: 0,
                    promise: new Promise(g => d = g),
                    resolve: d
                };
                this.mb.set(a, b)
            }
            b.$c++
        }
        Uf(a) {
            const b = this.mb.get(a);
            if (!b) throw Error("expected pending tag");
            b.$c--;
            0 === b.$c && (b.resolve(), this.mb.delete(a))
        }
        qc(a) {
            a || (a = this.Sd);
            return (a = this.mb.get(a)) ? a.promise : Promise.resolve()
        }
        Db() {
            if (0 < this.Fa.size) G(this);
            else
                for (const a of this.C)
                    if (a.jd()) {
                        G(this);
                        break
                    }
        }
        Da() {
            for (var a of this.Fa) a.Da();
            a = this.ec();
            for (var b of this.C) b.Da(a);
            b = this.C.filter(d => d.jd()).map(d => d.Ra());
            w(this, "state", {
                tickCount: this.Td,
                audioInstances: b,
                analysers: [...this.Fa].map(d => d.Be())
            });
            0 === b.length && 0 === this.Fa.size && this.Pb && (this.v.Vf(this.be), this.Pb = !1)
        }
        mc(a, b, d) {
            w(this, "trigger", {
                type: a,
                tag: b,
                aiid: d
            })
        }
        async Qf(a) {
            const b = a.originalUrl,
                d = a.url,
                g = a.type,
                m = a.isMusic,
                p = a.tag,
                v = a.isLooping,
                z = a.vol,
                A = a.pos,
                t = a.panning;
            let u = a.off;
            0 < u && !a.trueClock && (this.f.getOutputTimestamp ? (a = this.f.getOutputTimestamp(), u = u - a.performanceTime / 1E3 + a.contextTime) : u = u - performance.now() / 1E3 + this.f.currentTime);
            this.Sd = p;
            this.Re(p);
            try {
                this.ha = await this.tc(b, d, g, p, m), t ? (this.ha.zb(!0), this.ha.Me(t.x,
                    t.y, t.angle, t.innerAngle, t.outerAngle, t.outerGain), t.hasOwnProperty("uid") && this.ha.Oe(t.uid)) : this.ha.zb(!1), this.ha.Play(v, z, A, u)
            } catch (B) {
                console.error("[Construct 3] Audio: error starting playback: ", B);
                return
            } finally {
                this.Uf(p)
            }
            G(this)
        }
        mg(a) {
            a = a.tag;
            for (const b of this.ka(a)) b.la()
        }
        ng() {
            for (const a of this.C) a.la()
        }
        fg(a) {
            const b = a.tag;
            a = a.paused;
            for (const d of this.ka(b)) a ? d.Ta() : d.yb();
            this.Db()
        }
        kg(a) {
            const b = a.tag;
            a = a.vol;
            for (const d of this.ka(b)) d.Bb(a)
        }
        async df(a) {
            const b = a.tag,
                d = a.vol,
                g = a.duration;
            a = a.stopOnEnd;
            await this.qc(b);
            for (const m of this.ka(b)) m.Ae(d, g, a);
            this.Db()
        }
        dg(a) {
            this.Tc = a.vol;
            for (const b of this.C) b.Ib()
        }
        eg(a) {
            const b = a.tag;
            a = a.isMuted;
            for (const d of this.ka(b)) d.pd(a)
        }
        hg(a) {
            this.ma = a.isSilent;
            this.v.Ab(this.ma);
            for (const b of this.C) b.Hb()
        }
        cg(a) {
            const b = a.tag;
            a = a.isLooping;
            for (const d of this.ka(b)) d.oc(a)
        }
        async gg(a) {
            const b = a.tag;
            a = a.rate;
            await this.qc(b);
            for (const d of this.ka(b)) d.rd(a)
        }
        async Xf(a) {
            const b = a.tag;
            a = a.pos;
            await this.qc(b);
            for (const d of this.ka(b)) d.nc(a)
        }
        async Rf(a) {
            const b =
                a.originalUrl,
                d = a.url,
                g = a.type;
            a = a.isMusic;
            try {
                await this.tc(b, d, g, "", a)
            } catch (m) {
                console.error("[Construct 3] Audio: error preloading: ", m)
            }
        }
        async qg(a) {
            if (a = await this.Cb("", a.url, a.type, a.isMusic, !0)) a.c(), a = this.ba.indexOf(a), -1 !== a && this.ba.splice(a, 1)
        }
        rg() {
            for (const a of this.ba) a.c();
            this.ba.length = 0
        }
        ig(a) {
            a = a.isSuspended;
            !a && this.f.resume && this.f.resume();
            for (const b of this.C) b.pc(a);
            a && this.f.suspend && this.f.suspend()
        }
        Mf(a) {
            this.$b = a.timeScale;
            this.Mc = a.gameTime;
            this.Td = a.tickCount;
            if (0 !==
                this.Zc)
                for (var b of this.C) b.Ea();
            (b = a.listenerPos) && this.f.listener.setPosition(b[0], b[1], b[2]);
            for (const d of a.instPans) {
                a = d.uid;
                for (const g of this.C) g.ga === a && g.qd(d.x, d.y, d.angle)
            }
        }
        async sd(a) {
            var b = a.type;
            const d = a.tag;
            var g = a.params;
            if ("filter" === b) g = new self.me(this, ...g);
            else if ("delay" === b) g = new self.ke(this, ...g);
            else if ("convolution" === b) {
                b = null;
                try {
                    b = await this.Cb(a.bufferOriginalUrl, a.bufferUrl, a.bufferType, !1)
                } catch (m) {
                    console.log("[Construct 3] Audio: error loading convolution: ",
                        m);
                    return
                }
                g = new self.je(this, b.aa, ...g);
                g.Yf(a.bufferOriginalUrl, a.bufferType)
            } else if ("flanger" === b) g = new self.ne(this, ...g);
            else if ("phaser" === b) g = new self.pe(this, ...g);
            else if ("gain" === b) g = new self.oe(this, ...g);
            else if ("tremolo" === b) g = new self.re(this, ...g);
            else if ("ringmod" === b) g = new self.qe(this, ...g);
            else if ("distortion" === b) g = new self.le(this, ...g);
            else if ("compressor" === b) g = new self.ie(this, ...g);
            else if ("analyser" === b) g = new self.he(this, ...g);
            else throw Error("invalid effect type");
            this.ge(d,
                g);
            this.Dd()
        }
        $f(a) {
            const b = a.index,
                d = a.param,
                g = a.value,
                m = a.ramp,
                p = a.time;
            a = this.ca.get(a.tag);
            !a || 0 > b || b >= a.length || (a[b].X(d, g, m, p), this.Dd())
        }
        Tf(a) {
            a = a.tag.toLowerCase();
            const b = this.ca.get(a);
            if (b && b.length) {
                for (const d of b) d.c();
                this.ca.delete(a);
                this.Ed(a)
            }
        }
        Qe(a) {
            this.Fa.add(a);
            this.Db()
        }
        Sf(a) {
            this.Fa.delete(a)
        }
        Dd() {
            this.Qc || (this.Qc = !0, Promise.resolve().then(() => this.bf()))
        }
        bf() {
            const a = {};
            for (const [b, d] of this.ca) a[b] = d.map(g => g.Ra());
            w(this, "fxstate", {
                fxstate: a
            });
            this.Qc = !1
        }
        async Bf(a) {
            const b =
                a.saveLoadMode;
            if (3 !== b)
                for (var d of this.C) d.ra() && 1 === b || (d.ra() || 2 !== b) && d.la();
            for (const g of this.ca.values())
                for (const m of g) m.c();
            this.ca.clear();
            this.$b = a.timeScale;
            this.Mc = a.gameTime;
            d = a.listenerPos;
            this.f.listener.setPosition(d[0], d[1], d[2]);
            this.ma = a.isSilent;
            this.v.Ab(this.ma);
            this.Tc = a.masterVolume;
            d = [];
            for (const g of Object.values(a.effects)) d.push(Promise.all(g.map(m => this.sd(m))));
            await Promise.all(d);
            await Promise.all(a.playing.map(g => this.lf(g, b)));
            this.Db()
        }
        async lf(a, b) {
            if (3 !==
                b) {
                var d = a.bufferOriginalUrl,
                    g = a.bufferUrl,
                    m = a.bufferType,
                    p = a.isMusic,
                    v = a.tag,
                    z = a.isLooping,
                    A = a.volume,
                    t = a.playbackTime;
                if (!p || 1 !== b)
                    if (p || 2 !== b) {
                        b = null;
                        try {
                            b = await this.tc(d, g, m, v, p)
                        } catch (u) {
                            console.error("[Construct 3] Audio: error loading audio state: ", u);
                            return
                        }
                        b.Ie(a.pan);
                        b.Play(z, A, t, 0);
                        a.isPlaying || b.Ta();
                        b.yc(a)
                    }
            }
        }
        Df(a, b) {
            this.ya && this.ya.disconnect();
            this.Uc = b.toLowerCase();
            this.ya = this.f.createMediaStreamSource(a);
            this.ya.connect(this.hd(this.Uc))
        }
        xf() {
            this.Lb || (this.Lb = this.f.createMediaStreamDestination(),
                this.Mb.connect(this.Lb));
            return this.Lb.stream
        }
        static ze(a, b) {
            return a.length !== b.length ? !1 : a === b ? !0 : a.toLowerCase() === b.toLowerCase()
        }
        static Pe(a) {
            return a * f
        }
        static xe(a) {
            return Math.pow(10, a / 20)
        }
        static gd(a) {
            return Math.max(Math.min(self.ea.xe(a), 1), 0)
        }
        static He(a) {
            return Math.log(a) / Math.log(10) * 20
        }
        static Ge(a) {
            return self.ea.He(Math.max(Math.min(a, 1), 0))
        }
        static Cg(a, b) {
            return 1 - Math.exp(-b * a)
        }
    };
    self.sa.Aa(self.ea)
}
"use strict";

function V(f) {
    f.Rb || (f.Rb = f.xc());
    return f.Rb
}
self.cd = class {
    constructor(f, a, b, d, g) {
        this.i = f;
        this.yg = a;
        this.za = b;
        this.R = d;
        this.vg = g;
        this.Ic = "";
        this.Rb = null
    }
    c() {
        this.Rb = this.i = null
    }
    xc() {}
    W() {
        return this.i.W()
    }
    hc() {
        return this.yg
    }
    Sa() {
        return this.za
    }
    fc() {
        return this.R
    }
    ra() {
        return this.vg
    }
    fa() {}
};
"use strict";
self.se = class extends self.cd {
    constructor(f, a, b, d, g) {
        super(f, a, b, d, g);
        this.Ic = "html5";
        this.I = new Audio;
        this.I.crossOrigin = "anonymous";
        this.I.autoplay = !1;
        this.I.preload = "auto";
        this.gb = this.hb = null;
        this.I.addEventListener("canplaythrough", () => !0);
        this.lb = this.W().createGain();
        this.jb = null;
        this.I.addEventListener("canplay", () => {
            this.hb && (this.hb(), this.gb = this.hb = null);
            !this.jb && this.I && (this.jb = this.W().createMediaElementSource(this.I), this.jb.connect(this.lb))
        });
        this.onended = null;
        this.I.addEventListener("ended",
            () => {
                if (this.onended) this.onended()
            });
        this.I.addEventListener("error", m => {
            console.error(`[Construct 3] Audio '${this.za}' error: `, m);
            this.gb && (this.gb(m), this.gb = this.hb = null)
        })
    }
    c() {
        this.i.od(this);
        this.lb.disconnect();
        this.lb = null;
        this.jb.disconnect();
        this.jb = null;
        this.I && !this.I.paused && this.I.pause();
        this.I = this.onended = null;
        super.c()
    }
    xc() {
        return new Promise((f, a) => {
            this.hb = f;
            this.gb = a;
            this.I.src = this.za
        })
    }
    O() {
        return this.I
    }
    fa() {
        return this.I.duration
    }
};
"use strict";
async function W(f) {
    if (f.wa) return f.wa;
    var a = f.i.v;
    if ("cordova" === a.L && a.kd(f.za) && "file:" === location.protocol) f.wa = await a.tb(f.za);
    else {
        a = await fetch(f.za);
        if (!a.ok) throw Error(`error fetching audio data: ${a.status} ${a.statusText}`);
        f.wa = await a.arrayBuffer()
    }
}
async function X(f) {
    if (f.aa) return f.aa;
    f.aa = await f.i.ye(f.wa, f.xg);
    f.wa = null
}
self.ue = class extends self.cd {
    constructor(f, a, b, d, g, m) {
        super(f, a, b, d, g);
        this.Ic = "webaudio";
        this.aa = this.wa = null;
        this.xg = !!m
    }
    c() {
        this.i.od(this);
        this.aa = this.wa = null;
        super.c()
    }
    async xc() {
        try {
            await W(this), await X(this)
        } catch (f) {
            console.error(`[Construct 3] Failed to load audio '${this.za}': `, f)
        }
    }
    fa() {
        return this.aa ? this.aa.duration : 0
    }
};
"use strict"; {
    let f = 0;
    self.dd = class {
        constructor(a, b, d) {
            this.i = a;
            this.K = b;
            this.$ = d;
            this.Jb = f++;
            this.M = this.W().createGain();
            this.M.connect(this.qa());
            this.A = null;
            this.eb = !1;
            this.G = !0;
            this.V = this.ja = this.F = !1;
            this.pb = 1;
            this.Ga = !1;
            this.Z = 1;
            a = this.i.Zc;
            this.Rc = 1 === a && !this.ra() || 2 === a;
            this.ab = this.ga = -1;
            this.$d = !1
        }
        c() {
            this.K = this.i = null;
            this.A && (this.A.disconnect(), this.A = null);
            this.M.disconnect();
            this.M = null
        }
        W() {
            return this.i.W()
        }
        qa() {
            return this.i.hd(this.$)
        }
        vb() {
            return this.i.vb()
        }
        ub() {
            return this.Rc ? this.i.Mc :
                performance.now() / 1E3
        }
        hc() {
            return this.K.hc()
        }
        Sa() {
            return this.K.Sa()
        }
        fc() {
            return this.K.fc()
        }
        ra() {
            return this.K.ra()
        }
        Ne(a) {
            this.$ = a
        }
        T() {}
        bc() {}
        IsPlaying() {
            return !this.G && !this.F && !this.T()
        }
        jd() {
            return !this.G && !this.T()
        }
        Ba() {}
        fa() {
            return this.K.fa()
        }
        Play() {}
        la() {}
        Ta() {}
        yb() {}
        Bb(a) {
            this.pb = a;
            this.M.gain.cancelScheduledValues(0);
            this.ab = -1;
            this.M.gain.value = this.ic()
        }
        Ae(a, b, d) {
            if (!this.Ga) {
                a *= this.vb();
                var g = this.M.gain;
                g.cancelScheduledValues(0);
                var m = this.i.ec();
                b = m + b;
                g.setValueAtTime(g.value, m);
                g.linearRampToValueAtTime(a, b);
                this.pb = a;
                this.ab = b;
                this.$d = d
            }
        }
        Ib() {
            this.Bb(this.pb)
        }
        Da(a) {
            -1 !== this.ab && a >= this.ab && (this.ab = -1, this.$d && this.la(), this.i.mc("fade-ended", this.$, this.Jb))
        }
        ic() {
            const a = this.pb * this.vb();
            return isFinite(a) ? a : 0
        }
        pd(a) {
            a = !!a;
            this.Ga !== a && (this.Ga = a, this.Hb())
        }
        wb() {
            return this.i.wb()
        }
        Hb() {}
        oc() {}
        rd(a) {
            this.Z !== a && (this.Z = a, this.Ea())
        }
        Ea() {}
        nc() {}
        pc() {}
        zb(a) {
            a = !!a;
            this.eb !== a && ((this.eb = a) ? (this.A || (this.A = this.W().createPanner(), this.A.panningModel = this.i.Vd, this.A.distanceModel =
                this.i.Md, this.A.refDistance = this.i.Wd, this.A.maxDistance = this.i.Ud, this.A.rolloffFactor = this.i.Yd), this.M.disconnect(), this.M.connect(this.A), this.A.connect(this.qa())) : (this.A.disconnect(), this.M.disconnect(), this.M.connect(this.qa())))
        }
        Me(a, b, d, g, m, p) {
            this.eb && (this.qd(a, b, d), a = self.ea.Pe, this.A.coneInnerAngle = a(g), this.A.coneOuterAngle = a(m), this.A.coneOuterGain = p)
        }
        qd(a, b, d) {
            this.eb && (this.A.setPosition(a, b, 0), this.A.setOrientation(Math.cos(d), Math.sin(d), 0))
        }
        Oe(a) {
            this.ga = a
        }
        jc() {}
        Ke(a) {
            const b =
                this.A || this.M;
            b.disconnect();
            b.connect(a)
        }
        Ra() {
            return {
                aiid: this.Jb,
                tag: this.$,
                duration: this.fa(),
                volume: this.pb,
                isPlaying: this.IsPlaying(),
                playbackTime: this.Ba(),
                playbackRate: this.Z,
                uid: this.ga,
                bufferOriginalUrl: this.hc(),
                bufferUrl: "",
                bufferType: this.fc(),
                isMusic: this.ra(),
                isLooping: this.V,
                isMuted: this.Ga,
                resumePosition: this.jc(),
                pan: this.Ce()
            }
        }
        yc(a) {
            this.rd(a.playbackRate);
            this.pd(a.isMuted)
        }
        Ce() {
            if (!this.A) return null;
            const a = this.A;
            return {
                pos: [a.positionX.value, a.positionY.value, a.positionZ.value],
                orient: [a.orientationX.value, a.orientationY.value, a.orientationZ.value],
                cia: a.coneInnerAngle,
                coa: a.coneOuterAngle,
                cog: a.coneOuterGain,
                uid: this.ga
            }
        }
        Ie(a) {
            a ? (this.zb(!0), a = this.A, a.setPosition(...a.pos), a.setOrientation(...a.orient), a.coneInnerAngle = a.cia, a.coneOuterAngle = a.coa, a.coneOuterGain = a.cog, this.ga = a.uid) : this.zb(!1)
        }
    }
}
"use strict";
self.te = class extends self.dd {
    constructor(f, a, b) {
        super(f, a, b);
        this.K.lb.connect(this.M);
        this.K.onended = () => this.Ac()
    }
    c() {
        this.la();
        this.K.lb.disconnect();
        super.c()
    }
    O() {
        return this.K.O()
    }
    Ac() {
        this.G = !0;
        this.ga = -1;
        this.i.mc("ended", this.$, this.Jb)
    }
    T() {
        return this.O().ended
    }
    bc() {
        return this.G ? !0 : this.T()
    }
    Ba(f) {
        let a = this.O().currentTime;
        f && (a *= this.Z);
        this.V || (a = Math.min(a, this.fa()));
        return a
    }
    Play(f, a, b) {
        const d = this.O();
        1 !== d.playbackRate && (d.playbackRate = 1);
        d.loop !== f && (d.loop = f);
        this.Bb(a);
        d.muted &&
            (d.muted = !1);
        if (d.currentTime !== b) try {
            d.currentTime = b
        } catch (g) {
            console.warn(`[Construct 3] Exception seeking audio '${this.K.Sa()}' to position '${b}': `, g)
        }
        this.i.ta(d);
        this.F = this.G = !1;
        this.V = f;
        this.Z = 1
    }
    la() {
        const f = this.O();
        f.paused || f.pause();
        this.i.Ca(f);
        this.G = !0;
        this.F = !1;
        this.ga = -1
    }
    Ta() {
        if (!(this.F || this.G || this.T())) {
            var f = this.O();
            f.paused || f.pause();
            this.i.Ca(f);
            this.F = !0
        }
    }
    yb() {
        !this.F || this.G || this.T() || (this.i.ta(this.O()), this.F = !1)
    }
    Hb() {
        this.O().muted = this.Ga || this.wb()
    }
    oc(f) {
        f = !!f;
        this.V !== f && (this.V = f, this.O().loop = f)
    }
    Ea() {
        let f = this.Z;
        this.Rc && (f *= this.i.$b);
        try {
            this.O().playbackRate = f
        } catch (a) {
            console.warn(`[Construct 3] Unable to set playback rate '${f}':`, a)
        }
    }
    nc(f) {
        if (!this.G && !this.T()) try {
            this.O().currentTime = f
        } catch (a) {
            console.warn(`[Construct 3] Error seeking audio to '${f}': `, a)
        }
    }
    jc() {
        return this.Ba()
    }
    pc(f) {
        f ? this.IsPlaying() ? (this.O().pause(), this.ja = !0) : this.ja = !1 : this.ja && (this.i.ta(this.O()), this.ja = !1)
    }
};
"use strict";

function Y(f) {
    f.j && f.j.disconnect();
    f.j = null;
    f.Xa = null
}
self.ve = class extends self.dd {
    constructor(f, a, b) {
        super(f, a, b);
        this.j = null;
        this.Ub = d => this.Ac(d);
        this.Nc = !0;
        this.Xa = null;
        this.N = this.Zb = 0;
        this.Vc = 1
    }
    c() {
        this.la();
        Y(this);
        this.Ub = null;
        super.c()
    }
    Ac(f) {
        this.F || this.ja || f.target !== this.Xa || (this.G = this.Nc = !0, this.ga = -1, Y(this), this.i.mc("ended", this.$, this.Jb))
    }
    T() {
        return !this.G && this.j && this.j.loop || this.F ? !1 : this.Nc
    }
    bc() {
        return !this.j || this.G ? !0 : this.T()
    }
    Ba(f) {
        let a;
        a = this.F ? this.N : this.ub() - this.Zb;
        f && (a *= this.Z);
        this.V || (a = Math.min(a, this.fa()));
        return a
    }
    Play(f,
        a, b, d) {
        this.Vc = 1;
        this.Bb(a);
        Y(this);
        this.j = this.W().createBufferSource();
        this.j.buffer = this.K.aa;
        this.j.connect(this.M);
        this.Xa = this.j;
        this.j.onended = this.Ub;
        this.j.loop = f;
        this.j.start(d, b);
        this.F = this.G = this.Nc = !1;
        this.V = f;
        this.Z = 1;
        this.Zb = this.ub() - b
    }
    la() {
        if (this.j) try {
            this.j.stop(0)
        } catch (f) {}
        this.G = !0;
        this.F = !1;
        this.ga = -1
    }
    Ta() {
        this.F || this.G || this.T() || (this.N = this.Ba(!0), this.V && (this.N %= this.fa()), this.F = !0, this.j.stop(0))
    }
    yb() {
        !this.F || this.G || this.T() || (Y(this), this.j = this.W().createBufferSource(),
            this.j.buffer = this.K.aa, this.j.connect(this.M), this.Xa = this.j, this.j.onended = this.Ub, this.j.loop = this.V, this.Ib(), this.Ea(), this.Zb = this.ub() - this.N / (this.Z || .001), this.j.start(0, this.N), this.F = !1)
    }
    ic() {
        return super.ic() * this.Vc
    }
    Hb() {
        this.Vc = this.Ga || this.wb() ? 0 : 1;
        this.Ib()
    }
    oc(f) {
        f = !!f;
        this.V !== f && (this.V = f, this.j && (this.j.loop = f))
    }
    Ea() {
        let f = this.Z;
        this.Rc && (f *= this.i.$b);
        this.j && (this.j.playbackRate.value = f)
    }
    nc(f) {
        this.G || this.T() || (this.F ? this.N = f : (this.Ta(), this.N = f, this.yb()))
    }
    jc() {
        return this.N
    }
    pc(f) {
        f ?
            this.IsPlaying() ? (this.ja = !0, this.N = this.Ba(!0), this.V && (this.N %= this.fa()), this.j.stop(0)) : this.ja = !1 : this.ja && (Y(this), this.j = this.W().createBufferSource(), this.j.buffer = this.K.aa, this.j.connect(this.M), this.Xa = this.j, this.j.onended = this.Ub, this.j.loop = this.V, this.Ib(), this.Ea(), this.Zb = this.ub() - this.N / (this.Z || .001), this.j.start(0, this.N), this.ja = !1)
    }
    yc(f) {
        super.yc(f);
        this.N = f.resumePosition
    }
};
"use strict"; {
    class f {
        constructor(a) {
            this.i = a;
            this.f = a.W();
            this.Pd = -1;
            this.R = this.$ = "";
            this.g = null
        }
        c() {
            this.f = null
        }
        bg(a) {
            this.Pd = a
        }
        jg(a) {
            this.$ = a
        }
        o() {
            return this.f.createGain()
        }
        P() {}
        S() {}
        m(a, b, d, g) {
            a.cancelScheduledValues(0);
            if (0 === g) a.value = b;
            else {
                var m = this.f.currentTime;
                g += m;
                switch (d) {
                    case 0:
                        a.setValueAtTime(b, g);
                        break;
                    case 1:
                        a.setValueAtTime(a.value, m);
                        a.linearRampToValueAtTime(b, g);
                        break;
                    case 2:
                        a.setValueAtTime(a.value, m), a.exponentialRampToValueAtTime(b, g)
                }
            }
        }
        Ra() {
            return {
                type: this.R,
                tag: this.$,
                params: this.g
            }
        }
    }
    self.me = class extends f {
        constructor(a, b, d, g, m, p, v) {
            super(a);
            this.R = "filter";
            this.g = [b, d, g, m, p, v];
            this.l = this.o();
            this.b = this.o();
            this.b.gain.value = v;
            this.a = this.o();
            this.a.gain.value = 1 - v;
            this.u = this.f.createBiquadFilter();
            this.u.type = b;
            this.u.frequency.value = d;
            this.u.detune.value = g;
            this.u.Q.value = m;
            this.u.gain.vlaue = p;
            this.l.connect(this.u);
            this.l.connect(this.a);
            this.u.connect(this.b)
        }
        c() {
            this.l.disconnect();
            this.u.disconnect();
            this.b.disconnect();
            this.a.disconnect();
            super.c()
        }
        S(a) {
            this.b.disconnect();
            this.b.connect(a);
            this.a.disconnect();
            this.a.connect(a)
        }
        P() {
            return this.l
        }
        X(a, b, d, g) {
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0);
                    this.g[5] = b;
                    this.m(this.b.gain, b, d, g);
                    this.m(this.a.gain, 1 - b, d, g);
                    break;
                case 1:
                    this.g[1] = b;
                    this.m(this.u.frequency, b, d, g);
                    break;
                case 2:
                    this.g[2] = b;
                    this.m(this.u.detune, b, d, g);
                    break;
                case 3:
                    this.g[3] = b;
                    this.m(this.u.Q, b, d, g);
                    break;
                case 4:
                    this.g[4] = b, this.m(this.u.gain, b, d, g)
            }
        }
    };
    self.ke = class extends f {
        constructor(a, b, d, g) {
            super(a);
            this.R = "delay";
            this.g = [b, d, g];
            this.l =
                this.o();
            this.b = this.o();
            this.b.gain.value = g;
            this.a = this.o();
            this.a.gain.value = 1 - g;
            this.ib = this.o();
            this.U = this.f.createDelay(b);
            this.U.delayTime.value = b;
            this.$a = this.o();
            this.$a.gain.value = d;
            this.l.connect(this.ib);
            this.l.connect(this.a);
            this.ib.connect(this.b);
            this.ib.connect(this.U);
            this.U.connect(this.$a);
            this.$a.connect(this.ib)
        }
        c() {
            this.l.disconnect();
            this.b.disconnect();
            this.a.disconnect();
            this.ib.disconnect();
            this.U.disconnect();
            this.$a.disconnect();
            super.c()
        }
        S(a) {
            this.b.disconnect();
            this.b.connect(a);
            this.a.disconnect();
            this.a.connect(a)
        }
        P() {
            return this.l
        }
        X(a, b, d, g) {
            const m = self.ea.gd;
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0);
                    this.g[2] = b;
                    this.m(this.b.gain, b, d, g);
                    this.m(this.a.gain, 1 - b, d, g);
                    break;
                case 4:
                    this.g[1] = m(b);
                    this.m(this.$a.gain, m(b), d, g);
                    break;
                case 5:
                    this.g[0] = b, this.m(this.U.delayTime, b, d, g)
            }
        }
    };
    self.je = class extends f {
        constructor(a, b, d, g) {
            super(a);
            this.R = "convolution";
            this.g = [d, g];
            this.Kd = this.Jd = "";
            this.l = this.o();
            this.b = this.o();
            this.b.gain.value = g;
            this.a = this.o();
            this.a.gain.value =
                1 - g;
            this.Za = this.f.createConvolver();
            this.Za.normalize = d;
            this.Za.buffer = b;
            this.l.connect(this.Za);
            this.l.connect(this.a);
            this.Za.connect(this.b)
        }
        c() {
            this.l.disconnect();
            this.Za.disconnect();
            this.b.disconnect();
            this.a.disconnect();
            super.c()
        }
        S(a) {
            this.b.disconnect();
            this.b.connect(a);
            this.a.disconnect();
            this.a.connect(a)
        }
        P() {
            return this.l
        }
        X(a, b, d, g) {
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0), this.g[1] = b, this.m(this.b.gain, b, d, g), this.m(this.a.gain, 1 - b, d, g)
            }
        }
        Yf(a, b) {
            this.Jd = a;
            this.Kd = b
        }
        Ra() {
            const a =
                super.Ra();
            a.bufferOriginalUrl = this.Jd;
            a.bufferUrl = "";
            a.bufferType = this.Kd;
            return a
        }
    };
    self.ne = class extends f {
        constructor(a, b, d, g, m, p) {
            super(a);
            this.R = "flanger";
            this.g = [b, d, g, m, p];
            this.l = this.o();
            this.a = this.o();
            this.a.gain.value = 1 - p / 2;
            this.b = this.o();
            this.b.gain.value = p / 2;
            this.bb = this.o();
            this.bb.gain.value = m;
            this.U = this.f.createDelay(b + d);
            this.U.delayTime.value = b;
            this.s = this.f.createOscillator();
            this.s.frequency.value = g;
            this.H = this.o();
            this.H.gain.value = d;
            this.l.connect(this.U);
            this.l.connect(this.a);
            this.U.connect(this.b);
            this.U.connect(this.bb);
            this.bb.connect(this.U);
            this.s.connect(this.H);
            this.H.connect(this.U.delayTime);
            this.s.start(0)
        }
        c() {
            this.s.stop(0);
            this.l.disconnect();
            this.U.disconnect();
            this.s.disconnect();
            this.H.disconnect();
            this.a.disconnect();
            this.b.disconnect();
            this.bb.disconnect();
            super.c()
        }
        S(a) {
            this.b.disconnect();
            this.b.connect(a);
            this.a.disconnect();
            this.a.connect(a)
        }
        P() {
            return this.l
        }
        X(a, b, d, g) {
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0);
                    this.g[4] = b;
                    this.m(this.b.gain,
                        b / 2, d, g);
                    this.m(this.a.gain, 1 - b / 2, d, g);
                    break;
                case 6:
                    this.g[1] = b / 1E3;
                    this.m(this.H.gain, b / 1E3, d, g);
                    break;
                case 7:
                    this.g[2] = b;
                    this.m(this.s.frequency, b, d, g);
                    break;
                case 8:
                    this.g[3] = b / 100, this.m(this.bb.gain, b / 100, d, g)
            }
        }
    };
    self.pe = class extends f {
        constructor(a, b, d, g, m, p, v) {
            super(a);
            this.R = "phaser";
            this.g = [b, d, g, m, p, v];
            this.l = this.o();
            this.a = this.o();
            this.a.gain.value = 1 - v / 2;
            this.b = this.o();
            this.b.gain.value = v / 2;
            this.u = this.f.createBiquadFilter();
            this.u.type = "allpass";
            this.u.frequency.value = b;
            this.u.detune.value =
                d;
            this.u.Q.value = g;
            this.s = this.f.createOscillator();
            this.s.frequency.value = p;
            this.H = this.o();
            this.H.gain.value = m;
            this.l.connect(this.u);
            this.l.connect(this.a);
            this.u.connect(this.b);
            this.s.connect(this.H);
            this.H.connect(this.u.frequency);
            this.s.start(0)
        }
        c() {
            this.s.stop(0);
            this.l.disconnect();
            this.u.disconnect();
            this.s.disconnect();
            this.H.disconnect();
            this.a.disconnect();
            this.b.disconnect();
            super.c()
        }
        S(a) {
            this.b.disconnect();
            this.b.connect(a);
            this.a.disconnect();
            this.a.connect(a)
        }
        P() {
            return this.l
        }
        X(a,
            b, d, g) {
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0);
                    this.g[5] = b;
                    this.m(this.b.gain, b / 2, d, g);
                    this.m(this.a.gain, 1 - b / 2, d, g);
                    break;
                case 1:
                    this.g[0] = b;
                    this.m(this.u.frequency, b, d, g);
                    break;
                case 2:
                    this.g[1] = b;
                    this.m(this.u.detune, b, d, g);
                    break;
                case 3:
                    this.g[2] = b;
                    this.m(this.u.Q, b, d, g);
                    break;
                case 6:
                    this.g[3] = b;
                    this.m(this.H.gain, b, d, g);
                    break;
                case 7:
                    this.g[4] = b, this.m(this.s.frequency, b, d, g)
            }
        }
    };
    self.oe = class extends f {
        constructor(a, b) {
            super(a);
            this.R = "gain";
            this.g = [b];
            this.h = this.o();
            this.h.gain.value =
                b
        }
        c() {
            this.h.disconnect();
            super.c()
        }
        S(a) {
            this.h.disconnect();
            this.h.connect(a)
        }
        P() {
            return this.h
        }
        X(a, b, d, g) {
            const m = self.ea.gd;
            switch (a) {
                case 4:
                    this.g[0] = m(b), this.m(this.h.gain, m(b), d, g)
            }
        }
    };
    self.re = class extends f {
        constructor(a, b, d) {
            super(a);
            this.R = "tremolo";
            this.g = [b, d];
            this.h = this.o();
            this.h.gain.value = 1 - d / 2;
            this.s = this.f.createOscillator();
            this.s.frequency.value = b;
            this.H = this.o();
            this.H.gain.value = d / 2;
            this.s.connect(this.H);
            this.H.connect(this.h.gain);
            this.s.start(0)
        }
        c() {
            this.s.stop(0);
            this.s.disconnect();
            this.H.disconnect();
            this.h.disconnect();
            super.c()
        }
        S(a) {
            this.h.disconnect();
            this.h.connect(a)
        }
        P() {
            return this.h
        }
        X(a, b, d, g) {
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0);
                    this.g[1] = b;
                    this.m(this.h.gain, 1 - b / 2, d, g);
                    this.m(this.H.gain, b / 2, d, g);
                    break;
                case 7:
                    this.g[0] = b, this.m(this.s.frequency, b, d, g)
            }
        }
    };
    self.qe = class extends f {
        constructor(a, b, d) {
            super(a);
            this.R = "ringmod";
            this.g = [b, d];
            this.l = this.o();
            this.b = this.o();
            this.b.gain.value = d;
            this.a = this.o();
            this.a.gain.value = 1 - d;
            this.ob = this.o();
            this.ob.gain.value =
                0;
            this.s = this.f.createOscillator();
            this.s.frequency.value = b;
            this.s.connect(this.ob.gain);
            this.s.start(0);
            this.l.connect(this.ob);
            this.l.connect(this.a);
            this.ob.connect(this.b)
        }
        c() {
            this.s.stop(0);
            this.s.disconnect();
            this.ob.disconnect();
            this.l.disconnect();
            this.b.disconnect();
            this.a.disconnect();
            super.c()
        }
        S(a) {
            this.b.disconnect();
            this.b.connect(a);
            this.a.disconnect();
            this.a.connect(a)
        }
        P() {
            return this.l
        }
        X(a, b, d, g) {
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0);
                    this.g[1] = b;
                    this.m(this.b.gain, b, d, g);
                    this.m(this.a.gain, 1 - b, d, g);
                    break;
                case 7:
                    this.g[0] = b, this.m(this.s.frequency, b, d, g)
            }
        }
    };
    self.le = class extends f {
        constructor(a, b, d, g, m, p) {
            super(a);
            this.R = "distortion";
            this.g = [b, d, g, m, p];
            this.l = this.o();
            this.Wb = this.o();
            this.Vb = this.o();
            this.Zf(g, m);
            this.b = this.o();
            this.b.gain.value = p;
            this.a = this.o();
            this.a.gain.value = 1 - p;
            this.ac = this.f.createWaveShaper();
            this.Kc = new Float32Array(65536);
            this.ff(b, d);
            this.ac.curve = this.Kc;
            this.l.connect(this.Wb);
            this.l.connect(this.a);
            this.Wb.connect(this.ac);
            this.ac.connect(this.Vb);
            this.Vb.connect(this.b)
        }
        c() {
            this.l.disconnect();
            this.Wb.disconnect();
            this.ac.disconnect();
            this.Vb.disconnect();
            this.b.disconnect();
            this.a.disconnect();
            super.c()
        }
        Zf(a, b) {
            .01 > a && (a = .01);
            this.Wb.gain.value = a;
            this.Vb.gain.value = Math.pow(1 / a, .6) * b
        }
        ff(a, b) {
            for (let d = 0; 32768 > d; ++d) {
                let g = d / 32768;
                g = this.lg(g, a, b);
                this.Kc[32768 + d] = g;
                this.Kc[32768 - d - 1] = -g
            }
        }
        lg(a, b, d) {
            d = 1.05 * d * b - b;
            const g = 0 > a ? -a : a;
            return (g < b ? g : b + d * self.ea.Cg(g - b, 1 / d)) * (0 > a ? -1 : 1)
        }
        S(a) {
            this.b.disconnect();
            this.b.connect(a);
            this.a.disconnect();
            this.a.connect(a)
        }
        P() {
            return this.l
        }
        X(a, b, d, g) {
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0), this.g[4] = b, this.m(this.b.gain, b, d, g), this.m(this.a.gain, 1 - b, d, g)
            }
        }
    };
    self.ie = class extends f {
        constructor(a, b, d, g, m, p) {
            super(a);
            this.R = "compressor";
            this.g = [b, d, g, m, p];
            this.h = this.f.createDynamicsCompressor();
            this.h.threshold.value = b;
            this.h.knee.value = d;
            this.h.ratio.value = g;
            this.h.attack.value = m;
            this.h.release.value = p
        }
        c() {
            this.h.disconnect();
            super.c()
        }
        S(a) {
            this.h.disconnect();
            this.h.connect(a)
        }
        P() {
            return this.h
        }
        X() {}
    };
    self.he = class extends f {
        constructor(a, b, d) {
            super(a);
            this.R = "analyser";
            this.g = [b, d];
            this.h = this.f.createAnalyser();
            this.h.fftSize = b;
            this.h.smoothingTimeConstant = d;
            this.Nd = new Float32Array(this.h.frequencyBinCount);
            this.Zd = new Uint8Array(b);
            this.Xd = this.Ja = 0;
            this.i.Qe(this)
        }
        c() {
            this.i.Sf(this);
            this.h.disconnect();
            super.c()
        }
        Da() {
            this.h.getFloatFrequencyData(this.Nd);
            this.h.getByteTimeDomainData(this.Zd);
            const a = this.h.fftSize;
            let b = this.Ja = 0;
            for (var d = 0; d < a; ++d) {
                let g = (this.Zd[d] - 128) / 128;
                0 > g && (g = -g);
                this.Ja < g && (this.Ja = g);
                b += g * g
            }
            d = self.ea.Ge;
            this.Ja = d(this.Ja);
            this.Xd = d(Math.sqrt(b / a))
        }
        S(a) {
            this.h.disconnect();
            this.h.connect(a)
        }
        P() {
            return this.h
        }
        X() {}
        Be() {
            return {
                tag: this.$,
                index: this.Pd,
                peak: this.Ja,
                rms: this.Xd,
                binCount: this.h.frequencyBinCount,
                freqBins: this.Nd
            }
        }
    }
};