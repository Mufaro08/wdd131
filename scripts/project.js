const footer = document.querySelector("footer");
const firstParagraph = footer.querySelector("p");
const secondParagraph = footer.querySelector("p:nth-of-type(2)");


const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;


firstParagraph.textContent = `© ${currentYear} TapTech Solutions. All rights reserved.`;
secondParagraph.textContent = `Last Modified: ${lastModified}`;


function highlightCard(card) {
  // Remove highlight from all cards
  document.querySelectorAll('.service-card').forEach(el => {
    el.style.borderLeftColor = '#00c6ff';
    el.style.backgroundColor = '#f4f4f4';
  });

  // Highlight clicked card
  card.style.borderLeftColor = '#0072ff';
  card.style.backgroundColor = '#e6f0ff';
}

// Array of reasons for contact
const contactReasons = [
  "Project Inquiry",
  "Website Support",
  "Partnership Proposal",
  "General Question",
  "Other"
];

// Array to store submitted messages (demo only, not persistent)
let submittedMessages = [];



// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Gather form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Push message to the array
  submittedMessages.push({ name, email, reason, message });

  // Show confirmation message
  document.getElementById("submissionResult").textContent = "✅ Your message has been sent successfully!";

  // Update the demo messages list
  updateMessagesList();

  // Reset form
  document.getElementById("contactForm").reset();
});

