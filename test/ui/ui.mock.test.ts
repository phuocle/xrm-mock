import { ItemCollectionMock } from "../../src/xrm-mock/collection/itemcollection/itemcollection.mock";
import { FooterSectionMock } from "../../src/xrm-mock/controls/footersection/footersection.mock";
import { FormItemMock } from "../../src/xrm-mock/controls/formitem/formitem.mock";
import { FormSelectorMock } from "../../src/xrm-mock/controls/formselector/formselector.mock";
import { HeaderSectionMock } from "../../src/xrm-mock/controls/headersection/headersection.mock";
import { UiMock } from "../../src/xrm-mock/ui/ui.mock";

describe("Xrm.Ui Mock", function() {
    beforeEach(() => {
        this.xrmUiMock = new UiMock({
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
        expect(this.xrmUiMock).toBeDefined();
    });
    it("should set a form notification", () => {
        expect(this.xrmUiMock.setFormNotification("You have been notified", "INFO", "id1")).toBe(true);
    });
    it("should not set a form notification if the id already exists", () => {
        expect(this.xrmUiMock.setFormNotification("You have been notified", "INFO", "id1")).toBe(true);
        expect(this.xrmUiMock.setFormNotification("You have been notified again", "INFO", "id1")).toBe(false);
    });
    it("should not to remove a form notification if it wasnt found", () => {
        expect(this.xrmUiMock.clearFormNotification("id1")).toBe(false);
    });
    it("should clear form notification if matched by id", () => {
        expect(this.xrmUiMock.setFormNotification("You have been notified", "INFO", "id1")).toBe(true);
        expect(this.xrmUiMock.clearFormNotification("id1")).toBe(true);
    });
    it("should have a form type of update", () => {
        expect(this.xrmUiMock.getFormType()).toBe(2);
    });
    it("should has header section", () => {
        expect(this.xrmUiMock.headerSection).toBeDefined();
    });
    it("should has footer section", () => {
        expect(this.xrmUiMock.footerSection).toBeDefined();
    });
});
