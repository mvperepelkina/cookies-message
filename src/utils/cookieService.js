const cookies = {isConsent: true};

function getCookiesConsentFromLocalStorage(key) {
    return localStorage.getItem(key);
}

function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function setCookiesConsentToLocalStorage() {
    setLocalStorage('cookiesConsent', cookies)
}

function hideCookieConsent(isConsent, cookieNode) {
    if(isConsent) {
        cookieNode.classList.add('hide');
    }
}

export {
    hideCookieConsent,
    setCookiesConsentToLocalStorage,
    getCookiesConsentFromLocalStorage
}