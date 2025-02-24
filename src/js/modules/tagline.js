function tagline() {
  const closeTagLineBtn = document.querySelector(".tagline__close");
  const tagline = document.querySelector(".tagline");
  closeTagLineBtn.onclick = function () {
    tagline.remove();
  };
}

export default tagline;
