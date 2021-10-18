// Selection Practice Problems with case statements

//Problem 1 
//Read a single digit number and write the number in word using Case

let number = 6;
switch (number) {
    case 0:
        console.log("Zero");
        break;
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    case 5:
        console.log("Five");
        break;
    case 6:
        console.log("Six");
        break;
    case 7:
        console.log("Seven");
        break;
    default:
        console.log("Number is not a single digit");
        break;
}

//Problem 2 
//Read a Number and Display the week day

let weekDay = 3;
switch (weekDay) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Error!! Please provide valid WeekDay");
        break;
}

//Problem 3
//Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred, thousand..

function count_digits(number) {
    return number.toString().length;
}
let count = count_digits(1234);

console.log(count);
switch (count) {
    case 4:
        console.log("Number is in Thousands");
        break;
    case 3:
        console.log("Number is in Hundreds");
        break;
    case 2:
        console.log("Number is in Tens");
        break;
    case 1:
        console.log("Number is Single Digit Number");
        break;

    default:
        console.log("Error!! Please provide a valid Number");
        break;
}




