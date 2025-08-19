var Define = function() {},
    Enum = function() {};
if (Define.azerionID = "7a0fc7a9c9e845ff8d3e26efa1e50878", Define.txtVer = "ver.1.1.4", Enum.DEVICE_STATE = {
        PC: 0,
        IOS: 1,
        ANDROID: 2
    }, Define.SAVE_VER = 1, Define.IMG_VER = 1, Define.SND_VER = 1, Define.SPINE_VER = 1, Define.DEVICE = Enum.DEVICE_STATE.PC, Define.bLocalHost = -1 !== document.location.href.indexOf("localhost"), Define.SAVE_KEY = "com.gamePop.MergeFruit", Define.iADCnt = 0, Define.iTimeStemp = 0, Define.tbLang = ["ko", "en"], Define.LANG = "en" === MSSDK.getParameterByName("lang") ? Define.tbLang[1] : Define.tbLang[0], window.cordova) {
    var nativeLANGUAGE = navigator.language || navigator.userLanguage;
    Define.LANG = "ko-KR" == nativeLANGUAGE ? Define.tbLang[0] : Define.tbLang[1], "ko-KR" != nativeLANGUAGE && "ko" != nativeLANGUAGE || (Define.LANG = Define.tbLang[0])
}
Define.PID = MSSDK.getParameterByName("id"), Define.GameName = "mergefruit", Define.GameData = [{
    gravity: "1500",
    restitution: "0.15",
    shakeVelocity: "700",
    shakeTerm: "150",
    createTerm: "450",
    effectScale: "0.4",
    bodySize: "52",
    bodyMass: "3",
    "": ""
}, {
    gravity: "-",
    restitution: "-",
    shakeVelocity: "-",
    shakeTerm: "-",
    createTerm: "-",
    effectScale: "0.49",
    bodySize: "80",
    bodyMass: "6",
    "": ""
}, {
    gravity: "-",
    restitution: "-",
    shakeVelocity: "-",
    shakeTerm: "-",
    createTerm: "-",
    effectScale: "0.56",
    bodySize: "108",
    bodyMass: "9",
    "": ""
}, {
    gravity: "-",
    restitution: "-",
    shakeVelocity: "-",
    shakeTerm: "-",
    createTerm: "-",
    effectScale: "0.62",
    bodySize: "120",
    bodyMass: "12",
    "": ""
}, {
    gravity: "-",
    restitution: "-",
    shakeVelocity: "-",
    shakeTerm: "-",
    createTerm: "-",
    effectScale: "0.7",
    bodySize: "152",
    bodyMass: "15",
    "": ""
}, {
    gravity: "-",
    restitution: "-",
    shakeVelocity: "-",
    shakeTerm: "-",
    createTerm: "-",
    effectScale: "0.8",
    bodySize: "184",
    bodyMass: "18",
    "": ""
}, {
    gravity: "-",
    restitution: "-",
    shakeVelocity: "-",
    shakeTerm: "-",
    createTerm: "-",
    effectScale: "0.9",
    bodySize: "194",
    bodyMass: "21",
    "": ""
}, {
    gravity: "-",
    restitution: "-",
    shakeVelocity: "-",
    shakeTerm: "-",
    createTerm: "-",
    effectScale: "1",
    bodySize: "220",
    bodyMass: "24",
    "": ""
}, {
    gravity: "-",
    restitution: "-",
    shakeVelocity: "-",
    shakeTerm: "-",
    createTerm: "-",
    effectScale: "1.2",
    bodySize: "260",
    bodyMass: "27",
    "": ""
}, {
    gravity: "-",
    restitution: "-",
    shakeVelocity: "-",
    shakeTerm: "-",
    createTerm: "-",
    effectScale: "1.4",
    bodySize: "310",
    bodyMass: "30",
    "": ""
}, {
    gravity: "-",
    restitution: "-",
    shakeVelocity: "-",
    shakeTerm: "-",
    createTerm: "-",
    effectScale: "1.6",
    bodySize: "350",
    bodyMass: "33",
    "": ""
}, {
    gravity: "-",
    restitution: "-",
    shakeVelocity: "-",
    shakeTerm: "-",
    createTerm: "-",
    effectScale: "2",
    bodySize: "408",
    bodyMass: "36",
    "": ""
}, {
    gravity: "-",
    restitution: "-",
    shakeVelocity: "-",
    shakeTerm: "-",
    createTerm: "-",
    effectScale: "2.4",
    bodySize: "450",
    bodyMass: "39",
    "": "s"
}], Define.GAME_CODE = 177;
var gDeltaTime = 0,
    gGameOverLoopSoundEvent = null;
Define.GOOGLE_SHEETS_DATA = !0, Define.GOOGLE_SPREADSHEET_ID = "1HbVCX4XzrEL9lwna1BAmrqCH3Oxq6PND771XVWpe6_k";
var kData = new Data;

function Data() {
    this.iVer = 0, this.isBGM = !0, this.isSfx = !0, this.isNumber = !0, this.itemKnifeCnt = 3, this.itemShakeCnt = 3, this.iBestScore = 0
}
Phaser.Text.prototype.ReSize = function(e, t, i) {
    void 0 != e && (this.text = e), this.scale.set(1), this.width > t && (void 0 === i ? this.scale.set(t / this.width) : t / this.width <= i / this.height && this.scale.set(t / this.width)), void 0 != i && this.height > i && t / this.width > i / this.height && this.scale.set(i / this.height)
}, Phaser.Text.prototype.ReSize2 = function(e, t) {
    if (void 0 != e && (this.text = e), this.scale.set(1), this.width > t)
        for (; this.width > t;) "…" == this.text[this.text.length - 1] ? (this.text = this.text.substring(0, this.text.length - 2), this.text += "…") : (this.text = this.text.substring(0, this.text.length - 1), this.text += "…")
}, Phaser.BitmapText.prototype.ReSize = function(e, t, i) {
    void 0 != e && (this.text = e), this.scale.set(1), this.width > t && (void 0 === i ? this.scale.set(t / this.width) : t / this.width <= i / this.height && this.scale.set(t / this.width)), void 0 != i && this.height > i && t / this.width > i / this.height && this.scale.set(i / this.height)
}, Phaser.Text.prototype.ChangeTextColor = function() {
    for (var e = 0; e < this.text.length; ++e)
        if ("[" == this.text[e])
            if ("]" == this.text[e + 7]) {
                var t = this.text.slice(0, e + 8).split(/(?:\r\n|\r|\n)/).length - 1,
                    i = "#" + this.text.slice(e + 1, e + 7);
                this.text = this.text.replace(this.text.slice(e, e + 8), ""), this.addColor(i, e - t)
            } else if ("-" == this._text[e + 1]) {
        t = this.text.slice(0, e + 3).split(/(?:\r\n|\r|\n)/).length - 1;
        this.text = this.text.replace(this.text.slice(e, e + 3), ""), this.addColor("#" + this.tint.toString(16), e - t)
    }
}, Number.prototype.ToString = function(e) {
    switch (void 0 != e && (e = e.toLowerCase()), e) {
        case "n0":
            return this.toString().replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
        case "d2":
            var t = "",
                i = Math.floor(this).toString();
            if (i.length < 2)
                for (var n = 0; n < 2 - i.length; n++) t += "0";
            return t + i;
        case "f1":
            return this.toFixed(1);
        case "f2":
            return this.toFixed(2);
        default:
            return this.toString()
    }
}, Number.prototype.isEven = function() {
    return this % 2 == 0
}, String.prototype.ToString = function(e) {
    switch (void 0 != e && (e = e.toLowerCase()), e) {
        case "n0":
            return this.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
        case "d2":
            var t = "",
                i = this;
            if (i.length < 2)
                for (var n = 0; n < 2 - i.length; n++) t += "0";
            return t + i;
        default:
            return this
    }
};
var string = function() {};
string.Format || (string.Format = function(e) {
    var t = Array.prototype.slice.call(arguments, 1);
    return e.replace(/{(\d+)}/g, function(e, i) {
        return void 0 !== t[i] ? t[i] : e
    })
});
var Random = function() {};

function LocalizingManager() {
    this.strT = {}, this.Init()
}
Random.Range || (Random.Range = function(e, t) {
    return MG.game.rnd.integerInRange(e, t - 1)
}, Random.RangeFloat = function(e, t) {
    return MG.game.rnd.realInRange(e, t - 1e-5)
}), Define.LANDSCAPE = !1, window.onload = function() {
    var e, t = window[""];
    navigator.userAgent.match(/iPhone|iPod|iPad/i) && navigator.userAgent.match(/OS 15_0_2/i) ? MG.alert("", "ko" == Define.LANG ? "IOS 15.0.2 버전 사용자는 업데이트 후 접속해 주시기 바랍니다!" : "Users of iOS 15.0.2 version, please log in after the update!", function() {
        PopconGame.Sdk.exitGame()
    }) : ((e = !0 === Define.LANDSCAPE ? new Phaser.Game(1280, 720, Phaser.AUTO, "game", void 0, void 0, !1) : new Phaser.Game(720, 1280, Phaser.AUTO, "game", void 0, !1, !0)).state.add("boot", t.Boot), e.state.add("preloader", t.Preloader), e.state.add("game", t.Game), e.state.start("boot"))
}, ResourcesManager = function(e) {
    this.game = e
}, ResourcesManager.prototype = {
    preload: function() {},
    create: function() {},
    update: function() {},
    loader: function(e) {
        var t = e;
        for (var i in t) t[i].forEach(function(e) {
            var t = this.game.load[i];
            t && t.apply(this.game.load, e)
        }, this)
    }
}, ResourcesManager.MoviLoad = {
    image: [
        ["pop.png", "assets/atlas/load/pop.png?v=" + Define.IMG_VER],
        ["movi.png", "assets/atlas/load/movi.png?v=" + Define.IMG_VER],
        ["Grade.png", "assets/atlas/load/Grade.png?v=" + Define.IMG_VER],
        ["logo_movisoft_0.png", "assets/atlas/load/logo_movisoft_0.png?v=" + Define.IMG_VER]
    ]
}, ResourcesManager.Preloader = {
    image: [
        ["Grade.png", "assets/atlas/load/Grade.png?v=" + Define.IMG_VER],
        ["btn_exit.png", "assets/atlas/load/btn_exit.png?v=" + Define.IMG_VER]
    ],
    atlas: [
        ["gameAtlas", "assets/atlas/atlasGame.png?v=" + Define.IMG_VER, "assets/atlas/atlasGame.json?v=" + Define.IMG_VER, Phaser.Loader.TEXTURE_ATLAS_JSON_ARRAY],
        ["animAtlas", "assets/atlas/atlasAnimation.png?v=" + Define.IMG_VER, "assets/atlas/atlasAnimation.json?v=" + Define.IMG_VER, Phaser.Loader.TEXTURE_ATLAS_JSON_ARRAY]
    ],
    spine: [
        ["gameOverSpine", "assets/spine/Game_Over.json?v=" + Define.SPINE_VER],
        ["mergeSpine", "assets/spine/Fruit_EFX.json?v=" + Define.SPINE_VER]
    ],
    audio: [
        ["BGM_Main", ["assets/sound/01_BGM_Main.mp3?v=" + Define.SND_VER, "assets/sound/01_BGM_Main.ogg?v=" + Define.SND_VER], "bgm"],
        ["BGM_Main_Danger", ["assets/sound/01_BGM_Main_Danger.mp3?v=" + Define.SND_VER, "assets/sound/01_BGM_Main_Danger.ogg?v=" + Define.SND_VER], "bgm"],
        ["SE_Click", ["assets/sound/10_SE_Click.mp3?v=" + Define.SND_VER, "assets/sound/10_SE_Click.ogg?v=" + Define.SND_VER]],
        ["SE_Fall", ["assets/sound/02_SE_Fall.mp3?v=" + Define.SND_VER, "assets/sound/02_SE_Fall.ogg?v=" + Define.SND_VER]],
        ["SE_Merge", ["assets/sound/03_SE_Merge.mp3?v=" + Define.SND_VER, "assets/sound/03_SE_Merge.ogg?v=" + Define.SND_VER]],
        ["SE_Bump", ["assets/sound/04_SE_Bump.mp3?v=" + Define.SND_VER, "assets/sound/04_SE_Bump.ogg?v=" + Define.SND_VER]],
        ["SE_Knife", ["assets/sound/05_SE_Knife.mp3?v=" + Define.SND_VER, "assets/sound/05_SE_Knife.ogg?v=" + Define.SND_VER]],
        ["SE_Shake", ["assets/sound/06_SE_Shake.mp3?v=" + Define.SND_VER, "assets/sound/06_SE_Shake.ogg?v=" + Define.SND_VER]],
        ["SE_Box", ["assets/sound/07_SE_Box.mp3?v=" + Define.SND_VER, "assets/sound/07_SE_Box.ogg?v=" + Define.SND_VER]],
        ["SE_GameOver", ["assets/sound/09_SE_Gameover.mp3?v=" + Define.SND_VER, "assets/sound/09_SE_Gameover.ogg?v=" + Define.SND_VER]]
    ]
}, window[""] = window[""] || {}, window[""].ResourcesManager = ResourcesManager, LocalizingManager.prototype = {
    Init: function(e) {
        var t = new XMLHttpRequest,
            i = Define.LANG === Define.tbLang[0] ? "ko" : "en";
        t.open("GET", "assets/font/Localizing_" + i + ".txt", !0), t.send(null), t.onload = function() {
            if (404 == t.status) throw alert(kData.lang + " not file");
            this.strT = JSON.parse(t.responseText), e && e()
        }.bind(this)
    },
    Get: function(e) {
        if (void 0 == this.strT[e]) return e + " : null";
        this.strT[e] = this.strT[e].replace(/{E}/gi, "\n");
        var t = Array.prototype.slice.call(arguments, 1);
        return 0 == t.length ? this.strT[e] : this.strT[e].replace(/{(\d+)}/g, function(e, i) {
            return void 0 !== t[i] ? t[i] : e
        })
    }
};
var hidden, visibilityChange, bAD = !1;

function handleVisibilityChange() {
    document[hidden] ? MG && MG.PauseBgm() : MG && 0 == bAD && MG.ResumeBgm()
}

function MoviGame() {
    var e = Array.prototype.slice.call(arguments),
        t = e.pop(),
        i = e[0] && "string" == typeof e[0] ? e : e[0];
    if (!(this instanceof MoviGame)) return new MoviGame(i, t);
    if (!i || "*" === i || "*" === i[0])
        for (var n in i = [], MoviGame.Modules) MoviGame.modules.hasOwnProperty(n) && i.push(n);
    n = 0;
    for (var a = i.length; n < a; n += 1) MoviGame.modules[i[n]](this);
    t(this), this.game = null, this.resourcesManager = null, this._sound = null, this._bgm = null, this.isFadeMusic = !1, this.firstPortrait = !1, this.firstLandScape = !1, this.callReSize = null, this.iMSW = 720, this.iMSH = 1280, this.iCSX = this.iMSW / 2, this.iCSY = this.iMSH / 2
}
void 0 !== document.hidden ? (hidden = "hidden", visibilityChange = "visibilitychange") : void 0 !== document.msHidden ? (hidden = "msHidden", visibilityChange = "msvisibilitychange") : void 0 !== document.webkitHidden && (hidden = "webkitHidden", visibilityChange = "webkitvisibilitychange"), window.addEventListener("blur", function() {
        MG && 0 == bAD && MG.PauseBgm()
    }, !1), document.addEventListener(visibilityChange, handleVisibilityChange, !1), window.addEventListener("focus", function(e) {
        MG && 0 == bAD && MG.ResumeBgm(), window.focus()
    }, !1),
    function() {
        var e = !1;

        function t() {
            if (window.innerWidth > window.innerHeight || 90 === window.orientation || -90 === window.orientation) !1 === e && function() {
                if (!(window.innerHeight > 768)) {
                    var e = document.getElementById("orientation-message-box");
                    e && e.remove();
                    var t = document.createElement("div");
                    t.id = "orientation-message-box", t.style.position = "fixed", t.style.top = "-100px", t.style.left = "50%", t.style.transform = "translateX(-50%)", t.style.backgroundColor = "rgba(0, 0, 0, 0.8)", t.style.color = "white", t.style.padding = "15px 30px", t.style.borderRadius = "10px", t.style.fontSize = "20px", t.style.textAlign = "center", t.style.zIndex = "9999", t.style.transition = "top 0.5s ease", t.innerText = "The resolution of the game is optimized for portrait mode", document.body.appendChild(t), setTimeout(function() {
                        t.style.top = "20px"
                    }, 50), setTimeout(function() {
                        t.style.top = "-100px", setTimeout(function() {
                            t.remove()
                        }, 500)
                    }, 5e3)
                }
            }(), e = !0;
            else {
                var t = document.getElementById("orientation-message-box");
                t && t.remove(), e = !1
            }
        }
        window.addEventListener("resize", t), window.addEventListener("orientationchange", t), t()
    }(), MoviGame.prototype = {
        Initialize: function(e) {
            /Android/i.test(navigator.userAgent) ? Define.DEVICE = Enum.DEVICE_STATE.ANDROID : /iPhone|iPad|iPod/i.test(navigator.userAgent) ? Define.DEVICE = Enum.DEVICE_STATE.IOS : Define.DEVICE = Enum.DEVICE_STATE.PC, this.game = e, this.game.plugins.add(PhaserSpine.SpinePlugin), this.resourcesManager = e.plugins.add(ResourcesManager), this.NM = new NetworkManager, this.listLoader = [], this.initScreenSize(), this.game.time._desiredFps = 144, this.game.time.advancedTiming = !0
        },
        initScreenSize: function() {
            var e = this;
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL, this.game.pageAlignHorizontally = !1, this.game.pageAlignVertically = !1, this.game.scale.parentIsWindow = !0, window.addEventListener("resize", function() {
                e.reScreenSize()
            }), window.addEventListener("orientationchange", function() {
                e.reScreenSize()
            }), this.game.scale.setShowAll(), this.reScreenSize()
        },
        reScreenSize: function() {
            var e = window.innerWidth * MG.iMSH / (window.innerHeight * MG.iMSW);
            if (this.game.scale.scaleMode = e >= .85 && e <= 1.15 ? Phaser.ScaleManager.EXACT_FIT : Phaser.ScaleManager.SHOW_ALL, window.innerWidth < window.innerHeight && /Android/i.test(navigator.userAgent)) {
                var t = Math.min(window.innerWidth, window.outerWidth),
                    i = Math.min(window.innerHeight, window.outerHeight);
                this.game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
                var n = parseFloat(t / this.game.width),
                    a = parseFloat(i / this.game.height);
                this.game.scale.setUserScale(n > 1 ? 1 : n, a)
            }
            this.game.scale.refresh()
        },
        regstWindowEvents: function() {},
        EditPos: function(e) {
            e.inputEnabled = !0, e.input.enableDrag(), e.events.onDragStop.add(function() {
                var t = Math.floor(e.position.x - MG.iCSX);
                t = Math.floor(e.position.y - MG.iCSY)
            }, this)
        },
        netLoading: function() {
            null != this.grpLoad && this.destroyLoading(), this.grpLoad = this.game.add.group(), this.grpLoad.x = this.game.width / 2, this.grpLoad.y = this.game.height / 2, this.grpLoad.backAlpha = MG.AddSpriteNine(this.grpLoad, 0, 0, "gameAtlas", "white.png", this.game.width, this.game.height, {
                top: 2,
                bottom: 2,
                left: 2,
                right: 2
            }, .5, .5), this.grpLoad.backAlpha.alpha = .3, this.grpLoad.backAlpha.tint = 0, this.grpLoad.backAlpha.inputEnabled = !0, this.grpLoad.loading = this.game.add.sprite(0, 0, "gameAtlas", "loading.png"), this.grpLoad.loading.anchor.setTo(.5, .5), this.grpLoad.loading.scale.setTo(.5, .5), this.grpLoad.addChild(this.grpLoad.loading), this.game.add.tween(this.grpLoad.loading).to({
                angle: -360
            }, 1e3, Phaser.Easing.Linear.None, !0).loop(!0)
        },
        destroyLoading: function() {
            null != this.grpLoad && (this.grpLoad.backAlpha.destroy(), this.grpLoad.loading.destroy(), this.grpLoad.removeAll(), this.grpLoad = null)
        },
        cacheSheetLoad: function(e, t, i, n, a, o) {
            if (0 == MG.game.cache.checkImageKey(e)) {
                var s = {
                    key: e,
                    type: "sheet",
                    path: t,
                    wid: i,
                    hei: n,
                    max: a,
                    cb: o
                };
                this.listLoader.push(s), this.cacheUpdate()
            } else o(e)
        },
        cacheImageLoad: function(e, t, i) {
            if (0 == MG.game.cache.checkImageKey(e)) {
                var n = {
                    key: e,
                    type: "Image",
                    path: t,
                    cb: i
                };
                this.listLoader.push(n), this.cacheUpdate()
            } else i(e)
        },
        cacheSpineLoad: function(e, t, i) {
            if (0 == MG.game.cache.checkJSONKey(e)) {
                var n = {
                    key: e,
                    type: "spine",
                    path: t,
                    cb: i
                };
                this.listLoader.push(n), this.cacheUpdate()
            } else i(e)
        },
        cacheAtlasLoad: function(e, t, i) {
            if (0 == MG.game.cache.checkImageKey(e)) {
                var n = {
                    key: e,
                    type: "atlas",
                    path: t,
                    cb: i
                };
                this.listLoader.push(n), this.cacheUpdate()
            } else i(e)
        },
        cacheLoad: function(e) {
            var t = MG.game.load;
            switch (e.type) {
                case "sheet":
                    t.spritesheet(e.key, e.path[0], e.wid, e.hei, e.max);
                    break;
                case "atlas":
                    t.atlas(e.key, e.path[0], e.path[1], e.path[2]);
                    break;
                case "sound":
                    t.audio(e.key, e.path);
                    break;
                case "spine":
                    t.spine(e.key, e.path);
                    break;
                case "Image":
                default:
                    t.image(e.key, e.path)
            }
            t.onLoadComplete.removeAll(), t.onLoadComplete.add(function() {
                t.onLoadComplete.removeAll(), t.onFileError.removeAll(), e.cb(e.key), this.listLoader.shift(), this.cacheUpdate()
            }, this), t.onFileError.add(function() {
                t.onLoadComplete.removeAll(), t.onFileError.removeAll(), this.cacheUpdate()
            }, this), t.start()
        },
        cacheUpdate: function() {
            0 == MG.game.load.isLoading && this.listLoader.length > 0 && this.cacheLoad(this.listLoader[0])
        },
        loadGameSheetsData: function(e, t, i, n) {
            var a = "https://sheets.googleapis.com/v4/spreadsheets/" + Define.GOOGLE_SPREADSHEET_ID + "/values/Data?alt=json&key=AIzaSyBO1qye7ATaJMvEL62d2RKm5pJb-rg5GM4";
            $.ajax({
                type: "GET",
                url: a,
                dataType: "jsonp"
            }).done(function(e) {
                var t = JSON.parse(e.values[1]);
                i && i(t)
            }).fail(function(e) {
                n && n()
            })
        }
    }, MoviGame.modules = {
        utils: function(e) {
            e.Init = function() {}, e.DrawRect = function(e, t, i, n, a, o, s, r) {
                var d = MG.game.add.graphics(0, 0);
                return d.beginFill(o), d.drawRect(t, i, n, a), d.endFill(), d.alpha = s, r && (d.inputEnabled = r), e.addChild(d), d
            }, e.DrawRoundedRect = function(e, t, i, n, a, o, s, r, d) {
                var l = MG.game.add.graphics(0, 0);
                return l.beginFill(s), l.drawRoundedRect(t, i, n, a, o), l.endFill(), r && (l.alpha = r), d && (l.inputEnabled = d), e.addChild(l), l
            }, e.alert = function(e, t, i, n, a) {
                Swal.fire({
                    title: e,
                    width: 400,
                    html: "<br>" + t.replace(/\n/gi, "<br>") + "<br><br>",
                    confirmButtonColor: "#b0c1eb",
                    allowOutsideClick: !1
                }).then(function(e) {
                    e.value && i && i()
                })
            }, e.confirm = function(e, t, i, n, a) {
                void 0 == i && (i = "YES"), void 0 == n && (n = "NO"), Swal.fire({
                    title: e,
                    width: 400,
                    html: "<br>" + t.replace(/\n/gi, "<br>") + "<br><br>",
                    showCancelButton: !0,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: i,
                    cancelButtonText: n
                }).then(function(e) {
                    e.value && a && a()
                })
            }, e.STR2BIN = function(e) {
                var t = e.split("").map(function(e) {
                        return e.charCodeAt(0)
                    }),
                    i = new Zlib.Deflate(t).compress(),
                    n = Array.prototype.map.call(i, function(e) {
                        return String.fromCharCode(e)
                    }).join("");
                return btoa(n)
            }, e.BIN2STR = function(e) {
                var t = (e = atob(e)).split("").map(function(e) {
                        return e.charCodeAt(0)
                    }),
                    i = new Zlib.Inflate(t).decompress();
                return Array.prototype.map.call(i, function(e) {
                    return String.fromCharCode(e)
                }).join("")
            }, e.SamsungDataCheck = function(e, t) {
                return e.iBestScore >= t.iBestScore ? e : t
            }, e.GetSecondsToTimeString = function(e) {
                var t = Math.floor(e / 60),
                    i = Math.floor(e % 60);
                return (t >= 10 ? t.toString() : "0" + t) + ":" + (i >= 10 ? i.toString() : "0" + i)
            }, e.AddSprite = function(e, t, i, n, a, o, s, r, d, l, h) {
                var u = this.game.add.sprite(t, i, n, a);
                return void 0 != l && (u.tint = l), void 0 != h && (u.alpha = h), u.anchor.x = void 0 == o ? .5 : o, u.anchor.y = void 0 == s ? .5 : s, void 0 != r && (u.width = r), void 0 != d && (u.height = d), e.addChild(u), u
            }, e.AddButtonSprite = function(e, t, i, n, a, o, s, r, d) {
                var l = this.game.add.sprite(t, i, n, a);
                return void 0 != s && (l.height = s), void 0 != o && (l.width = o), l.anchor.x = r || .5, l.anchor.y = d || .5, l.inputEnabled = !0, l.baseTint = l.tint, l.events.onInputDown.add(function() {
                    MG.PlayAudio("SE_Click"), l.tint = 8421504;
                    for (var e = 0; e < l.children.length; ++e) l.getChildAt(e).tint = 8421504;
                    for (e = 0; e < l.events.onInputUp._bindings.length; e++) l.events.onInputUp._bindings[e].active = !0
                }), l.events.onInputUp.add(function(e, t, i) {
                    l.tint = 16777215;
                    for (var n = 0; n < l.children.length; ++n) l.getChildAt(n).tint = 16777215;
                    if (!1 === i && !l.alwaysEvent)
                        for (n = 0; n < l.events.onInputUp._bindings.length; n++) l.events.onInputUp._bindings[n].active = !1
                }), e.addChild(l), l
            }, e.AddSpriteNine = function(e, t, i, n, a, o, s, r, d, l, h) {
                var u = new PhaserNineSlice.NineSlice(MG.game, t, i, n, a, o, s, r);
                return u.anchor.x = void 0 == d ? .5 : d, u.anchor.y = void 0 == l ? .5 : l, void 0 != h && (u.tint = h), e.addChild(u), u
            }, e.AddSpriteNineButton = function(e, t, i, n, a, o, s, r, d, l, h) {
                var u = new PhaserNineSlice.NineSlice(MG.game, t, i, n, a, o, s, r);
                return u.anchor.x = void 0 == d ? .5 : d, u.anchor.y = void 0 == l ? .5 : l, void 0 != h && (u.tint = h), e.addChild(u), u.inputEnabled = !0, u.baseTint = u.tint, u.events.onInputDown.add(function() {
                    MG.PlayAudio("SE_Click"), u.tint = 8421504;
                    for (var e = 0; e < u.children.length; ++e) u.getChildAt(e).tint = 8421504;
                    for (e = 0; e < u.events.onInputUp._bindings.length; e++) u.events.onInputUp._bindings[e].active = !0
                }), u.events.onInputUp.add(function(e, t, i) {
                    u.tint = u.baseTint;
                    for (var n = 0; n < u.children.length; ++n) u.getChildAt(n).tint = u.baseTint;
                    if (!1 === i)
                        for (n = 0; n < u.events.onInputUp._bindings.length; n++) u.events.onInputUp._bindings[n].active = !1
                }), u
            }, e.AddText = function(e, t, i, n, a, o, s) {
                return (n = MG.game.add.text(t, i, n, a)).anchor.x = void 0 == o ? .5 : o, n.anchor.y = void 0 == s ? .5 : s, e.addChild(n), n
            }, e.AddBitmapText = function(e, t, i, n, a, o, s, r) {
                return (a = MG.game.add.bitmapText(t, i, n, a, o, e)).anchor.x = void 0 == s ? .5 : s, a.anchor.y = void 0 == r ? .5 : r, e.addChild(a), a
            }, e.copyObject = function(e) {
                var t = {};
                for (var i in e) t[i] = e[i];
                return t
            }, e.addComma = function(e) {
                return (e = String(e)).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,")
            }, e.removeComma = function(e) {
                return void 0 === e || null == e || "" == e ? "" : ("" + e).replace(/(,)/g, "")
            }
        },
        audio: function(e) {
            e.Init = function() {}, e.AudioInit = function() {
                this.game.device.android && this.game.device.chrome && this.game.device.chromeVersion >= 55 && (this.game.sound.setTouchLock(), this.game.input.touch.addTouchLockCallback(function() {
                    if (this.noAudio || null !== this._unlockSource) return !0;
                    if (this.usingWebAudio) {
                        var e = this.context.createBuffer(1, 1, 22050);
                        this._unlockSource = this.context.createBufferSource(), this._unlockSource.buffer = e, this._unlockSource.connect(this.context.destination), void 0 === this._unlockSource.start ? this._unlockSource.noteOn(0) : this._unlockSource.start(0), "suspended" === this._unlockSource.context.state && this._unlockSource.context.resume()
                    }
                    return !0
                }, this.game.sound, !0)), this._sound = [], this._bgm = [], ResourcesManager.Preloader.audio.forEach(function(e) {
                    "bgm" === e[2] ? this._bgm[e[0]] = this.game.add.audio(e[0], 1, !0) : this._sound[e[0]] = this.game.add.audio(e[0])
                }, this)
            }, e.AudioSwitch = function(e) {
                kData.isSfx = !e, kData.isBGM = !e
            }, e.PlayAudio = function(e, t) {
                kData.isSfx && this._sound && this._sound[e] && (this._sound[e].loop = !!t, this._sound[e].play())
            }, e.SetAudioVolume = function(e, t) {
                this._sound[e].volume = t
            }, e.StopAudio = function(e) {
                this._sound[e].loop = !1, this._sound[e].stop()
            }, e.PlayBgm = function(e, t) {
                void 0 !== t && (t = !0), kData.isBGM && this._bgm && this._bgm[e] && (void 0 != this.currentBGM && this._bgm[this.currentBGM].stop(), this._bgm[e].play("", 0, 1, t)), this.currentBGM = e
            }, e.SetBgmVolume = function(e, t) {
                void 0 != this.currentBGM && (this._bgm[this.currentBGM].volume = t)
            }, e.StopBgm = function(e) {
                void 0 != this.currentBGM && this._bgm[this.currentBGM].stop()
            }, e.PauseBgm = function() {
                void 0 != this.currentBGM && this._bgm[this.currentBGM].pause()
            }, e.ResumeBgm = function() {
                kData.isBGM && void 0 != this.currentBGM && this._bgm[this.currentBGM].resume()
            }, e.FadeInBgm = function(e, t) {
                void 0 == this.currentBGM || this.isFadeInMusic || (this._bgm[this.currentBGM].fadeIn(e, !0), this.isFadeInMusic = !0, setTimeout(function() {
                    t && t(), this.isFadeInMusic = !1
                }.bind(this), e))
            }, e.FadeOutBgm = function(e, t) {
                void 0 == this.currentBGM || this.isFadeOutMusic || (this._bgm[this.currentBGM].fadeOut(e), this.isFadeOutMusic = !0, setTimeout(function() {
                    t && t(), this.isFadeOutMusic = !1
                }.bind(this), e))
            }, e.isPlayingBgm = function() {
                if (void 0 != this.currentBGM) return this._bgm[this.currentBGM].isPlaying
            }, e.GetThisBgm = function() {
                if (void 0 != this.currentBGM) return this._bgm[this.currentBGM]
            }
        }
    }, window[""] = window[""] || {}, window[""].MoviGame = MoviGame;
var MG = MoviGame("utils", "audio", function() {});

function Boot() {}

function Preloader() {}

function UI_Title(e) {
    this.main = MG.game.add.group(), e.addChild(this.main), this.main.visible = !1;
    var t = MG.game.add.spine(MG.iCSX, MG.iCSY, "titleSpine");
    t.setAnimationByName(0, "In", !1), this.main.addChild(t), t.state.onComplete = function(e) {
        switch (e) {
            case 0:
                t.setAnimationByName(1, "Idle", !0)
        }
    };
    var i = t.children[t.skeleton.findSlotIndex("Btn_GameStart")];
    MG.AddButtonSprite(i, 0, 0, "gameAtlas", "btn_new_game.png").events.onInputUp.add(function() {
        this.LoadGame()
    }.bind(this), this);
    var n = t.children[t.skeleton.findSlotIndex("Score")],
        a = MG.AddText(n, 0, 0, "0", {
            font: "64px 1ONEMobilePOP"
        }),
        o = a.context.createLinearGradient(0, 0, 0, a.height);
    o.addColorStop(0, "#ff8d00"), o.addColorStop(1, "#ff5400"), a.fill = o;
    var s = t.children[t.skeleton.findSlotIndex("Ranking")],
        r = MG.AddText(s, 0, 0, "", {
            font: "32px 1ONEMobilePOP",
            fill: "#8a837e"
        });
    if (this.updateScore = function() {
            a.text = kData.iBestScore.ToString("n0"), r.text = MG.LM.Get("TEXT_WORLD_RATE", kData.iBestScore < 100 ? 100 : kData.iBestScore < 1e3 ? 99 : kData.iBestScore < 2e3 ? 80 : kData.iBestScore < 5e3 ? 60 : kData.iBestScore < 1e4 ? 40 : kData.iBestScore < 11e3 ? 20 : kData.iBestScore < 15e3 ? 10 : kData.iBestScore < 2e4 ? 4 : kData.iBestScore < 3e4 ? 1 : .2)
        }, MG.AddText(this.main, 5, 1270, Define.txtVer, {
            font: "13px Arial",
            fill: "#996526",
            align: "center"
        }, 0), MG.AddText(this.main, MG.iCSX, MG.iCSY + 620, "Ⓒ MoviSoft Co.,Ltd. All Rights Reserved.", {
            font: "15px Arial",
            fill: "#996526",
            align: "center"
        }), 1 == MSSDK.getBackButton() && !window.cordova) {
        var d = MG.game.add.sprite(20, 20, "btn_exit.png");
        this.main.addChild(d), d.inputEnabled = !0, d.events.onInputUp.add(function() {
            MSSDK.gameExit(!0)
        }.bind(this), this)
    }
    this.Show()
}
Boot.prototype = {
    preload: function() {
        MG.Initialize(this.game), MG.game.add.text(-1e4, -1e4, ".", {
            font: "32px 1ONEMobilePOP",
            fill: "#a6ccff",
            boundsAlignH: "center"
        }), MG.resourcesManager.loader(ResourcesManager.MoviLoad)
    },
    create: function() {
        MSSDK.initializeAsync({}, function() {
            MG.NM.LocalLoad(function() {
                adsInit({
                    isBanner: !0
                }), Define.LANG = "ko" == MSSDK.LANG ? Define.tbLang[0] : Define.tbLang[1], kData.iVer, Define.SAVE_VER, this.game.state.start("preloader")
            }.bind(this))
        }.bind(this))
    }
}, window[""] = window[""] || {}, window[""].Boot = Boot, Preloader.prototype = {
    preload: function() {
        this.main = MG.game.add.group(), this.stage.backgroundColor = "#ffffff", this.sprLogo = MG.AddSprite(this.main, MG.iCSX, MG.iCSY - 100, "logo_movisoft_0.png"), this.text = MG.AddText(this.main, MG.iCSX, MG.iCSY + 135, "0%", {
            font: "32px Arial",
            fill: "#636363",
            align: "center"
        }), this.load.onFileComplete.add(this.onFileComplete, this), this.load.onLoadComplete.add(this.onLoadComplete, this), window.cordova && 0 == /Android/i.test(navigator.userAgent) ? ResourcesManager.Preloader.spine.push(["titleSpine", "assets/spine/Title_For_IOS.json?v=" + Define.SPINE_VER]) : Define.LANG === Define.tbLang[0] ? ResourcesManager.Preloader.spine.push(["titleSpine", "assets/spine/Title.json?v=" + Define.SPINE_VER]) : ResourcesManager.Preloader.spine.push(["titleSpine", "assets/spine/Title_en.json?v=" + Define.SPINE_VER]), MG.resourcesManager.loader(ResourcesManager.Preloader)
    },
    onFileComplete: function(e, t, i, n, a) {
        this.text.setText(e + "%")
    },
    onLoadComplete: function() {
        MG.LM = new LocalizingManager, MG.LM.Init(function() {
            this.game.state.start("game"), SetGameValues(Define.GameData)
        }.bind(this)), MG.AudioInit(), this.load.onFileComplete.removeAll(), this.load.onLoadComplete.removeAll(), this.destroy()
    },
    destroy: function() {
        this.main.destroy()
    }
}, window[""] = window[""] || {}, window[""].Preloader = Preloader, UI_Title.prototype.Show = function() {
    THIS_STATE = GAME_STATE.TITLE, "BGM_Main_Danger" === MG.currentBGM && MG.FadeOutBgm(1e3, function() {
        MG.PlayBgm("BGM_Main")
    }), this.updateScore(), this.main.visible = !0
}, UI_Title.prototype.Hide = function() {
    this.main.visible = !1
}, UI_Title.prototype.LoadGame = function() {
    MG.uiGame.Show(), this.Hide()
};
var THIS_STATE, objectTable = [
        [1],
        [.5, .5],
        [.34, .33, .33],
        [.25, .25, .3, .2],
        [.2, .3, .3, .2],
        [.2, .2, .25, .2, .15],
        [.2, .2, .2, .25, .15],
        [.15, .15, .25, .25, .15, .05],
        [.15, .15, .225, .225, .2, .05],
        [.15, .15, .2, .2, .2, .1],
        [.15, .15, .2, .2, .2, .1],
        [.12, .12, .2, .2, .21, .15],
        [.12, .12, .165, .165, .19, .19, .05]
    ],
    FRUIT_TYPE = {
        NORMAL: 0,
        NUMBER: 1
    },
    fruitColor = [6575766, 14824758, 16683576, 10470161, 14824757, 16172550, 15542310, 16754858, 14914843, 9726795, 15291974, 1279810, 16361761],
    fruitsSize = [],
    fruitsMass = [],
    fruitsEffectScale = [],
    dropTerm = 450,
    shakeTerm = 125,
    shakeVelocity = 750;

function SetGameValues(e) {
    MG.game.physics.startSystem(Phaser.Physics.P2JS), MG.game.physics.p2.gravity.y = parseInt(e[0].gravity), MG.game.physics.p2.restitution = parseFloat(e[0].restitution), dropTerm = parseInt(e[0].createTerm), shakeTerm = parseInt(e[0].shakeTerm), shakeVelocity = parseInt(e[0].shakeVelocity);
    for (var t = 0; t < e.length; t++) fruitsSize[t] = parseInt(e[t].bodySize), fruitsMass[t] = parseInt(e[t].bodyMass), fruitsEffectScale[t] = parseFloat(e[t].effectScale)
}

function GetFruitSize(e) {
    return fruitsSize[e - 1]
}

function GetFruitMass(e) {
    return fruitsMass[e - 1]
}

function GetFruitEffectScale(e) {
    return fruitsEffectScale[e]
}

function GetRandIndex(e) {
    for (var t = parseFloat(1 * Math.random()).toFixed(1), i = 0; i < e.length; i++)
        if (parseFloat(t) <= parseFloat(e[i])) return i + 1
}

function UI_Game(e) {
    this.main = MG.game.add.group(), e.addChild(this.main), this.main.visible = !1;
    var t, i, n, a, o = this;
    bAD = !1, this.grScore = MG.game.add.group(), this.main.addChild(this.grScore), this.grUi = MG.game.add.group(), this.main.addChild(this.grUi), this.grObject = MG.game.add.group(), this.main.addChild(this.grObject), this.grPopup = MG.game.add.group(), this.main.addChild(this.grPopup), this.objectManager = (t = {}, i = [], n = [], a = MG.AddSprite(o.grObject, MG.iCSX, MG.iCSY + 475, "gameAtlas", "white.png", null, null, MG.iMSW, 35), MG.game.physics.p2.enable(a), a.body.static = !0, a.wall = !0, t.getObject = function(e, t, n, a) {
        for (var o = 0, s = 0; s < i.length && i[s].visible; s++) o++;
        return o >= i.length ? (i[o] = MG.AddSprite(e, t, n, "gameAtlas"), i[o].drop = function() {
            this.body.gravity.y = 1500
        }.bind(i[o]), i[o].disable = function() {
            MG.game.tweens.removeFrom(this), this.body && this.body.destroy(), this.visible = !1
        }.bind(i[o])) : (e.addChild(i[o]), i[o].visible = !0), kData.isNumber ? i[o].frameName = "num" + a + ".png" : i[o].frameName = a + ".png", i[o].lv = a, i[o].knife = !1, i[o].dropped = !1, i[o].enableMerge = !0, i[o].position.setTo(t, n), i[o].scale.setTo(1), i[o].angle = 0, i[o]
    }, t.getEffect = function(e, t, i, a) {
        for (var o = 0, s = 0; s < n.length && n[s].visible; s++) o++;
        return o >= n.length ? (n[o] = MG.game.add.spine(MG.iCSX, MG.iCSY, "mergeSpine"), n[o].state.onComplete = function(e) {
            this.visible = !1
        }.bind(n[o]), e.addChild(n[o])) : e.addChild(n[o]), n[o].state.clearTracks(), n[o].skeleton.setToSetupPose(), n[o].setTint(fruitColor[a - 1]), n[o].setAnimationByName(0, "POP", !1), n[o].position.setTo(t, i), n[o].scale.setTo(GetFruitEffectScale(a)), n[o].alpha = .7, n[o].visible = !0, n[o]
    }, t.setObjectBody = function(e) {
        return MG.game.physics.p2.enable(e), e.knife ? e.body.setRectangle(25, 70) : e.body.setCircle(GetFruitSize(e.lv) / 2), e.body.mass = GetFruitMass(e.lv), e
    }, t.setVisibleNumber = function(e) {
        for (var i = t.getList(), n = 0; n < o.seedSprList.length; n++) o.seedSprList[n].frameName = e ? "num" + o.seedList[n] + ".png" : o.seedList[n] + ".png";
        i.forEach(function(t) {
            t.visible && (t.frameName = e ? "num" + t.lv + ".png" : t.lv + ".png")
        })
    }, t.getObjectSize = function(e) {
        return GetFruitSize(e)
    }, t.getList = function() {
        return i
    }, t.getEffectList = function() {
        return n
    }, t), this.scoreUi = function() {
        var e = {};
        e.main = MG.game.add.group(), o.grScore.addChild(e.main);
        var t = MG.AddText(e.main, 100, 50, "0", {
                font: "bold 46px 1ONEMobilePOP",
                fill: "#b17e42",
                align: "center",
                stroke: "#ffffff",
                strokeThickness: 6
            }),
            i = 0;
        return e.init = function() {
            t.text = "0", i = 0
        }.bind(this), e.show = function() {
            e.main.visible = !0
        }, e.getAbsScore = function() {
            return i
        }, e.updateText = function(e) {
            var n = 1 * MG.removeComma(t.text),
                a = n === i ? n + e : i + e,
                o = {
                    idx: n
                };
            i = a, this.scaleTween = MG.game.add.tween(t.scale).to({
                x: 1.2,
                y: 1.2
            }, 150, Phaser.Easing.Default, !0), this.scaleTween.onComplete.add(function() {
                MG.game.add.tween(t.scale).to({
                    x: 1,
                    y: 1
                }, 149, Phaser.Easing.Default, !0)
            }, this), this.scoreTween = MG.game.add.tween(o).to({
                idx: a
            }, 300, Phaser.Easing.Default, !0), this.scoreTween._onUpdateCallback = function() {
                t.text = Math.round(o.idx).ToString("n0")
            }.bind(this), this.scoreTween.onComplete.add(function() {
                t.text = a.ToString("n0")
            }, this)
        }, e
    }(), this.grp = MG.DrawRect(this.grUi, 0, 0, MG.iMSW, MG.iMSH, 0, 0, !0), this.grp.events.onInputDown.add(this.dragBegin, this), this.grp.events.onInputUp.add(this.dragEnd, this), this.seedSprList = [], this.seedList = [];
    for (var s = 0; s < 2; s++) this.seedSprList[s] = MG.AddSprite(this.grUi, MG.iCSX + 160 + 65 * s, 59, "gameAtlas");
    var r = MG.AddSprite(this.grUi, MG.iMSW - 126, 62, "gameAtlas", "Game_Shelf.png");
    MG.AddButtonSprite(r, 84, -6, "gameAtlas", "btn_options.png").events.onInputUp.add(function() {
        MG.uiPopup.Pause()
    });
    var d = MG.AddSprite(this.main, MG.iCSX, MG.iMSH - 90, "gameAtlas", "Game_Bottom_MenuBar.png");
    this.btnKnife = MG.AddButtonSprite(d, -209, 10, "gameAtlas", "Game_Btn_Knife.png"), this.txtKnifeMaximumCnt = MG.AddText(this.btnKnife, 0, 42, "", {
        font: "bold 32px 1ONEMobilePOP",
        fill: "#714114"
    }), this.btnKnife.events.onInputUp.add(this.knife, this), this.btnKnifeEnableEff1 = MG.AddSprite(this.btnKnife, 0, 0, "gameAtlas", "Game_Item_Select_1.png"), this.btnKnifeEnableEff2 = MG.AddSprite(this.btnKnife, 0, 0, "gameAtlas", "Game_Item_Select_2.png"), this.btnKnifeEnableEff1.visible = !1, this.btnKnifeEnableEff2.visible = !1, MG.AddSprite(this.btnKnife, 86, -61, "gameAtlas", "Game_Icon_AD.png"), this.btnShake = MG.AddButtonSprite(d, 1, 10, "gameAtlas", "Game_Btn_Shake.png"), MG.AddSprite(this.btnShake, 86, -61, "gameAtlas", "Game_Icon_AD.png"), this.txtShakeMaximumCnt = MG.AddText(this.btnShake, 0, 42, "", {
        font: "bold 32px 1ONEMobilePOP",
        fill: "#714114"
    }), this.btnShake.events.onInputUp.add(this.shake, this), this.btnBox = MG.AddButtonSprite(d, 211, 10, "gameAtlas", "Game_Btn_Keep.png"), this.txtBoxRemainingTime = MG.AddText(this.btnBox, 0, 42, "", {
        font: "bold 32px 1ONEMobilePOP",
        fill: "#714114"
    }), this.txtBoxRemainingTime.visible = !1, this.btnBoxLockSpr = MG.AddSprite(this.btnBox, 0, 38, "gameAtlas", "Game_Icon_Lock.png"), this.btnBoxAdSpr = MG.AddSprite(this.btnBox, 86, -61, "gameAtlas", "Game_Icon_AD.png"), this.saveObjSpr = MG.AddSprite(this.btnBox, -15, -38, "gameAtlas", "Game_Icon_Empty_Fruit.png"), this.btnBox.events.onInputUp.add(this.box, this), this.dangerLine = MG.AddSprite(this.grUi, MG.iCSX, 175, "gameAtlas", "Game_Dead Line.png"), this.dangerLine.yellow = MG.AddSprite(this.grUi, MG.iCSX, 175, "gameAtlas", "Game_Dead Line.png"), this.dangerLine.yellow.tint = 16744960, this.dangerLine.yellow.visible = !1, this.dangerLine.visible = !1, this.dangerLine.type = -1, this.dangerLine.enable = function(e) {
        switch (e) {
            case 0:
                if (o.dangerLine.tint = 16765989, o.dangerLine.visible && o.dangerLine.type === e) return;
                o.dangerLine.disable(), o.dangerLine.visible = !0, o.dangerLine.alpha = 1, o.dangerLine.type = e, MG.game.add.tween(o.dangerLine).to({
                    alpha: 0
                }, 1e3, Phaser.Easing.Default, !0, 0, -1, !0);
                break;
            case 1:
                if (o.dangerLine.tint = 15807304, o.dangerLine.visible && o.dangerLine.type === e) return;
                o.dangerLine.disable(), o.dangerLine.visible = !0, o.dangerLine.alpha = 1, o.dangerLine.type = e, MG.game.add.tween(o.dangerLine).to({
                    alpha: 0
                }, 500, Phaser.Easing.Default, !0, 0, -1, !0)
        }
    }, this.dangerLine.disable = function() {
        o.dangerLine.visible && (MG.game.tweens.removeFrom(o.dangerLine), o.dangerLine.visible = !1)
    }, this.keepFruit = MG.AddSprite(this.grUi, MG.iCSX + 298, 146, "gameAtlas", "1.png"), this.keepFruit.visible = !1, MG.AddSprite(this.grUi, MG.iCSX + 298, 146, "gameAtlas", "Game_Item_Basket.png"), this.dragingObj = null, this.savedObjType = null, this.isPlaying = !1, this.isKnife = !1, this.maximumKnifeCnt = 3, this.maximumShakeCnt = 3, this.maximumObjLv = 0, this.setTable()
}

function CheckAd(e, t) {
    if (Define.bLocalHost) return e && e(), void(MG.disableTouch = !1);
    ++Define.iADCnt % 3 == 1 ? (MG.PauseBgm(), ShowAD("basic", "result", function() {
        MG.ResumeBgm(), MG.disableTouch = !1, e && e()
    }, function() {
        MG.ResumeBgm(), MG.disableTouch = !1, t && t()
    })) : "100064" == Define.PID ? PopconGame.Sdk.drawAppMoreGameList(MG.game, Define.GAME_CODE, function() {
        t && t(), MG.disableTouch = !1
    }) : (t && t(), MG.disableTouch = !1)
}

function UI_Popup(e) {
    this.main = MG.game.add.group(), e.addChild(this.main), this.blind = MG.DrawRect(this.main, 0, 0, MG.iMSW, MG.iMSH, 0, .7, !0), this.blind.visible = !1
}

function Game() {}
UI_Game.prototype.setTable = function() {
    this.objTable = [];
    for (var e = 0; e < objectTable.length; e++) {
        this.objTable[e] = [];
        for (var t = 0; t < objectTable[e].length; t++) {
            this.objTable[e][t] = 0;
            for (var i = 0; i < t + 1; i++) this.objTable[e][t] += objectTable[e][i];
            this.objTable[e][t] = parseFloat(this.objTable[e][t]).toFixed(3)
        }
    }
}, UI_Game.prototype.Show = function() {
    this.main.visible = !0, this.initGame()
}, UI_Game.prototype.Hide = function() {
    this.main.visible = !1
}, UI_Game.prototype.initGame = function() {
    this.objectManager.getList().forEach(function(e, t, i) {
        e.body && e.body.destroy(), e.visible = !1
    }), this.dragingObj && (this.dragingObj.visible = !1, this.dragingObj = null), this.shakeSto && (clearTimeout(this.shakeSto), this.shakeSto = null), this.btnBoxLockSpr.frameName = "Game_Icon_Lock.png", this.btnBoxLockSpr.visible = !0, this.btnBoxAdSpr.visible = !0, this.txtBoxRemainingTime.visible = !1, this.currentBGM = "BGM_Main", this.boxEndDate = null, this.isRevive = !1, this.keepFruit.visible = !1, this.savedObjType = null, this.grp.visible = !0, bAD = !1, this.isPlaying = !0, this.maximumObjLv = 0, this.gameOverCnt = 0, this.knifeUseCnt = 0, this.shakeUseCnt = 0, this.txtBoxRemainingTime.visible = !1, this.txtKnifeMaximumCnt.text = this.maximumKnifeCnt - this.knifeUseCnt + " / " + this.maximumKnifeCnt, this.txtShakeMaximumCnt.text = this.maximumShakeCnt - this.shakeUseCnt + " / " + this.maximumShakeCnt, this.scoreUi.init();
    for (var e = 0; e < 2; e++) this.seedList[e] = GetRandIndex(this.objTable[this.maximumObjLv]);
    this.isKnife && this.eff(), void 0 === this.TE_Update && (this.TE_Update = MG.game.time.events.loop(250, this.update, this)), this.createObj(), MG.NM.start()
}, UI_Game.prototype.dragBegin = function() {
    this.dragingObj && (MG.game.input.addMoveCallback(this.drag, this), this.dragingObj.x = MG.game.input.x)
}, UI_Game.prototype.drag = function(e) {
    var t = MG.game.input.x,
        i = GetFruitSize(this.dragingObj.lv) / 2;
    this.dragingObj.x = Math.min(Math.max(t, i + 1), MG.iMSW - i - 1)
}, UI_Game.prototype.dragEnd = function() {
    if (MG.game.input.deleteMoveCallback(this.drag, this), this.dragingObj) {
        var e = MG.game.input.x,
            t = GetFruitSize(this.dragingObj.lv) / 2;
        this.objectManager.setObjectBody(this.dragingObj), this.dragingObj.body.onBeginContact.add(this.collision, this), this.dragingObj.body.x = Math.min(Math.max(e, t + 1), MG.iMSW - t - 1), MG.PlayAudio("SE_Fall"), this.isKnife && (MG.game.tweens.removeFrom(this.btnKnifeEnableEff1), this.btnKnifeEnableEff1.visible = !1, this.btnKnifeEnableEff2.visible = !1, this.isKnife = !1, this.knifeUseCnt += 1, this.txtKnifeMaximumCnt.text = this.maximumKnifeCnt - this.knifeUseCnt + " / " + this.maximumKnifeCnt, MG.NM.LocalSave()), setTimeout(function() {
            this.createObj()
        }.bind(this), dropTerm), this.dragingObj = null
    }
}, UI_Game.prototype.knife = function() {
    if (this.isPlaying && this.dragingObj && !bAD) {
        var e = this;
        this.eff = function() {
            this.isKnife ? (this.isKnife = !1, MG.game.tweens.removeFrom(this.btnKnifeEnableEff1), this.btnKnifeEnableEff1.visible = !1, this.btnKnifeEnableEff2.visible = !1, this.dragingObj && (this.dragingObj.frameName = this.dragingObj.lv + ".png", this.dragingObj.scale.setTo(1), this.dragingObj.body.setCircle(GetFruitSize(this.dragingObj.lv) / 2), this.dragingObj.knife = !1)) : (MG.PlayAudio("SE_Knife"), this.btnKnifeEnableEff1.visible = !0, this.btnKnifeEnableEff2.visible = !0, this.btnKnifeEnableEff1.alpha = 0, MG.game.add.tween(this.btnKnifeEnableEff1).to({
                alpha: 1
            }, 600, Phaser.Easing.Power0, !0, 0, -1, !0), this.isKnife = !0, this.dragingObj.frameName = "knife.png", this.dragingObj.scale.setTo(.5), this.dragingObj.knife = !0)
        }.bind(this), this.knifeUseCnt < this.maximumKnifeCnt ? this.isKnife || (e.btnKnife.inputEnabled = e.grp.visible = !1, MG.PauseBgm(), bAD = !0, ShowAD("reward", "knife", function() {
            bAD = !1, MG.ResumeBgm(), e.btnKnife.inputEnabled = e.grp.visible = !0, e.eff()
        }, function() {
            bAD = !1, MG.ResumeBgm(), MG.alert("", Define.LANG == Define.tbLang[0] ? "광고가 소진되었거나,\n광고 불러오기에 실패하였습니다.\n잠시 후 다시 시도해주세요." : "No more available ads to watch,\nor they failed to load.\nPlease try again later."), e.btnKnife.inputEnabled = e.grp.visible = !0
        })) : MG.uiPopup.Alert(MG.LM.Get("TEXT_POPUP_ITEM"))
    }
}, UI_Game.prototype.shake = function() {
    if (this.isPlaying && !bAD) {
        var e = function(e) {
            var t = this.objectManager.getList(),
                i = shakeVelocity,
                n = shakeVelocity,
                a = 0;
            this.isPlaying = !1, MG.PlayAudio("SE_Shake"),
                function o() {
                    this.shakeSto = setTimeout(function() {
                        a < 12 ? (t.forEach(function(e) {
                            e.body && e.dropped && (e.body.velocity.x = Math.floor(Math.random() * n))
                        }), n = -n, o.call(this)) : a < 18 ? (t.forEach(function(e) {
                            e.body && e.dropped && (e.body.velocity.y = Math.floor(Math.random() * i))
                        }), i = -i, o.call(this)) : (this.isPlaying = !0, this.shakeSto = null, e && e()), a++
                    }.bind(this), shakeTerm)
                }.bind(this)()
        }.bind(this);
        this.shakeUseCnt < this.maximumShakeCnt ? (this.btnShake.inputEnabled = this.grp.visible = !1, MG.PauseBgm(), bAD = !0, ShowAD("reward", "shake", function() {
            bAD = !1, MG.ResumeBgm(), this.btnShake.inputEnabled = this.grp.visible = !0, this.searchingMerge = !0, this.shakeUseCnt += 1, this.txtShakeMaximumCnt.text = this.maximumShakeCnt - this.shakeUseCnt + " / " + this.maximumShakeCnt, this.isShake = !0, MG.NM.LocalSave(), e(function() {
                this.isPlaying = !1, setTimeout(function() {
                    this.searchingMerge ? e() : this.isPlaying = !0
                }.bind(this), 500)
            }.bind(this))
        }.bind(this), function() {
            bAD = !1, MG.ResumeBgm(), MG.alert("", Define.LANG == Define.tbLang[0] ? "광고가 소진되었거나,\n광고 불러오기에 실패하였습니다.\n잠시 후 다시 시도해주세요." : "No more available ads to watch,\nor they failed to load.\nPlease try again later."), this.btnShake.inputEnabled = this.grp.visible = !0
        }.bind(this))) : MG.uiPopup.Alert(MG.LM.Get("TEXT_POPUP_ITEM"))
    }
}, UI_Game.prototype.box = function() {
    if (!this.isKnife && this.isPlaying && !bAD) {
        var e = function() {
            var e = this.dragingObj.lv + 0;
            MG.PlayAudio("SE_Box"), this.saveObjSpr.visible = !1, this.keepFruit.frameName = this.dragingObj.lv + ".png", this.keepFruit.width = this.keepFruit.height = 53, this.keepFruit.visible = !0, this.txtBoxRemainingTime.visible = !0, this.dragingObj.visible = !1, this.btnBoxLockSpr.visible = !1, this.savedObjType ? this.createObj(this.savedObjType) : (this.btnBoxAdSpr.visible = !1, this.createObj()), this.savedObjType = e
        }.bind(this);
        this.boxEndDate ? e() : (this.btnBox.inputEnabled = this.grp.visible = !1, MG.PauseBgm(), bAD = !0, ShowAD("reward", "box", function() {
            bAD = !1, MG.ResumeBgm(), this.btnBox.inputEnabled = this.grp.visible = !0, this.boxEndDate = new Date((new Date).getTime() + 6e4), e()
        }.bind(this), function() {
            bAD = !1, MG.ResumeBgm(), MG.alert("", Define.LANG == Define.tbLang[0] ? "광고가 소진되었거나,\n광고 불러오기에 실패하였습니다.\n잠시 후 다시 시도해주세요." : "No more available ads to watch,\nor they failed to load.\nPlease try again later."), this.btnBox.inputEnabled = this.grp.visible = !0
        }.bind(this)))
    }
}, UI_Game.prototype.createObj = function(e) {
    var t;
    if (e) t = e;
    else {
        t = this.seedList.shift(), this.seedList.push(GetRandIndex(this.objTable[this.maximumObjLv]));
        for (var i = 0; i < this.seedSprList.length; i++) kData.isNumber ? this.seedSprList[i].frameName = "num" + this.seedList[i] + ".png" : this.seedSprList[i].frameName = this.seedList[i] + ".png", this.seedSprList[i].width = this.seedSprList[i].height = 50, this.seedSprList[i].x = MG.iCSX + 160 + 65 * (i + 1), MG.game.add.tween(this.seedSprList[i]).to({
            x: MG.iCSX + 160 + 65 * i
        }, 350, Phaser.Easing.Quartic.Out, !0)
    }
    this.dragingObj = this.objectManager.getObject(this.grObject, MG.iCSX, MG.iCSY - 550, t), this.isKnife && (this.dragingObj.knife = !0)
}, UI_Game.prototype.collision = function(e, t, i, n, a) {
    if (e && i.body && n.body) {
        var o = i.body.parent.sprite,
            s = n.body.parent.sprite;
        if (o.knife || s.knife) {
            if (o.wall || s.wall) {
                var r = o.knife ? o : s;
                return r.body.destroy(), void(r.visible = !1)
            }
            return o.body.destroy(), s.body.destroy(), o.visible = !1, void(s.visible = !1)
        }(o.wall || s.wall) && (o.dropped && s.dropped || MG.PlayAudio("SE_Bump")), Math.abs(i.body.velocity[0]) < .005 && (0 == i.body.velocity[0] ? 1 == Random.Range(0, 2) ? i.body.velocity[0] += .005 : i.body.velocity[0] -= .005 : i.body.velocity[0] > 0 ? i.body.velocity[0] += .005 : i.body.velocity[0] -= .005), o.lv === s.lv && o.lv < 13 ? (MG.PlayAudio("SE_Merge"), MG.uiGame.merge(o, s)) : o.dropped && s.dropped || MG.PlayAudio("SE_Bump"), o.dropped = !0, s.dropped = !0
    }
}, UI_Game.prototype.merge = function(e, t) {
    var i = e.y > t.y ? e : t,
        n = e.y > t.y ? t : e;
    this.searchingMerge && (this.searchingMerge = !1), e.body.destroy(), t.body.destroy();
    MG.game.add.tween(n).to({
        x: i.x,
        y: i.y
    }, 150, Phaser.Easing.Default, !0).onComplete.add(function() {
        e.disable(), t.disable();
        var n = i.lv + 1,
            a = this.objectManager.getObjectSize(i.lv),
            o = this.objectManager.getObjectSize(n) - a;
        this.maximumObjLv = Math.max(n - 1, this.maximumObjLv), this.scoreUi.updateText(Math.pow(2, i.lv) + 1);
        var s = this.objectManager.getObject(this.grObject, i.x, i.y - o / 2, n);
        this.objectManager.setObjectBody(s), s.dropped = !0, s.body.velocity.y = -150, s.body.angle = i.angle, s.scale.setTo(.1), s.body.onBeginContact.removeAll(), setTimeout(function() {
            s && s.body && s.body.onBeginContact.add(this.collision, this)
        }.bind(this), 250), this.objectManager.getEffect(this.grObject, s.x, s.y, s.lv - 1);
        var r = GetFruitSize(n) / 2,
            d = MG.game.add.tween(s.scale).to({
                x: 1,
                y: 1
            }, 50, Phaser.Easing.Default, !0);
        d._onUpdateCallback = function() {
            s.body && s.body.setCircle(r * s.scale.x)
        }.bind(this), d.onComplete.add(function() {
            s.body && s.body.setCircle(r * s.scale.x)
        }.bind(this))
    }.bind(this))
}, UI_Game.prototype.update = function() {
    if (this.isPlaying) {
        if (this.boxEndDate) {
            var e = (this.boxEndDate - new Date) / 1e3,
                t = Math.floor(e / 60),
                i = Math.floor(e % 60),
                n = t >= 10 ? t.toString() : "0" + t,
                a = i >= 10 ? i.toString() : "0" + i;
            this.txtBoxRemainingTime.text = n + ":" + a, e < 1 && (this.boxEndDate = null, this.txtBoxRemainingTime.visible = !1, this.btnBoxLockSpr.visible = !0, this.btnBoxAdSpr.visible = !0)
        }
        for (var o = this.objectManager.getList(), s = !1, r = !1, d = 0; d < o.length; d++) {
            var l = o[d];
            if (l.body && l.dropped) {
                var h = l.body.sprite.y - l.body.sprite.height / 2;
                if (h <= 175) {
                    this.dangerLine.enable(1), this.gameOverCnt += 1, s = !0, r = !0, this.gameOverCnt >= 20 && (MG.PlayAudio("SE_GameOver"), this.gameOver());
                    break
                }
                h <= 275 && ("BGM_Main_Danger" !== this.currentBGM && (this.bgmSto && (clearTimeout(this.bgmSto), this.bgmSto = null), this.currentBGM = "BGM_Main_Danger", this.bgmSto2 = setTimeout(function() {
                    MG.FadeOutBgm(1e3, function() {
                        MG.PlayBgm("BGM_Main_Danger")
                    })
                }, 1e3)), this.dangerLine.enable(0), s = !0)
            }
        }
        s || ("BGM_Main_Danger" === this.currentBGM && (this.bgmSto2 && (clearTimeout(this.bgmSto2), this.bgmSto2 = null), this.currentBGM = "BGM_Main", this.bgmSto = setTimeout(function() {
            MG.FadeOutBgm(1e3, function() {
                MG.PlayBgm("BGM_Main")
            })
        }, 1e3)), this.dangerLine.disable()), r && !bAD || (this.gameOverCnt = 0)
    }
}, UI_Game.prototype.gameOver = function() {
    var e = this;
    this.isPlaying = !1, this.grp.visible = !1, MG.uiPopup.P_Pause && MG.uiPopup.P_Pause.main.visible && MG.uiPopup.P_Pause.close(), this.isRevive ? MG.uiPopup.GameOver() : MG.uiPopup.Confirm(MG.LM.Get("TEXT_POPUP_AD"), function() {
        e.dangerLine.visible = !1, MG.PauseBgm(), ShowAD("reward", "revive", function() {
            MG.ResumeBgm(), MG.uiPopup.NoMoreMove(function() {
                e.isRevive = !0, e.continue()
            })
        }, function() {
            MG.ResumeBgm(), MG.uiPopup.GameOver()
        })
    }, function() {
        MG.uiPopup.GameOver()
    })
}, UI_Game.prototype.continue = function() {
    var e = this;
    (function t() {
        setTimeout(function() {
            var i = e.objectManager.getList().filter(function(e) {
                return e.body && e.lv < 4
            });
            i.length > 0 ? (i[0].body.destroy(), i[0].visible = !1, MG.PlayAudio("SE_Merge"), e.objectManager.getEffect(e.grObject, i[0].x, i[0].y, i[0].lv), t.call(this)) : setTimeout(function() {
                e.isPlaying = !0, e.grp.visible = !0, e.gameOverCnt = 0
            }, 1e3)
        }.bind(this), 300)
    }).bind(this)()
}, UI_Popup.prototype.Pause = function() {
    var e = this;
    return function() {
        if (void 0 === e.P_Pause) {
            e.P_Pause = {}, e.P_Pause.main = MG.game.add.group(), e.main.addChild(e.P_Pause.main);
            var t = MG.AddSpriteNine(e.P_Pause.main, MG.iCSX, MG.iCSY, "gameAtlas", "Popup_Frame_A.png", 516, 894, {
                    top: 112,
                    bottom: 117,
                    left: 110,
                    right: 110
                }, .5, .5),
                i = MG.AddText(t, 0, -t.height / 2 + 70, MG.LM.Get("TEXT_SETTING"), {
                    font: "46px 1ONEMobilePOP",
                    fill: "#535963"
                }),
                n = MG.AddSprite(t, 75, -275, "gameAtlas", "Popup_GrayBar.png"),
                a = MG.AddButtonSprite(n, 70, 0, "gameAtlas", "Popup_Btn_On.png");
            MG.AddText(n, -200, 2, MG.LM.Get("TEXT_BGM"), {
                font: "36px 1ONEMobilePOP",
                fill: "#535963"
            });
            var o = MG.AddSprite(t, 75, n.y + 95, "gameAtlas", "Popup_GrayBar.png"),
                s = MG.AddButtonSprite(o, 70, 0, "gameAtlas", "Popup_Btn_On.png");
            MG.AddText(o, -200, 2, MG.LM.Get("TEXT_SFX"), {
                font: "36px 1ONEMobilePOP",
                fill: "#535963"
            });
            var r = MG.AddSprite(t, 75, n.y + 190, "gameAtlas", "Popup_GrayBar.png"),
                d = MG.AddButtonSprite(r, 70, 0, "gameAtlas", "Popup_Btn_On.png");
            MG.AddText(r, -200, 2, MG.LM.Get("TEXT_NUMBER"), {
                font: "36px 1ONEMobilePOP",
                fill: "#535963"
            });
            var l = MG.AddButtonSprite(t, 200, i.y, "gameAtlas", "Popup_Btn_Exit.png"),
                h = MG.AddSpriteNineButton(t, 0, 40, "gameAtlas", "Popup_Btn_Frame_Blue.png", 346, 116, {
                    top: 114,
                    bottom: 0,
                    left: 57,
                    right: 58
                });
            MG.AddText(h, -35, 0, MG.LM.Get("TEXT_HOME"), {
                font: "36px 1ONEMobilePOP",
                fill: "#ffffff"
            }), MG.AddSprite(h, 85, -2, "gameAtlas", "Popup_Icon_Home.png");
            var u = MG.AddSpriteNineButton(t, 0, 175, "gameAtlas", "Popup_Btn_Frame_Blue.png", 346, 116, {
                top: 114,
                bottom: 0,
                left: 57,
                right: 58
            });
            MG.AddText(u, -35, 0, MG.LM.Get("TEXT_RETRY"), {
                font: "36px 1ONEMobilePOP",
                fill: "#ffffff"
            }), MG.AddSprite(u, 85, -2, "gameAtlas", "Popup_Icon_Replay.png");
            var g = MG.AddSpriteNineButton(t, 0, 310, "gameAtlas", "Popup_Btn_Frame_Blue.png", 346, 116, {
                top: 114,
                bottom: 0,
                left: 57,
                right: 58
            });
            MG.AddText(g, -35, 0, MG.LM.Get("TEXT_CONTINUE"), {
                font: "36px 1ONEMobilePOP",
                fill: "#ffffff"
            });
            MG.AddSprite(g, 85, -2, "gameAtlas", "Popup_Icon_Continue.png"), e.P_Pause.init = function() {
                t.scale.setTo(.1), e.P_Pause.toggleSound(kData.isSfx), e.P_Pause.toggleBgm(kData.isBGM, !0), e.P_Pause.toggleNumber(kData.isNumber, !0), MG.disableTouch = !0, MG.game.add.tween(t.scale).to({
                    x: 1,
                    y: 1
                }, 300, Phaser.Easing.Quartic.Out, !0).onComplete.add(function() {
                    MG.disableTouch = !1
                }), e.P_Pause.main.visible = !0, e.P_Pause.main.addChild(e.blind), e.blind.visible = !0, e.blind.alpha = .5;
                for (var i = e.P_Pause.main.children.length - 1; i >= 0; i--) e.P_Pause.main.addChild(e.P_Pause.main.children[i])
            }, e.P_Pause.close = function(i) {
                MG.disableTouch = !0, MG.game.add.tween(e.blind).to({
                    alpha: 0
                }, 300, Phaser.Easing.Quartic.Out, !0), MG.game.add.tween(t.scale).to({
                    x: 0,
                    y: 0
                }, 300, Phaser.Easing.Quartic.Out, !0).onComplete.add(function() {
                    MG.disableTouch = !1, e.main.addChild(e.blind), e.blind.visible = !1, e.P_Pause.main.visible = !1, i && i()
                })
            }, e.P_Pause.resume = function() {
                e.P_Pause.close(function() {})
            }, e.P_Pause.home = function() {
                MG.NM.end({
                    type: "home"
                }, function() {
                    CheckAd(function() {
                        MG.uiGame.Hide(), MG.uiTitle.Show(), e.P_Pause.close(function() {})
                    }, function() {
                        MG.uiGame.Hide(), MG.uiTitle.Show(), e.P_Pause.close(function() {})
                    })
                })
            }, e.P_Pause.retry = function() {
                MG.NM.end({
                    type: "retry"
                }, function() {
                    CheckAd(function() {
                        MG.uiGame.initGame(), e.P_Pause.close(function() {})
                    }, function() {
                        MG.uiGame.initGame(), e.P_Pause.close(function() {})
                    })
                })
            }, e.P_Pause.toggleSound = function(e) {
                e ? (kData.isSfx = !0, s.frameName = "Popup_Btn_On.png", MG.game.add.tween(s).to({
                    x: 70
                }, 100, Phaser.Easing.Quadratic.Out, !0)) : (kData.isSfx = !1, s.frameName = "Popup_Btn_Off.png", MG.game.add.tween(s).to({
                    x: -70
                }, 100, Phaser.Easing.Quadratic.Out, !0)), MG.NM.LocalSave()
            }, e.P_Pause.toggleBgm = function(e, t) {
                e ? (kData.isBGM = !0, a.frameName = "Popup_Btn_On.png", MG.game.add.tween(a).to({
                    x: 70
                }, 100, Phaser.Easing.Quadratic.Out, !0), t || (MG._bgm[MG.currentBGM] && !0 === MG._bgm[MG.currentBGM].paused ? MG.ResumeBgm(MG.currentBGM) : MG.PlayBgm(MG.currentBGM))) : (kData.isBGM = !1, a.frameName = "Popup_Btn_Off.png", MG.game.add.tween(a).to({
                    x: -70
                }, 100, Phaser.Easing.Quadratic.Out, !0), MG.PauseBgm()), MG.NM.LocalSave()
            }, e.P_Pause.toggleNumber = function(e, t) {
                e ? (kData.isNumber = !0, d.frameName = "Popup_Btn_On.png", MG.game.add.tween(d).to({
                    x: 70
                }, 100, Phaser.Easing.Quadratic.Out, !0)) : (kData.isNumber = !1, d.frameName = "Popup_Btn_Off.png", MG.game.add.tween(d).to({
                    x: -70
                }, 100, Phaser.Easing.Quadratic.Out, !0)), t || MG.uiGame.objectManager.setVisibleNumber(kData.isNumber), MG.NM.LocalSave()
            }, s.events.onInputUp.add(function() {
                e.P_Pause.toggleSound(!kData.isSfx)
            }), a.events.onInputUp.add(function() {
                e.P_Pause.toggleBgm(!kData.isBGM)
            }), d.events.onInputUp.add(function() {
                e.P_Pause.toggleNumber(!kData.isNumber)
            }), h.events.onInputUp.add(e.P_Pause.home), l.events.onInputUp.add(e.P_Pause.resume), g.events.onInputUp.add(e.P_Pause.resume), u.events.onInputUp.add(e.P_Pause.retry)
        }
        return e.P_Pause.init(), e.P_Pause
    }()
}, UI_Popup.prototype.GameOver = function() {
    var e = this;
    return function() {
        if (MG.NM.end({
                type: "gameover"
            }), void 0 === e.P_GameOver) {
            e.P_GameOver = {}, e.P_GameOver.main = MG.game.add.group(), e.main.addChild(e.P_GameOver.main);
            var t = MG.game.add.spine(MG.iCSX, MG.iCSY, "gameOverSpine");
            e.P_GameOver.main.addChild(t), t.state.onComplete = function(i) {
                switch (i) {
                    case 0:
                        t.setAnimationByName(1, "Idle", !0), CheckAd(function() {
                            e.P_GameOver.countScore()
                        }, function() {
                            e.P_GameOver.countScore()
                        });
                        break;
                    case 2:
                        t.setAnimationByName(3, "New_Idle", !0), CheckAd(function() {
                            e.P_GameOver.countScore()
                        }, function() {
                            e.P_GameOver.countScore()
                        })
                }
            }, t.children[t.skeleton.findSlotIndex("BGMask")].children[0].inputEnabled = !0;
            var i = t.children[t.skeleton.findSlotIndex("Frame")],
                n = (MG.AddSpriteNine(i, 0, 0, "gameAtlas", "Popup_Frame_A.png", 576, 668, {
                    top: 112,
                    bottom: 117,
                    left: 110,
                    right: 110
                }, .5, .5), t.children[t.skeleton.findSlotIndex("Btn_Replay")]),
                a = MG.AddSpriteNineButton(n, 0, 0, "gameAtlas", "Popup_Btn_Frame_Yellow.png", 426, 114, {
                    top: 114,
                    bottom: 0,
                    left: 57,
                    right: 58
                });
            MG.AddText(a, -35, 0, MG.LM.Get("TEXT_RETRY"), {
                font: "32px 1ONEMobilePOP",
                fill: "#ffffff"
            }), MG.AddSprite(a, 85, -2, "gameAtlas", "Popup_Icon_Replay_Big.png");
            var o = t.children[t.skeleton.findSlotIndex("Btn_Home")],
                s = MG.AddSpriteNineButton(o, 0, 0, "gameAtlas", "Popup_Btn_Frame_Blue.png", 426, 114, {
                    top: 114,
                    bottom: 0,
                    left: 57,
                    right: 58
                });
            MG.AddText(s, -35, 0, MG.LM.Get("TEXT_HOME"), {
                font: "32px 1ONEMobilePOP",
                fill: "#ffffff"
            }), MG.AddSprite(s, 85, -2, "gameAtlas", "Popup_Icon_Home_Big.png");
            var r = t.children[t.skeleton.findSlotIndex("HighScore")],
                d = MG.AddText(r, 0, 3, "0", {
                    font: "46px 1ONEMobilePOP",
                    fill: "#ffffff",
                    align: "center"
                }),
                l = t.children[t.skeleton.findSlotIndex("Score")],
                h = MG.AddText(l, 0, 0, "0", {
                    font: "124px 1ONEMobilePOP",
                    fill: "#434955",
                    align: "center",
                    stroke: "#ffffff",
                    strokeThickness: 4
                });
            e.P_GameOver.init = function() {
                MG.uiGame.scoreUi.getAbsScore() > kData.iBestScore && (kData.iBestScore = MG.uiGame.scoreUi.getAbsScore(), MG.NM.LocalSave()), MG.FadeOutBgm(1e3), MG.PlayAudio("SE_GameOver"), t.state.clearTracks(), t.skeleton.setToSetupPose(), kData.iBestScore > MG.uiGame.scoreUi.getAbsScore() ? t.setAnimationByName(0, "In", !1) : t.setAnimationByName(2, "New_In", !1), d.text = kData.iBestScore
            }, e.P_GameOver.countScore = function() {
                var e = {
                        idx: 0
                    },
                    t = MG.game.add.tween(e).to({
                        idx: 1 * MG.uiGame.scoreUi.getAbsScore()
                    }, 350, Phaser.Easing.default, !0);
                t._onUpdateCallback = function() {
                    h.text = Math.round(e.idx).ToString("n0"), parseInt(MG.removeComma(h.text)) > parseInt(MG.removeComma(d.text)) && (d.text = h.text)
                }.bind(this), t.onComplete.add(function() {
                    h.text = Math.round(e.idx).ToString("n0"), parseInt(MG.removeComma(h.text)) > parseInt(MG.removeComma(d.text)) && (d.text = h.text)
                }, this)
            }, e.P_GameOver.close = function(t) {
                e.main.addChild(e.blind), e.blind.visible = !1, e.P_GameOver.main.destroy(), e.P_GameOver = void 0, delete e.P_GameOver, t && t()
            }, e.P_GameOver.retry = function() {
                MG.uiFade.inOut(300, 300, function() {
                    MG.PlayBgm("BGM_Main"), MG.uiGame.initGame(), e.P_GameOver.close(function() {})
                })
            }, e.P_GameOver.home = function() {
                MG.uiFade.inOut(300, 300, function() {
                    e.P_GameOver.close(function() {
                        MG.uiGame.Hide(), MG.uiTitle.Show()
                    })
                })
            }, a.events.onInputUp.add(e.P_GameOver.retry), s.events.onInputUp.add(e.P_GameOver.home)
        }
        return e.P_GameOver.init(), e.P_GameOver
    }()
}, UI_Popup.prototype.NoMoreMove = function(e) {
    var t = this;
    return function() {
        var i, n;
        void 0 === t.P_NMM && (t.P_NMM = {}, t.P_NMM.main = MG.game.add.group(), t.main.addChild(t.P_NMM.main), n = MG.AddText(t.P_NMM.main, 0, 0, MG.LM.Get("TEXT_POPUP_CONTINUE"), {
            font: "bold 32px 1ONEMobilePOP",
            fill: "#535963",
            wordWrap: !0,
            wordWrapWidth: 550,
            align: "center"
        }), (i = MG.AddSpriteNine(t.P_NMM.main, MG.iCSX, MG.iCSY, "gameAtlas", "Popup_Frame_B.png", 636, 260 + n.height, {
            top: 119,
            bottom: 120,
            left: 115,
            right: 116
        }, .5, .5)).addChild(n), t.P_NMM.init = function() {
            i.y = 1800, MG.game.add.tween(i).to({
                y: MG.iCSY
            }, 200, Phaser.Easing.Default, !0, 200).onComplete.add(function() {
                t.P_NMM.close()
            }), t.P_NMM.main.visible = !0, t.P_NMM.main.addChild(t.blind), t.blind.visible = !0, t.blind.alpha = .6;
            for (var e = t.P_NMM.main.children.length - 1; e >= 0; e--) t.P_NMM.main.addChild(t.P_NMM.main.children[e])
        }, t.P_NMM.close = function() {
            MG.game.add.tween(t.blind).to({
                alpha: 0
            }, 300, Phaser.Easing.Quartic.Out, !0, 1e3), MG.game.add.tween(i).to({
                y: -500
            }, 300, Phaser.Easing.Quartic.Out, !0, 1e3).onComplete.addOnce(function() {
                t.P_NMM.main.visible = !1, t.main.addChild(t.blind), t.blind.visible = !1, t.P_NMM.cb && t.P_NMM.cb()
            }.bind(this))
        });
        return t.P_NMM.cb = e, t.P_NMM.init(), t.P_NMM
    }()
}, UI_Popup.prototype.Confirm = function(e, t, i) {
    var n = this;
    return function() {
        if (void 0 === n.P_Confirm) {
            n.P_Confirm = {}, n.P_Confirm.fontStyle = {
                Comment: {
                    font: "36px 1ONEMobilePOP",
                    fill: "#535963",
                    boundsAlignH: "left",
                    align: "center",
                    wordWrap: !0,
                    wordWrapWidth: 500
                },
                Btn: {
                    font: "36px 1ONEMobilePOP",
                    fill: "#ffffff",
                    boundsAlignH: "left",
                    align: "center"
                }
            }, n.P_Confirm.main = MG.game.add.group(), n.main.addChild(n.P_Confirm.main);
            var a = MG.AddText(n.P_Confirm.main, 0, -65, "", n.P_Confirm.fontStyle.Comment),
                o = MG.DrawRect(n.P_Confirm.main, 0, 0, MG.iMSW, MG.iMSH, 0, .5, !0),
                s = MG.AddSpriteNine(n.P_Confirm.main, MG.iCSX, MG.iCSY, "gameAtlas", "Popup_Frame_B.png", 576, 484, {
                    top: 119,
                    bottom: 120,
                    left: 115,
                    right: 116
                }, .5, .5);
            s.addChild(a);
            var r = MG.AddSpriteNineButton(s, 110, s.height / 2 - 140, "gameAtlas", "Popup_Btn_Frame_Yellow.png", 194, 114, {
                top: 114,
                bottom: 0,
                left: 57,
                right: 58
            });
            MG.AddText(r, 0, 0, MG.LM.Get("TEXT_YES"), n.P_Confirm.fontStyle.Btn);
            var d = MG.AddSpriteNineButton(s, -110, s.height / 2 - 140, "gameAtlas", "Popup_Btn_Frame_Orange.png", 194, 114, {
                top: 114,
                bottom: 0,
                left: 57,
                right: 58
            });
            MG.AddText(d, 0, 0, MG.LM.Get("TEXT_NO"), n.P_Confirm.fontStyle.Btn), n.P_Confirm.init = function(t, i) {
                a.text = e, o.visible = !0, o.alpha = .7, s.scale.setTo(.1), MG.game.add.tween(s.scale).to({
                    x: 1,
                    y: 1
                }, 300, Phaser.Easing.Quartic.Out, !0).onComplete.add(function() {}), n.main.addChild(n.P_Confirm.main), n.P_Confirm.main.visible = !0
            }, n.P_Confirm.close = function(e) {
                THIS_STATE = GAME_STATE.LOADING, MG.disableTouch = !0, MG.game.add.tween(o).to({
                    alpha: 0
                }, 300, Phaser.Easing.Quartic.Out, !0), MG.game.add.tween(s.scale).to({
                    x: 0,
                    y: 0
                }, 300, Phaser.Easing.Quartic.Out, !0).onComplete.add(function() {
                    MG.disableTouch = !1, n.P_Confirm.main.destroy(), n.P_Confirm = void 0
                }.bind(this)), e && e()
            }, n.P_Confirm.yes = function() {
                n.P_Confirm.close(n.P_Confirm.yCb)
            }, n.P_Confirm.no = function() {
                n.P_Confirm.close(n.P_Confirm.nCb)
            }, r.events.onInputUp.add(n.P_Confirm.yes, this), d.events.onInputUp.add(n.P_Confirm.no, this)
        }
        return n.P_Confirm.yCb = t, n.P_Confirm.nCb = i, n.P_Confirm.init(), n.P_Confirm
    }()
}, UI_Popup.prototype.Alert = function(e, t) {
    var i = this;
    return function() {
        if (void 0 === i.P_Alert) {
            i.P_Alert = {}, i.P_Alert.fontStyle = {
                Comment: {
                    font: "36px 1ONEMobilePOP",
                    fill: "#535963",
                    boundsAlignH: "left",
                    align: "center",
                    wordWrap: !0,
                    wordWrapWidth: 500
                },
                Btn: {
                    font: "36px 1ONEMobilePOP",
                    fill: "#ffffff",
                    boundsAlignH: "left",
                    align: "center"
                }
            }, i.P_Alert.main = MG.game.add.group(), i.main.addChild(i.P_Alert.main);
            var n = MG.AddText(i.P_Alert.main, 0, -65, "", i.P_Alert.fontStyle.Comment),
                a = MG.DrawRect(i.P_Alert.main, 0, 0, MG.iMSW, MG.iMSH, 0, .5, !0),
                o = MG.AddSpriteNine(i.P_Alert.main, MG.iCSX, MG.iCSY, "gameAtlas", "Popup_Frame_B.png", 636, 400 + n.height, {
                    top: 119,
                    bottom: 120,
                    left: 115,
                    right: 116
                }, .5, .5);
            o.addChild(n);
            var s = MG.AddSpriteNineButton(o, 0, o.height / 2 - 140, "gameAtlas", "Popup_Btn_Frame_Yellow.png", 194, 114, {
                top: 114,
                bottom: 0,
                left: 57,
                right: 58
            });
            MG.AddText(s, 0, 0, MG.LM.Get("TEXT_YES"), i.P_Alert.fontStyle.Btn), i.P_Alert.init = function(t, s) {
                n.text = e, a.visible = !0, a.alpha = .7, o.scale.setTo(.1), MG.game.add.tween(o.scale).to({
                    x: 1,
                    y: 1
                }, 300, Phaser.Easing.Quartic.Out, !0).onComplete.add(function() {}), i.main.addChild(i.P_Alert.main), i.P_Alert.main.visible = !0
            }, i.P_Alert.close = function(e) {
                THIS_STATE = GAME_STATE.LOADING, MG.game.add.tween(a).to({
                    alpha: 0
                }, 300, Phaser.Easing.Quartic.Out, !0), MG.game.add.tween(o.scale).to({
                    x: 0,
                    y: 0
                }, 300, Phaser.Easing.Quartic.Out, !0).onComplete.add(function() {
                    i.P_Alert.main.destroy(), i.P_Alert = void 0
                }.bind(this)), e && e()
            }, i.P_Alert.yes = function() {
                i.P_Alert.close(i.P_Alert.yCb)
            }, s.events.onInputUp.add(i.P_Alert.yes, this)
        }
        return i.P_Alert.yCb = t, i.P_Alert.init(), i.P_Alert
    }()
};
var GAME_STATE = {
    LOADING: 0,
    TITLE: 1,
    GAME: 2
};

function toggleSound(e, t, i) {
    1 == kData.isBGM ? (e.loadTexture("gameAtlas", i), kData.isBGM = kData.isSfx = !1, MG.PauseBgm()) : (e.loadTexture("gameAtlas", t), kData.isBGM = kData.isSfx = !0, MG.currentBGM && !0 === MG._bgm[MG.currentBGM].paused ? MG.ResumeBgm() : MG.PlayBgm("BGM_Main")), MG.NM.LocalSave()
}

function Fade() {
    this.grp = MG.DrawRect(MG.game.world, 0, 0, MG.iMSW, MG.iMSH, 0, 0, !0), this.grp.visible = !1;
    var e = this;
    this.in = function(t, i) {
        e.grp.visible = !0, e.grp.alpha = 0, MG.game.add.tween(e.grp).to({
            alpha: 1
        }, t, Phaser.Easing.Power0, !0).onComplete.addOnce(function() {
            i && i()
        }, this)
    }, this.out = function(t, i) {
        MG.game.add.tween(e.grp).to({
            alpha: 0
        }, t, Phaser.Easing.Power0, !0).onComplete.addOnce(function() {
            i && i(), e.grp.visible = !1
        }, this)
    }, this.inOut = function(t, i, n, a) {
        e.in(t, function() {
            n && n(), e.out(i, function() {
                a && a()
            })
        })
    }
}
Game.prototype = {
    preload: function() {
        this.game.stage.disableVisibilityChange = !0, this.game.time.advancedTiming = !0, this.game.time.desiredFps = 144, this.game.time.slowMotion = 1, this.game.stage.backgroundColor = "#ffef9c", this.input.maxPointers = 1
    },
    create: function() {
        ShowAD("basic", "result", function() {}.bind(this), function() {}.bind(this)), this.initGameGroup(), this.initGame(), this.grp = MG.DrawRect(MG.game.world, 0, 0, MG.iMSW, MG.iMSH, 0, 0, !0), this.grp.visible = !1;
        var e = MG.AddSprite(MG.grBG, MG.iCSX, 0, "gameAtlas", "Game_BG_Gradient.png");
        e.anchor.y = 0, e.width = 720, Object.defineProperties(MG, {
            disableTouch: {
                get: function() {
                    return this.grp.visible
                }.bind(this),
                set: function(e) {
                    this.grp.visible = e
                }.bind(this)
            }
        }), "100064" == Define.PID && PopconGame.Sdk.createAppMoreGame(MG.game, 50, 150), MG.PlayBgm("BGM_Main")
    },
    initGameGroup: function() {
        MG.grBG = MG.game.add.group(), MG.grTouch = MG.game.add.group(), MG.grGame = MG.game.add.group(), MG.grBar = MG.game.add.group(), MG.grPopup = MG.game.add.group()
    },
    initGame: function() {
        MG.uiTitle = new UI_Title(MG.grGame), MG.uiGame = new UI_Game(MG.grGame), MG.uiPopup = new UI_Popup(MG.grPopup), MG.uiFade = new Fade(MG.grTouch)
    }
}, window[""] = window[""] || {}, window[""].Game = Game;