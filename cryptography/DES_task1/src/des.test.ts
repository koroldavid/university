import { decryptWithDES, encryptWithDES } from "./des";
import { to64BitArray } from "./utils";


describe('Des encryption algorithm', () => {
  it('could encrypt and decrypt data without lose', () => {
    const inputMessage = [
        1, 1, 0, 0, 1, 1, 0, 0,
        1, 1, 0, 0, 1, 1, 0, 0,
        1, 1, 0, 0, 1, 1, 0, 0,
        1, 1, 0, 0, 1, 1, 0, 0,
        1, 1, 0, 0, 1, 1, 0, 0,
        1, 1, 0, 0, 1, 1, 0, 0,
        1, 1, 0, 0, 1, 1, 0, 0,
        1, 1, 0, 0, 1, 1, 0, 0,
    ];
    const key = [
        1, 1, 0, 0, 1, 1, 0, 0,
        1, 1, 0, 0, 1, 1, 0, 0,
        1, 1, 0, 0, 1, 1, 0, 0,
        1, 1, 0, 0, 1, 1, 0, 0,
        1, 1, 0, 0, 1, 1, 0, 0,
        1, 1, 0, 0, 1, 1, 0, 0,
        1, 1, 0, 0, 1, 1, 0, 0,
        1, 1, 0, 0, 1, 1, 0, 0,
    ];

    const encryptedMessage = encryptWithDES(inputMessage, key);
    const decryptedMessage = decryptWithDES(encryptedMessage, key);

    expect(encryptedMessage).not.toEqual(inputMessage)
    expect(decryptedMessage).toEqual(inputMessage);
  });

  it('could convert well-known plain text', () => {
    const wellKnownOutput = [
      1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1,
      1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1,
      1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1,
      1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1,
      1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1,
      1, 1, 1, 1
    ];
    const wellKnownKey = to64BitArray('12345678')[0];

    expect(decryptWithDES(wellKnownOutput, wellKnownKey)).toEqual(to64BitArray('Once upo')[0]);
  });
});
