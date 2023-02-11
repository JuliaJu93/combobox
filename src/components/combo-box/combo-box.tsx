import React, { useEffect, useState, KeyboardEvent, useRef } from 'react';
import DropdownMenu from './components/DropdownMenu/DropdownMenu';
import Input from './components/Input/Input';
import MenuItem from './components/MenuItem/MenuItem';
import NoOptionsItem from './components/NoOptionsItem/NoOptionsItem';
import onKeyDownArrowHelper from './heplers/onKeyDownArrowHelper';
import filterHelper from './heplers/filterHelper';
import btnNameEnum from './enums/btnNameEnum';
import ComboBoxI from './types';

export function ComboBox({
  value,
  onChange,
  options,
  defaultValue = ''
}: ComboBoxI) {
  const [isFocus, setIsFocus] = useState(false);
  const [activeOptionInd, setActiveOptionInd] = useState<number | null>(null);
  const [filterValue, setFilterValue] = useState('');
  const comboBoxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setActiveOptionInd(null);
  }, [value, isFocus]);

  useEffect(() => {
    value && onChange('');
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

  const changeItem = (e: React.MouseEvent<HTMLLIElement, MouseEvent>): void => {
    const input = e.target as HTMLElement;
    onChange(input.innerText);
    resetOptions();
  };

  const menuItems = filterHelper(options, filterValue).map((el, i) => {
    return (
      <MenuItem
        el={el}
        key={i}
        onClick={changeItem}
        activeItem={activeOptionInd === i}
        changeItem={value ? el === value : el === defaultValue}
      />
    );
  });

  const dropdownContent = menuItems.length ? menuItems : <NoOptionsItem />;

  const curValue = filterValue || value || defaultValue;
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
