import React, { useState } from 'react';
import style from './RollDice.module.css';

const RollDice = ({ currentDice, rollDice }) => {
  const [isRolling, setIsRolling] = useState(false);

  const handleRollDice = () => {
    setIsRolling(true); // Start rolling animation
    rollDice(); // Call rollDice from the parent
    setTimeout(() => setIsRolling(false), 600); // Reset rolling state after animation duration
  };

  return (
    <div className={style.DiceContainer}>
      <div 
        className={`${style.dice} ${isRolling ? style.roll : ''}`} 
        onClick={handleRollDice} // Call rollDice parent
      >
        <img src={`/images/dice/dice_${currentDice}.png`} alt={`dice ${currentDice}`} />
      </div>
      <p>Click on Dice to roll</p>
    </div>
  );
};

export default RollDice;
