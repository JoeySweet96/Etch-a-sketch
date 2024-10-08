let color = 'black';

let popButton = document.querySelector("#popup");
popButton.addEventListener('click', function () {
    let size = getSize();
    createBoard(size);
});

function createBoard(size) {

    let board = document.querySelector(".board");

    board.innerHTML = '';

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let area = size * size;

    for (let i = 0; i < area; i++) {
        let div = document.createElement('div');
        div.addEventListener('mouseover', colorDiv)
        board.insertAdjacentElement("beforeend", div);
    }
}

function getSize() {
    let input = prompt("Choose a size: ");
    let message = document.querySelector("#message");

    if (input == "") {
        message.innerHTML = "Please pick a size";
    }
    else if (input <= 0 || input >= 100) {
        message.innerHTML = "invalid number";
    }
    else {
        message.innerHTML = input;
        return input;
    }
}

function setColor(colorChoice) {
    color = colorChoice;
}

function colorDiv() {
    if (color == "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    }
    else {
        this.style.backgroundColor = "black";
    }
}

function resetBoard() {
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white");
}