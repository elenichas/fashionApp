const looks = [
  {
    number: "LOOK 01",
    name: "Central Perk polish",
    image: "./assets/look-one.png",
    total: "£167.94",
    items: [
      ["H&M", "Rib-knit mock-neck jumper", "£24.99", "crop-knit", "Clothing"],
      ["Zara", "Check pleated mini skirt", "£35.99", "crop-skirt", "Clothing"],
      ["Mango", "Leather-effect penny loafers", "£49.99", "crop-shoes", "Shoes"],
      ["Accessorize", "Small hoop earrings", "£12.00", "crop-jewellery", "Accessories"],
      ["Monki", "Sheer 30 denier tights", "£8.99", "crop-tights", "Clothing"],
      ["& Other Stories", "Buckled shoulder bag", "£35.98", "crop-bag", "Accessories"]
    ]
  },
  {
    number: "LOOK 02",
    name: "The apartment edit",
    image: "./assets/look-two.png",
    total: "£181.45",
    items: [
      ["Uniqlo", "Soft cropped cardigan", "£29.90", "crop-knit", "Clothing"],
      ["COS", "A-line mini skirt", "£55.00", "crop-skirt", "Clothing"],
      ["M&S", "Leather Mary Jane shoes", "£45.00", "crop-shoes", "Shoes"],
      ["Orelia", "Fine pendant necklace", "£18.00", "crop-jewellery", "Accessories"],
      ["Calzedonia", "Sheer black tights", "£9.99", "crop-tights", "Clothing"],
      ["Pull&Bear", "Minimal shoulder bag", "£23.56", "crop-bag", "Accessories"]
    ]
  }
];

let currentLook = 0;
const grid = document.querySelector("#product-grid");
const toast = document.querySelector("#toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2400);
}

function renderLook(index) {
  const look = looks[index];
  document.querySelector(".shop-panel .mono").textContent = look.number;
  document.querySelector(".shop-panel-head h3").textContent = look.name;
  document.querySelector(".total strong").textContent = look.total;
  grid.innerHTML = look.items.map((item, itemIndex) => `
    <article class="product-card" data-category="${item[4]}">
      <button class="heart" type="button" aria-label="Save ${item[1]}">
        <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.7-7.5 1.1-1.1a5.5 5.5 0 0 0 0-7.8z"></path></svg>
      </button>
      <div class="product-shot ${item[3]}"><img src="${look.image}" alt="${item[1]}" /></div>
      <div class="product-info">
        <span class="brand-name">${item[0]}</span>
        <h4>${item[1]}</h4>
        <div class="price-row"><strong>${item[2]}</strong><a href="#" data-product="${item[1]}">View item ↗</a></div>
      </div>
    </article>
  `).join("");
}

renderLook(currentLook);

document.querySelector("#style-search").addEventListener("submit", (event) => {
  event.preventDefault();
  const overlay = document.querySelector("#loading");
  const query = document.querySelector("#character-query").value.trim();
  if (!query) return showToast("Tell us which character you have in mind.");
  overlay.hidden = false;
  const details = ["Reading silhouettes, colours and styling cues", "Checking prices and availability", "Building your closest shoppable match"];
  let step = 0;
  const detail = document.querySelector("#loading-detail");
  const interval = setInterval(() => { detail.textContent = details[step++ % details.length]; }, 620);
  setTimeout(() => {
    clearInterval(interval);
    overlay.hidden = true;
    const character = query.split(/from|in|—|,/i)[0].trim();
    document.querySelector("#results-title").textContent = `${character || "Your character"}, decoded`;
    document.querySelector("#results-copy").textContent = "We found the strongest visual signals and matched them to pieces currently available within your budget.";
    document.querySelector("#results").scrollIntoView({ behavior: "smooth" });
    showToast("18 available pieces matched to your search.");
  }, 2200);
});

document.querySelectorAll(".quick-prompts button").forEach(button => button.addEventListener("click", () => {
  document.querySelector("#character-query").value = `${button.textContent} — find me a complete everyday outfit`;
  document.querySelector("#character-query").focus();
}));

document.querySelector("#filter-button").addEventListener("click", (event) => {
  const filters = document.querySelector("#filters");
  filters.hidden = !filters.hidden;
  event.currentTarget.setAttribute("aria-expanded", String(!filters.hidden));
});

document.querySelectorAll(".filter-chip").forEach(button => button.addEventListener("click", () => {
  const group = button.parentElement;
  group.querySelectorAll(".filter-chip").forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  const value = button.textContent;
  document.querySelectorAll(".product-card").forEach(card => {
    card.style.display = value === "All" || value === "Any retailer" || card.dataset.category === value || card.querySelector(".brand-name").textContent === value ? "block" : "none";
  });
}));

document.querySelector("#view-alt").addEventListener("click", () => {
  currentLook = (currentLook + 1) % looks.length;
  renderLook(currentLook);
  showToast(currentLook ? "Showing a softer monochrome match." : "Back to the closest overall match.");
});

document.querySelector("#save-search").addEventListener("click", (event) => {
  event.currentTarget.classList.toggle("saved");
  const saved = event.currentTarget.classList.contains("saved");
  document.querySelector(".saved-count").textContent = saved ? "1" : "0";
  event.currentTarget.lastChild.textContent = saved ? " Saved" : " Save search";
  showToast(saved ? "Search saved to your style board." : "Search removed from saved looks.");
});

document.addEventListener("click", (event) => {
  const heart = event.target.closest(".heart");
  if (heart) {
    heart.classList.toggle("saved");
    showToast(heart.classList.contains("saved") ? "Item saved." : "Item removed.");
  }
  const product = event.target.closest("[data-product]");
  if (product) {
    event.preventDefault();
    showToast(`${product.dataset.product} is a demo listing in this prototype.`);
  }
  const action = event.target.closest("[data-toast]");
  if (action) showToast(action.dataset.toast);
});
