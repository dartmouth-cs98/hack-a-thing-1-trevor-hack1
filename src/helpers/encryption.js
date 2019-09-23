
import * as db from '../services/firebase';

const Hashes = require('jshashes');

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 .,()?!$\'"|';
const charactersLength = characters.length;

// Modified from https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
function generateKey(length) {
  let result = '';
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function encrypt(message) {
  const key = generateKey(message.length);
  let encryptedMessage = '';
  let hashValue = 0;
  for (let i = 0; i < message.length; i += 1) {
    const c = message.charAt(i);
    const d = key.charAt(i);
    const encryptValue = (characters.indexOf(c) + characters.indexOf(d)) % charactersLength;
    hashValue += encryptValue;
    encryptedMessage += characters.substr(encryptValue, 1);
  }
  const MD5 = new Hashes.MD5();
  const hash = MD5.hex(encryptedMessage.substr(0, 1) + hashValue + encryptedMessage.substr(encryptedMessage.length - 1, 1));
  db.createKey(hash, key);
  return encryptedMessage;
}

export function decrypt(code, onDone) {
  let hashValue = 0;
  for (let i = 0; i < code.length; i += 1) {
    const c = code.charAt(i);
    hashValue += characters.indexOf(c);
  }
  const MD5 = new Hashes.MD5();
  const hash = MD5.hex(code.substr(0, 1) + hashValue + code.substr(code.length - 1, 1));

  db.fetchKey(hash, (key) => {
    if (!key) {
      onDone('Does not exist', null);
    }
    let decryptedMessage = '';
    for (let i = 0; i < code.length; i += 1) {
      const c = code.charAt(i);
      const d = key.charAt(i);
      const decryptValue = (characters.indexOf(c) - characters.indexOf(d)) % charactersLength;
      decryptedMessage += characters.substr(decryptValue, 1);
    }
    onDone(null, decryptedMessage);
  });
}
