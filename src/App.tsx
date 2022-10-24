import React from 'react';
import Card from "./lib/card";
import CardView from "./CardView/CardView";

function App() {

  return (
    <div className="App">
      <div className="playingCards faceImages">
        <CardView rank="K" suit="diams"/>
      </div>
    </div>
  );
}

export default App;
