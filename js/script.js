// Service details data
const serviceDetails = {
    "smart-attendance": {
        icon: '<i class="fas fa-robot"></i>',
        title: "Smart Attendance Management System",
        description: "Our Smart Attendance Management System leverages cutting-edge AI technology to revolutionize how organizations track and manage attendance. Using facial recognition, geolocation, and predictive analytics, our system eliminates manual processes while ensuring accuracy and security.",
        features: [
            "Real-time facial recognition for automatic check-ins",
            "Geofencing capabilities to ensure employees are at designated locations",
            "Predictive analytics to forecast attendance patterns and staffing needs",
            "Seamless integration with payroll and HR systems",
            "Mobile app support for remote and field employees",
            "Comprehensive reporting and analytics dashboard"
        ]
    },
    "biometric-attendance": {
        icon: '<i class="fas fa-fingerprint"></i>',
        title: "Biometrics Attendance Management System",
        "description": "Our Biometric Attendance Management System provides secure, accurate, and efficient tracking using advanced biometric technologies. By utilizing unique physiological characteristics, we eliminate buddy punching and ensure that attendance records are tamper-proof and reliable.",
        features: [
            "Multiple biometric options: fingerprint, iris, and facial recognition",
            "Fast and accurate identification with sub-second response times",
            "Scalable solutions for organizations of all sizes",
            "Cloud-based data storage with military-grade encryption",
            "Real-time monitoring and instant alerts for anomalies",
            "Compliance with global data protection regulations"
        ]
    },
    "manual-attendance": {
        icon: '<i class="fas fa-user-check"></i>',
        title: "Manual Attendance Management System",
        "description": "For organizations that prefer traditional methods or have specific requirements, our Manual Attendance Management System provides a digital framework for manual attendance tracking. This system combines the familiarity of traditional methods with the efficiency of digital record-keeping.",
        features: [
            "User-friendly digital sign-in/sign-out interface",
            "Customizable attendance sheets and registers",
            "Automated calculation of working hours and overtime",
            "Integration with existing ID card or badge systems",
            "Backup and recovery options for data security",
            "Simple reporting tools for managers and administrators"
        ]
    }
};

// Get DOM elements
const modal = document.getElementById('serviceModal');
const modalTitle = document.getElementById('modalTitle');
const modalIcon = document.getElementById('modalIcon');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close-modal');
const featureCards = document.querySelectorAll('.feature-card');

// Function to open modal with service details
function openModal(serviceId) {
    const service = serviceDetails[serviceId];
    
    if (service) {
        modalIcon.innerHTML = service.icon;
        modalTitle.textContent = service.title;
        
        // Build modal body content
        let bodyContent = `
            <p>${service.description}</p>
            <h3 style="color: var(--neon-green); margin: 1.5rem 0 1rem;">Key Features:</h3>
            <ul class="modal-features">
        `;
        
        service.features.forEach(feature => {
            bodyContent += `<li>${feature}</li>`;
        });
        
        bodyContent += `</ul>`;
        
        modalBody.innerHTML = bodyContent;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
}

// Function to close modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Add event listeners to feature cards
featureCards.forEach(card => {
    card.addEventListener('click', () => {
        const serviceId = card.getAttribute('data-service');
        openModal(serviceId);
    });
});

// Close modal when clicking the close button
closeBtn.addEventListener('click', closeModal);

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});



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


// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Animate elements on scroll
    animateOnScroll();
});

// Animate elements when they come into view
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (elementPosition < screenPosition) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    // Set initial state for fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Trigger initial animation check
    animateOnScroll();
});

// Registration Modal Functionality
    document.addEventListener('DOMContentLoaded', function() {
        const registrationBtn = document.getElementById('registrationBtn');
        const registrationModal = document.getElementById('registrationModal');
        const closeButtons = document.querySelectorAll('.close-modal');
        const googleFormFrame = document.getElementById('googleFormFrame');
        const formFallback = document.getElementById('formFallback');
        const retryFormBtn = document.getElementById('retryForm');

        // Detect Microsoft Edge browser
        function isMicrosoftEdge() {
            return navigator.userAgent.indexOf("Edg") > -1 || 
                   navigator.userAgent.indexOf("Edge") > -1;
        }

        // Open registration modal
        registrationBtn.addEventListener('click', function() {
            registrationModal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
            
            // Reset the form iframe and hide fallback
            googleFormFrame.style.display = 'block';
            formFallback.style.display = 'none';
            
            // For Microsoft Edge, use a different approach
            if (isMicrosoftEdge()) {
                // Edge often has issues with embedded Google Forms
                // Let's try to reload with additional parameters
                const formUrl = new URL(googleFormFrame.src);
                formUrl.searchParams.set('usp', 'pp_url');
                googleFormFrame.src = formUrl.toString();
                
                // Show fallback after a short delay for Edge users
                setTimeout(function() {
                    if (googleFormFrame.offsetHeight < 100) {
                        showFallback();
                    }
                }, 1500);
            } else {
                // For other browsers, use standard approach
                googleFormFrame.src = googleFormFrame.src;
            }
        });

        // Close modals when clicking close button
        closeButtons.forEach(button => {
            button.addEventListener('click', function() {
                registrationModal.style.display = 'none';
                document.body.style.overflow = 'auto'; // Restore scrolling
            });
        });

        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target === registrationModal) {
                registrationModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });

        // Retry loading the form
        retryFormBtn.addEventListener('click', function() {
            googleFormFrame.style.display = 'block';
            formFallback.style.display = 'none';
            
            // Force reload with cache busting
            const timestamp = new Date().getTime();
            const formUrl = new URL(googleFormFrame.src);
            formUrl.searchParams.set('t', timestamp);
            googleFormFrame.src = formUrl.toString();
            
            // Check again after reload
            setTimeout(checkFormLoad, 2000);
        });

        // Check if the iframe loaded successfully
        googleFormFrame.addEventListener('load', function() {
            // For Microsoft Edge, we need to be more lenient with load detection
            if (isMicrosoftEdge()) {
                // Edge might report the iframe as loaded even if content is blocked
                setTimeout(function() {
                    checkFormLoad();
                }, 1000);
            } else {
                checkFormLoad();
            }
        });

        // Show fallback if iframe fails to load
        googleFormFrame.addEventListener('error', function() {
            showFallback();
        });

        // Function to check if form loaded properly
        function checkFormLoad() {
            try {
                // For Microsoft Edge, we can't reliably check content due to security restrictions
                if (isMicrosoftEdge()) {
                    // Just check if iframe has reasonable height
                    if (googleFormFrame.offsetHeight < 200) {
                        showFallback();
                    }
                    return;
                }
                
                // For other browsers, try to access content
                const iframeDoc = googleFormFrame.contentDocument || googleFormFrame.contentWindow.document;
                
                // Check for common error messages in the content
                const bodyText = iframeDoc.body.innerText;
                if (bodyText.includes('content is neither') || 
                    bodyText.includes('refused to connect') ||
                    bodyText.includes('security') ||
                    bodyText.includes('not allowed') ||
                    bodyText.includes('blocked')) {
                    showFallback();
                }
            } catch (error) {
                // If we can't access the iframe content due to security restrictions
                // Check if the iframe has any visible content
                if (googleFormFrame.offsetHeight < 100) {
                    showFallback();
                }
            }
        }

        // Function to show the fallback option
        function showFallback() {
            googleFormFrame.style.display = 'none';
            formFallback.style.display = 'block';
        }
        
        // Fallback detection after a timeout
        setTimeout(function() {
            if (googleFormFrame.offsetHeight < 100 && registrationModal.style.display === 'block') {
                showFallback();
            }
        }, 3000);
    });
