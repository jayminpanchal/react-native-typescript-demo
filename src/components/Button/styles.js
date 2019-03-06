"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var colors_1 = __importDefault(require("../../utils/colors"));
var styles = react_native_1.StyleSheet.create({
    buttonContainer: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        elevation: 4,
        backgroundColor: colors_1.default.DARK
    },
    button: {
        fontSize: 15,
        color: colors_1.default.LIGHT,
        textAlign: "center"
    }
});
exports.default = styles;
