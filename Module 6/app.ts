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

console.log(MyMath.calculateRectangle(10, 20));
console.log(MyMath.calculateCircumference(3)); 


// ************************************* namespaces and multiple files *****************************
// if you have separate files for namespaces which contain a lot of content... you can just reference every individual file in your html, bundle at compile time, or use imports... 

// method one bundle at compile time: 
// can bundle all of the js compiled ts files into one js file using: 
// command "tsc --outFile <name of file to create> <name of files to bundle>"


// method two: imports 
///<reference path="circleMath.ts" />
///<reference path="rectangleMath.ts" />

// can now compile by just using tsc again... still need to use --outfile command option and specify which file you want to group into

// ******************************************* introduction **************************************
















// ******************************************* introduction **************************************















// ******************************************* introduction **************************************













// ******************************************* introduction **************************************