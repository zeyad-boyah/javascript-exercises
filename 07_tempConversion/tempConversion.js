const convertToCelsius = function(temp_in_fahrenheit) {
    let temp_in_celsius = (temp_in_fahrenheit -32)* (5/9) ; 
    return (Math.round(temp_in_celsius * 10)/10);
};

const convertToFahrenheit = function(temp_in_celsius) {
  let temp_in_fahrenheit = (temp_in_celsius *(9/5) + 32); 
  return (Math.round(temp_in_fahrenheit * 10)/10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
