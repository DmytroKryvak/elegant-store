function modalWindow() {
  document.addEventListener("DOMContentLoaded", function () {
    let modal = document.getElementById("modal");
    let profileBtn = document.getElementById("profileBtn");
    let signInBtn = document.getElementById("signInBtn");
    let closeBtn = document.querySelector(".close");
    let form = document.getElementById("loginForm");

    function openModal() {
      modal.classList.add("show");
      document.body.classList.add("no-scroll");
    }

    function closeModal() {
      modal.classList.remove("show");
      setTimeout(() => {
        form.reset();
      }, 300);
    }

    profileBtn.addEventListener("click", openModal);
    signInBtn.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);

    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeModal();
      }
    });
  });
}

export default modalWindow;
