const box = document.querySelector(".box") ; 
const btn = document.querySelector(".btn") ; 

btn.addEventListener("click" , ()=>{
    var r = Math.floor(Math.random()*256) ;
    var g = Math.floor(Math.random()*256) ;
    var b = Math.floor(Math.random()*256) ;
    box.style.backgroundColor = `rgb(${r},${g},${b})`
})