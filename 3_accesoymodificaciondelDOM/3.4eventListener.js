const inputUsuario = document.getElementById("username");
// ahora le quitaremos el prefijo on... por ejemplo:
// click a los eventos ya conocidos

const clickMouse = () => {
    const arts = document.getElementById("formulario");
    const parr = document.createElement("p");
    parr.innerText = "Esto fue agregado al hacer click";
    arts.appendChild(parr);
}

const overMouse = () => {
    const arts = document.getElementById("formulario");
    const parr = document.createElement("p");
    parr.innerText = "El mouse ha pasado por ecima.";
    arts.appendChild(parr);
    
    inputUsuario.removeEventListener("mouseover", overMouse);
}

inputUsuario.addEventListener("click", clickMouse )
inputUsuario.addEventListener("mouseover", overMouse )