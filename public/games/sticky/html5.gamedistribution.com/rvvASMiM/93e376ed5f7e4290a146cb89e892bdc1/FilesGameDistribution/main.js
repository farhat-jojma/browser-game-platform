var noaGame = noaGame || {};

window._unlockingAllLevels = false;
window._allLevelsUnlocked = false;

function unlockAllLevels() {
    window._unlockingAllLevels = true;
}

window.addEventListener("load", function() {
    var Engine = document.getElementById("gameFrame").contentWindow.Engine;
    var Game = document.getElementById("gameFrame").contentWindow.Game;

    Game.HAS_LINKS = false;
    Game.HAS_LINKS_NOADEV = false;
    Game.TOUCH_FIRST = true;



    var testMode = false;
    var adTime = 3.1 * 1000 * 60;

    var adRequestCount = 0;
    var adRequestValue = 7;
    var adRequestValueB = 7;

    var adNormalCounter = 1;
    var adLoseCounter = 2;
    var adEventCounter = 3;

    var canTriggerOnWin = true;
    var canTriggerOnReset = true;
    var canTriggerOnLose = true;
    var canTriggerOnEvent = true;
    var canTriggerOnSpeedrun = false;

    var adTimerStarted = false;
    var adDateOld = null;

    var pauseFirst = false;

    var maicou = 0;

    var checkAdTrigger = function(value, canTrigger) {
        adRequestCount += value;
        //console.log(canTrigger + " " + adRequestCount + " " + (((Date.now() - adDateOld) / 1000 / 60) + ""));
        if (
            canTrigger
            //&& ((Date.now() - adDateOld > adTime) || testMode)
        ) {
            //if(adRequestCount >= adRequestValue || testMode){
            adRequestValue = adRequestValueB;
            noaGame.showAd();
            //}
        }
    }

    noaGame.paused = false;

    noaGame.onStartAd = function() {
        if (pauseFirst) Engine.System.pause();
        noaGame.paused = true;
        Game.mute();
    };

    noaGame.onEndAd = function() {
        if (pauseFirst) Engine.System.resume();
        if (!pauseFirst) {
            pauseFirst = true;
            inimai();
        }
        noaGame.paused = false;
        Game.unmute();
        adRequestCount = 0;
        adDateOld = Date.now();
        document.getElementById("gameFrame").contentWindow.focus();
    };

    noaGame.showAd = function() {
        if (typeof gdsdk !== 'undefined' && gdsdk.showAd !== 'undefined') {
            gdsdk.showAd();
        } else {
            //adRequestCount = 0;
            //adDateOld = Date.now();
        }
    };
    //console.log(gdsdk);

    Game.addAction("presstocontinue", function() {
        noaGame.showAd();
    });

    Game.addAction("start", function() {
        //requestAd();
    });

    var fun = null;

    function inimai() {
        if (!pauseFirst) {
            var unl = +(Engine.Data.load("unlspe"));
            unl = isNaN(unl) ? 0 : unl;
            if (unl == 0) {
                var but = Game.maimen.spebut;
                but.control.enabled = false;
                but.text.str = "UNLOCK-AD";
            }
        } else {
            var unl = +(Engine.Data.load("unlspe"));
            unl = isNaN(unl) ? 0 : unl;
            if (unl == 0 && gdsdk !== 'undefined' && gdsdk.preloadAd !== 'undefined') {
                var but = Game.maimen.spebut;
                but.control.enabled = false;
                gdsdk.preloadAd('rewarded').then(response => {
                    but.text.str = "UNLOCK-AD";
                    but.control.enabled = true;
                    fun = fun == null ? Game.maimen.spebut.control.onPressedDelegate : fun;
                    but.control.onPressedDelegate = function() {
                        gdsdk.showAd('rewarded').then(response => {
                            // Ad process done. You can track "SDK_REWARDED_WATCH_COMPLETE" event if that event triggered, that means the user watched the advertisement completely, you can give reward there.
                            but.text.str = "SPEEDRUN";
                            but.control.onPressedDelegate = fun;
                            Engine.Data.save("unlspe", 1, 60);
                        }).catch(error => {
                            // An error catched. Please don't give reward here.
                        });
                    };
                }).catch(error => {
                    // Any Rewarded ad is not available to user.
                });
            }
        }
    }

    // Game.addAction("mainmenu", inimai);

    Game.addAction("playlevelbutton", function() {
        if (!adTimerStarted) {
            adDateOld = Date.now();
            adTimerStarted = true;
        }
    });

    Game.addAction("winlevel", function() {
        checkAdTrigger(adNormalCounter, canTriggerOnWin && (!Game.Level.speedrun || canTriggerOnSpeedrun));
    });

    Game.addAction("winlastlevel", function() {
        checkAdTrigger(adEventCounter, canTriggerOnEvent);
    });

    Game.addAction("loselevel", function() {
        checkAdTrigger(adLoseCounter, canTriggerOnLose && (!Game.Level.speedrun || canTriggerOnSpeedrun));
    });

    Game.addAction("resetlevel", function() {
        checkAdTrigger(adNormalCounter, canTriggerOnReset && (!Game.Level.speedrun || canTriggerOnSpeedrun));
    });

    Game.addAction("exitlevel", function() {
        checkAdTrigger(adEventCounter, canTriggerOnEvent);
    });

    Game.addAction("exitlastlevel", function() {
        checkAdTrigger(adEventCounter, canTriggerOnEvent);
    });

    Engine.System.run();
});