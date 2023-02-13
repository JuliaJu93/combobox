import React, { useEffect, useState, KeyboardEvent, useRef } from 'react';
import DropdownMenu from './components/DropdownMenu/DropdownMenu';
import Input from './components/Input/Input';
import MenuItem from './components/MenuItem/MenuItem';
import NoOptionsItem from './components/NoOptionsItem/NoOptionsItem';
import getNextActiveOptionHelper from './heplers/getNextActiveOptionHelper';
import filterHelper from './heplers/filterHelper';
import findLabelHelper from './heplers/findLabelHepler';
import btnNameEnum from './enums/btnNameEnum';
import { IComboBox } from './types';

export function ComboBox({
  value,
  onChange,
  options,
  defaultValue = ''
}: IComboBox) {
  const [isFocus, setIsFocus] = useState(false);
  const [activeOptionInd, setActiveOptionInd] = useState<number | null>(null);
  const [filterValue, setFilterValue] = useState<string | null>(null);
  const comboBoxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownMenuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setActiveOptionInd(null);
  }, [value]);

  useEffect(() => {
    setActiveOptionInd(null);
    setFilterValue(null);
  }, [isFocus]);

  useEffect(() => {
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
    setFilterValue(e.target.value);
  };

  const onClickInputBtn = () => {
    setIsFocus((prev) => !prev);
    !isFocus && inputRef.current?.focus();
  };

  const changeItem = (e: React.MouseEvent<HTMLLIElement, MouseEvent>): void => {
    const input = e.target as HTMLElement;
    const changeOption = options.find((el) => el.label === input.innerText);
    changeOption && onChange(changeOption.value);
    resetOptions();
  };

  const menuItemsArr = filterHelper(options, filterValue);

  const menuItems = menuItemsArr.map((el, i) => {
    const activeEl = activeOptionInd === i;
    const changedEl = value ? el.value === value : el.value === defaultValue;

    return (
      <MenuItem
        key={i}
        item={el.label}
        onClick={changeItem}
        activeItem={activeEl}
        changedItem={changedEl}
        isActiveOption={activeOptionInd !== null}
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
      activeOption && onChange(activeOption.value);
      resetOptions();
    } else if (
      nameBtn === btnNameEnum.ArrowDown ||
      nameBtn === btnNameEnum.ArrowUp
    ) {
      e.preventDefault();
      const optionsMaxInd = menuItemsArr.length - 1;
      const newActiveOption = getNextActiveOptionHelper(
        dropdownMenuRef,
        nameBtn,
        optionsMaxInd,
        activeOptionInd
      );
      setActiveOptionInd(newActiveOption);
    }
  };

  const curValue =
    filterValue === null
      ? findLabelHelper(options, value) ||
        findLabelHelper(options, defaultValue) ||
        ''
      : filterValue;

  const width = '300px';

  return (
    <div ref={comboBoxRef} style={{ maxWidth: width, width: '100%' }}>
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
        <DropdownMenu
          comboBoxRef={comboBoxRef}
          dropdownMenuRef={dropdownMenuRef}
        >
          {dropdownContent}
        </DropdownMenu>
      )}
    </div>
  );
}
