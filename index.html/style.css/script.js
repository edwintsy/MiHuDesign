document.addEventListener("DOMContentLoaded", () => {
  const dynamicElements = document.querySelectorAll(".dynamic-text");

  const observerOptions = {
    threshold: 0.1, // 可见区域的 10% 时触发
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); // 添加 visible 类
      }
    });
  }, observerOptions);

  dynamicElements.forEach((el) => observer.observe(el));
});
