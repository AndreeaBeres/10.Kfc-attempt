import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MealsSection1 from '../components/MealsSection1';
import './Menu.css';

function Menu() {
  return (
    <>
      <Header />
      <section className="meals-section1">
        <p> Wanna see something fresh?</p>
        <h2>Our Products</h2>
        <MealsSection1 title="Buckets" meals={[
          { image: 'images/bucket.png', title: 'So Good Bucket', description: 'The Best of both worlds, spicy & non-spicy.' },
          { image: 'images/hotbucket.png', title: 'Hot Bucket', description: '20 pieces of chicken drumsticks.' },
          { image: 'images/variety.png', title: 'Variety Bucket', description: '4 types of chicken in one bucket.' },
          { image: 'images/duo.png', title: 'Duo Bucket', description: 'Ideally shared for 2.' }
        ]} />
        <MealsSection1 title="Menus" meals={[
          { image: 'images/double.jpg', title: 'Double Down Menu', description: '2 crispy strips with bacon and cheese.' },
          { image: 'images/crispy.png', title: 'Crispy Strips Menu', description: '4/8 Crispy Strips along with fries, drink and a sauce by your choice.' },
          { image: 'images/fanmenu.png', title: 'Fan Menu', description: '3 Crispy Strips with 2 Hot Wings, small portion of fries and a drink.' },
          { image: 'images/hot.png', title: 'Hot Booster Menu', description: '1 Hot Booster with fries and drink.' },
          { image: 'images/fillet.png', title: 'Fillet Menu', description: '1 Fillet along with fries and drink.' },
          { image: 'images/twister.png', title: 'Bacon Twister Menu', description: '1 Bacon Twister with fries and drink.' },
          { image: 'images/fanboost.png', title: 'Fan Double Booster', description: '1 Double Booster /Hot Booster with fries, 2 crispy strips and 2 hot wings + drink.' }
        ]} />
        <MealsSection1 title="Fries" meals={[
          { image: 'images/fries.png', title: 'Fries', description: 'Normal fries.' },
          { image: 'images/dip.png', title: 'Dipping Fries', description: 'Dipping Fries, good with a sauce.' },
          { image: 'images/crisscut.png', title: 'Crisscut', description: 'Crispy and delicious.' }
        ]} />
        <MealsSection1 title="Burgers/Wraps" meals={[
          { image: 'images/bacontwister.png', title: 'Bacon Twister', description: 'Spicy/non-spicy wrap with cheddar cheese, iceberg salad, tomato, burger sauce, crispy bacon along with 2 crispy strips or non-spicy strips.' },
          { image: 'images/zinger.png', title: 'Zinger', description: 'Classic with chicken breast spicy and crispy, iceberg salad, burger sauce.' },
          { image: 'images/filletburger.png', title: 'Fillet', description: 'Non-spicy burger with iceberg salad, burger sauce.' },
          { image: 'images/doublebooster.png', title: 'Double Booster', description: '2 non-spicy chicken drumsticks, 2 cheddar cheese slices, pickles, burger sauce and ketchup.' },
          { image: 'images/doublehotbooster.png', title: 'Double Hot Booster', description: '2 spicy chicken drumsticks, 2 cheddar cheese slices, pickles, burger sauce and ketchup.' },
          { image: 'images/doubledownsingle.jpg', title: 'DoubleDown', description: '2 spicy chicken breast, cheddar cheese, sauce.' }
        ]} />
        <MealsSection1 title="Sauces" meals={[
          { image: 'images/american.png', title: 'American Dip', description: 'Anything goes with the sauce, when the sauce goes with everything.' },
          { image: 'images/glen.png', title: 'Glenn Dip', description: 'Does it need introductions? Add to your orders KFC Garlic Dip.' },
          { image: 'images/mayonaisse.png', title: 'Mayonaisse Dip', description: 'And fix when you thought chicken from KFC cannot be better than that, we\'ve given the idea to try with the creamy mayonaisse dip Heinz!' },
          { image: 'images/tomato.png', title: 'Tomato and Garlic Dip', description: 'Anything goes with the sauce, when the sauce goes with everything.' }
        ]} />
      </section>
      <Footer />
    </>
  );
}

export default Menu;