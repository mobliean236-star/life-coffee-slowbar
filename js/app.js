console.log("Life Coffee loaded");


let cart=[];


let selected=null;


let order=localStorage.getItem("order") || 1;



document.getElementById("order-number").innerHTML=

"ODR"+String(order).padStart(3,"0");





function openSugar(name,price){


selected={

name:name,

price:price

};


document.getElementById("sugar-popup").style.display="flex";


}





function addSugar(){


let sugar=document.getElementById("sugar").value;



cart.push({

name:selected.name,

price:selected.price,

sugar:sugar

});



document.getElementById("sugar-popup").style.display="none";


showCart();


}






function showCart(){


let box=document.getElementById("cart-items");


let total=0;


box.innerHTML="";



cart.forEach((item,i)=>{


total+=item.price;


box.innerHTML+=`

<p>

${item.name}

<br>

${item.sugar}


<button onclick="deleteItem(${i})">

❌

</button>


</p>

`;

});


document.getElementById("cart-total").innerHTML=

total.toLocaleString();


}




function deleteItem(i){

cart.splice(i,1);

showCart();

}





function openCustomer(){


document.getElementById("customer-popup").style.display="flex";


}





function openPayment(){


document.getElementById("customer-popup").style.display="none";


document.getElementById("payment-popup").style.display="flex";


}







function sendOrder(){


let name=document.getElementById("customer").value;


let pay=document.querySelector('input[name="pay"]:checked').value;



let text=

"☕ Life Coffee Slow Bar\n\n"+

"Order: ODR"+String(order).padStart(3,"0")+

"\nCustomer: "+name+

"\nPayment: "+pay+

"\n\n";




let total=0;



cart.forEach(item=>{


total+=item.price;


text+=

item.name+

"\nSugar: "+

item.sugar+

"\n\n";


});



text+="Total: "+total.toLocaleString()+" Kip";




let phone="8562092747227";



window.open(

"https://wa.me/"+phone+

"?text="+encodeURIComponent(text)

);



order++;


localStorage.setItem("order",order);



document.getElementById("payment-popup").style.display="none";

  function openMobileCart(){

document.getElementById("cart")
.classList.toggle("show-cart");

}


alert("Order sent");


}
