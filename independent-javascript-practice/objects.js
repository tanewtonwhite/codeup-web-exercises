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

//array with object and numbers
let arrayObject = [1,2,3,4,{animal:'dog' , residence:'apartment' , food:'turkey'}];
console.log(typeof arrayObject);

