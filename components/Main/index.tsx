const Main = ({ children }) => (
  <>
    <main className="main">{children}</main>
    <style jsx>{`
      .main {
        display: flex;
        align-items: center;
        max-width: 1200px;
        min-height: calc(100vh - 100px);
        margin: auto;
      }
    `}</style>
  </>
);

export default Main;
