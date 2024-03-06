const restaurantsContainer=document.getElementById('restaurants-container');
const localRests=JSON.parse(window.localStorage.getItem('restaurants'));
const searchInput=document.getElementById('search-input')
const filterItems=document.querySelectorAll('.filter-item')
let searchvalue=''

let type = 'lebanese'




const fetchRestaurants=(array)=>{
    restaurantsContainer.innerHTML='';
    array.map((rest,i)=>{
        restaurantsContainer.innerHTML+=`<div class="card border-radius border-color flex column align-center justify-between">
        <img src=${rest.img} />
        <div>
            <h3 class="special-font">${rest.name}</h3>
            <div class="flex gap">
                <button class="btn-style shadow bg-btn" href=" " ><i class="fa-regular fa-heart text-primary"></i></button>
                <a href="/pages/single-restaurant.html?id=${i}" class="btn-style special-font shadow bg-primary">Details</a>
            </div>
        </div>
    </div>
`
    })
}

const searchRestauarants=(input)=>{
    restaurantsContainer.innerHTML=''
    const searchedRest=localRests.filter((res)=>res.name.toLowerCase().includes(input.toLowerCase()));
    fetchRestaurants(searchedRest)
}


fetchRestaurants(localRests)

searchInput.addEventListener('change',(e)=>{
    searchvalue=e.target.value;
    searchRestauarants(searchvalue);
})

console.log(filterItems)

for(let i =0;i<filterItems.length;i++){
    filterItems[i].addEventListener('click',()=>{
        console.log(filterItems[i].innerText);
        //code here
    })
}