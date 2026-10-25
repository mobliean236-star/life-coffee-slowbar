const photos = {
  espresso: "https://images.microcms-assets.io/assets/6e4c33ab994e413a8b9082545bbcda3e/9a047d607e7c4039ac89c842625781e4/2021_01_19_Cafe_camp_07_photo_by_juliokoshiishi-2048x1363.jpg.webp",
  americano: "https://tb-static.uber.com/prod/image-proc/processed_images/13254a91adb86c9dbcf4f7b1e8609a2a/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
  latte: "https://wellcoffeeroasters.com/cdn/shop/articles/thewell_011525-59.jpg?v=1757340419",
  matcha: "https://images.microcms-assets.io/assets/6e4c33ab994e413a8b9082545bbcda3e/9a047d607e7c4039ac89c842625781e4/2021_01_19_Cafe_camp_07_photo_by_juliokoshiishi-2048x1363.jpg.webp",
  strawberry: "https://www.verytoronto.com/cdn-cgi/image/width%3D3840%2Cquality%3D80%2Cformat%3Dauto%2Cfit%3Dscale-down/https%3A/storage.verytoronto.com/images/businesses/blu-shaak-coffee.webp",
  thaiTea: "https://tb-static.uber.com/prod/image-proc/processed_images/2472db0b2b4786598c4ac7e58c3bf9de/5283d81c664b43c5f57a3a186d273063.jpeg",
  cocoa: "https://images.deliveryhero.io/image/fd-ph/LH/hbyt-listing.jpg"
};

// Local SVG fallback ensures a drink illustration still appears if a photo host blocks hotlinking.
function makeDrinkIllustration(product) {
  const name = product.name.toLowerCase();
  let liquid = "#7b4426";
  let top = "#d6b36a";
  let second = "#f1dfbd";
  if (name.includes("matcha") || name.includes("green tea")) { liquid = "#78934c"; top = "#dce9b5"; second = "#f2f0dd"; }
  else if (name.includes("strawberry")) { liquid = "#d77b91"; top = "#f5dce1"; second = "#78934c"; }
  else if (name.includes("thai tea")) { liquid = "#c97532"; top = "#f4dfb4"; second = "#fff2d5"; }
  else if (name.includes("cocoa") || name.includes("mocha")) { liquid = "#5a3026"; top = "#e4c4a0"; second = "#8b5742"; }
  else if (name.includes("espresso")) { liquid = "#3b2117"; top = "#c98b4e"; second = "#4b291b"; }
  else if (name.includes("orange")) { liquid = "#e88b34"; top = "#f7d7a0"; second = "#5a321e"; }
  else if (name.includes("coconut")) { liquid = "#f0e4c9"; top = "#fff9e9"; second = "#6b8e52"; }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 420">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#292821"/><stop offset="1" stop-color="#11110f"/></linearGradient>
      <linearGradient id="drink" x1="0" y1="0" x2="0" y2="1"><stop stop-color="${top}"/><stop offset=".45" stop-color="${liquid}"/><stop offset="1" stop-color="${second}"/></linearGradient>
      <linearGradient id="glass" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#ffffff" stop-opacity=".06"/><stop offset=".28" stop-color="#ffffff" stop-opacity=".42"/><stop offset=".48" stop-color="#ffffff" stop-opacity=".08"/><stop offset=".85" stop-color="#ffffff" stop-opacity=".2"/><stop offset="1" stop-color="#ffffff" stop-opacity=".04"/></linearGradient>
      <filter id="shadow"><feGaussianBlur stdDeviation="12"/></filter>
    </defs>
    <rect width="600" height="420" fill="url(#bg)"/>
    <circle cx="470" cy="75" r="110" fill="#d6b36a" opacity=".06"/>
    <ellipse cx="300" cy="347" rx="130" ry="19" fill="#000" opacity=".5" filter="url(#shadow)"/>
    <ellipse cx="300" cy="342" rx="142" ry="22" fill="#b9a27a" opacity=".18"/>
    <path d="M220 110 L238 321 Q300 349 362 321 L380 110 Z" fill="url(#drink)" stroke="#e9e3d3" stroke-opacity=".7" stroke-width="4"/>
    <path d="M220 110 L238 321 Q300 349 362 321 L380 110 Z" fill="url(#glass)"/>
    <ellipse cx="300" cy="110" rx="80" ry="16" fill="${top}" stroke="#eee7d8" stroke-width="4"/>
    <ellipse cx="300" cy="112" rx="69" ry="10" fill="${liquid}" opacity=".75"/>
    <path d="M250 133 Q258 220 264 294" fill="none" stroke="#fff" stroke-opacity=".48" stroke-width="7" stroke-linecap="round"/>
    <path d="M344 139 Q348 190 345 224" fill="none" stroke="#fff" stroke-opacity=".2" stroke-width="4" stroke-linecap="round"/>
    <path d="M271 100 Q290 85 309 100 Q327 114 344 99" fill="none" stroke="#fff5d8" stroke-width="4" stroke-linecap="round" opacity=".8"/>
    <text x="300" y="385" fill="#d6b36a" font-family="Georgia,serif" font-size="18" letter-spacing="5" text-anchor="middle">LIFE COFFEE</text>
  </svg>`;
  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

const products = [
  { name: "Espresso", price: 40000, category: "coffee", image: photos.espresso },
  { name: "Americano", price: 35000, category: "coffee", best: true, image: photos.americano },
  { name: "Cappuccino", price: 40000, category: "coffee", image: photos.latte },
  { name: "Latte", price: 40000, category: "coffee", best: true, image: photos.latte },
  { name: "Mocha", price: 45000, category: "coffee", image: photos.cocoa },
  { name: "Vanilla Latte", price: 45000, category: "coffee", image: photos.latte },
  { name: "Caramel Latte", price: 45000, category: "coffee", image: photos.latte },
  { name: "Orange Coffee", price: 45000, category: "coffee", image: photos.americano },
  { name: "Coconut Coffee", price: 45000, category: "coffee", image: photos.americano },
  { name: "Matcha Coconut", price: 50000, category: "matcha", image: photos.matcha },
  { name: "Matcha Latte", price: 45000, category: "matcha", best: true, image: photos.matcha },
  { name: "Matcha Strawberry", price: 50000, category: "matcha", image: photos.strawberry },
  { name: "Green Tea", price: 35000, category: "matcha", image: photos.matcha },
  { name: "Lemon Thai Tea", price: 35000, category: "matcha", image: photos.thaiTea },
  { name: "Thai Milk Tea", price: 35000, category: "matcha", image: photos.thaiTea },
  { name: "Cocoa Strawberry", price: 45000, category: "noncoffee", image: photos.strawberry },
  { name: "Cocoa Latte", price: 35000, category: "noncoffee", image: photos.cocoa },
  { name: "Cocoa Coconut", price: 45000, category: "noncoffee", image: photos.cocoa }
];

const menu = document.getElementById("coffee-menu");

function showCategory(category) {
  if (!menu) return;
  menu.replaceChildren();

  document.querySelectorAll(".category-btn").forEach(button => {
    const active = button.dataset.category === category;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  products.filter(product => product.category === category).forEach(product => {
    const card = document.createElement("article");
    card.className = "card";

    const photo = document.createElement("img");
    photo.className = "drink-photo";
    photo.alt = product.name + " drink";
    photo.loading = "lazy";
    photo.decoding = "async";
    photo.src = makeDrinkIllustration(product);
    const fallbackSrc = photo.src;

    if (product.image) {
      const testPhoto = new Image();
      testPhoto.onload = () => { photo.src = product.image; };
      testPhoto.onerror = () => { photo.src = fallbackSrc; };
      testPhoto.referrerPolicy = "no-referrer";
      testPhoto.src = product.image;
    }
    card.appendChild(photo);

    if (product.best) {
      const badge = document.createElement("span");
      badge.className = "best";
      badge.textContent = "★ BEST SELLER";
      card.appendChild(badge);
    }

    const name = document.createElement("h3");
    name.textContent = product.name;

    const price = document.createElement("p");
    price.textContent = product.price.toLocaleString("en-US") + " Kip";

    const add = document.createElement("button");
    add.type = "button";
    add.textContent = "ADD";
    add.addEventListener("click", () => openSugar(product.name, product.price));

    card.append(name, price, add);
    menu.appendChild(card);
  });
}

showCategory("coffee");
