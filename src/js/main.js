import modals from './modules/modals';
import slider from './modules/slider';
import forms from './modules/forms';
import mask from './modules/mask';
import checkInputTxt from './modules/checkInputTxt';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';
import changeCalcState from './modules/changeCalcState';
import filter from './modules/filter';
import pictureSize from './modules/pictureSize';
import accordion from './modules/accordion';
import burger from './modules/burger';
import scrolling from './modules/scrolling';
import drop from './modules/drop';


document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let state = {};
    changeCalcState(state);
    calc('#size', '#material', '#options', '.promocode', '.calc-price', state);
    forms(state);
    modals();
    slider('.main-slider-item', 'vertical');
    slider('.feedback-slider-item', 'horizontal', '.main-next-btn', '.main-prev-btn');
    mask('[name="phone"]');
    checkInputTxt('[name="name"]');
    checkInputTxt('[name="message"]');
    showMoreStyles('.button-styles', '#styles .row');
    filter();
    pictureSize('.sizes-block');
    accordion('.accordion-heading');
    burger('.burger', '.burger-menu');
    scrolling('.pageup');
    drop();
});