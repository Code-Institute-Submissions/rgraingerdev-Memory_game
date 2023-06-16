

document.addEventListener('DOMContentLoaded', () => {
    console.log('ready')
})

const images = [ 
    "./assets/images/book.png",
    "./assets/images/hammer.png",
    "./assets/images/hood.png",
    "./assets/images/horn.png",
    "./assets/images/key.png",
    "./assets/images/mace.png",
    "./assets/images/mug.png",
    "./assets/images/potion.png",
    "./assets/images/rune.png",
];

const selectors = {
    board: document.querySelector('.game-container'),
    game: document.querySelector('.game'),
    moves: document.querySelector('.moves'),
    timer: document.querySelector('.timer'),
    start: document.querySelector('.start'),
    win: document.querySelector('.win')
};

selectors.start.addEventListener('click', () => {
    restartGame()
})

const gameState = {
    gameStarted: false,
    flippedCards: 0,
    totalFlips: 0,
    totalTime: 0,
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

    return clonedArray;
}

const randomShuffle = (array, items) => {
    const clonedArray = [...array];
    const randomPick = [];

    for (let i = 0; i < items; i++) {
        const randomIndex = Math.floor(Math.random() * clonedArray.length);

        randomPick.push(clonedArray[randomIndex]);
        clonedArray.splice(randomIndex, 1);
    }
    return randomPick;
}

function createGame() {
    const dimensions = 4
    const pick = randomShuffle(images, (dimensions * dimensions) / 2);   
    const items = shuffle([...pick, ...pick]);
    const cards = `
    <div class="board" style="grid-template-columns: repeat(${dimensions}, auto)">
        ${items.map((item) => `
            <div class="card">
                <div class="card-front"></div>
                <div class="card-back"><img src=${item}></div>
            </div>
        `).join('')}
   </div>
`;

    const parser = new DOMParser().parseFromString(cards, 'text/html');

    document.querySelector('.board').replaceWith(parser.querySelector('.board'));
}

const startGame = () => {
    gameState.gameStarted = true
    selectors.start.classList.add('disabled')
    }
    gameState.loop = setInterval(() => {
        gameState.totalTime++
        selectors.moves.innerText = `Moves: ${gameState.totalFlips}`;
        selectors.timer.innerText = `Time: ${gameState.totalTime}`;
    }, 1000)


function flipBackCards() {
    document.querySelectorAll('.card:not(.matched)').forEach(card => {
        card.classList.remove('flipped');
    });

    gameState.flippedCards = 0;
}

function flipCard(card) {
    gameState.flippedCards++;
    gameState.totalFlips++;

    if (!gameState.gameStarted) {
        startGame();
    }

    if (gameState.flippedCards <= 2) {
        card.classList.add('flipped');
    }

    if (gameState.flippedCards === 2) {
        const flippedCards = document.querySelectorAll('.flipped:not(.matched)');

        if (flippedCards[0].innerHTML === flippedCards[1].innerHTML) {
            flippedCards[0].classList.add('matched');
            flippedCards[1].classList.add('matched');
        } 

        setTimeout(() => {
            flipBackCards();
        }, 500);
        }
    

    if (!document.querySelectorAll('.card:not(.flipped)').length) {
        setTimeout(() => {
            selectors.board.classList.add('.flipped');
            Swal.fire({
                icon: 'success',
                title: 'You Won!!',
                html: `<span class="highlight"> ${gameState.totalFlips} Moves and a time of ${gameState.totalTime} Seconds</span>`,
                showCancelButton: true,
                cancelButtonText: 'close',
                confirmButtonText: 'restart',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    restartGame();
                }
            });
            clearInterval(gameState.loop);
        }, 1000);
    }
}

const attachEventListeners = () => {
    document.addEventListener('click', event => {
        const eventTarget = event.target
        const eventParent = eventTarget.parentElement
        

        if (eventTarget.className.includes('card') && !eventParent.className.includes('flipped')) {
            flipCard(eventParent)
        } else if (eventTarget.nodeName === 'BUTTON' && !eventTarget.className.includes('disabled')) {
            startGame()
        }
    })
}

createGame()
attachEventListeners();

const restartGame = () => {
    gameState.gameStarted = false
    gameState.flippedCards = 0
    gameState.totalFlips = 0
    gameState.totalTime = 0
    selectors.start.classList.remove('disabled')
    selectors.moves.innerText = `Moves: ${gameState.totalFlips}`
    selectors.timer.innerText = `Time: ${gameState.totalTime}`
    selectors.board.classList.remove('flipped')
    createGame()
    attachEventListeners()
}


