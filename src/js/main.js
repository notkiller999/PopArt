import modals from './modules/modals';
import slider from './modules/slider';

document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    modals();
    slider('.main-slider-item', 'vertical');
    slider('.feedback-slider-item', 'horizontal', '.main-next-btn', '.main-prev-btn');
});