export default ({ body, title, data }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <link rel="stylesheet" href="/read/read.css" />
      </head>

      <body>
        ${data}
        <div id="read">${body}</div>
      </body>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react-dom.js"></script>
      <script src="/read/readComponent.jsx" type="text/babel"></script>
      <script>
        localStorage.setItem('data', '${data}')
      </script>
    </html>
  `;
};