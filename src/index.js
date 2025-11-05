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
        console.log(`Arguments:(${a}, ${b}) →`, getGCDwithLoop(a, b));
    } catch (error) {
        console.log(`Arguments:(${a}, ${b}) → Error:`, error.message);
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
    return a % b === 0 ? b : getGCDwithRecursion(b, a % b);
}

function testGCDwithRecursion(a, b) {
    try {
        console.log(`Arguments:(${a}, ${b}) →`, getGCDwithRecursion(a, b));
    } catch (error) {
        console.log(`Arguments:(${a}, ${b}) → Error:`, error.message);
    }
}

testGCDwithRecursion(306, 102);
testGCDwithRecursion(Infinity, 72);
testGCDwithRecursion(192, 72.5);
