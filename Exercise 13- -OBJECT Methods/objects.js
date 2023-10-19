// Retreiving Data from Object DOT/ Bracket Notation

const almir = {
    firstName : "Almir",
    lastName : "Kopic",
    age: 2023-1992,
    job: "developer",
    friends: ["Hans","Max", "Nick", ]
 };

 console.log(almir.lastName);

const nameKey = "Name";

console.log(almir["first" + nameKey]);
console.log(almir["last" + nameKey]);

//using dot notation

const interestedIn = prompt ("what do you want to know about Almir? Choose between firstName, lastName,age, job, and Friends")

console.log(almir[interestedIn]);

if (almir[interestedIn]){
    console.log(almir[interestedIn])
}else {
    console.log("Wrong request, Choose between firstName, lastName,age, job, and Friends")
    
}

almir.location = "Bosnia";
almir["githubg "] = "@almirkopic";
console.log(almir);

//Chalenge
//Almir has a 3 friends and his best friend is Nick

console.log(`${almir.firstName} has ${almir.friends.length}, 
and his best friend is called ${almir.friends[2]}`)


//OBJECT METHODS

const almir = {
    firstName : "Almir",
    lastName : "Kopic",
    birthYear: 1992,
    job: "developer",
    friends: ["Hans","Max", "Nick" ],
    hasDriversLicence: false,
    
    // calcAge: function(birthYear) {
    //     return 2023-birthYear
    // }

    calcAge: function() {
        this.age = 2023-this.birthYear;
        return this.age;
    },
        getSummary: function() {
            return `${this.firstName} is a ${this.age} year old ${this.calcAge()} 
            and he has ${this.hasDriverLicence ? "a" : "no"} driver's license.`
        }
    }

 
 console.log(almir.calcAge());

//chalenge Almir is 31 year old teacher, and he has a driver's licence

console.log(almir.getSummary());