'use strict';

function getGCD(a, b) {
    a = Math.abs(Math.round(a));
    b = Math.abs(Math.round(b));

    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
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
