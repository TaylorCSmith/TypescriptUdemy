// ******************************************* introduction **************************************
/*
    modules and namespaces... 
*/









// ************************************* introduction to namespaces *****************************
// difference between namespaces and modules...

// namespaces act like javascript objects... prevents pollution of the global scope
/*
namespace MyMath{
    const PI = 3.14; 
    
    export function calculateCircumference(diameter: number): number {              // export keyword allows the function to be used outside of the namespace
        return diameter * PI;
    }
    
    export function calculateRectangle(width: number, length: number): number {
        return width * length; 
    }
}; 
*/
const PI = 2.99; 
console.log(PI); // console => 2.99... PI = 3.14 is only within the MyMath namespace... 

/*
console.log(MyMath.calculateRectangle(10, 20));
console.log(MyMath.calculateCircumference(3)); 
*/

// ************************************* namespaces and multiple files *****************************
// if you have separate files for namespaces which contain a lot of content... you can just reference every individual file in your html

// method one bundle at compile time: 
// can bundle all of the js compiled ts files into one js file using: 
// command "tsc --outFile <name of file to create> <name of files to bundle>"


// method two: imports // files added by order you type them
///<reference path="circleMath.ts" />
///<reference path="rectangleMath.ts" />

// can now compile by just using tsc again... still need to use --outfile command option and specify which file you want to group into

// ******************************************* More on namespaces **************************************
// can nest namespaces...
namespace MyMathTwo {
    export namespace Circle {
        const PItwo: number = 3.14; 
    }
}

// can import namespaces... 
/*
import math = MyMath;

console.log(math.calculateCircumference(5)); 
console.log(math.calculateRectangle(4,3)); 
*/
/*
So that's just some advanced techniques on name spaces but that is in general how you use namespace

is very important to make sure to bundle them into one single file or import all the files here with

script X and also make sure to add the right order of imports here in your main file or manually add

all the files with the TSC command here when compiling it.

But always make sure that you're not forgetting unnecessary imports here.
*/


// *************************************** limitations of namespaces **********************************
// namespaces are not very declarative of what they need... hard to see which files have what dependencies... 
// TS namespaces are better for smaller applications as a result of the above







// *********************************************** Modules ********************************************

// refer to math_modulesExample folder













// ******************************************* introduction **************************************













// ******************************************* introduction **************************************