const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-open");
    });

    const navigationLinks = document.querySelectorAll(".nav-links a");
    navigationLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("mobile-open");
        }
    );
    });