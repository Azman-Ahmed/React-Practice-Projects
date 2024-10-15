import React, { useState } from 'react';
import Counter from '../SecondPage/Counter';
import NumberSelector from '../SecondPage/NumberSelector';
import style from './Play.module.css';
import RollDice from '../RollDice/RollDice';

const Play = () => {
  const [score, setScore] = useState(0);
  const [currentDice, setCurrentDice] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState(null);

  const rollDice = () => {
    const rnd = (min, max) => Math.floor(Math.random() * (max - min) + min);
    const randomNumber = rnd(1, 7); 
    setCurrentDice(randomNumber); 

    if (randomNumber === selectedNumber) {
      setScore((prev) => prev + 2*randomNumber); 
    }
    else if (selectedNumber) { 
      setScore((prev) => prev - selectedNumber); 
    }
  };

  const handleNumberSelect = (number) => {
    setSelectedNumber(number); 
    console.log('Selected Number:', number); 
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
      <RollDice 
        currentDice={currentDice} 
        rollDice={rollDice} 
      />
    </div>
  );
};

export default Play;
