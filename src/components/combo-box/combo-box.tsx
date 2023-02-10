import React, { useEffect, useState, KeyboardEvent, useRef } from 'react';
import DropdownMenu from './components/DropdownMenu/DropdownMenu';
import Input from './components/Input/Input';
import onKeyDownArrowHelper from './heplers/onKeyDownArrowHelper';
import btnNameEnum from './enums/btnNameEnum';
import ComboBoxI from './types';
import filterHelper from './heplers/filterHelper';
import getItemStyleHelper from './heplers/getItemStyleHelper';

export function ComboBox({ value, onChange, options }: ComboBoxI) {
  const [isFocus, setIsFocus] = useState(false);
  const [activeOptionInd, setActiveOptionInd] = useState<number | null>(null);
  const [filterValue, setFilterValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setActiveOptionInd(null);
  }, [value, isFocus]);

  const closeDropdownMenu = () => {
    setIsFocus(false);
    inputRef.current?.blur();
  };

  const openDropdownMenu = () => {
    setIsFocus(true);
  };

  const resetOptions = () => {
    closeDropdownMenu();
    setFilterValue('');
  };

  const onFilter = (e: React.ChangeEvent<HTMLInputElement>): void => {
    value && onChange('');
    setFilterValue(e.target.value);
  };

  const onKeyDown = (e: KeyboardEvent): void => {
    if (!isFocus) {
      return setIsFocus(true);
    }

    const nameBtn = e.key;

    if (nameBtn === btnNameEnum.Escape) {
      closeDropdownMenu();
    } else if (nameBtn === btnNameEnum.Enter) {
      const activeOption = options.find((el, i) =>
        activeOptionInd !== null ? i === activeOptionInd : el === filterValue
      );
      activeOption && onChange(activeOption);
      resetOptions();
    } else if (
      nameBtn === btnNameEnum.ArrowDown ||
      nameBtn === btnNameEnum.ArrowUp
    ) {
      const optionsMaxInd = filterHelper(options, filterValue).length - 1;
      const newActiveOption = onKeyDownArrowHelper(
        nameBtn,
        optionsMaxInd,
        activeOptionInd
      );
      setActiveOptionInd(newActiveOption);
    }
  };

  const onClickInputBtn = () => {
    setIsFocus((prev) => !prev);
    !isFocus && inputRef.current?.focus();
  };

  const changeItem = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    const input = e.target as HTMLElement;
    onChange(input.innerText);
    resetOptions();
  };

  const menuItems = filterHelper(options, filterValue).map((el, i) => {
    return (
      <div
        key={i}
        role="button"
        onClick={changeItem}
        className={getItemStyleHelper(activeOptionInd === i, el === value)}
      >
        {el}
      </div>
    );
  });

  const curValue = filterValue || value;

  return (
    <>
      <Input
        value={curValue}
        inputRef={inputRef}
        isFocus={isFocus}
        openDropdownMenu={openDropdownMenu}
        onFilter={onFilter}
        onKeyDown={onKeyDown}
        onClickInputBtn={onClickInputBtn}
      />
      {isFocus && (
        <DropdownMenu>
          {' '}
          {menuItems.length ? (
            menuItems
          ) : (
            <div className="no-options-item"> no options </div>
          )}{' '}
        </DropdownMenu>
      )}
    </>
  );
}
