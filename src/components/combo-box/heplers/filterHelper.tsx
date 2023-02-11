import { OptionsI } from '../types';

const filterHelper = (
  options: OptionsI[],
  filterValue: string | null
): OptionsI[] => {
  const filter = filterValue === null ? '' : filterValue;
  return options.filter((el) =>
    el.label.toUpperCase().includes(filter.toUpperCase())
  );
};

export default filterHelper;
