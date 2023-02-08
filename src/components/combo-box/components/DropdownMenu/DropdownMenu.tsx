import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import ComboBoxI from '../../types';
import './styles.scss';

type DropdownMenuProps = Omit<ComboBoxI, 'onChange'>;

const DropdownMenu: React.FC<DropdownMenuProps> = ({ options }) => {
  const body = useMemo(() => document.querySelector('body')!, []);

  const menuItems = options.map((item, i) => <div key={i}> {item} </div>);
  return ReactDOM.createPortal(
    <div className="dropdownMenu"> {menuItems} </div>,
    body
  );
};

export default DropdownMenu;
