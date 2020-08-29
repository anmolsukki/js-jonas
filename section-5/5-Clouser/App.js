function retirement(retirementAge) {
    var a = " years left until retirement"
    return function(yearOfBirth){
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a )
    }
}

var retirementUs = retirement(66);
retirementUs(1994)

/****** OR ********/
retirement(66)(1994)
