import React from 'react';
import { Link } from 'react-router-dom';
import style from './Dice.module.css';

const DiceFront = () => {
  return (
    <div className={style.main}>
      <div className={style.diceContainer}>
        <div>
          <img src="/images/dices.png" alt="" />
        </div>
        <div className={style.diceContent}>
          <h1>Dice Game</h1>
          <Link to="/play">
            <button>Play Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DiceFront;
