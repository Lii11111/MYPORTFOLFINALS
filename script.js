document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".projimage img");
  const modal = document.querySelector(".image-modal");
  const modalImg = document.querySelector(".modal-image");
  const closeBtn = document.querySelector(".close-modal");

  // Open modal when image is clicked
  images.forEach((img) => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
    });
  });

  // Close modal when X is clicked
  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent bubbling to modal
    modal.style.display = "none";
  });
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
// PROJECT SLIDERRRRRRRRRRRRRRRRRRRRR--------------------------------------------
const sliderTrack = document.getElementById("sliderTrack");
const items = document.querySelectorAll(".slider-item");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

let currentIndex = 2; // Start with 3rd image (center)
const itemWidth = 220; // 200px width + 20px gap

function updateSlider() {
  // Remove active class from all items
  items.forEach((item) => item.classList.remove("active"));

  // Add active class to current item
  items[currentIndex].classList.add("active");

  // Calculate new position
  const newPosition =
    -currentIndex * itemWidth + (window.innerWidth / 2 - itemWidth / 2);
  sliderTrack.style.transform = `translateX(${newPosition}px)`;

  // Handle infinite loop (when reaching cloned items)
  if (currentIndex === 0) {
    setTimeout(() => {
      currentIndex = items.length - 2;
      sliderTrack.style.transition = "none";
      updateSlider();
      setTimeout(() => {
        sliderTrack.style.transition = "transform 0.5s ease";
      }, 50);
    }, 500);
  }

  if (currentIndex === items.length - 1) {
    setTimeout(() => {
      currentIndex = 1;
      sliderTrack.style.transition = "none";
      updateSlider();
      setTimeout(() => {
        sliderTrack.style.transition = "transform 0.5s ease";
      }, 50);
    }, 500);
  }
}

function slide(direction) {
  currentIndex += direction;
  updateSlider();
}

prevBtn.addEventListener("click", () => slide(-1));
nextBtn.addEventListener("click", () => slide(1));

// Initialize
updateSlider();
// Get the modal and its elements

// Add click event to all slider images
document.querySelectorAll(".slider-item img").forEach((img) => {
  img.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt || "Project Image";
  });
});

// Close modal when X is clicked
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// Close modal when clicking outside image
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Close with ESC key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modal.style.display = "none";
  }
});

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
