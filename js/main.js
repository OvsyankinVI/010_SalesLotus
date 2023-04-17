document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.sidenav');
    let instances = M.Sidenav.init(elems);
    let modal = document.querySelectorAll('.modal');
    let instances_modal = M.Modal.init(modal);
    let car = document.querySelectorAll('.carousel');
    let instances_car = M.Carousel.init(car);
  });

  const faqQuestions = document.querySelectorAll(".question");
// const answers = document.querySelectorAll(".answer");

faqQuestions.forEach((question) => {
  question.addEventListener("click", (e) => {
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if (question.classList.contains("active")) {
      // answers.forEach((a) => {
      //   a.style.height = 0;
      // });
      answer.style.height = `${answer.scrollHeight}px`;
    } else {
      answer.style.height = 0;
    }
  });
});
const swiper = new Swiper('.swiper', {
  spaceBetween: 24,
breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    1080: {
      slidesPerView: 2,
    },
     850: {
      slidesPerView: 1.5,
  }, 
    750: {
      slidesPerView: 1.5,
    },
  } 
});

var swiper1 = new Swiper(".mySwiper", {
  direction: "vertical",
  // loop: true,
  autoplay: {
    delay: 1500,
  },
  autoplayTimeout: 2000,
  slidesPerView: 3,
  spaceBetween: 24,
  speed: 700,

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
    /* activeBackSlider.style.width = "33%"; */
  } else {
    slide4.style.transitionDelay = "200ms";
    slide5.style.transitionDelay = "400ms";
    slide6.style.transitionDelay = "600ms";
  }
    // slide1.style.top = "-100%";
    // slide2.style.top = "-100%";
    // slide3.style.top = "-200%";
          
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
    /* activeBackSlider.style.width = "33%"; */

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
    /* activeBackSlider.style.width = "35%"; */
  } else {
    // slide3.style.top = "0%";
    // slide1.style.top = "-100%";
    // slide2.style.top = "-200%";
    // slide3.style.transitionDelay = "200ms";
  }
  
});

function removeActive(arr) {
  arr.forEach((a) => {
    a.classList.remove("active");
  });
};
