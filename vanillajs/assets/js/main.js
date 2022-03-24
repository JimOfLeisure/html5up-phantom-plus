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
  enhanceForms();
  enableMenu(body);
  removePreload(body);
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
  //   Wait 100ms to remove is-preload to ensure DOM has had time to update
  setTimeout(() => body.classList.remove('is-preload'), 100);
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
  const menuMove = {
    hide: () => body.classList.remove('is-menu-visible'),
    show: () => body.classList.add('is-menu-visible'),
    toggle: () => body.classList.toggle('is-menu-visible'),
  };

  // Not sure what the $menu._lock bit is about in original
  // Appears to only act every other invocation, but maybe
  // It means something different in jQuery
  // Will try without the lock stuff

  // The original script moves #menu to the bottom of body
  // why though?
  //   Ok, the styles only work right when it's down there
  //   Not sure why it's not just there in the first place
  body.appendChild(menu);

  // This adds the animated X to close the menu
  const close = document.createElement('a');
  close.href = '#menu';
  close.classList.add('close');
  close.innerText = 'Close';
  menu.appendChild(close);

  // Add menu toggle to appropriate link targets
  Array.from(document.querySelectorAll('[href="#menu"]')).forEach(el =>
    el.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      menuMove.toggle();
    })
  );

  // Prevents unhandled clicks in #menu from propagating to body to close menu
  menu.addEventListener('click', event => {
    event.stopPropagation();
    // The original code on link click stops propagation and changes the
    // location after a delay. I'm not gonna do that.
  });

  body.addEventListener('click', event => {
    menuMove.hide();
  });

  // Close menu on ESC key pressed
  body.addEventListener('keydown', event => {
    if (event.keyCode === 27) {
      menuMove.hide();
    }
  });
}
