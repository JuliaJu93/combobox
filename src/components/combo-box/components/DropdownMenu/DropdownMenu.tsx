import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import getNodeCoordsOnPage from '../../heplers/getNodeCoordsOnPage';
import './styles.scss';

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
  const childrenLength = Array.isArray(children) ? children.length : 1;
  const { x, y, width } = getNodeCoordsOnPage(comboBoxRef, childrenLength);

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
