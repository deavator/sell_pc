function sendForm() {
    // form 
    // БЛОК - ПЕРЕМЕННЫЕ =========================================
    // const form = document.querySelector(".form-test-drive");
    const forms = document.querySelectorAll('.form'),
        modalWindow = document.querySelector(".modal");

    // БЛОК - ФУНКЦИИ ===========================================

    // БЛОК - ОБРАБОТЧИК ==========================================
    forms.forEach(form => {

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Создаем объект (конструктор Form Data), в который соберет все данные формы
            // и поместим данные в объект body
            const formData = new FormData(form),
                body = {};

            // Добавляем в конструктор данные о классе формы
            formData.append('form', form.classList.value);

            // Перебираем данные конструктора 
            // и помещаем в объект body
            formData.forEach((value, field) => {
                body[field] = value;
            });

            fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    body: JSON.stringify(body),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                // .then((response) => response.json())
                // .then((json) => console.log(json));
                // .then((response) => console.log(response));
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error(response.status);
                    }
                })
                .then(data => {
                    alert('Form data has been sent successfully');
                    console.log(data);
                })
                .catch(error => {
                    alert('Form data has been failed to sent');
                    console.log(error);
                })
                .finally(() => {
                    form.reset();
                    modalWindow.classList.add("_hidden");
                });
        });
    });
}

sendForm();