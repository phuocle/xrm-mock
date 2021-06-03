export class HeaderSectionMock  {

    private bodyVisible : boolean;
    private commandBarVisible: boolean;
    private tabNavigatorVisible: boolean;

    constructor(bodyVisible: boolean, commandBarVisible: boolean, tabNavigatorVisible: boolean) {
      this.bodyVisible = bodyVisible;
      this.commandBarVisible = commandBarVisible;
      this.tabNavigatorVisible = tabNavigatorVisible;
    }

    public getBodyVisible(): boolean {
        return this.bodyVisible;
    }

    public setBodyVisible(bodyVisible: boolean): void {
        this.bodyVisible = bodyVisible;
    }

    public getCommandBarVisible(): boolean {
        return this.commandBarVisible;
    }

    public setCommandBarVisible(commandBarVisible: boolean) : void {
        this.commandBarVisible = commandBarVisible;
    }

    public getTabNavigatorVisible(): boolean {
        return this.tabNavigatorVisible;
    }

    public setTabNavigatorVisible(tabNavigatorVisible: boolean) : void {
        this.tabNavigatorVisible = tabNavigatorVisible;
    }
  }
