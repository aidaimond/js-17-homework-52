import Card from "./Card";

class CardDeck {
  private cards: Card[] = [];

  constructor(
    public rank: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
    public suit: string[] = ['♦', '♥', '♣', '♠'],
  ) {
    for(let s = 0; s < this.suit.length; s++) {
      for (let r = 0; r < this.rank.length; r++) {
        this.cards.push(new Card(this.suit[s], this.rank[r]));
      }
    }
  }

  public getCard(): Card {
    const getRandom = Math.floor(Math.random() * (this.cards.length - 1));
    const card = this.cards[getRandom];
    this.cards.splice(getRandom,1);
    return card;
  }

  public getCards(howMany: number): Card[] {
    const cards: Card[] = [];
    for (let i = 0; i < howMany; i++) {
      cards.push(this.getCard());
    }
    return cards;
  }
}

export default CardDeck;