"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_navigation_1 = require("react-navigation");
var Loading_Component_1 = __importDefault(require("../screens/Loading/Loading.Component"));
var SignIn_Component_1 = __importDefault(require("../screens/SignIn/SignIn.Component"));
var SignUp_Component_1 = __importDefault(require("../screens/SignUp/SignUp.Component"));
var HomeTab_1 = __importDefault(require("./HomeTab"));
var LogOut_Component_1 = __importDefault(require("../components/LogOut/LogOut.Component"));
exports.resetHomeAction = react_navigation_1.StackActions.reset({
    index: 0,
    actions: [react_navigation_1.NavigationActions.navigate({ routeName: 'Home' })],
});
exports.resetSignInAction = react_navigation_1.StackActions.reset({
    index: 0,
    actions: [react_navigation_1.NavigationActions.navigate({ routeName: 'SignIn' })],
});
exports.AppNavigator = react_navigation_1.createStackNavigator({
    Loading: {
        screen: Loading_Component_1.default,
        navigationOptions: {
            header: null
        }
    },
    SignIn: {
        screen: SignIn_Component_1.default,
        navigationOptions: {
            title: 'Sign In'
        }
    },
    SignUp: {
        screen: SignUp_Component_1.default,
        navigationOptions: {
            title: 'Sign Up'
        }
    },
    Home: {
        screen: HomeTab_1.default,
        navigationOptions: {
            title: 'Home',
            headerRight: react_1.default.createElement(LogOut_Component_1.default, null)
        }
    }
}, { initialRouteName: 'Loading' });
exports.default = react_navigation_1.createAppContainer(exports.AppNavigator);
