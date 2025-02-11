import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import './Contact.css';

function Contact () {
  return (
    <>
      <Header />
        <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;