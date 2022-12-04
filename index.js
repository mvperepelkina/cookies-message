import './index.css';
import {hideCookieConsent, setCookiesConsentToLocalStorage, getCookiesConsentFromLocalStorage} from './src/utils/cookieService'

const isConsent = JSON.parse(getCookiesConsentFromLocalStorage('cookiesConsent'))?.isConsent;

const cookieConsent = document.querySelector('.cookie-consent');
const cookieConsentButton = document.querySelector('.cookie-consent__button');

cookieConsentButton.addEventListener('click', handleConsent);

function handleConsent() {
    if(isConsent === undefined) {
        cookieConsent.classList.add('hide');
        setCookiesConsentToLocalStorage();
    }
}

hideCookieConsent(isConsent, cookieConsent);