"use strict";

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать 
// по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); 
// должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций 
// могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите 
// внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа 
// равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

let numb1 = Number(prompt('Введите число 1'));
let numb2 = Number(prompt('Введите число 2'));

const usrAddit = (num1, num2) => num1 + num2;
const usrDiff = (num1, num2) => {
   if (num1 === num2) return 0;
   return (num1 > num2) ? num1 - num2 : num2 - num1;
}
const usrMult = (num1, num2) => num1 * num2;
const usrDiv = (num1, num2) => num1 / num2;

console.log(usrAddit(numb1, numb2));
console.log(usrDiff(numb1, numb2));
console.log(usrMult(numb1, numb2));
console.log(usrDiv(numb1, numb2));
