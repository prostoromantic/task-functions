/*
Напишите коллбек для array.filter, который отбирает все числа больше num
 */
export function higherThan(num) {
    function callback(element, index, array) {
        return element > num;
    }
    return callback;
}

/*
Напишите коллбек для array.filter, который отбирает из массива все строки, включающие в себя substr. Регистр важен.
 */
export function hasSubstring(substr) {
    function callback(element, index, array) {
        return element.includes(substr);
    }
    return callback;
}

/*
Напишите функцию `multiply(num)`, которая работает вот так:

console.log(multiply(5)(10));
// 50
 */
export function multiply(num) {
    function callback(element, index, array) {
        return num * element;
    }
    return callback;
}
