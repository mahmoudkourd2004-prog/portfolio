window.addEventListener("load", () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 10);
});

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

const headerContent = document.querySelector("#home .header-content");

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;

  if (headerContent) {
    let opacity = 1 - scroll / 400;
    headerContent.style.opacity = Math.max(opacity, 0);
  }
});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.className = "top-btn";
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 },
);

sections.forEach((sec) => {
  sec.classList.add("hidden");
  observer.observe(sec);
});

window.addEventListener("scroll", () => {
  let current = "home";

  sections.forEach((section) => {
    const top = window.scrollY;
    const offset = section.offsetTop - 120;
    const height = section.offsetHeight;

    if (top >= offset && top < offset + height) {
      current = section.id;
    }
  });

  navItems.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
