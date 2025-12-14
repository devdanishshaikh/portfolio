/* =====================================================
   HERO INTRO TYPING ANIMATION
   ===================================================== */

const titles = [
  "Junior Front-End Developer",
  "HTML • CSS • JavaScript",
  "Building Responsive Websites"
];

const subtitle = document.querySelector(".hero-text h2");

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 120;
let deletingSpeed = 60;
let delayAfterType = 1200;

function typeEffect() {
  const currentText = titles[titleIndex];

  if (!isDeleting) {
    subtitle.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      setTimeout(() => (isDeleting = true), delayAfterType);
    }
  } else {
    subtitle.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

document.addEventListener("DOMContentLoaded", typeEffect);

/* =====================================================
   ACTIVE NAV LINK ON SCROLL
   ===================================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

function setActiveLink() {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", setActiveLink);

/* =====================================================
   SMOOTH SCROLL FOR NAV LINKS (MOBILE SAFE)
   ===================================================== */

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: "smooth"
    });
  });
});

/* =====================================================
   LOAD CONFIRMATION (DEV PURPOSE)
   ===================================================== */

console.log("✅ Portfolio JavaScript loaded successfully");
