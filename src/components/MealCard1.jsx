import React from 'react';

const MealCard1 = ({ imgSrc, title, description }) => {
  return (
    <div className="meal-card1">
      <img src={imgSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default MealCard1;