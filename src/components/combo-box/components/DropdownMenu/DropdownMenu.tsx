import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

interface DropdownMenuI {
  options: string[];
  value: string;
  activeOptionInd: number | null;
  changeItem: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const DropdownMenu: React.FC<DropdownMenuI> = ({
  options,
  value,
  activeOptionInd,
  changeItem
}) => {
  const body = useMemo(() => document.querySelector('body')!, []);

  const menuItems = options.map((item, i) => {
    const itemStyle = activeOptionInd === i ? 'active-item' : '';
    return (
      <div key={i} role="button" onClick={changeItem} className={itemStyle}>
        {item}
      </div>
    );
  });

  const menuContents = menuItems.length ? (
    menuItems
  ) : (
    <div className="no-options-item"> no options </div>
  );

  return ReactDOM.createPortal(
    <div className="dropdownMenu"> {menuContents} </div>,
    body
  );
};

export default DropdownMenu;
