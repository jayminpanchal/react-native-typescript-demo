"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var colors_1 = __importDefault(require("../../utils/colors"));
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: "space-between"
    },
    heading: {
        textAlign: "center",
        fontSize: 20,
        color: colors_1.default.DARK
    },
    formContainer: {
        marginTop: 20
    }
});
exports.default = styles;
