interface Props {
  style?: {
    [key: string]: string | number;
  };
  children: React.ReactChild | React.ReactChild[];
}

const Section = ({ style, children }: Props) => (
  <>
    <section className="section" style={style}>
      {children}
    </section>
    <style jsx>{`
      .section {
        max-width: 1400px;
        flex: 1;
        margin: auto;
      }
    `}</style>
  </>
);

export default Section;
