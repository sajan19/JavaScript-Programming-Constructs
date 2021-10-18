//Selection Practice Problems using if and else if and else

//Problem 1 Read a single digit Number and write the Number in word

let num = 4;
if (num == 0) {
    console.log("zero");
}
else if (num == 1) {
    console.log("one");
}
else if (num == 2) {
    console.log("two");
}
else if (num == 3) {
    console.log("three");
}
else if (num == 4) {
    console.log("four");
}
else if (num == 5) {
    console.log("five");
}
else if (num == 6) {
    console.log("six");
}
else if (num == 7) {
    console.log("seven");
}
else if (num == 8) {
    console.log("eight");
}
else if (num == 9) {
    console.log("nine");
}
else {
    console.log("Number Entered is not a single digit number");
}

//Problem 2 Read a Number and Display the week day

let weekNum = 6;

if (weekNum == 1) {
    console.log("Sunday");
}
else if (weekNum == 2) {
    console.log("Monday");
}
else if (weekNum == 3) {
    console.log("Tuesday");
}
else if (weekNum == 4) {
    console.log("Wednesday");
}
else if (weekNum == 5) {
    console.log("Thrusday");
}
else if (weekNum == 6) {
    console.log("Friday");
}
else if (weekNum == 7) {
    console.log("Saturday");
}
else {
    console.log("You entered Wrong weekNumber");
}

//Problem 3 Read a Number 1, 10, 100, 1000, etc and 
//display unit, ten, hundred , thousand

function count_digits(number) {
    return number.toString().length;
}
let count = count_digits(1234);

console.log(count);

if (count == 4) {
    console.log("Number is in Thousands");
}
else if (count == 3) {
    console.log("Number is in Hundreds");
}
else if (count == 2) {
    console.log("Number is in Tens");
}
else {
    console.log("Number is in Single digit");
}

//Problem 4 Enter 3 Numbers do following arithmetic operation and 
//find the one that is maximum and minimum

let a = 15;
let b = 2;
let c = 7;

ops1 = (a+b*c);
console.log("Value of First Operation is: " + ops1);

ops2 = (a % b + c);
console.log("Value of Second Operation is: " + ops2);

ops3 = (c + a / b);
console.log("Value of Third Operation is: " + ops3);

ops4 = (a * b + c)
console.log("Value of Fourth Operation is: " + ops4);

console.log("Code to obtain Maximum value is: ");

max = ops1;
if (max < ops2) {
    console.log(max = ops2);
}
else if (max < ops3) {
    console.log(max = ops3);
}
else if (max < ops4) {
    console.log(max = ops4);
}
console.log("Code to obtain Minimum value is: ");

if ((ops1 < ops2) && (ops1 < ops3) && (ops1 < ops4)) {
    console.log(min = ops1);
}
else if ((ops2 < ops3) && (ops2 < ops4) && (ops2 < ops1)) {
    console.log(min = ops2);
}
else if ((ops3 < ops2) && (ops3 < ops1) && (ops3 < ops4)) {
    console.log(min = ops3);
}
else if ((ops4 < ops2) && (ops4 < ops3) && (ops4 < ops1)) {
    console.log(min = ops4);
}





