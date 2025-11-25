const button = document.querySelector(".btn") ; 
const val = document.querySelector("h1") ; 

let count = 0 ; 

button.addEventListener("click" , ()=>{

    const downBtn = document.querySelector(".download") ; 

    const int = setInterval(()=>{
        count ++ ; 
        downBtn.style.width = `${count}%`
        val.innerHTML = count+'%' ; 
    } , 50)

    setTimeout(()=>{
        clearInterval(int)
        button.style.pointerEvents = 'none'
    } , 5000)
})