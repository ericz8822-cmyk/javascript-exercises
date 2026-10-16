const removeFromArray = function(arr) {
    const arg = Array.prototype.slice.call(arguments,1);
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!(arg.includes(arr[i]))) {
            result.push(arr[i]);
        }
        
    }
    return result;
};

removeFromArray([1,2,3,4,5],1,3);

// Do not edit below this line
module.exports = removeFromArray;
