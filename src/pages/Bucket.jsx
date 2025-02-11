import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MealsSection1 from '../components/MealsSection1';
import MealsSection2 from '../components/MealsSection2';

const bucketMeals1 = [
  {
    image: 'images/so.png',
    title: 'So Good Bucket',
    description: 'The Best of both worlds, spicy & non-spicy.'
  },
  {
    image: 'images/hotbucket.png',
    title: 'Hot Bucket',
    description: '20 pieces of chicken drumsticks.'
  },
  {
    image: 'images/variety.png',
    title: 'Variety Bucket',
    description: '4 types of chicken in one bucket.'
  },
  {
    image: 'images/duo.png',
    title: 'Duo Bucket',
    description: 'Ideally shared for 2.'
  }
];

const bucketMeals2 = [
  {
    image: 'images/so.png',
    title: 'So Good Bucket',
    description: 'The Best of both worlds, spicy & non-spicy.',
    ingredients: 'Chicken, spices, flour, oil, potatoes, egg, milk'
  },
  {
    image: 'images/hotbucket.png',
    title: 'Hot Bucket',
    description: '20 pieces of chicken drumsticks.',
    ingredients: 'Chicken, spices, flour, oil, salt, egg, milk'
  },
  {
    image: 'images/variety.png',
    title: 'Variety Bucket',
    description: '4 types of chicken in one bucket.',
    ingredients: 'Chicken, spices, flour, oil, salt, egg, milk'
  },
  {
    image: 'images/duo.png',
    title: 'Duo Bucket',
    description: 'Ideally shared for 2.',
    ingredients: 'Chicken, spices, flour, oil, salt, egg, milk, potatoes'
  }
];

function BucketPage() {
  return (
    <div>
      <Header />
      <MealsSection1 title="Bucket Meals" meals={bucketMeals1} />
      <MealsSection2 meals={bucketMeals2} />
      <Footer />
    </div>
  );
}

export default BucketPage;