const full = document.querySelector("#full");

const today = new Date(document.lastModified);

full.innerHTML = `last modified: <span class="highlight">${today}</span>`;