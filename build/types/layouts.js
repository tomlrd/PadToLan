"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BGRepeat = exports.Justify = exports.Pos = exports.BGSize = void 0;
var BGSize;
(function (BGSize) {
    BGSize["cover"] = "cover";
    BGSize["contain"] = "contain";
})(BGSize || (exports.BGSize = BGSize = {}));
;
var Pos;
(function (Pos) {
    Pos["right"] = "right";
    Pos["left"] = "left";
    Pos["bottom"] = "bottom";
    Pos["top"] = "top";
    Pos["center"] = "center";
})(Pos || (exports.Pos = Pos = {}));
;
var Justify;
(function (Justify) {
    Justify["start"] = "flex-start";
    Justify["end"] = "flex-end";
    Justify["evenly"] = "space-evenly";
    Justify["between"] = "space-between";
    Justify["around"] = "space-around";
    Justify["center"] = "center";
})(Justify || (exports.Justify = Justify = {}));
;
var BGRepeat;
(function (BGRepeat) {
    BGRepeat["repeat"] = "repeat";
    BGRepeat["norepeat"] = "no-repeat";
    BGRepeat["repeatX"] = "repeat-x";
    BGRepeat["repeatY"] = "repeat-y";
})(BGRepeat || (exports.BGRepeat = BGRepeat = {}));
