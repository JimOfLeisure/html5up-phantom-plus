import React from 'react';
import { Helmet } from 'react-helmet';
import { useState } from 'react';

const Layout = ({ children, menuList }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  let menuIsDebouncing = false;
  const menuDebounced = () => {
    if (!menuIsDebouncing) {
      setTimeout(() => (menuIsDebouncing = false), 350);
      menuIsDebouncing = true;
      return true;
    }
    return false;
  };
  const hideMenu = () => menuDebounced() && setMenuVisible(false);
  const showMenu = () => menuDebounced() && setMenuVisible(true);
  const toggleMenu = () => menuDebounced() && setMenuVisible(!menuVisible);

  return (
    <>
      <Helmet
        bodyAttributes={{
          class: ['', 'is-menu-visible'][Number(menuVisible)],
        }}>
        <link rel="stylesheet" href="assets/css/main.css" />
      </Helmet>
      <div className="wrapper">
        {/* <!-- Header --> */}
        <header id="header">
          <div className="inner">
            {/* <!-- Logo --> */}
            <a href="index.html" className="logo">
              <span className="symbol">
                <img src="images/logo.svg" alt="" />
              </span>
              <span className="title">Phantom</span>
            </a>

            {/* <!-- Nav --> */}
            <nav>
              <ul>
                <li>
                  <a href="#menu" onClick={toggleMenu}>
                    Menu
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div id="main">
          <div className="inner">{children}</div>
        </div>
        {/* <!-- Footer --> */}
        <footer id="footer">
          <div className="inner">
            <section>
              <h2>Get in touch</h2>
              <form method="post" action="#">
                <div className="fields">
                  <div className="field half">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="field half">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="field">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"></textarea>
                  </div>
                </div>
                <ul className="actions">
                  <li>
                    <input type="submit" value="Send" className="primary" />
                  </li>
                </ul>
              </form>
            </section>
            <section>
              <h2>Follow</h2>
              <ul className="icons">
                <li>
                  <a href="#" className="icon brands style2 fa-twitter">
                    <span className="label">Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon brands style2 fa-facebook-f">
                    <span className="label">Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon brands style2 fa-instagram">
                    <span className="label">Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon brands style2 fa-dribbble">
                    <span className="label">Dribbble</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon brands style2 fa-github">
                    <span className="label">GitHub</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon brands style2 fa-500px">
                    <span className="label">500px</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon solid style2 fa-phone">
                    <span className="label">Phone</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon solid style2 fa-envelope">
                    <span className="label">Email</span>
                  </a>
                </li>
              </ul>
            </section>
            <ul className="copyright">
              <li>&copy; Untitled. All rights reserved</li>
              <li>
                Design: <a href="http://html5up.net">HTML5 UP</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
      {/* Menu MUST be outside the wrapper div */}
      <nav id="menu">
        <div className="inner">
          <nav id="menu">
            <h2>Menu</h2>
            <ul>
              <li>
                <a href="#">menu</a>
              </li>
              <li>
                <a href="#">menu</a>
              </li>
              <li>
                <a href="#">menu</a>
              </li>
              <li>
                <a href="#">menu</a>
              </li>
            </ul>
          </nav>
        </div>
        {/* This is the animated X icon and must be oustisde the div.inner */}
        <a href="#menu" className="close" onClick={hideMenu}>
          Close
        </a>
      </nav>
    </>
  );
};

export default Layout;
