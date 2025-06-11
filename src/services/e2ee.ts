// نقطة تكامل التشفير بين الطرفين (واجهة)
export function encryptMessage(message: string, key: CryptoKey): Promise<ArrayBuffer> {
  const enc = new TextEncoder();
  return window.crypto.subtle.encrypt(
    { name: "AES-GCM", iv: new Uint8Array(12) },
    key,
    enc.encode(message)
  );
}

export function decryptMessage(cipher: ArrayBuffer, key: CryptoKey): Promise<string> {
  return window.crypto.subtle.decrypt(
    { name: "AES-GCM", iv: new Uint8Array(12) },
    key,
    cipher
  ).then(buf => new TextDecoder().decode(buf));
}