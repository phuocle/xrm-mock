export class SaveEventArgumentsMock implements Xrm.Events.SaveEventArguments {
  public getSaveMode(): XrmEnum.SaveMode {
    throw new Error("Not implemented.");
  }

  public isDefaultPrevented(): boolean {
    throw new Error("Not implemented.");
  }

  public preventDefault(): void {
    throw new Error("Not implemented.");
  }

  public getEntityReference(): Xrm.LookupValue {
    throw new Error("Not implemented.");
  }

  public getIsSaveSuccess(): boolean {
    throw new Error("Not implemented.");
  }

  public getSaveErrorInfo(): string {
    throw new Error("Not implemented.");
  }
}
