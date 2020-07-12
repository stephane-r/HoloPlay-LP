import Navigation from "../Navigation";

const Button = ({ children }) => (
  <>
    <a className="button">{children}</a>
    <style jsx>{`
      .button {
        display: inline-flex;
        background: white;
        border-radius: 6px;
        text-transform: uppercase;
        font-size: 14px;
        font-weight: bold;
        padding: 20px 30px;
      }
    `}</style>
  </>
);

export default Button;
