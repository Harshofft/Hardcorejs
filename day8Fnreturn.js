// function greetPlayer(name) {
// 	const trimmed = typeof name === 'string' ? name.trim() : '';
// 	return `Hello, ${trimmed || 'Player'}!`;
// }

// here ... is rest oprerator
function calculator(...num){
	return num
}
// console.log(calculator(100,200,500 , 'hello'));

function multiPly(a,b) {
	let c =a*b;
	return c;
}
let result = multiPly(2,3)
// console.log(result);

// Assignment  no . 2

function isAdult(age) {
	if(age>= 18){
		return true ;
	}
	else {
		return false;
	}
}
let status = isAdult(20);
// console.log(status);


//assignment no . 3
 function calculateDiscount(price) {
	if(price>=1000){
		let discountPrice = price /10
		let finnalPrice = price - discountPrice

		return finnalPrice
	}
	else {
		return price -50
	}
 }
 console.log(calculateDiscount(2500));
  console.log(calculateDiscount(500));
 