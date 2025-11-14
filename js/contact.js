

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



// 👇 Replace this with your actual Google Apps Script URL
  const scriptURL = 'https://script.google.com/macros/s/AKfycby9aBNd6mq6RUZcVYIYxRKz1BtbhXOgTQSLBF4-hY6ne-RF3RBbT77ymdA-Z6MpNKjm/exec';

  const form = document.getElementById('contactForm');
  const messageBox = document.getElementById('contactMessage');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
      name: document.getElementById('name').value.trim(),
      email: document.getElementById('email').value.trim(),
      message: document.getElementById('message').value.trim()
    };

    messageBox.style.display = "block";
    messageBox.style.color = "#555";
    messageBox.innerText = "⏳ Sending your message...";

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.status === "success") {
        messageBox.style.color = "green";
        messageBox.innerText = "✅ Message sent successfully!";
        form.reset();
      } else {
        messageBox.style.color = "red";
        messageBox.innerText = "❌ Failed to send message.";
      }
    } catch (error) {
      console.error("Error:", error);
      messageBox.style.color = "red";
      messageBox.innerText = "⚠️ An error occurred. Please try again later.";
    }
  });

