document.addEventListener("DOMContentLoaded", () => {
  // Footer last modified
  const full = document.querySelector("#full");
  const today = new Date(document.lastModified);
  full.innerHTML = `Last modified: ${today.toLocaleString()}`;

  // Menu buttons
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const closeBtn = document.getElementById("closeBtn");
  const navMenu = document.getElementById("navMenu");

  hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.add("show");
  });

  closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });

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
      templeName: "Cebu City Philippines",
      location: "Gorordo Avenue Barangay Lahug Cebu City, 6000 Cebu Philippines",
      dedicated: "2010, June, 13",
      area: 29556,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cebu-city-philippines/200x320/cebu-philippines-temple-lds-704567-wallpaper.jpg"
    },
    {
      templeName: "Frankfurt Germany",
      location: "Talstrasse 10 61381  Friedrichsdorf/TS Germany",
      dedicated: "1987, August, 28",
      area: 32895,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/frankfurt-germany/400x250/frankfurt-temple-1-2278179.jpg"
    }
  ];

  // Extract year
  function getYear(dateStr) {
    return parseInt(dateStr.split(",")[0]);
  }

  // Create temple card
  function createTempleCard(temple) {
    const card = document.createElement("div");
    card.classList.add("temple-card");
    card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;
    return card;
  }

  // Display function
  function displayTemples(filtered) {
    const grid = document.getElementById("templeGrid");
    grid.innerHTML = "";
    filtered.forEach(t => grid.appendChild(createTempleCard(t)));
  }

  // Initial load
  displayTemples(temples);

  // Filter handling
  document.querySelectorAll("a[data-filter]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const filter = e.target.getAttribute("data-filter");

      let filteredTemples = [];
      switch (filter) {
        case "home":
          filteredTemples = temples;
          break;
        case "old":
          filteredTemples = temples.filter(t => getYear(t.dedicated) < 1900);
          break;
        case "new":
          filteredTemples = temples.filter(t => getYear(t.dedicated) > 2000);
          break;
        case "large":
          filteredTemples = temples.filter(t => t.area > 90000);
          break;
        case "small":
          filteredTemples = temples.filter(t => t.area < 10000);
          break;
      }

      displayTemples(filteredTemples);
    });
  });
});
