function rearrangeHeroSection() {
  const leftImg = document.querySelector(".hero-image-left");
  const rightImg = document.querySelector(".hero-image-right");
  const contentInfo = document.querySelector(".hero-content-info");
  const heroContent = document.querySelector(".hero-content");

  if (!leftImg || !rightImg || !contentInfo || !heroContent) return;

  if (
    window.innerWidth <= 1200 &&
    !document.querySelector(".hero-images-wrap")
  ) {
    const imgWrap = document.createElement("div");
    imgWrap.classList.add("hero-images-wrap");

    // Insert wrapper before contentInfo
    heroContent.insertBefore(imgWrap, contentInfo);

    // Move both images into wrapper
    imgWrap.appendChild(leftImg);
    imgWrap.appendChild(rightImg);
  }

  // Restore layout if resized above 1200px
  if (window.innerWidth > 1200 && document.querySelector(".hero-images-wrap")) {
    const imgWrap = document.querySelector(".hero-images-wrap");
    heroContent.insertBefore(leftImg, heroContent.firstChild);
    heroContent.appendChild(rightImg);
    imgWrap.remove();
  }
}

window.addEventListener("DOMContentLoaded", rearrangeHeroSection);
window.addEventListener("resize", rearrangeHeroSection);
