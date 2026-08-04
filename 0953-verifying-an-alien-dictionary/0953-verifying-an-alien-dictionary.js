/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
 
const isAlienSorted = (dictionary, alphabet) => { 
  const order = new Map();

  for (let i = 0; i < alphabet.length; i++) { 
    order.set(alphabet[i], i);
  }

  let idx = 0;

  while (idx < dictionary.length - 1) {
    let currWord = dictionary[idx];
    let nextWord = dictionary[idx + 1];

    if (inOrder(currWord, nextWord, order)) {
      idx++;
    } else {
      return false;
    }
  }

  return true;
};

const inOrder = (currWord, nextWord, order) => {
  const limit = Math.min(currWord.length, nextWord.length);

  for (let i = 0; i < limit; i++) {
    const lex1 = order.get(currWord[i]);
    const lex2 = order.get(nextWord[i]);

    if (lex1 < lex2) return true;
    if (lex1 > lex2) return false;
  }

  return currWord.length <= nextWord.length;
}