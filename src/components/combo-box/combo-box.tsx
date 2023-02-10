import React, { useEffect, useState, KeyboardEvent } from 'react';
import DropdownMenu from './components/DropdownMenu/DropdownMenu';
import Input from './components/Input/Input';
import onKeyDownArrowHelper from './heplers/onKeyDownArrowHelper';
import ComboBoxI from './types';

export function ComboBox({ value, onChange, options }: ComboBoxI) {
  const [isFocus, setIsFocus] = useState(false);
  const [filterOptions, setFilterOptions] = useState(options);
  const [activeOptionInd, setActiveOptionInd] = useState<number | null>(null);

  useEffect(() => {
    if (value) {
      const activeInd = options.findIndex((el) => el === value);
      activeInd !== -1
        ? setActiveOptionInd(activeInd)
        : setActiveOptionInd(null);
    }
  }, [value]);

  useEffect(() => {
    !value && setActiveOptionInd(null);
  }, [isFocus]);

  const closeDropdownMenu = () => {
    setIsFocus(false);
  };
  const openDropdownMenu = () => {
    setIsFocus(true);
  };

  const onFilter = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    onChange(value);
    const filter = options.filter((el) => el.includes(value));
    setFilterOptions(filter);
  };

  const onKeyDown = (e: KeyboardEvent): void => {
    if (!isFocus) {
      return setIsFocus(true);
    }

    const nameBtn = e.key;

    if (nameBtn === 'Escape') {
      closeDropdownMenu();
    } else if (nameBtn === 'Enter') {
      const activeOption = options.find((el, i) => i === activeOptionInd);
      activeOption && onChange(activeOption);
      closeDropdownMenu();
    } else if (nameBtn === 'ArrowDown' || 'ArrowUp') {
      const newActiveOption = onKeyDownArrowHelper(
        nameBtn,
        options,
        activeOptionInd
      );
      setActiveOptionInd(newActiveOption);
    }
  };

  const onClickInputBtn = () => {
    setIsFocus((prev) => !prev);
  };

  const changeItem = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    const input = e.target as HTMLElement;
    onChange(input.innerText);
    closeDropdownMenu();
  };

  return (
    <>
      <Input
        value={value}
        isFocus={isFocus}
        openDropdownMenu={openDropdownMenu}
        onFilter={onFilter}
        onKeyDown={onKeyDown}
        onClickInputBtn={onClickInputBtn}
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
