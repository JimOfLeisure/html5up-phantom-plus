// Let's try vanillajs instead

/*
    Original main.js notes:

    set references to:
    - window
    - body
*/

const body = document.querySelector('body');

/*
    set breakpoints using 3rd-party library
        appears to like media queries
        triggers events at screen sizes set by this library
        unsure if this project is using any of those events
*/

// Skip...not sure if we need this

// Original theme removes is-preload class from body 100ms after load
// Appears to change styling of tiles and hold animations
document.addEventListener('DOMContentLoaded', () =>
  body.classList.remove('is-preload')
);

// Original sets is-touch based on browser detection
// Will replace that with @media(hover: none) in scss instead
