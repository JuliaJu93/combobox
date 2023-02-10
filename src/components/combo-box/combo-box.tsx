import React, { useEffect, useState, KeyboardEvent } from 'react';
import DropdownMenu from './components/DropdownMenu/DropdownMenu';
import Input from './components/Input/Input';
import onKeyDownHelper from './heplers/onKeyDownHelper';
import ComboBoxI from './types';

export function ComboBox({ value, onChange, options }: ComboBoxI) {
  const [isFocus, setIsFocus] = useState(false);
  const [filterOptions, setFilterOptions] = useState(options);
  const [activeOptionInd, setActiveOptionInd] = useState<number | null>(null);

  useEffect(() => {
    if (value) {
      const activeInd = options.findIndex((el) => el === value);
      setActiveOptionInd(activeInd);
    }
  }, [value]);

  const onFilter = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    onChange(value);
    const filter = options.filter((el) => el.includes(value));
    setFilterOptions(filter);
  };

  const onKeyDown = (e: KeyboardEvent): void => {
    const newActiveOption = onKeyDownHelper(e.key, options, activeOptionInd);
    setActiveOptionInd(newActiveOption);
  };

  const changeItem = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    const input = e.target as HTMLElement;
    onChange(input.innerText);
    setIsFocus(false);
  };

  return (
    <>
      <Input
        value={value}
        onChange={onChange}
        isFocus={isFocus}
        setIsFocus={setIsFocus}
        onFilter={onFilter}
        onKeyDown={onKeyDown}
      />
      {isFocus && (
        <DropdownMenu
          options={filterOptions}
          value={value}
          activeOptionInd={activeOptionInd}
          onChange={onChange}
          changeItem={changeItem}
        />
      )}
    </>
  );
}
