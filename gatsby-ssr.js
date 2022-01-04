/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import { RecoilRoot } from 'recoil'

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    React.createElement('script', {
      key: 0,
      dangerouslySetInnerHTML: {
        __html: `
        (() => {

          let preferredTheme;
          try {
            preferredTheme = localStorage.getItem('color-mode');
          } catch (err) { }

          const setTheme = (newTheme) => {
            window.__theme = newTheme;
            preferredTheme = newTheme;
            document.body.className = newTheme;
          }

          window.__setPreferredTheme = (newTheme) => {
            setTheme(newTheme);
            try {
              localStorage.setItem('color-mode', newTheme);
            } catch (err) {}
          }

          let darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

          darkQuery.addListener(function(e) {
            window.__setPreferredTheme(e.matches ? 'dark' : 'light')
          });

          window.__setPreferredTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));


          console.log(preferredTheme)
          console.log(darkQuery)
        })();

        `,
      },
    }),
  ])
}

export const wrapRootElement = ({ element, props }) => {
  return <RecoilRoot {...props}>{element}</RecoilRoot>
}
