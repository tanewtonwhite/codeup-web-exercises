//Break and Continue Exercise #2

function useOddNumber() {
    let oddNumber;

    do {
        oddNumber = prompt("Enter a odd number between 1 and 50");
        if(oddNumber >= 1 && oddNumber <= 50 && oddNumber % 2 !==0) {
            break;
        }
    } while(true);

    return oddNumber;
}

console.log(useOddNumber());

// //Exercise # 3
for (let i = 1; i >= 1 && i <= 50 ; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

