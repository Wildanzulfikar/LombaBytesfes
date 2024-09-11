function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
  }
  

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}
  
function checkWidth() {
    const box = document.getElementById('hamburger-menu');
    
    if (window.matchMedia("(min-width: 1022px)").matches) {
        box.classList.add('hidden');
    } else {
        box.classList.remove('hidden');
    }
}

checkWidth();

window.addEventListener('resize', checkWidth);


const swiper = new Swiper(".mySwiper", {
pagination: {
  el: ".swiper-pagination",
  dynamicBullets: true,
},
});

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
const swipers = new Swiper(".mySwipers", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
    delay: 2500,
    disableOnInteraction: false
},

pagination: {
  el: ".swiper-pagination",
  clickable: true
},

navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev"
},

on: {
  autoplayTimeLeft(s, time, progress) {
    progressCircle.style.setProperty("--progress", 1 - progress);
    progressContent.textContent = `${Math.ceil(time / 1000)}s`;
  }
}
});

const swipersx = new Swiper(".mySwipersx", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
},
pagination: {
    el: ".swiper-pagination",
},
});

var swiperx = new Swiper(".mySwiperx", {
    speed: 600,
    parallax: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
},
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
});