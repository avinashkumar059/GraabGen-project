

// Mobile menu functionality
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const header = document.getElementById('header');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// ✅ Automatically close menu when switching to desktop view
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) { // adjust breakpoint as needed
        menuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
    }
});
