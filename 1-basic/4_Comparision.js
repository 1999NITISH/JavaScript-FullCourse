/*console.log(2 == 2);
console.log(3<=2);
console.log(2<=6);
console.log(2>=2);
console.log(2!=2);
console.log("2" >= 1);
console.log("2" >=3);
 
console.log(null > 0);
console.log(null < 0);
console.log(null == 0);
console.log(null >=0);
console.log(null <= 0);*/
//console.log(null == underdefined);
// The reason is that an equality check == and comparisons > < >= <= work differently.
//Comparisons convert null to a number treating it as 0.
//That's why (3) null >=0 is true, but (1) null > 0 is false.
console.log(undefined == 0)
console.log(undefined > 0);
console.log(undefined < 0);
console.log("2" ==2);
console.log("2" === 2);


