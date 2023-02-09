import React from 'react';
import Arrow from '../../assets/svg/Arrow';
import './styles.scss';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  isFocus: boolean;
  setIsFocus: (isFocus: unknown) => void;
  onFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  isFocus,
  setIsFocus,
  onFilter
}) => {
  const onFocus = () => {
    setIsFocus(true);
  };

  const onClickBtn = () => {
    setIsFocus((prev: boolean): boolean => !prev);
  };

  const onBlur = (e) => {
    // setIsFocus(false);
  };

  const arrowStyle = isFocus ? 'rotate-icon_down' : 'rotate-icon_up';

  return (
    <div className="input">
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
        onBlur={onBlur}
      />
      <button className={arrowStyle} onClick={onClickBtn}>
        <Arrow />
      </button>
    </div>
  );
};

export default Input;
