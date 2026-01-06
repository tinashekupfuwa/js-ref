//Functions - a set of instructions that perfom a task of calculate a value

function addNumbers(number1, number2) {
  return number1 + number2;
  //number1 and number 2 are paprameters
}

console.log(addNumbers(10, 12)); //the values inside addNumbers arguments;
console.log(addNumbers(4, 8));

var person = {
  name: "Charles",
};

console.log(Object.values(person));
console.log(Object.keys(person));
