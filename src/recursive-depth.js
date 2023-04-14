const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */



class DepthCalculator {
  calculateDepth(arr ) {
    let depth = 1;
    let max = 0;
    arr.forEach(el=> {
      if (Array.isArray(el)) max =  Math.max(this.calculateDepth(el),max)
    })
    console.log(depth,max)
    return depth+max;
  }
}

const depthCalc = new DepthCalculator();
//depthCalc.calculateDepth([1, 2, 3, 4, 5])
//depthCalc.calculateDepth([1, 2, 3, [4, 5]])
depthCalc.calculateDepth([[[]],[]])

module.exports = {
  DepthCalculator
};
