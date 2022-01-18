// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"j1F46":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "c9b2bbcd379dd93c";
"use strict";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"hD4hw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _swup = require("swup");
var _swupDefault = parcelHelpers.interopDefault(_swup);
var _overlayTheme = require("@swup/overlay-theme");
var _overlayThemeDefault = parcelHelpers.interopDefault(_overlayTheme);
var _cursor = require("./scripts/cursor");
"use strict";
function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}
window.addEventListener('load', (e1)=>{
    /// add class 'touch' on touch devices
    if (isTouchDevice()) document.body.classList.add('touch');
    const classActive = 'active';
    const nav = document.querySelector('nav[role=navigation]');
    /// get page index
    const pathNameMatch = window.location.pathname.match(/\d/);
    /// get currentLink when page load
    const link1 = document.querySelector(`nav[role="navigation"] li:nth-of-type(${pathNameMatch === null ? 1 : pathNameMatch[0]}) a`);
    let boundsLinks = link1.getBoundingClientRect();
    /// get cursor position x at page load
    let xStart1 = boundsLinks.left + boundsLinks.width / 2;
    /// get cursor position y at page load
    let yStart1 = boundsLinks.top + boundsLinks.height / 2;
    /// get link index position in nav at page load
    let index = 0;
    const setIndexLink = (el)=>{
        const li = el.parentNode;
        const ul = li.parentNode;
        return index = Array.prototype.slice.call(ul.childNodes).indexOf(li);
    };
    /// get values of paramsArticles object
    const setParamsParticles = (elNumber)=>Object.values(Object.values(_cursor.paramParticles)[elNumber])
    ;
    /// init tiny cursor and particles
    const setCursors = (xStart, yStart, ...args)=>{
        new _cursor.TinyCursor('#cursor', xStart, yStart, Object.values(_cursor.paramParticles)[index].speed, 0.6, 1000);
        new _cursor.Particles("#particles", xStart, yStart, ...args);
    };
    /// init events at start
    const init = ()=>{
        document.body.classList.remove('preload');
        link1.classList.add(classActive);
        setIndexLink(link1);
        setCursors(xStart1, yStart1, ...setParamsParticles(index));
    };
    init();
    /// init swup event for page transitions
    const swup = new _swupDefault.default({
        plugins: [
            new _overlayThemeDefault.default({
                color: getComputedStyle(document.body).getPropertyValue('--color-third'),
                duration: 1000,
                direction: 'to-right'
            })
        ]
    });
    /// events on link click
    swup.on('clickLink', (e)=>{
        const currentLink = e.delegateTarget;
        const allLinks = nav.querySelectorAll('a');
        for (const link of allLinks)link.classList.remove(classActive);
        currentLink.classList.add(classActive);
        xStart1 = e.clientX;
        yStart1 = e.clientY;
        setIndexLink(currentLink);
    });
    /// events on content replaced
    swup.on('contentReplaced', (e)=>{
        setCursors(xStart1, yStart1, ...setParamsParticles(index));
    });
});

},{"swup":"guAQY","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","@swup/overlay-theme":"5E6bI","./scripts/cursor":"aTDK2"}],"guAQY":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
    }
    return target;
};
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
// modules
var _delegate = require('delegate');
var _delegate2 = _interopRequireDefault(_delegate);
var _Cache = require('./modules/Cache');
var _Cache2 = _interopRequireDefault(_Cache);
var _loadPage = require('./modules/loadPage');
var _loadPage2 = _interopRequireDefault(_loadPage);
var _renderPage = require('./modules/renderPage');
var _renderPage2 = _interopRequireDefault(_renderPage);
var _triggerEvent = require('./modules/triggerEvent');
var _triggerEvent2 = _interopRequireDefault(_triggerEvent);
var _on = require('./modules/on');
var _on2 = _interopRequireDefault(_on);
var _off = require('./modules/off');
var _off2 = _interopRequireDefault(_off);
var _updateTransition = require('./modules/updateTransition');
var _updateTransition2 = _interopRequireDefault(_updateTransition);
var _getAnimationPromises = require('./modules/getAnimationPromises');
var _getAnimationPromises2 = _interopRequireDefault(_getAnimationPromises);
var _getPageData = require('./modules/getPageData');
var _getPageData2 = _interopRequireDefault(_getPageData);
var _plugins = require('./modules/plugins');
var _utils = require('./utils');
var _helpers = require('./helpers');
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
var Swup = function() {
    function Swup1(setOptions) {
        _classCallCheck(this, Swup1);
        // default options
        var defaults = {
            animateHistoryBrowsing: false,
            animationSelector: '[class*="transition-"]',
            linkSelector: 'a[href^="' + window.location.origin + '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',
            cache: true,
            containers: [
                '#swup'
            ],
            requestHeaders: {
                'X-Requested-With': 'swup',
                Accept: 'text/html, application/xhtml+xml'
            },
            plugins: [],
            skipPopStateHandling: function skipPopStateHandling(event) {
                return !(event.state && event.state.source === 'swup');
            }
        };
        // merge options
        var options = _extends({
        }, defaults, setOptions);
        // handler arrays
        this._handlers = {
            animationInDone: [],
            animationInStart: [],
            animationOutDone: [],
            animationOutStart: [],
            animationSkipped: [],
            clickLink: [],
            contentReplaced: [],
            disabled: [],
            enabled: [],
            openPageInNewTab: [],
            pageLoaded: [],
            pageRetrievedFromCache: [],
            pageView: [],
            popState: [],
            samePage: [],
            samePageWithHash: [],
            serverError: [],
            transitionStart: [],
            transitionEnd: [],
            willReplaceContent: []
        };
        // variable for id of element to scroll to after render
        this.scrollToElement = null;
        // variable for promise used for preload, so no new loading of the same page starts while page is loading
        this.preloadPromise = null;
        // variable for save options
        this.options = options;
        // variable for plugins array
        this.plugins = [];
        // variable for current transition object
        this.transition = {
        };
        // variable for keeping event listeners from "delegate"
        this.delegatedListeners = {
        };
        // so we are able to remove the listener
        this.boundPopStateHandler = this.popStateHandler.bind(this);
        // make modules accessible in instance
        this.cache = new _Cache2.default();
        this.cache.swup = this;
        this.loadPage = _loadPage2.default;
        this.renderPage = _renderPage2.default;
        this.triggerEvent = _triggerEvent2.default;
        this.on = _on2.default;
        this.off = _off2.default;
        this.updateTransition = _updateTransition2.default;
        this.getAnimationPromises = _getAnimationPromises2.default;
        this.getPageData = _getPageData2.default;
        this.log = function() {
        }; // here so it can be used by plugins
        this.use = _plugins.use;
        this.unuse = _plugins.unuse;
        this.findPlugin = _plugins.findPlugin;
        // enable swup
        this.enable();
    }
    _createClass(Swup1, [
        {
            key: 'enable',
            value: function enable() {
                var _this = this;
                // check for Promise support
                if (typeof Promise === 'undefined') {
                    console.warn('Promise is not supported');
                    return;
                }
                // add event listeners
                this.delegatedListeners.click = (0, _delegate2.default)(document, this.options.linkSelector, 'click', this.linkClickHandler.bind(this));
                window.addEventListener('popstate', this.boundPopStateHandler);
                // initial save to cache
                var page = (0, _helpers.getDataFromHtml)(document.documentElement.outerHTML, this.options.containers);
                page.url = page.responseURL = (0, _helpers.getCurrentUrl)();
                if (this.options.cache) this.cache.cacheUrl(page);
                // mark swup blocks in html
                (0, _helpers.markSwupElements)(document.documentElement, this.options.containers);
                // mount plugins
                this.options.plugins.forEach(function(plugin) {
                    _this.use(plugin);
                });
                // modify initial history record
                window.history.replaceState(Object.assign({
                }, window.history.state, {
                    url: window.location.href,
                    random: Math.random(),
                    source: 'swup'
                }), document.title, window.location.href);
                // trigger enabled event
                this.triggerEvent('enabled');
                // add swup-enabled class to html tag
                document.documentElement.classList.add('swup-enabled');
                // trigger page view event
                this.triggerEvent('pageView');
            }
        },
        {
            key: 'destroy',
            value: function destroy() {
                var _this2 = this;
                // remove delegated listeners
                this.delegatedListeners.click.destroy();
                // remove popstate listener
                window.removeEventListener('popstate', this.boundPopStateHandler);
                // empty cache
                this.cache.empty();
                // unmount plugins
                this.options.plugins.forEach(function(plugin) {
                    _this2.unuse(plugin);
                });
                // remove swup data atributes from blocks
                (0, _utils.queryAll)('[data-swup]').forEach(function(element) {
                    element.removeAttribute('data-swup');
                });
                // remove handlers
                this.off();
                // trigger disable event
                this.triggerEvent('disabled');
                // remove swup-enabled class from html tag
                document.documentElement.classList.remove('swup-enabled');
            }
        },
        {
            key: 'linkClickHandler',
            value: function linkClickHandler(event) {
                // no control key pressed
                if (!event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) // index of pressed button needs to be checked because Firefox triggers click on all mouse buttons
                {
                    if (event.button === 0) {
                        this.triggerEvent('clickLink', event);
                        event.preventDefault();
                        var link = new _helpers.Link(event.delegateTarget);
                        if (link.getAddress() == (0, _helpers.getCurrentUrl)() || link.getAddress() == '') {
                            // link to the same URL
                            if (link.getHash() != '') {
                                // link to the same URL with hash
                                this.triggerEvent('samePageWithHash', event);
                                var element = document.querySelector(link.getHash());
                                if (element != null) history.replaceState({
                                    url: link.getAddress() + link.getHash(),
                                    random: Math.random(),
                                    source: 'swup'
                                }, document.title, link.getAddress() + link.getHash());
                                else // referenced element not found
                                console.warn('Element for offset not found (' + link.getHash() + ')');
                            } else // link to the same URL without hash
                            this.triggerEvent('samePage', event);
                        } else {
                            // link to different url
                            if (link.getHash() != '') this.scrollToElement = link.getHash();
                            // get custom transition from data
                            var customTransition = event.delegateTarget.getAttribute('data-swup-transition');
                            // load page
                            this.loadPage({
                                url: link.getAddress(),
                                customTransition: customTransition
                            }, false);
                        }
                    }
                } else // open in new tab (do nothing)
                this.triggerEvent('openPageInNewTab', event);
            }
        },
        {
            key: 'popStateHandler',
            value: function popStateHandler(event) {
                if (this.options.skipPopStateHandling(event)) return;
                var link = new _helpers.Link(event.state ? event.state.url : window.location.pathname);
                if (link.getHash() !== '') this.scrollToElement = link.getHash();
                else event.preventDefault();
                this.triggerEvent('popState', event);
                this.loadPage({
                    url: link.getAddress()
                }, event);
            }
        }
    ]);
    return Swup1;
}();
exports.default = Swup;

},{"delegate":"eUlQn","./modules/Cache":"bZeyV","./modules/loadPage":"iwMgg","./modules/renderPage":"dS0ic","./modules/triggerEvent":"9XVux","./modules/on":"e00vO","./modules/off":"gaN3g","./modules/updateTransition":"l5D04","./modules/getAnimationPromises":"18sVJ","./modules/getPageData":"26FF9","./modules/plugins":"5cCwZ","./utils":"kFbzh","./helpers":"iZ7cR"}],"eUlQn":[function(require,module,exports) {
var closest = require('./closest');
/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */ function delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);
    element.addEventListener(type, listenerFn, useCapture);
    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    };
}
/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */ function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);
        if (e.delegateTarget) callback.call(element, e);
    };
}
module.exports = delegate;

},{"./closest":"d0Hgh"}],"d0Hgh":[function(require,module,exports) {
var DOCUMENT_NODE_TYPE = 9;
/**
 * A polyfill for Element.matches()
 */ if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;
    proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
}
/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */ function closest(element, selector) {
    while(element && element.nodeType !== DOCUMENT_NODE_TYPE){
        if (typeof element.matches === 'function' && element.matches(selector)) return element;
        element = element.parentNode;
    }
}
module.exports = closest;

},{}],"bZeyV":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
var Cache = exports.Cache = function() {
    function Cache1() {
        _classCallCheck(this, Cache1);
        this.pages = {
        };
        this.last = null;
    }
    _createClass(Cache1, [
        {
            key: 'cacheUrl',
            value: function cacheUrl(page) {
                if (page.url in this.pages === false) this.pages[page.url] = page;
                this.last = this.pages[page.url];
                this.swup.log('Cache (' + Object.keys(this.pages).length + ')', this.pages);
            }
        },
        {
            key: 'getPage',
            value: function getPage(url) {
                return this.pages[url];
            }
        },
        {
            key: 'getCurrentPage',
            value: function getCurrentPage() {
                return this.getPage(window.location.pathname + window.location.search);
            }
        },
        {
            key: 'exists',
            value: function exists(url) {
                return url in this.pages;
            }
        },
        {
            key: 'empty',
            value: function empty() {
                this.pages = {
                };
                this.last = null;
                this.swup.log('Cache cleared');
            }
        },
        {
            key: 'remove',
            value: function remove(url) {
                delete this.pages[url];
            }
        }
    ]);
    return Cache1;
}();
exports.default = Cache;

},{}],"iwMgg":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
    }
    return target;
};
var _helpers = require('../helpers');
var loadPage = function loadPage(data, popstate) {
    var _this = this;
    // create array for storing animation promises
    var animationPromises = [], xhrPromise = void 0;
    var animateOut = function animateOut() {
        _this.triggerEvent('animationOutStart');
        // handle classes
        document.documentElement.classList.add('is-changing');
        document.documentElement.classList.add('is-leaving');
        document.documentElement.classList.add('is-animating');
        if (popstate) document.documentElement.classList.add('is-popstate');
        document.documentElement.classList.add('to-' + (0, _helpers.classify)(data.url));
        // animation promise stuff
        animationPromises = _this.getAnimationPromises('out');
        Promise.all(animationPromises).then(function() {
            _this.triggerEvent('animationOutDone');
        });
        // create history record if this is not a popstate call
        if (!popstate) {
            // create pop element with or without anchor
            var state = void 0;
            if (_this.scrollToElement != null) state = data.url + _this.scrollToElement;
            else state = data.url;
            (0, _helpers.createHistoryRecord)(state);
        }
    };
    this.triggerEvent('transitionStart', popstate);
    // set transition object
    if (data.customTransition != null) {
        this.updateTransition(window.location.pathname, data.url, data.customTransition);
        document.documentElement.classList.add('to-' + (0, _helpers.classify)(data.customTransition));
    } else this.updateTransition(window.location.pathname, data.url);
    // start/skip animation
    if (!popstate || this.options.animateHistoryBrowsing) animateOut();
    else this.triggerEvent('animationSkipped');
    // start/skip loading of page
    if (this.cache.exists(data.url)) {
        xhrPromise = new Promise(function(resolve) {
            resolve();
        });
        this.triggerEvent('pageRetrievedFromCache');
    } else if (!this.preloadPromise || this.preloadPromise.route != data.url) xhrPromise = new Promise(function(resolve, reject) {
        (0, _helpers.fetch)(_extends({
        }, data, {
            headers: _this.options.requestHeaders
        }), function(response) {
            if (response.status === 500) {
                _this.triggerEvent('serverError');
                reject(data.url);
                return;
            } else {
                // get json data
                var page = _this.getPageData(response);
                if (page != null) page.url = data.url;
                else {
                    reject(data.url);
                    return;
                }
                // render page
                _this.cache.cacheUrl(page);
                _this.triggerEvent('pageLoaded');
            }
            resolve();
        });
    });
    else xhrPromise = this.preloadPromise;
    // when everything is ready, handle the outcome
    Promise.all(animationPromises.concat([
        xhrPromise
    ])).then(function() {
        // render page
        _this.renderPage(_this.cache.getPage(data.url), popstate);
        _this.preloadPromise = null;
    }).catch(function(errorUrl) {
        // rewrite the skipPopStateHandling function to redirect manually when the history.go is processed
        _this.options.skipPopStateHandling = function() {
            window.location = errorUrl;
            return true;
        };
        // go back to the actual page were still at
        window.history.go(-1);
    });
};
exports.default = loadPage;

},{"../helpers":"iZ7cR"}],"iZ7cR":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Link = exports.markSwupElements = exports.getCurrentUrl = exports.transitionEnd = exports.fetch = exports.getDataFromHtml = exports.createHistoryRecord = exports.classify = undefined;
var _classify = require('./classify');
var _classify2 = _interopRequireDefault(_classify);
var _createHistoryRecord = require('./createHistoryRecord');
var _createHistoryRecord2 = _interopRequireDefault(_createHistoryRecord);
var _getDataFromHtml = require('./getDataFromHtml');
var _getDataFromHtml2 = _interopRequireDefault(_getDataFromHtml);
var _fetch = require('./fetch');
var _fetch2 = _interopRequireDefault(_fetch);
var _transitionEnd = require('./transitionEnd');
var _transitionEnd2 = _interopRequireDefault(_transitionEnd);
var _getCurrentUrl = require('./getCurrentUrl');
var _getCurrentUrl2 = _interopRequireDefault(_getCurrentUrl);
var _markSwupElements = require('./markSwupElements');
var _markSwupElements2 = _interopRequireDefault(_markSwupElements);
var _Link = require('./Link');
var _Link2 = _interopRequireDefault(_Link);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var classify = exports.classify = _classify2.default;
var createHistoryRecord = exports.createHistoryRecord = _createHistoryRecord2.default;
var getDataFromHtml = exports.getDataFromHtml = _getDataFromHtml2.default;
var fetch = exports.fetch = _fetch2.default;
var transitionEnd = exports.transitionEnd = _transitionEnd2.default;
var getCurrentUrl = exports.getCurrentUrl = _getCurrentUrl2.default;
var markSwupElements = exports.markSwupElements = _markSwupElements2.default;
var Link = exports.Link = _Link2.default;

},{"./classify":"4Arvc","./createHistoryRecord":"j8zwy","./getDataFromHtml":"d0pKu","./fetch":"lEIbn","./transitionEnd":"8DKO3","./getCurrentUrl":"gzqLy","./markSwupElements":"23yaF","./Link":"PIZZM"}],"4Arvc":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
    value: true
});
var classify = function classify(text) {
    var output = text.toString().toLowerCase().replace(/\s+/g, '-') // Replace spaces with -
    .replace(/\//g, '-') // Replace / with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
    if (output[0] === '/') output = output.splice(1);
    if (output === '') output = 'homepage';
    return output;
};
exports.default = classify;

},{}],"j8zwy":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
    value: true
});
var createHistoryRecord = function createHistoryRecord(url) {
    window.history.pushState({
        url: url || window.location.href.split(window.location.hostname)[1],
        random: Math.random(),
        source: 'swup'
    }, document.getElementsByTagName('title')[0].innerText, url || window.location.href.split(window.location.hostname)[1]);
};
exports.default = createHistoryRecord;

},{}],"d0pKu":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
var _utils = require('../utils');
var getDataFromHtml = function getDataFromHtml(html, containers) {
    var fakeDom = document.createElement('html');
    fakeDom.innerHTML = html;
    var blocks = [];
    var _loop = function _loop(i) {
        if (fakeDom.querySelector(containers[i]) == null) // page in invalid
        return {
            v: null
        };
        else (0, _utils.queryAll)(containers[i]).forEach(function(item, index) {
            (0, _utils.queryAll)(containers[i], fakeDom)[index].setAttribute('data-swup', blocks.length); // marks element with data-swup
            blocks.push((0, _utils.queryAll)(containers[i], fakeDom)[index].outerHTML);
        });
    };
    for(var i = 0; i < containers.length; i++){
        var _ret = _loop(i);
        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
    }
    var json = {
        title: fakeDom.querySelector('title').innerText,
        pageClass: fakeDom.querySelector('body').className,
        originalContent: html,
        blocks: blocks
    };
    // to prevent memory leaks
    fakeDom.innerHTML = '';
    fakeDom = null;
    return json;
};
exports.default = getDataFromHtml;

},{"../utils":"kFbzh"}],"kFbzh":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
    value: true
});
var query = exports.query = function query(selector) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
    if (typeof selector !== 'string') return selector;
    return context.querySelector(selector);
};
var queryAll = exports.queryAll = function queryAll(selector) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
    if (typeof selector !== 'string') return selector;
    return Array.prototype.slice.call(context.querySelectorAll(selector));
};

},{}],"lEIbn":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
    }
    return target;
};
var fetch = function fetch(setOptions) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var defaults = {
        url: window.location.pathname + window.location.search,
        method: 'GET',
        data: null,
        headers: {
        }
    };
    var options = _extends({
    }, defaults, setOptions);
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState === 4) {
            if (request.status !== 500) callback(request);
            else callback(request);
        }
    };
    request.open(options.method, options.url, true);
    Object.keys(options.headers).forEach(function(key) {
        request.setRequestHeader(key, options.headers[key]);
    });
    request.send(options.data);
    return request;
};
exports.default = fetch;

},{}],"8DKO3":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
    value: true
});
var transitionEnd = function transitionEnd() {
    var el = document.createElement('div');
    var transEndEventNames = {
        WebkitTransition: 'webkitTransitionEnd',
        MozTransition: 'transitionend',
        OTransition: 'oTransitionEnd otransitionend',
        transition: 'transitionend'
    };
    for(var name in transEndEventNames){
        if (el.style[name] !== undefined) return transEndEventNames[name];
    }
    return false;
};
exports.default = transitionEnd;

},{}],"gzqLy":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var getCurrentUrl = function getCurrentUrl() {
    return window.location.pathname + window.location.search;
};
exports.default = getCurrentUrl;

},{}],"23yaF":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _utils = require('../utils');
var markSwupElements = function markSwupElements(element, containers) {
    var blocks = 0;
    var _loop = function _loop(i) {
        if (element.querySelector(containers[i]) == null) console.warn('Element ' + containers[i] + ' is not in current page.');
        else (0, _utils.queryAll)(containers[i]).forEach(function(item, index) {
            (0, _utils.queryAll)(containers[i], element)[index].setAttribute('data-swup', blocks);
            blocks++;
        });
    };
    for(var i = 0; i < containers.length; i++)_loop(i);
};
exports.default = markSwupElements;

},{"../utils":"kFbzh"}],"PIZZM":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
var Link = function() {
    function Link1(elementOrUrl) {
        _classCallCheck(this, Link1);
        if (elementOrUrl instanceof Element || elementOrUrl instanceof SVGElement) this.link = elementOrUrl;
        else {
            this.link = document.createElement('a');
            this.link.href = elementOrUrl;
        }
    }
    _createClass(Link1, [
        {
            key: 'getPath',
            value: function getPath() {
                var path = this.link.pathname;
                if (path[0] !== '/') path = '/' + path;
                return path;
            }
        },
        {
            key: 'getAddress',
            value: function getAddress() {
                var path = this.link.pathname + this.link.search;
                if (this.link.getAttribute('xlink:href')) path = this.link.getAttribute('xlink:href');
                if (path[0] !== '/') path = '/' + path;
                return path;
            }
        },
        {
            key: 'getHash',
            value: function getHash() {
                return this.link.hash;
            }
        }
    ]);
    return Link1;
}();
exports.default = Link;

},{}],"dS0ic":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
    }
    return target;
};
var _utils = require('../utils');
var _helpers = require('../helpers');
var renderPage = function renderPage(page, popstate) {
    var _this = this;
    document.documentElement.classList.remove('is-leaving');
    // replace state in case the url was redirected
    var link = new _helpers.Link(page.responseURL);
    if (window.location.pathname !== link.getPath()) {
        window.history.replaceState({
            url: link.getPath(),
            random: Math.random(),
            source: 'swup'
        }, document.title, link.getPath());
        // save new record for redirected url
        this.cache.cacheUrl(_extends({
        }, page, {
            url: link.getPath()
        }));
    }
    // only add for non-popstate transitions
    if (!popstate || this.options.animateHistoryBrowsing) document.documentElement.classList.add('is-rendering');
    this.triggerEvent('willReplaceContent', popstate);
    // replace blocks
    for(var i = 0; i < page.blocks.length; i++)document.body.querySelector('[data-swup="' + i + '"]').outerHTML = page.blocks[i];
    // set title
    document.title = page.title;
    this.triggerEvent('contentReplaced', popstate);
    this.triggerEvent('pageView', popstate);
    // empty cache if it's disabled (because pages could be preloaded and stuff)
    if (!this.options.cache) this.cache.empty();
    // start animation IN
    setTimeout(function() {
        if (!popstate || _this.options.animateHistoryBrowsing) {
            _this.triggerEvent('animationInStart');
            document.documentElement.classList.remove('is-animating');
        }
    }, 10);
    // handle end of animation
    if (!popstate || this.options.animateHistoryBrowsing) {
        var animationPromises = this.getAnimationPromises('in');
        Promise.all(animationPromises).then(function() {
            _this.triggerEvent('animationInDone');
            _this.triggerEvent('transitionEnd', popstate);
            // remove "to-{page}" classes
            document.documentElement.className.split(' ').forEach(function(classItem) {
                if (new RegExp('^to-').test(classItem) || classItem === 'is-changing' || classItem === 'is-rendering' || classItem === 'is-popstate') document.documentElement.classList.remove(classItem);
            });
        });
    } else this.triggerEvent('transitionEnd', popstate);
    // reset scroll-to element
    this.scrollToElement = null;
};
exports.default = renderPage;

},{"../utils":"kFbzh","../helpers":"iZ7cR"}],"9XVux":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
    value: true
});
var triggerEvent = function triggerEvent(eventName, originalEvent) {
    // call saved handlers with "on" method and pass originalEvent object if available
    this._handlers[eventName].forEach(function(handler) {
        try {
            handler(originalEvent);
        } catch (error) {
            console.error(error);
        }
    });
    // trigger event on document with prefix "swup:"
    var event = new CustomEvent('swup:' + eventName, {
        detail: eventName
    });
    document.dispatchEvent(event);
};
exports.default = triggerEvent;

},{}],"e00vO":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var on = function on(event, handler) {
    if (this._handlers[event]) this._handlers[event].push(handler);
    else console.warn("Unsupported event " + event + ".");
};
exports.default = on;

},{}],"gaN3g":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var off = function off(event, handler) {
    var _this = this;
    if (event != null) {
        if (handler != null) {
            if (this._handlers[event] && this._handlers[event].filter(function(savedHandler) {
                return savedHandler === handler;
            }).length) {
                var toRemove = this._handlers[event].filter(function(savedHandler) {
                    return savedHandler === handler;
                })[0];
                var index = this._handlers[event].indexOf(toRemove);
                if (index > -1) this._handlers[event].splice(index, 1);
            } else console.warn("Handler for event '" + event + "' no found.");
        } else this._handlers[event] = [];
    } else Object.keys(this._handlers).forEach(function(keys) {
        _this._handlers[keys] = [];
    });
};
exports.default = off;

},{}],"l5D04":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var updateTransition = function updateTransition(from, to, custom) {
    // transition routes
    this.transition = {
        from: from,
        to: to,
        custom: custom
    };
};
exports.default = updateTransition;

},{}],"18sVJ":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _utils = require('../utils');
var _helpers = require('../helpers');
var getAnimationPromises = function getAnimationPromises() {
    var promises = [];
    var animatedElements = (0, _utils.queryAll)(this.options.animationSelector);
    animatedElements.forEach(function(element) {
        var promise = new Promise(function(resolve) {
            element.addEventListener((0, _helpers.transitionEnd)(), function(event) {
                if (element == event.target) resolve();
            });
        });
        promises.push(promise);
    });
    return promises;
};
exports.default = getAnimationPromises;

},{"../utils":"kFbzh","../helpers":"iZ7cR"}],"26FF9":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _helpers = require('../helpers');
var getPageData = function getPageData(request) {
    // this method can be replaced in case other content than html is expected to be received from server
    // this function should always return {title, pageClass, originalContent, blocks, responseURL}
    // in case page has invalid structure - return null
    var html = request.responseText;
    var pageObject = (0, _helpers.getDataFromHtml)(html, this.options.containers);
    if (pageObject) pageObject.responseURL = request.responseURL ? request.responseURL : window.location.href;
    else {
        console.warn('Received page is invalid.');
        return null;
    }
    return pageObject;
};
exports.default = getPageData;

},{"../helpers":"iZ7cR"}],"5cCwZ":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
    value: true
});
var use = exports.use = function use(plugin) {
    if (!plugin.isSwupPlugin) {
        console.warn('Not swup plugin instance ' + plugin + '.');
        return;
    }
    this.plugins.push(plugin);
    plugin.swup = this;
    if (typeof plugin._beforeMount === 'function') plugin._beforeMount();
    plugin.mount();
    return this.plugins;
};
var unuse = exports.unuse = function unuse(plugin) {
    var pluginReference = void 0;
    if (typeof plugin === 'string') pluginReference = this.plugins.find(function(p) {
        return plugin === p.name;
    });
    else pluginReference = plugin;
    if (!pluginReference) {
        console.warn('No such plugin.');
        return;
    }
    pluginReference.unmount();
    if (typeof pluginReference._afterUnmount === 'function') pluginReference._afterUnmount();
    var index = this.plugins.indexOf(pluginReference);
    this.plugins.splice(index, 1);
    return this.plugins;
};
var findPlugin = exports.findPlugin = function findPlugin(pluginName) {
    return this.plugins.find(function(p) {
        return pluginName === p.name;
    });
};

},{}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"5E6bI":[function(require,module,exports) {
(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();
    else if (typeof define === 'function' && define.amd) define([], factory);
    else if (typeof exports === 'object') exports["SwupOverlayTheme"] = factory();
    else root["SwupOverlayTheme"] = factory();
})(window, function() {
    return(/******/ (function(modules) {
        /******/ // The module cache
        /******/ var installedModules = {
        };
        /******/ /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/ /******/ // Check if module is in cache
            /******/ if (installedModules[moduleId]) /******/ return installedModules[moduleId].exports;
            /******/ // Create a new module (and put it into the cache)
            /******/ var module = installedModules[moduleId] = {
                /******/ i: moduleId,
                /******/ l: false,
                /******/ exports: {
                }
            };
            /******/ /******/ // Execute the module function
            /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/ /******/ // Flag the module as loaded
            /******/ module.l = true;
            /******/ /******/ // Return the exports of the module
            /******/ return module.exports;
        /******/ }
        /******/ /******/ /******/ // expose the modules object (__webpack_modules__)
        /******/ __webpack_require__.m = modules;
        /******/ /******/ // expose the module cache
        /******/ __webpack_require__.c = installedModules;
        /******/ /******/ // define getter function for harmony exports
        /******/ __webpack_require__.d = function(exports, name, getter) {
            /******/ if (!__webpack_require__.o(exports, name)) /******/ Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            });
        /******/ };
        /******/ /******/ // define __esModule on exports
        /******/ __webpack_require__.r = function(exports) {
            /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                value: 'Module'
            });
            /******/ Object.defineProperty(exports, '__esModule', {
                value: true
            });
        /******/ };
        /******/ /******/ // create a fake namespace object
        /******/ // mode & 1: value is a module id, require it
        /******/ // mode & 2: merge all properties of value into the ns
        /******/ // mode & 4: return value when already ns object
        /******/ // mode & 8|1: behave like require
        /******/ __webpack_require__.t = function(value, mode) {
            /******/ if (mode & 1) value = __webpack_require__(value);
            /******/ if (mode & 8) return value;
            /******/ if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
            /******/ var ns = Object.create(null);
            /******/ __webpack_require__.r(ns);
            /******/ Object.defineProperty(ns, 'default', {
                enumerable: true,
                value: value
            });
            /******/ if (mode & 2 && typeof value != 'string') for(var key in value)__webpack_require__.d(ns, key, (function(key) {
                return value[key];
            }).bind(null, key));
            /******/ return ns;
        /******/ };
        /******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/ __webpack_require__.n = function(module) {
            /******/ var getter = module && module.__esModule ? /******/ function getDefault() {
                return module['default'];
            } : /******/ function getModuleExports() {
                return module;
            };
            /******/ __webpack_require__.d(getter, 'a', getter);
            /******/ return getter;
        /******/ };
        /******/ /******/ // Object.prototype.hasOwnProperty.call
        /******/ __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/ /******/ // __webpack_public_path__
        /******/ __webpack_require__.p = "";
        /******/ /******/ /******/ // Load entry module and return exports
        /******/ return __webpack_require__(__webpack_require__.s = 0);
    /******/ })([
        function(module, exports, __webpack_require__) {
            "use strict";
            var _index = __webpack_require__(1);
            var _index2 = _interopRequireDefault(_index);
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            module.exports = _index2.default; // this is here for webpack to expose SwupTheme as window.SwupTheme
        /***/ },
        function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _extends = Object.assign || function(target) {
                for(var i = 1; i < arguments.length; i++){
                    var source = arguments[i];
                    for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
                }
                return target;
            };
            var _createClass = function() {
                function defineProperties(target, props) {
                    for(var i = 0; i < props.length; i++){
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();
            var _theme = __webpack_require__(2);
            var _theme2 = _interopRequireDefault(_theme);
            var _index = __webpack_require__(3);
            var _index2 = _interopRequireDefault(_index);
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }
            function _possibleConstructorReturn(self, call) {
                if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }
            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var OverlayTheme1 = function(_Theme) {
                _inherits(OverlayTheme, _Theme);
                function OverlayTheme(options) {
                    _classCallCheck(this, OverlayTheme);
                    var _this = _possibleConstructorReturn(this, (OverlayTheme.__proto__ || Object.getPrototypeOf(OverlayTheme)).call(this));
                    _this.name = 'OverlayTheme';
                    var defaultOptions = {
                        color: '#2D2E82',
                        duration: 600,
                        direction: 'to-right'
                    };
                    _this.options = _extends({
                    }, defaultOptions, options);
                    return _this;
                }
                _createClass(OverlayTheme, [
                    {
                        key: 'mount',
                        value: function mount() {
                            this.applyStyles(_index2.default);
                            this.applyHTML('\n\t\t\t<div class="swup-transition-overlay"\n\t\t\tstyle="background: ' + this.options.color + '; transition-duration: ' + this.options.duration + 'ms"\n\t\t\tdata-direction="' + this.options.direction + '"></div>\n\t\t');
                        }
                    }
                ]);
                return OverlayTheme;
            }(_theme2.default);
            exports.default = OverlayTheme1;
        /***/ },
        function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _createClass = function() {
                function defineProperties(target, props) {
                    for(var i = 0; i < props.length; i++){
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }
            var Theme1 = function() {
                function Theme() {
                    var _this = this;
                    _classCallCheck(this, Theme);
                    this._addedStyleElements = [];
                    this._addedHTMLContent = [];
                    this._classNameAddedToElements = [];
                    this._addClassNameToElement = function() {
                        _this._classNameAddedToElements.forEach(function(item) {
                            var elements = Array.prototype.slice.call(document.querySelectorAll(item.selector));
                            elements.forEach(function(element) {
                                element.classList.add('swup-transition-' + item.name);
                            });
                        });
                    };
                    this.isSwupPlugin = true;
                }
                _createClass(Theme, [
                    {
                        key: '_beforeMount',
                        value: function _beforeMount() {
                            // save original and replace animationSelector option
                            this._originalAnimationSelectorOption = String(this.swup.options.animationSelector);
                            this.swup.options.animationSelector = '[class*="swup-transition-"]';
                            // add classes after each content replace
                            this.swup.on('contentReplaced', this._addClassNameToElement);
                        }
                    },
                    {
                        key: '_afterUnmount',
                        value: function _afterUnmount() {
                            // reset animationSelector option
                            this.swup.options.animationSelector = this._originalAnimationSelectorOption;
                            // remove added styles
                            this._addedStyleElements.forEach(function(element) {
                                element.outerHTML = '';
                                element = null;
                            });
                            // remove added HTML
                            this._addedHTMLContent.forEach(function(element) {
                                element.outerHTML = '';
                                element = null;
                            });
                            // remove added classnames
                            this._classNameAddedToElements.forEach(function(item) {
                                var elements = Array.prototype.slice.call(document.querySelectorAll(item.selector));
                                elements.forEach(function(element) {
                                    element.className.split(' ').forEach(function(classItem) {
                                        if (new RegExp('^swup-transition-').test(classItem)) element.classList.remove(classItem);
                                    });
                                });
                            });
                            this.swup.off('contentReplaced', this._addClassNameToElement);
                        }
                    },
                    {
                        key: 'mount',
                        value: function mount() {
                        // this is mount method rewritten by class extending
                        // and is executed when swup is enabled with theme
                        }
                    },
                    {
                        key: 'unmount',
                        value: function unmount() {
                        // this is unmount method rewritten by class extending
                        // and is executed when swup with theme is disabled
                        }
                    },
                    {
                        key: 'applyStyles',
                        value: function applyStyles(styles) {
                            var head = document.head;
                            var style = document.createElement('style');
                            style.setAttribute('data-swup-theme', '');
                            style.appendChild(document.createTextNode(styles));
                            this._addedStyleElements.push(style);
                            head.prepend(style);
                        }
                    },
                    {
                        key: 'applyHTML',
                        value: function applyHTML(content) {
                            var element = document.createElement('div');
                            element.innerHTML = content;
                            this._addedHTMLContent.push(element);
                            document.body.appendChild(element);
                        }
                    },
                    {
                        key: 'addClassName',
                        value: function addClassName(selector, name) {
                            // save so it can be later removed
                            this._classNameAddedToElements.push({
                                selector: selector,
                                name: name
                            });
                            // add class the first time
                            this._addClassNameToElement();
                        }
                    }
                ]);
                return Theme;
            }();
            exports.default = Theme1;
        /***/ },
        function(module, exports, __webpack_require__) {
            exports = module.exports = __webpack_require__(4)(false);
            // Module
            exports.push([
                module.i,
                ".swup-transition-overlay {\n  opacity: 0;\n  z-index: 9999;\n  position: fixed;\n  pointer-events: none;\n  transition-property: transform;\n}\nhtml.is-changing .swup-transition-overlay {\n  opacity: 1;\n}\nhtml.is-rendering .swup-transition-overlay[data-direction=\"to-right\"],\nhtml.is-rendering .swup-transition-overlay[data-direction=\"to-left\"],\nhtml.is-rendering .swup-transition-overlay[data-direction=\"to-bottom\"],\nhtml.is-rendering .swup-transition-overlay[data-direction=\"to-top\"] {\n  transition-delay: 0.2s;\n}\n.swup-transition-overlay[data-direction=\"to-right\"],\n.swup-transition-overlay[data-direction=\"to-left\"] {\n  top: 0;\n  bottom: 0;\n  left: -10%;\n  right: -10%;\n  width: 120vw;\n  height: 100vh;\n}\n.swup-transition-overlay[data-direction=\"to-right\"] {\n  transform: translate3d(-120%, 0, 0) skewX(5deg);\n}\nhtml.is-animating .swup-transition-overlay[data-direction=\"to-right\"] {\n  transform: translate3d(0, 0, 0) skewX(5deg);\n}\nhtml.is-rendering .swup-transition-overlay[data-direction=\"to-right\"] {\n  transform: translate3d(120%, 0, 0) skewX(5deg);\n}\n.swup-transition-overlay[data-direction=\"to-left\"] {\n  transform: translate3d(120%, 0, 0) skewX(-5deg);\n}\nhtml.is-animating .swup-transition-overlay[data-direction=\"to-left\"] {\n  transform: translate3d(0, 0, 0) skewX(-5deg);\n}\nhtml.is-rendering .swup-transition-overlay[data-direction=\"to-left\"] {\n  transform: translate3d(-120%, 0, 0) skewX(-5deg);\n}\n.swup-transition-overlay[data-direction=\"to-top\"],\n.swup-transition-overlay[data-direction=\"to-bottom\"] {\n  top: -10%;\n  bottom: -10%;\n  left: 0;\n  right: 0;\n  width: 100vw;\n  height: 120vh;\n}\n.swup-transition-overlay[data-direction=\"to-bottom\"] {\n  transform: translate3d(0, -120%, 0) skewY(5deg);\n}\nhtml.is-animating .swup-transition-overlay[data-direction=\"to-bottom\"] {\n  transform: translate3d(0, 0, 0) skewY(5deg);\n}\nhtml.is-rendering .swup-transition-overlay[data-direction=\"to-bottom\"] {\n  transform: translate3d(0, 120%, 0) skewY(5deg);\n}\n.swup-transition-overlay[data-direction=\"to-top\"] {\n  transform: translate3d(0, 120%, 0) skewY(-5deg);\n}\nhtml.is-animating .swup-transition-overlay[data-direction=\"to-top\"] {\n  transform: translate3d(0, 0, 0) skewY(-5deg);\n}\nhtml.is-rendering .swup-transition-overlay[data-direction=\"to-top\"] {\n  transform: translate3d(0, -120%, 0) skewY(-5deg);\n}\n",
                ""
            ]);
        /***/ },
        function(module, exports, __webpack_require__) {
            "use strict";
            /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/ // css base code, injected by the css-loader
            module.exports = function(useSourceMap) {
                var list = []; // return the list of modules as css string
                list.toString = function toString() {
                    return this.map(function(item) {
                        var content = cssWithMappingToString(item, useSourceMap);
                        if (item[2]) return '@media ' + item[2] + '{' + content + '}';
                        else return content;
                    }).join('');
                }; // import a list of modules into the list
                list.i = function(modules, mediaQuery) {
                    if (typeof modules === 'string') modules = [
                        [
                            null,
                            modules,
                            ''
                        ]
                    ];
                    var alreadyImportedModules = {
                    };
                    for(var i = 0; i < this.length; i++){
                        var id = this[i][0];
                        if (id != null) alreadyImportedModules[id] = true;
                    }
                    for(i = 0; i < modules.length; i++){
                        var item = modules[i]; // skip already imported module
                        // this implementation is not 100% perfect for weird media query combinations
                        // when a module is imported multiple times with different media queries.
                        // I hope this will never occur (Hey this way we have smaller bundles)
                        if (item[0] == null || !alreadyImportedModules[item[0]]) {
                            if (mediaQuery && !item[2]) item[2] = mediaQuery;
                            else if (mediaQuery) item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
                            list.push(item);
                        }
                    }
                };
                return list;
            };
            function cssWithMappingToString(item, useSourceMap) {
                var content = item[1] || '';
                var cssMapping = item[3];
                if (!cssMapping) return content;
                if (useSourceMap && typeof btoa === 'function') {
                    var sourceMapping = toComment(cssMapping);
                    var sourceURLs = cssMapping.sources.map(function(source) {
                        return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
                    });
                    return [
                        content
                    ].concat(sourceURLs).concat([
                        sourceMapping
                    ]).join('\n');
                }
                return [
                    content
                ].join('\n');
            } // Adapted from convert-source-map (MIT)
            function toComment(sourceMap) {
                // eslint-disable-next-line no-undef
                var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
                var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
                return '/*# ' + data + ' */';
            }
        /***/ }
    ]));
});

},{}],"aTDK2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "paramParticles", ()=>paramParticles
);
parcelHelpers.export(exports, "TinyCursor", ()=>TinyCursor
);
parcelHelpers.export(exports, "Particles", ()=>Particles
);
const paramParticles = {
    particle1: {
        speed: 0.1,
        maxSqueeze: 0.9,
        accelerator: 3000,
        color: "green",
        nbrParticles: 5,
        radiusStart: 100,
        radiusDiff: 10,
        opacity: 0.1,
        strokeColor: "black",
        strokeWidth: 4,
        blur: 0,
        mixBlendMode: "unset"
    },
    particle2: {
        speed: 0.2,
        maxSqueeze: 0.16,
        accelerator: 1000,
        color: "red",
        nbrParticles: 10,
        radiusStart: 10,
        radiusDiff: 20,
        opacity: 0.2,
        strokeColor: "gray",
        strokeWidth$: 1,
        blur: 10,
        mixBlendMode: "multiply"
    },
    particle3: {
        speed: 0.3,
        maxSqueeze: 0.16,
        accelerator: 1000,
        color: "purple",
        nbrParticles: 2,
        radiusStart: 200,
        radiusDiff: 30,
        opacity: 0.3,
        strokeColor: "red",
        strokeWidth$: 10,
        blur: 100,
        mixBlendMode: "screen"
    },
    particle4: {
        speed: 0.4,
        maxSqueeze: 0.16,
        accelerator: 1000,
        color: "teal",
        nbrParticles: 6,
        radiusStart: 30,
        radiusDiff: 40,
        opacity: 0.4,
        strokeColor: "green",
        strokeWidth$: 20,
        blur: 200,
        mixBlendMode: "saturation"
    }
};
class Cursors {
    constructor(el, xStart, yStart, speed, maxSqueeze, accelerator){
        this.node = document.querySelector(el);
        this.speed = speed || 1;
        this.xStart = xStart;
        this.yStart = yStart;
        this.mouse = {
            x: this.xStart,
            y: this.yStart
        };
        this.pos = {
            x: this.xStart,
            y: this.yStart
        };
        this.diff = {
            x: null,
            y: null
        };
        this.maxSqueeze = maxSqueeze || 0;
        this.accelerator = accelerator || 1;
        window.addEventListener('mousemove', (e)=>{
            this.updateCoordinates(e);
        });
    }
    updateCoordinates(e) {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
    }
    setParamsDiffs() {
        this.diff.x = this.mouse.x - this.pos.x;
        this.diff.y = this.mouse.y - this.pos.y;
        this.pos.x += this.diff.x * this.speed;
        this.pos.y += this.diff.y * this.speed;
        this.translate = `translate(${this.pos.x + 'px'},${this.pos.y + 'px'})`;
        this.rotate = `rotate(${Math.atan2(this.diff.y, this.diff.x) * 180 / Math.PI}deg)`;
        const squeeze = Math.min(Math.sqrt(Math.pow(this.diff.x, 2) + Math.pow(this.diff.y, 2)) / this.accelerator, this.maxSqueeze);
        this.scale = `scale(${1 + squeeze},${1 - squeeze})`;
    }
}
class TinyCursor extends Cursors {
    constructor(el, xStart, yStart, speed, maxSqueeze, accelerator){
        super(el, xStart, yStart, speed, maxSqueeze, accelerator);
        this.loop();
    }
    loop() {
        this.setParamsDiffs();
        this.node.style.transform = this.translate + this.rotate + this.scale;
        requestAnimationFrame(()=>this.loop()
        );
    }
}
class Particles extends Cursors {
    constructor(el, xStart, yStart, speed, maxSqueeze, accelerator, color, nbrParticles, radiusStart, radiusDiff, opacity, strokeColor, strokeWidth, blur, mixBlendMode){
        super(el, xStart, yStart, speed, maxSqueeze, accelerator);
        this.nbrParticles = nbrParticles;
        this.blur = blur;
        this.color = color;
        this.radiusStart = radiusStart;
        this.radiusDiff = radiusDiff;
        this.opacity = opacity;
        this.strokeColor = strokeColor;
        this.strokeWidth = strokeWidth;
        this.mixBlendMode = mixBlendMode;
        this.drawCircles();
        this.loop();
        window.addEventListener('resize', (e)=>{
            this.drawCircles();
        });
    }
    loop() {
        this.setParamsDiffs();
        this.translate = this.translate.replaceAll('px', '').replace(',', ' ');
        this.rotate = this.rotate.replace('deg', '');
        for (const circle of this.circles)circle.setAttribute('transform', this.translate + this.rotate + this.scale);
        requestAnimationFrame(()=>this.loop()
        );
    }
    drawCircles() {
        const idBlurParticles = "blur-particles";
        const exceedSize = this.blur * 3;
        const radiusEach = (i)=>Math.abs(this.radiusStart - i * this.radiusDiff)
        ;
        this.node.innerHTML = `<svg width=${window.innerWidth + exceedSize} height=${window.innerHeight + exceedSize}>
      <defs>
        <filter id=${idBlurParticles} x="-100%" y="-100%" width="${window.innerWidth / 2}%" height="${window.innerWidth / 2}%">
          <feGaussianBlur in="SourceGraphic" stdDeviation=${this.blur}></feGaussianBlur>
        </filter>
      </defs>
        <g filter="url(#${idBlurParticles})">
          ${Array(this.nbrParticles).fill().map((el, i)=>`<circle cx="0" cy="0" r=${radiusEach(i)} fill=${this.color} fill-opacity=${this.opacity * 100}% stroke=${this.strokeColor} stroke-width=${this.strokeWidth} style="mix-blend-mode:${this.mixBlendMode}"></circle> `
        ).join('')}
        </g>
      </svg>`;
        this.circles = this.node.querySelectorAll('circle');
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["j1F46","hD4hw"], "hD4hw", "parcelRequirecea7")

//# sourceMappingURL=index.379dd93c.js.map
