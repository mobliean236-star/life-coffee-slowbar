console.log("Menu loaded");


const products = [


{
name:"Espresso",
price:40000
},


{
name:"Matcha Coconut",
price:50000
},


{
name:"Americano",
price:35000
},


{
name:"Matcha Latte",
price:45000
},


{
name:"Cappuccino",
price:40000
},


{
name:"Cocoa Strawberry",
price:45000
},


{
name:"Latte",
price:40000
},


{
name:"Cocoa Latte",
price:35000
},


{
name:"Mocha",
price:45000
},


{
name:"Matcha Strawberry",
price:50000
},


{
name:"Vanilla Latte",
price:45000
},


{
name:"Green Tea",
price:35000
},


{
name:"Caramel Latte",
price:45000
},


{
name:"Lemon Thai Tea",
price:35000
},


{
name:"Thai Milk Tea",
price:35000
},


{
name:"Orange Coffee",
price:45000
},


{
name:"Coconut Coffee",
price:45000
},


{
name:"Cocoa Coconut",
price:45000
},


{
name:"Strawberry Milk",
price:35000
}


];



let menu=document.getElementById("coffee-menu");



products.forEach(p=>{


menu.innerHTML += `


<div class="card">


<h3>
${p.name}
</h3>


<p>
${p.price.toLocaleString()} Kip
</p>



<button onclick="openSugar('${p.name}',${p.price})">

ADD

</button>


</div>


`;


});
