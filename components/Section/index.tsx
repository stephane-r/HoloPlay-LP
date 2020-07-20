interface Props {
  id?: string;
  style?: {
    [key: string]: string | number;
  };
  children: React.ReactChild | React.ReactChild[];
}

const Section = ({ id, style, children }: Props) => (
  <>
    <section id={id} className="section" style={style}>
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
