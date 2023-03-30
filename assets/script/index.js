'use strict';

// Declaring elements

const dialogOne = document.querySelector('.dlg1');
const dialogTwo = document.querySelector('.dlg2');

// Main Function

setTimeout(() => {
    dialogOne.open = true;
    console.log('open')
}, 1000);