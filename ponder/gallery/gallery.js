// 1. Grab our html element
let gallerySection = document.querySelector(".gallery");
let modal = document.querySelector("dialog");
let modalImg = modal.querySelector("img");
const closeButton = modal.querySelector(".close-viewer");

// 2. Add event listener, when img clicked open modal
gallerySection.addEventListener("click", (event) => {
    console.log(event.target.src);
    if (event.target.src !== undefined) {
        // display modal
        modal.showModal();
        // Set the src image of modal
        // Change resolution to high rez
        modalImg.src = event.target.src.replace("-sm", "-full")
    }
});

// 3. Make the x button close the modal
closeButton.addEventListener("click", () => {
    modal.close();
});

closeButton.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.close();
    }
});