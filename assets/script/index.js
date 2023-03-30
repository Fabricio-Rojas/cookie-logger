'use strict';

// Declaring elements

const dialogOne = document.querySelector('.dlg1');
const dialogTwo = document.querySelector('.dlg2');

const acceptBtn = document.querySelector('#acceptBtn');
const settingsBtn = document.querySelector('#settingsBtn');
const preferencesBtn = document.querySelector('#preferencesBtn');

// Main Function

setTimeout(() => {
    dialogOne.open = true;
}, 1000);

acceptBtn.addEventListener('click', function() {
    dialogOne.close();
})

settingsBtn.addEventListener('click', function() {
    dialogTwo.open = true;
})

preferencesBtn.addEventListener('click', function() {
    dialogOne.close();
    dialogTwo.close();
})