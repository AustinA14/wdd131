
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let body = document.querySelector('body')
let content = document.querySelector('#content');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        logo.src = 'byui-logo-white.png';
        body.style.color = 'white';
        body.style.backgroundColor = '#0f172a';
    } else {
        // code for changes to colors and logo
        body.style.color = 'black';
        body.style.backgroundColor = 'white';
        logo.src = 'byui-logo-blue.webp'
    }
}           
                    