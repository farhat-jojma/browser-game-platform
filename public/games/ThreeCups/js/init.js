var a0_0x5b914d = a0_0x16e0;
(function(_0x10ced1, _0x18981a) {
    var _0x30749d = a0_0x16e0,
        _0x57df3d = _0x10ced1();
    while (!![]) {
        try {
            var _0x56d4ff = -parseInt(_0x30749d(0x1c1)) / 0x1 * (parseInt(_0x30749d(0x179)) / 0x2) + -parseInt(_0x30749d(0x17f)) / 0x3 * (parseInt(_0x30749d(0x226)) / 0x4) + -parseInt(_0x30749d(0x187)) / 0x5 * (parseInt(_0x30749d(0x153)) / 0x6) + -parseInt(_0x30749d(0x12c)) / 0x7 * (parseInt(_0x30749d(0x151)) / 0x8) + -parseInt(_0x30749d(0x12a)) / 0x9 + parseInt(_0x30749d(0x15a)) / 0xa + parseInt(_0x30749d(0x1fc)) / 0xb;
            if (_0x56d4ff === _0x18981a) break;
            else _0x57df3d['push'](_0x57df3d['shift']());
        } catch (_0x1e6e31) {
            _0x57df3d['push'](_0x57df3d['shift']());
        }
    }
}(a0_0x3a54, 0x4d5cd));
var stage, canvasW = 0x0,
    canvasH = 0x0;

function initGameCanvas(_0x11db95, _0x11c8fd) {
    var _0x1fcfa1 = a0_0x16e0;
    canvasW = _0x11db95, canvasH = _0x11c8fd, stage = new createjs['Stage'](_0x1fcfa1(0x14e), {
        'antialias': !![]
    }), createjs[_0x1fcfa1(0x143)][_0x1fcfa1(0x13e)](stage), stage[_0x1fcfa1(0x137)](0x14), stage[_0x1fcfa1(0x18d)] = !![], createjs[_0x1fcfa1(0x1f7)]['framerate'] = 0x3c, createjs[_0x1fcfa1(0x1f7)][_0x1fcfa1(0x1b6)](_0x1fcfa1(0x1c9), tick);
}

function a0_0x16e0(_0x51b5c0, _0x506c79) {
    var _0x3a5437 = a0_0x3a54();
    return a0_0x16e0 = function(_0x16e0e3, _0x35ebf9) {
        _0x16e0e3 = _0x16e0e3 - 0x120;
        var _0x41e153 = _0x3a5437[_0x16e0e3];
        return _0x41e153;
    }, a0_0x16e0(_0x51b5c0, _0x506c79);
}
var safeZoneGuide = ![],
    canvasContainer, mainContainer, gameContainer, resultContainer, exitContainer, optionsContainer, shareContainer, shareSaveContainer, socialContainer, guideline, bg, bgP, logo, logoP, itemExit, itemExitP, popTitleTxt, popDescTxt, buttonConfirm, buttonCancel, itemResult, itemResultP, buttonContinue, resultTitleTxt, resultDescTxt, buttonShare, buttonSave, resultTitleOutlineTxt, resultDescOutlineTxt, resultShareTxt, resultShareOutlineTxt, popTitleOutlineTxt, popDescOutlineTxt, buttonSettings, buttonFullscreen, buttonSoundOn, buttonSoundOff, buttonMusicOn, buttonMusicOff, buttonExit;
$['share'] = {};
var cupContainer, shadowContainer, background, buttonStart, ball, stageTxt, instructionTxt, stageResultTxt, shareResultTxt, buttonReplay, confirmMessageTxt;
$[a0_0x5b914d(0x18a)] = {};

function buildGameCanvas() {
    var _0x7b193b = a0_0x5b914d;
    canvasContainer = new createjs[(_0x7b193b(0x1b5))](), mainContainer = new createjs['Container'](), gameContainer = new createjs[(_0x7b193b(0x1b5))](), exitContainer = new createjs[(_0x7b193b(0x1b5))](), resultContainer = new createjs[(_0x7b193b(0x1b5))](), shareContainer = new createjs[(_0x7b193b(0x1b5))](), shareSaveContainer = new createjs[(_0x7b193b(0x1b5))](), socialContainer = new createjs['Container'](), cupContainer = new createjs[(_0x7b193b(0x1b5))](), shadowContainer = new createjs[(_0x7b193b(0x1b5))](), background = new createjs['Bitmap'](loader[_0x7b193b(0x16c)](_0x7b193b(0x1d0))), logo = new createjs[(_0x7b193b(0x1e4))](loader[_0x7b193b(0x16c)]('logo')), buttonStart = new createjs[(_0x7b193b(0x155))](), buttonStart[_0x7b193b(0x20a)] = '50px\x20geosanslightregular', buttonStart[_0x7b193b(0x207)] = _0x7b193b(0x202), buttonStart[_0x7b193b(0x1a7)] = startButtonText, buttonStart['textAlign'] = _0x7b193b(0x224), buttonStart[_0x7b193b(0x1a4)] = 'alphabetic', buttonStart['x'] = canvasW / 0x2, buttonStart['y'] = canvasH / 0x64 * 0x5c, buttonStart[_0x7b193b(0x225)] = new createjs['Shape'](new createjs[(_0x7b193b(0x13d))]()[_0x7b193b(0x1d6)](_0x7b193b(0x15c))[_0x7b193b(0x1da)](-0xc8, -0x1e, 0x190, 0x28));
    for (var _0x1c8b5f = 0x0; _0x1c8b5f < cup_arr[_0x7b193b(0x21a)]; _0x1c8b5f++) {
        $[_0x7b193b(0x18a)][_0x1c8b5f] = new createjs[(_0x7b193b(0x1e4))](loader[_0x7b193b(0x16c)](_0x7b193b(0x180))), centerReg($['cups'][_0x1c8b5f]), $[_0x7b193b(0x18a)][_0x1c8b5f][_0x7b193b(0x1c8)] = 0x127, $[_0x7b193b(0x18a)][_0x1c8b5f]['x'] = cup_arr[_0x1c8b5f]['x'], $[_0x7b193b(0x18a)][_0x1c8b5f]['y'] = cup_arr[_0x1c8b5f]['y'], cupContainer['addChild']($['cups'][_0x1c8b5f]), $[_0x7b193b(0x18a)]['s' + _0x1c8b5f] = new createjs[(_0x7b193b(0x1e4))](loader[_0x7b193b(0x16c)]('shadow')), centerReg($[_0x7b193b(0x18a)]['s' + _0x1c8b5f]), $['cups']['s' + _0x1c8b5f]['x'] = cup_arr[_0x1c8b5f]['x'], $['cups']['s' + _0x1c8b5f]['y'] = cup_arr[_0x1c8b5f]['y'], shadowContainer[_0x7b193b(0x1c3)]($['cups']['s' + _0x1c8b5f]), gameData[_0x7b193b(0x164)][_0x7b193b(0x196)](_0x1c8b5f);
    }
    updateCups(), ball = new createjs[(_0x7b193b(0x1e4))](loader[_0x7b193b(0x16c)](_0x7b193b(0x141))), centerReg(ball), ball[_0x7b193b(0x1c8)] = 0x60, stageTxt = new createjs[(_0x7b193b(0x155))](), stageTxt['font'] = _0x7b193b(0x1dc), stageTxt[_0x7b193b(0x207)] = _0x7b193b(0x202), stageTxt[_0x7b193b(0x1a7)] = stageText, stageTxt[_0x7b193b(0x140)] = _0x7b193b(0x224), stageTxt[_0x7b193b(0x1a4)] = _0x7b193b(0x1a2), stageTxt['x'] = canvasW / 0x2, stageTxt['y'] = canvasH / 0x64 * 0xf, instructionTxt = new createjs[(_0x7b193b(0x155))](), instructionTxt[_0x7b193b(0x20a)] = _0x7b193b(0x19e), instructionTxt['color'] = _0x7b193b(0x202), instructionTxt[_0x7b193b(0x1a7)] = instructionText, instructionTxt[_0x7b193b(0x140)] = _0x7b193b(0x224), instructionTxt[_0x7b193b(0x1a4)] = _0x7b193b(0x1a2), instructionTxt['x'] = canvasW / 0x2, instructionTxt['y'] = canvasH / 0x64 * 0x17, instructionTxt[_0x7b193b(0x1e7)] = 0x0, stageResultTxt = new createjs[(_0x7b193b(0x155))](), stageResultTxt[_0x7b193b(0x20a)] = '80px\x20geosanslightregular', stageResultTxt[_0x7b193b(0x207)] = _0x7b193b(0x202), stageResultTxt[_0x7b193b(0x1a7)] = stageText, stageResultTxt[_0x7b193b(0x140)] = _0x7b193b(0x224), stageResultTxt[_0x7b193b(0x1a4)] = _0x7b193b(0x1a2), stageResultTxt['x'] = canvasW / 0x2, stageResultTxt['y'] = canvasH / 0x64 * 0xf, shareResultTxt = new createjs[(_0x7b193b(0x155))](), shareResultTxt[_0x7b193b(0x20a)] = _0x7b193b(0x1fd), shareResultTxt[_0x7b193b(0x207)] = '#ffffff', shareResultTxt[_0x7b193b(0x1a7)] = shareText, shareResultTxt[_0x7b193b(0x140)] = _0x7b193b(0x224), shareResultTxt[_0x7b193b(0x1a4)] = _0x7b193b(0x1a2), buttonReplay = new createjs[(_0x7b193b(0x155))](), buttonReplay[_0x7b193b(0x20a)] = '50px\x20geosanslightregular', buttonReplay[_0x7b193b(0x207)] = _0x7b193b(0x202), buttonReplay[_0x7b193b(0x1a7)] = replayButtonText, buttonReplay[_0x7b193b(0x140)] = _0x7b193b(0x224), buttonReplay[_0x7b193b(0x1a4)] = _0x7b193b(0x1a2), buttonReplay['x'] = canvasW / 0x2, buttonReplay['y'] = canvasH / 0x64 * 0x5c, buttonReplay['hitArea'] = new createjs['Shape'](new createjs['Graphics']()[_0x7b193b(0x1d6)](_0x7b193b(0x15c))[_0x7b193b(0x1da)](-0xc8, -0x1e, 0x190, 0x28)), shareContainer['x'] = shareSaveContainer['x'] = canvasW / 0x2, shareContainer['y'] = shareSaveContainer['y'] = canvasH / 0x64 * 0x15, socialContainer[_0x7b193b(0x1d5)] = ![], socialContainer[_0x7b193b(0x15d)] = 0x1, shareContainer[_0x7b193b(0x1c3)](shareResultTxt, socialContainer);
    if (shareSettings[_0x7b193b(0x13e)]) {
        buttonShare = new createjs[(_0x7b193b(0x1e4))](loader[_0x7b193b(0x16c)](_0x7b193b(0x161))), centerReg(buttonShare);
        var _0x562ca5 = {
            'x': 0x0,
            'y': 0x2d,
            'spaceX': 0x41
        };
        _0x562ca5['x'] = -((shareSettings[_0x7b193b(0x1fb)]['length'] - 0x1) * _0x562ca5[_0x7b193b(0x138)] / 0x2);
        for (let _0x45dc4f = 0x0; _0x45dc4f < shareSettings[_0x7b193b(0x1fb)][_0x7b193b(0x21a)]; _0x45dc4f++) {
            var _0x41ff96 = shareSettings[_0x7b193b(0x1fb)][_0x45dc4f],
                _0x3ffd64 = String(_0x41ff96[0x0])[_0x7b193b(0x17b)]() + String(_0x41ff96)[_0x7b193b(0x1ec)](0x1);
            $[_0x7b193b(0x1ae)][_0x7b193b(0x1eb) + _0x45dc4f] = new createjs[(_0x7b193b(0x1e4))](loader[_0x7b193b(0x16c)](_0x7b193b(0x1eb) + _0x3ffd64)), $[_0x7b193b(0x1ae)][_0x7b193b(0x1eb) + _0x45dc4f][_0x7b193b(0x1a1)] = _0x41ff96, centerReg($[_0x7b193b(0x1ae)][_0x7b193b(0x1eb) + _0x45dc4f]), $[_0x7b193b(0x1ae)][_0x7b193b(0x1eb) + _0x45dc4f]['x'] = _0x562ca5['x'], $[_0x7b193b(0x1ae)][_0x7b193b(0x1eb) + _0x45dc4f]['y'] = _0x562ca5['y'], socialContainer[_0x7b193b(0x1c3)]($[_0x7b193b(0x1ae)]['button' + _0x45dc4f]), _0x562ca5['x'] += _0x562ca5[_0x7b193b(0x138)];
        }
        buttonShare['y'] = buttonShare[_0x7b193b(0x191)][_0x7b193b(0x1fa)] / 0x2 + 0xa, shareContainer[_0x7b193b(0x1c3)](buttonShare);
    }
    typeof toggleScoreboardSave == _0x7b193b(0x165) && (buttonSave = new createjs[(_0x7b193b(0x1e4))](loader[_0x7b193b(0x16c)]('buttonSave')), centerReg(buttonSave), buttonSave['y'] = buttonSave['image'][_0x7b193b(0x1fa)] / 0x2 + 0xa, shareSaveContainer[_0x7b193b(0x1c3)](buttonSave)), exitContainer = new createjs['Container'](), optionsContainer = new createjs['Container'](), buttonFullscreen = new createjs[(_0x7b193b(0x1e4))](loader[_0x7b193b(0x16c)]('buttonFullscreen')), centerReg(buttonFullscreen), buttonSoundOn = new createjs['Bitmap'](loader[_0x7b193b(0x16c)](_0x7b193b(0x18b))), centerReg(buttonSoundOn), buttonSoundOff = new createjs[(_0x7b193b(0x1e4))](loader[_0x7b193b(0x16c)]('buttonSoundOff')), centerReg(buttonSoundOff), buttonSoundOn[_0x7b193b(0x1d5)] = ![], buttonMusicOn = new createjs[(_0x7b193b(0x1e4))](loader[_0x7b193b(0x16c)](_0x7b193b(0x20b))), centerReg(buttonMusicOn), buttonMusicOff = new createjs[(_0x7b193b(0x1e4))](loader[_0x7b193b(0x16c)](_0x7b193b(0x15b))), centerReg(buttonMusicOff), buttonMusicOn[_0x7b193b(0x1d5)] = ![], buttonExit = new createjs[(_0x7b193b(0x1e4))](loader[_0x7b193b(0x16c)](_0x7b193b(0x13f))), centerReg(buttonExit), buttonSettings = new createjs[(_0x7b193b(0x1e4))](loader[_0x7b193b(0x16c)]('buttonSettings')), centerReg(buttonSettings), createHitarea(buttonFullscreen), createHitarea(buttonSoundOn), createHitarea(buttonSoundOff), createHitarea(buttonMusicOn), createHitarea(buttonMusicOff), createHitarea(buttonExit), createHitarea(buttonSettings), optionsContainer = new createjs[(_0x7b193b(0x1b5))](), optionsContainer[_0x7b193b(0x1c3)](buttonFullscreen, buttonSoundOn, buttonSoundOff, buttonMusicOn, buttonMusicOff, buttonExit), optionsContainer[_0x7b193b(0x1d5)] = ![], itemExit = new createjs[(_0x7b193b(0x1e4))](loader['getResult'](_0x7b193b(0x211))), centerReg(itemExit), itemExit['x'] = canvasW / 0x2, itemExit['y'] = canvasH / 0x2, buttonConfirm = new createjs[(_0x7b193b(0x1e4))](loader[_0x7b193b(0x16c)](_0x7b193b(0x158))), centerReg(buttonConfirm), createHitarea(buttonConfirm), buttonConfirm['x'] = canvasW / 0x64 * 0x23, buttonConfirm['y'] = canvasH / 0x64 * 0x3f, buttonCancel = new createjs[(_0x7b193b(0x1e4))](loader[_0x7b193b(0x16c)](_0x7b193b(0x1e2))), centerReg(buttonCancel), createHitarea(buttonCancel), buttonCancel['x'] = canvasW / 0x64 * 0x41, buttonCancel['y'] = canvasH / 0x64 * 0x3f, confirmMessageTxt = new createjs[(_0x7b193b(0x155))](), confirmMessageTxt[_0x7b193b(0x20a)] = '50px\x20geosanslightregular', confirmMessageTxt[_0x7b193b(0x183)] = 0x41, confirmMessageTxt['color'] = '#fff', confirmMessageTxt[_0x7b193b(0x140)] = _0x7b193b(0x224), confirmMessageTxt[_0x7b193b(0x1a4)] = _0x7b193b(0x1a2), confirmMessageTxt[_0x7b193b(0x1a7)] = exitMessage, confirmMessageTxt['x'] = canvasW / 0x2, confirmMessageTxt['y'] = canvasH / 0x64 * 0x2c, exitContainer[_0x7b193b(0x1c3)](itemExit, buttonConfirm, buttonCancel, confirmMessageTxt), exitContainer['visible'] = ![], guideline = new createjs['Shape'](), mainContainer['addChild'](logo, buttonStart), gameContainer[_0x7b193b(0x1c3)](stageTxt, instructionTxt), resultContainer[_0x7b193b(0x1c3)](stageResultTxt, buttonReplay, shareContainer, shareSaveContainer), canvasContainer[_0x7b193b(0x1c3)](background, shadowContainer, ball, cupContainer, mainContainer, gameContainer, resultContainer, exitContainer, optionsContainer, buttonSettings), stage['addChild'](canvasContainer), resizeCanvas();
}

function resizeCanvas() {
    var _0x16223f = a0_0x5b914d;
    const _0x32ad42 = stageW * scalePercent,
        _0x3052cb = stageH * scalePercent,
        _0x3b7c7d = document[_0x16223f(0x1d8)](_0x16223f(0x14e));
    _0x3b7c7d['style'][_0x16223f(0x1c0)] = _0x32ad42 + 'px', _0x3b7c7d[_0x16223f(0x1f1)][_0x16223f(0x1ef)] = _0x3052cb + 'px', _0x3b7c7d[_0x16223f(0x1f1)][_0x16223f(0x170)] = offset[_0x16223f(0x170)] / 0x2 + 'px', _0x3b7c7d[_0x16223f(0x1f1)]['top'] = offset[_0x16223f(0x1d1)] / 0x2 + 'px', _0x3b7c7d[_0x16223f(0x1c0)] = stageW * dpr, _0x3b7c7d[_0x16223f(0x1ef)] = stageH * dpr;
    if (canvasContainer != undefined) {
        stage['scaleX'] = stage[_0x16223f(0x129)] = dpr;
        safeZoneGuide && guideline[_0x16223f(0x1b7)][_0x16223f(0x184)]()['setStrokeStyle'](0x2)['beginStroke']('red')[_0x16223f(0x1da)]((stageW - contentW) / 0x2, (stageH - contentH) / 0x2, contentW, contentH);
        buttonSettings['x'] = canvasW - offset['x'] - 0x3c, buttonSettings['y'] = offset['y'] + 0x2d;
        var _0x322172 = 0x4b,
            _0x541e51 = 0x0;
        buttonSoundOn['x'] = buttonSoundOff['x'] = buttonSettings['x'], buttonSoundOn['y'] = buttonSoundOff['y'] = buttonSettings['y'] + _0x322172, buttonSoundOn['x'] = buttonSoundOff['x'], buttonSoundOn['y'] = buttonSoundOff['y'] = buttonSettings['y'] + _0x322172, typeof buttonMusicOn != 'undefined' ? (buttonMusicOn['x'] = buttonMusicOff['x'] = buttonSettings['x'], buttonMusicOn['y'] = buttonMusicOff['y'] = buttonSettings['y'] + _0x322172 * 0x2, buttonMusicOn['x'] = buttonMusicOff['x'], buttonMusicOn['y'] = buttonMusicOff['y'] = buttonSettings['y'] + _0x322172 * 0x2, _0x541e51 = 0x2) : _0x541e51 = 0x1, buttonFullscreen['x'] = buttonSettings['x'], buttonFullscreen['y'] = buttonSettings['y'] + _0x322172 * (_0x541e51 + 0x1), curPage == 'main' || curPage == _0x16223f(0x1ea) ? (buttonExit[_0x16223f(0x1d5)] = ![], buttonFullscreen['x'] = buttonSettings['x'], buttonFullscreen['y'] = buttonSettings['y'] + _0x322172 * (_0x541e51 + 0x1)) : (buttonExit[_0x16223f(0x1d5)] = !![], buttonExit['x'] = buttonSettings['x'], buttonExit['y'] = buttonSettings['y'] + _0x322172 * (_0x541e51 + 0x2));
    }
}

function centerContainer(_0x452147) {
    _0x452147['x'] = windowW / 0x2 - canvasW * scalePercent / 0x2, _0x452147['y'] = windowH / 0x2 - canvasH * scalePercent / 0x2;
}

function resizeCanvasItem() {
    centerContainer(canvasContainer);
}

function removeGameCanvas() {
    var _0xd9da36 = a0_0x5b914d;
    stage[_0xd9da36(0x208)] = !![], stage[_0xd9da36(0x1d7)](), stage[_0xd9da36(0x15f)](), createjs[_0xd9da36(0x1f7)][_0xd9da36(0x217)]('tick', tick), createjs['Ticker'][_0xd9da36(0x217)]('tick', stage);
}

function tick(_0x50dff8) {
    var _0x3be1a7 = a0_0x5b914d;
    updateGame(_0x50dff8), stage[_0x3be1a7(0x15f)](_0x50dff8);
}

function centerReg(_0x19cb1e) {
    var _0x5c12ff = a0_0x5b914d;
    _0x19cb1e[_0x5c12ff(0x1bf)] = _0x19cb1e[_0x5c12ff(0x191)][_0x5c12ff(0x147)] / 0x2, _0x19cb1e[_0x5c12ff(0x1c8)] = _0x19cb1e[_0x5c12ff(0x191)][_0x5c12ff(0x1fa)] / 0x2;
}

function createHitarea(_0x3cf80b) {
    var _0xafa662 = a0_0x5b914d;
    _0x3cf80b[_0xafa662(0x225)] = new createjs[(_0xafa662(0x135))](new createjs[(_0xafa662(0x13d))]()[_0xafa662(0x1d6)]('#000')['drawRect'](0x0, 0x0, _0x3cf80b[_0xafa662(0x191)][_0xafa662(0x147)], _0x3cf80b[_0xafa662(0x191)]['naturalHeight']));
}
const startButtonText = a0_0x5b914d(0x195),
    stageText = a0_0x5b914d(0x1e9),
    instructionText = a0_0x5b914d(0x152),
    cupMoveDistance = 0x82,
    openCupDistance = 0x96,
    cup_arr = [{
        'x': 0xd4,
        'y': 0x244
    }, {
        'x': 0x200,
        'y': 0x258
    }, {
        'x': 0x32c,
        'y': 0x244
    }],
    level_arr = {
        'cupSpeed': 0.8,
        'cupShuffleCount': 0xa,
        'level': 0x2,
        'cupSpeedDecrease': 0.05,
        'cupShuffleCountIncrease': 0x2
    },
    replayButtonText = 'TAP\x20TO\x20REPLAY',
    exitMessage = 'Are\x20you\x20sure\x20you\x20want\x0ato\x20quit\x20the\x20game?',
    shareText = 'SHARE\x20YOUR\x20SCORE',
    shareSettings = {
        'enable': !![],
        'options': [a0_0x5b914d(0x12b), a0_0x5b914d(0x16d), 'whatsapp', a0_0x5b914d(0x1df), a0_0x5b914d(0x19d), 'linkedin'],
        'shareTitle': 'Highscore\x20on\x20Magic\x20Cup\x20is\x20[SCORE]',
        'shareText': a0_0x5b914d(0x13a),
        'customScore': !![],
        'gtag': !![]
    },
    playerData = {
        'level': 0x0
    },
    gameData = {
        'cup': 0x0,
        'speed': 0x1,
        'array': [],
        'arrayNum': 0x0,
        'position': [],
        'shuffleCount': 0x0,
        'shuffleCountMax': 0x0,
        'win': ![],
        'level': 0x0
    };

function buildGameButton() {
    var _0x727419 = a0_0x5b914d;
    $(window)['focus'](function() {
        var _0x27061b = a0_0x16e0;
        !buttonSoundOn[_0x27061b(0x1d5)] && toggleSoundInMute(![]), typeof buttonMusicOn != _0x27061b(0x200) && (!buttonMusicOn[_0x27061b(0x1d5)] && toggleMusicInMute(![]));
    }), $(window)['blur'](function() {
        var _0x517035 = a0_0x16e0;
        !buttonSoundOn['visible'] && toggleSoundInMute(!![]), typeof buttonMusicOn != _0x517035(0x200) && (!buttonMusicOn[_0x517035(0x1d5)] && toggleMusicInMute(!![]));
    });
    audioOn && (muteSoundOn && toggleSoundMute(!![]), muteMusicOn && toggleMusicMute(!![]));
    buttonStart[_0x727419(0x128)] = _0x727419(0x1a5), buttonStart[_0x727419(0x1b6)](_0x727419(0x1e0), function(_0x225dc2) {
        var _0x180af6 = _0x727419;
        playSound(_0x180af6(0x168)), goPage(_0x180af6(0x1f9));
    }), buttonReplay['cursor'] = _0x727419(0x1a5), buttonReplay[_0x727419(0x1b6)]('click', function(_0x326a54) {
        var _0x500bc8 = _0x727419;
        playSound(_0x500bc8(0x168)), goPage('game');
    });
    if (shareSettings[_0x727419(0x13e)]) {
        buttonShare['cursor'] = 'pointer', buttonShare[_0x727419(0x1b6)]('click', function(_0x11b31f) {
            playSound('soundButton'), toggleSocialShare(!![]);
        });
        for (let _0x908c75 = 0x0; _0x908c75 < shareSettings['options']['length']; _0x908c75++) {
            $['share']['button' + _0x908c75][_0x727419(0x128)] = 'pointer', $['share'][_0x727419(0x1eb) + _0x908c75][_0x727419(0x1b6)]('click', function(_0x10a56a) {
                var _0x3faa83 = _0x727419;
                shareLinks(_0x10a56a['target'][_0x3faa83(0x1a1)], playerData[_0x3faa83(0x15e)]);
            });
        }
    };
    buttonConfirm[_0x727419(0x128)] = _0x727419(0x1a5), buttonConfirm[_0x727419(0x1b6)]('click', function(_0x42fe05) {
        var _0x207bdd = _0x727419;
        playSound('soundClick'), togglePop(![]), stopGame(!![]), goPage(_0x207bdd(0x12d));
    }), buttonCancel['cursor'] = 'pointer', buttonCancel['addEventListener']('click', function(_0x1e3065) {
        var _0x5367cc = _0x727419;
        playSound(_0x5367cc(0x168)), togglePop(![]);
    }), itemExit['addEventListener'](_0x727419(0x1e0), function(_0x2c1291) {}), buttonSoundOff[_0x727419(0x128)] = 'pointer', buttonSoundOff[_0x727419(0x1b6)]('click', function(_0x2b9ca5) {
        toggleSoundMute(!![]);
    }), buttonSoundOn[_0x727419(0x128)] = 'pointer', buttonSoundOn[_0x727419(0x1b6)](_0x727419(0x1e0), function(_0xd92367) {
        toggleSoundMute(![]);
    }), typeof buttonMusicOff != _0x727419(0x200) && (buttonMusicOff[_0x727419(0x128)] = 'pointer', buttonMusicOff['addEventListener']('click', function(_0x567a8f) {
        toggleMusicMute(!![]);
    })), typeof buttonMusicOn != _0x727419(0x200) && (buttonMusicOn[_0x727419(0x128)] = _0x727419(0x1a5), buttonMusicOn[_0x727419(0x1b6)](_0x727419(0x1e0), function(_0xcc086a) {
        toggleMusicMute(![]);
    })), buttonFullscreen[_0x727419(0x128)] = 'pointer', buttonFullscreen[_0x727419(0x1b6)]('click', function(_0x23c559) {
        toggleFullScreen();
    }), buttonSettings[_0x727419(0x128)] = _0x727419(0x1a5), buttonSettings[_0x727419(0x1b6)](_0x727419(0x1e0), function(_0x124641) {
        toggleOptions();
    }), buttonExit[_0x727419(0x128)] = _0x727419(0x1a5), buttonExit[_0x727419(0x1b6)](_0x727419(0x1e0), function(_0x3fe026) {
        togglePop(!![]), toggleOptions();
    });
}

function toggleSocialShare(_0x4e4420) {
    var _0x1839e0 = a0_0x5b914d;
    if (!shareSettings[_0x1839e0(0x13e)]) return;
    buttonShare[_0x1839e0(0x1d5)] = _0x4e4420 == !![] ? ![] : !![], shareSaveContainer[_0x1839e0(0x1d5)] = _0x4e4420 == !![] ? ![] : !![], socialContainer[_0x1839e0(0x1d5)] = _0x4e4420, _0x4e4420 && (typeof buttonSave !== _0x1839e0(0x200) && TweenMax['to'](buttonShare, 0x3, {
        'overwrite': !![],
        'onComplete': toggleSocialShare,
        'onCompleteParams': [![]]
    }));
}

function positionShareButtons() {
    var _0x361bf7 = a0_0x5b914d;
    if (!shareSettings[_0x361bf7(0x13e)]) return;
    typeof buttonShare !== 'undefined' && (typeof buttonSave !== _0x361bf7(0x200) && (buttonSave[_0x361bf7(0x1d5)] ? (buttonShare['x'] = -(buttonShare[_0x361bf7(0x191)][_0x361bf7(0x147)] / 0x2 + 0x5), buttonSave['x'] = buttonShare[_0x361bf7(0x191)]['naturalWidth'] / 0x2 + 0x5) : buttonShare['x'] = 0x0));
}
var curPage = '';

function goPage(_0x3ec95a) {
    var _0x5d504f = a0_0x5b914d;
    curPage = _0x3ec95a, mainContainer[_0x5d504f(0x1d5)] = ![], gameContainer['visible'] = ![], resultContainer[_0x5d504f(0x1d5)] = ![], togglePop(![]), toggleOptions(![]), stopAnimateButton(buttonStart), stopAnimateButton(buttonReplay);
    var _0x296270 = '';
    switch (_0x3ec95a) {
        case _0x5d504f(0x12d):
            _0x296270 = mainContainer, startAnimateButton(buttonStart), startShuffle();
            break;
        case _0x5d504f(0x1f9):
            _0x296270 = gameContainer, startGame();
            break;
        case _0x5d504f(0x1ea):
            _0x296270 = resultContainer, toggleSocialShare(![]), startAnimateButton(buttonReplay), stopGame(), saveGame(playerData[_0x5d504f(0x15e)]);
            break;
    }
    _0x296270[_0x5d504f(0x1d5)] = !![], resizeCanvas();
}

function startAnimateButton(_0x3aff86) {
    var _0x24464f = a0_0x5b914d;
    _0x3aff86[_0x24464f(0x1e7)] = 0x0, $(_0x3aff86)[_0x24464f(0x149)]({
        'alpha': 0x1
    }, 0x1f4)['animate']({
        'alpha': 0x0
    }, 0x1f4, function() {
        startAnimateButton(_0x3aff86);
    });
}

function stopAnimateButton(_0x11ef9c) {
    var _0x3635f4 = a0_0x5b914d;
    _0x11ef9c[_0x3635f4(0x1e7)] = 0x0, $(_0x11ef9c)[_0x3635f4(0x1cb)]()['stop'](!![], !![]);
}

function startGame() {
    var _0x2e2060 = a0_0x5b914d;
    gameData[_0x2e2060(0x223)] = level_arr['cupShuffleCount'], gameData[_0x2e2060(0x133)] = level_arr[_0x2e2060(0x185)], gameData[_0x2e2060(0x15e)] = level_arr[_0x2e2060(0x15e)], playerData['level'] = 0x1, updateStage(), !shuffleAnimationCon ? showHiddenBall(!![]) : shuffleCallback = !![];
}

function stopGame() {
    var _0xa9fd23 = a0_0x5b914d;
    TweenMax['killAll']();
    for (var _0x4d3700 = 0x0; _0x4d3700 < cup_arr['length']; _0x4d3700++) {
        $['cups'][_0x4d3700]['x'] = cup_arr[_0x4d3700]['x'], $[_0xa9fd23(0x18a)][_0x4d3700]['y'] = cup_arr[_0x4d3700]['y'], $[_0xa9fd23(0x18a)]['s' + _0x4d3700]['x'] = cup_arr[_0x4d3700]['x'], $[_0xa9fd23(0x18a)]['s' + _0x4d3700]['y'] = cup_arr[_0x4d3700]['y'];
    }
}

function saveGame(_0xabb079) {
    var _0xd7708b = a0_0x5b914d;
    typeof toggleScoreboardSave == 'function' && ($[_0xd7708b(0x1b3)][_0xd7708b(0x171)] = _0xabb079, typeof type != 'undefined' && ($[_0xd7708b(0x1b3)][_0xd7708b(0x1ff)] = type), toggleScoreboardSave(!![]));
}

function showHiddenBall(_0xa1cc43) {
    var _0x426ab2 = a0_0x5b914d;
    gameData[_0x426ab2(0x134)] = ![], _0xa1cc43 ? (gameData[_0x426ab2(0x180)] = Math['floor'](Math[_0x426ab2(0x1db)]() * cup_arr['length']), ball['x'] = $[_0x426ab2(0x18a)][gameData[_0x426ab2(0x180)]]['x'], ball['y'] = $['cups'][gameData[_0x426ab2(0x180)]]['y'], ball[_0x426ab2(0x1d5)] = !![], animateOpenCup(gameData[_0x426ab2(0x180)], showHiddenBallComplete)) : showHiddenBallComplete();
}

function showHiddenBallComplete() {
    var _0x2e14f3 = a0_0x5b914d;
    playSound(_0x2e14f3(0x177)), ball['visible'] = ![], startShuffle();
}

function startShuffle() {
    var _0x4a742b = a0_0x5b914d;
    gameData[_0x4a742b(0x130)] = 0x0, shuffleArray(), shuffleCups();
}

function shuffleCups() {
    var _0x3db40a = a0_0x5b914d;
    shuffleAnimationCon = ![];
    if (shuffleCallback) {
        shuffleCallback = ![], showHiddenBall(!![]);
        return;
    }
    gameData[_0x3db40a(0x130)]++;
    if (gameData[_0x3db40a(0x130)] >= gameData[_0x3db40a(0x223)] && curPage == _0x3db40a(0x1f9)) {
        startAnimateButton(instructionTxt), toggleCupButtons(!![]);
        return;
    }
    animateCup($[_0x3db40a(0x18a)][gameData[_0x3db40a(0x164)][gameData[_0x3db40a(0x220)]]], $[_0x3db40a(0x18a)][gameData[_0x3db40a(0x164)][gameData[_0x3db40a(0x220)] + 0x1]]), gameData[_0x3db40a(0x220)] += 0x2, gameData[_0x3db40a(0x220)] == gameData[_0x3db40a(0x164)][_0x3db40a(0x21a)] && shuffleArray();
}

function shuffleArray() {
    var _0x1e0647 = a0_0x5b914d;
    gameData['arrayNum'] = 0x0, gameData[_0x1e0647(0x164)] = [];
    for (var _0x1c3d0a = 0x0; _0x1c3d0a < cup_arr[_0x1e0647(0x21a)]; _0x1c3d0a++) {
        gameData[_0x1e0647(0x164)]['push'](_0x1c3d0a);
    }
    shuffle(gameData[_0x1e0647(0x164)]), !isEven(gameData[_0x1e0647(0x164)][_0x1e0647(0x21a)]) && gameData[_0x1e0647(0x164)][_0x1e0647(0x196)](gameData[_0x1e0647(0x164)][0x0]);
}
var shuffleAnimationCon = ![],
    shuffleCallback = ![];

function animateCup(_0x4af01e, _0x50719c) {
    var _0x165d39 = a0_0x5b914d;
    shuffleAnimationCon = !![];
    var _0xfb4e96 = Math[_0x165d39(0x19a)](Math[_0x165d39(0x1db)]() * 0x4) + 0x1;
    playSound(_0x165d39(0x124) + _0xfb4e96);
    var _0x607e56 = 0x0,
        _0x1d103b = 0x0;
    _0x4af01e['x'] > _0x50719c['x'] ? (_0x607e56 = _0x4af01e['x'] + (_0x50719c['x'] - _0x4af01e['x']) / 0x2, _0x1d103b = _0x50719c['x'] + (_0x4af01e['x'] - _0x50719c['x']) / 0x2) : (_0x607e56 = _0x50719c['x'] + (_0x4af01e['x'] - _0x50719c['x']) / 0x2, _0x1d103b = _0x4af01e['x'] + (_0x50719c['x'] - _0x4af01e['x']) / 0x2);
    var _0x3d534d = [{
        'x': _0x4af01e['x'],
        'y': _0x4af01e['y']
    }, {
        'x': _0x607e56,
        'y': _0x50719c['y'] - cupMoveDistance
    }, {
        'x': _0x50719c['x'],
        'y': _0x50719c['y']
    }];
    TweenMax['to'](_0x4af01e, gameData[_0x165d39(0x133)], {
        'bezier': {
            'type': _0x165d39(0x199),
            'values': _0x3d534d
        },
        'overwrite': !![]
    });
    var _0x511dcf = [{
        'x': _0x50719c['x'],
        'y': _0x50719c['y']
    }, {
        'x': _0x1d103b,
        'y': _0x4af01e['y'] + cupMoveDistance
    }, {
        'x': _0x4af01e['x'],
        'y': _0x4af01e['y']
    }];
    TweenMax['to'](_0x50719c, gameData[_0x165d39(0x133)], {
        'bezier': {
            'type': _0x165d39(0x199),
            'values': _0x511dcf
        },
        'overwrite': !![],
        'onUpdate': updateCups,
        'onComplete': shuffleCups
    });
}

function updateCups() {
    var _0x458814 = a0_0x5b914d;
    for (var _0x58cb52 = 0x0; _0x58cb52 < cup_arr['length']; _0x58cb52++) {
        $[_0x458814(0x18a)]['s' + _0x58cb52]['x'] = $[_0x458814(0x18a)][_0x58cb52]['x'], $[_0x458814(0x18a)]['s' + _0x58cb52]['y'] = $[_0x458814(0x18a)][_0x58cb52]['y'];
    }
    gameData[_0x458814(0x21b)] = [];
    for (var _0x58cb52 = 0x0; _0x58cb52 < cup_arr['length']; _0x58cb52++) {
        gameData[_0x458814(0x21b)][_0x458814(0x196)]({
            'id': _0x58cb52,
            'position': $['cups'][_0x58cb52]['y']
        });
    }
    sortOnObject(gameData[_0x458814(0x21b)], 'position');
    var _0x57ef08 = 0x0;
    for (var _0x58cb52 = 0x0; _0x58cb52 < cup_arr[_0x458814(0x21a)]; _0x58cb52++) {
        cupContainer[_0x458814(0x212)]($[_0x458814(0x18a)][gameData[_0x458814(0x21b)][_0x58cb52]['id']], _0x58cb52), _0x57ef08 = canvasW / 0x64 * $[_0x458814(0x18a)][_0x58cb52]['y'] * 0.00019, $[_0x458814(0x18a)][_0x58cb52]['scaleX'] = $[_0x458814(0x18a)][_0x58cb52][_0x458814(0x129)] = _0x57ef08, $[_0x458814(0x18a)]['s' + _0x58cb52]['scaleX'] = $[_0x458814(0x18a)]['s' + _0x58cb52][_0x458814(0x129)] = _0x57ef08;
    }
}

function toggleCupButtons(_0x3a6dcf) {
    var _0x7c1c85 = a0_0x5b914d;
    if (_0x3a6dcf)
        for (var _0x8debd1 = 0x0; _0x8debd1 < cup_arr[_0x7c1c85(0x21a)]; _0x8debd1++) {
            $[_0x7c1c85(0x18a)][_0x8debd1]['id'] = _0x8debd1, $[_0x7c1c85(0x18a)][_0x8debd1][_0x7c1c85(0x128)] = _0x7c1c85(0x1a5), $[_0x7c1c85(0x18a)][_0x8debd1][_0x7c1c85(0x1b6)]('click', openCupEvent);
        } else
            for (var _0x8debd1 = 0x0; _0x8debd1 < cup_arr[_0x7c1c85(0x21a)]; _0x8debd1++) {
                $['cups'][_0x8debd1][_0x7c1c85(0x128)] = 'default', $[_0x7c1c85(0x18a)][_0x8debd1][_0x7c1c85(0x217)]('click', openCupEvent);
            }
}

function openCupEvent(_0x2a1427) {
    var _0x4401b5 = a0_0x5b914d;
    toggleCupButtons(![]), stopAnimateButton(instructionTxt), instructionTxt[_0x4401b5(0x1e7)] = 0x0, ball['x'] = $[_0x4401b5(0x18a)][gameData['cup']]['x'], ball['y'] = $['cups'][gameData['cup']]['y'], ball['visible'] = !![], _0x2a1427['target']['id'] == gameData['cup'] && (gameData[_0x4401b5(0x134)] = !![]), animateOpenCup(_0x2a1427[_0x4401b5(0x1c2)]['id'], checkResult);
}

function animateOpenCup(_0x1fcdc6, _0x5a8111) {
    var _0x137fa7 = a0_0x5b914d;
    playSound('soundLift');
    var _0x256994 = $[_0x137fa7(0x18a)][_0x1fcdc6]['y'];
    TweenMax['to']($[_0x137fa7(0x18a)][_0x1fcdc6], 0.5, {
        'y': _0x256994 - openCupDistance,
        'overwrite': !![],
        'onUpdate': updateCupShadow,
        'onComplete': function() {
            var _0x2dbb61 = _0x137fa7;
            TweenMax['to']($[_0x2dbb61(0x18a)][_0x1fcdc6], 0.5, {
                'y': _0x256994,
                'delay': 0x1,
                'overwrite': !![],
                'onUpdate': updateCupShadow,
                'onComplete': _0x5a8111
            });
        }
    });
}

function updateCupShadow() {
    var _0x40e32d = a0_0x5b914d,
        _0x2ff5f1 = 0x0;
    for (var _0x53d0b6 = 0x0; _0x53d0b6 < cup_arr[_0x40e32d(0x21a)]; _0x53d0b6++) {
        _0x2ff5f1 = canvasW / 0x64 * $[_0x40e32d(0x18a)][_0x53d0b6]['y'] * 0.00019, $[_0x40e32d(0x18a)]['s' + _0x53d0b6][_0x40e32d(0x1f0)] = $[_0x40e32d(0x18a)]['s' + _0x53d0b6]['scaleY'] = _0x2ff5f1;
    }
}

function checkResult() {
    var _0x286472 = a0_0x5b914d;
    playSound(_0x286472(0x177)), gameData['win'] ? (playSound(_0x286472(0x1a0)), playerData['level']++, updateStage(), showHiddenBall(![])) : animateOpenCup(gameData[_0x286472(0x180)], showResult);
}

function showResult() {
    var _0x3c46a0 = a0_0x5b914d;
    playSound(_0x3c46a0(0x16f)), playSound(_0x3c46a0(0x177)), goPage(_0x3c46a0(0x1ea));
}

function updateStage() {
    var _0x6d348b = a0_0x5b914d;
    playerData[_0x6d348b(0x15e)] >= gameData[_0x6d348b(0x15e)] && (gameData['level'] += level_arr[_0x6d348b(0x15e)], gameData[_0x6d348b(0x223)] += level_arr[_0x6d348b(0x1c6)], gameData[_0x6d348b(0x133)] -= level_arr[_0x6d348b(0x1ab)]), stageTxt[_0x6d348b(0x1a7)] = stageResultTxt[_0x6d348b(0x1a7)] = stageText[_0x6d348b(0x169)](_0x6d348b(0x210), playerData[_0x6d348b(0x15e)]);
}

function updateGame(_0x108a88) {}

function togglePop(_0x30364b) {
    var _0x8c4f98 = a0_0x5b914d;
    exitContainer[_0x8c4f98(0x1d5)] = _0x30364b, _0x30364b ? TweenMax[_0x8c4f98(0x1ed)](!![], !![]) : TweenMax[_0x8c4f98(0x13b)](!![], !![]);
}

function toggleOptions(_0x1e6c5b) {
    var _0xb30fba = a0_0x5b914d;
    optionsContainer[_0xb30fba(0x1d5)] ? optionsContainer[_0xb30fba(0x1d5)] = ![] : optionsContainer[_0xb30fba(0x1d5)] = !![], _0x1e6c5b != undefined && (optionsContainer[_0xb30fba(0x1d5)] = _0x1e6c5b);
}

function toggleSoundMute(_0x281eee) {
    var _0x43e0ee = a0_0x5b914d;
    buttonSoundOff[_0x43e0ee(0x1d5)] = ![], buttonSoundOn[_0x43e0ee(0x1d5)] = ![], toggleSoundInMute(_0x281eee), _0x281eee ? buttonSoundOn[_0x43e0ee(0x1d5)] = !![] : buttonSoundOff[_0x43e0ee(0x1d5)] = !![];
}

function toggleMusicMute(_0x29c282) {
    var _0x2da048 = a0_0x5b914d;
    buttonMusicOff[_0x2da048(0x1d5)] = ![], buttonMusicOn[_0x2da048(0x1d5)] = ![], toggleMusicInMute(_0x29c282), _0x29c282 ? buttonMusicOn[_0x2da048(0x1d5)] = !![] : buttonMusicOff[_0x2da048(0x1d5)] = !![];
}

function toggleFullScreen() {
    var _0x521bca = a0_0x5b914d;
    if (!document[_0x521bca(0x1c7)] && !document[_0x521bca(0x173)] && !document[_0x521bca(0x14c)] && !document['msFullscreenElement']) {
        if (document['documentElement'][_0x521bca(0x1b8)]) document[_0x521bca(0x1e6)][_0x521bca(0x1b8)]();
        else {
            if (document[_0x521bca(0x1e6)][_0x521bca(0x209)]) document[_0x521bca(0x1e6)]['msRequestFullscreen']();
            else {
                if (document[_0x521bca(0x1e6)][_0x521bca(0x121)]) document[_0x521bca(0x1e6)][_0x521bca(0x121)]();
                else document[_0x521bca(0x1e6)][_0x521bca(0x1ce)] && document[_0x521bca(0x1e6)][_0x521bca(0x1ce)](Element[_0x521bca(0x1ac)]);
            }
        }
    } else {
        if (document['exitFullscreen']) document[_0x521bca(0x150)]();
        else {
            if (document['msExitFullscreen']) document[_0x521bca(0x160)]();
            else {
                if (document[_0x521bca(0x167)]) document[_0x521bca(0x167)]();
                else document[_0x521bca(0x21e)] && document['webkitExitFullscreen']();
            }
        }
    }
}

function shareLinks(_0x1a36aa, _0x4371c6) {
    var _0xf0ae11 = a0_0x5b914d;
    shareSettings['gtag'] && gtag(_0xf0ae11(0x144), 'click', {
        'event_category': _0xf0ae11(0x1ae),
        'event_label': _0x1a36aa
    });
    var _0x3e03ec = location[_0xf0ae11(0x17c)];
    _0x3e03ec = encodeURIComponent(_0x3e03ec[_0xf0ae11(0x174)](0x0, _0x3e03ec[_0xf0ae11(0x194)]('/') + 0x1));
    var _0x3fcd4e = shareSettings[_0xf0ae11(0x1ad)][_0xf0ae11(0x169)](_0xf0ae11(0x131), _0x4371c6),
        _0x13af0d = shareSettings[_0xf0ae11(0x1bd)]['replace'](_0xf0ae11(0x131), _0x4371c6),
        _0x1d29d2 = '';
    if (_0x1a36aa == _0xf0ae11(0x12b)) shareSettings[_0xf0ae11(0x1bb)] ? (_0x3e03ec = decodeURIComponent(_0x3e03ec), _0x1d29d2 = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(_0x3e03ec + 'share.php?title=' + _0x3fcd4e + _0xf0ae11(0x122) + _0x3e03ec + _0xf0ae11(0x20f) + _0x3e03ec + 'share.jpg')) : _0x1d29d2 = _0xf0ae11(0x21d) + _0x3e03ec;
    else {
        if (_0x1a36aa == _0xf0ae11(0x16d)) _0x1d29d2 = _0xf0ae11(0x146) + _0x13af0d + _0xf0ae11(0x122) + _0x3e03ec;
        else {
            if (_0x1a36aa == 'whatsapp') _0x1d29d2 = _0xf0ae11(0x21c) + _0x13af0d + _0xf0ae11(0x1a6) + _0x3e03ec;
            else {
                if (_0x1a36aa == _0xf0ae11(0x1df)) _0x1d29d2 = _0xf0ae11(0x1bc) + _0x3e03ec + _0xf0ae11(0x14f) + _0x13af0d;
                else {
                    if (_0x1a36aa == _0xf0ae11(0x19d)) _0x1d29d2 = 'https://www.reddit.com/submit?url=' + _0x3e03ec + _0xf0ae11(0x190) + _0x13af0d;
                    else _0x1a36aa == _0xf0ae11(0x142) && (_0x1d29d2 = 'https://www.linkedin.com/sharing/share-offsite/?url=' + _0x3e03ec);
                }
            }
        }
    }
    window[_0xf0ae11(0x21f)](_0x1d29d2);
}
var stageWidth, stageHeight = 0x0,
    isLoaded = ![];
$(function() {
    var _0x2d50b1 = a0_0x5b914d,
        _0x91fa91 = function() {
            var _0x3d2fa6 = a0_0x16e0;
            try {
                createjs[_0x3d2fa6(0x1ca)]['context'][_0x3d2fa6(0x12f)] === _0x3d2fa6(0x182) && (createjs[_0x3d2fa6(0x1ca)][_0x3d2fa6(0x20d)][_0x3d2fa6(0x1de)](), window[_0x3d2fa6(0x217)](_0x3d2fa6(0x1e0), _0x91fa91));
            } catch (_0x93f15) {
                console[_0x3d2fa6(0x1a3)](_0x3d2fa6(0x18e)), console[_0x3d2fa6(0x1a3)](_0x93f15);
            }
        };
    window['addEventListener']('click', _0x91fa91), window[_0x2d50b1(0x16a)]['protocol'][_0x2d50b1(0x154)](0x0, 0x4) === _0x2d50b1(0x214) && alert(_0x2d50b1(0x1b2)), $(window)[_0x2d50b1(0x17d)](function() {
        resizeLoaderFunc();
    }), resizeLoaderFunc(), checkBrowser();
});

function resizeLoaderFunc() {
    var _0xede46e = a0_0x5b914d;
    stageWidth = $(window)[_0xede46e(0x1c0)](), stageHeight = $(window)['height'](), $('#mainLoader')[_0xede46e(0x216)](_0xede46e(0x170), checkContentWidth($(_0xede46e(0x215)))), $(_0xede46e(0x215))[_0xede46e(0x216)](_0xede46e(0x1d1), checkContentHeight($(_0xede46e(0x215)))), $(_0xede46e(0x1c5))[_0xede46e(0x216)]('left', checkContentWidth($('#mainLoader'))), $(_0xede46e(0x1c5))['css']('top', checkContentHeight($(_0xede46e(0x215))));
}
var browserSupport = ![],
    isMobile, isTablet, isDesktop;

function checkBrowser() {
    var _0x428e8f = a0_0x5b914d;
    if (typeof MobileDetect === 'function') {
        var _0x4de7e7 = new MobileDetect(window[_0x428e8f(0x176)]['userAgent']);
        isMobile = _0x4de7e7[_0x428e8f(0x1f3)](), isTablet = _0x4de7e7['tablet'](), isMobile == null && isTablet == null && (isDesktop = !![]);
    }
    var _0x3cd892 = document[_0x428e8f(0x1b0)](_0x428e8f(0x18f));
    _0x3cd892[_0x428e8f(0x1ee)] && (browserSupport = !![]), browserSupport ? !isLoaded && (isLoaded = !![], initPreload()) : $(_0x428e8f(0x1c5))['show']();
}

function initPreload() {
    var _0x9044e1 = a0_0x5b914d;
    toggleLoader(!![]), checkMobileEvent(), $(window)[_0x9044e1(0x17d)](function() {
        resizeGameFunc();
    }), resizeGameFunc(), loader = new createjs[(_0x9044e1(0x125))](![]), manifest = [{
        'src': _0x9044e1(0x1b9),
        'id': _0x9044e1(0x1d0)
    }, {
        'src': _0x9044e1(0x206),
        'id': _0x9044e1(0x175)
    }, {
        'src': 'assets/cup.png',
        'id': _0x9044e1(0x180)
    }, {
        'src': _0x9044e1(0x1f6),
        'id': _0x9044e1(0x1a9)
    }, {
        'src': _0x9044e1(0x1cf),
        'id': _0x9044e1(0x141)
    }, {
        'src': _0x9044e1(0x218),
        'id': _0x9044e1(0x161)
    }, {
        'src': 'assets/button_save.png',
        'id': _0x9044e1(0x139)
    }, {
        'src': _0x9044e1(0x1a8),
        'id': _0x9044e1(0x132)
    }, {
        'src': 'assets/social/button_twitter.png',
        'id': _0x9044e1(0x162)
    }, {
        'src': _0x9044e1(0x221),
        'id': _0x9044e1(0x17e)
    }, {
        'src': _0x9044e1(0x1f5),
        'id': _0x9044e1(0x16b)
    }, {
        'src': _0x9044e1(0x1ba),
        'id': _0x9044e1(0x14b)
    }, {
        'src': _0x9044e1(0x172),
        'id': _0x9044e1(0x148)
    }, {
        'src': _0x9044e1(0x189),
        'id': _0x9044e1(0x158)
    }, {
        'src': _0x9044e1(0x178),
        'id': 'buttonCancel'
    }, {
        'src': _0x9044e1(0x127),
        'id': 'itemExit'
    }, {
        'src': _0x9044e1(0x1d3),
        'id': _0x9044e1(0x19c)
    }, {
        'src': _0x9044e1(0x1f4),
        'id': _0x9044e1(0x18b)
    }, {
        'src': _0x9044e1(0x166),
        'id': _0x9044e1(0x20e)
    }, {
        'src': _0x9044e1(0x1d9),
        'id': _0x9044e1(0x20b)
    }, {
        'src': _0x9044e1(0x193),
        'id': _0x9044e1(0x15b)
    }, {
        'src': _0x9044e1(0x222),
        'id': _0x9044e1(0x13f)
    }, {
        'src': _0x9044e1(0x14d),
        'id': _0x9044e1(0x123)
    }], typeof addScoreboardAssets == _0x9044e1(0x165) && addScoreboardAssets(), audioOn = !![], !isDesktop ? !enableMobileAudio && (audioOn = ![]) : !enableDesktopAudio && (audioOn = ![]), audioOn && (manifest['push']({
        'src': _0x9044e1(0x1e1),
        'id': _0x9044e1(0x188)
    }), manifest[_0x9044e1(0x196)]({
        'src': _0x9044e1(0x1cd),
        'id': _0x9044e1(0x168)
    }), manifest[_0x9044e1(0x196)]({
        'src': _0x9044e1(0x204),
        'id': _0x9044e1(0x16f)
    }), manifest[_0x9044e1(0x196)]({
        'src': _0x9044e1(0x145),
        'id': _0x9044e1(0x1a0)
    }), manifest[_0x9044e1(0x196)]({
        'src': _0x9044e1(0x14a),
        'id': _0x9044e1(0x177)
    }), manifest['push']({
        'src': _0x9044e1(0x1f8),
        'id': _0x9044e1(0x18c)
    }), manifest['push']({
        'src': _0x9044e1(0x136),
        'id': _0x9044e1(0x192)
    }), manifest['push']({
        'src': 'assets/sounds/slide2.ogg',
        'id': _0x9044e1(0x1cc)
    }), manifest[_0x9044e1(0x196)]({
        'src': _0x9044e1(0x126),
        'id': _0x9044e1(0x157)
    }), manifest[_0x9044e1(0x196)]({
        'src': _0x9044e1(0x213),
        'id': _0x9044e1(0x1e5)
    }), createjs[_0x9044e1(0x12e)][_0x9044e1(0x1aa)] = ['mp3'], loader[_0x9044e1(0x1e8)](createjs[_0x9044e1(0x12e)])), loader['addEventListener'](_0x9044e1(0x13c), handleComplete), loader['on']('progress', handleProgress, this), loader[_0x9044e1(0x219)](manifest);
}

function handleProgress() {
    var _0x37ea40 = a0_0x5b914d;
    $(_0x37ea40(0x215))[_0x37ea40(0x1d4)](Math['round'](loader['progress'] / 0x1 * 0x64) + '%');
}

function handleComplete() {
    toggleLoader(![]), initMain();
};

function toggleLoader(_0x26b7ce) {
    var _0x9a162f = a0_0x5b914d;
    _0x26b7ce ? $('#mainLoader')[_0x9a162f(0x186)]() : $(_0x9a162f(0x215))[_0x9a162f(0x156)]();
}
var stageW = 0x400,
    stageH = 0x300,
    contentW = 0x400,
    contentH = 0x300;

function a0_0x3a54() {
    var _0x53aacc = ['Shape', 'assets/sounds/slide1.ogg', 'enableMouseOver', 'spaceX', 'buttonSave', '[SCORE]\x20is\x20mine\x20new\x20highscore\x20on\x20Magic\x20Cup!\x20Try\x20it\x20now!', 'resumeAll', 'complete', 'Graphics', 'enable', 'buttonExit', 'textAlign', 'ball', 'linkedin', 'Touch', 'event', 'assets/sounds/win.ogg', 'https://twitter.com/intent/tweet?text=', 'naturalWidth', 'buttonLinkedin', 'animate', 'assets/sounds/drop.ogg', 'buttonReddit', 'webkitFullscreenElement', 'assets/button_settings.png', 'gameCanvas', '&text=', 'exitFullscreen', '1086392BYjUPp', 'POINT\x20OUT\x20WHERE\x20THE\x20BALL\x20IS', '24GcusaL', 'substr', 'Text', 'hide', 'soundSlide3', 'buttonConfirm', 'splice', '5990590OwDrgN', 'buttonMusicOff', '#000', 'scale', 'level', 'update', 'msExitFullscreen', 'buttonShare', 'buttonTwitter', 'abs', 'array', 'function', 'assets/button_sound_off.png', 'mozCancelFullScreen', 'soundClick', 'replace', 'location', 'buttonTelegram', 'getResult', 'twitter', 'stop', 'soundFail', 'left', 'score', 'assets/social/button_linkedin.png', 'mozFullScreenElement', 'substring', 'logo', 'navigator', 'soundDrop', 'assets/button_cancel.png', '952104EseNBE', 'min', 'toUpperCase', 'href', 'resize', 'buttonWhatsapp', '207066CiPYdu', 'cup', 'stopPropagation', 'suspended', 'lineHeight', 'clear', 'cupSpeed', 'show', '355690rJpUTh', 'music', 'assets/button_confirm.png', 'cups', 'buttonSoundOn', 'soundLift', 'mouseMoveOutside', 'There\x20was\x20an\x20error\x20while\x20trying\x20to\x20resume\x20the\x20SoundJS\x20Web\x20Audio\x20context...', 'canvas', '&title=', 'image', 'soundSlide1', 'assets/button_music_off.png', 'lastIndexOf', 'TAP\x20TO\x20BEGIN', 'push', 'play', 'body', 'quadratic', 'floor', '#canvasHolder', 'buttonFullscreen', 'reddit', '50px\x20geosanslightregular', 'test', 'soundWin', 'shareOption', 'alphabetic', 'error', 'textBaseline', 'pointer', '%20', 'text', 'assets/social/button_facebook.png', 'shadow', 'alternateExtensions', 'cupSpeedDecrease', 'ALLOW_KEYBOARD_INPUT', 'shareTitle', 'share', 'sort', 'createElement', 'removeAllEventListeners', 'To\x20install\x20the\x20game\x20just\x20upload\x20folder\x20\x27game\x27\x20to\x20your\x20server.\x20The\x20game\x20won\x27t\x20run\x20locally\x20with\x20some\x20browser\x20like\x20Chrome\x20due\x20to\x20some\x20security\x20mode.', 'scoreData', '#rotateHolder', 'Container', 'addEventListener', 'graphics', 'requestFullscreen', 'assets/background.png', 'assets/social/button_reddit.png', 'customScore', 'https://t.me/share/url?url=', 'shareText', 'defaultVol', 'regX', 'width', '1VyjILq', 'target', 'addChild', 'split', '#notSupportHolder', 'cupShuffleCountIncrease', 'fullscreenElement', 'regY', 'tick', 'WebAudioPlugin', 'clearQueue', 'soundSlide2', 'assets/sounds/click.ogg', 'webkitRequestFullscreen', 'assets/ball.png', 'background', 'top', 'volume', 'assets/button_fullscreen.png', 'html', 'visible', 'beginFill', 'removeAllChildren', 'getElementById', 'assets/button_music_on.png', 'drawRect', 'random', '80px\x20geosanslightregular', 'sound', 'resume', 'telegram', 'click', 'assets/sounds/music.ogg', 'buttonCancel', 'innerHeight', 'Bitmap', 'soundSlide4', 'documentElement', 'alpha', 'installPlugin', 'STAGE\x20[LEVEL]', 'result', 'button', 'slice', 'pauseAll', 'getContext', 'height', 'scaleX', 'style', 'indexOf', 'mobile', 'assets/button_sound_on.png', 'assets/social/button_telegram.png', 'assets/shadow.png', 'Ticker', 'assets/sounds/lift.ogg', 'game', 'naturalHeight', 'options', '11808467FuApjk', '40px\x20geosanslightregular', 'touchmove', 'type', 'undefined', 'innerWidth', '#ffffff', 'scrollTop', 'assets/sounds/fail.ogg', 'paused', 'assets/logo.png', 'color', 'autoClear', 'msRequestFullscreen', 'font', 'buttonMusicOn', 'off', 'context', 'buttonSoundOff', '&thumb=', '[LEVEL]', 'itemExit', 'setChildIndex', 'assets/sounds/slide4.ogg', 'file', '#mainLoader', 'css', 'removeEventListener', 'assets/button_share.png', 'loadManifest', 'length', 'position', 'https://api.whatsapp.com/send?text=', 'https://www.facebook.com/sharer/sharer.php?u=', 'webkitExitFullscreen', 'open', 'arrayNum', 'assets/social/button_whatsapp.png', 'assets/button_exit.png', 'shuffleCountMax', 'center', 'hitArea', '8mOEOfp', '.mobileRotate', 'mozRequestFullScreen', '&url=', 'buttonSettings', 'soundSlide', 'LoadQueue', 'assets/sounds/slide3.ogg', 'assets/item_exit.png', 'cursor', 'scaleY', '2891088hxoUdV', 'facebook', '7bNRlhf', 'main', 'Sound', 'state', 'shuffleCount', '[SCORE]', 'buttonFacebook', 'speed', 'win'];
    a0_0x3a54 = function() {
        return _0x53aacc;
    };
    return a0_0x3a54();
}

function initMain() {
    var _0x42f950 = a0_0x5b914d;
    isDesktop && $(_0x42f950(0x19b))[_0x42f950(0x186)](), initGameCanvas(stageW, stageH), buildGameCanvas(), buildGameButton(), typeof buildScoreBoardCanvas == _0x42f950(0x165) && buildScoreBoardCanvas(), playMusicLoop('music'), goPage(_0x42f950(0x12d)), resizeCanvas();
}
var windowW = windowH = 0x0,
    scalePercent = 0x0;
const dpr = window['devicePixelRatio'] || 0x1,
    offset = {
        'x': 0x0,
        'y': 0x0,
        'left': 0x0,
        'top': 0x0
    };

function resizeGameFunc() {
    setTimeout(function() {
        var _0x4d267e = a0_0x16e0;
        $(_0x4d267e(0x120))[_0x4d267e(0x216)](_0x4d267e(0x170), checkContentWidth($(_0x4d267e(0x120)))), $(_0x4d267e(0x120))['css']('top', checkContentHeight($(_0x4d267e(0x120)))), windowW = window[_0x4d267e(0x201)], windowH = window['innerHeight'], scalePercent = Math[_0x4d267e(0x17a)](windowW / contentW, windowH / contentH), scalePercent = scalePercent > 0x1 ? 0x1 : scalePercent;
        windowW > stageW && windowH > stageH && (windowW > stageW && (scalePercent = windowW / stageW, stageH * scalePercent > windowH && (scalePercent = windowH / stageH)));
        const _0x5da1db = stageW * scalePercent,
            _0x298389 = stageH * scalePercent;
        offset[_0x4d267e(0x170)] = 0x0, offset[_0x4d267e(0x1d1)] = 0x0, _0x5da1db > windowW ? offset[_0x4d267e(0x170)] = -(_0x5da1db - windowW) : offset[_0x4d267e(0x170)] = windowW - _0x5da1db, _0x298389 > windowH ? offset['top'] = -(_0x298389 - windowH) : offset[_0x4d267e(0x1d1)] = windowH - _0x298389, offset['x'] = 0x0, offset['y'] = 0x0, offset['left'] < 0x0 && (offset['x'] = Math[_0x4d267e(0x163)](offset['left'] / scalePercent / 0x2)), offset[_0x4d267e(0x1d1)] < 0x0 && (offset['y'] = Math[_0x4d267e(0x163)](offset[_0x4d267e(0x1d1)] / scalePercent / 0x2)), $(window)[_0x4d267e(0x203)](0x0), resizeCanvas(), typeof resizeScore == _0x4d267e(0x165) && resizeScore();
    }, 0x64);
}
var rotateInstruction = !![],
    forPortrait = ![];

function checkMobileEvent() {
    var _0xc99aa8 = a0_0x5b914d;
    if (!isDesktop) {
        $(_0xc99aa8(0x198))['on'](_0xc99aa8(0x1fe), function(_0x2a741c) {
            var _0x4c5109 = _0xc99aa8;
            return _0x2a741c['preventDefault'](), _0x2a741c[_0x4c5109(0x181)](), ![];
        });
        if (!rotateInstruction) {
            $(_0xc99aa8(0x19b))[_0xc99aa8(0x186)](), $(_0xc99aa8(0x1b4))['hide']();
            return;
        }
        $(window)[_0xc99aa8(0x20c)]('orientationchange')['on']('orientationchange', function(_0x9f33cc) {
            var _0x46875e = _0xc99aa8;
            $('#canvasHolder')[_0x46875e(0x156)](), $(_0x46875e(0x1b4))[_0x46875e(0x156)](), setTimeout(function() {
                checkMobileOrientation();
            }, 0x3e8);
        }), checkMobileOrientation();
    }
}

function checkMobileOrientation() {
    var _0x36b907 = a0_0x5b914d,
        _0x45fa8c = ![];
    window[_0x36b907(0x201)] > window[_0x36b907(0x1e3)] && (_0x45fa8c = !![]);
    var _0x10a2d2 = ![];
    !_0x45fa8c ? forPortrait && (_0x10a2d2 = !![]) : !forPortrait && (_0x10a2d2 = !![]), !_0x10a2d2 ? toggleRotate(!![]) : (toggleRotate(![]), $(_0x36b907(0x19b))[_0x36b907(0x186)]());
}

function toggleRotate(_0x46d2d2) {
    var _0x9046e9 = a0_0x5b914d;
    _0x46d2d2 ? $(_0x9046e9(0x1b4))['fadeIn']() : $(_0x9046e9(0x1b4))['fadeOut'](), resizeGameFunc();
}

function checkContentHeight(_0xd3261c) {
    var _0x8bc5ce = a0_0x5b914d,
        _0x46c36d = $(window)['height'](),
        _0x13f327 = _0x46c36d / 0x2 - _0xd3261c[_0x8bc5ce(0x1ef)]() / 0x2;
    return _0x13f327;
}

function checkContentWidth(_0x373e47) {
    var _0x455941 = a0_0x5b914d,
        _0x87cda8 = $(window)[_0x455941(0x1c0)](),
        _0x2214b2 = _0x87cda8 / 0x2 - _0x373e47[_0x455941(0x1c0)]() / 0x2;
    return _0x2214b2;
}

function shuffle(_0x2f4032) {
    var _0x2a3d0d = a0_0x5b914d,
        _0xdbf3dd = _0x2f4032[_0x2a3d0d(0x21a)],
        _0x32526c, _0x39070a;
    while (0x0 !== _0xdbf3dd) {
        _0x39070a = Math['floor'](Math[_0x2a3d0d(0x1db)]() * _0xdbf3dd), _0xdbf3dd -= 0x1, _0x32526c = _0x2f4032[_0xdbf3dd], _0x2f4032[_0xdbf3dd] = _0x2f4032[_0x39070a], _0x2f4032[_0x39070a] = _0x32526c;
    }
    return _0x2f4032;
}

function randomBoolean() {
    var _0x1800e1 = a0_0x5b914d;
    return Math[_0x1800e1(0x1db)]() < 0.5;
}

function sortOnObject(_0x179254, _0x33e633) {
    var _0x6fd2fd = a0_0x5b914d;
    return _0x179254[_0x6fd2fd(0x1af)](function(_0x40baf9, _0x14455b) {
        var _0x548504 = _0x40baf9[_0x33e633],
            _0x18a6df = _0x14455b[_0x33e633];
        if (_0x548504 == _0x18a6df) return 0x0;
        return _0x548504 > _0x18a6df ? 0x1 : -0x1;
    }), _0x179254;
}

function isEven(_0x3c9fe9) {
    return _0x3c9fe9 % 0x2 == 0x0;
}

function addCommas(_0x3a8183) {
    var _0x30f93b = a0_0x5b914d;
    _0x3a8183 += '', x = _0x3a8183[_0x30f93b(0x1c4)]('.'), x1 = x[0x0], x2 = x[_0x30f93b(0x21a)] > 0x1 ? '.' + x[0x1] : '';
    var _0x274cd7 = /(\d+)(\d{3})/;
    while (_0x274cd7[_0x30f93b(0x19f)](x1)) {
        x1 = x1[_0x30f93b(0x169)](_0x274cd7, '$1' + ',' + '$2');
    }
    return x1 + x2;
}
const enableDesktopAudio = !![],
    enableMobileAudio = !![],
    muteSoundOn = ![],
    muteMusicOn = ![];
var audioOn, soundMute = ![],
    musicMute = ![];
$['sound'] = {};
var soundID = 0x0,
    soundPushArr = [],
    soundLoopPushArr = [],
    musicPushArr = [];

function playSound(_0x319cb6, _0x2986bd) {
    var _0x1a9029 = a0_0x5b914d;
    if (audioOn) {
        var _0x132fb2 = soundID;
        soundPushArr['push'](_0x132fb2), soundID++;
        var _0x7ecb57 = _0x2986bd == undefined ? 0x1 : _0x2986bd;
        $[_0x1a9029(0x1dd)][_0x132fb2] = createjs[_0x1a9029(0x12e)]['play'](_0x319cb6), $['sound'][_0x132fb2][_0x1a9029(0x1be)] = _0x7ecb57, setSoundVolume(_0x132fb2), $[_0x1a9029(0x1dd)][_0x132fb2]['removeAllEventListeners'](), $[_0x1a9029(0x1dd)][_0x132fb2][_0x1a9029(0x1b6)](_0x1a9029(0x13c), function() {
            var _0x48cb0f = _0x1a9029,
                _0x5aa36a = soundPushArr[_0x48cb0f(0x1f2)](_0x132fb2);
            _0x5aa36a != -0x1 && soundPushArr[_0x48cb0f(0x159)](_0x5aa36a, 0x1);
        });
    }
}

function playSoundLoop(_0x119d72) {
    var _0x559abb = a0_0x5b914d;
    audioOn && ($[_0x559abb(0x1dd)][_0x119d72] == null && (soundLoopPushArr['push'](_0x119d72), $[_0x559abb(0x1dd)][_0x119d72] = createjs[_0x559abb(0x12e)][_0x559abb(0x197)](_0x119d72), $[_0x559abb(0x1dd)][_0x119d72][_0x559abb(0x1be)] = 0x1, setSoundLoopVolume(_0x119d72), $['sound'][_0x119d72]['removeAllEventListeners'](), $['sound'][_0x119d72][_0x559abb(0x1b6)](_0x559abb(0x13c), function() {
        var _0x3b32b0 = _0x559abb;
        $[_0x3b32b0(0x1dd)][_0x119d72]['play']();
    })));
}

function toggleSoundLoop(_0x42fb3a, _0x26aea8) {
    var _0x1535b8 = a0_0x5b914d;
    audioOn && ($[_0x1535b8(0x1dd)][_0x42fb3a] != null && (_0x26aea8 ? $[_0x1535b8(0x1dd)][_0x42fb3a][_0x1535b8(0x197)]() : $[_0x1535b8(0x1dd)][_0x42fb3a][_0x1535b8(0x205)] = !![]));
}

function stopSoundLoop(_0x4d0aa6) {
    var _0x181329 = a0_0x5b914d;
    if (audioOn) {
        if ($[_0x181329(0x1dd)][_0x4d0aa6] != null) {
            $[_0x181329(0x1dd)][_0x4d0aa6][_0x181329(0x16e)](), $[_0x181329(0x1dd)][_0x4d0aa6] = null;
            var _0xad2d16 = soundLoopPushArr[_0x181329(0x1f2)](_0x4d0aa6);
            _0xad2d16 != -0x1 && soundLoopPushArr[_0x181329(0x159)](_0xad2d16, 0x1);
        }
    }
}

function playMusicLoop(_0x38bf64) {
    var _0x2ad5d3 = a0_0x5b914d;
    audioOn && ($[_0x2ad5d3(0x1dd)][_0x38bf64] == null && (musicPushArr[_0x2ad5d3(0x196)](_0x38bf64), $[_0x2ad5d3(0x1dd)][_0x38bf64] = createjs[_0x2ad5d3(0x12e)]['play'](_0x38bf64), $[_0x2ad5d3(0x1dd)][_0x38bf64]['defaultVol'] = 0x1, setMusicVolume(_0x38bf64), $['sound'][_0x38bf64][_0x2ad5d3(0x1b1)](), $[_0x2ad5d3(0x1dd)][_0x38bf64][_0x2ad5d3(0x1b6)](_0x2ad5d3(0x13c), function() {
        var _0x221fc2 = _0x2ad5d3;
        $[_0x221fc2(0x1dd)][_0x38bf64]['play']();
    })));
}

function toggleMusicLoop(_0x422912, _0x28a354) {
    var _0x83e2e5 = a0_0x5b914d;
    audioOn && ($[_0x83e2e5(0x1dd)][_0x422912] != null && (_0x28a354 ? $['sound'][_0x422912][_0x83e2e5(0x197)]() : $[_0x83e2e5(0x1dd)][_0x422912][_0x83e2e5(0x205)] = !![]));
}

function stopMusicLoop(_0x7f4a34) {
    var _0x554263 = a0_0x5b914d;
    if (audioOn) {
        if ($[_0x554263(0x1dd)][_0x7f4a34] != null) {
            $[_0x554263(0x1dd)][_0x7f4a34][_0x554263(0x16e)](), $[_0x554263(0x1dd)][_0x7f4a34] = null;
            var _0x3463ec = musicPushArr[_0x554263(0x1f2)](_0x7f4a34);
            _0x3463ec != -0x1 && musicPushArr['splice'](_0x3463ec, 0x1);
        }
    }
}

function stopSound() {
    var _0x5e272a = a0_0x5b914d;
    createjs[_0x5e272a(0x12e)][_0x5e272a(0x16e)]();
}

function toggleSoundInMute(_0x48580e) {
    var _0x5db1f2 = a0_0x5b914d;
    if (audioOn) {
        soundMute = _0x48580e;
        for (var _0x4c66c2 = 0x0; _0x4c66c2 < soundPushArr[_0x5db1f2(0x21a)]; _0x4c66c2++) {
            setSoundVolume(soundPushArr[_0x4c66c2]);
        }
        for (var _0x4c66c2 = 0x0; _0x4c66c2 < soundLoopPushArr[_0x5db1f2(0x21a)]; _0x4c66c2++) {
            setSoundLoopVolume(soundLoopPushArr[_0x4c66c2]);
        }
    }
}

function toggleMusicInMute(_0x50bbec) {
    var _0x1da848 = a0_0x5b914d;
    if (audioOn) {
        musicMute = _0x50bbec;
        for (var _0x546aae = 0x0; _0x546aae < musicPushArr[_0x1da848(0x21a)]; _0x546aae++) {
            setMusicVolume(musicPushArr[_0x546aae]);
        }
    }
}

function setSoundVolume(_0x182a98, _0x17824e) {
    var _0x339ba8 = a0_0x5b914d;
    if (audioOn) {
        var _0x242e51 = soundPushArr['indexOf'](_0x182a98);
        if (_0x242e51 != -0x1) {
            var _0x3aacc3 = _0x17824e == undefined ? $[_0x339ba8(0x1dd)][soundPushArr[_0x242e51]][_0x339ba8(0x1be)] : _0x17824e,
                _0x119017 = soundMute == ![] ? _0x3aacc3 : 0x0;
            $['sound'][soundPushArr[_0x242e51]][_0x339ba8(0x1d2)] = _0x119017, $['sound'][soundPushArr[_0x242e51]][_0x339ba8(0x1be)] = _0x3aacc3;
        }
    }
}

function setSoundLoopVolume(_0x2edaf5, _0x1b0a15) {
    var _0x20efd3 = a0_0x5b914d;
    if (audioOn) {
        var _0xc3baa5 = soundLoopPushArr[_0x20efd3(0x1f2)](_0x2edaf5);
        if (_0xc3baa5 != -0x1) {
            var _0x20c3fa = _0x1b0a15 == undefined ? $[_0x20efd3(0x1dd)][soundLoopPushArr[_0xc3baa5]][_0x20efd3(0x1be)] : _0x1b0a15,
                _0x4488fb = soundMute == ![] ? _0x20c3fa : 0x0;
            $['sound'][soundLoopPushArr[_0xc3baa5]][_0x20efd3(0x1d2)] = _0x4488fb, $[_0x20efd3(0x1dd)][soundLoopPushArr[_0xc3baa5]][_0x20efd3(0x1be)] = _0x20c3fa;
        }
    }
}

function setMusicVolume(_0x5b9d4a, _0x25e7f6) {
    var _0x4b24a4 = a0_0x5b914d;
    if (audioOn) {
        var _0x160469 = musicPushArr[_0x4b24a4(0x1f2)](_0x5b9d4a);
        if (_0x160469 != -0x1) {
            var _0x38fc1d = _0x25e7f6 == undefined ? $[_0x4b24a4(0x1dd)][musicPushArr[_0x160469]][_0x4b24a4(0x1be)] : _0x25e7f6,
                _0x12f517 = musicMute == ![] ? _0x38fc1d : 0x0;
            $[_0x4b24a4(0x1dd)][musicPushArr[_0x160469]][_0x4b24a4(0x1d2)] = _0x12f517, $[_0x4b24a4(0x1dd)][musicPushArr[_0x160469]][_0x4b24a4(0x1be)] = _0x38fc1d;
        }
    }
}