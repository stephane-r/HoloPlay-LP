import Title from '../Title';
import Spacer from '../Spacer';
import Text from '../Text';

interface Props {
  color?: string;
  headingLevel?: string;
  title: string;
  text: string;
  style?: {
    [key: string]: string | number;
  };
}

const SectionHead = ({
  color = 'white',
  headingLevel = 'h2',
  title,
  text,
  style,
  children,
}: Props) => (
  <>
    <header className="header" style={{ textAlign: 'center', ...style }}>
      <Title headingLevel={headingLevel} color={color}>
        {title}
      </Title>
      <Spacer height={20} xHeight={40} />
      <Text color={color}>{text}</Text>
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
