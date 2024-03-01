"use strict";

// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
// Вариант1
function numUp(num1, num2) {
  return num1 ** num2;
}
console.log(numUp(2, 3) + numUp(3, 3));

// Вариант2
const numUp = (anyNum) => anyNum ** 3;
console.log(numUp(2) + numUp(3));
