 //  Primitive Data Types (Immutable)

 // 7 tpes of primitive data types in javaScript

//  String – Textual data
//  let name = "Nitish";

//  Number – Integer or floating-point
//  let age = 25;

// Boolean – true or false
// let isActive = true;

// Undefined – A variable declared but not assigned
// let x; // x is undefined

// Null – Represents "no value"
// let y = null;

// Symbol – Unique and immutable value (used as object keys)
// let sym = Symbol('id');

// BigInt – For large integers
// let big = 12345678901234567890n;
/*const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);*/

// Non-Primitive (Reference) Data Types (Mutable)


//  Object – Collection of key-value pairs
//  let user = { name: "Nitish", age: 25 };
//const heros = ["Nitish", "Rohit", "Sahil", "Amit"];
//let myobject = {
  //  name: "Nitish",
   // age: 26,
//}

//  Array – Ordered list
//  let numbers = [1, 2, 3];

//  Function – Reusable block of code
//  function greet() { return "Hello"; }
/*const MyFunction = function(){
    console.log("Hello World");
}
console.log(typeof anotherId);*/

// JavaScript is a dynamically typed language.

// What does that mean?
// You don’t need to declare variable types.
//ex-
//let x = 5;//x is a number
// x= "Nitish";// now x is a string 
//There’s no type error – this is allowed in JavaScript.
//https://262.ecma-international.org/5.1/#sec-11.4.3
//read this link for more details


//**************stack and heap in java script ******

//In JavaScript, memory management involves two main areas: Stack and Heap.
// Stack (Call Stack)

// Stores primitive values and function calls.

// Fast access, managed in a Last-In-First-Out (LIFO) manner.

// Automatically cleaned up after function execution ends.
//example :
//let a = 10;// Number (primitive type)
//let b = "Hello";// String (primitive type)
//function greet() {} //function refrence on stack

// Heap
// Stores objects, arrays, and functions' complex data.

// Used for reference types (non-primitives).

// Slower than the stack, but necessary for dynamic and complex data.

//Example:
//let user = {name: "Nitish", age: 26};// object store in heap
//let arr = [1,2,3,4,5];// array store in heap


//The reference to the object or array is stored on the stack, while the actual data is stored in the heap.
// Garbage Collection:
// JavaScript uses automatic garbage collection to clean up unused heap memory (when no references remain).

let myYoutubename = "Creative Nitish";
let anotherName = myYoutubename;
anotherName = "Creatibe";
console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    name: "Nitish",
    emailId: "nitish123@gmail.com",
    upiId: "phonepay@ybl",

}
let userTwo = {
    emailId: "nitish123@gmail.com",
}
console.log(userOne.emailId);
console.log(userTwo.emailId);