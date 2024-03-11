"use strict";

/*
Необязательное задание. 
Необходимо вывести горку в консоль (используя цикл for), как показано на
рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

var floor = "x";
console.log(floor);
for (var floorNum = 0; floorNum < 19; floorNum++) {
  console.log((floor += "xx"));
}
