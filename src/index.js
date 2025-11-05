'use strict';

const ERR_NOT_NUMBER = 'Arguments must be numbers';
const ERR_NOT_INTEGER = 'Arguments must be integers';
const ERR_NOT_POSITIVE = 'Arguments must be positive integers greater than 0';

// Eqlid Algorithm with loop
function getGCDwithLoop(a, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        throw new TypeError(ERR_NOT_NUMBER);
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new TypeError(ERR_NOT_INTEGER);
    }
    if (a <= 0 || b <= 0) {
        throw new RangeError(ERR_NOT_POSITIVE);
    }
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

try {
    console.log(getGCDwithLoop(192, 72));
    console.log(getGCDwithLoop(NaN, 72));
} catch (error) {
    console.log(error);
}

// Eqlid Algorithm with recursion
function getGCDwithRecursion(a, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        throw new TypeError(ERR_NOT_NUMBER);
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new TypeError(ERR_NOT_INTEGER);
    }
    if (a <= 0 || b <= 0) {
        throw new RangeError(ERR_NOT_POSITIVE);
    }
    function gcd(x, y) {
        return y === 0 ? x : gcd(y, x % y);
    }
    return gcd(a, b);
}

try {
    console.log(getGCDwithRecursion(156, 104));
    console.log(getGCDwithRecursion(12.5, 72));
} catch (error) {
    console.log(error);
}
