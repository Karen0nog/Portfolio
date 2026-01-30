// Parallax tilt simples e compatível com seus project-cards
class ParallaxTilt {
  constructor(element, maxRotate = 12) {
    this.el = element;
    this.maxRotate = maxRotate;
    this.onMove = this.onMove.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.onLeave = this.onLeave.bind(this);
    this.init();
  }

  init() {
    this.el.addEventListener("mousemove", this.onMove);
    this.el.addEventListener("mouseenter", this.onEnter);
    this.el.addEventListener("mouseleave", this.onLeave);
  }

  onMove(e) {
    const rect = this.el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // calcula rotação relativa ao centro do card
    const rotateY = ((x - width / 2) / width) * this.maxRotate;
    const rotateX = -((y - height / 2) / height) * this.maxRotate;

    this.el.style.setProperty("--rX", rotateX.toFixed(2));
    this.el.style.setProperty("--rY", rotateY.toFixed(2));
  }

  onEnter() {
    this.el.classList.add("card-active");
    this.el.style.transition = "transform 120ms ease-out";
  }

  onLeave() {
    this.el.classList.remove("card-active");
    this.el.style.setProperty("--rX", 0);
    this.el.style.setProperty("--rY", 0);
    this.el.style.transition = "transform 600ms cubic-bezier(.2,.9,.3,1)";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach((card) => new ParallaxTilt(card));

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
