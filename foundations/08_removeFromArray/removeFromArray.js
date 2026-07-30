const removeFromArray = function(arr, ...removeItems) {
    for (let item of removeItems) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                arr.splice(arr.indexOf(item), 1);
                i--;
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
