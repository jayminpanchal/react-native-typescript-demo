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
var FontAwesome_1 = __importDefault(require("react-native-vector-icons/FontAwesome"));
var react_navigation_1 = require("react-navigation");
var react_redux_1 = require("react-redux");
var action_1 = require("../../store/action");
var AppContainer_1 = require("../../navigation/AppContainer");
var react_native_1 = require("react-native");
var LogOut = /** @class */ (function (_super) {
    __extends(LogOut, _super);
    function LogOut() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onLogOut = function () {
            _this.props.logOut();
            _this.props.navigation.dispatch(AppContainer_1.resetSignInAction);
        };
        return _this;
    }
    LogOut.prototype.render = function () {
        return (react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: this.onLogOut },
            react_1.default.createElement(FontAwesome_1.default, { name: "sign-out", size: 25 })));
    };
    return LogOut;
}(react_1.default.Component));
var mapDispatchToProps = function (dispatch) {
    return {
        logOut: function () { return dispatch(action_1.logOut()); }
    };
};
exports.default = react_navigation_1.withNavigation(react_redux_1.connect(null, mapDispatchToProps)(LogOut));
