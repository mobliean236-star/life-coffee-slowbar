console.log("Life Coffee loaded");


let cart=[];

let currentProduct=null;


let orderNumber =
localStorage.getItem("orderNumber") || 1;



document.getElementById("order-number").innerHTML =
"ODR"+String(orderNumber).padStart(3,"0");





// OPEN SUGAR POPUP

function openSugarPopup(name,price){


currentProduct={

name:name,

price:price

};


document.getElementById("sugar-popup").style.display="flex";


}





// ADD AFTER SUGAR

function confirmSugar(){


let sugar =
document.getElementById("sugar-choice").value;



cart.push({

name:currentProduct.name,

price:currentProduct.price,

sugar:sugar,

quantity:1

});



document.getElementById("sugar-popup").style.display="none";


displayCart();


}







function displayCart(){


let box=
document.getElementById("cart-items");


let totalBox=
document.getElementById("cart-total");


box.innerHTML="";


let total=0;



cart.forEach((item,index)=>{


total += item.price;



box.innerHTML += `


<div class="cart-item">


${item.name}

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





// CUSTOMER POPUP

function openCustomerPopup(){


document.getElementById("customer-popup").style.display="flex";


}




// PAYMENT POPUP

function openPaymentPopup(){


document.getElementById("customer-popup").style.display="none";


document.getElementById("payment-popup").style.display="flex";


}







function sendWhatsApp(){



let customer =
document.getElementById("customer-name").value;



let payment =
document.querySelector(
'input[name="payment"]:checked'
).value;



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


total += item.price;


message +=

item.name+

"\nSugar: "+
item.sugar+

"\n\n";


});



message +=

"Total: "+
total.toLocaleString()+
" Kip";




let phone="8562092747227";



window.open(

"https://wa.me/"+phone+
"?text="+encodeURIComponent(message),

"_blank"

);



orderNumber++;


localStorage.setItem(
"orderNumber",
orderNumber
);



document.getElementById("payment-popup").style.display="none";


alert("Order sent ✅");


}
