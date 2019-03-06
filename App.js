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
var react_2 = require("redux-persist/integration/react");
var store_1 = __importDefault(require("./src/store"));
var AppContainer_1 = __importDefault(require("./src/navigation/AppContainer"));
var _a = store_1.default(), store = _a.store, persistor = _a.persistor;
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (react_1.default.createElement(react_redux_1.Provider, { store: store },
            react_1.default.createElement(react_2.PersistGate, { loading: null, persistor: persistor },
                react_1.default.createElement(react_native_1.View, { style: styles.container },
                    react_1.default.createElement(AppContainer_1.default, null)))));
    };
    return App;
}(react_1.default.Component));
exports.default = App;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1
    }
});
