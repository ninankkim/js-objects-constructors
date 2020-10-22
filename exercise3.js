function Card (point, suit) {
    this.point = point;
    this.point = suit;
}
Card.prototype.getImageUrl = function() {
    return `images/${this.point}_of_${this.suit}`;
}

function Hand() {
    this.cards = [];
}
Hand.prototype.addCard = function(newCard) {
    this.cards.push(newCard);
}
Hand.prototype.getPoints = function() {

}

const myHand = new Hand();
console.log(myHand);

myHand.addCard(new Card(5, 'diamonds'));
myHand.addCard(new Card(13, 'spades'));

console.log(myHand);