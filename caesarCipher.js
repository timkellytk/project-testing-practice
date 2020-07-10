const caesarCipher = (string, cipher) => {
  const stringArray = string.split('');
  return stringArray
    .map((letter) => {
      const ASCII = letter.charCodeAt(0);
      if (ASCII >= 65 && ASCII <= 90) {
        return uppercaseCipher(ASCII, cipher);
      } else if (ASCII >= 97 && ASCII <= 122) {
        return lowercaseCipher(ASCII, cipher);
      }
      return letter;
    })
    .join('');
};

const lowercaseCipher = (ASCII, cipher) => {
  const newASCII = ASCII + cipher;
  if (newASCII <= 122) {
    return String.fromCharCode(newASCII);
  } else {
    const diff = newASCII - 123;
    const updatedASCII = 97 + diff;
    return String.fromCharCode(updatedASCII);
  }
};

const uppercaseCipher = (ASCII, cipher) => {
  const newASCII = ASCII + cipher;
  if (newASCII <= 90) {
    return String.fromCharCode(newASCII);
  } else {
    const diff = newASCII - 91;
    const updatedASCII = 65 + diff;
    return String.fromCharCode(updatedASCII);
  }
};

export default caesarCipher;
