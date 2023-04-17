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