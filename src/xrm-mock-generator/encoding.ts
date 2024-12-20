import { EncodingMock } from "../xrm-mock/encoding/encoding.mock";

export default class Encoding {
  public static createEncoding(): EncodingMock {
    const encoding = new EncodingMock();
    return encoding;
  }
}