const repeatString = function(str, num) {
    if (num < 0) return "ERROR";
    let concacnatedStr = '';
    for (let i  = 0; i < num; i++) {
        concacnatedStr = concacnatedStr + str;
    }
    return concacnatedStr;
};


// Do not edit below this line
module.exports = repeatString;
