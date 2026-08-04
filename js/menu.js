console.log("Menu loaded");


const coffee = [

{
name:"Espresso",
price:40000,
image:"https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600"
},

{
name:"Americano",
price:35000,
image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600"
},

{
name:"Cappuccino",
price:40000,
image:"https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?w=600"
},

{
name:"Latte",
price:40000,
image:"https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=600"
},

{
name:"Orange Coffee",
price:45000,
best:true,
image:"https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600"
}

];




const menu = document.getElementById("coffee-menu");



coffee.forEach(product => {


menu.innerHTML += `

<div class="card">


<img src="${product.image}">


<h3>
${product.name}
${product.best ? " ⭐" : ""}
</h3>


<p>
${product.price.toLocaleString()} Kip
</p>



<button onclick="addToCart('${product.name}',${product.price})">

ADD

</button>


</div>

`;

});
