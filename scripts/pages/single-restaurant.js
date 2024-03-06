//get the id from the URI
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const restaurantID=urlParams.get('id')

const imageContainer=document.getElementById('image-container');
const localRestaurants=JSON.parse(window.localStorage.getItem('restaurants'))
const infoContainer=document.getElementById('info-container');

let restaurant={};




const fetchRestaurant=()=>{
    for(let i = 0;i<localRestaurants.length;i++){
        if(i==restaurantID){
            restaurant=localRestaurants[i]
            
            break;
        }
    }
}
fetchRestaurant()

imageContainer.innerHTML=`<img class="image" src=${restaurant.img2} />`;
infoContainer.innerHTML=`<h2 class="special-font">${restaurant.name}</h2>
<p>${restaurant.description}</p>
<h2 class="special-font">Menu</h2>
<div class="restaurants-cards-container flex justify-between gap" id='menu-container'>
</div>
`
const menuContainer=document.getElementById('menu-container')

restaurant.menu.map((item)=>{
    menuContainer.innerHTML+=`<div class="card border-radius border-color flex column align-center" >
                                <img src=${item.img} />
                                <div class="item-name flex justify-around align-center">
                                    <p>${item.name}</p>
                                    <p> ${item.price} </p>
                                </div>
                            </div>`
})
