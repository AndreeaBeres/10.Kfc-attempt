import React, { useState } from 'react';

const BigMealCard = ({ imgSrc, title, description, ingredients }) => {
  const [showIngredients, setShowIngredients] = useState(false);

  const toggleIngredients = () => setShowIngredients(!showIngredients);

  return (
    <div className="bigmeal-card" onClick={toggleIngredients}>
      <img src={imgSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button>View Ingredients</button>
      {showIngredients && <p className="ingredients">{ingredients}</p>}
    </div>
  );
};

export default BigMealCard;