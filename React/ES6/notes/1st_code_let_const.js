/*function sayHello(){
  for(var i=0; i<=5; i++){
    console.log(i);
  }
  console.log(i);
}

sayHello()*/

//but the variable should be accessable to only in
//in the block it is defined in 
// so i should only be in the for loop
//but outer i value is 6


//var -> function
//let -> block
//const -> block
function sayHello(){
  for(let i=0; i<=5; i++){
    console.log(i);
  }
  //console.log(i);
}

sayHello()

const x=1;
// x=2  will not work

//takeaway
//1. const use this first
//2. let use this only when we have to change a value
