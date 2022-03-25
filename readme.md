An decently-successful-so-far attempt to eliminate jQuery from
[HTML5UP's Phantom theme](https://html5up.net/phantom).

## Using

I don't yet have a build function set up yet. For now, just copy the
html5up folder to where you want it, then copy the vanillajs folder
over it. They have the same file structure, and the new files will
overwrite the originals. Then you need to run SASS to rebuild and
overwrite the CSS files.

It may also work to (**untested**) take my main.js and \_tiles.scss and replace the originals in an existing Phantom-themed site, but be sure everything is backed up, and do it on a test site first and verify all functionality. You may need to compile all the SASS again after updating with my modified \_tile.scss. And if you wanted you should then be able to remove references to jquery, browser, and breakpoints in the html file script src tags.

## Status

- Most of the behavior of the original code is now replicated in 100ish lines of actual code without using jQuery or other third-party libraries. (No shade at the original creator; JavaScript and CSS have changed a lot in the 7 years since theme publication.)
- The script _does_ alter the DOM on document ready when run, so if you use a DOM-altering library, either replace that functionality or ensure your library waits to allow this script to alter the DOM before it goes to work. It moves `#menu` to the bottom of the body. (Why though? Seems to be needed for styling, but why is it not there in the first place?) It also adds inner wrapper `div`s to the menu and textareas, presumably for styling/animating.
- I am using the `(hover: hover)` and `(hover: none)` media queries instead
  of browser sniffing to choose "mobile" or "touch" devices.
- The original code tries to select the textarea contents when tabbing out,
  but it doesn't work. I replicated the attempt, and it doesn't work in the
  same way that the original doesn't.
- The original code prevents default handling of anchor links on `#menu` and
  instead waits 350ms and then changes the location. I did not replicate that
  behavior; I'm letting anchor clicks do their normal thing.

### Things I haven't gotten to yet

- I have not yet tried to
  add a build script for a usable theme package

### Things I don't currently intend to do

If you find that these exclusions create new problems the original code doesn't have, please submit an issue.

- "Improve" the theme. I'm not sure why JavaScript needs to manipulate the DOM here. It moves the `#menu` to the bottom of the body and adds wrapper divs to certain elements. Part of me wants to purify/simplify that, but I'm not a theme designer, and I intend for this theme to be sharable, and I guess I want it backward-compatible with the original, too, so you could drop my main.js and \_tiles.scss in place of an existing Phantom-themed site and have it work the same. So It will behave the same way, at least for the vanillajs version.
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
