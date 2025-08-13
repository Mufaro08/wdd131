const footer = document.querySelector("footer");
const firstParagraph = footer.querySelector("p:nth-of-type(1)");
const secondParagraph = footer.querySelector("p:nth-of-type(2)");


const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;


firstParagraph.textContent = `© ${currentYear} Mufaro Justice Tapera`;
secondParagraph.textContent = `Last Modified: ${lastModified}`;