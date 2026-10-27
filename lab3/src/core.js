function isInteger(n) {
    return (n | 0) === n;
}

function even() {
    const result = [];
    for (let i = 2; i <= 20; i += 2) {
        result.push(i);
    }
    return result;
}

function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function recSumTo(n) {
    if (n <= 1) return n;
    return n + recSumTo(n - 1);
}

function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function isBinary(n) {
    return n > 0 && (n & (n - 1)) === 0;
}

function fibonacci(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        const next = a + b;
        a = b;
        b = next;
    }
    return n <= 2 ? 1 : b;
}

function getOperationFn(initialValue, operatorFn) {
    let storedValue = initialValue;
    return function (newValue) {
        if (typeof operatorFn === 'function') {
            storedValue = operatorFn(storedValue, newValue);
        }
        return storedValue;
    };
}

function sequence(start = 0, step = 1) {
    let current = start;
    return function () {
        const value = current;
        current += step;
        return value;
    };
}

function deepEqual(firstObject, secondObject) {
    if (Number.isNaN(firstObject) && Number.isNaN(secondObject)) {
        return true;
    }

    if (
        firstObject === null ||
        secondObject === null ||
        typeof firstObject !== 'object' ||
        typeof secondObject !== 'object'
    ) {
        return firstObject === secondObject;
    }

    const firstIsArray = Array.isArray(firstObject);
    const secondIsArray = Array.isArray(secondObject);
    if (firstIsArray !== secondIsArray) return false;

    if (firstIsArray) {
        if (firstObject.length !== secondObject.length) return false;
        for (let i = 0; i < firstObject.length; i++) {
            if (!deepEqual(firstObject[i], secondObject[i])) return false;
        }
        return true;
    }

    const firstKeys = Object.keys(firstObject);
    const secondKeys = Object.keys(secondObject);
    if (firstKeys.length !== secondKeys.length) return false;

    for (const key of firstKeys) {
        if (!Object.prototype.hasOwnProperty.call(secondObject, key)) {
            return false;
        }
        if (!deepEqual(firstObject[key], secondObject[key])) {
            return false;
        }
    }
    return true;
}

module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};