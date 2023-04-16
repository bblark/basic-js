const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
domains = [
  'code.yandex.ru',
  'music.yandex.ru',
  'yandex.ru'
]
getDNSStats(domains)
function getDNSStats(domains ) {
  const obj = {};

  domains.forEach(el => {
    let arr = el.split('.').reverse();
    //console.log(arr)
    for (let i = 0; i < arr.length; i++) {
      let subDomain = '.' + arr.slice(0, i + 1).join('.');
      obj[subDomain] = obj[subDomain] ? obj[subDomain] + 1 : 1;
    }
  })
  //console.log(obj)
  return obj;
}

module.exports = {
  getDNSStats
};
