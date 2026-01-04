//Strings

var brand = "Popeyes";
console.log(typeof brand);
console.log(brand.length);
console.log(brand.toUpperCase());
console.log(brand.substring(0, 4));

console.log(brand.substring(0, 1)); //Good for initials on websites
console.log(brand.charAt(0)); //Better for Initials
console.log(brand[0]); //Better for Initials too

//Joining strings
var a = "big";
var b = "Restsaurant";

console.log(brand + " " + b);
console.log(brand.concat(" ", "the sailor mans")); //concat

//concat() can be used to join two strings together
console.log(a.concat(" ", b));
console.log(`${brand} ${b.toUpperCase()}`);

/** endsWith() - this is for finding if a string ends with a certain string*/
var movieTitle = "Lord Of The Rings";
console.log(movieTitle.endsWith("Rings")); //true
console.log(movieTitle.endsWith("rings")); //false because endsWith is case sensitive
