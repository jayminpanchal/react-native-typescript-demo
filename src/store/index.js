"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var redux_persist_1 = require("redux-persist");
var storage_1 = __importDefault(require("redux-persist/lib/storage"));
var reducer_1 = __importDefault(require("./reducer"));
var persistConfig = {
    key: 'testAppRoot',
    storage: storage_1.default,
};
var persistedReducer = redux_persist_1.persistReducer(persistConfig, reducer_1.default);
exports.default = (function () {
    var store = redux_1.createStore(persistedReducer);
    var persistor = redux_persist_1.persistStore(store);
    return { store: store, persistor: persistor };
});
