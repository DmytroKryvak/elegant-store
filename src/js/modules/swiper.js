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
          // Лишаємо тільки 3 точки
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

  console.log("Swiper запущено!", swiper);
}

export default swiper;
