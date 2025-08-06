 

// Product Array
const products = [
  { id: "1", name: "TapTech Pro" },
  { id: "2", name: "TapTech Lite" },
  { id: "3", name: "TapGuard" },
  { id: "4", name: "TapSecure" }
];

document.addEventListener("DOMContentLoaded", () => {
  const productSelect = document.getElementById("productName");

  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
});


let count = localStorage.getItem('reviewCount') || 10;
    count++;
    localStorage.setItem('reviewCount', count);
    document.getElementById('reviewCount').textContent = count;