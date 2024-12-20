export class OrganizationSettingsMock implements Xrm.OrganizationSettings {
  public baseCurrencyId: string;
  public defaultCountryCode: string;
  public isAutoSaveEnabled: boolean;
  public languageId: number;
  public organizationId: string;
  public uniqueName: string;
  public useSkypeProtocol: boolean;
  public baseCurrency: Xrm.LookupValue;
  public attributes: any;
  public organizationGeo: string;
  public isTrialOrganization: boolean;
  public organizationExpiryDate: Date;
  public fullNameConventionCode: number;

  constructor(components: IOrganizationSettingsComponents) {
    this.baseCurrencyId = components.baseCurrencyId;
    this.defaultCountryCode = components.defaultCountryCode;
    this.isAutoSaveEnabled = components.isAutoSaveEnabled;
    this.languageId = components.languageId;
    this.organizationId = components.organizationId;
    this.uniqueName = components.uniqueName;
    this.useSkypeProtocol = components.useSkypeProtocol;
    this.baseCurrency = components.baseCurrency;
    this.attributes = components.attributes;
    this.isTrialOrganization = components.isTrialOrganization;
    this.organizationExpiryDate = components.organizationExpiryDate;
    this.fullNameConventionCode = components.fullNameConventionCode;
  }
}

export interface IOrganizationSettingsComponents {
  baseCurrencyId?: string;
  defaultCountryCode?: string;
  isAutoSaveEnabled?: boolean;
  languageId?: number;
  organizationId?: string;
  uniqueName?: string;
  useSkypeProtocol?: boolean;
  baseCurrency?: Xrm.LookupValue;
  attributes?: any;
  isTrialOrganization: boolean;
  organizationExpiryDate?: Date;
  fullNameConventionCode: number;
}
