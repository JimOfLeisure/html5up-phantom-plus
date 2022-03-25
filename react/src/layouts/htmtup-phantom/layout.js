import React from 'react';
import Menu from './menu';

const Layout = ({ children, menuList }) => (
  <>
    <div className="wrapper">
      <h3>Layout!</h3>
      {children}
    </div>
    {/* Menu MUST be outside the wrapper div */}
    <Menu>{menuList}</Menu>
  </>
);

export default Layout;
