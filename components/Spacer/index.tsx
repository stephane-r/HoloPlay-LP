interface Props {
  height: number;
}

const Spacer = ({ height }: Props) => (
  <>
    <div className="spacer" />
    <style jsx>{`
      .spacer {
        width: 100%;
        height: ${height}px;
      }
    `}</style>
  </>
);

export default Spacer;
