var budgetController = (function() {
    var x = 23;
    var add = function(a) {
        return x + a
    }
    return {
        PublicTest: function (b) {
            return add(b);
        }
    }
})()

var UIController = (function() {
    // Some Code
})()

var controller = (function(budgetCtrl, UICtrl) {
    var z = budgetCtrl.PublicTest(5)
    return {
        anotherPublic: function(){
            console.log(z)
        }
    }
})(budgetController, UIController)
