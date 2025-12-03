// 🟢 Level 1 – Basic Function, Array & Object Code Tasks (Easy)


// 1. Write a function `sayHello()` that prints `"Hello JavaScript"`.
const e = require("cors");

function greet(){
    console.log("Hello JavaScript") ; 
}
greet() ; 

// 2. Create a function `add(a, b)` that returns their sum and log the result.
function sum(a , b){
    console.log(a+b) ; 
}
const prompt = require("prompt-sync")();
let a = Number(prompt("Enter the value of a") ); 
let b = Number(prompt("Enter the value of b")) ; 
sum(a , b) ; 

// 3. Write a function with a default parameter `name = "Guest"` that prints `"Hi <name>"`.

function greeting(name){
    console.log(`Hello ${name}`) ; 
}
let name = "Manvendra" ; // or prompt("Enter the name") ;
greeting(name) ; 

// 4. Use rest parameters to make a function that adds unlimited numbers

function restoprator (...nums){
    let sum = 0 ; 
    for(let n of nums){
        sum += n ; 
    }
    return sum ; 
}
let array = [1,2,3,4,4,5,5,6,6,6] ; 
console.log(restoprator(...array)) ; 

// 5. Create an IIFE that prints `"I run instantly!"`.
(()=>{
    console.log("I run instantly !") ;
})() ; 

// 6. Make a nested function where the inner one prints a variable from the outer one
function parent(){
    let a = 13 ; 
    function child(){
        console.log(Math.random() + a) ; 
    }
    child() ; 
}
parent() ; 

// 7. Create an array of 5 fruits. Add one at the end and remove one from the beginning.
let fruits = ["Apple" , "Orrange"] ; 
fruits.push("FirstFruits") ;
fruits.shift() ; 
console.log(fruits); 

// 8. Use a `for` loop to print all elements of an array.
let numbers = [1,2,35,35,46,565,72,4,24,3,35,5,4,5,46,57,6] ; 
// for(let num of numbers){
//     console.log(num) ; 
// }
for(let i= 0 ; i<numbers.length ; i++){
    console.log(numbers[i]) ; 
}


// 9. Create an object `person` with keys `name`, `age`, and `city`, and print each key’s value.
let person = {
    name : "Manvendra" ,
    age : 20 ,
    city : "Moradabad"
}
for(let key in person){
    console.log(person[key]) ; 
}

// 10. Use `setTimeout()` to log `"Time’s up!"` after 2 seconds.

function time(){
    setTimeout(()=>{
        console.log("Time's up !")
    } , 2000) ; 
}
time() ;