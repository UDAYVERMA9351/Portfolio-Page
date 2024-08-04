window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY>0);
});

const menuBtn = document.querySelector(".menu-btn");
const navBar = document.querySelector(".nav-bar");
const closeBtn = document.querySelector(".close-btn");
const navItems = document.getElementsByClassName(".nav-items");
menuBtn.addEventListener("click", ()=> {
    navBar.classList.add("active");
});
closeBtn.addEventListener("click", ()=> {
    navBar.classList.remove("active");
});

function navBtn () {
    navBar.classList.remove("active");
};
