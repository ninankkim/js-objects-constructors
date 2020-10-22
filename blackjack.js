function Card(rank, suit) {
    this.rank = rank;
    this.suit = suit;
}
Card.prototype.getImageUrl = function (){
    return `images/${this.rank}_of_${this.suit}.png`
}
function Hand() {
    //hand is empty
    this.cards = [];
}
Hand.prototype.addCard = function(newCard) {
    //push newcard is cards array
    this.cards.push(newCard)
}
//get points from collection of cards
Hand.prototype.getPoints = function () {
    points = 0
    this.cards.forEach(element => {
        if (element.rank === 'ace') {
            points += 1
        } else if (element.rank === 'jack' || element.rank === 'queen' || element.rank === 'king') {
            points += 10
        } else {
            points += element.rank
        }
    });
    this.cards.forEach(element => {
        if (element.rank === 'ace' && points < 12) {
            points += 10
        }
    });
    return points;
}
function Deck() {
    this.cards = [];
    const suits = ['hearts', 'spades', 'clubs', 'diamonds'];
    suits.forEach(suit => {
    for (let i = 1; i <= 13; i++) {
        this.cards.push(new Card(i, suit));
    }      
    })
    this.shuffle();
}
Deck.prototype.draw = function() {
    return this.cards.pop();
}
Deck.prototype.shuffle = function() {
    for (let i = 0; i < this.cards.length; i++) {
        const randIndex = Math.floor(Math.random() * i);
        const temporary = this.cards[i]
        this.cards[i] = this.cards[randIndex];
        this.cards[randIndex] = temporary;
    }
}
Deck.prototype.numCardsLeft = function() {
    return this.cards.length;
}
const mainDeck = new Deck();
const playerHand = new Hand();
const dealerHand = new Hand();
//the player is drawing from the main deck
playerHand.addCard(mainDeck.draw());
dealerHand.addCard(mainDeck.draw());
playerHand.addCard(mainDeck.draw());
dealerHand.addCard(mainDeck.draw());
//how many points do they have?
console.log(`Player has ${playerHand.getPoints()}`);
console.log(`Dealer has ${dealerHand.getPoints()}`);
//calling function of numCardsLeft, to see how how many are left
console.log(`There are ${mainDeck.numCardsLeft()} cards left`);






