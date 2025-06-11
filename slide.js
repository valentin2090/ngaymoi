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

// script chạy slide đối tác
const slider = document.getElementById('slider-track');
const container = document.getElementById('slider-container');
let isDragging = false;
let startX;
let scrollLeft;
let autoSlideInterval;

// Kéo chuột
container.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX - container.offsetLeft;
  scrollLeft = slider.offsetLeft;
  container.style.cursor = 'grabbing';
});

container.addEventListener('mouseleave', () => {
  isDragging = false;
  container.style.cursor = 'grab';
});

container.addEventListener('mouseup', () => {
  isDragging = false;
  container.style.cursor = 'grab';
});

container.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX) * 1.2; // tốc độ kéo
  slider.style.transform = `translateX(${scrollLeft + walk}px)`;
});

// Slide tự động
let currentOffset = 0;
const slideStep = 220;
function autoSlide() {
  const maxScroll = slider.scrollWidth - container.offsetWidth;
  currentOffset += slideStep;
  if (currentOffset > maxScroll) {
    currentOffset = 0;
  }
  slider.style.transform = `translateX(-${currentOffset}px)`;
}

autoSlideInterval = setInterval(autoSlide, 3000);

// Slide thủ công
function manualSlide(direction) {
  clearInterval(autoSlideInterval);
  currentOffset += slideStep * direction;
  const maxScroll = slider.scrollWidth - container.offsetWidth;
  if (currentOffset < 0) currentOffset = 0;
  if (currentOffset > maxScroll) currentOffset = maxScroll;
  slider.style.transform = `translateX(-${currentOffset}px)`;
}

// nút back to top

// Hiển thị nút khi cuộn xuống
window.onscroll = function() {
  const btn = document.getElementById("backToTop");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Cuộn mượt lên đầu trang
function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

