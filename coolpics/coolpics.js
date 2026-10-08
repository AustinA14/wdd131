let imageSelection = document.querySelector('#img-div');
let modal = document.querySelector("dialog");
let modalImg = modal.querySelector("img");
let closeButton = modal.querySelector(".close-viewer");

imageSelection.addEventListener("click", (event) => {
    console.log(event)
    console.log(event.target.src);
    if (event.target.src !== undefined) {
        modal.showModal();
        modalImg.src = event.target.src.replace("-sm", "-full");
    }
});

closeButton.addEventListener("click", () => {
    modal.close();
});

closeButton.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

let menuButton = document.querySelector("#menu");

menuButton.addEventListener("click", (event) => {
    let nav = document.querySelector("nav");
    // ternary operator
    nav.style.display = nav.style.display === "" ? "grid" : "";

    menuButton.classList.toggle("change");
});
menuButton.classList