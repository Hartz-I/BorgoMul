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

/*class Teacher extends Person{ //it inherites all the methods in person
  teach(){
    console.log("teach");
  }
}*/

//inheritance
class Teacher extends Person{ //it inherites all the methods in person
  constructor(name,degree){
    super(name); //we have to refer the parent class if we want construct in child class
    this.degree=degree
  }
  teach(){
    console.log("teach");
  }
}

//to get the walk function also in the teacher class we
//need the concept of inheritace and composition

const teacher=new Teacher("John","MSc");

console.log(teacher.degree,person.name,teacher.name)