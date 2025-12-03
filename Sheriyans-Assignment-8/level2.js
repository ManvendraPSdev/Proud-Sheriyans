// 🟡 Level 2 – Functional Thinking & Logic Tasks (Intermediate)

// 1. Write a higher-order function `runTwice(fn)` that takes another function and executes it two times.

function runTwice(fun){
    fun() ;
}
runTwice(function(){
    console.log("This is the fun needed to be run twice") ;
})
runTwice(function(){
    console.log("This is the fun needed to be run twice") ;
}) ; 


// 2. Create one pure function that always returns the same output for a given input, and one impure function using a global variable

function pure(a , b){
    console.log(a+b) ; 
}
pure(1 , 2) ; 

let count = 12 ; 
function impure(num){
    count = num + Math.random() ;
    console.log(count) ;
}
impure(count) ; 


// 3. Write a function that uses object destructuring inside parameters to extract and print `name` and `age`.
function printDetails({name , age}){
    console.log(name) ; 
    console.log(age) ; 
}
let details = {
    name : "Manvendra" ,
    age : 20 
}
printDetails(details) ;


// 4. Demonstrate the difference between normal function and arrow function when used as object methods (the `this` issue)


// 5. Given an array of numbers, use `map()` to create a new array where each number is squared.
let arr = [1,2,3,4,5,6,7,8,9]
let arr2 = arr.map((num)=>{
    return (num*num) ; 
})
console.log(arr2) ;

// 6. Use `filter()` to get only even numbers from an array
let evenArr = arr.filter((num)=>{
    return num%2 === 0  ; 
})
console.log(evenArr) ;

// 7. Use `reduce()` to find the total salary from an array of numbers `[1000, 2000, 3000]`.
let newArr = [1000, 2000, 3000] ; 
let ans = newArr.reduce((sum , accomodate)=>{
    return sum += accomodate ; 
} , 0);
console.log(ans) ;