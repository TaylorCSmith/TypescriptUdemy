// within brackets... specify what you want to import
import {PI_ModuleExample, calculateCircumference} from "./circle"; // exclude .ts... typescript will automatically look for .ts extension

console.log(PI_ModuleExample); 
console.log(calculateCircumference(5)); 

// ****************************************************** loading modules *********************************************************
// error "Only 'amd' and 'system' modules are supported alongside --outFile." if you try and use command "tsc --outFile app.js"
// need a module loader in order to properly use modules... if "module" is set to commonjs in tsconfig.json/compileroptions

// popular module loader is "SystemJS" https://github.com/systemjs/systemjs