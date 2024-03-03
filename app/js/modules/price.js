document.addEventListener('DOMContentLoaded', () => {
   const modal = document.getElementById('modalBooking');
   const modalCloseBtn = document.querySelector('.close-price');
   const bookingForm = document.getElementById('bookingForm');
   const selectedPackageInput = document.getElementById('selectedPackage');
   const promoButton = document.querySelector('.promo__button'); // кнопка в промо-блоке

   // Функция для открытия модального окна с установкой выбранного тарифа
   function openModal(packageName) {
       modal.style.display = 'flex';
       selectedPackageInput.value = packageName;
   }

   // Функция для закрытия модального окна
   function closeModal() {
       modal.style.display = 'none';
   }

   // Обработчик клика для кнопки закрытия модального окна
   modalCloseBtn.addEventListener('click', () => {
       closeModal();
   });

   // Обработчик клика для каждой кнопки "Записаться" в разделе цен
   document.querySelectorAll('.price__button').forEach(button => {
       button.addEventListener('click', (event) => {
           event.preventDefault();
           const packageName = event.target.dataset.package;
           openModal(packageName);
       });
   });

   // Обработчик клика для кнопки "Записаться" в главном блоке
   promoButton.addEventListener('click', (event) => {
       event.preventDefault();
       const packageName = event.target.dataset.package;
       openModal(packageName);
   });

   // Обработчик отправки формы
   bookingForm.addEventListener('submit', (event) => {
       event.preventDefault();
       closeModal(); // Закрыть модальное окно

       // Создание родительского div для затемненного фона
       const overlay = document.createElement('div');
       overlay.classList.add('overlay');
       document.body.appendChild(overlay);

       // Создание div для сообщения об успехе
       const successMessage = document.createElement('div');
       successMessage.classList.add('success-message');
       successMessage.innerHTML = 'Спасибо за заявку!<br>Я свяжусь с вами в ближайшее время и уточню свободна ли я в день вашей свадьбы.';
       
       // Добавление сообщения об успехе в родительский div
       overlay.appendChild(successMessage);

       // Показать затемненный фон и сообщение
       overlay.style.display = 'flex';

       // Удаление сообщения об успехе и фона после 2 секунд
       setTimeout(() => {
           document.body.removeChild(overlay);
       }, 2000);
   });

   // Закрытие модального окна при клике вне его содержимого
   window.addEventListener('click', (event) => {
       if (event.target === modal) {
           closeModal();
       }
   });
});
