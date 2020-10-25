/*const person={
  name: "Mosh",
  walk() {
    console.log("walk");
  }
};*/

//what if we wanted to create another person
// one we can create another object
/*const person2={
  name: "Mosh",
  walk() {
    console.log("walk");
  }
};*/
//but if we make a mistake we have to correct all of them!

//class will solve the problem

class Person {
  constructor(name){
    this.name=name;

  }

  walk() {
    console.log("walk"); //press alt+down key to pull down the marked part
  }
}


const person = new Person("Mosh"); //it is the name in the constructor

console.log(person.name)

class Teacher{
  job(){
    console.log("teach");
  }
}