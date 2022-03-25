import React from 'react';

/*
 *  Menu must be outside the div.wrapper
 *  Make a <ul> of <li> links as the child of Menu
 */

const Menu = ({ children }) => (
  <nav id="menu">
    <div className="inner">
      <nav id="menu">
        <h2>Menu</h2>
        {children}
      </nav>
    </div>
    {/* This is the animated X icon and must be oustisde the div.inner */}
    <a href="#menu" className="close">
      Close
    </a>
  </nav>
);

export default Menu;
