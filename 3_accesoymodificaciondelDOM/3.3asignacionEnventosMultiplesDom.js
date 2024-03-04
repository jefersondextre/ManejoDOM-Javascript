const inputUsuario = document.getElementById("username");
inputUsuario.onclick = clickMouse;
inputUsuario.onmouseover = overMouse; 

function clickMouse(){
    const arts = document.getElementById("formulario");
    const parr = document.createElement("p");
    parr.innerText="Esto fue agregado al hacer click"

    arts.appendChild(parr)
}

function overMouse() {
    const arts = document.getElementById("formulario");
    const parr = document.createElement("p");
    parr.innerText = "El mouse ha pasado por ecima.";

    arts.appendChild(parr);
}