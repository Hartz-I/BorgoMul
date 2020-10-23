//while loop
console.log("working!")

var myVar=[];

var i=0;
while(i<5){
	myVar.push(i);
	i++;

}

console.log(myVar)

//for loop
var ourVar=[]
for (var i=0; i<5; i++) {
	ourVar.push(i);
}

console.log(ourVar);

for (var i=1;i<6;i++){
	myVar.push(i);
}

console.log(myVar);

//this increment can happen a lot at a time
//it can also decrement

// atterate throug contents in array! 

var a=[2,4,6,7,87,5,54,34], ourTotal=0;

for (var i=0; i<a.length;i++){
	a[i]=a[i]**2;
	ourTotal+=a[i]; //sum of squires!
}

console.log(a)
console.log(ourTotal)

//we can also nest loops!

var mulArr=[[43,56,7],[4,1],5] //the 5 doesnt count!

for (var i=0; i<mulArr.length; i++){
	for (var j=0; j<mulArr[i].length; j++){
		console.log(mulArr[i][j])
	}

	console.log(mulArr[i].length)
	if (myVar[i].length<1) {
		console.log(mulArr[i]);
	}
}

//do while loops! always run first then check the condition!!!
myVar=[]
i=0
do {
	myVar.push(i);
	i++;
} while (i<5)

console.log(myVar)