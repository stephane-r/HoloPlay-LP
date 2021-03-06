const App = ({ children }) => (
  <>
    <div>{children}</div>
    <style jsx global>{`
      html,
      body {
        min-height: 100vh;
        overflow-x: hidden;
        padding: 0;
        margin: 0;
        font-family: Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
          Droid Sans, Helvetica Neue, sans-serif;
        background-image: linear-gradient(315deg, #5472d3 0%, #002171 95%);
      }

      figure {
        margin: 0;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </>
);

export default App;
