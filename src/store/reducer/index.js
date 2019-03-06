"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var actionType_1 = require("../actionType");
var INITIAL_STATE = {
    user: null
};
exports.default = (function (state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case actionType_1.SET_USER:
            return __assign({}, state, { user: action.payload });
        case actionType_1.LOGOUT:
        default:
            return __assign({}, INITIAL_STATE);
    }
});
