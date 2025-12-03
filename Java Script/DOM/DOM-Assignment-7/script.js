const card = document.querySelector(".card") ; 
let h1 = document.querySelector("h1")
card.addEventListener('keydown' , (dets)=>{
    h1.innerText = dets.code ; 
    // card.appendChild(h1) ;
    console.log(h1) ;
})