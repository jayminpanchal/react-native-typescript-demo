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
var InputText_Component_1 = __importDefault(require("../../components/InputText/InputText.Component"));
var Button_Component_1 = __importDefault(require("../../components/Button/Button.Component"));
var action_1 = require("../../store/action");
var validation_1 = require("../../utils/validation");
var styles_1 = __importDefault(require("./styles"));
var SignIn = /** @class */ (function (_super) {
    __extends(SignIn, _super);
    function SignIn(props) {
        var _this = _super.call(this, props) || this;
        _this.onSignIn = function () {
            console.log("state", _this.state);
            var _a = _this.state, email = _a.email, password = _a.password;
            var emailError, passwordError;
            var isError = false;
            if (!email || !validation_1.isValidEmail(email)) {
                isError = true;
                emailError = "Invalid Email";
            }
            if (!password) {
                isError = true;
                passwordError = "Invalid Password";
            }
            _this.setState({ emailError: emailError, passwordError: passwordError });
            if (isError)
                return;
            _this.props.setUser({ email: email });
            _this.props.navigation.dispatch(AppContainer_1.resetHomeAction);
        };
        _this.onChange = function (name, value) {
            var _a;
            _this.setState((_a = {},
                _a[name] = value,
                _a));
        };
        _this.state = {
            email: '',
            password: '',
            emailError: '',
            passwordError: ''
        };
        return _this;
    }
    SignIn.prototype.render = function () {
        var _a = this.state, email = _a.email, password = _a.password, emailError = _a.emailError, passwordError = _a.passwordError;
        return (react_1.default.createElement(react_native_1.View, { style: styles_1.default.container },
            react_1.default.createElement(react_native_1.View, { style: styles_1.default.formContainer },
                react_1.default.createElement(InputText_Component_1.default, { label: "Email", name: "email", onChangeText: this.onChange, value: email, error: emailError }),
                react_1.default.createElement(InputText_Component_1.default, { label: "Password", name: "password", onChangeText: this.onChange, value: password, secureTextEntry: true, error: passwordError }),
                react_1.default.createElement(Button_Component_1.default, { title: "Sign In", onPress: this.onSignIn }))));
    };
    return SignIn;
}(react_1.default.Component));
var mapDispatchToProps = function (dispatch) {
    return {
        setUser: function (payload) { return dispatch(action_1.setUser(payload)); }
    };
};
exports.default = react_redux_1.connect(null, mapDispatchToProps)(SignIn);
