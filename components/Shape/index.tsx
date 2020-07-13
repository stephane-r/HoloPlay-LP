const Shape = () => (
  <>
    <div className="shape" />
    <style jsx global>{`
      .shape {
        display: none;
        position: absolute;
        bottom: 0;
        right: 0;
        width: 1600px;
        height: 300px;
        background: url('/shape.svg') calc(100% + 300px) calc(100% + 0px)
          no-repeat;
        z-index: 2;
        pointer-events: none;
      }

      @media screen and (min-width: 767px) {
        .shape {
          display: inherit;
        }
      }
    `}</style>
  </>
);

export default Shape;
