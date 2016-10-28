export default ({ body, title, data }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}base</title>
      </head>

      <body>
        <div id="app">${body}</div>
      </body>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react-dom.js"></script>
      <script src="bundle.js"></script>
    </html>
  `;
};
      // <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
      // <script src="/base/baseComponent.js" type="text/babel"></script>