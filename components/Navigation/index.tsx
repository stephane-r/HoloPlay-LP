const Navigation = () => (
  <>
    <nav className="nav">
      <a href="" className="nav-link is-active">
        <span className="nav-text">Home</span>
      </a>
      <a href="" className="nav-link">
        about
      </a>
      <a href="" className="nav-link">
        features
      </a>
      <a href="" className="nav-link">
        screenshots
      </a>
      <a href="" className="nav-link">
        contact
      </a>
    </nav>
    <style jsx>{`
      .nav {
        display: flex;
      }
      .nav-link {
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 13px;
        padding-left: 20px;
      }
      .is-active > .nav-text {
        display: block;
        border-bottom: 2px solid currentColor;
        padding-bottom: 4px;
      }
      .nav-link:not(:last-child) {
        padding-right: 20px;
      }
    `}</style>
  </>
);

export default Navigation;
