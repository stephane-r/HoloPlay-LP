import Title from "../Title";
import Spacer from "../Spacer";
import Text from "../Text";

interface Props {
  color?: string;
  title: string;
  text: string;
}

const SectionHead = ({
  color = "white",
  headingLevel = "h2",
  title,
  text,
  style,
}: Props) => (
  <>
    <header className="header" style={{ textAlign: "center", ...style }}>
      <Title headingLevel={headingLevel} color={color}>
        {title}
      </Title>
      <Spacer height={40} />
      <Text color={color}>{text}</Text>
    </header>
    <style jsx>{`
      .header {
        max-width: 820px;
        margin: auto;
      }
    `}</style>
  </>
);

export default SectionHead;
