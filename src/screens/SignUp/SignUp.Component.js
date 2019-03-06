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
var InputText_Component_1 = __importDefault(require("../../components/InputText/InputText.Component"));
var Button_Component_1 = __importDefault(require("../../components/Button/Button.Component"));
var action_1 = require("../../store/action");
var styles_1 = __importDefault(require("./styles"));
var validation_1 = require("../../utils/validation");
var AppContainer_1 = require("../../navigation/AppContainer");
var SignUp = /** @class */ (function (_super) {
    __extends(SignUp, _super);
    function SignUp(props) {
        var _this = _super.call(this, props) || this;
        _this.onSignUp = function () {
            var _a = _this.state, name = _a.name, email = _a.email, password = _a.password;
            var nameError, emailError, passwordError;
            var isError = false;
            if (!email || !validation_1.isValidEmail(email)) {
                isError = true;
                nameError = "Invalid Email";
            }
            if (!name) {
                isError = true;
                emailError = "Invalid Name";
            }
            if (!password) {
                isError = true;
                passwordError = "Invalid Password";
            }
            _this.setState({ nameError: nameError, emailError: emailError, passwordError: passwordError });
            if (isError)
                return;
            _this.props.setUser({ name: name, email: email });
            _this.props.navigation.dispatch(AppContainer_1.resetHomeAction);
        };
        _this.onChange = function (name, value) {
            var _a;
            _this.setState((_a = {},
                _a[name] = value,
                _a));
        };
        _this.state = {
            name: '',
            email: '',
            password: '',
            nameError: '',
            emailError: '',
            passwordError: ''
        };
        return _this;
    }
    SignUp.prototype.render = function () {
        var _a = this.state, name = _a.name, email = _a.email, password = _a.password;
        return (react_1.default.createElement(react_native_1.View, { style: styles_1.default.container },
            react_1.default.createElement(react_native_1.View, { style: styles_1.default.formContainer },
                react_1.default.createElement(InputText_Component_1.default, { label: "Name", name: "name", onChangeText: this.onChange, value: name }),
                react_1.default.createElement(InputText_Component_1.default, { label: "Email", name: "email", onChangeText: this.onChange, value: email }),
                react_1.default.createElement(InputText_Component_1.default, { label: "Password", name: "password", onChangeText: this.onChange, value: password }),
                react_1.default.createElement(Button_Component_1.default, { title: "Sign Up", onPress: this.onSignUp }))));
    };
    return SignUp;
}(react_1.default.Component));
var mapDispatchToProps = function (dispatch) {
    return {
        setUser: function (payload) { return dispatch(action_1.setUser(payload)); }
    };
};
exports.default = react_redux_1.connect(null, mapDispatchToProps)(SignUp);
