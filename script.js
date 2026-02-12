// --- 1. TYPEWRITER EFFECT (SEO Friendly) ---
const nameElement = document.getElementById('typewriter-name');
const nameText = "Ishaan Ahuja.";
let index = 0;

function typeWriter() {
    // Clear the placeholder text once when starting
    if (index === 0) nameElement.innerHTML = ''; 

    if (nameElement && index < nameText.length) {
        nameElement.innerHTML += nameText.charAt(index);
        index++;
        setTimeout(typeWriter, 120); // Slightly faster for better feel
    }
}

// --- 2. SCROLL REVEAL (Intersection Observer) ---
// This is much faster than the 'scroll' event listener
const revealOptions = {
    threshold: 0.15 // Trigger when 15% of the element is visible
};

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target); // Stop watching once it's revealed
        }
    });
}, revealOptions);

// --- 3. INITIALIZATION ---
window.addEventListener("DOMContentLoaded", () => {
    // Start Typewriter
    if (nameElement) typeWriter();

    // Start Observing elements with .reveal
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => revealObserver.observe(el));
});