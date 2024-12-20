document.addEventListener("DOMContentLoaded", () => {
  const dynamicElements = document.querySelectorAll(".dynamic-text");

  const observerOptions = {
    threshold: 0.1, // 视口显示 10% 时触发
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, observerOptions);

  dynamicElements.forEach((el) => observer.observe(el));
});
