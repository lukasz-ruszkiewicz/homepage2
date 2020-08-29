import '../scss/main.scss';
import moment from 'moment';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

const name = "Gość";
const number = 1;
let siteName = document.querySelector('.main-header');

console.log(`${name} nr ${number}`);

siteName.innerHTML = "<h1>Nagłówek zmieniony przez JS</h1>";

greetGuest(name,number);

let czas = moment().startOf('day').fromNow();

console.log(czas);

function greetGuest(guestName, guestNumber)
{
    alert(`Witaj ${guestName}!\nJesteś gościem numer: ${guestNumber}!`);
}

const button = document.querySelector('.js__menu_button');
const menu = document.querySelector('.site-navigation');

button.addEventListener('click', toggleMenu);

function toggleMenu()
{
    menu.classList.toggle('site-navigation__menu--open');
}
