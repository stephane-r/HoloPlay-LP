import Title from "../Title";
import Spacer from "../Spacer";
import Text from "../Text";

interface Props {
  color?: string;
  headingLevel?: string;
  title: string;
  text: string;
  text2?: string;
  style?: {
    [key: string]: string | number;
  };
  children?: React.ReactChild;
}

const SectionHead = ({
  color = "white",
  headingLevel = "h2",
  title,
  text,
  text2,
  style,
  children,
}: Props) => (
  <>
    <header className="header" style={{ textAlign: "center", ...style }}>
      <Title headingLevel={headingLevel} color={color}>
        {title}
      </Title>
      <Spacer height={20} xHeight={40} />
      <Text color={color}>{text}</Text>
      {text2 && (
        <>
          <Spacer height={20} />
          <Text color={color}>{text2}</Text>
        </>
      )}
      {children && children}
    </header>
    <style jsx>{`
      .header {
        max-width: 820px;
        margin: auto;
      }

      @media screen and (max-width: 768px) {
        padding: 0 20px;
      }
    `}</style>
  </>
);

export default SectionHead;
