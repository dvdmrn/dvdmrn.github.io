import proj  from "./projects.js";

const toType = document.getElementsByClassName("typewriter");


const typeWriter = (spanElement, text, i, ms)=>{
    if(i > text.length) return;
    spanElement.innerText = text.slice(0,i);
    setTimeout(typeWriter, ms, spanElement, text, i+1, ms)
}

const fillScreen = (i) =>{
    if(i > toType.length - 1) return;
    const typeMe = toType[i].getAttribute("value")
    const typeSpeed = parseInt(toType[i].getAttribute("speed")) || 80;
    toType[i].innerText = ""
    typeWriter(toType[i], typeMe, 0, typeSpeed)
    setTimeout(fillScreen, 50, i+1)
}

const setTopbar = ()=>{
    const top = document.getElementById("topbar");
    top.innerHTML = `<a href='/'>${"~"}</a>${window.location.pathname}`
}

setTopbar();

fillScreen(0);


// for (let i = 0; i < toType.length; i++) {
//     const typeMe = toType[i].getAttribute("value")
//     const typeSpeed = parseInt(toType[i].getAttribute("speed")) || 80;
//     toType[i].innerText = ""
//     typeWriter(toType[i], typeMe, 0, typeSpeed)
// }