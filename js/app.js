console.log("Life Coffee loaded");


let cart = [];



function addToCart(name, price){


console.log("Added:", name);


cart.push({

name:name,

price:price

});


displayCart();


}





function displayCart(){


const cartItems = document.getElementById("cart-items");

const cartTotal = document.getElementById("cart-total");



cartItems.innerHTML = "";



let total = 0;



if(cart.length === 0){

cartItems.innerHTML = "<p>Your cart is empty</p>";

}




cart.forEach((item,index)=>{


total += item.price;


cartItems.innerHTML += `

<div class="cart-item">


${item.name}

- 

${item.price.toLocaleString()} Kip



<button onclick="removeFromCart(${index})">

❌

</button>


</div>

`;



});



cartTotal.innerHTML = total.toLocaleString();


}





function removeFromCart(index){


cart.splice(index,1);


displayCart();


}
