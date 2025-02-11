import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MealsSection1 from '../components/MealsSection1';
import './Bucket.css';
import FriesSection from '../components/FriesSection';

const fries = [
    {
        image: 'images/fries.png',
        title: 'Fries',
        description: 'Normal fries. '
    },
    {
        image: 'images/dip.png',
        title: 'Dipping Fries',
        description: 'Dipping Fries, good with a sauce.  '
    },
    {
        image: 'images/crisscut.png',
        title: 'Crisscut',
        description: 'Crispy and delicious.'
    }
];

function Fries() {
    return (
        <div>
          <Header />
          <MealsSection1 title="Fries" meals={fries} />
          <FriesSection/>
          <Footer />
        </div>
      );
    }

export default Fries;