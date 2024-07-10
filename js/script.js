document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      document.querySelector('.logo-container').style.opacity = '0';
      setTimeout(function() {
        document.querySelector('.logo-container').style.display = 'none';
        document.querySelector('.carousel-container').style.opacity = '1';
      }, 1000);
    }, 3000); // Display logo for 5 seconds
  });


  // document.addEventListener("DOMContentLoaded", function() {
  //   var logoContainer = document.querySelector('.logo-container');
  //   var carouselContainer = document.querySelector('.carousel-container');
  
  //   if (logoContainer && carouselContainer) {
  //     setTimeout(function() {
  //       logoContainer.style.transition = 'opacity 1s';
  //       logoContainer.style.opacity = '0';
  
  //       setTimeout(function() {
  //         logoContainer.style.display = 'none';
  //         carouselContainer.style.transition = 'opacity 1s';
  //         carouselContainer.style.opacity = '1';
  //       }, 1000); // Wait for opacity transition to complete
  //     }, 5000); // Display logo for 5 seconds
  //   }
  // });
  