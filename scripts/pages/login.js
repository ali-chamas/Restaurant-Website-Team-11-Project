
const header=document.getElementById('welcome-header');
const loginBox=document.getElementById('login-box')
const signupBpx=document.getElementById('signup-box')
const loginEmail=document.getElementById('login-email')
const loginPassword=document.getElementById('login-password')
const loginBtn=document.getElementById('login-btn')
const signupName=document.getElementById('signup-name')
const signupEmail=document.getElementById('signup-email')
const signupPassword=document.getElementById('signup-password')
const signupBtn=document.getElementById('signup-btn')
const signupSwitch=document.getElementById('signup-switch')
const loginSwitch=document.getElementById('login-switch')
const signupError=document.getElementById('signup-err')
const loginError=document.getElementById('login-err')

let username=''
let email=''
let password=''

const switchToSignUp=()=>{
    loginBox.style.display='none';
    signupBpx.style.display='flex';
    header.innerText="Oh! Hello There!"
}

const switchToLogin=()=>{
    loginBox.style.display='flex';
    signupBpx.style.display='none';
    header.innerText="Welcome back!"
}


const validateForm=()=>{
    
        if(email==="" ||password===""|| username=="" ){
            loginError.innerText='Oops! please fill everything'
        }
    
       
}

const handleLogin=()=>{
    validateForm()
    users.map((user,i)=>{
        if(user.email.toLowerCase()===email.toLowerCase() && user.password===password) {
            
                // window.localStorage.setItem('session',JSON.stringify(user))
                window.location.assign('/pages/restaurants')
        }
        else{
            loginError.innerText='wrong email or password'
        }
    })
}

loginEmail.addEventListener('change',function(e){
    email=e.target.value;
})
console.log(email);

signupSwitch.addEventListener('click',switchToSignUp);
loginSwitch.addEventListener('click',switchToLogin);

loginBtn.addEventListener('click',handleLogin);

