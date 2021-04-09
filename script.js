const hamburger = document.getElementById('hamburger');
let hamburgerIcon = document.querySelector(".hamburger");
const nav = document.getElementById("nav-ul");
let navDiv = document.querySelector("nav");


hamburger.addEventListener("click", ()=> {
  nav.classList.toggle('open');

  if(nav.classList.contains("open")){
    hamburgerIcon.src = "images/icon-close.svg";
    navDiv.style.backgroundColor = 'black';
  } else {
    hamburgerIcon.src = "images/icon-hamburger.svg";
    navDiv.style.backgroundColor = 'inherit';
  }

})
