import { decryptWithDES, encryptWithDES } from "./des";


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

//   it('encrypts well know string string correctly', () => {
//     const key = "knownKey";
//     const message = "well known encryption string";

//   });
});
