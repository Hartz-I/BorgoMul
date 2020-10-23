//ananomous function
var magic=function(){
	return new Date();
}

//converting arrow
var magic=()=>{
	return new Date();
}

//shortening more
var magic=()=> Date()

var myConcat= function(arr1,arr2){
	return arr1.concat(arr2);
};

var myConcatshort= (arr1,arr2) => arr1.concat(arr2);

console.log(myConcat([1,2],[3,4,5]))
console.log(myConcatshort([1,2],[3,4,5]))

//higher order
//when one function takes another function as an argument it is
// a good time for an arrow function

const ra=[4,5.6,-9.8,3.14,42,6,8.34,-2];

const squrelist= (arr) => {
	const squiredIntegers=arr.filter( num => Number.isInteger(num) && num>0 ).map( x => x*x );
	return squiredIntegers
}
const sqi=squrelist(ra);
console.log(sqi)


//default parameter insite (arr=7) intitial values

//without rest operator
const sum=(function(){
	return function sum(x,y,z){
		const args=[x,y,z]
		return args.reduce((a,b) => a + b,0);
	};
})();

console.log(sum(1,2,4))

//with rest operator
const sum2=(function(){
	return function sum(...args){
		return args.reduce((a,b) => a + b,0);
	};
})();

console.log(sum2(1,2,4,5,6)) //can add any number of arguments

//spread operator
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [];  // Change this line

(function() {
	arr2=[...arr1]
	arr1[0]="potatos"
})();

console.log(arr2);

