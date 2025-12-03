for (let i = 1; i < 21; i++) {
    if (i % 2 === 0) {
        console.log(i);
    };
}

for (let i = 1; i < 11; i++) {
    if (i % 2 === 0) {
        console.log("Even");
    }
    else {
        console.log("Odd");
    }
}

// Log if the number is +ive or -ive 
let num = prompt("Tell the Number"); // Prompt always atores the string weather it is a number it will store the number in the string form 
num = parseInt(num);
if (num > 0) {
    console.log(`${num} is a +iv Number `)
}
else {
    console.log(`${num} is a -iv Number `)
}


// Multiplication Table of 5 
for (let i = 1; i < 11; i++) {
    console.log(`5 * ${i} = ${5 * i}`);
}

// Count How many number are > that 8 from 1 to 15 
for (let i = 1; i < 16; i++) {
    if (i > 8) {
        console.log(i);
    }
}


//Ask user for password and print access status Hardcoded correct password. Compare with user input.
const correctPassword = "Mannu123";
let pass = prompt("Enter the password");
if (pass === correctPassword) {
    console.log("acess code 200 OK")
}
else {
    console.log("Incorrect Password 404")
}


// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”

const correctPass = "Mannu1234";
let count = 0;
let userPass = prompt("Enter the Password");

    while (count <= 3) {
        userPass = prompt(`Enter the password ${count} time Now`);
        if (userPass === correctPass) {
            console.log(`welcome ${correctPass}`);
            break ; 
        }
        count ++ ; 
    }
    if(count === 3 && userPass !== correctPass){
        console.log(`Account Locked all ${count} used`)
    }


// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.
for(let i=1 ; i<51 ; i++){
    if(i%7 === 0){
        console.log(i);  
    }
}


//Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.
let sum = 0 ; 
for(let i=1 ; i<31 ; i++){
    if(i % 2 !== 0){
        sum += i ; 
    }
}
console.log(sum) ; 

//Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.
let userValue = prompt("Enter the Value") ; 
while(userValue % 2 !== 0){
    userValue = prompt("Enter the Value") ; 
}
console.log(`user finally entered the even value ${userValue}`) ; 



//Print numbers between two user inputs
// Input start and end using prompt() → print all between.
let val1 = prompt("Enter the 1st value") ; 
let val2 = prompt("Enter the 2nd value") ; 
for(let i=val1 ; i<=val2 ; i++){
    if(i > val1 && i < val2){
        console.log(i) ; 
    }
}

//Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.
let oddCount = 0 ; 
for(let i=1 ; i<=20 ; i++){
    if(i % 2 !== 0){
        oddCount ++ ; 
        if(oddCount < 3){
            console.log(i) ; 
        }
    }
}