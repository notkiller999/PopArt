const changeCalcState = (state) => {
    const sizeBlock = document.querySelector('#size'),
        materialBlock = document.querySelector('#material'),
        optionsBlock = document.querySelector('#options'),
        promocodeBlock = document.querySelector('.promocode');    
    
    
    const changeState = (elem, event, prop) => {
        elem.addEventListener(event, () => {
            if (event == 'change') {
                state[prop] = elem.options[elem.selectedIndex].text;
            } else {
                state[prop] = elem.value;
            }
        })
    }

    changeState(sizeBlock, 'change', 'size');
    changeState(materialBlock, 'change', 'material');
    changeState(optionsBlock, 'change', 'options');
    changeState(promocodeBlock, 'input', 'promo');    
}

export default changeCalcState;