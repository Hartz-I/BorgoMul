const person={
  name : "Mosh",
  walk () {
    console.log(this);
  }
}

person.walk() //returning a reff

const walk=person.walk; //walk is a function

console.log(walk)

walk(); //returns undefined(if in strict mode) or window

//fixing the issue
//in js all functions are objects!

const walk2=person.walk.bind(person); //we binded the walk function with the person object!
//we set the value of this as person
console.log(walk2)

walk2();