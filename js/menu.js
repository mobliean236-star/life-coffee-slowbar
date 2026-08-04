console.log("Menu loaded");


const coffee = [

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
name:"Mocha",
price:45000
},

{
name:"Orange Coffee",
price:45000,
best:true
},

{
name:"Coconut Coffee",
price:45000
}

];



const menu = document.getElementById("coffee-menu");



coffee.forEach(product => {


menu.innerHTML += `


<div class="card">


<h3>
${product.name}
${product.best ? " ⭐" : ""}
</h3>


<p>
${product.price.toLocaleString()} Kip
</p>



<label>
Sugar:
</label>


<select id="sugar-${product.name}">

<option>
Normal sugar
</option>

<option>
Less sugar
</option>

<option>
No sugar
</option>

<option>
Extra sugar
</option>


</select>



<button onclick="addToCart('${product.name}',${product.price})">

ADD

</button>



</div>


`;

});
