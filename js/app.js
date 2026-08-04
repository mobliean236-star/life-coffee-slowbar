console.log("Life Coffee loaded");


let cart = [];



// ADD PRODUCT

function addToCart(name, price){


let existing = cart.find(item => item.name === name);



if(existing){

existing.quantity++;

}

else{


cart.push({

name:name,

price:price,

quantity:1

});


}



displayCart();


}





// DISPLAY CART

function displayCart(){


const cartItems = document.getElementById("cart-items");

const cartTotal = document.getElementById("cart-total");



cartItems.innerHTML = "";



let total = 0;



if(cart.length === 0){

cartItems.innerHTML =
"<p>Your cart is empty</p>";

}



cart.forEach((item,index)=>{


let itemTotal = item.price * item.quantity;


total += itemTotal;



cartItems.innerHTML += `


<div class="cart-item">


<h3>
${item.name}
</h3>


<p>
${item.price.toLocaleString()} Kip x ${item.quantity}
</p>



<button onclick="increase(${index})">
+
</button>



<button onclick="decrease(${index})">
-
</button>



<button onclick="removeItem(${index})">
❌
</button>


</div>


`;



});



cartTotal.innerHTML =
total.toLocaleString();


}




// PLUS

function increase(index){

cart[index].quantity++;

displayCart();

}





// MINUS

function decrease(index){


if(cart[index].quantity > 1){

cart[index].quantity--;

}

else{

cart.splice(index,1);

}



displayCart();


}





// DELETE

function removeItem(index){


cart.splice(index,1);


displayCart();


}






// WHATSAPP ORDER

function sendWhatsApp(){


if(cart.length === 0){

alert("Your cart is empty");

return;

}



let message =
"☕ Life Coffee Slow Bar Order\n\n";



let total = 0;



cart.forEach(item=>{


let itemTotal =
item.price * item.quantity;



total += itemTotal;



message +=
`${item.quantity}x ${item.name} - ${itemTotal.toLocaleString()} Kip\n`;



});



message +=
`\nTotal: ${total.toLocaleString()} Kip`;




// CHANGE YOUR NUMBER HERE

let phone =
"8562092747227";



let url =
"https://wa.me/" + phone + "?text=" + encodeURIComponent(message);



window.open(url,"_blank");


}
