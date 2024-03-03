document.addEventListener('DOMContentLoaded', () => {
   // Обновление текста скидки
   const discountText = document.querySelector('.promo__discount');
   if (discountText) {
     const currentDate = new Date();
     const currentYear = currentDate.getFullYear();
     const currentMonth = currentDate.getMonth(); // Месяц от 0 до 11
     const nextMonth = new Date(currentYear, currentMonth + 1, 0); // Получаем последний день текущего месяца
     const lastDayOfMonth = nextMonth.getDate();
     const monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
 
     // Устанавливаем текст скидки с последним днем текущего месяца и названием месяца
     discountText.innerHTML = `- 10% <br> до ${lastDayOfMonth} ${monthNames[currentMonth]}`;
   }
 
   // Обновление года в подвале сайта
   const footerCopyText = document.querySelector('.footer__copy');
   if (footerCopyText) {
     const currentYear = new Date().getFullYear();
     footerCopyText.textContent = `${currentYear} Все права защищены`;
   }
 });
 