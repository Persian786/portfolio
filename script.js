document.addEventListener("DOMContentLoaded", () => {
  AOS.init();
});

// Sticky Navbar
window.addEventListener("scroll", () => {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 50) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

// Smooth Scroll for Navbar Links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const targetId = event.target.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  });
});

// Contact Form Submission (EmailJS)
document.getElementById("contact-form").addEventListener("submit", event => {
  event.preventDefault();

  const serviceID = "service_f1bgqjm";
  const templateID = "template_4wuolbw";

  emailjs.sendForm(serviceID, templateID, "#contact-form")
    .then(() => alert("Message sent successfully!"))
    .catch(error => console.error("Error:", error));
});

// Initialize EmailJS
(function () {
  emailjs.init("your_public_key");  // ✅ Replace with your EmailJS Public Key
})();

// Contact Form Submission with Time Field
document.getElementById("contact-form").addEventListener("submit", event => {
  event.preventDefault();

  // Add current time to the form before sending
  const now = new Date().toLocaleString();
  let timeInput = document.createElement("input");
  timeInput.setAttribute("type", "hidden");
  timeInput.setAttribute("name", "time");
  timeInput.setAttribute("value", now);
  event.target.appendChild(timeInput);

  const serviceID = "your_service_id";     // ✅ Replace with your EmailJS Service ID
  const templateID = "your_template_id";   // ✅ Replace with your EmailJS Template ID

  emailjs.sendForm(serviceID, templateID, "#contact-form")
    .then(() => {
      alert("Message sent successfully!");
      document.getElementById("contact-form").reset(); // Clear form after send
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Failed to send message. Please try again.");
    });
});
