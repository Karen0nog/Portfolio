document.addEventListener("DOMContentLoaded", () => {
  const readMoreBtn = document.querySelector("#about-ReadMore-Btn");
  const moreContent = document.querySelector("#about-more");
  const aboutText = document.querySelector(".about-text");

  if (readMoreBtn && moreContent && aboutText) {
    readMoreBtn.addEventListener("click", (e) => {
      moreContent.classList.toggle("about-content-hidden");
      readMoreBtn.style.display = "none";
      e.stopPropagation();
    });
    document.addEventListener("click", (e) => {
      if (
        !moreContent.classList.contains("about-content-hidden") &&
        !aboutText.contains(e.target)
      ) {
        moreContent.classList.add("about-content-hidden");
        readMoreBtn.style.display = "inline-block";
      }
    });
  }
});
