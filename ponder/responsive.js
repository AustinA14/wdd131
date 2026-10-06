// 1. Select menu from the DOM
let menuButton = document.querySelector(".menu-btn");
// 2. Add an event listener to the menu button
// unnamed or anonymous function
menuButton.addEventListener("click", function (event) {
    // 3. toggle whether the links are displayed or not
    let nav = document.querySelector("nav");

    // if (nav.style.display === '') {
    //     nav.style.display = "flex";
    // } else {
    //     nav.style.display = '';
    // }

    // ternary operator: Question -> if yes, do "" : if no, do "";
    nav.style.display = nav.style.display === '' ? "flex" : '';

    // 4. Toggle X animation for the menu button
    menuButton.classList.toggle('change');
});
menuButton.classList
// function toggleMenuLinks(event) {}