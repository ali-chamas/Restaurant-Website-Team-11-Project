const logoutBtn=document.getElementById('logout-btn')
const cardsContainer=document.getElementById('cards-container')
const user = JSON.parse(window.localStorage.getItem('session'))
const profile=document.getElementById('profile')


if(JSON.parse(window.localStorage.getItem('session')).email=='alichamas.22@hotmail.com' ){
    window.location.assign('/pages/admin.html');
}

const handleLogout=()=>{
    window.localStorage.setItem('session','none');
    window.location.assign('/');
}



const fetchFavourites=()=>{

    user.favourites.map((fav)=>{
        cardsContainer.innerHTML+=`<div class="restaurant-card flex column gap center border-radius">
                                        <img class="rest-image border-radius" src=${fav.img} />
                                        <p>${fav.name}</p>
                                    </div>`
    })
    
}

const fetchProfile=()=>{
    profile.innerHTML=`
    
        <h4>${user.name}</h4>
        <p>${user.email}</p>
    `
}


fetchProfile()
fetchFavourites();

logoutBtn.addEventListener('click',handleLogout);

