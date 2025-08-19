const _0x1ae268 = _0x182b;
(function(_0x4a0f31, _0x3f3965) {
    const _0x342605 = _0x182b,
        _0x435aa5 = _0x4a0f31();
    while (!![]) {
        try {
            const _0x29da13 = -parseInt(_0x342605(0x21f)) / 0x1 + parseInt(_0x342605(0x219)) / 0x2 + parseInt(_0x342605(0x1d5)) / 0x3 + parseInt(_0x342605(0x1fa)) / 0x4 + -parseInt(_0x342605(0x1ce)) / 0x5 * (-parseInt(_0x342605(0x1cb)) / 0x6) + parseInt(_0x342605(0x1d2)) / 0x7 + -parseInt(_0x342605(0x215)) / 0x8;
            if (_0x29da13 === _0x3f3965) break;
            else _0x435aa5['push'](_0x435aa5['shift']());
        } catch (_0x1d54d0) {
            _0x435aa5['push'](_0x435aa5['shift']());
        }
    }
}(_0x405b, 0x9cbc3));

function _0x182b(_0x4b28b4, _0x6bd733) {
    const _0x405b12 = _0x405b();
    return _0x182b = function(_0x182b47, _0x492932) {
        _0x182b47 = _0x182b47 - 0x1c5;
        let _0xf393f1 = _0x405b12[_0x182b47];
        return _0xf393f1;
    }, _0x182b(_0x4b28b4, _0x6bd733);
}
let phaser_game, files_preloaded = !0x1,
    game = null,
    landscape = 'landscape' == loading_vars[_0x1ae268(0x1dc)],
    is_localhost = '127.0.0.1' == location['hostname'] || _0x1ae268(0x1ca) == location[_0x1ae268(0x229)] || 'localhost' == loading_vars[_0x1ae268(0x204)],
    // allow_rewarded_ads = !0x1,
    // allow_intersitial_ads = !0x1,
    temp_user_data = null,
    paused = !0x1;
window['onload'] = function() {
    const _0x100719 = _0x1ae268;
    initialize(function() {
        const _0x4530ee = _0x182b;
        let _0x5de876 = get_game_config();
        game_request = new GameRequest(), game_request[_0x4530ee(0x1dd)]({
            'get_game_info': !0x0
        }, function(_0x183880) {
            const _0x3b6708 = _0x4530ee;
            _0x3b6708(0x226) in _0x183880 && (temp_user_data = _0x183880[_0x3b6708(0x226)]), _0x5de876[_0x3b6708(0x1e9)] = mainGame, phaser_game = new Phaser['Game'](_0x5de876), window[_0x3b6708(0x228)]();
        });
    });
    let _0x16de6b = document[_0x100719(0x1f8)]('preload');
    _0x16de6b && (_0x16de6b['style'][_0x100719(0x1c6)] = 'none');
};
class mainGame extends Phaser[_0x1ae268(0x1cf)] {
    constructor() {
        const _0xee5fa0 = _0x1ae268;
        super(_0xee5fa0(0x22b));
    }[_0x1ae268(0x20c)]() {
        const _0x5b2b6b = _0x1ae268;
        this[_0x5b2b6b(0x1c8)][_0x5b2b6b(0x209)]('complete', this[_0x5b2b6b(0x1cc)], this);
    }[_0x1ae268(0x1cc)]() {
        const _0x373929 = _0x1ae268;
        this['load'][_0x373929(0x207)]('common1', _0x373929(0x1d1), _0x373929(0x1ff)), this['load'][_0x373929(0x1f2)](_0x373929(0x213), _0x373929(0x217)), this[_0x373929(0x1c8)][_0x373929(0x1d3)](_0x373929(0x20d), _0x373929(0x1fd), !0x0), loading_vars[_0x373929(0x1f5)] ? this[_0x373929(0x1c8)][_0x373929(0x225)]('all', _0x373929(0x1d9)) : (this[_0x373929(0x1c8)]['script'](_0x373929(0x205), _0x373929(0x1de)), this[_0x373929(0x1c8)][_0x373929(0x225)]('social_api', _0x373929(0x202)), this['load'][_0x373929(0x225)](_0x373929(0x1fe), _0x373929(0x1c5)), this[_0x373929(0x1c8)]['script'](_0x373929(0x20b), 'js/game_utilities/custom_button.js'), this['load'][_0x373929(0x225)]('audio_manager', _0x373929(0x206)), this[_0x373929(0x1c8)]['script'](_0x373929(0x1e4), _0x373929(0x1eb)), this[_0x373929(0x1c8)][_0x373929(0x225)](_0x373929(0x212), 'js/game_utilities/graphics_manager.js'), this[_0x373929(0x1c8)][_0x373929(0x225)](_0x373929(0x1e5), 'js/game_utilities/test_ad_manager.js'), this[_0x373929(0x1c8)][_0x373929(0x225)](_0x373929(0x210), 'js/game_map/game_map.js'), this[_0x373929(0x1c8)][_0x373929(0x225)](_0x373929(0x1d0), 'js/game_play/game_play.js'), this['load'][_0x373929(0x225)](_0x373929(0x1ea), _0x373929(0x1df)), this[_0x373929(0x1c8)][_0x373929(0x225)]('game_windows', _0x373929(0x1d8)), this[_0x373929(0x1c8)][_0x373929(0x225)](_0x373929(0x20e), 'js/game_windows/select_language.js'), this[_0x373929(0x1c8)]['script']('remove_ads', _0x373929(0x21c)), this[_0x373929(0x1c8)][_0x373929(0x225)](_0x373929(0x1da), _0x373929(0x1e8)), this[_0x373929(0x1c8)][_0x373929(0x225)](_0x373929(0x1d4), _0x373929(0x1e2)), this[_0x373929(0x1c8)][_0x373929(0x225)]('level_failed', 'js/game_windows/level_failed.js'), this[_0x373929(0x1c8)][_0x373929(0x225)](_0x373929(0x1f7), _0x373929(0x1cd)), this['load'][_0x373929(0x225)](_0x373929(0x208), _0x373929(0x21e))), this['load'][_0x373929(0x218)]('language_xml', _0x373929(0x21d)), this[_0x373929(0x1c8)]['on'](_0x373929(0x1db), _0x5761a1 => {
            const _0x3ec5c8 = _0x373929;
            0x64 == Math[_0x3ec5c8(0x223)](0x64 * _0x5761a1) && this[_0x3ec5c8(0x1c8)][_0x3ec5c8(0x200)]('progress');
        }), this[_0x373929(0x1c8)][_0x373929(0x209)](_0x373929(0x20f), () => {
            const _0x15d872 = _0x373929;
            files_preloaded = !0x0, this[_0x15d872(0x1f0)]();
        }), this[_0x373929(0x1c8)]['start']();
    }[_0x1ae268(0x1f0)]() {
        const _0x3af6ce = _0x1ae268;
        game_data['scene'] = this, temp_user_data && (update_object(game_data[_0x3af6ce(0x226)], temp_user_data), temp_user_data = null), game = new Game(this), game[_0x3af6ce(0x1f4)]();
    }[_0x1ae268(0x201)](_0x5ca162, _0x440059) {
        const _0x3cdca0 = _0x1ae268;
        game && game[_0x3cdca0(0x201)](_0x5ca162, _0x440059);
    }
}

function update_object(_0x49b8e7, _0xc04f6e) {
    for (let _0x75f39c in _0xc04f6e) _0x49b8e7[_0x75f39c] = _0xc04f6e[_0x75f39c];
}

function initialize(_0xa359e6) {
    // ✅ Always disable ads
    allow_rewarded_ads = false;
    allow_intersitial_ads = false;

    // ✅ Set user ID to a dummy value
    loading_vars.user_id = '0';

    // ✅ Proceed with game initialization
    _0xa359e6();
}



function get_game_config() {
    const _0x53f477 = _0x1ae268;
    loading_vars[_0x53f477(0x22a)] = parseInt(loading_vars['W']), loading_vars['default_H'] = parseInt(loading_vars['H']), loading_vars[_0x53f477(0x1ec)] = 0x0, loading_vars[_0x53f477(0x20a)] = 0x0;
    let _0x4a1e0d = loading_vars['W'] / loading_vars['H'],
        _0x84659d = parseInt(loading_vars['W']),
        _0x18e7e3 = parseInt(loading_vars['H']),
        _0x443be4 = window['innerWidth'] / window[_0x53f477(0x1f9)];
    loading_vars[_0x53f477(0x1f3)] && window[_0x53f477(0x227)] < window[_0x53f477(0x1f9)] && (_0x443be4 = window[_0x53f477(0x1f9)] / window[_0x53f477(0x227)]), is_localhost || loading_vars[_0x53f477(0x1f3)] || (_0x443be4 = _0x4a1e0d), is_localhost && (_0x443be4 = _0x4a1e0d), _0x443be4 > 2.2 && (_0x443be4 = 2.2), loading_vars['W'] < loading_vars['H'] * _0x443be4 && (loading_vars['W'] = parseInt(loading_vars['H'] * _0x443be4), loading_vars[_0x53f477(0x1ec)] = loading_vars['W'] - _0x84659d, loading_vars[_0x53f477(0x20a)] = loading_vars['H'] - _0x18e7e3);
    let _0x4f9c5b = loading_vars[_0x53f477(0x1f3)],
        _0x328838 = {
            'type': Phaser['WEBGL'],
            'parent': _0x53f477(0x211),
            'width': loading_vars['W'],
            'height': loading_vars['H'],
            'backgroundColor': 0x0,
            'clearBeforeRender': !loading_vars[_0x53f477(0x1f3)],
            'render': {
                'powerPreference': 'high-performance'
            }
        };
    return _0x4f9c5b ? _0x328838['scale'] = {
        'mode': Phaser[_0x53f477(0x21b)][_0x53f477(0x1e0)],
        'autoCenter': Phaser['Scale'][_0x53f477(0x1e3)]
    } : (_0x328838[_0x53f477(0x221)] = {
        'autoCenter': Phaser[_0x53f477(0x21b)][_0x53f477(0x1e3)]
    }, _0x328838[_0x53f477(0x221)][_0x53f477(0x1ef)] = Phaser[_0x53f477(0x21b)][_0x53f477(0x1e0)], _0x328838['fullscreenTarget'] = _0x53f477(0x211)), _0x328838[_0x53f477(0x21a)] = {
        'default': 'arcade',
        'arcade': {
            'gravity': {
                'y': 0x0
            }
        }
    }, _0x328838;
}

function pause() {
    const _0x4dde7b = _0x1ae268;
    game_data[_0x4dde7b(0x1d6)] = 0x0, game_data[_0x4dde7b(0x1e7)] && game_data[_0x4dde7b(0x1e7)][_0x4dde7b(0x203)](), game_data['game_root'] && game_data[_0x4dde7b(0x1c7)][_0x4dde7b(0x1e6)](), paused = !0x0, game_data['scene'] && (game_data['scene'][_0x4dde7b(0x1c9)][_0x4dde7b(0x216)]['enabled'] = !0x1), game_data && game_data[_0x4dde7b(0x1d0)] && game_data[_0x4dde7b(0x1d0)][_0x4dde7b(0x220)](), console[_0x4dde7b(0x1f1)](_0x4dde7b(0x1ed));
}

function resume() {
    const _0x5ae612 = _0x1ae268;
    game_data[_0x5ae612(0x1d6)] = 0x1, game_data[_0x5ae612(0x1e7)] && game_data[_0x5ae612(0x1e7)][_0x5ae612(0x203)](), game_data[_0x5ae612(0x1c7)] && game_data[_0x5ae612(0x1c7)]['unblock_interface'](), paused = !0x1, game_data[_0x5ae612(0x1e9)] && (game_data[_0x5ae612(0x1e9)][_0x5ae612(0x1c9)][_0x5ae612(0x216)][_0x5ae612(0x1d7)] = !0x0), !game_data || !game_data[_0x5ae612(0x1d0)] || game_data[_0x5ae612(0x1fc)] && game_data['game_windows'][_0x5ae612(0x222)] || game_data[_0x5ae612(0x1d0)][_0x5ae612(0x1fb)](), console['log'](_0x5ae612(0x224));
}

function _0x405b() {
    const _0x151d89 = ['update_volume', 'net_id', 'main_game', 'js/game_utilities/audio_manager.js', 'atlas', 'options', 'once', 'extra_H', 'custom_button', 'preload', 'rexcircularprogressplugin', 'select_language', 'complete', 'game_map', 'phaser_game', 'graphics_manager', 'main_logo', 'catch', '23848512AGWYHw', 'input', './assets/main_logo.png', 'xml', '1834384ATztCx', 'physics', 'Scale', 'js/game_windows/remove_ads.js', 'assets/xml/language.xml', 'js/game_windows/options.js', '415486ktFbgK', 'pause_timer', 'scale', 'game_window', 'round', 'resume', 'script', 'user_data', 'innerWidth', 'focus', 'hostname', 'default_W', 'MainGame', 'js/game_utilities/game_utils.js', 'display', 'game_root', 'load', 'game', 'localhost', '28590QOtgZE', 'preload_files', 'js/game_windows/level_finished.js', '435MtaLOB', 'Scene', 'game_play', 'assets/common1.png', '8640135AKVeJc', 'plugin', 'purchase_failed', '1440129Jphfxz', 'unpaused', 'enabled', 'js/game_windows/game_windows.js', 'bundle.js', 'purchase_success', 'progress', 'orientation', 'request', 'js/game.js', 'js/shop/shop.js', 'FIT', 'then', 'js/game_windows/purchase_failed.js', 'CENTER_HORIZONTALLY', 'loading_overlay', 'test_ad_manager', 'block_interface', 'audio_manager', 'js/game_windows/purchase_success.js', 'scene', 'shop', 'js/game_utilities/loading_overlay.js', 'extra_W', 'pause', 'startGame', 'mode', 'create_game', 'log', 'image', 'mobile', 'prepare_game', 'js_combined', 'user_id', 'level_finished', 'getElementById', 'innerHeight', '3969768FfUwlo', 'resume_timer', 'game_windows', './external/circular_plugin.js', 'game_utils', 'assets/common1.json', 'off', 'update', 'js/game_utilities/social_api.js'];
    _0x405b = function() {
        return _0x151d89;
    };
    return _0x405b();
}