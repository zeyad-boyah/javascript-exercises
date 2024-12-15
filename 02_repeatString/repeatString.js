const repeatString = function(word, num_of_repeats) {
    if (num_of_repeats <0){
        return "ERROR"
    }
    let repeated_word ="";
    for (i=0; i<num_of_repeats; i++){
        repeated_word += word;
    }
    return repeated_word
};

// Do not edit below this line
module.exports = repeatString;
