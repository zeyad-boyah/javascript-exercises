const reverseString = function(word_to_be_reversed) {
    let reversed_word = "";
    word_length = word_to_be_reversed.length - 1 // will use it in a loop
    for (i=word_length; i>=0; i--){
        reversed_word += word_to_be_reversed[i];
    }
    return reversed_word;
};

// Do not edit below this line
module.exports = reverseString;
