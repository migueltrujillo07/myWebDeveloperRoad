// A function is a block of code we can execute on demando
//
//  The syntax for a function looks like the following:

function nameOfFunction() {
  // Function definition/body
}

function displayGreeting(){
  console.log('Hello, world!')
}

// Whenever we want to call (or invoke) our function, we use the name of
// the function followed by ()

displayGreeting()

// Passing information to a function
function name (param, param2, param3){
  
}

function sayHello(name){
  const message = `hello, ${name}!`;
  console.log(message)
}

sayHello('Miguel');

//Default values

function SayingHello(name, salutation = 'hello'){
  console.log(`${salutation}`,`${name}`);
}

SayingHello('Mike')
SayingHello('Mike', 'hi')

// Return values 
// A return value is returned by the function, and can be stored in a variable
// just the same as we could store a literal values such as a string or number
// The "return" keyword expects a value or reference of what's being returned like so:

function createGreetingMessage(nomb){
  const message = `Hello, ${nomb}`;
  return message;
}

const greetingMessage = createGreetingMessage('Luis')

// Functions as parameters for functions

function displayDone(){
  console.log('3 seconds has elapsed')
}

//setTimeout(displayDone, 3000)
setTimeout(function(){
  console.log('2 seconds has elapsed')
}, 2000)

