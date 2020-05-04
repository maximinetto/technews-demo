let width = window.innerWidth;
principal();

function principal() {
    slideBar();
    ScrollReveal().reveal('.showcase');
    ScrollReveal().reveal('.news-cards', {delay: 500});
    ScrollReveal().reveal('.cards-banner-one', {delay: 500});
    ScrollReveal().reveal('.cards-banner-two', {delay: 500});
    document.querySelector(".menu-btn").addEventListener('click', function () {
        const navMenu = document.querySelector(".nav-menu");
        navMenu.classList.toggle("show");
    });
    window.addEventListener("resize", function () {
        width = window.innerWidth;
        console.log(width);
        slideBar();
    });
    return width;
}

function slideBar(){
    const navMenu = document.querySelector(".nav-menu");
    if(width <= 700){
        navMenu.classList.add("slide");
    }else{
        navMenu.classList.remove("slide");
    }
}

