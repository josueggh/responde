"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermanentRedirect = exports.TemporaryRedirect = exports.UseProxy = exports.NotModified = exports.SeeOther = exports.Found = exports.MovedPermanently = exports.MultipleChoices = void 0;
function generateRedirection(status, body) {
    if (body === void 0) { body = {}; }
    return new Promise(function (resolve) {
        process.nextTick(function () { return resolve({ status: status, body: body }); });
    });
}
var MultipleChoices = function (body) { return generateRedirection(300, body); };
exports.MultipleChoices = MultipleChoices;
var MovedPermanently = function (body) { return generateRedirection(301, body); };
exports.MovedPermanently = MovedPermanently;
var Found = function (body) { return generateRedirection(302, body); };
exports.Found = Found;
var SeeOther = function (body) { return generateRedirection(303, body); };
exports.SeeOther = SeeOther;
var NotModified = function () { return generateRedirection(304); };
exports.NotModified = NotModified;
var UseProxy = function (body) { return generateRedirection(305, body); };
exports.UseProxy = UseProxy;
var TemporaryRedirect = function (body) { return generateRedirection(307, body); };
exports.TemporaryRedirect = TemporaryRedirect;
var PermanentRedirect = function (body) { return generateRedirection(308, body); };
exports.PermanentRedirect = PermanentRedirect;
