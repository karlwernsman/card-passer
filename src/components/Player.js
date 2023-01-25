import React from 'react';
import { useGameContext } from '../context/GameContext.js';
import CardList from './CardList';

export default function Player({ player, setTo, hand, to }) {
  const { selectedCard, setSelectedCard } = useGameContext();
  return (
    <div
      className={`player ${to === player ? 'selected-player' : ''}`}
      onClick={() => setTo(player)}
    >
      <p>Player {player}</p>
      <CardList player={player} cards={hand} />
    </div>
  );
}
