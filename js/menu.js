console.log("Menu loaded");


const products = [


{
name:"Espresso",
price:40000,
category:"coffee"
},


{
name:"Americano",
price:35000,
category:"coffee"
},


{
name:"Cappuccino",
price:40000,
category:"coffee"
},


{
name:"Latte",
price:40000,
category:"coffee"
},


{
name:"Mocha",
price:45000,
category:"coffee"
},


{
name:"Vanilla Latte",
price:45000,
category:"coffee"
},


{
name:"Caramel Latte",
price:45000,
category:"coffee"
},


{
name:"Orange Coffee",
price:45000,
category:"coffee",
best:true
},


{
name:"Coconut Coffee",
price:45000,
category:"coffee",
best:true
},




{
name:"Matcha Coconut",
price:50000,
category:"matcha"
},


{
name:"Matcha Latte",
price:45000,
category:"matcha"
},


{
name:"Matcha Strawberry",
price:50000,
category:"matcha"
},


{
name:"Green Tea",
price:35000,
category:"matcha"
},





{
name:"Cocoa Strawberry",
price:45000,
category:"noncoffee"
},


{
name:"Cocoa Latte",
price:35000,
category:"noncoffee"
},


{
name:"Cocoa Coconut",
price:45000,
category:"noncoffee"
},


{
name:"Thai Milk Tea",
price:35000,
category:"noncoffee"
},


{
name:"Lemon Thai Tea",
price:35000,
category:"noncoffee"
},


{
name:"Strawberry Milk",
price:35000,
category:"noncoffee"
}



];





const menu = document.getElementById("coffee-menu");





function showCategory(category){


menu.innerHTML = "";



products

.filter(product => product.category === category)

.forEach(product => {



menu.innerHTML += `


<div class="card">



${product.best ? "<span class='best'>BEST SELLER</span>" : ""}



<h3>

${product.name}

</h3>




<p>

${product.price.toLocaleString()} Kip

</p>




<button onclick="openSugar('${product.name}',${product.price})">

ADD

</button>



</div>


`;



});



}




// catégorie affichée au démarrage

showCategory("coffee");
