export default ({ body, title }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <link rel="stylesheet" href="/assets/index.css" />
      </head>

      <body>
        <div id="root">${body}</div>
      </body>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react-dom.js"></script>
      <script src="/assets/hello.jsx" type="text/babel"></script>
    </html>
  `;
};