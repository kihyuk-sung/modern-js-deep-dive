
/**
 * 
 * @param {string} str 
 * @returns string
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('Hello world!') === '!dlrow olleH');
