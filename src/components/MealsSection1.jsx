import React from 'react';
import MealCard from './MealCard';

function MealsSection1({ title, meals }) {
  return (
    <section className="meals-section1">
      <h2>{title}</h2>
      <div className="meals-grid">
        {meals.map((meal, index) => (
          <MealCard key={index} image={meal.image} title={meal.title} description={meal.description} />
        ))}
      </div>
    </section>
  );
}

export default MealsSection1;