```javascript
// =========================================
// Smooth navigation
// =========================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// =========================================
// Reveal elements when scrolling
// =========================================

const revealElements = document.querySelectorAll(
    ".section, .project-card, .skill-card, .timeline-item"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


// =========================================
// Current year in footer
// =========================================

const footerText = document.querySelector("footer p");

if (footerText) {

    const currentYear = new Date().getFullYear();

    footerText.innerHTML =
        `© ${currentYear} Hari Babu R. Built with HTML, CSS & JavaScript.`;

}
```

