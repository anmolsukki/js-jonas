// let and const

// ES5
var name5 = "Jane Smith";
var age5 = 23;
name5 = "Jane Miller";
console.log(name5)  // Jane Miller

// ES6
const name6 = "Jane Smith";
let age6 = "24";
name6 = "Jane Miller";
console.log(name6) // Uncaught TypeError: Assignment to constant variable.





// ES5 function
function driversLicences5(passedTest) {
    if(passedTest) {
        var firstName = "John";
        var yearOfBirth = 1994;
        console.log(firstName + " , born in " + yearOfBirth + " is now officially allowed to rive a car");
        // John , born in 1994 is now officially allowed to rive a car
    }
}

driversLicences5(true)

// ES6 function
driversLicences6 = (passedTest) => {
    if(passedTest) {
        let firstName = "John";
        let yearOfBirth = 1994;
        console.log(firstName + " , born in " + yearOfBirth + " is now officially allowed to rive a car");
    }
}

driversLicences6(true)







// example ES6
let i = 23;
for(let i = 0; i < 5; i++) {
    console.log(i) // 0  1  2  3  4
}

console.log(i) // 23 
// Both "i" are different






// example ES5
var i = 23;
for(var i = 0; i < 5; i++) {
    console.log(i) // 0  1  2  3  4
}

console.log(i) // 5
