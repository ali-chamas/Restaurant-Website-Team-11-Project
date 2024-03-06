const logoutBtn=document.getElementById('logout-btn')


const handleLogout=()=>{
    window.localStorage.setItem('session','none');
    window.location.assign('/')
}

logoutBtn.addEventListener('click',handleLogout)