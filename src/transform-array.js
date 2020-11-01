const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('Not array');

  let stack = [];
  for (let i = 0; i < arr.length; i++) { 
      case '--discard-next':
          i += 1;            
        break;
      case '--discard-prev':
        if (i !== 0 && arr[i - 2] !== '--discard-next') {
          stack.pop();
        };
        break;
      case '--double-next':
        if (i !== arr.length - 1) {
          stack.push(arr[i + 1]);
        };
        break;
      case '--double-prev':
        if (i !== 0 && arr[i - 2] !== '--discard-next') {
          stack.push(arr[i - 1]);
        };
        break;
      default:
        stack.push(arr[i]);
        break;
    };
  }
  return stack;
