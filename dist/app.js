const looks = [
  {
    number: "LIVE RETAILER EDIT",
    name: "Central Perk polish",
    image: "./assets/look-one.png",
    total: "£210.48",
    items: [
      ["H&M", "Rib-knit wool jumper", "£74.99", "crop-knit", "Clothing", "https://www2.hm.com/en_gb/productpage.1316745003.html"],
      ["M&S", "Micro check mini skirt", "£28.00", "crop-skirt", "Clothing", "https://www.marksandspencer.com/micro-check-mini-skirt/p/clp61223700"],
      ["M&S", "Leather trim block heel loafers", "£60.00", "crop-shoes", "Shoes", "https://www.marksandspencer.com/leather-trim-block-heel-loafers/p/clp60774616"],
      ["Accessorize", "14ct gold-plated molten hoops", "£18.00", "crop-jewellery", "Accessories", "https://www.accessorize.com/uk/14ct-gold-plated-molten-hoop-earrings-1001018645.html"],
      ["Calzedonia", "Matt invisible 30 denier tights", "£17.99", "crop-tights", "Clothing", "https://www.calzedonia.com/uk/product/matt_invisible_30_denier_semi-opaque_tights-MIC058.html?dwvar_MIC058_Z_COL_COLLD=019"],
      ["Next", "Burgundy gloss shoulder bag", "£11.50", "crop-bag", "Accessories", "https://www.next.co.uk/style/su897453/w24065"]
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
        <span class="brand-name">${item[0]}</span><span class="live-status">Available</span>
        <h4>${item[1]}</h4>
        <div class="price-row"><strong>${item[2]}</strong><a href="${item[5]}" target="_blank" rel="noopener noreferrer">Shop now ↗</a></div>
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
  if (!/rachel|friends/i.test(query)) {
    showToast("Live shopping is currently connected for the Rachel Green proof of concept.");
    return;
  }
  overlay.hidden = false;
  const details = ["Reading silhouettes, colours and styling cues", "Checking prices and availability", "Building your closest shoppable match"];
  let step = 0;
  const detail = document.querySelector("#loading-detail");
  const interval = setInterval(() => { detail.textContent = details[step++ % details.length]; }, 620);
  setTimeout(() => {
    clearInterval(interval);
    overlay.hidden = true;
    document.querySelector("#results-title").textContent = "Rachel, season one";
    document.querySelector("#results-copy").textContent = "Six visually matched pieces available from UK retailers now, all within your £250 budget.";
    document.querySelector("#results").scrollIntoView({ behavior: "smooth" });
    showToast("6 live products verified and matched to your search.");
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
  const action = event.target.closest("[data-toast]");
  if (action) showToast(action.dataset.toast);
});
