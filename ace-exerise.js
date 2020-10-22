//The ace example for cards:
Hand.prototype.sumPoints = function () {
    points = 0
    this.cards.forEach(element => {
        if (element.value === 'ace') {
            points += 1
        } else if (element.value === 'jack' || element.value === 'queen' || element.value === 'king') {
            points += 10
        } else {
            points += element.value
        }
    });
    this.cards.forEach(element => {
        if (element.value === 'ace' && points < 12) {
            points += 10
        }
    });
    return points;
}