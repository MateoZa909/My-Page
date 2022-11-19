// CREED
const one = document.querySelector('.one');
one.addEventListener('click', showSome);
one.addEventListener('click', hidden);

// D&G
const two = document.querySelector('.two');
two.addEventListener('click', showTwo);
two.addEventListener('click', hiddenTwo);

// LV
const three = document.querySelector('.three');
three.addEventListener('click', showThree);
three.addEventListener('click', hiddenThree);

// MENU 
const menu = document.querySelector('.show-menu');
const menuList = document.querySelector('.show-men')
menu.addEventListener('click', showMenu);
menu.addEventListener('click', hiddenMenu);

// LUPA
const lupa = document.querySelector('.show-lupa');
lupa.addEventListener('click', showSearch);
lupa.addEventListener('click', hidden);

const all = document.querySelector('.all');
const arrow = document.querySelector('.arrow');
const some = document.querySelector('#some');
const triangle = document.querySelector('.triangle');
const asterisco = document.querySelector('.aste');
const showMenuSearch = document.querySelector('.showSearch');


function showSome() {
    some.style.display = 'flex';
    arrow.style.display = 'flex';
}

function hidden() {
    setTimeout(() => {
        some.style.display = 'none';
        arrow.style.display = 'none';
    }, 3000)
}

// TRIANGULO
function showTwo() {
    triangle.style.display = 'flex';
}

function hiddenTwo() {
    setTimeout(() => {
        triangle.style.display = 'none';
    }, 3000)
}

// ASTERISCO
function showThree() {
    asterisco.style.display = 'flex';
}

function hiddenThree() {
    setTimeout(() => {
        asterisco.style.display = 'none';
    }, 3000)
}

function showMenu() {
    menuList.style.display = 'flex';
}

function hiddenMenu() {
    setTimeout(() => {
        menuList.style.display = 'none';
    }, 5000)
}

// Show Lupa
function showSearch() {
    showMenuSearch.style.display = 'flex';
}

function hidden() {
    setTimeout(() => {
        showMenuSearch.style.display = 'none';
    }, 8000)
}