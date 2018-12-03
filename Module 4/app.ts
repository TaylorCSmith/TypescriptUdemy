
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



