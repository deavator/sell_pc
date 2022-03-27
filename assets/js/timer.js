function timer() {
    // БЛОК - ПЕРЕМЕННЫЕ =========================================
    // const timer = document.querySelectorAll('.counter__item');
    const days = document.getElementById('days'),
        hours = document.getElementById('hours'),
        minutes = document.getElementById('minutes'),
        seconds = document.getElementById('seconds');

    // БЛОК - ФУНКЦИИ ===========================================
    function showTimer(d, h, m, s) {
        days.textContent = d;
        hours.textContent = h;
        minutes.textContent = m;
        seconds.textContent = s;
    }

    function updateCountDown() {
        const deadline = '31 march 2022';

        const now = new Date().getTime(),
            timeDeadline = new Date(deadline).getTime(),
            timeRemain = (timeDeadline - now) / 1000;

        const days = Math.floor(timeRemain / 24 / 3600),
            hours = Math.floor((timeRemain / 3600) % 24),
            minutes = Math.floor((timeRemain / 60) % 60),
            seconds = Math.floor(timeRemain % 60);

        const fHours = hours < 10 ? `0${hours}` : hours,
            fMinutes = minutes < 10 ? `0${minutes}` : minutes,
            fSeconds = seconds < 10 ? `0${seconds}` : seconds;

        if (timeRemain <= 0) {
            clearInterval(interval);
            showTimer(0, 0, 0, 0);
        } else {
            showTimer(days, fHours, fMinutes, fSeconds);
        }
    }

    // БЛОК - ОБРАБОТЧИК ==========================================

    // Отобразить счетчик обратного отсчета
    let interval = setInterval(updateCountDown, 500);
}

timer();