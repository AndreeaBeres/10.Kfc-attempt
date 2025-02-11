import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MealsSection1 from '../components/MealsSection1';
import MenuPage from '../components/MenuPage';
import './Bucket.css';

const burgerwrap = [
    {
        image: 'images/bacontwister.png',
        title: 'Bacon Twister',
        description: 'Spicy/non-spicy wrap with cheddar cheese, iceberg salad, tomato, burger sauce, crispy bacon along with 2 crispy strips or non-spicy strips.'
    },
    {
        image: 'images/zinger.png',
        title: 'Zinger',
        description: 'Classic with chicken breast spicy and crispy, iceberg salad, burger sauce. '
    },
    {
        image: 'images/Fillet.png',
        title: 'Fillet',
        description: 'Non-spicy burger with iceberg salad, burger sauce. '
    },
    {
        image: 'images/doublebooster.png',
        title: 'Double Booster',
        description: '2 non-spicy chicken drumsticks, 2 cheddar cheese slices, pickles, burger sauce and ketchup.'
    },
    {
        image: 'images/doublehotbooster.png',
        title: 'Double Hot Booster',
        description: '2 spicy chicken drumsticks, 2 cheddar cheese slices, pickles, burger sauce and ketchup. '
    },
    {
        image: 'images/doubledown.jpg',
        title: 'Double Down',
        description: '2 spicy chicken breast, cheddar cheese, sauce.'
    }
];

function Burgerwrap () {
    return (
        <div>
          <Header />
          <MealsSection1 title="Burger/Wrap" meals={burgerwrap} />
          <MenuPage />
          <Footer />
        </div>
      );
    }

export default Burgerwrap;