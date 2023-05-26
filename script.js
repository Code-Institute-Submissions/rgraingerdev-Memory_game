$(document).ready(() => {
    console.log('ready')
});

const cardList = $('card');
const colors = ["aqua", "aquamarine", "crimson", "blue", "dodgerblue", "gold", "greenyellow", "teal"];
const pickList = [...colors, ...colors];
const cardCount = cardList.length;

const shownCards = 0;
const activeCard = null;
const endOfTurn = false;

function BuildGrid(color) {
    const e = document.createElement('div');
    e.classList.add('card');
    e.setAttribute('data-color', color);
    e.setAttribute('data-shown', 'false');
    e.addEventListener('click', () => {
        const shown = e.getAttribute('data-shown');

        if (waitingEndOfTurn || shown === 'true' || e === activeCard) {
            return;
        }
            e.style.backgroundColor = color;

        if (!activeCard) {
            activeCard = e;

            return;
        }

        const cardToMatch = activeCard.getAttribute('data-shown');

        if (cardToMatch === color) {
            e.setAttribute('data-shown', 'true');
            activeCard.setAttribute('data-shown', 'true');

            activeCard = null;
            waitingEndOfTurn = false;
            shownCards += 2;

            if (shownCards === cardCount) {
                alert('you win');
            }
            return;
        }
        waitingEndOfTurn = true;
        
    });

    return e;

};

for(let i; i < cardCount; i++) {
    const randomCard = math.floor(math.random() * pickList.length);
    const color = [randomCard];
    const card = BuildGrid(color);
    pickList.splice(randomCard, 1);
    cardContainer.appendChild(card);
};$(document).ready(() => {
    console.log('ready')
});

const selectors = {
    boredContainer: document.getElementById('.game-container'),
    game: document.getElementById('.game'),
    moves: document.getElementById('.moves'),
    start: document.getElementById('.start'),
    success: document.getElementById('.win')
};

const gameState = {
    gameStarted: false,
    flippedCards: 0,
    totalFlips: 0,
    loop: null
};

function shuffle(array, items) {
    const clonedArray = [...array];
    const randomPick = [];

    for (let i = 0; i < items; i++) {
        const randomIndex = math.floor(math.random() * clonedArray / length);

        randomPick.push(clonedArray[randomIndex]);
        clonedArray.splice(randomIndex, 1);
    }
    return randomPick;
}

function createGame() {
    const dimensions = selectors.game.getAttribute('data-dimension');

    if (dimensions % 2 !== 0) {
        throw new Error('dimensions must be divisable by 2!');
    }

    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    const pick = pickRandom(letters, (dimensions * dimensions) / 2);
    const items = shuffle([...pick, ...pick]);
    const card = `
        <div class="game" style="grid-template-columns: repeat($(dimensions), auto)">
            ${items.map(item => `
                <div class="card">
                    <div class="card-front"></div>
                    <div class="card-back">${item}</div>
                </div>
                `).join('')}
            </div>
         `;

    const parser = new DOMParser().parseFromString(card, 'text/html');

    selectors.board.replaceWith(parser.querySelector('.board'));
}

const startGame = () => {
    StaticRange.gameStarted = true
    selectors.start.classList.add('disabled')

    StaticRange.loop = setInterval(() => {
        StaticRange.totalTime++

        selectors.moves.innerText = `${state.totalFlips} moves`
        selectors.timer.innerText = `time: ${state.totalTime} sec`
    }, 1000)
}