const characters = {
  rachel: {
    title: "Rachel, season one",
    copy: "Six visually matched pieces available from UK retailers now, all within your £250 budget.",
    signals: ["Fitted knits", "Mini silhouettes", "Tartan", "Rich neutrals", "’90s prep"],
    referenceImage: "./assets/reference-look.png",
    referenceAlt: "Original 1990s-inspired outfit with cream knit and plaid skirt",
    brief: "Cosy knit + tartan mini",
    briefCopy: "Inspired by early-season coffee-house looks",
    look: {
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
  },
  susie: {
    title: "Susie Glass, power tailoring",
    copy: "Six sharp, shoppable matches from UK retailers — a complete outfit under your £250 budget.",
    signals: ["Sculpted tailoring", "Satin", "Monochrome", "Statement gold", "Power dressing"],
    referenceImage: "./assets/susie-reference.png",
    referenceAlt: "Original crime-drama-inspired power look with black tailoring and ivory satin",
    brief: "Boardroom power play",
    briefCopy: "Inspired by Susie’s commanding country-estate tailoring",
    look: {
      number: "LIVE RETAILER EDIT",
      name: "The Glass effect",
      image: "./assets/susie-look.png",
      total: "£240.97",
      items: [
        ["H&M", "Satin blouse", "£27.99", "crop-blouse", "Clothing", "https://www2.hm.com/en_gb/productpage.1204191001.html"],
        ["H&M", "Tapered-waist blazer", "£64.99", "crop-blazer", "Clothing", "https://www2.hm.com/en_gb/productpage.1202258001.html"],
        ["COS", "Jersey wide-leg trousers", "£75.00", "crop-trousers", "Clothing", "https://www.cos.com/en-gb/women/womenswear/trousers/wideleg/product/jersey-wide-leg-trousers-black-1299415002"],
        ["Zara", "Pointed slingback heels", "£35.99", "crop-slingbacks", "Shoes", "https://www.zara.com/uk/en/pointed-toe-slingback-heels-p12204810.html"],
        ["H&M", "Black sunglasses", "£7.00", "crop-sunglasses", "Accessories", "https://www2.hm.com/en_gb/productpage.0916335008.html"],
        ["Accessorize", "14ct gold-plated molten hoops", "£18.00", "crop-earrings", "Accessories", "https://www.accessorize.com/uk/14ct-gold-plated-molten-hoop-earrings-1001018645.html"]
      ]
    }
  }
};

let currentCharacter = "rachel";
const grid = document.querySelector("#product-grid");
const toast = document.querySelector("#toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2400);
}

function renderLook(look) {
  document.querySelector(".shop-panel .mono").textContent = look.number;
  document.querySelector(".shop-panel-head h3").textContent = look.name;
  document.querySelector(".total strong").textContent = look.total;
  grid.innerHTML = look.items.map((item, itemIndex) => `
    <article class="product-card" data-category="${item[4]}" data-retailer="${item[0]}">
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

function renderCharacter(key) {
  currentCharacter = key;
  const character = characters[key];
  document.querySelector("#results-title").textContent = character.title;
  document.querySelector("#results-copy").textContent = character.copy;
  document.querySelector(".style-signals").innerHTML = character.signals.map(signal => `<span>${signal}</span>`).join("");
  const reference = document.querySelector(".reference-image img");
  reference.src = character.referenceImage;
  reference.alt = character.referenceAlt;
  document.querySelector(".reference-caption h3").textContent = character.brief;
  document.querySelector(".reference-caption > span").textContent = character.briefCopy;
  renderLook(character.look);
  resetFilters();
}

function resetFilters() {
  document.querySelectorAll(".filters > div").forEach(group => {
    group.querySelectorAll(".filter-chip").forEach((chip, index) => chip.classList.toggle("active", index === 0));
  });
}

function applyFilters() {
  const groups = document.querySelectorAll(".filters > div");
  const category = groups[0].querySelector(".filter-chip.active").textContent;
  const retailer = groups[1].querySelector(".filter-chip.active").textContent;
  document.querySelectorAll(".product-card").forEach(card => {
    const categoryMatch = category === "All" || card.dataset.category === category;
    const retailerMatch = retailer === "Any retailer" || card.dataset.retailer === retailer;
    card.style.display = categoryMatch && retailerMatch ? "block" : "none";
  });
}

renderCharacter(currentCharacter);

document.querySelector("#style-search").addEventListener("submit", (event) => {
  event.preventDefault();
  const overlay = document.querySelector("#loading");
  const query = document.querySelector("#character-query").value.trim();
  if (!query) return showToast("Tell us which character you have in mind.");
  const match = /susie|suzie|gentlemen/i.test(query) ? "susie" : /rachel|friends/i.test(query) ? "rachel" : null;
  if (!match) {
    showToast("Try Rachel Green or Susie Glass — both have live shopping edits.");
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
    renderCharacter(match);
    document.querySelector("#results").scrollIntoView({ behavior: "smooth" });
    showToast(`6 live products matched to ${characters[match].title}.`);
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
  applyFilters();
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
