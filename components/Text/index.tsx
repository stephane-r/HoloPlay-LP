import Navigation from "../Navigation";

interface Props {
  color?: string;
}

const Text = ({ color = "#303133", children }) => (
  <>
    <p className="text">{children}</p>
    <style jsx>{`
      .text {
        color: ${color};
        line-height: 1.8;
        margin: 0;
      }
    `}</style>
  </>
);

export default Text;
