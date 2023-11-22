let dog = 'Scooby';
let brother = 'Garcia';

const person = {
    middleName: 'Noel' ,
    lastNameHere: 'wright' ,
    //shorthand object property assignment
    dog,
    //old way of object assignment
    brother: brother ,
};
console.log(person);
person.firstName = 'Tiana';
person['sister'] = 'Chanaire';
console.log(person);

//accessing properties in an object
console.log(person.brother);
console.log(person['sister']);