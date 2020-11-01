const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let stack = [];
  let temp;

  if (Array.isArray(members) !== true) {
    return false;
  } else {
    for (let i = 0; i < members.length; i++) {
      if (typeof(members[i]) === 'string') {
        stack.push(members[i].trim()[0].toUpperCase());
      };
    };
    
    for (let i = 0; i < stack.length - 1; i++) {
      temp = '';
      for (let j = 0; j < stack.length - 1 - i; j++) { 
        if (stack[j] > stack[j + 1]) {
          temp = stack[j + 1];
          stack[j + 1] = stack[j];
          stack[j] = temp;
        };
      };
    };
    return stack.join('');
  };
};