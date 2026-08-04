console.log("Life Coffee loaded");


let cart=[];

let selected=null;


let orderNumber =
localStorage.getItem("orderNumber") || 1;



document.getElementById("order-number").innerHTML =
"ODR"+String(orderNumber).padStart(3,"0");





function openSugar(name,price){


selected={name:name,price:price};


document.getElementById("sugar-popup").style.display="flex";


}




function addSugar(){


cart.push({

name:selected.name,

price:selected.price,

sugar:document.getElementById("sugar").value

});



document.getElementById("sugar-popup").style.display="none";


showCart();

}





function showCart(){


let box=document.getElementById("cart-items");

let total=0;


box.innerHTML="";



cart.forEach((item,index)=>{


total+=item.price;


box.innerHTML+=`

<p>

${item.name}

<br>

Sugar: ${item.sugar}

<button onclick="removeItem(${index})">
❌
</button>

</p>

`;

});


document.getElementById("cart-total").innerHTML =
total.toLocaleString();


}





function removeItem(index){

cart.splice(index,1);

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


let message="☕ Life Coffee Slow Bar\n\n";


message+="Order: ODR"+String(orderNumber).padStart(3,"0");

message+="\nCustomer: "+document.getElementById("customer").value;


message+="\nPayment: "+
document.querySelector('input[name="pay"]:checked').value;


message+="\n\n";



let total=0;


cart.forEach(item=>{


total+=item.price;


message+=item.name+
"\nSugar: "+
item.sugar+
"\n\n";


});



message+="Total: "+total.toLocaleString()+" Kip";




window.open(

"https://wa.me/8562092747227?text="+encodeURIComponent(message)

);



orderNumber++;


localStorage.setItem("orderNumber",orderNumber);


}




function openMobileCart(){

document.getElementById("cart").classList.toggle("show-cart");

}
