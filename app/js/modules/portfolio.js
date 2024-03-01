// Функции для открытия и закрытия модальных окон
function openModal(modalId) {
   var modal = document.getElementById(modalId);
   modal.style.display = "block";
 }
 
 function closeModal(modalId) {
   var modal = document.getElementById(modalId);
   modal.style.display = "none";
 }
 
 // Обработчики событий для карточек портфолио
 document.querySelectorAll('.portfolio__card').forEach((card, index) => {
   card.addEventListener('click', function(event) {
     event.preventDefault(); // Предотвращаем действие по умолчанию
     var modalId = "modal" + card.querySelector('.portfolio__caption').textContent.replace(/\s+/g, '');
     openModal(modalId);
   });
 });
 
 // Обработчики событий для кнопок закрытия модальных окон
 document.querySelectorAll('.modal .close').forEach(closeButton => {
   closeButton.addEventListener('click', function() {
     var modal = this.closest('.modal');
     closeModal(modal.id);
   });
 });
 
 // Закрытие модального окна при клике вне его содержимого
 window.addEventListener('click', function(event) {
   if (event.target.className === 'modal') {
     closeModal(event.target.id);
   }
 });
 