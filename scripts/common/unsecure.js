//secured routing

if(window.localStorage.getItem('session')=='none'){
    window.location.assign('/')
}

