window.addEventListener('scroll', () => {
  const aboutSection = document.querySelector('#about');
  const dynamicTexts = document.querySelectorAll('.dynamic-text');
  const rect = aboutSection.getBoundingClientRect();
  
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    dynamicTexts.forEach((text) => text.classList.add('visible'));
  } else {
    dynamicTexts.forEach((text) => text.classList.remove('visible'));
  }
});
