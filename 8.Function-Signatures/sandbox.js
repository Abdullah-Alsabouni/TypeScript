// let greet: Function,
// example 1
var greet;
greet = function (name, greeting) {
    console.log("".concat(name, " says ").concat(greeting));
};
// example 2 
var calc;
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
var result = calc(12, 13, 'add');
console.log(result);
