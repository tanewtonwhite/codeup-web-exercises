//Practice using the str.split() method

//Using a period as the separator and 1 as the limit
let string = 'Welcome to your first week at Codeup. Enjoy your time.'
let output = string.split('.', 1 );

console.log(output);

//Example without separator
let string2 = 'Welcome to your first week at Codeup. Enjoy your time.'
let output2 = string2.split('',  );

console.log(output2);

///Example without limit
let string3 = 'Welcome to your first week at Codeup. Enjoy your time.'
let output3 = string3.split('.');

console.log(output3);


//Using a function with split() method
function split() {
    let message = ('This is a string. This string will practice the split method. This sentence is the last line.')
    let methodSplit = message.split('.', 3)
    return methodSplit
}
console.log(split())