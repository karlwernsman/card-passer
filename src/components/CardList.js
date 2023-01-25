import React from 'react';
import { useGameContext } from '../context/GameContext.js';
import Card from './Card';

export default function CardList({ cards, setSelectedCard, player, setFrom, selectedCard }) {
  const { deck } = useGameContext();
  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card
          key={card.suit + card.value}
          setSelectedCard={setSelectedCard}
          selectedCard={selectedCard}
          player={player}
          setFrom={setFrom}
          card={card}
        />
      ))}
    </div>
  );
}
