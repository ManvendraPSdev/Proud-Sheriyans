const val = document.querySelector("h1") ; 
const incBtn = document.querySelector("#inc") ; 
const decBtn = document.querySelector("#decr") ; 

let count = 0 ;

function updateCounter(){
    if(count === 0){
        val.style.color = "white"
    }
    val.textContent = count ; 
}

// incBtn.addEventListener("click" , ()=>{
//     val.textContent = Number(val.textContent )+ 1 ; 
// })

incBtn.addEventListener("click" , ()=>{
    val.style.color = "Green" ;
    count ++ ;
    updateCounter() ; 
})

// decBtn.addEventListener("click" , ()=>{
//     val.textContent = Number(val.textContent) - 1 ;
// })

decBtn.addEventListener("click" , ()=>{
    val.style.color = "Red" ;
    count -- ; 
    updateCounter() ; 
})