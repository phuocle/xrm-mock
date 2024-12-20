"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var encoding_mock_1 = require("../xrm-mock/encoding/encoding.mock");
var Encoding = /** @class */ (function () {
    function Encoding() {
    }
    Encoding.createEncoding = function () {
        var encoding = new encoding_mock_1.EncodingMock();
        return encoding;
    };
    return Encoding;
}());
exports.default = Encoding;
//# sourceMappingURL=encoding.js.map