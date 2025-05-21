const animateHeroContent = (selector) => {
  const heroContent = document.querySelector(selector);
  let start = null;

  const step = (timestamp) => {
    if (!start) {
      start = timestamp;
    }

    const elapsed = timestamp - start;

    if (elapsed < 300) {
      window.requestAnimationFrame(step);
    } else {
      heroContent.style.transform = "translate(0)";
    }
  };

  window.requestAnimationFrame(step);
};

export default animateHeroContent;
