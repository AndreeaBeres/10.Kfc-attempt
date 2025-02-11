import React from 'react';
import BigMealCard from './BigMealCard';

const SauceSection = () => {
  return (
    <>
      <section className="sauce-section">
        <div className="meals-grid">
          <BigMealCard
            imgSrc="images/american.png"
            title="American Dip"
            description="Anything goes with the sauce, when the sauce goes with everything."
            ingredients="Oil, water, tomato paste, lemon, garlic, onion, vinegar, soy sauce, salt"
          />
          <BigMealCard
            imgSrc="images/glen.png"
            title="Glenn Dip"
            description="Does it need introductions? Add to your orders KFC Garlic Dip."
            ingredients="Oil, Water, garlic, mustard, egg, milk, salt, pepper"
          />
          <BigMealCard
            imgSrc="images/mayonaisse.png"
            title="Mayonaisse Dip"
            description="And fix when you thought chicken from KFC cannot be better than that, we've given the idea to try with the creamy mayonaisse dip Heinz!"
            ingredients="Soy Oil, water, egg, vinegar, salt, mustard"
          />
          <BigMealCard
            imgSrc="images/tomato.png"
            title="Tomato and Garlic Dip"
            description="Anything goes with the sauce, when the sauce goes with everything."
            ingredients="tomato, garlic, water, oil, mustard, salt, vinegar, lemon"
          />
        </div>
      </section>
    </>
  );
};

export default SauceSection