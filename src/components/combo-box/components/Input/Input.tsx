import React, { KeyboardEvent } from 'react';
import Arrow from '../../assets/svg/Arrow';
import './styles.scss';

interface InputProps {
  value: string;
  isFocus: boolean;
  openDropdownMenu: () => void;
  onFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: KeyboardEvent) => void;
  onClickInputBtn: () => void;
}

const Input: React.FC<InputProps> = ({
  value,
  isFocus,
  openDropdownMenu,
  onFilter,
  onKeyDown,
  onClickInputBtn
}) => {
  const arrowStyle = isFocus ? 'rotate-icon_down' : 'rotate-icon_up';
  const inputStyle = isFocus ? 'input input_blue' : 'input input_grey';

  return (
    <div className={inputStyle}>
      <label htmlFor="search" className="input-hiddenLabel">
        Search:
      </label>
      <input
        value={value}
        onChange={onFilter}
        type="text"
        name=""
        placeholder="food"
        autoComplete="off"
        onFocus={openDropdownMenu}
        onKeyDown={onKeyDown}
      />
      <button className={arrowStyle} onClick={onClickInputBtn}>
        <Arrow />
      </button>
    </div>
  );
};

export default Input;
