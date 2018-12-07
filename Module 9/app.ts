// ***************************************** creating a class decorator **********************************
namespace BasicNamespace {

    export function logged(constructorFn: Function) {
        console.log(constructorFn); 
    };

    @logged
    class Person {
        constructor () {
            console.log("Hi!"); 
        }
    }

}



// ******************************************** decorator factory *****************************************
namespace DecoratorFactory {
    import utility = BasicNamespace; 
    
    function logged(constructorFn: Function) {
        console.log(constructorFn); 
    };

    // passing true will return the value of 'logged' while passing false will not... 
    export function logging(value: boolean) {
        return value? utility.logged : null; 
    }
    
    // @logging(true)
    class Car {
        
    }
}


// *************************************** creating a useful decorator ************************************
namespace UsefulDecorators {
    
    // each object instantiated by a class with the printable decorator... will automatically receive the print method
    function print(constructorFn: Function) {
        constructorFn.prototype.print = function() {
            console.log(this); 
        }
    }

    function printable(value: boolean) {
        return value? print : null; 
    }

    @print
    class Plant {
        name = "Green Plant";
    }

    const plant = new Plant(); 
    (<any>plant).print();           // must cast as <any> datatype or ts will not recognize the print method
}


// *************************************** using multiple decorators *************************************
namespace UsingMultipleDecorators {


    /*
    import decoratorFactory = DecoratorFactory; 

    function print(constructorFn: Function) {
        constructorFn.prototype.print = function() {
            console.log(this); 
        }
    }

    function printable(value: boolean) {
        return value? print : null; 
    }

    @decoratorFactory.logging(true)
    @printable(true)
    class Plant {
        name = "Green Plant";
    }

    const plant = new Plant(); 
    (<any>plant).print();
    */
}

// ******************************************* a first summary *******************************************

// decoractor factories have to return a function which can actually be used as a decorator as well



// ***************************************** method decorators *******************************************
namespace MethodDecorators {

    function editable(value: boolean) {
        return function(target: any, propName: string, descriptor: PropertyDescriptor) {
            descriptor.writable = value;
        }
    }

    class Project {
        projectName: string;

        constructor(name: string) {
            this.projectName = name; 
        }
        
        @editable(false)
        calcBudget() {
            console.log(1000); 
        }
    }

    const project = new Project("Super project"); 
    project.calcBudget(); // console => 1000

    project.calcBudget = function() {   // this overwriting attempt does not work... 
        console.log(2000); 
    }

    project.calcBudget(); // console => 1000
}


// ***************************************** property decorators *******************************************
namespace PropertyDecorator {

    // method decorator
    function editable(value: boolean) {
        return function(target: any, propName: string, descriptor: PropertyDescriptor) {
            descriptor.writable = value;
        }
    }

    // overwritable decorator
    function overwritable(value: boolean) {
        return function(target: any, propName: string): any {
                const newDescriptor: PropertyDescriptor = {
                    writable: value
                };
                return newDescriptor; 
        }
    }


    class Project {

        @overwritable(false)
        projectName: string;

        constructor(name: string) {
            this.projectName = name; 
        }
        
        @editable(false)
        calcBudget() {
            console.log(1000); 
        }
    }

    const project = new Project("Super project"); 
    project.calcBudget(); // console => 1000

    project.calcBudget = function() {   // this overwriting attempt does not work... 
        console.log(2000); 
    }

    project.calcBudget(); // console => 1000
}


// ***************************************** parameter decorators *******************************************
namespace ParameterDecorators {

    function printInfo(target: any, methodName: string, paramIndex: number) {
        console.log("target: " + target); 
        console.log("methodName: " + methodName); 
        console.log("paramIndex" + paramIndex); 
    }

    class Course {
        name: string; 
        
        constructor(name: string) {
            this.name = name; 
        }

        printStudentNumbers(mode: string, @printInfo printAll: boolean) {
            if(printAll) {
                console.log(10000); 
            } else {
                console.log(2000); 
            }
        }
    }



    const course = new Course("embedded systems"); 
    course.printStudentNumbers("anything", true); 
    course.printStudentNumbers("something", false); 

}