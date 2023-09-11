const btn=document.getElementById('btn');
const menu=document.getElementById('menu');
const nav = document.querySelector("#nav");



//Hamburger-menu
btn.addEventListener("click",() => {
    btn.classList.toggle("open");
    menu.classList.toggle("flex");
    menu.classList.toggle("hidden");
});

window.onscroll = function () { 
    if ( document.documentElement.scrollTop >= 200 ) {
        nav.classList.add("bgOnscroll");
        nav.classList.remove("nav-transparent");
    } 
    else {
        nav.classList.add("nav-transparent");
        nav.classList.remove("bgOnscroll");
    }
};

function menuclose(){
    menu.classList.toggle("hidden");
    btn.classList.toggle("open");
    menu.classList.toggle("flex");

    
};


