"use strict";

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

let numb1 = Number(prompt('Введите число 1'));
let numb2 = Number(prompt('Введите число 2'));
let numb3 = Number(prompt('Введите число 3'));

const maxNum = (num1, num2, num3) => Math.max(num1, num2, num3);
console.log(maxNum(numb1, numb2, numb3));
