import Navigation from '../Navigation';
import Logo from '../Logo';

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
        padding: 0 20px;
      }
      .header-container {
        display: flex;
        height: 90px;
        align-items: center;
        width: 100%;
        margin: auto;
      }

      @media screen and (min-width: 768px) {
        .header {
          padding: 0 40px;
        }
        .header-container {
          height: 120px;
        }
      }
    `}</style>
  </>
);

export default Header;
