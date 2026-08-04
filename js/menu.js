console.log("Menu loaded");


const coffee = [

{
name:"Espresso",
price:35000,
image:"https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600"
},

{
name:"Americano",
price:30000,
image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600"
},

{
name:"Cappuccino",
price:35000,
image:"https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?w=600"
},

{
name:"Latte",
price:35000,
image:"https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=600"
},

{
name:"Orange Coffee",
price:45000,
image:"https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600"
}

];



const menu = document.getElementById("coffee-menu");



coffee.forEach(item => {


menu.innerHTML += `

<div class="card">

<img src="${item.image}" alt="${item.name}">

<h3>${item.name}</h3>

<p>${item.price.toLocaleString()} Kip</p>

<button>
ADD
</button>

</div>

`;


});
