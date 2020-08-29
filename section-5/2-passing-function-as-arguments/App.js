var years = [ 1990, 1994, 2005, 1986, 2001 ]

function arrCalc(arr, fn) {
    var arrRes = []
    for(var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]))
        console.log(arr[i])   // 1990   // 1994    // 2005   // 1986    // 2001
    }
    return arrRes;
}

function calcAge(el) {
    return 2020 - el;
}

var ages = arrCalc(years, calcAge);
console.log(ages); // [30, 26, 15, 34, 19]
