// Устанавливаем целевую дату (по умолчанию — через 1 день)
let targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 1);

// Функция для обновления таймера
function updateCountdown() {
    const now = new Date();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
        document.getElementById('countdown').innerHTML = "Время вышло!";
        clearInterval(interval);  // Останавливаем таймер
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = formatTime(days);
    document.getElementById('hours').textContent = formatTime(hours);
    document.getElementById('minutes').textContent = formatTime(minutes);
    document.getElementById('seconds').textContent = formatTime(seconds);
}

// Функция для корректного отображения времени
function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

// Устанавливаем собственную дату через форму
function setCustomDate() {
    const inputDate = document.getElementById('date-input').value;
    if (inputDate) {
        targetDate = new Date(inputDate);
        updateCountdown();  // Обновляем таймер с новой датой
    }
}

// Обновляем таймер каждую секунду
const interval = setInterval(updateCountdown, 1000);

// Инициализируем таймер сразу
updateCountdown();
