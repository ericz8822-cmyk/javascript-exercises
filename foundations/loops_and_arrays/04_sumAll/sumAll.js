const isPositiveInteger = value => Number.isInteger(value) && value > 0;

const sumAll = function(a,b) {
    if (!isPositiveInteger(a) || !isPositiveInteger(b)) {
        console.log('ERROR');
        return 'ERROR';
    }
    let sum = 0;
    if (a > b) {
        for (let i = b; i <= a; i++) {
            sum += i;
        }
    } else {
        for (let i = a; i <= b; i++) {
            sum += i;
        }
    }

    console.log(sum);
    return sum;

};
sumAll(0.1, 1);
sumAll(3,6);
sumAll(5,3);

// Do not edit below this line
module.exports = sumAll;
