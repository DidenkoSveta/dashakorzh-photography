document.addEventListener('DOMContentLoaded', function () {
   const questions = document.querySelectorAll('.faq-question');
 
   questions.forEach(question => {
     question.addEventListener('click', function() {
       const answer = this.nextElementSibling;
 
       // Теперь просто переключаем класс 'active' для ответа на нажатый вопрос
       answer.classList.toggle('active');
       
       // Изменение символа '+' на '-' 
       const sign = this.querySelector('.faq-sign'); // Убедитесь, что у вас в HTML есть элемент с классом 'faq-sign'
       if (sign) {
         sign.textContent = answer.classList.contains('active') ? '-' : '+';
       }
     });
   });
 });
 