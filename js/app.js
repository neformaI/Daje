const burger = document.querySelector('#burger');
const list = document.querySelector('#list');

burger.addEventListener('click', () => {
    list.classList.toggle('disp');
});



const openFormLink = document.getElementById('openFormLink');
const bookingModal = document.getElementById('booking-modal');
const closeModal = document.getElementById('close-modal');
const bookingForm = document.getElementById('booking-form');
const confirmation = document.getElementById('confirmation');
const confirmationModal = document.getElementById('booking-confirmation-modal');
const closeConfirmationButton = document.getElementById('close-confirmation');
const openFormLink2 = document.getElementById('openFormLink2');

// Открытие модального окна при клике на ссылку "бронь"
openFormLink.addEventListener('click', (event) => {
    event.preventDefault(); // Отключаем переход по ссылке
    bookingModal.style.display = 'flex'; // Показываем модальное окно
});

openFormLink2.addEventListener('click', (event) => {
    event.preventDefault(); // Предотвращаем переход по ссылке
    bookingModal.style.display = 'flex'; // Показываем модальное окно
});

// Закрытие модального окна
closeModal.addEventListener('click', () => {
    bookingModal.style.display = 'none'; // Скрываем модальное окно
});

// Закрытие модального окна при клике на фон
bookingModal.addEventListener('click', (event) => {
    if (event.target === bookingModal) {
        bookingModal.style.display = 'none'; // Скрываем модальное окно
    }
});

// Обработчик отправки формы
bookingForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Предотвращаем обновление страницы

    // Получаем данные из формы
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Устанавливаем данные в подтверждающее окно
    document.getElementById('user-name').textContent = name;
    document.getElementById('user-date').textContent = date;
    document.getElementById('user-time').textContent = time;

    // Скрываем окно бронирования
    bookingModal.style.display = 'none';

    // Показываем окно подтверждения
    confirmationModal.style.display = 'flex';
});

// Закрытие окна подтверждения
closeConfirmationButton.addEventListener('click', () => {
    confirmationModal.style.display = 'none';
});



document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.getElementById("back-to-top");
   
    // Показать/скрыть кнопку при прокрутке страницы
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        backToTop.style.display = "block";
      } else {
        backToTop.style.display = "none";
      }
    });
   
    // Плавная прокрутка при клике на кнопку
    backToTop.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
});