import Text from '../../Text';
import Title from '../../Title';

const Features = ({ items }) => (
  <>
    <ul className="list">
      {items.map(({ src, size, title, text }) => (
        <li key={title} className="item">
          <div className="image-container">
            <img
              src={process.env.ASSET_PREFIX + src}
              alt={title}
              width={size}
            />
          </div>
          <Title headingLevel="h3" style={{ marginTop: 0, marginBottom: 10 }}>
            {title}
          </Title>
          <Text style={{ fontSize: 14, lineHeight: 1.4 }} color="black">
            {text}
          </Text>
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
        width: calc(50% - 20px);
        background: rgba(255, 255, 255, 0.6);
        border-radius: 6px;
        text-align: center;
        padding: 5px;
        margin: 10px 10px 20px;
      }
      .image-container {
        height: 65ppx;
      }

      @media screen and (min-width: 768px) {
        .item {
          width: calc(33.33% - 40px);
          margin: 20px 20px 0;
          padding: 30px;
        }
      }
    `}</style>
  </>
);

export default Features;
