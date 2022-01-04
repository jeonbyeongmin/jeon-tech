import React from 'react'
import PropTypes from 'prop-types'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes} className="light">
        <script
          dangerouslySetInnerHTML={{
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
            })();
            `,
          }}
        />

        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
