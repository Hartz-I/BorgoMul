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

const activeJobs = jobs.filter(function(job){ return job.isActive; })
console.log(activeJobs)