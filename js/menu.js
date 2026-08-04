console.log("Menu loaded");


const coffee = [

{
name:"Espresso",
price:40000,
image:"images/espresso.jpg"
},

{
name:"Americano",
price:35000,
image:"images/americano.jpg"
},

{
name:"Cappuccino",
price:40000,
image:"images/cappuccino.jpg"
},

{
name:"Latte",
price:40000,
image:"images/latte.jpg"
},

{
name:"Mocha",
price:45000,
image:"images/mocha.jpg"
},

{
name:"Vanilla Latte",
price:45000,
image:"images/vanilla-latte.jpg"
},

{
name:"Caramel Latte",
price:45000,
image:"images/caramel-latte.jpg"
},

{
name:"Orange Coffee",
price:45000,
best:true,
image:"images/orange-coffee.jpg"
},

{
name:"Coconut Coffee",
price:45000,
best:true,
image:"images/coconut-coffee.jpg"
}

];





const nonCoffee = [

{
name:"Matcha Coconut",
price:50000,
image:"images/matcha-coconut.jpg"
},

{
name:"Matcha Latte",
price:45000,
image:"images/matcha-latte.jpg"
},

{
name:"Matcha Strawberry",
price:50000,
image:"images/matcha-strawberry.jpg"
},

{
name:"Cocoa Strawberry",
price:45000,
image:"images/cocoa-strawberry.jpg"
},

{
name:"Cocoa Latte",
price:35000,
image:"images/cocoa-latte.jpg"
},

{
name:"Cocoa Coconut",
price:45000,
image:"images/cocoa-coconut.jpg"
},

{
name:"Green Tea",
price:35000,
image:"images/green-tea.jpg"
},

{
name:"Thai Milk Tea",
price:35000,
image:"images/thai-milk-tea.jpg"
},

{
name:"Lemon Thai Tea",
price:35000,
image:"images/lemon-thai-tea.jpg"
},

{
name:"Strawberry Milk",
price:35000,
image:"images/strawberry-milk.jpg"
}

];





const extras = [

{
name:"+ Extra Shot",
price:15000
},

{
name:"+ Oat Milk",
price:10000
}

];





const menu = document.getElementById("coffee-menu");


const products = [
...coffee,
...nonCoffee
];



products.forEach(product => {


menu.innerHTML += `

<div class="card">

<img src="${product.image}" alt="${product.name}">


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
