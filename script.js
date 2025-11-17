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

// Theme Picker Functionality
(function() {
  const themeToggle = document.getElementById('themeToggle');
  const themePicker = document.querySelector('.theme-picker');
  const themeOptions = document.querySelectorAll('.theme-option');
  
  if (!themeToggle || !themePicker) return;
  
  // Load saved theme or default to maroon
  const savedTheme = localStorage.getItem('portfolio-theme') || 'maroon';
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  // Set active theme button
  themeOptions.forEach(option => {
    if (option.getAttribute('data-theme') === savedTheme) {
      option.classList.add('active');
    }
  });
  
  // Toggle theme picker
  themeToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    themePicker.classList.toggle('active');
  });
  
  // Close theme picker when clicking outside
  document.addEventListener('click', function(e) {
    if (!themePicker.contains(e.target)) {
      themePicker.classList.remove('active');
    }
  });
  
  // Handle theme selection
  themeOptions.forEach(option => {
    option.addEventListener('click', function() {
      const selectedTheme = this.getAttribute('data-theme');
      
      // Update theme
      document.documentElement.setAttribute('data-theme', selectedTheme);
      
      // Save to localStorage
      localStorage.setItem('portfolio-theme', selectedTheme);
      
      // Update active state
      themeOptions.forEach(opt => opt.classList.remove('active'));
      this.classList.add('active');
      
      // Close picker
      themePicker.classList.remove('active');
    });
  });
})();

// Skills Add/Edit Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Functions to prevent/restore body scroll (scoped to this section)
  function preventBodyScroll() {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  }

  function restoreBodyScroll() {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }

  const addSkillBtn = document.getElementById('addSkillBtn');
  const skillEditModal = document.getElementById('skillEditModal');
  const skillEditForm = document.getElementById('skillEditForm');
  const skillEditTitle = document.getElementById('skillEditTitle');
  const skillNameInput = document.getElementById('skillNameInput');
  const skillPercentageInput = document.getElementById('skillPercentageInput');
  const skillCancelBtn = document.getElementById('skillCancelBtn');
  const skillDeleteBtn = document.getElementById('skillDeleteBtn');
  const skillEditModalClose = document.querySelector('.skill-edit-modal-close');
  const skillsProgressModal = document.querySelector('.skills-progress-modal');
  let currentEditingItem = null;
  let skillToDelete = null; // Store skill name for deletion

  // Default skills (used if localStorage is empty)
  const defaultSkills = [
    { name: 'HTML', percentage: 75 },
    { name: 'CSS', percentage: 78 },
    { name: 'JavaScript', percentage: 75 },
    { name: 'C#', percentage: 60 },
    { name: 'React', percentage: 65 },
    { name: 'Node.js', percentage: 45 },
    { name: 'Next.js', percentage: 45 },
    { name: 'Express', percentage: 40 },
    { name: 'Tailwind', percentage: 50 },
    { name: 'Firebase', percentage: 70 },
    { name: 'Supabase', percentage: 50 },
    { name: 'SQL', percentage: 60 }
  ];

  // Function to get all skills from DOM
  function getAllSkills() {
    const skillItems = skillsProgressModal.querySelectorAll('.skill-progress-item');
    const skills = [];
    skillItems.forEach(item => {
      const name = item.querySelector('.skill-name').textContent.trim();
      const percentage = parseInt(item.querySelector('.skill-progress-fill').getAttribute('data-percentage'));
      skills.push({ name, percentage });
    });
    return skills;
  }

  // Function to save skills to localStorage
  function saveSkills() {
    const skills = getAllSkills();
    localStorage.setItem('portfolio-skills', JSON.stringify(skills));
  }

  // Function to load skills from localStorage
  function loadSkills() {
    const savedSkills = localStorage.getItem('portfolio-skills');
    const skills = savedSkills ? JSON.parse(savedSkills) : defaultSkills;
    
    // Clear existing skills
    if (skillsProgressModal) {
      skillsProgressModal.innerHTML = '';
    }
    
    // Render skills
    skills.forEach(skill => {
      const skillItem = document.createElement('div');
      skillItem.className = 'skill-progress-item';
      skillItem.innerHTML = `
        <div class="skill-progress-header">
          <span class="skill-name">${skill.name}</span>
          <button class="skill-edit-btn" data-skill="${skill.name}" data-percentage="${skill.percentage}">Edit</button>
        </div>
        <div class="skill-progress-bar">
          <div class="skill-progress-fill" data-percentage="${skill.percentage}" style="width: 0%;">
            <span class="skill-percentage">${skill.percentage}%</span>
          </div>
        </div>
      `;
      
      if (skillsProgressModal) {
        skillsProgressModal.appendChild(skillItem);
      }
    });
  }

  // Load skills on page load
  loadSkills();
  
  // Save default skills to localStorage if it's the first time
  if (!localStorage.getItem('portfolio-skills')) {
    saveSkills();
  }

  // Open add skill modal
  if (addSkillBtn) {
    addSkillBtn.addEventListener('click', function() {
      currentEditingItem = null;
      skillEditTitle.textContent = 'Add New Skill';
      skillNameInput.value = '';
      skillPercentageInput.value = '';
      skillEditModal.style.display = 'flex';
      if (skillDeleteBtn) {
        skillDeleteBtn.style.display = 'none'; // Hide delete button when adding
      }
      preventBodyScroll();
    });
  }

  // Open edit skill modal
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('skill-edit-btn')) {
      const btn = e.target;
      const skillName = btn.getAttribute('data-skill');
      const skillPercentage = btn.getAttribute('data-percentage');
      currentEditingItem = btn.closest('.skill-progress-item');
      
      skillEditTitle.textContent = 'Edit Skill';
      skillNameInput.value = skillName;
      skillPercentageInput.value = skillPercentage;
      skillEditModal.style.display = 'flex';
      if (skillDeleteBtn) {
        skillDeleteBtn.style.display = 'block'; // Show delete button when editing
      }
      preventBodyScroll();
    }
  });

  // Close edit modal
  function closeSkillEditModal() {
    skillEditModal.style.display = 'none';
    restoreBodyScroll();
    currentEditingItem = null;
  }

  if (skillEditModalClose) {
    skillEditModalClose.addEventListener('click', closeSkillEditModal);
  }

  if (skillCancelBtn) {
    skillCancelBtn.addEventListener('click', closeSkillEditModal);
  }

  // Delete Confirmation Modal
  const deleteConfirmModal = document.getElementById('deleteConfirmModal');
  const deleteConfirmCancelBtn = document.getElementById('deleteConfirmCancelBtn');
  const deleteConfirmDeleteBtn = document.getElementById('deleteConfirmDeleteBtn');
  const deleteConfirmModalClose = document.querySelector('.delete-confirm-modal-close');
  
  // Debug: Check if modal elements exist
  console.log('deleteConfirmModal:', deleteConfirmModal);
  console.log('deleteConfirmDeleteBtn:', deleteConfirmDeleteBtn);

  // Function to close delete confirmation modal
  function closeDeleteConfirmModal() {
    if (deleteConfirmModal) {
      deleteConfirmModal.style.display = 'none';
      restoreBodyScroll();
      skillToDelete = null; // Clear reference when modal is closed
    }
  }

  // Handle delete button - open confirmation modal
  // Use event delegation to catch clicks on the delete button
  if (skillDeleteBtn) {
    skillDeleteBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      console.log('Delete button clicked');
      
      // Get skill name from the input field (more reliable)
      const skillName = skillNameInput.value.trim();
      console.log('Skill name from input:', skillName);
      
      if (skillName) {
        skillToDelete = skillName;
        console.log('Stored skillToDelete:', skillToDelete);
        // Close edit modal first
        skillEditModal.style.display = 'none';
        restoreBodyScroll();
        // Open delete confirmation modal
        if (deleteConfirmModal) {
          deleteConfirmModal.style.display = 'flex';
          preventBodyScroll();
          console.log('Delete confirmation modal opened');
        } else {
          console.error('deleteConfirmModal not found!');
        }
      } else if (currentEditingItem) {
        // Fallback: Get skill name from the current editing item
        const skillNameSpan = currentEditingItem.querySelector('.skill-name');
        if (skillNameSpan) {
          skillToDelete = skillNameSpan.textContent.trim();
          console.log('Stored skillToDelete (from DOM):', skillToDelete);
          // Close edit modal first
          skillEditModal.style.display = 'none';
          restoreBodyScroll();
          // Open delete confirmation modal
          if (deleteConfirmModal) {
            deleteConfirmModal.style.display = 'flex';
            preventBodyScroll();
            console.log('Delete confirmation modal opened');
          } else {
            console.error('deleteConfirmModal not found!');
          }
        }
      } else {
        console.error('No skill name found and no currentEditingItem');
      }
    });
  } else {
    console.error('skillDeleteBtn not found!');
  }

  // Handle delete confirmation
  if (deleteConfirmDeleteBtn) {
    deleteConfirmDeleteBtn.addEventListener('click', function() {
      console.log('Delete confirmed, skillToDelete:', skillToDelete);
      
      if (skillToDelete && skillsProgressModal) {
        // Find the skill item by name
        const skillItems = skillsProgressModal.querySelectorAll('.skill-progress-item');
        console.log('Total skill items found:', skillItems.length);
        
        let found = false;
        skillItems.forEach(item => {
          const skillNameSpan = item.querySelector('.skill-name');
          if (skillNameSpan) {
            const itemName = skillNameSpan.textContent.trim();
            console.log('Comparing:', itemName, '===', skillToDelete, '?', itemName === skillToDelete);
            if (itemName === skillToDelete) {
              item.remove();
              found = true;
              console.log('Skill removed successfully');
            }
          }
        });
        
        if (found) {
          saveSkills(); // Save to localStorage after deletion
          closeDeleteConfirmModal();
          skillToDelete = null;
          currentEditingItem = null;
        } else {
          console.error('Skill not found for deletion:', skillToDelete);
          console.log('Available skills:', Array.from(skillItems).map(item => {
            const span = item.querySelector('.skill-name');
            return span ? span.textContent.trim() : 'N/A';
          }));
          alert('Error: Could not find skill to delete. Please try again.');
          closeDeleteConfirmModal();
        }
      } else {
        console.error('Missing skillToDelete or skillsProgressModal');
        console.log('skillToDelete:', skillToDelete);
        console.log('skillsProgressModal:', skillsProgressModal);
      }
    });
  }

  // Close delete confirmation modal
  if (deleteConfirmCancelBtn) {
    deleteConfirmCancelBtn.addEventListener('click', closeDeleteConfirmModal);
  }

  if (deleteConfirmModalClose) {
    deleteConfirmModalClose.addEventListener('click', closeDeleteConfirmModal);
  }

  // Close delete modal when clicking outside
  if (deleteConfirmModal) {
    deleteConfirmModal.addEventListener('click', function(e) {
      if (e.target === deleteConfirmModal) {
        closeDeleteConfirmModal();
      }
    });
  }

  // Close delete modal on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && deleteConfirmModal && deleteConfirmModal.style.display === 'flex') {
      closeDeleteConfirmModal();
    }
  });

  // Close modal when clicking outside
  if (skillEditModal) {
    skillEditModal.addEventListener('click', function(e) {
      if (e.target === skillEditModal) {
        closeSkillEditModal();
      }
    });
  }

  // Handle form submission
  if (skillEditForm) {
    skillEditForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const skillName = skillNameInput.value.trim();
      const skillPercentage = parseInt(skillPercentageInput.value);
      
      if (!skillName || isNaN(skillPercentage) || skillPercentage < 0 || skillPercentage > 100) {
        alert('Please enter a valid skill name and percentage (0-100)');
        return;
      }

      if (currentEditingItem) {
        // Edit existing skill
        const skillNameSpan = currentEditingItem.querySelector('.skill-name');
        const progressFill = currentEditingItem.querySelector('.skill-progress-fill');
        const percentageSpan = currentEditingItem.querySelector('.skill-percentage');
        const editBtn = currentEditingItem.querySelector('.skill-edit-btn');
        
        skillNameSpan.textContent = skillName;
        progressFill.setAttribute('data-percentage', skillPercentage);
        progressFill.style.width = '0%';
        percentageSpan.textContent = skillPercentage + '%';
        editBtn.setAttribute('data-skill', skillName);
        editBtn.setAttribute('data-percentage', skillPercentage);
        
        // Animate the progress bar
        setTimeout(() => {
          progressFill.style.width = skillPercentage + '%';
        }, 100);
        
        // Save to localStorage
        saveSkills();
      } else {
        // Add new skill
        const newSkillItem = document.createElement('div');
        newSkillItem.className = 'skill-progress-item';
        newSkillItem.innerHTML = `
          <div class="skill-progress-header">
            <span class="skill-name">${skillName}</span>
            <button class="skill-edit-btn" data-skill="${skillName}" data-percentage="${skillPercentage}">Edit</button>
          </div>
          <div class="skill-progress-bar">
            <div class="skill-progress-fill" data-percentage="${skillPercentage}">
              <span class="skill-percentage">${skillPercentage}%</span>
            </div>
          </div>
        `;
        
        if (skillsProgressModal) {
          skillsProgressModal.appendChild(newSkillItem);
          
          // Animate the new progress bar
          const newProgressFill = newSkillItem.querySelector('.skill-progress-fill');
          setTimeout(() => {
            newProgressFill.style.width = skillPercentage + '%';
          }, 100);
        }
        
        // Save to localStorage
        saveSkills();
      }
      
      closeSkillEditModal();
    });
  }

  // Close modal on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && skillEditModal && skillEditModal.style.display === 'flex') {
      closeSkillEditModal();
    }
  });
});

