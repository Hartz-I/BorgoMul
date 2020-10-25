import {Teacher} from './teacher' //"./" means current folder


const teacher=new Teacher("John","MSc");
console.log(teacher.name)

//now too many classes are here! it's getting polluted! it's nicer
//to split this code into multiple files! It's called modularity