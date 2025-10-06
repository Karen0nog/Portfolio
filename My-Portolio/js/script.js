document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector("#about-Toggle-Btn");
  const aboutContent = document.querySelector("#about-content");
  const chevronIcon = toggleBtn.querySelector("i");
  if (toggleBtn && aboutContent) {
    toggleBtn.addEventListener("click", () => {
      aboutContent.classList.toggle("about-content-hidden");
      toggleBtn.classList.toggle("rotated");
    });
  }
});
