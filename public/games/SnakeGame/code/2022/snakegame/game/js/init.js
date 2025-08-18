var a0_0x31209c = a0_0x543e;
(function (_0x47a5a9, _0xa30a21) {
  var _0x484543 = a0_0x543e,
    _0x173380 = _0x47a5a9();
  while (!![]) {
    try {
      var _0x25ec87 =
        -parseInt(_0x484543(0x1d6)) / 0x1 +
        parseInt(_0x484543(0x34f)) / 0x2 +
        (-parseInt(_0x484543(0x1eb)) / 0x3) *
          (-parseInt(_0x484543(0x1c5)) / 0x4) +
        (parseInt(_0x484543(0x328)) / 0x5) *
          (parseInt(_0x484543(0x1c4)) / 0x6) +
        (parseInt(_0x484543(0x30c)) / 0x7) *
          (parseInt(_0x484543(0x220)) / 0x8) +
        -parseInt(_0x484543(0x217)) / 0x9 +
        (parseInt(_0x484543(0x264)) / 0xa) *
          (-parseInt(_0x484543(0x265)) / 0xb);
      if (_0x25ec87 === _0xa30a21) break;
      else _0x173380["push"](_0x173380["shift"]());
    } catch (_0xde63ea) {
      _0x173380["push"](_0x173380["shift"]());
    }
  }
})(a0_0x2aea, 0x4bf1e);
var stage,
  canvasW = 0x0,
  canvasH = 0x0;
function initGameCanvas(_0x5c719e, _0x198e93) {
  var _0x16324c = a0_0x543e;
  const _0x267d2b = document["getElementById"]("gameCanvas");
  (_0x267d2b["width"] = _0x5c719e),
    (_0x267d2b[_0x16324c(0x263)] = _0x198e93),
    (canvasW = _0x5c719e),
    (canvasH = _0x198e93),
    (stage = new createjs["Stage"](_0x16324c(0x29e), { antialias: !![] })),
    createjs[_0x16324c(0x280)][_0x16324c(0x1bf)](stage),
    stage[_0x16324c(0x273)](0x14),
    (stage["mouseMoveOutside"] = !![]),
    (createjs[_0x16324c(0x2dc)][_0x16324c(0x29d)] =
      createjs[_0x16324c(0x2dc)][_0x16324c(0x2d1)]),
    (createjs[_0x16324c(0x2dc)][_0x16324c(0x2aa)] = 0x3c),
    createjs[_0x16324c(0x2dc)]["addEventListener"](_0x16324c(0x322), tick);
}
var safeZoneGuide = ![],
  canvasContainer,
  mainContainer,
  gameContainer,
  resultContainer,
  exitContainer,
  optionsContainer,
  shareContainer,
  shareSaveContainer,
  socialContainer,
  guideline,
  bg,
  bgP,
  logo,
  logoP,
  itemExit,
  itemExitP,
  popTitleTxt,
  popDescTxt,
  buttonConfirm,
  buttonCancel,
  itemResult,
  itemResultP,
  buttonContinue,
  resultTitleTxt,
  resultDescTxt,
  buttonShare,
  buttonSave,
  resultTitleOutlineTxt,
  resultDescOutlineTxt,
  resultShareTxt,
  resultShareOutlineTxt,
  popTitleOutlineTxt,
  popDescOutlineTxt,
  buttonSettings,
  buttonFullscreen,
  buttonSoundOn,
  buttonSoundOff,
  buttonMusicOn,
  buttonMusicOff,
  buttonExit;
$[a0_0x31209c(0x303)] = {};
var themeContainer,
  adventureContainer,
  statusContainer,
  gridContainer,
  maskContainer,
  bgContainer,
  snakeContainer,
  strokeContainer,
  scoreContainer,
  brickContainer,
  touchContainer,
  brickStatusContainer,
  brickIconContainer,
  scoreStatusContainer,
  levelStatusContainer,
  touchMoveContainer,
  buttonClassic,
  buttonAdventure,
  buttonArrowL,
  buttonArrowR,
  buttonSelectTheme,
  itemAdventurePop,
  adventureTitleTxt,
  adventureTitleShadowTxt,
  adventureSizeTxt,
  adventureWallTxt,
  adventureBrickTxt,
  sizeTxt,
  itemNumberSize,
  buttonRowL,
  buttonRowR,
  buttonColumnL,
  buttonColumnR,
  buttonAdventureStart,
  gridWall,
  gridGround,
  levelTxt,
  levelShadowTxt,
  pointTxt,
  pointShadowTxt,
  brickTxt,
  brickShadowTxt,
  itemStatus,
  statusTxt,
  buttonTouch,
  buttonTouchMove,
  gridMask,
  snakeStroke,
  resultTitleShadowTxt,
  resultDescShadowTxt,
  popTitleShadowTxt;
($["radio"] = {}), ($[a0_0x31209c(0x1f0)] = {});
function buildGameCanvas() {
  var _0x3a22a8 = a0_0x31209c;
  (canvasContainer = new createjs[_0x3a22a8(0x334)]()),
    (mainContainer = new createjs["Container"]()),
    (gameContainer = new createjs[_0x3a22a8(0x334)]()),
    (exitContainer = new createjs["Container"]()),
    (resultContainer = new createjs[_0x3a22a8(0x334)]()),
    (shareContainer = new createjs["Container"]()),
    (shareSaveContainer = new createjs[_0x3a22a8(0x334)]()),
    (socialContainer = new createjs[_0x3a22a8(0x334)]()),
    (themeContainer = new createjs[_0x3a22a8(0x334)]()),
    (adventureContainer = new createjs[_0x3a22a8(0x334)]()),
    (statusContainer = new createjs[_0x3a22a8(0x334)]()),
    (gridContainer = new createjs["Container"]()),
    (maskContainer = new createjs["Container"]()),
    (bgContainer = new createjs[_0x3a22a8(0x334)]()),
    (snakeContainer = new createjs[_0x3a22a8(0x334)]()),
    (strokeContainer = new createjs[_0x3a22a8(0x334)]()),
    (scoreContainer = new createjs["Container"]()),
    (brickContainer = new createjs[_0x3a22a8(0x334)]()),
    (touchContainer = new createjs[_0x3a22a8(0x334)]()),
    (brickStatusContainer = new createjs[_0x3a22a8(0x334)]()),
    (brickIconContainer = new createjs["Container"]()),
    (scoreStatusContainer = new createjs["Container"]()),
    (levelStatusContainer = new createjs[_0x3a22a8(0x334)]()),
    (touchContainer = new createjs[_0x3a22a8(0x334)]()),
    (touchMoveContainer = new createjs[_0x3a22a8(0x334)]()),
    (bg = new createjs[_0x3a22a8(0x2d0)](
      loader[_0x3a22a8(0x2cc)](_0x3a22a8(0x2d8))
    )),
    (bgP = new createjs[_0x3a22a8(0x2d0)](
      loader[_0x3a22a8(0x2cc)]("backgroundP")
    )),
    (logo = new createjs[_0x3a22a8(0x2d0)](
      loader[_0x3a22a8(0x2cc)](_0x3a22a8(0x1bd))
    )),
    (logoP = new createjs[_0x3a22a8(0x2d0)](loader[_0x3a22a8(0x2cc)]("logoP"))),
    (buttonClassic = new createjs["Bitmap"](
      loader[_0x3a22a8(0x2cc)]("buttonClassic")
    )),
    centerReg(buttonClassic),
    (buttonAdventure = new createjs[_0x3a22a8(0x2d0)](
      loader[_0x3a22a8(0x2cc)](_0x3a22a8(0x26d))
    )),
    centerReg(buttonAdventure),
    (buttonArrowL = new createjs["Bitmap"](
      loader[_0x3a22a8(0x2cc)](_0x3a22a8(0x193))
    )),
    centerReg(buttonArrowL),
    (buttonArrowR = new createjs["Bitmap"](
      loader["getResult"](_0x3a22a8(0x1e3))
    )),
    centerReg(buttonArrowR),
    (buttonSelectTheme = new createjs["Bitmap"](
      loader[_0x3a22a8(0x2cc)](_0x3a22a8(0x1f6))
    )),
    centerReg(buttonSelectTheme),
    themeContainer[_0x3a22a8(0x246)](
      buttonArrowL,
      buttonArrowR,
      buttonSelectTheme
    ),
    (itemAdventurePop = new createjs[_0x3a22a8(0x2d0)](
      loader["getResult"](_0x3a22a8(0x1c0))
    )),
    centerReg(itemAdventurePop),
    (adventureTitleTxt = new createjs[_0x3a22a8(0x32d)]()),
    (adventureTitleTxt[_0x3a22a8(0x2f4)] = _0x3a22a8(0x259)),
    (adventureTitleTxt[_0x3a22a8(0x30a)] = "#fff"),
    (adventureTitleTxt[_0x3a22a8(0x2d4)] = _0x3a22a8(0x2ea)),
    (adventureTitleTxt[_0x3a22a8(0x2b5)] = "alphabetic"),
    (adventureTitleTxt[_0x3a22a8(0x1dc)] = textStrings[_0x3a22a8(0x2ef)]),
    (adventureTitleShadowTxt = new createjs[_0x3a22a8(0x32d)]()),
    (adventureTitleShadowTxt[_0x3a22a8(0x2f4)] = _0x3a22a8(0x259)),
    (adventureTitleShadowTxt["color"] = _0x3a22a8(0x2c8)),
    (adventureTitleShadowTxt[_0x3a22a8(0x2d4)] = _0x3a22a8(0x2ea)),
    (adventureTitleShadowTxt[_0x3a22a8(0x2b5)] = "alphabetic"),
    (adventureTitleShadowTxt[_0x3a22a8(0x1dc)] = textStrings[_0x3a22a8(0x2ef)]),
    (adventureSizeTxt = new createjs[_0x3a22a8(0x32d)]()),
    (adventureSizeTxt["font"] = _0x3a22a8(0x214)),
    (adventureSizeTxt["color"] = _0x3a22a8(0x2c8)),
    (adventureSizeTxt[_0x3a22a8(0x2d4)] = _0x3a22a8(0x2ea)),
    (adventureSizeTxt[_0x3a22a8(0x2b5)] = _0x3a22a8(0x2cb)),
    (adventureSizeTxt[_0x3a22a8(0x1dc)] = textStrings[_0x3a22a8(0x281)]),
    (adventureWallTxt = new createjs[_0x3a22a8(0x32d)]()),
    (adventureWallTxt[_0x3a22a8(0x2f4)] = "40px\x20bpreplaybold"),
    (adventureWallTxt["color"] = _0x3a22a8(0x2c8)),
    (adventureWallTxt["textAlign"] = _0x3a22a8(0x2ea)),
    (adventureWallTxt[_0x3a22a8(0x2b5)] = _0x3a22a8(0x2cb)),
    (adventureWallTxt[_0x3a22a8(0x1dc)] = textStrings[_0x3a22a8(0x236)]),
    (adventureBrickTxt = new createjs[_0x3a22a8(0x32d)]()),
    (adventureBrickTxt["font"] = _0x3a22a8(0x214)),
    (adventureBrickTxt["color"] = _0x3a22a8(0x2c8)),
    (adventureBrickTxt["textAlign"] = _0x3a22a8(0x2ea)),
    (adventureBrickTxt[_0x3a22a8(0x2b5)] = _0x3a22a8(0x2cb)),
    (adventureBrickTxt[_0x3a22a8(0x1dc)] = textStrings[_0x3a22a8(0x196)]),
    (sizeTxt = new createjs[_0x3a22a8(0x32d)]()),
    (sizeTxt["font"] = _0x3a22a8(0x214)),
    (sizeTxt["color"] = "#883310"),
    (sizeTxt[_0x3a22a8(0x2d4)] = "center"),
    (sizeTxt[_0x3a22a8(0x2b5)] = _0x3a22a8(0x2cb)),
    (sizeTxt[_0x3a22a8(0x1dc)] = textStrings[_0x3a22a8(0x303)]),
    (itemNumberSize = new createjs[_0x3a22a8(0x2d0)](
      loader[_0x3a22a8(0x2cc)](_0x3a22a8(0x2d7))
    )),
    centerReg(itemNumberSize),
    (buttonRowL = new createjs[_0x3a22a8(0x2d0)](
      loader[_0x3a22a8(0x2cc)](_0x3a22a8(0x338))
    )),
    centerReg(buttonRowL),
    (buttonRowR = new createjs[_0x3a22a8(0x2d0)](
      loader[_0x3a22a8(0x2cc)](_0x3a22a8(0x207))
    )),
    centerReg(buttonRowR),
    (buttonColumnL = new createjs["Bitmap"](
      loader[_0x3a22a8(0x2cc)]("buttonMinus")
    )),
    centerReg(buttonColumnL),
    (buttonColumnR = new createjs[_0x3a22a8(0x2d0)](
      loader[_0x3a22a8(0x2cc)](_0x3a22a8(0x207))
    )),
    centerReg(buttonColumnR),
    (buttonAdventureStart = new createjs[_0x3a22a8(0x2d0)](
      loader[_0x3a22a8(0x2cc)](_0x3a22a8(0x331))
    )),
    centerReg(buttonAdventureStart),
    adventureContainer[_0x3a22a8(0x246)](
      itemAdventurePop,
      adventureTitleShadowTxt,
      adventureTitleTxt,
      adventureBrickTxt,
      adventureWallTxt,
      adventureSizeTxt,
      buttonAdventureStart,
      itemNumberSize,
      buttonRowL,
      buttonRowR,
      buttonColumnL,
      buttonColumnR,
      sizeTxt
    );
  for (var _0x5c4c7b = 0x0; _0x5c4c7b < 0x2; _0x5c4c7b++) {
    var _0x208ab4 = 0x2c,
      _0x2c2ee0 = 0x2c,
      _0x437a52 = {
        regX: _0x208ab4 / 0x2,
        regY: _0x2c2ee0 / 0x2,
        height: _0x2c2ee0,
        width: _0x208ab4,
        count: 0x2,
      },
      _0x12b011 = { enable: { frames: [0x0] }, disable: { frames: [0x1] } },
      _0xdc7571 = new createjs[_0x3a22a8(0x1a2)]({
        images: [loader["getResult"](_0x3a22a8(0x1ed))],
        frames: _0x437a52,
        animations: _0x12b011,
      });
    ($[_0x3a22a8(0x336)][_0x5c4c7b] = new createjs[_0x3a22a8(0x28c)](
      _0xdc7571,
      _0x3a22a8(0x1bf)
    )),
      ($[_0x3a22a8(0x336)][_0x5c4c7b]["hitArea"] = new createjs["Shape"](
        new createjs[_0x3a22a8(0x274)]()
          [_0x3a22a8(0x327)](_0x3a22a8(0x291))
          [_0x3a22a8(0x226)](-0x14, -0x19, 0x96, 0x32)
      )),
      adventureContainer[_0x3a22a8(0x246)]($[_0x3a22a8(0x336)][_0x5c4c7b]);
  }
  (gridWall = new createjs["Shape"]()),
    (gridGround = new createjs[_0x3a22a8(0x311)]()),
    (levelTxt = new createjs["Text"]()),
    (levelTxt[_0x3a22a8(0x2f4)] = _0x3a22a8(0x315)),
    (levelTxt[_0x3a22a8(0x30a)] = _0x3a22a8(0x317)),
    (levelTxt["textAlign"] = "left"),
    (levelTxt[_0x3a22a8(0x2b5)] = _0x3a22a8(0x2cb)),
    (levelShadowTxt = new createjs[_0x3a22a8(0x32d)]()),
    (levelShadowTxt[_0x3a22a8(0x2f4)] = _0x3a22a8(0x315)),
    (levelShadowTxt[_0x3a22a8(0x30a)] = _0x3a22a8(0x2c8)),
    (levelShadowTxt[_0x3a22a8(0x2d4)] = _0x3a22a8(0x26f)),
    (levelShadowTxt[_0x3a22a8(0x2b5)] = "alphabetic"),
    (levelShadowTxt["y"] = 0x5),
    levelStatusContainer["addChild"](levelShadowTxt, levelTxt),
    (pointTxt = new createjs[_0x3a22a8(0x32d)]()),
    (pointTxt[_0x3a22a8(0x2f4)] = _0x3a22a8(0x315)),
    (pointTxt["color"] = "#fff"),
    (pointTxt["textAlign"] = _0x3a22a8(0x2ea)),
    (pointTxt["textBaseline"] = "alphabetic"),
    (pointShadowTxt = new createjs[_0x3a22a8(0x32d)]()),
    (pointShadowTxt[_0x3a22a8(0x2f4)] = "35px\x20bpreplaybold"),
    (pointShadowTxt[_0x3a22a8(0x30a)] = _0x3a22a8(0x2c8)),
    (pointShadowTxt[_0x3a22a8(0x2d4)] = "center"),
    (pointShadowTxt["textBaseline"] = _0x3a22a8(0x2cb)),
    (pointShadowTxt["y"] = 0x5),
    scoreStatusContainer[_0x3a22a8(0x246)](pointShadowTxt, pointTxt),
    (brickTxt = new createjs[_0x3a22a8(0x32d)]()),
    (brickTxt[_0x3a22a8(0x2f4)] = "35px\x20bpreplaybold"),
    (brickTxt[_0x3a22a8(0x30a)] = _0x3a22a8(0x317)),
    (brickTxt[_0x3a22a8(0x2d4)] = _0x3a22a8(0x26f)),
    (brickTxt["textBaseline"] = _0x3a22a8(0x2cb)),
    (brickShadowTxt = new createjs[_0x3a22a8(0x32d)]()),
    (brickShadowTxt[_0x3a22a8(0x2f4)] = "35px\x20bpreplaybold"),
    (brickShadowTxt[_0x3a22a8(0x30a)] = _0x3a22a8(0x2c8)),
    (brickShadowTxt[_0x3a22a8(0x2d4)] = _0x3a22a8(0x26f)),
    (brickShadowTxt[_0x3a22a8(0x2b5)] = _0x3a22a8(0x2cb)),
    (brickShadowTxt["y"] = 0x5),
    (brickTxt["x"] = brickShadowTxt["x"] = 0x19),
    brickStatusContainer["addChild"](
      brickIconContainer,
      brickShadowTxt,
      brickTxt
    ),
    (itemStatus = new createjs[_0x3a22a8(0x2d0)](
      loader[_0x3a22a8(0x2cc)](_0x3a22a8(0x2a8))
    )),
    centerReg(itemStatus),
    (statusTxt = new createjs["Text"]()),
    (statusTxt[_0x3a22a8(0x2f4)] = "35px\x20bpreplaybold"),
    (statusTxt["color"] = _0x3a22a8(0x2c8)),
    (statusTxt[_0x3a22a8(0x2d4)] = _0x3a22a8(0x2ea)),
    (statusTxt["textBaseline"] = "alphabetic"),
    (statusTxt["y"] = 0x8),
    statusContainer["addChild"](itemStatus, statusTxt),
    (buttonTouch = new createjs[_0x3a22a8(0x2d0)](
      loader[_0x3a22a8(0x2cc)](_0x3a22a8(0x2ac))
    )),
    centerReg(buttonTouch),
    touchMoveContainer[_0x3a22a8(0x246)](buttonTouch);
  var _0x3e2b9e = ["Up", _0x3a22a8(0x1a1), _0x3a22a8(0x2e6), _0x3a22a8(0x34d)],
    _0xdce1bd = [0x0, 0x5a, 0xb4, 0x10e];
  if (gameSettings[_0x3a22a8(0x2ae)]) {
    (buttonTouchMove = new createjs[_0x3a22a8(0x2d0)](
      loader[_0x3a22a8(0x2cc)](_0x3a22a8(0x2b2))
    )),
      centerReg(buttonTouchMove);
    for (
      var _0x5c4c7b = 0x0;
      _0x5c4c7b < _0x3e2b9e[_0x3a22a8(0x313)];
      _0x5c4c7b++
    ) {
      ($[_0x3a22a8(0x1f0)][_0x3e2b9e[_0x5c4c7b]] = new createjs[
        _0x3a22a8(0x2d0)
      ](loader[_0x3a22a8(0x2cc)](_0x3a22a8(0x1cb)))),
        centerReg($[_0x3a22a8(0x1f0)][_0x3e2b9e[_0x5c4c7b]]),
        ($["touch"][_0x3e2b9e[_0x5c4c7b]][_0x3a22a8(0x212)] = ![]),
        ($["touch"][_0x3a22a8(0x1b2) + _0x3e2b9e[_0x5c4c7b]] = new createjs[
          "Bitmap"
        ](loader["getResult"](_0x3a22a8(0x33f)))),
        centerReg($["touch"]["arrow" + _0x3e2b9e[_0x5c4c7b]]),
        ($[_0x3a22a8(0x1f0)][_0x3e2b9e[_0x5c4c7b]][_0x3a22a8(0x355)] = $[
          _0x3a22a8(0x1f0)
        ]["arrow" + _0x3e2b9e[_0x5c4c7b]][_0x3a22a8(0x355)] =
          $[_0x3a22a8(0x1f0)][_0x3e2b9e[_0x5c4c7b]][_0x3a22a8(0x23a)][
            "naturalHeight"
          ]),
        ($[_0x3a22a8(0x1f0)][_0x3a22a8(0x1b2) + _0x3e2b9e[_0x5c4c7b]][
          _0x3a22a8(0x2a9)
        ] = $[_0x3a22a8(0x1f0)][_0x3e2b9e[_0x5c4c7b]][_0x3a22a8(0x2a9)] =
          _0xdce1bd[_0x5c4c7b]),
        createHitarea(
          $[_0x3a22a8(0x1f0)][_0x3a22a8(0x1b2) + _0x3e2b9e[_0x5c4c7b]]
        ),
        touchMoveContainer[_0x3a22a8(0x246)](
          $["touch"][_0x3e2b9e[_0x5c4c7b]],
          $[_0x3a22a8(0x1f0)][_0x3a22a8(0x1b2) + _0x3e2b9e[_0x5c4c7b]]
        );
    }
    touchMoveContainer[_0x3a22a8(0x246)](buttonTouchMove);
  } else {
    var _0x43f643 = 0x28;
    for (
      var _0x5c4c7b = 0x0;
      _0x5c4c7b < _0x3e2b9e[_0x3a22a8(0x313)];
      _0x5c4c7b++
    ) {
      ($["touch"][_0x3e2b9e[_0x5c4c7b]] = new createjs[_0x3a22a8(0x2d0)](
        loader[_0x3a22a8(0x2cc)]("buttonTouch" + _0x3e2b9e[_0x5c4c7b] + "Press")
      )),
        centerReg($["touch"][_0x3e2b9e[_0x5c4c7b]]),
        ($[_0x3a22a8(0x1f0)][_0x3e2b9e[_0x5c4c7b]]["visible"] = ![]),
        ($[_0x3a22a8(0x1f0)][_0x3a22a8(0x1b2) + _0x3e2b9e[_0x5c4c7b]] =
          new createjs[_0x3a22a8(0x2d0)](
            loader["getResult"](_0x3a22a8(0x2ac) + _0x3e2b9e[_0x5c4c7b])
          )),
        centerReg($[_0x3a22a8(0x1f0)]["arrow" + _0x3e2b9e[_0x5c4c7b]]);
      if (_0x5c4c7b == 0x0)
        $[_0x3a22a8(0x1f0)][_0x3e2b9e[_0x5c4c7b]]["y"] = $[_0x3a22a8(0x1f0)][
          _0x3a22a8(0x1b2) + _0x3e2b9e[_0x5c4c7b]
        ]["y"] = -_0x43f643;
      else {
        if (_0x5c4c7b == 0x1)
          $["touch"][_0x3e2b9e[_0x5c4c7b]]["x"] = $["touch"][
            _0x3a22a8(0x1b2) + _0x3e2b9e[_0x5c4c7b]
          ]["x"] = _0x43f643;
        else {
          if (_0x5c4c7b == 0x2)
            $[_0x3a22a8(0x1f0)][_0x3e2b9e[_0x5c4c7b]]["y"] = $[
              _0x3a22a8(0x1f0)
            ][_0x3a22a8(0x1b2) + _0x3e2b9e[_0x5c4c7b]]["y"] = _0x43f643;
          else
            _0x5c4c7b == 0x3 &&
              ($[_0x3a22a8(0x1f0)][_0x3e2b9e[_0x5c4c7b]]["x"] = $[
                _0x3a22a8(0x1f0)
              ]["arrow" + _0x3e2b9e[_0x5c4c7b]]["x"] =
                -_0x43f643);
        }
      }
      createHitarea($["touch"][_0x3a22a8(0x1b2) + _0x3e2b9e[_0x5c4c7b]]),
        touchMoveContainer[_0x3a22a8(0x246)](
          $[_0x3a22a8(0x1f0)][_0x3e2b9e[_0x5c4c7b]],
          $[_0x3a22a8(0x1f0)][_0x3a22a8(0x1b2) + _0x3e2b9e[_0x5c4c7b]]
        );
    }
  }
  touchContainer["addChild"](touchMoveContainer),
    (gridMask = new createjs[_0x3a22a8(0x311)]()),
    (snakeStroke = new createjs[_0x3a22a8(0x311)]()),
    (itemResult = new createjs[_0x3a22a8(0x2d0)](
      loader[_0x3a22a8(0x2cc)](_0x3a22a8(0x203))
    )),
    (itemResultP = new createjs[_0x3a22a8(0x2d0)](
      loader[_0x3a22a8(0x2cc)](_0x3a22a8(0x1c1))
    )),
    (buttonContinue = new createjs[_0x3a22a8(0x2d0)](
      loader[_0x3a22a8(0x2cc)]("buttonContinue")
    )),
    centerReg(buttonContinue),
    (resultShareTxt = new createjs[_0x3a22a8(0x32d)]()),
    (resultShareTxt[_0x3a22a8(0x2f4)] = "25px\x20bpreplaybold"),
    (resultShareTxt[_0x3a22a8(0x30a)] = _0x3a22a8(0x2c8)),
    (resultShareTxt[_0x3a22a8(0x2d4)] = _0x3a22a8(0x2ea)),
    (resultShareTxt[_0x3a22a8(0x2b5)] = _0x3a22a8(0x2cb)),
    (resultShareTxt["text"] = textStrings["share"]),
    (resultTitleTxt = new createjs[_0x3a22a8(0x32d)]()),
    (resultTitleTxt[_0x3a22a8(0x2f4)] = _0x3a22a8(0x259)),
    (resultTitleTxt[_0x3a22a8(0x30a)] = _0x3a22a8(0x317)),
    (resultTitleTxt[_0x3a22a8(0x2d4)] = "center"),
    (resultTitleTxt[_0x3a22a8(0x2b5)] = _0x3a22a8(0x2cb)),
    (resultTitleTxt[_0x3a22a8(0x1dc)] = textStrings[_0x3a22a8(0x249)]),
    (resultTitleShadowTxt = new createjs[_0x3a22a8(0x32d)]()),
    (resultTitleShadowTxt["font"] = _0x3a22a8(0x259)),
    (resultTitleShadowTxt[_0x3a22a8(0x30a)] = _0x3a22a8(0x2c8)),
    (resultTitleShadowTxt[_0x3a22a8(0x2d4)] = _0x3a22a8(0x2ea)),
    (resultTitleShadowTxt["textBaseline"] = "alphabetic"),
    (resultTitleShadowTxt[_0x3a22a8(0x1dc)] = textStrings[_0x3a22a8(0x249)]),
    (resultDescTxt = new createjs[_0x3a22a8(0x32d)]()),
    (resultDescTxt[_0x3a22a8(0x2f4)] = _0x3a22a8(0x2eb)),
    (resultDescTxt[_0x3a22a8(0x30a)] = _0x3a22a8(0x2c0)),
    (resultDescTxt[_0x3a22a8(0x2d4)] = "center"),
    (resultDescTxt[_0x3a22a8(0x2b5)] = _0x3a22a8(0x2cb)),
    (resultDescTxt[_0x3a22a8(0x1dc)] = ""),
    (resultDescShadowTxt = new createjs[_0x3a22a8(0x32d)]()),
    (resultDescShadowTxt[_0x3a22a8(0x2f4)] = _0x3a22a8(0x2eb)),
    (resultDescShadowTxt[_0x3a22a8(0x30a)] = _0x3a22a8(0x2c8)),
    (resultDescShadowTxt[_0x3a22a8(0x2d4)] = "center"),
    (resultDescShadowTxt[_0x3a22a8(0x2b5)] = _0x3a22a8(0x2cb)),
    (resultDescShadowTxt[_0x3a22a8(0x1dc)] = ""),
    (socialContainer[_0x3a22a8(0x212)] = ![]),
    (socialContainer[_0x3a22a8(0x257)] = 0x1),
    shareContainer[_0x3a22a8(0x246)](resultShareTxt, socialContainer);
  if (shareSettings[_0x3a22a8(0x1bf)]) {
    (buttonShare = new createjs["Bitmap"](
      loader[_0x3a22a8(0x2cc)](_0x3a22a8(0x250))
    )),
      centerReg(buttonShare);
    var _0x5cc593 = { x: 0x0, y: 0x2d, spaceX: 0x41 };
    _0x5cc593["x"] = -(
      ((shareSettings[_0x3a22a8(0x252)][_0x3a22a8(0x313)] - 0x1) *
        _0x5cc593["spaceX"]) /
      0x2
    );
    for (
      let _0x1ff2d3 = 0x0;
      _0x1ff2d3 < shareSettings[_0x3a22a8(0x252)][_0x3a22a8(0x313)];
      _0x1ff2d3++
    ) {
      var _0x1f606f = shareSettings[_0x3a22a8(0x252)][_0x1ff2d3],
        _0x3ce869 =
          String(_0x1f606f[0x0])[_0x3a22a8(0x34a)]() +
          String(_0x1f606f)["slice"](0x1);
      ($[_0x3a22a8(0x303)][_0x3a22a8(0x1dd) + _0x1ff2d3] = new createjs[
        _0x3a22a8(0x2d0)
      ](loader[_0x3a22a8(0x2cc)]("button" + _0x3ce869))),
        ($[_0x3a22a8(0x303)][_0x3a22a8(0x1dd) + _0x1ff2d3][_0x3a22a8(0x279)] =
          _0x1f606f),
        centerReg($[_0x3a22a8(0x303)]["button" + _0x1ff2d3]),
        ($["share"][_0x3a22a8(0x1dd) + _0x1ff2d3]["x"] = _0x5cc593["x"]),
        ($[_0x3a22a8(0x303)][_0x3a22a8(0x1dd) + _0x1ff2d3]["y"] =
          _0x5cc593["y"]),
        socialContainer[_0x3a22a8(0x246)](
          $[_0x3a22a8(0x303)][_0x3a22a8(0x1dd) + _0x1ff2d3]
        ),
        (_0x5cc593["x"] += _0x5cc593["spaceX"]);
    }
    (buttonShare["y"] = buttonShare["image"][_0x3a22a8(0x351)] / 0x2 + 0xa),
      shareContainer["addChild"](buttonShare);
  }
  typeof toggleScoreboardSave == _0x3a22a8(0x215) &&
    ((buttonSave = new createjs[_0x3a22a8(0x2d0)](
      loader[_0x3a22a8(0x2cc)]("buttonSave")
    )),
    centerReg(buttonSave),
    (buttonSave["y"] = buttonSave["image"][_0x3a22a8(0x351)] / 0x2 + 0xa),
    shareSaveContainer[_0x3a22a8(0x246)](buttonSave)),
    (buttonFullscreen = new createjs[_0x3a22a8(0x2d0)](
      loader[_0x3a22a8(0x2cc)](_0x3a22a8(0x2af))
    )),
    centerReg(buttonFullscreen),
    (buttonSoundOn = new createjs[_0x3a22a8(0x2d0)](
      loader[_0x3a22a8(0x2cc)](_0x3a22a8(0x254))
    )),
    centerReg(buttonSoundOn),
    (buttonSoundOff = new createjs[_0x3a22a8(0x2d0)](
      loader[_0x3a22a8(0x2cc)](_0x3a22a8(0x339))
    )),
    centerReg(buttonSoundOff),
    (buttonSoundOn[_0x3a22a8(0x212)] = ![]),
    (buttonExit = new createjs[_0x3a22a8(0x2d0)](
      loader[_0x3a22a8(0x2cc)](_0x3a22a8(0x1ce))
    )),
    centerReg(buttonExit),
    (buttonSettings = new createjs[_0x3a22a8(0x2d0)](
      loader[_0x3a22a8(0x2cc)](_0x3a22a8(0x1c7))
    )),
    centerReg(buttonSettings),
    createHitarea(buttonFullscreen),
    createHitarea(buttonSoundOn),
    createHitarea(buttonSoundOff),
    createHitarea(buttonExit),
    createHitarea(buttonSettings),
    (optionsContainer = new createjs[_0x3a22a8(0x334)]()),
    optionsContainer[_0x3a22a8(0x246)](
      buttonFullscreen,
      buttonSoundOn,
      buttonSoundOff,
      buttonExit
    ),
    (optionsContainer["visible"] = ![]),
    (itemExit = new createjs[_0x3a22a8(0x2d0)](loader["getResult"]("itemPop"))),
    (itemExitP = new createjs["Bitmap"](
      loader[_0x3a22a8(0x2cc)](_0x3a22a8(0x1c1))
    )),
    (buttonConfirm = new createjs[_0x3a22a8(0x2d0)](
      loader[_0x3a22a8(0x2cc)](_0x3a22a8(0x240))
    )),
    centerReg(buttonConfirm),
    (buttonCancel = new createjs[_0x3a22a8(0x2d0)](
      loader[_0x3a22a8(0x2cc)]("buttonCancel")
    )),
    centerReg(buttonCancel),
    (popTitleTxt = new createjs[_0x3a22a8(0x32d)]()),
    (popTitleTxt[_0x3a22a8(0x2f4)] = _0x3a22a8(0x259)),
    (popTitleTxt[_0x3a22a8(0x30a)] = "#fff"),
    (popTitleTxt[_0x3a22a8(0x2d4)] = _0x3a22a8(0x2ea)),
    (popTitleTxt[_0x3a22a8(0x2b5)] = _0x3a22a8(0x2cb)),
    (popTitleTxt[_0x3a22a8(0x1dc)] = textStrings[_0x3a22a8(0x354)]),
    (popTitleShadowTxt = new createjs[_0x3a22a8(0x32d)]()),
    (popTitleShadowTxt["font"] = "75px\x20bpreplaybold"),
    (popTitleShadowTxt[_0x3a22a8(0x30a)] = _0x3a22a8(0x2c8)),
    (popTitleShadowTxt[_0x3a22a8(0x2d4)] = "center"),
    (popTitleShadowTxt[_0x3a22a8(0x2b5)] = _0x3a22a8(0x2cb)),
    (popTitleShadowTxt["text"] = textStrings[_0x3a22a8(0x354)]),
    (popDescTxt = new createjs[_0x3a22a8(0x32d)]()),
    (popDescTxt["font"] = "35px\x20bpreplaybold"),
    (popDescTxt["lineHeight"] = 0x28),
    (popDescTxt[_0x3a22a8(0x30a)] = _0x3a22a8(0x2c8)),
    (popDescTxt[_0x3a22a8(0x2d4)] = "center"),
    (popDescTxt["textBaseline"] = "alphabetic"),
    (popDescTxt[_0x3a22a8(0x1dc)] = textStrings[_0x3a22a8(0x219)]),
    exitContainer["addChild"](
      itemExit,
      itemExitP,
      popTitleShadowTxt,
      popTitleTxt,
      popDescTxt,
      buttonConfirm,
      buttonCancel
    ),
    (exitContainer["visible"] = ![]),
    (guideline = new createjs[_0x3a22a8(0x311)]()),
    mainContainer[_0x3a22a8(0x246)](
      logo,
      logoP,
      buttonClassic,
      buttonAdventure
    ),
    maskContainer[_0x3a22a8(0x246)](snakeStroke, snakeContainer),
    gridContainer[_0x3a22a8(0x246)](
      gridWall,
      gridGround,
      bgContainer,
      scoreContainer,
      brickContainer,
      maskContainer
    ),
    gameContainer[_0x3a22a8(0x246)](
      levelStatusContainer,
      brickStatusContainer,
      scoreStatusContainer,
      statusContainer,
      touchContainer
    ),
    resultContainer[_0x3a22a8(0x246)](
      itemResult,
      itemResultP,
      buttonContinue,
      resultTitleShadowTxt,
      resultTitleTxt,
      resultDescShadowTxt,
      resultDescTxt,
      shareContainer,
      shareSaveContainer
    ),
    canvasContainer[_0x3a22a8(0x246)](
      bg,
      bgP,
      mainContainer,
      gridContainer,
      themeContainer,
      adventureContainer,
      gameContainer,
      resultContainer,
      exitContainer,
      optionsContainer,
      buttonSettings,
      guideline
    ),
    stage[_0x3a22a8(0x246)](canvasContainer),
    changeViewport(viewport[_0x3a22a8(0x290)]),
    resizeGameFunc();
}
function changeViewport(_0x81969d) {
  _0x81969d
    ? ((stageW = landscapeSize["w"]),
      (stageH = landscapeSize["h"]),
      (contentW = landscapeSize["cW"]),
      (contentH = landscapeSize["cH"]))
    : ((stageW = portraitSize["w"]),
      (stageH = portraitSize["h"]),
      (contentW = portraitSize["cW"]),
      (contentH = portraitSize["cH"])),
    (canvasW = stageW),
    (canvasH = stageH),
    changeCanvasViewport();
}
function changeCanvasViewport() {
  var _0x51b3aa = a0_0x31209c;
  canvasContainer != undefined &&
    ((stage[_0x51b3aa(0x210)] = stage["scaleY"] = dpr),
    safeZoneGuide &&
      guideline[_0x51b3aa(0x26b)]
        [_0x51b3aa(0x294)]()
        [_0x51b3aa(0x232)](0x2)
        ["beginStroke"](_0x51b3aa(0x30b))
        ["drawRect"](
          (stageW - contentW) / 0x2,
          (stageH - contentH) / 0x2,
          contentW,
          contentH
        ),
    viewport[_0x51b3aa(0x290)]
      ? ((bg["visible"] = !![]),
        (bgP[_0x51b3aa(0x212)] = ![]),
        (logo[_0x51b3aa(0x212)] = !![]),
        (logoP[_0x51b3aa(0x212)] = ![]),
        adventureSettings[_0x51b3aa(0x1bf)]
          ? ((buttonClassic["x"] = canvasW / 0x2 - 0x8c),
            (buttonClassic["y"] = (canvasH / 0x64) * 0x4b),
            (buttonAdventure["x"] = canvasW / 0x2 + 0x8c),
            (buttonAdventure["y"] = (canvasH / 0x64) * 0x4b),
            (buttonAdventure[_0x51b3aa(0x212)] = !![]))
          : ((buttonClassic["x"] = canvasW / 0x2),
            (buttonClassic["y"] = (canvasH / 0x64) * 0x4b),
            (buttonAdventure[_0x51b3aa(0x212)] = ![])),
        (buttonArrowL["x"] = canvasW / 0x2 - 0x190),
        (buttonArrowL["y"] = canvasH / 0x2),
        (buttonArrowR["x"] = canvasW / 0x2 + 0x190),
        (buttonArrowR["y"] = canvasH / 0x2),
        (buttonSelectTheme["x"] = canvasW / 0x2),
        (buttonSelectTheme["y"] = (canvasH / 0x64) * 0x4b),
        (itemAdventurePop["x"] = canvasW / 0x2),
        (itemAdventurePop["y"] = canvasH / 0x2),
        (adventureTitleTxt["x"] = canvasW / 0x2),
        (adventureTitleTxt["y"] = (canvasH / 0x64) * 0x23),
        (adventureTitleShadowTxt["x"] = canvasW / 0x2),
        (adventureTitleShadowTxt["y"] = adventureTitleTxt["y"] + 0xa),
        (buttonAdventureStart["x"] = canvasW / 0x2),
        (buttonAdventureStart["y"] = (canvasH / 0x64) * 0x44),
        (buttonRowL["x"] = canvasW / 0x2 + 0xa0 - 0x1e),
        (buttonRowR["x"] = canvasW / 0x2 + 0xa0 + 0x1e),
        (buttonColumnL["x"] = canvasW / 0x2 - 0xa0 - 0x1e),
        (buttonColumnR["x"] = canvasW / 0x2 - 0xa0 + 0x1e),
        (adventureSizeTxt["x"] = canvasW / 0x2),
        (adventureSizeTxt["y"] = (canvasH / 0x64) * 0x2b),
        (itemNumberSize["x"] = canvasW / 0x2),
        (sizeTxt["x"] = canvasW / 0x2),
        (itemNumberSize["y"] =
          buttonRowL["y"] =
          buttonRowR["y"] =
          buttonColumnL["y"] =
          buttonColumnR["y"] =
            (canvasH / 0x64) * 0x30),
        (sizeTxt["y"] = itemNumberSize["y"] + 0x14),
        ($["radio"][0x0]["x"] = canvasW / 0x2 - 0x96),
        ($[_0x51b3aa(0x336)][0x0]["y"] = (canvasH / 0x64) * 0x39),
        (adventureWallTxt["x"] = $[_0x51b3aa(0x336)][0x0]["x"] + 0x50),
        (adventureWallTxt["y"] = $[_0x51b3aa(0x336)][0x0]["y"] + 0xe),
        ($[_0x51b3aa(0x336)][0x1]["x"] = canvasW / 0x2 + 0x32),
        ($[_0x51b3aa(0x336)][0x1]["y"] = (canvasH / 0x64) * 0x39),
        (adventureBrickTxt["x"] = $[_0x51b3aa(0x336)][0x1]["x"] + 0x50),
        (adventureBrickTxt["y"] = $[_0x51b3aa(0x336)][0x1]["y"] + 0xe),
        (statusContainer["x"] = canvasW / 0x2),
        (statusContainer["y"] = canvasH / 0x2),
        (itemResult["visible"] = !![]),
        (itemResultP[_0x51b3aa(0x212)] = ![]),
        (buttonContinue["x"] = canvasW / 0x2),
        (buttonContinue["y"] = (canvasH / 0x64) * 0x44),
        (shareContainer["x"] = shareSaveContainer["x"] = canvasW / 0x2),
        (shareContainer["y"] = shareSaveContainer["y"] =
          (canvasH / 0x64) * 0x31),
        (resultTitleTxt["x"] = canvasW / 0x2),
        (resultTitleTxt["y"] = (canvasH / 0x64) * 0x23),
        (resultTitleShadowTxt["x"] = resultTitleTxt["x"]),
        (resultTitleShadowTxt["y"] = resultTitleTxt["y"] + 0xa),
        (resultDescTxt["x"] = canvasW / 0x2),
        (resultDescTxt["y"] = (canvasH / 0x64) * 0x2c),
        (resultDescShadowTxt["x"] = resultDescTxt["x"]),
        (resultDescShadowTxt["y"] = resultDescTxt["y"] + 0x8),
        (itemExit[_0x51b3aa(0x212)] = !![]),
        (itemExitP["visible"] = ![]),
        (buttonConfirm["x"] = canvasW / 0x2),
        (buttonConfirm["y"] = (canvasH / 0x64) * 0x38),
        (buttonCancel["x"] = canvasW / 0x2),
        (buttonCancel["y"] = (canvasH / 0x64) * 0x44),
        (popTitleTxt["x"] = canvasW / 0x2),
        (popTitleTxt["y"] = (canvasH / 0x64) * 0x23),
        (popTitleShadowTxt["x"] = popTitleTxt["x"]),
        (popTitleShadowTxt["y"] = popTitleTxt["y"] + 0xa),
        (popDescTxt["x"] = canvasW / 0x2),
        (popDescTxt["y"] = (canvasH / 0x64) * 0x2b))
      : ((bg[_0x51b3aa(0x212)] = ![]),
        (bgP["visible"] = !![]),
        (logo["visible"] = ![]),
        (logoP[_0x51b3aa(0x212)] = !![]),
        adventureSettings[_0x51b3aa(0x1bf)]
          ? ((buttonClassic["x"] = canvasW / 0x2),
            (buttonClassic["y"] = (canvasH / 0x64) * 0x49),
            (buttonAdventure["x"] = canvasW / 0x2),
            (buttonAdventure["y"] = (canvasH / 0x64) * 0x55),
            (buttonAdventure["visible"] = !![]))
          : ((buttonClassic["x"] = canvasW / 0x2),
            (buttonClassic["y"] = (canvasH / 0x64) * 0x4b),
            (buttonAdventure[_0x51b3aa(0x212)] = ![])),
        (buttonArrowL["x"] = canvasW / 0x2 - 0xfa),
        (buttonArrowL["y"] = canvasH / 0x2),
        (buttonArrowR["x"] = canvasW / 0x2 + 0xfa),
        (buttonArrowR["y"] = canvasH / 0x2),
        (buttonSelectTheme["x"] = canvasW / 0x2),
        (buttonSelectTheme["y"] = (canvasH / 0x64) * 0x55),
        (itemAdventurePop["x"] = canvasW / 0x2),
        (itemAdventurePop["y"] = canvasH / 0x2),
        (adventureTitleTxt["x"] = canvasW / 0x2),
        (adventureTitleTxt["y"] = (canvasH / 0x64) * 0x26),
        (adventureTitleShadowTxt["x"] = canvasW / 0x2),
        (adventureTitleShadowTxt["y"] = adventureTitleTxt["y"] + 0xa),
        (buttonAdventureStart["x"] = canvasW / 0x2),
        (buttonAdventureStart["y"] = (canvasH / 0x64) * 0x40),
        (buttonRowL["x"] = canvasW / 0x2 + 0xa0 - 0x1e),
        (buttonRowR["x"] = canvasW / 0x2 + 0xa0 + 0x1e),
        (buttonColumnL["x"] = canvasW / 0x2 - 0xa0 - 0x1e),
        (buttonColumnR["x"] = canvasW / 0x2 - 0xa0 + 0x1e),
        (adventureSizeTxt["x"] = canvasW / 0x2),
        (adventureSizeTxt["y"] = (canvasH / 0x64) * 0x2c),
        (itemNumberSize["x"] = canvasW / 0x2),
        (sizeTxt["x"] = canvasW / 0x2),
        (itemNumberSize["y"] =
          buttonRowL["y"] =
          buttonRowR["y"] =
          buttonColumnL["y"] =
          buttonColumnR["y"] =
            (canvasH / 0x64) * 0x31),
        (sizeTxt["y"] = itemNumberSize["y"] + 0x14),
        ($["radio"][0x0]["x"] = canvasW / 0x2 - 0x96),
        ($[_0x51b3aa(0x336)][0x0]["y"] = (canvasH / 0x64) * 0x38),
        (adventureWallTxt["x"] = $["radio"][0x0]["x"] + 0x50),
        (adventureWallTxt["y"] = $[_0x51b3aa(0x336)][0x0]["y"] + 0xe),
        ($["radio"][0x1]["x"] = canvasW / 0x2 + 0x32),
        ($[_0x51b3aa(0x336)][0x1]["y"] = (canvasH / 0x64) * 0x38),
        (adventureBrickTxt["x"] = $[_0x51b3aa(0x336)][0x1]["x"] + 0x50),
        (adventureBrickTxt["y"] = $[_0x51b3aa(0x336)][0x1]["y"] + 0xe),
        (statusContainer["x"] = canvasW / 0x2),
        (statusContainer["y"] = canvasH / 0x2),
        (itemResult[_0x51b3aa(0x212)] = ![]),
        (itemResultP[_0x51b3aa(0x212)] = !![]),
        (buttonContinue["x"] = canvasW / 0x2),
        (buttonContinue["y"] = (canvasH / 0x64) * 0x40),
        (shareContainer["x"] = shareSaveContainer["x"] = canvasW / 0x2),
        (shareContainer["y"] = shareSaveContainer["y"] =
          (canvasH / 0x64) * 0x31),
        (resultTitleTxt["x"] = canvasW / 0x2),
        (resultTitleTxt["y"] = (canvasH / 0x64) * 0x26),
        (resultTitleShadowTxt["x"] = resultTitleTxt["x"]),
        (resultTitleShadowTxt["y"] = resultTitleTxt["y"] + 0xa),
        (resultDescTxt["x"] = canvasW / 0x2),
        (resultDescTxt["y"] = (canvasH / 0x64) * 0x2d),
        (resultDescShadowTxt["x"] = resultDescTxt["x"]),
        (resultDescShadowTxt["y"] = resultDescTxt["y"] + 0x8),
        (itemExit[_0x51b3aa(0x212)] = ![]),
        (itemExitP[_0x51b3aa(0x212)] = !![]),
        (buttonConfirm["x"] = canvasW / 0x2),
        (buttonConfirm["y"] = (canvasH / 0x64) * 0x37),
        (buttonCancel["x"] = canvasW / 0x2),
        (buttonCancel["y"] = (canvasH / 0x64) * 0x40),
        (popTitleTxt["x"] = canvasW / 0x2),
        (popTitleTxt["y"] = (canvasH / 0x64) * 0x26),
        (popTitleShadowTxt["x"] = popTitleTxt["x"]),
        (popTitleShadowTxt["y"] = popTitleTxt["y"] + 0xa),
        (popDescTxt["x"] = canvasW / 0x2),
        (popDescTxt["y"] = (canvasH / 0x64) * 0x2b)));
}
function resizeCanvas() {
  var _0x2401aa = a0_0x31209c;
  if (canvasContainer != undefined) {
    (buttonSettings["x"] = canvasW - offset["x"] - 0x32),
      (buttonSettings["y"] = offset["y"] + 0x2d);
    var _0x1a94ed = 0x3c,
      _0x323abd = 0x0;
    (buttonSoundOn["x"] = buttonSoundOff["x"] = buttonSettings["x"]),
      (buttonSoundOn["y"] = buttonSoundOff["y"] =
        buttonSettings["y"] + _0x1a94ed),
      (buttonSoundOn["x"] = buttonSoundOff["x"]),
      (buttonSoundOn["y"] = buttonSoundOff["y"] =
        buttonSettings["y"] + _0x1a94ed);
    typeof buttonMusicOn != "undefined"
      ? ((buttonMusicOn["x"] = buttonMusicOff["x"] = buttonSettings["x"]),
        (buttonMusicOn["y"] = buttonMusicOff["y"] =
          buttonSettings["y"] + _0x1a94ed * 0x2),
        (buttonMusicOn["x"] = buttonMusicOff["x"]),
        (buttonMusicOn["y"] = buttonMusicOff["y"] =
          buttonSettings["y"] + _0x1a94ed * 0x2),
        (_0x323abd = 0x2))
      : (_0x323abd = 0x1);
    (buttonFullscreen["x"] = buttonSettings["x"]),
      (buttonFullscreen["y"] =
        buttonSettings["y"] + _0x1a94ed * (_0x323abd + 0x1));
    curPage == _0x2401aa(0x1fa) || curPage == _0x2401aa(0x35a)
      ? ((buttonExit["visible"] = ![]),
        (buttonFullscreen["x"] = buttonSettings["x"]),
        (buttonFullscreen["y"] =
          buttonSettings["y"] + _0x1a94ed * (_0x323abd + 0x1)))
      : ((buttonExit[_0x2401aa(0x212)] = !![]),
        (buttonExit["x"] = buttonSettings["x"]),
        (buttonExit["y"] =
          buttonSettings["y"] + _0x1a94ed * (_0x323abd + 0x2)));
    if (gameSettings[_0x2401aa(0x1ea)] == _0x2401aa(0x1e1))
      (touchMoveContainer["x"] = canvasW - offset["x"] - 0x82),
        (touchMoveContainer["y"] = canvasH - offset["y"] - 0x82);
    else
      gameSettings[_0x2401aa(0x1ea)] == _0x2401aa(0x26f)
        ? ((touchMoveContainer["x"] = offset["x"] + 0x82),
          (touchMoveContainer["y"] = canvasH - offset["y"] - 0x82))
        : ((touchMoveContainer["x"] = canvasW / 0x2),
          (touchMoveContainer["y"] = canvasH - offset["y"] - 0x82));
    resizeGrid();
  }
}
function removeGameCanvas() {
  var _0x295820 = a0_0x31209c;
  (stage[_0x295820(0x29b)] = !![]),
    stage[_0x295820(0x20c)](),
    stage["update"](),
    createjs[_0x295820(0x2dc)][_0x295820(0x2ab)](_0x295820(0x322), tick),
    createjs[_0x295820(0x2dc)][_0x295820(0x2ab)](_0x295820(0x322), stage);
}
function tick(_0x386c48) {
  var _0x55d6d1 = a0_0x31209c;
  updateGame(), stage[_0x55d6d1(0x272)](_0x386c48);
}
function centerReg(_0x50fb01) {
  var _0x4fe334 = a0_0x31209c;
  (_0x50fb01[_0x4fe334(0x271)] =
    _0x50fb01[_0x4fe334(0x23a)][_0x4fe334(0x1f4)] / 0x2),
    (_0x50fb01["regY"] = _0x50fb01["image"][_0x4fe334(0x351)] / 0x2);
}
function createHitarea(_0x2993cc) {
  var _0xc42b6c = a0_0x31209c;
  _0x2993cc[_0xc42b6c(0x2b0)] = new createjs[_0xc42b6c(0x311)](
    new createjs[_0xc42b6c(0x274)]()
      [_0xc42b6c(0x327)](_0xc42b6c(0x291))
      ["drawRect"](
        0x0,
        0x0,
        _0x2993cc[_0xc42b6c(0x23a)]["naturalWidth"],
        _0x2993cc[_0xc42b6c(0x23a)][_0xc42b6c(0x351)]
      )
  );
}
const themesArr = [
    {
      src: a0_0x31209c(0x2c6),
      feed: a0_0x31209c(0x21f),
      brick: a0_0x31209c(0x229),
      score: [a0_0x31209c(0x314)],
      stroke: {
        stroke: 0xf,
        color: a0_0x31209c(0x31b),
        dashed: [0xc, 0x14],
        dashedColor: a0_0x31209c(0x1c3),
      },
      design: { wall: a0_0x31209c(0x1ee), floor: a0_0x31209c(0x1c8) },
    },
    {
      src: a0_0x31209c(0x1ad),
      feed: a0_0x31209c(0x337),
      brick: a0_0x31209c(0x19d),
      score: [a0_0x31209c(0x245)],
      stroke: { stroke: 0x14, color: "#0060d3" },
      design: { wall: "#39741C", floor: a0_0x31209c(0x23e) },
    },
    {
      src: "assets/snake_05.png",
      feed: a0_0x31209c(0x225),
      brick: a0_0x31209c(0x230),
      score: [a0_0x31209c(0x28f)],
      design: { wall: a0_0x31209c(0x1e6), floor: a0_0x31209c(0x239) },
    },
    {
      src: a0_0x31209c(0x1c9),
      feed: a0_0x31209c(0x247),
      brick: "assets/snake_brick_04.png",
      score: [a0_0x31209c(0x1a4), a0_0x31209c(0x282), a0_0x31209c(0x1ba)],
      design: { wall: a0_0x31209c(0x299), floor: a0_0x31209c(0x2fc) },
    },
    {
      src: "assets/snake_03.png",
      feed: a0_0x31209c(0x19a),
      brick: a0_0x31209c(0x2ed),
      score: [a0_0x31209c(0x1a4), a0_0x31209c(0x282), a0_0x31209c(0x1ba)],
      design: { wall: a0_0x31209c(0x33c), floor: "#837934" },
    },
    {
      src: "assets/snake_02.png",
      feed: a0_0x31209c(0x29a),
      brick: a0_0x31209c(0x22e),
      score: ["assets/snake_score_02.png"],
      design: { wall: "#000", floor: "#94D300" },
    },
    {
      src: "assets/snake_01.png",
      feed: a0_0x31209c(0x312),
      brick: "assets/snake_brick_01.png",
      score: ["assets/snake_score_01.png"],
      stroke: { stroke: 0x1e, color: "#000" },
      design: { wall: a0_0x31209c(0x20a), floor: a0_0x31209c(0x2c7) },
    },
    {
      src: a0_0x31209c(0x27b),
      feed: a0_0x31209c(0x1db),
      brick: a0_0x31209c(0x1e8),
      score: [a0_0x31209c(0x1a7)],
      design: { wall: "#000", floor: a0_0x31209c(0x1fd) },
    },
  ],
  defaultSettings = { row: 0xc, column: 0x13, wall: ![], brick: !![] },
  adventureSettings = {
    enable: !![],
    rowMin: 0xa,
    rowMax: 0x1e,
    columnMin: 0xa,
    columnMax: 0x1e,
    wall: !![],
    brick: !![],
  },
  gameSettings = {
    gridSize: 0x28,
    wallSize: 0xa,
    swipeControl: !![],
    showScreenControl: !![],
    screenControlScale: 0x1,
    screenControlStick: ![],
    screenControlSide: "right",
    screenControlAlpha: 0.6,
    keyboard: {
      up: [0x57, 0x26],
      left: [0x41, 0x25],
      right: [0x44, 0x27],
      down: [0x53, 0x28],
    },
    snakeLength: 0x5,
    level: {
      speed: 0xc8,
      speedTimes: 0x3,
      speedIncrease: 0xa,
      score: 0x64,
      brickTimes: 0x3,
    },
  },
  textStrings = {
    adventureTitle: a0_0x31209c(0x23d),
    adventureSize: a0_0x31209c(0x1ec),
    adventureWall: a0_0x31209c(0x223),
    adventureBrick: "BRICK",
    gridSize: a0_0x31209c(0x287),
    point: "SCORE\x20:\x20[NUMBER]",
    level: a0_0x31209c(0x2e8),
    brick: a0_0x31209c(0x2f3),
    gameover: a0_0x31209c(0x209),
    exitTitle: a0_0x31209c(0x24e),
    exitMessage: a0_0x31209c(0x1cd),
    share: a0_0x31209c(0x1fb),
    resultTitle: a0_0x31209c(0x209),
    resultDesc: "[NUMBER]",
  },
  shareSettings = {
    enable: !![],
    options: [
      a0_0x31209c(0x21c),
      "twitter",
      "whatsapp",
      a0_0x31209c(0x20e),
      a0_0x31209c(0x2b4),
      a0_0x31209c(0x29c),
    ],
    shareTitle: a0_0x31209c(0x309),
    shareText: a0_0x31209c(0x243),
    customScore: !![],
    gtag: !![],
  },
  playerData = { score: 0x0, level: 0x0, brick: 0x0 },
  gameData = {
    paused: !![],
    themeNum: 0x0,
    type: a0_0x31209c(0x266),
    control: ![],
    adventure: { row: 0x0, column: 0x0, wall: ![], brick: ![] },
    settings: {},
    grid: [],
    area: [],
    snake: [],
    snakeFeed: [],
    score: [],
    brick: [],
    level: { speed: 0x0, speedTimes: 0x0, brickTimes: 0x0 },
    dir: "",
    nextDir: "",
    increase: ![],
    complete: ![],
  },
  tweenData = { score: 0x0, tweenScore: 0x0 },
  gestureData = {
    pX: "",
    pY: "",
    pX2: "",
    pY2: "",
    lastDirection: -0x1,
    curDirection: -0x1,
    directionArr: [],
  };
function buildGameButton() {
  var _0x3cb7f2 = a0_0x31209c;
  $(window)[_0x3cb7f2(0x1f7)](function () {
    var _0x43a6fd = _0x3cb7f2;
    !buttonSoundOn[_0x43a6fd(0x212)] && toggleSoundInMute(![]),
      typeof buttonMusicOn != _0x43a6fd(0x1da) &&
        !buttonMusicOn[_0x43a6fd(0x212)] &&
        toggleMusicInMute(![]);
  }),
    $(window)["blur"](function () {
      var _0x5de19b = _0x3cb7f2;
      !buttonSoundOn[_0x5de19b(0x212)] && toggleSoundInMute(!![]),
        typeof buttonMusicOn != _0x5de19b(0x1da) &&
          !buttonMusicOn["visible"] &&
          toggleMusicInMute(!![]);
    });
  audioOn &&
    (muteSoundOn && toggleSoundMute(!![]),
    muteMusicOn && toggleMusicMute(!![]));
  if (!isDesktop) {
  } else {
    var _0x568424 =
      window[_0x3cb7f2(0x238)] != window[_0x3cb7f2(0x22c)][_0x3cb7f2(0x238)]
        ? !![]
        : ![];
    _0x568424
      ? ((this[_0x3cb7f2(0x205)]["onkeydown"] = keydown),
        (this["document"][_0x3cb7f2(0x1f5)] = keyup),
        $(window)[_0x3cb7f2(0x1cf)](function () {
          appendFocusFrame();
        }),
        appendFocusFrame())
      : ((this[_0x3cb7f2(0x205)][_0x3cb7f2(0x1fc)] = keydown),
        (this[_0x3cb7f2(0x205)][_0x3cb7f2(0x1f5)] = keyup));
  }
  (buttonClassic[_0x3cb7f2(0x202)] = "pointer"),
    buttonClassic[_0x3cb7f2(0x283)](_0x3cb7f2(0x352), function (_0x39f72b) {
      var _0x1c6e68 = _0x3cb7f2;
      playSound(_0x1c6e68(0x22f)),
        (gameData[_0x1c6e68(0x2b1)] = _0x1c6e68(0x266)),
        goPage(_0x1c6e68(0x343));
    }),
    (buttonAdventure[_0x3cb7f2(0x202)] = _0x3cb7f2(0x34c)),
    buttonAdventure[_0x3cb7f2(0x283)]("click", function (_0x1dea9a) {
      var _0x25bbf8 = _0x3cb7f2;
      playSound(_0x25bbf8(0x22f)),
        (gameData["type"] = _0x25bbf8(0x33e)),
        goPage(_0x25bbf8(0x343));
    }),
    (buttonArrowL[_0x3cb7f2(0x202)] = "pointer"),
    buttonArrowL[_0x3cb7f2(0x283)](_0x3cb7f2(0x352), function (_0x5e8319) {
      var _0x582df = _0x3cb7f2;
      playSound(_0x582df(0x1d0)), toggleTheme(![]);
    }),
    (buttonArrowR[_0x3cb7f2(0x202)] = _0x3cb7f2(0x34c)),
    buttonArrowR[_0x3cb7f2(0x283)](_0x3cb7f2(0x352), function (_0xcbe812) {
      var _0x6d8b85 = _0x3cb7f2;
      playSound(_0x6d8b85(0x1d0)), toggleTheme(!![]);
    }),
    (buttonSelectTheme[_0x3cb7f2(0x202)] = _0x3cb7f2(0x34c)),
    buttonSelectTheme["addEventListener"](
      _0x3cb7f2(0x352),
      function (_0x1877f7) {
        var _0x3970d4 = _0x3cb7f2;
        playSound(_0x3970d4(0x1d0)),
          gameData[_0x3970d4(0x2b1)] == _0x3970d4(0x266)
            ? goPage(_0x3970d4(0x350))
            : goPage(_0x3970d4(0x33e));
      }
    ),
    (buttonRowL["cursor"] = _0x3cb7f2(0x34c)),
    buttonRowL[_0x3cb7f2(0x283)](_0x3cb7f2(0x352), function (_0x12636e) {
      var _0x42b242 = _0x3cb7f2;
      playSound(_0x42b242(0x1d0)), toggleAdventureRow(![]);
    }),
    (buttonRowR[_0x3cb7f2(0x202)] = _0x3cb7f2(0x34c)),
    buttonRowR["addEventListener"](_0x3cb7f2(0x352), function (_0x5d4bed) {
      var _0x37ff63 = _0x3cb7f2;
      playSound(_0x37ff63(0x1d0)), toggleAdventureRow(!![]);
    }),
    (buttonColumnL[_0x3cb7f2(0x202)] = _0x3cb7f2(0x34c)),
    buttonColumnL["addEventListener"]("click", function (_0x4300e9) {
      var _0x356961 = _0x3cb7f2;
      playSound(_0x356961(0x1d0)), toggleAdventureColumn(![]);
    }),
    (buttonColumnR["cursor"] = _0x3cb7f2(0x34c)),
    buttonColumnR["addEventListener"](_0x3cb7f2(0x352), function (_0x1fe5a1) {
      var _0x6ca71d = _0x3cb7f2;
      playSound(_0x6ca71d(0x1d0)), toggleAdventureColumn(!![]);
    }),
    (buttonAdventureStart["cursor"] = _0x3cb7f2(0x34c)),
    buttonAdventureStart[_0x3cb7f2(0x283)](
      _0x3cb7f2(0x352),
      function (_0x40665c) {
        var _0x5e0038 = _0x3cb7f2;
        playSound(_0x5e0038(0x22f)), goPage("game");
      }
    ),
    itemExit[_0x3cb7f2(0x283)](_0x3cb7f2(0x352), function (_0x3668de) {}),
    (buttonContinue[_0x3cb7f2(0x202)] = _0x3cb7f2(0x34c)),
    buttonContinue[_0x3cb7f2(0x283)](_0x3cb7f2(0x352), function (_0x3c6d05) {
      var _0x4f0d5d = _0x3cb7f2;
      playSound(_0x4f0d5d(0x22f)), goPage("main");
    });
  if (shareSettings[_0x3cb7f2(0x1bf)]) {
    (buttonShare[_0x3cb7f2(0x202)] = _0x3cb7f2(0x34c)),
      buttonShare[_0x3cb7f2(0x283)](_0x3cb7f2(0x352), function (_0x172e6d) {
        var _0x39aeca = _0x3cb7f2;
        playSound(_0x39aeca(0x22f)), toggleSocialShare(!![]);
      });
    for (
      let _0x3a9cc2 = 0x0;
      _0x3a9cc2 < shareSettings[_0x3cb7f2(0x252)][_0x3cb7f2(0x313)];
      _0x3a9cc2++
    ) {
      ($[_0x3cb7f2(0x303)][_0x3cb7f2(0x1dd) + _0x3a9cc2][_0x3cb7f2(0x202)] =
        _0x3cb7f2(0x34c)),
        $[_0x3cb7f2(0x303)][_0x3cb7f2(0x1dd) + _0x3a9cc2][_0x3cb7f2(0x283)](
          _0x3cb7f2(0x352),
          function (_0x2f834a) {
            var _0x2656d3 = _0x3cb7f2;
            shareLinks(
              _0x2f834a[_0x2656d3(0x192)][_0x2656d3(0x279)],
              addCommas(playerData[_0x2656d3(0x24f)])
            );
          }
        );
    }
  }
  (buttonSoundOff[_0x3cb7f2(0x202)] = _0x3cb7f2(0x34c)),
    buttonSoundOff[_0x3cb7f2(0x283)](_0x3cb7f2(0x352), function (_0x466eec) {
      toggleSoundMute(!![]);
    }),
    (buttonSoundOn[_0x3cb7f2(0x202)] = _0x3cb7f2(0x34c)),
    buttonSoundOn[_0x3cb7f2(0x283)](_0x3cb7f2(0x352), function (_0x574fb9) {
      toggleSoundMute(![]);
    }),
    typeof buttonMusicOff != _0x3cb7f2(0x1da) &&
      ((buttonMusicOff["cursor"] = _0x3cb7f2(0x34c)),
      buttonMusicOff[_0x3cb7f2(0x283)](_0x3cb7f2(0x352), function (_0x3e9633) {
        toggleMusicMute(!![]);
      })),
    typeof buttonMusicOn != _0x3cb7f2(0x1da) &&
      ((buttonMusicOn["cursor"] = _0x3cb7f2(0x34c)),
      buttonMusicOn[_0x3cb7f2(0x283)](_0x3cb7f2(0x352), function (_0x5ad277) {
        toggleMusicMute(![]);
      })),
    (buttonFullscreen[_0x3cb7f2(0x202)] = _0x3cb7f2(0x34c)),
    buttonFullscreen[_0x3cb7f2(0x283)](_0x3cb7f2(0x352), function (_0x33aefa) {
      toggleFullScreen();
    }),
    (buttonExit[_0x3cb7f2(0x202)] = "pointer"),
    buttonExit[_0x3cb7f2(0x283)](_0x3cb7f2(0x352), function (_0x36dabc) {
      togglePop(!![]), toggleOptions();
    }),
    (buttonSettings[_0x3cb7f2(0x202)] = _0x3cb7f2(0x34c)),
    buttonSettings[_0x3cb7f2(0x283)]("click", function (_0x44be7f) {
      toggleOptions();
    }),
    (buttonConfirm[_0x3cb7f2(0x202)] = _0x3cb7f2(0x34c)),
    buttonConfirm["addEventListener"](_0x3cb7f2(0x352), function (_0x14ab11) {
      var _0x465bf2 = _0x3cb7f2;
      playSound(_0x465bf2(0x22f)),
        togglePop(![]),
        stopSound(),
        stopGame(),
        goPage(_0x465bf2(0x1fa));
    }),
    (buttonCancel[_0x3cb7f2(0x202)] = _0x3cb7f2(0x34c)),
    buttonCancel[_0x3cb7f2(0x283)](_0x3cb7f2(0x352), function (_0x3a353c) {
      var _0x59765e = _0x3cb7f2;
      playSound(_0x59765e(0x22f)), togglePop(![]);
    }),
    ($[_0x3cb7f2(0x336)][0x0][_0x3cb7f2(0x202)] = _0x3cb7f2(0x34c)),
    $["radio"][0x0][_0x3cb7f2(0x283)](_0x3cb7f2(0x352), function (_0x2a496b) {
      var _0x3223c7 = _0x3cb7f2;
      playSound(_0x3223c7(0x22f)), toggleRadio("wall");
    }),
    ($[_0x3cb7f2(0x336)][0x1][_0x3cb7f2(0x202)] = "pointer"),
    $["radio"][0x1][_0x3cb7f2(0x283)](_0x3cb7f2(0x352), function (_0x5703d6) {
      var _0x2553ce = _0x3cb7f2;
      playSound(_0x2553ce(0x22f)), toggleRadio(_0x2553ce(0x23b));
    }),
    (gameData["adventure"][_0x3cb7f2(0x1e2)] =
      adventureSettings[_0x3cb7f2(0x2fa)]),
    (gameData[_0x3cb7f2(0x33e)]["row"] = adventureSettings[_0x3cb7f2(0x320)]),
    (gameData[_0x3cb7f2(0x33e)]["wall"] = adventureSettings[_0x3cb7f2(0x211)]),
    (gameData[_0x3cb7f2(0x33e)][_0x3cb7f2(0x23b)] =
      adventureSettings[_0x3cb7f2(0x23b)]),
    adventureSettings["wall"]
      ? $[_0x3cb7f2(0x336)][0x0][_0x3cb7f2(0x2cf)](_0x3cb7f2(0x1bf))
      : $[_0x3cb7f2(0x336)][0x0][_0x3cb7f2(0x2cf)](_0x3cb7f2(0x1d4)),
    adventureSettings[_0x3cb7f2(0x23b)]
      ? $["radio"][0x1][_0x3cb7f2(0x2cf)](_0x3cb7f2(0x1bf))
      : $[_0x3cb7f2(0x336)][0x1][_0x3cb7f2(0x2cf)](_0x3cb7f2(0x1d4)),
    checkAdventureSettings(),
    setupSwipeControl(),
    setupTouchControl(),
    preventScrolling();
}
function preventScrolling() {
  var _0x1c7d5a = a0_0x31209c;
  const _0x5939b9 = window[_0x1c7d5a(0x2e2)] !== window[_0x1c7d5a(0x233)];
  if (_0x5939b9) {
    var _0x501f2f = [0x20, 0x26, 0x25, 0x28, 0x27];
    $(window)["on"](_0x1c7d5a(0x2e4), function (_0x431e65) {
      var _0x5e4b9b = _0x1c7d5a;
      _0x501f2f[_0x5e4b9b(0x33a)](_0x431e65[_0x5e4b9b(0x1ff)]) != -0x1 &&
        _0x431e65[_0x5e4b9b(0x2c9)]();
    });
  }
}
function appendFocusFrame() {
  var _0x1b27b6 = a0_0x31209c;
  $(_0x1b27b6(0x20b))[_0x1b27b6(0x2e9)](_0x1b27b6(0x2ec)),
    $("#focus")[_0x1b27b6(0x352)](function () {
      var _0x18f13a = _0x1b27b6;
      $("#focus")[_0x18f13a(0x2f8)]();
    });
}
function keydown(_0x2cea15) {
  var _0x52050e = a0_0x31209c;
  if (
    gameSettings[_0x52050e(0x1a9)][_0x52050e(0x26f)][_0x52050e(0x33a)](
      _0x2cea15[_0x52050e(0x1ff)]
    ) != -0x1
  )
    gameData[_0x52050e(0x2ca)][_0x52050e(0x26f)] = !![];
  else {
    if (
      gameSettings[_0x52050e(0x1a9)]["right"][_0x52050e(0x33a)](
        _0x2cea15[_0x52050e(0x1ff)]
      ) != -0x1
    )
      gameData[_0x52050e(0x2ca)]["right"] = !![];
    else {
      if (
        gameSettings[_0x52050e(0x1a9)]["up"]["indexOf"](
          _0x2cea15[_0x52050e(0x1ff)]
        ) != -0x1
      )
        gameData[_0x52050e(0x2ca)]["up"] = !![];
      else
        gameSettings[_0x52050e(0x1a9)][_0x52050e(0x2fd)][_0x52050e(0x33a)](
          _0x2cea15["keyCode"]
        ) != -0x1 && (gameData["moveControl"][_0x52050e(0x2fd)] = !![]);
    }
  }
}
function keyup(_0x56ce91) {
  var _0x57ea91 = a0_0x31209c;
  if (
    gameSettings["keyboard"]["left"]["indexOf"](_0x56ce91[_0x57ea91(0x1ff)]) !=
    -0x1
  )
    gameData[_0x57ea91(0x2ca)][_0x57ea91(0x26f)] = ![];
  else {
    if (
      gameSettings[_0x57ea91(0x1a9)]["right"]["indexOf"](
        _0x56ce91[_0x57ea91(0x1ff)]
      ) != -0x1
    )
      gameData[_0x57ea91(0x2ca)][_0x57ea91(0x1e1)] = ![];
    else {
      if (
        gameSettings[_0x57ea91(0x1a9)]["up"][_0x57ea91(0x33a)](
          _0x56ce91["keyCode"]
        ) != -0x1
      )
        gameData[_0x57ea91(0x2ca)]["up"] = ![];
      else
        gameSettings[_0x57ea91(0x1a9)][_0x57ea91(0x2fd)][_0x57ea91(0x33a)](
          _0x56ce91[_0x57ea91(0x1ff)]
        ) != -0x1 && (gameData[_0x57ea91(0x2ca)][_0x57ea91(0x2fd)] = ![]);
    }
  }
}
function toggleRadio(_0x5c639f) {
  var _0x10f894 = a0_0x31209c;
  gameData[_0x10f894(0x33e)][_0x5c639f]
    ? (gameData[_0x10f894(0x33e)][_0x5c639f] = ![])
    : (gameData["adventure"][_0x5c639f] = !![]);
  var _0x16145a = _0x5c639f == "wall" ? 0x0 : 0x1;
  gameData[_0x10f894(0x33e)][_0x5c639f]
    ? $[_0x10f894(0x336)][_0x16145a][_0x10f894(0x2cf)](_0x10f894(0x1bf))
    : $[_0x10f894(0x336)][_0x16145a][_0x10f894(0x2cf)]("disable");
}
function toggleTheme(_0x59980d) {
  var _0x32a35f = a0_0x31209c;
  _0x59980d
    ? (gameData["themeNum"]++,
      (gameData[_0x32a35f(0x1f1)] =
        gameData[_0x32a35f(0x1f1)] > themesArr[_0x32a35f(0x313)] - 0x1
          ? 0x0
          : gameData[_0x32a35f(0x1f1)]))
    : (gameData[_0x32a35f(0x1f1)]--,
      (gameData[_0x32a35f(0x1f1)] =
        gameData[_0x32a35f(0x1f1)] < 0x0
          ? themesArr[_0x32a35f(0x313)] - 0x1
          : gameData["themeNum"])),
    buildGrid();
}
function toggleAdventureRow(_0x5822ff) {
  var _0x2ad5b6 = a0_0x31209c;
  _0x5822ff
    ? (gameData["adventure"][_0x2ad5b6(0x21e)]++,
      (gameData[_0x2ad5b6(0x33e)][_0x2ad5b6(0x21e)] =
        gameData["adventure"][_0x2ad5b6(0x21e)] >
        adventureSettings[_0x2ad5b6(0x2f0)]
          ? adventureSettings["rowMax"]
          : gameData[_0x2ad5b6(0x33e)][_0x2ad5b6(0x21e)]))
    : (gameData[_0x2ad5b6(0x33e)][_0x2ad5b6(0x21e)]--,
      (gameData[_0x2ad5b6(0x33e)][_0x2ad5b6(0x21e)] =
        gameData[_0x2ad5b6(0x33e)][_0x2ad5b6(0x21e)] <
        adventureSettings[_0x2ad5b6(0x320)]
          ? adventureSettings[_0x2ad5b6(0x320)]
          : gameData[_0x2ad5b6(0x33e)][_0x2ad5b6(0x21e)])),
    checkAdventureSettings();
}
function toggleAdventureColumn(_0x292cf9) {
  var _0x5d7466 = a0_0x31209c;
  _0x292cf9
    ? (gameData[_0x5d7466(0x33e)][_0x5d7466(0x1e2)]++,
      (gameData[_0x5d7466(0x33e)][_0x5d7466(0x1e2)] =
        gameData[_0x5d7466(0x33e)][_0x5d7466(0x1e2)] >
        adventureSettings[_0x5d7466(0x2e0)]
          ? adventureSettings[_0x5d7466(0x2e0)]
          : gameData[_0x5d7466(0x33e)][_0x5d7466(0x1e2)]))
    : (gameData["adventure"]["column"]--,
      (gameData[_0x5d7466(0x33e)]["column"] =
        gameData[_0x5d7466(0x33e)][_0x5d7466(0x1e2)] <
        adventureSettings["columnMin"]
          ? adventureSettings[_0x5d7466(0x2fa)]
          : gameData[_0x5d7466(0x33e)]["column"])),
    checkAdventureSettings();
}
function checkAdventureSettings() {
  var _0x4bfd56 = a0_0x31209c,
    _0x500a82 = textStrings[_0x4bfd56(0x2f1)][_0x4bfd56(0x356)](
      _0x4bfd56(0x2f9),
      gameData[_0x4bfd56(0x33e)]["column"]
    );
  (_0x500a82 = _0x500a82["replace"](
    "[ROW]",
    gameData[_0x4bfd56(0x33e)][_0x4bfd56(0x21e)]
  )),
    (sizeTxt[_0x4bfd56(0x1dc)] = _0x500a82);
}
function toggleSocialShare(_0x2ce66c) {
  var _0xf5f678 = a0_0x31209c;
  if (!shareSettings[_0xf5f678(0x1bf)]) return;
  (buttonShare[_0xf5f678(0x212)] = _0x2ce66c == !![] ? ![] : !![]),
    (shareSaveContainer[_0xf5f678(0x212)] = _0x2ce66c == !![] ? ![] : !![]),
    (socialContainer[_0xf5f678(0x212)] = _0x2ce66c),
    _0x2ce66c &&
      typeof buttonSave !== _0xf5f678(0x1da) &&
      TweenMax["to"](buttonShare, 0x3, {
        overwrite: !![],
        onComplete: toggleSocialShare,
        onCompleteParams: [![]],
      });
}
function positionShareButtons() {
  var _0x2e5e48 = a0_0x31209c;
  if (!shareSettings[_0x2e5e48(0x1bf)]) return;
  typeof buttonShare !== _0x2e5e48(0x1da) &&
    typeof buttonSave !== _0x2e5e48(0x1da) &&
    (buttonSave["visible"]
      ? ((buttonShare["x"] = -(
          buttonShare["image"]["naturalWidth"] / 0x2 +
          0x5
        )),
        (buttonSave["x"] =
          buttonShare[_0x2e5e48(0x23a)][_0x2e5e48(0x1f4)] / 0x2 + 0x5))
      : (buttonShare["x"] = 0x0));
}
function togglePop(_0x4044dc) {
  var _0x177da1 = a0_0x31209c;
  exitContainer[_0x177da1(0x212)] = _0x4044dc;
}
var curPage = "";
function goPage(_0x565eee) {
  var _0x48068e = a0_0x31209c;
  (curPage = _0x565eee),
    (mainContainer[_0x48068e(0x212)] = ![]),
    (themeContainer[_0x48068e(0x212)] = ![]),
    (adventureContainer[_0x48068e(0x212)] = ![]),
    (gridContainer[_0x48068e(0x212)] = ![]),
    (gameContainer[_0x48068e(0x212)] = ![]),
    (resultContainer[_0x48068e(0x212)] = ![]),
    togglePop(![]),
    toggleOptions(![]),
    stopGame();
  var _0x48d747 = null;
  switch (_0x565eee) {
    case _0x48068e(0x1fa):
      _0x48d747 = mainContainer;
      break;
    case _0x48068e(0x343):
      (_0x48d747 = themeContainer),
        (gridContainer[_0x48068e(0x212)] = !![]),
        (gameData[_0x48068e(0x267)] = {
          row: 0xf,
          column: 0xf,
          wall: defaultSettings[_0x48068e(0x211)],
          brick: defaultSettings[_0x48068e(0x23b)],
        }),
        (gameData[_0x48068e(0x200)] = ![]),
        buildGrid();
      break;
    case _0x48068e(0x33e):
      _0x48d747 = adventureContainer;
      break;
    case _0x48068e(0x350):
      (_0x48d747 = gameContainer),
        (gridContainer[_0x48068e(0x212)] = !![]),
        startGame();
      break;
    case "result":
      (_0x48d747 = resultContainer),
        stopGame(),
        toggleSocialShare(![]),
        playSound(_0x48068e(0x296)),
        (tweenData["tweenScore"] = 0x0),
        TweenMax["to"](tweenData, 0.5, {
          tweenScore: playerData[_0x48068e(0x24f)],
          overwrite: !![],
          onUpdate: function () {
            var _0x1f6096 = _0x48068e;
            resultDescTxt[_0x1f6096(0x1dc)] = resultDescShadowTxt[
              _0x1f6096(0x1dc)
            ] = textStrings["resultDesc"][_0x1f6096(0x356)](
              _0x1f6096(0x1cc),
              addCommas(Math[_0x1f6096(0x258)](tweenData[_0x1f6096(0x244)]))
            );
          },
        }),
        saveGame(playerData[_0x48068e(0x24f)]);
      break;
  }
  _0x48d747 != null &&
    ((_0x48d747[_0x48068e(0x212)] = !![]),
    (_0x48d747[_0x48068e(0x2a7)] = 0x0),
    TweenMax["to"](_0x48d747, 0.5, { alpha: 0x1, overwrite: !![] })),
    resizeCanvas();
}
function startGame() {
  var _0x34834d = a0_0x31209c;
  (gameData[_0x34834d(0x200)] = ![]),
    (gameData[_0x34834d(0x293)] = ![]),
    (gameData[_0x34834d(0x288)] = !![]),
    (gameData[_0x34834d(0x2ca)] = {
      left: ![],
      right: ![],
      up: ![],
      down: ![],
    }),
    gameData[_0x34834d(0x2b1)] == _0x34834d(0x266)
      ? (gameData[_0x34834d(0x267)] = {
          row: defaultSettings[_0x34834d(0x21e)],
          column: defaultSettings[_0x34834d(0x1e2)],
          wall: defaultSettings[_0x34834d(0x211)],
          brick: defaultSettings[_0x34834d(0x23b)],
        })
      : (gameData[_0x34834d(0x267)] = {
          row: gameData[_0x34834d(0x33e)]["row"],
          column: gameData[_0x34834d(0x33e)][_0x34834d(0x1e2)],
          wall: gameData[_0x34834d(0x33e)][_0x34834d(0x211)],
          brick: gameData[_0x34834d(0x33e)][_0x34834d(0x23b)],
        }),
    brickContainer[_0x34834d(0x20c)](),
    (gameData[_0x34834d(0x23b)] = []),
    (statusContainer[_0x34834d(0x2a7)] = 0x0),
    buildGrid(),
    updateBrickIcon(),
    updateGameStats(),
    playSound(_0x34834d(0x319)),
    (touchContainer[_0x34834d(0x212)] = ![]),
    gameSettings["showScreenControl"]
      ? ((touchContainer[_0x34834d(0x212)] = !![]),
        (touchContainer[_0x34834d(0x2a7)] = gameSettings["screenControlAlpha"]))
      : !isDesktop &&
        ((touchContainer["visible"] = !![]),
        (touchContainer["alpha"] = gameSettings["screenControlAlpha"]));
}
function setupSnakeLevel() {
  var _0x215221 = a0_0x31209c;
  (tweenData[_0x215221(0x244)] = 0x0),
    (playerData["score"] = 0x0),
    (playerData[_0x215221(0x1b6)] = 0x0),
    (playerData[_0x215221(0x23b)] = 0x0),
    (gameData[_0x215221(0x1b6)]["speed"] =
      gameSettings[_0x215221(0x1b6)][_0x215221(0x21a)]),
    (gameData[_0x215221(0x1b6)][_0x215221(0x32b)] = 0x0),
    (gameData[_0x215221(0x1b6)][_0x215221(0x1d5)] = 0x0);
}
function stopGame() {
  var _0x50f5f2 = a0_0x31209c;
  (gameData["paused"] = !![]),
    (gameData["control"] = ![]),
    TweenMax[_0x50f5f2(0x2b9)](![], !![], ![]);
}
function saveGame(_0x3c12bd) {
  var _0x4f8f35 = a0_0x31209c;
  typeof toggleScoreboardSave == _0x4f8f35(0x215) &&
    (($[_0x4f8f35(0x25c)][_0x4f8f35(0x24f)] = _0x3c12bd),
    typeof type != "undefined" && ($[_0x4f8f35(0x25c)]["type"] = type),
    toggleScoreboardSave(!![]));
}
function buildGrid() {
  var _0x3f42e1 = a0_0x31209c;
  bgContainer[_0x3f42e1(0x20c)](),
    bgContainer[_0x3f42e1(0x20c)](),
    brickContainer[_0x3f42e1(0x20c)](),
    (gameData[_0x3f42e1(0x1e4)] = []),
    (gameData[_0x3f42e1(0x1c2)] = []);
  var _0x3b50de = { x: 0x0, y: 0x0 },
    _0x22649c = gameSettings[_0x3f42e1(0x2f1)];
  for (
    var _0x7252fd = 0x0;
    _0x7252fd < gameData[_0x3f42e1(0x267)]["row"];
    _0x7252fd++
  ) {
    gameData["grid"][_0x3f42e1(0x27c)]([]),
      gameData[_0x3f42e1(0x1c2)]["push"]([]);
    for (
      var _0x2095b6 = 0x0;
      _0x2095b6 < gameData[_0x3f42e1(0x267)][_0x3f42e1(0x1e2)];
      _0x2095b6++
    ) {
      var _0xaeeffd = new createjs[_0x3f42e1(0x311)]();
      _0xaeeffd["graphics"]
        [_0x3f42e1(0x327)](
          themesArr[gameData[_0x3f42e1(0x1f1)]][_0x3f42e1(0x2a2)][
            _0x3f42e1(0x258)
          ]
        )
        ["drawRect"](
          -(_0x22649c / 0x2),
          -(_0x22649c / 0x2),
          _0x22649c + 0x1,
          _0x22649c + 0x1
        ),
        (_0xaeeffd["x"] = _0x3b50de["x"]),
        (_0xaeeffd["y"] = _0x3b50de["y"]),
        (_0xaeeffd[_0x3f42e1(0x212)] = ![]),
        bgContainer[_0x3f42e1(0x246)](_0xaeeffd),
        (_0x3b50de["x"] += _0x22649c),
        (gameData["grid"][_0x7252fd][_0x2095b6] = _0xaeeffd),
        (gameData["area"][_0x7252fd][_0x2095b6] = 0x0);
    }
    (_0x3b50de["x"] = 0x0), (_0x3b50de["y"] += _0x22649c);
  }
  (gameData[_0x3f42e1(0x267)][_0x3f42e1(0x2b8)] =
    gameData[_0x3f42e1(0x267)][_0x3f42e1(0x1e2)] * _0x22649c - _0x22649c),
    (gameData[_0x3f42e1(0x267)][_0x3f42e1(0x263)] =
      gameData["settings"]["row"] * _0x22649c - _0x22649c),
    gridWall[_0x3f42e1(0x26b)]["clear"](),
    gridGround[_0x3f42e1(0x26b)][_0x3f42e1(0x294)](),
    gridMask[_0x3f42e1(0x26b)]["clear"](),
    gridWall[_0x3f42e1(0x26b)]
      [_0x3f42e1(0x327)](
        themesArr[gameData["themeNum"]][_0x3f42e1(0x2a2)][_0x3f42e1(0x211)]
      )
      ["drawRect"](
        -(gameSettings[_0x3f42e1(0x2be)] + _0x22649c / 0x2),
        -(gameSettings["wallSize"] + _0x22649c / 0x2),
        gameData[_0x3f42e1(0x267)][_0x3f42e1(0x2b8)] +
          _0x22649c +
          gameSettings["wallSize"] * 0x2,
        gameData[_0x3f42e1(0x267)]["height"] +
          _0x22649c +
          gameSettings[_0x3f42e1(0x2be)] * 0x2
      ),
    gridGround[_0x3f42e1(0x26b)]
      [_0x3f42e1(0x327)](
        themesArr[gameData[_0x3f42e1(0x1f1)]]["design"][_0x3f42e1(0x258)]
      )
      [_0x3f42e1(0x226)](
        -(_0x22649c / 0x2),
        -(_0x22649c / 0x2),
        gameData["settings"][_0x3f42e1(0x2b8)] + _0x22649c,
        gameData[_0x3f42e1(0x267)][_0x3f42e1(0x263)] + _0x22649c
      ),
    gridMask[_0x3f42e1(0x26b)]
      ["beginFill"](_0x3f42e1(0x30b))
      [_0x3f42e1(0x226)](
        0x0,
        0x0,
        gameData["settings"][_0x3f42e1(0x1e2)] * _0x22649c,
        gameData[_0x3f42e1(0x267)][_0x3f42e1(0x21e)] * _0x22649c
      ),
    (gridMask["x"] = -(_0x22649c / 0x2)),
    (gridMask["y"] = -(_0x22649c / 0x2)),
    (maskContainer[_0x3f42e1(0x213)] = gridMask),
    (gameData[_0x3f42e1(0x1d2)] = gameData[_0x3f42e1(0x256)] = "right"),
    setupSnakeLevel(),
    createSnake(),
    insertType("score");
  if (curPage == "theme") {
    var _0x44ac7f = gameData[_0x3f42e1(0x295)][0x0][_0x3f42e1(0x21e)];
    for (var _0x418ce2 = 0x0; _0x418ce2 < 0xa; _0x418ce2++) {
      insertType(_0x3f42e1(0x23b), _0x44ac7f);
    }
  }
  resizeGrid(), toggleLoopSnake(!![]);
}
function resizeGrid() {
  var _0x1ff546 = a0_0x31209c;
  gridContainer["scaleX"] = gridContainer["scaleY"] = 0x1;
  var _0xcf27fc = 0x1c2,
    _0x3247d0 = 0x30c;
  !viewport["isLandscape"] && ((_0xcf27fc = 0x2ee), (_0x3247d0 = 0x212));
  var _0x4e37e7 = 0x1,
    _0x4093ff = 0x1;
  gameData[_0x1ff546(0x267)][_0x1ff546(0x263)] > _0xcf27fc &&
    (_0x4093ff = _0xcf27fc / gameData["settings"]["height"]);
  gameData[_0x1ff546(0x267)]["width"] > _0x3247d0 &&
    (_0x4e37e7 = _0x3247d0 / gameData[_0x1ff546(0x267)][_0x1ff546(0x2b8)]);
  _0x4e37e7 < _0x4093ff
    ? (gridContainer["scaleX"] = gridContainer[_0x1ff546(0x218)] = _0x4e37e7)
    : (gridContainer["scaleX"] = gridContainer[_0x1ff546(0x218)] = _0x4093ff);
  var _0x585993 = gridContainer[_0x1ff546(0x210)],
    _0x29a04a = gameSettings["gridSize"] * _0x585993,
    _0x55794a = gameSettings[_0x1ff546(0x2be)] * _0x585993;
  (gridContainer["x"] =
    canvasW / 0x2 - (gameData["settings"][_0x1ff546(0x2b8)] * _0x585993) / 0x2),
    (gridContainer["y"] =
      canvasH / 0x2 -
      (gameData[_0x1ff546(0x267)][_0x1ff546(0x263)] * _0x585993) / 0x2),
    (levelStatusContainer["x"] =
      canvasW / 0x2 -
      ((gameData[_0x1ff546(0x267)][_0x1ff546(0x2b8)] * _0x585993) / 0x2 +
        _0x29a04a / 0x2)),
    (levelStatusContainer["y"] =
      canvasH / 0x2 -
      ((gameData["settings"][_0x1ff546(0x263)] * _0x585993) / 0x2 +
        (_0x29a04a / 0x2 + _0x55794a + 0xa))),
    (brickStatusContainer["x"] = levelStatusContainer["x"] + 0xa0),
    (brickStatusContainer["y"] = levelStatusContainer["y"]),
    (scoreStatusContainer["x"] = canvasW / 0x2),
    (scoreStatusContainer["y"] =
      canvasH / 0x2 +
      ((gameData[_0x1ff546(0x267)][_0x1ff546(0x263)] * _0x585993) / 0x2 +
        (_0x29a04a / 0x2 + _0x55794a + 0x23)));
}
function createSnake() {
  var _0x3b6822 = a0_0x31209c;
  snakeContainer[_0x3b6822(0x20c)](),
    (gameData[_0x3b6822(0x295)] = []),
    (gameData[_0x3b6822(0x1e0)] = []),
    (gameData["increase"] = ![]);
  var _0x6d994e = gameSettings["snakeLength"];
  _0x6d994e =
    _0x6d994e > gameData[_0x3b6822(0x267)][_0x3b6822(0x1e2)]
      ? gameData[_0x3b6822(0x267)][_0x3b6822(0x1e2)] - 0x2
      : _0x6d994e;
  var _0x32846b = Math["floor"](gameData["settings"]["row"] / 0x2),
    _0x213c89 =
      Math[_0x3b6822(0x258)](gameData["settings"]["column"] / 0x2) +
      Math[_0x3b6822(0x258)](_0x6d994e / 0x2);
  for (var _0x27ccc1 = 0x0; _0x27ccc1 < _0x6d994e; _0x27ccc1++) {
    var _0x17a1e1 = createSnakeShape();
    gameData[_0x3b6822(0x295)][_0x3b6822(0x27c)](_0x17a1e1),
      (gameData["area"][_0x32846b][_0x213c89] = 0x1),
      (_0x17a1e1["x"] = gameData[_0x3b6822(0x1e4)][_0x32846b][_0x213c89]["x"]),
      (_0x17a1e1["y"] = gameData[_0x3b6822(0x1e4)][_0x32846b][_0x213c89]["y"]),
      (_0x17a1e1[_0x3b6822(0x18d)] = { x: _0x17a1e1["x"], y: _0x17a1e1["y"] }),
      (_0x17a1e1["row"] = _0x32846b),
      (_0x17a1e1[_0x3b6822(0x1e2)] = _0x213c89),
      _0x213c89--;
  }
  checkSnakeRotation();
}
function createSnakeShape() {
  var _0x3bb334 = a0_0x31209c,
    _0x19cb50 = 0x1,
    _0x985fea = 0x2a,
    _0x205162 = 0x2a,
    _0x144a96 = {
      regX: _0x985fea / 0x2,
      regY: _0x205162 / 0x2,
      height: _0x205162,
      width: _0x985fea,
      count: 0x6,
    },
    _0x2c161f = {
      idle: { frames: [0x0], speed: _0x19cb50 },
      tongue: { frames: [0x1], speed: _0x19cb50 },
      eat: { frames: [0x2], speed: _0x19cb50 },
      body: { frames: [0x3], speed: _0x19cb50 },
      bodybend: { frames: [0x4], speed: _0x19cb50 },
      tail: { frames: [0x5], speed: _0x19cb50 },
    },
    _0x4fdda8 = new createjs[_0x3bb334(0x1a2)]({
      images: [
        loader["getResult"](_0x3bb334(0x295) + gameData[_0x3bb334(0x1f1)]),
      ],
      frames: _0x144a96,
      animations: _0x2c161f,
    }),
    _0x60de62 = new createjs[_0x3bb334(0x28c)](_0x4fdda8, "idle");
  return snakeContainer[_0x3bb334(0x246)](_0x60de62), _0x60de62;
}
function insertType(_0x30aca2, _0x505666) {
  var _0xf1db80 = a0_0x31209c;
  _0x30aca2 == _0xf1db80(0x24f) &&
    (gameData[_0xf1db80(0x24f)][_0xf1db80(0x313)] > 0x0 &&
      TweenMax[_0xf1db80(0x2a4)](gameData[_0xf1db80(0x24f)][0x0]),
    scoreContainer["removeAllChildren"](),
    (gameData["score"] = []));
  var _0x1205f1 = [];
  for (
    var _0x919232 = 0x0;
    _0x919232 < gameData[_0xf1db80(0x267)][_0xf1db80(0x21e)];
    _0x919232++
  ) {
    for (
      var _0x828cd0 = 0x0;
      _0x828cd0 < gameData[_0xf1db80(0x267)][_0xf1db80(0x1e2)];
      _0x828cd0++
    ) {
      if (gameData[_0xf1db80(0x1c2)][_0x919232][_0x828cd0] == 0x0) {
        var _0x33762e = ![];
        _0x505666 != undefined && _0x505666 == _0x919232 && (_0x33762e = !![]),
          !_0x33762e &&
            _0x1205f1[_0xf1db80(0x27c)]({ r: _0x919232, c: _0x828cd0 });
      }
    }
  }
  shuffle(_0x1205f1);
  var _0x32f944,
    _0xa1ce6a = 0x2;
  if (_0x30aca2 == _0xf1db80(0x24f)) {
    var _0x52997f = Math["floor"](
      Math[_0xf1db80(0x1b0)]() *
        themesArr[gameData[_0xf1db80(0x1f1)]][_0xf1db80(0x24f)]["length"]
    );
    (_0x32f944 = new createjs[_0xf1db80(0x2d0)](
      loader["getResult"](
        _0xf1db80(0x31a) + _0x52997f + "_" + gameData["themeNum"]
      )
    )),
      centerReg(_0x32f944),
      scoreContainer[_0xf1db80(0x246)](_0x32f944),
      gameData["score"][_0xf1db80(0x27c)](_0x32f944),
      animateScore(_0x32f944);
  } else {
    (_0xa1ce6a = 0x3),
      (_0x32f944 = new createjs[_0xf1db80(0x2d0)](
        loader[_0xf1db80(0x2cc)]("snakeBrick" + gameData[_0xf1db80(0x1f1)])
      )),
      centerReg(_0x32f944),
      brickContainer[_0xf1db80(0x246)](_0x32f944),
      gameData["brick"][_0xf1db80(0x27c)](_0x32f944);
    if (curPage == _0xf1db80(0x350)) playSound(_0xf1db80(0x357));
  }
  (gameData[_0xf1db80(0x1c2)][_0x1205f1[0x0]["r"]][_0x1205f1[0x0]["c"]] =
    _0xa1ce6a),
    (_0x32f944["x"] =
      gameData[_0xf1db80(0x1e4)][_0x1205f1[0x0]["r"]][_0x1205f1[0x0]["c"]][
        "x"
      ]),
    (_0x32f944["y"] =
      gameData[_0xf1db80(0x1e4)][_0x1205f1[0x0]["r"]][_0x1205f1[0x0]["c"]][
        "y"
      ]);
}
function animateScore(_0x5be867) {
  var _0x48ce1f = 0.3;
  TweenMax["to"](_0x5be867, _0x48ce1f, {
    scaleX: 0.7,
    scaleY: 0.7,
    overwrite: !![],
    onComplete: function () {
      TweenMax["to"](_0x5be867, _0x48ce1f, {
        scaleX: 0x1,
        scaleY: 0x1,
        overwrite: !![],
        onComplete: animateScore,
        onCompleteParams: [_0x5be867],
      });
    },
  });
}
function checkSnakeRotation() {
  var _0x221c88 = a0_0x31209c;
  for (
    var _0x2c1923 = 0x0;
    _0x2c1923 < gameData[_0x221c88(0x295)][_0x221c88(0x313)];
    _0x2c1923++
  ) {
    var _0x324bee = gameData[_0x221c88(0x295)][_0x2c1923];
    getSnakeRotation(_0x2c1923, _0x324bee);
  }
}
function getSnakeRotation(_0xf75f13, _0x5caacf) {
  var _0x258f27 = a0_0x31209c,
    _0x263436 = gameSettings[_0x258f27(0x2f1)];
  (_0x5caacf[_0x258f27(0x2a9)] = 0x0),
    (_0x5caacf[_0x258f27(0x210)] = _0x5caacf[_0x258f27(0x218)] = 0x1);
  if (_0xf75f13 == 0x0) {
    if (gameData["nextDir"] == _0x258f27(0x1e1))
      (_0x5caacf[_0x258f27(0x210)] = -0x1),
        (_0x5caacf[_0x258f27(0x2a9)] = 0x5a);
    else {
      if (gameData[_0x258f27(0x256)] == _0x258f27(0x2fd))
        _0x5caacf[_0x258f27(0x2a9)] = 0xb4;
      else
        gameData[_0x258f27(0x256)] == _0x258f27(0x26f) &&
          (_0x5caacf["rotation"] = 0x10e);
    }
  } else {
    if (_0xf75f13 < gameData[_0x258f27(0x295)][_0x258f27(0x313)] - 0x1) {
      var _0x831b61 = gameData[_0x258f27(0x295)][_0xf75f13 - 0x1],
        _0x4338a5 = _0x5caacf,
        _0x212646 = gameData[_0x258f27(0x295)][_0xf75f13 + 0x1];
      if (
        getDistance(
          _0x831b61["x"],
          _0x831b61["y"],
          _0x4338a5["x"],
          _0x4338a5["y"]
        ) > gameSettings[_0x258f27(0x2f1)]
      ) {
        if (_0x4338a5["x"] == _0x831b61["x"])
          _0x831b61["y"] > _0x4338a5["y"]
            ? (_0x831b61 = { x: _0x4338a5["x"], y: _0x4338a5["y"] - _0x263436 })
            : (_0x831b61 = {
                x: _0x4338a5["x"],
                y: _0x4338a5["y"] + _0x263436,
              });
        else
          _0x4338a5["y"] == _0x831b61["y"] &&
            (_0x831b61["x"] > _0x4338a5["x"]
              ? (_0x831b61 = {
                  x: _0x4338a5["x"] - _0x263436,
                  y: _0x4338a5["y"],
                })
              : (_0x831b61 = {
                  x: _0x4338a5["x"] + _0x263436,
                  y: _0x4338a5["y"],
                }));
      }
      if (
        getDistance(
          _0x212646["x"],
          _0x212646["y"],
          _0x4338a5["x"],
          _0x4338a5["y"]
        ) > gameSettings[_0x258f27(0x2f1)]
      ) {
        if (_0x4338a5["x"] == _0x212646["x"])
          _0x212646["y"] > _0x4338a5["y"]
            ? (_0x212646 = { x: _0x4338a5["x"], y: _0x4338a5["y"] - _0x263436 })
            : (_0x212646 = {
                x: _0x4338a5["x"],
                y: _0x4338a5["y"] + _0x263436,
              });
        else
          _0x4338a5["y"] == _0x212646["y"] &&
            (_0x212646["x"] > _0x4338a5["x"]
              ? (_0x212646 = {
                  x: _0x4338a5["x"] - _0x263436,
                  y: _0x4338a5["y"],
                })
              : (_0x212646 = {
                  x: _0x4338a5["x"] + _0x263436,
                  y: _0x4338a5["y"],
                }));
      }
      if (_0x831b61["x"] == _0x4338a5["x"] && _0x212646["x"] == _0x4338a5["x"])
        _0x5caacf[_0x258f27(0x2cf)]("body");
      else {
        if (
          _0x831b61["y"] == _0x4338a5["y"] &&
          _0x212646["y"] == _0x4338a5["y"]
        )
          _0x5caacf["gotoAndStop"]("body"), (_0x5caacf["rotation"] = 0x5a);
        else {
          _0x5caacf[_0x258f27(0x2cf)](_0x258f27(0x2c2));
          if (
            _0x212646["x"] < _0x4338a5["x"] &&
            _0x831b61["y"] < _0x4338a5["y"]
          )
            _0x5caacf[_0x258f27(0x2a9)] = 0x5a;
          else {
            if (
              _0x212646["x"] < _0x4338a5["x"] &&
              _0x831b61["y"] > _0x4338a5["y"]
            ) {
            } else {
              if (
                _0x212646["x"] > _0x4338a5["x"] &&
                _0x831b61["y"] < _0x4338a5["y"]
              )
                _0x5caacf[_0x258f27(0x2a9)] = -0xb4;
              else {
                if (
                  _0x212646["x"] > _0x4338a5["x"] &&
                  _0x831b61["y"] > _0x4338a5["y"]
                )
                  _0x5caacf[_0x258f27(0x2a9)] = -0x5a;
                else {
                  if (
                    _0x212646["y"] < _0x4338a5["y"] &&
                    _0x831b61["x"] < _0x4338a5["x"]
                  )
                    _0x5caacf["rotation"] = 0x5a;
                  else {
                    if (
                      _0x212646["y"] < _0x4338a5["y"] &&
                      _0x831b61["x"] > _0x4338a5["x"]
                    )
                      _0x5caacf["rotation"] = 0xb4;
                    else {
                      if (
                        _0x212646["y"] > _0x4338a5["y"] &&
                        _0x831b61["x"] < _0x4338a5["x"]
                      ) {
                      } else
                        _0x212646["y"] > _0x4338a5["y"] &&
                          _0x831b61["x"] > _0x4338a5["x"] &&
                          (_0x5caacf["rotation"] = -0x5a);
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else {
      _0x5caacf["gotoAndStop"](_0x258f27(0x1a5));
      var _0x831b61 = gameData[_0x258f27(0x295)][_0xf75f13 - 0x1],
        _0x4338a5 = _0x5caacf;
      if (
        getDistance(
          _0x831b61["x"],
          _0x831b61["y"],
          _0x4338a5["x"],
          _0x4338a5["y"]
        ) > gameSettings[_0x258f27(0x2f1)]
      ) {
        if (_0x831b61["x"] == _0x4338a5["x"])
          _0x831b61["y"] > _0x4338a5["y"]
            ? (_0x5caacf[_0x258f27(0x2a9)] = 0x0)
            : (_0x5caacf[_0x258f27(0x2a9)] = 0xb4);
        else
          _0x831b61["y"] == _0x4338a5["y"] &&
            (_0x831b61["x"] > _0x4338a5["x"]
              ? (_0x5caacf[_0x258f27(0x2a9)] = -0x5a)
              : (_0x5caacf["rotation"] = 0x5a));
      } else {
        if (_0x831b61["x"] == _0x4338a5["x"])
          _0x831b61["y"] > _0x4338a5["y"] &&
            (_0x5caacf[_0x258f27(0x2a9)] = 0xb4);
        else
          _0x831b61["y"] == _0x4338a5["y"] &&
            (_0x831b61["x"] > _0x4338a5["x"]
              ? (_0x5caacf[_0x258f27(0x2a9)] = 0x5a)
              : (_0x5caacf[_0x258f27(0x2a9)] = -0x5a));
      }
    }
  }
}
function toggleLoopSnake(_0x162d2a) {
  var _0x271025 = a0_0x31209c;
  _0x162d2a
    ? ((gameData[_0x271025(0x237)] = !![]),
      (gameData[_0x271025(0x269)] = new Date()))
    : (gameData[_0x271025(0x237)] = ![]);
}
function loopSnake() {
  var _0x5ddea8 = a0_0x31209c,
    _0x4938cc = ![],
    _0x53b369 = ![],
    _0x5ea991 = ![],
    _0x1d2618 = ![],
    _0x2228dd = ![],
    _0x4b995a = -0x1,
    _0x565a91 = -0x1,
    _0x592d47,
    _0x23817c =
      themesArr[gameData["themeNum"]][_0x5ddea8(0x25b)] == undefined
        ? ![]
        : !![];
  if (gameData[_0x5ddea8(0x2e1)]) {
    gameData["increase"] = ![];
    var _0x205cfb = gameData[_0x5ddea8(0x295)][0x0][_0x5ddea8(0x21e)],
      _0x9957c1 = gameData["snake"][0x0][_0x5ddea8(0x1e2)];
    (_0x592d47 = createSnakeShape()),
      (_0x592d47["x"] = gameData[_0x5ddea8(0x1e4)][_0x205cfb][_0x9957c1]["x"]),
      (_0x592d47["y"] = gameData["grid"][_0x205cfb][_0x9957c1]["y"]),
      (_0x592d47["base"] = { x: _0x592d47["x"], y: _0x592d47["y"] }),
      (_0x592d47[_0x5ddea8(0x21e)] = _0x205cfb),
      (_0x592d47["column"] = _0x9957c1),
      (_0x592d47[_0x5ddea8(0x212)] = ![]),
      gameData[_0x5ddea8(0x295)][_0x5ddea8(0x2c5)](_0x592d47),
      (_0x2228dd = !![]);
  }
  for (
    var _0x2a8e02 = 0x0;
    _0x2a8e02 < gameData[_0x5ddea8(0x295)][_0x5ddea8(0x313)];
    _0x2a8e02++
  ) {
    var _0x47e94d = gameData[_0x5ddea8(0x295)][_0x2a8e02],
      _0x205cfb = _0x47e94d[_0x5ddea8(0x21e)],
      _0x9957c1 = _0x47e94d[_0x5ddea8(0x1e2)];
    if (_0x2a8e02 == 0x0) {
      if (gameData["nextDir"] == _0x5ddea8(0x26f)) _0x9957c1--;
      else {
        if (gameData[_0x5ddea8(0x256)] == _0x5ddea8(0x1e1)) _0x9957c1++;
        else {
          if (gameData[_0x5ddea8(0x256)] == "up") _0x205cfb--;
          else gameData[_0x5ddea8(0x256)] == _0x5ddea8(0x2fd) && _0x205cfb++;
        }
      }
    } else (_0x205cfb = _0x4b995a), (_0x9957c1 = _0x565a91);
    (_0x4b995a = _0x47e94d[_0x5ddea8(0x21e)]),
      (_0x565a91 = _0x47e94d[_0x5ddea8(0x1e2)]);
    gameData["settings"][_0x5ddea8(0x211)] &&
      ((_0x205cfb < 0x0 ||
        _0x205cfb >= gameData[_0x5ddea8(0x267)][_0x5ddea8(0x21e)]) &&
        (_0x4938cc = !![]),
      (_0x9957c1 < 0x0 ||
        _0x9957c1 >= gameData[_0x5ddea8(0x267)][_0x5ddea8(0x1e2)]) &&
        (_0x4938cc = !![]));
    (_0x205cfb =
      _0x205cfb < 0x0
        ? gameData["settings"][_0x5ddea8(0x21e)] - 0x1
        : _0x205cfb),
      (_0x205cfb =
        _0x205cfb >= gameData[_0x5ddea8(0x267)][_0x5ddea8(0x21e)]
          ? 0x0
          : _0x205cfb),
      (_0x9957c1 =
        _0x9957c1 < 0x0
          ? gameData[_0x5ddea8(0x267)][_0x5ddea8(0x1e2)] - 0x1
          : _0x9957c1),
      (_0x9957c1 =
        _0x9957c1 >= gameData["settings"]["column"] ? 0x0 : _0x9957c1);
    gameData[_0x5ddea8(0x1c2)][_0x205cfb][_0x9957c1] == 0x3 &&
      (_0x53b369 = !![]);
    if (!_0x4938cc && !_0x53b369) {
      gameData[_0x5ddea8(0x1c2)][_0x205cfb][_0x9957c1] == 0x1 &&
        (_0x5ea991 = !![]);
      if (!_0x5ea991) {
        (gameData["area"][_0x47e94d[_0x5ddea8(0x21e)]][
          _0x47e94d[_0x5ddea8(0x1e2)]
        ] = 0x0),
          (_0x47e94d[_0x5ddea8(0x18d)]["x"] =
            gameData[_0x5ddea8(0x1e4)][_0x205cfb][_0x9957c1]["x"]),
          (_0x47e94d["base"]["y"] =
            gameData["grid"][_0x205cfb][_0x9957c1]["y"]);
        if (_0x23817c && _0x2a8e02 == 0x0)
          animateSnake(_0x47e94d, _0x205cfb, _0x9957c1);
        else
          _0x23817c &&
          _0x2a8e02 == gameData[_0x5ddea8(0x295)][_0x5ddea8(0x313)] - 0x1
            ? animateSnake(_0x47e94d, _0x205cfb, _0x9957c1)
            : ((_0x47e94d["x"] =
                gameData[_0x5ddea8(0x1e4)][_0x205cfb][_0x9957c1]["x"]),
              (_0x47e94d["y"] =
                gameData[_0x5ddea8(0x1e4)][_0x205cfb][_0x9957c1]["y"]));
        (_0x47e94d[_0x5ddea8(0x21e)] = _0x205cfb),
          (_0x47e94d[_0x5ddea8(0x1e2)] = _0x9957c1),
          gameData["area"][_0x205cfb][_0x9957c1] == 0x2 && (_0x1d2618 = !![]),
          (gameData[_0x5ddea8(0x1c2)][_0x205cfb][_0x9957c1] = 0x1);
      }
    }
    _0x2228dd &&
      ((_0x2a8e02 = gameData[_0x5ddea8(0x295)][_0x5ddea8(0x313)]),
      (_0x592d47[_0x5ddea8(0x212)] = !![]));
    if (_0x4938cc) {
      _0x2a8e02 = gameData["snake"][_0x5ddea8(0x313)];
      var _0x419e54 = Math[_0x5ddea8(0x258)](Math[_0x5ddea8(0x1b0)]() * 0x3);
      playSound(_0x5ddea8(0x1aa) + (_0x419e54 + 0x1)), endGame();
    }
    if (_0x53b369) {
      _0x2a8e02 = gameData[_0x5ddea8(0x295)][_0x5ddea8(0x313)];
      var _0x419e54 = Math["floor"](Math[_0x5ddea8(0x1b0)]() * 0x3);
      playSound(_0x5ddea8(0x1aa) + (_0x419e54 + 0x1)), endGame();
    }
    if (_0x5ea991) {
      _0x2a8e02 = gameData[_0x5ddea8(0x295)][_0x5ddea8(0x313)];
      var _0x419e54 = Math["floor"](Math[_0x5ddea8(0x1b0)]() * 0x3);
      playSound(_0x5ddea8(0x1aa) + (_0x419e54 + 0x1)), endGame();
    }
  }
  !_0x5ea991 && !_0x53b369 && !_0x4938cc && checkSnakeRotation();
  checkScoreNearby();
  if (_0x1d2618) {
    var _0x419e54 = Math["floor"](Math[_0x5ddea8(0x1b0)]() * 0x2);
    playSound(_0x5ddea8(0x24c) + (_0x419e54 + 0x1)),
      (gameData["increase"] = !![]),
      animateSnakeFeed(),
      increaseGameStats(),
      insertType(_0x5ddea8(0x24f));
  }
  gameData["dir"] != gameData[_0x5ddea8(0x256)] && playSound("soundSwing"),
    (gameData[_0x5ddea8(0x1d2)] = gameData["nextDir"]);
}
function animateSnake(_0x1497fe, _0x2b6622, _0x2603a1) {
  var _0x37e913 = a0_0x31209c,
    _0x2d6ef2 = ![],
    _0x219e21 = 0x0,
    _0x168e0e = 0x0,
    _0x30c63a = gameSettings[_0x37e913(0x2f1)];
  if (
    _0x2603a1 == 0x0 &&
    _0x1497fe[_0x37e913(0x1e2)] ==
      gameData[_0x37e913(0x267)][_0x37e913(0x1e2)] - 0x1
  )
    (_0x2d6ef2 = !![]), (_0x219e21 = _0x30c63a / 0x2);
  else
    _0x2603a1 == gameData["settings"]["column"] - 0x1 &&
      _0x1497fe[_0x37e913(0x1e2)] == 0x0 &&
      ((_0x2d6ef2 = !![]), (_0x219e21 = -(_0x30c63a / 0x2)));
  if (
    _0x2b6622 == 0x0 &&
    _0x1497fe["row"] == gameData["settings"][_0x37e913(0x21e)] - 0x1
  )
    (_0x2d6ef2 = !![]), (_0x168e0e = _0x30c63a / 0x2);
  else
    _0x2b6622 == gameData[_0x37e913(0x267)][_0x37e913(0x21e)] - 0x1 &&
      _0x1497fe[_0x37e913(0x21e)] == 0x0 &&
      ((_0x2d6ef2 = !![]), (_0x168e0e = -(_0x30c63a / 0x2)));
  _0x2d6ef2
    ? ((_0x1497fe[_0x37e913(0x19e)] = _0x1497fe["x"] + _0x219e21),
      (_0x1497fe[_0x37e913(0x20f)] = _0x1497fe["y"] + _0x168e0e),
      TweenMax["to"](
        _0x1497fe,
        gameData[_0x37e913(0x1b6)][_0x37e913(0x21a)] / 0x2 / 0x3e8,
        {
          x: _0x1497fe["x"] + _0x219e21,
          y: _0x1497fe["y"] + _0x168e0e,
          ease: Linear[_0x37e913(0x2d6)],
          overwrite: !![],
          onComplete: function () {
            var _0x17073c = _0x37e913;
            (_0x1497fe[_0x17073c(0x19e)] =
              gameData[_0x17073c(0x1e4)][_0x2b6622][_0x2603a1]["x"]),
              (_0x1497fe[_0x17073c(0x20f)] =
                gameData[_0x17073c(0x1e4)][_0x2b6622][_0x2603a1]["y"]),
              (_0x1497fe["x"] =
                gameData[_0x17073c(0x1e4)][_0x2b6622][_0x2603a1]["x"] -
                _0x219e21),
              (_0x1497fe["y"] =
                gameData[_0x17073c(0x1e4)][_0x2b6622][_0x2603a1]["y"] -
                _0x168e0e),
              TweenMax["to"](
                _0x1497fe,
                gameData["level"][_0x17073c(0x21a)] / 0x2 / 0x3e8,
                {
                  x: gameData[_0x17073c(0x1e4)][_0x2b6622][_0x2603a1]["x"],
                  y: gameData[_0x17073c(0x1e4)][_0x2b6622][_0x2603a1]["y"],
                  ease: Linear[_0x17073c(0x2d6)],
                  overwrite: !![],
                }
              );
          },
        }
      ))
    : ((_0x1497fe[_0x37e913(0x19e)] =
        gameData[_0x37e913(0x1e4)][_0x2b6622][_0x2603a1]["x"]),
      (_0x1497fe[_0x37e913(0x20f)] =
        gameData[_0x37e913(0x1e4)][_0x2b6622][_0x2603a1]["y"]),
      TweenMax["to"](_0x1497fe, gameData["level"]["speed"] / 0x3e8, {
        x: gameData[_0x37e913(0x1e4)][_0x2b6622][_0x2603a1]["x"],
        y: gameData[_0x37e913(0x1e4)][_0x2b6622][_0x2603a1]["y"],
        ease: Linear["easeNone"],
        overwrite: !![],
      }));
}
function a0_0x2aea() {
  var _0x43b413 = [
    "pressmove",
    "snakeFeed",
    "right",
    "column",
    "buttonArrowR",
    "grid",
    "allPath",
    "#724125",
    "assets/button_cancel.png",
    "assets/snake_brick_00.png",
    "progress",
    "screenControlSide",
    "3lzGAEG",
    "Grid\x20Size",
    "buttonRadio",
    "#E19800",
    "protocol",
    "touch",
    "themeNum",
    "buttonTouchDownPress",
    "assets/button_adventure.png",
    "naturalWidth",
    "onkeyup",
    "buttonSelectTheme",
    "focus",
    "eat",
    "removeAllEventListeners",
    "main",
    "Share\x20your\x20score:",
    "onkeydown",
    "#abcc9a",
    "stagemousemove",
    "keyCode",
    "paused",
    "feedIndex",
    "cursor",
    "itemPop",
    "off",
    "document",
    "mozFullScreenElement",
    "buttonPlus",
    "webkitFullscreenElement",
    "GAME\x20OVER",
    "#556642",
    "#mainHolder",
    "removeAllChildren",
    ".mobileRotate",
    "telegram",
    "nextY",
    "scaleX",
    "wall",
    "visible",
    "mask",
    "40px\x20bpreplaybold",
    "function",
    "test",
    "451521qMuSOz",
    "scaleY",
    "exitMessage",
    "speed",
    "userAgent",
    "facebook",
    "assets/button_confirm.png",
    "row",
    "assets/snake_feed_07.png",
    "4068392kuQnUO",
    "getTime",
    "assets/button_touch_down.png",
    "WALL",
    "volume",
    "assets/snake_feed_05.png",
    "drawRect",
    "&text=",
    "assets/button_radio.png",
    "assets/snake_brick_07.png",
    "sin",
    "buttonArrowU",
    "parent",
    "assets/item_status.png",
    "assets/snake_brick_02.png",
    "soundButton",
    "assets/snake_brick_05.png",
    "assets/button_sound_on.png",
    "setStrokeStyle",
    "top",
    "soundWall2",
    "round",
    "adventureWall",
    "loopSnake",
    "location",
    "#2EA613",
    "image",
    "brick",
    "msFullscreenElement",
    "ADVENTURE",
    "#A2D532",
    "curDirection",
    "buttonConfirm",
    "lastDirection",
    "min",
    "[SCORE]\x20is\x20mine\x20new\x20highscore\x20on\x20Snake\x20Game!\x20Try\x20it\x20now!",
    "tweenScore",
    "assets/snake_score_06.png",
    "addChild",
    "assets/snake_feed_04.png",
    "assets/sounds/sound_wall3.ogg",
    "resultTitle",
    "#rotateHolder",
    "assets/button_touch_up.png",
    "soundBite",
    "assets/background_p.png",
    "EXIT\x20GAME",
    "score",
    "buttonShare",
    "assets/sounds/sound_result.ogg",
    "options",
    "assets/sounds/sound_bite1.ogg",
    "buttonSoundOn",
    "mousedown",
    "nextDir",
    "scale",
    "floor",
    "75px\x20bpreplaybold",
    "https://api.whatsapp.com/send?text=",
    "stroke",
    "scoreData",
    "devicePixelRatio",
    "buttonLinkedin",
    "shareTitle",
    "tablet",
    "localToGlobal",
    "assets/button_fullscreen.png",
    "height",
    "11740njsWAW",
    "9603JHYIGa",
    "classic",
    "settings",
    "https://www.reddit.com/submit?url=",
    "startDate",
    "soundBite2",
    "graphics",
    "substring",
    "buttonAdventure",
    "item",
    "left",
    "defaultVol",
    "regX",
    "update",
    "enableMouseOver",
    "Graphics",
    "assets/button_touch_right.png",
    "assets/sounds/sound_click_2.ogg",
    "directionArr",
    "innerWidth",
    "shareOption",
    "assets/social/button_twitter.png",
    "assets/snake_00.png",
    "push",
    "pY2",
    "assets/item_adventure_pop.png",
    "customScore",
    "Touch",
    "adventureSize",
    "assets/snake_score_03_b.png",
    "addEventListener",
    "buttonFacebook",
    "soundWall3",
    "screenControlScale",
    "[COLUMN]\x20x\x20[ROW]",
    "control",
    "move",
    "assets/sounds/sound_wall2.ogg",
    "assets/sounds/sound_click.ogg",
    "Sprite",
    "To\x20install\x20the\x20game\x20just\x20upload\x20folder\x20\x27game\x27\x20to\x20your\x20server.\x20The\x20game\x20won\x27t\x20run\x20locally\x20with\x20some\x20browser\x20like\x20Chrome\x20due\x20to\x20some\x20security\x20mode.",
    "LoadQueue",
    "assets/snake_score_05.png",
    "isLandscape",
    "#000",
    "https://www.linkedin.com/sharing/share-offsite/?url=",
    "complete",
    "clear",
    "snake",
    "soundResult",
    "innerHeight",
    "atan2",
    "#56558E",
    "assets/snake_feed_02.png",
    "autoClear",
    "linkedin",
    "timingMode",
    "gameCanvas",
    "buttonSave",
    "assets/button_touch_right_press.png",
    "split",
    "design",
    "fileload",
    "killTweensOf",
    "assets/button_minus.png",
    "&url=",
    "alpha",
    "itemStatus",
    "rotation",
    "framerate",
    "removeEventListener",
    "buttonTouch",
    "&title=",
    "screenControlStick",
    "buttonFullscreen",
    "hitArea",
    "type",
    "buttonTouchMove",
    "soundOver",
    "reddit",
    "textBaseline",
    "loadManifest",
    "beginStroke",
    "width",
    "killAll",
    "assets/button_save.png",
    "assets/button_settings.png",
    "assets/sounds/sound_wall1.ogg",
    "endStroke",
    "wallSize",
    "show",
    "#13ff00",
    "idle",
    "bodybend",
    "mouseX",
    "logoP",
    "unshift",
    "assets/snake_07.png",
    "#85A166",
    "#883310",
    "preventDefault",
    "moveControl",
    "alphabetic",
    "getResult",
    "resize",
    "assets/social/button_telegram.png",
    "gotoAndStop",
    "Bitmap",
    "RAF_SYNCHED",
    "mozRequestFullScreen",
    "&thumb=",
    "textAlign",
    "navigator",
    "easeNone",
    "itemNumber",
    "background",
    "snakeBrick",
    "assets/button_plus.png",
    "https://www.facebook.com/sharer/sharer.php?u=",
    "Ticker",
    "webkitRequestFullscreen",
    "buttonTwitter",
    "soundSwing",
    "columnMax",
    "increase",
    "self",
    "removeChild",
    "keydown",
    "gtag",
    "Down",
    "buttonContinue",
    "LVL\x20:\x20[NUMBER]",
    "prepend",
    "center",
    "55px\x20bpreplaybold",
    "<div\x20id=\x22focus\x22\x20style=\x22position:absolute;\x20width:100%;\x20height:100%;\x20z-index:1000;\x22></div",
    "assets/snake_brick_03.png",
    "href",
    "adventureTitle",
    "rowMax",
    "gridSize",
    "currentTarget",
    ":\x20[NUMBER]",
    "font",
    "webkitExitFullscreen",
    "orientationchange",
    "resume",
    "remove",
    "[COLUMN]",
    "columnMin",
    "assets/button_touch_arrow.png",
    "#B2B3F5",
    "down",
    "#notSupportHolder",
    "pressup",
    "style",
    "#mainLoader\x20span",
    "hide",
    "share",
    "#canvasHolder",
    "assets/item_pop.png",
    "buttonWhatsapp",
    "assets/button_classic.png",
    "abs",
    "Highscore\x20on\x20Snake\x20Game\x20is\x20[SCORE]",
    "color",
    "red",
    "7FhcUcK",
    "error",
    "sound",
    "There\x20was\x20an\x20error\x20while\x20trying\x20to\x20resume\x20the\x20SoundJS\x20Web\x20Audio\x20context...",
    "soundBite1",
    "Shape",
    "assets/snake_feed_01.png",
    "length",
    "assets/snake_score_07.png",
    "35px\x20bpreplaybold",
    "assets/button_start.png",
    "#fff",
    "createElement",
    "soundStart",
    "snakeScore",
    "#7b552d",
    "stageX",
    "exitFullscreen",
    "https://t.me/share/url?url=",
    "stagemousedown",
    "rowMin",
    "backgroundP",
    "tick",
    "assets/button_arrow_up.png",
    "buttonTouchRight",
    "%20",
    "twitter",
    "beginFill",
    "775cCFIGe",
    "assets/button_touch_up_press.png",
    "pX2",
    "speedTimes",
    "file",
    "Text",
    "splice",
    "drag",
    "assets/button_select_theme.png",
    "buttonStart",
    "assets/social/button_whatsapp.png",
    "stageY",
    "Container",
    "context",
    "radio",
    "assets/snake_feed_06.png",
    "buttonMinus",
    "buttonSoundOff",
    "indexOf",
    "ALLOW_KEYBOARD_INPUT",
    "#5B4E45",
    "assets/button_arrow_left.png",
    "adventure",
    "buttonTouchArrow",
    "buttonArrowD",
    "sqrt",
    "substr",
    "theme",
    "WebAudioPlugin",
    "assets/button_share.png",
    "assets/button_touch_left.png",
    "stagemouseup",
    "share.jpg",
    "assets/button_exit.png",
    "toUpperCase",
    "sort",
    "pointer",
    "Left",
    "msExitFullscreen",
    "924968hAYebA",
    "game",
    "naturalHeight",
    "click",
    "buttonClassic",
    "exitTitle",
    "regY",
    "replace",
    "soundBrick",
    "scrollTop",
    "stop",
    "result",
    "getContext",
    "src",
    "buttonTelegram",
    "base",
    "touchPressed",
    "getElementById",
    "primary",
    "gameover",
    "target",
    "buttonArrowL",
    "findPath",
    "assets/sounds/sound_brick.ogg",
    "adventureBrick",
    "[SCORE]",
    "requestFullscreen",
    "mp3",
    "assets/snake_feed_03.png",
    "offset",
    "thru",
    "assets/snake_brick_06.png",
    "nextX",
    "soundWall1",
    "buttonTouchLeftPress",
    "Right",
    "SpriteSheet",
    "cos",
    "assets/snake_score_03_a.png",
    "tail",
    "feed",
    "assets/snake_score_00.png",
    "buttonTouchUp",
    "keyboard",
    "soundWall",
    "buttonCancel",
    "assets/button_arrow_down.png",
    "assets/snake_06.png",
    "log",
    "dashedColor",
    "random",
    "dashed",
    "arrow",
    "mouseY",
    "assets/item_number.png",
    "pow",
    "level",
    "toLowerCase",
    "assets/social/button_linkedin.png",
    "msRequestFullscreen",
    "assets/snake_score_03_c.png",
    "css",
    "tongue",
    "logo",
    "Sound",
    "enable",
    "itemAdventurePop",
    "itemPopP",
    "area",
    "#9A6B38",
    "17832WeqQNT",
    "15084UPgTWG",
    "nowDate",
    "buttonSettings",
    "#FFC837",
    "assets/snake_04.png",
    "#mainLoader",
    "buttonTouchPress",
    "[NUMBER]",
    "Are\x20you\x20sure\x20you\x20want\x0ato\x20quit\x20game?",
    "buttonExit",
    "blur",
    "soundButton2",
    "whatsapp",
    "dir",
    "play",
    "disable",
    "brickTimes",
    "49323vSyUpv",
    "mozCancelFullScreen",
    "assets/logo.png",
    "alternateExtensions",
    "undefined",
    "assets/snake_feed_00.png",
    "text",
    "button",
    "documentElement",
  ];
  a0_0x2aea = function () {
    return _0x43b413;
  };
  return a0_0x2aea();
}
function checkScoreNearby() {
  var _0x15bb4a = a0_0x31209c,
    _0x3eefc7 = gameData["snake"][0x0];
  randomBoolean()
    ? _0x3eefc7[_0x15bb4a(0x2cf)](_0x15bb4a(0x2c1))
    : _0x3eefc7[_0x15bb4a(0x2cf)](_0x15bb4a(0x1bc));
  for (
    var _0x6e7d21 = 0x0;
    _0x6e7d21 < gameData[_0x15bb4a(0x24f)][_0x15bb4a(0x313)];
    _0x6e7d21++
  ) {
    var _0x3e62e0 = gameData[_0x15bb4a(0x24f)][_0x6e7d21];
    getDistance(
      _0x3e62e0["x"],
      _0x3e62e0["y"],
      _0x3eefc7["x"],
      _0x3eefc7["y"]
    ) <
      gameSettings[_0x15bb4a(0x2f1)] * 0x3 &&
      _0x3eefc7[_0x15bb4a(0x2cf)](_0x15bb4a(0x1f8));
  }
}
function animateSnakeFeed() {
  var _0x19fd68 = a0_0x31209c,
    _0x52fc1f = new createjs[_0x19fd68(0x2d0)](
      loader[_0x19fd68(0x2cc)]("snakeFeed" + gameData[_0x19fd68(0x1f1)])
    );
  centerReg(_0x52fc1f),
    snakeContainer[_0x19fd68(0x246)](_0x52fc1f),
    gameData["snakeFeed"]["push"](_0x52fc1f);
  var _0x1b6b30 = [],
    _0x40d7ef = null,
    _0x41071c =
      gameData[_0x19fd68(0x295)][_0x19fd68(0x313)] > 0xa
        ? 0xa
        : gameData[_0x19fd68(0x295)][_0x19fd68(0x313)];
  for (var _0x466819 = 0x0; _0x466819 < _0x41071c; _0x466819++) {
    var _0x358b8c = gameData["snake"][_0x466819];
    _0x40d7ef != null &&
    getDistance(
      _0x40d7ef["x"],
      _0x40d7ef["y"],
      _0x358b8c["x"],
      _0x358b8c["y"]
    ) > gameSettings[_0x19fd68(0x2f1)]
      ? (_0x466819 = _0x41071c)
      : _0x1b6b30[_0x19fd68(0x27c)]({ x: _0x358b8c["x"], y: _0x358b8c["y"] }),
      (_0x40d7ef = _0x358b8c);
  }
  (_0x52fc1f["x"] = gameData[_0x19fd68(0x295)][0x0]["x"]),
    (_0x52fc1f["y"] = gameData[_0x19fd68(0x295)][0x0]["y"]),
    _0x1b6b30[_0x19fd68(0x313)] > 0x1
      ? TweenMax["to"](
          _0x52fc1f,
          getDuration(
            _0x1b6b30[_0x19fd68(0x313)] * gameSettings["gridSize"],
            0x3e8
          ),
          {
            bezier: {
              type: _0x19fd68(0x19c),
              values: _0x1b6b30,
              curviness: 0x0,
              autoRotate: !![],
            },
            scaleX: 0.5,
            scaleY: 0.5,
            ease: Linear[_0x19fd68(0x2d6)],
            repeat: 0x0,
            overwrite: !![],
            onComplete: animateSnakeFeedComplete,
          }
        )
      : animateSnakeFeedComplete();
}
function loopSnakeFeed(_0x5e4792) {
  var _0x2015e0 = a0_0x31209c,
    _0x216b61 = [],
    _0x4a32b8 = gameData[_0x2015e0(0x295)][_0x5e4792[_0x2015e0(0x201)]],
    _0x583919 = gameData[_0x2015e0(0x295)][_0x5e4792[_0x2015e0(0x201)] + 0x1];
  _0x5e4792[_0x2015e0(0x201)]++;
  if (
    getDistance(
      _0x4a32b8["x"],
      _0x4a32b8["y"],
      _0x583919["x"],
      _0x583919["y"]
    ) > gameSettings[_0x2015e0(0x2f1)]
  ) {
  } else
    _0x216b61["push"]({ x: _0x4a32b8["x"], y: _0x4a32b8["y"] }),
      _0x216b61[_0x2015e0(0x27c)]({ x: _0x583919["x"], y: _0x583919["y"] });
  _0x216b61["length"] > 0x1
    ? TweenMax["to"](
        _0x5e4792,
        getDuration(gameSettings[_0x2015e0(0x2f1)], 0x3e8),
        {
          bezier: {
            type: _0x2015e0(0x19c),
            values: _0x216b61,
            curviness: 0x0,
            autoRotate: !![],
          },
          ease: Linear["easeNone"],
          repeat: 0x0,
          overwrite: !![],
          onComplete: loopSnakeFeedComplete,
          onCompleteParams: [_0x5e4792],
        }
      )
    : loopSnakeFeedComplete(_0x5e4792);
}
function loopSnakeFeedComplete(_0x5f2be2) {
  var _0x3f5e46 = a0_0x31209c;
  _0x5f2be2[_0x3f5e46(0x201)] < gameData["snake"][_0x3f5e46(0x313)] - 0x3
    ? loopSnakeFeed(_0x5f2be2)
    : animateSnakeFeedComplete();
}
function getDuration(_0x82b3ce, _0xf28e18) {
  var _0x460a37 = _0x82b3ce / _0xf28e18;
  return _0x460a37;
}
function animateSnakeFeedComplete() {
  var _0x33edb3 = a0_0x31209c,
    _0x40260d = gameData[_0x33edb3(0x1e0)][0x0];
  snakeContainer[_0x33edb3(0x2e3)](_0x40260d),
    gameData["snakeFeed"][_0x33edb3(0x32e)](0x0, 0x1);
}
function drawSnakeStroke() {
  var _0x452f1a = a0_0x31209c;
  snakeStroke[_0x452f1a(0x26b)][_0x452f1a(0x294)]();
  if (themesArr[gameData[_0x452f1a(0x1f1)]]["stroke"] == undefined) return;
  var _0x1d1a15 = gameSettings[_0x452f1a(0x2f1)];
  (gameData[_0x452f1a(0x1e5)] = []), (gameData[_0x452f1a(0x194)] = []);
  for (
    var _0x42a5f0 = 0x0;
    _0x42a5f0 < gameData["settings"]["row"];
    _0x42a5f0++
  ) {
    for (
      var _0x1839a7 = 0x0;
      _0x1839a7 < gameData[_0x452f1a(0x267)][_0x452f1a(0x1e2)];
      _0x1839a7++
    ) {
      gameData[_0x452f1a(0x1e4)][_0x42a5f0][_0x1839a7]["alpha"] = 0x1;
    }
  }
  for (
    var _0x451279 = 0x0;
    _0x451279 < gameData[_0x452f1a(0x295)]["length"];
    _0x451279++
  ) {
    var _0xc405fa = gameData["snake"][_0x451279],
      _0xee1afe = _0x451279 == 0x0 ? null : gameData["snake"][_0x451279 - 0x1],
      _0x467406 =
        _0x451279 == gameData[_0x452f1a(0x295)][_0x452f1a(0x313)] - 0x1
          ? null
          : gameData[_0x452f1a(0x295)][_0x451279 + 0x1],
      _0xdd9414 =
        gameData[_0x452f1a(0x1e4)][_0xc405fa[_0x452f1a(0x21e)]][
          _0xc405fa[_0x452f1a(0x1e2)]
        ];
    _0x451279 == 0x0 &&
      (gameData[_0x452f1a(0x194)][_0x452f1a(0x27c)]({
        x: _0xc405fa["x"],
        y: _0xc405fa["y"],
      }),
      checkBackPos(_0x451279, _0x467406[_0x452f1a(0x18d)], _0xc405fa));
    if (_0x451279 != 0x0) {
      if (_0x451279 == gameData["snake"][_0x452f1a(0x313)] - 0x1) {
        checkFrontPos(
          _0x451279,
          _0xee1afe[_0x452f1a(0x18d)],
          _0xc405fa[_0x452f1a(0x18d)]
        ),
          gameData[_0x452f1a(0x194)][_0x452f1a(0x27c)]({
            x: _0xc405fa["base"]["x"],
            y: _0xc405fa["base"]["y"],
          });
        var _0x9482ac = {
          x: _0xc405fa["nextX"],
          y: _0xc405fa[_0x452f1a(0x20f)],
        };
        checkBackPos(_0x451279, _0x9482ac, _0xc405fa["base"]),
          gameData[_0x452f1a(0x194)][_0x452f1a(0x27c)]({
            x: _0xc405fa[_0x452f1a(0x19e)],
            y: _0xc405fa["nextY"],
          }),
          gameData[_0x452f1a(0x194)][_0x452f1a(0x27c)]({
            x: _0xc405fa["x"],
            y: _0xc405fa["y"],
          });
      } else
        checkFrontPos(
          _0x451279,
          _0xee1afe[_0x452f1a(0x18d)],
          _0xc405fa[_0x452f1a(0x18d)]
        ),
          gameData[_0x452f1a(0x194)][_0x452f1a(0x27c)]({
            x: _0xc405fa[_0x452f1a(0x18d)]["x"],
            y: _0xc405fa[_0x452f1a(0x18d)]["y"],
          }),
          checkBackPos(
            _0x451279,
            _0x467406["base"],
            _0xc405fa[_0x452f1a(0x18d)]
          );
    }
  }
  cutNewPath();
  for (
    var _0x451279 = 0x0;
    _0x451279 < gameData["allPath"]["length"];
    _0x451279++
  ) {
    snakeStroke[_0x452f1a(0x26b)]
      [_0x452f1a(0x232)](
        themesArr[gameData[_0x452f1a(0x1f1)]][_0x452f1a(0x25b)][
          _0x452f1a(0x25b)
        ],
        _0x452f1a(0x235),
        _0x452f1a(0x235)
      )
      [_0x452f1a(0x2b7)](
        themesArr[gameData[_0x452f1a(0x1f1)]][_0x452f1a(0x25b)][
          _0x452f1a(0x30a)
        ]
      );
    for (
      var _0x523f6e = 0x0;
      _0x523f6e < gameData["allPath"][_0x451279]["length"];
      _0x523f6e++
    ) {
      snakeStroke[_0x452f1a(0x26b)]["lt"](
        gameData["allPath"][_0x451279][_0x523f6e]["x"],
        gameData[_0x452f1a(0x1e5)][_0x451279][_0x523f6e]["y"]
      );
    }
    snakeStroke["graphics"][_0x452f1a(0x2bd)]();
  }
  if (
    themesArr[gameData["themeNum"]][_0x452f1a(0x25b)][_0x452f1a(0x1b1)] !=
    undefined
  )
    for (
      var _0x451279 = 0x0;
      _0x451279 < gameData[_0x452f1a(0x1e5)][_0x452f1a(0x313)];
      _0x451279++
    ) {
      snakeStroke[_0x452f1a(0x26b)]
        ["setStrokeStyle"](
          themesArr[gameData["themeNum"]][_0x452f1a(0x25b)][_0x452f1a(0x25b)]
        )
        ["setStrokeDash"](
          themesArr[gameData[_0x452f1a(0x1f1)]][_0x452f1a(0x25b)][
            _0x452f1a(0x1b1)
          ],
          0x0
        )
        [_0x452f1a(0x2b7)](
          themesArr[gameData["themeNum"]][_0x452f1a(0x25b)][_0x452f1a(0x1af)]
        );
      for (
        var _0x523f6e = 0x0;
        _0x523f6e < gameData[_0x452f1a(0x1e5)][_0x451279][_0x452f1a(0x313)];
        _0x523f6e++
      ) {
        snakeStroke[_0x452f1a(0x26b)]["lt"](
          gameData["allPath"][_0x451279][_0x523f6e]["x"],
          gameData[_0x452f1a(0x1e5)][_0x451279][_0x523f6e]["y"]
        );
      }
      snakeStroke[_0x452f1a(0x26b)][_0x452f1a(0x2bd)]();
    }
}
function cutNewPath() {
  var _0x17a786 = a0_0x31209c;
  gameData[_0x17a786(0x1e5)][_0x17a786(0x27c)](gameData[_0x17a786(0x194)]),
    (gameData["findPath"] = []);
}
function checkFrontPos(_0x2b6440, _0x1bdff3, _0x3d86ad) {
  var _0x33dc89 = a0_0x31209c,
    _0xf90649 = gameSettings[_0x33dc89(0x2f1)];
  if (
    _0x1bdff3 != null &&
    getDistance(
      _0x1bdff3["x"],
      _0x1bdff3["y"],
      _0x3d86ad["x"],
      _0x3d86ad["y"]
    ) >
      _0xf90649 * 0x2
  ) {
    if (_0x1bdff3["y"] == _0x3d86ad["y"]) {
      if (_0x1bdff3["x"] < _0x3d86ad["x"])
        gameData[_0x33dc89(0x194)][_0x33dc89(0x27c)]({
          x: gameData[_0x33dc89(0x267)][_0x33dc89(0x2b8)] + _0xf90649 / 0x2,
          y: _0x3d86ad["y"],
        });
      else
        _0x1bdff3["x"] > _0x3d86ad["x"] &&
          gameData[_0x33dc89(0x194)][_0x33dc89(0x27c)]({
            x: -(_0xf90649 / 0x2),
            y: _0x3d86ad["y"],
          });
    }
    if (_0x1bdff3["x"] == _0x3d86ad["x"]) {
      if (_0x1bdff3["y"] < _0x3d86ad["y"])
        gameData[_0x33dc89(0x194)][_0x33dc89(0x27c)]({
          x: _0x3d86ad["x"],
          y: gameData[_0x33dc89(0x267)][_0x33dc89(0x263)] + _0xf90649 / 0x2,
        });
      else
        _0x1bdff3["y"] > _0x3d86ad["y"] &&
          gameData[_0x33dc89(0x194)][_0x33dc89(0x27c)]({
            x: _0x3d86ad["x"],
            y: -(_0xf90649 / 0x2),
          });
    }
  }
}
function checkBackPos(_0xe5aec6, _0x432531, _0x593d6c) {
  var _0x149f6d = a0_0x31209c,
    _0x249e7c = gameSettings[_0x149f6d(0x2f1)];
  if (
    _0x432531 != null &&
    getDistance(
      _0x432531["x"],
      _0x432531["y"],
      _0x593d6c["x"],
      _0x593d6c["y"]
    ) >
      _0x249e7c * 0x2
  ) {
    if (_0x432531["y"] == _0x593d6c["y"]) {
      if (_0x432531["x"] > _0x593d6c["x"])
        gameData[_0x149f6d(0x194)][_0x149f6d(0x27c)]({
          x: -(_0x249e7c / 0x2),
          y: _0x593d6c["y"],
        }),
          cutNewPath();
      else
        _0x432531["x"] < _0x593d6c["x"] &&
          (gameData[_0x149f6d(0x194)]["push"]({
            x: gameData[_0x149f6d(0x267)][_0x149f6d(0x2b8)] + _0x249e7c / 0x2,
            y: _0x593d6c["y"],
          }),
          cutNewPath());
    }
    if (_0x432531["x"] == _0x593d6c["x"]) {
      if (_0x432531["y"] > _0x593d6c["y"])
        gameData["findPath"][_0x149f6d(0x27c)]({
          x: _0x593d6c["x"],
          y: -(_0x249e7c / 0x2),
        }),
          cutNewPath();
      else
        _0x432531["y"] < _0x593d6c["y"] &&
          (gameData["findPath"][_0x149f6d(0x27c)]({
            x: _0x593d6c["x"],
            y: gameData[_0x149f6d(0x267)][_0x149f6d(0x263)] + _0x249e7c / 0x2,
          }),
          cutNewPath());
    }
  }
}
function gameControl(_0x5a2de7) {
  var _0x505ea5 = a0_0x31209c;
  if (!gameData[_0x505ea5(0x288)]) return;
  toggleTouchArrow("up", ![]),
    toggleTouchArrow(_0x505ea5(0x2fd), ![]),
    toggleTouchArrow("left", ![]),
    toggleTouchArrow(_0x505ea5(0x1e1), ![]);
  gameData[_0x505ea5(0x2ca)]["left"] && (_0x5a2de7 = _0x505ea5(0x26f));
  gameData[_0x505ea5(0x2ca)]["right"] && (_0x5a2de7 = _0x505ea5(0x1e1));
  gameData["moveControl"]["up"] && (_0x5a2de7 = "up");
  gameData[_0x505ea5(0x2ca)][_0x505ea5(0x2fd)] && (_0x5a2de7 = "down");
  toggleTouchArrow(_0x5a2de7, !![]);
  var _0x3b9449 = "";
  if (gameData["dir"] == "left") _0x3b9449 = "right";
  else {
    if (gameData[_0x505ea5(0x1d2)] == _0x505ea5(0x1e1)) _0x3b9449 = "left";
    else {
      if (gameData[_0x505ea5(0x1d2)] == "up") _0x3b9449 = _0x505ea5(0x2fd);
      else gameData[_0x505ea5(0x1d2)] == "down" && (_0x3b9449 = "up");
    }
  }
  _0x3b9449 != _0x5a2de7 && (gameData[_0x505ea5(0x256)] = _0x5a2de7);
}
function checkControl() {
  var _0x2fc9e1 = a0_0x31209c;
  if (!gameData[_0x2fc9e1(0x288)]) return;
  var _0xf580a1 = "";
  toggleTouchArrow("up", ![]),
    toggleTouchArrow("down", ![]),
    toggleTouchArrow(_0x2fc9e1(0x26f), ![]),
    toggleTouchArrow(_0x2fc9e1(0x1e1), ![]);
  gameData[_0x2fc9e1(0x2ca)][_0x2fc9e1(0x26f)] &&
    (_0xf580a1 = _0x2fc9e1(0x26f));
  gameData[_0x2fc9e1(0x2ca)][_0x2fc9e1(0x1e1)] &&
    (_0xf580a1 = _0x2fc9e1(0x1e1));
  gameData[_0x2fc9e1(0x2ca)]["up"] && (_0xf580a1 = "up");
  gameData[_0x2fc9e1(0x2ca)]["down"] && (_0xf580a1 = _0x2fc9e1(0x2fd));
  if (_0xf580a1 != "") {
    toggleTouchArrow(_0xf580a1, !![]);
    var _0x5dbaa6 = "";
    if (gameData["dir"] == "left") _0x5dbaa6 = _0x2fc9e1(0x1e1);
    else {
      if (gameData[_0x2fc9e1(0x1d2)] == _0x2fc9e1(0x1e1))
        _0x5dbaa6 = _0x2fc9e1(0x26f);
      else {
        if (gameData["dir"] == "up") _0x5dbaa6 = _0x2fc9e1(0x2fd);
        else gameData["dir"] == _0x2fc9e1(0x2fd) && (_0x5dbaa6 = "up");
      }
    }
    _0x5dbaa6 != _0xf580a1 && (gameData[_0x2fc9e1(0x256)] = _0xf580a1);
  }
}
function updateBrickIcon() {
  var _0x4d9784 = a0_0x31209c;
  brickIconContainer[_0x4d9784(0x20c)]();
  var _0x26f3ae = new createjs["Bitmap"](
    loader[_0x4d9784(0x2cc)](_0x4d9784(0x2d9) + gameData["themeNum"])
  );
  centerReg(_0x26f3ae),
    (_0x26f3ae[_0x4d9784(0x210)] = _0x26f3ae[_0x4d9784(0x218)] = 0.8),
    (_0x26f3ae["y"] = -0xa),
    brickIconContainer[_0x4d9784(0x246)](_0x26f3ae);
}
function increaseGameStats() {
  var _0xbd72 = a0_0x31209c;
  playerData["level"]++,
    (playerData[_0xbd72(0x24f)] +=
      gameSettings[_0xbd72(0x1b6)][_0xbd72(0x24f)]),
    gameData[_0xbd72(0x1b6)][_0xbd72(0x32b)]++,
    gameData[_0xbd72(0x1b6)][_0xbd72(0x1d5)]++,
    gameData[_0xbd72(0x1b6)][_0xbd72(0x32b)] >=
      gameSettings["level"][_0xbd72(0x32b)] &&
      ((gameData[_0xbd72(0x1b6)]["speedTimes"] = 0x0),
      (gameData[_0xbd72(0x1b6)][_0xbd72(0x21a)] -=
        gameSettings["level"]["speedIncrease"])),
    gameData[_0xbd72(0x1b6)][_0xbd72(0x1d5)] >=
      gameSettings[_0xbd72(0x1b6)][_0xbd72(0x1d5)] &&
      ((gameData["level"][_0xbd72(0x1d5)] = 0x0),
      playerData[_0xbd72(0x23b)]++,
      insertType("brick")),
    updateGameStats();
}
function updateGameStats() {
  var _0x3d8f58 = a0_0x31209c;
  TweenMax["to"](tweenData, 0.5, {
    tweenScore: playerData[_0x3d8f58(0x24f)],
    overwrite: !![],
    onUpdate: function () {
      var _0x2898be = _0x3d8f58;
      pointTxt[_0x2898be(0x1dc)] = pointShadowTxt[_0x2898be(0x1dc)] =
        textStrings["point"][_0x2898be(0x356)](
          _0x2898be(0x1cc),
          addCommas(Math[_0x2898be(0x258)](tweenData["tweenScore"]))
        );
    },
  }),
    (levelTxt[_0x3d8f58(0x1dc)] = levelShadowTxt["text"] =
      textStrings["level"][_0x3d8f58(0x356)](
        _0x3d8f58(0x1cc),
        playerData[_0x3d8f58(0x1b6)]
      )),
    (brickTxt[_0x3d8f58(0x1dc)] = brickShadowTxt["text"] =
      textStrings[_0x3d8f58(0x23b)][_0x3d8f58(0x356)](
        _0x3d8f58(0x1cc),
        playerData[_0x3d8f58(0x23b)]
      )),
    (brickStatusContainer["visible"] = !![]),
    !gameData["settings"][_0x3d8f58(0x23b)] &&
      (brickStatusContainer[_0x3d8f58(0x212)] = ![]);
}
function showGameStatus(_0xe02a76) {
  var _0x299075 = a0_0x31209c;
  _0xe02a76 == _0x299075(0x191) &&
    (statusTxt[_0x299075(0x1dc)] = textStrings["gameover"]),
    (statusContainer[_0x299075(0x2a7)] = 0x0),
    TweenMax["to"](statusContainer, 0.5, { alpha: 0x1, overwrite: !![] });
}
function updateGame() {
  var _0x3b73e9 = a0_0x31209c;
  if (!gameData[_0x3b73e9(0x200)]) {
    if (gameData["loopSnake"]) {
      gameData["nowDate"] = new Date();
      var _0xc7a40b = Math[_0x3b73e9(0x258)](
        gameData[_0x3b73e9(0x1c6)][_0x3b73e9(0x221)]() -
          gameData[_0x3b73e9(0x269)][_0x3b73e9(0x221)]()
      );
      _0xc7a40b > gameData[_0x3b73e9(0x1b6)][_0x3b73e9(0x21a)] &&
        ((gameData[_0x3b73e9(0x269)] = new Date()), loopSnake());
    }
    drawSnakeStroke(), checkControl();
  }
}
function toggleTouchAlpha(_0x33d69f, _0x38f953) {
  var _0x46aaa9 = a0_0x31209c;
  _0x38f953
    ? (_0x33d69f[_0x46aaa9(0x2a7)] = 0.6)
    : (_0x33d69f[_0x46aaa9(0x2a7)] = 0x1);
}
function a0_0x543e(_0x2a724f, _0x3db0c1) {
  var _0x2aeaf1 = a0_0x2aea();
  return (
    (a0_0x543e = function (_0x543ee3, _0x1c8c99) {
      _0x543ee3 = _0x543ee3 - 0x18b;
      var _0x41f1da = _0x2aeaf1[_0x543ee3];
      return _0x41f1da;
    }),
    a0_0x543e(_0x2a724f, _0x3db0c1)
  );
}
function setupTouchControl() {
  var _0x5d130c = a0_0x31209c;
  touchMoveContainer[_0x5d130c(0x210)] = touchMoveContainer[_0x5d130c(0x218)] =
    gameSettings[_0x5d130c(0x286)];
  var _0x2a5e6d = ["Up", _0x5d130c(0x1a1), "Down", _0x5d130c(0x34d)];
  if (gameSettings["screenControlStick"]) {
    buttonTouchMove[_0x5d130c(0x1f9)]();
    for (
      var _0x2b75ef = 0x0;
      _0x2b75ef < _0x2a5e6d[_0x5d130c(0x313)];
      _0x2b75ef++
    ) {
      ($["touch"][_0x5d130c(0x1b2) + _0x2a5e6d[_0x2b75ef]]["id"] =
        _0x2a5e6d[_0x2b75ef][_0x5d130c(0x1b7)]()),
        $[_0x5d130c(0x1f0)]["arrow" + _0x2a5e6d[_0x2b75ef]][_0x5d130c(0x283)](
          _0x5d130c(0x255),
          function (_0x5eea48) {
            var _0xb9b3d5 = _0x5d130c;
            toggleTouchArrow(_0x5eea48[_0xb9b3d5(0x192)]["id"], !![]),
              (gameData[_0xb9b3d5(0x2ca)][_0x5eea48[_0xb9b3d5(0x192)]["id"]] =
                !![]);
          }
        ),
        $[_0x5d130c(0x1f0)][_0x5d130c(0x1b2) + _0x2a5e6d[_0x2b75ef]][
          _0x5d130c(0x283)
        ](_0x5d130c(0x2ff), function (_0x173825) {
          var _0x115d14 = _0x5d130c;
          toggleTouchArrow(_0x173825["target"]["id"], ![]),
            (gameData["moveControl"][_0x173825[_0x115d14(0x192)]["id"]] = ![]);
        });
    }
    (buttonTouchMove["cursor"] = _0x5d130c(0x34c)),
      buttonTouchMove[_0x5d130c(0x283)]("mousedown", function (_0x534940) {
        var _0x32f1f8 = _0x5d130c;
        toggleMoveEvent(_0x534940, _0x32f1f8(0x32f));
      }),
      buttonTouchMove[_0x5d130c(0x283)](_0x5d130c(0x1df), function (_0x3f33a6) {
        var _0x33de30 = _0x5d130c;
        toggleMoveEvent(_0x3f33a6, _0x33de30(0x289));
      }),
      buttonTouchMove[_0x5d130c(0x283)](_0x5d130c(0x2ff), function (_0xe3d7c9) {
        toggleMoveEvent(_0xe3d7c9, "drop");
      });
  } else {
    gameData[_0x5d130c(0x18e)] = ![];
    for (
      var _0x2b75ef = 0x0;
      _0x2b75ef < _0x2a5e6d[_0x5d130c(0x313)];
      _0x2b75ef++
    ) {
      ($[_0x5d130c(0x1f0)][_0x2a5e6d[_0x2b75ef]]["id"] =
        _0x2a5e6d[_0x2b75ef][_0x5d130c(0x1b7)]()),
        ($[_0x5d130c(0x1f0)][_0x5d130c(0x1b2) + _0x2a5e6d[_0x2b75ef]]["id"] =
          _0x2a5e6d[_0x2b75ef]["toLowerCase"]()),
        $[_0x5d130c(0x1f0)][_0x5d130c(0x1b2) + _0x2a5e6d[_0x2b75ef]][
          _0x5d130c(0x283)
        ](_0x5d130c(0x255), function (_0x98cc05) {
          var _0x4072e8 = _0x5d130c;
          toggleTouchArrow(_0x98cc05[_0x4072e8(0x192)]["id"], !![]),
            (gameData[_0x4072e8(0x2ca)][_0x98cc05[_0x4072e8(0x192)]["id"]] =
              !![]),
            (gameData["touchPressed"] = !![]);
        }),
        $[_0x5d130c(0x1f0)]["arrow" + _0x2a5e6d[_0x2b75ef]][_0x5d130c(0x283)](
          "pressup",
          function (_0x1e9bcf) {
            var _0x3851dc = _0x5d130c;
            toggleTouchArrow(_0x1e9bcf[_0x3851dc(0x192)]["id"], ![]),
              (gameData[_0x3851dc(0x2ca)][_0x1e9bcf[_0x3851dc(0x192)]["id"]] =
                ![]),
              resetControlPressed(),
              (gameData[_0x3851dc(0x18e)] = ![]);
          }
        );
    }
    touchMoveContainer[_0x5d130c(0x283)](
      _0x5d130c(0x1df),
      function (_0x42b2e3) {
        var _0x4632c5 = _0x5d130c;
        if (gameData[_0x4632c5(0x18e)]) {
          var _0x239bc3 = _0x42b2e3["stageX"] - touchMoveContainer["x"],
            _0x325ecd = _0x42b2e3["stageY"] - touchMoveContainer["y"];
          resetControlPressed();
          for (
            var _0x298ad0 = 0x0;
            _0x298ad0 < _0x2a5e6d[_0x4632c5(0x313)];
            _0x298ad0++
          ) {
            var _0x269385 = getDistance(
              $["touch"][_0x4632c5(0x1b2) + _0x2a5e6d[_0x298ad0]]["x"],
              $[_0x4632c5(0x1f0)][_0x4632c5(0x1b2) + _0x2a5e6d[_0x298ad0]]["y"],
              _0x239bc3,
              _0x325ecd
            );
            if (_0x269385 < 0x1e) {
              var _0x1c80b5 = _0x2a5e6d[_0x298ad0][_0x4632c5(0x1b7)]();
              toggleTouchArrow(_0x1c80b5, !![]),
                (gameData[_0x4632c5(0x2ca)][_0x1c80b5] = !![]);
            }
          }
        }
      }
    );
  }
}
function resetControlPressed() {
  var _0x434b79 = a0_0x31209c;
  (gameData[_0x434b79(0x2ca)]["up"] = ![]),
    (gameData[_0x434b79(0x2ca)][_0x434b79(0x26f)] = ![]),
    (gameData[_0x434b79(0x2ca)][_0x434b79(0x1e1)] = ![]),
    (gameData["moveControl"][_0x434b79(0x2fd)] = ![]),
    resetControlUI();
}
function toggleMoveEvent(_0x2423a5, _0x58e370) {
  var _0x1a1f97 = a0_0x31209c;
  switch (_0x58e370) {
    case _0x1a1f97(0x32f):
      var _0x276458 = touchMoveContainer[_0x1a1f97(0x261)](
        _0x2423a5[_0x1a1f97(0x2f2)]["x"],
        _0x2423a5[_0x1a1f97(0x2f2)]["y"]
      );
      _0x2423a5[_0x1a1f97(0x2f2)][_0x1a1f97(0x19b)] = {
        x: (_0x276458["x"] - _0x2423a5[_0x1a1f97(0x31c)]) / dpr,
        y: (_0x276458["y"] - _0x2423a5[_0x1a1f97(0x333)]) / dpr,
      };
      break;
    case "move":
      var _0x44cd7a = touchMoveContainer["globalToLocal"](
          _0x2423a5[_0x1a1f97(0x31c)],
          _0x2423a5[_0x1a1f97(0x333)]
        ),
        _0x5ebf6c =
          _0x44cd7a["x"] + _0x2423a5["currentTarget"][_0x1a1f97(0x19b)]["x"],
        _0x5def1f =
          _0x44cd7a["y"] + _0x2423a5[_0x1a1f97(0x2f2)][_0x1a1f97(0x19b)]["y"],
        _0x253ff1 = dragLimit(_0x5ebf6c, _0x5def1f);
      (_0x2423a5[_0x1a1f97(0x2f2)]["x"] = _0x253ff1["x"]),
        (_0x2423a5[_0x1a1f97(0x2f2)]["y"] = _0x253ff1["y"]);
      var _0x3cd294 = 0xa;
      (gameData[_0x1a1f97(0x2ca)]["up"] = ![]),
        (gameData[_0x1a1f97(0x2ca)]["left"] = ![]),
        (gameData[_0x1a1f97(0x2ca)]["right"] = ![]),
        (gameData[_0x1a1f97(0x2ca)][_0x1a1f97(0x2fd)] = ![]),
        toggleTouchArrow(_0x1a1f97(0x26f), ![]),
        toggleTouchArrow(_0x1a1f97(0x1e1), ![]),
        toggleTouchArrow("up", ![]),
        toggleTouchArrow("down", ![]);
      _0x2423a5["currentTarget"]["x"] <= -_0x3cd294 &&
        ((gameData[_0x1a1f97(0x2ca)][_0x1a1f97(0x26f)] = !![]),
        toggleTouchArrow("left", !![]));
      _0x2423a5[_0x1a1f97(0x2f2)]["x"] >= _0x3cd294 &&
        ((gameData[_0x1a1f97(0x2ca)][_0x1a1f97(0x1e1)] = !![]),
        toggleTouchArrow("right", !![]));
      _0x2423a5[_0x1a1f97(0x2f2)]["y"] <= -_0x3cd294 &&
        ((gameData["moveControl"]["up"] = !![]), toggleTouchArrow("up", !![]));
      _0x2423a5[_0x1a1f97(0x2f2)]["y"] >= _0x3cd294 &&
        ((gameData["moveControl"][_0x1a1f97(0x2fd)] = !![]),
        toggleTouchArrow(_0x1a1f97(0x2fd), !![]));
      break;
    case "drop":
      (gameData["moveControl"]["up"] = ![]),
        (gameData[_0x1a1f97(0x2ca)]["left"] = ![]),
        (gameData["moveControl"][_0x1a1f97(0x1e1)] = ![]),
        (gameData[_0x1a1f97(0x2ca)][_0x1a1f97(0x2fd)] = ![]),
        resetControlUI();
      break;
  }
}
function dragLimit(_0x57ea5d, _0x5c68fe) {
  var _0x49f9e0 = a0_0x31209c,
    _0x204257 = 0x14,
    _0x319928 = dragDistance([_0x57ea5d, _0x5c68fe], [0x0, 0x0]);
  if (_0x319928 <= _0x204257) return { x: _0x57ea5d, y: _0x5c68fe };
  else {
    (_0x57ea5d = _0x57ea5d - 0x0), (_0x5c68fe = _0x5c68fe - 0x0);
    var _0x46671b = Math[_0x49f9e0(0x298)](_0x5c68fe, _0x57ea5d);
    return {
      x: Math["cos"](_0x46671b) * _0x204257 + 0x0,
      y: Math[_0x49f9e0(0x22a)](_0x46671b) * _0x204257 + 0x0,
    };
  }
}
function dragDistance(_0x2aebb2, _0x43bcbd) {
  var _0x15ffe9 = a0_0x31209c,
    _0x3049c7 = _0x2aebb2[0x0],
    _0x27d12b = _0x2aebb2[0x1],
    _0x48f15f = _0x43bcbd[0x0],
    _0x13cc42 = _0x43bcbd[0x1];
  return Math[_0x15ffe9(0x341)](
    Math[_0x15ffe9(0x1b5)](_0x3049c7 - _0x48f15f, 0x2) +
      Math[_0x15ffe9(0x1b5)](_0x27d12b - _0x13cc42, 0x2)
  );
}
function resetControlUI() {
  var _0x39b691 = a0_0x31209c;
  toggleTouchArrow("up", ![]),
    toggleTouchArrow(_0x39b691(0x2fd), ![]),
    toggleTouchArrow(_0x39b691(0x26f), ![]),
    toggleTouchArrow(_0x39b691(0x1e1), ![]);
  if (gameSettings[_0x39b691(0x2ae)])
    buttonTouchMove["x"] = buttonTouchMove["y"] = 0x0;
}
function toggleTouchArrow(_0x527b6a, _0x318229) {
  var _0x26170a = a0_0x31209c;
  (_0x527b6a = capitalizeFirstLetter(_0x527b6a)),
    _0x527b6a &&
      (!_0x318229
        ? (($[_0x26170a(0x1f0)][_0x527b6a]["visible"] = ![]),
          ($[_0x26170a(0x1f0)][_0x26170a(0x1b2) + _0x527b6a]["visible"] = !![]))
        : (($["touch"][_0x527b6a][_0x26170a(0x212)] = !![]),
          ($["touch"][_0x26170a(0x1b2) + _0x527b6a]["visible"] = ![])));
}
function capitalizeFirstLetter(_0x120a2a) {
  var _0x6ae8c5 = a0_0x31209c;
  return _0x120a2a["charAt"](0x0)[_0x6ae8c5(0x34a)]() + _0x120a2a["slice"](0x1);
}
function setupSwipeControl() {
  var _0x423964 = a0_0x31209c;
  stage[_0x423964(0x283)](_0x423964(0x31f), handleMouseDown),
    stage[_0x423964(0x283)](_0x423964(0x347), handleMouseUp);
}
function handleMouseDown(_0x497c2b) {
  var _0x49711e = a0_0x31209c;
  if (!_0x497c2b["primary"]) return;
  (gestureData[_0x49711e(0x23f)] = -0x1),
    (gestureData[_0x49711e(0x241)] = -0x1),
    (gestureData["pX"] = gestureData[_0x49711e(0x32a)] =
      stage[_0x49711e(0x2c3)]),
    (gestureData["pY"] = gestureData[_0x49711e(0x27d)] =
      stage[_0x49711e(0x1b3)]),
    (gestureData[_0x49711e(0x277)] = []),
    stage["addEventListener"](_0x49711e(0x1fe), handleMouseMove);
}
function handleMouseMove(_0x5ab73b) {
  var _0x1ff1bf = a0_0x31209c;
  if (!_0x5ab73b[_0x1ff1bf(0x190)]) return;
  var _0x3fd5f7 = gestureData["pX"] - stage[_0x1ff1bf(0x2c3)],
    _0x4994be = gestureData["pY"] - stage["mouseY"],
    _0x402ad6 = _0x3fd5f7 * _0x3fd5f7 + _0x4994be * _0x4994be;
  if (_0x402ad6 > 0x190) {
    var _0x47d975 = Math[_0x1ff1bf(0x298)](_0x4994be, _0x3fd5f7) * 57.2957795,
      _0x3a6005,
      _0x36131b;
    _0x47d975 >= 0x16 * -0x1 &&
      _0x47d975 < 0x17 &&
      ((_0x3a6005 = 0x0), (_0x36131b = _0x1ff1bf(0x26f))),
      _0x47d975 >= 0x44 &&
        _0x47d975 < 0x71 &&
        ((_0x3a6005 = Math["PI"] / 0x2), (_0x36131b = "up")),
      (_0x47d975 >= 0x9e || _0x47d975 < 0x9d * -0x1) &&
        ((_0x3a6005 = Math["PI"]), (_0x36131b = "right")),
      _0x47d975 >= 0x70 * -0x1 &&
        _0x47d975 < 0x43 * -0x1 &&
        ((_0x3a6005 = -Math["PI"] / 0x2), (_0x36131b = _0x1ff1bf(0x2fd))),
      (gestureData[_0x1ff1bf(0x32a)] -=
        Math["sqrt"](_0x402ad6) * Math[_0x1ff1bf(0x1a3)](_0x3a6005)),
      (gestureData[_0x1ff1bf(0x27d)] -=
        Math["sqrt"](_0x402ad6) * Math[_0x1ff1bf(0x22a)](_0x3a6005)),
      _0x3a6005 != gestureData[_0x1ff1bf(0x241)]
        ? (gestureData[_0x1ff1bf(0x241)] = _0x3a6005)
        : gestureData[_0x1ff1bf(0x23f)] != gestureData[_0x1ff1bf(0x241)] &&
          (gestureData[_0x1ff1bf(0x277)]["push"](_0x36131b),
          (gestureData[_0x1ff1bf(0x23f)] = gestureData[_0x1ff1bf(0x241)])),
      (gestureData["pX"] = stage[_0x1ff1bf(0x2c3)]),
      (gestureData["pY"] = stage["mouseY"]);
  }
}
function handleMouseUp(_0x2b844c) {
  var _0x5e344b = a0_0x31209c;
  if (!_0x2b844c[_0x5e344b(0x190)]) return;
  stage[_0x5e344b(0x2ab)]("stagemousemove", handleMouseMove);
  if (gestureData[_0x5e344b(0x277)]["length"] > 0x0) {
    var _0x3a93ca = gestureData[_0x5e344b(0x277)][0x0];
    if (curPage == "game") {
      (gameData[_0x5e344b(0x2ca)]["up"] = ![]),
        (gameData[_0x5e344b(0x2ca)][_0x5e344b(0x2fd)] = ![]),
        (gameData["moveControl"]["left"] = ![]),
        (gameData[_0x5e344b(0x2ca)][_0x5e344b(0x1e1)] = ![]);
      if (_0x3a93ca == "up") gameData[_0x5e344b(0x2ca)]["up"] = !![];
      else {
        if (_0x3a93ca == _0x5e344b(0x2fd))
          gameData["moveControl"][_0x5e344b(0x2fd)] = !![];
        else {
          if (_0x3a93ca == "left")
            gameData[_0x5e344b(0x2ca)][_0x5e344b(0x26f)] = !![];
          else
            _0x3a93ca == "right" &&
              (gameData[_0x5e344b(0x2ca)][_0x5e344b(0x1e1)] = !![]);
        }
      }
    }
  }
}
function endGame() {
  var _0x98e435 = a0_0x31209c;
  (gameData[_0x98e435(0x200)] = !![]),
    playSound(_0x98e435(0x2b3)),
    toggleLoopSnake(![]),
    resetControlUI(),
    showGameStatus(_0x98e435(0x191)),
    TweenMax["to"](gameContainer, 0x3, {
      overwrite: !![],
      onComplete: function () {
        var _0x1e7585 = _0x98e435;
        goPage(_0x1e7585(0x35a));
      },
    });
}
function millisecondsToTimeGame(_0x3a1a66) {
  var _0x37e105 = a0_0x31209c,
    _0x43dbd2 = _0x3a1a66 % 0x3e8,
    _0xa3bd7e = Math["floor"]((_0x3a1a66 / 0x3e8) % 0x3c),
    _0x3ddb38 = Math[_0x37e105(0x258)]((_0x3a1a66 / (0x3c * 0x3e8)) % 0x3c);
  return (
    _0xa3bd7e < 0xa && (_0xa3bd7e = "0" + _0xa3bd7e),
    _0x3ddb38 < 0xa && (_0x3ddb38 = "0" + _0x3ddb38),
    _0x3ddb38 + ":" + _0xa3bd7e
  );
}
function toggleOptions(_0x5eed5d) {
  var _0x238ae6 = a0_0x31209c;
  optionsContainer[_0x238ae6(0x212)]
    ? (optionsContainer[_0x238ae6(0x212)] = ![])
    : (optionsContainer[_0x238ae6(0x212)] = !![]),
    _0x5eed5d != undefined && (optionsContainer[_0x238ae6(0x212)] = _0x5eed5d);
}
function toggleSoundMute(_0x3276b8) {
  var _0x3ec372 = a0_0x31209c;
  (buttonSoundOff[_0x3ec372(0x212)] = ![]),
    (buttonSoundOn["visible"] = ![]),
    toggleSoundInMute(_0x3276b8),
    _0x3276b8
      ? (buttonSoundOn[_0x3ec372(0x212)] = !![])
      : (buttonSoundOff[_0x3ec372(0x212)] = !![]);
}
function toggleMusicMute(_0x4e3368) {
  var _0x4ac963 = a0_0x31209c;
  (buttonMusicOff[_0x4ac963(0x212)] = ![]),
    (buttonMusicOn[_0x4ac963(0x212)] = ![]),
    toggleMusicInMute(_0x4e3368),
    _0x4e3368
      ? (buttonMusicOn[_0x4ac963(0x212)] = !![])
      : (buttonMusicOff[_0x4ac963(0x212)] = !![]);
}
function toggleFullScreen() {
  var _0x5c0745 = a0_0x31209c;
  if (
    !document["fullscreenElement"] &&
    !document[_0x5c0745(0x206)] &&
    !document[_0x5c0745(0x208)] &&
    !document[_0x5c0745(0x23c)]
  ) {
    if (document["documentElement"]["requestFullscreen"])
      document["documentElement"][_0x5c0745(0x198)]();
    else {
      if (document["documentElement"][_0x5c0745(0x1b9)])
        document["documentElement"][_0x5c0745(0x1b9)]();
      else {
        if (document["documentElement"][_0x5c0745(0x2d2)])
          document[_0x5c0745(0x1de)][_0x5c0745(0x2d2)]();
        else
          document["documentElement"][_0x5c0745(0x2dd)] &&
            document[_0x5c0745(0x1de)][_0x5c0745(0x2dd)](
              Element[_0x5c0745(0x33b)]
            );
      }
    }
  } else {
    if (document["exitFullscreen"]) document[_0x5c0745(0x31d)]();
    else {
      if (document[_0x5c0745(0x34e)]) document[_0x5c0745(0x34e)]();
      else {
        if (document[_0x5c0745(0x1d7)]) document[_0x5c0745(0x1d7)]();
        else document[_0x5c0745(0x2f5)] && document[_0x5c0745(0x2f5)]();
      }
    }
  }
}
function shareLinks(_0x15307e, _0x2d0568) {
  var _0x418a48 = a0_0x31209c;
  shareSettings[_0x418a48(0x2e5)] &&
    gtag("event", _0x418a48(0x352), {
      event_category: _0x418a48(0x303),
      event_label: _0x15307e,
    });
  var _0x50e38f = location[_0x418a48(0x2ee)];
  _0x50e38f = encodeURIComponent(
    _0x50e38f[_0x418a48(0x26c)](0x0, _0x50e38f["lastIndexOf"]("/") + 0x1)
  );
  var _0x17dfdd = shareSettings[_0x418a48(0x25f)][_0x418a48(0x356)](
      _0x418a48(0x197),
      _0x2d0568
    ),
    _0x85aa31 = shareSettings["shareText"]["replace"](
      _0x418a48(0x197),
      _0x2d0568
    ),
    _0x2acdbf = "";
  if (_0x15307e == _0x418a48(0x21c))
    shareSettings[_0x418a48(0x27f)]
      ? (_0x2acdbf =
          "https://www.facebook.com/sharer/sharer.php?u=" +
          encodeURIComponent(
            _0x50e38f +
              "share.php?title=" +
              _0x17dfdd +
              _0x418a48(0x2a6) +
              _0x50e38f +
              _0x418a48(0x2d3) +
              _0x50e38f +
              _0x418a48(0x348)
          ))
      : (_0x2acdbf = _0x418a48(0x2db) + _0x50e38f);
  else {
    if (_0x15307e == _0x418a48(0x326))
      _0x2acdbf =
        "https://twitter.com/intent/tweet?text=" +
        _0x85aa31 +
        _0x418a48(0x2a6) +
        _0x50e38f;
    else {
      if (_0x15307e == _0x418a48(0x1d1))
        _0x2acdbf = _0x418a48(0x25a) + _0x85aa31 + _0x418a48(0x325) + _0x50e38f;
      else {
        if (_0x15307e == _0x418a48(0x20e))
          _0x2acdbf =
            _0x418a48(0x31e) + _0x50e38f + _0x418a48(0x227) + _0x85aa31;
        else {
          if (_0x15307e == _0x418a48(0x2b4))
            _0x2acdbf =
              _0x418a48(0x268) + _0x50e38f + _0x418a48(0x2ad) + _0x85aa31;
          else
            _0x15307e == _0x418a48(0x29c) &&
              (_0x2acdbf = _0x418a48(0x292) + _0x50e38f);
        }
      }
    }
  }
  window["open"](_0x2acdbf);
}
var stageWidth,
  stageHeight = 0x0,
  isLoaded = ![];
$(function () {
  var _0x2def91 = a0_0x31209c,
    _0x2a7f6a = function () {
      var _0x2b150b = a0_0x543e;
      try {
        createjs[_0x2b150b(0x344)][_0x2b150b(0x335)]["state"] === "suspended" &&
          (createjs[_0x2b150b(0x344)][_0x2b150b(0x335)][_0x2b150b(0x2f7)](),
          window[_0x2b150b(0x2ab)](_0x2b150b(0x352), _0x2a7f6a));
      } catch (_0x5c5107) {
        console[_0x2b150b(0x30d)](_0x2b150b(0x30f)),
          console[_0x2b150b(0x30d)](_0x5c5107);
      }
    };
  window[_0x2def91(0x283)](_0x2def91(0x352), _0x2a7f6a),
    window[_0x2def91(0x238)][_0x2def91(0x1ef)][_0x2def91(0x342)](0x0, 0x4) ===
      _0x2def91(0x32c) && alert(_0x2def91(0x28d)),
    $(window)[_0x2def91(0x2cd)](function () {
      resizeLoaderFunc();
    }),
    resizeLoaderFunc(),
    checkBrowser();
});
function resizeLoaderFunc() {
  var _0x5e7272 = a0_0x31209c;
  (stageWidth = $(window)[_0x5e7272(0x2b8)]()),
    (stageHeight = $(window)[_0x5e7272(0x263)]()),
    $("#mainLoader")[_0x5e7272(0x1bb)](
      _0x5e7272(0x26f),
      checkContentWidth($(_0x5e7272(0x1ca)))
    ),
    $(_0x5e7272(0x1ca))[_0x5e7272(0x1bb)](
      _0x5e7272(0x233),
      checkContentHeight($("#mainLoader"))
    ),
    $(_0x5e7272(0x2fe))["css"]("left", checkContentWidth($(_0x5e7272(0x1ca)))),
    $(_0x5e7272(0x2fe))[_0x5e7272(0x1bb)](
      _0x5e7272(0x233),
      checkContentHeight($(_0x5e7272(0x1ca)))
    );
}
var browserSupport = ![],
  isMobile,
  isTablet,
  isDesktop;
function checkBrowser() {
  var _0x501594 = a0_0x31209c;
  if (typeof MobileDetect === _0x501594(0x215)) {
    var _0x57a2af = new MobileDetect(
      window[_0x501594(0x2d5)][_0x501594(0x21b)]
    );
    (isMobile = _0x57a2af["mobile"]()),
      (isTablet = _0x57a2af[_0x501594(0x260)]()),
      isMobile == null && isTablet == null && (isDesktop = !![]);
  }
  var _0x5d6ea9 = document[_0x501594(0x318)]("canvas");
  _0x5d6ea9[_0x501594(0x35b)] && (browserSupport = !![]),
    browserSupport
      ? !isLoaded && ((isLoaded = !![]), initPreload())
      : $(_0x501594(0x2fe))[_0x501594(0x2bf)]();
}
function initPreload() {
  var _0x4bdc17 = a0_0x31209c;
  toggleLoader(!![]),
    checkMobileEvent(),
    $(window)[_0x4bdc17(0x2cd)](function () {
      clearTimeout(resizeTimer),
        (resizeTimer = setTimeout(checkMobileOrientation, 0x3e8));
    }),
    resizeGameFunc(),
    (loader = new createjs[_0x4bdc17(0x28e)](![])),
    (manifest = [
      { src: "assets/background.png", id: _0x4bdc17(0x2d8) },
      { src: _0x4bdc17(0x24d), id: _0x4bdc17(0x321) },
      { src: _0x4bdc17(0x1d8), id: _0x4bdc17(0x1bd) },
      { src: "assets/logo_p.png", id: _0x4bdc17(0x2c4) },
      { src: _0x4bdc17(0x307), id: _0x4bdc17(0x353) },
      { src: _0x4bdc17(0x1f3), id: "buttonAdventure" },
      { src: _0x4bdc17(0x316), id: _0x4bdc17(0x331) },
      { src: _0x4bdc17(0x330), id: _0x4bdc17(0x1f6) },
      { src: _0x4bdc17(0x228), id: _0x4bdc17(0x1ed) },
      { src: _0x4bdc17(0x33d), id: "buttonArrowL" },
      { src: "assets/button_arrow_right.png", id: _0x4bdc17(0x1e3) },
      { src: _0x4bdc17(0x323), id: _0x4bdc17(0x22b) },
      { src: _0x4bdc17(0x1ac), id: _0x4bdc17(0x340) },
      { src: _0x4bdc17(0x2da), id: _0x4bdc17(0x207) },
      { src: _0x4bdc17(0x2a5), id: _0x4bdc17(0x338) },
      { src: _0x4bdc17(0x1b4), id: _0x4bdc17(0x2d7) },
      { src: _0x4bdc17(0x22d), id: "itemStatus" },
      { src: _0x4bdc17(0x27e), id: _0x4bdc17(0x1c0) },
      { src: "assets/button_touch.png", id: _0x4bdc17(0x2ac) },
      { src: "assets/button_touch_move.png", id: "buttonTouchMove" },
      { src: _0x4bdc17(0x2fb), id: "buttonTouchArrow" },
      { src: "assets/button_touch_press.png", id: "buttonTouchPress" },
      { src: _0x4bdc17(0x24b), id: _0x4bdc17(0x1a8) },
      { src: _0x4bdc17(0x222), id: "buttonTouchDown" },
      { src: _0x4bdc17(0x346), id: "buttonTouchLeft" },
      { src: _0x4bdc17(0x275), id: _0x4bdc17(0x324) },
      { src: _0x4bdc17(0x329), id: "buttonTouchUpPress" },
      { src: "assets/button_touch_down_press.png", id: _0x4bdc17(0x1f2) },
      { src: "assets/button_touch_left_press.png", id: _0x4bdc17(0x1a0) },
      { src: _0x4bdc17(0x2a0), id: "buttonTouchRightPress" },
      { src: _0x4bdc17(0x345), id: _0x4bdc17(0x250) },
      { src: _0x4bdc17(0x2ba), id: _0x4bdc17(0x29f) },
      { src: "assets/social/button_facebook.png", id: _0x4bdc17(0x284) },
      { src: _0x4bdc17(0x27a), id: _0x4bdc17(0x2de) },
      { src: _0x4bdc17(0x332), id: _0x4bdc17(0x306) },
      { src: _0x4bdc17(0x2ce), id: _0x4bdc17(0x18c) },
      { src: "assets/social/button_reddit.png", id: "buttonReddit" },
      { src: _0x4bdc17(0x1b8), id: _0x4bdc17(0x25e) },
      { src: "assets/button_continue.png", id: _0x4bdc17(0x2e7) },
      { src: _0x4bdc17(0x305), id: _0x4bdc17(0x203) },
      { src: "assets/item_pop_p.png", id: "itemPopP" },
      { src: _0x4bdc17(0x21d), id: _0x4bdc17(0x240) },
      { src: _0x4bdc17(0x1e7), id: _0x4bdc17(0x1ab) },
      { src: _0x4bdc17(0x262), id: _0x4bdc17(0x2af) },
      { src: _0x4bdc17(0x231), id: _0x4bdc17(0x254) },
      { src: "assets/button_sound_off.png", id: "buttonSoundOff" },
      { src: _0x4bdc17(0x349), id: _0x4bdc17(0x1ce) },
      { src: _0x4bdc17(0x2bb), id: _0x4bdc17(0x1c7) },
    ]);
  for (
    var _0x1b9f98 = 0x0;
    _0x1b9f98 < themesArr[_0x4bdc17(0x313)];
    _0x1b9f98++
  ) {
    manifest["push"]({
      src: themesArr[_0x1b9f98][_0x4bdc17(0x18b)],
      id: "snake" + _0x1b9f98,
    }),
      manifest[_0x4bdc17(0x27c)]({
        src: themesArr[_0x1b9f98][_0x4bdc17(0x1a6)],
        id: _0x4bdc17(0x1e0) + _0x1b9f98,
      }),
      manifest[_0x4bdc17(0x27c)]({
        src: themesArr[_0x1b9f98]["brick"],
        id: _0x4bdc17(0x2d9) + _0x1b9f98,
      });
    for (
      var _0x355e50 = 0x0;
      _0x355e50 < themesArr[_0x1b9f98][_0x4bdc17(0x24f)][_0x4bdc17(0x313)];
      _0x355e50++
    ) {
      manifest["push"]({
        src: themesArr[_0x1b9f98][_0x4bdc17(0x24f)][_0x355e50],
        id: _0x4bdc17(0x31a) + _0x355e50 + "_" + _0x1b9f98,
      });
    }
  }
  typeof addScoreboardAssets == "function" && addScoreboardAssets(),
    (audioOn = !![]),
    !isDesktop
      ? !enableMobileAudio && (audioOn = ![])
      : !enableDesktopAudio && (audioOn = ![]),
    audioOn &&
      (manifest["push"]({ src: _0x4bdc17(0x28b), id: _0x4bdc17(0x22f) }),
      manifest[_0x4bdc17(0x27c)]({
        src: _0x4bdc17(0x276),
        id: _0x4bdc17(0x1d0),
      }),
      manifest[_0x4bdc17(0x27c)]({
        src: "assets/sounds/sound_over.ogg",
        id: "soundOver",
      }),
      manifest[_0x4bdc17(0x27c)]({
        src: _0x4bdc17(0x251),
        id: _0x4bdc17(0x296),
      }),
      manifest[_0x4bdc17(0x27c)]({
        src: _0x4bdc17(0x253),
        id: _0x4bdc17(0x310),
      }),
      manifest["push"]({
        src: "assets/sounds/sound_bite2.ogg",
        id: _0x4bdc17(0x26a),
      }),
      manifest["push"]({
        src: "assets/sounds/sound_swing.ogg",
        id: _0x4bdc17(0x2df),
      }),
      manifest[_0x4bdc17(0x27c)]({
        src: _0x4bdc17(0x2bc),
        id: _0x4bdc17(0x19f),
      }),
      manifest[_0x4bdc17(0x27c)]({
        src: _0x4bdc17(0x28a),
        id: _0x4bdc17(0x234),
      }),
      manifest[_0x4bdc17(0x27c)]({
        src: _0x4bdc17(0x248),
        id: _0x4bdc17(0x285),
      }),
      manifest[_0x4bdc17(0x27c)]({ src: _0x4bdc17(0x195), id: "soundBrick" }),
      (createjs[_0x4bdc17(0x1be)][_0x4bdc17(0x1d9)] = [_0x4bdc17(0x199)]),
      loader["installPlugin"](createjs["Sound"])),
    loader[_0x4bdc17(0x283)](_0x4bdc17(0x293), handleComplete),
    loader["addEventListener"](_0x4bdc17(0x2a3), fileComplete),
    loader[_0x4bdc17(0x283)](_0x4bdc17(0x30d), handleFileError),
    loader["on"](_0x4bdc17(0x1e9), handleProgress, this),
    loader[_0x4bdc17(0x2b6)](manifest);
}
function fileComplete(_0x15255f) {
  var _0x42090e = a0_0x31209c,
    _0x2d4af8 = _0x15255f[_0x42090e(0x26e)];
}
function handleFileError(_0x2ba66d) {
  var _0xe5d129 = a0_0x31209c;
  console[_0xe5d129(0x1ae)]("error\x20", _0x2ba66d);
}
function handleProgress() {
  var _0x37db19 = a0_0x31209c;
  $(_0x37db19(0x301))["html"](
    Math[_0x37db19(0x235)]((loader[_0x37db19(0x1e9)] / 0x1) * 0x64) + "%"
  );
}
function handleComplete() {
  toggleLoader(![]), initMain();
}
function toggleLoader(_0x7d7643) {
  var _0x3cd319 = a0_0x31209c;
  _0x7d7643
    ? $(_0x3cd319(0x1ca))[_0x3cd319(0x2bf)]()
    : $(_0x3cd319(0x1ca))[_0x3cd319(0x302)]();
}
var stageW = 0x500,
  stageH = 0x300,
  contentW = 0x400,
  contentH = 0x240;
const viewport = { isLandscape: !![] },
  landscapeSize = { w: stageW, h: stageH, cW: contentW, cH: contentH },
  portraitSize = { w: 0x300, h: 0x400, cW: 0x240, cH: 0x384 };
function initMain() {
  var _0x15e51e = a0_0x31209c;
  isDesktop && $(_0x15e51e(0x304))["show"](),
    initGameCanvas(stageW, stageH),
    buildGameCanvas(),
    buildGameButton(),
    typeof buildScoreBoardCanvas == _0x15e51e(0x215) && buildScoreBoardCanvas(),
    goPage(_0x15e51e(0x1fa)),
    checkMobileOrientation(),
    resizeCanvas();
}
var windowW = (windowH = 0x0),
  scalePercent = 0x0;
const dpr = window[a0_0x31209c(0x25d)] || 0x1,
  offset = { x: 0x0, y: 0x0, left: 0x0, top: 0x0 };
function resizeGameFunc() {
  setTimeout(function () {
    var _0x263fd7 = a0_0x543e;
    $(_0x263fd7(0x20d))[_0x263fd7(0x1bb)](
      _0x263fd7(0x26f),
      checkContentWidth($(".mobileRotate"))
    ),
      $(_0x263fd7(0x20d))["css"](
        _0x263fd7(0x233),
        checkContentHeight($(".mobileRotate"))
      ),
      (windowW = window[_0x263fd7(0x278)]),
      (windowH = window[_0x263fd7(0x297)]),
      (scalePercent = Math[_0x263fd7(0x242)](
        windowW / contentW,
        windowH / contentH
      )),
      (scalePercent = scalePercent > 0x1 ? 0x1 : scalePercent);
    windowW > stageW &&
      windowH > stageH &&
      windowW > stageW &&
      ((scalePercent = windowW / stageW),
      stageH * scalePercent > windowH && (scalePercent = windowH / stageH));
    const _0x5449d7 = stageW * scalePercent,
      _0xc7979 = stageH * scalePercent;
    (offset[_0x263fd7(0x26f)] = 0x0), (offset[_0x263fd7(0x233)] = 0x0);
    _0x5449d7 > windowW
      ? (offset["left"] = -(_0x5449d7 - windowW))
      : (offset[_0x263fd7(0x26f)] = windowW - _0x5449d7);
    _0xc7979 > windowH
      ? (offset["top"] = -(_0xc7979 - windowH))
      : (offset[_0x263fd7(0x233)] = windowH - _0xc7979);
    (offset["x"] = 0x0), (offset["y"] = 0x0);
    offset[_0x263fd7(0x26f)] < 0x0 &&
      (offset["x"] = Math["abs"](
        offset[_0x263fd7(0x26f)] / scalePercent / 0x2
      ));
    offset[_0x263fd7(0x233)] < 0x0 &&
      (offset["y"] = Math[_0x263fd7(0x308)](
        offset["top"] / scalePercent / 0x2
      ));
    const _0x340d73 = document[_0x263fd7(0x18f)]("gameCanvas"),
      _0x5bb137 = _0x340d73[_0x263fd7(0x35b)]("2d");
    (_0x340d73[_0x263fd7(0x300)][_0x263fd7(0x2b8)] = _0x5449d7 + "px"),
      (_0x340d73[_0x263fd7(0x300)]["height"] = _0xc7979 + "px"),
      (_0x340d73[_0x263fd7(0x300)][_0x263fd7(0x26f)] =
        offset["left"] / 0x2 + "px"),
      (_0x340d73["style"][_0x263fd7(0x233)] =
        offset[_0x263fd7(0x233)] / 0x2 + "px"),
      (_0x340d73[_0x263fd7(0x2b8)] = stageW * dpr),
      (_0x340d73[_0x263fd7(0x263)] = stageH * dpr),
      $(window)[_0x263fd7(0x358)](0x0),
      resizeCanvas(),
      typeof resizeScore == _0x263fd7(0x215) && resizeScore();
  }, 0x64);
}
var resizeTimer;
function checkMobileEvent() {
  var _0x2ac608 = a0_0x31209c;
  !isDesktop &&
    ($(window)
      [_0x2ac608(0x204)](_0x2ac608(0x2f6))
      ["on"](_0x2ac608(0x2f6), function (_0x1644e2) {
        var _0x21b98b = _0x2ac608;
        $(_0x21b98b(0x304))[_0x21b98b(0x302)](),
          $(_0x21b98b(0x24a))[_0x21b98b(0x302)](),
          clearTimeout(resizeTimer),
          (resizeTimer = setTimeout(checkMobileOrientation, 0x3e8));
      }),
    checkMobileOrientation());
}
function checkMobileOrientation() {
  var _0x21ea99 = a0_0x31209c,
    _0x58d5e9 = ![];
  window["innerWidth"] > window[_0x21ea99(0x297)] && (_0x58d5e9 = !![]),
    (viewport[_0x21ea99(0x290)] = _0x58d5e9),
    changeViewport(viewport["isLandscape"]),
    resizeGameFunc(),
    $("#canvasHolder")[_0x21ea99(0x2bf)]();
}
function toggleRotate(_0x370279) {
  var _0x3c7666 = a0_0x31209c;
  _0x370279
    ? $(_0x3c7666(0x24a))["fadeIn"]()
    : $(_0x3c7666(0x24a))["fadeOut"](),
    resizeGameFunc();
}
function checkContentHeight(_0x4edc04) {
  var _0x20129a = a0_0x31209c,
    _0x328fd1 = $(window)[_0x20129a(0x263)](),
    _0x44d2ff = _0x328fd1 / 0x2 - _0x4edc04[_0x20129a(0x263)]() / 0x2;
  return _0x44d2ff;
}
function checkContentWidth(_0x2112f5) {
  var _0x3ec625 = $(window)["width"](),
    _0x2b045c = _0x3ec625 / 0x2 - _0x2112f5["width"]() / 0x2;
  return _0x2b045c;
}
function shuffle(_0x114089) {
  var _0x3b63c5 = a0_0x31209c,
    _0x2af5c6 = _0x114089[_0x3b63c5(0x313)],
    _0x4b3955,
    _0x1d70da;
  while (0x0 !== _0x2af5c6) {
    (_0x1d70da = Math[_0x3b63c5(0x258)](Math[_0x3b63c5(0x1b0)]() * _0x2af5c6)),
      (_0x2af5c6 -= 0x1),
      (_0x4b3955 = _0x114089[_0x2af5c6]),
      (_0x114089[_0x2af5c6] = _0x114089[_0x1d70da]),
      (_0x114089[_0x1d70da] = _0x4b3955);
  }
  return _0x114089;
}
function randomBoolean() {
  return Math["random"]() < 0.5;
}
function getDistance(_0x4fd613, _0x2d5938, _0x5e3079, _0x5822e8) {
  var _0x1d8baf = a0_0x31209c,
    _0x9d7c98 = Math[_0x1d8baf(0x341)](
      Math["pow"](_0x4fd613 - _0x5e3079, 0x2) +
        Math[_0x1d8baf(0x1b5)](_0x2d5938 - _0x5822e8, 0x2)
    );
  return _0x9d7c98;
}
function sortOnObject(_0x3eba6e, _0x3fdcd8, _0x97b06c) {
  var _0x51bfe0 = a0_0x31209c;
  return (
    _0x97b06c
      ? _0x3eba6e[_0x51bfe0(0x34b)](function (_0x320e99, _0x45bfe7) {
          var _0x10a232 = _0x320e99[_0x3fdcd8],
            _0x22cd3b = _0x45bfe7[_0x3fdcd8];
          if (_0x10a232 == _0x22cd3b) return 0x0;
          return _0x10a232 < _0x22cd3b ? 0x1 : -0x1;
        })
      : _0x3eba6e[_0x51bfe0(0x34b)](function (_0x52b33a, _0x298108) {
          var _0x3c5354 = _0x52b33a[_0x3fdcd8],
            _0x55254b = _0x298108[_0x3fdcd8];
          if (_0x3c5354 == _0x55254b) return 0x0;
          return _0x3c5354 > _0x55254b ? 0x1 : -0x1;
        }),
    _0x3eba6e
  );
}
function randomIntFromInterval(_0x3168ca, _0x3f64ac) {
  var _0x14b3c2 = a0_0x31209c;
  return Math["floor"](
    Math[_0x14b3c2(0x1b0)]() * (_0x3f64ac - _0x3168ca + 0x1) + _0x3168ca
  );
}
function addCommas(_0x5e99ab) {
  var _0x53d320 = a0_0x31209c;
  (_0x5e99ab += ""),
    (x = _0x5e99ab[_0x53d320(0x2a1)](".")),
    (x1 = x[0x0]),
    (x2 = x[_0x53d320(0x313)] > 0x1 ? "." + x[0x1] : "");
  var _0x160445 = /(\d+)(\d{3})/;
  while (_0x160445[_0x53d320(0x216)](x1)) {
    x1 = x1[_0x53d320(0x356)](_0x160445, "$1" + "," + "$2");
  }
  return x1 + x2;
}
function swapArray(_0x4a28d2, _0x200e4d, _0x3084a2) {
  var _0x4315ae = _0x4a28d2[_0x200e4d];
  (_0x4a28d2[_0x200e4d] = _0x4a28d2[_0x3084a2]),
    (_0x4a28d2[_0x3084a2] = _0x4315ae);
}
function getCenterPosition(_0x3d0d54, _0x101d7c, _0x5384ae, _0xe84464) {
  var _0x5a881b = { x: 0x0, y: 0x0 };
  return (
    (_0x5a881b["x"] = (_0x3d0d54 + _0x5384ae) / 0x2),
    (_0x5a881b["y"] = (_0x101d7c + _0xe84464) / 0x2),
    _0x5a881b
  );
}
const enableDesktopAudio = !![],
  enableMobileAudio = !![],
  muteSoundOn = ![],
  muteMusicOn = ![];
var audioOn,
  soundMute = ![],
  musicMute = ![];
$["sound"] = {};
var soundID = 0x0,
  soundPushArr = [],
  soundLoopPushArr = [],
  musicPushArr = [];
function playSound(_0x273631, _0x10ed69) {
  var _0x312845 = a0_0x31209c;
  if (audioOn) {
    var _0x4fe69a = soundID;
    soundPushArr[_0x312845(0x27c)](_0x4fe69a), soundID++;
    var _0x22e63c = _0x10ed69 == undefined ? 0x1 : _0x10ed69;
    ($[_0x312845(0x30e)][_0x4fe69a] =
      createjs[_0x312845(0x1be)][_0x312845(0x1d3)](_0x273631)),
      ($[_0x312845(0x30e)][_0x4fe69a][_0x312845(0x270)] = _0x22e63c),
      setSoundVolume(_0x4fe69a),
      $["sound"][_0x4fe69a][_0x312845(0x1f9)](),
      $[_0x312845(0x30e)][_0x4fe69a][_0x312845(0x283)](
        _0x312845(0x293),
        function () {
          var _0x14e0b9 = _0x312845,
            _0x340870 = soundPushArr[_0x14e0b9(0x33a)](_0x4fe69a);
          _0x340870 != -0x1 && soundPushArr[_0x14e0b9(0x32e)](_0x340870, 0x1);
        }
      );
  }
}
function playSoundLoop(_0x3c631d) {
  var _0x3329b3 = a0_0x31209c;
  audioOn &&
    $[_0x3329b3(0x30e)][_0x3c631d] == null &&
    (soundLoopPushArr[_0x3329b3(0x27c)](_0x3c631d),
    ($[_0x3329b3(0x30e)][_0x3c631d] =
      createjs[_0x3329b3(0x1be)]["play"](_0x3c631d)),
    ($[_0x3329b3(0x30e)][_0x3c631d]["defaultVol"] = 0x1),
    setSoundLoopVolume(_0x3c631d),
    $["sound"][_0x3c631d][_0x3329b3(0x1f9)](),
    $[_0x3329b3(0x30e)][_0x3c631d]["addEventListener"](
      _0x3329b3(0x293),
      function () {
        var _0xc9c932 = _0x3329b3;
        $[_0xc9c932(0x30e)][_0x3c631d][_0xc9c932(0x1d3)]();
      }
    ));
}
function toggleSoundLoop(_0x1080c3, _0x246ed9) {
  var _0x28f544 = a0_0x31209c;
  audioOn &&
    $[_0x28f544(0x30e)][_0x1080c3] != null &&
    (_0x246ed9
      ? $[_0x28f544(0x30e)][_0x1080c3]["play"]()
      : ($["sound"][_0x1080c3][_0x28f544(0x200)] = !![]));
}
function stopSoundLoop(_0x49b379) {
  var _0x1502ab = a0_0x31209c;
  if (audioOn) {
    if ($["sound"][_0x49b379] != null) {
      $[_0x1502ab(0x30e)][_0x49b379][_0x1502ab(0x359)](),
        ($["sound"][_0x49b379] = null);
      var _0x5bcca1 = soundLoopPushArr[_0x1502ab(0x33a)](_0x49b379);
      _0x5bcca1 != -0x1 && soundLoopPushArr[_0x1502ab(0x32e)](_0x5bcca1, 0x1);
    }
  }
}
function playMusicLoop(_0x9a4c52) {
  var _0x6550 = a0_0x31209c;
  audioOn &&
    $[_0x6550(0x30e)][_0x9a4c52] == null &&
    (musicPushArr[_0x6550(0x27c)](_0x9a4c52),
    ($[_0x6550(0x30e)][_0x9a4c52] =
      createjs["Sound"][_0x6550(0x1d3)](_0x9a4c52)),
    ($[_0x6550(0x30e)][_0x9a4c52][_0x6550(0x270)] = 0x1),
    setMusicVolume(_0x9a4c52),
    $[_0x6550(0x30e)][_0x9a4c52]["removeAllEventListeners"](),
    $[_0x6550(0x30e)][_0x9a4c52][_0x6550(0x283)]("complete", function () {
      var _0x44642b = _0x6550;
      $[_0x44642b(0x30e)][_0x9a4c52][_0x44642b(0x1d3)]();
    }));
}
function toggleMusicLoop(_0x5a87db, _0x26cdb7) {
  var _0x25cbd5 = a0_0x31209c;
  audioOn &&
    $[_0x25cbd5(0x30e)][_0x5a87db] != null &&
    (_0x26cdb7
      ? $[_0x25cbd5(0x30e)][_0x5a87db]["play"]()
      : ($[_0x25cbd5(0x30e)][_0x5a87db][_0x25cbd5(0x200)] = !![]));
}
function stopMusicLoop(_0x1d61a2) {
  var _0x138922 = a0_0x31209c;
  if (audioOn) {
    if ($[_0x138922(0x30e)][_0x1d61a2] != null) {
      $["sound"][_0x1d61a2]["stop"](), ($["sound"][_0x1d61a2] = null);
      var _0xa5f2df = musicPushArr[_0x138922(0x33a)](_0x1d61a2);
      _0xa5f2df != -0x1 && musicPushArr["splice"](_0xa5f2df, 0x1);
    }
  }
}
function stopSound() {
  var _0x18a36d = a0_0x31209c;
  createjs[_0x18a36d(0x1be)][_0x18a36d(0x359)]();
}
function toggleSoundInMute(_0x21e2e8) {
  var _0x1e53dd = a0_0x31209c;
  if (audioOn) {
    soundMute = _0x21e2e8;
    for (
      var _0xf8431e = 0x0;
      _0xf8431e < soundPushArr[_0x1e53dd(0x313)];
      _0xf8431e++
    ) {
      setSoundVolume(soundPushArr[_0xf8431e]);
    }
    for (
      var _0xf8431e = 0x0;
      _0xf8431e < soundLoopPushArr[_0x1e53dd(0x313)];
      _0xf8431e++
    ) {
      setSoundLoopVolume(soundLoopPushArr[_0xf8431e]);
    }
  }
}
function toggleMusicInMute(_0x5eb9e5) {
  if (audioOn) {
    musicMute = _0x5eb9e5;
    for (var _0x4a76af = 0x0; _0x4a76af < musicPushArr["length"]; _0x4a76af++) {
      setMusicVolume(musicPushArr[_0x4a76af]);
    }
  }
}
function setSoundVolume(_0xeb4d24, _0x152ac6) {
  var _0x45e15f = a0_0x31209c;
  if (audioOn) {
    var _0x184cbe = soundPushArr[_0x45e15f(0x33a)](_0xeb4d24);
    if (_0x184cbe != -0x1) {
      var _0x33343a =
          _0x152ac6 == undefined
            ? $[_0x45e15f(0x30e)][soundPushArr[_0x184cbe]]["defaultVol"]
            : _0x152ac6,
        _0x3f8049 = soundMute == ![] ? _0x33343a : 0x0;
      ($[_0x45e15f(0x30e)][soundPushArr[_0x184cbe]]["volume"] = _0x3f8049),
        ($[_0x45e15f(0x30e)][soundPushArr[_0x184cbe]][_0x45e15f(0x270)] =
          _0x33343a);
    }
  }
}
function setSoundLoopVolume(_0x1c2454, _0x5650ac) {
  var _0x16d9a5 = a0_0x31209c;
  if (audioOn) {
    var _0x4503d9 = soundLoopPushArr[_0x16d9a5(0x33a)](_0x1c2454);
    if (_0x4503d9 != -0x1) {
      var _0xef7e54 =
          _0x5650ac == undefined
            ? $["sound"][soundLoopPushArr[_0x4503d9]][_0x16d9a5(0x270)]
            : _0x5650ac,
        _0x15c595 = soundMute == ![] ? _0xef7e54 : 0x0;
      ($["sound"][soundLoopPushArr[_0x4503d9]][_0x16d9a5(0x224)] = _0x15c595),
        ($[_0x16d9a5(0x30e)][soundLoopPushArr[_0x4503d9]][_0x16d9a5(0x270)] =
          _0xef7e54);
    }
  }
}
function setMusicVolume(_0x40a7f8, _0x541033) {
  var _0x4be052 = a0_0x31209c;
  if (audioOn) {
    var _0x3dfb26 = musicPushArr[_0x4be052(0x33a)](_0x40a7f8);
    if (_0x3dfb26 != -0x1) {
      var _0x5d4b3e =
          _0x541033 == undefined
            ? $[_0x4be052(0x30e)][musicPushArr[_0x3dfb26]][_0x4be052(0x270)]
            : _0x541033,
        _0x55ae11 = musicMute == ![] ? _0x5d4b3e : 0x0;
      ($[_0x4be052(0x30e)][musicPushArr[_0x3dfb26]]["volume"] = _0x55ae11),
        ($["sound"][musicPushArr[_0x3dfb26]]["defaultVol"] = _0x5d4b3e);
    }
  }
}
