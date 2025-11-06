'use strict';

// Euclid Algorithm with loop
function getGCDwithLoop(a, b) {
    try {
        if (!Number.isInteger(a) || !Number.isInteger(b) || a <= 0 || b <= 0) {
            throw new Error(
                'Arguments must be positive integers greater than 0'
            );
        }
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    } catch (error) {
        console.log('Error:', error.message);
    }
}

console.log(getGCDwithLoop(192, 72));
getGCDwithLoop('192', 72);
getGCDwithLoop(NaN, 72);

// Euclid Algorithm with recursion
function getGCDwithRecursion(a, b) {
    try {
        if (!Number.isInteger(a) || !Number.isInteger(b) || a <= 0 || b <= 0) {
            throw new Error(
                'Arguments must be positive integers greater than 0'
            );
        }
        return a % b === 0 ? b : getGCDwithRecursion(b, a % b);
    } catch (error) {
        console.log('Error:', error.message);
    }
}

console.log(getGCDwithRecursion(306, 102));
getGCDwithRecursion(Infinity, 72);
getGCDwithRecursion(192, 72.5);

// GCD for array

const arr = [0, 3, 6, 9, 12, 15];

function getGCDforArr(arr) {
    const arrUniqeWithoutZero = [...new Set(arr)].filter((num) => num !== 0);
    console.log(arrUniqeWithoutZero);
    let result = arrUniqeWithoutZero[0];
    for (let i = 1; i < arrUniqeWithoutZero.length; i++) {
        if (arrUniqeWithoutZero[i] === 1) return 1;
        result = getGCD(result, arrUniqeWithoutZero[i]);
    }
    return result;
}

console.log(getGCDforArr(arr));

function getGCD(a, b) {
    if (b === 0) return a;
    return getGCD(b, a % b);
}
