//While loops Exercise #2
//initialization
let i = 2;
//condition
while (i <= 65536) {
    console.log(`${i}`);
    //update of i to prevent infinite loop
    i*=2;
}

//Do While Loop Exercise Exercise #1
let allCones = Math.floor(Math.random() * 50) + 50;
//let t = allCones;
do {
let conesPurchased = Math.floor(Math.random() * 5) + 1;
    console.log(`starting with ${allCones} cones`)
    if (allCones >= conesPurchased) {
        console.log(`${conesPurchased} sold. I have ${allCones-conesPurchased} left`)
        break;
    } else if (conesPurchased > allCones) {
        console.log(`Cannot sell you ${conesPurchased} I only have ${allCones} left`)
        break;
    } else {
        console.log('Yay I sold them all!')
        break;

    allCones - conesPurchased;
    console.log(` I have ${allCones} cones. `)
    }
} while (allCones >= conesPurchased);