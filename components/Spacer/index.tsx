interface Props {
  height: number;
  xHeight?: number;
}

const Spacer = ({ height, xHeight = null }: Props) => (
  <>
    <div className="spacer" />
    <style jsx>{`
      .spacer {
        width: 100%;
        height: ${height}px;
      }

      @media screen and (min-width: 768px) {
        .spacer {
          height: ${xHeight ?? height}px;
        }
      }
    `}</style>
  </>
);

export default Spacer;
