document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            // Allow the default link behavior for navigation
            link.classList.add('active');

            navLinks.forEach((otherLink) => {
                if (otherLink !== link) {
                    otherLink.classList.remove('active');
                }
            });
        });
    });

    const heroImage = document.querySelector('.hero-image img');
    heroImage.addEventListener('mouseover', () => {
        heroImage.classList.add('animate');
    });

    heroImage.addEventListener('mouseout', () => {
        heroImage.classList.remove('animate');
    });

    const highlights = document.querySelectorAll('.highlight');
    highlights.forEach(highlight => {
        highlight.addEventListener('click', () => {
            alert(`You clicked on: ${highlight.textContent}`);
        });
    });
});
