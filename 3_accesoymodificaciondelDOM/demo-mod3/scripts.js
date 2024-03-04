const poster = document.getElementById("poster")
const file = poster.src

const blur = document.querySelector("#blur")
console.log(blur.style);


// Sobre escribiento el atributo src con estilos en linea
blur.style.backgroundImage = `url(${file})`

// CON 2 BOTONES
// ==============
const arrowLeft = document.getElementById("arrow")
const nav = document.getElementById("main-menu")
const arrowRight = document.getElementById("arrow-right")
arrowLeft.addEventListener('click',()=>{
    nav.classList.add("hide")
})
arrowRight.addEventListener('click',()=>{
    nav.classList.remove("hide")
})

// CON 1 SOLO BOTON:
// ===================
// main-menu  -- nav
// flecha -- menubtn

const menubtn = document.getElementById("menubtn")
menubtn.addEventListener("click",()=>{
    //! Con condicional if
    // hide hace que se oculte, quitandolo hace que se vea el menu
    // if(nav.classList.contains("hide")){
        // nav.classList.remove("hide");
    // }else {
        // si no lo tiene agregale para que se oculte
    //     nav.classList.add("hide");
    // }        

    //! Con operador ternario:
    // (nav.classList.contains("hide"))? 
    // nav.classList.remove("hide") :
    // nav.classList.add("hide")

    //! Con toggle
    nav.classList.toggle("hide");
})