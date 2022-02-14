const hamburgeMenu = document.getElementById("hamburger-menu");
const hiddenElements = document.querySelectorAll(".hidden");
// const nav = document.getElementsID("nav");

console.log("You're hacker, aren't you? ;)");

const navDisplay = (styleChange) => {
    let i = 0;
    while (i<5) {
        hiddenElements[i].style.display = styleChange;
        i++;
    }
}

let menuOpen = false; 

hamburgeMenu.addEventListener('click', () => {

    if (menuOpen === false) {
        hamburgeMenu.style.transform = "rotate(0.25turn)";
        navDisplay("flex");
        // nav.style.flexWrap = "wrap";
        // ul.style.height = "50vh";


        menuOpen = true;

    } else if (menuOpen === true) {
        hamburgeMenu.style.transform = "rotate(0turn)";
        navDisplay("none");
        // hidden.style.backgroundColor = "";

        menuOpen = false;
    };



});