const forge = require("node-forge");

export const aesEncryption = async(key, iv, text) => {
  const cipher = forge.cipher.createCipher("AES-CBC", key);
  cipher.start({ iv: iv });
  cipher.update(forge.util.createBuffer(text, "utf8"));
  cipher.finish();
  let encryptedText = cipher.output.getBytes();
  encryptedText = forge.util.encode64(encryptedText);
  return encryptedText;
};

