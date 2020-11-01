const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let level = 1;
    let depth = 0;
    for (let elem of arr) { 
      if (Array.isArray(elem) !== true) continue; 
      depth = this.calculateDepth(elem) + 1; 
      if (depth > level) level = depth; 
    };
    return level;
  }
};