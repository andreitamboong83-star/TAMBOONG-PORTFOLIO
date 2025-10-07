// ===== Mobile Menu Toggle =====
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ===== "Hire Me" Button Alert =====
const hireBtn = document.getElementById("hireBtn");
hireBtn.addEventListener("click", () => {
  alert("Thank you for your interest! Let's work together!");
});

// ===== Contact Form =====
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Simulate sending message
  formStatus.textContent = "Sending...";
  setTimeout(() => {
    formStatus.textContent = "✅ Message sent successfully!";
    contactForm.reset();
  }, 1000);
});
