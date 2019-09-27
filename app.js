let string = 'some test string';
//1. Получить первую и последнюю буквы строки


/* Последняя буква
value = string[string.length - 1]

console.log (value)
*/
/* Первая буква 
value = string[0];

console.log (value)
/*

//2. Сделать первую и последнюю буквы в верхнем регистре

/* Последняя буква 
value = string[string.length - 1]

console.log (value.toUpperCase())*/

/* Первая буква 
value = string[0];

console.log(value.toUpperCase())*/
//3. Найти положение слова ‘string’ в строке


/*
value = string.indexOf('string');

console.log(value)
*/
//4. Найти положение второго пробела (“вручную” ничего не считать)


/*
secondSpace = string.indexOf(' ', 5);

console.log(secondSpace)
*/
//5. Получить строку с 5-го символа длиной 4 буквы


/*let value = string.substr(4, 5)

console.log(value)*/
//6. Получить строку с 5-го по 9-й символы


/*let value = string.slice(4, 8)

console.log(value)*/
/*7. Получить новую строку из исходной путем удаления последних 6-и символов
(то есть исходная строка без последних 6и символов)*/


/*
value = string.slice(0, -6);


console.log(value)*/
//8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”


/*const a = 20;
const b = 16;

console.log(String(a) + String(b))*/

//let a = 0 || 'string';  ‘string’;  0 - false, ‘string’ - true

//let a = 1 && 'string'; Answer - ('string'); 1 - true; string - true;


//let a =  null || 25; Answer - (25)
 
//let a = null && 25; Answer - (null)


//let a = null || 0 || 35; Answer - (35)

//let a = null && 0 && 35; Answer - (null)

//1. Получить число pi из Math и округлить его до 2-х знаков после точки

//console.log(Math.PI.toFixed(2))

//2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
/*
let min = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
let max = Math.max(15, 11, 16, 12, 51, 12, 13, 51);

console.log(min, max)*/

//Получить случайное число и округлить его до двух цифр после запятой

/*let value = Math.random().toFixed(2);

console.log(value)*/
//Получить случайное целое число от 0 до X. X - любое произвольное число.

/*let a = 10;
let value = Math.random() * 10;
let x = Math.floor(value)

console.log(x)*/
//4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?

/*let a = 0.6 + 0.7;

console.log(a.toFixed(1))*/

//5. Получить число из строки ‘100$’
/*
let x = '100$';

let a = parseInt(x) + 5;

console.log(a)*/

