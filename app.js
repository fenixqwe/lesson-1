//Что отобразится в консоли. Почему?

//12 + 14 + '12' - отобразится 2612 , потому-что выполниться сначало действие (12 + 14) а потом уже это число прибавиться к строке;
//3 + 2 - '1' - отобразится 4
//true + 2 - отобразится 3 , потому-что true = 1;


//+'10' + 1 - отобразится 11;

//undefined + 2 - отобразится NaN;


//null + 5 - отобразится 5;


//true + undefined - отобразится NaN
//1) Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
/*
let a;

if (a == 'hidden'){
	a = 'visible';
}
else{
	a = 'hidden';
}


console.log (a)
*/
/*2)Используя if, записать условие:
1. если переменная равна нулю, присвоить ей 1;
2. если меньше нуля - строку “less then zero”;
3. если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).*/
/*
let a;

if (a == 0){
	a = 1
}
if (a < 0){
	a = 'less then zero'
}
if (a > 0){
	a *= 10;
}

console.log(a)
*/
/*3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. 
Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.*/

/*let car = { 
	name: 'Lexus', 
	age: 10, 
	create: 2008,
	needRepair: false 
}
if (car.age > 5){
	console.log("Need Repair")
	car.needRepair = true;
}
else{
	car.needRepair = false;
}

console.log(car)
*/
//4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
/*let item = { 
	name: 'Intel core i7',
 	price: '100$',
  	discount: '15%' 

}
if (item.discount && parseInt(item.discount)){
	item.priceWithDiscount = (100 - (100 * parseInt(item.discount) / 100))
	value = item.priceWithDiscount
}	
else{
	console.log(item.price)
}
console.log(value)*/
//Написать условие если (цена товара больше или равна минимальной цене) и (меньше или равна максимальной цене) то вывести в консоль название этого товара, 
//иначе вывести в консоль что товаров не найдено.

/*let product = {
    name: 'Яблоко',
    price: '10$'
};

let min = 10; 
let max = 20;
let price = product.price;

if (parseInt(price) >= min && parseInt(price) <= max){

	console.log(product.name);
}
else{
	console.log('товаров не найдено')
}*/