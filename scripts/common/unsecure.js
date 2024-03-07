//secured routing

if(window.localStorage.getItem('session')=='none' || !window.localStorage.getItem('session')){
    window.location.assign('/pages/login.html')
}

