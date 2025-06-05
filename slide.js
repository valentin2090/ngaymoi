let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
        dots[i].classList.toggle("active", i === index);
      });
      slideIndex = index;
    }

    function nextSlide() {
      slideIndex = (slideIndex + 1) % slides.length;
      showSlide(slideIndex);
    }

    setInterval(nextSlide, 5000); // Chuyển slide mỗi 5s