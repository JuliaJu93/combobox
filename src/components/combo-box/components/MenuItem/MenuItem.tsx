import React from 'react';
import getItemStyleHelper from '../../heplers/getItemStyleHelper';
import './styles.scss';

interface MenuItemI {
  item: string;
  onClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  activeItem: boolean;
  changedItem: boolean;
}

const MenuItem: React.FC<MenuItemI> = ({
  item,
  onClick,
  activeItem,
  changedItem
}): JSX.Element => {
  return (
    <li
      role="MenuitemRadio"
      onClick={onClick}
      className={getItemStyleHelper(activeItem, changedItem)}
    >
      {item}
    </li>
  );
};

export default MenuItem;
