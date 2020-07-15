import Navigation from "../Navigation";

interface Props {
  color?: string;
  style?: {
    [key: string]: string | number;
  };
}

const Text = ({ color = "#303133", style = {}, children }) => (
  <>
    <p className="text" style={style}>
      {children}
    </p>
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
