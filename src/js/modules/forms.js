const forms = () => {
    const inputs = document.querySelectorAll('input'),
        forms = document.querySelectorAll('form'),
        modals = document.querySelectorAll('[data-modal]'),
        upload = document.querySelectorAll('[name="upload"]');
    
    const message = {
        loading: 'Загрузка...',
        succes: 'Спасибо, скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...',
        spinner: 'assets/img/spinner.gif',
        done: 'assets/img/ok.png',
        fail: 'assets/img/fail.png'
    };

    upload.forEach(item => {
        item.addEventListener('input', () => {
            const uploadName = item.files[0].name;
            let short = '';
            const dots = '...'
            uploadName.split('.')[0].length > 14 ? short = uploadName.substr(0, 14) + dots + uploadName.split('.')[1] :
                short = uploadName;
            console.log(short);
            item.previousElementSibling.textContent = short;
        })
    })

    const clearInputs = () => {
        inputs.forEach(input => {
            input.value = '';
        })
        upload.forEach(item => {
            item.previousElementSibling.textContent = 'Файл не выбран';
        })
    }

    const closeAllModals = () => {
        modals.forEach(modal => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        })
    }

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: "POST",
            body: data
        })

        return await res.text();
    }

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);

            const status = document.createElement('div'),
                    statusImg = document.createElement('img'),
                    statusText = document.createElement('div');
            status.classList.add('status', 'animated', 'fadeInUp');
            status.style.display = 'none';
            form.parentNode.appendChild(status);


            statusImg.setAttribute('src', message.spinner);
            statusText.textContent = message.loading;
            status.appendChild(statusImg);
            status.appendChild(statusText);
            form.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                form.style.display = 'none';
                form.classList.remove('fadeOutUp');
            }, 400);
            status.style.display = 'block';

            let path;
            form.closest('.popup-design') || form.classList.contains('form-calc') ? path = 'assets/designer.php' : path = 'assets/server.php';

            postData(path, formData)
                .then(res => {
                    console.log(res);
                    statusImg.setAttribute('src', message.done);
                    statusText.textContent = message.succes
                })
                .catch(() => {
                    statusImg.setAttribute('src', message.fail);
                    statusText.textContent = message.failure;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        status.classList.remove('fadeInUp');
                        status.classList.add('fadeOutDown');
                        form.classList.add('fadeInDown');
                        form.style.display = 'block';
                        closeAllModals();
                        setTimeout(() => {
                            status.remove();
                        }, 400);

                    }, 4000)
                })

        })
    })
}

export default forms;