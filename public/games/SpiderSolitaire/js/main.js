/*!
 * TweenJS
 * Visit http://createjs.com/ for documentation, updates and examples.
 *
 * Copyright (c) 2010 gskinner.com, inc.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
function buildIOSMeta() {
    for (var n, i, r = [{
            name: "viewport",
            content: "width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
        }, {
            name: "apple-mobile-web-app-capable",
            content: "yes"
        }, {
            name: "apple-mobile-web-app-status-bar-style",
            content: "black"
        }], t = 0; t < r.length; t++) n = document.createElement("meta"), n.name = r[t].name, n.content = r[t].content, i = window.document.head.querySelector('meta[name="' + n.name + '"]'), i && i.parentNode.removeChild(i), window.document.head.appendChild(n)
}

function hideIOSFullscreenPanel() {
    jQuery(".xxx-ios-fullscreen-message").css("display", "none");
    jQuery(".xxx-ios-fullscreen-scroll").css("display", "none");
    jQuery(".xxx-game-iframe-full").removeClass("xxx-game-iframe-iphone-se")
}

function buildIOSFullscreenPanel() {
    var n = "";
    n += '<div class="xxx-ios-fullscreen-message">';
    n += '<div class="xxx-ios-fullscreen-swipe">';
    n += "<\/div>";
    n += "<\/div>";
    n += '<div class="xxx-ios-fullscreen-scroll">';
    n += "<\/div>";
    jQuery("body").append(n)
}

function showIOSFullscreenPanel() {
    jQuery(".xxx-ios-fullscreen-message").css("display", "block");
    jQuery(".xxx-ios-fullscreen-scroll").css("display", "block")
}

function __iosResize() {
    if (window.scrollTo(0, 0), console.log(window.devicePixelRatio), console.log(window.innerWidth), console.log(window.innerHeight), platform.product === "iPhone") switch (window.devicePixelRatio) {
        case 2:
            switch (window.innerWidth) {
                case 568:
                    window.innerHeight === 320 || jQuery(".xxx-game-iframe-full").addClass("xxx-game-iframe-iphone-se");
                    break;
                case 667:
                    window.innerHeight === 375 ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                case 808:
                    window.innerHeight === 414 ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                default:
                    hideIOSFullscreenPanel()
            }
            break;
        case 3:
            switch (window.innerWidth) {
                case 736:
                    window.innerHeight === 414 ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                case 724:
                    window.innerHeight === 375 ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                case 808:
                    window.innerHeight === 414 ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
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
    } catch (n) {
        return !0
    }
}

function isIOSLessThen13() {
    var n = platform.os,
        t = n.family.toLowerCase(),
        i = parseFloat(n.version);
    return t === "ios" && i < 13 ? !0 : !1
}

function trace(n) {
    console.log(n)
}

function getSize(n) {
    var u, e = n.toLowerCase(),
        f = window.document,
        t = f.documentElement,
        i, r;
    return window["inner" + n] === undefined ? u = t["client" + n] : window["inner" + n] != t["client" + n] ? (i = f.createElement("body"), i.id = "vpw-test-b", i.style.cssText = "overflow:scroll", r = f.createElement("div"), r.id = "vpw-test-d", r.style.cssText = "position:absolute;top:-1000px", r.innerHTML = "<style>@media(" + e + ":" + t["client" + n] + "px){body#vpw-test-b div#vpw-test-d{" + e + ":7px!important}}<\/style>", i.appendChild(r), t.insertBefore(i, f.head), u = r["offset" + n] == 7 ? t["client" + n] : window["inner" + n], t.removeChild(i)) : u = window["inner" + n], u
}

function onOrientationChange() {
    window.matchMedia("(orientation: portrait)").matches && sizeHandler();
    window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}

function isChrome() {
    return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
}

function isIpad() {
    var n = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
        t = navigator.userAgent.includes("Intel Mac OS X");
    return n && t
}

function isMobile() {
    return isIpad() ? !0 : navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ? !0 : !1
}

function isIOS() {
    var n, t;
    if (isIpad()) return !0;
    for (n = ["iPad", "iPhone", "iPod", "Mac"]; n.length;) {
        let i = (navigator.userAgentData && navigator.userAgentData.platform) || navigator.platform;
        if (i = i.toLowerCase(), t = n.pop(), i && i.includes(t.toLowerCase())) return !0
    }
    return !1
}

function getIOSWindowHeight() {
    var n = document.documentElement.clientWidth / window.innerWidth;
    return window.innerHeight * n
}

function getHeightOfIOSToolbars() {
    var n = (window.orientation === 0 ? screen.height : screen.width) - getIOSWindowHeight();
    return n > 1 ? n : 0
}

function sizeHandler() {
    var t, r;
    if (window.scrollTo(0, 1), $("#canvas")) {
        t = platform.name !== null && platform.name.toLowerCase() === "safari" ? getIOSWindowHeight() : getSize("Height");
        r = getSize("Width");
        s_bFocus && _checkOrientation(r, t);
        var e = Math.min(t / CANVAS_HEIGHT, r / CANVAS_WIDTH),
            n = Math.round(CANVAS_WIDTH * e),
            i = Math.round(CANVAS_HEIGHT * e),
            f = 0;
        i < t ? (f = t - i, i += f, n += f * (CANVAS_WIDTH / CANVAS_HEIGHT)) : n < r && (f = r - n, n += f, i += f * (CANVAS_HEIGHT / CANVAS_WIDTH));
        var u = t / 2 - i / 2,
            o = r / 2 - n / 2,
            s = CANVAS_WIDTH / n;
        (o * s < -EDGEBOARD_X || u * s < -EDGEBOARD_Y) && (e = Math.min(t / (CANVAS_HEIGHT - EDGEBOARD_Y * 2), r / (CANVAS_WIDTH - EDGEBOARD_X * 2)), n = Math.round(CANVAS_WIDTH * e), i = Math.round(CANVAS_HEIGHT * e), u = (t - i) / 2, o = (r - n) / 2, s = CANVAS_WIDTH / n);
        s_iOffsetX = -1 * o * s;
        s_iOffsetY = -1 * u * s;
        u >= 0 && (s_iOffsetY = 0);
        o >= 0 && (s_iOffsetX = 0);
        s_oInterface !== null && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        s_oModeMenu !== null && s_oModeMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        s_oMenu !== null && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        $("#canvas").css("width", n + "px");
        $("#canvas").css("height", i + "px");
        u < 0 ? $("#canvas").css("top", u + "px") : (u = (t - i) / 2, $("#canvas").css("top", u + "px"));
        $("#canvas").css("left", o + "px");
        fullscreenHandler()
    }
}

function createBitmap(n, t, i) {
    var u = new createjs.Bitmap(n),
        r = new createjs.Shape;
    return t && i ? r.graphics.beginFill("#fff").drawRect(0, 0, t, i) : r.graphics.beginFill("#ff0").drawRect(0, 0, n.width, n.height), u.hitArea = r, u
}

function createSprite(n, t, i, r, u, f) {
    var e, o;
    return e = t !== null ? new createjs.Sprite(n, t) : new createjs.Sprite(n), o = new createjs.Shape, o.graphics.beginFill("#000000").drawRect(-i, -r, u, f), e.hitArea = o, e
}

function _checkOrientation(n, t) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (n > t ? $(".orientation-msg-container").attr("data-orientation") === "landscape" ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : $(".orientation-msg-container").attr("data-orientation") === "portrait" ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()))
}

function randomFloatBetween(n, t, i) {
    return typeof i == "undefined" && (i = 2), parseFloat(Math.min(n + Math.random() * (t - n), t).toFixed(i))
}

function shuffle(n) {
    for (var t = n.length, r, i; 0 !== t;) i = Math.floor(Math.random() * t), t -= 1, r = n[t], n[t] = n[i], n[i] = r;
    return n
}

function bubbleSort(n) {
    var i, t, r;
    do
        for (i = !1, t = 0; t < n.length - 1; t++) n[t] > n[t + 1] && (r = n[t], n[t] = n[t + 1], n[t + 1] = r, i = !0); while (i)
}

function easeLinear(n, t, i, r) {
    return i * n / r + t
}

function easeInQuad(n, t, i, r) {
    return i * (n /= r) * n + t
}

function easeInSine(n, t, i, r) {
    return -i * Math.cos(n / r * (Math.PI / 2)) + i + t
}

function easeInCubic(n, t, i, r) {
    return i * (n /= r) * n * n + t
}

function getTrajectoryPoint(n, t) {
    var i = new createjs.Point,
        r = (1 - n) * (1 - n),
        u = n * n;
    return i.x = r * t.start.x + 2 * (1 - n) * n * t.traj.x + u * t.end.x, i.y = r * t.start.y + 2 * (1 - n) * n * t.traj.y + u * t.end.y, i
}

function formatTime(n) {
    var i, t, r;
    return n /= 1e3, i = Math.floor(n / 60), t = n - i * 60, t = parseFloat(t).toFixed(1), r = "", r += i < 10 ? "0" + i + ":" : i + ":", r + (t < 10 ? "0" + t : t)
}

function degreesToRadians(n) {
    return n * Math.PI / 180
}

function checkRectCollision(n, t) {
    var i, r;
    return i = getBounds(n, .9), r = getBounds(t, .98), calculateIntersection(i, r)
}

function calculateIntersection(n, t) {
    var u, f, i = {},
        r = {};
    return i.cx = n.x + (i.hw = n.width / 2), i.cy = n.y + (i.hh = n.height / 2), r.cx = t.x + (r.hw = t.width / 2), r.cy = t.y + (r.hh = t.height / 2), u = Math.abs(i.cx - r.cx) - (i.hw + r.hw), f = Math.abs(i.cy - r.cy) - (i.hh + r.hh), u < 0 && f < 0 ? (u = Math.min(Math.min(n.width, t.width), -u), f = Math.min(Math.min(n.height, t.height), -f), {
        x: Math.max(n.x, t.x),
        y: Math.max(n.y, t.y),
        width: u,
        height: f,
        rect1: n,
        rect2: t
    }) : null
}

function getBounds(n, t) {
    var i = {
            x: Infinity,
            y: Infinity,
            width: 0,
            height: 0
        },
        l, v, u, c, f, e, o, s, r, a, h;
    if (n instanceof createjs.Container) {
        for (i.x2 = -Infinity, i.y2 = -Infinity, l = n.children, v = l.length, c = 0; c < v; c++) u = getBounds(l[c], 1), u.x < i.x && (i.x = u.x), u.y < i.y && (i.y = u.y), u.x + u.width > i.x2 && (i.x2 = u.x + u.width), u.y + u.height > i.y2 && (i.y2 = u.y + u.height);
        i.x == Infinity && (i.x = 0);
        i.y == Infinity && (i.y = 0);
        i.x2 == Infinity && (i.x2 = 0);
        i.y2 == Infinity && (i.y2 = 0);
        i.width = i.x2 - i.x;
        i.height = i.y2 - i.y;
        delete i.x2;
        delete i.y2
    } else r = {}, n instanceof createjs.Bitmap ? (a = n.sourceRect || n.image, r.width = a.width * t, r.height = a.height * t) : n instanceof createjs.Sprite ? n.spriteSheet._frames && n.spriteSheet._frames[n.currentFrame] && n.spriteSheet._frames[n.currentFrame].image ? (h = n.spriteSheet.getFrame(n.currentFrame), r.width = h.rect.width, r.height = h.rect.height, r.regX = h.regX, r.regY = h.regY) : (i.x = n.x || 0, i.y = n.y || 0) : (i.x = n.x || 0, i.y = n.y || 0), r.regX = r.regX || 0, r.width = r.width || 0, r.regY = r.regY || 0, r.height = r.height || 0, i.regX = r.regX, i.regY = r.regY, f = n.localToGlobal(0 - r.regX, 0 - r.regY), e = n.localToGlobal(r.width - r.regX, r.height - r.regY), o = n.localToGlobal(r.width - r.regX, 0 - r.regY), s = n.localToGlobal(0 - r.regX, r.height - r.regY), i.x = Math.min(Math.min(Math.min(f.x, e.x), o.x), s.x), i.y = Math.min(Math.min(Math.min(f.y, e.y), o.y), s.y), i.width = Math.max(Math.max(Math.max(f.x, e.x), o.x), s.x) - i.x, i.height = Math.max(Math.max(Math.max(f.y, e.y), o.y), s.y) - i.y;
    return i
}

function NoClickDelay(n) {
    this.element = n;
    window.Touch && this.element.addEventListener("touchstart", this, !1)
}

function shuffle(n) {
    for (var t = n.length, r, i; t > 0;) i = Math.floor(Math.random() * t), t--, r = n[t], n[t] = n[i], n[i] = r;
    return n
}

function ctlArcadeResume() {
    s_oMain !== null && s_oMain.startUpdate()
}

function ctlArcadePause() {
    s_oMain !== null && s_oMain.stopUpdate()
}

function getParamValue(n) {
    for (var i, u = window.location.search.substring(1), r = u.split("&"), t = 0; t < r.length; t++)
        if (i = r[t].split("="), i[0] == n) return i[1]
}

function playSound(n, t, i) {
    return DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1 ? (s_aSounds[n].play(), s_aSounds[n].volume(t), s_aSounds[n].loop(i), s_aSounds[n]) : null
}

function stopSound(n) {
    (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && s_aSounds[n].stop()
}

function setVolume(n, t) {
    (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && s_aSounds[n].volume(t)
}

function setMute(n, t) {
    (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && s_aSounds[n].mute(t)
}

function fullscreenHandler() {
    ENABLE_FULLSCREEN && screenfull.isEnabled && (s_bFullscreen = screenfull.isFullscreen, s_oInterface !== null && s_oInterface.resetFullscreenBut(), s_oMenu !== null && s_oMenu.resetFullscreenBut(), s_oModeMenu !== null && s_oModeMenu.resetFullscreenBut())
}

function CSpriteLibrary() {
    var t = {},
        n, i, u, f, e, r;
    this.init = function(t, o, s) {
        n = {};
        i = 0;
        u = 0;
        f = t;
        e = o;
        r = s
    };
    this.addSprite = function(r, u) {
        if (!t.hasOwnProperty(r)) {
            var f = new Image;
            t[r] = n[r] = {
                szPath: u,
                oSprite: f,
                bLoaded: !1
            };
            i++
        }
    };
    this.getSprite = function(n) {
        return t.hasOwnProperty(n) ? t[n].oSprite : null
    };
    this._onSpritesLoaded = function() {
        i = 0;
        e.call(r)
    };
    this._onSpriteLoaded = function() {
        f.call(r);
        ++u === i && this._onSpritesLoaded()
    };
    this.loadSprites = function() {
        for (var t in n) n[t].oSprite.oSpriteLibrary = this, n[t].oSprite.szKey = t, n[t].oSprite.onload = function() {
            this.oSpriteLibrary.setLoaded(this.szKey);
            this.oSpriteLibrary._onSpriteLoaded(this.szKey)
        }, n[t].oSprite.onerror = function(t) {
            var i = t.currentTarget;
            setTimeout(function() {
                n[i.szKey].oSprite.src = n[i.szKey].szPath
            }, 500)
        }, n[t].oSprite.src = n[t].szPath
    };
    this.setLoaded = function(n) {
        t[n].bLoaded = !0
    };
    this.isLoaded = function(n) {
        return t[n].bLoaded
    };
    this.getNumSprites = function() {
        return i
    }
}

function CPreloader() {
    var s, o, r, t, u, f, i, e, n;
    this._init = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
        s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
        s_oSpriteLibrary.loadSprites();
        n = new createjs.Container;
        s_oStage.addChild(n)
    };
    this.unload = function() {
        n.removeAllChildren()
    };
    this._onImagesLoaded = function() {};
    this._onAllImagesLoaded = function() {
        this.attachSprites();
        s_oMain.preloaderReady()
    };
    this.attachSprites = function() {
        var c = new createjs.Shape,
            h;
        c.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        n.addChild(c);
        h = s_oSpriteLibrary.getSprite("200x200");
        i = createBitmap(h);
        i.regX = h.width * .5;
        i.regY = h.height * .5;
        i.x = CANVAS_WIDTH / 2;
        i.y = CANVAS_HEIGHT / 2 - 180;
        n.addChild(i);
        e = new createjs.Shape;
        e.graphics.beginFill("rgba(0,0,0,0.01)").drawRoundRect(i.x - 100, i.y - 100, 200, 200, 10);
        n.addChild(e);
        i.mask = e;
        h = s_oSpriteLibrary.getSprite("progress_bar");
        t = createBitmap(h);
        t.x = CANVAS_WIDTH / 2 - h.width / 2;
        t.y = CANVAS_HEIGHT / 2 + 50;
        n.addChild(t);
        s = h.width;
        o = h.height;
        u = new createjs.Shape;
        u.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(t.x, t.y, 1, o);
        n.addChild(u);
        t.mask = u;
        r = new createjs.Text("", "30px " + PRIMARY_FONT, "#fff");
        r.x = CANVAS_WIDTH / 2;
        r.y = CANVAS_HEIGHT / 2 + 100;
        r.textBaseline = "alphabetic";
        r.textAlign = "center";
        n.addChild(r);
        f = new createjs.Shape;
        f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        n.addChild(f);
        createjs.Tween.get(f).to({
            alpha: 0
        }, 500).call(function() {
            createjs.Tween.removeTweens(f);
            n.removeChild(f)
        })
    };
    this.refreshLoader = function(n) {
        r.text = n + "%";
        n === 100 && (r.visible = !1, t.visible = !1, s_oMain._onRemovePreloader());
        u.graphics.clear();
        var i = Math.floor(n * s / 100);
        u.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(t.x, t.y, i, o)
    };
    this._init()
}

function CMain(n) {
    var i, r = 0,
        u = 0,
        t = STATE_LOADING,
        e, f, s, h, c, o;
    this.initContainer = function() {
        if (s_oCanvas = document.getElementById("canvas"), s_oStage = new createjs.Stage(s_oCanvas), createjs.Touch.enable(s_oStage, !0), s_bMobile = isMobile(), s_bMobile === !1) {
            s_oStage.enableMouseOver(20);
            $("body").on("contextmenu", "#canvas", function() {
                return !1
            })
        }
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.framerate = FPS;
        navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
        s_oSpriteLibrary = new CSpriteLibrary;
        f = new CPreloader;
    };
    this.preloaderReady = function() {
        this._loadImages();
        (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && this._initSounds();
        i = !0
    };
    this.soundLoaded = function() {
        r++;
        var n = Math.floor(r / u * 100);
        f.refreshLoader(n)
    };
    this._initSounds = function() {
        Howler.mute(!s_bAudioActive);
        s_aSoundsInfo = [];
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "card_dealing",
            loop: !1,
            volume: 1,
            ingamename: "card_dealing"
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
            filename: "snap",
            loop: !1,
            volume: 1,
            ingamename: "snap"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "game_over",
            loop: !1,
            volume: 1,
            ingamename: "game_over"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "card",
            loop: !1,
            volume: 1,
            ingamename: "card"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "soundtrack",
            loop: !0,
            volume: 1,
            ingamename: "soundtrack"
        });
        u += s_aSoundsInfo.length;
        s_aSounds = [];
        for (var n = 0; n < s_aSoundsInfo.length; n++) this.tryToLoadSound(s_aSoundsInfo[n], !1)
    };
    this.tryToLoadSound = function(n, t) {
        setTimeout(function() {
            s_aSounds[n.ingamename] = new Howl({
                src: [n.path + n.filename + ".mp3"],
                autoplay: !1,
                preload: !0,
                loop: n.loop,
                volume: n.volume,
                onload: s_oMain.soundLoaded,
                onloaderror: function(n) {
                    for (var t = 0; t < s_aSoundsInfo.length; t++)
                        if (s_aSounds[s_aSoundsInfo[t].ingamename]._sounds.length > 0 && n === s_aSounds[s_aSoundsInfo[t].ingamename]._sounds[0]._id) {
                            s_oMain.tryToLoadSound(s_aSoundsInfo[t], !0);
                            break
                        } else document.querySelector("#block_game").style.display = "none"
                },
                onplayerror: function(n) {
                    for (var t = 0; t < s_aSoundsInfo.length; t++)
                        if (n === s_aSounds[s_aSoundsInfo[t].ingamename]._sounds[0]._id) {
                            s_aSounds[s_aSoundsInfo[t].ingamename].once("unlock", function() {
                                s_aSounds[s_aSoundsInfo[t].ingamename].play();
                                s_aSoundsInfo[t].ingamename === "soundtrack" && s_oGame !== null && setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME)
                            });
                            break
                        }
                }
            })
        }, t ? 200 : 0)
    };
    this._loadImages = function() {
        var n, t;
        for (s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this), s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png"), s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png"), s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg"), s_oSpriteLibrary.addSprite("bg_layout", "./sprites/bg_layout.jpg"), s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg"), s_oSpriteLibrary.addSprite("bg_help", "./sprites/bg_help.png"), s_oSpriteLibrary.addSprite("arrow", "./sprites/arrow.png"), s_oSpriteLibrary.addSprite("hintpanel", "./sprites/hintpanel.png"), s_oSpriteLibrary.addSprite("but_yes", "./sprites/but_yes.png"), s_oSpriteLibrary.addSprite("but_no", "./sprites/but_no.png"), s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png"), s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png"), s_oSpriteLibrary.addSprite("but_help", "./sprites/but_help.png"), s_oSpriteLibrary.addSprite("but_shuffle", "./sprites/but_shuffle.png"), s_oSpriteLibrary.addSprite("score_moves_display", "./sprites/score_moves_display.png"), n = 0; n < 4; n++)
            for (t = 1; t < 14; t++) s_oSpriteLibrary.addSprite("card_" + n + "_" + t, "./sprites/cards/card_" + n + "_" + t + ".png");
        s_oSpriteLibrary.addSprite("card_back", "./sprites/cards/card_back.png");
        s_oSpriteLibrary.addSprite("hearts_suit", "./sprites/hearts_suit.png");
        s_oSpriteLibrary.addSprite("diamonds_suit", "./sprites/diamonds_suit.png");
        s_oSpriteLibrary.addSprite("clubs_suit", "./sprites/clubs_suit.png");
        s_oSpriteLibrary.addSprite("spades_suit", "./sprites/spades_suit.png");
        s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
        s_oSpriteLibrary.addSprite("ctl_logo", "./sprites/ctl_logo.png");
        u += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    };
    this._onImagesLoaded = function() {
        r++;
        var n = Math.floor(r / u * 100);
        f.refreshLoader(n)
    };
    this._onAllImagesLoaded = function() {};
    this._onRemovePreloader = function() {
        f.unload();
        s_oSoundTrack = playSound("soundtrack", 1, !0);
        this.gotoMenu()
    };
    this.gotoMenu = function() {
        s = new CMenu;
        t = STATE_MENU
    };
    this.goToModeMenu = function() {
        h = new CModeMenu;
        t = STATE_MENU
    };
    this.gotoGame = function(n) {
        s_iMode = n;
        o = new CGame(e);
        t = STATE_GAME
    };
    this.gotoHelp = function() {
        c = new CHelp;
        t = STATE_HELP
    };
    this.stopUpdate = function() {
        i = !1;
        createjs.Ticker.paused = !0;
        $("#block_game").css("display", "block");
        (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && Howler.mute(!0)
    };
    this.startUpdate = function() {
        s_iPrevTime = (new Date).getTime();
        i = !0;
        createjs.Ticker.paused = !1;
        $("#block_game").css("display", "none");
        (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && s_bAudioActive && Howler.mute(!1)
    };
    this._update = function(n) {
        if (i !== !1) {
            var r = (new Date).getTime();
            s_iTimeElaps = r - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = r;
            s_iCntTime >= 1e3 && (s_iCurFps = s_iCntFps, s_iCntTime -= 1e3, s_iCntFps = 0);
            t === STATE_GAME && o.update();
            s_oStage.update(n)
        }
    };
    s_oMain = this;
    e = n;
    ENABLE_FULLSCREEN = n.fullscreen;
    ENABLE_CHECK_ORIENTATION = n.check_orientation;
    s_bAudioActive = n.audio_enable_on_startup;
    this.initContainer()
}

function CTextButton(n, t, i, r, u, f, e, o) {
    var l, a, s, c, h, v, y;
    return this._init = function(n, t, i, r, u, f, e, o) {
        var p, y, v;
        l = [];
        a = [];
        p = createBitmap(i);
        y = Math.ceil(e / 20);
        h = new createjs.Text(r, e + "px " + u, "#000000");
        h.textAlign = "center";
        h.textBaseline = "alphabetic";
        v = h.getBounds();
        h.x = i.width / 2 + y;
        h.y = Math.floor(i.height / 2) + v.height / 3 + y;
        c = new createjs.Text(r, e + "px " + u, f);
        c.textAlign = "center";
        c.textBaseline = "alphabetic";
        v = c.getBounds();
        c.x = i.width / 2;
        c.y = Math.floor(i.height / 2) + v.height / 3;
        s = new createjs.Container;
        s.x = n;
        s.y = t;
        s.regX = i.width / 2;
        s.regY = i.height / 2;
        s.addChild(p, h, c);
        s_bMobile || (s.cursor = "pointer");
        o.addChild(s);
        this._initListener()
    }, this.unload = function() {
        s.off("mousedown", v);
        s.off("pressup", y);
        o.removeChild(s)
    }, this.setVisible = function(n) {
        s.visible = n
    }, this._initListener = function() {
        oParent = this;
        v = s.on("mousedown", this.buttonDown);
        y = s.on("pressup", this.buttonRelease)
    }, this.addEventListener = function(n, t, i) {
        l[n] = t;
        a[n] = i
    }, this.buttonRelease = function() {
        s.scaleX = 1;
        s.scaleY = 1;
        l[ON_MOUSE_UP] && l[ON_MOUSE_UP].call(a[ON_MOUSE_UP])
    }, this.buttonDown = function() {
        s.scaleX = .9;
        s.scaleY = .9;
        l[ON_MOUSE_DOWN] && l[ON_MOUSE_DOWN].call(a[ON_MOUSE_DOWN])
    }, this.setTextPosition = function(n) {
        c.y = n;
        h.y = n + 2
    }, this.setPosition = function(n, t) {
        s.x = n;
        s.y = t
    }, this.setX = function(n) {
        s.x = n
    }, this.setY = function(n) {
        s.y = n
    }, this.getButtonImage = function() {
        return s
    }, this.getX = function() {
        return s.x
    }, this.getY = function() {
        return s.y
    }, this.removeStroke = function() {
        h.visible = !1
    }, this._init(n, t, i, r, u, f, e, o), this
}

function CToggle(n, t, i, r, u) {
    var e, o, s, f, h, c, l;
    this._init = function(n, t, i, r) {
        o = [];
        s = [];
        var u = {
                images: [i],
                frames: {
                    width: i.width / 2,
                    height: i.height,
                    regX: i.width / 4,
                    regY: i.height / 2
                },
                animations: {
                    state_true: [0],
                    state_false: [1]
                }
            },
            c = new createjs.SpriteSheet(u);
        e = r;
        f = createSprite(c, "state_" + e, i.width / 4, i.height / 2, i.width / 2, i.height);
        f.x = n;
        f.y = t;
        f.stop();
        s_bMobile || (f.cursor = "pointer");
        h.addChild(f);
        this._initListener()
    };
    this.unload = function() {
        f.off("mousedown", c);
        f.off("pressup", l);
        h.removeChild(f)
    };
    this._initListener = function() {
        c = f.on("mousedown", this.buttonDown);
        l = f.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(n, t, i) {
        o[n] = t;
        s[n] = i
    };
    this.setActive = function(n) {
        e = n;
        f.gotoAndStop("state_" + e)
    };
    this.setPosition = function(n, t) {
        f.x = n;
        f.y = t
    };
    this.buttonRelease = function() {
        f.scaleX = 1;
        f.scaleY = 1;
        playSound("click", 1, !1);
        e = !e;
        f.gotoAndStop("state_" + e);
        o[ON_MOUSE_UP] && o[ON_MOUSE_UP].call(s[ON_MOUSE_UP], e)
    };
    this.buttonDown = function() {
        f.scaleX = .9;
        f.scaleY = .9;
        o[ON_MOUSE_DOWN] && o[ON_MOUSE_DOWN].call(s[ON_MOUSE_DOWN])
    };
    h = u;
    this._init(n, t, i, r)
}

function CGfxButton(n, t, i, r) {
    var o, f, e, s, l = [],
        u, a, y, h, v, c;
    return this._init = function(n, t, i, r) {
        o = !1;
        f = 1;
        e = [];
        s = [];
        u = createBitmap(i);
        u.x = n;
        u.y = t;
        u.scaleX = u.scaleY = f;
        u.regX = i.width / 2;
        u.regY = i.height / 2;
        r.addChild(u);
        this._initListener()
    }, this.unload = function() {
        s_bMobile ? (u.off("mousedown", h), u.off("pressup", c)) : (u.off("mousedown", h), u.off("mouseover", v), u.off("pressup", c));
        r.removeChild(u)
    }, this.setVisible = function(n) {
        u.visible = n
    }, this.setClickable = function(n) {
        o = !n
    }, this._initListener = function() {
        s_bMobile ? (h = u.on("mousedown", this.buttonDown), c = u.on("pressup", this.buttonRelease)) : (h = u.on("mousedown", this.buttonDown), v = u.on("mouseover", this.buttonOver), c = u.on("pressup", this.buttonRelease))
    }, this.addEventListener = function(n, t, i) {
        e[n] = t;
        s[n] = i
    }, this.addEventListenerWithParams = function(n, t, i, r) {
        e[n] = t;
        s[n] = i;
        l = r
    }, this.buttonRelease = function() {
        o || (u.scaleX = f, u.scaleY = f, e[ON_MOUSE_UP] && e[ON_MOUSE_UP].call(s[ON_MOUSE_UP], l))
    }, this.buttonDown = function() {
        o || (u.scaleX = f * .9, u.scaleY = f * .9, playSound("click", 1, !1), e[ON_MOUSE_DOWN] && e[ON_MOUSE_DOWN].call(s[ON_MOUSE_DOWN], l))
    }, this.buttonOver = function(n) {
        if (!s_bMobile) {
            if (o) return;
            n.target.cursor = "pointer"
        }
    }, this.pulseAnimation = function() {
        a = createjs.Tween.get(u, {
            loop: !0
        }).to({
            scaleX: f * 1.1,
            scaleY: f * 1.1
        }, 850, createjs.Ease.quadOut).to({
            scaleX: f,
            scaleY: f
        }, 650, createjs.Ease.quadIn)
    }, this.trembleAnimation = function() {
        a = createjs.Tween.get(u, {
            loop: !0
        }).to({
            rotation: 5
        }, 75, createjs.Ease.quadOut).to({
            rotation: -5
        }, 140, createjs.Ease.quadIn).to({
            rotation: 0
        }, 75, createjs.Ease.quadIn).wait(750)
    }, this.setPosition = function(n, t) {
        u.x = n;
        u.y = t
    }, this.setX = function(n) {
        u.x = n
    }, this.setY = function(n) {
        u.y = n
    }, this.getButtonImage = function() {
        return u
    }, this.getX = function() {
        return u.x
    }, this.getY = function() {
        return u.y
    }, y = this, this._init(n, t, i, r), this
}

function CMenu() {
    var o, s, i, r, h, u, n = null,
        c = null,
        f, t, e;
    this._init = function() {
        var l, a, v;
        o = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(o);
        l = s_oSpriteLibrary.getSprite("but_play");
        s = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 160, l, s_oStage);
        s.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
        (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && (l = s_oSpriteLibrary.getSprite("audio_icon"), f = {
            x: CANVAS_WIDTH - l.height / 2 - 10,
            y: l.height / 2 + 10
        }, r = new CToggle(f.x, f.y, l, s_bAudioActive, s_oStage), r.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this));
        l = s_oSpriteLibrary.getSprite("but_credits");
        t = {
            x: l.height / 2 + 10,
            y: l.height / 2 + 10
        };
        h = new CGfxButton(t.x, t.y, l, s_oStage);
        h.addEventListener(ON_MOUSE_UP, this._onButCreditRelease, this);
        a = window.document;
        v = a.documentElement;
        n = v.requestFullscreen || v.mozRequestFullScreen || v.webkitRequestFullScreen || v.msRequestFullscreen;
        c = a.exitFullscreen || a.mozCancelFullScreen || a.webkitExitFullscreen || a.msExitFullscreen;
        ENABLE_FULLSCREEN === !1 && (n = !1);
        n && screenfull.isEnabled && (l = s_oSpriteLibrary.getSprite("but_fullscreen"), e = {
            x: t.x + l.width / 2 + 10,
            y: t.y
        }, u = new CToggle(e.x, e.y, l, s_bFullscreen, s_oStage), u.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        i = new createjs.Shape;
        i.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(i);
        createjs.Tween.get(i).to({
            alpha: 0
        }, 1e3).call(function() {
            i.visible = !1
        });
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.refreshButtonPos = function(i, o) {
        h.setPosition(t.x + s_iOffsetX, s_iOffsetY + t.y);
        (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && r.setPosition(f.x - i, o + f.y);
        n && screenfull.isEnabled && u.setPosition(e.x + s_iOffsetX, e.y + s_iOffsetY)
    };
    this.unload = function() {
        s.unload();
        s = null;
        h.unload();
        (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && (r.unload(), r = null);
        n && screenfull.isEnabled && u.unload();
        s_oStage.removeChild(o);
        o = null;
        s_oMenu = null
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onButPlayRelease = function() {
        this.unload();
        s_oMain.goToModeMenu();
        $(s_oMain).trigger("start_session")
    };
    this._onButCreditRelease = function() {
        new CCreditsPanel
    };
    this.resetFullscreenBut = function() {
        n && screenfull.isEnabled && u.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? c.call(window.document) : n.call(window.document.documentElement);
        sizeHandler()
    };
    s_oMenu = this;
    this._init()
}

function CModeMenu() {
    var v, n, t, i, y, p, w, b, k, d, h, c, l, g, u, r = null,
        nt = null,
        a, f, e, tt, it, rt, o, s;
    this._init = function() {
        var ft, et, st, ht, ct;
        v = createBitmap(s_oSpriteLibrary.getSprite("bg_layout"));
        s_oStage.addChild(v);
        var a = 600,
            ut = 70,
            ot = CANVAS_WIDTH / 2,
            ft = CANVAS_HEIGHT / 2 - 160;
        g = new CTLText(s_oStage, ot - a / 2, ft - ut / 2, a, ut, 60, "center", "#fff", PRIMARY_FONT, 1, 2, 2, TEXT_TOP_MODE, !0, !0, !1, !1);
        g.setShadow("#000000", 3, 3, 3);
        n = new createjs.Container;
        n.x = CANVAS_WIDTH / 2 - 440;
        n.y = 369;
        s_bMobile || (n.cursor = "pointer");
        t = new createjs.Container;
        t.x = CANVAS_WIDTH / 2 - 120;
        t.y = 369;
        s_bMobile || (t.cursor = "pointer");
        i = new createjs.Container;
        i.x = CANVAS_WIDTH / 2 + 200;
        i.y = 369;
        s_bMobile || (i.cursor = "pointer");
        var a = 200,
            ut = 40,
            ot = 122,
            ft = 80;
        y = new CTLText(n, ot - a / 2, ft - ut / 2, a, ut, 28, "center", "#01ff8f", PRIMARY_FONT, 1, 2, 2, TEXT_MODE_1, !0, !0, !1, !1);
        y.setShadow("#000000", 3, 3, 3);
        ft = 25;
        p = new CTLText(n, ot - a / 2, ft - ut / 2, a, ut, 34, "center", "#ffffff", PRIMARY_FONT, 1, 2, 2, TEXT_EASY, !0, !0, !1, !1);
        p.setShadow("#000000", 3, 3, 3);
        ft = 80;
        w = new CTLText(t, ot - a / 2, ft - ut / 2, a, ut, 28, "center", "#01ff8f", PRIMARY_FONT, 1, 2, 2, TEXT_MODE_2, !0, !0, !1, !1);
        w.setShadow("#000000", 3, 3, 3);
        ft = 25;
        b = new CTLText(t, ot - a / 2, ft - ut / 2, a, ut, 34, "center", "#ffffff", PRIMARY_FONT, 1, 2, 2, TEXT_NORMAL, !0, !0, !1, !1);
        b.setShadow("#000000", 3, 3, 3);
        ft = 80;
        k = new CTLText(i, ot - a / 2, ft - ut / 2, a, ut, 28, "center", "#01ff8f", PRIMARY_FONT, 1, 2, 2, TEXT_MODE_3, !0, !0, !1, !1);
        k.setShadow("#000000", 3, 3, 3);
        ft = 25;
        d = new CTLText(i, ot - a / 2, ft - ut / 2, a, ut, 34, "center", "#ffffff", PRIMARY_FONT, 1, 2, 2, TEXT_HARD, !0, !0, !1, !1);
        d.setShadow("#000000", 3, 3, 3);
        s_oStage.addChild(n);
        s_oStage.addChild(t);
        s_oStage.addChild(i);
        (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && (et = s_oSpriteLibrary.getSprite("audio_icon"), o = {
            x: CANVAS_WIDTH - et.height / 2 - 10,
            y: et.height / 2 + 10
        }, e = new CToggle(o.x, o.y, et, s_bAudioActive, s_oStage), e.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this));
        st = window.document;
        ht = st.documentElement;
        r = ht.requestFullscreen || ht.mozRequestFullScreen || ht.webkitRequestFullScreen || ht.msRequestFullscreen;
        nt = st.exitFullscreen || st.mozCancelFullScreen || st.webkitExitFullscreen || st.msExitFullscreen;
        ENABLE_FULLSCREEN === !1 && (r = !1);
        r && screenfull.isEnabled && (et = s_oSpriteLibrary.getSprite("but_fullscreen"), s = {
            x: et.width / 4 + 10,
            y: et.height / 2 + 10
        }, u = new CToggle(s.x, s.y, et, s_bFullscreen, s_oStage), u.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        ct = (new createjs.Graphics).beginFill("rgba(158,158,158,0.01)").drawRect(4, 0, 240, 250);
        h = new createjs.Shape(ct);
        n.addChild(h);
        tt = h.on("pressup", this._selectEasy);
        c = new createjs.Shape(ct);
        t.addChild(c);
        it = c.on("pressup", this._selectNormal);
        l = new createjs.Shape(ct);
        i.addChild(l);
        rt = l.on("pressup", this._selectHard);
        f = new createjs.Shape;
        f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(f);
        createjs.Tween.get(f).to({
            alpha: 0
        }, 1e3).call(function() {
            f.visible = !1
        });
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.refreshButtonPos = function(n, t) {
        (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && e.setPosition(o.x - n, t + o.y);
        r && screenfull.isEnabled && u.setPosition(s.x + s_iOffsetX, s.y + s_iOffsetY)
    };
    this._selectEasy = function() {
        playSound("click", 1, !1);
        a.unload();
        s_oMain.gotoGame(MODE_EASY)
    };
    this._selectNormal = function() {
        playSound("click", 1, !1);
        a.unload();
        s_oMain.gotoGame(MODE_NORMAL)
    };
    this._selectHard = function() {
        playSound("click", 1, !1);
        a.unload();
        s_oMain.gotoGame(MODE_HARD)
    };
    this.unload = function() {
        (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && (e.unload(), e = null);
        r && screenfull.isEnabled && u.unload();
        h.off("pressup", tt);
        c.off("pressup", it);
        l.off("pressup", rt);
        s_oStage.removeAllChildren();
        v = null;
        s_oModeMenu = null
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onButPlayRelease = function() {
        this.unload();
        playSound("click", 1, !1);
        s_oMain.gotoGame()
    };
    this.resetFullscreenBut = function() {
        r && screenfull.isEnabled && u.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? nt.call(window.document) : r.call(window.document.documentElement);
        sizeHandler()
    };
    a = this;
    s_oModeMenu = this;
    this._init()
}

function CGame(n) {
    var ut = !1,
        dt, e, it, ft, l, et, wt, bt, ot, st, ct, f, y, lt, c, o, rt, kt, at, vt, a, p, s, u, i, h, t, w, b, k, tt = null,
        d, r, ht, v, yt, g, pt, nt;
    this._init = function() {
        var tt, b, n, a, ut, y;
        for (st = 10, c = 23, ct = 0, f = 0, o = 0, rt = 0, kt = 0, vt = 0, l = 500, et = 0, dt = !1, it = !0, e = !0, ft = !1, r = null, nt = 3, playSound("card_dealing", 1, !0), tt = createBitmap(s_oSpriteLibrary.getSprite("bg_game")), s_oStage.addChild(tt), i = [], h = [], w = [], ot = 0, p = [], n = 0; n < 7; n++)
            for (a = 0; a < 10; a++) p[ot] = {
                x: 299 + a * 81,
                y: 220 + n * st
            }, a > 4 && (p[ot] = {
                x: 300 + a * 81,
                y: 220 + n * st
            }), ot++;
        pt = new createjs.Container;
        s_oStage.addChild(pt);
        d = new createjs.Container;
        s_oStage.addChild(d);
        s = [];
        s[SUIT_HEARTS] = {
            x: 1212,
            y: 220
        };
        s[SUIT_SPADES] = {
            x: 1302,
            y: 220
        };
        s[SUIT_DIAMONDS] = {
            x: 1212,
            y: 350
        };
        s[SUIT_CLUBS] = {
            x: 1302,
            y: 350
        };
        y = (new createjs.Graphics).beginFill("rgba(158,158,158,0.01)").drawRect(s[SUIT_HEARTS].x - CARD_WIDTH / 2, s[SUIT_HEARTS].y - CARD_HEIGHT / 2, 170, 250);
        yt = new createjs.Shape(y);
        yt.on("click", this._denyClick);
        for (s_oStage.addChild(yt), b = {
                x: 1212,
                y: 614,
                offset: 22
            }, u = [], n = 0; n < 5; n++) u[n] = {
            x: b.x + n * b.offset,
            y: b.y
        };
        for (t = [], n = 0; n < 40; n++)
            for (t[n] = [], a = 0; a < 10; a++) t[n][a] = {
                status: LABEL_EMPTY,
                oCard: null
            };
        ut = this._initCards(s_iMode);
        this._shuffleCard(ut, DEBUG_MODE);
        this._setBoard();
        y = (new createjs.Graphics).beginFill("rgba(158,158,158,0.01)").drawRect(u[o].x - CARD_WIDTH / 2, u[o].y - CARD_HEIGHT / 2, CARD_WIDTH, CARD_HEIGHT);
        v = new createjs.Shape(y);
        v.on("click", this._turnDeck);
        v.cursor = "pointer";
        v.visible = !1;
        s_oStage.addChild(v);
        y = (new createjs.Graphics).beginFill("rgba(158,158,158,0.01)").drawRect(u[o].x - CARD_WIDTH / 2, u[o].y - CARD_HEIGHT / 2, CARD_WIDTH, CARD_HEIGHT);
        g = new createjs.Shape(y);
        g.on("click", this._hintForDeck);
        g.visible = !1;
        s_oStage.addChild(g);
        k = new CInterface;
        k.refreshScore(l);
        s_oStage.addEventListener("stagemousemove", this.dragCard, !1);
        s_oStage.addEventListener("stagemouseup", this.releaseCard, !1);
        $(s_oMain).trigger("start_level", 1)
    };
    this._initCards = function(n) {
        var t, u, i, e, r;
        n === MODE_EASY ? (t = 13, u = 25, i = 1) : n === MODE_NORMAL ? (t = 0, u = 25, i = 0) : (t = 0, u = 51, i = 0);
        var o = i,
            f = t,
            s = [];
        for (e = 0; e < 104; e++) r = (e + 1) % 13, r === 0 && (r = 13), s.push({
            fotogram: f,
            rank: r,
            suit: o
        }), r === 13 && o++, f++, f > u && (f = t, o = i);
        return s
    };
    this._shuffleCard = function(n, t) {
        for (var f, e = [], r = 0; r < n.length; r++) e[r] = n[r];
        for (f = []; e.length > 0;) f.push(e.splice(Math.round(Math.random() * (e.length - 1)), 1)[0]);
        if (t)
            for (r = 0; r < f.length; r++) i[r] = new CCard(u[0].x, u[0].y, d, n[r].fotogram, n[r].rank, n[r].suit);
        else
            for (r = 0; r < f.length; r++) i[r] = new CCard(u[0].x, u[0].y, d, f[r].fotogram, f[r].rank, f[r].suit)
    };
    this._setBoard = function() {
        for (var r, u = 0, f = i.length - 1, n = i.length - 1; n >= 50; n--) i[n].moveCard(p[i.length - 1 - n].x, p[i.length - 1 - n].y, 150, u), u += 50;
        for (n = 0; n < 6; n++)
            for (r = 0; r < 10; r++)
                if (t[n][r].oCard = i[f], t[n][r].status = LABEL_HIDDEN, f--, n === 5 && r === 3) break;
        for (n = 54; n < i.length; n++) h[i.length - 1 - n] = i[i.length - 1 - n]
    };
    this.refreshCardContaner = function() {
        for (var i, r, u, n = 0; n < 10; n++) {
            for (i = 0, r = 0; i < t.length;) {
                if (t[i][n].status !== LABEL_EMPTY) r = i + 1;
                else break;
                i++
            }
            u = 1;
            REAL_CARD_CONTAINER_Y + r * c > CANVAS_HEIGHT - s_iOffsetY - CARD_HEIGHT / 2 && (u = (CANVAS_HEIGHT - s_iOffsetY - CARD_HEIGHT / 2) / (REAL_CARD_CONTAINER_Y + r * c));
            this.refreshShownCardYInCol(n, c * u)
        }
    };
    this.refreshShownCardYInCol = function(n, i) {
        for (var u = CARD_CONTAINER_Y, r = 0; r < t.length; r++) {
            if (t[r][n].status === LABEL_EMPTY) break;
            createjs.Tween.removeTweens(t[r][n].oCard);
            t[r][n].oCard.stackInY(u, 500);
            t[r][n].status === LABEL_HIDDEN ? u += st : t[r][n].status === LABEL_SHOWN && (u += i)
        }
    };
    this.scaleDepth = function(n) {
        d.setChildIndex(n, ct);
        ct++
    };
    this.pickCard = function(n, i) {
        var f, o, h, s, u;
        if (w.length === 0 && !e) {
            for (e = !0, y = {
                    x: n.getPos().x,
                    y: n.getPos().y
                }, lt = {
                    x: i.stageX / s_iScaleFactor - y.x,
                    y: i.stageY / s_iScaleFactor - y.y
                }, f = 0; f < 10; f++)
                for (u = t.length - 1; u >= 0; u--) t[u][f].oCard === n && (r = {
                    row: u,
                    column: f
                });
            for (o = 0, h = n.getRank(), u = r.row; u < t.length; u++)
                if (t[u][r.column].status === LABEL_SHOWN && t[u][r.column].oCard.getSuit() === n.getSuit())
                    if (t[u][r.column].oCard.getRank() === h) o++, h--;
                    else {
                        o = 0;
                        break
                    }
            else if (t[u][r.column].status === LABEL_EMPTY) break;
            else if (t[u][r.column].oCard.getSuit() !== n.getSuit()) {
                o = 0;
                break
            }
            for (s = [], u = 0; u < o; u++) s[u] = t[r.row + u][r.column].oCard.saveInfo(), w[u] = new CCard(y.x, y.y + u * c, d, s[u].szFotogram, s[u].iRank, s[u].iSuit), t[r.row + u][r.column].oCard.unload(), w[u].instantShow()
        }
    };
    this.dragCard = function(n) {
        if (wt = parseInt(n.stageX / s_iScaleFactor), bt = parseInt(n.stageY / s_iScaleFactor), !it && e)
            for (var t = 0; t < w.length; t++) w[t].setPos(wt - lt.x, bt - lt.y + t * c)
    };
    this.releaseCard = function() {
        if (!ft && !(rt > 0)) {
            if (it === !1 && w.length > 0) e = !1;
            else {
                e = !1;
                return
            }
            ht._checkCardCollision(w);
            r = null;
            w = []
        }
    };
    this._checkCardCollision = function(n) {
        for (var o, i, s = 0, h = [], e = [], f = 0; f < 10; f++)
            for (i = t.length - 1; i >= 0; i--)
                if (t[i][f].status === LABEL_SHOWN) {
                    h[s] = t[i][f].oCard.getLogicRect();
                    e[s] = {
                        oCard: t[i][f].oCard,
                        x: t[i][f].oCard.getPos().x,
                        y: t[i][f].oCard.getPos().y,
                        row: i,
                        column: f
                    };
                    s++;
                    break
                } else i === 0 && (h[s] = new createjs.Rectangle(p[f].x - CARD_WIDTH / 2, p[f].y - CARD_HEIGHT / 2, CARD_WIDTH, CARD_HEIGHT), s++);
        var l = 0,
            u = -1,
            a = n[0].getLogicRect();
        for (i = 0; i < h.length; i++) o = a.intersection(h[i]), o !== null && l < o.width * o.height && (l = o.width * o.height, u = i);
        if (u < 0)
            for (i = 0; i < n.length; i++) n[i].stackInPlace(y.x, y.y + i * c, 200), t[r.row + i][r.column].oCard = n[i];
        else if (t[0][u].status === LABEL_EMPTY) {
            for (i = 0; i < n.length; i++) n[i].stackInPlace(p[u].x, p[u].y + i * c, 200), t[i][u].status = LABEL_SHOWN, t[r.row + i][r.column].status = LABEL_EMPTY, t[i][u].oCard = n[i];
            this._updateMoves();
            this._removeScore();
            this._checkBoard(n[0], u);
            this._checkMoves()
        } else if (e[u].oCard.getRank() - n[0].getRank() == 1) {
            for (i = 0; i < n.length; i++) n[i].stackInPlace(e[u].x, e[u].y + c + i * c, 200), t[e[u].row + 1 + i][e[u].column].status = LABEL_SHOWN, t[r.row + i][r.column].status = LABEL_EMPTY, t[e[u].row + 1 + i][e[u].column].oCard = n[i];
            this._updateMoves();
            this._removeScore();
            this._checkBoard(n[0], u);
            this._checkMoves()
        } else
            for (i = 0; i < n.length; i++) n[i].stackInPlace(y.x, y.y + i * c, 200), t[r.row + i][r.column].oCard = n[i];
        this.refreshCardContaner()
    };
    this._checkBoard = function(n, i) {
        var o, f, h, u;
        for (this._turnCard(r.column), at = i, o = 1, b = [], u = t.length - 1; u >= 0; u--)
            if (t[u][i].status === LABEL_EMPTY) f = u;
            else if (t[u][i].oCard.getRank() === o && t[u][i].oCard.getSuit() === n.getSuit() && t[u][i].status === LABEL_SHOWN) o++, f = u, b.push(t[u][i].oCard);
        else break;
        if (h = n.getSuit(), b.length === 13) {
            for (e = !0, ft = !0, a = 0, playSound("snap", 1, !1), u = 0; u < 13; u++) t[f + 12 - u][i].status = LABEL_EMPTY, t[f + 12 - u][i].oCard = null;
            b[a].moveToSuit(s[h].x + nt, s[h].y + nt, 210)
        }
        this._checkIfActiveDeck()
    };
    this._turnCard = function(n) {
        for (var i = t.length - 1; i >= 0; i--)
            if (t[i][n].status === LABEL_SHOWN) break;
            else if (t[i][n].status === LABEL_HIDDEN) {
            t[i][n].oCard.showCard();
            t[i][n].status = LABEL_SHOWN;
            break
        }
    };
    this.stackInSuit = function(n) {
        if (a++, a < 13) {
            var t = b[a].getSuit();
            a > 1 && b[a - 2].setVisible(!1);
            d.swapChildren(b[a].getSprite(), b[a - 1].getSprite());
            b[a].moveToSuit(s[t].x + nt, s[t].y + nt, 0)
        } else a = 0, vt++, kt = 0, e = !1, ft = !1, this._turnCard(at), this._calculateScore(n, POINTS_TO_WIN), vt === 8 ? this.gameOver() : (h.length > 0 && this._getNumCardsOnBoard() < 10 && (this.gameOver(), tt.changeTitle(TEXT_GAME_OVER), tt.changeExpl(TEXT_STALL)), e = !1)
    };
    this._checkIfActiveDeck = function() {
        for (var i = 0, n = 0; n < 10; n++) t[0][n].status === LABEL_EMPTY && i++;
        i > 0 ? (v.visible = !1, g.visible = !0, o === 5 && g.visible.false) : (g.visible = !1, v.visible = !0)
    };
    this._hintForDeck = function() {
        k.showHint("deck")
    };
    this._turnDeck = function() {
        var r, i, n;
        if (!e && o !== 5) {
            for (e = !0, ht.activeDeck(), o++, v.x = o * 22, g.x = o * 22, r = [], i = 0; i < 10; i++)
                for (n = t.length - 1; n >= 0; n--)
                    if (t[n][i].status === LABEL_SHOWN) {
                        r[i] = {
                            x: t[n][i].oCard.getPos().x,
                            y: t[n][i].oCard.getPos().y + c,
                            row: n + 1,
                            column: i
                        };
                        break
                    } else n === 0 && (r[i] = {
                        row: 0,
                        column: i
                    });
            var l = 100,
                f = [],
                s = [];
            for (n = 0; n < 10; n++) f[n] = h[h.length - 10 + n].saveInfo(), h[h.length - 10 + n].unload(), h.splice(h.length - 10 + n, 1), s[n] = new CCard(u[o - 1].x, u[o - 1].y, d, f[n].szFotogram, f[n].iRank, f[n].iSuit);
            for (n = 0; n < 10; n++) t[r[n].row][n].oCard = s[9 - n], t[r[n].row][n].status = LABEL_SHOWN, s[9 - n].moveDeckCard(r[n].x, r[n].y, 200, l), l += 100;
            ht._checkMoves();
            setTimeout(function() {
                s_oGame.refreshCardContaner()
            }, 200)
        }
    };
    this.activeDeck = function() {
        rt++;
        rt === 11 ? (e = !1, v.visible = !0, rt = 0, this._checkScaleAllColumn()) : v.visible = !1
    };
    this._checkScaleAllColumn = function() {
        for (var u, r, o, f, e, n, i = 0; i < 10; i++) {
            for (u = 1, r = t.length - 1, n = t.length - 1; n >= 0; n--)
                if (t[n][i].status === LABEL_SHOWN) {
                    o = t[n][i].oCard.getSuit();
                    f = n;
                    break
                }
            for (n = f; n >= 0; n--)
                if (t[n][i].oCard.getRank() === u && t[n][i].oCard.getSuit() === o && t[n][i].status === LABEL_SHOWN) u++;
                else break;
            var h = 300;
            if (u === 14)
                for (playSound("snap", 1, !1), at = i, r = f - 12, e = t[r][i].oCard.getSuit(), n = 0; n < 13; n++) t[r + 12 - n][i].oCard.moveToSuit(s[e].x + nt, s[e].y + nt, 100, h), t[r + 12 - n][i].status = LABEL_EMPTY, t[r + 12 - n][i].oCard = null, h += 100
        }
        this._checkIfActiveDeck()
    };
    this._denyClick = function() {};
    this._checkMoves = function() {
        var f, r, e, n, i;
        if (!(o < 5)) {
            for (n = 0; n < 10; n++)
                if (t[0][n].status === LABEL_EMPTY) return;
            for (f = [], r = [], i = 0; i < 10; i++)
                for (n = t.length - 1; n >= 0; n--)
                    if (t[n][i].status === LABEL_SHOWN) {
                        f.push(t[n][i].oCard);
                        r.push({
                            row: n,
                            column: i
                        });
                        break
                    }
            for (e = [], i = 0; i < r.length; i++) {
                var u = r[i].column,
                    s = r[i].row,
                    h = t[s][u].oCard.getRank(),
                    c = t[s][u].oCard.getSuit();
                for (n = s; n >= 0; n--)
                    if (t[n][u].oCard.getSuit() === c && t[n][u].oCard.getRank() === h && t[n][u].status === LABEL_SHOWN) e[i] = t[n][u].oCard, h++;
                    else break
            }
            if (!(r.length < 10)) {
                for (n = 0; n < f.length; n++)
                    for (i = 0; i < e.length; i++)
                        if (f[n].getRank() - e[i].getRank() == 1) return;
                k.showHint("nomoves")
            }
        }
    };
    this.unload = function() {
        ut = !1;
        for (var n = 0; n < i.length; n++) i[n].unload();
        k.unload();
        tt !== null && tt.unload();
        stopSound("card_dealing");
        createjs.Tween.removeAllTweens();
        s_oStage.removeAllChildren()
    };
    this.getSuitContainer = function() {
        return pt
    };
    this.onExit = function() {
        this.unload();
        s_oMain.gotoMenu()
    };
    this._onExitHelp = function() {
        ut = !0
    };
    this.gameOver = function() {
        playSound("game_over", 1, !1);
        tt = new CEndPanel(s_oSpriteLibrary.getSprite("msg_box"));
        tt.show(l)
    };
    this.restartGame = function() {
        this.unload();
        this._init()
    };
    this.pauseGame = function() {
        ut = !ut
    };
    this._calculateScore = function(n, t) {
        l += t;
        var i = new CScore;
        i.showScore(n.getPos(), t)
    };
    this._removeScore = function() {
        l--;
        l < 0 && (l = 0);
        var n = 750,
            t = new CScore;
        t.removeScore(l, n);
        k.fadeScore(l, n)
    };
    this.updateScore = function(n) {
        l += n * s_iMode
    };
    this.updateVisualScore = function() {
        k.refreshScore(l)
    };
    this._updateMoves = function() {
        et++;
        var n = 750,
            t = new CScore;
        t.displayMoves(et, n);
        k.fadeMove(et, n)
    };
    this._getNumCardsOnBoard = function() {
        for (var i, r = 0, n = 0; n < t.length; n++)
            for (i = 0; i < t[n].length; i++) t[n][i].status !== LABEL_EMPTY && r++;
        return r
    };
    this.update = function() {
        var r, n;
        if (it && i[51].getPlaced())
            if (stopSound("card_dealing"), f++, r = 4, f === r) i[59].showCard(), t[4][4].status = LABEL_SHOWN;
            else if (f === 2 * r) i[58].showCard(), t[4][5].status = LABEL_SHOWN;
        else if (f === 3 * r) i[57].showCard(), t[4][6].status = LABEL_SHOWN;
        else if (f === 4 * r) i[56].showCard(), t[4][7].status = LABEL_SHOWN;
        else if (f === 5 * r) i[55].showCard(), t[4][8].status = LABEL_SHOWN;
        else if (f === 6 * r) i[54].showCard(), t[4][9].status = LABEL_SHOWN;
        else if (f === 7 * r) i[53].showCard(), t[5][0].status = LABEL_SHOWN;
        else if (f === 8 * r) i[52].showCard(), t[5][1].status = LABEL_SHOWN;
        else if (f === 9 * r) i[51].showCard(), t[5][2].status = LABEL_SHOWN;
        else if (f === 10 * r) i[50].showCard(), t[5][3].status = LABEL_SHOWN;
        else if (f === 11 * r)
            for (n = 0; n < 10; n++) h[39 - n].stackAndDeactive(u[1].x, u[1].y, 1e3);
        else if (f === 14 * r)
            for (n = 0; n < 10; n++) h[29 - n].stackAndDeactive(u[2].x, u[2].y, 1e3);
        else if (f === 17 * r)
            for (n = 0; n < 10; n++) h[19 - n].stackAndDeactive(u[3].x, u[3].y, 1e3);
        else if (f === 20 * r) {
            for (n = 0; n < 10; n++) h[9 - n].stackAndDeactive(u[4].x, u[4].y, 1e3);
            it = !1;
            e = !1;
            v.visible = !0;
            k.setVisibleButHelp()
        }
    };
    s_oGame = this;
    POINTS_TO_LOSE = n.points_to_lose;
    POINTS_TO_WIN = n.points_to_win;
    ht = this;
    this._init()
}

function CInterface() {
    var n, e, y, f, p, w = null,
        tt, r, b, i, it, k, o, g, t, s, d, u = null,
        nt = null,
        h, c, l, a, v;
    return this._init = function() {
        var ft, w = s_oSpriteLibrary.getSprite("but_exit"),
            ot, ht, at, st, vt, yt, et;
        h = {
            x: CANVAS_WIDTH - w.height / 2 - 10,
            y: w.height / 2 + 10
        };
        y = new CGfxButton(h.x, h.y, w, s_oStage);
        y.addEventListener(ON_MOUSE_UP, this._onExit, this);
        ft = CANVAS_WIDTH - w.width / 2 - 80;
        (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && (w = s_oSpriteLibrary.getSprite("audio_icon"), c = {
            x: ft,
            y: w.height / 2 + 10
        }, e = new CToggle(c.x, c.y, w, s_bAudioActive, s_oStage), e.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this));
        ft = ft - 68;
        w = s_oSpriteLibrary.getSprite("but_help");
        l = {
            x: ft,
            y: w.height / 2 + 10
        };
        f = new CGfxButton(l.x, l.y, w, s_oStage);
        f.addEventListener(ON_MOUSE_UP, this._onButHelpRelease, this);
        f.setVisible(!1);
        ft = ft - 68;
        w = s_oSpriteLibrary.getSprite("but_shuffle");
        a = {
            x: ft,
            y: w.height / 2 + 10
        };
        p = new CGfxButton(a.x, a.y, w, s_oStage);
        p.addEventListener(ON_MOUSE_UP, this._onButRestartRelease, this);
        ot = window.document;
        ht = ot.documentElement;
        u = ht.requestFullscreen || ht.mozRequestFullScreen || ht.webkitRequestFullScreen || ht.msRequestFullscreen;
        nt = ot.exitFullscreen || ot.mozCancelFullScreen || ot.webkitExitFullscreen || ot.msExitFullscreen;
        ENABLE_FULLSCREEN === !1 && (u = !1);
        u && screenfull.isEnabled && (w = s_oSpriteLibrary.getSprite("but_fullscreen"), v = {
            x: w.width / 4 + 10,
            y: w.height / 2 + 10
        }, s = new CToggle(v.x, v.y, w, s_bFullscreen, s_oStage), s.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        w = s_oSpriteLibrary.getSprite("score_moves_display");
        r = createBitmap(w);
        r.x = 562;
        r.y = 79;
        s_oStage.addChild(r);
        var rt = 46,
            ut = w.height / 2,
            ct = r.x + 32,
            lt = r.y + 22;
        b = new CTLText(s_oStage, ct - rt / 2, lt - ut / 2, rt, ut, 25, "right", "#fff", PRIMARY_FONT, 1, 2, 0, "0", !0, !0, !1, !1);
        var rt = 100,
            ut = w.height / 2,
            ct = r.x - 50,
            lt = r.y + 22;
        tt = new CTLText(s_oStage, ct - rt / 2, lt - ut / 2, rt, ut, 25, "right", "#fff", PRIMARY_FONT, 1, 2, 0, TEXT_MOVES, !0, !0, !1, !1);
        w = s_oSpriteLibrary.getSprite("score_moves_display");
        i = createBitmap(w);
        i.scaleX = 1.4;
        i.x = 352;
        i.y = 79;
        s_oStage.addChild(i);
        var rt = 68,
            ut = w.height / 2,
            ct = i.x + 44,
            lt = i.y + 22;
        k = new CTLText(s_oStage, ct - rt / 2, lt - ut / 2, rt, ut, 25, "right", "#fff", PRIMARY_FONT, 1, 2, 0, "0", !0, !0, !1, !1);
        var rt = 100,
            ut = w.height / 2,
            ct = i.x - 50,
            lt = i.y + 22;
        it = new CTLText(s_oStage, ct - rt / 2, lt - ut / 2, rt, ut, 25, "right", "#fff", PRIMARY_FONT, 1, 2, 0, TEXT_SCORE, !0, !0, !1, !1);
        t = new createjs.Container;
        t.x = 1102;
        t.y = 494;
        t.alpha = 0;
        s_oStage.addChild(t);
        w = s_oSpriteLibrary.getSprite("hintpanel");
        g = createBitmap(w);
        t.addChild(g);
        var rt = w.width - 24,
            ut = w.height / 2 + 6,
            ct = w.width / 2 - 2,
            lt = w.height / 2 - 4;
        o = new CTLText(t, ct - rt / 2, lt - ut / 2, rt, ut, 12, "center", "#fff", PRIMARY_FONT, 1.2, 2, 2, TEXT_HINT2, !0, !0, !0, !1);
        n = [];
        n[0] = {
            x: 1212 - CARD_WIDTH / 2,
            y: 220 - CARD_HEIGHT / 2
        };
        n[1] = {
            x: 1302 - CARD_WIDTH / 2,
            y: 220 - CARD_HEIGHT / 2
        };
        n[2] = {
            x: 1212 - CARD_WIDTH / 2,
            y: 350 - CARD_HEIGHT / 2
        };
        n[3] = {
            x: 1302 - CARD_WIDTH / 2,
            y: 350 - CARD_HEIGHT / 2
        };
        at = createBitmap(s_oSpriteLibrary.getSprite("hearts_suit"));
        at.x = n[0].x;
        at.y = n[0].y;
        st = createBitmap(s_oSpriteLibrary.getSprite("spades_suit"));
        st.x = n[1].x;
        st.y = n[1].y;
        vt = createBitmap(s_oSpriteLibrary.getSprite("diamonds_suit"));
        vt.x = n[2].x;
        vt.y = n[2].y;
        yt = createBitmap(s_oSpriteLibrary.getSprite("clubs_suit"));
        yt.x = n[3].x;
        yt.y = n[3].y;
        et = s_oGame.getSuitContainer();
        switch (s_iMode) {
            case MODE_EASY:
                et.addChild(st);
                break;
            case MODE_NORMAL:
                et.addChild(st);
                et.addChild(at);
                break;
            case MODE_HARD:
                et.addChild(st);
                et.addChild(at);
                et.addChild(vt);
                et.addChild(yt)
        }
        d = new CAreYouSurePanel(s_oStage);
        d.addEventListener(ON_BUT_YES_DOWN, this._onConfirmExit);
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    }, this.refreshButtonPos = function(n, t) {
        y.setPosition(h.x - n, h.y + t);
        f.setPosition(l.x - n, l.y + t);
        p.setPosition(a.x - n, a.y + t);
        (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && e.setPosition(c.x - n, c.y + t);
        u && screenfull.isEnabled && s.setPosition(v.x + s_iOffsetX, v.y + s_iOffsetY)
    }, this.unload = function() {
        (DISABLE_SOUND_MOBILE === !1 || s_bMobile === !1) && (e.unload(), e = null);
        u && screenfull.isEnabled && s.unload();
        y.unload();
        f.unload();
        p.unload();
        w !== null && w.unload();
        d = null;
        s_oInterface = null
    }, this.refreshScore = function(n) {
        k.getText().alpha = 1;
        k.refreshText(n)
    }, this.fadeScore = function(n, t) {
        var i = this;
        createjs.Tween.get(k.getText()).to({
            alpha: 0
        }, t, createjs.Ease.linear).call(function() {
            i.refreshScore(n)
        })
    }, this._refreshMove = function(n) {
        b.getText().alpha = 1;
        b.refreshText(n)
    }, this.fadeMove = function(n, t) {
        var i = this;
        createjs.Tween.get(b.getText()).to({
            alpha: 0
        }, t, createjs.Ease.linear).call(function() {
            i._refreshMove(n)
        })
    }, this.showHint = function(n) {
        n === "deck" ? (o.y = 16, o.refreshText(TEXT_HINT1), createjs.Tween.get(t, {
            override: !0
        }).to({
            alpha: 1
        }, 3e3, createjs.Ease.linear).call(function() {
            createjs.Tween.get(t).to({
                alpha: 0
            }, 3e3, createjs.Ease.linear)
        })) : (o.y = 22, o.refreshText(TEXT_HINT2), createjs.Tween.get(t, {
            override: !0
        }).to({
            alpha: 1
        }, 3e3, createjs.Ease.linear))
    }, this.setVisibleButHelp = function() {
        f.setVisible(!0)
    }, this._onButHelpRelease = function() {
        w = new CHelpPanel
    }, this._onButRestartRelease = function() {
        s_oGame.restartGame();
        $(s_oMain).trigger("restart_level", 1);
        $(s_oMain).trigger("show_interlevel_ad")
    }, this.onExitFromHelp = function() {
        w.unload()
    }, this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    }, this._onExit = function() {
        d.show()
    }, this._onConfirmExit = function() {
        s_oGame.onExit();
        $(s_oMain).trigger("end_level", 1);
        $(s_oMain).trigger("end_session");
        $(s_oMain).trigger("show_interlevel_ad")
    }, this.resetFullscreenBut = function() {
        u && screenfull.isEnabled && s.setActive(s_bFullscreen)
    }, this._onFullscreenRelease = function() {
        s_bFullscreen ? nt.call(window.document) : u.call(window.document.documentElement);
        sizeHandler()
    }, s_oInterface = this, this._init(), this
}

function CHelpPanel() {
    var u, f, i, r, n, t, e, o, s;
    this._init = function() {
        var a = this;
        n = new createjs.Container;
        n.alpha = 0;
        s_oStage.addChild(n);
        u = createBitmap(s_oSpriteLibrary.getSprite("bg_help"));
        n.addChild(u);
        var v = {
                x: CANVAS_WIDTH / 2,
                y: CANVAS_HEIGHT / 2 - 170
            },
            h = 400,
            e = 60,
            c = v.x,
            l = v.y,
            w = new CTLText(n, c - h / 2, l - e / 2, h, e, 20, "center", "#fff", PRIMARY_FONT, 1.2, 2, 2, TEXT_HELP1, !0, !0, !0, !1);
        w.setShadow("#000000", 2, 2, 3);
        var y = {
                x: CANVAS_WIDTH / 2 - 180,
                y: CANVAS_HEIGHT / 2
            },
            h = 300,
            e = 90,
            c = y.x,
            l = y.y,
            b = new CTLText(n, c - h / 2, l - e / 2, h, e, 20, "center", "#fff", PRIMARY_FONT, 1.2, 2, 2, TEXT_HELP2, !0, !0, !0, !1);
        b.setShadow("#000000", 2, 2, 3);
        var p = {
                x: CANVAS_WIDTH / 2,
                y: CANVAS_HEIGHT / 2 + 140
            },
            h = 500,
            e = 90,
            c = p.x,
            l = p.y,
            k = new CTLText(n, c - h / 2, l - e / 2, h, e, 20, "center", "#fff", PRIMARY_FONT, 1.2, 2, 2, TEXT_HELP3, !0, !0, !0, !1);
        k.setShadow("#000000", 2, 2, 3);
        createjs.Tween.get(n).to({
            alpha: 1
        }, 700).call(function() {
            s_oGame.pauseGame()
        });
        o = n.on("pressup", function() {
            a._onExitHelp()
        });
        t = new createjs.Container;
        t.visible = 0;
        s_oStage.addChild(t);
        f = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
        t.addChild(f);
        var h = 400,
            e = 50,
            c = CANVAS_WIDTH / 2,
            l = CANVAS_HEIGHT / 2 - 190,
            d = new CTLText(t, c - h / 2, l - e / 2, h, e, 40, "center", "#fff", PRIMARY_FONT, 1, 2, 2, TEXT_HELP1_PAGE2, !0, !0, !1, !1);
        d.setShadow("#000000", 2, 2, 3);
        var h = 600,
            e = 80,
            c = CANVAS_WIDTH / 2 - 328,
            l = CANVAS_HEIGHT / 2 - 50,
            g = new CTLText(t, c, l - e / 2, h, e, 28, "left", "#fff", PRIMARY_FONT, 1.2, 2, 2, sprintf(TEXT_HELP2_PAGE2, POINTS_TO_WIN), !0, !0, !0, !1);
        g.setShadow("#000000", 2, 2, 3);
        var h = 600,
            e = 80,
            c = CANVAS_WIDTH / 2 - 328,
            l = CANVAS_HEIGHT / 2 + 80,
            nt = new CTLText(t, c, l - e / 2, h, e, 28, "left", "#fff", PRIMARY_FONT, 1.2, 2, 2, sprintf(TEXT_LOSE1_PAGE2, POINTS_TO_LOSE), !0, !0, !0, !1);
        nt.setShadow("#000000", 2, 2, 3);
        s = t.on("pressup", function() {
            a._onExitHelp()
        });
        createjs.Tween.get(t).to({
            alpha: 1
        }, 700);
        i = createBitmap(s_oSpriteLibrary.getSprite("arrow"));
        i.x = 1202;
        i.y = 564;
        i.alpha = 0;
        i.on("click", a._changePageTo2);
        s_oStage.addChild(i);
        r = createBitmap(s_oSpriteLibrary.getSprite("arrow"));
        r.scaleX = -1;
        r.x = 392;
        r.y = 564;
        r.visible = !1;
        r.on("click", a._changePageTo1);
        s_oStage.addChild(r);
        createjs.Tween.get(i).to({
            alpha: 1
        }, 700)
    };
    this.unload = function() {
        s_oStage.removeChild(n, t, i, r);
        n.off("pressup", o);
        t.off("pressup", s)
    };
    this._changePageTo1 = function() {
        t.visible = !1;
        r.visible = !1;
        n.visible = !0;
        i.visible = !0
    };
    this._changePageTo2 = function() {
        n.visible = !1;
        i.visible = !1;
        t.visible = !0;
        r.visible = !0
    };
    this._onExitHelp = function() {
        e.unload();
        $(s_oMain).trigger("show_interlevel_ad");
        s_oGame._onExitHelp()
    };
    e = this;
    this._init()
}

function CCreditsPanel() {
    var f, n, r, i, t, u, e;
    this._init = function() {
        var f;
        n = new createjs.Container;
        s_oStage.addChild(n);
        f = s_oSpriteLibrary.getSprite("msg_box");
        t = createBitmap(f);
        t.regX = f.width / 2;
        t.regY = f.height / 2;
        u = t.on("click", this._onLogoButRelease);
        n.addChild(t);
        n.x = CANVAS_WIDTH / 2;
        n.y = CANVAS_HEIGHT / 2;
        e = {
            x: n.x,
            y: n.y
        };
        var o = 600,
            s = 70,
            h = 0,
            c = -100,
            l = new CTLText(n, h - o / 2, c - s / 2, o, s, 60, "center", "#fff", PRIMARY_FONT, 1, 2, 2, TEXT_DEVELOPED, !0, !0, !1, !1),
            o = 600,
            s = 60,
            h = 0,
            c = 90,
            l = new CTLText(n, h - o / 2, c - s / 2, o, s, 44, "center", "#fff", PRIMARY_FONT, 1, 2, 2, "www.codethislab.com", !0, !0, !1, !1),
            f = s_oSpriteLibrary.getSprite("ctl_logo");
        i = createBitmap(f);
        i.regX = f.width / 2;
        i.regY = f.height / 2;
        n.addChild(i);
        f = s_oSpriteLibrary.getSprite("but_exit");
        r = new CGfxButton(320, -190, f, n);
        r.addEventListener(ON_MOUSE_UP, this.unload, this)
    };
    this.unload = function() {
        s_oStage.removeChild(f);
        s_oStage.removeChild(n);
        r.unload();
        t.off("click", u)
    };
    this._onLogoButRelease = function() {
        window.open("https://www.codethislab.com/", "_blank")
    };
    this._init()
}

function CEndPanel(n) {
    var e, t, i, r, u, f;
    return this._init = function(n) {
        t = new createjs.Container;
        t.alpha = 0;
        t.visible = !1;
        e = createBitmap(n);
        t.addChild(e);
        i = new createjs.Text("", "60px " + PRIMARY_FONT, "#000");
        i.x = CANVAS_WIDTH / 2 + 1;
        i.y = CANVAS_HEIGHT / 2 - 160;
        i.textAlign = "center";
        t.addChild(i);
        r = new createjs.Text("", "60px " + PRIMARY_FONT, "#ffffff");
        r.x = CANVAS_WIDTH / 2;
        r.y = CANVAS_HEIGHT / 2 - 162;
        r.textAlign = "center";
        t.addChild(r);
        var f = 650,
            o = 150,
            s = CANVAS_WIDTH / 2,
            h = CANVAS_HEIGHT / 2 + 50;
        u = new CTLText(t, s - f / 2, h - o / 2, f, o, 38, "center", "#fff", PRIMARY_FONT, 1, 2, 2, " ", !0, !0, !0, !1);
        u.setShadow("#000", 1, 1, 1);
        s_oStage.addChild(t)
    }, this.unload = function() {
        t.off("mousedown", f)
    }, this._initListener = function() {
        f = t.on("mousedown", this._onExit)
    }, this.show = function(n) {
        playSound("game_over", 1, !1);
        i.text = TEXT_WIN;
        r.text = TEXT_WIN;
        u.refreshText(TEXT_SCORE + ": " + n);
        t.visible = !0;
        var f = this;
        createjs.Tween.get(t).to({
            alpha: 1
        }, 500).call(function() {
            f._initListener()
        });
        $(s_oMain).trigger("save_score", [n, s_iMode]);
        $(s_oMain).trigger("end_level", 1);
        $(s_oMain).trigger("share_event", [n])
    }, this.changeTitle = function(n) {
        i.text = n;
        r.text = n
    }, this.changeExpl = function(n) {
        u.refreshText(n)
    }, this._onExit = function() {
        $(s_oMain).trigger("show_interlevel_ad");
        $(s_oMain).trigger("end_session", 1);
        t.off("mousedown", f);
        s_oStage.removeChild(t);
        s_oGame.onExit()
    }, this._init(n), this
}

function CCard(n, t, i, r, u, f) {
    var b = !1,
        g = !0,
        s, nt, p, h, v, c, tt, it, w, k, l, o, e, y, rt, a, ut, d;
    this._init = function(n, t, i, r, u, f) {
        var a, b, ut, ft;
        y = i;
        h = r;
        v = u;
        c = f;
        tt = 0;
        s = !1;
        nt = "deck";
        p = c === 0 || c === 2 ? "red" : "black";
        e = new createjs.Container;
        e.x = n;
        e.y = t;
        y.addChild(e);
        var g = [],
            it = {},
            rt = 0;
        for (a = 0; a < 4; a++)
            for (b = 1; b < 14; b++) g.push(s_oSpriteLibrary.getSprite("card_" + a + "_" + b)), it["card_" + a + "_" + b] = rt, rt++;
        it.back = 52;
        g.push(s_oSpriteLibrary.getSprite("card_back"));
        ut = {
            images: g,
            frames: {
                width: CARD_WIDTH,
                height: CARD_HEIGHT,
                regX: CARD_WIDTH / 2,
                regY: CARD_HEIGHT / 2
            },
            animations: it
        };
        ft = new createjs.SpriteSheet(ut);
        l = createSprite(ft, "back", 0, 0, CARD_WIDTH, CARD_HEIGHT);
        l.stop();
        e.addChild(l);
        o = new createjs.Shape;
        o.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(-CARD_WIDTH / 2, -CARD_HEIGHT / 2, CARD_WIDTH, CARD_HEIGHT);
        d = o.on("mousedown", this._mouseDown);
        e.addChild(o);
        s_bMobile || (o.cursor = "pointer");
        w = [];
        k = []
    };
    this.unload = function() {
        o.off("mousedown", d);
        y.removeChild(e)
    };
    this.saveInfo = function() {
        return {
            szFotogram: h,
            iRank: v,
            iSuit: c,
            bValue: g
        }
    };
    this.changeInfo = function(n, t, i) {
        h = n;
        v = t;
        c = i
    };
    this.instantShow = function() {
        l.gotoAndStop(h)
    };
    this.setValue = function() {
        l.gotoAndStop(h);
        playSound("card", 1, !1);
        var n = this;
        createjs.Tween.get(e).to({
            scaleX: 1
        }, 200)
    };
    this.setActive = function(n) {
        n ? e.addChild(o) : e.removeChild(o)
    };
    this.setVisible = function(n) {
        e.visible = n === !0 ? !0 : !1
    };
    this.moveCard = function(n, t, i, r) {
        createjs.Tween.get(e).wait(r).to({
            x: n,
            y: t
        }, i, createjs.Ease.linear).call(function() {
            a.setPlaced()
        })
    };
    this.moveDeckCard = function(n, t, i, r) {
        createjs.Tween.get(e).wait(r).to({
            x: n,
            y: t
        }, i, createjs.Ease.linear).call(function() {
            s_oGame.activeDeck();
            a.showCard()
        })
    };
    this.moveToSuit = function(n, t, i) {
        createjs.Tween.get(e).wait(i).to({
            x: n,
            y: t
        }, 200, createjs.Ease.cubicOut).call(function() {
            s_oGame.stackInSuit(a)
        })
    };
    this.setPlaced = function() {
        b = !0;
        s_oGame.scaleDepth(this.getSprite())
    };
    this.stackInPlace = function(n, t, i) {
        createjs.Tween.get(e).to({
            x: n,
            y: t
        }, i, createjs.Ease.cubicOut).call(function() {
            s = !0
        })
    };
    this.stackInY = function(n, t) {
        createjs.Tween.get(e).to({
            y: n
        }, t, createjs.Ease.cubicOut).call(function() {
            s = !0
        })
    };
    this.stackAndDeactive = function(n, t, i) {
        createjs.Tween.get(e).to({
            x: n,
            y: t
        }, i, createjs.Ease.cubicOut)
    };
    this._mouseDown = function(n) {
        s !== !1 && (ut = {
            x: e.x,
            y: e.y
        }, it = y.getChildIndex(e), s_oGame.pickCard(a, n))
    };
    this.getPlaced = function() {
        return b
    };
    this.showCard = function() {
        var n = this;
        createjs.Tween.get(e).to({
            scaleX: .1
        }, 200).call(function() {
            n.setValue()
        }).call(function() {
            s = !0
        })
    };
    this.hideCard = function() {
        var n = this;
        createjs.Tween.get(e).to({
            scaleX: .1
        }, 200).call(function() {
            n.setBack()
        })
    };
    this.setPos = function(n, t) {
        e.x = n;
        e.y = t
    };
    this.setBack = function() {
        s = !1;
        l.gotoAndStop("back");
        var n = this;
        createjs.Tween.get(e).to({
            scaleX: 1
        }, 200).call(function() {
            n.cardHidden()
        })
    };
    this.cardHidden = function() {
        w[ON_CARD_HIDE] && w[ON_CARD_HIDE].call(k[ON_CARD_HIDE], this)
    };
    this.getRank = function() {
        return v
    };
    this.getSuit = function() {
        return c
    };
    this.getColor = function() {
        return p
    };
    this.getFotogram = function() {
        return h
    };
    this.getPos = function() {
        return {
            x: e.x,
            y: e.y
        }
    };
    this.getSprite = function() {
        return e
    };
    this.getLogicRect = function() {
        return new createjs.Rectangle(e.x - CARD_WIDTH / 2, e.y - CARD_HEIGHT / 2, CARD_WIDTH, CARD_HEIGHT)
    };
    rt = this;
    a = this;
    this._init(n, t, i, r, u, f)
}

function CScore() {
    this.showScore = function(n, t) {
        var u = 1e3,
            i = new createjs.Text("+" + t, "26px " + PRIMARY_FONT, "#000000"),
            r;
        i.x = n.x;
        i.y = n.y;
        i.scaleX = 2;
        i.scaleY = 2;
        i.textAlign = "right";
        i.textBaseline = "alphabetic";
        i.outline = 4;
        s_oStage.addChild(i);
        r = new createjs.Text("+" + t, "26px " + PRIMARY_FONT, "#fff");
        r.x = n.x;
        r.y = n.y;
        r.scaleX = 2;
        r.scaleY = 2;
        r.textAlign = "right";
        r.textBaseline = "alphabetic";
        s_oStage.addChild(r);
        s_oGame.updateScore(t);
        createjs.Tween.get(r).to({
            x: 425,
            y: 109
        }, u, createjs.Ease.cubicIn).call(function() {
            s_oGame.updateVisualScore(t);
            s_oStage.removeChild(r)
        });
        createjs.Tween.get(r).to({
            scaleX: 1,
            scaleY: 1
        }, u, createjs.Ease.linear);
        createjs.Tween.get(i).to({
            x: 425,
            y: 109
        }, u, createjs.Ease.cubicIn).call(function() {
            s_oStage.removeChild(i)
        });
        createjs.Tween.get(i).to({
            scaleX: 1,
            scaleY: 1
        }, u, createjs.Ease.linear)
    };
    this.removeScore = function(n, t) {
        var i = new createjs.Text(n, "25px " + PRIMARY_FONT, "#ffffff");
        i.x = 428;
        i.y = 109;
        i.alpha = 0;
        i.textAlign = "right";
        i.textBaseline = "alphabetic";
        i.lineWidth = 200;
        s_oStage.addChild(i);
        createjs.Tween.get(i).to({
            alpha: 1
        }, t, createjs.Ease.linear).call(function() {
            s_oStage.removeChild(i)
        })
    };
    this.displayMoves = function(n, t) {
        var i = new createjs.Text(n, "25px " + PRIMARY_FONT, "#ffffff");
        i.x = 615;
        i.y = 109;
        i.alpha = 0;
        i.textAlign = "right";
        i.textBaseline = "alphabetic";
        i.lineWidth = 200;
        s_oStage.addChild(i);
        createjs.Tween.get(i).to({
            alpha: 1
        }, t, createjs.Ease.linear).call(function() {
            s_oStage.removeChild(i)
        })
    }
}

function CAreYouSurePanel(n) {
    var h, u, o, c, f, v, s, e, i, l, r, t, a = this;
    this._init = function() {
        var n;
        u = [];
        o = [];
        i = new createjs.Container;
        i.visible = !1;
        l.addChild(i);
        r = new createjs.Shape;
        r.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        r.alpha = .7;
        c = r.on("click", function() {});
        i.addChild(r);
        t = new createjs.Container;
        i.addChild(t);
        n = s_oSpriteLibrary.getSprite("msg_box");
        f = createBitmap(n);
        f.regX = n.width * .5;
        f.regY = n.height * .5;
        t.addChild(f);
        t.x = CANVAS_WIDTH / 2;
        t.y = h = CANVAS_HEIGHT / 2;
        var a = 600,
            y = 80;
        v = new CTLText(t, 0 - a / 2, -100 - y / 2, a, y, 70, "center", "#fff", PRIMARY_FONT, 1, 2, 2, TEXT_ARE_YOU_SURE, !0, !0, !1, !1);
        s = new CGfxButton(100, 100, s_oSpriteLibrary.getSprite("but_yes"), t);
        s.addEventListener(ON_MOUSE_UP, this._onButYes, this);
        e = new CGfxButton(-100, 100, s_oSpriteLibrary.getSprite("but_no"), t);
        e.addEventListener(ON_MOUSE_UP, this._onButNo, this);
        e.pulseAnimation()
    };
    this.addEventListener = function(n, t, i) {
        u[n] = t;
        o[n] = i
    };
    this.show = function() {
        t.y = h;
        i.visible = !0
    };
    this.hide = function() {
        i.visible = !1
    };
    this.unload = function() {
        e.unload();
        s.unload();
        r.off("click", c)
    };
    this._onButYes = function() {
        a.hide();
        u[ON_BUT_YES_DOWN] && u[ON_BUT_YES_DOWN].call(o[ON_BUT_YES_DOWN])
    };
    this._onButNo = function() {
        a.hide()
    };
    l = n;
    this._init()
}

function CTLText(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w) {
    this._oContainer = n;
    this._x = t;
    this._y = i;
    this._iWidth = r;
    this._iHeight = u;
    this._bMultiline = p;
    this._iFontSize = f;
    this._szAlign = e;
    this._szColor = o;
    this._szFont = s;
    this._iPaddingH = c;
    this._iPaddingV = l;
    this._bVerticalAlign = y;
    this._bFitText = v;
    this._bDebug = w;
    this._oDebugShape = null;
    this._fLineHeightFactor = h;
    this._oText = null;
    a && this.__createText(a)
}

function extractHostname(n) {
    var t;
    return t = n.indexOf("://") > -1 ? n.split("/")[2] : n.split("/")[0], t = t.split(":")[0], t.split("?")[0]
}

function extractRootDomain(n) {
    var t = extractHostname(n),
        i = t.split("."),
        r = i.length;
    return r > 2 && (t = i[r - 2] + "." + i[r - 1]), t
}

function seekAndDestroy() {
    for (var i = extractRootDomain(PAGE_URL), t = [String.fromCharCode(99, 111, 100, 101, 116, 104, 105, 115, 108, 97, 98, 46, 99, 111, 109), String.fromCharCode(101, 110, 118, 97, 116, 111, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116)], n = 0; n < t.length; n++)
        if (t[n] === i) return !0;
    return !1
}
var s_oMenu, s_oModeMenu, s_oGame, s_oInterface;
this.createjs = this.createjs || {};
createjs.extend = function(n, t) {
    "use strict";

    function i() {
        this.constructor = n
    }
    return i.prototype = t.prototype, n.prototype = new i
};
this.createjs = this.createjs || {};
createjs.promote = function(n, t) {
    "use strict";
    var i = n.prototype,
        r = Object.getPrototypeOf && Object.getPrototypeOf(i) || i.__proto__,
        u;
    if (r) {
        i[(t += "_") + "constructor"] = r.constructor;
        for (u in r) i.hasOwnProperty(u) && typeof r[u] == "function" && (i[t + u] = r[u])
    }
    return n
};
this.createjs = this.createjs || {};
createjs.deprecate = function(n, t) {
    "use strict";
    return function() {
        var i = "Deprecated property or method '" + t + "'. See docs for info.";
        return console && (console.warn ? console.warn(i) : console.log(i)), n && n.apply(this, arguments)
    }
};
this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t(n, t, i) {
            this.type = n;
            this.target = null;
            this.currentTarget = null;
            this.eventPhase = 0;
            this.bubbles = !!t;
            this.cancelable = !!i;
            this.timeStamp = (new Date).getTime();
            this.defaultPrevented = !1;
            this.propagationStopped = !1;
            this.immediatePropagationStopped = !1;
            this.removed = !1
        }
        var n = t.prototype;
        n.preventDefault = function() {
            this.defaultPrevented = this.cancelable && !0
        };
        n.stopPropagation = function() {
            this.propagationStopped = !0
        };
        n.stopImmediatePropagation = function() {
            this.immediatePropagationStopped = this.propagationStopped = !0
        };
        n.remove = function() {
            this.removed = !0
        };
        n.clone = function() {
            return new t(this.type, this.bubbles, this.cancelable)
        };
        n.set = function(n) {
            for (var t in n) this[t] = n[t];
            return this
        };
        n.toString = function() {
            return "[Event (type=" + this.type + ")]"
        };
        createjs.Event = t
    }();
this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t() {
            this._listeners = null;
            this._captureListeners = null
        }
        var n = t.prototype;
        t.initialize = function(t) {
            t.addEventListener = n.addEventListener;
            t.on = n.on;
            t.removeEventListener = t.off = n.removeEventListener;
            t.removeAllEventListeners = n.removeAllEventListeners;
            t.hasEventListener = n.hasEventListener;
            t.dispatchEvent = n.dispatchEvent;
            t._dispatchEvent = n._dispatchEvent;
            t.willTrigger = n.willTrigger
        };
        n.addEventListener = function(n, t, i) {
            var u, r;
            return u = i ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {}, r = u[n], r && this.removeEventListener(n, t, i), r = u[n], r ? r.push(t) : u[n] = [t], t
        };
        n.on = function(n, t, i, r, u, f) {
            return t.handleEvent && (i = i || t, t = t.handleEvent), i = i || this, this.addEventListener(n, function(n) {
                t.call(i, n, u);
                r && n.remove()
            }, f)
        };
        n.removeEventListener = function(n, t, i) {
            var f = i ? this._captureListeners : this._listeners,
                r, u, e;
            if (f && (r = f[n], r))
                for (u = 0, e = r.length; u < e; u++)
                    if (r[u] == t) {
                        e == 1 ? delete f[n] : r.splice(u, 1);
                        break
                    }
        };
        n.off = n.removeEventListener;
        n.removeAllEventListeners = function(n) {
            n ? (this._listeners && delete this._listeners[n], this._captureListeners && delete this._captureListeners[n]) : this._listeners = this._captureListeners = null
        };
        n.dispatchEvent = function(n, t, i) {
            var e, u, f, r, o;
            if (typeof n == "string") {
                if (e = this._listeners, !t && (!e || !e[n])) return !0;
                n = new createjs.Event(n, t, i)
            } else n.target && n.clone && (n = n.clone());
            try {
                n.target = this
            } catch (s) {}
            if (n.bubbles && this.parent) {
                for (u = this, f = [u]; u.parent;) f.push(u = u.parent);
                for (o = f.length, r = o - 1; r >= 0 && !n.propagationStopped; r--) f[r]._dispatchEvent(n, 1 + (r == 0));
                for (r = 1; r < o && !n.propagationStopped; r++) f[r]._dispatchEvent(n, 3)
            } else this._dispatchEvent(n, 2);
            return !n.defaultPrevented
        };
        n.hasEventListener = function(n) {
            var t = this._listeners,
                i = this._captureListeners;
            return !!(t && t[n] || i && i[n])
        };
        n.willTrigger = function(n) {
            for (var t = this; t;) {
                if (t.hasEventListener(n)) return !0;
                t = t.parent
            }
            return !1
        };
        n.toString = function() {
            return "[EventDispatcher]"
        };
        n._dispatchEvent = function(n, t) {
            var f, i, e = t <= 2 ? this._captureListeners : this._listeners,
                u, r;
            if (n && e && (i = e[n.type]) && (f = i.length)) {
                try {
                    n.currentTarget = this
                } catch (o) {}
                try {
                    n.eventPhase = t | 0
                } catch (o) {}
                for (n.removed = !1, i = i.slice(), u = 0; u < f && !n.immediatePropagationStopped; u++) r = i[u], r.handleEvent ? r.handleEvent(n) : r(n), n.removed && (this.off(n.type, r, t == 1), n.removed = !1)
            }
            t === 2 && this._dispatchEvent(n, 2.1)
        };
        createjs.EventDispatcher = t
    }();
this.createjs = this.createjs || {},
    function() {
        "use strict";

        function n() {
            throw "Ticker cannot be instantiated.";
        }
        n.RAF_SYNCHED = "synched";
        n.RAF = "raf";
        n.TIMEOUT = "timeout";
        n.timingMode = null;
        n.maxDelta = 0;
        n.paused = !1;
        n.removeEventListener = null;
        n.removeAllEventListeners = null;
        n.dispatchEvent = null;
        n.hasEventListener = null;
        n._listeners = null;
        createjs.EventDispatcher.initialize(n);
        n._addEventListener = n.addEventListener;
        n.addEventListener = function() {
            return n._inited || n.init(), n._addEventListener.apply(n, arguments)
        };
        n._inited = !1;
        n._startTime = 0;
        n._pausedTime = 0;
        n._ticks = 0;
        n._pausedTicks = 0;
        n._interval = 50;
        n._lastTime = 0;
        n._times = null;
        n._tickTimes = null;
        n._timerId = null;
        n._raf = !0;
        n._setInterval = function(t) {
            (n._interval = t, n._inited) && n._setupTick()
        };
        n.setInterval = createjs.deprecate(n._setInterval, "Ticker.setInterval");
        n._getInterval = function() {
            return n._interval
        };
        n.getInterval = createjs.deprecate(n._getInterval, "Ticker.getInterval");
        n._setFPS = function(t) {
            n._setInterval(1e3 / t)
        };
        n.setFPS = createjs.deprecate(n._setFPS, "Ticker.setFPS");
        n._getFPS = function() {
            return 1e3 / n._interval
        };
        n.getFPS = createjs.deprecate(n._getFPS, "Ticker.getFPS");
        try {
            Object.defineProperties(n, {
                interval: {
                    get: n._getInterval,
                    set: n._setInterval
                },
                framerate: {
                    get: n._getFPS,
                    set: n._setFPS
                }
            })
        } catch (r) {
            console.log(r)
        }
        n.init = function() {
            n._inited || (n._inited = !0, n._times = [], n._tickTimes = [], n._startTime = n._getTime(), n._times.push(n._lastTime = 0), n.interval = n._interval)
        };
        n.reset = function() {
            if (n._raf) {
                var t = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame;
                t && t(n._timerId)
            } else clearTimeout(n._timerId);
            n.removeAllEventListeners("tick");
            n._timerId = n._times = n._tickTimes = null;
            n._startTime = n._lastTime = n._ticks = n._pausedTime = 0;
            n._inited = !1
        };
        n.getMeasuredTickTime = function(t) {
            var u = 0,
                i = n._tickTimes,
                r;
            if (!i || i.length < 1) return -1;
            for (t = Math.min(i.length, t || n._getFPS() | 0), r = 0; r < t; r++) u += i[r];
            return u / t
        };
        n.getMeasuredFPS = function(t) {
            var i = n._times;
            return !i || i.length < 2 ? -1 : (t = Math.min(i.length - 1, t || n._getFPS() | 0), 1e3 / ((i[0] - i[t]) / t))
        };
        n.getTime = function(t) {
            return n._startTime ? n._getTime() - (t ? n._pausedTime : 0) : -1
        };
        n.getEventTime = function(t) {
            return n._startTime ? (n._lastTime || n._startTime) - (t ? n._pausedTime : 0) : -1
        };
        n.getTicks = function(t) {
            return n._ticks - (t ? n._pausedTicks : 0)
        };
        n._handleSynch = function() {
            n._timerId = null;
            n._setupTick();
            n._getTime() - n._lastTime >= (n._interval - 1) * .97 && n._tick()
        };
        n._handleRAF = function() {
            n._timerId = null;
            n._setupTick();
            n._tick()
        };
        n._handleTimeout = function() {
            n._timerId = null;
            n._setupTick();
            n._tick()
        };
        n._setupTick = function() {
            var t, i;
            if (n._timerId == null) {
                if (t = n.timingMode, (t == n.RAF_SYNCHED || t == n.RAF) && (i = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame, i)) {
                    n._timerId = i(t == n.RAF ? n._handleRAF : n._handleSynch);
                    n._raf = !0;
                    return
                }
                n._raf = !1;
                n._timerId = setTimeout(n._handleTimeout, n._interval)
            }
        };
        n._tick = function() {
            var f = n.paused,
                t = n._getTime(),
                u = t - n._lastTime,
                i, r;
            for (n._lastTime = t, n._ticks++, f && (n._pausedTicks++, n._pausedTime += u), n.hasEventListener("tick") && (i = new createjs.Event("tick"), r = n.maxDelta, i.delta = r && u > r ? r : u, i.paused = f, i.time = t, i.runTime = t - n._pausedTime, n.dispatchEvent(i)), n._tickTimes.unshift(n._getTime() - t); n._tickTimes.length > 100;) n._tickTimes.pop();
            for (n._times.unshift(t); n._times.length > 100;) n._times.pop()
        };
        var t = window,
            i = t.performance.now || t.performance.mozNow || t.performance.msNow || t.performance.oNow || t.performance.webkitNow;
        n._getTime = function() {
            return (i && i.call(t.performance) || (new Date).getTime()) - n._startTime
        };
        createjs.Ticker = n
    }();
this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t(n) {
            this.EventDispatcher_constructor();
            this.ignoreGlobalPause = !1;
            this.loop = 0;
            this.useTicks = !1;
            this.reversed = !1;
            this.bounce = !1;
            this.timeScale = 1;
            this.duration = 0;
            this.position = 0;
            this.rawPosition = -1;
            this._paused = !0;
            this._next = null;
            this._prev = null;
            this._parent = null;
            this._labels = null;
            this._labelList = null;
            n && (this.useTicks = !!n.useTicks, this.ignoreGlobalPause = !!n.ignoreGlobalPause, this.loop = n.loop === !0 ? -1 : n.loop || 0, this.reversed = !!n.reversed, this.bounce = !!n.bounce, this.timeScale = n.timeScale || 1, n.onChange && this.addEventListener("change", n.onChange), n.onComplete && this.addEventListener("complete", n.onComplete))
        }
        var n = createjs.extend(t, createjs.EventDispatcher);
        n._setPaused = function(n) {
            return createjs.Tween._register(this, n), this
        };
        n.setPaused = createjs.deprecate(n._setPaused, "AbstractTween.setPaused");
        n._getPaused = function() {
            return this._paused
        };
        n.getPaused = createjs.deprecate(n._getPaused, "AbstactTween.getPaused");
        n._getCurrentLabel = function(n) {
            var i = this.getLabels(),
                t, r;
            for (n == null && (n = this.position), t = 0, r = i.length; t < r; t++)
                if (n < i[t].position) break;
            return t === 0 ? null : i[t - 1].label
        };
        n.getCurrentLabel = createjs.deprecate(n._getCurrentLabel, "AbstractTween.getCurrentLabel");
        try {
            Object.defineProperties(n, {
                paused: {
                    set: n._setPaused,
                    get: n._getPaused
                },
                currentLabel: {
                    get: n._getCurrentLabel
                }
            })
        } catch (i) {}
        n.advance = function(n, t) {
            this.setPosition(this.rawPosition + n * this.timeScale, t)
        };
        n.setPosition = function(n, t, i, r) {
            var u = this.duration,
                h = this.loop,
                o = this.rawPosition,
                s = 0,
                e = 0,
                f = !1,
                c;
            if (n < 0 && (n = 0), u === 0) {
                if (f = !0, o !== -1) return f
            } else {
                if (s = n / u | 0, e = n - s * u, f = h !== -1 && n >= h * u + u, f && (n = (e = u) * (s = h) + u), n === o) return f;
                c = !this.reversed != !(this.bounce && s % 2);
                c && (e = u - e)
            }
            this.position = e;
            this.rawPosition = n;
            this._updatePosition(i, f);
            f && (this.paused = !0);
            r && r(this);
            t || this._runActions(o, n, i, !i && o === -1);
            this.dispatchEvent("change");
            f && this.dispatchEvent("complete")
        };
        n.calculatePosition = function(n) {
            var t = this.duration,
                u = this.loop,
                r = 0,
                i = 0,
                f;
            return t === 0 ? 0 : (u !== -1 && n >= u * t + t ? (i = t, r = u) : n < 0 ? i = 0 : (r = n / t | 0, i = n - r * t), f = !this.reversed != !(this.bounce && r % 2), f ? t - i : i)
        };
        n.getLabels = function() {
            var n = this._labelList,
                t, i;
            if (!n) {
                n = this._labelList = [];
                t = this._labels;
                for (i in t) n.push({
                    label: i,
                    position: t[i]
                });
                n.sort(function(n, t) {
                    return n.position - t.position
                })
            }
            return n
        };
        n.setLabels = function(n) {
            this._labels = n;
            this._labelList = null
        };
        n.addLabel = function(n, t) {
            var i, r, u;
            if (this._labels || (this._labels = {}), this._labels[n] = t, i = this._labelList, i) {
                for (r = 0, u = i.length; r < u; r++)
                    if (t < i[r].position) break;
                i.splice(r, 0, {
                    label: n,
                    position: t
                })
            }
        };
        n.gotoAndPlay = function(n) {
            this.paused = !1;
            this._goto(n)
        };
        n.gotoAndStop = function(n) {
            this.paused = !0;
            this._goto(n)
        };
        n.resolve = function(n) {
            var t = Number(n);
            return isNaN(t) && (t = this._labels && this._labels[n]), t
        };
        n.toString = function() {
            return "[AbstractTween]"
        };
        n.clone = function() {
            throw "AbstractTween can not be cloned.";
        };
        n._init = function(n) {
            n && n.paused || (this.paused = !1);
            n && n.position != null && this.setPosition(n.position)
        };
        n._updatePosition = function() {};
        n._goto = function(n) {
            var t = this.resolve(n);
            t != null && this.setPosition(t, !1, !0)
        };
        n._runActions = function(n, t, i, r) {
            var l, o;
            if (this._actionHead || this.tweens) {
                var f = this.duration,
                    p = this.reversed,
                    a = this.bounce,
                    c = this.loop,
                    u, e, h, s;
                if (f === 0 ? (u = e = h = s = 0, p = a = !1) : (u = n / f | 0, e = t / f | 0, h = n - u * f, s = t - e * f), c !== -1 && (e > c && (s = f, e = c), u > c && (h = f, u = c)), i) return this._runActionsRange(s, s, i, r);
                if (u !== e || h !== s || i || r) u === -1 && (u = h = 0);
                else return;
                l = n <= t;
                o = u;
                do {
                    var w = !p != !(a && o % 2),
                        v = o === u ? h : l ? 0 : f,
                        y = o === e ? s : l ? f : 0;
                    if (w && (v = f - v, y = f - y), (!a || o === u || v !== y) && this._runActionsRange(v, y, i, r || o !== u && !a)) return !0;
                    r = !1
                } while (l && ++o <= e || !l && --o >= e)
            }
        };
        n._runActionsRange = function() {};
        createjs.AbstractTween = createjs.promote(t, "EventDispatcher")
    }();
this.createjs = this.createjs || {},
    function() {
        "use strict";

        function n(t, r) {
            this.AbstractTween_constructor(r);
            this.pluginData = null;
            this.target = t;
            this.passive = !1;
            this._stepHead = new i(null, 0, 0, {}, null, !0);
            this._stepTail = this._stepHead;
            this._stepPosition = 0;
            this._actionHead = null;
            this._actionTail = null;
            this._plugins = null;
            this._pluginIds = null;
            this._injected = null;
            r && (this.pluginData = r.pluginData, r.override && n.removeTweens(t));
            this.pluginData || (this.pluginData = {});
            this._init(r)
        }

        function i(n, t, i, r, u, f) {
            this.next = null;
            this.prev = n;
            this.t = t;
            this.d = i;
            this.props = r;
            this.ease = u;
            this.passive = f;
            this.index = n ? n.index + 1 : 0
        }

        function r(n, t, i, r, u) {
            this.next = null;
            this.prev = n;
            this.t = t;
            this.d = 0;
            this.scope = i;
            this.funct = r;
            this.params = u
        }
        var t = createjs.extend(n, createjs.AbstractTween);
        n.IGNORE = {};
        n._tweens = [];
        n._plugins = null;
        n._tweenHead = null;
        n._tweenTail = null;
        n.get = function(t, i) {
            return new n(t, i)
        };
        n.tick = function(t, i) {
            for (var r = n._tweenHead, u; r;) u = r._next, i && !r.ignoreGlobalPause || r._paused || r.advance(r.useTicks ? 1 : t), r = u
        };
        n.handleEvent = function(n) {
            n.type === "tick" && this.tick(n.delta, n.paused)
        };
        n.removeTweens = function(t) {
            var i, r;
            if (t.tweenjs_count) {
                for (i = n._tweenHead; i;) r = i._next, i.target === t && n._register(i, !0), i = r;
                t.tweenjs_count = 0
            }
        };
        n.removeAllTweens = function() {
            for (var t = n._tweenHead, i; t;) i = t._next, t._paused = !0, t.target && (t.target.tweenjs_count = 0), t._next = t._prev = null, t = i;
            n._tweenHead = n._tweenTail = null
        };
        n.hasActiveTweens = function(t) {
            return t ? !!t.tweenjs_count : !!n._tweenHead
        };
        n._installPlugin = function(t) {
            for (var u = t.priority = t.priority || 0, r = n._plugins = n._plugins || [], i = 0, f = r.length; i < f; i++)
                if (u < r[i].priority) break;
            r.splice(i, 0, t)
        };
        n._register = function(t, i) {
            var r = t.target,
                e, u, f;
            !i && t._paused ? (r && (r.tweenjs_count = r.tweenjs_count ? r.tweenjs_count + 1 : 1), e = n._tweenTail, e ? (n._tweenTail = e._next = t, t._prev = e) : n._tweenHead = n._tweenTail = t, !n._inited && createjs.Ticker && (createjs.Ticker.addEventListener("tick", n), n._inited = !0)) : i && !t._paused && (r && r.tweenjs_count--, u = t._next, f = t._prev, u ? u._prev = f : n._tweenTail = f, f ? f._next = u : n._tweenHead = u, t._next = t._prev = null);
            t._paused = i
        };
        t.wait = function(n, t) {
            return n > 0 && this._addStep(+n, this._stepTail.props, null, t), this
        };
        t.to = function(n, t, i) {
            (t == null || t < 0) && (t = 0);
            var r = this._addStep(+t, null, i);
            return this._appendProps(n, r), this
        };
        t.label = function(n) {
            return this.addLabel(n, this.duration), this
        };
        t.call = function(n, t, i) {
            return this._addAction(i || this.target, n, t || [this])
        };
        t.set = function(n, t) {
            return this._addAction(t || this.target, this._set, [n])
        };
        t.play = function(n) {
            return this._addAction(n || this, this._set, [{
                paused: !1
            }])
        };
        t.pause = function(n) {
            return this._addAction(n || this, this._set, [{
                paused: !0
            }])
        };
        t.w = t.wait;
        t.t = t.to;
        t.c = t.call;
        t.s = t.set;
        t.toString = function() {
            return "[Tween]"
        };
        t.clone = function() {
            throw "Tween can not be cloned.";
        };
        t._addPlugin = function(n) {
            var u = this._pluginIds || (this._pluginIds = {}),
                r = n.ID,
                t, f, i, e;
            if (r && !u[r]) {
                for (u[r] = !0, t = this._plugins || (this._plugins = []), f = n.priority || 0, i = 0, e = t.length; i < e; i++)
                    if (f < t[i].priority) {
                        t.splice(i, 0, n);
                        return
                    }
                t.push(n)
            }
        };
        t._updatePosition = function(n, t) {
            var i = this._stepHead.next,
                r = this.position,
                f = this.duration,
                u, e;
            if (this.target && i) {
                for (u = i.next; u && u.t <= r;) i = i.next, u = i.next;
                e = t ? f === 0 ? 1 : r / f : (r - i.t) / i.d;
                this._updateTargetProps(i, e, t)
            }
            this._stepPosition = i ? r - i.t : 0
        };
        t._updateTargetProps = function(t, i, r) {
            var e, u, o, a, l, v, s, f, h, y, c;
            if (!(this.passive = !!t.passive)) {
                l = t.prev.props;
                v = t.props;
                (a = t.ease) && (i = a(i, 0, 1, 1));
                s = this._plugins;
                n: for (f in l) {
                    if (u = l[f], o = v[f], e = u !== o && typeof u == "number" ? u + (o - u) * i : i >= 1 ? o : u, s)
                        for (h = 0, y = s.length; h < y; h++) {
                            if (c = s[h].change(this, t, f, e, i, r), c === n.IGNORE) continue n;
                            c !== undefined && (e = c)
                        }
                    this.target[f] = e
                }
            }
        };
        t._runActionsRange = function(n, t, i, r) {
            var e = n > t,
                u = e ? this._actionTail : this._actionHead,
                o = t,
                s = n,
                h, f;
            for (e && (o = n, s = t), h = this.position; u;) {
                if (f = u.t, (f === t || f > s && f < o || r && f === n) && (u.funct.apply(u.scope, u.params), h !== this.position)) return !0;
                u = e ? u.prev : u.next
            }
        };
        t._appendProps = function(t, i, r) {
            var w = this._stepHead.props,
                b = this.target,
                o = n._plugins,
                u, e, h, f, v, y = i.prev,
                l = y.props,
                p = i.props || (i.props = this._cloneProps(l)),
                c = {},
                a, s;
            for (u in t)
                if (t.hasOwnProperty(u) && (c[u] = p[u] = t[u], w[u] === undefined)) {
                    if (f = undefined, o)
                        for (e = o.length - 1; e >= 0; e--)
                            if (h = o[e].init(this, u, f), h !== undefined && (f = h), f === n.IGNORE) {
                                delete p[u];
                                delete c[u];
                                break
                            }
                    f !== n.IGNORE && (f === undefined && (f = b[u]), l[u] = f === undefined ? null : f)
                }
            for (u in c)
                for (h = t[u], s = y;
                    (a = s) && (s = a.prev);)
                    if (s.props !== a.props) {
                        if (s.props[u] !== undefined) break;
                        s.props[u] = l[u]
                    }
            if (r !== !1 && (o = this._plugins))
                for (e = o.length - 1; e >= 0; e--) o[e].step(this, i, c);
            (v = this._injected) && (this._injected = null, this._appendProps(v, i, !1))
        };
        t._injectProp = function(n, t) {
            var i = this._injected || (this._injected = {});
            i[n] = t
        };
        t._addStep = function(n, t, r, u) {
            var f = new i(this._stepTail, this.duration, n, t, r, u || !1);
            return this.duration += n, this._stepTail = this._stepTail.next = f
        };
        t._addAction = function(n, t, i) {
            var u = new r(this._actionTail, this.duration, n, t, i);
            return this._actionTail ? this._actionTail.next = u : this._actionHead = u, this._actionTail = u, this
        };
        t._set = function(n) {
            for (var t in n) this[t] = n[t]
        };
        t._cloneProps = function(n) {
            var t = {};
            for (var i in n) t[i] = n[i];
            return t
        };
        createjs.Tween = createjs.promote(n, "AbstractTween")
    }();
this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t(n) {
            var t, i;
            n instanceof Array || n == null && arguments.length > 1 ? (t = n, i = arguments[1], n = arguments[2]) : n && (t = n.tweens, i = n.labels);
            this.AbstractTween_constructor(n);
            this.tweens = [];
            t && this.addTween.apply(this, t);
            this.setLabels(i);
            this._init(n)
        }
        var n = createjs.extend(t, createjs.AbstractTween);
        n.addTween = function(n) {
            var t, i, r;
            if (n._parent && n._parent.removeTween(n), t = arguments.length, t > 1) {
                for (i = 0; i < t; i++) this.addTween(arguments[i]);
                return arguments[t - 1]
            }
            return t === 0 ? null : (this.tweens.push(n), n._parent = this, n.paused = !0, r = n.duration, n.loop > 0 && (r *= n.loop + 1), r > this.duration && (this.duration = r), this.rawPosition >= 0 && n.setPosition(this.rawPosition), n)
        };
        n.removeTween = function(n) {
            var u = arguments.length,
                i, r, t;
            if (u > 1) {
                for (i = !0, t = 0; t < u; t++) i = i && this.removeTween(arguments[t]);
                return i
            }
            if (u === 0) return !0;
            for (r = this.tweens, t = r.length; t--;)
                if (r[t] === n) return r.splice(t, 1), n._parent = null, n.duration >= this.duration && this.updateDuration(), !0;
            return !1
        };
        n.updateDuration = function() {
            var n, r, t, i;
            for (this.duration = 0, n = 0, r = this.tweens.length; n < r; n++) t = this.tweens[n], i = t.duration, t.loop > 0 && (i *= t.loop + 1), i > this.duration && (this.duration = i)
        };
        n.toString = function() {
            return "[Timeline]"
        };
        n.clone = function() {
            throw "Timeline can not be cloned.";
        };
        n._updatePosition = function(n) {
            for (var i = this.position, t = 0, r = this.tweens.length; t < r; t++) this.tweens[t].setPosition(i, !0, n)
        };
        n._runActionsRange = function(n, t, i, r) {
            for (var f = this.position, u = 0, e = this.tweens.length; u < e; u++)
                if (this.tweens[u]._runActions(n, t, i, r), f !== this.position) return !0
        };
        createjs.Timeline = createjs.promote(t, "AbstractTween")
    }();
this.createjs = this.createjs || {},
    function() {
        "use strict";

        function n() {
            throw "Ease cannot be instantiated.";
        }
        n.linear = function(n) {
            return n
        };
        n.none = n.linear;
        n.get = function(n) {
            return n < -1 ? n = -1 : n > 1 && (n = 1),
                function(t) {
                    return n == 0 ? t : n < 0 ? t * (t * -n + 1 + n) : t * ((2 - t) * n + (1 - n))
                }
        };
        n.getPowIn = function(n) {
            return function(t) {
                return Math.pow(t, n)
            }
        };
        n.getPowOut = function(n) {
            return function(t) {
                return 1 - Math.pow(1 - t, n)
            }
        };
        n.getPowInOut = function(n) {
            return function(t) {
                return (t *= 2) < 1 ? .5 * Math.pow(t, n) : 1 - .5 * Math.abs(Math.pow(2 - t, n))
            }
        };
        n.quadIn = n.getPowIn(2);
        n.quadOut = n.getPowOut(2);
        n.quadInOut = n.getPowInOut(2);
        n.cubicIn = n.getPowIn(3);
        n.cubicOut = n.getPowOut(3);
        n.cubicInOut = n.getPowInOut(3);
        n.quartIn = n.getPowIn(4);
        n.quartOut = n.getPowOut(4);
        n.quartInOut = n.getPowInOut(4);
        n.quintIn = n.getPowIn(5);
        n.quintOut = n.getPowOut(5);
        n.quintInOut = n.getPowInOut(5);
        n.sineIn = function(n) {
            return 1 - Math.cos(n * Math.PI / 2)
        };
        n.sineOut = function(n) {
            return Math.sin(n * Math.PI / 2)
        };
        n.sineInOut = function(n) {
            return -.5 * (Math.cos(Math.PI * n) - 1)
        };
        n.getBackIn = function(n) {
            return function(t) {
                return t * t * ((n + 1) * t - n)
            }
        };
        n.backIn = n.getBackIn(1.7);
        n.getBackOut = function(n) {
            return function(t) {
                return --t * t * ((n + 1) * t + n) + 1
            }
        };
        n.backOut = n.getBackOut(1.7);
        n.getBackInOut = function(n) {
            return n *= 1.525,
                function(t) {
                    return (t *= 2) < 1 ? .5 * t * t * ((n + 1) * t - n) : .5 * ((t -= 2) * t * ((n + 1) * t + n) + 2)
                }
        };
        n.backInOut = n.getBackInOut(1.7);
        n.circIn = function(n) {
            return -(Math.sqrt(1 - n * n) - 1)
        };
        n.circOut = function(n) {
            return Math.sqrt(1 - --n * n)
        };
        n.circInOut = function(n) {
            return (n *= 2) < 1 ? -.5 * (Math.sqrt(1 - n * n) - 1) : .5 * (Math.sqrt(1 - (n -= 2) * n) + 1)
        };
        n.bounceIn = function(t) {
            return 1 - n.bounceOut(1 - t)
        };
        n.bounceOut = function(n) {
            return n < 1 / 2.75 ? 7.5625 * n * n : n < 2 / 2.75 ? 7.5625 * (n -= 1.5 / 2.75) * n + .75 : n < 2.5 / 2.75 ? 7.5625 * (n -= 2.25 / 2.75) * n + .9375 : 7.5625 * (n -= 2.625 / 2.75) * n + .984375
        };
        n.bounceInOut = function(t) {
            return t < .5 ? n.bounceIn(t * 2) * .5 : n.bounceOut(t * 2 - 1) * .5 + .5
        };
        n.getElasticIn = function(n, t) {
            var i = Math.PI * 2;
            return function(r) {
                if (r == 0 || r == 1) return r;
                var u = t / i * Math.asin(1 / n);
                return -(n * Math.pow(2, 10 * (r -= 1)) * Math.sin((r - u) * i / t))
            }
        };
        n.elasticIn = n.getElasticIn(1, .3);
        n.getElasticOut = function(n, t) {
            var i = Math.PI * 2;
            return function(r) {
                if (r == 0 || r == 1) return r;
                var u = t / i * Math.asin(1 / n);
                return n * Math.pow(2, -10 * r) * Math.sin((r - u) * i / t) + 1
            }
        };
        n.elasticOut = n.getElasticOut(1, .3);
        n.getElasticInOut = function(n, t) {
            var i = Math.PI * 2;
            return function(r) {
                var u = t / i * Math.asin(1 / n);
                return (r *= 2) < 1 ? -.5 * n * Math.pow(2, 10 * (r -= 1)) * Math.sin((r - u) * i / t) : n * Math.pow(2, -10 * (r -= 1)) * Math.sin((r - u) * i / t) * .5 + 1
            }
        };
        n.elasticInOut = n.getElasticInOut(1, .3 * 1.5);
        createjs.Ease = n
    }();
this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t() {
            throw "MotionGuidePlugin cannot be instantiated.";
        }
        var n = t;
        n.priority = 0;
        n.ID = "MotionGuide";
        n.install = function() {
            return createjs.Tween._installPlugin(t), createjs.Tween.IGNORE
        };
        n.init = function(t, i) {
            i == "guide" && t._addPlugin(n)
        };
        n.step = function(t, i, r) {
            var s, u, o, f, h;
            for (s in r)
                if (s === "guide") {
                    if (u = i.props.guide, o = n._solveGuideData(r.guide, u), u.valid = !o, f = u.endData, t._injectProp("x", f.x), t._injectProp("y", f.y), o || !u.orient) break;
                    if (h = i.prev.props.rotation === undefined ? t.target.rotation || 0 : i.prev.props.rotation, u.startOffsetRot = h - u.startData.rotation, u.orient == "fixed") u.endAbsRot = f.rotation + u.startOffsetRot, u.deltaRotation = 0;
                    else {
                        var c = r.rotation === undefined ? t.target.rotation || 0 : r.rotation,
                            e = c - u.endData.rotation - u.startOffsetRot,
                            l = e % 360;
                        u.endAbsRot = c;
                        switch (u.orient) {
                            case "auto":
                                u.deltaRotation = e;
                                break;
                            case "cw":
                                u.deltaRotation = (l + 360) % 360 + 360 * Math.abs(e / 360 | 0);
                                break;
                            case "ccw":
                                u.deltaRotation = (l - 360) % 360 + -360 * Math.abs(e / 360 | 0)
                        }
                    }
                    t._injectProp("rotation", u.endAbsRot)
                }
        };
        n.change = function(t, i, r, u, f) {
            var e = i.props.guide;
            if (e && i.props !== i.prev.props && e !== i.prev.props.guide) {
                if (r === "guide" && !e.valid || r == "x" || r == "y" || r === "rotation" && e.orient) return createjs.Tween.IGNORE;
                n._ratioToPositionData(f, e, t.target)
            }
        };
        n.debug = function(t, i, r) {
            var o, c, h, f, u;
            if (t = t.guide || t, o = n._findPathProblems(t), o && console.error("MotionGuidePlugin Error found: \n" + o), !i) return o;
            var u, e = t.path,
                a = e.length,
                s = 3,
                l = 9;
            for (i.save(), i.lineCap = "round", i.lineJoin = "miter", i.beginPath(), i.moveTo(e[0], e[1]), u = 2; u < a; u += 4) i.quadraticCurveTo(e[u], e[u + 1], e[u + 2], e[u + 3]);
            if (i.strokeStyle = "black", i.lineWidth = s * 1.5, i.stroke(), i.strokeStyle = "white", i.lineWidth = s, i.stroke(), i.closePath(), c = r.length, r && c)
                for (h = {}, f = {}, n._solveGuideData(t, h), u = 0; u < c; u++) h.orient = "fixed", n._ratioToPositionData(r[u], h, f), i.beginPath(), i.moveTo(f.x, f.y), i.lineTo(f.x + Math.cos(f.rotation * .0174533) * l, f.y + Math.sin(f.rotation * .0174533) * l), i.strokeStyle = "black", i.lineWidth = s * 1.5, i.stroke(), i.strokeStyle = "red", i.lineWidth = s, i.stroke(), i.closePath();
            return i.restore(), o
        };
        n._solveGuideData = function(t, i) {
            var k = undefined,
                f, rt, y, p, it, w, b;
            if (k = n.debug(t)) return k;
            f = i.path = t.path;
            rt = i.orient = t.orient;
            i.subLines = [];
            i.totalLength = 0;
            i.startOffsetRot = 0;
            i.deltaRotation = 0;
            i.startData = {
                ratio: 0
            };
            i.endData = {
                ratio: 1
            };
            i.animSpan = 1;
            var ut = f.length,
                l = 10,
                h, c, d, g, a, v, r, u, e, s = {};
            for (h = f[0], c = f[1], r = 2; r < ut; r += 4) {
                d = f[r];
                g = f[r + 1];
                a = f[r + 2];
                v = f[r + 3];
                var o = {
                        weightings: [],
                        estLength: 0,
                        portion: 0
                    },
                    nt = h,
                    tt = c;
                for (u = 1; u <= l; u++) n._getParamsForCurve(h, c, d, g, a, v, u / l, !1, s), y = s.x - nt, p = s.y - tt, e = Math.sqrt(y * y + p * p), o.weightings.push(e), o.estLength += e, nt = s.x, tt = s.y;
                for (i.totalLength += o.estLength, u = 0; u < l; u++) e = o.estLength, o.weightings[u] = o.weightings[u] / e;
                i.subLines.push(o);
                h = a;
                c = v
            }
            for (e = i.totalLength, it = i.subLines.length, r = 0; r < it; r++) i.subLines[r].portion = i.subLines[r].estLength / e;
            w = isNaN(t.start) ? 0 : t.start;
            b = isNaN(t.end) ? 1 : t.end;
            n._ratioToPositionData(w, i, i.startData);
            n._ratioToPositionData(b, i, i.endData);
            i.startData.ratio = w;
            i.endData.ratio = b;
            i.animSpan = i.endData.ratio - i.startData.ratio
        };
        n._ratioToPositionData = function(t, i, r) {
            for (var c = i.subLines, v, e, u, s = 0, y = 10, l = t * i.animSpan + i.startData.ratio, a, p, o, h = c.length, f = 0; f < h; f++) {
                if (e = c[f].portion, s + e >= l) {
                    u = f;
                    break
                }
                s += e
            }
            for (u === undefined && (u = h - 1, s -= e), a = c[u].weightings, p = e, h = a.length, f = 0; f < h; f++) {
                if (e = a[f] * p, s + e >= l) break;
                s += e
            }
            return u = u * 4 + 2, v = f / y + (l - s) / e * (1 / y), o = i.path, n._getParamsForCurve(o[u - 2], o[u - 1], o[u], o[u + 1], o[u + 2], o[u + 3], v, i.orient, r), i.orient && (t >= .99999 && t <= 1.00001 && i.endAbsRot !== undefined ? r.rotation = i.endAbsRot : r.rotation += i.startOffsetRot + t * i.deltaRotation), r
        };
        n._getParamsForCurve = function(n, t, i, r, u, f, e, o, s) {
            var h = 1 - e;
            s.x = h * h * n + 2 * h * e * i + e * e * u;
            s.y = h * h * t + 2 * h * e * r + e * e * f;
            o && (s.rotation = 57.2957795 * Math.atan2((r - t) * h + (f - r) * e, (i - n) * h + (u - i) * e))
        };
        n._findPathProblems = function(n) {
            var o = n.path,
                i = o && o.length || 0,
                r, u, f, e, t;
            if (i < 6 || (i - 2) % 4) return r = "\tCannot parse 'path' array due to invalid number of entries in path. ", r += "There should be an odd number of points, at least 3 points, and 2 entries per point (x & y). ", r += "See 'CanvasRenderingContext2D.quadraticCurveTo' for details as 'path' models a quadratic bezier.\n\n", r + ("Only [ " + i + " ] values found. Expected: " + Math.max(Math.ceil((i - 2) / 4) * 4 + 2, 6));
            for (u = 0; u < i; u++)
                if (isNaN(o[u])) return "All data in path array must be numeric";
            return (f = n.start, isNaN(f) && !(f === undefined)) ? "'start' out of bounds. Expected 0 to 1, got: " + f : (e = n.end, isNaN(e) && e !== undefined) ? "'end' out of bounds. Expected 0 to 1, got: " + e : (t = n.orient, t && t != "fixed" && t != "auto" && t != "cw" && t != "ccw") ? 'Invalid orientation value. Expected ["fixed", "auto", "cw", "ccw", undefined], got: ' + t : undefined
        };
        createjs.MotionGuidePlugin = t
    }();
this.createjs = this.createjs || {},
    function() {
        "use strict";
        var n = createjs.TweenJS = createjs.TweenJS || {};
        n.version = "1.0.0";
        n.buildDate = "Thu, 14 Sep 2017 19:47:47 GMT"
    }(),
    function() {
        "use strict";
        var t = typeof window != "undefined" && typeof window.document != "undefined" ? window.document : {},
            r = typeof module != "undefined" && module.exports,
            n = function() {
                for (var i, r = [
                        ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                        ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                        ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                        ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                        ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                    ], n = 0, f = r.length, u = {}; n < f; n++)
                    if (i = r[n], i && i[1] in t) {
                        for (n = 0; n < i.length; n++) u[r[0][n]] = i[n];
                        return u
                    }
                return !1
            }(),
            u = {
                change: n.fullscreenchange,
                error: n.fullscreenerror
            },
            i = {
                request: function(i) {
                    return new Promise(function(r, u) {
                        var f = function() {
                            this.off("change", f);
                            r()
                        }.bind(this);
                        this.on("change", f);
                        i = i || t.documentElement;
                        Promise.resolve(i[n.requestFullscreen]()).catch(u)
                    }.bind(this))
                },
                exit: function() {
                    return new Promise(function(i, r) {
                        if (!this.isFullscreen) {
                            i();
                            return
                        }
                        var u = function() {
                            this.off("change", u);
                            i()
                        }.bind(this);
                        this.on("change", u);
                        Promise.resolve(t[n.exitFullscreen]()).catch(r)
                    }.bind(this))
                },
                toggle: function(n) {
                    return this.isFullscreen ? this.exit() : this.request(n)
                },
                onchange: function(n) {
                    this.on("change", n)
                },
                onerror: function(n) {
                    this.on("error", n)
                },
                on: function(n, i) {
                    var r = u[n];
                    r && t.addEventListener(r, i, !1)
                },
                off: function(n, i) {
                    var r = u[n];
                    r && t.removeEventListener(r, i, !1)
                },
                raw: n
            };
        if (!n) {
            r ? module.exports = {
                isEnabled: !1
            } : window.screenfull = {
                isEnabled: !1
            };
            return
        }
        Object.defineProperties(i, {
            isFullscreen: {
                get: function() {
                    return Boolean(t[n.fullscreenElement])
                }
            },
            element: {
                enumerable: !0,
                get: function() {
                    return t[n.fullscreenElement]
                }
            },
            isEnabled: {
                enumerable: !0,
                get: function() {
                    return Boolean(t[n.fullscreenEnabled])
                }
            }
        });
        r ? module.exports = i : window.screenfull = i
    }();
/*!
 * Platform.js <https://mths.be/platform>
 * Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
 * Copyright 2011-2013 John-David Dalton
 * Available under MIT license <https://mths.be/mit>
 */
(function() {
    "use strict";

    function p(n) {
        return n = String(n), n.charAt(0).toUpperCase() + n.slice(1)
    }

    function nt(n, t, i) {
        var r = {
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
        return t && i && /^Win/i.test(n) && !/^Windows Phone /i.test(n) && (r = r[/[\d.]+$/.exec(n)]) && (n = "Windows " + r), n = String(n), t && i && (n = n.replace(RegExp(t, "i"), i)), o(n.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
    }

    function tt(n, t) {
        var r = -1,
            i = n ? n.length : 0;
        if (typeof i == "number" && i > -1 && i <= k)
            while (++r < i) t(n[r], r, n);
        else s(n, t)
    }

    function o(n) {
        return n = w(n), /^(?:webOS|i(?:OS|P))/.test(n) ? n : p(n)
    }

    function s(n, t) {
        for (var i in n) g.call(n, i) && t(n[i], i, n)
    }

    function t(n) {
        return n == null ? p(n) : y.call(n).slice(8, -1)
    }

    function it(n, t) {
        var i = n != null ? typeof n[t] : "number";
        return !/^(?:boolean|number|string|undefined)$/.test(i) && (i == "object" ? !!n[t] : !0)
    }

    function i(n) {
        return String(n).replace(/([ -])(?!$)/g, "$1?")
    }

    function r(n, t) {
        var i = null;
        return tt(n, function(r, u) {
            i = t(i, r, u, n)
        }), i
    }

    function w(n) {
        return String(n).replace(/^ +| +$/g, "")
    }

    function h(n) {
        function ui(t) {
            return r(t, function(t, r) {
                return t || RegExp("\\b" + (r.pattern || i(r)) + "\\b", "i").exec(n) && (r.label || r)
            })
        }

        function fi(t) {
            return r(t, function(t, r, u) {
                return t || (r[p] || r[/^[a-z]+(?: +[a-z]+\b)*/i.exec(p)] || RegExp("\\b" + i(u) + "(?:\\b|\\w*\\d)", "i").exec(n)) && u
            })
        }

        function ei(t) {
            return r(t, function(t, r) {
                return t || RegExp("\\b" + (r.pattern || i(r)) + "\\b", "i").exec(n) && (r.label || r)
            })
        }

        function oi(t) {
            return r(t, function(t, r) {
                var u = r.pattern || i(r);
                return !t && (t = RegExp("\\b" + u + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(n)) && (t = nt(t, u, r.label || r)), t
            })
        }

        function wt(t) {
            return r(t, function(t, r) {
                var u = r.pattern || i(r);
                return !t && (t = RegExp("\\b" + u + " *\\d+[.\\w_]*", "i").exec(n) || RegExp("\\b" + u + " *\\w+-[\\w]*", "i").exec(n) || RegExp("\\b" + u + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(n)) && ((t = String(r.label && !RegExp(u, "i").test(r.label) ? r.label : t).split("/"))[1] && !/[\d.]+/.test(t[0]) && (t[0] += " " + t[1]), r = r.label || r, t = o(t[0].replace(RegExp(u, "i"), r).replace(RegExp("; *(?:" + r + "[_-])?", "i"), " ").replace(RegExp("(" + r + ")[-_.]?(\\w)", "i"), "$1 $2"))), t
            })
        }

        function si(t) {
            return r(t, function(t, i) {
                return t || (RegExp(i + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(n) || 0)[1] || null
            })
        }

        function hi() {
            return this.description || ""
        }
        var g = u,
            ut = n && typeof n == "object" && t(n) != "String",
            ot, at, tt;
        ut && (g = n, n = null);
        ot = g.navigator || {};
        at = ot.userAgent || "";
        n || (n = at);
        var ci = ut || d == b,
            bt = ut ? !!ot.likeChrome : /\bChrome\b/.test(n) && !/internal|\n/i.test(y.toString()),
            vt = "Object",
            kt = ut ? vt : "ScriptBridgingProxyObject",
            dt = ut ? vt : "Environment",
            gt = ut && g.java ? "JavaPackage" : t(g.java),
            ni = ut ? vt : "RuntimeObject",
            st = /\bJava/.test(gt) && g.java,
            ti = st && t(g.environment) == dt,
            ii = st ? "a" : "α",
            ri = st ? "b" : "β",
            yt = g.document || {},
            ft = g.operamini || g.opera,
            ht = e.test(ht = ut && ft ? ft["[[Class]]"] : t(ft)) ? ht : ft = null,
            f, ct = n,
            v = [],
            lt = null,
            et = n == at,
            a = et && ft && typeof ft.version == "function" && ft.version(),
            pt, k = ui([{
                label: "EdgeHTML",
                pattern: "Edge"
            }, "Trident", {
                label: "WebKit",
                pattern: "AppleWebKit"
            }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
            c = ei(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
                label: "Microsoft Edge",
                pattern: "Edge"
            }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
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
            }, {
                label: "IE",
                pattern: "IEMobile"
            }, {
                label: "IE",
                pattern: "MSIE"
            }, "Safari"]),
            p = wt([{
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
            }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
                label: "Kindle Fire",
                pattern: "(?:Cloud9|Silk-Accelerated)"
            }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
                label: "Wii U",
                pattern: "WiiU"
            }, "Wii", "Xbox One", {
                label: "Xbox 360",
                pattern: "Xbox"
            }, "Xoom"]),
            rt = fi({
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
            l = oi(["Windows Phone", "Android", "CentOS", {
                label: "Chrome OS",
                pattern: "CrOS"
            }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);
        if (k && (k = [k]), rt && !p && (p = wt([rt])), (f = /\bGoogle TV\b/.exec(p)) && (p = f[0]), /\bSimulator\b/i.test(n) && (p = (p ? p + " " : "") + "Simulator"), c == "Opera Mini" && /\bOPiOS\b/.test(n) && v.push("running in Turbo/Uncompressed mode"), c == "IE" && /\blike iPhone OS\b/.test(n) ? (f = h(n.replace(/like iPhone OS/, "")), rt = f.manufacturer, p = f.product) : /^iP/.test(p) ? (c || (c = "Safari"), l = "iOS" + ((f = / OS ([\d_]+)/i.exec(n)) ? " " + f[1].replace(/_/g, ".") : "")) : c != "Konqueror" || /buntu/i.test(l) ? rt && rt != "Google" && (/Chrome/.test(c) && !/\bMobile Safari\b/i.test(n) || /\bVita\b/.test(p)) || /\bAndroid\b/.test(l) && /^Chrome/.test(c) && /\bVersion\//i.test(n) ? (c = "Android Browser", l = /\bAndroid\b/.test(l) ? l : "Android") : c == "Silk" ? (/\bMobi/i.test(n) || (l = "Android", v.unshift("desktop mode")), /Accelerated *= *true/i.test(n) && v.unshift("accelerated")) : c == "PaleMoon" && (f = /\bFirefox\/([\d.]+)\b/.exec(n)) ? v.push("identifying as Firefox " + f[1]) : c == "Firefox" && (f = /\b(Mobile|Tablet|TV)\b/i.exec(n)) ? (l || (l = "Firefox OS"), p || (p = f[1])) : !c || (f = !/\bMinefield\b/i.test(n) && /\b(?:Firefox|Safari)\b/.exec(c)) ? (c && !p && /[\/,]|^[^(]+?\)/.test(n.slice(n.indexOf(f + "/") + 8)) && (c = null), (f = p || rt || l) && (p || rt || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(l)) && (c = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(l) ? l : f) + " Browser")) : c == "Electron" && (f = (/\bChrome\/([\d.]+)\b/.exec(n) || 0)[1]) && v.push("Chromium " + f) : l = "Kubuntu", a || (a = si(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", i(c), "(?:Firefox|Minefield|NetFront)"])), (f = k == "iCab" && parseFloat(a) > 3 && "WebKit" || /\bOpera\b/.test(c) && (/\bOPR\b/.test(n) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(n) && !/^(?:Trident|EdgeHTML)$/.test(k) && "WebKit" || !k && /\bMSIE\b/i.test(n) && (l == "Mac OS" ? "Tasman" : "Trident") || k == "WebKit" && /\bPlayStation\b(?! Vita\b)/i.test(c) && "NetFront") && (k = [f]), c == "IE" && (f = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(n) || 0)[1]) ? (c += " Mobile", l = "Windows Phone " + (/\+$/.test(f) ? f : f + ".x"), v.unshift("desktop mode")) : /\bWPDesktop\b/i.test(n) ? (c = "IE Mobile", l = "Windows Phone 8.x", v.unshift("desktop mode"), a || (a = (/\brv:([\d.]+)/.exec(n) || 0)[1])) : c != "IE" && k == "Trident" && (f = /\brv:([\d.]+)/.exec(n)) && (c && v.push("identifying as " + c + (a ? " " + a : "")), c = "IE", a = f[1]), et) {
            if (it(g, "global"))
                if (st && (f = st.lang.System, ct = f.getProperty("os.arch"), l = l || f.getProperty("os.name") + " " + f.getProperty("os.version")), ti) {
                    try {
                        a = g.require("ringo/engine").version.join(".");
                        c = "RingoJS"
                    } catch (li) {
                        (f = g.system) && f.global.system == g.system && (c = "Narwhal", l || (l = f[0].os || null))
                    }
                    c || (c = "Rhino")
                } else typeof g.process == "object" && !g.process.browser && (f = g.process) && (typeof f.versions == "object" && (typeof f.versions.electron == "string" ? (v.push("Node " + f.versions.node), c = "Electron", a = f.versions.electron) : typeof f.versions.nw == "string" && (v.push("Chromium " + a, "Node " + f.versions.node), c = "NW.js", a = f.versions.nw)), c || (c = "Node.js", ct = f.arch, l = f.platform, a = /[\d.]+/.exec(f.version), a = a ? a[0] : null));
            else t(f = g.runtime) == kt ? (c = "Adobe AIR", l = f.flash.system.Capabilities.os) : t(f = g.phantom) == ni ? (c = "PhantomJS", a = (f = f.version || null) && f.major + "." + f.minor + "." + f.patch) : typeof yt.documentMode == "number" && (f = /\bTrident\/(\d+)/i.exec(n)) ? (a = [a, yt.documentMode], (f = +f[1] + 4) != a[1] && (v.push("IE " + a[1] + " mode"), k && (k[1] = ""), a[1] = f), a = c == "IE" ? String(a[1].toFixed(1)) : a[0]) : typeof yt.documentMode == "number" && /^(?:Chrome|Firefox)\b/.test(c) && (v.push("masking as " + c + " " + a), c = "IE", a = "11.0", k = ["Trident"], l = "Windows");
            l = l && o(l)
        }
        if (a && (f = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(a) || /(?:alpha|beta)(?: ?\d)?/i.exec(n + ";" + (et && ot.appMinorVersion)) || /\bMinefield\b/i.test(n) && "a") && (lt = /b/i.test(f) ? "beta" : "alpha", a = a.replace(RegExp(f + "\\+?$"), "") + (lt == "beta" ? ri : ii) + (/\d+\+?/.exec(f) || "")), c == "Fennec" || c == "Firefox" && /\b(?:Android|Firefox OS)\b/.test(l)) c = "Firefox Mobile";
        else if (c == "Maxthon" && a) a = a.replace(/\.[\d.]+/, ".x");
        else if (/\bXbox\b/i.test(p)) p == "Xbox 360" && (l = null), p == "Xbox 360" && /\bIEMobile\b/.test(n) && v.unshift("mobile mode");
        else if ((/^(?:Chrome|IE|Opera)$/.test(c) || c && !p && !/Browser|Mobi/.test(c)) && (l == "Windows CE" || /Mobi/i.test(n))) c += " Mobile";
        else if (c == "IE" && et) try {
            g.external === null && v.unshift("platform preview")
        } catch (li) {
            v.unshift("embedded")
        } else(/\bBlackBerry\b/.test(p) || /\bBB10\b/.test(n)) && (f = (RegExp(p.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(n) || 0)[1] || a) ? (f = [f, /BB10/.test(n)], l = (f[1] ? (p = null, rt = "BlackBerry") : "Device Software") + " " + f[0], a = null) : this != s && p != "Wii" && (et && ft || /Opera/.test(c) && /\b(?:MSIE|Firefox)\b/i.test(n) || c == "Firefox" && /\bOS X (?:\d+\.){2,}/.test(l) || c == "IE" && (l && !/^Win/.test(l) && a > 5.5 || /\bWindows XP\b/.test(l) && a > 8 || a == 8 && !/\bTrident\b/.test(n))) && !e.test(f = h.call(s, n.replace(e, "") + ";")) && f.name && (f = "ing as " + f.name + ((f = f.version) ? " " + f : ""), e.test(c) ? (/\bIE\b/.test(f) && l == "Mac OS" && (l = null), f = "identify" + f) : (f = "mask" + f, c = ht ? o(ht.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(f) && (l = null), et || (a = null)), k = ["Presto"], v.push(f));
        return (f = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(n) || 0)[1]) && (f = [parseFloat(f.replace(/\.(\d)$/, ".0$1")), f], c == "Safari" && f[1].slice(-1) == "+" ? (c = "WebKit Nightly", lt = "alpha", a = f[1].slice(0, -1)) : (a == f[1] || a == (f[2] = (/\bSafari\/([\d.]+\+?)/i.exec(n) || 0)[1])) && (a = null), f[1] = (/\bChrome\/([\d.]+)/i.exec(n) || 0)[1], f[0] == 537.36 && f[2] == 537.36 && parseFloat(f[1]) >= 28 && k == "WebKit" && (k = ["Blink"]), et && (bt || f[1]) ? (k && (k[1] = "like Chrome"), f = f[1] || (f = f[0], f < 530 ? 1 : f < 532 ? 2 : f < 532.05 ? 3 : f < 533 ? 4 : f < 534.03 ? 5 : f < 534.07 ? 6 : f < 534.1 ? 7 : f < 534.13 ? 8 : f < 534.16 ? 9 : f < 534.24 ? 10 : f < 534.3 ? 11 : f < 535.01 ? 12 : f < 535.02 ? "13+" : f < 535.07 ? 15 : f < 535.11 ? 16 : f < 535.19 ? 17 : f < 536.05 ? 18 : f < 536.1 ? 19 : f < 537.01 ? 20 : f < 537.11 ? "21+" : f < 537.13 ? 23 : f < 537.18 ? 24 : f < 537.24 ? 25 : f < 537.36 ? 26 : k != "Blink" ? "27" : "28")) : (k && (k[1] = "like Safari"), f = (f = f[0], f < 400 ? 1 : f < 500 ? 2 : f < 526 ? 3 : f < 533 ? 4 : f < 534 ? "4+" : f < 535 ? 5 : f < 537 ? 6 : f < 538 ? 7 : f < 601 ? 8 : "8")), k && (k[1] += " " + (f += typeof f == "number" ? ".x" : /[.+]/.test(f) ? "" : "+")), c == "Safari" && (!a || parseInt(a) > 45) && (a = f)), c == "Opera" && (f = /\bzbov|zvav$/.exec(l)) ? (c += " ", v.unshift("desktop mode"), f == "zvav" ? (c += "Mini", a = null) : c += "Mobile", l = l.replace(RegExp(" *" + f + "$"), "")) : c == "Safari" && /\bChrome\b/.exec(k && k[1]) && (v.unshift("desktop mode"), c = "Chrome Mobile", a = null, /\bOS X\b/.test(l) ? (rt = "Apple", l = "iOS 4.3+") : l = null), a && a.indexOf(f = /[\d.]+$/.exec(l)) == 0 && n.indexOf("/" + f + "-") > -1 && (l = w(l.replace(f, ""))), k && !/\b(?:Avant|Nook)\b/.test(c) && (/Browser|Lunascape|Maxthon/.test(c) || c != "Safari" && /^iOS/.test(l) && /\bSafari\b/.test(k[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(c) && k[1]) && (f = k[k.length - 1]) && v.push(f), v.length && (v = ["(" + v.join("; ") + ")"]), rt && p && p.indexOf(rt) < 0 && v.push("on " + rt), p && v.push((/^on /.test(v[v.length - 1]) ? "" : "on ") + p), l && (f = / ([\d.+]+)$/.exec(l), pt = f && l.charAt(l.length - f[0].length - 1) == "/", l = {
            architecture: 32,
            family: f && !pt ? l.replace(f[0], "") : l,
            version: f ? f[1] : null,
            toString: function() {
                var n = this.version;
                return this.family + (n && !pt ? " " + n : "") + (this.architecture == 64 ? " 64-bit" : "")
            }
        }), (f = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(ct)) && !/\bi686\b/i.test(ct) ? (l && (l.architecture = 64, l.family = l.family.replace(RegExp(" *" + f), "")), c && (/\bWOW64\b/i.test(n) || et && /\w(?:86|32)$/.test(ot.cpuClass || ot.platform) && !/\bWin64; x64\b/i.test(n)) && v.unshift("32-bit")) : l && /^OS X/.test(l.family) && c == "Chrome" && parseFloat(a) >= 39 && (l.architecture = 64), n || (n = null), tt = {}, tt.description = n, tt.layout = k && k[0], tt.manufacturer = rt, tt.name = c, tt.prerelease = lt, tt.product = p, tt.ua = n, tt.version = c && a, tt.os = l || {
            architecture: null,
            family: null,
            version: null,
            toString: function() {
                return "null"
            }
        }, tt.parse = h, tt.toString = hi, tt.version && v.unshift(a), tt.name && v.unshift(c), !l || !c || l == String(l).split(" ")[0] && (l == c.split(" ")[0] || p) || v.push(p ? "(" + l + ")" : "on " + l), v.length && (tt.description = v.join(" ")), tt
    }
    var c = {
            "function": !0,
            object: !0
        },
        u = c[typeof window] && window || this,
        b = u,
        l = c[typeof exports] && exports,
        a = c[typeof module] && module && !module.nodeType && module,
        n = l && a && typeof global == "object" && global,
        f;
    n && (n.global === n || n.window === n || n.self === n) && (u = n);
    var k = Math.pow(2, 53) - 1,
        e = /\bOpera/,
        d = this,
        v = Object.prototype,
        g = v.hasOwnProperty,
        y = v.toString;
    f = h();
    typeof define == "function" && typeof define.amd == "object" && define.amd ? (u.platform = f, define(function() {
        return f
    })) : l && a ? s(f, function(n, t) {
        l[t] = n
    }) : u.platform = f
}).call(this);
$(document).ready(function() {
    platform && platform.product === "iPhone" && platform.name.toLowerCase() === "safari" && isIOSLessThen13() && !iosInIframe() && (buildIOSFullscreenPanel(), buildIOSMeta())
});
jQuery(window).resize(function() {
    platform && platform.product === "iPhone" && platform.name.toLowerCase() === "safari" && isIOSLessThen13() && !iosInIframe() && iosResize()
});
var s_iScaleFactor = 1,
    s_bIsIphone = !1,
    s_iOffsetX, s_iOffsetY, s_bFocus = !0;
if (function(n) {
        (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(n) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(n.substr(0, 4))
    }(navigator.userAgent || navigator.vendor || window.opera), $(window).resize(function() {
        sizeHandler()
    }), window.addEventListener("orientationchange", onOrientationChange), NoClickDelay.prototype = {
        handleEvent: function(n) {
            switch (n.type) {
                case "touchstart":
                    this.onTouchStart(n);
                    break;
                case "touchmove":
                    this.onTouchMove(n);
                    break;
                case "touchend":
                    this.onTouchEnd(n)
            }
        },
        onTouchStart: function(n) {
            n.preventDefault();
            this.moved = !1;
            this.element.addEventListener("touchmove", this, !1);
            this.element.addEventListener("touchend", this, !1)
        },
        onTouchMove: function() {
            this.moved = !0
        },
        onTouchEnd: function(n) {
            var t, i;
            this.element.removeEventListener("touchmove", this, !1);
            this.element.removeEventListener("touchend", this, !1);
            this.moved || (t = document.elementFromPoint(n.changedTouches[0].clientX, n.changedTouches[0].clientY), t.nodeType == 3 && (t = t.parentNode), i = document.createEvent("MouseEvents"), i.initEvent("click", !0, !0), t.dispatchEvent(i))
        }
    }, function() {
        function n(n) {
            var i = "visible",
                r = "hidden",
                u = {
                    focus: i,
                    focusin: i,
                    pageshow: i,
                    blur: r,
                    focusout: r,
                    pagehide: r
                };
            n = n || window.event;
            n.type in u ? document.body.className = u[n.type] : (document.body.className = this[t] ? "hidden" : "visible", document.body.className === "hidden" ? (s_oMain.stopUpdate(), s_bFocus = !1) : (s_oMain.startUpdate(), s_bFocus = !0))
        }
        var t = "hidden";
        t in document ? document.addEventListener("visibilitychange", n) : (t = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", n) : (t = "webkitHidden") in document ? document.addEventListener("webkitvisibilitychange", n) : (t = "msHidden") in document ? document.addEventListener("msvisibilitychange", n) : "onfocusin" in document ? document.onfocusin = document.onfocusout = n : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = n
    }(), screenfull.isEnabled) screenfull.on("change", function() {
    s_bFullscreen = screenfull.isFullscreen;
    s_oInterface !== null && s_oInterface.resetFullscreenBut();
    s_oMenu !== null && s_oMenu.resetFullscreenBut();
    s_oModeMenu !== null && s_oModeMenu.resetFullscreenBut()
});
var CANVAS_WIDTH = 1600,
    CANVAS_HEIGHT = 768,
    EDGEBOARD_X = 250,
    EDGEBOARD_Y = 75,
    FPS = 60,
    FPS_TIME = 1e3 / FPS,
    DISABLE_SOUND_MOBILE = !1,
    GAME_NAME = "spider_solitaire",
    PRIMARY_FONT = "arialbold",
    SOUNDTRACK_VOLUME_IN_GAME = 1,
    DEBUG_MODE = !1,
    STATE_LOADING = 0,
    STATE_MENU = 1,
    STATE_HELP = 1,
    STATE_GAME = 3,
    ON_BUT_YES_DOWN = 0,
    STATE_GAME_WAITING_FOR_BET = 0,
    STATE_GAME_DEAL = 1,
    STATE_GAME_CHOOSE_HOLD = 2,
    STATE_GAME_DRAW = 3,
    STATE_GAME_EVALUATE = 4,
    ON_CARD_SHOWN = "ON_CARD_SHOWN",
    ON_CARD_HIDE = "ON_CARD_HIDE",
    ON_MOUSE_DOWN = 0,
    ON_MOUSE_UP = 1,
    ON_MOUSE_OVER = 2,
    ON_MOUSE_OUT = 3,
    ON_DRAG_START = 4,
    ON_DRAG_END = 5,
    MODE_EASY = 0,
    MODE_NORMAL = 1,
    MODE_HARD = 2,
    SUIT_HEARTS = 0,
    SUIT_SPADES = 1,
    SUIT_DIAMONDS = 2,
    SUIT_CLUBS = 3,
    LABEL_EMPTY = 0,
    LABEL_HIDDEN = 1,
    LABEL_SHOWN = 2,
    CARD_WIDTH = 70,
    CARD_HEIGHT = 112,
    CARD_CONTAINER_Y = 220,
    REAL_CARD_CONTAINER_Y = CARD_CONTAINER_Y - CARD_HEIGHT / 2,
    POINTS_TO_LOSE, POINTS_TO_WIN, ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION;
var s_bMobile, s_iMode, s_bAudioActive = !1,
    s_bFullscreen = !1,
    s_iCntTime = 0,
    s_iTimeElaps = 0,
    s_iPrevTime = 0,
    s_iCntFps = 0,
    s_iCurFps = 0,
    s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary, s_oSoundTrack = null,
    s_oCanvas, s_aSounds, s_aSoundsInfo;
s_oMenu = null;
s_oModeMenu = null;
s_oInterface = null;
CTLText.prototype = {
    constructor: CTLText,
    __autofit: function() {
        if (this._bFitText) {
            for (var n = this._iFontSize; this._oText.getBounds().height > this._iHeight - this._iPaddingV * 2 || this._oText.getBounds().width > this._iWidth - this._iPaddingH * 2;)
                if (n--, this._oText.font = n + "px " + this._szFont, this._oText.lineHeight = Math.round(n * this._fLineHeightFactor), this.__updateY(), this.__verticalAlign(), n < 8) break;
            this._iFontSize = n
        }
    },
    __verticalAlign: function() {
        if (this._bVerticalAlign) {
            var n = this._oText.getBounds().height;
            this._oText.y -= (n - this._iHeight) / 2 + this._iPaddingV
        }
    },
    __updateY: function() {
        this._oText.y = this._y + this._iPaddingV;
        switch (this._oText.textBaseline) {
            case "middle":
                this._oText.y += this._oText.lineHeight / 2 + (this._iFontSize * this._fLineHeightFactor - this._iFontSize)
        }
    },
    __createText: function(n) {
        this._bDebug && (this._oDebugShape = new createjs.Shape, this._oDebugShape.graphics.beginFill("rgba(255,0,0,0.5)").drawRect(this._x, this._y, this._iWidth, this._iHeight), this._oContainer.addChild(this._oDebugShape));
        this._oText = new createjs.Text(n, this._iFontSize + "px " + this._szFont, this._szColor);
        this._oText.textBaseline = "middle";
        this._oText.lineHeight = Math.round(this._iFontSize * this._fLineHeightFactor);
        this._oText.textAlign = this._szAlign;
        this._oText.lineWidth = this._bMultiline ? this._iWidth - this._iPaddingH * 2 : null;
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
        this.refreshText(n)
    },
    setVerticalAlign: function(n) {
        this._bVerticalAlign = n
    },
    setOutline: function(n) {
        this._oText !== null && (this._oText.outline = n)
    },
    setShadow: function(n, t, i, r) {
        this._oText !== null && (this._oText.shadow = new createjs.Shadow(n, t, i, r))
    },
    setColor: function(n) {
        this._oText.color = n
    },
    setAlpha: function(n) {
        this._oText.alpha = n
    },
    setY: function(n) {
        this._oText.y = n;
        this._y = n
    },
    removeTweens: function() {
        createjs.Tween.removeTweens(this._oText)
    },
    getText: function() {
        return this._oText
    },
    getY: function() {
        return this._y
    },
    getFontSize: function() {
        return this._iFontSize
    },
    refreshText: function(n) {
        n === "" && (n = " ");
        this._oText === null && this.__createText(n);
        this._oText.text = n;
        this._oText.font = this._iFontSize + "px " + this._szFont;
        this._oText.lineHeight = Math.round(this._iFontSize * this._fLineHeightFactor);
        this.__autofit();
        this.__updateY();
        this.__verticalAlign()
    }
};
! function() {
    "use strict";

    function t(n) {
        return u(f(n), arguments)
    }

    function i(n, i) {
        return t.apply(null, [n].concat(i || []))
    }

    function u(i, r) {
        for (var y = 1, p = i.length, u, h = "", o, f, c, l, a, v, s, e = 0; e < p; e++)
            if (typeof i[e] == "string") h += i[e];
            else if (typeof i[e] == "object") {
            if (f = i[e], f.keys)
                for (u = r[y], o = 0; o < f.keys.length; o++) {
                    if (u == undefined) throw new Error(t('[sprintf] Cannot access property "%s" of undefined value "%s"', f.keys[o], f.keys[o - 1]));
                    u = u[f.keys[o]]
                } else u = f.param_no ? r[f.param_no] : r[y++];
            if (n.not_type.test(f.type) && n.not_primitive.test(f.type) && u instanceof Function && (u = u()), n.numeric_arg.test(f.type) && typeof u != "number" && isNaN(u)) throw new TypeError(t("[sprintf] expecting number but found %T", u));
            n.number.test(f.type) && (v = u >= 0);
            switch (f.type) {
                case "b":
                    u = parseInt(u, 10).toString(2);
                    break;
                case "c":
                    u = String.fromCharCode(parseInt(u, 10));
                    break;
                case "d":
                case "i":
                    u = parseInt(u, 10);
                    break;
                case "j":
                    u = JSON.stringify(u, null, f.width ? parseInt(f.width) : 0);
                    break;
                case "e":
                    u = f.precision ? parseFloat(u).toExponential(f.precision) : parseFloat(u).toExponential();
                    break;
                case "f":
                    u = f.precision ? parseFloat(u).toFixed(f.precision) : parseFloat(u);
                    break;
                case "g":
                    u = f.precision ? String(Number(u.toPrecision(f.precision))) : parseFloat(u);
                    break;
                case "o":
                    u = (parseInt(u, 10) >>> 0).toString(8);
                    break;
                case "s":
                    u = String(u);
                    u = f.precision ? u.substring(0, f.precision) : u;
                    break;
                case "t":
                    u = String(!!u);
                    u = f.precision ? u.substring(0, f.precision) : u;
                    break;
                case "T":
                    u = Object.prototype.toString.call(u).slice(8, -1).toLowerCase();
                    u = f.precision ? u.substring(0, f.precision) : u;
                    break;
                case "u":
                    u = parseInt(u, 10) >>> 0;
                    break;
                case "v":
                    u = u.valueOf();
                    u = f.precision ? u.substring(0, f.precision) : u;
                    break;
                case "x":
                    u = (parseInt(u, 10) >>> 0).toString(16);
                    break;
                case "X":
                    u = (parseInt(u, 10) >>> 0).toString(16).toUpperCase()
            }
            n.json.test(f.type) ? h += u : (n.number.test(f.type) && (!v || f.sign) ? (s = v ? "+" : "-", u = u.toString().replace(n.sign, "")) : s = "", l = f.pad_char ? f.pad_char === "0" ? "0" : f.pad_char.charAt(1) : " ", a = f.width - (s + u).length, c = f.width ? a > 0 ? l.repeat(a) : "" : "", h += f.align ? s + u + c : l === "0" ? s + c + u : c + s + u)
        }
        return h
    }

    function f(t) {
        if (r[t]) return r[t];
        for (var f = t, i, o = [], h = 0; f;) {
            if ((i = n.text.exec(f)) !== null) o.push(i[0]);
            else if ((i = n.modulo.exec(f)) !== null) o.push("%");
            else if ((i = n.placeholder.exec(f)) !== null) {
                if (i[2]) {
                    h |= 1;
                    var s = [],
                        e = i[2],
                        u = [];
                    if ((u = n.key.exec(e)) !== null)
                        for (s.push(u[1]);
                            (e = e.substring(u[0].length)) !== "";)
                            if ((u = n.key_access.exec(e)) !== null) s.push(u[1]);
                            else if ((u = n.index_access.exec(e)) !== null) s.push(u[1]);
                    else throw new SyntaxError("[sprintf] failed to parse named argument key");
                    else throw new SyntaxError("[sprintf] failed to parse named argument key");
                    i[2] = s
                } else h |= 2;
                if (h === 3) throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
                o.push({
                    placeholder: i[0],
                    param_no: i[1],
                    keys: i[2],
                    sign: i[3],
                    pad_char: i[4],
                    align: i[5],
                    width: i[6],
                    precision: i[7],
                    type: i[8]
                })
            } else throw new SyntaxError("[sprintf] unexpected placeholder");
            f = f.substring(i[0].length)
        }
        return r[t] = o
    }
    var n = {
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
        r = Object.create(null);
    typeof exports != "undefined" && (exports.sprintf = t, exports.vsprintf = i);
    typeof window != "undefined" && (window.sprintf = t, window.vsprintf = i, typeof define == "function" && define.amd && define(function() {
        return {
            sprintf: t,
            vsprintf: i
        }
    }))
}();
const getClosestTop = () => {
        let n = window,
            t = !1;
        try {
            while (n.parent.document !== n.document)
                if (n.parent.document) n = n.parent;
                else {
                    t = !0;
                    break
                }
        } catch (i) {
            t = !0
        }
        return {
            topFrame: n,
            err: t
        }
    },
    getBestPageUrl = ({
        err: n,
        topFrame: t
    }) => {
        let i = "";
        if (n) try {
            try {
                i = window.top.location.href
            } catch (r) {
                let n = window.location.ancestorOrigins;
                i = n[n.length - 1]
            }
        } catch (r) {
            i = t.document.referrer
        } else i = t.location.href;
        return i
    },
    TOPFRAMEOBJ = getClosestTop(),
    PAGE_URL = getBestPageUrl(TOPFRAMEOBJ)