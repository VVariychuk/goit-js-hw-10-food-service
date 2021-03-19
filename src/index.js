import menuTemplate from './templates/food-cards.hbs';
import foodCards from './menu.json';
import './styles.css';


const refs = {
  menu: document.querySelector('.js-menu'),
  body: document.querySelector('body'),  
  Checkbox: document.querySelector('#theme-switch-toggle'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const keyTheme = 'Theme';

setTheme();

let currentTheme;
let newTheme;
setStatusOfThemes();

refs.Checkbox.addEventListener('change', changeTheme);

const menuItemsMarkup = createMenuItems(foodCards);

refs.menu.insertAdjacentHTML('beforeend', menuItemsMarkup);

function changeTheme() {
  refs.body.classList.remove(currentTheme);
  refs.body.classList.add(newTheme);
  localStorage.setItem(keyTheme, newTheme);

  setStatusOfThemes();
}

function setTheme() {
  const clientTheme = localStorage.getItem(keyTheme);

  refs.body.classList.add(clientTheme);

  if (clientTheme === Theme.DARK) {
    refs.Checkbox.checked = true;
  } else {
    refs.body.classList.add(Theme.LIGHT);
    localStorage.setItem(keyTheme, Theme.LIGHT);
  }
}

function setStatusOfThemes() {
  currentTheme = localStorage.getItem(keyTheme);
  newTheme = currentTheme !== Theme.LIGHT ? Theme.LIGHT : Theme.DARK;
}

function createMenuItems(foodCards) {
  return menuTemplate(foodCards);
}