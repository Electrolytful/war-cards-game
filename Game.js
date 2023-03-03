const prompt = require('prompt-sync')({sigint: true});
const colour = require('ansi-colors');
const Cards = require('./Card.js');
const Player = require('./Player.js');


const cardsDeck = Cards;
const playerDeck = [];
const computerDeck = [];
const shuffledCard = naiveShuffle(cardsDeck);

// class Game {
//     constructor();

// }


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


function setupDecks(){
    for(let i=0; i < shuffledCard.length / 2; i++ ){
        playerDeck.push(shuffledCard[i]);


    }

    for(let i=26; i < shuffledCard.length; i++ ){
        computerDeck.push(shuffledCard[i]);
    }
}

setupDecks()
