"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DelayedResponse = void 0;
function DelayedResponse(delay, response) {
    return new Promise(function (resolve) {
        setTimeout(function () { return resolve(response); }, delay);
    });
}
exports.DelayedResponse = DelayedResponse;
