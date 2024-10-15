import React from 'react';
import style from './SecondPage.module.css';

const NumberSelector = ({ selectedNumber, onNumberSelect }) => {
    const arr = [1, 2, 3, 4, 5, 6];

    return (
        <div className={style.boxs}>
            {arr.map((value, i) => (
                <div
                    key={i}
                    onClick={() => onNumberSelect(value)} // Call the handler passed from the parent
                    className={`${style.Box} ${selectedNumber === value ? style.selected : ''}`}
                >
                    {value}
                </div>
            ))}
        </div>
    );
};

export default NumberSelector;
