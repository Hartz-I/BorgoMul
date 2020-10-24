const person={
  name : "Mosh",
  walk : function(){ //walk is a mathod in the person object

  },
  talk() {} //this is how we call mathods in ES6;
}
person.talk();


const targetMember="name"; 
person[targetMember]='Inan'; //so we use the brackets when we don't know ahead of time what we are dealing with.
//if we know what is in then we use the dot call

person.name="Hi!"

//this keyword

