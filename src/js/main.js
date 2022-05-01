import modals from './modules/modals';
import slider from './modules/slider';
import forms from './modules/forms';
import mask from './modules/mask';
import checkInputTxt from './modules/checkInputTxt';

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    forms();
    modals();
    slider('.main-slider-item', 'vertical');
    slider('.feedback-slider-item', 'horizontal', '.main-next-btn', '.main-prev-btn');
    mask('[name="phone"]');
    checkInputTxt('[name="name"]');
    checkInputTxt('[name="message"]');
});