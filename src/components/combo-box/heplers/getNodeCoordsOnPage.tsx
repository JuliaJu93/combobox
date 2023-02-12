import react from 'react';

const getNodeCoordsOnPage = (comboBoxRef: react.RefObject<HTMLDivElement>) => {
  const coordinatesCB = comboBoxRef.current?.getBoundingClientRect() as DOMRect;
  const { left, top, width, height } = coordinatesCB;

  return {
    y: top + height,
    x: left,
    width: width
  };
};

export default getNodeCoordsOnPage;
