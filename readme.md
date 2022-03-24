An decently-successful-so-far attempt to eliminate jQuery from
[HTML5UP's Phantom theme](https://html5up.net/phantom).

## Using

I don't yet have a build function setup yet. For now, just copy the
html5up folder to where you want it, then copy the vanillajs folder
over it. They have the same file structure, and the new files will
overwrite the originals. Then you need to run SASS to rebuild and
overwrite the CSS files.

## Status

- The menu works!
  - I didn't try to duplicate the \_lock functionality. I'll have
    to figure out what that is doing
  - I did not preventDefault for
    menu anchor links and change location with a setTimeout. Not sure
    what that's about.
- I did not add setTimeOuts for removing the `is-preload` class on
  document ready; I just remove it with no delay
- I modified CSS to
  use `@media(hover: ...)` instead of using JS to sniff the browser
  type

### Things I haven't gotten to yet

- Breakpoints
- The original code is setting breakpoints with a
  library. I don't know if this is actually doing anything, will
  eventually figure it out
- Didn't look to see if util.js needs
  porting
- Am not yet modifying textareas like the original code
  does, so auto-resizing doesn't yet work
- I have not yet tried to
  add a build script for a usable theme package

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
