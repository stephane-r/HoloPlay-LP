import Navigation from "../Navigation";

const Logo = () => (
  <>
    <div className="logo-container">
      <img
        src={`${process.env.ASSET_PREFIX}/logo-holoplay-white.png`}
        alt="Logo HoloPlay"
        className="logo"
      />
      <div className="logo-text">HoloPlay</div>
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
        flex: 0 0 50px;
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
