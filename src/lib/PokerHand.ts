import Card from "./Card";

class PokerHand {
  constructor(
    public cards: Card[] = []
  ) {
  }
  public getOutCome() {
    const arr = [];
    const suitArr = [];
    let string = '';

    for (let i = 0; i < this.cards.length; i++) {
      for (let k = 0; k < this.cards.length; k++) {
        if (this.cards[i].rank === this.cards[k].rank && this.cards[i].suit !== this.cards[k].suit){
          arr.push(this.cards[k]);
        }
        if (this.cards[i].suit === this.cards[k].suit && this.cards[i].rank !== this.cards[k].rank) {
          suitArr.push(this.cards[k]);
        }
      }
    }

    if (suitArr.length / 5 === 4) {
      return string = 'Flush';
    } else if (arr.length / 2 === 1) {
      return string = 'One pair';
    } else if (arr.length / 2 === 2) {
      return string = 'Two pair';
    } else if (arr.length / 2 === 3) {
      return string = 'Three of a kind';
    } else {
      return string = 'No prescribed combinations';
    }
  }
}

export default PokerHand;