// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/common/loader.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __spreadArrays = this && this.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
;
var loadFunctions = {
  'text': function text(url) {
    return __awaiter(void 0, void 0, Promise, function () {
      var response, data;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch(url)];

          case 1:
            response = _a.sent();
            return [4
            /*yield*/
            , response.text()];

          case 2:
            data = _a.sent();
            return [2
            /*return*/
            , data];
        }
      });
    });
  },
  'json': function json(url) {
    return __awaiter(void 0, void 0, Promise, function () {
      var response, data;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch(url)];

          case 1:
            response = _a.sent();
            return [4
            /*yield*/
            , response.json()];

          case 2:
            data = _a.sent();
            return [2
            /*return*/
            , data];
        }
      });
    });
  },
  'image': function image(url) {
    return __awaiter(void 0, void 0, Promise, function () {
      return __generator(this, function (_a) {
        return [2
        /*return*/
        , new Promise(function (resolve, reject) {
          var image = new Image();

          try {
            if (new URL(url).origin !== window.origin) image.crossOrigin = "";
          } catch (_a) {}

          image.onload = function () {
            return resolve(image);
          };

          image.onerror = reject;
          image.src = url;
        })];
      });
    });
  }
}; // This is helper class to fetch resources from the webserver
// Unlike C++, we can't block the main thread till files are read, so we use promises to notify the Game Class when the resources are ready
// This class is a work in progress so expect it to be enhanced in future labs

var Loader =
/** @class */
function () {
  function Loader() {
    this.resources = {};
    this.promises = [];
  }

  Loader.prototype.load = function (resources) {
    var _this = this;

    var _loop_1 = function _loop_1(name) {
      var resource = resources[name];
      var promise = loadFunctions[resource.type](resource.url).then(function (data) {
        _this.resources[name] = data;
        if (resource.success) resource.success(name, data, resource, _this);
      }).catch(function (reason) {
        console.error("Failed to load " + name + ": " + reason);
        if (resource.failure) resource.failure(name, resource, _this);
      });
      this_1.promises.push(promise);
    };

    var this_1 = this;

    for (var name in resources) {
      _loop_1(name);
    }
  };

  Loader.prototype.unload = function () {
    var resources = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      resources[_i] = arguments[_i];
    }

    for (var _a = 0, resources_1 = resources; _a < resources_1.length; _a++) {
      var name = resources_1[_a];
      delete this.resources[name];
    }
  };

  Loader.prototype.clear = function () {
    for (var name in this.resources) {
      delete this.resources[name];
    }
  };

  Loader.prototype.wait = function () {
    return __awaiter(this, void 0, void 0, function () {
      var awaited;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!(this.promises.length > 0)) return [3
            /*break*/
            , 2];
            awaited = __spreadArrays(this.promises);
            this.promises.splice(0, this.promises.length);
            return [4
            /*yield*/
            , Promise.all(awaited)];

          case 1:
            _a.sent();

            return [3
            /*break*/
            , 0];

          case 2:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  return Loader;
}();

exports.default = Loader;
},{}],"node_modules/ts-key-enum/dist/js/Key.enum.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
  * An enum that includes all non-printable string values one can expect from $event.key.
  * For example, this enum includes values like "CapsLock", "Backspace", and "AudioVolumeMute",
  * but does not include values like "a", "A", "#", "é", or "¿".
  * Auto generated from MDN: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values#Speech_recognition_keys
  */
var Key;
(function (Key) {
    /** The user agent wasn't able to map the event's virtual keycode to a specific key value. This can happen due to hardware or software constraints, or because of constraints around the platform on which the user agent is running. */
    Key["Unidentified"] = "Unidentified";
    /** The Alt (Alternative) key. */
    Key["Alt"] = "Alt";
    /** The AltGr or AltGraph (Alternate Graphics) key. Enables the ISO Level 3 shift modifier (where Shift is the level 2 modifier). */
    Key["AltGraph"] = "AltGraph";
    /** The Caps Lock key. Toggles the capital character lock on and off for subsequent input. */
    Key["CapsLock"] = "CapsLock";
    /** The Control, Ctrl, or Ctl key. Allows typing control characters. */
    Key["Control"] = "Control";
    /** The Fn (Function modifier) key. Used to allow generating function key (F1-F15, for instance) characters on keyboards without a dedicated function key area. Often handled in hardware so that events aren't generated for this key. */
    Key["Fn"] = "Fn";
    /** The FnLock or F-Lock (Function Lock) key.Toggles the function key mode described by "Fn" on and off. Often handled in hardware so that events aren't generated for this key. */
    Key["FnLock"] = "FnLock";
    /** The Hyper key. */
    Key["Hyper"] = "Hyper";
    /** The Meta key. Allows issuing special command inputs. This is the Windows logo key, or the Command or ⌘ key on Mac keyboards. */
    Key["Meta"] = "Meta";
    /** The NumLock (Number Lock) key. Toggles the numeric keypad between number entry some other mode (often directional arrows). */
    Key["NumLock"] = "NumLock";
    /** The Scroll Lock key. Toggles beteen scrolling and cursor movement modes. */
    Key["ScrollLock"] = "ScrollLock";
    /** The Shift key. Modifies keystrokes to allow typing upper (or other) case letters, and to support typing punctuation and other special characters. */
    Key["Shift"] = "Shift";
    /** The Super key. */
    Key["Super"] = "Super";
    /** The Symbol modifier key (found on certain virtual keyboards). */
    Key["Symbol"] = "Symbol";
    /** The Symbol Lock key. */
    Key["SymbolLock"] = "SymbolLock";
    /** The Enter or ↵ key (sometimes labeled Return). */
    Key["Enter"] = "Enter";
    /** The Horizontal Tab key, Tab. */
    Key["Tab"] = "Tab";
    /** The down arrow key. */
    Key["ArrowDown"] = "ArrowDown";
    /** The left arrow key. */
    Key["ArrowLeft"] = "ArrowLeft";
    /** The right arrow key. */
    Key["ArrowRight"] = "ArrowRight";
    /** The up arrow key. */
    Key["ArrowUp"] = "ArrowUp";
    /** The End key. Moves to the end of content. */
    Key["End"] = "End";
    /** The Home key. Moves to the start of content. */
    Key["Home"] = "Home";
    /** The Page Down (or PgDn) key. Scrolls down or displays the next page of content. */
    Key["PageDown"] = "PageDown";
    /** The Page Up (or PgUp) key. Scrolls up or displays the previous page of content. */
    Key["PageUp"] = "PageUp";
    /** The Backspace key. This key is labeled Delete on Mac keyboards. */
    Key["Backspace"] = "Backspace";
    /** The Clear key. Removes the currently selected input. */
    Key["Clear"] = "Clear";
    /** The Copy key (on certain extended keyboards). */
    Key["Copy"] = "Copy";
    /** The Cursor Select key, CrSel. */
    Key["CrSel"] = "CrSel";
    /** The Cut key (on certain extended keyboards). */
    Key["Cut"] = "Cut";
    /** The Delete key, Del. */
    Key["Delete"] = "Delete";
    /** Erase to End of Field. Deletes all characters from the current cursor position to the end of the current field. */
    Key["EraseEof"] = "EraseEof";
    /** The ExSel (Extend Selection) key. */
    Key["ExSel"] = "ExSel";
    /** The Insert key, Ins. Toggles  between inserting and overwriting text. */
    Key["Insert"] = "Insert";
    /** Paste from the clipboard. */
    Key["Paste"] = "Paste";
    /** Redo the last action. */
    Key["Redo"] = "Redo";
    /** Undo the last action. */
    Key["Undo"] = "Undo";
    /** The Accept, Commit, or OK key or button. Accepts the currently selected option or input method sequence conversion. */
    Key["Accept"] = "Accept";
    /** The Again key. Redoes or repeats a previous action. */
    Key["Again"] = "Again";
    /** The Attn (Attention) key. */
    Key["Attn"] = "Attn";
    /** The Cancel key. */
    Key["Cancel"] = "Cancel";
    /** Shows the context menu. Typically found between the Windows (or OS) key and the Control key on the right side of the keyboard. */
    Key["ContextMenu"] = "ContextMenu";
    /** The Esc (Escape) key. Typically used as an exit, cancel, or "escape this operation" button. Historically, the Escape character was used to signal the start of a special control sequence of characters called an "escape sequence." */
    Key["Escape"] = "Escape";
    /** The Execute key. */
    Key["Execute"] = "Execute";
    /** The Find key. Opens an interface (typically a dialog box) for performing a find/search operation. */
    Key["Find"] = "Find";
    /** The Finish key. */
    Key["Finish"] = "Finish";
    /** The Help key. Opens or toggles the display of help information. */
    Key["Help"] = "Help";
    /** The Pause key. Pauses the current application or state, if applicable.
    This shouldn't be confused with the "MediaPause" key value, which is used for media controllers, rather than to control applications and processes.
    */
    Key["Pause"] = "Pause";
    /** The Play key. Resumes a previously paused application, if applicable.
    This shouldn't be confused with the "MediaPlay" key value, which is used for media controllers, rather than to control applications and processes.
    */
    Key["Play"] = "Play";
    /** The Props (Properties) key. */
    Key["Props"] = "Props";
    /** The Select key. */
    Key["Select"] = "Select";
    /** The ZoomIn key. */
    Key["ZoomIn"] = "ZoomIn";
    /** The ZoomOut key. */
    Key["ZoomOut"] = "ZoomOut";
    /** The Brightness Down key. Typically used to reduce the brightness of the display. */
    Key["BrightnessDown"] = "BrightnessDown";
    /** The Brightness Up key. Typically increases the brightness of the display. */
    Key["BrightnessUp"] = "BrightnessUp";
    /** The Eject key. Ejects removable media (or toggles an optical storage device tray open and closed). */
    Key["Eject"] = "Eject";
    /** The LogOff key. */
    Key["LogOff"] = "LogOff";
    /** The Power button or key, to toggle power on and off.
    Not all systems pass this key through to to the user agent.
    */
    Key["Power"] = "Power";
    /** The PowerOff or PowerDown key. Shuts off the system. */
    Key["PowerOff"] = "PowerOff";
    /** The PrintScreen or PrtScr key. Sometimes SnapShot. Captures the screen and prints it or saves it to disk. */
    Key["PrintScreen"] = "PrintScreen";
    /** The Hibernate key. This saves the state of the computer to disk and then shuts down; the computer can be returned to its previous state by restoring the saved state information. */
    Key["Hibernate"] = "Hibernate";
    /** The Standby key; also known as Suspend or Sleep. This turns off the display and puts the computer in a low power consumption mode, without completely powering off. */
    Key["Standby"] = "Standby";
    /** The WakeUp key; used to wake the computer from the hibernation or standby modes. */
    Key["WakeUp"] = "WakeUp";
    /** The All Candidates key, which starts multi-candidate mode, in which multiple candidates are displayed for the ongoing input. */
    Key["AllCandidates"] = "AllCandidates";
    /** The Alphanumeric key. */
    Key["Alphanumeric"] = "Alphanumeric";
    /** The Code Input key, which enables code input mode, which lets the user enter characters by typing their code points (their Unicode character numbers, typically). */
    Key["CodeInput"] = "CodeInput";
    /** The Compose key. */
    Key["Compose"] = "Compose";
    /** The Convert key, which instructs the IME to convert the current input method sequence into the resulting character. */
    Key["Convert"] = "Convert";
    /** A dead "combining" key; that is, a key which is used in tandem with other keys to generate accented and other modified characters. If pressed by itself, it doesn't generate a character. If you wish to identify which specific dead key was pressed (in cases where more than one exists), you can do so by examining the KeyboardEvent's associated compositionupdate event's  data property. */
    Key["Dead"] = "Dead";
    /** The Final (Final Mode) key is used on some Asian keyboards to enter final mode when using IMEs. */
    Key["FinalMode"] = "FinalMode";
    /** Switches to the first character group on an ISO/IEC 9995 keyboard. Each key may have multiple groups of characters, each in its own column. Pressing this key instructs the device to interpret keypresses as coming from the first column on subsequent keystrokes. */
    Key["GroupFirst"] = "GroupFirst";
    /** Switches to the last character group on an ISO/IEC 9995 keyboard. */
    Key["GroupLast"] = "GroupLast";
    /** Switches to the next character group on an ISO/IEC 9995 keyboard. */
    Key["GroupNext"] = "GroupNext";
    /** Switches to the previous character group on an ISO/IEC 9995 keyboard. */
    Key["GroupPrevious"] = "GroupPrevious";
    /** The Mode Change key. Toggles or cycles among input modes of IMEs. */
    Key["ModeChange"] = "ModeChange";
    /** The Next Candidate function key. Selects the next possible match for the ongoing input. */
    Key["NextCandidate"] = "NextCandidate";
    /** The NonConvert ("Don't convert") key. This accepts the current input method sequence without running conversion when using an IME. */
    Key["NonConvert"] = "NonConvert";
    /** The Previous Candidate key. Selects the previous possible match for the ongoing input. */
    Key["PreviousCandidate"] = "PreviousCandidate";
    /** The Process key. Instructs the IME to process the conversion. */
    Key["Process"] = "Process";
    /** The Single Candidate key. Enables single candidate mode (as opposed to multi-candidate mode); in this mode, only one candidate is displayed at a time. */
    Key["SingleCandidate"] = "SingleCandidate";
    /** The Hangul (Korean character set) mode key, which toggles between Hangul and English entry modes. */
    Key["HangulMode"] = "HangulMode";
    /** Selects the Hanja mode, for converting Hangul characters to the more specific Hanja characters. */
    Key["HanjaMode"] = "HanjaMode";
    /** Selects the Junja mode, in which Korean is represented using single-byte Latin characters. */
    Key["JunjaMode"] = "JunjaMode";
    /** The Eisu key. This key's purpose is defined by the IME, but may be used to close the IME. */
    Key["Eisu"] = "Eisu";
    /** The Hankaku (half-width characters) key. */
    Key["Hankaku"] = "Hankaku";
    /** The Hiragana key; selects Kana characters mode. */
    Key["Hiragana"] = "Hiragana";
    /** Toggles between the Hiragana and Katakana writing systems. */
    Key["HiraganaKatakana"] = "HiraganaKatakana";
    /** The Kana Mode (Kana Lock) key. */
    Key["KanaMode"] = "KanaMode";
    /** The Kanji Mode key. Enables entering Japanese text using the ideographic characters of Chinese origin. */
    Key["KanjiMode"] = "KanjiMode";
    /** The Katakana key. */
    Key["Katakana"] = "Katakana";
    /** The Romaji key; selects the Roman character set. */
    Key["Romaji"] = "Romaji";
    /** The Zenkaku (full width) characters key. */
    Key["Zenkaku"] = "Zenkaku";
    /** The Zenkaku/Hankaku (full width/half width) toggle key. */
    Key["ZenkakuHanaku"] = "ZenkakuHanaku";
    /** The first general-purpose function key, F1. */
    Key["F1"] = "F1";
    /** The F2 key. */
    Key["F2"] = "F2";
    /** The F3 key. */
    Key["F3"] = "F3";
    /** The F4 key. */
    Key["F4"] = "F4";
    /** The F5 key. */
    Key["F5"] = "F5";
    /** The F6 key. */
    Key["F6"] = "F6";
    /** The F7 key. */
    Key["F7"] = "F7";
    /** The F8 key. */
    Key["F8"] = "F8";
    /** The F9 key. */
    Key["F9"] = "F9";
    /** The F10 key. */
    Key["F10"] = "F10";
    /** The F11 key. */
    Key["F11"] = "F11";
    /** The F12 key. */
    Key["F12"] = "F12";
    /** The F13 key. */
    Key["F13"] = "F13";
    /** The F14 key. */
    Key["F14"] = "F14";
    /** The F15 key. */
    Key["F15"] = "F15";
    /** The F16 key. */
    Key["F16"] = "F16";
    /** The F17 key. */
    Key["F17"] = "F17";
    /** The F18 key. */
    Key["F18"] = "F18";
    /** The F19 key. */
    Key["F19"] = "F19";
    /** The F20 key. */
    Key["F20"] = "F20";
    /** The first general-purpose virtual function key. */
    Key["Soft1"] = "Soft1";
    /** The second general-purpose virtual function key. */
    Key["Soft2"] = "Soft2";
    /** The third general-purpose virtual function key. */
    Key["Soft3"] = "Soft3";
    /** The fourth general-purpose virtual function key. */
    Key["Soft4"] = "Soft4";
    /** Presents a list of recently-used applications which lets the user change apps quickly. */
    Key["AppSwitch"] = "AppSwitch";
    /** The Call key; dials the number which has been entered. */
    Key["Call"] = "Call";
    /** The Camera key; activates the camera. */
    Key["Camera"] = "Camera";
    /** The Focus key; focuses the camera. */
    Key["CameraFocus"] = "CameraFocus";
    /** The End Call or Hang Up button. */
    Key["EndCall"] = "EndCall";
    /** The Back button. */
    Key["GoBack"] = "GoBack";
    /** The Home button, which takes the user to the phone's main screen (usually an application launcher). */
    Key["GoHome"] = "GoHome";
    /** The Headset Hook key. This is typically actually a button on the headset which is used to hang up calls and play or pause media. */
    Key["HeadsetHook"] = "HeadsetHook";
    /** The Redial button, which redials the last-called number. */
    Key["LastNumberRedial"] = "LastNumberRedial";
    /** The Notification key. */
    Key["Notification"] = "Notification";
    /** A button which cycles among the notification modes: silent, vibrate, ring, and so forth. */
    Key["MannerMode"] = "MannerMode";
    /** The Voice Dial key. Initiates voice dialing. */
    Key["VoiceDial"] = "VoiceDial";
    /** Switches to the previous channel. */
    Key["ChannelDown"] = "ChannelDown";
    /** Switches to the next channel. */
    Key["ChannelUp"] = "ChannelUp";
    /** Starts, continues, or increases the speed of fast forwarding the media. */
    Key["MediaFastForward"] = "MediaFastForward";
    /** Pauses the currently playing media. Some older applications use simply "Pause" but this is not correct. */
    Key["MediaPause"] = "MediaPause";
    /** Starts or continues playing media at normal speed, if not already doing so. Has no effect otherwise. */
    Key["MediaPlay"] = "MediaPlay";
    /** Toggles between playing and pausing the current media. */
    Key["MediaPlayPause"] = "MediaPlayPause";
    /** Starts or resumes recording media. */
    Key["MediaRecord"] = "MediaRecord";
    /** Starts, continues, or increases the speed of rewinding the media. */
    Key["MediaRewind"] = "MediaRewind";
    /** Stops the current media activity (such as playing, recording, pausing, forwarding, or rewinding). Has no effect if the media is currently stopped already. */
    Key["MediaStop"] = "MediaStop";
    /** Seeks to the next media or program track. */
    Key["MediaTrackNext"] = "MediaTrackNext";
    /** Seeks to the previous media or program track. */
    Key["MediaTrackPrevious"] = "MediaTrackPrevious";
    /** Adjusts audio balance toward the left. */
    Key["AudioBalanceLeft"] = "AudioBalanceLeft";
    /** Adjusts audio balance twoard the right. */
    Key["AudioBalanceRight"] = "AudioBalanceRight";
    /** Decreases the amount of bass. */
    Key["AudioBassDown"] = "AudioBassDown";
    /** Reduces bass boosting or cycles downward through bass boost modes or states. */
    Key["AudioBassBoostDown"] = "AudioBassBoostDown";
    /** Toggles bass boosting on and off. */
    Key["AudioBassBoostToggle"] = "AudioBassBoostToggle";
    /** Increases the amoung of bass boosting, or cycles upward through a set of bass boost modes or states. */
    Key["AudioBassBoostUp"] = "AudioBassBoostUp";
    /** Increases the amount of bass. */
    Key["AudioBassUp"] = "AudioBassUp";
    /** Adjusts the audio fader toward the front. */
    Key["AudioFaderFront"] = "AudioFaderFront";
    /** Adjustts the audio fader toward the rear. */
    Key["AudioFaderRear"] = "AudioFaderRear";
    /** Selects the next available surround sound mode. */
    Key["AudioSurroundModeNext"] = "AudioSurroundModeNext";
    /** Decreases the amount of treble. */
    Key["AudioTrebleDown"] = "AudioTrebleDown";
    /** Increases the amount of treble. */
    Key["AudioTrebleUp"] = "AudioTrebleUp";
    /** Decreases the audio volume. */
    Key["AudioVolumeDown"] = "AudioVolumeDown";
    /** Mutes the audio. */
    Key["AudioVolumeMute"] = "AudioVolumeMute";
    /** Increases the audio volume. */
    Key["AudioVolumeUp"] = "AudioVolumeUp";
    /** Toggles the microphone on and off. */
    Key["MicrophoneToggle"] = "MicrophoneToggle";
    /** Decreases the microphone's input volume. */
    Key["MicrophoneVolumeDown"] = "MicrophoneVolumeDown";
    /** Mutes the microphone input. */
    Key["MicrophoneVolumeMute"] = "MicrophoneVolumeMute";
    /** Increases the microphone's input volume. */
    Key["MicrophoneVolumeUp"] = "MicrophoneVolumeUp";
    /** Switches into TV viewing mode. */
    Key["TV"] = "TV";
    /** Toggles 3D TV mode on and off. */
    Key["TV3DMode"] = "TV3DMode";
    /** Toggles between antenna and cable inputs. */
    Key["TVAntennaCable"] = "TVAntennaCable";
    /** Toggles audio description mode on and off. */
    Key["TVAudioDescription"] = "TVAudioDescription";
    /** Decreases trhe audio description's mixing volume; reduces the volume of the audio descriptions relative to the program sound. */
    Key["TVAudioDescriptionMixDown"] = "TVAudioDescriptionMixDown";
    /** Increases the audio description's mixing volume; increases the volume of the audio descriptions relative to the program sound. */
    Key["TVAudioDescriptionMixUp"] = "TVAudioDescriptionMixUp";
    /** Displays or hides the media contents available for playback (this may be a channel guide showing the currently airing programs, or a list of media files to play). */
    Key["TVContentsMenu"] = "TVContentsMenu";
    /** Displays or hides the TV's data service menu. */
    Key["TVDataService"] = "TVDataService";
    /** Cycles the input mode on an external TV. */
    Key["TVInput"] = "TVInput";
    /** Switches to the input "Component 1." */
    Key["TVInputComponent1"] = "TVInputComponent1";
    /** Switches to the input "Component 2." */
    Key["TVInputComponent2"] = "TVInputComponent2";
    /** Switches to the input "Composite 1." */
    Key["TVInputComposite1"] = "TVInputComposite1";
    /** Switches to the input "Composite 2." */
    Key["TVInputComposite2"] = "TVInputComposite2";
    /** Switches to the input "HDMI 1." */
    Key["TVInputHDMI1"] = "TVInputHDMI1";
    /** Switches to the input "HDMI 2." */
    Key["TVInputHDMI2"] = "TVInputHDMI2";
    /** Switches to the input "HDMI 3." */
    Key["TVInputHDMI3"] = "TVInputHDMI3";
    /** Switches to the input "HDMI 4." */
    Key["TVInputHDMI4"] = "TVInputHDMI4";
    /** Switches to the input "VGA 1." */
    Key["TVInputVGA1"] = "TVInputVGA1";
    /** The Media Context menu key. */
    Key["TVMediaContext"] = "TVMediaContext";
    /** Toggle the TV's network connection on and off. */
    Key["TVNetwork"] = "TVNetwork";
    /** Put the TV into number entry mode. */
    Key["TVNumberEntry"] = "TVNumberEntry";
    /** The device's power button. */
    Key["TVPower"] = "TVPower";
    /** Radio button. */
    Key["TVRadioService"] = "TVRadioService";
    /** Satellite button. */
    Key["TVSatellite"] = "TVSatellite";
    /** Broadcast Satellite button. */
    Key["TVSatelliteBS"] = "TVSatelliteBS";
    /** Communication Satellite button. */
    Key["TVSatelliteCS"] = "TVSatelliteCS";
    /** Toggles among available satellites. */
    Key["TVSatelliteToggle"] = "TVSatelliteToggle";
    /** Selects analog terrestrial television service (analog cable or antenna reception). */
    Key["TVTerrestrialAnalog"] = "TVTerrestrialAnalog";
    /** Selects digital terrestrial television service (digital cable or antenna receiption). */
    Key["TVTerrestrialDigital"] = "TVTerrestrialDigital";
    /** Timer programming button. */
    Key["TVTimer"] = "TVTimer";
    /** Changes the input mode on an external audio/video receiver (AVR) unit. */
    Key["AVRInput"] = "AVRInput";
    /** Toggles the power on an external AVR unit. */
    Key["AVRPower"] = "AVRPower";
    /** General-purpose media function key, color-coded red; this has index 0 among the colored keys. */
    Key["ColorF0Red"] = "ColorF0Red";
    /** General-purpose media funciton key, color-coded green; this has index 1 among the colored keys. */
    Key["ColorF1Green"] = "ColorF1Green";
    /** General-purpose media funciton key, color-coded yellow; this has index 2 among the colored keys. */
    Key["ColorF2Yellow"] = "ColorF2Yellow";
    /** General-purpose media funciton key, color-coded blue; this has index 3 among the colored keys. */
    Key["ColorF3Blue"] = "ColorF3Blue";
    /** General-purpose media funciton key, color-coded grey; this has index 4 among the colored keys. */
    Key["ColorF4Grey"] = "ColorF4Grey";
    /** General-purpose media funciton key, color-coded brown; this has index 5 among the colored keys. */
    Key["ColorF5Brown"] = "ColorF5Brown";
    /** Toggles closed captioning on and off. */
    Key["ClosedCaptionToggle"] = "ClosedCaptionToggle";
    /** Adjusts the brightness of the device by toggling between two brightness levels or by cycling among multiple brightness levels. */
    Key["Dimmer"] = "Dimmer";
    /** Cycles among video sources. */
    Key["DisplaySwap"] = "DisplaySwap";
    /** Switches the input source to the Digital Video Recorder (DVR). */
    Key["DVR"] = "DVR";
    /** The Exit button, which exits the curreent application or menu. */
    Key["Exit"] = "Exit";
    /** Clears the program or content stored in the first favorites list slot. */
    Key["FavoriteClear0"] = "FavoriteClear0";
    /** Clears the program or content stored in the second favorites list slot. */
    Key["FavoriteClear1"] = "FavoriteClear1";
    /** Clears the program or content stored in the third favorites list slot. */
    Key["FavoriteClear2"] = "FavoriteClear2";
    /** Clears the program or content stored in the fourth favorites list slot. */
    Key["FavoriteClear3"] = "FavoriteClear3";
    /** Selects (recalls) the program or content stored in the first favorites list slot. */
    Key["FavoriteRecall0"] = "FavoriteRecall0";
    /** Selects (recalls) the program or content stored in the second favorites list slot. */
    Key["FavoriteRecall1"] = "FavoriteRecall1";
    /** Selects (recalls) the program or content stored in the third favorites list slot. */
    Key["FavoriteRecall2"] = "FavoriteRecall2";
    /** Selects (recalls) the program or content stored in the fourth favorites list slot. */
    Key["FavoriteRecall3"] = "FavoriteRecall3";
    /** Stores the current program or content into the first favorites list slot. */
    Key["FavoriteStore0"] = "FavoriteStore0";
    /** Stores the current program or content into the second favorites list slot. */
    Key["FavoriteStore1"] = "FavoriteStore1";
    /** Stores the current program or content into the third favorites list slot. */
    Key["FavoriteStore2"] = "FavoriteStore2";
    /** Stores the current program or content into the fourth favorites list slot. */
    Key["FavoriteStore3"] = "FavoriteStore3";
    /** Toggles the display of the program or content guide. */
    Key["Guide"] = "Guide";
    /** If the guide is currently displayed, this button tells the guide to display the next day's content. */
    Key["GuideNextDay"] = "GuideNextDay";
    /** If the guide is currently displayed, this button tells the guide to display the previous day's content. */
    Key["GuidePreviousDay"] = "GuidePreviousDay";
    /** Toggles the display of information about the currently selected content, program, or media. */
    Key["Info"] = "Info";
    /** Tellls the device to perform an instant replay (typically some form of jumping back a short amount of time then playing it again, possibly but not usually in slow motion). */
    Key["InstantReplay"] = "InstantReplay";
    /** Opens content liniked to the current program, if available and possible. */
    Key["Link"] = "Link";
    /** Lists the current program. */
    Key["ListProgram"] = "ListProgram";
    /** Toggles a display listing currently available live content or programs. */
    Key["LiveContent"] = "LiveContent";
    /** Locks or unlocks the currently selected content or pgoram. */
    Key["Lock"] = "Lock";
    /** Presents a list of media applications, such as photo viewers, audio and video players, and games. [1] */
    Key["MediaApps"] = "MediaApps";
    /** The Audio Track key. */
    Key["MediaAudioTrack"] = "MediaAudioTrack";
    /** Jumps back to the last-viewed content, program, or other media. */
    Key["MediaLast"] = "MediaLast";
    /** Skips backward to the previous content or program. */
    Key["MediaSkipBackward"] = "MediaSkipBackward";
    /** Skips forward to the next content or program. */
    Key["MediaSkipForward"] = "MediaSkipForward";
    /** Steps backward to the previous content or program. */
    Key["MediaStepBackward"] = "MediaStepBackward";
    /** Steps forward to the next content or program. */
    Key["MediaStepForward"] = "MediaStepForward";
    /** Top Menu button; opens the media's main menu, such as on a DVD or Blu-Ray disc. */
    Key["MediaTopMenu"] = "MediaTopMenu";
    /** Navigates into a submenu or option. */
    Key["NavigateIn"] = "NavigateIn";
    /** Navigates to the next item. */
    Key["NavigateNext"] = "NavigateNext";
    /** Navigates out of the current screen or menu. */
    Key["NavigateOut"] = "NavigateOut";
    /** Navigates to the previous item. */
    Key["NavigatePrevious"] = "NavigatePrevious";
    /** Cycles to the next channel in the favorites list. */
    Key["NextFavoriteChannel"] = "NextFavoriteChannel";
    /** Cycles to the next saved user profile, if this feature is supported and multiple profiles exist. */
    Key["NextUserProfile"] = "NextUserProfile";
    /** Opens the user interface for selecting on demand content or programs to watch. */
    Key["OnDemand"] = "OnDemand";
    /** Starts the process of pairing the remote with a device to be controlled. */
    Key["Pairing"] = "Pairing";
    /** A button to move the picture-in-picture view downward. */
    Key["PinPDown"] = "PinPDown";
    /** A button to control moving the picture-in-picture view. */
    Key["PinPMove"] = "PinPMove";
    /** Toggles display of th epicture-in-picture view on and off. */
    Key["PinPToggle"] = "PinPToggle";
    /** A button to move the picture-in-picture view upward. */
    Key["PinPUp"] = "PinPUp";
    /** Decreases the media playback rate. */
    Key["PlaySpeedDown"] = "PlaySpeedDown";
    /** Returns the media playback rate to normal. */
    Key["PlaySpeedReset"] = "PlaySpeedReset";
    /** Increases the media playback rate. */
    Key["PlaySpeedUp"] = "PlaySpeedUp";
    /** Toggles random media (also known as "shuffle mode") on and off. */
    Key["RandomToggle"] = "RandomToggle";
    /** A code sent when the remote control's battery is low. This doesn't actually correspond to a physical key at all. */
    Key["RcLowBattery"] = "RcLowBattery";
    /** Cycles among the available media recording speeds. */
    Key["RecordSpeedNext"] = "RecordSpeedNext";
    /** Toggles radio frequency (RF) input bypass mode on and off. RF bypass mode passes RF input directly to the RF output without any processing or filtering. */
    Key["RfBypass"] = "RfBypass";
    /** Toggles the channel scan mode on and off; this is a mode which flips through channels automatically until the user stops the scan. */
    Key["ScanChannelsToggle"] = "ScanChannelsToggle";
    /** Cycles through the available screen display modes. */
    Key["ScreenModeNext"] = "ScreenModeNext";
    /** Toggles display of the device's settings screen on and off. */
    Key["Settings"] = "Settings";
    /** Toggles split screen display mode on and off. */
    Key["SplitScreenToggle"] = "SplitScreenToggle";
    /** Cycles among input modes on an external set-top box (STB). */
    Key["STBInput"] = "STBInput";
    /** Toggles on and off an external STB. */
    Key["STBPower"] = "STBPower";
    /** Toggles the display of subtitles on and off if they're available. */
    Key["Subtitle"] = "Subtitle";
    /** Toggles display of teletext, if available. */
    Key["Teletext"] = "Teletext";
    /** Cycles through the available video modes. */
    Key["VideoModeNext"] = "VideoModeNext";
    /** Causes the device to identify itself in some fashion, such as by flashing a light, briefly changing the brightness of indicator lights, or emitting a tone. */
    Key["Wink"] = "Wink";
    /** Toggles between full-screen and scaled content display, or otherwise change the magnification level. */
    Key["ZoomToggle"] = "ZoomToggle";
    /** Presents a list of possible corrections for a word which was incorrectly identified. */
    Key["SpeechCorrectionList"] = "SpeechCorrectionList";
    /** Toggles between dictation mode and command/control mode. This lets the speech engine know whether to interpret spoken words as input text or as commands. */
    Key["SpeechInputToggle"] = "SpeechInputToggle";
    /** Closes the current document or message. Must not exit the application. */
    Key["Close"] = "Close";
    /** Creates a new document or message. */
    Key["New"] = "New";
    /** Opens an existing document or message. */
    Key["Open"] = "Open";
    /** Prints the current document or message. */
    Key["Print"] = "Print";
    /** Saves the current document or message. */
    Key["Save"] = "Save";
    /** Starts spell checking the current document. */
    Key["SpellCheck"] = "SpellCheck";
    /** Opens the user interface to forward a message. */
    Key["MailForward"] = "MailForward";
    /** Opens the user interface to reply to a message. */
    Key["MailReply"] = "MailReply";
    /** Sends the current message. */
    Key["MailSend"] = "MailSend";
    /** The Calculator key, often labeled with an icon such as . This is often used as a generic application launcher key (APPCOMMAND_LAUNCH_APP2). */
    Key["LaunchCalculator"] = "LaunchCalculator";
    /** The Calendar key, often labeled with an icon like . */
    Key["LaunchCalendar"] = "LaunchCalendar";
    /** The Contacts key. */
    Key["LaunchContacts"] = "LaunchContacts";
    /** The Mail key. This is often displayed as . */
    Key["LaunchMail"] = "LaunchMail";
    /** The Media Player key. */
    Key["LaunchMediaPlayer"] = "LaunchMediaPlayer";
    /** The Music Player key, often labeled with an icon such as . */
    Key["LaunchMusicPlayer"] = "LaunchMusicPlayer";
    /** The My Computer key on Windows keyboards. This is often used as a generic application launcher key (APPCOMMAND_LAUNCH_APP1). */
    Key["LaunchMyComputer"] = "LaunchMyComputer";
    /** The Phone key, to open the phone dialer application if one is present. */
    Key["LaunchPhone"] = "LaunchPhone";
    /** The Screen Saver key. */
    Key["LaunchScreenSaver"] = "LaunchScreenSaver";
    /** The Spreadsheet key. This key may be labeled with an icon such as  or that of a specific spreadsheet application. */
    Key["LaunchSpreadsheet"] = "LaunchSpreadsheet";
    /** The Web Browser key. This key is frequently labeled with an icon such as  or the icon of a specific browser, depending on the device manufacturer. */
    Key["LaunchWebBrowser"] = "LaunchWebBrowser";
    /** The WebCam key. Opens the webcam application. */
    Key["LaunchWebCam"] = "LaunchWebCam";
    /** The Word Processor key. This may be an icon of a specific word processor application, or a generic document icon. */
    Key["LaunchWordProcessor"] = "LaunchWordProcessor";
    /** The first generic application launcher button. */
    Key["LaunchApplication1"] = "LaunchApplication1";
    /** The second generic application launcher button. */
    Key["LaunchApplication2"] = "LaunchApplication2";
    /** The third generic application launcher button. */
    Key["LaunchApplication3"] = "LaunchApplication3";
    /** The fourth generic application launcher button. */
    Key["LaunchApplication4"] = "LaunchApplication4";
    /** The fifth generic application launcher button. */
    Key["LaunchApplication5"] = "LaunchApplication5";
    /** The sixth generic application launcher button. */
    Key["LaunchApplication6"] = "LaunchApplication6";
    /** The seventh generic application launcher button. */
    Key["LaunchApplication7"] = "LaunchApplication7";
    /** The eighth generic application launcher button. */
    Key["LaunchApplication8"] = "LaunchApplication8";
    /** The ninth generic application launcher button. */
    Key["LaunchApplication9"] = "LaunchApplication9";
    /** The 10th generic application launcher button. */
    Key["LaunchApplication10"] = "LaunchApplication10";
    /** The 11th generic application launcher button. */
    Key["LaunchApplication11"] = "LaunchApplication11";
    /** The 12th generic application launcher button. */
    Key["LaunchApplication12"] = "LaunchApplication12";
    /** The 13th generic application launcher button. */
    Key["LaunchApplication13"] = "LaunchApplication13";
    /** The 14th generic application launcher button. */
    Key["LaunchApplication14"] = "LaunchApplication14";
    /** The 15th generic application launcher button. */
    Key["LaunchApplication15"] = "LaunchApplication15";
    /** The 16th generic application launcher button. */
    Key["LaunchApplication16"] = "LaunchApplication16";
    /** Navigates to the previous content or page in the current Web view's history. */
    Key["BrowserBack"] = "BrowserBack";
    /** Opens the user's list of bookmarks/favorites. */
    Key["BrowserFavorites"] = "BrowserFavorites";
    /** Navigates to the next content or page in the current Web view's history. */
    Key["BrowserForward"] = "BrowserForward";
    /** Navigates to the user's preferred home page. */
    Key["BrowserHome"] = "BrowserHome";
    /** Refreshes the current page or contentl. */
    Key["BrowserRefresh"] = "BrowserRefresh";
    /** Activates the user's preferred search engine or the search interface within their browser. */
    Key["BrowserSearch"] = "BrowserSearch";
    /** Stops loading the currently displayed Web view or content. */
    Key["BrowserStop"] = "BrowserStop";
    /** The decimal point key (typically . or , depending on the region. In newer browsers, this value to simply be the character generated by the decimal key (one of those two characters). [1] */
    Key["Decimal"] = "Decimal";
    /** The 11 key found on certain media numeric keypads. */
    Key["Key11"] = "Key11";
    /** The 12 key found on certain media numeric keypads. */
    Key["Key12"] = "Key12";
    /** The numeric keypad's multiplication key, *. */
    Key["Multiply"] = "Multiply";
    /** The numeric keypad's addition key, +. */
    Key["Add"] = "Add";
    /** The numeric keypad's division key, /. */
    Key["Divide"] = "Divide";
    /** The numeric keypad's subtraction key, -. */
    Key["Subtract"] = "Subtract";
    /** The numeric keypad's places separator character (in the United States, this is a comma, but elsewhere it is frequently a period). */
    Key["Separator"] = "Separator";
})(Key = exports.Key || (exports.Key = {}));

},{}],"node_modules/gl-matrix/esm/common.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setMatrixArrayType = setMatrixArrayType;
exports.toRadian = toRadian;
exports.equals = equals;
exports.RANDOM = exports.ARRAY_TYPE = exports.EPSILON = void 0;

/**
 * Common utilities
 * @module glMatrix
 */
// Configuration Constants
var EPSILON = 0.000001;
exports.EPSILON = EPSILON;
var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
exports.ARRAY_TYPE = ARRAY_TYPE;
var RANDOM = Math.random;
/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Type} type Array type, such as Float32Array or Array
 */

exports.RANDOM = RANDOM;

function setMatrixArrayType(type) {
  exports.ARRAY_TYPE = ARRAY_TYPE = type;
}

var degree = Math.PI / 180;
/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */

function toRadian(a) {
  return a * degree;
}
/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */


function equals(a, b) {
  return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}

if (!Math.hypot) Math.hypot = function () {
  var y = 0,
      i = arguments.length;

  while (i--) {
    y += arguments[i] * arguments[i];
  }

  return Math.sqrt(y);
};
},{}],"node_modules/gl-matrix/esm/mat2.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
exports.clone = clone;
exports.copy = copy;
exports.identity = identity;
exports.fromValues = fromValues;
exports.set = set;
exports.transpose = transpose;
exports.invert = invert;
exports.adjoint = adjoint;
exports.determinant = determinant;
exports.multiply = multiply;
exports.rotate = rotate;
exports.scale = scale;
exports.fromRotation = fromRotation;
exports.fromScaling = fromScaling;
exports.str = str;
exports.frob = frob;
exports.LDU = LDU;
exports.add = add;
exports.subtract = subtract;
exports.exactEquals = exactEquals;
exports.equals = equals;
exports.multiplyScalar = multiplyScalar;
exports.multiplyScalarAndAdd = multiplyScalarAndAdd;
exports.sub = exports.mul = void 0;

var glMatrix = _interopRequireWildcard(require("./common.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * 2x2 Matrix
 * @module mat2
 */

/**
 * Creates a new identity mat2
 *
 * @returns {mat2} a new 2x2 matrix
 */
function create() {
  var out = new glMatrix.ARRAY_TYPE(4);

  if (glMatrix.ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
  }

  out[0] = 1;
  out[3] = 1;
  return out;
}
/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {mat2} a matrix to clone
 * @returns {mat2} a new 2x2 matrix
 */


function clone(a) {
  var out = new glMatrix.ARRAY_TYPE(4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Copy the values from one mat2 to another
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */


function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Set a mat2 to the identity matrix
 *
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */


function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}
/**
 * Create a new mat2 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out A new 2x2 matrix
 */


function fromValues(m00, m01, m10, m11) {
  var out = new glMatrix.ARRAY_TYPE(4);
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}
/**
 * Set the components of a mat2 to the given values
 *
 * @param {mat2} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out
 */


function set(out, m00, m01, m10, m11) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}
/**
 * Transpose the values of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */


function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache
  // some values
  if (out === a) {
    var a1 = a[1];
    out[1] = a[2];
    out[2] = a1;
  } else {
    out[0] = a[0];
    out[1] = a[2];
    out[2] = a[1];
    out[3] = a[3];
  }

  return out;
}
/**
 * Inverts a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */


function invert(out, a) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3]; // Calculate the determinant

  var det = a0 * a3 - a2 * a1;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = a3 * det;
  out[1] = -a1 * det;
  out[2] = -a2 * det;
  out[3] = a0 * det;
  return out;
}
/**
 * Calculates the adjugate of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */


function adjoint(out, a) {
  // Caching this value is nessecary if out == a
  var a0 = a[0];
  out[0] = a[3];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a0;
  return out;
}
/**
 * Calculates the determinant of a mat2
 *
 * @param {mat2} a the source matrix
 * @returns {Number} determinant of a
 */


function determinant(a) {
  return a[0] * a[3] - a[2] * a[1];
}
/**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */


function multiply(out, a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  return out;
}
/**
 * Rotates a mat2 by the given angle
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */


function rotate(out, a, rad) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = a0 * c + a2 * s;
  out[1] = a1 * c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  return out;
}
/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/


function scale(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.rotate(dest, dest, rad);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */


function fromRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.scale(dest, dest, vec);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2} out
 */


function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  return out;
}
/**
 * Returns a string representation of a mat2
 *
 * @param {mat2} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */


function str(a) {
  return 'mat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}
/**
 * Returns Frobenius norm of a mat2
 *
 * @param {mat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */


function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3]);
}
/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {mat2} L the lower triangular matrix
 * @param {mat2} D the diagonal matrix
 * @param {mat2} U the upper triangular matrix
 * @param {mat2} a the input matrix to factorize
 */


function LDU(L, D, U, a) {
  L[2] = a[2] / a[0];
  U[0] = a[0];
  U[1] = a[1];
  U[3] = a[3] - L[2] * U[1];
  return [L, D, U];
}
/**
 * Adds two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */


function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */


function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */


function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */


function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2} out
 */


function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}
/**
 * Adds two mat2's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2} out the receiving vector
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2} out
 */


function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  return out;
}
/**
 * Alias for {@link mat2.multiply}
 * @function
 */


var mul = multiply;
/**
 * Alias for {@link mat2.subtract}
 * @function
 */

exports.mul = mul;
var sub = subtract;
exports.sub = sub;
},{"./common.js":"node_modules/gl-matrix/esm/common.js"}],"node_modules/gl-matrix/esm/mat2d.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
exports.clone = clone;
exports.copy = copy;
exports.identity = identity;
exports.fromValues = fromValues;
exports.set = set;
exports.invert = invert;
exports.determinant = determinant;
exports.multiply = multiply;
exports.rotate = rotate;
exports.scale = scale;
exports.translate = translate;
exports.fromRotation = fromRotation;
exports.fromScaling = fromScaling;
exports.fromTranslation = fromTranslation;
exports.str = str;
exports.frob = frob;
exports.add = add;
exports.subtract = subtract;
exports.multiplyScalar = multiplyScalar;
exports.multiplyScalarAndAdd = multiplyScalarAndAdd;
exports.exactEquals = exactEquals;
exports.equals = equals;
exports.sub = exports.mul = void 0;

var glMatrix = _interopRequireWildcard(require("./common.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * 2x3 Matrix
 * @module mat2d
 *
 * @description
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, b, c,
 *  d, tx, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, b, 0,
 *  c, d, 0,
 *  tx, ty, 1]
 * </pre>
 * The last column is ignored so the array is shorter and operations are faster.
 */

/**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */
function create() {
  var out = new glMatrix.ARRAY_TYPE(6);

  if (glMatrix.ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[4] = 0;
    out[5] = 0;
  }

  out[0] = 1;
  out[3] = 1;
  return out;
}
/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {mat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */


function clone(a) {
  var out = new glMatrix.ARRAY_TYPE(6);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}
/**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */


function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}
/**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */


function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  return out;
}
/**
 * Create a new mat2d with the given values
 *
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} A new mat2d
 */


function fromValues(a, b, c, d, tx, ty) {
  var out = new glMatrix.ARRAY_TYPE(6);
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}
/**
 * Set the components of a mat2d to the given values
 *
 * @param {mat2d} out the receiving matrix
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} out
 */


function set(out, a, b, c, d, tx, ty) {
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}
/**
 * Inverts a mat2d
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */


function invert(out, a) {
  var aa = a[0],
      ab = a[1],
      ac = a[2],
      ad = a[3];
  var atx = a[4],
      aty = a[5];
  var det = aa * ad - ab * ac;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = ad * det;
  out[1] = -ab * det;
  out[2] = -ac * det;
  out[3] = aa * det;
  out[4] = (ac * aty - ad * atx) * det;
  out[5] = (ab * atx - aa * aty) * det;
  return out;
}
/**
 * Calculates the determinant of a mat2d
 *
 * @param {mat2d} a the source matrix
 * @returns {Number} determinant of a
 */


function determinant(a) {
  return a[0] * a[3] - a[1] * a[2];
}
/**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */


function multiply(out, a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  out[4] = a0 * b4 + a2 * b5 + a4;
  out[5] = a1 * b4 + a3 * b5 + a5;
  return out;
}
/**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */


function rotate(out, a, rad) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = a0 * c + a2 * s;
  out[1] = a1 * c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  out[4] = a4;
  out[5] = a5;
  return out;
}
/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/


function scale(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  out[4] = a4;
  out[5] = a5;
  return out;
}
/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/


function translate(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0;
  out[1] = a1;
  out[2] = a2;
  out[3] = a3;
  out[4] = a0 * v0 + a2 * v1 + a4;
  out[5] = a1 * v0 + a3 * v1 + a5;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.rotate(dest, dest, rad);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */


function fromRotation(out, rad) {
  var s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  out[4] = 0;
  out[5] = 0;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.scale(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2d} out
 */


function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  out[4] = 0;
  out[5] = 0;
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.translate(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat2d} out
 */


function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = v[0];
  out[5] = v[1];
  return out;
}
/**
 * Returns a string representation of a mat2d
 *
 * @param {mat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */


function str(a) {
  return 'mat2d(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ')';
}
/**
 * Returns Frobenius norm of a mat2d
 *
 * @param {mat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */


function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], 1);
}
/**
 * Adds two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */


function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */


function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2d} out
 */


function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  return out;
}
/**
 * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2d} out the receiving vector
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2d} out
 */


function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */


function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */


function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5];
  return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5));
}
/**
 * Alias for {@link mat2d.multiply}
 * @function
 */


var mul = multiply;
/**
 * Alias for {@link mat2d.subtract}
 * @function
 */

exports.mul = mul;
var sub = subtract;
exports.sub = sub;
},{"./common.js":"node_modules/gl-matrix/esm/common.js"}],"node_modules/gl-matrix/esm/mat3.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
exports.fromMat4 = fromMat4;
exports.clone = clone;
exports.copy = copy;
exports.fromValues = fromValues;
exports.set = set;
exports.identity = identity;
exports.transpose = transpose;
exports.invert = invert;
exports.adjoint = adjoint;
exports.determinant = determinant;
exports.multiply = multiply;
exports.translate = translate;
exports.rotate = rotate;
exports.scale = scale;
exports.fromTranslation = fromTranslation;
exports.fromRotation = fromRotation;
exports.fromScaling = fromScaling;
exports.fromMat2d = fromMat2d;
exports.fromQuat = fromQuat;
exports.normalFromMat4 = normalFromMat4;
exports.projection = projection;
exports.str = str;
exports.frob = frob;
exports.add = add;
exports.subtract = subtract;
exports.multiplyScalar = multiplyScalar;
exports.multiplyScalarAndAdd = multiplyScalarAndAdd;
exports.exactEquals = exactEquals;
exports.equals = equals;
exports.sub = exports.mul = void 0;

var glMatrix = _interopRequireWildcard(require("./common.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * 3x3 Matrix
 * @module mat3
 */

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */
function create() {
  var out = new glMatrix.ARRAY_TYPE(9);

  if (glMatrix.ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
  }

  out[0] = 1;
  out[4] = 1;
  out[8] = 1;
  return out;
}
/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */


function fromMat4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[4];
  out[4] = a[5];
  out[5] = a[6];
  out[6] = a[8];
  out[7] = a[9];
  out[8] = a[10];
  return out;
}
/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {mat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */


function clone(a) {
  var out = new glMatrix.ARRAY_TYPE(9);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */


function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */


function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  var out = new glMatrix.ARRAY_TYPE(9);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */


function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */


function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */


function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a12 = a[5];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a01;
    out[5] = a[7];
    out[6] = a02;
    out[7] = a12;
  } else {
    out[0] = a[0];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a[1];
    out[4] = a[4];
    out[5] = a[7];
    out[6] = a[2];
    out[7] = a[5];
    out[8] = a[8];
  }

  return out;
}
/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */


function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b01 = a22 * a11 - a12 * a21;
  var b11 = -a22 * a10 + a12 * a20;
  var b21 = a21 * a10 - a11 * a20; // Calculate the determinant

  var det = a00 * b01 + a01 * b11 + a02 * b21;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */


function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  out[0] = a11 * a22 - a12 * a21;
  out[1] = a02 * a21 - a01 * a22;
  out[2] = a01 * a12 - a02 * a11;
  out[3] = a12 * a20 - a10 * a22;
  out[4] = a00 * a22 - a02 * a20;
  out[5] = a02 * a10 - a00 * a12;
  out[6] = a10 * a21 - a11 * a20;
  out[7] = a01 * a20 - a00 * a21;
  out[8] = a00 * a11 - a01 * a10;
  return out;
}
/**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */


function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}
/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */


function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b00 = b[0],
      b01 = b[1],
      b02 = b[2];
  var b10 = b[3],
      b11 = b[4],
      b12 = b[5];
  var b20 = b[6],
      b21 = b[7],
      b22 = b[8];
  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;
  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;
  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}
/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */


function translate(out, a, v) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      x = v[0],
      y = v[1];
  out[0] = a00;
  out[1] = a01;
  out[2] = a02;
  out[3] = a10;
  out[4] = a11;
  out[5] = a12;
  out[6] = x * a00 + y * a10 + a20;
  out[7] = x * a01 + y * a11 + a21;
  out[8] = x * a02 + y * a12 + a22;
  return out;
}
/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */


function rotate(out, a, rad) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c * a00 + s * a10;
  out[1] = c * a01 + s * a11;
  out[2] = c * a02 + s * a12;
  out[3] = c * a10 - s * a00;
  out[4] = c * a11 - s * a01;
  out[5] = c * a12 - s * a02;
  out[6] = a20;
  out[7] = a21;
  out[8] = a22;
  return out;
}

;
/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/

function scale(out, a, v) {
  var x = v[0],
      y = v[1];
  out[0] = x * a[0];
  out[1] = x * a[1];
  out[2] = x * a[2];
  out[3] = y * a[3];
  out[4] = y * a[4];
  out[5] = y * a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat3} out
 */


function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = v[0];
  out[7] = v[1];
  out[8] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */


function fromRotation(out, rad) {
  var s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = -s;
  out[4] = c;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat3} out
 */


function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = v[1];
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat2d} a the matrix to copy
 * @returns {mat3} out
 **/


function fromMat2d(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = 0;
  out[3] = a[2];
  out[4] = a[3];
  out[5] = 0;
  out[6] = a[4];
  out[7] = a[5];
  out[8] = 1;
  return out;
}
/**
* Calculates a 3x3 matrix from the given quaternion
*
* @param {mat3} out mat3 receiving operation result
* @param {quat} q Quaternion to create matrix from
*
* @returns {mat3} out
*/


function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[3] = yx - wz;
  out[6] = zx + wy;
  out[1] = yx + wz;
  out[4] = 1 - xx - zz;
  out[7] = zy - wx;
  out[2] = zx - wy;
  out[5] = zy + wx;
  out[8] = 1 - xx - yy;
  return out;
}
/**
* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
*
* @param {mat3} out mat3 receiving operation result
* @param {mat4} a Mat4 to derive the normal matrix from
*
* @returns {mat3} out
*/


function normalFromMat4(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  return out;
}
/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */


function projection(out, width, height) {
  out[0] = 2 / width;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = -2 / height;
  out[5] = 0;
  out[6] = -1;
  out[7] = 1;
  out[8] = 1;
  return out;
}
/**
 * Returns a string representation of a mat3
 *
 * @param {mat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */


function str(a) {
  return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ')';
}
/**
 * Returns Frobenius norm of a mat3
 *
 * @param {mat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */


function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]);
}
/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */


function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */


function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */


function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  return out;
}
/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */


function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */


function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */


function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7],
      a8 = a[8];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7],
      b8 = b[8];
  return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8));
}
/**
 * Alias for {@link mat3.multiply}
 * @function
 */


var mul = multiply;
/**
 * Alias for {@link mat3.subtract}
 * @function
 */

exports.mul = mul;
var sub = subtract;
exports.sub = sub;
},{"./common.js":"node_modules/gl-matrix/esm/common.js"}],"node_modules/gl-matrix/esm/mat4.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
exports.clone = clone;
exports.copy = copy;
exports.fromValues = fromValues;
exports.set = set;
exports.identity = identity;
exports.transpose = transpose;
exports.invert = invert;
exports.adjoint = adjoint;
exports.determinant = determinant;
exports.multiply = multiply;
exports.translate = translate;
exports.scale = scale;
exports.rotate = rotate;
exports.rotateX = rotateX;
exports.rotateY = rotateY;
exports.rotateZ = rotateZ;
exports.fromTranslation = fromTranslation;
exports.fromScaling = fromScaling;
exports.fromRotation = fromRotation;
exports.fromXRotation = fromXRotation;
exports.fromYRotation = fromYRotation;
exports.fromZRotation = fromZRotation;
exports.fromRotationTranslation = fromRotationTranslation;
exports.fromQuat2 = fromQuat2;
exports.getTranslation = getTranslation;
exports.getScaling = getScaling;
exports.getRotation = getRotation;
exports.fromRotationTranslationScale = fromRotationTranslationScale;
exports.fromRotationTranslationScaleOrigin = fromRotationTranslationScaleOrigin;
exports.fromQuat = fromQuat;
exports.frustum = frustum;
exports.perspective = perspective;
exports.perspectiveFromFieldOfView = perspectiveFromFieldOfView;
exports.ortho = ortho;
exports.lookAt = lookAt;
exports.targetTo = targetTo;
exports.str = str;
exports.frob = frob;
exports.add = add;
exports.subtract = subtract;
exports.multiplyScalar = multiplyScalar;
exports.multiplyScalarAndAdd = multiplyScalarAndAdd;
exports.exactEquals = exactEquals;
exports.equals = equals;
exports.sub = exports.mul = void 0;

var glMatrix = _interopRequireWildcard(require("./common.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
 * @module mat4
 */

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */
function create() {
  var out = new glMatrix.ARRAY_TYPE(16);

  if (glMatrix.ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
  }

  out[0] = 1;
  out[5] = 1;
  out[10] = 1;
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {mat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */


function clone(a) {
  var out = new glMatrix.ARRAY_TYPE(16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */


function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */


function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  var out = new glMatrix.ARRAY_TYPE(16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */


function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */


function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */


function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    var a12 = a[6],
        a13 = a[7];
    var a23 = a[11];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }

  return out;
}
/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */


function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */


function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
  out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
  out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
  out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
  out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
  out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
  return out;
}
/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */


function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */


function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15]; // Cache only the current line of the second matrix

  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}
/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */


function translate(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;

  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a03;
    out[4] = a10;
    out[5] = a11;
    out[6] = a12;
    out[7] = a13;
    out[8] = a20;
    out[9] = a21;
    out[10] = a22;
    out[11] = a23;
    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }

  return out;
}
/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/


function scale(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */


function rotate(out, a, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;
  var b00, b01, b02;
  var b10, b11, b12;
  var b20, b21, b22;

  if (len < glMatrix.EPSILON) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;
  a00 = a[0];
  a01 = a[1];
  a02 = a[2];
  a03 = a[3];
  a10 = a[4];
  a11 = a[5];
  a12 = a[6];
  a13 = a[7];
  a20 = a[8];
  a21 = a[9];
  a22 = a[10];
  a23 = a[11]; // Construct the elements of the rotation matrix

  b00 = x * x * t + c;
  b01 = y * x * t + z * s;
  b02 = z * x * t - y * s;
  b10 = x * y * t - z * s;
  b11 = y * y * t + c;
  b12 = z * y * t + x * s;
  b20 = x * z * t + y * s;
  b21 = y * z * t - x * s;
  b22 = z * z * t + c; // Perform rotation-specific matrix multiplication

  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  return out;
}
/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */


function rotateX(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */


function rotateY(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */


function rotateZ(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */


function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Scaling vector
 * @returns {mat4} out
 */


function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */


function fromRotation(out, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;

  if (len < glMatrix.EPSILON) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c; // Perform rotation-specific matrix multiplication

  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */


function fromXRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */


function fromYRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = 0;
  out[2] = -s;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */


function fromZRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */


function fromRotationTranslation(out, q, v) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 from a dual quat.
 *
 * @param {mat4} out Matrix
 * @param {quat2} a Dual Quaternion
 * @returns {mat4} mat4 receiving operation result
 */


function fromQuat2(out, a) {
  var translation = new glMatrix.ARRAY_TYPE(3);
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7];
  var magnitude = bx * bx + by * by + bz * bz + bw * bw; //Only scale if it makes sense

  if (magnitude > 0) {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
  } else {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  }

  fromRotationTranslation(out, a, translation);
  return out;
}
/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */


function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];
  return out;
}
/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */


function getScaling(out, mat) {
  var m11 = mat[0];
  var m12 = mat[1];
  var m13 = mat[2];
  var m21 = mat[4];
  var m22 = mat[5];
  var m23 = mat[6];
  var m31 = mat[8];
  var m32 = mat[9];
  var m33 = mat[10];
  out[0] = Math.hypot(m11, m12, m13);
  out[1] = Math.hypot(m21, m22, m23);
  out[2] = Math.hypot(m31, m32, m33);
  return out;
}
/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {mat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */


function getRotation(out, mat) {
  var scaling = new glMatrix.ARRAY_TYPE(3);
  getScaling(scaling, mat);
  var is1 = 1 / scaling[0];
  var is2 = 1 / scaling[1];
  var is3 = 1 / scaling[2];
  var sm11 = mat[0] * is1;
  var sm12 = mat[1] * is2;
  var sm13 = mat[2] * is3;
  var sm21 = mat[4] * is1;
  var sm22 = mat[5] * is2;
  var sm23 = mat[6] * is3;
  var sm31 = mat[8] * is1;
  var sm32 = mat[9] * is2;
  var sm33 = mat[10] * is3;
  var trace = sm11 + sm22 + sm33;
  var S = 0;

  if (trace > 0) {
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (sm23 - sm32) / S;
    out[1] = (sm31 - sm13) / S;
    out[2] = (sm12 - sm21) / S;
  } else if (sm11 > sm22 && sm11 > sm33) {
    S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
    out[3] = (sm23 - sm32) / S;
    out[0] = 0.25 * S;
    out[1] = (sm12 + sm21) / S;
    out[2] = (sm31 + sm13) / S;
  } else if (sm22 > sm33) {
    S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
    out[3] = (sm31 - sm13) / S;
    out[0] = (sm12 + sm21) / S;
    out[1] = 0.25 * S;
    out[2] = (sm23 + sm32) / S;
  } else {
    S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
    out[3] = (sm12 - sm21) / S;
    out[0] = (sm31 + sm13) / S;
    out[1] = (sm23 + sm32) / S;
    out[2] = 0.25 * S;
  }

  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @returns {mat4} out
 */


function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @param {vec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */


function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  var ox = o[0];
  var oy = o[1];
  var oz = o[2];
  var out0 = (1 - (yy + zz)) * sx;
  var out1 = (xy + wz) * sx;
  var out2 = (xz - wy) * sx;
  var out4 = (xy - wz) * sy;
  var out5 = (1 - (xx + zz)) * sy;
  var out6 = (yz + wx) * sy;
  var out8 = (xz + wy) * sz;
  var out9 = (yz - wx) * sz;
  var out10 = (1 - (xx + yy)) * sz;
  out[0] = out0;
  out[1] = out1;
  out[2] = out2;
  out[3] = 0;
  out[4] = out4;
  out[5] = out5;
  out[6] = out6;
  out[7] = 0;
  out[8] = out8;
  out[9] = out9;
  out[10] = out10;
  out[11] = 0;
  out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
  out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
  out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
  out[15] = 1;
  return out;
}
/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */


function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;
  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;
  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */


function frustum(out, left, right, bottom, top, near, far) {
  var rl = 1 / (right - left);
  var tb = 1 / (top - bottom);
  var nf = 1 / (near - far);
  out[0] = near * 2 * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = near * 2 * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near * 2 * nf;
  out[15] = 0;
  return out;
}
/**
 * Generates a perspective projection matrix with the given bounds.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */


function perspective(out, fovy, aspect, near, far) {
  var f = 1.0 / Math.tan(fovy / 2),
      nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;

  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = (far + near) * nf;
    out[14] = 2 * far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -2 * near;
  }

  return out;
}
/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */


function perspectiveFromFieldOfView(out, fov, near, far) {
  var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
  var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
  var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
  var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
  var xScale = 2.0 / (leftTan + rightTan);
  var yScale = 2.0 / (upTan + downTan);
  out[0] = xScale;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  out[4] = 0.0;
  out[5] = yScale;
  out[6] = 0.0;
  out[7] = 0.0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = (upTan - downTan) * yScale * 0.5;
  out[10] = far / (near - far);
  out[11] = -1.0;
  out[12] = 0.0;
  out[13] = 0.0;
  out[14] = far * near / (near - far);
  out[15] = 0.0;
  return out;
}
/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */


function ortho(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}
/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */


function lookAt(out, eye, center, up) {
  var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
  var eyex = eye[0];
  var eyey = eye[1];
  var eyez = eye[2];
  var upx = up[0];
  var upy = up[1];
  var upz = up[2];
  var centerx = center[0];
  var centery = center[1];
  var centerz = center[2];

  if (Math.abs(eyex - centerx) < glMatrix.EPSILON && Math.abs(eyey - centery) < glMatrix.EPSILON && Math.abs(eyez - centerz) < glMatrix.EPSILON) {
    return identity(out);
  }

  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;
  len = 1 / Math.hypot(z0, z1, z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;
  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.hypot(x0, x1, x2);

  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;
  len = Math.hypot(y0, y1, y2);

  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
  }

  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;
  return out;
}
/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */


function targetTo(out, eye, target, up) {
  var eyex = eye[0],
      eyey = eye[1],
      eyez = eye[2],
      upx = up[0],
      upy = up[1],
      upz = up[2];
  var z0 = eyex - target[0],
      z1 = eyey - target[1],
      z2 = eyez - target[2];
  var len = z0 * z0 + z1 * z1 + z2 * z2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }

  var x0 = upy * z2 - upz * z1,
      x1 = upz * z0 - upx * z2,
      x2 = upx * z1 - upy * z0;
  len = x0 * x0 + x1 * x1 + x2 * x2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
}

;
/**
 * Returns a string representation of a mat4
 *
 * @param {mat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' + a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
}
/**
 * Returns Frobenius norm of a mat4
 *
 * @param {mat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */


function frob(a) {
  return Math.hypot(a[0], a[1], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
}
/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */


function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */


function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */


function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}
/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */


function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  out[9] = a[9] + b[9] * scale;
  out[10] = a[10] + b[10] * scale;
  out[11] = a[11] + b[11] * scale;
  out[12] = a[12] + b[12] * scale;
  out[13] = a[13] + b[13] * scale;
  out[14] = a[14] + b[14] * scale;
  out[15] = a[15] + b[15] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */


function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */


function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  var a8 = a[8],
      a9 = a[9],
      a10 = a[10],
      a11 = a[11];
  var a12 = a[12],
      a13 = a[13],
      a14 = a[14],
      a15 = a[15];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  var b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  var b8 = b[8],
      b9 = b[9],
      b10 = b[10],
      b11 = b[11];
  var b12 = b[12],
      b13 = b[13],
      b14 = b[14],
      b15 = b[15];
  return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15));
}
/**
 * Alias for {@link mat4.multiply}
 * @function
 */


var mul = multiply;
/**
 * Alias for {@link mat4.subtract}
 * @function
 */

exports.mul = mul;
var sub = subtract;
exports.sub = sub;
},{"./common.js":"node_modules/gl-matrix/esm/common.js"}],"node_modules/gl-matrix/esm/vec3.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
exports.clone = clone;
exports.length = length;
exports.fromValues = fromValues;
exports.copy = copy;
exports.set = set;
exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
exports.ceil = ceil;
exports.floor = floor;
exports.min = min;
exports.max = max;
exports.round = round;
exports.scale = scale;
exports.scaleAndAdd = scaleAndAdd;
exports.distance = distance;
exports.squaredDistance = squaredDistance;
exports.squaredLength = squaredLength;
exports.negate = negate;
exports.inverse = inverse;
exports.normalize = normalize;
exports.dot = dot;
exports.cross = cross;
exports.lerp = lerp;
exports.hermite = hermite;
exports.bezier = bezier;
exports.random = random;
exports.transformMat4 = transformMat4;
exports.transformMat3 = transformMat3;
exports.transformQuat = transformQuat;
exports.rotateX = rotateX;
exports.rotateY = rotateY;
exports.rotateZ = rotateZ;
exports.angle = angle;
exports.zero = zero;
exports.str = str;
exports.exactEquals = exactEquals;
exports.equals = equals;
exports.forEach = exports.sqrLen = exports.len = exports.sqrDist = exports.dist = exports.div = exports.mul = exports.sub = void 0;

var glMatrix = _interopRequireWildcard(require("./common.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */
function create() {
  var out = new glMatrix.ARRAY_TYPE(3);

  if (glMatrix.ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  return out;
}
/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {vec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */


function clone(a) {
  var out = new glMatrix.ARRAY_TYPE(3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */


function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return Math.hypot(x, y, z);
}
/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */


function fromValues(x, y, z) {
  var out = new glMatrix.ARRAY_TYPE(3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */


function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */


function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */


function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */


function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}
/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */


function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}
/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */


function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}
/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to ceil
 * @returns {vec3} out
 */


function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}
/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to floor
 * @returns {vec3} out
 */


function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}
/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */


function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}
/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */


function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}
/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to round
 * @returns {vec3} out
 */


function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}
/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */


function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}
/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */


function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */


function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return Math.hypot(x, y, z);
}
/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */


function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return x * x + y * y + z * z;
}
/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */


function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return x * x + y * y + z * z;
}
/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */


function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}
/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to invert
 * @returns {vec3} out
 */


function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}
/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */


function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var len = x * x + y * y + z * z;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  out[2] = a[2] * len;
  return out;
}
/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */


function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */


function cross(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2];
  var bx = b[0],
      by = b[1],
      bz = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}
/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */


function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}
/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */


function hermite(out, a, b, c, d, t) {
  var factorTimes2 = t * t;
  var factor1 = factorTimes2 * (2 * t - 3) + 1;
  var factor2 = factorTimes2 * (t - 2) + t;
  var factor3 = factorTimes2 * (t - 1);
  var factor4 = factorTimes2 * (3 - 2 * t);
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */


function bezier(out, a, b, c, d, t) {
  var inverseFactor = 1 - t;
  var inverseFactorTimesTwo = inverseFactor * inverseFactor;
  var factorTimes2 = t * t;
  var factor1 = inverseFactorTimesTwo * inverseFactor;
  var factor2 = 3 * t * inverseFactorTimesTwo;
  var factor3 = 3 * factorTimes2 * inverseFactor;
  var factor4 = factorTimes2 * t;
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */


function random(out, scale) {
  scale = scale || 1.0;
  var r = glMatrix.RANDOM() * 2.0 * Math.PI;
  var z = glMatrix.RANDOM() * 2.0 - 1.0;
  var zScale = Math.sqrt(1.0 - z * z) * scale;
  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale;
  return out;
}
/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */


function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}
/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */


function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}
/**
 * Transforms the vec3 with a quat
 * Can also be used for dual quaternions. (Multiply it with the real part)
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */


function transformQuat(out, a, q) {
  // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3];
  var x = a[0],
      y = a[1],
      z = a[2]; // var qvec = [qx, qy, qz];
  // var uv = vec3.cross([], qvec, a);

  var uvx = qy * z - qz * y,
      uvy = qz * x - qx * z,
      uvz = qx * y - qy * x; // var uuv = vec3.cross([], qvec, uv);

  var uuvx = qy * uvz - qz * uvy,
      uuvy = qz * uvx - qx * uvz,
      uuvz = qx * uvy - qy * uvx; // vec3.scale(uv, uv, 2 * w);

  var w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2; // vec3.scale(uuv, uuv, 2);

  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2; // return vec3.add(out, a, vec3.add(out, uv, uuv));

  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}
/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */


function rotateX(out, a, b, c) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0];
  r[1] = p[1] * Math.cos(c) - p[2] * Math.sin(c);
  r[2] = p[1] * Math.sin(c) + p[2] * Math.cos(c); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */


function rotateY(out, a, b, c) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[2] * Math.sin(c) + p[0] * Math.cos(c);
  r[1] = p[1];
  r[2] = p[2] * Math.cos(c) - p[0] * Math.sin(c); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */


function rotateZ(out, a, b, c) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0] * Math.cos(c) - p[1] * Math.sin(c);
  r[1] = p[0] * Math.sin(c) + p[1] * Math.cos(c);
  r[2] = p[2]; //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */


function angle(a, b) {
  var tempA = fromValues(a[0], a[1], a[2]);
  var tempB = fromValues(b[0], b[1], b[2]);
  normalize(tempA, tempA);
  normalize(tempB, tempB);
  var cosine = dot(tempA, tempB);

  if (cosine > 1.0) {
    return 0;
  } else if (cosine < -1.0) {
    return Math.PI;
  } else {
    return Math.acos(cosine);
  }
}
/**
 * Set the components of a vec3 to zero
 *
 * @param {vec3} out the receiving vector
 * @returns {vec3} out
 */


function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {vec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */


function str(a) {
  return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */


function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */


function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2];
  return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2));
}
/**
 * Alias for {@link vec3.subtract}
 * @function
 */


var sub = subtract;
/**
 * Alias for {@link vec3.multiply}
 * @function
 */

exports.sub = sub;
var mul = multiply;
/**
 * Alias for {@link vec3.divide}
 * @function
 */

exports.mul = mul;
var div = divide;
/**
 * Alias for {@link vec3.distance}
 * @function
 */

exports.div = div;
var dist = distance;
/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */

exports.dist = dist;
var sqrDist = squaredDistance;
/**
 * Alias for {@link vec3.length}
 * @function
 */

exports.sqrDist = sqrDist;
var len = length;
/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */

exports.len = len;
var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

exports.sqrLen = sqrLen;

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 3;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
    }

    return a;
  };
}();

exports.forEach = forEach;
},{"./common.js":"node_modules/gl-matrix/esm/common.js"}],"node_modules/gl-matrix/esm/vec4.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
exports.clone = clone;
exports.fromValues = fromValues;
exports.copy = copy;
exports.set = set;
exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
exports.ceil = ceil;
exports.floor = floor;
exports.min = min;
exports.max = max;
exports.round = round;
exports.scale = scale;
exports.scaleAndAdd = scaleAndAdd;
exports.distance = distance;
exports.squaredDistance = squaredDistance;
exports.length = length;
exports.squaredLength = squaredLength;
exports.negate = negate;
exports.inverse = inverse;
exports.normalize = normalize;
exports.dot = dot;
exports.cross = cross;
exports.lerp = lerp;
exports.random = random;
exports.transformMat4 = transformMat4;
exports.transformQuat = transformQuat;
exports.zero = zero;
exports.str = str;
exports.exactEquals = exactEquals;
exports.equals = equals;
exports.forEach = exports.sqrLen = exports.len = exports.sqrDist = exports.dist = exports.div = exports.mul = exports.sub = void 0;

var glMatrix = _interopRequireWildcard(require("./common.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * 4 Dimensional Vector
 * @module vec4
 */

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */
function create() {
  var out = new glMatrix.ARRAY_TYPE(4);

  if (glMatrix.ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
  }

  return out;
}
/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {vec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */


function clone(a) {
  var out = new glMatrix.ARRAY_TYPE(4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */


function fromValues(x, y, z, w) {
  var out = new glMatrix.ARRAY_TYPE(4);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */


function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */


function set(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */


function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */


function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}
/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */


function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  out[3] = a[3] * b[3];
  return out;
}
/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */


function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  out[3] = a[3] / b[3];
  return out;
}
/**
 * Math.ceil the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to ceil
 * @returns {vec4} out
 */


function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  out[3] = Math.ceil(a[3]);
  return out;
}
/**
 * Math.floor the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to floor
 * @returns {vec4} out
 */


function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  out[3] = Math.floor(a[3]);
  return out;
}
/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */


function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  out[3] = Math.min(a[3], b[3]);
  return out;
}
/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */


function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  out[3] = Math.max(a[3], b[3]);
  return out;
}
/**
 * Math.round the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to round
 * @returns {vec4} out
 */


function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  out[3] = Math.round(a[3]);
  return out;
}
/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */


function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}
/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */


function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} distance between a and b
 */


function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return Math.hypot(x, y, z, w);
}
/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} squared distance between a and b
 */


function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return x * x + y * y + z * z + w * w;
}
/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */


function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return Math.hypot(x, y, z, w);
}
/**
 * Calculates the squared length of a vec4
 *
 * @param {vec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */


function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return x * x + y * y + z * z + w * w;
}
/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to negate
 * @returns {vec4} out
 */


function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = -a[3];
  return out;
}
/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to invert
 * @returns {vec4} out
 */


function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  out[3] = 1.0 / a[3];
  return out;
}
/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */


function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  var len = x * x + y * y + z * z + w * w;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
  }

  out[0] = x * len;
  out[1] = y * len;
  out[2] = z * len;
  out[3] = w * len;
  return out;
}
/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */


function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}
/**
 * Returns the cross-product of three vectors in a 4-dimensional space
 *
 * @param {vec4} result the receiving vector
 * @param {vec4} U the first vector
 * @param {vec4} V the second vector
 * @param {vec4} W the third vector
 * @returns {vec4} result
 */


function cross(out, u, v, w) {
  var A = v[0] * w[1] - v[1] * w[0],
      B = v[0] * w[2] - v[2] * w[0],
      C = v[0] * w[3] - v[3] * w[0],
      D = v[1] * w[2] - v[2] * w[1],
      E = v[1] * w[3] - v[3] * w[1],
      F = v[2] * w[3] - v[3] * w[2];
  var G = u[0];
  var H = u[1];
  var I = u[2];
  var J = u[3];
  out[0] = H * F - I * E + J * D;
  out[1] = -(G * F) + I * C - J * B;
  out[2] = G * E - H * C + J * A;
  out[3] = -(G * D) + H * B - I * A;
  return out;
}

;
/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec4} out
 */

function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  var aw = a[3];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  out[3] = aw + t * (b[3] - aw);
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */


function random(out, scale) {
  scale = scale || 1.0; // Marsaglia, George. Choosing a Point from the Surface of a
  // Sphere. Ann. Math. Statist. 43 (1972), no. 2, 645--646.
  // http://projecteuclid.org/euclid.aoms/1177692644;

  var v1, v2, v3, v4;
  var s1, s2;

  do {
    v1 = glMatrix.RANDOM() * 2 - 1;
    v2 = glMatrix.RANDOM() * 2 - 1;
    s1 = v1 * v1 + v2 * v2;
  } while (s1 >= 1);

  do {
    v3 = glMatrix.RANDOM() * 2 - 1;
    v4 = glMatrix.RANDOM() * 2 - 1;
    s2 = v3 * v3 + v4 * v4;
  } while (s2 >= 1);

  var d = Math.sqrt((1 - s1) / s2);
  out[0] = scale * v1;
  out[1] = scale * v2;
  out[2] = scale * v3 * d;
  out[3] = scale * v4 * d;
  return out;
}
/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec4} out
 */


function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
  return out;
}
/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec4} out
 */


function transformQuat(out, a, q) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3]; // calculate quat * vec

  var ix = qw * x + qy * z - qz * y;
  var iy = qw * y + qz * x - qx * z;
  var iz = qw * z + qx * y - qy * x;
  var iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat

  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  out[3] = a[3];
  return out;
}
/**
 * Set the components of a vec4 to zero
 *
 * @param {vec4} out the receiving vector
 * @returns {vec4} out
 */


function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {vec4} a vector to represent as a string
 * @returns {String} string representation of the vector
 */


function str(a) {
  return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */


function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */


function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}
/**
 * Alias for {@link vec4.subtract}
 * @function
 */


var sub = subtract;
/**
 * Alias for {@link vec4.multiply}
 * @function
 */

exports.sub = sub;
var mul = multiply;
/**
 * Alias for {@link vec4.divide}
 * @function
 */

exports.mul = mul;
var div = divide;
/**
 * Alias for {@link vec4.distance}
 * @function
 */

exports.div = div;
var dist = distance;
/**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */

exports.dist = dist;
var sqrDist = squaredDistance;
/**
 * Alias for {@link vec4.length}
 * @function
 */

exports.sqrDist = sqrDist;
var len = length;
/**
 * Alias for {@link vec4.squaredLength}
 * @function
 */

exports.len = len;
var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

exports.sqrLen = sqrLen;

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 4;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      vec[3] = a[i + 3];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
      a[i + 3] = vec[3];
    }

    return a;
  };
}();

exports.forEach = forEach;
},{"./common.js":"node_modules/gl-matrix/esm/common.js"}],"node_modules/gl-matrix/esm/quat.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
exports.identity = identity;
exports.setAxisAngle = setAxisAngle;
exports.getAxisAngle = getAxisAngle;
exports.getAngle = getAngle;
exports.multiply = multiply;
exports.rotateX = rotateX;
exports.rotateY = rotateY;
exports.rotateZ = rotateZ;
exports.calculateW = calculateW;
exports.exp = exp;
exports.ln = ln;
exports.pow = pow;
exports.slerp = slerp;
exports.random = random;
exports.invert = invert;
exports.conjugate = conjugate;
exports.fromMat3 = fromMat3;
exports.fromEuler = fromEuler;
exports.str = str;
exports.setAxes = exports.sqlerp = exports.rotationTo = exports.equals = exports.exactEquals = exports.normalize = exports.sqrLen = exports.squaredLength = exports.len = exports.length = exports.lerp = exports.dot = exports.scale = exports.mul = exports.add = exports.set = exports.copy = exports.fromValues = exports.clone = void 0;

var glMatrix = _interopRequireWildcard(require("./common.js"));

var mat3 = _interopRequireWildcard(require("./mat3.js"));

var vec3 = _interopRequireWildcard(require("./vec3.js"));

var vec4 = _interopRequireWildcard(require("./vec4.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Quaternion
 * @module quat
 */

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */
function create() {
  var out = new glMatrix.ARRAY_TYPE(4);

  if (glMatrix.ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  out[3] = 1;
  return out;
}
/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */


function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}
/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/


function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  var s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}
/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {vec3} out_axis  Vector receiving the axis of rotation
 * @param  {quat} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */


function getAxisAngle(out_axis, q) {
  var rad = Math.acos(q[3]) * 2.0;
  var s = Math.sin(rad / 2.0);

  if (s > glMatrix.EPSILON) {
    out_axis[0] = q[0] / s;
    out_axis[1] = q[1] / s;
    out_axis[2] = q[2] / s;
  } else {
    // If s is zero, return any axis (no rotation - axis does not matter)
    out_axis[0] = 1;
    out_axis[1] = 0;
    out_axis[2] = 0;
  }

  return rad;
}
/**
 * Gets the angular distance between two unit quaternions
 *
 * @param  {quat} a     Origin unit quaternion 
 * @param  {quat} b     Destination unit quaternion
 * @return {Number}     Angle, in radians, between the two quaternions
 */


function getAngle(a, b) {
  var dotproduct = dot(a, b);
  return Math.acos(2 * dotproduct * dotproduct - 1);
}
/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */


function multiply(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];
  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */


function rotateX(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */


function rotateY(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var by = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */


function rotateZ(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bz = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}
/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate W component of
 * @returns {quat} out
 */


function calculateW(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
  return out;
}
/**
 * Calculate the exponential of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate the exponential of
 * @returns {quat} out
 */


function exp(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var et = Math.exp(w);
  var s = r > 0 ? et * Math.sin(r) / r : 0;
  out[0] = x * s;
  out[1] = y * s;
  out[2] = z * s;
  out[3] = et * Math.cos(r);
  return out;
}
/**
 * Calculate the natural logarithm of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate the exponential of
 * @returns {quat} out
 */


function ln(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var t = r > 0 ? Math.atan2(r, w) / r : 0;
  out[0] = x * t;
  out[1] = y * t;
  out[2] = z * t;
  out[3] = 0.5 * Math.log(x * x + y * y + z * z + w * w);
  return out;
}
/**
 * Calculate the scalar power of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate the exponential of
 * @param {Number} b amount to scale the quaternion by
 * @returns {quat} out
 */


function pow(out, a, b) {
  ln(out, a);
  scale(out, out, b);
  exp(out, out);
  return out;
}
/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */


function slerp(out, a, b, t) {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];
  var omega, cosom, sinom, scale0, scale1; // calc cosine

  cosom = ax * bx + ay * by + az * bz + aw * bw; // adjust signs (if necessary)

  if (cosom < 0.0) {
    cosom = -cosom;
    bx = -bx;
    by = -by;
    bz = -bz;
    bw = -bw;
  } // calculate coefficients


  if (1.0 - cosom > glMatrix.EPSILON) {
    // standard case (slerp)
    omega = Math.acos(cosom);
    sinom = Math.sin(omega);
    scale0 = Math.sin((1.0 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t;
    scale1 = t;
  } // calculate final values


  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;
  return out;
}
/**
 * Generates a random unit quaternion
 * 
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */


function random(out) {
  // Implementation of http://planning.cs.uiuc.edu/node198.html
  // TODO: Calling random 3 times is probably not the fastest solution
  var u1 = glMatrix.RANDOM();
  var u2 = glMatrix.RANDOM();
  var u3 = glMatrix.RANDOM();
  var sqrt1MinusU1 = Math.sqrt(1 - u1);
  var sqrtU1 = Math.sqrt(u1);
  out[0] = sqrt1MinusU1 * Math.sin(2.0 * Math.PI * u2);
  out[1] = sqrt1MinusU1 * Math.cos(2.0 * Math.PI * u2);
  out[2] = sqrtU1 * Math.sin(2.0 * Math.PI * u3);
  out[3] = sqrtU1 * Math.cos(2.0 * Math.PI * u3);
  return out;
}
/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */


function invert(out, a) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
  var invDot = dot ? 1.0 / dot : 0; // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

  out[0] = -a0 * invDot;
  out[1] = -a1 * invDot;
  out[2] = -a2 * invDot;
  out[3] = a3 * invDot;
  return out;
}
/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */


function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}
/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */


function fromMat3(out, m) {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  var fTrace = m[0] + m[4] + m[8];
  var fRoot;

  if (fTrace > 0.0) {
    // |w| > 1/2, may as well choose w > 1/2
    fRoot = Math.sqrt(fTrace + 1.0); // 2w

    out[3] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot; // 1/(4w)

    out[0] = (m[5] - m[7]) * fRoot;
    out[1] = (m[6] - m[2]) * fRoot;
    out[2] = (m[1] - m[3]) * fRoot;
  } else {
    // |w| <= 1/2
    var i = 0;
    if (m[4] > m[0]) i = 1;
    if (m[8] > m[i * 3 + i]) i = 2;
    var j = (i + 1) % 3;
    var k = (i + 2) % 3;
    fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
    out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
    out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
  }

  return out;
}
/**
 * Creates a quaternion from the given euler angle x, y, z.
 *
 * @param {quat} out the receiving quaternion
 * @param {x} Angle to rotate around X axis in degrees.
 * @param {y} Angle to rotate around Y axis in degrees.
 * @param {z} Angle to rotate around Z axis in degrees.
 * @returns {quat} out
 * @function
 */


function fromEuler(out, x, y, z) {
  var halfToRad = 0.5 * Math.PI / 180.0;
  x *= halfToRad;
  y *= halfToRad;
  z *= halfToRad;
  var sx = Math.sin(x);
  var cx = Math.cos(x);
  var sy = Math.sin(y);
  var cy = Math.cos(y);
  var sz = Math.sin(z);
  var cz = Math.cos(z);
  out[0] = sx * cy * cz - cx * sy * sz;
  out[1] = cx * sy * cz + sx * cy * sz;
  out[2] = cx * cy * sz - sx * sy * cz;
  out[3] = cx * cy * cz + sx * sy * sz;
  return out;
}
/**
 * Returns a string representation of a quatenion
 *
 * @param {quat} a vector to represent as a string
 * @returns {String} string representation of the vector
 */


function str(a) {
  return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}
/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */


var clone = vec4.clone;
/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */

exports.clone = clone;
var fromValues = vec4.fromValues;
/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the source quaternion
 * @returns {quat} out
 * @function
 */

exports.fromValues = fromValues;
var copy = vec4.copy;
/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */

exports.copy = copy;
var set = vec4.set;
/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 * @function
 */

exports.set = set;
var add = vec4.add;
/**
 * Alias for {@link quat.multiply}
 * @function
 */

exports.add = add;
var mul = multiply;
/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */

exports.mul = mul;
var scale = vec4.scale;
/**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */

exports.scale = scale;
var dot = vec4.dot;
/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 * @function
 */

exports.dot = dot;
var lerp = vec4.lerp;
/**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
 * @returns {Number} length of a
 */

exports.lerp = lerp;
var length = vec4.length;
/**
 * Alias for {@link quat.length}
 * @function
 */

exports.length = length;
var len = length;
/**
 * Calculates the squared length of a quat
 *
 * @param {quat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */

exports.len = len;
var squaredLength = vec4.squaredLength;
/**
 * Alias for {@link quat.squaredLength}
 * @function
 */

exports.squaredLength = squaredLength;
var sqrLen = squaredLength;
/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */

exports.sqrLen = sqrLen;
var normalize = vec4.normalize;
/**
 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {quat} a The first quaternion.
 * @param {quat} b The second quaternion.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

exports.normalize = normalize;
var exactEquals = vec4.exactEquals;
/**
 * Returns whether or not the quaternions have approximately the same elements in the same position.
 *
 * @param {quat} a The first vector.
 * @param {quat} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

exports.exactEquals = exactEquals;
var equals = vec4.equals;
/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {vec3} a the initial vector
 * @param {vec3} b the destination vector
 * @returns {quat} out
 */

exports.equals = equals;

var rotationTo = function () {
  var tmpvec3 = vec3.create();
  var xUnitVec3 = vec3.fromValues(1, 0, 0);
  var yUnitVec3 = vec3.fromValues(0, 1, 0);
  return function (out, a, b) {
    var dot = vec3.dot(a, b);

    if (dot < -0.999999) {
      vec3.cross(tmpvec3, xUnitVec3, a);
      if (vec3.len(tmpvec3) < 0.000001) vec3.cross(tmpvec3, yUnitVec3, a);
      vec3.normalize(tmpvec3, tmpvec3);
      setAxisAngle(out, tmpvec3, Math.PI);
      return out;
    } else if (dot > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      vec3.cross(tmpvec3, a, b);
      out[0] = tmpvec3[0];
      out[1] = tmpvec3[1];
      out[2] = tmpvec3[2];
      out[3] = 1 + dot;
      return normalize(out, out);
    }
  };
}();
/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {quat} c the third operand
 * @param {quat} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */


exports.rotationTo = rotationTo;

var sqlerp = function () {
  var temp1 = create();
  var temp2 = create();
  return function (out, a, b, c, d, t) {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));
    return out;
  };
}();
/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {vec3} view  the vector representing the viewing direction
 * @param {vec3} right the vector representing the local "right" direction
 * @param {vec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */


exports.sqlerp = sqlerp;

var setAxes = function () {
  var matr = mat3.create();
  return function (out, view, right, up) {
    matr[0] = right[0];
    matr[3] = right[1];
    matr[6] = right[2];
    matr[1] = up[0];
    matr[4] = up[1];
    matr[7] = up[2];
    matr[2] = -view[0];
    matr[5] = -view[1];
    matr[8] = -view[2];
    return normalize(out, fromMat3(out, matr));
  };
}();

exports.setAxes = setAxes;
},{"./common.js":"node_modules/gl-matrix/esm/common.js","./mat3.js":"node_modules/gl-matrix/esm/mat3.js","./vec3.js":"node_modules/gl-matrix/esm/vec3.js","./vec4.js":"node_modules/gl-matrix/esm/vec4.js"}],"node_modules/gl-matrix/esm/quat2.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
exports.clone = clone;
exports.fromValues = fromValues;
exports.fromRotationTranslationValues = fromRotationTranslationValues;
exports.fromRotationTranslation = fromRotationTranslation;
exports.fromTranslation = fromTranslation;
exports.fromRotation = fromRotation;
exports.fromMat4 = fromMat4;
exports.copy = copy;
exports.identity = identity;
exports.set = set;
exports.getDual = getDual;
exports.setDual = setDual;
exports.getTranslation = getTranslation;
exports.translate = translate;
exports.rotateX = rotateX;
exports.rotateY = rotateY;
exports.rotateZ = rotateZ;
exports.rotateByQuatAppend = rotateByQuatAppend;
exports.rotateByQuatPrepend = rotateByQuatPrepend;
exports.rotateAroundAxis = rotateAroundAxis;
exports.add = add;
exports.multiply = multiply;
exports.scale = scale;
exports.lerp = lerp;
exports.invert = invert;
exports.conjugate = conjugate;
exports.normalize = normalize;
exports.str = str;
exports.exactEquals = exactEquals;
exports.equals = equals;
exports.sqrLen = exports.squaredLength = exports.len = exports.length = exports.dot = exports.mul = exports.setReal = exports.getReal = void 0;

var glMatrix = _interopRequireWildcard(require("./common.js"));

var quat = _interopRequireWildcard(require("./quat.js"));

var mat4 = _interopRequireWildcard(require("./mat4.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Dual Quaternion<br>
 * Format: [real, dual]<br>
 * Quaternion format: XYZW<br>
 * Make sure to have normalized dual quaternions, otherwise the functions may not work as intended.<br>
 * @module quat2
 */

/**
 * Creates a new identity dual quat
 *
 * @returns {quat2} a new dual quaternion [real -> rotation, dual -> translation]
 */
function create() {
  var dq = new glMatrix.ARRAY_TYPE(8);

  if (glMatrix.ARRAY_TYPE != Float32Array) {
    dq[0] = 0;
    dq[1] = 0;
    dq[2] = 0;
    dq[4] = 0;
    dq[5] = 0;
    dq[6] = 0;
    dq[7] = 0;
  }

  dq[3] = 1;
  return dq;
}
/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat2} a dual quaternion to clone
 * @returns {quat2} new dual quaternion
 * @function
 */


function clone(a) {
  var dq = new glMatrix.ARRAY_TYPE(8);
  dq[0] = a[0];
  dq[1] = a[1];
  dq[2] = a[2];
  dq[3] = a[3];
  dq[4] = a[4];
  dq[5] = a[5];
  dq[6] = a[6];
  dq[7] = a[7];
  return dq;
}
/**
 * Creates a new dual quat initialized with the given values
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} new dual quaternion
 * @function
 */


function fromValues(x1, y1, z1, w1, x2, y2, z2, w2) {
  var dq = new glMatrix.ARRAY_TYPE(8);
  dq[0] = x1;
  dq[1] = y1;
  dq[2] = z1;
  dq[3] = w1;
  dq[4] = x2;
  dq[5] = y2;
  dq[6] = z2;
  dq[7] = w2;
  return dq;
}
/**
 * Creates a new dual quat from the given values (quat and translation)
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component (translation)
 * @param {Number} y2 Y component (translation)
 * @param {Number} z2 Z component (translation)
 * @returns {quat2} new dual quaternion
 * @function
 */


function fromRotationTranslationValues(x1, y1, z1, w1, x2, y2, z2) {
  var dq = new glMatrix.ARRAY_TYPE(8);
  dq[0] = x1;
  dq[1] = y1;
  dq[2] = z1;
  dq[3] = w1;
  var ax = x2 * 0.5,
      ay = y2 * 0.5,
      az = z2 * 0.5;
  dq[4] = ax * w1 + ay * z1 - az * y1;
  dq[5] = ay * w1 + az * x1 - ax * z1;
  dq[6] = az * w1 + ax * y1 - ay * x1;
  dq[7] = -ax * x1 - ay * y1 - az * z1;
  return dq;
}
/**
 * Creates a dual quat from a quaternion and a translation
 *
 * @param {quat2} dual quaternion receiving operation result
 * @param {quat} q a normalized quaternion
 * @param {vec3} t tranlation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */


function fromRotationTranslation(out, q, t) {
  var ax = t[0] * 0.5,
      ay = t[1] * 0.5,
      az = t[2] * 0.5,
      bx = q[0],
      by = q[1],
      bz = q[2],
      bw = q[3];
  out[0] = bx;
  out[1] = by;
  out[2] = bz;
  out[3] = bw;
  out[4] = ax * bw + ay * bz - az * by;
  out[5] = ay * bw + az * bx - ax * bz;
  out[6] = az * bw + ax * by - ay * bx;
  out[7] = -ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Creates a dual quat from a translation
 *
 * @param {quat2} dual quaternion receiving operation result
 * @param {vec3} t translation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */


function fromTranslation(out, t) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = t[0] * 0.5;
  out[5] = t[1] * 0.5;
  out[6] = t[2] * 0.5;
  out[7] = 0;
  return out;
}
/**
 * Creates a dual quat from a quaternion
 *
 * @param {quat2} dual quaternion receiving operation result
 * @param {quat} q the quaternion
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */


function fromRotation(out, q) {
  out[0] = q[0];
  out[1] = q[1];
  out[2] = q[2];
  out[3] = q[3];
  out[4] = 0;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  return out;
}
/**
 * Creates a new dual quat from a matrix (4x4)
 *
 * @param {quat2} out the dual quaternion
 * @param {mat4} a the matrix
 * @returns {quat2} dual quat receiving operation result
 * @function
 */


function fromMat4(out, a) {
  //TODO Optimize this
  var outer = quat.create();
  mat4.getRotation(outer, a);
  var t = new glMatrix.ARRAY_TYPE(3);
  mat4.getTranslation(t, a);
  fromRotationTranslation(out, outer, t);
  return out;
}
/**
 * Copy the values from one dual quat to another
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the source dual quaternion
 * @returns {quat2} out
 * @function
 */


function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  return out;
}
/**
 * Set a dual quat to the identity dual quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @returns {quat2} out
 */


function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  return out;
}
/**
 * Set the components of a dual quat to the given values
 *
 * @param {quat2} out the receiving quaternion
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} out
 * @function
 */


function set(out, x1, y1, z1, w1, x2, y2, z2, w2) {
  out[0] = x1;
  out[1] = y1;
  out[2] = z1;
  out[3] = w1;
  out[4] = x2;
  out[5] = y2;
  out[6] = z2;
  out[7] = w2;
  return out;
}
/**
 * Gets the real part of a dual quat
 * @param  {quat} out real part
 * @param  {quat2} a Dual Quaternion
 * @return {quat} real part
 */


var getReal = quat.copy;
/**
 * Gets the dual part of a dual quat
 * @param  {quat} out dual part
 * @param  {quat2} a Dual Quaternion
 * @return {quat} dual part
 */

exports.getReal = getReal;

function getDual(out, a) {
  out[0] = a[4];
  out[1] = a[5];
  out[2] = a[6];
  out[3] = a[7];
  return out;
}
/**
 * Set the real component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {quat} q a quaternion representing the real part
 * @returns {quat2} out
 * @function
 */


var setReal = quat.copy;
/**
 * Set the dual component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {quat} q a quaternion representing the dual part
 * @returns {quat2} out
 * @function
 */

exports.setReal = setReal;

function setDual(out, q) {
  out[4] = q[0];
  out[5] = q[1];
  out[6] = q[2];
  out[7] = q[3];
  return out;
}
/**
 * Gets the translation of a normalized dual quat
 * @param  {vec3} out translation
 * @param  {quat2} a Dual Quaternion to be decomposed
 * @return {vec3} translation
 */


function getTranslation(out, a) {
  var ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3];
  out[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
  out[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
  out[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  return out;
}
/**
 * Translates a dual quat by the given vector
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to translate
 * @param {vec3} v vector to translate by
 * @returns {quat2} out
 */


function translate(out, a, v) {
  var ax1 = a[0],
      ay1 = a[1],
      az1 = a[2],
      aw1 = a[3],
      bx1 = v[0] * 0.5,
      by1 = v[1] * 0.5,
      bz1 = v[2] * 0.5,
      ax2 = a[4],
      ay2 = a[5],
      az2 = a[6],
      aw2 = a[7];
  out[0] = ax1;
  out[1] = ay1;
  out[2] = az1;
  out[3] = aw1;
  out[4] = aw1 * bx1 + ay1 * bz1 - az1 * by1 + ax2;
  out[5] = aw1 * by1 + az1 * bx1 - ax1 * bz1 + ay2;
  out[6] = aw1 * bz1 + ax1 * by1 - ay1 * bx1 + az2;
  out[7] = -ax1 * bx1 - ay1 * by1 - az1 * bz1 + aw2;
  return out;
}
/**
 * Rotates a dual quat around the X axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */


function rotateX(out, a, rad) {
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  quat.rotateX(out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}
/**
 * Rotates a dual quat around the Y axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */


function rotateY(out, a, rad) {
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  quat.rotateY(out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}
/**
 * Rotates a dual quat around the Z axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */


function rotateZ(out, a, rad) {
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  quat.rotateZ(out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}
/**
 * Rotates a dual quat by a given quaternion (a * q)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {quat} q quaternion to rotate by
 * @returns {quat2} out
 */


function rotateByQuatAppend(out, a, q) {
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3],
      ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  out[0] = ax * qw + aw * qx + ay * qz - az * qy;
  out[1] = ay * qw + aw * qy + az * qx - ax * qz;
  out[2] = az * qw + aw * qz + ax * qy - ay * qx;
  out[3] = aw * qw - ax * qx - ay * qy - az * qz;
  ax = a[4];
  ay = a[5];
  az = a[6];
  aw = a[7];
  out[4] = ax * qw + aw * qx + ay * qz - az * qy;
  out[5] = ay * qw + aw * qy + az * qx - ax * qz;
  out[6] = az * qw + aw * qz + ax * qy - ay * qx;
  out[7] = aw * qw - ax * qx - ay * qy - az * qz;
  return out;
}
/**
 * Rotates a dual quat by a given quaternion (q * a)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat} q quaternion to rotate by
 * @param {quat2} a the dual quaternion to rotate
 * @returns {quat2} out
 */


function rotateByQuatPrepend(out, q, a) {
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3],
      bx = a[0],
      by = a[1],
      bz = a[2],
      bw = a[3];
  out[0] = qx * bw + qw * bx + qy * bz - qz * by;
  out[1] = qy * bw + qw * by + qz * bx - qx * bz;
  out[2] = qz * bw + qw * bz + qx * by - qy * bx;
  out[3] = qw * bw - qx * bx - qy * by - qz * bz;
  bx = a[4];
  by = a[5];
  bz = a[6];
  bw = a[7];
  out[4] = qx * bw + qw * bx + qy * bz - qz * by;
  out[5] = qy * bw + qw * by + qz * bx - qx * bz;
  out[6] = qz * bw + qw * bz + qx * by - qy * bx;
  out[7] = qw * bw - qx * bx - qy * by - qz * bz;
  return out;
}
/**
 * Rotates a dual quat around a given axis. Does the normalisation automatically
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {vec3} axis the axis to rotate around
 * @param {Number} rad how far the rotation should be
 * @returns {quat2} out
 */


function rotateAroundAxis(out, a, axis, rad) {
  //Special case for rad = 0
  if (Math.abs(rad) < glMatrix.EPSILON) {
    return copy(out, a);
  }

  var axisLength = Math.hypot(axis[0], axis[1], axis[2]);
  rad = rad * 0.5;
  var s = Math.sin(rad);
  var bx = s * axis[0] / axisLength;
  var by = s * axis[1] / axisLength;
  var bz = s * axis[2] / axisLength;
  var bw = Math.cos(rad);
  var ax1 = a[0],
      ay1 = a[1],
      az1 = a[2],
      aw1 = a[3];
  out[0] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[1] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[2] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[3] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  var ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7];
  out[4] = ax * bw + aw * bx + ay * bz - az * by;
  out[5] = ay * bw + aw * by + az * bx - ax * bz;
  out[6] = az * bw + aw * bz + ax * by - ay * bx;
  out[7] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Adds two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @returns {quat2} out
 * @function
 */


function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  return out;
}
/**
 * Multiplies two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @returns {quat2} out
 */


function multiply(out, a, b) {
  var ax0 = a[0],
      ay0 = a[1],
      az0 = a[2],
      aw0 = a[3],
      bx1 = b[4],
      by1 = b[5],
      bz1 = b[6],
      bw1 = b[7],
      ax1 = a[4],
      ay1 = a[5],
      az1 = a[6],
      aw1 = a[7],
      bx0 = b[0],
      by0 = b[1],
      bz0 = b[2],
      bw0 = b[3];
  out[0] = ax0 * bw0 + aw0 * bx0 + ay0 * bz0 - az0 * by0;
  out[1] = ay0 * bw0 + aw0 * by0 + az0 * bx0 - ax0 * bz0;
  out[2] = az0 * bw0 + aw0 * bz0 + ax0 * by0 - ay0 * bx0;
  out[3] = aw0 * bw0 - ax0 * bx0 - ay0 * by0 - az0 * bz0;
  out[4] = ax0 * bw1 + aw0 * bx1 + ay0 * bz1 - az0 * by1 + ax1 * bw0 + aw1 * bx0 + ay1 * bz0 - az1 * by0;
  out[5] = ay0 * bw1 + aw0 * by1 + az0 * bx1 - ax0 * bz1 + ay1 * bw0 + aw1 * by0 + az1 * bx0 - ax1 * bz0;
  out[6] = az0 * bw1 + aw0 * bz1 + ax0 * by1 - ay0 * bx1 + az1 * bw0 + aw1 * bz0 + ax1 * by0 - ay1 * bx0;
  out[7] = aw0 * bw1 - ax0 * bx1 - ay0 * by1 - az0 * bz1 + aw1 * bw0 - ax1 * bx0 - ay1 * by0 - az1 * bz0;
  return out;
}
/**
 * Alias for {@link quat2.multiply}
 * @function
 */


var mul = multiply;
/**
 * Scales a dual quat by a scalar number
 *
 * @param {quat2} out the receiving dual quat
 * @param {quat2} a the dual quat to scale
 * @param {Number} b amount to scale the dual quat by
 * @returns {quat2} out
 * @function
 */

exports.mul = mul;

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  return out;
}
/**
 * Calculates the dot product of two dual quat's (The dot product of the real parts)
 *
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */


var dot = quat.dot;
/**
 * Performs a linear interpolation between two dual quats's
 * NOTE: The resulting dual quaternions won't always be normalized (The error is most noticeable when t = 0.5)
 *
 * @param {quat2} out the receiving dual quat
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat2} out
 */

exports.dot = dot;

function lerp(out, a, b, t) {
  var mt = 1 - t;
  if (dot(a, b) < 0) t = -t;
  out[0] = a[0] * mt + b[0] * t;
  out[1] = a[1] * mt + b[1] * t;
  out[2] = a[2] * mt + b[2] * t;
  out[3] = a[3] * mt + b[3] * t;
  out[4] = a[4] * mt + b[4] * t;
  out[5] = a[5] * mt + b[5] * t;
  out[6] = a[6] * mt + b[6] * t;
  out[7] = a[7] * mt + b[7] * t;
  return out;
}
/**
 * Calculates the inverse of a dual quat. If they are normalized, conjugate is cheaper
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a dual quat to calculate inverse of
 * @returns {quat2} out
 */


function invert(out, a) {
  var sqlen = squaredLength(a);
  out[0] = -a[0] / sqlen;
  out[1] = -a[1] / sqlen;
  out[2] = -a[2] / sqlen;
  out[3] = a[3] / sqlen;
  out[4] = -a[4] / sqlen;
  out[5] = -a[5] / sqlen;
  out[6] = -a[6] / sqlen;
  out[7] = a[7] / sqlen;
  return out;
}
/**
 * Calculates the conjugate of a dual quat
 * If the dual quaternion is normalized, this function is faster than quat2.inverse and produces the same result.
 *
 * @param {quat2} out the receiving quaternion
 * @param {quat2} a quat to calculate conjugate of
 * @returns {quat2} out
 */


function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  out[4] = -a[4];
  out[5] = -a[5];
  out[6] = -a[6];
  out[7] = a[7];
  return out;
}
/**
 * Calculates the length of a dual quat
 *
 * @param {quat2} a dual quat to calculate length of
 * @returns {Number} length of a
 * @function
 */


var length = quat.length;
/**
 * Alias for {@link quat2.length}
 * @function
 */

exports.length = length;
var len = length;
/**
 * Calculates the squared length of a dual quat
 *
 * @param {quat2} a dual quat to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */

exports.len = len;
var squaredLength = quat.squaredLength;
/**
 * Alias for {@link quat2.squaredLength}
 * @function
 */

exports.squaredLength = squaredLength;
var sqrLen = squaredLength;
/**
 * Normalize a dual quat
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a dual quaternion to normalize
 * @returns {quat2} out
 * @function
 */

exports.sqrLen = sqrLen;

function normalize(out, a) {
  var magnitude = squaredLength(a);

  if (magnitude > 0) {
    magnitude = Math.sqrt(magnitude);
    var a0 = a[0] / magnitude;
    var a1 = a[1] / magnitude;
    var a2 = a[2] / magnitude;
    var a3 = a[3] / magnitude;
    var b0 = a[4];
    var b1 = a[5];
    var b2 = a[6];
    var b3 = a[7];
    var a_dot_b = a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3;
    out[0] = a0;
    out[1] = a1;
    out[2] = a2;
    out[3] = a3;
    out[4] = (b0 - a0 * a_dot_b) / magnitude;
    out[5] = (b1 - a1 * a_dot_b) / magnitude;
    out[6] = (b2 - a2 * a_dot_b) / magnitude;
    out[7] = (b3 - a3 * a_dot_b) / magnitude;
  }

  return out;
}
/**
 * Returns a string representation of a dual quatenion
 *
 * @param {quat2} a dual quaternion to represent as a string
 * @returns {String} string representation of the dual quat
 */


function str(a) {
  return 'quat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ')';
}
/**
 * Returns whether or not the dual quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {quat2} a the first dual quaternion.
 * @param {quat2} b the second dual quaternion.
 * @returns {Boolean} true if the dual quaternions are equal, false otherwise.
 */


function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7];
}
/**
 * Returns whether or not the dual quaternions have approximately the same elements in the same position.
 *
 * @param {quat2} a the first dual quat.
 * @param {quat2} b the second dual quat.
 * @returns {Boolean} true if the dual quats are equal, false otherwise.
 */


function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7));
}
},{"./common.js":"node_modules/gl-matrix/esm/common.js","./quat.js":"node_modules/gl-matrix/esm/quat.js","./mat4.js":"node_modules/gl-matrix/esm/mat4.js"}],"node_modules/gl-matrix/esm/vec2.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
exports.clone = clone;
exports.fromValues = fromValues;
exports.copy = copy;
exports.set = set;
exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
exports.ceil = ceil;
exports.floor = floor;
exports.min = min;
exports.max = max;
exports.round = round;
exports.scale = scale;
exports.scaleAndAdd = scaleAndAdd;
exports.distance = distance;
exports.squaredDistance = squaredDistance;
exports.length = length;
exports.squaredLength = squaredLength;
exports.negate = negate;
exports.inverse = inverse;
exports.normalize = normalize;
exports.dot = dot;
exports.cross = cross;
exports.lerp = lerp;
exports.random = random;
exports.transformMat2 = transformMat2;
exports.transformMat2d = transformMat2d;
exports.transformMat3 = transformMat3;
exports.transformMat4 = transformMat4;
exports.rotate = rotate;
exports.angle = angle;
exports.zero = zero;
exports.str = str;
exports.exactEquals = exactEquals;
exports.equals = equals;
exports.forEach = exports.sqrLen = exports.sqrDist = exports.dist = exports.div = exports.mul = exports.sub = exports.len = void 0;

var glMatrix = _interopRequireWildcard(require("./common.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * 2 Dimensional Vector
 * @module vec2
 */

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */
function create() {
  var out = new glMatrix.ARRAY_TYPE(2);

  if (glMatrix.ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
  }

  return out;
}
/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {vec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */


function clone(a) {
  var out = new glMatrix.ARRAY_TYPE(2);
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */


function fromValues(x, y) {
  var out = new glMatrix.ARRAY_TYPE(2);
  out[0] = x;
  out[1] = y;
  return out;
}
/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */


function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */


function set(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}
/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */


function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */


function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}
/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */


function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
}
/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */


function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
}
/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to ceil
 * @returns {vec2} out
 */


function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  return out;
}
/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to floor
 * @returns {vec2} out
 */


function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  return out;
}
/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */


function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  return out;
}
/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */


function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  return out;
}
/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to round
 * @returns {vec2} out
 */


function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  return out;
}
/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */


function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
}
/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */


function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */


function distance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return Math.hypot(x, y);
}
/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */


function squaredDistance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return x * x + y * y;
}
/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */


function length(a) {
  var x = a[0],
      y = a[1];
  return Math.hypot(x, y);
}
/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */


function squaredLength(a) {
  var x = a[0],
      y = a[1];
  return x * x + y * y;
}
/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */


function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
}
/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to invert
 * @returns {vec2} out
 */


function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  return out;
}
/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */


function normalize(out, a) {
  var x = a[0],
      y = a[1];
  var len = x * x + y * y;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  return out;
}
/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */


function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1];
}
/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */


function cross(out, a, b) {
  var z = a[0] * b[1] - a[1] * b[0];
  out[0] = out[1] = 0;
  out[2] = z;
  return out;
}
/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec2} out
 */


function lerp(out, a, b, t) {
  var ax = a[0],
      ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */


function random(out, scale) {
  scale = scale || 1.0;
  var r = glMatrix.RANDOM() * 2.0 * Math.PI;
  out[0] = Math.cos(r) * scale;
  out[1] = Math.sin(r) * scale;
  return out;
}
/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */


function transformMat2(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
}
/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */


function transformMat2d(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
}
/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */


function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
}
/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */


function transformMat4(out, a, m) {
  var x = a[0];
  var y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}
/**
 * Rotate a 2D vector
 * @param {vec2} out The receiving vec2
 * @param {vec2} a The vec2 point to rotate
 * @param {vec2} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec2} out
 */


function rotate(out, a, b, c) {
  //Translate point to the origin
  var p0 = a[0] - b[0],
      p1 = a[1] - b[1],
      sinC = Math.sin(c),
      cosC = Math.cos(c); //perform rotation and translate to correct position

  out[0] = p0 * cosC - p1 * sinC + b[0];
  out[1] = p0 * sinC + p1 * cosC + b[1];
  return out;
}
/**
 * Get the angle between two 2D vectors
 * @param {vec2} a The first operand
 * @param {vec2} b The second operand
 * @returns {Number} The angle in radians
 */


function angle(a, b) {
  var x1 = a[0],
      y1 = a[1],
      x2 = b[0],
      y2 = b[1];
  var len1 = x1 * x1 + y1 * y1;

  if (len1 > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len1 = 1 / Math.sqrt(len1);
  }

  var len2 = x2 * x2 + y2 * y2;

  if (len2 > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len2 = 1 / Math.sqrt(len2);
  }

  var cosine = (x1 * x2 + y1 * y2) * len1 * len2;

  if (cosine > 1.0) {
    return 0;
  } else if (cosine < -1.0) {
    return Math.PI;
  } else {
    return Math.acos(cosine);
  }
}
/**
 * Set the components of a vec2 to zero
 *
 * @param {vec2} out the receiving vector
 * @returns {vec2} out
 */


function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {vec2} a vector to represent as a string
 * @returns {String} string representation of the vector
 */


function str(a) {
  return 'vec2(' + a[0] + ', ' + a[1] + ')';
}
/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */


function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */


function equals(a, b) {
  var a0 = a[0],
      a1 = a[1];
  var b0 = b[0],
      b1 = b[1];
  return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1));
}
/**
 * Alias for {@link vec2.length}
 * @function
 */


var len = length;
/**
 * Alias for {@link vec2.subtract}
 * @function
 */

exports.len = len;
var sub = subtract;
/**
 * Alias for {@link vec2.multiply}
 * @function
 */

exports.sub = sub;
var mul = multiply;
/**
 * Alias for {@link vec2.divide}
 * @function
 */

exports.mul = mul;
var div = divide;
/**
 * Alias for {@link vec2.distance}
 * @function
 */

exports.div = div;
var dist = distance;
/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */

exports.dist = dist;
var sqrDist = squaredDistance;
/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */

exports.sqrDist = sqrDist;
var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

exports.sqrLen = sqrLen;

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 2;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
    }

    return a;
  };
}();

exports.forEach = forEach;
},{"./common.js":"node_modules/gl-matrix/esm/common.js"}],"node_modules/gl-matrix/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vec4 = exports.vec3 = exports.vec2 = exports.quat2 = exports.quat = exports.mat4 = exports.mat3 = exports.mat2d = exports.mat2 = exports.glMatrix = void 0;

var glMatrix = _interopRequireWildcard(require("./common.js"));

exports.glMatrix = glMatrix;

var mat2 = _interopRequireWildcard(require("./mat2.js"));

exports.mat2 = mat2;

var mat2d = _interopRequireWildcard(require("./mat2d.js"));

exports.mat2d = mat2d;

var mat3 = _interopRequireWildcard(require("./mat3.js"));

exports.mat3 = mat3;

var mat4 = _interopRequireWildcard(require("./mat4.js"));

exports.mat4 = mat4;

var quat = _interopRequireWildcard(require("./quat.js"));

exports.quat = quat;

var quat2 = _interopRequireWildcard(require("./quat2.js"));

exports.quat2 = quat2;

var vec2 = _interopRequireWildcard(require("./vec2.js"));

exports.vec2 = vec2;

var vec3 = _interopRequireWildcard(require("./vec3.js"));

exports.vec3 = vec3;

var vec4 = _interopRequireWildcard(require("./vec4.js"));

exports.vec4 = vec4;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
},{"./common.js":"node_modules/gl-matrix/esm/common.js","./mat2.js":"node_modules/gl-matrix/esm/mat2.js","./mat2d.js":"node_modules/gl-matrix/esm/mat2d.js","./mat3.js":"node_modules/gl-matrix/esm/mat3.js","./mat4.js":"node_modules/gl-matrix/esm/mat4.js","./quat.js":"node_modules/gl-matrix/esm/quat.js","./quat2.js":"node_modules/gl-matrix/esm/quat2.js","./vec2.js":"node_modules/gl-matrix/esm/vec2.js","./vec3.js":"node_modules/gl-matrix/esm/vec3.js","./vec4.js":"node_modules/gl-matrix/esm/vec4.js"}],"src/common/input.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var ts_key_enum_1 = require("ts-key-enum");

var gl_matrix_1 = require("gl-matrix"); // This is a small helper class we created to manage the user input
// The input on webpages is received via event listeners only so this class add some listeners and collect the keyboard and mouse input to be accessed at any time
// This class is a work in progress so expect it to be enhanced in future labs


var Input =
/** @class */
function () {
  function Input(canvas) {
    var _this = this;

    this.firstMouseMove = true;
    this.pointerLocked = false;
    this.canvas = canvas;
    this.currentKeys = {};
    this.previousKeys = {};

    for (var key in ts_key_enum_1.Key) {
      this.currentKeys[key] = false;
      this.previousKeys[key] = false;
    }

    for (var ascii = 32; ascii < 127; ascii++) {
      var key = String.fromCharCode(ascii);
      this.currentKeys[key] = false;
      this.previousKeys[key] = false;
    }

    document.addEventListener("keydown", function (ev) {
      if (document.activeElement === canvas) {
        var key = ev.key;

        if (key.length == 1) {
          var code = key.charCodeAt(0);
          if (code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0)) key = key.toLowerCase();
        }

        _this.currentKeys[key] = true;

        switch (ev.key) {
          case ts_key_enum_1.Key.ArrowUp:
          case ts_key_enum_1.Key.ArrowDown:
          case ts_key_enum_1.Key.ArrowLeft:
          case ts_key_enum_1.Key.ArrowRight:
          case ' ':
            ev.preventDefault();
        }
      }
    });
    document.addEventListener("keyup", function (ev) {
      var key = ev.key;

      if (key.length == 1) {
        var code = key.charCodeAt(0);
        if (code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0)) key = key.toLowerCase();
      }

      _this.currentKeys[key] = false;
    });
    this.currentButtons = [false, false, false];
    this.previousButtons = [false, false, false];
    canvas.addEventListener("mousedown", function (ev) {
      canvas.focus();
      ev.preventDefault();
      _this.currentButtons[ev.button] = true;
    });
    canvas.addEventListener("mouseup", function (ev) {
      ev.preventDefault();
      _this.currentButtons[ev.button] = false;
    });
    this.currentMousePosition = gl_matrix_1.vec2.fromValues(0, 0);
    this.perviousMousePosition = gl_matrix_1.vec2.fromValues(0, 0);
    canvas.addEventListener("mousemove", function (ev) {
      ev.preventDefault();

      if (_this.pointerLocked) {
        _this.currentMousePosition[0] += ev.movementX;
        _this.currentMousePosition[1] += ev.movementY;
      } else {
        gl_matrix_1.vec2.set(_this.currentMousePosition, ev.pageX - canvas.offsetLeft, ev.pageY - canvas.offsetTop);
      }

      if (_this.firstMouseMove) {
        gl_matrix_1.vec2.copy(_this.perviousMousePosition, _this.currentMousePosition);
        _this.firstMouseMove = false;
      }
    });
    this.previousWheelPosition = gl_matrix_1.vec3.fromValues(0, 0, 0);
    this.currentWheelPosition = gl_matrix_1.vec3.fromValues(0, 0, 0);
    canvas.addEventListener("wheel", function (ev) {
      ev.preventDefault();
      _this.currentWheelPosition[0] += ev.deltaX;
      _this.currentWheelPosition[1] += ev.deltaY;
      _this.currentWheelPosition[2] += ev.deltaZ;
    });
    canvas.addEventListener("drag", function (ev) {
      ev.preventDefault();
    });
    canvas.addEventListener("dragend", function (ev) {
      ev.preventDefault();
    });
    canvas.addEventListener("dragenter", function (ev) {
      ev.preventDefault();
    });
    canvas.addEventListener("dragexit", function (ev) {
      ev.preventDefault();
    });
    canvas.addEventListener("dragleave", function (ev) {
      ev.preventDefault();
    });
    canvas.addEventListener("dragover", function (ev) {
      ev.preventDefault();
    });
    canvas.addEventListener("dragstart", function (ev) {
      ev.preventDefault();
    });
    canvas.addEventListener("drop", function (ev) {
      ev.preventDefault();
    });
    document.addEventListener("pointerlockchange", function () {
      _this.pointerLocked = document.pointerLockElement == canvas;
    }, false);
  }

  Input.prototype.update = function () {
    for (var key in ts_key_enum_1.Key) {
      this.previousKeys[key] = this.currentKeys[key];
    }

    for (var ascii = 32; ascii < 127; ascii++) {
      var key = String.fromCharCode(ascii);
      this.previousKeys[key] = this.currentKeys[key];
    }

    for (var button = 0; button < 3; button++) {
      this.previousButtons[button] = this.currentButtons[button];
    }

    gl_matrix_1.vec2.copy(this.perviousMousePosition, this.currentMousePosition);
    gl_matrix_1.vec3.copy(this.previousWheelPosition, this.currentWheelPosition);
  };

  Input.prototype.isKeyDown = function (key) {
    return this.currentKeys[key];
  };

  Input.prototype.isKeyUp = function (key) {
    return !this.currentKeys[key];
  };

  Input.prototype.isKeyJustDown = function (key) {
    return this.currentKeys[key] && !this.previousKeys[key];
  };

  Input.prototype.isKeyJustUp = function (key) {
    return !this.currentKeys[key] && this.previousKeys[key];
  };

  Input.prototype.isButtonDown = function (button) {
    return this.currentButtons[button];
  };

  Input.prototype.isButtonUp = function (button) {
    return !this.currentButtons[button];
  };

  Input.prototype.isButtonJustDown = function (button) {
    return this.currentButtons[button] && !this.previousButtons[button];
  };

  Input.prototype.isButtonJustUp = function (button) {
    return !this.currentButtons[button] && this.previousButtons[button];
  };

  Object.defineProperty(Input.prototype, "MousePosition", {
    get: function get() {
      return gl_matrix_1.vec2.copy(gl_matrix_1.vec2.create(), this.currentMousePosition);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Input.prototype, "MouseDelta", {
    get: function get() {
      return gl_matrix_1.vec2.sub(gl_matrix_1.vec2.create(), this.currentMousePosition, this.perviousMousePosition);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Input.prototype, "WheelPosition", {
    get: function get() {
      return gl_matrix_1.vec3.copy(gl_matrix_1.vec3.create(), this.currentWheelPosition);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Input.prototype, "WheelDelta", {
    get: function get() {
      return gl_matrix_1.vec3.sub(gl_matrix_1.vec3.create(), this.currentWheelPosition, this.previousWheelPosition);
    },
    enumerable: true,
    configurable: true
  });

  Input.prototype.requestPointerLock = function () {
    this.canvas.requestPointerLock();
  };

  Input.prototype.exitPointerLock = function () {
    document.exitPointerLock();
  };

  Input.prototype.isPointerLocked = function () {
    return this.pointerLocked;
  };

  return Input;
}();

exports.default = Input;
},{"ts-key-enum":"node_modules/ts-key-enum/dist/js/Key.enum.js","gl-matrix":"node_modules/gl-matrix/esm/index.js"}],"src/common/game.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var loader_1 = __importDefault(require("./loader")); // Used to load files from the web server


var input_1 = __importDefault(require("./input")); // Used to manage the user input
//This is the abstract base of all scenes


var Scene =
/** @class */
function () {
  function Scene(game) {
    this.game = game;
    this.gl = game.gl;
    this.contxt = game.contxt;
  }

  return Scene;
}();

exports.Scene = Scene; //This class create the WebGL2 context, manages the scenes and handles the game loop

var Game =
/** @class */
function () {
  function Game(canvas, score) {
    this.loader = new loader_1.default(); // A loader to read files from the webserver

    this.scenes = {}; // A dictionary of all available scenes

    this.currentScene = null; // The scene that is currently being drawn

    this.nextScene = null; // The scene that will replace the current scene after its files have been loaded

    this.nextSceneReady = false; // Whether the files requested by the next scene has been loaded or not 

    this.canvas = canvas;
    this.score = score;
    this.gl = this.canvas.getContext("webgl2", {
      preserveDrawingBuffer: true,
      alpha: true,
      antialias: true,
      depth: true,
      powerPreference: "high-performance",
      premultipliedAlpha: false,
      stencil: true // this will tell the browser that we want a stencil buffer

    }); // This command loads the WebGL2 context which we will use to draw

    this.scoree = 0;
    this.contxt = this.score.getContext('2d');
    this.input = new input_1.default(this.canvas);
    this.lastTick = performance.now();
    this.loop(performance.now()); // Start the game loop
  }

  Game.prototype.addScene = function (name, type) {
    this.scenes[name] = new type(this);
  };

  Game.prototype.addScenes = function (scenes) {
    for (var name in scenes) {
      this.addScene(name, scenes[name]);
    }
  };

  Game.prototype.startScene = function (name) {
    var _this = this;

    if (name in this.scenes) {
      this.nextScene = this.scenes[name];
      this.nextSceneReady = false;
      this.nextScene.load();
      this.loader.wait().then(function () {
        _this.nextSceneReady = true;
      }); // This will make the loader notify us when the files are ready
    } else {
      console.warn("Scene \"" + name + "\" not found");
    }
  };

  Game.prototype.loop = function (time) {
    var _this = this;

    requestAnimationFrame(function (time) {
      return _this.loop(time);
    }); // Tell the browser to call this function again when the next frame needs to be drawn

    if (this.nextScene != null && this.nextSceneReady) {
      // If there is a next scene and it is ready, replace the current scene with it.
      if (this.currentScene != null) this.currentScene.end(); // If there was an old scene, tell it to free its memory

      this.currentScene = this.nextScene;
      this.nextScene = null;
      this.currentScene.start(); // Tell the scene to initialize its objects
    }

    if (this.currentScene != null) {
      this.scoree += Math.round((time - this.lastTick) / 10);
      this.currentScene.draw(time - this.lastTick, time); // Tell the scene to draw itself
    }

    this.input.update(); // Update some information about the user input

    this.lastTick = time;
  };

  return Game;
}();

exports.default = Game;
},{"./loader":"src/common/loader.ts","./input":"src/common/input.ts"}],"src/common/shader-program.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
}); // This class is responsible for handling shaders for us
// Since this is a common operation in all of our scenes, we will write in a class to reuse it every where

var ShaderProgram =
/** @class */
function () {
  function ShaderProgram(gl) {
    this.gl = gl;
    this.program = this.gl.createProgram(); // Tell webgl to create an empty program (we will attach the shaders to it later)
  }

  ShaderProgram.prototype.dispose = function () {
    this.gl.deleteProgram(this.program); // Tell webgl to delete our program
  }; // This function compiles a shader from source and if the compilation was successful, it attaches it to the program
  // source: the source code of the shader
  // type: the type of the shader, it can be gl.VERTEX_SHADER or gl.FRAGMENT_SHADER


  ShaderProgram.prototype.attach = function (source, type) {
    var _a;

    var shader = this.gl.createShader(type); // Create an empty shader of the given type

    this.gl.shaderSource(shader, source); // Add the source code to the shader

    this.gl.compileShader(shader); // Now, we compile the shader

    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
      // If the shader failed to compile, we print the error messages, delete the shader and return 
      console.error("An error occurred compiling the " + (_a = {}, _a[this.gl.VERTEX_SHADER] = "vertex", _a[this.gl.FRAGMENT_SHADER] = "fragment", _a)[type] + " shader: " + this.gl.getShaderInfoLog(shader));
      this.gl.deleteShader(shader);
      return false;
    }

    this.gl.attachShader(this.program, shader); // If it compiled successfully, we attach it to the program

    this.gl.deleteShader(shader); // Now that the shader is attached, we don't need to keep its object anymore, so we delete it.

    return true;
  }; // After attaching all the shader we need for our program, we link the whole program


  ShaderProgram.prototype.link = function () {
    this.gl.linkProgram(this.program); // Tell webgl to link the programs

    if (!this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS)) {
      // Check if the linking failed (the shaders could be incompatible)
      console.error('Unable to initialize the shader program: ' + this.gl.getProgramInfoLog(this.program));
      return false;
    } else {
      return true;
    }
  };

  ShaderProgram.prototype.use = function () {
    this.gl.useProgram(this.program);
  }; //
  // Uniform Setters (For convenience)
  //
  // One Component Setters


  ShaderProgram.prototype.setUniform1f = function (name, x) {
    this.gl.uniform1f(this.gl.getUniformLocation(this.program, name), x);
  };

  ShaderProgram.prototype.setUniform1fv = function (name, data, srcOffset, srcLength) {
    this.gl.uniform1fv(this.gl.getUniformLocation(this.program, name), data, srcOffset, srcLength);
  };

  ShaderProgram.prototype.setUniform1i = function (name, x) {
    this.gl.uniform1i(this.gl.getUniformLocation(this.program, name), x);
  };

  ShaderProgram.prototype.setUniform1iv = function (name, data, srcOffset, srcLength) {
    this.gl.uniform1iv(this.gl.getUniformLocation(this.program, name), data, srcOffset, srcLength);
  };

  ShaderProgram.prototype.setUniform1ui = function (name, x) {
    this.gl.uniform1ui(this.gl.getUniformLocation(this.program, name), x);
  };

  ShaderProgram.prototype.setUniform1uiv = function (name, data, srcOffset, srcLength) {
    this.gl.uniform1uiv(this.gl.getUniformLocation(this.program, name), data, srcOffset, srcLength);
  }; // Two Component Setters


  ShaderProgram.prototype.setUniform2f = function (name, v) {
    this.gl.uniform2f(this.gl.getUniformLocation(this.program, name), v[0], v[1]);
  };

  ShaderProgram.prototype.setUniform2fv = function (name, data, srcOffset, srcLength) {
    this.gl.uniform2fv(this.gl.getUniformLocation(this.program, name), data, srcOffset, srcLength);
  };

  ShaderProgram.prototype.setUniform2i = function (name, v) {
    this.gl.uniform2i(this.gl.getUniformLocation(this.program, name), v[0], v[1]);
  };

  ShaderProgram.prototype.setUniform2iv = function (name, data, srcOffset, srcLength) {
    this.gl.uniform2iv(this.gl.getUniformLocation(this.program, name), data, srcOffset, srcLength);
  };

  ShaderProgram.prototype.setUniform2ui = function (name, v) {
    this.gl.uniform2ui(this.gl.getUniformLocation(this.program, name), v[0], v[1]);
  };

  ShaderProgram.prototype.setUniform2uiv = function (name, data, srcOffset, srcLength) {
    this.gl.uniform2uiv(this.gl.getUniformLocation(this.program, name), data, srcOffset, srcLength);
  }; // Three Component Setters


  ShaderProgram.prototype.setUniform3f = function (name, v) {
    this.gl.uniform3f(this.gl.getUniformLocation(this.program, name), v[0], v[1], v[2]);
  };

  ShaderProgram.prototype.setUniform3fv = function (name, data, srcOffset, srcLength) {
    this.gl.uniform3fv(this.gl.getUniformLocation(this.program, name), data, srcOffset, srcLength);
  };

  ShaderProgram.prototype.setUniform3i = function (name, v) {
    this.gl.uniform3i(this.gl.getUniformLocation(this.program, name), v[0], v[1], v[2]);
  };

  ShaderProgram.prototype.setUniform3iv = function (name, data, srcOffset, srcLength) {
    this.gl.uniform3iv(this.gl.getUniformLocation(this.program, name), data, srcOffset, srcLength);
  };

  ShaderProgram.prototype.setUniform3ui = function (name, v) {
    this.gl.uniform3ui(this.gl.getUniformLocation(this.program, name), v[0], v[1], v[2]);
  };

  ShaderProgram.prototype.setUniform3uiv = function (name, data, srcOffset, srcLength) {
    this.gl.uniform3uiv(this.gl.getUniformLocation(this.program, name), data, srcOffset, srcLength);
  }; // four Component Setters


  ShaderProgram.prototype.setUniform4f = function (name, v) {
    this.gl.uniform4f(this.gl.getUniformLocation(this.program, name), v[0], v[1], v[2], v[3]);
  };

  ShaderProgram.prototype.setUniform4fv = function (name, data, srcOffset, srcLength) {
    this.gl.uniform4fv(this.gl.getUniformLocation(this.program, name), data, srcOffset, srcLength);
  };

  ShaderProgram.prototype.setUniform4i = function (name, v) {
    this.gl.uniform4i(this.gl.getUniformLocation(this.program, name), v[0], v[1], v[2], v[3]);
  };

  ShaderProgram.prototype.setUniform4iv = function (name, data, srcOffset, srcLength) {
    this.gl.uniform4iv(this.gl.getUniformLocation(this.program, name), data, srcOffset, srcLength);
  };

  ShaderProgram.prototype.setUniform4ui = function (name, v) {
    this.gl.uniform4ui(this.gl.getUniformLocation(this.program, name), v[0], v[1], v[2], v[3]);
  };

  ShaderProgram.prototype.setUniform4uiv = function (name, data, srcOffset, srcLength) {
    this.gl.uniform4uiv(this.gl.getUniformLocation(this.program, name), data, srcOffset, srcLength);
  }; // Matrix Setters


  ShaderProgram.prototype.setUniformMatrix2fv = function (name, transpose, data, srcOffset, srcLength) {
    this.gl.uniformMatrix2fv(this.gl.getUniformLocation(this.program, name), transpose, data, srcOffset, srcLength);
  };

  ShaderProgram.prototype.setUniformMatrix2x3fv = function (name, transpose, data, srcOffset, srcLength) {
    this.gl.uniformMatrix2x3fv(this.gl.getUniformLocation(this.program, name), transpose, data, srcOffset, srcLength);
  };

  ShaderProgram.prototype.setUniformMatrix2x4fv = function (name, transpose, data, srcOffset, srcLength) {
    this.gl.uniformMatrix2x4fv(this.gl.getUniformLocation(this.program, name), transpose, data, srcOffset, srcLength);
  };

  ShaderProgram.prototype.setUniformMatrix3fv = function (name, transpose, data, srcOffset, srcLength) {
    this.gl.uniformMatrix3fv(this.gl.getUniformLocation(this.program, name), transpose, data, srcOffset, srcLength);
  };

  ShaderProgram.prototype.setUniformMatrix3x2fv = function (name, transpose, data, srcOffset, srcLength) {
    this.gl.uniformMatrix3x2fv(this.gl.getUniformLocation(this.program, name), transpose, data, srcOffset, srcLength);
  };

  ShaderProgram.prototype.setUniformMatrix3x4fv = function (name, transpose, data, srcOffset, srcLength) {
    this.gl.uniformMatrix3x4fv(this.gl.getUniformLocation(this.program, name), transpose, data, srcOffset, srcLength);
  };

  ShaderProgram.prototype.setUniformMatrix4fv = function (name, transpose, data, srcOffset, srcLength) {
    this.gl.uniformMatrix4fv(this.gl.getUniformLocation(this.program, name), transpose, data, srcOffset, srcLength);
  };

  ShaderProgram.prototype.setUniformMatrix4x2fv = function (name, transpose, data, srcOffset, srcLength) {
    this.gl.uniformMatrix4x2fv(this.gl.getUniformLocation(this.program, name), transpose, data, srcOffset, srcLength);
  };

  ShaderProgram.prototype.setUniformMatrix4x3fv = function (name, transpose, data, srcOffset, srcLength) {
    this.gl.uniformMatrix4x3fv(this.gl.getUniformLocation(this.program, name), transpose, data, srcOffset, srcLength);
  };

  return ShaderProgram;
}();

exports.default = ShaderProgram;
},{}],"src/common/mesh.ts":[function(require,module,exports) {
"use strict"; //This file contains a Mesh class (used to store Vertices and how to draw them)

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Mesh =
/** @class */
function () {
  // The constructor takes a WebGL context and a list of vertex attribute descriptors
  // It will get all the buffer names and create them then it will build the Vertex Array to read the attributes from them
  function Mesh(gl, descriptors) {
    this.gl = gl;
    this.descriptors = descriptors;
    this.VBOs = {};
    var bufferNames = Array.from(new Set(descriptors.map(function (desc) {
      return desc.buffer;
    })));

    for (var _i = 0, bufferNames_1 = bufferNames; _i < bufferNames_1.length; _i++) {
      var bufferName = bufferNames_1[_i];
      this.VBOs[bufferName] = this.gl.createBuffer();
    }

    this.EBO = this.gl.createBuffer();
    this.VAO = this.gl.createVertexArray();
    this.gl.bindVertexArray(this.VAO);

    for (var _a = 0, _b = this.descriptors; _a < _b.length; _a++) {
      var descriptor = _b[_a];
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.VBOs[descriptor.buffer]);
      this.gl.enableVertexAttribArray(descriptor.attributeLocation);
      this.gl.vertexAttribPointer(descriptor.attributeLocation, descriptor.size, descriptor.type, descriptor.normalized, descriptor.stride, descriptor.offset);
    }

    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.EBO);
    this.gl.bindVertexArray(null);
  } // Just a dispose variable to free memory


  Mesh.prototype.dispose = function () {
    this.gl.deleteVertexArray(this.VAO);
    this.gl.deleteBuffer(this.EBO);

    for (var bufferName in this.VBOs) {
      this.gl.deleteBuffer(this.VBOs[bufferName]);
    }

    this.VBOs = null;
  }; // We will use this to fill the vertex buffer data


  Mesh.prototype.setBufferData = function (bufferName, bufferData, usage) {
    if (bufferName in this.VBOs) {
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.VBOs[bufferName]);
      this.gl.bufferData(this.gl.ARRAY_BUFFER, bufferData, usage);
    } else {
      console.error("\"" + bufferName + "\" is not found in the buffers list");
    }
  }; // We will use this to fill the Elements Buffer data and know how many vertex we will draw


  Mesh.prototype.setElementsData = function (bufferData, usage) {
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.EBO);
    this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, bufferData, usage);
    this.elementCount = bufferData.length;
    if (bufferData instanceof Uint8Array || bufferData instanceof Uint8ClampedArray) this.elementType = this.gl.UNSIGNED_BYTE;else if (bufferData instanceof Uint16Array) this.elementType = this.gl.UNSIGNED_SHORT;else if (bufferData instanceof Uint32Array) this.elementType = this.gl.UNSIGNED_INT;
  }; // As the name says, this draws the mesh


  Mesh.prototype.draw = function (mode) {
    if (mode === void 0) {
      mode = this.gl.TRIANGLES;
    }

    this.gl.bindVertexArray(this.VAO);
    this.gl.drawElements(mode, this.elementCount, this.elementType, 0);
    this.gl.bindVertexArray(null);
  };

  return Mesh;
}();

exports.default = Mesh;
},{}],"node_modules/webgl-obj-loader/dist/webgl-obj-loader.min.js":[function(require,module,exports) {
var define;
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("OBJ",[],t):"object"==typeof exports?exports.OBJ=t():e.OBJ=t()}("undefined"!=typeof self?self:this,(function(){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var s=t[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(a,s,function(t){return e[t]}.bind(null,s));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}({"./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: Attribute, DuplicateAttributeException, Layout, Material, MaterialLibrary, Mesh, TYPES, downloadModels, downloadMeshes, initMeshBuffers, deleteMeshBuffers, version */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });\n/* harmony import */ var _mesh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mesh */ "./src/mesh.ts");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mesh", function() { return _mesh__WEBPACK_IMPORTED_MODULE_0__["default"]; });\n\n/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material */ "./src/material.ts");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Material", function() { return _material__WEBPACK_IMPORTED_MODULE_1__["Material"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialLibrary", function() { return _material__WEBPACK_IMPORTED_MODULE_1__["MaterialLibrary"]; });\n\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout */ "./src/layout.ts");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Attribute", function() { return _layout__WEBPACK_IMPORTED_MODULE_2__["Attribute"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DuplicateAttributeException", function() { return _layout__WEBPACK_IMPORTED_MODULE_2__["DuplicateAttributeException"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return _layout__WEBPACK_IMPORTED_MODULE_2__["Layout"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TYPES", function() { return _layout__WEBPACK_IMPORTED_MODULE_2__["TYPES"]; });\n\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "downloadModels", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["downloadModels"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "downloadMeshes", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["downloadMeshes"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initMeshBuffers", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["initMeshBuffers"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteMeshBuffers", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["deleteMeshBuffers"]; });\n\n\n\n\n\nconst version = "2.0.3";\n/**\n * @namespace\n */\n\n\n\n//# sourceURL=webpack://OBJ/./src/index.ts?')},"./src/layout.ts":
/*!***********************!*\
  !*** ./src/layout.ts ***!
  \***********************/
/*! exports provided: TYPES, DuplicateAttributeException, Attribute, Layout */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPES", function() { return TYPES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuplicateAttributeException", function() { return DuplicateAttributeException; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Attribute", function() { return Attribute; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });\nvar TYPES;\n(function (TYPES) {\n    TYPES["BYTE"] = "BYTE";\n    TYPES["UNSIGNED_BYTE"] = "UNSIGNED_BYTE";\n    TYPES["SHORT"] = "SHORT";\n    TYPES["UNSIGNED_SHORT"] = "UNSIGNED_SHORT";\n    TYPES["FLOAT"] = "FLOAT";\n})(TYPES || (TYPES = {}));\n/**\n * An exception for when two or more of the same attributes are found in the\n * same layout.\n * @private\n */\nclass DuplicateAttributeException extends Error {\n    /**\n     * Create a DuplicateAttributeException\n     * @param {Attribute} attribute - The attribute that was found more than\n     *        once in the {@link Layout}\n     */\n    constructor(attribute) {\n        super(`found duplicate attribute: ${attribute.key}`);\n    }\n}\n/**\n * Represents how a vertex attribute should be packed into an buffer.\n * @private\n */\nclass Attribute {\n    /**\n     * Create an attribute. Do not call this directly, use the predefined\n     * constants.\n     * @param {string} key - The name of this attribute as if it were a key in\n     *        an Object. Use the camel case version of the upper snake case\n     *        const name.\n     * @param {number} size - The number of components per vertex attribute.\n     *        Must be 1, 2, 3, or 4.\n     * @param {string} type - The data type of each component for this\n     *        attribute. Possible values:<br/>\n     *        "BYTE": signed 8-bit integer, with values in [-128, 127]<br/>\n     *        "SHORT": signed 16-bit integer, with values in\n     *            [-32768, 32767]<br/>\n     *        "UNSIGNED_BYTE": unsigned 8-bit integer, with values in\n     *            [0, 255]<br/>\n     *        "UNSIGNED_SHORT": unsigned 16-bit integer, with values in\n     *            [0, 65535]<br/>\n     *        "FLOAT": 32-bit floating point number\n     * @param {boolean} normalized - Whether integer data values should be\n     *        normalized when being casted to a float.<br/>\n     *        If true, signed integers are normalized to [-1, 1].<br/>\n     *        If true, unsigned integers are normalized to [0, 1].<br/>\n     *        For type "FLOAT", this parameter has no effect.\n     */\n    constructor(key, size, type, normalized = false) {\n        this.key = key;\n        this.size = size;\n        this.type = type;\n        this.normalized = normalized;\n        switch (type) {\n            case "BYTE":\n            case "UNSIGNED_BYTE":\n                this.sizeOfType = 1;\n                break;\n            case "SHORT":\n            case "UNSIGNED_SHORT":\n                this.sizeOfType = 2;\n                break;\n            case "FLOAT":\n                this.sizeOfType = 4;\n                break;\n            default:\n                throw new Error(`Unknown gl type: ${type}`);\n        }\n        this.sizeInBytes = this.sizeOfType * size;\n    }\n}\n/**\n * A class to represent the memory layout for a vertex attribute array. Used by\n * {@link Mesh}\'s TBD(...) method to generate a packed array from mesh data.\n * <p>\n * Layout can sort of be thought of as a C-style struct declaration.\n * {@link Mesh}\'s TBD(...) method will use the {@link Layout} instance to\n * pack an array in the given attribute order.\n * <p>\n * Layout also is very helpful when calling a WebGL context\'s\n * <code>vertexAttribPointer</code> method. If you\'ve created a buffer using\n * a Layout instance, then the same Layout instance can be used to determine\n * the size, type, normalized, stride, and offset parameters for\n * <code>vertexAttribPointer</code>.\n * <p>\n * For example:\n * <pre><code>\n *\n * const index = glctx.getAttribLocation(shaderProgram, "pos");\n * glctx.vertexAttribPointer(\n *   layout.position.size,\n *   glctx[layout.position.type],\n *   layout.position.normalized,\n *   layout.position.stride,\n *   layout.position.offset);\n * </code></pre>\n * @see {@link Mesh}\n */\nclass Layout {\n    /**\n     * Create a Layout object. This constructor will throw if any duplicate\n     * attributes are given.\n     * @param {Array} ...attributes - An ordered list of attributes that\n     *        describe the desired memory layout for each vertex attribute.\n     *        <p>\n     *\n     * @see {@link Mesh}\n     */\n    constructor(...attributes) {\n        this.attributes = attributes;\n        this.attributeMap = {};\n        let offset = 0;\n        let maxStrideMultiple = 0;\n        for (const attribute of attributes) {\n            if (this.attributeMap[attribute.key]) {\n                throw new DuplicateAttributeException(attribute);\n            }\n            // Add padding to satisfy WebGL\'s requirement that all\n            // vertexAttribPointer calls have an offset that is a multiple of\n            // the type size.\n            if (offset % attribute.sizeOfType !== 0) {\n                offset += attribute.sizeOfType - (offset % attribute.sizeOfType);\n                console.warn("Layout requires padding before " + attribute.key + " attribute");\n            }\n            this.attributeMap[attribute.key] = {\n                attribute: attribute,\n                size: attribute.size,\n                type: attribute.type,\n                normalized: attribute.normalized,\n                offset: offset,\n            };\n            offset += attribute.sizeInBytes;\n            maxStrideMultiple = Math.max(maxStrideMultiple, attribute.sizeOfType);\n        }\n        // Add padding to the end to satisfy WebGL\'s requirement that all\n        // vertexAttribPointer calls have a stride that is a multiple of the\n        // type size. Because we\'re putting differently sized attributes into\n        // the same buffer, it must be padded to a multiple of the largest\n        // type size.\n        if (offset % maxStrideMultiple !== 0) {\n            offset += maxStrideMultiple - (offset % maxStrideMultiple);\n            console.warn("Layout requires padding at the back");\n        }\n        this.stride = offset;\n        for (const attribute of attributes) {\n            this.attributeMap[attribute.key].stride = this.stride;\n        }\n    }\n}\n// Geometry attributes\n/**\n * Attribute layout to pack a vertex\'s x, y, & z as floats\n *\n * @see {@link Layout}\n */\nLayout.POSITION = new Attribute("position", 3, TYPES.FLOAT);\n/**\n * Attribute layout to pack a vertex\'s normal\'s x, y, & z as floats\n *\n * @see {@link Layout}\n */\nLayout.NORMAL = new Attribute("normal", 3, TYPES.FLOAT);\n/**\n * Attribute layout to pack a vertex\'s normal\'s x, y, & z as floats.\n * <p>\n * This value will be computed on-the-fly based on the texture coordinates.\n * If no texture coordinates are available, the generated value will default to\n * 0, 0, 0.\n *\n * @see {@link Layout}\n */\nLayout.TANGENT = new Attribute("tangent", 3, TYPES.FLOAT);\n/**\n * Attribute layout to pack a vertex\'s normal\'s bitangent x, y, & z as floats.\n * <p>\n * This value will be computed on-the-fly based on the texture coordinates.\n * If no texture coordinates are available, the generated value will default to\n * 0, 0, 0.\n * @see {@link Layout}\n */\nLayout.BITANGENT = new Attribute("bitangent", 3, TYPES.FLOAT);\n/**\n * Attribute layout to pack a vertex\'s texture coordinates\' u & v as floats\n *\n * @see {@link Layout}\n */\nLayout.UV = new Attribute("uv", 2, TYPES.FLOAT);\n// Material attributes\n/**\n * Attribute layout to pack an unsigned short to be interpreted as a the index\n * into a {@link Mesh}\'s materials list.\n * <p>\n * The intention of this value is to send all of the {@link Mesh}\'s materials\n * into multiple shader uniforms and then reference the current one by this\n * vertex attribute.\n * <p>\n * example glsl code:\n *\n * <pre><code>\n *  // this is bound using MATERIAL_INDEX\n *  attribute int materialIndex;\n *\n *  struct Material {\n *    vec3 diffuse;\n *    vec3 specular;\n *    vec3 specularExponent;\n *  };\n *\n *  uniform Material materials[MAX_MATERIALS];\n *\n *  // ...\n *\n *  vec3 diffuse = materials[materialIndex];\n *\n * </code></pre>\n * TODO: More description & test to make sure subscripting by attributes even\n * works for webgl\n *\n * @see {@link Layout}\n */\nLayout.MATERIAL_INDEX = new Attribute("materialIndex", 1, TYPES.SHORT);\nLayout.MATERIAL_ENABLED = new Attribute("materialEnabled", 1, TYPES.UNSIGNED_SHORT);\nLayout.AMBIENT = new Attribute("ambient", 3, TYPES.FLOAT);\nLayout.DIFFUSE = new Attribute("diffuse", 3, TYPES.FLOAT);\nLayout.SPECULAR = new Attribute("specular", 3, TYPES.FLOAT);\nLayout.SPECULAR_EXPONENT = new Attribute("specularExponent", 3, TYPES.FLOAT);\nLayout.EMISSIVE = new Attribute("emissive", 3, TYPES.FLOAT);\nLayout.TRANSMISSION_FILTER = new Attribute("transmissionFilter", 3, TYPES.FLOAT);\nLayout.DISSOLVE = new Attribute("dissolve", 1, TYPES.FLOAT);\nLayout.ILLUMINATION = new Attribute("illumination", 1, TYPES.UNSIGNED_SHORT);\nLayout.REFRACTION_INDEX = new Attribute("refractionIndex", 1, TYPES.FLOAT);\nLayout.SHARPNESS = new Attribute("sharpness", 1, TYPES.FLOAT);\nLayout.MAP_DIFFUSE = new Attribute("mapDiffuse", 1, TYPES.SHORT);\nLayout.MAP_AMBIENT = new Attribute("mapAmbient", 1, TYPES.SHORT);\nLayout.MAP_SPECULAR = new Attribute("mapSpecular", 1, TYPES.SHORT);\nLayout.MAP_SPECULAR_EXPONENT = new Attribute("mapSpecularExponent", 1, TYPES.SHORT);\nLayout.MAP_DISSOLVE = new Attribute("mapDissolve", 1, TYPES.SHORT);\nLayout.ANTI_ALIASING = new Attribute("antiAliasing", 1, TYPES.UNSIGNED_SHORT);\nLayout.MAP_BUMP = new Attribute("mapBump", 1, TYPES.SHORT);\nLayout.MAP_DISPLACEMENT = new Attribute("mapDisplacement", 1, TYPES.SHORT);\nLayout.MAP_DECAL = new Attribute("mapDecal", 1, TYPES.SHORT);\nLayout.MAP_EMISSIVE = new Attribute("mapEmissive", 1, TYPES.SHORT);\n\n\n//# sourceURL=webpack://OBJ/./src/layout.ts?')},"./src/material.ts":
/*!*************************!*\
  !*** ./src/material.ts ***!
  \*************************/
/*! exports provided: Material, MaterialLibrary */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Material", function() { return Material; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialLibrary", function() { return MaterialLibrary; });\n/**\n * The Material class.\n */\nclass Material {\n    constructor(name) {\n        this.name = name;\n        /**\n         * Constructor\n         * @param {String} name the unique name of the material\n         */\n        // The values for the following attibutes\n        // are an array of R, G, B normalized values.\n        // Ka - Ambient Reflectivity\n        this.ambient = [0, 0, 0];\n        // Kd - Defuse Reflectivity\n        this.diffuse = [0, 0, 0];\n        // Ks\n        this.specular = [0, 0, 0];\n        // Ke\n        this.emissive = [0, 0, 0];\n        // Tf\n        this.transmissionFilter = [0, 0, 0];\n        // d\n        this.dissolve = 0;\n        // valid range is between 0 and 1000\n        this.specularExponent = 0;\n        // either d or Tr; valid values are normalized\n        this.transparency = 0;\n        // illum - the enum of the illumination model to use\n        this.illumination = 0;\n        // Ni - Set to "normal" (air).\n        this.refractionIndex = 1;\n        // sharpness\n        this.sharpness = 0;\n        // map_Kd\n        this.mapDiffuse = emptyTextureOptions();\n        // map_Ka\n        this.mapAmbient = emptyTextureOptions();\n        // map_Ks\n        this.mapSpecular = emptyTextureOptions();\n        // map_Ns\n        this.mapSpecularExponent = emptyTextureOptions();\n        // map_d\n        this.mapDissolve = emptyTextureOptions();\n        // map_aat\n        this.antiAliasing = false;\n        // map_bump or bump\n        this.mapBump = emptyTextureOptions();\n        // disp\n        this.mapDisplacement = emptyTextureOptions();\n        // decal\n        this.mapDecal = emptyTextureOptions();\n        // map_Ke\n        this.mapEmissive = emptyTextureOptions();\n        // refl - when the reflection type is a cube, there will be multiple refl\n        //        statements for each side of the cube. If it\'s a spherical\n        //        reflection, there should only ever be one.\n        this.mapReflections = [];\n    }\n}\nconst SENTINEL_MATERIAL = new Material("sentinel");\n/**\n * https://en.wikipedia.org/wiki/Wavefront_.obj_file\n * http://paulbourke.net/dataformats/mtl/\n */\nclass MaterialLibrary {\n    constructor(data) {\n        this.data = data;\n        /**\n         * Constructs the Material Parser\n         * @param mtlData the MTL file contents\n         */\n        this.currentMaterial = SENTINEL_MATERIAL;\n        this.materials = {};\n        this.parse();\n    }\n    /* eslint-disable camelcase */\n    /* the function names here disobey camelCase conventions\n     to make parsing/routing easier. see the parse function\n     documentation for more information. */\n    /**\n     * Creates a new Material object and adds to the registry.\n     * @param tokens the tokens associated with the directive\n     */\n    parse_newmtl(tokens) {\n        const name = tokens[0];\n        // console.info(\'Parsing new Material:\', name);\n        this.currentMaterial = new Material(name);\n        this.materials[name] = this.currentMaterial;\n    }\n    /**\n     * See the documenation for parse_Ka below for a better understanding.\n     *\n     * Given a list of possible color tokens, returns an array of R, G, and B\n     * color values.\n     *\n     * @param tokens the tokens associated with the directive\n     * @return {*} a 3 element array containing the R, G, and B values\n     * of the color.\n     */\n    parseColor(tokens) {\n        if (tokens[0] == "spectral") {\n            throw new Error("The MTL parser does not support spectral curve files. You will " +\n                "need to convert the MTL colors to either RGB or CIEXYZ.");\n        }\n        if (tokens[0] == "xyz") {\n            throw new Error("The MTL parser does not currently support XYZ colors. Either convert the " +\n                "XYZ values to RGB or create an issue to add support for XYZ");\n        }\n        // from my understanding of the spec, RGB values at this point\n        // will either be 3 floats or exactly 1 float, so that\'s the check\n        // that i\'m going to perform here\n        if (tokens.length == 3) {\n            const [x, y, z] = tokens;\n            return [parseFloat(x), parseFloat(y), parseFloat(z)];\n        }\n        // Since tokens at this point has a length of 3, we\'re going to assume\n        // it\'s exactly 1, skipping the check for 2.\n        const value = parseFloat(tokens[0]);\n        // in this case, all values are equivalent\n        return [value, value, value];\n    }\n    /**\n     * Parse the ambient reflectivity\n     *\n     * A Ka directive can take one of three forms:\n     *   - Ka r g b\n     *   - Ka spectral file.rfl\n     *   - Ka xyz x y z\n     * These three forms are mutually exclusive in that only one\n     * declaration can exist per material. It is considered a syntax\n     * error otherwise.\n     *\n     * The "Ka" form specifies the ambient reflectivity using RGB values.\n     * The "g" and "b" values are optional. If only the "r" value is\n     * specified, then the "g" and "b" values are assigned the value of\n     * "r". Values are normally in the range 0.0 to 1.0. Values outside\n     * of this range increase or decrease the reflectivity accordingly.\n     *\n     * The "Ka spectral" form specifies the ambient reflectivity using a\n     * spectral curve. "file.rfl" is the name of the ".rfl" file containing\n     * the curve data. "factor" is an optional argument which is a multiplier\n     * for the values in the .rfl file and defaults to 1.0 if not specified.\n     *\n     * The "Ka xyz" form specifies the ambient reflectivity using CIEXYZ values.\n     * "x y z" are the values of the CIEXYZ color space. The "y" and "z" arguments\n     * are optional and take on the value of the "x" component if only "x" is\n     * specified. The "x y z" values are normally in the range of 0.0 to 1.0 and\n     * increase or decrease ambient reflectivity accordingly outside of that\n     * range.\n     *\n     * @param tokens the tokens associated with the directive\n     */\n    parse_Ka(tokens) {\n        this.currentMaterial.ambient = this.parseColor(tokens);\n    }\n    /**\n     * Diffuse Reflectivity\n     *\n     * Similar to the Ka directive. Simply replace "Ka" with "Kd" and the rules\n     * are the same\n     *\n     * @param tokens the tokens associated with the directive\n     */\n    parse_Kd(tokens) {\n        this.currentMaterial.diffuse = this.parseColor(tokens);\n    }\n    /**\n     * Spectral Reflectivity\n     *\n     * Similar to the Ka directive. Simply replace "Ks" with "Kd" and the rules\n     * are the same\n     *\n     * @param tokens the tokens associated with the directive\n     */\n    parse_Ks(tokens) {\n        this.currentMaterial.specular = this.parseColor(tokens);\n    }\n    /**\n     * Emissive\n     *\n     * The amount and color of light emitted by the object.\n     *\n     * @param tokens the tokens associated with the directive\n     */\n    parse_Ke(tokens) {\n        this.currentMaterial.emissive = this.parseColor(tokens);\n    }\n    /**\n     * Transmission Filter\n     *\n     * Any light passing through the object is filtered by the transmission\n     * filter, which only allows specific colors to pass through. For example, Tf\n     * 0 1 0 allows all of the green to pass through and filters out all of the\n     * red and blue.\n     *\n     * Similar to the Ka directive. Simply replace "Ks" with "Tf" and the rules\n     * are the same\n     *\n     * @param tokens the tokens associated with the directive\n     */\n    parse_Tf(tokens) {\n        this.currentMaterial.transmissionFilter = this.parseColor(tokens);\n    }\n    /**\n     * Specifies the dissolve for the current material.\n     *\n     * Statement: d [-halo] `factor`\n     *\n     * Example: "d 0.5"\n     *\n     * The factor is the amount this material dissolves into the background. A\n     * factor of 1.0 is fully opaque. This is the default when a new material is\n     * created. A factor of 0.0 is fully dissolved (completely transparent).\n     *\n     * Unlike a real transparent material, the dissolve does not depend upon\n     * material thickness nor does it have any spectral character. Dissolve works\n     * on all illumination models.\n     *\n     * The dissolve statement allows for an optional "-halo" flag which indicates\n     * that a dissolve is dependent on the surface orientation relative to the\n     * viewer. For example, a sphere with the following dissolve, "d -halo 0.0",\n     * will be fully dissolved at its center and will appear gradually more opaque\n     * toward its edge.\n     *\n     * "factor" is the minimum amount of dissolve applied to the material. The\n     * amount of dissolve will vary between 1.0 (fully opaque) and the specified\n     * "factor". The formula is:\n     *\n     *    dissolve = 1.0 - (N*v)(1.0-factor)\n     *\n     * @param tokens the tokens associated with the directive\n     */\n    parse_d(tokens) {\n        // this ignores the -halo option as I can\'t find any documentation on what\n        // it\'s supposed to be.\n        this.currentMaterial.dissolve = parseFloat(tokens.pop() || "0");\n    }\n    /**\n     * The "illum" statement specifies the illumination model to use in the\n     * material. Illumination models are mathematical equations that represent\n     * various material lighting and shading effects.\n     *\n     * The illumination number can be a number from 0 to 10. The following are\n     * the list of illumination enumerations and their summaries:\n     * 0. Color on and Ambient off\n     * 1. Color on and Ambient on\n     * 2. Highlight on\n     * 3. Reflection on and Ray trace on\n     * 4. Transparency: Glass on, Reflection: Ray trace on\n     * 5. Reflection: Fresnel on and Ray trace on\n     * 6. Transparency: Refraction on, Reflection: Fresnel off and Ray trace on\n     * 7. Transparency: Refraction on, Reflection: Fresnel on and Ray trace on\n     * 8. Reflection on and Ray trace off\n     * 9. Transparency: Glass on, Reflection: Ray trace off\n     * 10. Casts shadows onto invisible surfaces\n     *\n     * Example: "illum 2" to specify the "Highlight on" model\n     *\n     * @param tokens the tokens associated with the directive\n     */\n    parse_illum(tokens) {\n        this.currentMaterial.illumination = parseInt(tokens[0]);\n    }\n    /**\n     * Optical Density (AKA Index of Refraction)\n     *\n     * Statement: Ni `index`\n     *\n     * Example: Ni 1.0\n     *\n     * Specifies the optical density for the surface. `index` is the value\n     * for the optical density. The values can range from 0.001 to 10.  A value of\n     * 1.0 means that light does not bend as it passes through an object.\n     * Increasing the optical_density increases the amount of bending. Glass has\n     * an index of refraction of about 1.5. Values of less than 1.0 produce\n     * bizarre results and are not recommended\n     *\n     * @param tokens the tokens associated with the directive\n     */\n    parse_Ni(tokens) {\n        this.currentMaterial.refractionIndex = parseFloat(tokens[0]);\n    }\n    /**\n     * Specifies the specular exponent for the current material. This defines the\n     * focus of the specular highlight.\n     *\n     * Statement: Ns `exponent`\n     *\n     * Example: "Ns 250"\n     *\n     * `exponent` is the value for the specular exponent. A high exponent results\n     * in a tight, concentrated highlight. Ns Values normally range from 0 to\n     * 1000.\n     *\n     * @param tokens the tokens associated with the directive\n     */\n    parse_Ns(tokens) {\n        this.currentMaterial.specularExponent = parseInt(tokens[0]);\n    }\n    /**\n     * Specifies the sharpness of the reflections from the local reflection map.\n     *\n     * Statement: sharpness `value`\n     *\n     * Example: "sharpness 100"\n     *\n     * If a material does not have a local reflection map defined in its material\n     * defintions, sharpness will apply to the global reflection map defined in\n     * PreView.\n     *\n     * `value` can be a number from 0 to 1000. The default is 60. A high value\n     * results in a clear reflection of objects in the reflection map.\n     *\n     * Tip: sharpness values greater than 100 introduce aliasing effects in\n     * flat surfaces that are viewed at a sharp angle.\n     *\n     * @param tokens the tokens associated with the directive\n     */\n    parse_sharpness(tokens) {\n        this.currentMaterial.sharpness = parseInt(tokens[0]);\n    }\n    /**\n     * Parses the -cc flag and updates the options object with the values.\n     *\n     * @param values the values passed to the -cc flag\n     * @param options the Object of all image options\n     */\n    parse_cc(values, options) {\n        options.colorCorrection = values[0] == "on";\n    }\n    /**\n     * Parses the -blendu flag and updates the options object with the values.\n     *\n     * @param values the values passed to the -blendu flag\n     * @param options the Object of all image options\n     */\n    parse_blendu(values, options) {\n        options.horizontalBlending = values[0] == "on";\n    }\n    /**\n     * Parses the -blendv flag and updates the options object with the values.\n     *\n     * @param values the values passed to the -blendv flag\n     * @param options the Object of all image options\n     */\n    parse_blendv(values, options) {\n        options.verticalBlending = values[0] == "on";\n    }\n    /**\n     * Parses the -boost flag and updates the options object with the values.\n     *\n     * @param values the values passed to the -boost flag\n     * @param options the Object of all image options\n     */\n    parse_boost(values, options) {\n        options.boostMipMapSharpness = parseFloat(values[0]);\n    }\n    /**\n     * Parses the -mm flag and updates the options object with the values.\n     *\n     * @param values the values passed to the -mm flag\n     * @param options the Object of all image options\n     */\n    parse_mm(values, options) {\n        options.modifyTextureMap.brightness = parseFloat(values[0]);\n        options.modifyTextureMap.contrast = parseFloat(values[1]);\n    }\n    /**\n     * Parses and sets the -o, -s, and -t  u, v, and w values\n     *\n     * @param values the values passed to the -o, -s, -t flag\n     * @param {Object} option the Object of either the -o, -s, -t option\n     * @param {Integer} defaultValue the Object of all image options\n     */\n    parse_ost(values, option, defaultValue) {\n        while (values.length < 3) {\n            values.push(defaultValue.toString());\n        }\n        option.u = parseFloat(values[0]);\n        option.v = parseFloat(values[1]);\n        option.w = parseFloat(values[2]);\n    }\n    /**\n     * Parses the -o flag and updates the options object with the values.\n     *\n     * @param values the values passed to the -o flag\n     * @param options the Object of all image options\n     */\n    parse_o(values, options) {\n        this.parse_ost(values, options.offset, 0);\n    }\n    /**\n     * Parses the -s flag and updates the options object with the values.\n     *\n     * @param values the values passed to the -s flag\n     * @param options the Object of all image options\n     */\n    parse_s(values, options) {\n        this.parse_ost(values, options.scale, 1);\n    }\n    /**\n     * Parses the -t flag and updates the options object with the values.\n     *\n     * @param values the values passed to the -t flag\n     * @param options the Object of all image options\n     */\n    parse_t(values, options) {\n        this.parse_ost(values, options.turbulence, 0);\n    }\n    /**\n     * Parses the -texres flag and updates the options object with the values.\n     *\n     * @param values the values passed to the -texres flag\n     * @param options the Object of all image options\n     */\n    parse_texres(values, options) {\n        options.textureResolution = parseFloat(values[0]);\n    }\n    /**\n     * Parses the -clamp flag and updates the options object with the values.\n     *\n     * @param values the values passed to the -clamp flag\n     * @param options the Object of all image options\n     */\n    parse_clamp(values, options) {\n        options.clamp = values[0] == "on";\n    }\n    /**\n     * Parses the -bm flag and updates the options object with the values.\n     *\n     * @param values the values passed to the -bm flag\n     * @param options the Object of all image options\n     */\n    parse_bm(values, options) {\n        options.bumpMultiplier = parseFloat(values[0]);\n    }\n    /**\n     * Parses the -imfchan flag and updates the options object with the values.\n     *\n     * @param values the values passed to the -imfchan flag\n     * @param options the Object of all image options\n     */\n    parse_imfchan(values, options) {\n        options.imfChan = values[0];\n    }\n    /**\n     * This only exists for relection maps and denotes the type of reflection.\n     *\n     * @param values the values passed to the -type flag\n     * @param options the Object of all image options\n     */\n    parse_type(values, options) {\n        options.reflectionType = values[0];\n    }\n    /**\n     * Parses the texture\'s options and returns an options object with the info\n     *\n     * @param tokens all of the option tokens to pass to the texture\n     * @return {Object} a complete object of objects to apply to the texture\n     */\n    parseOptions(tokens) {\n        const options = emptyTextureOptions();\n        let option;\n        let values;\n        const optionsToValues = {};\n        tokens.reverse();\n        while (tokens.length) {\n            // token is guaranteed to exists here, hence the explicit "as"\n            const token = tokens.pop();\n            if (token.startsWith("-")) {\n                option = token.substr(1);\n                optionsToValues[option] = [];\n            }\n            else if (option) {\n                optionsToValues[option].push(token);\n            }\n        }\n        for (option in optionsToValues) {\n            if (!optionsToValues.hasOwnProperty(option)) {\n                continue;\n            }\n            values = optionsToValues[option];\n            const optionMethod = this[`parse_${option}`];\n            if (optionMethod) {\n                optionMethod.bind(this)(values, options);\n            }\n        }\n        return options;\n    }\n    /**\n     * Parses the given texture map line.\n     *\n     * @param tokens all of the tokens representing the texture\n     * @return a complete object of objects to apply to the texture\n     */\n    parseMap(tokens) {\n        // according to wikipedia:\n        // (https://en.wikipedia.org/wiki/Wavefront_.obj_file#Vendor_specific_alterations)\n        // there is at least one vendor that places the filename before the options\n        // rather than after (which is to spec). All options start with a \'-\'\n        // so if the first token doesn\'t start with a \'-\', we\'re going to assume\n        // it\'s the name of the map file.\n        let optionsString;\n        let filename = "";\n        if (!tokens[0].startsWith("-")) {\n            [filename, ...optionsString] = tokens;\n        }\n        else {\n            filename = tokens.pop();\n            optionsString = tokens;\n        }\n        const options = this.parseOptions(optionsString);\n        options.filename = filename.replace(/\\\\/g, "/");\n        return options;\n    }\n    /**\n     * Parses the ambient map.\n     *\n     * @param tokens list of tokens for the map_Ka direcive\n     */\n    parse_map_Ka(tokens) {\n        this.currentMaterial.mapAmbient = this.parseMap(tokens);\n    }\n    /**\n     * Parses the diffuse map.\n     *\n     * @param tokens list of tokens for the map_Kd direcive\n     */\n    parse_map_Kd(tokens) {\n        this.currentMaterial.mapDiffuse = this.parseMap(tokens);\n    }\n    /**\n     * Parses the specular map.\n     *\n     * @param tokens list of tokens for the map_Ks direcive\n     */\n    parse_map_Ks(tokens) {\n        this.currentMaterial.mapSpecular = this.parseMap(tokens);\n    }\n    /**\n     * Parses the emissive map.\n     *\n     * @param tokens list of tokens for the map_Ke direcive\n     */\n    parse_map_Ke(tokens) {\n        this.currentMaterial.mapEmissive = this.parseMap(tokens);\n    }\n    /**\n     * Parses the specular exponent map.\n     *\n     * @param tokens list of tokens for the map_Ns direcive\n     */\n    parse_map_Ns(tokens) {\n        this.currentMaterial.mapSpecularExponent = this.parseMap(tokens);\n    }\n    /**\n     * Parses the dissolve map.\n     *\n     * @param tokens list of tokens for the map_d direcive\n     */\n    parse_map_d(tokens) {\n        this.currentMaterial.mapDissolve = this.parseMap(tokens);\n    }\n    /**\n     * Parses the anti-aliasing option.\n     *\n     * @param tokens list of tokens for the map_aat direcive\n     */\n    parse_map_aat(tokens) {\n        this.currentMaterial.antiAliasing = tokens[0] == "on";\n    }\n    /**\n     * Parses the bump map.\n     *\n     * @param tokens list of tokens for the map_bump direcive\n     */\n    parse_map_bump(tokens) {\n        this.currentMaterial.mapBump = this.parseMap(tokens);\n    }\n    /**\n     * Parses the bump map.\n     *\n     * @param tokens list of tokens for the bump direcive\n     */\n    parse_bump(tokens) {\n        this.parse_map_bump(tokens);\n    }\n    /**\n     * Parses the disp map.\n     *\n     * @param tokens list of tokens for the disp direcive\n     */\n    parse_disp(tokens) {\n        this.currentMaterial.mapDisplacement = this.parseMap(tokens);\n    }\n    /**\n     * Parses the decal map.\n     *\n     * @param tokens list of tokens for the map_decal direcive\n     */\n    parse_decal(tokens) {\n        this.currentMaterial.mapDecal = this.parseMap(tokens);\n    }\n    /**\n     * Parses the refl map.\n     *\n     * @param tokens list of tokens for the refl direcive\n     */\n    parse_refl(tokens) {\n        this.currentMaterial.mapReflections.push(this.parseMap(tokens));\n    }\n    /**\n     * Parses the MTL file.\n     *\n     * Iterates line by line parsing each MTL directive.\n     *\n     * This function expects the first token in the line\n     * to be a valid MTL directive. That token is then used\n     * to try and run a method on this class. parse_[directive]\n     * E.g., the `newmtl` directive would try to call the method\n     * parse_newmtl. Each parsing function takes in the remaining\n     * list of tokens and updates the currentMaterial class with\n     * the attributes provided.\n     */\n    parse() {\n        const lines = this.data.split(/\\r?\\n/);\n        for (let line of lines) {\n            line = line.trim();\n            if (!line || line.startsWith("#")) {\n                continue;\n            }\n            const [directive, ...tokens] = line.split(/\\s/);\n            const parseMethod = this[`parse_${directive}`];\n            if (!parseMethod) {\n                console.warn(`Don\'t know how to parse the directive: "${directive}"`);\n                continue;\n            }\n            // console.log(`Parsing "${directive}" with tokens: ${tokens}`);\n            parseMethod.bind(this)(tokens);\n        }\n        // some cleanup. These don\'t need to be exposed as public data.\n        delete this.data;\n        this.currentMaterial = SENTINEL_MATERIAL;\n    }\n}\nfunction emptyTextureOptions() {\n    return {\n        colorCorrection: false,\n        horizontalBlending: true,\n        verticalBlending: true,\n        boostMipMapSharpness: 0,\n        modifyTextureMap: {\n            brightness: 0,\n            contrast: 1,\n        },\n        offset: { u: 0, v: 0, w: 0 },\n        scale: { u: 1, v: 1, w: 1 },\n        turbulence: { u: 0, v: 0, w: 0 },\n        clamp: false,\n        textureResolution: null,\n        bumpMultiplier: 1,\n        imfChan: null,\n        filename: "",\n    };\n}\n\n\n//# sourceURL=webpack://OBJ/./src/material.ts?')},"./src/mesh.ts":
/*!*********************!*\
  !*** ./src/mesh.ts ***!
  \*********************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mesh; });\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout */ "./src/layout.ts");\n\n/**\n * The main Mesh class. The constructor will parse through the OBJ file data\n * and collect the vertex, vertex normal, texture, and face information. This\n * information can then be used later on when creating your VBOs. See\n * OBJ.initMeshBuffers for an example of how to use the newly created Mesh\n */\nclass Mesh {\n    /**\n     * Create a Mesh\n     * @param {String} objectData - a string representation of an OBJ file with\n     *     newlines preserved.\n     * @param {Object} options - a JS object containing valid options. See class\n     *     documentation for options.\n     * @param {bool} options.enableWTextureCoord - Texture coordinates can have\n     *     an optional "w" coordinate after the u and v coordinates. This extra\n     *     value can be used in order to perform fancy transformations on the\n     *     textures themselves. Default is to truncate to only the u an v\n     *     coordinates. Passing true will provide a default value of 0 in the\n     *     event that any or all texture coordinates don\'t provide a w value.\n     *     Always use the textureStride attribute in order to determine the\n     *     stride length of the texture coordinates when rendering the element\n     *     array.\n     * @param {bool} options.calcTangentsAndBitangents - Calculate the tangents\n     *     and bitangents when loading of the OBJ is completed. This adds two new\n     *     attributes to the Mesh instance: `tangents` and `bitangents`.\n     */\n    constructor(objectData, options) {\n        this.name = "";\n        this.indicesPerMaterial = [];\n        this.materialsByIndex = {};\n        this.tangents = [];\n        this.bitangents = [];\n        options = options || {};\n        options.materials = options.materials || {};\n        options.enableWTextureCoord = !!options.enableWTextureCoord;\n        // the list of unique vertex, normal, texture, attributes\n        this.vertexNormals = [];\n        this.textures = [];\n        // the indicies to draw the faces\n        this.indices = [];\n        this.textureStride = options.enableWTextureCoord ? 3 : 2;\n        /*\n        The OBJ file format does a sort of compression when saving a model in a\n        program like Blender. There are at least 3 sections (4 including textures)\n        within the file. Each line in a section begins with the same string:\n          * \'v\': indicates vertex section\n          * \'vn\': indicates vertex normal section\n          * \'f\': indicates the faces section\n          * \'vt\': indicates vertex texture section (if textures were used on the model)\n        Each of the above sections (except for the faces section) is a list/set of\n        unique vertices.\n\n        Each line of the faces section contains a list of\n        (vertex, [texture], normal) groups.\n\n        **Note:** The following documentation will use a capital "V" Vertex to\n        denote the above (vertex, [texture], normal) groups whereas a lowercase\n        "v" vertex is used to denote an X, Y, Z coordinate.\n\n        Some examples:\n            // the texture index is optional, both formats are possible for models\n            // without a texture applied\n            f 1/25 18/46 12/31\n            f 1//25 18//46 12//31\n\n            // A 3 vertex face with texture indices\n            f 16/92/11 14/101/22 1/69/1\n\n            // A 4 vertex face\n            f 16/92/11 40/109/40 38/114/38 14/101/22\n\n        The first two lines are examples of a 3 vertex face without a texture applied.\n        The second is an example of a 3 vertex face with a texture applied.\n        The third is an example of a 4 vertex face. Note: a face can contain N\n        number of vertices.\n\n        Each number that appears in one of the groups is a 1-based index\n        corresponding to an item from the other sections (meaning that indexing\n        starts at one and *not* zero).\n\n        For example:\n            `f 16/92/11` is saying to\n              - take the 16th element from the [v] vertex array\n              - take the 92nd element from the [vt] texture array\n              - take the 11th element from the [vn] normal array\n            and together they make a unique vertex.\n        Using all 3+ unique Vertices from the face line will produce a polygon.\n\n        Now, you could just go through the OBJ file and create a new vertex for\n        each face line and WebGL will draw what appears to be the same model.\n        However, vertices will be overlapped and duplicated all over the place.\n\n        Consider a cube in 3D space centered about the origin and each side is\n        2 units long. The front face (with the positive Z-axis pointing towards\n        you) would have a Top Right vertex (looking orthogonal to its normal)\n        mapped at (1,1,1) The right face would have a Top Left vertex (looking\n        orthogonal to its normal) at (1,1,1) and the top face would have a Bottom\n        Right vertex (looking orthogonal to its normal) at (1,1,1). Each face\n        has a vertex at the same coordinates, however, three distinct vertices\n        will be drawn at the same spot.\n\n        To solve the issue of duplicate Vertices (the `(vertex, [texture], normal)`\n        groups), while iterating through the face lines, when a group is encountered\n        the whole group string (\'16/92/11\') is checked to see if it exists in the\n        packed.hashindices object, and if it doesn\'t, the indices it specifies\n        are used to look up each attribute in the corresponding attribute arrays\n        already created. The values are then copied to the corresponding unpacked\n        array (flattened to play nice with WebGL\'s ELEMENT_ARRAY_BUFFER indexing),\n        the group string is added to the hashindices set and the current unpacked\n        index is used as this hashindices value so that the group of elements can\n        be reused. The unpacked index is incremented. If the group string already\n        exists in the hashindices object, its corresponding value is the index of\n        that group and is appended to the unpacked indices array.\n       */\n        const verts = [];\n        const vertNormals = [];\n        const textures = [];\n        const materialNamesByIndex = [];\n        const materialIndicesByName = {};\n        // keep track of what material we\'ve seen last\n        let currentMaterialIndex = -1;\n        let currentObjectByMaterialIndex = 0;\n        // unpacking stuff\n        const unpacked = {\n            verts: [],\n            norms: [],\n            textures: [],\n            hashindices: {},\n            indices: [[]],\n            materialIndices: [],\n            index: 0,\n        };\n        const VERTEX_RE = /^v\\s/;\n        const NORMAL_RE = /^vn\\s/;\n        const TEXTURE_RE = /^vt\\s/;\n        const FACE_RE = /^f\\s/;\n        const WHITESPACE_RE = /\\s+/;\n        const USE_MATERIAL_RE = /^usemtl/;\n        // array of lines separated by the newline\n        const lines = objectData.split("\\n");\n        for (let line of lines) {\n            line = line.trim();\n            if (!line || line.startsWith("#")) {\n                continue;\n            }\n            const elements = line.split(WHITESPACE_RE);\n            elements.shift();\n            if (VERTEX_RE.test(line)) {\n                // if this is a vertex\n                verts.push(...elements);\n            }\n            else if (NORMAL_RE.test(line)) {\n                // if this is a vertex normal\n                vertNormals.push(...elements);\n            }\n            else if (TEXTURE_RE.test(line)) {\n                let coords = elements;\n                // by default, the loader will only look at the U and V\n                // coordinates of the vt declaration. So, this truncates the\n                // elements to only those 2 values. If W texture coordinate\n                // support is enabled, then the texture coordinate is\n                // expected to have three values in it.\n                if (elements.length > 2 && !options.enableWTextureCoord) {\n                    coords = elements.slice(0, 2);\n                }\n                else if (elements.length === 2 && options.enableWTextureCoord) {\n                    // If for some reason W texture coordinate support is enabled\n                    // and only the U and V coordinates are given, then we supply\n                    // the default value of 0 so that the stride length is correct\n                    // when the textures are unpacked below.\n                    coords.push("0");\n                }\n                textures.push(...coords);\n            }\n            else if (USE_MATERIAL_RE.test(line)) {\n                const materialName = elements[0];\n                // check to see if we\'ve ever seen it before\n                if (!(materialName in materialIndicesByName)) {\n                    // new material we\'ve never seen\n                    materialNamesByIndex.push(materialName);\n                    materialIndicesByName[materialName] = materialNamesByIndex.length - 1;\n                    // push new array into indices\n                    // already contains an array at index zero, don\'t add\n                    if (materialIndicesByName[materialName] > 0) {\n                        unpacked.indices.push([]);\n                    }\n                }\n                // keep track of the current material index\n                currentMaterialIndex = materialIndicesByName[materialName];\n                // update current index array\n                currentObjectByMaterialIndex = currentMaterialIndex;\n            }\n            else if (FACE_RE.test(line)) {\n                // if this is a face\n                /*\n                split this face into an array of Vertex groups\n                for example:\n                   f 16/92/11 14/101/22 1/69/1\n                becomes:\n                  [\'16/92/11\', \'14/101/22\', \'1/69/1\'];\n                */\n                const triangles = triangulate(elements);\n                for (const triangle of triangles) {\n                    for (let j = 0, eleLen = triangle.length; j < eleLen; j++) {\n                        const hash = triangle[j] + "," + currentMaterialIndex;\n                        if (hash in unpacked.hashindices) {\n                            unpacked.indices[currentObjectByMaterialIndex].push(unpacked.hashindices[hash]);\n                        }\n                        else {\n                            /*\n                        Each element of the face line array is a Vertex which has its\n                        attributes delimited by a forward slash. This will separate\n                        each attribute into another array:\n                            \'19/92/11\'\n                        becomes:\n                            Vertex = [\'19\', \'92\', \'11\'];\n                        where\n                            Vertex[0] is the vertex index\n                            Vertex[1] is the texture index\n                            Vertex[2] is the normal index\n                         Think of faces having Vertices which are comprised of the\n                         attributes location (v), texture (vt), and normal (vn).\n                         */\n                            const vertex = triangle[j].split("/");\n                            // it\'s possible for faces to only specify the vertex\n                            // and the normal. In this case, vertex will only have\n                            // a length of 2 and not 3 and the normal will be the\n                            // second item in the list with an index of 1.\n                            const normalIndex = vertex.length - 1;\n                            /*\n                         The verts, textures, and vertNormals arrays each contain a\n                         flattend array of coordinates.\n\n                         Because it gets confusing by referring to Vertex and then\n                         vertex (both are different in my descriptions) I will explain\n                         what\'s going on using the vertexNormals array:\n\n                         vertex[2] will contain the one-based index of the vertexNormals\n                         section (vn). One is subtracted from this index number to play\n                         nice with javascript\'s zero-based array indexing.\n\n                         Because vertexNormal is a flattened array of x, y, z values,\n                         simple pointer arithmetic is used to skip to the start of the\n                         vertexNormal, then the offset is added to get the correct\n                         component: +0 is x, +1 is y, +2 is z.\n\n                         This same process is repeated for verts and textures.\n                         */\n                            // Vertex position\n                            unpacked.verts.push(+verts[(+vertex[0] - 1) * 3 + 0]);\n                            unpacked.verts.push(+verts[(+vertex[0] - 1) * 3 + 1]);\n                            unpacked.verts.push(+verts[(+vertex[0] - 1) * 3 + 2]);\n                            // Vertex textures\n                            if (textures.length) {\n                                const stride = options.enableWTextureCoord ? 3 : 2;\n                                unpacked.textures.push(+textures[(+vertex[1] - 1) * stride + 0]);\n                                unpacked.textures.push(+textures[(+vertex[1] - 1) * stride + 1]);\n                                if (options.enableWTextureCoord) {\n                                    unpacked.textures.push(+textures[(+vertex[1] - 1) * stride + 2]);\n                                }\n                            }\n                            // Vertex normals\n                            unpacked.norms.push(+vertNormals[(+vertex[normalIndex] - 1) * 3 + 0]);\n                            unpacked.norms.push(+vertNormals[(+vertex[normalIndex] - 1) * 3 + 1]);\n                            unpacked.norms.push(+vertNormals[(+vertex[normalIndex] - 1) * 3 + 2]);\n                            // Vertex material indices\n                            unpacked.materialIndices.push(currentMaterialIndex);\n                            // add the newly created Vertex to the list of indices\n                            unpacked.hashindices[hash] = unpacked.index;\n                            unpacked.indices[currentObjectByMaterialIndex].push(unpacked.hashindices[hash]);\n                            // increment the counter\n                            unpacked.index += 1;\n                        }\n                    }\n                }\n            }\n        }\n        this.vertices = unpacked.verts;\n        this.vertexNormals = unpacked.norms;\n        this.textures = unpacked.textures;\n        this.vertexMaterialIndices = unpacked.materialIndices;\n        this.indices = unpacked.indices[currentObjectByMaterialIndex];\n        this.indicesPerMaterial = unpacked.indices;\n        this.materialNames = materialNamesByIndex;\n        this.materialIndices = materialIndicesByName;\n        this.materialsByIndex = {};\n        if (options.calcTangentsAndBitangents) {\n            this.calculateTangentsAndBitangents();\n        }\n    }\n    /**\n     * Calculates the tangents and bitangents of the mesh that forms an orthogonal basis together with the\n     * normal in the direction of the texture coordinates. These are useful for setting up the TBN matrix\n     * when distorting the normals through normal maps.\n     * Method derived from: http://www.opengl-tutorial.org/intermediate-tutorials/tutorial-13-normal-mapping/\n     *\n     * This method requires the normals and texture coordinates to be parsed and set up correctly.\n     * Adds the tangents and bitangents as members of the class instance.\n     */\n    calculateTangentsAndBitangents() {\n        console.assert(!!(this.vertices &&\n            this.vertices.length &&\n            this.vertexNormals &&\n            this.vertexNormals.length &&\n            this.textures &&\n            this.textures.length), "Missing attributes for calculating tangents and bitangents");\n        const unpacked = {\n            tangents: [...new Array(this.vertices.length)].map(_ => 0),\n            bitangents: [...new Array(this.vertices.length)].map(_ => 0),\n        };\n        // Loop through all faces in the whole mesh\n        const indices = this.indices;\n        const vertices = this.vertices;\n        const normals = this.vertexNormals;\n        const uvs = this.textures;\n        for (let i = 0; i < indices.length; i += 3) {\n            const i0 = indices[i + 0];\n            const i1 = indices[i + 1];\n            const i2 = indices[i + 2];\n            const x_v0 = vertices[i0 * 3 + 0];\n            const y_v0 = vertices[i0 * 3 + 1];\n            const z_v0 = vertices[i0 * 3 + 2];\n            const x_uv0 = uvs[i0 * 2 + 0];\n            const y_uv0 = uvs[i0 * 2 + 1];\n            const x_v1 = vertices[i1 * 3 + 0];\n            const y_v1 = vertices[i1 * 3 + 1];\n            const z_v1 = vertices[i1 * 3 + 2];\n            const x_uv1 = uvs[i1 * 2 + 0];\n            const y_uv1 = uvs[i1 * 2 + 1];\n            const x_v2 = vertices[i2 * 3 + 0];\n            const y_v2 = vertices[i2 * 3 + 1];\n            const z_v2 = vertices[i2 * 3 + 2];\n            const x_uv2 = uvs[i2 * 2 + 0];\n            const y_uv2 = uvs[i2 * 2 + 1];\n            const x_deltaPos1 = x_v1 - x_v0;\n            const y_deltaPos1 = y_v1 - y_v0;\n            const z_deltaPos1 = z_v1 - z_v0;\n            const x_deltaPos2 = x_v2 - x_v0;\n            const y_deltaPos2 = y_v2 - y_v0;\n            const z_deltaPos2 = z_v2 - z_v0;\n            const x_uvDeltaPos1 = x_uv1 - x_uv0;\n            const y_uvDeltaPos1 = y_uv1 - y_uv0;\n            const x_uvDeltaPos2 = x_uv2 - x_uv0;\n            const y_uvDeltaPos2 = y_uv2 - y_uv0;\n            const rInv = x_uvDeltaPos1 * y_uvDeltaPos2 - y_uvDeltaPos1 * x_uvDeltaPos2;\n            const r = 1.0 / Math.abs(rInv < 0.0001 ? 1.0 : rInv);\n            // Tangent\n            const x_tangent = (x_deltaPos1 * y_uvDeltaPos2 - x_deltaPos2 * y_uvDeltaPos1) * r;\n            const y_tangent = (y_deltaPos1 * y_uvDeltaPos2 - y_deltaPos2 * y_uvDeltaPos1) * r;\n            const z_tangent = (z_deltaPos1 * y_uvDeltaPos2 - z_deltaPos2 * y_uvDeltaPos1) * r;\n            // Bitangent\n            const x_bitangent = (x_deltaPos2 * x_uvDeltaPos1 - x_deltaPos1 * x_uvDeltaPos2) * r;\n            const y_bitangent = (y_deltaPos2 * x_uvDeltaPos1 - y_deltaPos1 * x_uvDeltaPos2) * r;\n            const z_bitangent = (z_deltaPos2 * x_uvDeltaPos1 - z_deltaPos1 * x_uvDeltaPos2) * r;\n            // Gram-Schmidt orthogonalize\n            //t = glm::normalize(t - n * glm:: dot(n, t));\n            const x_n0 = normals[i0 * 3 + 0];\n            const y_n0 = normals[i0 * 3 + 1];\n            const z_n0 = normals[i0 * 3 + 2];\n            const x_n1 = normals[i1 * 3 + 0];\n            const y_n1 = normals[i1 * 3 + 1];\n            const z_n1 = normals[i1 * 3 + 2];\n            const x_n2 = normals[i2 * 3 + 0];\n            const y_n2 = normals[i2 * 3 + 1];\n            const z_n2 = normals[i2 * 3 + 2];\n            // Tangent\n            const n0_dot_t = x_tangent * x_n0 + y_tangent * y_n0 + z_tangent * z_n0;\n            const n1_dot_t = x_tangent * x_n1 + y_tangent * y_n1 + z_tangent * z_n1;\n            const n2_dot_t = x_tangent * x_n2 + y_tangent * y_n2 + z_tangent * z_n2;\n            const x_resTangent0 = x_tangent - x_n0 * n0_dot_t;\n            const y_resTangent0 = y_tangent - y_n0 * n0_dot_t;\n            const z_resTangent0 = z_tangent - z_n0 * n0_dot_t;\n            const x_resTangent1 = x_tangent - x_n1 * n1_dot_t;\n            const y_resTangent1 = y_tangent - y_n1 * n1_dot_t;\n            const z_resTangent1 = z_tangent - z_n1 * n1_dot_t;\n            const x_resTangent2 = x_tangent - x_n2 * n2_dot_t;\n            const y_resTangent2 = y_tangent - y_n2 * n2_dot_t;\n            const z_resTangent2 = z_tangent - z_n2 * n2_dot_t;\n            const magTangent0 = Math.sqrt(x_resTangent0 * x_resTangent0 + y_resTangent0 * y_resTangent0 + z_resTangent0 * z_resTangent0);\n            const magTangent1 = Math.sqrt(x_resTangent1 * x_resTangent1 + y_resTangent1 * y_resTangent1 + z_resTangent1 * z_resTangent1);\n            const magTangent2 = Math.sqrt(x_resTangent2 * x_resTangent2 + y_resTangent2 * y_resTangent2 + z_resTangent2 * z_resTangent2);\n            // Bitangent\n            const n0_dot_bt = x_bitangent * x_n0 + y_bitangent * y_n0 + z_bitangent * z_n0;\n            const n1_dot_bt = x_bitangent * x_n1 + y_bitangent * y_n1 + z_bitangent * z_n1;\n            const n2_dot_bt = x_bitangent * x_n2 + y_bitangent * y_n2 + z_bitangent * z_n2;\n            const x_resBitangent0 = x_bitangent - x_n0 * n0_dot_bt;\n            const y_resBitangent0 = y_bitangent - y_n0 * n0_dot_bt;\n            const z_resBitangent0 = z_bitangent - z_n0 * n0_dot_bt;\n            const x_resBitangent1 = x_bitangent - x_n1 * n1_dot_bt;\n            const y_resBitangent1 = y_bitangent - y_n1 * n1_dot_bt;\n            const z_resBitangent1 = z_bitangent - z_n1 * n1_dot_bt;\n            const x_resBitangent2 = x_bitangent - x_n2 * n2_dot_bt;\n            const y_resBitangent2 = y_bitangent - y_n2 * n2_dot_bt;\n            const z_resBitangent2 = z_bitangent - z_n2 * n2_dot_bt;\n            const magBitangent0 = Math.sqrt(x_resBitangent0 * x_resBitangent0 +\n                y_resBitangent0 * y_resBitangent0 +\n                z_resBitangent0 * z_resBitangent0);\n            const magBitangent1 = Math.sqrt(x_resBitangent1 * x_resBitangent1 +\n                y_resBitangent1 * y_resBitangent1 +\n                z_resBitangent1 * z_resBitangent1);\n            const magBitangent2 = Math.sqrt(x_resBitangent2 * x_resBitangent2 +\n                y_resBitangent2 * y_resBitangent2 +\n                z_resBitangent2 * z_resBitangent2);\n            unpacked.tangents[i0 * 3 + 0] += x_resTangent0 / magTangent0;\n            unpacked.tangents[i0 * 3 + 1] += y_resTangent0 / magTangent0;\n            unpacked.tangents[i0 * 3 + 2] += z_resTangent0 / magTangent0;\n            unpacked.tangents[i1 * 3 + 0] += x_resTangent1 / magTangent1;\n            unpacked.tangents[i1 * 3 + 1] += y_resTangent1 / magTangent1;\n            unpacked.tangents[i1 * 3 + 2] += z_resTangent1 / magTangent1;\n            unpacked.tangents[i2 * 3 + 0] += x_resTangent2 / magTangent2;\n            unpacked.tangents[i2 * 3 + 1] += y_resTangent2 / magTangent2;\n            unpacked.tangents[i2 * 3 + 2] += z_resTangent2 / magTangent2;\n            unpacked.bitangents[i0 * 3 + 0] += x_resBitangent0 / magBitangent0;\n            unpacked.bitangents[i0 * 3 + 1] += y_resBitangent0 / magBitangent0;\n            unpacked.bitangents[i0 * 3 + 2] += z_resBitangent0 / magBitangent0;\n            unpacked.bitangents[i1 * 3 + 0] += x_resBitangent1 / magBitangent1;\n            unpacked.bitangents[i1 * 3 + 1] += y_resBitangent1 / magBitangent1;\n            unpacked.bitangents[i1 * 3 + 2] += z_resBitangent1 / magBitangent1;\n            unpacked.bitangents[i2 * 3 + 0] += x_resBitangent2 / magBitangent2;\n            unpacked.bitangents[i2 * 3 + 1] += y_resBitangent2 / magBitangent2;\n            unpacked.bitangents[i2 * 3 + 2] += z_resBitangent2 / magBitangent2;\n            // TODO: check handedness\n        }\n        this.tangents = unpacked.tangents;\n        this.bitangents = unpacked.bitangents;\n    }\n    /**\n     * @param layout - A {@link Layout} object that describes the\n     * desired memory layout of the generated buffer\n     * @return The packed array in the ... TODO\n     */\n    makeBufferData(layout) {\n        const numItems = this.vertices.length / 3;\n        const buffer = new ArrayBuffer(layout.stride * numItems);\n        buffer.numItems = numItems;\n        const dataView = new DataView(buffer);\n        for (let i = 0, vertexOffset = 0; i < numItems; i++) {\n            vertexOffset = i * layout.stride;\n            // copy in the vertex data in the order and format given by the\n            // layout param\n            for (const attribute of layout.attributes) {\n                const offset = vertexOffset + layout.attributeMap[attribute.key].offset;\n                switch (attribute.key) {\n                    case _layout__WEBPACK_IMPORTED_MODULE_0__["Layout"].POSITION.key:\n                        dataView.setFloat32(offset, this.vertices[i * 3], true);\n                        dataView.setFloat32(offset + 4, this.vertices[i * 3 + 1], true);\n                        dataView.setFloat32(offset + 8, this.vertices[i * 3 + 2], true);\n                        break;\n                    case _layout__WEBPACK_IMPORTED_MODULE_0__["Layout"].UV.key:\n                        dataView.setFloat32(offset, this.textures[i * 2], true);\n                        dataView.setFloat32(offset + 4, this.textures[i * 2 + 1], true);\n                        break;\n                    case _layout__WEBPACK_IMPORTED_MODULE_0__["Layout"].NORMAL.key:\n                        dataView.setFloat32(offset, this.vertexNormals[i * 3], true);\n                        dataView.setFloat32(offset + 4, this.vertexNormals[i * 3 + 1], true);\n                        dataView.setFloat32(offset + 8, this.vertexNormals[i * 3 + 2], true);\n                        break;\n                    case _layout__WEBPACK_IMPORTED_MODULE_0__["Layout"].MATERIAL_INDEX.key:\n                        dataView.setInt16(offset, this.vertexMaterialIndices[i], true);\n                        break;\n                    case _layout__WEBPACK_IMPORTED_MODULE_0__["Layout"].AMBIENT.key: {\n                        const materialIndex = this.vertexMaterialIndices[i];\n                        const material = this.materialsByIndex[materialIndex];\n                        if (!material) {\n                            console.warn(\'Material "\' +\n                                this.materialNames[materialIndex] +\n                                \'" not found in mesh. Did you forget to call addMaterialLibrary(...)?"\');\n                            break;\n                        }\n                        dataView.setFloat32(offset, material.ambient[0], true);\n                        dataView.setFloat32(offset + 4, material.ambient[1], true);\n                        dataView.setFloat32(offset + 8, material.ambient[2], true);\n                        break;\n                    }\n                    case _layout__WEBPACK_IMPORTED_MODULE_0__["Layout"].DIFFUSE.key: {\n                        const materialIndex = this.vertexMaterialIndices[i];\n                        const material = this.materialsByIndex[materialIndex];\n                        if (!material) {\n                            console.warn(\'Material "\' +\n                                this.materialNames[materialIndex] +\n                                \'" not found in mesh. Did you forget to call addMaterialLibrary(...)?"\');\n                            break;\n                        }\n                        dataView.setFloat32(offset, material.diffuse[0], true);\n                        dataView.setFloat32(offset + 4, material.diffuse[1], true);\n                        dataView.setFloat32(offset + 8, material.diffuse[2], true);\n                        break;\n                    }\n                    case _layout__WEBPACK_IMPORTED_MODULE_0__["Layout"].SPECULAR.key: {\n                        const materialIndex = this.vertexMaterialIndices[i];\n                        const material = this.materialsByIndex[materialIndex];\n                        if (!material) {\n                            console.warn(\'Material "\' +\n                                this.materialNames[materialIndex] +\n                                \'" not found in mesh. Did you forget to call addMaterialLibrary(...)?"\');\n                            break;\n                        }\n                        dataView.setFloat32(offset, material.specular[0], true);\n                        dataView.setFloat32(offset + 4, material.specular[1], true);\n                        dataView.setFloat32(offset + 8, material.specular[2], true);\n                        break;\n                    }\n                    case _layout__WEBPACK_IMPORTED_MODULE_0__["Layout"].SPECULAR_EXPONENT.key: {\n                        const materialIndex = this.vertexMaterialIndices[i];\n                        const material = this.materialsByIndex[materialIndex];\n                        if (!material) {\n                            console.warn(\'Material "\' +\n                                this.materialNames[materialIndex] +\n                                \'" not found in mesh. Did you forget to call addMaterialLibrary(...)?"\');\n                            break;\n                        }\n                        dataView.setFloat32(offset, material.specularExponent, true);\n                        break;\n                    }\n                    case _layout__WEBPACK_IMPORTED_MODULE_0__["Layout"].EMISSIVE.key: {\n                        const materialIndex = this.vertexMaterialIndices[i];\n                        const material = this.materialsByIndex[materialIndex];\n                        if (!material) {\n                            console.warn(\'Material "\' +\n                                this.materialNames[materialIndex] +\n                                \'" not found in mesh. Did you forget to call addMaterialLibrary(...)?"\');\n                            break;\n                        }\n                        dataView.setFloat32(offset, material.emissive[0], true);\n                        dataView.setFloat32(offset + 4, material.emissive[1], true);\n                        dataView.setFloat32(offset + 8, material.emissive[2], true);\n                        break;\n                    }\n                    case _layout__WEBPACK_IMPORTED_MODULE_0__["Layout"].TRANSMISSION_FILTER.key: {\n                        const materialIndex = this.vertexMaterialIndices[i];\n                        const material = this.materialsByIndex[materialIndex];\n                        if (!material) {\n                            console.warn(\'Material "\' +\n                                this.materialNames[materialIndex] +\n                                \'" not found in mesh. Did you forget to call addMaterialLibrary(...)?"\');\n                            break;\n                        }\n                        dataView.setFloat32(offset, material.transmissionFilter[0], true);\n                        dataView.setFloat32(offset + 4, material.transmissionFilter[1], true);\n                        dataView.setFloat32(offset + 8, material.transmissionFilter[2], true);\n                        break;\n                    }\n                    case _layout__WEBPACK_IMPORTED_MODULE_0__["Layout"].DISSOLVE.key: {\n                        const materialIndex = this.vertexMaterialIndices[i];\n                        const material = this.materialsByIndex[materialIndex];\n                        if (!material) {\n                            console.warn(\'Material "\' +\n                                this.materialNames[materialIndex] +\n                                \'" not found in mesh. Did you forget to call addMaterialLibrary(...)?"\');\n                            break;\n                        }\n                        dataView.setFloat32(offset, material.dissolve, true);\n                        break;\n                    }\n                    case _layout__WEBPACK_IMPORTED_MODULE_0__["Layout"].ILLUMINATION.key: {\n                        const materialIndex = this.vertexMaterialIndices[i];\n                        const material = this.materialsByIndex[materialIndex];\n                        if (!material) {\n                            console.warn(\'Material "\' +\n                                this.materialNames[materialIndex] +\n                                \'" not found in mesh. Did you forget to call addMaterialLibrary(...)?"\');\n                            break;\n                        }\n                        dataView.setInt16(offset, material.illumination, true);\n                        break;\n                    }\n                    case _layout__WEBPACK_IMPORTED_MODULE_0__["Layout"].REFRACTION_INDEX.key: {\n                        const materialIndex = this.vertexMaterialIndices[i];\n                        const material = this.materialsByIndex[materialIndex];\n                        if (!material) {\n                            console.warn(\'Material "\' +\n                                this.materialNames[materialIndex] +\n                                \'" not found in mesh. Did you forget to call addMaterialLibrary(...)?"\');\n                            break;\n                        }\n                        dataView.setFloat32(offset, material.refractionIndex, true);\n                        break;\n                    }\n                    case _layout__WEBPACK_IMPORTED_MODULE_0__["Layout"].SHARPNESS.key: {\n                        const materialIndex = this.vertexMaterialIndices[i];\n                        const material = this.materialsByIndex[materialIndex];\n                        if (!material) {\n                            console.warn(\'Material "\' +\n                                this.materialNames[materialIndex] +\n                                \'" not found in mesh. Did you forget to call addMaterialLibrary(...)?"\');\n                            break;\n                        }\n                        dataView.setFloat32(offset, material.sharpness, true);\n                        break;\n                    }\n                    case _layout__WEBPACK_IMPORTED_MODULE_0__["Layout"].ANTI_ALIASING.key: {\n                        const materialIndex = this.vertexMaterialIndices[i];\n                        const material = this.materialsByIndex[materialIndex];\n                        if (!material) {\n                            console.warn(\'Material "\' +\n                                this.materialNames[materialIndex] +\n                                \'" not found in mesh. Did you forget to call addMaterialLibrary(...)?"\');\n                            break;\n                        }\n                        dataView.setInt16(offset, material.antiAliasing ? 1 : 0, true);\n                        break;\n                    }\n                }\n            }\n        }\n        return buffer;\n    }\n    makeIndexBufferData() {\n        const buffer = new Uint16Array(this.indices);\n        buffer.numItems = this.indices.length;\n        return buffer;\n    }\n    makeIndexBufferDataForMaterials(...materialIndices) {\n        const indices = new Array().concat(...materialIndices.map(mtlIdx => this.indicesPerMaterial[mtlIdx]));\n        const buffer = new Uint16Array(indices);\n        buffer.numItems = indices.length;\n        return buffer;\n    }\n    addMaterialLibrary(mtl) {\n        for (const name in mtl.materials) {\n            if (!(name in this.materialIndices)) {\n                // This material is not referenced by the mesh\n                continue;\n            }\n            const material = mtl.materials[name];\n            // Find the material index for this material\n            const materialIndex = this.materialIndices[material.name];\n            // Put the material into the materialsByIndex object at the right\n            // spot as determined when the obj file was parsed\n            this.materialsByIndex[materialIndex] = material;\n        }\n    }\n}\nfunction* triangulate(elements) {\n    if (elements.length <= 3) {\n        yield elements;\n    }\n    else if (elements.length === 4) {\n        yield [elements[0], elements[1], elements[2]];\n        yield [elements[2], elements[3], elements[0]];\n    }\n    else {\n        for (let i = 1; i < elements.length - 1; i++) {\n            yield [elements[0], elements[i], elements[i + 1]];\n        }\n    }\n}\n\n\n//# sourceURL=webpack://OBJ/./src/mesh.ts?')},"./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! exports provided: downloadModels, downloadMeshes, initMeshBuffers, deleteMeshBuffers */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadModels", function() { return downloadModels; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadMeshes", function() { return downloadMeshes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initMeshBuffers", function() { return initMeshBuffers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMeshBuffers", function() { return deleteMeshBuffers; });\n/* harmony import */ var _mesh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mesh */ "./src/mesh.ts");\n/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material */ "./src/material.ts");\n\n\nfunction downloadMtlTextures(mtl, root) {\n    const mapAttributes = [\n        "mapDiffuse",\n        "mapAmbient",\n        "mapSpecular",\n        "mapDissolve",\n        "mapBump",\n        "mapDisplacement",\n        "mapDecal",\n        "mapEmissive",\n    ];\n    if (!root.endsWith("/")) {\n        root += "/";\n    }\n    const textures = [];\n    for (const materialName in mtl.materials) {\n        if (!mtl.materials.hasOwnProperty(materialName)) {\n            continue;\n        }\n        const material = mtl.materials[materialName];\n        for (const attr of mapAttributes) {\n            const mapData = material[attr];\n            if (!mapData || !mapData.filename) {\n                continue;\n            }\n            const url = root + mapData.filename;\n            textures.push(fetch(url)\n                .then(response => {\n                if (!response.ok) {\n                    throw new Error();\n                }\n                return response.blob();\n            })\n                .then(function (data) {\n                const image = new Image();\n                image.src = URL.createObjectURL(data);\n                mapData.texture = image;\n                return new Promise(resolve => (image.onload = resolve));\n            })\n                .catch(() => {\n                console.error(`Unable to download texture: ${url}`);\n            }));\n        }\n    }\n    return Promise.all(textures);\n}\nfunction getMtl(modelOptions) {\n    if (!(typeof modelOptions.mtl === "string")) {\n        return modelOptions.obj.replace(/\\.obj$/, ".mtl");\n    }\n    return modelOptions.mtl;\n}\n/**\n * Accepts a list of model request objects and returns a Promise that\n * resolves when all models have been downloaded and parsed.\n *\n * The list of model objects follow this interface:\n * {\n *  obj: \'path/to/model.obj\',\n *  mtl: true | \'path/to/model.mtl\',\n *  downloadMtlTextures: true | false\n *  mtlTextureRoot: \'/models/suzanne/maps\'\n *  name: \'suzanne\'\n * }\n *\n * The `obj` attribute is required and should be the path to the\n * model\'s .obj file relative to the current repo (absolute URLs are\n * suggested).\n *\n * The `mtl` attribute is optional and can either be a boolean or\n * a path to the model\'s .mtl file relative to the current URL. If\n * the value is `true`, then the path and basename given for the `obj`\n * attribute is used replacing the .obj suffix for .mtl\n * E.g.: {obj: \'models/foo.obj\', mtl: true} would search for \'models/foo.mtl\'\n *\n * The `name` attribute is optional and is a human friendly name to be\n * included with the parsed OBJ and MTL files. If not given, the base .obj\n * filename will be used.\n *\n * The `downloadMtlTextures` attribute is a flag for automatically downloading\n * any images found in the MTL file and attaching them to each Material\n * created from that file. For example, if material.mapDiffuse is set (there\n * was data in the MTL file), then material.mapDiffuse.texture will contain\n * the downloaded image. This option defaults to `true`. By default, the MTL\'s\n * URL will be used to determine the location of the images.\n *\n * The `mtlTextureRoot` attribute is optional and should point to the location\n * on the server that this MTL\'s texture files are located. The default is to\n * use the MTL file\'s location.\n *\n * @returns {Promise} the result of downloading the given list of models. The\n * promise will resolve with an object whose keys are the names of the models\n * and the value is its Mesh object. Each Mesh object will automatically\n * have its addMaterialLibrary() method called to set the given MTL data (if given).\n */\nfunction downloadModels(models) {\n    const finished = [];\n    for (const model of models) {\n        if (!model.obj) {\n            throw new Error(\'"obj" attribute of model object not set. The .obj file is required to be set \' +\n                "in order to use downloadModels()");\n        }\n        const options = {\n            indicesPerMaterial: !!model.indicesPerMaterial,\n            calcTangentsAndBitangents: !!model.calcTangentsAndBitangents,\n        };\n        // if the name is not provided, dervive it from the given OBJ\n        let name = model.name;\n        if (!name) {\n            const parts = model.obj.split("/");\n            name = parts[parts.length - 1].replace(".obj", "");\n        }\n        const namePromise = Promise.resolve(name);\n        const meshPromise = fetch(model.obj)\n            .then(response => response.text())\n            .then(data => {\n            return new _mesh__WEBPACK_IMPORTED_MODULE_0__["default"](data, options);\n        });\n        let mtlPromise;\n        // Download MaterialLibrary file?\n        if (model.mtl) {\n            const mtl = getMtl(model);\n            mtlPromise = fetch(mtl)\n                .then(response => response.text())\n                .then((data) => {\n                const material = new _material__WEBPACK_IMPORTED_MODULE_1__["MaterialLibrary"](data);\n                if (model.downloadMtlTextures !== false) {\n                    let root = model.mtlTextureRoot;\n                    if (!root) {\n                        // get the directory of the MTL file as default\n                        root = mtl.substr(0, mtl.lastIndexOf("/"));\n                    }\n                    // downloadMtlTextures returns a Promise that\n                    // is resolved once all of the images it\n                    // contains are downloaded. These are then\n                    // attached to the map data objects\n                    return Promise.all([Promise.resolve(material), downloadMtlTextures(material, root)]);\n                }\n                return Promise.all([Promise.resolve(material), undefined]);\n            })\n                .then((value) => {\n                return value[0];\n            });\n        }\n        const parsed = [namePromise, meshPromise, mtlPromise];\n        finished.push(Promise.all(parsed));\n    }\n    return Promise.all(finished).then(ms => {\n        // the "finished" promise is a list of name, Mesh instance,\n        // and MaterialLibary instance. This unpacks and returns an\n        // object mapping name to Mesh (Mesh points to MTL).\n        const models = {};\n        for (const model of ms) {\n            const [name, mesh, mtl] = model;\n            mesh.name = name;\n            if (mtl) {\n                mesh.addMaterialLibrary(mtl);\n            }\n            models[name] = mesh;\n        }\n        return models;\n    });\n}\n/**\n * Takes in an object of `mesh_name`, `\'/url/to/OBJ/file\'` pairs and a callback\n * function. Each OBJ file will be ajaxed in and automatically converted to\n * an OBJ.Mesh. When all files have successfully downloaded the callback\n * function provided will be called and passed in an object containing\n * the newly created meshes.\n *\n * **Note:** In order to use this function as a way to download meshes, a\n * webserver of some sort must be used.\n *\n * @param {Object} nameAndAttrs an object where the key is the name of the mesh and the value is the url to that mesh\'s OBJ file\n *\n * @param {Function} completionCallback should contain a function that will take one parameter: an object array where the keys will be the unique object name and the value will be a Mesh object\n *\n * @param {Object} meshes In case other meshes are loaded separately or if a previously declared variable is desired to be used, pass in a (possibly empty) json object of the pattern: { \'<mesh_name>\': OBJ.Mesh }\n *\n */\nfunction downloadMeshes(nameAndURLs, completionCallback, meshes) {\n    if (meshes === undefined) {\n        meshes = {};\n    }\n    const completed = [];\n    for (const mesh_name in nameAndURLs) {\n        if (!nameAndURLs.hasOwnProperty(mesh_name)) {\n            continue;\n        }\n        const url = nameAndURLs[mesh_name];\n        completed.push(fetch(url)\n            .then(response => response.text())\n            .then(data => {\n            return [mesh_name, new _mesh__WEBPACK_IMPORTED_MODULE_0__["default"](data)];\n        }));\n    }\n    Promise.all(completed).then(ms => {\n        for (const [name, mesh] of ms) {\n            meshes[name] = mesh;\n        }\n        return completionCallback(meshes);\n    });\n}\nfunction _buildBuffer(gl, type, data, itemSize) {\n    const buffer = gl.createBuffer();\n    const arrayView = type === gl.ARRAY_BUFFER ? Float32Array : Uint16Array;\n    gl.bindBuffer(type, buffer);\n    gl.bufferData(type, new arrayView(data), gl.STATIC_DRAW);\n    buffer.itemSize = itemSize;\n    buffer.numItems = data.length / itemSize;\n    return buffer;\n}\n/**\n * Takes in the WebGL context and a Mesh, then creates and appends the buffers\n * to the mesh object as attributes.\n *\n * @param {WebGLRenderingContext} gl the `canvas.getContext(\'webgl\')` context instance\n * @param {Mesh} mesh a single `OBJ.Mesh` instance\n *\n * The newly created mesh attributes are:\n *\n * Attrbute | Description\n * :--- | ---\n * **normalBuffer**       |contains the model&#39;s Vertex Normals\n * normalBuffer.itemSize  |set to 3 items\n * normalBuffer.numItems  |the total number of vertex normals\n * |\n * **textureBuffer**      |contains the model&#39;s Texture Coordinates\n * textureBuffer.itemSize |set to 2 items\n * textureBuffer.numItems |the number of texture coordinates\n * |\n * **vertexBuffer**       |contains the model&#39;s Vertex Position Coordinates (does not include w)\n * vertexBuffer.itemSize  |set to 3 items\n * vertexBuffer.numItems  |the total number of vertices\n * |\n * **indexBuffer**        |contains the indices of the faces\n * indexBuffer.itemSize   |is set to 1\n * indexBuffer.numItems   |the total number of indices\n *\n * A simple example (a lot of steps are missing, so don\'t copy and paste):\n *\n *     const gl   = canvas.getContext(\'webgl\'),\n *         mesh = OBJ.Mesh(obj_file_data);\n *     // compile the shaders and create a shader program\n *     const shaderProgram = gl.createProgram();\n *     // compilation stuff here\n *     ...\n *     // make sure you have vertex, vertex normal, and texture coordinate\n *     // attributes located in your shaders and attach them to the shader program\n *     shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");\n *     gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);\n *\n *     shaderProgram.vertexNormalAttribute = gl.getAttribLocation(shaderProgram, "aVertexNormal");\n *     gl.enableVertexAttribArray(shaderProgram.vertexNormalAttribute);\n *\n *     shaderProgram.textureCoordAttribute = gl.getAttribLocation(shaderProgram, "aTextureCoord");\n *     gl.enableVertexAttribArray(shaderProgram.textureCoordAttribute);\n *\n *     // create and initialize the vertex, vertex normal, and texture coordinate buffers\n *     // and save on to the mesh object\n *     OBJ.initMeshBuffers(gl, mesh);\n *\n *     // now to render the mesh\n *     gl.bindBuffer(gl.ARRAY_BUFFER, mesh.vertexBuffer);\n *     gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, mesh.vertexBuffer.itemSize, gl.FLOAT, false, 0, 0);\n *     // it\'s possible that the mesh doesn\'t contain\n *     // any texture coordinates (e.g. suzanne.obj in the development branch).\n *     // in this case, the texture vertexAttribArray will need to be disabled\n *     // before the call to drawElements\n *     if(!mesh.textures.length){\n *       gl.disableVertexAttribArray(shaderProgram.textureCoordAttribute);\n *     }\n *     else{\n *       // if the texture vertexAttribArray has been previously\n *       // disabled, then it needs to be re-enabled\n *       gl.enableVertexAttribArray(shaderProgram.textureCoordAttribute);\n *       gl.bindBuffer(gl.ARRAY_BUFFER, mesh.textureBuffer);\n *       gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, mesh.textureBuffer.itemSize, gl.FLOAT, false, 0, 0);\n *     }\n *\n *     gl.bindBuffer(gl.ARRAY_BUFFER, mesh.normalBuffer);\n *     gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, mesh.normalBuffer.itemSize, gl.FLOAT, false, 0, 0);\n *\n *     gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, model.mesh.indexBuffer);\n *     gl.drawElements(gl.TRIANGLES, model.mesh.indexBuffer.numItems, gl.UNSIGNED_SHORT, 0);\n */\nfunction initMeshBuffers(gl, mesh) {\n    mesh.normalBuffer = _buildBuffer(gl, gl.ARRAY_BUFFER, mesh.vertexNormals, 3);\n    mesh.textureBuffer = _buildBuffer(gl, gl.ARRAY_BUFFER, mesh.textures, mesh.textureStride);\n    mesh.vertexBuffer = _buildBuffer(gl, gl.ARRAY_BUFFER, mesh.vertices, 3);\n    mesh.indexBuffer = _buildBuffer(gl, gl.ELEMENT_ARRAY_BUFFER, mesh.indices, 1);\n    return mesh;\n}\nfunction deleteMeshBuffers(gl, mesh) {\n    gl.deleteBuffer(mesh.normalBuffer);\n    gl.deleteBuffer(mesh.textureBuffer);\n    gl.deleteBuffer(mesh.vertexBuffer);\n    gl.deleteBuffer(mesh.indexBuffer);\n}\n\n\n//# sourceURL=webpack://OBJ/./src/utils.ts?')},0:
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('module.exports = __webpack_require__(/*! /home/aaron/google_drive/projects/webgl-obj-loader/src/index.ts */"./src/index.ts");\n\n\n//# sourceURL=webpack://OBJ/multi_./src/index.ts?')}})}));
},{}],"src/common/mesh-utils.ts":[function(require,module,exports) {
"use strict";

var __spreadArrays = this && this.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var mesh_1 = __importDefault(require("./mesh"));

var OBJ = __importStar(require("webgl-obj-loader")); // This file contain some helper classes to create simple meshes


var BLACK = [0, 0, 0, 255];
var RED = [255, 0, 0, 255];
var GREEN = [0, 255, 0, 255];
var BLUE = [0, 0, 255, 255];
var YELLOW = [255, 255, 0, 255];
var MAGENTA = [255, 0, 255, 255];
var CYAN = [0, 255, 255, 255];
var WHITE = [255, 255, 255, 255];

function createEmptyMesh(gl) {
  return new mesh_1.default(gl, [{
    attributeLocation: 0,
    buffer: "positions",
    size: 3,
    type: gl.FLOAT,
    normalized: false,
    stride: 0,
    offset: 0
  }, {
    attributeLocation: 1,
    buffer: "colors",
    size: 4,
    type: gl.UNSIGNED_BYTE,
    normalized: true,
    stride: 0,
    offset: 0
  }, {
    attributeLocation: 2,
    buffer: "texcoords",
    size: 2,
    type: gl.FLOAT,
    normalized: false,
    stride: 0,
    offset: 0
  }, {
    attributeLocation: 3,
    buffer: "normals",
    size: 3,
    type: gl.FLOAT,
    normalized: false,
    stride: 0,
    offset: 0
  }]);
}

function Plane(gl, texCoords) {
  if (texCoords === void 0) {
    texCoords = {
      min: [0, 0],
      max: [1, 1]
    };
  }

  var mesh = createEmptyMesh(gl);
  mesh.setBufferData("positions", new Float32Array([-1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0, 0.0, -1.0, -1.0, 0.0, -1.0]), gl.STATIC_DRAW);
  mesh.setBufferData("colors", new Uint8Array(__spreadArrays(WHITE, WHITE, WHITE, WHITE)), gl.STATIC_DRAW);
  mesh.setBufferData("texcoords", new Float32Array([texCoords.min[0], texCoords.min[1], texCoords.max[0], texCoords.min[1], texCoords.max[0], texCoords.max[1], texCoords.min[0], texCoords.max[1]]), gl.STATIC_DRAW);
  mesh.setBufferData("normals", new Float32Array([0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]), gl.STATIC_DRAW);
  mesh.setElementsData(new Uint32Array([0, 1, 2, 2, 3, 0]), gl.STATIC_DRAW);
  return mesh;
}

exports.Plane = Plane;

function ColoredCube(gl) {
  var mesh = createEmptyMesh(gl);
  mesh.setBufferData("positions", new Float32Array([//Upper Face
  -1, 1, -1, -1, 1, 1, 1, 1, 1, 1, 1, -1, //Lower Face
  -1, -1, -1, 1, -1, -1, 1, -1, 1, -1, -1, 1, //Right Face
  1, -1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, //Left Face
  -1, -1, -1, -1, -1, 1, -1, 1, 1, -1, 1, -1, //Front Face
  -1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, //Back Face
  -1, -1, -1, -1, 1, -1, 1, 1, -1, 1, -1, -1]), gl.STATIC_DRAW);
  mesh.setBufferData("colors", new Uint8Array(__spreadArrays(RED, RED, RED, RED, GREEN, GREEN, GREEN, GREEN, BLUE, BLUE, BLUE, BLUE, YELLOW, YELLOW, YELLOW, YELLOW, MAGENTA, MAGENTA, MAGENTA, MAGENTA, CYAN, CYAN, CYAN, CYAN)), gl.STATIC_DRAW);
  mesh.setElementsData(new Uint32Array([//Upper Face
  0, 1, 2, 2, 3, 0, //Lower Face
  4, 5, 6, 6, 7, 4, //Right Face
  8, 9, 10, 10, 11, 8, //Left Face
  12, 13, 14, 14, 15, 12, //Front Face
  16, 17, 18, 18, 19, 16, //Back Face
  20, 21, 22, 22, 23, 20]), gl.STATIC_DRAW);
  return mesh;
}

exports.ColoredCube = ColoredCube;

function Sphere(gl, resolution) {
  if (resolution === void 0) {
    resolution = 32;
  }

  if (typeof resolution === "number") resolution = [2 * resolution, resolution];
  resolution = resolution.map(function (x) {
    return x >= 1 ? x : 1;
  });
  var positions = [],
      colors = [],
      texcoords = [],
      normals = [],
      indices = [];

  for (var i = 0; i <= resolution[0]; i++) {
    var theta = i / resolution[0] * 2 * Math.PI;
    var cos_theta = Math.cos(theta),
        sin_theta = Math.sin(theta);

    for (var j = 0; j <= resolution[1]; j++) {
      var phi = (j / resolution[1] - 0.5) * Math.PI;
      var cos_phi = Math.cos(phi),
          sin_phi = Math.sin(phi);
      var x = cos_theta * cos_phi,
          y = sin_phi,
          z = -sin_theta * cos_phi;
      positions.push(x, y, z);
      colors.push.apply(colors, WHITE);
      texcoords.push(i / resolution[0], j / resolution[1]);
      normals.push(x, y, z);
    }
  }

  for (var i = 0; i < resolution[0]; i++) {
    for (var j = 0; j < resolution[1]; j++) {
      var index = j + i * (resolution[1] + 1);
      indices.push(index, index + resolution[1] + 1, index + resolution[1] + 2);
      indices.push(index + resolution[1] + 2, index + 1, index);
    }
  }

  var mesh = createEmptyMesh(gl);
  mesh.setBufferData("positions", new Float32Array(positions), gl.STATIC_DRAW);
  mesh.setBufferData("colors", new Uint8Array(colors), gl.STATIC_DRAW);
  mesh.setBufferData("texcoords", new Float32Array(texcoords), gl.STATIC_DRAW);
  mesh.setBufferData("normals", new Float32Array(normals), gl.STATIC_DRAW);
  mesh.setElementsData(new Uint32Array(indices), gl.STATIC_DRAW);
  return mesh;
}

exports.Sphere = Sphere;

function LoadOBJMesh(gl, data) {
  var obj = new OBJ.Mesh(data);
  var mesh = createEmptyMesh(gl);
  mesh.setBufferData("positions", new Float32Array(obj.vertices), gl.STATIC_DRAW);
  mesh.setBufferData("texcoords", new Float32Array(obj.textures), gl.STATIC_DRAW);
  mesh.setBufferData("normals", new Float32Array(obj.vertexNormals), gl.STATIC_DRAW);
  var colors = new Uint8Array(obj.vertices.length * 4 / 3);
  colors.fill(255);
  mesh.setBufferData("colors", colors, gl.STATIC_DRAW);
  mesh.setElementsData(new Uint32Array(obj.indices), gl.STATIC_DRAW);
  return mesh;
}

exports.LoadOBJMesh = LoadOBJMesh;
},{"./mesh":"src/common/mesh.ts","webgl-obj-loader":"node_modules/webgl-obj-loader/dist/webgl-obj-loader.min.js"}],"src/common/camera.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var gl_matrix_1 = require("gl-matrix"); // Just for organization, we will keep all of our camera data and functions in here


var Camera =
/** @class */
function () {
  function Camera() {
    this.type = 'perspective';
    this.position = gl_matrix_1.vec3.fromValues(0, 0, 0);
    this.direction = gl_matrix_1.vec3.fromValues(0, 0, 1);
    this.up = gl_matrix_1.vec3.fromValues(0, 1, 0);
    this.perspectiveFoVy = Math.PI / 2;
    this.orthographicHeight = 10;
    this.aspectRatio = 1;
    this.near = 0.01;
    this.far = 1000;
  }

  Object.defineProperty(Camera.prototype, "ViewMatrix", {
    get: function get() {
      return gl_matrix_1.mat4.lookAt(gl_matrix_1.mat4.create(), this.position, gl_matrix_1.vec3.add(gl_matrix_1.vec3.create(), this.position, this.direction), this.up);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Camera.prototype, "ProjectionMatrix", {
    get: function get() {
      if (this.type === 'orthographic') {
        var halfH = this.orthographicHeight / 2;
        var halfW = halfH * this.aspectRatio;
        return gl_matrix_1.mat4.ortho(gl_matrix_1.mat4.create(), -halfW, halfW, -halfH, halfH, this.near, this.far);
      } else {
        return gl_matrix_1.mat4.perspective(gl_matrix_1.mat4.create(), this.perspectiveFoVy, this.aspectRatio, this.near, this.far);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Camera.prototype, "ViewProjectionMatrix", {
    get: function get() {
      var V = this.ViewMatrix,
          P = this.ProjectionMatrix;
      return gl_matrix_1.mat4.mul(P, P, V);
    },
    enumerable: true,
    configurable: true
  });

  Camera.prototype.setTarget = function (value) {
    gl_matrix_1.vec3.sub(this.direction, value, this.position);
  };

  Object.defineProperty(Camera.prototype, "right", {
    get: function get() {
      var up = gl_matrix_1.vec3.normalize(gl_matrix_1.vec3.create(), this.up);
      return gl_matrix_1.vec3.cross(up, this.direction, up);
    },
    enumerable: true,
    configurable: true
  });
  return Camera;
}();

exports.default = Camera;
},{"gl-matrix":"node_modules/gl-matrix/esm/index.js"}],"src/common/Cotrollers/Player-controller.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var gl_matrix_1 = require("gl-matrix");

var PlayerController =
/** @class */
function () {
  function PlayerController(VPmatreix, input, postion, boundary, Step) {
    this.boundary = boundary;
    this.input = input;
    this.M = VPmatreix;
    this.postion = postion;
    this.die = 0;
    this.gre = 0;
    this.Step = Step;
  }

  PlayerController.prototype.update = function (deltaTime) {
    if (this.die === 0) {
      this.gre += this.Step;
      var movement = gl_matrix_1.vec3.create();
      if (this.input.isKeyDown("a")) movement[2] += deltaTime / 70;
      if (this.input.isKeyDown("d")) movement[2] -= deltaTime / 70; //m[14] for the z position of the player

      if (this.M[14] < this.boundary && this.M[14] > -this.boundary) {
        gl_matrix_1.mat4.translate(this.M, this.M, [movement[0], movement[1], movement[2]]);
        gl_matrix_1.vec3.add(this.postion, this.postion, [movement[0], movement[1], movement[2]]);
      } else {
        if (this.M[14] >= 12) {
          if (this.input.isKeyDown("d")) {
            movement[2] -= deltaTime / 100;
            gl_matrix_1.mat4.translate(this.M, this.M, [movement[0], movement[1], movement[2]]);
            gl_matrix_1.vec3.add(this.postion, this.postion, [movement[0], movement[1], movement[2]]);
          }
        } else if (this.M[14] <= -12) {
          if (this.input.isKeyDown("a")) {
            movement[2] += deltaTime / 100;
            gl_matrix_1.mat4.translate(this.M, this.M, [movement[0], movement[1], movement[2]]);
            gl_matrix_1.vec3.add(this.postion, this.postion, [movement[0], movement[1], movement[2]]);
          }
        }
      }

      gl_matrix_1.mat4.rotateZ(this.M, this.M, deltaTime / 100);
    }
  };

  return PlayerController;
}();

exports.default = PlayerController;
},{"gl-matrix":"node_modules/gl-matrix/esm/index.js"}],"src/common/Cotrollers/ground-controller.ts":[function(require,module,exports) {
"use strict";

var __spreadArrays = this && this.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var gl_matrix_1 = require("gl-matrix");

var GroundController =
/** @class */
function () {
  function GroundController(M, Step, scale) {
    this.M = M;
    this.scale = scale;
    this.Step = Step;
    this.act = Step;
    this.hold = 0;
  }

  GroundController.prototype.update = function () {
    if (this.hold === 0) {
      this.act += this.Step;

      if (this.act < 0.4) {
        gl_matrix_1.mat4.translate(this.M, this.M, [this.Step, 0, 0]);
      } else {
        this.act = this.Step;
        this.M = gl_matrix_1.mat4.create();
        gl_matrix_1.mat4.scale(this.M, this.M, __spreadArrays(this.scale));
      }
    }
  };

  return GroundController;
}();

exports.default = GroundController;
},{"gl-matrix":"node_modules/gl-matrix/esm/index.js"}],"src/common/Cotrollers/obstacle-controller.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var gl_matrix_1 = require("gl-matrix");

var ObstacleController =
/** @class */
function () {
  function ObstacleController(v, scale, stp) {
    this.M = gl_matrix_1.mat4.create();
    this.Step = stp; //0.1

    this.act = stp; //0.1

    this.colstatus = false;
    this.scale = scale;
    this.Minpos = gl_matrix_1.vec3.create();
    this.Maxpos = gl_matrix_1.vec3.create();
    this.hold = 0;
    this.center = v;
    gl_matrix_1.vec3.add(this.Minpos, v, [1.142, 0, 1.142]);
    gl_matrix_1.vec3.add(this.Maxpos, v, [-1.142, 2.285, -1.142]);
  }

  ObstacleController.prototype.update = function (deltaTime) {
    if (this.hold === 0) {
      if (this.colstatus === false) {
        this.M = gl_matrix_1.mat4.create();
        gl_matrix_1.mat4.translate(this.M, this.M, [this.act, 0, 0]);
        gl_matrix_1.mat4.translate(this.M, this.M, this.center);
        gl_matrix_1.mat4.scale(this.M, this.M, [this.scale, this.scale, this.scale]);
        gl_matrix_1.mat4.rotateY(this.M, this.M, Math.PI / 2);
        this.act += this.Step;
        gl_matrix_1.vec3.add(this.Minpos, this.Minpos, [this.Step, 0, 0]);
        gl_matrix_1.vec3.add(this.Maxpos, this.Maxpos, [this.Step, 0, 0]);
      } else if (this.colstatus) {
        this.M = gl_matrix_1.mat4.create(); //mat4.scale(this.M,this.M,[3.33,3.33,3.33]);

        gl_matrix_1.mat4.translate(this.M, this.M, [0, -10, 0]);
      }
    }
  };

  return ObstacleController;
}();

exports.default = ObstacleController;
},{"gl-matrix":"node_modules/gl-matrix/esm/index.js"}],"src/scenes/Level1.tsx":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __spreadArrays = this && this.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var game_1 = require("../common/game");

var shader_program_1 = __importDefault(require("../common/shader-program"));

var MeshUtils = __importStar(require("../common/mesh-utils"));

var camera_1 = __importDefault(require("../common/camera"));

var Player_controller_1 = __importDefault(require("../common/Cotrollers/Player-controller"));

var ground_controller_1 = __importDefault(require("../common/Cotrollers/ground-controller"));

var gl_matrix_1 = require("gl-matrix");

var obstacle_controller_1 = __importDefault(require("../common/Cotrollers/obstacle-controller"));

; // In this scene we will draw a scene to multiple targets then use the target to do post processing

var level1 =
/** @class */
function (_super) {
  __extends(level1, _super);

  function level1() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.programs = {};
    _this.cubeController = {};
    _this.meshes = {};
    _this.textures = {};
    _this.samplers = {};
    _this.shaders = ["light"];
    return _this;
  }

  level1.prototype.load = function () {
    var _a, _b;

    this.game.loader.load(__assign(__assign((_a = {}, _a["mrt.vert"] = {
      url: 'shaders/mrt.vert',
      type: 'text'
    }, _a["mrt.frag"] = {
      url: 'shaders/mrt.frag',
      type: 'text'
    }, _a["fullscreen.vert"] = {
      url: 'shaders/post-process/fullscreen.vert',
      type: 'text'
    }, _a), Object.fromEntries(this.shaders.map(function (s) {
      return [s + ".frag", {
        url: "shaders/post-process/" + s + ".frag",
        type: 'text'
      }];
    }))), (_b = {}, _b["Ball-texture"] = {
      url: 'images/earth.jpg',
      type: 'image'
    }, _b["Ground-texture"] = {
      url: 'images/Blue3.png',
      type: 'image'
    }, _b["Background-texture"] = {
      url: 'images/galaxy.jpg',
      type: 'image'
    }, _b["cube-model"] = {
      url: 'models/Blue Cube/chr_phantom_puzzle.obj',
      type: 'text'
    }, _b["cube-texture"] = {
      url: 'models/Blue Cube/mlt_chr_pha_puz_dif_SD01.png',
      type: 'image'
    }, _b["cube-texture2"] = {
      url: 'models/Blue Cube/mlt_chr_pha_puz_dif_SD02.png',
      type: 'image'
    }, _b["systems"] = {
      url: 'data/Level1.json',
      type: 'json'
    }, _b)));
  };

  level1.prototype.start = function () {
    // This shader program will draw 3D objects
    this.systems = this.game.loader.resources["systems"];
    this.programs["3d"] = new shader_program_1.default(this.gl);
    this.programs["3d"].attach(this.game.loader.resources["mrt.vert"], this.gl.VERTEX_SHADER);
    this.programs["3d"].attach(this.game.loader.resources["mrt.frag"], this.gl.FRAGMENT_SHADER);
    this.programs["3d"].link(); // These shader programs will render post processing effects.

    for (var _i = 0, _a = this.shaders; _i < _a.length; _i++) {
      var shader = _a[_i];
      this.programs[shader] = new shader_program_1.default(this.gl);
      this.programs[shader].attach(this.game.loader.resources["fullscreen.vert"], this.gl.VERTEX_SHADER);
      this.programs[shader].attach(this.game.loader.resources[shader + ".frag"], this.gl.FRAGMENT_SHADER);
      this.programs[shader].link();
    }

    this.meshes['Ball'] = MeshUtils.Sphere(this.gl);
    this.meshes['Ground'] = MeshUtils.Plane(this.gl, {
      min: [0, 0],
      max: [1, 1]
    });
    this.meshes['Cube'] = MeshUtils.LoadOBJMesh(this.gl, this.game.loader.resources["cube-model"]);
    this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, true);
    this.textures['Ball'] = this.gl.createTexture();
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures['Ball']);
    this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, 4);
    this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, this.game.loader.resources['Ball-texture']);
    this.gl.generateMipmap(this.gl.TEXTURE_2D);
    this.textures['Ground'] = this.gl.createTexture();
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures['Ground']);
    this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, 4);
    this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, this.game.loader.resources['Ground-texture']);
    this.gl.generateMipmap(this.gl.TEXTURE_2D); //Loading the Cube textures

    this.textures['Cubet'] = this.gl.createTexture();
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures['Cubet']);
    this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, 4);
    this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, this.game.loader.resources['cube-texture']);
    this.gl.generateMipmap(this.gl.TEXTURE_2D);
    this.textures['Cubet2'] = this.gl.createTexture();
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures['Cubet2']);
    this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, 4);
    this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, this.game.loader.resources['cube-texture2']);
    this.gl.generateMipmap(this.gl.TEXTURE_2D); // We will use the multi render target setup described in the previous scene

    this.textures['color-target'] = this.gl.createTexture();
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures['color-target']);
    this.gl.texStorage2D(this.gl.TEXTURE_2D, 1, this.gl.RGBA8, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
    this.gl.getExtension('EXT_color_buffer_float');
    this.textures['normal-target'] = this.gl.createTexture();
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures['normal-target']);
    this.gl.texStorage2D(this.gl.TEXTURE_2D, 1, this.gl.RGBA32F, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
    this.textures['depth-target'] = this.gl.createTexture();
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures['depth-target']);
    this.gl.texStorage2D(this.gl.TEXTURE_2D, 1, this.gl.DEPTH_COMPONENT32F, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
    this.frameBuffer = this.gl.createFramebuffer();
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.frameBuffer);
    this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, this.textures['color-target'], 0);
    this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT1, this.gl.TEXTURE_2D, this.textures['normal-target'], 0);
    this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.DEPTH_ATTACHMENT, this.gl.TEXTURE_2D, this.textures['depth-target'], 0);
    var status = this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER);

    if (status != this.gl.FRAMEBUFFER_COMPLETE) {
      if (status == this.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT) console.error("The framebuffer has a type mismatch");else if (status == this.gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT) console.error("The framebuffer is missing an attachment");else if (status == this.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS) console.error("The framebuffer has dimension mismatch");else if (status == this.gl.FRAMEBUFFER_UNSUPPORTED) console.error("The framebuffer has an attachment with unsupported format");else if (status == this.gl.FRAMEBUFFER_INCOMPLETE_MULTISAMPLE) console.error("The framebuffer has multisample mismatch");else console.error("The framebuffer has an unknown error");
    }

    this.samplers['regular'] = this.gl.createSampler();
    this.gl.samplerParameteri(this.samplers['regular'], this.gl.TEXTURE_WRAP_S, this.gl.REPEAT);
    this.gl.samplerParameteri(this.samplers['regular'], this.gl.TEXTURE_WRAP_T, this.gl.REPEAT);
    this.gl.samplerParameteri(this.samplers['regular'], this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
    this.gl.samplerParameteri(this.samplers['regular'], this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR_MIPMAP_LINEAR);
    this.samplers['postprocess'] = this.gl.createSampler();
    this.gl.samplerParameteri(this.samplers['postprocess'], this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
    this.gl.samplerParameteri(this.samplers['postprocess'], this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
    this.gl.samplerParameteri(this.samplers['postprocess'], this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST);
    this.gl.samplerParameteri(this.samplers['postprocess'], this.gl.TEXTURE_MIN_FILTER, this.gl.NEAREST);
    this.camera = new camera_1.default();
    this.camera.type = 'perspective';
    this.camera.position = gl_matrix_1.vec3.fromValues(-9, 14, 0); //4

    this.camera.direction = gl_matrix_1.vec3.fromValues(-5, -9, 0); //-9

    this.camera.aspectRatio = this.gl.drawingBufferWidth / this.gl.drawingBufferHeight;
    var PlayerMat = gl_matrix_1.mat4.create();
    gl_matrix_1.mat4.translate(PlayerMat, PlayerMat, [-9, 1, 0]);
    var tr = gl_matrix_1.vec3.create();
    gl_matrix_1.vec3.add(tr, tr, [-9, 1, 0]);
    this.playercontroller = new Player_controller_1.default(PlayerMat, this.game.input, tr, this.systems["scene"].groundscale[2] - 1, this.systems['scene'].goundmovespeed);
    var groundMat = gl_matrix_1.mat4.create();
    gl_matrix_1.mat4.scale(groundMat, groundMat, __spreadArrays(this.systems["scene"].groundscale));
    this.groundcontroller = new ground_controller_1.default(groundMat, this.systems["scene"].goundmovespeed, __spreadArrays(this.systems["scene"].groundscale));
    this.createwave(this.systems["scene"].distanceofwave);
    this.gl.enable(this.gl.CULL_FACE);
    this.gl.cullFace(this.gl.BACK);
    this.gl.frontFace(this.gl.CCW);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.gl.depthFunc(this.gl.LEQUAL);
  };

  level1.prototype.createwave = function (dis) {
    this.cubeNumber = 49;
    var index = 1;

    for (var x = -12; x <= 12; x += 4) {
      for (var z = -12; z <= 12; z += 4) {
        var v = gl_matrix_1.vec3.create();
        gl_matrix_1.vec3.add(v, v, [x - dis, 0, z]);
        this.cubeController[index] = new obstacle_controller_1.default(v, this.systems["scene"].cubescale, this.systems["scene"].goundmovespeed); //Select the applied texture

        var randomNumber = Math.floor(Math.random() * 6) + 1; //Get a random number from 1 to 6

        if ((index + randomNumber) % 7 == 0 || (index + randomNumber + 1) % 7 == 0) {
          this.cubeController[index].texturetype = 'Cubet2';
          this.cubeController[index].color = 1;
        } else {
          this.cubeController[index].texturetype = 'Cubet';
          this.cubeController[index].color = 0;
        }

        index++;
      }
    }
  };

  level1.prototype.detcoll = function (cubeController) {
    var center = this.playercontroller.postion;
    var bmin = cubeController.Minpos;
    var bmax = cubeController.Maxpos;
    var x = Math.max(bmin[0], Math.min(center[0], bmax[0]));
    var y = Math.max(bmin[1], Math.min(center[1], bmax[1]));
    var z = Math.max(bmin[2], Math.min(center[2], bmax[2]));
    var distance = Math.sqrt((x - center[0]) * (x - center[0]) + (y - center[1]) * (y - center[1]) + (z - center[2]) * (z - center[2]));

    if (distance < 2) //less than sphere radius
      {
        if (cubeController.color == 0) this.game.scoree += 100;
        return true;
      } else return false;
  };

  level1.prototype.draw2 = function (x) {
    var _this = this;

    window.requestAnimationFrame(function () {
      return _this.draw2;
    });
    this.contxt.clearRect(0, 0, 1000, 100); //clear canvas for new input

    this.contxt.font = "35px Arial";
    this.contxt.fillText(x.toString(), 10, 90);
  };

  level1.prototype.draw = function (deltaTime, time) {
    var _this = this;

    window.requestAnimationFrame(function () {
      return _this.draw;
    });
    this.playercontroller.update(deltaTime);
    this.groundcontroller.update();

    for (var x = 1; x <= this.cubeNumber; x++) {
      if (this.cubeController[x].colstatus === false) {
        this.cubeController[x].colstatus = this.detcoll(this.cubeController[x]);
        this.cubeController[x].update(deltaTime);
      }
    }

    for (var x = 1; x <= this.cubeNumber; x++) {
      if (this.cubeController[x].colstatus === true && this.cubeController[x].color === 1) {
        this.playercontroller.die = 1;
        this.groundcontroller.hold = 1;

        for (var z = 1; z <= this.cubeNumber; z++) {
          this.cubeController[z].hold = 1;
        }

        break;
      } else {
        for (var y = 1; y <= 7; y++) {
          if (this.playercontroller.gre > this.systems['scene'].distanceofwave + 50) //controls the distance i have to walk in the scene to generate another wave
            {
              for (var z = 1; z <= this.cubeNumber; z++) {
                delete this.cubeController[z];
              }

              this.playercontroller.gre = 0;
              this.createwave(this.systems["scene"].distanceofwave);
            }
        } //4

      }
    }

    if (!this.playercontroller.die) this.draw2(this.game.scoree);
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.frameBuffer);
    this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
    {
      this.gl.drawBuffers([this.gl.COLOR_ATTACHMENT0, this.gl.COLOR_ATTACHMENT1]);
      this.gl.clearBufferfv(this.gl.COLOR, 0, __spreadArrays(this.systems["scene"].backgroundcolor)); //0.67,0.84,0.9, 1

      this.gl.clearBufferfv(this.gl.COLOR, 1, [0, 0, 0, 1]);
      this.gl.clearBufferfi(this.gl.DEPTH_STENCIL, 0, 1, 0);
      this.gl.bindSampler(0, this.samplers['regular']);
      var program = this.programs['3d'];
      program.use();

      for (var x = 1; x <= this.cubeNumber; x++) {
        var MatCube = this.cubeController[x].M;
        program.setUniformMatrix4fv("VP", false, this.camera.ViewProjectionMatrix);
        program.setUniformMatrix4fv("M", false, MatCube);
        program.setUniformMatrix4fv("M_it", true, gl_matrix_1.mat4.invert(gl_matrix_1.mat4.create(), MatCube));
        program.setUniform4f("tint", __spreadArrays(this.systems["scene"].tintcubes));
        this.gl.activeTexture(this.gl.TEXTURE3);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures[this.cubeController[x].texturetype]);
        program.setUniform1i('texture_sampler', 3);
        this.gl.bindSampler(3, this.samplers['regular']);
        this.meshes['Cube'].draw(this.gl.TRIANGLES);
      }

      program = this.programs['3d'];
      program.use();
      program.setUniformMatrix4fv("VP", false, this.camera.ViewProjectionMatrix);
      var groundMat = this.groundcontroller.M;
      program.setUniformMatrix4fv("M", false, groundMat);
      program.setUniformMatrix4fv("M_it", true, gl_matrix_1.mat4.invert(gl_matrix_1.mat4.create(), groundMat));
      program.setUniform4f("tint", __spreadArrays(this.systems["scene"].tintground));
      this.gl.activeTexture(this.gl.TEXTURE0);
      this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures['Ground']);
      program.setUniform1i('texture_sampler', 0);
      this.gl.bindSampler(0, this.samplers['regular']);
      this.meshes['Ground'].draw(this.gl.TRIANGLES);
      program.setUniformMatrix4fv("M", false, this.playercontroller.M);
      program.setUniformMatrix4fv("M_it", true, gl_matrix_1.mat4.invert(gl_matrix_1.mat4.create(), this.playercontroller.M));

      if (this.playercontroller.die === 0) {
        program.setUniform4f("tint", __spreadArrays(this.systems["scene"].tintplayer));
      } else {
        program.setUniform4f("tint", [1, (Math.abs(Math.sin(time * 1000)) + 0.5) / 2 + 0.2, (Math.abs(Math.sin(time * 50)) + 0.2) / 2 + 0.5, 1]);
      }

      this.gl.activeTexture(this.gl.TEXTURE0);
      this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures['Ball']);
      program.setUniform1i('texture_sampler', 0);
      this.meshes['Ball'].draw(this.gl.TRIANGLES);
    }
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
    this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
    {
      this.gl.clearColor(0.08, 0.32, 0.44, 1); //0.08, 0.32, 0.44, 1

      this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
      var program = void 0;
      program = this.programs['light'];
      program.use();
      this.gl.activeTexture(this.gl.TEXTURE0);
      this.gl.bindSampler(0, this.samplers['postprocess']);
      this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures['color-target']);
      program.setUniform1i('color_sampler', 0);
      this.gl.activeTexture(this.gl.TEXTURE1);
      this.gl.bindSampler(1, this.samplers['postprocess']);
      this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures['normal-target']);
      program.setUniform1i('normal_sampler', 1);
      this.gl.activeTexture(this.gl.TEXTURE2);
      this.gl.bindSampler(2, this.samplers['postprocess']);
      this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures['depth-target']);
      program.setUniform1i('depth_sampler', 2);
      program.setUniform1f('fog_distance', this.systems["scene"].fogdistance); //4

      program.setUniform4f('fog_color', __spreadArrays(this.systems["scene"].fogcolor)); //3 0.76,0.83,0.56, 1

      program.setUniformMatrix4fv('P_i', false, gl_matrix_1.mat4.invert(gl_matrix_1.mat4.create(), this.camera.ProjectionMatrix));
      var light_direction = gl_matrix_1.vec3.create();
      gl_matrix_1.vec3.add(light_direction, light_direction, __spreadArrays(this.systems["scene"].lightdirection));
      gl_matrix_1.vec3.normalize(light_direction, light_direction);
      program.setUniform3f('light_direction', light_direction);
      program.setUniform4f('light_color', __spreadArrays(this.systems["scene"].lightcolor)); //1

      program.setUniform4f('ambient_color', __spreadArrays(this.systems["scene"].ambientcolor)); //2

      this.gl.drawArrays(this.gl.TRIANGLES, 0, 3);
    }
  };

  level1.prototype.end = function () {
    for (var key in this.programs) {
      this.programs[key].dispose();
    }

    this.programs = {};

    for (var key in this.meshes) {
      this.meshes[key].dispose();
    }

    this.meshes = {};
    this.gl.deleteFramebuffer(this.frameBuffer);

    for (var key in this.textures) {
      this.gl.deleteTexture(this.textures[key]);
    }

    this.textures = {};
    this.clearControls();
  };

  level1.prototype.clearControls = function () {
    var controls = document.querySelector('#controls');
    controls.innerHTML = "";
  };

  return level1;
}(game_1.Scene);

exports.default = level1;
},{"../common/game":"src/common/game.ts","../common/shader-program":"src/common/shader-program.ts","../common/mesh-utils":"src/common/mesh-utils.ts","../common/camera":"src/common/camera.ts","../common/Cotrollers/Player-controller":"src/common/Cotrollers/Player-controller.ts","../common/Cotrollers/ground-controller":"src/common/Cotrollers/ground-controller.ts","gl-matrix":"node_modules/gl-matrix/esm/index.js","../common/Cotrollers/obstacle-controller":"src/common/Cotrollers/obstacle-controller.ts"}],"src/scenes/Level2.tsx":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __spreadArrays = this && this.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var game_1 = require("../common/game");

var shader_program_1 = __importDefault(require("../common/shader-program"));

var MeshUtils = __importStar(require("../common/mesh-utils"));

var camera_1 = __importDefault(require("../common/camera"));

var Player_controller_1 = __importDefault(require("../common/Cotrollers/Player-controller"));

var ground_controller_1 = __importDefault(require("../common/Cotrollers/ground-controller"));

var gl_matrix_1 = require("gl-matrix");

var obstacle_controller_1 = __importDefault(require("../common/Cotrollers/obstacle-controller"));

; // In this scene we will draw a scene to multiple targets then use the target to do post processing

var Level2 =
/** @class */
function (_super) {
  __extends(Level2, _super);

  function Level2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.programs = {};
    _this.cubeController = {};
    _this.meshes = {};
    _this.textures = {};
    _this.samplers = {};
    _this.shaders = ["light"];
    _this.cubeN = [70, 49, 21, 35];
    _this.x_cubes = [-29, -12, -12, -22];
    _this.x_end = [29, 12, 12, 22];
    _this.inc_x = [4, 4, 4, 4];
    return _this;
  }

  Level2.prototype.load = function () {
    var _a, _b;

    this.game.loader.load(__assign(__assign((_a = {}, _a["mrt.vert"] = {
      url: 'shaders/mrt.vert',
      type: 'text'
    }, _a["mrt.frag"] = {
      url: 'shaders/mrt.frag',
      type: 'text'
    }, _a["fullscreen.vert"] = {
      url: 'shaders/post-process/fullscreen.vert',
      type: 'text'
    }, _a), Object.fromEntries(this.shaders.map(function (s) {
      return [s + ".frag", {
        url: "shaders/post-process/" + s + ".frag",
        type: 'text'
      }];
    }))), (_b = {}, _b["Ball-texture"] = {
      url: 'images/earth.jpg',
      type: 'image'
    }, _b["Ground-texture"] = {
      url: 'images/dark.png',
      type: 'image'
    }, _b["Background-texture"] = {
      url: 'images/galaxy.jpg',
      type: 'image'
    }, _b["cube-model"] = {
      url: 'models/Blue Cube/chr_phantom_puzzle.obj',
      type: 'text'
    }, _b["cube-texture"] = {
      url: 'models/Blue Cube/mlt_chr_pha_puz_dif_SD01.png',
      type: 'image'
    }, _b["cube-texture2"] = {
      url: 'models/Blue Cube/mlt_chr_pha_puz_dif_SD02.png',
      type: 'image'
    }, _b["systems"] = {
      url: 'data/Level1.json',
      type: 'json'
    }, _b)));
  };

  Level2.prototype.start = function () {
    // This shader program will draw 3D objects
    this.systems = this.game.loader.resources["systems"];
    this.programs["3d"] = new shader_program_1.default(this.gl);
    this.programs["3d"].attach(this.game.loader.resources["mrt.vert"], this.gl.VERTEX_SHADER);
    this.programs["3d"].attach(this.game.loader.resources["mrt.frag"], this.gl.FRAGMENT_SHADER);
    this.programs["3d"].link(); // These shader programs will render post processing effects.

    for (var _i = 0, _a = this.shaders; _i < _a.length; _i++) {
      var shader = _a[_i];
      this.programs[shader] = new shader_program_1.default(this.gl);
      this.programs[shader].attach(this.game.loader.resources["fullscreen.vert"], this.gl.VERTEX_SHADER);
      this.programs[shader].attach(this.game.loader.resources[shader + ".frag"], this.gl.FRAGMENT_SHADER);
      this.programs[shader].link();
    }

    this.meshes['Ball'] = MeshUtils.Sphere(this.gl);
    this.meshes['Ground'] = MeshUtils.Plane(this.gl, {
      min: [0, 0],
      max: [1, 1]
    });
    this.meshes['Background'] = MeshUtils.Plane(this.gl, {
      min: [0, 0],
      max: [1, 1]
    });
    this.meshes['Cube'] = MeshUtils.LoadOBJMesh(this.gl, this.game.loader.resources["cube-model"]);
    this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, true); //Loading the ball textures

    this.textures['Ball'] = this.gl.createTexture();
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures['Ball']);
    this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, 4);
    this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, this.game.loader.resources['Ball-texture']);
    this.gl.generateMipmap(this.gl.TEXTURE_2D); //Loading the background textures

    this.textures['Background'] = this.gl.createTexture();
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures['Background']);
    this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, 4);
    this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, this.game.loader.resources['Background-texture']);
    this.gl.generateMipmap(this.gl.TEXTURE_2D); //Loading the ground textures

    this.textures['Ground'] = this.gl.createTexture();
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures['Ground']);
    this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, 4);
    this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, this.game.loader.resources['Ground-texture']);
    this.gl.generateMipmap(this.gl.TEXTURE_2D); //Loading the Cube textures

    this.textures['Cubet'] = this.gl.createTexture();
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures['Cubet']);
    this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, 4);
    this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, this.game.loader.resources['cube-texture']);
    this.gl.generateMipmap(this.gl.TEXTURE_2D);
    this.textures['Cubet2'] = this.gl.createTexture();
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures['Cubet2']);
    this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, 4);
    this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, this.game.loader.resources['cube-texture2']);
    this.gl.generateMipmap(this.gl.TEXTURE_2D); // We will use the multi render target setup described in the previous scene

    this.textures['color-target'] = this.gl.createTexture();
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures['color-target']);
    this.gl.texStorage2D(this.gl.TEXTURE_2D, 1, this.gl.RGBA8, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
    this.gl.getExtension('EXT_color_buffer_float');
    this.textures['normal-target'] = this.gl.createTexture();
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures['normal-target']);
    this.gl.texStorage2D(this.gl.TEXTURE_2D, 1, this.gl.RGBA32F, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
    this.textures['depth-target'] = this.gl.createTexture();
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures['depth-target']);
    this.gl.texStorage2D(this.gl.TEXTURE_2D, 1, this.gl.DEPTH_COMPONENT32F, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
    this.frameBuffer = this.gl.createFramebuffer();
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.frameBuffer);
    this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, this.textures['color-target'], 0);
    this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT1, this.gl.TEXTURE_2D, this.textures['normal-target'], 0);
    this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.DEPTH_ATTACHMENT, this.gl.TEXTURE_2D, this.textures['depth-target'], 0);
    var status = this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER);

    if (status != this.gl.FRAMEBUFFER_COMPLETE) {
      if (status == this.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT) console.error("The framebuffer has a type mismatch");else if (status == this.gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT) console.error("The framebuffer is missing an attachment");else if (status == this.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS) console.error("The framebuffer has dimension mismatch");else if (status == this.gl.FRAMEBUFFER_UNSUPPORTED) console.error("The framebuffer has an attachment with unsupported format");else if (status == this.gl.FRAMEBUFFER_INCOMPLETE_MULTISAMPLE) console.error("The framebuffer has multisample mismatch");else console.error("The framebuffer has an unknown error");
    }

    this.samplers['regular'] = this.gl.createSampler();
    this.gl.samplerParameteri(this.samplers['regular'], this.gl.TEXTURE_WRAP_S, this.gl.REPEAT);
    this.gl.samplerParameteri(this.samplers['regular'], this.gl.TEXTURE_WRAP_T, this.gl.REPEAT);
    this.gl.samplerParameteri(this.samplers['regular'], this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
    this.gl.samplerParameteri(this.samplers['regular'], this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR_MIPMAP_LINEAR);
    this.samplers['postprocess'] = this.gl.createSampler();
    this.gl.samplerParameteri(this.samplers['postprocess'], this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
    this.gl.samplerParameteri(this.samplers['postprocess'], this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
    this.gl.samplerParameteri(this.samplers['postprocess'], this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST);
    this.gl.samplerParameteri(this.samplers['postprocess'], this.gl.TEXTURE_MIN_FILTER, this.gl.NEAREST);
    this.camera = new camera_1.default();
    this.camera.type = 'perspective';
    this.camera.position = gl_matrix_1.vec3.fromValues(-9, 14, 0); //4

    this.camera.direction = gl_matrix_1.vec3.fromValues(-5, -9, 0); //-9

    this.camera.aspectRatio = this.gl.drawingBufferWidth / this.gl.drawingBufferHeight;
    var PlayerMat = gl_matrix_1.mat4.create();
    gl_matrix_1.mat4.translate(PlayerMat, PlayerMat, [-9, 1, 0]);
    var tr = gl_matrix_1.vec3.create();
    gl_matrix_1.vec3.add(tr, tr, [-9, 1, 0]);
    this.playercontroller = new Player_controller_1.default(PlayerMat, this.game.input, tr, this.systems["scene"].groundscale[2] - 1, this.systems["scene"].goundmovespeed);
    var groundMat = gl_matrix_1.mat4.create();
    gl_matrix_1.mat4.scale(groundMat, groundMat, __spreadArrays(this.systems["scene"].groundscale));
    this.groundcontroller = new ground_controller_1.default(groundMat, this.systems["scene"].goundmovespeed, __spreadArrays(this.systems["scene"].groundscale));
    this.createwave(this.systems["scene2"].distanceofwave);
    this.gl.enable(this.gl.CULL_FACE);
    this.gl.cullFace(this.gl.BACK);
    this.gl.frontFace(this.gl.CCW);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.gl.depthFunc(this.gl.LEQUAL);
  };

  Level2.prototype.createwave = function (dis) {
    var random = Math.floor(Math.random() * 4) + 1; //Get a random number from 1 to 3

    random = random - 1;
    this.cubeNumber = this.cubeN[random]; // this.cubeNumber = 21;

    var index = 1;

    for (var x = this.x_cubes[random]; x <= this.x_end[random]; x += this.inc_x[random]) {
      for (var z = -12; z <= 12; z += 4) {
        var v = gl_matrix_1.vec3.create();
        gl_matrix_1.vec3.add(v, v, [x - dis, 0, z]);
        this.cubeController[index] = new obstacle_controller_1.default(v, this.systems["scene"].cubescale, this.systems["scene"].goundmovespeed); //Select the applied texture

        var randomNumber = Math.floor(Math.random() * 6) + 1; //Get a random number from 1 to 6

        if ((index + randomNumber) % 7 == 0 || (index + randomNumber + 1) % 7 == 0) {
          this.cubeController[index].texturetype = 'Cubet2';
          this.cubeController[index].color = 1;
        } else {
          this.cubeController[index].texturetype = 'Cubet';
          this.cubeController[index].color = 0;
        }

        index++;
      }
    }
  };

  Level2.prototype.detcoll = function (cubeController) {
    var center = this.playercontroller.postion;
    var bmin = cubeController.Minpos;
    var bmax = cubeController.Maxpos;
    var x = Math.max(bmin[0], Math.min(center[0], bmax[0]));
    var y = Math.max(bmin[1], Math.min(center[1], bmax[1]));
    var z = Math.max(bmin[2], Math.min(center[2], bmax[2]));
    var distance = Math.sqrt((x - center[0]) * (x - center[0]) + (y - center[1]) * (y - center[1]) + (z - center[2]) * (z - center[2]));

    if (distance < 2) {
      if (cubeController.color == 0) this.game.scoree += 100;
      return true;
    } else return false;
  };

  Level2.prototype.draw2 = function (x) {
    var _this = this;

    window.requestAnimationFrame(function () {
      return _this.draw2;
    });
    this.contxt.clearRect(0, 0, 1000, 100); //clear canvas for new input

    this.contxt.font = "35px Arial";
    this.contxt.fillText(x.toString(), 10, 50);
  };

  Level2.prototype.draw = function (deltaTime, time) {
    this.playercontroller.update(deltaTime);
    this.groundcontroller.update();

    for (var x = 1; x <= this.cubeNumber; x++) {
      if (this.cubeController[x].colstatus === false) {
        this.cubeController[x].colstatus = this.detcoll(this.cubeController[x]);
        this.cubeController[x].update(deltaTime);
      }
    }

    for (var x = 1; x <= this.cubeNumber; x++) {
      if (this.cubeController[x].colstatus === true && this.cubeController[x].color === 1) {
        this.playercontroller.die = 1;
        this.groundcontroller.hold = 1;

        for (var z = 1; z <= this.cubeNumber; z++) {
          this.cubeController[z].hold = 1;
        }

        break;
      } else {
        for (var y = 1; y <= 7; y++) {
          if (this.playercontroller.gre > this.systems['scene'].distanceofwave + 50) //controls the distance i have to walk in the scene to generate another wave
            {
              for (var z = 1; z <= this.cubeNumber; z++) {
                delete this.cubeController[z];
              }

              this.playercontroller.gre = 0;
              this.createwave(this.systems["scene2"].distanceofwave);
            }
        } //4

      }
    }

    if (!this.playercontroller.die) this.draw2(this.game.scoree);
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.frameBuffer);
    this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
    {
      this.gl.drawBuffers([this.gl.COLOR_ATTACHMENT0, this.gl.COLOR_ATTACHMENT1]);
      this.gl.clearBufferfv(this.gl.COLOR, 0, __spreadArrays(this.systems["scene"].backgroundcolor)); //0.67,0.84,0.9, 1

      this.gl.clearBufferfv(this.gl.COLOR, 1, [0, 0, 0, 1]);
      this.gl.clearBufferfi(this.gl.DEPTH_STENCIL, 0, 1, 0);
      this.gl.bindSampler(0, this.samplers['regular']);
      var program = this.programs['3d'];
      program.use();

      for (var x = 1; x <= this.cubeNumber; x++) {
        var MatCube = this.cubeController[x].M;
        program.setUniformMatrix4fv("VP", false, this.camera.ViewProjectionMatrix);
        program.setUniformMatrix4fv("M", false, MatCube);
        program.setUniformMatrix4fv("M_it", true, gl_matrix_1.mat4.invert(gl_matrix_1.mat4.create(), MatCube));
        program.setUniform4f("tint", __spreadArrays(this.systems["scene"].tintcubes));
        this.gl.activeTexture(this.gl.TEXTURE3);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures[this.cubeController[x].texturetype]);
        program.setUniform1i('texture_sampler', 3);
        this.gl.bindSampler(3, this.samplers['regular']);
        this.meshes['Cube'].draw(this.gl.TRIANGLES);
      }

      program = this.programs['3d'];
      program.use();
      program.setUniformMatrix4fv("VP", false, this.camera.ViewProjectionMatrix);
      var backgroundMat = gl_matrix_1.mat4.create();
      gl_matrix_1.mat4.translate(backgroundMat, backgroundMat, [-10, -0.1, 0]);
      gl_matrix_1.mat4.scale(backgroundMat, backgroundMat, [540, 1, 960]);
      program.setUniformMatrix4fv("M", false, backgroundMat);
      program.setUniformMatrix4fv("M_it", true, gl_matrix_1.mat4.invert(gl_matrix_1.mat4.create(), backgroundMat));
      program.setUniform4f("tint", __spreadArrays(this.systems["scene"].tintground));
      this.gl.activeTexture(this.gl.TEXTURE0);
      this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures['Background']);
      program.setUniform1i('texture_sampler', 0);
      this.gl.bindSampler(0, this.samplers['regular']);
      this.meshes['Background'].draw(this.gl.TRIANGLES);
      var groundMat = this.groundcontroller.M;
      program.setUniformMatrix4fv("M", false, groundMat);
      program.setUniformMatrix4fv("M_it", true, gl_matrix_1.mat4.invert(gl_matrix_1.mat4.create(), groundMat));
      program.setUniform4f("tint", __spreadArrays(this.systems["scene"].tintground));
      this.gl.activeTexture(this.gl.TEXTURE0);
      this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures['Ground']);
      program.setUniform1i('texture_sampler', 0);
      this.gl.bindSampler(0, this.samplers['regular']);
      this.meshes['Ground'].draw(this.gl.TRIANGLES);
      program.setUniformMatrix4fv("M", false, this.playercontroller.M);
      program.setUniformMatrix4fv("M_it", true, gl_matrix_1.mat4.invert(gl_matrix_1.mat4.create(), this.playercontroller.M));

      if (this.playercontroller.die === 0) {
        program.setUniform4f("tint", __spreadArrays(this.systems["scene"].tintplayer));
      } else {
        program.setUniform4f("tint", [1, (Math.abs(Math.sin(time * 1000)) + 0.5) / 2 + 0.2, (Math.abs(Math.sin(time * 50)) + 0.2) / 2 + 0.5, 1]);
      }

      this.gl.activeTexture(this.gl.TEXTURE0);
      this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures['Ball']);
      program.setUniform1i('texture_sampler', 0);
      this.meshes['Ball'].draw(this.gl.TRIANGLES);
    }
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
    this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
    {
      this.gl.clearColor(0.08, 0.32, 0.44, 1);
      this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
      var program = void 0;
      program = this.programs['light'];
      program.use();
      this.gl.activeTexture(this.gl.TEXTURE0);
      this.gl.bindSampler(0, this.samplers['postprocess']);
      this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures['color-target']);
      program.setUniform1i('color_sampler', 0);
      this.gl.activeTexture(this.gl.TEXTURE1);
      this.gl.bindSampler(1, this.samplers['postprocess']);
      this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures['normal-target']);
      program.setUniform1i('normal_sampler', 1);
      this.gl.bindSampler(2, this.samplers['postprocess']);
      this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures['depth-target']);
      program.setUniform1i('depth_sampler', 2);
      program.setUniform1f('fog_distance', this.systems["scene"].fogdistance); //4

      program.setUniform4f('fog_color', __spreadArrays(this.systems["scene"].fogcolor)); //3 0.76,0.83,0.56, 1

      program.setUniformMatrix4fv('P_i', false, gl_matrix_1.mat4.invert(gl_matrix_1.mat4.create(), this.camera.ProjectionMatrix));
      var light_direction = gl_matrix_1.vec3.create();
      gl_matrix_1.vec3.add(light_direction, light_direction, __spreadArrays(this.systems["scene"].lightdirection));
      gl_matrix_1.vec3.normalize(light_direction, light_direction);
      program.setUniform3f('light_direction', light_direction);
      program.setUniform4f('light_color', __spreadArrays(this.systems["scene"].lightcolor)); //1

      program.setUniform4f('ambient_color', __spreadArrays(this.systems["scene"].ambientcolor)); //2

      this.gl.drawArrays(this.gl.TRIANGLES, 0, 3);
    }
  };

  Level2.prototype.end = function () {
    for (var key in this.programs) {
      this.programs[key].dispose();
    }

    this.programs = {};

    for (var key in this.meshes) {
      this.meshes[key].dispose();
    }

    this.meshes = {};
    this.gl.deleteFramebuffer(this.frameBuffer);

    for (var key in this.textures) {
      this.gl.deleteTexture(this.textures[key]);
    }

    this.textures = {};
    this.clearControls();
  };

  Level2.prototype.clearControls = function () {
    var controls = document.querySelector('#controls');
    controls.innerHTML = "";
  };

  return Level2;
}(game_1.Scene);

exports.default = Level2;
},{"../common/game":"src/common/game.ts","../common/shader-program":"src/common/shader-program.ts","../common/mesh-utils":"src/common/mesh-utils.ts","../common/camera":"src/common/camera.ts","../common/Cotrollers/Player-controller":"src/common/Cotrollers/Player-controller.ts","../common/Cotrollers/ground-controller":"src/common/Cotrollers/ground-controller.ts","gl-matrix":"node_modules/gl-matrix/esm/index.js","../common/Cotrollers/obstacle-controller":"src/common/Cotrollers/obstacle-controller.ts"}],"src/app.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
}); // Here, we import the things we need from other script files 

var game_1 = __importDefault(require("./common/game"));

var Level1_1 = __importDefault(require("./scenes/Level1"));

var Level2_1 = __importDefault(require("./scenes/Level2")); //import Level2 from './scenes/level2';
// First thing we need is to get the canvas on which we draw our scenes


var canvas = document.querySelector("#app");
var score = document.querySelector("#c2d"); // Then we create an instance of the game class and give it the canvas

var game = new game_1.default(canvas, score); // Here we list all our scenes and our initial scene

var scenes = {
  "Level1": Level1_1.default,
  "Level2": Level2_1.default
};
var initialScene = "Level1"; // Then we add those scenes to the game object and ask it to start the initial scene

game.addScenes(scenes); // Here we setup a selector element to switch scenes from the webpage

var selector = document.querySelector("#scenes");
var button = document.querySelector("#choose");

for (var name in scenes) {
  var option = document.createElement("option");
  option.text = name;
  option.value = name;
  selector.add(option);
}

selector.value = initialScene;
button.addEventListener("click", function () {
  game.lastTick = performance.now();
  game.scoree = 0;
  game.startScene(selector.value);
});
},{"./common/game":"src/common/game.ts","./scenes/Level1":"src/scenes/Level1.tsx","./scenes/Level2":"src/scenes/Level2.tsx"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52632" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/app.ts"], null)
//# sourceMappingURL=/app.5cec07dd.js.map