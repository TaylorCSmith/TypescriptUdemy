
// ----------------------- functions and return types ----------------------
// : string says that only a string will be returned
function returnMyName(): string {           
    return myName;
}

console.log(returnMyName()); 

// without explicitly assigning a type... will have return type "void"
function sayHello(): void {                       
    console.log("Hello!"); 
}


// --------------------------- argument types ----------------------------
function multiply(value1, value2): number {
    return value1 * value2; 
}

console.log(multiply(2, 'Max')); // console -> NaN; means that it was expecting a number but didn't get one.

// above problem can be solved by assigning types to the arguments;

function multiplySuper(value1: number, value2: number): number {
    return value1 * value2;
}

// causes error
// console.log(multiplySuper(2, 'max')); 

console.log(multiplySuper(2, 2)); // console -> 4


// ------------------------- function types -----------------------------
let myMultiply; 
myMultiply = sayHello();        // sayHello defined above
myMultiply();                   // console -> "hello"
myMultiply = multiply;          // multiply defined above
myMultiply();                   // nothing
console.log(myMultiply(2, 2));  // console -> 4

// this is a function type but not an actual function... defines what kind of functions this variable is able to be assigned to
let myMultipleFunctionType: (val1: number, val2: number) => number; 

myMultipleFunctionType = multiply; // argument names do not matter... only checks type




// ----------------------------- objects -----------------------------
// typescript infers that you are created a type object... userData is now a type
let userData = { 
    name: "Max", 
    age: 27
};

// while the types do match... the names do not match... so 
/*
userData = {
    a: "Hello", 
    b: 22
}
*/

// in functions the order is what matters... not the names... in objects, the names of the projects are what is important... not the order... 

// can assign object types as well... 
let userDataObject: { name: string, age: number } = {
    name: "max", 
    age: 27
}; 


// ------------------------------ complex object -------------------------

/*
variable named complex which is an object... contains two properties:
 - data property (array of numbers)
 - output property (function, argument is 'all' of type boolean which returns a number array)

*/
let complex: {data: number[], output: (all: boolean) => number[] } = {
    data: [100, 3.99, 10], 
    
    output: function(all: boolean): number[] {
        return this.data;
    }
};


// ---------------------- issue with complex types -----------------------

// storing object types/aliases is a good alternative to having to copy and paste arguments/parameters/object
let complexTwo: {data: number[], output: (all: boolean) => number[] } = {
    data: [100, 3.99, 10], 
    
    output: function(all: boolean): number[] {
        return this.data;
    }
};

// alias: 
type ComplexAlias = {data: number[], output: (all: boolean) => number[] };

let complexIssue: ComplexAlias = {
    data: [100, 3.99, 10], 
    
    output: function(all: boolean): number[] {
        return this.data;
    }
}

let complexIssueTwo: ComplexAlias = {
    data: [100, 3.99, 10], 
    
    output: function(all: boolean): number[] {
        return this.data;
    }
}


// ---------------------- 'in-between' solution of assigning types -----------------
// avoid using "any" by using union types...

let myRealRealAge: any = 27; 
myRealRealAge = "27"; 
myRealRealAge = true; // will not give an error... bad because I know that it needs to be a number or string

// using a union... can specify that it can be multiple types without using the type 'any' 
let myRealRealRealAge: number | string = 27; 
myRealRealRealAge = "27";
// myRealRealRealAge = true; // gives error


// ------------------------- checking for types at runtime --------------------
let finalValue = "A string"; 

// typeof requires that the type be placed into quotations... such as 'number', 'string'
if(typeof finalValue == "string"){
    console.log("it's a string!");
};


// ------------------------------ the "never" type ----------------------------
// datatype is inferred... the function never actually returns something... it does not return an error... common misconception
function neverReturns(): never {
    throw new Error('An error!'); 
}


// ------------------------------- nullable types -----------------------------
let canBeNull = 12; 
canBeNull = null; 

let canAlsoBeNull; // type is inferred as any... default value is undefined... true for all unitialized variables
canAlsoBeNull = null; // commonly used to 'clear' a value... can lead to problems if there is a non-nullable type or if the object is more complex and you're trying to access a property on the object.

// add "stringNullChecks" to tsconfig.json file... by default "false" 
// if set to true... line 154 will result in an error... variable of type number... cannot be assigned to value null. 
// helps to make sure that you do not accidentally assign null to a value which theoretically should only hold numbers... 
// can still assign things value of null by doing a union type... 

let canThisBeAny: number | null = 12; 

let important = null; // inferred to be type null... not type 'any' if "stringNullChecks" is set to true