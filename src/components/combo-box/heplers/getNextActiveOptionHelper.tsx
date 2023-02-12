import react from 'react';
import btnNameEnum from './../enums/btnNameEnum';

function addScrollToActiveOption(
  dropdownMenuRef: react.RefObject<HTMLUListElement>,
  newActiveOption: number
): void {
  dropdownMenuRef.current?.children[newActiveOption].scrollIntoView({
    block: 'nearest',
    behavior: 'smooth'
  });
}

export default function getNextActiveOptionHelper(
  dropdownMenuRef: react.RefObject<HTMLUListElement>,
  nameBtn: string,
  optionsMaxInd: number,
  activeOptionInd: number | null
): number {
  if (nameBtn === btnNameEnum.ArrowDown) {
    if (activeOptionInd !== null) {
      const newActiveOption =
        optionsMaxInd > activeOptionInd ? activeOptionInd + 1 : 0;
      addScrollToActiveOption(dropdownMenuRef, newActiveOption);
      return newActiveOption;
    }
    return 0;
  }

  const newActiveOption =
    activeOptionInd && activeOptionInd > 0
      ? activeOptionInd - 1
      : optionsMaxInd;
  addScrollToActiveOption(dropdownMenuRef, newActiveOption);
  return newActiveOption;
}
