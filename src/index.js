'use strict';

function getGCD(a, b) {
    if (a === 0 && b === 0) {
        console.log('GCD(0,0) is defined as 0 by convention');
        return 0;
    }

    a = Math.abs(Math.round(a));
    b = Math.abs(Math.round(b));

    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

console.log(getGCD(0, 0));
console.log(getGCD(192, 72));
