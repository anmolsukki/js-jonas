var job, married;
job = "Developer";
married = true;
console.log(job + " " + married)

var name = prompt("What Is Your Good Name?")
console.log(name)

// *******************************************
// Switch case
var job = "Instructor"
switch(job) {
    case "Teacher" :
    case "Instructor" :
        console.log("Teaches kids how to code")
    break;
    case "Developer" :
        console.log("Create a Website")
    break;
    case "Driver" :
        console.log("Drives Uber in New Delhi")
    break;
    default : console.log("Does Something else")
}



var firstName = "Anmol";
var age = "24"
switch (true) {
    case age < 13 :
        console.log(firstName + " is a boy")
    break;
    case age >= 13 && age < 20 :
        console.log(firstName + " is a teeneger")
    break;
    default : console.log(firstName + " is a Man")
}


// ****************************************************
function tipCalculator(bill) {
    var percentage;
    if(bill < 50) {
        percentage = .2 // calculate 20% tip
    }
    else if (bill >= 50 && bill < 200) {
        percentage = .15 //calculate 15% tip
    }
    else {
        percentage = .1 // calculate 10% tip
    }
    return percentage * bill
}
var bills = [ 124, 48, 268 ];
var tips = [
    tipCalculator(bills[0]),
    tipCalculator(bills[1]),
    tipCalculator(bills[2])
]

var finalValues = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
]
console.log(tips, finalValues)
