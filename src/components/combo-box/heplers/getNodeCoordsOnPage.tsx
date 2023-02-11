import { useRef } from 'react';

const getNodeCoordsOnPage = (comboBoxRef: useRef<HTMLDivElement>) => {
  const coordinatesCB = comboBoxRef.current.getBoundingClientRect();

  return {
    y: coordinatesCB.top + coordinatesCB.height,
    x: coordinatesCB.left,
    width: coordinatesCB.width
  };
};

export default getNodeCoordsOnPage;
