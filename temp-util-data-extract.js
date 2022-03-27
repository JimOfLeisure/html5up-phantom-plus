// A temp script to run in the console to turn the tile list into data

function extract(e) {
  const img = e.querySelector('span.image > img');
  const link = e.querySelector('a');
  const heading = e.querySelector('h2');
  const content = e.querySelector('div.content');
  const out = {
    className: e.className,
    src: img.src,
    alt: img.alt,
    href: link.href,
    title: heading.innerHTML, // innerText was affected by the CSS uppercase styling!
    children: content.innerHTML,
  };
  return out;
}

// extract(document.querySelector('.tiles > article'));
let res = Array.from(document.querySelectorAll('.tiles > article')).map(
  extract
);
// document.querySelector('div.wrapper').append(JSON.stringify(res));
