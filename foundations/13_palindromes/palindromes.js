const palindromes = function (str) {
    const isAlpha = letter => /^[a-z]+$/i.test(letter);
    let strArr = str.split('');
    strArr = strArr.filter(letter => isAlpha(letter) || Number(letter));
    strArr = strArr.map(letter => letter.toUpperCase());
    return strArr.join('') === strArr.reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
