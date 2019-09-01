import { isPalindrome, checkPalindrome } from '../../utils/palindromes';


const data = [
  {
    title: 'How do you describe yourself as a developer?',
    type: 'single',
    options: {
      items: [ 'Hermit', 'Sociable', 'Serious', 'Grumpy', 'do not know yet' ]
    }
  },
  {
    title: 'Select the JavaScript based technologies:',
    type: 'multiple',
    options: {
      items: [ 'AngularJS', 'Ember', 'VueJS', 'Java', 'C#' ]      
    },
    validator: (input) => {
      const valid = [ 'AngularJS', 'Ember', 'VueJS' ];
      return input.sort().join('') === valid.sort().join('');
    }
  },
  {
    title: 'Introduce a palindrome',
    type: 'input',
    helpText: 'A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward,',
    validator: (input) => isPalindrome(input)
  },
  {
    title: 'Introduce a sentence in the first box, and in the second one the same sentence in reverse',
    type: 'multipleInput',
    validator: (input) => {
      if (input.length > 1)
        return checkPalindrome(input[0], input[1]);
              
      return false;  
    }
  }
];

export default data;