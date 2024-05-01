// const toType = document.getElementsByClassName("typewriter");


// const typeWriter = (spanElement, text, i, ms)=>{
//     if(i > text.length) return;
//     spanElement.innerText = text.slice(0,i);
//     setTimeout(typeWriter, ms, spanElement, text, i+1, ms)
// }

// const fillScreen = (i) =>{
//     if(i > toType.length - 1) return;
//     const typeMe = toType[i].getAttribute("value")
//     const typeSpeed = parseInt(toType[i].getAttribute("speed")) || 80;
//     toType[i].innerText = ""
//     typeWriter(toType[i], typeMe, 0, typeSpeed)
//     setTimeout(fillScreen, 50, i+1)
// }


// fillScreen(0);





/**
 * 
 * @param {HTMLDivElement} divElement 
 * @param {Array<string>} words 
 * @param {number} i 
 * @param {number} ms 
 */
const speakWords = (divElement, words, i, ms) => {
  
  if(i>=words.length) return;
  divElement.innerText+= " "
  divElement.innerText+= " " + words[i] 
  setTimeout(speakWords, ms, divElement, words, i+1, ms);
}


const speakWordsOnPage = ()=>{
  const toSpeak = document.getElementsByClassName("speak");
  for (let i = 0; i < toSpeak.length; i++) {
    const words = toSpeak[i].innerText.split(" ");
    toSpeak[i].innerText = ""
    speakWords(toSpeak[i], words, 0, 80)
    
  }
}
speakWordsOnPage();

const hamburgerButton = document.getElementById("hamburger-menu-icon");
hamburgerButton.onclick = toggleHamburger;
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function toggleHamburger() {
    // document.getElementById("hamburger-dropdown").classList.toggle("show-hamburger");
    const menu = document.getElementById("hamburger-dropdown");
    if (menu.style.maxHeight.length > 3) {
        menu.style.maxHeight = "0px";
        menu.style.opacity = 0;
      } 
    else {
        menu.style.maxHeight = menu.scrollHeight + "px";
        menu.style.opacity = 1;
      } 
  }
  

  document.getElementById("hamburger-url").innerText = window.location.pathname.split('/')[1];
// window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//             openDropdown.classList.remove('show');
//         }
//     }
// }
// } 

// top bar ====================================================================
// const setTopbar = ()=>{
//     const top = document.getElementById("topbar");
//     top.innerHTML = `<a href='/'>${"~"}</a>${window.location.pathname}`
// }
// setTopbar();
// for (let i = 0; i < toType.length; i++) {
//     const typeMe = toType[i].getAttribute("value")
//     const typeSpeed = parseInt(toType[i].getAttribute("speed")) || 80;
//     toType[i].innerText = ""
//     typeWriter(toType[i], typeMe, 0, typeSpeed)
// }