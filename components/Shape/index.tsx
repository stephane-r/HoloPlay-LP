const Shape = () => (
  <>
    <div className="shape" />
    <style jsx global>{`
      .shape {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url("/shape.svg") calc(100% + 300px) calc(100% + 100px)
          no-repeat;
        z-index: 2;
        pointer-events: none;
      }
    `}</style>
  </>
);

export default Shape;
