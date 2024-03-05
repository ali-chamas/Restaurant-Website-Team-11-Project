const loginBtn=document.getElementById('header-login-btn');
const profileBtn=document.getElementById('header-profile-btn');
const session = window.localStorage.getItem('session');

if(session!='none'){
    loginBtn.style.display='none'
    profileBtn.style.display='block'
   
}else{
    loginBtn.style.display='block'
    profileBtn.style.display='none'
}