import React, { useState } from 'react';
import DropdownMenu from './components/DropdownMenu/DropdownMenu';
import Input from './components/Input/Input';
import ComboBoxI from './types';

export function ComboBox({
  value,
  onChange,
  options,
  defaultValue
}: ComboBoxI) {
  const [isFocus, setIsFocus] = useState(false);
  const [filterOptions, setFilterOptions] = useState(options);

  const onFilter = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    onChange(value);
    const filter = options.filter((el) => el.includes(value));
    setFilterOptions(filter);
  };

  return (
    <>
      <Input
        value={value}
        onChange={onChange}
        setIsFocus={setIsFocus}
        onFilter={onFilter}
      />
      {isFocus && (
        <DropdownMenu
          options={filterOptions}
          value={value}
          onChange={onChange}
        />
      )}
    </>
  );
}
