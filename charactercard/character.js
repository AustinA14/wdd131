
const characterCard = {
    imageSrc: 'snortleblat.webp',
    imageAlt: 'Snortleblat character',
    name: 'Snortleblat',
    class: 'Swamp Beast Diplomat',
    level: 5,
    health: 100,
    attacked() {
        this.health -= 20;
        if (characterCard.health <= 0) {
            alert("Character died")
        }
    },
    level_up() {
        this.level += 1;
    }
};

function characterTemplate(character) {
    return `
    <img class='image' src='${character.imageSrc}' alt='${character.imageAlt}'>
    <h1 class="name">${character.name}</h1>
    <div class="stats">
        <p><strong>Class: </strong>${character.class}</p>
        <p><strong>Level: </strong>${character.level}</p>
        <p><strong>Health: </strong>${character.health}</p>
    </div>
    <div class="buttons">
        <button id='btn1'>Attacked</button>
        <button id='btn2'>Level Up</button>
    </div>`
}

function renderCharacter(character) {
    document.querySelector(".card").innerHTML = characterTemplate(character);
}

renderCharacter(characterCard);

// const attackButton = document.querySelector('#btn1');
// const levelButton = document.querySelector('#btn2');
document.querySelector('.card').addEventListener('click', event => {
    if(event.target.id === 'btn1') {
        characterCard.attacked();
    } else if (event.target.id === 'btn2') {
        characterCard.level_up();
    } else {
        return
    }
    renderCharacter(characterCard);
});