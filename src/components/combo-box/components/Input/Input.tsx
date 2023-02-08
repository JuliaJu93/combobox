import React from 'react';
import './styles.scss';

const Input: React.FC = () => {
  return (
    <div className="input">
      <label htmlFor="search" className="input-hiddenLabel">
        Search:
      </label>
      <input
        value={''}
        onChange={() => {}}
        className="input1"
        type="text"
        name=""
        placeholder="Search"
        autoComplete="off"
      />
    </div>
  );
};

export default Input;
