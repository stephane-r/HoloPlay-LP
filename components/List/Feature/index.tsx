import Text from "../../Text";
import Title from "../../Title";
import { FEATURES_ITEMS } from "../../../data";
import Icon from "../../Icon";

const Features = () => (
  <>
    <ul className="list">
      {FEATURES_ITEMS.map(({ icon, iconSize, title, text }) => (
        <li key={title} className="item">
          <div className="image-container">
            <Icon name={icon} width={iconSize - 10} color="black" />
          </div>
          <Title
            headingLevel="h3"
            style={{ marginTop: 0, marginBottom: 10, color: "black" }}
          >
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
        display: flex;
        align-items: center;
        justify-content: center;
        height: 60px;
      }

      @media screen and (min-width: 600px) {
        .item {
          width: calc(33.33% - 20px);
        }
      }

      @media screen and (min-width: 768px) {
        .item {
          width: calc(25% - 20px);
        }
      }

      @media screen and (min-width: 1150px) {
        .item {
          width: calc(20% - 40px);
          margin: 20px 20px 0;
          padding: 30px;
          padding-bottom: 0;
        }
      }
    `}</style>
  </>
);

export default Features;
