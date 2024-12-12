// Scroll to the top on page load or refresh
window.addEventListener('load', function () {
    window.scrollTo(0, 0); // This scrolls the page to the top
});

// Toggle Mobile Menu
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scroll for navigation links with menu closure
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Close the mobile menu
        navLinks.classList.remove('active');

        // Smooth scroll to the target section
        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Enhanced Scroll Animation
const scrollSections = document.querySelectorAll('.scroll-section');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the section is visible
};

const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all scroll sections
scrollSections.forEach(section => {
    section.classList.add('scroll-bottom-to-top');  // Add your chosen animation class
    scrollObserver.observe(section);
});

// Form Submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent the default form submission
        const form = event.target;
        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: { 'Accept': 'application/json' },
            });

            const statusDiv = document.getElementById('form-status');
            if (response.ok) {
                statusDiv.innerHTML = "<p>Thank you! Your message has been sent.</p>";
                form.reset(); // Clear the form fields
            } else {
                statusDiv.innerHTML = "<p>Oops! There was a problem sending your message.</p>";
            }
        } catch (error) {
            const statusDiv = document.getElementById('form-status');
            statusDiv.innerHTML = "<p>Oops! Something went wrong. Please try again later.</p>";
        }
    });
}

// Apply reduced animation on scroll sections (CSS styles in JavaScript for reference)
.scroll-section {
    opacity: 0; /* Initially hide sections */
    transform: translateY(15px); /* Reduced intensity */
    transition: opacity 0.6s ease-out, transform 0.6s ease-out; /* Slightly slower for a smoother effect */
}

.scroll-section.visible {
    opacity: 1;
    transform: translateY(0); /* Reduced intensity in the scroll animation */
}
