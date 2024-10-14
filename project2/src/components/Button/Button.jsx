import React from 'react'
import style from './Button.module.css'
import { RiMessageFill } from "react-icons/ri";

const Button = (props) => {
  const {isSecond, icon, text} = props; //destructuring the props
  return (
    <div>
        <button className={ isSecond ? style.secondary_btn : style.primary_btn}>
            {icon}
            {text}
        </button>
    </div>
  )
}

export default Button
