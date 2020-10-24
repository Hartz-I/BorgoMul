//object destructuring!

const address={
  street: "dgd",
  city: "gd",
  country: "geeg"
};

//want to keep them in seperate variables! but it's repeatative!
//const street= address.street;
//const city=address.city;
//const country=address.country;

//destructuring solves it

const { street, city, country } = address //

//keeping in an alias
const { city : st }=address

console.log(st)




//spread operator
const first=[1,2,3];
const second = [4,5,6]

const combined=first.concat(second);
console.log(combined);

//with spread
const combineds=[...first,"a","b", ...second,"c"];
console.log(combineds);

const clone=[...first]
console.log(clone);

//combining two objects
const one={name: "mosh"};
const two={job: "Instructor"};

const combine={...one,...two,location: "Australia"};

console.log(combine);

const clone_obj={...one};
console.log(clone_obj);


