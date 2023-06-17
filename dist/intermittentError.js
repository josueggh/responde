"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntermittentError = void 0;
function IntermittentError(errorRate, successResponse, errorResponse) {
    var randomValue = Math.random();
    if (randomValue < errorRate) {
        return Promise.resolve(errorResponse);
    }
    else {
        return Promise.resolve(successResponse);
    }
}
exports.IntermittentError = IntermittentError;
