

const preprocessWord = (word) => {
  return word.toLowerCase().replace(/\s+/g, '');
};

export const isPalindrome = (input) => {
  const word = preprocessWord(input);
  return word.split('').reverse().join('') === word;
};

export const checkPalindrome = (input, suggestion) => {
  const word = preprocessWord(input);
  const altSuggestion = preprocessWord(suggestion);

  return isPalindrome(word) && word.split('').reverse().join('') === altSuggestion;
};

