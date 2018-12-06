// **************************************** the basics about interfaces ***************************************
namespace Module7WithoutContract {

    function greet(person: any) {
        console.log('hello, ' +  person.name); 
    }
    
    const person = {
        name: "Max",        // if changed to "firstName"... name of course will be undefined...
        age: 27
    }
    
    greet(person); 
    
    
}

// interface is basically a contract signed by an object that "guarantees" that you have a certain property function or w/e

// **************************************** interfaces and properties ****************************************
namespace Module7WithContract {
    function greet( person: {name: string} ) {
        console.log("hello, " + person.name);
    }
    
    function changeName(person: {name: string}) {
        person.name = "Anna"; 
    }
    
    const person = {
        name: "Max",
        age: 27
    };


    greet(person); 
    changeName(person); 
    greet(person); 

    // annoying having to change object as parameter if defined as person: { name: string }... use interface
    interface NamedPerson {
        firstName: string; 
    }

    function greetWithInterface ( person: NamedPerson ) {
        console.log("hey, I have an error, " + person.firstName); 
        // console.log("hello, " + person.name);  // ts error (name does not exist on type "NamedPerson")
    }

    // instead of at compile time... you're now notified in the IDE that the 'contract' is not fulfilled... helps to make sure that all required properties are satisfied
    
    const personFirstName = {
        firstName: "jim", 
        age: 8439
    }; 

    
    // greetWithInterface({firstName: "Jim", age: 83}); // results in error... even though we are passing a person object... greetWithInterface expects one of type NamedPerson

    greetWithInterface(personFirstName); // does not result in an error even though "age" is still passed
    
    // special checking that ts does when object literals are being passed... 
    
    // important to create interfaces as explicit as possible by adding optional arguements

    interface NamedPersonOptional {
        firstName: string, 
        age?: number
    }

    function greetWithOptional (person: NamedPersonOptional) {
        console.log("hey, i do not have an error, " + person.firstName); 
    }

    greetWithOptional({ firstName: "jim", age: 101093 }); // no error!
}

namespace SpecialNotationForUnknownArguementNames { 
    interface NamedPerson {
        firstName: string;
        age?: number; // optional property
        [propName: string]: any; // unknown key as well as any type allowed... not an array at all... just a flexible key name
    }

    const person = {
        firstName: "jim", 
        hobbies: ["cooking, sports"]
    }; 

    function greet (person: NamedPerson) {
        console.log(person); 
    }

    greet(person); // no errors because although hobbies is not 
}


// **************************************** interfaces and methods ****************************************
namespace InterfacesAndMethods {
    interface NamedPerson {
        firstName: string; 
        age?: number; 
        [propName: string]: any; 
        greet(lastName: string): void; 
    }

    const person: NamedPerson = {
        firstName: "jim",
        hobbies: ["cooking", "sports"],
        greet(lastName: string) {
            console.log("hi, i am " + this.firstName + " " + lastName); 
        }
    }

    person.greet("anything"); // object now has a method inside of it as well

}

// ************************************ using interfaces with classes *************************************
namespace InterfacesAndClasses {

    interface NamedPerson {
        firstName: string; 
        age?: number; 
        [propName: string]: any; 
        greet(lastName: string): void; 
    }

    const person: NamedPerson = {
        firstName: "jim",
        hobbies: ["cooking", "sports"],
        greet(lastName: string) {
            console.log("hi, i am " + this.firstName + " " + lastName); 
        }
    }

    person.greet("anything"); // object now has a method inside of it as well

    class Person implements NamedPerson { 
        firstName: string; 
        middleName: string; // just like interfaces in C#... can add and get no errors as long as everything from the interface is implemented
        greet(lastName: string): void {
            console.log("hi, i am " + this.firstName + " " + lastName); 
        }; 
    }

    const myPerson = new Person(); 
    myPerson.firstName = "jimmy"; 
    myPerson.middleName = "tim"; 
    myPerson.greet("anything"); 
}


// ************************************ interfaces with function types **************************************
namespace InterfacesAndMethods {
    interface NamedPerson {
        firstName: string; 
        age?: number; 
        [propName: string]: any; 
        greet(lastName: string): void; 
    }

    const person: NamedPerson = {
        firstName: "jim",
        hobbies: ["cooking", "sports"],
        greet(lastName: string) {
            console.log("hi, i am " + this.firstName + " " + lastName); 
        }
    }

    person.greet("anything"); // object now has a method inside of it as well

}

// ************************************ using interfaces with classes *************************************
namespace InterfacesAndFunctionTypes {

    interface DoubleValueFunc {
        (numberOne: number, numberTwo: number): number; // says... "whatever function implements this interface... must be a function of type number..."
    }

    let myDoubleFunction: DoubleValueFunc; 
    
    myDoubleFunction = function(numberOne: number, valueTwo: number) {  // name of arguements can be anything as long as the types match
        return (numberOne + valueTwo) * 2; 
    }

    console.log(myDoubleFunction(4,10)); 
}


// *************************************** interface inheritance ******************************************

namespace InterfaceInheritance { 

    interface NamedPerson {
        firstName: string; 
        age?: number; 
        [propName: string]: any; 
        greet(lastName: string): void; 
    };

    interface AgedPerson extends NamedPerson {
        age: number;            // overrides optionality of age... age now required
    };

    const oldPerson: AgedPerson = {
        age: 27,
        firstName: "Max",       // required from base interface
        greet(lastName: string) {   // required from base interface
            console.log("hello"); 
        }
    };

    // requirements add up from interfaces

    console.log(oldPerson); 

}


// ********************************** what happens when interfaces get compiled? ***************************************

/*
    Interfaces are not compiled at all... 
        - they are just there to give you compile time errors to help with development



*/