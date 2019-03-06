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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var react_redux_1 = require("react-redux");
var react_native_snackbar_1 = __importDefault(require("react-native-snackbar"));
var AppContainer_1 = require("../../navigation/AppContainer");
var InputText_Component_1 = __importDefault(require("../../components/InputText/InputText.Component"));
var Button_Component_1 = __importDefault(require("../../components/Button/Button.Component"));
var action_1 = require("../../store/action");
var validation_1 = require("../../utils/validation");
var styles_1 = __importDefault(require("./styles"));
var constant_1 = require("../../utils/constant");
var SignIn = /** @class */ (function (_super) {
    __extends(SignIn, _super);
    function SignIn(props) {
        var _this = _super.call(this, props) || this;
        _this.onSignIn = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, email, password, emailError, passwordError, isError, users, user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log("state", this.state);
                        _a = this.state, email = _a.email, password = _a.password;
                        isError = false;
                        if (!email || !validation_1.isValidEmail(email)) {
                            isError = true;
                            emailError = "Invalid Email";
                        }
                        if (!password) {
                            isError = true;
                            passwordError = "Invalid Password";
                        }
                        this.setState({ emailError: emailError, passwordError: passwordError });
                        if (isError)
                            return [2 /*return*/];
                        return [4 /*yield*/, react_native_1.AsyncStorage.getItem(constant_1.KEY_USERS)];
                    case 1:
                        users = _b.sent();
                        users = !users ? [] : JSON.parse(users);
                        user = users.find(function (user) { return user.email === email && user.password === password; });
                        if (!user) {
                            react_native_snackbar_1.default.show({
                                title: 'Invalid Login details',
                            });
                            return [2 /*return*/];
                        }
                        this.props.setUser(user);
                        this.props.navigation.dispatch(AppContainer_1.resetHomeAction);
                        return [2 /*return*/];
                }
            });
        }); };
        _this.onSignUp = function () {
            _this.props.navigation.navigate("SignUp");
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
                react_1.default.createElement(Button_Component_1.default, { title: "Sign In", onPress: this.onSignIn })),
            react_1.default.createElement(Button_Component_1.default, { title: "Sign Up", onPress: this.onSignUp })));
    };
    return SignIn;
}(react_1.default.Component));
var mapDispatchToProps = function (dispatch) {
    return {
        setUser: function (payload) { return dispatch(action_1.setUser(payload)); }
    };
};
exports.default = react_redux_1.connect(null, mapDispatchToProps)(SignIn);
