import React from 'react';
import './styles.scss';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  setIsFocus: (isFocus: boolean) => void;
}

const Input: React.FC<InputProps> = ({ value, onChange, setIsFocus }) => {
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
        onChange={onChange}
        className="input1"
        type="text"
        name=""
        placeholder="Search"
        autoComplete="off"
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
