const forge = require("node-forge");

export const aesDecryption = async(key, iv, text) => {
    try {
        text = forge.util.decode64(text);
        const decipher = forge.cipher.createDecipher("AES-CBC", key);
        decipher.start({ iv: iv });
        decipher.update(forge.util.createBuffer(text));
        decipher.finish();
        let plaintext = decipher.output.toString("utf8");
        return plaintext;
      } catch (err) {
        console.log("Error in AES Decryption");
        console.log(err);
      }
};

