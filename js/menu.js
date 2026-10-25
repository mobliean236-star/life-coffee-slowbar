const photos = {
  espresso: "https://images.microcms-assets.io/assets/6e4c33ab994e413a8b9082545bbcda3e/9a047d607e7c4039ac89c842625781e4/2021_01_19_Cafe_camp_07_photo_by_juliokoshiishi-2048x1363.jpg.webp",
  americano: "https://tb-static.uber.com/prod/image-proc/processed_images/13254a91adb86c9dbcf4f7b1e8609a2a/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
  latte: "https://wellcoffeeroasters.com/cdn/shop/articles/thewell_011525-59.jpg?v=1757340419",
  matcha: "https://images.microcms-assets.io/assets/6e4c33ab994e413a8b9082545bbcda3e/9a047d607e7c4039ac89c842625781e4/2021_01_19_Cafe_camp_07_photo_by_juliokoshiishi-2048x1363.jpg.webp",
  strawberry: "https://www.verytoronto.com/cdn-cgi/image/width%3D3840%2Cquality%3D80%2Cformat%3Dauto%2Cfit%3Dscale-down/https%3A/storage.verytoronto.com/images/businesses/blu-shaak-coffee.webp",
  thaiTea: "https://tb-static.uber.com/prod/image-proc/processed_images/2472db0b2b4786598c4ac7e58c3bf9de/5283d81c664b43c5f57a3a186d273063.jpeg",
  cocoa: "https://images.deliveryhero.io/image/fd-ph/LH/hbyt-listing.jpg"
};

const products = [
  // COFFEE
  { name: "Espresso", price: 40000, category: "coffee", image: photos.espresso },
  { name: "Americano", price: 35000, category: "coffee", best: true, image: photos.americano },
  { name: "Cappuccino", price: 40000, category: "coffee", image: photos.latte },
  { name: "Latte", price: 40000, category: "coffee", best: true, image: photos.latte },
  { name: "Mocha", price: 45000, category: "coffee", image: photos.cocoa },
  { name: "Vanilla Latte", price: 45000, category: "coffee", image: photos.latte },
  { name: "Caramel Latte", price: 45000, category: "coffee", image: photos.latte },
  { name: "Orange Coffee", price: 45000, category: "coffee", image: photos.americano },
  { name: "Coconut Coffee", price: 45000, category: "coffee", image: photos.americano },

  // MATCHA & TEA
  { name: "Matcha Coconut", price: 50000, category: "matcha", image: photos.matcha },
  { name: "Matcha Latte", price: 45000, category: "matcha", best: true, image: photos.matcha },
  { name: "Matcha Strawberry", price: 50000, category: "matcha", image: photos.strawberry },
  { name: "Green Tea", price: 35000, category: "matcha", image: photos.matcha },
  { name: "Lemon Thai Tea", price: 35000, category: "matcha", image: photos.thaiTea },
  { name: "Thai Milk Tea", price: 35000, category: "matcha", image: photos.thaiTea },

  // NON COFFEE
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
    photo.src = product.image;
    photo.alt = product.name + " drink photo";
    photo.loading = "lazy";
    photo.decoding = "async";
    photo.referrerPolicy = "no-referrer";
    photo.addEventListener("error", () => {
      photo.classList.add("photo-unavailable");
      photo.alt = product.name + " photo unavailable";
    }, { once: true });
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