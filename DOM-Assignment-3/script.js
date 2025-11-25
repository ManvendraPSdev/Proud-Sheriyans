const btn = document.querySelector(".btn") ; 
const main = document.querySelector("main") ; 

btn.addEventListener("click" , ()=>{

    let r = Math.floor(Math.random()*256) ; 
    let g = Math.floor(Math.random()*256) ; 
    let b = Math.floor(Math.random()*256) ; 

    let x = Math.random()*100 ; 
    let y = Math.random()*100 ; 

    // For Rotation 
    let c = Math.random()*360 ; 

    let div = document.createElement("div") ; 
    div.style.height = '140px' ; 
    div.style.width = '140px' ; 
    div.style.position = 'absolute' ; 
    div.style.top = y+'%' ; 
    div.style.left = x+'%' ;
    div.style.rotate = c+'deg' ;
    div.style.backgroundColor = `rgb(${r},${g},${b})` ; 
    main.appendChild(div) ; 
    console.log(div)
})