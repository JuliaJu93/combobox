import React, { useEffect, useState, KeyboardEvent, useRef } from 'react';
import DropdownMenu from './components/DropdownMenu/DropdownMenu';
import Input from './components/Input/Input';
import MenuItem from './components/MenuItem/MenuItem';
import NoOptionsItem from './components/NoOptionsItem/NoOptionsItem';
import onKeyDownArrowHelper from './heplers/onKeyDownArrowHelper';
import filterHelper from './heplers/filterHelper';
import btnNameEnum from './enums/btnNameEnum';
import { ComboBoxI } from './types';

export function ComboBox({
  value,
  onChange,
  options,
  defaultValue = null
}: ComboBoxI) {
  const [isFocus, setIsFocus] = useState(false);
  const [activeOptionInd, setActiveOptionInd] = useState<number | null>(null);
  const [filterValue, setFilterValue] = useState<string | null>(null);
  const comboBoxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setActiveOptionInd(null);
  }, [value, isFocus]);

  useEffect(() => {
    value && onChange(null);
    const onClick = (e: MouseEvent) =>
      comboBoxRef.current?.contains(e.target as Element) || setIsFocus(false);
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const closeDropdownMenu = () => {
    setIsFocus(false);
    inputRef.current?.blur();
  };

  const openDropdownMenu = () => {
    setIsFocus(true);
  };

  const resetOptions = () => {
    closeDropdownMenu();
    setFilterValue(null);
  };

  const onFilter = (e: React.ChangeEvent<HTMLInputElement>): void => {
    value && onChange(null);
    setFilterValue(e.target.value);
  };

  const onClickInputBtn = () => {
    setIsFocus((prev) => !prev);
    !isFocus && inputRef.current?.focus();
  };

  const changeItem = (e: React.MouseEvent<HTMLLIElement, MouseEvent>): void => {
    const input = e.target as HTMLElement;
    const changeOption = options.find((el) => el.label === input.innerText);
    changeOption && onChange(changeOption);
    resetOptions();
  };

  const menuItemsArr = filterHelper(options, filterValue);

  const menuItems = menuItemsArr.map((el, i) => {
    return (
      <MenuItem
        el={el.label}
        key={i}
        onClick={changeItem}
        activeItem={activeOptionInd === i}
        changeItem={
          value ? el.value === value.value : el.value === defaultValue?.value
        }
      />
    );
  });

  const dropdownContent = menuItems.length ? menuItems : <NoOptionsItem />;

  const onKeyDown = (e: KeyboardEvent): void => {
    if (!isFocus) {
      return setIsFocus(true);
    }

    const nameBtn = e.key;

    if (nameBtn === btnNameEnum.Escape) {
      closeDropdownMenu();
    } else if (nameBtn === btnNameEnum.Enter) {
      const activeOption = menuItemsArr.find((el, i) =>
        activeOptionInd !== null
          ? i === activeOptionInd
          : el.label === filterValue
      );
      activeOption && onChange(activeOption);
      resetOptions();
    } else if (
      nameBtn === btnNameEnum.ArrowDown ||
      nameBtn === btnNameEnum.ArrowUp
    ) {
      const optionsMaxInd = menuItemsArr.length - 1;
      const newActiveOption = onKeyDownArrowHelper(
        nameBtn,
        optionsMaxInd,
        activeOptionInd
      );
      setActiveOptionInd(newActiveOption);
    }
  };

  const curValue =
    filterValue === null
      ? value?.label || defaultValue?.label || ''
      : filterValue;
  const width = '300px';

  return (
    <div ref={comboBoxRef} style={{ maxWidth: width }}>
      <Input
        value={curValue}
        inputRef={inputRef}
        isFocus={isFocus}
        openDropdownMenu={openDropdownMenu}
        onFilter={onFilter}
        onKeyDown={onKeyDown}
        onClickInputBtn={onClickInputBtn}
      />
      {isFocus && <DropdownMenu width={width}>{dropdownContent}</DropdownMenu>}
    </div>
  );
}
