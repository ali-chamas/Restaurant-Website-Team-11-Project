
const logoutBtn=document.getElementById('logout-btn')

//security
if(JSON.parse(window.localStorage.getItem('session')).email!='alichamas.22@hotmail.com'){
    window.location.assign('/')
}

const handleLogout=()=>{
    window.localStorage.setItem('session','none');
    window.location.assign('/')
}

logoutBtn.addEventListener('click',handleLogout)