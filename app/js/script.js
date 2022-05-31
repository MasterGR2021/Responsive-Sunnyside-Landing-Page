const mobile_menu = document.querySelector('#header_menu');
const navbar = document.querySelector('#header_links');

mobile_menu.addEventListener("click",()=>{
    if(navbar.classList.contains('hidden')) {
        navbar.classList.remove('hidden');
        navbar.classList.remove('fadeout');
        navbar.classList.add('fadein');
    }else{
        navbar.classList.add('hidden');
        navbar.classList.remove('fadein');
        navbar.classList.add('fadeout');
    }
});