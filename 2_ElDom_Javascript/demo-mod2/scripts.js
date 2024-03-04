const poster = document.getElementById("poster")
const file = poster.src

const blur = document.querySelector("#blur")
console.log(blur.style);


// Sobre escribiento el atributo src con estilos en linea
blur.style.backgroundImage = `url(${file})`