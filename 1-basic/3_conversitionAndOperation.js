let age = 26;
console.log(typeof age);
console.log(typeof(age));

let valueNumber = Number(age);
console.log(typeof valueNumber);
console.log(valueNumber);

// "33" = 33 
// null = object print
// 33abc = NaN --> Not  a Number
//true = 1
//false = 0
//undefined = NaN
// 26 = 26
let isLoggedIn = 0;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
// 1 = True (if take 1 print true)
// 0 = false (if take 0 print false)
// "" = false (if take empty string print false)
// "Nitish" = true (if take any string print true)
// "0" = true (if take string with 0 print true)
// "1" = true (if take string with 1 print true)

let someNumber = 33;
let someString = String(someNumber);
console.log(someNumber);
console.log(typeof someString);