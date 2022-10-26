import React, {useState} from 'react';
import CardView from "./CardView/CardView";
import CardDeck from "./lib/CardDeck";
import Card from "./lib/Card";
import PokerHand from "./lib/PokerHand";

let combo = '';

function App() {
  const [randomCards, setRandomCards] = useState<Card[]>([]);

  const cardDeck = new CardDeck();

  const changeState = () => {
    const arr = cardDeck.getCards(5)
    setRandomCards(arr);
    const hand = new PokerHand(arr);
    combo = hand.getOutCome();
  };

  const button = <button className="button" onClick={changeState}>Deal Cards</button>

  if (randomCards.length === 0) {
    return (
      <div>
        {button}
      </div>
    )
  }

  return (
    <div className="App">

      <div>
        {button}
      </div>

      <div className="playingCards faceImages">
        <div className="combo">{combo}</div>
        <div>
          {randomCards.map((card:Card, i) => {
            return (
              <CardView key={i} rank={card.rank} suit={card.suit}/>
            )
          })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
