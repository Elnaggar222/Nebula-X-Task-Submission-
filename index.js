document.addEventListener("DOMContentLoaded", () => {
    const elementsToAnimate = document.querySelectorAll(
      ".slide-in-right, .slide-in-left"
    );
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    });
    elementsToAnimate.forEach((element) => observer.observe(element));
  });