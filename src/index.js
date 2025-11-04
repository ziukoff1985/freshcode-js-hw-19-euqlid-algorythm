'use strict';

function getGCD(a, b) {
    a = Math.abs(Math.round(a));
    b = Math.abs(Math.round(b));

    if (a === 0 && b === 0) {
        console.log('GCD(0,0) is defined as 0 by convention');
        return 0;
    }
    if (a === 0) return b;
    if (b === 0) return a;

    return getGCD(b, a % b);
}

console.log(getGCD(10, 15));
console.log(getGCD(10, 0));
console.log(getGCD(0, 0));
console.log(getGCD(0, 10));
console.log(getGCD(-10, -15));
console.log(getGCD(10, -15));
console.log(getGCD(0, -15));
console.log(getGCD(-15, 0));
console.log(getGCD(-14.6, 0));
console.log(getGCD(0, -11.3));
console.log(getGCD(192, 72));
