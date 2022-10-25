import React from 'react';
import CardView from "./CardView/CardView";
import CardDeck from "./lib/CardDeck";

function App() {

  const cardDeck = new CardDeck();
  const c = cardDeck.getCard();

  return (
    <div className="App">
      <div className="playingCards faceImages">
        <CardView rank={c.rank} suit={c.suit}/>
      </div>
    </div>
  );
}

export default App;
