//console.log('inside iterating.js')
//(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    let names = ['cindy', 'carol', 'tom', 'jack'];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    //using spread operator, not sure if correct
//console.log(...names)

// individual console.log statements printing array names
console.log(names[0])
console.log(names[1])
console.log(names[2])
console.log(names[3])

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
//using for loop to access each index
for (let i =0; i < names.length ;i++) {
    console.log(names[i])
}

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    console.log('For each loop below');
names.forEach(function (name) {
    console.log(name);
});
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
//})();
let array = [1, 2, 3, 4, 5];
function firstItem (array) {
    return array;
}
console.log(firstItem(array[0]));

function secondItem (array) {
    return array;
}
console.log(secondItem(array[1]));

function lastItem (array) {
    return array;
}
console.log(lastItem(array.length));