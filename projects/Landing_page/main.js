// java script main
var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
  });
  var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
      swiper: swiper,
    },
  });

  // navigation bar effect on scroll
  window.addEventListener('scroll', function(){
    const header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
    
  })

  // responsive navigation toggle mode

const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", ()=>{
  navigation.classList.add("active");

})

closeBtn.addEventListener("click", ()=>{
  navigation.classList.remove("active");
  
})