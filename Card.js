class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }

    getValue() {
        return this.value;
    }

    getSuit() {
        return this.suit;
    }
}

const suits = ["Hearts", "Clubs", "Spades", "Diamonds"];
const ranks = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];

const cardsDeck = []

for(let i = 0; i < 4; i++) {
    for(let j = 0; j < 13; j++) {
        let suit = suits[i];
        let rank = ranks[j];

        cardsDeck.push(new Card(rank, suit));
    }
}

// console.log(cardsDeck);
// console.log(cardsDeck.length);
// console.log(cardsDeck[4].getValue());
// console.log(cardsDeck[4].getSuit());

module.exports = cardsDeck;

