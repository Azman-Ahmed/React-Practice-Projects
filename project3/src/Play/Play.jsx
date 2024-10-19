import React, { useState, useEffect } from 'react';
import Counter from '../SecondPage/Counter';
import NumberSelector from '../SecondPage/NumberSelector';
import style from './Play.module.css';
import RollDice from '../RollDice/RollDice';
import { Link } from 'react-router-dom';

const Play = () => {
  // Initialize state from localStorage or with default values
  const [score, setScore] = useState(() => {
    return parseInt(localStorage.getItem('score')) || 0;
  });
  const [currentDice, setCurrentDice] = useState(() => {
    return parseInt(localStorage.getItem('currentDice')) || 1;
  });
  const [selectedNumber, setSelectedNumber] = useState(() => {
    return parseInt(localStorage.getItem('selectedNumber')) || null;
  });

  // Save game state to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('score', score);
  }, [score]);

  useEffect(() => {
    localStorage.setItem('currentDice', currentDice);
  }, [currentDice]);

  useEffect(() => {
    localStorage.setItem('selectedNumber', selectedNumber);
  }, [selectedNumber]);

  // Function to roll the dice
  const rollDice = () => {
    const rnd = (min, max) => Math.floor(Math.random() * (max - min) + min);
    const randomNumber = rnd(1, 7);
    setCurrentDice(randomNumber);

    if (randomNumber === selectedNumber) {
      setScore((prev) => prev + 2 * randomNumber);
    } else if (selectedNumber) {
      setScore((prev) => prev - selectedNumber);
    }
  };

  // Function to handle number selection
  const handleNumberSelect = (number) => {
    setSelectedNumber(number);
    console.log('Selected Number:', number);
  };

  // Function to reset the game
  const resetGame = () => {
    setScore(0);
    setCurrentDice(1);
    setSelectedNumber(null);
    localStorage.removeItem('score');
    localStorage.removeItem('currentDice');
    localStorage.removeItem('selectedNumber');
  };

  return (
    <div>
      <div className={style.playtop}>
        <Counter score={score} />
        <NumberSelector
          selectedNumber={selectedNumber}
          onNumberSelect={handleNumberSelect}
        />
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice} />

      <div className={style.buttons}>
        <Link to="/">
          <button>Back to Home</button>
        </Link>

        {/* Reset Game Button */}
        <button onClick={resetGame} className={style.resetButton}>
          Reset Game
        </button>
      </div>
    </div>
  );
};

export default Play;
