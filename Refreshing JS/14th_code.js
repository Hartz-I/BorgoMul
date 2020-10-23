function randF(){

	return Math.random();
}
console.log(randF())

//getting whole num random
function randFw(){

	return Math.floor(Math.random()*200);
}
console.log(randFw())

//in a range
function randFwr(min,max){
	max=max-min+1
	return Math.floor(Math.random()*max)+min;
}
console.log(randFwr(1,6))

//parseint function takes str returns int

console.log(parseInt("45"))

//parseInt with radex

console.log(parseInt("11011",2)) //converts into decimal

//ternery operator

//condition ? statement-if-true : statement-if-false

function compare(a,b){
	return a>b ? "A is greater than b" : "its either a is smaller than b or equal";
}

console.log(compare(6,4))

//multiconditional ternery
function checkSign(num){
	return num>0 ? "positive" : num<0 ? "negetive" : 0;
}

console.log(checkSign(0))

//let vs var

//ES6 gets let and const

//let doesn't let you declare same variable twice
//let is only limited to the block scope
//meaning if it's in a "if" curly brackets it would create an error outside the brackets

//const creates read only
//commonly declared with CAPITALS

const s=[4,5,6];

function edit(){
	//s=[4,5] creates an error but
	s[0]=21;
	s[1]=458;
	s[2]=45666; //this can be done. this is called mutation
}
edit()

console.log(s)

//object.freeze