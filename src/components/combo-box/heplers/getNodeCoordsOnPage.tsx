import react from 'react';

function getNodeCoordsOnPage(
  comboBoxRef: react.RefObject<HTMLDivElement>,
  childrenLength: number
) {
  const coordinatesCB = comboBoxRef.current?.getBoundingClientRect() as DOMRect;
  const { left, top, width, height } = coordinatesCB;
  const pageHeight = document.documentElement.scrollHeight;
  let dropdownHeight = 90;

  if (childrenLength > 3) {
    dropdownHeight = 93;
  } else if (childrenLength === 2) {
    dropdownHeight = 60;
  } else if (childrenLength === 1) {
    dropdownHeight = 30;
  }
  const y =
    coordinatesCB.top + dropdownHeight + height > pageHeight
      ? top - dropdownHeight
      : top + height;

  return {
    y,
    x: left,
    width: width
  };
}

export default getNodeCoordsOnPage;
