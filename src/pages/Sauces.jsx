import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MealsSection1 from '../components/MealsSection1';
import SauceSection from '../components/SauceSection';

const sauces = [
  {
    image: 'images/american.png',
    title: 'American Dip',
    description: 'Anything goes with the sauce, when the sauce goes with everything.'
  },
  {
    image: 'images/glen.png',
    title: 'Glenn Dip',
    description: 'Does it need introductions? Add to your orders KFC Garlic Dip.'
  },
  {
    image: 'images/mayonaisse.png',
    title: 'Mayonaisse Dip',
    description: 'And fix when you thought chicken from KFC cannot be better than that, we\'ve given the idea to try with the creamy mayonaisse dip Heinz!'
  },
  {
    image: 'images/tomato.png',
    title: 'Tomato and Garlic Dip',
    description: 'Anything goes with the sauce, when the sauce goes with everything.'
  }
];

function SaucePage() {
  return (
    <div>
      <Header />
      <MealsSection1 title="Sauces" meals={sauces} />
      <SauceSection />
      <Footer />
    </div>
  );
}

export default SaucePage;