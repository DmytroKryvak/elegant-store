function modalWindow() {
  document.addEventListener("DOMContentLoaded", function () {
    let modal = document.getElementById("modal");
    let profileBtn = document.getElementById("profileBtn");
    let closeBtn = document.querySelector(".close");
    let form = document.getElementById("loginForm");

    function openModal() {
      modal.classList.add("show");
      document.body.classList.add("no-scroll"); // Заборона прокрутки
    }

    function closeModal() {
      modal.classList.remove("show");
      document.body.classList.remove("no-scroll"); // Відновлення прокрутки
      setTimeout(() => {
        form.reset(); // Очищення полів форми після анімації
      }, 300);
    }

    profileBtn.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);

    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeModal();
      }
    });
  });
}

export default modalWindow;
