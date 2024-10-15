import React from 'react';
import style from './RollDice.module.css';

const RollDice = ({ currentDice, rollDice }) => {
  return (
    <div className={style.DiceContainer}>
      <div className={style.dice} onClick={rollDice}> {/* Call rollDice passed from parent */}
        <img src={`/images/dice/dice_${currentDice}.png`} alt={`dice ${currentDice}`} />
      </div>
      <p>Click on Dice to roll</p>
    </div>
  );
};

export default RollDice;
