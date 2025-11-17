document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".projimage img");
  const modal = document.querySelector(".image-modal");
  const modalImg = document.querySelector(".modal-image");
  const closeBtn = document.querySelector(".close-modal");

  // Function to prevent body scroll when modal is open
  function preventBodyScroll() {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  }

  // Function to restore body scroll when modal is closed
  function restoreBodyScroll() {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }

  if (images.length && modal && modalImg && closeBtn) {
    images.forEach((img) => {
      img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
        preventBodyScroll(); // Prevent scrolling when modal opens
      });
    });

    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      modal.style.display = "none";
      restoreBodyScroll(); // Restore scrolling when modal closes
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Function to prevent body scroll when modal is open
  function preventBodyScroll() {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  }

  // Function to restore body scroll when modal is closed
  function restoreBodyScroll() {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }

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
        preventBodyScroll(); // Prevent scrolling when modal opens
      });
    });

  // Close modals
  document.querySelectorAll(".close-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      this.closest(".modal").style.display = "none";
      restoreBodyScroll(); // Restore scrolling when modal closes
    });
  });

  // Close when clicking outside image
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", function (e) {
      if (e.target === this) {
        this.style.display = "none";
        restoreBodyScroll(); // Restore scrolling when modal closes
      }
    });
  });

  // Close modal on Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal").forEach((modal) => {
        if (modal.style.display === "flex" || modal.style.display === "block") {
          modal.style.display = "none";
          restoreBodyScroll(); // Restore scrolling when modal closes
        }
      });
    }
  });
});
// Project Images Slider (Static, no cloning)
document.addEventListener("DOMContentLoaded", function () {

  // Modal image view
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const captionText = document.getElementById("caption");
  const closeBtn = document.querySelector(".close");

  // Function to prevent body scroll when modal is open
  function preventBodyScroll() {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  }

  // Function to restore body scroll when modal is closed
  function restoreBodyScroll() {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }

  document.querySelectorAll(".slider-item img").forEach((img) => {
    img.addEventListener("click", function () {
      if (!modal || !modalImg) return;
      modal.style.display = "block";
      modalImg.src = this.src;
      if (captionText) captionText.innerHTML = this.alt || "Project Image";
      preventBodyScroll(); // Prevent scrolling when modal opens
    });
  });
  
  if (closeBtn) {
    closeBtn.onclick = function () { 
      if (modal) modal.style.display = "none";
      restoreBodyScroll(); // Restore scrolling when modal closes
    };
  }
  
  window.onclick = function (event) { 
    if (event.target == modal && modal) {
      modal.style.display = "none";
      restoreBodyScroll(); // Restore scrolling when modal closes
    }
  };
  
  document.addEventListener("keydown", function (event) { 
    if (event.key === "Escape" && modal && (modal.style.display === "block" || modal.style.display === "flex")) {
      modal.style.display = "none";
      restoreBodyScroll(); // Restore scrolling when modal closes
    }
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

// Skills Progress Bars Animation
document.addEventListener("DOMContentLoaded", function () {
  function animateProgressBars(container) {
    const progressBars = container.querySelectorAll('.skill-progress-fill');
    progressBars.forEach(bar => {
      const percentage = bar.getAttribute('data-percentage');
      bar.style.width = '0%';
      setTimeout(() => {
        bar.style.width = percentage + '%';
      }, 100);
    });
  }

  // Function to close progress modal
  function closeProgressModal() {
    const progressModal = document.getElementById('progressModal');
    if (progressModal) {
      progressModal.style.display = 'none';
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
  }

  // Progress Modal Functionality
  const progressBtn = document.getElementById('progressBtn');
  const progressModal = document.getElementById('progressModal');
  const progressModalClose = document.querySelector('.progress-modal-close');
  const progressModalExitBtn = document.querySelector('.progress-modal-exit-btn');

  if (progressBtn && progressModal) {
    progressBtn.addEventListener('click', function() {
      progressModal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      
      // Animate progress bars when modal opens
      setTimeout(() => {
        animateProgressBars(progressModal);
      }, 200);
    });
  }

  if (progressModalClose) {
    progressModalClose.addEventListener('click', closeProgressModal);
  }

  if (progressModalExitBtn) {
    progressModalExitBtn.addEventListener('click', closeProgressModal);
  }

  // Close modal when clicking outside
  if (progressModal) {
    progressModal.addEventListener('click', function(e) {
      if (e.target === progressModal) {
        closeProgressModal();
      }
    });
  }

  // Close modal on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && progressModal && progressModal.style.display === 'flex') {
      closeProgressModal();
    }
  });
});

// Copy phone number function
function copyPhoneNumber() {
  const phoneNumber = '09 851 792 940';
  navigator.clipboard.writeText(phoneNumber).then(() => {
    // Optional: Show a notification
    alert('Phone number copied to clipboard: ' + phoneNumber);
  }).catch(err => {
    console.error('Failed to copy phone number:', err);
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = phoneNumber;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      alert('Phone number copied to clipboard: ' + phoneNumber);
    } catch (err) {
      console.error('Fallback copy failed:', err);
    }
    document.body.removeChild(textArea);
  });
}

