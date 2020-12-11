const Cache = require('./Cache');

class CryptoUtil extends Cache {
  constructor() { super(); }

  binaryToHex(binary = new ArrayBuffer()) {
    return Buffer.from(binary).toString('hex');
  }

  hexToBinary(hexadecimal = '') {
    return Buffer.from(hexadecimal, 'hex');
  }

  stringToBase64(text = "") {
    return Buffer.from(text).toString("base64");
  }
}

module.exports = CryptoUtil;