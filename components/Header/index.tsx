import Navigation from "../Navigation";
import Logo from "../Logo";
import Row from "../Row";

const Header = () => (
  <>
    <header className="header">
      <div className="header-container">
        <Logo />
        <Navigation />
      </div>
    </header>
    <style jsx>{`
      .header {
      }
      .header-container {
        display: flex;
        height: 100px;
        align-items: center;
        justify-content: space-between;
        max-width: 1200px;
        width: 100%;
        margin: auto;
      }
    `}</style>
  </>
);

export default Header;
