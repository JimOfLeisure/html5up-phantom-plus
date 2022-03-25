import React from 'react';
import Layout from '../layouts/htmtup-phantom/layout';
import TextArea from '../layouts/htmtup-phantom/textarea';
import TileList from '../layouts/htmtup-phantom/tile-list';

const IndexPage = ({ menuList }) => (
  <Layout menuList={menuList}>
    <header>
      <h1>
        This is Phantom, a free, fully responsive site
        <br />
        template designed by <a href="http://html5up.net">HTML5 UP</a>.
      </h1>
      <p>
        Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit
        amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus quis
        venenatis orci lorem ipsum et magna feugiat veroeros aliquam. Lorem
        ipsum dolor sit amet nullam dolore.
      </p>
    </header>
    <TileList></TileList>
  </Layout>
);

export default IndexPage;
