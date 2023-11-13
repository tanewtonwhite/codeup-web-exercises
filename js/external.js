console.log("Hello from external Javascript");

alert('Welcome to my Website!');

let favoriteColor = prompt('What is your favorite color?');
alert(`Great, ${favoriteColor} is my favorite color too.`);




 /*
Complete exercise 3 from the previous lesson, but write your code in

the external.js file instead of in the console.

    When the exercise asks you to use a number, instead use a prompt
   to ask the user for that number.
    Use an alert to show the results of each problem.
    Finally, commit the changes to your git repository, and push to GitHub.


    Exercise 3

Write some JavaScript code, that is, variables and operators, to describe the following scenarios.
 Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.

 You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days,
 they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
 Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
 they pay you a different rate per hour.
 Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment
 for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

    */



//problem 1
let costPerDay = prompt('How much does it cost per day and per movie to rent?');

 let theLittleMermaid = prompt('How many days will you be renting The little Mermaid Movie? ');
 theLittleMermaidCost = theLittleMermaid * costPerDay
 alert(`The cost to rent the Little Mermaid is ${theLittleMermaidCost} dollars.`);

 let brotherBear = prompt('How many days will you be renting Brother Bear?');
brotherBearCost = brotherBear * costPerDay
alert(`The cost to rent Brother Bear is ${brotherBearCost} dollars.`);

 let hercules = prompt('How many days will you be renting Hercules?');
herculesCost = hercules * costPerDay
/*NOTES

 you could also use Number(), parseInt, or multiply by 1, this will make js convert string to a number instead of having verbose code like in problem 2
ex. Number(prompt("How many days did you rent littlemermaid?")
ex. parseInt(prompt("How many days did you rent littlemermaid?")

*/

alert(`The cost to rent Hercules" is ${herculesCost} dollars.`);

 let totalCost = brotherBearCost + herculesCost + theLittleMermaidCost;
 alert(` The total cost to pay will be $ ${totalCost}!`);


//problem 2
googleRatePerHour = prompt('How much does Google pay you per hour?');
amazonRatePerHour = prompt('How much does Amazon pay you per hour?');
facebookRatePerHour = prompt('How much does Facebook pay you per hour?');

googleHoursWorked = prompt('How many hours did you work for Google?');
amazonHoursWorked = prompt('How many hours did you work for Amazon?');
facebookHoursWorked = prompt('How many hours did you work for Facebook?');


totalCompensation = googleRatePerHour * googleHoursWorked + amazonRatePerHour * amazonHoursWorked + facebookRatePerHour * facebookHoursWorked;
alert(`Your total compensation will be $ ${totalCompensation}!`);


