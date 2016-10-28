export default ({ body, title }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <link rel="stylesheet" href="/home/home.css" />
      </head>

      <body>
        <div id="app">${body}</div>
      </body>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react-dom.js"></script>
      <script src="/bundle.js"></script>
    </html>
  `;
};