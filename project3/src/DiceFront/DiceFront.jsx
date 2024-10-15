import React from 'react'
import style from './DIce.module.css'

const DiceFront = ({toggle}) => {
  return (
    <div className={style.main}>
        <div className={style.diceContainer}>

          <div>
              <img src="\images\dices.png" alt="" />
          </div>
          <div className={style.diceContent}>
              <h1>Dice Game</h1>
              <button onClick={toggle}>Play Now</button>
          </div>

        </div>
    </div>
  )
}

export default DiceFront
