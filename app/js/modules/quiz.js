document.addEventListener('DOMContentLoaded', () => {
   const steps = Array.from(document.querySelectorAll('.quiz__step'));
   const nextButtons = Array.from(document.querySelectorAll('.quiz__next'));
   const backButtons = Array.from(document.querySelectorAll('.quiz__back'));

   function showStep(index) {
      // Удаляем класс 'quiz__step--active' у всех шагов
      steps.forEach(step => step.classList.remove('quiz__step--active'));
      // Добавляем класс 'quiz__step--active' к текущему шагу
      steps[index].classList.add('quiz__step--active');
   }

   nextButtons.forEach((btn, idx) => {
      btn.addEventListener('click', () => {
         let nextStepIndex = idx + 1;
         // Проверяем, не последний ли это шаг
         if (nextStepIndex < steps.length - 1) {
            showStep(nextStepIndex);
         } else {
            submitQuiz();
         }
      });
   });

   backButtons.forEach((btn, idx) => {
      // Предыдущая кнопка всегда возвращает на один шаг назад
      btn.addEventListener('click', () => {
         if (idx > 0) {
            showStep(idx - 1);
         }
      });
   });

   function submitQuiz() {
      // Ваш код для отправки данных формы
      console.log('Отправка данных формы...');
      // Показываем финальное сообщение
      showStep(steps.length - 1);
   }

   // Показываем первый шаг
   showStep(0);
});
