"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderSectionMock = void 0;
var HeaderSectionMock = /** @class */ (function () {
    function HeaderSectionMock(bodyVisible, commandBarVisible, tabNavigatorVisible) {
        this.bodyVisible = bodyVisible;
        this.commandBarVisible = commandBarVisible;
        this.tabNavigatorVisible = tabNavigatorVisible;
    }
    HeaderSectionMock.prototype.getBodyVisible = function () {
        return this.bodyVisible;
    };
    HeaderSectionMock.prototype.setBodyVisible = function (bodyVisible) {
        this.bodyVisible = bodyVisible;
    };
    HeaderSectionMock.prototype.getCommandBarVisible = function () {
        return this.commandBarVisible;
    };
    HeaderSectionMock.prototype.setCommandBarVisible = function (commandBarVisible) {
        this.commandBarVisible = commandBarVisible;
    };
    HeaderSectionMock.prototype.getTabNavigatorVisible = function () {
        return this.tabNavigatorVisible;
    };
    HeaderSectionMock.prototype.setTabNavigatorVisible = function (tabNavigatorVisible) {
        this.tabNavigatorVisible = tabNavigatorVisible;
    };
    return HeaderSectionMock;
}());
exports.HeaderSectionMock = HeaderSectionMock;
//# sourceMappingURL=headersection.mock.js.map