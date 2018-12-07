// **************************************** Generics; why and what? ***************************************

namespace GenericIntroduction {

    export function echo(data: any) {  // sort of generic because of "any" datatype
        return data; 
    }

    console.log(echo("jim")); 
    console.log(echo(27).length); // problem is that there is no compilation error because echo expects an "any" datatype when in reality... a number doesn't have a "length" property and will result in "undefined"
    console.log(echo({ name: "jim", age: 32432 })); 
}


// **************************************** generic functions ***************************************

namespace GenericFunctions {
    // the <T> tells typescript that it is a generic function... 
    export function betterEcho<T>(data: T) { // T is now the datatype
        return data;
    }

    console.log(betterEcho("jim").length); 
    // console.log(betterEcho(27).length); // gives you an error which is preferrable
    console.log(betterEcho<string>("tim")); // can specify type when calling a generic function
    // console.log(betterEcho<number>("tim")); // will also give you an error... which is preferrable than compiling and then finding out it is wrong...
    console.log(betterEcho({ name: "tim", age: 2343 })); 
}


// **************************************** built in generics ***************************************
namespace BuiltInGenerics {
    const testResults: Array<number> = [ 1.94, 2.33 ]; // arrays are actually a built in type
    testResults.push(-2.99); 
    // testResults.push('sadfasd'); // support from compiler to tell you that you're inserting the wrong datatype into the array

    console.log(testResults); 
}


// ******************************************** arrays **********************************************
namespace Arrays {
    function printAll<T>(args: T[]) {
        args.forEach((element) => console.log(element)); 
    }

    printAll<string>(["Apple", "Banana"]); 
}


// *************************************** generic types ********************************************
namespace GenericTypes {
    import generic = GenericIntroduction; 
    import genericFunc = GenericFunctions;

    const echoTwo: <T>(data: T) => T = generic.echo; 
    const echoThree: <T>(data: T) => T = genericFunc.betterEcho; 

    console.log(echoTwo("dafdas")); 
    console.log(echoThree("dsafdsafds")); 
}


// *************************************** generic class ********************************************
namespace NonGenericClass {

    class SimpleMath {
        baseValue; 
        multiplyValue; 

        calculate() {
            return this.baseValue * this.multiplyValue; 
        }
    }

    const simpleMath = new SimpleMath(); 
    simpleMath.baseValue = 10; 
    simpleMath.multiplyValue = 243; 

    console.log(simpleMath.calculate()); 

}

namespace GenericClass {
    class SimpleMath <T> {
        baseValue: T;
        multiplyValue: T; 

        calculate(): number {
            return +this.baseValue * +this.multiplyValue; // '+' sign prepended to variable name means to cast as a number
        }
    }

    const simpleMath = new SimpleMath(); 
    simpleMath.baseValue = 10; 
    simpleMath.multiplyValue = 20; 
    console.log(simpleMath.calculate()); 
}


// ******************************************** constraints ************************************************
namespace Constraints {

    class SimpleMath <T extends number | string> {  // "extend" applies constraints to the types of types allowed to be passed
        baseValue: T;
        multiplyValue: T; 

        calculate(): number {
            return +this.baseValue * +this.multiplyValue;   // '+' sign prepended to variable name means to cast as a number
        }
    }

    const simpleMath = new SimpleMath(); 
    simpleMath.baseValue = "dsafd"; 
    
    // simpleMath.baseValue = false; // will give you an error since SimpleMath extends number | string... error in IDE not compiler
    simpleMath.baseValue = 10; 
    simpleMath.multiplyValue = 20; 
    console.log(simpleMath.calculate()); 
}


// ********************************** using more than one generic type *************************************
namespace MultipleGenericTypes {

    class SimpleMath <T extends U, U extends number | string> {   // T extends U means that both must be of the same type
        baseValue: T;
        multiplyValue: U; 

        calculate(): number {
            return +this.baseValue * +this.multiplyValue;   // '+' sign prepended to variable name means to cast as a number
        }
    }

    class WeirdMath <T extends number | string, G extends number | string> { // many different ways of organizing the generics to condense what would be long logic in js
        baseBalue: T; 
        multiplyValue: G; 

        calculate(): number {
            return +this.baseBalue * +this.multiplyValue;
        }
    }

    const simpleMath = new SimpleMath(); 
    simpleMath.baseValue = "dsafd"; 
    
    // simpleMath.baseValue = false; // will give you an error since SimpleMath extends number | string... error in IDE not compiler
    simpleMath.baseValue = 10; 
    simpleMath.multiplyValue = 20; 
    console.log(simpleMath.calculate()); 
}

