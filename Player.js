class Player {
    constructor() {
        this.name = "";
        this.deck = [];
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

    setName(name) {
        this.name = name;
    }
}

module.exports = Player;
