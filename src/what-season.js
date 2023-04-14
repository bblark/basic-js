const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date ) {

  if (date===undefined) return 'Unable to determine the time of year!'

  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length>0) {
    throw new Error('Invalid date!');
  }

  const seasons={
    winter: [12,1,2],
    spring:[3,4,5],
    summer:[6,7,8],
    autumn:[9,10,11]
  }
  result = date.getMonth()+1

  for (let key in seasons){
    if(seasons[key].filter(x=>x===result).length>0) return key
  }



}
getSeason(new Date(2020, 02, 22))
module.exports = {
  getSeason
};
