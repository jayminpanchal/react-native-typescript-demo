"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actionType_1 = require("../actionType");
exports.setUser = function (payload) { return ({
    type: actionType_1.SET_USER,
    payload: payload,
}); };
exports.logOut = function () { return ({
    type: actionType_1.LOGOUT,
}); };
