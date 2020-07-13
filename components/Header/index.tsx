import Navigation from '../Navigation';
import Logo from '../Logo';
import Row from '../Row';

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
        padding: 0 40px;
      }
      .header-container {
        display: flex;
        height: 120px;
        align-items: center;
        width: 100%;
        margin: auto;
      }
    `}</style>
  </>
);

export default Header;
