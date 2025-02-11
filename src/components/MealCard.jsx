import React from 'react';

function MealCard({ image, title }) {
  return (
    <div className="meal-card">
      <img src={process.env.PUBLIC_URL + '/' + image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

export default MealCard;