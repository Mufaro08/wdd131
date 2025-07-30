// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.querySelector("nav ul");

    // Hamburger menu toggle
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("show");

        // Switch between ☰ and ✖
        if (navMenu.classList.contains("show")) {
            hamburger.innerHTML = "✖"; // Close icon
        } else {
            hamburger.innerHTML = "&#9776;"; // Hamburger icon
        }
    });

    // Temples array
    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "Harare Temple",
            location: "Harare, Zimbabwe",
            dedicated: "1980, April, 18",
            area: 112343,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/harare-zimbabwe-temple/harare-zimbabwe-temple-12039-main.jpg"
        },
        {
            templeName: "Nkulumane Bulawayo",
            location: "Bulawayo, Zimbabwe",
            dedicated: "2006, August, 27",
            area: 11500,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQrpHlZ9qT3mtw1SWKoh3zHS2ce7FphwEM7A&s"
        },
        {
            templeName: "Harare Temple",
            location: "Harare Zimbabwe",
            dedicated: "1956, December, 8",
            area: 116642,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcgzuaSPSjk-vMMCAGSnsfwMezOhp_Wv6BsQ&s"
        },
    ];

    const container = document.getElementById('Container');

    // Display temple cards
    function displayTemples(list) {
        container.innerHTML = ""; // Clear previous cards

        list.forEach(temple => {
            const card = document.createElement('div');
            card.classList.add('temple-card');

            card.innerHTML = `
                <h2>${temple.templeName}</h2>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            `;

            container.appendChild(card);
        });
    }

    // Filter temple list based on type
    function filterTemples(type) {
        let filtered = [];

        switch (type) {
            case "old":
                filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
                break;
            case "new":
                filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
                break;
            case "large":
                filtered = temples.filter(t => t.area > 90000);
                break;
            case "small":
                filtered = temples.filter(t => t.area < 10000);
                break;
            default:
                filtered = temples;
        }

        displayTemples(filtered);
    }

    // Load all temples on initial page load
    displayTemples(temples);

    // Set up nav menu click filters
    const navLinks = document.querySelectorAll("#nav-menu a");

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const type = link.getAttribute("data-filter");

            // Toggle active link style (optional)
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");

            filterTemples(type);
        });
    });
});
