console.log("Life Coffee loaded");


let cart = [];



// Ajouter au panier

function addToCart(name, price){


const existing = cart.find(item => item.name === name);



if(existing){

existing.quantity++;

}else{


cart.push({

name:name,

price:price,

quantity:1

});


}



displayCart();


}





// Afficher panier

function displayCart(){


const cartItems = document.getElementById("cart-items");

const cartTotal = document.getElementById("cart-total");


cartItems.innerHTML = "";


let total = 0;



if(cart.length === 0){

cartItems.innerHTML = "<p>Your cart is empty</p>";

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



cartTotal.innerHTML = total.toLocaleString();


}




// augmenter quantité

function increase(index){

cart[index].quantity++;

displayCart();

}





// diminuer quantité

function decrease(index){


if(cart[index].quantity > 1){

cart[index].quantity--;

}else{

cart.splice(index,1);

}


displayCart();


}




// supprimer

function removeItem(index){


cart.splice(index,1);


displayCart();


}
