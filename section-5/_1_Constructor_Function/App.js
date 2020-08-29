// Function Constructor

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    console.log(name) // John  // Jane   // Mark

    this.yearOfBirth = yearOfBirth;
    console.log(yearOfBirth) // 1994   // 1997   // 2000

    this.job = job;
    console.log(job) // Web Developer  // Designer   // Student

    this.calculateAge = function(){
        console.log(2016 - yearOfBirth) // 22   // 19    // 16
    }
}

var john = new Person("John", 1994, "Web Developer")
var jane = new Person("Jane", 1997, "Designer")
var mark = new Person("Mark", 2000, "Student")

john.calculateAge()
jane.calculateAge()
mark.calculateAge()


/************************* OR ******************************/

// Prototype Properties
Person.prototype.lastName = "Smith"
console.log(john.lastName)   //  Smith
console.log(jane.lastName)   //  Smith
console.log(mark.lastName)   //  Smith