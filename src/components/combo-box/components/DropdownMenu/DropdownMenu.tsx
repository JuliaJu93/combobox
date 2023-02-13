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
  let root = useMemo(() => document.getElementById('root'), []);

  if (!root) {
    root = document.createElement('div');
    root.setAttribute('id', 'root');
    document.body.appendChild(root);
  }

  const childrenLength = Array.isArray(children) ? children.length : 1;
  const { x, y, width } = getNodeCoordsOnPage(comboBoxRef, childrenLength);

  return ReactDOM.createPortal(
    <ul
      id="portal"
      style={{ width: width, top: y, left: x }}
      ref={dropdownMenuRef}
      className="dropdownMenu"
    >
      {' '}
      {children}{' '}
    </ul>,
    root
  );
};

export default DropdownMenu;
