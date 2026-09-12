/* =========================================
SMOOTH SCROLLING
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {


link.addEventListener("click", event => {

    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") {
        return;
    }

    const target = document.querySelector(targetId);

    if (!target) {
        return;
    }

    event.preventDefault();

    target.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});


});

/* =========================================
SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
".about-grid, " +
".skill-card, " +
".experience-card, " +
".project-card, " +
".timeline-item, " +
".contact-content"
);

if ("IntersectionObserver" in window) {


const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add("visible");

            revealObserver.unobserve(entry.target);

        });

    },
    {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
    }
);


revealElements.forEach((element, index) => {

    /*
     * Small stagger effect for cards.
     * Each card appears slightly after the previous one.
     */

    if (
        element.classList.contains("skill-card") ||
        element.classList.contains("project-card")
    ) {
        element.style.transitionDelay =
            `${(index % 4) * 80}ms`;
    }

    element.classList.add("reveal");

    revealObserver.observe(element);

});


} else {


/*
 * Fallback for older browsers.
 * If IntersectionObserver isn't supported,
 * simply show all elements.
 */

revealElements.forEach(element => {
    element.classList.add("visible");
});


}

/* =========================================
CURRENT YEAR
========================================= */

const footerText = document.querySelector("footer p");

if (footerText) {


const currentYear =
    new Date().getFullYear();

footerText.textContent =
    `© ${currentYear} Hari Babu R. Built with HTML, CSS & JavaScript.`;


}

/* =========================================
EXTERNAL LINKS
========================================= */

document
.querySelectorAll('a[target="_blank"]')
.forEach(link => {


    link.setAttribute(
        "rel",
        "noopener noreferrer"
    );

});

