
// ES6 Unique

// *************************** let and const ****************************
// scoping differences

/*
let variable = "Test"; 
console.log(variable); // console prints "Test"

variable = "Another Value"; 
console.log(variable); // console prints "Another Value"

const maxLevel = 100; 
console.log(maxLevel); // console prints 100;
// maxLevels = 99;   // error says "left hand side of assignment expression cannot be a constant"... immutable data structure
// use when you know that a value is not going to change to get compilation support to double check that something was not incorrectly changed
*/


// ***************************** block scope *******************************
// ES6 syntax

let variable = 'Another Value';

function reset() {
    let variable = null;
    console.log(variable); // prints 'null'
}
reset(); 
console.log(variable); // prints 'Another Value'


// *************************** arrow functions ****************************

console.log("Arrow Functions"); 

/*
keep in mind that by adding "const" in front of "addNumbers"... you are creating an anonymous function "(function() {})" 
    and then assigning that anonymous function to the variable "addNumbers".
    this allows you to scope functions... 

    for more information: http://2ality.com/2015/02/es6-scoping.html
*/

const addNumbers = function( numberOne: number, numberTwo: number ): number {
    return numberOne + numberTwo; 
};

console.log(addNumbers(5, 6)); 

// only need parenthesis if you have multiple parameters
const multiplyNumbers = (numberOne: number, numberTwo: number ) => numberOne * numberTwo; // same syntax as enclosing with {} and adding a return statement... 

console.log(multiplyNumbers(5, 4)); 

const greet = () => {
    console.log("Hello!"); 
};
greet(); 

// cannot assign type to input... problem with no parenthesis notation
const greeting = friend => console.log(friend);

greeting("johnny"); 


// *************************** default parameters ****************************

console.log("Default parameters"); 

const countdown = (start: number = 10): void => {
    while (start > 0 ) {
        start--; 
    };
    console.log('done!', start); 
};

countdown(10); 
countdown(); 

class AdminTS {
    constructor() {
        let btn = document.getElementById("coolbutton");
        btn.addEventListener("click", (e:Event) => this.getTrainingName(4));
    }
    getTrainingName(n:number): string {
        console.log('getTrainingName was called due to "coolbutton" click');
        return ('getTrainingName was called due to "coolbutton" click'); 
    }
}

new AdminTS(); 


<<<<<<< HEAD
// default parameters can also include "logic" although it's not considered good practice to include complex logic/operations within the parameters 

const countdownWithEnding = ( start: number = 10, end: number = start - 5): void => {
    while (start > end) {
        start --;
    }; 
    console.log('done!', start); 
} 

// *************************** Rest and Spread operators ****************************

console.log("REST AND SPREAD"); 

const numbers = [1, 2, 34, 99, -13];


// math function doesn't allow you to check an array... you need to literally enter the list of numbers
// expects type numbers and not numbers[]

console.log(Math.max(33, 54, 23, 554)); // console => 554

// can solve by using the "spread" operator
console.log(Math.max(...numbers)); // console => 99

// '...' spread operator allows you to not have to do loops or anything like that... "spreads" out your array...

// rest operator

// could do this: 
function makeArray(argOne: number, argTwo: number, argThree: number) {
    return [argOne, argTwo, argThree]; 
};

// however... not flexible... so do the following:
function makeArrayWithRestOperator(name: string, ...args: number[]) {
    return args; 
}
console.log(makeArrayWithRestOperator("jim", 5, 2, 3)); // console => [5, 2, 3]
// typescript understands that if you are passing parameters... "..." will be a spread... however if "..." is in the function definition parameters... it will assume you meant the rest operator

// spread and rest are extremely useful for lists or arrays


// *************************** destructuring ****************************

console.log("DESTRUCTURING"); 

const myHobbies = ["cooking", "sports"]; 
console.log(myHobbies[0], myHobbies[1]); // console => cooking, sports

// storing in variables...: 
const hobbyOne = myHobbies[0];
const hobbyTwo = myHobbies[1]; 
console.log(hobbyOne, hobbyTwo); // console => same as above... obviously

// destructuring works as follows: 
const [hobbyOneDestruct, hobbyTwoDestruct] = myHobbies;
// does the same as above... except with one line of code! hobbyOneDestruct will receive the "cooking" value... and hobbyTwoDestruct will receive the "sports" value!
console.log(hobbyOneDestruct, hobbyTwoDestruct); // console => cooking, sports

// can also destruct user data... not just arrays...

const userData = { userName: "Max", age: 27 }; 

// important note... the names of the keys need to match the variables that you're assigning... the order doesn't matter... 
// also, curly brackets are important if it's an object... brackets are array specific
const { userName, age } = userData; 

// can alias names. 
const { userName: myName, age: myAge } = userData; 
=======

// ******************************** template literals ********************************

const userName = "Max"; 

// not that complex... and can't use multiline strings... 
const greetingTwo = "Hello, I'm " + userName; 
console.log(greetingTwo); // console -> Hello, I'm Max

// back ticks -> ` ` allow you to write more complicated strings
const greetingThree = ` This is a heading!
I'm ${userName}. 
This is cool!`;

console.log(greetingThree); // console -> multiline string

// template literals allow you to use variables within strings... 


// ******************************* other ES6 features ********************************
// these are more ES6 features supported by typescript... not typescript specific... 
// symbols and iteraters among others
>>>>>>> 041e9f4edfb8aa9081f3a5957939f4d29abb6685



