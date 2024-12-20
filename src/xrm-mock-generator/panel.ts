import { PanelMock } from "../xrm-mock/panel/panel.mock";

export default class Panel {
  public static createPanel(): PanelMock {
    const panel = new PanelMock();
    return panel;
  }
}