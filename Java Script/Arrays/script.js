// How to define an array 
let arr = [1,2,3,4,5,6,7,8,89] ; 

let arr2 = new Array() ; 

// Functions on Array

//push 
arr.push(12) ; 

//pop -> pop out the last element
arr.pop() ; 

//shift -> remove the value from the begning 
arr.shift() ;

//unshift -> add the value in the starting of the array 
arr.unshift(78) ; 

//indexof -> tell the index of the particular element 
arr.indexOf(5)

//filter -> it is used to give the new array with the filtered elements 
let arr3 = arr.filter(function(val){
    return(val > 3) ; 
})
console.log(arr3) ; 