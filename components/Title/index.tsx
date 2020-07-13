import Navigation from '../Navigation';

interface Props {
  headingLevel: string;
  color: string;
}

const VALID_HEADING_LEVELS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const Title = ({ headingLevel, color = '#303133', children }: Props) => {
  const safeHeading = headingLevel?.toLowerCase() ?? '';
  const Balise = VALID_HEADING_LEVELS.includes(safeHeading) ? safeHeading : 'p';

  return (
    <>
      <Balise className="title">{children}</Balise>
      <style jsx>{`
        .title {
          color: ${color};
          margin: 0;
        }
        h1.title {
          font-size: 70px;
        }
        h2.title {
          font-size: 50px;
        }
        h3.title {
          font-size: 30px;
        }
      `}</style>
    </>
  );
};

export default Title;
