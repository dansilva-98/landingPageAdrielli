const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const open = mobileMenu.dataset.open === "true";
    mobileMenu.dataset.open = String(!open);
    mobileMenu.hidden = open;
    menuToggle.setAttribute("aria-expanded", String(!open));
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.dataset.open = "false";
      mobileMenu.hidden = true;
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelectorAll("section, .site-footer").forEach((element) => {
  if (!element.classList.contains("hero")) {
    element.setAttribute("data-reveal", "");
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

document.querySelectorAll("[data-reveal]").forEach((element) => {
  observer.observe(element);
});

const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = form.querySelector("button");
    const originalText = button.textContent;
    button.textContent = "Mensagem enviada";
    button.disabled = true;

    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
      form.reset();
    }, 1800);
  });
}
