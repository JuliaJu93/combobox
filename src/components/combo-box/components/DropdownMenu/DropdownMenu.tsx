import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import ComboBoxI from '../../types';
import './styles.scss';

const DropdownMenu: React.FC<ComboBoxI> = ({ options, value, onChange }) => {
  const body = useMemo(() => document.querySelector('body')!, []);

  const changeItem = (e: React.MouseEvent): void => {
    const input = e.target as HTMLElement;
    onChange(input.innerText);
  };

  const menuItems = options.map((item, i) => (
    <div key={i} role="button" onClick={changeItem}>
      {' '}
      {item}{' '}
    </div>
  ));

  const menuContents = menuItems.length ? menuItems : <div> No options </div>;

  return ReactDOM.createPortal(
    <div className="dropdownMenu"> {menuContents} </div>,
    body
  );
};

export default DropdownMenu;
