// let greet = () => { // Fonksiyon tanımlaması
//     console.log('hello world');
// }
var greet;
greet = function () {
    console.log('Hello Again');
};
var add = function (a, b, c) {
    console.log(a + b);
    console.log(c);
};
add(5, 10);
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7);
console.log(result);
