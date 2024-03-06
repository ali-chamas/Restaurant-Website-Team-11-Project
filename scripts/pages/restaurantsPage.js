const restaurantsContainer=document.getElementById('restaurants-container');
let localRests=JSON.parse(window.localStorage.getItem('restaurants'));
const searchInput=document.getElementById('search-input');
const users=JSON.parse(window.localStorage.getItem('users'))
const locationContainer=document.getElementById('filter-location')
const filterToggle = document.getElementById('mobile-toggle')
const filtersContainer=document.getElementById('filters-container')

let types=[
    'Lebanese cuisine',
    'Chinese cuisine',
    'Italian cuisine'
]

let locations=[
    'Beirut',
    'Jbeil',
    'Baalbak',
    'Janoub',
    'Tripoli'
]




// types.map((type,i)=>{
//     typeContainer.innerHTML+=`  <div class="filter-item type-filter flex border-radius align-center">
//                                     <p>${type}</p>
//                                 </div>
//                                 `
// })

locations.map((location,i)=>{
    locationContainer.innerHTML+=`<div class="filter-item location-filter flex border-radius align-center">
                                    <p> ${location}</p>
                                </div>`
})

// const typeFilter=document.querySelectorAll('.type-filter')
const locationFilter=document.querySelectorAll('.location-filter')

// const filterByType=(input)=>{
//     localRests= localRests.filter(rest=>rest.type=input)
//     fetchRestaurants(localRests)
// }


const filterByLocation=(input)=>{
    localRests=localRests.filter(rest=>rest.location=input)
    fetchRestaurants(localRests)
}



const fetchRestaurants=(array)=>{
    restaurantsContainer.innerHTML='';
    array.map((rest,i)=>{
        restaurantsContainer.innerHTML+=`<div class="card border-radius border-color flex column align-center justify-between">
        <img src=${rest.img} />
        <div>
            <h3 class="special-font">${rest.name}</h3>
            <div class="flex gap">
                <button class="btn-style shadow bg-btn" onClick="addToFavourites(${i}) " ><i class="fa-regular fa-heart text-primary"></i></button>
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

const checkFavs=()=>{
    const user = JSON.parse(window.localStorage.getItem('session'));
    for(let i= 0 ; i<user.favourites.length;i++){
        for(let j = 0;j<localRests.length;j++){
            if(user.favourites[i].name==localRests[j].name){
                hearts[j].classList.add('text-danger')
            }
            else{
                
            }
            
        }
    }
    
}






const addToFavourites=(index)=>{
    const user = JSON.parse(window.localStorage.getItem('session'));
    if(hearts[index].classList.contains('text-danger')){
       
        user.favourites=user.favourites.filter(favs=>favs.name!==localRests[index].name)
        console.log(user)
        for(let i = 0;i<users.length;i++){
            if(users[i].email===user.email){
                users[i]=user;
            }
        }
        window.localStorage.setItem('session',JSON.stringify(user))
        window.localStorage.setItem('users',JSON.stringify(users))
        
        hearts[index].classList.remove('text-danger')
    }
    else{
        
        user.favourites.push(localRests[index]);
        window.localStorage.setItem('session',JSON.stringify(user))
        for(let i = 0;i<users.length;i++){
            if(users[i].email===user.email){
                users[i]=user;
            }
        }
        window.localStorage.setItem('users',JSON.stringify(users))
        
        hearts[index].classList.add('text-danger')
    }
}


fetchRestaurants(localRests);
const hearts = document.querySelectorAll('.fa-heart')

checkFavs();

searchInput.addEventListener('change',(e)=>{
    searchvalue=e.target.value;
    searchRestauarants(searchvalue);
})


const toggleActive=(array1,selected)=>{
    for(let j = 0 ; j<array1.length;j++){
        if(array1[j].classList.contains('active')){
            array1[j].classList.remove('active')
        }
    }
    
    selected.classList.add('active')
}

// for(let i = 0;i<typeFilter.length;i++){
    
//         typeFilter[i].addEventListener('click',()=>{
//             if(typeFilter[i].innerText!='All'){
//                 const filtered =localRests.filter(rest=>rest.type.toLowerCase()==typeFilter[i].innerText.toLowerCase())
//                 fetchRestaurants(filtered);
//                 toggleActive(typeFilter,locationFilter,typeFilter[i])
//             }else{
//                 fetchRestaurants(localRests)
                
//                toggleActive(typeFilter,locationFilter,typeFilter[i])
//             }
            
//         }
//         )
//     }
   

for(let i = 0;i<locationFilter.length;i++){
   
    locationFilter[i].addEventListener('click',()=>{
        if(locationFilter[i].innerText!='All'){
            const filtered= localRests.filter(rest=>rest.location.toLowerCase()==locationFilter[i].innerText.toLowerCase())
            fetchRestaurants(filtered)
            toggleActive(locationFilter,locationFilter[i])
        }else{
            fetchRestaurants(localRests)
            
            toggleActive(locationFilter,locationFilter[i])
        }
    })
}

filterToggle.addEventListener('click',()=>{
    if(window.innerWidth<900)
    if(filtersContainer.style.display=='none'||filtersContainer.style.display=='' )filtersContainer.style.display='flex';
    else filtersContainer.style.display='none'
    

})

if(window.innerWidth>900){
    filtersContainer.style.display='flex';
}


