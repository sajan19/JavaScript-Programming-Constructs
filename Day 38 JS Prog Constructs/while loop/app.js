// Repetition Practice Problems with while loop

//Problem 1
/* Write a program that takes a command-line argument n and prints a
table of the powers of 2 that are less than or equal to 2^n till 256 is
reached.. */

let num = 6;
let a=1;
let i=0;

while (a != 256 ){
	console.log("2^"+ i+" "+a);
i++;
a = a * 2 ;
}

//Problem 3
//Extend the Flip Coin problem till either Heads or Tails wins 11 times

let flips=0;
let heads=0;
let tails=0;
while(heads != 11) {
	CoinToss= Math.floor(Math.random()*2);

	if (CoinToss == 0){
   		 console.log( "HEAD");
		((heads++))
    }
	else if (CoinToss == 1){
   		 console.log( "Tails");
		((tails++))
    }
}

