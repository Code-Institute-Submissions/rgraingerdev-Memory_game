

document.addEventListener('DOMContentLoaded', () => {
    console.log('ready')
})

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

const images = [
    {
        src: "assets/images/book.png",
        alt: "book",
    },
    {
        src: "assets/images/hammer.png",
        alt: "hammer",
    },
    {
        src: "assets/images/hood.png",
        alt: "hood",
    },
    {
        src: "assets/images/horn.png",
        alt: "horn",
    },
    {
        src: "assets/images/key.png",
        alt: "key"
    },
    {
        src: "assets/images/mace.png",
        alt: "mace"
    },
    {
        src: "assets/images/mug.png",
        alt: "mug"
    },
    {
        src: "assets/images/potion.png",
        alt: "potion"
    },
    {
        src: "assets/images/rune.png",
    }
]

const gameState = {
    gameStarted: false,
    flippedCards: 0,
    totalFlips: 0,
    totalTime: 0,
    loop: null
};

const shuffle = (array) => {
    const clonedArray = [...array]

    for (let index = clonedArray.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1))
        const original = clonedArray[randomIndex]

        clonedArray[index] = clonedArray[randomIndex]
        clonedArray[randomIndex] = original
    }

    return clonedArray
}

const randomShuffle = (array, images) => {
    const clonedArray = [...array];
    const randomPick = [];

    for (let i = 0; i < images; i++) {
        const randomIndex = Math.floor(Math.random() * clonedArray / length);
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
        ${items.map(() => `
            <div class="card">
                <div class="card-front"></div>
                <div class="card-back">${items}</div>
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
    selectors.moves.innerText = `Moves: ${gameState.totalFlips}`
    }
    gameState.loop = setInterval(() => {
        gameState.totalTime++
        selectors.timer.innertext = `Time: ${gameState.totalTime} seconds`
    }, 1000)


function flipBackCards() {
    document.querySelectorAll('.card:not(.matched)').forEach(card => {
        card.classList.remove('.flipped');
    });

    gameState.flippedCards = 0;
}

const flipCard = card => {
    gameState.flippedCards++
    while (gameState.gameStarted === true) {
        gameState.totalFlips++
        selectors.moves.innerText = `Moves: ${gameState.totalFlips}`
        selectors.timer.innerText = `Time: ${gameState.totalTime}`
        break
    }

    if (!gameState.gameStarted) {
        startGame()
    }

    if (gameState.flippedCards <= 2) {
        card.classList.add('flipped')
    }

    if (gameState.flippedCards === 2) {
        const flippedCards = document.querySelectorAll('.flipped:not(.matched)')

        if (flippedCards[0].innerText === flippedCards[1].innertext) {
            flippedCards[0].classList.add('matched')
            flippedCards[1].classList.add('matched')
        }

        setTimeout(() => {
            flipBackCards()
        }, 200)

    }

    if (!document.querySelectorAll('.card:not(.flipped)').length) {
        setTimeout(() => {
            selectors.board.classList.add('.flipped')
            Swal.fire({
                icon: 'success',
                title: 'You Won!!',
                html:  `<span class="highlight"> ${gameState.totalFlips} Moves and a time of ${gameState.totalTime} Seconds</span>`,
                showCancelButton: true,
                cancelButtonText: 'close',
                confirmButtonText: 'restart',
                reverseButtons: true
            }).then((result) => {
                if(result.isConfirmed) {
                    restartGame()
                }
            })
            clearInterval(gameState.loop)
        }, 1000)
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
    selectors.board.classList.remove('flipped')
    createGame()
    attachEventListeners()
}


