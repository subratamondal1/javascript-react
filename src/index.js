// We can declare variables in javascript using:
// 1. var: keyword declares a variable globally or locally to the function where it is defined. It can be redeclared and reassigned.
// 2. let: keyword declares a variable locally to the block where it is defined. It can be reassigned, but not redeclared.
// 3. const: keyword declares a constant variable locally to the block where it is defined. It cannot be reassigned or redeclared.
// 4. Automatic without using any keyword (Not Recommended): declares a variable globally without using any keyword. It can be redeclared and reassigned.

/*
var globalVariable = "India"
console.log( globalVariable )

let favouriteNumber = 3
console.log( favouriteNumber )

const nonModifiableVariable = 500
console.log( nonModifiableVariable )

withoutAnyKeword = "Automatic Variable Defining (Not Recommended)"
console.log( withoutAnyKeword )
*/

// Numbers in Javascript
/*
let a = 5.5
let b = 4.5
let c = 2

console.log(typeof a)
console.log(typeof b)
console.log( typeof c )
console.log((a+b)/c)
*/

// Strings in Javascript
/*
let greet = "Hello World"
console.log( greet, typeof ( greet ) )

let myName = "Subrata Mondal"
console.log("Hello " + myName)
*/

// Boolean
/*
let a = true
let b = false

console.log( typeof ( a ), typeof ( b ) )
console.log(true & false)
console.log( true && false )
console.log(true || false)
*/

// Normal Functions
/*
function sayHi ()
{
    console.log("Hello")
}

sayHi()

function greet ( name )
{
    console.log(name)
}

greet( "Subrata Mondal" )
*/

// Passing functions as arguments
/*
function applyFunction ( func, num )
{
    return func(num)
}

function square ( x )
{
    return x * x
}

function double ( x )
{
    return x+x
}

console.log(applyFunction(square, 5))
console.log( applyFunction( double, 5 ) )

function printVariable ( func, name )
{
    return func(name)
}

function greet ( name )
{
    return "Hello " + name
}

console.log( printVariable( greet, "Subrata Mondal" ) )
*/

// Arrow Functions
/*
let sum1 = function ( a, b )
{
    return a+b
}

console.log( sum1( 1, 2 ) )

let sum2 = ( a, b ) => {
    return a + b
}

console.log( sum2( 1, 2 ) )

console.log( sum1( 1, 2 ) === sum2( 1, 2 ) )
*/

// Closures

/*
// Define a in the Function to create a counter object
function createCounter() {
    // Define a private variable to store the count
    let count = 0;
    // Define a private function to increment the count
    function increment() {
      count++;
    }
    // Define a public function to get the current count
    function getCount() {
      return count;
    }
    // Return an object with the public function
    return {
      increment: increment,
      getCount: getCount
    };
  }
  
  // Create a counter object using the createCounter function
  let counter = createCounter();
  
  // Call the increment method of the counter object
  counter.increment();
  
  // Call the getCount method of the counter object
  console.log(counter.getCount()); // 1
  
  // Try to access the private variable count
  console.log(counter.count); // undefined
  
  // Try to access the private function increment
  console.log(counter.increment); // [Function: increment]  
  
*/




