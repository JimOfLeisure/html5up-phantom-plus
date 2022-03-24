An decently-successful-so-far attempt to eliminate jQuery from
[HTML5UP's Phantom theme](https://html5up.net/phantom).

## Using

I don't yet have a build function set up yet. For now, just copy the
html5up folder to where you want it, then copy the vanillajs folder
over it. They have the same file structure, and the new files will
overwrite the originals. Then you need to run SASS to rebuild and
overwrite the CSS files.

## Status

- Most of the behavior of the original code is now replicated in 80ish lines of actual code without using jQuery or other third-party libraries. (No shade at the original creator; JavaScript and CSS have changed a lot in the 7 years since theme publication.)
- The script _does_ alter the DOM on document ready when run, so if you use a DOM-altering library, either replace that functionality or ensure your library waits to allow this script to alter the DOM before it goes to work. It moves `#menu` to the bottom of the body. (Why though? Seems to be needed for styling, but why is it not there in the first place?) It also adds inner wrapper `div`s to the menu and textareas, presumably for styling/animating.
- I modified CSS to
  use `@media(hover: ...)` instead of using JS to sniff the browser
  type

### Things I haven't gotten to yet

- Am not yet modifying textareas like the original code
  does, so auto-resizing doesn't yet work
- I have not yet tried to
  add a build script for a usable theme package

### Things I don't currently intend to do

If you find that these exclusions create new problems the original code doesn't have, please submit an issue.

- Support legacy browsers: IE is toast. Also the [CSS hover media query](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover) is a fairly recent addition and may leave modern-but-not-up-to-date browsers not detecting touch/mobile for restyling.
- Alter link-in-menu behavior: The original code prevents links from being clicked, waits 350ms and then changes the location with jQuery.
- Port util.js: The original code includes util.js, a jQuery function collection which as far as I can tell is not ever used in this theme.
- Use breakpoints: A call is made to theme creator [@ajlkn's responsive-tools](https://github.com/ajlkn/responsive-tools) to define breakpoints, but no actions or queries are being called on it, so it does nothing in this theme.

## Folder structure

- html5up-phantom - The verbatim theme files from [HTML5UP's Phantom
  theme](https://html5up.net/phantom)
- vanillajs - Same folder
  structure as html5up-phantom, but only includes files changed from
  the original distribution
- dist (untracked by git) - Eventually a
  build script will take the needed files from the original theme and
  the updated files from vanillajs to be a deployable theme, but for
  now I'm just manually copying and/or linking files in there during
  development.
- react ... coming soon?
