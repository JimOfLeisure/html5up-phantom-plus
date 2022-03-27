// A temp script to run in the console to turn the tile list into data

// Array.from(document.querySelectorAll('.tiles > article')).map(e => ;

function extract(e) {
  const img = e.querySelector('span.image > img');
  const out = {
    className: e.className,
    src: img.src,
  };
  return out;
}

extract(document.querySelector('.tiles > article'));
