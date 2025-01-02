//---------------------Задача 1-----------------------------
// // Получаем элементы
// const changeBgBtn = document.getElementById('change-bg-btn');
// const cancelBgBtn = document.getElementById('cancel-bg-btn');
// const showBrowserInfoBtn = document.getElementById('show-browser-info');
// const browserInfo = document.getElementById('browser-info');
// const redirectBtn = document.getElementById('redirect-btn');
// const itemsList = document.getElementById('items-list');

// // Изменение цвета фона по нажатию кнопки
// changeBgBtn.addEventListener('click', () => {
//     document.body.style.backgroundColor = getRandomColor();
// });

// cancelBgBtn.addEventListener('click', () => {
//     document.body.style.backgroundColor = '';
// });

// // Функция для генерации случайного цвета
// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// // Показ информации о браузере
// showBrowserInfoBtn.addEventListener('click', () => {
//     browserInfo.textContent = `Браузер: ${navigator.userAgent} \n Платформа: ${navigator.platform}`;
// });


// redirectBtn.addEventListener('click', () => {
//     const confirmRedirect = confirm("Перейти на Wikipedia?");
//     if (confirmRedirect) {
//         location.href = 'https://wikipedia.org';
//     }
// });

// // Подсвечивание элементов списка при наведении
// itemsList.addEventListener('mouseover', (event) => {
//     if (event.target.tagName === 'LI') {
//         event.target.style.backgroundColor = 'lightblue';
//     }
// });

// itemsList.addEventListener('mouseout', (event) => {
//     if (event.target.tagName === 'LI') {
//         event.target.style.backgroundColor = '';
//     }
// });


//-------------------------Задача 2--------------------------