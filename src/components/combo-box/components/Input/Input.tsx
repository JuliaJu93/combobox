import React, { Dispatch, SetStateAction, KeyboardEvent } from 'react';
import Arrow from '../../assets/svg/Arrow';
import './styles.scss';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  isFocus: boolean;
  setIsFocus: Dispatch<SetStateAction<boolean>>;
  onFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: KeyboardEvent) => void;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  isFocus,
  setIsFocus,
  onFilter,
  onKeyDown
}) => {
  const onFocus = () => {
    setIsFocus(true);
  };

  const onClickBtn = () => {
    setIsFocus((prev) => !prev);
  };

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
        onFocus={onFocus}
        onKeyDown={onKeyDown}
      />
      <button className={arrowStyle} onClick={onClickBtn}>
        <Arrow />
      </button>
    </div>
  );
};

export default Input;
