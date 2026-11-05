// 1. click on button
document.querySelector("#rollButton").addEventListener("click", e => {
    // 2. animate the die
    setDieImages("assets/die_rolling.gif");
    // 3. land on a new random number
    setTimeout(() => {
        // this function will run after the timeout duration below
        setDieImages("assets/white_dice_1.gif")

        // Math.random() returns a number 0-1 as decimal
        // example: 0.245252
        // Math.floor()
        document.querySelectorAll('#gameboard img').forEach(image => {
        // change image src to the animated gif
            let diceNumber = Math.ceil(Math.random() * 6)
            image.src = `assets/white_dice_${diceNumber}.gif`;
        }); 
    }, 2000);
    
});

function setDieImages(imagePath) {
    document.querySelectorAll('#gameboard img').forEach(image => {
        // change image src to the animated gif
        image.src = imagePath;
    });
}

