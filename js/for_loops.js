//For Loops Exercise 11/16/2023
//Exercise #2 ForLoops
function showMultiplicationTable(number) {
    for (let i = 1; i <11; i++) {
    console.log(`${number} X ${i} = ${number * i}`);
}}
showMultiplicationTable(7)

//Exercise #3 For Loops*********review

//when generating numbers it is best to save them to a variable to use them later
console.log('exercise 3 starts here')
for(let i = Math.floor(Math.random() * 200) + 20;(i >=20 && i <=200); i++)
    if (i % 2 === 0) {
        console.log(`${i} is a even number`)
    } else {
        console.log(`${i} is a odd number`)
    }
//Math.floor(Math.random() * 200) + 20;

//for (let i = )


//Exercise #4 For Loops
for(let i = 1; i >i<10 ;i++) {
    let newI = i.toString()
    console.log(newI.repeat(i));
}

//Exercise #5 For Loops
for (let i = 100; i >=5  ; i-=5) {
    console.log(`${i}`);
    if (i === 0) {
        break;
    }
}



