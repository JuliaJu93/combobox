import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

type DropdownMenuProps = {
  children: React.ReactNode;
  width: string;
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  children,
  width
}: DropdownMenuProps) => {
  const body = useMemo(() => document.querySelector('body')!, []);

  return ReactDOM.createPortal(
    <ul style={{ maxWidth: width }} className="dropdownMenu">
      {' '}
      {children}{' '}
    </ul>,
    body
  );
};

export default DropdownMenu;
