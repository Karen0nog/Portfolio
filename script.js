document.addEventListener("DOMContentLoaded", function () {
  // Scroll reveal
  const revealElements = document.querySelectorAll(".scroll-reveal");

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -100px 0px",
    threshold: 0.1,
  };

  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  revealElements.forEach((element) => {
    scrollObserver.observe(element);
  });

  // Read more
  document.querySelectorAll(".read-more-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const description = btn.closest(".project-description");
      const moreText = description.querySelector(".more-text");
      if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline";
        btn.innerHTML = 'Leia menos <i class="fas fa-chevron-up"></i>';
      } else {
        moreText.style.display = "none";
        btn.innerHTML = 'Leia mais <i class="fas fa-chevron-down"></i>';
      }
    });
  });
});
