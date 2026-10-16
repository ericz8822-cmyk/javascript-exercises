const reverseString = function(str) {
    list = str.split('');
    let result = '';
    for (let i = list.length; i > 0 ; i--) {
        result += list[i-1];
    }
    return result;
};

reverseString('hello');

// Do not edit below this line
module.exports = reverseString;
