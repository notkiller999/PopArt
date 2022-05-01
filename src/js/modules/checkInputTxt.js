const checkInputTxt = (selector) => {
    const inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key.match(/[^а-яё 0-9]/ig)) {
                e.preventDefault();
            }
        });

        input.addEventListener('change', (e) => {
            if (input.value.match(/[^а-яё 0-9]/ig)) {
                input.value = '';
            }
        })
    })
}

export default checkInputTxt;