function toggleVideo() {
  const video = document.getElementById("video");
  const playIcon = document.getElementById("play-icon");
  const videoBox = document.querySelector(".video-box");

  if (video.paused) {
    video.play();
    videoBox.classList.remove("video-paused");
    videoBox.classList.add("video-playing");
  } else {
    video.pause();
    videoBox.classList.remove("video-playing");
    videoBox.classList.add("video-paused");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("video");
  const videoBox = document.querySelector(".video-box");
  const videoSection = document.querySelector(".video-section");

  if (!video || !videoBox || !videoSection) return;

  videoBox.classList.add("video-paused");
  video.load();

  video.addEventListener("loadedmetadata", () => {
    setSectionBackground(video, videoSection);
  });

  window.addEventListener("resize", () => {
    setSectionBackground(video, videoSection);
  });

  video.addEventListener("ended", () => {
    videoBox.classList.remove("video-playing");
    videoBox.classList.add("video-paused");
  });
});

// function setSectionBackground(video, section) {
//   const width = video.offsetWidth;
//   const ratio = video.videoHeight / video.videoWidth;
//   const height = width * ratio;
//   const split = height / 2;

//   // section.style.background = `linear-gradient(to bottom, #ffffff ${split}px, #d3f8d3 ${split}px)`;
// }


// Popular section
$(document).ready(function () {
  $('.carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next'),
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // Add event handlers for arrow styling based on slide position
  $('.carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    // Total number of slides
    var totalSlides = slick.slideCount;
    
    // Check if we're at the beginning (first 3 slides)
    if (nextSlide <= 0) {
      $('.slick-prev').addClass('at-beginning');
    } else {
      $('.slick-prev').removeClass('at-beginning');
    }
    
    // Check if we're at the end (last 3 slides)
    // Since slidesToShow is 3, we need to check if we're at the last possible position
    if (nextSlide >= totalSlides - 3) {
      $('.slick-next').addClass('at-end');
    } else {
      $('.slick-next').removeClass('at-end');
    }
  });

  // Modal functionality
  $('.request-btn').on('click', function () {
    $('#requestModal').addClass('active');
    // Hide success message when opening modal
    $('#successMessage').removeClass('show');
  });
  
  $('.cancel').on('click', function () {
    $('#requestModal').removeClass('active');
  });
  
  $('.submit').on('click', function () {
    // Show success message
    $('#successMessage').addClass('show');
    
    // Close modal after 2 seconds
    setTimeout(function() {
      $('#requestModal').removeClass('active');
      // Reset form fields if needed
      $('#requestModal input, #requestModal textarea').val('');
    }, 2000);
  });

  $(window).on('click', function (e) {
    if ($(e.target).is('#requestModal')) {
      $('#requestModal').removeClass('active');
    }
  });

  $(document).on('keydown', function (e) {
    if (e.key === 'Escape') {
      $('#requestModal').removeClass('active');
    }
  });
});

// Update the search dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
  const searchIcon = document.getElementById('search-icon');
  const searchDropdown = document.getElementById('search-dropdown');
  const cartIcon = document.getElementById('cart-icon');
  const searchButton = document.querySelector('.search-dropdown button');
  
  // Toggle search dropdown
  searchIcon.addEventListener('click', function(e) {
    searchDropdown.classList.toggle('active');
    // Close the dropdown when clicking outside
    e.stopPropagation();
  });
  
  // Toggle cart icon color
  cartIcon.addEventListener('click', function() {
    cartIcon.classList.toggle('active');
  });
  
  // Close search dropdown when clicking elsewhere
  document.addEventListener('click', function(e) {
    if (!searchDropdown.contains(e.target) && e.target !== searchIcon) {
      searchDropdown.classList.remove('active');
    }
  });
  
  // Prevent dropdown from closing when clicking inside it
  searchDropdown.addEventListener('click', function(e) {
    e.stopPropagation();
  });
  
  // Add functionality to the search button to scroll to Home Kitchen section
  searchButton.addEventListener('click', function() {
    const homeKitchenSection = document.querySelector('.home-kitchen');
    if (homeKitchenSection) {
      homeKitchenSection.scrollIntoView({ behavior: 'smooth' });
      searchDropdown.classList.remove('active'); // Close the dropdown after search
    }
  });
  
  // Add the same functionality to the main search button in hero section
  const mainSearchButton = document.querySelector('.hero .search-bar button');
  if (mainSearchButton) {
    mainSearchButton.addEventListener('click', function() {
      const homeKitchenSection = document.querySelector('.home-kitchen');
      if (homeKitchenSection) {
        homeKitchenSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});

// Add counter functionality for the + and - buttons in the carousel items
document.addEventListener('DOMContentLoaded', function() {
  // Get all item footers in the carousel
  const itemFooters = document.querySelectorAll('.item-footer');
  
  // Add event listeners to each footer
  itemFooters.forEach(footer => {
    const minusBtn = footer.querySelector('.add-btn:first-of-type');
    const plusBtn = footer.querySelector('.add-btn:last-of-type');
    const countSpan = footer.querySelector('span:nth-of-type(3)'); // The counter span
    
    // Initialize counter
    let count = 0;
    
    // Add click event for minus button
    minusBtn.addEventListener('click', function(e) {
      e.stopPropagation(); // Prevent event bubbling
      if (count > 0) {
        count--;
        countSpan.textContent = count;
      }
    });
    
    // Add click event for plus button
    plusBtn.addEventListener('click', function(e) {
      e.stopPropagation(); // Prevent event bubbling
      count++;
      countSpan.textContent = count;
    });
  });
});