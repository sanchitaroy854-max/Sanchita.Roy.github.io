// Dynamic Typing Text Effect
const words = [
  "Building next-generation digital applications.",
  "Crafting high-performance user interfaces.",
  "Solving real-world problems with modern code."
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedElement = document.getElementById("typed-text");

function typeEffect() {
  if (!typedElement) return;

  const currentWord = words[wordIndex];
  
  if (isDeleting) {
    typedElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 35 : 75;

  if (!isDeleting && charIndex === currentWord.length) {
    typeSpeed = 2200; // Pause at end of word
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typeSpeed = 500;
  }

  setTimeout(typeEffect, typeSpeed);
}

// Mobile Navbar Toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// Smooth Scrolling & Close mobile menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    const targetId = this.getAttribute("href");
    if (targetId.startsWith("#") && targetId.length > 1) {
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        if (navLinks.classList.contains("active")) {
          navLinks.classList.remove("active");
        }
        targetElement.scrollIntoView({
          behavior: "smooth"
        });
      }
    }
  });
});

// Interactive Form Submit with Success Toast
function handleFormSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const toast = document.getElementById("form-toast");

  toast.style.display = "flex";
  toast.querySelector("span").textContent = `Thank you, ${name}! Your transmission has been sent successfully.`;

  document.getElementById("contact-form").reset();

  setTimeout(() => {
    toast.style.display = "none";
  }, 6000);
}

// Initialize on Load
document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});
