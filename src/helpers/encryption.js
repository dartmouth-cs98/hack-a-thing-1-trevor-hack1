

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 .,()?!$\'|';
const charactersLength = characters.length;
let key = '';

// Modified from https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
function generateKey(length) {
  let result = '';
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function encrypt(message) {
  key = generateKey(message.length);
  let encryptedMessage = '';
  for (let i = 0; i < message.length; i += 1) {
    const c = message.charAt(i);
    const d = key.charAt(i);
    const encryptValue = (characters.indexOf(c) + characters.indexOf(d)) % charactersLength;
    encryptedMessage += characters.substr(encryptValue, 1);
  }

  return encryptedMessage;
}

export function decrypt(code) {
  let decryptedMessage = '';
  for (let i = 0; i < code.length; i += 1) {
    const c = code.charAt(i);
    const d = key.charAt(i);
    const decryptValue = (characters.indexOf(c) - characters.indexOf(d)) % charactersLength;
    decryptedMessage += characters.substr(decryptValue, 1);
  }

  return decryptedMessage;
}
