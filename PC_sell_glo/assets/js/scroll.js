function scroll() {
    // 

    // БЛОК - ПЕРЕМЕННЫЕ =========================================
    const menuLinks = document.querySelectorAll(".menu__link"),
        // mainSection = document.getElementById("home"),
        // mainBtn = document.querySelector('.main__button'),
        // mainScroll = document.querySelector('.main__scroll'),
        goHomeLink = document.querySelector(".go-home__link"),
        goHome = document.querySelector(".go-home");


    // Собираем все ссылки в спред-массив
    // const allLinks = [...menuLinks, gotoTop, mainBtn, mainScroll];
    const allLinks = [...menuLinks, goHomeLink];
    // БЛОК - ФУНКЦИИ ===========================================

    // БЛОК - ОБРАБОТЧИК ==========================================
    allLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Получаем имя идентификатора ссылки 
            // и отрезаем первый символ (#)
            const id = link.getAttribute('href').substring(1);
            const section = document.getElementById(id);

            if (section) {
                // Без поддержки MacOS и iOS (offline)
                section.scrollIntoView({
                    block: 'center',
                    behavior: 'smooth'
                });

                // C поддержкой MacOS и iOS (online)
                // seamless.scrollIntoView(section, {
                //     behavior: "smooth",
                //     block: "center",
                //     inline: "center"
                // });
            }
        });

        // Отображение кнопки "на верх" при скролле
        document.addEventListener('scroll', () => {

            if (Math.round(window.scrollY) > window.innerHeight) {
                goHome.classList.remove("_hidden");
            } else {
                goHome.classList.add("_hidden");
            }
        });
    });
}
scroll();