<div align="center">

# Scene Stealer

### Character-inspired style, ready to shop

An editorial fashion-discovery prototype that turns memorable screen outfits into shoppable looks — with a second, transparent route that experiments with real visual-similarity scoring.

[Open the polished demo](https://scene-stealer-style.eleni-133.chatgpt.site/) · [Try the Visual Matching Lab](https://scene-stealer-style.eleni-133.chatgpt.site/experiment.html)

<sub>The hosted preview is currently owner-private and may ask for a ChatGPT login.</sub>

</div>

---

## The idea

Describe a fictional character, season or scene and Scene Stealer translates the costume into real products you can buy online. The current prototype explores two complementary versions of that idea:

| Experience | Purpose | What it demonstrates |
| --- | --- | --- |
| **Polished demo** | A convincing consumer-facing product | Rachel Green and Susie Glass editorial flows, real scene references, real retailer products and styled alternatives |
| **Visual Matching Lab** | An inspectable technical experiment | Live pixel features, garment tags, adjustable scoring weights and an explainable product ranking |

Keeping the routes separate lets the main experience feel finished while the lab can be honest about what is automated, what is curated and where browser restrictions affect the result.

## What is working

- Two complete character flows: Rachel Green from *Friends* and Susie Glass from *The Gentlemen*.
- Real product names, images, prices and outbound retailer links rather than invented catalogue items.
- Multiple alternatives for the key garment in each look.
- Official scene references linked back to their source.
- A browser-based visual matcher with an exposed score breakdown.
- Adjustable weights for colour, texture and style attributes.
- Local screenshot analysis: uploaded images stay inside the browser and are never sent to a server.
- Responsive layouts for desktop and mobile.

## How the matching experiment works

The lab is intentionally small and understandable. It does not claim to be a trained fashion-recognition model.

For each reference and candidate image it calculates:

1. **Colour similarity** — a 12-bin hue histogram plus average RGB distance.
2. **Texture similarity** — edge density estimated from neighbouring luminance changes.
3. **Style similarity** — Jaccard similarity across explicit garment tags such as `tartan`, `pleated`, `velvet` and `tailored`.

The final ranking is:

```text
score = colour weight × colour similarity
      + texture weight × texture similarity
      + style weight × style similarity
```

The weights are normalised before scoring, so changing a slider re-ranks the products immediately. Each result displays its total match score and the three component scores.

### Pixel access and fallbacks

Image analysis runs live when the source server allows cross-origin pixel access. Some retailer CDNs block this in the browser. When that happens, Scene Stealer uses a stored colour-and-edge descriptor and labels the card **Descriptor fallback** instead of pretending the pixels were read live.

This distinction is part of the experiment: the UI exposes the limitation rather than hiding it.

## Technology

The project is deliberately lightweight:

- Semantic HTML
- Responsive CSS
- Vanilla JavaScript
- Canvas API for image feature extraction
- No frontend framework, build step or analytics
- Static hosting through OpenAI Sites

All matching logic runs client-side in [`dist/experiment.js`](dist/experiment.js).

## Run locally

No dependencies are required. From the repository root:

```bash
python3 -m http.server 4173 --directory dist
```

Then open:

- Polished demo: `http://localhost:4173/`
- Visual Matching Lab: `http://localhost:4173/experiment.html`

Serving the files over HTTP is recommended because browsers apply additional restrictions to images and canvas operations opened directly from `file://` URLs.

## Project structure

```text
.
├── .openai/
│   └── hosting.json       # Static hosting configuration
├── dist/
│   ├── index.html         # Polished character-shopping experience
│   ├── styles.css         # Main experience styling
│   ├── app.js             # Main experience interactions and catalogue data
│   ├── experiment.html    # Visual Matching Lab interface
│   ├── experiment.css     # Lab styling
│   └── experiment.js      # Feature extraction, scoring and ranking
└── README.md
```

## What is curated vs algorithmic?

| Element | Polished demo | Visual Matching Lab |
| --- | --- | --- |
| Character and scene selection | Curated | Curated presets or a local upload |
| Product discovery | Curated real products | Curated candidate set |
| Product ordering | Editorial | Calculated at runtime |
| Colour and texture comparison | Presented as product UX | Computed from pixels when permitted |
| Garment understanding | Curated copy | Explicit, inspectable tags |

The experiment therefore proves the **ranking layer**, not autonomous internet-wide product discovery. A production version would add a regularly refreshed retailer catalogue, automated garment detection, vector embeddings and stock verification.

## Limitations

- Retailer prices, stock and URLs can change after they are checked.
- Product candidates are currently assembled by hand; the prototype does not scrape the entire web.
- Cross-origin rules sometimes prevent live analysis of retailer images.
- The scene crop is preset rather than produced by an object-detection model.
- Visual similarity does not guarantee identical fabric, fit or construction.

## Possible next steps

- Build a small product ingestion service using retailer feeds or approved shopping APIs.
- Replace manual crops with garment segmentation or object detection.
- Compare CLIP-style image embeddings alongside the transparent baseline.
- Add size, budget, region and in-stock filters.
- Record product freshness and automatically hide stale links.
- Evaluate rankings against human similarity judgements.

## Credits and disclaimer

This is a non-commercial university-style prototype. Character names, programme imagery, trademarks and product photography belong to their respective owners and are referenced from their original sources. Scene Stealer is not affiliated with Netflix, *Friends*, *The Gentlemen* or the featured retailers.

