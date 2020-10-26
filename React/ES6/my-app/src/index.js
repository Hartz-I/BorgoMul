import Teacher,{promote} from './teacher' //ctr+space to see options
//we exported the mathod Teacher from teacher.js
//we used the name so it's a name export!
//we removed the curly brackets from Teacher
//as it is the default method


//Default-> import ... from "";
//Named->import { ... } from "";

//in react frequently we'll have a import statement like this
import React,{Component} from "react"

const teacher=new Teacher("John","MSc");
teacher.teach();

//ctr+space for details