import React from 'react';
import Menu from './menu';

const Layout = ({ children, menuList }) => (
  <>
    <div className="wrapper">
      {/* <!-- Header --> */}
      <header id="header">
        <div class="inner">
          {/* <!-- Logo --> */}
          <a href="index.html" class="logo">
            <span class="symbol">
              <img src="images/logo.svg" alt="" />
            </span>
            <span class="title">Phantom</span>
          </a>

          {/* <!-- Nav --> */}
          <nav>
            <ul>
              <li>
                <a href="#menu">Menu</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div id="main">
        <div class="inner">{children}</div>
      </div>
      {/* <!-- Footer --> */}
      <footer id="footer">
        <div class="inner">
          <section>
            <h2>Get in touch</h2>
            <form method="post" action="#">
              <div class="fields">
                <div class="field half">
                  <input type="text" name="name" id="name" placeholder="Name" />
                </div>
                <div class="field half">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div class="field">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message"></textarea>
                </div>
              </div>
              <ul class="actions">
                <li>
                  <input type="submit" value="Send" class="primary" />
                </li>
              </ul>
            </form>
          </section>
          <section>
            <h2>Follow</h2>
            <ul class="icons">
              <li>
                <a href="#" class="icon brands style2 fa-twitter">
                  <span class="label">Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" class="icon brands style2 fa-facebook-f">
                  <span class="label">Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" class="icon brands style2 fa-instagram">
                  <span class="label">Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" class="icon brands style2 fa-dribbble">
                  <span class="label">Dribbble</span>
                </a>
              </li>
              <li>
                <a href="#" class="icon brands style2 fa-github">
                  <span class="label">GitHub</span>
                </a>
              </li>
              <li>
                <a href="#" class="icon brands style2 fa-500px">
                  <span class="label">500px</span>
                </a>
              </li>
              <li>
                <a href="#" class="icon solid style2 fa-phone">
                  <span class="label">Phone</span>
                </a>
              </li>
              <li>
                <a href="#" class="icon solid style2 fa-envelope">
                  <span class="label">Email</span>
                </a>
              </li>
            </ul>
          </section>
          <ul class="copyright">
            <li>&copy; Untitled. All rights reserved</li>
            <li>
              Design: <a href="http://html5up.net">HTML5 UP</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
    {/* Menu MUST be outside the wrapper div */}
    <Menu>{menuList}</Menu>
  </>
);

export default Layout;
