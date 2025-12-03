let arr = [1 , 2, 3,4,5,6] ; 
let fun = function(...arg){ // rest operator
    console.log(arg);
    
}
fun(...arr) ; // Spread operator


// Nestead Function 

const fun2 = function(){
    function fun3(){
        console.log("This is the nesteaded function")
    }
    fun3() ;
}
fun2() ;


// Higher Order Function (HOF) -> Either the function is returning a function
// or A function is Accepting a function or doing both accepting and returning a function

let fun4 = function(){
    return function(){
        console.log("This is the Higher Order Function") ; 
    }
}

 

const fun5 = function(arg){
    console.log(arg) ; 
}
const fun6 = function(){
    console.log("This is also the Higher Order Function") ; 
}
fun5(fun6()) ; 




// CallBack Function -> the below code can be a higher order function as a whole but 
const fun7 = function(arg){
    console.log(arg) ; 
}

// This part is known as the callback where we are passing a function 
fun7(function(){
    console.log("This is the callBack") ; 
}) ; 



// First Class Function -> These are the functions which can be used as a variraible
