import Navigation from "../Navigation";

const Logo = () => (
  <>
    <div className="logo">YAP</div>
    <style jsx>{`
      .logo {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: bold;
        background: white;
        border-radius: 50%;
      }
    `}</style>
  </>
);

export default Logo;
