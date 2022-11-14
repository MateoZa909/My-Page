// CUADRADO
const one = document.querySelector('.one');
one.addEventListener('click', showSome);
one.addEventListener('click', hidden);

// TRIANGULO
const two = document.querySelector('.two');
two.addEventListener('click', showTwo);
two.addEventListener('click', hiddenTwo);

// ASTERISCO
const three = document.querySelector('.three');
three.addEventListener('click', showThree);
three.addEventListener('click', hiddenThree);

const some = document.querySelector('.some');
const triangle = document.querySelector('.triangle');
const asterisco = document.querySelector('.aste');

function showSome() {
    some.style.display = 'flex';
}

function hidden() {
    setTimeout(() => {
        some.style.display = 'none';
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