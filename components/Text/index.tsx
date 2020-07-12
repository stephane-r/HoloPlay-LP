import Navigation from "../Navigation";

const Text = ({ children }) => (
  <>
    <p className="text">{children}</p>
    <style jsx>{`
      .text {
        color: white;
        font-size: 18px;
        margin: 0;
      }
    `}</style>
  </>
);

export default Text;
