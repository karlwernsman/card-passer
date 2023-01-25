import './App.css';
import initialCards from './cards-data';
import Player from './components/Player';
import CardList from './components/CardList';
import { useState } from 'react';
import ExecutePassButton from './components/ExecutePassButton';
import { useGameContext } from './context/GameContext.js';

function App() {
  const {
    deck,
    setDeck,
    playerOneHand,
    setPlayerOneHand,
    selectedCard,
    setSelectedCard,
    playerTwoHand,
    setPlayerTwoHand,
    playerThreeHand,
    setPlayerThreeHand,
    from,
    to,
  } = useGameContext();

  function findCardIndex(value, suit, cards) {
    return cards.findIndex((card) => card.value === value && card.suit === suit);
  }

  function passCard(card) {
    const playerHands = [playerOneHand, playerTwoHand, playerThreeHand];
    const playerHandSetFunctions = [setPlayerOneHand, setPlayerTwoHand, setPlayerThreeHand];

    // arrays start at zero, but our players start at 1 :shrug:
    const toHand = playerHands[to - 1] || deck;
    const fromHand = playerHands[from - 1] || deck;

    const toSetFunction = playerHandSetFunctions[to - 1] || setDeck;
    const fromSetFunction = playerHandSetFunctions[from - 1] || setDeck;

    const cardToMoveIndex = findCardIndex(card.value, card.suit, fromHand);
    const [cardToMove] = fromHand.splice(cardToMoveIndex, 1);

    toHand.push(cardToMove);

    toSetFunction([...toHand]);
    fromSetFunction([...fromHand]);

    setSelectedCard(null);
  }

  return (
    <div className="App">
      <section>
        {/* if the player names are numbers, that will make our life easier later because we can reuse numbers as arrays. Note that this will make our app brittle! */}
        <Player to={to} player={1} hand={playerOneHand} />
        <Player to={to} player={2} hand={playerTwoHand} />
        <Player to={to} player={3} hand={playerThreeHand} />
        <CardList cards={deck} player={'deck'} />
      </section>
      <section>{selectedCard && <ExecutePassButton passCard={passCard} cards={deck} />}</section>
    </div>
  );
}

export default App;
