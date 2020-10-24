const squere=function (number) {
  return number*number
} //this is the old version

//arrow functions
const squere2 = (number) => number*number; //it's like f(n)=n*n

console.log(squere2(25));

//ex
const jobs=[
  {id:1,isActive: true},
  {id:2,isActive: true},
  {id:3,isActive: false},
];

//const activeJobs = jobs.filter(function(job){ return job.isActive; })
//console.log(activeJobs)


//doing the same thing but with arrow functions
const activeJobs = jobs.filter( job => job.isActive );
console.log(activeJobs)

//has less noise and eaier to understand!


//arrow functions and this
const person = {
  talk(){
    setTimeout(function(){
      console.log('this',this) //gives us the window
    }) //here setTimeout is a whole other function it is part of no
      //no object and when 'this' is called out of a function 
      //it returns window
  }
}

person.talk()

//solving it
//old method
const person2 = {
  talk(){
    var self=this;
    setTimeout(function(){
      console.log('self',self);
    }) 
  }
}

person2.talk()

//in arrow function we don't have this issue
const person3 = {
  talk(){
    setTimeout(()=>{
      console.log('this',this);
    }) 
  }
}

person3.talk()
//arrow funtions don't rebind the "this" 

//maps; renders list

const colors = ["red","green","blue"];
const items= colors.map(color=> "<li>"+color+"</li>");

//we can use template literals
const items2= colors.map(color=> `<li>${color}</li>`); //used backtick
console.log(items2);