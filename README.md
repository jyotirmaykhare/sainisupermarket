# Saini Supermarket — website redesign

A responsive, multi-page brand and product-showcase website for Saini Supermarket, the neighbourhood supermarket in Baltana, Zirakpur. Built with plain HTML, CSS and JavaScript; no build step or external UI library is required.

## Pages

- `index.html` — home, category mosaic, product showcase, fresh range, store highlights, about, feedback placeholder and visit section
- `categories.html` — all eight supermarket categories
- `products.html` — searchable/filterable showcase; displays no prices and has no purchasing flow
- `product.html?id=...` — individual product-information page
- `offers.html` — store/category highlights only; no invented discounts or online offers
- `about.html` — local store story and values
- `visit.html` — locality, directions and visit information
- `contact.html` — contact details and an enquiry-form preview

## Run locally

From this folder, start any static web server. For example:

```bash
python3 -m http.server 8000 --bind 0.0.0.0
```

Then open `http://localhost:8000`.

## Store details to verify before launch

The reference website provides the location as **Baltana, Zirakpur, Punjab**, but does not provide a confirmed street address, phone/WhatsApp number, email or current opening hours. The redesigned site calls these out instead of inventing them. Please add verified details to `script.js`, `contact.html`, `visit.html` and the structured data in `index.html` before publishing. The map preview is an illustration; its directions link searches Google Maps for Saini Supermarket in Baltana, Zirakpur.

Customer reviews are not fabricated. The home page has a clearly marked, editable review placeholder. The contact form is a front-end preview and needs an email/WhatsApp endpoint before it can receive submissions.

## Product showcase

Product names, categories and pack information are based on the reference site's example catalog. Products are browse-only. There are no prices, cart controls, quantity selectors, checkout routes or online payment flows.
# sainisupermarket
