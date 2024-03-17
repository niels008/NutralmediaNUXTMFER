const Animations = () => {
  // scroll in animatie
  const images = document.querySelectorAll(".anim");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.style.animation = `anim1 ${entry.target.dataset.duration} ${entry.target.dataset.delay} forwards ease-out`;
      } else {
        entry.target.style.animation = "none";
      }
    });
  });
  images.forEach((image) => {
    observer.observe(image);
  });
};

export default Animations;
