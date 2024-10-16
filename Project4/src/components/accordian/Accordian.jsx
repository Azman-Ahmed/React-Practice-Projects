import React, { useState } from 'react';
import data from './data';
import './Accordian.css'; // Import the CSS file

const Accordian = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);

  const toggleCard = (id) => {
    if (enableMultiSelection) {
      setExpandedCard((prevExpanded) => {
        if (prevExpanded && prevExpanded.includes(id)) {
          return prevExpanded.filter((cardId) => cardId !== id);
        } else {
          return prevExpanded ? [...prevExpanded, id] : [id];
        }
      });
    } else {
      setExpandedCard(expandedCard === id ? null : id);
    }
  };

  const handleMultiSelection = () => {
    if (enableMultiSelection) {
      // Disable multi selection, close all cards
      setExpandedCard(null);
    } else {
      // Enable multi selection, open all cards
      setExpandedCard(data.map((item) => item.id));
    }
    setEnableMultiSelection(!enableMultiSelection);
  };

  return (
    <div className="wrapper">
      <button onClick={handleMultiSelection}>
        {enableMultiSelection ? 'Disable Multi Selection' : 'Enable Multi Selection'}
      </button>

      {data.map((item) => (
        <div key={item.id} className="card">
          <div className="card-header">
            <h3>{item.question}</h3>
            <button onClick={() => toggleCard(item.id)}>
              {enableMultiSelection 
                ? expandedCard && expandedCard.includes(item.id) 
                  ? '-' : '+' 
                : expandedCard === item.id 
                  ? '-' : '+'}
            </button>
          </div>
          {(enableMultiSelection 
              ? expandedCard && expandedCard.includes(item.id) 
              : expandedCard === item.id) && (
            <div className="card-content">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordian;
