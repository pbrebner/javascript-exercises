const convertToCelsius = function(tempInFahrenheit) {
  let tempInCelsius = Math.round((tempInFahrenheit - 32) * (5/9) * 10) / 10;
  return tempInCelsius
};

const convertToFahrenheit = function(tempInCelsius) {
  let tempInFaranheit = Math.round((tempInCelsius * (9/5) + 32) * 10) / 10;
  return tempInFaranheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
