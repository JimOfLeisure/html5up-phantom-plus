import React, { Children } from 'react';
import Menu from './menu';

const menuList = (
  <ul>
    <li>
      <a href="index.html">Home</a>
    </li>
    <li>
      <a href="generic.html">Ipsum veroeros</a>
    </li>
    <li>
      <a href="generic.html">Tempus etiam</a>
    </li>
    <li>
      <a href="generic.html">Consequat dolor</a>
    </li>
    <li>
      <a href="elements.html">Elements</a>
    </li>
  </ul>
);

const Layout = () => (
  <>
    <div className="wrapper">
      <h3>Layout!</h3>
      {/* {Children} */}
    </div>
    {/* Menu MUST be outside the wrapper div */}
    <Menu>{menuList}</Menu>
  </>
);

export default Layout;
