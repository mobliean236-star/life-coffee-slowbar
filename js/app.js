console.log("Life Coffee loaded");



let cart = [];

let selectedProduct = null;



let orderNumber =
localStorage.getItem("orderNumber") || 1;



document.getElementById("order-number").innerHTML =
"ODR" + String(orderNumber).padStart(3,"0");







// OUVRIR POPUP SUCRE


function openSugar(name, price){


selectedProduct = {

name:name,

price:price

};



document.getElementById("sugar-popup").style.display="flex";


}








// AJOUT AU PANIER


function addSugar(){



let sugar =
document.getElementById("sugar").value;



cart.push({


name:selectedProduct.name,


price:selectedProduct.price,


sugar:sugar


});




document.getElementById("sugar-popup").style.display="none";



showCart();


}








// AFFICHER PANIER


function showCart(){


let box =
document.getElementById("cart-items");



let total = 0;



box.innerHTML = "";




if(cart.length === 0){


box.innerHTML="Your cart is empty";


}




cart.forEach((item,index)=>{



total += item.price;



box.innerHTML += `


<div class="cart-item">


<b>${item.name}</b>


<br>


Sugar: ${item.sugar}



<br>


${item.price.toLocaleString()} Kip



<button onclick="removeItem(${index})">

❌

</button>



</div>


`;



});




document.getElementById("cart-total").innerHTML =
total.toLocaleString();



}









// SUPPRIMER PRODUIT


function removeItem(index){


cart.splice(index,1);


showCart();


}









// POPUP CLIENT


function openCustomer(){


if(cart.length === 0){


alert("Your cart is empty");


return;


}



document.getElementById("customer-popup").style.display="flex";


}









// POPUP PAYMENT


function openPayment(){


document.getElementById("customer-popup").style.display="none";



document.getElementById("payment-popup").style.display="flex";


}









// ENVOYER COMMANDE WHATSAPP


function sendOrder(){



let customer =

document.getElementById("customer").value;



let payment =

document.querySelector('input[name="pay"]:checked').value;





let message =

"☕ Life Coffee Slow Bar\n\n";



message +=

"Order : ODR" +

String(orderNumber).padStart(3,"0")

+ "\n";



message +=

"Customer : " + customer + "\n";



message +=

"Payment : " + payment + "\n\n";





let total = 0;




cart.forEach(item=>{



total += item.price;



message +=

item.name +

"\nSugar : " +

item.sugar +

"\n\n";



});





message +=

"Total : " +

total.toLocaleString() +

" Kip";








window.open(

"https://wa.me/8562092747227?text="

+ encodeURIComponent(message)

);



orderNumber++;



localStorage.setItem(

"orderNumber",

orderNumber

);



}









// PANIER MOBILE


function openMobileCart(){


document

.getElementById("cart")

.classList.toggle("show-cart");


}
