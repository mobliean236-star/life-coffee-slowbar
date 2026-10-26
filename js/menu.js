const products = [
  { name: "Espresso", price: 40000, category: "coffee", description: "A concentrated shot with a rich, lingering finish." },
  { name: "Americano", price: 35000, category: "coffee", best: true, description: "Espresso softened with hot water. Clean, bold and balanced." },
  { name: "Cappuccino", price: 40000, category: "coffee", description: "Espresso, steamed milk and a soft layer of foam." },
  { name: "Latte", price: 40000, category: "coffee", best: true, description: "Smooth espresso blended with silky steamed milk." },
  { name: "Mocha", price: 45000, category: "coffee", description: "A comforting mix of espresso and chocolate." },
  { name: "Vanilla Latte", price: 45000, category: "coffee", description: "Silky latte with a gentle touch of vanilla." },
  { name: "Caramel Latte", price: 45000, category: "coffee", description: "Espresso and milk finished with buttery caramel notes." },
  { name: "Orange Coffee", price: 45000, category: "coffee", description: "Bright citrus notes meet a refreshing coffee finish." },
  { name: "Coconut Coffee", price: 45000, category: "coffee", description: "Our coffee with a tropical, creamy coconut twist." },
  { name: "Matcha Coconut", price: 50000, category: "matcha", description: "Earthy matcha paired with mellow coconut." },
  { name: "Matcha Latte", price: 45000, category: "matcha", best: true, description: "Vibrant matcha whisked into creamy milk." },
  { name: "Matcha Strawberry", price: 50000, category: "matcha", description: "A fruity strawberry layer with distinctive matcha." },
  { name: "Green Tea", price: 35000, category: "matcha", description: "A light, soothing tea with a fresh finish." },
  { name: "Lemon Thai Tea", price: 35000, category: "matcha", description: "Thai tea with a lively citrus lift." },
  { name: "Thai Milk Tea", price: 35000, category: "matcha", description: "Classic Thai tea with a creamy, sweet finish." },
  { name: "Cocoa Strawberry", price: 45000, category: "noncoffee", description: "Chocolate comfort with a bright strawberry twist." },
  { name: "Cocoa Latte", price: 35000, category: "noncoffee", description: "A smooth, chocolatey drink for any moment." },
  { name: "Cocoa Coconut", price: 45000, category: "noncoffee", description: "Rich cocoa balanced with creamy coconut." }
];

const menu = document.getElementById("coffee-menu");
let activeCategory = "coffee";
let searchTerm = "";
let sortMode = "featured";

function showCategory(category) {
  activeCategory = category;
  if (!menu) return;
  menu.replaceChildren();

  document.querySelectorAll(".category-btn").forEach(button => {
    const active = button.dataset.category === category;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  // When the customer searches, search across every category—not only the selected tab.
  let visibleProducts = products.filter(product =>
    (!searchTerm ? product.category === category : true) &&
    (product.name + " " + product.description + " " + product.category).toLowerCase().includes(searchTerm)
  );
  if (sortMode === "price-low") visibleProducts.sort((a,b) => a.price - b.price);
  if (sortMode === "price-high") visibleProducts.sort((a,b) => b.price - a.price);
  if (sortMode === "name") visibleProducts.sort((a,b) => a.name.localeCompare(b.name));
  if (!visibleProducts.length) { const empty = document.createElement("p"); empty.className = "menu-empty"; empty.textContent = "No drinks found. Try another search."; menu.appendChild(empty); return; }
  visibleProducts.forEach(product => {
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

    const description = document.createElement("p");
    description.className = "product-description";
    const laoDescriptions = {
      "A concentrated shot with a rich, lingering finish.":"ເອສເປຣສໂຊເຂັ້ມຂົ້ນ ມີລົດຊາດເຂັ້ມແລະຕິດປາກ.",
      "Espresso softened with hot water. Clean, bold and balanced.":"ເອສເປຣສໂຊຜະສົມນ້ຳຮ້ອນ ລົດຊາດສະອາດ ເຂັ້ມ ແລະ ສົມດຸນ.",
      "Espresso, steamed milk and a soft layer of foam.":"ເອສເປຣສໂຊຜະສົມນົມ ລົດຊາດນຸ່ມນວນ.",
      "Smooth espresso blended with silky steamed milk.":"ເອສເປຣສໂຊລົດຊາດນຸ່ມ ຜະສົມກັບນົມ.",
      "A comforting mix of espresso and chocolate.":"ການຜະສົມທີ່ລົງຕົວຂອງເອສເປຣສໂຊ ແລະ ຊັອກໂກແລັດ.",
      "Silky latte with a gentle touch of vanilla.":"ລາເຕ້ນຸ່ມນວນ ພ້ອມກິ່ນວານິລາອ່ອນໆ.",
      "Espresso and milk finished with buttery caramel notes.":"ເອສເປຣສໂຊ ແລະ ນົມ ພ້ອມລົດຄາຣາເມວຫອມຫວານ.",
      "Bright citrus notes meet a refreshing coffee finish.":"ກິ່ນໝາກກ້ຽງສົດຊື່ນ ຜະສານກັບລົດຊາດກາເຟ.",
      "Our coffee with a tropical, creamy coconut twist.":"ກາເຟພ້ອມລົດໝາກພ້າວເຂັ້ມຂຸ້ນແບບເຂດຮ້ອນ.",
      "Earthy matcha paired with mellow coconut.":"ມັດຊະຫອມລະມຸນ ຄູ່ກັບໝາກພ້າວ.",
      "Vibrant matcha whisked into creamy milk.":"ມັດຊະສີຂຽວສົດໃສ ຜະສົມກັບນົມ.",
      "A fruity strawberry layer with distinctive matcha.":"ສະຕຣໍເບີຣີຫອມຫວານ ຄູ່ກັບມັດຊະທີ່ເປັນເອກະລັກ.",
      "A light, soothing tea with a fresh finish.":"ຊາອ່ອນໆ ດື່ມສະບາຍ ແລະ ສົດຊື່ນ.",
      "Thai tea with a lively citrus lift.":"ຊາໄທພ້ອມລົດໝາກນາວສົດຊື່ນ.",
      "Classic Thai tea with a creamy, sweet finish.":"ຊານົມໄທຄລາສສິກ ຫອມມັນ ແລະ ຫວານນຸ່ມ.",
      "Chocolate comfort with a bright strawberry twist.":"ຊັອກໂກແລັດເຂັ້ມຂຸ້ນ ພ້ອມລົດສະຕຣໍເບີຣີສົດໃສ.",
      "A smooth, chocolatey drink for any moment.":"ເຄື່ອງດື່ມຊັອກໂກແລັດນຸ່ມນວນ ເໝາະກັບທຸກເວລາ.",
      "Rich cocoa balanced with creamy coconut.":"ໂກໂກ້ເຂັ້ມຂົ້ນ ສົມດຸນກັບໝາກພ້າວນຸ່ມນວນ."
    };
    description.textContent = window.lifeCoffeeLanguage === "lo" ? (laoDescriptions[product.description] || product.description) : product.description;

    const price = document.createElement("p");
    price.className = "product-price";
    price.textContent = product.price.toLocaleString("en-US") + " Kip";

    const add = document.createElement("button");
    add.type = "button";
    add.textContent = window.lifeCoffeeLanguage === "lo" ? "ເພີ່ມ" : "ADD";
    add.addEventListener("click", () => openSugar(product.name, product.price));

    card.append(name, description, price, add);
    menu.appendChild(card);
  });
}

document.getElementById("menu-search")?.addEventListener("input", event => { searchTerm = event.target.value.trim().toLowerCase(); showCategory(activeCategory); });
document.getElementById("menu-sort")?.addEventListener("change", event => { sortMode = event.target.value; showCategory(activeCategory); });

showCategory("coffee");

window.addEventListener("life-language-changed", () => showCategory(activeCategory));
