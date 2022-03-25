import React from 'react';
import ReactDOM from 'react-dom';
import IndexPage from './pages/index';

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

ReactDOM.render(
  <React.StrictMode>
    <IndexPage menuList={menuList}></IndexPage>
  </React.StrictMode>,
  document.getElementById('root')
);
