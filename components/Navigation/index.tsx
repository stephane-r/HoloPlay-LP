import useScrollTo from "../../hooks/useScrollTo";

interface Props {
  linkColor?: string;
  linkSpacer?: number;
}

const Navigation = ({ linkColor = "white", linkSpacer = 20 }: Props) => {
  const { scrollTo } = useScrollTo();

  return (
    <>
      <nav className="nav">
        <a onClick={(): void => scrollTo("app")} className="nav-link">
          <span className="nav-text">App</span>
        </a>
        <a onClick={(): void => scrollTo("features")} className="nav-link">
          <span className="nav-text">features</span>
        </a>
        <a onClick={(): void => scrollTo("screenshots")} className="nav-link">
          <span className="nav-text">screenshots</span>
        </a>
        <a onClick={(): void => scrollTo("footer")} className="nav-link">
          <span className="nav-text">contact</span>
        </a>
      </nav>
      <style jsx>{`
        .nav {
          display: flex;
          align-items: center;
          padding-top: 3px;
        }
        .nav-link {
          color: ${linkColor};
          text-decoration: none;
          text-transform: uppercase;
          font-weight: bold;
          font-size: 13px;
          padding-left: ${linkSpacer}px;
          cursor: pointer;
        }
        .nav-text {
          display: block;
          border-bottom: 2px solid transparent;
          padding-bottom: 2px;
          transition: 0.2s;
        }
        .nav-link:hover .nav-text {
          border-color: white;
        }
        .nav-link:not(:last-child) {
          padding-right: 20px;
        }

        @media screen and (max-width: 768px) {
          display: none;
        }
      `}</style>
    </>
  );
};

export default Navigation;
