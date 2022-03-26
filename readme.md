# A VanillaJS-ified version of [HTML5UP's Phantom theme](https://html5up.net/phantom)

HTML5UP's Phantom theme was published in 2015 and relies on jQuery, browser sniffing, and includes a breakpoints library. I wanted to see if I could use modern vanilla JavaScript and CSS to eliminate the need for the thrid-party libraries. I believe I have succeeded.

I do not consider myself a designer nor do I declare this a proper modern design. Maybe it is, and maybe it isn't. I just wanted to use a freely-available theme and shed unnecessary code. In most cases the changes I made are attempts to replicate the original code's function, not judge, improve, or modernize it.

## Changes from the original

- jQuery code has been replaced with plain "vanilla" JavaScript code
- The theme author's breakpoints library has been removed. I don't believe it was actually doing anything in this theme and suspect it was included as author's boilerplate starter.
- The theme author's browser library was removed, and instead I used `@media(hover: none)` and `@media(hover: hover)` CSS media queries to replace "mobile" / "touch" brower sniffing functions. This is not a perfect function replacement, but for this purpose I think it matches the theme author's intent.
- A util.js collection of jQuery functions was removed, and I can't tell where it's from or that it was doing anything in the first place.
- The original code prevents default handling of anchor links on `#menu` and
  instead waits 350ms and then changes the location. I did not replicate that
  behavior; I'm letting anchor clicks do their default behavior.
- No attempt has been made to support legacy browsers in the updated code.

## Not changed

- Although jQuery is remvoved, the new code still alters the DOM by adding div wrappers to various elements for menu sliding and textarea resizing features. It's possible to replicate this functionality with manually placing the wrappers, but I decided not to try to do that in case anyone wants to try dropping this updated js and css into an existing Phantom site.
- The original code tries to select the textarea contents when tabbing out,
  but it doesn't work. I replicated the attempt, and it doesn't work in the
  same way that the original doesn't.

## To Do

- Fix the `is-touch` replacement styling for \_tiles.scss . It was working before I refactored this repo, and now it's not. I think it broke when I removed the SASS deprecation warnings and rebuilt the css, and I think it's a cascade ordering issue, but I'm not sure.
- See if the \_breakpoints.scss file has anything to do with the breakpoints library I removed. I don't believe there is any cross-js-css activity going on, but I want to be sure I didn't break something.

# Other ports of HTML5UP Phantom

I intend to port this to React and have branches of this repo for new Create React App, Gatsby, and Next.js new project skeletons with the HTML5UP Phantom theme installed.

Here are the currently available completed branches:

- `main` - This branch - The vanilla JS update of the original
- `original` - For conveniends, the original theme is in the `original` branch.
