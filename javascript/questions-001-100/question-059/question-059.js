// XOR decryption

// Problem 59
// Each character on a computer is assigned a unique code and the preferred standard is ASCII (American Standard Code for Information Interchange). For example, uppercase A = 65, asterisk (*) = 42, and lowercase k = 107.

// A modern encryption method is to take a text file, convert the bytes to ASCII, then XOR each byte with a given value, taken from a secret key. The advantage with the XOR function is that using the same encryption key on the cipher text, restores the plain text; for example, 65 XOR 42 = 107, then 107 XOR 42 = 65.

// For unbreakable encryption, the key is the same length as the plain text message, and the key is made up of random bytes. The user would keep the encrypted message and the encryption key in different locations, and without both "halves", it is impossible to decrypt the message.

// Unfortunately, this method is impractical for most users, so the modified method is to use a password as a key. If the password is shorter than the message, which is likely, the key is repeated cyclically throughout the message. The balance for this method is using a sufficiently long password key for security, but short enough to be memorable.

// Your task has been made easy, as the encryption key consists of three lower case characters. Using cipher, a string containing the encrypted ASCII codes, and the knowledge that the plain text must contain common English words, decrypt the message and find the sum of the ASCII values in the original text.

const cipher = require('./cipher');

function getAsciiSum() {
  let nums = cipher.split(',').map(num => parseInt(num, 10)),
    keyLength = 3;

  // range of numbers [97, 98, ..., 122]
  let charCodes = [...'abcdefghijklmnopqrstuvwxyz'].map(char => char.charCodeAt());

  for (let i = 0; i < charCodes.length; i++) {
    for (let j = 0; j < charCodes.length; j++) {
      for (let k = 0; k < charCodes.length; k++) {
        let key = [charCodes[i], charCodes[j], charCodes[k]],
          decryptedAscii = nums.map((num, index) => num ^ key[index % keyLength]),
          decrypted = decryptedAscii.map(num => String.fromCharCode(num)).join(''),
          decryptedLower = decrypted.toLowerCase();

        if (decryptedLower.includes(' the ')) {
          return decryptedAscii.reduce((a, c) => a + c);
        }
      }
    }
  }

  return 'Unable to decrypt the message.';
}

module.exports = getAsciiSum;
