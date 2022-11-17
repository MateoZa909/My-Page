const lupa = document.querySelector('.show-lupa');
lupa.addEventListener('click', showSearch);
lupa.addEventListener('click', hidden);

const showMenuSearch = document.querySelector('.showSearch');

function showSearch() {
    showMenuSearch.style.display = 'flex';
}

function hidden() {
    setTimeout(() => {
        showMenuSearch.style.display = 'none';
    }, 8000)
}

