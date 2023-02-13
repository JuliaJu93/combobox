import { IOptions } from '../types';

const findLabelHelper = (options: IOptions[], value: string) => {
  return options.find((el) => el.value === value)?.label;
};

export default findLabelHelper;
