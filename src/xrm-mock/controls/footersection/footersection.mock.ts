export class FooterSectionMock  {

    private visible : boolean;

    constructor(visible: boolean) {
      this.visible = visible;
    }

    public getVisible(): boolean {
        return this.visible;
    }

    public setVisible(visible: boolean): void {
        this.visible = visible;
    }
  }
