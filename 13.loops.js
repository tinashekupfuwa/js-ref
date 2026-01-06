//Loops allow you run a piece of code until a condition has been reached.

//For
for (var i = 0; i <= 10; i++) {
  console.log(i);
}

var names = ["Charles", "Richard", "Pamela", "Alex", "Matthew"];

//fori
for (var i = 0; i <= names.length; i++) {
  console.log(names[i]);
}

//forOf loop

for (const name of names) {
  console.log(name);
}

//forFach
names.forEach(function (name) {
  console.log(name);
});
