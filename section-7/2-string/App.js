let firstName = "John";
let lastName = "Smith";
const yearOfBirth = 1994;

calcAge = (yearOfBirth) => {
    return 2020 - yearOfBirth;
}

console.log("This is " + firstName + " " + lastName + " Has was born in " + yearOfBirth + " Today he is " + calcAge(yearOfBirth) + " Years Old")


const n = `${firstName} ${lastName}`
console.log(n.startsWith("J")); // true
console.log(n.endsWith("h")); // true
console.log(n.includes("Sm")); // true


console.log(`${firstName} `.repeat(5)); // John John John John John
