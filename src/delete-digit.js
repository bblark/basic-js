const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  let str = String(n).split('')
  let max=0;
  for (let i=0; i<str.length;i++){
    let newStr = str.slice()
    newStr.splice(i, 1);
    if (max < newStr.join(''))
      max = newStr.join('');
  }
  return  +max
}
deleteDigit( 341  )
module.exports = {
  deleteDigit
};
