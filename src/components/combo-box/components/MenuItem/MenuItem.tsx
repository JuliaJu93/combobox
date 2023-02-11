import React from 'react';
import getItemStyleHelper from '../../heplers/getItemStyleHelper';
import './styles.scss';

interface MenuItemI {
  el: string;
  onClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  activeItem: boolean;
  changeItem: boolean;
}

const MenuItem: React.FC<MenuItemI> = ({
  el,
  onClick,
  activeItem,
  changeItem
}): JSX.Element => {
  return (
    <li
      role="MenuitemRadio"
      onClick={onClick}
      className={getItemStyleHelper(activeItem, changeItem)}
    >
      {el}
    </li>
  );
};

export default MenuItem;
