"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gone = exports.Conflict = exports.RequestTimeout = exports.ProxyAuthenticationRequired = exports.NotAcceptable = exports.MethodNotAllowed = exports.NotFound = exports.Forbidden = exports.PaymentRequired = exports.Unauthorized = exports.BadRequest = void 0;
function generateClientError(status, body) {
    if (body === void 0) { body = {}; }
    return new Promise(function (resolve) {
        process.nextTick(function () { return resolve({ status: status, body: body }); });
    });
}
var BadRequest = function (body) { return generateClientError(400, body); };
exports.BadRequest = BadRequest;
var Unauthorized = function (body) { return generateClientError(401, body); };
exports.Unauthorized = Unauthorized;
var PaymentRequired = function (body) { return generateClientError(402, body); };
exports.PaymentRequired = PaymentRequired;
var Forbidden = function (body) { return generateClientError(403, body); };
exports.Forbidden = Forbidden;
var NotFound = function (body) { return generateClientError(404, body); };
exports.NotFound = NotFound;
var MethodNotAllowed = function (body) { return generateClientError(405, body); };
exports.MethodNotAllowed = MethodNotAllowed;
var NotAcceptable = function (body) { return generateClientError(406, body); };
exports.NotAcceptable = NotAcceptable;
var ProxyAuthenticationRequired = function (body) { return generateClientError(407, body); };
exports.ProxyAuthenticationRequired = ProxyAuthenticationRequired;
var RequestTimeout = function (body) { return generateClientError(408, body); };
exports.RequestTimeout = RequestTimeout;
var Conflict = function (body) { return generateClientError(409, body); };
exports.Conflict = Conflict;
var Gone = function (body) { return generateClientError(410, body); };
exports.Gone = Gone;
// Add more here...
