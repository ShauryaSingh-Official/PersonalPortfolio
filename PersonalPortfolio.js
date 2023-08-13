const toggleBtn = document.querySelector('.navbar .toggle-btn');
const toggleBtnIcon = document.querySelector(".navbar .toggle-btn i");
const dropdownMenu = document.querySelector(".dropdown-menu");

toggleBtn.addEventListener("click",()=>{
    dropdownMenu.classList.toggle('open')
    const isOpen = dropdownMenu.classList.contains('open');
    toggleBtnIcon.className = isOpen?"fa-solid fa-xmark":"fa-solid fa-bars";
})



const navbar = document.querySelector('header .navbar');
console.log(navbar);
window.addEventListener('scroll',()=>{
    if(window.scrollY>50){
        navbar.classList.add('darknavbar')
    }
    else if(window.scrollY<=50){
        navbar.classList.remove('darknavbar')
    }
})