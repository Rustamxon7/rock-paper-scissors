'use strict';

const rulesBtn = document.querySelector('.btn-rules');
const rulesModal = document.querySelector('#rules');
const overlay = document.querySelector('#overlay');
const closeRules = document.querySelector('.close--rules');

rulesModal.style.display = 'none';
overlay.style.display = 'none';

rulesBtn.addEventListener('click', () => {
    rulesModal.style.display = 'flex';
    overlay.style.display = 'block';
});

overlay.addEventListener('click', () => {
    rulesModal.style.display = 'none';
    overlay.style.display = 'none';
});

closeRules.addEventListener('click', () => {
    rulesModal.style.display = 'none';
    overlay.style.display = 'none';
});
