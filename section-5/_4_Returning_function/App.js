function interviewQuestion(job) {
    if(job === "Designer") {
        return function(name) {
            console.log(name + " ,can you please explain what UX design is");
        }
    }
    else if(job === "Teacher"){
        return function(name) {
            console.log("What subject do you teach, " + name)
        }
    }
    else {
        return function() {
            console.log("Hello what do you do?");
        }
    }
}

var teacherQuestion = interviewQuestion("Teacher");
teacherQuestion("John")
