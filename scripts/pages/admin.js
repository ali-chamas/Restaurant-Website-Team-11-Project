
const logoutBtn=document.getElementById('logout-btn');
const usersContainer=document.getElementById('users-container');
const localUsers=JSON.parse(window.localStorage.getItem('users'));
const usersCountContainer=document.getElementById('number-of-users')
const searchInput=document.getElementById('search-input')


let usersCount=localUsers.length;
let searchValue='';

//security
if(JSON.parse(window.localStorage.getItem('session')).email!='alichamas.22@hotmail.com'){
    window.location.assign('/')
}

const handleLogout=()=>{
    window.localStorage.setItem('session','none');
    window.location.assign('/')
}



const fetchUsers=(users)=>{
    usersContainer.innerHTML=''
    users.map((user,i)=>{

        usersContainer.innerHTML+=`<div class="flex w-full align-center justify-between bg-secondary border-radius">
                                        <div class="flex gap align-center">
                                        <h2>${user.name}</h2>
                                        <small>${user.email}</small>
                                        </div>
                                        <button onClick='deleteUser(${i})'><i class="fa-solid fa-trash text-danger"></i></button>
                                    </div>`
        
    })
    usersCountContainer.innerText=`${usersCount} users:`

    
}



const searchUsers=(input)=>{
    usersContainer.innerHTML=''
    const searchedUsers=localUsers.filter((user)=>user.name.toLowerCase().includes(input.toLowerCase()));
    usersCount=searchedUsers.length;
    fetchUsers(searchedUsers)
}

const deleteUser=(index)=>{
    localUsers.splice(index,1)
    window.localStorage.setItem('users',JSON.stringify(localUsers))
    window.location.reload()
}


fetchUsers(localUsers)


searchInput.addEventListener('change',(e)=>{
    searchValue=e.target.value;
    searchUsers(searchValue)

})

const userDeleteBtns=document.querySelectorAll('.user-delete-btn')


// for(let i=0;i<userDeleteBtns.length;i++){
//     userDeleteBtns[i].addEventListener('click',()=>deleteUser(i))
// }

logoutBtn.addEventListener('click',handleLogout)

