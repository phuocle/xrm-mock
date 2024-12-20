"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var panel_mock_1 = require("../xrm-mock/panel/panel.mock");
var Panel = /** @class */ (function () {
    function Panel() {
    }
    Panel.createPanel = function () {
        var panel = new panel_mock_1.PanelMock();
        return panel;
    };
    return Panel;
}());
exports.default = Panel;
//# sourceMappingURL=panel.js.map