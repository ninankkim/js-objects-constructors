function Card(point, suit){
    this.point = point,
    this.suit = suit
}

const myCard = new Card(5, 'diamonds')
console.log(myCard)
const anotherCard = new Card(13, 'spades')


Card.prototype.getImageUrl = function (){
    return (`images/${this.point}_of_${this.suit}.png`)
}
console.log(myCard.getImageUrl())
console.log(anotherCard.getImageUrl())

//-------------------------------------------------------------

function Hand()