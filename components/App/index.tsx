import Shape from "../Shape";

const App = ({ children }) => (
  <>
    <div>{children}</div>
    <Shape />
    <style jsx global>{`
      html,
      body {
        min-height: 100vh;
        padding: 0;
        margin: 0;
        font-family: Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
          Droid Sans, Helvetica Neue, sans-serif;
        background-image: linear-gradient(315deg, #5472d3 0%, #002171 90%);
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </>
);

export default App;
