import React from 'react';
import { useGameContext } from '../context/GameContext.js';
import Card from './Card';

export default function ExecutePassButton({ passCard, setFrom, from, to, setSelectedCard }) {
  const { selectedCard } = useGameContext();
  return (
    <div className="execute-button" onClick={() => passCard(selectedCard)}>
      Pass <Card card={selectedCard} setSelectedCard={setSelectedCard} setFrom={setFrom} /> from{' '}
      {from} to {to}
    </div>
  );
}
