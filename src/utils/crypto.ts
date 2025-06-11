import CryptoJS from "crypto-js";

export function encryptMessage(text: string, secret: string) {
  return CryptoJS.AES.encrypt(text, secret).toString();
}
export function decryptMessage(cipher: string, secret: string) {
  return CryptoJS.AES.decrypt(cipher, secret).toString(CryptoJS.enc.Utf8);
}