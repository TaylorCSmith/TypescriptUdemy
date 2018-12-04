// Re-write the below Code using the ES6 Features you learned throughout this Module.
/*
// Exercise 1 - Maybe use an Arrow Function?
var double = function(value) {
    return value * 2;
};
console.log(double(10));
 
// Exercise 2 - If only we could provide some default values...
var greet = function (name) {
    if (name === undefined) { name = "Max"; }
    console.log("Hello, " + name);
};
greet();
greet("Anna");
 
// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
 
// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
Array.prototype.push.apply(newArray, numbers);
console.log(newArray);
 
// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0];
var result2 = testResults[1];
var result3 = testResults[2];
console.log(result1, result2, result3);
 
// Exercise 6 - And a well-constructed object!
var scientist = {firstName: "Will", experience: 12};
var firstName = scientist.firstName;
var experience = scientist.experience;
console.log(firstName, experience);

*/

// ************************** my solution ***********************
// Exercise 1
// function alias changed so that it doesn't conflict with other files in module 4 folder
const doubleFromExercise = (value: number) => value * 2; 

// Exercise 2

// function alias changed so that it doesn't conflict with other files in module 4 folder
const greetFromExercises = (name = "Max") => {
    console.log("Hello, " + name); 
};

greetFromExercises(); 
greetFromExercises("Anna"); 

// Exercise 3
var numbersExercise = [-3, 33, 38, 5]; 
console.log(Math.min(...numbersExercise)); 

// Exercise 4
var newArray = [55, 20, ...numbersExercise]; 

// Exercise 5
var testResults = [3.89, 2.00, 1.38]; 
var [result1, result2, result3] = testResults; 

console.log(result1, result2, result3); 

// Exercise 6
var scientist = {firstName: "Will", experience: 12}; 
var {firstName, experience} = scientist;
console.log(firstName, experience); 

// ************************** course solutions ************************
/*
// Exercise 1 - As Arrow Function
const double = (value: number) => value * 2;
console.log(double(10));

// Exercise 2 - Default Params
const greet = (name = "Max") => {
  console.log("Hello " + name);
};
greet();
greet("Anna");

// Exercise 3 - Spread Operator
const numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

// Exercise 4 - Spread Operator
const newArray = [66, 2];
newArray.push(...numbers);
console.log(newArray);

// Exercise 5 - Destructuring Arrays
const testResult = [1.28, 4.33, 2.29];
const [result1, result2, result3] = testResult;
console.log(result1, result2, result3);

// Exercise 6 - Destructuring Objects
const scientist = {firstName: "Will", experience: 12};
const {firstName, experience} = scientist;
console.log(firstName, experience);

*/