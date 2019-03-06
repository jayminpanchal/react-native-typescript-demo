"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Feather_1 = __importDefault(require("react-native-vector-icons/Feather"));
var react_navigation_1 = require("react-navigation");
var Tab1_Component_1 = __importDefault(require("../screens/Tab1/Tab1.Component"));
var Tab2_Component_1 = __importDefault(require("../screens/Tab2/Tab2.Component"));
var Tab3_Component_1 = __importDefault(require("../screens/Tab3/Tab3.Component"));
var Tab4_Component_1 = __importDefault(require("../screens/Tab4/Tab4.Component"));
exports.default = react_navigation_1.createBottomTabNavigator({
    Tab1: {
        screen: Tab1_Component_1.default,
        navigationOptions: {
            tabBarIcon: function () {
                return react_1.default.createElement(Feather_1.default, { name: "activity" });
            }
        }
    },
    Tab2: {
        screen: Tab2_Component_1.default,
        navigationOptions: {
            tabBarIcon: function () {
                return react_1.default.createElement(Feather_1.default, { name: "activity" });
            }
        }
    },
    Tab3: {
        screen: Tab3_Component_1.default,
        navigationOptions: {
            tabBarIcon: function () {
                return react_1.default.createElement(Feather_1.default, { name: "activity" });
            }
        }
    },
    Tab4: {
        screen: Tab4_Component_1.default,
        navigationOptions: {
            tabBarIcon: function () {
                return react_1.default.createElement(Feather_1.default, { name: "activity" });
            }
        }
    },
});
