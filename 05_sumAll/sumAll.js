const sumAll = function(num1 , num2) {
    if (num1<0 || num2 <0){
        return "ERROR";
    }
    if (!Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR"
    }
    let big_num = num1>num2 ? num1 : num2
    let small_num = num1>num2 ? num2 : num1
    let sum =null;
    for (let i = big_num; i>= small_num; i--){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
