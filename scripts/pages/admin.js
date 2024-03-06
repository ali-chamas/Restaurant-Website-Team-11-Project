
const logoutBtn=document.getElementById('logout-btn');

//users
const usersContainer=document.getElementById('users-container');
const localUsers=JSON.parse(window.localStorage.getItem('users'));
const usersCountContainer=document.getElementById('number-of-users')
const usersSection=document.getElementById('users-section')
const userSwitch=document.getElementById('users-switch')
const openForm=document.getElementById('open-form')
const form=document.getElementById('form')

//restaurants
const restaurantsContainer=document.getElementById('restaurants-container');
const restaurantsCountCountainer=document.getElementById('number-of-restaurants')
const restaurantsSection=document.getElementById('restaurants-section')
const restaurantsSwitch=document.getElementById('restaurants-switch')

const searchInput=document.getElementById('search-input');


if(window.localStorage.getItem('restaurants')){
    restaurants=JSON.parse(window.localStorage.getItem('restaurants'))
}



let usersCount=localUsers.length;
let restaurantsCount=restaurants.length;
let searchValue='';


//security
if(JSON.parse(window.localStorage.getItem('session')).email!='alichamas.22@hotmail.com'){
    window.location.assign('/')
}

if(userSwitch.classList.contains('bg-primary')){
    restaurantsSection.style.display='none'
}

const handleLogout=()=>{
    window.localStorage.setItem('session','none');
    window.location.assign('/')
}

const switchToUsers=()=>{
    userSwitch.classList.add('bg-primary','text-white');
    restaurantsSwitch.classList.remove('bg-primary','text-white')

    restaurantsSection.style.display='none';
    usersSection.style.display='flex'
}


const switchToRestaurants=()=>{
    userSwitch.classList.remove('bg-primary','text-white');
    restaurantsSwitch.classList.add('bg-primary','text-white')
    restaurantsSection.style.display='flex';
    usersSection.style.display='none'
}

const fetchUsers=(users)=>{
    
   usersContainer.innerHTML=''
   usersCountContainer.innerHTML=''
    users.map((user,i)=>{

        usersContainer.innerHTML+=`<div class="flex w-full align-center justify-between border-radius bg-cards">
                                        <div class="flex gap align-center">
                                        <h2>${user.name}</h2>
                                        <small>${user.email}</small>
                                        </div>
                                        <button onClick='deleteUser(${i})'><i class="fa-solid fa-trash text-danger"></i></button>
                                    </div>`
        
    })
    usersCountContainer.innerText=`${usersCount} users:`

    
}

console.log(restaurants)
const fetchRestaurants=(restaurants)=>{
    restaurantsCountCountainer.innerHTML=''
    restaurantsContainer.innerHTML=''
    
    restaurants.map((rest,i)=>{

        restaurantsContainer.innerHTML+=`<div class="card border-radius border-color flex column align-center ">
        <img src=${rest.img} class="border-radius" />
        <div class="flex align-center column">
            <h3 class="special-font">${rest.name}</h3>
            <button onClick='deleteRestaurant(${i})' class="bg-danger btn-style text-white">Delete</button>
        </div>
    </div>`
    
        
    })
    restaurantsCountCountainer.innerHTML=`${restaurantsCount} restaurants:`

}

const searchUsers=(input)=>{
    usersContainer.innerHTML=''
    const searchedUsers=localUsers.filter((user)=>user.name.toLowerCase().includes(input.toLowerCase()));
    usersCount=searchedUsers.length;
    fetchUsers(searchedUsers)
}

const searchRestauarants=(input)=>{
    restaurantsContainer.innerHTML=''
    const searchedRest=restaurants.filter((res)=>res.name.toLowerCase().includes(input.toLowerCase()));
    restaurantsCount=searchedRest.length;
    fetchRestaurants(searchedRest)
}

const deleteUser=(index)=>{
    localUsers.splice(index,1)
    window.localStorage.setItem('users',JSON.stringify(localUsers))
    usersCount--
    fetchUsers(localUsers)
}

const deleteRestaurant=(index)=>{
    restaurants.splice(index,1)
    window.localStorage.setItem('restaurants',JSON.stringify(restaurants))
    restaurantsCount--
    fetchRestaurants(restaurants)
}



fetchUsers(localUsers)
fetchRestaurants(restaurants)

restaurantsSwitch.addEventListener('click',switchToRestaurants);
userSwitch.addEventListener('click',switchToUsers)

searchInput.addEventListener('change',(e)=>{
    searchValue=e.target.value;
    if(userSwitch.classList.contains('bg-primary'))
    searchUsers(searchValue)
    else searchRestauarants(searchValue)

})

const userDeleteBtns=document.querySelectorAll('.user-delete-btn')


openForm.addEventListener('click',()=>form.classList.toggle('flex'))

logoutBtn.addEventListener('click',handleLogout)

