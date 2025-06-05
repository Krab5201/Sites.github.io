// Получаем элементы слайдера
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();


// Проверяем разрешение экрана при загрузке и изменении размера окна
function adjustForMobile() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  // Если ширина экрана меньше или равна 640px
  if (width <= 640) {
      // Уменьшаем шрифты и отступы
      document.querySelectorAll('.tabs a').forEach(link => {
          link.style.fontSize = '12px';
          link.style.padding = '5px 10px';
      });

      document.querySelector('.hero h1').style.fontSize = '20px';
      document.querySelector('.hero p').style.fontSize = '12px';

      // Делаем кнопки услуг компактнее
      document.querySelectorAll('.service-buttons button').forEach(button => {
          button.style.fontSize = '12px';
          button.style.padding = '8px';
      });
  }
}

// Вызываем функцию при загрузке страницы
window.addEventListener('load', adjustForMobile);
// Вызываем при изменении размера окна
window.addEventListener('resize', adjustForMobile);

// Дополнительно: добавляем плавное переключение видимости меню на мобильных
const tabs = document.querySelector('.tabs');
tabs.addEventListener('click', () => {
  if (window.innerWidth <= 640) {
      tabs.style.transition = 'opacity 0.3s ease';
      tabs.style.opacity = tabs.style.opacity === '0' ? '1' : '0';
  }
});