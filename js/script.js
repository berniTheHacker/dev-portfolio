const hamburgeMenu = document.getElementById("hamburger-menu");
const hiddenElements = document.querySelectorAll(".hidden");
const ul = document.getElementById("ul");


const navDisplay = (styleChange) => {
    let i = 0;
    while (i<5) {
        hiddenElements[i].style.display = styleChange;
        i++;
    }
}


let menuOpen = false; 

hamburgeMenu.addEventListener('click', function () {

        if (menuOpen === false) {
            hamburgeMenu.style.transform = "rotate(0.25turn)";
            hamburgeMenu.style.padding = "0 0 0 0";
            navDisplay("flex");
            ul.style.height = "100vh";
            menuOpen = true;

        } else if (menuOpen === true) {
            hamburgeMenu.style.transform = "rotate(0turn)";
            navDisplay("none");
            ul.style.height = "max(12.4vh, 12.4vw)";
            menuOpen = false;
        };



    });