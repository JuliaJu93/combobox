import React from 'react';
import getItemColorStyleHelper from '../../heplers/getItemColorStyleHelper';
import './styles.scss';

interface MenuItemI {
  item: string;
  onClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  activeItem: boolean;
  changedItem: boolean;
  isActiveOption: boolean;
}

const MenuItem: React.FC<MenuItemI> = ({
  item,
  onClick,
  activeItem,
  changedItem,
  isActiveOption
}): JSX.Element => {
  const itemColorStyle = getItemColorStyleHelper(activeItem, changedItem);
  const classNameItem = isActiveOption
    ? itemColorStyle
    : `is-hover ${itemColorStyle}`;
  return (
    <li role="MenuitemRadio" onClick={onClick} className={classNameItem}>
      {item}
    </li>
  );
};

export default MenuItem;
