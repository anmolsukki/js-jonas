(function(){
    function Question(question, answer, correct){
        this.question = question;
        this.answer = answer;
        this.correct = correct;
    }
    
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for(var i = 0; i < this.answer.length; i++) {
            console.log(i + ": " + this.answer[i])
        }
    }
    
    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;
        if(ans === this.correct) {
            console.log("correct Answer")
            sc = callback(true)
        }
        else {
            console.log("Incorrect Answer, Try Answer")
            sc = callback(false)
        }
        this.displayScore(sc)
    }

    Question.prototype.displayScore = function(score) {
        console.log("Your Current Score is: " + score)
        console.log("-----------------------------------")
    }

    function score() {
        var sc = 0;
        return function(corrects) {
            if(corrects) {
                sc++
            }
            return sc;
        }
    }
    var keepScore = score();
    
    var q1 = new Question("Is JavaScript the coolest programming language in the world?" , ["yes", "NO"], 0)
    
    var q2 = new Question("What is the name of this course\'s teacher", ["John", "Michel", "Jonas"], 2)
    
    var q3 = new Question("what does best describe coding" , ["Boring", "Hard", "Fun", "Tedious"], 2)

    var question = [q1, q2, q3];

    function nextQuestion() {
        var n = Math.floor(Math.random() * question.length);
        question[n].displayQuestion()
        
        var answer = prompt("Please Select the correct answer.")

        if(answer !== "exit") {
            question[n].checkAnswer(parseInt(answer), keepScore);
            
            nextQuestion();
        }
    }

    nextQuestion();
    
})()
