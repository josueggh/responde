"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MalformedResponse = void 0;
function MalformedResponse() {
    var malformedResponse = '{"thisIs": "a malformed JSON string" missingClosingBrace';
    return Promise.resolve(malformedResponse);
}
exports.MalformedResponse = MalformedResponse;
