"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartialContent = exports.ResetContent = exports.NoContent = exports.NonAuthoritativeInformation = exports.Accepted = exports.Created = exports.OK = void 0;
function generateSuccess(status, body) {
    if (body === void 0) { body = {}; }
    return new Promise(function (resolve) {
        process.nextTick(function () { return resolve({ status: status, body: body }); });
    });
}
var OK = function (body) { return generateSuccess(200, body); };
exports.OK = OK;
var Created = function (body) { return generateSuccess(201, body); };
exports.Created = Created;
var Accepted = function (body) { return generateSuccess(202, body); };
exports.Accepted = Accepted;
var NonAuthoritativeInformation = function (body) { return generateSuccess(203, body); };
exports.NonAuthoritativeInformation = NonAuthoritativeInformation;
var NoContent = function () { return generateSuccess(204); };
exports.NoContent = NoContent;
var ResetContent = function () { return generateSuccess(205); };
exports.ResetContent = ResetContent;
var PartialContent = function (body) { return generateSuccess(206, body); };
exports.PartialContent = PartialContent;
