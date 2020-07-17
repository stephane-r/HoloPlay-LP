import Navigation from "../Navigation";

interface Props {
  headingLevel: string;
  color?: string;
  style?: {
    [key: string]: string | number;
  };
  children: React.ReactChild;
}

const VALID_HEADING_LEVELS = ["h1", "h2", "h3", "h4", "h5", "h6"];

const Title = ({
  headingLevel,
  color = "#303133",
  style = {},
  children,
}: Props) => {
  const safeHeading = headingLevel?.toLowerCase() ?? "";
  const Balise = VALID_HEADING_LEVELS.includes(safeHeading) ? safeHeading : "p";

  return (
    <>
      {/* @ts-ignore */}
      <Balise className="title" style={style}>
        {children}
      </Balise>
      <style jsx>{`
        .title {
          color: ${color};
          margin: 0;
        }
        h1.title {
          font-size: 35px;
        }
        h2.title {
          font-size: 25px;
        }
        h3.title {
          font-size: 18px;
        }

        @media screen and (min-width: 641px) {
          h1.title {
            font-size: 60px;
          }
          h2.title {
            font-size: 40px;
          }
          h3.title {
            font-size: 22px;
          }
        }

        @media screen and (min-width: 768px) {
          h1.title {
            font-size: 70px;
          }
          h2.title {
            font-size: 50px;
          }
        }
      `}</style>
    </>
  );
};

export default Title;
