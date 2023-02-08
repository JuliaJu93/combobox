import React from 'react';
import './styles.scss';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  setIsFocus: (isFocus: boolean) => void;
  onFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  setIsFocus,
  onFilter
}) => {
  const onFocus = () => {
    setIsFocus(true);
  };

  const onBlur = () => {
    setIsFocus(false);
  };

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
        placeholder="Search"
        autoComplete="off"
        onFocus={onFocus}
        // onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
