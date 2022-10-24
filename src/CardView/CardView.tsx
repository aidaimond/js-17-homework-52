import React from "react";

interface CardProps {
  rank: string;
  suit: string;
}

const CardView: React.FC<CardProps> = props => {
  let symbol = '';
  switch (props.suit) {
    case 'diams':
      symbol = '♦';
      break;
    case 'hearts':
      symbol = '♥';
      break;
    case 'clubs':
      symbol = '♣';
      break;
    case 'spades':
      symbol = '♠';
      break;
    default:
      console.log('this is not symbol, look for mistake')
  }

  const cardClass = 'card rank-' + 'k' + ' ' + props.suit;

  return (
    <span className={cardClass}>
      <span className="rank">{props.rank}</span>
      <span className="suit">{symbol}</span>
    </span>
  );
};

export default CardView;