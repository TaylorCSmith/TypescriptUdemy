// ********************************* creating classes and properties ***********************************
// using ES6
class Person {
    
}

// using TS features...
/*
class PersonTS {
    // can prepend name with access modifier... default is "public"
    name: string;   // no need to use "this" keyword... 
    private type: string; 
    protected age: number; 
    // access modifiers act like modifiers in C#
    
    // no need for constructor can include though. 
    constructor(name: string, public username: string) { // will create a username property in class as well... shortcut for creating a property
        this.name = name;
    }
}

const person = new PersonTS("Taylor", "taylor"); 
console.log(person); // console => Person{username: "taylor", name: "Taylor"}
*/

// ********************************* class methods and access modifiers ***********************************
class PersonTS {
    // can prepend name with access modifier... default is "public"
    name: string;   // no need to use "this" keyword... 
    private type: string; 
    protected age: number = 25; 
    // access modifiers act like modifiers in C#
    
    // no need for constructor can include though. 
    constructor(name: string, public username: string) { // will create a username property in class as well... shortcut for creating a property
        this.name = name;
    }

    printAge() {
        console.log(this.age);
        this.setType("Old Guy");  
    }

    private setType(type: string) { // since set to "private", only accessible within the object. 
        this.type = type;
        console.log(this.type); 
    }
}

const person = new PersonTS("taylor", "Taylor");
person.printAge(); 
// person.setType("Rad Dude"); // will result in an error as setType is no longer accessible outside of the class definition


// ********************************************* inheritance ********************************************

class Taylor extends PersonTS {
    name = "Taylor";
};

// important to note that "Taylor" will still expect two parameters as it is an extension of the PersonTS class...
const taylor = new Taylor("Max", "taylor"); 
console.log(taylor); // name will still be Taylor even though I passed it "Max"... it is initially set to "Max" but then overriden by "Taylor" in the Taylor class
// content in the "extends" always overwrites what is in the superclass... 

// ************************************** inheritance and constructors ***********************************
class Jim extends PersonTS {
    // name = "Jim";
    constructor (username: string){
        super("Jim", username); // must include "super" to indicate that you are overriding part of the superclass 
    }
}

// jim only expects one parameter as a default/overwrite is already set for name
const jim = new Jim("jim"); 

// ****************************************** inheritance wrap-up *****************************************

class Tim extends PersonTS {
    // name = "Jim";
    constructor (username: string){
        super("Jim", username);
        this.age = 55; // since age is only protected in PersonTS... all children have access to it... "type" however is not accessible
    }
}

// Jim only expects one parameter as a default/overwrite is already set for name
const tim = new Jim("jim");

// important to remember that everything is inherited from the base class except for private methods/properties
// can rewrite or extend each...


// ****************************************** getters and setters *****************************************
class Plant {
    private _species: string = "Default"; // normally private properties not prepended with '_'... but controlled access being added...

    get species() {
        return this._species; 
    }

    set species(value: string) {    // use for validation in projects...? or better way? 
        if (value.length > 3) {
            this._species = value; 
        } else {
            this._species = "Default";
        }
    }
}

let plant = new Plant(); 

console.log(plant.species); // console => Default

plant.species = "AB";
console.log(plant.species); // console => Default

plant.species = "Green Plant"; 
console.log(plant.species); // console => Green Plant


// ************************* static properties and methods *********************
class Helpers {
    static PI: number = 3.14; // no need to instantiate "Helpers" class... can also use with method... similar to other languages...
    static calcCircumference(diameter: number): number {
        return this.PI * diameter; 
    }
}

console.log(2 * Helpers.PI); // console => 3.14
console.log(Helpers.calcCircumference(8)); // console => 25.12


// ****************************** abstract classes *****************************
// must always be inherited from... required to be extended
// why? class has no need to be instansiated but only provides functionality that other classes need. 
abstract class Project { 
    projectName: string = "Default"; 
    budget: number; 

    // needs to be overwritten
    abstract changeName(name: string): void; // no curly braces... only define how the function should look and return... not any logic... 

    // does not need to be overwritten
    calcBudget() {
        return this.budget * 2; 
    }
}


