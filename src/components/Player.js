import React from 'react';
import { useGameContext } from '../context/GameContext.js';
import CardList from './CardList';

export default function Player({ player, hand }) {
  const { to, setTo } = useGameContext();
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
