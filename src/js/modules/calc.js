const calc = (size, material, options, promocode, result, state) => {
    const sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionsBlock = document.querySelector(options),
        promocodeBlock = document.querySelector(promocode),
        resultBlock = document.querySelector(result);
    let res = 0;
        
    const calcResult = () => {
        res = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        if (sizeBlock.value === '' || materialBlock.value === '') {
            resultBlock.textContent = 'Пожалуйста выберите размер и материал картины';
        } else if (promocodeBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = Math.round(res * 0.7);
            state['price'] = Math.round(res * 0.7);
        } else {
            resultBlock.textContent = res;
            state['price'] = res;
        }        

    }

    sizeBlock.addEventListener('change', calcResult);
    materialBlock.addEventListener('change', calcResult);
    optionsBlock.addEventListener('change', calcResult);
    promocodeBlock.addEventListener('input', calcResult);
}

export default calc;