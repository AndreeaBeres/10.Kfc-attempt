import React from 'react';
import BigMealCard from './BigMealCard';

const FriesSection = () => {
  return (
    <>
      <section className="fries-section">
        <div className="meals-grid">
          <BigMealCard
            imgSrc="images/fries.png"
            title="Fries"
            description="Normal fries."
            ingredients="Potatoes, Spices, Oil"
          />
          <BigMealCard
            imgSrc="images/dip.png"
            title="Dipping Fries"
            description="Dipping Fries, good with a sauce."
            ingredients="Potatoes, Spices, Oil"
          />
          <BigMealCard
            imgSrc="images/crisscut.png"
            title="Crisscut"
            description="Crispy and delicious."
            ingredients="Potatoes, Spices, Oil"
          />
        </div>
      </section>
    </>
  );
};

export default FriesSection;