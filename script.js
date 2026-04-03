// ✨ glow follows mouse
const glow = document.querySelector(".bg-glow");

if (glow) {
  document.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX - 300 + "px";
    glow.style.top = e.clientY - 300 + "px";
  });
}

// 🔘 scroll
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

// ✨ Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach((el) => {
  observer.observe(el);
});

// 🧠 cursor glow
const cursor = document.querySelector(".cursor-glow");

if (cursor) {
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX - 150 + "px";
    cursor.style.top = e.clientY - 150 + "px";
  });
}

// ✨ particles
const particlesContainer = document.querySelector(".particles");

if (particlesContainer) {
  for (let i = 0; i < 40; i++) {
    const particle = document.createElement("span");
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDuration = (5 + Math.random() * 10) + "s";
    particlesContainer.appendChild(particle);
  }
}

// ✍️ typing effect
const typingEl = document.querySelector(".typing");

if (typingEl) {
  const text = "Building aesthetic web experiences ✨";
  let i = 0;

  function typeEffect() {
    if (i < text.length) {
      typingEl.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeEffect, 40);
    }
  }

  typeEffect();
}

// 🧲 magnetic buttons
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0,0)";
  });
});

// 🧼 loader safe
const loader = document.getElementById("loader");

if (loader) {
  window.addEventListener("load", () => {
    loader.style.display = "none";
  });
}

const roles = [
  "Frontend web Developer",
  "UI Enthusiast",
  "API Explorer",
  "Cinephile Builder 🎬"
];

let roleIndex = 0;
let charIndex = 0;
const roleEl = document.querySelector(".role");

function typeRole() {
  if (!roleEl) return;

  if (charIndex < roles[roleIndex].length) {
    roleEl.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, 50);
  } else {
    setTimeout(() => {
      roleEl.textContent = "";
      charIndex = 0;
      roleIndex = (roleIndex + 1) % roles.length;
      typeRole();
    }, 1500);
  }
}

typeRole();

// ✨ Cursor trail effect
document.addEventListener("mousemove", (e) => {
  const trail = document.createElement("div");
  trail.className = "trail";

  cursor.style.left = e.clientX  + "px";
  cursor.style.top = e.clientY  + "px";

  document.body.appendChild(trail);

  setTimeout(() => {
    trail.remove();
  }, 300);
});

const hoverSound = document.getElementById("hoverSound");

buttons.forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  });
});

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});