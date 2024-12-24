// Active hamburger menu 
let menuIcon = document.querySelector(".menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    navlist.classList.toggle("active");
    document.body.classList.toggle("open");
});

// Remove navlist
navlist.addEventListener("click", () => {
    navlist.classList.remove("active");
    menuIcon.classList.remove("active");
    document.body.classList.remove("open");
});

// Rotate text js code 
let text = document.querySelector(".text p");

text.innerHTML = text.innerHTML.split("").map((char, i) =>
    `<b style="transform:rotate(${i * 6.3}deg)">${char}</b>`
).join("");

// Switch between about buttons 
const buttons = document.querySelectorAll('.about-btn button');
const contents = document.querySelectorAll('.content');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        contents.forEach(content => content.style.display = 'none');
        contents[index].style.display = 'block';
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

// Portfolio filter
var mixer = mixitup('.portfolio-gallery', {
    selectors: {
        target: '.portfolio-box'
    },
    animation: {
        duration: 500
    }
});

// When the window loads, add the bounce animation to the image
window.onload = function () {
    const image = document.querySelector('.about-image');
    image.classList.add('bounce'); // Add bounce class to trigger the animation
};

// Initialize swiperjs 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    }
});

// Skill Progress bar 
const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");

let skillsPlayed = false;

window.addEventListener("scroll", () => {
    if (!skillsPlayed) skillsCounter();
});

function hasReached(el) {
    let topPosition = el.getBoundingClientRect().top;
    if (window.innerHeight >= topPosition + el.offsetHeight) return true;
    return false;
}

function updateCount(num, maxNum) {
    let currentNum = +num.innerText;
    
    if (currentNum < maxNum) {
        num.innerText = currentNum + 1;
        setTimeout(() => {
            updateCount(num, maxNum);
        }, 12);
    }
}

function skillsCounter() {
    if (!hasReached(first_skill)) return;
    skillsPlayed = true;
    sk_counters.forEach((counter, i) => {
        let target = +counter.dataset.target;
        
        // Calculate the stroke-dashoffset based on the target percentage
        let strokeValue = 339.292 - (339.292 * (target / 100));
        progress_bars[i].style.strokeDashoffset = strokeValue;

        setTimeout(() => {
            updateCount(counter, target);
        }, 400);
    });

    progress_bars.forEach(p => p.style.animation = "progress 2s ease-in-out forwards");
}

// Side progress bar 
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;

    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    
    if (pos > 100) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });

    scrollProgress.style.background = `conic-gradient(#fff ${scrollValue}%,#e6006d ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// Active menu 
let menuLi = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll('section');

function activeMenu() {
    let len = section.length;
    while (--len && window.scrollY + 97 < section[len].offsetTop) {}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);

// Scroll reveal
ScrollReveal({ 
    distance: "90px",
    duration: 2000,
    delay: 200,
    // reset: true ,
});

ScrollReveal().reveal('.hero-info,.main-text,.proposal,.heading', { origin: "top" });
ScrollReveal().reveal('.about-img,.fillter-buttons,.contact-info', { origin: "left" });
ScrollReveal().reveal('.about-content,.skills', { origin: "right" });
ScrollReveal().reveal('.allServices,.portfolio-gallery,.blog-box,footer,.img-hero', { origin: "bottom" });

// Swiper
var swiper = new Swiper(".swiper-container", {
    loop: true, /* Infinite looping */
    autoplay: {
        delay: 3000, /* Auto-play every 3 seconds */
        disableOnInteraction: false, /* Keeps autoplay running */
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true, /* Allows clicking on pagination dots */
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    effect: "coverflow", /* Adds a cool 3D effect */
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
});

// Mimic hover effect on touch devices
const slides = document.querySelectorAll('.swiper-slide');

slides.forEach(slide => {
    slide.addEventListener('touchstart', function () {
        const caption = slide.querySelector('.slide-caption');
        caption.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        caption.style.opacity = '0.9';
    });

    slide.addEventListener('touchend', function () {
        const caption = slide.querySelector('.slide-caption');
        caption.style.backgroundColor = 'rgba(213, 181, 163, 1)';
        caption.style.opacity = '1';
    });
});

function toggleNav() {
    const nav = document.querySelector('.navlist');
    nav.classList.toggle('active'); // Toggle the 'active' class to show/hide nav
}
