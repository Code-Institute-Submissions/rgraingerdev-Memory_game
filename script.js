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
};