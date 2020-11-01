const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str);

   let localObj = {};
   localObj.repeatTimes = options.repeatTimes > 0 ? options.repeatTimes : 0;
   localObj.separator = typeof options['separator'] !== 'undefined' ? String(options.separator) : '+';
   localObj.addition = typeof options['addition'] !== 'undefined' ? String(options.addition) : '';
   localObj.additionRepeatTimes = options.additionRepeatTimes > 0 ? options.additionRepeatTimes : 0;
   localObj.additionSeparator = typeof options['additionSeparator'] !== 'undefined' ? String(options.additionSeparator) : '|';
 
   
   let res = '';
   let addStr = '';
     if (localObj.additionRepeatTimes <= 1) { 
       addStr += localObj.addition;
     } else { 
       addStr += localObj.addition;
       for (let i = 1; i < localObj.additionRepeatTimes; i++) { 
         addStr += localObj.additionSeparator + localObj.addition;
       };
     };

     if (localObj.repeatTimes <= 1) { 
       res += str + addStr;
     } else {
       res += str + addStr;
       for (let i = 1; i < localObj.repeatTimes; i++) { 
         res += localObj.separator + str + addStr;
       };
     };
   return res;
   
 };