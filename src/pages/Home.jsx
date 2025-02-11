import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MealsSection from '../components/MealsSection';
import Slider from '../components/Slider';
import './Home.css';

function Home() {
  return (
    <>
      <Header />
      <div className="content-wrapper">
        <Slider />
        <div className="text-section">
          <h2>Fan Menu, for your craving and others</h2>
          <p>When you're making crave with chicken and favorite burgers, it is normal to crave more. For craving creators like yourself, we create the Fan Menu.</p>
        </div>
      </div>
      <MealsSection title="Our Products" meals={[
        { image: 'images/twister.png', title: 'Twister Menu' },
        { image: 'images/fillet.png', title: 'Fillet Menu' },
        { image: 'images/fanmenu.png', title: 'Fan Menu' },
        { image: 'images/crispy.png', title: 'Crispy Strips Menu' },
        { image: 'images/hot.png', title: 'Hot Booster Menu' },
        { image: 'images/double.jpg', title: 'Double Down Menu' },
        { image: 'images/kentucky.png', title: 'Kentucky Menu' }
      ]} />
      <Footer />
    </>
  );
}

export default Home;