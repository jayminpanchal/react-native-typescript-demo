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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var styles_1 = __importDefault(require("./styles"));
var Tab4 = /** @class */ (function (_super) {
    __extends(Tab4, _super);
    function Tab4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tab4.prototype.render = function () {
        return (react_1.default.createElement(react_native_1.View, { style: styles_1.default.container },
            react_1.default.createElement(react_native_1.Text, { style: styles_1.default.heading }, "Tab 4")));
    };
    return Tab4;
}(react_1.default.Component));
exports.default = Tab4;
