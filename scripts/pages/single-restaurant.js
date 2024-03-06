const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const restaurantID=urlParams.get('id')
const imageContainer=document.getElementById('image-container');
const localRestaurants=JSON.parse(window.localStorage.getItem('restaurants'))


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
console.log(restaurant)