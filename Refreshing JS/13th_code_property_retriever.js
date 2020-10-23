var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){

    for (var i=0; i<contacts.length; i++){
        if (contacts[i]["firstName"]===name){

            contacts[i][prop]=contacts[i][prop] || "" //a fantastic trick!!!
            if (contacts[i][prop]===""){
                return "no such property"
            }

            return contacts[i][prop];

            // another way is simply saying
            //return contacts[i][prop] || "no such property exist!" 
        }
    }

    return "No such name exists"
// Only change code below this line

// Only change code above this line
}

console.log(lookUpProfile("Sherlock", "lastName"));