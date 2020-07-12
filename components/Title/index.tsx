import Navigation from "../Navigation";

const Title = ({ children }) => (
  <>
    <h1 className="title">{children}</h1>
    <style jsx>{`
      .title {
        color: white;
        font-size: 70px;
        margin: 0;
      }
    `}</style>
  </>
);

export default Title;
