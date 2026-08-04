console.log("Life Coffee loaded");


let cart = [];


let orderNumber =
localStorage.getItem("orderNumber") || 1;



document.getElementById("order-number").innerHTML =
"ODR" + String(orderNumber).padStart(3,"0");





function addToCart(name,price){


let sugar =
document.getElementById("sugar-"+name).value;



let existing =
cart.find(item =>
item.name === name &&
item.sugar === sugar
);



if(existing){

existing.quantity++;

}else{


cart.push({

name:name,

price:price,

sugar:sugar,

quantity:1

});


}


displayCart();

}




function displayCart(){


let box =
document.getElementById("cart-items");


let totalBox =
document.getElementById("cart-total");


box.innerHTML="";


let total=0;



if(cart.length===0){

box.innerHTML=
"<p>Your cart is empty</p>";

}




cart.forEach((item,index)=>{


let itemTotal =
item.price * item.quantity;


total += itemTotal;



box.innerHTML += `

<div class="cart-item">

<b>
${item.quantity}x ${item.name}
</b>

<br>

Sugar:
${item.sugar}


<button onclick="removeItem(${index})">
❌
</button>


</div>

`;



});


totalBox.innerHTML =
total.toLocaleString();


}





function removeItem(index){

cart.splice(index,1);

displayCart();

}






function sendWhatsApp(){



if(cart.length===0){

alert("Your cart is empty");

return;

}



let customer =
document.getElementById("customer-name").value;



let payment =
document.querySelector(
'input[name="payment"]:checked'
).value;




let confirmOrder =
confirm(

"☕ Confirm order?\n\n"+

"Customer: "+
customer+

"\nPayment: "+
payment

);



if(!confirmOrder){

return;

}




let message =

"☕ Life Coffee Slow Bar\n\n"+

"Order: ODR"+
String(orderNumber).padStart(3,"0")+

"\nCustomer: "+
customer+

"\nPayment: "+
payment+

"\n\n";





let total=0;



cart.forEach(item=>{


let itemTotal =
item.price * item.quantity;


total += itemTotal;



message +=

item.quantity+
"x "+
item.name+

"\nSugar: "+
item.sugar+

"\n\n";


});



message +=

"Total: "+
total.toLocaleString()+
" Kip";





let phone =
"8562092747227";



window.open(

"https://wa.me/"+
phone+
"?text="+
encodeURIComponent(message),

"_blank"

);




orderNumber++;


localStorage.setItem(
"orderNumber",
orderNumber
);



alert("Order sent ✅");


}
