import React from 'react';
import Layout from '../layouts/htmtup-phantom/layout';
import TileList from '../layouts/htmtup-phantom/tile-list';
import Tile from '../layouts/htmtup-phantom/tile';
import tileData from '../layouts/htmtup-phantom/tile-demo-data';

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
    <TileList>
      {tileData.map(e => (
        <Tile
          className={e.className}
          src={e.src}
          alt={e.alt}
          href={e.href}
          title={e.title}>
          {e.children}
        </Tile>
      ))}
    </TileList>
  </Layout>
);

export default IndexPage;
