//"use strict";
//
// /**
//  * TODO:
//  * Create a function called 'sayHello' that takes a parameter 'name'.
//  * When called, the function should return a message that says hello to the passed in name.
//  *
//  * Example
//  * > sayHello("codeup") // returns "Hello, codeup!"
//  */
//attempt at using arrow function
//const sayHello = (name) => console.log(`Hello ${name}`);
function sayHello (name) {
    let greeting = `Hello ${name}`;
    console.log(greeting);
    return greeting;
}

//
// /**
//  * TODO:
//  * Call the function 'sayHello' and pass your name as a string literal argument.
//  * Store the result of the function call in a variable named 'helloMessage'.
//  *
//  * console.log 'helloMessage' to check your work
//  */

//

sayHello('Tiana');
let helloMessage = sayHello('Tiana') ;
console.log(helloMessage);

//
// /**
//  * TODO:
//  * Store your name as a string in a variable named 'myName', and pass that
//  * variable to the 'sayHello' function. You should see the same output in the
//  * console.
//  */
//
// // Don't modify the following line, it generates a random number between 1 and 3
// // and stores it in a variable named random
 const random = Math.floor((Math.random() * 3) + 1);

let myName = 'Alexis';
sayHello(myName);
//
// /**
//  * TODO:
//  * Create a function called 'isTwo' that takes a number as a parameter.
//  * The function should return a boolean value based on whether or not the passed
//  * number is the number 2.

function isTwo (number) {
    return number === 2;
}
console.log(isTwo(5));
//  *
//  * Example
//  * > isTwo(1) // returns false
//  * > isTwo(2) // returns true
//  * > isTwo(3) // returns false
//  *
//  * Call the function 'isTwo' passing the variable 'random' as a argument.
//  *
//  * console.log *outside of the function* to check your work (you should see a
//  * different result everytime you refresh the page if you are using the random
//  * number)
//  */

console.log(isTwo(random));
//
// /**
//  * TODO:
//  * Create a function named 'calculateTip' to calculate a tip on a bill at a
//  * restaurant. The function should accept a tip percentage and the total of the
//  * bill, and return the amount to tip
//  *
//  * Examples:
//  * > calculateTip(0.20, 20) // returns 4
//  * > calculateTip(0.25, 25.50) // returns 6.375
//  * > calculateTip(0.15, 33.42) // returns 5.013
//  */

function calculateTip (tipPercentage, bill) {
    let tip = bill * tipPercentage;
    let billPrice = tip + bill;


    console.log(`The total bill will be $ ${billPrice.toFixed(2)}`);
    console.log(`The amount to tip is $ ${tip.toFixed(2)}`);
    return tip.toFixed(2);
}
console.log(calculateTip(0.15, 33.42));
//
// /**
//  * TODO:
//  * Use prompt and alert in combination with your calculateTip function to
//  * prompt the user for the bill total and a percentage they would like to tip,
//  * then display the dollar amount they should tip
//  */


let customerBillTotal = prompt('How much is the bill total?');
let customerTipAmount = prompt('What is the percentage that you would like to tip?');
let tipAmount = customerBillTotal * customerTipAmount;
//let tipAmountShort = tipAmount.toFixed(2);

alert(`The amount to tip will be $ ${tipAmount.toFixed(2)}`);


//
// /**
//  * TODO:
//  * Create a function named `applyDiscount`. This function should accept a price
//  * (before a discount is applied), and a discount percentage (a number between 0
//  * and 1). It should return the result of applying the discount to the original
//  * price.
//  *
//  * Example:
//  * > let originalPrice = 100;
//  * > let discountPercent = .2; // 20%
//  * > applyDiscount(originalPrice, discountPercent) // 80
//  *
//  * > applyDiscount(45.99, 0.12) // 40.4712
//  */

function applyDiscount (priceBeforeDiscount, discountPercentage) {
    let price = priceBeforeDiscount - (priceBeforeDiscount * discountPercentage);
    return price.toFixed(2);
}
console.log(applyDiscount(100, 0.2));
