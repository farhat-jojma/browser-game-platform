var a0_0x30c371 = a0_0x839d;
(function(_0x51fef2, _0x34e82d) {
    var _0x1290f8 = a0_0x839d,
        _0x4b97ba = _0x51fef2();
    while (!![]) {
        try {
            var _0x639b5b = parseInt(_0x1290f8(0xcc)) / 0x1 + -parseInt(_0x1290f8(0x147)) / 0x2 * (-parseInt(_0x1290f8(0x15a)) / 0x3) + parseInt(_0x1290f8(0xb4)) / 0x4 + -parseInt(_0x1290f8(0x237)) / 0x5 * (-parseInt(_0x1290f8(0x114)) / 0x6) + -parseInt(_0x1290f8(0xc6)) / 0x7 * (parseInt(_0x1290f8(0x171)) / 0x8) + -parseInt(_0x1290f8(0x15b)) / 0x9 * (-parseInt(_0x1290f8(0xf9)) / 0xa) + -parseInt(_0x1290f8(0x186)) / 0xb;
            if (_0x639b5b === _0x34e82d) break;
            else _0x4b97ba['push'](_0x4b97ba['shift']());
        } catch (_0x4d882f) {
            _0x4b97ba['push'](_0x4b97ba['shift']());
        }
    }
}(a0_0x4717, 0xde019));
var stage, canvasW = 0x0,
    canvasH = 0x0;

function initGameCanvas(_0xabede4, _0x313d4c) {
    var _0x383a33 = a0_0x839d;
    const _0x3fc99d = document[_0x383a33(0xfd)]('gameCanvas');
    _0x3fc99d[_0x383a33(0x18a)] = _0xabede4, _0x3fc99d[_0x383a33(0x22b)] = _0x313d4c, canvasW = _0xabede4, canvasH = _0x313d4c, stage = new createjs[(_0x383a33(0x1ab))](_0x383a33(0x161), {
        'antialias': !![]
    }), createjs[_0x383a33(0x1a9)][_0x383a33(0xfb)](stage), stage[_0x383a33(0xfc)](0x14), stage['mouseMoveOutside'] = !![], createjs[_0x383a33(0x1c2)][_0x383a33(0x265)] = createjs[_0x383a33(0x1c2)][_0x383a33(0x12e)], createjs['Ticker']['framerate'] = 0x3c, createjs[_0x383a33(0x1c2)][_0x383a33(0x20f)](_0x383a33(0x1a4), tick);
}
var safeZoneGuide = ![],
    canvasContainer, mainContainer, gameContainer, resultContainer, exitContainer, optionsContainer, shareContainer, shareSaveContainer, socialContainer, guideline, bg, bgP, logo, logoP, itemExit, itemExitP, popTitleTxt, popDescTxt, buttonConfirm, buttonCancel, itemResult, itemResultP, buttonContinue, resultTitleTxt, resultDescTxt, buttonShare, buttonSave, resultTitleOutlineTxt, resultDescOutlineTxt, resultShareTxt, resultShareOutlineTxt, popTitleOutlineTxt, popDescOutlineTxt, buttonSettings, buttonFullscreen, buttonSoundOn, buttonSoundOff, buttonMusicOn, buttonMusicOff, buttonExit;
$[a0_0x30c371(0x15c)] = {};
var themeContainer, tutorialContainer, statusContainer, mapContainer, mapMoveContainer, floorContainer, powerContainer, objectsContainer, bombContainer, explosionContainer, bombStatusContainer, bombIconContainer, mapStatusContainer, enemyStatusContainer, scoreStatusContainer, timerStatusContainer, touchContainer, touchMoveContainer, buttonStart, buttonArrowL, buttonArrowR, buttonSelect, themeTxt, itemTutorial, itemTutorial1, itemTutorial2, itemTutorial3, buttonTutorialL, buttonTutorialR, buttonNext, timerTxt, timerRedTxt, enemyTxt, pointTxt, bombTxt, itemStatus, statusTxt, buttonBomb, buttonDetanator, buttonTouch, buttonTouchMove, mapMask, mapBorder, resultShadowDescTxt;
$[a0_0x30c371(0x11a)] = {};

function buildGameCanvas() {
    var _0x317f78 = a0_0x30c371;
    canvasContainer = new createjs[(_0x317f78(0x260))](), mainContainer = new createjs['Container'](), gameContainer = new createjs[(_0x317f78(0x260))](), exitContainer = new createjs[(_0x317f78(0x260))](), resultContainer = new createjs[(_0x317f78(0x260))](), shareContainer = new createjs[(_0x317f78(0x260))](), shareSaveContainer = new createjs[(_0x317f78(0x260))](), socialContainer = new createjs[(_0x317f78(0x260))](), themeContainer = new createjs[(_0x317f78(0x260))](), tutorialContainer = new createjs['Container'](), statusContainer = new createjs[(_0x317f78(0x260))](), mapContainer = new createjs[(_0x317f78(0x260))](), mapMoveContainer = new createjs[(_0x317f78(0x260))](), floorContainer = new createjs[(_0x317f78(0x260))](), powerContainer = new createjs['Container'](), objectsContainer = new createjs[(_0x317f78(0x260))](), bombContainer = new createjs['Container'](), explosionContainer = new createjs[(_0x317f78(0x260))](), bombStatusContainer = new createjs[(_0x317f78(0x260))](), bombIconContainer = new createjs[(_0x317f78(0x260))](), mapStatusContainer = new createjs[(_0x317f78(0x260))](), enemyStatusContainer = new createjs[(_0x317f78(0x260))](), scoreStatusContainer = new createjs[(_0x317f78(0x260))](), timerStatusContainer = new createjs[(_0x317f78(0x260))](), touchContainer = new createjs[(_0x317f78(0x260))](), touchMoveContainer = new createjs[(_0x317f78(0x260))](), bg = new createjs[(_0x317f78(0x15f))](loader[_0x317f78(0x201)](_0x317f78(0x1f1))), bgP = new createjs[(_0x317f78(0x15f))](loader[_0x317f78(0x201)]('backgroundP')), logo = new createjs[(_0x317f78(0x15f))](loader['getResult'](_0x317f78(0x1b3))), logoP = new createjs[(_0x317f78(0x15f))](loader[_0x317f78(0x201)](_0x317f78(0x14f))), buttonStart = new createjs['Bitmap'](loader[_0x317f78(0x201)](_0x317f78(0x1c6))), centerReg(buttonStart), buttonArrowL = new createjs['Bitmap'](loader[_0x317f78(0x201)](_0x317f78(0x236))), centerReg(buttonArrowL), buttonArrowR = new createjs[(_0x317f78(0x15f))](loader['getResult'](_0x317f78(0x10e))), centerReg(buttonArrowR), buttonSelect = new createjs['Bitmap'](loader['getResult']('buttonSelect')), centerReg(buttonSelect), themeTxt = new createjs[(_0x317f78(0x1d9))](), themeTxt[_0x317f78(0x179)] = _0x317f78(0x1e0), themeTxt[_0x317f78(0x11e)] = _0x317f78(0x110), themeTxt[_0x317f78(0x169)] = _0x317f78(0x245), themeTxt[_0x317f78(0x138)] = _0x317f78(0x148), themeTxt[_0x317f78(0x1ea)] = textStrings['theme'], themeContainer['addChild'](themeTxt, buttonArrowL, buttonArrowR, buttonSelect), itemTutorial = new createjs[(_0x317f78(0x15f))](loader[_0x317f78(0x201)]('itemTutorial')), centerReg(itemTutorial), itemTutorial1 = new createjs[(_0x317f78(0x15f))](loader['getResult'](_0x317f78(0x159))), centerReg(itemTutorial1), itemTutorial2 = new createjs[(_0x317f78(0x15f))](loader[_0x317f78(0x201)](_0x317f78(0xab))), centerReg(itemTutorial2), itemTutorial3 = new createjs['Bitmap'](loader['getResult']('itemTutorial3')), centerReg(itemTutorial3), buttonTutorialL = new createjs[(_0x317f78(0x15f))](loader[_0x317f78(0x201)](_0x317f78(0x236))), centerReg(buttonTutorialL), buttonTutorialR = new createjs[(_0x317f78(0x15f))](loader[_0x317f78(0x201)](_0x317f78(0x10e))), centerReg(buttonTutorialR), buttonNext = new createjs[(_0x317f78(0x15f))](loader[_0x317f78(0x201)](_0x317f78(0x145))), centerReg(buttonNext), buttonTutorialL['x'] = -0x154, buttonTutorialR['x'] = 0x154, buttonNext['y'] = 0xe6, tutorialContainer[_0x317f78(0x200)](itemTutorial, itemTutorial1, itemTutorial2, itemTutorial3, buttonTutorialL, buttonTutorialR, buttonNext), timerTxt = new createjs[(_0x317f78(0x1d9))](), timerTxt[_0x317f78(0x179)] = _0x317f78(0x205), timerTxt[_0x317f78(0x11e)] = '#fff', timerTxt[_0x317f78(0x169)] = _0x317f78(0x166), timerTxt[_0x317f78(0x138)] = _0x317f78(0x148), timerRedTxt = new createjs['Text'](), timerRedTxt[_0x317f78(0x179)] = _0x317f78(0x205), timerRedTxt['color'] = _0x317f78(0x1e1), timerRedTxt[_0x317f78(0x169)] = _0x317f78(0x166), timerRedTxt[_0x317f78(0x138)] = 'alphabetic', timerStatusContainer[_0x317f78(0x200)](timerTxt, timerRedTxt), enemyTxt = new createjs[(_0x317f78(0x1d9))](), enemyTxt['font'] = '35px\x20upheaval_tt_brkregular', enemyTxt[_0x317f78(0x11e)] = '#fff', enemyTxt['textAlign'] = _0x317f78(0x19d), enemyTxt[_0x317f78(0x138)] = _0x317f78(0x148), enemyStatusContainer[_0x317f78(0x200)](enemyTxt), pointTxt = new createjs[(_0x317f78(0x1d9))](), pointTxt['font'] = '35px\x20upheaval_tt_brkregular', pointTxt[_0x317f78(0x11e)] = '#fff', pointTxt[_0x317f78(0x169)] = _0x317f78(0x245), pointTxt[_0x317f78(0x138)] = _0x317f78(0x148), scoreStatusContainer['addChild'](pointTxt), bombTxt = new createjs['Text'](), bombTxt[_0x317f78(0x179)] = _0x317f78(0x205), bombTxt[_0x317f78(0x11e)] = '#fff', bombTxt['textAlign'] = _0x317f78(0x166), bombTxt['textBaseline'] = _0x317f78(0x148), bombStatusContainer[_0x317f78(0x200)](bombIconContainer, bombTxt), itemStatus = new createjs[(_0x317f78(0x15f))](loader[_0x317f78(0x201)]('itemStatus')), centerReg(itemStatus), statusTxt = new createjs[(_0x317f78(0x1d9))](), statusTxt[_0x317f78(0x179)] = _0x317f78(0x205), statusTxt[_0x317f78(0x11e)] = _0x317f78(0x110), statusTxt['textAlign'] = _0x317f78(0x245), statusTxt[_0x317f78(0x138)] = 'alphabetic', statusTxt['y'] = 0x8, statusContainer[_0x317f78(0x200)](itemStatus, statusTxt), buttonBomb = new createjs['Bitmap'](loader['getResult']('buttonBomb')), centerReg(buttonBomb), buttonDetanator = new createjs[(_0x317f78(0x15f))](loader[_0x317f78(0x201)](_0x317f78(0x22c))), centerReg(buttonDetanator), buttonTouch = new createjs['Bitmap'](loader['getResult']('buttonTouch')), centerReg(buttonTouch), buttonTouchMove = new createjs[(_0x317f78(0x15f))](loader[_0x317f78(0x201)](_0x317f78(0x170))), centerReg(buttonTouchMove), buttonTouch = new createjs['Bitmap'](loader[_0x317f78(0x201)](_0x317f78(0xaf))), centerReg(buttonTouch), touchMoveContainer[_0x317f78(0x200)](buttonTouch);
    var _0x3533ca = ['Up', _0x317f78(0x1e5), 'Down', _0x317f78(0x18b)],
        _0x42ffe4 = [0x0, 0x5a, 0xb4, 0x10e];
    if (gameSettings[_0x317f78(0x1eb)]) {
        buttonTouchMove = new createjs[(_0x317f78(0x15f))](loader['getResult']('buttonTouchMove')), centerReg(buttonTouchMove);
        for (var _0x44e1c1 = 0x0; _0x44e1c1 < _0x3533ca[_0x317f78(0xcd)]; _0x44e1c1++) {
            $[_0x317f78(0x11a)][_0x3533ca[_0x44e1c1]] = new createjs[(_0x317f78(0x15f))](loader[_0x317f78(0x201)](_0x317f78(0x14e))), centerReg($['touch'][_0x3533ca[_0x44e1c1]]), $[_0x317f78(0x11a)][_0x3533ca[_0x44e1c1]][_0x317f78(0xbc)] = ![], $[_0x317f78(0x11a)]['arrow' + _0x3533ca[_0x44e1c1]] = new createjs[(_0x317f78(0x15f))](loader[_0x317f78(0x201)](_0x317f78(0x216))), centerReg($[_0x317f78(0x11a)]['arrow' + _0x3533ca[_0x44e1c1]]), $[_0x317f78(0x11a)][_0x3533ca[_0x44e1c1]]['regY'] = $['touch']['arrow' + _0x3533ca[_0x44e1c1]][_0x317f78(0x1e9)] = $[_0x317f78(0x11a)][_0x3533ca[_0x44e1c1]]['image'][_0x317f78(0xdb)], $[_0x317f78(0x11a)][_0x317f78(0x24a) + _0x3533ca[_0x44e1c1]]['rotation'] = $[_0x317f78(0x11a)][_0x3533ca[_0x44e1c1]][_0x317f78(0x195)] = _0x42ffe4[_0x44e1c1], createHitarea($[_0x317f78(0x11a)][_0x317f78(0x24a) + _0x3533ca[_0x44e1c1]]), touchMoveContainer[_0x317f78(0x200)]($['touch'][_0x3533ca[_0x44e1c1]], $[_0x317f78(0x11a)][_0x317f78(0x24a) + _0x3533ca[_0x44e1c1]]);
        }
        touchMoveContainer[_0x317f78(0x200)](buttonTouchMove);
    } else {
        var _0x4df6ff = 0x28;
        for (var _0x44e1c1 = 0x0; _0x44e1c1 < _0x3533ca[_0x317f78(0xcd)]; _0x44e1c1++) {
            $[_0x317f78(0x11a)][_0x3533ca[_0x44e1c1]] = new createjs[(_0x317f78(0x15f))](loader['getResult']('buttonTouch' + _0x3533ca[_0x44e1c1] + _0x317f78(0x127))), centerReg($[_0x317f78(0x11a)][_0x3533ca[_0x44e1c1]]), $[_0x317f78(0x11a)][_0x3533ca[_0x44e1c1]][_0x317f78(0xbc)] = ![], $[_0x317f78(0x11a)][_0x317f78(0x24a) + _0x3533ca[_0x44e1c1]] = new createjs[(_0x317f78(0x15f))](loader[_0x317f78(0x201)]('buttonTouch' + _0x3533ca[_0x44e1c1])), centerReg($['touch'][_0x317f78(0x24a) + _0x3533ca[_0x44e1c1]]);
            if (_0x44e1c1 == 0x0) $[_0x317f78(0x11a)][_0x3533ca[_0x44e1c1]]['y'] = $[_0x317f78(0x11a)][_0x317f78(0x24a) + _0x3533ca[_0x44e1c1]]['y'] = -_0x4df6ff;
            else {
                if (_0x44e1c1 == 0x1) $['touch'][_0x3533ca[_0x44e1c1]]['x'] = $[_0x317f78(0x11a)][_0x317f78(0x24a) + _0x3533ca[_0x44e1c1]]['x'] = _0x4df6ff;
                else {
                    if (_0x44e1c1 == 0x2) $['touch'][_0x3533ca[_0x44e1c1]]['y'] = $[_0x317f78(0x11a)][_0x317f78(0x24a) + _0x3533ca[_0x44e1c1]]['y'] = _0x4df6ff;
                    else _0x44e1c1 == 0x3 && ($[_0x317f78(0x11a)][_0x3533ca[_0x44e1c1]]['x'] = $[_0x317f78(0x11a)]['arrow' + _0x3533ca[_0x44e1c1]]['x'] = -_0x4df6ff);
                }
            }
            createHitarea($[_0x317f78(0x11a)][_0x317f78(0x24a) + _0x3533ca[_0x44e1c1]]), touchMoveContainer[_0x317f78(0x200)]($['touch'][_0x3533ca[_0x44e1c1]], $['touch'][_0x317f78(0x24a) + _0x3533ca[_0x44e1c1]]);
        }
    }
    touchContainer[_0x317f78(0x200)](buttonBomb, buttonDetanator, touchMoveContainer), mapMask = new createjs[(_0x317f78(0x1f2))](), mapBorder = new createjs['Shape'](), itemResult = new createjs[(_0x317f78(0x15f))](loader['getResult']('itemPop')), itemResultP = new createjs[(_0x317f78(0x15f))](loader[_0x317f78(0x201)](_0x317f78(0x15e))), buttonContinue = new createjs[(_0x317f78(0x15f))](loader[_0x317f78(0x201)](_0x317f78(0x113))), centerReg(buttonContinue), resultShareTxt = new createjs['Text'](), resultShareTxt[_0x317f78(0x179)] = _0x317f78(0x205), resultShareTxt[_0x317f78(0x11e)] = _0x317f78(0x110), resultShareTxt['textAlign'] = _0x317f78(0x245), resultShareTxt[_0x317f78(0x138)] = 'alphabetic', resultShareTxt[_0x317f78(0x1ea)] = textStrings[_0x317f78(0x15c)], resultTitleTxt = new createjs[(_0x317f78(0x1d9))](), resultTitleTxt['font'] = _0x317f78(0x1e0), resultTitleTxt[_0x317f78(0x11e)] = _0x317f78(0x110), resultTitleTxt['textAlign'] = _0x317f78(0x245), resultTitleTxt['textBaseline'] = _0x317f78(0x148), resultTitleTxt[_0x317f78(0x1ea)] = textStrings[_0x317f78(0xd5)], resultDescTxt = new createjs['Text'](), resultDescTxt['font'] = _0x317f78(0x142), resultDescTxt[_0x317f78(0x11e)] = '#FFBF00', resultDescTxt[_0x317f78(0x169)] = 'center', resultDescTxt[_0x317f78(0x138)] = 'alphabetic', resultDescTxt[_0x317f78(0x1ea)] = '', resultShadowDescTxt = new createjs[(_0x317f78(0x1d9))](), resultShadowDescTxt['font'] = '95px\x20upheaval_tt_brkregular', resultShadowDescTxt[_0x317f78(0x11e)] = '#D50200', resultShadowDescTxt[_0x317f78(0x169)] = _0x317f78(0x245), resultShadowDescTxt[_0x317f78(0x138)] = _0x317f78(0x148), resultShadowDescTxt[_0x317f78(0x1ea)] = '', socialContainer[_0x317f78(0xbc)] = ![], socialContainer[_0x317f78(0xb5)] = 0.9, shareContainer[_0x317f78(0x200)](resultShareTxt, socialContainer);
    if (shareSettings[_0x317f78(0xfb)]) {
        var _0x191504 = {
            'x': 0x0,
            'y': 0x2d,
            'spaceX': 0x41
        };
        _0x191504['x'] = -((shareSettings[_0x317f78(0x1e7)][_0x317f78(0xcd)] - 0x1) * _0x191504[_0x317f78(0x234)] / 0x2);
        for (let _0x5103c5 = 0x0; _0x5103c5 < shareSettings['options'][_0x317f78(0xcd)]; _0x5103c5++) {
            var _0x2e464d = shareSettings['options'][_0x5103c5],
                _0x50ecfb = String(_0x2e464d[0x0])[_0x317f78(0x13d)]() + String(_0x2e464d)[_0x317f78(0x12a)](0x1);
            $['share'][_0x317f78(0xf5) + _0x5103c5] = new createjs['Bitmap'](loader[_0x317f78(0x201)](_0x317f78(0xf5) + _0x50ecfb)), $['share'][_0x317f78(0xf5) + _0x5103c5]['shareOption'] = _0x2e464d, centerReg($['share'][_0x317f78(0xf5) + _0x5103c5]), $['share'][_0x317f78(0xf5) + _0x5103c5]['x'] = _0x191504['x'], $['share'][_0x317f78(0xf5) + _0x5103c5]['y'] = _0x191504['y'], socialContainer['addChild']($[_0x317f78(0x15c)][_0x317f78(0xf5) + _0x5103c5]), _0x191504['x'] += _0x191504[_0x317f78(0x234)];
        }
    }
    typeof toggleScoreboardSave == _0x317f78(0x1c1) && (buttonSave = new createjs[(_0x317f78(0x15f))](loader[_0x317f78(0x201)](_0x317f78(0x165))), centerReg(buttonSave), buttonSave['y'] = buttonSave[_0x317f78(0x254)][_0x317f78(0xdb)] / 0x2 + 0xa, shareSaveContainer[_0x317f78(0x200)](buttonSave)), buttonFullscreen = new createjs[(_0x317f78(0x15f))](loader[_0x317f78(0x201)](_0x317f78(0x1ae))), centerReg(buttonFullscreen), buttonSoundOn = new createjs[(_0x317f78(0x15f))](loader[_0x317f78(0x201)](_0x317f78(0x1a2))), centerReg(buttonSoundOn), buttonSoundOff = new createjs[(_0x317f78(0x15f))](loader['getResult'](_0x317f78(0x146))), centerReg(buttonSoundOff), buttonSoundOn[_0x317f78(0xbc)] = ![], buttonMusicOn = new createjs['Bitmap'](loader[_0x317f78(0x201)](_0x317f78(0x1e2))), centerReg(buttonMusicOn), buttonMusicOff = new createjs[(_0x317f78(0x15f))](loader[_0x317f78(0x201)](_0x317f78(0x10b))), centerReg(buttonMusicOff), buttonMusicOn[_0x317f78(0xbc)] = ![], buttonExit = new createjs[(_0x317f78(0x15f))](loader[_0x317f78(0x201)](_0x317f78(0xb8))), centerReg(buttonExit), buttonSettings = new createjs[(_0x317f78(0x15f))](loader[_0x317f78(0x201)]('buttonSettings')), centerReg(buttonSettings), createHitarea(buttonFullscreen), createHitarea(buttonSoundOn), createHitarea(buttonSoundOff), createHitarea(buttonMusicOn), createHitarea(buttonMusicOff), createHitarea(buttonExit), createHitarea(buttonSettings), optionsContainer = new createjs[(_0x317f78(0x260))](), optionsContainer[_0x317f78(0x200)](buttonFullscreen, buttonSoundOn, buttonSoundOff, buttonMusicOn, buttonMusicOff, buttonExit), optionsContainer[_0x317f78(0xbc)] = ![], itemExit = new createjs[(_0x317f78(0x15f))](loader[_0x317f78(0x201)]('itemPop')), itemExitP = new createjs[(_0x317f78(0x15f))](loader[_0x317f78(0x201)](_0x317f78(0x15e))), buttonConfirm = new createjs[(_0x317f78(0x15f))](loader[_0x317f78(0x201)](_0x317f78(0x212))), centerReg(buttonConfirm), buttonCancel = new createjs[(_0x317f78(0x15f))](loader[_0x317f78(0x201)](_0x317f78(0x263))), centerReg(buttonCancel), popTitleTxt = new createjs['Text'](), popTitleTxt[_0x317f78(0x179)] = _0x317f78(0x1e0), popTitleTxt[_0x317f78(0x11e)] = _0x317f78(0x110), popTitleTxt[_0x317f78(0x169)] = _0x317f78(0x245), popTitleTxt[_0x317f78(0x138)] = 'alphabetic', popTitleTxt['text'] = textStrings[_0x317f78(0x100)], popDescTxt = new createjs[(_0x317f78(0x1d9))](), popDescTxt[_0x317f78(0x179)] = _0x317f78(0x205), popDescTxt[_0x317f78(0x119)] = 0x28, popDescTxt[_0x317f78(0x11e)] = _0x317f78(0x110), popDescTxt['textAlign'] = _0x317f78(0x245), popDescTxt[_0x317f78(0x138)] = _0x317f78(0x148), popDescTxt[_0x317f78(0x1ea)] = textStrings[_0x317f78(0x244)], exitContainer[_0x317f78(0x200)](itemExit, itemExitP, popTitleTxt, popDescTxt, buttonConfirm, buttonCancel), exitContainer[_0x317f78(0xbc)] = ![], guideline = new createjs['Shape'](), mainContainer[_0x317f78(0x200)](logo, logoP, buttonStart), mapMoveContainer[_0x317f78(0x200)](floorContainer, powerContainer, bombContainer, objectsContainer, explosionContainer), mapContainer[_0x317f78(0x200)](mapMoveContainer), gameContainer[_0x317f78(0x200)](mapStatusContainer, timerStatusContainer, bombStatusContainer, enemyStatusContainer, scoreStatusContainer, statusContainer, touchContainer), resultContainer[_0x317f78(0x200)](itemResult, itemResultP, buttonContinue, resultTitleTxt, resultShadowDescTxt, resultDescTxt, shareContainer, shareSaveContainer), canvasContainer[_0x317f78(0x200)](bg, bgP, mainContainer, mapBorder, mapContainer, themeContainer, tutorialContainer, gameContainer, resultContainer, exitContainer, optionsContainer, buttonSettings, guideline), stage[_0x317f78(0x200)](canvasContainer), changeViewport(viewport[_0x317f78(0x250)]), resizeGameFunc();
}

function changeViewport(_0x4d68fb) {
    _0x4d68fb ? (stageW = landscapeSize['w'], stageH = landscapeSize['h'], contentW = landscapeSize['cW'], contentH = landscapeSize['cH']) : (stageW = portraitSize['w'], stageH = portraitSize['h'], contentW = portraitSize['cW'], contentH = portraitSize['cH']), canvasW = stageW, canvasH = stageH, changeCanvasViewport();
}

function changeCanvasViewport() {
    var _0x9bd372 = a0_0x30c371;
    canvasContainer != undefined && (stage['scaleX'] = stage[_0x9bd372(0x128)] = dpr, safeZoneGuide && guideline[_0x9bd372(0x253)][_0x9bd372(0x23e)]()[_0x9bd372(0xaa)](0x2)[_0x9bd372(0x107)]('red')[_0x9bd372(0xf2)]((stageW - contentW) / 0x2, (stageH - contentH) / 0x2, contentW, contentH), viewport['isLandscape'] ? (bg[_0x9bd372(0xbc)] = !![], bgP[_0x9bd372(0xbc)] = ![], logo[_0x9bd372(0xbc)] = !![], logoP['visible'] = ![], buttonStart['x'] = canvasW / 0x2, buttonStart['y'] = canvasH / 0x64 * 0x4b, themeTxt['x'] = canvasW / 0x2, themeTxt['y'] = canvasH / 0x64 * 0x17, buttonArrowL['x'] = canvasW / 0x2 - 0x190, buttonArrowL['y'] = canvasH / 0x2, buttonArrowR['x'] = canvasW / 0x2 + 0x190, buttonArrowR['y'] = canvasH / 0x2, buttonSelect['x'] = canvasW / 0x2, buttonSelect['y'] = canvasH / 0x64 * 0x50, tutorialContainer['x'] = canvasW / 0x2, tutorialContainer['y'] = canvasH / 0x2, statusContainer['x'] = canvasW / 0x2, statusContainer['y'] = canvasH / 0x2, itemResult[_0x9bd372(0xbc)] = !![], itemResultP[_0x9bd372(0xbc)] = ![], buttonContinue['x'] = canvasW / 0x2, buttonContinue['y'] = canvasH / 0x64 * 0x44, shareContainer['x'] = shareSaveContainer['x'] = canvasW / 0x2, shareContainer['y'] = shareSaveContainer['y'] = canvasH / 0x64 * 0x30, resultTitleTxt['x'] = canvasW / 0x2, resultTitleTxt['y'] = canvasH / 0x64 * 0x20, resultDescTxt['x'] = canvasW / 0x2, resultDescTxt['y'] = canvasH / 0x64 * 0x2a, resultShadowDescTxt['x'] = resultDescTxt['x'], resultShadowDescTxt['y'] = resultDescTxt['y'] + 0x8, itemExit['visible'] = !![], itemExitP['visible'] = ![], buttonConfirm['x'] = canvasW / 0x2, buttonConfirm['y'] = canvasH / 0x64 * 0x38, buttonCancel['x'] = canvasW / 0x2, buttonCancel['y'] = canvasH / 0x64 * 0x44, popTitleTxt['x'] = canvasW / 0x2, popTitleTxt['y'] = canvasH / 0x64 * 0x20, popDescTxt['x'] = canvasW / 0x2, popDescTxt['y'] = canvasH / 0x64 * 0x29) : (bg[_0x9bd372(0xbc)] = ![], bgP[_0x9bd372(0xbc)] = !![], logo[_0x9bd372(0xbc)] = ![], logoP[_0x9bd372(0xbc)] = !![], buttonStart['x'] = canvasW / 0x2, buttonStart['y'] = canvasH / 0x64 * 0x4b, themeTxt['x'] = canvasW / 0x2, themeTxt['y'] = canvasH / 0x64 * 0x19, buttonArrowL['x'] = canvasW / 0x2 - 0xfa, buttonArrowL['y'] = canvasH / 0x2, buttonArrowR['x'] = canvasW / 0x2 + 0xfa, buttonArrowR['y'] = canvasH / 0x2, buttonSelect['x'] = canvasW / 0x2, buttonSelect['y'] = canvasH / 0x64 * 0x55, tutorialContainer['x'] = canvasW / 0x2, tutorialContainer['y'] = canvasH / 0x2, statusContainer['x'] = canvasW / 0x2, statusContainer['y'] = canvasH / 0x2, itemResult[_0x9bd372(0xbc)] = ![], itemResultP[_0x9bd372(0xbc)] = !![], buttonContinue['x'] = canvasW / 0x2, buttonContinue['y'] = canvasH / 0x64 * 0x40, shareContainer['x'] = shareSaveContainer['x'] = canvasW / 0x2, shareContainer['y'] = shareSaveContainer['y'] = canvasH / 0x64 * 0x31, resultTitleTxt['x'] = canvasW / 0x2, resultTitleTxt['y'] = canvasH / 0x64 * 0x26, resultDescTxt['x'] = canvasW / 0x2, resultDescTxt['y'] = canvasH / 0x64 * 0x2d, resultShadowDescTxt['x'] = resultDescTxt['x'], resultShadowDescTxt['y'] = resultDescTxt['y'] + 0x8, itemExit[_0x9bd372(0xbc)] = ![], itemExitP[_0x9bd372(0xbc)] = !![], buttonConfirm['x'] = canvasW / 0x2, buttonConfirm['y'] = canvasH / 0x64 * 0x37, buttonCancel['x'] = canvasW / 0x2, buttonCancel['y'] = canvasH / 0x64 * 0x40, popTitleTxt['x'] = canvasW / 0x2, popTitleTxt['y'] = canvasH / 0x64 * 0x26, popDescTxt['x'] = canvasW / 0x2, popDescTxt['y'] = canvasH / 0x64 * 0x2b));
}

function resizeCanvas() {
    var _0x3851a2 = a0_0x30c371;
    if (canvasContainer != undefined) {
        buttonSettings['x'] = canvasW - offset['x'] - 0x32, buttonSettings['y'] = offset['y'] + 0x2d;
        var _0x24d6ac = 0x3c,
            _0x1ee696 = 0x0;
        buttonSoundOn['x'] = buttonSoundOff['x'] = buttonSettings['x'], buttonSoundOn['y'] = buttonSoundOff['y'] = buttonSettings['y'] + _0x24d6ac, buttonSoundOn['x'] = buttonSoundOff['x'], buttonSoundOn['y'] = buttonSoundOff['y'] = buttonSettings['y'] + _0x24d6ac, typeof buttonMusicOn != _0x3851a2(0x11f) ? (buttonMusicOn['x'] = buttonMusicOff['x'] = buttonSettings['x'], buttonMusicOn['y'] = buttonMusicOff['y'] = buttonSettings['y'] + _0x24d6ac * 0x2, buttonMusicOn['x'] = buttonMusicOff['x'], buttonMusicOn['y'] = buttonMusicOff['y'] = buttonSettings['y'] + _0x24d6ac * 0x2, _0x1ee696 = 0x2) : _0x1ee696 = 0x1, buttonFullscreen['x'] = buttonSettings['x'], buttonFullscreen['y'] = buttonSettings['y'] + _0x24d6ac * (_0x1ee696 + 0x1), curPage == _0x3851a2(0xad) || curPage == _0x3851a2(0xc5) ? (buttonExit['visible'] = ![], buttonFullscreen['x'] = buttonSettings['x'], buttonFullscreen['y'] = buttonSettings['y'] + _0x24d6ac * (_0x1ee696 + 0x1)) : (buttonExit[_0x3851a2(0xbc)] = !![], buttonExit['x'] = buttonSettings['x'], buttonExit['y'] = buttonSettings['y'] + _0x24d6ac * (_0x1ee696 + 0x2)), gameSettings[_0x3851a2(0x24e)] ? (buttonBomb['x'] = offset['x'] + 0x64, buttonBomb['y'] = canvasH - offset['y'] - 0x82, buttonDetanator['x'] = buttonBomb['x'] + 0x6e, buttonDetanator['y'] = buttonBomb['y'], touchMoveContainer['x'] = canvasW - offset['x'] - 0x82, touchMoveContainer['y'] = canvasH - offset['y'] - 0x82) : (buttonBomb['x'] = canvasW + offset['x'] - 0x64, buttonBomb['y'] = canvasH - offset['y'] - 0x82, buttonDetanator['x'] = buttonBomb['x'] + 0x6e, buttonDetanator['y'] = buttonBomb['y'], touchMoveContainer['x'] = offset['x'] + 0x82, touchMoveContainer['y'] = canvasH - offset['y'] - 0x82), resizeMap();
    }
}

function removeGameCanvas() {
    var _0x197660 = a0_0x30c371;
    stage['autoClear'] = !![], stage['removeAllChildren'](), stage[_0x197660(0x13f)](), createjs[_0x197660(0x1c2)][_0x197660(0x238)](_0x197660(0x1a4), tick), createjs[_0x197660(0x1c2)][_0x197660(0x238)](_0x197660(0x1a4), stage);
}

function tick(_0x24d8d7) {
    updateGame(), stage['update'](_0x24d8d7);
}

function centerReg(_0x4123a0) {
    var _0x1f234c = a0_0x30c371;
    _0x4123a0[_0x1f234c(0x1cc)] = _0x4123a0[_0x1f234c(0x254)][_0x1f234c(0x12f)] / 0x2, _0x4123a0[_0x1f234c(0x1e9)] = _0x4123a0[_0x1f234c(0x254)][_0x1f234c(0xdb)] / 0x2;
}

function createHitarea(_0x1cc149) {
    var _0x11c830 = a0_0x30c371;
    _0x1cc149[_0x11c830(0x217)] = new createjs[(_0x11c830(0x1f2))](new createjs[(_0x11c830(0x1e3))]()[_0x11c830(0x20b)](_0x11c830(0xf4))['drawRect'](0x0, 0x0, _0x1cc149['image']['naturalWidth'], _0x1cc149['image']['naturalHeight']));
}
const themesArr = [{
        'design': {
            'src': a0_0x30c371(0x135),
            'extraHeight': 0x0
        },
        'bomb': {
            'src': a0_0x30c371(0x189),
            'extraHeight': 0x0
        },
        'explosion': {
            'src': a0_0x30c371(0x264),
            'extraHeight': 0x0
        },
        'player': {
            'src': 'assets/theme_character_01.png',
            'extraHeight': 0x0
        },
        'enemies': {
            'src': a0_0x30c371(0x16c),
            'extraHeight': 0x0
        },
        'powers': {
            'src': 'assets/theme_powers_01.png',
            'extraHeight': 0x0
        }
    }, {
        'design': {
            'src': a0_0x30c371(0x219),
            'extraHeight': 0x0
        },
        'bomb': {
            'src': a0_0x30c371(0x189),
            'extraHeight': 0x0
        },
        'explosion': {
            'src': a0_0x30c371(0x264),
            'extraHeight': 0x0
        },
        'player': {
            'src': a0_0x30c371(0x1e4),
            'extraHeight': 0x0
        },
        'enemies': {
            'src': a0_0x30c371(0x16c),
            'extraHeight': 0x0
        },
        'powers': {
            'src': a0_0x30c371(0x106),
            'extraHeight': 0x0
        }
    }, {
        'design': {
            'src': a0_0x30c371(0x1f3),
            'extraHeight': 0x0
        },
        'bomb': {
            'src': 'assets/theme_bomb_01.png',
            'extraHeight': 0x0
        },
        'explosion': {
            'src': a0_0x30c371(0x264),
            'extraHeight': 0x0
        },
        'player': {
            'src': 'assets/theme_character_02.png',
            'extraHeight': 0x0
        },
        'enemies': {
            'src': a0_0x30c371(0x16c),
            'extraHeight': 0x0
        },
        'powers': {
            'src': a0_0x30c371(0x106),
            'extraHeight': 0x0
        }
    }, {
        'design': {
            'src': a0_0x30c371(0xd1),
            'extraHeight': 0x0
        },
        'bomb': {
            'src': a0_0x30c371(0x189),
            'extraHeight': 0x0
        },
        'explosion': {
            'src': 'assets/theme_explosion_01.png',
            'extraHeight': 0x0
        },
        'player': {
            'src': a0_0x30c371(0x214),
            'extraHeight': 0x0
        },
        'enemies': {
            'src': a0_0x30c371(0x16c),
            'extraHeight': 0x0
        },
        'powers': {
            'src': a0_0x30c371(0x106),
            'extraHeight': 0x0
        }
    }, {
        'design': {
            'src': a0_0x30c371(0x206),
            'extraHeight': 0x14
        },
        'bomb': {
            'src': 'assets/theme_bomb_01.png',
            'extraHeight': 0x0
        },
        'explosion': {
            'src': a0_0x30c371(0x264),
            'extraHeight': 0x0
        },
        'player': {
            'src': 'assets/theme_character_04.png',
            'extraHeight': 0x14
        },
        'enemies': {
            'src': a0_0x30c371(0x247),
            'extraHeight': 0x14
        },
        'powers': {
            'src': a0_0x30c371(0x106),
            'extraHeight': 0x0
        }
    }, {
        'design': {
            'src': a0_0x30c371(0x11b),
            'extraHeight': 0x14
        },
        'bomb': {
            'src': a0_0x30c371(0x189),
            'extraHeight': 0x0
        },
        'explosion': {
            'src': a0_0x30c371(0x264),
            'extraHeight': 0x0
        },
        'player': {
            'src': a0_0x30c371(0x199),
            'extraHeight': 0x14
        },
        'enemies': {
            'src': a0_0x30c371(0x247),
            'extraHeight': 0x14
        },
        'powers': {
            'src': 'assets/theme_powers_01.png',
            'extraHeight': 0x0
        }
    }, {
        'design': {
            'src': a0_0x30c371(0xd3),
            'extraHeight': 0x14
        },
        'bomb': {
            'src': a0_0x30c371(0x189),
            'extraHeight': 0x0
        },
        'explosion': {
            'src': a0_0x30c371(0x264),
            'extraHeight': 0x0
        },
        'player': {
            'src': 'assets/theme_character_06.png',
            'extraHeight': 0x14
        },
        'enemies': {
            'src': a0_0x30c371(0x247),
            'extraHeight': 0x14
        },
        'powers': {
            'src': a0_0x30c371(0x106),
            'extraHeight': 0x0
        }
    }],
    enemiesArr = [{
        'speed': 0x1,
        'walkThroughBrick': ![],
        'score': 0x64
    }, {
        'speed': 0x2,
        'walkThroughBrick': ![],
        'score': 0x78
    }, {
        'speed': 0x2,
        'walkThroughBrick': !![],
        'score': 0x96
    }],
    powersArr = [{
        'speed': 0x0,
        'bombRange': 0x0,
        'bomb': 0x1,
        'bombThroughBrick': ![],
        'walkThroughBrick': ![],
        'detonator': ![],
        'fireShield': ![],
        'bombShield': ![],
        'desc': a0_0x30c371(0x1f7)
    }, {
        'speed': 0x0,
        'bombRange': 0x1,
        'bomb': 0x0,
        'bombThroughBrick': ![],
        'walkThroughBrick': ![],
        'detonator': ![],
        'fireShield': ![],
        'bombShield': ![],
        'desc': a0_0x30c371(0x192)
    }, {
        'speed': 0x0,
        'bombRange': 0x0,
        'bomb': 0x0,
        'bombThroughBrick': ![],
        'walkThroughBrick': !![],
        'detonator': ![],
        'fireShield': ![],
        'bombShield': ![],
        'desc': a0_0x30c371(0x176)
    }, {
        'speed': 0x1,
        'bombRange': 0x0,
        'bomb': 0x0,
        'bombThroughBrick': ![],
        'walkThroughBrick': ![],
        'detonator': ![],
        'fireShield': ![],
        'bombShield': ![],
        'desc': a0_0x30c371(0x1ec)
    }, {
        'speed': 0x0,
        'bombRange': 0x0,
        'bomb': 0x0,
        'bombThroughBrick': ![],
        'walkThroughBrick': ![],
        'detonator': ![],
        'fireShield': ![],
        'bombShield': ![],
        'desc': a0_0x30c371(0xfa)
    }, {
        'speed': 0x0,
        'bombRange': 0x0,
        'bomb': 0x0,
        'bombThroughBrick': ![],
        'walkThroughBrick': ![],
        'detonator': !![],
        'fireShield': ![],
        'bombShield': ![],
        'desc': a0_0x30c371(0x1af)
    }, {
        'speed': 0x0,
        'bombRange': 0x0,
        'bomb': 0x0,
        'bombThroughBrick': ![],
        'walkThroughBrick': ![],
        'detonator': ![],
        'fireShield': !![],
        'bombShield': ![],
        'desc': a0_0x30c371(0x13e)
    }, {
        'speed': 0x0,
        'bombRange': 0x0,
        'bomb': 0x0,
        'bombThroughBrick': ![],
        'walkThroughBrick': ![],
        'detonator': ![],
        'fireShield': ![],
        'bombShield': !![],
        'desc': a0_0x30c371(0xf8)
    }],
    stageArr = [{
        'column': 0xb,
        'row': 0x9,
        'countdown': 0xea60,
        'bricks': 0x14,
        'bomb': 0x1,
        'bombRange': 0x1,
        'enemies': [0x0, 0x0, 0x0, 0x0],
        'powers': [0x0, 0x0, 0x1, 0x1, 0x2, 0x3]
    }, {
        'column': 0xb,
        'row': 0x9,
        'countdown': 0xea60,
        'bricks': 0x14,
        'bomb': 0x2,
        'bombRange': 0x1,
        'enemies': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
        'powers': [0x0, 0x0, 0x1, 0x1, 0x2, 0x3]
    }, {
        'column': 0xd,
        'row': 0x9,
        'countdown': 0xea60,
        'bricks': 0x14,
        'bomb': 0x2,
        'bombRange': 0x1,
        'enemies': [0x0, 0x0, 0x0, 0x0, 0x1, 0x1],
        'powers': [0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x2, 0x3, 0x4]
    }, {
        'column': 0xd,
        'row': 0x9,
        'countdown': 0xea60,
        'bricks': 0x14,
        'bomb': 0x3,
        'bombRange': 0x1,
        'enemies': [0x0, 0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x1],
        'powers': [0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x2, 0x3, 0x4]
    }, {
        'column': 0xf,
        'row': 0x9,
        'countdown': 0xea60,
        'bricks': 0x19,
        'bomb': 0x3,
        'bombRange': 0x1,
        'enemies': [0x0, 0x0, 0x0, 0x1, 0x1, 0x2],
        'powers': [0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x2, 0x3, 0x4, 0x5]
    }, {
        'column': 0xf,
        'row': 0x9,
        'countdown': 0xea60,
        'bricks': 0x1e,
        'bomb': 0x3,
        'bombRange': 0x1,
        'enemies': [0x0, 0x0, 0x0, 0x1, 0x1, 0x2, 0x2],
        'powers': [0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x2, 0x3, 0x4, 0x5]
    }, {
        'column': 0x11,
        'row': 0x9,
        'countdown': 0xea60,
        'bricks': 0x1e,
        'bomb': 0x3,
        'bombRange': 0x1,
        'enemies': [0x0, 0x0, 0x1, 0x1, 0x2, 0x2, 0x2],
        'powers': [0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7]
    }, {
        'column': 0x11,
        'row': 0x9,
        'countdown': 0xea60,
        'bricks': 0x1e,
        'bomb': 0x4,
        'bombRange': 0x1,
        'enemies': [0x0, 0x1, 0x1, 0x2, 0x2, 0x2, 0x2],
        'powers': [0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7]
    }, {
        'column': 0x13,
        'row': 0xb,
        'countdown': 0x1d4c0,
        'bricks': 0x28,
        'bomb': 0x5,
        'bombRange': 0x1,
        'enemies': [0x0, 0x0, 0x1, 0x1, 0x1, 0x2, 0x2, 0x2, 0x2],
        'powers': [0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7]
    }, {
        'column': 0x13,
        'row': 0xb,
        'countdown': 0x1d4c0,
        'bricks': 0x28,
        'bomb': 0x5,
        'bombRange': 0x1,
        'enemies': [0x2, 0x2, 0x2, 0x2, 0x2, 0x2, 0x2, 0x2, 0x2, 0x2, 0x2, 0x2],
        'powers': [0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7]
    }],
    gameSettings = {
        'gridSize': 0x32,
        'playerSpeed': 0x3,
        'moveRange': 0xf,
        'showScreenControl': !![],
        'screenControlScale': 0x1,
        'screenControlStick': ![],
        'screenControlSide': !![],
        'screenControlAlpha': 0.6,
        'keyboard': {
            'up': [0x57, 0x26],
            'left': [0x41, 0x25],
            'right': [0x44, 0x27],
            'down': [0x53, 0x28],
            'bomb': [0x5a],
            'detonator': [0x58]
        },
        'brickScore': 0xa
    },
    textStrings = {
        'theme': a0_0x30c371(0x202),
        'stage': a0_0x30c371(0x1d8),
        'point': a0_0x30c371(0xef),
        'bomb': 'x\x20[NUMBER]',
        'enemies': a0_0x30c371(0x18d),
        'timer': 'TIME\x20:\x20[NUMBER]',
        'timesup': a0_0x30c371(0x19b),
        'gameover': a0_0x30c371(0x1fc),
        'complete': 'STAGE\x20CLEAR',
        'exitTitle': 'EXIT\x20GAME',
        'exitMessage': a0_0x30c371(0x1ff),
        'share': '',
        'resultTitle': 'GAME\x20OVER',
        'resultDesc': a0_0x30c371(0xef)
    },
    shareSettings = {
        'enable': !![],
        'options': [a0_0x30c371(0x21d), a0_0x30c371(0xba), a0_0x30c371(0xfe), a0_0x30c371(0x14b), a0_0x30c371(0x17e), a0_0x30c371(0x1de)],
        'shareTitle': a0_0x30c371(0xe0),
        'shareText': a0_0x30c371(0x115),
        'customScore': !![],
        'gtag': !![]
    },
    playerData = {
        'speed': 0x0,
        'score': 0x0,
        'level': 0x0,
        'bomb': 0x1,
        'bombRange': 0x1,
        'bombThroughBrick': ![],
        'detonator': ![]
    },
    gameData = {
        'paused': !![],
        'themeNum': 0x0,
        'control': ![],
        'settings': {},
        'map': [],
        'dir': '',
        'bomb': ![],
        'bomb': [],
        'enemies': [],
        'complete': ![],
        'tutorial': 0x1
    },
    tweenData = {
        'score': 0x0,
        'tweenScore': 0x0
    },
    timeData = {
        'enable': ![],
        'startDate': null,
        'nowDate': null,
        'timer': 0x0,
        'oldTimer': 0x0,
        'countdown': 0x0
    };

function buildGameButton() {
    var _0x45694c = a0_0x30c371;
    $(window)[_0x45694c(0x104)](function() {
        var _0x33c493 = _0x45694c;
        !buttonSoundOn[_0x33c493(0xbc)] && toggleSoundInMute(![]), typeof buttonMusicOn != _0x33c493(0x11f) && (!buttonMusicOn['visible'] && toggleMusicInMute(![]));
    }), $(window)[_0x45694c(0x1c4)](function() {
        var _0x563b7d = _0x45694c;
        !buttonSoundOn[_0x563b7d(0xbc)] && toggleSoundInMute(!![]), typeof buttonMusicOn != _0x563b7d(0x11f) && (!buttonMusicOn[_0x563b7d(0xbc)] && toggleMusicInMute(!![]));
    });
    audioOn && (muteSoundOn && toggleSoundMute(!![]), muteMusicOn && toggleMusicMute(!![]));
    if (!isDesktop) {} else {
        var _0x180141 = window['location'] != window[_0x45694c(0x1be)][_0x45694c(0x224)] ? !![] : ![];
        _0x180141 ? (this[_0x45694c(0xe3)][_0x45694c(0x223)] = keydown, this['document']['onkeyup'] = keyup, $(window)['blur'](function() {
            appendFocusFrame();
        }), appendFocusFrame()) : (this[_0x45694c(0xe3)][_0x45694c(0x223)] = keydown, this['document']['onkeyup'] = keyup);
    }
    buttonStart[_0x45694c(0xb3)] = _0x45694c(0x14a), buttonStart[_0x45694c(0x20f)](_0x45694c(0x203), function(_0x1f31e5) {
        var _0x60bbc8 = _0x45694c;
        playSound(_0x60bbc8(0x112)), goPage(_0x60bbc8(0x1cb));
    }), buttonArrowL[_0x45694c(0xb3)] = _0x45694c(0x14a), buttonArrowL['addEventListener'](_0x45694c(0x203), function(_0x1fc7fb) {
        var _0x5c6b30 = _0x45694c;
        playSound(_0x5c6b30(0x112)), toggleTheme(![]);
    }), buttonArrowR[_0x45694c(0xb3)] = _0x45694c(0x14a), buttonArrowR[_0x45694c(0x20f)]('click', function(_0x1bc3f1) {
        playSound('soundButton'), toggleTheme(!![]);
    }), buttonSelect[_0x45694c(0xb3)] = 'pointer', buttonSelect[_0x45694c(0x20f)](_0x45694c(0x203), function(_0x35f3a9) {
        var _0x26f6d3 = _0x45694c;
        playSound(_0x26f6d3(0x112)), goPage(_0x26f6d3(0xe6));
    }), buttonTutorialL['cursor'] = _0x45694c(0x14a), buttonTutorialL['addEventListener']('click', function(_0x21091b) {
        var _0x42cbb8 = _0x45694c;
        playSound(_0x42cbb8(0x112)), toggleTutorial(![]);
    }), buttonTutorialR[_0x45694c(0xb3)] = _0x45694c(0x14a), buttonTutorialR[_0x45694c(0x20f)](_0x45694c(0x203), function(_0x32c1f7) {
        var _0x1b9d58 = _0x45694c;
        playSound(_0x1b9d58(0x112)), toggleTutorial(!![]);
    }), buttonNext[_0x45694c(0xb3)] = 'pointer', buttonNext[_0x45694c(0x20f)](_0x45694c(0x203), function(_0x149aaa) {
        var _0x1f5571 = _0x45694c;
        playSound('soundButton'), goPage(_0x1f5571(0x124));
    }), itemExit['addEventListener'](_0x45694c(0x203), function(_0x27e08f) {}), buttonContinue[_0x45694c(0xb3)] = _0x45694c(0x14a), buttonContinue[_0x45694c(0x20f)](_0x45694c(0x203), function(_0x10c6b9) {
        var _0x635236 = _0x45694c;
        playSound(_0x635236(0x112)), goPage(_0x635236(0xad));
    });
    if (shareSettings[_0x45694c(0xfb)]) {
        for (let _0x5f10ff = 0x0; _0x5f10ff < shareSettings['options'][_0x45694c(0xcd)]; _0x5f10ff++) {
            $['share'][_0x45694c(0xf5) + _0x5f10ff]['cursor'] = _0x45694c(0x14a), $[_0x45694c(0x15c)][_0x45694c(0xf5) + _0x5f10ff]['addEventListener'](_0x45694c(0x203), function(_0x28b3bf) {
                var _0x3b3610 = _0x45694c;
                shareLinks(_0x28b3bf['target'][_0x3b3610(0x154)], addCommas(playerData['score']));
            });
        }
    }
    buttonSoundOff[_0x45694c(0xb3)] = _0x45694c(0x14a), buttonSoundOff[_0x45694c(0x20f)](_0x45694c(0x203), function(_0x2df35d) {
        toggleSoundMute(!![]);
    }), buttonSoundOn[_0x45694c(0xb3)] = _0x45694c(0x14a), buttonSoundOn['addEventListener'](_0x45694c(0x203), function(_0x416812) {
        toggleSoundMute(![]);
    }), typeof buttonMusicOff != _0x45694c(0x11f) && (buttonMusicOff['cursor'] = _0x45694c(0x14a), buttonMusicOff[_0x45694c(0x20f)]('click', function(_0x4052f8) {
        toggleMusicMute(!![]);
    })), typeof buttonMusicOn != _0x45694c(0x11f) && (buttonMusicOn[_0x45694c(0xb3)] = _0x45694c(0x14a), buttonMusicOn[_0x45694c(0x20f)](_0x45694c(0x203), function(_0x125713) {
        toggleMusicMute(![]);
    })), buttonFullscreen[_0x45694c(0xb3)] = 'pointer', buttonFullscreen[_0x45694c(0x20f)](_0x45694c(0x203), function(_0x5a58dc) {
        toggleFullScreen();
    }), buttonExit[_0x45694c(0xb3)] = _0x45694c(0x14a), buttonExit['addEventListener']('click', function(_0x24a704) {
        togglePop(!![]), toggleOptions();
    }), buttonSettings[_0x45694c(0xb3)] = _0x45694c(0x14a), buttonSettings[_0x45694c(0x20f)](_0x45694c(0x203), function(_0x112206) {
        toggleOptions();
    }), buttonConfirm['cursor'] = _0x45694c(0x14a), buttonConfirm[_0x45694c(0x20f)]('click', function(_0x6917f6) {
        var _0x4ed519 = _0x45694c;
        playSound(_0x4ed519(0x112)), togglePop(![]), stopSound(), stopGame(), goPage(_0x4ed519(0xad));
    }), buttonCancel[_0x45694c(0xb3)] = 'pointer', buttonCancel[_0x45694c(0x20f)]('click', function(_0x48f687) {
        var _0x2bcbaa = _0x45694c;
        playSound(_0x2bcbaa(0x112)), togglePop(![]);
    }), buttonBomb[_0x45694c(0xb3)] = _0x45694c(0x14a), buttonBomb[_0x45694c(0x20f)](_0x45694c(0x11d), function(_0x570272) {
        var _0x3c2044 = _0x45694c;
        gameData[_0x3c2044(0x1bb)][_0x3c2044(0x121)] = !![];
    }), buttonBomb[_0x45694c(0x20f)](_0x45694c(0x1a6), function(_0x44608f) {
        var _0x105caf = _0x45694c;
        gameData[_0x105caf(0x1bb)][_0x105caf(0x121)] = ![];
    }), buttonDetanator[_0x45694c(0xb3)] = _0x45694c(0x14a), buttonDetanator['addEventListener'](_0x45694c(0x11d), function(_0x7500fb) {
        var _0x4c2aa7 = _0x45694c;
        gameData[_0x4c2aa7(0x1bb)][_0x4c2aa7(0xe4)] = !![];
    }), buttonDetanator[_0x45694c(0x20f)]('pressup', function(_0x4dce8f) {
        var _0xf0007d = _0x45694c;
        gameData[_0xf0007d(0x1bb)][_0xf0007d(0xe4)] = ![];
    }), setupTouchControl(), gameData[_0x45694c(0x1c5)] = Math[_0x45694c(0x1f9)](Math[_0x45694c(0x257)]() * themesArr['length']), toggleTutorial(![]), toggleTutorial(!![]), preventScrolling();
}

function preventScrolling() {
    var _0x309ae9 = a0_0x30c371;
    const _0x2c832f = window[_0x309ae9(0x24d)] !== window[_0x309ae9(0x19c)];
    if (_0x2c832f) {
        var _0x281fdd = [0x20, 0x26, 0x25, 0x28, 0x27];
        $(window)['on'](_0x309ae9(0x251), function(_0x31502a) {
            var _0x16fd4b = _0x309ae9;
            _0x281fdd[_0x16fd4b(0x24b)](_0x31502a[_0x16fd4b(0x1f8)]) != -0x1 && _0x31502a['preventDefault']();
        });
    }
}

function appendFocusFrame() {
    var _0x50e20e = a0_0x30c371;
    $('#mainHolder')[_0x50e20e(0x213)](_0x50e20e(0x23a)), $(_0x50e20e(0x22f))[_0x50e20e(0x203)](function() {
        var _0x5f1327 = _0x50e20e;
        $(_0x5f1327(0x22f))[_0x5f1327(0x1b5)]();
    });
}

function toggleTutorial(_0x4b2ee4) {
    var _0x3155fd = a0_0x30c371;
    _0x4b2ee4 ? (gameData['tutorial']++, gameData[_0x3155fd(0xe6)] = gameData['tutorial'] > 0x3 ? 0x1 : gameData[_0x3155fd(0xe6)]) : (gameData[_0x3155fd(0xe6)]--, gameData[_0x3155fd(0xe6)] = gameData[_0x3155fd(0xe6)] < 0x1 ? 0x3 : gameData[_0x3155fd(0xe6)]);
    itemTutorial1[_0x3155fd(0xbc)] = ![], itemTutorial2[_0x3155fd(0xbc)] = ![], itemTutorial3[_0x3155fd(0xbc)] = ![];
    if (gameData[_0x3155fd(0xe6)] == 0x1) itemTutorial1[_0x3155fd(0xbc)] = !![];
    else gameData[_0x3155fd(0xe6)] == 0x2 ? itemTutorial2['visible'] = !![] : itemTutorial3[_0x3155fd(0xbc)] = !![];
}

function a0_0x4717() {
    var _0x56a0ed = ['assets/sounds/sound_explosion.ogg', 'point', 'move', '[NUMBER]PTS', '#canvasHolder', 'enemydeadstill', 'drawRect', 'devicePixelRatio', '#000', 'button', 'orientationchange', 'removeAllChildren', 'BOMB\x20SHIELD', '10QFhxZt', 'FIRE\x0aTHOUGH\x20BRICK', 'enable', 'enableMouseOver', 'getElementById', 'whatsapp', 'open', 'exitTitle', 'power', 'resultDesc', '#', 'focus', 'speed', 'assets/theme_powers_01.png', 'beginStroke', 'splice', 'mozCancelFullScreen', 'assets/button_bomb.png', 'buttonMusicOff', 'show', '#', 'buttonArrowR', 'stageX', '#fff', 'assets/button_select.png', 'soundButton', 'buttonContinue', '7158cHvGth', '[SCORE]\x20is\x20mine\x20new\x20highscore\x20on\x20Hero\x20Blaster!\x20Try\x20it\x20now!', 'bombRange', 'documentElement', 'fadeOut', 'lineHeight', 'touch', 'assets/theme_design_06.png', 'navigator', 'mousedown', 'color', 'undefined', 'assets/item_tutorial_03.png', 'bomb', 'assets/sounds/sound_place.ogg', 'assets/button_touch_press.png', 'game', 'down', 'walkThroughBrick', 'Press', 'scaleY', 'tweenScore', 'slice', 'assets/sounds/sound_win.ogg', 'removeChild', 'localToGlobal', 'RAF_SYNCHED', 'naturalWidth', 'lastY', 'assets/sounds/sound_fail.ogg', 'buttonReddit', 'sqrt', 'assets/button_touch_up.png', 'assets/theme_design_01.png', 'cornerdown', 'resize', 'textBaseline', 'active', 'soundDetonate', 'css', 'file', 'toUpperCase', 'FIRE\x20SHIELD', 'update', 'assets/sounds/sound_hit.ogg', 'enemydead', '95px\x20upheaval_tt_brkregular', 'fullscreenElement', 'buttonWhatsapp', 'buttonNext', 'buttonSoundOff', '892DLUIeT', 'alphabetic', 'assets/sounds/sound_stage.ogg', 'pointer', 'telegram', 'fileload', 'assets/button_touch_down.png', 'buttonTouchPress', 'logoP', '#mainLoader', 'userAgent', 'round', 'share.jpg', 'shareOption', 'gameover', 'oldTimer', 'cos', 'soundAlarmFinal', 'itemTutorial1', '4944DDiskC', '4766517YzihiU', 'share', 'explosion', 'itemPopP', 'Bitmap', 'paused', 'gameCanvas', 'requestFullscreen', 'showScreenControl', 'wallTB', 'buttonSave', 'left', 'enemyIndex', 'min', 'textAlign', 'play', 'exitFullscreen', 'assets/theme_enemy_01.png', '&url=', 'msRequestFullscreen', 'href', 'buttonTouchMove', '3121400ewZLTD', 'assets/social/button_whatsapp.png', 'test', 'toLowerCase', 'soundStage', 'WALK\x0aTHROUGH\x20BRICK', 'keyboard', 'replace', 'font', 'assets/button_next.png', '[NUMBER]', 'createElement', 'pressmove', 'reddit', 'webkitRequestFullscreen', 'buttonTouchUpPress', 'moveRange', 'killAll', 'src', '#rotateHolder', 'fireShield', '20494276kxXDuH', 'SpriteSheet', 'buttonTouchUp', 'assets/theme_bomb_01.png', 'width', 'Left', 'bricks', 'LEFT\x20:\x20[NUMBER]', 'screenControlAlpha', 'assets/item_status.png', 'extraHeight', 'bombThroughBrick', '+BOMB\x20RANGE', 'assets/button_touch_down_press.png', 'red', 'rotation', 'deadstill', 'assets/button_exit.png', 'error\x20', 'assets/theme_character_05.png', 'volume', 'TIME\x27S\x20UP', 'top', 'right', 'loop', 'assets/sounds/sound_alarm_final.ogg', 'shareTitle', 'enemy', 'buttonSoundOn', 'control', 'tick', 'innerHeight', 'pressup', '#notSupportHolder', 'countdown', 'Touch', 'assets/button_touch_arrow.png', 'Stage', 'row', 'assets/button_fullscreen.png', 'buttonFullscreen', 'DETONATOR', 'cornerup', 'soundHit', 'bombShield', 'logo', 'getContext', 'remove', '.mobileRotate', 'webkitFullscreenElement', 'mp3', 'assets/item_tutorial_01.png', 'complete', 'moveControl', 'still', 'assets/button_cancel.png', 'parent', 'empty', 'assets/social/button_facebook.png', 'function', 'Ticker', 'mozRequestFullScreen', 'blur', 'themeNum', 'buttonStart', 'powerIndex', 'killTweensOf', 'Sprite', 'pow', 'theme', 'regX', 'playerSpeed', 'removeAllEventListeners', 'scaleX', 'backgroundP', 'offset', 'There\x20was\x20an\x20error\x20while\x20trying\x20to\x20resume\x20the\x20SoundJS\x20Web\x20Audio\x20context...', 'lastFrame', 'off', 'map', 'soundPlace', 'soundMove', 'STAGE\x20[NUMBER]', 'Text', 'substr', 'type', 'resume', 'scrollTop', 'linkedin', 'itemTutorial3', '75px\x20upheaval_tt_brkregular', '#FE4D00', 'buttonMusicOn', 'Graphics', 'assets/theme_character_01.png', 'Right', 'assets/sounds/sound_result.ogg', 'options', 'push', 'regY', 'text', 'screenControlStick', '+SPEED', 'suspended', 'powers', 'player', 'buttonTouchDown', 'background', 'Shape', 'assets/theme_design_03.png', 'defaultVol', 'px\x20upheaval_tt_brkregular', 'assets/social/button_twitter.png', '+BOMB', 'keyCode', 'floor', '#', 'power0', 'GAME\x20OVER', 'design', 'soundPowerUp', 'Are\x20you\x20sure\x20you\x20want\x0ato\x20quit\x20game?', 'addChild', 'getResult', 'CHOOSE\x20THEME', 'click', 'framerate', '35px\x20upheaval_tt_brkregular', 'assets/theme_design_05.png', 'musicMain', 'cornerleft', 'drag', 'startDate', 'beginFill', 'WebAudioPlugin', 'soundFail', 'installPlugin', 'addEventListener', 'target', 'soundWin', 'buttonConfirm', 'prepend', 'assets/theme_character_03.png', 'assets/sounds/sound_click.ogg', 'buttonTouchArrow', 'hitArea', 'assets/sounds/sound_move.ogg', 'assets/theme_design_02.png', 'abs', 'score', 'enemies', 'facebook', 'stageY', 'assets/button_theme_right.png', '%20', 'Sound', 'msExitFullscreen', 'onkeydown', 'location', 'dead', 'sound', 'side', 'assets/button_music_on.png', 'brickScore', 'currentTarget', 'height', 'buttonDetanator', 'getTime', 'wallLR', '#focus', 'buttonTelegram', 'assets/button_music_off.png', 'dir', 'floorDark', 'spaceX', '&text=', 'buttonArrowL', '1090SDVDXY', 'removeEventListener', 'share.php?title=', '<div\x20id=\x22focus\x22\x20style=\x22position:absolute;\x20width:100%;\x20height:100%;\x20z-index:1000;\x22></div', 'assets/logo.png', 'alpha', 'scoreData', 'clear', 'assets/button_detanator.png', 'settings', 'assets/item_pop.png', 'gotoAndStop', 'timesup', 'exitMessage', 'center', 'brick', 'assets/theme_enemy_02.png', 'assets/button_touch_left.png', 'msFullscreenElement', 'arrow', 'indexOf', 'buttonShare', 'self', 'screenControlSide', 'error', 'isLandscape', 'keydown', 'To\x20install\x20the\x20game\x20just\x20upload\x20folder\x20\x27game\x27\x20to\x20your\x20server.\x20The\x20game\x20won\x27t\x20run\x20locally\x20with\x20some\x20browser\x20like\x20Chrome\x20due\x20to\x20some\x20security\x20mode.', 'graphics', 'image', '&thumb=', '[SCORE]', 'random', 'protocol', 'sort', 'drop', 'assets/button_save.png', 'context', 'elapsedTime', 'stage', 'style', 'Container', 'detonatoring', 'level', 'buttonCancel', 'assets/theme_explosion_01.png', 'timingMode', 'sin', 'atan2', 'soundAlarm', 'customScore', 'cornerright', 'progress', 'itemPop', 'setStrokeStyle', 'itemTutorial2', 'html', 'main', 'timer', 'buttonTouch', 'assets/button_settings.png', 'touchPressed', 'assets/button_touch.png', 'cursor', '3991644RVvzxq', 'scale', 'soundResult', 'canvas', 'buttonExit', 'hide', 'twitter', 'shareText', 'visible', 'lastX', 'assets/button_sound_off.png', 'buttonTouchRight', 'column', 'assets/button_theme_left.png', 'maskH', 'stop', 'split', 'result', '7ZAODLb', 'item', 'assets/social/button_reddit.png', 'gotoAndPlay', 'webkitExitFullscreen', 'log', '640022GccexK', 'length', 'leftstill', 'buttonFacebook', 'substring', 'assets/theme_design_04.png', 'corner', 'assets/theme_design_07.png', 'assets/button_confirm.png', 'resultTitle', 'itemStatus', 'assets/sounds/music_game.ogg', 'maskW', 'nowDate', 'screenControlScale', 'naturalHeight', 'itemTutorial', 'assets/button_start.png', 'buttonTouchDownPress', 'assets/sounds/sound_powerup.ogg', 'Highscore\x20on\x20Hero\x20Blaster\x20is\x20[SCORE]', 'buttonTouchLeft', '#', 'document', 'detonator', 'gtag', 'tutorial', 'mask', 'musicGame', 'innerWidth', 'assets/sounds/music_main.ogg', 'gridSize'];
    a0_0x4717 = function() {
        return _0x56a0ed;
    };
    return a0_0x4717();
}

function keydown(_0x5015f0) {
    var _0x5cf645 = a0_0x30c371;
    if (gameSettings[_0x5cf645(0x177)][_0x5cf645(0x166)][_0x5cf645(0x24b)](_0x5015f0[_0x5cf645(0x1f8)]) != -0x1) gameData[_0x5cf645(0x1bb)][_0x5cf645(0x166)] = !![];
    else {
        if (gameSettings[_0x5cf645(0x177)][_0x5cf645(0x19d)]['indexOf'](_0x5015f0[_0x5cf645(0x1f8)]) != -0x1) gameData['moveControl'][_0x5cf645(0x19d)] = !![];
        else {
            if (gameSettings[_0x5cf645(0x177)]['up'][_0x5cf645(0x24b)](_0x5015f0['keyCode']) != -0x1) gameData[_0x5cf645(0x1bb)]['up'] = !![];
            else gameSettings[_0x5cf645(0x177)][_0x5cf645(0x125)][_0x5cf645(0x24b)](_0x5015f0[_0x5cf645(0x1f8)]) != -0x1 && (gameData['moveControl'][_0x5cf645(0x125)] = !![]);
        }
    }
    gameSettings['keyboard'][_0x5cf645(0x121)][_0x5cf645(0x24b)](_0x5015f0[_0x5cf645(0x1f8)]) != -0x1 && (gameData[_0x5cf645(0x1bb)][_0x5cf645(0x121)] = !![]), gameSettings['keyboard'][_0x5cf645(0xe4)]['indexOf'](_0x5015f0['keyCode']) != -0x1 && (gameData[_0x5cf645(0x1bb)][_0x5cf645(0xe4)] = !![]);
}

function keyup(_0x5bac29) {
    var _0x83b6c0 = a0_0x30c371;
    gameSettings[_0x83b6c0(0x177)][_0x83b6c0(0x121)][_0x83b6c0(0x24b)](_0x5bac29[_0x83b6c0(0x1f8)]) != -0x1 && (gameData['moveControl'][_0x83b6c0(0x121)] = ![]);
    gameSettings['keyboard'][_0x83b6c0(0xe4)]['indexOf'](_0x5bac29[_0x83b6c0(0x1f8)]) != -0x1 && (gameData[_0x83b6c0(0x1bb)][_0x83b6c0(0xe4)] = ![]);
    if (gameSettings['keyboard'][_0x83b6c0(0x166)][_0x83b6c0(0x24b)](_0x5bac29[_0x83b6c0(0x1f8)]) != -0x1) gameData[_0x83b6c0(0x1bb)]['left'] = ![];
    else {
        if (gameSettings[_0x83b6c0(0x177)][_0x83b6c0(0x19d)][_0x83b6c0(0x24b)](_0x5bac29[_0x83b6c0(0x1f8)]) != -0x1) gameData[_0x83b6c0(0x1bb)]['right'] = ![];
        else {
            if (gameSettings[_0x83b6c0(0x177)]['up']['indexOf'](_0x5bac29[_0x83b6c0(0x1f8)]) != -0x1) gameData[_0x83b6c0(0x1bb)]['up'] = ![];
            else gameSettings[_0x83b6c0(0x177)][_0x83b6c0(0x125)][_0x83b6c0(0x24b)](_0x5bac29[_0x83b6c0(0x1f8)]) != -0x1 && (gameData[_0x83b6c0(0x1bb)][_0x83b6c0(0x125)] = ![]);
        }
    }
}

function toggleTheme(_0x45ab66) {
    var _0x5ba1a9 = a0_0x30c371;
    _0x45ab66 ? (gameData['themeNum']++, gameData[_0x5ba1a9(0x1c5)] = gameData[_0x5ba1a9(0x1c5)] > themesArr[_0x5ba1a9(0xcd)] - 0x1 ? 0x0 : gameData['themeNum']) : (gameData[_0x5ba1a9(0x1c5)]--, gameData[_0x5ba1a9(0x1c5)] = gameData[_0x5ba1a9(0x1c5)] < 0x0 ? themesArr[_0x5ba1a9(0xcd)] - 0x1 : gameData[_0x5ba1a9(0x1c5)]), buildMap();
}

function toggleSocialShare(_0x352876) {
    var _0x2fb780 = a0_0x30c371;
    if (!shareSettings['enable']) return;
    shareSaveContainer['visible'] = _0x352876 == !![] ? ![] : !![];
    socialContainer['visible'] = _0x352876;
}

function positionShareButtons() {
    var _0x19111a = a0_0x30c371;
    if (!shareSettings[_0x19111a(0xfb)]) return;
    typeof buttonShare !== _0x19111a(0x11f) && (typeof buttonSave !== _0x19111a(0x11f) && (buttonSave[_0x19111a(0xbc)] ? (buttonShare['x'] = -(buttonShare[_0x19111a(0x254)][_0x19111a(0x12f)] / 0x2 + 0x5), buttonSave['x'] = buttonShare[_0x19111a(0x254)][_0x19111a(0x12f)] / 0x2 + 0x5) : buttonShare['x'] = 0x0));
}

function togglePop(_0x2d4ed1) {
    var _0x2b79ee = a0_0x30c371;
    exitContainer[_0x2b79ee(0xbc)] = _0x2d4ed1;
}
var curPage = '';

function goPage(_0x25f13d) {
    var _0x2f3b18 = a0_0x30c371;
    curPage = _0x25f13d, mainContainer[_0x2f3b18(0xbc)] = ![], themeContainer[_0x2f3b18(0xbc)] = ![], tutorialContainer[_0x2f3b18(0xbc)] = ![], mapContainer['visible'] = mapBorder[_0x2f3b18(0xbc)] = ![], gameContainer[_0x2f3b18(0xbc)] = ![], resultContainer[_0x2f3b18(0xbc)] = ![], togglePop(![]), toggleOptions(![]), stopGame();
    var _0x24a994 = null;
    switch (_0x25f13d) {
        case _0x2f3b18(0xad):
            _0x24a994 = mainContainer, playMusicLoop(_0x2f3b18(0x207)), stopMusicLoop(_0x2f3b18(0xe8));
            break;
        case _0x2f3b18(0x1cb):
            _0x24a994 = themeContainer, mapContainer['visible'] = mapBorder[_0x2f3b18(0xbc)] = !![], gameData['settings'] = {
                'column': 0x9,
                'row': 0x7,
                'enemies': [0x0, 0x1, 0x2],
                'powers': [],
                'bricks': 0xa
            }, buildMap();
            break;
        case _0x2f3b18(0xe6):
            _0x24a994 = tutorialContainer;
            break;
        case 'game':
            _0x24a994 = gameContainer, mapContainer['visible'] = mapBorder[_0x2f3b18(0xbc)] = !![], playMusicLoop(_0x2f3b18(0xe8)), stopMusicLoop(_0x2f3b18(0x207)), startGame();
            break;
        case 'result':
            _0x24a994 = resultContainer, stopGame(), toggleSocialShare(![]), playSound(_0x2f3b18(0xb6)), tweenData[_0x2f3b18(0x129)] = 0x0, TweenMax['to'](tweenData, 0.5, {
                'tweenScore': playerData['score'],
                'overwrite': !![],
                'onUpdate': function() {
                    var _0x131b7b = _0x2f3b18;
                    resultDescTxt[_0x131b7b(0x1ea)] = resultShadowDescTxt['text'] = textStrings[_0x131b7b(0x102)][_0x131b7b(0x178)](_0x131b7b(0x17b), addCommas(Math[_0x131b7b(0x1f9)](tweenData[_0x131b7b(0x129)])));
                }
            }), saveGame(playerData[_0x2f3b18(0x21b)]);
            break;
    }
    _0x24a994 != null && (_0x24a994['visible'] = !![], _0x24a994[_0x2f3b18(0x23c)] = 0x0, TweenMax['to'](_0x24a994, 0.5, {
        'alpha': 0x1,
        'overwrite': !![]
    })), resizeCanvas();
}

function startGame() {
    var _0x1aeda1 = a0_0x30c371;
    playerData[_0x1aeda1(0x21b)] = 0x0, playerData[_0x1aeda1(0x262)] = 0x0, updateGameScore(), setupMapLevel(), buildMap(), touchContainer['visible'] = ![], gameSettings[_0x1aeda1(0x163)] ? (touchContainer[_0x1aeda1(0xbc)] = !![], touchContainer['alpha'] = gameSettings[_0x1aeda1(0x18e)]) : !isDesktop && (touchContainer[_0x1aeda1(0xbc)] = !![], touchContainer[_0x1aeda1(0x23c)] = gameSettings[_0x1aeda1(0x18e)]);
}

function setupMapLevel() {
    var _0x41ef31 = a0_0x30c371,
        _0x111ce2 = playerData[_0x41ef31(0x262)] > stageArr[_0x41ef31(0xcd)] - 0x1 ? stageArr[_0x41ef31(0xcd)] - 0x1 : playerData[_0x41ef31(0x262)];
    gameData['settings'] = {
        'row': stageArr[_0x111ce2][_0x41ef31(0x1ac)],
        'column': stageArr[_0x111ce2][_0x41ef31(0xc0)],
        'enemies': stageArr[_0x111ce2][_0x41ef31(0x21c)]['slice'](),
        'powers': stageArr[_0x111ce2][_0x41ef31(0x1ee)][_0x41ef31(0x12a)](),
        'bricks': stageArr[_0x111ce2][_0x41ef31(0x18c)]
    }, tweenData[_0x41ef31(0x129)] = 0x0, playerData[_0x41ef31(0x105)] = gameSettings[_0x41ef31(0x1cd)], playerData[_0x41ef31(0x121)] = stageArr[_0x111ce2][_0x41ef31(0x121)], playerData[_0x41ef31(0x116)] = stageArr[_0x111ce2][_0x41ef31(0x116)], playerData['bombThroughBrick'] = ![], playerData['detonator'] = ![], playerData[_0x41ef31(0x261)] = ![], timeData[_0x41ef31(0x1a8)] = stageArr[_0x111ce2][_0x41ef31(0x1a8)], buttonDetanator['visible'] = playerData['detonator'];
}

function stopGame() {
    var _0x53245b = a0_0x30c371;
    gameData[_0x53245b(0x160)] = !![], gameData['control'] = ![], stopSoundLoop(_0x53245b(0x1d7)), TweenMax[_0x53245b(0x182)](![], !![], ![]);
}

function saveGame(_0x54f5ea) {
    var _0x342d3b = a0_0x30c371;
    typeof toggleScoreboardSave == _0x342d3b(0x1c1) && ($[_0x342d3b(0x23d)][_0x342d3b(0x21b)] = _0x54f5ea, typeof type != _0x342d3b(0x11f) && ($[_0x342d3b(0x23d)][_0x342d3b(0x1db)] = type), toggleScoreboardSave(!![]));
}

function buildMap() {
    var _0x1331fe = a0_0x30c371;
    gameData[_0x1331fe(0x1ba)] = ![], floorContainer[_0x1331fe(0xf7)](), objectsContainer[_0x1331fe(0xf7)](), bombContainer[_0x1331fe(0xf7)](), explosionContainer['removeAllChildren'](), powerContainer[_0x1331fe(0xf7)](), mapStatusContainer[_0x1331fe(0xf7)](), gameData[_0x1331fe(0x1d5)] = [], gameData[_0x1331fe(0x1bf)] = [], gameData[_0x1331fe(0x18c)] = [], gameData[_0x1331fe(0x1ee)] = [];
    var _0x2a820 = {
            'x': 0x0,
            'y': 0x0
        },
        _0x32d62e = gameSettings[_0x1331fe(0xeb)],
        _0x5a1f0e = !![],
        _0x4e601b = ![];
    for (var _0x1e82ee = 0x0; _0x1e82ee < gameData[_0x1331fe(0x240)][_0x1331fe(0x1ac)]; _0x1e82ee++) {
        gameData['map'][_0x1331fe(0x1e8)]([]);
        for (var _0x47e0e1 = 0x0; _0x47e0e1 < gameData[_0x1331fe(0x240)][_0x1331fe(0xc0)]; _0x47e0e1++) {
            var _0x4cb1c3 = ![];
            (_0x1e82ee == 0x0 || _0x1e82ee == gameData['settings'][_0x1331fe(0x1ac)] - 0x1) && (_0x4cb1c3 = !![]);
            (_0x47e0e1 == 0x0 || _0x47e0e1 == gameData[_0x1331fe(0x240)][_0x1331fe(0xc0)] - 0x1) && (_0x4cb1c3 = !![]);
            !_0x4cb1c3 && (_0x4e601b = _0x4e601b == !![] ? ![] : !![], _0x5a1f0e && _0x4e601b && (_0x4cb1c3 = !![]));
            if (_0x4cb1c3) {
                var _0x2ce626 = getSpriteSheet(_0x1331fe(0x1fd));
                if (_0x47e0e1 == 0x0 || _0x47e0e1 == gameData[_0x1331fe(0x240)][_0x1331fe(0xc0)] - 0x1) _0x2ce626['gotoAndStop'](_0x1331fe(0x22e)), _0x1e82ee == gameData[_0x1331fe(0x240)][_0x1331fe(0x1ac)] - 0x1 && _0x2ce626[_0x1331fe(0x242)](_0x1331fe(0x164));
                else _0x1e82ee == 0x0 || _0x1e82ee == gameData[_0x1331fe(0x240)][_0x1331fe(0x1ac)] - 0x1 ? _0x2ce626['gotoAndStop']('wallTB') : _0x2ce626[_0x1331fe(0x242)]('wall');
                _0x2ce626['x'] = _0x2a820['x'], _0x2ce626['y'] = _0x2a820['y'], objectsContainer[_0x1331fe(0x200)](_0x2ce626);
            }
            var _0x8f5e9b = getSpriteSheet(_0x1331fe(0x1fd));
            isEven(_0x1e82ee) ? isEven(_0x47e0e1) ? _0x8f5e9b[_0x1331fe(0x242)]('floor') : _0x8f5e9b['gotoAndStop'](_0x1331fe(0x233)) : isEven(_0x47e0e1) ? _0x8f5e9b[_0x1331fe(0x242)](_0x1331fe(0x233)) : _0x8f5e9b[_0x1331fe(0x242)](_0x1331fe(0x1f9)), _0x8f5e9b['x'] = _0x2a820['x'], _0x8f5e9b['y'] = _0x2a820['y'], floorContainer[_0x1331fe(0x200)](_0x8f5e9b), _0x2a820['x'] += _0x32d62e, gameData['map'][_0x1e82ee][_0x47e0e1] = _0x4cb1c3 == !![] ? 0x0 : 0x1, !_0x4cb1c3 && gameData['empty']['push']({
                'r': _0x1e82ee,
                'c': _0x47e0e1
            });
        }
        _0x5a1f0e = _0x5a1f0e == !![] ? ![] : !![], _0x2a820['x'] = 0x0, _0x2a820['y'] += _0x32d62e;
    }
    mapContainer[_0x1331fe(0xe7)] = mapMask, mapMoveContainer['x'] = _0x32d62e / 0x2, mapMoveContainer['y'] = _0x32d62e / 0x2, gameData[_0x1331fe(0x240)][_0x1331fe(0x18a)] = gameData[_0x1331fe(0x240)]['column'] * _0x32d62e, gameData[_0x1331fe(0x240)][_0x1331fe(0x22b)] = gameData[_0x1331fe(0x240)][_0x1331fe(0x1ac)] * _0x32d62e, gameData[_0x1331fe(0x232)] = '', gameData[_0x1331fe(0x121)] = [], gameData['moveControl'] = {
        'left': ![],
        'right': ![],
        'up': ![],
        'down': ![],
        'bomb': ![],
        'detonator': ![]
    }, updateBombIcon(), updateGameStats(), statusContainer[_0x1331fe(0x23c)] = 0x0, timerRedTxt[_0x1331fe(0x23c)] = 0x0, timerTxt[_0x1331fe(0x1ea)] = timerRedTxt[_0x1331fe(0x1ea)] = textStrings[_0x1331fe(0xae)][_0x1331fe(0x178)](_0x1331fe(0x17b), millisecondsToTimeGame(timeData[_0x1331fe(0x1a8)])), createPlayer(), createEnemies(), createBricks(), updateChildrenIndex(), resizeMap(), moveCamera(), curPage == _0x1331fe(0x124) && (showGameStatus(_0x1331fe(0x25e)), playSound(_0x1331fe(0x175)), TweenMax['to'](mapContainer, 0x2, {
        'overwrite': !![],
        'onComplete': function() {
            var _0x39a167 = _0x1331fe;
            statusContainer[_0x39a167(0x23c)] = 0x0, gameData[_0x39a167(0x160)] = ![], gameData[_0x39a167(0x1a3)] = !![], toggleGameTimer(!![]);
        }
    }));
}

function resizeMap() {
    var _0x469512 = a0_0x30c371,
        _0x4d5952 = {
            'w': 0x320,
            'h': 0x1c2
        };
    !viewport[_0x469512(0x250)] && (_0x4d5952['w'] = 0x258, _0x4d5952['h'] = 0x2ee), gameData['maskW'] = gameData[_0x469512(0x240)][_0x469512(0x18a)] > _0x4d5952['w'] ? _0x4d5952['w'] : gameData[_0x469512(0x240)][_0x469512(0x18a)], gameData[_0x469512(0xc2)] = gameData[_0x469512(0x240)][_0x469512(0x22b)] > _0x4d5952['h'] ? _0x4d5952['h'] : gameData[_0x469512(0x240)][_0x469512(0x22b)], mapMask['graphics'][_0x469512(0x23e)]()[_0x469512(0x20b)](_0x469512(0x194))[_0x469512(0xf2)](0x0, 0x0, gameData['maskW'], gameData['maskH']), mapBorder['graphics'][_0x469512(0x23e)]()[_0x469512(0xaa)](0xc)['beginStroke']('#3D435B')['drawRect'](0x0, 0x0, gameData[_0x469512(0xd8)], gameData['maskH']), mapContainer['x'] = mapMask['x'] = mapBorder['x'] = canvasW / 0x2 - gameData['maskW'] / 0x2, mapContainer['y'] = mapMask['y'] = mapBorder['y'] = canvasH / 0x2 - gameData['maskH'] / 0x2, mapStatusContainer['x'] = mapContainer['x'] + mapMoveContainer['x'], mapStatusContainer['y'] = mapContainer['y'] + mapMoveContainer['y'], timerStatusContainer['x'] = mapContainer['x'], timerStatusContainer['y'] = mapContainer['y'] - 0xa, enemyStatusContainer['x'] = mapContainer['x'] + gameData[_0x469512(0xd8)], enemyStatusContainer['y'] = mapContainer['y'] - 0xa, bombStatusContainer['x'] = enemyStatusContainer['x'] - 0x104, bombStatusContainer['y'] = mapContainer['y'] - 0xa, scoreStatusContainer['x'] = canvasW / 0x2, scoreStatusContainer['y'] = mapContainer['y'] + gameData['maskH'] + 0x28;
}

function getSpriteSheet(_0x483520) {
    var _0x1f691b = a0_0x30c371,
        _0x229906 = 0.5,
        _0x238906 = gameSettings[_0x1f691b(0xeb)],
        _0x58c504 = gameSettings[_0x1f691b(0xeb)],
        _0x1d9e40 = 0x0,
        _0x3b4d27 = 0x4,
        _0x1a7b38 = {
            'idle': {
                'frames': [0x0],
                'speed': _0x229906
            },
            'tongue': {
                'frames': [0x1],
                'speed': _0x229906
            },
            'eat': {
                'frames': [0x2],
                'speed': _0x229906
            },
            'body': {
                'frames': [0x3],
                'speed': _0x229906
            },
            'bodybend': {
                'frames': [0x4],
                'speed': _0x229906
            },
            'tail': {
                'frames': [0x5],
                'speed': _0x229906
            }
        },
        _0x66cde8 = '',
        _0x263682 = '';
    if (_0x483520 == _0x1f691b(0x1fd)) _0x1d9e40 = themesArr[gameData[_0x1f691b(0x1c5)]]['design']['extraHeight'], _0x3b4d27 = 0x6, _0x1a7b38 = {
        'floor': {
            'frames': [0x0],
            'speed': _0x229906
        },
        'floorDark': {
            'frames': [0x1],
            'speed': _0x229906
        },
        'wallLR': {
            'frames': [0x2],
            'speed': _0x229906
        },
        'wallTB': {
            'frames': [0x3],
            'speed': _0x229906
        },
        'wall': {
            'frames': [0x4],
            'speed': _0x229906
        },
        'brick': {
            'frames': [0x5],
            'speed': _0x229906
        }
    }, _0x66cde8 = _0x1f691b(0x1fd) + gameData[_0x1f691b(0x1c5)], _0x263682 = 'floor';
    else {
        if (_0x483520 == 'bomb') _0x1d9e40 = themesArr[gameData['themeNum']][_0x1f691b(0x121)][_0x1f691b(0x190)], _0x3b4d27 = 0x3, _0x1a7b38 = {
            'bomb': {
                'frames': [0x0, 0x1, 0x1, 0x2, 0x2, 0x1, 0x1, 0x0],
                'speed': _0x229906
            }
        }, _0x66cde8 = _0x1f691b(0x121) + gameData[_0x1f691b(0x1c5)], _0x263682 = _0x1f691b(0x121);
        else {
            if (_0x483520 == _0x1f691b(0x1ef)) _0x1d9e40 = themesArr[gameData[_0x1f691b(0x1c5)]]['player'][_0x1f691b(0x190)], _0x3b4d27 = 0x10, _0x1a7b38 = {
                'leftstill': {
                    'frames': [0x1],
                    'speed': _0x229906
                },
                'rightstill': {
                    'frames': [0x0],
                    'speed': _0x229906
                },
                'upstill': {
                    'frames': [0x6],
                    'speed': _0x229906
                },
                'downstill': {
                    'frames': [0x3],
                    'speed': _0x229906
                },
                'down': {
                    'frames': [0x2, 0x3, 0x4, 0x3],
                    'speed': _0x229906
                },
                'up': {
                    'frames': [0x5, 0x6, 0x7, 0x6],
                    'speed': _0x229906
                },
                'side': {
                    'frames': [0x8, 0x9, 0xa, 0x9],
                    'speed': _0x229906
                },
                'dead': {
                    'frames': [0xb, 0xc, 0xd, 0xe, 0xf],
                    'speed': _0x229906,
                    'next': _0x1f691b(0x196)
                },
                'deadstill': {
                    'frames': [0xf],
                    'speed': _0x229906
                }
            }, _0x66cde8 = _0x1f691b(0x1ef) + gameData[_0x1f691b(0x1c5)], _0x263682 = 'leftiddle';
            else {
                if (_0x483520 == _0x1f691b(0x1a1)) {
                    _0x1d9e40 = themesArr[gameData[_0x1f691b(0x1c5)]][_0x1f691b(0x21c)]['extraHeight'], _0x3b4d27 = enemiesArr[_0x1f691b(0xcd)] * 0x8, _0x1a7b38 = {};
                    for (var _0x211a44 = 0x0; _0x211a44 < enemiesArr[_0x1f691b(0xcd)]; _0x211a44++) {
                        var _0x10ded8 = _0x211a44 * 0x8,
                            _0x17e529 = _0x10ded8 + 0x3;
                        _0x1a7b38['enemy' + _0x211a44] = {
                            'frames': [_0x10ded8, _0x10ded8 + 0x1, _0x10ded8 + 0x2, _0x10ded8 + 0x1],
                            'speed': _0x229906
                        }, _0x1a7b38[_0x1f691b(0x141) + _0x211a44] = {
                            'frames': [_0x17e529, _0x17e529 + 0x1, _0x17e529 + 0x2, _0x17e529 + 0x3, _0x17e529 + 0x4],
                            'speed': _0x229906,
                            'next': _0x1f691b(0xf1) + _0x211a44
                        }, _0x1a7b38['enemydeadstill' + _0x211a44] = {
                            'frames': [_0x17e529 + 0x4],
                            'speed': _0x229906
                        };
                    }
                    _0x66cde8 = _0x1f691b(0x21c) + gameData[_0x1f691b(0x1c5)], _0x263682 = 'enemy0';
                } else {
                    if (_0x483520 == _0x1f691b(0x1ee)) {
                        _0x1d9e40 = themesArr[gameData[_0x1f691b(0x1c5)]][_0x1f691b(0x1ee)][_0x1f691b(0x190)], _0x3b4d27 = powersArr[_0x1f691b(0xcd)] * 0x8, _0x1a7b38 = {};
                        for (var _0x211a44 = 0x0; _0x211a44 < powersArr[_0x1f691b(0xcd)]; _0x211a44++) {
                            _0x1a7b38[_0x1f691b(0x101) + _0x211a44] = {
                                'frames': [_0x211a44],
                                'speed': _0x229906
                            };
                        }
                        _0x66cde8 = _0x1f691b(0x1ee) + gameData[_0x1f691b(0x1c5)], _0x263682 = _0x1f691b(0x1fb);
                    } else _0x483520 == _0x1f691b(0x15d) && (_0x1d9e40 = themesArr[gameData[_0x1f691b(0x1c5)]]['explosion'][_0x1f691b(0x190)], _0x3b4d27 = 0x1c, _0x1a7b38 = {
                        'center': {
                            'frames': [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6],
                            'speed': _0x229906
                        },
                        'side': {
                            'frames': [0x7, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd],
                            'speed': _0x229906
                        },
                        'corner': {
                            'frames': [0xe, 0xf, 0x10, 0x11, 0x12, 0x13, 0x14],
                            'speed': _0x229906
                        },
                        'brick': {
                            'frames': [0x15, 0x16, 0x17, 0x18, 0x19, 0x1a, 0x1b],
                            'speed': _0x229906
                        }
                    }, _0x66cde8 = _0x1f691b(0x15d) + gameData[_0x1f691b(0x1c5)], _0x263682 = 'center');
                }
            }
        }
    }
    var _0x263682 = {
            'regX': _0x238906 / 0x2,
            'regY': _0x58c504 / 0x2 + _0x1d9e40,
            'height': _0x58c504 + _0x1d9e40,
            'width': _0x238906,
            'count': _0x3b4d27
        },
        _0x41f0ff = new createjs[(_0x1f691b(0x187))]({
            'images': [loader['getResult'](_0x66cde8)],
            'frames': _0x263682,
            'animations': _0x1a7b38
        }),
        _0x33eb7b = new createjs[(_0x1f691b(0x1c9))](_0x41f0ff, _0x263682);
    return _0x33eb7b[_0x1f691b(0x204)] = 0x14, _0x33eb7b;
}

function createBricks() {
    var _0x410bdb = a0_0x30c371;
    gameData[_0x410bdb(0x1bf)] = [];
    for (var _0x288cf3 = 0x0; _0x288cf3 < gameData[_0x410bdb(0x240)][_0x410bdb(0x1ac)]; _0x288cf3++) {
        for (var _0x4c91eb = 0x0; _0x4c91eb < gameData[_0x410bdb(0x240)]['column']; _0x4c91eb++) {
            gameData[_0x410bdb(0x1d5)][_0x288cf3][_0x4c91eb] == 0x1 && gameData[_0x410bdb(0x1bf)][_0x410bdb(0x1e8)]({
                'r': _0x288cf3,
                'c': _0x4c91eb
            }), gameData[_0x410bdb(0x1d5)][_0x288cf3][_0x4c91eb] == 0x3 && (gameData[_0x410bdb(0x1d5)][_0x288cf3][_0x4c91eb] = 0x1);
        }
    }
    shuffle(gameData[_0x410bdb(0x1bf)]), shuffle(gameData[_0x410bdb(0x240)][_0x410bdb(0x1ee)]);
    var _0x1a8195 = gameSettings[_0x410bdb(0xeb)],
        _0x2f7150 = 0x0;
    for (var _0x531941 = 0x0; _0x531941 < gameData[_0x410bdb(0x240)][_0x410bdb(0x18c)]; _0x531941++) {
        var _0x4a7c6b = getSpriteSheet(_0x410bdb(0x1fd));
        _0x4a7c6b[_0x410bdb(0x242)](_0x410bdb(0x246)), _0x4a7c6b['x'] = gameData[_0x410bdb(0x1bf)][_0x531941]['c'] * _0x1a8195, _0x4a7c6b['y'] = gameData[_0x410bdb(0x1bf)][_0x531941]['r'] * _0x1a8195, _0x4a7c6b['y'] -= 0x1, _0x4a7c6b[_0x410bdb(0xc0)] = gameData[_0x410bdb(0x1bf)][_0x531941]['c'], _0x4a7c6b['row'] = gameData[_0x410bdb(0x1bf)][_0x531941]['r'], _0x4a7c6b[_0x410bdb(0x1c7)] = -0x1, _0x2f7150 < gameData[_0x410bdb(0x240)][_0x410bdb(0x1ee)][_0x410bdb(0xcd)] && (_0x4a7c6b[_0x410bdb(0x1c7)] = gameData['settings'][_0x410bdb(0x1ee)][_0x2f7150], _0x2f7150++), gameData['map'][gameData[_0x410bdb(0x1bf)][_0x531941]['r']][gameData[_0x410bdb(0x1bf)][_0x531941]['c']] = 0x2, gameData[_0x410bdb(0x18c)][_0x410bdb(0x1e8)](_0x4a7c6b), objectsContainer[_0x410bdb(0x200)](_0x4a7c6b);
    }
}

function createPlayer() {
    var _0x726d55 = a0_0x30c371;
    shuffle(gameData['empty']);
    var _0x23b71b = gameSettings['gridSize'];
    gameData[_0x726d55(0x1ef)] = getSpriteSheet(_0x726d55(0x1ef)), gameData[_0x726d55(0x1ef)][_0x726d55(0xc9)](_0x726d55(0xce)), gameData[_0x726d55(0x1ef)][_0x726d55(0x1d3)] = '', gameData[_0x726d55(0x1ef)]['x'] = _0x23b71b * gameData[_0x726d55(0x1bf)][0x0]['c'], gameData[_0x726d55(0x1ef)]['y'] = _0x23b71b * gameData['empty'][0x0]['r'], gameData[_0x726d55(0x1ef)][_0x726d55(0x126)] = ![], gameData[_0x726d55(0x1ef)][_0x726d55(0x1b2)] = ![], gameData['player'][_0x726d55(0x185)] = ![], objectsContainer['addChild'](gameData[_0x726d55(0x1ef)]), setMapPath(gameData['empty'][0x0]['c'], gameData[_0x726d55(0x1bf)][0x0]['r']);
}

function createEnemies() {
    var _0x28bf4f = a0_0x30c371;
    gameData[_0x28bf4f(0x21c)] = [], shuffle(gameData[_0x28bf4f(0x1bf)]), shuffle(gameData[_0x28bf4f(0x240)]['enemies']);
    var _0x4170e0 = gameSettings[_0x28bf4f(0xeb)],
        _0x2a6df5 = 0x0;
    for (var _0x537ab3 = 0x0; _0x537ab3 < gameData[_0x28bf4f(0x1bf)][_0x28bf4f(0xcd)]; _0x537ab3++) {
        var _0x2a6b78 = _0x4170e0 * gameData['empty'][_0x537ab3]['c'],
            _0x30d5a4 = _0x4170e0 * gameData[_0x28bf4f(0x1bf)][_0x537ab3]['r'],
            _0x9f2bb3 = getDistance(gameData[_0x28bf4f(0x1ef)]['x'], gameData[_0x28bf4f(0x1ef)]['y'], _0x2a6b78, _0x30d5a4);
        if (_0x9f2bb3 > 0xc8) {
            var _0xc9e21 = gameData['settings'][_0x28bf4f(0x21c)][_0x2a6df5],
                _0x4839d8 = getSpriteSheet(_0x28bf4f(0x1a1));
            _0x4839d8[_0x28bf4f(0xc9)](_0x28bf4f(0x1a1) + _0xc9e21), _0x4839d8['active'] = !![], _0x4839d8[_0x28bf4f(0x167)] = _0xc9e21, _0x4839d8['walkThroughBrick'] = enemiesArr[_0xc9e21][_0x28bf4f(0x126)], _0x4839d8[_0x28bf4f(0x1b2)] = ![], _0x4839d8[_0x28bf4f(0x185)] = ![], _0x4839d8['x'] = _0x4170e0 * gameData['empty'][_0x537ab3]['c'], _0x4839d8['y'] = _0x4170e0 * gameData['empty'][_0x537ab3]['r'], _0x4839d8[_0x28bf4f(0xbd)] = _0x4839d8['x'], _0x4839d8[_0x28bf4f(0x130)] = _0x4839d8['y'], _0x4839d8[_0x28bf4f(0x232)] = '', _0x4839d8[_0x28bf4f(0x19e)] = 0x0, objectsContainer[_0x28bf4f(0x200)](_0x4839d8), gameData[_0x28bf4f(0x21c)][_0x28bf4f(0x1e8)](_0x4839d8), getEnemyPath(_0x4839d8), setMapPath(gameData[_0x28bf4f(0x1bf)][_0x537ab3]['c'], gameData[_0x28bf4f(0x1bf)][_0x537ab3]['r']), _0x2a6df5++;
        }
        _0x2a6df5 >= gameData[_0x28bf4f(0x240)][_0x28bf4f(0x21c)]['length'] && (_0x537ab3 = gameData[_0x28bf4f(0x1bf)]['length']);
    }
}

function setMapPath(_0x3d400e, _0x2790fd) {
    var _0x43521d = a0_0x30c371;
    gameData[_0x43521d(0x1d5)][_0x2790fd][_0x3d400e] = 0x3;
    for (var _0x4add10 = 0x0; _0x4add10 < 0x4; _0x4add10++) {
        var _0x3bb096 = getPossiblePath(_0x3d400e, _0x2790fd);
        _0x3bb096[_0x43521d(0xcd)] > 0x0 && (shuffle(_0x3bb096), gameData[_0x43521d(0x1d5)][_0x3bb096[0x0]['r']][_0x3bb096[0x0]['c']] = 0x3);
    }
}

function getPossiblePath(_0x5f8148, _0x1ee51e) {
    var _0x253649 = a0_0x30c371,
        _0x45e8a0 = [];
    return (gameData[_0x253649(0x1d5)][_0x1ee51e - 0x1][_0x5f8148] == 0x1 || gameData['map'][_0x1ee51e - 0x1][_0x5f8148] == 0x3) && _0x45e8a0[_0x253649(0x1e8)]({
        'r': _0x1ee51e - 0x1,
        'c': _0x5f8148
    }), (gameData[_0x253649(0x1d5)][_0x1ee51e + 0x1][_0x5f8148] == 0x1 || gameData['map'][_0x1ee51e + 0x1][_0x5f8148] == 0x3) && _0x45e8a0[_0x253649(0x1e8)]({
        'r': _0x1ee51e + 0x1,
        'c': _0x5f8148
    }), (gameData['map'][_0x1ee51e][_0x5f8148 - 0x1] == 0x1 || gameData[_0x253649(0x1d5)][_0x1ee51e][_0x5f8148 - 0x1] == 0x3) && _0x45e8a0[_0x253649(0x1e8)]({
        'r': _0x1ee51e,
        'c': _0x5f8148 - 0x1
    }), (gameData['map'][_0x1ee51e][_0x5f8148 + 0x1] == 0x1 || gameData[_0x253649(0x1d5)][_0x1ee51e][_0x5f8148 + 0x1] == 0x3) && _0x45e8a0[_0x253649(0x1e8)]({
        'r': _0x1ee51e,
        'c': _0x5f8148 + 0x1
    }), _0x45e8a0;
}

function pointToCoord(_0x5dc5b3) {
    return Math['round'](_0x5dc5b3 / gameSettings['gridSize']);
};

function nextSquare(_0x5d4453, _0x4e0349) {
    var _0x32833b = a0_0x30c371,
        _0x12d331 = _0x5d4453 % gameSettings[_0x32833b(0xeb)];
    if (_0x12d331 === 0x0) return _0x5d4453;
    else return _0x4e0349 === _0x32833b(0x19d) || _0x4e0349 === _0x32833b(0x125) ? _0x5d4453 + (gameSettings[_0x32833b(0xeb)] - _0x12d331) : _0x5d4453 - _0x12d331;
};

function movePlayer() {
    var _0x52b66c = a0_0x30c371;
    updatePlayerFrame();
    gameData[_0x52b66c(0x232)] != '' ? playSoundLoop('soundMove') : stopSoundLoop(_0x52b66c(0x1d7));
    if (gameData['dir'] == '') return;
    var _0x5a1cfd = playerData[_0x52b66c(0x105)],
        _0x40802c = checkNexttDir(gameData[_0x52b66c(0x1ef)]['x'], gameData[_0x52b66c(0x1ef)]['y'], _0x5a1cfd, gameData['dir'], gameData[_0x52b66c(0x1ef)][_0x52b66c(0x126)], gameData[_0x52b66c(0x1ef)][_0x52b66c(0x185)], gameData['player'][_0x52b66c(0x1b2)]);
    gameData[_0x52b66c(0x1ef)]['x'] = _0x40802c['x'], gameData[_0x52b66c(0x1ef)]['y'] = _0x40802c['y'];
}

function updatePlayerFrame() {
    var _0x4c3650 = a0_0x30c371;
    if (gameData[_0x4c3650(0x232)] != gameData['player'][_0x4c3650(0x1d3)]) {
        var _0x5abb93 = gameData[_0x4c3650(0x232)];
        gameData[_0x4c3650(0x1ef)][_0x4c3650(0x1cf)] = _0x5abb93 == _0x4c3650(0x19d) ? -0x1 : 0x1;
        if (_0x5abb93 == '') _0x5abb93 = gameData[_0x4c3650(0x1ef)][_0x4c3650(0x1d3)] + _0x4c3650(0x1bc);
        else(_0x5abb93 == _0x4c3650(0x166) || _0x5abb93 == _0x4c3650(0x19d)) && (_0x5abb93 = _0x4c3650(0x227));
        gameData['player'][_0x4c3650(0x1d3)] = gameData[_0x4c3650(0x232)], gameData['player'][_0x4c3650(0xc9)](_0x5abb93);
    }
}

function checkNexttDir(_0x33a689, _0x2735b9, _0x1feef6, _0x2fab03, _0x113a85, _0x125232, _0x102226) {
    var _0x8c3b0d = a0_0x30c371,
        _0x308517 = _0x33a689 % gameSettings[_0x8c3b0d(0xeb)],
        _0x6edf8f = _0x2735b9 % gameSettings[_0x8c3b0d(0xeb)],
        _0x4a4b20 = gameSettings[_0x8c3b0d(0x181)],
        _0x437842 = ![],
        _0x11df6e = ![],
        _0x397dc5 = pointToCoord(nextSquare(_0x33a689 + gameSettings[_0x8c3b0d(0xeb)] / 0x2, '')),
        _0x1176f5 = pointToCoord(nextSquare(_0x2735b9 + gameSettings['gridSize'] / 0x2, '')),
        _0x13688a = _0x397dc5,
        _0x5c9c89 = _0x1176f5;
    if (_0x2fab03 == _0x8c3b0d(0x166)) _0x13688a--;
    else {
        if (_0x2fab03 == _0x8c3b0d(0x19d)) _0x13688a++;
        else {
            if (_0x2fab03 == 'up') _0x5c9c89--;
            else _0x2fab03 == 'down' && _0x5c9c89++;
        }
    }
    _0x308517 >= gameSettings[_0x8c3b0d(0xeb)] - _0x4a4b20 && (_0x11df6e = !![]);
    _0x308517 <= _0x4a4b20 && (_0x11df6e = !![]);
    _0x6edf8f >= gameSettings[_0x8c3b0d(0xeb)] - _0x4a4b20 && (_0x437842 = !![]);
    _0x6edf8f <= _0x4a4b20 && (_0x437842 = !![]);
    var _0x10d1ea = {
        'x': _0x33a689,
        'y': _0x2735b9
    };
    if (_0x2fab03 == _0x8c3b0d(0x166)) _0x10d1ea['x'] -= _0x1feef6;
    else {
        if (_0x2fab03 == 'right') _0x10d1ea['x'] += _0x1feef6;
        else {
            if (_0x2fab03 == 'up') _0x10d1ea['y'] -= _0x1feef6;
            else _0x2fab03 == _0x8c3b0d(0x125) && (_0x10d1ea['y'] += _0x1feef6);
        }
    }
    var _0x48de6b = ![],
        _0x2009b6 = _0x397dc5 * gameSettings['gridSize'],
        _0x5c4256 = _0x1176f5 * gameSettings[_0x8c3b0d(0xeb)],
        _0xffeb60 = _0x2009b6 - _0x10d1ea['x'],
        _0xfef37 = _0x5c4256 - _0x10d1ea['y'];
    _0x2fab03 == 'left' || _0x2fab03 == _0x8c3b0d(0x19d) ? _0x10d1ea['y'] = _0x5c4256 : _0x10d1ea['x'] = _0x2009b6;
    if (_0x2fab03 == 'left') {
        if (_0xffeb60 > 0x0 && !isMovable(gameData[_0x8c3b0d(0x1d5)][_0x5c9c89][_0x13688a], _0x113a85, _0x125232, _0x102226)) _0x48de6b = !![];
        else !_0x437842 && (_0x48de6b = !![]);
    }
    if (_0x2fab03 == _0x8c3b0d(0x19d)) {
        if (_0xffeb60 < 0x0 && !isMovable(gameData['map'][_0x5c9c89][_0x13688a], _0x113a85, _0x125232, _0x102226)) _0x48de6b = !![];
        else !_0x437842 && (_0x48de6b = !![]);
    }
    if (_0x2fab03 == 'up') {
        if (_0xfef37 > 0x0 && !isMovable(gameData['map'][_0x5c9c89][_0x13688a], _0x113a85, _0x125232, _0x102226)) _0x48de6b = !![];
        else !_0x11df6e && (_0x48de6b = !![]);
    }
    if (_0x2fab03 == _0x8c3b0d(0x125)) {
        if (_0xfef37 < 0x0 && !isMovable(gameData['map'][_0x5c9c89][_0x13688a], _0x113a85, _0x125232, _0x102226)) _0x48de6b = !![];
        else !_0x11df6e && (_0x48de6b = !![]);
    }
    return _0x48de6b && (_0x10d1ea['x'] = _0x33a689, _0x10d1ea['y'] = _0x2735b9), _0x10d1ea;
}

function moveEnemies() {
    var _0x4b173c = a0_0x30c371;
    for (var _0x3a3675 = 0x0; _0x3a3675 < gameData['enemies'][_0x4b173c(0xcd)]; _0x3a3675++) {
        var _0x4d8ecb = gameData[_0x4b173c(0x21c)][_0x3a3675];
        moveEnemy(_0x4d8ecb);
    }
}

function moveEnemy(_0x2b602f) {
    var _0x183cf3 = a0_0x30c371;
    if (!_0x2b602f[_0x183cf3(0x139)]) return;
    if (_0x2b602f['dir'] == '') return;
    _0x2b602f['lastX'] = _0x2b602f['x'], _0x2b602f['lastY'] = _0x2b602f['y'];
    var _0x20ae1c = enemiesArr[_0x2b602f[_0x183cf3(0x167)]][_0x183cf3(0x105)],
        _0x35a8da = checkNexttDir(_0x2b602f['x'], _0x2b602f['y'], _0x20ae1c, _0x2b602f[_0x183cf3(0x232)], _0x2b602f[_0x183cf3(0x126)], _0x2b602f[_0x183cf3(0x185)], _0x2b602f[_0x183cf3(0x1b2)]);
    _0x2b602f['x'] = _0x35a8da['x'], _0x2b602f['y'] = _0x35a8da['y'], _0x2b602f[_0x183cf3(0x1cf)] = 0x1, _0x2b602f[_0x183cf3(0x232)] == 'right' && (_0x2b602f['scaleX'] = -0x1), _0x2b602f['lastX'] == _0x2b602f['x'] && _0x2b602f[_0x183cf3(0x130)] == _0x2b602f['y'] ? getEnemyPath(_0x2b602f) : (_0x2b602f[_0x183cf3(0x19e)] -= _0x20ae1c, _0x2b602f[_0x183cf3(0x19e)] < 0x0 && getEnemyPath(_0x2b602f));
}

function getEnemyPath(_0x1dac2f) {
    var _0x3d2fd1 = a0_0x30c371,
        _0x3c9e96 = randomIntFromInterval(0x1, 0x3);
    _0x1dac2f[_0x3d2fd1(0x19e)] = _0x3c9e96 * gameSettings[_0x3d2fd1(0xeb)];
    var _0x37cb30 = pointToCoord(nextSquare(_0x1dac2f['x'] + gameSettings[_0x3d2fd1(0xeb)] / 0x2, '')),
        _0x462dce = pointToCoord(nextSquare(_0x1dac2f['y'] + gameSettings[_0x3d2fd1(0xeb)] / 0x2, '')),
        _0x5e092a = getPossiblePath(_0x37cb30, _0x462dce);
    _0x5e092a[_0x3d2fd1(0xcd)] > 0x0 && (shuffle(_0x5e092a), _0x1dac2f['dir'] = getPathDirection(_0x37cb30, _0x462dce, _0x5e092a[0x0]['c'], _0x5e092a[0x0]['r']));
}

function getPathDirection(_0x56b929, _0x5246e3, _0x1e0573, _0xf832bf) {
    var _0x3737c8 = a0_0x30c371;
    if (_0x1e0573 > _0x56b929) return 'right';
    else {
        if (_0x1e0573 < _0x56b929) return _0x3737c8(0x166);
        else {
            if (_0xf832bf > _0x5246e3) return _0x3737c8(0x125);
            else {
                if (_0xf832bf < _0x5246e3) return 'up';
            }
        }
    }
}

function releaseBomb() {
    var _0x4cfa14 = a0_0x30c371;
    toggleTouchAlpha(buttonBomb, gameData[_0x4cfa14(0x1bb)][_0x4cfa14(0x121)]);
    if (gameData[_0x4cfa14(0x1bb)]['bomb']) {
        var _0xf2cd83 = pointToCoord(nextSquare(gameData[_0x4cfa14(0x1ef)]['x'] + gameSettings['gridSize'] / 0x2, '')),
            _0x451a7e = pointToCoord(nextSquare(gameData[_0x4cfa14(0x1ef)]['y'] + gameSettings[_0x4cfa14(0xeb)] / 0x2, ''));
        isMovable(gameData[_0x4cfa14(0x1d5)][_0x451a7e][_0xf2cd83], ![], ![], ![]) && gameData[_0x4cfa14(0x121)][_0x4cfa14(0xcd)] < playerData[_0x4cfa14(0x121)] && insertBomb(_0x451a7e, _0xf2cd83);
    }
}

function detonateBomb() {
    var _0x5c4a92 = a0_0x30c371;
    toggleTouchAlpha(buttonDetanator, gameData[_0x5c4a92(0x1bb)][_0x5c4a92(0xe4)]);
    if (gameData['moveControl'][_0x5c4a92(0xe4)] && gameData[_0x5c4a92(0x121)]['length'] > 0x0) {
        if (!playerData[_0x5c4a92(0x261)]) {
            playSound(_0x5c4a92(0x13a)), playerData[_0x5c4a92(0x261)] = !![];
            var _0x630eae = 0x0;
            for (var _0xac83e3 = 0x0; _0xac83e3 < gameData[_0x5c4a92(0x121)]['length']; _0xac83e3++) {
                var _0x2e4fa1 = gameData['bomb'][_0xac83e3];
                TweenMax[_0x5c4a92(0x1c8)](_0x2e4fa1), _0x630eae += 0.2, TweenMax['to'](_0x2e4fa1, 0x0, {
                    'delay': _0x630eae,
                    'overwrite': !![],
                    'onComplete': bombExploded,
                    'onCompleteParams': [_0x2e4fa1, _0x2e4fa1[_0x5c4a92(0x1ac)], _0x2e4fa1[_0x5c4a92(0xc0)]]
                });
            }
        }
    }
}

function insertBomb(_0x20fb10, _0x313e96) {
    var _0x2c1bde = a0_0x30c371;
    playSound(_0x2c1bde(0x1d6));
    var _0x258283 = gameSettings[_0x2c1bde(0xeb)],
        _0x4b8689 = getSpriteSheet('bomb');
    _0x4b8689['x'] = _0x258283 * _0x313e96, _0x4b8689['y'] = _0x258283 * _0x20fb10, _0x4b8689[_0x2c1bde(0xc0)] = _0x313e96, _0x4b8689[_0x2c1bde(0x1ac)] = _0x20fb10, gameData[_0x2c1bde(0x1d5)][_0x20fb10][_0x313e96] = 0x5, bombContainer[_0x2c1bde(0x200)](_0x4b8689), gameData['bomb'][_0x2c1bde(0x1e8)](_0x4b8689), !playerData[_0x2c1bde(0xe4)] && TweenMax['to'](_0x4b8689, 0x2, {
        'overwrite': !![],
        'onComplete': bombExploded,
        'onCompleteParams': [_0x4b8689, _0x20fb10, _0x313e96]
    });
}

function bombExploded(_0x4dea7e, _0x36ea31, _0x37b806) {
    var _0x2d53c0 = a0_0x30c371;
    if (gameData[_0x2d53c0(0x1ba)]) return;
    playSound('soundExplosion');
    var _0x5a9304 = gameData['bomb'][_0x2d53c0(0x24b)](_0x4dea7e);
    gameData['bomb'][_0x2d53c0(0x108)](_0x5a9304, 0x1), gameData['map'][_0x36ea31][_0x37b806] = 0x1, TweenMax['killTweensOf'](_0x4dea7e), bombContainer[_0x2d53c0(0x12c)](_0x4dea7e), insertExplosion(_0x2d53c0(0x245), _0x36ea31, _0x37b806);
    playerData['detonator'] && (playerData[_0x2d53c0(0x261)] = ![]);
    var _0x576e63 = playerData['bombRange'];
    for (var _0x54f699 = 0x0; _0x54f699 < 0x4; _0x54f699++) {
        for (var _0x3488a2 = 0x1; _0x3488a2 <= _0x576e63; _0x3488a2++) {
            if (_0x54f699 == 0x0) nextR = _0x36ea31, nextC = _0x37b806 - _0x3488a2, type = _0x2d53c0(0x166);
            else {
                if (_0x54f699 == 0x1) nextR = _0x36ea31, nextC = _0x37b806 + _0x3488a2, type = _0x2d53c0(0x19d);
                else {
                    if (_0x54f699 == 0x2) nextR = _0x36ea31 - _0x3488a2, nextC = _0x37b806, type = 'up';
                    else _0x54f699 == 0x3 && (nextR = _0x36ea31 + _0x3488a2, nextC = _0x37b806, type = _0x2d53c0(0x125));
                }
            }
            if (gameData[_0x2d53c0(0x1d5)][nextR][nextC] == 0x5) findBombToExploded(nextR, nextC), _0x3488a2 = _0x576e63;
            else {
                if (gameData['map'][nextR][nextC] == 0x2) findBrickToExploded(nextR, nextC), !playerData[_0x2d53c0(0x191)] && (_0x3488a2 = _0x576e63);
                else gameData['map'][nextR][nextC] == 0x0 ? _0x3488a2 = _0x576e63 : (_0x3488a2 == _0x576e63 && (type = _0x2d53c0(0xd2) + type), insertExplosion(type, nextR, nextC));
            }
        }
    }
}

function findBombToExploded(_0x206cbd, _0x265dd3) {
    var _0x146af3 = a0_0x30c371;
    for (var _0x539114 = 0x0; _0x539114 < gameData[_0x146af3(0x121)]['length']; _0x539114++) {
        var _0x2e4a24 = gameData[_0x146af3(0x121)][_0x539114];
        _0x2e4a24[_0x146af3(0xc0)] == _0x265dd3 && _0x2e4a24[_0x146af3(0x1ac)] == _0x206cbd && bombExploded(_0x2e4a24, _0x206cbd, _0x265dd3);
    }
}

function findBrickToExploded(_0xd95239, _0x21f39a) {
    var _0x251ed3 = a0_0x30c371;
    for (var _0x205731 = 0x0; _0x205731 < gameData[_0x251ed3(0x18c)]['length']; _0x205731++) {
        var _0x272897 = gameData[_0x251ed3(0x18c)][_0x205731];
        if (_0x272897[_0x251ed3(0xc0)] == _0x21f39a && _0x272897[_0x251ed3(0x1ac)] == _0xd95239) {
            gameData['bricks']['splice'](_0x205731, 0x1);
            if (_0x272897[_0x251ed3(0x1c7)] != -0x1) {
                var _0x581c4e = getSpriteSheet(_0x251ed3(0x1ee));
                _0x581c4e[_0x251ed3(0x242)](_0x251ed3(0x101) + _0x272897[_0x251ed3(0x1c7)]), _0x581c4e['x'] = _0x272897['x'], _0x581c4e['y'] = _0x272897['y'], _0x581c4e[_0x251ed3(0x1c7)] = _0x272897[_0x251ed3(0x1c7)], gameData['powers'][_0x251ed3(0x1e8)](_0x581c4e), powerContainer[_0x251ed3(0x200)](_0x581c4e);
            }
            TweenMax['to'](_0x272897, 0.5, {
                'alpha': 0x0,
                'overwrite': !![],
                'onComplete': removeBrick,
                'onCompleteParams': [_0x272897]
            }), insertExplosion('brick', _0xd95239, _0x21f39a), animateMapStats(_0x272897['x'], _0x272897['y'], '+' + gameSettings['brickScore'], 0x19), playerData[_0x251ed3(0x21b)] += gameSettings[_0x251ed3(0x229)], updateGameScore();
        }
    }
}

function insertExplosion(_0x3ddf87, _0x5336ec, _0xe036f7) {
    var _0x174b7f = a0_0x30c371,
        _0x18a411 = gameSettings[_0x174b7f(0xeb)],
        _0x1f7bfc = getSpriteSheet('explosion');
    if (_0x3ddf87 == 'center') _0x1f7bfc[_0x174b7f(0xc9)](_0x174b7f(0x245));
    else {
        if (_0x3ddf87 == 'brick') _0x1f7bfc[_0x174b7f(0xc9)](_0x174b7f(0x246));
        else {
            if (_0x3ddf87 == _0x174b7f(0x166) || _0x3ddf87 == _0x174b7f(0x19d)) _0x1f7bfc[_0x174b7f(0xc9)](_0x174b7f(0x227));
            else {
                if (_0x3ddf87 == 'up' || _0x3ddf87 == _0x174b7f(0x125)) _0x1f7bfc[_0x174b7f(0xc9)]('side'), _0x1f7bfc[_0x174b7f(0x195)] = 0x5a;
                else {
                    if (_0x3ddf87 == _0x174b7f(0x208) || _0x3ddf87 == _0x174b7f(0x26a)) _0x1f7bfc[_0x174b7f(0xc9)](_0x174b7f(0xd2)), _0x3ddf87 == _0x174b7f(0x208) && (_0x1f7bfc[_0x174b7f(0x1cf)] = -0x1);
                    else(_0x3ddf87 == _0x174b7f(0x1b0) || _0x3ddf87 == _0x174b7f(0x136)) && (_0x1f7bfc[_0x174b7f(0xc9)](_0x174b7f(0xd2)), _0x1f7bfc[_0x174b7f(0x195)] = 0x5a, _0x3ddf87 == _0x174b7f(0x1b0) && (_0x1f7bfc[_0x174b7f(0x1cf)] = -0x1));
                }
            }
        }
    }
    _0x1f7bfc['x'] = _0x18a411 * _0xe036f7, _0x1f7bfc['y'] = _0x18a411 * _0x5336ec, explosionContainer[_0x174b7f(0x200)](_0x1f7bfc), TweenMax['to'](_0x1f7bfc, 0.5, {
        'overwrite': !![],
        'onUpdate': checkAroundExploded,
        'onUpdateParams': [_0x1f7bfc],
        'onComplete': completeExploded,
        'onCompleteParams': [_0x1f7bfc]
    });
}

function checkAroundExploded(_0x2d3863) {
    var _0x2d471a = a0_0x30c371;
    for (var _0x184151 = 0x0; _0x184151 < gameData['enemies']['length']; _0x184151++) {
        var _0x1a3ae7 = gameData[_0x2d471a(0x21c)][_0x184151],
            _0x4b97fa = getDistance(_0x2d3863['x'], _0x2d3863['y'], _0x1a3ae7['x'], _0x1a3ae7['y']);
        _0x4b97fa < gameSettings[_0x2d471a(0xeb)] * 0.8 && _0x1a3ae7['active'] && (playSound(_0x2d471a(0x1b1)), _0x1a3ae7['active'] = ![], _0x1a3ae7[_0x2d471a(0xc9)](_0x2d471a(0x141) + _0x1a3ae7['enemyIndex']), animateMapStats(_0x1a3ae7['x'], _0x1a3ae7['y'], '+' + enemiesArr[_0x1a3ae7['enemyIndex']][_0x2d471a(0x21b)], 0x19), TweenMax['to'](_0x1a3ae7, 0.5, {
            'overwrite': !![],
            'onComplete': removeEnemy,
            'onCompleteParams': [_0x1a3ae7]
        }));
    }
    var _0x4b97fa = getDistance(_0x2d3863['x'], _0x2d3863['y'], gameData['player']['x'], gameData[_0x2d471a(0x1ef)]['y']);
    if (_0x4b97fa < gameSettings[_0x2d471a(0xeb)] * 0.8 && !gameData[_0x2d471a(0x1ba)]) {
        if (gameData[_0x2d471a(0x1ef)][_0x2d471a(0x185)]) {} else {
            if (gameData[_0x2d471a(0x1ef)][_0x2d471a(0x1b2)]) {} else playSound(_0x2d471a(0x20d)), gameData[_0x2d471a(0x1ef)][_0x2d471a(0xc9)](_0x2d471a(0x225)), showGameStatus(_0x2d471a(0x155)), endGame();
        }
    }
}

function completeExploded(_0x4a2d15) {
    var _0x5332a5 = a0_0x30c371;
    explosionContainer[_0x5332a5(0x12c)](_0x4a2d15);
}

function removeBrick(_0x1c80f4) {
    var _0x422344 = a0_0x30c371;
    gameData[_0x422344(0x1d5)][_0x1c80f4['row']][_0x1c80f4[_0x422344(0xc0)]] = 0x1, objectsContainer[_0x422344(0x12c)](_0x1c80f4);
}

function removeEnemy(_0x40e56b) {
    var _0x115ac6 = a0_0x30c371;
    playerData[_0x115ac6(0x21b)] += enemiesArr[_0x40e56b[_0x115ac6(0x167)]][_0x115ac6(0x21b)], updateGameScore();
    var _0x24586d = gameData[_0x115ac6(0x21c)][_0x115ac6(0x24b)](_0x40e56b);
    gameData[_0x115ac6(0x21c)][_0x115ac6(0x108)](_0x24586d, 0x1), objectsContainer['removeChild'](_0x40e56b);
}

function checkCollision() {
    var _0x22d5eb = a0_0x30c371;
    for (var _0x37a139 = 0x0; _0x37a139 < gameData[_0x22d5eb(0x21c)][_0x22d5eb(0xcd)]; _0x37a139++) {
        var _0x396782 = gameData[_0x22d5eb(0x21c)][_0x37a139],
            _0x525148 = getDistance(gameData[_0x22d5eb(0x1ef)]['x'], gameData['player']['y'], _0x396782['x'], _0x396782['y']);
        _0x525148 < gameSettings['gridSize'] * 0.8 && !gameData['complete'] && (playSound('soundFail'), gameData['player']['gotoAndPlay'](_0x22d5eb(0x225)), showGameStatus(_0x22d5eb(0x155)), endGame());
    }
    for (var _0x37a139 = 0x0; _0x37a139 < gameData['powers']['length']; _0x37a139++) {
        var _0x2fb58f = gameData[_0x22d5eb(0x1ee)][_0x37a139],
            _0x525148 = getDistance(gameData[_0x22d5eb(0x1ef)]['x'], gameData['player']['y'], _0x2fb58f['x'], _0x2fb58f['y']);
        if (_0x525148 < gameSettings[_0x22d5eb(0xeb)] * 0.8) {
            playSound('soundPowerUp'), playerData[_0x22d5eb(0x105)] += powersArr[_0x2fb58f[_0x22d5eb(0x1c7)]][_0x22d5eb(0x105)], playerData[_0x22d5eb(0x116)] += powersArr[_0x2fb58f['powerIndex']][_0x22d5eb(0x116)], playerData[_0x22d5eb(0x121)] += powersArr[_0x2fb58f[_0x22d5eb(0x1c7)]]['bomb'];
            gameData['player']['walkThroughBrick'] == ![] && (gameData['player'][_0x22d5eb(0x126)] = powersArr[_0x2fb58f[_0x22d5eb(0x1c7)]]['walkThroughBrick']);
            playerData['bombThroughBrick'] == ![] && (playerData[_0x22d5eb(0x191)] = powersArr[_0x2fb58f['powerIndex']][_0x22d5eb(0x191)]);
            playerData[_0x22d5eb(0xe4)] == ![] && (playerData[_0x22d5eb(0xe4)] = powersArr[_0x2fb58f[_0x22d5eb(0x1c7)]][_0x22d5eb(0xe4)], buttonDetanator[_0x22d5eb(0xbc)] = playerData[_0x22d5eb(0xe4)]);
            gameData[_0x22d5eb(0x1ef)]['fireShield'] == ![] && (gameData[_0x22d5eb(0x1ef)][_0x22d5eb(0x185)] = powersArr[_0x2fb58f['powerIndex']][_0x22d5eb(0x185)]);
            gameData[_0x22d5eb(0x1ef)]['bombShield'] == ![] && (gameData[_0x22d5eb(0x1ef)][_0x22d5eb(0x1b2)] = powersArr[_0x2fb58f[_0x22d5eb(0x1c7)]][_0x22d5eb(0x1b2)]);
            animateMapStats(_0x2fb58f['x'], _0x2fb58f['y'], powersArr[_0x2fb58f['powerIndex']]['desc'], 0x19);
            var _0x4e2438 = gameData['powers'][_0x22d5eb(0x24b)](_0x2fb58f);
            gameData['powers']['splice'](_0x4e2438, 0x1), powerContainer[_0x22d5eb(0x12c)](_0x2fb58f);
        }
    }
}

function isMovable(_0x325b9d, _0x3b32b9, _0xad8d26, _0xcb71b7) {
    if (_0x325b9d == 0x1) return !![];
    else {
        if (_0x325b9d == 0x2 && _0x3b32b9) return !![];
        else return _0x325b9d == 0x5 && _0xcb71b7 ? !![] : ![];
    }
}

function moveCamera() {
    var _0x49b2e8 = a0_0x30c371,
        _0x21a106 = gameSettings[_0x49b2e8(0xeb)],
        _0x467759 = gameData[_0x49b2e8(0xd8)] / 0x2,
        _0x384134 = gameData['settings'][_0x49b2e8(0x18a)] - _0x467759;
    if (gameData['player']['x'] >= _0x467759 && gameData[_0x49b2e8(0x1ef)]['x'] <= _0x384134) mapMoveContainer['x'] = _0x467759 - (gameData[_0x49b2e8(0x1ef)]['x'] - _0x21a106 / 0x2);
    else gameData['player']['x'] > _0x384134 && (mapMoveContainer['x'] = _0x467759 - (_0x384134 - _0x21a106 / 0x2));
    var _0x1c035b = gameData['maskH'] / 0x2,
        _0x162e6f = gameData['settings'][_0x49b2e8(0x22b)] - _0x1c035b;
    if (gameData[_0x49b2e8(0x1ef)]['y'] >= _0x1c035b && gameData[_0x49b2e8(0x1ef)]['y'] <= _0x162e6f) mapMoveContainer['y'] = _0x1c035b - (gameData['player']['y'] - _0x21a106 / 0x2);
    else gameData['player']['y'] > _0x162e6f && (mapMoveContainer['y'] = _0x1c035b - (_0x162e6f - _0x21a106 / 0x2));
}

function animateScore(_0x51910f) {
    var _0x40af03 = 0.3;
    TweenMax['to'](_0x51910f, _0x40af03, {
        'scaleX': 0.7,
        'scaleY': 0.7,
        'overwrite': !![],
        'onComplete': function() {
            TweenMax['to'](_0x51910f, _0x40af03, {
                'scaleX': 0x1,
                'scaleY': 0x1,
                'overwrite': !![],
                'onComplete': animateScore,
                'onCompleteParams': [_0x51910f]
            });
        }
    });
}

function checkControl() {
    var _0x305b19 = a0_0x30c371,
        _0x3ecd41 = '';
    toggleTouchArrow('up', ![]), toggleTouchArrow('down', ![]), toggleTouchArrow(_0x305b19(0x166), ![]), toggleTouchArrow(_0x305b19(0x19d), ![]), gameData[_0x305b19(0x1bb)]['left'] && (_0x3ecd41 = _0x305b19(0x166)), gameData[_0x305b19(0x1bb)][_0x305b19(0x19d)] && (_0x3ecd41 = _0x305b19(0x19d)), gameData[_0x305b19(0x1bb)]['up'] && (_0x3ecd41 = 'up'), gameData[_0x305b19(0x1bb)][_0x305b19(0x125)] && (_0x3ecd41 = _0x305b19(0x125)), toggleTouchArrow(_0x3ecd41, !![]), gameData[_0x305b19(0x232)] = _0x3ecd41;
}

function updateBombIcon() {
    var _0x2f726d = a0_0x30c371;
    bombIconContainer[_0x2f726d(0xf7)]();
    var _0x55f5f9 = getSpriteSheet('bomb');
    _0x55f5f9[_0x2f726d(0x242)](0x1), _0x55f5f9[_0x2f726d(0x1cf)] = _0x55f5f9[_0x2f726d(0x128)] = 0.8, _0x55f5f9['y'] = -0xf, bombTxt['x'] = 0x1e, bombIconContainer[_0x2f726d(0x200)](_0x55f5f9);
}

function updateGameScore() {
    var _0xefd15f = a0_0x30c371;
    TweenMax['to'](tweenData, 0.5, {
        'tweenScore': playerData[_0xefd15f(0x21b)],
        'overwrite': !![],
        'onUpdate': function() {
            var _0x210ce7 = _0xefd15f;
            pointTxt[_0x210ce7(0x1ea)] = textStrings[_0x210ce7(0xed)][_0x210ce7(0x178)](_0x210ce7(0x17b), addCommas(Math[_0x210ce7(0x1f9)](tweenData[_0x210ce7(0x129)])));
        }
    });
}

function updateGameStats() {
    var _0x320528 = a0_0x30c371;
    timerTxt[_0x320528(0x1ea)] = timerRedTxt[_0x320528(0x1ea)] = textStrings[_0x320528(0xae)]['replace'](_0x320528(0x17b), millisecondsToTimeGame(timeData['timer'])), enemyTxt[_0x320528(0x1ea)] = textStrings[_0x320528(0x21c)]['replace'](_0x320528(0x17b), gameData[_0x320528(0x21c)][_0x320528(0xcd)]), bombTxt['text'] = textStrings['bomb'][_0x320528(0x178)](_0x320528(0x17b), playerData['bomb'] - gameData['bomb'][_0x320528(0xcd)]), gameData[_0x320528(0x21c)][_0x320528(0xcd)] <= 0x0 && !gameData['paused'] && completeGame();
}

function completeGame() {
    var _0xb16af0 = a0_0x30c371;
    !gameData[_0xb16af0(0x1ba)] && (playSound(_0xb16af0(0x211)), gameData['complete'] = !![], gameData[_0xb16af0(0x160)] = !![], gameData[_0xb16af0(0x1a3)] = ![], toggleGameTimer(![]), showGameStatus(_0xb16af0(0x1ba)), TweenMax['to'](gameContainer, 0x2, {
        'overwrite': !![],
        'onComplete': function() {
            playerData['level']++, setupMapLevel(), buildMap();
        }
    }));
}

function animateMapStats(_0x343027, _0x1b4b2d, _0x2eb90d, _0x23ffde) {
    var _0xe390a0 = a0_0x30c371,
        _0x5aab5e = new createjs[(_0xe390a0(0x260))](),
        _0x460b7a = new createjs[(_0xe390a0(0x1d9))]();
    _0x460b7a[_0xe390a0(0x179)] = _0x23ffde + 'px\x20upheaval_tt_brkregular', _0x460b7a[_0xe390a0(0x11e)] = _0xe390a0(0x110), _0x460b7a[_0xe390a0(0x169)] = _0xe390a0(0x245), _0x460b7a[_0xe390a0(0x138)] = _0xe390a0(0x148), _0x460b7a['text'] = _0x2eb90d;
    var _0x12f016 = new createjs[(_0xe390a0(0x1d9))]();
    _0x12f016[_0xe390a0(0x179)] = _0x23ffde + _0xe390a0(0x1f5), _0x12f016[_0xe390a0(0x11e)] = '#333', _0x12f016[_0xe390a0(0x169)] = _0xe390a0(0x245), _0x12f016[_0xe390a0(0x138)] = 'alphabetic', _0x12f016[_0xe390a0(0x1ea)] = _0x2eb90d, _0x12f016['y'] = 0x3, _0x5aab5e['x'] = _0x343027, _0x5aab5e['y'] = _0x1b4b2d + 0x14, _0x5aab5e[_0xe390a0(0x23c)] = 0x0, _0x5aab5e[_0xe390a0(0x200)](_0x12f016, _0x460b7a), mapStatusContainer[_0xe390a0(0x200)](_0x5aab5e), TweenMax['to'](_0x5aab5e, 0.5, {
        'alpha': 0x1,
        'y': _0x1b4b2d,
        'overwrite': !![],
        'onComplete': function() {
            TweenMax['to'](_0x5aab5e, 0.5, {
                'delay': 0.5,
                'alpha': 0x0,
                'overwrite': !![]
            });
        }
    });
}

function showGameStatus(_0x43ec1a) {
    var _0x314047 = a0_0x30c371;
    if (_0x43ec1a == 'stage') statusTxt['text'] = textStrings[_0x314047(0x25e)][_0x314047(0x178)](_0x314047(0x17b), playerData[_0x314047(0x262)] + 0x1);
    else {
        if (_0x43ec1a == 'timesup') statusTxt[_0x314047(0x1ea)] = textStrings[_0x314047(0x243)];
        else {
            if (_0x43ec1a == _0x314047(0x155)) statusTxt['text'] = textStrings[_0x314047(0x155)];
            else _0x43ec1a == _0x314047(0x1ba) && (statusTxt[_0x314047(0x1ea)] = textStrings['complete']);
        }
    }
    statusContainer['alpha'] = 0x0, TweenMax['to'](statusContainer, 0.5, {
        'alpha': 0x1,
        'overwrite': !![]
    });
}

function animateTimer() {
    var _0x23de8b = a0_0x30c371;
    timerRedTxt[_0x23de8b(0x23c)] = 0x0, TweenMax['to'](timerRedTxt, 0.5, {
        'alpha': 0x1,
        'overwrite': !![]
    });
}

function toggleGameTimer(_0x3469ab) {
    var _0x66d173 = a0_0x30c371;
    _0x3469ab ? (timeData[_0x66d173(0x20a)] = new Date(), timeData[_0x66d173(0x156)] = -0x1) : timeData[_0x66d173(0xae)] = 0x0, timeData[_0x66d173(0xfb)] = _0x3469ab;
}

function updateGame() {
    var _0x57eaa0 = a0_0x30c371;
    if (!gameData[_0x57eaa0(0x160)]) {
        if (timeData[_0x57eaa0(0xfb)]) {
            timeData[_0x57eaa0(0xd9)] = new Date(), timeData['elapsedTime'] = Math[_0x57eaa0(0x1f9)](timeData[_0x57eaa0(0xd9)][_0x57eaa0(0x22d)]() - timeData['startDate'][_0x57eaa0(0x22d)]()), timeData[_0x57eaa0(0xae)] = Math[_0x57eaa0(0x1f9)](timeData[_0x57eaa0(0x1a8)] - timeData[_0x57eaa0(0x25d)]);
            timeData[_0x57eaa0(0x156)] == -0x1 && (timeData['oldTimer'] = timeData[_0x57eaa0(0xae)]);
            if (timeData[_0x57eaa0(0xae)] <= 0x0) playSound(_0x57eaa0(0x20d)), showGameStatus('timesup'), endGame();
            else {
                if (timeData['oldTimer'] - timeData['timer'] > 0x3e8) {
                    if (timeData[_0x57eaa0(0xae)] < 0x3e8) animateTimer(), playSound(_0x57eaa0(0x158));
                    else timeData[_0x57eaa0(0xae)] < 0x1770 && (animateTimer(), playSound(_0x57eaa0(0x268)));
                    timeData['oldTimer'] = timeData['timer'];
                }
                timerTxt[_0x57eaa0(0x1ea)] = timerRedTxt[_0x57eaa0(0x1ea)] = textStrings[_0x57eaa0(0xae)]['replace'](_0x57eaa0(0x17b), millisecondsToTimeGame(timeData[_0x57eaa0(0xae)]));
            }
        }
        checkControl(), movePlayer(), moveCamera(), releaseBomb(), detonateBomb(), moveEnemies(), checkCollision(), updateGameStats(), updateChildrenIndex();
    }
}

function updateChildrenIndex() {
    objectsContainer['sortChildren'](sortFunction);
}
var sortFunction = function(_0x2910a6, _0x26b82e, _0x553311) {
    if (_0x2910a6['y'] > _0x26b82e['y']) return 0x1;
    if (_0x2910a6['y'] < _0x26b82e['y']) return -0x1;
    return 0x0;
};

function toggleTouchAlpha(_0x31e301, _0x425e92) {
    var _0x4f2e30 = a0_0x30c371;
    _0x425e92 ? _0x31e301[_0x4f2e30(0x23c)] = 0.6 : _0x31e301[_0x4f2e30(0x23c)] = 0x1;
}

function setupTouchControl() {
    var _0x3cce01 = a0_0x30c371;
    touchMoveContainer[_0x3cce01(0x1cf)] = touchMoveContainer[_0x3cce01(0x128)] = gameSettings[_0x3cce01(0xda)];
    var _0x4acd69 = ['Up', _0x3cce01(0x1e5), 'Down', _0x3cce01(0x18b)];
    if (gameSettings[_0x3cce01(0x1eb)]) {
        buttonTouchMove[_0x3cce01(0x1ce)]();
        for (var _0x227b3c = 0x0; _0x227b3c < _0x4acd69[_0x3cce01(0xcd)]; _0x227b3c++) {
            $[_0x3cce01(0x11a)]['arrow' + _0x4acd69[_0x227b3c]]['id'] = _0x4acd69[_0x227b3c][_0x3cce01(0x174)](), $['touch'][_0x3cce01(0x24a) + _0x4acd69[_0x227b3c]]['addEventListener']('mousedown', function(_0x3aa068) {
                var _0x18dbcf = _0x3cce01;
                toggleTouchArrow(_0x3aa068[_0x18dbcf(0x210)]['id'], !![]), gameData[_0x18dbcf(0x1bb)][_0x3aa068['target']['id']] = !![];
            }), $[_0x3cce01(0x11a)][_0x3cce01(0x24a) + _0x4acd69[_0x227b3c]]['addEventListener']('pressup', function(_0x40b7cc) {
                var _0x252c18 = _0x3cce01;
                toggleTouchArrow(_0x40b7cc['target']['id'], ![]), gameData[_0x252c18(0x1bb)][_0x40b7cc[_0x252c18(0x210)]['id']] = ![];
            });
        }
        buttonTouchMove[_0x3cce01(0xb3)] = _0x3cce01(0x14a), buttonTouchMove[_0x3cce01(0x20f)]('mousedown', function(_0x5d07d7) {
            var _0x163fe7 = _0x3cce01;
            toggleMoveEvent(_0x5d07d7, _0x163fe7(0x209));
        }), buttonTouchMove['addEventListener'](_0x3cce01(0x17d), function(_0x28f103) {
            var _0xafe61d = _0x3cce01;
            toggleMoveEvent(_0x28f103, _0xafe61d(0xee));
        }), buttonTouchMove[_0x3cce01(0x20f)](_0x3cce01(0x1a6), function(_0x37a135) {
            toggleMoveEvent(_0x37a135, 'drop');
        });
    } else {
        gameData['touchPressed'] = ![];
        for (var _0x227b3c = 0x0; _0x227b3c < _0x4acd69['length']; _0x227b3c++) {
            $['touch'][_0x4acd69[_0x227b3c]]['id'] = _0x4acd69[_0x227b3c][_0x3cce01(0x174)](), $[_0x3cce01(0x11a)][_0x3cce01(0x24a) + _0x4acd69[_0x227b3c]]['id'] = _0x4acd69[_0x227b3c][_0x3cce01(0x174)](), $['touch'][_0x3cce01(0x24a) + _0x4acd69[_0x227b3c]][_0x3cce01(0x20f)](_0x3cce01(0x11d), function(_0x494efe) {
                var _0xa9984f = _0x3cce01;
                toggleTouchArrow(_0x494efe[_0xa9984f(0x210)]['id'], !![]), gameData[_0xa9984f(0x1bb)][_0x494efe[_0xa9984f(0x210)]['id']] = !![], gameData[_0xa9984f(0xb1)] = !![];
            }), $[_0x3cce01(0x11a)][_0x3cce01(0x24a) + _0x4acd69[_0x227b3c]][_0x3cce01(0x20f)](_0x3cce01(0x1a6), function(_0x4f1e26) {
                var _0x2c509d = _0x3cce01;
                toggleTouchArrow(_0x4f1e26[_0x2c509d(0x210)]['id'], ![]), gameData[_0x2c509d(0x1bb)][_0x4f1e26[_0x2c509d(0x210)]['id']] = ![], resetControlPressed(), gameData[_0x2c509d(0xb1)] = ![];
            });
        }
        touchMoveContainer[_0x3cce01(0x20f)](_0x3cce01(0x17d), function(_0x377668) {
            var _0x55f9ba = _0x3cce01;
            if (gameData[_0x55f9ba(0xb1)]) {
                var _0x13ffe6 = _0x377668[_0x55f9ba(0x10f)] - touchMoveContainer['x'],
                    _0x47b31e = _0x377668[_0x55f9ba(0x21e)] - touchMoveContainer['y'];
                resetControlPressed();
                for (var _0x46ad22 = 0x0; _0x46ad22 < _0x4acd69[_0x55f9ba(0xcd)]; _0x46ad22++) {
                    var _0x52362e = getDistance($[_0x55f9ba(0x11a)][_0x55f9ba(0x24a) + _0x4acd69[_0x46ad22]]['x'], $[_0x55f9ba(0x11a)]['arrow' + _0x4acd69[_0x46ad22]]['y'], _0x13ffe6, _0x47b31e);
                    if (_0x52362e < 0x1e) {
                        var _0xee1e3 = _0x4acd69[_0x46ad22]['toLowerCase']();
                        toggleTouchArrow(_0xee1e3, !![]), gameData['moveControl'][_0xee1e3] = !![];
                    }
                }
            }
        });
    }
}

function resetControlPressed() {
    var _0x36aa49 = a0_0x30c371;
    gameData[_0x36aa49(0x1bb)]['up'] = ![], gameData[_0x36aa49(0x1bb)][_0x36aa49(0x166)] = ![], gameData[_0x36aa49(0x1bb)][_0x36aa49(0x19d)] = ![], gameData[_0x36aa49(0x1bb)][_0x36aa49(0x125)] = ![], resetControlUI();
}

function toggleMoveEvent(_0x281104, _0x5a7aba) {
    var _0x3ca15d = a0_0x30c371;
    switch (_0x5a7aba) {
        case _0x3ca15d(0x209):
            var _0x41a5b2 = touchMoveContainer[_0x3ca15d(0x12d)](_0x281104['currentTarget']['x'], _0x281104[_0x3ca15d(0x22a)]['y']);
            _0x281104[_0x3ca15d(0x22a)][_0x3ca15d(0x1d1)] = {
                'x': (_0x41a5b2['x'] - _0x281104['stageX']) / dpr,
                'y': (_0x41a5b2['y'] - _0x281104['stageY']) / dpr
            };
            break;
        case _0x3ca15d(0xee):
            var _0x2631b6 = touchMoveContainer['globalToLocal'](_0x281104[_0x3ca15d(0x10f)], _0x281104[_0x3ca15d(0x21e)]),
                _0x11d2e4 = _0x2631b6['x'] + _0x281104[_0x3ca15d(0x22a)]['offset']['x'],
                _0x514572 = _0x2631b6['y'] + _0x281104[_0x3ca15d(0x22a)][_0x3ca15d(0x1d1)]['y'],
                _0x4a2c80 = dragLimit(_0x11d2e4, _0x514572);
            _0x281104[_0x3ca15d(0x22a)]['x'] = _0x4a2c80['x'], _0x281104[_0x3ca15d(0x22a)]['y'] = _0x4a2c80['y'];
            var _0x1594c8 = 0xa;
            gameData[_0x3ca15d(0x1bb)]['up'] = ![], gameData[_0x3ca15d(0x1bb)][_0x3ca15d(0x166)] = ![], gameData[_0x3ca15d(0x1bb)][_0x3ca15d(0x19d)] = ![], gameData[_0x3ca15d(0x1bb)][_0x3ca15d(0x125)] = ![], toggleTouchArrow(_0x3ca15d(0x166), ![]), toggleTouchArrow(_0x3ca15d(0x19d), ![]), toggleTouchArrow('up', ![]), toggleTouchArrow(_0x3ca15d(0x125), ![]);
            _0x281104['currentTarget']['x'] <= -_0x1594c8 && (gameData[_0x3ca15d(0x1bb)][_0x3ca15d(0x166)] = !![], toggleTouchArrow(_0x3ca15d(0x166), !![]));
            _0x281104[_0x3ca15d(0x22a)]['x'] >= _0x1594c8 && (gameData[_0x3ca15d(0x1bb)][_0x3ca15d(0x19d)] = !![], toggleTouchArrow(_0x3ca15d(0x19d), !![]));
            _0x281104['currentTarget']['y'] <= -_0x1594c8 && (gameData['moveControl']['up'] = !![], toggleTouchArrow('up', !![]));
            _0x281104[_0x3ca15d(0x22a)]['y'] >= _0x1594c8 && (gameData[_0x3ca15d(0x1bb)][_0x3ca15d(0x125)] = !![], toggleTouchArrow(_0x3ca15d(0x125), !![]));
            break;
        case _0x3ca15d(0x25a):
            gameData['moveControl']['up'] = ![], gameData['moveControl']['left'] = ![], gameData[_0x3ca15d(0x1bb)][_0x3ca15d(0x19d)] = ![], gameData[_0x3ca15d(0x1bb)]['down'] = ![], resetControlUI();
            break;
    }
}

function dragLimit(_0x4823b6, _0x433a70) {
    var _0x587231 = a0_0x30c371,
        _0x2d23a8 = 0x14,
        _0x110b29 = dragDistance([_0x4823b6, _0x433a70], [0x0, 0x0]);
    if (_0x110b29 <= _0x2d23a8) return {
        'x': _0x4823b6,
        'y': _0x433a70
    };
    else {
        _0x4823b6 = _0x4823b6 - 0x0, _0x433a70 = _0x433a70 - 0x0;
        var _0x3bd1fc = Math[_0x587231(0x267)](_0x433a70, _0x4823b6);
        return {
            'x': Math[_0x587231(0x157)](_0x3bd1fc) * _0x2d23a8 + 0x0,
            'y': Math[_0x587231(0x266)](_0x3bd1fc) * _0x2d23a8 + 0x0
        };
    }
}

function dragDistance(_0x3559cd, _0x1a5407) {
    var _0x59e4aa = a0_0x30c371,
        _0x53997d = _0x3559cd[0x0],
        _0x3cd327 = _0x3559cd[0x1],
        _0x452b41 = _0x1a5407[0x0],
        _0x5c6004 = _0x1a5407[0x1];
    return Math[_0x59e4aa(0x133)](Math[_0x59e4aa(0x1ca)](_0x53997d - _0x452b41, 0x2) + Math[_0x59e4aa(0x1ca)](_0x3cd327 - _0x5c6004, 0x2));
}

function resetControlUI() {
    var _0x2739f8 = a0_0x30c371;
    toggleTouchArrow('up', ![]), toggleTouchArrow(_0x2739f8(0x125), ![]), toggleTouchArrow(_0x2739f8(0x166), ![]), toggleTouchArrow(_0x2739f8(0x19d), ![]);
    if (gameSettings[_0x2739f8(0x1eb)]) buttonTouchMove['x'] = buttonTouchMove['y'] = 0x0;
}

function toggleTouchArrow(_0x432d22, _0x29dc2e) {
    var _0x107987 = a0_0x30c371;
    _0x432d22 = capitalizeFirstLetter(_0x432d22), _0x432d22 && (!_0x29dc2e ? ($[_0x107987(0x11a)][_0x432d22]['visible'] = ![], $[_0x107987(0x11a)][_0x107987(0x24a) + _0x432d22][_0x107987(0xbc)] = !![]) : ($[_0x107987(0x11a)][_0x432d22][_0x107987(0xbc)] = !![], $[_0x107987(0x11a)]['arrow' + _0x432d22][_0x107987(0xbc)] = ![]));
}

function capitalizeFirstLetter(_0x3764bd) {
    var _0x4a54f5 = a0_0x30c371;
    return _0x3764bd['charAt'](0x0)[_0x4a54f5(0x13d)]() + _0x3764bd['slice'](0x1);
}

function endGame() {
    var _0x22d12d = a0_0x30c371;
    gameData['paused'] = !![], gameData[_0x22d12d(0x1a3)] = ![], gameData[_0x22d12d(0x1ba)] = !![], stopSoundLoop(_0x22d12d(0x1d7)), resetControlUI(), toggleGameTimer(![]), TweenMax['to'](gameContainer, 0x3, {
        'overwrite': !![],
        'onComplete': function() {
            var _0x4371ca = _0x22d12d;
            goPage(_0x4371ca(0xc5));
        }
    });
}

function millisecondsToTimeGame(_0xab8441) {
    var _0x2e1544 = a0_0x30c371,
        _0x162717 = _0xab8441 % 0x3e8,
        _0x922d4c = Math[_0x2e1544(0x1f9)](_0xab8441 / 0x3e8 % 0x3c),
        _0x83c8cd = Math['floor'](_0xab8441 / (0x3c * 0x3e8) % 0x3c);
    return _0x922d4c < 0xa && (_0x922d4c = '0' + _0x922d4c), _0x83c8cd < 0xa && (_0x83c8cd = '0' + _0x83c8cd), _0x83c8cd + ':' + _0x922d4c;
}

function toggleOptions(_0x44686c) {
    var _0x5db54b = a0_0x30c371;
    optionsContainer['visible'] ? optionsContainer['visible'] = ![] : optionsContainer['visible'] = !![], _0x44686c != undefined && (optionsContainer[_0x5db54b(0xbc)] = _0x44686c);
}

function toggleSoundMute(_0x2d508d) {
    var _0x65b9b4 = a0_0x30c371;
    buttonSoundOff[_0x65b9b4(0xbc)] = ![], buttonSoundOn[_0x65b9b4(0xbc)] = ![], toggleSoundInMute(_0x2d508d), _0x2d508d ? buttonSoundOn[_0x65b9b4(0xbc)] = !![] : buttonSoundOff['visible'] = !![];
}

function toggleMusicMute(_0x3f21df) {
    var _0x143ccd = a0_0x30c371;
    buttonMusicOff['visible'] = ![], buttonMusicOn['visible'] = ![], toggleMusicInMute(_0x3f21df), _0x3f21df ? buttonMusicOn[_0x143ccd(0xbc)] = !![] : buttonMusicOff['visible'] = !![];
}

function toggleFullScreen() {
    var _0x51a161 = a0_0x30c371;
    if (!document[_0x51a161(0x143)] && !document['mozFullScreenElement'] && !document[_0x51a161(0x1b7)] && !document[_0x51a161(0x249)]) {
        if (document[_0x51a161(0x117)][_0x51a161(0x162)]) document['documentElement'][_0x51a161(0x162)]();
        else {
            if (document[_0x51a161(0x117)]['msRequestFullscreen']) document[_0x51a161(0x117)][_0x51a161(0x16e)]();
            else {
                if (document['documentElement'][_0x51a161(0x1c3)]) document[_0x51a161(0x117)][_0x51a161(0x1c3)]();
                else document[_0x51a161(0x117)][_0x51a161(0x17f)] && document[_0x51a161(0x117)]['webkitRequestFullscreen'](Element['ALLOW_KEYBOARD_INPUT']);
            }
        }
    } else {
        if (document[_0x51a161(0x16b)]) document[_0x51a161(0x16b)]();
        else {
            if (document[_0x51a161(0x222)]) document[_0x51a161(0x222)]();
            else {
                if (document[_0x51a161(0x109)]) document[_0x51a161(0x109)]();
                else document[_0x51a161(0xca)] && document[_0x51a161(0xca)]();
            }
        }
    }
}

function shareLinks(_0x124e95, _0x5c4080) {
    var _0x43ef9f = a0_0x30c371;
    shareSettings[_0x43ef9f(0xe5)] && gtag('event', _0x43ef9f(0x203), {
        'event_category': 'share',
        'event_label': _0x124e95
    });
    var _0x418448 = location[_0x43ef9f(0x16f)];
    _0x418448 = encodeURIComponent(_0x418448[_0x43ef9f(0xd0)](0x0, _0x418448['lastIndexOf']('/') + 0x1));
    var _0x44731a = shareSettings[_0x43ef9f(0x1a0)]['replace']('[SCORE]', _0x5c4080),
        _0x3a0979 = shareSettings[_0x43ef9f(0xbb)][_0x43ef9f(0x178)](_0x43ef9f(0x256), _0x5c4080),
        _0x1b7126 = '';
    if (_0x124e95 == _0x43ef9f(0x21d)) shareSettings[_0x43ef9f(0x269)] ? (_0x418448 = decodeURIComponent(_0x418448), _0x1b7126 = _0x43ef9f(0x1fa) + encodeURIComponent(_0x418448 + _0x43ef9f(0x239) + _0x44731a + _0x43ef9f(0x16d) + _0x418448 + _0x43ef9f(0x255) + _0x418448 + _0x43ef9f(0x153))) : _0x1b7126 = _0x43ef9f(0x1fa) + _0x418448;
    else {
        if (_0x124e95 == _0x43ef9f(0xba)) _0x1b7126 = '#' + _0x3a0979 + _0x43ef9f(0x16d) + _0x418448;
        else {
            if (_0x124e95 == 'whatsapp') _0x1b7126 = _0x43ef9f(0xe2) + _0x3a0979 + _0x43ef9f(0x220) + _0x418448;
            else {
                if (_0x124e95 == _0x43ef9f(0x14b)) _0x1b7126 = '#' + _0x418448 + _0x43ef9f(0x235) + _0x3a0979;
                else {
                    if (_0x124e95 == 'reddit') _0x1b7126 = _0x43ef9f(0x103) + _0x418448 + '&title=' + _0x3a0979;
                    else _0x124e95 == _0x43ef9f(0x1de) && (_0x1b7126 = _0x43ef9f(0x10d) + _0x418448);
                }
            }
        }
    }
    window[_0x43ef9f(0xff)](_0x1b7126);
}
var stageWidth, stageHeight = 0x0,
    isLoaded = ![];
$(function() {
    var _0x4a41ae = a0_0x30c371,
        _0x56057d = function() {
            var _0x5a9a4c = a0_0x839d;
            try {
                createjs['WebAudioPlugin'][_0x5a9a4c(0x25c)]['state'] === _0x5a9a4c(0x1ed) && (createjs[_0x5a9a4c(0x20c)]['context'][_0x5a9a4c(0x1dc)](), window[_0x5a9a4c(0x238)](_0x5a9a4c(0x203), _0x56057d));
            } catch (_0x208951) {
                console['error'](_0x5a9a4c(0x1d2)), console['error'](_0x208951);
            }
        };
    window[_0x4a41ae(0x20f)]('click', _0x56057d), window[_0x4a41ae(0x224)][_0x4a41ae(0x258)][_0x4a41ae(0x1da)](0x0, 0x4) === _0x4a41ae(0x13c) && alert(_0x4a41ae(0x252)), $(window)[_0x4a41ae(0x137)](function() {
        resizeLoaderFunc();
    }), resizeLoaderFunc(), checkBrowser();
});

function resizeLoaderFunc() {
    var _0x2f1a38 = a0_0x30c371;
    stageWidth = $(window)['width'](), stageHeight = $(window)[_0x2f1a38(0x22b)](), $(_0x2f1a38(0x150))[_0x2f1a38(0x13b)](_0x2f1a38(0x166), checkContentWidth($(_0x2f1a38(0x150)))), $(_0x2f1a38(0x150))['css'](_0x2f1a38(0x19c), checkContentHeight($(_0x2f1a38(0x150)))), $(_0x2f1a38(0x1a7))[_0x2f1a38(0x13b)]('left', checkContentWidth($(_0x2f1a38(0x150)))), $('#notSupportHolder')['css'](_0x2f1a38(0x19c), checkContentHeight($(_0x2f1a38(0x150))));
}
var browserSupport = ![],
    isMobile, isTablet, isDesktop;

function checkBrowser() {
    var _0x53752f = a0_0x30c371;
    if (typeof MobileDetect === 'function') {
        var _0x4df5a3 = new MobileDetect(window[_0x53752f(0x11c)][_0x53752f(0x151)]);
        isMobile = _0x4df5a3['mobile'](), isTablet = _0x4df5a3['tablet'](), isMobile == null && isTablet == null && (isDesktop = !![]);
    }
    var _0x1e6d96 = document[_0x53752f(0x17c)](_0x53752f(0xb7));
    _0x1e6d96[_0x53752f(0x1b4)] && (browserSupport = !![]), browserSupport ? !isLoaded && (isLoaded = !![], initPreload()) : $('#notSupportHolder')[_0x53752f(0x10c)]();
}

function initPreload() {
    var _0x6f6cf7 = a0_0x30c371;
    toggleLoader(!![]), checkMobileEvent(), $(window)['resize'](function() {
        clearTimeout(resizeTimer), resizeTimer = setTimeout(checkMobileOrientation, 0x3e8);
    }), resizeGameFunc(), loader = new createjs['LoadQueue'](![]), manifest = [{
        'src': 'assets/background.png',
        'id': 'background'
    }, {
        'src': 'assets/background_p.png',
        'id': _0x6f6cf7(0x1d0)
    }, {
        'src': _0x6f6cf7(0x23b),
        'id': _0x6f6cf7(0x1b3)
    }, {
        'src': 'assets/logo_p.png',
        'id': _0x6f6cf7(0x14f)
    }, {
        'src': _0x6f6cf7(0xdd),
        'id': _0x6f6cf7(0x1c6)
    }, {
        'src': _0x6f6cf7(0x111),
        'id': 'buttonSelect'
    }, {
        'src': _0x6f6cf7(0x17a),
        'id': _0x6f6cf7(0x145)
    }, {
        'src': 'assets/item_tutorial.png',
        'id': _0x6f6cf7(0xdc)
    }, {
        'src': _0x6f6cf7(0x1b9),
        'id': _0x6f6cf7(0x159)
    }, {
        'src': 'assets/item_tutorial_02.png',
        'id': _0x6f6cf7(0xab)
    }, {
        'src': _0x6f6cf7(0x120),
        'id': _0x6f6cf7(0x1df)
    }, {
        'src': _0x6f6cf7(0xc1),
        'id': _0x6f6cf7(0x236)
    }, {
        'src': _0x6f6cf7(0x21f),
        'id': _0x6f6cf7(0x10e)
    }, {
        'src': _0x6f6cf7(0x10a),
        'id': 'buttonBomb'
    }, {
        'src': _0x6f6cf7(0x23f),
        'id': _0x6f6cf7(0x22c)
    }, {
        'src': _0x6f6cf7(0xb2),
        'id': _0x6f6cf7(0xaf)
    }, {
        'src': 'assets/button_touch_move.png',
        'id': _0x6f6cf7(0x170)
    }, {
        'src': _0x6f6cf7(0x1aa),
        'id': _0x6f6cf7(0x216)
    }, {
        'src': _0x6f6cf7(0x123),
        'id': 'buttonTouchPress'
    }, {
        'src': _0x6f6cf7(0x134),
        'id': _0x6f6cf7(0x188)
    }, {
        'src': _0x6f6cf7(0x14d),
        'id': _0x6f6cf7(0x1f0)
    }, {
        'src': _0x6f6cf7(0x248),
        'id': _0x6f6cf7(0xe1)
    }, {
        'src': 'assets/button_touch_right.png',
        'id': _0x6f6cf7(0xbf)
    }, {
        'src': 'assets/button_touch_up_press.png',
        'id': _0x6f6cf7(0x180)
    }, {
        'src': _0x6f6cf7(0x193),
        'id': _0x6f6cf7(0xde)
    }, {
        'src': 'assets/button_touch_left_press.png',
        'id': 'buttonTouchLeftPress'
    }, {
        'src': 'assets/button_touch_right_press.png',
        'id': 'buttonTouchRightPress'
    }, {
        'src': _0x6f6cf7(0x18f),
        'id': _0x6f6cf7(0xd6)
    }, {
        'src': 'assets/button_share.png',
        'id': 'buttonShare'
    }, {
        'src': _0x6f6cf7(0x25b),
        'id': _0x6f6cf7(0x165)
    }, {
        'src': _0x6f6cf7(0x1c0),
        'id': _0x6f6cf7(0xcf)
    }, {
        'src': _0x6f6cf7(0x1f6),
        'id': 'buttonTwitter'
    }, {
        'src': _0x6f6cf7(0x172),
        'id': _0x6f6cf7(0x144)
    }, {
        'src': 'assets/social/button_telegram.png',
        'id': _0x6f6cf7(0x230)
    }, {
        'src': _0x6f6cf7(0xc8),
        'id': _0x6f6cf7(0x132)
    }, {
        'src': 'assets/social/button_linkedin.png',
        'id': 'buttonLinkedin'
    }, {
        'src': 'assets/button_continue.png',
        'id': _0x6f6cf7(0x113)
    }, {
        'src': _0x6f6cf7(0x241),
        'id': _0x6f6cf7(0xa9)
    }, {
        'src': 'assets/item_pop_p.png',
        'id': _0x6f6cf7(0x15e)
    }, {
        'src': _0x6f6cf7(0xd4),
        'id': _0x6f6cf7(0x212)
    }, {
        'src': _0x6f6cf7(0x1bd),
        'id': _0x6f6cf7(0x263)
    }, {
        'src': _0x6f6cf7(0x1ad),
        'id': _0x6f6cf7(0x1ae)
    }, {
        'src': 'assets/button_sound_on.png',
        'id': _0x6f6cf7(0x1a2)
    }, {
        'src': _0x6f6cf7(0xbe),
        'id': _0x6f6cf7(0x146)
    }, {
        'src': _0x6f6cf7(0x228),
        'id': _0x6f6cf7(0x1e2)
    }, {
        'src': _0x6f6cf7(0x231),
        'id': 'buttonMusicOff'
    }, {
        'src': _0x6f6cf7(0x197),
        'id': _0x6f6cf7(0xb8)
    }, {
        'src': _0x6f6cf7(0xb0),
        'id': 'buttonSettings'
    }];
    for (var _0x3808d0 = 0x0; _0x3808d0 < themesArr[_0x6f6cf7(0xcd)]; _0x3808d0++) {
        manifest['push']({
            'src': themesArr[_0x3808d0][_0x6f6cf7(0x1fd)][_0x6f6cf7(0x183)],
            'id': _0x6f6cf7(0x1fd) + _0x3808d0
        }), manifest[_0x6f6cf7(0x1e8)]({
            'src': themesArr[_0x3808d0][_0x6f6cf7(0x121)][_0x6f6cf7(0x183)],
            'id': _0x6f6cf7(0x121) + _0x3808d0
        }), manifest[_0x6f6cf7(0x1e8)]({
            'src': themesArr[_0x3808d0][_0x6f6cf7(0x15d)]['src'],
            'id': _0x6f6cf7(0x15d) + _0x3808d0
        }), manifest[_0x6f6cf7(0x1e8)]({
            'src': themesArr[_0x3808d0][_0x6f6cf7(0x1ef)][_0x6f6cf7(0x183)],
            'id': _0x6f6cf7(0x1ef) + _0x3808d0
        }), manifest[_0x6f6cf7(0x1e8)]({
            'src': themesArr[_0x3808d0][_0x6f6cf7(0x21c)][_0x6f6cf7(0x183)],
            'id': _0x6f6cf7(0x21c) + _0x3808d0
        }), manifest[_0x6f6cf7(0x1e8)]({
            'src': themesArr[_0x3808d0][_0x6f6cf7(0x1ee)][_0x6f6cf7(0x183)],
            'id': _0x6f6cf7(0x1ee) + _0x3808d0
        });
    }
    typeof addScoreboardAssets == 'function' && addScoreboardAssets(), audioOn = !![], !isDesktop ? !enableMobileAudio && (audioOn = ![]) : !enableDesktopAudio && (audioOn = ![]), audioOn && (manifest['push']({
        'src': _0x6f6cf7(0x215),
        'id': _0x6f6cf7(0x112)
    }), manifest[_0x6f6cf7(0x1e8)]({
        'src': _0x6f6cf7(0x131),
        'id': _0x6f6cf7(0x20d)
    }), manifest[_0x6f6cf7(0x1e8)]({
        'src': _0x6f6cf7(0x218),
        'id': _0x6f6cf7(0x1d7)
    }), manifest[_0x6f6cf7(0x1e8)]({
        'src': _0x6f6cf7(0x122),
        'id': _0x6f6cf7(0x1d6)
    }), manifest[_0x6f6cf7(0x1e8)]({
        'src': _0x6f6cf7(0xdf),
        'id': _0x6f6cf7(0x1fe)
    }), manifest[_0x6f6cf7(0x1e8)]({
        'src': _0x6f6cf7(0x1e6),
        'id': _0x6f6cf7(0xb6)
    }), manifest[_0x6f6cf7(0x1e8)]({
        'src': _0x6f6cf7(0x149),
        'id': _0x6f6cf7(0x175)
    }), manifest[_0x6f6cf7(0x1e8)]({
        'src': _0x6f6cf7(0x12b),
        'id': _0x6f6cf7(0x211)
    }), manifest['push']({
        'src': _0x6f6cf7(0xec),
        'id': 'soundExplosion'
    }), manifest['push']({
        'src': 'assets/sounds/sound_alarm.ogg',
        'id': _0x6f6cf7(0x268)
    }), manifest[_0x6f6cf7(0x1e8)]({
        'src': _0x6f6cf7(0x19f),
        'id': _0x6f6cf7(0x158)
    }), manifest[_0x6f6cf7(0x1e8)]({
        'src': 'assets/sounds/sound_detonate.ogg',
        'id': _0x6f6cf7(0x13a)
    }), manifest['push']({
        'src': _0x6f6cf7(0x140),
        'id': _0x6f6cf7(0x1b1)
    }), manifest[_0x6f6cf7(0x1e8)]({
        'src': _0x6f6cf7(0xea),
        'id': _0x6f6cf7(0x207)
    }), manifest['push']({
        'src': _0x6f6cf7(0xd7),
        'id': _0x6f6cf7(0xe8)
    }), createjs['Sound']['alternateExtensions'] = [_0x6f6cf7(0x1b8)], loader[_0x6f6cf7(0x20e)](createjs[_0x6f6cf7(0x221)])), loader[_0x6f6cf7(0x20f)]('complete', handleComplete), loader['addEventListener'](_0x6f6cf7(0x14c), fileComplete), loader[_0x6f6cf7(0x20f)](_0x6f6cf7(0x24f), handleFileError), loader['on'](_0x6f6cf7(0x26b), handleProgress, this), loader['loadManifest'](manifest);
}

function fileComplete(_0x3c3c34) {
    var _0x4c3732 = a0_0x30c371,
        _0x5928b9 = _0x3c3c34[_0x4c3732(0xc7)];
}

function handleFileError(_0x52f72b) {
    var _0x314df3 = a0_0x30c371;
    console[_0x314df3(0xcb)](_0x314df3(0x198), _0x52f72b);
}

function handleProgress() {
    var _0x38d8f3 = a0_0x30c371;
    $('#mainLoader\x20span')[_0x38d8f3(0xac)](Math[_0x38d8f3(0x152)](loader[_0x38d8f3(0x26b)] / 0x1 * 0x64) + '%');
}

function handleComplete() {
    toggleLoader(![]), initMain();
};

function toggleLoader(_0x3725a4) {
    var _0x3abbd2 = a0_0x30c371;
    _0x3725a4 ? $(_0x3abbd2(0x150))[_0x3abbd2(0x10c)]() : $(_0x3abbd2(0x150))[_0x3abbd2(0xb9)]();
}
var stageW = 0x500,
    stageH = 0x300,
    contentW = 0x400,
    contentH = 0x240;
const viewport = {
        'isLandscape': !![]
    },
    landscapeSize = {
        'w': stageW,
        'h': stageH,
        'cW': contentW,
        'cH': contentH
    },
    portraitSize = {
        'w': 0x300,
        'h': 0x400,
        'cW': 0x240,
        'cH': 0x384
    };

function initMain() {
    var _0x37c1bb = a0_0x30c371;
    isDesktop && $(_0x37c1bb(0xf0))[_0x37c1bb(0x10c)](), initGameCanvas(stageW, stageH), buildGameCanvas(), buildGameButton(), typeof buildScoreBoardCanvas == _0x37c1bb(0x1c1) && buildScoreBoardCanvas(), goPage(_0x37c1bb(0xad)), checkMobileOrientation(), resizeCanvas();
}
var windowW = windowH = 0x0,
    scalePercent = 0x0;
const dpr = window[a0_0x30c371(0xf3)] || 0x1,
    offset = {
        'x': 0x0,
        'y': 0x0,
        'left': 0x0,
        'top': 0x0
    };

function resizeGameFunc() {
    setTimeout(function() {
        var _0x19c45b = a0_0x839d;
        $(_0x19c45b(0x1b6))[_0x19c45b(0x13b)](_0x19c45b(0x166), checkContentWidth($(_0x19c45b(0x1b6)))), $(_0x19c45b(0x1b6))['css'](_0x19c45b(0x19c), checkContentHeight($(_0x19c45b(0x1b6)))), windowW = window['innerWidth'], windowH = window['innerHeight'], scalePercent = Math[_0x19c45b(0x168)](windowW / contentW, windowH / contentH), scalePercent = scalePercent > 0x1 ? 0x1 : scalePercent;
        windowW > stageW && windowH > stageH && (windowW > stageW && (scalePercent = windowW / stageW, stageH * scalePercent > windowH && (scalePercent = windowH / stageH)));
        const _0x19c3bf = stageW * scalePercent,
            _0x358c7e = stageH * scalePercent;
        offset[_0x19c45b(0x166)] = 0x0, offset[_0x19c45b(0x19c)] = 0x0;
        _0x19c3bf > windowW ? offset[_0x19c45b(0x166)] = -(_0x19c3bf - windowW) : offset[_0x19c45b(0x166)] = windowW - _0x19c3bf;
        _0x358c7e > windowH ? offset[_0x19c45b(0x19c)] = -(_0x358c7e - windowH) : offset[_0x19c45b(0x19c)] = windowH - _0x358c7e;
        offset['x'] = 0x0, offset['y'] = 0x0;
        offset[_0x19c45b(0x166)] < 0x0 && (offset['x'] = Math[_0x19c45b(0x21a)](offset['left'] / scalePercent / 0x2));
        offset[_0x19c45b(0x19c)] < 0x0 && (offset['y'] = Math[_0x19c45b(0x21a)](offset[_0x19c45b(0x19c)] / scalePercent / 0x2));
        const _0x2fea27 = document[_0x19c45b(0xfd)](_0x19c45b(0x161)),
            _0x2708bd = _0x2fea27[_0x19c45b(0x1b4)]('2d');
        _0x2fea27['style'][_0x19c45b(0x18a)] = _0x19c3bf + 'px', _0x2fea27['style'][_0x19c45b(0x22b)] = _0x358c7e + 'px', _0x2fea27[_0x19c45b(0x25f)][_0x19c45b(0x166)] = offset[_0x19c45b(0x166)] / 0x2 + 'px', _0x2fea27[_0x19c45b(0x25f)][_0x19c45b(0x19c)] = offset[_0x19c45b(0x19c)] / 0x2 + 'px', _0x2fea27[_0x19c45b(0x18a)] = stageW * dpr, _0x2fea27[_0x19c45b(0x22b)] = stageH * dpr, $(window)[_0x19c45b(0x1dd)](0x0), resizeCanvas(), typeof resizeScore == 'function' && resizeScore();
    }, 0x64);
}
var resizeTimer;

function checkMobileEvent() {
    var _0x14928c = a0_0x30c371;
    !isDesktop && ($(window)[_0x14928c(0x1d4)]('orientationchange')['on'](_0x14928c(0xf6), function(_0x19522a) {
        var _0x9760b4 = _0x14928c;
        $(_0x9760b4(0xf0))[_0x9760b4(0xb9)](), $('#rotateHolder')[_0x9760b4(0xb9)](), clearTimeout(resizeTimer), resizeTimer = setTimeout(checkMobileOrientation, 0x3e8);
    }), checkMobileOrientation());
}

function checkMobileOrientation() {
    var _0x349f0f = a0_0x30c371,
        _0x3a75b0 = ![];
    window[_0x349f0f(0xe9)] > window[_0x349f0f(0x1a5)] && (_0x3a75b0 = !![]), viewport['isLandscape'] = _0x3a75b0, changeViewport(viewport[_0x349f0f(0x250)]), resizeGameFunc(), $(_0x349f0f(0xf0))[_0x349f0f(0x10c)]();
}

function toggleRotate(_0x3a0f55) {
    var _0xe41bf4 = a0_0x30c371;
    _0x3a0f55 ? $(_0xe41bf4(0x184))['fadeIn']() : $(_0xe41bf4(0x184))[_0xe41bf4(0x118)](), resizeGameFunc();
}

function checkContentHeight(_0x42d07a) {
    var _0x51c922 = a0_0x30c371,
        _0x4fbca9 = $(window)[_0x51c922(0x22b)](),
        _0x58fe96 = _0x4fbca9 / 0x2 - _0x42d07a[_0x51c922(0x22b)]() / 0x2;
    return _0x58fe96;
}

function checkContentWidth(_0x59173e) {
    var _0x207c07 = a0_0x30c371,
        _0x41da2b = $(window)[_0x207c07(0x18a)](),
        _0x5f1aa1 = _0x41da2b / 0x2 - _0x59173e[_0x207c07(0x18a)]() / 0x2;
    return _0x5f1aa1;
}

function shuffle(_0x440a41) {
    var _0x59e177 = a0_0x30c371,
        _0x3fcd96 = _0x440a41[_0x59e177(0xcd)],
        _0x506a9e, _0x4e287a;
    while (0x0 !== _0x3fcd96) {
        _0x4e287a = Math[_0x59e177(0x1f9)](Math[_0x59e177(0x257)]() * _0x3fcd96), _0x3fcd96 -= 0x1, _0x506a9e = _0x440a41[_0x3fcd96], _0x440a41[_0x3fcd96] = _0x440a41[_0x4e287a], _0x440a41[_0x4e287a] = _0x506a9e;
    }
    return _0x440a41;
}

function randomBoolean() {
    var _0x12a652 = a0_0x30c371;
    return Math[_0x12a652(0x257)]() < 0.5;
}

function getDistance(_0x1b7570, _0x709231, _0x52ff6d, _0x1e49c7) {
    var _0x1c9171 = a0_0x30c371,
        _0x448daa = Math[_0x1c9171(0x133)](Math[_0x1c9171(0x1ca)](_0x1b7570 - _0x52ff6d, 0x2) + Math[_0x1c9171(0x1ca)](_0x709231 - _0x1e49c7, 0x2));
    return _0x448daa;
}

function sortOnObject(_0x29ca28, _0x1ce86a, _0x9fea6b) {
    var _0x45d8df = a0_0x30c371;
    return _0x9fea6b ? _0x29ca28['sort'](function(_0x30862f, _0x43fe74) {
        var _0x48ac53 = _0x30862f[_0x1ce86a],
            _0xf3a90a = _0x43fe74[_0x1ce86a];
        if (_0x48ac53 == _0xf3a90a) return 0x0;
        return _0x48ac53 < _0xf3a90a ? 0x1 : -0x1;
    }) : _0x29ca28[_0x45d8df(0x259)](function(_0x317e5a, _0x403503) {
        var _0x227de5 = _0x317e5a[_0x1ce86a],
            _0x26593c = _0x403503[_0x1ce86a];
        if (_0x227de5 == _0x26593c) return 0x0;
        return _0x227de5 > _0x26593c ? 0x1 : -0x1;
    }), _0x29ca28;
}

function randomIntFromInterval(_0x347306, _0x1a9ded) {
    var _0x1d116b = a0_0x30c371;
    return Math[_0x1d116b(0x1f9)](Math[_0x1d116b(0x257)]() * (_0x1a9ded - _0x347306 + 0x1) + _0x347306);
}

function addCommas(_0x2674d0) {
    var _0x10800e = a0_0x30c371;
    _0x2674d0 += '', x = _0x2674d0[_0x10800e(0xc4)]('.'), x1 = x[0x0], x2 = x[_0x10800e(0xcd)] > 0x1 ? '.' + x[0x1] : '';
    var _0x27c826 = /(\d+)(\d{3})/;
    while (_0x27c826[_0x10800e(0x173)](x1)) {
        x1 = x1[_0x10800e(0x178)](_0x27c826, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

function swapArray(_0x23cf63, _0x1fc76a, _0x387bc9) {
    var _0x5f1665 = _0x23cf63[_0x1fc76a];
    _0x23cf63[_0x1fc76a] = _0x23cf63[_0x387bc9], _0x23cf63[_0x387bc9] = _0x5f1665;
}

function getCenterPosition(_0x3361a6, _0x4b74d9, _0x3747d2, _0xef0681) {
    var _0x5667d0 = {
        'x': 0x0,
        'y': 0x0
    };
    return _0x5667d0['x'] = (_0x3361a6 + _0x3747d2) / 0x2, _0x5667d0['y'] = (_0x4b74d9 + _0xef0681) / 0x2, _0x5667d0;
}

function isEven(_0x527106) {
    if (_0x527106 % 0x2 == 0x0) return !![];
    else return ![];
}
const enableDesktopAudio = !![],
    enableMobileAudio = !![],
    muteSoundOn = ![],
    muteMusicOn = ![];
var audioOn, soundMute = ![],
    musicMute = ![];
$[a0_0x30c371(0x226)] = {};
var soundID = 0x0,
    soundPushArr = [],
    soundLoopPushArr = [],
    musicPushArr = [];

function playSound(_0x448a7e, _0x3217d3) {
    var _0x5bc9f8 = a0_0x30c371;
    if (audioOn) {
        var _0x4ca8ec = soundID;
        soundPushArr[_0x5bc9f8(0x1e8)](_0x4ca8ec), soundID++;
        var _0x4e761a = _0x3217d3 == undefined ? 0x1 : _0x3217d3;
        $['sound'][_0x4ca8ec] = createjs['Sound'][_0x5bc9f8(0x16a)](_0x448a7e), $[_0x5bc9f8(0x226)][_0x4ca8ec]['defaultVol'] = _0x4e761a, setSoundVolume(_0x4ca8ec), $['sound'][_0x4ca8ec][_0x5bc9f8(0x1ce)](), $[_0x5bc9f8(0x226)][_0x4ca8ec][_0x5bc9f8(0x20f)](_0x5bc9f8(0x1ba), function() {
            var _0x288e35 = _0x5bc9f8,
                _0x7fc23d = soundPushArr['indexOf'](_0x4ca8ec);
            _0x7fc23d != -0x1 && soundPushArr[_0x288e35(0x108)](_0x7fc23d, 0x1);
        });
    }
}

function playSoundLoop(_0x1b0d39) {
    var _0x3bb429 = a0_0x30c371;
    audioOn && ($[_0x3bb429(0x226)][_0x1b0d39] == null && (soundLoopPushArr['push'](_0x1b0d39), $[_0x3bb429(0x226)][_0x1b0d39] = createjs[_0x3bb429(0x221)][_0x3bb429(0x16a)](_0x1b0d39), $[_0x3bb429(0x226)][_0x1b0d39]['defaultVol'] = 0x1, setSoundLoopVolume(_0x1b0d39), $['sound'][_0x1b0d39][_0x3bb429(0x1ce)](), $[_0x3bb429(0x226)][_0x1b0d39][_0x3bb429(0x20f)](_0x3bb429(0x1ba), function() {
        var _0x2c871b = _0x3bb429;
        $[_0x2c871b(0x226)][_0x1b0d39][_0x2c871b(0x16a)]();
    })));
}

function toggleSoundLoop(_0x3d255e, _0x30cfdc) {
    var _0x1264c6 = a0_0x30c371;
    audioOn && ($[_0x1264c6(0x226)][_0x3d255e] != null && (_0x30cfdc ? $[_0x1264c6(0x226)][_0x3d255e][_0x1264c6(0x16a)]() : $[_0x1264c6(0x226)][_0x3d255e]['paused'] = !![]));
}

function stopSoundLoop(_0x5bb98b) {
    var _0x490555 = a0_0x30c371;
    if (audioOn) {
        if ($[_0x490555(0x226)][_0x5bb98b] != null) {
            $[_0x490555(0x226)][_0x5bb98b][_0x490555(0xc3)](), $[_0x490555(0x226)][_0x5bb98b] = null;
            var _0x379aa7 = soundLoopPushArr[_0x490555(0x24b)](_0x5bb98b);
            _0x379aa7 != -0x1 && soundLoopPushArr[_0x490555(0x108)](_0x379aa7, 0x1);
        }
    }
}

function a0_0x839d(_0x2018c4, _0x4c83f3) {
    var _0x4717da = a0_0x4717();
    return a0_0x839d = function(_0x839d1e, _0x9ddea3) {
        _0x839d1e = _0x839d1e - 0xa9;
        var _0x924735 = _0x4717da[_0x839d1e];
        return _0x924735;
    }, a0_0x839d(_0x2018c4, _0x4c83f3);
}

function playMusicLoop(_0x500004) {
    var _0x23e016 = a0_0x30c371;
    audioOn && ($[_0x23e016(0x226)][_0x500004] == null && (musicPushArr['push'](_0x500004), $[_0x23e016(0x226)][_0x500004] = createjs['Sound'][_0x23e016(0x16a)](_0x500004), $[_0x23e016(0x226)][_0x500004][_0x23e016(0x1f4)] = 0x1, setMusicVolume(_0x500004), $[_0x23e016(0x226)][_0x500004][_0x23e016(0x1ce)](), $[_0x23e016(0x226)][_0x500004]['addEventListener']('complete', function() {
        var _0x1094bb = _0x23e016;
        $[_0x1094bb(0x226)][_0x500004][_0x1094bb(0x16a)]();
    })));
}

function toggleMusicLoop(_0x31183a, _0x21ac38) {
    var _0x1519bc = a0_0x30c371;
    audioOn && ($['sound'][_0x31183a] != null && (_0x21ac38 ? $[_0x1519bc(0x226)][_0x31183a][_0x1519bc(0x16a)]() : $[_0x1519bc(0x226)][_0x31183a]['paused'] = !![]));
}

function stopMusicLoop(_0x25c017) {
    var _0x2e598e = a0_0x30c371;
    if (audioOn) {
        if ($[_0x2e598e(0x226)][_0x25c017] != null) {
            $[_0x2e598e(0x226)][_0x25c017][_0x2e598e(0xc3)](), $[_0x2e598e(0x226)][_0x25c017] = null;
            var _0x2c5720 = musicPushArr[_0x2e598e(0x24b)](_0x25c017);
            _0x2c5720 != -0x1 && musicPushArr[_0x2e598e(0x108)](_0x2c5720, 0x1);
        }
    }
}

function stopSound() {
    var _0xad1f56 = a0_0x30c371;
    createjs['Sound'][_0xad1f56(0xc3)]();
}

function toggleSoundInMute(_0x3e2b68) {
    if (audioOn) {
        soundMute = _0x3e2b68;
        for (var _0xdfab42 = 0x0; _0xdfab42 < soundPushArr['length']; _0xdfab42++) {
            setSoundVolume(soundPushArr[_0xdfab42]);
        }
        for (var _0xdfab42 = 0x0; _0xdfab42 < soundLoopPushArr['length']; _0xdfab42++) {
            setSoundLoopVolume(soundLoopPushArr[_0xdfab42]);
        }
    }
}

function toggleMusicInMute(_0x21c6de) {
    var _0x3e6d33 = a0_0x30c371;
    if (audioOn) {
        musicMute = _0x21c6de;
        for (var _0x51daca = 0x0; _0x51daca < musicPushArr[_0x3e6d33(0xcd)]; _0x51daca++) {
            setMusicVolume(musicPushArr[_0x51daca]);
        }
    }
}

function setSoundVolume(_0x4a1278, _0x4d7421) {
    var _0x377a21 = a0_0x30c371;
    if (audioOn) {
        var _0x42b5c2 = soundPushArr['indexOf'](_0x4a1278);
        if (_0x42b5c2 != -0x1) {
            var _0xab114b = _0x4d7421 == undefined ? $['sound'][soundPushArr[_0x42b5c2]][_0x377a21(0x1f4)] : _0x4d7421,
                _0x264adb = soundMute == ![] ? _0xab114b : 0x0;
            $[_0x377a21(0x226)][soundPushArr[_0x42b5c2]][_0x377a21(0x19a)] = _0x264adb, $[_0x377a21(0x226)][soundPushArr[_0x42b5c2]][_0x377a21(0x1f4)] = _0xab114b;
        }
    }
}

function setSoundLoopVolume(_0x8969ce, _0x40c204) {
    var _0x424e71 = a0_0x30c371;
    if (audioOn) {
        var _0x3eeceb = soundLoopPushArr[_0x424e71(0x24b)](_0x8969ce);
        if (_0x3eeceb != -0x1) {
            var _0x337f54 = _0x40c204 == undefined ? $[_0x424e71(0x226)][soundLoopPushArr[_0x3eeceb]][_0x424e71(0x1f4)] : _0x40c204,
                _0xad41e6 = soundMute == ![] ? _0x337f54 : 0x0;
            $[_0x424e71(0x226)][soundLoopPushArr[_0x3eeceb]][_0x424e71(0x19a)] = _0xad41e6, $[_0x424e71(0x226)][soundLoopPushArr[_0x3eeceb]][_0x424e71(0x1f4)] = _0x337f54;
        }
    }
}

function setMusicVolume(_0x27ebc9, _0x500b82) {
    var _0x5298c2 = a0_0x30c371;
    if (audioOn) {
        var _0x481c05 = musicPushArr[_0x5298c2(0x24b)](_0x27ebc9);
        if (_0x481c05 != -0x1) {
            var _0xee6eaa = _0x500b82 == undefined ? $['sound'][musicPushArr[_0x481c05]]['defaultVol'] : _0x500b82,
                _0x425177 = musicMute == ![] ? _0xee6eaa : 0x0;
            $[_0x5298c2(0x226)][musicPushArr[_0x481c05]][_0x5298c2(0x19a)] = _0x425177, $[_0x5298c2(0x226)][musicPushArr[_0x481c05]][_0x5298c2(0x1f4)] = _0xee6eaa;
        }
    }
}