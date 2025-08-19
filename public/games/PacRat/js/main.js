(function() {
    'use strict';

    var document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};
    var isCommonjs = typeof module !== 'undefined' && module.exports;

    var fn = (function() {
        var val;

        var fnMap = [
            [
                'requestFullscreen',
                'exitFullscreen',
                'fullscreenElement',
                'fullscreenEnabled',
                'fullscreenchange',
                'fullscreenerror'
            ],
            // New WebKit
            [
                'webkitRequestFullscreen',
                'webkitExitFullscreen',
                'webkitFullscreenElement',
                'webkitFullscreenEnabled',
                'webkitfullscreenchange',
                'webkitfullscreenerror'

            ],
            // Old WebKit
            [
                'webkitRequestFullScreen',
                'webkitCancelFullScreen',
                'webkitCurrentFullScreenElement',
                'webkitCancelFullScreen',
                'webkitfullscreenchange',
                'webkitfullscreenerror'

            ],
            [
                'mozRequestFullScreen',
                'mozCancelFullScreen',
                'mozFullScreenElement',
                'mozFullScreenEnabled',
                'mozfullscreenchange',
                'mozfullscreenerror'
            ],
            [
                'msRequestFullscreen',
                'msExitFullscreen',
                'msFullscreenElement',
                'msFullscreenEnabled',
                'MSFullscreenChange',
                'MSFullscreenError'
            ]
        ];

        var i = 0;
        var l = fnMap.length;
        var ret = {};

        for (; i < l; i++) {
            val = fnMap[i];
            if (val && val[1] in document) {
                for (i = 0; i < val.length; i++) {
                    ret[fnMap[0][i]] = val[i];
                }
                return ret;
            }
        }

        return false;
    })();

    var eventNameMap = {
        change: fn.fullscreenchange,
        error: fn.fullscreenerror
    };

    var screenfull = {
        request: function(element) {
            return new Promise(function(resolve, reject) {
                var onFullScreenEntered = function() {
                    this.off('change', onFullScreenEntered);
                    resolve();
                }.bind(this);

                this.on('change', onFullScreenEntered);

                element = element || document.documentElement;

                Promise.resolve(element[fn.requestFullscreen]()).catch(reject);
            }.bind(this));
        },
        exit: function() {
            return new Promise(function(resolve, reject) {
                if (!this.isFullscreen) {
                    resolve();
                    return;
                }

                var onFullScreenExit = function() {
                    this.off('change', onFullScreenExit);
                    resolve();
                }.bind(this);

                this.on('change', onFullScreenExit);

                Promise.resolve(document[fn.exitFullscreen]()).catch(reject);
            }.bind(this));
        },
        toggle: function(element) {
            return this.isFullscreen ? this.exit() : this.request(element);
        },
        onchange: function(callback) {
            this.on('change', callback);
        },
        onerror: function(callback) {
            this.on('error', callback);
        },
        on: function(event, callback) {
            var eventName = eventNameMap[event];
            if (eventName) {
                document.addEventListener(eventName, callback, false);
            }
        },
        off: function(event, callback) {
            var eventName = eventNameMap[event];
            if (eventName) {
                document.removeEventListener(eventName, callback, false);
            }
        },
        raw: fn
    };

    if (!fn) {
        if (isCommonjs) {
            module.exports = {
                isEnabled: false
            };
        } else {
            window.screenfull = {
                isEnabled: false
            };
        }

        return;
    }

    Object.defineProperties(screenfull, {
        isFullscreen: {
            get: function() {
                return Boolean(document[fn.fullscreenElement]);
            }
        },
        element: {
            enumerable: true,
            get: function() {
                return document[fn.fullscreenElement];
            }
        },
        isEnabled: {
            enumerable: true,
            get: function() {
                // Coerce to boolean in case of old WebKit
                return Boolean(document[fn.fullscreenEnabled]);
            }
        }
    });

    if (isCommonjs) {
        module.exports = screenfull;
    } else {
        window.screenfull = screenfull;
    }
})();



function buildIOSMeta() {

    var aMetaTags = [{
            name: "viewport",
            content: 'width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no'
        },
        {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        },
        {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }
    ];

    for (var i = 0; i < aMetaTags.length; i++) {
        var oNewMeta = document.createElement('meta');
        oNewMeta.name = aMetaTags[i].name;
        oNewMeta.content = aMetaTags[i].content;

        var oOldMeta = window.document.head.querySelector('meta[name="' + oNewMeta.name + '"]');
        if (oOldMeta) {
            oOldMeta.parentNode.removeChild(oOldMeta);
        }
        window.document.head.appendChild(oNewMeta);
    }

};

function hideIOSFullscreenPanel() {
    jQuery(".xxx-ios-fullscreen-message").css("display", "none");
    jQuery(".xxx-ios-fullscreen-scroll").css("display", "none");

    jQuery(".xxx-game-iframe-full").removeClass("xxx-game-iframe-iphone-se");
};

function buildIOSFullscreenPanel() {
    var html = '';

    html += '<div class="xxx-ios-fullscreen-message">';
    html += '<div class="xxx-ios-fullscreen-swipe">';
    html += '</div>';
    html += '</div>';

    html += '<div class="xxx-ios-fullscreen-scroll">';
    html += '</div>';

    jQuery("body").append(html);
};

function showIOSFullscreenPanel() {
    jQuery(".xxx-ios-fullscreen-message").css("display", "block");
    jQuery(".xxx-ios-fullscreen-scroll").css("display", "block");
};

function __iosResize() {

    window.scrollTo(0, 0);

    console.log(window.devicePixelRatio);
    console.log(window.innerWidth);
    console.log(window.innerHeight);

    if (platform.product === "iPhone") {
        switch (window.devicePixelRatio) {
            case 2:
                {
                    switch (window.innerWidth) {
                        case 568:
                            {
                                //console.log("iPhone 5/5s/5c/se"); 
                                if (window.innerHeight === 320) {
                                    //console.log("fullscreen");   
                                    //this.hideIOSFullscreenPanel();
                                } else {
                                    jQuery(".xxx-game-iframe-full").addClass("xxx-game-iframe-iphone-se");
                                    //console.log("windowed"); 
                                    // this.showIOSFullscreenPanel();
                                }
                            }
                            break;
                        case 667:
                            {
                                //console.log("iPhone 6/6s/7/8"); 
                                if (window.innerHeight === 375) {
                                    //  console.log("fullscreen");   
                                    hideIOSFullscreenPanel();
                                } else {
                                    //console.log("windowed"); 
                                    showIOSFullscreenPanel();
                                }
                            }
                            break;
                        case 808:
                            {
                                //console.log("iPhone Xr"); 
                                if (window.innerHeight === 414) {
                                    hideIOSFullscreenPanel();
                                } else {
                                    showIOSFullscreenPanel();
                                }
                            }
                            break;
                        default:
                            {
                                hideIOSFullscreenPanel();
                            }
                    }
                }
                break;
            case 3:
                {
                    switch (window.innerWidth) {
                        case 736:
                            {
                                //console.log("iPhone 6/6s/7/8 plus");    
                                if (window.innerHeight === 414) {
                                    //  console.log("fullscreen");   
                                    hideIOSFullscreenPanel();
                                } else {
                                    showIOSFullscreenPanel();
                                }
                            }
                            break;
                            // iphone X
                        case 724:
                            {
                                //  console.log("iPhone X/Xs"); 
                                if (window.innerHeight === 375) {
                                    hideIOSFullscreenPanel();
                                } else {
                                    showIOSFullscreenPanel();
                                }
                            }
                            break;
                        case 808:
                            {
                                //console.log("iPhone Xs Max"); 
                                if (window.innerHeight === 414) {
                                    hideIOSFullscreenPanel();
                                } else {
                                    showIOSFullscreenPanel();
                                }
                            }
                            break;
                        default:
                            {
                                hideIOSFullscreenPanel();
                            }
                    }
                }
                break;
            default:
                {
                    hideIOSFullscreenPanel();
                }
        }
    }
};

function iosResize() {
    __iosResize();

    setTimeout(function() {
        __iosResize();
    }, 500);
};

function iosInIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}


$(document).ready(function() {
    if (platform &&
        platform.product === "iPhone" &&
        platform.name.toLowerCase() !== "safari" &&
        !iosInIframe()) {
        buildIOSFullscreenPanel();
        buildIOSMeta();
    }
});

jQuery(window).resize(function() {
    if (platform &&
        platform.product === "iPhone" &&
        platform.name.toLowerCase() !== "safari" &&
        !iosInIframe()) {
        iosResize();
    }
});

/*!
 * Platform.js
 * Copyright 2014-2020 Benjamin Tan
 * Copyright 2011-2013 John-David Dalton
 * Available under MIT license
 */
;
(function() {
    'use strict';

    /** Used to determine if values are of the language type `Object`. */
    var objectTypes = {
        'function': true,
        'object': true
    };

    /** Used as a reference to the global object. */
    var root = (objectTypes[typeof window] && window) || this;

    /** Backup possible global object. */
    var oldRoot = root;

    /** Detect free variable `exports`. */
    var freeExports = objectTypes[typeof exports] && exports;

    /** Detect free variable `module`. */
    var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;

    /** Detect free variable `global` from Node.js or Browserified code and use it as `root`. */
    var freeGlobal = freeExports && freeModule && typeof global == 'object' && global;
    if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal)) {
        root = freeGlobal;
    }

    /**
     * Used as the maximum length of an array-like object.
     * See the [ES6 spec](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength)
     * for more details.
     */
    var maxSafeInteger = Math.pow(2, 53) - 1;

    /** Regular expression to detect Opera. */
    var reOpera = /\bOpera/;

    /** Possible global object. */
    var thisBinding = this;

    /** Used for native method references. */
    var objectProto = Object.prototype;

    /** Used to check for own properties of an object. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /** Used to resolve the internal `[[Class]]` of values. */
    var toString = objectProto.toString;

    /*--------------------------------------------------------------------------*/

    /**
     * Capitalizes a string value.
     *
     * @private
     * @param {string} string The string to capitalize.
     * @returns {string} The capitalized string.
     */
    function capitalize(string) {
        string = String(string);
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    /**
     * A utility function to clean up the OS name.
     *
     * @private
     * @param {string} os The OS name to clean up.
     * @param {string} [pattern] A `RegExp` pattern matching the OS name.
     * @param {string} [label] A label for the OS.
     */
    function cleanupOS(os, pattern, label) {
        // Platform tokens are defined at:
        // http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
        // http://web.archive.org/web/20081122053950/http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
        var data = {
            '10.0': '10',
            '6.4': '10 Technical Preview',
            '6.3': '8.1',
            '6.2': '8',
            '6.1': 'Server 2008 R2 / 7',
            '6.0': 'Server 2008 / Vista',
            '5.2': 'Server 2003 / XP 64-bit',
            '5.1': 'XP',
            '5.01': '2000 SP1',
            '5.0': '2000',
            '4.0': 'NT',
            '4.90': 'ME'
        };
        // Detect Windows version from platform tokens.
        if (pattern && label && /^Win/i.test(os) && !/^Windows Phone /i.test(os) &&
            (data = data[/[\d.]+$/.exec(os)])) {
            os = 'Windows ' + data;
        }
        // Correct character case and cleanup string.
        os = String(os);

        if (pattern && label) {
            os = os.replace(RegExp(pattern, 'i'), label);
        }

        os = format(
            os.replace(/ ce$/i, ' CE')
            .replace(/\bhpw/i, 'web')
            .replace(/\bMacintosh\b/, 'Mac OS')
            .replace(/_PowerPC\b/i, ' OS')
            .replace(/\b(OS X) [^ \d]+/i, '$1')
            .replace(/\bMac (OS X)\b/, '$1')
            .replace(/\/(\d)/, ' $1')
            .replace(/_/g, '.')
            .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, '')
            .replace(/\bx86\.64\b/gi, 'x86_64')
            .replace(/\b(Windows Phone) OS\b/, '$1')
            .replace(/\b(Chrome OS \w+) [\d.]+\b/, '$1')
            .split(' on ')[0]
        );

        return os;
    }

    /**
     * An iteration utility for arrays and objects.
     *
     * @private
     * @param {Array|Object} object The object to iterate over.
     * @param {Function} callback The function called per iteration.
     */
    function each(object, callback) {
        var index = -1,
            length = object ? object.length : 0;

        if (typeof length == 'number' && length > -1 && length <= maxSafeInteger) {
            while (++index < length) {
                callback(object[index], index, object);
            }
        } else {
            forOwn(object, callback);
        }
    }

    /**
     * Trim and conditionally capitalize string values.
     *
     * @private
     * @param {string} string The string to format.
     * @returns {string} The formatted string.
     */
    function format(string) {
        string = trim(string);
        return /^(?:webOS|i(?:OS|P))/.test(string) ?
            string :
            capitalize(string);
    }

    /**
     * Iterates over an object's own properties, executing the `callback` for each.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} callback The function executed per own property.
     */
    function forOwn(object, callback) {
        for (var key in object) {
            if (hasOwnProperty.call(object, key)) {
                callback(object[key], key, object);
            }
        }
    }

    /**
     * Gets the internal `[[Class]]` of a value.
     *
     * @private
     * @param {*} value The value.
     * @returns {string} The `[[Class]]`.
     */
    function getClassOf(value) {
        return value == null ?
            capitalize(value) :
            toString.call(value).slice(8, -1);
    }

    /**
     * Host objects can return type values that are different from their actual
     * data type. The objects we are concerned with usually return non-primitive
     * types of "object", "function", or "unknown".
     *
     * @private
     * @param {*} object The owner of the property.
     * @param {string} property The property to check.
     * @returns {boolean} Returns `true` if the property value is a non-primitive, else `false`.
     */
    function isHostType(object, property) {
        var type = object != null ? typeof object[property] : 'number';
        return !/^(?:boolean|number|string|undefined)$/.test(type) &&
            (type == 'object' ? !!object[property] : true);
    }

    /**
     * Prepares a string for use in a `RegExp` by making hyphens and spaces optional.
     *
     * @private
     * @param {string} string The string to qualify.
     * @returns {string} The qualified string.
     */
    function qualify(string) {
        return String(string).replace(/([ -])(?!$)/g, '$1?');
    }

    /**
     * A bare-bones `Array#reduce` like utility function.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} callback The function called per iteration.
     * @returns {*} The accumulated result.
     */
    function reduce(array, callback) {
        var accumulator = null;
        each(array, function(value, index) {
            accumulator = callback(accumulator, value, index, array);
        });
        return accumulator;
    }

    /**
     * Removes leading and trailing whitespace from a string.
     *
     * @private
     * @param {string} string The string to trim.
     * @returns {string} The trimmed string.
     */
    function trim(string) {
        return String(string).replace(/^ +| +$/g, '');
    }

    /*--------------------------------------------------------------------------*/

    /**
     * Creates a new platform object.
     *
     * @memberOf platform
     * @param {Object|string} [ua=navigator.userAgent] The user agent string or
     *  context object.
     * @returns {Object} A platform object.
     */
    function parse(ua) {

        /** The environment context object. */
        var context = root;

        /** Used to flag when a custom context is provided. */
        var isCustomContext = ua && typeof ua == 'object' && getClassOf(ua) != 'String';

        // Juggle arguments.
        if (isCustomContext) {
            context = ua;
            ua = null;
        }

        /** Browser navigator object. */
        var nav = context.navigator || {};

        /** Browser user agent string. */
        var userAgent = nav.userAgent || '';

        ua || (ua = userAgent);

        /** Used to flag when `thisBinding` is the [ModuleScope]. */
        var isModuleScope = isCustomContext || thisBinding == oldRoot;

        /** Used to detect if browser is like Chrome. */
        var likeChrome = isCustomContext ?
            !!nav.likeChrome :
            /\bChrome\b/.test(ua) && !/internal|\n/i.test(toString.toString());

        /** Internal `[[Class]]` value shortcuts. */
        var objectClass = 'Object',
            airRuntimeClass = isCustomContext ? objectClass : 'ScriptBridgingProxyObject',
            enviroClass = isCustomContext ? objectClass : 'Environment',
            javaClass = (isCustomContext && context.java) ? 'JavaPackage' : getClassOf(context.java),
            phantomClass = isCustomContext ? objectClass : 'RuntimeObject';

        /** Detect Java environments. */
        var java = /\bJava/.test(javaClass) && context.java;

        /** Detect Rhino. */
        var rhino = java && getClassOf(context.environment) == enviroClass;

        /** A character to represent alpha. */
        var alpha = java ? 'a' : '\u03b1';

        /** A character to represent beta. */
        var beta = java ? 'b' : '\u03b2';

        /** Browser document object. */
        var doc = context.document || {};

        /**
         * Detect Opera browser (Presto-based).
         * http://www.howtocreate.co.uk/operaStuff/operaObject.html
         * http://dev.opera.com/articles/view/opera-mini-web-content-authoring-guidelines/#operamini
         */
        var opera = context.operamini || context.opera;

        /** Opera `[[Class]]`. */
        var operaClass = reOpera.test(operaClass = (isCustomContext && opera) ? opera['[[Class]]'] : getClassOf(opera)) ?
            operaClass :
            (opera = null);

        /*------------------------------------------------------------------------*/

        /** Temporary variable used over the script's lifetime. */
        var data;

        /** The CPU architecture. */
        var arch = ua;

        /** Platform description array. */
        var description = [];

        /** Platform alpha/beta indicator. */
        var prerelease = null;

        /** A flag to indicate that environment features should be used to resolve the platform. */
        var useFeatures = ua == userAgent;

        /** The browser/environment version. */
        var version = useFeatures && opera && typeof opera.version == 'function' && opera.version();

        /** A flag to indicate if the OS ends with "/ Version" */
        var isSpecialCasedOS;

        /* Detectable layout engines (order is important). */
        var layout = getLayout([{
                'label': 'EdgeHTML',
                'pattern': 'Edge'
            },
            'Trident',
            {
                'label': 'WebKit',
                'pattern': 'AppleWebKit'
            },
            'iCab',
            'Presto',
            'NetFront',
            'Tasman',
            'KHTML',
            'Gecko'
        ]);

        /* Detectable browser names (order is important). */
        var name = getName([
            'Adobe AIR',
            'Arora',
            'Avant Browser',
            'Breach',
            'Camino',
            'Electron',
            'Epiphany',
            'Fennec',
            'Flock',
            'Galeon',
            'GreenBrowser',
            'iCab',
            'Iceweasel',
            'K-Meleon',
            'Konqueror',
            'Lunascape',
            'Maxthon',
            {
                'label': 'Microsoft Edge',
                'pattern': '(?:Edge|Edg|EdgA|EdgiOS)'
            },
            'Midori',
            'Nook Browser',
            'PaleMoon',
            'PhantomJS',
            'Raven',
            'Rekonq',
            'RockMelt',
            {
                'label': 'Samsung Internet',
                'pattern': 'SamsungBrowser'
            },
            'SeaMonkey',
            {
                'label': 'Silk',
                'pattern': '(?:Cloud9|Silk-Accelerated)'
            },
            'Sleipnir',
            'SlimBrowser',
            {
                'label': 'SRWare Iron',
                'pattern': 'Iron'
            },
            'Sunrise',
            'Swiftfox',
            'Vivaldi',
            'Waterfox',
            'WebPositive',
            {
                'label': 'Yandex Browser',
                'pattern': 'YaBrowser'
            },
            {
                'label': 'UC Browser',
                'pattern': 'UCBrowser'
            },
            'Opera Mini',
            {
                'label': 'Opera Mini',
                'pattern': 'OPiOS'
            },
            'Opera',
            {
                'label': 'Opera',
                'pattern': 'OPR'
            },
            'Chromium',
            'Chrome',
            {
                'label': 'Chrome',
                'pattern': '(?:HeadlessChrome)'
            },
            {
                'label': 'Chrome Mobile',
                'pattern': '(?:CriOS|CrMo)'
            },
            {
                'label': 'Firefox',
                'pattern': '(?:Firefox|Minefield)'
            },
            {
                'label': 'Firefox for iOS',
                'pattern': 'FxiOS'
            },
            {
                'label': 'IE',
                'pattern': 'IEMobile'
            },
            {
                'label': 'IE',
                'pattern': 'MSIE'
            },
            'Safari'
        ]);

        /* Detectable products (order is important). */
        var product = getProduct([{
                'label': 'BlackBerry',
                'pattern': 'BB10'
            },
            'BlackBerry',
            {
                'label': 'Galaxy S',
                'pattern': 'GT-I9000'
            },
            {
                'label': 'Galaxy S2',
                'pattern': 'GT-I9100'
            },
            {
                'label': 'Galaxy S3',
                'pattern': 'GT-I9300'
            },
            {
                'label': 'Galaxy S4',
                'pattern': 'GT-I9500'
            },
            {
                'label': 'Galaxy S5',
                'pattern': 'SM-G900'
            },
            {
                'label': 'Galaxy S6',
                'pattern': 'SM-G920'
            },
            {
                'label': 'Galaxy S6 Edge',
                'pattern': 'SM-G925'
            },
            {
                'label': 'Galaxy S7',
                'pattern': 'SM-G930'
            },
            {
                'label': 'Galaxy S7 Edge',
                'pattern': 'SM-G935'
            },
            'Google TV',
            'Lumia',
            'iPad',
            'iPod',
            'iPhone',
            'Kindle',
            {
                'label': 'Kindle Fire',
                'pattern': '(?:Cloud9|Silk-Accelerated)'
            },
            'Nexus',
            'Nook',
            'PlayBook',
            'PlayStation Vita',
            'PlayStation',
            'TouchPad',
            'Transformer',
            {
                'label': 'Wii U',
                'pattern': 'WiiU'
            },
            'Wii',
            'Xbox One',
            {
                'label': 'Xbox 360',
                'pattern': 'Xbox'
            },
            'Xoom'
        ]);

        /* Detectable manufacturers. */
        var manufacturer = getManufacturer({
            'Apple': {
                'iPad': 1,
                'iPhone': 1,
                'iPod': 1
            },
            'Alcatel': {},
            'Archos': {},
            'Amazon': {
                'Kindle': 1,
                'Kindle Fire': 1
            },
            'Asus': {
                'Transformer': 1
            },
            'Barnes & Noble': {
                'Nook': 1
            },
            'BlackBerry': {
                'PlayBook': 1
            },
            'Google': {
                'Google TV': 1,
                'Nexus': 1
            },
            'HP': {
                'TouchPad': 1
            },
            'HTC': {},
            'Huawei': {},
            'Lenovo': {},
            'LG': {},
            'Microsoft': {
                'Xbox': 1,
                'Xbox One': 1
            },
            'Motorola': {
                'Xoom': 1
            },
            'Nintendo': {
                'Wii U': 1,
                'Wii': 1
            },
            'Nokia': {
                'Lumia': 1
            },
            'Oppo': {},
            'Samsung': {
                'Galaxy S': 1,
                'Galaxy S2': 1,
                'Galaxy S3': 1,
                'Galaxy S4': 1
            },
            'Sony': {
                'PlayStation': 1,
                'PlayStation Vita': 1
            },
            'Xiaomi': {
                'Mi': 1,
                'Redmi': 1
            }
        });

        /* Detectable operating systems (order is important). */
        var os = getOS([
            'Windows Phone',
            'KaiOS',
            'Android',
            'CentOS',
            {
                'label': 'Chrome OS',
                'pattern': 'CrOS'
            },
            'Debian',
            {
                'label': 'DragonFly BSD',
                'pattern': 'DragonFly'
            },
            'Fedora',
            'FreeBSD',
            'Gentoo',
            'Haiku',
            'Kubuntu',
            'Linux Mint',
            'OpenBSD',
            'Red Hat',
            'SuSE',
            'Ubuntu',
            'Xubuntu',
            'Cygwin',
            'Symbian OS',
            'hpwOS',
            'webOS ',
            'webOS',
            'Tablet OS',
            'Tizen',
            'Linux',
            'Mac OS X',
            'Macintosh',
            'Mac',
            'Windows 98;',
            'Windows '
        ]);

        /*------------------------------------------------------------------------*/

        /**
         * Picks the layout engine from an array of guesses.
         *
         * @private
         * @param {Array} guesses An array of guesses.
         * @returns {null|string} The detected layout engine.
         */
        function getLayout(guesses) {
            return reduce(guesses, function(result, guess) {
                return result || RegExp('\\b' + (
                    guess.pattern || qualify(guess)
                ) + '\\b', 'i').exec(ua) && (guess.label || guess);
            });
        }

        /**
         * Picks the manufacturer from an array of guesses.
         *
         * @private
         * @param {Array} guesses An object of guesses.
         * @returns {null|string} The detected manufacturer.
         */
        function getManufacturer(guesses) {
            return reduce(guesses, function(result, value, key) {
                // Lookup the manufacturer by product or scan the UA for the manufacturer.
                return result || (
                    value[product] ||
                    value[/^[a-z]+(?: +[a-z]+\b)*/i.exec(product)] ||
                    RegExp('\\b' + qualify(key) + '(?:\\b|\\w*\\d)', 'i').exec(ua)
                ) && key;
            });
        }

        /**
         * Picks the browser name from an array of guesses.
         *
         * @private
         * @param {Array} guesses An array of guesses.
         * @returns {null|string} The detected browser name.
         */
        function getName(guesses) {
            return reduce(guesses, function(result, guess) {
                return result || RegExp('\\b' + (
                    guess.pattern || qualify(guess)
                ) + '\\b', 'i').exec(ua) && (guess.label || guess);
            });
        }

        /**
         * Picks the OS name from an array of guesses.
         *
         * @private
         * @param {Array} guesses An array of guesses.
         * @returns {null|string} The detected OS name.
         */
        function getOS(guesses) {
            return reduce(guesses, function(result, guess) {
                var pattern = guess.pattern || qualify(guess);
                if (!result && (result =
                        RegExp('\\b' + pattern + '(?:/[\\d.]+|[ \\w.]*)', 'i').exec(ua)
                    )) {
                    result = cleanupOS(result, pattern, guess.label || guess);
                }
                return result;
            });
        }

        /**
         * Picks the product name from an array of guesses.
         *
         * @private
         * @param {Array} guesses An array of guesses.
         * @returns {null|string} The detected product name.
         */
        function getProduct(guesses) {
            return reduce(guesses, function(result, guess) {
                var pattern = guess.pattern || qualify(guess);
                if (!result && (result =
                        RegExp('\\b' + pattern + ' *\\d+[.\\w_]*', 'i').exec(ua) ||
                        RegExp('\\b' + pattern + ' *\\w+-[\\w]*', 'i').exec(ua) ||
                        RegExp('\\b' + pattern + '(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)', 'i').exec(ua)
                    )) {
                    // Split by forward slash and append product version if needed.
                    if ((result = String((guess.label && !RegExp(pattern, 'i').test(guess.label)) ? guess.label : result).split('/'))[1] && !/[\d.]+/.test(result[0])) {
                        result[0] += ' ' + result[1];
                    }
                    // Correct character case and cleanup string.
                    guess = guess.label || guess;
                    result = format(result[0]
                        .replace(RegExp(pattern, 'i'), guess)
                        .replace(RegExp('; *(?:' + guess + '[_-])?', 'i'), ' ')
                        .replace(RegExp('(' + guess + ')[-_.]?(\\w)', 'i'), '$1 $2'));
                }
                return result;
            });
        }

        /**
         * Resolves the version using an array of UA patterns.
         *
         * @private
         * @param {Array} patterns An array of UA patterns.
         * @returns {null|string} The detected version.
         */
        function getVersion(patterns) {
            return reduce(patterns, function(result, pattern) {
                return result || (RegExp(pattern +
                    '(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)', 'i').exec(ua) || 0)[1] || null;
            });
        }

        /**
         * Returns `platform.description` when the platform object is coerced to a string.
         *
         * @name toString
         * @memberOf platform
         * @returns {string} Returns `platform.description` if available, else an empty string.
         */
        function toStringPlatform() {
            return this.description || '';
        }

        /*------------------------------------------------------------------------*/

        // Convert layout to an array so we can add extra details.
        layout && (layout = [layout]);

        // Detect Android products.
        // Browsers on Android devices typically provide their product IDS after "Android;"
        // up to "Build" or ") AppleWebKit".
        // Example:
        // "Mozilla/5.0 (Linux; Android 8.1.0; Moto G (5) Plus) AppleWebKit/537.36
        // (KHTML, like Gecko) Chrome/70.0.3538.80 Mobile Safari/537.36"
        if (/\bAndroid\b/.test(os) && !product &&
            (data = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(ua))) {
            product = trim(data[1])
                // Replace any language codes (eg. "en-US").
                .replace(/^[a-z]{2}-[a-z]{2};\s*/i, '') ||
                null;
        }
        // Detect product names that contain their manufacturer's name.
        if (manufacturer && !product) {
            product = getProduct([manufacturer]);
        } else if (manufacturer && product) {
            product = product
                .replace(RegExp('^(' + qualify(manufacturer) + ')[-_.\\s]', 'i'), manufacturer + ' ')
                .replace(RegExp('^(' + qualify(manufacturer) + ')[-_.]?(\\w)', 'i'), manufacturer + ' $2');
        }
        // Clean up Google TV.
        if ((data = /\bGoogle TV\b/.exec(product))) {
            product = data[0];
        }
        // Detect simulators.
        if (/\bSimulator\b/i.test(ua)) {
            product = (product ? product + ' ' : '') + 'Simulator';
        }
        // Detect Opera Mini 8+ running in Turbo/Uncompressed mode on iOS.
        if (name == 'Opera Mini' && /\bOPiOS\b/.test(ua)) {
            description.push('running in Turbo/Uncompressed mode');
        }
        // Detect IE Mobile 11.
        if (name == 'IE' && /\blike iPhone OS\b/.test(ua)) {
            data = parse(ua.replace(/like iPhone OS/, ''));
            manufacturer = data.manufacturer;
            product = data.product;
        }
        // Detect iOS.
        else if (/^iP/.test(product)) {
            name || (name = 'Safari');
            os = 'iOS' + ((data = / OS ([\d_]+)/i.exec(ua)) ?
                ' ' + data[1].replace(/_/g, '.') :
                '');
        }
        // Detect Kubuntu.
        else if (name == 'Konqueror' && /^Linux\b/i.test(os)) {
            os = 'Kubuntu';
        }
        // Detect Android browsers.
        else if ((manufacturer && manufacturer != 'Google' &&
                ((/Chrome/.test(name) && !/\bMobile Safari\b/i.test(ua)) || /\bVita\b/.test(product))) ||
            (/\bAndroid\b/.test(os) && /^Chrome/.test(name) && /\bVersion\//i.test(ua))) {
            name = 'Android Browser';
            os = /\bAndroid\b/.test(os) ? os : 'Android';
        }
        // Detect Silk desktop/accelerated modes.
        else if (name == 'Silk') {
            if (!/\bMobi/i.test(ua)) {
                os = 'Android';
                description.unshift('desktop mode');
            }
            if (/Accelerated *= *true/i.test(ua)) {
                description.unshift('accelerated');
            }
        }
        // Detect UC Browser speed mode.
        else if (name == 'UC Browser' && /\bUCWEB\b/.test(ua)) {
            description.push('speed mode');
        }
        // Detect PaleMoon identifying as Firefox.
        else if (name == 'PaleMoon' && (data = /\bFirefox\/([\d.]+)\b/.exec(ua))) {
            description.push('identifying as Firefox ' + data[1]);
        }
        // Detect Firefox OS and products running Firefox.
        else if (name == 'Firefox' && (data = /\b(Mobile|Tablet|TV)\b/i.exec(ua))) {
            os || (os = 'Firefox OS');
            product || (product = data[1]);
        }
        // Detect false positives for Firefox/Safari.
        else if (!name || (data = !/\bMinefield\b/i.test(ua) && /\b(?:Firefox|Safari)\b/.exec(name))) {
            // Escape the `/` for Firefox 1.
            if (name && !product && /[\/,]|^[^(]+?\)/.test(ua.slice(ua.indexOf(data + '/') + 8))) {
                // Clear name of false positives.
                name = null;
            }
            // Reassign a generic name.
            if ((data = product || manufacturer || os) &&
                (product || manufacturer || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(os))) {
                name = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(os) ? os : data) + ' Browser';
            }
        }
        // Add Chrome version to description for Electron.
        else if (name == 'Electron' && (data = (/\bChrome\/([\d.]+)\b/.exec(ua) || 0)[1])) {
            description.push('Chromium ' + data);
        }
        // Detect non-Opera (Presto-based) versions (order is important).
        if (!version) {
            version = getVersion([
                '(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)',
                'Version',
                qualify(name),
                '(?:Firefox|Minefield|NetFront)'
            ]);
        }
        // Detect stubborn layout engines.
        if ((data =
                layout == 'iCab' && parseFloat(version) > 3 && 'WebKit' ||
                /\bOpera\b/.test(name) && (/\bOPR\b/.test(ua) ? 'Blink' : 'Presto') ||
                /\b(?:Midori|Nook|Safari)\b/i.test(ua) && !/^(?:Trident|EdgeHTML)$/.test(layout) && 'WebKit' ||
                !layout && /\bMSIE\b/i.test(ua) && (os == 'Mac OS' ? 'Tasman' : 'Trident') ||
                layout == 'WebKit' && /\bPlayStation\b(?! Vita\b)/i.test(name) && 'NetFront'
            )) {
            layout = [data];
        }
        // Detect Windows Phone 7 desktop mode.
        if (name == 'IE' && (data = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(ua) || 0)[1])) {
            name += ' Mobile';
            os = 'Windows Phone ' + (/\+$/.test(data) ? data : data + '.x');
            description.unshift('desktop mode');
        }
        // Detect Windows Phone 8.x desktop mode.
        else if (/\bWPDesktop\b/i.test(ua)) {
            name = 'IE Mobile';
            os = 'Windows Phone 8.x';
            description.unshift('desktop mode');
            version || (version = (/\brv:([\d.]+)/.exec(ua) || 0)[1]);
        }
        // Detect IE 11 identifying as other browsers.
        else if (name != 'IE' && layout == 'Trident' && (data = /\brv:([\d.]+)/.exec(ua))) {
            if (name) {
                description.push('identifying as ' + name + (version ? ' ' + version : ''));
            }
            name = 'IE';
            version = data[1];
        }
        // Leverage environment features.
        if (useFeatures) {
            // Detect server-side environments.
            // Rhino has a global function while others have a global object.
            if (isHostType(context, 'global')) {
                if (java) {
                    data = java.lang.System;
                    arch = data.getProperty('os.arch');
                    os = os || data.getProperty('os.name') + ' ' + data.getProperty('os.version');
                }
                if (rhino) {
                    try {
                        version = context.require('ringo/engine').version.join('.');
                        name = 'RingoJS';
                    } catch (e) {
                        if ((data = context.system) && data.global.system == context.system) {
                            name = 'Narwhal';
                            os || (os = data[0].os || null);
                        }
                    }
                    if (!name) {
                        name = 'Rhino';
                    }
                } else if (
                    typeof context.process == 'object' && !context.process.browser &&
                    (data = context.process)
                ) {
                    if (typeof data.versions == 'object') {
                        if (typeof data.versions.electron == 'string') {
                            description.push('Node ' + data.versions.node);
                            name = 'Electron';
                            version = data.versions.electron;
                        } else if (typeof data.versions.nw == 'string') {
                            description.push('Chromium ' + version, 'Node ' + data.versions.node);
                            name = 'NW.js';
                            version = data.versions.nw;
                        }
                    }
                    if (!name) {
                        name = 'Node.js';
                        arch = data.arch;
                        os = data.platform;
                        version = /[\d.]+/.exec(data.version);
                        version = version ? version[0] : null;
                    }
                }
            }
            // Detect Adobe AIR.
            else if (getClassOf((data = context.runtime)) == airRuntimeClass) {
                name = 'Adobe AIR';
                os = data.flash.system.Capabilities.os;
            }
            // Detect PhantomJS.
            else if (getClassOf((data = context.phantom)) == phantomClass) {
                name = 'PhantomJS';
                version = (data = data.version || null) && (data.major + '.' + data.minor + '.' + data.patch);
            }
            // Detect IE compatibility modes.
            else if (typeof doc.documentMode == 'number' && (data = /\bTrident\/(\d+)/i.exec(ua))) {
                // We're in compatibility mode when the Trident version + 4 doesn't
                // equal the document mode.
                version = [version, doc.documentMode];
                if ((data = +data[1] + 4) != version[1]) {
                    description.push('IE ' + version[1] + ' mode');
                    layout && (layout[1] = '');
                    version[1] = data;
                }
                version = name == 'IE' ? String(version[1].toFixed(1)) : version[0];
            }
            // Detect IE 11 masking as other browsers.
            else if (typeof doc.documentMode == 'number' && /^(?:Chrome|Firefox)\b/.test(name)) {
                description.push('masking as ' + name + ' ' + version);
                name = 'IE';
                version = '11.0';
                layout = ['Trident'];
                os = 'Windows';
            }
            os = os && format(os);
        }
        // Detect prerelease phases.
        if (version && (data =
                /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(version) ||
                /(?:alpha|beta)(?: ?\d)?/i.exec(ua + ';' + (useFeatures && nav.appMinorVersion)) ||
                /\bMinefield\b/i.test(ua) && 'a'
            )) {
            prerelease = /b/i.test(data) ? 'beta' : 'alpha';
            version = version.replace(RegExp(data + '\\+?$'), '') +
                (prerelease == 'beta' ? beta : alpha) + (/\d+\+?/.exec(data) || '');
        }
        // Detect Firefox Mobile.
        if (name == 'Fennec' || name == 'Firefox' && /\b(?:Android|Firefox OS|KaiOS)\b/.test(os)) {
            name = 'Firefox Mobile';
        }
        // Obscure Maxthon's unreliable version.
        else if (name == 'Maxthon' && version) {
            version = version.replace(/\.[\d.]+/, '.x');
        }
        // Detect Xbox 360 and Xbox One.
        else if (/\bXbox\b/i.test(product)) {
            if (product == 'Xbox 360') {
                os = null;
            }
            if (product == 'Xbox 360' && /\bIEMobile\b/.test(ua)) {
                description.unshift('mobile mode');
            }
        }
        // Add mobile postfix.
        else if ((/^(?:Chrome|IE|Opera)$/.test(name) || name && !product && !/Browser|Mobi/.test(name)) &&
            (os == 'Windows CE' || /Mobi/i.test(ua))) {
            name += ' Mobile';
        }
        // Detect IE platform preview.
        else if (name == 'IE' && useFeatures) {
            try {
                if (context.external === null) {
                    description.unshift('platform preview');
                }
            } catch (e) {
                description.unshift('embedded');
            }
        }
        // Detect BlackBerry OS version.
        // http://docs.blackberry.com/en/developers/deliverables/18169/HTTP_headers_sent_by_BB_Browser_1234911_11.jsp
        else if ((/\bBlackBerry\b/.test(product) || /\bBB10\b/.test(ua)) && (data =
                (RegExp(product.replace(/ +/g, ' *') + '/([.\\d]+)', 'i').exec(ua) || 0)[1] ||
                version
            )) {
            data = [data, /BB10/.test(ua)];
            os = (data[1] ? (product = null, manufacturer = 'BlackBerry') : 'Device Software') + ' ' + data[0];
            version = null;
        }
        // Detect Opera identifying/masking itself as another browser.
        // http://www.opera.com/support/kb/view/843/
        else if (this != forOwn && product != 'Wii' && (
                (useFeatures && opera) ||
                (/Opera/.test(name) && /\b(?:MSIE|Firefox)\b/i.test(ua)) ||
                (name == 'Firefox' && /\bOS X (?:\d+\.){2,}/.test(os)) ||
                (name == 'IE' && (
                    (os && !/^Win/.test(os) && version > 5.5) ||
                    /\bWindows XP\b/.test(os) && version > 8 ||
                    version == 8 && !/\bTrident\b/.test(ua)
                ))
            ) && !reOpera.test((data = parse.call(forOwn, ua.replace(reOpera, '') + ';'))) && data.name) {
            // When "identifying", the UA contains both Opera and the other browser's name.
            data = 'ing as ' + data.name + ((data = data.version) ? ' ' + data : '');
            if (reOpera.test(name)) {
                if (/\bIE\b/.test(data) && os == 'Mac OS') {
                    os = null;
                }
                data = 'identify' + data;
            }
            // When "masking", the UA contains only the other browser's name.
            else {
                data = 'mask' + data;
                if (operaClass) {
                    name = format(operaClass.replace(/([a-z])([A-Z])/g, '$1 $2'));
                } else {
                    name = 'Opera';
                }
                if (/\bIE\b/.test(data)) {
                    os = null;
                }
                if (!useFeatures) {
                    version = null;
                }
            }
            layout = ['Presto'];
            description.push(data);
        }
        // Detect WebKit Nightly and approximate Chrome/Safari versions.
        if ((data = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(ua) || 0)[1])) {
            // Correct build number for numeric comparison.
            // (e.g. "532.5" becomes "532.05")
            data = [parseFloat(data.replace(/\.(\d)$/, '.0$1')), data];
            // Nightly builds are postfixed with a "+".
            if (name == 'Safari' && data[1].slice(-1) == '+') {
                name = 'WebKit Nightly';
                prerelease = 'alpha';
                version = data[1].slice(0, -1);
            }
            // Clear incorrect browser versions.
            else if (version == data[1] ||
                version == (data[2] = (/\bSafari\/([\d.]+\+?)/i.exec(ua) || 0)[1])) {
                version = null;
            }
            // Use the full Chrome version when available.
            data[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(ua) || 0)[1];
            // Detect Blink layout engine.
            if (data[0] == 537.36 && data[2] == 537.36 && parseFloat(data[1]) >= 28 && layout == 'WebKit') {
                layout = ['Blink'];
            }
            // Detect JavaScriptCore.
            // http://stackoverflow.com/questions/6768474/how-can-i-detect-which-javascript-engine-v8-or-jsc-is-used-at-runtime-in-androi
            if (!useFeatures || (!likeChrome && !data[1])) {
                layout && (layout[1] = 'like Safari');
                data = (data = data[0], data < 400 ? 1 : data < 500 ? 2 : data < 526 ? 3 : data < 533 ? 4 : data < 534 ? '4+' : data < 535 ? 5 : data < 537 ? 6 : data < 538 ? 7 : data < 601 ? 8 : data < 602 ? 9 : data < 604 ? 10 : data < 606 ? 11 : data < 608 ? 12 : '12');
            } else {
                layout && (layout[1] = 'like Chrome');
                data = data[1] || (data = data[0], data < 530 ? 1 : data < 532 ? 2 : data < 532.05 ? 3 : data < 533 ? 4 : data < 534.03 ? 5 : data < 534.07 ? 6 : data < 534.10 ? 7 : data < 534.13 ? 8 : data < 534.16 ? 9 : data < 534.24 ? 10 : data < 534.30 ? 11 : data < 535.01 ? 12 : data < 535.02 ? '13+' : data < 535.07 ? 15 : data < 535.11 ? 16 : data < 535.19 ? 17 : data < 536.05 ? 18 : data < 536.10 ? 19 : data < 537.01 ? 20 : data < 537.11 ? '21+' : data < 537.13 ? 23 : data < 537.18 ? 24 : data < 537.24 ? 25 : data < 537.36 ? 26 : layout != 'Blink' ? '27' : '28');
            }
            // Add the postfix of ".x" or "+" for approximate versions.
            layout && (layout[1] += ' ' + (data += typeof data == 'number' ? '.x' : /[.+]/.test(data) ? '' : '+'));
            // Obscure version for some Safari 1-2 releases.
            if (name == 'Safari' && (!version || parseInt(version) > 45)) {
                version = data;
            } else if (name == 'Chrome' && /\bHeadlessChrome/i.test(ua)) {
                description.unshift('headless');
            }
        }
        // Detect Opera desktop modes.
        if (name == 'Opera' && (data = /\bzbov|zvav$/.exec(os))) {
            name += ' ';
            description.unshift('desktop mode');
            if (data == 'zvav') {
                name += 'Mini';
                version = null;
            } else {
                name += 'Mobile';
            }
            os = os.replace(RegExp(' *' + data + '$'), '');
        }
        // Detect Chrome desktop mode.
        else if (name == 'Safari' && /\bChrome\b/.exec(layout && layout[1])) {
            description.unshift('desktop mode');
            name = 'Chrome Mobile';
            version = null;

            if (/\bOS X\b/.test(os)) {
                manufacturer = 'Apple';
                os = 'iOS 4.3+';
            } else {
                os = null;
            }
        }
        // Newer versions of SRWare Iron uses the Chrome tag to indicate its version number.
        else if (/\bSRWare Iron\b/.test(name) && !version) {
            version = getVersion('Chrome');
        }
        // Strip incorrect OS versions.
        if (version && version.indexOf((data = /[\d.]+$/.exec(os))) == 0 &&
            ua.indexOf('/' + data + '-') > -1) {
            os = trim(os.replace(data, ''));
        }
        // Ensure OS does not include the browser name.
        if (os && os.indexOf(name) != -1 && !RegExp(name + ' OS').test(os)) {
            os = os.replace(RegExp(' *' + qualify(name) + ' *'), '');
        }
        // Add layout engine.
        if (layout && !/\b(?:Avant|Nook)\b/.test(name) && (
                /Browser|Lunascape|Maxthon/.test(name) ||
                name != 'Safari' && /^iOS/.test(os) && /\bSafari\b/.test(layout[1]) ||
                /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(name) && layout[1])) {
            // Don't add layout details to description if they are falsey.
            (data = layout[layout.length - 1]) && description.push(data);
        }
        // Combine contextual information.
        if (description.length) {
            description = ['(' + description.join('; ') + ')'];
        }
        // Append manufacturer to description.
        if (manufacturer && product && product.indexOf(manufacturer) < 0) {
            description.push('on ' + manufacturer);
        }
        // Append product to description.
        if (product) {
            description.push((/^on /.test(description[description.length - 1]) ? '' : 'on ') + product);
        }
        // Parse the OS into an object.
        if (os) {
            data = / ([\d.+]+)$/.exec(os);
            isSpecialCasedOS = data && os.charAt(os.length - data[0].length - 1) == '/';
            os = {
                'architecture': 32,
                'family': (data && !isSpecialCasedOS) ? os.replace(data[0], '') : os,
                'version': data ? data[1] : null,
                'toString': function() {
                    var version = this.version;
                    return this.family + ((version && !isSpecialCasedOS) ? ' ' + version : '') + (this.architecture == 64 ? ' 64-bit' : '');
                }
            };
        }
        // Add browser/OS architecture.
        if ((data = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(arch)) && !/\bi686\b/i.test(arch)) {
            if (os) {
                os.architecture = 64;
                os.family = os.family.replace(RegExp(' *' + data), '');
            }
            if (
                name && (/\bWOW64\b/i.test(ua) ||
                    (useFeatures && /\w(?:86|32)$/.test(nav.cpuClass || nav.platform) && !/\bWin64; x64\b/i.test(ua)))
            ) {
                description.unshift('32-bit');
            }
        }
        // Chrome 39 and above on OS X is always 64-bit.
        else if (
            os && /^OS X/.test(os.family) &&
            name == 'Chrome' && parseFloat(version) >= 39
        ) {
            os.architecture = 64;
        }

        ua || (ua = null);

        /*------------------------------------------------------------------------*/

        /**
         * The platform object.
         *
         * @name platform
         * @type Object
         */
        var platform = {};

        /**
         * The platform description.
         *
         * @memberOf platform
         * @type string|null
         */
        platform.description = ua;

        /**
         * The name of the browser's layout engine.
         *
         * The list of common layout engines include:
         * "Blink", "EdgeHTML", "Gecko", "Trident" and "WebKit"
         *
         * @memberOf platform
         * @type string|null
         */
        platform.layout = layout && layout[0];

        /**
         * The name of the product's manufacturer.
         *
         * The list of manufacturers include:
         * "Apple", "Archos", "Amazon", "Asus", "Barnes & Noble", "BlackBerry",
         * "Google", "HP", "HTC", "LG", "Microsoft", "Motorola", "Nintendo",
         * "Nokia", "Samsung" and "Sony"
         *
         * @memberOf platform
         * @type string|null
         */
        platform.manufacturer = manufacturer;

        /**
         * The name of the browser/environment.
         *
         * The list of common browser names include:
         * "Chrome", "Electron", "Firefox", "Firefox for iOS", "IE",
         * "Microsoft Edge", "PhantomJS", "Safari", "SeaMonkey", "Silk",
         * "Opera Mini" and "Opera"
         *
         * Mobile versions of some browsers have "Mobile" appended to their name:
         * eg. "Chrome Mobile", "Firefox Mobile", "IE Mobile" and "Opera Mobile"
         *
         * @memberOf platform
         * @type string|null
         */
        platform.name = name;

        /**
         * The alpha/beta release indicator.
         *
         * @memberOf platform
         * @type string|null
         */
        platform.prerelease = prerelease;

        /**
         * The name of the product hosting the browser.
         *
         * The list of common products include:
         *
         * "BlackBerry", "Galaxy S4", "Lumia", "iPad", "iPod", "iPhone", "Kindle",
         * "Kindle Fire", "Nexus", "Nook", "PlayBook", "TouchPad" and "Transformer"
         *
         * @memberOf platform
         * @type string|null
         */
        platform.product = product;

        /**
         * The browser's user agent string.
         *
         * @memberOf platform
         * @type string|null
         */
        platform.ua = ua;

        /**
         * The browser/environment version.
         *
         * @memberOf platform
         * @type string|null
         */
        platform.version = name && version;

        /**
         * The name of the operating system.
         *
         * @memberOf platform
         * @type Object
         */
        platform.os = os || {

            /**
             * The CPU architecture the OS is built for.
             *
             * @memberOf platform.os
             * @type number|null
             */
            'architecture': null,

            /**
             * The family of the OS.
             *
             * Common values include:
             * "Windows", "Windows Server 2008 R2 / 7", "Windows Server 2008 / Vista",
             * "Windows XP", "OS X", "Linux", "Ubuntu", "Debian", "Fedora", "Red Hat",
             * "SuSE", "Android", "iOS" and "Windows Phone"
             *
             * @memberOf platform.os
             * @type string|null
             */
            'family': null,

            /**
             * The version of the OS.
             *
             * @memberOf platform.os
             * @type string|null
             */
            'version': null,

            /**
             * Returns the OS string.
             *
             * @memberOf platform.os
             * @returns {string} The OS string.
             */
            'toString': function() {
                return 'null';
            }
        };

        platform.parse = parse;
        platform.toString = toStringPlatform;

        if (platform.version) {
            description.unshift(version);
        }
        if (platform.name) {
            description.unshift(name);
        }
        if (os && name && !(os == String(os).split(' ')[0] && (os == name.split(' ')[0] || product))) {
            description.push(product ? '(' + os + ')' : 'on ' + os);
        }
        if (description.length) {
            platform.description = description.join(' ');
        }
        return platform;
    }

    /*--------------------------------------------------------------------------*/

    // Export platform.
    var platform = parse();

    // Some AMD build optimizers, like r.js, check for condition patterns like the following:
    if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
        // Expose platform on the global object to prevent errors when platform is
        // loaded by a script tag in the presence of an AMD loader.
        // See http://requirejs.org/docs/errors.html#mismatch for more details.
        root.platform = platform;

        // Define as an anonymous module so platform can be aliased through path mapping.
        define(function() {
            return platform;
        });
    }
    // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
    else if (freeExports && freeModule) {
        // Export for CommonJS support.
        forOwn(platform, function(value, key) {
            freeExports[key] = value;
        });
    } else {
        // Export to the global object.
        root.platform = platform;
    }
}.call(this));


/**
 *    ____       _   _     _____ _           _ _                _         
 *   |  _ \ __ _| |_| |__ |  ___(_)_ __   __| (_)_ __   __ _   (_)___     
 *   | |_) / _` | __| '_ \| |_  | | '_ \ / _` | | '_ \ / _` |  | / __|    
 *   |  __/ (_| | |_| | | |  _| | | | | | (_| | | | | | (_| |_ | \__ \    
 *   |_|   \__,_|\__|_| |_|_|   |_|_| |_|\__,_|_|_| |_|\__, (_)/ |___/    
 *                                                     |___/ |__/         
 *   https://github.com/qiao/PathFinding.js
 */

! function(e) {
    if ("object" == typeof exports) module.exports = e();
    else if ("function" == typeof define && define.amd) define(e);
    else {
        var f;
        "undefined" != typeof window ? f = window : "undefined" != typeof global ? f = global : "undefined" != typeof self && (f = self), f.PF = e()
    }
}(function() {
    var define, module, exports;
    return (function e(t, n, r) {
            function s(o, u) {
                if (!n[o]) {
                    if (!t[o]) {
                        var a = typeof require == "function" && require;
                        if (!u && a) return a(o, !0);
                        if (i) return i(o, !0);
                        throw new Error("Cannot find module '" + o + "'")
                    }
                    var f = n[o] = {
                        exports: {}
                    };
                    t[o][0].call(f.exports, function(e) {
                        var n = t[o][1][e];
                        return s(n ? n : e)
                    }, f, f.exports, e, t, n, r)
                }
                return n[o].exports
            }
            var i = typeof require == "function" && require;
            for (var o = 0; o < r.length; o++) s(r[o]);
            return s
        })({
            1: [function(_dereq_, module, exports) {
                module.exports = _dereq_('./lib/heap');

            }, {
                "./lib/heap": 2
            }],
            2: [function(_dereq_, module, exports) {
                // Generated by CoffeeScript 1.8.0
                (function() {
                    var Heap, defaultCmp, floor, heapify, heappop, heappush, heappushpop, heapreplace, insort, min, nlargest, nsmallest, updateItem, _siftdown, _siftup;

                    floor = Math.floor, min = Math.min;


                    /*
                    Default comparison function to be used
                     */

                    defaultCmp = function(x, y) {
                        if (x < y) {
                            return -1;
                        }
                        if (x > y) {
                            return 1;
                        }
                        return 0;
                    };


                    /*
                    Insert item x in list a, and keep it sorted assuming a is sorted.
  
                    If x is already in a, insert it to the right of the rightmost x.
  
                    Optional args lo (default 0) and hi (default a.length) bound the slice
                    of a to be searched.
                     */

                    insort = function(a, x, lo, hi, cmp) {
                        var mid;
                        if (lo == null) {
                            lo = 0;
                        }
                        if (cmp == null) {
                            cmp = defaultCmp;
                        }
                        if (lo < 0) {
                            throw new Error('lo must be non-negative');
                        }
                        if (hi == null) {
                            hi = a.length;
                        }
                        while (lo < hi) {
                            mid = floor((lo + hi) / 2);
                            if (cmp(x, a[mid]) < 0) {
                                hi = mid;
                            } else {
                                lo = mid + 1;
                            }
                        }
                        return ([].splice.apply(a, [lo, lo - lo].concat(x)), x);
                    };


                    /*
                    Push item onto heap, maintaining the heap invariant.
                     */

                    heappush = function(array, item, cmp) {
                        if (cmp == null) {
                            cmp = defaultCmp;
                        }
                        array.push(item);
                        return _siftdown(array, 0, array.length - 1, cmp);
                    };


                    /*
                    Pop the smallest item off the heap, maintaining the heap invariant.
                     */

                    heappop = function(array, cmp) {
                        var lastelt, returnitem;
                        if (cmp == null) {
                            cmp = defaultCmp;
                        }
                        lastelt = array.pop();
                        if (array.length) {
                            returnitem = array[0];
                            array[0] = lastelt;
                            _siftup(array, 0, cmp);
                        } else {
                            returnitem = lastelt;
                        }
                        return returnitem;
                    };


                    /*
                    Pop and return the current smallest value, and add the new item.
  
                    This is more efficient than heappop() followed by heappush(), and can be
                    more appropriate when using a fixed size heap. Note that the value
                    returned may be larger than item! That constrains reasonable use of
                    this routine unless written as part of a conditional replacement:
                        if item > array[0]
                          item = heapreplace(array, item)
                     */

                    heapreplace = function(array, item, cmp) {
                        var returnitem;
                        if (cmp == null) {
                            cmp = defaultCmp;
                        }
                        returnitem = array[0];
                        array[0] = item;
                        _siftup(array, 0, cmp);
                        return returnitem;
                    };


                    /*
                    Fast version of a heappush followed by a heappop.
                     */

                    heappushpop = function(array, item, cmp) {
                        var _ref;
                        if (cmp == null) {
                            cmp = defaultCmp;
                        }
                        if (array.length && cmp(array[0], item) < 0) {
                            _ref = [array[0], item], item = _ref[0], array[0] = _ref[1];
                            _siftup(array, 0, cmp);
                        }
                        return item;
                    };


                    /*
                    Transform list into a heap, in-place, in O(array.length) time.
                     */

                    heapify = function(array, cmp) {
                        var i, _i, _j, _len, _ref, _ref1, _results, _results1;
                        if (cmp == null) {
                            cmp = defaultCmp;
                        }
                        _ref1 = (function() {
                            _results1 = [];
                            for (var _j = 0, _ref = floor(array.length / 2); 0 <= _ref ? _j < _ref : _j > _ref; 0 <= _ref ? _j++ : _j--) {
                                _results1.push(_j);
                            }
                            return _results1;
                        }).apply(this).reverse();
                        _results = [];
                        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
                            i = _ref1[_i];
                            _results.push(_siftup(array, i, cmp));
                        }
                        return _results;
                    };


                    /*
                    Update the position of the given item in the heap.
                    This function should be called every time the item is being modified.
                     */

                    updateItem = function(array, item, cmp) {
                        var pos;
                        if (cmp == null) {
                            cmp = defaultCmp;
                        }
                        pos = array.indexOf(item);
                        if (pos === -1) {
                            return;
                        }
                        _siftdown(array, 0, pos, cmp);
                        return _siftup(array, pos, cmp);
                    };


                    /*
                    Find the n largest elements in a dataset.
                     */

                    nlargest = function(array, n, cmp) {
                        var elem, result, _i, _len, _ref;
                        if (cmp == null) {
                            cmp = defaultCmp;
                        }
                        result = array.slice(0, n);
                        if (!result.length) {
                            return result;
                        }
                        heapify(result, cmp);
                        _ref = array.slice(n);
                        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                            elem = _ref[_i];
                            heappushpop(result, elem, cmp);
                        }
                        return result.sort(cmp).reverse();
                    };


                    /*
                    Find the n smallest elements in a dataset.
                     */

                    nsmallest = function(array, n, cmp) {
                        var elem, i, los, result, _i, _j, _len, _ref, _ref1, _results;
                        if (cmp == null) {
                            cmp = defaultCmp;
                        }
                        if (n * 10 <= array.length) {
                            result = array.slice(0, n).sort(cmp);
                            if (!result.length) {
                                return result;
                            }
                            los = result[result.length - 1];
                            _ref = array.slice(n);
                            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                                elem = _ref[_i];
                                if (cmp(elem, los) < 0) {
                                    insort(result, elem, 0, null, cmp);
                                    result.pop();
                                    los = result[result.length - 1];
                                }
                            }
                            return result;
                        }
                        heapify(array, cmp);
                        _results = [];
                        for (i = _j = 0, _ref1 = min(n, array.length); 0 <= _ref1 ? _j < _ref1 : _j > _ref1; i = 0 <= _ref1 ? ++_j : --_j) {
                            _results.push(heappop(array, cmp));
                        }
                        return _results;
                    };

                    _siftdown = function(array, startpos, pos, cmp) {
                        var newitem, parent, parentpos;
                        if (cmp == null) {
                            cmp = defaultCmp;
                        }
                        newitem = array[pos];
                        while (pos > startpos) {
                            parentpos = (pos - 1) >> 1;
                            parent = array[parentpos];
                            if (cmp(newitem, parent) < 0) {
                                array[pos] = parent;
                                pos = parentpos;
                                continue;
                            }
                            break;
                        }
                        return array[pos] = newitem;
                    };

                    _siftup = function(array, pos, cmp) {
                        var childpos, endpos, newitem, rightpos, startpos;
                        if (cmp == null) {
                            cmp = defaultCmp;
                        }
                        endpos = array.length;
                        startpos = pos;
                        newitem = array[pos];
                        childpos = 2 * pos + 1;
                        while (childpos < endpos) {
                            rightpos = childpos + 1;
                            if (rightpos < endpos && !(cmp(array[childpos], array[rightpos]) < 0)) {
                                childpos = rightpos;
                            }
                            array[pos] = array[childpos];
                            pos = childpos;
                            childpos = 2 * pos + 1;
                        }
                        array[pos] = newitem;
                        return _siftdown(array, startpos, pos, cmp);
                    };

                    Heap = (function() {
                        Heap.push = heappush;

                        Heap.pop = heappop;

                        Heap.replace = heapreplace;

                        Heap.pushpop = heappushpop;

                        Heap.heapify = heapify;

                        Heap.updateItem = updateItem;

                        Heap.nlargest = nlargest;

                        Heap.nsmallest = nsmallest;

                        function Heap(cmp) {
                            this.cmp = cmp != null ? cmp : defaultCmp;
                            this.nodes = [];
                        }

                        Heap.prototype.push = function(x) {
                            return heappush(this.nodes, x, this.cmp);
                        };

                        Heap.prototype.pop = function() {
                            return heappop(this.nodes, this.cmp);
                        };

                        Heap.prototype.peek = function() {
                            return this.nodes[0];
                        };

                        Heap.prototype.contains = function(x) {
                            return this.nodes.indexOf(x) !== -1;
                        };

                        Heap.prototype.replace = function(x) {
                            return heapreplace(this.nodes, x, this.cmp);
                        };

                        Heap.prototype.pushpop = function(x) {
                            return heappushpop(this.nodes, x, this.cmp);
                        };

                        Heap.prototype.heapify = function() {
                            return heapify(this.nodes, this.cmp);
                        };

                        Heap.prototype.updateItem = function(x) {
                            return updateItem(this.nodes, x, this.cmp);
                        };

                        Heap.prototype.clear = function() {
                            return this.nodes = [];
                        };

                        Heap.prototype.empty = function() {
                            return this.nodes.length === 0;
                        };

                        Heap.prototype.size = function() {
                            return this.nodes.length;
                        };

                        Heap.prototype.clone = function() {
                            var heap;
                            heap = new Heap();
                            heap.nodes = this.nodes.slice(0);
                            return heap;
                        };

                        Heap.prototype.toArray = function() {
                            return this.nodes.slice(0);
                        };

                        Heap.prototype.insert = Heap.prototype.push;

                        Heap.prototype.top = Heap.prototype.peek;

                        Heap.prototype.front = Heap.prototype.peek;

                        Heap.prototype.has = Heap.prototype.contains;

                        Heap.prototype.copy = Heap.prototype.clone;

                        return Heap;

                    })();

                    if (typeof module !== "undefined" && module !== null ? module.exports : void 0) {
                        module.exports = Heap;
                    } else {
                        window.Heap = Heap;
                    }

                }).call(this);

            }, {}],
            3: [function(_dereq_, module, exports) {
                var DiagonalMovement = {
                    Always: 1,
                    Never: 2,
                    IfAtMostOneObstacle: 3,
                    OnlyWhenNoObstacles: 4
                };

                module.exports = DiagonalMovement;
            }, {}],
            4: [function(_dereq_, module, exports) {
                var Node = _dereq_('./Node');
                var DiagonalMovement = _dereq_('./DiagonalMovement');

                /**
                 * The Grid class, which serves as the encapsulation of the layout of the nodes.
                 * @constructor
                 * @param {number|Array<Array<(number|boolean)>>} width_or_matrix Number of columns of the grid, or matrix
                 * @param {number} height Number of rows of the grid.
                 * @param {Array<Array<(number|boolean)>>} [matrix] - A 0-1 matrix
                 *     representing the walkable status of the nodes(0 or false for walkable).
                 *     If the matrix is not supplied, all the nodes will be walkable.  */
                function Grid(width_or_matrix, height, matrix) {
                    var width;

                    if (typeof width_or_matrix !== 'object') {
                        width = width_or_matrix;
                    } else {
                        height = width_or_matrix.length;
                        width = width_or_matrix[0].length;
                        matrix = width_or_matrix;
                    }

                    /**
                     * The number of columns of the grid.
                     * @type number
                     */
                    this.width = width;
                    /**
                     * The number of rows of the grid.
                     * @type number
                     */
                    this.height = height;

                    /**
                     * A 2D array of nodes.
                     */
                    this.nodes = this._buildNodes(width, height, matrix);
                }

                /**
                 * Build and return the nodes.
                 * @private
                 * @param {number} width
                 * @param {number} height
                 * @param {Array<Array<number|boolean>>} [matrix] - A 0-1 matrix representing
                 *     the walkable status of the nodes.
                 * @see Grid
                 */
                Grid.prototype._buildNodes = function(width, height, matrix) {
                    var i, j,
                        nodes = new Array(height);

                    for (i = 0; i < height; ++i) {
                        nodes[i] = new Array(width);
                        for (j = 0; j < width; ++j) {
                            nodes[i][j] = new Node(j, i);
                        }
                    }


                    if (matrix === undefined) {
                        return nodes;
                    }

                    if (matrix.length !== height || matrix[0].length !== width) {
                        throw new Error('Matrix size does not fit');
                    }

                    for (i = 0; i < height; ++i) {
                        for (j = 0; j < width; ++j) {
                            if (matrix[i][j]) {
                                // 0, false, null will be walkable
                                // while others will be un-walkable
                                nodes[i][j].walkable = false;
                            }
                        }
                    }

                    return nodes;
                };


                Grid.prototype.getNodeAt = function(x, y) {
                    return this.nodes[y][x];
                };


                /**
                 * Determine whether the node at the given position is walkable.
                 * (Also returns false if the position is outside the grid.)
                 * @param {number} x - The x coordinate of the node.
                 * @param {number} y - The y coordinate of the node.
                 * @return {boolean} - The walkability of the node.
                 */
                Grid.prototype.isWalkableAt = function(x, y) {
                    return this.isInside(x, y) && this.nodes[y][x].walkable;
                };


                /**
                 * Determine whether the position is inside the grid.
                 * XXX: `grid.isInside(x, y)` is wierd to read.
                 * It should be `(x, y) is inside grid`, but I failed to find a better
                 * name for this method.
                 * @param {number} x
                 * @param {number} y
                 * @return {boolean}
                 */
                Grid.prototype.isInside = function(x, y) {
                    return (x >= 0 && x < this.width) && (y >= 0 && y < this.height);
                };


                /**
                 * Set whether the node on the given position is walkable.
                 * NOTE: throws exception if the coordinate is not inside the grid.
                 * @param {number} x - The x coordinate of the node.
                 * @param {number} y - The y coordinate of the node.
                 * @param {boolean} walkable - Whether the position is walkable.
                 */
                Grid.prototype.setWalkableAt = function(x, y, walkable) {
                    this.nodes[y][x].walkable = walkable;
                };


                /**
                 * Get the neighbors of the given node.
                 *
                 *     offsets      diagonalOffsets:
                 *  +---+---+---+    +---+---+---+
                 *  |   | 0 |   |    | 0 |   | 1 |
                 *  +---+---+---+    +---+---+---+
                 *  | 3 |   | 1 |    |   |   |   |
                 *  +---+---+---+    +---+---+---+
                 *  |   | 2 |   |    | 3 |   | 2 |
                 *  +---+---+---+    +---+---+---+
                 *
                 *  When allowDiagonal is true, if offsets[i] is valid, then
                 *  diagonalOffsets[i] and
                 *  diagonalOffsets[(i + 1) % 4] is valid.
                 * @param {Node} node
                 * @param {DiagonalMovement} diagonalMovement
                 */
                Grid.prototype.getNeighbors = function(node, diagonalMovement) {
                    var x = node.x,
                        y = node.y,
                        neighbors = [],
                        s0 = false,
                        d0 = false,
                        s1 = false,
                        d1 = false,
                        s2 = false,
                        d2 = false,
                        s3 = false,
                        d3 = false,
                        nodes = this.nodes;

                    // ↑
                    if (this.isWalkableAt(x, y - 1)) {
                        neighbors.push(nodes[y - 1][x]);
                        s0 = true;
                    }
                    // →
                    if (this.isWalkableAt(x + 1, y)) {
                        neighbors.push(nodes[y][x + 1]);
                        s1 = true;
                    }
                    // ↓
                    if (this.isWalkableAt(x, y + 1)) {
                        neighbors.push(nodes[y + 1][x]);
                        s2 = true;
                    }
                    // ←
                    if (this.isWalkableAt(x - 1, y)) {
                        neighbors.push(nodes[y][x - 1]);
                        s3 = true;
                    }

                    if (diagonalMovement === DiagonalMovement.Never) {
                        return neighbors;
                    }

                    if (diagonalMovement === DiagonalMovement.OnlyWhenNoObstacles) {
                        d0 = s3 && s0;
                        d1 = s0 && s1;
                        d2 = s1 && s2;
                        d3 = s2 && s3;
                    } else if (diagonalMovement === DiagonalMovement.IfAtMostOneObstacle) {
                        d0 = s3 || s0;
                        d1 = s0 || s1;
                        d2 = s1 || s2;
                        d3 = s2 || s3;
                    } else if (diagonalMovement === DiagonalMovement.Always) {
                        d0 = true;
                        d1 = true;
                        d2 = true;
                        d3 = true;
                    } else {
                        throw new Error('Incorrect value of diagonalMovement');
                    }

                    // ↖
                    if (d0 && this.isWalkableAt(x - 1, y - 1)) {
                        neighbors.push(nodes[y - 1][x - 1]);
                    }
                    // ↗
                    if (d1 && this.isWalkableAt(x + 1, y - 1)) {
                        neighbors.push(nodes[y - 1][x + 1]);
                    }
                    // ↘
                    if (d2 && this.isWalkableAt(x + 1, y + 1)) {
                        neighbors.push(nodes[y + 1][x + 1]);
                    }
                    // ↙
                    if (d3 && this.isWalkableAt(x - 1, y + 1)) {
                        neighbors.push(nodes[y + 1][x - 1]);
                    }

                    return neighbors;
                };


                /**
                 * Get a clone of this grid.
                 * @return {Grid} Cloned grid.
                 */
                Grid.prototype.clone = function() {
                    var i, j,

                        width = this.width,
                        height = this.height,
                        thisNodes = this.nodes,

                        newGrid = new Grid(width, height),
                        newNodes = new Array(height);

                    for (i = 0; i < height; ++i) {
                        newNodes[i] = new Array(width);
                        for (j = 0; j < width; ++j) {
                            newNodes[i][j] = new Node(j, i, thisNodes[i][j].walkable);
                        }
                    }

                    newGrid.nodes = newNodes;

                    return newGrid;
                };

                module.exports = Grid;

            }, {
                "./DiagonalMovement": 3,
                "./Node": 6
            }],
            5: [function(_dereq_, module, exports) {
                /**
                 * @namespace PF.Heuristic
                 * @description A collection of heuristic functions.
                 */
                module.exports = {

                    /**
                     * Manhattan distance.
                     * @param {number} dx - Difference in x.
                     * @param {number} dy - Difference in y.
                     * @return {number} dx + dy
                     */
                    manhattan: function(dx, dy) {
                        return dx + dy;
                    },

                    /**
                     * Euclidean distance.
                     * @param {number} dx - Difference in x.
                     * @param {number} dy - Difference in y.
                     * @return {number} sqrt(dx * dx + dy * dy)
                     */
                    euclidean: function(dx, dy) {
                        return Math.sqrt(dx * dx + dy * dy);
                    },

                    /**
                     * Octile distance.
                     * @param {number} dx - Difference in x.
                     * @param {number} dy - Difference in y.
                     * @return {number} sqrt(dx * dx + dy * dy) for grids
                     */
                    octile: function(dx, dy) {
                        var F = Math.SQRT2 - 1;
                        return (dx < dy) ? F * dx + dy : F * dy + dx;
                    },

                    /**
                     * Chebyshev distance.
                     * @param {number} dx - Difference in x.
                     * @param {number} dy - Difference in y.
                     * @return {number} max(dx, dy)
                     */
                    chebyshev: function(dx, dy) {
                        return Math.max(dx, dy);
                    }

                };

            }, {}],
            6: [function(_dereq_, module, exports) {
                /**
                 * A node in grid. 
                 * This class holds some basic information about a node and custom 
                 * attributes may be added, depending on the algorithms' needs.
                 * @constructor
                 * @param {number} x - The x coordinate of the node on the grid.
                 * @param {number} y - The y coordinate of the node on the grid.
                 * @param {boolean} [walkable] - Whether this node is walkable.
                 */
                function Node(x, y, walkable) {
                    /**
                     * The x coordinate of the node on the grid.
                     * @type number
                     */
                    this.x = x;
                    /**
                     * The y coordinate of the node on the grid.
                     * @type number
                     */
                    this.y = y;
                    /**
                     * Whether this node can be walked through.
                     * @type boolean
                     */
                    this.walkable = (walkable === undefined ? true : walkable);
                }

                module.exports = Node;

            }, {}],
            7: [function(_dereq_, module, exports) {
                /**
                 * Backtrace according to the parent records and return the path.
                 * (including both start and end nodes)
                 * @param {Node} node End node
                 * @return {Array<Array<number>>} the path
                 */
                function backtrace(node) {
                    var path = [
                        [node.x, node.y]
                    ];
                    while (node.parent) {
                        node = node.parent;
                        path.push([node.x, node.y]);
                    }
                    return path.reverse();
                }
                exports.backtrace = backtrace;

                /**
                 * Backtrace from start and end node, and return the path.
                 * (including both start and end nodes)
                 * @param {Node}
                 * @param {Node}
                 */
                function biBacktrace(nodeA, nodeB) {
                    var pathA = backtrace(nodeA),
                        pathB = backtrace(nodeB);
                    return pathA.concat(pathB.reverse());
                }
                exports.biBacktrace = biBacktrace;

                /**
                 * Compute the length of the path.
                 * @param {Array<Array<number>>} path The path
                 * @return {number} The length of the path
                 */
                function pathLength(path) {
                    var i, sum = 0,
                        a, b, dx, dy;
                    for (i = 1; i < path.length; ++i) {
                        a = path[i - 1];
                        b = path[i];
                        dx = a[0] - b[0];
                        dy = a[1] - b[1];
                        sum += Math.sqrt(dx * dx + dy * dy);
                    }
                    return sum;
                }
                exports.pathLength = pathLength;


                /**
                 * Given the start and end coordinates, return all the coordinates lying
                 * on the line formed by these coordinates, based on Bresenham's algorithm.
                 * http://en.wikipedia.org/wiki/Bresenham's_line_algorithm#Simplification
                 * @param {number} x0 Start x coordinate
                 * @param {number} y0 Start y coordinate
                 * @param {number} x1 End x coordinate
                 * @param {number} y1 End y coordinate
                 * @return {Array<Array<number>>} The coordinates on the line
                 */
                function interpolate(x0, y0, x1, y1) {
                    var abs = Math.abs,
                        line = [],
                        sx, sy, dx, dy, err, e2;

                    dx = abs(x1 - x0);
                    dy = abs(y1 - y0);

                    sx = (x0 < x1) ? 1 : -1;
                    sy = (y0 < y1) ? 1 : -1;

                    err = dx - dy;

                    while (true) {
                        line.push([x0, y0]);

                        if (x0 === x1 && y0 === y1) {
                            break;
                        }

                        e2 = 2 * err;
                        if (e2 > -dy) {
                            err = err - dy;
                            x0 = x0 + sx;
                        }
                        if (e2 < dx) {
                            err = err + dx;
                            y0 = y0 + sy;
                        }
                    }

                    return line;
                }
                exports.interpolate = interpolate;


                /**
                 * Given a compressed path, return a new path that has all the segments
                 * in it interpolated.
                 * @param {Array<Array<number>>} path The path
                 * @return {Array<Array<number>>} expanded path
                 */
                function expandPath(path) {
                    var expanded = [],
                        len = path.length,
                        coord0, coord1,
                        interpolated,
                        interpolatedLen,
                        i, j;

                    if (len < 2) {
                        return expanded;
                    }

                    for (i = 0; i < len - 1; ++i) {
                        coord0 = path[i];
                        coord1 = path[i + 1];

                        interpolated = interpolate(coord0[0], coord0[1], coord1[0], coord1[1]);
                        interpolatedLen = interpolated.length;
                        for (j = 0; j < interpolatedLen - 1; ++j) {
                            expanded.push(interpolated[j]);
                        }
                    }
                    expanded.push(path[len - 1]);

                    return expanded;
                }
                exports.expandPath = expandPath;


                /**
                 * Smoothen the give path.
                 * The original path will not be modified; a new path will be returned.
                 * @param {PF.Grid} grid
                 * @param {Array<Array<number>>} path The path
                 */
                function smoothenPath(grid, path) {
                    var len = path.length,
                        x0 = path[0][0], // path start x
                        y0 = path[0][1], // path start y
                        x1 = path[len - 1][0], // path end x
                        y1 = path[len - 1][1], // path end y
                        sx, sy, // current start coordinate
                        ex, ey, // current end coordinate
                        newPath,
                        i, j, coord, line, testCoord, blocked;

                    sx = x0;
                    sy = y0;
                    newPath = [
                        [sx, sy]
                    ];

                    for (i = 2; i < len; ++i) {
                        coord = path[i];
                        ex = coord[0];
                        ey = coord[1];
                        line = interpolate(sx, sy, ex, ey);

                        blocked = false;
                        for (j = 1; j < line.length; ++j) {
                            testCoord = line[j];

                            if (!grid.isWalkableAt(testCoord[0], testCoord[1])) {
                                blocked = true;
                                break;
                            }
                        }
                        if (blocked) {
                            lastValidCoord = path[i - 1];
                            newPath.push(lastValidCoord);
                            sx = lastValidCoord[0];
                            sy = lastValidCoord[1];
                        }
                    }
                    newPath.push([x1, y1]);

                    return newPath;
                }
                exports.smoothenPath = smoothenPath;


                /**
                 * Compress a path, remove redundant nodes without altering the shape
                 * The original path is not modified
                 * @param {Array<Array<number>>} path The path
                 * @return {Array<Array<number>>} The compressed path
                 */
                function compressPath(path) {

                    // nothing to compress
                    if (path.length < 3) {
                        return path;
                    }

                    var compressed = [],
                        sx = path[0][0], // start x
                        sy = path[0][1], // start y
                        px = path[1][0], // second point x
                        py = path[1][1], // second point y
                        dx = px - sx, // direction between the two points
                        dy = py - sy, // direction between the two points
                        lx, ly,
                        ldx, ldy,
                        sq, i;

                    // normalize the direction
                    sq = Math.sqrt(dx * dx + dy * dy);
                    dx /= sq;
                    dy /= sq;

                    // start the new path
                    compressed.push([sx, sy]);

                    for (i = 2; i < path.length; i++) {

                        // store the last point
                        lx = px;
                        ly = py;

                        // store the last direction
                        ldx = dx;
                        ldy = dy;

                        // next point
                        px = path[i][0];
                        py = path[i][1];

                        // next direction
                        dx = px - lx;
                        dy = py - ly;

                        // normalize
                        sq = Math.sqrt(dx * dx + dy * dy);
                        dx /= sq;
                        dy /= sq;

                        // if the direction has changed, store the point
                        if (dx !== ldx || dy !== ldy) {
                            compressed.push([lx, ly]);
                        }
                    }

                    // store the last point
                    compressed.push([px, py]);

                    return compressed;
                }
                exports.compressPath = compressPath;

            }, {}],
            8: [function(_dereq_, module, exports) {
                module.exports = {
                    'Heap': _dereq_('heap'),
                    'Node': _dereq_('./core/Node'),
                    'Grid': _dereq_('./core/Grid'),
                    'Util': _dereq_('./core/Util'),
                    'DiagonalMovement': _dereq_('./core/DiagonalMovement'),
                    'Heuristic': _dereq_('./core/Heuristic'),
                    'AStarFinder': _dereq_('./finders/AStarFinder'),
                    'BestFirstFinder': _dereq_('./finders/BestFirstFinder'),
                    'BreadthFirstFinder': _dereq_('./finders/BreadthFirstFinder'),
                    'DijkstraFinder': _dereq_('./finders/DijkstraFinder'),
                    'BiAStarFinder': _dereq_('./finders/BiAStarFinder'),
                    'BiBestFirstFinder': _dereq_('./finders/BiBestFirstFinder'),
                    'BiBreadthFirstFinder': _dereq_('./finders/BiBreadthFirstFinder'),
                    'BiDijkstraFinder': _dereq_('./finders/BiDijkstraFinder'),
                    'IDAStarFinder': _dereq_('./finders/IDAStarFinder'),
                    'JumpPointFinder': _dereq_('./finders/JumpPointFinder'),
                };

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
                "heap": 1
            }],
            9: [function(_dereq_, module, exports) {
                var Heap = _dereq_('heap');
                var Util = _dereq_('../core/Util');
                var Heuristic = _dereq_('../core/Heuristic');
                var DiagonalMovement = _dereq_('../core/DiagonalMovement');

                /**
                 * A* path-finder. Based upon https://github.com/bgrins/javascript-astar
                 * @constructor
                 * @param {Object} opt
                 * @param {boolean} opt.allowDiagonal Whether diagonal movement is allowed.
                 *     Deprecated, use diagonalMovement instead.
                 * @param {boolean} opt.dontCrossCorners Disallow diagonal movement touching 
                 *     block corners. Deprecated, use diagonalMovement instead.
                 * @param {DiagonalMovement} opt.diagonalMovement Allowed diagonal movement.
                 * @param {function} opt.heuristic Heuristic function to estimate the distance
                 *     (defaults to manhattan).
                 * @param {number} opt.weight Weight to apply to the heuristic to allow for
                 *     suboptimal paths, in order to speed up the search.
                 */
                function AStarFinder(opt) {
                    opt = opt || {};
                    this.allowDiagonal = opt.allowDiagonal;
                    this.dontCrossCorners = opt.dontCrossCorners;
                    this.heuristic = opt.heuristic || Heuristic.manhattan;
                    this.weight = opt.weight || 1;
                    this.diagonalMovement = opt.diagonalMovement;

                    if (!this.diagonalMovement) {
                        if (!this.allowDiagonal) {
                            this.diagonalMovement = DiagonalMovement.Never;
                        } else {
                            if (this.dontCrossCorners) {
                                this.diagonalMovement = DiagonalMovement.OnlyWhenNoObstacles;
                            } else {
                                this.diagonalMovement = DiagonalMovement.IfAtMostOneObstacle;
                            }
                        }
                    }

                    // When diagonal movement is allowed the manhattan heuristic is not
                    //admissible. It should be octile instead
                    if (this.diagonalMovement === DiagonalMovement.Never) {
                        this.heuristic = opt.heuristic || Heuristic.manhattan;
                    } else {
                        this.heuristic = opt.heuristic || Heuristic.octile;
                    }
                }

                /**
                 * Find and return the the path.
                 * @return {Array<Array<number>>} The path, including both start and
                 *     end positions.
                 */
                AStarFinder.prototype.findPath = function(startX, startY, endX, endY, grid) {
                    var openList = new Heap(function(nodeA, nodeB) {
                            return nodeA.f - nodeB.f;
                        }),
                        startNode = grid.getNodeAt(startX, startY),
                        endNode = grid.getNodeAt(endX, endY),
                        heuristic = this.heuristic,
                        diagonalMovement = this.diagonalMovement,
                        weight = this.weight,
                        abs = Math.abs,
                        SQRT2 = Math.SQRT2,
                        node, neighbors, neighbor, i, l, x, y, ng;

                    // set the `g` and `f` value of the start node to be 0
                    startNode.g = 0;
                    startNode.f = 0;

                    // push the start node into the open list
                    openList.push(startNode);
                    startNode.opened = true;

                    // while the open list is not empty
                    while (!openList.empty()) {
                        // pop the position of node which has the minimum `f` value.
                        node = openList.pop();
                        node.closed = true;

                        // if reached the end position, construct the path and return it
                        if (node === endNode) {
                            return Util.backtrace(endNode);
                        }

                        // get neigbours of the current node
                        neighbors = grid.getNeighbors(node, diagonalMovement);
                        for (i = 0, l = neighbors.length; i < l; ++i) {
                            neighbor = neighbors[i];

                            if (neighbor.closed) {
                                continue;
                            }

                            x = neighbor.x;
                            y = neighbor.y;

                            // get the distance between current node and the neighbor
                            // and calculate the next g score
                            ng = node.g + ((x - node.x === 0 || y - node.y === 0) ? 1 : SQRT2);

                            // check if the neighbor has not been inspected yet, or
                            // can be reached with smaller cost from the current node
                            if (!neighbor.opened || ng < neighbor.g) {
                                neighbor.g = ng;
                                neighbor.h = neighbor.h || weight * heuristic(abs(x - endX), abs(y - endY));
                                neighbor.f = neighbor.g + neighbor.h;
                                neighbor.parent = node;

                                if (!neighbor.opened) {
                                    openList.push(neighbor);
                                    neighbor.opened = true;
                                } else {
                                    // the neighbor can be reached with smaller cost.
                                    // Since its f value has been updated, we have to
                                    // update its position in the open list
                                    openList.updateItem(neighbor);
                                }
                            }
                        } // end for each neighbor
                    } // end while not open list empty

                    // fail to find the path
                    return [];
                };

                module.exports = AStarFinder;

            }, {
                "../core/DiagonalMovement": 3,
                "../core/Heuristic": 5,
                "../core/Util": 7,
                "heap": 1
            }],
            10: [function(_dereq_, module, exports) {
                var AStarFinder = _dereq_('./AStarFinder');

                /**
                 * Best-First-Search path-finder.
                 * @constructor
                 * @extends AStarFinder
                 * @param {Object} opt
                 * @param {boolean} opt.allowDiagonal Whether diagonal movement is allowed.
                 *     Deprecated, use diagonalMovement instead.
                 * @param {boolean} opt.dontCrossCorners Disallow diagonal movement touching
                 *     block corners. Deprecated, use diagonalMovement instead.
                 * @param {DiagonalMovement} opt.diagonalMovement Allowed diagonal movement.
                 * @param {function} opt.heuristic Heuristic function to estimate the distance
                 *     (defaults to manhattan).
                 */
                function BestFirstFinder(opt) {
                    AStarFinder.call(this, opt);

                    var orig = this.heuristic;
                    this.heuristic = function(dx, dy) {
                        return orig(dx, dy) * 1000000;
                    };
                }

                BestFirstFinder.prototype = new AStarFinder();
                BestFirstFinder.prototype.constructor = BestFirstFinder;

                module.exports = BestFirstFinder;

            }, {
                "./AStarFinder": 9
            }],
            11: [function(_dereq_, module, exports) {
                var Heap = _dereq_('heap');
                var Util = _dereq_('../core/Util');
                var Heuristic = _dereq_('../core/Heuristic');
                var DiagonalMovement = _dereq_('../core/DiagonalMovement');

                /**
                 * A* path-finder.
                 * based upon https://github.com/bgrins/javascript-astar
                 * @constructor
                 * @param {Object} opt
                 * @param {boolean} opt.allowDiagonal Whether diagonal movement is allowed.
                 *     Deprecated, use diagonalMovement instead.
                 * @param {boolean} opt.dontCrossCorners Disallow diagonal movement touching
                 *     block corners. Deprecated, use diagonalMovement instead.
                 * @param {DiagonalMovement} opt.diagonalMovement Allowed diagonal movement.
                 * @param {function} opt.heuristic Heuristic function to estimate the distance
                 *     (defaults to manhattan).
                 * @param {number} opt.weight Weight to apply to the heuristic to allow for
                 *     suboptimal paths, in order to speed up the search.
                 */
                function BiAStarFinder(opt) {
                    opt = opt || {};
                    this.allowDiagonal = opt.allowDiagonal;
                    this.dontCrossCorners = opt.dontCrossCorners;
                    this.diagonalMovement = opt.diagonalMovement;
                    this.heuristic = opt.heuristic || Heuristic.manhattan;
                    this.weight = opt.weight || 1;

                    if (!this.diagonalMovement) {
                        if (!this.allowDiagonal) {
                            this.diagonalMovement = DiagonalMovement.Never;
                        } else {
                            if (this.dontCrossCorners) {
                                this.diagonalMovement = DiagonalMovement.OnlyWhenNoObstacles;
                            } else {
                                this.diagonalMovement = DiagonalMovement.IfAtMostOneObstacle;
                            }
                        }
                    }

                    //When diagonal movement is allowed the manhattan heuristic is not admissible
                    //It should be octile instead
                    if (this.diagonalMovement === DiagonalMovement.Never) {
                        this.heuristic = opt.heuristic || Heuristic.manhattan;
                    } else {
                        this.heuristic = opt.heuristic || Heuristic.octile;
                    }
                }

                /**
                 * Find and return the the path.
                 * @return {Array<Array<number>>} The path, including both start and
                 *     end positions.
                 */
                BiAStarFinder.prototype.findPath = function(startX, startY, endX, endY, grid) {
                    var cmp = function(nodeA, nodeB) {
                            return nodeA.f - nodeB.f;
                        },
                        startOpenList = new Heap(cmp),
                        endOpenList = new Heap(cmp),
                        startNode = grid.getNodeAt(startX, startY),
                        endNode = grid.getNodeAt(endX, endY),
                        heuristic = this.heuristic,
                        diagonalMovement = this.diagonalMovement,
                        weight = this.weight,
                        abs = Math.abs,
                        SQRT2 = Math.SQRT2,
                        node, neighbors, neighbor, i, l, x, y, ng,
                        BY_START = 1,
                        BY_END = 2;

                    // set the `g` and `f` value of the start node to be 0
                    // and push it into the start open list
                    startNode.g = 0;
                    startNode.f = 0;
                    startOpenList.push(startNode);
                    startNode.opened = BY_START;

                    // set the `g` and `f` value of the end node to be 0
                    // and push it into the open open list
                    endNode.g = 0;
                    endNode.f = 0;
                    endOpenList.push(endNode);
                    endNode.opened = BY_END;

                    // while both the open lists are not empty
                    while (!startOpenList.empty() && !endOpenList.empty()) {

                        // pop the position of start node which has the minimum `f` value.
                        node = startOpenList.pop();
                        node.closed = true;

                        // get neigbours of the current node
                        neighbors = grid.getNeighbors(node, diagonalMovement);
                        for (i = 0, l = neighbors.length; i < l; ++i) {
                            neighbor = neighbors[i];

                            if (neighbor.closed) {
                                continue;
                            }
                            if (neighbor.opened === BY_END) {
                                return Util.biBacktrace(node, neighbor);
                            }

                            x = neighbor.x;
                            y = neighbor.y;

                            // get the distance between current node and the neighbor
                            // and calculate the next g score
                            ng = node.g + ((x - node.x === 0 || y - node.y === 0) ? 1 : SQRT2);

                            // check if the neighbor has not been inspected yet, or
                            // can be reached with smaller cost from the current node
                            if (!neighbor.opened || ng < neighbor.g) {
                                neighbor.g = ng;
                                neighbor.h = neighbor.h ||
                                    weight * heuristic(abs(x - endX), abs(y - endY));
                                neighbor.f = neighbor.g + neighbor.h;
                                neighbor.parent = node;

                                if (!neighbor.opened) {
                                    startOpenList.push(neighbor);
                                    neighbor.opened = BY_START;
                                } else {
                                    // the neighbor can be reached with smaller cost.
                                    // Since its f value has been updated, we have to
                                    // update its position in the open list
                                    startOpenList.updateItem(neighbor);
                                }
                            }
                        } // end for each neighbor


                        // pop the position of end node which has the minimum `f` value.
                        node = endOpenList.pop();
                        node.closed = true;

                        // get neigbours of the current node
                        neighbors = grid.getNeighbors(node, diagonalMovement);
                        for (i = 0, l = neighbors.length; i < l; ++i) {
                            neighbor = neighbors[i];

                            if (neighbor.closed) {
                                continue;
                            }
                            if (neighbor.opened === BY_START) {
                                return Util.biBacktrace(neighbor, node);
                            }

                            x = neighbor.x;
                            y = neighbor.y;

                            // get the distance between current node and the neighbor
                            // and calculate the next g score
                            ng = node.g + ((x - node.x === 0 || y - node.y === 0) ? 1 : SQRT2);

                            // check if the neighbor has not been inspected yet, or
                            // can be reached with smaller cost from the current node
                            if (!neighbor.opened || ng < neighbor.g) {
                                neighbor.g = ng;
                                neighbor.h = neighbor.h ||
                                    weight * heuristic(abs(x - startX), abs(y - startY));
                                neighbor.f = neighbor.g + neighbor.h;
                                neighbor.parent = node;

                                if (!neighbor.opened) {
                                    endOpenList.push(neighbor);
                                    neighbor.opened = BY_END;
                                } else {
                                    // the neighbor can be reached with smaller cost.
                                    // Since its f value has been updated, we have to
                                    // update its position in the open list
                                    endOpenList.updateItem(neighbor);
                                }
                            }
                        } // end for each neighbor
                    } // end while not open list empty

                    // fail to find the path
                    return [];
                };

                module.exports = BiAStarFinder;

            }, {
                "../core/DiagonalMovement": 3,
                "../core/Heuristic": 5,
                "../core/Util": 7,
                "heap": 1
            }],
            12: [function(_dereq_, module, exports) {
                var BiAStarFinder = _dereq_('./BiAStarFinder');

                /**
                 * Bi-direcitional Best-First-Search path-finder.
                 * @constructor
                 * @extends BiAStarFinder
                 * @param {Object} opt
                 * @param {boolean} opt.allowDiagonal Whether diagonal movement is allowed.
                 *     Deprecated, use diagonalMovement instead.
                 * @param {boolean} opt.dontCrossCorners Disallow diagonal movement touching
                 *     block corners. Deprecated, use diagonalMovement instead.
                 * @param {DiagonalMovement} opt.diagonalMovement Allowed diagonal movement.
                 * @param {function} opt.heuristic Heuristic function to estimate the distance
                 *     (defaults to manhattan).
                 */
                function BiBestFirstFinder(opt) {
                    BiAStarFinder.call(this, opt);

                    var orig = this.heuristic;
                    this.heuristic = function(dx, dy) {
                        return orig(dx, dy) * 1000000;
                    };
                }

                BiBestFirstFinder.prototype = new BiAStarFinder();
                BiBestFirstFinder.prototype.constructor = BiBestFirstFinder;

                module.exports = BiBestFirstFinder;

            }, {
                "./BiAStarFinder": 11
            }],
            13: [function(_dereq_, module, exports) {
                var Util = _dereq_('../core/Util');
                var DiagonalMovement = _dereq_('../core/DiagonalMovement');

                /**
                 * Bi-directional Breadth-First-Search path finder.
                 * @constructor
                 * @param {object} opt
                 * @param {boolean} opt.allowDiagonal Whether diagonal movement is allowed.
                 *     Deprecated, use diagonalMovement instead.
                 * @param {boolean} opt.dontCrossCorners Disallow diagonal movement touching
                 *     block corners. Deprecated, use diagonalMovement instead.
                 * @param {DiagonalMovement} opt.diagonalMovement Allowed diagonal movement.
                 */
                function BiBreadthFirstFinder(opt) {
                    opt = opt || {};
                    this.allowDiagonal = opt.allowDiagonal;
                    this.dontCrossCorners = opt.dontCrossCorners;
                    this.diagonalMovement = opt.diagonalMovement;

                    if (!this.diagonalMovement) {
                        if (!this.allowDiagonal) {
                            this.diagonalMovement = DiagonalMovement.Never;
                        } else {
                            if (this.dontCrossCorners) {
                                this.diagonalMovement = DiagonalMovement.OnlyWhenNoObstacles;
                            } else {
                                this.diagonalMovement = DiagonalMovement.IfAtMostOneObstacle;
                            }
                        }
                    }
                }


                /**
                 * Find and return the the path.
                 * @return {Array<Array<number>>} The path, including both start and
                 *     end positions.
                 */
                BiBreadthFirstFinder.prototype.findPath = function(startX, startY, endX, endY, grid) {
                    var startNode = grid.getNodeAt(startX, startY),
                        endNode = grid.getNodeAt(endX, endY),
                        startOpenList = [],
                        endOpenList = [],
                        neighbors, neighbor, node,
                        diagonalMovement = this.diagonalMovement,
                        BY_START = 0,
                        BY_END = 1,
                        i, l;

                    // push the start and end nodes into the queues
                    startOpenList.push(startNode);
                    startNode.opened = true;
                    startNode.by = BY_START;

                    endOpenList.push(endNode);
                    endNode.opened = true;
                    endNode.by = BY_END;

                    // while both the queues are not empty
                    while (startOpenList.length && endOpenList.length) {

                        // expand start open list

                        node = startOpenList.shift();
                        node.closed = true;

                        neighbors = grid.getNeighbors(node, diagonalMovement);
                        for (i = 0, l = neighbors.length; i < l; ++i) {
                            neighbor = neighbors[i];

                            if (neighbor.closed) {
                                continue;
                            }
                            if (neighbor.opened) {
                                // if this node has been inspected by the reversed search,
                                // then a path is found.
                                if (neighbor.by === BY_END) {
                                    return Util.biBacktrace(node, neighbor);
                                }
                                continue;
                            }
                            startOpenList.push(neighbor);
                            neighbor.parent = node;
                            neighbor.opened = true;
                            neighbor.by = BY_START;
                        }

                        // expand end open list

                        node = endOpenList.shift();
                        node.closed = true;

                        neighbors = grid.getNeighbors(node, diagonalMovement);
                        for (i = 0, l = neighbors.length; i < l; ++i) {
                            neighbor = neighbors[i];

                            if (neighbor.closed) {
                                continue;
                            }
                            if (neighbor.opened) {
                                if (neighbor.by === BY_START) {
                                    return Util.biBacktrace(neighbor, node);
                                }
                                continue;
                            }
                            endOpenList.push(neighbor);
                            neighbor.parent = node;
                            neighbor.opened = true;
                            neighbor.by = BY_END;
                        }
                    }

                    // fail to find the path
                    return [];
                };

                module.exports = BiBreadthFirstFinder;

            }, {
                "../core/DiagonalMovement": 3,
                "../core/Util": 7
            }],
            14: [function(_dereq_, module, exports) {
                var BiAStarFinder = _dereq_('./BiAStarFinder');

                /**
                 * Bi-directional Dijkstra path-finder.
                 * @constructor
                 * @extends BiAStarFinder
                 * @param {Object} opt
                 * @param {boolean} opt.allowDiagonal Whether diagonal movement is allowed.
                 *     Deprecated, use diagonalMovement instead.
                 * @param {boolean} opt.dontCrossCorners Disallow diagonal movement touching
                 *     block corners. Deprecated, use diagonalMovement instead.
                 * @param {DiagonalMovement} opt.diagonalMovement Allowed diagonal movement.
                 */
                function BiDijkstraFinder(opt) {
                    BiAStarFinder.call(this, opt);
                    this.heuristic = function(dx, dy) {
                        return 0;
                    };
                }

                BiDijkstraFinder.prototype = new BiAStarFinder();
                BiDijkstraFinder.prototype.constructor = BiDijkstraFinder;

                module.exports = BiDijkstraFinder;

            }, {
                "./BiAStarFinder": 11
            }],
            15: [function(_dereq_, module, exports) {
                var Util = _dereq_('../core/Util');
                var DiagonalMovement = _dereq_('../core/DiagonalMovement');

                /**
                 * Breadth-First-Search path finder.
                 * @constructor
                 * @param {Object} opt
                 * @param {boolean} opt.allowDiagonal Whether diagonal movement is allowed.
                 *     Deprecated, use diagonalMovement instead.
                 * @param {boolean} opt.dontCrossCorners Disallow diagonal movement touching
                 *     block corners. Deprecated, use diagonalMovement instead.
                 * @param {DiagonalMovement} opt.diagonalMovement Allowed diagonal movement.
                 */
                function BreadthFirstFinder(opt) {
                    opt = opt || {};
                    this.allowDiagonal = opt.allowDiagonal;
                    this.dontCrossCorners = opt.dontCrossCorners;
                    this.diagonalMovement = opt.diagonalMovement;

                    if (!this.diagonalMovement) {
                        if (!this.allowDiagonal) {
                            this.diagonalMovement = DiagonalMovement.Never;
                        } else {
                            if (this.dontCrossCorners) {
                                this.diagonalMovement = DiagonalMovement.OnlyWhenNoObstacles;
                            } else {
                                this.diagonalMovement = DiagonalMovement.IfAtMostOneObstacle;
                            }
                        }
                    }
                }

                /**
                 * Find and return the the path.
                 * @return {Array<Array<number>>} The path, including both start and
                 *     end positions.
                 */
                BreadthFirstFinder.prototype.findPath = function(startX, startY, endX, endY, grid) {
                    var openList = [],
                        diagonalMovement = this.diagonalMovement,
                        startNode = grid.getNodeAt(startX, startY),
                        endNode = grid.getNodeAt(endX, endY),
                        neighbors, neighbor, node, i, l;

                    // push the start pos into the queue
                    openList.push(startNode);
                    startNode.opened = true;

                    // while the queue is not empty
                    while (openList.length) {
                        // take the front node from the queue
                        node = openList.shift();
                        node.closed = true;

                        // reached the end position
                        if (node === endNode) {
                            return Util.backtrace(endNode);
                        }

                        neighbors = grid.getNeighbors(node, diagonalMovement);
                        for (i = 0, l = neighbors.length; i < l; ++i) {
                            neighbor = neighbors[i];

                            // skip this neighbor if it has been inspected before
                            if (neighbor.closed || neighbor.opened) {
                                continue;
                            }

                            openList.push(neighbor);
                            neighbor.opened = true;
                            neighbor.parent = node;
                        }
                    }

                    // fail to find the path
                    return [];
                };

                module.exports = BreadthFirstFinder;

            }, {
                "../core/DiagonalMovement": 3,
                "../core/Util": 7
            }],
            16: [function(_dereq_, module, exports) {
                var AStarFinder = _dereq_('./AStarFinder');

                /**
                 * Dijkstra path-finder.
                 * @constructor
                 * @extends AStarFinder
                 * @param {Object} opt
                 * @param {boolean} opt.allowDiagonal Whether diagonal movement is allowed.
                 *     Deprecated, use diagonalMovement instead.
                 * @param {boolean} opt.dontCrossCorners Disallow diagonal movement touching
                 *     block corners. Deprecated, use diagonalMovement instead.
                 * @param {DiagonalMovement} opt.diagonalMovement Allowed diagonal movement.
                 */
                function DijkstraFinder(opt) {
                    AStarFinder.call(this, opt);
                    this.heuristic = function(dx, dy) {
                        return 0;
                    };
                }

                DijkstraFinder.prototype = new AStarFinder();
                DijkstraFinder.prototype.constructor = DijkstraFinder;

                module.exports = DijkstraFinder;

            }, {
                "./AStarFinder": 9
            }],
            17: [function(_dereq_, module, exports) {
                var Util = _dereq_('../core/Util');
                var Heuristic = _dereq_('../core/Heuristic');
                var Node = _dereq_('../core/Node');
                var DiagonalMovement = _dereq_('../core/DiagonalMovement');

                /**
                 * Iterative Deeping A Star (IDA*) path-finder.
                 *
                 * Recursion based on:
                 *   http://www.apl.jhu.edu/~hall/AI-Programming/IDA-Star.html
                 *
                 * Path retracing based on:
                 *  V. Nageshwara Rao, Vipin Kumar and K. Ramesh
                 *  "A Parallel Implementation of Iterative-Deeping-A*", January 1987.
                 *  ftp://ftp.cs.utexas.edu/.snapshot/hourly.1/pub/AI-Lab/tech-reports/UT-AI-TR-87-46.pdf
                 *
                 * @author Gerard Meier (www.gerardmeier.com)
                 *
                 * @constructor
                 * @param {Object} opt
                 * @param {boolean} opt.allowDiagonal Whether diagonal movement is allowed.
                 *     Deprecated, use diagonalMovement instead.
                 * @param {boolean} opt.dontCrossCorners Disallow diagonal movement touching
                 *     block corners. Deprecated, use diagonalMovement instead.
                 * @param {DiagonalMovement} opt.diagonalMovement Allowed diagonal movement.
                 * @param {function} opt.heuristic Heuristic function to estimate the distance
                 *     (defaults to manhattan).
                 * @param {number} opt.weight Weight to apply to the heuristic to allow for
                 *     suboptimal paths, in order to speed up the search.
                 * @param {boolean} opt.trackRecursion Whether to track recursion for
                 *     statistical purposes.
                 * @param {number} opt.timeLimit Maximum execution time. Use <= 0 for infinite.
                 */
                function IDAStarFinder(opt) {
                    opt = opt || {};
                    this.allowDiagonal = opt.allowDiagonal;
                    this.dontCrossCorners = opt.dontCrossCorners;
                    this.diagonalMovement = opt.diagonalMovement;
                    this.heuristic = opt.heuristic || Heuristic.manhattan;
                    this.weight = opt.weight || 1;
                    this.trackRecursion = opt.trackRecursion || false;
                    this.timeLimit = opt.timeLimit || Infinity; // Default: no time limit.

                    if (!this.diagonalMovement) {
                        if (!this.allowDiagonal) {
                            this.diagonalMovement = DiagonalMovement.Never;
                        } else {
                            if (this.dontCrossCorners) {
                                this.diagonalMovement = DiagonalMovement.OnlyWhenNoObstacles;
                            } else {
                                this.diagonalMovement = DiagonalMovement.IfAtMostOneObstacle;
                            }
                        }
                    }

                    // When diagonal movement is allowed the manhattan heuristic is not
                    // admissible, it should be octile instead
                    if (this.diagonalMovement === DiagonalMovement.Never) {
                        this.heuristic = opt.heuristic || Heuristic.manhattan;
                    } else {
                        this.heuristic = opt.heuristic || Heuristic.octile;
                    }
                }

                /**
                 * Find and return the the path. When an empty array is returned, either
                 * no path is possible, or the maximum execution time is reached.
                 *
                 * @return {Array<Array<number>>} The path, including both start and
                 *     end positions.
                 */
                IDAStarFinder.prototype.findPath = function(startX, startY, endX, endY, grid) {
                    // Used for statistics:
                    var nodesVisited = 0;

                    // Execution time limitation:
                    var startTime = new Date().getTime();

                    // Heuristic helper:
                    var h = function(a, b) {
                        return this.heuristic(Math.abs(b.x - a.x), Math.abs(b.y - a.y));
                    }.bind(this);

                    // Step cost from a to b:
                    var cost = function(a, b) {
                        return (a.x === b.x || a.y === b.y) ? 1 : Math.SQRT2;
                    };

                    /**
                     * IDA* search implementation.
                     *
                     * @param {Node} The node currently expanding from.
                     * @param {number} Cost to reach the given node.
                     * @param {number} Maximum search depth (cut-off value).
                     * @param {Array<Array<number>>} The found route.
                     * @param {number} Recursion depth.
                     *
                     * @return {Object} either a number with the new optimal cut-off depth,
                     * or a valid node instance, in which case a path was found.
                     */
                    var search = function(node, g, cutoff, route, depth) {
                        nodesVisited++;

                        // Enforce timelimit:
                        if (this.timeLimit > 0 &&
                            new Date().getTime() - startTime > this.timeLimit * 1000) {
                            // Enforced as "path-not-found".
                            return Infinity;
                        }

                        var f = g + h(node, end) * this.weight;

                        // We've searched too deep for this iteration.
                        if (f > cutoff) {
                            return f;
                        }

                        if (node == end) {
                            route[depth] = [node.x, node.y];
                            return node;
                        }

                        var min, t, k, neighbour;

                        var neighbours = grid.getNeighbors(node, this.diagonalMovement);

                        // Sort the neighbours, gives nicer paths. But, this deviates
                        // from the original algorithm - so I left it out.
                        //neighbours.sort(function(a, b){
                        //    return h(a, end) - h(b, end);
                        //});


                        /*jshint -W084 */ //Disable warning: Expected a conditional expression and instead saw an assignment
                        for (k = 0, min = Infinity; neighbour = neighbours[k]; ++k) {
                            /*jshint +W084 */ //Enable warning: Expected a conditional expression and instead saw an assignment
                            if (this.trackRecursion) {
                                // Retain a copy for visualisation. Due to recursion, this
                                // node may be part of other paths too.
                                neighbour.retainCount = neighbour.retainCount + 1 || 1;

                                if (neighbour.tested !== true) {
                                    neighbour.tested = true;
                                }
                            }

                            t = search(neighbour, g + cost(node, neighbour), cutoff, route, depth + 1);

                            if (t instanceof Node) {
                                route[depth] = [node.x, node.y];

                                // For a typical A* linked list, this would work:
                                // neighbour.parent = node;
                                return t;
                            }

                            // Decrement count, then determine whether it's actually closed.
                            if (this.trackRecursion && (--neighbour.retainCount) === 0) {
                                neighbour.tested = false;
                            }

                            if (t < min) {
                                min = t;
                            }
                        }

                        return min;

                    }.bind(this);

                    // Node instance lookups:
                    var start = grid.getNodeAt(startX, startY);
                    var end = grid.getNodeAt(endX, endY);

                    // Initial search depth, given the typical heuristic contraints,
                    // there should be no cheaper route possible.
                    var cutOff = h(start, end);

                    var j, route, t;

                    // With an overflow protection.
                    for (j = 0; true; ++j) {

                        route = [];

                        // Search till cut-off depth:
                        t = search(start, 0, cutOff, route, 0);

                        // Route not possible, or not found in time limit.
                        if (t === Infinity) {
                            return [];
                        }

                        // If t is a node, it's also the end node. Route is now
                        // populated with a valid path to the end node.
                        if (t instanceof Node) {
                            return route;
                        }

                        // Try again, this time with a deeper cut-off. The t score
                        // is the closest we got to the end node.
                        cutOff = t;
                    }

                    // This _should_ never to be reached.
                    return [];
                };

                module.exports = IDAStarFinder;

            }, {
                "../core/DiagonalMovement": 3,
                "../core/Heuristic": 5,
                "../core/Node": 6,
                "../core/Util": 7
            }],
            18: [function(_dereq_, module, exports) {
                /**
                 * @author imor / https://github.com/imor
                 */
                var JumpPointFinderBase = _dereq_('./JumpPointFinderBase');
                var DiagonalMovement = _dereq_('../core/DiagonalMovement');

                /**
                 * Path finder using the Jump Point Search algorithm which always moves
                 * diagonally irrespective of the number of obstacles.
                 */
                function JPFAlwaysMoveDiagonally(opt) {
                    JumpPointFinderBase.call(this, opt);
                }

                JPFAlwaysMoveDiagonally.prototype = new JumpPointFinderBase();
                JPFAlwaysMoveDiagonally.prototype.constructor = JPFAlwaysMoveDiagonally;

                /**
                 * Search recursively in the direction (parent -> child), stopping only when a
                 * jump point is found.
                 * @protected
                 * @return {Array<Array<number>>} The x, y coordinate of the jump point
                 *     found, or null if not found
                 */
                JPFAlwaysMoveDiagonally.prototype._jump = function(x, y, px, py) {
                    var grid = this.grid,
                        dx = x - px,
                        dy = y - py;

                    if (!grid.isWalkableAt(x, y)) {
                        return null;
                    }

                    if (this.trackJumpRecursion === true) {
                        grid.getNodeAt(x, y).tested = true;
                    }

                    if (grid.getNodeAt(x, y) === this.endNode) {
                        return [x, y];
                    }

                    // check for forced neighbors
                    // along the diagonal
                    if (dx !== 0 && dy !== 0) {
                        if ((grid.isWalkableAt(x - dx, y + dy) && !grid.isWalkableAt(x - dx, y)) ||
                            (grid.isWalkableAt(x + dx, y - dy) && !grid.isWalkableAt(x, y - dy))) {
                            return [x, y];
                        }
                        // when moving diagonally, must check for vertical/horizontal jump points
                        if (this._jump(x + dx, y, x, y) || this._jump(x, y + dy, x, y)) {
                            return [x, y];
                        }
                    }
                    // horizontally/vertically
                    else {
                        if (dx !== 0) { // moving along x
                            if ((grid.isWalkableAt(x + dx, y + 1) && !grid.isWalkableAt(x, y + 1)) ||
                                (grid.isWalkableAt(x + dx, y - 1) && !grid.isWalkableAt(x, y - 1))) {
                                return [x, y];
                            }
                        } else {
                            if ((grid.isWalkableAt(x + 1, y + dy) && !grid.isWalkableAt(x + 1, y)) ||
                                (grid.isWalkableAt(x - 1, y + dy) && !grid.isWalkableAt(x - 1, y))) {
                                return [x, y];
                            }
                        }
                    }

                    return this._jump(x + dx, y + dy, x, y);
                };

                /**
                 * Find the neighbors for the given node. If the node has a parent,
                 * prune the neighbors based on the jump point search algorithm, otherwise
                 * return all available neighbors.
                 * @return {Array<Array<number>>} The neighbors found.
                 */
                JPFAlwaysMoveDiagonally.prototype._findNeighbors = function(node) {
                    var parent = node.parent,
                        x = node.x,
                        y = node.y,
                        grid = this.grid,
                        px, py, nx, ny, dx, dy,
                        neighbors = [],
                        neighborNodes, neighborNode, i, l;

                    // directed pruning: can ignore most neighbors, unless forced.
                    if (parent) {
                        px = parent.x;
                        py = parent.y;
                        // get the normalized direction of travel
                        dx = (x - px) / Math.max(Math.abs(x - px), 1);
                        dy = (y - py) / Math.max(Math.abs(y - py), 1);

                        // search diagonally
                        if (dx !== 0 && dy !== 0) {
                            if (grid.isWalkableAt(x, y + dy)) {
                                neighbors.push([x, y + dy]);
                            }
                            if (grid.isWalkableAt(x + dx, y)) {
                                neighbors.push([x + dx, y]);
                            }
                            if (grid.isWalkableAt(x + dx, y + dy)) {
                                neighbors.push([x + dx, y + dy]);
                            }
                            if (!grid.isWalkableAt(x - dx, y)) {
                                neighbors.push([x - dx, y + dy]);
                            }
                            if (!grid.isWalkableAt(x, y - dy)) {
                                neighbors.push([x + dx, y - dy]);
                            }
                        }
                        // search horizontally/vertically
                        else {
                            if (dx === 0) {
                                if (grid.isWalkableAt(x, y + dy)) {
                                    neighbors.push([x, y + dy]);
                                }
                                if (!grid.isWalkableAt(x + 1, y)) {
                                    neighbors.push([x + 1, y + dy]);
                                }
                                if (!grid.isWalkableAt(x - 1, y)) {
                                    neighbors.push([x - 1, y + dy]);
                                }
                            } else {
                                if (grid.isWalkableAt(x + dx, y)) {
                                    neighbors.push([x + dx, y]);
                                }
                                if (!grid.isWalkableAt(x, y + 1)) {
                                    neighbors.push([x + dx, y + 1]);
                                }
                                if (!grid.isWalkableAt(x, y - 1)) {
                                    neighbors.push([x + dx, y - 1]);
                                }
                            }
                        }
                    }
                    // return all neighbors
                    else {
                        neighborNodes = grid.getNeighbors(node, DiagonalMovement.Always);
                        for (i = 0, l = neighborNodes.length; i < l; ++i) {
                            neighborNode = neighborNodes[i];
                            neighbors.push([neighborNode.x, neighborNode.y]);
                        }
                    }

                    return neighbors;
                };

                module.exports = JPFAlwaysMoveDiagonally;

            }, {
                "../core/DiagonalMovement": 3,
                "./JumpPointFinderBase": 23
            }],
            19: [function(_dereq_, module, exports) {
                /**
                 * @author imor / https://github.com/imor
                 */
                var JumpPointFinderBase = _dereq_('./JumpPointFinderBase');
                var DiagonalMovement = _dereq_('../core/DiagonalMovement');

                /**
                 * Path finder using the Jump Point Search algorithm which moves
                 * diagonally only when there is at most one obstacle.
                 */
                function JPFMoveDiagonallyIfAtMostOneObstacle(opt) {
                    JumpPointFinderBase.call(this, opt);
                }

                JPFMoveDiagonallyIfAtMostOneObstacle.prototype = new JumpPointFinderBase();
                JPFMoveDiagonallyIfAtMostOneObstacle.prototype.constructor = JPFMoveDiagonallyIfAtMostOneObstacle;

                /**
                 * Search recursively in the direction (parent -> child), stopping only when a
                 * jump point is found.
                 * @protected
                 * @return {Array<Array<number>>} The x, y coordinate of the jump point
                 *     found, or null if not found
                 */
                JPFMoveDiagonallyIfAtMostOneObstacle.prototype._jump = function(x, y, px, py) {
                    var grid = this.grid,
                        dx = x - px,
                        dy = y - py;

                    if (!grid.isWalkableAt(x, y)) {
                        return null;
                    }

                    if (this.trackJumpRecursion === true) {
                        grid.getNodeAt(x, y).tested = true;
                    }

                    if (grid.getNodeAt(x, y) === this.endNode) {
                        return [x, y];
                    }

                    // check for forced neighbors
                    // along the diagonal
                    if (dx !== 0 && dy !== 0) {
                        if ((grid.isWalkableAt(x - dx, y + dy) && !grid.isWalkableAt(x - dx, y)) ||
                            (grid.isWalkableAt(x + dx, y - dy) && !grid.isWalkableAt(x, y - dy))) {
                            return [x, y];
                        }
                        // when moving diagonally, must check for vertical/horizontal jump points
                        if (this._jump(x + dx, y, x, y) || this._jump(x, y + dy, x, y)) {
                            return [x, y];
                        }
                    }
                    // horizontally/vertically
                    else {
                        if (dx !== 0) { // moving along x
                            if ((grid.isWalkableAt(x + dx, y + 1) && !grid.isWalkableAt(x, y + 1)) ||
                                (grid.isWalkableAt(x + dx, y - 1) && !grid.isWalkableAt(x, y - 1))) {
                                return [x, y];
                            }
                        } else {
                            if ((grid.isWalkableAt(x + 1, y + dy) && !grid.isWalkableAt(x + 1, y)) ||
                                (grid.isWalkableAt(x - 1, y + dy) && !grid.isWalkableAt(x - 1, y))) {
                                return [x, y];
                            }
                        }
                    }

                    // moving diagonally, must make sure one of the vertical/horizontal
                    // neighbors is open to allow the path
                    if (grid.isWalkableAt(x + dx, y) || grid.isWalkableAt(x, y + dy)) {
                        return this._jump(x + dx, y + dy, x, y);
                    } else {
                        return null;
                    }
                };

                /**
                 * Find the neighbors for the given node. If the node has a parent,
                 * prune the neighbors based on the jump point search algorithm, otherwise
                 * return all available neighbors.
                 * @return {Array<Array<number>>} The neighbors found.
                 */
                JPFMoveDiagonallyIfAtMostOneObstacle.prototype._findNeighbors = function(node) {
                    var parent = node.parent,
                        x = node.x,
                        y = node.y,
                        grid = this.grid,
                        px, py, nx, ny, dx, dy,
                        neighbors = [],
                        neighborNodes, neighborNode, i, l;

                    // directed pruning: can ignore most neighbors, unless forced.
                    if (parent) {
                        px = parent.x;
                        py = parent.y;
                        // get the normalized direction of travel
                        dx = (x - px) / Math.max(Math.abs(x - px), 1);
                        dy = (y - py) / Math.max(Math.abs(y - py), 1);

                        // search diagonally
                        if (dx !== 0 && dy !== 0) {
                            if (grid.isWalkableAt(x, y + dy)) {
                                neighbors.push([x, y + dy]);
                            }
                            if (grid.isWalkableAt(x + dx, y)) {
                                neighbors.push([x + dx, y]);
                            }
                            if (grid.isWalkableAt(x, y + dy) || grid.isWalkableAt(x + dx, y)) {
                                neighbors.push([x + dx, y + dy]);
                            }
                            if (!grid.isWalkableAt(x - dx, y) && grid.isWalkableAt(x, y + dy)) {
                                neighbors.push([x - dx, y + dy]);
                            }
                            if (!grid.isWalkableAt(x, y - dy) && grid.isWalkableAt(x + dx, y)) {
                                neighbors.push([x + dx, y - dy]);
                            }
                        }
                        // search horizontally/vertically
                        else {
                            if (dx === 0) {
                                if (grid.isWalkableAt(x, y + dy)) {
                                    neighbors.push([x, y + dy]);
                                    if (!grid.isWalkableAt(x + 1, y)) {
                                        neighbors.push([x + 1, y + dy]);
                                    }
                                    if (!grid.isWalkableAt(x - 1, y)) {
                                        neighbors.push([x - 1, y + dy]);
                                    }
                                }
                            } else {
                                if (grid.isWalkableAt(x + dx, y)) {
                                    neighbors.push([x + dx, y]);
                                    if (!grid.isWalkableAt(x, y + 1)) {
                                        neighbors.push([x + dx, y + 1]);
                                    }
                                    if (!grid.isWalkableAt(x, y - 1)) {
                                        neighbors.push([x + dx, y - 1]);
                                    }
                                }
                            }
                        }
                    }
                    // return all neighbors
                    else {
                        neighborNodes = grid.getNeighbors(node, DiagonalMovement.IfAtMostOneObstacle);
                        for (i = 0, l = neighborNodes.length; i < l; ++i) {
                            neighborNode = neighborNodes[i];
                            neighbors.push([neighborNode.x, neighborNode.y]);
                        }
                    }

                    return neighbors;
                };

                module.exports = JPFMoveDiagonallyIfAtMostOneObstacle;

            }, {
                "../core/DiagonalMovement": 3,
                "./JumpPointFinderBase": 23
            }],
            20: [function(_dereq_, module, exports) {
                /**
                 * @author imor / https://github.com/imor
                 */
                var JumpPointFinderBase = _dereq_('./JumpPointFinderBase');
                var DiagonalMovement = _dereq_('../core/DiagonalMovement');

                /**
                 * Path finder using the Jump Point Search algorithm which moves
                 * diagonally only when there are no obstacles.
                 */
                function JPFMoveDiagonallyIfNoObstacles(opt) {
                    JumpPointFinderBase.call(this, opt);
                }

                JPFMoveDiagonallyIfNoObstacles.prototype = new JumpPointFinderBase();
                JPFMoveDiagonallyIfNoObstacles.prototype.constructor = JPFMoveDiagonallyIfNoObstacles;

                /**
                 * Search recursively in the direction (parent -> child), stopping only when a
                 * jump point is found.
                 * @protected
                 * @return {Array<Array<number>>} The x, y coordinate of the jump point
                 *     found, or null if not found
                 */
                JPFMoveDiagonallyIfNoObstacles.prototype._jump = function(x, y, px, py) {
                    var grid = this.grid,
                        dx = x - px,
                        dy = y - py;

                    if (!grid.isWalkableAt(x, y)) {
                        return null;
                    }

                    if (this.trackJumpRecursion === true) {
                        grid.getNodeAt(x, y).tested = true;
                    }

                    if (grid.getNodeAt(x, y) === this.endNode) {
                        return [x, y];
                    }

                    // check for forced neighbors
                    // along the diagonal
                    if (dx !== 0 && dy !== 0) {
                        // if ((grid.isWalkableAt(x - dx, y + dy) && !grid.isWalkableAt(x - dx, y)) ||
                        // (grid.isWalkableAt(x + dx, y - dy) && !grid.isWalkableAt(x, y - dy))) {
                        // return [x, y];
                        // }
                        // when moving diagonally, must check for vertical/horizontal jump points
                        if (this._jump(x + dx, y, x, y) || this._jump(x, y + dy, x, y)) {
                            return [x, y];
                        }
                    }
                    // horizontally/vertically
                    else {
                        if (dx !== 0) {
                            if ((grid.isWalkableAt(x, y - 1) && !grid.isWalkableAt(x - dx, y - 1)) ||
                                (grid.isWalkableAt(x, y + 1) && !grid.isWalkableAt(x - dx, y + 1))) {
                                return [x, y];
                            }
                        } else if (dy !== 0) {
                            if ((grid.isWalkableAt(x - 1, y) && !grid.isWalkableAt(x - 1, y - dy)) ||
                                (grid.isWalkableAt(x + 1, y) && !grid.isWalkableAt(x + 1, y - dy))) {
                                return [x, y];
                            }
                            // When moving vertically, must check for horizontal jump points
                            // if (this._jump(x + 1, y, x, y) || this._jump(x - 1, y, x, y)) {
                            // return [x, y];
                            // }
                        }
                    }

                    // moving diagonally, must make sure one of the vertical/horizontal
                    // neighbors is open to allow the path
                    if (grid.isWalkableAt(x + dx, y) && grid.isWalkableAt(x, y + dy)) {
                        return this._jump(x + dx, y + dy, x, y);
                    } else {
                        return null;
                    }
                };

                /**
                 * Find the neighbors for the given node. If the node has a parent,
                 * prune the neighbors based on the jump point search algorithm, otherwise
                 * return all available neighbors.
                 * @return {Array<Array<number>>} The neighbors found.
                 */
                JPFMoveDiagonallyIfNoObstacles.prototype._findNeighbors = function(node) {
                    var parent = node.parent,
                        x = node.x,
                        y = node.y,
                        grid = this.grid,
                        px, py, nx, ny, dx, dy,
                        neighbors = [],
                        neighborNodes, neighborNode, i, l;

                    // directed pruning: can ignore most neighbors, unless forced.
                    if (parent) {
                        px = parent.x;
                        py = parent.y;
                        // get the normalized direction of travel
                        dx = (x - px) / Math.max(Math.abs(x - px), 1);
                        dy = (y - py) / Math.max(Math.abs(y - py), 1);

                        // search diagonally
                        if (dx !== 0 && dy !== 0) {
                            if (grid.isWalkableAt(x, y + dy)) {
                                neighbors.push([x, y + dy]);
                            }
                            if (grid.isWalkableAt(x + dx, y)) {
                                neighbors.push([x + dx, y]);
                            }
                            if (grid.isWalkableAt(x, y + dy) && grid.isWalkableAt(x + dx, y)) {
                                neighbors.push([x + dx, y + dy]);
                            }
                        }
                        // search horizontally/vertically
                        else {
                            var isNextWalkable;
                            if (dx !== 0) {
                                isNextWalkable = grid.isWalkableAt(x + dx, y);
                                var isTopWalkable = grid.isWalkableAt(x, y + 1);
                                var isBottomWalkable = grid.isWalkableAt(x, y - 1);

                                if (isNextWalkable) {
                                    neighbors.push([x + dx, y]);
                                    if (isTopWalkable) {
                                        neighbors.push([x + dx, y + 1]);
                                    }
                                    if (isBottomWalkable) {
                                        neighbors.push([x + dx, y - 1]);
                                    }
                                }
                                if (isTopWalkable) {
                                    neighbors.push([x, y + 1]);
                                }
                                if (isBottomWalkable) {
                                    neighbors.push([x, y - 1]);
                                }
                            } else if (dy !== 0) {
                                isNextWalkable = grid.isWalkableAt(x, y + dy);
                                var isRightWalkable = grid.isWalkableAt(x + 1, y);
                                var isLeftWalkable = grid.isWalkableAt(x - 1, y);

                                if (isNextWalkable) {
                                    neighbors.push([x, y + dy]);
                                    if (isRightWalkable) {
                                        neighbors.push([x + 1, y + dy]);
                                    }
                                    if (isLeftWalkable) {
                                        neighbors.push([x - 1, y + dy]);
                                    }
                                }
                                if (isRightWalkable) {
                                    neighbors.push([x + 1, y]);
                                }
                                if (isLeftWalkable) {
                                    neighbors.push([x - 1, y]);
                                }
                            }
                        }
                    }
                    // return all neighbors
                    else {
                        neighborNodes = grid.getNeighbors(node, DiagonalMovement.OnlyWhenNoObstacles);
                        for (i = 0, l = neighborNodes.length; i < l; ++i) {
                            neighborNode = neighborNodes[i];
                            neighbors.push([neighborNode.x, neighborNode.y]);
                        }
                    }

                    return neighbors;
                };

                module.exports = JPFMoveDiagonallyIfNoObstacles;

            }, {
                "../core/DiagonalMovement": 3,
                "./JumpPointFinderBase": 23
            }],
            21: [function(_dereq_, module, exports) {
                /**
                 * @author imor / https://github.com/imor
                 */
                var JumpPointFinderBase = _dereq_('./JumpPointFinderBase');
                var DiagonalMovement = _dereq_('../core/DiagonalMovement');

                /**
                 * Path finder using the Jump Point Search algorithm allowing only horizontal
                 * or vertical movements.
                 */
                function JPFNeverMoveDiagonally(opt) {
                    JumpPointFinderBase.call(this, opt);
                }

                JPFNeverMoveDiagonally.prototype = new JumpPointFinderBase();
                JPFNeverMoveDiagonally.prototype.constructor = JPFNeverMoveDiagonally;

                /**
                 * Search recursively in the direction (parent -> child), stopping only when a
                 * jump point is found.
                 * @protected
                 * @return {Array<Array<number>>} The x, y coordinate of the jump point
                 *     found, or null if not found
                 */
                JPFNeverMoveDiagonally.prototype._jump = function(x, y, px, py) {
                    var grid = this.grid,
                        dx = x - px,
                        dy = y - py;

                    if (!grid.isWalkableAt(x, y)) {
                        return null;
                    }

                    if (this.trackJumpRecursion === true) {
                        grid.getNodeAt(x, y).tested = true;
                    }

                    if (grid.getNodeAt(x, y) === this.endNode) {
                        return [x, y];
                    }

                    if (dx !== 0) {
                        if ((grid.isWalkableAt(x, y - 1) && !grid.isWalkableAt(x - dx, y - 1)) ||
                            (grid.isWalkableAt(x, y + 1) && !grid.isWalkableAt(x - dx, y + 1))) {
                            return [x, y];
                        }
                    } else if (dy !== 0) {
                        if ((grid.isWalkableAt(x - 1, y) && !grid.isWalkableAt(x - 1, y - dy)) ||
                            (grid.isWalkableAt(x + 1, y) && !grid.isWalkableAt(x + 1, y - dy))) {
                            return [x, y];
                        }
                        //When moving vertically, must check for horizontal jump points
                        if (this._jump(x + 1, y, x, y) || this._jump(x - 1, y, x, y)) {
                            return [x, y];
                        }
                    } else {
                        throw new Error("Only horizontal and vertical movements are allowed");
                    }

                    return this._jump(x + dx, y + dy, x, y);
                };

                /**
                 * Find the neighbors for the given node. If the node has a parent,
                 * prune the neighbors based on the jump point search algorithm, otherwise
                 * return all available neighbors.
                 * @return {Array<Array<number>>} The neighbors found.
                 */
                JPFNeverMoveDiagonally.prototype._findNeighbors = function(node) {
                    var parent = node.parent,
                        x = node.x,
                        y = node.y,
                        grid = this.grid,
                        px, py, nx, ny, dx, dy,
                        neighbors = [],
                        neighborNodes, neighborNode, i, l;

                    // directed pruning: can ignore most neighbors, unless forced.
                    if (parent) {
                        px = parent.x;
                        py = parent.y;
                        // get the normalized direction of travel
                        dx = (x - px) / Math.max(Math.abs(x - px), 1);
                        dy = (y - py) / Math.max(Math.abs(y - py), 1);

                        if (dx !== 0) {
                            if (grid.isWalkableAt(x, y - 1)) {
                                neighbors.push([x, y - 1]);
                            }
                            if (grid.isWalkableAt(x, y + 1)) {
                                neighbors.push([x, y + 1]);
                            }
                            if (grid.isWalkableAt(x + dx, y)) {
                                neighbors.push([x + dx, y]);
                            }
                        } else if (dy !== 0) {
                            if (grid.isWalkableAt(x - 1, y)) {
                                neighbors.push([x - 1, y]);
                            }
                            if (grid.isWalkableAt(x + 1, y)) {
                                neighbors.push([x + 1, y]);
                            }
                            if (grid.isWalkableAt(x, y + dy)) {
                                neighbors.push([x, y + dy]);
                            }
                        }
                    }
                    // return all neighbors
                    else {
                        neighborNodes = grid.getNeighbors(node, DiagonalMovement.Never);
                        for (i = 0, l = neighborNodes.length; i < l; ++i) {
                            neighborNode = neighborNodes[i];
                            neighbors.push([neighborNode.x, neighborNode.y]);
                        }
                    }

                    return neighbors;
                };

                module.exports = JPFNeverMoveDiagonally;

            }, {
                "../core/DiagonalMovement": 3,
                "./JumpPointFinderBase": 23
            }],
            22: [function(_dereq_, module, exports) {
                /**
                 * @author aniero / https://github.com/aniero
                 */
                var DiagonalMovement = _dereq_('../core/DiagonalMovement');
                var JPFNeverMoveDiagonally = _dereq_('./JPFNeverMoveDiagonally');
                var JPFAlwaysMoveDiagonally = _dereq_('./JPFAlwaysMoveDiagonally');
                var JPFMoveDiagonallyIfNoObstacles = _dereq_('./JPFMoveDiagonallyIfNoObstacles');
                var JPFMoveDiagonallyIfAtMostOneObstacle = _dereq_('./JPFMoveDiagonallyIfAtMostOneObstacle');

                /**
                 * Path finder using the Jump Point Search algorithm
                 * @param {Object} opt
                 * @param {function} opt.heuristic Heuristic function to estimate the distance
                 *     (defaults to manhattan).
                 * @param {DiagonalMovement} opt.diagonalMovement Condition under which diagonal
                 *      movement will be allowed.
                 */
                function JumpPointFinder(opt) {
                    opt = opt || {};
                    if (opt.diagonalMovement === DiagonalMovement.Never) {
                        return new JPFNeverMoveDiagonally(opt);
                    } else if (opt.diagonalMovement === DiagonalMovement.Always) {
                        return new JPFAlwaysMoveDiagonally(opt);
                    } else if (opt.diagonalMovement === DiagonalMovement.OnlyWhenNoObstacles) {
                        return new JPFMoveDiagonallyIfNoObstacles(opt);
                    } else {
                        return new JPFMoveDiagonallyIfAtMostOneObstacle(opt);
                    }
                }

                module.exports = JumpPointFinder;

            }, {
                "../core/DiagonalMovement": 3,
                "./JPFAlwaysMoveDiagonally": 18,
                "./JPFMoveDiagonallyIfAtMostOneObstacle": 19,
                "./JPFMoveDiagonallyIfNoObstacles": 20,
                "./JPFNeverMoveDiagonally": 21
            }],
            23: [function(_dereq_, module, exports) {
                /**
                 * @author imor / https://github.com/imor
                 */
                var Heap = _dereq_('heap');
                var Util = _dereq_('../core/Util');
                var Heuristic = _dereq_('../core/Heuristic');
                var DiagonalMovement = _dereq_('../core/DiagonalMovement');

                /**
                 * Base class for the Jump Point Search algorithm
                 * @param {object} opt
                 * @param {function} opt.heuristic Heuristic function to estimate the distance
                 *     (defaults to manhattan).
                 */
                function JumpPointFinderBase(opt) {
                    opt = opt || {};
                    this.heuristic = opt.heuristic || Heuristic.manhattan;
                    this.trackJumpRecursion = opt.trackJumpRecursion || false;
                }

                /**
                 * Find and return the path.
                 * @return {Array<Array<number>>} The path, including both start and
                 *     end positions.
                 */
                JumpPointFinderBase.prototype.findPath = function(startX, startY, endX, endY, grid) {
                    var openList = this.openList = new Heap(function(nodeA, nodeB) {
                            return nodeA.f - nodeB.f;
                        }),
                        startNode = this.startNode = grid.getNodeAt(startX, startY),
                        endNode = this.endNode = grid.getNodeAt(endX, endY),
                        node;

                    this.grid = grid;


                    // set the `g` and `f` value of the start node to be 0
                    startNode.g = 0;
                    startNode.f = 0;

                    // push the start node into the open list
                    openList.push(startNode);
                    startNode.opened = true;

                    // while the open list is not empty
                    while (!openList.empty()) {
                        // pop the position of node which has the minimum `f` value.
                        node = openList.pop();
                        node.closed = true;

                        if (node === endNode) {
                            return Util.expandPath(Util.backtrace(endNode));
                        }

                        this._identifySuccessors(node);
                    }

                    // fail to find the path
                    return [];
                };

                /**
                 * Identify successors for the given node. Runs a jump point search in the
                 * direction of each available neighbor, adding any points found to the open
                 * list.
                 * @protected
                 */
                JumpPointFinderBase.prototype._identifySuccessors = function(node) {
                    var grid = this.grid,
                        heuristic = this.heuristic,
                        openList = this.openList,
                        endX = this.endNode.x,
                        endY = this.endNode.y,
                        neighbors, neighbor,
                        jumpPoint, i, l,
                        x = node.x,
                        y = node.y,
                        jx, jy, dx, dy, d, ng, jumpNode,
                        abs = Math.abs,
                        max = Math.max;

                    neighbors = this._findNeighbors(node);
                    for (i = 0, l = neighbors.length; i < l; ++i) {
                        neighbor = neighbors[i];
                        jumpPoint = this._jump(neighbor[0], neighbor[1], x, y);
                        if (jumpPoint) {

                            jx = jumpPoint[0];
                            jy = jumpPoint[1];
                            jumpNode = grid.getNodeAt(jx, jy);

                            if (jumpNode.closed) {
                                continue;
                            }

                            // include distance, as parent may not be immediately adjacent:
                            d = Heuristic.octile(abs(jx - x), abs(jy - y));
                            ng = node.g + d; // next `g` value

                            if (!jumpNode.opened || ng < jumpNode.g) {
                                jumpNode.g = ng;
                                jumpNode.h = jumpNode.h || heuristic(abs(jx - endX), abs(jy - endY));
                                jumpNode.f = jumpNode.g + jumpNode.h;
                                jumpNode.parent = node;

                                if (!jumpNode.opened) {
                                    openList.push(jumpNode);
                                    jumpNode.opened = true;
                                } else {
                                    openList.updateItem(jumpNode);
                                }
                            }
                        }
                    }
                };

                module.exports = JumpPointFinderBase;

            }, {
                "../core/DiagonalMovement": 3,
                "../core/Heuristic": 5,
                "../core/Util": 7,
                "heap": 1
            }]
        }, {}, [8])
        (8)
});

var PREFIX_GAME = "pacrat_";

function setLocalStorageLevel(iLevel) {
    if (s_iLastLevel < iLevel) {
        s_iLastLevel = iLevel;
        saveItem(PREFIX_GAME + "level", s_iLastLevel);
    }
};

function setLocalStorageScore(iCurScore, iLevel) {
    saveItem(PREFIX_GAME + "score_level_" + iLevel, iCurScore);
};

function setLocalStorageLives(iLives, iLevel) {
    saveItem(PREFIX_GAME + "lives_level_" + iLevel, iLives);
};

function clearLocalStorage() {
    s_iLastLevel = 1;
    if (s_bStorageAvailable) {
        localStorage.clear();
    }
};

function getScoreTillLevel(iLevel) {
    if (!s_bStorageAvailable) {
        return 0;
    }

    var iScore = 0;
    for (var i = 0; i < iLevel - 1; i++) {
        iScore += parseInt(getItem(PREFIX_GAME + "score_level_" + (i + 1)));
    }

    return iScore;
};

function getLives(iLevel) {
    if (!s_bStorageAvailable) {
        return NUM_LIVES;
    }

    var iLives = getItem(PREFIX_GAME + "lives_level_" + (iLevel));

    if (iLives !== null) {
        return parseInt(iLives);
    }

    return NUM_LIVES;
}

var s_bLandscape = true;
var s_iScaleFactor = 1;
var s_bIsIphone = false;
var s_iOffsetX;
var s_iOffsetY;

/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 * jQuery.browser.mobile will be true if the browser is a mobile device
 **/
(function(a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
})(navigator.userAgent || navigator.vendor || window.opera);

$(window).resize(function() {
    sizeHandler();
});


function trace(szMsg) {
    console.log(szMsg);
}


function isChrome() {
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    return isChrome;
}



function isIpad() {
    var isIpad = navigator.userAgent.toLowerCase().indexOf('ipad') !== -1;

    if (!isIpad && navigator.userAgent.match(/Mac/) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2) {
        return true;
    }

    return isIpad;
}

function isMobile() {
    if (isIpad()) {
        return true;
    }

    return jQuery.browser.mobile;
}


function isIOS() {
    var iDevices = [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
    ];

    while (iDevices.length) {
        if (navigator.platform === iDevices.pop()) {
            s_bIsIphone = true;
            return true;
        }
    }
    s_bIsIphone = false;
    return false;
}

function getSize(Name) {
    var size;
    var name = Name.toLowerCase();
    var document = window.document;
    var documentElement = document.documentElement;
    if (window["inner" + Name] === undefined) {
        // IE6 & IE7 don't have window.innerWidth or innerHeight
        size = documentElement["client" + Name];
    } else if (window["inner" + Name] != documentElement["client" + Name]) {
        // WebKit doesn't include scrollbars while calculating viewport size so we have to get fancy

        // Insert markup to test if a media query will match document.doumentElement["client" + Name]
        var bodyElement = document.createElement("body");
        bodyElement.id = "vpw-test-b";
        bodyElement.style.cssText = "overflow:scroll";
        var divElement = document.createElement("div");
        divElement.id = "vpw-test-d";
        divElement.style.cssText = "position:absolute;top:-1000px";
        // Getting specific on the CSS selector so it won't get overridden easily
        divElement.innerHTML = "<style>@media(" + name + ":" + documentElement["client" + Name] + "px){body#vpw-test-b div#vpw-test-d{" + name + ":7px!important}}</style>";
        bodyElement.appendChild(divElement);
        documentElement.insertBefore(bodyElement, document.head);

        if (divElement["offset" + Name] == 7) {
            // Media query matches document.documentElement["client" + Name]
            size = documentElement["client" + Name];
        } else {
            // Media query didn't match, use window["inner" + Name]
            size = window["inner" + Name];
        }
        // Cleanup
        documentElement.removeChild(bodyElement);
    } else {
        // Default to use window["inner" + Name]
        size = window["inner" + Name];
    }
    return size;
};


window.addEventListener("orientationchange", onOrientationChange);


function onOrientationChange() {
    if (window.matchMedia("(orientation: portrait)").matches) {
        // you're in PORTRAIT mode	 

        sizeHandler();
    }

    if (window.matchMedia("(orientation: landscape)").matches) {
        // you're in LANDSCAPE mode   
        sizeHandler();
    }

}

function getIOSWindowHeight() {
    // Get zoom level of mobile Safari
    // Note, that such zoom detection might not work correctly in other browsers
    // We use width, instead of height, because there are no vertical toolbars :)
    var zoomLevel = document.documentElement.clientWidth / window.innerWidth;

    // window.innerHeight returns height of the visible area. 
    // We multiply it by zoom and get out real height.
    return window.innerHeight * zoomLevel;
};

// You can also get height of the toolbars that are currently displayed
function getHeightOfIOSToolbars() {
    var tH = (window.orientation === 0 ? screen.height : screen.width) - getIOSWindowHeight();
    return tH > 1 ? tH : 0;
};

//THIS FUNCTION MANAGES THE CANVAS SCALING TO FIT PROPORTIONALLY THE GAME TO THE CURRENT DEVICE RESOLUTION

function sizeHandler() {
    window.scrollTo(0, 1);

    if (!$("#canvas")) {
        return;
    }

    var h;
    if (platform.name !== null && platform.name.toLowerCase() === "safari") {
        h = getIOSWindowHeight();
    } else {
        h = getSize("Height");
    }

    var w = getSize("Width");

    var multiplier = Math.min((h / CANVAS_HEIGHT), (w / CANVAS_WIDTH));

    if (w > h) {
        //LANDSCAPE
        EDGEBOARD_X = 0;
        EDGEBOARD_Y = 570;
        s_bLandscape = true;
    } else {
        EDGEBOARD_X = 470;
        EDGEBOARD_Y = 0;
        s_bLandscape = false;
    }

    var destW = Math.round(CANVAS_WIDTH * multiplier);
    var destH = Math.round(CANVAS_HEIGHT * multiplier);

    var iAdd = 0;
    if (destH < h) {
        iAdd = h - destH;
        destH += iAdd;
        destW += iAdd * (CANVAS_WIDTH / CANVAS_HEIGHT);
    } else if (destW < w) {
        iAdd = w - destW;
        destW += iAdd;
        destH += iAdd * (CANVAS_HEIGHT / CANVAS_WIDTH);
    }

    var fOffsetY = ((h / 2) - (destH / 2));
    var fOffsetX = ((w / 2) - (destW / 2));
    var fGameInverseScaling = (CANVAS_WIDTH / destW);

    if (fOffsetX * fGameInverseScaling < -EDGEBOARD_X ||
        fOffsetY * fGameInverseScaling < -EDGEBOARD_Y) {
        multiplier = Math.min(h / (CANVAS_HEIGHT - (EDGEBOARD_Y * 2)), w / (CANVAS_WIDTH - (EDGEBOARD_X * 2)));
        destW = Math.round(CANVAS_WIDTH * multiplier);
        destH = Math.round(CANVAS_HEIGHT * multiplier);
        fOffsetY = (h - destH) / 2;
        fOffsetX = (w - destW) / 2;

        fGameInverseScaling = (CANVAS_WIDTH / destW);
    }

    s_iOffsetX = (-1 * fOffsetX * fGameInverseScaling);
    s_iOffsetY = (-1 * fOffsetY * fGameInverseScaling);

    if (fOffsetY >= 0) {
        s_iOffsetY = 0;
    }

    if (fOffsetX >= 0) {
        s_iOffsetX = 0;
    }

    if (s_oGame !== null) {
        s_oGame.refreshButtonPos();
    }
    if (s_oMenu !== null) {
        s_oMenu.refreshButtonPos();
    }
    if (s_oLevelMenu !== null) {
        s_oLevelMenu.refreshButtonPos();
    }

    s_iScaleFactor = Math.min(destW / CANVAS_WIDTH, destH / CANVAS_HEIGHT);
    if (s_bIsIphone) {

        canvas = document.getElementById('canvas');
        s_oStage.canvas.width = destW * 2;
        s_oStage.canvas.height = destH * 2;
        canvas.style.width = destW + "px";
        canvas.style.height = destH + "px";
        var iScale = Math.min(destW / CANVAS_WIDTH, destH / CANVAS_HEIGHT);
        s_iScaleFactor = iScale * 2;
        s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor;
    } else if (s_bMobile || isChrome()) {
        $("#canvas").css("width", destW + "px");
        $("#canvas").css("height", destH + "px");
    } else if (s_oStage) {
        s_oStage.canvas.width = destW;
        s_oStage.canvas.height = destH;

        s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor;
    }

    if (fOffsetY < 0) {
        $("#canvas").css("top", fOffsetY + "px");
    } else {
        // centered game
        fOffsetY = (h - destH) / 2;
        $("#canvas").css("top", fOffsetY + "px");
    }

    $("#canvas").css("left", fOffsetX + "px");
    fullscreenHandler();
};

function createBitmap(oSprite, iWidth, iHeight) {
    var oBmp = new createjs.Bitmap(oSprite);
    var hitObject = new createjs.Shape();

    if (iWidth && iHeight) {
        hitObject.graphics.beginFill("#fff").drawRect(0, 0, iWidth, iHeight);
    } else {
        hitObject.graphics.beginFill("#ff0").drawRect(0, 0, oSprite.width, oSprite.height);
    }

    oBmp.hitArea = hitObject;

    return oBmp;
}

function createSprite(oSpriteSheet, szState, iRegX, iRegY, iWidth, iHeight) {
    if (szState !== null) {
        var oRetSprite = new createjs.Sprite(oSpriteSheet, szState);
    } else {
        var oRetSprite = new createjs.Sprite(oSpriteSheet);
    }

    var hitObject = new createjs.Shape();
    hitObject.graphics.beginFill("#000000").drawRect(-iRegX, -iRegY, iWidth, iHeight);

    oRetSprite.hitArea = hitObject;

    return oRetSprite;
}


function randomFloatBetween(minValue, maxValue, precision) {
    if (typeof(precision) === 'undefined') {
        precision = 2;
    }
    return parseFloat(Math.min(minValue + (Math.random() * (maxValue - minValue)), maxValue).toFixed(precision));
}

function rotateVector2D(iAngle, v) {
    var iX = v.getX() * Math.cos(iAngle) + v.getY() * Math.sin(iAngle);
    var iY = v.getX() * (-Math.sin(iAngle)) + v.getY() * Math.cos(iAngle);
    v.set(iX, iY);
}

function tweenVectorsOnX(vStart, vEnd, iLerp) {
    var iNewX = vStart + iLerp * (vEnd - vStart);
    return iNewX;
}

this.tweenVectors = function(vStart, vEnd, iLerp) {
    var vOut = new CVector2();
    vOut.set(vStart.getX() + iLerp * (vEnd.getX() - vStart.getX()), vStart.getY() + iLerp * (vEnd.getY() - vStart.getY()));
    return vOut;
};

function distance(v1, v2) {
    return Math.sqrt((v2.x - v1.x) * (v2.x - v1.x) + ((v2.y - v1.y) * (v2.y - v1.y)));
}

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function bubbleSort(a) {
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < a.length - 1; i++) {
            if (a[i] > a[i + 1]) {
                var temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

function compare(a, b) {
    if (a.index > b.index)
        return -1;
    if (a.index < b.index)
        return 1;
    return 0;
}

//----------------------
// Linear	
/**
 * Interpolates a value between b and c parameters
 * <p></br><b>Note:</b></br>
 * &nbsp&nbsp&nbspt and d parameters can be in frames or seconds/milliseconds
 *
 * @param t Elapsed time
 * @param b Initial position
 * @param c Final position
 * @param d Duration
 * @return A value between b and c parameters
 */

function easeLinear(t, b, c, d) {
    return c * t / d + b;
}

//----------------------
// Quad		
/**
 * Interpolates a value between b and c parameters
 * <p></br><b>Note:</b></br>
 * &nbsp&nbsp&nbspt and d parameters can be in frames or seconds/milliseconds
 *
 * @param t Elapsed time
 * @param b Initial position
 * @param c Final position
 * @param d Duration
 * @return A value between b and c parameters
 */

function easeInQuad(t, b, c, d) {
    return c * (t /= d) * t + b;
}
//----------------------
// Sine	
/**
 * Interpolates a value between b and c parameters
 * <p></br><b>Note:</b></br>
 * &nbsp&nbsp&nbspt and d parameters can be in frames or seconds/milliseconds
 *
 * @param t Elapsed time
 * @param b Initial position
 * @param c Final position
 * @param d Duration
 * @return A value between b and c parameters
 */

function easeInSine(t, b, c, d) {
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
}



function easeInCubic(t, b, c, d) {
    return c * (t /= d) * t * t + b;
};


function getTrajectoryPoint(t, p) {
    var result = new createjs.Point();
    var oneMinusTSq = (1 - t) * (1 - t);
    var TSq = t * t;
    result.x = oneMinusTSq * p.start.x + 2 * (1 - t) * t * p.traj.x + TSq * p.end.x;
    result.y = oneMinusTSq * p.start.y + 2 * (1 - t) * t * p.traj.y + TSq * p.end.y;
    return result;
}

function formatTime(iTime) {
    iTime /= 1000;
    var iMins = Math.floor(iTime / 60);
    var iSecs = Math.floor(iTime - (iMins * 60));
    //iSecs = parseFloat(iSecs).toFixed(1)

    var szRet = "";

    if (iMins < 10) {
        szRet += "0" + iMins + ":";
    } else {
        szRet += iMins + ":";
    }

    if (iSecs < 10) {
        szRet += "0" + iSecs;
    } else {
        szRet += iSecs;
    }

    return szRet;
}

function degreesToRadians(iAngle) {
    return iAngle * Math.PI / 180;
}

function checkRectCollision(bitmap1, bitmap2) {
    var b1, b2;
    b1 = getBounds(bitmap1, 0.9);
    b2 = getBounds(bitmap2, 0.98);
    return calculateIntersection(b1, b2);
}

function collisionWithCircle(oObj1, oObj2, fFactor) {
    var iDx = oObj1.getX() - oObj2.getX();
    var iDy = oObj1.getY() - oObj2.getY();
    var fdistance = Math.sqrt((iDx * iDx) + (iDy * iDy));
    if (fdistance < (PLAYER_RADIUS * fFactor) + (CELL_SIZE * fFactor)) {
        return true;
    } else {
        return false;
    }
}

function calculateIntersection(rect1, rect2) {
    // first we have to calculate the
    // center of each rectangle and half of
    // width and height
    var dx, dy, r1 = {},
        r2 = {};
    r1.cx = rect1.x + (r1.hw = (rect1.width / 2));
    r1.cy = rect1.y + (r1.hh = (rect1.height / 2));
    r2.cx = rect2.x + (r2.hw = (rect2.width / 2));
    r2.cy = rect2.y + (r2.hh = (rect2.height / 2));

    dx = Math.abs(r1.cx - r2.cx) - (r1.hw + r2.hw);
    dy = Math.abs(r1.cy - r2.cy) - (r1.hh + r2.hh);

    if (dx < 0 && dy < 0) {
        dx = Math.min(Math.min(rect1.width, rect2.width), -dx);
        dy = Math.min(Math.min(rect1.height, rect2.height), -dy);
        return {
            x: Math.max(rect1.x, rect2.x),
            y: Math.max(rect1.y, rect2.y),
            width: dx,
            height: dy,
            rect1: rect1,
            rect2: rect2
        };
    } else {
        return null;
    }
}

function getBounds(obj, iTolerance) {
    var bounds = {
        x: Infinity,
        y: Infinity,
        width: 0,
        height: 0
    };
    if (obj instanceof createjs.Container) {
        bounds.x2 = -Infinity;
        bounds.y2 = -Infinity;
        var children = obj.children,
            l = children.length,
            cbounds, c;
        for (c = 0; c < l; c++) {
            cbounds = getBounds(children[c], 1);
            if (cbounds.x < bounds.x) bounds.x = cbounds.x;
            if (cbounds.y < bounds.y) bounds.y = cbounds.y;
            if (cbounds.x + cbounds.width > bounds.x2) bounds.x2 = cbounds.x + cbounds.width;
            if (cbounds.y + cbounds.height > bounds.y2) bounds.y2 = cbounds.y + cbounds.height;
            //if ( cbounds.x - bounds.x + cbounds.width  > bounds.width  ) bounds.width  = cbounds.x - bounds.x + cbounds.width;
            //if ( cbounds.y - bounds.y + cbounds.height > bounds.height ) bounds.height = cbounds.y - bounds.y + cbounds.height;
        }
        if (bounds.x == Infinity) bounds.x = 0;
        if (bounds.y == Infinity) bounds.y = 0;
        if (bounds.x2 == Infinity) bounds.x2 = 0;
        if (bounds.y2 == Infinity) bounds.y2 = 0;

        bounds.width = bounds.x2 - bounds.x;
        bounds.height = bounds.y2 - bounds.y;
        delete bounds.x2;
        delete bounds.y2;
    } else {
        var gp, gp2, gp3, gp4, imgr = {},
            sr;
        if (obj instanceof createjs.Bitmap) {
            sr = obj.sourceRect || obj.image;

            imgr.width = sr.width * iTolerance;
            imgr.height = sr.height * iTolerance;
        } else if (obj instanceof createjs.Sprite) {
            if (obj.spriteSheet._frames && obj.spriteSheet._frames[obj.currentFrame] && obj.spriteSheet._frames[obj.currentFrame].image) {
                var cframe = obj.spriteSheet.getFrame(obj.currentFrame);
                imgr.width = cframe.rect.width;
                imgr.height = cframe.rect.height;
                imgr.regX = cframe.regX;
                imgr.regY = cframe.regY;
            } else {
                bounds.x = obj.x || 0;
                bounds.y = obj.y || 0;
            }
        } else {
            bounds.x = obj.x || 0;
            bounds.y = obj.y || 0;
        }

        imgr.regX = imgr.regX || 0;
        imgr.width = imgr.width || 0;
        imgr.regY = imgr.regY || 0;
        imgr.height = imgr.height || 0;
        bounds.regX = imgr.regX;
        bounds.regY = imgr.regY;

        gp = obj.localToGlobal(0 - imgr.regX, 0 - imgr.regY);
        gp2 = obj.localToGlobal(imgr.width - imgr.regX, imgr.height - imgr.regY);
        gp3 = obj.localToGlobal(imgr.width - imgr.regX, 0 - imgr.regY);
        gp4 = obj.localToGlobal(0 - imgr.regX, imgr.height - imgr.regY);

        bounds.x = Math.min(Math.min(Math.min(gp.x, gp2.x), gp3.x), gp4.x);
        bounds.y = Math.min(Math.min(Math.min(gp.y, gp2.y), gp3.y), gp4.y);
        bounds.width = Math.max(Math.max(Math.max(gp.x, gp2.x), gp3.x), gp4.x) - bounds.x;
        bounds.height = Math.max(Math.max(Math.max(gp.y, gp2.y), gp3.y), gp4.y) - bounds.y;
    }
    return bounds;
}

function NoClickDelay(el) {
    this.element = el;
    if (window.Touch) this.element.addEventListener('touchstart', this, false);
}
//Fisher-Yates Shuffle
function shuffle(array) {
    var counter = array.length,
        temp, index;
    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);
        // Decrease counter by 1
        counter--;
        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}

NoClickDelay.prototype = {
    handleEvent: function(e) {
        switch (e.type) {
            case 'touchstart':
                this.onTouchStart(e);
                break;
            case 'touchmove':
                this.onTouchMove(e);
                break;
            case 'touchend':
                this.onTouchEnd(e);
                break;
        }
    },

    onTouchStart: function(e) {
        e.preventDefault();
        this.moved = false;

        this.element.addEventListener('touchmove', this, false);
        this.element.addEventListener('touchend', this, false);
    },

    onTouchMove: function(e) {
        this.moved = true;
    },

    onTouchEnd: function(e) {
        this.element.removeEventListener('touchmove', this, false);
        this.element.removeEventListener('touchend', this, false);

        if (!this.moved) {
            var theTarget = document.elementFromPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
            if (theTarget.nodeType == 3) theTarget = theTarget.parentNode;

            var theEvent = document.createEvent('MouseEvents');
            theEvent.initEvent('click', true, true);
            theTarget.dispatchEvent(theEvent);
        }
    }

};

(function() {
    var hidden = "hidden";

    // Standards:
    if (hidden in document)
        document.addEventListener("visibilitychange", onchange);
    else if ((hidden = "mozHidden") in document)
        document.addEventListener("mozvisibilitychange", onchange);
    else if ((hidden = "webkitHidden") in document)
        document.addEventListener("webkitvisibilitychange", onchange);
    else if ((hidden = "msHidden") in document)
        document.addEventListener("msvisibilitychange", onchange);
    // IE 9 and lower:
    else if ('onfocusin' in document)
        document.onfocusin = document.onfocusout = onchange;
    // All others:
    else
        window.onpageshow = window.onpagehide = window.onfocus = window.onblur = onchange;

    function onchange(evt) {
        var v = 'visible',
            h = 'hidden',
            evtMap = {
                focus: v,
                focusin: v,
                pageshow: v,
                blur: h,
                focusout: h,
                pagehide: h
            };

        evt = evt || window.event;

        if (evt.type in evtMap) {
            document.body.className = evtMap[evt.type];
        } else {
            document.body.className = this[hidden] ? "hidden" : "visible";

            if (document.body.className === "hidden") {
                s_oMain.stopUpdate();
            } else {
                s_oMain.startUpdate();
            }
        }
    }
})();

function ctlArcadeResume() {
    if (s_oMain !== null) {
        s_oMain.startUpdate();
    }
}

function ctlArcadePause() {
    if (s_oMain !== null) {
        s_oMain.stopUpdate();
    }

}

function getParamValue(paramName) {
    var url = window.location.search.substring(1);
    var qArray = url.split('&');
    for (var i = 0; i < qArray.length; i++) {
        var pArr = qArray[i].split('=');
        if (pArr[0] == paramName)
            return pArr[1];
    }
}


function playSound(szSound, iVolume, bLoop) {
    if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {

        s_aSounds[szSound].play();
        s_aSounds[szSound].volume(iVolume);

        s_aSounds[szSound].loop(bLoop);

        return s_aSounds[szSound];
    }
    return null;
}

function stopSound(szSound) {
    if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
        s_aSounds[szSound].stop();
    }
}

function setVolume(szSound, iVolume) {
    if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
        s_aSounds[szSound].volume(iVolume);
    }
}

function setMute(szSound, bMute) {
    if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
        s_aSounds[szSound].mute(bMute);
    }
}

function saveItem(szItem, oValue) {
    if (s_bStorageAvailable) {
        localStorage.setItem(szItem, oValue);
    }
}

function getItem(szItem) {
    if (s_bStorageAvailable) {
        return localStorage.getItem(szItem);
    }
    return null;
}


function fullscreenHandler() {
    if (!ENABLE_FULLSCREEN || !screenfull.isEnabled) {
        return;
    }

    s_bFullscreen = screenfull.isFullscreen;

    if (s_oInterface !== null) {
        s_oInterface.resetFullscreenBut();
    }

    if (s_oMenu !== null) {
        s_oMenu.resetFullscreenBut();
    }

    if (s_oLevelMenu !== null) {
        s_oLevelMenu.resetFullscreenBut();
    }

}


if (screenfull.isEnabled) {
    screenfull.on('change', function() {
        s_bFullscreen = screenfull.isFullscreen;

        if (s_oInterface !== null) {
            s_oInterface.resetFullscreenBut();
        }

        if (s_oMenu !== null) {
            s_oMenu.resetFullscreenBut();
        }

        if (s_oLevelMenu !== null) {
            s_oLevelMenu.resetFullscreenBut();
        }

    });
}



function CSpriteLibrary() {

    var _oLibSprites = {};
    var _oSpritesToLoad;
    var _iNumSprites;
    var _iCntSprites;
    var _cbCompleted;
    var _cbTotalCompleted;
    var _cbOwner;

    this.init = function(cbCompleted, cbTotalCompleted, cbOwner) {
        _oSpritesToLoad = {};
        _iNumSprites = 0;
        _iCntSprites = 0;
        _cbCompleted = cbCompleted;
        _cbTotalCompleted = cbTotalCompleted;
        _cbOwner = cbOwner;
    };

    this.addSprite = function(szKey, szPath) {
        if (_oLibSprites.hasOwnProperty(szKey)) {
            return;
        }

        var oImage = new Image();
        _oLibSprites[szKey] = _oSpritesToLoad[szKey] = {
            szPath: szPath,
            oSprite: oImage,
            bLoaded: false
        };
        _iNumSprites++;
    };

    this.getSprite = function(szKey) {
        if (!_oLibSprites.hasOwnProperty(szKey)) {
            return null;
        } else {
            return _oLibSprites[szKey].oSprite;
        }
    };

    this._onSpritesLoaded = function() {
        _iNumSprites = 0;
        _cbTotalCompleted.call(_cbOwner);
    };

    this._onSpriteLoaded = function() {
        _cbCompleted.call(_cbOwner);
        if (++_iCntSprites === _iNumSprites) {
            this._onSpritesLoaded();
        }

    };

    this.loadSprites = function() {

        for (var szKey in _oSpritesToLoad) {

            _oSpritesToLoad[szKey].oSprite["oSpriteLibrary"] = this;
            _oSpritesToLoad[szKey].oSprite["szKey"] = szKey;
            _oSpritesToLoad[szKey].oSprite.onload = function() {
                this.oSpriteLibrary.setLoaded(this.szKey);
                this.oSpriteLibrary._onSpriteLoaded(this.szKey);
            };
            _oSpritesToLoad[szKey].oSprite.onerror = function(evt) {
                var oSpriteToRestore = evt.currentTarget;

                setTimeout(function() {
                    _oSpritesToLoad[oSpriteToRestore.szKey].oSprite.src = _oSpritesToLoad[oSpriteToRestore.szKey].szPath;
                }, 500);
            };
            _oSpritesToLoad[szKey].oSprite.src = _oSpritesToLoad[szKey].szPath;
        }
    };

    this.setLoaded = function(szKey) {
        _oLibSprites[szKey].bLoaded = true;
    };

    this.isLoaded = function(szKey) {
        return _oLibSprites[szKey].bLoaded;
    };

    this.getNumSprites = function() {
        return _iNumSprites;
    };
}

var CANVAS_WIDTH = 1920;
var CANVAS_HEIGHT = 1920;

var EDGEBOARD_X = 0;
var EDGEBOARD_Y = 0;

var FONT = "walibi0615bold";
var FONT_OUTLINE = 3;

var SOUNDTRACK_VOLUME_IN_GAME = 0.5;

var FPS = 30;
var DISABLE_SOUND_MOBILE = false;

var STATE_LOADING = 0;
var STATE_MENU = 1;
var STATE_LEVEL = 2;
var STATE_GAME = 3;



var ON_MOUSE_DOWN = 0;
var ON_MOUSE_UP = 1;
var ON_MOUSE_OVER = 2;
var ON_MOUSE_OUT = 3;
var ON_BUT_YES_DOWN = 4;
var ON_BACK_MENU = 5;
var ON_RESTART = 6;
var ON_NEXT = 7;

var DIR_TOP = 0;
var DIR_RIGHT = 1;
var DIR_BOTTOM = 2;
var DIR_LEFT = 3;


var ANIM_IDLE = "idle";
var ANIM_WALK = "walk";
var ANIM_ATTACK = "attack";
var ANIM_ESCAPE = "escape";
var ANIM_DIE = "die";

var SCORE_X = 200;
var SCORE_Y = 200;
var GRID_ROWS = 20;
var GRID_COLS = 19;
var CELL_SIZE = 52;
var GRID_X = CANVAS_WIDTH / 2;
var GRID_Y = CANVAS_HEIGHT / 2;
var GRID_WIDTH = CELL_SIZE * GRID_COLS;
var GRID_HEIGHT = CELL_SIZE * GRID_ROWS;
var CUR_GRID_SCALE = 1;
var NUM_LIVES;

var HERO_WIDTH = 74;
var HERO_HEIGHT = 55;
var ENEMY_WIDTH = 74;
var ENEMY_HEIGHT = 55;
var ENABLE_FULLSCREEN;

// KEY CODES
var LEFT_DIR = 37;
var TOP_DIR = 38;
var RIGHT_DIR = 39;
var BOTTOM_DIR = 40;

var CELL_EMPTY = 0;
var CELL_WALL = 1;
var CELL_CHEESE = 2;
var CELL_SUPER_CHEESE = 3;

var STATE_ENEMY_IDLE = 0;
var STATE_ENEMY_FOLLOW = 1;
var STATE_ENEMY_ESCAPE = 2;

var PLAYER_SPEED = 6;
var ENEMY_SPEED = 300;
var ENEMY_SPEED_SLOW = 500;
var PLAYER_RADIUS = 52;
var POINT_PER_ITEM;
var POINT_PER_POWERUP;
var POINT_KILL_ENEMY;
var NUM_ENEMIES = 3;
var ENEMY_ENTRY_TYPE = 22;
var COLLISION_DIST = CELL_SIZE * 0.8;
var FOLLOW_DIST = CELL_SIZE * 4;
var TIME_POWERUP;
var NUM_COLS_PAGE_LEVEL = 3;
var NUM_ROWS_PAGE_LEVEL = 2;
var NUM_LEVELS = 6;

function CMain(oData) {
    var _bUpdate;
    var _iCurResource = 0;
    var RESOURCE_TO_LOAD = 0;
    var _iState = STATE_LOADING;
    var _oData;

    var _oPreloader;
    var _oMenu;
    var _oLevelMenu;
    var _oGame;

    this.initContainer = function() {
        s_oCanvas = document.getElementById("canvas");
        s_oStage = new createjs.Stage(s_oCanvas);
        createjs.Touch.enable(s_oStage, true);
        s_oStage.preventSelection = false;

        s_bMobile = isMobile();
        if (s_bMobile === false) {
            s_oStage.enableMouseOver(20);
        }

        s_iPrevTime = new Date().getTime();

        createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.framerate = FPS;

        if (navigator.userAgent.match(/Windows Phone/i)) {
            DISABLE_SOUND_MOBILE = true;
        }

        s_oSpriteLibrary = new CSpriteLibrary();

        //ADD PRELOADER
        _oPreloader = new CPreloader();


    };

    this.preloaderReady = function() {
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            this._initSounds();
        }

        this._loadImages();
        _bUpdate = true;
    };

    this.soundLoaded = function() {
        _iCurResource++;
        var iPerc = Math.floor(_iCurResource / RESOURCE_TO_LOAD * 100);
        _oPreloader.refreshLoader(iPerc);
    };

    this._initSounds = function() {
        Howler.mute(!s_bAudioActive);

        s_aSoundsInfo = new Array();
        s_aSoundsInfo.push({
            path: './sounds/',
            filename: 'game_over',
            loop: false,
            volume: 1,
            ingamename: 'game_over'
        });
        s_aSoundsInfo.push({
            path: './sounds/',
            filename: 'click',
            loop: false,
            volume: 1,
            ingamename: 'click'
        });
        s_aSoundsInfo.push({
            path: './sounds/',
            filename: 'enemy_0_death',
            loop: false,
            volume: 1,
            ingamename: 'enemy_0_death'
        });
        s_aSoundsInfo.push({
            path: './sounds/',
            filename: 'enemy_1_death',
            loop: false,
            volume: 1,
            ingamename: 'enemy_1_death'
        });
        s_aSoundsInfo.push({
            path: './sounds/',
            filename: 'enemy_2_death',
            loop: false,
            volume: 1,
            ingamename: 'enemy_2_death'
        });
        s_aSoundsInfo.push({
            path: './sounds/',
            filename: 'hero_death',
            loop: false,
            volume: 1,
            ingamename: 'hero_death'
        });
        s_aSoundsInfo.push({
            path: './sounds/',
            filename: 'hero_eating',
            loop: false,
            volume: 1,
            ingamename: 'hero_eating'
        });
        s_aSoundsInfo.push({
            path: './sounds/',
            filename: 'hero_powerup',
            loop: false,
            volume: 1,
            ingamename: 'hero_powerup'
        });
        s_aSoundsInfo.push({
            path: './sounds/',
            filename: 'hero_powerup_off',
            loop: false,
            volume: 1,
            ingamename: 'hero_powerup_off'
        });
        s_aSoundsInfo.push({
            path: './sounds/',
            filename: 'ready_go',
            loop: false,
            volume: 1,
            ingamename: 'ready_go'
        });
        s_aSoundsInfo.push({
            path: './sounds/',
            filename: 'win_level',
            loop: false,
            volume: 1,
            ingamename: 'win_level'
        });
        s_aSoundsInfo.push({
            path: './sounds/',
            filename: 'soundtrack',
            loop: true,
            volume: 1,
            ingamename: 'soundtrack'
        });

        RESOURCE_TO_LOAD += s_aSoundsInfo.length;

        s_aSounds = new Array();
        for (var i = 0; i < s_aSoundsInfo.length; i++) {
            this.tryToLoadSound(s_aSoundsInfo[i], false);
        }
    };

    this.tryToLoadSound = function(oSoundInfo, bDelay) {

        setTimeout(function() {
            s_aSounds[oSoundInfo.ingamename] = new Howl({
                src: [oSoundInfo.path + oSoundInfo.filename + '.mp3'],
                autoplay: false,
                preload: true,
                loop: oSoundInfo.loop,
                volume: oSoundInfo.volume,
                onload: s_oMain.soundLoaded,
                onloaderror: function(szId, szMsg) {
                    for (var i = 0; i < s_aSoundsInfo.length; i++) {
                        if (szId === s_aSounds[s_aSoundsInfo[i].ingamename]._sounds[0]._id) {
                            s_oMain.tryToLoadSound(s_aSoundsInfo[i], true);
                            break;
                        }
                    }
                },
                onplayerror: function(szId) {
                    for (var i = 0; i < s_aSoundsInfo.length; i++) {
                        if (szId === s_aSounds[s_aSoundsInfo[i].ingamename]._sounds[0]._id) {
                            s_aSounds[s_aSoundsInfo[i].ingamename].once('unlock', function() {
                                s_aSounds[s_aSoundsInfo[i].ingamename].play();
                                if (s_aSoundsInfo[i].ingamename === "soundtrack" && s_oGame !== null) {
                                    setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME);
                                }

                            });
                            break;
                        }
                    }

                }
            });


        }, (bDelay ? 200 : 0));
    };

    this._loadImages = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);

        s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png");
        s_oSpriteLibrary.addSprite("but_home", "./sprites/but_home.png");
        s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png");
        s_oSpriteLibrary.addSprite("but_start", "./sprites/but_start.png");
        s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg");
        s_oSpriteLibrary.addSprite("bg_help", "./sprites/bg_help.png");
        s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("life", "./sprites/life.png");
        s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
        s_oSpriteLibrary.addSprite("ctl_logo", "./sprites/ctl_logo.png");
        s_oSpriteLibrary.addSprite("score_bg", "./sprites/score_bg.png");
        s_oSpriteLibrary.addSprite("but_yes", "./sprites/but_yes.png");
        s_oSpriteLibrary.addSprite("bg_level_selection", "./sprites/bg_level_selection.png");
        s_oSpriteLibrary.addSprite("but_level", "./sprites/but_level.png");
        s_oSpriteLibrary.addSprite("but_next", "./sprites/but_next.png");
        s_oSpriteLibrary.addSprite("but_delete", "./sprites/but_delete.png");
        s_oSpriteLibrary.addSprite("door", "./sprites/door.png");
        s_oSpriteLibrary.addSprite("exit_door_menu", "./sprites/exit_door_menu.png");
        s_oSpriteLibrary.addSprite("exit_door_left", "./sprites/exit_door_left.png");
        s_oSpriteLibrary.addSprite("exit_door_right", "./sprites/exit_door_right.png");
        s_oSpriteLibrary.addSprite("hand_swipe", "./sprites/hand_swipe.png");
        s_oSpriteLibrary.addSprite("keyboard", "./sprites/keyboard.png");
        s_oSpriteLibrary.addSprite("swipe_trail", "./sprites/swipe_trail.png");

        s_oSpriteLibrary.addSprite("enemy_bottom_0", "./sprites/enemy_bottom_0.png");
        s_oSpriteLibrary.addSprite("enemy_bottom_1", "./sprites/enemy_bottom_1.png");
        s_oSpriteLibrary.addSprite("enemy_bottom_2", "./sprites/enemy_bottom_2.png");
        s_oSpriteLibrary.addSprite("enemy_left_0", "./sprites/enemy_left_0.png");
        s_oSpriteLibrary.addSprite("enemy_left_1", "./sprites/enemy_left_1.png");
        s_oSpriteLibrary.addSprite("enemy_left_2", "./sprites/enemy_left_2.png");
        s_oSpriteLibrary.addSprite("enemy_right_0", "./sprites/enemy_right_0.png");
        s_oSpriteLibrary.addSprite("enemy_right_1", "./sprites/enemy_right_1.png");
        s_oSpriteLibrary.addSprite("enemy_right_2", "./sprites/enemy_right_2.png");
        s_oSpriteLibrary.addSprite("enemy_top_0", "./sprites/enemy_top_0.png");
        s_oSpriteLibrary.addSprite("enemy_top_1", "./sprites/enemy_top_1.png");
        s_oSpriteLibrary.addSprite("enemy_top_2", "./sprites/enemy_top_2.png");

        s_oSpriteLibrary.addSprite("hero_bottom", "./sprites/hero_bottom.png");
        s_oSpriteLibrary.addSprite("hero_left", "./sprites/hero_left.png");
        s_oSpriteLibrary.addSprite("hero_right", "./sprites/hero_right.png");
        s_oSpriteLibrary.addSprite("hero_top", "./sprites/hero_top.png");

        s_oSpriteLibrary.addSprite("walls", "./sprites/walls.png");


        RESOURCE_TO_LOAD += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites();
    };

    this._onImagesLoaded = function() {
        _iCurResource++;
        var iPerc = Math.floor(_iCurResource / RESOURCE_TO_LOAD * 100);
        //console.log("PERC: "+iPerc);
        _oPreloader.refreshLoader(iPerc);
    };

    this._onRemovePreloader = function() {
        try {
            saveItem("ls_available", "ok");
        } catch (evt) {
            // localStorage not defined
            s_bStorageAvailable = false;
        }

        _oPreloader.unload();

        s_oSoundTrack = playSound("soundtrack", 1, true);

        this.gotoMenu();
    };

    this._onAllImagesLoaded = function() {

    };

    this.onAllPreloaderImagesLoaded = function() {
        this._loadImages();
    };

    this.levelSelected = function(iLevel) {
        if (iLevel >= s_iLastLevel) {
            s_iLastLevel = iLevel;
        }
        var iScore = getScoreTillLevel(iLevel);
        var iLives = getLives(iLevel);

        this.gotoGame(iLevel, iScore, iLives);
    };

    this.gotoMenu = function() {
        _oMenu = new CMenu();
        _iState = STATE_MENU;
    };

    this.gotoLevelPanel = function() {
        _oLevelMenu = new CLevelMenu();
        _iState = STATE_LEVEL;
    };

    this.gotoGame = function(iLevel, iScore, iLives) {
        _oGame = new CGame(iLevel, iScore, iLives);
        _iState = STATE_GAME;
    };

    this.stopUpdateNoBlock = function() {
        _bUpdate = false;
        createjs.Ticker.paused = true;
    };

    this.startUpdateNoBlock = function() {
        s_iPrevTime = new Date().getTime();
        _bUpdate = true;
        createjs.Ticker.paused = false;
    };

    this.stopUpdate = function() {
        _bUpdate = false;
        createjs.Ticker.paused = true;
        $("#block_game").css("display", "block");

        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            Howler.mute(true);
        }

    };

    this.startUpdate = function() {
        s_iPrevTime = new Date().getTime();
        _bUpdate = true;
        createjs.Ticker.paused = false;
        $("#block_game").css("display", "none");

        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            if (s_bAudioActive) {
                Howler.mute(false);
            }
        }

    };

    this._update = function(event) {
        if (_bUpdate === false) {
            return;
        }
        var iCurTime = new Date().getTime();
        s_iTimeElaps = iCurTime - s_iPrevTime;
        s_iCntTime += s_iTimeElaps;
        s_iCntFps++;
        s_iPrevTime = iCurTime;

        if (s_iCntTime >= 1000) {
            s_iCurFps = s_iCntFps;
            s_iCntTime -= 1000;
            s_iCntFps = 0;
        }

        if (_iState === STATE_MENU) {
            _oMenu.update();
        }

        if (_iState === STATE_GAME) {
            _oGame.update();
        }

        s_oStage.update(event);

    };

    s_oMain = this;

    _oData = oData;

    NUM_LIVES = oData.lives;
    POINT_PER_ITEM = oData.point_item;
    POINT_PER_POWERUP = oData.point_powerup;
    POINT_KILL_ENEMY = oData.point_kill_enemy;
    TIME_POWERUP = oData.time_powerup;

    ENABLE_FULLSCREEN = oData.fullscreen;

    s_bAudioActive = oData.audio_enable_on_startup;

    this.initContainer();
}
var s_bMobile;
var s_bAudioActive = false;
var s_iCntTime = 0;
var s_iTimeElaps = 0;
var s_iPrevTime = 0;
var s_iCntFps = 0;
var s_iCurFps = 0;

var s_oDrawLayer;
var s_oStage;
var s_oMain;
var s_oSpriteLibrary;
var s_oSoundTrack = null;
var s_oCanvas;
var s_bFullscreen = false;
var s_aSounds;
var s_aSoundsInfo;
var s_bStorageAvailable = true;
var s_iBestScore = 0;
var s_bFirstPlay = true;
var s_iLastLevel = 1;

function CPreloader() {
    var _iMaskWidth;
    var _iMaskHeight;
    var _oLoadingText;
    var _oProgressBar;
    var _oMaskPreloader;
    var _oFade;
    var _oIcon;
    var _oIconMask;

    var _oContainer;

    this._init = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
        s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
        s_oSpriteLibrary.addSprite("but_start", "./sprites/but_start.png");
        s_oSpriteLibrary.loadSprites();

        _oContainer = new createjs.Container();
        s_oStage.addChild(_oContainer);

    };

    this.unload = function() {
        _oContainer.removeAllChildren();

    };

    this._onImagesLoaded = function() {

    };

    this._onAllImagesLoaded = function() {

        this.attachSprites();

        s_oMain.preloaderReady();

    };

    this.attachSprites = function() {

        var oBg = new createjs.Shape();
        oBg.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        _oContainer.addChild(oBg);

        var oSprite = s_oSpriteLibrary.getSprite('200x200');
        _oIcon = createBitmap(oSprite);
        _oIcon.regX = oSprite.width * 0.5;
        _oIcon.regY = oSprite.height * 0.5;
        _oIcon.x = CANVAS_WIDTH / 2;
        _oIcon.y = CANVAS_HEIGHT / 2 - 180;
        _oContainer.addChild(_oIcon);

        _oIconMask = new createjs.Shape();
        _oIconMask.graphics.beginFill("rgba(0,0,0,0.01)").drawRoundRect(_oIcon.x - 100, _oIcon.y - 100, 200, 200, 10);
        _oContainer.addChild(_oIconMask);

        _oIcon.mask = _oIconMask;

        var oSprite = s_oSpriteLibrary.getSprite('progress_bar');
        _oProgressBar = createBitmap(oSprite);
        _oProgressBar.x = CANVAS_WIDTH / 2 - (oSprite.width / 2);
        _oProgressBar.y = CANVAS_HEIGHT / 2 + 50;
        _oContainer.addChild(_oProgressBar);

        _iMaskWidth = oSprite.width;
        _iMaskHeight = oSprite.height;
        _oMaskPreloader = new createjs.Shape();
        _oMaskPreloader.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(_oProgressBar.x, _oProgressBar.y, 1, _iMaskHeight);

        _oContainer.addChild(_oMaskPreloader);

        _oProgressBar.mask = _oMaskPreloader;

        _oLoadingText = new createjs.Text("", "30px " + FONT, "#fff");
        _oLoadingText.x = CANVAS_WIDTH / 2;
        _oLoadingText.y = CANVAS_HEIGHT / 2 + 100;
        _oLoadingText.textBaseline = "alphabetic";
        _oLoadingText.textAlign = "center";
        _oContainer.addChild(_oLoadingText);

        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        _oContainer.addChild(_oFade);

        createjs.Tween.get(_oFade).to({
            alpha: 0
        }, 500).call(function() {
            createjs.Tween.removeTweens(_oFade);
            _oContainer.removeChild(_oFade);
        });


    };

    this._onButStartRelease = function() {
        s_oMain._onRemovePreloader();
    };

    this.refreshLoader = function(iPerc) {
        _oLoadingText.text = iPerc + "%";

        if (iPerc === 100) {

            _oLoadingText.visible = false;
            _oProgressBar.visible = false;
            s_oMain._onRemovePreloader();
        };

        _oMaskPreloader.graphics.clear();
        var iNewMaskWidth = Math.floor((iPerc * _iMaskWidth) / 100);
        _oMaskPreloader.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(_oProgressBar.x, _oProgressBar.y, iNewMaskWidth, _iMaskHeight);
    };

    this._init();
}

function CTextButton(iXPos, iYPos, oSprite, szText, szFont, szColor, iFontSize, bAttach) {
    var _bDisable;
    var _iWidth;
    var _iHeight;
    var _aCbCompleted;
    var _aCbOwner;
    var _oParams;
    var _oButton;
    var _oTextBack;
    var _oText;
    var _oButtonBg;

    this._init = function(iXPos, iYPos, oSprite, szText, szFont, szColor, iFontSize, bAttach) {
        _bDisable = false;
        _aCbCompleted = new Array();
        _aCbOwner = new Array();

        _oButtonBg = createBitmap(oSprite);
        _iWidth = oSprite.width;
        _iHeight = oSprite.height;

        _oButton = new createjs.Container();
        _oButton.x = iXPos;
        _oButton.y = iYPos;
        _oButton.regX = oSprite.width / 2;
        _oButton.regY = oSprite.height / 2;


        var iWidth = oSprite.width - 20;
        var iHeight = oSprite.height - 20;

        var iX = oSprite.width / 2;
        var iY = oSprite.height / 2;
        _oTextBack = new CTLText(_oButton,
            iX - iWidth / 2, iY - iHeight / 2, iWidth, iHeight,
            iFontSize, "center", szColor, szFont, 1,
            2, 2,
            szText,
            true, true, true,
            false);
        _oTextBack.setOutline(FONT_OUTLINE);
        _oText = new CTLText(_oButton,
            iX - iWidth / 2, iY - iHeight / 2, iWidth, iHeight,
            iFontSize, "center", szColor, szFont, 1,
            2, 2,
            szText,
            true, true, true,
            false);


        if (!s_bMobile) {
            _oButton.cursor = "pointer";
        }
        _oButton.addChild(_oButtonBg, _oTextBack, _oText);

        if (bAttach !== false) {
            s_oStage.addChild(_oButton);
        }

        this._initListener();
    };

    this.unload = function() {
        _oButton.removeAllEventListeners();


        s_oStage.removeChild(_oButton);
    };

    this.setVisible = function(bVisible) {
        _oButton.visible = bVisible;
    };

    this.setAlign = function(szAlign) {
        _oText.textAlign = szAlign;
        _oTextBack.textAlign = szAlign;
    };

    this.enable = function() {
        _bDisable = false;

        _oButtonBg.filters = [];

        _oButtonBg.cache(0, 0, _iWidth, _iHeight);
    };

    this.disable = function() {
        _bDisable = true;

        var matrix = new createjs.ColorMatrix().adjustSaturation(-100).adjustBrightness(40);
        _oButtonBg.filters = [
            new createjs.ColorMatrixFilter(matrix)
        ];
        _oButtonBg.cache(0, 0, _iWidth, _iHeight);
    };

    this._initListener = function() {
        _oButton.on("mousedown", this.buttonDown);
        _oButton.on("pressup", this.buttonRelease);
    };

    this.addEventListener = function(iEvent, cbCompleted, cbOwner) {
        _aCbCompleted[iEvent] = cbCompleted;
        _aCbOwner[iEvent] = cbOwner;
    };

    this.addEventListenerWithParams = function(iEvent, cbCompleted, cbOwner, oParams) {
        _aCbCompleted[iEvent] = cbCompleted;
        _aCbOwner[iEvent] = cbOwner;

        _oParams = oParams;
    };

    this.buttonRelease = function() {
        if (_bDisable) {
            return;
        }

        playSound("click", 1, false);

        _oButton.scaleX = 1;
        _oButton.scaleY = 1;

        if (_aCbCompleted[ON_MOUSE_UP]) {
            _aCbCompleted[ON_MOUSE_UP].call(_aCbOwner[ON_MOUSE_UP], _oParams);
        }
    };

    this.buttonDown = function() {
        if (_bDisable) {
            return;
        }
        _oButton.scaleX = 0.9;
        _oButton.scaleY = 0.9;

        if (_aCbCompleted[ON_MOUSE_DOWN]) {
            _aCbCompleted[ON_MOUSE_DOWN].call(_aCbOwner[ON_MOUSE_DOWN]);
        }
    };

    this.setPosition = function(iXPos, iYPos) {
        _oButton.x = iXPos;
        _oButton.y = iYPos;
    };

    this.changeText = function(szText) {
        _oText.text = szText;
        _oTextBack.text = szText;
    };

    this.setX = function(iXPos) {
        _oButton.x = iXPos;
    };

    this.setY = function(iYPos) {
        _oButton.y = iYPos;
    };

    this.getButtonImage = function() {
        return _oButton;
    };

    this.getX = function() {
        return _oButton.x;
    };

    this.getY = function() {
        return _oButton.y;
    };

    this.getSprite = function() {
        return _oButton;
    };

    this._init(iXPos, iYPos, oSprite, szText, szFont, szColor, iFontSize, bAttach);

    return this;

}

function CToggle(iXPos, iYPos, oSprite, bActive, oParentContainer) {
    var _bActive;
    var _aCbCompleted;
    var _aCbOwner;
    var _aParams = [];
    var _oButton;
    var _oParentContainer = oParentContainer;

    this._init = function(iXPos, iYPos, oSprite, bActive) {
        _aCbCompleted = new Array();
        _aCbOwner = new Array();

        var oData = {
            images: [oSprite],
            // width, height & registration point of each sprite
            frames: {
                width: oSprite.width / 2,
                height: oSprite.height,
                regX: (oSprite.width / 2) / 2,
                regY: oSprite.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        };

        var oSpriteSheet = new createjs.SpriteSheet(oData);

        _bActive = bActive;
        _oButton = createSprite(oSpriteSheet, "state_" + _bActive, (oSprite.width / 2) / 2, oSprite.height / 2, oSprite.width / 2, oSprite.height);
        _oButton.mouseEnabled = true;
        _oButton.x = iXPos;
        _oButton.y = iYPos;
        _oButton.stop();
        _oButton.cursor = "pointer";
        _oParentContainer.addChild(_oButton);

        this._initListener();
    };

    this.unload = function() {
        _oButton.off("mousedown", this.buttonDown);
        _oButton.off("pressup", this.buttonRelease);
        _oButton.mouseEnabled = false;
        _oParentContainer.removeChild(_oButton);
    };

    this._initListener = function() {
        _oButton.on("mousedown", this.buttonDown);
        _oButton.on("pressup", this.buttonRelease);
    };

    this.addEventListener = function(iEvent, cbCompleted, cbOwner) {
        _aCbCompleted[iEvent] = cbCompleted;
        _aCbOwner[iEvent] = cbOwner;
    };

    this.addEventListenerWithParams = function(iEvent, cbCompleted, cbOwner, aParams) {
        _aCbCompleted[iEvent] = cbCompleted;
        _aCbOwner[iEvent] = cbOwner;
        _aParams = aParams;
    };

    this.setActive = function(bActive) {
        _bActive = bActive;
        _oButton.gotoAndStop("state_" + _bActive);
    };

    this.buttonRelease = function() {
        _oButton.scaleX = 1;
        _oButton.scaleY = 1;

        playSound("click", 1, false);

        _bActive = !_bActive;
        _oButton.gotoAndStop("state_" + _bActive);

        if (_aCbCompleted[ON_MOUSE_UP]) {
            _aCbCompleted[ON_MOUSE_UP].call(_aCbOwner[ON_MOUSE_UP], _aParams);
        }
    };

    this.buttonDown = function() {
        _oButton.scaleX = 0.9;
        _oButton.scaleY = 0.9;

        if (_aCbCompleted[ON_MOUSE_DOWN]) {
            _aCbCompleted[ON_MOUSE_DOWN].call(_aCbOwner[ON_MOUSE_DOWN], _aParams);
        }
    };

    this.setPosition = function(iXPos, iYPos) {
        _oButton.x = iXPos;
        _oButton.y = iYPos;
    };

    this.setVisible = function(bVisible) {
        _oButton.visible = bVisible;
    };

    this._init(iXPos, iYPos, oSprite, bActive);
}

function CGfxButton(iXPos, iYPos, oSprite, oParentContainer) {

    var _iScale;
    var _oListenerDown;
    var _oListenerUp;

    var _aCbCompleted;
    var _aCbOwner;
    var _aParams = [];
    var _oButton;
    var _oParentContainer;

    var _oParent = this;

    this._init = function(iXPos, iYPos, oSprite) {

        _iScale = 1;

        _aCbCompleted = new Array();
        _aCbOwner = new Array();

        _oButton = createBitmap(oSprite);
        _oButton.x = iXPos;
        _oButton.y = iYPos;
        _oButton.cursor = "pointer";
        _oButton.regX = oSprite.width / 2;
        _oButton.regY = oSprite.height / 2;

        _oParentContainer.addChild(_oButton);


        this._initListener();
    };

    this.unload = function() {
        _oButton.off("mousedown", _oListenerDown);
        _oButton.off("pressup", _oListenerUp);

        _oParentContainer.removeChild(_oButton);
    };

    this.setVisible = function(bVisible) {
        _oButton.visible = bVisible;
    };

    this.setScale = function(iScale) {
        _iScale = iScale;
        _oButton.scaleX = _oButton.scaleY = _iScale;
    };

    this._initListener = function() {
        _oListenerDown = _oButton.on("mousedown", this.buttonDown);
        _oListenerUp = _oButton.on("pressup", this.buttonRelease);
    };

    this.addEventListener = function(iEvent, cbCompleted, cbOwner) {
        _aCbCompleted[iEvent] = cbCompleted;
        _aCbOwner[iEvent] = cbOwner;
    };

    this.addEventListenerWithParams = function(iEvent, cbCompleted, cbOwner, aParams) {
        _aCbCompleted[iEvent] = cbCompleted;
        _aCbOwner[iEvent] = cbOwner;
        _aParams = aParams;
    };

    this.buttonRelease = function() {
        _oButton.scaleX = _iScale;
        _oButton.scaleY = _iScale;

        if (_aCbCompleted[ON_MOUSE_UP]) {
            _aCbCompleted[ON_MOUSE_UP].call(_aCbOwner[ON_MOUSE_UP], _aParams);
        }
    };

    this.buttonDown = function() {
        _oButton.scaleX = _iScale * 0.9;
        _oButton.scaleY = _iScale * 0.9;

        playSound("click", 1, false);

        if (_aCbCompleted[ON_MOUSE_DOWN]) {
            _aCbCompleted[ON_MOUSE_DOWN].call(_aCbOwner[ON_MOUSE_DOWN], _aParams);
        }
    };

    this.setScale = function(iValue) {
        _iScale = iValue;
        _oButton.scaleX = iValue;
        _oButton.scaleY = iValue;
    };

    this.setPosition = function(iXPos, iYPos) {
        _oButton.x = iXPos;
        _oButton.y = iYPos;
    };

    this.pulseAnimation = function() {
        createjs.Tween.get(_oButton).to({
            scaleX: _iScale * 1.1,
            scaleY: _iScale * 1.1
        }, 850, createjs.Ease.quadOut).to({
            scaleX: _iScale,
            scaleY: _iScale
        }, 650, createjs.Ease.quadIn).call(function() {
            _oParent.pulseAnimation();
        });
    };

    this.setX = function(iXPos) {
        _oButton.x = iXPos;
    };

    this.setY = function(iYPos) {
        _oButton.y = iYPos;
    };

    this.getButtonImage = function() {
        return _oButton;
    };


    this.getX = function() {
        return _oButton.x;
    };

    this.getY = function() {
        return _oButton.y;
    };

    _oParentContainer = oParentContainer;

    this._init(iXPos, iYPos, oSprite);

    return this;
}

function CMenu() {
    var INCREASE_X = 8;

    var _bUpdate = false;
    var _bAttacking;
    var _iTimeElaps;
    var _pStartPos;
    var _pEndPos;
    var _aEnemies;
    var _oHero;

    var _oButPlay;
    var _oCreditsBut;

    var _fRequestFullScreen = null;
    var _fCancelFullScreen = null;
    var _oBg;
    var _oAudioToggle;
    var _oButFullscreen;
    var _oButDelete;
    var _oAreYouSurePanel;
    var _oMaskCharacters;

    var _pStartPosAudio;
    var _pStartPosCredits;
    var _pStartPosFullscreen;
    var _pStartPosDelete;

    this._init = function() {
        _bUpdate = false;
        _bAttacking = false;
        _iTimeElaps = 0;

        _oBg = createBitmap(s_oSpriteLibrary.getSprite('bg_menu'));
        s_oStage.addChild(_oBg);

        var oSpriteStart = s_oSpriteLibrary.getSprite('but_play');
        _oButPlay = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 210, oSpriteStart, s_oStage);
        _oButPlay.addEventListener(ON_MOUSE_UP, this._onStart, this, 0);

        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            var oSprite = s_oSpriteLibrary.getSprite('audio_icon');
            _pStartPosAudio = {
                x: CANVAS_WIDTH - (oSprite.height / 2) - 10,
                y: (oSprite.height / 2) + 10
            };

            _oAudioToggle = new CToggle(_pStartPosAudio.x, _pStartPosAudio.y, oSprite, s_bAudioActive, s_oStage);
            _oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        }

        var oSprite = s_oSpriteLibrary.getSprite('but_credits');
        _pStartPosCredits = {
            x: (oSprite.width / 2) + 10,
            y: (oSprite.height / 2) + 10
        };
        _oCreditsBut = new CGfxButton(_pStartPosCredits.x, _pStartPosCredits.y, oSprite, s_oStage);
        _oCreditsBut.addEventListener(ON_MOUSE_UP, this._onCreditsBut, this);

        var doc = window.document;
        var docEl = doc.documentElement;
        _fRequestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        _fCancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

        if (ENABLE_FULLSCREEN === false) {
            _fRequestFullScreen = false;
        }

        if (_fRequestFullScreen && screenfull.isEnabled) {
            oSprite = s_oSpriteLibrary.getSprite("but_fullscreen")
            _pStartPosFullscreen = {
                x: _pStartPosCredits.x + oSprite.width / 2 + 10,
                y: (oSprite.height / 2) + 10
            };
            _oButFullscreen = new CToggle(_pStartPosFullscreen.x, _pStartPosFullscreen.y, oSprite, s_bFullscreen, s_oStage);
            _oButFullscreen.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this);
        }

        var oSpriteDelete = s_oSpriteLibrary.getSprite("but_delete");
        _pStartPosDelete = {
            x: oSpriteDelete.width / 2 + 10,
            y: CANVAS_HEIGHT - oSpriteDelete.height / 2 - 10
        };
        _oButDelete = new CGfxButton(_pStartPosDelete.x, _pStartPosDelete.y, oSpriteDelete, s_oStage);
        _oButDelete.addEventListener(ON_MOUSE_UP, this._onDelete, this);

        _oMaskCharacters = new createjs.Shape();
        _oMaskCharacters.graphics.beginFill("rgba(255,255,0,0.01)").drawRect(480, 850, 970, 150);
        s_oStage.addChild(_oMaskCharacters);

        _pStartPos = {
            x: 1430,
            y: CANVAS_HEIGHT / 2 - 25
        };
        _pEndPos = {
            x: 500,
            y: CANVAS_HEIGHT / 2 - 25
        };
        _oHero = new CHero(_pStartPos.x, _pStartPos.y, 0, 0, s_oStage);


        _aEnemies = new Array();
        var iX = _pStartPos.x + 80;
        for (var k = 0; k < 3; k++) {
            _aEnemies[k] = new CEnemy(k, iX, _pStartPos.y, 0, 0, s_oStage);
            _aEnemies[k].setMask(_oMaskCharacters);

            iX += 80;
        }



        _oHero.setMask(_oMaskCharacters);


        var oExitDoor = createBitmap(s_oSpriteLibrary.getSprite("exit_door_menu"));
        oExitDoor.x = 465;
        oExitDoor.y = 894;
        s_oStage.addChild(oExitDoor);

        var oExitDoor = createBitmap(s_oSpriteLibrary.getSprite("exit_door_menu"));
        oExitDoor.x = 1460;
        oExitDoor.y = 894;
        oExitDoor.scaleX = -1;
        s_oStage.addChild(oExitDoor);

        this.refreshButtonPos();

        this._resetCharacters();

        _oAreYouSurePanel = new CAreYouSurePanel(s_oStage);
        _oAreYouSurePanel.addEventListener(ON_BUT_YES_DOWN, this.onConfirmDelete, this);

        if (!s_bStorageAvailable) {
            new CMsgBox();
        } else {
            var szFlag = getItem(PREFIX_GAME + "level");
            if (szFlag !== null && szFlag !== undefined) {
                s_iLastLevel = parseInt(getItem(PREFIX_GAME + "level"));
            } else {
                saveItem(PREFIX_GAME + "level", 1);
            }
        }

        var oFade = new createjs.Shape();
        oFade.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(oFade);

        createjs.Tween.get(oFade).to({
            alpha: 0
        }, 1000).call(function() {
            oFade.visible = false;
        });

        _bUpdate = true;
    };

    this.unload = function() {
        _bUpdate = false;
        _oButPlay.unload();
        _oCreditsBut.unload();

        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.unload();
            _oAudioToggle = null;
        }

        if (_fRequestFullScreen && screenfull.isEnabled) {
            _oButFullscreen.unload();
        }

        s_oMenu = null;
        s_oStage.removeAllChildren();
    };

    this.refreshButtonPos = function() {
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.setPosition(_pStartPosAudio.x - s_iOffsetX, s_iOffsetY + _pStartPosAudio.y);
        }

        if (_fRequestFullScreen && screenfull.isEnabled) {
            _oButFullscreen.setPosition(_pStartPosFullscreen.x + s_iOffsetX, _pStartPosFullscreen.y + s_iOffsetY);
        }

        _oCreditsBut.setPosition(_pStartPosCredits.x + s_iOffsetX, s_iOffsetY + _pStartPosCredits.y);
        _oButDelete.setPosition(_pStartPosDelete.x + s_iOffsetX, _pStartPosDelete.y - s_iOffsetY);
    };

    this._resetCharacters = function() {
        if (_bAttacking) {
            var iX = _pStartPos.x;
            for (var i = 0; i < 3; i++) {
                _aEnemies[i].setX(iX);
                _aEnemies[i].setUpdate(true);
                _aEnemies[i].playAnim(DIR_LEFT, ANIM_ESCAPE);

                iX += 80;
            }

            _oHero.setX(iX);
            _oHero.playAnim(DIR_LEFT, ANIM_ATTACK);
        } else {
            _oHero.setX(_pStartPos.x);

            var iX = _pStartPos.x + 80;
            for (var i = 0; i < _aEnemies.length; i++) {
                _aEnemies[i].setX(iX);
                _aEnemies[i].setUpdate(true);
                _aEnemies[i].playAnim(DIR_LEFT, ANIM_WALK);

                iX += 80;
            }

            _oHero.playAnim(DIR_LEFT, ANIM_WALK);

        }

        _bAttacking = !_bAttacking;
    };

    this._onStart = function() {
        $(s_oMain).trigger("start_session");
        s_oMenu.unload();
        s_oMain.gotoLevelPanel()
    };

    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };

    this._onCreditsBut = function() {
        new CCreditsPanel();
    };

    this.resetFullscreenBut = function() {
        if (_fRequestFullScreen && screenfull.isEnabled) {
            _oButFullscreen.setActive(s_bFullscreen);
        }
    };

    this._onFullscreenRelease = function() {
        if (s_bFullscreen) {
            _fCancelFullScreen.call(window.document);
        } else {
            _fRequestFullScreen.call(window.document.documentElement);
        }

        sizeHandler();
    };

    this._onDelete = function() {
        _oAreYouSurePanel.show(TEXT_CONFIRM_DELETE, 40);
    };

    this.onConfirmDelete = function() {
        clearLocalStorage();
    };

    this.update = function() {
        if (_bUpdate === false) {
            return;
        }


        _oHero.increaseX(-INCREASE_X);
        for (var k = 0; k < 3; k++) {
            _aEnemies[k].increaseX(-INCREASE_X);
        }

        if (_oHero.getX() < 0) {
            this._resetCharacters();
        }
    };

    s_oMenu = this;
    this._init();


};

var s_oMenu = null;

function CGame(iLevel, iScore, iLives) {
    var _bUpdate;
    var _szPrevAction;
    var _bPowerUpActive;
    var _iScore;
    var _iCurLevel;
    var _iCurLevelScore;
    var _iDir;
    var _iTimePowerUp;
    var _iItemToCatch;
    var _iCurLives;
    var _iStartingLives;
    var _szAction;
    var _aGridCells;
    var _aLives;
    var _aEnemies;
    var _aWalkableCells;
    var _oGridForPathfinding;
    var _oFinderController;
    var _oHammer;

    var _oHero;
    var _oContainerScore;
    var _oScoreNum;
    var _oLevelText;
    var _oCurEnemyEntryCell;
    var _oContainerLives;
    var _oContainerGrid;
    var _oContainerWalls;
    var _oContainerDoors;
    var _oContainerItems;
    var _oContainerCharacters;
    var _oContainerWallFg;
    var _oInterface;
    var _oHelpPanel;
    var _oAreYouSurePanel;
    var _oNextLevelPanel = null;
    var _oGameOverPanel;
    var _oWinPanel;


    this._init = function(iLevel, iScore, iLives) {
        setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME);


        _iScore = iScore;
        _iCurLevel = iLevel;
        _iCurLives = _iStartingLives = iLives;

        this.reset();

        var oBg = createBitmap(s_oSpriteLibrary.getSprite('bg_game'));
        s_oStage.addChild(oBg);

        this._initGrid();
        this._calculateItemToCatch();
        this._initCharacters();

        _oInterface = new CInterface();

        _oHelpPanel = new CHelpPanel();


        _oAreYouSurePanel = new CAreYouSurePanel(s_oStage);
        _oAreYouSurePanel.addEventListener(ON_BUT_YES_DOWN, this.onConfirmExit, this);

        _oGameOverPanel = new CEndPanel();
        _oGameOverPanel.addEventListener(ON_BACK_MENU, this.onConfirmExit, this);
        _oGameOverPanel.addEventListener(ON_RESTART, this._restartLevel, this);

        _oNextLevelPanel = new CNextLevelPanel();
        _oNextLevelPanel.addEventListener(ON_BACK_MENU, this.onConfirmExit, this);
        _oNextLevelPanel.addEventListener(ON_RESTART, this._restartLevel, this);
        _oNextLevelPanel.addEventListener(ON_NEXT, this._nextLevel, this);

        _oWinPanel = new CWinPanel();
        _oWinPanel.addEventListener(ON_BACK_MENU, this.onConfirmExit, this);
        _oWinPanel.addEventListener(ON_RESTART, this._restartLevel, this);

        if (!s_bMobile) {
            document.onkeydown = this._onKeyDown;
        } else {
            _oHammer = new Hammer(s_oCanvas);

            _oHammer.get('swipe').set({
                direction: Hammer.DIRECTION_ALL
            });
            _oHammer.get('swipe').set({
                velocity: 0.005
            });
            _oHammer.get('swipe').set({
                threshold: 0.1
            });

            _oHammer.on("swipeleft", function() {
                _szPrevAction = "left";
            });
            _oHammer.on("swiperight", function() {
                _szPrevAction = "right";
            });
            _oHammer.on("swipeup", function() {
                _szPrevAction = "up";
            });
            _oHammer.on("swipedown", function() {
                _szPrevAction = "down";
            });
        }

        this.refreshButtonPos();

        this._initPathfindingGrid();

        if (s_bFirstPlay) {
            s_bFirstPlay = false;
            _oHelpPanel.show();
        } else {
            this.prepareStartLevel();
        }
    };


    this.unload = function() {
        _oInterface.unload();
        _oNextLevelPanel.unload();
        _oGameOverPanel.unload();

        _oHelpPanel.unload();

        if (!s_bMobile) {
            document.onkeydown = null;
        }


        s_oGame = null;
        createjs.Tween.removeAllTweens();
        s_oStage.removeAllChildren();
    };

    this.refreshButtonPos = function() {
        this.refreshGridScale();

        _oInterface.refreshButtonPos();
    };

    this.reset = function() {
        _bUpdate = false;
        _bPowerUpActive = false;
        _szPrevAction = "";
        _szAction = "";
        _iDir = 0;
        _iCurLevelScore = 0;
    };

    this._restartAfterDeath = function() {
        _iDir = 0;
        _szAction = "";
        _oHero.reset();

        for (var i = 0; i < _aEnemies.length; i++) {
            _aEnemies[i].reset();
        }

        _oCurEnemyEntryCell.reset();

        this.prepareStartLevel();
    };

    this._nextLevel = function() {
        _iCurLevel++;
        _iStartingLives = _iCurLives;

        this._prepareLevel();
    };

    this._restartLevel = function() {
        $(s_oMain).trigger("restart_level", _iCurLevel);
        this.refreshScore(-_iCurLevelScore);

        _iCurLives = _iStartingLives;
        for (var i = 0; i < _iCurLives; i++) {
            _aLives[i].visible = true;
        }

        this._prepareLevel();
    };

    this._prepareLevel = function() {
        $(s_oMain).trigger("start_level", _iCurLevel);

        _oContainerWalls.removeAllChildren();
        _oContainerDoors.removeAllChildren();
        _oContainerItems.removeAllChildren();
        _oContainerWallFg.removeAllChildren();

        this._prepareCells();
        this._calculateItemToCatch();
        this._initPathfindingGrid();

        //RESET HERO
        var iRow = PLAYER_START[_iCurLevel - 1].row;
        var iCol = PLAYER_START[_iCurLevel - 1].col;
        _oHero.setStart(_aGridCells[iRow][iCol].getX(), _aGridCells[iRow][iCol].getY(), iRow, iCol);


        //RESET ENEMIES
        for (var k = 0; k < _aEnemies.length; k++) {
            _aEnemies[k].unload();
        }

        var aPos = ENEMY_START[_iCurLevel - 1];
        _aEnemies = new Array();
        for (var i = 0; i < aPos.length; i++) {
            var iRandType = Math.floor(Math.random() * (NUM_ENEMIES));
            var iRow = aPos[i].row;
            var iCol = aPos[i].col;
            var oEnemy = new CEnemy(iRandType, _aGridCells[iRow][iCol].getX(), _aGridCells[iRow][iCol].getY(), iRow, iCol, _oContainerCharacters);

            _aEnemies.push(oEnemy);
        }

        _oContainerWalls.updateCache();

        this.reset();

        this._restartAfterDeath();

        _oLevelText.refreshText(sprintf(TEXT_LEVEL, _iCurLevel));
    };

    this.prepareStartLevel = function() {
        var oReadyText = new createjs.Text(TEXT_READY, "40px " + FONT, "#fdd93b");
        oReadyText.x = _oContainerGrid.getBounds().width / 2 - 40;
        oReadyText.y = 635;
        oReadyText.textAlign = "center";
        oReadyText.textBaseline = "alphabetic";
        _oContainerGrid.addChild(oReadyText);

        playSound("ready_go", 1, false);
        createjs.Tween.get(oReadyText).wait(1500).to({
            alpha: 0
        }, 400).call(function() {
            _oCurEnemyEntryCell.openDoor();
            _bUpdate = true;
        });

    };

    this._onKeyDown = function(evt) {
        if (_bUpdate === false) {
            evt.preventDefault();
            return false;
        }


        if (!evt) {
            evt = window.event;
        }

        switch (evt.keyCode) {
            case LEFT_DIR:
                {
                    _szPrevAction = "left";
                    break;
                };
            case TOP_DIR:
                {
                    _szPrevAction = "up";
                    break;
                };
            case RIGHT_DIR:
                {
                    _szPrevAction = "right";
                    break;
                };
            case BOTTOM_DIR:
                {
                    _szPrevAction = "down";
                    break;
                };
        }

        evt.preventDefault();
        return false;
    };


    this.refreshGridScale = function() {
        if (s_bLandscape) {
            var iGUIHeight = 160;
            s_iScaleFactor = 1
            var iMaxGridSizeHeight = (CANVAS_HEIGHT - (s_iOffsetY * 2)) - iGUIHeight;
            var iRefGridSizeY = (CELL_SIZE * GRID_ROWS);

            CUR_GRID_SCALE = iMaxGridSizeHeight / iRefGridSizeY;
        } else {
            var iGUIHeight = 300;

            var iMaxGridSizeHeight = (CANVAS_HEIGHT - (s_iOffsetY * 2)) - iGUIHeight;
            var iMaxGridSizeWidth = (CANVAS_WIDTH - (s_iOffsetX * 2));


            var iMinDim = Math.min(iMaxGridSizeHeight, iMaxGridSizeWidth);
            var iRefGridSizeX = (CELL_SIZE * GRID_COLS);

            CUR_GRID_SCALE = iMinDim / iRefGridSizeX;

        }

        CUR_GRID_SCALE = parseFloat(CUR_GRID_SCALE.toFixed(2));
        _oContainerGrid.scaleX = _oContainerGrid.scaleY = CUR_GRID_SCALE;

        _oContainerWalls.updateCache();
    };

    this._initGrid = function() {
        _oContainerGrid = new createjs.Container();
        _oContainerGrid.x = GRID_X + CELL_SIZE / 2;
        _oContainerGrid.y = GRID_Y + CELL_SIZE / 2;
        s_oStage.addChild(_oContainerGrid);

        _oContainerDoors = new createjs.Container();
        _oContainerGrid.addChild(_oContainerDoors);

        _oContainerWalls = new createjs.Container();
        _oContainerGrid.addChild(_oContainerWalls);

        _oContainerItems = new createjs.Container();
        _oContainerGrid.addChild(_oContainerItems);

        _oContainerCharacters = new createjs.Container();
        _oContainerGrid.addChild(_oContainerCharacters);

        _oContainerWallFg = new createjs.Container();
        _oContainerGrid.addChild(_oContainerWallFg);



        this._prepareCells();


        //SCORE CONTAINER
        _oContainerScore = new createjs.Container();
        _oContainerGrid.addChild(_oContainerScore);


        var oSpriteScoreBg = s_oSpriteLibrary.getSprite('score_bg');
        var oScoreBg = createBitmap(oSpriteScoreBg);
        _oContainerScore.addChild(oScoreBg);

        var iWidth = oSpriteScoreBg.width - 40;
        var iHeight = 30;
        var iX = 20;
        var iY = oSpriteScoreBg.height / 2 - 22;
        _oScoreNum = new CTLText(_oContainerScore,
            iX, iY - iHeight / 2, iWidth, iHeight,
            30, "left", "#ffb557", FONT, 1,
            2, 2,
            sprintf(TEXT_SCORE, _iScore),
            true, true, false,
            false);

        var iWidth = oSpriteScoreBg.width - 40;
        var iHeight = 30;
        var iX = 20;
        var iY = oSpriteScoreBg.height / 2 + 10;
        _oLevelText = new CTLText(_oContainerScore,
            iX, iY - iHeight / 2, iWidth, iHeight,
            30, "left", "#deecf8", FONT, 1,
            2, 2,
            sprintf(TEXT_LEVEL, _iCurLevel),
            true, true, false,
            false);

        _oContainerScore.x = 0;
        _oContainerScore.y = -oSpriteScoreBg.height - 30;

        //LIVES CONTAINER
        _oContainerLives = new createjs.Container();
        _oContainerGrid.addChild(_oContainerLives);

        _aLives = new Array();
        var iXPos = 0;
        var oSpriteLife = s_oSpriteLibrary.getSprite("life");
        for (var i = 0; i < _iCurLives; i++) {
            _aLives[i] = createBitmap(oSpriteLife);
            _aLives[i].x = iXPos;
            _oContainerLives.addChild(_aLives[i]);

            iXPos += oSpriteLife.width + 10;
        }



        _oContainerLives.x = _oContainerScore.x + oSpriteScoreBg.width + 50;
        _oContainerLives.y = -oSpriteLife.height - 30;



        _oContainerGrid.regX = GRID_WIDTH / 2;
        _oContainerGrid.regY = (GRID_HEIGHT - oSpriteScoreBg.height) / 2;
        _oContainerWalls.cache(-CELL_SIZE / 2, -CELL_SIZE / 2, GRID_WIDTH, GRID_HEIGHT)
    };

    this._prepareCells = function() {
        var aGridValues = LEVEL_INFOS[_iCurLevel - 1].split("#");
        _aGridCells = new Array();
        var iX = 0;
        var iY = 0;
        var iCont = 0;
        for (var i = 0; i < GRID_ROWS; i++) {
            _aGridCells[i] = new Array();
            for (var j = 0; j < GRID_COLS; j++) {
                var iValue = Number(aGridValues[iCont]);

                var oCell;

                if (iValue === ENEMY_ENTRY_TYPE) {
                    oCell = new CCell(iX, iY, i, j, iValue, _oContainerDoors);
                } else if (iValue < 23) {
                    oCell = new CCell(iX, iY, i, j, iValue, _oContainerWalls);
                } else if (iValue === 23 || iValue === 24) {
                    oCell = new CCell(iX, iY, i, j, iValue, _oContainerItems);
                } else {
                    oCell = new CCell(iX, iY, i, j, iValue, _oContainerWallFg);
                }
                _aGridCells[i][j] = oCell;

                if (iValue === ENEMY_ENTRY_TYPE) {
                    _oCurEnemyEntryCell = oCell;
                }

                iX += CELL_SIZE;

                iCont++;
            }

            iX = 0;
            iY += CELL_SIZE;
        }
    };

    this._calculateItemToCatch = function() {
        _iItemToCatch = 0;
        for (var i = 0; i < GRID_ROWS; i++) {
            for (var j = 0; j < GRID_COLS; j++) {
                if (_aGridCells[i][j].getTag() === CELL_CHEESE) {
                    _iItemToCatch++;
                }
            }
        }
    };

    this._initCharacters = function() {
        var iRow = PLAYER_START[_iCurLevel - 1].row;
        var iCol = PLAYER_START[_iCurLevel - 1].col;
        _oHero = new CHero(_aGridCells[iRow][iCol].getX(), _aGridCells[iRow][iCol].getY(), iRow, iCol, _oContainerCharacters);


        //ATTACH ENEMIES
        var aPos = ENEMY_START[_iCurLevel - 1];
        _aEnemies = new Array();
        for (var i = 0; i < aPos.length; i++) {
            var iRandType = Math.floor(Math.random() * (NUM_ENEMIES));
            var iRow = aPos[i].row;
            var iCol = aPos[i].col;
            var oEnemy = new CEnemy(iRandType, _aGridCells[iRow][iCol].getX(), _aGridCells[iRow][iCol].getY(), iRow, iCol, _oContainerCharacters);

            _aEnemies.push(oEnemy);
        }
    };

    this._initPathfindingGrid = function() {
        _oGridForPathfinding = new PF.Grid(GRID_ROWS, GRID_COLS);

        _aWalkableCells = new Array();
        for (var i = 0; i < GRID_ROWS; i++) {
            for (var j = 0; j < GRID_COLS; j++) {
                var bWalkable = _aGridCells[i][j].isWalkable();
                _oGridForPathfinding.setWalkableAt(i, j, bWalkable);

                if (bWalkable) {
                    _aWalkableCells.push({
                        row: i,
                        col: j
                    });
                }
            }
        }

        _oFinderController = new PF.AStarFinder();
    };


    this.startEnemies = function() {
        for (var i = 0; i < _aEnemies.length; i++) {
            this.getNewEnemyPath(_aEnemies[i], STATE_ENEMY_IDLE);
        }
    };

    this._convertPathIntoCoordinates = function(aPath) {
        //CONVERT ROW COLS IN XY POSITIONS
        var aConvertedPath = new Array();
        for (var k = 0; k < aPath.length; k++) {
            var aPos = aPath[k];
            aConvertedPath.push({
                x: _aGridCells[aPos[0]][aPos[1]].getX(),
                y: _aGridCells[aPos[0]][aPos[1]].getY()
            });
        }

        return aConvertedPath;
    };

    this.getNewEnemyPath = function(oEnemy, iEnemyState) {
        var aPath;

        var iCont = 0;
        do {
            var oGridBackup = _oGridForPathfinding.clone();
            switch (iEnemyState) {
                case STATE_ENEMY_IDLE:
                    {
                        var iRand = Math.floor(Math.random() * _aWalkableCells.length);

                        aPath = _oFinderController.findPath(oEnemy.getRow(), oEnemy.getCol(), _aWalkableCells[iRand].row, _aWalkableCells[iRand].col, oGridBackup);
                        break;
                    }
                case STATE_ENEMY_FOLLOW:
                    {
                        aPath = _oFinderController.findPath(oEnemy.getRow(), oEnemy.getCol(), _oHero.getRow(), _oHero.getCol(), oGridBackup);
                        break;
                    }
                case STATE_ENEMY_ESCAPE:
                    {
                        var iRand = this._findCellFarFromHero();
                        aPath = _oFinderController.findPath(oEnemy.getRow(), oEnemy.getCol(), _aWalkableCells[iRand].row, _aWalkableCells[iRand].col, oGridBackup);
                        break;
                    }

            }
            iCont++;

        } while (aPath.length < 3 && iCont < 100 && iEnemyState !== STATE_ENEMY_FOLLOW);


        if (iCont >= 100) {
            var iRand = Math.floor(Math.random() * _aWalkableCells.length);
            var oGridBackup = _oGridForPathfinding.clone();
            aPath = _oFinderController.findPath(oEnemy.getRow(), oEnemy.getCol(), _aWalkableCells[iRand].row, _aWalkableCells[iRand].col, oGridBackup);
            iEnemyState = STATE_ENEMY_IDLE;
        }
        var aConvertedPath = this._convertPathIntoCoordinates(aPath);

        oEnemy.setPath(aPath, aConvertedPath, iEnemyState);
    };

    this.getEnemyPathToStartPos = function(oEnemy) {
        var oGridBackup = _oGridForPathfinding.clone();
        var aPath = _oFinderController.findPath(oEnemy.getRow(), oEnemy.getCol(), oEnemy.getStartingRow(), oEnemy.getStartingCol(), oGridBackup);

        var aConvertedPath = this._convertPathIntoCoordinates(aPath);
        oEnemy.setPath(aPath, aConvertedPath, STATE_ENEMY_IDLE);
    };

    this._findCellFarFromHero = function() {
        do {
            var iRand = Math.floor(Math.random() * _aWalkableCells.length);
            var iRow = _aWalkableCells[iRand].row;
            var iCol = _aWalkableCells[iRand].col;
        } while (Math.abs(iRow - _oHero.getRow()) < 4 || Math.abs(iCol - _oHero.getCol()) < 4);

        return iRand;
    };

    this.characterCell = function() {
        var bFlag = false;
        for (var i = -1; i < 2; i++) {
            var iR = _oHero.getRow() + i;
            if (iR > 0 && iR < GRID_ROWS) {
                for (var j = 0; j < GRID_COLS; j++) {
                    var bCollide = collisionWithCircle(_oHero, _aGridCells[iR][j], 0.05);

                    if (bCollide === true) {
                        bFlag = true;
                        _oHero.setCol(_aGridCells[iR][j].getCol());
                        _oHero.setRow(_aGridCells[iR][j].getRow());

                        if (_aGridCells[iR][j].getTag() === CELL_CHEESE) {
                            this._collectItem(iR, j);
                        } else if (_aGridCells[iR][j].getTag() === CELL_SUPER_CHEESE) {
                            this._collectPowerUp(iR, j);
                        }

                        break;
                    }
                }
            }
        }

        if (bFlag) {
            this.prevDirection();
        }
    };

    this.prevDirection = function() {

        var iColLeft = _oHero.getCol() - 1;
        var iColRight = _oHero.getCol() + 1;
        var iRowUp = _oHero.getRow() - 1;
        var iRowDown = _oHero.getRow() + 1;

        if (iColLeft < 0) {
            if (_szAction === "left") {
                _oHero.setCol(GRID_COLS - 1);
                _oHero.setPos(_aGridCells[_oHero.getRow()][GRID_COLS - 1].getX(), _aGridCells[_oHero.getRow()][GRID_COLS - 1].getY());
            }
            return;
        } else if (iColRight === GRID_COLS) {
            if (_szAction === "right") {
                _oHero.setCol(0);
                _oHero.setPos(_aGridCells[_oHero.getRow()][0].getX(), _aGridCells[_oHero.getRow()][0].getY());
            }
            return;
        }

        if (_aGridCells[_oHero.getRow()][iColLeft].getTag() !== CELL_WALL) {
            this.prevAction("left");
        } else {
            this.prevCollision("left");
        }
        if (_aGridCells[_oHero.getRow()][iColRight].getTag() !== CELL_WALL) {
            this.prevAction("right");
        } else {
            this.prevCollision("right");
        }

        if (_aGridCells[iRowUp][_oHero.getCol()].getTag() !== CELL_WALL) {
            this.prevAction("up");
        } else {
            this.prevCollision("up");
        }
        if (_aGridCells[iRowDown][_oHero.getCol()].getTag() !== CELL_WALL) {
            this.prevAction("down");
        } else {
            this.prevCollision("down");
        }
    };

    this.prevCollision = function(szState) {
        if (_szAction === szState && _bUpdate) {
            _iDir = 0;
            _oHero.playAnim(_oHero.getCurSpriteIndex(), _bPowerUpActive ? ANIM_ATTACK : ANIM_IDLE);
            _szAction = "";
        }
    };

    this.prevAction = function(szPrev) {
        if (_szPrevAction === szPrev) {
            this._control(_szPrevAction);
            _szPrevAction = "";
        }
    };

    this._control = function(szAction) {
        if (_szAction === szAction) {
            return;
        }

        switch (szAction) {
            case "right":
                if (_bPowerUpActive === false)
                    this.setCharacterState(DIR_RIGHT, ANIM_WALK, "right", 1);
                else
                    this.setCharacterState(DIR_RIGHT, ANIM_ATTACK, "right", 1);
                break;
            case "left":
                {
                    if (_bPowerUpActive === false)
                        this.setCharacterState(DIR_LEFT, ANIM_WALK, "left", -1);
                    else
                        this.setCharacterState(DIR_LEFT, ANIM_ATTACK, "left", -1);
                    break;
                }
            case "up":
                {
                    if (_bPowerUpActive === false)
                        this.setCharacterState(DIR_TOP, ANIM_WALK, "up", -1);
                    else
                        this.setCharacterState(DIR_TOP, ANIM_ATTACK, "up", -1);
                    break;
                }
            case "down":
                {
                    if (_bPowerUpActive === false)
                        this.setCharacterState(DIR_BOTTOM, ANIM_WALK, "down", 1);
                    else
                        this.setCharacterState(DIR_BOTTOM, ANIM_ATTACK, "down", 1);
                    break;
                }
        }
    };

    this.pauseCharacterAnims = function() {
        _bUpdate = false;

        _oHero.pauseAnim(true);
        for (var i = 0; i < _aEnemies.length; i++) {
            _aEnemies[i].pauseAnim(true);
        }
    };

    this.unpauseCharacterAnims = function() {
        _bUpdate = true;

        _oHero.pauseAnim(false);
        for (var i = 0; i < _aEnemies.length; i++) {
            _aEnemies[i].pauseAnim(false);
        }
    };

    this.setCharacterState = function(iVal, szState, szAction, iDir) {
        _szAction = szAction;

        _iDir = iDir;
        _oHero.playAnim(iVal, szState);
    };

    this._collectItem = function(iRow, iCol) {
        _aGridCells[iRow][iCol].setEmpty();

        this.refreshScore(POINT_PER_ITEM);

        playSound("hero_eating", 1, false);

        _iItemToCatch--;
        if (_iItemToCatch === 0) {
            //LEVEL CLEARED
            this._endLevel();
        }
    };

    this._collectPowerUp = function(iRow, iCol) {

        _aGridCells[iRow][iCol].setEmpty();

        this.refreshScore(POINT_PER_POWERUP);

        playSound("hero_powerup", 1, false);

        if (_bPowerUpActive) {
            _iTimePowerUp = 0;
        } else {
            this.pauseCharacterAnims();
            _oHero.catchPowerUp(true);

            for (var i = 0; i < _aEnemies.length; i++) {
                _aEnemies[i].playAnim(_aEnemies[i].getCurSpriteIndex(), ANIM_ESCAPE);
            }
        }

    };

    this._endPowerupEffect = function() {
        //this.pauseCharacterAnims();
        _oHero.catchPowerUp(false);

        for (var i = 0; i < _aEnemies.length; i++) {
            if (_aEnemies[i].isDeath() === false) {
                _aEnemies[i].playAnim(_aEnemies[i].getCurSpriteIndex(), ANIM_WALK);
            }
        }

        playSound("hero_powerup_off", 1, false);
    };

    this.resumeFromPowerUpAnim = function() {
        this.unpauseCharacterAnims();

        _iTimePowerUp = 0;
        _bPowerUpActive = !_bPowerUpActive;

        if (_bPowerUpActive) {
            _oHero.playAnim(_oHero.getCurSpriteIndex(), ANIM_ATTACK);
        } else {
            _oHero.playAnim(_oHero.getCurSpriteIndex(), ANIM_WALK);
        }
        _bUpdate = true;
    };

    this.refreshScore = function(iAmount) {
        _iScore += iAmount;
        _iCurLevelScore += iAmount;

        _oScoreNum.refreshText(sprintf(TEXT_SCORE, _iScore));
    };

    this._endLevel = function() {
        $(s_oMain).trigger("end_level", _iCurLevel);
        $(s_oMain).trigger("save_score", _iScore);

        _bUpdate = false;
        setLocalStorageScore(_iCurLevelScore, _iCurLevel);


        if (_iCurLevel === NUM_LEVELS) {
            _oWinPanel.show(_iScore);
        } else {
            setLocalStorageLevel(_iCurLevel + 1);
            setLocalStorageLives(_iCurLives, _iCurLevel + 1);

            _oNextLevelPanel.show(_iCurLevel, _iScore, _iCurLevelScore);
        }

    };

    this.onExit = function() {
        _oAreYouSurePanel.show(TEXT_ARE_YOU_SURE, 90);
    };

    this.onConfirmExit = function() {
        this.unload();

        $(s_oMain).trigger("show_interlevel_ad");
        $(s_oMain).trigger("end_session");

        s_oMain.gotoMenu();
    };

    this.gameOver = function() {
        _oGameOverPanel.show(_iScore, _iCurLevelScore);
    };

    this._checkCollision = function(oEnemy) {
        var iDist = distance(oEnemy.getPos(), _oHero.getPos());

        if (iDist < COLLISION_DIST) {
            if (_bPowerUpActive) {
                //ENEMY DEATH
                oEnemy.death();
                this.refreshScore(POINT_KILL_ENEMY);
            } else {
                //PLAYER DEATH
                _bUpdate = false;
                _oHero.playAnim(_oHero.getCurSpriteIndex(), ANIM_DIE);
                playSound("hero_death", 1, false);
            }
        }
    };

    this.checkDistFromPlayer = function(oEnemy) {
        var iDist = distance(oEnemy.getPos(), _oHero.getPos());
        if (oEnemy.getState() === STATE_ENEMY_IDLE && iDist < FOLLOW_DIST) {

            if (_bPowerUpActive === false) {
                this.getNewEnemyPath(oEnemy, STATE_ENEMY_FOLLOW);
            } else {
                this.getNewEnemyPath(oEnemy, STATE_ENEMY_ESCAPE);
            }
            return true;
        }

        return false;
    };

    this.loseLife = function() {
        _iCurLives--;
        _aLives[_iCurLives].visible = false;

        if (_iCurLives === 0) {
            $(s_oMain).trigger("end_level", _iCurLevel);
            this.gameOver();
        } else {
            this._restartAfterDeath();
        }
    };

    this._manageCharactersDepth = function() {
        var sortFunction = function(obj1, obj2, options) {
            if (obj1.y > obj2.y) {
                return 1;
            }
            if (obj1.y < obj2.y) {
                return -1;
            }
            return 0;
        };

        _oContainerCharacters.sortChildren(sortFunction);
    };

    this.isPowerUpActive = function() {
        return _bPowerUpActive;
    };


    this.update = function() {
        if (!_bUpdate) {
            return;
        }

        this._manageCharactersDepth();

        this.characterCell();
        _oHero.update(_iDir, _szAction);

        for (var i = 0; i < _aEnemies.length; i++) {
            if (_aEnemies[i].update()) {
                this._checkCollision(_aEnemies[i]);
            }
        }

        if (_bPowerUpActive) {
            _iTimePowerUp += s_iTimeElaps;

            if (_iTimePowerUp > TIME_POWERUP) {
                _iTimePowerUp = 0;
                this._endPowerupEffect();
            }
        }
    };

    s_oGame = this;

    this._init(iLevel, iScore, iLives);
}

var s_oGame = null;


function CInterface() {


    var _fRequestFullScreen = null;
    var _fCancelFullScreen = null;
    var _oAudioToggle;
    var _oButFullscreen;
    var _oButExit;


    var _pStartPosExit;
    var _pStartPosAudio;
    var _pStartPosFullscreen;


    this._init = function() {
        var oSprite = s_oSpriteLibrary.getSprite('but_exit');
        _pStartPosExit = {
            x: CANVAS_WIDTH - (oSprite.height / 2) - 10,
            y: (oSprite.height / 2) + 10
        };
        _oButExit = new CGfxButton(_pStartPosExit.x, _pStartPosExit.y, oSprite, s_oStage);
        _oButExit.addEventListener(ON_MOUSE_UP, this._onExit, this);


        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            var oSprite = s_oSpriteLibrary.getSprite('audio_icon');
            _pStartPosAudio = {
                x: _oButExit.getX() - oSprite.width / 2 - 10,
                y: (oSprite.height / 2) + 10
            };
            _oAudioToggle = new CToggle(_pStartPosAudio.x, _pStartPosAudio.y, oSprite, s_bAudioActive, s_oStage);
            _oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);

            oSprite = s_oSpriteLibrary.getSprite("but_fullscreen")
            _pStartPosFullscreen = {
                x: _pStartPosAudio.x - oSprite.width / 2 - 10,
                y: (oSprite.height / 2) + 10
            };
        } else {
            oSprite = s_oSpriteLibrary.getSprite("but_fullscreen")
            _pStartPosFullscreen = {
                x: _oButExit.getX() - oSprite.width / 2 - 10,
                y: (oSprite.height / 2) + 10
            };
        }

        var doc = window.document;
        var docEl = doc.documentElement;
        _fRequestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        _fCancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

        if (ENABLE_FULLSCREEN === false) {
            _fRequestFullScreen = false;
        }

        if (_fRequestFullScreen && screenfull.isEnabled) {

            _oButFullscreen = new CToggle(_pStartPosFullscreen.x, _pStartPosFullscreen.y, oSprite, s_bFullscreen, s_oStage);
            _oButFullscreen.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this);
        }
    };

    this.unload = function() {
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.unload();
            _oAudioToggle = null;
        }
        if (_fRequestFullScreen && screenfull.isEnabled) {
            _oButFullscreen.unload();
        }

        _oButExit.unload();

        s_oInterface = null;
    };

    this.refreshButtonPos = function() {
        _oButExit.setPosition(_pStartPosExit.x - s_iOffsetX, s_iOffsetY + _pStartPosExit.y);
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.setPosition(_pStartPosAudio.x - s_iOffsetX, s_iOffsetY + _pStartPosAudio.y);
        }
        if (_fRequestFullScreen && screenfull.isEnabled) {
            _oButFullscreen.setPosition(_pStartPosFullscreen.x - s_iOffsetX, _pStartPosFullscreen.y + s_iOffsetY);
        }
    };

    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };

    this._onExit = function() {
        s_oGame.onExit();
    };

    this.resetFullscreenBut = function() {
        if (_fRequestFullScreen && screenfull.isEnabled) {
            _oButFullscreen.setActive(s_bFullscreen);
        }
    };

    this._onFullscreenRelease = function() {
        if (s_bFullscreen) {
            _fCancelFullScreen.call(window.document);
        } else {
            _fRequestFullScreen.call(window.document.documentElement);
        }

        sizeHandler();
    };

    s_oInterface = this;

    this._init();

    return this;
}

var s_oInterface = null;

function CEndPanel() {
    var _iStartY;
    var _iEventToLaunch;
    var _aCbCompleted;
    var _aCbOwner;
    var _oListener;
    var _oBg;

    var _oFade;
    var _oLevelScoreText;
    var _oLevelClearedText;
    var _oTotScoreText;
    var _oButHome;
    var _oButRestart;
    var _oContainer;
    var _oContainerPanel;

    var _oThis = this;


    this._init = function() {
        _aCbCompleted = new Array();
        _aCbOwner = new Array();

        _oContainer = new createjs.Container();
        _oContainer.visible = false;
        s_oStage.addChild(_oContainer);

        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        _oFade.alpha = 0.5;
        _oListener = _oFade.on("click", function() {});
        _oContainer.addChild(_oFade);


        _oBg = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        _oContainer.addChild(_oBg);

        _oContainerPanel = new createjs.Container();
        _oContainerPanel.x = CANVAS_WIDTH / 2;
        _oContainer.addChild(_oContainerPanel);

        var oSpriteBg = s_oSpriteLibrary.getSprite("bg_level_selection");
        var oBg = createBitmap(oSpriteBg);
        _oContainerPanel.addChild(oBg);

        var iWidth = oSpriteBg.width - 100;
        var iHeight = 80;
        var iX = -10 + oSpriteBg.width / 2;
        var iY = oSpriteBg.height / 2 - 200;
        _oLevelClearedText = new CTLText(_oContainerPanel,
            iX - iWidth / 2, iY - iHeight / 2, iWidth, iHeight,
            70, "center", "#ffb557", FONT, 1,
            2, 2,
            " ",
            true, true, false,
            false);

        var iWidth = oSpriteBg.width - 100;
        var iHeight = 60;
        var iY = oSpriteBg.height / 2;
        _oLevelScoreText = new CTLText(_oContainerPanel,
            iX - iWidth / 2, iY - iHeight / 2, iWidth, iHeight,
            50, "center", "#ffb557", FONT, 1,
            2, 2,
            " ",
            true, true, false,
            false);

        var iY = oSpriteBg.height / 2 + 100;
        _oTotScoreText = new CTLText(_oContainerPanel,
            iX - iWidth / 2, iY - iHeight / 2, iWidth, iHeight,
            50, "center", "#ffb557", FONT, 1,
            2, 2,
            " ",
            true, true, false,
            false);

        _oButHome = new CGfxButton(oSpriteBg.width / 2 - 250, oSpriteBg.height / 2 + 270, s_oSpriteLibrary.getSprite("but_home"), _oContainerPanel);
        _oButHome.addEventListener(ON_MOUSE_UP, this._onHome, this);

        _oButRestart = new CGfxButton(oSpriteBg.width / 2 + 250, oSpriteBg.height / 2 + 270, s_oSpriteLibrary.getSprite("but_restart"), _oContainerPanel);
        _oButRestart.addEventListener(ON_MOUSE_UP, this._onRestart, this);

        _iStartY = -oSpriteBg.height / 2;

        _oContainerPanel.regX = oSpriteBg.width / 2;
        _oContainerPanel.regY = oSpriteBg.height / 2;
    };

    this.unload = function() {
        _oButHome.unload();
        _oButRestart.unload();

        _oFade.off("click", _oListener);
    };

    this.addEventListener = function(iEvent, cbCompleted, cbOwner) {
        _aCbCompleted[iEvent] = cbCompleted;
        _aCbOwner[iEvent] = cbOwner;
    };

    this.show = function(iTotScore, iLevelScore) {
        playSound("game_over", 1, false);

        _oLevelClearedText.refreshText(TEXT_GAME_OVER);
        _oLevelScoreText.refreshText(sprintf(TEXT_LEVEL_SCORE, iLevelScore));
        _oTotScoreText.refreshText(sprintf(TEXT_TOT_SCORE, iTotScore));

        _oBg.alpha = 0;
        _oFade.alpha = 0;
        _oContainerPanel.y = _iStartY;
        _oContainer.visible = true;

        createjs.Tween.get(_oBg).to({
            alpha: 1
        }, 500);
        createjs.Tween.get(_oFade).to({
            alpha: 1
        }, 500);
        createjs.Tween.get(_oContainerPanel).wait(400).to({
            y: CANVAS_HEIGHT / 2
        }, 1000, createjs.Ease.bounceOut);
    };

    this.hide = function() {
        createjs.Tween.get(_oContainerPanel).to({
            y: _iStartY
        }, 1000, createjs.Ease.backIn).call(function() {
            createjs.Tween.get(_oBg).to({
                alpha: 0
            }, 400, createjs.Ease.cubicOut).call(function() {
                _oContainer.visible = false;

                if (_aCbCompleted[_iEventToLaunch]) {
                    _aCbCompleted[_iEventToLaunch].call(_aCbOwner[_iEventToLaunch]);
                }
            })
        });
    };

    this._onHome = function() {
        _iEventToLaunch = ON_BACK_MENU;

        _oThis.hide();
    };

    this._onRestart = function() {
        $(s_oMain).trigger("show_interlevel_ad");

        _iEventToLaunch = ON_RESTART;

        _oThis.hide();
    };

    this._init();
}


function CCreditsPanel() {
    var _oListener;
    var _oFade;
    var _oPanelContainer;
    var _oButExit;
    var _oLogo;
    var _oPanel;

    var _pStartPanelPos;

    this._init = function () {
        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        _oFade.alpha = 0;
        _oFade.on("mousedown", function () { });
        s_oStage.addChild(_oFade);

        createjs.Tween.get(_oFade).to({
            alpha: 0.7
        }, 500);

        _oPanelContainer = new createjs.Container();
        s_oStage.addChild(_oPanelContainer);

        var oSprite = s_oSpriteLibrary.getSprite('msg_box');
        _oPanel = createBitmap(oSprite);
        _oPanel.regX = oSprite.width / 2;
        _oPanel.regY = oSprite.height / 2;
        _oPanelContainer.addChild(_oPanel);
        _oListener = _oPanel.on("click", this._onLogoButRelease);

        _oPanelContainer.x = CANVAS_WIDTH / 2;
        _oPanelContainer.y = -oSprite.height / 2;
        _pStartPanelPos = {
            x: _oPanelContainer.x,
            y: _oPanelContainer.y
        };
        createjs.Tween.get(_oPanelContainer).to({
            y: CANVAS_HEIGHT / 2
        }, 1000, createjs.Ease.bounceOut);

        // Cleaned up text section
        var iWidth = oSprite.width - 100;
        var iHeight = 140;
        var iX = -iWidth / 2;
        var iY = -iHeight / 2;

        var oTextBlock = new CTLText(
            _oPanelContainer,
            iX, iY, iWidth, iHeight,
            38,                            // Bigger font
            "center",
            "#ffb557",
            FONT,
            1, 2, 2,
            "DEVELOPED BY\n\n\nWWW.RETROSGAME.COM",
            true, true, false, false
        );

        var oExitSprite = s_oSpriteLibrary.getSprite('but_exit');
        _oButExit = new CGfxButton(280, -270, oExitSprite, _oPanelContainer);
        _oButExit.addEventListener(ON_MOUSE_UP, this.unload, this);
    };

    this.unload = function () {
        createjs.Tween.get(_oFade).to({
            alpha: 0
        }, 500);
        createjs.Tween.get(_oPanelContainer).to({
            y: _pStartPanelPos.y
        }, 400, createjs.Ease.backIn).call(function () {
            s_oStage.removeChild(_oFade);
            s_oStage.removeChild(_oPanelContainer);
            _oButExit.unload();
        });

        _oFade.off("mousedown", function () { });
        _oPanel.off("mousedown", _oListener);
    };

    this._onLogoButRelease = function () {
        window.open("http://www.retrosgame.com/");
    };

    this._init();
}




function CAreYouSurePanel(oParentContainer) {
    var _iStartY;
    var _aCbCompleted;
    var _aCbOwner;
    var _oListener;

    var _oBg;
    var _oMsg;
    var _oButYes;
    var _oButNo;
    var _oContainer;
    var _oParentContainer;
    var _oFade;
    var _oPanelContainer;

    var _oThis = this;

    this._init = function() {
        _aCbCompleted = new Array();
        _aCbOwner = new Array();

        _oContainer = new createjs.Container();
        _oContainer.visible = false;
        _oParentContainer.addChild(_oContainer);

        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        _oFade.alpha = 0.5;
        _oListener = _oFade.on("click", function() {});
        _oContainer.addChild(_oFade);

        _oPanelContainer = new createjs.Container();
        _oContainer.addChild(_oPanelContainer);

        var oSpriteBg = s_oSpriteLibrary.getSprite('msg_box');
        _oBg = createBitmap(oSpriteBg);
        _oBg.regX = oSpriteBg.width * 0.5;
        _oBg.regY = oSpriteBg.height * 0.5;
        _oPanelContainer.addChild(_oBg);

        _oPanelContainer.x = CANVAS_WIDTH / 2;
        _oPanelContainer.y = _iStartY = -oSpriteBg.height / 2;

        var iWidth = oSpriteBg.width - 100;
        var iHeight = 200;
        var iX = 10;
        var iY = -70;
        _oMsg = new CTLText(_oPanelContainer,
            iX - iWidth / 2, iY - iHeight / 2, iWidth, iHeight,
            40, "center", "#ffb557", FONT, 1.2,
            2, 2,
            " ",
            true, true, true,
            false);


        _oButYes = new CGfxButton(190, 180, s_oSpriteLibrary.getSprite('but_yes'), _oPanelContainer);
        _oButYes.addEventListener(ON_MOUSE_UP, this._onButYes, this);

        _oButNo = new CGfxButton(-170, 180, s_oSpriteLibrary.getSprite('but_exit'), _oPanelContainer);
        _oButNo.addEventListener(ON_MOUSE_UP, this._onButNo, this);
    };

    this.addEventListener = function(iEvent, cbCompleted, cbOwner) {
        _aCbCompleted[iEvent] = cbCompleted;
        _aCbOwner[iEvent] = cbOwner;
    };

    this.show = function(szText, iSize) {
        _oMsg.refreshText(szText);
        _oMsg.setFontSize(iSize);
        _oPanelContainer.y = _iStartY;
        _oContainer.visible = true;
        createjs.Tween.get(_oPanelContainer).to({
            y: CANVAS_HEIGHT / 2
        }, 1000, createjs.Ease.bounceOut).call(function() {
            s_oMain.stopUpdateNoBlock();
        });
    };

    this.hide = function() {
        s_oMain.startUpdateNoBlock();
        _oContainer.visible = false;
    };

    this.unload = function() {
        _oButNo.unload();
        _oButYes.unload();
        _oFade.off("click", _oListener);
    };

    this._onButYes = function() {
        _oThis.hide();

        if (_aCbCompleted[ON_BUT_YES_DOWN]) {
            _aCbCompleted[ON_BUT_YES_DOWN].call(_aCbOwner[ON_BUT_YES_DOWN]);
        }
    };

    this._onButNo = function() {

        _oThis.hide();
    };

    _oParentContainer = oParentContainer;

    this._init();
}

function CMsgBox() {
    var _iStartY;
    var _oListener;
    var _oButYes;
    var _oFade;
    var _oPanelContainer;
    var _oContainer;

    this._init = function() {
        _oContainer = new createjs.Container();
        s_oStage.addChild(_oContainer);

        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        _oFade.alpha = 0.5;
        _oListener = _oFade.on("click", function() {});
        _oContainer.addChild(_oFade);

        _oPanelContainer = new createjs.Container();
        _oContainer.addChild(_oPanelContainer);

        var oSpriteBg = s_oSpriteLibrary.getSprite('msg_box');
        var oBg = createBitmap(oSpriteBg);
        oBg.regX = oSpriteBg.width * 0.5;
        oBg.regY = oSpriteBg.height * 0.5;
        _oPanelContainer.addChild(oBg);

        _oPanelContainer.x = CANVAS_WIDTH / 2;
        _oPanelContainer.y = _iStartY = -oSpriteBg.height / 2;

        var iWidth = oSpriteBg.width - 100;
        var iHeight = 260;
        var iX = 10;
        var iY = -50;
        var oMsg = new CTLText(_oPanelContainer,
            iX - iWidth / 2, iY - iHeight / 2, iWidth, iHeight,
            24, "center", "#ffb557", FONT, 1.2,
            2, 2,
            TEXT_ERR_LS,
            true, true, true,
            false);


        _oButYes = new CGfxButton(0, 160, s_oSpriteLibrary.getSprite('but_yes'), _oPanelContainer);
        _oButYes.addEventListener(ON_MOUSE_UP, this._onButYes, this);

        createjs.Tween.get(_oPanelContainer).to({
            y: CANVAS_HEIGHT / 2
        }, 1000, createjs.Ease.bounceOut) //.call(function(){s_oMain.stopUpdateNoBlock();});
    };


    this._onButYes = function() {
        _oButYes.unload();
        _oFade.off("click", _oListener);

        s_oStage.removeChild(_oContainer);
    };

    this._init();
}

function CHero(iX, iY, iRow, iCol, oParentContainer) {
    var _iRow;
    var _iCol;
    var _iStartingRow;
    var _iStartingCol;
    var _iStartX;
    var _iStartY;
    var _iCurSprite;
    var _iIntervalId;
    var _iCounterAnim;
    var NUM_COUNT = 7;
    var _aSprites;

    var _oContainer;
    var _oParentContainer = oParentContainer;

    this._init = function(iX, iY, iRow, iCol) {
        _iRow = _iStartingRow = iRow;
        _iCol = _iStartingCol = iCol;

        _iStartX = iX;
        _iStartY = iY;
        _aSprites = new Array();

        _oContainer = new createjs.Container();
        _oContainer.x = iX;
        _oContainer.y = iY;
        _oContainer.regX = HERO_WIDTH / 2;
        _oContainer.regY = HERO_HEIGHT / 2;
        _oParentContainer.addChild(_oContainer);


        //TOP DIRECTION
        var oData = {
            images: [s_oSpriteLibrary.getSprite("hero_top")],
            // width, height & registration point of each sprite
            frames: {
                width: HERO_WIDTH,
                height: HERO_HEIGHT
            },
            animations: {
                start: 0,
                idle: [0, 23, "idle"],
                walk: [24, 39, "walk"],
                attack: [40, 55, "attack"],
                die: [56, 77, "stop_die"],
                stop_die: 77
            }
        };

        var oSpriteSheet = new createjs.SpriteSheet(oData);
        var oSpriteTop = createSprite(oSpriteSheet, "start", 0, 0, HERO_WIDTH, HERO_HEIGHT);
        oSpriteTop.on("animationend", this._onAnimationEnd, this);
        oSpriteTop.visible = false;
        _oContainer.addChild(oSpriteTop);

        _aSprites[DIR_TOP] = oSpriteTop;


        //RIGHT DIRECTION
        var oData = {
            images: [s_oSpriteLibrary.getSprite("hero_right")],
            // width, height & registration point of each sprite
            frames: {
                width: HERO_WIDTH,
                height: HERO_HEIGHT
            },
            animations: {
                start: 0,
                idle: [0, 23, "idle"],
                walk: [24, 39, "walk"],
                attack: [40, 55, "attack"],
                die: [56, 77, "stop_die"],
                stop_die: 77
            }
        };

        var oSpriteSheet = new createjs.SpriteSheet(oData);
        var oSpriteRight = createSprite(oSpriteSheet, "start", 0, 0, HERO_WIDTH, HERO_HEIGHT);
        oSpriteRight.on("animationend", this._onAnimationEnd, this);
        oSpriteRight.visible = false;
        _oContainer.addChild(oSpriteRight);

        _aSprites[DIR_RIGHT] = oSpriteRight;


        //BOTTOM DIRECTION
        var oData = {
            images: [s_oSpriteLibrary.getSprite("hero_bottom")],
            // width, height & registration point of each sprite
            frames: {
                width: HERO_WIDTH,
                height: HERO_HEIGHT
            },
            animations: {
                start: 0,
                idle: [0, 23, "idle"],
                walk: [24, 39, "walk"],
                attack: [40, 55, "attack"],
                die: [56, 77, "stop_die"],
                stop_die: 77
            }
        };

        var oSpriteSheet = new createjs.SpriteSheet(oData);
        var oSpriteBottom = createSprite(oSpriteSheet, "start", 0, 0, HERO_WIDTH, HERO_HEIGHT);
        oSpriteBottom.on("animationend", this._onAnimationEnd, this);
        _oContainer.addChild(oSpriteBottom);

        _aSprites[DIR_BOTTOM] = oSpriteBottom;



        //LEFT DIRECTION
        var oData = {
            images: [s_oSpriteLibrary.getSprite("hero_left")],
            // width, height & registration point of each sprite
            frames: {
                width: HERO_WIDTH,
                height: HERO_HEIGHT
            },
            animations: {
                start: 0,
                idle: [0, 23, "idle"],
                walk: [24, 39, "walk"],
                attack: [40, 55, "attack"],
                die: [56, 77, "stop_die"],
                stop_die: 77
            }
        };

        var oSpriteSheet = new createjs.SpriteSheet(oData);
        var oSpriteLeft = createSprite(oSpriteSheet, "start", 0, 0, HERO_WIDTH, HERO_HEIGHT);
        oSpriteLeft.on("animationend", this._onAnimationEnd, this);
        oSpriteLeft.visible = false;
        _oContainer.addChild(oSpriteLeft);

        _aSprites[DIR_LEFT] = oSpriteLeft;

        _iCurSprite = DIR_BOTTOM;
    };

    this.reset = function() {
        _iRow = _iStartingRow;
        _iCol = _iStartingCol;
        _oContainer.x = _iStartX;
        _oContainer.y = _iStartY;

        _iCurSprite = DIR_BOTTOM;
        this.playAnim(_iCurSprite, ANIM_IDLE);
    };

    this.setStart = function(iX, iY, iRow, iCol) {
        _iRow = _iStartingRow = iRow;
        _iCol = _iStartingCol = iCol;

        _iStartX = iX;
        _iStartY = iY;
    };

    this._hideAllAnims = function() {
        for (var i = 0; i < _aSprites.length; i++) {
            _aSprites[i].visible = false;
        }
    };

    this.playAnim = function(iDir, szAnim) {
        this._hideAllAnims();

        _aSprites[iDir].visible = true;
        _aSprites[iDir].gotoAndPlay(szAnim);

        _iCurSprite = iDir;
    };

    this.pauseAnim = function(bPause) {
        _aSprites[_iCurSprite].paused = bPause;
    };

    this.catchPowerUp = function(bPowerUp) {
        var oParent = this;
        _iCounterAnim = 0;

        var iOffset = bPowerUp ? 1 : -1;
        _iIntervalId = setInterval(function() {
            oParent._playPowerUpAnim(_iCounterAnim % 2 === 0 ? (_aSprites[_iCurSprite].currentFrame + (16 * iOffset)) : (_aSprites[_iCurSprite].currentFrame - (16 * iOffset)));
        }, 150);
    };

    this._playPowerUpAnim = function(iFrame) {
        _aSprites[_iCurSprite].gotoAndStop(iFrame);
        _iCounterAnim++;
        if (_iCounterAnim === NUM_COUNT) {

            clearInterval(_iIntervalId);
            s_oGame.resumeFromPowerUpAnim();
        }

    };

    this.setMask = function(oMask) {
        _oContainer.mask = oMask;
    };

    this.increaseX = function(iIncrease) {
        _oContainer.x += iIncrease;
    };

    this.setRow = function(iValue) {
        _iRow = iValue;
    };

    this.setCol = function(iValue) {
        _iCol = iValue;
    };

    this._onAnimationEnd = function(evt) {
        if (evt.currentTarget.currentAnimation === ANIM_DIE) {
            setTimeout(function() {
                s_oGame.loseLife();
            }, 1500);
        }
    };

    this.getRow = function() {
        return _iRow;
    };

    this.getCol = function() {
        return _iCol;
    };

    this.setX = function(iX) {
        _oContainer.x = iX;
    };

    this.setPos = function(iX, iY) {
        _oContainer.x = iX;
        _oContainer.y = iY;
    };

    this.getCurSpriteIndex = function() {
        return _iCurSprite;
    };

    this.getX = function() {
        return _oContainer.x;
    };

    this.getY = function() {
        return _oContainer.y;
    };

    this.getPos = function() {
        return {
            x: _oContainer.x,
            y: _oContainer.y
        };
    };

    this.update = function(iDir, szAction) {
        if (szAction === "right" || szAction === "left") {
            _oContainer.x += PLAYER_SPEED * iDir;
        } else {
            _oContainer.y += PLAYER_SPEED * iDir;
        }
    };

    this._init(iX, iY, iRow, iCol);
}

function CEnemy(iIndex, iX, iY, iRow, iCol, oParentContainer) {
    var _bUpdate;
    var _iCurState;
    var _bZombie;
    var _iIndex;
    var _iRow;
    var _iCol;
    var _iStartX;
    var _iStartY;
    var _iStartingRow;
    var _iStartingCol;
    var _iCurSprite;
    var _iCurSpeed;
    var _iCurPathIndex;
    var _pStartingPoint;
    var _pEndPoint;
    var _iTimeElaps = 0;
    var _aSprites;
    var _aCurPosPath;
    var _aCurPath;

    var _oContainer;
    var _oParentContainer = oParentContainer;

    this._init = function(iIndex, iX, iY, iRow, iCol) {
        _bUpdate = false;
        _bZombie = false;
        _iIndex = iIndex;
        _iRow = _iStartingRow = iRow;
        _iCol = _iStartingCol = iCol;
        _iStartX = iX;
        _iStartY = iY;
        _aSprites = new Array();

        _oContainer = new createjs.Container();
        _oContainer.x = iX;
        _oContainer.y = iY;
        _oContainer.regX = ENEMY_WIDTH / 2;
        _oContainer.regY = ENEMY_HEIGHT / 2;
        _oParentContainer.addChild(_oContainer);


        //TOP DIRECTION
        var oData = {
            images: [s_oSpriteLibrary.getSprite("enemy_top_" + _iIndex)],
            // width, height & registration point of each sprite
            frames: {
                width: ENEMY_WIDTH,
                height: ENEMY_HEIGHT
            },
            animations: {
                start: 0,
                walk: [0, 15, "walk"],
                escape: [16, 31, "escape"],
                die: [32, 53, "stop_die"],
                stop_die: 53,
                ghost: 20
            }
        };

        var oSpriteSheet = new createjs.SpriteSheet(oData);
        var oSpriteTop = createSprite(oSpriteSheet, "start", 0, 0, ENEMY_WIDTH, ENEMY_HEIGHT);
        oSpriteTop.visible = false;
        _oContainer.addChild(oSpriteTop);

        _aSprites[DIR_TOP] = oSpriteTop;


        //RIGHT DIRECTION
        var oData = {
            images: [s_oSpriteLibrary.getSprite("enemy_right_" + _iIndex)],
            // width, height & registration point of each sprite
            frames: {
                width: ENEMY_WIDTH,
                height: ENEMY_HEIGHT
            },
            animations: {
                start: 0,
                walk: [0, 15, "walk"],
                escape: [16, 31, "escape"],
                die: [32, 53, "stop_die"],
                stop_die: 53,
                ghost: 20
            }
        };

        var oSpriteSheet = new createjs.SpriteSheet(oData);
        var oSpriteRight = createSprite(oSpriteSheet, "start", 0, 0, ENEMY_WIDTH, ENEMY_HEIGHT);
        oSpriteRight.visible = false;
        _oContainer.addChild(oSpriteRight);

        _aSprites[DIR_RIGHT] = oSpriteRight;


        //BOTTOM DIRECTION
        var oData = {
            images: [s_oSpriteLibrary.getSprite("enemy_bottom_" + _iIndex)],
            // width, height & registration point of each sprite
            frames: {
                width: ENEMY_WIDTH,
                height: ENEMY_HEIGHT
            },
            animations: {
                start: 0,
                walk: [0, 15, "walk"],
                escape: [16, 31, "escape"],
                die: [32, 53, "stop_die"],
                stop_die: 53,
                ghost: 20
            }
        };

        var oSpriteSheet = new createjs.SpriteSheet(oData);
        var oSpriteBottom = createSprite(oSpriteSheet, "walk", 0, 0, ENEMY_WIDTH, ENEMY_HEIGHT);
        _oContainer.addChild(oSpriteBottom);

        _aSprites[DIR_BOTTOM] = oSpriteBottom;



        //LEFT DIRECTION
        var oData = {
            images: [s_oSpriteLibrary.getSprite("enemy_left_" + _iIndex)],
            // width, height & registration point of each sprite
            frames: {
                width: ENEMY_WIDTH,
                height: ENEMY_HEIGHT
            },
            animations: {
                start: 0,
                walk: [0, 15, "walk"],
                escape: [16, 31, "escape"],
                die: [32, 53, "stop_die"],
                stop_die: 53,
                ghost: 20
            }
        };

        var oSpriteSheet = new createjs.SpriteSheet(oData);
        var oSpriteLeft = createSprite(oSpriteSheet, "start", 0, 0, ENEMY_WIDTH, ENEMY_HEIGHT);
        oSpriteLeft.visible = false;
        _oContainer.addChild(oSpriteLeft);

        _aSprites[DIR_LEFT] = oSpriteLeft;

        _iCurSpeed = ENEMY_SPEED;
        _iCurSprite = DIR_BOTTOM;
    };

    this.unload = function() {
        _oParentContainer.removeChild(_oContainer);
    };

    this.reset = function() {
        _bUpdate = false;
        _bZombie = false;

        _iRow = _iStartingRow;
        _iCol = _iStartingCol;
        _oContainer.x = _iStartX;
        _oContainer.y = _iStartY;
        _oContainer.alpha = 1;

        _iCurSprite = DIR_BOTTOM;
        this.playAnim(_iCurSprite, ANIM_WALK);
    };

    this._hideAllAnims = function() {
        for (var i = 0; i < _aSprites.length; i++) {
            _aSprites[i].visible = false;
        }
    };

    this.playAnim = function(iDir, szAnim) {
        this._hideAllAnims();

        _aSprites[iDir].visible = true;
        _aSprites[iDir].gotoAndPlay(szAnim);

        _iCurSprite = iDir;

        if (szAnim === ANIM_ESCAPE) {
            _iCurSpeed = ENEMY_SPEED_SLOW;
        } else {
            _iCurSpeed = ENEMY_SPEED;
        }
    };

    this.setMask = function(oMask) {
        _oContainer.mask = oMask;
    };

    this.increaseX = function(iIncrease) {
        _oContainer.x += iIncrease;
    };

    this.setPath = function(aPath, aConvertedPath, iEnemyState) {
        _iCurState = iEnemyState;
        _aCurPosPath = aConvertedPath;
        _aCurPath = aPath;

        _iCurPathIndex = 0;

        this._setNextPoint();
        _bUpdate = true;
    };

    this.setUpdate = function(bUpdate) {
        _bUpdate = bUpdate;
    };

    this._setNextPoint = function() {
        _iRow = _aCurPath[_iCurPathIndex][0];
        _iCol = _aCurPath[_iCurPathIndex][1];

        if (_iCurState !== STATE_ENEMY_FOLLOW && !_bZombie && s_oGame.checkDistFromPlayer(this)) {
            return;
        } else if ((_iCurPathIndex + 1) >= _aCurPosPath.length) {
            _bZombie = false;
            _bUpdate = false;

            _oContainer.alpha = 1;
            s_oGame.getNewEnemyPath(this, _iCurState);
        } else {
            _iTimeElaps = 0;

            _pStartingPoint = new CVector2(_aCurPosPath[_iCurPathIndex].x, _aCurPosPath[_iCurPathIndex].y);
            _pEndPoint = new CVector2(_aCurPosPath[_iCurPathIndex + 1].x, _aCurPosPath[_iCurPathIndex + 1].y);

            this._changeDir();
        }
    };

    this.pauseAnim = function(bPause) {
        _aSprites[_iCurSprite].paused = bPause;
    };

    this._changeDir = function() {
        var iDiffRow = _aCurPath[_iCurPathIndex + 1][0] - _aCurPath[_iCurPathIndex][0];
        var iDiffCol = _aCurPath[_iCurPathIndex + 1][1] - _aCurPath[_iCurPathIndex][1];

        if (_bZombie === false) {
            var szLabel = ANIM_WALK;
            if (s_oGame.isPowerUpActive()) {
                szLabel = ANIM_ESCAPE;
            }
            if (iDiffRow < 0) {
                this.playAnim(DIR_TOP, szLabel);
            } else if (iDiffRow > 0) {
                this.playAnim(DIR_BOTTOM, szLabel);
            } else if (iDiffCol < 0) {
                this.playAnim(DIR_LEFT, szLabel);
            } else if (iDiffCol > 0) {
                this.playAnim(DIR_RIGHT, szLabel);
            }
        }

    };

    this.death = function() {
        _bUpdate = false;
        _bZombie = true;
        _aSprites[_iCurSprite].gotoAndPlay(ANIM_DIE);

        playSound("enemy_" + _iIndex + "_death", 1, false);

        var oParent = this;
        createjs.Tween.get(_oContainer).wait(2000).to({
            alpha: 0
        }, 1000).call(function() {
            oParent._playDeathAnim();
        });
    };

    this._playDeathAnim = function() {

        this._hideAllAnims();

        _iCurSprite = DIR_BOTTOM;
        _aSprites[_iCurSprite].visible = true;
        _oContainer.alpha = 0.5;
        _aSprites[_iCurSprite].gotoAndStop("ghost");


        s_oGame.getEnemyPathToStartPos(this);
    };

    this.setX = function(iX) {
        _oContainer.x = iX;
    };

    this.getRow = function() {
        return _iRow;
    };

    this.getCol = function() {
        return _iCol;
    };

    this.getX = function() {
        return _oContainer.x;
    };

    this.getStartingRow = function() {
        return _iStartingRow;
    };

    this.getStartingCol = function() {
        return _iStartingCol;
    };

    this.getY = function() {
        return _oContainer.y;
    };

    this.getPos = function() {
        return {
            x: _oContainer.x,
            y: _oContainer.y
        };
    };

    this.getCurSpriteIndex = function() {
        return _iCurSprite;
    };

    this._moveEnemy = function() {
        // LINEAR MOVEMENT
        _iTimeElaps += s_iTimeElaps;
        if (_iTimeElaps > _iCurSpeed) {
            _iCurPathIndex++;
            this._setNextPoint();
        } else {
            var fLerp = easeLinear(_iTimeElaps, 0, 1, _iCurSpeed);
            var oPoint = tweenVectors(_pStartingPoint, _pEndPoint, fLerp);
            _oContainer.x = oPoint.getX();
            _oContainer.y = oPoint.getY();
        }
    };

    this.getState = function() {
        return _iCurState;
    };

    this.isDeath = function() {
        return _bZombie;
    };

    this.update = function() {
        if (_bUpdate) {
            this._moveEnemy();

            if (_bZombie) {
                return false;
            } else {
                return true;
            }

        }

        return false;
    };

    this._init(iIndex, iX, iY, iRow, iCol);
}

var LEVEL_INFOS = new Array();
LEVEL_INFOS[0] = "7#0#0#0#0#0#0#0#0#10#0#0#0#0#0#0#0#0#6#1#23#23#23#23#23#23#23#23#1#23#23#23#23#23#23#23#23#1#1#23#15#16#17#23#15#17#23#1#23#15#16#17#23#15#17#23#1#1#24#18#19#20#23#18#20#23#4#23#18#19#20#23#18#20#24#1#1#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#1#1#23#3#2#23#5#23#3#0#10#0#2#23#5#23#3#2#23#1#1#23#23#23#23#1#23#23#23#1#23#23#23#1#23#23#23#23#1#9#0#0#6#23#11#0#2#-1#4#-1#3#0#12#23#7#0#0#8#21#0#0#8#23#4#-1#-1#-1#-1#-1#-1#-1#4#23#9#0#0#0#25#-1#-1#-1#23#-1#-1#7#0#22#0#6#-1#-1#23#-1#-1#-1#26#21#0#0#6#23#5#-1#1#-1#-1#-1#1#-1#5#23#7#0#0#0#7#0#0#8#23#4#-1#9#0#0#0#8#-1#4#23#9#0#0#6#1#23#23#23#23#-1#-1#-1#-1#-1#-1#-1#-1#-1#23#23#23#23#1#1#23#3#6#23#3#0#0#0#0#0#0#0#2#23#7#2#23#1#1#23#23#1#23#23#23#23#23#-1#23#23#23#23#23#1#23#23#1#11#2#24#4#23#5#23#3#0#10#0#2#23#5#23#4#24#3#12#1#23#23#23#23#1#23#23#23#1#23#23#23#1#23#23#23#23#1#1#23#3#0#0#13#0#2#23#4#23#3#0#13#0#0#2#23#1#1#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#1#9#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#8";
LEVEL_INFOS[1] = "7#0#0#0#0#0#0#0#0#10#0#0#0#0#0#0#0#0#6#1#23#23#23#23#23#23#23#23#1#23#23#23#23#23#23#23#23#1#1#23#15#17#23#15#16#17#23#1#23#15#16#17#23#15#17#23#1#1#24#18#20#23#18#19#20#23#4#23#18#19#20#23#18#20#24#1#1#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#1#11#0#2#23#3#6#23#3#0#0#0#2#23#7#2#23#3#0#12#1#23#23#23#23#1#23#23#23#23#23#23#23#1#23#23#23#23#1#9#0#0#6#23#4#-1#3#0#0#0#2#-1#4#23#7#0#0#8#21#0#0#8#23#-1#-1#-1#-1#-1#-1#-1#-1#-1#23#9#0#0#0#25#-1#-1#-1#23#5#-1#7#0#22#0#6#-1#5#23#-1#-1#-1#26#21#0#0#6#23#1#-1#1#-1#-1#-1#1#-1#1#23#7#0#0#0#7#0#0#8#23#4#-1#9#0#0#0#8#-1#4#23#9#0#0#6#1#23#23#23#23#-1#-1#-1#-1#-1#-1#-1#-1#-1#23#23#23#23#1#1#23#15#17#23#5#-1#15#16#16#16#17#-1#5#23#15#17#23#1#1#24#18#20#23#4#23#18#19#19#19#20#23#4#23#18#20#24#1#11#23#23#23#23#23#23#23#23#-1#23#23#23#23#23#23#23#23#1#1#23#15#17#23#15#16#17#23#5#23#15#16#17#23#15#17#23#1#1#23#18#20#23#18#19#20#23#1#23#18#19#20#23#18#20#23#1#1#23#23#23#23#23#23#23#23#1#23#23#23#23#23#23#23#23#1#9#0#0#0#0#0#0#0#0#13#0#0#0#0#0#0#0#0#8";
LEVEL_INFOS[2] = "7#0#0#0#6#-1#-1#-1#-1#-1#-1#-1#-1#-1#7#0#0#0#6#1#23#23#23#9#0#0#0#0#0#0#0#0#0#8#23#23#23#1#1#23#5#23#23#23#23#23#23#23#23#23#23#23#23#23#5#23#1#1#24#9#0#0#2#23#3#0#0#0#2#23#3#0#0#8#24#1#1#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#1#11#23#3#2#23#5#23#3#0#0#0#2#23#5#23#3#2#23#1#1#23#23#23#23#1#23#23#23#23#23#23#23#1#23#23#23#23#1#9#0#0#6#23#4#-1#3#0#0#0#2#-1#4#23#7#0#0#8#21#0#0#8#23#-1#-1#-1#-1#-1#-1#-1#-1#-1#23#9#0#0#0#25#-1#-1#-1#23#5#-1#7#0#22#0#6#-1#5#23#-1#-1#-1#26#21#0#0#6#23#1#-1#1#-1#-1#-1#1#-1#1#23#7#0#0#0#7#0#0#8#23#4#-1#9#0#0#0#8#-1#4#23#9#0#0#6#1#23#23#23#23#-1#-1#-1#-1#-1#-1#-1#-1#-1#23#23#23#23#1#1#23#15#17#23#5#-1#15#16#16#16#17#-1#5#23#15#17#23#1#1#23#18#20#23#4#-1#18#19#19#19#20#-1#4#23#18#20#23#1#11#23#23#23#23#23#23#23#23#-1#23#23#23#23#23#23#23#23#1#1#23#7#0#0#2#23#3#0#0#0#2#23#3#0#0#6#23#1#1#24#4#23#23#23#23#23#23#23#23#23#23#23#23#23#4#24#1#1#23#23#23#7#0#0#0#0#0#0#0#0#0#6#23#23#23#1#9#0#0#0#8#-1#-1#-1#-1#-1#-1#-1#-1#-1#9#0#0#0#8";
LEVEL_INFOS[3] = "7#0#0#0#0#0#0#10#0#0#0#10#0#0#0#0#0#0#6#1#23#23#23#23#23#23#1#23#23#23#1#23#23#23#23#23#23#1#1#23#15#17#23#5#23#1#23#5#23#1#23#5#23#15#17#23#1#1#24#18#20#23#1#23#4#23#1#23#4#23#1#23#18#20#24#1#1#23#23#23#23#1#23#23#23#1#23#23#23#1#23#23#23#23#1#1#23#7#2#23#9#0#2#23#1#23#3#0#8#23#3#6#23#1#1#23#1#23#23#23#23#23#23#1#23#23#23#23#23#23#1#23#1#8#23#4#23#3#2#-1#3#0#13#0#2#-1#3#2#23#4#23#9#25#23#23#23#23#-1#-1#-1#-1#-1#-1#-1#-1#-1#23#23#23#23#26#6#-1#3#2#23#5#-1#7#0#22#0#6#-1#5#23#3#2#-1#7#1#-1#-1#-1#23#1#-1#1#-1#-1#-1#1#-1#1#23#-1#-1#-1#1#1#-1#3#2#23#4#-1#9#0#0#0#8#-1#4#23#3#2#-1#1#8#23#23#23#23#-1#-1#-1#-1#-1#-1#-1#-1#-1#23#23#23#23#9#25#23#3#6#23#3#0#0#0#0#0#0#0#2#23#7#2#23#26#6#23#23#1#23#23#23#23#23#-1#23#23#23#23#23#1#23#23#1#11#2#23#1#23#5#23#3#0#10#0#2#23#5#23#1#23#3#12#1#23#23#1#23#1#23#23#23#1#23#23#23#1#23#1#23#23#1#1#24#3#8#23#9#0#2#23#4#23#3#0#8#23#9#2#24#1#1#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#1#9#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#8";
LEVEL_INFOS[4] = "7#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#6#1#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#1#1#24#3#2#23#3#0#6#23#5#23#7#0#2#23#3#2#24#1#1#23#23#23#23#23#23#1#23#1#23#1#23#23#23#23#23#23#1#9#2#23#3#0#6#23#1#23#1#23#1#23#7#0#2#23#3#8#25#-1#23#-1#-1#1#23#4#23#4#23#4#23#1#-1#-1#23#-1#26#21#6#23#5#-1#1#23#23#23#23#23#23#23#1#-1#5#23#7#0#7#8#23#1#-1#4#-1#3#0#0#0#2#-1#4#-1#1#23#9#6#1#23#23#1#-1#-1#-1#-1#-1#-1#-1#-1#-1#-1#-1#1#23#23#1#1#23#3#13#0#2#-1#7#0#22#0#6#-1#3#0#13#2#23#1#1#23#23#23#-1#-1#-1#1#-1#-1#-1#1#-1#-1#-1#23#23#23#1#1#23#5#23#3#6#-1#9#0#0#0#8#-1#7#2#23#5#23#1#1#23#1#23#23#1#23#23#23#23#23#23#23#1#23#23#1#23#1#1#23#11#2#23#4#23#5#23#5#23#5#23#4#23#3#12#23#1#1#23#1#23#23#23#23#1#23#1#23#1#23#23#23#23#1#23#1#1#23#4#23#3#0#0#8#23#4#23#9#0#0#2#23#4#23#1#1#23#23#23#23#23#23#23#23#-1#23#23#23#23#23#23#23#23#1#1#24#3#2#23#3#0#0#2#23#3#0#0#2#23#3#2#24#1#1#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#1#9#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#8";
LEVEL_INFOS[5] = "7#0#0#0#0#0#0#0#0#10#0#0#0#0#0#0#0#0#6#1#23#23#23#23#23#23#23#23#1#23#23#23#23#23#23#23#23#1#1#23#3#6#23#3#0#6#23#1#23#7#0#2#23#7#2#24#1#1#23#23#1#23#23#23#4#23#4#23#4#23#23#23#1#23#23#1#9#6#23#1#23#5#23#23#23#23#23#23#23#5#23#1#23#7#8#-1#1#23#4#23#1#23#3#0#10#0#2#23#1#23#4#23#1#-1#-1#1#23#23#23#1#23#23#23#1#23#23#23#1#23#23#23#1#-1#21#8#-1#5#23#11#0#2#-1#4#-1#3#0#12#23#5#-1#9#0#25#-1#-1#1#23#4#-1#-1#-1#-1#-1#-1#-1#4#23#1#-1#-1#26#21#0#0#12#23#-1#-1#7#0#22#0#6#-1#-1#23#11#0#0#0#25#-1#-1#1#23#5#-1#1#-1#-1#-1#1#-1#5#23#1#-1#-1#26#21#6#-1#4#23#4#-1#9#0#0#0#8#-1#4#23#4#-1#7#0#-1#1#23#23#23#-1#-1#-1#-1#-1#-1#-1#-1#-1#23#23#23#1#-1#-1#1#23#5#23#3#0#0#0#0#0#0#0#2#23#5#23#1#-1#7#8#23#1#23#23#23#23#23#-1#23#23#23#23#23#1#23#9#6#1#23#23#1#23#5#23#3#0#0#0#2#23#5#23#1#23#23#1#1#24#3#12#23#1#23#23#23#23#23#23#23#1#23#11#2#23#1#1#23#23#4#23#4#23#3#0#0#0#2#23#4#23#4#23#23#1#9#6#23#23#23#23#23#23#23#23#23#23#23#23#23#23#23#7#8#-1#9#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#8#-1";


var PLAYER_START = new Array();
PLAYER_START[0] = {
    row: 14,
    col: 9
};
PLAYER_START[1] = {
    row: 15,
    col: 9
};
PLAYER_START[2] = {
    row: 15,
    col: 9
};
PLAYER_START[3] = {
    row: 14,
    col: 9
};
PLAYER_START[4] = {
    row: 16,
    col: 9
};
PLAYER_START[5] = {
    row: 16,
    col: 9
};


var ENEMY_START = new Array();
ENEMY_START[0] = [{
    row: 10,
    col: 8
}, {
    row: 10,
    col: 9
}, {
    row: 10,
    col: 10
}];
ENEMY_START[1] = [{
    row: 10,
    col: 8
}, {
    row: 10,
    col: 9
}, {
    row: 10,
    col: 10
}];
ENEMY_START[2] = [{
    row: 10,
    col: 8
}, {
    row: 10,
    col: 9
}, {
    row: 10,
    col: 10
}];
ENEMY_START[3] = [{
    row: 10,
    col: 8
}, {
    row: 10,
    col: 9
}, {
    row: 10,
    col: 10
}];
ENEMY_START[4] = [{
    row: 10,
    col: 8
}, {
    row: 10,
    col: 9
}, {
    row: 10,
    col: 10
}];
ENEMY_START[5] = [{
    row: 10,
    col: 8
}, {
    row: 10,
    col: 9
}, {
    row: 10,
    col: 10
}];

function CCell(iX, iY, iRow, iCol, iIndex, oParentContainer) {
    var _iRow = iRow;
    var _iCol = iCol;
    var _iStartX;
    var _iStartY;
    var _szTag;
    var _aAdjacents;
    var _pStartPos;
    var _oSprite;
    var _oParentContainer = oParentContainer;

    this._init = function(iX, iY, iIndex) {

        _iStartX = iX;
        _iStartY = iY;

        if (iIndex >= 25) {
            if (iIndex === 25) {
                var oSpriteItem = s_oSpriteLibrary.getSprite("exit_door_left");
            } else {
                var oSpriteItem = s_oSpriteLibrary.getSprite("exit_door_right");
            }

            _oSprite = createBitmap(oSpriteItem);
            _oSprite.regX = oSpriteItem.width / 2;
            _oSprite.regY = oSpriteItem.height / 2;
            _oSprite.x = iX;
            _oSprite.y = iY;
            oParentContainer.addChild(_oSprite);

            _szTag = CELL_EMPTY;
        } else {
            var oData = {
                images: [s_oSpriteLibrary.getSprite("walls")],
                // width, height & registration point of each sprite
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
                    empty: 25
                }
            };

            var oSpriteSheet = new createjs.SpriteSheet(oData);

            var szLabel = "piece_" + iIndex;

            if (iIndex < 0) {
                szLabel = "empty";
                _szTag = CELL_EMPTY;
            } else if (iIndex < 22) {
                _szTag = CELL_WALL;
            } else if (iIndex === 22) {
                _szTag = CELL_EMPTY;
            } else if (iIndex === 23) {
                _szTag = CELL_CHEESE;
            } else {
                _szTag = CELL_SUPER_CHEESE;
            }

            _oSprite = createSprite(oSpriteSheet, szLabel, CELL_SIZE / 2, CELL_SIZE / 2, CELL_SIZE, CELL_SIZE);
            _oSprite.x = iX;
            _oSprite.y = iY;
            _oSprite.stop();
            _oParentContainer.addChild(_oSprite);
        }

        _pStartPos = {
            x: _oSprite.x,
            y: _oSprite.y
        };


        //STORE ADJACENTS ROW COLUMNS
        _aAdjacents = new Array({
            row: _iRow,
            col: _iCol
        });
        if (_iRow - 1 > 0) {
            _aAdjacents.push({
                row: _iRow - 1,
                col: _iCol
            });
        }

        if (_iCol + 1 < GRID_COLS) {
            _aAdjacents.push({
                row: _iRow,
                col: _iCol + 1
            });
        }

        if (_iRow + 1 < GRID_ROWS) {
            _aAdjacents.push({
                row: _iRow + 1,
                col: _iCol
            });
        }

        if (_iCol - 1 > 0) {
            _aAdjacents.push({
                row: _iRow,
                col: _iCol - 1
            });
        }
    };

    this.reset = function() {
        _oSprite.x = _iStartX;
        _oSprite.y = _iStartY;
    };

    this.setEmpty = function() {
        _szTag = CELL_EMPTY;
        _oSprite.gotoAndStop("empty");
    };

    this.setIndex = function() {

    };

    this.openDoor = function() {
        createjs.Tween.get(_oSprite).to({
            x: _oSprite.x - CELL_SIZE
        }, 1500).call(function() {
            s_oGame.startEnemies();
        });
    };

    this.getX = function() {
        return _pStartPos.x;
    };

    this.getY = function() {
        return _pStartPos.y;
    };

    this.getRow = function() {
        return _iRow;
    };

    this.getCol = function() {
        return _iCol;
    };

    this.getTag = function() {
        return _szTag;
    };

    this.isWalkable = function() {
        return _szTag === CELL_WALL ? false : true;
    };

    this.getAdjacents = function() {
        return _aAdjacents;
    };

    this._init(iX, iY, iIndex);
}

function CHelpPanel() {
    var _iStartY;
    var _iPosHandX;
    var _oListener;

    var _oFade;
    var _oButStart;
    var _oContainer;
    var _oContainerPanel;

    var _oThis = this;

    this._init = function() {
        _oContainer = new createjs.Container();
        _oContainer.visible = false;
        s_oStage.addChild(_oContainer);

        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        _oFade.alpha = 0.5;
        _oListener = _oFade.on("click", function() {});
        _oContainer.addChild(_oFade);

        _oContainerPanel = new createjs.Container();
        _oContainerPanel.x = CANVAS_WIDTH / 2;
        _oContainer.addChild(_oContainerPanel);

        var oSpriteBg = s_oSpriteLibrary.getSprite("bg_level_selection");
        var oBg = createBitmap(oSpriteBg);
        _oContainerPanel.addChild(oBg);

        var iWidth = oSpriteBg.width - 100;
        var iHeight = 150;
        var iX = -10 + oSpriteBg.width / 2;
        var iY = oSpriteBg.height / 2 - 200;
        var oTextHelp = new CTLText(_oContainerPanel,
            iX - iWidth / 2, iY - iHeight / 2, iWidth, iHeight,
            70, "center", "#ffb557", FONT, 1.2,
            2, 2,
            " ",
            true, true, true,
            false);


        if (s_bMobile) {
            oTextHelp.refreshText(TEXT_HELP_MOBILE);

            var oSpriteSwipe = s_oSpriteLibrary.getSprite("swipe_trail");
            var oHelpSwipe = createBitmap(oSpriteSwipe);
            oHelpSwipe.regX = oHelpSwipe.width * 0.5;
            oHelpSwipe.regY = oHelpSwipe.height * 0.5;
            oHelpSwipe.x = 300;
            oHelpSwipe.y = 420;
            _oContainerPanel.addChild(oHelpSwipe);

            var oSpriteHand = s_oSpriteLibrary.getSprite("hand_swipe");

            var oHelpHand = createBitmap(oSpriteHand);
            oHelpHand.regX = oSpriteHand.width * 0.5;
            oHelpHand.regY = oSpriteHand.height * 0.5;
            oHelpHand.x = oHelpSwipe.x + 120;
            oHelpHand.y = oHelpSwipe.y + 120;
            _oContainerPanel.addChild(oHelpHand);

            _iPosHandX = oHelpHand.x;

            this.handMovement(oHelpHand, oHelpSwipe);
        } else {
            oTextHelp.refreshText(TEXT_HELP_DESKTOP);

            var oSpriteKeys = s_oSpriteLibrary.getSprite("keyboard");
            var oKeys = createBitmap(oSpriteKeys);
            oKeys.regX = oSpriteKeys.width / 2;
            oKeys.x = oSpriteBg.width / 2;
            oKeys.y = oSpriteBg.height / 2 - 80;
            _oContainerPanel.addChild(oKeys);
        }

        _oButStart = new CGfxButton(oSpriteBg.width / 2, oSpriteBg.height / 2 + 300, s_oSpriteLibrary.getSprite("but_yes"), _oContainerPanel);
        _oButStart.addEventListener(ON_MOUSE_UP, this._onStart, this);

        _iStartY = -oSpriteBg.height / 2;

        _oContainerPanel.regX = oSpriteBg.width / 2;
        _oContainerPanel.regY = oSpriteBg.height / 2;
    };

    this.unload = function() {
        _oFade.off("click", _oListener);
        _oButStart.unload();
    };

    this.handMovement = function(oHelpHand, oHelpSwipe) {
        oHelpSwipe.x = _iPosHandX - 120;
        oHelpSwipe.scaleX = 1;
        oHelpSwipe.alpha = 1;
        createjs.Tween.get(oHelpSwipe).to({
            alpha: 0
        }, 500);
        createjs.Tween.get(oHelpHand).to({
            x: _iPosHandX + 240
        }, 1000, createjs.Ease.cubicOut).call(function() {
            oHelpSwipe.x = _iPosHandX + 300;
            oHelpSwipe.scaleX = -1;
            oHelpSwipe.alpha = 1;
            createjs.Tween.get(oHelpSwipe).to({
                alpha: 0
            }, 500);
            createjs.Tween.get(oHelpHand).to({
                x: _iPosHandX
            }, 1000, createjs.Ease.cubicOut).call(function() {
                _oThis.handMovement(oHelpHand, oHelpSwipe);
            });
        });
    };

    this.show = function() {
        _oFade.alpha = 0;
        _oContainerPanel.y = _iStartY;
        _oContainer.visible = true;

        createjs.Tween.get(_oFade).to({
            alpha: 0.7
        }, 500);
        createjs.Tween.get(_oContainerPanel).wait(400).to({
            y: CANVAS_HEIGHT / 2
        }, 1000, createjs.Ease.bounceOut);
    };

    this.hide = function() {
        createjs.Tween.get(_oContainerPanel).to({
            y: _iStartY
        }, 1000, createjs.Ease.backIn).call(function() {

            s_oGame.prepareStartLevel();
        });
        createjs.Tween.get(_oFade).to({
            alpha: 0
        }, 1000);
    };

    this._onStart = function() {
        _oThis.hide();
    };

    this._init();
}

function CVector2(iX, iY) {
    var x;
    var y;

    this._init = function(iX, iY) {
        x = iX;
        y = iY;
    };

    this.add = function(vx, vy) {
        x += vx;
        y += vy;
    };

    this.addV = function(v) {
        x += v.getX();
        y += v.getY();
    };

    this.scalarDivision = function(n) {
        x /= n;
        y /= n;
    };

    this.subV = function(v) {
        x -= v.getX();
        y -= v.getY();
    };

    this.scalarProduct = function(n) {
        x *= n;
        y *= n;
    };

    this.invert = function() {
        x *= -1;
        y *= -1;
    };

    this.dotProduct = function(v) {
        return (x * v.getX() + y * v.getY());
    };

    this.set = function(fx, fy) {
        x = fx;
        y = fy;
    };

    this.setV = function(v) {
        x = v.getX();
        y = v.getY();
    };

    this.length = function() {
        return Math.sqrt(x * x + y * y);
    };

    this.length2 = function() {
        return x * x + y * y;
    };

    this.normalize = function() {
        var len = this.length();
        if (len > 0) {
            x /= len;
            y /= len;
        }
    };

    this.getNormalize = function(outV) {
        var len = this.length();
        outV.set(x, y);
        outV.normalize();
    };

    this.rot90CCW = function() {
        var a = x;
        x = -y;
        y = a;
    };

    this.rot90CW = function() {
        var a = x;
        x = y;
        y = -a;
    };

    this.getRotCCW = function(outV) {
        outV.set(x, y);
        outV.rot90CCW();
    };

    this.getRotCW = function(outV) {
        outV.set(x, y);
        outV.rot90CW();
    };

    this.ceil = function() {
        x = Math.ceil(x);
        y = Math.ceil(y);
    };

    this.round = function() {
        x = Math.round(x);
        y = Math.round(y);
    };

    this.toString = function() {
        return "Vector2: " + x + ", " + y;
    };

    this.print = function() {
        trace("Vector2: " + x + ", " + y + "");
    };

    this.getX = function() {
        return x;
    };

    this.getY = function() {
        return y;
    };

    this._init(iX, iY);
}

function CLevelMenu() {
    var _iCurPage;
    var _iStartY;
    var _iHeightToggle;
    var _aLevelButs;
    var _aPointsX;
    var _aContainerPage;
    var _pStartPosExit;
    var _pStartPosAudio;
    var _pStartPosFullscreen;

    var _oSpriteBg;
    var _oFade;
    var _oContainerPanel;
    var _oButExit;
    var _oAudioToggle;
    var _oArrowRight = null;
    var _oArrowLeft = null;
    var _oContainer;
    var _oButFullscreen;
    var _fRequestFullScreen = null;
    var _fCancelFullScreen = null;

    this._init = function() {
        _iCurPage = 0;

        _oContainer = new createjs.Container();
        s_oStage.addChild(_oContainer);

        var oMainBg = createBitmap(s_oSpriteLibrary.getSprite('bg_menu'));
        _oContainer.addChild(oMainBg);

        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        _oFade.alpha = 0.5;
        _oContainer.addChild(_oFade);

        _oContainerPanel = new createjs.Container();
        _oContainerPanel.x = CANVAS_WIDTH / 2;
        _oContainer.addChild(_oContainerPanel);

        _oSpriteBg = s_oSpriteLibrary.getSprite("bg_level_selection");
        var oBg = createBitmap(_oSpriteBg);
        _oContainerPanel.addChild(oBg);

        var iWidth = _oSpriteBg.width - 150;
        var iHeight = 70;
        var iX = -10 + _oSpriteBg.width / 2;
        var iY = 170;
        var oTextLevel = new CTLText(_oContainerPanel,
            iX - iWidth / 2, iY - iHeight / 2, iWidth, iHeight,
            70, "center", "#ffb557", FONT, 1,
            2, 2,
            TEXT_SELECT_LEVEL,
            true, true, false,
            false);

        var oSprite = s_oSpriteLibrary.getSprite('but_exit');
        _pStartPosExit = {
            x: CANVAS_WIDTH - (oSprite.width / 2) - 10,
            y: (oSprite.height / 2) + 10
        };
        _oButExit = new CGfxButton(_pStartPosExit.x, _pStartPosExit.y, oSprite, s_oStage);
        _oButExit.addEventListener(ON_MOUSE_UP, this._onExit, this);

        _oContainerPanel.regX = _oSpriteBg.width / 2;
        _oContainerPanel.regY = _oSpriteBg.height / 2;

        _iStartY = -_oSpriteBg.height / 2;
        _iHeightToggle = oSprite.height;

        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            var oSprite = s_oSpriteLibrary.getSprite('audio_icon');
            _pStartPosAudio = {
                x: _pStartPosExit.x - (oSprite.width / 2) - 10,
                y: _pStartPosExit.y
            };

            _oAudioToggle = new CToggle(_pStartPosAudio.x, _pStartPosAudio.y, oSprite, s_bAudioActive, s_oStage);
            _oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        }

        var doc = window.document;
        var docEl = doc.documentElement;
        _fRequestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        _fCancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

        if (ENABLE_FULLSCREEN === false) {
            _fRequestFullScreen = false;
        }

        if (_fRequestFullScreen && screenfull.isEnabled) {
            oSprite = s_oSpriteLibrary.getSprite("but_fullscreen")
            _pStartPosFullscreen = {
                x: oSprite.width / 4 + 10,
                y: (oSprite.height / 2) + 10
            };
            _oButFullscreen = new CToggle(_pStartPosFullscreen.x, _pStartPosFullscreen.y, oSprite, s_bFullscreen, s_oStage);
            _oButFullscreen.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this);
        }


        this._checkBoundLimits();

        //FIND X COORDINATES FOR LEVEL BUTS
        _aPointsX = new Array();
        var iWidth = _oSpriteBg.width - 100;
        var iOffsetX = Math.floor(iWidth / NUM_COLS_PAGE_LEVEL) / 2;
        var iXPos = 0;
        for (var i = 0; i < NUM_COLS_PAGE_LEVEL; i++) {
            _aPointsX.push(iXPos);
            iXPos += iOffsetX * 2;
        }

        _aContainerPage = new Array();
        this._createNewLevelPage(0, NUM_LEVELS);
        /*
        if(_aContainerPage.length > 1){
            //MULTIPLE PAGES
            for(var k=1;k<_aContainerPage.length;k++){
                _aContainerPage[k].visible = false;
            }

            _oArrowRight = new CGfxButton(CANVAS_WIDTH/2 + 280,CANVAS_HEIGHT - 80,s_oSpriteLibrary.getSprite('arrow_right'),true);
            _oArrowRight.addEventListener(ON_MOUSE_UP, this._onRight, this);
            
            _oArrowLeft = new CGfxButton(CANVAS_WIDTH/2 - 280,CANVAS_HEIGHT - 80,s_oSpriteLibrary.getSprite('arrow_left'),true);
            _oArrowLeft.addEventListener(ON_MOUSE_UP, this._onLeft, this);
        }*/

        this.refreshButtonPos();

        _oFade.alpha = 0;
        _oContainerPanel.y = _iStartY;
        _oContainer.visible = true;

        createjs.Tween.get(_oFade).to({
            alpha: 0.7
        }, 500);
        createjs.Tween.get(_oContainerPanel).to({
            y: CANVAS_HEIGHT / 2
        }, 1000, createjs.Ease.bounceOut);
    };

    this.unload = function() {
        for (var i = 0; i < _aLevelButs.length; i++) {
            _aLevelButs[i].unload();
        }

        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.unload();
        }

        if (_fRequestFullScreen && screenfull.isEnabled) {
            _oButFullscreen.unload();
        }

        _oButExit.unload();

        if (_oArrowLeft !== null) {
            _oArrowLeft.unload();
            _oArrowRight.unload();
        }

        s_oStage.removeAllChildren();
        s_oLevelMenu = null;
    };

    this.refreshButtonPos = function() {

        _oButExit.setPosition(_pStartPosExit.x - s_iOffsetX, _pStartPosExit.y + s_iOffsetY);
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.setPosition(_pStartPosAudio.x - s_iOffsetX, s_iOffsetY + _pStartPosAudio.y);
        }

        if (_fRequestFullScreen && screenfull.isEnabled) {
            _oButFullscreen.setPosition(_pStartPosFullscreen.x + s_iOffsetX, _pStartPosFullscreen.y + s_iOffsetY);
        }
    };

    this._checkBoundLimits = function() {
        var oSprite = s_oSpriteLibrary.getSprite('but_level');
        var iY = 0;

        var iHeightBound = CANVAS_HEIGHT - (EDGEBOARD_Y * 2) - (_iHeightToggle * 2);
        var iNumRows = 0;

        while (iY < iHeightBound) {
            iY += oSprite.height + 20;
            iNumRows++;
        }

        if (NUM_ROWS_PAGE_LEVEL > iNumRows) {
            NUM_ROWS_PAGE_LEVEL = iNumRows;
        }


        var iNumCols = 0;
        var iX = 0;
        var iWidthBounds = CANVAS_WIDTH - (EDGEBOARD_X * 2);
        var oSprite = s_oSpriteLibrary.getSprite('but_level');

        while (iX < iWidthBounds) {
            iX += (oSprite.width / 2) + 5;
            iNumCols++;
        }
        if (NUM_COLS_PAGE_LEVEL > iNumCols) {
            NUM_COLS_PAGE_LEVEL = iNumCols;
        }
    };

    this._createNewLevelPage = function(iStartLevel, iEndLevel) {
        var oContainerLevelBut = new createjs.Container();
        _oContainerPanel.addChild(oContainerLevelBut);
        _aContainerPage.push(oContainerLevelBut);

        _aLevelButs = new Array();
        var iCont = 0;
        var iY = 0;
        var iNumRow = 1;
        var bNewPage = false;
        var oSprite = s_oSpriteLibrary.getSprite('but_level');

        for (var i = iStartLevel; i < iEndLevel; i++) {
            var oBut = new CLevelBut(_aPointsX[iCont] + oSprite.width / 4, iY + oSprite.height / 2, i + 1, oSprite, (i + 1) > s_iLastLevel ? false : true, oContainerLevelBut);
            oBut.addEventListenerWithParams(ON_MOUSE_UP, this._onButLevelRelease, this, i);
            _aLevelButs.push(oBut);

            iCont++;
            if (iCont === _aPointsX.length) {
                iCont = 0;
                iY += oSprite.height + 70;
                iNumRow++;
                if (iNumRow > NUM_ROWS_PAGE_LEVEL && i !== iEndLevel - 1) {
                    bNewPage = true;
                    break;
                }
            }
        }

        oContainerLevelBut.x = _oSpriteBg.width / 2;
        oContainerLevelBut.y = _oSpriteBg.height / 2 + 100;
        oContainerLevelBut.regX = oContainerLevelBut.getBounds().width / 2;
        oContainerLevelBut.regY = oContainerLevelBut.getBounds().height / 2;

        if (bNewPage) {
            //ADD A PAGE
            this._createNewLevelPage(i + 1, iEndLevel);
        }

    };

    this._onRight = function() {
        _aContainerPage[_iCurPage].visible = false;

        _iCurPage++;
        if (_iCurPage >= _aContainerPage.length) {
            _iCurPage = 0;
        }

        _aContainerPage[_iCurPage].visible = true;
    };

    this._onLeft = function() {
        _aContainerPage[_iCurPage].visible = false;

        _iCurPage--;
        if (_iCurPage < 0) {
            _iCurPage = _aContainerPage.length - 1;
        }

        _aContainerPage[_iCurPage].visible = true;
    };

    this._onButLevelRelease = function(iLevel) {
        s_oLevelMenu.unload();

        s_oMain.levelSelected(iLevel + 1);
    };

    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };

    this.resetFullscreenBut = function() {
        if (_fRequestFullScreen && screenfull.isEnabled) {
            _oButFullscreen.setActive(s_bFullscreen);
        }
    };

    this._onFullscreenRelease = function() {
        if (s_bFullscreen) {
            _fCancelFullScreen.call(window.document);
        } else {
            _fRequestFullScreen.call(window.document.documentElement);
        }

        sizeHandler();
    };

    this._onExit = function() {
        s_oLevelMenu.unload();
        s_oMain.gotoMenu();
    };

    s_oLevelMenu = this;
    this._init();
}

var s_oLevelMenu = null;

function CLevelBut(iXPos, iYPos, szText, oSprite, bActive, oParentContainer) {
    var _bActive;
    var _aCbCompleted;
    var _aCbOwner;
    var _aButton = new Array();
    var _aParams = [];

    var _oLevelTextStruct;
    var _oLevelText;
    var _oButton;
    var _oContainer;
    var _oParentContainer;

    this._init = function(iXPos, iYPos, szText, oSprite, bActive) {
        _aCbCompleted = new Array();
        _aCbOwner = new Array();

        _oContainer = new createjs.Container();
        _oParentContainer.addChild(_oContainer);

        var oData = {
            images: [oSprite],
            // width, height & registration point of each sprite
            frames: {
                width: oSprite.width / 2,
                height: oSprite.height,
                regX: (oSprite.width / 2) / 2,
                regY: oSprite.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        };

        var oSpriteSheet = new createjs.SpriteSheet(oData);

        _bActive = bActive;
        _oButton = createSprite(oSpriteSheet, "state_" + _bActive, (oSprite.width / 2) / 2, oSprite.height / 2, oSprite.width / 2, oSprite.height);

        _oButton.mouseEnabled = bActive;
        _oButton.x = iXPos;
        _oButton.y = iYPos;
        _oButton.stop();

        if (!s_bMobile) {
            if (bActive) {
                _oContainer.cursor = "pointer";
            } else {
                _oContainer.cursor = "default";
            }
        }

        _oContainer.addChild(_oButton);
        _aButton.push(_oButton);

        var iWidth = oSprite.width / 2 - 20;
        var iHeight = 70;
        var iX = iXPos;
        var iY = iYPos - 6;
        _oLevelTextStruct = new CTLText(_oContainer,
            iX - iWidth / 2, iY - iHeight / 2, iWidth, iHeight,
            60, "center", "#804f01", FONT, 1,
            2, 2,
            szText,
            true, true, false,
            false);
        _oLevelTextStruct.setOutline(6);

        _oLevelText = new CTLText(_oContainer,
            iX - iWidth / 2, iY - iHeight / 2, iWidth, iHeight,
            60, "center", "#fff", FONT, 1,
            2, 2,
            szText,
            true, true, false,
            false);


        if (!bActive) {
            _oLevelText.setColor("#b4b4b4");
            _oLevelTextStruct.setColor("#606161");
        }

        this._initListener();
    };

    this.unload = function() {
        _oContainer.off("mousedown", this.buttonDown);
        _oContainer.off("pressup", this.buttonRelease);

        _oContainer.removeChild(_oButton);
    };

    this._initListener = function() {
        _oContainer.on("mousedown", this.buttonDown);
        _oContainer.on("pressup", this.buttonRelease);
    };

    this.viewBut = function(oButton) {
        _oContainer.addChild(oButton);
    };

    this.addEventListener = function(iEvent, cbCompleted, cbOwner) {
        _aCbCompleted[iEvent] = cbCompleted;
        _aCbOwner[iEvent] = cbOwner;
    };

    this.addEventListenerWithParams = function(iEvent, cbCompleted, cbOwner, aParams) {
        _aCbCompleted[iEvent] = cbCompleted;
        _aCbOwner[iEvent] = cbOwner;
        _aParams = aParams;
    };

    this.ifClickable = function() {
        if (_oContainer.mouseEnabled === true) {
            return 1;
        }
        return 0;
    };

    this.setActive = function(iLevel, bActive) {
        _bActive = bActive;
        _aButton[iLevel].gotoAndStop("state_" + _bActive);
        _aButton[iLevel].mouseEnabled = true;

        if (_bActive) {
            _oLevelText.setColor("#804f01");
            _oLevelTextStruct.setColor("#fff");
            if (!s_bMobile) {
                _oContainer.cursor = "pointer";
            }
        } else {
            _oLevelText.setColor("#b4b4b4");
            _oLevelTextStruct.setColor("#606161");

            if (!s_bMobile) {
                _oContainer.cursor = "default";
            }
        }

    };

    this.buttonRelease = function() {
        if (!_bActive) {
            return;
        }
        playSound("click", 1, false);

        if (_aCbCompleted[ON_MOUSE_UP]) {
            _aCbCompleted[ON_MOUSE_UP].call(_aCbOwner[ON_MOUSE_UP], _aParams);
        }
    };

    this.buttonDown = function() {
        if (_aCbCompleted[ON_MOUSE_DOWN]) {
            _aCbCompleted[ON_MOUSE_DOWN].call(_aCbOwner[ON_MOUSE_DOWN], _aParams);
        }
    };

    this.setPosition = function(iXPos, iYPos) {
        _oContainer.x = iXPos;
        _oContainer.y = iYPos;
    };

    this.setVisible = function(bVisible) {
        _oContainer.visible = bVisible;
    };

    _oParentContainer = oParentContainer;
    this._init(iXPos, iYPos, szText, oSprite, bActive, oParentContainer);
}

function CNextLevelPanel() {
    var _iStartY;
    var _iEventToLaunch;
    var _aCbCompleted;
    var _aCbOwner;
    var _oListener;
    var _oBg;

    var _oFade;
    var _oLevelScoreText;
    var _oLevelClearedText;
    var _oTotScoreText;
    var _oButHome;
    var _oButRestart;
    var _oButContinue;
    var _oContainer;
    var _oContainerPanel;

    var _oThis = this;


    this._init = function() {
        _aCbCompleted = new Array();
        _aCbOwner = new Array();

        _oContainer = new createjs.Container();
        _oContainer.visible = false;
        s_oStage.addChild(_oContainer);

        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        _oFade.alpha = 0.5;
        _oListener = _oFade.on("click", function() {});
        _oContainer.addChild(_oFade);


        _oBg = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        _oContainer.addChild(_oBg);

        _oContainerPanel = new createjs.Container();
        _oContainerPanel.x = CANVAS_WIDTH / 2;
        _oContainer.addChild(_oContainerPanel);

        var oSpriteBg = s_oSpriteLibrary.getSprite("bg_level_selection");
        var oBg = createBitmap(oSpriteBg);
        _oContainerPanel.addChild(oBg);

        var iWidth = oSpriteBg.width - 100;
        var iHeight = 80;
        var iX = -10 + oSpriteBg.width / 2;
        var iY = oSpriteBg.height / 2 - 200;
        _oLevelClearedText = new CTLText(_oContainerPanel,
            iX - iWidth / 2, iY - iHeight / 2, iWidth, iHeight,
            70, "center", "#ffb557", FONT, 1,
            2, 2,
            " ",
            true, true, false,
            false);

        var iWidth = oSpriteBg.width - 100;
        var iHeight = 60;
        var iY = oSpriteBg.height / 2;
        _oLevelScoreText = new CTLText(_oContainerPanel,
            iX - iWidth / 2, iY - iHeight / 2, iWidth, iHeight,
            50, "center", "#ffb557", FONT, 1,
            2, 2,
            " ",
            true, true, false,
            false);

        var iY = oSpriteBg.height / 2 + 100;
        _oTotScoreText = new CTLText(_oContainerPanel,
            iX - iWidth / 2, iY - iHeight / 2, iWidth, iHeight,
            50, "center", "#ffb557", FONT, 1,
            2, 2,
            " ",
            true, true, false,
            false);

        _oButHome = new CGfxButton(oSpriteBg.width / 2 - 250, oSpriteBg.height / 2 + 270, s_oSpriteLibrary.getSprite("but_home"), _oContainerPanel);
        _oButHome.addEventListener(ON_MOUSE_UP, this._onHome, this);

        _oButRestart = new CGfxButton(oSpriteBg.width / 2, oSpriteBg.height / 2 + 270, s_oSpriteLibrary.getSprite("but_restart"), _oContainerPanel);
        _oButRestart.addEventListener(ON_MOUSE_UP, this._onRestart, this);

        _oButContinue = new CGfxButton(oSpriteBg.width / 2 + 250, oSpriteBg.height / 2 + 270, s_oSpriteLibrary.getSprite("but_next"), _oContainerPanel);
        _oButContinue.addEventListener(ON_MOUSE_UP, this._onContinue, this);

        _iStartY = -oSpriteBg.height / 2;

        _oContainerPanel.regX = oSpriteBg.width / 2;
        _oContainerPanel.regY = oSpriteBg.height / 2;
    };

    this.unload = function() {
        _oButContinue.unload();
        _oButHome.unload();
        _oButRestart.unload();

        _oFade.off("click", _oListener);
    };

    this.addEventListener = function(iEvent, cbCompleted, cbOwner) {
        _aCbCompleted[iEvent] = cbCompleted;
        _aCbOwner[iEvent] = cbOwner;
    };

    this.show = function(iLevel, iTotScore, iLevelScore) {
        playSound("win_level", 1, false);

        _oLevelClearedText.refreshText(sprintf(TEXT_CLEARED, iLevel));
        _oLevelScoreText.refreshText(sprintf(TEXT_LEVEL_SCORE, iLevelScore));
        _oTotScoreText.refreshText(sprintf(TEXT_TOT_SCORE, iTotScore));

        _oBg.alpha = 0;
        _oFade.alpha = 0;
        _oContainerPanel.y = _iStartY;
        _oContainer.visible = true;

        createjs.Tween.get(_oBg).to({
            alpha: 1
        }, 500);
        createjs.Tween.get(_oFade).to({
            alpha: 1
        }, 500);
        createjs.Tween.get(_oContainerPanel).wait(400).to({
            y: CANVAS_HEIGHT / 2
        }, 1000, createjs.Ease.bounceOut);
    };

    this.hide = function() {
        createjs.Tween.get(_oContainerPanel).to({
            y: _iStartY
        }, 1000, createjs.Ease.backIn).call(function() {
            createjs.Tween.get(_oBg).to({
                alpha: 0
            }, 400, createjs.Ease.cubicOut).call(function() {
                _oContainer.visible = false;

                if (_aCbCompleted[_iEventToLaunch]) {
                    _aCbCompleted[_iEventToLaunch].call(_aCbOwner[_iEventToLaunch]);
                }
            })
        });
    };

    this._onHome = function() {

        _iEventToLaunch = ON_BACK_MENU;

        _oThis.hide();
    };

    this._onRestart = function() {
        $(s_oMain).trigger("show_interlevel_ad");

        _iEventToLaunch = ON_RESTART;

        _oThis.hide();
    };

    this._onContinue = function() {
        $(s_oMain).trigger("show_interlevel_ad");

        _iEventToLaunch = ON_NEXT;

        _oThis.hide();
    };

    this._init();
}

function CWinPanel() {
    var _iStartY;
    var _iEventToLaunch;
    var _aCbCompleted;
    var _aCbOwner;
    var _oListener;
    var _oBg;

    var _oFade;
    var _oLevelScoreText;
    var _oTitleText;
    var _oTotScoreText;
    var _oButHome;
    var _oButRestart;
    var _oContainer;
    var _oContainerPanel;

    var _oThis = this;


    this._init = function() {
        _aCbCompleted = new Array();
        _aCbOwner = new Array();

        _oContainer = new createjs.Container();
        _oContainer.visible = false;
        s_oStage.addChild(_oContainer);

        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        _oFade.alpha = 0.5;
        _oListener = _oFade.on("click", function() {});
        _oContainer.addChild(_oFade);


        _oBg = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        _oContainer.addChild(_oBg);

        _oContainerPanel = new createjs.Container();
        _oContainerPanel.x = CANVAS_WIDTH / 2;
        _oContainer.addChild(_oContainerPanel);

        var oSpriteBg = s_oSpriteLibrary.getSprite("bg_level_selection");
        var oBg = createBitmap(oSpriteBg);
        _oContainerPanel.addChild(oBg);

        var iWidth = oSpriteBg.width - 100;
        var iHeight = 80;
        var iX = -10 + oSpriteBg.width / 2;
        var iY = oSpriteBg.height / 2 - 200;
        _oTitleText = new CTLText(_oContainerPanel,
            iX - iWidth / 2, iY - iHeight / 2, iWidth, iHeight,
            70, "center", "#ffb557", FONT, 1,
            2, 2,
            TEXT_CONGRATS,
            true, true, false,
            false);

        var iY = oSpriteBg.height / 2;
        _oTotScoreText = new CTLText(_oContainerPanel,
            iX - iWidth / 2, iY - iHeight / 2, iWidth, iHeight,
            50, "center", "#ffb557", FONT, 1,
            2, 2,
            " ",
            true, true, false,
            false);

        _oButHome = new CGfxButton(oSpriteBg.width / 2 - 250, oSpriteBg.height / 2 + 270, s_oSpriteLibrary.getSprite("but_home"), _oContainerPanel);
        _oButHome.addEventListener(ON_MOUSE_UP, this._onHome, this);

        _oButRestart = new CGfxButton(oSpriteBg.width / 2 + 250, oSpriteBg.height / 2 + 270, s_oSpriteLibrary.getSprite("but_restart"), _oContainerPanel);
        _oButRestart.addEventListener(ON_MOUSE_UP, this._onRestart, this);


        _iStartY = -oSpriteBg.height / 2;

        _oContainerPanel.regX = oSpriteBg.width / 2;
        _oContainerPanel.regY = oSpriteBg.height / 2;
    };

    this.unload = function() {
        _oButHome.unload();
        _oButRestart.unload();

        _oFade.off("click", _oListener);
    };

    this.addEventListener = function(iEvent, cbCompleted, cbOwner) {
        _aCbCompleted[iEvent] = cbCompleted;
        _aCbOwner[iEvent] = cbOwner;
    };

    this.show = function(iTotScore) {
        $(s_oMain).trigger("share_event", iTotScore);

        playSound("win_level", 1, false);

        _oTotScoreText.refreshText(sprintf(TEXT_TOT_SCORE, iTotScore));

        _oBg.alpha = 0;
        _oFade.alpha = 0;
        _oContainerPanel.y = _iStartY;
        _oContainer.visible = true;

        createjs.Tween.get(_oBg).to({
            alpha: 1
        }, 500);
        createjs.Tween.get(_oFade).to({
            alpha: 1
        }, 500);
        createjs.Tween.get(_oContainerPanel).wait(400).to({
            y: CANVAS_HEIGHT / 2
        }, 1000, createjs.Ease.bounceOut);
    };

    this.hide = function() {
        createjs.Tween.get(_oContainerPanel).to({
            y: _iStartY
        }, 1000, createjs.Ease.backIn).call(function() {
            createjs.Tween.get(_oBg).to({
                alpha: 0
            }, 400, createjs.Ease.cubicOut).call(function() {
                _oContainer.visible = false;

                if (_aCbCompleted[_iEventToLaunch]) {
                    _aCbCompleted[_iEventToLaunch].call(_aCbOwner[_iEventToLaunch]);
                }
            })
        });
    };

    this._onHome = function() {
        _iEventToLaunch = ON_BACK_MENU;

        _oThis.hide();
    };

    this._onRestart = function() {
        $(s_oMain).trigger("show_interlevel_ad");

        _iEventToLaunch = ON_RESTART;

        _oThis.hide();
    };

    this._init();
}

CTLText.prototype = {

    constructor: CTLText,

    __autofit: function() {
        if (this._bFitText) {

            var iFontSize = this._iFontSize;

            while (
                this._oText.getBounds().height > (this._iHeight - this._iPaddingV * 2) ||
                this._oText.getBounds().width > (this._iWidth - this._iPaddingH * 2)
            ) {
                iFontSize--;

                this._oText.font = iFontSize + "px " + this._szFont;
                this._oText.lineHeight = Math.round(iFontSize * this._fLineHeightFactor);

                this.__updateY();
                this.__verticalAlign();

                if (iFontSize < 8) {
                    break;
                }
            };

            this._iFontSize = iFontSize;
        }

        //trace(this._oText.text + "-->fontsizedebug:"+iFontSize);
    },

    __verticalAlign: function() {
        if (this._bVerticalAlign) {
            var iCurHeight = this._oText.getBounds().height;
            this._oText.y -= (iCurHeight - this._iHeight) / 2 + (this._iPaddingV);
        }
    },

    __updateY: function() {

        this._oText.y = this._y + this._iPaddingV;

        switch (this._oText.textBaseline) {
            case "middle":
                {
                    this._oText.y += (this._oText.lineHeight / 2) +
                    (this._iFontSize * this._fLineHeightFactor - this._iFontSize);
                }
                break;
        }
    },

    __createText: function(szMsg) {

        if (this._bDebug) {
            this._oDebugShape = new createjs.Shape();
            this._oDebugShape.graphics.beginFill("rgba(255,0,0,0.5)").drawRect(
                this._x, this._y, this._iWidth, this._iHeight);
            this._oContainer.addChild(this._oDebugShape);
        }

        this._oText = new createjs.Text(szMsg, this._iFontSize + "px " + this._szFont, this._szColor);
        this._oText.textBaseline = "middle";
        this._oText.lineHeight = Math.round(this._iFontSize * this._fLineHeightFactor);
        this._oText.textAlign = this._szAlign;


        if (this._bMultiline) {
            this._oText.lineWidth = this._iWidth - (this._iPaddingH * 2);
        } else {
            this._oText.lineWidth = null;
        }

        switch (this._szAlign) {
            case "center":
                {
                    this._oText.x = this._x + (this._iWidth / 2);
                }
                break;
            case "left":
                {
                    this._oText.x = this._x + this._iPaddingH;
                }
                break;
            case "right":
                {
                    this._oText.x = this._x + this._iWidth - this._iPaddingH;
                }
                break;
        }

        this._oContainer.addChild(this._oText);

        this.refreshText(szMsg);

    },

    setVerticalAlign: function(bVerticalAlign) {
        this._bVerticalAlign = bVerticalAlign;
    },

    setOutline: function(iSize) {
        if (this._oText !== null) {
            this._oText.outline = iSize;
        }
    },

    setShadow: function(szColor, iOffsetX, iOffsetY, iBlur) {
        if (this._oText !== null) {
            this._oText.shadow = new createjs.Shadow(szColor, iOffsetX, iOffsetY, iBlur);
        }
    },

    setColor: function(szColor) {
        this._oText.color = szColor;
    },

    setAlpha: function(iAlpha) {
        this._oText.alpha = iAlpha;
    },

    setY: function(iNewY) {
        this._oText.y = iNewY;
        this._y = iNewY;
    },

    removeTweens: function() {
        createjs.Tween.removeTweens(this._oText);
    },

    getText: function() {
        return this._oText;
    },

    getX: function() {
        return this._x;
    },

    getY: function() {
        return this._y;
    },

    getFontSize: function() {
        return this._iFontSize;
    },

    setFontSize: function(iSize) {
        this._iFontSize = iSize;

        this.refreshText(this._szMsg);
    },

    refreshText: function(szMsg) {
        if (szMsg === "") {
            szMsg = " ";
        }
        if (this._oText === null) {
            this.__createText(szMsg);
        }

        this._oText.text = szMsg;
        this._szMsg = szMsg;

        this._oText.font = this._iFontSize + "px " + this._szFont;
        this._oText.lineHeight = Math.round(this._iFontSize * this._fLineHeightFactor);

        this.__autofit();
        this.__updateY();
        this.__verticalAlign();
    }
};

function CTLText(oContainer,
    x, y, iWidth, iHeight,
    iFontSize, szAlign, szColor, szFont, iLineHeightFactor,
    iPaddingH, iPaddingV,
    szMsg,
    bFitText, bVerticalAlign, bMultiline,
    bDebug) {

    this._oContainer = oContainer;

    this._szMsg = szMsg;

    this._x = x;
    this._y = y;
    this._iWidth = iWidth;
    this._iHeight = iHeight;

    this._bMultiline = bMultiline;

    this._iFontSize = iFontSize;
    this._szAlign = szAlign;
    this._szColor = szColor;
    this._szFont = szFont;

    this._iPaddingH = iPaddingH;
    this._iPaddingV = iPaddingV;

    this._bVerticalAlign = bVerticalAlign;
    this._bFitText = bFitText;
    this._bDebug = bDebug;
    //this._bDebug         = true;

    // RESERVED
    this._oDebugShape = null;
    this._fLineHeightFactor = iLineHeightFactor;

    this._oText = null;
    if (szMsg) {
        this.__createText(szMsg);

    }
}

/* global window, exports, define */

! function() {
    'use strict'

    var re = {
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
    }

    function sprintf(key) {
        // `arguments` is not an array, but should be fine for this call
        return sprintf_format(sprintf_parse(key), arguments)
    }

    function vsprintf(fmt, argv) {
        return sprintf.apply(null, [fmt].concat(argv || []))
    }

    function sprintf_format(parse_tree, argv) {
        var cursor = 1,
            tree_length = parse_tree.length,
            arg, output = '',
            i, k, ph, pad, pad_character, pad_length, is_positive, sign
        for (i = 0; i < tree_length; i++) {
            if (typeof parse_tree[i] === 'string') {
                output += parse_tree[i]
            } else if (typeof parse_tree[i] === 'object') {
                ph = parse_tree[i] // convenience purposes only
                if (ph.keys) { // keyword argument
                    arg = argv[cursor]
                    for (k = 0; k < ph.keys.length; k++) {
                        if (arg == undefined) {
                            throw new Error(sprintf('[sprintf] Cannot access property "%s" of undefined value "%s"', ph.keys[k], ph.keys[k - 1]))
                        }
                        arg = arg[ph.keys[k]]
                    }
                } else if (ph.param_no) { // positional argument (explicit)
                    arg = argv[ph.param_no]
                } else { // positional argument (implicit)
                    arg = argv[cursor++]
                }

                if (re.not_type.test(ph.type) && re.not_primitive.test(ph.type) && arg instanceof Function) {
                    arg = arg()
                }

                if (re.numeric_arg.test(ph.type) && (typeof arg !== 'number' && isNaN(arg))) {
                    throw new TypeError(sprintf('[sprintf] expecting number but found %T', arg))
                }

                if (re.number.test(ph.type)) {
                    is_positive = arg >= 0
                }

                switch (ph.type) {
                    case 'b':
                        arg = parseInt(arg, 10).toString(2)
                        break
                    case 'c':
                        arg = String.fromCharCode(parseInt(arg, 10))
                        break
                    case 'd':
                    case 'i':
                        arg = parseInt(arg, 10)
                        break
                    case 'j':
                        arg = JSON.stringify(arg, null, ph.width ? parseInt(ph.width) : 0)
                        break
                    case 'e':
                        arg = ph.precision ? parseFloat(arg).toExponential(ph.precision) : parseFloat(arg).toExponential()
                        break
                    case 'f':
                        arg = ph.precision ? parseFloat(arg).toFixed(ph.precision) : parseFloat(arg)
                        break
                    case 'g':
                        arg = ph.precision ? String(Number(arg.toPrecision(ph.precision))) : parseFloat(arg)
                        break
                    case 'o':
                        arg = (parseInt(arg, 10) >>> 0).toString(8)
                        break
                    case 's':
                        arg = String(arg)
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)
                        break
                    case 't':
                        arg = String(!!arg)
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)
                        break
                    case 'T':
                        arg = Object.prototype.toString.call(arg).slice(8, -1).toLowerCase()
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)
                        break
                    case 'u':
                        arg = parseInt(arg, 10) >>> 0
                        break
                    case 'v':
                        arg = arg.valueOf()
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)
                        break
                    case 'x':
                        arg = (parseInt(arg, 10) >>> 0).toString(16)
                        break
                    case 'X':
                        arg = (parseInt(arg, 10) >>> 0).toString(16).toUpperCase()
                        break
                }
                if (re.json.test(ph.type)) {
                    output += arg
                } else {
                    if (re.number.test(ph.type) && (!is_positive || ph.sign)) {
                        sign = is_positive ? '+' : '-'
                        arg = arg.toString().replace(re.sign, '')
                    } else {
                        sign = ''
                    }
                    pad_character = ph.pad_char ? ph.pad_char === '0' ? '0' : ph.pad_char.charAt(1) : ' '
                    pad_length = ph.width - (sign + arg).length
                    pad = ph.width ? (pad_length > 0 ? pad_character.repeat(pad_length) : '') : ''
                    output += ph.align ? sign + arg + pad : (pad_character === '0' ? sign + pad + arg : pad + sign + arg)
                }
            }
        }
        return output
    }

    var sprintf_cache = Object.create(null)

    function sprintf_parse(fmt) {
        if (sprintf_cache[fmt]) {
            return sprintf_cache[fmt]
        }

        var _fmt = fmt,
            match, parse_tree = [],
            arg_names = 0
        while (_fmt) {
            if ((match = re.text.exec(_fmt)) !== null) {
                parse_tree.push(match[0])
            } else if ((match = re.modulo.exec(_fmt)) !== null) {
                parse_tree.push('%')
            } else if ((match = re.placeholder.exec(_fmt)) !== null) {
                if (match[2]) {
                    arg_names |= 1
                    var field_list = [],
                        replacement_field = match[2],
                        field_match = []
                    if ((field_match = re.key.exec(replacement_field)) !== null) {
                        field_list.push(field_match[1])
                        while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {
                            if ((field_match = re.key_access.exec(replacement_field)) !== null) {
                                field_list.push(field_match[1])
                            } else if ((field_match = re.index_access.exec(replacement_field)) !== null) {
                                field_list.push(field_match[1])
                            } else {
                                throw new SyntaxError('[sprintf] failed to parse named argument key')
                            }
                        }
                    } else {
                        throw new SyntaxError('[sprintf] failed to parse named argument key')
                    }
                    match[2] = field_list
                } else {
                    arg_names |= 2
                }
                if (arg_names === 3) {
                    throw new Error('[sprintf] mixing positional and named placeholders is not (yet) supported')
                }

                parse_tree.push({
                    placeholder: match[0],
                    param_no: match[1],
                    keys: match[2],
                    sign: match[3],
                    pad_char: match[4],
                    align: match[5],
                    width: match[6],
                    precision: match[7],
                    type: match[8]
                })
            } else {
                throw new SyntaxError('[sprintf] unexpected placeholder')
            }
            _fmt = _fmt.substring(match[0].length)
        }
        return sprintf_cache[fmt] = parse_tree
    }

    /**
     * export to either browser or node.js
     */
    /* eslint-disable quote-props */
    if (typeof exports !== 'undefined') {
        exports['sprintf'] = sprintf
        exports['vsprintf'] = vsprintf
    }
    if (typeof window !== 'undefined') {
        window['sprintf'] = sprintf
        window['vsprintf'] = vsprintf

        if (typeof define === 'function' && define['amd']) {
            define(function() {
                return {
                    'sprintf': sprintf,
                    'vsprintf': vsprintf
                }
            })
        }
    }
    /* eslint-enable quote-props */
}(); // eslint-disable-line

function extractHostname(url) {
    var hostname; /*find & remove protocol (http, ftp, etc.) and get hostname*/
    if (url.indexOf('://') > -1) {
        hostname = url.split('/')[2];
    } else {
        hostname = url.split('/')[0];
    } /*find & remove port number*/
    hostname = hostname.split(':')[0]; /*find & remove '?'*/
    hostname = hostname.split('?')[0];
    return hostname;
}

function extractRootDomain(url) {
    var domain = extractHostname(url),
        splitArr = domain.split('.'),
        arrLen = splitArr.length; /*extracting the root domain here*/
    if (arrLen > 2) {
        domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];
    }
    return domain;
} /* return topmost browser window of current window & boolean to say if cross-domain exception occurred*/
const getClosestTop = () => {
    let oFrame = window,
        bException = false;
    try {
        while (oFrame.parent.document !== oFrame.document) {
            if (oFrame.parent.document) {
                oFrame = oFrame.parent;
            } else { /*chrome/ff set exception here*/
                bException = true;
                break;
            }
        }
    } catch (e) { /* Safari needs try/catch so sets exception here*/
        bException = true;
    }
    return {
        'topFrame': oFrame,
        'err': bException
    };
}; /* get best page URL using info from getClosestTop*/
const getBestPageUrl = ({
    err: crossDomainError,
    topFrame
}) => {
    let sBestPageUrl = '';
    if (!crossDomainError) { /* easy case- we can get top frame location*/
        sBestPageUrl = topFrame.location.href;
    } else {
        try {
            try { /* If friendly iframe */
                sBestPageUrl = window.top.location.href;
            } catch (e) { /*If chrome use ancestor origin array */
                let aOrigins = window.location.ancestorOrigins; /*Get last origin which is top-domain (chrome only):*/
                sBestPageUrl = aOrigins[aOrigins.length - 1];
            }
        } catch (e) {
            sBestPageUrl = topFrame.document.referrer;
        }
    }
    return sBestPageUrl;
}; /* To get page URL, simply run following within an iframe on the page:*/
const TOPFRAMEOBJ = getClosestTop();
const PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);

function seekAndDestroy() {
    var szResult = false;
    var szRootDomain = extractRootDomain(PAGE_URL);
    var aList = [String.fromCharCode(99, 111, 100, 101, 116, 104, 105, 115, 108, 97, 98, 46, 99, 111, 109), String.fromCharCode(101, 110, 118, 97, 116, 111, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116)];
    for (var i = 0; i < aList.length; i++) {
        if (aList[i] === szRootDomain) {
            return true;
        }
    }
    return szResult;
};