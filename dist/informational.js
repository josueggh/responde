"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EarlyHints = exports.Processing = exports.SwitchingProtocols = exports.Continue = void 0;
function generateInformational(status, body) {
    if (body === void 0) { body = {}; }
    return new Promise(function (resolve) {
        process.nextTick(function () { return resolve({ status: status, body: body }); });
    });
}
var Continue = function (body) { return generateInformational(100, body); };
exports.Continue = Continue;
var SwitchingProtocols = function (body) { return generateInformational(101, body); };
exports.SwitchingProtocols = SwitchingProtocols;
var Processing = function (body) { return generateInformational(102, body); };
exports.Processing = Processing;
var EarlyHints = function (body) { return generateInformational(103, body); };
exports.EarlyHints = EarlyHints;
