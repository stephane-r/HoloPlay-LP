import Navigation from '../Navigation';

const Logo = () => (
  <>
    <div className="logo-container">
      <div className="logo"></div>
      <div className="logo-text">Youtube Audio Player</div>
    </div>
    <style jsx>{`
      .logo-container {
        display: flex;
        align-items: center;
        font-size: 12px;
        text-transform: uppercase;
        font-weight: bold;
        color: white;
        margin-right: 100px;
      }
      .logo {
        width: 50px;
        height: 50px;
        display: flex;
        background: white;
        border-radius: 50%;
        margin-right: 15px;
      }
    `}</style>
  </>
);

export default Logo;
