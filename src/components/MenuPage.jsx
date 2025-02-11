import React from 'react';
import BigMealCard from './BigMealCard';

const MenuPage = () => {
  return (
    <>
      <section className="meals-section">
        <div className="meals-grid">
          <BigMealCard
            imgSrc="images/bacontwister.png"
            title="Bacon Twister"
            description="Spicy/non-spicy wrap with cheddar cheese, iceberg salad, tomato, burger sauce, crispy bacon along with 2 crispy strips or non-spicy strips."
            ingredients="flour, eggs, salad, tomato, mustard, vinegar, bacon, chicken breasts, spices, wrap"
          />
          <BigMealCard
            imgSrc="images/zinger.png"
            title="Zinger"
            description="Classic with chicken breast spicy and crispy, iceberg salad, burger sauce."
            ingredients="oil, milk, chicken, spices, salad, bun, eggs, mustard, milk, flour"
          />
          <BigMealCard
            imgSrc="images/filletburger.png"
            title="Fillet"
            description="Non-spicy burger with iceberg salad, burger sauce."
            ingredients="oil, chicken, spices, salad, cheese, eggs, vinegar, mustard, eggs, bun, milk, flour"
          />
          <BigMealCard
            imgSrc="images/doublebooster.png"
            title="Double Booster"
            description="2 non-spicy chicken drumsticks, 2 cheddar cheese slices, pickles, burger sauce and ketchup."
            ingredients="chicken, oil, spices, cheese, pickle, vinegar, mustard, eggs, bun, flour"
          />
          <BigMealCard
            imgSrc="images/doublehotbooster.png"
            title="Double Hot Booster"
            description="2 spicy chicken drumsticks, 2 cheddar cheese slices, pickles, burger sauce and ketchup."
            ingredients="chicken, flour, milk, oil, spices, pickles, cheese, vinegar, mustard, eggs, bun"
          />
          <BigMealCard
            imgSrc="images/doubledownsingle.jpg"
            title="DoubleDown"
            description="2 spicy chicken breast, cheddar cheese, sauce."
            ingredients="chicken breast, oil, flour, spices, cheese, eggs, vinegar, mustard, milk"
          />
        </div>
      </section>
    </>
  );
};

export default MenuPage;