document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".projimage img");
  const modal = document.querySelector(".image-modal");
  const modalImg = document.querySelector(".modal-image");
  const closeBtn = document.querySelector(".close-modal");

  if (images.length && modal && modalImg && closeBtn) {
    images.forEach((img) => {
      img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
      });
    });

    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      modal.style.display = "none";
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Handle both image clicks and button clicks
  document
    .querySelectorAll(".clickable-image, .view-btn")
    .forEach((element) => {
      element.addEventListener("click", function () {
        const modalId = this.getAttribute("data-modal");
        const modal = document.getElementById(modalId);
        const imgSrc =
          this.tagName === "IMG"
            ? this.src
            : this.previousElementSibling.previousElementSibling.src;

        modal.style.display = "flex";
        modal.querySelector(".modal-content").src = imgSrc;
      });
    });

  // Close modals
  document.querySelectorAll(".close-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      this.closest(".modal").style.display = "none";
    });
  });

  // Close when clicking outside image
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", function (e) {
      if (e.target === this) {
        this.style.display = "none";
      }
    });
  });
});
// Project Images Slider (Static, no cloning)
document.addEventListener("DOMContentLoaded", function () {

  // Modal image view
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const captionText = document.getElementById("caption");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".slider-item img").forEach((img) => {
    img.addEventListener("click", function () {
      if (!modal || !modalImg) return;
      modal.style.display = "block";
      modalImg.src = this.src;
      if (captionText) captionText.innerHTML = this.alt || "Project Image";
    });
  });
  
  if (closeBtn) {
    closeBtn.onclick = function () { 
      if (modal) modal.style.display = "none"; 
    };
  }
  
  window.onclick = function (event) { 
    if (event.target == modal && modal) modal.style.display = "none"; 
  };
  
  document.addEventListener("keydown", function (event) { 
    if (event.key === "Escape" && modal) modal.style.display = "none"; 
  });
});
// (Removed redundant global modal handlers to avoid ReferenceErrors)

document.addEventListener("DOMContentLoaded", function () {
  const loginSlider = document.querySelector("#loginSlider");
  const slides = loginSlider.querySelectorAll(".login-slide");
  const nextBtn = loginSlider.querySelector(".login-next");
  const prevBtn = loginSlider.querySelector(".login-prev");
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  }

  nextBtn.addEventListener("click", () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });

  prevBtn.addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });
});


// Clone items for infinite loop animation (Technical Skills)
document.addEventListener("DOMContentLoaded", function () {
  const techskillsItems = document.getElementById("techskillsItems");
  const techskillsWrapper = document.querySelector(".techskills-wrapper");
  
  if (techskillsItems && techskillsWrapper) {
    const clone = techskillsItems.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    techskillsWrapper.appendChild(clone);
  }
});

// Scroll Animation Observer
document.addEventListener("DOMContentLoaded", function () {
  // Create Intersection Observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        // Unobserve after animation to prevent re-triggering
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all scroll-animate elements
  const animateElements = document.querySelectorAll('.scroll-animate');
  animateElements.forEach(el => observer.observe(el));
});

