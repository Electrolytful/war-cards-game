class Player {
    constructor(name, deck) {
        this.name = name;
        this.deck = deck;
    }

    getName(){
        return this.name;
    }

    getDeck() {
        return this.deck;
    }

    setDeck(deck) {
        this.deck = deck;
    }
}

module.exports = Player;
