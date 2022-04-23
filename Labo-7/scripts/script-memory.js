const cards = document.querySelectorAll('.memory-card');

var cardsArray = [{
    'name': 'ace1',
    'img': 'img/ace1.jpg'
}, {
    'name': 'ace2',
    'img': 'img/ace2.jpg'
}, {
    'name': 'ace3',
    'img': 'img/ace3.jpg'
}, {
    'name': 'ace4',
    'img': 'img/ace4.jpg'
}, {
    'name': 'ace5',
    'img': 'img/ace5.jpg'
}, {
    'name': 'ace6',
    'img': 'img/ace6.jpg'
}];

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;

        return;
    }

    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 20);
        card.style.order = randomPos;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard));