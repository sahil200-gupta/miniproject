// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ?
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Form Validation
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Reset errors
    nameError.style.display = 'none';
    emailError.style.display = 'none';
    messageError.style.display = 'none';
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';

    // Validate name
    if (nameInput.value.trim() === '') {
        nameError.style.display = 'block';
        isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailError.style.display = 'block';
        isValid = false;
    }

    // Validate message
    if (messageInput.value.trim() === '') {
        messageError.style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        // Simulate form submission
        setTimeout(() => {
            contactForm.reset();
            successMessage.style.display = 'block';
        }, 500);
    } else {
        errorMessage.style.display = 'block';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Adjust for fixed header height
                behavior: 'smooth'
            });
        }
    });
});