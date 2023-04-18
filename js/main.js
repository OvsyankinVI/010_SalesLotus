document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.sidenav');
    let instances = M.Sidenav.init(elems);
  });

  const faqQuestions = document.querySelectorAll(".question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", (e) => {
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if (question.classList.contains("active")) {
      answer.style.height = `${answer.scrollHeight}px`;
    } else {
      answer.style.height = 0;
    }
  });
});

const swiper = new Swiper('.swiper', {
  spaceBetween: 24,
  breakpoints: {
        1000: {
          slidesPerView: 3,
      }, 
      850: {
        slidesPerView: 2.5,
    }, 
          650: {
        slidesPerView: 2,
    }, 
      450: {
        slidesPerView: 1.5,
    }, 
    390: {
      slidesPerView: 1.1,
  }, 
  }
});

var swiper1 = new Swiper(".mySwiper", {
  direction: "vertical",
  centeredSlides: true,
  allowTouchMove: false,
  autoplay: {
    delay: 1000,
  },
  autoplayTimeout: 1000,
  slidesPerView: 3,
  spaceBetween: 24,
  speed: 700,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let activeBackSlider = document.querySelector(".active-slider");
let tabs = document.querySelectorAll(".ft");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activeBackSlider.style.left = `${tab.offsetLeft}px`;
    tabs.forEach((t) => {
      t.classList.remove("active");
    });
    tab.classList.add("active");
  });
});

var slide4 = document.getElementById("slide4");
var slide5 = document.getElementById("slide5");
var slide6 = document.getElementById("slide6");
let sliders = [slide4, slide5, slide6];
let img = Array.from(document.querySelectorAll(".bar-child"));

document.getElementById("btn4").addEventListener("click", function () {
  if (slide4.style.top === "-100%") {
    slide4.style.transitionDelay = "600ms";
    slide5.style.transitionDelay = "400ms";
    slide6.style.transitionDelay = "200ms";
    slide6.style.top = "156px";
    slide6.style.width = "741.96px";
    slide5.style.top = "80px";
    slide4.style.top = "0%";
    removeActive(sliders);
    slide4.classList.add("active");
    img[0].src = "img/polygon-62.svg"
    img[1].src = "img/polygon-63.svg"
    img[2].src = "img/polygon-63.svg"
  } else {
    slide4.style.transitionDelay = "200ms";
    slide5.style.transitionDelay = "400ms";
    slide6.style.transitionDelay = "600ms";
  }       
});

document.getElementById("btn5").addEventListener("click", function () {
  if (slide5.style.top === "-100%") {
    slide4.style.transitionDelay = "600ms";
    slide5.style.transitionDelay = "400ms";
    slide6.style.transitionDelay = "200ms";
    slide4.style.top = "-100%";
    slide6.style.top = "116px";
    slide6.style.width = "824.4px";
    slide5.style.top = "0%";
    removeActive(sliders);
    slide5.classList.add("active");
    img[0].src = "img/polygon-63.svg";
    img[1].src = "img/polygon-62.svg";
    img[2].src = "img/polygon-63.svg";
  } else {
    slide4.style.transitionDelay = "200ms";
    slide5.style.transitionDelay = "400ms";
    slide6.style.transitionDelay = "600ms";
    slide5.style.top = "0%";
    slide4.style.top = "-100%";
    slide6.style.top = "116px";
    slide6.style.width = "824.4px";
    removeActive(sliders);
    slide5.classList.add("active");
    img[0].src = "img/polygon-63.svg"
    img[1].src = "img/polygon-62.svg"
    img[2].src = "img/polygon-63.svg"
  }
});

document.getElementById("btn6").addEventListener("click", function () {
  if (slide6.style.top !== "0%") {
    slide4.style.transitionDelay = "200ms";
    slide5.style.transitionDelay = "400ms";
    slide6.style.transitionDelay = "600ms";
    slide6.style.top = "0%";
    slide6.style.width = "916px";
    slide4.style.top = "-100%";
    slide5.style.top = "-100%";
    removeActive(sliders);
    slide6.classList.add("active");
    img[0].src = "img/polygon-63.svg"
    img[1].src = "img/polygon-63.svg"
    img[2].src = "img/polygon-62.svg"
  }
});

function removeActive(arr) {
  arr.forEach((a) => {
    a.classList.remove("active");
  });
};
