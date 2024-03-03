window.addEventListener('load', () => {
   // Добавляем класс 'loaded' к контейнеру промо для активации анимаций
   const promoContainer = document.querySelector('.promo__container');
   if (promoContainer) {
      promoContainer.classList.add('loaded');
   }

   // Настройки для IntersectionObserver
   const observerOptions = {
      root: null, // относительно вьюпорта
      threshold: 0.1, // процент пересечения целевого элемента с корнем для вызова колбэка
      rootMargin: "0px" // margin вокруг корня. Можно использовать значения как в CSS
   };

   // Callback функция для IntersectionObserver
   const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
         // Проверяем, пересек ли элемент с корнем
         if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Прекращаем наблюдение за элементом после его появления
         }
      });
   };

   // Создаем экземпляр IntersectionObserver
   const observer = new IntersectionObserver(observerCallback, observerOptions);

   // Начинаем наблюдение за элементами
   document.querySelectorAll('h2, .portfolio__card, .about__description, .price__card, .feedback__wrapper, .quiz__gifts, .quiz__wrapper, .advantages__card, .process__item, .faq-item').forEach((el) => {
      observer.observe(el);
   });
});
