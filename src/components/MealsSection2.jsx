import React from 'react';
import BigMealCard from './BigMealCard';

const MealsSection2 = () => {
  return (
    <>
      <section className="meals-section">
        <div className="meals-grid">
          <BigMealCard
            imgSrc="images/bucket.png"
            title="So Good Bucket"
            description="The Best of both worlds, spicy & non-spicy."
            ingredients="Chicken, spices, flour, oil, potatoes, egg, milk"
          />
          <BigMealCard
            imgSrc="images/hotbucket.png"
            title="Hot Bucket"
            description="20 pieces of chicken drumsticks."
            ingredients="Chicken, spices, flour, oil, salt, egg, milk"
          />
          <BigMealCard
            imgSrc="images/variety.png"
            title="Variety Bucket"
            description="4 types of chicken in one bucket."
            ingredients="Chicken, spices, flour, oil, salt, egg, milk"
          />
          <BigMealCard
            imgSrc="images/duo.png"
            title="Duo Bucket"
            description="Ideally shared for 2."
            ingredients="Chicken, spices, flour, oil, salt, egg, milk, potatoes"
          />
        </div>
      </section>
    </>
  );
};

export default MealsSection2;