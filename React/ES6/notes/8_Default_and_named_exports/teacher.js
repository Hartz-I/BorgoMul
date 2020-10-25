import {Person} from './person';

export function promote(){} //now we can access the function in index

//class is an object is js
export default class Teacher extends Person{ //adding default means it's the main thing that we are exporting
    constructor(name,degree){
      super(name);
      this.degree=degree;
    }
    teach(){
      console.log("teach");
    }
  }

  //named and default exports