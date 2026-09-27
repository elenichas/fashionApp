const presets = {
  rachel: {
    title: "Rachel’s tartan mini",
    caption: "Official Friends scene · Season 1",
    image: "https://i.ytimg.com/vi/4c8ORaaVuIw/maxresdefault.jpg",
    source: "https://www.youtube.com/watch?v=4c8ORaaVuIw",
    crop: { x: .38, y: .55, w: .34, h: .42 },
    tags: ["skirt", "tartan", "mini", "pleated", "red", "preppy"],
    fallback: { rgb: [104, 62, 58], edge: .31 },
    products: [
      {
        brand: "Motel at ASOS", name: "Cida tartan mini skirt in red check", price: "£34",
        url: "https://www.asos.com/motel/motel-cida-tartan-mini-skirt-in-red-check/prd/207310487",
        image: "https://images.asos-media.com/products/motel-cida-tartan-mini-skirt-in-red-check/207310487-1-redcheck?wid=513&fit=constrain",
        tags: ["skirt", "tartan", "mini", "pleated", "red", "preppy"], fallback: { rgb: [153, 48, 52], edge: .34 }
      },
      {
        brand: "Nobody’s Child", name: "Vincent black and red tartan pleated mini skirt", price: "£55",
        url: "https://www.nobodyschild.com/products/vincent-skirt-26000148005",
        image: "https://cdn.shopify.com/s/files/1/0640/7005/8155/files/NC_WEB_26000148005_27.jpg?v=1786376835",
        tags: ["skirt", "tartan", "mini", "pleated", "red", "black", "preppy"], fallback: { rgb: [94, 42, 44], edge: .36 }
      },
      {
        brand: "TU at Argos", name: "Dark red pleated tartan check mini skirt", price: "£25",
        url: "https://www.argos.co.uk/product/tuc147877659",
        image: "https://media.4rgos.it/s/Argos/tuc147877659_R_SET?$Main768$&w=620&h=620",
        tags: ["skirt", "tartan", "mini", "pleated", "red", "belted"], fallback: { rgb: [112, 40, 44], edge: .33 }
      },
      {
        brand: "Nobody’s Child", name: "Twiggy green tartan pleated mini skirt", price: "£79",
        url: "https://www.nobodyschild.com/products/twiggy-pleated-mini-skirt-2616914001",
        image: "https://cdn.shopify.com/s/files/1/0640/7005/8155/files/2616914001_384310d7-3400-4567-8c93-60b9c2a4cd19.jpg?v=1787922555",
        tags: ["skirt", "tartan", "mini", "pleated", "green", "preppy"], fallback: { rgb: [69, 78, 55], edge: .32 }
      }
    ]
  },
  susie: {
    title: "Susie’s burgundy blazer",
    caption: "Official Netflix scene · The Gentlemen",
    image: "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQU4v_NFz4bEJIt1vaulZDOQ-JQGgEQqrFjuhEpYJysylWmnermZEd0fVHDG_S46rWnTfWWBXZDyfwYuMCfVT24v88QnzdhasatloFZmXl33LwZjUcxBl-olVVOwbXKF0QDehu7dKlV71Y3N2yH6EblkZG40.jpg?r=a71",
    source: "https://www.netflix.com/tudum/articles/the-gentlemen-season-1-ending-explained",
    crop: { x: 0, y: .25, w: .46, h: .7 },
    tags: ["blazer", "burgundy", "velvet", "tailored", "structured", "strong-shoulder"],
    fallback: { rgb: [96, 29, 38], edge: .25 },
    products: [
      {
        brand: "Mango at ASOS", name: "Velvet co-ord blazer in dark red", price: "£91",
        url: "https://www.asos.com/mango/mango-velvet-co-ord-blazer-in-dark-red/prd/209663918",
        image: "https://images.asos-media.com/products/mango-velvet-co-ord-blazer-in-dark-red/209663918-1-darkred?wid=513&fit=constrain",
        tags: ["blazer", "burgundy", "velvet", "tailored", "structured"], fallback: { rgb: [95, 35, 32], edge: .24 }
      },
      {
        brand: "Mango at ASOS", name: "Iguana tie-waist blazer in maroon", price: "£69.99",
        url: "https://www.asos.com/mango/mango-iguana-tie-waist-blazer-in-maroon/prd/208979934",
        image: "https://images.asos-media.com/products/mango-iguana-tie-waist-blazer-in-maroon/208979934-1-maroon?wid=513&fit=constrain",
        tags: ["blazer", "burgundy", "tailored", "structured", "cinched"], fallback: { rgb: [80, 33, 45], edge: .22 }
      },
      {
        brand: "ASOS DESIGN", name: "Slash-neck cocoon blazer in burgundy", price: "£58.50",
        url: "https://www.asos.com/asos-design/asos-design-slash-neck-cocoon-blazer-in-burgundy/prd/209339692",
        image: "https://images.asos-media.com/products/asos-design-slash-neck-cocoon-blazer-in-burgundy/209339692-1-burgundy?wid=513&fit=constrain",
        tags: ["blazer", "burgundy", "tailored", "strong-shoulder", "cocoon"], fallback: { rgb: [65, 25, 36], edge: .2 }
      },
      {
        brand: "ASOS DESIGN", name: "Tailored relaxed blazer in red", price: "£35",
        url: "https://www.asos.com/asos-design/asos-design-tailored-relaxed-blazer-in-red/prd/208550170",
        image: "https://images.asos-media.com/products/asos-design-tailored-relaxed-blazer-in-red/208550170-1-red?wid=513&fit=constrain",
        tags: ["blazer", "red", "tailored", "relaxed"], fallback: { rgb: [180, 47, 49], edge: .18 }
      }
    ]
  }
};

const ui = {
  referenceTitle: document.querySelector("#reference-title"), referenceImage: document.querySelector("#reference-image"),
  cropBox: document.querySelector("#crop-box"), referenceCaption: document.querySelector("#reference-caption"),
  referenceLink: document.querySelector("#reference-link"), upload: document.querySelector("#reference-upload"),
  grid: document.querySelector("#ranking-grid"), status: document.querySelector("#analysis-status"),
  formula: document.querySelector("#formula"), run: document.querySelector("#run-match"), canvas: document.querySelector("#analysis-canvas"),
  colour: document.querySelector("#colour-weight"), texture: document.querySelector("#texture-weight"), style: document.querySelector("#style-weight"),
  colourOutput: document.querySelector("#colour-output"), textureOutput: document.querySelector("#texture-output"), styleOutput: document.querySelector("#style-output")
};

let activeKey = "rachel";
let customReference = null;
let objectUrl = null;
let cachedReference = null;
let cachedProducts = [];

function rgbToHsv([r, g, b]) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b), d = max - min;
  let h = 0;
  if (d) {
    if (max === r) h = ((g - b) / d) % 6;
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h = (h * 60 + 360) % 360;
  }
  return { h, s: max ? d / max : 0, v: max };
}

function fallbackFeatures(fallback) {
  const hist = Array(12).fill(0);
  const { h } = rgbToHsv(fallback.rgb);
  const bin = Math.floor(h / 30) % 12;
  hist[bin] = .7; hist[(bin + 11) % 12] = .15; hist[(bin + 1) % 12] = .15;
  return { hist, rgb: fallback.rgb, edge: fallback.edge, mode: "fallback" };
}

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Image host blocked pixel access"));
    image.src = url;
  });
}

async function extractFeatures(url, crop, fallback) {
  try {
    const image = await loadImage(url);
    const canvas = ui.canvas;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const sx = Math.max(0, crop.x * image.naturalWidth);
    const sy = Math.max(0, crop.y * image.naturalHeight);
    const sw = Math.min(image.naturalWidth - sx, crop.w * image.naturalWidth);
    const sh = Math.min(image.naturalHeight - sy, crop.h * image.naturalHeight);
    ctx.drawImage(image, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);
    const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const hist = Array(12).fill(0);
    const luminance = new Float32Array(canvas.width * canvas.height);
    let red = 0, green = 0, blue = 0, kept = 0, histTotal = 0;
    for (let i = 0, p = 0; i < data.length; i += 4, p += 1) {
      const rgb = [data[i], data[i + 1], data[i + 2]];
      const hsv = rgbToHsv(rgb);
      luminance[p] = .2126 * rgb[0] + .7152 * rgb[1] + .0722 * rgb[2];
      if (hsv.s < .1 && hsv.v > .88) continue;
      const weight = .25 + hsv.s;
      hist[Math.floor(hsv.h / 30) % 12] += weight;
      histTotal += weight;
      red += rgb[0]; green += rgb[1]; blue += rgb[2]; kept += 1;
    }
    if (kept < 100 || histTotal === 0) throw new Error("Not enough usable pixels");
    for (let i = 0; i < hist.length; i += 1) hist[i] /= histTotal;
    let edgeHits = 0, comparisons = 0;
    for (let y = 0; y < canvas.height - 1; y += 1) {
      for (let x = 0; x < canvas.width - 1; x += 1) {
        const at = y * canvas.width + x;
        const delta = Math.abs(luminance[at] - luminance[at + 1]) + Math.abs(luminance[at] - luminance[at + canvas.width]);
        if (delta > 42) edgeHits += 1;
        comparisons += 1;
      }
    }
    return { hist, rgb: [red / kept, green / kept, blue / kept], edge: edgeHits / comparisons, mode: "pixels" };
  } catch (error) {
    return fallbackFeatures(fallback);
  }
}

function cosine(a, b) {
  let dot = 0, ma = 0, mb = 0;
  for (let i = 0; i < a.length; i += 1) { dot += a[i] * b[i]; ma += a[i] ** 2; mb += b[i] ** 2; }
  return ma && mb ? dot / (Math.sqrt(ma) * Math.sqrt(mb)) : 0;
}

function colourSimilarity(a, b) {
  const distance = Math.sqrt(a.rgb.reduce((sum, channel, i) => sum + (channel - b.rgb[i]) ** 2, 0));
  return Math.max(0, Math.min(1, .7 * cosine(a.hist, b.hist) + .3 * (1 - distance / (Math.sqrt(3) * 255))));
}

function jaccard(a, b) {
  const left = new Set(a), right = new Set(b);
  const intersection = [...left].filter(tag => right.has(tag)).length;
  return intersection / new Set([...left, ...right]).size;
}

function getWeights() {
  const raw = [Number(ui.colour.value), Number(ui.texture.value), Number(ui.style.value)];
  const total = raw.reduce((sum, value) => sum + value, 0) || 1;
  return { colour: raw[0] / total, texture: raw[1] / total, style: raw[2] / total };
}

function updateFormula() {
  ui.colourOutput.value = `${ui.colour.value}%`;
  ui.textureOutput.value = `${ui.texture.value}%`;
  ui.styleOutput.value = `${ui.style.value}%`;
  const weights = getWeights();
  ui.formula.textContent = `Normalised score = ${Math.round(weights.colour * 100)}% colour + ${Math.round(weights.texture * 100)}% texture + ${Math.round(weights.style * 100)}% style tags`;
}

function scoreProducts() {
  if (!cachedReference || !cachedProducts.length) return;
  const preset = presets[activeKey];
  const weights = getWeights();
  const results = preset.products.map((product, index) => {
    const features = cachedProducts[index];
    const colour = colourSimilarity(cachedReference, features);
    const texture = Math.max(0, 1 - Math.min(1, Math.abs(cachedReference.edge - features.edge) / .5));
    const style = jaccard(preset.tags, product.tags);
    const score = weights.colour * colour + weights.texture * texture + weights.style * style;
    return { product, features, colour, texture, style, score };
  }).sort((a, b) => b.score - a.score);
  renderResults(results);
}

function metric(label, value) {
  const percent = Math.round(value * 100);
  return `<div class="metric"><span>${label}</span><b><i style="width:${percent}%"></i></b><em>${percent}</em></div>`;
}

function renderResults(results) {
  ui.grid.innerHTML = results.map((result, index) => `
    <article class="match-card">
      <span class="rank-number">0${index + 1}</span>
      <div class="product-image"><img src="${result.product.image}" alt="${result.product.name}" loading="lazy" /><span class="score-badge">${Math.round(result.score * 100)}% match</span></div>
      <div class="match-info">
        <span class="brand">${result.product.brand}</span>
        <h3>${result.product.name}</h3>
        <div class="price-row"><strong>${result.product.price}</strong><a href="${result.product.url}" target="_blank" rel="noopener noreferrer">Shop item ↗</a></div>
        ${metric("Colour", result.colour)}
        ${metric("Texture", result.texture)}
        ${metric("Style", result.style)}
        <span class="data-mode ${result.features.mode === "fallback" ? "fallback" : ""}">${result.features.mode === "pixels" ? "Live pixels" : "Descriptor fallback"}</span>
      </div>
    </article>`).join("");
}

function setStatus(text, state = "working") {
  ui.status.className = `analysis-status ${state}`;
  ui.status.innerHTML = `<i></i> ${text}`;
}

function positionCrop(crop) {
  Object.assign(ui.cropBox.style, { left: `${crop.x * 100}%`, top: `${crop.y * 100}%`, width: `${crop.w * 100}%`, height: `${crop.h * 100}%` });
}

function showPreset(key) {
  activeKey = key;
  customReference = null;
  if (objectUrl) { URL.revokeObjectURL(objectUrl); objectUrl = null; }
  const preset = presets[key];
  document.querySelectorAll("[data-preset]").forEach(button => button.classList.toggle("active", button.dataset.preset === key));
  ui.referenceTitle.textContent = preset.title;
  ui.referenceImage.src = preset.image;
  ui.referenceCaption.textContent = preset.caption;
  ui.referenceLink.href = preset.source;
  ui.referenceLink.hidden = false;
  ui.cropBox.hidden = false;
  positionCrop(preset.crop);
  runAnalysis();
}

async function runAnalysis() {
  const preset = presets[activeKey];
  const reference = customReference || { image: preset.image, crop: preset.crop, fallback: preset.fallback };
  ui.run.disabled = true;
  ui.grid.innerHTML = '<div class="empty-card">Reading image features…</div>';
  setStatus("Reading reference pixels");
  cachedReference = await extractFeatures(reference.image, reference.crop, reference.fallback);
  setStatus("Comparing four products");
  cachedProducts = await Promise.all(preset.products.map(product => extractFeatures(product.image, { x: 0, y: 0, w: 1, h: 1 }, product.fallback)));
  scoreProducts();
  const liveCount = cachedProducts.filter(item => item.mode === "pixels").length + (cachedReference.mode === "pixels" ? 1 : 0);
  setStatus(`${liveCount}/5 images read live`, "ready");
  ui.run.disabled = false;
}

document.querySelectorAll("[data-preset]").forEach(button => button.addEventListener("click", () => showPreset(button.dataset.preset)));
[ui.colour, ui.texture, ui.style].forEach(input => input.addEventListener("input", () => { updateFormula(); scoreProducts(); }));
ui.run.addEventListener("click", runAnalysis);
ui.upload.addEventListener("change", () => {
  const [file] = ui.upload.files;
  if (!file) return;
  if (objectUrl) URL.revokeObjectURL(objectUrl);
  objectUrl = URL.createObjectURL(file);
  customReference = { image: objectUrl, crop: { x: 0, y: 0, w: 1, h: 1 }, fallback: presets[activeKey].fallback };
  ui.referenceTitle.textContent = `Your image · ${presets[activeKey].title}`;
  ui.referenceImage.src = objectUrl;
  ui.referenceCaption.textContent = "Local image · processed only in this browser";
  ui.referenceLink.hidden = true;
  ui.cropBox.hidden = true;
  runAnalysis();
});

updateFormula();
showPreset("rachel");
