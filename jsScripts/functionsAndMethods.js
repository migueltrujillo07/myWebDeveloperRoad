// A function is a block of code we can execute on demando
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

