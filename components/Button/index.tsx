import Navigation from "../Navigation";

interface Props {
  href: null | string;
}

const Button = ({ href, children }: Props) => (
  <>
    <a className="button" href={href}>
      {children}
    </a>
    <style jsx>{`
      .button {
        display: inline-flex;
        align-items: center;
        height: 60px;
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 6px;
        text-transform: uppercase;
        font-size: 14px;
        text-decoration: none;
        color: white;
        letter-spacing: 1px;
        padding: 0 25px;
        transition: 0.2s;
      }
      .button:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 1);
      }
    `}</style>
  </>
);

export default Button;
