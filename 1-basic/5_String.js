const name = "Nitish";
const count = 26;
//console.log(name, count + " Kumar");
console.log(`Hello my name is ${name} and I am ${count}`);
 
const gameName = new String("Cricket");
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.UpperCase);
console.log(gameName.charAt(2));
console.log(gameName.indexOf("c"));
const newString = gameName.substring(0, 4);
console.log(newString);
const anotherString = gameName.slice(-4, 4);
console.log(anotherString);

const newStringone = "  Nitish  ";
console.log(newStringone);
console.log(newStringone.trim());
const url = "https://www.nitish.com/%20 Nitish";
console.log(url.replace ('%20', '_'));
console.log(url.includes("Nitish"))
/* 1️⃣ Q: How do you declare a string in JavaScript?
A: Using single ' ', double " ", or backtick ` ` quotes.

2️⃣ Q: How do you find the length of a string?
A: Use .length property, e.g., str.length.

3️⃣ Q: How to access a character at a specific index?
A: Use str[index] or str.charAt(index).

4️⃣ Q: How to concatenate two strings?
A: Use + operator or str1.concat(str2).

5️⃣ Q: What is a template literal?
A: A backtick string that supports ${expression} interpolation.

6️⃣ Q: How to convert a string to uppercase or lowercase?
A: Use .toUpperCase() or .toLowerCase().

7️⃣ Q: How do you remove extra spaces from a string?
A: Use trim(), trimStart(), or trimEnd().

8️⃣ Q: How to check if a substring exists in a string?
A: Use includes(), indexOf(), or search().

9️⃣ Q: How to extract a part of a string?
A: Use slice(), substring(), or substr().

🔟 Q: How to split a string into an array?
A: Use split(delimiter) method.

1️⃣1️⃣ Q: How to replace part of a string?
A: Use replace() for one or replaceAll() for all.

1️⃣2️⃣ Q: How to check if a string starts or ends with a value?
A: Use startsWith() and endsWith().

1️⃣3️⃣ Q: Are strings mutable in JavaScript?
A: No, strings are immutable (cannot be changed directly).

1️⃣4️⃣ Q: How to use escape characters in a string?
A: Use \ before quotes or special chars like \n, \t.*/