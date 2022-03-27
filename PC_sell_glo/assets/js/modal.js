function modal() {
    // БЛОК - ПЕРЕМЕННЫЕ =========================================
    const modalWindow = document.querySelector(".modal"),
        overlay = modalWindow.querySelector(".overlay"),
        modalOpenBtns = document.querySelectorAll(".btn"),
        modalCloseBtn = modalWindow.querySelector(".modal__close");


    // БЛОК - ФУНКЦИИ ===========================================

    // БЛОК - ОБРАБОТЧИК ==========================================
    // Открытие модального окна
    modalOpenBtns.forEach(item => {
        item.addEventListener('click', () => {
            modalWindow.classList.remove("_hidden");
        });
    });

    // Закрытие модального окна
    modalCloseBtn.addEventListener('click', () => {
        modalWindow.classList.add("_hidden");
    });

    overlay.addEventListener('click', () => {
        modalWindow.classList.add("_hidden");
    });
}

modal();