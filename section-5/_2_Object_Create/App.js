// Object.create
var personProto = {
    calculateAge: function(){
        console.log(2020 - this.yearOfBirth)
    }
}

var john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1994;
john.job = "Teacher";

/******************** OR ********************/

var jane = Object.create(personProto, {
    name: { value: "Jane" },
    yearOfBirth: { value: 1994 },
    job: { value: "Teacher" }
})

// Both Output are same
