document.addEventListener("DOMContentLoaded", () => {
  const dynamicElements = document.querySelectorAll(".dynamic-text");

  const observerOptions = {
    threshold: 0.5, // 元素至少有 50% 进入视口时触发
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  dynamicElements.forEach((el) => observer.observe(el));
});
