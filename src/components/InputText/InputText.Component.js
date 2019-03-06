"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var colors_1 = __importDefault(require("../../utils/colors"));
var styles_1 = __importDefault(require("./styles"));
var InputText = /** @class */ (function (_super) {
    __extends(InputText, _super);
    function InputText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputText.prototype.render = function () {
        var _a = this.props, label = _a.label, name = _a.name, onChangeText = _a.onChangeText, error = _a.error;
        return (react_1.default.createElement(react_native_1.View, { style: styles_1.default.inputTextContainer },
            react_1.default.createElement(react_native_1.Text, { style: styles_1.default.inputLabel }, label),
            react_1.default.createElement(react_native_1.TextInput, __assign({}, this.props, { style: styles_1.default.inputText, underlineColorAndroid: colors_1.default.DARK, onChangeText: function (value) { return onChangeText(name, value); } })),
            react_1.default.createElement(react_native_1.Text, { style: styles_1.default.inputError }, error)));
    };
    return InputText;
}(react_1.default.Component));
exports.default = InputText;
