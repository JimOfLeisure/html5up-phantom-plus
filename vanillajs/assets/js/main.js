/*
    Copyright 2022 Jim "JimOfLeisure" Nelson
    Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)

    This file is a vanillajs rewrite of main.js from:
    Phantom by HTML5 UP
    html5up.net | @ajlkn
    Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  defineBreakPoints();
  removePreload(body);
  enhanceForms();
  enableMenu(body);
});

function wrapInner(parent, wrapper, attribute, attributevalue) {
  // This function from https://codepen.io/kenjiroart/pen/qBmONJ
  //   It is meant to replace the functionality of jQuery's $.wrapInner
  if (typeof wrapper === 'string') {
    wrapper = document.createElement(wrapper);
  }
  var div = parent.appendChild(wrapper).setAttribute(attribute, attributevalue);

  while (parent.firstChild !== wrapper) {
    wrapper.appendChild(parent.firstChild);
  }
}

function defineBreakPoints() {
  // Breakpoints.
  //   set breakpoints using 3rd-party library
  //     appears to like media queries
  //     triggers events at screen sizes set by this library
  //     unsure if this project is using any of those events
  // FIXME: skipping for now
}

function removePreload(body) {
  // Play initial animations on page load.
  //   Original theme removes is-preload class from body 100ms after load
  //   Appears to change styling of tiles and hold animations
  body.classList.remove('is-preload');
}

// Touch?
//   Original sets is-touch based on browser detection
//   Will replace that with @media(hover: none) in scss instead

function enhanceForms() {
  // Forms.
  //   This finds one(?) form and then manipulates all the textareas
  //     to allow auto resizing, apparently
  //   It also gets a reference to submit buttons but doesn't seem to use it
  //   It also wraps things in new divs
  // FIXME: Skipping for now
}

function enableMenu(body) {
  // Menu.
  const menu = document.querySelector('#menu');
  wrapInner(menu, 'div', 'class', 'inner');

  // Not sure what the $menu._lock bit is about in original
  // Appears to only act every other invocation, but maybe
  // It means something different in jQuery
  // Will try without the lock stuff
  body.addEventListener('click', event => {
    if (event.target.href.slice(-5) === '#menu') {
      event.preventDefault();
      event.stopPropagation();
      body.classList.toggle('is-menu-visible');
      return;
    }
  });
}
