// Working with arrays is one of the common task for any language.
// With arrays, data is stored in a structure similar to a list
// You can store different types of data un one array 
// The sintax for an an array is the next one, we should type a pair of
// square brackets

let myArray = [];

// As we can see this is an empty array, but we can declared already 
// populated with data

let iceCreamFlavors = ["chocolate", "Strawberry","Vanilla","Pistachio", "Rocky Road"];

// When we declarad an array every item od the array has a value
// We call it "index" for example the chocolate flavor has a value of 0
console.log (iceCreamFlavors[2]);

// We can leverage the index to change the value, like this:
iceCreamFlavors[4] = "Butter Pecan";
console.log(iceCreamFlavors)

// We can insert a new value at a given index like this:
iceCreamFlavors [5]= "Cookie Dough";

// To find out how many items are in an array, use the "lenght" property
console.log(iceCreamFlavors.length);

// *** LOOPS ***
// Loops allow us to perform repetitive or iterative tasks, and save a lot
// of time and code

// For loop -> it requires 3 parts to iterate:
// * Counter: A varaible that counts the number of iterations
// * Condition: Expression that make the loop stop when it's "False"
// * iteration-expression: Runs at the end of the loop to change the counter value

// Count to 10 with a for loop
for (let i = 0; i < 10; i++){
  console.log(i);
}

//While loop
// While loop only require a condition that will stop the loop when
// the condition becomes fals.
let x = 0;
while (x < 10){
  console.log(x);
  x++;
}

// A loop using an array
for (let u = 0; u < iceCreamFlavors.length; u++){
  console.log(iceCreamFlavors[u])
}
