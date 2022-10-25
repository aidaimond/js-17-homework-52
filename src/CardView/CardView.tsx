import React from "react";

interface CardProps {
  rank: string;
  suit: string;
}

const CardView: React.FC<CardProps> = props => {
  let symbol = '';
  switch (props.suit) {
    case '♦':
      symbol = 'diams';
      break;
    case '♥':
      symbol = 'hearts';
      break;
    case '♣':
      symbol = 'clubs';
      break;
    case '♠':
      symbol = 'spades';
      break;
    default:
      console.log('this is not symbol, look for mistake')
  }

  const cardClass = 'card rank-' + props.rank.toLowerCase() + ' ' + symbol;

  return (
    <span className={cardClass}>
      <span className="rank">{props.rank}</span>
      <span className="suit">{props.suit}</span>
    </span>
  );
};

export default CardView;