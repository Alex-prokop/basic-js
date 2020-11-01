const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (isNaN(date)) throw new Error('Error');
  let month = date.getMonth() + 1; 
  if (month === 12 || month <= 2) return 'winter';
  if (month > 2 && month <= 5) return 'spring';
  if (month > 5 && month <= 8) return 'summer';
  if (month > 8 && month <= 11) return 'autumn';
};
