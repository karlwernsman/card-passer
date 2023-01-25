import { createContext, useContext, useState } from 'react';
import initialCards from '../cards-data.js';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [deck, setDeck] = useState(initialCards);
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);

  return (
    <GameContext.Provider
      value={{
        deck,
        setDeck,
        playerOneHand,
        setPlayerOneHand,
        playerTwoHand,
        setPlayerTwoHand,
        playerThreeHand,
        setPlayerThreeHand,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

const useGameContext = () => {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
};

export { GameProvider, useGameContext };
