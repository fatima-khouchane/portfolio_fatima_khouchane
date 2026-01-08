// document
//   .querySelector(".contact-form")
//   .addEventListener("submit", function (e) {
//     e.preventDefault();
//     alert("Merci Fatima ! Message envoyé avec succès (simulation).");
//     this.reset();
//   });


  document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const icon = themeToggle.querySelector("i");

    // Charger le thème sauvegardé
    if (localStorage.getItem("theme") === "light") {
      document.documentElement.setAttribute("data-theme", "light");
      icon.classList.replace("fa-moon", "fa-sun");
    }

    themeToggle.addEventListener("click", () => {
      const isLight =
        document.documentElement.getAttribute("data-theme") === "light";
      if (isLight) {
        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("theme", "dark");
        icon.classList.replace("fa-sun", "fa-moon");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        icon.classList.replace("fa-moon", "fa-sun");
      }
    });
  });

  const showMoreBtn = document.getElementById("show-more-btn");
  const extraCards = document.querySelectorAll(".extra-card");

  showMoreBtn.addEventListener("click", () => {
    extraCards.forEach((card) => {
      if (card.style.display === "block") {
        card.style.display = "none";
        showMoreBtn.textContent = "Voir Plus";
      } else {
        card.style.display = "block";
        showMoreBtn.textContent = "Voir Moins";
      }
    });
  });


  // Animation du Cursor

  

// Effet Hover sur les liens et boutons
const interactives = document.querySelectorAll("a, button, .project-card, .service-card");
interactives.forEach(el => {
    el.addEventListener("mouseenter", () => {
        outline.style.transform = "translate(-50%, -50%) scale(1.5)";
        outline.style.backgroundColor = "rgba(99, 102, 241, 0.1)";
    });
    el.addEventListener("mouseleave", () => {
        outline.style.transform = "translate(-50%, -50%) scale(1)";
        outline.style.backgroundColor = "transparent";
    });
});

// Magnetic effect for Orbits
const orbits = document.querySelectorAll('.orbit');
orbits.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.1)`;
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
    });
});

const track = document.querySelector(".testimonials-track");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

if (track && nextBtn && prevBtn) {
  nextBtn.addEventListener("click", () => {
    track.scrollBy({ left: 380, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
    track.scrollBy({ left: -380, behavior: "smooth" });
  });
}



const themeTogglee = document.getElementById("theme-toggle");
const bodyy = document.body;

themeTogglee.addEventListener("click", () => {
  if (bodyy.getAttribute("data-theme") === "light") {
    bodyy.removeAttribute("data-theme");
    themeTogglee.innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    bodyy.setAttribute("data-theme", "light");
    themeTogglee.innerHTML = '<i class="fas fa-sun"></i>';
  }
});

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  const isLight = body.getAttribute("data-theme") === "light";
  if (isLight) {
    body.removeAttribute("data-theme");
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    body.setAttribute("data-theme", "light");
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
});

document.addEventListener("mousemove", (e) => {
  if (document.body.getAttribute("data-theme") === "light") {
    const orb = document.querySelector(".glass-orb");
    if (orb) {
      const x = e.clientX - 300; // 300 hya nisf l-qotr
      const y = e.clientY - 300;
      orb.style.transform = `translate(${x}px, ${y}px)`;
    }
  }
});