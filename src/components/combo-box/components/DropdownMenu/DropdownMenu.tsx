import React, { useMemo, useRef } from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import getNodeCoordsOnPage from '../../heplers/getNodeCoordsOnPage';

type DropdownMenuProps = {
  children: React.ReactNode;
  comboBoxRef: useRef<HTMLDivElement>;
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  children,
  comboBoxRef
}: DropdownMenuProps) => {
  const body = useMemo(() => document.querySelector('body')!, []);
  const { x, y, width } = getNodeCoordsOnPage(comboBoxRef);

  return ReactDOM.createPortal(
    <ul style={{ width: width, top: y, left: x }} className="dropdownMenu">
      {' '}
      {children}{' '}
    </ul>,
    body
  );
};

export default DropdownMenu;
