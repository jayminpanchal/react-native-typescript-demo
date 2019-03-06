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
var react_redux_1 = require("react-redux");
var styles_1 = __importDefault(require("./styles"));
var Tab1 = /** @class */ (function (_super) {
    __extends(Tab1, _super);
    function Tab1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tab1.prototype.render = function () {
        var user = this.props.user;
        return (react_1.default.createElement(react_native_1.View, { style: styles_1.default.container },
            react_1.default.createElement(react_native_1.Text, { style: styles_1.default.heading }, "Welcome User"),
            react_1.default.createElement(react_native_1.Text, { style: styles_1.default.heading }, user.name)));
    };
    return Tab1;
}(react_1.default.Component));
var mapStateToProps = function (state) {
    return {
        user: state.user
    };
};
exports.default = react_redux_1.connect(mapStateToProps)(Tab1);
