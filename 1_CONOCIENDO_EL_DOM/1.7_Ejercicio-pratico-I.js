// console.log(document.body.innerHTML);
// console.log(document.body.innerText);

// console.log(document.body.children[0].innerText);
console.log(document.body.children[0].innerText);
const route = document.location.href


const bodyChildren = document.body.children


bodyChildren[0].innerText = "Texto Nuevo"
bodyChildren[1].children[0].innerText = route

// document.body.style.backgroundColor = "tomato"

console.log()
console.log(document.styleSheets[0].cssRules[1].style.color = "yellow")

let flag = true;
const animation = ()=>{
    if ((document.body.style.backgroundColor === "skyblue")) {
        document.body.style.backgroundColor = "tomato";
    } else {
        document.body.style.backgroundColor = "skyblue";
    }
    flag = !flag
}
setInterval(animation, 1000)