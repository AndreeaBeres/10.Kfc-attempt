import React, { useState } from 'react';

function Header() {
  const [searchListVisible, setSearchListVisible] = useState(false);
  const [menuListVisible, setMenuListVisible] = useState(false);

  const toggleSearch = () => {
    setSearchListVisible(!searchListVisible);
  };

  const toggleMenu = () => {
    setMenuListVisible(!menuListVisible);
  };

  const redirectToHome = () => {
    window.location.href = "home";
  };

  return (
    <header>
      <h1 className="clickable-title" onClick={redirectToHome}>KFC</h1>
      <div className="Bar">
        <button className="icon-btn" onClick={toggleSearch}>
          <i className="fas fa-search"></i>
        </button>
        <a href="menu" className="no-underline">Products</a>
        <button className="icon-btn" id="menuBtn" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <div className={`dropdown-list ${searchListVisible ? 'show' : ''}`} id="searchList">
        <ul>
          <li><a href="bucket" className="no-underline1">Bucket</a></li>
          <li><a href="fries" className="no-underline1">Fries</a></li>
          <li><a href="sauces" className="no-underline1">Sauces</a></li>
          <li><a href="burgerwrap" className="no-underline1">Burger/Wrap</a></li>
        </ul>
      </div>
      <div className={`dropdown-list ${menuListVisible ? 'show' : ''}`} id="menuList">
        <ul>
          <li><a href="menu">Menu</a></li>
          <li><a href="contact">Contact Us</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;