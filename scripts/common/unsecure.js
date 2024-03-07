//secured routing

if(window.localStorage.getItem('session')=='none' || !JSON.parse(window.localStorage.getItem('session'))){
    window.location.assign('/pages/login.html')
}

