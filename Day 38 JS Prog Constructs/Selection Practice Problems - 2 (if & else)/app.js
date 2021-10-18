//Selection Practice Problems using if and else 

//Problem 1 Read 5 Random 3 digit numbers and find the max and min

let num1 = Math.floor(Math.random() * 899 + 10);
let num2 = Math.floor(Math.random() * 899 + 10);
let num3 = Math.floor(Math.random() * 899 + 10);
let num4 = Math.floor(Math.random() * 899 + 10);
let num5 = Math.floor(Math.random() * 899 + 10);
let numArray = [num1, num2, num3, num4, num5];
console.log(numArray);
let maxNum = Math.max(...numArray);
let minNum = Math.min(...numArray);
console.log("Maximum among 5 numbers is: " + maxNum);
console.log("Minimum among 5 numbers is: " + minNum);

//Problem 2 Day of Month should fall in Particular Range
let month = 4;
let date = 13
if ((month <= 6 && date <= 20) && (month >= 3 && date <= 20)) {
    console.log(month + " " + date + " True");
}
else {
    console.log(month + " " + date + " False");
}

//Problem 3 Leap Year Problem

console.log("Check whether given Year is Leap Year or Not: ");
console.log("Enter a 4 digit Number: ");
var year = 2001;
if (year % 400 == 0) {
    console.log(year + " Year is a Leap Year");
}
else if (year % 100 == 0) {
    console.log(year + " Year is not a Leap Year");
}
else if (year % 4 == 0) {
    console.log(year + " Year is a Leap Year");
}
else {
    console.log(year + " Year is not a Leap Year");
}

//Problem 4 Program to simulate a coin flip 

let coinFlip = Math.floor(Math.random() * 2);
if (coinFlip == 0) {
    console.log("Heads");
}
else {
    console.log("Tails");
}