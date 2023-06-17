"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkError = void 0;
function NetworkError() {
    return new Promise(function (_, reject) {
        process.nextTick(function () { return reject(new Error('Network Error')); });
    });
}
exports.NetworkError = NetworkError;
