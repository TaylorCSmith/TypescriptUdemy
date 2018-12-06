// within brackets... specify what you want to import
import { PI_ModuleExample, calculateCircumference } from "./circle"; // exclude .ts... typescript will automatically look for .ts extension
// import { calculateRectangle } from "./rectangle"; // no longer works after setting "calculateRectangle" as a default

import * as Circle from "./circle"; // retrieves all "exported" things from ./circle

// if you assign a "default" export... you can alias the default export by using the following code:  
import calc from "./rectangle"; 

console.log(PI_ModuleExample); 
console.log(calculateCircumference(5)); 
console.log(calc(5,3)); 

// ****************************************************** loading modules *********************************************************
// error "Only 'amd' and 'system' modules are supported alongside --outFile." if you try and use command "tsc --outFile app.js"
// need a module loader in order to properly use modules... if "module" is set to commonjs in tsconfig.json/compileroptions

// popular module loader is "SystemJS" https://github.com/systemjs/systemjs


// ************************************************ namespaces vs modules wrap-up *************************************************
/*

    Namespaces: 
        - Organize application with js objects
        - Can be split up over multiple files
        - No module loader required
        - dependencies get difficult to manage in bigger applications
    
    Modules: 
        - organize application with real modules
        - can be split up over multiple files
        - need a module loader as modules are not compatible with all browsers
        - explicit dependency declaration (clearly know which files have which dependencies... no need to worry about order of adding dependencies so on...)
            @ much more manageable

*/