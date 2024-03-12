"use strict";

/*
Необходимо создать объект, в котором будут объединены два массива en и ru 
так, чтобы в объекте ключами выступали значения из массива en, а значениями 
объекта являлись значения из массива ru.
*/

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = [
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье",
];

const objEnru = {};
if (en.length !== ru.length) {
  console.log(`Разная длинна массивов en = ${en.length} , ru = ${ru.length}`);
} else {
  for (let count = 0; count < en.length; count++) {
    objEnru[en[count]] = ru[count];
  }
  }

console.log(objEnru);