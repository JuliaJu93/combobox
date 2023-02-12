import react from 'react';
import btnNameEnum from './../enums/btnNameEnum';

function addScrollToActiveOption(
  dropdownMenuRef: react.RefObject<HTMLUListElement>,
  newActiveOption: number,
  block: ScrollLogicalPosition
): void {
  dropdownMenuRef.current?.children[newActiveOption].scrollIntoView({
    block: block,
    behavior: 'smooth'
  });
}

export default function getNextActiveOptionHelper(
  dropdownMenuRef: react.RefObject<HTMLUListElement>,
  nameBtn: string,
  optionsMaxInd: number,
  activeOptionInd: number | null
): number {
  let newActiveOption = 0;
  if (nameBtn === btnNameEnum.ArrowDown) {
    if (activeOptionInd || activeOptionInd === 0) {
      newActiveOption =
        optionsMaxInd > activeOptionInd ? activeOptionInd + 1 : 0;
      addScrollToActiveOption(dropdownMenuRef, newActiveOption, 'end');
    }
    return newActiveOption;
  }

  if (activeOptionInd || activeOptionInd === 0) {
    newActiveOption = activeOptionInd > 0 ? activeOptionInd - 1 : optionsMaxInd;
    addScrollToActiveOption(dropdownMenuRef, newActiveOption, 'start');
  }
  return newActiveOption;
}
