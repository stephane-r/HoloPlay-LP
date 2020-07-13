const Main = ({ children }) => (
  <>
    <main className="main">{children}</main>
    <style jsx>{`
      .main {
        display: flex;
        align-items: center;
        min-height: calc(100vh - 200px);
        margin: auto;
        padding: 0 40px;
      }

      @media screen and (max-width: 768px) {
        flex-direction: column;
      }
    `}</style>
  </>
);

export default Main;
