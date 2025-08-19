var noaGame = noaGame || {};
noaGame.sdkReady = false;
noaGame.onStartAd = function() {};
noaGame.onEndAd = function() {};
noaGame.showAd = function() {};

window["GD_OPTIONS"] = {
    "gameId": "93e376ed5f7e4290a146cb89e892bdc1",
    "onEvent": function(event) {
        switch (event.name) {
            case "SDK_READY":
                noaGame.sdkReady = true;
                break;
            case "SDK_GAME_START":
                // advertisement done, resume game logic and unmute audio
                console.log("V1-End AD");
                noaGame.onEndAd();
                break;
            case "SDK_GAME_PAUSE":
                // pause game logic / mute audio
                console.log("V1-Start AD");
                noaGame.onStartAd();
                break;
            case "SDK_GDPR_TRACKING":
                // this event is triggered when your user doesn't want to be tracked
                break;
            case "SDK_GDPR_TARGETING":
                // this event is triggered when your user doesn't want personalised targeting of ads and such
                break;
        }
    },
};
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = '';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', ''));