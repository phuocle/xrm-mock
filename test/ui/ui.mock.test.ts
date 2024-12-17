import { ItemCollectionMock } from "../../src/xrm-mock/collection/itemcollection/itemcollection.mock";
import { FooterSectionMock } from "../../src/xrm-mock/controls/footersection/footersection.mock";
import { FormItemMock } from "../../src/xrm-mock/controls/formitem/formitem.mock";
import { FormSelectorMock } from "../../src/xrm-mock/controls/formselector/formselector.mock";
import { HeaderSectionMock } from "../../src/xrm-mock/controls/headersection/headersection.mock";
import { UiMock } from "../../src/xrm-mock/ui/ui.mock";

describe("Xrm.Ui Mock", () => {
    let xrmUiMock: UiMock;

    beforeEach(() => {
        xrmUiMock = new UiMock({
            formSelector: new FormSelectorMock(new ItemCollectionMock<FormItemMock>([
                new FormItemMock({
                    currentItem: true,
                    formType: 2,
                    id: "5",
                    label: "Main",
                }),
            ])),
            headerSection: new HeaderSectionMock(true, true, true),
            footerSection: new FooterSectionMock(true)
        });
    });
    it("should exist", () => {
        expect(xrmUiMock).toBeDefined();
    });
    it("should set a form notification", () => {
        expect(xrmUiMock.setFormNotification("You have been notified", "INFO", "id1")).toBe(true);
    });
    it("should not set a form notification if the id already exists", () => {
        expect(xrmUiMock.setFormNotification("You have been notified", "INFO", "id1")).toBe(true);
        expect(xrmUiMock.setFormNotification("You have been notified again", "INFO", "id1")).toBe(false);
    });
    it("should not to remove a form notification if it wasnt found", () => {
        expect(xrmUiMock.clearFormNotification("id1")).toBe(false);
    });
    it("should clear form notification if matched by id", () => {
        expect(xrmUiMock.setFormNotification("You have been notified", "INFO", "id1")).toBe(true);
        expect(xrmUiMock.clearFormNotification("id1")).toBe(true);
    });
    it("should have a form type of update", () => {
        expect(xrmUiMock.getFormType()).toBe(2);
    });
    it("should has header section", () => {
        expect(xrmUiMock.headerSection).toBeDefined();
    });
    it("should has footer section", () => {
        expect(xrmUiMock.footerSection).toBeDefined();
    });
});
