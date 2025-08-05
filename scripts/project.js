const footer = document.querySelector("footer");
const firstParagraph = footer.querySelector("p");
//const secondParagraph = footer.querySelector("p:nth-of-type(2)");


const currentYear = new Date().getFullYear();
//const lastModified = document.lastModified;


firstParagraph.textContent = `© ${currentYear} TapTech Solutions. All rights reserved.`;
//secondParagraph.textContent = `Last Modified: ${lastModified}`;


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
