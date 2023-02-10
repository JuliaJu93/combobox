import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

type DropdownMenuProps = {
  children: React.ReactNode;
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  children
}: DropdownMenuProps) => {
  const body = useMemo(() => document.querySelector('body')!, []);

  return ReactDOM.createPortal(
    <div className="dropdownMenu"> {children} </div>,
    body
  );
};

export default DropdownMenu;
