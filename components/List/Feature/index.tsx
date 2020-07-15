import Text from "../../Text";

const Features = ({ items }) => (
  <>
    <ul className="list">
      {items.map(({ title, text }) => (
        <li key={title} className="item">
          <h3 style={{ marginTop: 0 }}>{title}</h3>
          <Text color="black">{text}</Text>
        </li>
      ))}
    </ul>
    <style jsx>{`
      .list {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .item {
        width: calc(33.33% - 40px);
        background: rgba(255, 255, 255, 0.6);
        border-radius: 6px;
        text-align: center;
        padding: 30px;
        margin: 20px;
      }
    `}</style>
  </>
);

export default Features;
