// types for ts...

/*
----------- basic ---------
 # strings
 # numbers
 # booleans

----------- other ---------
 # any
 # arrays
 # tuples (ts unique)
 # enum

*/


// ---------------- strings ---------------
// ts notices that myName should be a string... and other types are not assignable to it... 
let myName = 'Max'; 

// will fail with tsc command
// myName = 28; 

// js will convert it to a string...


// --------------- numbers ---------------
let myAge = 27.5; // can be integer or float... both of type "number"


// --------------- boolean --------------
let hasHobbies = true;

// will result in an error even though 1 can be cast as a boolean
// hasHobbies = 1;


// ----------- assign types ------------
let myRealAge; 

// back to a javascript way of handling as myRealAge is type 'any'
myRealAge = 27; 
myRealAge = '27';

// can assign types without giving initial value as well (explicit)... 
let myRealAgeTwo: number; 


// --------------- arrays --------------
let hobbies = ["Cooking", "Sports"]; 
console.log(hobbies[0]); // similar to other languages... arrays are zero-indexed and will result in console saying Cooking

console.log(typeof hobbies); // type => object

// since hobbies is inferred as a string from above so it will result in an error at compilation
// hobbies = [100]; 

// can override by the following: 
let hobbiesTwo: any[] = ["cooking", "sports"]; 

// still has to be an array of anything... but within the array, the entries can be anything


// -------------- tuples --------------
// array of mixed types
let address = ["Superstreet", 99]; 

// if you're sure that address will always be in the above format... you can be explicit by doing the following:
let addressTwo: [string, number] = ["Superstreet", 99]; 


// -------------- enum ----------------
// standards normally dictate that enum should start with a capital
enum Color {
    Gray,       // 0
    Green,      // 1
    Blue        // 2
}

// behind the scenes (similar to other languages) each of these stand for an integer 
// enums are still 'zero indexed'
let myColor: Color = Color.Green; 
console.log(myColor); // console => 1

// can override the default values of 'index'

enum SuperColors {
    Gray, 
    Green = 100,
    Blue = 2        // will be 101 if the value is not set to 2 (increments from previous value)
}


// ------------- any --------------
// most flexible type... can lead to a lot of trouble
let car: any = "BMW"; 
console.log(car); // console -> BMW

car = { brand: "BMW", series: 3 };
console.log(car) // console -> object




// ------------- functions ---------------
//#region functions




//#endregion