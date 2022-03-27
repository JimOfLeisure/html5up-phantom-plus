# HTML5UP's Phantom theme converted to React/Gatsby

I'm not a designer, and I want free decent-looking React sites. HTML5UP has a number of great-looking free themes licensed CC by 3.0, but they tend to use jQuery and are not otherwise ready for React. So this is my first attempt at modifying one to be a nice-looking Gatsby / React starting theme.

## Features and changes from original and my vanillajs port

- Pages are intended to wrap their content in `<Layout />` from layout.js .
- I am new-ish to Gatsby and React, and so I doubt this is a best-practice themeing. My intent was to adapt the original Phantom theme for use with React with few if any opinionated changes.
- The DOM structure altering has been removed, and wrapping divs and the close menu icon are coded into the component jsx.
- For the above reason, a `TextArea` component is provided to implement Phantom theme's `textarea` features of trimming and auto-sizing.
- `is-touch` class removed in my vanillajs port, and `is-menu-visible` for react has been taken out of `body` and put into `#wrapper` and `#menu` in layout.js , and styles adjusted.
- Menu items and demo index tiles are implemented as const arrays; I presume the user will want to use a GraphQL query to pull data from page info or another source. Menu is populated in layout.js , and tiles are populated in the index.js page.
- Note that in the original and my ports, the menu is unopenable if the browser has JavaScript turned off. I would suggest putting critical nav links in one of the bottom panes.
- This repo is just a new Gatsby site with Phantom theme, components, and pages added. You should be able to clone this and start a new site.

## Status

Mostly working well, just minor fixes needed.

## To do

- What to do with noscript.scss ?
- Menu
  - Possibly second copy of menu in footer (otherwise nav is lost if no script)
  - Debounce code isn't working
- Fix TextArea trim on blur and focus
- Figure out how to make TextArea shrink if text height shrinks
- Abolish all the `console.log`s (I'm still using them to figure out debouncing)

# Other ports of HTML5UP Phantom

I intend to port this to React and have branches of this repo for new Create React App, Gatsby, and Next.js new project skeletons with the HTML5UP Phantom theme installed.

Here are the currently available completed branches:

- `main` The vanilla JS update of the original
- `gatsby` - This branch - A new Gatsby site repo with a Phantom-derived theme
- `original` - For convenience, the original theme is in the `original` branch.

<hr>

<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby minimal starter
</h1>

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal starter.

    ```shell
    # create a new Gatsby site using the minimal starter
    npm init gatsby
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-minimal)
