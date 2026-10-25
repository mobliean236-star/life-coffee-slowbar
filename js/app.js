console.log("Life Coffee Slow Bar loaded");

const WHATSAPP_NUMBERS = ["8562092747227", "8562052470010", "8562059813736"];
const EXTRA_PRICES = { shot: 15000, oatMilk: 10000 };

let cart = [];
let selectedProduct = null;
let orderNumber = Number.parseInt(localStorage.getItem("orderNumber") || "1", 10);
if (!Number.isFinite(orderNumber) || orderNumber < 1) orderNumber = 1;

function formatKip(amount) {
  return Math.round(amount).toLocaleString("en-US");
}

function refreshOrderNumber() {
  const label = document.getElementById("order-number");
  if (label) label.textContent = "ODR" + String(orderNumber).padStart(3, "0");
}

function openSugar(name, price) {
  selectedProduct = { name, price };
  document.getElementById("sugar").value = "Normal sugar";
  document.getElementById("drink-style").value = "Iced";
  document.getElementById("drink-quantity").value = "1";
  document.getElementById("extra-shot").checked = false;
  document.getElementById("oat-milk").checked = false;
  document.getElementById("sugar-popup").style.display = "flex";
}

function addSugar() {
  if (!selectedProduct) return;

  const sugar = document.getElementById("sugar").value;
  const style = document.getElementById("drink-style").value;
  const quantity = Number.parseInt(document.getElementById("drink-quantity").value, 10) || 1;
  const extraShot = document.getElementById("extra-shot").checked;
  const oatMilk = document.getElementById("oat-milk").checked;
  const extras = [];
  let price = selectedProduct.price;

  if (extraShot) {
    extras.push("Extra shot");
    price += EXTRA_PRICES.shot;
  }
  if (oatMilk) {
    extras.push("Oat milk");
    price += EXTRA_PRICES.oatMilk;
  }

  for (let i = 0; i < quantity; i++) {
    cart.push({ name: selectedProduct.name, basePrice: selectedProduct.price, price, sugar, style, extras: [...extras] });
  }

  selectedProduct = null;
  closePopup("sugar-popup");
  showCart();
}

function showCart() {
  const box = document.getElementById("cart-items");
  let total = 0;
  box.replaceChildren();

  if (cart.length === 0) {
    box.textContent = "Your cart is empty";
  }

  cart.forEach((item, index) => {
    total += item.price;
    const row = document.createElement("div");
    row.className = "cart-item";

    const title = document.createElement("strong");
    title.textContent = item.name;
    const details = document.createElement("div");
    details.className = "cart-item-details";
    details.textContent = item.style + " · Sugar: " + item.sugar + (item.extras.length ? " · " + item.extras.join(", ") : "");
    const bottom = document.createElement("div");
    bottom.className = "cart-item-bottom";
    const price = document.createElement("span");
    price.className = "item-price";
    price.textContent = formatKip(item.price) + " Kip";
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "remove-btn";
    remove.textContent = "Remove";
    remove.setAttribute("aria-label", "Remove " + item.name + " from order");
    remove.addEventListener("click", () => removeItem(index));

    bottom.append(price, remove);
    row.append(title, details, bottom);
    box.appendChild(row);
  });

  document.getElementById("cart-total").textContent = formatKip(total);
  document.getElementById("cart-count").textContent = String(cart.length);
  refreshOrderNumber();
}

function removeItem(index) {
  cart.splice(index, 1);
  showCart();
}

function openCustomer() {
  if (cart.length === 0) {
    alert("Your cart is empty. Please add a drink first.");
    return;
  }
  closeMobileCart();
  document.getElementById("customer-popup").style.display = "flex";
  document.getElementById("customer").focus();
}

function openPayment() {
  const customerInput = document.getElementById("customer");
  const customer = customerInput.value.trim();
  if (!customer) {
    alert("Please enter the customer's name.");
    customerInput.focus();
    return;
  }
  customerInput.value = customer;
  closePopup("customer-popup");
  document.getElementById("payment-popup").style.display = "flex";
}

function sendOrder() {
  if (cart.length === 0) {
    alert("Your cart is empty. Please add a drink first.");
    closePopup("payment-popup");
    return;
  }

  const customer = document.getElementById("customer").value.trim();
  if (!customer) {
    closePopup("payment-popup");
    openCustomer();
    return;
  }

  const selectedPayment = document.querySelector('input[name="pay"]:checked');
  if (!selectedPayment) {
    alert("Please choose a payment method.");
    return;
  }

  const currentOrder = "ODR" + String(orderNumber).padStart(3, "0");
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const lines = [
    "☕ Life Coffee & Slow Bar",
    "",
    "Order: " + currentOrder,
    "Customer: " + customer,
    "Payment method: " + selectedPayment.value,
    "",
    ...cart.flatMap(item => [
      item.name,
      "Style: " + (item.style || "No preference"),
      "Sugar: " + item.sugar,
      ...(item.extras.length ? ["Extras: " + item.extras.join(", ")] : []),
      "Price: " + formatKip(item.price) + " Kip",
      ""
    ]),
    "TOTAL: " + formatKip(total) + " Kip",
    "",
    "Please confirm the order and payment at the counter."
  ];

  const choice = window.prompt(
    "Choose the WhatsApp number for this order:\n1. Main contact: +856 20 9274 7227\n2. Contact 2: +856 20 5247 0010\n3. Contact 3: +856 20 5981 3736\n\nEnter 1, 2, or 3:",
    "1"
  );
  if (choice === null) return;
  const selectedIndex = Number.parseInt(choice.trim(), 10) - 1;
  if (!Number.isInteger(selectedIndex) || selectedIndex < 0 || selectedIndex >= WHATSAPP_NUMBERS.length) {
    alert("Please enter 1, 2, or 3 to choose a WhatsApp contact.");
    return;
  }
  const url = "https://wa.me/" + WHATSAPP_NUMBERS[selectedIndex] + "?text=" + encodeURIComponent(lines.join("\\n"));
  const whatsappWindow = window.open(url, "_blank");
  if (!whatsappWindow) {
    alert("WhatsApp could not be opened. Please allow pop-ups and try again.");
    return;
  }

  orderNumber += 1;
  localStorage.setItem("orderNumber", String(orderNumber));
  cart = [];
  document.getElementById("customer").value = "";
  document.querySelector('input[name="pay"][value="Cash"]').checked = true;
  closePopup("payment-popup");
  showCart();
}

function openMobileCart() {
  document.getElementById("cart").classList.toggle("show-cart");
}

function closeMobileCart() {
  document.getElementById("cart").classList.remove("show-cart");
}

function closePopup(id) {
  const popup = document.getElementById(id);
  if (popup) popup.style.display = "none";
}

document.querySelectorAll(".popup").forEach(popup => {
  popup.addEventListener("click", event => {
    if (event.target === popup) closePopup(popup.id);
  });
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    document.querySelectorAll(".popup").forEach(popup => closePopup(popup.id));
    closeMobileCart();
  }
});

document.querySelectorAll('input[name="pay"]').forEach(option => {
  option.addEventListener("change", () => {
    const qrPanel = document.getElementById("bcel-qr-panel");
    if (qrPanel) qrPanel.hidden = option.value !== "BCEL QR" || !option.checked;
  });
});

refreshOrderNumber();
showCart();