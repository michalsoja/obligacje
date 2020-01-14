import CalcProfit from './CalcProfit.js'

const form = document.querySelector('form');

const [selectEl,inputEl] = form
// a może skorzystać tutaj z querySelectorAll?

const kupa = new CalcProfit(form,[selectEl,inputEl]);
kupa.events();

