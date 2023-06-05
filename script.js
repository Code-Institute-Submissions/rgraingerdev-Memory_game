$(document).ready(() => {
    console.log('ready')
});

const selectors = {
    board: document.querySelector('.game-container'),
    game: document.querySelector('.game'),
    moves: document.querySelector('.moves'),
    start: document.querySelector('.start'),
    success: document.querySelector('.win')
};

const gameState = {
    gameStarted: false,
    flippedCards: 0,
    totalFlips: 0,
    loop: null
};

const shuffle = array => {
    const clonedArray = [...array]

    for (let index = clonedArray.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1))
        const original = clonedArray[index]

        clonedArray[index] = clonedArray[randomIndex]
        clonedArray[randomIndex] = original
    }

    return clonedArray
}

function randomShuffle(array, items) {
    const clonedArray = [...array];
    const randomPick = [];

    for (let i = 0; i < items; i++) {
        const randomIndex = Math.floor(Math.random() * clonedArray / length);

        randomPick.push(clonedArray[randomIndex]);
        clonedArray.splice(randomIndex, 1);
    }
    return randomPick;
}

function createGame() {
    const dimensions = document.querySelector('.board').getAttribute('data-dimension')

    if (dimensions % 2 !== 0) {
        throw new Error('dimensions must be divisable by 2!');
    }

    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    const pick = randomShuffle(letters, (dimensions * dimensions) / 2);
    const items = shuffle([...pick, ...pick]);
    const cards = `
    <div class="board" style="grid-template-columns: repeat(${dimensions}, auto)">
        ${items.map(item => `
            <div class="card">
                <div class="card-front"></div>
                <div class="card-back">${item}</div>
            </div>
        `).join('')}
   </div>
`

    const parser = new DOMParser().parseFromString(cards, 'text/html')

    document.querySelector('.board').replaceWith(parser.querySelector('.board'))
}

const startGame = () => {
    gameState.gameStarted = true
    selectors.start.classList.add('disabled')

        selectors.moves.innerText = `moves: ${gameState.totalFlips}`
    }


function flipBackCards() {
    document.querySelectorAll('.card:not(.matched)').forEach(card => {
        card.classList.remove('.flipped');
    });

    state.flippedCards = 0;
}

const flipcard = card => {
    state.flippedCards++
    state.totalFlips++

    if (!state.gameStarted) {
        startGame()
    }

    if (state.flippedCards <= 2) {
        card.classList.add('flipped')
    }

    if (state.flippedCards === 2) {
        const flippedCards = document.querySelectorAll('.flipped:not(.matched)')

        if (flippedCards[0].innerText === flippedCards[1].innertext) {
            flippedCards[0].classList.add('matched')
            flippedCards[1].classList.add('matched')
        }

        setTimeout(() => {
            flipBackCards()
        }, 1000)

    }

    if (!document.querySelectorAll('.card:not(.flipped)').length) {
        setTimeout(() => {
            selectors.boredContainer.classList.add('flipped')
            selectors.win.innerHTML = `
            <h1> you WON<br />
            With <span class="highlight">${state.totalFlips}</span> moves <br />
            `

            clearInterval(state.loop)
        }, 1000)
    }
}

const attachedEventListeners = () => {
    document.addEventListener('click', event => {
        const eventTarget = event.target
        const eventParent = event.parentElement

        if (eventTarget.className.includes('card') && !eventParent.className.includes('flipped')) {
            flipcard(eventParent)
        } else if (eventTarget.nodeName === 'BUTTON' && !eventTarget.className.includes('disabled')) {
            startGame()
        }
    })
}

createGame()
attachedEventListeners()