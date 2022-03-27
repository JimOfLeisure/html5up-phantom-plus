import React from 'react';

/*
  Props

  className - article class attribute, usually "style1", "style2", etc.
  src - tile image link
  alt - tile image alt text
  href - tile link destination
  title - the title on the tile
  children - the except on the tile, generally <p>A short description</p>

  NOTE: The Tile needs to be inside a TileList
*/

const Tile = ({ className, src, alt, href, title, children }) => (
  <article className={className}>
    <span className="image">
      <img src={src} alt={alt} />
    </span>
    <a href={href}>
      <h2>{title}</h2>
      <div className="content">{children}</div>
    </a>
  </article>
);

export default Tile;
