import Swiper from "swiper/bundle";

function swiper() {
  const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 12,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        if (index < 3) {
          return `<span class="${className}"></span>`;
        }
        return "";
      },
    },
    breakpoints: {
      840: {
        spaceBetween: 24,
      },
    },
  });
}

export default swiper;
