import React from 'react';
import MealCard from './MealCard';

function MealsSection({ title, meals }) {
  return (
    <section className="meals-section">
      <h2>{title}</h2>
      <div className="meals-grid">
        {meals.map((meal, index) => (
          <MealCard key={index} image={meal.image} title={meal.title} />
        ))}
      </div>
      <button className="see-all-btn" onClick={() => window.location.href = "menu"}>See All the Products</button>
    </section>
  );
}

export default MealsSection;