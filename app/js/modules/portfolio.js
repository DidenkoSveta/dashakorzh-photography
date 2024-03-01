document.addEventListener('DOMContentLoaded', () => {
   const openModal = (modal) => {
     modal.style.display = 'block';
     // Инициализация галереи при открытии модального окна
     const gallerySlides = slides[modal.id];
     if (gallerySlides) {
       slideIndex[modal.id] = 0;
       const img = modal.querySelector('.gallery-slide img');
       if (img) img.src = gallerySlides[slideIndex[modal.id]];
     }
   };
 
   const closeModal = (modal) => {
     modal.style.display = 'none';
   };
 
   const cards = document.querySelectorAll('.portfolio__card');
   cards.forEach(card => {
     card.addEventListener('click', (event) => {
       event.preventDefault();
       const modalId = card.getAttribute('href').substring(1);
       const modal = document.getElementById(modalId);
       if (modal) {
         openModal(modal);
       } else {
         console.error('Modal with ID ' + modalId + ' not found');
       }
     });
   });
 
   const closeButtons = document.querySelectorAll('.modal .close');
   closeButtons.forEach(button => {
     button.addEventListener('click', () => {
       const modal = button.closest('.modal');
       closeModal(modal);
     });
   });
 
   window.addEventListener('click', (event) => {
     if (event.target.classList.contains('modal')) {
       closeModal(event.target);
     }
   });
 
   // Инициализация индекса текущего изображения для каждого модального окна
   const slideIndex = {};
 
   // Массив путей к изображениям для каждой пары
   const slides = {
     'modalGeorgiyEllina': [
       "images/img/portfilio-slider/GeorgiyEllina/GeorgiyEllina-001.jpg",
       "images/img/portfilio-slider/GeorgiyEllina/GeorgiyEllina-002.jpg",
       "images/img/portfilio-slider/GeorgiyEllina/GeorgiyEllina-003.jpg",
       "images/img/portfilio-slider/GeorgiyEllina/GeorgiyEllina-004.jpg",
       "images/img/portfilio-slider/GeorgiyEllina/GeorgiyEllina-005.jpg",
       "images/img/portfilio-slider/GeorgiyEllina/GeorgiyEllina-006.jpg",
       "images/img/portfilio-slider/GeorgiyEllina/GeorgiyEllina-007.jpg",
       "images/img/portfilio-slider/GeorgiyEllina/GeorgiyEllina-008.jpg",
       "images/img/portfilio-slider/GeorgiyEllina/GeorgiyEllina-009.jpg",
     ],
     'modalRuslanVera': [
      "images/img/portfilio-slider/RuslanVera/RuslanVera-001.jpg",
      "images/img/portfilio-slider/RuslanVera/RuslanVera-002.jpg",
      "images/img/portfilio-slider/RuslanVera/RuslanVera-003.jpg",
      "images/img/portfilio-slider/RuslanVera/RuslanVera-004.jpg",
      "images/img/portfilio-slider/RuslanVera/RuslanVera-005.jpg",
      "images/img/portfilio-slider/RuslanVera/RuslanVera-006.jpg",
      "images/img/portfilio-slider/RuslanVera/RuslanVera-007.jpg",
    ],
    'modalYuraDayana': [
      "images/img/portfilio-slider/YuraDayana/YuraDayana-001.jpg",
      "images/img/portfilio-slider/YuraDayana/YuraDayana-002.jpg",
      "images/img/portfilio-slider/YuraDayana/YuraDayana-003.jpg",
      "images/img/portfilio-slider/YuraDayana/YuraDayana-004.jpg",
      "images/img/portfilio-slider/YuraDayana/YuraDayana-005.jpg",
      "images/img/portfilio-slider/YuraDayana/YuraDayana-006.jpg",
    ],
    'modalDmitriiAnastasia': [
      "images/img/portfilio-slider/DmitriiAnastasia/DmitriiAnastasia-001.jpg",
      "images/img/portfilio-slider/DmitriiAnastasia/DmitriiAnastasia-002.jpg",
      "images/img/portfilio-slider/DmitriiAnastasia/DmitriiAnastasia-003.jpg",
      "images/img/portfilio-slider/DmitriiAnastasia/DmitriiAnastasia-004.jpg",
      "images/img/portfilio-slider/DmitriiAnastasia/DmitriiAnastasia-005.jpg",
    ],
    'modalKinnTaya': [
      "images/img/portfilio-slider/KinnTaya/KinnTaya-001.jpg",
      "images/img/portfilio-slider/KinnTaya/KinnTaya-002.jpg",
      "images/img/portfilio-slider/KinnTaya/KinnTaya-003.jpg",
      "images/img/portfilio-slider/KinnTaya/KinnTaya-004.jpg",
      "images/img/portfilio-slider/KinnTaya/KinnTaya-005.jpg",
      "images/img/portfilio-slider/KinnTaya/KinnTaya-006.jpg",
      "images/img/portfilio-slider/KinnTaya/KinnTaya-007.jpg",
      "images/img/portfilio-slider/KinnTaya/KinnTaya-008.jpg",
      "images/img/portfilio-slider/KinnTaya/KinnTaya-009.jpg",
      "images/img/portfilio-slider/KinnTaya/KinnTaya-010.jpg",
    ],

    'modalNikolayIrina': [
      "images/img/portfilio-slider/NikolayIrina/NikolayIrina-001.jpg",
      "images/img/portfilio-slider/NikolayIrina/NikolayIrina-002.jpg",
      "images/img/portfilio-slider/NikolayIrina/NikolayIrina-003.jpg",
      "images/img/portfilio-slider/NikolayIrina/NikolayIrina-004.jpg",
      "images/img/portfilio-slider/NikolayIrina/NikolayIrina-005.jpg",
      "images/img/portfilio-slider/NikolayIrina/NikolayIrina-006.jpg",
      "images/img/portfilio-slider/NikolayIrina/NikolayIrina-007.jpg",
      "images/img/portfilio-slider/NikolayIrina/NikolayIrina-008.jpg",
      "images/img/portfilio-slider/NikolayIrina/NikolayIrina-009.jpg",
    ],
   };
   
   // Функция для переключения слайдов
   window.changeSlide = (modalId, n) => {
     const gallerySlides = slides[modalId];
     if (gallerySlides) {
       slideIndex[modalId] = (slideIndex[modalId] + n + gallerySlides.length) % gallerySlides.length;
       const img = document.getElementById(modalId).querySelector('.gallery-slide img');
       if (img) img.src = gallerySlides[slideIndex[modalId]];
     }
   };
 
   // Обработчики событий для кнопок навигации
   document.querySelectorAll('.prev, .next').forEach(button => {
     button.addEventListener('click', () => {
       const modalId = button.closest('.modal').id;
       const n = button.classList.contains('prev') ? -1 : 1;
       changeSlide(modalId, n);
     });
   });
 });
 