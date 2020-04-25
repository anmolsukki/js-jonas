var john = {
    name: "john",
    age: 26,
    job: "teacher",
    presentation: function(style, timeOfDay) {
        if(style === "formal") {
            console.log("Good " + timeOfDay + " Ladies and Gentelmen! I\'m a " + this.job + " and i\'m " + this.age + " Years old.");
        }
        else if(style === "friendly"){
            console.log("Hey what\'s up? I\'m " + this.name + " I\'m a " + this.job + " and i\'m " + this.age + " Years old have a nice " + timeOfDay);
        }
    }
}

var emily = {
    name: "Emily",
    age: 35,
    job: "designer"
}

// 1.
john.presentation("formal", "morning");  // Good morning Ladies and Gentelmen! I'm a teacher and i'm 26 Years old.

// 2.
john.presentation.call(emily, "friendly", "afternoon")  // Hey what's up? I'm Emily I'm a designer and i'm 35 Years old have a nice afternoon

// 3.
var emilyFriendly = john.presentation.bind(emily, "friendly")
emilyFriendly("night")  // Hey what's up? I'm Emily I'm a designer and i'm 35 Years old have a nice night
