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

// jim only expects one parameter as a default/overwrite is already set for name
const tim = new Jim("jim");




// merge conflicts start here during next pull/push


























// merge conflicts end here





// ****************************************** private constructors *****************************************
/*
// singleton class... when you only want one instance during runtime.
class OnlyOne {
    private static instance: OnlyOne; 

    // the class is forced to only be used as a singleton
    private constructor(public name: string) {} // shortcut to initialize a public property "name"

    static getInstance() {
        if(!OnlyOne.instance) { // checks to see if an instance has been created
            OnlyOne.instance = new OnlyOne('The only one'); // new instance created
        }
        return OnlyOne.instance; // if already created... return current instance
    }
}

// let wrong = new OnlyOne('the only one'); // error that OnlyOne is private and only accessible within the class declaration
let right = OnlyOne.getInstance(); 
console.log(right.name); 

right.name = "something else"; // allowable since name is a public property

*/

// ****************************************** private constructors *****************************************
// singleton class... when you only want one instance during runtime.
class OnlyOne {
    private static instance: OnlyOne; 

    // the class is forced to only be used as a singleton
    // adding the "readonly" keyword is a shortcut of making a "getter" but not a "setter" for the name property 
    private constructor(public readonly name: string) {} // shortcut to initialize a public property "name"

    static getInstance() {
        if(!OnlyOne.instance) { // checks to see if an instance has been created
            OnlyOne.instance = new OnlyOne('The only one'); // new instance created
        }
        return OnlyOne.instance; // if already created... return current instance
    }
}

// let wrong = new OnlyOne('the only one'); // error that OnlyOne is private and only accessible within the class declaration
let right = OnlyOne.getInstance(); 
console.log(right.name); 

// right.name = "something else"; // not allowable since name is a readonly property

// equivalent of using "readonly" but with name included in the constructor... not using the shortcut displayed above: 
class OnlyOneReadOnlyExample { 
    private static instance: OnlyOneReadOnlyExample; 
    public readonly name: string; 

    private constructor (name: string) {
        this.name = name; 
    }

    static getInstance() {
        if(!OnlyOneReadOnlyExample.instance) {
            OnlyOneReadOnlyExample.instance = new OnlyOneReadOnlyExample('the only only one'); 
        }
        return OnlyOneReadOnlyExample.instance;
    }
}


// ****************************************** module summary *****************************************




