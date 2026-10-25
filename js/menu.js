const products = [
  // COFFEE
  { name: "Espresso", price: 40000, category: "coffee" },
  { name: "Americano", price: 35000, category: "coffee", best: true },
  { name: "Cappuccino", price: 40000, category: "coffee" },
  { name: "Latte", price: 40000, category: "coffee", best: true },
  { name: "Mocha", price: 45000, category: "coffee" },
  { name: "Vanilla Latte", price: 45000, category: "coffee" },
  { name: "Caramel Latte", price: 45000, category: "coffee" },
  { name: "Orange Coffee", price: 45000, category: "coffee" },
  { name: "Coconut Coffee", price: 45000, category: "coffee" },

  // MATCHA & TEA
  { name: "Matcha Coconut", price: 50000, category: "matcha" },
  { name: "Matcha Latte", price: 45000, category: "matcha", best: true },
  { name: "Matcha Strawberry", price: 50000, category: "matcha" },
  { name: "Green Tea", price: 35000, category: "matcha" },
  { name: "Lemon Thai Tea", price: 35000, category: "matcha" },
  { name: "Thai Milk Tea", price: 35000, category: "matcha" },

  // NON COFFEE
  { name: "Cocoa Strawberry", price: 45000, category: "noncoffee" },
  { name: "Cocoa Latte", price: 35000, category: "noncoffee" },
  { name: "Cocoa Coconut", price: 45000, category: "noncoffee" }
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

  const filteredProducts = products.filter(product => product.category === category);
  filteredProducts.forEach(product => {
    const card = document.createElement("article");
    card.className = "card";

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