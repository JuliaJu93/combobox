import btnNameEnum from './../enums/btnNameEnum';

export default function onKeyDownArrowHelper(
  nameBtn: string,
  optionsMaxInd: number,
  activeOptionInd: number | null
): number | null {
  switch (nameBtn) {
    case btnNameEnum.ArrowDown:
      if (activeOptionInd || activeOptionInd === 0) {
        return optionsMaxInd > activeOptionInd ? activeOptionInd + 1 : 0;
      }
      return 0;
    case btnNameEnum.ArrowUp:
      if (activeOptionInd || activeOptionInd === 0) {
        return activeOptionInd > 0 ? activeOptionInd - 1 : optionsMaxInd;
      }
      return optionsMaxInd;
    default:
      return activeOptionInd;
  }
}
