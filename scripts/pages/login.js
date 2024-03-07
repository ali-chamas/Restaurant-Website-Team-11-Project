//secured routing

if(window.localStorage.getItem('session')=='none' || !JSON.parse(window.localStorage.getItem('session'))){
   
}
else{
    window.location.assign('/pages/resaurants.html')
}


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
let validationError=false;



const resetInputs=()=>{
    username=''
    email=''
    password=''
}

const switchToSignUp=()=>{
    loginBox.style.display='none';
    signupBpx.style.display='flex';
    header.innerText="Oh! Hello There!";
    resetInputs()
}

const switchToLogin=()=>{
    loginBox.style.display='flex';
    signupBpx.style.display='none';
    header.innerText="Welcome back!";
    resetInputs()
}


const validateForm=(type)=>{
    if(type=='signup')
    
        if(email=="" ||password==""|| username=="" ){
            signupError.innerText='Oops! please fill everything';
            validationError=true;
            
        }
        else{
            validationError=false
        }

    if(type=='login')
    if(email==="" || password===""){
        loginError.innerText='Oops! please fill everything';
        validationError=true;
    }else{
        validationError=false
    }
}

const handleLogin=()=>{

    validateForm('login');
    
    !validationError&&
        users.map((user,i)=>{
            if(user.email.toLowerCase()===email.toLowerCase() && user.password===password) {
                
                    window.localStorage.setItem('session',JSON.stringify(user))
                    window.location.assign('/')
            }
            else{
                loginError.innerText='wrong email or password'
            }
        })
    }   

    const handleSignUp=()=>{
        validateForm('signup');

        //had to use for loop because I have to break

        if(!validationError)
         for(let i = 0 ; i<users.length;i++){
            if(users[i].email.toLowerCase()===email.toLowerCase()) {
                
                    signupError.innerText='email already in use';
                    break;
            }
            else{
                users.push({name:username,email:email,password:password,favourites:[]});
                window.localStorage.setItem('users',JSON.stringify(users))
                handleLogin()
                break;
            }
        }
           
           
    }


loginEmail.addEventListener('change',(e)=>email=e.target.value)
loginPassword.addEventListener('change',(e)=>password=e.target.value)

signupName.addEventListener('change',(e)=>username=e.target.value)
signupEmail.addEventListener('change',(e)=>email=e.target.value)
signupPassword.addEventListener('change',(e)=>password=e.target.value)



signupSwitch.addEventListener('click',switchToSignUp);
loginSwitch.addEventListener('click',switchToLogin);

loginBtn.addEventListener('click',handleLogin);
signupBtn.addEventListener('click',handleSignUp)
