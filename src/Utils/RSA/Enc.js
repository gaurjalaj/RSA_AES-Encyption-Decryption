var forge = require("node-forge");

export const rsaEncryption = (publicKey, message) => {
  var plaintextBytes = forge.util.encodeUtf8(message);
  const encryptedText = forge.pki
    .publicKeyFromPem(publicKey)
    .encrypt(plaintextBytes);
  return forge.util.encode64(encryptedText);
};

