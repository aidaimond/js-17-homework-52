import React, {ReactComponentElement, useState} from 'react';
import CardView from "./CardView/CardView";
import CardDeck from "./lib/CardDeck";
import Card from "./lib/Card";

function App() {
  const [randomCards, setRandomCards] = useState<Card[]>([]);

  const cardDeck = new CardDeck();

  const changeState = () => {
    setRandomCards(cardDeck.getCards(5));
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
        <CardView rank={randomCards[0].rank} suit={randomCards[0].suit}/>
        <CardView rank={randomCards[1].rank} suit={randomCards[1].suit}/>
        <CardView rank={randomCards[2].rank} suit={randomCards[2].suit}/>
        <CardView rank={randomCards[3].rank} suit={randomCards[3].suit}/>
        <CardView rank={randomCards[4].rank} suit={randomCards[4].suit}/>

      </div>
    </div>
  );
}

export default App;
