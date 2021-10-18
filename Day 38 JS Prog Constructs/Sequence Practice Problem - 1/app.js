//Problem 1
// To get Single Digit Number

let a = Math.floor(Math.random()*10);
console.log(a);

//Problem 2 
// Get Dice Number between 1 to 6

let diceNum = Math.floor(Math.random()*6 + 1);
console.log(diceNum);

//Problem 3
// Add two Random Dice Number

let diceNum1 = Math.floor(Math.random()*6 + 1);
let diceNum2 = Math.floor(Math.random()*6 + 1);
let sum = diceNum1 + diceNum2;
console.log("Sum of two numbers is: "+ sum);

//Problem 4
//Read 5 Random 2 digit Numbers and 
// find their sum and average

let num1 = Math.floor(Math.random()*89 + 10);
let num2 = Math.floor(Math.random()*89 + 10);
let num3 = Math.floor(Math.random()*89 + 10);
let num4 = Math.floor(Math.random()*89 + 10);
let num5 = Math.floor(Math.random()*89 + 10);

console.log("Numbers are: "+ num1 + " "+num2 + " "+num3 + " "+num4 + " "+num5 + " ");

let sumOfNumbers = num1+num2+num3+num4+num5;
console.log("Sum of 5 Numbers is: "+ sumOfNumbers);
let avgOfNumbers = sumOfNumbers/5;
console.log("Average of Numbers is: "+ avgOfNumbers);
