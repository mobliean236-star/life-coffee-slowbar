console.log("Menu loaded");


const products=[


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



let menu=document.getElementById("coffee-menu");



products.forEach(p=>{


menu.innerHTML += `


<div class="card">


<h3>${p.name}</h3>


<p>
${p.price.toLocaleString()} Kip
</p>


<button onclick="openSugar('${p.name}',${p.price})">

ADD

</button>


</div>


`;


});
