import React from 'react'
import style from './Contact.module.css'
import Button from '../Button/Button'
import { RiMessageFill } from "react-icons/ri";
import { PiNumberSevenDuotone } from 'react-icons/pi';
import { useState } from 'react';


const Contact_form = () => {
  const [name, setName] = useState("Stranger");
  const [email, setEmail] = useState("Stranger@gmail.com");
  const [text, setText] = useState("Abol Tabol");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <section className={style.container}>
        <div className={style.contact_form}>
            <div className={style.top_btn}>
              <Button text="Via Support Chat" icon={<RiMessageFill fontSize={"24px"}/>}></Button>
              <Button text="Via Call" icon={<RiMessageFill fontSize={"24px"}/>}></Button>
            </div>
            <div>
            <Button isSecond={true} text="Via Email Form" icon={<RiMessageFill fontSize={"24px"}/>}></Button>
            </div>

            <form onSubmit={onSubmit}>
              <div className={style.formControl}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
              </div> 

              <div className={style.formControl}>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
              </div>   

              <div className={style.formControl}>
                <label htmlFor="text">Text</label>
                <textarea name="text" id="text"></textarea>
              </div> 
              <Button text="Submit">Submit</Button>
            <div>{"Welcome Mr. " + name}</div>
            </form>

        </div>
        <div>
          <img src="\images\Contact002.svg" alt="contact" />
        </div>

    </section>
  )
}

export default Contact_form
