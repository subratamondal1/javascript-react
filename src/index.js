// We can declare variables in javascript using:
// 1. var: keyword declares a variable globally or locally to the function where it is defined. It can be redeclared and reassigned.
// 2. let: keyword declares a variable locally to the block where it is defined. It can be reassigned, but not redeclared.
// 3. const: keyword declares a constant variable locally to the block where it is defined. It cannot be reassigned or redeclared.
// 4. Automatic without using any keyword (Not Recommended): declares a variable globally without using any keyword. It can be redeclared and reassigned.

var globalVariable = "India"
console.log( globalVariable )

let favouriteNumber = 3
console.log( favouriteNumber )

const nonModifiableVariable = 500
console.log( nonModifiableVariable )

withoutAnyKeword = "Automatic Variable Defining (Not Recommended)"
console.log(withoutAnyKeword)