import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import getNodeCoordsOnPage from '../../heplers/getNodeCoordsOnPage';

type DropdownMenuProps = {
  children: React.ReactNode;
  comboBoxRef: React.RefObject<HTMLDivElement>;
  dropdownMenuRef: React.RefObject<HTMLUListElement>;
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  children,
  comboBoxRef,
  dropdownMenuRef
}: DropdownMenuProps) => {
  const body = useMemo(() => document.querySelector('body')!, []);
  const { x, y, width } = getNodeCoordsOnPage(comboBoxRef);

  return ReactDOM.createPortal(
    <ul
      style={{ width: width, top: y, left: x }}
      ref={dropdownMenuRef}
      className="dropdownMenu"
    >
      {' '}
      {children}{' '}
    </ul>,
    body
  );
};

export default DropdownMenu;
