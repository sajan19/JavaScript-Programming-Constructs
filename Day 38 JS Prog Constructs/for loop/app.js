// Repetition Practice Problems with for loop

//Problem 1
//Write a program that takes a command-line argument n and prints a table of the
// powers of 2 that are less than or equal to 2^n

let num = 5;
var a=1;

for ( let i = 0; i<=num; i++ ){
   
	console.log("2^"+ i +" "+a);
    a =a*2;
}
 
//Problem 2
//Write a program that takes number n and prints the nth harmonic number

let harmonicNum = 5;

var harmonic = 1;
for (let i=2; i<=harmonicNum; i++ ){
 
    let hn = harmonic/i;
    hn = hn + harmonic/i ;
    console.log(hn);
}

//Problem 3
//Write a program that takes a input and determines if the number is a prime

let primeNum = 7;

for (let i = 2; i < primeNum/2; i++) {
    prime = (primeNum % i);
    if (prime == 0) {
        console.log("Number is not a prime number");
    }
    else if (prime == 1) {
        console.log("Number is a prime Number");
    }
    else {
        console.log("Enter Valid Number");
    }
}

//Problem 6
//Write a program that computes a factorial of a number taken as input

let factNum = 5;
let fact=1;
for (let i=2; i<=factNum; i++ ){
fact = fact * i ; 
console.log("Value of Factorial of number " + factNum+ " is: " +fact);
}

