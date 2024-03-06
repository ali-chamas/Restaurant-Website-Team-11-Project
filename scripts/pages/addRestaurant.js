const restName=document.getElementById('rest-name');
const restLogo=document.getElementById('rest-logo');
const restImg=document.getElementById('rest-img');
const restType=document.getElementById('rest-type');
const restLocation=document.getElementById('rest-location');
const restDesc=document.getElementById('rest-desc');
const menuName=document.getElementById('menu-name');
const menuImg=document.getElementById('menu-img');
const menuPrice=document.getElementById('menu-price');
const menuBtn=document.getElementById('add-menu-item');
const addedMenu=document.getElementById('added-menu');
const restBtn=document.getElementById('add-restaurant');
const allRestaurants=JSON.parse(window.localStorage.getItem('restaurants'))

let restInfo={
    name:'',
    img:'',
    img2:'',
    description:'',
    type:'',
    location:'',
    menu:[],
}
let menuItemName='';
let menuItemImg='';
let menuItemPrice='';

const addRestaurant=(restaurant)=>{
    allRestaurants.push(restaurant)
    try {
        window.localStorage.setItem('restaurants',JSON.stringify(allRestaurants));
        window.location.reload();
    } catch (error) {
        console.log(error)
    }
    
}

const updateAddedItems=()=>{

    addedMenu.innerHTML=''
    restInfo.menu.map((item,i)=>{
    addedMenu.innerHTML+=`<div class="bg-secondary">
                                 <small>${item.name}</small>
                                 <button type='button' onClick='removeAddedItem(${i})'><i class="fa-solid fa-trash text-danger"></i></button>
                          </div>`
    })

}

const addMenuItem=()=>{

   const item={name:menuItemName,img:menuItemImg,price:menuItemPrice}
   restInfo.menu.push(item);
   updateAddedItems();
   menuItemName='';
   menuItemImg='';
   menuItemPrice='';
   menuName.value=''
   menuImg.value='';
   menuPrice.value=''

  
}

const removeAddedItem=(index)=>{
    restInfo.menu.splice(index,1);
    updateAddedItems();
}


restName.addEventListener('change',(e)=>{restInfo.name=e.target.value});
restLogo.addEventListener('change',(e)=>{restInfo.img=e.target.value});
restImg.addEventListener('change',(e)=>{restInfo.img2=e.target.value});
restType.addEventListener('change',(e)=>{restInfo.type=e.target.value});
restDesc.addEventListener('change',(e)=>{restInfo.description=e.target.value});
restLocation.addEventListener('change',(e)=>{restInfo.location=e.target.value});
menuName.addEventListener('change',(e)=>{menuItemName=e.target.value});
menuImg.addEventListener('change',(e)=>{menuItemImg=e.target.value});
menuPrice.addEventListener('change',(e)=>{menuItemPrice=e.target.value});


menuBtn.addEventListener('click',()=>addMenuItem())
restBtn.addEventListener('click',()=>addRestaurant(restInfo));
