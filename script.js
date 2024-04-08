document.addEventListener("DOMContentLoaded", function() {
    const largeImageViewerDescription = document.getElementById('imageDescription');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const drawer = document.querySelector('.drawer');
    const galleryItems = document.querySelectorAll('.gallery .category img');
    const largeImageViewer = document.getElementById('largeViewer');
    const largeImageViewerImage = document.getElementById('largeImage');

    // Function to toggle sidebar
    function toggleDrawer() {
        drawer.classList.toggle('show');
    }

    // Attach click event to hamburger menu icon
    hamburgerMenu.addEventListener('click', function() {
        toggleDrawer();
    });

    // Close sidebar when a menu item is clicked
    const drawerLinks = document.querySelectorAll('.drawer ul li a');
    drawerLinks.forEach(link => {
        link.addEventListener('click', function() {
            toggleDrawer();
        });
    });

    // Close drawer when user clicks outside of the menu
    document.addEventListener('click', function(event) {
        const isClickInsideDrawer = drawer.contains(event.target);
        const isClickOnHamburgerMenu = hamburgerMenu.contains(event.target);
        if (!isClickInsideDrawer && !isClickOnHamburgerMenu) {
            drawer.classList.remove('show');
        }
    });

    // Gallery image click event
    galleryItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default behavior
            const largeImageSrc = this.getAttribute('src');
            const description = this.parentElement.getAttribute('data-description');

            // Update the source of the large image viewer
            largeImageViewerImage.setAttribute('src', largeImageSrc);

            // Update the description
            largeImageViewerDescription.textContent = description;

            // Show the large image viewer
            largeImageViewer.style.display = 'flex'; // Change display to flex
        });
    });

    // Close the large image viewer when clicked outside the image
    largeImageViewer.addEventListener('click', function() {
        this.style.display = 'none';
    });

    // Prevent the large image viewer from closing when clicked inside the viewer
    largeImageViewerImage.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    // Function to handle filter button click
    const filterButtons = document.querySelectorAll('.filter-button');
  
    const galleryCategories = document.querySelectorAll('.category');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.dataset.filter;
            // If filter is "all", show all categories
            if (filter === 'all') {
                galleryCategories.forEach(category => {
                    category.style.display = 'block';
                });
            } else {
                // Hide all categories and then show the selected category
                galleryCategories.forEach(category => {
                    if (category.classList.contains(filter)) {
                        category.style.display = 'block';
                    } else {
                        category.style.display = 'none';
                    }
                });
              
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
  // Get all slides
  const slides = document.querySelectorAll(".slide");

  // Set initial slide index
  let slideIndex = 0;

  // Function to show slide
  function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => {
      slide.style.display = "none";
    });

    // Show the slide at the given index
    slides[index].style.display = "block";

    // Update background image
    const backgroundImage = slides[index].getAttribute("data-image");
    document.querySelector(".home-section").style.backgroundImage = `url('${backgroundImage}')`;
  }

  // Function to move to the next slide
  function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0; // Loop back to the first slide
    }
    showSlide(slideIndex);
  }

  // Show the first slide initially
  showSlide(slideIndex);

  // Set interval to automatically move to the next slide every 5 seconds (adjust as needed)
  setInterval(nextSlide, 5000);
});

  document.addEventListener("DOMContentLoaded", function() {
    const expandButtons = document.querySelectorAll('.expand-button');
    const expandableContents = document.querySelectorAll('.expandable-content');

    expandButtons.forEach((button, index) => {
      button.addEventListener('click', function() {
        expandableContents.forEach((content, i) => {
          if (i !== index) {
            content.classList.remove('expanded');
          } 
        });
        expandableContents[index].classList.toggle('expanded');
      });
    });
  });
function toggleDescription(index) {
  var descriptions = document.querySelectorAll('.expandable-content');
  descriptions.forEach(function(description) {
    description.classList.remove('active');
  });
  document.getElementById('description-' + index).classList.add('active');
}


