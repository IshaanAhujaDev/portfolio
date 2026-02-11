// TYPEWRITER EFFECT
const nameElement = document.getElementById('typewriter-name');
const nameText = "Ishaan Ahuja.";
let index = 0;

function typeWriter() {
    if (nameElement && index < nameText.length) {
        nameElement.innerHTML += nameText.charAt(index);
        index++;
        setTimeout(typeWriter, 150);
    }
}

// SCROLL REVEAL
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);
window.onload = () => {
    if (nameElement) typeWriter();
    reveal();
};