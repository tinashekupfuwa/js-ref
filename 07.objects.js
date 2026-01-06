//Objects are a collection of properties

var person = {
  firstName: "Charles",
  age: 21,
  isFemale: false,
  balance: 100.45,
  dob: new Date(2000, 5, 18),
  address: {
    city: "Lagos",
    postCode: "L67H",
  },
};

console.log(person.firstName);
console.log(person.age);
console.log(person.balance);
console.log(person.address.city);
console.log(Object.values(person));
