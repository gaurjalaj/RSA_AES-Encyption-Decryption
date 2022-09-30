var forge = require("node-forge");

export const rsaDecryption = (privateKey, encryptedText) => {
  var ctBytes = forge.util.decode64(encryptedText);
  const decryptedText = forge.pki
    .privateKeyFromPem(privateKey)
    .decrypt(ctBytes);
  console.log(forge.util.decodeUtf8(decryptedText));
  return forge.util.decodeUtf8(decryptedText);
};
