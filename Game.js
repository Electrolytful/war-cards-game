const prompt = require('prompt-sync')({sigint: true});
const colour = require('ansi-colors');
const Cards = require('./Card.js');
const Player = require('./Player.js');


const cardsDeck = Cards;
const playerDeck = [];
const computerDeck = [];
const shuffledCard = naiveShuffle(cardsDeck);

const player = new Player();
const computer = new Player();
computer.setName("Computer");


function setupGame() {
    const name = prompt("What is your name?");
    player.setName(name);

    for(let i=0; i < shuffledCard.length / 2; i++ ){
        playerDeck.push(shuffledCard[i]);
    }

    for(let i=26; i < shuffledCard.length; i++ ){
        computerDeck.push(shuffledCard[i]);
    }

    player.setDeck(playerDeck);
    computer.setDeck(computerDeck);

    console.log(`Name: ${player.getName()}\nDeck: ${createStringArray(player.getDeck())}`);
    console.log(`Name: ${computer.getName()}\nDeck: ${createStringArray(player.getDeck())}`);
}

setupGame();







function createStringArray(arr) {
    let result = ""
    arr.forEach(card => {
        result += card.getValue() + card.getSuit() + " ";
    });
    return result;
 }

function naiveShuffle(deck) {
    for (var i = 0; i < deck.length; i++) {
        const swapIndex = Math.floor(Math.random() * deck.length)
        const currentCard = deck[i]
        const cardToSwap = deck[swapIndex]
        deck[i] = cardToSwap
        deck[swapIndex] = currentCard
    }

    return deck
}
