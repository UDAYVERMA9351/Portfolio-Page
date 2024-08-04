
//  Scroll bar behavior ===============
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("sticky" , window.scrollY > 0);
});


// Service Section Modal =================

const serviceModals =  document.querySelectorAll(".service-modal");
const learnMoreBtns =  document.querySelectorAll(".learn-more-btn");
const modalCloseBtns =  document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick) {
    serviceModals[modalClick].classList.add("active");
};

learnMoreBtns.forEach((learMoreBtn,i) => {
    learMoreBtn.addEventListener("click", ()=>{
        modal(i)
    });
});

modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", ()=> {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

// scroll to top btn ======================================
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", ()=> {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

})

// navigation menu item active on page scroll 
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
        } 
        else {
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    })
});
//  wesite light/dark theme ============================================
 const themeBtn = document.querySelector(".theme-btn");

 themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
 });

 const getCurrentTheme = () => document.body.classList("dark-theme") ? "dark" : "light";
 const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun": "moon";
 const savedTheme = localStorage.getItem("saved-theme");
 const savedIcon = localStorage.getItem("saved-icon");

 if(savedTheme) {
    document.body.classList[savedTheme === "dark"? "add" : "remove"] ("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add": "remove"]("sun");
 }
 
// resoponsive menu toggle 
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");


menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});
closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});
 
navItems.forEach((navItems) => {
    navItems.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});

//  send email =====================================================
