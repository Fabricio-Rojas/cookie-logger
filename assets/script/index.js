'use strict';

// Declaring elements

const dialogOne = document.querySelector('.dlg1');
const dialogTwo = document.querySelector('.dlg2');

const acceptBtn = document.querySelector('#acceptBtn');
const settingsBtn = document.querySelector('#settingsBtn');
const preferencesBtn = document.querySelector('#preferencesBtn');

const cookieOne = document.querySelector('#cookie-one');
const cookieTwo = document.querySelector('#cookie-two');
const cookieThree = document.querySelector('#cookie-three');
const cookieFour = document.querySelector('#cookie-four');

// Main Function

if (navigator.cookieEnabled) {
    if (!document.cookie) {
        console.log('No cookies set')
        setTimeout(() => {
            dialogOne.open = true;
        }, 1000);
    } else {
        console.log('Cookies set')
        getCookie('Browser');
        getCookie('Operating System');
        getCookie('Screen Width');
        getCookie('Screen Height');
    }
}

acceptBtn.addEventListener('click', function() {
    dialogOne.close();
    // create all cookies
    setCookie('Browser', `${getBrowser()}`, 15);
    setCookie('Operating System', `${getOS()}`, 15);
    setCookie('Screen Width', `${screen.width}`, 15);
    setCookie('Screen Height', `${screen.height}`, 15);
})

settingsBtn.addEventListener('click', function() {
    dialogTwo.open = true;
})

preferencesBtn.addEventListener('click', function() {
    dialogOne.close();
    dialogTwo.close();
    // create checked cookies
    // create 'rejected' cookies for unselected cookies
    createChecked();
})

// Cookie functions

function createChecked() {
    if (cookieOne.checked) {
        setCookie('Browser', `${getBrowser()}`, 15);
    } else {
        setCookie('Browser', `rejected`, 15);
    }
    if (cookieTwo.checked) {
        setCookie('Operating System', `${getOS()}`, 15);
    } else {
        setCookie('Operating System', `rejected`, 15);
    }
    if (cookieThree.checked) {
        setCookie('Screen Width', `${screen.width}`, 15);
    } else {
        setCookie('Screen Width', `rejected`, 15);
    }
    if (cookieFour.checked) {
        setCookie('Screen Height', `${screen.height}`, 15);
    } else {
        setCookie('Screen Height', `rejected`, 15);
    }
}

// Set a cookie
function setCookie(ckey, cVal, expSecs) {
    const date = new Date();
    date.setTime(date.getTime() + (expSecs*1000))
    let expires = "expires=" + date.toUTCString();
    document.cookie = encodeURIComponent(ckey) + "=" + encodeURIComponent(cVal) + ";" + expires + ";path=/";
}

// Get a cookie
function getCookie(cname) {
    let name = cname + '=';
    let decodedCookies = decodeURIComponent(document.cookie);
    let cookieList = decodedCookies.split('; ');
    cookieList.forEach((elem) => {
        while (elem.charAt(0) == ' ') {
            elem = elem.substring(1);
        }
        if (elem.indexOf(name) == 0) {
            console.log(elem);
        }
    })
}

function getBrowser() { 
    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) {
        return 'Opera';
    } else if (navigator.userAgent.indexOf("Edg") != -1 ) {
        return 'Edge'; 
    } else if (navigator.userAgent.indexOf("Chrome") != -1 && ((navigator.userAgent.indexOf("Chromium") || navigator.userAgent.indexOf('Edg')) == -1 )) {
        return 'Chrome'; 
    } else if (navigator.userAgent.indexOf("Safari") != -1 && ((navigator.userAgent.indexOf("Chrome") || navigator.userAgent.indexOf('Chromium')) == -1 )) {
        return 'Safari'; 
    } else if (navigator.userAgent.indexOf("Firefox") != -1 && navigator.userAgent.indexOf("Seamonkey") == -1) {
        return 'Firefox'; 
    } else if ((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) {
        return 'IE'; 
    } else {
        return 'unknown';
    }
};

function getOS() {
    if (navigator.userAgent.indexOf("Windows")!= -1) {
        return "Windows";
    } else if (navigator.userAgent.indexOf("Mac") != -1) {
        return "Mac/iOS";
    } else if (navigator.userAgent.indexOf("X11") != -1) {
        return "UNIX";
    } else if (navigator.userAgent.indexOf("Linux") != -1) {
        return "Linux";
    }
};