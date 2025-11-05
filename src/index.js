'use strict';

// Euclid Algorithm with loop
function getGCDwithLoop(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b) || a <= 0 || b <= 0) {
        throw new Error('Arguments must be positive integers greater than 0');
    }
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

function testGCDwithLoop(a, b) {
    try {
        console.log(`getGCDwithLoop(${a}, ${b}) →`, getGCDwithLoop(a, b));
    } catch (error) {
        console.log(`getGCDwithLoop(${a}, ${b}) → Error:`, error.message);
    }
}

testGCDwithLoop(192, 72);
testGCDwithLoop('192', 72);
testGCDwithLoop(NaN, 72);

// Euclid Algorithm with recursion
function getGCDwithRecursion(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b) || a <= 0 || b <= 0) {
        throw new Error('Arguments must be positive integers greater than 0');
    }
    function gcd(x, y) {
        return y === 0 ? x : gcd(y, x % y);
    }
    return gcd(a, b);
}

function testGCDwithRecursion(a, b) {
    try {
        console.log(`getGCDwithLoop(${a}, ${b}) →`, getGCDwithLoop(a, b));
    } catch (error) {
        console.log(`getGCDwithLoop(${a}, ${b}) → Error:`, error.message);
    }
}

testGCDwithRecursion(306, 102);
testGCDwithRecursion(Infinity, 72);
testGCDwithRecursion(192, 72.5);
