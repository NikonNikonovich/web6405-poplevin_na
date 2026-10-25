/**
 * Проверяет, является ли число целым, используя побитовые операторы
 * @param {*} n
 */
function isInteger(n) {
    return (n | 0) === n;
}

/**
 * Возвращает массив четных чисел от 2 до 20 включительно
 */
function even() {
    const result = [];
    for (let i = 2; i <= 20; i += 2) {
        result.push(i);
    }
    return result;
}

/**
 * Считает сумму чисел до заданного используя цикл
 * @param {*} n
 */
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

/**
 * Считает сумму чисел до заданного используя рекурсию
 * @param {*} n
 */
function recSumTo(n) {
    if (n <= 1) return n;
    return n + recSumTo(n - 1);
}

/**
 * Считает факториал заданного числа
 * @param {*} n
 */
function factorial(n) {
    if (n < 0) return NaN;
    if (n <= 1) return 1;

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

/**
 * Определяет, является ли число двойкой, возведенной в степень
 * @param {*} n
 */
function isBinary(n) {
    return n > 0 && (n & (n - 1)) === 0;
}

/**
 * Находит N-е число Фибоначчи
 * @param {*} n
 */
function fibonacci(n) {
    if (n <= 0) return 0;

    let a = 0;
    let b = 1;

    for (let i = 0; i < n; i++) {
        b = a + b;
        a = b - a;
    }
    return a;
}

/**
 * Возвращает функцию, выполняющую операцию над сохраненным значением
 * @param initialValue
 * @param operatorFn - (storedValue, newValue) => {operation}
 */
function getOperationFn(initialValue, operatorFn) {
    let storedValue = initialValue;

    return function (newValue) {
        if (typeof operatorFn !== 'function') {
            return storedValue;
        }

        storedValue = operatorFn(storedValue, newValue);
        return storedValue;
    };
}

/**
 * Создает генератор арифметической последовательности
 * @param {number} start - начальное значение
 * @param {number} step - шаг последовательности
 */
function sequence(start, step) {
    let current = start === undefined ? 0 : start;
    const currentStep = step === undefined ? 1 : step;

    return function generator() {
        const value = current;
        current += currentStep;
        return value;
    };
}

/**
 * Рекурсивно сравнивает два значения или объекта по содержимому
 * @param {object} firstObject
 * @param {object} secondObject
 * @returns {boolean}
 */
function deepEqual(firstObject, secondObject) {
    if (firstObject === secondObject) {
        return true;
    }

    if (
        typeof firstObject === 'number' &&
        typeof secondObject === 'number' &&
        Number.isNaN(firstObject) &&
        Number.isNaN(secondObject)
    ) {
        return true;
    }

    if (
        firstObject === null ||
        secondObject === null ||
        typeof firstObject !== 'object' ||
        typeof secondObject !== 'object'
    ) {
        return false;
    }

    const firstKeys = Object.keys(firstObject);
    const secondKeys = Object.keys(secondObject);

    if (firstKeys.length !== secondKeys.length) {
        return false;
    }

    for (const key of firstKeys) {
        if (
            !Object.prototype.hasOwnProperty.call(secondObject, key) ||
            !deepEqual(firstObject[key], secondObject[key])
        ) {
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
