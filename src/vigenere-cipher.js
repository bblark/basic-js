const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 */

 /*
 * const reverseMachine = new VigenereCipheringMachine(false);
 */
  //=> 'AEIHQX SX DLLU!'
 /*
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct=true) {
    this.alph=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    this.direct=direct
  }
  encrypt(message, key) {
    if(!message || !key) throw new Error('Incorrect arguments!')

    message=message.toUpperCase();
    key=key.toUpperCase();
    let index=0;
    let result='';

    for (let i=0; i<message.length; i++){
      if(!this.alph.includes(message[i])){
        result+=message[i]
        continue
      }
      let shift =(this.alph.indexOf(message[i]) + this.alph.indexOf(key[index++ % key.length])) % this.alph.length
      result+=this.alph[shift]
    }

    return this.direct? result : result.split('').reverse().join('')

  }
  decrypt(message, key) {
    if(!message || !key) throw new Error('Incorrect arguments!')

    message=message.toUpperCase();
    key=key.toUpperCase();
    let index=0;
    let result='';

    for (let i=0; i<message.length; i++){
      if(!this.alph.includes(message[i])){
        result+=message[i]
        continue
      }
      let shift =(this.alph.indexOf(message[i]) - this.alph.indexOf(key[index++ % key.length])) % this.alph.length
      if (shift>=0) result+=this.alph[shift]
      if (shift<0) {
        result += this.alph[this.alph.length + shift]
      }
    }
    console.log(result)
    return this.direct? result : result.split('').reverse().join('')
  }
}
const directMachine = new VigenereCipheringMachine();
directMachine.encrypt('attack at dawn!','alphonse' )
directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse')
module.exports = {
  VigenereCipheringMachine
};
