import JSEncrypt from "jsencrypt";

export default {
  encodeRSA(word:string, keyStr?:string) {
    keyStr = keyStr ? keyStr : 'cqsgd';
    const jsRsa = new JSEncrypt();
    jsRsa.setPublicKey(keyStr);
    return jsRsa.encrypt(word);
  }
}
