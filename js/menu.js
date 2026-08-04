console.log("Menu loaded");


const coffee=[

{
name:"Espresso",
price:40000
},

{
name:"Americano",
price:35000
},

{
name:"Cappuccino",
price:40000
},

{
name:"Latte",
price:40000
},

{
name:"Orange Coffee",
price:45000
},

{
name:"Coconut Coffee",
price:45000
}

];



const menu=document.getElementById("coffee-menu");


coffee.forEach(product=>{


menu.innerHTML += `


<div class="card">


<h3>
${product.name}
</h3>


<p>
${product.price.toLocaleString()} Kip
</p>



<button onclick="openSugarPopup('${product.name}',${product.price})">

ADD

</button>


</div>


`;


});
