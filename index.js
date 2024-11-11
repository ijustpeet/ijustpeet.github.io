// When the page scrolls, add a shadow to the navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Toggle the hidden content visibility on hover for service boxes
const serviceBoxes = document.querySelectorAll('.services .intro-box, .services .JS-box, .services .SQL-box');

serviceBoxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        const hiddenContent = box.querySelector('.hidden-content');
        if (hiddenContent) {
            hiddenContent.style.opacity = '1';
        }
    });
    
    box.addEventListener('mouseleave', () => {
        const hiddenContent = box.querySelector('.hidden-content');
        if (hiddenContent) {
            hiddenContent.style.opacity = '0';
        }
    });
});

// Smooth scrolling for all internal links
const internalLinks = document.querySelectorAll('a[href^="#"]');

internalLinks.forEach(link => {
    link.addEventListener('click', event => {
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            event.preventDefault();
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});

// Smooth scrolling for navbar links to sections on the same page
const navbarLinks = document.querySelectorAll('.navbar-menu a, .smooth-scroll');

navbarLinks.forEach(link => {
    link.addEventListener('click', event => {
        const href = event.target.getAttribute('href');
        
        // Check if the href is an internal link (starts with '#')
        if (href.startsWith('#')) {
            event.preventDefault(); // Prevent default scrolling behavior
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust offset to account for navbar height
                    behavior: 'smooth'
                });
            }
        } 
        // External links will be handled normally (no smooth scrolling)
    });
});