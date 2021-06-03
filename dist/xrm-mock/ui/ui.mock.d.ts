/// <reference types="xrm" />
import { FooterSectionMock } from "../controls/footersection/footersection.mock";
import { FormSelectorMock } from "../controls/formselector/formselector.mock";
import { HeaderSectionMock } from "../controls/headersection/headersection.mock";
export declare class UiMock implements Xrm.Ui {
    process: Xrm.Controls.ProcessControl;
    controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control>;
    formSelector: FormSelectorMock;
    navigation: Xrm.Controls.Navigation;
    tabs: Xrm.Collection.ItemCollection<Xrm.Controls.Tab>;
    quickForms: Xrm.Collection.ItemCollection<Xrm.Controls.QuickFormControl>;
    formNotifications: [{
        message: string;
        level: Xrm.Page.ui.FormNotificationLevel;
        uniqueId: string;
    }];
    headerSection: HeaderSectionMock;
    footerSection: FooterSectionMock;
    constructor(components: IUiComponents);
    setFormNotification(message: string, level: Xrm.Page.ui.FormNotificationLevel, uniqueId: string): boolean;
    clearFormNotification(uniqueId: string): boolean;
    close(): void;
    getFormType(): XrmEnum.FormType;
    getViewPortHeight(): number;
    getViewPortWidth(): number;
    refreshRibbon(): void;
    setFormEntityName(arg: string): void;
    addOnLoad(handler: Xrm.Events.ContextSensitiveHandler): void;
    removeOnLoad(handler: Xrm.Events.ContextSensitiveHandler): void;
    private _getFormNotificationExists;
}
export interface IUiComponents {
    process?: Xrm.Controls.ProcessControl;
    controls?: Xrm.Collection.ItemCollection<Xrm.Controls.Control>;
    formSelector?: FormSelectorMock;
    navigation?: Xrm.Controls.Navigation;
    tabs?: Xrm.Collection.ItemCollection<Xrm.Controls.Tab>;
    quickForms?: Xrm.Collection.ItemCollection<Xrm.Controls.QuickFormControl>;
    headerSection?: HeaderSectionMock;
    footerSection?: FooterSectionMock;
}
