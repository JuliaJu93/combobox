export default function onKeyDownArrowHelper(
  nameBtn: string,
  options: string[],
  activeOptionInd: number | null
): number | null {
  const optionsMaxInd = options.length - 1;

  switch (nameBtn) {
    case 'ArrowDown':
      if (activeOptionInd || activeOptionInd === 0) {
        return optionsMaxInd > activeOptionInd ? activeOptionInd + 1 : 0;
      }
      return 0;
    case 'ArrowUp':
      if (activeOptionInd || activeOptionInd === 0) {
        return activeOptionInd > 0 ? activeOptionInd - 1 : optionsMaxInd;
      }
      return optionsMaxInd;
    default:
      return activeOptionInd;
  }
}
