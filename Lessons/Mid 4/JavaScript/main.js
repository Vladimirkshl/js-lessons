console.log(isNaN(NaN));
console.log(isNaN(true));
console.log(isNaN(21));
console.log(isNaN("NaN"));
console.log(Number.isNaN("NaN"));


console.log(isFinite(32));
console.log(isFinite("21"));
console.log(Number.isFinite("21"));
console.log(isFinite(true));
console.log(isFinite(-1));
console.log(Number.isFinite(true));


console.log(parseInt("31Hh", 10));
console.log(parseInt("a12s"));
console.log(parseInt("211wq", 10));


console.log(parseFloat("5.12a"));

var param = encodeURIComponent("#author");
var url = "https://www.google.com/search?";

console.log(url + param);