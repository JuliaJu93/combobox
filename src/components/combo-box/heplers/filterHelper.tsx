import { IOptions } from '../types';

const filterHelper = (
  options: IOptions[],
  filterValue: string | null
): IOptions[] => {
  const filter = filterValue === null ? '' : filterValue;
  return options.filter((el) =>
    el.label.toUpperCase().includes(filter.toUpperCase())
  );
};

export default filterHelper;
