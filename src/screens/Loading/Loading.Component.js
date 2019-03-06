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
var AppContainer_1 = require("../../navigation/AppContainer");
var Loading = /** @class */ (function (_super) {
    __extends(Loading, _super);
    function Loading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Loading.prototype.componentDidMount = function () {
        var user = this.props.user;
        this.props.navigation.dispatch(user ? AppContainer_1.resetHomeAction : AppContainer_1.resetSignInAction);
    };
    Loading.prototype.render = function () {
        return (react_1.default.createElement(react_native_1.View, null));
    };
    return Loading;
}(react_1.default.Component));
var mapStateToProps = function (state) {
    return {
        user: state.user
    };
};
exports.default = react_redux_1.connect(mapStateToProps)(Loading);
