import menuTemplate from './templates/food-cards.hbs';
import foodCards from './menu.json';
import './styles.css';


const refs = {
    menu: document.querySelector('.js-menu'),
    bodyRef: document.querySelector('body'),
    themeChek: document.getElementById('theme-switch-toggle')
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function createMenu(foodCards) {
    return menuTemplate(foodCards)
}
 
const createMenuMarkup = createMenu(foodCards)
refs.menu.insertAdjacentHTML('beforeend', createMenuMarkup)

