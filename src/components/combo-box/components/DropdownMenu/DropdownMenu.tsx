import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

interface DropdownMenuI {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  setIsFocus: (isFocus: boolean) => void;
}

const DropdownMenu: React.FC<DropdownMenuI> = ({
  options,
  value,
  onChange,
  setIsFocus
}) => {
  const body = useMemo(() => document.querySelector('body')!, []);

  const changeItem = (e: React.MouseEvent): void => {
    const input = e.target as HTMLElement;
    onChange(input.innerText);
    setIsFocus(false);
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
