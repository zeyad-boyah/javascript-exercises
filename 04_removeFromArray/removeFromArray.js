const removeFromArray = function(array_with_element, ...args) {
    desired_array= array_with_element.filter(item => !args.includes(item));
    return desired_array;

};

// Do not edit below this line
module.exports = removeFromArray;
