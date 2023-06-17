"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPVersionNotSupported = exports.GatewayTimeout = exports.ServiceUnavailable = exports.BadGateway = exports.NotImplemented = exports.InternalServerError = void 0;
function generateServerError(status, body) {
    if (body === void 0) { body = {}; }
    return new Promise(function (resolve) {
        process.nextTick(function () { return resolve({ status: status, body: body }); });
    });
}
var InternalServerError = function (body) { return generateServerError(500, body); };
exports.InternalServerError = InternalServerError;
var NotImplemented = function (body) { return generateServerError(501, body); };
exports.NotImplemented = NotImplemented;
var BadGateway = function (body) { return generateServerError(502, body); };
exports.BadGateway = BadGateway;
var ServiceUnavailable = function (body) { return generateServerError(503, body); };
exports.ServiceUnavailable = ServiceUnavailable;
var GatewayTimeout = function (body) { return generateServerError(504, body); };
exports.GatewayTimeout = GatewayTimeout;
var HTTPVersionNotSupported = function (body) { return generateServerError(505, body); };
exports.HTTPVersionNotSupported = HTTPVersionNotSupported;
